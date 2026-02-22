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

                            ${dag.points.map((point) => m$2`
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
                <section class="left-column">
                    <${CreateForm} onCreated=${refresh} />

                    ${Object.keys(headMap.value).length > 0 && m$2`
                        <section class="heads-section">
                            <h2>Heads</h2>
                            ${Object.entries(headMap.value).map(([key, hashes]) => m$2`
                                <div class="heads-row" key=${key}>
                                    <span class="node-key">${key}</span>
                                    ${hashes.map((hash) => m$2`
                                        <substrate-button
                                            key=${hash}
                                            class="hash-link head-hash"
                                            onClick=${() => selectHash(hash)}
                                        >
                                            ${hash}
                                        </substrate-button>
                                    `)}
                                </div>
                            `)}
                        </section>
                    `}

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

                <section class="right-column">
                    <${MerkleDag}
                        nodes=${nodes.value}
                        selectedHash=${selectedHash.value}
                        onSelect=${selectHash}
                    />
                </section>
            </div>
        </div>
    `;
};
J(m$2`<${App} />`, document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtREhLcE01UHQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bS9kaXN0L2h0bS5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtL3ByZWFjdC9pbmRleC5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN1YnN0cmF0ZS1zeXN0ZW0vYnV0dG9uL2Rpc3QvaHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vic3RyYXRlLXN5c3RlbS93ZWItY29tcG9uZW50L2Rpc3QvYXR0cmlidXRlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vic3RyYXRlLXN5c3RlbS93ZWItY29tcG9uZW50L2Rpc3QvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vic3RyYXRlLXN5c3RlbS93ZWItY29tcG9uZW50L2Rpc3QvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN1YnN0cmF0ZS1zeXN0ZW0vYnV0dG9uL2Rpc3QvY2xpZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdWJzdHJhdGUtc3lzdGVtL2J1dHRvbi9kaXN0L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcHJlYWN0L3NpZ25hbHMtY29yZS9kaXN0L3NpZ25hbHMtY29yZS5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHByZWFjdC9zaWduYWxzL2Rpc3Qvc2lnbmFscy5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbGV2ZWwtc3VwcG9ydHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbW9kdWxlLWVycm9yL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sZXZlbC10cmFuc2NvZGVyL2xpYi90ZXh0LWVuZGVjLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xldmVsLXRyYW5zY29kZXIvbGliL2VuY29kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xldmVsLXRyYW5zY29kZXIvbGliL2Zvcm1hdHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbGV2ZWwtdHJhbnNjb2Rlci9saWIvZW5jb2RpbmdzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xldmVsLXRyYW5zY29kZXIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9tYXliZS1jb21iaW5lLWVycm9ycy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvY29tbW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9lcnJvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvYWJzdHJhY3QtaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2RlZmF1bHQta3YtaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2RlZmVycmVkLWl0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9wcmVmaXhlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvcHJld3JpdGUtYmF0Y2guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvYWJzdHJhY3QtY2hhaW5lZC1iYXRjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZGVmYXVsdC1jaGFpbmVkLWJhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9ob29rcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZXZlbnQtbW9uaXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZGVmZXJyZWQtcXVldWUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL3JhbmdlLW9wdGlvbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2Fic3RyYWN0LXN1YmxldmVsLWl0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9hYnN0cmFjdC1zdWJsZXZlbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9hYnN0cmFjdC1sZXZlbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLWxldmVsL3V0aWwva2V5LXJhbmdlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbGV2ZWwvdXRpbC9kZXNlcmlhbGl6ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLWxldmVsL2l0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbGV2ZWwvdXRpbC9jbGVhci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLWxldmVsL2luZGV4LmpzIiwiLi4vLi4vc3JjL2Jyb3dzZXIudHMiLCIuLi8uLi9leGFtcGxlL2RiLnRzIiwiLi4vLi4vZXhhbXBsZS9jb21wb25lbnRzL2NyZWF0ZS1mb3JtLnRzIiwiLi4vLi4vZXhhbXBsZS9jb21wb25lbnRzL25vZGUtY2FyZC50cyIsIi4uLy4uL2V4YW1wbGUvY29tcG9uZW50cy9oaXN0b3J5LXBhbmVsLnRzIiwiLi4vLi4vZXhhbXBsZS9jb21wb25lbnRzL21lcmtsZS1kYWcudHMiLCIuLi8uLi9leGFtcGxlL2NvbXBvbmVudHMvYXBwLnRzIiwiLi4vLi4vZXhhbXBsZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsdCxpLHIsbyxlLGYsYyxzLGEsaCxwPXt9LHY9W10seT0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pLGQ9QXJyYXkuaXNBcnJheTtmdW5jdGlvbiB3KG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGcobil7biYmbi5wYXJlbnROb2RlJiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gXyhsLHUsdCl7dmFyIGkscixvLGU9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP2k9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTplW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZS5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTp0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1lW29dJiYoZVtvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIG0obCxlLGkscixudWxsKX1mdW5jdGlvbiBtKG4sdCxpLHIsbyl7dmFyIGU9e3R5cGU6bixwcm9wczp0LGtleTppLHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvLF9faTotMSxfX3U6MH07cmV0dXJuIG51bGw9PW8mJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZSksZX1mdW5jdGlvbiBiKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gayhuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiB4KG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIFMobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP1Mobi5fXyxuLl9faSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP1Mobik6bnVsbH1mdW5jdGlvbiBDKG4pe2lmKG4uX19QJiZuLl9fZCl7dmFyIHU9bi5fX3YsdD11Ll9fZSxpPVtdLHI9W10sbz13KHt9LHUpO28uX192PXUuX192KzEsbC52bm9kZSYmbC52bm9kZShvKSx6KG4uX19QLG8sdSxuLl9fbixuLl9fUC5uYW1lc3BhY2VVUkksMzImdS5fX3U/W3RdOm51bGwsaSxudWxsPT10P1ModSk6dCwhISgzMiZ1Ll9fdSksciksby5fX3Y9dS5fX3Ysby5fXy5fX2tbby5fX2ldPW8sVihpLG8sciksdS5fX2U9dS5fXz1udWxsLG8uX19lIT10JiZNKG8pfX1mdW5jdGlvbiBNKG4pe2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYylyZXR1cm4gbi5fX2U9bi5fX2MuYmFzZT1udWxsLG4uX19rLnNvbWUoZnVuY3Rpb24obCl7aWYobnVsbCE9bCYmbnVsbCE9bC5fX2UpcmV0dXJuIG4uX19lPW4uX19jLmJhc2U9bC5fX2V9KSxNKG4pfWZ1bmN0aW9uICQobil7KCFuLl9fZCYmKG4uX19kPSEwKSYmaS5wdXNoKG4pJiYhSS5fX3IrK3x8ciE9bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoSSl9ZnVuY3Rpb24gSSgpe2Zvcih2YXIgbixsPTE7aS5sZW5ndGg7KWkubGVuZ3RoPmwmJmkuc29ydChlKSxuPWkuc2hpZnQoKSxsPWkubGVuZ3RoLEMobik7SS5fX3I9MH1mdW5jdGlvbiBQKG4sbCx1LHQsaSxyLG8sZSxmLGMscyl7dmFyIGEsaCx5LGQsdyxnLF8sbT10JiZ0Ll9fa3x8dixiPWwubGVuZ3RoO2ZvcihmPUEodSxsLG0sZixiKSxhPTA7YTxiO2ErKyludWxsIT0oeT11Ll9fa1thXSkmJihoPS0xIT15Ll9faSYmbVt5Ll9faV18fHAseS5fX2k9YSxnPXoobix5LGgsaSxyLG8sZSxmLGMscyksZD15Ll9fZSx5LnJlZiYmaC5yZWYhPXkucmVmJiYoaC5yZWYmJkQoaC5yZWYsbnVsbCx5KSxzLnB1c2goeS5yZWYseS5fX2N8fGQseSkpLG51bGw9PXcmJm51bGwhPWQmJih3PWQpLChfPSEhKDQmeS5fX3UpKXx8aC5fX2s9PT15Ll9faz9mPUgoeSxmLG4sXyk6XCJmdW5jdGlvblwiPT10eXBlb2YgeS50eXBlJiZ2b2lkIDAhPT1nP2Y9ZzpkJiYoZj1kLm5leHRTaWJsaW5nKSx5Ll9fdSY9LTcpO3JldHVybiB1Ll9fZT13LGZ9ZnVuY3Rpb24gQShuLGwsdSx0LGkpe3ZhciByLG8sZSxmLGMscz11Lmxlbmd0aCxhPXMsaD0wO2ZvcihuLl9faz1uZXcgQXJyYXkoaSkscj0wO3I8aTtyKyspbnVsbCE9KG89bFtyXSkmJlwiYm9vbGVhblwiIT10eXBlb2YgbyYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbz8oXCJzdHJpbmdcIj09dHlwZW9mIG98fFwibnVtYmVyXCI9PXR5cGVvZiBvfHxcImJpZ2ludFwiPT10eXBlb2Ygb3x8by5jb25zdHJ1Y3Rvcj09U3RyaW5nP289bi5fX2tbcl09bShudWxsLG8sbnVsbCxudWxsLG51bGwpOmQobyk/bz1uLl9fa1tyXT1tKGsse2NoaWxkcmVuOm99LG51bGwsbnVsbCxudWxsKTp2b2lkIDA9PT1vLmNvbnN0cnVjdG9yJiZvLl9fYj4wP289bi5fX2tbcl09bShvLnR5cGUsby5wcm9wcyxvLmtleSxvLnJlZj9vLnJlZjpudWxsLG8uX192KTpuLl9fa1tyXT1vLGY9citoLG8uX189bixvLl9fYj1uLl9fYisxLGU9bnVsbCwtMSE9KGM9by5fX2k9VChvLHUsZixhKSkmJihhLS0sKGU9dVtjXSkmJihlLl9fdXw9MikpLG51bGw9PWV8fG51bGw9PWUuX192PygtMT09YyYmKGk+cz9oLS06aTxzJiZoKyspLFwiZnVuY3Rpb25cIiE9dHlwZW9mIG8udHlwZSYmKG8uX191fD00KSk6YyE9ZiYmKGM9PWYtMT9oLS06Yz09ZisxP2grKzooYz5mP2gtLTpoKyssby5fX3V8PTQpKSk6bi5fX2tbcl09bnVsbDtpZihhKWZvcihyPTA7cjxzO3IrKyludWxsIT0oZT11W3JdKSYmMD09KDImZS5fX3UpJiYoZS5fX2U9PXQmJih0PVMoZSkpLEUoZSxlKSk7cmV0dXJuIHR9ZnVuY3Rpb24gSChuLGwsdSx0KXt2YXIgaSxyO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZSl7Zm9yKGk9bi5fX2sscj0wO2kmJnI8aS5sZW5ndGg7cisrKWlbcl0mJihpW3JdLl9fPW4sbD1IKGlbcl0sbCx1LHQpKTtyZXR1cm4gbH1uLl9fZSE9bCYmKHQmJihsJiZuLnR5cGUmJiFsLnBhcmVudE5vZGUmJihsPVMobikpLHUuaW5zZXJ0QmVmb3JlKG4uX19lLGx8fG51bGwpKSxsPW4uX19lKTtkb3tsPWwmJmwubmV4dFNpYmxpbmd9d2hpbGUobnVsbCE9bCYmOD09bC5ub2RlVHlwZSk7cmV0dXJuIGx9ZnVuY3Rpb24gTChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KGQobik/bi5zb21lKGZ1bmN0aW9uKG4pe0wobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBUKG4sbCx1LHQpe3ZhciBpLHIsbyxlPW4ua2V5LGY9bi50eXBlLGM9bFt1XSxzPW51bGwhPWMmJjA9PSgyJmMuX191KTtpZihudWxsPT09YyYmbnVsbD09ZXx8cyYmZT09Yy5rZXkmJmY9PWMudHlwZSlyZXR1cm4gdTtpZih0PihzPzE6MCkpZm9yKGk9dS0xLHI9dSsxO2k+PTB8fHI8bC5sZW5ndGg7KWlmKG51bGwhPShjPWxbbz1pPj0wP2ktLTpyKytdKSYmMD09KDImYy5fX3UpJiZlPT1jLmtleSYmZj09Yy50eXBlKXJldHVybiBvO3JldHVybi0xfWZ1bmN0aW9uIGoobixsLHUpe1wiLVwiPT1sWzBdP24uc2V0UHJvcGVydHkobCxudWxsPT11P1wiXCI6dSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHkudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEYobixsLHUsdCxpKXt2YXIgcixvO246aWYoXCJzdHlsZVwiPT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuLnN0eWxlLmNzc1RleHQ9dD1cIlwiKSx0KWZvcihsIGluIHQpdSYmbCBpbiB1fHxqKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpdCYmdVtsXT09dFtsXXx8aihuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09bFswXSYmXCJuXCI9PWxbMV0pcj1sIT0obD1sLnJlcGxhY2UoZixcIiQxXCIpKSxvPWwudG9Mb3dlckNhc2UoKSxsPW8gaW4gbnx8XCJvbkZvY3VzT3V0XCI9PWx8fFwib25Gb2N1c0luXCI9PWw/by5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P3Q/dS51PXQudToodS51PWMsbi5hZGRFdmVudExpc3RlbmVyKGwscj9hOnMscikpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/YTpzLHIpO2Vsc2V7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT1pKWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJ3aWR0aFwiIT1sJiZcImhlaWdodFwiIT1sJiZcImhyZWZcIiE9bCYmXCJsaXN0XCIhPWwmJlwiZm9ybVwiIT1sJiZcInRhYkluZGV4XCIhPWwmJlwiZG93bmxvYWRcIiE9bCYmXCJyb3dTcGFuXCIhPWwmJlwiY29sU3BhblwiIT1sJiZcInJvbGVcIiE9bCYmXCJwb3BvdmVyXCIhPWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbD09dXx8ITE9PT11JiZcIi1cIiE9bFs0XT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLFwicG9wb3ZlclwiPT1sJiYxPT11P1wiXCI6dSkpfX1mdW5jdGlvbiBPKG4pe3JldHVybiBmdW5jdGlvbih1KXtpZih0aGlzLmwpe3ZhciB0PXRoaXMubFt1LnR5cGUrbl07aWYobnVsbD09dS50KXUudD1jKys7ZWxzZSBpZih1LnQ8dC51KXJldHVybjtyZXR1cm4gdChsLmV2ZW50P2wuZXZlbnQodSk6dSl9fX1mdW5jdGlvbiB6KG4sdSx0LGkscixvLGUsZixjLHMpe3ZhciBhLGgscCx5LF8sbSxiLFMsQyxNLCQsSSxBLEgsTCxUPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsOzEyOCZ0Ll9fdSYmKGM9ISEoMzImdC5fX3UpLG89W2Y9dS5fX2U9dC5fX2VdKSwoYT1sLl9fYikmJmEodSk7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBUKXRyeXtpZihTPXUucHJvcHMsQz1cInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyLE09KGE9VC5jb250ZXh0VHlwZSkmJmlbYS5fX2NdLCQ9YT9NP00ucHJvcHMudmFsdWU6YS5fXzppLHQuX19jP2I9KGg9dS5fX2M9dC5fX2MpLl9fPWguX19FOihDP3UuX19jPWg9bmV3IFQoUywkKToodS5fX2M9aD1uZXcgeChTLCQpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1HKSxNJiZNLnN1YihoKSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5fX249aSxwPWguX19kPSEwLGguX19oPVtdLGguX3NiPVtdKSxDJiZudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLEMmJm51bGwhPVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz13KHt9LGguX19zKSksdyhoLl9fcyxULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhTLGguX19zKSkpLHk9aC5wcm9wcyxfPWguc3RhdGUsaC5fX3Y9dSxwKUMmJm51bGw9PVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxDJiZudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYoQyYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJlMhPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhTLCQpLHUuX192PT10Ll9fdnx8IWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShTLGguX19zLCQpKXt1Ll9fdiE9dC5fX3YmJihoLnByb3BzPVMsaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSksdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssdS5fX2suc29tZShmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLHYucHVzaC5hcHBseShoLl9faCxoLl9zYiksaC5fc2I9W10saC5fX2gubGVuZ3RoJiZlLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShTLGguX19zLCQpLEMmJm51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxfLG0pfSl9aWYoaC5jb250ZXh0PSQsaC5wcm9wcz1TLGguX19QPW4saC5fX2U9ITEsST1sLl9fcixBPTAsQyloLnN0YXRlPWguX19zLGguX19kPSExLEkmJkkodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSx2LnB1c2guYXBwbHkoaC5fX2gsaC5fc2IpLGguX3NiPVtdO2Vsc2UgZG97aC5fX2Q9ITEsSSYmSSh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3N9d2hpbGUoaC5fX2QmJisrQTwyNSk7aC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9dyh3KHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSxDJiYhcCYmbnVsbCE9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKG09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LF8pKSxIPW51bGwhPWEmJmEudHlwZT09PWsmJm51bGw9PWEua2V5P3EoYS5wcm9wcy5jaGlsZHJlbik6YSxmPVAobixkKEgpP0g6W0hdLHUsdCxpLHIsbyxlLGYsYyxzKSxoLmJhc2U9dS5fX2UsdS5fX3UmPS0xNjEsaC5fX2gubGVuZ3RoJiZlLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCl9Y2F0Y2gobil7aWYodS5fX3Y9bnVsbCxjfHxudWxsIT1vKWlmKG4udGhlbil7Zm9yKHUuX191fD1jPzE2MDoxMjg7ZiYmOD09Zi5ub2RlVHlwZSYmZi5uZXh0U2libGluZzspZj1mLm5leHRTaWJsaW5nO29bby5pbmRleE9mKGYpXT1udWxsLHUuX19lPWZ9ZWxzZXtmb3IoTD1vLmxlbmd0aDtMLS07KWcob1tMXSk7Tih1KX1lbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rLG4udGhlbnx8Tih1KTtsLl9fZShuLHUsdCl9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTpmPXUuX19lPUIodC5fX2UsdSx0LGkscixvLGUsYyxzKTtyZXR1cm4oYT1sLmRpZmZlZCkmJmEodSksMTI4JnUuX191P3ZvaWQgMDpmfWZ1bmN0aW9uIE4obil7biYmKG4uX19jJiYobi5fX2MuX19lPSEwKSxuLl9fayYmbi5fX2suc29tZShOKSl9ZnVuY3Rpb24gVihuLHUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspRCh0W2ldLHRbKytpXSx0WysraV0pO2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gcShuKXtyZXR1cm5cIm9iamVjdFwiIT10eXBlb2Ygbnx8bnVsbD09bnx8bi5fX2I+MD9uOmQobik/bi5tYXAocSk6dyh7fSxuKX1mdW5jdGlvbiBCKHUsdCxpLHIsbyxlLGYsYyxzKXt2YXIgYSxoLHYseSx3LF8sbSxiPWkucHJvcHN8fHAsaz10LnByb3BzLHg9dC50eXBlO2lmKFwic3ZnXCI9PXg/bz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI6XCJtYXRoXCI9PXg/bz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjpvfHwobz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiksbnVsbCE9ZSlmb3IoYT0wO2E8ZS5sZW5ndGg7YSsrKWlmKCh3PWVbYV0pJiZcInNldEF0dHJpYnV0ZVwiaW4gdz09ISF4JiYoeD93LmxvY2FsTmFtZT09eDozPT13Lm5vZGVUeXBlKSl7dT13LGVbYV09bnVsbDticmVha31pZihudWxsPT11KXtpZihudWxsPT14KXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrKTt1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhvLHgsay5pcyYmayksYyYmKGwuX19tJiZsLl9fbSh0LGUpLGM9ITEpLGU9bnVsbH1pZihudWxsPT14KWI9PT1rfHxjJiZ1LmRhdGE9PWt8fCh1LmRhdGE9ayk7ZWxzZXtpZihlPWUmJm4uY2FsbCh1LmNoaWxkTm9kZXMpLCFjJiZudWxsIT1lKWZvcihiPXt9LGE9MDthPHUuYXR0cmlidXRlcy5sZW5ndGg7YSsrKWJbKHc9dS5hdHRyaWJ1dGVzW2FdKS5uYW1lXT13LnZhbHVlO2ZvcihhIGluIGIpdz1iW2FdLFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT92PXc6XCJjaGlsZHJlblwiPT1hfHxhIGluIGt8fFwidmFsdWVcIj09YSYmXCJkZWZhdWx0VmFsdWVcImluIGt8fFwiY2hlY2tlZFwiPT1hJiZcImRlZmF1bHRDaGVja2VkXCJpbiBrfHxGKHUsYSxudWxsLHcsbyk7Zm9yKGEgaW4gayl3PWtbYV0sXCJjaGlsZHJlblwiPT1hP3k9dzpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PWE/aD13OlwidmFsdWVcIj09YT9fPXc6XCJjaGVja2VkXCI9PWE/bT13OmMmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHd8fGJbYV09PT13fHxGKHUsYSx3LGJbYV0sbyk7aWYoaCljfHx2JiYoaC5fX2h0bWw9PXYuX19odG1sfHxoLl9faHRtbD09dS5pbm5lckhUTUwpfHwodS5pbm5lckhUTUw9aC5fX2h0bWwpLHQuX19rPVtdO2Vsc2UgaWYodiYmKHUuaW5uZXJIVE1MPVwiXCIpLFAoXCJ0ZW1wbGF0ZVwiPT10LnR5cGU/dS5jb250ZW50OnUsZCh5KT95Olt5XSx0LGkscixcImZvcmVpZ25PYmplY3RcIj09eD9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjpvLGUsZixlP2VbMF06aS5fX2smJlMoaSwwKSxjLHMpLG51bGwhPWUpZm9yKGE9ZS5sZW5ndGg7YS0tOylnKGVbYV0pO2N8fChhPVwidmFsdWVcIixcInByb2dyZXNzXCI9PXgmJm51bGw9PV8/dS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTpudWxsIT1fJiYoXyE9PXVbYV18fFwicHJvZ3Jlc3NcIj09eCYmIV98fFwib3B0aW9uXCI9PXgmJl8hPWJbYV0pJiZGKHUsYSxfLGJbYV0sbyksYT1cImNoZWNrZWRcIixudWxsIT1tJiZtIT11W2FdJiZGKHUsYSxtLGJbYV0sbykpfXJldHVybiB1fWZ1bmN0aW9uIEQobix1LHQpe3RyeXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fdTtpJiZuLl9fdSgpLGkmJm51bGw9PXV8fChuLl9fdT1uKHUpKX1lbHNlIG4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4sdCl9fWZ1bmN0aW9uIEUobix1LHQpe3ZhciBpLHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKGk9bi5yZWYpJiYoaS5jdXJyZW50JiZpLmN1cnJlbnQhPW4uX19lfHxEKGksbnVsbCx1KSksbnVsbCE9KGk9bi5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPW4uX19rKWZvcihyPTA7cjxpLmxlbmd0aDtyKyspaVtyXSYmRShpW3JdLHUsdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTt0fHxnKG4uX19lKSxuLl9fYz1uLl9fPW4uX19lPXZvaWQgMH1mdW5jdGlvbiBHKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEoodSx0LGkpe3ZhciByLG8sZSxmO3Q9PWRvY3VtZW50JiYodD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLGwuX18mJmwuX18odSx0KSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkpP251bGw6aSYmaS5fX2t8fHQuX19rLGU9W10sZj1bXSx6KHQsdT0oIXImJml8fHQpLl9faz1fKGssbnVsbCxbdV0pLG98fHAscCx0Lm5hbWVzcGFjZVVSSSwhciYmaT9baV06bz9udWxsOnQuZmlyc3RDaGlsZD9uLmNhbGwodC5jaGlsZE5vZGVzKTpudWxsLGUsIXImJmk/aTpvP28uX19lOnQuZmlyc3RDaGlsZCxyLGYpLFYoZSx1LGYpfWZ1bmN0aW9uIEsobixsKXtKKG4sbCxLKX1mdW5jdGlvbiBRKGwsdSx0KXt2YXIgaSxyLG8sZSxmPXcoe30sbC5wcm9wcyk7Zm9yKG8gaW4gbC50eXBlJiZsLnR5cGUuZGVmYXVsdFByb3BzJiYoZT1sLnR5cGUuZGVmYXVsdFByb3BzKSx1KVwia2V5XCI9PW8/aT11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dm9pZCAwPT09dVtvXSYmbnVsbCE9ZT9lW29dOnVbb107cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6dCksbShsLnR5cGUsZixpfHxsLmtleSxyfHxsLnJlZixudWxsKX1mdW5jdGlvbiBSKG4pe2Z1bmN0aW9uIGwobil7dmFyIHUsdDtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PW5ldyBTZXQsKHQ9e30pW2wuX19jXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHR9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1PW51bGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPW4udmFsdWUmJnUuZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fZT0hMCwkKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UuYWRkKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3UmJnUuZGVsZXRlKG4pLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufXJldHVybiBsLl9fYz1cIl9fY0NcIitoKyssbC5fXz1uLGwuUHJvdmlkZXI9bC5fX2w9KGwuQ29uc3VtZXI9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0pLmNvbnRleHRUeXBlPWwsbH1uPXYuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCx1LHQpe2Zvcih2YXIgaSxyLG87bD1sLl9fOylpZigoaT1sLl9fYykmJiFpLl9fKXRyeXtpZigocj1pLmNvbnN0cnVjdG9yKSYmbnVsbCE9ci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJihpLnNldFN0YXRlKHIuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSxvPWkuX19kKSxudWxsIT1pLmNvbXBvbmVudERpZENhdGNoJiYoaS5jb21wb25lbnREaWRDYXRjaChuLHR8fHt9KSxvPWkuX19kKSxvKXJldHVybiBpLl9fRT1pfWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLHQ9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LHgucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9dyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHcoe30sdSksdGhpcy5wcm9wcykpLG4mJncodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksJCh0aGlzKSl9LHgucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSwkKHRoaXMpKX0seC5wcm90b3R5cGUucmVuZGVyPWssaT1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGU9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0sSS5fX3I9MCxmPS8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pLGM9MCxzPU8oITEpLGE9TyghMCksaD0wO2V4cG9ydHt4IGFzIENvbXBvbmVudCxrIGFzIEZyYWdtZW50LFEgYXMgY2xvbmVFbGVtZW50LFIgYXMgY3JlYXRlQ29udGV4dCxfIGFzIGNyZWF0ZUVsZW1lbnQsYiBhcyBjcmVhdGVSZWYsXyBhcyBoLEsgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxKIGFzIHJlbmRlcixMIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwidmFyIG49ZnVuY3Rpb24odCxzLHIsZSl7dmFyIHU7c1swXT0wO2Zvcih2YXIgaD0xO2g8cy5sZW5ndGg7aCsrKXt2YXIgcD1zW2grK10sYT1zW2hdPyhzWzBdfD1wPzE6MixyW3NbaCsrXV0pOnNbKytoXTszPT09cD9lWzBdPWE6ND09PXA/ZVsxXT1PYmplY3QuYXNzaWduKGVbMV18fHt9LGEpOjU9PT1wPyhlWzFdPWVbMV18fHt9KVtzWysraF1dPWE6Nj09PXA/ZVsxXVtzWysraF1dKz1hK1wiXCI6cD8odT10LmFwcGx5KGEsbih0LGEscixbXCJcIixudWxsXSkpLGUucHVzaCh1KSxhWzBdP3NbMF18PTI6KHNbaC0yXT0wLHNbaF09dSkpOmUucHVzaChhKX1yZXR1cm4gZX0sdD1uZXcgTWFwO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpe3ZhciByPXQuZ2V0KHRoaXMpO3JldHVybiByfHwocj1uZXcgTWFwLHQuc2V0KHRoaXMscikpLChyPW4odGhpcyxyLmdldChzKXx8KHIuc2V0KHMscj1mdW5jdGlvbihuKXtmb3IodmFyIHQscyxyPTEsZT1cIlwiLHU9XCJcIixoPVswXSxwPWZ1bmN0aW9uKG4pezE9PT1yJiYobnx8KGU9ZS5yZXBsYWNlKC9eXFxzKlxcblxccyp8XFxzKlxcblxccyokL2csXCJcIikpKT9oLnB1c2goMCxuLGUpOjM9PT1yJiYobnx8ZSk/KGgucHVzaCgzLG4sZSkscj0yKToyPT09ciYmXCIuLi5cIj09PWUmJm4/aC5wdXNoKDQsbiwwKToyPT09ciYmZSYmIW4/aC5wdXNoKDUsMCwhMCxlKTpyPj01JiYoKGV8fCFuJiY1PT09cikmJihoLnB1c2gociwwLGUscykscj02KSxuJiYoaC5wdXNoKHIsbiwwLHMpLHI9NikpLGU9XCJcIn0sYT0wO2E8bi5sZW5ndGg7YSsrKXthJiYoMT09PXImJnAoKSxwKGEpKTtmb3IodmFyIGw9MDtsPG5bYV0ubGVuZ3RoO2wrKyl0PW5bYV1bbF0sMT09PXI/XCI8XCI9PT10PyhwKCksaD1baF0scj0zKTplKz10OjQ9PT1yP1wiLS1cIj09PWUmJlwiPlwiPT09dD8ocj0xLGU9XCJcIik6ZT10K2VbMF06dT90PT09dT91PVwiXCI6ZSs9dDonXCInPT09dHx8XCInXCI9PT10P3U9dDpcIj5cIj09PXQ/KHAoKSxyPTEpOnImJihcIj1cIj09PXQ/KHI9NSxzPWUsZT1cIlwiKTpcIi9cIj09PXQmJihyPDV8fFwiPlwiPT09blthXVtsKzFdKT8ocCgpLDM9PT1yJiYoaD1oWzBdKSxyPWgsKGg9aFswXSkucHVzaCgyLDAscikscj0wKTpcIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcblwiPT09dHx8XCJcXHJcIj09PXQ/KHAoKSxyPTIpOmUrPXQpLDM9PT1yJiZcIiEtLVwiPT09ZSYmKHI9NCxoPWhbMF0pfXJldHVybiBwKCksaH0ocykpLHIpLGFyZ3VtZW50cyxbXSkpLmxlbmd0aD4xP3I6clswXX1cbiIsImltcG9ydHtoIGFzIHIsQ29tcG9uZW50IGFzIG8scmVuZGVyIGFzIHR9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2gscmVuZGVyLENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtpbXBvcnQgZSBmcm9tXCJodG1cIjt2YXIgbT1lLmJpbmQocik7ZXhwb3J0e20gYXMgaHRtbH07XG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaHRtbChhdHRycywgdGV4dENvbnRlbnQpIHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgYXV0b2ZvY3VzLFxuICAgIHRhYmluZGV4LFxuICAgIGRpc2FibGVkLFxuICAgIGNsYXNzZXMsXG4gICAgbmFtZSxcbiAgICBhcmlhTGFiZWxcbiAgfSA9IGF0dHJzO1xuICBjb25zdCBfY2xhc3NlcyA9IG5ldyBTZXQoY2xhc3Nlcyk7XG4gIF9jbGFzc2VzLmFkZChcInN1YnN0cmF0ZS1idXR0b24gYnRuXCIpO1xuICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKF9jbGFzc2VzKTtcbiAgY29uc3QgYnRuUHJvcHMgPSBbXG4gICAgYXJyLmxlbmd0aCA/IGBjbGFzcz1cIiR7YXJyLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKX1cImAgOiBcIlwiLFxuICAgIGRpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogXCJcIixcbiAgICBhdXRvZm9jdXMgPyBcImF1dG9mb2N1c1wiIDogXCJcIixcbiAgICB0eXBlID8gYHR5cGU9XCIke3R5cGV9XCJgIDogXCJcIixcbiAgICBuYW1lID8gYG5hbWU9JHtuYW1lfWAgOiBcIlwiLFxuICAgIHRhYmluZGV4ID8gYHRhYmluZGV4PVwiJHt0YWJpbmRleH1cImAgOiAndGFiaW5kZXg9XCIwXCInLFxuICAgICdyb2xlPVwiYnV0dG9uXCInLFxuICAgIGFyaWFMYWJlbCA/IGBhcmlhLWxhYmVsPVwiJHthcmlhTGFiZWx9XCJgIDogXCJcIixcbiAgICAnYXJpYS1saXZlPVwicG9saXRlXCInXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IGA8c3Vic3RyYXRlLWJ1dHRvbiR7ZGlzYWJsZWQgPyBcIiBkaXNhYmxlZFwiIDogXCJcIn0+XG4gICAgICAgICAgICA8YnV0dG9uICR7YnRuUHJvcHN9PjxzcGFuIGNsYXNzPVwiYnRuLWNvbnRlbnRcIj4ke3RleHRDb250ZW50fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPC9zdWJzdHJhdGUtYnV0dG9uPmAgOiBgPGJ1dHRvbiAke2J0blByb3BzfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWNvbnRlbnRcIj4ke3RleHRDb250ZW50fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+YDtcbn1cbl9fbmFtZShodG1sLCBcImh0bWxcIik7XG5leHBvcnQge1xuICBodG1sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbC5qcy5tYXBcbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5mdW5jdGlvbiB0b0F0dHJpYnV0ZXMoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5yZWR1Y2UoKGFjYywgaykgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gYXR0cnNba107XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIGFjYztcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgaWYgKHZhbHVlKSByZXR1cm4gKGFjYyArIGAgJHtrfWApLnRyaW0oKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGFjYyArIGAgJHtrfT1cIiR7dmFsdWUuam9pbihcIiBcIil9XCJgO1xuICAgIH1cbiAgICByZXR1cm4gKGFjYyArIGAgJHtrfT1cIiR7dmFsdWV9XCJgKS50cmltKCk7XG4gIH0sIFwiXCIpO1xufVxuX19uYW1lKHRvQXR0cmlidXRlcywgXCJ0b0F0dHJpYnV0ZXNcIik7XG5leHBvcnQge1xuICB0b0F0dHJpYnV0ZXNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdHRyaWJ1dGVzLmpzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbmltcG9ydCB7IHRvQXR0cmlidXRlcyB9IGZyb20gXCIuL2F0dHJpYnV0ZXMuanNcIjtcbmZ1bmN0aW9uIGlzUmVnaXN0ZXJlZChlbE5hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxOYW1lKS5jb25zdHJ1Y3RvciAhPT0gd2luZG93LkhUTUxFbGVtZW50O1xufVxuX19uYW1lKGlzUmVnaXN0ZXJlZCwgXCJpc1JlZ2lzdGVyZWRcIik7XG5mdW5jdGlvbiBkZWZpbmUobmFtZSwgZWxlbWVudCkge1xuICBpZiAoIXdpbmRvdykgcmV0dXJuO1xuICBpZiAoIShcImN1c3RvbUVsZW1lbnRzXCIgaW4gd2luZG93KSkgcmV0dXJuO1xuICBpZiAoIWlzUmVnaXN0ZXJlZChuYW1lKSkge1xuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWxlbWVudCk7XG4gIH1cbn1cbl9fbmFtZShkZWZpbmUsIFwiZGVmaW5lXCIpO1xuY29uc3QgcXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xuY29uc3QgcXNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcbmZ1bmN0aW9uIG1hdGNoKGVsLCBzKSB7XG4gIGlmICghZWwubWF0Y2hlcykgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICByZXR1cm4gZWwubWF0Y2hlcyhzKSA/IGVsIDogZWwuY2xvc2VzdChzKTtcbn1cbl9fbmFtZShtYXRjaCwgXCJtYXRjaFwiKTtcbmV4cG9ydCB7XG4gIGRlZmluZSxcbiAgaXNSZWdpc3RlcmVkLFxuICBtYXRjaCxcbiAgcXMsXG4gIHFzYSxcbiAgdG9BdHRyaWJ1dGVzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXBcbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5pbXBvcnQgeyBtYXRjaCBhcyBfbWF0Y2ggfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5jbGFzcyBXZWJDb21wb25lbnQgZXh0ZW5kcyB3aW5kb3cuSFRNTEVsZW1lbnQge1xuICBzdGF0aWMge1xuICAgIF9fbmFtZSh0aGlzLCBcIldlYkNvbXBvbmVudFwiKTtcbiAgfVxuICBzdGF0aWMgVEFHID0gXCJcIjtcbiAgVEFHID0gXCJcIjtcbiAgc3RhdGljIG1hdGNoKGVsKSB7XG4gICAgcmV0dXJuIF9tYXRjaChlbCwgdGhpcy5UQUcpO1xuICB9XG4gIC8qKlxuICAgKiBTdG9yZSBnbG9iYWwgd2lsZGNhcmQgbGlzdGVuZXJzIChsaXN0ZW4gdG8gYWxsIGV2ZW50cylcbiAgICogVHJpZ2dlcmVkIGJ5IEFMTCBldmVudHMgZGlzcGF0Y2hlZCB0aHJvdWdoIHRoaXMgZWxlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dsb2JhbFdpbGRjYXJkTGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgLyoqXG4gICAqIFN0b3JlIG5hbWVzcGFjZWQgd2lsZGNhcmQgbGlzdGVuZXJzIChsaXN0ZW4gdG8gJ2NvbXBvbmVudC1uYW1lOionKVxuICAgKiBUcmlnZ2VyZWQgYnkgZXZlbnRzIGZyb20gZW1pdCgpIHRoYXQgbWF0Y2ggdGhpcyBjb21wb25lbnQncyBuYW1lc3BhY2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9uYW1lc3BhY2VkV2lsZGNhcmRMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnROYW1lKSB7XG4gICAgY29uc3QgQ3JlYXRlZENsYXNzID0gY2xhc3MgZXh0ZW5kcyBXZWJDb21wb25lbnQge1xuICAgICAgc3RhdGljIHtcbiAgICAgICAgX19uYW1lKHRoaXMsIFwiQ3JlYXRlZENsYXNzXCIpO1xuICAgICAgfVxuICAgICAgc3RhdGljIFRBRyA9IGVsZW1lbnROYW1lO1xuICAgICAgVEFHID0gZWxlbWVudE5hbWU7XG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImByZW5kZXJgIHNob3VsZCBiZSBpbXBsZW1lbnRlZCBieSBjaGlsZHJlblwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIENyZWF0ZWRDbGFzcy5kZWZpbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBXZWJDb21wb25lbnQuZGVmaW5lLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBDcmVhdGVkQ2xhc3MuZXZlbnQgPSBmdW5jdGlvbihldlR5cGUpIHtcbiAgICAgIHJldHVybiBXZWJDb21wb25lbnQuZXZlbnQuY2FsbCh0aGlzLCBldlR5cGUpO1xuICAgIH07XG4gICAgcmV0dXJuIENyZWF0ZWRDbGFzcztcbiAgfVxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIGRlZmluZSh0aGlzLlRBRywgdGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIFJ1bnMgd2hlbiB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIERlcGVuZHMgb24gYHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXNgLlxuICAgKlxuICAgKiBTaG91bGQgbmFtZSBtZXRob2RzIGxpa2UgYGhhbmRsZUNoYW5nZV9kaXNhYmxlZGAuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSAgICAgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge3N0cmluZ30gb2xkVmFsdWUgVGhlIG9sZCBhdHRyaWJ1dGUgdmFsdWVcbiAgICogQHBhcmFtICB7c3RyaW5nfSBuZXdWYWx1ZSBUaGUgbmV3IGF0dHJpYnV0ZSB2YWx1ZVxuICAgKi9cbiAgYXN5bmMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzW2BoYW5kbGVDaGFuZ2VfJHtuYW1lfWBdO1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICBhd2FpdCBoYW5kbGVyLmNhbGwodGhpcywgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEVuaGFuY2VkIGFkZEV2ZW50TGlzdGVuZXIgdGhhdCBzdXBwb3J0cyB3aWxkY2FyZHM6XG4gICAqIC0gQ29tcG9uZW50LmV2ZW50KCcqJykgLSBMaXN0ZW4gdG8gYWxsIG5hbWVzcGFjZWQgZXZlbnRzIGZvciB0aGlzXG4gICAqICAgY29tcG9uZW50IChlLmcuLCAnbXktY29tcG9uZW50OionKVxuICAgKiAtICcqJyAtIExpc3RlbiB0byBBTEwgZXZlbnRzIChuYW1lc3BhY2VkIGFuZCBub24tbmFtZXNwYWNlZCwgaW5jbHVkaW5nXG4gICAqICAgbm9ybWFsIERPTSBldmVudHMpXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIC0gRXZlbnQgdHlwZSwgQ29tcG9uZW50LmV2ZW50KCcqJykgZm9yIG5hbWVzcGFjZWQgd2lsZGNhcmQsXG4gICAqICAgb3IgJyonIGZvciBnbG9iYWwgd2lsZGNhcmRcbiAgICogQHBhcmFtIGxpc3RlbmVyIC0gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gb3Igb2JqZWN0XG4gICAqIEBwYXJhbSBvcHRpb25zIC0gRXZlbnQgbGlzdGVuZXIgb3B0aW9uc1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlID09PSBXZWJDb21wb25lbnQuZXZlbnQuY2FsbCh0aGlzLCBcIipcIikpIHtcbiAgICAgIHRoaXMuX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycy5hZGQoeyBsaXN0ZW5lciwgb3B0aW9ucyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiKlwiKSB7XG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMuYWRkKHsgbGlzdGVuZXIsIG9wdGlvbnMgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogTm90aWZ5IG5hbWVzcGFjZWQgd2lsZGNhcmQgbGlzdGVuZXJzIG9mIGFuIGV2ZW50XG4gICAqIE9ubHkgZmlyZXMgZm9yIGV2ZW50cyB0aGF0IG1hdGNoIHRoaXMgY29tcG9uZW50J3MgbmFtZXNwYWNlXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCAtIFRoZSBldmVudCB0byBkaXNwYXRjaCB0byBuYW1lc3BhY2VkIHdpbGRjYXJkIGxpc3RlbmVyc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX25vdGlmeU5hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycyhldmVudCkge1xuICAgIGlmICh0aGlzLl9uYW1lc3BhY2VkV2lsZGNhcmRMaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnROYW1lID0gdGhpcy5UQUc7XG4gICAgaWYgKCFjb21wb25lbnROYW1lIHx8ICFldmVudC50eXBlLnN0YXJ0c1dpdGgoYCR7Y29tcG9uZW50TmFtZX06YCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzLmZvckVhY2goKHsgbGlzdGVuZXIgfSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJFcnJvciBpbiBuYW1lc3BhY2VkIHdpbGRjYXJkIGV2ZW50IGxpc3RlbmVyOlwiLFxuICAgICAgICAgIGVycm9yXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIE5vdGlmeSBnbG9iYWwgd2lsZGNhcmQgbGlzdGVuZXJzIG9mIGFuIGV2ZW50XG4gICAqIEZpcmVzIGZvciBBTEwgZXZlbnRzIGRpc3BhdGNoZWQgdGhyb3VnaCB0aGlzIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IC0gVGhlIGV2ZW50IHRvIGRpc3BhdGNoIHRvIGdsb2JhbCB3aWxkY2FyZCBsaXN0ZW5lcnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ub3RpZnlHbG9iYWxXaWxkY2FyZExpc3RlbmVycyhldmVudCkge1xuICAgIGlmICh0aGlzLl9nbG9iYWxXaWxkY2FyZExpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2dsb2JhbFdpbGRjYXJkTGlzdGVuZXJzLmZvckVhY2goKHsgbGlzdGVuZXIgfSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnbG9iYWwgd2lsZGNhcmQgZXZlbnQgbGlzdGVuZXI6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIHFzKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbiAgcXNhKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH1cbiAgLyoqXG4gICAqIFRha2UgYSBub24tbmFtZXBzYWNlZCBldmVudCBuYW1lLCByZXR1cm4gbmFtZXNwYWNlIGV2ZW50IG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldlR5cGUgVGhlIG5vbi1uYW1lc3BhY2UgZXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBOYW1lc3BhY2VkIGV2ZW50IG5hbWUsIGVnLCBgbXktY29tcG9uZW50OmNsaWNrYFxuICAgKi9cbiAgc3RhdGljIGV2ZW50KGV2VHlwZSkge1xuICAgIHJldHVybiBldmVudE5hbWUodGhpcy5UQUcsIGV2VHlwZSk7XG4gIH1cbiAgLyoqXG4gICAqIEVtaXQgYSBuYW1lc3BhY2VkIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSAobm9uLW5hbWVzcGFjZWQpIGV2ZW50IHR5cGUgc3RyaW5nXG4gICAqIEBwYXJhbSBvcHRzIGBidWJibGVzYCwgYGRldGFpbGAsIGFuZCBgY2FuY2VsYWJsZWAuIERlZmF1bHQgaXNcbiAgICogYHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9YFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGVtaXQodHlwZSwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKHR5cGUgPT09IFwiKlwiKSB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCBlbWl0IHRoZSBsaXRlcmFsIFwiKlwiJyk7XG4gICAgY29uc3QgeyBidWJibGVzID0gdHJ1ZSwgY2FuY2VsYWJsZSA9IHRydWUsIGRldGFpbCB9ID0gb3B0cztcbiAgICBjb25zdCBuYW1lc3BhY2VkVHlwZSA9IGAke3RoaXMuVEFHfToke3R5cGV9YDtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lc3BhY2VkVHlwZSwge1xuICAgICAgYnViYmxlcyxcbiAgICAgIGNhbmNlbGFibGUsXG4gICAgICBkZXRhaWxcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuX25vdGlmeU5hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycyhldmVudCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvKipcbiAgICogT3ZlcnJpZGUgZGlzcGF0Y2hFdmVudCB0byBub3RpZnkgZ2xvYmFsIHdpbGRjYXJkIGxpc3RlbmVyc1xuICAgKiBUaGlzIGVuc3VyZXMgdGhhdCAnKionIGxpc3RlbmVycyBjYXRjaCBBTEwgZXZlbnRzXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCAtIFRoZSBldmVudCB0byBkaXNwYXRjaFxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBldmVudCB3YXMgbm90IGNhbmNlbGxlZFxuICAgKi9cbiAgZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuX25vdGlmeUdsb2JhbFdpbGRjYXJkTGlzdGVuZXJzKGV2ZW50KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGVtaXQgYW4gZXZlbnQsIG5vIG5hbWVzcGFjaW5nLlxuICAgKi9cbiAgZGlzcGF0Y2godHlwZSwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgYnViYmxlczogb3B0cy5idWJibGVzID09PSB2b2lkIDAgPyB0cnVlIDogb3B0cy5idWJibGVzLFxuICAgICAgY2FuY2VsYWJsZTogb3B0cy5jYW5jZWxhYmxlID09PSB2b2lkIDAgPyB0cnVlIDogb3B0cy5jYW5jZWxhYmxlLFxuICAgICAgZGV0YWlsOiBvcHRzLmRldGFpbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG4gIG9uKGV2TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIGNvbnN0IGZ1bGxFdk5hbWUgPSBXZWJDb21wb25lbnQuZXZlbnQuY2FsbCh0aGlzLCBldk5hbWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihmdWxsRXZOYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogRW5oYW5jZWQgcmVtb3ZlRXZlbnRMaXN0ZW5lciB0aGF0IHN1cHBvcnRzIHdpbGRjYXJkczpcbiAgICogLSBDb21wb25lbnQuZXZlbnQoJyonKSAtIFJlbW92ZSBuYW1lc3BhY2VkIHdpbGRjYXJkIGxpc3RlbmVyXG4gICAqIC0gJyonIC0gUmVtb3ZlIGdsb2JhbCB3aWxkY2FyZCBsaXN0ZW5lclxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSAtIEV2ZW50IHR5cGUsIENvbXBvbmVudC5ldmVudCgnKicpIGZvciBuYW1lc3BhY2VkLCBvciAnKidcbiAgICogICBmb3IgZ2xvYmFsXG4gICAqIEBwYXJhbSBsaXN0ZW5lciAtIEV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIG9yIG9iamVjdCB0byByZW1vdmVcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBFdmVudCBsaXN0ZW5lciBvcHRpb25zXG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGUgPT09IFdlYkNvbXBvbmVudC5ldmVudC5jYWxsKHRoaXMsIFwiKlwiKSkge1xuICAgICAgaWYgKGxpc3RlbmVyICYmIHRoaXMuX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycykge1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycykge1xuICAgICAgICAgIGlmIChlbnRyeS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycy5kZWxldGUoZW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIipcIikge1xuICAgICAgaWYgKGxpc3RlbmVyICYmIHRoaXMuX2dsb2JhbFdpbGRjYXJkTGlzdGVuZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5fZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICBpZiAoZW50cnkubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9nbG9iYWxXaWxkY2FyZExpc3RlbmVycy5kZWxldGUoZW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZXZlbnROYW1lKG5hbWVzcGFjZSwgZXZUeXBlKSB7XG4gIHJldHVybiBgJHtuYW1lc3BhY2V9OiR7ZXZUeXBlfWA7XG59XG5fX25hbWUoZXZlbnROYW1lLCBcImV2ZW50TmFtZVwiKTtcbmZ1bmN0aW9uIGlzUmVnaXN0ZXJlZChlbE5hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxOYW1lKS5jb25zdHJ1Y3RvciAhPT0gd2luZG93LkhUTUxFbGVtZW50O1xufVxuX19uYW1lKGlzUmVnaXN0ZXJlZCwgXCJpc1JlZ2lzdGVyZWRcIik7XG5mdW5jdGlvbiBkZWZpbmUobmFtZSwgZWxlbWVudCkge1xuICBpZiAoIXdpbmRvdykgcmV0dXJuO1xuICBpZiAoIShcImN1c3RvbUVsZW1lbnRzXCIgaW4gd2luZG93KSkgcmV0dXJuO1xuICBpZiAoIWlzUmVnaXN0ZXJlZChuYW1lKSkge1xuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWxlbWVudCk7XG4gIH1cbn1cbl9fbmFtZShkZWZpbmUsIFwiZGVmaW5lXCIpO1xuZXhwb3J0IHtcbiAgV2ViQ29tcG9uZW50LFxuICBkZWZpbmUsXG4gIGlzUmVnaXN0ZXJlZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbmltcG9ydCB7IFdlYkNvbXBvbmVudCwgZGVmaW5lIH0gZnJvbSBcIkBzdWJzdHJhdGUtc3lzdGVtL3dlYi1jb21wb25lbnRcIjtcbmNsYXNzIFN1YnN0cmF0ZUJ1dHRvbiBleHRlbmRzIFdlYkNvbXBvbmVudC5jcmVhdGUoXCJzdWJzdHJhdGUtYnV0dG9uXCIpIHtcbiAgc3RhdGljIHtcbiAgICBfX25hbWUodGhpcywgXCJTdWJzdHJhdGVCdXR0b25cIik7XG4gIH1cbiAgLy8gZm9yIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXCJhdXRvZm9jdXNcIiwgXCJkaXNhYmxlZFwiLCBcInNwaW5uaW5nXCJdO1xuICBzdGF0aWMgVEFHID0gXCJzdWJzdHJhdGUtYnV0dG9uXCI7XG4gIF9pc1NwaW5uaW5nO1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIGRlZmluZShTdWJzdHJhdGVCdXR0b24uVEFHLCBTdWJzdHJhdGVCdXR0b24pO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIGlmIChkaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIHRoaXMuYXV0b2ZvY3VzID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIikgIT09IG51bGw7XG4gICAgdGhpcy5faXNTcGlubmluZyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwic3Bpbm5pbmdcIikgIT09IG51bGw7XG4gIH1cbiAgZ2V0IGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uPy5mb3JtO1xuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gISF0aGlzLmJ1dHRvbj8uaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkVmFsdWUpIHtcbiAgICBpZiAoIWRpc2FibGVkVmFsdWUpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJmYWxzZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b24/LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG4gIH1cbiAgZ2V0IHRhYmluZGV4KCkge1xuICAgIGNvbnN0IGkgPSB0aGlzLmJ1dHRvbj8uZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gICAgaWYgKCFpKSByZXR1cm4gMDtcbiAgICByZXR1cm4gcGFyc2VJbnQoaSk7XG4gIH1cbiAgZ2V0IHNwaW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1NwaW5uaW5nO1xuICB9XG4gIHNldCBzcGlubmluZyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uY2xhc3NMaXN0LmFkZChcInNwaW5uaW5nXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJzcGlubmluZ1wiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcInNwaW5uaW5nXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJzcGlubmluZ1wiKTtcbiAgICB9XG4gIH1cbiAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHZhbHVlKTtcbiAgfVxuICBnZXQgYXV0b2ZvY3VzKCkge1xuICAgIHJldHVybiAhIXRoaXMuYnV0dG9uPy5oYXNBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIik7XG4gIH1cbiAgc2V0IGF1dG9mb2N1cyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlKFwiYXV0b2ZvY3VzXCIsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVtb3ZlQXR0cmlidXRlKFwiYXV0b2ZvY3VzXCIpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IGF0dHJpYnV0ZXMgb24gdGhlIGludGVybmFsIGJ1dHRvbiBlbGVtZW50LlxuICAgKi9cbiAgX3NldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShuYW1lLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgZnJvbSBgdGhpc2AgYW5kIGFsc28gYnV0dG9uIGNoaWxkLlxuICAgKi9cbiAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuICBnZXQgYnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gIH1cbiAgLyoqXG4gICAqIEhhbmRsZSAnYXV0b2ZvY3VzJyBhdHRyaWJ1dGUgY2hhbmdlc1xuICAgKiBAc2VlIHtAbGluayBodHRwczovL2dvbWFrZXRoaW5ncy5jb20vaG93LXRvLWRldGVjdC13aGVuLWF0dHJpYnV0ZXMtY2hhbmdlLW9uLWEtd2ViLWNvbXBvbmVudC8jb3JnYW5pemluZy15b3VyLWNvZGUgR28gTWFrZSBUaGluZ3MgYXJ0aWNsZX1cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBvbGRWYWx1ZSBUaGUgb2xkIGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5ld1ZhbHVlIFRoZSBuZXcgYXR0cmlidXRlIHZhbHVlXG4gICAqL1xuICBoYW5kbGVDaGFuZ2VfYXV0b2ZvY3VzKF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIiwgbmV3VmFsdWUpO1xuICB9XG4gIGhhbmRsZUNoYW5nZV9kaXNhYmxlZChfb2xkLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBuZXdWYWx1ZSAhPT0gbnVsbDtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuYnV0dG9uPy5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICBlbHNlIHRoaXMuYnV0dG9uPy5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiICsgbmV3VmFsdWUpO1xuICB9XG4gIGhhbmRsZUNoYW5nZV9zcGlubmluZyhfLCBuZXdWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uY2xhc3NMaXN0LmFkZChcInNwaW5uaW5nXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImFyaWEtYnVzeVwiLCBcInRydWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInNwaW5uaW5nXCIpO1xuICAgICAgdGhpcy5idXR0b24/LmNsYXNzTGlzdC5yZW1vdmUoXCJzcGlubmluZ1wiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIiwgXCJmYWxzZVwiKTtcbiAgICB9XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLl9zZXR1cEtleWJvYXJkSGFuZGxlcnMoKTtcbiAgfVxuICBfc2V0dXBLZXlib2FyZEhhbmRsZXJzKCkge1xuICAgIHRoaXMuYnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5idXR0b24/LmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICB9XG59XG5leHBvcnQge1xuICBTdWJzdHJhdGVCdXR0b25cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwXG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCIuL2h0bWwuanNcIjtcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCJAc3Vic3RyYXRlLXN5c3RlbS93ZWItY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdWJzdHJhdGVCdXR0b24gYXMgU3Vic3RyYXRlQnV0dG9uTGlnaHQgfSBmcm9tIFwiLi9jbGllbnQuanNcIjtcbmNsYXNzIFN1YnN0cmF0ZUJ1dHRvbiBleHRlbmRzIFN1YnN0cmF0ZUJ1dHRvbkxpZ2h0IHtcbiAgc3RhdGljIHtcbiAgICBfX25hbWUodGhpcywgXCJTdWJzdHJhdGVCdXR0b25cIik7XG4gIH1cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBkZWZpbmUoU3Vic3RyYXRlQnV0dG9uLlRBRywgU3Vic3RyYXRlQnV0dG9uKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuX3NldHVwS2V5Ym9hcmRIYW5kbGVycygpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgYXV0b2ZvY3VzLFxuICAgICAgdGFiaW5kZXgsXG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgY29uc3QgYXJpYUxhYmVsID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpO1xuICAgIGNvbnN0IHNwaW5uaW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzcGlubmluZ1wiKSAhPT0gbnVsbDtcbiAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgXCJzdWJzdHJhdGUtYnV0dG9uXCIsXG4gICAgICB0aGlzLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLFxuICAgICAgc3Bpbm5pbmcgPyBcInNwaW5uaW5nXCIgOiBudWxsXG4gICAgXTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5pbm5lckhUTUw7XG4gICAgY29uc3QgYnRuUHJvcHMgPSB7XG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXV0b2ZvY3VzLFxuICAgICAgdGFiaW5kZXgsXG4gICAgICB0eXBlLFxuICAgICAgbmFtZSxcbiAgICAgIGFyaWFMYWJlbFxuICAgIH07XG4gICAgdGhpcy5pbm5lckhUTUwgPSBodG1sKGJ0blByb3BzLCB0ZXh0KTtcbiAgfVxufVxuZGVmaW5lKFwic3Vic3RyYXRlLWJ1dHRvblwiLCBTdWJzdHJhdGVCdXR0b24pO1xuZXhwb3J0IHtcbiAgU3Vic3RyYXRlQnV0dG9uXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9bixlPWMuX19iLGE9Yy5fX3Isdj1jLmRpZmZlZCxsPWMuX19jLG09Yy51bm1vdW50LHM9Yy5fXztmdW5jdGlvbiBwKG4sdCl7Yy5fX2gmJmMuX19oKHIsbixvfHx0KSxvPTA7dmFyIHU9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIG4+PXUuX18ubGVuZ3RoJiZ1Ll9fLnB1c2goe30pLHUuX19bbl19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbz0xLGgoRCxuKX1mdW5jdGlvbiBoKG4sdSxpKXt2YXIgbz1wKHQrKywyKTtpZihvLnQ9biwhby5fX2MmJihvLl9fPVtpP2kodSk6RCh2b2lkIDAsdSksZnVuY3Rpb24obil7dmFyIHQ9by5fX04/by5fX05bMF06by5fX1swXSxyPW8udCh0LG4pO3QhPT1yJiYoby5fX049W3Isby5fX1sxXV0sby5fX2Muc2V0U3RhdGUoe30pKX1dLG8uX19jPXIsIXIuX19mKSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe2lmKCFvLl9fYy5fX0gpcmV0dXJuITA7dmFyIHU9by5fX2MuX19ILl9fLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4gbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFjfHxjLmNhbGwodGhpcyxuLHQscik7dmFyIGk9by5fX2MucHJvcHMhPT1uO3JldHVybiB1LnNvbWUoZnVuY3Rpb24obil7aWYobi5fX04pe3ZhciB0PW4uX19bMF07bi5fXz1uLl9fTixuLl9fTj12b2lkIDAsdCE9PW4uX19bMF0mJihpPSEwKX19KSxjJiZjLmNhbGwodGhpcyxuLHQscil8fGl9O3IuX19mPSEwO3ZhciBjPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlLGU9ci5jb21wb25lbnRXaWxsVXBkYXRlO3IuY29tcG9uZW50V2lsbFVwZGF0ZT1mdW5jdGlvbihuLHQscil7aWYodGhpcy5fX2Upe3ZhciB1PWM7Yz12b2lkIDAsZihuLHQsciksYz11fWUmJmUuY2FsbCh0aGlzLG4sdCxyKX0sci5zaG91bGRDb21wb25lbnRVcGRhdGU9Zn1yZXR1cm4gby5fX058fG8uX199ZnVuY3Rpb24geShuLHUpe3ZhciBpPXAodCsrLDMpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLnU9dSxyLl9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gXyhuLHUpe3ZhciBpPXAodCsrLDQpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLnU9dSxyLl9faC5wdXNoKGkpKX1mdW5jdGlvbiBBKG4pe3JldHVybiBvPTUsVChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gRihuLHQscil7bz02LF8oZnVuY3Rpb24oKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgcj1uKHQoKSk7cmV0dXJuIGZ1bmN0aW9uKCl7bihudWxsKSxyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZyKCl9fWlmKG4pcmV0dXJuIG4uY3VycmVudD10KCksZnVuY3Rpb24oKXtyZXR1cm4gbi5jdXJyZW50PW51bGx9fSxudWxsPT1yP3I6ci5jb25jYXQobikpfWZ1bmN0aW9uIFQobixyKXt2YXIgdT1wKHQrKyw3KTtyZXR1cm4gQyh1Ll9fSCxyKSYmKHUuX189bigpLHUuX19IPXIsdS5fX2g9biksdS5fX31mdW5jdGlvbiBxKG4sdCl7cmV0dXJuIG89OCxUKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIHgobil7dmFyIHU9ci5jb250ZXh0W24uX19jXSxpPXAodCsrLDkpO3JldHVybiBpLmM9bix1PyhudWxsPT1pLl9fJiYoaS5fXz0hMCx1LnN1YihyKSksdS5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBQKG4sdCl7Yy51c2VEZWJ1Z1ZhbHVlJiZjLnVzZURlYnVnVmFsdWUodD90KG4pOm4pfWZ1bmN0aW9uIGIobil7dmFyIHU9cCh0KyssMTApLGk9ZCgpO3JldHVybiB1Ll9fPW4sci5jb21wb25lbnREaWRDYXRjaHx8KHIuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obix0KXt1Ll9fJiZ1Ll9fKG4sdCksaVsxXShuKX0pLFtpWzBdLGZ1bmN0aW9uKCl7aVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gZygpe3ZhciBuPXAodCsrLDExKTtpZighbi5fXyl7Zm9yKHZhciB1PXIuX192O251bGwhPT11JiYhdS5fX20mJm51bGwhPT11Ll9fOyl1PXUuX187dmFyIGk9dS5fX218fCh1Ll9fbT1bMCwwXSk7bi5fXz1cIlBcIitpWzBdK1wiLVwiK2lbMV0rK31yZXR1cm4gbi5fX31mdW5jdGlvbiBqKCl7Zm9yKHZhciBuO249Zi5zaGlmdCgpOyl7dmFyIHQ9bi5fX0g7aWYobi5fX1AmJnQpdHJ5e3QuX19oLnNvbWUoeiksdC5fX2guc29tZShCKSx0Ll9faD1bXX1jYXRjaChyKXt0Ll9faD1bXSxjLl9fZShyLG4uX192KX19fWMuX19iPWZ1bmN0aW9uKG4pe3I9bnVsbCxlJiZlKG4pfSxjLl9fPWZ1bmN0aW9uKG4sdCl7biYmdC5fX2smJnQuX19rLl9fbSYmKG4uX19tPXQuX19rLl9fbSkscyYmcyhuLHQpfSxjLl9fcj1mdW5jdGlvbihuKXthJiZhKG4pLHQ9MDt2YXIgaT0ocj1uLl9fYykuX19IO2kmJih1PT09cj8oaS5fX2g9W10sci5fX2g9W10saS5fXy5zb21lKGZ1bmN0aW9uKG4pe24uX19OJiYobi5fXz1uLl9fTiksbi51PW4uX19OPXZvaWQgMH0pKTooaS5fX2guc29tZSh6KSxpLl9faC5zb21lKEIpLGkuX19oPVtdLHQ9MCkpLHU9cn0sYy5kaWZmZWQ9ZnVuY3Rpb24obil7diYmdihuKTt2YXIgdD1uLl9fYzt0JiZ0Ll9fSCYmKHQuX19ILl9faC5sZW5ndGgmJigxIT09Zi5wdXNoKHQpJiZpPT09Yy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgoaT1jLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fHcpKGopKSx0Ll9fSC5fXy5zb21lKGZ1bmN0aW9uKG4pe24udSYmKG4uX19IPW4udSksbi51PXZvaWQgMH0pKSx1PXI9bnVsbH0sYy5fX2M9ZnVuY3Rpb24obix0KXt0LnNvbWUoZnVuY3Rpb24obil7dHJ5e24uX19oLnNvbWUoeiksbi5fX2g9bi5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxCKG4pfSl9Y2F0Y2gocil7dC5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdD1bXSxjLl9fZShyLG4uX192KX19KSxsJiZsKG4sdCl9LGMudW5tb3VudD1mdW5jdGlvbihuKXttJiZtKG4pO3ZhciB0LHI9bi5fX2M7ciYmci5fX0gmJihyLl9fSC5fXy5zb21lKGZ1bmN0aW9uKG4pe3RyeXt6KG4pfWNhdGNoKG4pe3Q9bn19KSxyLl9fSD12b2lkIDAsdCYmYy5fX2UodCxyLl9fdikpfTt2YXIgaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gdyhuKXt2YXIgdCxyPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpLGsmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHU9c2V0VGltZW91dChyLDM1KTtrJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIHoobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gQihuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24gQyhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBEKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e3EgYXMgdXNlQ2FsbGJhY2sseCBhcyB1c2VDb250ZXh0LFAgYXMgdXNlRGVidWdWYWx1ZSx5IGFzIHVzZUVmZmVjdCxiIGFzIHVzZUVycm9yQm91bmRhcnksZyBhcyB1c2VJZCxGIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsXyBhcyB1c2VMYXlvdXRFZmZlY3QsVCBhcyB1c2VNZW1vLGggYXMgdXNlUmVkdWNlcixBIGFzIHVzZVJlZixkIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsInZhciBpPVN5bWJvbC5mb3IoXCJwcmVhY3Qtc2lnbmFsc1wiKTtmdW5jdGlvbiB0KCl7aWYoIShzPjEpKXt2YXIgaSx0PSExO3doaWxlKHZvaWQgMCE9PWgpe3ZhciBuPWg7aD12b2lkIDA7disrO3doaWxlKHZvaWQgMCE9PW4pe3ZhciByPW4ubztuLm89dm9pZCAwO24uZiY9LTM7aWYoISg4Jm4uZikmJmEobikpdHJ5e24uYygpfWNhdGNoKG4pe2lmKCF0KXtpPW47dD0hMH19bj1yfX12PTA7cy0tO2lmKHQpdGhyb3cgaX1lbHNlIHMtLX1mdW5jdGlvbiBuKGkpe2lmKHM+MClyZXR1cm4gaSgpO3MrKzt0cnl7cmV0dXJuIGkoKX1maW5hbGx5e3QoKX19dmFyIHI9dm9pZCAwO2Z1bmN0aW9uIG8oaSl7dmFyIHQ9cjtyPXZvaWQgMDt0cnl7cmV0dXJuIGkoKX1maW5hbGx5e3I9dH19dmFyIGYsaD12b2lkIDAscz0wLHY9MCx1PTA7ZnVuY3Rpb24gZShpKXtpZih2b2lkIDAhPT1yKXt2YXIgdD1pLm47aWYodm9pZCAwPT09dHx8dC50IT09cil7dD17aTowLFM6aSxwOnIucyxuOnZvaWQgMCx0OnIsZTp2b2lkIDAseDp2b2lkIDAscjp0fTtpZih2b2lkIDAhPT1yLnMpci5zLm49dDtyLnM9dDtpLm49dDtpZigzMiZyLmYpaS5TKHQpO3JldHVybiB0fWVsc2UgaWYoLTE9PT10Lmkpe3QuaT0wO2lmKHZvaWQgMCE9PXQubil7dC5uLnA9dC5wO2lmKHZvaWQgMCE9PXQucCl0LnAubj10Lm47dC5wPXIuczt0Lm49dm9pZCAwO3Iucy5uPXQ7ci5zPXR9cmV0dXJuIHR9fX1mdW5jdGlvbiBkKGksdCl7dGhpcy52PWk7dGhpcy5pPTA7dGhpcy5uPXZvaWQgMDt0aGlzLnQ9dm9pZCAwO3RoaXMuVz1udWxsPT10P3ZvaWQgMDp0LndhdGNoZWQ7dGhpcy5aPW51bGw9PXQ/dm9pZCAwOnQudW53YXRjaGVkO3RoaXMubmFtZT1udWxsPT10P3ZvaWQgMDp0Lm5hbWV9ZC5wcm90b3R5cGUuYnJhbmQ9aTtkLnByb3RvdHlwZS5oPWZ1bmN0aW9uKCl7cmV0dXJuITB9O2QucHJvdG90eXBlLlM9ZnVuY3Rpb24oaSl7dmFyIHQ9dGhpcyxuPXRoaXMudDtpZihuIT09aSYmdm9pZCAwPT09aS5lKXtpLng9bjt0aGlzLnQ9aTtpZih2b2lkIDAhPT1uKW4uZT1pO2Vsc2UgbyhmdW5jdGlvbigpe3ZhciBpO251bGw9PShpPXQuVyl8fGkuY2FsbCh0KX0pfX07ZC5wcm90b3R5cGUuVT1mdW5jdGlvbihpKXt2YXIgdD10aGlzO2lmKHZvaWQgMCE9PXRoaXMudCl7dmFyIG49aS5lLHI9aS54O2lmKHZvaWQgMCE9PW4pe24ueD1yO2kuZT12b2lkIDB9aWYodm9pZCAwIT09cil7ci5lPW47aS54PXZvaWQgMH1pZihpPT09dGhpcy50KXt0aGlzLnQ9cjtpZih2b2lkIDA9PT1yKW8oZnVuY3Rpb24oKXt2YXIgaTtudWxsPT0oaT10LlopfHxpLmNhbGwodCl9KX19fTtkLnByb3RvdHlwZS5zdWJzY3JpYmU9ZnVuY3Rpb24oaSl7dmFyIHQ9dGhpcztyZXR1cm4gbShmdW5jdGlvbigpe3ZhciBuPXQudmFsdWUsbz1yO3I9dm9pZCAwO3RyeXtpKG4pfWZpbmFsbHl7cj1vfX0se25hbWU6XCJzdWJcIn0pfTtkLnByb3RvdHlwZS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9O2QucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWUrXCJcIn07ZC5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9O2QucHJvdG90eXBlLnBlZWs9ZnVuY3Rpb24oKXt2YXIgaT1yO3I9dm9pZCAwO3RyeXtyZXR1cm4gdGhpcy52YWx1ZX1maW5hbGx5e3I9aX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShkLnByb3RvdHlwZSxcInZhbHVlXCIse2dldDpmdW5jdGlvbigpe3ZhciBpPWUodGhpcyk7aWYodm9pZCAwIT09aSlpLmk9dGhpcy5pO3JldHVybiB0aGlzLnZ9LHNldDpmdW5jdGlvbihpKXtpZihpIT09dGhpcy52KXtpZih2PjEwMCl0aHJvdyBuZXcgRXJyb3IoXCJDeWNsZSBkZXRlY3RlZFwiKTt0aGlzLnY9aTt0aGlzLmkrKzt1Kys7cysrO3RyeXtmb3IodmFyIG49dGhpcy50O3ZvaWQgMCE9PW47bj1uLngpbi50Lk4oKX1maW5hbGx5e3QoKX19fX0pO2Z1bmN0aW9uIGMoaSx0KXtyZXR1cm4gbmV3IGQoaSx0KX1mdW5jdGlvbiBhKGkpe2Zvcih2YXIgdD1pLnM7dm9pZCAwIT09dDt0PXQubilpZih0LlMuaSE9PXQuaXx8IXQuUy5oKCl8fHQuUy5pIT09dC5pKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIGwoaSl7Zm9yKHZhciB0PWkuczt2b2lkIDAhPT10O3Q9dC5uKXt2YXIgbj10LlMubjtpZih2b2lkIDAhPT1uKXQucj1uO3QuUy5uPXQ7dC5pPS0xO2lmKHZvaWQgMD09PXQubil7aS5zPXQ7YnJlYWt9fX1mdW5jdGlvbiB5KGkpe3ZhciB0PWkucyxuPXZvaWQgMDt3aGlsZSh2b2lkIDAhPT10KXt2YXIgcj10LnA7aWYoLTE9PT10Lmkpe3QuUy5VKHQpO2lmKHZvaWQgMCE9PXIpci5uPXQubjtpZih2b2lkIDAhPT10Lm4pdC5uLnA9cn1lbHNlIG49dDt0LlMubj10LnI7aWYodm9pZCAwIT09dC5yKXQucj12b2lkIDA7dD1yfWkucz1ufWZ1bmN0aW9uIHcoaSx0KXtkLmNhbGwodGhpcyx2b2lkIDApO3RoaXMueD1pO3RoaXMucz12b2lkIDA7dGhpcy5nPXUtMTt0aGlzLmY9NDt0aGlzLlc9bnVsbD09dD92b2lkIDA6dC53YXRjaGVkO3RoaXMuWj1udWxsPT10P3ZvaWQgMDp0LnVud2F0Y2hlZDt0aGlzLm5hbWU9bnVsbD09dD92b2lkIDA6dC5uYW1lfXcucHJvdG90eXBlPW5ldyBkO3cucHJvdG90eXBlLmg9ZnVuY3Rpb24oKXt0aGlzLmYmPS0zO2lmKDEmdGhpcy5mKXJldHVybiExO2lmKDMyPT0oMzYmdGhpcy5mKSlyZXR1cm4hMDt0aGlzLmYmPS01O2lmKHRoaXMuZz09PXUpcmV0dXJuITA7dGhpcy5nPXU7dGhpcy5mfD0xO2lmKHRoaXMuaT4wJiYhYSh0aGlzKSl7dGhpcy5mJj0tMjtyZXR1cm4hMH12YXIgaT1yO3RyeXtsKHRoaXMpO3I9dGhpczt2YXIgdD10aGlzLngoKTtpZigxNiZ0aGlzLmZ8fHRoaXMudiE9PXR8fDA9PT10aGlzLmkpe3RoaXMudj10O3RoaXMuZiY9LTE3O3RoaXMuaSsrfX1jYXRjaChpKXt0aGlzLnY9aTt0aGlzLmZ8PTE2O3RoaXMuaSsrfXI9aTt5KHRoaXMpO3RoaXMuZiY9LTI7cmV0dXJuITB9O3cucHJvdG90eXBlLlM9ZnVuY3Rpb24oaSl7aWYodm9pZCAwPT09dGhpcy50KXt0aGlzLmZ8PTM2O2Zvcih2YXIgdD10aGlzLnM7dm9pZCAwIT09dDt0PXQubil0LlMuUyh0KX1kLnByb3RvdHlwZS5TLmNhbGwodGhpcyxpKX07dy5wcm90b3R5cGUuVT1mdW5jdGlvbihpKXtpZih2b2lkIDAhPT10aGlzLnQpe2QucHJvdG90eXBlLlUuY2FsbCh0aGlzLGkpO2lmKHZvaWQgMD09PXRoaXMudCl7dGhpcy5mJj0tMzM7Zm9yKHZhciB0PXRoaXMuczt2b2lkIDAhPT10O3Q9dC5uKXQuUy5VKHQpfX19O3cucHJvdG90eXBlLk49ZnVuY3Rpb24oKXtpZighKDImdGhpcy5mKSl7dGhpcy5mfD02O2Zvcih2YXIgaT10aGlzLnQ7dm9pZCAwIT09aTtpPWkueClpLnQuTigpfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHcucHJvdG90eXBlLFwidmFsdWVcIix7Z2V0OmZ1bmN0aW9uKCl7aWYoMSZ0aGlzLmYpdGhyb3cgbmV3IEVycm9yKFwiQ3ljbGUgZGV0ZWN0ZWRcIik7dmFyIGk9ZSh0aGlzKTt0aGlzLmgoKTtpZih2b2lkIDAhPT1pKWkuaT10aGlzLmk7aWYoMTYmdGhpcy5mKXRocm93IHRoaXMudjtyZXR1cm4gdGhpcy52fX0pO2Z1bmN0aW9uIGIoaSx0KXtyZXR1cm4gbmV3IHcoaSx0KX1mdW5jdGlvbiBfKGkpe3ZhciBuPWkudTtpLnU9dm9pZCAwO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pe3MrKzt2YXIgbz1yO3I9dm9pZCAwO3RyeXtuKCl9Y2F0Y2godCl7aS5mJj0tMjtpLmZ8PTg7cChpKTt0aHJvdyB0fWZpbmFsbHl7cj1vO3QoKX19fWZ1bmN0aW9uIHAoaSl7Zm9yKHZhciB0PWkuczt2b2lkIDAhPT10O3Q9dC5uKXQuUy5VKHQpO2kueD12b2lkIDA7aS5zPXZvaWQgMDtfKGkpfWZ1bmN0aW9uIGcoaSl7aWYociE9PXRoaXMpdGhyb3cgbmV3IEVycm9yKFwiT3V0LW9mLW9yZGVyIGVmZmVjdFwiKTt5KHRoaXMpO3I9aTt0aGlzLmYmPS0yO2lmKDgmdGhpcy5mKXAodGhpcyk7dCgpfWZ1bmN0aW9uIFMoaSx0KXt0aGlzLng9aTt0aGlzLnU9dm9pZCAwO3RoaXMucz12b2lkIDA7dGhpcy5vPXZvaWQgMDt0aGlzLmY9MzI7dGhpcy5uYW1lPW51bGw9PXQ/dm9pZCAwOnQubmFtZTtpZihmKWYucHVzaCh0aGlzKX1TLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcy5TKCk7dHJ5e2lmKDgmdGhpcy5mKXJldHVybjtpZih2b2lkIDA9PT10aGlzLngpcmV0dXJuO3ZhciB0PXRoaXMueCgpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpdGhpcy51PXR9ZmluYWxseXtpKCl9fTtTLnByb3RvdHlwZS5TPWZ1bmN0aW9uKCl7aWYoMSZ0aGlzLmYpdGhyb3cgbmV3IEVycm9yKFwiQ3ljbGUgZGV0ZWN0ZWRcIik7dGhpcy5mfD0xO3RoaXMuZiY9LTk7Xyh0aGlzKTtsKHRoaXMpO3MrKzt2YXIgaT1yO3I9dGhpcztyZXR1cm4gZy5iaW5kKHRoaXMsaSl9O1MucHJvdG90eXBlLk49ZnVuY3Rpb24oKXtpZighKDImdGhpcy5mKSl7dGhpcy5mfD0yO3RoaXMubz1oO2g9dGhpc319O1MucHJvdG90eXBlLmQ9ZnVuY3Rpb24oKXt0aGlzLmZ8PTg7aWYoISgxJnRoaXMuZikpcCh0aGlzKX07Uy5wcm90b3R5cGUuZGlzcG9zZT1mdW5jdGlvbigpe3RoaXMuZCgpfTtmdW5jdGlvbiBtKGksdCl7dmFyIG49bmV3IFMoaSx0KTt0cnl7bi5jKCl9Y2F0Y2goaSl7bi5kKCk7dGhyb3cgaX12YXIgcj1uLmQuYmluZChuKTtyW1N5bWJvbC5kaXNwb3NlXT1yO3JldHVybiByfWZ1bmN0aW9uIEUoaSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLHI9dGhpcztyZXR1cm4gbihmdW5jdGlvbigpe3JldHVybiBvKGZ1bmN0aW9uKCl7cmV0dXJuIGkuYXBwbHkocixbXS5zbGljZS5jYWxsKHQpKX0pfSl9fWZ1bmN0aW9uIHgoKXt2YXIgaT1mO2Y9W107cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQ9ZjtpZihmJiZpKWk9aS5jb25jYXQoZik7Zj1pO3JldHVybiB0fX1mdW5jdGlvbiBDKGkpe3JldHVybiBmdW5jdGlvbigpe3ZhciB0LG4scj14KCk7dHJ5e249aS5hcHBseSh2b2lkIDAsW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX1jYXRjaChpKXtmPXZvaWQgMDt0aHJvdyBpfWZpbmFsbHl7dD1yKCl9Zm9yKHZhciBvIGluIG4paWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbltvXSluW29dPUUobltvXSk7bltTeW1ib2wuZGlzcG9zZV09RShmdW5jdGlvbigpe2lmKHQpZm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspdFtpXS5kaXNwb3NlKCk7dD12b2lkIDB9KTtyZXR1cm4gbn19ZXhwb3J0e3cgYXMgQ29tcHV0ZWQsUyBhcyBFZmZlY3QsZCBhcyBTaWduYWwsRSBhcyBhY3Rpb24sbiBhcyBiYXRjaCxiIGFzIGNvbXB1dGVkLEMgYXMgY3JlYXRlTW9kZWwsbSBhcyBlZmZlY3QsYyBhcyBzaWduYWwsbyBhcyB1bnRyYWNrZWR9Oy8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbHMtY29yZS5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7Q29tcG9uZW50IGFzIGksb3B0aW9ucyBhcyBuLGlzVmFsaWRFbGVtZW50IGFzIHIsRnJhZ21lbnQgYXMgdH1mcm9tXCJwcmVhY3RcIjtpbXBvcnR7dXNlTWVtbyBhcyBvLHVzZVJlZiBhcyBmLHVzZUVmZmVjdCBhcyBlfWZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtlZmZlY3QgYXMgdSxTaWduYWwgYXMgYSxjb21wdXRlZCBhcyBjLHNpZ25hbCBhcyB2LGJhdGNoIGFzIHN9ZnJvbVwiQHByZWFjdC9zaWduYWxzLWNvcmVcIjtleHBvcnR7U2lnbmFsLGFjdGlvbixiYXRjaCxjb21wdXRlZCxjcmVhdGVNb2RlbCxlZmZlY3Qsc2lnbmFsLHVudHJhY2tlZH1mcm9tXCJAcHJlYWN0L3NpZ25hbHMtY29yZVwiO3ZhciBsLGQsaCxwPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJiEhd2luZG93Ll9fUFJFQUNUX1NJR05BTFNfREVWVE9PTFNfXyxtPVtdLF89W107dShmdW5jdGlvbigpe2w9dGhpcy5OfSkoKTtmdW5jdGlvbiBnKGkscil7bltpXT1yLmJpbmQobnVsbCxuW2ldfHxmdW5jdGlvbigpe30pfWZ1bmN0aW9uIGIoaSl7aWYoaCl7dmFyIG49aDtoPXZvaWQgMDtuKCl9aD1pJiZpLlMoKX1mdW5jdGlvbiB5KGkpe3ZhciBuPXRoaXMsdD1pLmRhdGEsZj11c2VTaWduYWwodCk7Zi52YWx1ZT10O3ZhciBlPW8oZnVuY3Rpb24oKXt2YXIgaT1uLHQ9bi5fX3Y7d2hpbGUodD10Ll9fKWlmKHQuX19jKXt0Ll9fYy5fXyRmfD00O2JyZWFrfXZhciBvPWMoZnVuY3Rpb24oKXt2YXIgaT1mLnZhbHVlLnZhbHVlO3JldHVybiAwPT09aT8wOiEwPT09aT9cIlwiOml8fFwiXCJ9KSxlPWMoZnVuY3Rpb24oKXtyZXR1cm4hQXJyYXkuaXNBcnJheShvLnZhbHVlKSYmIXIoby52YWx1ZSl9KSxhPXUoZnVuY3Rpb24oKXt0aGlzLk49RjtpZihlLnZhbHVlKXt2YXIgbj1vLnZhbHVlO2lmKGkuX192JiZpLl9fdi5fX2UmJjM9PT1pLl9fdi5fX2Uubm9kZVR5cGUpaS5fX3YuX19lLmRhdGE9bn19KSx2PW4uX18kdS5kO24uX18kdS5kPWZ1bmN0aW9uKCl7YSgpO3YuY2FsbCh0aGlzKX07cmV0dXJuW2Usb119LFtdKSxhPWVbMF0sdj1lWzFdO3JldHVybiBhLnZhbHVlP3YucGVlaygpOnYudmFsdWV9eS5kaXNwbGF5TmFtZT1cIlJlYWN0aXZlVGV4dE5vZGVcIjtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTp2b2lkIDB9LHR5cGU6e2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTp5fSxwcm9wczp7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybntkYXRhOnRoaXN9fX0sX19iOntjb25maWd1cmFibGU6ITAsdmFsdWU6MX19KTtnKFwiX19iXCIsZnVuY3Rpb24oaSxuKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbi50eXBlKXt2YXIgcix0PW4ucHJvcHM7Zm9yKHZhciBvIGluIHQpaWYoXCJjaGlsZHJlblwiIT09byl7dmFyIGY9dFtvXTtpZihmIGluc3RhbmNlb2YgYSl7aWYoIXIpbi5fX25wPXI9e307cltvXT1mO3Rbb109Zi5wZWVrKCl9fX1pKG4pfSk7ZyhcIl9fclwiLGZ1bmN0aW9uKGksbil7aShuKTtpZihuLnR5cGUhPT10KXtiKCk7dmFyIHIsbz1uLl9fYztpZihvKXtvLl9fJGYmPS0yO2lmKHZvaWQgMD09PShyPW8uX18kdSkpby5fXyR1PXI9ZnVuY3Rpb24oaSxuKXt2YXIgcjt1KGZ1bmN0aW9uKCl7cj10aGlzfSx7bmFtZTpufSk7ci5jPWk7cmV0dXJuIHJ9KGZ1bmN0aW9uKCl7dmFyIGk7aWYocCludWxsPT0oaT1yLnkpfHxpLmNhbGwocik7by5fXyRmfD0xO28uc2V0U3RhdGUoe30pfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/bi50eXBlLmRpc3BsYXlOYW1lfHxuLnR5cGUubmFtZTpcIlwiKX1kPW87YihyKX19KTtnKFwiX19lXCIsZnVuY3Rpb24oaSxuLHIsdCl7YigpO2Q9dm9pZCAwO2kobixyLHQpfSk7ZyhcImRpZmZlZFwiLGZ1bmN0aW9uKGksbil7YigpO2Q9dm9pZCAwO3ZhciByO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuLnR5cGUmJihyPW4uX19lKSl7dmFyIHQ9bi5fX25wLG89bi5wcm9wcztpZih0KXt2YXIgZj1yLlU7aWYoZilmb3IodmFyIGUgaW4gZil7dmFyIHU9ZltlXTtpZih2b2lkIDAhPT11JiYhKGUgaW4gdCkpe3UuZCgpO2ZbZV09dm9pZCAwfX1lbHNle2Y9e307ci5VPWZ9Zm9yKHZhciBhIGluIHQpe3ZhciBjPWZbYV0sdj10W2FdO2lmKHZvaWQgMD09PWMpe2M9dyhyLGEsdik7ZlthXT1jfWVsc2UgYy5vKHYsbyl9Zm9yKHZhciBzIGluIHQpb1tzXT10W3NdfX1pKG4pfSk7ZnVuY3Rpb24gdyhpLG4scix0KXt2YXIgbz1uIGluIGkmJnZvaWQgMD09PWkub3duZXJTVkdFbGVtZW50LGY9dihyKSxlPXIucGVlaygpO3JldHVybntvOmZ1bmN0aW9uKGksbil7Zi52YWx1ZT1pO2U9aS5wZWVrKCl9LGQ6dShmdW5jdGlvbigpe3RoaXMuTj1GO3ZhciByPWYudmFsdWUudmFsdWU7aWYoZSE9PXIpe2U9dm9pZCAwO2lmKG8paVtuXT1yO2Vsc2UgaWYobnVsbCE9ciYmKCExIT09cnx8XCItXCI9PT1uWzRdKSlpLnNldEF0dHJpYnV0ZShuLHIpO2Vsc2UgaS5yZW1vdmVBdHRyaWJ1dGUobil9ZWxzZSBlPXZvaWQgMH0pfX1nKFwidW5tb3VudFwiLGZ1bmN0aW9uKGksbil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSl7dmFyIHI9bi5fX2U7aWYocil7dmFyIHQ9ci5VO2lmKHQpe3IuVT12b2lkIDA7Zm9yKHZhciBvIGluIHQpe3ZhciBmPXRbb107aWYoZilmLmQoKX19fW4uX19ucD12b2lkIDB9ZWxzZXt2YXIgZT1uLl9fYztpZihlKXt2YXIgdT1lLl9fJHU7aWYodSl7ZS5fXyR1PXZvaWQgMDt1LmQoKX19fWkobil9KTtnKFwiX19oXCIsZnVuY3Rpb24oaSxuLHIsdCl7aWYodDwzfHw5PT09dCluLl9fJGZ8PTI7aShuLHIsdCl9KTtpLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24oaSxuKXtpZih0aGlzLl9fUilyZXR1cm4hMDt2YXIgcj10aGlzLl9fJHUsdD1yJiZ2b2lkIDAhPT1yLnM7Zm9yKHZhciBvIGluIG4pcmV0dXJuITA7aWYodGhpcy5fX2Z8fFwiYm9vbGVhblwiPT10eXBlb2YgdGhpcy51JiYhMD09PXRoaXMudSl7dmFyIGY9MiZ0aGlzLl9fJGY7aWYoISh0fHxmfHw0JnRoaXMuX18kZikpcmV0dXJuITA7aWYoMSZ0aGlzLl9fJGYpcmV0dXJuITB9ZWxzZXtpZighKHR8fDQmdGhpcy5fXyRmKSlyZXR1cm4hMDtpZigzJnRoaXMuX18kZilyZXR1cm4hMH1mb3IodmFyIGUgaW4gaSlpZihcIl9fc291cmNlXCIhPT1lJiZpW2VdIT09dGhpcy5wcm9wc1tlXSlyZXR1cm4hMDtmb3IodmFyIHUgaW4gdGhpcy5wcm9wcylpZighKHUgaW4gaSkpcmV0dXJuITA7cmV0dXJuITF9O2Z1bmN0aW9uIHVzZVNpZ25hbChpLG4pe3JldHVybiBvKGZ1bmN0aW9uKCl7cmV0dXJuIHYoaSxuKX0sW10pfWZ1bmN0aW9uIHVzZUNvbXB1dGVkKGksbil7dmFyIHI9ZihpKTtyLmN1cnJlbnQ9aTtkLl9fJGZ8PTQ7cmV0dXJuIG8oZnVuY3Rpb24oKXtyZXR1cm4gYyhmdW5jdGlvbigpe3JldHVybiByLmN1cnJlbnQoKX0sbil9LFtdKX12YXIgaz1cInVuZGVmaW5lZFwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lP3NldFRpbWVvdXQ6ZnVuY3Rpb24oaSl7dmFyIG49ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocik7Y2FuY2VsQW5pbWF0aW9uRnJhbWUodCk7aSgpfSxyPXNldFRpbWVvdXQobiwzNSksdD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobil9LHE9ZnVuY3Rpb24oaSl7cXVldWVNaWNyb3Rhc2soZnVuY3Rpb24oKXtxdWV1ZU1pY3JvdGFzayhpKX0pfTtmdW5jdGlvbiBBKCl7cyhmdW5jdGlvbigpe3ZhciBpO3doaWxlKGk9bS5zaGlmdCgpKWwuY2FsbChpKX0pfWZ1bmN0aW9uIFQoKXtpZigxPT09bS5wdXNoKHRoaXMpKShuLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8aykoQSl9ZnVuY3Rpb24geCgpe3MoZnVuY3Rpb24oKXt2YXIgaTt3aGlsZShpPV8uc2hpZnQoKSlsLmNhbGwoaSl9KX1mdW5jdGlvbiBGKCl7aWYoMT09PV8ucHVzaCh0aGlzKSkobi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHEpKHgpfWZ1bmN0aW9uIHVzZVNpZ25hbEVmZmVjdChpLG4pe3ZhciByPWYoaSk7ci5jdXJyZW50PWk7ZShmdW5jdGlvbigpe3JldHVybiB1KGZ1bmN0aW9uKCl7dGhpcy5OPVQ7cmV0dXJuIHIuY3VycmVudCgpfSxuKX0sW10pfWZ1bmN0aW9uIE0oaSl7dmFyIG49byhmdW5jdGlvbigpe3JldHVybiBpKCl9LFtdKTtlKGZ1bmN0aW9uKCl7cmV0dXJuIG5bU3ltYm9sLmRpc3Bvc2VdfSxbbl0pO3JldHVybiBufWV4cG9ydHt1c2VDb21wdXRlZCxNIGFzIHVzZU1vZGVsLHVzZVNpZ25hbCx1c2VTaWduYWxFZmZlY3R9Oy8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25hbHMubW9kdWxlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuc3VwcG9ydHMgPSBmdW5jdGlvbiBzdXBwb3J0cyAoLi4ubWFuaWZlc3RzKSB7XG4gIGNvbnN0IG1hbmlmZXN0ID0gbWFuaWZlc3RzLnJlZHVjZSgoYWNjLCBtKSA9PiBPYmplY3QuYXNzaWduKGFjYywgbSksIHt9KVxuXG4gIC8vIFNuYXBzaG90cyBpcyBhbiBhbGlhcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgY29uc3QgaW1wbGljaXRTbmFwc2hvdHMgPSBtYW5pZmVzdC5pbXBsaWNpdFNuYXBzaG90cyB8fCBtYW5pZmVzdC5zbmFwc2hvdHMgfHwgZmFsc2VcbiAgY29uc3QgZXhwbGljaXRTbmFwc2hvdHMgPSBtYW5pZmVzdC5leHBsaWNpdFNuYXBzaG90cyB8fCBmYWxzZVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKG1hbmlmZXN0LCB7XG4gICAgaW1wbGljaXRTbmFwc2hvdHMsXG4gICAgZXhwbGljaXRTbmFwc2hvdHMsXG4gICAgc25hcHNob3RzOiBpbXBsaWNpdFNuYXBzaG90cyxcbiAgICBoYXM6IG1hbmlmZXN0LmhhcyB8fCBmYWxzZSxcbiAgICBwZXJtYW5lbmNlOiBtYW5pZmVzdC5wZXJtYW5lbmNlIHx8IGZhbHNlLFxuICAgIHNlZWs6IG1hbmlmZXN0LnNlZWsgfHwgZmFsc2UsXG4gICAgY3JlYXRlSWZNaXNzaW5nOiBtYW5pZmVzdC5jcmVhdGVJZk1pc3NpbmcgfHwgZmFsc2UsXG4gICAgZXJyb3JJZkV4aXN0czogbWFuaWZlc3QuZXJyb3JJZkV4aXN0cyB8fCBmYWxzZSxcbiAgICBkZWZlcnJlZE9wZW46IG1hbmlmZXN0LmRlZmVycmVkT3BlbiB8fCBmYWxzZSxcbiAgICBzdHJlYW1zOiBtYW5pZmVzdC5zdHJlYW1zIHx8IGZhbHNlLFxuICAgIGVuY29kaW5nczogT2JqZWN0LmFzc2lnbih7fSwgbWFuaWZlc3QuZW5jb2RpbmdzKSxcbiAgICBldmVudHM6IE9iamVjdC5hc3NpZ24oe30sIG1hbmlmZXN0LmV2ZW50cyksXG4gICAgYWRkaXRpb25hbE1ldGhvZHM6IE9iamVjdC5hc3NpZ24oe30sIG1hbmlmZXN0LmFkZGl0aW9uYWxNZXRob2RzKSxcbiAgICBzaWduYWxzOiBPYmplY3QuYXNzaWduKHt9LCBtYW5pZmVzdC5zaWduYWxzKVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTW9kdWxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBFcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSB7eyBjb2RlPzogc3RyaW5nLCBjYXVzZT86IEVycm9yLCBleHBlY3RlZD86IGJvb2xlYW4sIHRyYW5zaWVudD86IGJvb2xlYW4gfX0gW29wdGlvbnNdXG4gICAqL1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgb3B0aW9ucykge1xuICAgIHN1cGVyKG1lc3NhZ2UgfHwgJycpXG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmNvZGUpIHRoaXMuY29kZSA9IFN0cmluZyhvcHRpb25zLmNvZGUpXG4gICAgICBpZiAob3B0aW9ucy5leHBlY3RlZCkgdGhpcy5leHBlY3RlZCA9IHRydWVcbiAgICAgIGlmIChvcHRpb25zLnRyYW5zaWVudCkgdGhpcy50cmFuc2llbnQgPSB0cnVlXG4gICAgICBpZiAob3B0aW9ucy5jYXVzZSkgdGhpcy5jYXVzZSA9IG9wdGlvbnMuY2F1c2VcbiAgICB9XG5cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxuY29uc3QgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuY29uc3QgY3VzdG9tSW5zcGVjdFN5bWJvbCA9XG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2xbJ2ZvciddID09PSAnZnVuY3Rpb24nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgID8gU3ltYm9sWydmb3InXSgnbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIDogbnVsbFxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbmNvbnN0IEtfTUFYX0xFTkdUSCA9IDB4N2ZmZmZmZmZcbmV4cG9ydHMua01heExlbmd0aCA9IEtfTUFYX0xFTkdUSFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBQcmludCB3YXJuaW5nIGFuZCByZWNvbW1lbmQgdXNpbmcgYGJ1ZmZlcmAgdjQueCB3aGljaCBoYXMgYW4gT2JqZWN0XG4gKiAgICAgICAgICAgICAgIGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBXZSByZXBvcnQgdGhhdCB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBpZiB0aGUgYXJlIG5vdCBzdWJjbGFzc2FibGVcbiAqIHVzaW5nIF9fcHJvdG9fXy4gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWBcbiAqIChTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOCkuIElFIDEwIGxhY2tzIHN1cHBvcnRcbiAqIGZvciBfX3Byb3RvX18gYW5kIGhhcyBhIGJ1Z2d5IHR5cGVkIGFycmF5IGltcGxlbWVudGF0aW9uLlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zb2xlLmVycm9yKFxuICAgICdUaGlzIGJyb3dzZXIgbGFja3MgdHlwZWQgYXJyYXkgKFVpbnQ4QXJyYXkpIHN1cHBvcnQgd2hpY2ggaXMgcmVxdWlyZWQgYnkgJyArXG4gICAgJ2BidWZmZXJgIHY1LnguIFVzZSBgYnVmZmVyYCB2NC54IGlmIHlvdSByZXF1aXJlIG9sZCBicm93c2VyIHN1cHBvcnQuJ1xuICApXG59XG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgLy8gQ2FuIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkP1xuICB0cnkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgY29uc3QgcHJvdG8gPSB7IGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfSB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3RvLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYXJyLCBwcm90bylcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdwYXJlbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAnb2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ5dGVPZmZzZXRcbiAgfVxufSlcblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA+IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgbGVuZ3RoICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuICByZXR1cm4gYnVmXG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUoYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuZnVuY3Rpb24gZnJvbSAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5Vmlldyh2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgICApXG4gIH1cblxuICBpZiAoaXNJbnN0YW5jZSh2YWx1ZSwgQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIEFycmF5QnVmZmVyKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgKGlzSW5zdGFuY2UodmFsdWUsIFNoYXJlZEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBTaGFyZWRBcnJheUJ1ZmZlcikpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICApXG4gIH1cblxuICBjb25zdCB2YWx1ZU9mID0gdmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKClcbiAgaWYgKHZhbHVlT2YgIT0gbnVsbCAmJiB2YWx1ZU9mICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZU9mLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBjb25zdCBiID0gZnJvbU9iamVjdCh2YWx1ZSlcbiAgaWYgKGIpIHJldHVybiBiXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1ByaW1pdGl2ZSAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdKCdzdHJpbmcnKSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICApXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20odmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gTm90ZTogQ2hhbmdlIHByb3RvdHlwZSAqYWZ0ZXIqIEJ1ZmZlci5mcm9tIGlzIGRlZmluZWQgdG8gd29ya2Fyb3VuZCBDaHJvbWUgYnVnOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC8xNDhcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIucHJvdG90eXBlLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIsIFVpbnQ4QXJyYXkpXG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIGxldCBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuXG4gIGNvbnN0IGFjdHVhbCA9IGJ1Zi53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAoYXJyYXkpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIGNvbnN0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWZbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5VmlldyAoYXJyYXlWaWV3KSB7XG4gIGlmIChpc0luc3RhbmNlKGFycmF5VmlldywgVWludDhBcnJheSkpIHtcbiAgICBjb25zdCBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlWaWV3KVxuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIoY29weS5idWZmZXIsIGNvcHkuYnl0ZU9mZnNldCwgY29weS5ieXRlTGVuZ3RoKVxuICB9XG4gIHJldHVybiBmcm9tQXJyYXlMaWtlKGFycmF5Vmlldylcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyIChhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIm9mZnNldFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wibGVuZ3RoXCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGxldCBidWZcbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0IChvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgY29uc3QgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICBjb25zdCBidWYgPSBjcmVhdGVCdWZmZXIobGVuKVxuXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZcbiAgICB9XG5cbiAgICBvYmouY29weShidWYsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBudW1iZXJJc05hTihvYmoubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcigwKVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmopXG4gIH1cblxuICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqLmRhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyID09PSB0cnVlICYmXG4gICAgYiAhPT0gQnVmZmVyLnByb3RvdHlwZSAvLyBzbyBCdWZmZXIuaXNCdWZmZXIoQnVmZmVyLnByb3RvdHlwZSkgd2lsbCBiZSBmYWxzZVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYSwgVWludDhBcnJheSkpIGEgPSBCdWZmZXIuZnJvbShhLCBhLm9mZnNldCwgYS5ieXRlTGVuZ3RoKVxuICBpZiAoaXNJbnN0YW5jZShiLCBVaW50OEFycmF5KSkgYiA9IEJ1ZmZlci5mcm9tKGIsIGIub2Zmc2V0LCBiLmJ5dGVMZW5ndGgpXG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzIG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXknXG4gICAgKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgbGV0IHggPSBhLmxlbmd0aFxuICBsZXQgeSA9IGIubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICBsZXQgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIGxldCBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgbGV0IGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoaXNJbnN0YW5jZShidWYsIFVpbnQ4QXJyYXkpKSB7XG4gICAgICBpZiAocG9zICsgYnVmLmxlbmd0aCA+IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gQnVmZmVyLmZyb20oYnVmKVxuICAgICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICBidWYsXG4gICAgICAgICAgcG9zXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgfVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IGlzSW5zdGFuY2Uoc3RyaW5nLCBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIG9yIEFycmF5QnVmZmVyLiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2Ygc3RyaW5nXG4gICAgKVxuICB9XG5cbiAgY29uc3QgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBjb25zdCBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcmNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICBjb25zdCBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IEJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmdcblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICBsZXQgc3RyID0gJydcbiAgY29uc3QgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgbGV0IHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIGxldCB5ID0gZW5kIC0gc3RhcnRcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICBjb25zdCB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICBjb25zdCB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgbGV0IGluZGV4U2l6ZSA9IDFcbiAgbGV0IGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgbGV0IHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgbGV0IGlcbiAgaWYgKGRpcikge1xuICAgIGxldCBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgY29uc3QgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGxldCBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAobnVtYmVySXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCA+Pj4gMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICBjb25zdCByZXMgPSBbXVxuXG4gIGxldCBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICBjb25zdCBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICBsZXQgY29kZVBvaW50ID0gbnVsbFxuICAgIGxldCBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpXG4gICAgICA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpXG4gICAgICAgICAgPyAzXG4gICAgICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRilcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgbGV0IHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxuY29uc3QgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIGNvbnN0IGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgbGV0IHJlcyA9ICcnXG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBsZXQgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIGxldCBvdXQgPSAnJ1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSBoZXhTbGljZUxvb2t1cFRhYmxlW2J1ZltpXV1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIGxldCByZXMgPSAnJ1xuICAvLyBJZiBieXRlcy5sZW5ndGggaXMgb2RkLCB0aGUgbGFzdCA4IGJpdHMgbXVzdCBiZSBpZ25vcmVkIChzYW1lIGFzIG5vZGUuanMpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyAoYnl0ZXNbaSArIDFdICogMjU2KSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIGNvbnN0IG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5ld0J1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXRdXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgbGV0IG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdVSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnVUludDY0TEUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCBsbyA9IGZpcnN0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjRcblxuICBjb25zdCBoaSA9IHRoaXNbKytvZmZzZXRdICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICBsYXN0ICogMiAqKiAyNFxuXG4gIHJldHVybiBCaWdJbnQobG8pICsgKEJpZ0ludChoaSkgPDwgQmlnSW50KDMyKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ1VJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdVSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IGhpID0gZmlyc3QgKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XVxuXG4gIGNvbnN0IGxvID0gdGhpc1srK29mZnNldF0gKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICBsYXN0XG5cbiAgcmV0dXJuIChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpICsgQmlnSW50KGxvKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0XVxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aFxuICBsZXQgbXVsID0gMVxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdJbnQ2NExFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXQgKyA0XSArXG4gICAgdGhpc1tvZmZzZXQgKyA1XSAqIDIgKiogOCArXG4gICAgdGhpc1tvZmZzZXQgKyA2XSAqIDIgKiogMTYgK1xuICAgIChsYXN0IDw8IDI0KSAvLyBPdmVyZmxvd1xuXG4gIHJldHVybiAoQmlnSW50KHZhbCkgPDwgQmlnSW50KDMyKSkgK1xuICAgIEJpZ0ludChmaXJzdCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDI0KVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IChmaXJzdCA8PCAyNCkgKyAvLyBPdmVyZmxvd1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdXG5cbiAgcmV0dXJuIChCaWdJbnQodmFsKSA8PCBCaWdJbnQoMzIpKSArXG4gICAgQmlnSW50KHRoaXNbKytvZmZzZXRdICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgbGFzdClcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoIC0gMVxuICBsZXQgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gd3J0QmlnVUludDY0TEUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbWluLCBtYXgpIHtcbiAgY2hlY2tJbnRCSSh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCA3KVxuXG4gIGxldCBsbyA9IE51bWJlcih2YWx1ZSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxldCBoaSA9IE51bWJlcih2YWx1ZSA+PiBCaWdJbnQoMzIpICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgcmV0dXJuIG9mZnNldFxufVxuXG5mdW5jdGlvbiB3cnRCaWdVSW50NjRCRSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBtaW4sIG1heCkge1xuICBjaGVja0ludEJJKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIDcpXG5cbiAgbGV0IGxvID0gTnVtYmVyKHZhbHVlICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0ICsgN10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDZdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA1XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNF0gPSBsb1xuICBsZXQgaGkgPSBOdW1iZXIodmFsdWUgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCArIDNdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQgKyAyXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0ICsgMV0gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldF0gPSBoaVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnVUludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdVSW50NjRMRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NExFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIEJpZ0ludCgwKSwgQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdVSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ1VJbnQ2NEJFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0QkUodGhpcywgdmFsdWUsIG9mZnNldCwgQmlnSW50KDApLCBCaWdJbnQoJzB4ZmZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IDBcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIGxldCBtdWwgPSAxXG4gIGxldCBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ0ludDY0TEUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRMRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAtQmlnSW50KCcweDgwMDAwMDAwMDAwMDAwMDAnKSwgQmlnSW50KCcweDdmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnSW50NjRCRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NEJFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIC1CaWdJbnQoJzB4ODAwMDAwMDAwMDAwMDAwMCcpLCBCaWdJbnQoJzB4N2ZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc2hvdWxkIGJlIGEgQnVmZmVyJylcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVzZSBidWlsdC1pbiB3aGVuIGF2YWlsYWJsZSwgbWlzc2luZyBmcm9tIElFMTFcbiAgICB0aGlzLmNvcHlXaXRoaW4odGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgJiYgY29kZSA8IDEyOCkgfHxcbiAgICAgICAgICBlbmNvZGluZyA9PT0gJ2xhdGluMScpIHtcbiAgICAgICAgLy8gRmFzdCBwYXRoOiBJZiBgdmFsYCBmaXRzIGludG8gYSBzaW5nbGUgYnl0ZSwgdXNlIHRoYXQgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgIHZhbCA9IE51bWJlcih2YWwpXG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgbGV0IGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyB2YWwgK1xuICAgICAgICAnXCIgaXMgaW52YWxpZCBmb3IgYXJndW1lbnQgXCJ2YWx1ZVwiJylcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gQ1VTVE9NIEVSUk9SU1xuLy8gPT09PT09PT09PT09PVxuXG4vLyBTaW1wbGlmaWVkIHZlcnNpb25zIGZyb20gTm9kZSwgY2hhbmdlZCBmb3IgQnVmZmVyLW9ubHkgdXNhZ2VcbmNvbnN0IGVycm9ycyA9IHt9XG5mdW5jdGlvbiBFIChzeW0sIGdldE1lc3NhZ2UsIEJhc2UpIHtcbiAgZXJyb3JzW3N5bV0gPSBjbGFzcyBOb2RlRXJyb3IgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgICAgdmFsdWU6IGdldE1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgLy8gQWRkIHRoZSBlcnJvciBjb2RlIHRvIHRoZSBuYW1lIHRvIGluY2x1ZGUgaXQgaW4gdGhlIHN0YWNrIHRyYWNlLlxuICAgICAgdGhpcy5uYW1lID0gYCR7dGhpcy5uYW1lfSBbJHtzeW19XWBcbiAgICAgIC8vIEFjY2VzcyB0aGUgc3RhY2sgdG8gZ2VuZXJhdGUgdGhlIGVycm9yIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZSBlcnJvciBjb2RlXG4gICAgICAvLyBmcm9tIHRoZSBuYW1lLlxuICAgICAgdGhpcy5zdGFjayAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgLy8gUmVzZXQgdGhlIG5hbWUgdG8gdGhlIGFjdHVhbCBuYW1lLlxuICAgICAgZGVsZXRlIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldCBjb2RlICgpIHtcbiAgICAgIHJldHVybiBzeW1cbiAgICB9XG5cbiAgICBzZXQgY29kZSAodmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29kZScsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9TdHJpbmcgKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gWyR7c3ltfV06ICR7dGhpcy5tZXNzYWdlfWBcbiAgICB9XG4gIH1cbn1cblxuRSgnRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTJyxcbiAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9IGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kc2BcbiAgICB9XG5cbiAgICByZXR1cm4gJ0F0dGVtcHQgdG8gYWNjZXNzIG1lbW9yeSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnXG4gIH0sIFJhbmdlRXJyb3IpXG5FKCdFUlJfSU5WQUxJRF9BUkdfVFlQRScsXG4gIGZ1bmN0aW9uIChuYW1lLCBhY3R1YWwpIHtcbiAgICByZXR1cm4gYFRoZSBcIiR7bmFtZX1cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGFjdHVhbH1gXG4gIH0sIFR5cGVFcnJvcilcbkUoJ0VSUl9PVVRfT0ZfUkFOR0UnLFxuICBmdW5jdGlvbiAoc3RyLCByYW5nZSwgaW5wdXQpIHtcbiAgICBsZXQgbXNnID0gYFRoZSB2YWx1ZSBvZiBcIiR7c3RyfVwiIGlzIG91dCBvZiByYW5nZS5gXG4gICAgbGV0IHJlY2VpdmVkID0gaW5wdXRcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihpbnB1dCkgJiYgTWF0aC5hYnMoaW5wdXQpID4gMiAqKiAzMikge1xuICAgICAgcmVjZWl2ZWQgPSBhZGROdW1lcmljYWxTZXBhcmF0b3IoU3RyaW5nKGlucHV0KSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIHJlY2VpdmVkID0gU3RyaW5nKGlucHV0KVxuICAgICAgaWYgKGlucHV0ID4gQmlnSW50KDIpICoqIEJpZ0ludCgzMikgfHwgaW5wdXQgPCAtKEJpZ0ludCgyKSAqKiBCaWdJbnQoMzIpKSkge1xuICAgICAgICByZWNlaXZlZCA9IGFkZE51bWVyaWNhbFNlcGFyYXRvcihyZWNlaXZlZClcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVkICs9ICduJ1xuICAgIH1cbiAgICBtc2cgKz0gYCBJdCBtdXN0IGJlICR7cmFuZ2V9LiBSZWNlaXZlZCAke3JlY2VpdmVkfWBcbiAgICByZXR1cm4gbXNnXG4gIH0sIFJhbmdlRXJyb3IpXG5cbmZ1bmN0aW9uIGFkZE51bWVyaWNhbFNlcGFyYXRvciAodmFsKSB7XG4gIGxldCByZXMgPSAnJ1xuICBsZXQgaSA9IHZhbC5sZW5ndGhcbiAgY29uc3Qgc3RhcnQgPSB2YWxbMF0gPT09ICctJyA/IDEgOiAwXG4gIGZvciAoOyBpID49IHN0YXJ0ICsgNDsgaSAtPSAzKSB7XG4gICAgcmVzID0gYF8ke3ZhbC5zbGljZShpIC0gMywgaSl9JHtyZXN9YFxuICB9XG4gIHJldHVybiBgJHt2YWwuc2xpY2UoMCwgaSl9JHtyZXN9YFxufVxuXG4vLyBDSEVDSyBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBjaGVja0JvdW5kcyAoYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgaWYgKGJ1ZltvZmZzZXRdID09PSB1bmRlZmluZWQgfHwgYnVmW29mZnNldCArIGJ5dGVMZW5ndGhdID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIGJ1Zi5sZW5ndGggLSAoYnl0ZUxlbmd0aCArIDEpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50QkkgKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB7XG4gICAgY29uc3QgbiA9IHR5cGVvZiBtaW4gPT09ICdiaWdpbnQnID8gJ24nIDogJydcbiAgICBsZXQgcmFuZ2VcbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDMpIHtcbiAgICAgIGlmIChtaW4gPT09IDAgfHwgbWluID09PSBCaWdJbnQoMCkpIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gMCR7bn0gYW5kIDwgMiR7bn0gKiogJHsoYnl0ZUxlbmd0aCArIDEpICogOH0ke259YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gLSgyJHtufSAqKiAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259KSBhbmQgPCAyICoqIGAgK1xuICAgICAgICAgICAgICAgIGAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZSA9IGA+PSAke21pbn0ke259IGFuZCA8PSAke21heH0ke259YFxuICAgIH1cbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UoJ3ZhbHVlJywgcmFuZ2UsIHZhbHVlKVxuICB9XG4gIGNoZWNrQm91bmRzKGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlciAodmFsdWUsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9JTlZBTElEX0FSR19UWVBFKG5hbWUsICdudW1iZXInLCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZHNFcnJvciAodmFsdWUsIGxlbmd0aCwgdHlwZSkge1xuICBpZiAoTWF0aC5mbG9vcih2YWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgdmFsaWRhdGVOdW1iZXIodmFsdWUsIHR5cGUpXG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKHR5cGUgfHwgJ29mZnNldCcsICdhbiBpbnRlZ2VyJywgdmFsdWUpXG4gIH1cblxuICBpZiAobGVuZ3RoIDwgMCkge1xuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTKClcbiAgfVxuXG4gIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSh0eXBlIHx8ICdvZmZzZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYD49ICR7dHlwZSA/IDEgOiAwfSBhbmQgPD0gJHtsZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlKVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmNvbnN0IElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICBsZXQgY29kZVBvaW50XG4gIGNvbnN0IGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgbGV0IGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIGNvbnN0IGJ5dGVzID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgY29uc3QgYnl0ZUFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICBsZXQgYywgaGksIGxvXG4gIGNvbnN0IGJ5dGVBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbi8vIEFycmF5QnVmZmVyIG9yIFVpbnQ4QXJyYXkgb2JqZWN0cyBmcm9tIG90aGVyIGNvbnRleHRzIChpLmUuIGlmcmFtZXMpIGRvIG5vdCBwYXNzXG4vLyB0aGUgYGluc3RhbmNlb2ZgIGNoZWNrIGJ1dCB0aGV5IHNob3VsZCBiZSB0cmVhdGVkIGFzIG9mIHRoYXQgdHlwZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE2NlxuZnVuY3Rpb24gaXNJbnN0YW5jZSAob2JqLCB0eXBlKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiB0eXBlIHx8XG4gICAgKG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9IG51bGwgJiZcbiAgICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSB0eXBlLm5hbWUpXG59XG5mdW5jdGlvbiBudW1iZXJJc05hTiAob2JqKSB7XG4gIC8vIEZvciBJRTExIHN1cHBvcnRcbiAgcmV0dXJuIG9iaiAhPT0gb2JqIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbi8vIENyZWF0ZSBsb29rdXAgdGFibGUgZm9yIGB0b1N0cmluZygnaGV4JylgXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8yMTlcbmNvbnN0IGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5YWJjZGVmJ1xuICBjb25zdCB0YWJsZSA9IG5ldyBBcnJheSgyNTYpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgIGNvbnN0IGkxNiA9IGkgKiAxNlxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuXG4vLyBSZXR1cm4gbm90IGZ1bmN0aW9uIHdpdGggRXJyb3IgaWYgQmlnSW50IG5vdCBzdXBwb3J0ZWRcbmZ1bmN0aW9uIGRlZmluZUJpZ0ludE1ldGhvZCAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gQnVmZmVyQmlnSW50Tm90RGVmaW5lZCA6IGZuXG59XG5cbmZ1bmN0aW9uIEJ1ZmZlckJpZ0ludE5vdERlZmluZWQgKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0JpZ0ludCBub3Qgc3VwcG9ydGVkJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiogQHR5cGUge3sgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXIgfXxudWxsfSAqL1xubGV0IGxhenkgPSBudWxsXG5cbi8qKlxuICogR2V0IHNlbWktZ2xvYmFsIGluc3RhbmNlcyBvZiBUZXh0RW5jb2RlciBhbmQgVGV4dERlY29kZXIuXG4gKiBAcmV0dXJucyB7eyB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiBUZXh0RGVjb2RlciB9fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGxhenkgPT09IG51bGwpIHtcbiAgICBsYXp5ID0ge1xuICAgICAgdGV4dEVuY29kZXI6IG5ldyBUZXh0RW5jb2RlcigpLFxuICAgICAgdGV4dERlY29kZXI6IG5ldyBUZXh0RGVjb2RlcigpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhenlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5jb25zdCBmb3JtYXRzID0gbmV3IFNldChbJ2J1ZmZlcicsICd2aWV3JywgJ3V0ZjgnXSlcblxuLyoqXG4gKiBAdGVtcGxhdGUgVEluLCBURm9ybWF0LCBUT3V0XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgRW5jb2Rpbmcge1xuICAvKipcbiAgICogQHBhcmFtIHtJRW5jb2Rpbmc8VEluLFRGb3JtYXQsVE91dD59IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgLyoqIEB0eXBlIHsoZGF0YTogVEluKSA9PiBURm9ybWF0fSAqL1xuICAgIHRoaXMuZW5jb2RlID0gb3B0aW9ucy5lbmNvZGUgfHwgdGhpcy5lbmNvZGVcblxuICAgIC8qKiBAdHlwZSB7KGRhdGE6IFRGb3JtYXQpID0+IFRPdXR9ICovXG4gICAgdGhpcy5kZWNvZGUgPSBvcHRpb25zLmRlY29kZSB8fCB0aGlzLmRlY29kZVxuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMubmFtZVxuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCB0aGlzLmZvcm1hdFxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmVuY29kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnZW5jb2RlJyBwcm9wZXJ0eSBtdXN0IGJlIGEgZnVuY3Rpb25cIilcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZGVjb2RlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdkZWNvZGUnIHByb3BlcnR5IG11c3QgYmUgYSBmdW5jdGlvblwiKVxuICAgIH1cblxuICAgIHRoaXMuZW5jb2RlID0gdGhpcy5lbmNvZGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVjb2RlID0gdGhpcy5kZWNvZGUuYmluZCh0aGlzKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5hbWUgIT09ICdzdHJpbmcnIHx8IHRoaXMubmFtZSA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ25hbWUnIHByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmdcIilcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZm9ybWF0ICE9PSAnc3RyaW5nJyB8fCAhZm9ybWF0cy5oYXModGhpcy5mb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdmb3JtYXQnIHByb3BlcnR5IG11c3QgYmUgb25lIG9mICdidWZmZXInLCAndmlldycsICd1dGY4J1wiKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZVZpZXdUcmFuc2NvZGVyKSB7XG4gICAgICB0aGlzLmNyZWF0ZVZpZXdUcmFuc2NvZGVyID0gb3B0aW9ucy5jcmVhdGVWaWV3VHJhbnNjb2RlclxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlQnVmZmVyVHJhbnNjb2RlciA9IG9wdGlvbnMuY3JlYXRlQnVmZmVyVHJhbnNjb2RlclxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZVVURjhUcmFuc2NvZGVyKSB7XG4gICAgICB0aGlzLmNyZWF0ZVVURjhUcmFuc2NvZGVyID0gb3B0aW9ucy5jcmVhdGVVVEY4VHJhbnNjb2RlclxuICAgIH1cbiAgfVxuXG4gIGdldCBjb21tb25OYW1lICgpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0aGlzLm5hbWUuc3BsaXQoJysnKVswXSlcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtCdWZmZXJGb3JtYXQ8VEluLFRPdXQ+fSAqL1xuICBjcmVhdGVCdWZmZXJUcmFuc2NvZGVyICgpIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoYEVuY29kaW5nICcke3RoaXMubmFtZX0nIGNhbm5vdCBiZSB0cmFuc2NvZGVkIHRvICdidWZmZXInYCwge1xuICAgICAgY29kZTogJ0xFVkVMX0VOQ09ESU5HX05PVF9TVVBQT1JURUQnXG4gICAgfSlcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtWaWV3Rm9ybWF0PFRJbixUT3V0Pn0gKi9cbiAgY3JlYXRlVmlld1RyYW5zY29kZXIgKCkge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcihgRW5jb2RpbmcgJyR7dGhpcy5uYW1lfScgY2Fubm90IGJlIHRyYW5zY29kZWQgdG8gJ3ZpZXcnYCwge1xuICAgICAgY29kZTogJ0xFVkVMX0VOQ09ESU5HX05PVF9TVVBQT1JURUQnXG4gICAgfSlcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtVVEY4Rm9ybWF0PFRJbixUT3V0Pn0gKi9cbiAgY3JlYXRlVVRGOFRyYW5zY29kZXIgKCkge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcihgRW5jb2RpbmcgJyR7dGhpcy5uYW1lfScgY2Fubm90IGJlIHRyYW5zY29kZWQgdG8gJ3V0ZjgnYCwge1xuICAgICAgY29kZTogJ0xFVkVMX0VOQ09ESU5HX05PVF9TVVBQT1JURUQnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnRzLkVuY29kaW5nID0gRW5jb2RpbmdcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2VuY29kaW5nJykuSUVuY29kaW5nPFRJbixURm9ybWF0LFRPdXQ+fSBJRW5jb2RpbmdcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRGb3JtYXQsIFRPdXRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZm9ybWF0cycpLkJ1ZmZlckZvcm1hdDxUSW4sVE91dD59IEJ1ZmZlckZvcm1hdFxuICogQHRlbXBsYXRlIFRJbiwgVE91dFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mb3JtYXRzJykuVmlld0Zvcm1hdDxUSW4sVE91dD59IFZpZXdGb3JtYXRcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRPdXRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZm9ybWF0cycpLlVURjhGb3JtYXQ8VEluLFRPdXQ+fSBVVEY4Rm9ybWF0XG4gKiBAdGVtcGxhdGUgVEluLCBUT3V0XG4gKi9cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEJ1ZmZlciB9ID0gcmVxdWlyZSgnYnVmZmVyJykgfHwge31cbmNvbnN0IHsgRW5jb2RpbmcgfSA9IHJlcXVpcmUoJy4vZW5jb2RpbmcnKVxuY29uc3QgdGV4dEVuZGVjID0gcmVxdWlyZSgnLi90ZXh0LWVuZGVjJylcblxuLyoqXG4gKiBAdGVtcGxhdGUgVEluLCBUT3V0XG4gKiBAZXh0ZW5kcyB7RW5jb2Rpbmc8VEluLEJ1ZmZlcixUT3V0Pn1cbiAqL1xuY2xhc3MgQnVmZmVyRm9ybWF0IGV4dGVuZHMgRW5jb2Rpbmcge1xuICAvKipcbiAgICogQHBhcmFtIHtPbWl0PElFbmNvZGluZzxUSW4sIEJ1ZmZlciwgVE91dD4sICdmb3JtYXQnPn0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcih7IC4uLm9wdGlvbnMsIGZvcm1hdDogJ2J1ZmZlcicgfSlcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlVmlld1RyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiBuZXcgVmlld0Zvcm1hdCh7XG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLCAvLyBCdWZmZXIgaXMgYSB2aWV3IChVSW50OEFycmF5KVxuICAgICAgZGVjb2RlOiAoZGF0YSkgPT4gdGhpcy5kZWNvZGUoXG4gICAgICAgIEJ1ZmZlci5mcm9tKGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aClcbiAgICAgICksXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K3ZpZXdgXG4gICAgfSlcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlQnVmZmVyVHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG4vKipcbiAqIEBleHRlbmRzIHtFbmNvZGluZzxUSW4sVWludDhBcnJheSxUT3V0Pn1cbiAqIEB0ZW1wbGF0ZSBUSW4sIFRPdXRcbiAqL1xuY2xhc3MgVmlld0Zvcm1hdCBleHRlbmRzIEVuY29kaW5nIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T21pdDxJRW5jb2Rpbmc8VEluLCBVaW50OEFycmF5LCBUT3V0PiwgJ2Zvcm1hdCc+fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKHsgLi4ub3B0aW9ucywgZm9ybWF0OiAndmlldycgfSlcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlQnVmZmVyVHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXJGb3JtYXQoe1xuICAgICAgZW5jb2RlOiAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5lbmNvZGUoZGF0YSlcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZpZXcuYnVmZmVyLCB2aWV3LmJ5dGVPZmZzZXQsIHZpZXcuYnl0ZUxlbmd0aClcbiAgICAgIH0sXG4gICAgICBkZWNvZGU6IHRoaXMuZGVjb2RlLCAvLyBCdWZmZXIgaXMgYSB2aWV3IChVSW50OEFycmF5KVxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfStidWZmZXJgXG4gICAgfSlcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlVmlld1RyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuLyoqXG4gKiBAZXh0ZW5kcyB7RW5jb2Rpbmc8VEluLHN0cmluZyxUT3V0Pn1cbiAqIEB0ZW1wbGF0ZSBUSW4sIFRPdXRcbiAqL1xuY2xhc3MgVVRGOEZvcm1hdCBleHRlbmRzIEVuY29kaW5nIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T21pdDxJRW5jb2Rpbmc8VEluLCBzdHJpbmcsIFRPdXQ+LCAnZm9ybWF0Jz59IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoeyAuLi5vcHRpb25zLCBmb3JtYXQ6ICd1dGY4JyB9KVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBjcmVhdGVCdWZmZXJUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlckZvcm1hdCh7XG4gICAgICBlbmNvZGU6IChkYXRhKSA9PiBCdWZmZXIuZnJvbSh0aGlzLmVuY29kZShkYXRhKSwgJ3V0ZjgnKSxcbiAgICAgIGRlY29kZTogKGRhdGEpID0+IHRoaXMuZGVjb2RlKGRhdGEudG9TdHJpbmcoJ3V0ZjgnKSksXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K2J1ZmZlcmBcbiAgICB9KVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBjcmVhdGVWaWV3VHJhbnNjb2RlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIgfSA9IHRleHRFbmRlYygpXG5cbiAgICByZXR1cm4gbmV3IFZpZXdGb3JtYXQoe1xuICAgICAgZW5jb2RlOiAoZGF0YSkgPT4gdGV4dEVuY29kZXIuZW5jb2RlKHRoaXMuZW5jb2RlKGRhdGEpKSxcbiAgICAgIGRlY29kZTogKGRhdGEpID0+IHRoaXMuZGVjb2RlKHRleHREZWNvZGVyLmRlY29kZShkYXRhKSksXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K3ZpZXdgXG4gICAgfSlcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlVVRGOFRyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuZXhwb3J0cy5CdWZmZXJGb3JtYXQgPSBCdWZmZXJGb3JtYXRcbmV4cG9ydHMuVmlld0Zvcm1hdCA9IFZpZXdGb3JtYXRcbmV4cG9ydHMuVVRGOEZvcm1hdCA9IFVURjhGb3JtYXRcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2VuY29kaW5nJykuSUVuY29kaW5nPFRJbixURm9ybWF0LFRPdXQ+fSBJRW5jb2RpbmdcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRGb3JtYXQsIFRPdXRcbiAqL1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQnVmZmVyIH0gPSByZXF1aXJlKCdidWZmZXInKSB8fCB7IEJ1ZmZlcjogeyBpc0J1ZmZlcjogKCkgPT4gZmFsc2UgfSB9XG5jb25zdCB7IHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciB9ID0gcmVxdWlyZSgnLi90ZXh0LWVuZGVjJykoKVxuY29uc3QgeyBCdWZmZXJGb3JtYXQsIFZpZXdGb3JtYXQsIFVURjhGb3JtYXQgfSA9IHJlcXVpcmUoJy4vZm9ybWF0cycpXG5cbi8qKiBAdHlwZSB7PFQ+KHY6IFQpID0+IHZ9ICovXG5jb25zdCBpZGVudGl0eSA9ICh2KSA9PiB2XG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZW5jb2RpbmdzJykudXRmOH1cbiAqL1xuZXhwb3J0cy51dGY4ID0gbmV3IFVURjhGb3JtYXQoe1xuICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gT24gbm9kZSAxNi45LjEgYnVmZmVyLnRvU3RyaW5nKCkgaXMgNXggZmFzdGVyIHRoYW4gVGV4dERlY29kZXJcbiAgICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGRhdGEpXG4gICAgICA/IGRhdGEudG9TdHJpbmcoJ3V0ZjgnKVxuICAgICAgOiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSlcbiAgICAgICAgPyB0ZXh0RGVjb2Rlci5kZWNvZGUoZGF0YSlcbiAgICAgICAgOiBTdHJpbmcoZGF0YSlcbiAgfSxcbiAgZGVjb2RlOiBpZGVudGl0eSxcbiAgbmFtZTogJ3V0ZjgnLFxuICBjcmVhdGVWaWV3VHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIG5ldyBWaWV3Rm9ybWF0KHtcbiAgICAgIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IGRhdGEgOiB0ZXh0RW5jb2Rlci5lbmNvZGUoZGF0YSlcbiAgICAgIH0sXG4gICAgICBkZWNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0ZXh0RGVjb2Rlci5kZWNvZGUoZGF0YSlcbiAgICAgIH0sXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K3ZpZXdgXG4gICAgfSlcbiAgfSxcbiAgY3JlYXRlQnVmZmVyVHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXJGb3JtYXQoe1xuICAgICAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGRhdGEpXG4gICAgICAgICAgPyBkYXRhXG4gICAgICAgICAgOiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSlcbiAgICAgICAgICAgID8gQnVmZmVyLmZyb20oZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgOiBCdWZmZXIuZnJvbShTdHJpbmcoZGF0YSksICd1dGY4JylcbiAgICAgIH0sXG4gICAgICBkZWNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCd1dGY4JylcbiAgICAgIH0sXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K2J1ZmZlcmBcbiAgICB9KVxuICB9XG59KVxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5ncycpLmpzb259XG4gKi9cbmV4cG9ydHMuanNvbiA9IG5ldyBVVEY4Rm9ybWF0KHtcbiAgZW5jb2RlOiBKU09OLnN0cmluZ2lmeSxcbiAgZGVjb2RlOiBKU09OLnBhcnNlLFxuICBuYW1lOiAnanNvbidcbn0pXG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZW5jb2RpbmdzJykuYnVmZmVyfVxuICovXG5leHBvcnRzLmJ1ZmZlciA9IG5ldyBCdWZmZXJGb3JtYXQoe1xuICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihkYXRhKVxuICAgICAgPyBkYXRhXG4gICAgICA6IEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKVxuICAgICAgICA/IEJ1ZmZlci5mcm9tKGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aClcbiAgICAgICAgOiBCdWZmZXIuZnJvbShTdHJpbmcoZGF0YSksICd1dGY4JylcbiAgfSxcbiAgZGVjb2RlOiBpZGVudGl0eSxcbiAgbmFtZTogJ2J1ZmZlcicsXG4gIGNyZWF0ZVZpZXdUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gbmV3IFZpZXdGb3JtYXQoe1xuICAgICAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpID8gZGF0YSA6IEJ1ZmZlci5mcm9tKFN0cmluZyhkYXRhKSwgJ3V0ZjgnKVxuICAgICAgfSxcbiAgICAgIGRlY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aClcbiAgICAgIH0sXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K3ZpZXdgXG4gICAgfSlcbiAgfVxufSlcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9lbmNvZGluZ3MnKS52aWV3fVxuICovXG5leHBvcnRzLnZpZXcgPSBuZXcgVmlld0Zvcm1hdCh7XG4gIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpID8gZGF0YSA6IHRleHRFbmNvZGVyLmVuY29kZShkYXRhKVxuICB9LFxuICBkZWNvZGU6IGlkZW50aXR5LFxuICBuYW1lOiAndmlldycsXG4gIGNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyRm9ybWF0KHtcbiAgICAgIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihkYXRhKVxuICAgICAgICAgID8gZGF0YVxuICAgICAgICAgIDogQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpXG4gICAgICAgICAgICA/IEJ1ZmZlci5mcm9tKGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgIDogQnVmZmVyLmZyb20oU3RyaW5nKGRhdGEpLCAndXRmOCcpXG4gICAgICB9LFxuICAgICAgZGVjb2RlOiBpZGVudGl0eSxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rYnVmZmVyYFxuICAgIH0pXG4gIH1cbn0pXG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZW5jb2RpbmdzJykuaGV4fVxuICovXG5leHBvcnRzLmhleCA9IG5ldyBCdWZmZXJGb3JtYXQoe1xuICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSA/IGRhdGEgOiBCdWZmZXIuZnJvbShTdHJpbmcoZGF0YSksICdoZXgnKVxuICB9LFxuICBkZWNvZGU6IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdoZXgnKVxuICB9LFxuICBuYW1lOiAnaGV4J1xufSlcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9lbmNvZGluZ3MnKS5iYXNlNjR9XG4gKi9cbmV4cG9ydHMuYmFzZTY0ID0gbmV3IEJ1ZmZlckZvcm1hdCh7XG4gIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGRhdGEpID8gZGF0YSA6IEJ1ZmZlci5mcm9tKFN0cmluZyhkYXRhKSwgJ2Jhc2U2NCcpXG4gIH0sXG4gIGRlY29kZTogZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gIH0sXG4gIG5hbWU6ICdiYXNlNjQnXG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcbmNvbnN0IGVuY29kaW5ncyA9IHJlcXVpcmUoJy4vbGliL2VuY29kaW5ncycpXG5jb25zdCB7IEVuY29kaW5nIH0gPSByZXF1aXJlKCcuL2xpYi9lbmNvZGluZycpXG5jb25zdCB7IEJ1ZmZlckZvcm1hdCwgVmlld0Zvcm1hdCwgVVRGOEZvcm1hdCB9ID0gcmVxdWlyZSgnLi9saWIvZm9ybWF0cycpXG5cbmNvbnN0IGtGb3JtYXRzID0gU3ltYm9sKCdmb3JtYXRzJylcbmNvbnN0IGtFbmNvZGluZ3MgPSBTeW1ib2woJ2VuY29kaW5ncycpXG5jb25zdCB2YWxpZEZvcm1hdHMgPSBuZXcgU2V0KFsnYnVmZmVyJywgJ3ZpZXcnLCAndXRmOCddKVxuXG4vKiogQHRlbXBsYXRlIFQgKi9cbmNsYXNzIFRyYW5zY29kZXIge1xuICAvKipcbiAgICogQHBhcmFtIHtBcnJheTwnYnVmZmVyJ3wndmlldyd8J3V0ZjgnPn0gZm9ybWF0c1xuICAgKi9cbiAgY29uc3RydWN0b3IgKGZvcm1hdHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybWF0cykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgJ2Zvcm1hdHMnIG11c3QgYmUgYW4gYXJyYXlcIilcbiAgICB9IGVsc2UgaWYgKCFmb3JtYXRzLmV2ZXJ5KGYgPT4gdmFsaWRGb3JtYXRzLmhhcyhmKSkpIHtcbiAgICAgIC8vIE5vdGU6IHdlIG9ubHkgb25seSBzdXBwb3J0IGFsaWFzZXMgaW4ga2V5LSBhbmQgdmFsdWVFbmNvZGluZyBvcHRpb25zICh3aGVyZSB3ZSBhbHJlYWR5IGRpZClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGb3JtYXQgbXVzdCBiZSBvbmUgb2YgJ2J1ZmZlcicsICd2aWV3JywgJ3V0ZjgnXCIpXG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtNYXA8c3RyaW5nfE1peGVkRW5jb2Rpbmc8YW55LCBhbnksIGFueT4sIEVuY29kaW5nPGFueSwgYW55LCBhbnk+Pn0gKi9cbiAgICB0aGlzW2tFbmNvZGluZ3NdID0gbmV3IE1hcCgpXG4gICAgdGhpc1trRm9ybWF0c10gPSBuZXcgU2V0KGZvcm1hdHMpXG5cbiAgICAvLyBSZWdpc3RlciBlbmNvZGluZ3MgKGRvbmUgZWFybHkgaW4gb3JkZXIgdG8gcG9wdWxhdGUgZW5jb2RpbmdzKCkpXG4gICAgZm9yIChjb25zdCBrIGluIGVuY29kaW5ncykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5lbmNvZGluZyhrKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZjogYXNzZXJ0aW9uICovXG4gICAgICAgIGlmIChlcnIuY29kZSAhPT0gJ0xFVkVMX0VOQ09ESU5HX05PVF9TVVBQT1JURUQnKSB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0FycmF5PEVuY29kaW5nPGFueSxULGFueT4+fVxuICAgKi9cbiAgZW5jb2RpbmdzICgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXNba0VuY29kaW5nc10udmFsdWVzKCkpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfE1peGVkRW5jb2Rpbmc8YW55LCBhbnksIGFueT59IGVuY29kaW5nXG4gICAqIEByZXR1cm5zIHtFbmNvZGluZzxhbnksIFQsIGFueT59XG4gICAqL1xuICBlbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgICBsZXQgcmVzb2x2ZWQgPSB0aGlzW2tFbmNvZGluZ3NdLmdldChlbmNvZGluZylcblxuICAgIGlmIChyZXNvbHZlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiBlbmNvZGluZyAhPT0gJycpIHtcbiAgICAgICAgcmVzb2x2ZWQgPSBsb29rdXBbZW5jb2RpbmddXG5cbiAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcihgRW5jb2RpbmcgJyR7ZW5jb2Rpbmd9JyBpcyBub3QgZm91bmRgLCB7XG4gICAgICAgICAgICBjb2RlOiAnTEVWRUxfRU5DT0RJTkdfTk9UX0ZPVU5EJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnb2JqZWN0JyB8fCBlbmNvZGluZyA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgYXJndW1lbnQgJ2VuY29kaW5nJyBtdXN0IGJlIGEgc3RyaW5nIG9yIG9iamVjdFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZWQgPSBmcm9tKGVuY29kaW5nKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IG5hbWUsIGZvcm1hdCB9ID0gcmVzb2x2ZWRcblxuICAgICAgaWYgKCF0aGlzW2tGb3JtYXRzXS5oYXMoZm9ybWF0KSkge1xuICAgICAgICBpZiAodGhpc1trRm9ybWF0c10uaGFzKCd2aWV3JykpIHtcbiAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkLmNyZWF0ZVZpZXdUcmFuc2NvZGVyKClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tGb3JtYXRzXS5oYXMoJ2J1ZmZlcicpKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZC5jcmVhdGVCdWZmZXJUcmFuc2NvZGVyKClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tGb3JtYXRzXS5oYXMoJ3V0ZjgnKSkge1xuICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWQuY3JlYXRlVVRGOFRyYW5zY29kZXIoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcihgRW5jb2RpbmcgJyR7bmFtZX0nIGNhbm5vdCBiZSB0cmFuc2NvZGVkYCwge1xuICAgICAgICAgICAgY29kZTogJ0xFVkVMX0VOQ09ESU5HX05PVF9TVVBQT1JURUQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGsgb2YgW2VuY29kaW5nLCBuYW1lLCByZXNvbHZlZC5uYW1lLCByZXNvbHZlZC5jb21tb25OYW1lXSkge1xuICAgICAgICB0aGlzW2tFbmNvZGluZ3NdLnNldChrLCByZXNvbHZlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzb2x2ZWRcbiAgfVxufVxuXG5leHBvcnRzLlRyYW5zY29kZXIgPSBUcmFuc2NvZGVyXG5cbi8qKlxuICogQHBhcmFtIHtNaXhlZEVuY29kaW5nPGFueSwgYW55LCBhbnk+fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RW5jb2Rpbmc8YW55LCBhbnksIGFueT59XG4gKi9cbmZ1bmN0aW9uIGZyb20gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBFbmNvZGluZykge1xuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICAvLyBMb29zZWx5IHR5cGVkIGZvciBlY29zeXN0ZW0gY29tcGF0aWJpbGl0eVxuICBjb25zdCBtYXliZVR5cGUgPSAndHlwZScgaW4gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy50eXBlID09PSAnc3RyaW5nJyA/IG9wdGlvbnMudHlwZSA6IHVuZGVmaW5lZFxuICBjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG1heWJlVHlwZSB8fCBgYW5vbnltb3VzLSR7YW5vbnltb3VzQ291bnQrK31gXG5cbiAgc3dpdGNoIChkZXRlY3RGb3JtYXQob3B0aW9ucykpIHtcbiAgICBjYXNlICd2aWV3JzogcmV0dXJuIG5ldyBWaWV3Rm9ybWF0KHsgLi4ub3B0aW9ucywgbmFtZSB9KVxuICAgIGNhc2UgJ3V0ZjgnOiByZXR1cm4gbmV3IFVURjhGb3JtYXQoeyAuLi5vcHRpb25zLCBuYW1lIH0pXG4gICAgY2FzZSAnYnVmZmVyJzogcmV0dXJuIG5ldyBCdWZmZXJGb3JtYXQoeyAuLi5vcHRpb25zLCBuYW1lIH0pXG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZvcm1hdCBtdXN0IGJlIG9uZSBvZiAnYnVmZmVyJywgJ3ZpZXcnLCAndXRmOCdcIilcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBJZiBmb3JtYXQgaXMgbm90IHByb3ZpZGVkLCBmYWxsYmFjayB0byBkZXRlY3RpbmcgYGxldmVsLWNvZGVjYFxuICogb3IgYG11bHRpZm9ybWF0c2AgZW5jb2RpbmdzLCBlbHNlIGFzc3VtZSBhIGZvcm1hdCBvZiBidWZmZXIuXG4gKiBAcGFyYW0ge01peGVkRW5jb2Rpbmc8YW55LCBhbnksIGFueT59IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEZvcm1hdCAob3B0aW9ucykge1xuICBpZiAoJ2Zvcm1hdCcgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZm9ybWF0XG4gIH0gZWxzZSBpZiAoJ2J1ZmZlcicgaW4gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5idWZmZXIgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBvcHRpb25zLmJ1ZmZlciA/ICdidWZmZXInIDogJ3V0ZjgnIC8vIGxldmVsLWNvZGVjXG4gIH0gZWxzZSBpZiAoJ2NvZGUnIGluIG9wdGlvbnMgJiYgTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLmNvZGUpKSB7XG4gICAgcmV0dXJuICd2aWV3JyAvLyBtdWx0aWZvcm1hdHNcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2J1ZmZlcidcbiAgfVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGliL2VuY29kaW5nJykuTWl4ZWRFbmNvZGluZzxUSW4sVEZvcm1hdCxUT3V0Pn0gTWl4ZWRFbmNvZGluZ1xuICogQHRlbXBsYXRlIFRJbiwgVEZvcm1hdCwgVE91dFxuICovXG5cbi8qKlxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCBFbmNvZGluZzxhbnksIGFueSwgYW55Pj59XG4gKi9cbmNvbnN0IGFsaWFzZXMgPSB7XG4gIGJpbmFyeTogZW5jb2RpbmdzLmJ1ZmZlcixcbiAgJ3V0Zi04JzogZW5jb2RpbmdzLnV0Zjhcbn1cblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIEVuY29kaW5nPGFueSwgYW55LCBhbnk+Pn1cbiAqL1xuY29uc3QgbG9va3VwID0ge1xuICAuLi5lbmNvZGluZ3MsXG4gIC4uLmFsaWFzZXNcbn1cblxubGV0IGFub255bW91c0NvdW50ID0gMFxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBrRXJyb3JzID0gU3ltYm9sKCdrRXJyb3JzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXJyb3JzKSB7XG4gIGVycm9ycyA9IGVycm9ycy5maWx0ZXIoZGVmaW5lZClcblxuICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gIGlmIChlcnJvcnMubGVuZ3RoID09PSAxKSByZXR1cm4gZXJyb3JzWzBdXG5cbiAgcmV0dXJuIG5ldyBDb21iaW5lZEVycm9yKGVycm9ycylcbn1cblxuY2xhc3MgQ29tYmluZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IgKGVycm9ycykge1xuICAgIGNvbnN0IHVuaXF1ZSA9IG5ldyBTZXQoZXJyb3JzLm1hcChnZXRNZXNzYWdlKS5maWx0ZXIoQm9vbGVhbikpXG4gICAgY29uc3QgbWVzc2FnZSA9IEFycmF5LmZyb20odW5pcXVlKS5qb2luKCc7ICcpXG5cbiAgICBzdXBlcihtZXNzYWdlKVxuXG4gICAgdmFsdWUodGhpcywgJ25hbWUnLCAnQ29tYmluZWRFcnJvcicpXG4gICAgdmFsdWUodGhpcywga0Vycm9ycywgZXJyb3JzKVxuXG4gICAgZ2V0dGVyKHRoaXMsICdzdGFjaycsICgpID0+IGVycm9ycy5tYXAoZ2V0U3RhY2spLmpvaW4oJ1xcblxcbicpKVxuICAgIGdldHRlcih0aGlzLCAndHJhbnNpZW50JywgKCkgPT4gZXJyb3JzLmxlbmd0aCA+IDAgJiYgZXJyb3JzLmV2ZXJ5KHRyYW5zaWVudCkpXG4gICAgZ2V0dGVyKHRoaXMsICdleHBlY3RlZCcsICgpID0+IGVycm9ycy5sZW5ndGggPiAwICYmIGVycm9ycy5ldmVyeShleHBlY3RlZCkpXG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0Vycm9yc11bU3ltYm9sLml0ZXJhdG9yXSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsdWUgKG9iaiwgcHJvcCwgdmFsdWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgeyB2YWx1ZSB9KVxufVxuXG5mdW5jdGlvbiBnZXR0ZXIgKG9iaiwgcHJvcCwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHsgZ2V0IH0pXG59XG5cbmZ1bmN0aW9uIGRlZmluZWQgKGVycikge1xuICByZXR1cm4gZXJyICE9IG51bGxcbn1cblxuZnVuY3Rpb24gZ2V0TWVzc2FnZSAoZXJyKSB7XG4gIHJldHVybiBlcnIubWVzc2FnZVxufVxuXG5mdW5jdGlvbiBnZXRTdGFjayAoZXJyKSB7XG4gIHJldHVybiBlcnIuc3RhY2tcbn1cblxuZnVuY3Rpb24gdHJhbnNpZW50IChlcnIpIHtcbiAgcmV0dXJuIGVyci50cmFuc2llbnQgPT09IHRydWVcbn1cblxuZnVuY3Rpb24gZXhwZWN0ZWQgKGVycikge1xuICByZXR1cm4gZXJyLmV4cGVjdGVkID09PSB0cnVlXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuY29uc3QgZGVwcmVjYXRpb25zID0gbmV3IFNldCgpXG5cbmV4cG9ydHMuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zLCBkZWYpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIGlmIChkZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkZWZcbiAgfVxuXG4gIHJldHVybiB7fVxufVxuXG5leHBvcnRzLmVtcHR5T3B0aW9ucyA9IE9iamVjdC5mcmVlemUoe30pXG5leHBvcnRzLm5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuZXhwb3J0cy5yZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKVxuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGlmICghZGVwcmVjYXRpb25zLmhhcyhtZXNzYWdlKSkge1xuICAgIGRlcHJlY2F0aW9ucy5hZGQobWVzc2FnZSlcblxuICAgIC8vIEF2b2lkIHBvbHlmaWxsc1xuICAgIGNvbnN0IGMgPSBnbG9iYWxUaGlzLmNvbnNvbGVcblxuICAgIGlmICh0eXBlb2YgYyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGMud2FybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYy53YXJuKG5ldyBNb2R1bGVFcnJvcihtZXNzYWdlLCB7IGNvZGU6ICdMRVZFTF9MRUdBQ1knIH0pKVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcblxuY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIE1vZHVsZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKGNhdXNlKSB7XG4gICAgc3VwZXIoJ09wZXJhdGlvbiBoYXMgYmVlbiBhYm9ydGVkJywge1xuICAgICAgY29kZTogJ0xFVkVMX0FCT1JURUQnLFxuICAgICAgY2F1c2VcbiAgICB9KVxuICB9XG5cbiAgLy8gU2V0IG5hbWUgdG8gQWJvcnRFcnJvciBmb3Igd2ViIGNvbXBhdGliaWxpdHkuIFNlZTpcbiAgLy8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNhYm9ydGluZy1vbmdvaW5nLWFjdGl2aXRpZXNcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL3B1bGwvMzU5MTEjZGlzY3Vzc2lvbl9yNTE1Nzc5MzA2XG4gIGdldCBuYW1lICgpIHtcbiAgICByZXR1cm4gJ0Fib3J0RXJyb3InXG4gIH1cbn1cblxuZXhwb3J0cy5BYm9ydEVycm9yID0gQWJvcnRFcnJvclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcbmNvbnN0IGNvbWJpbmVFcnJvcnMgPSByZXF1aXJlKCdtYXliZS1jb21iaW5lLWVycm9ycycpXG5jb25zdCB7IGdldE9wdGlvbnMsIGVtcHR5T3B0aW9ucywgbm9vcCB9ID0gcmVxdWlyZSgnLi9saWIvY29tbW9uJylcbmNvbnN0IHsgQWJvcnRFcnJvciB9ID0gcmVxdWlyZSgnLi9saWIvZXJyb3JzJylcblxuY29uc3Qga1dvcmtpbmcgPSBTeW1ib2woJ3dvcmtpbmcnKVxuY29uc3Qga0RlY29kZU9uZSA9IFN5bWJvbCgnZGVjb2RlT25lJylcbmNvbnN0IGtEZWNvZGVNYW55ID0gU3ltYm9sKCdkZWNvZGVNYW55JylcbmNvbnN0IGtTaWduYWwgPSBTeW1ib2woJ3NpZ25hbCcpXG5jb25zdCBrUGVuZGluZ0Nsb3NlID0gU3ltYm9sKCdwZW5kaW5nQ2xvc2UnKVxuY29uc3Qga0Nsb3NpbmdQcm9taXNlID0gU3ltYm9sKCdjbG9zaW5nUHJvbWlzZScpXG5jb25zdCBrS2V5RW5jb2RpbmcgPSBTeW1ib2woJ2tleUVuY29kaW5nJylcbmNvbnN0IGtWYWx1ZUVuY29kaW5nID0gU3ltYm9sKCd2YWx1ZUVuY29kaW5nJylcbmNvbnN0IGtLZXlzID0gU3ltYm9sKCdrZXlzJylcbmNvbnN0IGtWYWx1ZXMgPSBTeW1ib2woJ3ZhbHVlcycpXG5jb25zdCBrTGltaXQgPSBTeW1ib2woJ2xpbWl0JylcbmNvbnN0IGtDb3VudCA9IFN5bWJvbCgnY291bnQnKVxuY29uc3Qga0VuZGVkID0gU3ltYm9sKCdlbmRlZCcpXG5cbi8vIFRoaXMgY2xhc3MgaXMgYW4gaW50ZXJuYWwgdXRpbGl0eSBmb3IgY29tbW9uIGZ1bmN0aW9uYWxpdHkgYmV0d2VlbiBBYnN0cmFjdEl0ZXJhdG9yLFxuLy8gQWJzdHJhY3RLZXlJdGVyYXRvciBhbmQgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yLiBJdCdzIG5vdCBleHBvcnRlZC5cbmNsYXNzIENvbW1vbkl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBkYiAhPT0gJ29iamVjdCcgfHwgZGIgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhpbnQgPSBkYiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBkYlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gYWJzdHJhY3QtbGV2ZWwgZGF0YWJhc2UsIHJlY2VpdmVkICR7aGludH1gKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFuIG9wdGlvbnMgb2JqZWN0JylcbiAgICB9XG5cbiAgICB0aGlzW2tXb3JraW5nXSA9IGZhbHNlXG4gICAgdGhpc1trUGVuZGluZ0Nsb3NlXSA9IG51bGxcbiAgICB0aGlzW2tDbG9zaW5nUHJvbWlzZV0gPSBudWxsXG4gICAgdGhpc1trS2V5RW5jb2RpbmddID0gb3B0aW9uc1trS2V5RW5jb2RpbmddXG4gICAgdGhpc1trVmFsdWVFbmNvZGluZ10gPSBvcHRpb25zW2tWYWx1ZUVuY29kaW5nXVxuICAgIHRoaXNba0xpbWl0XSA9IE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5saW1pdCkgJiYgb3B0aW9ucy5saW1pdCA+PSAwID8gb3B0aW9ucy5saW1pdCA6IEluZmluaXR5XG4gICAgdGhpc1trQ291bnRdID0gMFxuICAgIHRoaXNba1NpZ25hbF0gPSBvcHRpb25zLnNpZ25hbCAhPSBudWxsID8gb3B0aW9ucy5zaWduYWwgOiBudWxsXG5cbiAgICAvLyBFbmRpbmcgbWVhbnMgcmVhY2hpbmcgdGhlIG5hdHVyYWwgZW5kIG9mIHRoZSBkYXRhIGFuZCAodW5saWtlIGNsb3NpbmcpIHRoYXQgY2FuXG4gICAgLy8gYmUgcmVzZXQgYnkgc2VlaygpLCB1bmxlc3MgdGhlIGxpbWl0IHdhcyByZWFjaGVkLlxuICAgIHRoaXNba0VuZGVkXSA9IGZhbHNlXG5cbiAgICB0aGlzLmRiID0gZGJcbiAgICB0aGlzLmRiLmF0dGFjaFJlc291cmNlKHRoaXMpXG4gIH1cblxuICBnZXQgY291bnQgKCkge1xuICAgIHJldHVybiB0aGlzW2tDb3VudF1cbiAgfVxuXG4gIGdldCBsaW1pdCAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0xpbWl0XVxuICB9XG5cbiAgYXN5bmMgbmV4dCAoKSB7XG4gICAgc3RhcnRXb3JrKHRoaXMpXG5cbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXNba0VuZGVkXSB8fCB0aGlzW2tDb3VudF0gPj0gdGhpc1trTGltaXRdKSB7XG4gICAgICAgIHRoaXNba0VuZGVkXSA9IHRydWVcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBsZXQgaXRlbSA9IGF3YWl0IHRoaXMuX25leHQoKVxuXG4gICAgICBpZiAoaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXNba0VuZGVkXSA9IHRydWVcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBpdGVtID0gdGhpc1trRGVjb2RlT25lXShpdGVtKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBJdGVyYXRvckRlY29kZUVycm9yKGVycilcbiAgICAgIH1cblxuICAgICAgdGhpc1trQ291bnRdKytcbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZFdvcmsodGhpcylcbiAgICB9XG4gIH1cblxuICBhc3luYyBfbmV4dCAoKSB7fVxuXG4gIGFzeW5jIG5leHR2IChzaXplLCBvcHRpb25zKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHNpemUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50ICdzaXplJyBtdXN0IGJlIGFuIGludGVnZXJcIilcbiAgICB9XG5cbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBlbXB0eU9wdGlvbnMpXG5cbiAgICBpZiAoc2l6ZSA8IDEpIHNpemUgPSAxXG4gICAgaWYgKHRoaXNba0xpbWl0XSA8IEluZmluaXR5KSBzaXplID0gTWF0aC5taW4oc2l6ZSwgdGhpc1trTGltaXRdIC0gdGhpc1trQ291bnRdKVxuXG4gICAgc3RhcnRXb3JrKHRoaXMpXG5cbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXNba0VuZGVkXSB8fCBzaXplIDw9IDApIHtcbiAgICAgICAgdGhpc1trRW5kZWRdID0gdHJ1ZVxuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLl9uZXh0dihzaXplLCBvcHRpb25zKVxuXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXNba0VuZGVkXSA9IHRydWVcbiAgICAgICAgcmV0dXJuIGl0ZW1zXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXNba0RlY29kZU1hbnldKGl0ZW1zKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBJdGVyYXRvckRlY29kZUVycm9yKGVycilcbiAgICAgIH1cblxuICAgICAgdGhpc1trQ291bnRdICs9IGl0ZW1zLmxlbmd0aFxuICAgICAgcmV0dXJuIGl0ZW1zXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZFdvcmsodGhpcylcbiAgICB9XG4gIH1cblxuICBhc3luYyBfbmV4dHYgKHNpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBhY2MgPSBbXVxuXG4gICAgd2hpbGUgKGFjYy5sZW5ndGggPCBzaXplKSB7XG4gICAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy5fbmV4dChvcHRpb25zKVxuXG4gICAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFjYy5wdXNoKGl0ZW0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNdXN0IHRyYWNrIHRoaXMgaGVyZSBiZWNhdXNlIHdlJ3JlIGRpcmVjdGx5IGNhbGxpbmcgX25leHQoKVxuICAgICAgICB0aGlzW2tFbmRlZF0gPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9XG5cbiAgYXN5bmMgYWxsIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgZW1wdHlPcHRpb25zKVxuICAgIHN0YXJ0V29yayh0aGlzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzW2tFbmRlZF0gfHwgdGhpc1trQ291bnRdID49IHRoaXNba0xpbWl0XSkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLl9hbGwob3B0aW9ucylcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpc1trRGVjb2RlTWFueV0oaXRlbXMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEl0ZXJhdG9yRGVjb2RlRXJyb3IoZXJyKVxuICAgICAgfVxuXG4gICAgICB0aGlzW2tDb3VudF0gKz0gaXRlbXMubGVuZ3RoXG4gICAgICByZXR1cm4gaXRlbXNcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVuZFdvcmsodGhpcylcbiAgICAgIGF3YWl0IGRlc3Ryb3kodGhpcywgZXJyKVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzW2tFbmRlZF0gPSB0cnVlXG5cbiAgICAgIGlmICh0aGlzW2tXb3JraW5nXSkge1xuICAgICAgICBlbmRXb3JrKHRoaXMpXG4gICAgICAgIGF3YWl0IHRoaXMuY2xvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9hbGwgKG9wdGlvbnMpIHtcbiAgICAvLyBNdXN0IGNvdW50IGhlcmUgYmVjYXVzZSB3ZSdyZSBkaXJlY3RseSBjYWxsaW5nIF9uZXh0digpXG4gICAgbGV0IGNvdW50ID0gdGhpc1trQ291bnRdXG5cbiAgICBjb25zdCBhY2MgPSBbXVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIC8vIE5vdCBjb25maWd1cmFibGUsIGJlY2F1c2UgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvcHRpbWl6ZSBfYWxsKCkuXG4gICAgICBjb25zdCBzaXplID0gdGhpc1trTGltaXRdIDwgSW5maW5pdHkgPyBNYXRoLm1pbigxZTMsIHRoaXNba0xpbWl0XSAtIGNvdW50KSA6IDFlM1xuXG4gICAgICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLl9uZXh0dihzaXplLCBvcHRpb25zKVxuXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgYWNjLnB1c2guYXBwbHkoYWNjLCBpdGVtcylcbiAgICAgIGNvdW50ICs9IGl0ZW1zLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHNlZWsgKHRhcmdldCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIGVtcHR5T3B0aW9ucylcblxuICAgIGlmICh0aGlzW2tDbG9zaW5nUHJvbWlzZV0gIT09IG51bGwpIHtcbiAgICAgIC8vIERvbid0IHRocm93IGhlcmUsIHRvIGJlIGtpbmQgdG8gaW1wbGVtZW50YXRpb25zIHRoYXQgd3JhcFxuICAgICAgLy8gYW5vdGhlciBkYiBhbmQgZG9uJ3QgbmVjZXNzYXJpbHkgY29udHJvbCB3aGVuIHRoZSBkYiBpcyBjbG9zZWRcbiAgICB9IGVsc2UgaWYgKHRoaXNba1dvcmtpbmddKSB7XG4gICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0l0ZXJhdG9yIGlzIGJ1c3k6IGNhbm5vdCBjYWxsIHNlZWsoKSB1bnRpbCBuZXh0KCkgaGFzIGNvbXBsZXRlZCcsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0lURVJBVE9SX0JVU1knXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMuZGIua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZyB8fCB0aGlzW2tLZXlFbmNvZGluZ10pXG4gICAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcblxuICAgICAgaWYgKG9wdGlvbnMua2V5RW5jb2RpbmcgIT09IGtleUZvcm1hdCkge1xuICAgICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCBrZXlFbmNvZGluZzoga2V5Rm9ybWF0IH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwcGVkID0gdGhpcy5kYi5wcmVmaXhLZXkoa2V5RW5jb2RpbmcuZW5jb2RlKHRhcmdldCksIGtleUZvcm1hdCwgZmFsc2UpXG4gICAgICB0aGlzLl9zZWVrKG1hcHBlZCwgb3B0aW9ucylcblxuICAgICAgLy8gSWYgX3NlZWsoKSB3YXMgc3VjY2Vzc2Z1bGwsIG1vcmUgZGF0YSBtYXkgYmUgYXZhaWxhYmxlLlxuICAgICAgdGhpc1trRW5kZWRdID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBfc2VlayAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdJdGVyYXRvciBkb2VzIG5vdCBzdXBwb3J0IHNlZWsoKScsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9OT1RfU1VQUE9SVEVEJ1xuICAgIH0pXG4gIH1cblxuICBhc3luYyBjbG9zZSAoKSB7XG4gICAgaWYgKHRoaXNba0Nsb3NpbmdQcm9taXNlXSAhPT0gbnVsbCkge1xuICAgICAgLy8gRmlyc3QgY2FsbGVyIG9mIGNsb3NlKCkgaXMgcmVzcG9uc2libGUgZm9yIGVycm9yXG4gICAgICByZXR1cm4gdGhpc1trQ2xvc2luZ1Byb21pc2VdLmNhdGNoKG5vb3ApXG4gICAgfVxuXG4gICAgLy8gV3JhcCB0byBhdm9pZCByYWNlIGlzc3VlcyBvbiByZWN1cnNpdmUgY2FsbHNcbiAgICB0aGlzW2tDbG9zaW5nUHJvbWlzZV0gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzW2tQZW5kaW5nQ2xvc2VdID0gKCkgPT4ge1xuICAgICAgICB0aGlzW2tQZW5kaW5nQ2xvc2VdID0gbnVsbFxuICAgICAgICBwcml2YXRlQ2xvc2UodGhpcykudGhlbihyZXNvbHZlLCByZWplY3QpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIElmIHdvcmtpbmcgd2UnbGwgZGVsYXkgY2xvc2luZywgYnV0IHN0aWxsIGhhbmRsZSB0aGUgY2xvc2UgZXJyb3IgKGlmIGFueSkgaGVyZVxuICAgIGlmICghdGhpc1trV29ya2luZ10pIHtcbiAgICAgIHRoaXNba1BlbmRpbmdDbG9zZV0oKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzW2tDbG9zaW5nUHJvbWlzZV1cbiAgfVxuXG4gIGFzeW5jIF9jbG9zZSAoKSB7fVxuXG4gIGFzeW5jICogW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBpdGVtXG5cbiAgICAgIHdoaWxlICgoaXRlbSA9IChhd2FpdCB0aGlzLm5leHQoKSkpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgeWllbGQgaXRlbVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYXdhaXQgZGVzdHJveSh0aGlzLCBlcnIpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGF3YWl0IHRoaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxufVxuXG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgdGhpcyBjbGFzcyBpcyBub3QgKHlldCkgY2FsbGVkIEFic3RyYWN0RW50cnlJdGVyYXRvci5cbmNsYXNzIEFic3RyYWN0SXRlcmF0b3IgZXh0ZW5kcyBDb21tb25JdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuICAgIHRoaXNba0tleXNdID0gb3B0aW9ucy5rZXlzICE9PSBmYWxzZVxuICAgIHRoaXNba1ZhbHVlc10gPSBvcHRpb25zLnZhbHVlcyAhPT0gZmFsc2VcbiAgfVxuXG4gIFtrRGVjb2RlT25lXSAoZW50cnkpIHtcbiAgICBjb25zdCBrZXkgPSBlbnRyeVswXVxuICAgIGNvbnN0IHZhbHVlID0gZW50cnlbMV1cblxuICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZW50cnlbMF0gPSB0aGlzW2tLZXlzXSA/IHRoaXNba0tleUVuY29kaW5nXS5kZWNvZGUoa2V5KSA6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbnRyeVsxXSA9IHRoaXNba1ZhbHVlc10gPyB0aGlzW2tWYWx1ZUVuY29kaW5nXS5kZWNvZGUodmFsdWUpIDogdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5XG4gIH1cblxuICBba0RlY29kZU1hbnldIChlbnRyaWVzKSB7XG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzW2tLZXlFbmNvZGluZ11cbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpc1trVmFsdWVFbmNvZGluZ11cblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF1cbiAgICAgIGNvbnN0IHZhbHVlID0gZW50cnlbMV1cblxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSBlbnRyeVswXSA9IHRoaXNba0tleXNdID8ga2V5RW5jb2RpbmcuZGVjb2RlKGtleSkgOiB1bmRlZmluZWRcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSBlbnRyeVsxXSA9IHRoaXNba1ZhbHVlc10gPyB2YWx1ZUVuY29kaW5nLmRlY29kZSh2YWx1ZSkgOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQWJzdHJhY3RLZXlJdGVyYXRvciBleHRlbmRzIENvbW1vbkl0ZXJhdG9yIHtcbiAgW2tEZWNvZGVPbmVdIChrZXkpIHtcbiAgICByZXR1cm4gdGhpc1trS2V5RW5jb2RpbmddLmRlY29kZShrZXkpXG4gIH1cblxuICBba0RlY29kZU1hbnldIChrZXlzKSB7XG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzW2tLZXlFbmNvZGluZ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSBrZXlzW2ldID0ga2V5RW5jb2RpbmcuZGVjb2RlKGtleSlcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIGV4dGVuZHMgQ29tbW9uSXRlcmF0b3Ige1xuICBba0RlY29kZU9uZV0gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXNba1ZhbHVlRW5jb2RpbmddLmRlY29kZSh2YWx1ZSlcbiAgfVxuXG4gIFtrRGVjb2RlTWFueV0gKHZhbHVlcykge1xuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzW2tWYWx1ZUVuY29kaW5nXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2ldXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgdmFsdWVzW2ldID0gdmFsdWVFbmNvZGluZy5kZWNvZGUodmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8vIEludGVybmFsIHV0aWxpdHksIG5vdCB0eXBlZCBvciBleHBvcnRlZFxuY2xhc3MgSXRlcmF0b3JEZWNvZGVFcnJvciBleHRlbmRzIE1vZHVsZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKGNhdXNlKSB7XG4gICAgc3VwZXIoJ0l0ZXJhdG9yIGNvdWxkIG5vdCBkZWNvZGUgZGF0YScsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9ERUNPREVfRVJST1InLFxuICAgICAgY2F1c2VcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IHN0YXJ0V29yayA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICBpZiAoaXRlcmF0b3Jba0Nsb3NpbmdQcm9taXNlXSAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignSXRlcmF0b3IgaXMgbm90IG9wZW46IGNhbm5vdCByZWFkIGFmdGVyIGNsb3NlKCknLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfSVRFUkFUT1JfTk9UX09QRU4nXG4gICAgfSlcbiAgfSBlbHNlIGlmIChpdGVyYXRvcltrV29ya2luZ10pIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0l0ZXJhdG9yIGlzIGJ1c3k6IGNhbm5vdCByZWFkIHVudGlsIHByZXZpb3VzIHJlYWQgaGFzIGNvbXBsZXRlZCcsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9JVEVSQVRPUl9CVVNZJ1xuICAgIH0pXG4gIH0gZWxzZSBpZiAoaXRlcmF0b3Jba1NpZ25hbF0gIT09IG51bGwgJiYgaXRlcmF0b3Jba1NpZ25hbF0uYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBBYm9ydEVycm9yKClcbiAgfVxuXG4gIGl0ZXJhdG9yW2tXb3JraW5nXSA9IHRydWVcbn1cblxuY29uc3QgZW5kV29yayA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICBpdGVyYXRvcltrV29ya2luZ10gPSBmYWxzZVxuXG4gIGlmIChpdGVyYXRvcltrUGVuZGluZ0Nsb3NlXSAhPT0gbnVsbCkge1xuICAgIGl0ZXJhdG9yW2tQZW5kaW5nQ2xvc2VdKClcbiAgfVxufVxuXG5jb25zdCBwcml2YXRlQ2xvc2UgPSBhc3luYyBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgYXdhaXQgaXRlcmF0b3IuX2Nsb3NlKClcbiAgaXRlcmF0b3IuZGIuZGV0YWNoUmVzb3VyY2UoaXRlcmF0b3IpXG59XG5cbmNvbnN0IGRlc3Ryb3kgPSBhc3luYyBmdW5jdGlvbiAoaXRlcmF0b3IsIGVycikge1xuICB0cnkge1xuICAgIGF3YWl0IGl0ZXJhdG9yLmNsb3NlKClcbiAgfSBjYXRjaCAoY2xvc2VFcnIpIHtcbiAgICB0aHJvdyBjb21iaW5lRXJyb3JzKFtlcnIsIGNsb3NlRXJyXSlcbiAgfVxuXG4gIHRocm93IGVyclxufVxuXG4vLyBFeHBvc2VkIHNvIHRoYXQgQWJzdHJhY3RMZXZlbCBjYW4gc2V0IHRoZXNlIG9wdGlvbnNcbkFic3RyYWN0SXRlcmF0b3Iua2V5RW5jb2RpbmcgPSBrS2V5RW5jb2RpbmdcbkFic3RyYWN0SXRlcmF0b3IudmFsdWVFbmNvZGluZyA9IGtWYWx1ZUVuY29kaW5nXG5cbmV4cG9ydHMuQWJzdHJhY3RJdGVyYXRvciA9IEFic3RyYWN0SXRlcmF0b3JcbmV4cG9ydHMuQWJzdHJhY3RLZXlJdGVyYXRvciA9IEFic3RyYWN0S2V5SXRlcmF0b3JcbmV4cG9ydHMuQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yID0gQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBBYnN0cmFjdEtleUl0ZXJhdG9yLCBBYnN0cmFjdFZhbHVlSXRlcmF0b3IgfSA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0LWl0ZXJhdG9yJylcblxuY29uc3Qga0l0ZXJhdG9yID0gU3ltYm9sKCdpdGVyYXRvcicpXG5jb25zdCBrSGFuZGxlT25lID0gU3ltYm9sKCdoYW5kbGVPbmUnKVxuY29uc3Qga0hhbmRsZU1hbnkgPSBTeW1ib2woJ2hhbmRsZU1hbnknKVxuXG5jbGFzcyBEZWZhdWx0S2V5SXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdEtleUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tJdGVyYXRvcl0gPSBkYi5pdGVyYXRvcih7IC4uLm9wdGlvbnMsIGtleXM6IHRydWUsIHZhbHVlczogZmFsc2UgfSlcbiAgfVxuXG4gIFtrSGFuZGxlT25lXSAoZW50cnkpIHtcbiAgICByZXR1cm4gZW50cnlbMF1cbiAgfVxuXG4gIFtrSGFuZGxlTWFueV0gKGVudHJpZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVudHJpZXNbaV0gPSBlbnRyaWVzW2ldWzBdXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIERlZmF1bHRWYWx1ZUl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tJdGVyYXRvcl0gPSBkYi5pdGVyYXRvcih7IC4uLm9wdGlvbnMsIGtleXM6IGZhbHNlLCB2YWx1ZXM6IHRydWUgfSlcbiAgfVxuXG4gIFtrSGFuZGxlT25lXSAoZW50cnkpIHtcbiAgICByZXR1cm4gZW50cnlbMV1cbiAgfVxuXG4gIFtrSGFuZGxlTWFueV0gKGVudHJpZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVudHJpZXNbaV0gPSBlbnRyaWVzW2ldWzFdXG4gICAgfVxuICB9XG59XG5cbmZvciAoY29uc3QgSXRlcmF0b3Igb2YgW0RlZmF1bHRLZXlJdGVyYXRvciwgRGVmYXVsdFZhbHVlSXRlcmF0b3JdKSB7XG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5uZXh0KClcbiAgICByZXR1cm4gZW50cnkgPT09IHVuZGVmaW5lZCA/IGVudHJ5IDogdGhpc1trSGFuZGxlT25lXShlbnRyeSlcbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dHYgPSBhc3luYyBmdW5jdGlvbiAoc2l6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0ubmV4dHYoc2l6ZSwgb3B0aW9ucylcbiAgICB0aGlzW2tIYW5kbGVNYW55XShlbnRyaWVzKVxuICAgIHJldHVybiBlbnRyaWVzXG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX2FsbCA9IGFzeW5jIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5hbGwob3B0aW9ucylcbiAgICB0aGlzW2tIYW5kbGVNYW55XShlbnRyaWVzKVxuICAgIHJldHVybiBlbnRyaWVzXG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX3NlZWsgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdGhpc1trSXRlcmF0b3JdLnNlZWsodGFyZ2V0LCBvcHRpb25zKVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9jbG9zZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1trSXRlcmF0b3JdLmNsb3NlKClcbiAgfVxufVxuXG4vLyBJbnRlcm5hbCB1dGlsaXRpZXMsIHNob3VsZCBiZSB0eXBlZCBhcyBBYnN0cmFjdEtleUl0ZXJhdG9yIGFuZCBBYnN0cmFjdFZhbHVlSXRlcmF0b3JcbmV4cG9ydHMuRGVmYXVsdEtleUl0ZXJhdG9yID0gRGVmYXVsdEtleUl0ZXJhdG9yXG5leHBvcnRzLkRlZmF1bHRWYWx1ZUl0ZXJhdG9yID0gRGVmYXVsdFZhbHVlSXRlcmF0b3JcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEFic3RyYWN0SXRlcmF0b3IsIEFic3RyYWN0S2V5SXRlcmF0b3IsIEFic3RyYWN0VmFsdWVJdGVyYXRvciB9ID0gcmVxdWlyZSgnLi4vYWJzdHJhY3QtaXRlcmF0b3InKVxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuXG5jb25zdCBrTnV0ID0gU3ltYm9sKCdudXQnKVxuY29uc3Qga1VuZGVmZXIgPSBTeW1ib2woJ3VuZGVmZXInKVxuY29uc3Qga0ZhY3RvcnkgPSBTeW1ib2woJ2ZhY3RvcnknKVxuY29uc3Qga1NpZ25hbE9wdGlvbnMgPSBTeW1ib2woJ3NpZ25hbE9wdGlvbnMnKVxuXG5jbGFzcyBEZWZlcnJlZEl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trTnV0XSA9IG51bGxcbiAgICB0aGlzW2tGYWN0b3J5XSA9ICgpID0+IGRiLml0ZXJhdG9yKG9wdGlvbnMpXG4gICAgdGhpc1trU2lnbmFsT3B0aW9uc10gPSB7IHNpZ25hbDogb3B0aW9ucy5zaWduYWwgfVxuXG4gICAgdGhpcy5kYi5kZWZlcigoKSA9PiB0aGlzW2tVbmRlZmVyXSgpLCB0aGlzW2tTaWduYWxPcHRpb25zXSlcbiAgfVxufVxuXG5jbGFzcyBEZWZlcnJlZEtleUl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RLZXlJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trTnV0XSA9IG51bGxcbiAgICB0aGlzW2tGYWN0b3J5XSA9ICgpID0+IGRiLmtleXMob3B0aW9ucylcbiAgICB0aGlzW2tTaWduYWxPcHRpb25zXSA9IHsgc2lnbmFsOiBvcHRpb25zLnNpZ25hbCB9XG5cbiAgICB0aGlzLmRiLmRlZmVyKCgpID0+IHRoaXNba1VuZGVmZXJdKCksIHRoaXNba1NpZ25hbE9wdGlvbnNdKVxuICB9XG59XG5cbmNsYXNzIERlZmVycmVkVmFsdWVJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0VmFsdWVJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trTnV0XSA9IG51bGxcbiAgICB0aGlzW2tGYWN0b3J5XSA9ICgpID0+IGRiLnZhbHVlcyhvcHRpb25zKVxuICAgIHRoaXNba1NpZ25hbE9wdGlvbnNdID0geyBzaWduYWw6IG9wdGlvbnMuc2lnbmFsIH1cblxuICAgIHRoaXMuZGIuZGVmZXIoKCkgPT4gdGhpc1trVW5kZWZlcl0oKSwgdGhpc1trU2lnbmFsT3B0aW9uc10pXG4gIH1cbn1cblxuZm9yIChjb25zdCBJdGVyYXRvciBvZiBbRGVmZXJyZWRJdGVyYXRvciwgRGVmZXJyZWRLZXlJdGVyYXRvciwgRGVmZXJyZWRWYWx1ZUl0ZXJhdG9yXSkge1xuICBJdGVyYXRvci5wcm90b3R5cGVba1VuZGVmZXJdID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRiLnN0YXR1cyA9PT0gJ29wZW4nKSB7XG4gICAgICB0aGlzW2tOdXRdID0gdGhpc1trRmFjdG9yeV0oKVxuICAgIH1cbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpc1trTnV0XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXNba051dF0ubmV4dCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRiLnN0YXR1cyA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYi5kZWZlckFzeW5jKCgpID0+IHRoaXMuX25leHQoKSwgdGhpc1trU2lnbmFsT3B0aW9uc10pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignSXRlcmF0b3IgaXMgbm90IG9wZW46IGNhbm5vdCBjYWxsIG5leHQoKSBhZnRlciBjbG9zZSgpJywge1xuICAgICAgICBjb2RlOiAnTEVWRUxfSVRFUkFUT1JfTk9UX09QRU4nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dHYgPSBhc3luYyBmdW5jdGlvbiAoc2l6ZSwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzW2tOdXRdICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpc1trTnV0XS5uZXh0dihzaXplLCBvcHRpb25zKVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYi5zdGF0dXMgPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGIuZGVmZXJBc3luYygoKSA9PiB0aGlzLl9uZXh0dihzaXplLCBvcHRpb25zKSwgdGhpc1trU2lnbmFsT3B0aW9uc10pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignSXRlcmF0b3IgaXMgbm90IG9wZW46IGNhbm5vdCBjYWxsIG5leHR2KCkgYWZ0ZXIgY2xvc2UoKScsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0lURVJBVE9SX05PVF9PUEVOJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX2FsbCA9IGFzeW5jIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKHRoaXNba051dF0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW2tOdXRdLmFsbCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRiLnN0YXR1cyA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYi5kZWZlckFzeW5jKCgpID0+IHRoaXMuX2FsbChvcHRpb25zKSwgdGhpc1trU2lnbmFsT3B0aW9uc10pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignSXRlcmF0b3IgaXMgbm90IG9wZW46IGNhbm5vdCBjYWxsIGFsbCgpIGFmdGVyIGNsb3NlKCknLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9JVEVSQVRPUl9OT1RfT1BFTidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9zZWVrID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzW2tOdXRdICE9PSBudWxsKSB7XG4gICAgICAvLyBUT0RPOiBleHBsYWluIHdoeSB3ZSBuZWVkIF9zZWVrKCkgcmF0aGVyIHRoYW4gc2VlaygpIGhlcmVcbiAgICAgIHRoaXNba051dF0uX3NlZWsodGFyZ2V0LCBvcHRpb25zKVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYi5zdGF0dXMgPT09ICdvcGVuaW5nJykge1xuICAgICAgdGhpcy5kYi5kZWZlcigoKSA9PiB0aGlzLl9zZWVrKHRhcmdldCwgb3B0aW9ucyksIHRoaXNba1NpZ25hbE9wdGlvbnNdKVxuICAgIH1cbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fY2xvc2UgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXNba051dF0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW2tOdXRdLmNsb3NlKClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGIuc3RhdHVzID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRiLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5fY2xvc2UoKSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5EZWZlcnJlZEl0ZXJhdG9yID0gRGVmZXJyZWRJdGVyYXRvclxuZXhwb3J0cy5EZWZlcnJlZEtleUl0ZXJhdG9yID0gRGVmZXJyZWRLZXlJdGVyYXRvclxuZXhwb3J0cy5EZWZlcnJlZFZhbHVlSXRlcmF0b3IgPSBEZWZlcnJlZFZhbHVlSXRlcmF0b3JcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnByZWZpeERlc2NlbmRhbnRLZXkgPSBmdW5jdGlvbiAoa2V5LCBrZXlGb3JtYXQsIGRlc2NlbmRhbnQsIGFuY2VzdG9yKSB7XG4gIHdoaWxlIChkZXNjZW5kYW50ICE9PSBudWxsICYmIGRlc2NlbmRhbnQgIT09IGFuY2VzdG9yKSB7XG4gICAga2V5ID0gZGVzY2VuZGFudC5wcmVmaXhLZXkoa2V5LCBrZXlGb3JtYXQsIHRydWUpXG4gICAgZGVzY2VuZGFudCA9IGRlc2NlbmRhbnQucGFyZW50XG4gIH1cblxuICByZXR1cm4ga2V5XG59XG5cbi8vIENoZWNrIGlmIGRiIGlzIGEgZGVzY2VuZGFudCBvZiBhbmNlc3RvclxuLy8gVE9ETzogb3B0aW1pemUsIHdoZW4gdXNlZCBhbG9uZ3NpZGUgcHJlZml4RGVzY2VuZGFudEtleVxuLy8gd2hpY2ggbWVhbnMgd2UgdmlzaXQgcGFyZW50cyB0d2ljZS5cbmV4cG9ydHMuaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24gKGRiLCBhbmNlc3Rvcikge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChkYi5wYXJlbnQgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG4gICAgaWYgKGRiLnBhcmVudCA9PT0gYW5jZXN0b3IpIHJldHVybiB0cnVlXG4gICAgZGIgPSBkYi5wYXJlbnRcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgcHJlZml4RGVzY2VuZGFudEtleSwgaXNEZXNjZW5kYW50IH0gPSByZXF1aXJlKCcuL3ByZWZpeGVzJylcblxuY29uc3Qga0RiID0gU3ltYm9sKCdkYicpXG5jb25zdCBrUHJpdmF0ZU9wZXJhdGlvbnMgPSBTeW1ib2woJ3ByaXZhdGVPcGVyYXRpb25zJylcbmNvbnN0IGtQdWJsaWNPcGVyYXRpb25zID0gU3ltYm9sKCdwdWJsaWNPcGVyYXRpb25zJylcblxuLy8gQW4gaW50ZXJmYWNlIGZvciBwcmV3cml0ZSBob29rIGZ1bmN0aW9ucyB0byBhZGQgb3BlcmF0aW9uc1xuY2xhc3MgUHJld3JpdGVCYXRjaCB7XG4gIGNvbnN0cnVjdG9yIChkYiwgcHJpdmF0ZU9wZXJhdGlvbnMsIHB1YmxpY09wZXJhdGlvbnMpIHtcbiAgICB0aGlzW2tEYl0gPSBkYlxuXG4gICAgLy8gTm90ZTogaWYgZm9yIGRiLmJhdGNoKFtdKSwgdGhlc2UgYXJyYXlzIGluY2x1ZGUgaW5wdXQgb3BlcmF0aW9ucyAob3IgZW1wdHkgc2xvdHNcbiAgICAvLyBmb3IgdGhlbSkgYnV0IGlmIGZvciBjaGFpbmVkIGJhdGNoIHRoZW4gaXQgZG9lcyBub3QuIFNtYWxsIGltcGxlbWVudGF0aW9uIGRldGFpbC5cbiAgICB0aGlzW2tQcml2YXRlT3BlcmF0aW9uc10gPSBwcml2YXRlT3BlcmF0aW9uc1xuICAgIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdID0gcHVibGljT3BlcmF0aW9uc1xuICB9XG5cbiAgYWRkIChvcCkge1xuICAgIGNvbnN0IGlzUHV0ID0gb3AudHlwZSA9PT0gJ3B1dCdcbiAgICBjb25zdCBkZWxlZ2F0ZWQgPSBvcC5zdWJsZXZlbCAhPSBudWxsXG4gICAgY29uc3QgZGIgPSBkZWxlZ2F0ZWQgPyBvcC5zdWJsZXZlbCA6IHRoaXNba0RiXVxuXG4gICAgY29uc3Qga2V5RXJyb3IgPSBkYi5fY2hlY2tLZXkob3Aua2V5KVxuICAgIGlmIChrZXlFcnJvciAhPSBudWxsKSB0aHJvdyBrZXlFcnJvclxuXG4gICAgb3Aua2V5RW5jb2RpbmcgPSBkYi5rZXlFbmNvZGluZyhvcC5rZXlFbmNvZGluZylcblxuICAgIGlmIChpc1B1dCkge1xuICAgICAgY29uc3QgdmFsdWVFcnJvciA9IGRiLl9jaGVja1ZhbHVlKG9wLnZhbHVlKVxuICAgICAgaWYgKHZhbHVlRXJyb3IgIT0gbnVsbCkgdGhyb3cgdmFsdWVFcnJvclxuXG4gICAgICBvcC52YWx1ZUVuY29kaW5nID0gZGIudmFsdWVFbmNvZGluZyhvcC52YWx1ZUVuY29kaW5nKVxuICAgIH0gZWxzZSBpZiAob3AudHlwZSAhPT0gJ2RlbCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBIGJhdGNoIG9wZXJhdGlvbiBtdXN0IGhhdmUgYSB0eXBlIHByb3BlcnR5IHRoYXQgaXMgJ3B1dCcgb3IgJ2RlbCdcIilcbiAgICB9XG5cbiAgICAvLyBFbmNvZGUgZGF0YSBmb3IgcHJpdmF0ZSBBUElcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IG9wLmtleUVuY29kaW5nXG4gICAgY29uc3QgcHJlZW5jb2RlZEtleSA9IGtleUVuY29kaW5nLmVuY29kZShvcC5rZXkpXG4gICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG5cbiAgICAvLyBJZiB0aGUgc3VibGV2ZWwgaXMgbm90IGEgZGVzY2VuZGFudCB0aGVuIGZvcndhcmQgdGhhdCBvcHRpb24gdG8gdGhlIHBhcmVudCBkYlxuICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgZXJyb25lb3VzbHkgYWRkIG91ciBvd24gcHJlZml4IHRvIHRoZSBrZXkgb2YgdGhlIG9wZXJhdGlvbi5cbiAgICBjb25zdCBzaWJsaW5ncyA9IGRlbGVnYXRlZCAmJiAhaXNEZXNjZW5kYW50KG9wLnN1YmxldmVsLCB0aGlzW2tEYl0pICYmIG9wLnN1YmxldmVsICE9PSB0aGlzW2tEYl1cbiAgICBjb25zdCBlbmNvZGVkS2V5ID0gZGVsZWdhdGVkICYmICFzaWJsaW5nc1xuICAgICAgPyBwcmVmaXhEZXNjZW5kYW50S2V5KHByZWVuY29kZWRLZXksIGtleUZvcm1hdCwgZGIsIHRoaXNba0RiXSlcbiAgICAgIDogcHJlZW5jb2RlZEtleVxuXG4gICAgLy8gT25seSBwcmVmaXggb25jZVxuICAgIGlmIChkZWxlZ2F0ZWQgJiYgIXNpYmxpbmdzKSB7XG4gICAgICBvcC5zdWJsZXZlbCA9IG51bGxcbiAgICB9XG5cbiAgICBsZXQgcHVibGljT3BlcmF0aW9uID0gbnVsbFxuXG4gICAgLy8gSWYgdGhlIHN1YmxldmVsIGlzIG5vdCBhIGRlc2NlbmRhbnQgdGhlbiB3ZSBzaG91bGRuJ3QgZW1pdCBldmVudHNcbiAgICBpZiAodGhpc1trUHVibGljT3BlcmF0aW9uc10gIT09IG51bGwgJiYgIXNpYmxpbmdzKSB7XG4gICAgICAvLyBDbG9uZSBvcCBiZWZvcmUgd2UgbXV0YXRlIGl0IGZvciB0aGUgcHJpdmF0ZSBBUElcbiAgICAgIHB1YmxpY09wZXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9wKVxuICAgICAgcHVibGljT3BlcmF0aW9uLmVuY29kZWRLZXkgPSBlbmNvZGVkS2V5XG5cbiAgICAgIGlmIChkZWxlZ2F0ZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIGVtaXR0ZWQgZGF0YSBtYWtlcyBzZW5zZSBpbiB0aGUgY29udGV4dCBvZiB0aGlzW2tEYl1cbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleSA9IGVuY29kZWRLZXlcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleUVuY29kaW5nID0gdGhpc1trRGJdLmtleUVuY29kaW5nKGtleUZvcm1hdClcbiAgICAgIH1cblxuICAgICAgdGhpc1trUHVibGljT3BlcmF0aW9uc10ucHVzaChwdWJsaWNPcGVyYXRpb24pXG4gICAgfVxuXG4gICAgLy8gSWYgd2UncmUgZm9yd2FyZGluZyB0aGUgc3VibGV2ZWwgb3B0aW9uIHRoZW4gZG9uJ3QgcHJlZml4IHRoZSBrZXkgeWV0XG4gICAgb3Aua2V5ID0gc2libGluZ3MgPyBlbmNvZGVkS2V5IDogdGhpc1trRGJdLnByZWZpeEtleShlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIHRydWUpXG4gICAgb3Aua2V5RW5jb2RpbmcgPSBrZXlGb3JtYXRcblxuICAgIGlmIChpc1B1dCkge1xuICAgICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IG9wLnZhbHVlRW5jb2RpbmdcbiAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IHZhbHVlRW5jb2RpbmcuZW5jb2RlKG9wLnZhbHVlKVxuICAgICAgY29uc3QgdmFsdWVGb3JtYXQgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgICBvcC52YWx1ZSA9IGVuY29kZWRWYWx1ZVxuICAgICAgb3AudmFsdWVFbmNvZGluZyA9IHZhbHVlRm9ybWF0XG5cbiAgICAgIGlmIChwdWJsaWNPcGVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmVuY29kZWRWYWx1ZSA9IGVuY29kZWRWYWx1ZVxuXG4gICAgICAgIGlmIChkZWxlZ2F0ZWQpIHtcbiAgICAgICAgICBwdWJsaWNPcGVyYXRpb24udmFsdWUgPSBlbmNvZGVkVmFsdWVcbiAgICAgICAgICBwdWJsaWNPcGVyYXRpb24udmFsdWVFbmNvZGluZyA9IHRoaXNba0RiXS52YWx1ZUVuY29kaW5nKHZhbHVlRm9ybWF0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpc1trUHJpdmF0ZU9wZXJhdGlvbnNdLnB1c2gob3ApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5leHBvcnRzLlByZXdyaXRlQmF0Y2ggPSBQcmV3cml0ZUJhdGNoXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgY29tYmluZUVycm9ycyA9IHJlcXVpcmUoJ21heWJlLWNvbWJpbmUtZXJyb3JzJylcbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcbmNvbnN0IHsgZ2V0T3B0aW9ucywgZW1wdHlPcHRpb25zLCBub29wIH0gPSByZXF1aXJlKCcuL2xpYi9jb21tb24nKVxuY29uc3QgeyBwcmVmaXhEZXNjZW5kYW50S2V5LCBpc0Rlc2NlbmRhbnQgfSA9IHJlcXVpcmUoJy4vbGliL3ByZWZpeGVzJylcbmNvbnN0IHsgUHJld3JpdGVCYXRjaCB9ID0gcmVxdWlyZSgnLi9saWIvcHJld3JpdGUtYmF0Y2gnKVxuXG5jb25zdCBrU3RhdHVzID0gU3ltYm9sKCdzdGF0dXMnKVxuY29uc3Qga1B1YmxpY09wZXJhdGlvbnMgPSBTeW1ib2woJ3B1YmxpY09wZXJhdGlvbnMnKVxuY29uc3Qga0xlZ2FjeU9wZXJhdGlvbnMgPSBTeW1ib2woJ2xlZ2FjeU9wZXJhdGlvbnMnKVxuY29uc3Qga1ByaXZhdGVPcGVyYXRpb25zID0gU3ltYm9sKCdwcml2YXRlT3BlcmF0aW9ucycpXG5jb25zdCBrQ2xvc2VQcm9taXNlID0gU3ltYm9sKCdjbG9zZVByb21pc2UnKVxuY29uc3Qga0xlbmd0aCA9IFN5bWJvbCgnbGVuZ3RoJylcbmNvbnN0IGtQcmV3cml0ZVJ1biA9IFN5bWJvbCgncHJld3JpdGVSdW4nKVxuY29uc3Qga1ByZXdyaXRlQmF0Y2ggPSBTeW1ib2woJ3ByZXdyaXRlQmF0Y2gnKVxuY29uc3Qga1ByZXdyaXRlRGF0YSA9IFN5bWJvbCgncHJld3JpdGVEYXRhJylcbmNvbnN0IGtBZGRNb2RlID0gU3ltYm9sKCdhZGRNb2RlJylcblxuY2xhc3MgQWJzdHJhY3RDaGFpbmVkQmF0Y2gge1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGRiICE9PSAnb2JqZWN0JyB8fCBkYiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaGludCA9IGRiID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGRiXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBhYnN0cmFjdC1sZXZlbCBkYXRhYmFzZSwgcmVjZWl2ZWQgJHtoaW50fWApXG4gICAgfVxuXG4gICAgY29uc3QgZW5hYmxlV3JpdGVFdmVudCA9IGRiLmxpc3RlbmVyQ291bnQoJ3dyaXRlJykgPiAwXG4gICAgY29uc3QgZW5hYmxlUHJld3JpdGVIb29rID0gIWRiLmhvb2tzLnByZXdyaXRlLm5vb3BcblxuICAgIC8vIE9wZXJhdGlvbnMgZm9yIHdyaXRlIGV2ZW50LiBXZSBjYW4gc2tpcCBwb3B1bGF0aW5nIHRoaXMgYXJyYXkgKGFuZCBjbG9uaW5nIG9mXG4gICAgLy8gb3BlcmF0aW9ucywgd2hpY2ggaXMgdGhlIGV4cGVuc2l2ZSBwYXJ0KSBpZiB0aGVyZSBhcmUgMCB3cml0ZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgdGhpc1trUHVibGljT3BlcmF0aW9uc10gPSBlbmFibGVXcml0ZUV2ZW50ID8gW10gOiBudWxsXG5cbiAgICAvLyBPcGVyYXRpb25zIGZvciBsZWdhY3kgYmF0Y2ggZXZlbnQuIElmIHVzZXIgb3B0ZWQtaW4gdG8gd3JpdGUgZXZlbnQgb3IgcHJld3JpdGVcbiAgICAvLyBob29rLCBza2lwIGxlZ2FjeSBiYXRjaCBldmVudC4gV2UgY2FuJ3Qgc2tpcCB0aGUgYmF0Y2ggZXZlbnQgYmFzZWQgb24gbGlzdGVuZXJcbiAgICAvLyBjb3VudCwgYmVjYXVzZSBhIGxpc3RlbmVyIG1heSBiZSBhZGRlZCBiZXR3ZWVuIHB1dCgpIG9yIGRlbCgpIGFuZCB3cml0ZSgpLlxuICAgIHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdID0gZW5hYmxlV3JpdGVFdmVudCB8fCBlbmFibGVQcmV3cml0ZUhvb2sgPyBudWxsIDogW11cblxuICAgIHRoaXNba0xlbmd0aF0gPSAwXG4gICAgdGhpc1trU3RhdHVzXSA9ICdvcGVuJ1xuICAgIHRoaXNba0Nsb3NlUHJvbWlzZV0gPSBudWxsXG4gICAgdGhpc1trQWRkTW9kZV0gPSBnZXRPcHRpb25zKG9wdGlvbnMsIGVtcHR5T3B0aW9ucykuYWRkID09PSB0cnVlXG5cbiAgICBpZiAoZW5hYmxlUHJld3JpdGVIb29rKSB7XG4gICAgICAvLyBVc2Ugc2VwYXJhdGUgYXJyYXlzIHRvIGNvbGxlY3Qgb3BlcmF0aW9ucyBhZGRlZCBieSBob29rIGZ1bmN0aW9ucywgYmVjYXVzZVxuICAgICAgLy8gd2Ugd2FpdCB0byBhcHBseSB0aG9zZSB1bnRpbCB3cml0ZSgpLiBTdG9yZSB0aGVzZSBhcnJheXMgaW4gUHJld3JpdGVEYXRhIHdoaWNoXG4gICAgICAvLyBleGlzdHMgdG8gc2VwYXJhdGUgaW50ZXJuYWwgZGF0YSBmcm9tIHRoZSBwdWJsaWMgUHJld3JpdGVCYXRjaCBpbnRlcmZhY2UuXG4gICAgICBjb25zdCBkYXRhID0gbmV3IFByZXdyaXRlRGF0YShbXSwgZW5hYmxlV3JpdGVFdmVudCA/IFtdIDogbnVsbClcblxuICAgICAgdGhpc1trUHJld3JpdGVEYXRhXSA9IGRhdGFcbiAgICAgIHRoaXNba1ByZXdyaXRlQmF0Y2hdID0gbmV3IFByZXdyaXRlQmF0Y2goZGIsIGRhdGFba1ByaXZhdGVPcGVyYXRpb25zXSwgZGF0YVtrUHVibGljT3BlcmF0aW9uc10pXG4gICAgICB0aGlzW2tQcmV3cml0ZVJ1bl0gPSBkYi5ob29rcy5wcmV3cml0ZS5ydW4gLy8gVE9ETzogZG9jdW1lbnQgd2h5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNba1ByZXdyaXRlRGF0YV0gPSBudWxsXG4gICAgICB0aGlzW2tQcmV3cml0ZUJhdGNoXSA9IG51bGxcbiAgICAgIHRoaXNba1ByZXdyaXRlUnVuXSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLmRiID0gZGJcbiAgICB0aGlzLmRiLmF0dGFjaFJlc291cmNlKHRoaXMpXG4gIH1cblxuICBnZXQgbGVuZ3RoICgpIHtcbiAgICBpZiAodGhpc1trUHJld3JpdGVEYXRhXSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXNba0xlbmd0aF0gKyB0aGlzW2tQcmV3cml0ZURhdGFdLmxlbmd0aFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpc1trTGVuZ3RoXVxuICAgIH1cbiAgfVxuXG4gIHB1dCAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGFzc2VydFN0YXR1cyh0aGlzKVxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIGVtcHR5T3B0aW9ucylcblxuICAgIGNvbnN0IGRlbGVnYXRlZCA9IG9wdGlvbnMuc3VibGV2ZWwgIT0gbnVsbFxuICAgIGNvbnN0IGRiID0gZGVsZWdhdGVkID8gb3B0aW9ucy5zdWJsZXZlbCA6IHRoaXMuZGJcbiAgICBjb25zdCBvcmlnaW5hbCA9IG9wdGlvbnNcbiAgICBjb25zdCBrZXlFcnJvciA9IGRiLl9jaGVja0tleShrZXkpXG4gICAgY29uc3QgdmFsdWVFcnJvciA9IGRiLl9jaGVja1ZhbHVlKHZhbHVlKVxuXG4gICAgaWYgKGtleUVycm9yICE9IG51bGwpIHRocm93IGtleUVycm9yXG4gICAgaWYgKHZhbHVlRXJyb3IgIT0gbnVsbCkgdGhyb3cgdmFsdWVFcnJvclxuXG4gICAgLy8gQXZvaWQgc3ByZWFkIG9wZXJhdG9yIGJlY2F1c2Ugb2YgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwNDU0MFxuICAgIGNvbnN0IG9wID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgdHlwZTogJ3B1dCcsXG4gICAgICBrZXksXG4gICAgICB2YWx1ZSxcbiAgICAgIGtleUVuY29kaW5nOiBkYi5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nKSxcbiAgICAgIHZhbHVlRW5jb2Rpbmc6IGRiLnZhbHVlRW5jb2Rpbmcob3B0aW9ucy52YWx1ZUVuY29kaW5nKVxuICAgIH0pXG5cbiAgICBpZiAodGhpc1trUHJld3JpdGVSdW5dICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBOb3RlOiB3ZSBjb3VsZCBoYXZlIGNob3NlbiB0byByZWN1cnNlIGhlcmUgc28gdGhhdCBwcmV3cml0ZUJhdGNoLnB1dCgpIHdvdWxkXG4gICAgICAgIC8vIGNhbGwgdGhpcy5wdXQoKS4gQnV0IHRoZW4gb3BlcmF0aW9ucyBhZGRlZCBieSBob29rIGZ1bmN0aW9ucyB3b3VsZCBiZSBpbnNlcnRlZFxuICAgICAgICAvLyBiZWZvcmUgcmF0aGVyIHRoYW4gYWZ0ZXIgdXNlciBvcGVyYXRpb25zLiBJbnN0ZWFkIHdlIHByb2Nlc3MgdGhvc2Ugb3BlcmF0aW9uc1xuICAgICAgICAvLyBsYXppbHkgaW4gd3JpdGUoKS4gVGhpcyBkb2VzIGh1cnQgdGhlIG9ubHkgcGVyZm9ybWFuY2UgYmVuZWZpdCBiZW5lZml0IG9mIGFcbiAgICAgICAgLy8gY2hhaW5lZCBiYXRjaCB0aG91Z2gsIHdoaWNoIGlzIHRoYXQgaXQgYXZvaWRzIGJsb2NraW5nIHRoZSBldmVudCBsb29wIHdpdGhcbiAgICAgICAgLy8gbW9yZSB0aGFuIG9uZSBvcGVyYXRpb24gYXQgYSB0aW1lLiBPbiB0aGUgb3RoZXIgaGFuZCwgaWYgb3BlcmF0aW9ucyBhZGRlZCBieVxuICAgICAgICAvLyBob29rIGZ1bmN0aW9ucyBhcmUgYWRqYWNlbnQgKGkuZS4gc29ydGVkKSBjb21taXR0aW5nIHRoZW0gc2hvdWxkIGJlIGZhc3Rlci5cbiAgICAgICAgdGhpc1trUHJld3JpdGVSdW5dKG9wLCB0aGlzW2tQcmV3cml0ZUJhdGNoXSlcblxuICAgICAgICAvLyBOb3JtYWxpemUgZW5jb2RpbmdzIGFnYWluIGluIGNhc2UgdGhleSB3ZXJlIG1vZGlmaWVkXG4gICAgICAgIG9wLmtleUVuY29kaW5nID0gZGIua2V5RW5jb2Rpbmcob3Aua2V5RW5jb2RpbmcpXG4gICAgICAgIG9wLnZhbHVlRW5jb2RpbmcgPSBkYi52YWx1ZUVuY29kaW5nKG9wLnZhbHVlRW5jb2RpbmcpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdUaGUgcHJld3JpdGUgaG9vayBmYWlsZWQgb24gYmF0Y2gucHV0KCknLCB7XG4gICAgICAgICAgY29kZTogJ0xFVkVMX0hPT0tfRVJST1InLFxuICAgICAgICAgIGNhdXNlOiBlcnJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbmNvZGUgZGF0YSBmb3IgcHJpdmF0ZSBBUElcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IG9wLmtleUVuY29kaW5nXG4gICAgY29uc3QgcHJlZW5jb2RlZEtleSA9IGtleUVuY29kaW5nLmVuY29kZShvcC5rZXkpXG4gICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG5cbiAgICAvLyBJZiB0aGUgc3VibGV2ZWwgaXMgbm90IGEgZGVzY2VuZGFudCB0aGVuIGZvcndhcmQgdGhhdCBvcHRpb24gdG8gdGhlIHBhcmVudCBkYlxuICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgZXJyb25lb3VzbHkgYWRkIG91ciBvd24gcHJlZml4IHRvIHRoZSBrZXkgb2YgdGhlIG9wZXJhdGlvbi5cbiAgICBjb25zdCBzaWJsaW5ncyA9IGRlbGVnYXRlZCAmJiAhaXNEZXNjZW5kYW50KG9wLnN1YmxldmVsLCB0aGlzLmRiKSAmJiBvcC5zdWJsZXZlbCAhPT0gdGhpcy5kYlxuICAgIGNvbnN0IGVuY29kZWRLZXkgPSBkZWxlZ2F0ZWQgJiYgIXNpYmxpbmdzXG4gICAgICA/IHByZWZpeERlc2NlbmRhbnRLZXkocHJlZW5jb2RlZEtleSwga2V5Rm9ybWF0LCBkYiwgdGhpcy5kYilcbiAgICAgIDogcHJlZW5jb2RlZEtleVxuXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IG9wLnZhbHVlRW5jb2RpbmdcbiAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSB2YWx1ZUVuY29kaW5nLmVuY29kZShvcC52YWx1ZSlcbiAgICBjb25zdCB2YWx1ZUZvcm1hdCA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICAvLyBPbmx5IHByZWZpeCBvbmNlXG4gICAgaWYgKGRlbGVnYXRlZCAmJiAhc2libGluZ3MpIHtcbiAgICAgIG9wLnN1YmxldmVsID0gbnVsbFxuICAgIH1cblxuICAgIC8vIElmIHRoZSBzdWJsZXZlbCBpcyBub3QgYSBkZXNjZW5kYW50IHRoZW4gd2Ugc2hvdWxkbid0IGVtaXQgZXZlbnRzXG4gICAgaWYgKHRoaXNba1B1YmxpY09wZXJhdGlvbnNdICE9PSBudWxsICYmICFzaWJsaW5ncykge1xuICAgICAgLy8gQ2xvbmUgb3AgYmVmb3JlIHdlIG11dGF0ZSBpdCBmb3IgdGhlIHByaXZhdGUgQVBJXG4gICAgICBjb25zdCBwdWJsaWNPcGVyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcClcbiAgICAgIHB1YmxpY09wZXJhdGlvbi5lbmNvZGVkS2V5ID0gZW5jb2RlZEtleVxuICAgICAgcHVibGljT3BlcmF0aW9uLmVuY29kZWRWYWx1ZSA9IGVuY29kZWRWYWx1ZVxuXG4gICAgICBpZiAoZGVsZWdhdGVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBlbWl0dGVkIGRhdGEgbWFrZXMgc2Vuc2UgaW4gdGhlIGNvbnRleHQgb2YgdGhpcyBkYlxuICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5ID0gZW5jb2RlZEtleVxuICAgICAgICBwdWJsaWNPcGVyYXRpb24udmFsdWUgPSBlbmNvZGVkVmFsdWVcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleUVuY29kaW5nID0gdGhpcy5kYi5rZXlFbmNvZGluZyhrZXlGb3JtYXQpXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi52YWx1ZUVuY29kaW5nID0gdGhpcy5kYi52YWx1ZUVuY29kaW5nKHZhbHVlRm9ybWF0KVxuICAgICAgfVxuXG4gICAgICB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXS5wdXNoKHB1YmxpY09wZXJhdGlvbilcbiAgICB9IGVsc2UgaWYgKHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdICE9PSBudWxsICYmICFzaWJsaW5ncykge1xuICAgICAgY29uc3QgbGVnYWN5T3BlcmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwpXG5cbiAgICAgIGxlZ2FjeU9wZXJhdGlvbi50eXBlID0gJ3B1dCdcbiAgICAgIGxlZ2FjeU9wZXJhdGlvbi5rZXkgPSBrZXlcbiAgICAgIGxlZ2FjeU9wZXJhdGlvbi52YWx1ZSA9IHZhbHVlXG5cbiAgICAgIHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdLnB1c2gobGVnYWN5T3BlcmF0aW9uKVxuICAgIH1cblxuICAgIC8vIElmIHdlJ3JlIGZvcndhcmRpbmcgdGhlIHN1YmxldmVsIG9wdGlvbiB0aGVuIGRvbid0IHByZWZpeCB0aGUga2V5IHlldFxuICAgIG9wLmtleSA9IHNpYmxpbmdzID8gZW5jb2RlZEtleSA6IHRoaXMuZGIucHJlZml4S2V5KGVuY29kZWRLZXksIGtleUZvcm1hdCwgdHJ1ZSlcbiAgICBvcC52YWx1ZSA9IGVuY29kZWRWYWx1ZVxuICAgIG9wLmtleUVuY29kaW5nID0ga2V5Rm9ybWF0XG4gICAgb3AudmFsdWVFbmNvZGluZyA9IHZhbHVlRm9ybWF0XG5cbiAgICBpZiAodGhpc1trQWRkTW9kZV0pIHtcbiAgICAgIHRoaXMuX2FkZChvcClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBcIm9wZXJhdGlvbiBhcyBvcHRpb25zXCIgdHJpY2sgYXZvaWRzIGZ1cnRoZXIgY2xvbmluZ1xuICAgICAgdGhpcy5fcHV0KG9wLmtleSwgZW5jb2RlZFZhbHVlLCBvcClcbiAgICB9XG5cbiAgICAvLyBJbmNyZW1lbnQgb25seSBvbiBzdWNjZXNzXG4gICAgdGhpc1trTGVuZ3RoXSsrXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIF9wdXQgKGtleSwgdmFsdWUsIG9wdGlvbnMpIHt9XG5cbiAgZGVsIChrZXksIG9wdGlvbnMpIHtcbiAgICBhc3NlcnRTdGF0dXModGhpcylcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBlbXB0eU9wdGlvbnMpXG5cbiAgICBjb25zdCBkZWxlZ2F0ZWQgPSBvcHRpb25zLnN1YmxldmVsICE9IG51bGxcbiAgICBjb25zdCBkYiA9IGRlbGVnYXRlZCA/IG9wdGlvbnMuc3VibGV2ZWwgOiB0aGlzLmRiXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBvcHRpb25zXG4gICAgY29uc3Qga2V5RXJyb3IgPSBkYi5fY2hlY2tLZXkoa2V5KVxuXG4gICAgaWYgKGtleUVycm9yICE9IG51bGwpIHRocm93IGtleUVycm9yXG5cbiAgICAvLyBBdm9pZCBzcHJlYWQgb3BlcmF0b3IgYmVjYXVzZSBvZiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjA0NTQwXG4gICAgY29uc3Qgb3AgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICB0eXBlOiAnZGVsJyxcbiAgICAgIGtleSxcbiAgICAgIGtleUVuY29kaW5nOiBkYi5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIH0pXG5cbiAgICBpZiAodGhpc1trUHJld3JpdGVSdW5dICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzW2tQcmV3cml0ZVJ1bl0ob3AsIHRoaXNba1ByZXdyaXRlQmF0Y2hdKVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBlbmNvZGluZyBhZ2FpbiBpbiBjYXNlIGl0IHdhcyBtb2RpZmllZFxuICAgICAgICBvcC5rZXlFbmNvZGluZyA9IGRiLmtleUVuY29kaW5nKG9wLmtleUVuY29kaW5nKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignVGhlIHByZXdyaXRlIGhvb2sgZmFpbGVkIG9uIGJhdGNoLmRlbCgpJywge1xuICAgICAgICAgIGNvZGU6ICdMRVZFTF9IT09LX0VSUk9SJyxcbiAgICAgICAgICBjYXVzZTogZXJyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW5jb2RlIGRhdGEgZm9yIHByaXZhdGUgQVBJXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSBvcC5rZXlFbmNvZGluZ1xuICAgIGNvbnN0IHByZWVuY29kZWRLZXkgPSBrZXlFbmNvZGluZy5lbmNvZGUob3Aua2V5KVxuICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIGNvbnN0IGVuY29kZWRLZXkgPSBkZWxlZ2F0ZWQgPyBwcmVmaXhEZXNjZW5kYW50S2V5KHByZWVuY29kZWRLZXksIGtleUZvcm1hdCwgZGIsIHRoaXMuZGIpIDogcHJlZW5jb2RlZEtleVxuXG4gICAgLy8gUHJldmVudCBkb3VibGUgcHJlZml4aW5nXG4gICAgaWYgKGRlbGVnYXRlZCkgb3Auc3VibGV2ZWwgPSBudWxsXG5cbiAgICBpZiAodGhpc1trUHVibGljT3BlcmF0aW9uc10gIT09IG51bGwpIHtcbiAgICAgIC8vIENsb25lIG9wIGJlZm9yZSB3ZSBtdXRhdGUgaXQgZm9yIHRoZSBwcml2YXRlIEFQSVxuICAgICAgY29uc3QgcHVibGljT3BlcmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3ApXG4gICAgICBwdWJsaWNPcGVyYXRpb24uZW5jb2RlZEtleSA9IGVuY29kZWRLZXlcblxuICAgICAgaWYgKGRlbGVnYXRlZCkge1xuICAgICAgICAvLyBFbnN1cmUgZW1pdHRlZCBkYXRhIG1ha2VzIHNlbnNlIGluIHRoZSBjb250ZXh0IG9mIHRoaXMgZGJcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleSA9IGVuY29kZWRLZXlcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleUVuY29kaW5nID0gdGhpcy5kYi5rZXlFbmNvZGluZyhrZXlGb3JtYXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdLnB1c2gocHVibGljT3BlcmF0aW9uKVxuICAgIH0gZWxzZSBpZiAodGhpc1trTGVnYWN5T3BlcmF0aW9uc10gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZ2FjeU9wZXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsKVxuXG4gICAgICBsZWdhY3lPcGVyYXRpb24udHlwZSA9ICdkZWwnXG4gICAgICBsZWdhY3lPcGVyYXRpb24ua2V5ID0ga2V5XG5cbiAgICAgIHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdLnB1c2gobGVnYWN5T3BlcmF0aW9uKVxuICAgIH1cblxuICAgIG9wLmtleSA9IHRoaXMuZGIucHJlZml4S2V5KGVuY29kZWRLZXksIGtleUZvcm1hdCwgdHJ1ZSlcbiAgICBvcC5rZXlFbmNvZGluZyA9IGtleUZvcm1hdFxuXG4gICAgaWYgKHRoaXNba0FkZE1vZGVdKSB7XG4gICAgICB0aGlzLl9hZGQob3ApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgXCJvcGVyYXRpb24gYXMgb3B0aW9uc1wiIHRyaWNrIGF2b2lkcyBmdXJ0aGVyIGNsb25pbmdcbiAgICAgIHRoaXMuX2RlbChvcC5rZXksIG9wKVxuICAgIH1cblxuICAgIC8vIEluY3JlbWVudCBvbmx5IG9uIHN1Y2Nlc3NcbiAgICB0aGlzW2tMZW5ndGhdKytcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgX2RlbCAoa2V5LCBvcHRpb25zKSB7fVxuXG4gIF9hZGQgKG9wKSB7fVxuXG4gIGNsZWFyICgpIHtcbiAgICBhc3NlcnRTdGF0dXModGhpcylcbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBpZiAodGhpc1trUHVibGljT3BlcmF0aW9uc10gIT09IG51bGwpIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdID0gW11cbiAgICBpZiAodGhpc1trTGVnYWN5T3BlcmF0aW9uc10gIT09IG51bGwpIHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdID0gW11cbiAgICBpZiAodGhpc1trUHJld3JpdGVEYXRhXSAhPT0gbnVsbCkgdGhpc1trUHJld3JpdGVEYXRhXS5jbGVhcigpXG5cbiAgICB0aGlzW2tMZW5ndGhdID0gMFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBfY2xlYXIgKCkge31cblxuICBhc3luYyB3cml0ZSAob3B0aW9ucykge1xuICAgIGFzc2VydFN0YXR1cyh0aGlzKVxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAodGhpc1trTGVuZ3RoXSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2tTdGF0dXNdID0gJ3dyaXRpbmcnXG5cbiAgICAgIC8vIFByZXBhcmUgcHJvbWlzZSBpbiBjYXNlIGNsb3NlKCkgaXMgY2FsbGVkIGluIHRoZSBtZWFuIHRpbWVcbiAgICAgIGNvbnN0IGNsb3NlID0gcHJlcGFyZUNsb3NlKHRoaXMpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFByb2Nlc3Mgb3BlcmF0aW9ucyBhZGRlZCBieSBwcmV3cml0ZSBob29rIGZ1bmN0aW9uc1xuICAgICAgICBpZiAodGhpc1trUHJld3JpdGVEYXRhXSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHB1YmxpY09wZXJhdGlvbnMgPSB0aGlzW2tQcmV3cml0ZURhdGFdW2tQdWJsaWNPcGVyYXRpb25zXVxuICAgICAgICAgIGNvbnN0IHByaXZhdGVPcGVyYXRpb25zID0gdGhpc1trUHJld3JpdGVEYXRhXVtrUHJpdmF0ZU9wZXJhdGlvbnNdXG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpc1trUHJld3JpdGVEYXRhXS5sZW5ndGhcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wID0gcHJpdmF0ZU9wZXJhdGlvbnNbaV1cblxuICAgICAgICAgICAgLy8gV2UgY2FuIF9hZGQoKSwgX3B1dCgpIG9yIF9kZWwoKSBldmVuIHRob3VnaCBzdGF0dXMgaXMgbm93ICd3cml0aW5nJyBiZWNhdXNlXG4gICAgICAgICAgICAvLyBzdGF0dXMgaXNuJ3QgZXhwb3NlZCB0byB0aGUgcHJpdmF0ZSBBUEksIHNvIHRoZXJlJ3Mgbm8gZGlmZmVyZW5jZSBpbiBzdGF0ZVxuICAgICAgICAgICAgLy8gZnJvbSB0aGF0IHBlcnNwZWN0aXZlLCB1bmxlc3MgYW4gaW1wbGVtZW50YXRpb24gb3ZlcnJpZGVzIHRoZSBwdWJsaWMgd3JpdGUoKVxuICAgICAgICAgICAgLy8gbWV0aG9kIGF0IGl0cyBvd24gcmlzay5cbiAgICAgICAgICAgIGlmICh0aGlzW2tBZGRNb2RlXSkge1xuICAgICAgICAgICAgICB0aGlzLl9hZGQob3ApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdwdXQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3B1dChvcC5rZXksIG9wLnZhbHVlLCBvcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RlbChvcC5rZXksIG9wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwdWJsaWNPcGVyYXRpb25zICE9PSBudWxsICYmIGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpc1trUHVibGljT3BlcmF0aW9uc10gPSB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXS5jb25jYXQocHVibGljT3BlcmF0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0aGlzLl93cml0ZShvcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNsb3NlKClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXNba0Nsb3NlUHJvbWlzZV1cbiAgICAgICAgfSBjYXRjaCAoY2xvc2VFcnIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXgtYXNzaWduXG4gICAgICAgICAgZXJyID0gY29tYmluZUVycm9ycyhbZXJyLCBjbG9zZUVycl0pXG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgY2xvc2UoKVxuXG4gICAgICAvLyBFbWl0IGFmdGVyIGluaXRpYXRpbmcgdGhlIGNsb3NpbmcsIGJlY2F1c2UgZXZlbnQgbWF5IHRyaWdnZXIgYVxuICAgICAgLy8gZGIgY2xvc2Ugd2hpY2ggaW4gdHVybiB0cmlnZ2VycyAoaWRlbXBvdGVudGx5KSBjbG9zaW5nIHRoaXMgYmF0Y2guXG4gICAgICBpZiAodGhpc1trUHVibGljT3BlcmF0aW9uc10gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kYi5lbWl0KCd3cml0ZScsIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdKVxuICAgICAgfSBlbHNlIGlmICh0aGlzW2tMZWdhY3lPcGVyYXRpb25zXSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRiLmVtaXQoJ2JhdGNoJywgdGhpc1trTGVnYWN5T3BlcmF0aW9uc10pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzW2tDbG9zZVByb21pc2VdXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX3dyaXRlIChvcHRpb25zKSB7fVxuXG4gIGFzeW5jIGNsb3NlICgpIHtcbiAgICBpZiAodGhpc1trQ2xvc2VQcm9taXNlXSAhPT0gbnVsbCkge1xuICAgICAgLy8gRmlyc3QgY2FsbGVyIG9mIGNsb3NlKCkgb3Igd3JpdGUoKSBpcyByZXNwb25zaWJsZSBmb3IgZXJyb3JcbiAgICAgIHJldHVybiB0aGlzW2tDbG9zZVByb21pc2VdLmNhdGNoKG5vb3ApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdyYXAgcHJvbWlzZSB0byBhdm9pZCByYWNlIGlzc3VlcyBvbiByZWN1cnNpdmUgY2FsbHNcbiAgICAgIHByZXBhcmVDbG9zZSh0aGlzKSgpXG4gICAgICByZXR1cm4gdGhpc1trQ2xvc2VQcm9taXNlXVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9jbG9zZSAoKSB7fVxufVxuXG5jb25zdCBwcmVwYXJlQ2xvc2UgPSBmdW5jdGlvbiAoYmF0Y2gpIHtcbiAgbGV0IGNsb3NlXG5cbiAgYmF0Y2hba0Nsb3NlUHJvbWlzZV0gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBwcml2YXRlQ2xvc2UoYmF0Y2gpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gY2xvc2Vcbn1cblxuY29uc3QgcHJpdmF0ZUNsb3NlID0gYXN5bmMgZnVuY3Rpb24gKGJhdGNoKSB7XG4gIGJhdGNoW2tTdGF0dXNdID0gJ2Nsb3NpbmcnXG4gIGF3YWl0IGJhdGNoLl9jbG9zZSgpXG4gIGJhdGNoLmRiLmRldGFjaFJlc291cmNlKGJhdGNoKVxufVxuXG5jbGFzcyBQcmV3cml0ZURhdGEge1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZU9wZXJhdGlvbnMsIHB1YmxpY09wZXJhdGlvbnMpIHtcbiAgICB0aGlzW2tQcml2YXRlT3BlcmF0aW9uc10gPSBwcml2YXRlT3BlcmF0aW9uc1xuICAgIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdID0gcHVibGljT3BlcmF0aW9uc1xuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXNba1ByaXZhdGVPcGVyYXRpb25zXS5sZW5ndGhcbiAgfVxuXG4gIGNsZWFyICgpIHtcbiAgICAvLyBDbGVhciBvcGVyYXRpb24gYXJyYXlzIGlmIHByZXNlbnQuXG4gICAgZm9yIChjb25zdCBrIG9mIFtrUHVibGljT3BlcmF0aW9ucywga1ByaXZhdGVPcGVyYXRpb25zXSkge1xuICAgICAgY29uc3Qgb3BzID0gdGhpc1trXVxuXG4gICAgICBpZiAob3BzICE9PSBudWxsKSB7XG4gICAgICAgIC8vIEtlZXAgYXJyYXkgYWxpdmUgYmVjYXVzZSBQcmV3cml0ZUJhdGNoIGhhcyBhIHJlZmVyZW5jZSB0byBpdFxuICAgICAgICBvcHMuc3BsaWNlKDAsIG9wcy5sZW5ndGgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGFzc2VydFN0YXR1cyA9IGZ1bmN0aW9uIChiYXRjaCkge1xuICBpZiAoYmF0Y2hba1N0YXR1c10gIT09ICdvcGVuJykge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignQmF0Y2ggaXMgbm90IG9wZW46IGNhbm5vdCBjaGFuZ2Ugb3BlcmF0aW9ucyBhZnRlciB3cml0ZSgpIG9yIGNsb3NlKCknLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfQkFUQ0hfTk9UX09QRU4nXG4gICAgfSlcbiAgfVxuXG4gIC8vIENhbiB0ZWNobmljYWxseSBiZSByZW1vdmVkLCBiZWNhdXNlIGl0J3Mgbm8gbG9uZ2VyIHBvc3NpYmxlIHRvIGNhbGwgZGIuYmF0Y2goKSB3aGVuXG4gIC8vIHN0YXR1cyBpcyBub3QgJ29wZW4nLCBhbmQgZGIuY2xvc2UoKSBjbG9zZXMgdGhlIGJhdGNoLiBLZWVwIGZvciBub3csIGluIGNhc2Ugb2ZcbiAgLy8gdW5mb3JzZWVuIHVzZXJsYW5kIGJlaGF2aW9ycy5cbiAgaWYgKGJhdGNoLmRiLnN0YXR1cyAhPT0gJ29wZW4nKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0RhdGFiYXNlIGlzIG5vdCBvcGVuJywge1xuICAgICAgY29kZTogJ0xFVkVMX0RBVEFCQVNFX05PVF9PUEVOJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0cy5BYnN0cmFjdENoYWluZWRCYXRjaCA9IEFic3RyYWN0Q2hhaW5lZEJhdGNoXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBBYnN0cmFjdENoYWluZWRCYXRjaCB9ID0gcmVxdWlyZSgnLi4vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaCcpXG5jb25zdCBrRW5jb2RlZCA9IFN5bWJvbCgnZW5jb2RlZCcpXG5cbi8vIEZ1bmN0aW9uYWwgZGVmYXVsdCBmb3IgY2hhaW5lZCBiYXRjaFxuY2xhc3MgRGVmYXVsdENoYWluZWRCYXRjaCBleHRlbmRzIEFic3RyYWN0Q2hhaW5lZEJhdGNoIHtcbiAgY29uc3RydWN0b3IgKGRiKSB7XG4gICAgLy8gT3B0LWluIHRvIF9hZGQoKSBpbnN0ZWFkIG9mIF9wdXQoKSBhbmQgX2RlbCgpXG4gICAgc3VwZXIoZGIsIHsgYWRkOiB0cnVlIH0pXG4gICAgdGhpc1trRW5jb2RlZF0gPSBbXVxuICB9XG5cbiAgX2FkZCAob3ApIHtcbiAgICB0aGlzW2tFbmNvZGVkXS5wdXNoKG9wKVxuICB9XG5cbiAgX2NsZWFyICgpIHtcbiAgICB0aGlzW2tFbmNvZGVkXSA9IFtdXG4gIH1cblxuICBhc3luYyBfd3JpdGUgKG9wdGlvbnMpIHtcbiAgICAvLyBOZWVkIHRvIGNhbGwgdGhlIHByaXZhdGUgcmF0aGVyIHRoYW4gcHVibGljIG1ldGhvZCwgdG8gcHJldmVudFxuICAgIC8vIHJlY3Vyc2lvbiwgZG91YmxlIHByZWZpeGluZywgZG91YmxlIGVuY29kaW5nIGFuZCBkb3VibGUgaG9va3MuXG4gICAgcmV0dXJuIHRoaXMuZGIuX2JhdGNoKHRoaXNba0VuY29kZWRdLCBvcHRpb25zKVxuICB9XG59XG5cbmV4cG9ydHMuRGVmYXVsdENoYWluZWRCYXRjaCA9IERlZmF1bHRDaGFpbmVkQmF0Y2hcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IG5vb3AgfSA9IHJlcXVpcmUoJy4vY29tbW9uJylcblxuY29uc3Qga0Z1bmN0aW9ucyA9IFN5bWJvbCgnZnVuY3Rpb25zJylcbmNvbnN0IGtBc3luYyA9IFN5bWJvbCgnYXN5bmMnKVxuXG5jbGFzcyBEYXRhYmFzZUhvb2tzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMucG9zdG9wZW4gPSBuZXcgSG9vayh7IGFzeW5jOiB0cnVlIH0pXG4gICAgdGhpcy5wcmV3cml0ZSA9IG5ldyBIb29rKHsgYXN5bmM6IGZhbHNlIH0pXG4gICAgdGhpcy5uZXdzdWIgPSBuZXcgSG9vayh7IGFzeW5jOiBmYWxzZSB9KVxuICB9XG59XG5cbmNsYXNzIEhvb2sge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXNba0FzeW5jXSA9IG9wdGlvbnMuYXN5bmNcbiAgICB0aGlzW2tGdW5jdGlvbnNdID0gbmV3IFNldCgpXG5cbiAgICAvLyBPZmZlciBhIGZhc3Qgd2F5IHRvIGNoZWNrIGlmIGhvb2sgZnVuY3Rpb25zIGFyZSBwcmVzZW50LiBXZSBjb3VsZCBhbHNvIGV4cG9zZSBhXG4gICAgLy8gc2l6ZSBnZXR0ZXIsIHdoaWNoIHdvdWxkIGJlIHNsb3dlciwgb3IgY2hlY2sgaXQgYnkgaG9vay5ydW4gIT09IG5vb3AsIHdoaWNoIHdvdWxkXG4gICAgLy8gbm90IGFsbG93IHVzZXJsYW5kIHRvIGRvIHRoZSBzYW1lIGNoZWNrLlxuICAgIHRoaXMubm9vcCA9IHRydWVcbiAgICB0aGlzLnJ1biA9IHJ1bm5lcih0aGlzKVxuICB9XG5cbiAgYWRkIChmbikge1xuICAgIC8vIFZhbGlkYXRlIG5vdyByYXRoZXIgdGhhbiBpbiBhc3luY2hyb25vdXMgY29kZSBwYXRoc1xuICAgIGFzc2VydEZ1bmN0aW9uKGZuKVxuICAgIHRoaXNba0Z1bmN0aW9uc10uYWRkKGZuKVxuICAgIHRoaXMubm9vcCA9IGZhbHNlXG4gICAgdGhpcy5ydW4gPSBydW5uZXIodGhpcylcbiAgfVxuXG4gIGRlbGV0ZSAoZm4pIHtcbiAgICBhc3NlcnRGdW5jdGlvbihmbilcbiAgICB0aGlzW2tGdW5jdGlvbnNdLmRlbGV0ZShmbilcbiAgICB0aGlzLm5vb3AgPSB0aGlzW2tGdW5jdGlvbnNdLnNpemUgPT09IDBcbiAgICB0aGlzLnJ1biA9IHJ1bm5lcih0aGlzKVxuICB9XG59XG5cbmNvbnN0IGFzc2VydEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBoaW50ID0gZm4gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgZm5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uLCByZWNlaXZlZCAke2hpbnR9YClcbiAgfVxufVxuXG5jb25zdCBydW5uZXIgPSBmdW5jdGlvbiAoaG9vaykge1xuICBpZiAoaG9vay5ub29wKSB7XG4gICAgcmV0dXJuIG5vb3BcbiAgfSBlbHNlIGlmIChob29rW2tGdW5jdGlvbnNdLnNpemUgPT09IDEpIHtcbiAgICBjb25zdCBbZm5dID0gaG9va1trRnVuY3Rpb25zXVxuICAgIHJldHVybiBmblxuICB9IGVsc2UgaWYgKGhvb2tba0FzeW5jXSkge1xuICAgIC8vIFRoZSBydW4gZnVuY3Rpb24gc2hvdWxkIG5vdCByZWZlcmVuY2UgaG9vaywgc28gdGhhdCBjb25zdW1lcnMgbGlrZSBjaGFpbmVkIGJhdGNoXG4gICAgLy8gYW5kIGRiLm9wZW4oKSBjYW4gc2F2ZSBhIHJlZmVyZW5jZSB0byBob29rLnJ1biBhbmQgc2FmZWx5IGFzc3VtZSBpdCB3b24ndCBjaGFuZ2VcbiAgICAvLyBkdXJpbmcgdGhlaXIgbGlmZXRpbWUgb3IgYXN5bmMgd29yay5cbiAgICBjb25zdCBydW4gPSBhc3luYyBmdW5jdGlvbiAoZnVuY3Rpb25zLCAuLi5hcmdzKSB7XG4gICAgICBmb3IgKGNvbnN0IGZuIG9mIGZ1bmN0aW9ucykge1xuICAgICAgICBhd2FpdCBmbiguLi5hcmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydW4uYmluZChudWxsLCBBcnJheS5mcm9tKGhvb2tba0Z1bmN0aW9uc10pKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJ1biA9IGZ1bmN0aW9uIChmdW5jdGlvbnMsIC4uLmFyZ3MpIHtcbiAgICAgIGZvciAoY29uc3QgZm4gb2YgZnVuY3Rpb25zKSB7XG4gICAgICAgIGZuKC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bi5iaW5kKG51bGwsIEFycmF5LmZyb20oaG9va1trRnVuY3Rpb25zXSkpXG4gIH1cbn1cblxuZXhwb3J0cy5EYXRhYmFzZUhvb2tzID0gRGF0YWJhc2VIb29rc1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZGVwcmVjYXRlIH0gPSByZXF1aXJlKCcuL2NvbW1vbicpXG5cbmV4cG9ydHMuRXZlbnRNb25pdG9yID0gY2xhc3MgRXZlbnRNb25pdG9yIHtcbiAgY29uc3RydWN0b3IgKGVtaXR0ZXIsIGV2ZW50cykge1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICAvLyBUcmFjayB3aGV0aGVyIGxpc3RlbmVycyBhcmUgcHJlc2VudFxuICAgICAgdGhpc1tldmVudC5uYW1lXSA9IGZhbHNlXG5cbiAgICAgIC8vIFByZXBhcmUgZGVwcmVjYXRpb24gbWVzc2FnZVxuICAgICAgaWYgKGV2ZW50LmRlcHJlY2F0ZWQpIHtcbiAgICAgICAgZXZlbnQubWVzc2FnZSA9IGBUaGUgJyR7ZXZlbnQubmFtZX0nIGV2ZW50IGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgJyR7ZXZlbnQuYWx0fScgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uIG9mIGFic3RyYWN0LWxldmVsYFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoZXZlbnRzLm1hcChlID0+IFtlLm5hbWUsIGVdKSlcbiAgICBjb25zdCBtb25pdG9yID0gdGhpc1xuXG4gICAgZW1pdHRlci5vbignbmV3TGlzdGVuZXInLCBiZWZvcmVBZGRlZClcbiAgICBlbWl0dGVyLm9uKCdyZW1vdmVMaXN0ZW5lcicsIGFmdGVyUmVtb3ZlZClcblxuICAgIGZ1bmN0aW9uIGJlZm9yZUFkZGVkIChuYW1lKSB7XG4gICAgICBjb25zdCBldmVudCA9IG1hcC5nZXQobmFtZSlcblxuICAgICAgaWYgKGV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbW9uaXRvcltuYW1lXSA9IHRydWVcblxuICAgICAgICBpZiAoZXZlbnQuZGVwcmVjYXRlZCkge1xuICAgICAgICAgIGRlcHJlY2F0ZShldmVudC5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWZ0ZXJSZW1vdmVkIChuYW1lKSB7XG4gICAgICBpZiAobWFwLmhhcyhuYW1lKSkge1xuICAgICAgICBtb25pdG9yW25hbWVdID0gdGhpcy5saXN0ZW5lckNvdW50KG5hbWUpID4gMFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZ2V0T3B0aW9ucywgZW1wdHlPcHRpb25zIH0gPSByZXF1aXJlKCcuL2NvbW1vbicpXG5jb25zdCB7IEFib3J0RXJyb3IgfSA9IHJlcXVpcmUoJy4vZXJyb3JzJylcblxuY29uc3Qga09wZXJhdGlvbnMgPSBTeW1ib2woJ29wZXJhdGlvbnMnKVxuY29uc3Qga1NpZ25hbHMgPSBTeW1ib2woJ3NpZ25hbHMnKVxuY29uc3Qga0hhbmRsZUFib3J0ID0gU3ltYm9sKCdoYW5kbGVBYm9ydCcpXG5cbmNsYXNzIERlZmVycmVkT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IgKGZuLCBzaWduYWwpIHtcbiAgICB0aGlzLmZuID0gZm5cbiAgICB0aGlzLnNpZ25hbCA9IHNpZ25hbFxuICB9XG59XG5cbmNsYXNzIERlZmVycmVkUXVldWUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpc1trT3BlcmF0aW9uc10gPSBbXVxuICAgIHRoaXNba1NpZ25hbHNdID0gbmV3IFNldCgpXG4gICAgdGhpc1trSGFuZGxlQWJvcnRdID0gdGhpc1trSGFuZGxlQWJvcnRdLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZCAoZm4sIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBlbXB0eU9wdGlvbnMpXG4gICAgY29uc3Qgc2lnbmFsID0gb3B0aW9ucy5zaWduYWxcblxuICAgIGlmIChzaWduYWwgPT0gbnVsbCkge1xuICAgICAgdGhpc1trT3BlcmF0aW9uc10ucHVzaChuZXcgRGVmZXJyZWRPcGVyYXRpb24oZm4sIG51bGwpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBjYWxsZWQgaW4gdGhlIHNhbWUgdGlja1xuICAgICAgZm4obmV3IEFib3J0RXJyb3IoKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdGhpc1trU2lnbmFsc10uaGFzKHNpZ25hbCkpIHtcbiAgICAgIHRoaXNba1NpZ25hbHNdLmFkZChzaWduYWwpXG4gICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB0aGlzW2tIYW5kbGVBYm9ydF0sIHsgb25jZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHRoaXNba09wZXJhdGlvbnNdLnB1c2gobmV3IERlZmVycmVkT3BlcmF0aW9uKGZuLCBzaWduYWwpKVxuICB9XG5cbiAgZHJhaW4gKCkge1xuICAgIGNvbnN0IG9wZXJhdGlvbnMgPSB0aGlzW2tPcGVyYXRpb25zXVxuICAgIGNvbnN0IHNpZ25hbHMgPSB0aGlzW2tTaWduYWxzXVxuXG4gICAgdGhpc1trT3BlcmF0aW9uc10gPSBbXVxuICAgIHRoaXNba1NpZ25hbHNdID0gbmV3IFNldCgpXG5cbiAgICBmb3IgKGNvbnN0IHNpZ25hbCBvZiBzaWduYWxzKSB7XG4gICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB0aGlzW2tIYW5kbGVBYm9ydF0pXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBvcGVyYXRpb24gb2Ygb3BlcmF0aW9ucykge1xuICAgICAgb3BlcmF0aW9uLmZuLmNhbGwobnVsbClcbiAgICB9XG4gIH1cblxuICBba0hhbmRsZUFib3J0XSAoZXYpIHtcbiAgICBjb25zdCBzaWduYWwgPSBldi50YXJnZXRcbiAgICBjb25zdCBlcnIgPSBuZXcgQWJvcnRFcnJvcigpXG4gICAgY29uc3QgYWJvcnRlZCA9IFtdXG5cbiAgICAvLyBUT0RPOiBvcHRpbWl6ZVxuICAgIHRoaXNba09wZXJhdGlvbnNdID0gdGhpc1trT3BlcmF0aW9uc10uZmlsdGVyKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgIGlmIChvcGVyYXRpb24uc2lnbmFsICE9PSBudWxsICYmIG9wZXJhdGlvbi5zaWduYWwgPT09IHNpZ25hbCkge1xuICAgICAgICBhYm9ydGVkLnB1c2gob3BlcmF0aW9uKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXNba1NpZ25hbHNdLmRlbGV0ZShzaWduYWwpXG5cbiAgICBmb3IgKGNvbnN0IG9wZXJhdGlvbiBvZiBhYm9ydGVkKSB7XG4gICAgICBvcGVyYXRpb24uZm4uY2FsbChudWxsLCBlcnIpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRGVmZXJyZWRRdWV1ZSA9IERlZmVycmVkUXVldWVcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbmNvbnN0IHJhbmdlT3B0aW9ucyA9IG5ldyBTZXQoWydsdCcsICdsdGUnLCAnZ3QnLCAnZ3RlJ10pXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGtleUVuY29kaW5nKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG5cbiAgZm9yIChjb25zdCBrIGluIG9wdGlvbnMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgaykpIGNvbnRpbnVlXG4gICAgaWYgKGsgPT09ICdrZXlFbmNvZGluZycgfHwgayA9PT0gJ3ZhbHVlRW5jb2RpbmcnKSBjb250aW51ZVxuXG4gICAgaWYgKHJhbmdlT3B0aW9ucy5oYXMoaykpIHtcbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkb24ndCByZWplY3QgbnVsbGlzaCBhbmQgZW1wdHkgb3B0aW9ucyBoZXJlLiBXaGlsZVxuICAgICAgLy8gdGhvc2UgdHlwZXMgYXJlIGludmFsaWQgYXMga2V5cywgdGhleSBhcmUgdmFsaWQgYXMgcmFuZ2Ugb3B0aW9ucy5cbiAgICAgIHJlc3VsdFtrXSA9IGtleUVuY29kaW5nLmVuY29kZShvcHRpb25zW2tdKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba10gPSBvcHRpb25zW2tdXG4gICAgfVxuICB9XG5cbiAgcmVzdWx0LnJldmVyc2UgPSAhIXJlc3VsdC5yZXZlcnNlXG4gIHJlc3VsdC5saW1pdCA9IE51bWJlci5pc0ludGVnZXIocmVzdWx0LmxpbWl0KSAmJiByZXN1bHQubGltaXQgPj0gMCA/IHJlc3VsdC5saW1pdCA6IC0xXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQWJzdHJhY3RJdGVyYXRvciwgQWJzdHJhY3RLZXlJdGVyYXRvciwgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIH0gPSByZXF1aXJlKCcuLi9hYnN0cmFjdC1pdGVyYXRvcicpXG5cbmNvbnN0IGtVbmZpeCA9IFN5bWJvbCgndW5maXgnKVxuY29uc3Qga0l0ZXJhdG9yID0gU3ltYm9sKCdpdGVyYXRvcicpXG5cbi8vIFRPRE86IHVuZml4IG5hdGl2ZWx5IGlmIGRiIHN1cHBvcnRzIGl0XG5jbGFzcyBBYnN0cmFjdFN1YmxldmVsSXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdEl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zLCBpdGVyYXRvciwgdW5maXgpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba0l0ZXJhdG9yXSA9IGl0ZXJhdG9yXG4gICAgdGhpc1trVW5maXhdID0gdW5maXhcbiAgfVxuXG4gIGFzeW5jIF9uZXh0ICgpIHtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5uZXh0KClcblxuICAgIGlmIChlbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyeVswXVxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSBlbnRyeVswXSA9IHRoaXNba1VuZml4XShrZXkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5XG4gIH1cblxuICBhc3luYyBfbmV4dHYgKHNpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLm5leHR2KHNpemUsIG9wdGlvbnMpXG4gICAgY29uc3QgdW5maXggPSB0aGlzW2tVbmZpeF1cblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF1cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkgZW50cnlbMF0gPSB1bmZpeChrZXkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJpZXNcbiAgfVxuXG4gIGFzeW5jIF9hbGwgKG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLmFsbChvcHRpb25zKVxuICAgIGNvbnN0IHVuZml4ID0gdGhpc1trVW5maXhdXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIGVudHJ5WzBdID0gdW5maXgoa2V5KVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzXG4gIH1cbn1cblxuY2xhc3MgQWJzdHJhY3RTdWJsZXZlbEtleUl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RLZXlJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucywgaXRlcmF0b3IsIHVuZml4KSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tJdGVyYXRvcl0gPSBpdGVyYXRvclxuICAgIHRoaXNba1VuZml4XSA9IHVuZml4XG4gIH1cblxuICBhc3luYyBfbmV4dCAoKSB7XG4gICAgY29uc3Qga2V5ID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLm5leHQoKVxuICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IGtleSA6IHRoaXNba1VuZml4XShrZXkpXG4gIH1cblxuICBhc3luYyBfbmV4dHYgKHNpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBrZXlzID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLm5leHR2KHNpemUsIG9wdGlvbnMpXG4gICAgY29uc3QgdW5maXggPSB0aGlzW2tVbmZpeF1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSBrZXlzW2ldID0gdW5maXgoa2V5KVxuICAgIH1cblxuICAgIHJldHVybiBrZXlzXG4gIH1cblxuICBhc3luYyBfYWxsIChvcHRpb25zKSB7XG4gICAgY29uc3Qga2V5cyA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5hbGwob3B0aW9ucylcbiAgICBjb25zdCB1bmZpeCA9IHRoaXNba1VuZml4XVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIGtleXNbaV0gPSB1bmZpeChrZXkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXNcbiAgfVxufVxuXG5jbGFzcyBBYnN0cmFjdFN1YmxldmVsVmFsdWVJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0VmFsdWVJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucywgaXRlcmF0b3IpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcbiAgICB0aGlzW2tJdGVyYXRvcl0gPSBpdGVyYXRvclxuICB9XG5cbiAgYXN5bmMgX25leHQgKCkge1xuICAgIHJldHVybiB0aGlzW2tJdGVyYXRvcl0ubmV4dCgpXG4gIH1cblxuICBhc3luYyBfbmV4dHYgKHNpemUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpc1trSXRlcmF0b3JdLm5leHR2KHNpemUsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBfYWxsIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXNba0l0ZXJhdG9yXS5hbGwob3B0aW9ucylcbiAgfVxufVxuXG5mb3IgKGNvbnN0IEl0ZXJhdG9yIG9mIFtBYnN0cmFjdFN1YmxldmVsSXRlcmF0b3IsIEFic3RyYWN0U3VibGV2ZWxLZXlJdGVyYXRvciwgQWJzdHJhY3RTdWJsZXZlbFZhbHVlSXRlcmF0b3JdKSB7XG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fc2VlayA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aGlzW2tJdGVyYXRvcl0uc2Vlayh0YXJnZXQsIG9wdGlvbnMpXG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX2Nsb3NlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzW2tJdGVyYXRvcl0uY2xvc2UoKVxuICB9XG59XG5cbmV4cG9ydHMuQWJzdHJhY3RTdWJsZXZlbEl0ZXJhdG9yID0gQWJzdHJhY3RTdWJsZXZlbEl0ZXJhdG9yXG5leHBvcnRzLkFic3RyYWN0U3VibGV2ZWxLZXlJdGVyYXRvciA9IEFic3RyYWN0U3VibGV2ZWxLZXlJdGVyYXRvclxuZXhwb3J0cy5BYnN0cmFjdFN1YmxldmVsVmFsdWVJdGVyYXRvciA9IEFic3RyYWN0U3VibGV2ZWxWYWx1ZUl0ZXJhdG9yXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuY29uc3QgeyBCdWZmZXIgfSA9IHJlcXVpcmUoJ2J1ZmZlcicpIHx8IHt9XG5jb25zdCB7XG4gIEFic3RyYWN0U3VibGV2ZWxJdGVyYXRvcixcbiAgQWJzdHJhY3RTdWJsZXZlbEtleUl0ZXJhdG9yLFxuICBBYnN0cmFjdFN1YmxldmVsVmFsdWVJdGVyYXRvclxufSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Qtc3VibGV2ZWwtaXRlcmF0b3InKVxuXG5jb25zdCBrR2xvYmFsUHJlZml4ID0gU3ltYm9sKCdwcmVmaXgnKVxuY29uc3Qga0xvY2FsUHJlZml4ID0gU3ltYm9sKCdsb2NhbFByZWZpeCcpXG5jb25zdCBrTG9jYWxQYXRoID0gU3ltYm9sKCdsb2NhbFBhdGgnKVxuY29uc3Qga0dsb2JhbFBhdGggPSBTeW1ib2woJ2dsb2JhbFBhdGgnKVxuY29uc3Qga0dsb2JhbFVwcGVyQm91bmQgPSBTeW1ib2woJ3VwcGVyQm91bmQnKVxuY29uc3Qga1ByZWZpeFJhbmdlID0gU3ltYm9sKCdwcmVmaXhSYW5nZScpXG5jb25zdCBrUm9vdCA9IFN5bWJvbCgncm9vdCcpXG5jb25zdCBrUGFyZW50ID0gU3ltYm9sKCdwYXJlbnQnKVxuY29uc3Qga1VuZml4ID0gU3ltYm9sKCd1bmZpeCcpXG5cbmNvbnN0IHRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcbmNvbnN0IGRlZmF1bHRzID0geyBzZXBhcmF0b3I6ICchJyB9XG5cbi8vIFdyYXBwZWQgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeyBBYnN0cmFjdExldmVsIH0pIHtcbiAgY2xhc3MgQWJzdHJhY3RTdWJsZXZlbCBleHRlbmRzIEFic3RyYWN0TGV2ZWwge1xuICAgIHN0YXRpYyBkZWZhdWx0cyAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHNcbiAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuc2VwYXJhdG9yKSB7XG4gICAgICAgIHJldHVybiB7IC4uLm9wdGlvbnMsIHNlcGFyYXRvcjogJyEnIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIGF1dG9DbG9zZSBvcHRpb24sIHdoaWNoIGlmIHRydWUsIGRvZXMgcGFyZW50LmF0dGFjaFJlc291cmNlKHRoaXMpXG4gICAgY29uc3RydWN0b3IgKGRiLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAvLyBEb24ndCBmb3J3YXJkIEFic3RyYWN0U3VibGV2ZWwgb3B0aW9ucyB0byBBYnN0cmFjdExldmVsXG4gICAgICBjb25zdCB7IHNlcGFyYXRvciwgbWFuaWZlc3QsIC4uLmZvcndhcmQgfSA9IEFic3RyYWN0U3VibGV2ZWwuZGVmYXVsdHMob3B0aW9ucylcbiAgICAgIGNvbnN0IG5hbWVzID0gW10uY29uY2F0KG5hbWUpLm1hcChuYW1lID0+IHRyaW0obmFtZSwgc2VwYXJhdG9yKSlcblxuICAgICAgLy8gUmVzZXJ2ZSBvbmUgY2hhcmFjdGVyIGJldHdlZW4gc2VwYXJhdG9yIGFuZCBuYW1lIHRvIGdpdmUgdXMgYW4gdXBwZXIgYm91bmRcbiAgICAgIGNvbnN0IHJlc2VydmVkID0gc2VwYXJhdG9yLmNoYXJDb2RlQXQoMCkgKyAxXG4gICAgICBjb25zdCByb290ID0gZGJba1Jvb3RdIHx8IGRiXG5cbiAgICAgIC8vIEtleXMgc2hvdWxkIHNvcnQgbGlrZSBbJyFhIScsICchYSEhYSEnLCAnIWFcIicsICchYWEhJywgJyFiISddLlxuICAgICAgLy8gVXNlIEFTQ0lJIGZvciBjb25zaXN0ZW50IGxlbmd0aCBiZXR3ZWVuIHN0cmluZywgQnVmZmVyIGFuZCBVaW50OEFycmF5XG4gICAgICBpZiAoIW5hbWVzLmV2ZXJ5KG5hbWUgPT4gdGV4dEVuY29kZXIuZW5jb2RlKG5hbWUpLmV2ZXJ5KHggPT4geCA+IHJlc2VydmVkICYmIHggPCAxMjcpKSkge1xuICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoYFN1YmxldmVsIG5hbWUgbXVzdCB1c2UgYnl0ZXMgPiAke3Jlc2VydmVkfSA8ICR7MTI3fWAsIHtcbiAgICAgICAgICBjb2RlOiAnTEVWRUxfSU5WQUxJRF9QUkVGSVgnXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHN1cGVyKG1lcmdlTWFuaWZlc3RzKGRiLCBtYW5pZmVzdCksIGZvcndhcmQpXG5cbiAgICAgIGNvbnN0IGxvY2FsUHJlZml4ID0gbmFtZXMubWFwKG5hbWUgPT4gc2VwYXJhdG9yICsgbmFtZSArIHNlcGFyYXRvcikuam9pbignJylcbiAgICAgIGNvbnN0IGdsb2JhbFByZWZpeCA9IChkYi5wcmVmaXggfHwgJycpICsgbG9jYWxQcmVmaXhcbiAgICAgIGNvbnN0IGdsb2JhbFVwcGVyQm91bmQgPSBnbG9iYWxQcmVmaXguc2xpY2UoMCwgLTEpICsgU3RyaW5nLmZyb21DaGFyQ29kZShyZXNlcnZlZClcblxuICAgICAgLy8gTW9zdCBvcGVyYXRpb25zIGFyZSBmb3J3YXJkZWQgdG8gdGhlIHBhcmVudCBkYXRhYmFzZSwgYnV0IGNsZWFyKCkgYW5kIGl0ZXJhdG9yc1xuICAgICAgLy8gc3RpbGwgZm9yd2FyZCB0byB0aGUgcm9vdCBkYXRhYmFzZSAtIHdoaWNoIGlzIG9sZGVyIGxvZ2ljIGFuZCBkb2VzIG5vdCB5ZXQgbmVlZFxuICAgICAgLy8gdG8gY2hhbmdlLCB1bnRpbCB3ZSBhZGQgc29tZSBmb3JtIG9mIHByZXJlYWQgb3IgcG9zdHJlYWQgaG9va3MuXG4gICAgICB0aGlzW2tSb290XSA9IHJvb3RcbiAgICAgIHRoaXNba1BhcmVudF0gPSBkYlxuICAgICAgdGhpc1trTG9jYWxQYXRoXSA9IG5hbWVzXG4gICAgICB0aGlzW2tHbG9iYWxQYXRoXSA9IGRiLnByZWZpeCA/IGRiLnBhdGgoKS5jb25jYXQobmFtZXMpIDogbmFtZXNcbiAgICAgIHRoaXNba0dsb2JhbFByZWZpeF0gPSBuZXcgTXVsdGlGb3JtYXQoZ2xvYmFsUHJlZml4KVxuICAgICAgdGhpc1trR2xvYmFsVXBwZXJCb3VuZF0gPSBuZXcgTXVsdGlGb3JtYXQoZ2xvYmFsVXBwZXJCb3VuZClcbiAgICAgIHRoaXNba0xvY2FsUHJlZml4XSA9IG5ldyBNdWx0aUZvcm1hdChsb2NhbFByZWZpeClcbiAgICAgIHRoaXNba1VuZml4XSA9IG5ldyBVbmZpeGVyKClcbiAgICB9XG5cbiAgICBwcmVmaXhLZXkgKGtleSwga2V5Rm9ybWF0LCBsb2NhbCkge1xuICAgICAgY29uc3QgcHJlZml4ID0gbG9jYWwgPyB0aGlzW2tMb2NhbFByZWZpeF0gOiB0aGlzW2tHbG9iYWxQcmVmaXhdXG5cbiAgICAgIGlmIChrZXlGb3JtYXQgPT09ICd1dGY4Jykge1xuICAgICAgICByZXR1cm4gcHJlZml4LnV0ZjggKyBrZXlcbiAgICAgIH0gZWxzZSBpZiAoa2V5LmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gRmFzdCBwYXRoIGZvciBlbXB0eSBrZXkgKG5vIGNvcHkpXG4gICAgICAgIHJldHVybiBwcmVmaXhba2V5Rm9ybWF0XVxuICAgICAgfSBlbHNlIGlmIChrZXlGb3JtYXQgPT09ICd2aWV3Jykge1xuICAgICAgICBjb25zdCB2aWV3ID0gcHJlZml4LnZpZXdcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkodmlldy5ieXRlTGVuZ3RoICsga2V5LmJ5dGVMZW5ndGgpXG5cbiAgICAgICAgcmVzdWx0LnNldCh2aWV3LCAwKVxuICAgICAgICByZXN1bHQuc2V0KGtleSwgdmlldy5ieXRlTGVuZ3RoKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHByZWZpeC5idWZmZXJcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoW2J1ZmZlciwga2V5XSwgYnVmZmVyLmJ5dGVMZW5ndGggKyBrZXkuYnl0ZUxlbmd0aClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3QgZXhwb3NlZCBmb3Igbm93LlxuICAgIFtrUHJlZml4UmFuZ2VdIChyYW5nZSwga2V5Rm9ybWF0KSB7XG4gICAgICBpZiAocmFuZ2UuZ3RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmFuZ2UuZ3RlID0gdGhpcy5wcmVmaXhLZXkocmFuZ2UuZ3RlLCBrZXlGb3JtYXQsIGZhbHNlKVxuICAgICAgfSBlbHNlIGlmIChyYW5nZS5ndCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJhbmdlLmd0ID0gdGhpcy5wcmVmaXhLZXkocmFuZ2UuZ3QsIGtleUZvcm1hdCwgZmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5nZS5ndGUgPSB0aGlzW2tHbG9iYWxQcmVmaXhdW2tleUZvcm1hdF1cbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlLmx0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJhbmdlLmx0ZSA9IHRoaXMucHJlZml4S2V5KHJhbmdlLmx0ZSwga2V5Rm9ybWF0LCBmYWxzZSlcbiAgICAgIH0gZWxzZSBpZiAocmFuZ2UubHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByYW5nZS5sdCA9IHRoaXMucHJlZml4S2V5KHJhbmdlLmx0LCBrZXlGb3JtYXQsIGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2UubHRlID0gdGhpc1trR2xvYmFsVXBwZXJCb3VuZF1ba2V5Rm9ybWF0XVxuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwcmVmaXggKCkge1xuICAgICAgcmV0dXJuIHRoaXNba0dsb2JhbFByZWZpeF0udXRmOFxuICAgIH1cblxuICAgIGdldCBkYiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1trUm9vdF1cbiAgICB9XG5cbiAgICBnZXQgcGFyZW50ICgpIHtcbiAgICAgIHJldHVybiB0aGlzW2tQYXJlbnRdXG4gICAgfVxuXG4gICAgcGF0aCAobG9jYWwgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGxvY2FsID8gdGhpc1trTG9jYWxQYXRoXSA6IHRoaXNba0dsb2JhbFBhdGhdXG4gICAgfVxuXG4gICAgYXN5bmMgX29wZW4gKG9wdGlvbnMpIHtcbiAgICAgIC8vIFRoZSBwYXJlbnQgZGIgbXVzdCBvcGVuIGl0c2VsZiBvciBiZSAocmUpb3BlbmVkIGJ5IHRoZSB1c2VyIGJlY2F1c2VcbiAgICAgIC8vIGEgc3VibGV2ZWwgc2hvdWxkIG5vdCBpbml0aWF0ZSBzdGF0ZSBjaGFuZ2VzIG9uIHRoZSByZXN0IG9mIHRoZSBkYi5cbiAgICAgIHJldHVybiB0aGlzW2tQYXJlbnRdLm9wZW4oeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgX3B1dCAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXNba1BhcmVudF0ucHV0KGtleSwgdmFsdWUsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgYXN5bmMgX2dldCAoa2V5LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpc1trUGFyZW50XS5nZXQoa2V5LCBvcHRpb25zKVxuICAgIH1cblxuICAgIGFzeW5jIF9nZXRNYW55IChrZXlzLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpc1trUGFyZW50XS5nZXRNYW55KGtleXMsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgYXN5bmMgX2RlbCAoa2V5LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpc1trUGFyZW50XS5kZWwoa2V5LCBvcHRpb25zKVxuICAgIH1cblxuICAgIGFzeW5jIF9iYXRjaCAob3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXNba1BhcmVudF0uYmF0Y2gob3BlcmF0aW9ucywgb3B0aW9ucylcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBjYWxsIHBhcmVudCBpbnN0ZWFkIG9mIHJvb3RcbiAgICBhc3luYyBfY2xlYXIgKG9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE8gKHJlZmFjdG9yKTogbW92ZSB0byBBYnN0cmFjdExldmVsXG4gICAgICB0aGlzW2tQcmVmaXhSYW5nZV0ob3B0aW9ucywgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICAgIHJldHVybiB0aGlzW2tSb290XS5jbGVhcihvcHRpb25zKVxuICAgIH1cblxuICAgIC8vIFRPRE86IGNhbGwgcGFyZW50IGluc3RlYWQgb2Ygcm9vdFxuICAgIF9pdGVyYXRvciAob3B0aW9ucykge1xuICAgICAgLy8gVE9ETyAocmVmYWN0b3IpOiBtb3ZlIHRvIEFic3RyYWN0TGV2ZWxcbiAgICAgIHRoaXNba1ByZWZpeFJhbmdlXShvcHRpb25zLCBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzW2tSb290XS5pdGVyYXRvcihvcHRpb25zKVxuICAgICAgY29uc3QgdW5maXggPSB0aGlzW2tVbmZpeF0uZ2V0KHRoaXNba0dsb2JhbFByZWZpeF0udXRmOC5sZW5ndGgsIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgICByZXR1cm4gbmV3IEFic3RyYWN0U3VibGV2ZWxJdGVyYXRvcih0aGlzLCBvcHRpb25zLCBpdGVyYXRvciwgdW5maXgpXG4gICAgfVxuXG4gICAgX2tleXMgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXNba1ByZWZpeFJhbmdlXShvcHRpb25zLCBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzW2tSb290XS5rZXlzKG9wdGlvbnMpXG4gICAgICBjb25zdCB1bmZpeCA9IHRoaXNba1VuZml4XS5nZXQodGhpc1trR2xvYmFsUHJlZml4XS51dGY4Lmxlbmd0aCwgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICAgIHJldHVybiBuZXcgQWJzdHJhY3RTdWJsZXZlbEtleUl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMsIGl0ZXJhdG9yLCB1bmZpeClcbiAgICB9XG5cbiAgICBfdmFsdWVzIChvcHRpb25zKSB7XG4gICAgICB0aGlzW2tQcmVmaXhSYW5nZV0ob3B0aW9ucywgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpc1trUm9vdF0udmFsdWVzKG9wdGlvbnMpXG4gICAgICByZXR1cm4gbmV3IEFic3RyYWN0U3VibGV2ZWxWYWx1ZUl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMsIGl0ZXJhdG9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IEFic3RyYWN0U3VibGV2ZWwgfVxufVxuXG5jb25zdCBtZXJnZU1hbmlmZXN0cyA9IGZ1bmN0aW9uIChwYXJlbnQsIG1hbmlmZXN0KSB7XG4gIHJldHVybiB7XG4gICAgLy8gSW5oZXJpdCBtYW5pZmVzdCBvZiBwYXJlbnQgZGJcbiAgICAuLi5wYXJlbnQuc3VwcG9ydHMsXG5cbiAgICAvLyBEaXNhYmxlIHVuc3VwcG9ydGVkIGZlYXR1cmVzXG4gICAgY3JlYXRlSWZNaXNzaW5nOiBmYWxzZSxcbiAgICBlcnJvcklmRXhpc3RzOiBmYWxzZSxcblxuICAgIC8vIFVuc2V0IGFkZGl0aW9uYWwgZXZlbnRzIGJlY2F1c2Ugd2UncmUgbm90IGZvcndhcmRpbmcgdGhlbVxuICAgIGV2ZW50czoge30sXG5cbiAgICAvLyBVbnNldCBhZGRpdGlvbmFsIG1ldGhvZHMgKGxpa2UgYXBwcm94aW1hdGVTaXplKSB3aGljaCB3ZSBjYW4ndCBzdXBwb3J0IGhlcmUgdW5sZXNzXG4gICAgLy8gdGhlIEFic3RyYWN0U3VibGV2ZWwgY2xhc3MgaXMgb3ZlcnJpZGRlbiBieSBhbiBpbXBsZW1lbnRhdGlvbiBvZiBgYWJzdHJhY3QtbGV2ZWxgLlxuICAgIGFkZGl0aW9uYWxNZXRob2RzOiB7fSxcblxuICAgIC8vIEluaGVyaXQgbWFuaWZlc3Qgb2YgY3VzdG9tIEFic3RyYWN0U3VibGV2ZWwgc3ViY2xhc3MuIFN1Y2ggYSBjbGFzcyBpcyBub3RcbiAgICAvLyBhbGxvd2VkIHRvIG92ZXJyaWRlIGVuY29kaW5ncy5cbiAgICAuLi5tYW5pZmVzdCxcblxuICAgIGVuY29kaW5nczoge1xuICAgICAgdXRmODogc3VwcG9ydHNFbmNvZGluZyhwYXJlbnQsICd1dGY4JyksXG4gICAgICBidWZmZXI6IHN1cHBvcnRzRW5jb2RpbmcocGFyZW50LCAnYnVmZmVyJyksXG4gICAgICB2aWV3OiBzdXBwb3J0c0VuY29kaW5nKHBhcmVudCwgJ3ZpZXcnKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBzdXBwb3J0c0VuY29kaW5nID0gZnVuY3Rpb24gKHBhcmVudCwgZW5jb2RpbmcpIHtcbiAgLy8gUHJlZmVyIGEgbm9uLXRyYW5zY29kZWQgZW5jb2RpbmcgZm9yIG9wdGltYWwgcGVyZm9ybWFuY2VcbiAgcmV0dXJuIHBhcmVudC5zdXBwb3J0cy5lbmNvZGluZ3NbZW5jb2RpbmddXG4gICAgPyBwYXJlbnQua2V5RW5jb2RpbmcoZW5jb2RpbmcpLm5hbWUgPT09IGVuY29kaW5nXG4gICAgOiBmYWxzZVxufVxuXG5jbGFzcyBNdWx0aUZvcm1hdCB7XG4gIGNvbnN0cnVjdG9yIChrZXkpIHtcbiAgICB0aGlzLnV0ZjggPSBrZXlcbiAgICB0aGlzLnZpZXcgPSB0ZXh0RW5jb2Rlci5lbmNvZGUoa2V5KVxuICAgIHRoaXMuYnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmZyb20odGhpcy52aWV3LmJ1ZmZlciwgMCwgdGhpcy52aWV3LmJ5dGVMZW5ndGgpIDoge31cbiAgfVxufVxuXG5jbGFzcyBVbmZpeGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBuZXcgTWFwKClcbiAgfVxuXG4gIGdldCAocHJlZml4TGVuZ3RoLCBrZXlGb3JtYXQpIHtcbiAgICBsZXQgdW5maXggPSB0aGlzLmNhY2hlLmdldChrZXlGb3JtYXQpXG5cbiAgICBpZiAodW5maXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGtleUZvcm1hdCA9PT0gJ3ZpZXcnKSB7XG4gICAgICAgIHVuZml4ID0gZnVuY3Rpb24gKHByZWZpeExlbmd0aCwga2V5KSB7XG4gICAgICAgICAgLy8gQXZvaWQgVWludDhBcnJheSNzbGljZSgpIGJlY2F1c2UgaXQgY29waWVzXG4gICAgICAgICAgcmV0dXJuIGtleS5zdWJhcnJheShwcmVmaXhMZW5ndGgpXG4gICAgICAgIH0uYmluZChudWxsLCBwcmVmaXhMZW5ndGgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bmZpeCA9IGZ1bmN0aW9uIChwcmVmaXhMZW5ndGgsIGtleSkge1xuICAgICAgICAgIC8vIEF2b2lkIEJ1ZmZlciNzdWJhcnJheSgpIGJlY2F1c2UgaXQncyBzbG93XG4gICAgICAgICAgcmV0dXJuIGtleS5zbGljZShwcmVmaXhMZW5ndGgpXG4gICAgICAgIH0uYmluZChudWxsLCBwcmVmaXhMZW5ndGgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FjaGUuc2V0KGtleUZvcm1hdCwgdW5maXgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZml4XG4gIH1cbn1cblxuY29uc3QgdHJpbSA9IGZ1bmN0aW9uIChzdHIsIGNoYXIpIHtcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgZW5kID0gc3RyLmxlbmd0aFxuXG4gIHdoaWxlIChzdGFydCA8IGVuZCAmJiBzdHJbc3RhcnRdID09PSBjaGFyKSBzdGFydCsrXG4gIHdoaWxlIChlbmQgPiBzdGFydCAmJiBzdHJbZW5kIC0gMV0gPT09IGNoYXIpIGVuZC0tXG5cbiAgcmV0dXJuIHN0ci5zbGljZShzdGFydCwgZW5kKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgc3VwcG9ydHMgfSA9IHJlcXVpcmUoJ2xldmVsLXN1cHBvcnRzJylcbmNvbnN0IHsgVHJhbnNjb2RlciB9ID0gcmVxdWlyZSgnbGV2ZWwtdHJhbnNjb2RlcicpXG5jb25zdCB7IEV2ZW50RW1pdHRlciB9ID0gcmVxdWlyZSgnZXZlbnRzJylcbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcbmNvbnN0IGNvbWJpbmVFcnJvcnMgPSByZXF1aXJlKCdtYXliZS1jb21iaW5lLWVycm9ycycpXG5jb25zdCB7IEFic3RyYWN0SXRlcmF0b3IgfSA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtaXRlcmF0b3InKVxuY29uc3QgeyBEZWZhdWx0S2V5SXRlcmF0b3IsIERlZmF1bHRWYWx1ZUl0ZXJhdG9yIH0gPSByZXF1aXJlKCcuL2xpYi9kZWZhdWx0LWt2LWl0ZXJhdG9yJylcbmNvbnN0IHsgRGVmZXJyZWRJdGVyYXRvciwgRGVmZXJyZWRLZXlJdGVyYXRvciwgRGVmZXJyZWRWYWx1ZUl0ZXJhdG9yIH0gPSByZXF1aXJlKCcuL2xpYi9kZWZlcnJlZC1pdGVyYXRvcicpXG5jb25zdCB7IERlZmF1bHRDaGFpbmVkQmF0Y2ggfSA9IHJlcXVpcmUoJy4vbGliL2RlZmF1bHQtY2hhaW5lZC1iYXRjaCcpXG5jb25zdCB7IERhdGFiYXNlSG9va3MgfSA9IHJlcXVpcmUoJy4vbGliL2hvb2tzJylcbmNvbnN0IHsgUHJld3JpdGVCYXRjaCB9ID0gcmVxdWlyZSgnLi9saWIvcHJld3JpdGUtYmF0Y2gnKVxuY29uc3QgeyBFdmVudE1vbml0b3IgfSA9IHJlcXVpcmUoJy4vbGliL2V2ZW50LW1vbml0b3InKVxuY29uc3QgeyBnZXRPcHRpb25zLCBub29wLCBlbXB0eU9wdGlvbnMsIHJlc29sdmVkUHJvbWlzZSB9ID0gcmVxdWlyZSgnLi9saWIvY29tbW9uJylcbmNvbnN0IHsgcHJlZml4RGVzY2VuZGFudEtleSwgaXNEZXNjZW5kYW50IH0gPSByZXF1aXJlKCcuL2xpYi9wcmVmaXhlcycpXG5jb25zdCB7IERlZmVycmVkUXVldWUgfSA9IHJlcXVpcmUoJy4vbGliL2RlZmVycmVkLXF1ZXVlJylcbmNvbnN0IHJhbmdlT3B0aW9ucyA9IHJlcXVpcmUoJy4vbGliL3JhbmdlLW9wdGlvbnMnKVxuXG5jb25zdCBrUmVzb3VyY2VzID0gU3ltYm9sKCdyZXNvdXJjZXMnKVxuY29uc3Qga0Nsb3NlUmVzb3VyY2VzID0gU3ltYm9sKCdjbG9zZVJlc291cmNlcycpXG5jb25zdCBrUXVldWUgPSBTeW1ib2woJ3F1ZXVlJylcbmNvbnN0IGtEZWZlck9wZW4gPSBTeW1ib2woJ2RlZmVyT3BlbicpXG5jb25zdCBrT3B0aW9ucyA9IFN5bWJvbCgnb3B0aW9ucycpXG5jb25zdCBrU3RhdHVzID0gU3ltYm9sKCdzdGF0dXMnKVxuY29uc3Qga1N0YXR1c0NoYW5nZSA9IFN5bWJvbCgnc3RhdHVzQ2hhbmdlJylcbmNvbnN0IGtTdGF0dXNMb2NrZWQgPSBTeW1ib2woJ3N0YXR1c0xvY2tlZCcpXG5jb25zdCBrRGVmYXVsdE9wdGlvbnMgPSBTeW1ib2woJ2RlZmF1bHRPcHRpb25zJylcbmNvbnN0IGtUcmFuc2NvZGVyID0gU3ltYm9sKCd0cmFuc2NvZGVyJylcbmNvbnN0IGtLZXlFbmNvZGluZyA9IFN5bWJvbCgna2V5RW5jb2RpbmcnKVxuY29uc3Qga1ZhbHVlRW5jb2RpbmcgPSBTeW1ib2woJ3ZhbHVlRW5jb2RpbmcnKVxuY29uc3Qga0V2ZW50TW9uaXRvciA9IFN5bWJvbCgnZXZlbnRNb25pdG9yJylcbmNvbnN0IGtBcnJheUJhdGNoID0gU3ltYm9sKCdhcnJheUJhdGNoJylcblxuY2xhc3MgQWJzdHJhY3RMZXZlbCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChtYW5pZmVzdCwgb3B0aW9ucykge1xuICAgIHN1cGVyKClcblxuICAgIGlmICh0eXBlb2YgbWFuaWZlc3QgIT09ICdvYmplY3QnIHx8IG1hbmlmZXN0ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50ICdtYW5pZmVzdCcgbXVzdCBiZSBhbiBvYmplY3RcIilcbiAgICB9XG5cbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxuICAgIGNvbnN0IHsga2V5RW5jb2RpbmcsIHZhbHVlRW5jb2RpbmcsIHBhc3NpdmUsIC4uLmZvcndhcmQgfSA9IG9wdGlvbnNcblxuICAgIHRoaXNba1Jlc291cmNlc10gPSBuZXcgU2V0KClcbiAgICB0aGlzW2tRdWV1ZV0gPSBuZXcgRGVmZXJyZWRRdWV1ZSgpXG4gICAgdGhpc1trRGVmZXJPcGVuXSA9IHRydWVcbiAgICB0aGlzW2tPcHRpb25zXSA9IGZvcndhcmRcbiAgICB0aGlzW2tTdGF0dXNdID0gJ29wZW5pbmcnXG4gICAgdGhpc1trU3RhdHVzQ2hhbmdlXSA9IG51bGxcbiAgICB0aGlzW2tTdGF0dXNMb2NrZWRdID0gZmFsc2VcblxuICAgIHRoaXMuaG9va3MgPSBuZXcgRGF0YWJhc2VIb29rcygpXG4gICAgdGhpcy5zdXBwb3J0cyA9IHN1cHBvcnRzKG1hbmlmZXN0LCB7XG4gICAgICBkZWZlcnJlZE9wZW46IHRydWUsXG5cbiAgICAgIC8vIFRPRE8gKG5leHQgbWFqb3IpOiBhZGQgc2Vla1xuICAgICAgc25hcHNob3RzOiBtYW5pZmVzdC5zbmFwc2hvdHMgIT09IGZhbHNlLFxuICAgICAgcGVybWFuZW5jZTogbWFuaWZlc3QucGVybWFuZW5jZSAhPT0gZmFsc2UsXG5cbiAgICAgIGVuY29kaW5nczogbWFuaWZlc3QuZW5jb2RpbmdzIHx8IHt9LFxuICAgICAgZXZlbnRzOiBPYmplY3QuYXNzaWduKHt9LCBtYW5pZmVzdC5ldmVudHMsIHtcbiAgICAgICAgb3BlbmluZzogdHJ1ZSxcbiAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgY2xvc2luZzogdHJ1ZSxcbiAgICAgICAgY2xvc2VkOiB0cnVlLFxuICAgICAgICB3cml0ZTogdHJ1ZSxcbiAgICAgICAgcHV0OiB0cnVlLFxuICAgICAgICBkZWw6IHRydWUsXG4gICAgICAgIGJhdGNoOiB0cnVlLFxuICAgICAgICBjbGVhcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gTW9uaXRvciBldmVudCBsaXN0ZW5lcnNcbiAgICB0aGlzW2tFdmVudE1vbml0b3JdID0gbmV3IEV2ZW50TW9uaXRvcih0aGlzLCBbXG4gICAgICB7IG5hbWU6ICd3cml0ZScgfSxcbiAgICAgIHsgbmFtZTogJ3B1dCcsIGRlcHJlY2F0ZWQ6IHRydWUsIGFsdDogJ3dyaXRlJyB9LFxuICAgICAgeyBuYW1lOiAnZGVsJywgZGVwcmVjYXRlZDogdHJ1ZSwgYWx0OiAnd3JpdGUnIH0sXG4gICAgICB7IG5hbWU6ICdiYXRjaCcsIGRlcHJlY2F0ZWQ6IHRydWUsIGFsdDogJ3dyaXRlJyB9XG4gICAgXSlcblxuICAgIHRoaXNba1RyYW5zY29kZXJdID0gbmV3IFRyYW5zY29kZXIoZm9ybWF0cyh0aGlzKSlcbiAgICB0aGlzW2tLZXlFbmNvZGluZ10gPSB0aGlzW2tUcmFuc2NvZGVyXS5lbmNvZGluZyhrZXlFbmNvZGluZyB8fCAndXRmOCcpXG4gICAgdGhpc1trVmFsdWVFbmNvZGluZ10gPSB0aGlzW2tUcmFuc2NvZGVyXS5lbmNvZGluZyh2YWx1ZUVuY29kaW5nIHx8ICd1dGY4JylcblxuICAgIC8vIEFkZCBjdXN0b20gYW5kIHRyYW5zY29kZXIgZW5jb2RpbmdzIHRvIG1hbmlmZXN0XG4gICAgZm9yIChjb25zdCBlbmNvZGluZyBvZiB0aGlzW2tUcmFuc2NvZGVyXS5lbmNvZGluZ3MoKSkge1xuICAgICAgaWYgKCF0aGlzLnN1cHBvcnRzLmVuY29kaW5nc1tlbmNvZGluZy5jb21tb25OYW1lXSkge1xuICAgICAgICB0aGlzLnN1cHBvcnRzLmVuY29kaW5nc1tlbmNvZGluZy5jb21tb25OYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzW2tEZWZhdWx0T3B0aW9uc10gPSB7XG4gICAgICBlbXB0eTogZW1wdHlPcHRpb25zLFxuICAgICAgZW50cnk6IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBrZXlFbmNvZGluZzogdGhpc1trS2V5RW5jb2RpbmddLmNvbW1vbk5hbWUsXG4gICAgICAgIHZhbHVlRW5jb2Rpbmc6IHRoaXNba1ZhbHVlRW5jb2RpbmddLmNvbW1vbk5hbWVcbiAgICAgIH0pLFxuICAgICAgZW50cnlGb3JtYXQ6IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBrZXlFbmNvZGluZzogdGhpc1trS2V5RW5jb2RpbmddLmZvcm1hdCxcbiAgICAgICAgdmFsdWVFbmNvZGluZzogdGhpc1trVmFsdWVFbmNvZGluZ10uZm9ybWF0XG4gICAgICB9KSxcbiAgICAgIGtleTogT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGtleUVuY29kaW5nOiB0aGlzW2tLZXlFbmNvZGluZ10uY29tbW9uTmFtZVxuICAgICAgfSksXG4gICAgICBrZXlGb3JtYXQ6IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBrZXlFbmNvZGluZzogdGhpc1trS2V5RW5jb2RpbmddLmZvcm1hdFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBCZWZvcmUgd2Ugc3RhcnQgb3BlbmluZywgbGV0IHN1YmNsYXNzIGZpbmlzaCBpdHMgY29uc3RydWN0b3JcbiAgICAvLyBhbmQgYWxsb3cgZXZlbnRzIGFuZCBwb3N0b3BlbiBob29rIGZ1bmN0aW9ucyB0byBiZSBhZGRlZC5cbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICBpZiAodGhpc1trRGVmZXJPcGVuXSkge1xuICAgICAgICB0aGlzLm9wZW4oeyBwYXNzaXZlOiBmYWxzZSB9KS5jYXRjaChub29wKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3RhdHVzICgpIHtcbiAgICByZXR1cm4gdGhpc1trU3RhdHVzXVxuICB9XG5cbiAgZ2V0IHBhcmVudCAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGtleUVuY29kaW5nIChlbmNvZGluZykge1xuICAgIHJldHVybiB0aGlzW2tUcmFuc2NvZGVyXS5lbmNvZGluZyhlbmNvZGluZyAhPSBudWxsID8gZW5jb2RpbmcgOiB0aGlzW2tLZXlFbmNvZGluZ10pXG4gIH1cblxuICB2YWx1ZUVuY29kaW5nIChlbmNvZGluZykge1xuICAgIHJldHVybiB0aGlzW2tUcmFuc2NvZGVyXS5lbmNvZGluZyhlbmNvZGluZyAhPSBudWxsID8gZW5jb2RpbmcgOiB0aGlzW2tWYWx1ZUVuY29kaW5nXSlcbiAgfVxuXG4gIGFzeW5jIG9wZW4gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0geyAuLi50aGlzW2tPcHRpb25zXSwgLi4uZ2V0T3B0aW9ucyhvcHRpb25zKSB9XG5cbiAgICBvcHRpb25zLmNyZWF0ZUlmTWlzc2luZyA9IG9wdGlvbnMuY3JlYXRlSWZNaXNzaW5nICE9PSBmYWxzZVxuICAgIG9wdGlvbnMuZXJyb3JJZkV4aXN0cyA9ICEhb3B0aW9ucy5lcnJvcklmRXhpc3RzXG5cbiAgICAvLyBUT0RPOiBkb2N1bWVudCB3aHkgd2UgZG8gdGhpc1xuICAgIGNvbnN0IHBvc3RvcGVuID0gdGhpcy5ob29rcy5wb3N0b3Blbi5ub29wID8gbnVsbCA6IHRoaXMuaG9va3MucG9zdG9wZW4ucnVuXG4gICAgY29uc3QgcGFzc2l2ZSA9IG9wdGlvbnMucGFzc2l2ZVxuXG4gICAgaWYgKHBhc3NpdmUgJiYgdGhpc1trRGVmZXJPcGVuXSkge1xuICAgICAgLy8gV2FpdCBhIHRpY2sgdW50aWwgY29uc3RydWN0b3IgY2FsbHMgb3BlbigpIG5vbi1wYXNzaXZlbHlcbiAgICAgIGF3YWl0IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIC8vIFdhaXQgZm9yIHBlbmRpbmcgY2hhbmdlcyBhbmQgY2hlY2sgdGhhdCBvcGVuaW5nIGlzIGFsbG93ZWRcbiAgICBhc3NlcnRVbmxvY2tlZCh0aGlzKVxuICAgIHdoaWxlICh0aGlzW2tTdGF0dXNDaGFuZ2VdICE9PSBudWxsKSBhd2FpdCB0aGlzW2tTdGF0dXNDaGFuZ2VdLmNhdGNoKG5vb3ApXG4gICAgYXNzZXJ0VW5sb2NrZWQodGhpcylcblxuICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICBpZiAodGhpc1trU3RhdHVzXSAhPT0gJ29wZW4nKSB0aHJvdyBuZXcgTm90T3BlbkVycm9yKClcbiAgICB9IGVsc2UgaWYgKHRoaXNba1N0YXR1c10gPT09ICdjbG9zZWQnIHx8IHRoaXNba0RlZmVyT3Blbl0pIHtcbiAgICAgIHRoaXNba0RlZmVyT3Blbl0gPSBmYWxzZVxuICAgICAgdGhpc1trU3RhdHVzQ2hhbmdlXSA9IHJlc29sdmVkUHJvbWlzZSAvLyBUT0RPOiByZWZhY3RvclxuICAgICAgdGhpc1trU3RhdHVzQ2hhbmdlXSA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXNba1N0YXR1c10gPSAnb3BlbmluZydcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnb3BlbmluZycpXG4gICAgICAgICAgYXdhaXQgdGhpcy5fb3BlbihvcHRpb25zKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ2Nsb3NlZCdcblxuICAgICAgICAgIC8vIE11c3QgaGFwcGVuIGJlZm9yZSB3ZSBjbG9zZSByZXNvdXJjZXMsIGluIGNhc2UgdGhlaXIgY2xvc2UoKSBpcyB3YWl0aW5nXG4gICAgICAgICAgLy8gb24gYSBkZWZlcnJlZCBvcGVyYXRpb24gd2hpY2ggaW4gdHVybiBpcyB3YWl0aW5nIG9uIGRiLm9wZW4oKS5cbiAgICAgICAgICB0aGlzW2tRdWV1ZV0uZHJhaW4oKVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXNba0Nsb3NlUmVzb3VyY2VzXSgpXG4gICAgICAgICAgfSBjYXRjaCAocmVzb3VyY2VFcnIpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leC1hc3NpZ25cbiAgICAgICAgICAgIGVyciA9IGNvbWJpbmVFcnJvcnMoW2VyciwgcmVzb3VyY2VFcnJdKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBOb3RPcGVuRXJyb3IoZXJyKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdvcGVuJ1xuXG4gICAgICAgIGlmIChwb3N0b3BlbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGxldCBob29rRXJyXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBkZWFkbG9ja1xuICAgICAgICAgICAgdGhpc1trU3RhdHVzTG9ja2VkXSA9IHRydWVcbiAgICAgICAgICAgIGF3YWl0IHBvc3RvcGVuKG9wdGlvbnMpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBob29rRXJyID0gY29udmVydFJlamVjdGlvbihlcnIpXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXNba1N0YXR1c0xvY2tlZF0gPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJldmVydFxuICAgICAgICAgIGlmIChob29rRXJyKSB7XG4gICAgICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ2Nsb3NpbmcnXG4gICAgICAgICAgICB0aGlzW2tRdWV1ZV0uZHJhaW4oKVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzW2tDbG9zZVJlc291cmNlc10oKVxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9jbG9zZSgpXG4gICAgICAgICAgICB9IGNhdGNoIChjbG9zZUVycikge1xuICAgICAgICAgICAgICAvLyBUaGVyZSdzIG5vIHNhZmUgc3RhdGUgdG8gcmV0dXJuIHRvLiBDYW4ndCByZXR1cm4gdG8gJ29wZW4nIGJlY2F1c2VcbiAgICAgICAgICAgICAgLy8gcG9zdG9wZW4gaG9vayBmYWlsZWQuIENhbid0IHJldHVybiB0byAnY2xvc2VkJyAod2l0aCB0aGUgYWJpbGl0eSB0b1xuICAgICAgICAgICAgICAvLyByZW9wZW4pIGJlY2F1c2UgdGhlIHVuZGVybHlpbmcgZGF0YWJhc2UgaXMgcG90ZW50aWFsbHkgc3RpbGwgb3Blbi5cbiAgICAgICAgICAgICAgdGhpc1trU3RhdHVzTG9ja2VkXSA9IHRydWVcbiAgICAgICAgICAgICAgaG9va0VyciA9IGNvbWJpbmVFcnJvcnMoW2hvb2tFcnIsIGNsb3NlRXJyXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdjbG9zZWQnXG5cbiAgICAgICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignVGhlIHBvc3RvcGVuIGhvb2sgZmFpbGVkIG9uIG9wZW4oKScsIHtcbiAgICAgICAgICAgICAgY29kZTogJ0xFVkVMX0hPT0tfRVJST1InLFxuICAgICAgICAgICAgICBjYXVzZTogaG9va0VyclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW2tRdWV1ZV0uZHJhaW4oKVxuICAgICAgICB0aGlzLmVtaXQoJ29wZW4nKVxuICAgICAgfSkoKVxuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzW2tTdGF0dXNDaGFuZ2VdXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzW2tTdGF0dXNDaGFuZ2VdID0gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpc1trU3RhdHVzXSAhPT0gJ29wZW4nKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2hvdWxkIG5vdCBoYXBwZW4gKi9cbiAgICAgIHRocm93IG5ldyBOb3RPcGVuRXJyb3IoKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9vcGVuIChvcHRpb25zKSB7fVxuXG4gIGFzeW5jIGNsb3NlICgpIHtcbiAgICAvLyBXYWl0IGZvciBwZW5kaW5nIGNoYW5nZXMgYW5kIGNoZWNrIHRoYXQgY2xvc2luZyBpcyBhbGxvd2VkXG4gICAgYXNzZXJ0VW5sb2NrZWQodGhpcylcbiAgICB3aGlsZSAodGhpc1trU3RhdHVzQ2hhbmdlXSAhPT0gbnVsbCkgYXdhaXQgdGhpc1trU3RhdHVzQ2hhbmdlXS5jYXRjaChub29wKVxuICAgIGFzc2VydFVubG9ja2VkKHRoaXMpXG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW4nIHx8IHRoaXNba0RlZmVyT3Blbl0pIHtcbiAgICAgIC8vIElmIGNsb3NlKCkgd2FzIGNhbGxlZCBhZnRlciBjb25zdHJ1Y3Rvciwgd2UgZGlkbid0IG9wZW4geWV0XG4gICAgICBjb25zdCBmcm9tSW5pdGlhbCA9IHRoaXNba0RlZmVyT3Blbl1cblxuICAgICAgdGhpc1trRGVmZXJPcGVuXSA9IGZhbHNlXG4gICAgICB0aGlzW2tTdGF0dXNDaGFuZ2VdID0gcmVzb2x2ZWRQcm9taXNlXG4gICAgICB0aGlzW2tTdGF0dXNDaGFuZ2VdID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdjbG9zaW5nJ1xuICAgICAgICB0aGlzW2tRdWV1ZV0uZHJhaW4oKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdjbG9zaW5nJylcbiAgICAgICAgICBhd2FpdCB0aGlzW2tDbG9zZVJlc291cmNlc10oKVxuICAgICAgICAgIGlmICghZnJvbUluaXRpYWwpIGF3YWl0IHRoaXMuX2Nsb3NlKClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdvcGVuJ1xuICAgICAgICAgIHRoaXNba1F1ZXVlXS5kcmFpbigpXG4gICAgICAgICAgdGhyb3cgbmV3IE5vdENsb3NlZEVycm9yKGVycilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNba1N0YXR1c10gPSAnY2xvc2VkJ1xuICAgICAgICB0aGlzW2tRdWV1ZV0uZHJhaW4oKVxuICAgICAgICB0aGlzLmVtaXQoJ2Nsb3NlZCcpXG4gICAgICB9KSgpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXNba1N0YXR1c0NoYW5nZV1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXNba1N0YXR1c0NoYW5nZV0gPSBudWxsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzW2tTdGF0dXNdICE9PSAnY2xvc2VkJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNob3VsZCBub3QgaGFwcGVuICovXG4gICAgICB0aHJvdyBuZXcgTm90Q2xvc2VkRXJyb3IoKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIFtrQ2xvc2VSZXNvdXJjZXNdICgpIHtcbiAgICBpZiAodGhpc1trUmVzb3VyY2VzXS5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJbiBwYXJhbGxlbCBzbyB0aGF0IGFsbCByZXNvdXJjZXMga25vdyB0aGV5IGFyZSBjbG9zZWRcbiAgICBjb25zdCByZXNvdXJjZXMgPSBBcnJheS5mcm9tKHRoaXNba1Jlc291cmNlc10pXG4gICAgY29uc3QgcHJvbWlzZXMgPSByZXNvdXJjZXMubWFwKGNsb3NlUmVzb3VyY2UpXG5cbiAgICAvLyBUT0RPOiBhc3luYy9hd2FpdFxuICAgIHJldHVybiBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpLnRoZW4oYXN5bmMgKHJlc3VsdHMpID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVzdWx0c1tpXS5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgdGhpc1trUmVzb3VyY2VzXS5kZWxldGUocmVzb3VyY2VzW2ldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9ycy5wdXNoKGNvbnZlcnRSZWplY3Rpb24ocmVzdWx0c1tpXS5yZWFzb24pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBjb21iaW5lRXJyb3JzKGVycm9ycylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgX2Nsb3NlICgpIHt9XG5cbiAgYXN5bmMgZ2V0IChrZXksIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCB0aGlzW2tEZWZhdWx0T3B0aW9uc10uZW50cnkpXG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZlckFzeW5jKCgpID0+IHRoaXMuZ2V0KGtleSwgb3B0aW9ucykpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuXG4gICAgY29uc3QgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5KVxuICAgIGlmIChlcnIpIHRocm93IGVyclxuXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXMudmFsdWVFbmNvZGluZyhvcHRpb25zLnZhbHVlRW5jb2RpbmcpXG4gICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgY29uc3QgdmFsdWVGb3JtYXQgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgLy8gRm9yd2FyZCBlbmNvZGluZyBvcHRpb25zIHRvIHRoZSB1bmRlcmx5aW5nIHN0b3JlXG4gICAgaWYgKG9wdGlvbnMua2V5RW5jb2RpbmcgIT09IGtleUZvcm1hdCB8fCBvcHRpb25zLnZhbHVlRW5jb2RpbmcgIT09IHZhbHVlRm9ybWF0KSB7XG4gICAgICAvLyBBdm9pZCBzcHJlYWQgb3BlcmF0b3IgYmVjYXVzZSBvZiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjA0NTQwXG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBrZXlFbmNvZGluZzoga2V5Rm9ybWF0LCB2YWx1ZUVuY29kaW5nOiB2YWx1ZUZvcm1hdCB9KVxuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRLZXkgPSBrZXlFbmNvZGluZy5lbmNvZGUoa2V5KVxuICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5fZ2V0KHRoaXMucHJlZml4S2V5KGVuY29kZWRLZXksIGtleUZvcm1hdCwgdHJ1ZSksIG9wdGlvbnMpXG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHZhbHVlRW5jb2RpbmcuZGVjb2RlKHZhbHVlKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdDb3VsZCBub3QgZGVjb2RlIHZhbHVlJywge1xuICAgICAgICBjb2RlOiAnTEVWRUxfREVDT0RFX0VSUk9SJyxcbiAgICAgICAgY2F1c2U6IGVyclxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBfZ2V0IChrZXksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBhc3luYyBnZXRNYW55IChrZXlzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgdGhpc1trRGVmYXVsdE9wdGlvbnNdLmVudHJ5KVxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmZXJBc3luYygoKSA9PiB0aGlzLmdldE1hbnkoa2V5cywgb3B0aW9ucykpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50ICdrZXlzJyBtdXN0IGJlIGFuIGFycmF5XCIpXG4gICAgfVxuXG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpcy52YWx1ZUVuY29kaW5nKG9wdGlvbnMudmFsdWVFbmNvZGluZylcbiAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBjb25zdCB2YWx1ZUZvcm1hdCA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICAvLyBGb3J3YXJkIGVuY29kaW5nIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucy5rZXlFbmNvZGluZyAhPT0ga2V5Rm9ybWF0IHx8IG9wdGlvbnMudmFsdWVFbmNvZGluZyAhPT0gdmFsdWVGb3JtYXQpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IGtleUVuY29kaW5nOiBrZXlGb3JtYXQsIHZhbHVlRW5jb2Rpbmc6IHZhbHVlRm9ybWF0IH0pXG4gICAgfVxuXG4gICAgY29uc3QgbWFwcGVkS2V5cyA9IG5ldyBBcnJheShrZXlzLmxlbmd0aClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgICAgY29uc3QgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5KVxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyXG5cbiAgICAgIG1hcHBlZEtleXNbaV0gPSB0aGlzLnByZWZpeEtleShrZXlFbmNvZGluZy5lbmNvZGUoa2V5KSwga2V5Rm9ybWF0LCB0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHRoaXMuX2dldE1hbnkobWFwcGVkS2V5cywgb3B0aW9ucylcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodmFsdWVzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZUVuY29kaW5nLmRlY29kZSh2YWx1ZXNbaV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcihgQ291bGQgbm90IGRlY29kZSBvbmUgb3IgbW9yZSBvZiAke3ZhbHVlcy5sZW5ndGh9IHZhbHVlKHMpYCwge1xuICAgICAgICBjb2RlOiAnTEVWRUxfREVDT0RFX0VSUk9SJyxcbiAgICAgICAgY2F1c2U6IGVyclxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzXG4gIH1cblxuICBhc3luYyBfZ2V0TWFueSAoa2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpLmZpbGwodW5kZWZpbmVkKVxuICB9XG5cbiAgYXN5bmMgcHV0IChrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmhvb2tzLnByZXdyaXRlLm5vb3ApIHtcbiAgICAgIC8vIEZvcndhcmQgdG8gYmF0Y2goKSB3aGljaCB3aWxsIHJ1biB0aGUgaG9va1xuICAgICAgLy8gTm90ZTogdGVjaG5pY2FsbHkgbWVhbnMgdGhhdCBwdXQoKSBzdXBwb3J0cyB0aGUgc3VibGV2ZWwgb3B0aW9uIGluIHRoaXMgY2FzZSxcbiAgICAgIC8vIGJ1dCBpdCBnZW5lcmFsbHkgZG9lc24ndCBwZXIgZG9jdW1lbnRhdGlvbiAod2hpY2ggbWFrZXMgc2Vuc2UpLiBTYW1lIGZvciBkZWwoKS5cbiAgICAgIHJldHVybiB0aGlzLmJhdGNoKFt7IHR5cGU6ICdwdXQnLCBrZXksIHZhbHVlIH1dLCBvcHRpb25zKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIHRoaXNba0RlZmF1bHRPcHRpb25zXS5lbnRyeSlcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5wdXQoa2V5LCB2YWx1ZSwgb3B0aW9ucykpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuXG4gICAgY29uc3QgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5KSB8fCB0aGlzLl9jaGVja1ZhbHVlKHZhbHVlKVxuICAgIGlmIChlcnIpIHRocm93IGVyclxuXG4gICAgLy8gRW5jb2RlIGRhdGEgZm9yIHByaXZhdGUgQVBJXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXMudmFsdWVFbmNvZGluZyhvcHRpb25zLnZhbHVlRW5jb2RpbmcpXG4gICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgY29uc3QgdmFsdWVGb3JtYXQgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuICAgIGNvbnN0IGVuYWJsZVdyaXRlRXZlbnQgPSB0aGlzW2tFdmVudE1vbml0b3JdLndyaXRlXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBvcHRpb25zXG5cbiAgICAvLyBBdm9pZCBPYmplY3QuYXNzaWduKCkgZm9yIGRlZmF1bHQgb3B0aW9uc1xuICAgIC8vIFRPRE86IGFsc28gYXBwbHkgdGhpcyB0d2VhayB0byBnZXQoKSBhbmQgZ2V0TWFueSgpXG4gICAgaWYgKG9wdGlvbnMgPT09IHRoaXNba0RlZmF1bHRPcHRpb25zXS5lbnRyeSkge1xuICAgICAgb3B0aW9ucyA9IHRoaXNba0RlZmF1bHRPcHRpb25zXS5lbnRyeUZvcm1hdFxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5rZXlFbmNvZGluZyAhPT0ga2V5Rm9ybWF0IHx8IG9wdGlvbnMudmFsdWVFbmNvZGluZyAhPT0gdmFsdWVGb3JtYXQpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IGtleUVuY29kaW5nOiBrZXlGb3JtYXQsIHZhbHVlRW5jb2Rpbmc6IHZhbHVlRm9ybWF0IH0pXG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZEtleSA9IGtleUVuY29kaW5nLmVuY29kZShrZXkpXG4gICAgY29uc3QgcHJlZml4ZWRLZXkgPSB0aGlzLnByZWZpeEtleShlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIHRydWUpXG4gICAgY29uc3QgZW5jb2RlZFZhbHVlID0gdmFsdWVFbmNvZGluZy5lbmNvZGUodmFsdWUpXG5cbiAgICBhd2FpdCB0aGlzLl9wdXQocHJlZml4ZWRLZXksIGVuY29kZWRWYWx1ZSwgb3B0aW9ucylcblxuICAgIGlmIChlbmFibGVXcml0ZUV2ZW50KSB7XG4gICAgICBjb25zdCBvcCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsLCB7XG4gICAgICAgIHR5cGU6ICdwdXQnLFxuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBrZXlFbmNvZGluZyxcbiAgICAgICAgdmFsdWVFbmNvZGluZyxcbiAgICAgICAgZW5jb2RlZEtleSxcbiAgICAgICAgZW5jb2RlZFZhbHVlXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmVtaXQoJ3dyaXRlJywgW29wXSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETyAoc2VtdmVyLW1ham9yKTogcmVtb3ZlXG4gICAgICB0aGlzLmVtaXQoJ3B1dCcsIGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX3B1dCAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge31cblxuICBhc3luYyBkZWwgKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghdGhpcy5ob29rcy5wcmV3cml0ZS5ub29wKSB7XG4gICAgICAvLyBGb3J3YXJkIHRvIGJhdGNoKCkgd2hpY2ggd2lsbCBydW4gdGhlIGhvb2tcbiAgICAgIHJldHVybiB0aGlzLmJhdGNoKFt7IHR5cGU6ICdkZWwnLCBrZXkgfV0sIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgdGhpc1trRGVmYXVsdE9wdGlvbnNdLmtleSlcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5kZWwoa2V5LCBvcHRpb25zKSlcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG5cbiAgICBjb25zdCBlcnIgPSB0aGlzLl9jaGVja0tleShrZXkpXG4gICAgaWYgKGVycikgdGhyb3cgZXJyXG5cbiAgICAvLyBFbmNvZGUgZGF0YSBmb3IgcHJpdmF0ZSBBUElcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBjb25zdCBlbmFibGVXcml0ZUV2ZW50ID0gdGhpc1trRXZlbnRNb25pdG9yXS53cml0ZVxuICAgIGNvbnN0IG9yaWdpbmFsID0gb3B0aW9uc1xuXG4gICAgLy8gQXZvaWQgT2JqZWN0LmFzc2lnbigpIGZvciBkZWZhdWx0IG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucyA9PT0gdGhpc1trRGVmYXVsdE9wdGlvbnNdLmtleSkge1xuICAgICAgb3B0aW9ucyA9IHRoaXNba0RlZmF1bHRPcHRpb25zXS5rZXlGb3JtYXRcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMua2V5RW5jb2RpbmcgIT09IGtleUZvcm1hdCkge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsga2V5RW5jb2Rpbmc6IGtleUZvcm1hdCB9KVxuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRLZXkgPSBrZXlFbmNvZGluZy5lbmNvZGUoa2V5KVxuICAgIGNvbnN0IHByZWZpeGVkS2V5ID0gdGhpcy5wcmVmaXhLZXkoZW5jb2RlZEtleSwga2V5Rm9ybWF0LCB0cnVlKVxuXG4gICAgYXdhaXQgdGhpcy5fZGVsKHByZWZpeGVkS2V5LCBvcHRpb25zKVxuXG4gICAgaWYgKGVuYWJsZVdyaXRlRXZlbnQpIHtcbiAgICAgIGNvbnN0IG9wID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwsIHtcbiAgICAgICAgdHlwZTogJ2RlbCcsXG4gICAgICAgIGtleSxcbiAgICAgICAga2V5RW5jb2RpbmcsXG4gICAgICAgIGVuY29kZWRLZXlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZW1pdCgnd3JpdGUnLCBbb3BdKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIChzZW12ZXItbWFqb3IpOiByZW1vdmVcbiAgICAgIHRoaXMuZW1pdCgnZGVsJywga2V5KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9kZWwgKGtleSwgb3B0aW9ucykge31cblxuICAvLyBUT0RPIChmdXR1cmUpOiBhZGQgd2F5IGZvciBpbXBsZW1lbnRhdGlvbnMgdG8gZGVjbGFyZSB3aGljaCBvcHRpb25zIGFyZSBmb3IgdGhlXG4gIC8vIHdob2xlIGJhdGNoIHJhdGhlciB0aGFuIGRlZmF1bHRzIGZvciBpbmRpdmlkdWFsIG9wZXJhdGlvbnMuIEUuZy4gdGhlIHN5bmMgb3B0aW9uXG4gIC8vIG9mIGNsYXNzaWMtbGV2ZWwsIHRoYXQgc2hvdWxkIG5vdCBiZSBjb3BpZWQgdG8gaW5kaXZpZHVhbCBvcGVyYXRpb25zLlxuICBiYXRjaCAob3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgYXNzZXJ0T3Blbih0aGlzKVxuICAgICAgcmV0dXJuIHRoaXMuX2NoYWluZWRCYXRjaCgpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgdGhpc1trRGVmYXVsdE9wdGlvbnNdLmVtcHR5KVxuICAgIHJldHVybiB0aGlzW2tBcnJheUJhdGNoXShvcGVyYXRpb25zLCBvcHRpb25zKVxuICB9XG5cbiAgLy8gV3JhcHBlZCBmb3IgYXN5bmMgZXJyb3IgaGFuZGxpbmdcbiAgYXN5bmMgW2tBcnJheUJhdGNoXSAob3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgIC8vIFRPRE8gKG5vdCB1cmdlbnQpOiBmcmVlemUgcHJld3JpdGUgaG9vayBhbmQgd3JpdGUgZXZlbnRcbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZlckFzeW5jKCgpID0+IHRoaXNba0FycmF5QmF0Y2hdKG9wZXJhdGlvbnMsIG9wdGlvbnMpKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShvcGVyYXRpb25zKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCAnb3BlcmF0aW9ucycgbXVzdCBiZSBhbiBhcnJheVwiKVxuICAgIH1cblxuICAgIGlmIChvcGVyYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGhcbiAgICBjb25zdCBlbmFibGVQcmV3cml0ZUhvb2sgPSAhdGhpcy5ob29rcy5wcmV3cml0ZS5ub29wXG4gICAgY29uc3QgZW5hYmxlV3JpdGVFdmVudCA9IHRoaXNba0V2ZW50TW9uaXRvcl0ud3JpdGVcbiAgICBjb25zdCBwdWJsaWNPcGVyYXRpb25zID0gZW5hYmxlV3JpdGVFdmVudCA/IG5ldyBBcnJheShsZW5ndGgpIDogbnVsbFxuICAgIGNvbnN0IHByaXZhdGVPcGVyYXRpb25zID0gbmV3IEFycmF5KGxlbmd0aClcbiAgICBjb25zdCBwcmV3cml0ZUJhdGNoID0gZW5hYmxlUHJld3JpdGVIb29rXG4gICAgICA/IG5ldyBQcmV3cml0ZUJhdGNoKHRoaXMsIHByaXZhdGVPcGVyYXRpb25zLCBwdWJsaWNPcGVyYXRpb25zKVxuICAgICAgOiBudWxsXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDbG9uZSB0aGUgb3Agc28gdGhhdCB3ZSBjYW4gZnJlZWx5IG11dGF0ZSBpdC4gV2UgY2FuJ3QgdXNlIGEgY2xhc3MgYmVjYXVzZSB0aGVcbiAgICAgIC8vIG9wIGNhbiBoYXZlIHVzZXJsYW5kIHByb3BlcnRpZXMgdGhhdCB3ZSdkIGhhdmUgdG8gY29weSwgbmVnYXRpbmcgdGhlIHBlcmZvcm1hbmNlXG4gICAgICAvLyBiZW5lZml0cyBvZiBhIGNsYXNzLiBTbyB1c2UgYSBwbGFpbiBvYmplY3QuXG4gICAgICBjb25zdCBvcCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIG9wZXJhdGlvbnNbaV0pXG5cbiAgICAgIC8vIEhvb2sgZnVuY3Rpb25zIGNhbiBtb2RpZnkgb3AgYnV0IG5vdCBpdHMgdHlwZSBvciBzdWJsZXZlbCwgc28gY2FjaGUgdGhvc2VcbiAgICAgIGNvbnN0IGlzUHV0ID0gb3AudHlwZSA9PT0gJ3B1dCdcbiAgICAgIGNvbnN0IGRlbGVnYXRlZCA9IG9wLnN1YmxldmVsICE9IG51bGxcbiAgICAgIGNvbnN0IGRiID0gZGVsZWdhdGVkID8gb3Auc3VibGV2ZWwgOiB0aGlzXG5cbiAgICAgIGNvbnN0IGtleUVycm9yID0gZGIuX2NoZWNrS2V5KG9wLmtleSlcbiAgICAgIGlmIChrZXlFcnJvciAhPSBudWxsKSB0aHJvdyBrZXlFcnJvclxuXG4gICAgICBvcC5rZXlFbmNvZGluZyA9IGRiLmtleUVuY29kaW5nKG9wLmtleUVuY29kaW5nKVxuXG4gICAgICBpZiAoaXNQdXQpIHtcbiAgICAgICAgY29uc3QgdmFsdWVFcnJvciA9IGRiLl9jaGVja1ZhbHVlKG9wLnZhbHVlKVxuICAgICAgICBpZiAodmFsdWVFcnJvciAhPSBudWxsKSB0aHJvdyB2YWx1ZUVycm9yXG5cbiAgICAgICAgb3AudmFsdWVFbmNvZGluZyA9IGRiLnZhbHVlRW5jb2Rpbmcob3AudmFsdWVFbmNvZGluZylcbiAgICAgIH0gZWxzZSBpZiAob3AudHlwZSAhPT0gJ2RlbCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgYmF0Y2ggb3BlcmF0aW9uIG11c3QgaGF2ZSBhIHR5cGUgcHJvcGVydHkgdGhhdCBpcyAncHV0JyBvciAnZGVsJ1wiKVxuICAgICAgfVxuXG4gICAgICBpZiAoZW5hYmxlUHJld3JpdGVIb29rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5ob29rcy5wcmV3cml0ZS5ydW4ob3AsIHByZXdyaXRlQmF0Y2gpXG5cbiAgICAgICAgICAvLyBOb3JtYWxpemUgZW5jb2RpbmdzIGFnYWluIGluIGNhc2UgdGhleSB3ZXJlIG1vZGlmaWVkXG4gICAgICAgICAgb3Aua2V5RW5jb2RpbmcgPSBkYi5rZXlFbmNvZGluZyhvcC5rZXlFbmNvZGluZylcbiAgICAgICAgICBpZiAoaXNQdXQpIG9wLnZhbHVlRW5jb2RpbmcgPSBkYi52YWx1ZUVuY29kaW5nKG9wLnZhbHVlRW5jb2RpbmcpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignVGhlIHByZXdyaXRlIGhvb2sgZmFpbGVkIG9uIGJhdGNoKCknLCB7XG4gICAgICAgICAgICBjb2RlOiAnTEVWRUxfSE9PS19FUlJPUicsXG4gICAgICAgICAgICBjYXVzZTogZXJyXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFbmNvZGUgZGF0YSBmb3IgcHJpdmF0ZSBBUElcbiAgICAgIGNvbnN0IGtleUVuY29kaW5nID0gb3Aua2V5RW5jb2RpbmdcbiAgICAgIGNvbnN0IHByZWVuY29kZWRLZXkgPSBrZXlFbmNvZGluZy5lbmNvZGUob3Aua2V5KVxuICAgICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG5cbiAgICAgIC8vIElmIHRoZSBzdWJsZXZlbCBpcyBub3QgYSBkZXNjZW5kYW50IHRoZW4gZm9yd2FyZCB0aGF0IG9wdGlvbiB0byB0aGUgcGFyZW50IGRiXG4gICAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGVycm9uZW91c2x5IGFkZCBvdXIgb3duIHByZWZpeCB0byB0aGUga2V5IG9mIHRoZSBvcGVyYXRpb24uXG4gICAgICBjb25zdCBzaWJsaW5ncyA9IGRlbGVnYXRlZCAmJiAhaXNEZXNjZW5kYW50KG9wLnN1YmxldmVsLCB0aGlzKSAmJiBvcC5zdWJsZXZlbCAhPT0gdGhpc1xuICAgICAgY29uc3QgZW5jb2RlZEtleSA9IGRlbGVnYXRlZCAmJiAhc2libGluZ3NcbiAgICAgICAgPyBwcmVmaXhEZXNjZW5kYW50S2V5KHByZWVuY29kZWRLZXksIGtleUZvcm1hdCwgZGIsIHRoaXMpXG4gICAgICAgIDogcHJlZW5jb2RlZEtleVxuXG4gICAgICAvLyBPbmx5IHByZWZpeCBvbmNlXG4gICAgICBpZiAoZGVsZWdhdGVkICYmICFzaWJsaW5ncykge1xuICAgICAgICBvcC5zdWJsZXZlbCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgbGV0IHB1YmxpY09wZXJhdGlvbiA9IG51bGxcblxuICAgICAgLy8gSWYgdGhlIHN1YmxldmVsIGlzIG5vdCBhIGRlc2NlbmRhbnQgdGhlbiB3ZSBzaG91bGRuJ3QgZW1pdCBldmVudHNcbiAgICAgIGlmIChlbmFibGVXcml0ZUV2ZW50ICYmICFzaWJsaW5ncykge1xuICAgICAgICAvLyBDbG9uZSBvcCBiZWZvcmUgd2UgbXV0YXRlIGl0IGZvciB0aGUgcHJpdmF0ZSBBUElcbiAgICAgICAgLy8gVE9ETyAoZnV0dXJlIHNlbXZlci1tYWpvcik6IGNvbnNpZGVyIHNlbmRpbmcgdGhpcyBzaGFwZSB0byBwcml2YXRlIEFQSSB0b29cbiAgICAgICAgcHVibGljT3BlcmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3ApXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5lbmNvZGVkS2V5ID0gZW5jb2RlZEtleVxuXG4gICAgICAgIGlmIChkZWxlZ2F0ZWQpIHtcbiAgICAgICAgICAvLyBFbnN1cmUgZW1pdHRlZCBkYXRhIG1ha2VzIHNlbnNlIGluIHRoZSBjb250ZXh0IG9mIHRoaXMgZGJcbiAgICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5ID0gZW5jb2RlZEtleVxuICAgICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcoa2V5Rm9ybWF0KVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljT3BlcmF0aW9uc1tpXSA9IHB1YmxpY09wZXJhdGlvblxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSdyZSBmb3J3YXJkaW5nIHRoZSBzdWJsZXZlbCBvcHRpb24gdGhlbiBkb24ndCBwcmVmaXggdGhlIGtleSB5ZXRcbiAgICAgIG9wLmtleSA9IHNpYmxpbmdzID8gZW5jb2RlZEtleSA6IHRoaXMucHJlZml4S2V5KGVuY29kZWRLZXksIGtleUZvcm1hdCwgdHJ1ZSlcbiAgICAgIG9wLmtleUVuY29kaW5nID0ga2V5Rm9ybWF0XG5cbiAgICAgIGlmIChpc1B1dCkge1xuICAgICAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gb3AudmFsdWVFbmNvZGluZ1xuICAgICAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSB2YWx1ZUVuY29kaW5nLmVuY29kZShvcC52YWx1ZSlcbiAgICAgICAgY29uc3QgdmFsdWVGb3JtYXQgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgICAgIG9wLnZhbHVlID0gZW5jb2RlZFZhbHVlXG4gICAgICAgIG9wLnZhbHVlRW5jb2RpbmcgPSB2YWx1ZUZvcm1hdFxuXG4gICAgICAgIGlmIChlbmFibGVXcml0ZUV2ZW50ICYmICFzaWJsaW5ncykge1xuICAgICAgICAgIHB1YmxpY09wZXJhdGlvbi5lbmNvZGVkVmFsdWUgPSBlbmNvZGVkVmFsdWVcblxuICAgICAgICAgIGlmIChkZWxlZ2F0ZWQpIHtcbiAgICAgICAgICAgIHB1YmxpY09wZXJhdGlvbi52YWx1ZSA9IGVuY29kZWRWYWx1ZVxuICAgICAgICAgICAgcHVibGljT3BlcmF0aW9uLnZhbHVlRW5jb2RpbmcgPSB0aGlzLnZhbHVlRW5jb2RpbmcodmFsdWVGb3JtYXQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByaXZhdGVPcGVyYXRpb25zW2ldID0gb3BcbiAgICB9XG5cbiAgICAvLyBUT0RPIChmdXR1cmUpOiBtYXliZSBhZGQgc2VwYXJhdGUgaG9vayB0byBydW4gb24gcHJpdmF0ZSBkYXRhLiBDdXJyZW50bHkgY2FuJ3Qgd29ya1xuICAgIC8vIGJlY2F1c2UgcHJlZml4aW5nIGhhcHBlbnMgdG9vIHNvb247IHdlIG5lZWQgdG8gbW92ZSB0aGF0IGxvZ2ljIHRvIHRoZSBwcml2YXRlXG4gICAgLy8gQVBJIG9mIEFic3RyYWN0U3VibGV2ZWwgKG9yIHJlaW1wbGVtZW50IHdpdGggaG9va3MpLiBUQkQgaG93IGl0J2Qgd29yayBpbiBjaGFpbmVkXG4gICAgLy8gYmF0Y2guIEhvb2sgd291bGQgbG9vayBzb21ldGhpbmcgbGlrZSBob29rcy5taWR3cml0ZS5ydW4ocHJpdmF0ZU9wZXJhdGlvbnMsIC4uLikuXG5cbiAgICBhd2FpdCB0aGlzLl9iYXRjaChwcml2YXRlT3BlcmF0aW9ucywgb3B0aW9ucylcblxuICAgIGlmIChlbmFibGVXcml0ZUV2ZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ3dyaXRlJywgcHVibGljT3BlcmF0aW9ucylcbiAgICB9IGVsc2UgaWYgKCFlbmFibGVQcmV3cml0ZUhvb2spIHtcbiAgICAgIC8vIFRPRE8gKHNlbXZlci1tYWpvcik6IHJlbW92ZVxuICAgICAgdGhpcy5lbWl0KCdiYXRjaCcsIG9wZXJhdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2JhdGNoIChvcGVyYXRpb25zLCBvcHRpb25zKSB7fVxuXG4gIHN1YmxldmVsIChuYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeG9wdHMgPSBBYnN0cmFjdFN1YmxldmVsLmRlZmF1bHRzKG9wdGlvbnMpXG4gICAgY29uc3Qgc3VibGV2ZWwgPSB0aGlzLl9zdWJsZXZlbChuYW1lLCB4b3B0cylcblxuICAgIGlmICghdGhpcy5ob29rcy5uZXdzdWIubm9vcCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5ob29rcy5uZXdzdWIucnVuKHN1YmxldmVsLCB4b3B0cylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ1RoZSBuZXdzdWIgaG9vayBmYWlsZWQgb24gc3VibGV2ZWwoKScsIHtcbiAgICAgICAgICBjb2RlOiAnTEVWRUxfSE9PS19FUlJPUicsXG4gICAgICAgICAgY2F1c2U6IGVyclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJsZXZlbFxuICB9XG5cbiAgX3N1YmxldmVsIChuYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBBYnN0cmFjdFN1YmxldmVsKHRoaXMsIG5hbWUsIG9wdGlvbnMpXG4gIH1cblxuICBwcmVmaXhLZXkgKGtleSwga2V5Rm9ybWF0LCBsb2NhbCkge1xuICAgIHJldHVybiBrZXlcbiAgfVxuXG4gIGFzeW5jIGNsZWFyIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgdGhpc1trRGVmYXVsdE9wdGlvbnNdLmVtcHR5KVxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmZXJBc3luYygoKSA9PiB0aGlzLmNsZWFyKG9wdGlvbnMpKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcblxuICAgIGNvbnN0IG9yaWdpbmFsID0gb3B0aW9uc1xuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nKVxuXG4gICAgb3B0aW9ucyA9IHJhbmdlT3B0aW9ucyhvcHRpb25zLCBrZXlFbmNvZGluZylcbiAgICBvcHRpb25zLmtleUVuY29kaW5nID0ga2V5RW5jb2RpbmcuZm9ybWF0XG5cbiAgICBpZiAob3B0aW9ucy5saW1pdCAhPT0gMCkge1xuICAgICAgYXdhaXQgdGhpcy5fY2xlYXIob3B0aW9ucylcbiAgICAgIHRoaXMuZW1pdCgnY2xlYXInLCBvcmlnaW5hbClcbiAgICB9XG4gIH1cblxuICBhc3luYyBfY2xlYXIgKG9wdGlvbnMpIHt9XG5cbiAgaXRlcmF0b3IgKG9wdGlvbnMpIHtcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucyAmJiBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzLnZhbHVlRW5jb2Rpbmcob3B0aW9ucyAmJiBvcHRpb25zLnZhbHVlRW5jb2RpbmcpXG5cbiAgICBvcHRpb25zID0gcmFuZ2VPcHRpb25zKG9wdGlvbnMsIGtleUVuY29kaW5nKVxuICAgIG9wdGlvbnMua2V5cyA9IG9wdGlvbnMua2V5cyAhPT0gZmFsc2VcbiAgICBvcHRpb25zLnZhbHVlcyA9IG9wdGlvbnMudmFsdWVzICE9PSBmYWxzZVxuXG4gICAgLy8gV2UgbmVlZCB0aGUgb3JpZ2luYWwgZW5jb2Rpbmcgb3B0aW9ucyBpbiBBYnN0cmFjdEl0ZXJhdG9yIGluIG9yZGVyIHRvIGRlY29kZSBkYXRhXG4gICAgb3B0aW9uc1tBYnN0cmFjdEl0ZXJhdG9yLmtleUVuY29kaW5nXSA9IGtleUVuY29kaW5nXG4gICAgb3B0aW9uc1tBYnN0cmFjdEl0ZXJhdG9yLnZhbHVlRW5jb2RpbmddID0gdmFsdWVFbmNvZGluZ1xuXG4gICAgLy8gRm9yd2FyZCBlbmNvZGluZyBvcHRpb25zIHRvIHByaXZhdGUgQVBJXG4gICAgb3B0aW9ucy5rZXlFbmNvZGluZyA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIG9wdGlvbnMudmFsdWVFbmNvZGluZyA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IERlZmVycmVkSXRlcmF0b3IodGhpcywgb3B0aW9ucylcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG4gICAgcmV0dXJuIHRoaXMuX2l0ZXJhdG9yKG9wdGlvbnMpXG4gIH1cblxuICBfaXRlcmF0b3IgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEFic3RyYWN0SXRlcmF0b3IodGhpcywgb3B0aW9ucylcbiAgfVxuXG4gIGtleXMgKG9wdGlvbnMpIHtcbiAgICAvLyBBbHNvIGluY2x1ZGUgdmFsdWVFbmNvZGluZyAodGhvdWdoIHVudXNlZCkgYmVjYXVzZSB3ZSBtYXkgZmFsbGJhY2sgdG8gX2l0ZXJhdG9yKClcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucyAmJiBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzLnZhbHVlRW5jb2Rpbmcob3B0aW9ucyAmJiBvcHRpb25zLnZhbHVlRW5jb2RpbmcpXG5cbiAgICBvcHRpb25zID0gcmFuZ2VPcHRpb25zKG9wdGlvbnMsIGtleUVuY29kaW5nKVxuXG4gICAgLy8gV2UgbmVlZCB0aGUgb3JpZ2luYWwgZW5jb2Rpbmcgb3B0aW9ucyBpbiBBYnN0cmFjdEtleUl0ZXJhdG9yIGluIG9yZGVyIHRvIGRlY29kZSBkYXRhXG4gICAgb3B0aW9uc1tBYnN0cmFjdEl0ZXJhdG9yLmtleUVuY29kaW5nXSA9IGtleUVuY29kaW5nXG4gICAgb3B0aW9uc1tBYnN0cmFjdEl0ZXJhdG9yLnZhbHVlRW5jb2RpbmddID0gdmFsdWVFbmNvZGluZ1xuXG4gICAgLy8gRm9yd2FyZCBlbmNvZGluZyBvcHRpb25zIHRvIHByaXZhdGUgQVBJXG4gICAgb3B0aW9ucy5rZXlFbmNvZGluZyA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIG9wdGlvbnMudmFsdWVFbmNvZGluZyA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IERlZmVycmVkS2V5SXRlcmF0b3IodGhpcywgb3B0aW9ucylcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG4gICAgcmV0dXJuIHRoaXMuX2tleXMob3B0aW9ucylcbiAgfVxuXG4gIF9rZXlzIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0S2V5SXRlcmF0b3IodGhpcywgb3B0aW9ucylcbiAgfVxuXG4gIHZhbHVlcyAob3B0aW9ucykge1xuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zICYmIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXMudmFsdWVFbmNvZGluZyhvcHRpb25zICYmIG9wdGlvbnMudmFsdWVFbmNvZGluZylcblxuICAgIG9wdGlvbnMgPSByYW5nZU9wdGlvbnMob3B0aW9ucywga2V5RW5jb2RpbmcpXG5cbiAgICAvLyBXZSBuZWVkIHRoZSBvcmlnaW5hbCBlbmNvZGluZyBvcHRpb25zIGluIEFic3RyYWN0VmFsdWVJdGVyYXRvciBpbiBvcmRlciB0byBkZWNvZGUgZGF0YVxuICAgIG9wdGlvbnNbQWJzdHJhY3RJdGVyYXRvci5rZXlFbmNvZGluZ10gPSBrZXlFbmNvZGluZ1xuICAgIG9wdGlvbnNbQWJzdHJhY3RJdGVyYXRvci52YWx1ZUVuY29kaW5nXSA9IHZhbHVlRW5jb2RpbmdcblxuICAgIC8vIEZvcndhcmQgZW5jb2Rpbmcgb3B0aW9ucyB0byBwcml2YXRlIEFQSVxuICAgIG9wdGlvbnMua2V5RW5jb2RpbmcgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBvcHRpb25zLnZhbHVlRW5jb2RpbmcgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBEZWZlcnJlZFZhbHVlSXRlcmF0b3IodGhpcywgb3B0aW9ucylcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcyhvcHRpb25zKVxuICB9XG5cbiAgX3ZhbHVlcyAob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRGVmYXVsdFZhbHVlSXRlcmF0b3IodGhpcywgb3B0aW9ucylcbiAgfVxuXG4gIGRlZmVyIChmbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIHRoaXNba1F1ZXVlXS5hZGQoZnVuY3Rpb24gKGFib3J0RXJyb3IpIHtcbiAgICAgIGlmICghYWJvcnRFcnJvcikgZm4oKVxuICAgIH0sIG9wdGlvbnMpXG4gIH1cblxuICBkZWZlckFzeW5jIChmbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzW2tRdWV1ZV0uYWRkKGZ1bmN0aW9uIChhYm9ydEVycm9yKSB7XG4gICAgICAgIGlmIChhYm9ydEVycm9yKSByZWplY3QoYWJvcnRFcnJvcilcbiAgICAgICAgZWxzZSBmbigpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgfSwgb3B0aW9ucylcbiAgICB9KVxuICB9XG5cbiAgLy8gVE9ETzogZG9jcyBhbmQgdHlwZXNcbiAgYXR0YWNoUmVzb3VyY2UgKHJlc291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiByZXNvdXJjZSAhPT0gJ29iamVjdCcgfHwgcmVzb3VyY2UgPT09IG51bGwgfHxcbiAgICAgIHR5cGVvZiByZXNvdXJjZS5jbG9zZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSByZXNvdXJjZSBvYmplY3QnKVxuICAgIH1cblxuICAgIHRoaXNba1Jlc291cmNlc10uYWRkKHJlc291cmNlKVxuICB9XG5cbiAgLy8gVE9ETzogZG9jcyBhbmQgdHlwZXNcbiAgZGV0YWNoUmVzb3VyY2UgKHJlc291cmNlKSB7XG4gICAgdGhpc1trUmVzb3VyY2VzXS5kZWxldGUocmVzb3VyY2UpXG4gIH1cblxuICBfY2hhaW5lZEJhdGNoICgpIHtcbiAgICByZXR1cm4gbmV3IERlZmF1bHRDaGFpbmVkQmF0Y2godGhpcylcbiAgfVxuXG4gIF9jaGVja0tleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCBrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBNb2R1bGVFcnJvcignS2V5IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0lOVkFMSURfS0VZJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfY2hlY2tWYWx1ZSAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBNb2R1bGVFcnJvcignVmFsdWUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJywge1xuICAgICAgICBjb2RlOiAnTEVWRUxfSU5WQUxJRF9WQUxVRSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHsgQWJzdHJhY3RTdWJsZXZlbCB9ID0gcmVxdWlyZSgnLi9saWIvYWJzdHJhY3Qtc3VibGV2ZWwnKSh7IEFic3RyYWN0TGV2ZWwgfSlcblxuZXhwb3J0cy5BYnN0cmFjdExldmVsID0gQWJzdHJhY3RMZXZlbFxuZXhwb3J0cy5BYnN0cmFjdFN1YmxldmVsID0gQWJzdHJhY3RTdWJsZXZlbFxuXG5jb25zdCBhc3NlcnRPcGVuID0gZnVuY3Rpb24gKGRiKSB7XG4gIGlmIChkYltrU3RhdHVzXSAhPT0gJ29wZW4nKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdEYXRhYmFzZSBpcyBub3Qgb3BlbicsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9EQVRBQkFTRV9OT1RfT1BFTidcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGFzc2VydFVubG9ja2VkID0gZnVuY3Rpb24gKGRiKSB7XG4gIGlmIChkYltrU3RhdHVzTG9ja2VkXSkge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignRGF0YWJhc2Ugc3RhdHVzIGlzIGxvY2tlZCcsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9TVEFUVVNfTE9DS0VEJ1xuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgZm9ybWF0cyA9IGZ1bmN0aW9uIChkYikge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGIuc3VwcG9ydHMuZW5jb2RpbmdzKVxuICAgIC5maWx0ZXIoayA9PiAhIWRiLnN1cHBvcnRzLmVuY29kaW5nc1trXSlcbn1cblxuY29uc3QgY2xvc2VSZXNvdXJjZSA9IGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICByZXR1cm4gcmVzb3VyY2UuY2xvc2UoKVxufVxuXG4vLyBFbnN1cmUgdGhhdCB3ZSBkb24ndCB3b3JrIHdpdGggZmFsc3kgZXJyIHZhbHVlcywgYmVjYXVzZSBKYXZhU2NyaXB0IHVuZm9ydHVuYXRlbHlcbi8vIGFsbG93cyBQcm9taXNlLnJlamVjdChudWxsKSBhbmQgc2ltaWxhciBwYXR0ZXJucy4gV2hpY2gnZCBicmVhayBgaWYgKGVycilgIGxvZ2ljLlxuY29uc3QgY29udmVydFJlamVjdGlvbiA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgaWYgKHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIHJlYXNvblxuICB9XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyZWFzb24pID09PSAnW29iamVjdCBFcnJvcl0nKSB7XG4gICAgcmV0dXJuIHJlYXNvblxuICB9XG5cbiAgY29uc3QgaGludCA9IHJlYXNvbiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZWFzb25cbiAgY29uc3QgbXNnID0gYFByb21pc2UgcmVqZWN0aW9uIHJlYXNvbiBtdXN0IGJlIGFuIEVycm9yLCByZWNlaXZlZCAke2hpbnR9YFxuXG4gIHJldHVybiBuZXcgVHlwZUVycm9yKG1zZylcbn1cblxuLy8gSW50ZXJuYWwgdXRpbGl0aWVzLCBub3QgdHlwZWQgb3IgZXhwb3J0ZWRcbmNsYXNzIE5vdE9wZW5FcnJvciBleHRlbmRzIE1vZHVsZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKGNhdXNlKSB7XG4gICAgc3VwZXIoJ0RhdGFiYXNlIGZhaWxlZCB0byBvcGVuJywge1xuICAgICAgY29kZTogJ0xFVkVMX0RBVEFCQVNFX05PVF9PUEVOJyxcbiAgICAgIGNhdXNlXG4gICAgfSlcbiAgfVxufVxuXG5jbGFzcyBOb3RDbG9zZWRFcnJvciBleHRlbmRzIE1vZHVsZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKGNhdXNlKSB7XG4gICAgc3VwZXIoJ0RhdGFiYXNlIGZhaWxlZCB0byBjbG9zZScsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9EQVRBQkFTRV9OT1RfQ0xPU0VEJyxcbiAgICAgIGNhdXNlXG4gICAgfSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuQWJzdHJhY3RMZXZlbCA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtbGV2ZWwnKS5BYnN0cmFjdExldmVsXG5leHBvcnRzLkFic3RyYWN0U3VibGV2ZWwgPSByZXF1aXJlKCcuL2Fic3RyYWN0LWxldmVsJykuQWJzdHJhY3RTdWJsZXZlbFxuZXhwb3J0cy5BYnN0cmFjdEl0ZXJhdG9yID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1pdGVyYXRvcicpLkFic3RyYWN0SXRlcmF0b3JcbmV4cG9ydHMuQWJzdHJhY3RLZXlJdGVyYXRvciA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtaXRlcmF0b3InKS5BYnN0cmFjdEtleUl0ZXJhdG9yXG5leHBvcnRzLkFic3RyYWN0VmFsdWVJdGVyYXRvciA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtaXRlcmF0b3InKS5BYnN0cmFjdFZhbHVlSXRlcmF0b3JcbmV4cG9ydHMuQWJzdHJhY3RDaGFpbmVkQmF0Y2ggPSByZXF1aXJlKCcuL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2gnKS5BYnN0cmFjdENoYWluZWRCYXRjaFxuIiwiLyogZ2xvYmFsIElEQktleVJhbmdlICovXG5cbid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUtleVJhbmdlIChvcHRpb25zKSB7XG4gIGNvbnN0IGxvd2VyID0gb3B0aW9ucy5ndGUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZ3RlIDogb3B0aW9ucy5ndCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5ndCA6IHVuZGVmaW5lZFxuICBjb25zdCB1cHBlciA9IG9wdGlvbnMubHRlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmx0ZSA6IG9wdGlvbnMubHQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubHQgOiB1bmRlZmluZWRcbiAgY29uc3QgbG93ZXJFeGNsdXNpdmUgPSBvcHRpb25zLmd0ZSA9PT0gdW5kZWZpbmVkXG4gIGNvbnN0IHVwcGVyRXhjbHVzaXZlID0gb3B0aW9ucy5sdGUgPT09IHVuZGVmaW5lZFxuXG4gIGlmIChsb3dlciAhPT0gdW5kZWZpbmVkICYmIHVwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gSURCS2V5UmFuZ2UuYm91bmQobG93ZXIsIHVwcGVyLCBsb3dlckV4Y2x1c2l2ZSwgdXBwZXJFeGNsdXNpdmUpXG4gIH0gZWxzZSBpZiAobG93ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGxvd2VyLCBsb3dlckV4Y2x1c2l2ZSlcbiAgfSBlbHNlIGlmICh1cHBlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIElEQktleVJhbmdlLnVwcGVyQm91bmQodXBwZXIsIHVwcGVyRXhjbHVzaXZlKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFVuZGVmaW5lZCBtZWFucyBub3QgZm91bmQgaW4gYm90aCBJbmRleGVkREIgYW5kIEFic3RyYWN0TGV2ZWxcbiAgICByZXR1cm4gZGF0YVxuICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcbiAgfSBlbHNlIHtcbiAgICAvLyBOb24tYmluYXJ5IGRhdGEgc3RvcmVkIHdpdGggYW4gb2xkIHZlcnNpb24gKGxldmVsLWpzIDwgNS4wLjApXG4gICAgcmV0dXJuIHRleHRFbmNvZGVyLmVuY29kZShkYXRhKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBBYnN0cmFjdEl0ZXJhdG9yIH0gPSByZXF1aXJlKCdhYnN0cmFjdC1sZXZlbCcpXG5jb25zdCBjcmVhdGVLZXlSYW5nZSA9IHJlcXVpcmUoJy4vdXRpbC9rZXktcmFuZ2UnKVxuY29uc3QgZGVzZXJpYWxpemUgPSByZXF1aXJlKCcuL3V0aWwvZGVzZXJpYWxpemUnKVxuXG5jb25zdCBrQ2FjaGUgPSBTeW1ib2woJ2NhY2hlJylcbmNvbnN0IGtGaW5pc2hlZCA9IFN5bWJvbCgnZmluaXNoZWQnKVxuY29uc3Qga09wdGlvbnMgPSBTeW1ib2woJ29wdGlvbnMnKVxuY29uc3Qga0N1cnJlbnRPcHRpb25zID0gU3ltYm9sKCdjdXJyZW50T3B0aW9ucycpXG5jb25zdCBrUG9zaXRpb24gPSBTeW1ib2woJ3Bvc2l0aW9uJylcbmNvbnN0IGtMb2NhdGlvbiA9IFN5bWJvbCgnbG9jYXRpb24nKVxuY29uc3Qga0ZpcnN0ID0gU3ltYm9sKCdmaXJzdCcpXG5jb25zdCBlbXB0eU9wdGlvbnMgPSB7fVxuXG5jbGFzcyBJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0SXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIGxvY2F0aW9uLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tDYWNoZV0gPSBbXVxuICAgIHRoaXNba0ZpbmlzaGVkXSA9IHRoaXMubGltaXQgPT09IDBcbiAgICB0aGlzW2tPcHRpb25zXSA9IG9wdGlvbnNcbiAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10gPSB7IC4uLm9wdGlvbnMgfVxuICAgIHRoaXNba1Bvc2l0aW9uXSA9IHVuZGVmaW5lZFxuICAgIHRoaXNba0xvY2F0aW9uXSA9IGxvY2F0aW9uXG4gICAgdGhpc1trRmlyc3RdID0gdHJ1ZVxuICB9XG5cbiAgLy8gTm90ZTogaWYgY2FsbGVkIGJ5IF9hbGwoKSB0aGVuIHNpemUgY2FuIGJlIEluZmluaXR5LiBUaGlzIGlzIGFuIGludGVybmFsXG4gIC8vIGRldGFpbDsgYnkgZGVzaWduIEFic3RyYWN0SXRlcmF0b3IubmV4dHYoKSBkb2VzIG5vdCBzdXBwb3J0IEluZmluaXR5LlxuICBhc3luYyBfbmV4dHYgKHNpemUsIG9wdGlvbnMpIHtcbiAgICB0aGlzW2tGaXJzdF0gPSBmYWxzZVxuXG4gICAgaWYgKHRoaXNba0ZpbmlzaGVkXSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgaWYgKHRoaXNba0NhY2hlXS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBUT0RPOiBtaXhpbmcgbmV4dCBhbmQgbmV4dHYgaXMgbm90IGNvdmVyZWQgYnkgdGVzdCBzdWl0ZVxuICAgICAgc2l6ZSA9IE1hdGgubWluKHNpemUsIHRoaXNba0NhY2hlXS5sZW5ndGgpXG4gICAgICByZXR1cm4gdGhpc1trQ2FjaGVdLnNwbGljZSgwLCBzaXplKVxuICAgIH1cblxuICAgIC8vIEFkanVzdCByYW5nZSBieSB3aGF0IHdlIGFscmVhZHkgdmlzaXRlZFxuICAgIGlmICh0aGlzW2tQb3NpdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXNba09wdGlvbnNdLnJldmVyc2UpIHtcbiAgICAgICAgdGhpc1trQ3VycmVudE9wdGlvbnNdLmx0ID0gdGhpc1trUG9zaXRpb25dXG4gICAgICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXS5sdGUgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXS5ndCA9IHRoaXNba1Bvc2l0aW9uXVxuICAgICAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10uZ3RlID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGtleVJhbmdlXG5cbiAgICB0cnkge1xuICAgICAga2V5UmFuZ2UgPSBjcmVhdGVLZXlSYW5nZSh0aGlzW2tDdXJyZW50T3B0aW9uc10pXG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gVGhlIGxvd2VyIGtleSBpcyBncmVhdGVyIHRoYW4gdGhlIHVwcGVyIGtleS5cbiAgICAgIC8vIEluZGV4ZWREQiB0aHJvd3MgYW4gZXJyb3IsIGJ1dCB3ZSdsbCBqdXN0IHJldHVybiAwIHJlc3VsdHMuXG4gICAgICB0aGlzW2tGaW5pc2hlZF0gPSB0cnVlXG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIuZGIudHJhbnNhY3Rpb24oW3RoaXNba0xvY2F0aW9uXV0sICdyZWFkb25seScpXG4gICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzW2tMb2NhdGlvbl0pXG4gICAgY29uc3QgZW50cmllcyA9IFtdXG5cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gSWYgYW4gZXJyb3Igb2NjdXJzIChvbiB0aGUgcmVxdWVzdCksIHRoZSB0cmFuc2FjdGlvbiB3aWxsIGFib3J0LlxuICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yIHx8IG5ldyBFcnJvcignYWJvcnRlZCBieSB1c2VyJykpXG4gICAgICB9XG5cbiAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZW50cmllcylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzW2tPcHRpb25zXS5yZXZlcnNlKSB7XG4gICAgICBsZXQga2V5c1xuICAgICAgbGV0IHZhbHVlc1xuXG4gICAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgLy8gV2FpdCBmb3IgYm90aCByZXF1ZXN0cyB0byBjb21wbGV0ZVxuICAgICAgICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlcyA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblxuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChrZXlzLmxlbmd0aCwgdmFsdWVzLmxlbmd0aClcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAwIHx8IHNpemUgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgdGhpc1trRmluaXNoZWRdID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNba1Bvc2l0aW9uXSA9IGtleXNbbGVuZ3RoIC0gMV1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2l6ZVxuICAgICAgICBlbnRyaWVzLmxlbmd0aCA9IGxlbmd0aFxuXG4gICAgICAgIC8vIE1lcmdlIGtleXMgYW5kIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2ldXG5cbiAgICAgICAgICBlbnRyaWVzW2ldID0gW1xuICAgICAgICAgICAgdGhpc1trT3B0aW9uc10ua2V5cyA/IGRlc2VyaWFsaXplKGtleSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0aGlzW2tPcHRpb25zXS52YWx1ZXMgPyBkZXNlcmlhbGl6ZSh2YWx1ZSkgOiB1bmRlZmluZWRcbiAgICAgICAgICBdXG4gICAgICAgIH1cblxuICAgICAgICBtYXliZUNvbW1pdCh0cmFuc2FjdGlvbilcbiAgICAgIH1cblxuICAgICAgLy8gSWYga2V5cyB3ZXJlIG5vdCByZXF1ZXN0ZWQgYW5kIHNpemUgaXMgSW5maW5pdHksIHdlIGRvbid0IGhhdmUgdG8ga2VlcFxuICAgICAgLy8gdHJhY2sgb2YgcG9zaXRpb24gYW5kIGNhbiB0aHVzIHNraXAgZ2V0dGluZyBrZXlzLlxuICAgICAgaWYgKHRoaXNba09wdGlvbnNdLmtleXMgfHwgc2l6ZSA8IEluZmluaXR5KSB7XG4gICAgICAgIHN0b3JlLmdldEFsbEtleXMoa2V5UmFuZ2UsIHNpemUgPCBJbmZpbml0eSA/IHNpemUgOiB1bmRlZmluZWQpLm9uc3VjY2VzcyA9IChldikgPT4ge1xuICAgICAgICAgIGtleXMgPSBldi50YXJnZXQucmVzdWx0XG4gICAgICAgICAgY29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gW11cbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpc1trT3B0aW9uc10udmFsdWVzKSB7XG4gICAgICAgIHN0b3JlLmdldEFsbChrZXlSYW5nZSwgc2l6ZSA8IEluZmluaXR5ID8gc2l6ZSA6IHVuZGVmaW5lZCkub25zdWNjZXNzID0gKGV2KSA9PiB7XG4gICAgICAgICAgdmFsdWVzID0gZXYudGFyZ2V0LnJlc3VsdFxuICAgICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzID0gW11cbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYW4ndCB1c2UgZ2V0QWxsKCkgaW4gcmV2ZXJzZSwgc28gdXNlIGEgc2xvd2VyIGN1cnNvciB0aGF0IHlpZWxkcyBvbmUgaXRlbSBhdCBhIHRpbWVcbiAgICAgIC8vIFRPRE86IHRlc3QgaWYgYWxsIHRhcmdldCBicm93c2VycyBzdXBwb3J0IG9wZW5LZXlDdXJzb3JcbiAgICAgIGNvbnN0IG1ldGhvZCA9ICF0aGlzW2tPcHRpb25zXS52YWx1ZXMgJiYgc3RvcmUub3BlbktleUN1cnNvciA/ICdvcGVuS2V5Q3Vyc29yJyA6ICdvcGVuQ3Vyc29yJ1xuXG4gICAgICBzdG9yZVttZXRob2RdKGtleVJhbmdlLCAncHJldicpLm9uc3VjY2VzcyA9IChldikgPT4ge1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBldi50YXJnZXQucmVzdWx0XG5cbiAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gY3Vyc29yXG4gICAgICAgICAgdGhpc1trUG9zaXRpb25dID0ga2V5XG5cbiAgICAgICAgICBlbnRyaWVzLnB1c2goW1xuICAgICAgICAgICAgdGhpc1trT3B0aW9uc10ua2V5cyAmJiBrZXkgIT09IHVuZGVmaW5lZCA/IGRlc2VyaWFsaXplKGtleSkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0aGlzW2tPcHRpb25zXS52YWx1ZXMgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlc2VyaWFsaXplKHZhbHVlKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIF0pXG5cbiAgICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPCBzaXplKSB7XG4gICAgICAgICAgICBjdXJzb3IuY29udGludWUoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXliZUNvbW1pdCh0cmFuc2FjdGlvbilcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1trRmluaXNoZWRdID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGFzeW5jIF9uZXh0ICgpIHtcbiAgICBpZiAodGhpc1trQ2FjaGVdLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzW2tDYWNoZV0uc2hpZnQoKVxuICAgIH1cblxuICAgIGlmICghdGhpc1trRmluaXNoZWRdKSB7XG4gICAgICBsZXQgc2l6ZSA9IE1hdGgubWluKDEwMCwgdGhpcy5saW1pdCAtIHRoaXMuY291bnQpXG5cbiAgICAgIGlmICh0aGlzW2tGaXJzdF0pIHtcbiAgICAgICAgLy8gSXQncyBjb21tb24gdG8gb25seSB3YW50IG9uZSBlbnRyeSBpbml0aWFsbHkgb3IgYWZ0ZXIgYSBzZWVrKClcbiAgICAgICAgdGhpc1trRmlyc3RdID0gZmFsc2VcbiAgICAgICAgc2l6ZSA9IDFcbiAgICAgIH1cblxuICAgICAgdGhpc1trQ2FjaGVdID0gYXdhaXQgdGhpcy5fbmV4dHYoc2l6ZSwgZW1wdHlPcHRpb25zKVxuXG4gICAgICAvLyBTaGlmdCByZXR1cm5zIHVuZGVmaW5lZCBpZiBlbXB0eSwgd2hpY2ggaXMgd2hhdCB3ZSB3YW50XG4gICAgICByZXR1cm4gdGhpc1trQ2FjaGVdLnNoaWZ0KClcbiAgICB9XG4gIH1cblxuICBhc3luYyBfYWxsIChvcHRpb25zKSB7XG4gICAgdGhpc1trRmlyc3RdID0gZmFsc2VcblxuICAgIC8vIFRPRE86IG1peGluZyBuZXh0IGFuZCBhbGwgaXMgbm90IGNvdmVyZWQgYnkgdGVzdCBzdWl0ZVxuICAgIGNvbnN0IGNhY2hlID0gdGhpc1trQ2FjaGVdLnNwbGljZSgwLCB0aGlzW2tDYWNoZV0ubGVuZ3RoKVxuICAgIGNvbnN0IHNpemUgPSB0aGlzLmxpbWl0IC0gdGhpcy5jb3VudCAtIGNhY2hlLmxlbmd0aFxuXG4gICAgaWYgKHNpemUgPD0gMCkge1xuICAgICAgcmV0dXJuIGNhY2hlXG4gICAgfVxuXG4gICAgbGV0IGVudHJpZXMgPSBhd2FpdCB0aGlzLl9uZXh0dihzaXplLCBlbXB0eU9wdGlvbnMpXG4gICAgaWYgKGNhY2hlLmxlbmd0aCA+IDApIGVudHJpZXMgPSBjYWNoZS5jb25jYXQoZW50cmllcylcblxuICAgIHJldHVybiBlbnRyaWVzXG4gIH1cblxuICBfc2VlayAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdGhpc1trRmlyc3RdID0gdHJ1ZVxuICAgIHRoaXNba0NhY2hlXSA9IFtdXG4gICAgdGhpc1trRmluaXNoZWRdID0gZmFsc2VcbiAgICB0aGlzW2tQb3NpdGlvbl0gPSB1bmRlZmluZWRcblxuICAgIC8vIFRPRE86IG5vdCBjb3ZlcmVkIGJ5IHRlc3Qgc3VpdGVcbiAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10gPSB7IC4uLnRoaXNba09wdGlvbnNdIH1cblxuICAgIGxldCBrZXlSYW5nZVxuXG4gICAgdHJ5IHtcbiAgICAgIGtleVJhbmdlID0gY3JlYXRlS2V5UmFuZ2UodGhpc1trT3B0aW9uc10pXG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgdGhpc1trRmluaXNoZWRdID0gdHJ1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGtleVJhbmdlICE9PSBudWxsICYmICFrZXlSYW5nZS5pbmNsdWRlcyh0YXJnZXQpKSB7XG4gICAgICB0aGlzW2tGaW5pc2hlZF0gPSB0cnVlXG4gICAgfSBlbHNlIGlmICh0aGlzW2tPcHRpb25zXS5yZXZlcnNlKSB7XG4gICAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10ubHRlID0gdGFyZ2V0XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXS5ndGUgPSB0YXJnZXRcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5JdGVyYXRvciA9IEl0ZXJhdG9yXG5cbmZ1bmN0aW9uIG1heWJlQ29tbWl0ICh0cmFuc2FjdGlvbikge1xuICAvLyBDb21taXQgKG1lYW5pbmcgY2xvc2UpIG5vdyBpbnN0ZWFkIG9mIHdhaXRpbmcgZm9yIGF1dG8tY29tbWl0XG4gIGlmICh0eXBlb2YgdHJhbnNhY3Rpb24uY29tbWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJhbnNhY3Rpb24uY29tbWl0KClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgZnVuY3Rpb24gY2xlYXIgKGRiLCBsb2NhdGlvbiwga2V5UmFuZ2UsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMubGltaXQgPT09IDApIHJldHVyblxuXG4gIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIuZGIudHJhbnNhY3Rpb24oW2xvY2F0aW9uXSwgJ3JlYWR3cml0ZScpXG4gIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUobG9jYXRpb24pXG5cbiAgbGV0IGNvdW50ID0gMFxuXG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IHJlc29sdmVcblxuICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZWplY3QodHJhbnNhY3Rpb24uZXJyb3IgfHwgbmV3IEVycm9yKCdhYm9ydGVkIGJ5IHVzZXInKSlcbiAgICB9XG4gIH0pXG5cbiAgLy8gQSBrZXkgY3Vyc29yIGlzIGZhc3RlciAoc2tpcHMgcmVhZGluZyB2YWx1ZXMpIGJ1dCBub3Qgc3VwcG9ydGVkIGJ5IElFXG4gIC8vIFRPRE86IHdlIG5vIGxvbmdlciBzdXBwb3J0IElFLiBUZXN0IG90aGVyc1xuICBjb25zdCBtZXRob2QgPSBzdG9yZS5vcGVuS2V5Q3Vyc29yID8gJ29wZW5LZXlDdXJzb3InIDogJ29wZW5DdXJzb3InXG4gIGNvbnN0IGRpcmVjdGlvbiA9IG9wdGlvbnMucmV2ZXJzZSA/ICdwcmV2JyA6ICduZXh0J1xuXG4gIHN0b3JlW21ldGhvZF0oa2V5UmFuZ2UsIGRpcmVjdGlvbikub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgY29uc3QgY3Vyc29yID0gZXYudGFyZ2V0LnJlc3VsdFxuXG4gICAgaWYgKGN1cnNvcikge1xuICAgICAgLy8gV2FpdCBmb3IgYSByZXF1ZXN0IHRvIGNvbXBsZXRlIGJlZm9yZSBjb250aW51aW5nLCBzYXZpbmcgQ1BVLlxuICAgICAgc3RvcmUuZGVsZXRlKGN1cnNvci5rZXkpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubGltaXQgPD0gMCB8fCArK2NvdW50IDwgb3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZVxufVxuIiwiLyogZ2xvYmFsIGluZGV4ZWREQiAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgeyBBYnN0cmFjdExldmVsIH0gPSByZXF1aXJlKCdhYnN0cmFjdC1sZXZlbCcpXG5jb25zdCB7IEl0ZXJhdG9yIH0gPSByZXF1aXJlKCcuL2l0ZXJhdG9yJylcbmNvbnN0IGRlc2VyaWFsaXplID0gcmVxdWlyZSgnLi91dGlsL2Rlc2VyaWFsaXplJylcbmNvbnN0IGNsZWFyID0gcmVxdWlyZSgnLi91dGlsL2NsZWFyJylcbmNvbnN0IGNyZWF0ZUtleVJhbmdlID0gcmVxdWlyZSgnLi91dGlsL2tleS1yYW5nZScpXG5cbi8vIEtlZXAgYXMtaXMgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBleGlzdGluZyBsZXZlbC1qcyBkYXRhYmFzZXNcbmNvbnN0IERFRkFVTFRfUFJFRklYID0gJ2xldmVsLWpzLSdcblxuY29uc3Qga0lEQiA9IFN5bWJvbCgnaWRiJylcbmNvbnN0IGtOYW1lUHJlZml4ID0gU3ltYm9sKCduYW1lUHJlZml4JylcbmNvbnN0IGtMb2NhdGlvbiA9IFN5bWJvbCgnbG9jYXRpb24nKVxuY29uc3Qga1ZlcnNpb24gPSBTeW1ib2woJ3ZlcnNpb24nKVxuY29uc3Qga1N0b3JlID0gU3ltYm9sKCdzdG9yZScpXG5jb25zdCBrT25Db21wbGV0ZSA9IFN5bWJvbCgnb25Db21wbGV0ZScpXG5cbmNsYXNzIEJyb3dzZXJMZXZlbCBleHRlbmRzIEFic3RyYWN0TGV2ZWwge1xuICBjb25zdHJ1Y3RvciAobG9jYXRpb24sIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHByZWZpeCwgdmVyc2lvbiwgLi4uZm9yd2FyZCB9ID0gb3B0aW9ucyB8fCB7fVxuXG4gICAgc3VwZXIoe1xuICAgICAgZW5jb2RpbmdzOiB7IHZpZXc6IHRydWUgfSxcbiAgICAgIHNuYXBzaG90czogZmFsc2UsXG4gICAgICBjcmVhdGVJZk1pc3Npbmc6IGZhbHNlLFxuICAgICAgZXJyb3JJZkV4aXN0czogZmFsc2UsXG4gICAgICBzZWVrOiB0cnVlXG4gICAgfSwgZm9yd2FyZClcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICdzdHJpbmcnIHx8IGxvY2F0aW9uID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCAnbG9jYXRpb24nIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpXG4gICAgfVxuXG4gICAgLy8gVE9ETyAobmV4dCBtYWpvcik6IHJlbW92ZSBkZWZhdWx0IHByZWZpeFxuICAgIHRoaXNba0xvY2F0aW9uXSA9IGxvY2F0aW9uXG4gICAgdGhpc1trTmFtZVByZWZpeF0gPSBwcmVmaXggPT0gbnVsbCA/IERFRkFVTFRfUFJFRklYIDogcHJlZml4XG4gICAgdGhpc1trVmVyc2lvbl0gPSBwYXJzZUludCh2ZXJzaW9uIHx8IDEsIDEwKVxuICAgIHRoaXNba0lEQl0gPSBudWxsXG4gIH1cblxuICBnZXQgbG9jYXRpb24gKCkge1xuICAgIHJldHVybiB0aGlzW2tMb2NhdGlvbl1cbiAgfVxuXG4gIGdldCBuYW1lUHJlZml4ICgpIHtcbiAgICByZXR1cm4gdGhpc1trTmFtZVByZWZpeF1cbiAgfVxuXG4gIGdldCB2ZXJzaW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1trVmVyc2lvbl1cbiAgfVxuXG4gIC8vIEV4cG9zZWQgZm9yIGJhY2t3YXJkcyBjb21wYXQgYW5kIHVuaXQgdGVzdHNcbiAgZ2V0IGRiICgpIHtcbiAgICByZXR1cm4gdGhpc1trSURCXVxuICB9XG5cbiAgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnYnJvd3Nlci1sZXZlbCdcbiAgfVxuXG4gIGFzeW5jIF9vcGVuIChvcHRpb25zKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKHRoaXNba05hbWVQcmVmaXhdICsgdGhpc1trTG9jYXRpb25dLCB0aGlzW2tWZXJzaW9uXSlcblxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2KSA9PiB7XG4gICAgICBjb25zdCBkYiA9IGV2LnRhcmdldC5yZXN1bHRcblxuICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHRoaXNba0xvY2F0aW9uXSkpIHtcbiAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUodGhpc1trTG9jYXRpb25dKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yIHx8IG5ldyBFcnJvcigndW5rbm93biBlcnJvcicpKVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgdGhpc1trSURCXSA9IHJlcXVlc3QucmVzdWx0XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBba1N0b3JlXSAobW9kZSkge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpc1trSURCXS50cmFuc2FjdGlvbihbdGhpc1trTG9jYXRpb25dXSwgbW9kZSlcbiAgICByZXR1cm4gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpc1trTG9jYXRpb25dKVxuICB9XG5cbiAgW2tPbkNvbXBsZXRlXSAocmVxdWVzdCkge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gcmVxdWVzdC50cmFuc2FjdGlvblxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIFRha2UgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoYXQgYSBub24tY2FuY2VsZWQgcmVxdWVzdCBlcnJvciBhYm9ydHNcbiAgICAgIC8vIHRoZSB0cmFuc2FjdGlvbi4gSS5lLiBubyBuZWVkIHRvIGxpc3RlbiBmb3IgXCJyZXF1ZXN0Lm9uZXJyb3JcIi5cbiAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvciB8fCBuZXcgRXJyb3IoJ2Fib3J0ZWQgYnkgdXNlcicpKVxuICAgICAgfVxuXG4gICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBfZ2V0IChrZXksIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXNba1N0b3JlXSgncmVhZG9ubHknKVxuICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5nZXQoa2V5KVxuICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpc1trT25Db21wbGV0ZV0ocmVxdWVzdClcblxuICAgIHJldHVybiBkZXNlcmlhbGl6ZSh2YWx1ZSlcbiAgfVxuXG4gIGFzeW5jIF9nZXRNYW55IChrZXlzLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzW2tTdG9yZV0oJ3JlYWRvbmx5JylcbiAgICBjb25zdCBpdGVyYXRvciA9IGtleXMudmFsdWVzKClcblxuICAgIC8vIENvbnN1bWUgdGhlIGl0ZXJhdG9yIHdpdGggTiBwYXJhbGxlbCB3b3JrZXIgYmVlc1xuICAgIGNvbnN0IG4gPSBNYXRoLm1pbigxNiwga2V5cy5sZW5ndGgpXG4gICAgY29uc3QgYmVlcyA9IG5ldyBBcnJheShuKVxuICAgIGNvbnN0IHZhbHVlcyA9IG5ldyBBcnJheShrZXlzLmxlbmd0aClcblxuICAgIGxldCBrZXlJbmRleCA9IDBcbiAgICBsZXQgYWJvcnQgPSBmYWxzZVxuXG4gICAgY29uc3QgYmVlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgaXRlcmF0b3IpIHtcbiAgICAgICAgICBpZiAoYWJvcnQpIGJyZWFrXG5cbiAgICAgICAgICBjb25zdCB2YWx1ZUluZGV4ID0ga2V5SW5kZXgrK1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5nZXQoa2V5KVxuXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHZhbHVlc1t2YWx1ZUluZGV4XSA9IGRlc2VyaWFsaXplKHJlcXVlc3QucmVzdWx0KVxuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBhYm9ydCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGJlZXNbaV0gPSBiZWUoKVxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChiZWVzKVxuICAgIHJldHVybiB2YWx1ZXNcbiAgfVxuXG4gIGFzeW5jIF9kZWwgKGtleSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpc1trU3RvcmVdKCdyZWFkd3JpdGUnKVxuICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5kZWxldGUoa2V5KVxuXG4gICAgcmV0dXJuIHRoaXNba09uQ29tcGxldGVdKHJlcXVlc3QpXG4gIH1cblxuICBhc3luYyBfcHV0IChrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzW2tTdG9yZV0oJ3JlYWR3cml0ZScpXG5cbiAgICAvLyBXaWxsIHRocm93IGEgRGF0YUVycm9yIG9yIERhdGFDbG9uZUVycm9yIGlmIHRoZSBlbnZpcm9ubWVudFxuICAgIC8vIGRvZXMgbm90IHN1cHBvcnQgc2VyaWFsaXppbmcgdGhlIGtleSBvciB2YWx1ZSByZXNwZWN0aXZlbHkuXG4gICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLnB1dCh2YWx1ZSwga2V5KVxuXG4gICAgcmV0dXJuIHRoaXNba09uQ29tcGxldGVdKHJlcXVlc3QpXG4gIH1cblxuICAvLyBUT0RPOiBpbXBsZW1lbnQga2V5IGFuZCB2YWx1ZSBpdGVyYXRvcnNcbiAgX2l0ZXJhdG9yIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcih0aGlzLCB0aGlzW2tMb2NhdGlvbl0sIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBfYmF0Y2ggKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXNba1N0b3JlXSgncmVhZHdyaXRlJylcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHN0b3JlLnRyYW5zYWN0aW9uXG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBlcnJvclxuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlamVjdChlcnJvciB8fCB0cmFuc2FjdGlvbi5lcnJvciB8fCBuZXcgRXJyb3IoJ2Fib3J0ZWQgYnkgdXNlcicpKVxuICAgICAgfVxuXG4gICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gcmVzb2x2ZVxuICAgIH0pXG5cbiAgICAvLyBXYWl0IGZvciBhIHJlcXVlc3QgdG8gY29tcGxldGUgYmVmb3JlIG1ha2luZyB0aGUgbmV4dCwgc2F2aW5nIENQVS5cbiAgICBmdW5jdGlvbiBsb29wICgpIHtcbiAgICAgIGNvbnN0IG9wID0gb3BlcmF0aW9uc1tpbmRleCsrXVxuICAgICAgY29uc3Qga2V5ID0gb3Aua2V5XG5cbiAgICAgIGxldCByZXFcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxID0gb3AudHlwZSA9PT0gJ2RlbCcgPyBzdG9yZS5kZWxldGUoa2V5KSA6IHN0b3JlLnB1dChvcC52YWx1ZSwga2V5KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yID0gZXJyXG4gICAgICAgIHRyYW5zYWN0aW9uLmFib3J0KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IG9wZXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBsb29wXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmFuc2FjdGlvbi5jb21taXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQ29tbWl0IG5vdyBpbnN0ZWFkIG9mIHdhaXRpbmcgZm9yIGF1dG8tY29tbWl0XG4gICAgICAgIHRyYW5zYWN0aW9uLmNvbW1pdCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9vcCgpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGFzeW5jIF9jbGVhciAob3B0aW9ucykge1xuICAgIGxldCBrZXlSYW5nZVxuXG4gICAgdHJ5IHtcbiAgICAgIGtleVJhbmdlID0gY3JlYXRlS2V5UmFuZ2Uob3B0aW9ucylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUaGUgbG93ZXIga2V5IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdXBwZXIga2V5LlxuICAgICAgLy8gSW5kZXhlZERCIHRocm93cyBhbiBlcnJvciwgYnV0IHdlJ2xsIGp1c3QgZG8gbm90aGluZy5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxpbWl0ID49IDApIHtcbiAgICAgIC8vIElEQk9iamVjdFN0b3JlI2RlbGV0ZShyYW5nZSkgZG9lc24ndCBoYXZlIHN1Y2ggYW4gb3B0aW9uLlxuICAgICAgLy8gRmFsbCBiYWNrIHRvIGN1cnNvci1iYXNlZCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHJldHVybiBjbGVhcih0aGlzLCB0aGlzW2tMb2NhdGlvbl0sIGtleVJhbmdlLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlID0gdGhpc1trU3RvcmVdKCdyZWFkd3JpdGUnKVxuICAgIGNvbnN0IHJlcXVlc3QgPSBrZXlSYW5nZSA/IHN0b3JlLmRlbGV0ZShrZXlSYW5nZSkgOiBzdG9yZS5jbGVhcigpXG5cbiAgICByZXR1cm4gdGhpc1trT25Db21wbGV0ZV0ocmVxdWVzdClcbiAgfVxuXG4gIGFzeW5jIF9jbG9zZSAoKSB7XG4gICAgdGhpc1trSURCXS5jbG9zZSgpXG4gIH1cbn1cblxuQnJvd3NlckxldmVsLmRlc3Ryb3kgPSBhc3luYyBmdW5jdGlvbiAobG9jYXRpb24sIHByZWZpeCkge1xuICBpZiAocHJlZml4ID09IG51bGwpIHtcbiAgICBwcmVmaXggPSBERUZBVUxUX1BSRUZJWFxuICB9XG5cbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShwcmVmaXggKyBsb2NhdGlvbilcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gcmVzb2x2ZVxuICAgIHJlcXVlc3Qub25lcnJvciA9IHJlamVjdFxuICB9KVxufVxuXG5leHBvcnRzLkJyb3dzZXJMZXZlbCA9IEJyb3dzZXJMZXZlbFxuIiwiLyoqXG4gKiBCcm93c2VyLW5hdGl2ZSBGb3JrREIgYWRhcHRlci5cbiAqXG4gKiBJbXBsZW1lbnRzIHRoZSBmb3JrZGIgZGF0YSBtb2RlbCDigJQgY29udGVudC1hZGRyZXNzZWQsIGFwcGVuZC1vbmx5IG5vZGVzXG4gKiB3aXRoIGJhY2t3YXJkIGBwcmV2YCBsaW5rcyBhbmQgaGVhZCB0cmFja2luZyDigJQgb24gdG9wIG9mIGBicm93c2VyLWxldmVsYFxuICogKEluZGV4ZWREQikuICBObyBOb2RlLmpzIHN0cmVhbXMgb3IgQnVmZmVyIHBvbHlmaWxscyByZXF1aXJlZC5cbiAqL1xuaW1wb3J0IHsgQnJvd3NlckxldmVsIH0gZnJvbSAnYnJvd3Nlci1sZXZlbCdcblxuLy8gLS0tLSB0eXBlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YSB7XG4gICAga2V5OnN0cmluZ1xuICAgIHByZXY/OnN0cmluZ1tdXG4gICAgW2s6c3RyaW5nXTp1bmtub3duXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ya0RCRG9jdW1lbnQge1xuICAgIGhhc2g6c3RyaW5nXG4gICAga2V5OnN0cmluZ1xuICAgIHByZXY6c3RyaW5nW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlRW50cnkge1xuICAgIGhhc2g6c3RyaW5nXG4gICAgbWV0YTpNZXRhXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua3NFbnRyeSB7XG4gICAga2V5OnN0cmluZ1xuICAgIGhhc2g6c3RyaW5nXG59XG5cbi8vIC0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBTaW1wbGUgY29udGVudCBoYXNoIChub3QgY3J5cHRvZ3JhcGhpYyDigJMgZmluZSBmb3IgYSBkZW1vKS5cbiAqL1xuZnVuY3Rpb24gY29udGVudEhhc2ggKGlucHV0OnN0cmluZyk6c3RyaW5nIHtcbiAgICBsZXQgaCA9IDB4ODExYzlkYzUgICAvLyBGTlYgb2Zmc2V0IGJhc2lzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBoIF49IGlucHV0LmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaCA9IE1hdGguaW11bChoLCAweDAxMDAwMTkzKSAgLy8gRk5WIHByaW1lXG4gICAgfVxuICAgIHJldHVybiAoaCA+Pj4gMCkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDgsICcwJylcbn1cblxuZnVuY3Rpb24gZ2V0UHJldiAobWV0YTpNZXRhKTpzdHJpbmdbXSB7XG4gICAgaWYgKCFtZXRhLnByZXYpIHJldHVybiBbXVxuICAgIHJldHVybiBtZXRhLnByZXYuZmlsdGVyKEJvb2xlYW4pXG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZpeCAoa2V5OnVua25vd24sIHByZWZpeDpzdHJpbmdbXSk6a2V5IGlzIHN0cmluZ1tdIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgaWYgKGtleS5sZW5ndGggPCBwcmVmaXgubGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa2V5W2ldICE9PSBwcmVmaXhbaV0pIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG4vLyAtLS0tIEJyb3dzZXJGb3JrREIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyRm9ya0RCIHtcbiAgICBwcml2YXRlIGRiOkJyb3dzZXJMZXZlbDx1bmtub3duLCB1bmtub3duPlxuICAgIHByaXZhdGUgX25hbWU6c3RyaW5nXG4gICAgX2lkOnN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IgKG5hbWUgPSAnZm9ya2RiJykge1xuICAgICAgICB0aGlzLmRiID0gbmV3IEJyb3dzZXJMZXZlbChuYW1lLCB7XG4gICAgICAgICAgICBrZXlFbmNvZGluZzogJ2pzb24nLFxuICAgICAgICAgICAgdmFsdWVFbmNvZGluZzogJ2pzb24nLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLl9pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgLyoqIE9wZW4gdGhlIHVuZGVybHlpbmcgSW5kZXhlZERCIHN0b3JlLiAqL1xuICAgIGFzeW5jIG9wZW4gKCk6UHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGIub3BlbigpXG4gICAgfVxuXG4gICAgLyoqIENsb3NlIHRoZSBzdG9yZS4gKi9cbiAgICBhc3luYyBjbG9zZSAoKTpQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kYi5jbG9zZSgpXG4gICAgfVxuXG4gICAgLy8gLS0tLSB3cml0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYSBuZXcgZG9jdW1lbnQuICBSZXR1cm5zIHRoZSBjb250ZW50LWFkZHJlc3NlZCBoYXNoLlxuICAgICAqL1xuICAgIGFzeW5jIHB1dCAobWV0YTpNZXRhLCBib2R5ID0gJycpOlByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBnZXRQcmV2KG1ldGEpXG4gICAgICAgIGNvbnN0IGhhc2hJbnB1dCA9IEpTT04uc3RyaW5naWZ5KHsga2V5OiBtZXRhLmtleSwgcHJldiwgYm9keSB9KVxuICAgICAgICBjb25zdCBoYXNoID0gY29udGVudEhhc2goaGFzaElucHV0KVxuXG4gICAgICAgIGNvbnN0IG9wczpBcnJheTx7IHR5cGU6J3B1dCd8J2RlbCcsIGtleTpzdHJpbmdbXSwgdmFsdWU/OnVua25vd24gfT4gPSBbXVxuXG4gICAgICAgIC8vIE1hcmsga2V5IGFuZCBoYXNoXG4gICAgICAgIG9wcy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleTogWydrZXknLCBtZXRhLmtleV0sIHZhbHVlOiAwIH0pXG4gICAgICAgIG9wcy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleTogWydoYXNoJywgaGFzaF0sIHZhbHVlOiAwIH0pXG5cbiAgICAgICAgLy8gU3RvcmUgbWV0YVxuICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IFsnbWV0YScsIGhhc2hdLCB2YWx1ZTogbWV0YSB9KVxuXG4gICAgICAgIC8vIFN0b3JlIGJvZHkgYmxvYlxuICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IFsnYmxvYicsIGhhc2hdLCB2YWx1ZTogYm9keSB9KVxuXG4gICAgICAgIC8vIFRhaWwgKGlmIG5vIHByZXYpXG4gICAgICAgIGlmIChwcmV2Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgb3BzLnB1c2goeyB0eXBlOiAncHV0Jywga2V5OiBbJ3RhaWwnLCBtZXRhLmtleSwgaGFzaF0sIHZhbHVlOiAwIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWFkIG1hbmFnZW1lbnQg4oCTIHJlbW92ZSBvbGQgaGVhZHMgdGhhdCB0aGlzIGNvbW1pdCBzdXBlcnNlZGVzXG4gICAgICAgIGZvciAoY29uc3QgcGhhc2ggb2YgcHJldikge1xuICAgICAgICAgICAgb3BzLnB1c2goeyB0eXBlOiAnZGVsJywga2V5OiBbJ2hlYWQnLCBtZXRhLmtleSwgcGhhc2hdIH0pXG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3B1dCcsXG4gICAgICAgICAgICAgICAga2V5OiBbJ2xpbmsnLCBwaGFzaCwgaGFzaF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IG1ldGEua2V5LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IFsnaGVhZCcsIG1ldGEua2V5LCBoYXNoXSwgdmFsdWU6IDAgfSlcblxuICAgICAgICBhd2FpdCB0aGlzLmRiLmJhdGNoKG9wcyBhcyBhbnkpXG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgfVxuXG4gICAgLy8gLS0tLSByZWFkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKiogR2V0IHRoZSBtZXRhZGF0YSBmb3IgYSBoYXNoLiAqL1xuICAgIGFzeW5jIGdldCAoaGFzaDpzdHJpbmcpOlByb21pc2U8TWV0YT4ge1xuICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgdGhpcy5kYi5nZXQoWydtZXRhJywgaGFzaF0gYXMgYW55KSBhcyBNZXRhXG4gICAgICAgIGlmIChtZXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBOb3QgZm91bmQ6ICR7aGFzaH1gKSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdOb3RGb3VuZEVycm9yJyB9LFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRhXG4gICAgfVxuXG4gICAgLyoqIEdldCB0aGUgYm9keSBibG9iIGZvciBhIGhhc2guICovXG4gICAgYXN5bmMgZ2V0Qm9keSAoaGFzaDpzdHJpbmcpOlByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5kYi5nZXQoWydibG9iJywgaGFzaF0gYXMgYW55KSkgYXMgc3RyaW5nXG4gICAgfVxuXG4gICAgLyoqIExpc3QgZXZlcnkga2V5IGluIHRoZSBzdG9yZS4gKi9cbiAgICBhc3luYyBrZXlzICgpOlByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OnN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBba2V5XSBvZiB0aGlzLmRiLml0ZXJhdG9yKCkpIHtcbiAgICAgICAgICAgIGlmICghaGFzUHJlZml4KGtleSwgWydrZXknXSkpIGNvbnRpbnVlXG4gICAgICAgICAgICBjb25zdCBrID0ga2V5WzFdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGsgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIExpc3QgYWxsIGRvY3VtZW50cy4gKi9cbiAgICBhc3luYyBsaXN0ICgpOlByb21pc2U8Tm9kZUVudHJ5W10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0Ok5vZGVFbnRyeVtdID0gW11cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5kYi5pdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ByZWZpeChrZXksIFsnbWV0YSddKSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBrZXlbMV1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaCAhPT0gJ3N0cmluZycpIGNvbnRpbnVlXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgaGFzaCxcbiAgICAgICAgICAgICAgICBtZXRhOiB2YWx1ZSBhcyBNZXRhLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIEN1cnJlbnQgaGVhZHMgKGxhdGVzdCB2ZXJzaW9ucykgZm9yIGEga2V5LiAqL1xuICAgIGFzeW5jIGhlYWRzIChrZXk6c3RyaW5nKTpQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDpzdHJpbmdbXSA9IFtdXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgW2tdIG9mIHRoaXMuZGIuaXRlcmF0b3IoKSkge1xuICAgICAgICAgICAgaWYgKCFoYXNQcmVmaXgoaywgWydoZWFkJywga2V5XSkpIGNvbnRpbnVlXG4gICAgICAgICAgICBjb25zdCBoYXNoID0ga1syXVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGhhc2gpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8qKiBGb3J3YXJkIGxpbmtzIOKAkyB3aGF0IGRvY3VtZW50cyByZWZlcmVuY2UgYGhhc2hgIGFzIGEgcHJldi4gKi9cbiAgICBhc3luYyBsaW5rcyAoaGFzaDpzdHJpbmcpOlByb21pc2U8TGlua3NFbnRyeVtdPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDpMaW5rc0VudHJ5W10gPSBbXVxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgdGhpcy5kYi5pdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ByZWZpeChrLCBbJ2xpbmsnLCBoYXNoXSkpIGNvbnRpbnVlXG4gICAgICAgICAgICBjb25zdCBsaW5rZWRIYXNoID0ga1syXVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaW5rZWRIYXNoICE9PSAnc3RyaW5nJykgY29udGludWVcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBoYXNoOiBsaW5rZWRIYXNoLFxuICAgICAgICAgICAgICAgIGtleTogdmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIFdhbGsgYmFja3dhcmQgdGhyb3VnaCBoaXN0b3J5IGZyb20gYSBnaXZlbiBoYXNoLiAqL1xuICAgIGFzeW5jIGhpc3RvcnkgKGhhc2g6c3RyaW5nKTpQcm9taXNlPE5vZGVFbnRyeVtdPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDpOb2RlRW50cnlbXSA9IFtdXG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgICAgICBsZXQgY3VycmVudDpzdHJpbmd8dW5kZWZpbmVkID0gaGFzaFxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50ICYmICF2aXNpdGVkLmhhcyhjdXJyZW50KSkge1xuICAgICAgICAgICAgdmlzaXRlZC5hZGQoY3VycmVudClcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCB0aGlzLmdldChjdXJyZW50KVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBoYXNoOiBjdXJyZW50LCBtZXRhIH0pXG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gZ2V0UHJldihtZXRhKVxuICAgICAgICAgICAgLy8gRm9sbG93IGZpcnN0IHByZXYgbGluayAobGluZWFyIGhpc3RvcnkpXG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldlswXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8qKiBUYWlscyAocm9vdCBkb2N1bWVudHMgd2l0aCBubyBwcmV2KSBmb3IgYSBrZXkuICovXG4gICAgYXN5bmMgdGFpbHMgKGtleTpzdHJpbmcpOlByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OnN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBba10gb2YgdGhpcy5kYi5pdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ByZWZpeChrLCBbJ3RhaWwnLCBrZXldKSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBrWzJdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhc2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaGFzaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIERlbGV0ZSB0aGUgSW5kZXhlZERCIGRhdGFiYXNlIGVudGlyZWx5IChmb3IgZGVtbyByZXNldCkuICovXG4gICAgYXN5bmMgZGVzdHJveSAoKTpQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5jbG9zZSgpXG4gICAgICAgIC8vIGJyb3dzZXItbGV2ZWwgc3RvcmVzIGRhdGEgaW4gYW4gSW5kZXhlZERCIGRhdGFiYXNlIG5hbWVkIGFmdGVyXG4gICAgICAgIC8vIHRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAgICAgICAgY29uc3QgcmVxID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKHRoaXMuX25hbWUpXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKClcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCcm93c2VyRm9ya0RCIH0gZnJvbSAnLi4vc3JjL2Jyb3dzZXIuanMnXG5cbmV4cG9ydCBjb25zdCBmb3JrZGIgPSBuZXcgQnJvd3NlckZvcmtEQignZm9ya2RiLWV4YW1wbGUnKVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2h0bS9wcmVhY3QnXG5pbXBvcnQgeyB0eXBlIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgdXNlU2lnbmFsIH0gZnJvbSAnQHByZWFjdC9zaWduYWxzJ1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdwcmVhY3QvaG9va3MnXG5pbXBvcnQgeyB0eXBlIE1ldGEgfSBmcm9tICcuLi8uLi9zcmMvYnJvd3Nlci5qcydcbmltcG9ydCB7IGZvcmtkYiB9IGZyb20gJy4uL2RiLmpzJ1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlRm9ybTpGdW5jdGlvbkNvbXBvbmVudDx7XG4gICAgb25DcmVhdGVkOigpPT52b2lkfFByb21pc2U8dm9pZD5cbn0+ID0gZnVuY3Rpb24gQ3JlYXRlRm9ybSAoeyBvbkNyZWF0ZWQgfSkge1xuICAgIGNvbnN0IGtleSA9IHVzZVNpZ25hbCgnbXktZG9jJylcbiAgICBjb25zdCBib2R5ID0gdXNlU2lnbmFsKCcnKVxuICAgIGNvbnN0IHByZXZIYXNoID0gdXNlU2lnbmFsKCcnKVxuXG4gICAgY29uc3Qgc3VibWl0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKGV2OkV2ZW50KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbWV0YTpNZXRhID0geyBrZXk6IGtleS52YWx1ZSB9XG4gICAgICAgIGlmIChwcmV2SGFzaC52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgIG1ldGEucHJldiA9IHByZXZIYXNoLnZhbHVlXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAubWFwKChzKSA9PiBzLnRyaW0oKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZm9ya2RiLnB1dChtZXRhLCBib2R5LnZhbHVlKVxuICAgICAgICBib2R5LnZhbHVlID0gJydcbiAgICAgICAgcHJldkhhc2gudmFsdWUgPSAnJ1xuICAgICAgICBhd2FpdCBvbkNyZWF0ZWQoKVxuICAgIH0sIFtvbkNyZWF0ZWRdKVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiY3JlYXRlLWZvcm1cIiBvblN1Ym1pdD0ke3N1Ym1pdH0+XG4gICAgICAgICAgICA8aDI+QWRkIGEgbm9kZTwvaDI+XG5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5LZXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9JHtrZXkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9JHsoZTpFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LnZhbHVlID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Cb2R5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0ke2JvZHkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9JHszfVxuICAgICAgICAgICAgICAgICAgICBvbklucHV0PSR7KGU6RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkudmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxzcGFuPlByZXYgaGFzaChlcyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9JHtwcmV2SGFzaC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb21tYS1zZXBhcmF0ZWQgaGFzaGVzXCJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD0keyhlOkV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2SGFzaC52YWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8c3Vic3RyYXRlLWJ1dHRvbiBjbGFzcz1cImNyZWF0ZS1zdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICA8L3N1YnN0cmF0ZS1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICBgXG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCdcbmltcG9ydCB7IHR5cGUgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyB0eXBlIE5vZGVEZXRhaWwgfSBmcm9tICcuLi9zdGF0ZS5qcydcblxuZXhwb3J0IGNvbnN0IE5vZGVDYXJkOkZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgICBub2RlOk5vZGVEZXRhaWwsXG4gICAgb25TZWxlY3Q6KGhhc2g6c3RyaW5nKSA9PiB2b2lkXG59PiA9IGZ1bmN0aW9uIE5vZGVDYXJkIChwcm9wcykge1xuICAgIGNvbnN0IHsgbm9kZSwgb25TZWxlY3QgfSA9IHByb3BzXG4gICAgY29uc3QgcHJldiA9IG5vZGUubWV0YS5wcmV2ID8/IFtdXG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJub2RlLWNhcmRcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub2RlLWtleVwiPiR7bm9kZS5tZXRhLmtleX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJub2RlLWhhc2hcIiB0aXRsZT0ke25vZGUuaGFzaH0+JHtub2RlLmhhc2h9PC9jb2RlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICR7bm9kZS5ib2R5ID8gaHRtbGA8cCBjbGFzcz1cIm5vZGUtYm9keVwiPiR7bm9kZS5ib2R5fTwvcD5gIDogbnVsbH1cblxuICAgICAgICAgICAgJHtwcmV2Lmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmstbGFiZWxcIj5wcmV2PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3ByZXYubWFwKChoOnN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSR7aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhhc2gtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0keygpID0+IG9uU2VsZWN0KGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAke25vZGUuZm9yd2FyZExpbmtzLmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmstbGFiZWxcIj5uZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke25vZGUuZm9yd2FyZExpbmtzLm1hcCgobCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSR7bC5oYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGFzaC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSR7KCkgPT4gb25TZWxlY3QobC5oYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2wuaGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L2FydGljbGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2h0bS9wcmVhY3QnXG5pbXBvcnQgeyB0eXBlIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncHJlYWN0L2hvb2tzJ1xuaW1wb3J0IHsgdXNlU2lnbmFsIH0gZnJvbSAnQHByZWFjdC9zaWduYWxzJ1xuaW1wb3J0IHsgdHlwZSBOb2RlRW50cnkgfSBmcm9tICcuLi8uLi9zcmMvYnJvd3Nlci5qcydcbmltcG9ydCB7IGZvcmtkYiB9IGZyb20gJy4uL2RiLmpzJ1xuXG5leHBvcnQgY29uc3QgSGlzdG9yeVBhbmVsOkZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgICBoYXNoOnN0cmluZ1xuICAgIG9uU2VsZWN0OihoYXNoOnN0cmluZykgPT4gdm9pZFxufT4gPSBmdW5jdGlvbiBIaXN0b3J5UGFuZWwgKHsgaGFzaCwgb25TZWxlY3QgfSkge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VTaWduYWw8QXJyYXk8Tm9kZUVudHJ5Pj4oW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICAgICAgZm9ya2RiLmhpc3RvcnkoaGFzaCkudGhlbigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG4gICAgICAgICAgICBoaXN0b3J5LnZhbHVlID0gZW50cmllc1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgICAgICAgIGhpc3RvcnkudmFsdWUgPSBbXVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cbiAgICB9LCBbaGFzaF0pXG5cbiAgICBpZiAoaGlzdG9yeS52YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGFzaWRlIGNsYXNzPVwiaGlzdG9yeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGgzPkhpc3RvcnkgZnJvbSAke2hhc2h9PC9oMz5cbiAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAke2hpc3RvcnkudmFsdWUubWFwKChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT0ke2VudHJ5Lmhhc2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1YnN0cmF0ZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhhc2gtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0keygpID0+IG9uU2VsZWN0KGVudHJ5Lmhhc2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZW50cnkuaGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlzdG9yeS1rZXlcIj4ke2VudHJ5Lm1ldGEua2V5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgKX1cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2h0bS9wcmVhY3QnXG5pbXBvcnQgeyB0eXBlIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdwcmVhY3QvaG9va3MnXG5pbXBvcnQgeyB0eXBlIE5vZGVEZXRhaWwgfSBmcm9tICcuLi9zdGF0ZS5qcydcblxuaW50ZXJmYWNlIERhZ1BvaW50IHtcbiAgICBoYXNoOnN0cmluZ1xuICAgIGtleTpzdHJpbmdcbiAgICB4Om51bWJlclxuICAgIHk6bnVtYmVyXG59XG5cbmludGVyZmFjZSBEYWdFZGdlIHtcbiAgICBmcm9tOnN0cmluZ1xuICAgIHRvOnN0cmluZ1xufVxuXG5mdW5jdGlvbiBidWlsZERhZyAobm9kZXM6Tm9kZURldGFpbFtdKTp7XG4gICAgcG9pbnRzOkRhZ1BvaW50W11cbiAgICBlZGdlczpEYWdFZGdlW11cbiAgICB3aWR0aDpudW1iZXJcbiAgICBoZWlnaHQ6bnVtYmVyXG59IHtcbiAgICBjb25zdCBieUhhc2ggPSBuZXcgTWFwPHN0cmluZywgTm9kZURldGFpbD4oKVxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IGJ5SGFzaC5zZXQobm9kZS5oYXNoLCBub2RlKSlcblxuICAgIGNvbnN0IGRlcHRoQ2FjaGUgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gICAgY29uc3QgZ2V0RGVwdGggPSAoaGFzaDpzdHJpbmcsIHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKSk6bnVtYmVyID0+IHtcbiAgICAgICAgaWYgKGRlcHRoQ2FjaGUuaGFzKGhhc2gpKSByZXR1cm4gZGVwdGhDYWNoZS5nZXQoaGFzaCkhXG4gICAgICAgIGlmIChzZWVuLmhhcyhoYXNoKSkgcmV0dXJuIDBcblxuICAgICAgICBjb25zdCBub2RlID0gYnlIYXNoLmdldChoYXNoKVxuICAgICAgICBpZiAoIW5vZGUpIHJldHVybiAwXG5cbiAgICAgICAgc2Vlbi5hZGQoaGFzaClcbiAgICAgICAgY29uc3QgcHJldiA9IG5vZGUubWV0YS5wcmV2ID8/IFtdXG4gICAgICAgIGlmIChwcmV2Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVwdGhDYWNoZS5zZXQoaGFzaCwgMClcbiAgICAgICAgICAgIHNlZW4uZGVsZXRlKGhhc2gpXG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1heERlcHRoID0gMFxuICAgICAgICBmb3IgKGNvbnN0IHByZXZIYXNoIG9mIHByZXYpIHtcbiAgICAgICAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGdldERlcHRoKHByZXZIYXNoLCBzZWVuKSArIDEpXG4gICAgICAgIH1cbiAgICAgICAgZGVwdGhDYWNoZS5zZXQoaGFzaCwgbWF4RGVwdGgpXG4gICAgICAgIHNlZW4uZGVsZXRlKGhhc2gpXG4gICAgICAgIHJldHVybiBtYXhEZXB0aFxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRlZE5vZGVzID0gWy4uLm5vZGVzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlcHRoRGlmZiA9IGdldERlcHRoKGEuaGFzaCkgLSBnZXREZXB0aChiLmhhc2gpXG4gICAgICAgIGlmIChkZXB0aERpZmYgIT09IDApIHJldHVybiBkZXB0aERpZmZcbiAgICAgICAgcmV0dXJuIGEuaGFzaC5sb2NhbGVDb21wYXJlKGIuaGFzaClcbiAgICB9KVxuXG4gICAgY29uc3QgbGFuZXNCeURlcHRoID0gbmV3IE1hcDxudW1iZXIsIFNldDxudW1iZXI+PigpXG4gICAgY29uc3QgbGFuZUJ5SGFzaCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcblxuICAgIGNvbnN0IHJlc2VydmVMYW5lID0gKGRlcHRoOm51bWJlciwgcHJlZmVycmVkOm51bWJlcnx1bmRlZmluZWQpOm51bWJlciA9PiB7XG4gICAgICAgIGNvbnN0IHVzZWQgPSBsYW5lc0J5RGVwdGguZ2V0KGRlcHRoKSA/PyBuZXcgU2V0PG51bWJlcj4oKVxuICAgICAgICBpZiAocHJlZmVycmVkICE9PSB1bmRlZmluZWQgJiYgIXVzZWQuaGFzKHByZWZlcnJlZCkpIHtcbiAgICAgICAgICAgIHVzZWQuYWRkKHByZWZlcnJlZClcbiAgICAgICAgICAgIGxhbmVzQnlEZXB0aC5zZXQoZGVwdGgsIHVzZWQpXG4gICAgICAgICAgICByZXR1cm4gcHJlZmVycmVkXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFuZSA9IDBcbiAgICAgICAgd2hpbGUgKHVzZWQuaGFzKGxhbmUpKSBsYW5lKytcbiAgICAgICAgdXNlZC5hZGQobGFuZSlcbiAgICAgICAgbGFuZXNCeURlcHRoLnNldChkZXB0aCwgdXNlZClcbiAgICAgICAgcmV0dXJuIGxhbmVcbiAgICB9XG5cbiAgICBsZXQgbWF4TGFuZSA9IDBcbiAgICBsZXQgbWF4RGVwdGggPSAwXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHNvcnRlZE5vZGVzKSB7XG4gICAgICAgIGNvbnN0IGRlcHRoID0gZ2V0RGVwdGgobm9kZS5oYXNoKVxuICAgICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBkZXB0aClcbiAgICAgICAgY29uc3QgcHJldiA9IG5vZGUubWV0YS5wcmV2ID8/IFtdXG4gICAgICAgIGNvbnN0IHByZWZlcnJlZCA9IHByZXZcbiAgICAgICAgICAgIC5tYXAoKHByZXZIYXNoKSA9PiBsYW5lQnlIYXNoLmdldChwcmV2SGFzaCkpXG4gICAgICAgICAgICAuZmluZCgobGFuZSk6bGFuZSBpcyBudW1iZXIgPT4gbGFuZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBjb25zdCBsYW5lID0gcmVzZXJ2ZUxhbmUoZGVwdGgsIHByZWZlcnJlZClcbiAgICAgICAgbGFuZUJ5SGFzaC5zZXQobm9kZS5oYXNoLCBsYW5lKVxuICAgICAgICBtYXhMYW5lID0gTWF0aC5tYXgobWF4TGFuZSwgbGFuZSlcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHM6RGFnUG9pbnRbXSA9IFtdXG4gICAgY29uc3QgeFN0ZXAgPSAxODBcbiAgICBjb25zdCB5U3RlcCA9IDE0MFxuICAgIGNvbnN0IHhNYXJnaW4gPSA5MFxuICAgIGNvbnN0IHlNYXJnaW4gPSA3MFxuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHNvcnRlZE5vZGVzKSB7XG4gICAgICAgIGNvbnN0IGxhbmUgPSBsYW5lQnlIYXNoLmdldChub2RlLmhhc2gpID8/IDBcbiAgICAgICAgY29uc3QgZGVwdGggPSBnZXREZXB0aChub2RlLmhhc2gpXG4gICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgIGhhc2g6IG5vZGUuaGFzaCxcbiAgICAgICAgICAgIGtleTogbm9kZS5tZXRhLmtleSxcbiAgICAgICAgICAgIHg6IHhNYXJnaW4gKyAobGFuZSAqIHhTdGVwKSxcbiAgICAgICAgICAgIHk6IHlNYXJnaW4gKyAoZGVwdGggKiB5U3RlcClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBlZGdlczpEYWdFZGdlW10gPSBbXVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBjb25zdCBwcmV2ID0gbm9kZS5tZXRhLnByZXYgPz8gW11cbiAgICAgICAgZm9yIChjb25zdCBwcmV2SGFzaCBvZiBwcmV2KSB7XG4gICAgICAgICAgICBpZiAoYnlIYXNoLmhhcyhwcmV2SGFzaCkpIHtcbiAgICAgICAgICAgICAgICBlZGdlcy5wdXNoKHsgZnJvbTogcHJldkhhc2gsIHRvOiBub2RlLmhhc2ggfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvaW50cyxcbiAgICAgICAgZWRnZXMsXG4gICAgICAgIHdpZHRoOiAobWF4TGFuZSAqIHhTdGVwKSArICh4TWFyZ2luICogMiksXG4gICAgICAgIGhlaWdodDogKG1heERlcHRoICogeVN0ZXApICsgKHlNYXJnaW4gKiAyKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1lcmtsZURhZzpGdW5jdGlvbkNvbXBvbmVudDx7XG4gICAgbm9kZXM6Tm9kZURldGFpbFtdXG4gICAgc2VsZWN0ZWRIYXNoOnN0cmluZ3xudWxsXG4gICAgb25TZWxlY3Q6KGhhc2g6c3RyaW5nKSA9PiB2b2lkXG59PiA9IGZ1bmN0aW9uIE1lcmtsZURhZyAoeyBub2Rlcywgc2VsZWN0ZWRIYXNoLCBvblNlbGVjdCB9KSB7XG4gICAgY29uc3QgZGFnID0gYnVpbGREYWcobm9kZXMpXG4gICAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50fG51bGw+KG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgICAgIGlmICghZWwpIHJldHVyblxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHRcbiAgICB9LCBbZGFnLnBvaW50cy5sZW5ndGhdKVxuXG4gICAgY29uc3QgcG9pbnRNYXAgPSBuZXcgTWFwPHN0cmluZywgRGFnUG9pbnQ+KClcbiAgICBkYWcucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiBwb2ludE1hcC5zZXQocG9pbnQuaGFzaCwgcG9pbnQpKVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGFnLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMj5NZXJrbGUgREFHPC9oMj5cblxuICAgICAgICAgICAgJHtkYWcucG9pbnRzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICAgICAgaHRtbGA8cCBjbGFzcz1cImVtcHR5LXN0YXRlXCI+LTwvcD5gIDpcbiAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFnLXNjcm9sbFwiIHJlZj0ke3Njcm9sbFJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkYWctY2FudmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0ke2RhZy53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JHtkYWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZXJrbGUgREFHIHZpc3VhbGl6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGFnLmVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gcG9pbnRNYXAuZ2V0KGVkZ2UuZnJvbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG8gPSBwb2ludE1hcC5nZXQoZWRnZS50bylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tIHx8ICF0bykgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke2Ake2VkZ2UuZnJvbX0tPiR7ZWRnZS50b31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGFnLWVkZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxPSR7ZnJvbS54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPSR7ZnJvbS55fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPSR7dG8ueH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Mj0ke3RvLnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhZy5wb2ludHMubWFwKChwb2ludCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke3BvaW50Lmhhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRhZy1ub2RlLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiBvblNlbGVjdChwb2ludC5oYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSR7c2VsZWN0ZWRIYXNoID09PSBwb2ludC5oYXNoID8gJ2RhZy1ub2RlIGRhZy1ub2RlLXNlbGVjdGVkJyA6ICdkYWctbm9kZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9JHtwb2ludC54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5PSR7cG9pbnQueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByPSR7MzZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRhZy1ub2RlLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PSR7cG9pbnQueH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PSR7cG9pbnQueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9taW5hbnQtYmFzZWxpbmU9XCJjZW50cmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3BvaW50Lmhhc2guc2xpY2UoMCwgNCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGFnLW5vZGUta2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PSR7cG9pbnQueH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PSR7cG9pbnQueSArIDU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3BvaW50LmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICR7c2VsZWN0ZWRIYXNoICYmIGh0bWxgXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYWctc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQgbm9kZTogPGNvZGU+JHtzZWxlY3RlZEhhc2h9PC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCdcbmltcG9ydCB7IHR5cGUgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyB1c2VTaWduYWwgfSBmcm9tICdAcHJlYWN0L3NpZ25hbHMnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncHJlYWN0L2hvb2tzJ1xuaW1wb3J0IHsgQ3JlYXRlRm9ybSB9IGZyb20gJy4vY3JlYXRlLWZvcm0uanMnXG5pbXBvcnQgeyBOb2RlQ2FyZCB9IGZyb20gJy4vbm9kZS1jYXJkLmpzJ1xuaW1wb3J0IHsgSGlzdG9yeVBhbmVsIH0gZnJvbSAnLi9oaXN0b3J5LXBhbmVsLmpzJ1xuaW1wb3J0IHsgTWVya2xlRGFnIH0gZnJvbSAnLi9tZXJrbGUtZGFnLmpzJ1xuaW1wb3J0IHsgZm9ya2RiIH0gZnJvbSAnLi4vZGIuanMnXG5pbXBvcnQgeyB0eXBlIE5vZGVEZXRhaWwgfSBmcm9tICcuLi9zdGF0ZS5qcydcblxuZXhwb3J0IGNvbnN0IEFwcDpGdW5jdGlvbkNvbXBvbmVudCA9IGZ1bmN0aW9uIEFwcCAoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSB1c2VTaWduYWw8QXJyYXk8Tm9kZURldGFpbD4+KFtdKVxuICAgIGNvbnN0IHNlbGVjdGVkSGFzaCA9IHVzZVNpZ25hbDxzdHJpbmd8bnVsbD4obnVsbClcbiAgICBjb25zdCBoZWFkTWFwID0gdXNlU2lnbmFsPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4oe30pXG5cbiAgICBjb25zdCBzZWxlY3RIYXNoID0gdXNlQ2FsbGJhY2soKGhhc2g6c3RyaW5nKSA9PiB7XG4gICAgICAgIHNlbGVjdGVkSGFzaC52YWx1ZSA9IGhhc2hcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHJlZnJlc2ggPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbE5vZGVzID0gYXdhaXQgZm9ya2RiLmxpc3QoKVxuXG4gICAgICAgIGNvbnN0IGRldGFpbGVkOkFycmF5PE5vZGVEZXRhaWw+ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBhbGxOb2Rlcy5tYXAoYXN5bmMgKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYm9keSwgZm9yd2FyZExpbmtzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgZm9ya2RiLmdldEJvZHkobm9kZS5oYXNoKS5jYXRjaCgoKSA9PiAnJyksXG4gICAgICAgICAgICAgICAgICAgIGZvcmtkYi5saW5rcyhub2RlLmhhc2gpLFxuICAgICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ub2RlLCBib2R5LCBmb3J3YXJkTGlua3MgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBub2Rlcy52YWx1ZSA9IGRldGFpbGVkXG5cbiAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IGZvcmtkYi5rZXlzKClcbiAgICAgICAgY29uc3QgaG06UmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgaG1ba2V5XSA9IGF3YWl0IGZvcmtkYi5oZWFkcyhrZXkpXG4gICAgICAgIH1cbiAgICAgICAgaGVhZE1hcC52YWx1ZSA9IGhtXG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmb3JrZGIub3BlbigpLnRoZW4ocmVmcmVzaCkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKVxuICAgIH0sIFtyZWZyZXNoXSlcblxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmb3JrZGIuZGVzdHJveSgpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHBcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJhcHAtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPkZvcmtEQjwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBDb250ZW50LWFkZHJlc3NlZCBhcHBlbmQtb25seSBzdG9yZVxuICAgICAgICAgICAgICAgICAgICBiYWNrZWQgYnkgSW5kZXhlZERCXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uIGNsYXNzPVwicmVzZXQtYnRuXCIgb25DbGljaz0ke2hhbmRsZVJlc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgREJcbiAgICAgICAgICAgICAgICA8L3N1YnN0cmF0ZS1idXR0b24+XG4gICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJsZWZ0LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8JHtDcmVhdGVGb3JtfSBvbkNyZWF0ZWQ9JHtyZWZyZXNofSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICR7T2JqZWN0LmtleXMoaGVhZE1hcC52YWx1ZSkubGVuZ3RoID4gMCAmJiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJoZWFkcy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkhlYWRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke09iamVjdC5lbnRyaWVzKGhlYWRNYXAudmFsdWUpLm1hcCgoW2tleSwgaGFzaGVzXSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRzLXJvd1wiIGtleT0ke2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vZGUta2V5XCI+JHtrZXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNoZXMubWFwKChoYXNoKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke2hhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGFzaC1saW5rIGhlYWQtaGFzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiBzZWxlY3RIYXNoKGhhc2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm5vZGVzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BbGwgbm9kZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtub2Rlcy52YWx1ZS5sZW5ndGggPT09IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIGRvY3VtZW50cyB5ZXQuIENyZWF0ZSBvbmUgYWJvdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7bm9kZXMudmFsdWUubWFwKChub2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwke05vZGVDYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9JHtub2RlLmhhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU9JHtub2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD0ke3NlbGVjdEhhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEhhc2gudmFsdWUgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwke0hpc3RvcnlQYW5lbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoPSR7c2VsZWN0ZWRIYXNoLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PSR7c2VsZWN0SGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJyaWdodC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPCR7TWVya2xlRGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM9JHtub2Rlcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSGFzaD0ke3NlbGVjdGVkSGFzaC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PSR7c2VsZWN0SGFzaH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufVxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2h0bS9wcmVhY3QnXG5pbXBvcnQgJ0BzdWJzdHJhdGUtc3lzdGVtL2J1dHRvbidcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAuanMnXG5cbnJlbmRlcihodG1sYDwke0FwcH0gLz5gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpISlcbiJdLCJuYW1lcyI6WyJuIiwibCIsInUiLCJ0IiwiaSIsInIiLCJvIiwiZSIsImYiLCJjIiwicyIsImEiLCJwIiwidiIsInkiLCJkIiwidyIsImciLCJfIiwibSIsImsiLCJ4IiwiUyIsIkMiLCJ6IiwiaCIsImIiLCJBIiwiVCIsImoiLCJGIiwiTSIsIiQiLCJJIiwiSCIsInEiLCJCIiwiX19kZWZQcm9wIiwiX19uYW1lIiwiaXNSZWdpc3RlcmVkIiwiZGVmaW5lIiwiX21hdGNoIiwiX2EiLCJTdWJzdHJhdGVCdXR0b25MaWdodCIsImxlbiIsImxlbjIiLCJidWZmZXIiLCJyZXF1aXJlJCQwIiwiaWVlZTc1NCIsInJlcXVpcmUkJDEiLCJleHBvcnRzIiwiQnVmZmVyIiwiZW5jb2RpbmciLCJieXRlTGVuZ3RoIiwiZXJyb3JzIiwiRSIsImZvcm1hdHMiLCJ0ZXh0RW5kZWMiLCJyZXF1aXJlJCQyIiwiZW5jb2RpbmdzIiwicmVxdWlyZSQkMyIsIlJlZmxlY3RBcHBseSIsIlJlZmxlY3RPd25LZXlzIiwiTnVtYmVySXNOYU4iLCJldmVudHNNb2R1bGUiLCJldmVudHMiLCJvbmNlIiwidmFsdWUiLCJpdGVyYXRvciIsInJlcXVpcmUkJDQiLCJuYW1lIiwicHJlZml4TGVuZ3RoIiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJyZXF1aXJlJCQ3IiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJlcnIiLCJwcmV3cml0ZUJhdGNoIiwicmVxdWlyZSQkMTYiLCJhYnN0cmFjdExldmVsIiwiZGVzZXJpYWxpemUiLCJrZXlSYW5nZSIsImNsZWFyIiwiQnJvd3NlckxldmVsIiwiQ3JlYXRlRm9ybSIsInVzZUNhbGxiYWNrIiwiaHRtbCIsIk5vZGVDYXJkIiwiSGlzdG9yeVBhbmVsIiwidXNlRWZmZWN0IiwibWF4RGVwdGgiLCJsYW5lIiwiTWVya2xlRGFnIiwidXNlUmVmIiwiQXBwIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBRyxJQUFDQSxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFFQyxLQUFJQyxNQUFFLENBQUEsR0FBR0MsTUFBRSxJQUFHQyxNQUFFLHFFQUFvRUMsTUFBRSxNQUFNO0FBQVEsU0FBU0MsSUFBRWhCLElBQUVDLElBQUU7QUFBQyxXQUFRQyxNQUFLRCxHQUFFLENBQUFELEdBQUVFLEVBQUMsSUFBRUQsR0FBRUMsRUFBQztBQUFFLFNBQU9GO0FBQUM7QUFBQyxTQUFTaUIsSUFBRWpCLElBQUU7QUFBQyxFQUFBQSxNQUFHQSxHQUFFLGNBQVlBLEdBQUUsV0FBVyxZQUFZQSxFQUFDO0FBQUM7QUFBQyxTQUFTa0IsSUFBRWpCLElBQUVDLElBQUVDLElBQUU7QUFBQyxNQUFJQyxJQUFFQyxJQUFFQyxJQUFFQyxLQUFFLENBQUE7QUFBRyxPQUFJRCxNQUFLSixHQUFFLFVBQU9JLEtBQUVGLEtBQUVGLEdBQUVJLEVBQUMsSUFBRSxTQUFPQSxLQUFFRCxLQUFFSCxHQUFFSSxFQUFDLElBQUVDLEdBQUVELEVBQUMsSUFBRUosR0FBRUksRUFBQztBQUFFLE1BQUcsVUFBVSxTQUFPLE1BQUlDLEdBQUUsV0FBUyxVQUFVLFNBQU8sSUFBRVAsSUFBRSxLQUFLLFdBQVUsQ0FBQyxJQUFFRyxLQUFHLGNBQVksT0FBT0YsTUFBRyxRQUFNQSxHQUFFLGFBQWEsTUFBSUssTUFBS0wsR0FBRSxhQUFhLFlBQVNNLEdBQUVELEVBQUMsTUFBSUMsR0FBRUQsRUFBQyxJQUFFTCxHQUFFLGFBQWFLLEVBQUM7QUFBRyxTQUFPYSxJQUFFbEIsSUFBRU0sSUFBRUgsSUFBRUMsSUFBRSxJQUFJO0FBQUM7QUFBQyxTQUFTYyxJQUFFbkIsSUFBRUcsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLE1BQUlDLEtBQUUsRUFBQyxNQUFLUCxJQUFFLE9BQU1HLElBQUUsS0FBSUMsSUFBRSxLQUFJQyxJQUFFLEtBQUksTUFBSyxJQUFHLE1BQUssS0FBSSxHQUFFLEtBQUksTUFBSyxLQUFJLE1BQUssYUFBWSxRQUFPLEtBQUksUUFBTUMsS0FBRSxFQUFFSixNQUFFSSxJQUFFLEtBQUksSUFBRyxLQUFJLEVBQUM7QUFBRSxTQUFPLFFBQU1BLE1BQUcsUUFBTUwsSUFBRSxTQUFPQSxJQUFFLE1BQU1NLEVBQUMsR0FBRUE7QUFBQztBQUFtQyxTQUFTYSxJQUFFcEIsSUFBRTtBQUFDLFNBQU9BLEdBQUU7QUFBUTtBQUFDLFNBQVNxQixJQUFFckIsSUFBRUMsSUFBRTtBQUFDLE9BQUssUUFBTUQsSUFBRSxLQUFLLFVBQVFDO0FBQUM7QUFBQyxTQUFTcUIsSUFBRXRCLElBQUVDLElBQUU7QUFBQyxNQUFHLFFBQU1BLEdBQUUsUUFBT0QsR0FBRSxLQUFHc0IsSUFBRXRCLEdBQUUsSUFBR0EsR0FBRSxNQUFJLENBQUMsSUFBRTtBQUFLLFdBQVFFLElBQUVELEtBQUVELEdBQUUsSUFBSSxRQUFPQyxLQUFJLEtBQUcsU0FBT0MsS0FBRUYsR0FBRSxJQUFJQyxFQUFDLE1BQUksUUFBTUMsR0FBRSxJQUFJLFFBQU9BLEdBQUU7QUFBSSxTQUFNLGNBQVksT0FBT0YsR0FBRSxPQUFLc0IsSUFBRXRCLEVBQUMsSUFBRTtBQUFJO0FBQUMsU0FBU3VCLElBQUV2QixJQUFFO0FBQUMsTUFBR0EsR0FBRSxPQUFLQSxHQUFFLEtBQUk7QUFBQyxRQUFJRSxLQUFFRixHQUFFLEtBQUlHLEtBQUVELEdBQUUsS0FBSUUsS0FBRSxJQUFHQyxLQUFFLENBQUEsR0FBR0MsS0FBRVUsSUFBRSxDQUFBLEdBQUdkLEVBQUM7QUFBRSxJQUFBSSxHQUFFLE1BQUlKLEdBQUUsTUFBSSxHQUFFRCxJQUFFLFNBQU9BLElBQUUsTUFBTUssRUFBQyxHQUFFa0IsSUFBRXhCLEdBQUUsS0FBSU0sSUFBRUosSUFBRUYsR0FBRSxLQUFJQSxHQUFFLElBQUksY0FBYSxLQUFHRSxHQUFFLE1BQUksQ0FBQ0MsRUFBQyxJQUFFLE1BQUtDLElBQUUsUUFBTUQsS0FBRW1CLElBQUVwQixFQUFDLElBQUVDLElBQUUsQ0FBQyxFQUFFLEtBQUdELEdBQUUsTUFBS0csRUFBQyxHQUFFQyxHQUFFLE1BQUlKLEdBQUUsS0FBSUksR0FBRSxHQUFHLElBQUlBLEdBQUUsR0FBRyxJQUFFQSxJQUFFLEVBQUVGLElBQUVFLElBQUVELEVBQUMsR0FBRUgsR0FBRSxNQUFJQSxHQUFFLEtBQUcsTUFBS0ksR0FBRSxPQUFLSCxNQUFHLEVBQUVHLEVBQUM7QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUVOLElBQUU7QUFBQyxNQUFHLFNBQU9BLEtBQUVBLEdBQUUsT0FBSyxRQUFNQSxHQUFFLElBQUksUUFBT0EsR0FBRSxNQUFJQSxHQUFFLElBQUksT0FBSyxNQUFLQSxHQUFFLElBQUksS0FBSyxTQUFTQyxJQUFFO0FBQUMsUUFBRyxRQUFNQSxNQUFHLFFBQU1BLEdBQUUsSUFBSSxRQUFPRCxHQUFFLE1BQUlBLEdBQUUsSUFBSSxPQUFLQyxHQUFFO0FBQUEsRUFBRyxDQUFDLEdBQUUsRUFBRUQsRUFBQztBQUFDO0FBQUMsU0FBUyxFQUFFQSxJQUFFO0FBQUMsR0FBQyxDQUFDQSxHQUFFLFFBQU1BLEdBQUUsTUFBSSxTQUFLSSxJQUFFLEtBQUtKLEVBQUMsS0FBRyxDQUFDLEVBQUUsU0FBT0ssT0FBR0osSUFBRSx3QkFBc0JJLE1BQUVKLElBQUUsc0JBQW9CSyxLQUFHLENBQUM7QUFBQztBQUFDLFNBQVMsSUFBRztBQUFDLFdBQVFOLElBQUVDLEtBQUUsR0FBRUcsSUFBRSxTQUFRQSxLQUFFLFNBQU9ILE1BQUdHLElBQUUsS0FBS0csR0FBQyxHQUFFUCxLQUFFSSxJQUFFLE1BQUssR0FBR0gsS0FBRUcsSUFBRSxRQUFPbUIsSUFBRXZCLEVBQUM7QUFBRSxJQUFFLE1BQUk7QUFBQztBQUFDLFNBQVMsRUFBRUEsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLE1BQUlDLElBQUVjLElBQUVYLElBQUVDLElBQUVDLElBQUVDLElBQUVDLElBQUVDLEtBQUVoQixNQUFHQSxHQUFFLE9BQUtVLEtBQUVhLEtBQUV6QixHQUFFO0FBQU8sT0FBSU8sS0FBRW1CLElBQUV6QixJQUFFRCxJQUFFa0IsSUFBRVgsSUFBRWtCLEVBQUMsR0FBRWYsS0FBRSxHQUFFQSxLQUFFZSxJQUFFZixLQUFJLFVBQU9HLEtBQUVaLEdBQUUsSUFBSVMsRUFBQyxPQUFLYyxLQUFFLE1BQUlYLEdBQUUsT0FBS0ssR0FBRUwsR0FBRSxHQUFHLEtBQUdGLEtBQUVFLEdBQUUsTUFBSUgsSUFBRU0sS0FBRU8sSUFBRXhCLElBQUVjLElBQUVXLElBQUVyQixJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxFQUFDLEdBQUVLLEtBQUVELEdBQUUsS0FBSUEsR0FBRSxPQUFLVyxHQUFFLE9BQUtYLEdBQUUsUUFBTVcsR0FBRSxPQUFLLEVBQUVBLEdBQUUsS0FBSSxNQUFLWCxFQUFDLEdBQUVKLEdBQUUsS0FBS0ksR0FBRSxLQUFJQSxHQUFFLE9BQUtDLElBQUVELEVBQUMsSUFBRyxRQUFNRSxNQUFHLFFBQU1ELE9BQUlDLEtBQUVELE1BQUlHLEtBQUUsQ0FBQyxFQUFFLElBQUVKLEdBQUUsU0FBT1csR0FBRSxRQUFNWCxHQUFFLE1BQUlOLEtBQUUsRUFBRU0sSUFBRU4sSUFBRVIsSUFBRWtCLEVBQUMsSUFBRSxjQUFZLE9BQU9KLEdBQUUsUUFBTSxXQUFTRyxLQUFFVCxLQUFFUyxLQUFFRixPQUFJUCxLQUFFTyxHQUFFLGNBQWFELEdBQUUsT0FBSztBQUFJLFNBQU9aLEdBQUUsTUFBSWMsSUFBRVI7QUFBQztBQUFDLFNBQVNtQixJQUFFM0IsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLE1BQUlDLElBQUVDLElBQUVDLElBQUVDLElBQUVDLElBQUVDLEtBQUVSLEdBQUUsUUFBT1MsS0FBRUQsSUFBRWUsS0FBRTtBQUFFLE9BQUl6QixHQUFFLE1BQUksSUFBSSxNQUFNSSxFQUFDLEdBQUVDLEtBQUUsR0FBRUEsS0FBRUQsSUFBRUMsS0FBSSxVQUFPQyxLQUFFTCxHQUFFSSxFQUFDLE1BQUksYUFBVyxPQUFPQyxNQUFHLGNBQVksT0FBT0EsTUFBRyxZQUFVLE9BQU9BLE1BQUcsWUFBVSxPQUFPQSxNQUFHLFlBQVUsT0FBT0EsTUFBR0EsR0FBRSxlQUFhLFNBQU9BLEtBQUVOLEdBQUUsSUFBSUssRUFBQyxJQUFFYyxJQUFFLE1BQUtiLElBQUUsTUFBSyxNQUFLLElBQUksSUFBRVMsSUFBRVQsRUFBQyxJQUFFQSxLQUFFTixHQUFFLElBQUlLLEVBQUMsSUFBRWMsSUFBRUMsS0FBRSxFQUFDLFVBQVNkLEdBQUMsR0FBRSxNQUFLLE1BQUssSUFBSSxJQUFFLFdBQVNBLEdBQUUsZUFBYUEsR0FBRSxNQUFJLElBQUVBLEtBQUVOLEdBQUUsSUFBSUssRUFBQyxJQUFFYyxJQUFFYixHQUFFLE1BQUtBLEdBQUUsT0FBTUEsR0FBRSxLQUFJQSxHQUFFLE1BQUlBLEdBQUUsTUFBSSxNQUFLQSxHQUFFLEdBQUcsSUFBRU4sR0FBRSxJQUFJSyxFQUFDLElBQUVDLElBQUVFLEtBQUVILEtBQUVvQixJQUFFbkIsR0FBRSxLQUFHTixJQUFFTSxHQUFFLE1BQUlOLEdBQUUsTUFBSSxHQUFFTyxLQUFFLE1BQUssT0FBS0UsS0FBRUgsR0FBRSxNQUFJc0IsSUFBRXRCLElBQUVKLElBQUVNLElBQUVHLEVBQUMsT0FBS0EsT0FBS0osS0FBRUwsR0FBRU8sRUFBQyxPQUFLRixHQUFFLE9BQUssS0FBSSxRQUFNQSxNQUFHLFFBQU1BLEdBQUUsT0FBSyxNQUFJRSxPQUFJTCxLQUFFTSxLQUFFZSxPQUFJckIsS0FBRU0sTUFBR2UsT0FBSyxjQUFZLE9BQU9uQixHQUFFLFNBQU9BLEdBQUUsT0FBSyxNQUFJRyxNQUFHRCxPQUFJQyxNQUFHRCxLQUFFLElBQUVpQixPQUFJaEIsTUFBR0QsS0FBRSxJQUFFaUIsUUFBS2hCLEtBQUVELEtBQUVpQixPQUFJQSxNQUFJbkIsR0FBRSxPQUFLLE9BQUtOLEdBQUUsSUFBSUssRUFBQyxJQUFFO0FBQUssTUFBR00sR0FBRSxNQUFJTixLQUFFLEdBQUVBLEtBQUVLLElBQUVMLEtBQUksVUFBT0UsS0FBRUwsR0FBRUcsRUFBQyxNQUFJLE1BQUksSUFBRUUsR0FBRSxTQUFPQSxHQUFFLE9BQUtKLE9BQUlBLEtBQUVtQixJQUFFZixFQUFDLElBQUcsRUFBRUEsSUFBRUEsRUFBQztBQUFHLFNBQU9KO0FBQUM7QUFBQyxTQUFTLEVBQUVILElBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxNQUFJQyxJQUFFQztBQUFFLE1BQUcsY0FBWSxPQUFPTCxHQUFFLE1BQUs7QUFBQyxTQUFJSSxLQUFFSixHQUFFLEtBQUlLLEtBQUUsR0FBRUQsTUFBR0MsS0FBRUQsR0FBRSxRQUFPQyxLQUFJLENBQUFELEdBQUVDLEVBQUMsTUFBSUQsR0FBRUMsRUFBQyxFQUFFLEtBQUdMLElBQUVDLEtBQUUsRUFBRUcsR0FBRUMsRUFBQyxHQUFFSixJQUFFQyxJQUFFQyxFQUFDO0FBQUcsV0FBT0Y7QUFBQSxFQUFDO0FBQUMsRUFBQUQsR0FBRSxPQUFLQyxPQUFJRSxPQUFJRixNQUFHRCxHQUFFLFFBQU0sQ0FBQ0MsR0FBRSxlQUFhQSxLQUFFcUIsSUFBRXRCLEVBQUMsSUFBR0UsR0FBRSxhQUFhRixHQUFFLEtBQUlDLE1BQUcsSUFBSSxJQUFHQSxLQUFFRCxHQUFFO0FBQUssS0FBRTtBQUFDLElBQUFDLEtBQUVBLE1BQUdBLEdBQUU7QUFBQSxFQUFXLFNBQU8sUUFBTUEsTUFBRyxLQUFHQSxHQUFFO0FBQVUsU0FBT0E7QUFBQztBQUE2RyxTQUFTMkIsSUFBRTVCLElBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxNQUFJQyxJQUFFQyxJQUFFQyxJQUFFQyxLQUFFUCxHQUFFLEtBQUlRLEtBQUVSLEdBQUUsTUFBS1MsS0FBRVIsR0FBRUMsRUFBQyxHQUFFUSxLQUFFLFFBQU1ELE1BQUcsTUFBSSxJQUFFQSxHQUFFO0FBQUssTUFBRyxTQUFPQSxNQUFHLFFBQU1GLE1BQUdHLE1BQUdILE1BQUdFLEdBQUUsT0FBS0QsTUFBR0MsR0FBRSxLQUFLLFFBQU9QO0FBQUUsTUFBR0MsTUFBR08sS0FBRSxJQUFFO0FBQUcsU0FBSU4sS0FBRUYsS0FBRSxHQUFFRyxLQUFFSCxLQUFFLEdBQUVFLE1BQUcsS0FBR0MsS0FBRUosR0FBRSxTQUFRLEtBQUcsU0FBT1EsS0FBRVIsR0FBRUssS0FBRUYsTUFBRyxJQUFFQSxPQUFJQyxJQUFHLE1BQUksTUFBSSxJQUFFSSxHQUFFLFFBQU1GLE1BQUdFLEdBQUUsT0FBS0QsTUFBR0MsR0FBRSxLQUFLLFFBQU9IO0FBQUE7QUFBRTtBQUFRO0FBQUMsU0FBU3VCLElBQUU3QixJQUFFQyxJQUFFQyxJQUFFO0FBQUMsU0FBS0QsR0FBRSxDQUFDLElBQUVELEdBQUUsWUFBWUMsSUFBRSxRQUFNQyxLQUFFLEtBQUdBLEVBQUMsSUFBRUYsR0FBRUMsRUFBQyxJQUFFLFFBQU1DLEtBQUUsS0FBRyxZQUFVLE9BQU9BLE1BQUdZLElBQUUsS0FBS2IsRUFBQyxJQUFFQyxLQUFFQSxLQUFFO0FBQUk7QUFBQyxTQUFTNEIsSUFBRTlCLElBQUVDLElBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxNQUFJQyxJQUFFQztBQUFFLElBQUUsS0FBRyxXQUFTTCxHQUFFLEtBQUcsWUFBVSxPQUFPQyxHQUFFLENBQUFGLEdBQUUsTUFBTSxVQUFRRTtBQUFBLE9BQU07QUFBQyxRQUFHLFlBQVUsT0FBT0MsT0FBSUgsR0FBRSxNQUFNLFVBQVFHLEtBQUUsS0FBSUEsR0FBRSxNQUFJRixNQUFLRSxHQUFFLENBQUFELE1BQUdELE1BQUtDLE1BQUcyQixJQUFFN0IsR0FBRSxPQUFNQyxJQUFFLEVBQUU7QUFBRSxRQUFHQyxHQUFFLE1BQUlELE1BQUtDLEdBQUUsQ0FBQUMsTUFBR0QsR0FBRUQsRUFBQyxLQUFHRSxHQUFFRixFQUFDLEtBQUc0QixJQUFFN0IsR0FBRSxPQUFNQyxJQUFFQyxHQUFFRCxFQUFDLENBQUM7QUFBQSxFQUFDO0FBQUEsV0FBUyxPQUFLQSxHQUFFLENBQUMsS0FBRyxPQUFLQSxHQUFFLENBQUMsRUFBRSxDQUFBSSxLQUFFSixPQUFJQSxLQUFFQSxHQUFFLFFBQVFPLEtBQUUsSUFBSSxJQUFHRixLQUFFTCxHQUFFLGVBQWNBLEtBQUVLLE1BQUtOLE1BQUcsZ0JBQWNDLE1BQUcsZUFBYUEsS0FBRUssR0FBRSxNQUFNLENBQUMsSUFBRUwsR0FBRSxNQUFNLENBQUMsR0FBRUQsR0FBRSxNQUFJQSxHQUFFLElBQUUsQ0FBQSxJQUFJQSxHQUFFLEVBQUVDLEtBQUVJLEVBQUMsSUFBRUgsSUFBRUEsS0FBRUMsS0FBRUQsR0FBRSxJQUFFQyxHQUFFLEtBQUdELEdBQUUsSUFBRU8sS0FBRVQsR0FBRSxpQkFBaUJDLElBQUVJLEtBQUVNLE1BQUVELEtBQUVMLEVBQUMsS0FBR0wsR0FBRSxvQkFBb0JDLElBQUVJLEtBQUVNLE1BQUVELEtBQUVMLEVBQUM7QUFBQSxPQUFNO0FBQUMsUUFBRyxnQ0FBOEJELEdBQUUsQ0FBQUgsS0FBRUEsR0FBRSxRQUFRLGVBQWMsR0FBRyxFQUFFLFFBQVEsVUFBUyxHQUFHO0FBQUEsYUFBVSxXQUFTQSxNQUFHLFlBQVVBLE1BQUcsVUFBUUEsTUFBRyxVQUFRQSxNQUFHLFVBQVFBLE1BQUcsY0FBWUEsTUFBRyxjQUFZQSxNQUFHLGFBQVdBLE1BQUcsYUFBV0EsTUFBRyxVQUFRQSxNQUFHLGFBQVdBLE1BQUdBLE1BQUtELEdBQUUsS0FBRztBQUFDLE1BQUFBLEdBQUVDLEVBQUMsSUFBRSxRQUFNQyxLQUFFLEtBQUdBO0FBQUUsWUFBTTtBQUFBLElBQUMsU0FBT0YsSUFBRTtBQUFBLElBQUM7QUFBQyxrQkFBWSxPQUFPRSxPQUFJLFFBQU1BLE1BQUcsVUFBS0EsTUFBRyxPQUFLRCxHQUFFLENBQUMsSUFBRUQsR0FBRSxnQkFBZ0JDLEVBQUMsSUFBRUQsR0FBRSxhQUFhQyxJQUFFLGFBQVdBLE1BQUcsS0FBR0MsS0FBRSxLQUFHQSxFQUFDO0FBQUEsRUFBRTtBQUFDO0FBQUMsU0FBUyxFQUFFRixJQUFFO0FBQUMsU0FBTyxTQUFTRSxJQUFFO0FBQUMsUUFBRyxLQUFLLEdBQUU7QUFBQyxVQUFJQyxLQUFFLEtBQUssRUFBRUQsR0FBRSxPQUFLRixFQUFDO0FBQUUsVUFBRyxRQUFNRSxHQUFFLEVBQUUsQ0FBQUEsR0FBRSxJQUFFTztBQUFBQSxlQUFZUCxHQUFFLElBQUVDLEdBQUUsRUFBRTtBQUFPLGFBQU9BLEdBQUVGLElBQUUsUUFBTUEsSUFBRSxNQUFNQyxFQUFDLElBQUVBLEVBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDO0FBQUMsU0FBU3NCLElBQUV4QixJQUFFRSxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsTUFBSUMsSUFBRWMsSUFBRWIsSUFBRUUsSUFBRUksSUFBRUMsSUFBRU8sSUFBRUosSUFBRUMsSUFBRVEsSUFBRUMsSUFBRUMsSUFBRU4sSUFBRU8sSUFBRSxHQUFFTixLQUFFMUIsR0FBRTtBQUFLLE1BQUcsV0FBU0EsR0FBRSxZQUFZLFFBQU87QUFBSyxRQUFJQyxHQUFFLFFBQU1NLEtBQUUsQ0FBQyxFQUFFLEtBQUdOLEdBQUUsTUFBS0csS0FBRSxDQUFDRSxLQUFFTixHQUFFLE1BQUlDLEdBQUUsR0FBRyxLQUFJUSxLQUFFVixJQUFFLFFBQU1VLEdBQUVULEVBQUM7QUFBRSxJQUFFLEtBQUcsY0FBWSxPQUFPMEIsR0FBRSxLQUFHO0FBQUMsUUFBR04sS0FBRXBCLEdBQUUsT0FBTXFCLEtBQUUsZUFBY0ssTUFBR0EsR0FBRSxVQUFVLFFBQU9HLE1BQUdwQixLQUFFaUIsR0FBRSxnQkFBY3hCLEdBQUVPLEdBQUUsR0FBRyxHQUFFcUIsS0FBRXJCLEtBQUVvQixLQUFFQSxHQUFFLE1BQU0sUUFBTXBCLEdBQUUsS0FBR1AsSUFBRUQsR0FBRSxNQUFJdUIsTUFBR0QsS0FBRXZCLEdBQUUsTUFBSUMsR0FBRSxLQUFLLEtBQUdzQixHQUFFLE9BQUtGLEtBQUVyQixHQUFFLE1BQUl1QixLQUFFLElBQUlHLEdBQUVOLElBQUVVLEVBQUMsS0FBRzlCLEdBQUUsTUFBSXVCLEtBQUUsSUFBSUosSUFBRUMsSUFBRVUsRUFBQyxHQUFFUCxHQUFFLGNBQVlHLElBQUVILEdBQUUsU0FBTyxJQUFHTSxNQUFHQSxHQUFFLElBQUlOLEVBQUMsR0FBRUEsR0FBRSxVQUFRQSxHQUFFLFFBQU0sQ0FBQSxJQUFJQSxHQUFFLE1BQUlyQixJQUFFUSxLQUFFYSxHQUFFLE1BQUksTUFBR0EsR0FBRSxNQUFJLENBQUEsR0FBR0EsR0FBRSxNQUFJLEtBQUlGLE1BQUcsUUFBTUUsR0FBRSxRQUFNQSxHQUFFLE1BQUlBLEdBQUUsUUFBT0YsTUFBRyxRQUFNSyxHQUFFLDZCQUEyQkgsR0FBRSxPQUFLQSxHQUFFLFVBQVFBLEdBQUUsTUFBSVQsSUFBRSxDQUFBLEdBQUdTLEdBQUUsR0FBRyxJQUFHVCxJQUFFUyxHQUFFLEtBQUlHLEdBQUUseUJBQXlCTixJQUFFRyxHQUFFLEdBQUcsQ0FBQyxJQUFHWCxLQUFFVyxHQUFFLE9BQU1QLEtBQUVPLEdBQUUsT0FBTUEsR0FBRSxNQUFJdkIsSUFBRVUsR0FBRSxDQUFBVyxNQUFHLFFBQU1LLEdBQUUsNEJBQTBCLFFBQU1ILEdBQUUsc0JBQW9CQSxHQUFFLHNCQUFxQkYsTUFBRyxRQUFNRSxHQUFFLHFCQUFtQkEsR0FBRSxJQUFJLEtBQUtBLEdBQUUsaUJBQWlCO0FBQUEsU0FBTTtBQUFDLFVBQUdGLE1BQUcsUUFBTUssR0FBRSw0QkFBMEJOLE9BQUlSLE1BQUcsUUFBTVcsR0FBRSw2QkFBMkJBLEdBQUUsMEJBQTBCSCxJQUFFVSxFQUFDLEdBQUU5QixHQUFFLE9BQUtDLEdBQUUsT0FBSyxDQUFDc0IsR0FBRSxPQUFLLFFBQU1BLEdBQUUseUJBQXVCLFVBQUtBLEdBQUUsc0JBQXNCSCxJQUFFRyxHQUFFLEtBQUlPLEVBQUMsR0FBRTtBQUFDLFFBQUE5QixHQUFFLE9BQUtDLEdBQUUsUUFBTXNCLEdBQUUsUUFBTUgsSUFBRUcsR0FBRSxRQUFNQSxHQUFFLEtBQUlBLEdBQUUsTUFBSSxRQUFJdkIsR0FBRSxNQUFJQyxHQUFFLEtBQUlELEdBQUUsTUFBSUMsR0FBRSxLQUFJRCxHQUFFLElBQUksS0FBSyxTQUFTRixJQUFFO0FBQUMsVUFBQUEsT0FBSUEsR0FBRSxLQUFHRTtBQUFBLFFBQUUsQ0FBQyxHQUFFVyxJQUFFLEtBQUssTUFBTVksR0FBRSxLQUFJQSxHQUFFLEdBQUcsR0FBRUEsR0FBRSxNQUFJLENBQUEsR0FBR0EsR0FBRSxJQUFJLFVBQVFsQixHQUFFLEtBQUtrQixFQUFDO0FBQUUsY0FBTTtBQUFBLE1BQUM7QUFBQyxjQUFNQSxHQUFFLHVCQUFxQkEsR0FBRSxvQkFBb0JILElBQUVHLEdBQUUsS0FBSU8sRUFBQyxHQUFFVCxNQUFHLFFBQU1FLEdBQUUsc0JBQW9CQSxHQUFFLElBQUksS0FBSyxXQUFVO0FBQUMsUUFBQUEsR0FBRSxtQkFBbUJYLElBQUVJLElBQUVDLEVBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBR00sR0FBRSxVQUFRTyxJQUFFUCxHQUFFLFFBQU1ILElBQUVHLEdBQUUsTUFBSXpCLElBQUV5QixHQUFFLE1BQUksT0FBR1EsS0FBRWhDLElBQUUsS0FBSTBCLEtBQUUsR0FBRUosR0FBRSxDQUFBRSxHQUFFLFFBQU1BLEdBQUUsS0FBSUEsR0FBRSxNQUFJLE9BQUdRLE1BQUdBLEdBQUUvQixFQUFDLEdBQUVTLEtBQUVjLEdBQUUsT0FBT0EsR0FBRSxPQUFNQSxHQUFFLE9BQU1BLEdBQUUsT0FBTyxHQUFFWixJQUFFLEtBQUssTUFBTVksR0FBRSxLQUFJQSxHQUFFLEdBQUcsR0FBRUEsR0FBRSxNQUFJLENBQUE7QUFBQSxRQUFRLElBQUU7QUFBQyxNQUFBQSxHQUFFLE1BQUksT0FBR1EsTUFBR0EsR0FBRS9CLEVBQUMsR0FBRVMsS0FBRWMsR0FBRSxPQUFPQSxHQUFFLE9BQU1BLEdBQUUsT0FBTUEsR0FBRSxPQUFPLEdBQUVBLEdBQUUsUUFBTUEsR0FBRTtBQUFBLElBQUcsU0FBT0EsR0FBRSxPQUFLLEVBQUVFLEtBQUU7QUFBSSxJQUFBRixHQUFFLFFBQU1BLEdBQUUsS0FBSSxRQUFNQSxHQUFFLG9CQUFrQnJCLEtBQUVZLElBQUVBLElBQUUsQ0FBQSxHQUFHWixFQUFDLEdBQUVxQixHQUFFLGdCQUFlLENBQUUsSUFBR0YsTUFBRyxDQUFDWCxNQUFHLFFBQU1hLEdBQUUsNEJBQTBCTixLQUFFTSxHQUFFLHdCQUF3QlgsSUFBRUksRUFBQyxJQUFHZ0IsS0FBRSxRQUFNdkIsTUFBR0EsR0FBRSxTQUFPUyxPQUFHLFFBQU1ULEdBQUUsTUFBSXdCLElBQUV4QixHQUFFLE1BQU0sUUFBUSxJQUFFQSxJQUFFSCxLQUFFLEVBQUVSLElBQUVlLElBQUVtQixFQUFDLElBQUVBLEtBQUUsQ0FBQ0EsRUFBQyxHQUFFaEMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRUMsRUFBQyxHQUFFZSxHQUFFLE9BQUt2QixHQUFFLEtBQUlBLEdBQUUsT0FBSyxNQUFLdUIsR0FBRSxJQUFJLFVBQVFsQixHQUFFLEtBQUtrQixFQUFDLEdBQUVDLE9BQUlELEdBQUUsTUFBSUEsR0FBRSxLQUFHO0FBQUEsRUFBSyxTQUFPekIsSUFBRTtBQUFDLFFBQUdFLEdBQUUsTUFBSSxNQUFLTyxNQUFHLFFBQU1ILEdBQUUsS0FBR04sR0FBRSxNQUFLO0FBQUMsV0FBSUUsR0FBRSxPQUFLTyxLQUFFLE1BQUksS0FBSUQsTUFBRyxLQUFHQSxHQUFFLFlBQVVBLEdBQUUsY0FBYSxDQUFBQSxLQUFFQSxHQUFFO0FBQVksTUFBQUYsR0FBRUEsR0FBRSxRQUFRRSxFQUFDLENBQUMsSUFBRSxNQUFLTixHQUFFLE1BQUlNO0FBQUEsSUFBQyxPQUFLO0FBQUMsV0FBSSxJQUFFRixHQUFFLFFBQU8sTUFBS1csS0FBRVgsR0FBRSxDQUFDLENBQUM7QUFBRSxRQUFFSixFQUFDO0FBQUEsSUFBQztBQUFBLFFBQU0sQ0FBQUEsR0FBRSxNQUFJQyxHQUFFLEtBQUlELEdBQUUsTUFBSUMsR0FBRSxLQUFJSCxHQUFFLFFBQU0sRUFBRUUsRUFBQztBQUFFRCxRQUFFLElBQUlELElBQUVFLElBQUVDLEVBQUM7QUFBQSxFQUFDO0FBQUEsTUFBTSxTQUFNRyxNQUFHSixHQUFFLE9BQUtDLEdBQUUsT0FBS0QsR0FBRSxNQUFJQyxHQUFFLEtBQUlELEdBQUUsTUFBSUMsR0FBRSxPQUFLSyxLQUFFTixHQUFFLE1BQUlrQyxJQUFFakMsR0FBRSxLQUFJRCxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFRSxJQUFFQyxFQUFDO0FBQUUsVUFBT0MsS0FBRVYsSUFBRSxXQUFTVSxHQUFFVCxFQUFDLEdBQUUsTUFBSUEsR0FBRSxNQUFJLFNBQU9NO0FBQUM7QUFBQyxTQUFTLEVBQUVSLElBQUU7QUFBQyxFQUFBQSxPQUFJQSxHQUFFLFFBQU1BLEdBQUUsSUFBSSxNQUFJLE9BQUlBLEdBQUUsT0FBS0EsR0FBRSxJQUFJLEtBQUssQ0FBQztBQUFFO0FBQUMsU0FBUyxFQUFFQSxJQUFFRSxJQUFFQyxJQUFFO0FBQUMsV0FBUUMsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLEtBQUksR0FBRUQsR0FBRUMsRUFBQyxHQUFFRCxHQUFFLEVBQUVDLEVBQUMsR0FBRUQsR0FBRSxFQUFFQyxFQUFDLENBQUM7QUFBRUgsTUFBRSxPQUFLQSxJQUFFLElBQUlDLElBQUVGLEVBQUMsR0FBRUEsR0FBRSxLQUFLLFNBQVNFLElBQUU7QUFBQyxRQUFHO0FBQUMsTUFBQUYsS0FBRUUsR0FBRSxLQUFJQSxHQUFFLE1BQUksQ0FBQSxHQUFHRixHQUFFLEtBQUssU0FBU0EsSUFBRTtBQUFDLFFBQUFBLEdBQUUsS0FBS0UsRUFBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUMsU0FBT0YsSUFBRTtBQUFDQyxVQUFFLElBQUlELElBQUVFLEdBQUUsR0FBRztBQUFBLElBQUM7QUFBQSxFQUFDLENBQUM7QUFBQztBQUFDLFNBQVNpQyxJQUFFbkMsSUFBRTtBQUFDLFNBQU0sWUFBVSxPQUFPQSxNQUFHLFFBQU1BLE1BQUdBLEdBQUUsTUFBSSxJQUFFQSxLQUFFZSxJQUFFZixFQUFDLElBQUVBLEdBQUUsSUFBSW1DLEdBQUMsSUFBRW5CLElBQUUsQ0FBQSxHQUFHaEIsRUFBQztBQUFDO0FBQUMsU0FBU29DLElBQUVsQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsTUFBSUMsSUFBRWMsSUFBRVosSUFBRUMsSUFBRUUsSUFBRUUsSUFBRUMsSUFBRU8sS0FBRXRCLEdBQUUsU0FBT1EsS0FBRVEsS0FBRWpCLEdBQUUsT0FBTWtCLEtBQUVsQixHQUFFO0FBQUssTUFBRyxTQUFPa0IsS0FBRWYsS0FBRSwrQkFBNkIsVUFBUWUsS0FBRWYsS0FBRSx1Q0FBcUNBLE9BQUlBLEtBQUUsaUNBQWdDLFFBQU1DO0FBQUUsU0FBSUksS0FBRSxHQUFFQSxLQUFFSixHQUFFLFFBQU9JLEtBQUksTUFBSUssS0FBRVQsR0FBRUksRUFBQyxNQUFJLGtCQUFpQkssTUFBRyxDQUFDLENBQUNLLE9BQUlBLEtBQUVMLEdBQUUsYUFBV0ssS0FBRSxLQUFHTCxHQUFFLFdBQVU7QUFBQyxNQUFBZCxLQUFFYyxJQUFFVCxHQUFFSSxFQUFDLElBQUU7QUFBSztBQUFBLElBQUs7QUFBQTtBQUFDLE1BQUcsUUFBTVQsSUFBRTtBQUFDLFFBQUcsUUFBTW1CLEdBQUUsUUFBTyxTQUFTLGVBQWVELEVBQUM7QUFBRSxJQUFBbEIsS0FBRSxTQUFTLGdCQUFnQkksSUFBRWUsSUFBRUQsR0FBRSxNQUFJQSxFQUFDLEdBQUVYLE9BQUlSLElBQUUsT0FBS0EsSUFBRSxJQUFJRSxJQUFFSSxFQUFDLEdBQUVFLEtBQUUsUUFBSUYsS0FBRTtBQUFBLEVBQUk7QUFBQyxNQUFHLFFBQU1jLEdBQUUsQ0FBQUssT0FBSU4sTUFBR1gsTUFBR1AsR0FBRSxRQUFNa0IsT0FBSWxCLEdBQUUsT0FBS2tCO0FBQUEsT0FBTztBQUFDLFFBQUdiLEtBQUVBLE1BQUdQLElBQUUsS0FBS0UsR0FBRSxVQUFVLEdBQUUsQ0FBQ08sTUFBRyxRQUFNRixHQUFFLE1BQUltQixLQUFFLENBQUEsR0FBR2YsS0FBRSxHQUFFQSxLQUFFVCxHQUFFLFdBQVcsUUFBT1MsS0FBSSxDQUFBZSxJQUFHVixLQUFFZCxHQUFFLFdBQVdTLEVBQUMsR0FBRyxJQUFJLElBQUVLLEdBQUU7QUFBTSxTQUFJTCxNQUFLZSxHQUFFLENBQUFWLEtBQUVVLEdBQUVmLEVBQUMsR0FBRSw2QkFBMkJBLEtBQUVFLEtBQUVHLEtBQUUsY0FBWUwsTUFBR0EsTUFBS1MsTUFBRyxXQUFTVCxNQUFHLGtCQUFpQlMsTUFBRyxhQUFXVCxNQUFHLG9CQUFtQlMsTUFBR1UsSUFBRTVCLElBQUVTLElBQUUsTUFBS0ssSUFBRVYsRUFBQztBQUFFLFNBQUlLLE1BQUtTLEdBQUUsQ0FBQUosS0FBRUksR0FBRVQsRUFBQyxHQUFFLGNBQVlBLEtBQUVHLEtBQUVFLEtBQUUsNkJBQTJCTCxLQUFFYyxLQUFFVCxLQUFFLFdBQVNMLEtBQUVPLEtBQUVGLEtBQUUsYUFBV0wsS0FBRVEsS0FBRUgsS0FBRVAsTUFBRyxjQUFZLE9BQU9PLE1BQUdVLEdBQUVmLEVBQUMsTUFBSUssTUFBR2MsSUFBRTVCLElBQUVTLElBQUVLLElBQUVVLEdBQUVmLEVBQUMsR0FBRUwsRUFBQztBQUFFLFFBQUdtQixHQUFFLENBQUFoQixNQUFHSSxPQUFJWSxHQUFFLFVBQVFaLEdBQUUsVUFBUVksR0FBRSxVQUFRdkIsR0FBRSxlQUFhQSxHQUFFLFlBQVV1QixHQUFFLFNBQVF0QixHQUFFLE1BQUksQ0FBQTtBQUFBLGFBQVdVLE9BQUlYLEdBQUUsWUFBVSxLQUFJLEVBQUUsY0FBWUMsR0FBRSxPQUFLRCxHQUFFLFVBQVFBLElBQUVhLElBQUVELEVBQUMsSUFBRUEsS0FBRSxDQUFDQSxFQUFDLEdBQUVYLElBQUVDLElBQUVDLElBQUUsbUJBQWlCZ0IsS0FBRSxpQ0FBK0JmLElBQUVDLElBQUVDLElBQUVELEtBQUVBLEdBQUUsQ0FBQyxJQUFFSCxHQUFFLE9BQUtrQixJQUFFbEIsSUFBRSxDQUFDLEdBQUVLLElBQUVDLEVBQUMsR0FBRSxRQUFNSCxHQUFFLE1BQUlJLEtBQUVKLEdBQUUsUUFBT0ksT0FBS00sS0FBRVYsR0FBRUksRUFBQyxDQUFDO0FBQUUsSUFBQUYsT0FBSUUsS0FBRSxTQUFRLGNBQVlVLE1BQUcsUUFBTUgsS0FBRWhCLEdBQUUsZ0JBQWdCLE9BQU8sSUFBRSxRQUFNZ0IsT0FBSUEsT0FBSWhCLEdBQUVTLEVBQUMsS0FBRyxjQUFZVSxNQUFHLENBQUNILE1BQUcsWUFBVUcsTUFBR0gsTUFBR1EsR0FBRWYsRUFBQyxNQUFJbUIsSUFBRTVCLElBQUVTLElBQUVPLElBQUVRLEdBQUVmLEVBQUMsR0FBRUwsRUFBQyxHQUFFSyxLQUFFLFdBQVUsUUFBTVEsTUFBR0EsTUFBR2pCLEdBQUVTLEVBQUMsS0FBR21CLElBQUU1QixJQUFFUyxJQUFFUSxJQUFFTyxHQUFFZixFQUFDLEdBQUVMLEVBQUM7QUFBQSxFQUFFO0FBQUMsU0FBT0o7QUFBQztBQUFDLFNBQVMsRUFBRUYsSUFBRUUsSUFBRUMsSUFBRTtBQUFDLE1BQUc7QUFBQyxRQUFHLGNBQVksT0FBT0gsSUFBRTtBQUFDLFVBQUlJLEtBQUUsY0FBWSxPQUFPSixHQUFFO0FBQUksTUFBQUksTUFBR0osR0FBRSxJQUFHLEdBQUdJLE1BQUcsUUFBTUYsT0FBSUYsR0FBRSxNQUFJQSxHQUFFRSxFQUFDO0FBQUEsSUFBRSxNQUFNLENBQUFGLEdBQUUsVUFBUUU7QUFBQSxFQUFDLFNBQU9GLElBQUU7QUFBQ0MsUUFBRSxJQUFJRCxJQUFFRyxFQUFDO0FBQUEsRUFBQztBQUFDO0FBQUMsU0FBUyxFQUFFSCxJQUFFRSxJQUFFQyxJQUFFO0FBQUMsTUFBSUMsSUFBRUM7QUFBRSxNQUFHSixJQUFFLFdBQVNBLElBQUUsUUFBUUQsRUFBQyxJQUFHSSxLQUFFSixHQUFFLFNBQU9JLEdBQUUsV0FBU0EsR0FBRSxXQUFTSixHQUFFLE9BQUssRUFBRUksSUFBRSxNQUFLRixFQUFDLElBQUcsU0FBT0UsS0FBRUosR0FBRSxNQUFLO0FBQUMsUUFBR0ksR0FBRSxxQkFBcUIsS0FBRztBQUFDLE1BQUFBLEdBQUUscUJBQW9CO0FBQUEsSUFBRSxTQUFPSixJQUFFO0FBQUNDLFVBQUUsSUFBSUQsSUFBRUUsRUFBQztBQUFBLElBQUM7QUFBQyxJQUFBRSxHQUFFLE9BQUtBLEdBQUUsTUFBSTtBQUFBLEVBQUk7QUFBQyxNQUFHQSxLQUFFSixHQUFFLElBQUksTUFBSUssS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DLEtBQUksQ0FBQUQsR0FBRUMsRUFBQyxLQUFHLEVBQUVELEdBQUVDLEVBQUMsR0FBRUgsSUFBRUMsTUFBRyxjQUFZLE9BQU9ILEdBQUUsSUFBSTtBQUFFLEVBQUFHLE1BQUdjLElBQUVqQixHQUFFLEdBQUcsR0FBRUEsR0FBRSxNQUFJQSxHQUFFLEtBQUdBLEdBQUUsTUFBSTtBQUFNO0FBQUMsU0FBUyxFQUFFQSxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsU0FBTyxLQUFLLFlBQVlGLElBQUVFLEVBQUM7QUFBQztBQUFDLFNBQVMsRUFBRUEsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLE1BQUlDLElBQUVDLElBQUVDLElBQUVDO0FBQUUsRUFBQUwsTUFBRyxhQUFXQSxLQUFFLFNBQVMsa0JBQWlCRixJQUFFLE1BQUlBLElBQUUsR0FBR0MsSUFBRUMsRUFBQyxHQUFFRyxNQUFHRCxLQUFFLFNBQXNCLE9BQWVGLEdBQUUsS0FBSUksS0FBRSxDQUFBLEdBQUdDLEtBQUUsSUFBR2dCLElBQUVyQixJQUFFRCxLQUFVQyxHQUFHLE1BQUllLElBQUVFLEtBQUUsTUFBSyxDQUFDbEIsRUFBQyxDQUFDLEdBQUVJLE1BQUdNLEtBQUVBLEtBQUVULEdBQUUsY0FBdUJHLEtBQUUsT0FBS0gsR0FBRSxhQUFXSCxJQUFFLEtBQUtHLEdBQUUsVUFBVSxJQUFFLE1BQUtJLElBQVVELEtBQUVBLEdBQUUsTUFBSUgsR0FBRSxZQUFXRSxJQUFFRyxFQUFDLEdBQUUsRUFBRUQsSUFBRUwsSUFBRU0sRUFBQztBQUFDO0FBQXkxQlIsTUFBRWEsSUFBRSxPQUFNWixNQUFFLEVBQUMsS0FBSSxTQUFTRCxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsV0FBUUMsSUFBRUMsSUFBRUMsSUFBRUwsS0FBRUEsR0FBRSxLQUFJLE1BQUlHLEtBQUVILEdBQUUsUUFBTSxDQUFDRyxHQUFFLEdBQUcsS0FBRztBQUFDLFNBQUlDLEtBQUVELEdBQUUsZ0JBQWMsUUFBTUMsR0FBRSw2QkFBMkJELEdBQUUsU0FBU0MsR0FBRSx5QkFBeUJMLEVBQUMsQ0FBQyxHQUFFTSxLQUFFRixHQUFFLE1BQUssUUFBTUEsR0FBRSxzQkFBb0JBLEdBQUUsa0JBQWtCSixJQUFFRyxNQUFHLENBQUEsQ0FBRSxHQUFFRyxLQUFFRixHQUFFLE1BQUtFLEdBQUUsUUFBT0YsR0FBRSxNQUFJQTtBQUFBLEVBQUMsU0FBT0gsSUFBRTtBQUFDLElBQUFELEtBQUVDO0FBQUEsRUFBQztBQUFDLFFBQU1EO0FBQUMsRUFBQyxHQUFFRSxNQUFFLEdBQUVDLE1BQUUsU0FBU0gsSUFBRTtBQUFDLFNBQU8sUUFBTUEsTUFBRyxXQUFTQSxHQUFFO0FBQVcsR0FBRXFCLElBQUUsVUFBVSxXQUFTLFNBQVNyQixJQUFFQyxJQUFFO0FBQUMsTUFBSUM7QUFBRSxFQUFBQSxLQUFFLFFBQU0sS0FBSyxPQUFLLEtBQUssT0FBSyxLQUFLLFFBQU0sS0FBSyxNQUFJLEtBQUssTUFBSWMsSUFBRSxDQUFBLEdBQUcsS0FBSyxLQUFLLEdBQUUsY0FBWSxPQUFPaEIsT0FBSUEsS0FBRUEsR0FBRWdCLElBQUUsQ0FBQSxHQUFHZCxFQUFDLEdBQUUsS0FBSyxLQUFLLElBQUdGLE1BQUdnQixJQUFFZCxJQUFFRixFQUFDLEdBQUUsUUFBTUEsTUFBRyxLQUFLLFFBQU1DLE1BQUcsS0FBSyxJQUFJLEtBQUtBLEVBQUMsR0FBRSxFQUFFLElBQUk7QUFBRSxHQUFFb0IsSUFBRSxVQUFVLGNBQVksU0FBU3JCLElBQUU7QUFBQyxPQUFLLFFBQU0sS0FBSyxNQUFJLE1BQUdBLE1BQUcsS0FBSyxJQUFJLEtBQUtBLEVBQUMsR0FBRSxFQUFFLElBQUk7QUFBRSxHQUFFcUIsSUFBRSxVQUFVLFNBQU9ELEtBQUVoQixNQUFFLENBQUEsR0FBR0UsTUFBRSxjQUFZLE9BQU8sVUFBUSxRQUFRLFVBQVUsS0FBSyxLQUFLLFFBQVEsUUFBTyxDQUFFLElBQUUsWUFBV0MsTUFBRSxTQUFTUCxJQUFFQyxJQUFFO0FBQUMsU0FBT0QsR0FBRSxJQUFJLE1BQUlDLEdBQUUsSUFBSTtBQUFHLEdBQUUsRUFBRSxNQUFJLEdBQUVPLE1BQUUsK0JBQThCQyxNQUFFLEdBQUVDLE1BQUUsRUFBRSxLQUFFLEdBQUVDLE1BQUUsRUFBRSxJQUFFO0FDQTU4VixJQUFJWCxNQUFFLFNBQVNHLElBQUVPLElBQUVMLElBQUVFLElBQUU7QUFBQyxNQUFJTDtBQUFFLEVBQUFRLEdBQUUsQ0FBQyxJQUFFO0FBQUUsV0FBUWUsS0FBRSxHQUFFQSxLQUFFZixHQUFFLFFBQU9lLE1BQUk7QUFBQyxRQUFJYixLQUFFRixHQUFFZSxJQUFHLEdBQUVkLEtBQUVELEdBQUVlLEVBQUMsS0FBR2YsR0FBRSxDQUFDLEtBQUdFLEtBQUUsSUFBRSxHQUFFUCxHQUFFSyxHQUFFZSxJQUFHLENBQUMsS0FBR2YsR0FBRSxFQUFFZSxFQUFDO0FBQUUsVUFBSWIsS0FBRUwsR0FBRSxDQUFDLElBQUVJLEtBQUUsTUFBSUMsS0FBRUwsR0FBRSxDQUFDLElBQUUsT0FBTyxPQUFPQSxHQUFFLENBQUMsS0FBRyxDQUFBLEdBQUdJLEVBQUMsSUFBRSxNQUFJQyxNQUFHTCxHQUFFLENBQUMsSUFBRUEsR0FBRSxDQUFDLEtBQUcsSUFBSUcsR0FBRSxFQUFFZSxFQUFDLENBQUMsSUFBRWQsS0FBRSxNQUFJQyxLQUFFTCxHQUFFLENBQUMsRUFBRUcsR0FBRSxFQUFFZSxFQUFDLENBQUMsS0FBR2QsS0FBRSxLQUFHQyxNQUFHVixLQUFFQyxHQUFFLE1BQU1RLElBQUVYLElBQUVHLElBQUVRLElBQUVOLElBQUUsQ0FBQyxJQUFHLElBQUksQ0FBQyxDQUFDLEdBQUVFLEdBQUUsS0FBS0wsRUFBQyxHQUFFUyxHQUFFLENBQUMsSUFBRUQsR0FBRSxDQUFDLEtBQUcsS0FBR0EsR0FBRWUsS0FBRSxDQUFDLElBQUUsR0FBRWYsR0FBRWUsRUFBQyxJQUFFdkIsT0FBSUssR0FBRSxLQUFLSSxFQUFDO0FBQUEsRUFBQztBQUFDLFNBQU9KO0FBQUMsR0FBRUosTUFBRSxvQkFBSTtBQUFtQixTQUFBLElBQVNPLElBQUU7QUFBQyxNQUFJTCxLQUFFRixJQUFFLElBQUksSUFBSTtBQUFFLFNBQU9FLE9BQUlBLEtBQUUsb0JBQUksT0FBSUYsSUFBRSxJQUFJLE1BQUtFLEVBQUMsS0FBSUEsS0FBRUwsSUFBRSxNQUFLSyxHQUFFLElBQUlLLEVBQUMsTUFBSUwsR0FBRSxJQUFJSyxJQUFFTCxNQUFFLFNBQVNMLElBQUU7QUFBQyxhQUFRRyxJQUFFTyxJQUFFTCxLQUFFLEdBQUVFLEtBQUUsSUFBR0wsS0FBRSxJQUFHdUIsS0FBRSxDQUFDLENBQUMsR0FBRWIsS0FBRSxTQUFTWixJQUFFO0FBQUMsWUFBSUssT0FBSUwsT0FBSU8sS0FBRUEsR0FBRSxRQUFRLHdCQUF1QixFQUFFLE1BQUlrQixHQUFFLEtBQUssR0FBRXpCLElBQUVPLEVBQUMsSUFBRSxNQUFJRixPQUFJTCxNQUFHTyxPQUFJa0IsR0FBRSxLQUFLLEdBQUV6QixJQUFFTyxFQUFDLEdBQUVGLEtBQUUsS0FBRyxNQUFJQSxNQUFHLFVBQVFFLE1BQUdQLEtBQUV5QixHQUFFLEtBQUssR0FBRXpCLElBQUUsQ0FBQyxJQUFFLE1BQUlLLE1BQUdFLE1BQUcsQ0FBQ1AsS0FBRXlCLEdBQUUsS0FBSyxHQUFFLEdBQUUsTUFBR2xCLEVBQUMsSUFBRUYsTUFBRyxPQUFLRSxNQUFHLENBQUNQLE1BQUcsTUFBSUssUUFBS29CLEdBQUUsS0FBS3BCLElBQUUsR0FBRUUsSUFBRUcsRUFBQyxHQUFFTCxLQUFFLElBQUdMLE9BQUl5QixHQUFFLEtBQUtwQixJQUFFTCxJQUFFLEdBQUVVLEVBQUMsR0FBRUwsS0FBRSxLQUFJRSxLQUFFO0FBQUEsSUFBRSxHQUFFSSxLQUFFLEdBQUVBLEtBQUVYLEdBQUUsUUFBT1csTUFBSTtBQUFDLE1BQUFBLE9BQUksTUFBSU4sTUFBR08sR0FBQyxHQUFHQSxHQUFFRCxFQUFDO0FBQUcsZUFBUVYsS0FBRSxHQUFFQSxLQUFFRCxHQUFFVyxFQUFDLEVBQUUsUUFBT1YsS0FBSSxDQUFBRSxLQUFFSCxHQUFFVyxFQUFDLEVBQUVWLEVBQUMsR0FBRSxNQUFJSSxLQUFFLFFBQU1GLE1BQUdTLE1BQUlhLEtBQUUsQ0FBQ0EsRUFBQyxHQUFFcEIsS0FBRSxLQUFHRSxNQUFHSixLQUFFLE1BQUlFLEtBQUUsU0FBT0UsTUFBRyxRQUFNSixNQUFHRSxLQUFFLEdBQUVFLEtBQUUsTUFBSUEsS0FBRUosS0FBRUksR0FBRSxDQUFDLElBQUVMLEtBQUVDLE9BQUlELEtBQUVBLEtBQUUsS0FBR0ssTUFBR0osS0FBRSxRQUFNQSxNQUFHLFFBQU1BLEtBQUVELEtBQUVDLEtBQUUsUUFBTUEsTUFBR1MsR0FBQyxHQUFHUCxLQUFFLEtBQUdBLE9BQUksUUFBTUYsTUFBR0UsS0FBRSxHQUFFSyxLQUFFSCxJQUFFQSxLQUFFLE1BQUksUUFBTUosT0FBSUUsS0FBRSxLQUFHLFFBQU1MLEdBQUVXLEVBQUMsRUFBRVYsS0FBRSxDQUFDLE1BQUlXLEdBQUMsR0FBRyxNQUFJUCxPQUFJb0IsS0FBRUEsR0FBRSxDQUFDLElBQUdwQixLQUFFb0IsS0FBR0EsS0FBRUEsR0FBRSxDQUFDLEdBQUcsS0FBSyxHQUFFLEdBQUVwQixFQUFDLEdBQUVBLEtBQUUsS0FBRyxRQUFNRixNQUFHLFFBQU9BLE1BQUcsU0FBT0EsTUFBRyxTQUFPQSxNQUFHUyxHQUFDLEdBQUdQLEtBQUUsS0FBR0UsTUFBR0osS0FBRyxNQUFJRSxNQUFHLFVBQVFFLE9BQUlGLEtBQUUsR0FBRW9CLEtBQUVBLEdBQUUsQ0FBQztBQUFBLElBQUU7QUFBQyxXQUFPYixHQUFDLEdBQUdhO0FBQUEsRUFBQyxHQUFFZixFQUFDLENBQUMsR0FBRUwsS0FBRyxXQUFVLENBQUEsQ0FBRSxHQUFHLFNBQU8sSUFBRUEsS0FBRUEsR0FBRSxDQUFDO0FBQUM7QUNBcmtDLElBQUljLE1BQUVaLElBQUUsS0FBS0YsR0FBQztBQ0E5SCxJQUFJZ0MsY0FBWSxPQUFPO0FBQ3ZCLElBQUlDLFdBQVMsQ0FBQyxRQUFRLFVBQVVELFlBQVUsUUFBUSxRQUFRLEVBQUUsT0FBTyxjQUFjLE1BQU07QUFDdkYsU0FBUyxLQUFLLE9BQU8sYUFBYTtBQUNoQyxRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0osSUFBTTtBQUNKLFFBQU0sV0FBVyxJQUFJLElBQUksT0FBTztBQUNoQyxXQUFTLElBQUksc0JBQXNCO0FBQ25DLFFBQU0sTUFBTSxNQUFNLEtBQUssUUFBUTtBQUMvQixRQUFNLFdBQVc7QUFBQSxJQUNmLElBQUksU0FBUyxVQUFVLElBQUksT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLENBQUMsTUFBTTtBQUFBLElBQzFELFdBQVcsYUFBYTtBQUFBLElBQ3hCLFlBQVksY0FBYztBQUFBLElBQzFCLE9BQU8sU0FBUyxJQUFJLE1BQU07QUFBQSxJQUMxQixPQUFPLFFBQVEsSUFBSSxLQUFLO0FBQUEsSUFDeEIsV0FBVyxhQUFhLFFBQVEsTUFBTTtBQUFBLElBQ3RDO0FBQUEsSUFDQSxZQUFZLGVBQWUsU0FBUyxNQUFNO0FBQUEsSUFDMUM7QUFBQSxFQUNKLEVBQUksT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHO0FBQzFCLFNBQU8sT0FBTyxXQUFXLGNBQWMsb0JBQW9CLFdBQVcsY0FBYyxFQUFFO0FBQUEsc0JBQ2xFLFFBQVEsOEJBQThCLFdBQVc7QUFBQSwrQkFDeEMsV0FBVyxRQUFRO0FBQUEsd0NBQ1YsV0FBVztBQUFBO0FBRW5EO0FBQ0FDLFNBQU8sTUFBTSxNQUFNO0FDaENuQixJQUFJRCxjQUFZLE9BQU87QUFDdkIsSUFBSUMsV0FBUyxDQUFDLFFBQVEsVUFBVUQsWUFBVSxRQUFRLFFBQVEsRUFBRSxPQUFPLGNBQWMsTUFBTTtBQUN2RixTQUFTLGFBQWEsT0FBTztBQUMzQixTQUFPLE9BQU8sS0FBSyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUtqQixPQUFNO0FBQzNDLFVBQU0sUUFBUSxNQUFNQSxFQUFDO0FBQ3JCLFFBQUksQ0FBQyxNQUFPLFFBQU87QUFDbkIsUUFBSSxPQUFPLFVBQVUsV0FBVztBQUM5QixVQUFJLE1BQU8sU0FBUSxNQUFNLElBQUlBLEVBQUMsSUFBSSxLQUFJO0FBQ3RDLGFBQU87QUFBQSxJQUNUO0FBQ0EsUUFBSSxNQUFNLFFBQVEsS0FBSyxHQUFHO0FBQ3hCLGFBQU8sTUFBTSxJQUFJQSxFQUFDLEtBQUssTUFBTSxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQ3hDO0FBQ0EsWUFBUSxNQUFNLElBQUlBLEVBQUMsS0FBSyxLQUFLLEtBQUssS0FBSTtBQUFBLEVBQ3hDLEdBQUcsRUFBRTtBQUNQO0FBQ0FrQixTQUFPLGNBQWMsY0FBYztBQ2hCbkMsSUFBSUQsY0FBWSxPQUFPO0FBQ3ZCLElBQUlDLFdBQVMsQ0FBQyxRQUFRLFVBQVVELFlBQVUsUUFBUSxRQUFRLEVBQUUsT0FBTyxjQUFjLE1BQU07QUFFdkYsU0FBU0UsZUFBYSxRQUFRO0FBQzVCLFNBQU8sU0FBUyxjQUFjLE1BQU0sRUFBRSxnQkFBZ0IsT0FBTztBQUMvRDtBQUNBRCxTQUFPQyxnQkFBYyxjQUFjO0FBQ25DLFNBQVNDLFNBQU8sTUFBTSxTQUFTO0FBQzdCLE1BQUksQ0FBQyxPQUFRO0FBQ2IsTUFBSSxFQUFFLG9CQUFvQixRQUFTO0FBQ25DLE1BQUksQ0FBQ0QsZUFBYSxJQUFJLEdBQUc7QUFDdkIsV0FBTyxlQUFlLE9BQU8sTUFBTSxPQUFPO0FBQUEsRUFDNUM7QUFDRjtBQUNBRCxTQUFPRSxVQUFRLFFBQVE7QUFDWixTQUFTLGNBQWMsS0FBSyxRQUFRO0FBQ25DLFNBQVMsaUJBQWlCLEtBQUssUUFBUTtBQUNuRCxTQUFTLE1BQU0sSUFBSTlCLElBQUc7QUFDcEIsTUFBSSxDQUFDLEdBQUcsUUFBUyxNQUFLLEdBQUc7QUFDekIsU0FBTyxHQUFHLFFBQVFBLEVBQUMsSUFBSSxLQUFLLEdBQUcsUUFBUUEsRUFBQztBQUMxQztBQUNBNEIsU0FBTyxPQUFPLE9BQU87QUNyQnJCLElBQUlELGNBQVksT0FBTztBQUN2QixJQUFJQyxXQUFTLENBQUMsUUFBUSxVQUFVRCxZQUFVLFFBQVEsUUFBUSxFQUFFLE9BQU8sY0FBYyxNQUFNO0FBRXZGLE1BQU0sZ0JBQU4sTUFBTSxzQkFBcUIsT0FBTyxZQUFZO0FBQUEsRUFLNUMsTUFBTTtBQUFBLEVBQ04sT0FBTyxNQUFNLElBQUk7QUFDZixXQUFPSSxNQUFPLElBQUksS0FBSyxHQUFHO0FBQUEsRUFDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSwrQ0FBK0MsSUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU0vQyxtREFBbUQsSUFBQTtBQUFBLEVBQ25ELE9BQU8sT0FBTyxhQUFhOztBQUN6QixVQUFNLGdCQUFlQyxNQUFBLGNBQWMsY0FBYTtBQUFBLE1BSzlDLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFDUCxjQUFNLElBQUksTUFBTSw0Q0FBNEM7QUFBQSxNQUM5RDtBQUFBLElBQUEsR0FORUosU0FBT0ksS0FBTSxjQUFjLEdBRTdCLGNBSm1CQSxLQUlaLE9BQU0sY0FKTUE7QUFVckIsaUJBQWEsU0FBUyxXQUFXO0FBQy9CLGFBQU8sY0FBYSxPQUFPLEtBQUssSUFBSTtBQUFBLElBQ3RDO0FBQ0EsaUJBQWEsUUFBUSxTQUFTLFFBQVE7QUFDcEMsYUFBTyxjQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU07QUFBQSxJQUM3QztBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxPQUFPLFNBQVM7QUFDZCxXQUFPLEtBQUssS0FBSyxJQUFJO0FBQUEsRUFDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFZQSxNQUFNLHlCQUF5QixNQUFNLFVBQVUsVUFBVTtBQUN2RCxVQUFNLFVBQVUsS0FBSyxnQkFBZ0IsSUFBSSxFQUFFO0FBQzNDLFFBQUksU0FBUztBQUNYLFlBQU0sUUFBUSxLQUFLLE1BQU0sVUFBVSxRQUFRO0FBQUEsSUFDN0M7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFhQSxpQkFBaUIsTUFBTSxVQUFVLFNBQVM7QUFDeEMsUUFBSSxTQUFTLGNBQWEsTUFBTSxLQUFLLE1BQU0sR0FBRyxHQUFHO0FBQy9DLFdBQUssNkJBQTZCLElBQUksRUFBRSxVQUFVLFNBQVM7QUFBQSxJQUM3RCxXQUFXLFNBQVMsS0FBSztBQUN2QixVQUFJLFVBQVU7QUFDWixhQUFLLHlCQUF5QixJQUFJLEVBQUUsVUFBVSxTQUFTO0FBQUEsTUFDekQ7QUFBQSxJQUNGLE9BQU87QUFDTCxZQUFNLGlCQUFpQixNQUFNLFVBQVUsT0FBTztBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxtQ0FBbUMsT0FBTztBQUN4QyxRQUFJLEtBQUssNkJBQTZCLFNBQVMsR0FBRztBQUNoRDtBQUFBLElBQ0Y7QUFDQSxVQUFNLGdCQUFnQixLQUFLO0FBQzNCLFFBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssV0FBVyxHQUFHLGFBQWEsR0FBRyxHQUFHO0FBQ2pFO0FBQUEsSUFDRjtBQUNBLFNBQUssNkJBQTZCLFFBQVEsQ0FBQyxFQUFFLGVBQWU7QUFDMUQsVUFBSTtBQUNGLFlBQUksT0FBTyxhQUFhLFlBQVk7QUFDbEMsbUJBQVMsS0FBSyxNQUFNLEtBQUs7QUFBQSxRQUMzQixXQUFXLFlBQVksT0FBTyxTQUFTLGdCQUFnQixZQUFZO0FBQ2pFLG1CQUFTLFlBQVksS0FBSztBQUFBLFFBQzVCO0FBQUEsTUFDRixTQUFTLE9BQU87QUFDZCxnQkFBUTtBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsUUFBQTtBQUFBLE1BRUo7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLCtCQUErQixPQUFPO0FBQ3BDLFFBQUksS0FBSyx5QkFBeUIsU0FBUyxHQUFHO0FBQzVDO0FBQUEsSUFDRjtBQUNBLFNBQUsseUJBQXlCLFFBQVEsQ0FBQyxFQUFFLGVBQWU7QUFDdEQsVUFBSTtBQUNGLFlBQUksT0FBTyxhQUFhLFlBQVk7QUFDbEMsbUJBQVMsS0FBSyxNQUFNLEtBQUs7QUFBQSxRQUMzQixXQUFXLFlBQVksT0FBTyxTQUFTLGdCQUFnQixZQUFZO0FBQ2pFLG1CQUFTLFlBQVksS0FBSztBQUFBLFFBQzVCO0FBQUEsTUFDRixTQUFTLE9BQU87QUFDZCxnQkFBUSxNQUFNLDRDQUE0QyxLQUFLO0FBQUEsTUFDakU7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsU0FBSyxPQUFBO0FBQUEsRUFDUDtBQUFBLEVBQ0EsR0FBRyxVQUFVO0FBQ1gsV0FBTyxLQUFLLGNBQWMsUUFBUTtBQUFBLEVBQ3BDO0FBQUEsRUFDQSxJQUFJLFVBQVU7QUFDWixXQUFPLEtBQUssaUJBQWlCLFFBQVE7QUFBQSxFQUN2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsT0FBTyxNQUFNLFFBQVE7QUFDbkIsV0FBTyxVQUFVLEtBQUssS0FBSyxNQUFNO0FBQUEsRUFDbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQSxLQUFLLE1BQU0sT0FBTyxJQUFJO0FBQ3BCLFFBQUksU0FBUyxJQUFLLE9BQU0sSUFBSSxNQUFNLDZCQUE2QjtBQUMvRCxVQUFNLEVBQUUsVUFBVSxNQUFNLGFBQWEsTUFBTSxXQUFXO0FBQ3RELFVBQU0saUJBQWlCLEdBQUcsS0FBSyxHQUFHLElBQUksSUFBSTtBQUMxQyxVQUFNLFFBQVEsSUFBSSxZQUFZLGdCQUFnQjtBQUFBLE1BQzVDO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUFBLENBQ0Q7QUFDRCxVQUFNLFNBQVMsS0FBSyxjQUFjLEtBQUs7QUFDdkMsU0FBSyxtQ0FBbUMsS0FBSztBQUM3QyxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxjQUFjLE9BQU87QUFDbkIsVUFBTSxTQUFTLE1BQU0sY0FBYyxLQUFLO0FBQ3hDLFNBQUssK0JBQStCLEtBQUs7QUFDekMsV0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFNBQVMsTUFBTSxPQUFPLElBQUk7QUFDeEIsVUFBTSxRQUFRLElBQUksWUFBWSxNQUFNO0FBQUEsTUFDbEMsU0FBUyxLQUFLLFlBQVksU0FBUyxPQUFPLEtBQUs7QUFBQSxNQUMvQyxZQUFZLEtBQUssZUFBZSxTQUFTLE9BQU8sS0FBSztBQUFBLE1BQ3JELFFBQVEsS0FBSztBQUFBLElBQUEsQ0FDZDtBQUNELFdBQU8sS0FBSyxjQUFjLEtBQUs7QUFBQSxFQUNqQztBQUFBLEVBQ0EsR0FBRyxRQUFRLFNBQVMsU0FBUztBQUMzQixVQUFNLGFBQWEsY0FBYSxNQUFNLEtBQUssTUFBTSxNQUFNO0FBQ3ZELFNBQUssaUJBQWlCLFlBQVksU0FBUyxPQUFPO0FBQUEsRUFDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0Esb0JBQW9CLE1BQU0sVUFBVSxTQUFTO0FBQzNDLFFBQUksU0FBUyxjQUFhLE1BQU0sS0FBSyxNQUFNLEdBQUcsR0FBRztBQUMvQyxVQUFJLFlBQVksS0FBSyw4QkFBOEI7QUFDakQsbUJBQVcsU0FBUyxLQUFLLDhCQUE4QjtBQUNyRCxjQUFJLE1BQU0sYUFBYSxVQUFVO0FBQy9CLGlCQUFLLDZCQUE2QixPQUFPLEtBQUs7QUFDOUM7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLFdBQVcsU0FBUyxLQUFLO0FBQ3ZCLFVBQUksWUFBWSxLQUFLLDBCQUEwQjtBQUM3QyxtQkFBVyxTQUFTLEtBQUssMEJBQTBCO0FBQ2pELGNBQUksTUFBTSxhQUFhLFVBQVU7QUFDL0IsaUJBQUsseUJBQXlCLE9BQU8sS0FBSztBQUMxQztBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsT0FBTztBQUNMLFlBQU0sb0JBQW9CLE1BQU0sVUFBVSxPQUFPO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQ0Y7QUF6T0lKLFNBQU8sZUFBTSxjQUFjO0FBRTdCLGNBSkksZUFJRyxPQUFNO0FBSmYsSUFBTSxlQUFOO0FBNE9BLFNBQVMsVUFBVSxXQUFXLFFBQVE7QUFDcEMsU0FBTyxHQUFHLFNBQVMsSUFBSSxNQUFNO0FBQy9CO0FBQ0FBLFNBQU8sV0FBVyxXQUFXO0FBQzdCLFNBQVMsYUFBYSxRQUFRO0FBQzVCLFNBQU8sU0FBUyxjQUFjLE1BQU0sRUFBRSxnQkFBZ0IsT0FBTztBQUMvRDtBQUNBQSxTQUFPLGNBQWMsY0FBYztBQUNuQyxTQUFTLE9BQU8sTUFBTSxTQUFTO0FBQzdCLE1BQUksQ0FBQyxPQUFRO0FBQ2IsTUFBSSxFQUFFLG9CQUFvQixRQUFTO0FBQ25DLE1BQUksQ0FBQyxhQUFhLElBQUksR0FBRztBQUN2QixXQUFPLGVBQWUsT0FBTyxNQUFNLE9BQU87QUFBQSxFQUM1QztBQUNGO0FBQ0FBLFNBQU8sUUFBUSxRQUFRO0FDOVB2QixJQUFJRCxjQUFZLE9BQU87QUFDdkIsSUFBSUMsV0FBUyxDQUFDLFFBQVEsVUFBVUQsWUFBVSxRQUFRLFFBQVEsRUFBRSxPQUFPLGNBQWMsTUFBTTt5QkFFdkYsbUJBQThCLGFBQWEsT0FBTyxrQkFBa0IsRUFBRTtBQUFBLEVBT3BFO0FBQUEsRUFDQSxPQUFPLFNBQVM7QUFDZCxXQUFPLEdBQWdCLEtBQUssRUFBZTtBQUFBLEVBQzdDO0FBQUEsRUFDQSxjQUFjO0FBQ1osVUFBSztBQUNMLFVBQU0sV0FBVyxLQUFLLGFBQWEsVUFBVTtBQUM3QyxRQUFJLGFBQWEsTUFBTTtBQUNyQixpQkFBVyxNQUFNO0FBQ2YsYUFBSyxXQUFXO0FBQUEsTUFDbEIsR0FBRyxDQUFDO0FBQUEsSUFDTjtBQUNBLFNBQUssWUFBWSxLQUFLLGFBQWEsV0FBVyxNQUFNO0FBQ3BELFNBQUssY0FBYyxLQUFLLGFBQWEsVUFBVSxNQUFNO0FBQUEsRUFDdkQ7QUFBQSxFQUNBLElBQUksT0FBTztBQUNULFdBQU8sS0FBSyxRQUFRO0FBQUEsRUFDdEI7QUFBQSxFQUNBLElBQUksV0FBVztBQUNiLFdBQU8sQ0FBQyxDQUFDLEtBQUssUUFBUSxhQUFhLFVBQVU7QUFBQSxFQUMvQztBQUFBLEVBQ0EsSUFBSSxTQUFTLGVBQWU7QUFDMUIsUUFBSSxDQUFDLGVBQWU7QUFDbEIsV0FBSyxpQkFBaUIsVUFBVTtBQUNoQyxXQUFLLFFBQVEsYUFBYSxpQkFBaUIsT0FBTztBQUFBLElBQ3BELE9BQU87QUFDTCxXQUFLLFFBQVEsYUFBYSxZQUFZLEVBQUU7QUFDeEMsV0FBSyxRQUFRLGFBQWEsaUJBQWlCLE1BQU07QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLElBQUksT0FBTztBQUNULFdBQU8sS0FBSyxRQUFRLGFBQWEsTUFBTTtBQUFBLEVBQ3pDO0FBQUEsRUFDQSxJQUFJLFdBQVc7QUFDYixVQUFNakMsS0FBSSxLQUFLLFFBQVEsYUFBYSxVQUFVO0FBQzlDLFFBQUksQ0FBQ0EsR0FBRyxRQUFPO0FBQ2YsV0FBTyxTQUFTQSxFQUFDO0FBQUEsRUFDbkI7QUFBQSxFQUNBLElBQUksV0FBVztBQUNiLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUNBLElBQUksU0FBUyxPQUFPO0FBQ2xCLFFBQUksT0FBTztBQUNULFdBQUssVUFBVSxJQUFJLFVBQVU7QUFDN0IsV0FBSyxRQUFRLFVBQVUsSUFBSSxVQUFVO0FBQ3JDLFdBQUssUUFBUSxhQUFhLFlBQVksRUFBRTtBQUN4QyxXQUFLLGFBQWEsWUFBWSxFQUFFO0FBQUEsSUFDbEMsT0FBTztBQUNMLFdBQUssVUFBVSxPQUFPLFVBQVU7QUFDaEMsV0FBSyxRQUFRLFVBQVUsT0FBTyxVQUFVO0FBQ3hDLFdBQUssUUFBUSxnQkFBZ0IsVUFBVTtBQUN2QyxXQUFLLGdCQUFnQixVQUFVO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxJQUFJLEtBQUssT0FBTztBQUNkLFNBQUssY0FBYyxRQUFRLEtBQUs7QUFBQSxFQUNsQztBQUFBLEVBQ0EsSUFBSSxZQUFZO0FBQ2QsV0FBTyxDQUFDLENBQUMsS0FBSyxRQUFRLGFBQWEsV0FBVztBQUFBLEVBQ2hEO0FBQUEsRUFDQSxJQUFJLFVBQVUsT0FBTztBQUNuQixRQUFJLE9BQU87QUFDVCxXQUFLLGNBQWMsYUFBYSxLQUFLO0FBQUEsSUFDdkMsT0FBTztBQUNMLFdBQUssaUJBQWlCLFdBQVc7QUFBQSxJQUNuQztBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLGNBQWMsTUFBTSxPQUFPO0FBQ3pCLFFBQUksVUFBVSxPQUFPO0FBQ25CLFdBQUssaUJBQWlCLElBQUk7QUFDMUIsV0FBSyxRQUFRLGdCQUFnQixJQUFJO0FBQUEsSUFDbkMsT0FBTztBQUNMLFVBQUksVUFBVSxNQUFNO0FBQ2xCLGVBQU8sS0FBSyxRQUFRLGFBQWEsTUFBTSxFQUFFO0FBQUEsTUFDM0M7QUFDQSxVQUFJLFVBQVUsTUFBTTtBQUNsQixlQUFPLEtBQUssaUJBQWlCLElBQUk7QUFBQSxNQUNuQztBQUNBLFdBQUssUUFBUSxhQUFhLE1BQU0sS0FBSztBQUFBLElBQ3ZDO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsaUJBQWlCLE1BQU07QUFDckIsU0FBSyxnQkFBZ0IsSUFBSTtBQUN6QixTQUFLLFFBQVEsZ0JBQWdCLElBQUk7QUFBQSxFQUNuQztBQUFBLEVBQ0EsSUFBSSxTQUFTO0FBQ1gsV0FBTyxLQUFLLGNBQWMsUUFBUTtBQUFBLEVBQ3BDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLHVCQUF1QixXQUFXLFVBQVU7QUFDMUMsU0FBSyxjQUFjLGFBQWEsUUFBUTtBQUFBLEVBQzFDO0FBQUEsRUFDQSxzQkFBc0IsTUFBTSxVQUFVO0FBQ3BDLFNBQUssV0FBVyxhQUFhO0FBQzdCLFFBQUksYUFBYSxLQUFNLE1BQUssUUFBUSxnQkFBZ0IsVUFBVTtBQUFBLFFBQ3pELE1BQUssUUFBUSxhQUFhLFlBQVksS0FBSyxRQUFRO0FBQUEsRUFDMUQ7QUFBQSxFQUNBLHNCQUFzQmMsSUFBRyxVQUFVO0FBQ2pDLFFBQUksYUFBYSxNQUFNO0FBQ3JCLFdBQUssVUFBVSxJQUFJLFVBQVU7QUFDN0IsV0FBSyxRQUFRLFVBQVUsSUFBSSxVQUFVO0FBQ3JDLFdBQUssUUFBUSxhQUFhLFlBQVksRUFBRTtBQUN4QyxXQUFLLFFBQVEsYUFBYSxhQUFhLE1BQU07QUFBQSxJQUMvQyxPQUFPO0FBQ0wsV0FBSyxVQUFVLE9BQU8sVUFBVTtBQUNoQyxXQUFLLFFBQVEsVUFBVSxPQUFPLFVBQVU7QUFDeEMsV0FBSyxRQUFRLGdCQUFnQixVQUFVO0FBQ3ZDLFdBQUssUUFBUSxhQUFhLGFBQWEsT0FBTztBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUFBLEVBQ0Esb0JBQW9CO0FBQ2xCLFNBQUssT0FBTTtBQUNYLFNBQUssdUJBQXNCO0FBQUEsRUFDN0I7QUFBQSxFQUNBLHlCQUF5QjtBQUN2QixTQUFLLFFBQVEsaUJBQWlCLFdBQVcsQ0FBQ1gsT0FBTTtBQUM5QyxVQUFJQSxHQUFFLFFBQVEsT0FBT0EsR0FBRSxRQUFRLFNBQVM7QUFDdEMsUUFBQUEsR0FBRSxlQUFjO0FBQ2hCLGFBQUssUUFBUSxNQUFLO0FBQUEsTUFDcEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsRUFDVDtBQUNGLEdBN0lJK0IsU0FBTyxJQUFNLGlCQUFpQjtBQUdoQyxjQUxGLElBS1Msc0JBQXFCLENBQUMsYUFBYSxZQUFZLFVBQVUsSUFDaEUsY0FORixJQU1TLE9BQU0scUJBTmY7QUNIQSxJQUFJRCxhQUFZLE9BQU87QUFDdkIsSUFBSSxTQUFTLENBQUMsUUFBUSxVQUFVQSxXQUFVLFFBQVEsUUFBUSxFQUFFLE9BQU8sY0FBYyxNQUFNO0FBSXZGLE1BQU0sbUJBQU4sTUFBTSx5QkFBd0JNLGtCQUFxQjtBQUFBLEVBSWpELE9BQU8sU0FBUztBQUNkLFdBQU8saUJBQWdCLEtBQUssZ0JBQWU7QUFBQSxFQUM3QztBQUFBLEVBQ0Esb0JBQW9CO0FBQ2xCLFNBQUssT0FBTTtBQUNYLFNBQUssdUJBQXNCO0FBQUEsRUFDN0I7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ04sSUFBUTtBQUNKLFVBQU0sT0FBTyxLQUFLLGFBQWEsTUFBTTtBQUNyQyxVQUFNLFlBQVksS0FBSyxhQUFhLFlBQVk7QUFDaEQsVUFBTSxXQUFXLEtBQUssYUFBYSxVQUFVLE1BQU07QUFDbkQsVUFBTSxVQUFVO0FBQUEsTUFDZDtBQUFBLE1BQ0EsS0FBSyxhQUFhLE9BQU87QUFBQSxNQUN6QixXQUFXLGFBQWE7QUFBQSxJQUM5QjtBQUNJLFVBQU0sT0FBTyxLQUFLO0FBQ2xCLFVBQU0sV0FBVztBQUFBLE1BQ2YsU0FBUyxRQUFRLE9BQU8sT0FBTztBQUFBLE1BQy9CO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNOO0FBQ0ksU0FBSyxZQUFZLEtBQUssVUFBVSxJQUFJO0FBQUEsRUFDdEM7QUFDRjtBQXBDSSxPQUFPLGtCQUFNLGlCQUFpQjtBQUZsQyxJQUFNLGtCQUFOO0FBdUNBLE9BQU8sb0JBQW9CLGVBQWU7QUM1Q1QsSUFBSXhDLEtBQUVFLEtBQUVILEtBQUVFLEtBQUVFLE1BQUUsR0FBRSxJQUFFLENBQUEsR0FBR0csTUFBRVQsS0FBRU8sTUFBRUUsSUFBRSxLQUFJRSxNQUFFRixJQUFFLEtBQUlJLE1BQUVKLElBQUUsUUFBT1IsTUFBRVEsSUFBRSxLQUFJVSxNQUFFVixJQUFFLFNBQVFDLE1BQUVELElBQUU7QUFBRyxTQUFTRyxJQUFFWixJQUFFRyxJQUFFO0FBQUNNLE1BQUUsT0FBS0EsSUFBRSxJQUFJSixLQUFFTCxJQUFFTSxPQUFHSCxFQUFDLEdBQUVHLE1BQUU7QUFBRSxNQUFJSixLQUFFRyxJQUFFLFFBQU1BLElBQUUsTUFBSSxFQUFDLElBQUcsQ0FBQSxHQUFHLEtBQUksQ0FBQSxFQUFFO0FBQUcsU0FBT0wsTUFBR0UsR0FBRSxHQUFHLFVBQVFBLEdBQUUsR0FBRyxLQUFLLENBQUEsQ0FBRSxHQUFFQSxHQUFFLEdBQUdGLEVBQUM7QUFBQztBQUE0dUIsU0FBU2MsSUFBRWQsSUFBRUUsSUFBRTtBQUFDLE1BQUlFLEtBQUVRLElBQUVULE9BQUksQ0FBQztBQUFFLEdBQUNNLElBQUUsT0FBSyxFQUFFTCxHQUFFLEtBQUlGLEVBQUMsTUFBSUUsR0FBRSxLQUFHSixJQUFFSSxHQUFFLElBQUVGLElBQUVHLElBQUUsSUFBSSxJQUFJLEtBQUtELEVBQUM7QUFBRTtBQUFpRixTQUFTLEVBQUVKLElBQUU7QUFBQyxTQUFPTSxNQUFFLEdBQUUsRUFBRSxXQUFVO0FBQUMsV0FBTSxFQUFDLFNBQVFOLEdBQUM7QUFBQSxFQUFDLEdBQUUsQ0FBQSxDQUFFO0FBQUM7QUFBc04sU0FBUyxFQUFFQSxJQUFFSyxJQUFFO0FBQUMsTUFBSUgsS0FBRVUsSUFBRVQsT0FBSSxDQUFDO0FBQUUsU0FBTyxFQUFFRCxHQUFFLEtBQUlHLEVBQUMsTUFBSUgsR0FBRSxLQUFHRixHQUFDLEdBQUdFLEdBQUUsTUFBSUcsSUFBRUgsR0FBRSxNQUFJRixLQUFHRSxHQUFFO0FBQUU7QUFBQyxTQUFTaUMsSUFBRW5DLElBQUVHLElBQUU7QUFBQyxTQUFPRyxNQUFFLEdBQUUsRUFBRSxXQUFVO0FBQUMsV0FBT047QUFBQSxFQUFDLEdBQUVHLEVBQUM7QUFBQztBQUFnZixTQUFTLElBQUc7QUFBQyxXQUFRSCxJQUFFQSxLQUFFLEVBQUUsTUFBSyxLQUFJO0FBQUMsUUFBSUcsS0FBRUgsR0FBRTtBQUFJLFFBQUdBLEdBQUUsT0FBS0csR0FBRSxLQUFHO0FBQUMsTUFBQUEsR0FBRSxJQUFJLEtBQUssQ0FBQyxHQUFFQSxHQUFFLElBQUksS0FBSyxDQUFDLEdBQUVBLEdBQUUsTUFBSSxDQUFBO0FBQUEsSUFBRSxTQUFPRSxJQUFFO0FBQUMsTUFBQUYsR0FBRSxNQUFJLENBQUEsR0FBR00sSUFBRSxJQUFJSixJQUFFTCxHQUFFLEdBQUc7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDO0FBQUNTLElBQUUsTUFBSSxTQUFTVCxJQUFFO0FBQUNLLFFBQUUsTUFBS0UsT0FBR0EsSUFBRVAsRUFBQztBQUFDLEdBQUVTLElBQUUsS0FBRyxTQUFTVCxJQUFFRyxJQUFFO0FBQUMsRUFBQUgsTUFBR0csR0FBRSxPQUFLQSxHQUFFLElBQUksUUFBTUgsR0FBRSxNQUFJRyxHQUFFLElBQUksTUFBS08sT0FBR0EsSUFBRVYsSUFBRUcsRUFBQztBQUFDLEdBQUVNLElBQUUsTUFBSSxTQUFTVCxJQUFFO0FBQUNXLFNBQUdBLElBQUVYLEVBQUMsR0FBRUcsTUFBRTtBQUFFLE1BQUlDLE1BQUdDLE1BQUVMLEdBQUUsS0FBSztBQUFJLEVBQUFJLE9BQUlGLFFBQUlHLE9BQUdELEdBQUUsTUFBSSxDQUFBLEdBQUdDLElBQUUsTUFBSSxDQUFBLEdBQUdELEdBQUUsR0FBRyxLQUFLLFNBQVNKLElBQUU7QUFBQyxJQUFBQSxHQUFFLFFBQU1BLEdBQUUsS0FBR0EsR0FBRSxNQUFLQSxHQUFFLElBQUVBLEdBQUUsTUFBSTtBQUFBLEVBQU0sQ0FBQyxNQUFJSSxHQUFFLElBQUksS0FBSyxDQUFDLEdBQUVBLEdBQUUsSUFBSSxLQUFLLENBQUMsR0FBRUEsR0FBRSxNQUFJLENBQUEsR0FBR0QsTUFBRSxLQUFJRCxNQUFFRztBQUFDLEdBQUVJLElBQUUsU0FBTyxTQUFTVCxJQUFFO0FBQUNhLFNBQUdBLElBQUViLEVBQUM7QUFBRSxNQUFJRyxLQUFFSCxHQUFFO0FBQUksRUFBQUcsTUFBR0EsR0FBRSxRQUFNQSxHQUFFLElBQUksSUFBSSxXQUFTLE1BQUksRUFBRSxLQUFLQSxFQUFDLEtBQUdDLFFBQUlLLElBQUUsMkJBQXlCTCxNQUFFSyxJQUFFLDBCQUF3Qk8sS0FBRyxDQUFDLElBQUdiLEdBQUUsSUFBSSxHQUFHLEtBQUssU0FBU0gsSUFBRTtBQUFDLElBQUFBLEdBQUUsTUFBSUEsR0FBRSxNQUFJQSxHQUFFLElBQUdBLEdBQUUsSUFBRTtBQUFBLEVBQU0sQ0FBQyxJQUFHRSxNQUFFRyxNQUFFO0FBQUksR0FBRUksSUFBRSxNQUFJLFNBQVNULElBQUVHLElBQUU7QUFBQyxFQUFBQSxHQUFFLEtBQUssU0FBU0gsSUFBRTtBQUFDLFFBQUc7QUFBQyxNQUFBQSxHQUFFLElBQUksS0FBSyxDQUFDLEdBQUVBLEdBQUUsTUFBSUEsR0FBRSxJQUFJLE9BQU8sU0FBU0EsSUFBRTtBQUFDLGVBQU0sQ0FBQ0EsR0FBRSxNQUFJLEVBQUVBLEVBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDLFNBQU9LLElBQUU7QUFBQyxNQUFBRixHQUFFLEtBQUssU0FBU0gsSUFBRTtBQUFDLFFBQUFBLEdBQUUsUUFBTUEsR0FBRSxNQUFJLENBQUE7QUFBQSxNQUFHLENBQUMsR0FBRUcsS0FBRSxDQUFBLEdBQUdNLElBQUUsSUFBSUosSUFBRUwsR0FBRSxHQUFHO0FBQUEsSUFBQztBQUFBLEVBQUMsQ0FBQyxHQUFFQyxPQUFHQSxJQUFFRCxJQUFFRyxFQUFDO0FBQUMsR0FBRU0sSUFBRSxVQUFRLFNBQVNULElBQUU7QUFBQ21CLFNBQUdBLElBQUVuQixFQUFDO0FBQUUsTUFBSUcsSUFBRUUsS0FBRUwsR0FBRTtBQUFJLEVBQUFLLE1BQUdBLEdBQUUsUUFBTUEsR0FBRSxJQUFJLEdBQUcsS0FBSyxTQUFTTCxJQUFFO0FBQUMsUUFBRztBQUFDLFFBQUVBLEVBQUM7QUFBQSxJQUFDLFNBQU9BLElBQUU7QUFBQyxNQUFBRyxLQUFFSDtBQUFBLElBQUM7QUFBQSxFQUFDLENBQUMsR0FBRUssR0FBRSxNQUFJLFFBQU9GLE1BQUdNLElBQUUsSUFBSU4sSUFBRUUsR0FBRSxHQUFHO0FBQUU7QUFBRSxJQUFJLElBQUUsY0FBWSxPQUFPO0FBQXNCLFNBQVNXLElBQUVoQixJQUFFO0FBQUMsTUFBSUcsSUFBRUUsS0FBRSxXQUFVO0FBQUMsaUJBQWFILEVBQUMsR0FBRSxLQUFHLHFCQUFxQkMsRUFBQyxHQUFFLFdBQVdILEVBQUM7QUFBQSxFQUFDLEdBQUVFLEtBQUUsV0FBV0csSUFBRSxFQUFFO0FBQUUsUUFBSUYsS0FBRSxzQkFBc0JFLEVBQUM7QUFBRTtBQUFDLFNBQVMsRUFBRUwsSUFBRTtBQUFDLE1BQUlHLEtBQUVFLEtBQUVILEtBQUVGLEdBQUU7QUFBSSxnQkFBWSxPQUFPRSxPQUFJRixHQUFFLE1BQUksUUFBT0UsR0FBQyxJQUFJRyxNQUFFRjtBQUFDO0FBQUMsU0FBUyxFQUFFSCxJQUFFO0FBQUMsTUFBSUcsS0FBRUU7QUFBRSxFQUFBTCxHQUFFLE1BQUlBLEdBQUUsR0FBRSxHQUFHSyxNQUFFRjtBQUFDO0FBQUMsU0FBUyxFQUFFSCxJQUFFRyxJQUFFO0FBQUMsU0FBTSxDQUFDSCxNQUFHQSxHQUFFLFdBQVNHLEdBQUUsVUFBUUEsR0FBRSxLQUFLLFNBQVNBLElBQUVFLElBQUU7QUFBQyxXQUFPRixPQUFJSCxHQUFFSyxFQUFDO0FBQUEsRUFBQyxDQUFDO0FBQUM7QUNBejFHLElBQUksSUFBRSx1QkFBTyxJQUFJLGdCQUFnQjtBQUFFLFNBQVMsSUFBRztBQUFDLE1BQUcsRUFBRSxJQUFFLElBQUc7QUFBQyxRQUFJRCxJQUFFRCxLQUFFO0FBQUcsV0FBTSxXQUFTc0IsS0FBRTtBQUFDLFVBQUl6QixLQUFFeUI7QUFBRUEsWUFBRTtBQUFPO0FBQUksYUFBTSxXQUFTekIsSUFBRTtBQUFDLFlBQUlLLEtBQUVMLEdBQUU7QUFBRSxRQUFBQSxHQUFFLElBQUU7QUFBTyxRQUFBQSxHQUFFLEtBQUc7QUFBRyxZQUFHLEVBQUUsSUFBRUEsR0FBRSxNQUFJLEVBQUVBLEVBQUMsRUFBRSxLQUFHO0FBQUMsVUFBQUEsR0FBRSxFQUFDO0FBQUEsUUFBRSxTQUFPQSxJQUFFO0FBQUMsY0FBRyxDQUFDRyxJQUFFO0FBQUMsWUFBQUMsS0FBRUo7QUFBRSxZQUFBRyxLQUFFO0FBQUEsVUFBRTtBQUFBLFFBQUM7QUFBQyxRQUFBSCxLQUFFSztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsUUFBRTtBQUFFO0FBQUksUUFBR0YsR0FBRSxPQUFNQztBQUFBLEVBQUMsTUFBTTtBQUFHO0FBQUMsU0FBUyxFQUFFQSxJQUFFO0FBQUMsTUFBRyxJQUFFLEVBQUUsUUFBT0EsR0FBQztBQUFHO0FBQUksTUFBRztBQUFDLFdBQU9BLEdBQUM7QUFBQSxFQUFFLFVBQUM7QUFBUSxNQUFDO0FBQUEsRUFBRTtBQUFDO0FBQUMsSUFBSSxJQUFFO0FBQU8sU0FBUyxFQUFFQSxJQUFFO0FBQUMsTUFBSUQsS0FBRTtBQUFFLE1BQUU7QUFBTyxNQUFHO0FBQUMsV0FBT0MsR0FBQztBQUFBLEVBQUUsVUFBQztBQUFRLFFBQUVEO0FBQUEsRUFBQztBQUFDO0FBQUksSUFBR3NCLE1BQUUsUUFBTyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUU7QUFBRSxTQUFTLEVBQUVyQixJQUFFO0FBQUMsTUFBRyxXQUFTLEdBQUU7QUFBQyxRQUFJRCxLQUFFQyxHQUFFO0FBQUUsUUFBRyxXQUFTRCxNQUFHQSxHQUFFLE1BQUksR0FBRTtBQUFDLE1BQUFBLEtBQUUsRUFBQyxHQUFFLEdBQUUsR0FBRUMsSUFBRSxHQUFFLEVBQUUsR0FBRSxHQUFFLFFBQU8sR0FBRSxHQUFFLEdBQUUsUUFBTyxHQUFFLFFBQU8sR0FBRUQsR0FBQztBQUFFLFVBQUcsV0FBUyxFQUFFLEVBQUUsR0FBRSxFQUFFLElBQUVBO0FBQUUsUUFBRSxJQUFFQTtBQUFFLE1BQUFDLEdBQUUsSUFBRUQ7QUFBRSxVQUFHLEtBQUcsRUFBRSxFQUFFLENBQUFDLEdBQUUsRUFBRUQsRUFBQztBQUFFLGFBQU9BO0FBQUEsSUFBQyxXQUFTLE9BQUtBLEdBQUUsR0FBRTtBQUFDLE1BQUFBLEdBQUUsSUFBRTtBQUFFLFVBQUcsV0FBU0EsR0FBRSxHQUFFO0FBQUMsUUFBQUEsR0FBRSxFQUFFLElBQUVBLEdBQUU7QUFBRSxZQUFHLFdBQVNBLEdBQUUsRUFBRSxDQUFBQSxHQUFFLEVBQUUsSUFBRUEsR0FBRTtBQUFFLFFBQUFBLEdBQUUsSUFBRSxFQUFFO0FBQUUsUUFBQUEsR0FBRSxJQUFFO0FBQU8sVUFBRSxFQUFFLElBQUVBO0FBQUUsVUFBRSxJQUFFQTtBQUFBLE1BQUM7QUFBQyxhQUFPQTtBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUVDLElBQUVELElBQUU7QUFBQyxPQUFLLElBQUVDO0FBQUUsT0FBSyxJQUFFO0FBQUUsT0FBSyxJQUFFO0FBQU8sT0FBSyxJQUFFO0FBQU8sT0FBSyxJQUFFLFFBQU1ELEtBQUUsU0FBT0EsR0FBRTtBQUFRLE9BQUssSUFBRSxRQUFNQSxLQUFFLFNBQU9BLEdBQUU7QUFBVSxPQUFLLE9BQUssUUFBTUEsS0FBRSxTQUFPQSxHQUFFO0FBQUk7QUFBQyxFQUFFLFVBQVUsUUFBTTtBQUFFLEVBQUUsVUFBVSxJQUFFLFdBQVU7QUFBQyxTQUFNO0FBQUU7QUFBRSxFQUFFLFVBQVUsSUFBRSxTQUFTQyxJQUFFO0FBQUMsTUFBSUQsS0FBRSxNQUFLSCxLQUFFLEtBQUs7QUFBRSxNQUFHQSxPQUFJSSxNQUFHLFdBQVNBLEdBQUUsR0FBRTtBQUFDLElBQUFBLEdBQUUsSUFBRUo7QUFBRSxTQUFLLElBQUVJO0FBQUUsUUFBRyxXQUFTSixHQUFFLENBQUFBLEdBQUUsSUFBRUk7QUFBQSxRQUFPLEdBQUUsV0FBVTtBQUFDLFVBQUlBO0FBQUUsZUFBT0EsS0FBRUQsR0FBRSxNQUFJQyxHQUFFLEtBQUtELEVBQUM7QUFBQSxJQUFDLENBQUM7QUFBQSxFQUFDO0FBQUM7QUFBRSxFQUFFLFVBQVUsSUFBRSxTQUFTQyxJQUFFO0FBQUMsTUFBSUQsS0FBRTtBQUFLLE1BQUcsV0FBUyxLQUFLLEdBQUU7QUFBQyxRQUFJSCxLQUFFSSxHQUFFLEdBQUVDLEtBQUVELEdBQUU7QUFBRSxRQUFHLFdBQVNKLElBQUU7QUFBQyxNQUFBQSxHQUFFLElBQUVLO0FBQUUsTUFBQUQsR0FBRSxJQUFFO0FBQUEsSUFBTTtBQUFDLFFBQUcsV0FBU0MsSUFBRTtBQUFDLE1BQUFBLEdBQUUsSUFBRUw7QUFBRSxNQUFBSSxHQUFFLElBQUU7QUFBQSxJQUFNO0FBQUMsUUFBR0EsT0FBSSxLQUFLLEdBQUU7QUFBQyxXQUFLLElBQUVDO0FBQUUsVUFBRyxXQUFTQSxHQUFFLEdBQUUsV0FBVTtBQUFDLFlBQUlEO0FBQUUsaUJBQU9BLEtBQUVELEdBQUUsTUFBSUMsR0FBRSxLQUFLRCxFQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQztBQUFFLEVBQUUsVUFBVSxZQUFVLFNBQVNDLElBQUU7QUFBQyxNQUFJRCxLQUFFO0FBQUssU0FBTyxFQUFFLFdBQVU7QUFBQyxRQUFJSCxLQUFFRyxHQUFFLE9BQU1HLEtBQUU7QUFBRSxRQUFFO0FBQU8sUUFBRztBQUFDLE1BQUFGLEdBQUVKLEVBQUM7QUFBQSxJQUFDLFVBQUM7QUFBUSxVQUFFTTtBQUFBLElBQUM7QUFBQSxFQUFDLEdBQUUsRUFBQyxNQUFLLE1BQUssQ0FBQztBQUFDO0FBQUUsRUFBRSxVQUFVLFVBQVEsV0FBVTtBQUFDLFNBQU8sS0FBSztBQUFLO0FBQUUsRUFBRSxVQUFVLFdBQVMsV0FBVTtBQUFDLFNBQU8sS0FBSyxRQUFNO0FBQUU7QUFBRSxFQUFFLFVBQVUsU0FBTyxXQUFVO0FBQUMsU0FBTyxLQUFLO0FBQUs7QUFBRSxFQUFFLFVBQVUsT0FB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TUFBRyxLQUFLLE1BQUksRUFBRSxRQUFNO0FBQUcsT0FBSyxJQUFFO0FBQUUsT0FBSyxLQUFHO0FBQUUsTUFBRyxLQUFLLElBQUUsS0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFFO0FBQUMsU0FBSyxLQUFHO0FBQUcsV0FBTTtBQUFBLEVBQUU7QUFBQyxNQUFJWixLQUFFO0FBQUUsTUFBRztBQUFDSCxRQUFFLElBQUk7QUFBRSxRQUFFO0FBQUssUUFBSUUsS0FBRSxLQUFLLEVBQUM7QUFBRyxRQUFHLEtBQUcsS0FBSyxLQUFHLEtBQUssTUFBSUEsTUFBRyxNQUFJLEtBQUssR0FBRTtBQUFDLFdBQUssSUFBRUE7QUFBRSxXQUFLLEtBQUc7QUFBSSxXQUFLO0FBQUEsSUFBRztBQUFBLEVBQUMsU0FBT0MsSUFBRTtBQUFDLFNBQUssSUFBRUE7QUFBRSxTQUFLLEtBQUc7QUFBRyxTQUFLO0FBQUEsRUFBRztBQUFDLE1BQUVBO0FBQUVVLE1BQUUsSUFBSTtBQUFFLE9BQUssS0FBRztBQUFHLFNBQU07QUFBRTtBQUFFRSxJQUFFLFVBQVUsSUFBRSxTQUFTWixJQUFFO0FBQUMsTUFBRyxXQUFTLEtBQUssR0FBRTtBQUFDLFNBQUssS0FBRztBQUFHLGFBQVFELEtBQUUsS0FBSyxHQUFFLFdBQVNBLElBQUVBLEtBQUVBLEdBQUUsRUFBRSxDQUFBQSxHQUFFLEVBQUUsRUFBRUEsRUFBQztBQUFBLEVBQUM7QUFBQyxJQUFFLFVBQVUsRUFBRSxLQUFLLE1BQUtDLEVBQUM7QUFBQztBQUFFWSxJQUFFLFVBQVUsSUFBRSxTQUFTWixJQUFFO0FBQUMsTUFBRyxXQUFTLEtBQUssR0FBRTtBQUFDLE1BQUUsVUFBVSxFQUFFLEtBQUssTUFBS0EsRUFBQztBQUFFLFFBQUcsV0FBUyxLQUFLLEdBQUU7QUFBQyxXQUFLLEtBQUc7QUFBSSxlQUFRRCxLQUFFLEtBQUssR0FBRSxXQUFTQSxJQUFFQSxLQUFFQSxHQUFFLEVBQUUsQ0FBQUEsR0FBRSxFQUFFLEVBQUVBLEVBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDO0FBQUVhLElBQUUsVUFBVSxJQUFFLFdBQVU7QUFBQyxNQUFHLEVBQUUsSUFBRSxLQUFLLElBQUc7QUFBQyxTQUFLLEtBQUc7QUFBRSxhQUFRWixLQUFFLEtBQUssR0FBRSxXQUFTQSxJQUFFQSxLQUFFQSxHQUFFLEVBQUUsQ0FBQUEsR0FBRSxFQUFFO0VBQUc7QUFBQztBQUFFLE9BQU8sZUFBZVksSUFBRSxXQUFVLFNBQVEsRUFBQyxLQUFJLFdBQVU7QUFBQyxNQUFHLElBQUUsS0FBSyxFQUFFLE9BQU0sSUFBSSxNQUFNLGdCQUFnQjtBQUFFLE1BQUlaLEtBQUUsRUFBRSxJQUFJO0FBQUUsT0FBSztBQUFJLE1BQUcsV0FBU0EsR0FBRSxDQUFBQSxHQUFFLElBQUUsS0FBSztBQUFFLE1BQUcsS0FBRyxLQUFLLEVBQUUsT0FBTSxLQUFLO0FBQUUsU0FBTyxLQUFLO0FBQUMsRUFBQyxDQUFDO0FBQUUsU0FBU3NCLElBQUV0QixJQUFFRCxJQUFFO0FBQUMsU0FBTyxJQUFJYSxJQUFFWixJQUFFRCxFQUFDO0FBQUM7QUFBQyxTQUFTZSxJQUFFZCxJQUFFO0FBQUMsTUFBSUosS0FBRUksR0FBRTtBQUFFLEVBQUFBLEdBQUUsSUFBRTtBQUFPLE1BQUcsY0FBWSxPQUFPSixJQUFFO0FBQUM7QUFBSSxRQUFJTSxLQUFFO0FBQUUsUUFBRTtBQUFPLFFBQUc7QUFBQyxNQUFBTixHQUFDO0FBQUEsSUFBRSxTQUFPRyxJQUFFO0FBQUMsTUFBQUMsR0FBRSxLQUFHO0FBQUcsTUFBQUEsR0FBRSxLQUFHO0FBQUVRLFVBQUVSLEVBQUM7QUFBRSxZQUFNRDtBQUFBLElBQUMsVUFBQztBQUFRLFVBQUVHO0FBQUU7SUFBRztBQUFBLEVBQUM7QUFBQztBQUFDLFNBQVNNLElBQUVSLElBQUU7QUFBQyxXQUFRRCxLQUFFQyxHQUFFLEdBQUUsV0FBU0QsSUFBRUEsS0FBRUEsR0FBRSxFQUFFLENBQUFBLEdBQUUsRUFBRSxFQUFFQSxFQUFDO0FBQUUsRUFBQUMsR0FBRSxJQUFFO0FBQU8sRUFBQUEsR0FBRSxJQUFFO0FBQU9jLE1BQUVkLEVBQUM7QUFBQztBQUFDLFNBQVNhLElBQUViLElBQUU7QUFBQyxNQUFHLE1BQUksS0FBSyxPQUFNLElBQUksTUFBTSxxQkFBcUI7QUFBRVUsTUFBRSxJQUFJO0FBQUUsTUFBRVY7QUFBRSxPQUFLLEtBQUc7QUFBRyxNQUFHLElBQUUsS0FBSyxFQUFFUSxLQUFFLElBQUk7QUFBRSxJQUFDO0FBQUU7QUFBQyxTQUFTLEVBQUVSLElBQUVELElBQUU7QUFBQyxPQUFLLElBQUVDO0FBQUUsT0FBSyxJQUFFO0FBQU8sT0FBSyxJQUFFO0FBQU8sT0FBSyxJQUFFO0FBQU8sT0FBSyxJQUFFO0FBQUcsT0FBSyxPQUFLLFFBQU1ELEtBQUUsU0FBT0EsR0FBRTtBQUFzQjtBQUFDLEVBQUUsVUFBVSxJQUFFLFdBQVU7QUFBQyxNQUFJQyxLQUFFLEtBQUssRUFBQztBQUFHLE1BQUc7QUFBQyxRQUFHLElBQUUsS0FBSyxFQUFFO0FBQU8sUUFBRyxXQUFTLEtBQUssRUFBRTtBQUFPLFFBQUlELEtBQUUsS0FBSyxFQUFDO0FBQUcsUUFBRyxjQUFZLE9BQU9BLEdBQUUsTUFBSyxJQUFFQTtBQUFBLEVBQUMsVUFBQztBQUFRLElBQUFDLEdBQUM7QUFBQSxFQUFFO0FBQUM7QUFBRSxFQUFFLFVBQVUsSUFBRSxXQUFVO0FBQUMsTUFBRyxJQUFFLEtBQUssRUFBRSxPQUFNLElBQUksTUFBTSxnQkFBZ0I7QUFBRSxPQUFLLEtBQUc7QUFBRSxPQUFLLEtBQUc7QUFBR2MsTUFBRSxJQUFJO0FBQUVqQixNQUFFLElBQUk7QUFBRTtBQUFJLE1BQUlHLEtBQUU7QUFBRSxNQUFFO0FBQUssU0FBT2EsSUFBRSxLQUFLLE1BQUtiLEVBQUM7QUFBQztBQUFFLEVBQUUsVUFBVSxJQUFFLFdBQVU7QUFBQyxNQUFHLEVBQUUsSUFBRSxLQUFLLElBQUc7QUFBQyxTQUFLLEtBQUc7QUFBRSxTQUFLLElBQUVxQjtBQUFFQSxVQUFFO0FBQUEsRUFBSTtBQUFDO0FBQUUsRUFBRSxVQUFVLElBQUUsV0FBVTtBQUFDLE9BQUssS0FBRztBQUFFLE1BQUcsRUFBRSxJQUFFLEtBQUssR0FBR2IsS0FBRSxJQUFJO0FBQUM7QUFBRSxFQUFFLFVBQVUsVUFBUSxXQUFVO0FBQUMsT0FBSyxFQUFDO0FBQUU7QUFBRSxTQUFTLEVBQUVSLElBQUVELElBQUU7QUFBQyxNQUFJSCxLQUFFLElBQUksRUFBRUksSUFBRUQsRUFBQztBQUFFLE1BQUc7QUFBQyxJQUFBSCxHQUFFLEVBQUM7QUFBQSxFQUFFLFNBQU9JLElBQUU7QUFBQyxJQUFBSixHQUFFLEVBQUM7QUFBRyxVQUFNSTtBQUFBLEVBQUM7QUFBQyxNQUFJQyxLQUFFTCxHQUFFLEVBQUUsS0FBS0EsRUFBQztBQUFFLEVBQUFLLEdBQUUsT0FBTyxPQUFPLElBQUVBO0FBQUUsU0FBT0E7QUFBQztBQ0F6cEksSUFBQyxHQUFJLEdBQUUsSUFBRSxlQUFhLE9BQU8sVUFBUSxDQUFDLENBQUMsT0FBTyw2QkFBaUMsSUFBRSxDQUFBO0FBQUdILEVBQUUsV0FBVTtBQUFDLE1BQUUsS0FBSztBQUFDLENBQUMsRUFBQztBQUFHLFNBQVMsRUFBRUUsSUFBRUMsSUFBRTtBQUFDTCxNQUFFSSxFQUFDLElBQUVDLEdBQUUsS0FBSyxNQUFLTCxJQUFFSSxFQUFDLEtBQUcsV0FBVTtBQUFBLEVBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxFQUFFQSxJQUFFO0FBQUMsTUFBRyxHQUFFO0FBQUMsUUFBSUosS0FBRTtBQUFFLFFBQUU7QUFBTyxJQUFBQSxHQUFDO0FBQUEsRUFBRTtBQUFDLE1BQUVJLE1BQUdBLEdBQUUsRUFBQztBQUFFO0FBQUMsU0FBUyxFQUFFQSxJQUFFO0FBQUMsTUFBSUosS0FBRSxNQUFLRyxLQUFFQyxHQUFFLE1BQUtJLEtBQUUsVUFBVUwsRUFBQztBQUFFLEVBQUFLLEdBQUUsUUFBTUw7QUFBRSxNQUFJSSxLQUFFRCxFQUFFLFdBQVU7QUFBQyxRQUFJRixLQUFFSixJQUFFRyxLQUFFSCxHQUFFO0FBQUksV0FBTUcsS0FBRUEsR0FBRSxHQUFHLEtBQUdBLEdBQUUsS0FBSTtBQUFDLE1BQUFBLEdBQUUsSUFBSSxRQUFNO0FBQUU7QUFBQSxJQUFLO0FBQUMsUUFBSUcsS0FBRUcsSUFBRSxXQUFVO0FBQUMsVUFBSUwsS0FBRUksR0FBRSxNQUFNO0FBQU0sYUFBTyxNQUFJSixLQUFFLElBQUUsU0FBS0EsS0FBRSxLQUFHQSxNQUFHO0FBQUEsSUFBRSxDQUFDLEdBQUVHLEtBQUVFLElBQUUsV0FBVTtBQUFDLGFBQU0sQ0FBQyxNQUFNLFFBQVFILEdBQUUsS0FBSyxLQUFHLENBQUNELElBQUVDLEdBQUUsS0FBSztBQUFBLElBQUMsQ0FBQyxHQUFFSyxLQUFFVCxFQUFFLFdBQVU7QUFBQyxXQUFLLElBQUU7QUFBRSxVQUFHSyxHQUFFLE9BQU07QUFBQyxZQUFJUCxLQUFFTSxHQUFFO0FBQU0sWUFBR0YsR0FBRSxPQUFLQSxHQUFFLElBQUksT0FBSyxNQUFJQSxHQUFFLElBQUksSUFBSSxTQUFTLENBQUFBLEdBQUUsSUFBSSxJQUFJLE9BQUtKO0FBQUEsTUFBQztBQUFBLElBQUMsQ0FBQyxHQUFFYSxLQUFFYixHQUFFLEtBQUs7QUFBRSxJQUFBQSxHQUFFLEtBQUssSUFBRSxXQUFVO0FBQUMsTUFBQVc7QUFBSSxNQUFBRSxHQUFFLEtBQUssSUFBSTtBQUFBLElBQUM7QUFBRSxXQUFNLENBQUNOLElBQUVELEVBQUM7QUFBQSxFQUFDLEdBQUUsQ0FBQSxDQUFFLEdBQUVLLEtBQUVKLEdBQUUsQ0FBQyxHQUFFTSxLQUFFTixHQUFFLENBQUM7QUFBRSxTQUFPSSxHQUFFLFFBQU1FLEdBQUUsS0FBSSxJQUFHQSxHQUFFO0FBQUs7QUFBQyxFQUFFLGNBQVk7QUFBbUIsT0FBTyxpQkFBaUJGLEVBQUUsV0FBVSxFQUFDLGFBQVksRUFBQyxjQUFhLE1BQUcsT0FBTSxPQUFNLEdBQUUsTUFBSyxFQUFDLGNBQWEsTUFBRyxPQUFNLEVBQUMsR0FBRSxPQUFNLEVBQUMsY0FBYSxNQUFHLEtBQUksV0FBVTtBQUFDLFNBQU0sRUFBQyxNQUFLLEtBQUk7QUFBQyxFQUFDLEdBQUUsS0FBSSxFQUFDLGNBQWEsTUFBRyxPQUFNLEVBQUMsRUFBQyxDQUFDO0FBQUUsRUFBRSxPQUFNLFNBQVNQLElBQUVKLElBQUU7QUFBQyxNQUFHLFlBQVUsT0FBT0EsR0FBRSxNQUFLO0FBQUMsUUFBSUssSUFBRUYsS0FBRUgsR0FBRTtBQUFNLGFBQVFNLE1BQUtILEdBQUUsS0FBRyxlQUFhRyxJQUFFO0FBQUMsVUFBSUUsS0FBRUwsR0FBRUcsRUFBQztBQUFFLFVBQUdFLGNBQWFHLEdBQUU7QUFBQyxZQUFHLENBQUNOLEdBQUUsQ0FBQUwsR0FBRSxPQUFLSyxLQUFFLENBQUE7QUFBRyxRQUFBQSxHQUFFQyxFQUFDLElBQUVFO0FBQUUsUUFBQUwsR0FBRUcsRUFBQyxJQUFFRSxHQUFFLEtBQUk7QUFBQSxNQUFFO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxFQUFBSixHQUFFSixFQUFDO0FBQUMsQ0FBQztBQUFFLEVBQUUsT0FBTSxTQUFTSSxJQUFFSixJQUFFO0FBQUMsRUFBQUksR0FBRUosRUFBQztBQUFFLE1BQUdBLEdBQUUsU0FBT0csS0FBRTtBQUFDO0FBQUksUUFBSUUsSUFBRUMsS0FBRU4sR0FBRTtBQUFJLFFBQUdNLElBQUU7QUFBQyxNQUFBQSxHQUFFLFFBQU07QUFBRyxVQUFHLFlBQVVELEtBQUVDLEdBQUUsTUFBTSxDQUFBQSxHQUFFLE9BQUtELE1BQUUsU0FBU0QsSUFBRUosSUFBRTtBQUFDLFlBQUlLO0FBQUVILFVBQUUsV0FBVTtBQUFDLFVBQUFHLEtBQUU7QUFBQSxRQUFJLEdBQUUsRUFBQyxNQUFLTCxHQUFDLENBQUM7QUFBRSxRQUFBSyxHQUFFLElBQUVEO0FBQUUsZUFBT0M7QUFBQSxNQUFDLEdBQUUsV0FBVTtBQUFDLFlBQUlEO0FBQUUsWUFBRyxFQUFFLFVBQU9BLEtBQUVDLEdBQUUsTUFBSUQsR0FBRSxLQUFLQyxFQUFDO0FBQUUsUUFBQUMsR0FBRSxRQUFNO0FBQUUsUUFBQUEsR0FBRSxTQUFTLEVBQUU7QUFBQSxNQUFDLEdBQUUsY0FBWSxPQUFPTixHQUFFLE9BQUtBLEdBQUUsS0FBSyxlQUFhQSxHQUFFLEtBQUssT0FBSyxFQUFFO0FBQUEsSUFBQztBQUFLLE1BQUVLLEVBQUM7QUFBQSxFQUFDO0FBQUMsQ0FBQztBQUFFLEVBQUUsT0FBTSxTQUFTRCxJQUFFSixJQUFFSyxJQUFFRixJQUFFO0FBQUM7QUFBYSxFQUFBQyxHQUFFSixJQUFFSyxJQUFFRixFQUFDO0FBQUMsQ0FBQztBQUFFLEVBQUUsVUFBUyxTQUFTQyxJQUFFSixJQUFFO0FBQUM7QUFBYSxNQUFJSztBQUFFLE1BQUcsWUFBVSxPQUFPTCxHQUFFLFNBQU9LLEtBQUVMLEdBQUUsTUFBSztBQUFDLFFBQUlHLEtBQUVILEdBQUUsTUFBS00sS0FBRU4sR0FBRTtBQUFNLFFBQUdHLElBQUU7QUFBQyxVQUFJSyxLQUFFSCxHQUFFO0FBQUUsVUFBR0csR0FBRSxVQUFRRCxNQUFLQyxJQUFFO0FBQUMsWUFBSU4sS0FBRU0sR0FBRUQsRUFBQztBQUFFLFlBQUcsV0FBU0wsTUFBRyxFQUFFSyxNQUFLSixLQUFHO0FBQUMsVUFBQUQsR0FBRTtBQUFJLFVBQUFNLEdBQUVELEVBQUMsSUFBRTtBQUFBLFFBQU07QUFBQSxNQUFDO0FBQUEsV0FBSztBQUFDLFFBQUFDLEtBQUU7QUFBRyxRQUFBSCxHQUFFLElBQUVHO0FBQUEsTUFBQztBQUFDLGVBQVFHLE1BQUtSLElBQUU7QUFBQyxZQUFJTSxLQUFFRCxHQUFFRyxFQUFDLEdBQUVFLEtBQUVWLEdBQUVRLEVBQUM7QUFBRSxZQUFHLFdBQVNGLElBQUU7QUFBQyxVQUFBQSxLQUFFLEVBQUVKLElBQUVNLElBQUVFLEVBQUM7QUFBRSxVQUFBTCxHQUFFRyxFQUFDLElBQUVGO0FBQUEsUUFBQyxNQUFNLENBQUFBLEdBQUUsRUFBRUksSUFBRVAsRUFBQztBQUFBLE1BQUM7QUFBQyxlQUFRSSxNQUFLUCxHQUFFLENBQUFHLEdBQUVJLEVBQUMsSUFBRVAsR0FBRU8sRUFBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsRUFBQU4sR0FBRUosRUFBQztBQUFDLENBQUM7QUFBRSxTQUFTLEVBQUVJLElBQUVKLElBQUVLLElBQUVGLElBQUU7QUFBQyxNQUFJRyxLQUFFTixNQUFLSSxNQUFHLFdBQVNBLEdBQUUsaUJBQWdCSSxLQUFFSyxFQUFFUixFQUFDLEdBQUVFLEtBQUVGLEdBQUU7QUFBTyxTQUFNLEVBQUMsR0FBRSxTQUFTRCxJQUFFSixJQUFFO0FBQUMsSUFBQVEsR0FBRSxRQUFNSjtBQUFFLElBQUFHLEtBQUVILEdBQUU7RUFBTSxHQUFFLEdBQUVGLEVBQUUsV0FBVTtBQUFDLFNBQUssSUFBRTtBQUFFLFFBQUlHLEtBQUVHLEdBQUUsTUFBTTtBQUFNLFFBQUdELE9BQUlGLElBQUU7QUFBQyxNQUFBRSxLQUFFO0FBQU8sVUFBR0QsR0FBRSxDQUFBRixHQUFFSixFQUFDLElBQUVLO0FBQUEsZUFBVSxRQUFNQSxPQUFJLFVBQUtBLE1BQUcsUUFBTUwsR0FBRSxDQUFDLEdBQUcsQ0FBQUksR0FBRSxhQUFhSixJQUFFSyxFQUFDO0FBQUEsVUFBTyxDQUFBRCxHQUFFLGdCQUFnQkosRUFBQztBQUFBLElBQUMsTUFBTSxDQUFBTyxLQUFFO0FBQUEsRUFBTSxDQUFDLEVBQUM7QUFBQztBQUFDLEVBQUUsV0FBVSxTQUFTSCxJQUFFSixJQUFFO0FBQUMsTUFBRyxZQUFVLE9BQU9BLEdBQUUsTUFBSztBQUFDLFFBQUlLLEtBQUVMLEdBQUU7QUFBSSxRQUFHSyxJQUFFO0FBQUMsVUFBSUYsS0FBRUUsR0FBRTtBQUFFLFVBQUdGLElBQUU7QUFBQyxRQUFBRSxHQUFFLElBQUU7QUFBTyxpQkFBUUMsTUFBS0gsSUFBRTtBQUFDLGNBQUlLLEtBQUVMLEdBQUVHLEVBQUM7QUFBRSxjQUFHRSxHQUFFLENBQUFBLEdBQUUsRUFBQztBQUFBLFFBQUU7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLElBQUFSLEdBQUUsT0FBSztBQUFBLEVBQU0sT0FBSztBQUFDLFFBQUlPLEtBQUVQLEdBQUU7QUFBSSxRQUFHTyxJQUFFO0FBQUMsVUFBSUwsS0FBRUssR0FBRTtBQUFLLFVBQUdMLElBQUU7QUFBQyxRQUFBSyxHQUFFLE9BQUs7QUFBTyxRQUFBTCxHQUFFLEVBQUM7QUFBQSxNQUFFO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxFQUFBRSxHQUFFSixFQUFDO0FBQUMsQ0FBQztBQUFFLEVBQUUsT0FBTSxTQUFTSSxJQUFFSixJQUFFSyxJQUFFRixJQUFFO0FBQUMsTUFBR0EsS0FBRSxLQUFHLE1BQUlBLEdBQUUsQ0FBQUgsR0FBRSxRQUFNO0FBQUUsRUFBQUksR0FBRUosSUFBRUssSUFBRUYsRUFBQztBQUFDLENBQUM7QUFBRUMsSUFBRSxVQUFVLHdCQUFzQixTQUFTQSxJQUFFSixJQUFFO0FBQUMsTUFBRyxLQUFLLElBQUksUUFBTTtBQUFHLE1BQUlLLEtBQUUsS0FBSyxNQUFLRixLQUFFRSxNQUFHLFdBQVNBLEdBQUU7QUFBRSxXQUFRQyxNQUFLTixHQUFFLFFBQU07QUFBRyxNQUFHLEtBQUssT0FBSyxhQUFXLE9BQU8sS0FBSyxLQUFHLFNBQUssS0FBSyxHQUFFO0FBQUMsUUFBSVEsS0FBRSxJQUFFLEtBQUs7QUFBSyxRQUFHLEVBQUVMLE1BQUdLLE1BQUcsSUFBRSxLQUFLLE1BQU0sUUFBTTtBQUFHLFFBQUcsSUFBRSxLQUFLLEtBQUs7RUFBUSxPQUFLO0FBQUMsUUFBRyxFQUFFTCxNQUFHLElBQUUsS0FBSyxNQUFNLFFBQU07QUFBRyxRQUFHLElBQUUsS0FBSyxLQUFLO0VBQVE7QUFBQyxXQUFRSSxNQUFLSCxHQUFFLEtBQUcsZUFBYUcsTUFBR0gsR0FBRUcsRUFBQyxNQUFJLEtBQUssTUFBTUEsRUFBQyxFQUFFO0FBQVMsV0FBUUwsTUFBSyxLQUFLLE1BQU0sS0FBRyxFQUFFQSxNQUFLRSxJQUFHLFFBQU07QUFBRyxTQUFNO0FBQUU7QUFBRSxTQUFTLFVBQVVBLElBQUVKLElBQUU7QUFBQyxTQUFPTSxFQUFFLFdBQVU7QUFBQyxXQUFPTyxFQUFFVCxJQUFFSixFQUFDO0FBQUEsRUFBQyxHQUFFLEVBQUU7QUFBQztBQUFtSSxJQUFpTCxJQUFFLFNBQVNJLElBQUU7QUFBQyxpQkFBZSxXQUFVO0FBQUMsbUJBQWVBLEVBQUM7QUFBQSxFQUFDLENBQUM7QUFBQztBQUFpSSxTQUFTLElBQUc7QUFBQ00sSUFBRSxXQUFVO0FBQUMsUUFBSU47QUFBRSxXQUFNQSxLQUFFLEVBQUUsTUFBSyxFQUFHLEdBQUUsS0FBS0EsRUFBQztBQUFBLEVBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxJQUFHO0FBQUMsTUFBRyxNQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBQ0osSUFBRSx5QkFBdUIsR0FBRyxDQUFDO0FBQUM7Ozs7Ozs7OztBQ0UveEgsZ0JBQUEsV0FBbUIsU0FBUyxZQUFhLFdBQVc7QUFDbEQsVUFBTSxXQUFXLFVBQVUsT0FBTyxDQUFDLEtBQUttQixPQUFNLE9BQU8sT0FBTyxLQUFLQSxFQUFDLEdBQUcsQ0FBQSxDQUFFO0FBR3ZFLFVBQU0sb0JBQW9CLFNBQVMscUJBQXFCLFNBQVMsYUFBYTtBQUM5RSxVQUFNLG9CQUFvQixTQUFTLHFCQUFxQjtBQUV4RCxXQUFPLE9BQU8sT0FBTyxVQUFVO0FBQUEsTUFDN0I7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFXO0FBQUEsTUFDWCxLQUFLLFNBQVMsT0FBTztBQUFBLE1BQ3JCLFlBQVksU0FBUyxjQUFjO0FBQUEsTUFDbkMsTUFBTSxTQUFTLFFBQVE7QUFBQSxNQUN2QixpQkFBaUIsU0FBUyxtQkFBbUI7QUFBQSxNQUM3QyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDekMsY0FBYyxTQUFTLGdCQUFnQjtBQUFBLE1BQ3ZDLFNBQVMsU0FBUyxXQUFXO0FBQUEsTUFDN0IsV0FBVyxPQUFPLE9BQU8sQ0FBQSxHQUFJLFNBQVMsU0FBUztBQUFBLE1BQy9DLFFBQVEsT0FBTyxPQUFPLENBQUEsR0FBSSxTQUFTLE1BQU07QUFBQSxNQUN6QyxtQkFBbUIsT0FBTyxPQUFPLENBQUEsR0FBSSxTQUFTLGlCQUFpQjtBQUFBLE1BQy9ELFNBQVMsT0FBTyxPQUFPLENBQUEsR0FBSSxTQUFTLE9BQU87QUFBQSxLQUM1QztBQUFBLEVBQ0g7Ozs7Ozs7OztBQ3ZCQSxnQkFBaUIsTUFBTSxvQkFBb0IsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLL0MsWUFBYSxTQUFTLFNBQVM7QUFDN0IsWUFBTSxXQUFXLEVBQUU7QUFFbkIsVUFBSSxPQUFPLFlBQVksWUFBWSxZQUFZLE1BQU07QUFDbkQsWUFBSSxRQUFRLEtBQU0sTUFBSyxPQUFPLE9BQU8sUUFBUSxJQUFJO0FBQ2pELFlBQUksUUFBUSxTQUFVLE1BQUssV0FBVztBQUN0QyxZQUFJLFFBQVEsVUFBVyxNQUFLLFlBQVk7QUFDeEMsWUFBSSxRQUFRLE1BQU8sTUFBSyxRQUFRLFFBQVE7QUFBQSxNQUM5QztBQUVJLFVBQUksTUFBTSxtQkFBbUI7QUFDM0IsY0FBTSxrQkFBa0IsTUFBTSxLQUFLLFdBQVc7QUFBQSxNQUNwRDtBQUFBLElBQ0E7QUFBQSxFQUNBOzs7Ozs7Ozs7O0FDbkJBLFdBQUEsYUFBcUI7QUFDckIsV0FBQSxjQUFzQjtBQUN0QixXQUFBLGdCQUF3QjtBQUV4QixNQUFJLFNBQVMsQ0FBQTtBQUNiLE1BQUksWUFBWSxDQUFBO0FBQ2hCLE1BQUksTUFBTSxPQUFPLGVBQWUsY0FBYyxhQUFhO0FBRTNELE1BQUksT0FBTztBQUNYLFdBQVNmLEtBQUksR0FBRyxNQUFNLEtBQUssUUFBUUEsS0FBSSxLQUFLLEVBQUVBLElBQUc7QUFDL0MsV0FBT0EsRUFBQyxJQUFJLEtBQUtBLEVBQUM7QUFDbEIsY0FBVSxLQUFLLFdBQVdBLEVBQUMsQ0FBQyxJQUFJQTtBQUFBLEVBQ2xDO0FBSUEsWUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFDLElBQUk7QUFDL0IsWUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFDLElBQUk7QUFFL0IsV0FBUyxRQUFTLEtBQUs7QUFDckIsUUFBSXdDLE9BQU0sSUFBSTtBQUVkLFFBQUlBLE9BQU0sSUFBSSxHQUFHO0FBQ2YsWUFBTSxJQUFJLE1BQU0sZ0RBQWdEO0FBQUEsSUFDcEU7QUFJRSxRQUFJLFdBQVcsSUFBSSxRQUFRLEdBQUc7QUFDOUIsUUFBSSxhQUFhLEdBQUksWUFBV0E7QUFFaEMsUUFBSSxrQkFBa0IsYUFBYUEsT0FDL0IsSUFDQSxJQUFLLFdBQVc7QUFFcEIsV0FBTyxDQUFDLFVBQVUsZUFBZTtBQUFBLEVBQ25DO0FBR0EsV0FBUyxXQUFZLEtBQUs7QUFDeEIsUUFBSSxPQUFPLFFBQVEsR0FBRztBQUN0QixRQUFJLFdBQVcsS0FBSyxDQUFDO0FBQ3JCLFFBQUksa0JBQWtCLEtBQUssQ0FBQztBQUM1QixZQUFTLFdBQVcsbUJBQW1CLElBQUksSUFBSztBQUFBLEVBQ2xEO0FBRUEsV0FBUyxZQUFhLEtBQUssVUFBVSxpQkFBaUI7QUFDcEQsWUFBUyxXQUFXLG1CQUFtQixJQUFJLElBQUs7QUFBQSxFQUNsRDtBQUVBLFdBQVMsWUFBYSxLQUFLO0FBQ3pCLFFBQUk7QUFDSixRQUFJLE9BQU8sUUFBUSxHQUFHO0FBQ3RCLFFBQUksV0FBVyxLQUFLLENBQUM7QUFDckIsUUFBSSxrQkFBa0IsS0FBSyxDQUFDO0FBRTVCLFFBQUksTUFBTSxJQUFJLElBQUksWUFBWSxLQUFLLFVBQVUsZUFBZSxDQUFDO0FBRTdELFFBQUksVUFBVTtBQUdkLFFBQUlBLE9BQU0sa0JBQWtCLElBQ3hCLFdBQVcsSUFDWDtBQUVKLFFBQUl4QztBQUNKLFNBQUtBLEtBQUksR0FBR0EsS0FBSXdDLE1BQUt4QyxNQUFLLEdBQUc7QUFDM0IsWUFDRyxVQUFVLElBQUksV0FBV0EsRUFBQyxDQUFDLEtBQUssS0FDaEMsVUFBVSxJQUFJLFdBQVdBLEtBQUksQ0FBQyxDQUFDLEtBQUssS0FDcEMsVUFBVSxJQUFJLFdBQVdBLEtBQUksQ0FBQyxDQUFDLEtBQUssSUFDckMsVUFBVSxJQUFJLFdBQVdBLEtBQUksQ0FBQyxDQUFDO0FBQ2pDLFVBQUksU0FBUyxJQUFLLE9BQU8sS0FBTTtBQUMvQixVQUFJLFNBQVMsSUFBSyxPQUFPLElBQUs7QUFDOUIsVUFBSSxTQUFTLElBQUksTUFBTTtBQUFBLElBQzNCO0FBRUUsUUFBSSxvQkFBb0IsR0FBRztBQUN6QixZQUNHLFVBQVUsSUFBSSxXQUFXQSxFQUFDLENBQUMsS0FBSyxJQUNoQyxVQUFVLElBQUksV0FBV0EsS0FBSSxDQUFDLENBQUMsS0FBSztBQUN2QyxVQUFJLFNBQVMsSUFBSSxNQUFNO0FBQUEsSUFDM0I7QUFFRSxRQUFJLG9CQUFvQixHQUFHO0FBQ3pCLFlBQ0csVUFBVSxJQUFJLFdBQVdBLEVBQUMsQ0FBQyxLQUFLLEtBQ2hDLFVBQVUsSUFBSSxXQUFXQSxLQUFJLENBQUMsQ0FBQyxLQUFLLElBQ3BDLFVBQVUsSUFBSSxXQUFXQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ3ZDLFVBQUksU0FBUyxJQUFLLE9BQU8sSUFBSztBQUM5QixVQUFJLFNBQVMsSUFBSSxNQUFNO0FBQUEsSUFDM0I7QUFFRSxXQUFPO0FBQUEsRUFDVDtBQUVBLFdBQVMsZ0JBQWlCLEtBQUs7QUFDN0IsV0FBTyxPQUFPLE9BQU8sS0FBSyxFQUFJLElBQzVCLE9BQU8sT0FBTyxLQUFLLEVBQUksSUFDdkIsT0FBTyxPQUFPLElBQUksRUFBSSxJQUN0QixPQUFPLE1BQU0sRUFBSTtBQUFBLEVBQ3JCO0FBRUEsV0FBUyxZQUFhLE9BQU8sT0FBTyxLQUFLO0FBQ3ZDLFFBQUk7QUFDSixRQUFJLFNBQVMsQ0FBQTtBQUNiLGFBQVNBLEtBQUksT0FBT0EsS0FBSSxLQUFLQSxNQUFLLEdBQUc7QUFDbkMsYUFDSSxNQUFNQSxFQUFDLEtBQUssS0FBTSxhQUNsQixNQUFNQSxLQUFJLENBQUMsS0FBSyxJQUFLLFVBQ3RCLE1BQU1BLEtBQUksQ0FBQyxJQUFJO0FBQ2xCLGFBQU8sS0FBSyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUEsSUFDcEM7QUFDRSxXQUFPLE9BQU8sS0FBSyxFQUFFO0FBQUEsRUFDdkI7QUFFQSxXQUFTLGNBQWUsT0FBTztBQUM3QixRQUFJO0FBQ0osUUFBSXdDLE9BQU0sTUFBTTtBQUNoQixRQUFJLGFBQWFBLE9BQU07QUFDdkIsUUFBSSxRQUFRLENBQUE7QUFDWixRQUFJLGlCQUFpQjtBQUdyQixhQUFTeEMsS0FBSSxHQUFHeUMsUUFBT0QsT0FBTSxZQUFZeEMsS0FBSXlDLE9BQU16QyxNQUFLLGdCQUFnQjtBQUN0RSxZQUFNLEtBQUssWUFBWSxPQUFPQSxJQUFJQSxLQUFJLGlCQUFrQnlDLFFBQU9BLFFBQVF6QyxLQUFJLGNBQWUsQ0FBQztBQUFBLElBQy9GO0FBR0UsUUFBSSxlQUFlLEdBQUc7QUFDcEIsWUFBTSxNQUFNd0MsT0FBTSxDQUFDO0FBQ25CLFlBQU07QUFBQSxRQUNKLE9BQU8sT0FBTyxDQUFDLElBQ2YsT0FBUSxPQUFPLElBQUssRUFBSSxJQUN4QjtBQUFBLE1BQ047QUFBQSxJQUNBLFdBQWEsZUFBZSxHQUFHO0FBQzNCLGFBQU8sTUFBTUEsT0FBTSxDQUFDLEtBQUssS0FBSyxNQUFNQSxPQUFNLENBQUM7QUFDM0MsWUFBTTtBQUFBLFFBQ0osT0FBTyxPQUFPLEVBQUUsSUFDaEIsT0FBUSxPQUFPLElBQUssRUFBSSxJQUN4QixPQUFRLE9BQU8sSUFBSyxFQUFJLElBQ3hCO0FBQUEsTUFDTjtBQUFBLElBQ0E7QUFFRSxXQUFPLE1BQU0sS0FBSyxFQUFFO0FBQUEsRUFDdEI7Ozs7Ozs7O0FDcEpBLFVBQUEsT0FBZSxTQUFVRSxTQUFRLFFBQVEsTUFBTSxNQUFNLFFBQVE7QUFDM0QsUUFBSXZDLElBQUdZO0FBQ1AsUUFBSSxPQUFRLFNBQVMsSUFBSyxPQUFPO0FBQ2pDLFFBQUksUUFBUSxLQUFLLFFBQVE7QUFDekIsUUFBSSxRQUFRLFFBQVE7QUFDcEIsUUFBSSxRQUFRO0FBQ1osUUFBSWYsS0FBSSxPQUFRLFNBQVMsSUFBSztBQUM5QixRQUFJVyxLQUFJLE9BQU8sS0FBSztBQUNwQixRQUFJTCxLQUFJb0MsUUFBTyxTQUFTMUMsRUFBQztBQUV6QixJQUFBQSxNQUFLVztBQUVMLElBQUFSLEtBQUlHLE1BQU0sS0FBTSxDQUFDLFNBQVU7QUFDM0IsSUFBQUEsT0FBTyxDQUFDO0FBQ1IsYUFBUztBQUNULFdBQU8sUUFBUSxHQUFHSCxLQUFLQSxLQUFJLE1BQU91QyxRQUFPLFNBQVMxQyxFQUFDLEdBQUdBLE1BQUtXLElBQUcsU0FBUyxHQUFHO0FBQUEsSUFBQTtBQUUxRSxJQUFBSSxLQUFJWixNQUFNLEtBQU0sQ0FBQyxTQUFVO0FBQzNCLElBQUFBLE9BQU8sQ0FBQztBQUNSLGFBQVM7QUFDVCxXQUFPLFFBQVEsR0FBR1ksS0FBS0EsS0FBSSxNQUFPMkIsUUFBTyxTQUFTMUMsRUFBQyxHQUFHQSxNQUFLVyxJQUFHLFNBQVMsR0FBRztBQUFBLElBQUE7QUFFMUUsUUFBSVIsT0FBTSxHQUFHO0FBQ1gsTUFBQUEsS0FBSSxJQUFJO0FBQUEsSUFDWixXQUFhQSxPQUFNLE1BQU07QUFDckIsYUFBT1ksS0FBSSxPQUFRVCxLQUFJLEtBQUssS0FBSztBQUFBLElBQ3JDLE9BQVM7QUFDTCxNQUFBUyxLQUFJQSxLQUFJLEtBQUssSUFBSSxHQUFHLElBQUk7QUFDeEIsTUFBQVosS0FBSUEsS0FBSTtBQUFBLElBQ1o7QUFDRSxZQUFRRyxLQUFJLEtBQUssS0FBS1MsS0FBSSxLQUFLLElBQUksR0FBR1osS0FBSSxJQUFJO0FBQUEsRUFDaEQ7QUFFQSxVQUFBLFFBQWdCLFNBQVV1QyxTQUFRLE9BQU8sUUFBUSxNQUFNLE1BQU0sUUFBUTtBQUNuRSxRQUFJdkMsSUFBR1ksSUFBR1Y7QUFDVixRQUFJLE9BQVEsU0FBUyxJQUFLLE9BQU87QUFDakMsUUFBSSxRQUFRLEtBQUssUUFBUTtBQUN6QixRQUFJLFFBQVEsUUFBUTtBQUNwQixRQUFJLEtBQU0sU0FBUyxLQUFLLEtBQUssSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLElBQUk7QUFDOUQsUUFBSUwsS0FBSSxPQUFPLElBQUssU0FBUztBQUM3QixRQUFJVyxLQUFJLE9BQU8sSUFBSTtBQUNuQixRQUFJTCxLQUFJLFFBQVEsS0FBTSxVQUFVLEtBQUssSUFBSSxRQUFRLElBQUssSUFBSTtBQUUxRCxZQUFRLEtBQUssSUFBSSxLQUFLO0FBRXRCLFFBQUksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVO0FBQ3RDLE1BQUFTLEtBQUksTUFBTSxLQUFLLElBQUksSUFBSTtBQUN2QixNQUFBWixLQUFJO0FBQUEsSUFDUixPQUFTO0FBQ0wsTUFBQUEsS0FBSSxLQUFLLE1BQU0sS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUc7QUFDekMsVUFBSSxTQUFTRSxLQUFJLEtBQUssSUFBSSxHQUFHLENBQUNGLEVBQUMsS0FBSyxHQUFHO0FBQ3JDLFFBQUFBO0FBQ0EsUUFBQUUsTUFBSztBQUFBLE1BQ1g7QUFDSSxVQUFJRixLQUFJLFNBQVMsR0FBRztBQUNsQixpQkFBUyxLQUFLRTtBQUFBLE1BQ3BCLE9BQVc7QUFDTCxpQkFBUyxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSztBQUFBLE1BQ3pDO0FBQ0ksVUFBSSxRQUFRQSxNQUFLLEdBQUc7QUFDbEIsUUFBQUY7QUFDQSxRQUFBRSxNQUFLO0FBQUEsTUFDWDtBQUVJLFVBQUlGLEtBQUksU0FBUyxNQUFNO0FBQ3JCLFFBQUFZLEtBQUk7QUFDSixRQUFBWixLQUFJO0FBQUEsTUFDVixXQUFlQSxLQUFJLFNBQVMsR0FBRztBQUN6QixRQUFBWSxNQUFNLFFBQVFWLEtBQUssS0FBSyxLQUFLLElBQUksR0FBRyxJQUFJO0FBQ3hDLFFBQUFGLEtBQUlBLEtBQUk7QUFBQSxNQUNkLE9BQVc7QUFDTCxRQUFBWSxLQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSTtBQUNyRCxRQUFBWixLQUFJO0FBQUEsTUFDVjtBQUFBLElBQ0E7QUFFRSxXQUFPLFFBQVEsR0FBR3VDLFFBQU8sU0FBUzFDLEVBQUMsSUFBSWUsS0FBSSxLQUFNZixNQUFLVyxJQUFHSSxNQUFLLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFBQTtBQUU5RSxJQUFBWixLQUFLQSxNQUFLLE9BQVFZO0FBQ2xCLFlBQVE7QUFDUixXQUFPLE9BQU8sR0FBRzJCLFFBQU8sU0FBUzFDLEVBQUMsSUFBSUcsS0FBSSxLQUFNSCxNQUFLVyxJQUFHUixNQUFLLEtBQUssUUFBUSxHQUFHO0FBQUEsSUFBQTtBQUU3RSxJQUFBdUMsUUFBTyxTQUFTMUMsS0FBSVcsRUFBQyxLQUFLTCxLQUFJO0FBQUEsRUFDaEM7Ozs7Ozs7O0FDMUVBLFVBQU0sU0FBU3FDLGdCQUFBO0FBQ2YsVUFBTUMsV0FBVUMsZUFBQTtBQUNoQixVQUFNLHNCQUNILE9BQU8sV0FBVyxjQUFjLE9BQU8sT0FBTyxLQUFLLE1BQU0sYUFDdEQsT0FBTyxLQUFLLEVBQUUsNEJBQTRCLElBQzFDO0FBRU5DLGNBQUEsU0FBaUJDO0FBQ2pCRCxjQUFBLGFBQXFCO0FBQ3JCQSxjQUFBLG9CQUE0QjtBQUU1QixVQUFNLGVBQWU7QUFDckJBLGNBQUEsYUFBcUI7QUFnQnJCLElBQUFDLFFBQU8sc0JBQXNCLGtCQUFpQjtBQUU5QyxRQUFJLENBQUNBLFFBQU8sdUJBQXVCLE9BQU8sWUFBWSxlQUNsRCxPQUFPLFFBQVEsVUFBVSxZQUFZO0FBQ3ZDLGNBQVE7QUFBQSxRQUNOO0FBQUEsTUFFSjtBQUFBLElBQ0E7QUFFQSxhQUFTLG9CQUFxQjtBQUU1QixVQUFJO0FBQ0YsY0FBTSxNQUFNLElBQUksV0FBVyxDQUFDO0FBQzVCLGNBQU0sUUFBUSxFQUFFLEtBQUssV0FBWTtBQUFFLGlCQUFPO0FBQUEsUUFBRSxFQUFFO0FBQzlDLGVBQU8sZUFBZSxPQUFPLFdBQVcsU0FBUztBQUNqRCxlQUFPLGVBQWUsS0FBSyxLQUFLO0FBQ2hDLGVBQU8sSUFBSSxVQUFVO0FBQUEsTUFDekIsU0FBVzVDLElBQUc7QUFDVixlQUFPO0FBQUEsTUFDWDtBQUFBLElBQ0E7QUFFQSxXQUFPLGVBQWU0QyxRQUFPLFdBQVcsVUFBVTtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUNmLFlBQUksQ0FBQ0EsUUFBTyxTQUFTLElBQUksRUFBRyxRQUFPO0FBQ25DLGVBQU8sS0FBSztBQUFBLE1BQ2hCO0FBQUEsS0FDQztBQUVELFdBQU8sZUFBZUEsUUFBTyxXQUFXLFVBQVU7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFDZixZQUFJLENBQUNBLFFBQU8sU0FBUyxJQUFJLEVBQUcsUUFBTztBQUNuQyxlQUFPLEtBQUs7QUFBQSxNQUNoQjtBQUFBLEtBQ0M7QUFFRCxhQUFTLGFBQWMsUUFBUTtBQUM3QixVQUFJLFNBQVMsY0FBYztBQUN6QixjQUFNLElBQUksV0FBVyxnQkFBZ0IsU0FBUyxnQ0FBZ0M7QUFBQSxNQUNsRjtBQUVFLFlBQU0sTUFBTSxJQUFJLFdBQVcsTUFBTTtBQUNqQyxhQUFPLGVBQWUsS0FBS0EsUUFBTyxTQUFTO0FBQzNDLGFBQU87QUFBQSxJQUNUO0FBWUEsYUFBU0EsUUFBUSxLQUFLLGtCQUFrQixRQUFRO0FBRTlDLFVBQUksT0FBTyxRQUFRLFVBQVU7QUFDM0IsWUFBSSxPQUFPLHFCQUFxQixVQUFVO0FBQ3hDLGdCQUFNLElBQUk7QUFBQSxZQUNSO0FBQUEsVUFDUjtBQUFBLFFBQ0E7QUFDSSxlQUFPLFlBQVksR0FBRztBQUFBLE1BQzFCO0FBQ0UsYUFBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU07QUFBQSxJQUMzQztBQUVBLElBQUFBLFFBQU8sV0FBVztBQUVsQixhQUFTLEtBQU0sT0FBTyxrQkFBa0IsUUFBUTtBQUM5QyxVQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzdCLGVBQU8sV0FBVyxPQUFPLGdCQUFnQjtBQUFBLE1BQzdDO0FBRUUsVUFBSSxZQUFZLE9BQU8sS0FBSyxHQUFHO0FBQzdCLGVBQU8sY0FBYyxLQUFLO0FBQUEsTUFDOUI7QUFFRSxVQUFJLFNBQVMsTUFBTTtBQUNqQixjQUFNLElBQUk7QUFBQSxVQUNSLG9IQUMwQyxPQUFPO0FBQUEsUUFDdkQ7QUFBQSxNQUNBO0FBRUUsVUFBSSxXQUFXLE9BQU8sV0FBVyxLQUM1QixTQUFTLFdBQVcsTUFBTSxRQUFRLFdBQVcsR0FBSTtBQUNwRCxlQUFPLGdCQUFnQixPQUFPLGtCQUFrQixNQUFNO0FBQUEsTUFDMUQ7QUFFRSxVQUFJLE9BQU8sc0JBQXNCLGdCQUM1QixXQUFXLE9BQU8saUJBQWlCLEtBQ25DLFNBQVMsV0FBVyxNQUFNLFFBQVEsaUJBQWlCLElBQUs7QUFDM0QsZUFBTyxnQkFBZ0IsT0FBTyxrQkFBa0IsTUFBTTtBQUFBLE1BQzFEO0FBRUUsVUFBSSxPQUFPLFVBQVUsVUFBVTtBQUM3QixjQUFNLElBQUk7QUFBQSxVQUNSO0FBQUEsUUFDTjtBQUFBLE1BQ0E7QUFFRSxZQUFNLFVBQVUsTUFBTSxXQUFXLE1BQU0sUUFBTztBQUM5QyxVQUFJLFdBQVcsUUFBUSxZQUFZLE9BQU87QUFDeEMsZUFBT0EsUUFBTyxLQUFLLFNBQVMsa0JBQWtCLE1BQU07QUFBQSxNQUN4RDtBQUVFLFlBQU16QixLQUFJLFdBQVcsS0FBSztBQUMxQixVQUFJQSxHQUFHLFFBQU9BO0FBRWQsVUFBSSxPQUFPLFdBQVcsZUFBZSxPQUFPLGVBQWUsUUFDdkQsT0FBTyxNQUFNLE9BQU8sV0FBVyxNQUFNLFlBQVk7QUFDbkQsZUFBT3lCLFFBQU8sS0FBSyxNQUFNLE9BQU8sV0FBVyxFQUFFLFFBQVEsR0FBRyxrQkFBa0IsTUFBTTtBQUFBLE1BQ3BGO0FBRUUsWUFBTSxJQUFJO0FBQUEsUUFDUixvSEFDMEMsT0FBTztBQUFBLE1BQ3JEO0FBQUEsSUFDQTtBQVVBLElBQUFBLFFBQU8sT0FBTyxTQUFVLE9BQU8sa0JBQWtCLFFBQVE7QUFDdkQsYUFBTyxLQUFLLE9BQU8sa0JBQWtCLE1BQU07QUFBQSxJQUM3QztBQUlBLFdBQU8sZUFBZUEsUUFBTyxXQUFXLFdBQVcsU0FBUztBQUM1RCxXQUFPLGVBQWVBLFNBQVEsVUFBVTtBQUV4QyxhQUFTLFdBQVksTUFBTTtBQUN6QixVQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLGNBQU0sSUFBSSxVQUFVLHdDQUF3QztBQUFBLE1BQ2hFLFdBQWEsT0FBTyxHQUFHO0FBQ25CLGNBQU0sSUFBSSxXQUFXLGdCQUFnQixPQUFPLGdDQUFnQztBQUFBLE1BQ2hGO0FBQUEsSUFDQTtBQUVBLGFBQVMsTUFBTyxNQUFNLE1BQU1DLFdBQVU7QUFDcEMsaUJBQVcsSUFBSTtBQUNmLFVBQUksUUFBUSxHQUFHO0FBQ2IsZUFBTyxhQUFhLElBQUk7QUFBQSxNQUM1QjtBQUNFLFVBQUksU0FBUyxRQUFXO0FBSXRCLGVBQU8sT0FBT0EsY0FBYSxXQUN2QixhQUFhLElBQUksRUFBRSxLQUFLLE1BQU1BLFNBQVEsSUFDdEMsYUFBYSxJQUFJLEVBQUUsS0FBSyxJQUFJO0FBQUEsTUFDcEM7QUFDRSxhQUFPLGFBQWEsSUFBSTtBQUFBLElBQzFCO0FBTUEsSUFBQUQsUUFBTyxRQUFRLFNBQVUsTUFBTSxNQUFNQyxXQUFVO0FBQzdDLGFBQU8sTUFBTSxNQUFNLE1BQU1BLFNBQVE7QUFBQSxJQUNuQztBQUVBLGFBQVMsWUFBYSxNQUFNO0FBQzFCLGlCQUFXLElBQUk7QUFDZixhQUFPLGFBQWEsT0FBTyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQztBQUFBLElBQ3REO0FBS0EsSUFBQUQsUUFBTyxjQUFjLFNBQVUsTUFBTTtBQUNuQyxhQUFPLFlBQVksSUFBSTtBQUFBLElBQ3pCO0FBSUEsSUFBQUEsUUFBTyxrQkFBa0IsU0FBVSxNQUFNO0FBQ3ZDLGFBQU8sWUFBWSxJQUFJO0FBQUEsSUFDekI7QUFFQSxhQUFTLFdBQVksUUFBUUMsV0FBVTtBQUNyQyxVQUFJLE9BQU9BLGNBQWEsWUFBWUEsY0FBYSxJQUFJO0FBQ25ELFFBQUFBLFlBQVc7QUFBQSxNQUNmO0FBRUUsVUFBSSxDQUFDRCxRQUFPLFdBQVdDLFNBQVEsR0FBRztBQUNoQyxjQUFNLElBQUksVUFBVSx1QkFBdUJBLFNBQVE7QUFBQSxNQUN2RDtBQUVFLFlBQU0sU0FBUyxXQUFXLFFBQVFBLFNBQVEsSUFBSTtBQUM5QyxVQUFJLE1BQU0sYUFBYSxNQUFNO0FBRTdCLFlBQU0sU0FBUyxJQUFJLE1BQU0sUUFBUUEsU0FBUTtBQUV6QyxVQUFJLFdBQVcsUUFBUTtBQUlyQixjQUFNLElBQUksTUFBTSxHQUFHLE1BQU07QUFBQSxNQUM3QjtBQUVFLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxjQUFlLE9BQU87QUFDN0IsWUFBTSxTQUFTLE1BQU0sU0FBUyxJQUFJLElBQUksUUFBUSxNQUFNLE1BQU0sSUFBSTtBQUM5RCxZQUFNLE1BQU0sYUFBYSxNQUFNO0FBQy9CLGVBQVNoRCxLQUFJLEdBQUdBLEtBQUksUUFBUUEsTUFBSyxHQUFHO0FBQ2xDLFlBQUlBLEVBQUMsSUFBSSxNQUFNQSxFQUFDLElBQUk7QUFBQSxNQUN4QjtBQUNFLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxjQUFlLFdBQVc7QUFDakMsVUFBSSxXQUFXLFdBQVcsVUFBVSxHQUFHO0FBQ3JDLGNBQU0sT0FBTyxJQUFJLFdBQVcsU0FBUztBQUNyQyxlQUFPLGdCQUFnQixLQUFLLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVTtBQUFBLE1BQ3hFO0FBQ0UsYUFBTyxjQUFjLFNBQVM7QUFBQSxJQUNoQztBQUVBLGFBQVMsZ0JBQWlCLE9BQU8sWUFBWSxRQUFRO0FBQ25ELFVBQUksYUFBYSxLQUFLLE1BQU0sYUFBYSxZQUFZO0FBQ25ELGNBQU0sSUFBSSxXQUFXLHNDQUFzQztBQUFBLE1BQy9EO0FBRUUsVUFBSSxNQUFNLGFBQWEsY0FBYyxVQUFVLElBQUk7QUFDakQsY0FBTSxJQUFJLFdBQVcsc0NBQXNDO0FBQUEsTUFDL0Q7QUFFRSxVQUFJO0FBQ0osVUFBSSxlQUFlLFVBQWEsV0FBVyxRQUFXO0FBQ3BELGNBQU0sSUFBSSxXQUFXLEtBQUs7QUFBQSxNQUM5QixXQUFhLFdBQVcsUUFBVztBQUMvQixjQUFNLElBQUksV0FBVyxPQUFPLFVBQVU7QUFBQSxNQUMxQyxPQUFTO0FBQ0wsY0FBTSxJQUFJLFdBQVcsT0FBTyxZQUFZLE1BQU07QUFBQSxNQUNsRDtBQUdFLGFBQU8sZUFBZSxLQUFLK0MsUUFBTyxTQUFTO0FBRTNDLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxXQUFZLEtBQUs7QUFDeEIsVUFBSUEsUUFBTyxTQUFTLEdBQUcsR0FBRztBQUN4QixjQUFNLE1BQU0sUUFBUSxJQUFJLE1BQU0sSUFBSTtBQUNsQyxjQUFNLE1BQU0sYUFBYSxHQUFHO0FBRTVCLFlBQUksSUFBSSxXQUFXLEdBQUc7QUFDcEIsaUJBQU87QUFBQSxRQUNiO0FBRUksWUFBSSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUc7QUFDdkIsZUFBTztBQUFBLE1BQ1g7QUFFRSxVQUFJLElBQUksV0FBVyxRQUFXO0FBQzVCLFlBQUksT0FBTyxJQUFJLFdBQVcsWUFBWSxZQUFZLElBQUksTUFBTSxHQUFHO0FBQzdELGlCQUFPLGFBQWEsQ0FBQztBQUFBLFFBQzNCO0FBQ0ksZUFBTyxjQUFjLEdBQUc7QUFBQSxNQUM1QjtBQUVFLFVBQUksSUFBSSxTQUFTLFlBQVksTUFBTSxRQUFRLElBQUksSUFBSSxHQUFHO0FBQ3BELGVBQU8sY0FBYyxJQUFJLElBQUk7QUFBQSxNQUNqQztBQUFBLElBQ0E7QUFFQSxhQUFTLFFBQVMsUUFBUTtBQUd4QixVQUFJLFVBQVUsY0FBYztBQUMxQixjQUFNLElBQUksV0FBVyw0REFDYSxhQUFhLFNBQVMsRUFBRSxJQUFJLFFBQVE7QUFBQSxNQUMxRTtBQUNFLGFBQU8sU0FBUztBQUFBLElBQ2xCO0FBRUEsYUFBUyxXQUFZLFFBQVE7QUFDM0IsVUFBSSxDQUFDLFVBQVUsUUFBUTtBQUNyQixpQkFBUztBQUFBLE1BQ2I7QUFDRSxhQUFPQSxRQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQUEsSUFDN0I7QUFFQSxJQUFBQSxRQUFPLFdBQVcsU0FBUyxTQUFVekIsSUFBRztBQUN0QyxhQUFPQSxNQUFLLFFBQVFBLEdBQUUsY0FBYyxRQUNsQ0EsT0FBTXlCLFFBQU87QUFBQSxJQUNqQjtBQUVBLElBQUFBLFFBQU8sVUFBVSxTQUFTLFFBQVN4QyxJQUFHZSxJQUFHO0FBQ3ZDLFVBQUksV0FBV2YsSUFBRyxVQUFVLEVBQUcsQ0FBQUEsS0FBSXdDLFFBQU8sS0FBS3hDLElBQUdBLEdBQUUsUUFBUUEsR0FBRSxVQUFVO0FBQ3hFLFVBQUksV0FBV2UsSUFBRyxVQUFVLEVBQUcsQ0FBQUEsS0FBSXlCLFFBQU8sS0FBS3pCLElBQUdBLEdBQUUsUUFBUUEsR0FBRSxVQUFVO0FBQ3hFLFVBQUksQ0FBQ3lCLFFBQU8sU0FBU3hDLEVBQUMsS0FBSyxDQUFDd0MsUUFBTyxTQUFTekIsRUFBQyxHQUFHO0FBQzlDLGNBQU0sSUFBSTtBQUFBLFVBQ1I7QUFBQSxRQUNOO0FBQUEsTUFDQTtBQUVFLFVBQUlmLE9BQU1lLEdBQUcsUUFBTztBQUVwQixVQUFJTCxLQUFJVixHQUFFO0FBQ1YsVUFBSUcsS0FBSVksR0FBRTtBQUVWLGVBQVN0QixLQUFJLEdBQUcsTUFBTSxLQUFLLElBQUlpQixJQUFHUCxFQUFDLEdBQUdWLEtBQUksS0FBSyxFQUFFQSxJQUFHO0FBQ2xELFlBQUlPLEdBQUVQLEVBQUMsTUFBTXNCLEdBQUV0QixFQUFDLEdBQUc7QUFDakIsVUFBQWlCLEtBQUlWLEdBQUVQLEVBQUM7QUFDUCxVQUFBVSxLQUFJWSxHQUFFdEIsRUFBQztBQUNQO0FBQUEsUUFDTjtBQUFBLE1BQ0E7QUFFRSxVQUFJaUIsS0FBSVAsR0FBRyxRQUFPO0FBQ2xCLFVBQUlBLEtBQUlPLEdBQUcsUUFBTztBQUNsQixhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUE4QixRQUFPLGFBQWEsU0FBUyxXQUFZQyxXQUFVO0FBQ2pELGNBQVEsT0FBT0EsU0FBUSxFQUFFLFlBQVcsR0FBRTtBQUFBLFFBQ3BDLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFDSCxpQkFBTztBQUFBLFFBQ1Q7QUFDRSxpQkFBTztBQUFBLE1BQ2I7QUFBQSxJQUNBO0FBRUEsSUFBQUQsUUFBTyxTQUFTLFNBQVMsT0FBUSxNQUFNLFFBQVE7QUFDN0MsVUFBSSxDQUFDLE1BQU0sUUFBUSxJQUFJLEdBQUc7QUFDeEIsY0FBTSxJQUFJLFVBQVUsNkNBQTZDO0FBQUEsTUFDckU7QUFFRSxVQUFJLEtBQUssV0FBVyxHQUFHO0FBQ3JCLGVBQU9BLFFBQU8sTUFBTSxDQUFDO0FBQUEsTUFDekI7QUFFRSxVQUFJL0M7QUFDSixVQUFJLFdBQVcsUUFBVztBQUN4QixpQkFBUztBQUNULGFBQUtBLEtBQUksR0FBR0EsS0FBSSxLQUFLLFFBQVEsRUFBRUEsSUFBRztBQUNoQyxvQkFBVSxLQUFLQSxFQUFDLEVBQUU7QUFBQSxRQUN4QjtBQUFBLE1BQ0E7QUFFRSxZQUFNMEMsVUFBU0ssUUFBTyxZQUFZLE1BQU07QUFDeEMsVUFBSSxNQUFNO0FBQ1YsV0FBSy9DLEtBQUksR0FBR0EsS0FBSSxLQUFLLFFBQVEsRUFBRUEsSUFBRztBQUNoQyxZQUFJLE1BQU0sS0FBS0EsRUFBQztBQUNoQixZQUFJLFdBQVcsS0FBSyxVQUFVLEdBQUc7QUFDL0IsY0FBSSxNQUFNLElBQUksU0FBUzBDLFFBQU8sUUFBUTtBQUNwQyxnQkFBSSxDQUFDSyxRQUFPLFNBQVMsR0FBRyxFQUFHLE9BQU1BLFFBQU8sS0FBSyxHQUFHO0FBQ2hELGdCQUFJLEtBQUtMLFNBQVEsR0FBRztBQUFBLFVBQzVCLE9BQWE7QUFDTCx1QkFBVyxVQUFVLElBQUk7QUFBQSxjQUN2QkE7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ1Y7QUFBQSxVQUNBO0FBQUEsUUFDQSxXQUFlLENBQUNLLFFBQU8sU0FBUyxHQUFHLEdBQUc7QUFDaEMsZ0JBQU0sSUFBSSxVQUFVLDZDQUE2QztBQUFBLFFBQ3ZFLE9BQVc7QUFDTCxjQUFJLEtBQUtMLFNBQVEsR0FBRztBQUFBLFFBQzFCO0FBQ0ksZUFBTyxJQUFJO0FBQUEsTUFDZjtBQUNFLGFBQU9BO0FBQUEsSUFDVDtBQUVBLGFBQVMsV0FBWSxRQUFRTSxXQUFVO0FBQ3JDLFVBQUlELFFBQU8sU0FBUyxNQUFNLEdBQUc7QUFDM0IsZUFBTyxPQUFPO0FBQUEsTUFDbEI7QUFDRSxVQUFJLFlBQVksT0FBTyxNQUFNLEtBQUssV0FBVyxRQUFRLFdBQVcsR0FBRztBQUNqRSxlQUFPLE9BQU87QUFBQSxNQUNsQjtBQUNFLFVBQUksT0FBTyxXQUFXLFVBQVU7QUFDOUIsY0FBTSxJQUFJO0FBQUEsVUFDUiw2RkFDbUIsT0FBTztBQUFBLFFBQ2hDO0FBQUEsTUFDQTtBQUVFLFlBQU0sTUFBTSxPQUFPO0FBQ25CLFlBQU0sWUFBYSxVQUFVLFNBQVMsS0FBSyxVQUFVLENBQUMsTUFBTTtBQUM1RCxVQUFJLENBQUMsYUFBYSxRQUFRLEVBQUcsUUFBTztBQUdwQyxVQUFJLGNBQWM7QUFDbEIsaUJBQVM7QUFDUCxnQkFBUUMsV0FBUTtBQUFBLFVBQ2QsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQ0gsbUJBQU8sWUFBWSxNQUFNLEVBQUU7QUFBQSxVQUM3QixLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQ0gsbUJBQU8sTUFBTTtBQUFBLFVBQ2YsS0FBSztBQUNILG1CQUFPLFFBQVE7QUFBQSxVQUNqQixLQUFLO0FBQ0gsbUJBQU8sY0FBYyxNQUFNLEVBQUU7QUFBQSxVQUMvQjtBQUNFLGdCQUFJLGFBQWE7QUFDZixxQkFBTyxZQUFZLEtBQUssWUFBWSxNQUFNLEVBQUU7QUFBQSxZQUN0RDtBQUNRLFlBQUFBLGFBQVksS0FBS0EsV0FBVSxZQUFXO0FBQ3RDLDBCQUFjO0FBQUEsUUFDdEI7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUNBLElBQUFELFFBQU8sYUFBYTtBQUVwQixhQUFTLGFBQWNDLFdBQVUsT0FBTyxLQUFLO0FBQzNDLFVBQUksY0FBYztBQVNsQixVQUFJLFVBQVUsVUFBYSxRQUFRLEdBQUc7QUFDcEMsZ0JBQVE7QUFBQSxNQUNaO0FBR0UsVUFBSSxRQUFRLEtBQUssUUFBUTtBQUN2QixlQUFPO0FBQUEsTUFDWDtBQUVFLFVBQUksUUFBUSxVQUFhLE1BQU0sS0FBSyxRQUFRO0FBQzFDLGNBQU0sS0FBSztBQUFBLE1BQ2Y7QUFFRSxVQUFJLE9BQU8sR0FBRztBQUNaLGVBQU87QUFBQSxNQUNYO0FBR0UsZUFBUztBQUNULGlCQUFXO0FBRVgsVUFBSSxPQUFPLE9BQU87QUFDaEIsZUFBTztBQUFBLE1BQ1g7QUFFRSxVQUFJLENBQUNBLFVBQVUsQ0FBQUEsWUFBVztBQUUxQixhQUFPLE1BQU07QUFDWCxnQkFBUUEsV0FBUTtBQUFBLFVBQ2QsS0FBSztBQUNILG1CQUFPLFNBQVMsTUFBTSxPQUFPLEdBQUc7QUFBQSxVQUVsQyxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQ0gsbUJBQU8sVUFBVSxNQUFNLE9BQU8sR0FBRztBQUFBLFVBRW5DLEtBQUs7QUFDSCxtQkFBTyxXQUFXLE1BQU0sT0FBTyxHQUFHO0FBQUEsVUFFcEMsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUNILG1CQUFPLFlBQVksTUFBTSxPQUFPLEdBQUc7QUFBQSxVQUVyQyxLQUFLO0FBQ0gsbUJBQU8sWUFBWSxNQUFNLE9BQU8sR0FBRztBQUFBLFVBRXJDLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFDSCxtQkFBTyxhQUFhLE1BQU0sT0FBTyxHQUFHO0FBQUEsVUFFdEM7QUFDRSxnQkFBSSxZQUFhLE9BQU0sSUFBSSxVQUFVLHVCQUF1QkEsU0FBUTtBQUNwRSxZQUFBQSxhQUFZQSxZQUFXLElBQUksWUFBVztBQUN0QywwQkFBYztBQUFBLFFBQ3RCO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFRQSxJQUFBRCxRQUFPLFVBQVUsWUFBWTtBQUU3QixhQUFTLEtBQU16QixJQUFHMUIsSUFBR21CLElBQUc7QUFDdEIsWUFBTWYsS0FBSXNCLEdBQUUxQixFQUFDO0FBQ2IsTUFBQTBCLEdBQUUxQixFQUFDLElBQUkwQixHQUFFUCxFQUFDO0FBQ1YsTUFBQU8sR0FBRVAsRUFBQyxJQUFJZjtBQUFBLElBQ1Q7QUFFQSxJQUFBK0MsUUFBTyxVQUFVLFNBQVMsU0FBUyxTQUFVO0FBQzNDLFlBQU0sTUFBTSxLQUFLO0FBQ2pCLFVBQUksTUFBTSxNQUFNLEdBQUc7QUFDakIsY0FBTSxJQUFJLFdBQVcsMkNBQTJDO0FBQUEsTUFDcEU7QUFDRSxlQUFTL0MsS0FBSSxHQUFHQSxLQUFJLEtBQUtBLE1BQUssR0FBRztBQUMvQixhQUFLLE1BQU1BLElBQUdBLEtBQUksQ0FBQztBQUFBLE1BQ3ZCO0FBQ0UsYUFBTztBQUFBLElBQ1Q7QUFFQSxJQUFBK0MsUUFBTyxVQUFVLFNBQVMsU0FBUyxTQUFVO0FBQzNDLFlBQU0sTUFBTSxLQUFLO0FBQ2pCLFVBQUksTUFBTSxNQUFNLEdBQUc7QUFDakIsY0FBTSxJQUFJLFdBQVcsMkNBQTJDO0FBQUEsTUFDcEU7QUFDRSxlQUFTL0MsS0FBSSxHQUFHQSxLQUFJLEtBQUtBLE1BQUssR0FBRztBQUMvQixhQUFLLE1BQU1BLElBQUdBLEtBQUksQ0FBQztBQUNuQixhQUFLLE1BQU1BLEtBQUksR0FBR0EsS0FBSSxDQUFDO0FBQUEsTUFDM0I7QUFDRSxhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUErQyxRQUFPLFVBQVUsU0FBUyxTQUFTLFNBQVU7QUFDM0MsWUFBTSxNQUFNLEtBQUs7QUFDakIsVUFBSSxNQUFNLE1BQU0sR0FBRztBQUNqQixjQUFNLElBQUksV0FBVywyQ0FBMkM7QUFBQSxNQUNwRTtBQUNFLGVBQVMvQyxLQUFJLEdBQUdBLEtBQUksS0FBS0EsTUFBSyxHQUFHO0FBQy9CLGFBQUssTUFBTUEsSUFBR0EsS0FBSSxDQUFDO0FBQ25CLGFBQUssTUFBTUEsS0FBSSxHQUFHQSxLQUFJLENBQUM7QUFDdkIsYUFBSyxNQUFNQSxLQUFJLEdBQUdBLEtBQUksQ0FBQztBQUN2QixhQUFLLE1BQU1BLEtBQUksR0FBR0EsS0FBSSxDQUFDO0FBQUEsTUFDM0I7QUFDRSxhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUErQyxRQUFPLFVBQVUsV0FBVyxTQUFTLFdBQVk7QUFDL0MsWUFBTSxTQUFTLEtBQUs7QUFDcEIsVUFBSSxXQUFXLEVBQUcsUUFBTztBQUN6QixVQUFJLFVBQVUsV0FBVyxFQUFHLFFBQU8sVUFBVSxNQUFNLEdBQUcsTUFBTTtBQUM1RCxhQUFPLGFBQWEsTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUMzQztBQUVBLElBQUFBLFFBQU8sVUFBVSxpQkFBaUJBLFFBQU8sVUFBVTtBQUVuRCxJQUFBQSxRQUFPLFVBQVUsU0FBUyxTQUFTLE9BQVF6QixJQUFHO0FBQzVDLFVBQUksQ0FBQ3lCLFFBQU8sU0FBU3pCLEVBQUMsRUFBRyxPQUFNLElBQUksVUFBVSwyQkFBMkI7QUFDeEUsVUFBSSxTQUFTQSxHQUFHLFFBQU87QUFDdkIsYUFBT3lCLFFBQU8sUUFBUSxNQUFNekIsRUFBQyxNQUFNO0FBQUEsSUFDckM7QUFFQSxJQUFBeUIsUUFBTyxVQUFVLFVBQVUsU0FBUyxVQUFXO0FBQzdDLFVBQUksTUFBTTtBQUNWLFlBQU0sTUFBTUQsVUFBUTtBQUNwQixZQUFNLEtBQUssU0FBUyxPQUFPLEdBQUcsR0FBRyxFQUFFLFFBQVEsV0FBVyxLQUFLLEVBQUUsS0FBSTtBQUNqRSxVQUFJLEtBQUssU0FBUyxJQUFLLFFBQU87QUFDOUIsYUFBTyxhQUFhLE1BQU07QUFBQSxJQUM1QjtBQUNBLFFBQUkscUJBQXFCO0FBQ3ZCLE1BQUFDLFFBQU8sVUFBVSxtQkFBbUIsSUFBSUEsUUFBTyxVQUFVO0FBQUEsSUFDM0Q7QUFFQSxJQUFBQSxRQUFPLFVBQVUsVUFBVSxTQUFTLFFBQVMsUUFBUSxPQUFPLEtBQUssV0FBVyxTQUFTO0FBQ25GLFVBQUksV0FBVyxRQUFRLFVBQVUsR0FBRztBQUNsQyxpQkFBU0EsUUFBTyxLQUFLLFFBQVEsT0FBTyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ2pFO0FBQ0UsVUFBSSxDQUFDQSxRQUFPLFNBQVMsTUFBTSxHQUFHO0FBQzVCLGNBQU0sSUFBSTtBQUFBLFVBQ1IsbUZBQ29CLE9BQU87QUFBQSxRQUNqQztBQUFBLE1BQ0E7QUFFRSxVQUFJLFVBQVUsUUFBVztBQUN2QixnQkFBUTtBQUFBLE1BQ1o7QUFDRSxVQUFJLFFBQVEsUUFBVztBQUNyQixjQUFNLFNBQVMsT0FBTyxTQUFTO0FBQUEsTUFDbkM7QUFDRSxVQUFJLGNBQWMsUUFBVztBQUMzQixvQkFBWTtBQUFBLE1BQ2hCO0FBQ0UsVUFBSSxZQUFZLFFBQVc7QUFDekIsa0JBQVUsS0FBSztBQUFBLE1BQ25CO0FBRUUsVUFBSSxRQUFRLEtBQUssTUFBTSxPQUFPLFVBQVUsWUFBWSxLQUFLLFVBQVUsS0FBSyxRQUFRO0FBQzlFLGNBQU0sSUFBSSxXQUFXLG9CQUFvQjtBQUFBLE1BQzdDO0FBRUUsVUFBSSxhQUFhLFdBQVcsU0FBUyxLQUFLO0FBQ3hDLGVBQU87QUFBQSxNQUNYO0FBQ0UsVUFBSSxhQUFhLFNBQVM7QUFDeEIsZUFBTztBQUFBLE1BQ1g7QUFDRSxVQUFJLFNBQVMsS0FBSztBQUNoQixlQUFPO0FBQUEsTUFDWDtBQUVFLGlCQUFXO0FBQ1gsZUFBUztBQUNULHFCQUFlO0FBQ2YsbUJBQWE7QUFFYixVQUFJLFNBQVMsT0FBUSxRQUFPO0FBRTVCLFVBQUk5QixLQUFJLFVBQVU7QUFDbEIsVUFBSVAsS0FBSSxNQUFNO0FBQ2QsWUFBTSxNQUFNLEtBQUssSUFBSU8sSUFBR1AsRUFBQztBQUV6QixZQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsT0FBTztBQUM5QyxZQUFNLGFBQWEsT0FBTyxNQUFNLE9BQU8sR0FBRztBQUUxQyxlQUFTVixLQUFJLEdBQUdBLEtBQUksS0FBSyxFQUFFQSxJQUFHO0FBQzVCLFlBQUksU0FBU0EsRUFBQyxNQUFNLFdBQVdBLEVBQUMsR0FBRztBQUNqQyxVQUFBaUIsS0FBSSxTQUFTakIsRUFBQztBQUNkLFVBQUFVLEtBQUksV0FBV1YsRUFBQztBQUNoQjtBQUFBLFFBQ047QUFBQSxNQUNBO0FBRUUsVUFBSWlCLEtBQUlQLEdBQUcsUUFBTztBQUNsQixVQUFJQSxLQUFJTyxHQUFHLFFBQU87QUFDbEIsYUFBTztBQUFBLElBQ1Q7QUFXQSxhQUFTLHFCQUFzQnlCLFNBQVEsS0FBSyxZQUFZTSxXQUFVLEtBQUs7QUFFckUsVUFBSU4sUUFBTyxXQUFXLEVBQUcsUUFBTztBQUdoQyxVQUFJLE9BQU8sZUFBZSxVQUFVO0FBQ2xDLFFBQUFNLFlBQVc7QUFDWCxxQkFBYTtBQUFBLE1BQ2pCLFdBQWEsYUFBYSxZQUFZO0FBQ2xDLHFCQUFhO0FBQUEsTUFDakIsV0FBYSxhQUFhLGFBQWE7QUFDbkMscUJBQWE7QUFBQSxNQUNqQjtBQUNFLG1CQUFhLENBQUM7QUFDZCxVQUFJLFlBQVksVUFBVSxHQUFHO0FBRTNCLHFCQUFhLE1BQU0sSUFBS04sUUFBTyxTQUFTO0FBQUEsTUFDNUM7QUFHRSxVQUFJLGFBQWEsRUFBRyxjQUFhQSxRQUFPLFNBQVM7QUFDakQsVUFBSSxjQUFjQSxRQUFPLFFBQVE7QUFDL0IsWUFBSSxJQUFLLFFBQU87QUFBQSxZQUNYLGNBQWFBLFFBQU8sU0FBUztBQUFBLE1BQ3RDLFdBQWEsYUFBYSxHQUFHO0FBQ3pCLFlBQUksSUFBSyxjQUFhO0FBQUEsWUFDakIsUUFBTztBQUFBLE1BQ2hCO0FBR0UsVUFBSSxPQUFPLFFBQVEsVUFBVTtBQUMzQixjQUFNSyxRQUFPLEtBQUssS0FBS0MsU0FBUTtBQUFBLE1BQ25DO0FBR0UsVUFBSUQsUUFBTyxTQUFTLEdBQUcsR0FBRztBQUV4QixZQUFJLElBQUksV0FBVyxHQUFHO0FBQ3BCLGlCQUFPO0FBQUEsUUFDYjtBQUNJLGVBQU8sYUFBYUwsU0FBUSxLQUFLLFlBQVlNLFdBQVUsR0FBRztBQUFBLE1BQzlELFdBQWEsT0FBTyxRQUFRLFVBQVU7QUFDbEMsY0FBTSxNQUFNO0FBQ1osWUFBSSxPQUFPLFdBQVcsVUFBVSxZQUFZLFlBQVk7QUFDdEQsY0FBSSxLQUFLO0FBQ1AsbUJBQU8sV0FBVyxVQUFVLFFBQVEsS0FBS04sU0FBUSxLQUFLLFVBQVU7QUFBQSxVQUN4RSxPQUFhO0FBQ0wsbUJBQU8sV0FBVyxVQUFVLFlBQVksS0FBS0EsU0FBUSxLQUFLLFVBQVU7QUFBQSxVQUM1RTtBQUFBLFFBQ0E7QUFDSSxlQUFPLGFBQWFBLFNBQVEsQ0FBQyxHQUFHLEdBQUcsWUFBWU0sV0FBVSxHQUFHO0FBQUEsTUFDaEU7QUFFRSxZQUFNLElBQUksVUFBVSxzQ0FBc0M7QUFBQSxJQUM1RDtBQUVBLGFBQVMsYUFBYyxLQUFLLEtBQUssWUFBWUEsV0FBVSxLQUFLO0FBQzFELFVBQUksWUFBWTtBQUNoQixVQUFJLFlBQVksSUFBSTtBQUNwQixVQUFJLFlBQVksSUFBSTtBQUVwQixVQUFJQSxjQUFhLFFBQVc7QUFDMUIsUUFBQUEsWUFBVyxPQUFPQSxTQUFRLEVBQUUsWUFBVztBQUN2QyxZQUFJQSxjQUFhLFVBQVVBLGNBQWEsV0FDcENBLGNBQWEsYUFBYUEsY0FBYSxZQUFZO0FBQ3JELGNBQUksSUFBSSxTQUFTLEtBQUssSUFBSSxTQUFTLEdBQUc7QUFDcEMsbUJBQU87QUFBQSxVQUNmO0FBQ00sc0JBQVk7QUFDWix1QkFBYTtBQUNiLHVCQUFhO0FBQ2Isd0JBQWM7QUFBQSxRQUNwQjtBQUFBLE1BQ0E7QUFFRSxlQUFTLEtBQU0sS0FBS2hELElBQUc7QUFDckIsWUFBSSxjQUFjLEdBQUc7QUFDbkIsaUJBQU8sSUFBSUEsRUFBQztBQUFBLFFBQ2xCLE9BQVc7QUFDTCxpQkFBTyxJQUFJLGFBQWFBLEtBQUksU0FBUztBQUFBLFFBQzNDO0FBQUEsTUFDQTtBQUVFLFVBQUlBO0FBQ0osVUFBSSxLQUFLO0FBQ1AsWUFBSSxhQUFhO0FBQ2pCLGFBQUtBLEtBQUksWUFBWUEsS0FBSSxXQUFXQSxNQUFLO0FBQ3ZDLGNBQUksS0FBSyxLQUFLQSxFQUFDLE1BQU0sS0FBSyxLQUFLLGVBQWUsS0FBSyxJQUFJQSxLQUFJLFVBQVUsR0FBRztBQUN0RSxnQkFBSSxlQUFlLEdBQUksY0FBYUE7QUFDcEMsZ0JBQUlBLEtBQUksYUFBYSxNQUFNLFVBQVcsUUFBTyxhQUFhO0FBQUEsVUFDbEUsT0FBYTtBQUNMLGdCQUFJLGVBQWUsR0FBSSxDQUFBQSxNQUFLQSxLQUFJO0FBQ2hDLHlCQUFhO0FBQUEsVUFDckI7QUFBQSxRQUNBO0FBQUEsTUFDQSxPQUFTO0FBQ0wsWUFBSSxhQUFhLFlBQVksVUFBVyxjQUFhLFlBQVk7QUFDakUsYUFBS0EsS0FBSSxZQUFZQSxNQUFLLEdBQUdBLE1BQUs7QUFDaEMsY0FBSSxRQUFRO0FBQ1osbUJBQVN5QixLQUFJLEdBQUdBLEtBQUksV0FBV0EsTUFBSztBQUNsQyxnQkFBSSxLQUFLLEtBQUt6QixLQUFJeUIsRUFBQyxNQUFNLEtBQUssS0FBS0EsRUFBQyxHQUFHO0FBQ3JDLHNCQUFRO0FBQ1I7QUFBQSxZQUNWO0FBQUEsVUFDQTtBQUNNLGNBQUksTUFBTyxRQUFPekI7QUFBQSxRQUN4QjtBQUFBLE1BQ0E7QUFFRSxhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUErQyxRQUFPLFVBQVUsV0FBVyxTQUFTLFNBQVUsS0FBSyxZQUFZQyxXQUFVO0FBQ3hFLGFBQU8sS0FBSyxRQUFRLEtBQUssWUFBWUEsU0FBUSxNQUFNO0FBQUEsSUFDckQ7QUFFQSxJQUFBRCxRQUFPLFVBQVUsVUFBVSxTQUFTLFFBQVMsS0FBSyxZQUFZQyxXQUFVO0FBQ3RFLGFBQU8scUJBQXFCLE1BQU0sS0FBSyxZQUFZQSxXQUFVLElBQUk7QUFBQSxJQUNuRTtBQUVBLElBQUFELFFBQU8sVUFBVSxjQUFjLFNBQVMsWUFBYSxLQUFLLFlBQVlDLFdBQVU7QUFDOUUsYUFBTyxxQkFBcUIsTUFBTSxLQUFLLFlBQVlBLFdBQVUsS0FBSztBQUFBLElBQ3BFO0FBRUEsYUFBUyxTQUFVLEtBQUssUUFBUSxRQUFRLFFBQVE7QUFDOUMsZUFBUyxPQUFPLE1BQU0sS0FBSztBQUMzQixZQUFNLFlBQVksSUFBSSxTQUFTO0FBQy9CLFVBQUksQ0FBQyxRQUFRO0FBQ1gsaUJBQVM7QUFBQSxNQUNiLE9BQVM7QUFDTCxpQkFBUyxPQUFPLE1BQU07QUFDdEIsWUFBSSxTQUFTLFdBQVc7QUFDdEIsbUJBQVM7QUFBQSxRQUNmO0FBQUEsTUFDQTtBQUVFLFlBQU0sU0FBUyxPQUFPO0FBRXRCLFVBQUksU0FBUyxTQUFTLEdBQUc7QUFDdkIsaUJBQVMsU0FBUztBQUFBLE1BQ3RCO0FBQ0UsVUFBSWhEO0FBQ0osV0FBS0EsS0FBSSxHQUFHQSxLQUFJLFFBQVEsRUFBRUEsSUFBRztBQUMzQixjQUFNLFNBQVMsU0FBUyxPQUFPLE9BQU9BLEtBQUksR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUNuRCxZQUFJLFlBQVksTUFBTSxFQUFHLFFBQU9BO0FBQ2hDLFlBQUksU0FBU0EsRUFBQyxJQUFJO0FBQUEsTUFDdEI7QUFDRSxhQUFPQTtBQUFBLElBQ1Q7QUFFQSxhQUFTLFVBQVcsS0FBSyxRQUFRLFFBQVEsUUFBUTtBQUMvQyxhQUFPLFdBQVcsWUFBWSxRQUFRLElBQUksU0FBUyxNQUFNLEdBQUcsS0FBSyxRQUFRLE1BQU07QUFBQSxJQUNqRjtBQUVBLGFBQVMsV0FBWSxLQUFLLFFBQVEsUUFBUSxRQUFRO0FBQ2hELGFBQU8sV0FBVyxhQUFhLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTTtBQUFBLElBQzdEO0FBRUEsYUFBUyxZQUFhLEtBQUssUUFBUSxRQUFRLFFBQVE7QUFDakQsYUFBTyxXQUFXLGNBQWMsTUFBTSxHQUFHLEtBQUssUUFBUSxNQUFNO0FBQUEsSUFDOUQ7QUFFQSxhQUFTLFVBQVcsS0FBSyxRQUFRLFFBQVEsUUFBUTtBQUMvQyxhQUFPLFdBQVcsZUFBZSxRQUFRLElBQUksU0FBUyxNQUFNLEdBQUcsS0FBSyxRQUFRLE1BQU07QUFBQSxJQUNwRjtBQUVBLElBQUErQyxRQUFPLFVBQVUsUUFBUSxTQUFTLE1BQU8sUUFBUSxRQUFRLFFBQVFDLFdBQVU7QUFFekUsVUFBSSxXQUFXLFFBQVc7QUFDeEIsUUFBQUEsWUFBVztBQUNYLGlCQUFTLEtBQUs7QUFDZCxpQkFBUztBQUFBLE1BRWIsV0FBYSxXQUFXLFVBQWEsT0FBTyxXQUFXLFVBQVU7QUFDN0QsUUFBQUEsWUFBVztBQUNYLGlCQUFTLEtBQUs7QUFDZCxpQkFBUztBQUFBLE1BRWIsV0FBYSxTQUFTLE1BQU0sR0FBRztBQUMzQixpQkFBUyxXQUFXO0FBQ3BCLFlBQUksU0FBUyxNQUFNLEdBQUc7QUFDcEIsbUJBQVMsV0FBVztBQUNwQixjQUFJQSxjQUFhLE9BQVcsQ0FBQUEsWUFBVztBQUFBLFFBQzdDLE9BQVc7QUFDTCxVQUFBQSxZQUFXO0FBQ1gsbUJBQVM7QUFBQSxRQUNmO0FBQUEsTUFDQSxPQUFTO0FBQ0wsY0FBTSxJQUFJO0FBQUEsVUFDUjtBQUFBLFFBQ047QUFBQSxNQUNBO0FBRUUsWUFBTSxZQUFZLEtBQUssU0FBUztBQUNoQyxVQUFJLFdBQVcsVUFBYSxTQUFTLFVBQVcsVUFBUztBQUV6RCxVQUFLLE9BQU8sU0FBUyxNQUFNLFNBQVMsS0FBSyxTQUFTLE1BQU8sU0FBUyxLQUFLLFFBQVE7QUFDN0UsY0FBTSxJQUFJLFdBQVcsd0NBQXdDO0FBQUEsTUFDakU7QUFFRSxVQUFJLENBQUNBLFVBQVUsQ0FBQUEsWUFBVztBQUUxQixVQUFJLGNBQWM7QUFDbEIsaUJBQVM7QUFDUCxnQkFBUUEsV0FBUTtBQUFBLFVBQ2QsS0FBSztBQUNILG1CQUFPLFNBQVMsTUFBTSxRQUFRLFFBQVEsTUFBTTtBQUFBLFVBRTlDLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFDSCxtQkFBTyxVQUFVLE1BQU0sUUFBUSxRQUFRLE1BQU07QUFBQSxVQUUvQyxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQ0gsbUJBQU8sV0FBVyxNQUFNLFFBQVEsUUFBUSxNQUFNO0FBQUEsVUFFaEQsS0FBSztBQUVILG1CQUFPLFlBQVksTUFBTSxRQUFRLFFBQVEsTUFBTTtBQUFBLFVBRWpELEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFDSCxtQkFBTyxVQUFVLE1BQU0sUUFBUSxRQUFRLE1BQU07QUFBQSxVQUUvQztBQUNFLGdCQUFJLFlBQWEsT0FBTSxJQUFJLFVBQVUsdUJBQXVCQSxTQUFRO0FBQ3BFLFlBQUFBLGFBQVksS0FBS0EsV0FBVSxZQUFXO0FBQ3RDLDBCQUFjO0FBQUEsUUFDdEI7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUVBLElBQUFELFFBQU8sVUFBVSxTQUFTLFNBQVMsU0FBVTtBQUMzQyxhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxRQUFRLE1BQU0sQ0FBQztBQUFBLE1BQ3pEO0FBQUEsSUFDQTtBQUVBLGFBQVMsWUFBYSxLQUFLLE9BQU8sS0FBSztBQUNyQyxVQUFJLFVBQVUsS0FBSyxRQUFRLElBQUksUUFBUTtBQUNyQyxlQUFPLE9BQU8sY0FBYyxHQUFHO0FBQUEsTUFDbkMsT0FBUztBQUNMLGVBQU8sT0FBTyxjQUFjLElBQUksTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUFBLE1BQ3JEO0FBQUEsSUFDQTtBQUVBLGFBQVMsVUFBVyxLQUFLLE9BQU8sS0FBSztBQUNuQyxZQUFNLEtBQUssSUFBSSxJQUFJLFFBQVEsR0FBRztBQUM5QixZQUFNLE1BQU0sQ0FBQTtBQUVaLFVBQUkvQyxLQUFJO0FBQ1IsYUFBT0EsS0FBSSxLQUFLO0FBQ2QsY0FBTSxZQUFZLElBQUlBLEVBQUM7QUFDdkIsWUFBSSxZQUFZO0FBQ2hCLFlBQUksbUJBQW9CLFlBQVksTUFDaEMsSUFDQyxZQUFZLE1BQ1QsSUFDQyxZQUFZLE1BQ1QsSUFDQTtBQUVaLFlBQUlBLEtBQUksb0JBQW9CLEtBQUs7QUFDL0IsY0FBSSxZQUFZLFdBQVcsWUFBWTtBQUV2QyxrQkFBUSxrQkFBZ0I7QUFBQSxZQUN0QixLQUFLO0FBQ0gsa0JBQUksWUFBWSxLQUFNO0FBQ3BCLDRCQUFZO0FBQUEsY0FDeEI7QUFDVTtBQUFBLFlBQ0YsS0FBSztBQUNILDJCQUFhLElBQUlBLEtBQUksQ0FBQztBQUN0QixtQkFBSyxhQUFhLFNBQVUsS0FBTTtBQUNoQyxpQ0FBaUIsWUFBWSxPQUFTLElBQU8sYUFBYTtBQUMxRCxvQkFBSSxnQkFBZ0IsS0FBTTtBQUN4Qiw4QkFBWTtBQUFBLGdCQUMxQjtBQUFBLGNBQ0E7QUFDVTtBQUFBLFlBQ0YsS0FBSztBQUNILDJCQUFhLElBQUlBLEtBQUksQ0FBQztBQUN0QiwwQkFBWSxJQUFJQSxLQUFJLENBQUM7QUFDckIsbUJBQUssYUFBYSxTQUFVLFFBQVMsWUFBWSxTQUFVLEtBQU07QUFDL0QsaUNBQWlCLFlBQVksT0FBUSxNQUFPLGFBQWEsT0FBUyxJQUFPLFlBQVk7QUFDckYsb0JBQUksZ0JBQWdCLFNBQVUsZ0JBQWdCLFNBQVUsZ0JBQWdCLFFBQVM7QUFDL0UsOEJBQVk7QUFBQSxnQkFDMUI7QUFBQSxjQUNBO0FBQ1U7QUFBQSxZQUNGLEtBQUs7QUFDSCwyQkFBYSxJQUFJQSxLQUFJLENBQUM7QUFDdEIsMEJBQVksSUFBSUEsS0FBSSxDQUFDO0FBQ3JCLDJCQUFhLElBQUlBLEtBQUksQ0FBQztBQUN0QixtQkFBSyxhQUFhLFNBQVUsUUFBUyxZQUFZLFNBQVUsUUFBUyxhQUFhLFNBQVUsS0FBTTtBQUMvRixpQ0FBaUIsWUFBWSxPQUFRLE1BQVEsYUFBYSxPQUFTLE1BQU8sWUFBWSxPQUFTLElBQU8sYUFBYTtBQUNuSCxvQkFBSSxnQkFBZ0IsU0FBVSxnQkFBZ0IsU0FBVTtBQUN0RCw4QkFBWTtBQUFBLGdCQUMxQjtBQUFBLGNBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUVJLFlBQUksY0FBYyxNQUFNO0FBR3RCLHNCQUFZO0FBQ1osNkJBQW1CO0FBQUEsUUFDekIsV0FBZSxZQUFZLE9BQVE7QUFFN0IsdUJBQWE7QUFDYixjQUFJLEtBQUssY0FBYyxLQUFLLE9BQVEsS0FBTTtBQUMxQyxzQkFBWSxRQUFTLFlBQVk7QUFBQSxRQUN2QztBQUVJLFlBQUksS0FBSyxTQUFTO0FBQ2xCLFFBQUFBLE1BQUs7QUFBQSxNQUNUO0FBRUUsYUFBTyxzQkFBc0IsR0FBRztBQUFBLElBQ2xDO0FBS0EsVUFBTSx1QkFBdUI7QUFFN0IsYUFBUyxzQkFBdUIsWUFBWTtBQUMxQyxZQUFNLE1BQU0sV0FBVztBQUN2QixVQUFJLE9BQU8sc0JBQXNCO0FBQy9CLGVBQU8sT0FBTyxhQUFhLE1BQU0sUUFBUSxVQUFVO0FBQUEsTUFDdkQ7QUFHRSxVQUFJLE1BQU07QUFDVixVQUFJQSxLQUFJO0FBQ1IsYUFBT0EsS0FBSSxLQUFLO0FBQ2QsZUFBTyxPQUFPLGFBQWE7QUFBQSxVQUN6QjtBQUFBLFVBQ0EsV0FBVyxNQUFNQSxJQUFHQSxNQUFLLG9CQUFvQjtBQUFBLFFBQ25EO0FBQUEsTUFDQTtBQUNFLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxXQUFZLEtBQUssT0FBTyxLQUFLO0FBQ3BDLFVBQUksTUFBTTtBQUNWLFlBQU0sS0FBSyxJQUFJLElBQUksUUFBUSxHQUFHO0FBRTlCLGVBQVNBLEtBQUksT0FBT0EsS0FBSSxLQUFLLEVBQUVBLElBQUc7QUFDaEMsZUFBTyxPQUFPLGFBQWEsSUFBSUEsRUFBQyxJQUFJLEdBQUk7QUFBQSxNQUM1QztBQUNFLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxZQUFhLEtBQUssT0FBTyxLQUFLO0FBQ3JDLFVBQUksTUFBTTtBQUNWLFlBQU0sS0FBSyxJQUFJLElBQUksUUFBUSxHQUFHO0FBRTlCLGVBQVNBLEtBQUksT0FBT0EsS0FBSSxLQUFLLEVBQUVBLElBQUc7QUFDaEMsZUFBTyxPQUFPLGFBQWEsSUFBSUEsRUFBQyxDQUFDO0FBQUEsTUFDckM7QUFDRSxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsU0FBVSxLQUFLLE9BQU8sS0FBSztBQUNsQyxZQUFNLE1BQU0sSUFBSTtBQUVoQixVQUFJLENBQUMsU0FBUyxRQUFRLEVBQUcsU0FBUTtBQUNqQyxVQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssTUFBTSxJQUFLLE9BQU07QUFFeEMsVUFBSSxNQUFNO0FBQ1YsZUFBU0EsS0FBSSxPQUFPQSxLQUFJLEtBQUssRUFBRUEsSUFBRztBQUNoQyxlQUFPLG9CQUFvQixJQUFJQSxFQUFDLENBQUM7QUFBQSxNQUNyQztBQUNFLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxhQUFjLEtBQUssT0FBTyxLQUFLO0FBQ3RDLFlBQU0sUUFBUSxJQUFJLE1BQU0sT0FBTyxHQUFHO0FBQ2xDLFVBQUksTUFBTTtBQUVWLGVBQVNBLEtBQUksR0FBR0EsS0FBSSxNQUFNLFNBQVMsR0FBR0EsTUFBSyxHQUFHO0FBQzVDLGVBQU8sT0FBTyxhQUFhLE1BQU1BLEVBQUMsSUFBSyxNQUFNQSxLQUFJLENBQUMsSUFBSSxHQUFJO0FBQUEsTUFDOUQ7QUFDRSxhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUErQyxRQUFPLFVBQVUsUUFBUSxTQUFTLE1BQU8sT0FBTyxLQUFLO0FBQ25ELFlBQU0sTUFBTSxLQUFLO0FBQ2pCLGNBQVEsQ0FBQyxDQUFDO0FBQ1YsWUFBTSxRQUFRLFNBQVksTUFBTSxDQUFDLENBQUM7QUFFbEMsVUFBSSxRQUFRLEdBQUc7QUFDYixpQkFBUztBQUNULFlBQUksUUFBUSxFQUFHLFNBQVE7QUFBQSxNQUMzQixXQUFhLFFBQVEsS0FBSztBQUN0QixnQkFBUTtBQUFBLE1BQ1o7QUFFRSxVQUFJLE1BQU0sR0FBRztBQUNYLGVBQU87QUFDUCxZQUFJLE1BQU0sRUFBRyxPQUFNO0FBQUEsTUFDdkIsV0FBYSxNQUFNLEtBQUs7QUFDcEIsY0FBTTtBQUFBLE1BQ1Y7QUFFRSxVQUFJLE1BQU0sTUFBTyxPQUFNO0FBRXZCLFlBQU0sU0FBUyxLQUFLLFNBQVMsT0FBTyxHQUFHO0FBRXZDLGFBQU8sZUFBZSxRQUFRQSxRQUFPLFNBQVM7QUFFOUMsYUFBTztBQUFBLElBQ1Q7QUFLQSxhQUFTLFlBQWEsUUFBUSxLQUFLLFFBQVE7QUFDekMsVUFBSyxTQUFTLE1BQU8sS0FBSyxTQUFTLEVBQUcsT0FBTSxJQUFJLFdBQVcsb0JBQW9CO0FBQy9FLFVBQUksU0FBUyxNQUFNLE9BQVEsT0FBTSxJQUFJLFdBQVcsdUNBQXVDO0FBQUEsSUFDekY7QUFFQSxJQUFBQSxRQUFPLFVBQVUsYUFDakJBLFFBQU8sVUFBVSxhQUFhLFNBQVMsV0FBWSxRQUFRRSxhQUFZLFVBQVU7QUFDL0UsZUFBUyxXQUFXO0FBQ3BCLE1BQUFBLGNBQWFBLGdCQUFlO0FBQzVCLFVBQUksQ0FBQyxTQUFVLGFBQVksUUFBUUEsYUFBWSxLQUFLLE1BQU07QUFFMUQsVUFBSSxNQUFNLEtBQUssTUFBTTtBQUNyQixVQUFJLE1BQU07QUFDVixVQUFJakQsS0FBSTtBQUNSLGFBQU8sRUFBRUEsS0FBSWlELGdCQUFlLE9BQU8sTUFBUTtBQUN6QyxlQUFPLEtBQUssU0FBU2pELEVBQUMsSUFBSTtBQUFBLE1BQzlCO0FBRUUsYUFBTztBQUFBLElBQ1Q7QUFFQSxJQUFBK0MsUUFBTyxVQUFVLGFBQ2pCQSxRQUFPLFVBQVUsYUFBYSxTQUFTLFdBQVksUUFBUUUsYUFBWSxVQUFVO0FBQy9FLGVBQVMsV0FBVztBQUNwQixNQUFBQSxjQUFhQSxnQkFBZTtBQUM1QixVQUFJLENBQUMsVUFBVTtBQUNiLG9CQUFZLFFBQVFBLGFBQVksS0FBSyxNQUFNO0FBQUEsTUFDL0M7QUFFRSxVQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUVBLFdBQVU7QUFDcEMsVUFBSSxNQUFNO0FBQ1YsYUFBT0EsY0FBYSxNQUFNLE9BQU8sTUFBUTtBQUN2QyxlQUFPLEtBQUssU0FBUyxFQUFFQSxXQUFVLElBQUk7QUFBQSxNQUN6QztBQUVFLGFBQU87QUFBQSxJQUNUO0FBRUEsSUFBQUYsUUFBTyxVQUFVLFlBQ2pCQSxRQUFPLFVBQVUsWUFBWSxTQUFTLFVBQVcsUUFBUSxVQUFVO0FBQ2pFLGVBQVMsV0FBVztBQUNwQixVQUFJLENBQUMsU0FBVSxhQUFZLFFBQVEsR0FBRyxLQUFLLE1BQU07QUFDakQsYUFBTyxLQUFLLE1BQU07QUFBQSxJQUNwQjtBQUVBLElBQUFBLFFBQU8sVUFBVSxlQUNqQkEsUUFBTyxVQUFVLGVBQWUsU0FBUyxhQUFjLFFBQVEsVUFBVTtBQUN2RSxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsYUFBWSxRQUFRLEdBQUcsS0FBSyxNQUFNO0FBQ2pELGFBQU8sS0FBSyxNQUFNLElBQUssS0FBSyxTQUFTLENBQUMsS0FBSztBQUFBLElBQzdDO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGVBQ2pCQSxRQUFPLFVBQVUsZUFBZSxTQUFTLGFBQWMsUUFBUSxVQUFVO0FBQ3ZFLGVBQVMsV0FBVztBQUNwQixVQUFJLENBQUMsU0FBVSxhQUFZLFFBQVEsR0FBRyxLQUFLLE1BQU07QUFDakQsYUFBUSxLQUFLLE1BQU0sS0FBSyxJQUFLLEtBQUssU0FBUyxDQUFDO0FBQUEsSUFDOUM7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZUFDakJBLFFBQU8sVUFBVSxlQUFlLFNBQVMsYUFBYyxRQUFRLFVBQVU7QUFDdkUsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLGFBQVksUUFBUSxHQUFHLEtBQUssTUFBTTtBQUVqRCxjQUFTLEtBQUssTUFBTSxJQUNmLEtBQUssU0FBUyxDQUFDLEtBQUssSUFDcEIsS0FBSyxTQUFTLENBQUMsS0FBSyxNQUNwQixLQUFLLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDMUI7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZUFDakJBLFFBQU8sVUFBVSxlQUFlLFNBQVMsYUFBYyxRQUFRLFVBQVU7QUFDdkUsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLGFBQVksUUFBUSxHQUFHLEtBQUssTUFBTTtBQUVqRCxhQUFRLEtBQUssTUFBTSxJQUFJLFlBQ25CLEtBQUssU0FBUyxDQUFDLEtBQUssS0FDckIsS0FBSyxTQUFTLENBQUMsS0FBSyxJQUNyQixLQUFLLFNBQVMsQ0FBQztBQUFBLElBQ25CO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGtCQUFrQixtQkFBbUIsU0FBUyxnQkFBaUIsUUFBUTtBQUN0RixlQUFTLFdBQVc7QUFDcEIscUJBQWUsUUFBUSxRQUFRO0FBQy9CLFlBQU0sUUFBUSxLQUFLLE1BQU07QUFDekIsWUFBTSxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQzVCLFVBQUksVUFBVSxVQUFhLFNBQVMsUUFBVztBQUM3QyxvQkFBWSxRQUFRLEtBQUssU0FBUyxDQUFDO0FBQUEsTUFDdkM7QUFFRSxZQUFNLEtBQUssUUFDVCxLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssSUFDdEIsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLEtBQ3RCLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSztBQUV4QixZQUFNLEtBQUssS0FBSyxFQUFFLE1BQU0sSUFDdEIsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLElBQ3RCLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxLQUN0QixPQUFPLEtBQUs7QUFFZCxhQUFPLE9BQU8sRUFBRSxLQUFLLE9BQU8sRUFBRSxLQUFLLE9BQU8sRUFBRTtBQUFBLElBQzlDLENBQUM7QUFFRCxJQUFBQSxRQUFPLFVBQVUsa0JBQWtCLG1CQUFtQixTQUFTLGdCQUFpQixRQUFRO0FBQ3RGLGVBQVMsV0FBVztBQUNwQixxQkFBZSxRQUFRLFFBQVE7QUFDL0IsWUFBTSxRQUFRLEtBQUssTUFBTTtBQUN6QixZQUFNLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDNUIsVUFBSSxVQUFVLFVBQWEsU0FBUyxRQUFXO0FBQzdDLG9CQUFZLFFBQVEsS0FBSyxTQUFTLENBQUM7QUFBQSxNQUN2QztBQUVFLFlBQU0sS0FBSyxRQUFRLEtBQUssS0FDdEIsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLEtBQ3RCLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxJQUN0QixLQUFLLEVBQUUsTUFBTTtBQUVmLFlBQU0sS0FBSyxLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssS0FDL0IsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLEtBQ3RCLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxJQUN0QjtBQUVGLGNBQVEsT0FBTyxFQUFFLEtBQUssT0FBTyxFQUFFLEtBQUssT0FBTyxFQUFFO0FBQUEsSUFDL0MsQ0FBQztBQUVELElBQUFBLFFBQU8sVUFBVSxZQUFZLFNBQVMsVUFBVyxRQUFRRSxhQUFZLFVBQVU7QUFDN0UsZUFBUyxXQUFXO0FBQ3BCLE1BQUFBLGNBQWFBLGdCQUFlO0FBQzVCLFVBQUksQ0FBQyxTQUFVLGFBQVksUUFBUUEsYUFBWSxLQUFLLE1BQU07QUFFMUQsVUFBSSxNQUFNLEtBQUssTUFBTTtBQUNyQixVQUFJLE1BQU07QUFDVixVQUFJakQsS0FBSTtBQUNSLGFBQU8sRUFBRUEsS0FBSWlELGdCQUFlLE9BQU8sTUFBUTtBQUN6QyxlQUFPLEtBQUssU0FBU2pELEVBQUMsSUFBSTtBQUFBLE1BQzlCO0FBQ0UsYUFBTztBQUVQLFVBQUksT0FBTyxJQUFLLFFBQU8sS0FBSyxJQUFJLEdBQUcsSUFBSWlELFdBQVU7QUFFakQsYUFBTztBQUFBLElBQ1Q7QUFFQSxJQUFBRixRQUFPLFVBQVUsWUFBWSxTQUFTLFVBQVcsUUFBUUUsYUFBWSxVQUFVO0FBQzdFLGVBQVMsV0FBVztBQUNwQixNQUFBQSxjQUFhQSxnQkFBZTtBQUM1QixVQUFJLENBQUMsU0FBVSxhQUFZLFFBQVFBLGFBQVksS0FBSyxNQUFNO0FBRTFELFVBQUlqRCxLQUFJaUQ7QUFDUixVQUFJLE1BQU07QUFDVixVQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUVqRCxFQUFDO0FBQzNCLGFBQU9BLEtBQUksTUFBTSxPQUFPLE1BQVE7QUFDOUIsZUFBTyxLQUFLLFNBQVMsRUFBRUEsRUFBQyxJQUFJO0FBQUEsTUFDaEM7QUFDRSxhQUFPO0FBRVAsVUFBSSxPQUFPLElBQUssUUFBTyxLQUFLLElBQUksR0FBRyxJQUFJaUQsV0FBVTtBQUVqRCxhQUFPO0FBQUEsSUFDVDtBQUVBLElBQUFGLFFBQU8sVUFBVSxXQUFXLFNBQVMsU0FBVSxRQUFRLFVBQVU7QUFDL0QsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLGFBQVksUUFBUSxHQUFHLEtBQUssTUFBTTtBQUNqRCxVQUFJLEVBQUUsS0FBSyxNQUFNLElBQUksS0FBTyxRQUFRLEtBQUssTUFBTTtBQUMvQyxjQUFTLE1BQU8sS0FBSyxNQUFNLElBQUksS0FBSztBQUFBLElBQ3RDO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGNBQWMsU0FBUyxZQUFhLFFBQVEsVUFBVTtBQUNyRSxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsYUFBWSxRQUFRLEdBQUcsS0FBSyxNQUFNO0FBQ2pELFlBQU0sTUFBTSxLQUFLLE1BQU0sSUFBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLO0FBQ2hELGFBQVEsTUFBTSxRQUFVLE1BQU0sYUFBYTtBQUFBLElBQzdDO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGNBQWMsU0FBUyxZQUFhLFFBQVEsVUFBVTtBQUNyRSxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsYUFBWSxRQUFRLEdBQUcsS0FBSyxNQUFNO0FBQ2pELFlBQU0sTUFBTSxLQUFLLFNBQVMsQ0FBQyxJQUFLLEtBQUssTUFBTSxLQUFLO0FBQ2hELGFBQVEsTUFBTSxRQUFVLE1BQU0sYUFBYTtBQUFBLElBQzdDO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGNBQWMsU0FBUyxZQUFhLFFBQVEsVUFBVTtBQUNyRSxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsYUFBWSxRQUFRLEdBQUcsS0FBSyxNQUFNO0FBRWpELGFBQVEsS0FBSyxNQUFNLElBQ2hCLEtBQUssU0FBUyxDQUFDLEtBQUssSUFDcEIsS0FBSyxTQUFTLENBQUMsS0FBSyxLQUNwQixLQUFLLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDekI7QUFFQSxJQUFBQSxRQUFPLFVBQVUsY0FBYyxTQUFTLFlBQWEsUUFBUSxVQUFVO0FBQ3JFLGVBQVMsV0FBVztBQUNwQixVQUFJLENBQUMsU0FBVSxhQUFZLFFBQVEsR0FBRyxLQUFLLE1BQU07QUFFakQsYUFBUSxLQUFLLE1BQU0sS0FBSyxLQUNyQixLQUFLLFNBQVMsQ0FBQyxLQUFLLEtBQ3BCLEtBQUssU0FBUyxDQUFDLEtBQUssSUFDcEIsS0FBSyxTQUFTLENBQUM7QUFBQSxJQUNwQjtBQUVBLElBQUFBLFFBQU8sVUFBVSxpQkFBaUIsbUJBQW1CLFNBQVMsZUFBZ0IsUUFBUTtBQUNwRixlQUFTLFdBQVc7QUFDcEIscUJBQWUsUUFBUSxRQUFRO0FBQy9CLFlBQU0sUUFBUSxLQUFLLE1BQU07QUFDekIsWUFBTSxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQzVCLFVBQUksVUFBVSxVQUFhLFNBQVMsUUFBVztBQUM3QyxvQkFBWSxRQUFRLEtBQUssU0FBUyxDQUFDO0FBQUEsTUFDdkM7QUFFRSxZQUFNLE1BQU0sS0FBSyxTQUFTLENBQUMsSUFDekIsS0FBSyxTQUFTLENBQUMsSUFBSSxLQUFLLElBQ3hCLEtBQUssU0FBUyxDQUFDLElBQUksS0FBSyxNQUN2QixRQUFRO0FBRVgsY0FBUSxPQUFPLEdBQUcsS0FBSyxPQUFPLEVBQUUsS0FDOUIsT0FBTyxRQUNQLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxJQUN0QixLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssS0FDdEIsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLEVBQUU7QUFBQSxJQUM1QixDQUFDO0FBRUQsSUFBQUEsUUFBTyxVQUFVLGlCQUFpQixtQkFBbUIsU0FBUyxlQUFnQixRQUFRO0FBQ3BGLGVBQVMsV0FBVztBQUNwQixxQkFBZSxRQUFRLFFBQVE7QUFDL0IsWUFBTSxRQUFRLEtBQUssTUFBTTtBQUN6QixZQUFNLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDNUIsVUFBSSxVQUFVLFVBQWEsU0FBUyxRQUFXO0FBQzdDLG9CQUFZLFFBQVEsS0FBSyxTQUFTLENBQUM7QUFBQSxNQUN2QztBQUVFLFlBQU0sT0FBTyxTQUFTO0FBQUEsTUFDcEIsS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLEtBQ3RCLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxJQUN0QixLQUFLLEVBQUUsTUFBTTtBQUVmLGNBQVEsT0FBTyxHQUFHLEtBQUssT0FBTyxFQUFFLEtBQzlCLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLEtBQzdCLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxLQUN0QixLQUFLLEVBQUUsTUFBTSxJQUFJLEtBQUssSUFDdEIsSUFBSTtBQUFBLElBQ1IsQ0FBQztBQUVELElBQUFBLFFBQU8sVUFBVSxjQUFjLFNBQVMsWUFBYSxRQUFRLFVBQVU7QUFDckUsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLGFBQVksUUFBUSxHQUFHLEtBQUssTUFBTTtBQUNqRCxhQUFPSCxTQUFRLEtBQUssTUFBTSxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBQUEsSUFDL0M7QUFFQSxJQUFBRyxRQUFPLFVBQVUsY0FBYyxTQUFTLFlBQWEsUUFBUSxVQUFVO0FBQ3JFLGVBQVMsV0FBVztBQUNwQixVQUFJLENBQUMsU0FBVSxhQUFZLFFBQVEsR0FBRyxLQUFLLE1BQU07QUFDakQsYUFBT0gsU0FBUSxLQUFLLE1BQU0sUUFBUSxPQUFPLElBQUksQ0FBQztBQUFBLElBQ2hEO0FBRUEsSUFBQUcsUUFBTyxVQUFVLGVBQWUsU0FBUyxhQUFjLFFBQVEsVUFBVTtBQUN2RSxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsYUFBWSxRQUFRLEdBQUcsS0FBSyxNQUFNO0FBQ2pELGFBQU9ILFNBQVEsS0FBSyxNQUFNLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFBQSxJQUMvQztBQUVBLElBQUFHLFFBQU8sVUFBVSxlQUFlLFNBQVMsYUFBYyxRQUFRLFVBQVU7QUFDdkUsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLGFBQVksUUFBUSxHQUFHLEtBQUssTUFBTTtBQUNqRCxhQUFPSCxTQUFRLEtBQUssTUFBTSxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQUEsSUFDaEQ7QUFFQSxhQUFTLFNBQVUsS0FBSyxPQUFPLFFBQVEsS0FBSyxLQUFLLEtBQUs7QUFDcEQsVUFBSSxDQUFDRyxRQUFPLFNBQVMsR0FBRyxFQUFHLE9BQU0sSUFBSSxVQUFVLDZDQUE2QztBQUM1RixVQUFJLFFBQVEsT0FBTyxRQUFRLElBQUssT0FBTSxJQUFJLFdBQVcsbUNBQW1DO0FBQ3hGLFVBQUksU0FBUyxNQUFNLElBQUksT0FBUSxPQUFNLElBQUksV0FBVyxvQkFBb0I7QUFBQSxJQUMxRTtBQUVBLElBQUFBLFFBQU8sVUFBVSxjQUNqQkEsUUFBTyxVQUFVLGNBQWMsU0FBUyxZQUFhLE9BQU8sUUFBUUUsYUFBWSxVQUFVO0FBQ3hGLGNBQVEsQ0FBQztBQUNULGVBQVMsV0FBVztBQUNwQixNQUFBQSxjQUFhQSxnQkFBZTtBQUM1QixVQUFJLENBQUMsVUFBVTtBQUNiLGNBQU0sV0FBVyxLQUFLLElBQUksR0FBRyxJQUFJQSxXQUFVLElBQUk7QUFDL0MsaUJBQVMsTUFBTSxPQUFPLFFBQVFBLGFBQVksVUFBVSxDQUFDO0FBQUEsTUFDekQ7QUFFRSxVQUFJLE1BQU07QUFDVixVQUFJakQsS0FBSTtBQUNSLFdBQUssTUFBTSxJQUFJLFFBQVE7QUFDdkIsYUFBTyxFQUFFQSxLQUFJaUQsZ0JBQWUsT0FBTyxNQUFRO0FBQ3pDLGFBQUssU0FBU2pELEVBQUMsSUFBSyxRQUFRLE1BQU87QUFBQSxNQUN2QztBQUVFLGFBQU8sU0FBU2lEO0FBQUEsSUFDbEI7QUFFQSxJQUFBRixRQUFPLFVBQVUsY0FDakJBLFFBQU8sVUFBVSxjQUFjLFNBQVMsWUFBYSxPQUFPLFFBQVFFLGFBQVksVUFBVTtBQUN4RixjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsTUFBQUEsY0FBYUEsZ0JBQWU7QUFDNUIsVUFBSSxDQUFDLFVBQVU7QUFDYixjQUFNLFdBQVcsS0FBSyxJQUFJLEdBQUcsSUFBSUEsV0FBVSxJQUFJO0FBQy9DLGlCQUFTLE1BQU0sT0FBTyxRQUFRQSxhQUFZLFVBQVUsQ0FBQztBQUFBLE1BQ3pEO0FBRUUsVUFBSWpELEtBQUlpRCxjQUFhO0FBQ3JCLFVBQUksTUFBTTtBQUNWLFdBQUssU0FBU2pELEVBQUMsSUFBSSxRQUFRO0FBQzNCLGFBQU8sRUFBRUEsTUFBSyxNQUFNLE9BQU8sTUFBUTtBQUNqQyxhQUFLLFNBQVNBLEVBQUMsSUFBSyxRQUFRLE1BQU87QUFBQSxNQUN2QztBQUVFLGFBQU8sU0FBU2lEO0FBQUEsSUFDbEI7QUFFQSxJQUFBRixRQUFPLFVBQVUsYUFDakJBLFFBQU8sVUFBVSxhQUFhLFNBQVMsV0FBWSxPQUFPLFFBQVEsVUFBVTtBQUMxRSxjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsVUFBUyxNQUFNLE9BQU8sUUFBUSxHQUFHLEtBQU0sQ0FBQztBQUN2RCxXQUFLLE1BQU0sSUFBSyxRQUFRO0FBQ3hCLGFBQU8sU0FBUztBQUFBLElBQ2xCO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGdCQUNqQkEsUUFBTyxVQUFVLGdCQUFnQixTQUFTLGNBQWUsT0FBTyxRQUFRLFVBQVU7QUFDaEYsY0FBUSxDQUFDO0FBQ1QsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLFVBQVMsTUFBTSxPQUFPLFFBQVEsR0FBRyxPQUFRLENBQUM7QUFDekQsV0FBSyxNQUFNLElBQUssUUFBUTtBQUN4QixXQUFLLFNBQVMsQ0FBQyxJQUFLLFVBQVU7QUFDOUIsYUFBTyxTQUFTO0FBQUEsSUFDbEI7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZ0JBQ2pCQSxRQUFPLFVBQVUsZ0JBQWdCLFNBQVMsY0FBZSxPQUFPLFFBQVEsVUFBVTtBQUNoRixjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsVUFBUyxNQUFNLE9BQU8sUUFBUSxHQUFHLE9BQVEsQ0FBQztBQUN6RCxXQUFLLE1BQU0sSUFBSyxVQUFVO0FBQzFCLFdBQUssU0FBUyxDQUFDLElBQUssUUFBUTtBQUM1QixhQUFPLFNBQVM7QUFBQSxJQUNsQjtBQUVBLElBQUFBLFFBQU8sVUFBVSxnQkFDakJBLFFBQU8sVUFBVSxnQkFBZ0IsU0FBUyxjQUFlLE9BQU8sUUFBUSxVQUFVO0FBQ2hGLGNBQVEsQ0FBQztBQUNULGVBQVMsV0FBVztBQUNwQixVQUFJLENBQUMsU0FBVSxVQUFTLE1BQU0sT0FBTyxRQUFRLEdBQUcsWUFBWSxDQUFDO0FBQzdELFdBQUssU0FBUyxDQUFDLElBQUssVUFBVTtBQUM5QixXQUFLLFNBQVMsQ0FBQyxJQUFLLFVBQVU7QUFDOUIsV0FBSyxTQUFTLENBQUMsSUFBSyxVQUFVO0FBQzlCLFdBQUssTUFBTSxJQUFLLFFBQVE7QUFDeEIsYUFBTyxTQUFTO0FBQUEsSUFDbEI7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZ0JBQ2pCQSxRQUFPLFVBQVUsZ0JBQWdCLFNBQVMsY0FBZSxPQUFPLFFBQVEsVUFBVTtBQUNoRixjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsVUFBUyxNQUFNLE9BQU8sUUFBUSxHQUFHLFlBQVksQ0FBQztBQUM3RCxXQUFLLE1BQU0sSUFBSyxVQUFVO0FBQzFCLFdBQUssU0FBUyxDQUFDLElBQUssVUFBVTtBQUM5QixXQUFLLFNBQVMsQ0FBQyxJQUFLLFVBQVU7QUFDOUIsV0FBSyxTQUFTLENBQUMsSUFBSyxRQUFRO0FBQzVCLGFBQU8sU0FBUztBQUFBLElBQ2xCO0FBRUEsYUFBUyxlQUFnQixLQUFLLE9BQU8sUUFBUSxLQUFLLEtBQUs7QUFDckQsaUJBQVcsT0FBTyxLQUFLLEtBQUssS0FBSyxRQUFRLENBQUM7QUFFMUMsVUFBSSxLQUFLLE9BQU8sUUFBUSxPQUFPLFVBQVUsQ0FBQztBQUMxQyxVQUFJLFFBQVEsSUFBSTtBQUNoQixXQUFLLE1BQU07QUFDWCxVQUFJLFFBQVEsSUFBSTtBQUNoQixXQUFLLE1BQU07QUFDWCxVQUFJLFFBQVEsSUFBSTtBQUNoQixXQUFLLE1BQU07QUFDWCxVQUFJLFFBQVEsSUFBSTtBQUNoQixVQUFJLEtBQUssT0FBTyxTQUFTLE9BQU8sRUFBRSxJQUFJLE9BQU8sVUFBVSxDQUFDO0FBQ3hELFVBQUksUUFBUSxJQUFJO0FBQ2hCLFdBQUssTUFBTTtBQUNYLFVBQUksUUFBUSxJQUFJO0FBQ2hCLFdBQUssTUFBTTtBQUNYLFVBQUksUUFBUSxJQUFJO0FBQ2hCLFdBQUssTUFBTTtBQUNYLFVBQUksUUFBUSxJQUFJO0FBQ2hCLGFBQU87QUFBQSxJQUNUO0FBRUEsYUFBUyxlQUFnQixLQUFLLE9BQU8sUUFBUSxLQUFLLEtBQUs7QUFDckQsaUJBQVcsT0FBTyxLQUFLLEtBQUssS0FBSyxRQUFRLENBQUM7QUFFMUMsVUFBSSxLQUFLLE9BQU8sUUFBUSxPQUFPLFVBQVUsQ0FBQztBQUMxQyxVQUFJLFNBQVMsQ0FBQyxJQUFJO0FBQ2xCLFdBQUssTUFBTTtBQUNYLFVBQUksU0FBUyxDQUFDLElBQUk7QUFDbEIsV0FBSyxNQUFNO0FBQ1gsVUFBSSxTQUFTLENBQUMsSUFBSTtBQUNsQixXQUFLLE1BQU07QUFDWCxVQUFJLFNBQVMsQ0FBQyxJQUFJO0FBQ2xCLFVBQUksS0FBSyxPQUFPLFNBQVMsT0FBTyxFQUFFLElBQUksT0FBTyxVQUFVLENBQUM7QUFDeEQsVUFBSSxTQUFTLENBQUMsSUFBSTtBQUNsQixXQUFLLE1BQU07QUFDWCxVQUFJLFNBQVMsQ0FBQyxJQUFJO0FBQ2xCLFdBQUssTUFBTTtBQUNYLFVBQUksU0FBUyxDQUFDLElBQUk7QUFDbEIsV0FBSyxNQUFNO0FBQ1gsVUFBSSxNQUFNLElBQUk7QUFDZCxhQUFPLFNBQVM7QUFBQSxJQUNsQjtBQUVBLElBQUFBLFFBQU8sVUFBVSxtQkFBbUIsbUJBQW1CLFNBQVMsaUJBQWtCLE9BQU8sU0FBUyxHQUFHO0FBQ25HLGFBQU8sZUFBZSxNQUFNLE9BQU8sUUFBUSxPQUFPLENBQUMsR0FBRyxPQUFPLG9CQUFvQixDQUFDO0FBQUEsSUFDcEYsQ0FBQztBQUVELElBQUFBLFFBQU8sVUFBVSxtQkFBbUIsbUJBQW1CLFNBQVMsaUJBQWtCLE9BQU8sU0FBUyxHQUFHO0FBQ25HLGFBQU8sZUFBZSxNQUFNLE9BQU8sUUFBUSxPQUFPLENBQUMsR0FBRyxPQUFPLG9CQUFvQixDQUFDO0FBQUEsSUFDcEYsQ0FBQztBQUVELElBQUFBLFFBQU8sVUFBVSxhQUFhLFNBQVMsV0FBWSxPQUFPLFFBQVFFLGFBQVksVUFBVTtBQUN0RixjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFVBQVU7QUFDYixjQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUksSUFBSUEsY0FBYyxDQUFDO0FBRTlDLGlCQUFTLE1BQU0sT0FBTyxRQUFRQSxhQUFZLFFBQVEsR0FBRyxDQUFDLEtBQUs7QUFBQSxNQUMvRDtBQUVFLFVBQUlqRCxLQUFJO0FBQ1IsVUFBSSxNQUFNO0FBQ1YsVUFBSSxNQUFNO0FBQ1YsV0FBSyxNQUFNLElBQUksUUFBUTtBQUN2QixhQUFPLEVBQUVBLEtBQUlpRCxnQkFBZSxPQUFPLE1BQVE7QUFDekMsWUFBSSxRQUFRLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBU2pELEtBQUksQ0FBQyxNQUFNLEdBQUc7QUFDeEQsZ0JBQU07QUFBQSxRQUNaO0FBQ0ksYUFBSyxTQUFTQSxFQUFDLEtBQU0sUUFBUSxPQUFRLEtBQUssTUFBTTtBQUFBLE1BQ3BEO0FBRUUsYUFBTyxTQUFTaUQ7QUFBQSxJQUNsQjtBQUVBLElBQUFGLFFBQU8sVUFBVSxhQUFhLFNBQVMsV0FBWSxPQUFPLFFBQVFFLGFBQVksVUFBVTtBQUN0RixjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFVBQVU7QUFDYixjQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUksSUFBSUEsY0FBYyxDQUFDO0FBRTlDLGlCQUFTLE1BQU0sT0FBTyxRQUFRQSxhQUFZLFFBQVEsR0FBRyxDQUFDLEtBQUs7QUFBQSxNQUMvRDtBQUVFLFVBQUlqRCxLQUFJaUQsY0FBYTtBQUNyQixVQUFJLE1BQU07QUFDVixVQUFJLE1BQU07QUFDVixXQUFLLFNBQVNqRCxFQUFDLElBQUksUUFBUTtBQUMzQixhQUFPLEVBQUVBLE1BQUssTUFBTSxPQUFPLE1BQVE7QUFDakMsWUFBSSxRQUFRLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBU0EsS0FBSSxDQUFDLE1BQU0sR0FBRztBQUN4RCxnQkFBTTtBQUFBLFFBQ1o7QUFDSSxhQUFLLFNBQVNBLEVBQUMsS0FBTSxRQUFRLE9BQVEsS0FBSyxNQUFNO0FBQUEsTUFDcEQ7QUFFRSxhQUFPLFNBQVNpRDtBQUFBLElBQ2xCO0FBRUEsSUFBQUYsUUFBTyxVQUFVLFlBQVksU0FBUyxVQUFXLE9BQU8sUUFBUSxVQUFVO0FBQ3hFLGNBQVEsQ0FBQztBQUNULGVBQVMsV0FBVztBQUNwQixVQUFJLENBQUMsU0FBVSxVQUFTLE1BQU0sT0FBTyxRQUFRLEdBQUcsS0FBTSxJQUFLO0FBQzNELFVBQUksUUFBUSxFQUFHLFNBQVEsTUFBTyxRQUFRO0FBQ3RDLFdBQUssTUFBTSxJQUFLLFFBQVE7QUFDeEIsYUFBTyxTQUFTO0FBQUEsSUFDbEI7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZUFBZSxTQUFTLGFBQWMsT0FBTyxRQUFRLFVBQVU7QUFDOUUsY0FBUSxDQUFDO0FBQ1QsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLFVBQVMsTUFBTSxPQUFPLFFBQVEsR0FBRyxPQUFRLE1BQU87QUFDL0QsV0FBSyxNQUFNLElBQUssUUFBUTtBQUN4QixXQUFLLFNBQVMsQ0FBQyxJQUFLLFVBQVU7QUFDOUIsYUFBTyxTQUFTO0FBQUEsSUFDbEI7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZUFBZSxTQUFTLGFBQWMsT0FBTyxRQUFRLFVBQVU7QUFDOUUsY0FBUSxDQUFDO0FBQ1QsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLFVBQVMsTUFBTSxPQUFPLFFBQVEsR0FBRyxPQUFRLE1BQU87QUFDL0QsV0FBSyxNQUFNLElBQUssVUFBVTtBQUMxQixXQUFLLFNBQVMsQ0FBQyxJQUFLLFFBQVE7QUFDNUIsYUFBTyxTQUFTO0FBQUEsSUFDbEI7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZUFBZSxTQUFTLGFBQWMsT0FBTyxRQUFRLFVBQVU7QUFDOUUsY0FBUSxDQUFDO0FBQ1QsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxTQUFVLFVBQVMsTUFBTSxPQUFPLFFBQVEsR0FBRyxZQUFZLFdBQVc7QUFDdkUsV0FBSyxNQUFNLElBQUssUUFBUTtBQUN4QixXQUFLLFNBQVMsQ0FBQyxJQUFLLFVBQVU7QUFDOUIsV0FBSyxTQUFTLENBQUMsSUFBSyxVQUFVO0FBQzlCLFdBQUssU0FBUyxDQUFDLElBQUssVUFBVTtBQUM5QixhQUFPLFNBQVM7QUFBQSxJQUNsQjtBQUVBLElBQUFBLFFBQU8sVUFBVSxlQUFlLFNBQVMsYUFBYyxPQUFPLFFBQVEsVUFBVTtBQUM5RSxjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFNBQVUsVUFBUyxNQUFNLE9BQU8sUUFBUSxHQUFHLFlBQVksV0FBVztBQUN2RSxVQUFJLFFBQVEsRUFBRyxTQUFRLGFBQWEsUUFBUTtBQUM1QyxXQUFLLE1BQU0sSUFBSyxVQUFVO0FBQzFCLFdBQUssU0FBUyxDQUFDLElBQUssVUFBVTtBQUM5QixXQUFLLFNBQVMsQ0FBQyxJQUFLLFVBQVU7QUFDOUIsV0FBSyxTQUFTLENBQUMsSUFBSyxRQUFRO0FBQzVCLGFBQU8sU0FBUztBQUFBLElBQ2xCO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGtCQUFrQixtQkFBbUIsU0FBUyxnQkFBaUIsT0FBTyxTQUFTLEdBQUc7QUFDakcsYUFBTyxlQUFlLE1BQU0sT0FBTyxRQUFRLENBQUMsT0FBTyxvQkFBb0IsR0FBRyxPQUFPLG9CQUFvQixDQUFDO0FBQUEsSUFDeEcsQ0FBQztBQUVELElBQUFBLFFBQU8sVUFBVSxrQkFBa0IsbUJBQW1CLFNBQVMsZ0JBQWlCLE9BQU8sU0FBUyxHQUFHO0FBQ2pHLGFBQU8sZUFBZSxNQUFNLE9BQU8sUUFBUSxDQUFDLE9BQU8sb0JBQW9CLEdBQUcsT0FBTyxvQkFBb0IsQ0FBQztBQUFBLElBQ3hHLENBQUM7QUFFRCxhQUFTLGFBQWMsS0FBSyxPQUFPLFFBQVEsS0FBSyxLQUFLLEtBQUs7QUFDeEQsVUFBSSxTQUFTLE1BQU0sSUFBSSxPQUFRLE9BQU0sSUFBSSxXQUFXLG9CQUFvQjtBQUN4RSxVQUFJLFNBQVMsRUFBRyxPQUFNLElBQUksV0FBVyxvQkFBb0I7QUFBQSxJQUMzRDtBQUVBLGFBQVMsV0FBWSxLQUFLLE9BQU8sUUFBUSxjQUFjLFVBQVU7QUFDL0QsY0FBUSxDQUFDO0FBQ1QsZUFBUyxXQUFXO0FBQ3BCLFVBQUksQ0FBQyxVQUFVO0FBQ2IscUJBQWEsS0FBSyxPQUFPLFFBQVEsQ0FBa0Q7QUFBQSxNQUN2RjtBQUNFLE1BQUFILFNBQVEsTUFBTSxLQUFLLE9BQU8sUUFBUSxjQUFjLElBQUksQ0FBQztBQUNyRCxhQUFPLFNBQVM7QUFBQSxJQUNsQjtBQUVBLElBQUFHLFFBQU8sVUFBVSxlQUFlLFNBQVMsYUFBYyxPQUFPLFFBQVEsVUFBVTtBQUM5RSxhQUFPLFdBQVcsTUFBTSxPQUFPLFFBQVEsTUFBTSxRQUFRO0FBQUEsSUFDdkQ7QUFFQSxJQUFBQSxRQUFPLFVBQVUsZUFBZSxTQUFTLGFBQWMsT0FBTyxRQUFRLFVBQVU7QUFDOUUsYUFBTyxXQUFXLE1BQU0sT0FBTyxRQUFRLE9BQU8sUUFBUTtBQUFBLElBQ3hEO0FBRUEsYUFBUyxZQUFhLEtBQUssT0FBTyxRQUFRLGNBQWMsVUFBVTtBQUNoRSxjQUFRLENBQUM7QUFDVCxlQUFTLFdBQVc7QUFDcEIsVUFBSSxDQUFDLFVBQVU7QUFDYixxQkFBYSxLQUFLLE9BQU8sUUFBUSxDQUFvRDtBQUFBLE1BQ3pGO0FBQ0UsTUFBQUgsU0FBUSxNQUFNLEtBQUssT0FBTyxRQUFRLGNBQWMsSUFBSSxDQUFDO0FBQ3JELGFBQU8sU0FBUztBQUFBLElBQ2xCO0FBRUEsSUFBQUcsUUFBTyxVQUFVLGdCQUFnQixTQUFTLGNBQWUsT0FBTyxRQUFRLFVBQVU7QUFDaEYsYUFBTyxZQUFZLE1BQU0sT0FBTyxRQUFRLE1BQU0sUUFBUTtBQUFBLElBQ3hEO0FBRUEsSUFBQUEsUUFBTyxVQUFVLGdCQUFnQixTQUFTLGNBQWUsT0FBTyxRQUFRLFVBQVU7QUFDaEYsYUFBTyxZQUFZLE1BQU0sT0FBTyxRQUFRLE9BQU8sUUFBUTtBQUFBLElBQ3pEO0FBR0EsSUFBQUEsUUFBTyxVQUFVLE9BQU8sU0FBUyxLQUFNLFFBQVEsYUFBYSxPQUFPLEtBQUs7QUFDdEUsVUFBSSxDQUFDQSxRQUFPLFNBQVMsTUFBTSxFQUFHLE9BQU0sSUFBSSxVQUFVLDZCQUE2QjtBQUMvRSxVQUFJLENBQUMsTUFBTyxTQUFRO0FBQ3BCLFVBQUksQ0FBQyxPQUFPLFFBQVEsRUFBRyxPQUFNLEtBQUs7QUFDbEMsVUFBSSxlQUFlLE9BQU8sT0FBUSxlQUFjLE9BQU87QUFDdkQsVUFBSSxDQUFDLFlBQWEsZUFBYztBQUNoQyxVQUFJLE1BQU0sS0FBSyxNQUFNLE1BQU8sT0FBTTtBQUdsQyxVQUFJLFFBQVEsTUFBTyxRQUFPO0FBQzFCLFVBQUksT0FBTyxXQUFXLEtBQUssS0FBSyxXQUFXLEVBQUcsUUFBTztBQUdyRCxVQUFJLGNBQWMsR0FBRztBQUNuQixjQUFNLElBQUksV0FBVywyQkFBMkI7QUFBQSxNQUNwRDtBQUNFLFVBQUksUUFBUSxLQUFLLFNBQVMsS0FBSyxPQUFRLE9BQU0sSUFBSSxXQUFXLG9CQUFvQjtBQUNoRixVQUFJLE1BQU0sRUFBRyxPQUFNLElBQUksV0FBVyx5QkFBeUI7QUFHM0QsVUFBSSxNQUFNLEtBQUssT0FBUSxPQUFNLEtBQUs7QUFDbEMsVUFBSSxPQUFPLFNBQVMsY0FBYyxNQUFNLE9BQU87QUFDN0MsY0FBTSxPQUFPLFNBQVMsY0FBYztBQUFBLE1BQ3hDO0FBRUUsWUFBTSxNQUFNLE1BQU07QUFFbEIsVUFBSSxTQUFTLFVBQVUsT0FBTyxXQUFXLFVBQVUsZUFBZSxZQUFZO0FBRTVFLGFBQUssV0FBVyxhQUFhLE9BQU8sR0FBRztBQUFBLE1BQzNDLE9BQVM7QUFDTCxtQkFBVyxVQUFVLElBQUk7QUFBQSxVQUN2QjtBQUFBLFVBQ0EsS0FBSyxTQUFTLE9BQU8sR0FBRztBQUFBLFVBQ3hCO0FBQUEsUUFDTjtBQUFBLE1BQ0E7QUFFRSxhQUFPO0FBQUEsSUFDVDtBQU1BLElBQUFBLFFBQU8sVUFBVSxPQUFPLFNBQVMsS0FBTSxLQUFLLE9BQU8sS0FBS0MsV0FBVTtBQUVoRSxVQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLFlBQUksT0FBTyxVQUFVLFVBQVU7QUFDN0IsVUFBQUEsWUFBVztBQUNYLGtCQUFRO0FBQ1IsZ0JBQU0sS0FBSztBQUFBLFFBQ2pCLFdBQWUsT0FBTyxRQUFRLFVBQVU7QUFDbEMsVUFBQUEsWUFBVztBQUNYLGdCQUFNLEtBQUs7QUFBQSxRQUNqQjtBQUNJLFlBQUlBLGNBQWEsVUFBYSxPQUFPQSxjQUFhLFVBQVU7QUFDMUQsZ0JBQU0sSUFBSSxVQUFVLDJCQUEyQjtBQUFBLFFBQ3JEO0FBQ0ksWUFBSSxPQUFPQSxjQUFhLFlBQVksQ0FBQ0QsUUFBTyxXQUFXQyxTQUFRLEdBQUc7QUFDaEUsZ0JBQU0sSUFBSSxVQUFVLHVCQUF1QkEsU0FBUTtBQUFBLFFBQ3pEO0FBQ0ksWUFBSSxJQUFJLFdBQVcsR0FBRztBQUNwQixnQkFBTSxPQUFPLElBQUksV0FBVyxDQUFDO0FBQzdCLGNBQUtBLGNBQWEsVUFBVSxPQUFPLE9BQy9CQSxjQUFhLFVBQVU7QUFFekIsa0JBQU07QUFBQSxVQUNkO0FBQUEsUUFDQTtBQUFBLE1BQ0EsV0FBYSxPQUFPLFFBQVEsVUFBVTtBQUNsQyxjQUFNLE1BQU07QUFBQSxNQUNoQixXQUFhLE9BQU8sUUFBUSxXQUFXO0FBQ25DLGNBQU0sT0FBTyxHQUFHO0FBQUEsTUFDcEI7QUFHRSxVQUFJLFFBQVEsS0FBSyxLQUFLLFNBQVMsU0FBUyxLQUFLLFNBQVMsS0FBSztBQUN6RCxjQUFNLElBQUksV0FBVyxvQkFBb0I7QUFBQSxNQUM3QztBQUVFLFVBQUksT0FBTyxPQUFPO0FBQ2hCLGVBQU87QUFBQSxNQUNYO0FBRUUsY0FBUSxVQUFVO0FBQ2xCLFlBQU0sUUFBUSxTQUFZLEtBQUssU0FBUyxRQUFRO0FBRWhELFVBQUksQ0FBQyxJQUFLLE9BQU07QUFFaEIsVUFBSWhEO0FBQ0osVUFBSSxPQUFPLFFBQVEsVUFBVTtBQUMzQixhQUFLQSxLQUFJLE9BQU9BLEtBQUksS0FBSyxFQUFFQSxJQUFHO0FBQzVCLGVBQUtBLEVBQUMsSUFBSTtBQUFBLFFBQ2hCO0FBQUEsTUFDQSxPQUFTO0FBQ0wsY0FBTSxRQUFRK0MsUUFBTyxTQUFTLEdBQUcsSUFDN0IsTUFDQUEsUUFBTyxLQUFLLEtBQUtDLFNBQVE7QUFDN0IsY0FBTSxNQUFNLE1BQU07QUFDbEIsWUFBSSxRQUFRLEdBQUc7QUFDYixnQkFBTSxJQUFJLFVBQVUsZ0JBQWdCLE1BQ2xDLG1DQUFtQztBQUFBLFFBQzNDO0FBQ0ksYUFBS2hELEtBQUksR0FBR0EsS0FBSSxNQUFNLE9BQU8sRUFBRUEsSUFBRztBQUNoQyxlQUFLQSxLQUFJLEtBQUssSUFBSSxNQUFNQSxLQUFJLEdBQUc7QUFBQSxRQUNyQztBQUFBLE1BQ0E7QUFFRSxhQUFPO0FBQUEsSUFDVDtBQU1BLFVBQU1rRCxVQUFTLENBQUE7QUFDZixhQUFTQyxHQUFHLEtBQUssWUFBWSxNQUFNO0FBQ2pDLE1BQUFELFFBQU8sR0FBRyxJQUFJLE1BQU0sa0JBQWtCLEtBQUs7QUFBQSxRQUN6QyxjQUFlO0FBQ2IsZ0JBQUs7QUFFTCxpQkFBTyxlQUFlLE1BQU0sV0FBVztBQUFBLFlBQ3JDLE9BQU8sV0FBVyxNQUFNLE1BQU0sU0FBUztBQUFBLFlBQ3ZDLFVBQVU7QUFBQSxZQUNWLGNBQWM7QUFBQSxXQUNmO0FBR0QsZUFBSyxPQUFPLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRztBQUdoQyxlQUFLO0FBRUwsaUJBQU8sS0FBSztBQUFBLFFBQ2xCO0FBQUEsUUFFSSxJQUFJLE9BQVE7QUFDVixpQkFBTztBQUFBLFFBQ2I7QUFBQSxRQUVJLElBQUksS0FBTSxPQUFPO0FBQ2YsaUJBQU8sZUFBZSxNQUFNLFFBQVE7QUFBQSxZQUNsQyxjQUFjO0FBQUEsWUFDZCxZQUFZO0FBQUEsWUFDWjtBQUFBLFlBQ0EsVUFBVTtBQUFBLFdBQ1g7QUFBQSxRQUNQO0FBQUEsUUFFSSxXQUFZO0FBQ1YsaUJBQU8sR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLE1BQU0sS0FBSyxPQUFPO0FBQUEsUUFDbkQ7QUFBQSxNQUNBO0FBQUEsSUFDQTtBQUVBLElBQUFDO0FBQUEsTUFBRTtBQUFBLE1BQ0EsU0FBVSxNQUFNO0FBQ2QsWUFBSSxNQUFNO0FBQ1IsaUJBQU8sR0FBRyxJQUFJO0FBQUEsUUFDcEI7QUFFSSxlQUFPO0FBQUEsTUFDWDtBQUFBLE1BQUs7QUFBQSxJQUFVO0FBQ2YsSUFBQUE7QUFBQSxNQUFFO0FBQUEsTUFDQSxTQUFVLE1BQU0sUUFBUTtBQUN0QixlQUFPLFFBQVEsSUFBSSxvREFBb0QsT0FBTyxNQUFNO0FBQUEsTUFDeEY7QUFBQSxNQUFLO0FBQUEsSUFBUztBQUNkLElBQUFBO0FBQUEsTUFBRTtBQUFBLE1BQ0EsU0FBVSxLQUFLLE9BQU8sT0FBTztBQUMzQixZQUFJLE1BQU0saUJBQWlCLEdBQUc7QUFDOUIsWUFBSSxXQUFXO0FBQ2YsWUFBSSxPQUFPLFVBQVUsS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQ3hELHFCQUFXLHNCQUFzQixPQUFPLEtBQUssQ0FBQztBQUFBLFFBQ3BELFdBQWUsT0FBTyxVQUFVLFVBQVU7QUFDcEMscUJBQVcsT0FBTyxLQUFLO0FBQ3ZCLGNBQUksUUFBUSxPQUFPLENBQUMsS0FBSyxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUUsT0FBTyxDQUFDLEtBQUssT0FBTyxFQUFFLElBQUk7QUFDekUsdUJBQVcsc0JBQXNCLFFBQVE7QUFBQSxVQUNqRDtBQUNNLHNCQUFZO0FBQUEsUUFDbEI7QUFDSSxlQUFPLGVBQWUsS0FBSyxjQUFjLFFBQVE7QUFDakQsZUFBTztBQUFBLE1BQ1g7QUFBQSxNQUFLO0FBQUEsSUFBVTtBQUVmLGFBQVMsc0JBQXVCLEtBQUs7QUFDbkMsVUFBSSxNQUFNO0FBQ1YsVUFBSW5ELEtBQUksSUFBSTtBQUNaLFlBQU0sUUFBUSxJQUFJLENBQUMsTUFBTSxNQUFNLElBQUk7QUFDbkMsYUFBT0EsTUFBSyxRQUFRLEdBQUdBLE1BQUssR0FBRztBQUM3QixjQUFNLElBQUksSUFBSSxNQUFNQSxLQUFJLEdBQUdBLEVBQUMsQ0FBQyxHQUFHLEdBQUc7QUFBQSxNQUN2QztBQUNFLGFBQU8sR0FBRyxJQUFJLE1BQU0sR0FBR0EsRUFBQyxDQUFDLEdBQUcsR0FBRztBQUFBLElBQ2pDO0FBS0EsYUFBUyxZQUFhLEtBQUssUUFBUWlELGFBQVk7QUFDN0MscUJBQWUsUUFBUSxRQUFRO0FBQy9CLFVBQUksSUFBSSxNQUFNLE1BQU0sVUFBYSxJQUFJLFNBQVNBLFdBQVUsTUFBTSxRQUFXO0FBQ3ZFLG9CQUFZLFFBQVEsSUFBSSxVQUFVQSxjQUFhLEVBQUU7QUFBQSxNQUNyRDtBQUFBLElBQ0E7QUFFQSxhQUFTLFdBQVksT0FBTyxLQUFLLEtBQUssS0FBSyxRQUFRQSxhQUFZO0FBQzdELFVBQUksUUFBUSxPQUFPLFFBQVEsS0FBSztBQUM5QixjQUFNckQsS0FBSSxPQUFPLFFBQVEsV0FBVyxNQUFNO0FBQzFDLFlBQUk7QUFDZ0I7QUFDbEIsY0FBSSxRQUFRLEtBQUssUUFBUSxPQUFPLENBQUMsR0FBRztBQUNsQyxvQkFBUSxPQUFPQSxFQUFDLFdBQVdBLEVBQUMsUUFBUXFELGNBQWEsS0FBSyxDQUFDLEdBQUdyRCxFQUFDO0FBQUEsVUFDbkUsT0FBYTtBQUNMLG9CQUFRLFNBQVNBLEVBQUMsUUFBUXFELGNBQWEsS0FBSyxJQUFJLENBQUMsR0FBR3JELEVBQUMsaUJBQ3pDcUQsY0FBYSxLQUFLLElBQUksQ0FBQyxHQUFHckQsRUFBQztBQUFBLFVBQy9DO0FBQUEsUUFDQTtBQUdJLGNBQU0sSUFBSXNELFFBQU8saUJBQWlCLFNBQVMsT0FBTyxLQUFLO0FBQUEsTUFDM0Q7QUFDRSxrQkFBWSxLQUFLLFFBQVFELFdBQVU7QUFBQSxJQUNyQztBQUVBLGFBQVMsZUFBZ0IsT0FBTyxNQUFNO0FBQ3BDLFVBQUksT0FBTyxVQUFVLFVBQVU7QUFDN0IsY0FBTSxJQUFJQyxRQUFPLHFCQUFxQixNQUFNLFVBQVUsS0FBSztBQUFBLE1BQy9EO0FBQUEsSUFDQTtBQUVBLGFBQVMsWUFBYSxPQUFPLFFBQVEsTUFBTTtBQUN6QyxVQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTztBQUMvQix1QkFBZSxPQUFPLElBQUk7QUFDMUIsY0FBTSxJQUFJQSxRQUFPLGlCQUF5QixVQUFVLGNBQWMsS0FBSztBQUFBLE1BQzNFO0FBRUUsVUFBSSxTQUFTLEdBQUc7QUFDZCxjQUFNLElBQUlBLFFBQU8seUJBQXdCO0FBQUEsTUFDN0M7QUFFRSxZQUFNLElBQUlBLFFBQU87QUFBQSxRQUF5QjtBQUFBLFFBQ1IsTUFBaUIsQ0FBQyxXQUFXLE1BQU07QUFBQSxRQUNuQztBQUFBLE1BQUs7QUFBQSxJQUN6QztBQUtBLFVBQU0sb0JBQW9CO0FBRTFCLGFBQVMsWUFBYSxLQUFLO0FBRXpCLFlBQU0sSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBRXRCLFlBQU0sSUFBSSxLQUFJLEVBQUcsUUFBUSxtQkFBbUIsRUFBRTtBQUU5QyxVQUFJLElBQUksU0FBUyxFQUFHLFFBQU87QUFFM0IsYUFBTyxJQUFJLFNBQVMsTUFBTSxHQUFHO0FBQzNCLGNBQU0sTUFBTTtBQUFBLE1BQ2hCO0FBQ0UsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLFlBQWEsUUFBUSxPQUFPO0FBQ25DLGNBQVEsU0FBUztBQUNqQixVQUFJO0FBQ0osWUFBTSxTQUFTLE9BQU87QUFDdEIsVUFBSSxnQkFBZ0I7QUFDcEIsWUFBTSxRQUFRLENBQUE7QUFFZCxlQUFTbEQsS0FBSSxHQUFHQSxLQUFJLFFBQVEsRUFBRUEsSUFBRztBQUMvQixvQkFBWSxPQUFPLFdBQVdBLEVBQUM7QUFHL0IsWUFBSSxZQUFZLFNBQVUsWUFBWSxPQUFRO0FBRTVDLGNBQUksQ0FBQyxlQUFlO0FBRWxCLGdCQUFJLFlBQVksT0FBUTtBQUV0QixtQkFBSyxTQUFTLEtBQUssR0FBSSxPQUFNLEtBQUssS0FBTSxLQUFNLEdBQUk7QUFDbEQ7QUFBQSxZQUNWLFdBQW1CQSxLQUFJLE1BQU0sUUFBUTtBQUUzQixtQkFBSyxTQUFTLEtBQUssR0FBSSxPQUFNLEtBQUssS0FBTSxLQUFNLEdBQUk7QUFDbEQ7QUFBQSxZQUNWO0FBR1EsNEJBQWdCO0FBRWhCO0FBQUEsVUFDUjtBQUdNLGNBQUksWUFBWSxPQUFRO0FBQ3RCLGlCQUFLLFNBQVMsS0FBSyxHQUFJLE9BQU0sS0FBSyxLQUFNLEtBQU0sR0FBSTtBQUNsRCw0QkFBZ0I7QUFDaEI7QUFBQSxVQUNSO0FBR00sdUJBQWEsZ0JBQWdCLFNBQVUsS0FBSyxZQUFZLFNBQVU7QUFBQSxRQUN4RSxXQUFlLGVBQWU7QUFFeEIsZUFBSyxTQUFTLEtBQUssR0FBSSxPQUFNLEtBQUssS0FBTSxLQUFNLEdBQUk7QUFBQSxRQUN4RDtBQUVJLHdCQUFnQjtBQUdoQixZQUFJLFlBQVksS0FBTTtBQUNwQixlQUFLLFNBQVMsS0FBSyxFQUFHO0FBQ3RCLGdCQUFNLEtBQUssU0FBUztBQUFBLFFBQzFCLFdBQWUsWUFBWSxNQUFPO0FBQzVCLGVBQUssU0FBUyxLQUFLLEVBQUc7QUFDdEIsZ0JBQU07QUFBQSxZQUNKLGFBQWEsSUFBTTtBQUFBLFlBQ25CLFlBQVksS0FBTztBQUFBLFVBQzNCO0FBQUEsUUFDQSxXQUFlLFlBQVksT0FBUztBQUM5QixlQUFLLFNBQVMsS0FBSyxFQUFHO0FBQ3RCLGdCQUFNO0FBQUEsWUFDSixhQUFhLEtBQU07QUFBQSxZQUNuQixhQUFhLElBQU0sS0FBTztBQUFBLFlBQzFCLFlBQVksS0FBTztBQUFBLFVBQzNCO0FBQUEsUUFDQSxXQUFlLFlBQVksU0FBVTtBQUMvQixlQUFLLFNBQVMsS0FBSyxFQUFHO0FBQ3RCLGdCQUFNO0FBQUEsWUFDSixhQUFhLEtBQU87QUFBQSxZQUNwQixhQUFhLEtBQU0sS0FBTztBQUFBLFlBQzFCLGFBQWEsSUFBTSxLQUFPO0FBQUEsWUFDMUIsWUFBWSxLQUFPO0FBQUEsVUFDM0I7QUFBQSxRQUNBLE9BQVc7QUFDTCxnQkFBTSxJQUFJLE1BQU0sb0JBQW9CO0FBQUEsUUFDMUM7QUFBQSxNQUNBO0FBRUUsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGFBQWMsS0FBSztBQUMxQixZQUFNLFlBQVksQ0FBQTtBQUNsQixlQUFTQSxLQUFJLEdBQUdBLEtBQUksSUFBSSxRQUFRLEVBQUVBLElBQUc7QUFFbkMsa0JBQVUsS0FBSyxJQUFJLFdBQVdBLEVBQUMsSUFBSSxHQUFJO0FBQUEsTUFDM0M7QUFDRSxhQUFPO0FBQUEsSUFDVDtBQUVBLGFBQVMsZUFBZ0IsS0FBSyxPQUFPO0FBQ25DLFVBQUlLLElBQUcsSUFBSTtBQUNYLFlBQU0sWUFBWSxDQUFBO0FBQ2xCLGVBQVNMLEtBQUksR0FBR0EsS0FBSSxJQUFJLFFBQVEsRUFBRUEsSUFBRztBQUNuQyxhQUFLLFNBQVMsS0FBSyxFQUFHO0FBRXRCLFFBQUFLLEtBQUksSUFBSSxXQUFXTCxFQUFDO0FBQ3BCLGFBQUtLLE1BQUs7QUFDVixhQUFLQSxLQUFJO0FBQ1Qsa0JBQVUsS0FBSyxFQUFFO0FBQ2pCLGtCQUFVLEtBQUssRUFBRTtBQUFBLE1BQ3JCO0FBRUUsYUFBTztBQUFBLElBQ1Q7QUFFQSxhQUFTLGNBQWUsS0FBSztBQUMzQixhQUFPLE9BQU8sWUFBWSxZQUFZLEdBQUcsQ0FBQztBQUFBLElBQzVDO0FBRUEsYUFBUyxXQUFZLEtBQUssS0FBSyxRQUFRLFFBQVE7QUFDN0MsVUFBSUw7QUFDSixXQUFLQSxLQUFJLEdBQUdBLEtBQUksUUFBUSxFQUFFQSxJQUFHO0FBQzNCLFlBQUtBLEtBQUksVUFBVSxJQUFJLFVBQVlBLE1BQUssSUFBSSxPQUFTO0FBQ3JELFlBQUlBLEtBQUksTUFBTSxJQUFJLElBQUlBLEVBQUM7QUFBQSxNQUMzQjtBQUNFLGFBQU9BO0FBQUEsSUFDVDtBQUtBLGFBQVMsV0FBWSxLQUFLLE1BQU07QUFDOUIsYUFBTyxlQUFlLFFBQ25CLE9BQU8sUUFBUSxJQUFJLGVBQWUsUUFBUSxJQUFJLFlBQVksUUFBUSxRQUNqRSxJQUFJLFlBQVksU0FBUyxLQUFLO0FBQUEsSUFDcEM7QUFDQSxhQUFTLFlBQWEsS0FBSztBQUV6QixhQUFPLFFBQVE7QUFBQSxJQUNqQjtBQUlBLFVBQU0sdUJBQXVCLFdBQVk7QUFDdkMsWUFBTSxXQUFXO0FBQ2pCLFlBQU0sUUFBUSxJQUFJLE1BQU0sR0FBRztBQUMzQixlQUFTQSxLQUFJLEdBQUdBLEtBQUksSUFBSSxFQUFFQSxJQUFHO0FBQzNCLGNBQU0sTUFBTUEsS0FBSTtBQUNoQixpQkFBU3lCLEtBQUksR0FBR0EsS0FBSSxJQUFJLEVBQUVBLElBQUc7QUFDM0IsZ0JBQU0sTUFBTUEsRUFBQyxJQUFJLFNBQVN6QixFQUFDLElBQUksU0FBU3lCLEVBQUM7QUFBQSxRQUMvQztBQUFBLE1BQ0E7QUFDRSxhQUFPO0FBQUEsSUFDVCxHQUFDO0FBR0QsYUFBUyxtQkFBb0IsSUFBSTtBQUMvQixhQUFPLE9BQU8sV0FBVyxjQUFjLHlCQUF5QjtBQUFBLElBQ2xFO0FBRUEsYUFBUyx5QkFBMEI7QUFDakMsWUFBTSxJQUFJLE1BQU0sc0JBQXNCO0FBQUEsSUFDeEM7QUFBQTs7Ozs7Ozs7QUN0akVBLE1BQUksT0FBTztBQU1YLGNBQWlCLFdBQVk7QUFDM0IsUUFBSSxTQUFTLE1BQU07QUFDakIsYUFBTztBQUFBLFFBQ0wsYUFBYSxJQUFJLFlBQUE7QUFBQSxRQUNqQixhQUFhLElBQUksWUFBQTtBQUFBO0lBQ25CO0FBR0YsV0FBTztBQUFBLEVBQ1Q7Ozs7Ozs7OztBQ2hCQSxRQUFNLGNBQWNrQixtQkFBQTtBQUNwQixRQUFNUyxXQUFVLG9CQUFJLElBQUksQ0FBQyxVQUFVLFFBQVEsTUFBTSxDQUFDO0FBQUEsRUFNbEQsTUFBTSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJYixZQUFhLFNBQVM7QUFFcEIsV0FBSyxTQUFTLFFBQVEsVUFBVSxLQUFLO0FBR3JDLFdBQUssU0FBUyxRQUFRLFVBQVUsS0FBSztBQUdyQyxXQUFLLE9BQU8sUUFBUSxRQUFRLEtBQUs7QUFHakMsV0FBSyxTQUFTLFFBQVEsVUFBVSxLQUFLO0FBRXJDLFVBQUksT0FBTyxLQUFLLFdBQVcsWUFBWTtBQUNyQyxjQUFNLElBQUksVUFBVSwwQ0FBMEM7QUFBQSxNQUNwRTtBQUVJLFVBQUksT0FBTyxLQUFLLFdBQVcsWUFBWTtBQUNyQyxjQUFNLElBQUksVUFBVSwwQ0FBMEM7QUFBQSxNQUNwRTtBQUVJLFdBQUssU0FBUyxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQ25DLFdBQUssU0FBUyxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBRW5DLFVBQUksT0FBTyxLQUFLLFNBQVMsWUFBWSxLQUFLLFNBQVMsSUFBSTtBQUNyRCxjQUFNLElBQUksVUFBVSxzQ0FBc0M7QUFBQSxNQUNoRTtBQUVJLFVBQUksT0FBTyxLQUFLLFdBQVcsWUFBWSxDQUFDQSxTQUFRLElBQUksS0FBSyxNQUFNLEdBQUc7QUFDaEUsY0FBTSxJQUFJLFVBQVUsK0RBQStEO0FBQUEsTUFDekY7QUFFSSxVQUFJLFFBQVEsc0JBQXNCO0FBQ2hDLGFBQUssdUJBQXVCLFFBQVE7QUFBQSxNQUMxQztBQUVJLFVBQUksUUFBUSx3QkFBd0I7QUFDbEMsYUFBSyx5QkFBeUIsUUFBUTtBQUFBLE1BQzVDO0FBRUksVUFBSSxRQUFRLHNCQUFzQjtBQUNoQyxhQUFLLHVCQUF1QixRQUFRO0FBQUEsTUFDMUM7QUFBQSxJQUNBO0FBQUEsSUFFRSxJQUFJLGFBQWM7QUFDaEI7QUFBQTtBQUFBLFFBQThCLEtBQUssS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQUE7QUFBQSxJQUN4RDtBQUFBO0FBQUEsSUFHRSx5QkFBMEI7QUFDeEIsWUFBTSxJQUFJLFlBQVksYUFBYSxLQUFLLElBQUksc0NBQXNDO0FBQUEsUUFDaEYsTUFBTTtBQUFBLE9BQ1A7QUFBQSxJQUNMO0FBQUE7QUFBQSxJQUdFLHVCQUF3QjtBQUN0QixZQUFNLElBQUksWUFBWSxhQUFhLEtBQUssSUFBSSxvQ0FBb0M7QUFBQSxRQUM5RSxNQUFNO0FBQUEsT0FDUDtBQUFBLElBQ0w7QUFBQTtBQUFBLElBR0UsdUJBQXdCO0FBQ3RCLFlBQU0sSUFBSSxZQUFZLGFBQWEsS0FBSyxJQUFJLG9DQUFvQztBQUFBLFFBQzlFLE1BQU07QUFBQSxPQUNQO0FBQUEsSUFDTDtBQUFBLEVBQ0E7QUFFQSxXQUFBLFdBQW1COzs7Ozs7O0FDbEZuQixRQUFNLEVBQUUsUUFBQUwsWUFBV0osbUJBQXFCLENBQUE7QUFDeEMsUUFBTSxFQUFFLFNBQVEsSUFBS0UsZ0JBQUE7QUFDckIsUUFBTVEsYUFBWUMsaUJBQUE7QUFBQSxFQU1sQixNQUFNLHFCQUFxQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJbEMsWUFBYSxTQUFTO0FBQ3BCLFlBQU0sRUFBRSxHQUFHLFNBQVMsUUFBUSxTQUFRLENBQUU7QUFBQSxJQUMxQztBQUFBO0FBQUEsSUFHRSx1QkFBd0I7QUFDdEIsYUFBTyxJQUFJLFdBQVc7QUFBQSxRQUNwQixRQUFRLEtBQUs7QUFBQTtBQUFBLFFBQ2IsUUFBUSxDQUFDLFNBQVMsS0FBSztBQUFBLFVBQ3JCUCxRQUFPLEtBQUssS0FBSyxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVU7QUFBQTtRQUUzRCxNQUFNLEdBQUcsS0FBSyxJQUFJO0FBQUEsT0FDbkI7QUFBQSxJQUNMO0FBQUE7QUFBQSxJQUdFLHlCQUEwQjtBQUN4QixhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0E7QUFBQSxFQU1BLE1BQU0sbUJBQW1CLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUloQyxZQUFhLFNBQVM7QUFDcEIsWUFBTSxFQUFFLEdBQUcsU0FBUyxRQUFRLE9BQU0sQ0FBRTtBQUFBLElBQ3hDO0FBQUE7QUFBQSxJQUdFLHlCQUEwQjtBQUN4QixhQUFPLElBQUksYUFBYTtBQUFBLFFBQ3RCLFFBQVEsQ0FBQyxTQUFTO0FBQ2hCLGdCQUFNLE9BQU8sS0FBSyxPQUFPLElBQUk7QUFDN0IsaUJBQU9BLFFBQU8sS0FBSyxLQUFLLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVTtBQUFBLFFBQ3hFO0FBQUEsUUFDTSxRQUFRLEtBQUs7QUFBQTtBQUFBLFFBQ2IsTUFBTSxHQUFHLEtBQUssSUFBSTtBQUFBLE9BQ25CO0FBQUEsSUFDTDtBQUFBO0FBQUEsSUFHRSx1QkFBd0I7QUFDdEIsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNBO0FBQUEsRUFNQSxNQUFNLG1CQUFtQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJaEMsWUFBYSxTQUFTO0FBQ3BCLFlBQU0sRUFBRSxHQUFHLFNBQVMsUUFBUSxPQUFNLENBQUU7QUFBQSxJQUN4QztBQUFBO0FBQUEsSUFHRSx5QkFBMEI7QUFDeEIsYUFBTyxJQUFJLGFBQWE7QUFBQSxRQUN0QixRQUFRLENBQUMsU0FBU0EsUUFBTyxLQUFLLEtBQUssT0FBTyxJQUFJLEdBQUcsTUFBTTtBQUFBLFFBQ3ZELFFBQVEsQ0FBQyxTQUFTLEtBQUssT0FBTyxLQUFLLFNBQVMsTUFBTSxDQUFDO0FBQUEsUUFDbkQsTUFBTSxHQUFHLEtBQUssSUFBSTtBQUFBLE9BQ25CO0FBQUEsSUFDTDtBQUFBO0FBQUEsSUFHRSx1QkFBd0I7QUFDdEIsWUFBTSxFQUFFLGFBQWEsWUFBVyxJQUFLTSxXQUFTO0FBRTlDLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDcEIsUUFBUSxDQUFDLFNBQVMsWUFBWSxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUM7QUFBQSxRQUN0RCxRQUFRLENBQUMsU0FBUyxLQUFLLE9BQU8sWUFBWSxPQUFPLElBQUksQ0FBQztBQUFBLFFBQ3RELE1BQU0sR0FBRyxLQUFLLElBQUk7QUFBQSxPQUNuQjtBQUFBLElBQ0w7QUFBQTtBQUFBLElBR0UsdUJBQXdCO0FBQ3RCLGFBQU87QUFBQSxJQUNYO0FBQUEsRUFDQTtBQUVBLFVBQUEsZUFBdUI7QUFDdkIsVUFBQSxhQUFxQjtBQUNyQixVQUFBLGFBQXFCOzs7Ozs7O0FDdkdyQixRQUFNLEVBQUUsUUFBQU4sUUFBTSxJQUFLSixtQkFBcUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxNQUFNLE1BQUssRUFBRTtBQUMzRSxRQUFNLEVBQUUsYUFBYSxZQUFXLElBQUtFLGlCQUFBLEVBQXVCO0FBQzVELFFBQU0sRUFBRSxjQUFjLFlBQVksV0FBVSxJQUFLUyxlQUFBO0FBR2pELFFBQU0sV0FBVyxDQUFDN0MsT0FBTUE7QUFLeEIsWUFBQSxPQUFlLElBQUksV0FBVztBQUFBLElBQzVCLFFBQVEsU0FBVSxNQUFNO0FBRXRCLGFBQU9zQyxRQUFPLFNBQVMsSUFBSSxJQUN2QixLQUFLLFNBQVMsTUFBTSxJQUNwQixZQUFZLE9BQU8sSUFBSSxJQUNyQixZQUFZLE9BQU8sSUFBSSxJQUN2QixPQUFPLElBQUk7QUFBQSxJQUNyQjtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sdUJBQXdCO0FBQ3RCLGFBQU8sSUFBSSxXQUFXO0FBQUEsUUFDcEIsUUFBUSxTQUFVLE1BQU07QUFDdEIsaUJBQU8sWUFBWSxPQUFPLElBQUksSUFBSSxPQUFPLFlBQVksT0FBTyxJQUFJO0FBQUEsUUFDeEU7QUFBQSxRQUNNLFFBQVEsU0FBVSxNQUFNO0FBQ3RCLGlCQUFPLFlBQVksT0FBTyxJQUFJO0FBQUEsUUFDdEM7QUFBQSxRQUNNLE1BQU0sR0FBRyxLQUFLLElBQUk7QUFBQSxPQUNuQjtBQUFBLElBQ0w7QUFBQSxJQUNFLHlCQUEwQjtBQUN4QixhQUFPLElBQUksYUFBYTtBQUFBLFFBQ3RCLFFBQVEsU0FBVSxNQUFNO0FBQ3RCLGlCQUFPQSxRQUFPLFNBQVMsSUFBSSxJQUN2QixPQUNBLFlBQVksT0FBTyxJQUFJLElBQ3JCQSxRQUFPLEtBQUssS0FBSyxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVUsSUFDekRBLFFBQU8sS0FBSyxPQUFPLElBQUksR0FBRyxNQUFNO0FBQUEsUUFDOUM7QUFBQSxRQUNNLFFBQVEsU0FBVSxNQUFNO0FBQ3RCLGlCQUFPLEtBQUssU0FBUyxNQUFNO0FBQUEsUUFDbkM7QUFBQSxRQUNNLE1BQU0sR0FBRyxLQUFLLElBQUk7QUFBQSxPQUNuQjtBQUFBLElBQ0w7QUFBQSxHQUNDO0FBS0QsWUFBQSxPQUFlLElBQUksV0FBVztBQUFBLElBQzVCLFFBQVEsS0FBSztBQUFBLElBQ2IsUUFBUSxLQUFLO0FBQUEsSUFDYixNQUFNO0FBQUEsR0FDUDtBQUtELFlBQUEsU0FBaUIsSUFBSSxhQUFhO0FBQUEsSUFDaEMsUUFBUSxTQUFVLE1BQU07QUFDdEIsYUFBT0EsUUFBTyxTQUFTLElBQUksSUFDdkIsT0FDQSxZQUFZLE9BQU8sSUFBSSxJQUNyQkEsUUFBTyxLQUFLLEtBQUssUUFBUSxLQUFLLFlBQVksS0FBSyxVQUFVLElBQ3pEQSxRQUFPLEtBQUssT0FBTyxJQUFJLEdBQUcsTUFBTTtBQUFBLElBQzFDO0FBQUEsSUFDRSxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTix1QkFBd0I7QUFDdEIsYUFBTyxJQUFJLFdBQVc7QUFBQSxRQUNwQixRQUFRLFNBQVUsTUFBTTtBQUN0QixpQkFBTyxZQUFZLE9BQU8sSUFBSSxJQUFJLE9BQU9BLFFBQU8sS0FBSyxPQUFPLElBQUksR0FBRyxNQUFNO0FBQUEsUUFDakY7QUFBQSxRQUNNLFFBQVEsU0FBVSxNQUFNO0FBQ3RCLGlCQUFPQSxRQUFPLEtBQUssS0FBSyxRQUFRLEtBQUssWUFBWSxLQUFLLFVBQVU7QUFBQSxRQUN4RTtBQUFBLFFBQ00sTUFBTSxHQUFHLEtBQUssSUFBSTtBQUFBLE9BQ25CO0FBQUEsSUFDTDtBQUFBLEdBQ0M7QUFLRCxZQUFBLE9BQWUsSUFBSSxXQUFXO0FBQUEsSUFDNUIsUUFBUSxTQUFVLE1BQU07QUFDdEIsYUFBTyxZQUFZLE9BQU8sSUFBSSxJQUFJLE9BQU8sWUFBWSxPQUFPLElBQUk7QUFBQSxJQUNwRTtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04seUJBQTBCO0FBQ3hCLGFBQU8sSUFBSSxhQUFhO0FBQUEsUUFDdEIsUUFBUSxTQUFVLE1BQU07QUFDdEIsaUJBQU9BLFFBQU8sU0FBUyxJQUFJLElBQ3ZCLE9BQ0EsWUFBWSxPQUFPLElBQUksSUFDckJBLFFBQU8sS0FBSyxLQUFLLFFBQVEsS0FBSyxZQUFZLEtBQUssVUFBVSxJQUN6REEsUUFBTyxLQUFLLE9BQU8sSUFBSSxHQUFHLE1BQU07QUFBQSxRQUM5QztBQUFBLFFBQ00sUUFBUTtBQUFBLFFBQ1IsTUFBTSxHQUFHLEtBQUssSUFBSTtBQUFBLE9BQ25CO0FBQUEsSUFDTDtBQUFBLEdBQ0M7QUFLRCxZQUFBLE1BQWMsSUFBSSxhQUFhO0FBQUEsSUFDN0IsUUFBUSxTQUFVLE1BQU07QUFDdEIsYUFBT0EsUUFBTyxTQUFTLElBQUksSUFBSSxPQUFPQSxRQUFPLEtBQUssT0FBTyxJQUFJLEdBQUcsS0FBSztBQUFBLElBQ3pFO0FBQUEsSUFDRSxRQUFRLFNBQVVMLFNBQVE7QUFDeEIsYUFBT0EsUUFBTyxTQUFTLEtBQUs7QUFBQSxJQUNoQztBQUFBLElBQ0UsTUFBTTtBQUFBLEdBQ1A7QUFLRCxZQUFBLFNBQWlCLElBQUksYUFBYTtBQUFBLElBQ2hDLFFBQVEsU0FBVSxNQUFNO0FBQ3RCLGFBQU9LLFFBQU8sU0FBUyxJQUFJLElBQUksT0FBT0EsUUFBTyxLQUFLLE9BQU8sSUFBSSxHQUFHLFFBQVE7QUFBQSxJQUM1RTtBQUFBLElBQ0UsUUFBUSxTQUFVTCxTQUFRO0FBQ3hCLGFBQU9BLFFBQU8sU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFBQSxJQUNFLE1BQU07QUFBQSxHQUNQOzs7Ozs7O0FDcElELFFBQU0sY0FBY0MsbUJBQUE7QUFDcEIsUUFBTVksYUFBWVYsaUJBQUE7QUFDbEIsUUFBTSxFQUFFLFNBQVEsSUFBS1MsZ0JBQUE7QUFDckIsUUFBTSxFQUFFLGNBQWMsWUFBWSxXQUFVLElBQUtFLGVBQUE7QUFFakQsUUFBTSxXQUFXLHVCQUFPLFNBQVM7QUFDakMsUUFBTSxhQUFhLHVCQUFPLFdBQVc7QUFDckMsUUFBTSxlQUFlLG9CQUFJLElBQUksQ0FBQyxVQUFVLFFBQVEsTUFBTSxDQUFDO0FBQUEsRUFHdkQsTUFBTSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJZixZQUFhSixVQUFTO0FBQ3BCLFVBQUksQ0FBQyxNQUFNLFFBQVFBLFFBQU8sR0FBRztBQUMzQixjQUFNLElBQUksVUFBVSwrQ0FBK0M7QUFBQSxNQUN6RSxXQUFlLENBQUNBLFNBQVEsTUFBTSxDQUFBaEQsT0FBSyxhQUFhLElBQUlBLEVBQUMsQ0FBQyxHQUFHO0FBRW5ELGNBQU0sSUFBSSxVQUFVLGdEQUFnRDtBQUFBLE1BQzFFO0FBR0ksV0FBSyxVQUFVLElBQUksb0JBQUksSUFBRztBQUMxQixXQUFLLFFBQVEsSUFBSSxJQUFJLElBQUlnRCxRQUFPO0FBR2hDLGlCQUFXcEMsTUFBS3VDLFlBQVc7QUFDekIsWUFBSTtBQUNGLGVBQUssU0FBU3ZDLEVBQUM7QUFBQSxRQUN2QixTQUFlLEtBQUs7QUFFWixjQUFJLElBQUksU0FBUywrQkFBZ0MsT0FBTTtBQUFBLFFBQy9EO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtFLFlBQWE7QUFDWCxhQUFPLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUUsUUFBUSxDQUFDO0FBQUEsSUFDeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUUsU0FBVWdDLFdBQVU7QUFDbEIsVUFBSSxXQUFXLEtBQUssVUFBVSxFQUFFLElBQUlBLFNBQVE7QUFFNUMsVUFBSSxhQUFhLFFBQVc7QUFDMUIsWUFBSSxPQUFPQSxjQUFhLFlBQVlBLGNBQWEsSUFBSTtBQUNuRCxxQkFBVyxPQUFPQSxTQUFRO0FBRTFCLGNBQUksQ0FBQyxVQUFVO0FBQ2Isa0JBQU0sSUFBSSxZQUFZLGFBQWFBLFNBQVEsa0JBQWtCO0FBQUEsY0FDM0QsTUFBTTtBQUFBLGFBQ1A7QUFBQSxVQUNYO0FBQUEsUUFDQSxXQUFpQixPQUFPQSxjQUFhLFlBQVlBLGNBQWEsTUFBTTtBQUM1RCxnQkFBTSxJQUFJLFVBQVUsc0RBQXNEO0FBQUEsUUFDbEYsT0FBYTtBQUNMLHFCQUFXLEtBQUtBLFNBQVE7QUFBQSxRQUNoQztBQUVNLGNBQU0sRUFBRSxNQUFNLFdBQVc7QUFFekIsWUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFLElBQUksTUFBTSxHQUFHO0FBQy9CLGNBQUksS0FBSyxRQUFRLEVBQUUsSUFBSSxNQUFNLEdBQUc7QUFDOUIsdUJBQVcsU0FBUyxxQkFBb0I7QUFBQSxVQUNsRCxXQUFtQixLQUFLLFFBQVEsRUFBRSxJQUFJLFFBQVEsR0FBRztBQUN2Qyx1QkFBVyxTQUFTLHVCQUFzQjtBQUFBLFVBQ3BELFdBQW1CLEtBQUssUUFBUSxFQUFFLElBQUksTUFBTSxHQUFHO0FBQ3JDLHVCQUFXLFNBQVMscUJBQW9CO0FBQUEsVUFDbEQsT0FBZTtBQUNMLGtCQUFNLElBQUksWUFBWSxhQUFhLElBQUksMEJBQTBCO0FBQUEsY0FDL0QsTUFBTTtBQUFBLGFBQ1A7QUFBQSxVQUNYO0FBQUEsUUFDQTtBQUVNLG1CQUFXaEMsTUFBSyxDQUFDZ0MsV0FBVSxNQUFNLFNBQVMsTUFBTSxTQUFTLFVBQVUsR0FBRztBQUNwRSxlQUFLLFVBQVUsRUFBRSxJQUFJaEMsSUFBRyxRQUFRO0FBQUEsUUFDeEM7QUFBQSxNQUNBO0FBRUksYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNBO0FBRUEsa0JBQUEsYUFBcUI7QUFNckIsV0FBUyxLQUFNLFNBQVM7QUFDdEIsUUFBSSxtQkFBbUIsVUFBVTtBQUMvQixhQUFPO0FBQUEsSUFDWDtBQUdFLFVBQU0sWUFBWSxVQUFVLFdBQVcsT0FBTyxRQUFRLFNBQVMsV0FBVyxRQUFRLE9BQU87QUFDekYsVUFBTSxPQUFPLFFBQVEsUUFBUSxhQUFhLGFBQWEsZ0JBQWdCO0FBRXZFLFlBQVEsYUFBYSxPQUFPLEdBQUM7QUFBQSxNQUMzQixLQUFLO0FBQVEsZUFBTyxJQUFJLFdBQVcsRUFBRSxHQUFHLFNBQVMsS0FBSSxDQUFFO0FBQUEsTUFDdkQsS0FBSztBQUFRLGVBQU8sSUFBSSxXQUFXLEVBQUUsR0FBRyxTQUFTLEtBQUksQ0FBRTtBQUFBLE1BQ3ZELEtBQUs7QUFBVSxlQUFPLElBQUksYUFBYSxFQUFFLEdBQUcsU0FBUyxLQUFJLENBQUU7QUFBQSxNQUMzRCxTQUFTO0FBQ1AsY0FBTSxJQUFJLFVBQVUsZ0RBQWdEO0FBQUEsTUFDMUU7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQVFBLFdBQVMsYUFBYyxTQUFTO0FBQzlCLFFBQUksWUFBWSxXQUFXLFFBQVEsV0FBVyxRQUFXO0FBQ3ZELGFBQU8sUUFBUTtBQUFBLElBQ25CLFdBQWEsWUFBWSxXQUFXLE9BQU8sUUFBUSxXQUFXLFdBQVc7QUFDckUsYUFBTyxRQUFRLFNBQVMsV0FBVztBQUFBLElBQ3ZDLFdBQWEsVUFBVSxXQUFXLE9BQU8sVUFBVSxRQUFRLElBQUksR0FBRztBQUM5RCxhQUFPO0FBQUEsSUFDWCxPQUFTO0FBQ0wsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNBO0FBVUEsUUFBTSxVQUFVO0FBQUEsSUFDZCxRQUFRdUMsV0FBVTtBQUFBLElBQ2xCLFNBQVNBLFdBQVU7QUFBQSxFQUNyQjtBQUtBLFFBQU0sU0FBUztBQUFBLElBQ2IsR0FBR0E7QUFBQSxJQUNILEdBQUc7QUFBQSxFQUNMO0FBRUEsTUFBSSxpQkFBaUI7Ozs7Ozs7O0FDdElyQixNQUFJLElBQUksT0FBTyxZQUFZLFdBQVcsVUFBVTtBQUNoRCxNQUFJLGVBQWUsS0FBSyxPQUFPLEVBQUUsVUFBVSxhQUN2QyxFQUFFLFFBQ0YsU0FBU0UsY0FBYSxRQUFRLFVBQVUsTUFBTTtBQUM5QyxXQUFPLFNBQVMsVUFBVSxNQUFNLEtBQUssUUFBUSxVQUFVLElBQUk7QUFBQSxFQUMvRDtBQUVBLE1BQUk7QUFDSixNQUFJLEtBQUssT0FBTyxFQUFFLFlBQVksWUFBWTtBQUN4QyxxQkFBaUIsRUFBRTtBQUFBLEVBQ3JCLFdBQVcsT0FBTyx1QkFBdUI7QUFDdkMscUJBQWlCLFNBQVNDLGdCQUFlLFFBQVE7QUFDL0MsYUFBTyxPQUFPLG9CQUFvQixNQUFNLEVBQ3JDLE9BQU8sT0FBTyxzQkFBc0IsTUFBTSxDQUFDO0FBQUEsSUFDbEQ7QUFBQSxFQUNBLE9BQU87QUFDTCxxQkFBaUIsU0FBU0EsZ0JBQWUsUUFBUTtBQUMvQyxhQUFPLE9BQU8sb0JBQW9CLE1BQU07QUFBQSxJQUM1QztBQUFBLEVBQ0E7QUFFQSxXQUFTLG1CQUFtQixTQUFTO0FBQ25DLFFBQUksV0FBVyxRQUFRLEtBQU0sU0FBUSxLQUFLLE9BQU87QUFBQSxFQUNuRDtBQUVBLE1BQUksY0FBYyxPQUFPLFNBQVMsU0FBU0MsYUFBWSxPQUFPO0FBQzVELFdBQU8sVUFBVTtBQUFBLEVBQ25CO0FBRUEsV0FBUyxlQUFlO0FBQ3RCLGlCQUFhLEtBQUssS0FBSyxJQUFJO0FBQUEsRUFDN0I7QUFDQUMsU0FBQSxVQUFpQjtBQUNqQkEsU0FBQSxRQUFBLE9BQXNCO0FBR3RCLGVBQWEsZUFBZTtBQUU1QixlQUFhLFVBQVUsVUFBVTtBQUNqQyxlQUFhLFVBQVUsZUFBZTtBQUN0QyxlQUFhLFVBQVUsZ0JBQWdCO0FBSXZDLE1BQUksc0JBQXNCO0FBRTFCLFdBQVMsY0FBYyxVQUFVO0FBQy9CLFFBQUksT0FBTyxhQUFhLFlBQVk7QUFDbEMsWUFBTSxJQUFJLFVBQVUscUVBQXFFLE9BQU8sUUFBUTtBQUFBLElBQzVHO0FBQUEsRUFDQTtBQUVBLFNBQU8sZUFBZSxjQUFjLHVCQUF1QjtBQUFBLElBQ3pELFlBQVk7QUFBQSxJQUNaLEtBQUssV0FBVztBQUNkLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFDRSxLQUFLLFNBQVMsS0FBSztBQUNqQixVQUFJLE9BQU8sUUFBUSxZQUFZLE1BQU0sS0FBSyxZQUFZLEdBQUcsR0FBRztBQUMxRCxjQUFNLElBQUksV0FBVyxvR0FBb0csTUFBTSxHQUFHO0FBQUEsTUFDeEk7QUFDSSw0QkFBc0I7QUFBQSxJQUMxQjtBQUFBLEVBQ0EsQ0FBQztBQUVELGVBQWEsT0FBTyxXQUFXO0FBRTdCLFFBQUksS0FBSyxZQUFZLFVBQ2pCLEtBQUssWUFBWSxPQUFPLGVBQWUsSUFBSSxFQUFFLFNBQVM7QUFDeEQsV0FBSyxVQUFVLHVCQUFPLE9BQU8sSUFBSTtBQUNqQyxXQUFLLGVBQWU7QUFBQSxJQUN4QjtBQUVFLFNBQUssZ0JBQWdCLEtBQUssaUJBQWlCO0FBQUEsRUFDN0M7QUFJQSxlQUFhLFVBQVUsa0JBQWtCLFNBQVMsZ0JBQWdCaEUsSUFBRztBQUNuRSxRQUFJLE9BQU9BLE9BQU0sWUFBWUEsS0FBSSxLQUFLLFlBQVlBLEVBQUMsR0FBRztBQUNwRCxZQUFNLElBQUksV0FBVyxrRkFBa0ZBLEtBQUksR0FBRztBQUFBLElBQ2xIO0FBQ0UsU0FBSyxnQkFBZ0JBO0FBQ3JCLFdBQU87QUFBQSxFQUNUO0FBRUEsV0FBUyxpQkFBaUIsTUFBTTtBQUM5QixRQUFJLEtBQUssa0JBQWtCO0FBQ3pCLGFBQU8sYUFBYTtBQUN0QixXQUFPLEtBQUs7QUFBQSxFQUNkO0FBRUEsZUFBYSxVQUFVLGtCQUFrQixTQUFTLGtCQUFrQjtBQUNsRSxXQUFPLGlCQUFpQixJQUFJO0FBQUEsRUFDOUI7QUFFQSxlQUFhLFVBQVUsT0FBTyxTQUFTLEtBQUssTUFBTTtBQUNoRCxRQUFJLE9BQU8sQ0FBQTtBQUNYLGFBQVNJLEtBQUksR0FBR0EsS0FBSSxVQUFVLFFBQVFBLEtBQUssTUFBSyxLQUFLLFVBQVVBLEVBQUMsQ0FBQztBQUNqRSxRQUFJLFVBQVcsU0FBUztBQUV4QixRQUFJNkQsVUFBUyxLQUFLO0FBQ2xCLFFBQUlBLFlBQVc7QUFDYixnQkFBVyxXQUFXQSxRQUFPLFVBQVU7QUFBQSxhQUNoQyxDQUFDO0FBQ1IsYUFBTztBQUdULFFBQUksU0FBUztBQUNYLFVBQUk7QUFDSixVQUFJLEtBQUssU0FBUztBQUNoQixhQUFLLEtBQUssQ0FBQztBQUNiLFVBQUksY0FBYyxPQUFPO0FBR3ZCLGNBQU07QUFBQSxNQUNaO0FBRUksVUFBSSxNQUFNLElBQUksTUFBTSxzQkFBc0IsS0FBSyxPQUFPLEdBQUcsVUFBVSxNQUFNLEdBQUc7QUFDNUUsVUFBSSxVQUFVO0FBQ2QsWUFBTTtBQUFBLElBQ1Y7QUFFRSxRQUFJLFVBQVVBLFFBQU8sSUFBSTtBQUV6QixRQUFJLFlBQVk7QUFDZCxhQUFPO0FBRVQsUUFBSSxPQUFPLFlBQVksWUFBWTtBQUNqQyxtQkFBYSxTQUFTLE1BQU0sSUFBSTtBQUFBLElBQ3BDLE9BQVM7QUFDTCxVQUFJLE1BQU0sUUFBUTtBQUNsQixVQUFJLFlBQVksV0FBVyxTQUFTLEdBQUc7QUFDdkMsZUFBUzdELEtBQUksR0FBR0EsS0FBSSxLQUFLLEVBQUVBO0FBQ3pCLHFCQUFhLFVBQVVBLEVBQUMsR0FBRyxNQUFNLElBQUk7QUFBQSxJQUMzQztBQUVFLFdBQU87QUFBQSxFQUNUO0FBRUEsV0FBUyxhQUFhLFFBQVEsTUFBTSxVQUFVLFNBQVM7QUFDckQsUUFBSWU7QUFDSixRQUFJOEM7QUFDSixRQUFJO0FBRUosa0JBQWMsUUFBUTtBQUV0QixJQUFBQSxVQUFTLE9BQU87QUFDaEIsUUFBSUEsWUFBVyxRQUFXO0FBQ3hCLE1BQUFBLFVBQVMsT0FBTyxVQUFVLHVCQUFPLE9BQU8sSUFBSTtBQUM1QyxhQUFPLGVBQWU7QUFBQSxJQUMxQixPQUFTO0FBR0wsVUFBSUEsUUFBTyxnQkFBZ0IsUUFBVztBQUNwQyxlQUFPO0FBQUEsVUFBSztBQUFBLFVBQWU7QUFBQSxVQUNmLFNBQVMsV0FBVyxTQUFTLFdBQVc7QUFBQSxRQUFRO0FBSTVELFFBQUFBLFVBQVMsT0FBTztBQUFBLE1BQ3RCO0FBQ0ksaUJBQVdBLFFBQU8sSUFBSTtBQUFBLElBQzFCO0FBRUUsUUFBSSxhQUFhLFFBQVc7QUFFMUIsaUJBQVdBLFFBQU8sSUFBSSxJQUFJO0FBQzFCLFFBQUUsT0FBTztBQUFBLElBQ2IsT0FBUztBQUNMLFVBQUksT0FBTyxhQUFhLFlBQVk7QUFFbEMsbUJBQVdBLFFBQU8sSUFBSSxJQUNwQixVQUFVLENBQUMsVUFBVSxRQUFRLElBQUksQ0FBQyxVQUFVLFFBQVE7QUFBQSxNQUU1RCxXQUFlLFNBQVM7QUFDbEIsaUJBQVMsUUFBUSxRQUFRO0FBQUEsTUFDL0IsT0FBVztBQUNMLGlCQUFTLEtBQUssUUFBUTtBQUFBLE1BQzVCO0FBR0ksTUFBQTlDLEtBQUksaUJBQWlCLE1BQU07QUFDM0IsVUFBSUEsS0FBSSxLQUFLLFNBQVMsU0FBU0EsTUFBSyxDQUFDLFNBQVMsUUFBUTtBQUNwRCxpQkFBUyxTQUFTO0FBR2xCLFlBQUlILEtBQUksSUFBSSxNQUFNLGlEQUNFLFNBQVMsU0FBUyxNQUFNLE9BQU8sSUFBSSxJQUFJLG1FQUV2QjtBQUNwQyxRQUFBQSxHQUFFLE9BQU87QUFDVCxRQUFBQSxHQUFFLFVBQVU7QUFDWixRQUFBQSxHQUFFLE9BQU87QUFDVCxRQUFBQSxHQUFFLFFBQVEsU0FBUztBQUNuQiwyQkFBbUJBLEVBQUM7QUFBQSxNQUMxQjtBQUFBLElBQ0E7QUFFRSxXQUFPO0FBQUEsRUFDVDtBQUVBLGVBQWEsVUFBVSxjQUFjLFNBQVMsWUFBWSxNQUFNLFVBQVU7QUFDeEUsV0FBTyxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUs7QUFBQSxFQUNqRDtBQUVBLGVBQWEsVUFBVSxLQUFLLGFBQWEsVUFBVTtBQUVuRCxlQUFhLFVBQVUsa0JBQ25CLFNBQVMsZ0JBQWdCLE1BQU0sVUFBVTtBQUN2QyxXQUFPLGFBQWEsTUFBTSxNQUFNLFVBQVUsSUFBSTtBQUFBLEVBQ3BEO0FBRUEsV0FBUyxjQUFjO0FBQ3JCLFFBQUksQ0FBQyxLQUFLLE9BQU87QUFDZixXQUFLLE9BQU8sZUFBZSxLQUFLLE1BQU0sS0FBSyxNQUFNO0FBQ2pELFdBQUssUUFBUTtBQUNiLFVBQUksVUFBVSxXQUFXO0FBQ3ZCLGVBQU8sS0FBSyxTQUFTLEtBQUssS0FBSyxNQUFNO0FBQ3ZDLGFBQU8sS0FBSyxTQUFTLE1BQU0sS0FBSyxRQUFRLFNBQVM7QUFBQSxJQUNyRDtBQUFBLEVBQ0E7QUFFQSxXQUFTLFVBQVUsUUFBUSxNQUFNLFVBQVU7QUFDekMsUUFBSSxRQUFRLEVBQUUsT0FBTyxPQUFPLFFBQVEsUUFBVyxRQUFnQixNQUFZLFNBQWtCO0FBQzdGLFFBQUksVUFBVSxZQUFZLEtBQUssS0FBSztBQUNwQyxZQUFRLFdBQVc7QUFDbkIsVUFBTSxTQUFTO0FBQ2YsV0FBTztBQUFBLEVBQ1Q7QUFFQSxlQUFhLFVBQVUsT0FBTyxTQUFTa0QsTUFBSyxNQUFNLFVBQVU7QUFDMUQsa0JBQWMsUUFBUTtBQUN0QixTQUFLLEdBQUcsTUFBTSxVQUFVLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDN0MsV0FBTztBQUFBLEVBQ1Q7QUFFQSxlQUFhLFVBQVUsc0JBQ25CLFNBQVMsb0JBQW9CLE1BQU0sVUFBVTtBQUMzQyxrQkFBYyxRQUFRO0FBQ3RCLFNBQUssZ0JBQWdCLE1BQU0sVUFBVSxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzFELFdBQU87QUFBQSxFQUNiO0FBR0EsZUFBYSxVQUFVLGlCQUNuQixTQUFTLGVBQWUsTUFBTSxVQUFVO0FBQ3RDLFFBQUksTUFBTUQsU0FBUSxVQUFVN0QsSUFBRztBQUUvQixrQkFBYyxRQUFRO0FBRXRCLElBQUE2RCxVQUFTLEtBQUs7QUFDZCxRQUFJQSxZQUFXO0FBQ2IsYUFBTztBQUVULFdBQU9BLFFBQU8sSUFBSTtBQUNsQixRQUFJLFNBQVM7QUFDWCxhQUFPO0FBRVQsUUFBSSxTQUFTLFlBQVksS0FBSyxhQUFhLFVBQVU7QUFDbkQsVUFBSSxFQUFFLEtBQUssaUJBQWlCO0FBQzFCLGFBQUssVUFBVSx1QkFBTyxPQUFPLElBQUk7QUFBQSxXQUM5QjtBQUNILGVBQU9BLFFBQU8sSUFBSTtBQUNsQixZQUFJQSxRQUFPO0FBQ1QsZUFBSyxLQUFLLGtCQUFrQixNQUFNLEtBQUssWUFBWSxRQUFRO0FBQUEsTUFDdkU7QUFBQSxJQUNBLFdBQWlCLE9BQU8sU0FBUyxZQUFZO0FBQ3JDLGlCQUFXO0FBRVgsV0FBSzdELEtBQUksS0FBSyxTQUFTLEdBQUdBLE1BQUssR0FBR0EsTUFBSztBQUNyQyxZQUFJLEtBQUtBLEVBQUMsTUFBTSxZQUFZLEtBQUtBLEVBQUMsRUFBRSxhQUFhLFVBQVU7QUFDekQsNkJBQW1CLEtBQUtBLEVBQUMsRUFBRTtBQUMzQixxQkFBV0E7QUFDWDtBQUFBLFFBQ1o7QUFBQSxNQUNBO0FBRVEsVUFBSSxXQUFXO0FBQ2IsZUFBTztBQUVULFVBQUksYUFBYTtBQUNmLGFBQUssTUFBSztBQUFBLFdBQ1A7QUFDSCxrQkFBVSxNQUFNLFFBQVE7QUFBQSxNQUNsQztBQUVRLFVBQUksS0FBSyxXQUFXO0FBQ2xCLFFBQUE2RCxRQUFPLElBQUksSUFBSSxLQUFLLENBQUM7QUFFdkIsVUFBSUEsUUFBTyxtQkFBbUI7QUFDNUIsYUFBSyxLQUFLLGtCQUFrQixNQUFNLG9CQUFvQixRQUFRO0FBQUEsSUFDeEU7QUFFTSxXQUFPO0FBQUEsRUFDYjtBQUVBLGVBQWEsVUFBVSxNQUFNLGFBQWEsVUFBVTtBQUVwRCxlQUFhLFVBQVUscUJBQ25CLFNBQVMsbUJBQW1CLE1BQU07QUFDaEMsUUFBSSxXQUFXQSxTQUFRN0Q7QUFFdkIsSUFBQTZELFVBQVMsS0FBSztBQUNkLFFBQUlBLFlBQVc7QUFDYixhQUFPO0FBR1QsUUFBSUEsUUFBTyxtQkFBbUIsUUFBVztBQUN2QyxVQUFJLFVBQVUsV0FBVyxHQUFHO0FBQzFCLGFBQUssVUFBVSx1QkFBTyxPQUFPLElBQUk7QUFDakMsYUFBSyxlQUFlO0FBQUEsTUFDOUIsV0FBbUJBLFFBQU8sSUFBSSxNQUFNLFFBQVc7QUFDckMsWUFBSSxFQUFFLEtBQUssaUJBQWlCO0FBQzFCLGVBQUssVUFBVSx1QkFBTyxPQUFPLElBQUk7QUFBQTtBQUVqQyxpQkFBT0EsUUFBTyxJQUFJO0FBQUEsTUFDOUI7QUFDUSxhQUFPO0FBQUEsSUFDZjtBQUdNLFFBQUksVUFBVSxXQUFXLEdBQUc7QUFDMUIsVUFBSSxPQUFPLE9BQU8sS0FBS0EsT0FBTTtBQUM3QixVQUFJO0FBQ0osV0FBSzdELEtBQUksR0FBR0EsS0FBSSxLQUFLLFFBQVEsRUFBRUEsSUFBRztBQUNoQyxjQUFNLEtBQUtBLEVBQUM7QUFDWixZQUFJLFFBQVEsaUJBQWtCO0FBQzlCLGFBQUssbUJBQW1CLEdBQUc7QUFBQSxNQUNyQztBQUNRLFdBQUssbUJBQW1CLGdCQUFnQjtBQUN4QyxXQUFLLFVBQVUsdUJBQU8sT0FBTyxJQUFJO0FBQ2pDLFdBQUssZUFBZTtBQUNwQixhQUFPO0FBQUEsSUFDZjtBQUVNLGdCQUFZNkQsUUFBTyxJQUFJO0FBRXZCLFFBQUksT0FBTyxjQUFjLFlBQVk7QUFDbkMsV0FBSyxlQUFlLE1BQU0sU0FBUztBQUFBLElBQzNDLFdBQWlCLGNBQWMsUUFBVztBQUVsQyxXQUFLN0QsS0FBSSxVQUFVLFNBQVMsR0FBR0EsTUFBSyxHQUFHQSxNQUFLO0FBQzFDLGFBQUssZUFBZSxNQUFNLFVBQVVBLEVBQUMsQ0FBQztBQUFBLE1BQ2hEO0FBQUEsSUFDQTtBQUVNLFdBQU87QUFBQSxFQUNiO0FBRUEsV0FBUyxXQUFXLFFBQVEsTUFBTSxRQUFRO0FBQ3hDLFFBQUk2RCxVQUFTLE9BQU87QUFFcEIsUUFBSUEsWUFBVztBQUNiLGFBQU8sQ0FBQTtBQUVULFFBQUksYUFBYUEsUUFBTyxJQUFJO0FBQzVCLFFBQUksZUFBZTtBQUNqQixhQUFPLENBQUE7QUFFVCxRQUFJLE9BQU8sZUFBZTtBQUN4QixhQUFPLFNBQVMsQ0FBQyxXQUFXLFlBQVksVUFBVSxJQUFJLENBQUMsVUFBVTtBQUVuRSxXQUFPLFNBQ0wsZ0JBQWdCLFVBQVUsSUFBSSxXQUFXLFlBQVksV0FBVyxNQUFNO0FBQUEsRUFDMUU7QUFFQSxlQUFhLFVBQVUsWUFBWSxTQUFTLFVBQVUsTUFBTTtBQUMxRCxXQUFPLFdBQVcsTUFBTSxNQUFNLElBQUk7QUFBQSxFQUNwQztBQUVBLGVBQWEsVUFBVSxlQUFlLFNBQVMsYUFBYSxNQUFNO0FBQ2hFLFdBQU8sV0FBVyxNQUFNLE1BQU0sS0FBSztBQUFBLEVBQ3JDO0FBRUEsZUFBYSxnQkFBZ0IsU0FBUyxTQUFTLE1BQU07QUFDbkQsUUFBSSxPQUFPLFFBQVEsa0JBQWtCLFlBQVk7QUFDL0MsYUFBTyxRQUFRLGNBQWMsSUFBSTtBQUFBLElBQ3JDLE9BQVM7QUFDTCxhQUFPLGNBQWMsS0FBSyxTQUFTLElBQUk7QUFBQSxJQUMzQztBQUFBLEVBQ0E7QUFFQSxlQUFhLFVBQVUsZ0JBQWdCO0FBQ3ZDLFdBQVMsY0FBYyxNQUFNO0FBQzNCLFFBQUlBLFVBQVMsS0FBSztBQUVsQixRQUFJQSxZQUFXLFFBQVc7QUFDeEIsVUFBSSxhQUFhQSxRQUFPLElBQUk7QUFFNUIsVUFBSSxPQUFPLGVBQWUsWUFBWTtBQUNwQyxlQUFPO0FBQUEsTUFDYixXQUFlLGVBQWUsUUFBVztBQUNuQyxlQUFPLFdBQVc7QUFBQSxNQUN4QjtBQUFBLElBQ0E7QUFFRSxXQUFPO0FBQUEsRUFDVDtBQUVBLGVBQWEsVUFBVSxhQUFhLFNBQVMsYUFBYTtBQUN4RCxXQUFPLEtBQUssZUFBZSxJQUFJLGVBQWUsS0FBSyxPQUFPLElBQUksQ0FBQTtBQUFBLEVBQ2hFO0FBRUEsV0FBUyxXQUFXLEtBQUtqRSxJQUFHO0FBQzFCLFFBQUksT0FBTyxJQUFJLE1BQU1BLEVBQUM7QUFDdEIsYUFBU0ksS0FBSSxHQUFHQSxLQUFJSixJQUFHLEVBQUVJO0FBQ3ZCLFdBQUtBLEVBQUMsSUFBSSxJQUFJQSxFQUFDO0FBQ2pCLFdBQU87QUFBQSxFQUNUO0FBRUEsV0FBUyxVQUFVLE1BQU0sT0FBTztBQUM5QixXQUFPLFFBQVEsSUFBSSxLQUFLLFFBQVE7QUFDOUIsV0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLENBQUM7QUFDOUIsU0FBSyxJQUFHO0FBQUEsRUFDVjtBQUVBLFdBQVMsZ0JBQWdCLEtBQUs7QUFDNUIsUUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFDOUIsYUFBU0EsS0FBSSxHQUFHQSxLQUFJLElBQUksUUFBUSxFQUFFQSxJQUFHO0FBQ25DLFVBQUlBLEVBQUMsSUFBSSxJQUFJQSxFQUFDLEVBQUUsWUFBWSxJQUFJQSxFQUFDO0FBQUEsSUFDckM7QUFDRSxXQUFPO0FBQUEsRUFDVDtBQUVBLFdBQVMsS0FBSyxTQUFTLE1BQU07QUFDM0IsV0FBTyxJQUFJLFFBQVEsU0FBVSxTQUFTLFFBQVE7QUFDNUMsZUFBUyxjQUFjLEtBQUs7QUFDMUIsZ0JBQVEsZUFBZSxNQUFNLFFBQVE7QUFDckMsZUFBTyxHQUFHO0FBQUEsTUFDaEI7QUFFSSxlQUFTLFdBQVc7QUFDbEIsWUFBSSxPQUFPLFFBQVEsbUJBQW1CLFlBQVk7QUFDaEQsa0JBQVEsZUFBZSxTQUFTLGFBQWE7QUFBQSxRQUNyRDtBQUNNLGdCQUFRLENBQUEsRUFBRyxNQUFNLEtBQUssU0FBUyxDQUFDO0FBQUEsTUFDdEM7QUFFSSxxQ0FBK0IsU0FBUyxNQUFNLFVBQVUsRUFBRSxNQUFNLE1BQU07QUFDdEUsVUFBSSxTQUFTLFNBQVM7QUFDcEIsc0NBQThCLFNBQVMsZUFBZSxFQUFFLE1BQU0sS0FBSSxDQUFFO0FBQUEsTUFDMUU7QUFBQSxJQUNBLENBQUc7QUFBQSxFQUNIO0FBRUEsV0FBUyw4QkFBOEIsU0FBUyxTQUFTLE9BQU87QUFDOUQsUUFBSSxPQUFPLFFBQVEsT0FBTyxZQUFZO0FBQ3BDLHFDQUErQixTQUFTLFNBQVMsU0FBUyxLQUFLO0FBQUEsSUFDbkU7QUFBQSxFQUNBO0FBRUEsV0FBUywrQkFBK0IsU0FBUyxNQUFNLFVBQVUsT0FBTztBQUN0RSxRQUFJLE9BQU8sUUFBUSxPQUFPLFlBQVk7QUFDcEMsVUFBSSxNQUFNLE1BQU07QUFDZCxnQkFBUSxLQUFLLE1BQU0sUUFBUTtBQUFBLE1BQ2pDLE9BQVc7QUFDTCxnQkFBUSxHQUFHLE1BQU0sUUFBUTtBQUFBLE1BQy9CO0FBQUEsSUFDQSxXQUFhLE9BQU8sUUFBUSxxQkFBcUIsWUFBWTtBQUd6RCxjQUFRLGlCQUFpQixNQUFNLFNBQVMsYUFBYSxLQUFLO0FBR3hELFlBQUksTUFBTSxNQUFNO0FBQ2Qsa0JBQVEsb0JBQW9CLE1BQU0sWUFBWTtBQUFBLFFBQ3REO0FBQ00saUJBQVMsR0FBRztBQUFBLE1BQ2xCLENBQUs7QUFBQSxJQUNMLE9BQVM7QUFDTCxZQUFNLElBQUksVUFBVSx3RUFBd0UsT0FBTyxPQUFPO0FBQUEsSUFDOUc7QUFBQSxFQUNBOzs7Ozs7OztBQzllQSxRQUFNLFVBQVUsdUJBQU8sU0FBUztBQUVoQyx1QkFBaUIsU0FBVWtELFNBQVE7QUFDakMsSUFBQUEsVUFBU0EsUUFBTyxPQUFPLE9BQU87QUFFOUIsUUFBSUEsUUFBTyxXQUFXLEVBQUc7QUFDekIsUUFBSUEsUUFBTyxXQUFXLEVBQUcsUUFBT0EsUUFBTyxDQUFDO0FBRXhDLFdBQU8sSUFBSSxjQUFjQSxPQUFNO0FBQUEsRUFDakM7QUFBQSxFQUVBLE1BQU0sc0JBQXNCLE1BQU07QUFBQSxJQUNoQyxZQUFhQSxTQUFRO0FBQ25CLFlBQU0sU0FBUyxJQUFJLElBQUlBLFFBQU8sSUFBSSxVQUFVLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFDN0QsWUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEVBQUUsS0FBSyxJQUFJO0FBRTVDLFlBQU0sT0FBTztBQUViLFlBQU0sTUFBTSxRQUFRLGVBQWU7QUFDbkMsWUFBTSxNQUFNLFNBQVNBLE9BQU07QUFFM0IsYUFBTyxNQUFNLFNBQVMsTUFBTUEsUUFBTyxJQUFJLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQztBQUM3RCxhQUFPLE1BQU0sYUFBYSxNQUFNQSxRQUFPLFNBQVMsS0FBS0EsUUFBTyxNQUFNLFNBQVMsQ0FBQztBQUM1RSxhQUFPLE1BQU0sWUFBWSxNQUFNQSxRQUFPLFNBQVMsS0FBS0EsUUFBTyxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQzlFO0FBQUEsSUFFRSxDQUFDLE9BQU8sUUFBUSxJQUFLO0FBQ25CLGFBQU8sS0FBSyxPQUFPLEVBQUUsT0FBTyxRQUFRLEVBQUM7QUFBQSxJQUN6QztBQUFBLEVBQ0E7QUFFQSxXQUFTLE1BQU8sS0FBSyxNQUFNYSxRQUFPO0FBQ2hDLFdBQU8sZUFBZSxLQUFLLE1BQU0sRUFBRSxPQUFBQSxPQUFLLENBQUU7QUFBQSxFQUM1QztBQUVBLFdBQVMsT0FBUSxLQUFLLE1BQU0sS0FBSztBQUMvQixXQUFPLGVBQWUsS0FBSyxNQUFNLEVBQUUsSUFBRyxDQUFFO0FBQUEsRUFDMUM7QUFFQSxXQUFTLFFBQVMsS0FBSztBQUNyQixXQUFPLE9BQU87QUFBQSxFQUNoQjtBQUVBLFdBQVMsV0FBWSxLQUFLO0FBQ3hCLFdBQU8sSUFBSTtBQUFBLEVBQ2I7QUFFQSxXQUFTLFNBQVUsS0FBSztBQUN0QixXQUFPLElBQUk7QUFBQSxFQUNiO0FBRUEsV0FBUyxVQUFXLEtBQUs7QUFDdkIsV0FBTyxJQUFJLGNBQWM7QUFBQSxFQUMzQjtBQUVBLFdBQVMsU0FBVSxLQUFLO0FBQ3RCLFdBQU8sSUFBSSxhQUFhO0FBQUEsRUFDMUI7Ozs7Ozs7OztBQ3pEQSxRQUFNLGNBQWNwQixtQkFBQTtBQUNwQixRQUFNLG1DQUFtQixJQUFBO0FBRXpCLFNBQUEsYUFBcUIsU0FBVSxTQUFTLEtBQUs7QUFDM0MsUUFBSSxPQUFPLFlBQVksWUFBWSxZQUFZLE1BQU07QUFDbkQsYUFBTztBQUFBLElBQUE7QUFHVCxRQUFJLFFBQVEsUUFBVztBQUNyQixhQUFPO0FBQUEsSUFBQTtBQUdULFdBQU8sQ0FBQTtBQUFBLEVBQ1Q7QUFFQSxTQUFBLGVBQXVCLE9BQU8sT0FBTyxDQUFBLENBQUU7QUFDdkMsU0FBQSxPQUFlLFdBQVk7QUFBQSxFQUFDO0FBQzVCLFNBQUEsa0JBQTBCLFFBQVEsUUFBQTtBQUVsQyxTQUFBLFlBQW9CLFNBQVUsU0FBUztBQUNyQyxRQUFJLENBQUMsYUFBYSxJQUFJLE9BQU8sR0FBRztBQUM5QixtQkFBYSxJQUFJLE9BQU87QUFHeEIsWUFBTXRDLEtBQUksV0FBVztBQUVyQixVQUFJLE9BQU9BLE9BQU0sZUFBZSxPQUFPQSxHQUFFLFNBQVMsWUFBWTtBQUM1RCxRQUFBQSxHQUFFLEtBQUssSUFBSSxZQUFZLFNBQVMsRUFBRSxNQUFNLGVBQUEsQ0FBZ0IsQ0FBQztBQUFBLE1BQUE7QUFBQSxJQUMzRDtBQUFBLEVBRUo7Ozs7Ozs7O0FDOUJBLFFBQU0sY0FBY3NDLG1CQUFBO0FBQUEsRUFFcEIsTUFBTSxtQkFBbUIsWUFBWTtBQUFBLElBQ25DLFlBQWEsT0FBTztBQUNsQixZQUFNLDhCQUE4QjtBQUFBLFFBQ2xDLE1BQU07QUFBQSxRQUNOO0FBQUEsT0FDRDtBQUFBLElBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtFLElBQUksT0FBUTtBQUNWLGFBQU87QUFBQSxJQUNYO0FBQUEsRUFDQTtBQUVBLFNBQUEsYUFBcUI7Ozs7Ozs7QUNsQnJCLFFBQU0sY0FBY0EsbUJBQUE7QUFDcEIsUUFBTSxnQkFBZ0JFLDBCQUFBO0FBQ3RCLFFBQU0sRUFBRSxZQUFZLGNBQWMsS0FBSSxJQUFLUyxjQUFBO0FBQzNDLFFBQU0sRUFBRSxXQUFVLElBQUtFLGNBQUE7QUFFdkIsUUFBTSxXQUFXLHVCQUFPLFNBQVM7QUFDakMsUUFBTSxhQUFhLHVCQUFPLFdBQVc7QUFDckMsUUFBTSxjQUFjLHVCQUFPLFlBQVk7QUFDdkMsUUFBTSxVQUFVLHVCQUFPLFFBQVE7QUFDL0IsUUFBTSxnQkFBZ0IsdUJBQU8sY0FBYztBQUMzQyxRQUFNLGtCQUFrQix1QkFBTyxnQkFBZ0I7QUFDL0MsUUFBTSxlQUFlLHVCQUFPLGFBQWE7QUFDekMsUUFBTSxpQkFBaUIsdUJBQU8sZUFBZTtBQUM3QyxRQUFNLFFBQVEsdUJBQU8sTUFBTTtBQUMzQixRQUFNLFVBQVUsdUJBQU8sUUFBUTtBQUMvQixRQUFNLFNBQVMsdUJBQU8sT0FBTztBQUM3QixRQUFNLFNBQVMsdUJBQU8sT0FBTztBQUM3QixRQUFNLFNBQVMsdUJBQU8sT0FBTztBQUFBLEVBSTdCLE1BQU0sZUFBZTtBQUFBLElBQ25CLFlBQWEsSUFBSSxTQUFTO0FBQ3hCLFVBQUksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNO0FBQ3pDLGNBQU0sT0FBTyxPQUFPLE9BQU8sU0FBUyxPQUFPO0FBQzNDLGNBQU0sSUFBSSxVQUFVLG1FQUFtRSxJQUFJLEVBQUU7QUFBQSxNQUNuRztBQUVJLFVBQUksT0FBTyxZQUFZLFlBQVksWUFBWSxNQUFNO0FBQ25ELGNBQU0sSUFBSSxVQUFVLCtDQUErQztBQUFBLE1BQ3pFO0FBRUksV0FBSyxRQUFRLElBQUk7QUFDakIsV0FBSyxhQUFhLElBQUk7QUFDdEIsV0FBSyxlQUFlLElBQUk7QUFDeEIsV0FBSyxZQUFZLElBQUksUUFBUSxZQUFZO0FBQ3pDLFdBQUssY0FBYyxJQUFJLFFBQVEsY0FBYztBQUM3QyxXQUFLLE1BQU0sSUFBSSxPQUFPLFVBQVUsUUFBUSxLQUFLLEtBQUssUUFBUSxTQUFTLElBQUksUUFBUSxRQUFRO0FBQ3ZGLFdBQUssTUFBTSxJQUFJO0FBQ2YsV0FBSyxPQUFPLElBQUksUUFBUSxVQUFVLE9BQU8sUUFBUSxTQUFTO0FBSTFELFdBQUssTUFBTSxJQUFJO0FBRWYsV0FBSyxLQUFLO0FBQ1YsV0FBSyxHQUFHLGVBQWUsSUFBSTtBQUFBLElBQy9CO0FBQUEsSUFFRSxJQUFJLFFBQVM7QUFDWCxhQUFPLEtBQUssTUFBTTtBQUFBLElBQ3RCO0FBQUEsSUFFRSxJQUFJLFFBQVM7QUFDWCxhQUFPLEtBQUssTUFBTTtBQUFBLElBQ3RCO0FBQUEsSUFFRSxNQUFNLE9BQVE7QUFDWixnQkFBVSxJQUFJO0FBRWQsVUFBSTtBQUNGLFlBQUksS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEdBQUc7QUFDaEQsZUFBSyxNQUFNLElBQUk7QUFDZixpQkFBTztBQUFBLFFBQ2Y7QUFFTSxZQUFJLE9BQU8sTUFBTSxLQUFLLE1BQUs7QUFFM0IsWUFBSSxTQUFTLFFBQVc7QUFDdEIsZUFBSyxNQUFNLElBQUk7QUFDZixpQkFBTztBQUFBLFFBQ2Y7QUFFTSxZQUFJO0FBQ0YsaUJBQU8sS0FBSyxVQUFVLEVBQUUsSUFBSTtBQUFBLFFBQ3BDLFNBQWUsS0FBSztBQUNaLGdCQUFNLElBQUksb0JBQW9CLEdBQUc7QUFBQSxRQUN6QztBQUVNLGFBQUssTUFBTTtBQUNYLGVBQU87QUFBQSxNQUNiLFVBQUs7QUFDQyxnQkFBUSxJQUFJO0FBQUEsTUFDbEI7QUFBQSxJQUNBO0FBQUEsSUFFRSxNQUFNLFFBQVM7QUFBQSxJQUFBO0FBQUEsSUFFZixNQUFNLE1BQU8sTUFBTSxTQUFTO0FBQzFCLFVBQUksQ0FBQyxPQUFPLFVBQVUsSUFBSSxHQUFHO0FBQzNCLGNBQU0sSUFBSSxVQUFVLDhDQUE4QztBQUFBLE1BQ3hFO0FBRUksZ0JBQVUsV0FBVyxTQUFTLFlBQVk7QUFFMUMsVUFBSSxPQUFPLEVBQUcsUUFBTztBQUNyQixVQUFJLEtBQUssTUFBTSxJQUFJLFNBQVUsUUFBTyxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQztBQUU5RSxnQkFBVSxJQUFJO0FBRWQsVUFBSTtBQUNGLFlBQUksS0FBSyxNQUFNLEtBQUssUUFBUSxHQUFHO0FBQzdCLGVBQUssTUFBTSxJQUFJO0FBQ2YsaUJBQU8sQ0FBQTtBQUFBLFFBQ2Y7QUFFTSxjQUFNLFFBQVEsTUFBTSxLQUFLLE9BQU8sTUFBTSxPQUFPO0FBRTdDLFlBQUksTUFBTSxXQUFXLEdBQUc7QUFDdEIsZUFBSyxNQUFNLElBQUk7QUFDZixpQkFBTztBQUFBLFFBQ2Y7QUFFTSxZQUFJO0FBQ0YsZUFBSyxXQUFXLEVBQUUsS0FBSztBQUFBLFFBQy9CLFNBQWUsS0FBSztBQUNaLGdCQUFNLElBQUksb0JBQW9CLEdBQUc7QUFBQSxRQUN6QztBQUVNLGFBQUssTUFBTSxLQUFLLE1BQU07QUFDdEIsZUFBTztBQUFBLE1BQ2IsVUFBSztBQUNDLGdCQUFRLElBQUk7QUFBQSxNQUNsQjtBQUFBLElBQ0E7QUFBQSxJQUVFLE1BQU0sT0FBUSxNQUFNLFNBQVM7QUFDM0IsWUFBTSxNQUFNLENBQUE7QUFFWixhQUFPLElBQUksU0FBUyxNQUFNO0FBQ3hCLGNBQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxPQUFPO0FBRXJDLFlBQUksU0FBUyxRQUFXO0FBQ3RCLGNBQUksS0FBSyxJQUFJO0FBQUEsUUFDckIsT0FBYTtBQUVMLGVBQUssTUFBTSxJQUFJO0FBQ2Y7QUFBQSxRQUNSO0FBQUEsTUFDQTtBQUVJLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxNQUFNLElBQUssU0FBUztBQUNsQixnQkFBVSxXQUFXLFNBQVMsWUFBWTtBQUMxQyxnQkFBVSxJQUFJO0FBRWQsVUFBSTtBQUNGLFlBQUksS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEdBQUc7QUFDaEQsaUJBQU8sQ0FBQTtBQUFBLFFBQ2Y7QUFFTSxjQUFNLFFBQVEsTUFBTSxLQUFLLEtBQUssT0FBTztBQUVyQyxZQUFJO0FBQ0YsZUFBSyxXQUFXLEVBQUUsS0FBSztBQUFBLFFBQy9CLFNBQWUsS0FBSztBQUNaLGdCQUFNLElBQUksb0JBQW9CLEdBQUc7QUFBQSxRQUN6QztBQUVNLGFBQUssTUFBTSxLQUFLLE1BQU07QUFDdEIsZUFBTztBQUFBLE1BQ2IsU0FBYSxLQUFLO0FBQ1osZ0JBQVEsSUFBSTtBQUNaLGNBQU0sUUFBUSxNQUFNLEdBQUc7QUFBQSxNQUM3QixVQUFLO0FBQ0MsYUFBSyxNQUFNLElBQUk7QUFFZixZQUFJLEtBQUssUUFBUSxHQUFHO0FBQ2xCLGtCQUFRLElBQUk7QUFDWixnQkFBTSxLQUFLLE1BQUs7QUFBQSxRQUN4QjtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsSUFFRSxNQUFNLEtBQU0sU0FBUztBQUVuQixVQUFJLFFBQVEsS0FBSyxNQUFNO0FBRXZCLFlBQU0sTUFBTSxDQUFBO0FBRVosYUFBTyxNQUFNO0FBRVgsY0FBTSxPQUFPLEtBQUssTUFBTSxJQUFJLFdBQVcsS0FBSyxJQUFJLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxJQUFJO0FBRTdFLFlBQUksUUFBUSxHQUFHO0FBQ2IsaUJBQU87QUFBQSxRQUNmO0FBRU0sY0FBTSxRQUFRLE1BQU0sS0FBSyxPQUFPLE1BQU0sT0FBTztBQUU3QyxZQUFJLE1BQU0sV0FBVyxHQUFHO0FBQ3RCLGlCQUFPO0FBQUEsUUFDZjtBQUVNLFlBQUksS0FBSyxNQUFNLEtBQUssS0FBSztBQUN6QixpQkFBUyxNQUFNO0FBQUEsTUFDckI7QUFBQSxJQUNBO0FBQUEsSUFFRSxLQUFNLFFBQVEsU0FBUztBQUNyQixnQkFBVSxXQUFXLFNBQVMsWUFBWTtBQUUxQyxVQUFJLEtBQUssZUFBZSxNQUFNLEtBQU07QUFBQSxlQUd6QixLQUFLLFFBQVEsR0FBRztBQUN6QixjQUFNLElBQUksWUFBWSxtRUFBbUU7QUFBQSxVQUN2RixNQUFNO0FBQUEsU0FDUDtBQUFBLE1BQ1AsT0FBVztBQUNMLGNBQU0sY0FBYyxLQUFLLEdBQUcsWUFBWSxRQUFRLGVBQWUsS0FBSyxZQUFZLENBQUM7QUFDakYsY0FBTSxZQUFZLFlBQVk7QUFFOUIsWUFBSSxRQUFRLGdCQUFnQixXQUFXO0FBQ3JDLG9CQUFVLEVBQUUsR0FBRyxTQUFTLGFBQWEsVUFBUztBQUFBLFFBQ3REO0FBRU0sY0FBTSxTQUFTLEtBQUssR0FBRyxVQUFVLFlBQVksT0FBTyxNQUFNLEdBQUcsV0FBVyxLQUFLO0FBQzdFLGFBQUssTUFBTSxRQUFRLE9BQU87QUFHMUIsYUFBSyxNQUFNLElBQUk7QUFBQSxNQUNyQjtBQUFBLElBQ0E7QUFBQSxJQUVFLE1BQU8sUUFBUSxTQUFTO0FBQ3RCLFlBQU0sSUFBSSxZQUFZLG9DQUFvQztBQUFBLFFBQ3hELE1BQU07QUFBQSxPQUNQO0FBQUEsSUFDTDtBQUFBLElBRUUsTUFBTSxRQUFTO0FBQ2IsVUFBSSxLQUFLLGVBQWUsTUFBTSxNQUFNO0FBRWxDLGVBQU8sS0FBSyxlQUFlLEVBQUUsTUFBTSxJQUFJO0FBQUEsTUFDN0M7QUFHSSxXQUFLLGVBQWUsSUFBSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdkQsYUFBSyxhQUFhLElBQUksTUFBTTtBQUMxQixlQUFLLGFBQWEsSUFBSTtBQUN0Qix1QkFBYSxJQUFJLEVBQUUsS0FBSyxTQUFTLE1BQU07QUFBQSxRQUMvQztBQUFBLE1BQ0EsQ0FBSztBQUdELFVBQUksQ0FBQyxLQUFLLFFBQVEsR0FBRztBQUNuQixhQUFLLGFBQWEsRUFBQztBQUFBLE1BQ3pCO0FBRUksYUFBTyxLQUFLLGVBQWU7QUFBQSxJQUMvQjtBQUFBLElBRUUsTUFBTSxTQUFVO0FBQUEsSUFBQTtBQUFBLElBRWhCLFFBQVMsT0FBTyxhQUFhLElBQUs7QUFDaEMsVUFBSTtBQUNGLFlBQUk7QUFFSixnQkFBUSxPQUFRLE1BQU0sS0FBSyxLQUFJLE9BQVMsUUFBVztBQUNqRCxnQkFBTTtBQUFBLFFBQ2Q7QUFBQSxNQUNBLFNBQWEsS0FBSztBQUNaLGNBQU0sUUFBUSxNQUFNLEdBQUc7QUFBQSxNQUM3QixVQUFLO0FBQ0MsY0FBTSxLQUFLLE1BQUs7QUFBQSxNQUN0QjtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFHQSxNQUFNLHlCQUF5QixlQUFlO0FBQUEsSUFDNUMsWUFBYSxJQUFJLFNBQVM7QUFDeEIsWUFBTSxJQUFJLE9BQU87QUFDakIsV0FBSyxLQUFLLElBQUksUUFBUSxTQUFTO0FBQy9CLFdBQUssT0FBTyxJQUFJLFFBQVEsV0FBVztBQUFBLElBQ3ZDO0FBQUEsSUFFRSxDQUFDLFVBQVUsRUFBRyxPQUFPO0FBQ25CLFlBQU0sTUFBTSxNQUFNLENBQUM7QUFDbkIsWUFBTSxRQUFRLE1BQU0sQ0FBQztBQUVyQixVQUFJLFFBQVEsUUFBVztBQUNyQixjQUFNLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLFlBQVksRUFBRSxPQUFPLEdBQUcsSUFBSTtBQUFBLE1BQ2hFO0FBRUksVUFBSSxVQUFVLFFBQVc7QUFDdkIsY0FBTSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxjQUFjLEVBQUUsT0FBTyxLQUFLLElBQUk7QUFBQSxNQUN0RTtBQUVJLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxDQUFDLFdBQVcsRUFBRyxTQUFTO0FBQ3RCLFlBQU0sY0FBYyxLQUFLLFlBQVk7QUFDckMsWUFBTSxnQkFBZ0IsS0FBSyxjQUFjO0FBRXpDLGlCQUFXLFNBQVMsU0FBUztBQUMzQixjQUFNLE1BQU0sTUFBTSxDQUFDO0FBQ25CLGNBQU0sUUFBUSxNQUFNLENBQUM7QUFFckIsWUFBSSxRQUFRLE9BQVcsT0FBTSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksWUFBWSxPQUFPLEdBQUcsSUFBSTtBQUMxRSxZQUFJLFVBQVUsT0FBVyxPQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxjQUFjLE9BQU8sS0FBSyxJQUFJO0FBQUEsTUFDeEY7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBRUEsTUFBTSw0QkFBNEIsZUFBZTtBQUFBLElBQy9DLENBQUMsVUFBVSxFQUFHLEtBQUs7QUFDakIsYUFBTyxLQUFLLFlBQVksRUFBRSxPQUFPLEdBQUc7QUFBQSxJQUN4QztBQUFBLElBRUUsQ0FBQyxXQUFXLEVBQUcsTUFBTTtBQUNuQixZQUFNLGNBQWMsS0FBSyxZQUFZO0FBRXJDLGVBQVN4RCxLQUFJLEdBQUdBLEtBQUksS0FBSyxRQUFRQSxNQUFLO0FBQ3BDLGNBQU0sTUFBTSxLQUFLQSxFQUFDO0FBQ2xCLFlBQUksUUFBUSxPQUFXLE1BQUtBLEVBQUMsSUFBSSxZQUFZLE9BQU8sR0FBRztBQUFBLE1BQzdEO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUVBLE1BQU0sOEJBQThCLGVBQWU7QUFBQSxJQUNqRCxDQUFDLFVBQVUsRUFBRyxPQUFPO0FBQ25CLGFBQU8sS0FBSyxjQUFjLEVBQUUsT0FBTyxLQUFLO0FBQUEsSUFDNUM7QUFBQSxJQUVFLENBQUMsV0FBVyxFQUFHLFFBQVE7QUFDckIsWUFBTSxnQkFBZ0IsS0FBSyxjQUFjO0FBRXpDLGVBQVNBLEtBQUksR0FBR0EsS0FBSSxPQUFPLFFBQVFBLE1BQUs7QUFDdEMsY0FBTSxRQUFRLE9BQU9BLEVBQUM7QUFDdEIsWUFBSSxVQUFVLE9BQVcsUUFBT0EsRUFBQyxJQUFJLGNBQWMsT0FBTyxLQUFLO0FBQUEsTUFDckU7QUFBQSxJQUNBO0FBQUEsRUFDQTtBQUFBLEVBR0EsTUFBTSw0QkFBNEIsWUFBWTtBQUFBLElBQzVDLFlBQWEsT0FBTztBQUNsQixZQUFNLGtDQUFrQztBQUFBLFFBQ3RDLE1BQU07QUFBQSxRQUNOO0FBQUEsT0FDRDtBQUFBLElBQ0w7QUFBQSxFQUNBO0FBRUEsUUFBTSxZQUFZLFNBQVVnRSxXQUFVO0FBQ3BDLFFBQUlBLFVBQVMsZUFBZSxNQUFNLE1BQU07QUFDdEMsWUFBTSxJQUFJLFlBQVksbURBQW1EO0FBQUEsUUFDdkUsTUFBTTtBQUFBLE9BQ1A7QUFBQSxJQUNMLFdBQWFBLFVBQVMsUUFBUSxHQUFHO0FBQzdCLFlBQU0sSUFBSSxZQUFZLG1FQUFtRTtBQUFBLFFBQ3ZGLE1BQU07QUFBQSxPQUNQO0FBQUEsSUFDTCxXQUFhQSxVQUFTLE9BQU8sTUFBTSxRQUFRQSxVQUFTLE9BQU8sRUFBRSxTQUFTO0FBQ2xFLFlBQU0sSUFBSSxXQUFVO0FBQUEsSUFDeEI7QUFFRSxJQUFBQSxVQUFTLFFBQVEsSUFBSTtBQUFBLEVBQ3ZCO0FBRUEsUUFBTSxVQUFVLFNBQVVBLFdBQVU7QUFDbEMsSUFBQUEsVUFBUyxRQUFRLElBQUk7QUFFckIsUUFBSUEsVUFBUyxhQUFhLE1BQU0sTUFBTTtBQUNwQyxNQUFBQSxVQUFTLGFBQWEsRUFBQztBQUFBLElBQzNCO0FBQUEsRUFDQTtBQUVBLFFBQU0sZUFBZSxlQUFnQkEsV0FBVTtBQUM3QyxVQUFNQSxVQUFTLE9BQU07QUFDckIsSUFBQUEsVUFBUyxHQUFHLGVBQWVBLFNBQVE7QUFBQSxFQUNyQztBQUVBLFFBQU0sVUFBVSxlQUFnQkEsV0FBVSxLQUFLO0FBQzdDLFFBQUk7QUFDRixZQUFNQSxVQUFTLE1BQUs7QUFBQSxJQUN4QixTQUFXLFVBQVU7QUFDakIsWUFBTSxjQUFjLENBQUMsS0FBSyxRQUFRLENBQUM7QUFBQSxJQUN2QztBQUVFLFVBQU07QUFBQSxFQUNSO0FBR0EsbUJBQWlCLGNBQWM7QUFDL0IsbUJBQWlCLGdCQUFnQjtBQUVqQyxtQkFBQSxtQkFBMkI7QUFDM0IsbUJBQUEsc0JBQThCO0FBQzlCLG1CQUFBLHdCQUFnQzs7Ozs7Ozs7QUMxWWhDLFFBQU0sRUFBRSxxQkFBcUIsc0JBQXFCLElBQUtyQix3QkFBQTtBQUV2RCxRQUFNLFlBQVksdUJBQU8sVUFBVTtBQUNuQyxRQUFNLGFBQWEsdUJBQU8sV0FBVztBQUNyQyxRQUFNLGNBQWMsdUJBQU8sWUFBWTtBQUFBLEVBRXZDLE1BQU0sMkJBQTJCLG9CQUFvQjtBQUFBLElBQ25ELFlBQWEsSUFBSSxTQUFTO0FBQ3hCLFlBQU0sSUFBSSxPQUFPO0FBRWpCLFdBQUssU0FBUyxJQUFJLEdBQUcsU0FBUyxFQUFFLEdBQUcsU0FBUyxNQUFNLE1BQU0sUUFBUSxNQUFLLENBQUU7QUFBQSxJQUMzRTtBQUFBLElBRUUsQ0FBQyxVQUFVLEVBQUcsT0FBTztBQUNuQixhQUFPLE1BQU0sQ0FBQztBQUFBLElBQ2xCO0FBQUEsSUFFRSxDQUFDLFdBQVcsRUFBRyxTQUFTO0FBQ3RCLGVBQVMzQyxLQUFJLEdBQUdBLEtBQUksUUFBUSxRQUFRQSxNQUFLO0FBQ3ZDLGdCQUFRQSxFQUFDLElBQUksUUFBUUEsRUFBQyxFQUFFLENBQUM7QUFBQSxNQUMvQjtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBQUEsRUFFQSxNQUFNLDZCQUE2QixzQkFBc0I7QUFBQSxJQUN2RCxZQUFhLElBQUksU0FBUztBQUN4QixZQUFNLElBQUksT0FBTztBQUVqQixXQUFLLFNBQVMsSUFBSSxHQUFHLFNBQVMsRUFBRSxHQUFHLFNBQVMsTUFBTSxPQUFPLFFBQVEsS0FBSSxDQUFFO0FBQUEsSUFDM0U7QUFBQSxJQUVFLENBQUMsVUFBVSxFQUFHLE9BQU87QUFDbkIsYUFBTyxNQUFNLENBQUM7QUFBQSxJQUNsQjtBQUFBLElBRUUsQ0FBQyxXQUFXLEVBQUcsU0FBUztBQUN0QixlQUFTQSxLQUFJLEdBQUdBLEtBQUksUUFBUSxRQUFRQSxNQUFLO0FBQ3ZDLGdCQUFRQSxFQUFDLElBQUksUUFBUUEsRUFBQyxFQUFFLENBQUM7QUFBQSxNQUMvQjtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBRUEsYUFBVyxZQUFZLENBQUMsb0JBQW9CLG9CQUFvQixHQUFHO0FBQ2pFLGFBQVMsVUFBVSxRQUFRLGlCQUFrQjtBQUMzQyxZQUFNLFFBQVEsTUFBTSxLQUFLLFNBQVMsRUFBRSxLQUFJO0FBQ3hDLGFBQU8sVUFBVSxTQUFZLFFBQVEsS0FBSyxVQUFVLEVBQUUsS0FBSztBQUFBLElBQy9EO0FBRUUsYUFBUyxVQUFVLFNBQVMsZUFBZ0IsTUFBTSxTQUFTO0FBQ3pELFlBQU0sVUFBVSxNQUFNLEtBQUssU0FBUyxFQUFFLE1BQU0sTUFBTSxPQUFPO0FBQ3pELFdBQUssV0FBVyxFQUFFLE9BQU87QUFDekIsYUFBTztBQUFBLElBQ1g7QUFFRSxhQUFTLFVBQVUsT0FBTyxlQUFnQixTQUFTO0FBQ2pELFlBQU0sVUFBVSxNQUFNLEtBQUssU0FBUyxFQUFFLElBQUksT0FBTztBQUNqRCxXQUFLLFdBQVcsRUFBRSxPQUFPO0FBQ3pCLGFBQU87QUFBQSxJQUNYO0FBRUUsYUFBUyxVQUFVLFFBQVEsU0FBVSxRQUFRLFNBQVM7QUFDcEQsV0FBSyxTQUFTLEVBQUUsS0FBSyxRQUFRLE9BQU87QUFBQSxJQUN4QztBQUVFLGFBQVMsVUFBVSxTQUFTLGlCQUFrQjtBQUM1QyxhQUFPLEtBQUssU0FBUyxFQUFFLE1BQUs7QUFBQSxJQUNoQztBQUFBLEVBQ0E7QUFHQSxvQkFBQSxxQkFBNkI7QUFDN0Isb0JBQUEsdUJBQStCOzs7Ozs7OztBQ3ZFL0IsUUFBTSxFQUFFLGtCQUFrQixxQkFBcUIsc0JBQXFCLElBQUsyQyx3QkFBQTtBQUN6RSxRQUFNLGNBQWNFLG1CQUFBO0FBRXBCLFFBQU0sT0FBTyx1QkFBTyxLQUFLO0FBQ3pCLFFBQU0sV0FBVyx1QkFBTyxTQUFTO0FBQ2pDLFFBQU0sV0FBVyx1QkFBTyxTQUFTO0FBQ2pDLFFBQU0saUJBQWlCLHVCQUFPLGVBQWU7QUFBQSxFQUU3QyxNQUFNLHlCQUF5QixpQkFBaUI7QUFBQSxJQUM5QyxZQUFhLElBQUksU0FBUztBQUN4QixZQUFNLElBQUksT0FBTztBQUVqQixXQUFLLElBQUksSUFBSTtBQUNiLFdBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxTQUFTLE9BQU87QUFDMUMsV0FBSyxjQUFjLElBQUksRUFBRSxRQUFRLFFBQVEsT0FBTTtBQUUvQyxXQUFLLEdBQUcsTUFBTSxNQUFNLEtBQUssUUFBUSxFQUFDLEdBQUksS0FBSyxjQUFjLENBQUM7QUFBQSxJQUM5RDtBQUFBLEVBQ0E7QUFBQSxFQUVBLE1BQU0sNEJBQTRCLG9CQUFvQjtBQUFBLElBQ3BELFlBQWEsSUFBSSxTQUFTO0FBQ3hCLFlBQU0sSUFBSSxPQUFPO0FBRWpCLFdBQUssSUFBSSxJQUFJO0FBQ2IsV0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEtBQUssT0FBTztBQUN0QyxXQUFLLGNBQWMsSUFBSSxFQUFFLFFBQVEsUUFBUSxPQUFNO0FBRS9DLFdBQUssR0FBRyxNQUFNLE1BQU0sS0FBSyxRQUFRLEVBQUMsR0FBSSxLQUFLLGNBQWMsQ0FBQztBQUFBLElBQzlEO0FBQUEsRUFDQTtBQUFBLEVBRUEsTUFBTSw4QkFBOEIsc0JBQXNCO0FBQUEsSUFDeEQsWUFBYSxJQUFJLFNBQVM7QUFDeEIsWUFBTSxJQUFJLE9BQU87QUFFakIsV0FBSyxJQUFJLElBQUk7QUFDYixXQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsT0FBTyxPQUFPO0FBQ3hDLFdBQUssY0FBYyxJQUFJLEVBQUUsUUFBUSxRQUFRLE9BQU07QUFFL0MsV0FBSyxHQUFHLE1BQU0sTUFBTSxLQUFLLFFBQVEsRUFBQyxHQUFJLEtBQUssY0FBYyxDQUFDO0FBQUEsSUFDOUQ7QUFBQSxFQUNBO0FBRUEsYUFBVyxZQUFZLENBQUMsa0JBQWtCLHFCQUFxQixxQkFBcUIsR0FBRztBQUNyRixhQUFTLFVBQVUsUUFBUSxJQUFJLFdBQVk7QUFDekMsVUFBSSxLQUFLLEdBQUcsV0FBVyxRQUFRO0FBQzdCLGFBQUssSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFDO0FBQUEsTUFDakM7QUFBQSxJQUNBO0FBRUUsYUFBUyxVQUFVLFFBQVEsaUJBQWtCO0FBQzNDLFVBQUksS0FBSyxJQUFJLE1BQU0sTUFBTTtBQUN2QixlQUFPLEtBQUssSUFBSSxFQUFFLEtBQUk7QUFBQSxNQUM1QixXQUFlLEtBQUssR0FBRyxXQUFXLFdBQVc7QUFDdkMsZUFBTyxLQUFLLEdBQUcsV0FBVyxNQUFNLEtBQUssTUFBSyxHQUFJLEtBQUssY0FBYyxDQUFDO0FBQUEsTUFDeEUsT0FBVztBQUNMLGNBQU0sSUFBSSxZQUFZLDBEQUEwRDtBQUFBLFVBQzlFLE1BQU07QUFBQSxTQUNQO0FBQUEsTUFDUDtBQUFBLElBQ0E7QUFFRSxhQUFTLFVBQVUsU0FBUyxlQUFnQixNQUFNLFNBQVM7QUFDekQsVUFBSSxLQUFLLElBQUksTUFBTSxNQUFNO0FBQ3ZCLGVBQU8sS0FBSyxJQUFJLEVBQUUsTUFBTSxNQUFNLE9BQU87QUFBQSxNQUMzQyxXQUFlLEtBQUssR0FBRyxXQUFXLFdBQVc7QUFDdkMsZUFBTyxLQUFLLEdBQUcsV0FBVyxNQUFNLEtBQUssT0FBTyxNQUFNLE9BQU8sR0FBRyxLQUFLLGNBQWMsQ0FBQztBQUFBLE1BQ3RGLE9BQVc7QUFDTCxjQUFNLElBQUksWUFBWSwyREFBMkQ7QUFBQSxVQUMvRSxNQUFNO0FBQUEsU0FDUDtBQUFBLE1BQ1A7QUFBQSxJQUNBO0FBRUUsYUFBUyxVQUFVLE9BQU8sZUFBZ0IsU0FBUztBQUNqRCxVQUFJLEtBQUssSUFBSSxNQUFNLE1BQU07QUFDdkIsZUFBTyxLQUFLLElBQUksRUFBRSxJQUFHO0FBQUEsTUFDM0IsV0FBZSxLQUFLLEdBQUcsV0FBVyxXQUFXO0FBQ3ZDLGVBQU8sS0FBSyxHQUFHLFdBQVcsTUFBTSxLQUFLLEtBQUssT0FBTyxHQUFHLEtBQUssY0FBYyxDQUFDO0FBQUEsTUFDOUUsT0FBVztBQUNMLGNBQU0sSUFBSSxZQUFZLHlEQUF5RDtBQUFBLFVBQzdFLE1BQU07QUFBQSxTQUNQO0FBQUEsTUFDUDtBQUFBLElBQ0E7QUFFRSxhQUFTLFVBQVUsUUFBUSxTQUFVLFFBQVEsU0FBUztBQUNwRCxVQUFJLEtBQUssSUFBSSxNQUFNLE1BQU07QUFFdkIsYUFBSyxJQUFJLEVBQUUsTUFBTSxRQUFRLE9BQU87QUFBQSxNQUN0QyxXQUFlLEtBQUssR0FBRyxXQUFXLFdBQVc7QUFDdkMsYUFBSyxHQUFHLE1BQU0sTUFBTSxLQUFLLE1BQU0sUUFBUSxPQUFPLEdBQUcsS0FBSyxjQUFjLENBQUM7QUFBQSxNQUMzRTtBQUFBLElBQ0E7QUFFRSxhQUFTLFVBQVUsU0FBUyxpQkFBa0I7QUFDNUMsVUFBSSxLQUFLLElBQUksTUFBTSxNQUFNO0FBQ3ZCLGVBQU8sS0FBSyxJQUFJLEVBQUUsTUFBSztBQUFBLE1BQzdCLFdBQWUsS0FBSyxHQUFHLFdBQVcsV0FBVztBQUN2QyxlQUFPLEtBQUssR0FBRyxXQUFXLE1BQU0sS0FBSyxPQUFNLENBQUU7QUFBQSxNQUNuRDtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBRUEsbUJBQUEsbUJBQTJCO0FBQzNCLG1CQUFBLHNCQUE4QjtBQUM5QixtQkFBQSx3QkFBZ0M7Ozs7Ozs7Ozs7QUMzR2hDLFdBQUEsc0JBQThCLFNBQVUsS0FBSyxXQUFXLFlBQVksVUFBVTtBQUM1RSxXQUFPLGVBQWUsUUFBUSxlQUFlLFVBQVU7QUFDckQsWUFBTSxXQUFXLFVBQVUsS0FBSyxXQUFXLElBQUk7QUFDL0MsbUJBQWEsV0FBVztBQUFBLElBQzVCO0FBRUUsV0FBTztBQUFBLEVBQ1Q7QUFLQSxXQUFBLGVBQXVCLFNBQVUsSUFBSSxVQUFVO0FBQzdDLFdBQU8sTUFBTTtBQUNYLFVBQUksR0FBRyxVQUFVLEtBQU0sUUFBTztBQUM5QixVQUFJLEdBQUcsV0FBVyxTQUFVLFFBQU87QUFDbkMsV0FBSyxHQUFHO0FBQUEsSUFDWjtBQUFBLEVBQ0E7Ozs7Ozs7O0FDbEJBLFFBQU0sRUFBRSxxQkFBcUIsYUFBWSxJQUFLRixnQkFBQTtBQUU5QyxRQUFNLE1BQU0sdUJBQU8sSUFBSTtBQUN2QixRQUFNLHFCQUFxQix1QkFBTyxtQkFBbUI7QUFDckQsUUFBTSxvQkFBb0IsdUJBQU8sa0JBQWtCO0FBQUEsRUFHbkQsTUFBTSxjQUFjO0FBQUEsSUFDbEIsWUFBYSxJQUFJLG1CQUFtQixrQkFBa0I7QUFDcEQsV0FBSyxHQUFHLElBQUk7QUFJWixXQUFLLGtCQUFrQixJQUFJO0FBQzNCLFdBQUssaUJBQWlCLElBQUk7QUFBQSxJQUM5QjtBQUFBLElBRUUsSUFBSyxJQUFJO0FBQ1AsWUFBTSxRQUFRLEdBQUcsU0FBUztBQUMxQixZQUFNLFlBQVksR0FBRyxZQUFZO0FBQ2pDLFlBQU0sS0FBSyxZQUFZLEdBQUcsV0FBVyxLQUFLLEdBQUc7QUFFN0MsWUFBTSxXQUFXLEdBQUcsVUFBVSxHQUFHLEdBQUc7QUFDcEMsVUFBSSxZQUFZLEtBQU0sT0FBTTtBQUU1QixTQUFHLGNBQWMsR0FBRyxZQUFZLEdBQUcsV0FBVztBQUU5QyxVQUFJLE9BQU87QUFDVCxjQUFNLGFBQWEsR0FBRyxZQUFZLEdBQUcsS0FBSztBQUMxQyxZQUFJLGNBQWMsS0FBTSxPQUFNO0FBRTlCLFdBQUcsZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLGFBQWE7QUFBQSxNQUMxRCxXQUFlLEdBQUcsU0FBUyxPQUFPO0FBQzVCLGNBQU0sSUFBSSxVQUFVLG9FQUFvRTtBQUFBLE1BQzlGO0FBR0ksWUFBTSxjQUFjLEdBQUc7QUFDdkIsWUFBTSxnQkFBZ0IsWUFBWSxPQUFPLEdBQUcsR0FBRztBQUMvQyxZQUFNLFlBQVksWUFBWTtBQUk5QixZQUFNLFdBQVcsYUFBYSxDQUFDLGFBQWEsR0FBRyxVQUFVLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxhQUFhLEtBQUssR0FBRztBQUMvRixZQUFNLGFBQWEsYUFBYSxDQUFDLFdBQzdCLG9CQUFvQixlQUFlLFdBQVcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUMzRDtBQUdKLFVBQUksYUFBYSxDQUFDLFVBQVU7QUFDMUIsV0FBRyxXQUFXO0FBQUEsTUFDcEI7QUFFSSxVQUFJLGtCQUFrQjtBQUd0QixVQUFJLEtBQUssaUJBQWlCLE1BQU0sUUFBUSxDQUFDLFVBQVU7QUFFakQsMEJBQWtCLE9BQU8sT0FBTyxDQUFBLEdBQUksRUFBRTtBQUN0Qyx3QkFBZ0IsYUFBYTtBQUU3QixZQUFJLFdBQVc7QUFFYiwwQkFBZ0IsTUFBTTtBQUN0QiwwQkFBZ0IsY0FBYyxLQUFLLEdBQUcsRUFBRSxZQUFZLFNBQVM7QUFBQSxRQUNyRTtBQUVNLGFBQUssaUJBQWlCLEVBQUUsS0FBSyxlQUFlO0FBQUEsTUFDbEQ7QUFHSSxTQUFHLE1BQU0sV0FBVyxhQUFhLEtBQUssR0FBRyxFQUFFLFVBQVUsWUFBWSxXQUFXLElBQUk7QUFDaEYsU0FBRyxjQUFjO0FBRWpCLFVBQUksT0FBTztBQUNULGNBQU0sZ0JBQWdCLEdBQUc7QUFDekIsY0FBTSxlQUFlLGNBQWMsT0FBTyxHQUFHLEtBQUs7QUFDbEQsY0FBTSxjQUFjLGNBQWM7QUFFbEMsV0FBRyxRQUFRO0FBQ1gsV0FBRyxnQkFBZ0I7QUFFbkIsWUFBSSxvQkFBb0IsTUFBTTtBQUM1QiwwQkFBZ0IsZUFBZTtBQUUvQixjQUFJLFdBQVc7QUFDYiw0QkFBZ0IsUUFBUTtBQUN4Qiw0QkFBZ0IsZ0JBQWdCLEtBQUssR0FBRyxFQUFFLGNBQWMsV0FBVztBQUFBLFVBQzdFO0FBQUEsUUFDQTtBQUFBLE1BQ0E7QUFFSSxXQUFLLGtCQUFrQixFQUFFLEtBQUssRUFBRTtBQUNoQyxhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0E7QUFFQSxnQkFBQSxnQkFBd0I7Ozs7Ozs7QUNqR3hCLFFBQU0sZ0JBQWdCQSwwQkFBQTtBQUN0QixRQUFNLGNBQWNFLG1CQUFBO0FBQ3BCLFFBQU0sRUFBRSxZQUFZLGNBQWMsS0FBSSxJQUFLUyxjQUFBO0FBQzNDLFFBQU0sRUFBRSxxQkFBcUIsYUFBWSxJQUFLRSxnQkFBQTtBQUM5QyxRQUFNLEVBQUUsY0FBYSxJQUFLUyxxQkFBQTtBQUUxQixRQUFNLFVBQVUsdUJBQU8sUUFBUTtBQUMvQixRQUFNLG9CQUFvQix1QkFBTyxrQkFBa0I7QUFDbkQsUUFBTSxvQkFBb0IsdUJBQU8sa0JBQWtCO0FBQ25ELFFBQU0scUJBQXFCLHVCQUFPLG1CQUFtQjtBQUNyRCxRQUFNLGdCQUFnQix1QkFBTyxjQUFjO0FBQzNDLFFBQU0sVUFBVSx1QkFBTyxRQUFRO0FBQy9CLFFBQU0sZUFBZSx1QkFBTyxhQUFhO0FBQ3pDLFFBQU0saUJBQWlCLHVCQUFPLGVBQWU7QUFDN0MsUUFBTSxnQkFBZ0IsdUJBQU8sY0FBYztBQUMzQyxRQUFNLFdBQVcsdUJBQU8sU0FBUztBQUFBLEVBRWpDLE1BQU0scUJBQXFCO0FBQUEsSUFDekIsWUFBYSxJQUFJLFNBQVM7QUFDeEIsVUFBSSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU07QUFDekMsY0FBTSxPQUFPLE9BQU8sT0FBTyxTQUFTLE9BQU87QUFDM0MsY0FBTSxJQUFJLFVBQVUsbUVBQW1FLElBQUksRUFBRTtBQUFBLE1BQ25HO0FBRUksWUFBTSxtQkFBbUIsR0FBRyxjQUFjLE9BQU8sSUFBSTtBQUNyRCxZQUFNLHFCQUFxQixDQUFDLEdBQUcsTUFBTSxTQUFTO0FBSTlDLFdBQUssaUJBQWlCLElBQUksbUJBQW1CLEtBQUs7QUFLbEQsV0FBSyxpQkFBaUIsSUFBSSxvQkFBb0IscUJBQXFCLE9BQU8sQ0FBQTtBQUUxRSxXQUFLLE9BQU8sSUFBSTtBQUNoQixXQUFLLE9BQU8sSUFBSTtBQUNoQixXQUFLLGFBQWEsSUFBSTtBQUN0QixXQUFLLFFBQVEsSUFBSSxXQUFXLFNBQVMsWUFBWSxFQUFFLFFBQVE7QUFFM0QsVUFBSSxvQkFBb0I7QUFJdEIsY0FBTSxPQUFPLElBQUksYUFBYSxDQUFBLEdBQUksbUJBQW1CLENBQUEsSUFBSyxJQUFJO0FBRTlELGFBQUssYUFBYSxJQUFJO0FBQ3RCLGFBQUssY0FBYyxJQUFJLElBQUksY0FBYyxJQUFJLEtBQUssa0JBQWtCLEdBQUcsS0FBSyxpQkFBaUIsQ0FBQztBQUM5RixhQUFLLFlBQVksSUFBSSxHQUFHLE1BQU0sU0FBUztBQUFBLE1BQzdDLE9BQVc7QUFDTCxhQUFLLGFBQWEsSUFBSTtBQUN0QixhQUFLLGNBQWMsSUFBSTtBQUN2QixhQUFLLFlBQVksSUFBSTtBQUFBLE1BQzNCO0FBRUksV0FBSyxLQUFLO0FBQ1YsV0FBSyxHQUFHLGVBQWUsSUFBSTtBQUFBLElBQy9CO0FBQUEsSUFFRSxJQUFJLFNBQVU7QUFDWixVQUFJLEtBQUssYUFBYSxNQUFNLE1BQU07QUFDaEMsZUFBTyxLQUFLLE9BQU8sSUFBSSxLQUFLLGFBQWEsRUFBRTtBQUFBLE1BQ2pELE9BQVc7QUFDTCxlQUFPLEtBQUssT0FBTztBQUFBLE1BQ3pCO0FBQUEsSUFDQTtBQUFBLElBRUUsSUFBSyxLQUFLLE9BQU8sU0FBUztBQUN4QixtQkFBYSxJQUFJO0FBQ2pCLGdCQUFVLFdBQVcsU0FBUyxZQUFZO0FBRTFDLFlBQU0sWUFBWSxRQUFRLFlBQVk7QUFDdEMsWUFBTSxLQUFLLFlBQVksUUFBUSxXQUFXLEtBQUs7QUFDL0MsWUFBTSxXQUFXO0FBQ2pCLFlBQU0sV0FBVyxHQUFHLFVBQVUsR0FBRztBQUNqQyxZQUFNLGFBQWEsR0FBRyxZQUFZLEtBQUs7QUFFdkMsVUFBSSxZQUFZLEtBQU0sT0FBTTtBQUM1QixVQUFJLGNBQWMsS0FBTSxPQUFNO0FBRzlCLFlBQU0sS0FBSyxPQUFPLE9BQU8sQ0FBQSxHQUFJLFNBQVM7QUFBQSxRQUNwQyxNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBLGFBQWEsR0FBRyxZQUFZLFFBQVEsV0FBVztBQUFBLFFBQy9DLGVBQWUsR0FBRyxjQUFjLFFBQVEsYUFBYTtBQUFBLE9BQ3REO0FBRUQsVUFBSSxLQUFLLFlBQVksTUFBTSxNQUFNO0FBQy9CLFlBQUk7QUFRRixlQUFLLFlBQVksRUFBRSxJQUFJLEtBQUssY0FBYyxDQUFDO0FBRzNDLGFBQUcsY0FBYyxHQUFHLFlBQVksR0FBRyxXQUFXO0FBQzlDLGFBQUcsZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLGFBQWE7QUFBQSxRQUM1RCxTQUFlLEtBQUs7QUFDWixnQkFBTSxJQUFJLFlBQVksMkNBQTJDO0FBQUEsWUFDL0QsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFdBQ1I7QUFBQSxRQUNUO0FBQUEsTUFDQTtBQUdJLFlBQU0sY0FBYyxHQUFHO0FBQ3ZCLFlBQU0sZ0JBQWdCLFlBQVksT0FBTyxHQUFHLEdBQUc7QUFDL0MsWUFBTSxZQUFZLFlBQVk7QUFJOUIsWUFBTSxXQUFXLGFBQWEsQ0FBQyxhQUFhLEdBQUcsVUFBVSxLQUFLLEVBQUUsS0FBSyxHQUFHLGFBQWEsS0FBSztBQUMxRixZQUFNLGFBQWEsYUFBYSxDQUFDLFdBQzdCLG9CQUFvQixlQUFlLFdBQVcsSUFBSSxLQUFLLEVBQUUsSUFDekQ7QUFFSixZQUFNLGdCQUFnQixHQUFHO0FBQ3pCLFlBQU0sZUFBZSxjQUFjLE9BQU8sR0FBRyxLQUFLO0FBQ2xELFlBQU0sY0FBYyxjQUFjO0FBR2xDLFVBQUksYUFBYSxDQUFDLFVBQVU7QUFDMUIsV0FBRyxXQUFXO0FBQUEsTUFDcEI7QUFHSSxVQUFJLEtBQUssaUJBQWlCLE1BQU0sUUFBUSxDQUFDLFVBQVU7QUFFakQsY0FBTSxrQkFBa0IsT0FBTyxPQUFPLENBQUEsR0FBSSxFQUFFO0FBQzVDLHdCQUFnQixhQUFhO0FBQzdCLHdCQUFnQixlQUFlO0FBRS9CLFlBQUksV0FBVztBQUViLDBCQUFnQixNQUFNO0FBQ3RCLDBCQUFnQixRQUFRO0FBQ3hCLDBCQUFnQixjQUFjLEtBQUssR0FBRyxZQUFZLFNBQVM7QUFDM0QsMEJBQWdCLGdCQUFnQixLQUFLLEdBQUcsY0FBYyxXQUFXO0FBQUEsUUFDekU7QUFFTSxhQUFLLGlCQUFpQixFQUFFLEtBQUssZUFBZTtBQUFBLE1BQ2xELFdBQWUsS0FBSyxpQkFBaUIsTUFBTSxRQUFRLENBQUMsVUFBVTtBQUN4RCxjQUFNLGtCQUFrQixPQUFPLE9BQU8sQ0FBQSxHQUFJLFFBQVE7QUFFbEQsd0JBQWdCLE9BQU87QUFDdkIsd0JBQWdCLE1BQU07QUFDdEIsd0JBQWdCLFFBQVE7QUFFeEIsYUFBSyxpQkFBaUIsRUFBRSxLQUFLLGVBQWU7QUFBQSxNQUNsRDtBQUdJLFNBQUcsTUFBTSxXQUFXLGFBQWEsS0FBSyxHQUFHLFVBQVUsWUFBWSxXQUFXLElBQUk7QUFDOUUsU0FBRyxRQUFRO0FBQ1gsU0FBRyxjQUFjO0FBQ2pCLFNBQUcsZ0JBQWdCO0FBRW5CLFVBQUksS0FBSyxRQUFRLEdBQUc7QUFDbEIsYUFBSyxLQUFLLEVBQUU7QUFBQSxNQUNsQixPQUFXO0FBRUwsYUFBSyxLQUFLLEdBQUcsS0FBSyxjQUFjLEVBQUU7QUFBQSxNQUN4QztBQUdJLFdBQUssT0FBTztBQUNaLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxLQUFNLEtBQUssT0FBTyxTQUFTO0FBQUEsSUFBQTtBQUFBLElBRTNCLElBQUssS0FBSyxTQUFTO0FBQ2pCLG1CQUFhLElBQUk7QUFDakIsZ0JBQVUsV0FBVyxTQUFTLFlBQVk7QUFFMUMsWUFBTSxZQUFZLFFBQVEsWUFBWTtBQUN0QyxZQUFNLEtBQUssWUFBWSxRQUFRLFdBQVcsS0FBSztBQUMvQyxZQUFNLFdBQVc7QUFDakIsWUFBTSxXQUFXLEdBQUcsVUFBVSxHQUFHO0FBRWpDLFVBQUksWUFBWSxLQUFNLE9BQU07QUFHNUIsWUFBTSxLQUFLLE9BQU8sT0FBTyxDQUFBLEdBQUksU0FBUztBQUFBLFFBQ3BDLE1BQU07QUFBQSxRQUNOO0FBQUEsUUFDQSxhQUFhLEdBQUcsWUFBWSxRQUFRLFdBQVc7QUFBQSxPQUNoRDtBQUVELFVBQUksS0FBSyxZQUFZLE1BQU0sTUFBTTtBQUMvQixZQUFJO0FBQ0YsZUFBSyxZQUFZLEVBQUUsSUFBSSxLQUFLLGNBQWMsQ0FBQztBQUczQyxhQUFHLGNBQWMsR0FBRyxZQUFZLEdBQUcsV0FBVztBQUFBLFFBQ3RELFNBQWUsS0FBSztBQUNaLGdCQUFNLElBQUksWUFBWSwyQ0FBMkM7QUFBQSxZQUMvRCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsV0FDUjtBQUFBLFFBQ1Q7QUFBQSxNQUNBO0FBR0ksWUFBTSxjQUFjLEdBQUc7QUFDdkIsWUFBTSxnQkFBZ0IsWUFBWSxPQUFPLEdBQUcsR0FBRztBQUMvQyxZQUFNLFlBQVksWUFBWTtBQUM5QixZQUFNLGFBQWEsWUFBWSxvQkFBb0IsZUFBZSxXQUFXLElBQUksS0FBSyxFQUFFLElBQUk7QUFHNUYsVUFBSSxVQUFXLElBQUcsV0FBVztBQUU3QixVQUFJLEtBQUssaUJBQWlCLE1BQU0sTUFBTTtBQUVwQyxjQUFNLGtCQUFrQixPQUFPLE9BQU8sQ0FBQSxHQUFJLEVBQUU7QUFDNUMsd0JBQWdCLGFBQWE7QUFFN0IsWUFBSSxXQUFXO0FBRWIsMEJBQWdCLE1BQU07QUFDdEIsMEJBQWdCLGNBQWMsS0FBSyxHQUFHLFlBQVksU0FBUztBQUFBLFFBQ25FO0FBRU0sYUFBSyxpQkFBaUIsRUFBRSxLQUFLLGVBQWU7QUFBQSxNQUNsRCxXQUFlLEtBQUssaUJBQWlCLE1BQU0sTUFBTTtBQUMzQyxjQUFNLGtCQUFrQixPQUFPLE9BQU8sQ0FBQSxHQUFJLFFBQVE7QUFFbEQsd0JBQWdCLE9BQU87QUFDdkIsd0JBQWdCLE1BQU07QUFFdEIsYUFBSyxpQkFBaUIsRUFBRSxLQUFLLGVBQWU7QUFBQSxNQUNsRDtBQUVJLFNBQUcsTUFBTSxLQUFLLEdBQUcsVUFBVSxZQUFZLFdBQVcsSUFBSTtBQUN0RCxTQUFHLGNBQWM7QUFFakIsVUFBSSxLQUFLLFFBQVEsR0FBRztBQUNsQixhQUFLLEtBQUssRUFBRTtBQUFBLE1BQ2xCLE9BQVc7QUFFTCxhQUFLLEtBQUssR0FBRyxLQUFLLEVBQUU7QUFBQSxNQUMxQjtBQUdJLFdBQUssT0FBTztBQUNaLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxLQUFNLEtBQUssU0FBUztBQUFBLElBQUE7QUFBQSxJQUVwQixLQUFNLElBQUk7QUFBQSxJQUFBO0FBQUEsSUFFVixRQUFTO0FBQ1AsbUJBQWEsSUFBSTtBQUNqQixXQUFLLE9BQU07QUFFWCxVQUFJLEtBQUssaUJBQWlCLE1BQU0sS0FBTSxNQUFLLGlCQUFpQixJQUFJLENBQUE7QUFDaEUsVUFBSSxLQUFLLGlCQUFpQixNQUFNLEtBQU0sTUFBSyxpQkFBaUIsSUFBSSxDQUFBO0FBQ2hFLFVBQUksS0FBSyxhQUFhLE1BQU0sS0FBTSxNQUFLLGFBQWEsRUFBRSxNQUFLO0FBRTNELFdBQUssT0FBTyxJQUFJO0FBQ2hCLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxTQUFVO0FBQUEsSUFBQTtBQUFBLElBRVYsTUFBTSxNQUFPLFNBQVM7QUFDcEIsbUJBQWEsSUFBSTtBQUNqQixnQkFBVSxXQUFXLE9BQU87QUFFNUIsVUFBSSxLQUFLLE9BQU8sTUFBTSxHQUFHO0FBQ3ZCLGVBQU8sS0FBSyxNQUFLO0FBQUEsTUFDdkIsT0FBVztBQUNMLGFBQUssT0FBTyxJQUFJO0FBR2hCLGNBQU0sUUFBUSxhQUFhLElBQUk7QUFFL0IsWUFBSTtBQUVGLGNBQUksS0FBSyxhQUFhLE1BQU0sTUFBTTtBQUNoQyxrQkFBTSxtQkFBbUIsS0FBSyxhQUFhLEVBQUUsaUJBQWlCO0FBQzlELGtCQUFNLG9CQUFvQixLQUFLLGFBQWEsRUFBRSxrQkFBa0I7QUFDaEUsa0JBQU0sU0FBUyxLQUFLLGFBQWEsRUFBRTtBQUVuQyxxQkFBU2pFLEtBQUksR0FBR0EsS0FBSSxRQUFRQSxNQUFLO0FBQy9CLG9CQUFNLEtBQUssa0JBQWtCQSxFQUFDO0FBTTlCLGtCQUFJLEtBQUssUUFBUSxHQUFHO0FBQ2xCLHFCQUFLLEtBQUssRUFBRTtBQUFBLGNBQzFCLFdBQXVCLEdBQUcsU0FBUyxPQUFPO0FBQzVCLHFCQUFLLEtBQUssR0FBRyxLQUFLLEdBQUcsT0FBTyxFQUFFO0FBQUEsY0FDNUMsT0FBbUI7QUFDTCxxQkFBSyxLQUFLLEdBQUcsS0FBSyxFQUFFO0FBQUEsY0FDbEM7QUFBQSxZQUNBO0FBRVUsZ0JBQUkscUJBQXFCLFFBQVEsV0FBVyxHQUFHO0FBQzdDLG1CQUFLLGlCQUFpQixJQUFJLEtBQUssaUJBQWlCLEVBQUUsT0FBTyxnQkFBZ0I7QUFBQSxZQUNyRjtBQUFBLFVBQ0E7QUFFUSxnQkFBTSxLQUFLLE9BQU8sT0FBTztBQUFBLFFBQ2pDLFNBQWUsS0FBSztBQUNaLGdCQUFLO0FBRUwsY0FBSTtBQUNGLGtCQUFNLEtBQUssYUFBYTtBQUFBLFVBQ2xDLFNBQWlCLFVBQVU7QUFFakIsa0JBQU0sY0FBYyxDQUFDLEtBQUssUUFBUSxDQUFDO0FBQUEsVUFDN0M7QUFFUSxnQkFBTTtBQUFBLFFBQ2Q7QUFFTSxjQUFLO0FBSUwsWUFBSSxLQUFLLGlCQUFpQixNQUFNLE1BQU07QUFDcEMsZUFBSyxHQUFHLEtBQUssU0FBUyxLQUFLLGlCQUFpQixDQUFDO0FBQUEsUUFDckQsV0FBaUIsS0FBSyxpQkFBaUIsTUFBTSxNQUFNO0FBQzNDLGVBQUssR0FBRyxLQUFLLFNBQVMsS0FBSyxpQkFBaUIsQ0FBQztBQUFBLFFBQ3JEO0FBRU0sZUFBTyxLQUFLLGFBQWE7QUFBQSxNQUMvQjtBQUFBLElBQ0E7QUFBQSxJQUVFLE1BQU0sT0FBUSxTQUFTO0FBQUEsSUFBQTtBQUFBLElBRXZCLE1BQU0sUUFBUztBQUNiLFVBQUksS0FBSyxhQUFhLE1BQU0sTUFBTTtBQUVoQyxlQUFPLEtBQUssYUFBYSxFQUFFLE1BQU0sSUFBSTtBQUFBLE1BQzNDLE9BQVc7QUFFTCxxQkFBYSxJQUFJLEVBQUM7QUFDbEIsZUFBTyxLQUFLLGFBQWE7QUFBQSxNQUMvQjtBQUFBLElBQ0E7QUFBQSxJQUVFLE1BQU0sU0FBVTtBQUFBLElBQUE7QUFBQSxFQUNsQjtBQUVBLFFBQU0sZUFBZSxTQUFVLE9BQU87QUFDcEMsUUFBSTtBQUVKLFVBQU0sYUFBYSxJQUFJLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0RCxjQUFRLE1BQU07QUFDWixxQkFBYSxLQUFLLEVBQUUsS0FBSyxTQUFTLE1BQU07QUFBQSxNQUM5QztBQUFBLElBQ0EsQ0FBRztBQUVELFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSxlQUFlLGVBQWdCLE9BQU87QUFDMUMsVUFBTSxPQUFPLElBQUk7QUFDakIsVUFBTSxNQUFNLE9BQU07QUFDbEIsVUFBTSxHQUFHLGVBQWUsS0FBSztBQUFBLEVBQy9CO0FBQUEsRUFFQSxNQUFNLGFBQWE7QUFBQSxJQUNqQixZQUFhLG1CQUFtQixrQkFBa0I7QUFDaEQsV0FBSyxrQkFBa0IsSUFBSTtBQUMzQixXQUFLLGlCQUFpQixJQUFJO0FBQUEsSUFDOUI7QUFBQSxJQUVFLElBQUksU0FBVTtBQUNaLGFBQU8sS0FBSyxrQkFBa0IsRUFBRTtBQUFBLElBQ3BDO0FBQUEsSUFFRSxRQUFTO0FBRVAsaUJBQVdnQixNQUFLLENBQUMsbUJBQW1CLGtCQUFrQixHQUFHO0FBQ3ZELGNBQU0sTUFBTSxLQUFLQSxFQUFDO0FBRWxCLFlBQUksUUFBUSxNQUFNO0FBRWhCLGNBQUksT0FBTyxHQUFHLElBQUksTUFBTTtBQUFBLFFBQ2hDO0FBQUEsTUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNBO0FBRUEsUUFBTSxlQUFlLFNBQVUsT0FBTztBQUNwQyxRQUFJLE1BQU0sT0FBTyxNQUFNLFFBQVE7QUFDN0IsWUFBTSxJQUFJLFlBQVksd0VBQXdFO0FBQUEsUUFDNUYsTUFBTTtBQUFBLE9BQ1A7QUFBQSxJQUNMO0FBS0UsUUFBSSxNQUFNLEdBQUcsV0FBVyxRQUFRO0FBRTlCLFlBQU0sSUFBSSxZQUFZLHdCQUF3QjtBQUFBLFFBQzVDLE1BQU07QUFBQSxPQUNQO0FBQUEsSUFDTDtBQUFBLEVBQ0E7QUFFQSx1QkFBQSx1QkFBK0I7Ozs7Ozs7QUNqYS9CLFFBQU0sRUFBRSxxQkFBb0IsSUFBSzJCLDRCQUFBO0FBQ2pDLFFBQU0sV0FBVyx1QkFBTyxTQUFTO0FBQUEsRUFHakMsTUFBTSw0QkFBNEIscUJBQXFCO0FBQUEsSUFDckQsWUFBYSxJQUFJO0FBRWYsWUFBTSxJQUFJLEVBQUUsS0FBSyxLQUFJLENBQUU7QUFDdkIsV0FBSyxRQUFRLElBQUksQ0FBQTtBQUFBLElBQ3JCO0FBQUEsSUFFRSxLQUFNLElBQUk7QUFDUixXQUFLLFFBQVEsRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUMxQjtBQUFBLElBRUUsU0FBVTtBQUNSLFdBQUssUUFBUSxJQUFJLENBQUE7QUFBQSxJQUNyQjtBQUFBLElBRUUsTUFBTSxPQUFRLFNBQVM7QUFHckIsYUFBTyxLQUFLLEdBQUcsT0FBTyxLQUFLLFFBQVEsR0FBRyxPQUFPO0FBQUEsSUFDakQ7QUFBQSxFQUNBO0FBRUEsc0JBQUEsc0JBQThCOzs7Ozs7OztBQzFCOUIsUUFBTSxFQUFFLEtBQUksSUFBS0EsY0FBQTtBQUVqQixRQUFNLGFBQWEsdUJBQU8sV0FBVztBQUNyQyxRQUFNLFNBQVMsdUJBQU8sT0FBTztBQUFBLEVBRTdCLE1BQU0sY0FBYztBQUFBLElBQ2xCLGNBQWU7QUFDYixXQUFLLFdBQVcsSUFBSSxLQUFLLEVBQUUsT0FBTyxLQUFJLENBQUU7QUFDeEMsV0FBSyxXQUFXLElBQUksS0FBSyxFQUFFLE9BQU8sTUFBSyxDQUFFO0FBQ3pDLFdBQUssU0FBUyxJQUFJLEtBQUssRUFBRSxPQUFPLE1BQUssQ0FBRTtBQUFBLElBQzNDO0FBQUEsRUFDQTtBQUFBLEVBRUEsTUFBTSxLQUFLO0FBQUEsSUFDVCxZQUFhLFNBQVM7QUFDcEIsV0FBSyxNQUFNLElBQUksUUFBUTtBQUN2QixXQUFLLFVBQVUsSUFBSSxvQkFBSSxJQUFHO0FBSzFCLFdBQUssT0FBTztBQUNaLFdBQUssTUFBTSxPQUFPLElBQUk7QUFBQSxJQUMxQjtBQUFBLElBRUUsSUFBSyxJQUFJO0FBRVAscUJBQWUsRUFBRTtBQUNqQixXQUFLLFVBQVUsRUFBRSxJQUFJLEVBQUU7QUFDdkIsV0FBSyxPQUFPO0FBQ1osV0FBSyxNQUFNLE9BQU8sSUFBSTtBQUFBLElBQzFCO0FBQUEsSUFFRSxPQUFRLElBQUk7QUFDVixxQkFBZSxFQUFFO0FBQ2pCLFdBQUssVUFBVSxFQUFFLE9BQU8sRUFBRTtBQUMxQixXQUFLLE9BQU8sS0FBSyxVQUFVLEVBQUUsU0FBUztBQUN0QyxXQUFLLE1BQU0sT0FBTyxJQUFJO0FBQUEsSUFDMUI7QUFBQSxFQUNBO0FBRUEsUUFBTSxpQkFBaUIsU0FBVSxJQUFJO0FBQ25DLFFBQUksT0FBTyxPQUFPLFlBQVk7QUFDNUIsWUFBTSxPQUFPLE9BQU8sT0FBTyxTQUFTLE9BQU87QUFDM0MsWUFBTSxJQUFJLFVBQVUsbURBQW1ELElBQUksRUFBRTtBQUFBLElBQ2pGO0FBQUEsRUFDQTtBQUVBLFFBQU0sU0FBUyxTQUFVLE1BQU07QUFDN0IsUUFBSSxLQUFLLE1BQU07QUFDYixhQUFPO0FBQUEsSUFDWCxXQUFhLEtBQUssVUFBVSxFQUFFLFNBQVMsR0FBRztBQUN0QyxZQUFNLENBQUMsRUFBRSxJQUFJLEtBQUssVUFBVTtBQUM1QixhQUFPO0FBQUEsSUFDWCxXQUFhLEtBQUssTUFBTSxHQUFHO0FBSXZCLFlBQU0sTUFBTSxlQUFnQixjQUFjLE1BQU07QUFDOUMsbUJBQVcsTUFBTSxXQUFXO0FBQzFCLGdCQUFNLEdBQUcsR0FBRyxJQUFJO0FBQUEsUUFDeEI7QUFBQSxNQUNBO0FBRUksYUFBTyxJQUFJLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3RELE9BQVM7QUFDTCxZQUFNLE1BQU0sU0FBVSxjQUFjLE1BQU07QUFDeEMsbUJBQVcsTUFBTSxXQUFXO0FBQzFCLGFBQUcsR0FBRyxJQUFJO0FBQUEsUUFDbEI7QUFBQSxNQUNBO0FBRUksYUFBTyxJQUFJLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDQTtBQUVBLFFBQUEsZ0JBQXdCOzs7Ozs7OztBQzVFeEIsUUFBTSxFQUFFLFVBQVMsSUFBS0EsY0FBQTtBQUV0QixlQUFBLGVBQXVCLE1BQU0sYUFBYTtBQUFBLElBQ3hDLFlBQWEsU0FBU2tCLFNBQVE7QUFDNUIsaUJBQVcsU0FBU0EsU0FBUTtBQUUxQixhQUFLLE1BQU0sSUFBSSxJQUFJO0FBR25CLFlBQUksTUFBTSxZQUFZO0FBQ3BCLGdCQUFNLFVBQVUsUUFBUSxNQUFNLElBQUksc0NBQXNDLE1BQU0sR0FBRztBQUFBLFFBQ3pGO0FBQUEsTUFDQTtBQUVJLFlBQU0sTUFBTSxJQUFJLElBQUlBLFFBQU8sSUFBSSxDQUFBMUQsT0FBSyxDQUFDQSxHQUFFLE1BQU1BLEVBQUMsQ0FBQyxDQUFDO0FBQ2hELFlBQU0sVUFBVTtBQUVoQixjQUFRLEdBQUcsZUFBZSxXQUFXO0FBQ3JDLGNBQVEsR0FBRyxrQkFBa0IsWUFBWTtBQUV6QyxlQUFTLFlBQWEsTUFBTTtBQUMxQixjQUFNLFFBQVEsSUFBSSxJQUFJLElBQUk7QUFFMUIsWUFBSSxVQUFVLFFBQVc7QUFDdkIsa0JBQVEsSUFBSSxJQUFJO0FBRWhCLGNBQUksTUFBTSxZQUFZO0FBQ3BCLHNCQUFVLE1BQU0sT0FBTztBQUFBLFVBQ2pDO0FBQUEsUUFDQTtBQUFBLE1BQ0E7QUFFSSxlQUFTLGFBQWMsTUFBTTtBQUMzQixZQUFJLElBQUksSUFBSSxJQUFJLEdBQUc7QUFDakIsa0JBQVEsSUFBSSxJQUFJLEtBQUssY0FBYyxJQUFJLElBQUk7QUFBQSxRQUNuRDtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBQUEsRUFDQTs7Ozs7Ozs7QUN0Q0EsUUFBTSxFQUFFLFlBQVksYUFBWSxJQUFLd0MsY0FBQTtBQUNyQyxRQUFNLEVBQUUsV0FBVSxJQUFLRSxjQUFBO0FBRXZCLFFBQU0sY0FBYyx1QkFBTyxZQUFZO0FBQ3ZDLFFBQU0sV0FBVyx1QkFBTyxTQUFTO0FBQ2pDLFFBQU0sZUFBZSx1QkFBTyxhQUFhO0FBQUEsRUFFekMsTUFBTSxrQkFBa0I7QUFBQSxJQUN0QixZQUFhLElBQUksUUFBUTtBQUN2QixXQUFLLEtBQUs7QUFDVixXQUFLLFNBQVM7QUFBQSxJQUNsQjtBQUFBLEVBQ0E7QUFBQSxFQUVBLE1BQU0sY0FBYztBQUFBLElBQ2xCLGNBQWU7QUFDYixXQUFLLFdBQVcsSUFBSSxDQUFBO0FBQ3BCLFdBQUssUUFBUSxJQUFJLG9CQUFJLElBQUc7QUFDeEIsV0FBSyxZQUFZLElBQUksS0FBSyxZQUFZLEVBQUUsS0FBSyxJQUFJO0FBQUEsSUFDckQ7QUFBQSxJQUVFLElBQUssSUFBSSxTQUFTO0FBQ2hCLGdCQUFVLFdBQVcsU0FBUyxZQUFZO0FBQzFDLFlBQU0sU0FBUyxRQUFRO0FBRXZCLFVBQUksVUFBVSxNQUFNO0FBQ2xCLGFBQUssV0FBVyxFQUFFLEtBQUssSUFBSSxrQkFBa0IsSUFBSSxJQUFJLENBQUM7QUFDdEQ7QUFBQSxNQUNOO0FBRUksVUFBSSxPQUFPLFNBQVM7QUFFbEIsV0FBRyxJQUFJLFdBQVUsQ0FBRTtBQUNuQjtBQUFBLE1BQ047QUFFSSxVQUFJLENBQUMsS0FBSyxRQUFRLEVBQUUsSUFBSSxNQUFNLEdBQUc7QUFDL0IsYUFBSyxRQUFRLEVBQUUsSUFBSSxNQUFNO0FBQ3pCLGVBQU8saUJBQWlCLFNBQVMsS0FBSyxZQUFZLEdBQUcsRUFBRSxNQUFNLEtBQUksQ0FBRTtBQUFBLE1BQ3pFO0FBRUksV0FBSyxXQUFXLEVBQUUsS0FBSyxJQUFJLGtCQUFrQixJQUFJLE1BQU0sQ0FBQztBQUFBLElBQzVEO0FBQUEsSUFFRSxRQUFTO0FBQ1AsWUFBTSxhQUFhLEtBQUssV0FBVztBQUNuQyxZQUFNLFVBQVUsS0FBSyxRQUFRO0FBRTdCLFdBQUssV0FBVyxJQUFJLENBQUE7QUFDcEIsV0FBSyxRQUFRLElBQUksb0JBQUksSUFBRztBQUV4QixpQkFBVyxVQUFVLFNBQVM7QUFDNUIsZUFBTyxvQkFBb0IsU0FBUyxLQUFLLFlBQVksQ0FBQztBQUFBLE1BQzVEO0FBRUksaUJBQVcsYUFBYSxZQUFZO0FBQ2xDLGtCQUFVLEdBQUcsS0FBSyxJQUFJO0FBQUEsTUFDNUI7QUFBQSxJQUNBO0FBQUEsSUFFRSxDQUFDLFlBQVksRUFBRyxJQUFJO0FBQ2xCLFlBQU0sU0FBUyxHQUFHO0FBQ2xCLFlBQU0sTUFBTSxJQUFJLFdBQVU7QUFDMUIsWUFBTSxVQUFVLENBQUE7QUFHaEIsV0FBSyxXQUFXLElBQUksS0FBSyxXQUFXLEVBQUUsT0FBTyxTQUFVLFdBQVc7QUFDaEUsWUFBSSxVQUFVLFdBQVcsUUFBUSxVQUFVLFdBQVcsUUFBUTtBQUM1RCxrQkFBUSxLQUFLLFNBQVM7QUFDdEIsaUJBQU87QUFBQSxRQUNmLE9BQWE7QUFDTCxpQkFBTztBQUFBLFFBQ2Y7QUFBQSxNQUNBLENBQUs7QUFFRCxXQUFLLFFBQVEsRUFBRSxPQUFPLE1BQU07QUFFNUIsaUJBQVcsYUFBYSxTQUFTO0FBQy9CLGtCQUFVLEdBQUcsS0FBSyxNQUFNLEdBQUc7QUFBQSxNQUNqQztBQUFBLElBQ0E7QUFBQSxFQUNBO0FBRUEsZ0JBQUEsZ0JBQXdCOzs7Ozs7OztBQ25GeEIsUUFBTSxpQkFBaUIsT0FBTyxVQUFVO0FBQ3hDLFFBQU0sZUFBZSxvQkFBSSxJQUFJLENBQUMsTUFBTSxPQUFPLE1BQU0sS0FBSyxDQUFDO0FBRXZELG1CQUFpQixTQUFVLFNBQVMsYUFBYTtBQUMvQyxVQUFNLFNBQVMsQ0FBQTtBQUVmLGVBQVc3QixNQUFLLFNBQVM7QUFDdkIsVUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTQSxFQUFDLEVBQUc7QUFDdEMsVUFBSUEsT0FBTSxpQkFBaUJBLE9BQU0sZ0JBQWlCO0FBRWxELFVBQUksYUFBYSxJQUFJQSxFQUFDLEdBQUc7QUFHdkIsZUFBT0EsRUFBQyxJQUFJLFlBQVksT0FBTyxRQUFRQSxFQUFDLENBQUM7QUFBQSxNQUMvQyxPQUFXO0FBQ0wsZUFBT0EsRUFBQyxJQUFJLFFBQVFBLEVBQUM7QUFBQSxNQUMzQjtBQUFBLElBQ0E7QUFFRSxXQUFPLFVBQVUsQ0FBQyxDQUFDLE9BQU87QUFDMUIsV0FBTyxRQUFRLE9BQU8sVUFBVSxPQUFPLEtBQUssS0FBSyxPQUFPLFNBQVMsSUFBSSxPQUFPLFFBQVE7QUFFcEYsV0FBTztBQUFBLEVBQ1Q7Ozs7Ozs7O0FDdkJBLFFBQU0sRUFBRSxrQkFBa0IscUJBQXFCLHNCQUFxQixJQUFLMkIsd0JBQUE7QUFFekUsUUFBTSxTQUFTLHVCQUFPLE9BQU87QUFDN0IsUUFBTSxZQUFZLHVCQUFPLFVBQVU7QUFBQSxFQUduQyxNQUFNLGlDQUFpQyxpQkFBaUI7QUFBQSxJQUN0RCxZQUFhLElBQUksU0FBU3FCLFdBQVUsT0FBTztBQUN6QyxZQUFNLElBQUksT0FBTztBQUVqQixXQUFLLFNBQVMsSUFBSUE7QUFDbEIsV0FBSyxNQUFNLElBQUk7QUFBQSxJQUNuQjtBQUFBLElBRUUsTUFBTSxRQUFTO0FBQ2IsWUFBTSxRQUFRLE1BQU0sS0FBSyxTQUFTLEVBQUUsS0FBSTtBQUV4QyxVQUFJLFVBQVUsUUFBVztBQUN2QixjQUFNLE1BQU0sTUFBTSxDQUFDO0FBQ25CLFlBQUksUUFBUSxPQUFXLE9BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFLEdBQUc7QUFBQSxNQUN4RDtBQUVJLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxNQUFNLE9BQVEsTUFBTSxTQUFTO0FBQzNCLFlBQU0sVUFBVSxNQUFNLEtBQUssU0FBUyxFQUFFLE1BQU0sTUFBTSxPQUFPO0FBQ3pELFlBQU0sUUFBUSxLQUFLLE1BQU07QUFFekIsaUJBQVcsU0FBUyxTQUFTO0FBQzNCLGNBQU0sTUFBTSxNQUFNLENBQUM7QUFDbkIsWUFBSSxRQUFRLE9BQVcsT0FBTSxDQUFDLElBQUksTUFBTSxHQUFHO0FBQUEsTUFDakQ7QUFFSSxhQUFPO0FBQUEsSUFDWDtBQUFBLElBRUUsTUFBTSxLQUFNLFNBQVM7QUFDbkIsWUFBTSxVQUFVLE1BQU0sS0FBSyxTQUFTLEVBQUUsSUFBSSxPQUFPO0FBQ2pELFlBQU0sUUFBUSxLQUFLLE1BQU07QUFFekIsaUJBQVcsU0FBUyxTQUFTO0FBQzNCLGNBQU0sTUFBTSxNQUFNLENBQUM7QUFDbkIsWUFBSSxRQUFRLE9BQVcsT0FBTSxDQUFDLElBQUksTUFBTSxHQUFHO0FBQUEsTUFDakQ7QUFFSSxhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0E7QUFBQSxFQUVBLE1BQU0sb0NBQW9DLG9CQUFvQjtBQUFBLElBQzVELFlBQWEsSUFBSSxTQUFTQSxXQUFVLE9BQU87QUFDekMsWUFBTSxJQUFJLE9BQU87QUFFakIsV0FBSyxTQUFTLElBQUlBO0FBQ2xCLFdBQUssTUFBTSxJQUFJO0FBQUEsSUFDbkI7QUFBQSxJQUVFLE1BQU0sUUFBUztBQUNiLFlBQU0sTUFBTSxNQUFNLEtBQUssU0FBUyxFQUFFLEtBQUk7QUFDdEMsYUFBTyxRQUFRLFNBQVksTUFBTSxLQUFLLE1BQU0sRUFBRSxHQUFHO0FBQUEsSUFDckQ7QUFBQSxJQUVFLE1BQU0sT0FBUSxNQUFNLFNBQVM7QUFDM0IsWUFBTSxPQUFPLE1BQU0sS0FBSyxTQUFTLEVBQUUsTUFBTSxNQUFNLE9BQU87QUFDdEQsWUFBTSxRQUFRLEtBQUssTUFBTTtBQUV6QixlQUFTaEUsS0FBSSxHQUFHQSxLQUFJLEtBQUssUUFBUUEsTUFBSztBQUNwQyxjQUFNLE1BQU0sS0FBS0EsRUFBQztBQUNsQixZQUFJLFFBQVEsT0FBVyxNQUFLQSxFQUFDLElBQUksTUFBTSxHQUFHO0FBQUEsTUFDaEQ7QUFFSSxhQUFPO0FBQUEsSUFDWDtBQUFBLElBRUUsTUFBTSxLQUFNLFNBQVM7QUFDbkIsWUFBTSxPQUFPLE1BQU0sS0FBSyxTQUFTLEVBQUUsSUFBSSxPQUFPO0FBQzlDLFlBQU0sUUFBUSxLQUFLLE1BQU07QUFFekIsZUFBU0EsS0FBSSxHQUFHQSxLQUFJLEtBQUssUUFBUUEsTUFBSztBQUNwQyxjQUFNLE1BQU0sS0FBS0EsRUFBQztBQUNsQixZQUFJLFFBQVEsT0FBVyxNQUFLQSxFQUFDLElBQUksTUFBTSxHQUFHO0FBQUEsTUFDaEQ7QUFFSSxhQUFPO0FBQUEsSUFDWDtBQUFBLEVBQ0E7QUFBQSxFQUVBLE1BQU0sc0NBQXNDLHNCQUFzQjtBQUFBLElBQ2hFLFlBQWEsSUFBSSxTQUFTZ0UsV0FBVTtBQUNsQyxZQUFNLElBQUksT0FBTztBQUNqQixXQUFLLFNBQVMsSUFBSUE7QUFBQSxJQUN0QjtBQUFBLElBRUUsTUFBTSxRQUFTO0FBQ2IsYUFBTyxLQUFLLFNBQVMsRUFBRSxLQUFJO0FBQUEsSUFDL0I7QUFBQSxJQUVFLE1BQU0sT0FBUSxNQUFNLFNBQVM7QUFDM0IsYUFBTyxLQUFLLFNBQVMsRUFBRSxNQUFNLE1BQU0sT0FBTztBQUFBLElBQzlDO0FBQUEsSUFFRSxNQUFNLEtBQU0sU0FBUztBQUNuQixhQUFPLEtBQUssU0FBUyxFQUFFLElBQUksT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDQTtBQUVBLGFBQVcsWUFBWSxDQUFDLDBCQUEwQiw2QkFBNkIsNkJBQTZCLEdBQUc7QUFDN0csYUFBUyxVQUFVLFFBQVEsU0FBVSxRQUFRLFNBQVM7QUFDcEQsV0FBSyxTQUFTLEVBQUUsS0FBSyxRQUFRLE9BQU87QUFBQSxJQUN4QztBQUVFLGFBQVMsVUFBVSxTQUFTLGlCQUFrQjtBQUM1QyxhQUFPLEtBQUssU0FBUyxFQUFFLE1BQUs7QUFBQSxJQUNoQztBQUFBLEVBQ0E7QUFFQSwyQkFBQSwyQkFBbUM7QUFDbkMsMkJBQUEsOEJBQXNDO0FBQ3RDLDJCQUFBLGdDQUF3Qzs7Ozs7Ozs7QUN2SHhDLFFBQU0sY0FBY3JCLG1CQUFBO0FBQ3BCLFFBQU0sRUFBRSxRQUFBSSxRQUFBLElBQVdGLGNBQUEsS0FBcUIsQ0FBQTtBQUN4QyxRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRixJQUFJUyxnQ0FBQTtBQUVKLFFBQU0sdUNBQXVCLFFBQVE7QUFDckMsUUFBTSxzQ0FBc0IsYUFBYTtBQUN6QyxRQUFNLG9DQUFvQixXQUFXO0FBQ3JDLFFBQU0scUNBQXFCLFlBQVk7QUFDdkMsUUFBTSwyQ0FBMkIsWUFBWTtBQUM3QyxRQUFNLHNDQUFzQixhQUFhO0FBQ3pDLFFBQU0sK0JBQWUsTUFBTTtBQUMzQixRQUFNLGlDQUFpQixRQUFRO0FBQy9CLFFBQU0sZ0NBQWdCLE9BQU87QUFFN0IsUUFBTSxjQUFjLElBQUksWUFBQTtBQUN4QixRQUFNLFdBQVcsRUFBRSxXQUFXLElBQUE7QUFHOUIscUJBQWlCLFNBQVUsRUFBRSxpQkFBaUI7QUFBQSxJQUM1QyxNQUFNLHlCQUF5QixjQUFjO0FBQUEsTUFDM0MsT0FBTyxTQUFVLFNBQVM7QUFDeEIsWUFBSSxXQUFXLE1BQU07QUFDbkIsaUJBQU87QUFBQSxRQUFBLFdBQ0UsQ0FBQyxRQUFRLFdBQVc7QUFDN0IsaUJBQU8sRUFBRSxHQUFHLFNBQVMsV0FBVyxJQUFBO0FBQUEsUUFBSSxPQUMvQjtBQUNMLGlCQUFPO0FBQUEsUUFBQTtBQUFBLE1BQ1Q7QUFBQTtBQUFBLE1BSUYsWUFBYSxJQUFJLE1BQU0sU0FBUztBQUU5QixjQUFNLEVBQUUsV0FBVyxVQUFVLEdBQUcsWUFBWSxpQkFBaUIsU0FBUyxPQUFPO0FBQzdFLGNBQU0sUUFBUSxDQUFBLEVBQUcsT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFBWSxVQUFRLEtBQUtBLE9BQU0sU0FBUyxDQUFDO0FBRy9ELGNBQU0sV0FBVyxVQUFVLFdBQVcsQ0FBQyxJQUFJO0FBQzNDLGNBQU0sT0FBTyxHQUFHLEtBQUssS0FBSztBQUkxQixZQUFJLENBQUMsTUFBTSxNQUFNLENBQUFBLFVBQVEsWUFBWSxPQUFPQSxLQUFJLEVBQUUsTUFBTSxRQUFLakQsS0FBSSxZQUFZQSxLQUFJLEdBQUcsQ0FBQyxHQUFHO0FBQ3RGLGdCQUFNLElBQUksWUFBWSxrQ0FBa0MsUUFBUSxNQUFNLEdBQUcsSUFBSTtBQUFBLFlBQzNFLE1BQU07QUFBQSxVQUFBLENBQ1A7QUFBQSxRQUFBO0FBR0gsY0FBTSxlQUFlLElBQUksUUFBUSxHQUFHLE9BQU87QUFFM0MsY0FBTSxjQUFjLE1BQU0sSUFBSSxDQUFBaUQsVUFBUSxZQUFZQSxRQUFPLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFDM0UsY0FBTSxnQkFBZ0IsR0FBRyxVQUFVLE1BQU07QUFDekMsY0FBTSxtQkFBbUIsYUFBYSxNQUFNLEdBQUcsRUFBRSxJQUFJLE9BQU8sYUFBYSxRQUFRO0FBS2pGLGFBQUssS0FBSyxJQUFJO0FBQ2QsYUFBSyxPQUFPLElBQUk7QUFDaEIsYUFBSyxVQUFVLElBQUk7QUFDbkIsYUFBSyxXQUFXLElBQUksR0FBRyxTQUFTLEdBQUcsT0FBTyxPQUFPLEtBQUssSUFBSTtBQUMxRCxhQUFLLGFBQWEsSUFBSSxJQUFJLFlBQVksWUFBWTtBQUNsRCxhQUFLLGlCQUFpQixJQUFJLElBQUksWUFBWSxnQkFBZ0I7QUFDMUQsYUFBSyxZQUFZLElBQUksSUFBSSxZQUFZLFdBQVc7QUFDaEQsYUFBSyxNQUFNLElBQUksSUFBSSxRQUFBO0FBQUEsTUFBUTtBQUFBLE1BRzdCLFVBQVcsS0FBSyxXQUFXLE9BQU87QUFDaEMsY0FBTSxTQUFTLFFBQVEsS0FBSyxZQUFZLElBQUksS0FBSyxhQUFhO0FBRTlELFlBQUksY0FBYyxRQUFRO0FBQ3hCLGlCQUFPLE9BQU8sT0FBTztBQUFBLFFBQUEsV0FDWixJQUFJLGVBQWUsR0FBRztBQUUvQixpQkFBTyxPQUFPLFNBQVM7QUFBQSxRQUFBLFdBQ2QsY0FBYyxRQUFRO0FBQy9CLGdCQUFNLE9BQU8sT0FBTztBQUNwQixnQkFBTSxTQUFTLElBQUksV0FBVyxLQUFLLGFBQWEsSUFBSSxVQUFVO0FBRTlELGlCQUFPLElBQUksTUFBTSxDQUFDO0FBQ2xCLGlCQUFPLElBQUksS0FBSyxLQUFLLFVBQVU7QUFFL0IsaUJBQU87QUFBQSxRQUFBLE9BQ0Y7QUFDTCxnQkFBTXhCLFVBQVMsT0FBTztBQUN0QixpQkFBT0ssUUFBTyxPQUFPLENBQUNMLFNBQVEsR0FBRyxHQUFHQSxRQUFPLGFBQWEsSUFBSSxVQUFVO0FBQUEsUUFBQTtBQUFBLE1BQ3hFO0FBQUE7QUFBQSxNQUlGLENBQUMsWUFBWSxFQUFHLE9BQU8sV0FBVztBQUNoQyxZQUFJLE1BQU0sUUFBUSxRQUFXO0FBQzNCLGdCQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUs7QUFBQSxRQUFBLFdBQzdDLE1BQU0sT0FBTyxRQUFXO0FBQ2pDLGdCQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sSUFBSSxXQUFXLEtBQUs7QUFBQSxRQUFBLE9BQy9DO0FBQ0wsZ0JBQU0sTUFBTSxLQUFLLGFBQWEsRUFBRSxTQUFTO0FBQUEsUUFBQTtBQUczQyxZQUFJLE1BQU0sUUFBUSxRQUFXO0FBQzNCLGdCQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUs7QUFBQSxRQUFBLFdBQzdDLE1BQU0sT0FBTyxRQUFXO0FBQ2pDLGdCQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sSUFBSSxXQUFXLEtBQUs7QUFBQSxRQUFBLE9BQy9DO0FBQ0wsZ0JBQU0sTUFBTSxLQUFLLGlCQUFpQixFQUFFLFNBQVM7QUFBQSxRQUFBO0FBQUEsTUFDL0M7QUFBQSxNQUdGLElBQUksU0FBVTtBQUNaLGVBQU8sS0FBSyxhQUFhLEVBQUU7QUFBQSxNQUFBO0FBQUEsTUFHN0IsSUFBSSxLQUFNO0FBQ1IsZUFBTyxLQUFLLEtBQUs7QUFBQSxNQUFBO0FBQUEsTUFHbkIsSUFBSSxTQUFVO0FBQ1osZUFBTyxLQUFLLE9BQU87QUFBQSxNQUFBO0FBQUEsTUFHckIsS0FBTSxRQUFRLE9BQU87QUFDbkIsZUFBTyxRQUFRLEtBQUssVUFBVSxJQUFJLEtBQUssV0FBVztBQUFBLE1BQUE7QUFBQSxNQUdwRCxNQUFNLE1BQU8sU0FBUztBQUdwQixlQUFPLEtBQUssT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLE1BQU07QUFBQSxNQUFBO0FBQUEsTUFHN0MsTUFBTSxLQUFNLEtBQUssT0FBTyxTQUFTO0FBQy9CLGVBQU8sS0FBSyxPQUFPLEVBQUUsSUFBSSxLQUFLLE9BQU8sT0FBTztBQUFBLE1BQUE7QUFBQSxNQUc5QyxNQUFNLEtBQU0sS0FBSyxTQUFTO0FBQ3hCLGVBQU8sS0FBSyxPQUFPLEVBQUUsSUFBSSxLQUFLLE9BQU87QUFBQSxNQUFBO0FBQUEsTUFHdkMsTUFBTSxTQUFVLE1BQU0sU0FBUztBQUM3QixlQUFPLEtBQUssT0FBTyxFQUFFLFFBQVEsTUFBTSxPQUFPO0FBQUEsTUFBQTtBQUFBLE1BRzVDLE1BQU0sS0FBTSxLQUFLLFNBQVM7QUFDeEIsZUFBTyxLQUFLLE9BQU8sRUFBRSxJQUFJLEtBQUssT0FBTztBQUFBLE1BQUE7QUFBQSxNQUd2QyxNQUFNLE9BQVEsWUFBWSxTQUFTO0FBQ2pDLGVBQU8sS0FBSyxPQUFPLEVBQUUsTUFBTSxZQUFZLE9BQU87QUFBQSxNQUFBO0FBQUE7QUFBQSxNQUloRCxNQUFNLE9BQVEsU0FBUztBQUVyQixhQUFLLFlBQVksRUFBRSxTQUFTLFFBQVEsV0FBVztBQUMvQyxlQUFPLEtBQUssS0FBSyxFQUFFLE1BQU0sT0FBTztBQUFBLE1BQUE7QUFBQTtBQUFBLE1BSWxDLFVBQVcsU0FBUztBQUVsQixhQUFLLFlBQVksRUFBRSxTQUFTLFFBQVEsV0FBVztBQUMvQyxjQUFNc0IsWUFBVyxLQUFLLEtBQUssRUFBRSxTQUFTLE9BQU87QUFDN0MsY0FBTSxRQUFRLEtBQUssTUFBTSxFQUFFLElBQUksS0FBSyxhQUFhLEVBQUUsS0FBSyxRQUFRLFFBQVEsV0FBVztBQUNuRixlQUFPLElBQUkseUJBQXlCLE1BQU0sU0FBU0EsV0FBVSxLQUFLO0FBQUEsTUFBQTtBQUFBLE1BR3BFLE1BQU8sU0FBUztBQUNkLGFBQUssWUFBWSxFQUFFLFNBQVMsUUFBUSxXQUFXO0FBQy9DLGNBQU1BLFlBQVcsS0FBSyxLQUFLLEVBQUUsS0FBSyxPQUFPO0FBQ3pDLGNBQU0sUUFBUSxLQUFLLE1BQU0sRUFBRSxJQUFJLEtBQUssYUFBYSxFQUFFLEtBQUssUUFBUSxRQUFRLFdBQVc7QUFDbkYsZUFBTyxJQUFJLDRCQUE0QixNQUFNLFNBQVNBLFdBQVUsS0FBSztBQUFBLE1BQUE7QUFBQSxNQUd2RSxRQUFTLFNBQVM7QUFDaEIsYUFBSyxZQUFZLEVBQUUsU0FBUyxRQUFRLFdBQVc7QUFDL0MsY0FBTUEsWUFBVyxLQUFLLEtBQUssRUFBRSxPQUFPLE9BQU87QUFDM0MsZUFBTyxJQUFJLDhCQUE4QixNQUFNLFNBQVNBLFNBQVE7QUFBQSxNQUFBO0FBQUEsSUFDbEU7QUFHRixXQUFPLEVBQUUsaUJBQUE7QUFBQSxFQUNYO0FBRUEsUUFBTSxpQkFBaUIsU0FBVSxRQUFRLFVBQVU7QUFDakQsV0FBTztBQUFBO0FBQUEsTUFFTCxHQUFHLE9BQU87QUFBQTtBQUFBLE1BR1YsaUJBQWlCO0FBQUEsTUFDakIsZUFBZTtBQUFBO0FBQUEsTUFHZixRQUFRLENBQUE7QUFBQTtBQUFBO0FBQUEsTUFJUixtQkFBbUIsQ0FBQTtBQUFBO0FBQUE7QUFBQSxNQUluQixHQUFHO0FBQUEsTUFFSCxXQUFXO0FBQUEsUUFDVCxNQUFNLGlCQUFpQixRQUFRLE1BQU07QUFBQSxRQUNyQyxRQUFRLGlCQUFpQixRQUFRLFFBQVE7QUFBQSxRQUN6QyxNQUFNLGlCQUFpQixRQUFRLE1BQU07QUFBQSxNQUFBO0FBQUE7RUFHM0M7QUFFQSxRQUFNLG1CQUFtQixTQUFVLFFBQVFoQixXQUFVO0FBRW5ELFdBQU8sT0FBTyxTQUFTLFVBQVVBLFNBQVEsSUFDckMsT0FBTyxZQUFZQSxTQUFRLEVBQUUsU0FBU0EsWUFDdEM7QUFBQSxFQUNOO0FBQUEsRUFFQSxNQUFNLFlBQVk7QUFBQSxJQUNoQixZQUFhLEtBQUs7QUFDaEIsV0FBSyxPQUFPO0FBQ1osV0FBSyxPQUFPLFlBQVksT0FBTyxHQUFHO0FBQ2xDLFdBQUssU0FBU0QsVUFBU0EsUUFBTyxLQUFLLEtBQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxLQUFLLFVBQVUsSUFBSSxDQUFBO0FBQUEsSUFBQztBQUFBLEVBRXJGO0FBQUEsRUFFQSxNQUFNLFFBQVE7QUFBQSxJQUNaLGNBQWU7QUFDYixXQUFLLDRCQUFZLElBQUE7QUFBQSxJQUFJO0FBQUEsSUFHdkIsSUFBSyxjQUFjLFdBQVc7QUFDNUIsVUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLFNBQVM7QUFFcEMsVUFBSSxVQUFVLFFBQVc7QUFDdkIsWUFBSSxjQUFjLFFBQVE7QUFDeEIsbUJBQVEsU0FBVW9CLGVBQWMsS0FBSztBQUVuQyxtQkFBTyxJQUFJLFNBQVNBLGFBQVk7QUFBQSxVQUFBLEdBQ2hDLEtBQUssTUFBTSxZQUFZO0FBQUEsUUFBQSxPQUNwQjtBQUNMLG1CQUFRLFNBQVVBLGVBQWMsS0FBSztBQUVuQyxtQkFBTyxJQUFJLE1BQU1BLGFBQVk7QUFBQSxVQUFBLEdBQzdCLEtBQUssTUFBTSxZQUFZO0FBQUEsUUFBQTtBQUczQixhQUFLLE1BQU0sSUFBSSxXQUFXLEtBQUs7QUFBQSxNQUFBO0FBR2pDLGFBQU87QUFBQSxJQUFBO0FBQUEsRUFFWDtBQUVBLFFBQU0sT0FBTyxTQUFVLEtBQUssTUFBTTtBQUNoQyxRQUFJLFFBQVE7QUFDWixRQUFJLE1BQU0sSUFBSTtBQUVkLFdBQU8sUUFBUSxPQUFPLElBQUksS0FBSyxNQUFNLEtBQU07QUFDM0MsV0FBTyxNQUFNLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFNO0FBRTdDLFdBQU8sSUFBSSxNQUFNLE9BQU8sR0FBRztBQUFBLEVBQzdCOzs7Ozs7O0FDMVFBLFFBQU0sRUFBRSxTQUFRLElBQUt4QixxQkFBQTtBQUNyQixRQUFNLEVBQUUsV0FBVSxJQUFLRSx1QkFBQTtBQUN2QixRQUFNLEVBQUUsYUFBWSxJQUFLUyxjQUFBO0FBQ3pCLFFBQU0sY0FBY0UsbUJBQUE7QUFDcEIsUUFBTSxnQkFBZ0JTLDBCQUFBO0FBQ3RCLFFBQU0sRUFBRSxpQkFBZ0IsSUFBS0csd0JBQUE7QUFDN0IsUUFBTSxFQUFFLG9CQUFvQixxQkFBb0IsSUFBS0MseUJBQUE7QUFDckQsUUFBTSxFQUFFLGtCQUFrQixxQkFBcUIsc0JBQXFCLElBQUtDLHdCQUFBO0FBQ3pFLFFBQU0sRUFBRSxvQkFBbUIsSUFBS0MsMkJBQUE7QUFDaEMsUUFBTSxFQUFFLGNBQWEsSUFBS0MsYUFBQTtBQUMxQixRQUFNLEVBQUUsY0FBYSxJQUFLQyxxQkFBQTtBQUMxQixRQUFNLEVBQUUsYUFBWSxJQUFLQyxvQkFBQTtBQUN6QixRQUFNLEVBQUUsWUFBWSxNQUFNLGNBQWMsZ0JBQWUsSUFBS0MsY0FBQTtBQUM1RCxRQUFNLEVBQUUscUJBQXFCLGFBQVksSUFBS0MsZ0JBQUE7QUFDOUMsUUFBTSxFQUFFLGNBQWEsSUFBS0MscUJBQUE7QUFDMUIsUUFBTSxlQUFlQyxvQkFBQTtBQUVyQixRQUFNLGFBQWEsdUJBQU8sV0FBVztBQUNyQyxRQUFNLGtCQUFrQix1QkFBTyxnQkFBZ0I7QUFDL0MsUUFBTSxTQUFTLHVCQUFPLE9BQU87QUFDN0IsUUFBTSxhQUFhLHVCQUFPLFdBQVc7QUFDckMsUUFBTSxXQUFXLHVCQUFPLFNBQVM7QUFDakMsUUFBTSxVQUFVLHVCQUFPLFFBQVE7QUFDL0IsUUFBTSxnQkFBZ0IsdUJBQU8sY0FBYztBQUMzQyxRQUFNLGdCQUFnQix1QkFBTyxjQUFjO0FBQzNDLFFBQU0sa0JBQWtCLHVCQUFPLGdCQUFnQjtBQUMvQyxRQUFNLGNBQWMsdUJBQU8sWUFBWTtBQUN2QyxRQUFNLGVBQWUsdUJBQU8sYUFBYTtBQUN6QyxRQUFNLGlCQUFpQix1QkFBTyxlQUFlO0FBQzdDLFFBQU0sZ0JBQWdCLHVCQUFPLGNBQWM7QUFDM0MsUUFBTSxjQUFjLHVCQUFPLFlBQVk7QUFBQSxFQUV2QyxNQUFNLHNCQUFzQixhQUFhO0FBQUEsSUFDdkMsWUFBYSxVQUFVLFNBQVM7QUFDOUIsWUFBSztBQUVMLFVBQUksT0FBTyxhQUFhLFlBQVksYUFBYSxNQUFNO0FBQ3JELGNBQU0sSUFBSSxVQUFVLGlEQUFpRDtBQUFBLE1BQzNFO0FBRUksZ0JBQVUsV0FBVyxPQUFPO0FBQzVCLFlBQU0sRUFBRSxhQUFhLGVBQWUsU0FBUyxHQUFHLFFBQU8sSUFBSztBQUU1RCxXQUFLLFVBQVUsSUFBSSxvQkFBSSxJQUFHO0FBQzFCLFdBQUssTUFBTSxJQUFJLElBQUksY0FBYTtBQUNoQyxXQUFLLFVBQVUsSUFBSTtBQUNuQixXQUFLLFFBQVEsSUFBSTtBQUNqQixXQUFLLE9BQU8sSUFBSTtBQUNoQixXQUFLLGFBQWEsSUFBSTtBQUN0QixXQUFLLGFBQWEsSUFBSTtBQUV0QixXQUFLLFFBQVEsSUFBSSxjQUFhO0FBQzlCLFdBQUssV0FBVyxTQUFTLFVBQVU7QUFBQSxRQUNqQyxjQUFjO0FBQUE7QUFBQSxRQUdkLFdBQVcsU0FBUyxjQUFjO0FBQUEsUUFDbEMsWUFBWSxTQUFTLGVBQWU7QUFBQSxRQUVwQyxXQUFXLFNBQVMsYUFBYSxDQUFBO0FBQUEsUUFDakMsUUFBUSxPQUFPLE9BQU8sQ0FBQSxHQUFJLFNBQVMsUUFBUTtBQUFBLFVBQ3pDLFNBQVM7QUFBQSxVQUNULE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxTQUNSO0FBQUEsT0FDRjtBQUdELFdBQUssYUFBYSxJQUFJLElBQUksYUFBYSxNQUFNO0FBQUEsUUFDM0MsRUFBRSxNQUFNLFFBQU87QUFBQSxRQUNmLEVBQUUsTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLFFBQU87QUFBQSxRQUM3QyxFQUFFLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxRQUFPO0FBQUEsUUFDN0MsRUFBRSxNQUFNLFNBQVMsWUFBWSxNQUFNLEtBQUssUUFBTztBQUFBLE9BQ2hEO0FBRUQsV0FBSyxXQUFXLElBQUksSUFBSSxXQUFXMUIsU0FBUSxJQUFJLENBQUM7QUFDaEQsV0FBSyxZQUFZLElBQUksS0FBSyxXQUFXLEVBQUUsU0FBUyxlQUFlLE1BQU07QUFDckUsV0FBSyxjQUFjLElBQUksS0FBSyxXQUFXLEVBQUUsU0FBUyxpQkFBaUIsTUFBTTtBQUd6RSxpQkFBV0osYUFBWSxLQUFLLFdBQVcsRUFBRSxVQUFTLEdBQUk7QUFDcEQsWUFBSSxDQUFDLEtBQUssU0FBUyxVQUFVQSxVQUFTLFVBQVUsR0FBRztBQUNqRCxlQUFLLFNBQVMsVUFBVUEsVUFBUyxVQUFVLElBQUk7QUFBQSxRQUN2RDtBQUFBLE1BQ0E7QUFFSSxXQUFLLGVBQWUsSUFBSTtBQUFBLFFBQ3RCLE9BQU87QUFBQSxRQUNQLE9BQU8sT0FBTyxPQUFPO0FBQUEsVUFDbkIsYUFBYSxLQUFLLFlBQVksRUFBRTtBQUFBLFVBQ2hDLGVBQWUsS0FBSyxjQUFjLEVBQUU7QUFBQSxRQUM1QyxDQUFPO0FBQUEsUUFDRCxhQUFhLE9BQU8sT0FBTztBQUFBLFVBQ3pCLGFBQWEsS0FBSyxZQUFZLEVBQUU7QUFBQSxVQUNoQyxlQUFlLEtBQUssY0FBYyxFQUFFO0FBQUEsUUFDNUMsQ0FBTztBQUFBLFFBQ0QsS0FBSyxPQUFPLE9BQU87QUFBQSxVQUNqQixhQUFhLEtBQUssWUFBWSxFQUFFO0FBQUEsUUFDeEMsQ0FBTztBQUFBLFFBQ0QsV0FBVyxPQUFPLE9BQU87QUFBQSxVQUN2QixhQUFhLEtBQUssWUFBWSxFQUFFO0FBQUEsU0FDakM7QUFBQSxNQUNQO0FBSUkscUJBQWUsTUFBTTtBQUNuQixZQUFJLEtBQUssVUFBVSxHQUFHO0FBQ3BCLGVBQUssS0FBSyxFQUFFLFNBQVMsTUFBSyxDQUFFLEVBQUUsTUFBTSxJQUFJO0FBQUEsUUFDaEQ7QUFBQSxNQUNBLENBQUs7QUFBQSxJQUNMO0FBQUEsSUFFRSxJQUFJLFNBQVU7QUFDWixhQUFPLEtBQUssT0FBTztBQUFBLElBQ3ZCO0FBQUEsSUFFRSxJQUFJLFNBQVU7QUFDWixhQUFPO0FBQUEsSUFDWDtBQUFBLElBRUUsWUFBYUEsV0FBVTtBQUNyQixhQUFPLEtBQUssV0FBVyxFQUFFLFNBQVNBLGFBQVksT0FBT0EsWUFBVyxLQUFLLFlBQVksQ0FBQztBQUFBLElBQ3RGO0FBQUEsSUFFRSxjQUFlQSxXQUFVO0FBQ3ZCLGFBQU8sS0FBSyxXQUFXLEVBQUUsU0FBU0EsYUFBWSxPQUFPQSxZQUFXLEtBQUssY0FBYyxDQUFDO0FBQUEsSUFDeEY7QUFBQSxJQUVFLE1BQU0sS0FBTSxTQUFTO0FBQ25CLGdCQUFVLEVBQUUsR0FBRyxLQUFLLFFBQVEsR0FBRyxHQUFHLFdBQVcsT0FBTyxFQUFDO0FBRXJELGNBQVEsa0JBQWtCLFFBQVEsb0JBQW9CO0FBQ3RELGNBQVEsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRO0FBR2xDLFlBQU0sV0FBVyxLQUFLLE1BQU0sU0FBUyxPQUFPLE9BQU8sS0FBSyxNQUFNLFNBQVM7QUFDdkUsWUFBTSxVQUFVLFFBQVE7QUFFeEIsVUFBSSxXQUFXLEtBQUssVUFBVSxHQUFHO0FBRS9CLGNBQU07QUFBQSxNQUNaO0FBR0kscUJBQWUsSUFBSTtBQUNuQixhQUFPLEtBQUssYUFBYSxNQUFNLEtBQU0sT0FBTSxLQUFLLGFBQWEsRUFBRSxNQUFNLElBQUk7QUFDekUscUJBQWUsSUFBSTtBQUVuQixVQUFJLFNBQVM7QUFDWCxZQUFJLEtBQUssT0FBTyxNQUFNLE9BQVEsT0FBTSxJQUFJLGFBQVk7QUFBQSxNQUMxRCxXQUFlLEtBQUssT0FBTyxNQUFNLFlBQVksS0FBSyxVQUFVLEdBQUc7QUFDekQsYUFBSyxVQUFVLElBQUk7QUFDbkIsYUFBSyxhQUFhLElBQUk7QUFDdEIsYUFBSyxhQUFhLEtBQUssWUFBWTtBQUNqQyxlQUFLLE9BQU8sSUFBSTtBQUVoQixjQUFJO0FBQ0YsaUJBQUssS0FBSyxTQUFTO0FBQ25CLGtCQUFNLEtBQUssTUFBTSxPQUFPO0FBQUEsVUFDbEMsU0FBaUIsS0FBSztBQUNaLGlCQUFLLE9BQU8sSUFBSTtBQUloQixpQkFBSyxNQUFNLEVBQUUsTUFBSztBQUVsQixnQkFBSTtBQUNGLG9CQUFNLEtBQUssZUFBZSxFQUFDO0FBQUEsWUFDdkMsU0FBbUIsYUFBYTtBQUVwQixvQkFBTSxjQUFjLENBQUMsS0FBSyxXQUFXLENBQUM7QUFBQSxZQUNsRDtBQUVVLGtCQUFNLElBQUksYUFBYSxHQUFHO0FBQUEsVUFDcEM7QUFFUSxlQUFLLE9BQU8sSUFBSTtBQUVoQixjQUFJLGFBQWEsTUFBTTtBQUNyQixnQkFBSTtBQUVKLGdCQUFJO0FBRUYsbUJBQUssYUFBYSxJQUFJO0FBQ3RCLG9CQUFNLFNBQVMsT0FBTztBQUFBLFlBQ2xDLFNBQW1CLEtBQUs7QUFDWix3QkFBVSxpQkFBaUIsR0FBRztBQUFBLFlBQzFDLFVBQVc7QUFDQyxtQkFBSyxhQUFhLElBQUk7QUFBQSxZQUNsQztBQUdVLGdCQUFJLFNBQVM7QUFDWCxtQkFBSyxPQUFPLElBQUk7QUFDaEIsbUJBQUssTUFBTSxFQUFFLE1BQUs7QUFFbEIsa0JBQUk7QUFDRixzQkFBTSxLQUFLLGVBQWUsRUFBQztBQUMzQixzQkFBTSxLQUFLLE9BQU07QUFBQSxjQUMvQixTQUFxQixVQUFVO0FBSWpCLHFCQUFLLGFBQWEsSUFBSTtBQUN0QiwwQkFBVSxjQUFjLENBQUMsU0FBUyxRQUFRLENBQUM7QUFBQSxjQUN6RDtBQUVZLG1CQUFLLE9BQU8sSUFBSTtBQUVoQixvQkFBTSxJQUFJLFlBQVksc0NBQXNDO0FBQUEsZ0JBQzFELE1BQU07QUFBQSxnQkFDTixPQUFPO0FBQUEsZUFDUjtBQUFBLFlBQ2I7QUFBQSxVQUNBO0FBRVEsZUFBSyxNQUFNLEVBQUUsTUFBSztBQUNsQixlQUFLLEtBQUssTUFBTTtBQUFBLFFBQ3hCLEdBQU87QUFFRCxZQUFJO0FBQ0YsZ0JBQU0sS0FBSyxhQUFhO0FBQUEsUUFDaEMsVUFBTztBQUNDLGVBQUssYUFBYSxJQUFJO0FBQUEsUUFDOUI7QUFBQSxNQUNBLFdBQWUsS0FBSyxPQUFPLE1BQU0sUUFBUTtBQUVuQyxjQUFNLElBQUksYUFBWTtBQUFBLE1BQzVCO0FBQUEsSUFDQTtBQUFBLElBRUUsTUFBTSxNQUFPLFNBQVM7QUFBQSxJQUFBO0FBQUEsSUFFdEIsTUFBTSxRQUFTO0FBRWIscUJBQWUsSUFBSTtBQUNuQixhQUFPLEtBQUssYUFBYSxNQUFNLEtBQU0sT0FBTSxLQUFLLGFBQWEsRUFBRSxNQUFNLElBQUk7QUFDekUscUJBQWUsSUFBSTtBQUVuQixVQUFJLEtBQUssT0FBTyxNQUFNLFVBQVUsS0FBSyxVQUFVLEdBQUc7QUFFaEQsY0FBTSxjQUFjLEtBQUssVUFBVTtBQUVuQyxhQUFLLFVBQVUsSUFBSTtBQUNuQixhQUFLLGFBQWEsSUFBSTtBQUN0QixhQUFLLGFBQWEsS0FBSyxZQUFZO0FBQ2pDLGVBQUssT0FBTyxJQUFJO0FBQ2hCLGVBQUssTUFBTSxFQUFFLE1BQUs7QUFFbEIsY0FBSTtBQUNGLGlCQUFLLEtBQUssU0FBUztBQUNuQixrQkFBTSxLQUFLLGVBQWUsRUFBQztBQUMzQixnQkFBSSxDQUFDLFlBQWEsT0FBTSxLQUFLLE9BQU07QUFBQSxVQUM3QyxTQUFpQixLQUFLO0FBQ1osaUJBQUssT0FBTyxJQUFJO0FBQ2hCLGlCQUFLLE1BQU0sRUFBRSxNQUFLO0FBQ2xCLGtCQUFNLElBQUksZUFBZSxHQUFHO0FBQUEsVUFDdEM7QUFFUSxlQUFLLE9BQU8sSUFBSTtBQUNoQixlQUFLLE1BQU0sRUFBRSxNQUFLO0FBQ2xCLGVBQUssS0FBSyxRQUFRO0FBQUEsUUFDMUIsR0FBTztBQUVELFlBQUk7QUFDRixnQkFBTSxLQUFLLGFBQWE7QUFBQSxRQUNoQyxVQUFPO0FBQ0MsZUFBSyxhQUFhLElBQUk7QUFBQSxRQUM5QjtBQUFBLE1BQ0EsV0FBZSxLQUFLLE9BQU8sTUFBTSxVQUFVO0FBRXJDLGNBQU0sSUFBSSxlQUFjO0FBQUEsTUFDOUI7QUFBQSxJQUNBO0FBQUEsSUFFRSxPQUFPLGVBQWUsSUFBSztBQUN6QixVQUFJLEtBQUssVUFBVSxFQUFFLFNBQVMsR0FBRztBQUMvQjtBQUFBLE1BQ047QUFHSSxZQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQzdDLFlBQU0sV0FBVyxVQUFVLElBQUksYUFBYTtBQUc1QyxhQUFPLFFBQVEsV0FBVyxRQUFRLEVBQUUsS0FBSyxPQUFPLFlBQVk7QUFDMUQsY0FBTUUsVUFBUyxDQUFBO0FBRWYsaUJBQVNsRCxLQUFJLEdBQUdBLEtBQUksUUFBUSxRQUFRQSxNQUFLO0FBQ3ZDLGNBQUksUUFBUUEsRUFBQyxFQUFFLFdBQVcsYUFBYTtBQUNyQyxpQkFBSyxVQUFVLEVBQUUsT0FBTyxVQUFVQSxFQUFDLENBQUM7QUFBQSxVQUM5QyxPQUFlO0FBQ0wsWUFBQWtELFFBQU8sS0FBSyxpQkFBaUIsUUFBUWxELEVBQUMsRUFBRSxNQUFNLENBQUM7QUFBQSxVQUN6RDtBQUFBLFFBQ0E7QUFFTSxZQUFJa0QsUUFBTyxTQUFTLEdBQUc7QUFDckIsZ0JBQU0sY0FBY0EsT0FBTTtBQUFBLFFBQ2xDO0FBQUEsTUFDQSxDQUFLO0FBQUEsSUFDTDtBQUFBLElBRUUsTUFBTSxTQUFVO0FBQUEsSUFBQTtBQUFBLElBRWhCLE1BQU0sSUFBSyxLQUFLLFNBQVM7QUFDdkIsZ0JBQVUsV0FBVyxTQUFTLEtBQUssZUFBZSxFQUFFLEtBQUs7QUFFekQsVUFBSSxLQUFLLE9BQU8sTUFBTSxXQUFXO0FBQy9CLGVBQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxJQUFJLEtBQUssT0FBTyxDQUFDO0FBQUEsTUFDekQ7QUFFSSxpQkFBVyxJQUFJO0FBRWYsWUFBTSxNQUFNLEtBQUssVUFBVSxHQUFHO0FBQzlCLFVBQUksSUFBSyxPQUFNO0FBRWYsWUFBTSxjQUFjLEtBQUssWUFBWSxRQUFRLFdBQVc7QUFDeEQsWUFBTSxnQkFBZ0IsS0FBSyxjQUFjLFFBQVEsYUFBYTtBQUM5RCxZQUFNLFlBQVksWUFBWTtBQUM5QixZQUFNLGNBQWMsY0FBYztBQUdsQyxVQUFJLFFBQVEsZ0JBQWdCLGFBQWEsUUFBUSxrQkFBa0IsYUFBYTtBQUU5RSxrQkFBVSxPQUFPLE9BQU8sSUFBSSxTQUFTLEVBQUUsYUFBYSxXQUFXLGVBQWUsWUFBVyxDQUFFO0FBQUEsTUFDakc7QUFFSSxZQUFNLGFBQWEsWUFBWSxPQUFPLEdBQUc7QUFDekMsWUFBTSxRQUFRLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsSUFBSSxHQUFHLE9BQU87QUFFbEYsVUFBSTtBQUNGLGVBQU8sVUFBVSxTQUFZLFFBQVEsY0FBYyxPQUFPLEtBQUs7QUFBQSxNQUNyRSxTQUFhNkIsTUFBSztBQUNaLGNBQU0sSUFBSSxZQUFZLDBCQUEwQjtBQUFBLFVBQzlDLE1BQU07QUFBQSxVQUNOLE9BQU9BO0FBQUEsU0FDUjtBQUFBLE1BQ1A7QUFBQSxJQUNBO0FBQUEsSUFFRSxNQUFNLEtBQU0sS0FBSyxTQUFTO0FBQ3hCLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxNQUFNLFFBQVMsTUFBTSxTQUFTO0FBQzVCLGdCQUFVLFdBQVcsU0FBUyxLQUFLLGVBQWUsRUFBRSxLQUFLO0FBRXpELFVBQUksS0FBSyxPQUFPLE1BQU0sV0FBVztBQUMvQixlQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssUUFBUSxNQUFNLE9BQU8sQ0FBQztBQUFBLE1BQzlEO0FBRUksaUJBQVcsSUFBSTtBQUVmLFVBQUksQ0FBQyxNQUFNLFFBQVEsSUFBSSxHQUFHO0FBQ3hCLGNBQU0sSUFBSSxVQUFVLDRDQUE0QztBQUFBLE1BQ3RFO0FBRUksVUFBSSxLQUFLLFdBQVcsR0FBRztBQUNyQixlQUFPLENBQUE7QUFBQSxNQUNiO0FBRUksWUFBTSxjQUFjLEtBQUssWUFBWSxRQUFRLFdBQVc7QUFDeEQsWUFBTSxnQkFBZ0IsS0FBSyxjQUFjLFFBQVEsYUFBYTtBQUM5RCxZQUFNLFlBQVksWUFBWTtBQUM5QixZQUFNLGNBQWMsY0FBYztBQUdsQyxVQUFJLFFBQVEsZ0JBQWdCLGFBQWEsUUFBUSxrQkFBa0IsYUFBYTtBQUM5RSxrQkFBVSxPQUFPLE9BQU8sSUFBSSxTQUFTLEVBQUUsYUFBYSxXQUFXLGVBQWUsWUFBVyxDQUFFO0FBQUEsTUFDakc7QUFFSSxZQUFNLGFBQWEsSUFBSSxNQUFNLEtBQUssTUFBTTtBQUV4QyxlQUFTL0UsS0FBSSxHQUFHQSxLQUFJLEtBQUssUUFBUUEsTUFBSztBQUNwQyxjQUFNLE1BQU0sS0FBS0EsRUFBQztBQUNsQixjQUFNLE1BQU0sS0FBSyxVQUFVLEdBQUc7QUFDOUIsWUFBSSxJQUFLLE9BQU07QUFFZixtQkFBV0EsRUFBQyxJQUFJLEtBQUssVUFBVSxZQUFZLE9BQU8sR0FBRyxHQUFHLFdBQVcsSUFBSTtBQUFBLE1BQzdFO0FBRUksWUFBTSxTQUFTLE1BQU0sS0FBSyxTQUFTLFlBQVksT0FBTztBQUV0RCxVQUFJO0FBQ0YsaUJBQVNBLEtBQUksR0FBR0EsS0FBSSxPQUFPLFFBQVFBLE1BQUs7QUFDdEMsY0FBSSxPQUFPQSxFQUFDLE1BQU0sUUFBVztBQUMzQixtQkFBT0EsRUFBQyxJQUFJLGNBQWMsT0FBTyxPQUFPQSxFQUFDLENBQUM7QUFBQSxVQUNwRDtBQUFBLFFBQ0E7QUFBQSxNQUNBLFNBQWEsS0FBSztBQUNaLGNBQU0sSUFBSSxZQUFZLG1DQUFtQyxPQUFPLE1BQU0sYUFBYTtBQUFBLFVBQ2pGLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxTQUNSO0FBQUEsTUFDUDtBQUVJLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxNQUFNLFNBQVUsTUFBTSxTQUFTO0FBQzdCLGFBQU8sSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFLEtBQUssTUFBUztBQUFBLElBQ2hEO0FBQUEsSUFFRSxNQUFNLElBQUssS0FBSyxPQUFPLFNBQVM7QUFDOUIsVUFBSSxDQUFDLEtBQUssTUFBTSxTQUFTLE1BQU07QUFJN0IsZUFBTyxLQUFLLE1BQU0sQ0FBQyxFQUFFLE1BQU0sT0FBTyxLQUFLLE1BQUssQ0FBRSxHQUFHLE9BQU87QUFBQSxNQUM5RDtBQUVJLGdCQUFVLFdBQVcsU0FBUyxLQUFLLGVBQWUsRUFBRSxLQUFLO0FBRXpELFVBQUksS0FBSyxPQUFPLE1BQU0sV0FBVztBQUMvQixlQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssSUFBSSxLQUFLLE9BQU8sT0FBTyxDQUFDO0FBQUEsTUFDaEU7QUFFSSxpQkFBVyxJQUFJO0FBRWYsWUFBTSxNQUFNLEtBQUssVUFBVSxHQUFHLEtBQUssS0FBSyxZQUFZLEtBQUs7QUFDekQsVUFBSSxJQUFLLE9BQU07QUFHZixZQUFNLGNBQWMsS0FBSyxZQUFZLFFBQVEsV0FBVztBQUN4RCxZQUFNLGdCQUFnQixLQUFLLGNBQWMsUUFBUSxhQUFhO0FBQzlELFlBQU0sWUFBWSxZQUFZO0FBQzlCLFlBQU0sY0FBYyxjQUFjO0FBQ2xDLFlBQU0sbUJBQW1CLEtBQUssYUFBYSxFQUFFO0FBQzdDLFlBQU0sV0FBVztBQUlqQixVQUFJLFlBQVksS0FBSyxlQUFlLEVBQUUsT0FBTztBQUMzQyxrQkFBVSxLQUFLLGVBQWUsRUFBRTtBQUFBLE1BQ3RDLFdBQWUsUUFBUSxnQkFBZ0IsYUFBYSxRQUFRLGtCQUFrQixhQUFhO0FBQ3JGLGtCQUFVLE9BQU8sT0FBTyxJQUFJLFNBQVMsRUFBRSxhQUFhLFdBQVcsZUFBZSxZQUFXLENBQUU7QUFBQSxNQUNqRztBQUVJLFlBQU0sYUFBYSxZQUFZLE9BQU8sR0FBRztBQUN6QyxZQUFNLGNBQWMsS0FBSyxVQUFVLFlBQVksV0FBVyxJQUFJO0FBQzlELFlBQU0sZUFBZSxjQUFjLE9BQU8sS0FBSztBQUUvQyxZQUFNLEtBQUssS0FBSyxhQUFhLGNBQWMsT0FBTztBQUVsRCxVQUFJLGtCQUFrQjtBQUNwQixjQUFNLEtBQUssT0FBTyxPQUFPLENBQUEsR0FBSSxVQUFVO0FBQUEsVUFDckMsTUFBTTtBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFNBQ0Q7QUFFRCxhQUFLLEtBQUssU0FBUyxDQUFDLEVBQUUsQ0FBQztBQUFBLE1BQzdCLE9BQVc7QUFFTCxhQUFLLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFBQSxNQUNqQztBQUFBLElBQ0E7QUFBQSxJQUVFLE1BQU0sS0FBTSxLQUFLLE9BQU8sU0FBUztBQUFBLElBQUE7QUFBQSxJQUVqQyxNQUFNLElBQUssS0FBSyxTQUFTO0FBQ3ZCLFVBQUksQ0FBQyxLQUFLLE1BQU0sU0FBUyxNQUFNO0FBRTdCLGVBQU8sS0FBSyxNQUFNLENBQUMsRUFBRSxNQUFNLE9BQU8sSUFBRyxDQUFFLEdBQUcsT0FBTztBQUFBLE1BQ3ZEO0FBRUksZ0JBQVUsV0FBVyxTQUFTLEtBQUssZUFBZSxFQUFFLEdBQUc7QUFFdkQsVUFBSSxLQUFLLE9BQU8sTUFBTSxXQUFXO0FBQy9CLGVBQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxJQUFJLEtBQUssT0FBTyxDQUFDO0FBQUEsTUFDekQ7QUFFSSxpQkFBVyxJQUFJO0FBRWYsWUFBTSxNQUFNLEtBQUssVUFBVSxHQUFHO0FBQzlCLFVBQUksSUFBSyxPQUFNO0FBR2YsWUFBTSxjQUFjLEtBQUssWUFBWSxRQUFRLFdBQVc7QUFDeEQsWUFBTSxZQUFZLFlBQVk7QUFDOUIsWUFBTSxtQkFBbUIsS0FBSyxhQUFhLEVBQUU7QUFDN0MsWUFBTSxXQUFXO0FBR2pCLFVBQUksWUFBWSxLQUFLLGVBQWUsRUFBRSxLQUFLO0FBQ3pDLGtCQUFVLEtBQUssZUFBZSxFQUFFO0FBQUEsTUFDdEMsV0FBZSxRQUFRLGdCQUFnQixXQUFXO0FBQzVDLGtCQUFVLE9BQU8sT0FBTyxDQUFBLEdBQUksU0FBUyxFQUFFLGFBQWEsVUFBUyxDQUFFO0FBQUEsTUFDckU7QUFFSSxZQUFNLGFBQWEsWUFBWSxPQUFPLEdBQUc7QUFDekMsWUFBTSxjQUFjLEtBQUssVUFBVSxZQUFZLFdBQVcsSUFBSTtBQUU5RCxZQUFNLEtBQUssS0FBSyxhQUFhLE9BQU87QUFFcEMsVUFBSSxrQkFBa0I7QUFDcEIsY0FBTSxLQUFLLE9BQU8sT0FBTyxDQUFBLEdBQUksVUFBVTtBQUFBLFVBQ3JDLE1BQU07QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxTQUNEO0FBRUQsYUFBSyxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUM7QUFBQSxNQUM3QixPQUFXO0FBRUwsYUFBSyxLQUFLLE9BQU8sR0FBRztBQUFBLE1BQzFCO0FBQUEsSUFDQTtBQUFBLElBRUUsTUFBTSxLQUFNLEtBQUssU0FBUztBQUFBLElBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUsxQixNQUFPLFlBQVksU0FBUztBQUMxQixVQUFJLENBQUMsVUFBVSxRQUFRO0FBQ3JCLG1CQUFXLElBQUk7QUFDZixlQUFPLEtBQUssY0FBYTtBQUFBLE1BQy9CO0FBRUksZ0JBQVUsV0FBVyxTQUFTLEtBQUssZUFBZSxFQUFFLEtBQUs7QUFDekQsYUFBTyxLQUFLLFdBQVcsRUFBRSxZQUFZLE9BQU87QUFBQSxJQUNoRDtBQUFBO0FBQUEsSUFHRSxPQUFPLFdBQVcsRUFBRyxZQUFZLFNBQVM7QUFFeEMsVUFBSSxLQUFLLE9BQU8sTUFBTSxXQUFXO0FBQy9CLGVBQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLEVBQUUsWUFBWSxPQUFPLENBQUM7QUFBQSxNQUN6RTtBQUVJLGlCQUFXLElBQUk7QUFFZixVQUFJLENBQUMsTUFBTSxRQUFRLFVBQVUsR0FBRztBQUM5QixjQUFNLElBQUksVUFBVSxrREFBa0Q7QUFBQSxNQUM1RTtBQUVJLFVBQUksV0FBVyxXQUFXLEdBQUc7QUFDM0I7QUFBQSxNQUNOO0FBRUksWUFBTSxTQUFTLFdBQVc7QUFDMUIsWUFBTSxxQkFBcUIsQ0FBQyxLQUFLLE1BQU0sU0FBUztBQUNoRCxZQUFNLG1CQUFtQixLQUFLLGFBQWEsRUFBRTtBQUM3QyxZQUFNLG1CQUFtQixtQkFBbUIsSUFBSSxNQUFNLE1BQU0sSUFBSTtBQUNoRSxZQUFNLG9CQUFvQixJQUFJLE1BQU0sTUFBTTtBQUMxQyxZQUFNZ0YsaUJBQWdCLHFCQUNsQixJQUFJLGNBQWMsTUFBTSxtQkFBbUIsZ0JBQWdCLElBQzNEO0FBRUosZUFBU2hGLEtBQUksR0FBR0EsS0FBSSxRQUFRQSxNQUFLO0FBSS9CLGNBQU0sS0FBSyxPQUFPLE9BQU8sQ0FBQSxHQUFJLFNBQVMsV0FBV0EsRUFBQyxDQUFDO0FBR25ELGNBQU0sUUFBUSxHQUFHLFNBQVM7QUFDMUIsY0FBTSxZQUFZLEdBQUcsWUFBWTtBQUNqQyxjQUFNLEtBQUssWUFBWSxHQUFHLFdBQVc7QUFFckMsY0FBTSxXQUFXLEdBQUcsVUFBVSxHQUFHLEdBQUc7QUFDcEMsWUFBSSxZQUFZLEtBQU0sT0FBTTtBQUU1QixXQUFHLGNBQWMsR0FBRyxZQUFZLEdBQUcsV0FBVztBQUU5QyxZQUFJLE9BQU87QUFDVCxnQkFBTSxhQUFhLEdBQUcsWUFBWSxHQUFHLEtBQUs7QUFDMUMsY0FBSSxjQUFjLEtBQU0sT0FBTTtBQUU5QixhQUFHLGdCQUFnQixHQUFHLGNBQWMsR0FBRyxhQUFhO0FBQUEsUUFDNUQsV0FBaUIsR0FBRyxTQUFTLE9BQU87QUFDNUIsZ0JBQU0sSUFBSSxVQUFVLG9FQUFvRTtBQUFBLFFBQ2hHO0FBRU0sWUFBSSxvQkFBb0I7QUFDdEIsY0FBSTtBQUNGLGlCQUFLLE1BQU0sU0FBUyxJQUFJLElBQUlnRixjQUFhO0FBR3pDLGVBQUcsY0FBYyxHQUFHLFlBQVksR0FBRyxXQUFXO0FBQzlDLGdCQUFJLE1BQU8sSUFBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsYUFBYTtBQUFBLFVBQ3pFLFNBQWlCLEtBQUs7QUFDWixrQkFBTSxJQUFJLFlBQVksdUNBQXVDO0FBQUEsY0FDM0QsTUFBTTtBQUFBLGNBQ04sT0FBTztBQUFBLGFBQ1I7QUFBQSxVQUNYO0FBQUEsUUFDQTtBQUdNLGNBQU0sY0FBYyxHQUFHO0FBQ3ZCLGNBQU0sZ0JBQWdCLFlBQVksT0FBTyxHQUFHLEdBQUc7QUFDL0MsY0FBTSxZQUFZLFlBQVk7QUFJOUIsY0FBTSxXQUFXLGFBQWEsQ0FBQyxhQUFhLEdBQUcsVUFBVSxJQUFJLEtBQUssR0FBRyxhQUFhO0FBQ2xGLGNBQU0sYUFBYSxhQUFhLENBQUMsV0FDN0Isb0JBQW9CLGVBQWUsV0FBVyxJQUFJLElBQUksSUFDdEQ7QUFHSixZQUFJLGFBQWEsQ0FBQyxVQUFVO0FBQzFCLGFBQUcsV0FBVztBQUFBLFFBQ3RCO0FBRU0sWUFBSSxrQkFBa0I7QUFHdEIsWUFBSSxvQkFBb0IsQ0FBQyxVQUFVO0FBR2pDLDRCQUFrQixPQUFPLE9BQU8sQ0FBQSxHQUFJLEVBQUU7QUFDdEMsMEJBQWdCLGFBQWE7QUFFN0IsY0FBSSxXQUFXO0FBRWIsNEJBQWdCLE1BQU07QUFDdEIsNEJBQWdCLGNBQWMsS0FBSyxZQUFZLFNBQVM7QUFBQSxVQUNsRTtBQUVRLDJCQUFpQmhGLEVBQUMsSUFBSTtBQUFBLFFBQzlCO0FBR00sV0FBRyxNQUFNLFdBQVcsYUFBYSxLQUFLLFVBQVUsWUFBWSxXQUFXLElBQUk7QUFDM0UsV0FBRyxjQUFjO0FBRWpCLFlBQUksT0FBTztBQUNULGdCQUFNLGdCQUFnQixHQUFHO0FBQ3pCLGdCQUFNLGVBQWUsY0FBYyxPQUFPLEdBQUcsS0FBSztBQUNsRCxnQkFBTSxjQUFjLGNBQWM7QUFFbEMsYUFBRyxRQUFRO0FBQ1gsYUFBRyxnQkFBZ0I7QUFFbkIsY0FBSSxvQkFBb0IsQ0FBQyxVQUFVO0FBQ2pDLDRCQUFnQixlQUFlO0FBRS9CLGdCQUFJLFdBQVc7QUFDYiw4QkFBZ0IsUUFBUTtBQUN4Qiw4QkFBZ0IsZ0JBQWdCLEtBQUssY0FBYyxXQUFXO0FBQUEsWUFDMUU7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUVNLDBCQUFrQkEsRUFBQyxJQUFJO0FBQUEsTUFDN0I7QUFPSSxZQUFNLEtBQUssT0FBTyxtQkFBbUIsT0FBTztBQUU1QyxVQUFJLGtCQUFrQjtBQUNwQixhQUFLLEtBQUssU0FBUyxnQkFBZ0I7QUFBQSxNQUN6QyxXQUFlLENBQUMsb0JBQW9CO0FBRTlCLGFBQUssS0FBSyxTQUFTLFVBQVU7QUFBQSxNQUNuQztBQUFBLElBQ0E7QUFBQSxJQUVFLE1BQU0sT0FBUSxZQUFZLFNBQVM7QUFBQSxJQUFBO0FBQUEsSUFFbkMsU0FBVSxNQUFNLFNBQVM7QUFDdkIsWUFBTSxRQUFRLGlCQUFpQixTQUFTLE9BQU87QUFDL0MsWUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUs7QUFFM0MsVUFBSSxDQUFDLEtBQUssTUFBTSxPQUFPLE1BQU07QUFDM0IsWUFBSTtBQUNGLGVBQUssTUFBTSxPQUFPLElBQUksVUFBVSxLQUFLO0FBQUEsUUFDN0MsU0FBZSxLQUFLO0FBQ1osZ0JBQU0sSUFBSSxZQUFZLHdDQUF3QztBQUFBLFlBQzVELE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxXQUNSO0FBQUEsUUFDVDtBQUFBLE1BQ0E7QUFFSSxhQUFPO0FBQUEsSUFDWDtBQUFBLElBRUUsVUFBVyxNQUFNLFNBQVM7QUFDeEIsYUFBTyxJQUFJLGlCQUFpQixNQUFNLE1BQU0sT0FBTztBQUFBLElBQ25EO0FBQUEsSUFFRSxVQUFXLEtBQUssV0FBVyxPQUFPO0FBQ2hDLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxNQUFNLE1BQU8sU0FBUztBQUNwQixnQkFBVSxXQUFXLFNBQVMsS0FBSyxlQUFlLEVBQUUsS0FBSztBQUV6RCxVQUFJLEtBQUssT0FBTyxNQUFNLFdBQVc7QUFDL0IsZUFBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUEsTUFDdEQ7QUFFSSxpQkFBVyxJQUFJO0FBRWYsWUFBTSxXQUFXO0FBQ2pCLFlBQU0sY0FBYyxLQUFLLFlBQVksUUFBUSxXQUFXO0FBRXhELGdCQUFVLGFBQWEsU0FBUyxXQUFXO0FBQzNDLGNBQVEsY0FBYyxZQUFZO0FBRWxDLFVBQUksUUFBUSxVQUFVLEdBQUc7QUFDdkIsY0FBTSxLQUFLLE9BQU8sT0FBTztBQUN6QixhQUFLLEtBQUssU0FBUyxRQUFRO0FBQUEsTUFDakM7QUFBQSxJQUNBO0FBQUEsSUFFRSxNQUFNLE9BQVEsU0FBUztBQUFBLElBQUE7QUFBQSxJQUV2QixTQUFVLFNBQVM7QUFDakIsWUFBTSxjQUFjLEtBQUssWUFBWSxXQUFXLFFBQVEsV0FBVztBQUNuRSxZQUFNLGdCQUFnQixLQUFLLGNBQWMsV0FBVyxRQUFRLGFBQWE7QUFFekUsZ0JBQVUsYUFBYSxTQUFTLFdBQVc7QUFDM0MsY0FBUSxPQUFPLFFBQVEsU0FBUztBQUNoQyxjQUFRLFNBQVMsUUFBUSxXQUFXO0FBR3BDLGNBQVEsaUJBQWlCLFdBQVcsSUFBSTtBQUN4QyxjQUFRLGlCQUFpQixhQUFhLElBQUk7QUFHMUMsY0FBUSxjQUFjLFlBQVk7QUFDbEMsY0FBUSxnQkFBZ0IsY0FBYztBQUV0QyxVQUFJLEtBQUssT0FBTyxNQUFNLFdBQVc7QUFDL0IsZUFBTyxJQUFJLGlCQUFpQixNQUFNLE9BQU87QUFBQSxNQUMvQztBQUVJLGlCQUFXLElBQUk7QUFDZixhQUFPLEtBQUssVUFBVSxPQUFPO0FBQUEsSUFDakM7QUFBQSxJQUVFLFVBQVcsU0FBUztBQUNsQixhQUFPLElBQUksaUJBQWlCLE1BQU0sT0FBTztBQUFBLElBQzdDO0FBQUEsSUFFRSxLQUFNLFNBQVM7QUFFYixZQUFNLGNBQWMsS0FBSyxZQUFZLFdBQVcsUUFBUSxXQUFXO0FBQ25FLFlBQU0sZ0JBQWdCLEtBQUssY0FBYyxXQUFXLFFBQVEsYUFBYTtBQUV6RSxnQkFBVSxhQUFhLFNBQVMsV0FBVztBQUczQyxjQUFRLGlCQUFpQixXQUFXLElBQUk7QUFDeEMsY0FBUSxpQkFBaUIsYUFBYSxJQUFJO0FBRzFDLGNBQVEsY0FBYyxZQUFZO0FBQ2xDLGNBQVEsZ0JBQWdCLGNBQWM7QUFFdEMsVUFBSSxLQUFLLE9BQU8sTUFBTSxXQUFXO0FBQy9CLGVBQU8sSUFBSSxvQkFBb0IsTUFBTSxPQUFPO0FBQUEsTUFDbEQ7QUFFSSxpQkFBVyxJQUFJO0FBQ2YsYUFBTyxLQUFLLE1BQU0sT0FBTztBQUFBLElBQzdCO0FBQUEsSUFFRSxNQUFPLFNBQVM7QUFDZCxhQUFPLElBQUksbUJBQW1CLE1BQU0sT0FBTztBQUFBLElBQy9DO0FBQUEsSUFFRSxPQUFRLFNBQVM7QUFDZixZQUFNLGNBQWMsS0FBSyxZQUFZLFdBQVcsUUFBUSxXQUFXO0FBQ25FLFlBQU0sZ0JBQWdCLEtBQUssY0FBYyxXQUFXLFFBQVEsYUFBYTtBQUV6RSxnQkFBVSxhQUFhLFNBQVMsV0FBVztBQUczQyxjQUFRLGlCQUFpQixXQUFXLElBQUk7QUFDeEMsY0FBUSxpQkFBaUIsYUFBYSxJQUFJO0FBRzFDLGNBQVEsY0FBYyxZQUFZO0FBQ2xDLGNBQVEsZ0JBQWdCLGNBQWM7QUFFdEMsVUFBSSxLQUFLLE9BQU8sTUFBTSxXQUFXO0FBQy9CLGVBQU8sSUFBSSxzQkFBc0IsTUFBTSxPQUFPO0FBQUEsTUFDcEQ7QUFFSSxpQkFBVyxJQUFJO0FBQ2YsYUFBTyxLQUFLLFFBQVEsT0FBTztBQUFBLElBQy9CO0FBQUEsSUFFRSxRQUFTLFNBQVM7QUFDaEIsYUFBTyxJQUFJLHFCQUFxQixNQUFNLE9BQU87QUFBQSxJQUNqRDtBQUFBLElBRUUsTUFBTyxJQUFJLFNBQVM7QUFDbEIsVUFBSSxPQUFPLE9BQU8sWUFBWTtBQUM1QixjQUFNLElBQUksVUFBVSx1Q0FBdUM7QUFBQSxNQUNqRTtBQUVJLFdBQUssTUFBTSxFQUFFLElBQUksU0FBVSxZQUFZO0FBQ3JDLFlBQUksQ0FBQyxXQUFZLElBQUU7QUFBQSxNQUN6QixHQUFPLE9BQU87QUFBQSxJQUNkO0FBQUEsSUFFRSxXQUFZLElBQUksU0FBUztBQUN2QixVQUFJLE9BQU8sT0FBTyxZQUFZO0FBQzVCLGNBQU0sSUFBSSxVQUFVLHVDQUF1QztBQUFBLE1BQ2pFO0FBRUksYUFBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEMsYUFBSyxNQUFNLEVBQUUsSUFBSSxTQUFVLFlBQVk7QUFDckMsY0FBSSxXQUFZLFFBQU8sVUFBVTtBQUFBLGNBQzVCLElBQUUsRUFBRyxLQUFLLFNBQVMsTUFBTTtBQUFBLFFBQ3RDLEdBQVMsT0FBTztBQUFBLE1BQ2hCLENBQUs7QUFBQSxJQUNMO0FBQUE7QUFBQSxJQUdFLGVBQWdCLFVBQVU7QUFDeEIsVUFBSSxPQUFPLGFBQWEsWUFBWSxhQUFhLFFBQy9DLE9BQU8sU0FBUyxVQUFVLFlBQVk7QUFDdEMsY0FBTSxJQUFJLFVBQVUsOENBQThDO0FBQUEsTUFDeEU7QUFFSSxXQUFLLFVBQVUsRUFBRSxJQUFJLFFBQVE7QUFBQSxJQUNqQztBQUFBO0FBQUEsSUFHRSxlQUFnQixVQUFVO0FBQ3hCLFdBQUssVUFBVSxFQUFFLE9BQU8sUUFBUTtBQUFBLElBQ3BDO0FBQUEsSUFFRSxnQkFBaUI7QUFDZixhQUFPLElBQUksb0JBQW9CLElBQUk7QUFBQSxJQUN2QztBQUFBLElBRUUsVUFBVyxLQUFLO0FBQ2QsVUFBSSxRQUFRLFFBQVEsUUFBUSxRQUFXO0FBQ3JDLGVBQU8sSUFBSSxZQUFZLG1DQUFtQztBQUFBLFVBQ3hELE1BQU07QUFBQSxTQUNQO0FBQUEsTUFDUDtBQUFBLElBQ0E7QUFBQSxJQUVFLFlBQWEsT0FBTztBQUNsQixVQUFJLFVBQVUsUUFBUSxVQUFVLFFBQVc7QUFDekMsZUFBTyxJQUFJLFlBQVkscUNBQXFDO0FBQUEsVUFDMUQsTUFBTTtBQUFBLFNBQ1A7QUFBQSxNQUNQO0FBQUEsSUFDQTtBQUFBLEVBQ0E7QUFFQSxRQUFNLEVBQUUsaUJBQWdCLElBQUtpRiwwQkFBbUMsRUFBRSxjQUFhLENBQUU7QUFFakYsZ0JBQUEsZ0JBQXdCO0FBQ3hCLGdCQUFBLG1CQUEyQjtBQUUzQixRQUFNLGFBQWEsU0FBVSxJQUFJO0FBQy9CLFFBQUksR0FBRyxPQUFPLE1BQU0sUUFBUTtBQUMxQixZQUFNLElBQUksWUFBWSx3QkFBd0I7QUFBQSxRQUM1QyxNQUFNO0FBQUEsT0FDUDtBQUFBLElBQ0w7QUFBQSxFQUNBO0FBRUEsUUFBTSxpQkFBaUIsU0FBVSxJQUFJO0FBQ25DLFFBQUksR0FBRyxhQUFhLEdBQUc7QUFDckIsWUFBTSxJQUFJLFlBQVksNkJBQTZCO0FBQUEsUUFDakQsTUFBTTtBQUFBLE9BQ1A7QUFBQSxJQUNMO0FBQUEsRUFDQTtBQUVBLFFBQU03QixXQUFVLFNBQVUsSUFBSTtBQUM1QixXQUFPLE9BQU8sS0FBSyxHQUFHLFNBQVMsU0FBUyxFQUNyQyxPQUFPLENBQUFwQyxPQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsVUFBVUEsRUFBQyxDQUFDO0FBQUEsRUFDM0M7QUFFQSxRQUFNLGdCQUFnQixTQUFVLFVBQVU7QUFDeEMsV0FBTyxTQUFTLE1BQUs7QUFBQSxFQUN2QjtBQUlBLFFBQU0sbUJBQW1CLFNBQVUsUUFBUTtBQUN6QyxRQUFJLGtCQUFrQixPQUFPO0FBQzNCLGFBQU87QUFBQSxJQUNYO0FBRUUsUUFBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLE1BQU0sTUFBTSxrQkFBa0I7QUFDL0QsYUFBTztBQUFBLElBQ1g7QUFFRSxVQUFNLE9BQU8sV0FBVyxPQUFPLFNBQVMsT0FBTztBQUMvQyxVQUFNLE1BQU0sdURBQXVELElBQUk7QUFFdkUsV0FBTyxJQUFJLFVBQVUsR0FBRztBQUFBLEVBQzFCO0FBQUEsRUFHQSxNQUFNLHFCQUFxQixZQUFZO0FBQUEsSUFDckMsWUFBYSxPQUFPO0FBQ2xCLFlBQU0sMkJBQTJCO0FBQUEsUUFDL0IsTUFBTTtBQUFBLFFBQ047QUFBQSxPQUNEO0FBQUEsSUFDTDtBQUFBLEVBQ0E7QUFBQSxFQUVBLE1BQU0sdUJBQXVCLFlBQVk7QUFBQSxJQUN2QyxZQUFhLE9BQU87QUFDbEIsWUFBTSw0QkFBNEI7QUFBQSxRQUNoQyxNQUFNO0FBQUEsUUFDTjtBQUFBLE9BQ0Q7QUFBQSxJQUNMO0FBQUEsRUFDQTs7Ozs7OztBQ3A2QkFrRSxrQkFBQSxnQkFBd0J2Qyx5QkFBNEI7QUFDcER1QyxrQkFBQSxtQkFBMkJ2Qyx5QkFBNEI7QUFDdkR1QyxrQkFBQSxtQkFBMkJyQywwQkFBK0I7QUFDMURxQyxrQkFBQSxzQkFBOEJyQywwQkFBK0I7QUFDN0RxQyxrQkFBQSx3QkFBZ0NyQywwQkFBK0I7QUFDL0RxQyxrQkFBQSx1QkFBK0I1Qiw4QkFBb0M7Ozs7Ozs7OztBQ0huRSxhQUFpQixTQUFTLGVBQWdCLFNBQVM7QUFDakQsVUFBTSxRQUFRLFFBQVEsUUFBUSxTQUFZLFFBQVEsTUFBTSxRQUFRLE9BQU8sU0FBWSxRQUFRLEtBQUs7QUFDaEcsVUFBTSxRQUFRLFFBQVEsUUFBUSxTQUFZLFFBQVEsTUFBTSxRQUFRLE9BQU8sU0FBWSxRQUFRLEtBQUs7QUFDaEcsVUFBTSxpQkFBaUIsUUFBUSxRQUFRO0FBQ3ZDLFVBQU0saUJBQWlCLFFBQVEsUUFBUTtBQUV2QyxRQUFJLFVBQVUsVUFBYSxVQUFVLFFBQVc7QUFDOUMsYUFBTyxZQUFZLE1BQU0sT0FBTyxPQUFPLGdCQUFnQixjQUFjO0FBQUEsSUFBQSxXQUM1RCxVQUFVLFFBQVc7QUFDOUIsYUFBTyxZQUFZLFdBQVcsT0FBTyxjQUFjO0FBQUEsSUFBQSxXQUMxQyxVQUFVLFFBQVc7QUFDOUIsYUFBTyxZQUFZLFdBQVcsT0FBTyxjQUFjO0FBQUEsSUFBQSxPQUM5QztBQUNMLGFBQU87QUFBQSxJQUFBO0FBQUEsRUFFWDs7Ozs7Ozs7QUNqQkEsUUFBTSxjQUFjLElBQUksWUFBVztBQUVuQyxnQkFBaUIsU0FBVSxNQUFNO0FBQy9CLFFBQUksU0FBUyxRQUFXO0FBRXRCLGFBQU87QUFBQSxJQUNYLFdBQWEsZ0JBQWdCLFlBQVk7QUFDckMsYUFBTztBQUFBLElBQ1gsV0FBYSxnQkFBZ0IsYUFBYTtBQUN0QyxhQUFPLElBQUksV0FBVyxJQUFJO0FBQUEsSUFDOUIsT0FBUztBQUVMLGFBQU8sWUFBWSxPQUFPLElBQUk7QUFBQSxJQUNsQztBQUFBLEVBQ0E7Ozs7Ozs7QUNkQSxRQUFNLEVBQUUsaUJBQWdCLElBQUtYLHFCQUFBO0FBQzdCLFFBQU0saUJBQWlCRSxnQkFBQTtBQUN2QixRQUFNc0MsZUFBYzdCLG1CQUFBO0FBRXBCLFFBQU0sU0FBUyx1QkFBTyxPQUFPO0FBQzdCLFFBQU0sWUFBWSx1QkFBTyxVQUFVO0FBQ25DLFFBQU0sV0FBVyx1QkFBTyxTQUFTO0FBQ2pDLFFBQU0sa0JBQWtCLHVCQUFPLGdCQUFnQjtBQUMvQyxRQUFNLFlBQVksdUJBQU8sVUFBVTtBQUNuQyxRQUFNLFlBQVksdUJBQU8sVUFBVTtBQUNuQyxRQUFNLFNBQVMsdUJBQU8sT0FBTztBQUM3QixRQUFNLGVBQWUsQ0FBQTtBQUFBLEVBRXJCLE1BQU0saUJBQWlCLGlCQUFpQjtBQUFBLElBQ3RDLFlBQWEsSUFBSSxVQUFVLFNBQVM7QUFDbEMsWUFBTSxJQUFJLE9BQU87QUFFakIsV0FBSyxNQUFNLElBQUksQ0FBQTtBQUNmLFdBQUssU0FBUyxJQUFJLEtBQUssVUFBVTtBQUNqQyxXQUFLLFFBQVEsSUFBSTtBQUNqQixXQUFLLGVBQWUsSUFBSSxFQUFFLEdBQUcsUUFBTztBQUNwQyxXQUFLLFNBQVMsSUFBSTtBQUNsQixXQUFLLFNBQVMsSUFBSTtBQUNsQixXQUFLLE1BQU0sSUFBSTtBQUFBLElBQ25CO0FBQUE7QUFBQTtBQUFBLElBSUUsTUFBTSxPQUFRLE1BQU0sU0FBUztBQUMzQixXQUFLLE1BQU0sSUFBSTtBQUVmLFVBQUksS0FBSyxTQUFTLEdBQUc7QUFDbkIsZUFBTyxDQUFBO0FBQUEsTUFDYjtBQUVJLFVBQUksS0FBSyxNQUFNLEVBQUUsU0FBUyxHQUFHO0FBRTNCLGVBQU8sS0FBSyxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUUsTUFBTTtBQUN6QyxlQUFPLEtBQUssTUFBTSxFQUFFLE9BQU8sR0FBRyxJQUFJO0FBQUEsTUFDeEM7QUFHSSxVQUFJLEtBQUssU0FBUyxNQUFNLFFBQVc7QUFDakMsWUFBSSxLQUFLLFFBQVEsRUFBRSxTQUFTO0FBQzFCLGVBQUssZUFBZSxFQUFFLEtBQUssS0FBSyxTQUFTO0FBQ3pDLGVBQUssZUFBZSxFQUFFLE1BQU07QUFBQSxRQUNwQyxPQUFhO0FBQ0wsZUFBSyxlQUFlLEVBQUUsS0FBSyxLQUFLLFNBQVM7QUFDekMsZUFBSyxlQUFlLEVBQUUsTUFBTTtBQUFBLFFBQ3BDO0FBQUEsTUFDQTtBQUVJLFVBQUk4QjtBQUVKLFVBQUk7QUFDRixRQUFBQSxZQUFXLGVBQWUsS0FBSyxlQUFlLENBQUM7QUFBQSxNQUNyRCxTQUFhdEUsSUFBRztBQUdWLGFBQUssU0FBUyxJQUFJO0FBQ2xCLGVBQU8sQ0FBQTtBQUFBLE1BQ2I7QUFFSSxZQUFNLGNBQWMsS0FBSyxHQUFHLEdBQUcsWUFBWSxDQUFDLEtBQUssU0FBUyxDQUFDLEdBQUcsVUFBVTtBQUN4RSxZQUFNLFFBQVEsWUFBWSxZQUFZLEtBQUssU0FBUyxDQUFDO0FBQ3JELFlBQU0sVUFBVSxDQUFBO0FBRWhCLFlBQU0sVUFBVSxJQUFJLFFBQVEsU0FBVSxTQUFTLFFBQVE7QUFFckQsb0JBQVksVUFBVSxNQUFNO0FBQzFCLGlCQUFPLFlBQVksU0FBUyxJQUFJLE1BQU0saUJBQWlCLENBQUM7QUFBQSxRQUNoRTtBQUVNLG9CQUFZLGFBQWEsTUFBTTtBQUM3QixrQkFBUSxPQUFPO0FBQUEsUUFDdkI7QUFBQSxNQUNBLENBQUs7QUFFRCxVQUFJLENBQUMsS0FBSyxRQUFRLEVBQUUsU0FBUztBQUMzQixZQUFJO0FBQ0osWUFBSTtBQUVKLGNBQU0sV0FBVyxNQUFNO0FBRXJCLGNBQUksU0FBUyxVQUFhLFdBQVcsT0FBVztBQUVoRCxnQkFBTSxTQUFTLEtBQUssSUFBSSxLQUFLLFFBQVEsT0FBTyxNQUFNO0FBRWxELGNBQUksV0FBVyxLQUFLLFNBQVMsVUFBVTtBQUNyQyxpQkFBSyxTQUFTLElBQUk7QUFBQSxVQUM1QixPQUFlO0FBQ0wsaUJBQUssU0FBUyxJQUFJLEtBQUssU0FBUyxDQUFDO0FBQUEsVUFDM0M7QUFHUSxrQkFBUSxTQUFTO0FBR2pCLG1CQUFTZCxLQUFJLEdBQUdBLEtBQUksUUFBUUEsTUFBSztBQUMvQixrQkFBTSxNQUFNLEtBQUtBLEVBQUM7QUFDbEIsa0JBQU0sUUFBUSxPQUFPQSxFQUFDO0FBRXRCLG9CQUFRQSxFQUFDLElBQUk7QUFBQSxjQUNYLEtBQUssUUFBUSxFQUFFLE9BQU9tRixhQUFZLEdBQUcsSUFBSTtBQUFBLGNBQ3pDLEtBQUssUUFBUSxFQUFFLFNBQVNBLGFBQVksS0FBSyxJQUFJO0FBQUEsWUFDekQ7QUFBQSxVQUNBO0FBRVEsc0JBQVksV0FBVztBQUFBLFFBQy9CO0FBSU0sWUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLE9BQU8sVUFBVTtBQUMxQyxnQkFBTSxXQUFXQyxXQUFVLE9BQU8sV0FBVyxPQUFPLE1BQVMsRUFBRSxZQUFZLENBQUMsT0FBTztBQUNqRixtQkFBTyxHQUFHLE9BQU87QUFDakIscUJBQVE7QUFBQSxVQUNsQjtBQUFBLFFBQ0EsT0FBYTtBQUNMLGlCQUFPLENBQUE7QUFDUCxtQkFBUTtBQUFBLFFBQ2hCO0FBRU0sWUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRO0FBQ3pCLGdCQUFNLE9BQU9BLFdBQVUsT0FBTyxXQUFXLE9BQU8sTUFBUyxFQUFFLFlBQVksQ0FBQyxPQUFPO0FBQzdFLHFCQUFTLEdBQUcsT0FBTztBQUNuQixxQkFBUTtBQUFBLFVBQ2xCO0FBQUEsUUFDQSxPQUFhO0FBQ0wsbUJBQVMsQ0FBQTtBQUNULG1CQUFRO0FBQUEsUUFDaEI7QUFBQSxNQUNBLE9BQVc7QUFHTCxjQUFNLFNBQVMsQ0FBQyxLQUFLLFFBQVEsRUFBRSxVQUFVLE1BQU0sZ0JBQWdCLGtCQUFrQjtBQUVqRixjQUFNLE1BQU0sRUFBRUEsV0FBVSxNQUFNLEVBQUUsWUFBWSxDQUFDLE9BQU87QUFDbEQsZ0JBQU0sU0FBUyxHQUFHLE9BQU87QUFFekIsY0FBSSxRQUFRO0FBQ1Ysa0JBQU0sRUFBRSxLQUFLLFVBQVU7QUFDdkIsaUJBQUssU0FBUyxJQUFJO0FBRWxCLG9CQUFRLEtBQUs7QUFBQSxjQUNYLEtBQUssUUFBUSxFQUFFLFFBQVEsUUFBUSxTQUFZRCxhQUFZLEdBQUcsSUFBSTtBQUFBLGNBQzlELEtBQUssUUFBUSxFQUFFLFVBQVUsVUFBVSxTQUFZQSxhQUFZLEtBQUssSUFBSTtBQUFBLGFBQ3JFO0FBRUQsZ0JBQUksUUFBUSxTQUFTLE1BQU07QUFDekIscUJBQU8sU0FBUTtBQUFBLFlBQzNCLE9BQWlCO0FBQ0wsMEJBQVksV0FBVztBQUFBLFlBQ25DO0FBQUEsVUFDQSxPQUFlO0FBQ0wsaUJBQUssU0FBUyxJQUFJO0FBQUEsVUFDNUI7QUFBQSxRQUNBO0FBQUEsTUFDQTtBQUVJLGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFRSxNQUFNLFFBQVM7QUFDYixVQUFJLEtBQUssTUFBTSxFQUFFLFNBQVMsR0FBRztBQUMzQixlQUFPLEtBQUssTUFBTSxFQUFFLE1BQUs7QUFBQSxNQUMvQjtBQUVJLFVBQUksQ0FBQyxLQUFLLFNBQVMsR0FBRztBQUNwQixZQUFJLE9BQU8sS0FBSyxJQUFJLEtBQUssS0FBSyxRQUFRLEtBQUssS0FBSztBQUVoRCxZQUFJLEtBQUssTUFBTSxHQUFHO0FBRWhCLGVBQUssTUFBTSxJQUFJO0FBQ2YsaUJBQU87QUFBQSxRQUNmO0FBRU0sYUFBSyxNQUFNLElBQUksTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZO0FBR25ELGVBQU8sS0FBSyxNQUFNLEVBQUUsTUFBSztBQUFBLE1BQy9CO0FBQUEsSUFDQTtBQUFBLElBRUUsTUFBTSxLQUFNLFNBQVM7QUFDbkIsV0FBSyxNQUFNLElBQUk7QUFHZixZQUFNLFFBQVEsS0FBSyxNQUFNLEVBQUUsT0FBTyxHQUFHLEtBQUssTUFBTSxFQUFFLE1BQU07QUFDeEQsWUFBTSxPQUFPLEtBQUssUUFBUSxLQUFLLFFBQVEsTUFBTTtBQUU3QyxVQUFJLFFBQVEsR0FBRztBQUNiLGVBQU87QUFBQSxNQUNiO0FBRUksVUFBSSxVQUFVLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWTtBQUNsRCxVQUFJLE1BQU0sU0FBUyxFQUFHLFdBQVUsTUFBTSxPQUFPLE9BQU87QUFFcEQsYUFBTztBQUFBLElBQ1g7QUFBQSxJQUVFLE1BQU8sUUFBUSxTQUFTO0FBQ3RCLFdBQUssTUFBTSxJQUFJO0FBQ2YsV0FBSyxNQUFNLElBQUksQ0FBQTtBQUNmLFdBQUssU0FBUyxJQUFJO0FBQ2xCLFdBQUssU0FBUyxJQUFJO0FBR2xCLFdBQUssZUFBZSxJQUFJLEVBQUUsR0FBRyxLQUFLLFFBQVEsRUFBQztBQUUzQyxVQUFJQztBQUVKLFVBQUk7QUFDRixRQUFBQSxZQUFXLGVBQWUsS0FBSyxRQUFRLENBQUM7QUFBQSxNQUM5QyxTQUFhdEUsSUFBRztBQUNWLGFBQUssU0FBUyxJQUFJO0FBQ2xCO0FBQUEsTUFDTjtBQUVJLFVBQUlzRSxjQUFhLFFBQVEsQ0FBQ0EsVUFBUyxTQUFTLE1BQU0sR0FBRztBQUNuRCxhQUFLLFNBQVMsSUFBSTtBQUFBLE1BQ3hCLFdBQWUsS0FBSyxRQUFRLEVBQUUsU0FBUztBQUNqQyxhQUFLLGVBQWUsRUFBRSxNQUFNO0FBQUEsTUFDbEMsT0FBVztBQUNMLGFBQUssZUFBZSxFQUFFLE1BQU07QUFBQSxNQUNsQztBQUFBLElBQ0E7QUFBQSxFQUNBO0FBRUEsV0FBQSxXQUFtQjtBQUVuQixXQUFTLFlBQWEsYUFBYTtBQUVqQyxRQUFJLE9BQU8sWUFBWSxXQUFXLFlBQVk7QUFDNUMsa0JBQVksT0FBTTtBQUFBLElBQ3RCO0FBQUEsRUFDQTs7Ozs7Ozs7QUM1T0EsVUFBaUIsZUFBZUMsT0FBTyxJQUFJLFVBQVVELFdBQVUsU0FBUztBQUN0RSxRQUFJLFFBQVEsVUFBVSxFQUFHO0FBRXpCLFVBQU0sY0FBYyxHQUFHLEdBQUcsWUFBWSxDQUFDLFFBQVEsR0FBRyxXQUFXO0FBQzdELFVBQU0sUUFBUSxZQUFZLFlBQVksUUFBUTtBQUU5QyxRQUFJLFFBQVE7QUFFWixVQUFNLFVBQVUsSUFBSSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBQ3JELGtCQUFZLGFBQWE7QUFFekIsa0JBQVksVUFBVSxXQUFZO0FBQ2hDLGVBQU8sWUFBWSxTQUFTLElBQUksTUFBTSxpQkFBaUIsQ0FBQztBQUFBLE1BQzlEO0FBQUEsSUFDQSxDQUFHO0FBSUQsVUFBTSxTQUFTLE1BQU0sZ0JBQWdCLGtCQUFrQjtBQUN2RCxVQUFNLFlBQVksUUFBUSxVQUFVLFNBQVM7QUFFN0MsVUFBTSxNQUFNLEVBQUVBLFdBQVUsU0FBUyxFQUFFLFlBQVksU0FBVSxJQUFJO0FBQzNELFlBQU0sU0FBUyxHQUFHLE9BQU87QUFFekIsVUFBSSxRQUFRO0FBRVYsY0FBTSxPQUFPLE9BQU8sR0FBRyxFQUFFLFlBQVksV0FBWTtBQUMvQyxjQUFJLFFBQVEsU0FBUyxLQUFLLEVBQUUsUUFBUSxRQUFRLE9BQU87QUFDakQsbUJBQU8sU0FBUTtBQUFBLFVBQ3pCO0FBQUEsUUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNBO0FBRUUsV0FBTztBQUFBLEVBQ1Q7Ozs7Ozs7QUNqQ0EsUUFBTSxFQUFFLGNBQUEsSUFBa0J6QyxxQkFBQTtBQUMxQixRQUFNLEVBQUUsU0FBQSxJQUFhRSxnQkFBQTtBQUNyQixRQUFNc0MsZUFBYzdCLG1CQUFBO0FBQ3BCLFFBQU0rQixTQUFRN0IsYUFBQTtBQUNkLFFBQU0saUJBQWlCUyxnQkFBQTtBQUd2QixRQUFNLGlCQUFpQjtBQUV2QixRQUFNLDhCQUFjLEtBQUs7QUFDekIsUUFBTSxxQ0FBcUIsWUFBWTtBQUN2QyxRQUFNLG1DQUFtQixVQUFVO0FBQ25DLFFBQU0sa0NBQWtCLFNBQVM7QUFDakMsUUFBTSxnQ0FBZ0IsT0FBTztBQUM3QixRQUFNLHFDQUFxQixZQUFZO0FBQUEsRUFFdkMsTUFBTSxxQkFBcUIsY0FBYztBQUFBLElBQ3ZDLFlBQWEsVUFBVSxTQUFTO0FBQzlCLFlBQU0sRUFBRSxRQUFRLFNBQVMsR0FBRyxRQUFBLElBQVksV0FBVyxDQUFBO0FBRW5ELFlBQU07QUFBQSxRQUNKLFdBQVcsRUFBRSxNQUFNLEtBQUE7QUFBQSxRQUNuQixXQUFXO0FBQUEsUUFDWCxpQkFBaUI7QUFBQSxRQUNqQixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsU0FDTCxPQUFPO0FBRVYsVUFBSSxPQUFPLGFBQWEsWUFBWSxhQUFhLElBQUk7QUFDbkQsY0FBTSxJQUFJLFVBQVUsMERBQTBEO0FBQUEsTUFBQTtBQUloRixXQUFLLFNBQVMsSUFBSTtBQUNsQixXQUFLLFdBQVcsSUFBSSxVQUFVLE9BQU8saUJBQWlCO0FBQ3RELFdBQUssUUFBUSxJQUFJLFNBQVMsV0FBVyxHQUFHLEVBQUU7QUFDMUMsV0FBSyxJQUFJLElBQUk7QUFBQSxJQUFBO0FBQUEsSUFHZixJQUFJLFdBQVk7QUFDZCxhQUFPLEtBQUssU0FBUztBQUFBLElBQUE7QUFBQSxJQUd2QixJQUFJLGFBQWM7QUFDaEIsYUFBTyxLQUFLLFdBQVc7QUFBQSxJQUFBO0FBQUEsSUFHekIsSUFBSSxVQUFXO0FBQ2IsYUFBTyxLQUFLLFFBQVE7QUFBQSxJQUFBO0FBQUE7QUFBQSxJQUl0QixJQUFJLEtBQU07QUFDUixhQUFPLEtBQUssSUFBSTtBQUFBLElBQUE7QUFBQSxJQUdsQixJQUFJLE9BQVE7QUFDVixhQUFPO0FBQUEsSUFBQTtBQUFBLElBR1QsTUFBTSxNQUFPLFNBQVM7QUFDcEIsWUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLFNBQVMsR0FBRyxLQUFLLFFBQVEsQ0FBQztBQUVsRixjQUFRLGtCQUFrQixDQUFDLE9BQU87QUFDaEMsY0FBTSxLQUFLLEdBQUcsT0FBTztBQUVyQixZQUFJLENBQUMsR0FBRyxpQkFBaUIsU0FBUyxLQUFLLFNBQVMsQ0FBQyxHQUFHO0FBQ2xELGFBQUcsa0JBQWtCLEtBQUssU0FBUyxDQUFDO0FBQUEsUUFBQTtBQUFBLE1BQ3RDO0FBR0YsYUFBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEMsZ0JBQVEsVUFBVSxXQUFZO0FBQzVCLGlCQUFPLFFBQVEsU0FBUyxJQUFJLE1BQU0sZUFBZSxDQUFDO0FBQUEsUUFBQTtBQUdwRCxnQkFBUSxZQUFZLE1BQU07QUFDeEIsZUFBSyxJQUFJLElBQUksUUFBUTtBQUNyQixrQkFBQTtBQUFBLFFBQVE7QUFBQSxNQUNWLENBQ0Q7QUFBQSxJQUFBO0FBQUEsSUFHSCxDQUFDLE1BQU0sRUFBRyxNQUFNO0FBQ2QsWUFBTSxjQUFjLEtBQUssSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLFNBQVMsQ0FBQyxHQUFHLElBQUk7QUFDbEUsYUFBTyxZQUFZLFlBQVksS0FBSyxTQUFTLENBQUM7QUFBQSxJQUFBO0FBQUEsSUFHaEQsQ0FBQyxXQUFXLEVBQUcsU0FBUztBQUN0QixZQUFNLGNBQWMsUUFBUTtBQUU1QixhQUFPLElBQUksUUFBUSxTQUFVLFNBQVMsUUFBUTtBQUc1QyxvQkFBWSxVQUFVLFdBQVk7QUFDaEMsaUJBQU8sWUFBWSxTQUFTLElBQUksTUFBTSxpQkFBaUIsQ0FBQztBQUFBLFFBQUE7QUFHMUQsb0JBQVksYUFBYSxXQUFZO0FBQ25DLGtCQUFRLFFBQVEsTUFBTTtBQUFBLFFBQUE7QUFBQSxNQUN4QixDQUNEO0FBQUEsSUFBQTtBQUFBLElBR0gsTUFBTSxLQUFNLEtBQUssU0FBUztBQUN4QixZQUFNLFFBQVEsS0FBSyxNQUFNLEVBQUUsVUFBVTtBQUNyQyxZQUFNLFVBQVUsTUFBTSxJQUFJLEdBQUc7QUFDN0IsWUFBTSxRQUFRLE1BQU0sS0FBSyxXQUFXLEVBQUUsT0FBTztBQUU3QyxhQUFPa0IsYUFBWSxLQUFLO0FBQUEsSUFBQTtBQUFBLElBRzFCLE1BQU0sU0FBVSxNQUFNLFNBQVM7QUFDN0IsWUFBTSxRQUFRLEtBQUssTUFBTSxFQUFFLFVBQVU7QUFDckMsWUFBTW5CLFlBQVcsS0FBSyxPQUFBO0FBR3RCLFlBQU1wRSxLQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssTUFBTTtBQUNsQyxZQUFNLE9BQU8sSUFBSSxNQUFNQSxFQUFDO0FBQ3hCLFlBQU0sU0FBUyxJQUFJLE1BQU0sS0FBSyxNQUFNO0FBRXBDLFVBQUksV0FBVztBQUNmLFVBQUksUUFBUTtBQUVaLFlBQU0sTUFBTSxpQkFBa0I7QUFDNUIsWUFBSTtBQUNGLHFCQUFXLE9BQU9vRSxXQUFVO0FBQzFCLGdCQUFJLE1BQU87QUFFWCxrQkFBTSxhQUFhO0FBQ25CLGtCQUFNLFVBQVUsTUFBTSxJQUFJLEdBQUc7QUFFN0Isa0JBQU0sSUFBSSxRQUFRLFNBQVUsU0FBUyxRQUFRO0FBQzNDLHNCQUFRLFlBQVksTUFBTTtBQUN4Qix1QkFBTyxVQUFVLElBQUltQixhQUFZLFFBQVEsTUFBTTtBQUMvQyx3QkFBQTtBQUFBLGNBQVE7QUFHVixzQkFBUSxVQUFVLENBQUMsT0FBTztBQUN4QixtQkFBRyxnQkFBQTtBQUNILHVCQUFPLFFBQVEsS0FBSztBQUFBLGNBQUE7QUFBQSxZQUN0QixDQUNEO0FBQUEsVUFBQTtBQUFBLFFBQ0gsU0FDTyxLQUFLO0FBQ1osa0JBQVE7QUFDUixnQkFBTTtBQUFBLFFBQUE7QUFBQSxNQUNSO0FBR0YsZUFBU25GLEtBQUksR0FBR0EsS0FBSUosSUFBR0ksTUFBSztBQUMxQixhQUFLQSxFQUFDLElBQUksSUFBQTtBQUFBLE1BQUk7QUFHaEIsWUFBTSxRQUFRLFdBQVcsSUFBSTtBQUM3QixhQUFPO0FBQUEsSUFBQTtBQUFBLElBR1QsTUFBTSxLQUFNLEtBQUssU0FBUztBQUN4QixZQUFNLFFBQVEsS0FBSyxNQUFNLEVBQUUsV0FBVztBQUN0QyxZQUFNLFVBQVUsTUFBTSxPQUFPLEdBQUc7QUFFaEMsYUFBTyxLQUFLLFdBQVcsRUFBRSxPQUFPO0FBQUEsSUFBQTtBQUFBLElBR2xDLE1BQU0sS0FBTSxLQUFLLE9BQU8sU0FBUztBQUMvQixZQUFNLFFBQVEsS0FBSyxNQUFNLEVBQUUsV0FBVztBQUl0QyxZQUFNLFVBQVUsTUFBTSxJQUFJLE9BQU8sR0FBRztBQUVwQyxhQUFPLEtBQUssV0FBVyxFQUFFLE9BQU87QUFBQSxJQUFBO0FBQUE7QUFBQSxJQUlsQyxVQUFXLFNBQVM7QUFDbEIsYUFBTyxJQUFJLFNBQVMsTUFBTSxLQUFLLFNBQVMsR0FBRyxPQUFPO0FBQUEsSUFBQTtBQUFBLElBR3BELE1BQU0sT0FBUSxZQUFZLFNBQVM7QUFDakMsWUFBTSxRQUFRLEtBQUssTUFBTSxFQUFFLFdBQVc7QUFDdEMsWUFBTSxjQUFjLE1BQU07QUFDMUIsVUFBSSxRQUFRO0FBQ1osVUFBSTtBQUVKLFlBQU0sVUFBVSxJQUFJLFFBQVEsU0FBVSxTQUFTLFFBQVE7QUFDckQsb0JBQVksVUFBVSxXQUFZO0FBQ2hDLGlCQUFPLFNBQVMsWUFBWSxTQUFTLElBQUksTUFBTSxpQkFBaUIsQ0FBQztBQUFBLFFBQUE7QUFHbkUsb0JBQVksYUFBYTtBQUFBLE1BQUEsQ0FDMUI7QUFHRCxlQUFTLE9BQVE7QUFDZixjQUFNLEtBQUssV0FBVyxPQUFPO0FBQzdCLGNBQU0sTUFBTSxHQUFHO0FBRWYsWUFBSTtBQUVKLFlBQUk7QUFDRixnQkFBTSxHQUFHLFNBQVMsUUFBUSxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sSUFBSSxHQUFHLE9BQU8sR0FBRztBQUFBLFFBQUEsU0FDOUQsS0FBSztBQUNaLGtCQUFRO0FBQ1Isc0JBQVksTUFBQTtBQUNaO0FBQUEsUUFBQTtBQUdGLFlBQUksUUFBUSxXQUFXLFFBQVE7QUFDN0IsY0FBSSxZQUFZO0FBQUEsUUFBQSxXQUNQLE9BQU8sWUFBWSxXQUFXLFlBQVk7QUFFbkQsc0JBQVksT0FBQTtBQUFBLFFBQU87QUFBQSxNQUNyQjtBQUdGLFdBQUE7QUFDQSxhQUFPO0FBQUEsSUFBQTtBQUFBLElBR1QsTUFBTSxPQUFRLFNBQVM7QUFDckIsVUFBSW9GO0FBRUosVUFBSTtBQUNGLFFBQUFBLFlBQVcsZUFBZSxPQUFPO0FBQUEsTUFBQSxTQUMxQmpGLElBQUc7QUFHVjtBQUFBLE1BQUE7QUFHRixVQUFJLFFBQVEsU0FBUyxHQUFHO0FBR3RCLGVBQU9rRixPQUFNLE1BQU0sS0FBSyxTQUFTLEdBQUdELFdBQVUsT0FBTztBQUFBLE1BQUE7QUFHdkQsWUFBTSxRQUFRLEtBQUssTUFBTSxFQUFFLFdBQVc7QUFDdEMsWUFBTSxVQUFVQSxZQUFXLE1BQU0sT0FBT0EsU0FBUSxJQUFJLE1BQU0sTUFBQTtBQUUxRCxhQUFPLEtBQUssV0FBVyxFQUFFLE9BQU87QUFBQSxJQUFBO0FBQUEsSUFHbEMsTUFBTSxTQUFVO0FBQ2QsV0FBSyxJQUFJLEVBQUUsTUFBQTtBQUFBLElBQU07QUFBQSxFQUVyQjtBQUVBLGVBQWEsVUFBVSxlQUFnQixVQUFVLFFBQVE7QUFDdkQsUUFBSSxVQUFVLE1BQU07QUFDbEIsZUFBUztBQUFBLElBQUE7QUFHWCxVQUFNLFVBQVUsVUFBVSxlQUFlLFNBQVMsUUFBUTtBQUUxRCxXQUFPLElBQUksUUFBUSxTQUFVLFNBQVMsUUFBUTtBQUM1QyxjQUFRLFlBQVk7QUFDcEIsY0FBUSxVQUFVO0FBQUEsSUFBQSxDQUNuQjtBQUFBLEVBQ0g7QUFFQSxlQUFBLGVBQXVCOzs7O0FDcE92QixTQUFTLFlBQWEsT0FBcUI7QUFDdkMsTUFBSS9ELEtBQUk7QUFDUixXQUFTckIsS0FBSSxHQUFHQSxLQUFJLE1BQU0sUUFBUUEsTUFBSztBQUNuQyxJQUFBcUIsTUFBSyxNQUFNLFdBQVdyQixFQUFDO0FBQ3ZCLElBQUFxQixLQUFJLEtBQUssS0FBS0EsSUFBRyxRQUFVO0FBQUEsRUFDL0I7QUFDQSxVQUFRQSxPQUFNLEdBQUcsU0FBUyxFQUFFLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDakQ7QUFFQSxTQUFTLFFBQVMsTUFBb0I7QUFDbEMsTUFBSSxDQUFDLEtBQUssS0FBTSxRQUFPLENBQUE7QUFDdkIsU0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPO0FBQ25DO0FBRUEsU0FBUyxVQUFXLEtBQWEsUUFBaUM7QUFDOUQsTUFBSSxDQUFDLE1BQU0sUUFBUSxHQUFHLEVBQUcsUUFBTztBQUNoQyxNQUFJLElBQUksU0FBUyxPQUFPLE9BQVEsUUFBTztBQUN2QyxXQUFTckIsS0FBSSxHQUFHQSxLQUFJLE9BQU8sUUFBUUEsTUFBSztBQUNwQyxRQUFJLElBQUlBLEVBQUMsTUFBTSxPQUFPQSxFQUFDLEVBQUcsUUFBTztBQUFBLEVBQ3JDO0FBQ0EsU0FBTztBQUNYO0FBSU8sTUFBTSxjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0E7QUFBQSxFQUNSO0FBQUEsRUFFQSxZQUFhLE9BQU8sVUFBVTtBQUMxQixTQUFLLEtBQUssSUFBSXNGLG9CQUFBQSxhQUFhLE1BQU07QUFBQSxNQUM3QixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsSUFBQSxDQUNsQjtBQUNELFNBQUssTUFBTSxLQUFLLE9BQUEsRUFBUyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUM7QUFDN0MsU0FBSyxRQUFRO0FBQUEsRUFDakI7QUFBQTtBQUFBLEVBR0EsTUFBTSxPQUFzQjtBQUN4QixVQUFNLEtBQUssR0FBRyxLQUFBO0FBQUEsRUFDbEI7QUFBQTtBQUFBLEVBR0EsTUFBTSxRQUF1QjtBQUN6QixVQUFNLEtBQUssR0FBRyxNQUFBO0FBQUEsRUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsTUFBTSxJQUFLLE1BQVcsT0FBTyxJQUFvQjtBQUM3QyxVQUFNLE9BQU8sUUFBUSxJQUFJO0FBQ3pCLFVBQU0sWUFBWSxLQUFLLFVBQVUsRUFBRSxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU07QUFDOUQsVUFBTSxPQUFPLFlBQVksU0FBUztBQUVsQyxVQUFNLE1BQWdFLENBQUE7QUFHdEUsUUFBSSxLQUFLLEVBQUUsTUFBTSxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssR0FBRyxHQUFHLE9BQU8sRUFBQSxDQUFHO0FBQzFELFFBQUksS0FBSyxFQUFFLE1BQU0sT0FBTyxLQUFLLENBQUMsUUFBUSxJQUFJLEdBQUcsT0FBTyxFQUFBLENBQUc7QUFHdkQsUUFBSSxLQUFLLEVBQUUsTUFBTSxPQUFPLEtBQUssQ0FBQyxRQUFRLElBQUksR0FBRyxPQUFPLEtBQUEsQ0FBTTtBQUcxRCxRQUFJLEtBQUssRUFBRSxNQUFNLE9BQU8sS0FBSyxDQUFDLFFBQVEsSUFBSSxHQUFHLE9BQU8sS0FBQSxDQUFNO0FBRzFELFFBQUksS0FBSyxXQUFXLEdBQUc7QUFDbkIsVUFBSSxLQUFLLEVBQUUsTUFBTSxPQUFPLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxJQUFJLEdBQUcsT0FBTyxHQUFHO0FBQUEsSUFDckU7QUFHQSxlQUFXLFNBQVMsTUFBTTtBQUN0QixVQUFJLEtBQUssRUFBRSxNQUFNLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxLQUFLLEtBQUssRUFBQSxDQUFHO0FBQ3hELFVBQUksS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sS0FBSyxDQUFDLFFBQVEsT0FBTyxJQUFJO0FBQUEsUUFDekIsT0FBTyxLQUFLO0FBQUEsTUFBQSxDQUNmO0FBQUEsSUFDTDtBQUNBLFFBQUksS0FBSyxFQUFFLE1BQU0sT0FBTyxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxHQUFHLE9BQU8sR0FBRztBQUVqRSxVQUFNLEtBQUssR0FBRyxNQUFNLEdBQVU7QUFDOUIsV0FBTztBQUFBLEVBQ1g7QUFBQTtBQUFBO0FBQUEsRUFLQSxNQUFNLElBQUssTUFBMkI7QUFDbEMsVUFBTSxPQUFPLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBUTtBQUNwRCxRQUFJLFNBQVMsUUFBVztBQUNwQixZQUFNLE9BQU87QUFBQSxRQUNULElBQUksTUFBTSxjQUFjLElBQUksRUFBRTtBQUFBLFFBQzlCLEVBQUUsTUFBTSxnQkFBQTtBQUFBLE1BQWdCO0FBQUEsSUFFaEM7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUFBO0FBQUEsRUFHQSxNQUFNLFFBQVMsTUFBNkI7QUFDeEMsV0FBUSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQVE7QUFBQSxFQUNuRDtBQUFBO0FBQUEsRUFHQSxNQUFNLE9BQTBCO0FBQzVCLFVBQU0sU0FBa0IsQ0FBQTtBQUN4QixxQkFBaUIsQ0FBQyxHQUFHLEtBQUssS0FBSyxHQUFHLFlBQVk7QUFDMUMsVUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFHO0FBQzlCLFlBQU10RSxLQUFJLElBQUksQ0FBQztBQUNmLFVBQUksT0FBT0EsT0FBTSxVQUFVO0FBQ3ZCLGVBQU8sS0FBS0EsRUFBQztBQUFBLE1BQ2pCO0FBQUEsSUFDSjtBQUNBLFdBQU87QUFBQSxFQUNYO0FBQUE7QUFBQSxFQUdBLE1BQU0sT0FBNkI7QUFDL0IsVUFBTSxTQUFxQixDQUFBO0FBQzNCLHFCQUFpQixDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRyxZQUFZO0FBQ2pELFVBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRztBQUMvQixZQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLFVBQUksT0FBTyxTQUFTLFNBQVU7QUFDOUIsYUFBTyxLQUFLO0FBQUEsUUFDUjtBQUFBLFFBQ0EsTUFBTTtBQUFBLE1BQUEsQ0FDVDtBQUFBLElBQ0w7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUFBO0FBQUEsRUFHQSxNQUFNLE1BQU8sS0FBOEI7QUFDdkMsVUFBTSxTQUFrQixDQUFBO0FBQ3hCLHFCQUFpQixDQUFDQSxFQUFDLEtBQUssS0FBSyxHQUFHLFlBQVk7QUFDeEMsVUFBSSxDQUFDLFVBQVVBLElBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFHO0FBQ2xDLFlBQU0sT0FBT0EsR0FBRSxDQUFDO0FBQ2hCLFVBQUksT0FBTyxTQUFTLFVBQVU7QUFDMUIsZUFBTyxLQUFLLElBQUk7QUFBQSxNQUNwQjtBQUFBLElBQ0o7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUFBO0FBQUEsRUFHQSxNQUFNLE1BQU8sTUFBbUM7QUFDNUMsVUFBTSxTQUFzQixDQUFBO0FBQzVCLHFCQUFpQixDQUFDQSxJQUFHLEtBQUssS0FBSyxLQUFLLEdBQUcsWUFBWTtBQUMvQyxVQUFJLENBQUMsVUFBVUEsSUFBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUc7QUFDbkMsWUFBTSxhQUFhQSxHQUFFLENBQUM7QUFDdEIsVUFBSSxPQUFPLGVBQWUsU0FBVTtBQUNwQyxhQUFPLEtBQUs7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUFBLENBQ1I7QUFBQSxJQUNMO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFBQTtBQUFBLEVBR0EsTUFBTSxRQUFTLE1BQWtDO0FBQzdDLFVBQU0sU0FBcUIsQ0FBQTtBQUMzQixVQUFNLDhCQUFjLElBQUE7QUFDcEIsUUFBSSxVQUEyQjtBQUUvQixXQUFPLFdBQVcsQ0FBQyxRQUFRLElBQUksT0FBTyxHQUFHO0FBQ3JDLGNBQVEsSUFBSSxPQUFPO0FBQ25CLFlBQU0sT0FBTyxNQUFNLEtBQUssSUFBSSxPQUFPO0FBQ25DLGFBQU8sS0FBSyxFQUFFLE1BQU0sU0FBUyxNQUFNO0FBQ25DLFlBQU0sT0FBTyxRQUFRLElBQUk7QUFFekIsZ0JBQVUsS0FBSyxDQUFDO0FBQUEsSUFDcEI7QUFFQSxXQUFPO0FBQUEsRUFDWDtBQUFBO0FBQUEsRUFHQSxNQUFNLE1BQU8sS0FBOEI7QUFDdkMsVUFBTSxTQUFrQixDQUFBO0FBQ3hCLHFCQUFpQixDQUFDQSxFQUFDLEtBQUssS0FBSyxHQUFHLFlBQVk7QUFDeEMsVUFBSSxDQUFDLFVBQVVBLElBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFHO0FBQ2xDLFlBQU0sT0FBT0EsR0FBRSxDQUFDO0FBQ2hCLFVBQUksT0FBTyxTQUFTLFVBQVU7QUFDMUIsZUFBTyxLQUFLLElBQUk7QUFBQSxNQUNwQjtBQUFBLElBQ0o7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUFBO0FBQUEsRUFHQSxNQUFNLFVBQXlCO0FBQzNCLFVBQU0sS0FBSyxNQUFBO0FBR1gsVUFBTSxNQUFNLFVBQVUsZUFBZSxLQUFLLEtBQUs7QUFDL0MsVUFBTSxJQUFJLFFBQWMsQ0FBQyxTQUFTLFdBQVc7QUFDekMsVUFBSSxZQUFZLE1BQU0sUUFBQTtBQUN0QixVQUFJLFVBQVUsTUFBTSxPQUFPLElBQUksS0FBSztBQUFBLElBQ3hDLENBQUM7QUFBQSxFQUNMO0FBQ0o7QUNwUE8sTUFBTSxTQUFTLElBQUksY0FBYyxnQkFBZ0I7QUNLakQsTUFBTSxhQUVSLFNBQVN1RSxZQUFZLEVBQUUsYUFBYTtBQUNyQyxRQUFNLE1BQU0sVUFBVSxRQUFRO0FBQzlCLFFBQU0sT0FBTyxVQUFVLEVBQUU7QUFDekIsUUFBTSxXQUFXLFVBQVUsRUFBRTtBQUU3QixRQUFNLFNBQVNDLElBQVksT0FBTyxPQUFhO0FBQzNDLE9BQUcsZUFBQTtBQUNILFVBQU0sT0FBWSxFQUFFLEtBQUssSUFBSSxNQUFBO0FBQzdCLFFBQUksU0FBUyxNQUFNLFFBQVE7QUFDdkIsV0FBSyxPQUFPLFNBQVMsTUFDaEIsTUFBTSxHQUFHLEVBQ1QsSUFBSSxDQUFDbEYsT0FBTUEsR0FBRSxLQUFBLENBQU0sRUFDbkIsT0FBTyxPQUFPO0FBQUEsSUFDdkI7QUFDQSxVQUFNLE9BQU8sSUFBSSxNQUFNLEtBQUssS0FBSztBQUNqQyxTQUFLLFFBQVE7QUFDYixhQUFTLFFBQVE7QUFDakIsVUFBTSxVQUFBO0FBQUEsRUFDVixHQUFHLENBQUMsU0FBUyxDQUFDO0FBRWQsU0FBT21GO0FBQUFBLDZDQUNrQyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBT3ZCLElBQUksS0FBSztBQUFBLDhCQUNQLENBQUN0RixPQUFZO0FBQ25CLFFBQUksUUFBU0EsR0FBRSxPQUE0QjtBQUFBLEVBQy9DLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVFPLEtBQUssS0FBSztBQUFBLDJCQUNYLENBQUM7QUFBQSw4QkFDRSxDQUFDQSxPQUFZO0FBQ25CLFNBQUssUUFBU0EsR0FBRSxPQUErQjtBQUFBLEVBQ25ELENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVFPLFNBQVMsS0FBSztBQUFBO0FBQUEsOEJBRVosQ0FBQ0EsT0FBWTtBQUNuQixhQUFTLFFBQVNBLEdBQUUsT0FBNEI7QUFBQSxFQUNwRCxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNyQjtBQ3JFTyxNQUFNLFdBR1IsU0FBU3VGLFVBQVUsT0FBTztBQUMzQixRQUFNLEVBQUUsTUFBTSxTQUFBLElBQWE7QUFDM0IsUUFBTSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUE7QUFFL0IsU0FBT0Q7QUFBQUE7QUFBQUE7QUFBQUEseUNBRzhCLEtBQUssS0FBSyxHQUFHO0FBQUEsZ0RBQ04sS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJO0FBQUE7QUFBQTtBQUFBLGNBR3hELEtBQUssT0FBT0EsMkJBQTRCLEtBQUssSUFBSSxTQUFTLElBQUk7QUFBQTtBQUFBLGNBRTlELEtBQUssU0FBUyxLQUFLQTtBQUFBQTtBQUFBQTtBQUFBQSxzQkFHWCxLQUFLLElBQUksQ0FBQ3BFLE9BQWFvRTtBQUFBQTtBQUFBQSxrQ0FFWHBFLEVBQUM7QUFBQTtBQUFBLHNDQUVHLE1BQU0sU0FBU0EsRUFBQyxDQUFDO0FBQUE7QUFBQSw4QkFFekJBLEVBQUM7QUFBQTtBQUFBLHFCQUVWLENBQUM7QUFBQTtBQUFBLGFBRVQ7QUFBQTtBQUFBLGNBRUMsS0FBSyxhQUFhLFNBQVMsS0FBS29FO0FBQUFBO0FBQUFBO0FBQUFBLHNCQUd4QixLQUFLLGFBQWEsSUFBSSxDQUFDNUYsT0FBTTRGO0FBQUFBO0FBQUFBLGtDQUVqQjVGLEdBQUUsSUFBSTtBQUFBO0FBQUEsc0NBRUYsTUFBTSxTQUFTQSxHQUFFLElBQUksQ0FBQztBQUFBO0FBQUEsOEJBRTlCQSxHQUFFLElBQUk7QUFBQTtBQUFBLHFCQUVmLENBQUM7QUFBQTtBQUFBLGFBRVQ7QUFBQTtBQUFBO0FBR2I7QUM1Q08sTUFBTSxlQUdSLFNBQVM4RixjQUFjLEVBQUUsTUFBTSxZQUFZO0FBQzVDLFFBQU0sVUFBVSxVQUE0QixFQUFFO0FBRTlDQyxNQUFVLE1BQU07QUFDWixRQUFJLFlBQVk7QUFDaEIsV0FBTyxRQUFRLElBQUksRUFBRSxLQUFLLENBQUMsWUFBWTtBQUNuQyxVQUFJLFVBQVc7QUFDZixjQUFRLFFBQVE7QUFBQSxJQUNwQixDQUFDLEVBQUUsTUFBTSxNQUFNO0FBQ1gsVUFBSSxVQUFXO0FBQ2YsY0FBUSxRQUFRLENBQUE7QUFBQSxJQUNwQixDQUFDO0FBQ0QsV0FBTyxNQUFNO0FBQUUsa0JBQVk7QUFBQSxJQUFLO0FBQUEsRUFDcEMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUVULE1BQUksUUFBUSxNQUFNLFdBQVcsRUFBRyxRQUFPO0FBRXZDLFNBQU9IO0FBQUFBO0FBQUFBLCtCQUVvQixJQUFJO0FBQUE7QUFBQSxrQkFFakIsUUFBUSxNQUFNLElBQUksQ0FBQyxVQUFVQTtBQUFBQSw4QkFDakIsTUFBTSxJQUFJO0FBQUE7QUFBQTtBQUFBLHNDQUdGLE1BQU0sU0FBUyxNQUFNLElBQUksQ0FBQztBQUFBO0FBQUEsOEJBRWxDLE1BQU0sSUFBSTtBQUFBO0FBQUEsb0RBRVksTUFBTSxLQUFLLEdBQUc7QUFBQTtBQUFBLGlCQUVqRCxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBSWxCO0FDNUJBLFNBQVMsU0FBVSxPQUtqQjtBQUNFLFFBQU0sNkJBQWEsSUFBQTtBQUNuQixRQUFNLFFBQVEsQ0FBQyxTQUFTLE9BQU8sSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBRW5ELFFBQU0saUNBQWlCLElBQUE7QUFDdkIsUUFBTSxXQUFXLENBQUMsTUFBYSxPQUFPLG9CQUFJLFVBQXlCO0FBQy9ELFFBQUksV0FBVyxJQUFJLElBQUksRUFBRyxRQUFPLFdBQVcsSUFBSSxJQUFJO0FBQ3BELFFBQUksS0FBSyxJQUFJLElBQUksRUFBRyxRQUFPO0FBRTNCLFVBQU0sT0FBTyxPQUFPLElBQUksSUFBSTtBQUM1QixRQUFJLENBQUMsS0FBTSxRQUFPO0FBRWxCLFNBQUssSUFBSSxJQUFJO0FBQ2IsVUFBTSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUE7QUFDL0IsUUFBSSxLQUFLLFdBQVcsR0FBRztBQUNuQixpQkFBVyxJQUFJLE1BQU0sQ0FBQztBQUN0QixXQUFLLE9BQU8sSUFBSTtBQUNoQixhQUFPO0FBQUEsSUFDWDtBQUVBLFFBQUlJLFlBQVc7QUFDZixlQUFXLFlBQVksTUFBTTtBQUN6QkEsa0JBQVcsS0FBSyxJQUFJQSxXQUFVLFNBQVMsVUFBVSxJQUFJLElBQUksQ0FBQztBQUFBLElBQzlEO0FBQ0EsZUFBVyxJQUFJLE1BQU1BLFNBQVE7QUFDN0IsU0FBSyxPQUFPLElBQUk7QUFDaEIsV0FBT0E7QUFBQUEsRUFDWDtBQUVBLFFBQU0sY0FBYyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQ3RGLElBQUdlLE9BQU07QUFDMUMsVUFBTSxZQUFZLFNBQVNmLEdBQUUsSUFBSSxJQUFJLFNBQVNlLEdBQUUsSUFBSTtBQUNwRCxRQUFJLGNBQWMsRUFBRyxRQUFPO0FBQzVCLFdBQU9mLEdBQUUsS0FBSyxjQUFjZSxHQUFFLElBQUk7QUFBQSxFQUN0QyxDQUFDO0FBRUQsUUFBTSxtQ0FBbUIsSUFBQTtBQUN6QixRQUFNLGlDQUFpQixJQUFBO0FBRXZCLFFBQU0sY0FBYyxDQUFDLE9BQWMsY0FBc0M7QUFDckUsVUFBTSxPQUFPLGFBQWEsSUFBSSxLQUFLLHlCQUFTLElBQUE7QUFDNUMsUUFBSSxjQUFjLFVBQWEsQ0FBQyxLQUFLLElBQUksU0FBUyxHQUFHO0FBQ2pELFdBQUssSUFBSSxTQUFTO0FBQ2xCLG1CQUFhLElBQUksT0FBTyxJQUFJO0FBQzVCLGFBQU87QUFBQSxJQUNYO0FBRUEsUUFBSSxPQUFPO0FBQ1gsV0FBTyxLQUFLLElBQUksSUFBSSxFQUFHO0FBQ3ZCLFNBQUssSUFBSSxJQUFJO0FBQ2IsaUJBQWEsSUFBSSxPQUFPLElBQUk7QUFDNUIsV0FBTztBQUFBLEVBQ1g7QUFFQSxNQUFJLFVBQVU7QUFDZCxNQUFJLFdBQVc7QUFDZixhQUFXLFFBQVEsYUFBYTtBQUM1QixVQUFNLFFBQVEsU0FBUyxLQUFLLElBQUk7QUFDaEMsZUFBVyxLQUFLLElBQUksVUFBVSxLQUFLO0FBQ25DLFVBQU0sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFBO0FBQy9CLFVBQU0sWUFBWSxLQUNiLElBQUksQ0FBQyxhQUFhLFdBQVcsSUFBSSxRQUFRLENBQUMsRUFDMUMsS0FBSyxDQUFDd0UsVUFBd0JBLFVBQVMsTUFBUztBQUNyRCxVQUFNLE9BQU8sWUFBWSxPQUFPLFNBQVM7QUFDekMsZUFBVyxJQUFJLEtBQUssTUFBTSxJQUFJO0FBQzlCLGNBQVUsS0FBSyxJQUFJLFNBQVMsSUFBSTtBQUFBLEVBQ3BDO0FBRUEsUUFBTSxTQUFvQixDQUFBO0FBQzFCLFFBQU0sUUFBUTtBQUNkLFFBQU0sUUFBUTtBQUNkLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFFaEIsYUFBVyxRQUFRLGFBQWE7QUFDNUIsVUFBTSxPQUFPLFdBQVcsSUFBSSxLQUFLLElBQUksS0FBSztBQUMxQyxVQUFNLFFBQVEsU0FBUyxLQUFLLElBQUk7QUFDaEMsV0FBTyxLQUFLO0FBQUEsTUFDUixNQUFNLEtBQUs7QUFBQSxNQUNYLEtBQUssS0FBSyxLQUFLO0FBQUEsTUFDZixHQUFHLFVBQVcsT0FBTztBQUFBLE1BQ3JCLEdBQUcsVUFBVyxRQUFRO0FBQUEsSUFBQSxDQUN6QjtBQUFBLEVBQ0w7QUFFQSxRQUFNLFFBQWtCLENBQUE7QUFDeEIsYUFBVyxRQUFRLE9BQU87QUFDdEIsVUFBTSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUE7QUFDL0IsZUFBVyxZQUFZLE1BQU07QUFDekIsVUFBSSxPQUFPLElBQUksUUFBUSxHQUFHO0FBQ3RCLGNBQU0sS0FBSyxFQUFFLE1BQU0sVUFBVSxJQUFJLEtBQUssTUFBTTtBQUFBLE1BQ2hEO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFFQSxTQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBLE9BQVEsVUFBVSxRQUFVLFVBQVU7QUFBQSxJQUN0QyxRQUFTLFdBQVcsUUFBVSxVQUFVO0FBQUEsRUFBQTtBQUVoRDtBQUVPLE1BQU0sWUFJUixTQUFTQyxXQUFXLEVBQUUsT0FBTyxjQUFjLFlBQVk7QUFDeEQsUUFBTSxNQUFNLFNBQVMsS0FBSztBQUMxQixRQUFNLFlBQVlDLEVBQTRCLElBQUk7QUFFbERKLE1BQVUsTUFBTTtBQUNaLFVBQU0sS0FBSyxVQUFVO0FBQ3JCLFFBQUksQ0FBQyxHQUFJO0FBQ1QsT0FBRyxZQUFZLEdBQUc7QUFBQSxFQUN0QixHQUFHLENBQUMsSUFBSSxPQUFPLE1BQU0sQ0FBQztBQUV0QixRQUFNLCtCQUFlLElBQUE7QUFDckIsTUFBSSxPQUFPLFFBQVEsQ0FBQyxVQUFVLFNBQVMsSUFBSSxNQUFNLE1BQU0sS0FBSyxDQUFDO0FBRTdELFNBQU9IO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLGNBSUcsSUFBSSxPQUFPLFdBQVcsSUFDcEJBLG9DQUNBQTtBQUFBQSxrREFDa0MsU0FBUztBQUFBO0FBQUE7QUFBQSxvQ0FHdkIsSUFBSSxLQUFLO0FBQUEscUNBQ1IsSUFBSSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSWpCLElBQUksTUFBTSxJQUFJLENBQUMsU0FBUztBQUN0QixVQUFNLE9BQU8sU0FBUyxJQUFJLEtBQUssSUFBSTtBQUNuQyxVQUFNLEtBQUssU0FBUyxJQUFJLEtBQUssRUFBRTtBQUMvQixRQUFJLENBQUMsUUFBUSxDQUFDLEdBQUksUUFBTztBQUN6QixXQUFPQTtBQUFBQTtBQUFBQSw4Q0FFTyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO0FBQUE7QUFBQSw2Q0FFM0IsS0FBSyxDQUFDO0FBQUEsNkNBQ04sS0FBSyxDQUFDO0FBQUEsNkNBQ04sR0FBRyxDQUFDO0FBQUEsNkNBQ0osR0FBRyxDQUFDO0FBQUE7QUFBQTtBQUFBLEVBR3JCLENBQUMsQ0FBQztBQUFBO0FBQUEsOEJBRUEsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVQTtBQUFBQTtBQUFBQSwwQ0FFZCxNQUFNLElBQUk7QUFBQTtBQUFBLDhDQUVOLE1BQU0sU0FBUyxNQUFNLElBQUksQ0FBQztBQUFBO0FBQUE7QUFBQSxnREFHeEIsaUJBQWlCLE1BQU0sT0FBTywrQkFBK0IsVUFBVTtBQUFBLDZDQUMxRSxNQUFNLENBQUM7QUFBQSw2Q0FDUCxNQUFNLENBQUM7QUFBQSw0Q0FDUixFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBSUYsTUFBTSxDQUFDO0FBQUEsNENBQ1AsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBSVQsTUFBTSxLQUFLLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FJcEIsTUFBTSxDQUFDO0FBQUEsNENBQ1AsTUFBTSxJQUFJLEVBQUU7QUFBQTtBQUFBO0FBQUEsMENBR2QsTUFBTSxHQUFHO0FBQUE7QUFBQTtBQUFBLDZCQUd0QixDQUFDO0FBQUE7QUFBQTtBQUFBLGlCQUdiO0FBQUE7QUFBQSxjQUVILGdCQUFnQkE7QUFBQUE7QUFBQUEsMkNBRWEsWUFBWTtBQUFBO0FBQUEsYUFFMUM7QUFBQTtBQUFBO0FBR2I7QUMzTU8sTUFBTSxNQUF3QixTQUFTUSxPQUFPO0FBQ2pELFFBQU0sUUFBUSxVQUE2QixFQUFFO0FBQzdDLFFBQU0sZUFBZSxVQUF1QixJQUFJO0FBQ2hELFFBQU0sVUFBVSxVQUFvQyxFQUFFO0FBRXRELFFBQU0sYUFBYVQsSUFBWSxDQUFDLFNBQWdCO0FBQzVDLGlCQUFhLFFBQVE7QUFBQSxFQUN6QixHQUFHLENBQUEsQ0FBRTtBQUVMLFFBQU0sVUFBVUEsSUFBWSxZQUFZO0FBQ3BDLFVBQU0sV0FBVyxNQUFNLE9BQU8sS0FBQTtBQUU5QixVQUFNLFdBQTZCLE1BQU0sUUFBUTtBQUFBLE1BQzdDLFNBQVMsSUFBSSxPQUFPLFNBQVM7QUFDekIsY0FBTSxDQUFDLE1BQU0sWUFBWSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsVUFDM0MsT0FBTyxRQUFRLEtBQUssSUFBSSxFQUFFLE1BQU0sTUFBTSxFQUFFO0FBQUEsVUFDeEMsT0FBTyxNQUFNLEtBQUssSUFBSTtBQUFBLFFBQUEsQ0FDekI7QUFFRCxlQUFPLEVBQUUsR0FBRyxNQUFNLE1BQU0sYUFBQTtBQUFBLE1BQzVCLENBQUM7QUFBQSxJQUFBO0FBRUwsVUFBTSxRQUFRO0FBRWQsVUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFBO0FBQzFCLFVBQU0sS0FBOEIsQ0FBQTtBQUNwQyxlQUFXLE9BQU8sTUFBTTtBQUNwQixTQUFHLEdBQUcsSUFBSSxNQUFNLE9BQU8sTUFBTSxHQUFHO0FBQUEsSUFDcEM7QUFDQSxZQUFRLFFBQVE7QUFBQSxFQUNwQixHQUFHLENBQUEsQ0FBRTtBQUVMSSxNQUFVLE1BQU07QUFDWixXQUFPLE9BQU8sS0FBSyxPQUFPLEVBQUUsTUFBTSxNQUFNLE1BQVM7QUFBQSxFQUNyRCxHQUFHLENBQUMsT0FBTyxDQUFDO0FBRVosUUFBTSxjQUFjSixJQUFZLFlBQVk7QUFDeEMsVUFBTSxPQUFPLFFBQUE7QUFDYixXQUFPLFNBQVMsT0FBQTtBQUFBLEVBQ3BCLEdBQUcsQ0FBQSxDQUFFO0FBRUwsU0FBT0M7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsOERBUW1ELFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFPbEQsVUFBVSxjQUFjLE9BQU87QUFBQTtBQUFBLHNCQUVoQyxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUUsU0FBUyxLQUFLQTtBQUFBQTtBQUFBQTtBQUFBQSw4QkFHakMsT0FBTyxRQUFRLFFBQVEsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssTUFBTSxNQUFNQTtBQUFBQSw2REFDdEIsR0FBRztBQUFBLDZEQUNILEdBQUc7QUFBQSxzQ0FDMUIsT0FBTyxJQUFJLENBQUMsU0FBU0E7QUFBQUE7QUFBQUEsa0RBRVQsSUFBSTtBQUFBO0FBQUEsc0RBRUEsTUFBTSxXQUFXLElBQUksQ0FBQztBQUFBO0FBQUEsOENBRTlCLElBQUk7QUFBQTtBQUFBLHFDQUViLENBQUM7QUFBQTtBQUFBLDZCQUVULENBQUM7QUFBQTtBQUFBLHFCQUVUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSUssTUFBTSxNQUFNLFdBQVcsS0FBS0E7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEseUJBSTdCO0FBQUEsMEJBQ0MsTUFBTSxNQUFNLElBQUksQ0FBQyxTQUFTQTtBQUFBQSwrQkFDckIsUUFBUTtBQUFBLHNDQUNELEtBQUssSUFBSTtBQUFBLHVDQUNSLElBQUk7QUFBQSwyQ0FDQSxVQUFVO0FBQUE7QUFBQSx5QkFFNUIsQ0FBQztBQUFBO0FBQUE7QUFBQSxzQkFHSixhQUFhLFNBQVNBO0FBQUFBLDJCQUNqQixZQUFZO0FBQUEsbUNBQ0osYUFBYSxLQUFLO0FBQUEsdUNBQ2QsVUFBVTtBQUFBO0FBQUEscUJBRTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSUUsU0FBUztBQUFBLGdDQUNBLE1BQU0sS0FBSztBQUFBLHVDQUNKLGFBQWEsS0FBSztBQUFBLG1DQUN0QixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU03QztBQ3RIQVMsRUFBT1QsT0FBUSxHQUFHLE9BQU8sU0FBUyxlQUFlLE1BQU0sQ0FBRTsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NV19
