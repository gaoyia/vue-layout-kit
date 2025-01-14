(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".fit-container[data-v-4a86107d]{position:absolute;width:100%;height:100%;overflow:hidden;border:0px;padding:0;margin:0;display:flex;justify-content:center;align-items:center}.fit-inner[data-v-4a86107d]{border:0px;padding:0;margin:0;display:block;position:absolute}.fit-scale[data-v-4a86107d]{transform-origin:left top}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { warn as ve, defineComponent as he, computed as _, ref as k, onMounted as de, onUnmounted as fe, watch as pe, openBlock as be, createElementBlock as ge, createElementVNode as L, normalizeStyle as M, renderSlot as ze } from "vue";
import { isObject as Z, hasOwn as V } from "@vue/shared";
const we = (e, t) => (e.install = (r) => {
  for (const n of [e, ...Object.values({})])
    r.component(n.name, n);
}, e);
function me(e) {
  for (var t = -1, r = e == null ? 0 : e.length, n = {}; ++t < r; ) {
    var i = e[t];
    n[i[0]] = i[1];
  }
  return n;
}
const ee = "__epPropKey", ye = (e) => Z(e) && !!e[ee], xe = (e, t) => {
  if (!Z(e) || ye(e)) return e;
  const { values: r, required: n, default: i, type: s, validator: l } = e, a = {
    type: s,
    required: !!n,
    validator: r || l ? (p) => {
      let h = !1, u = [];
      if (r && (u = Array.from(r), V(e, "default") && u.push(i), h ||= u.includes(p)), l && (h ||= l(p)), !h && u.length > 0) {
        const O = [...new Set(u)].map((y) => JSON.stringify(y)).join(", ");
        ve(
          `Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${O}], got value ${JSON.stringify(
            p
          )}.`
        );
      }
      return h;
    } : void 0,
    [ee]: !0
  };
  return V(e, "default") && (a.default = i), a;
}, Oe = (e) => me(
  Object.entries(e).map(([t, r]) => [
    t,
    xe(r, t)
  ])
);
var w = [], Ee = function() {
  return w.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Se = function() {
  return w.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, $ = "ResizeObserver loop completed with undelivered notifications.", Be = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: $
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = $), window.dispatchEvent(e);
}, B;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(B || (B = {}));
var m = function(e) {
  return Object.freeze(e);
}, Re = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, m(this);
  }
  return e;
}(), te = function() {
  function e(t, r, n, i) {
    return this.x = t, this.y = r, this.width = n, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, m(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, i = t.top, s = t.right, l = t.bottom, o = t.left, a = t.width, p = t.height;
    return { x: r, y: n, top: i, right: s, bottom: l, left: o, width: a, height: p };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), I = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, re = function(e) {
  if (I(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var i = e, s = i.offsetWidth, l = i.offsetHeight;
  return !(s || l || e.getClientRects().length);
}, Y = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e?.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Te = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, S = typeof window < "u" ? window : {}, C = /* @__PURE__ */ new WeakMap(), q = /auto|scroll/, _e = /^tb|vertical/, ke = /msie|trident/i.test(S.navigator && S.navigator.userAgent), g = function(e) {
  return parseFloat(e || "0");
}, x = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Re((r ? t : e) || 0, (r ? e : t) || 0);
}, G = m({
  devicePixelContentBoxSize: x(),
  borderBoxSize: x(),
  contentBoxSize: x(),
  contentRect: new te(0, 0, 0, 0)
}), ne = function(e, t) {
  if (t === void 0 && (t = !1), C.has(e) && !t)
    return C.get(e);
  if (re(e))
    return C.set(e, G), G;
  var r = getComputedStyle(e), n = I(e) && e.ownerSVGElement && e.getBBox(), i = !ke && r.boxSizing === "border-box", s = _e.test(r.writingMode || ""), l = !n && q.test(r.overflowY || ""), o = !n && q.test(r.overflowX || ""), a = n ? 0 : g(r.paddingTop), p = n ? 0 : g(r.paddingRight), h = n ? 0 : g(r.paddingBottom), u = n ? 0 : g(r.paddingLeft), O = n ? 0 : g(r.borderTopWidth), y = n ? 0 : g(r.borderRightWidth), N = n ? 0 : g(r.borderBottomWidth), b = n ? 0 : g(r.borderLeftWidth), z = u + p, E = a + h, c = b + y, v = O + N, d = o ? e.offsetHeight - v - e.clientHeight : 0, f = l ? e.offsetWidth - c - e.clientWidth : 0, se = i ? z + c : 0, ue = i ? E + v : 0, R = n ? n.width : g(r.width) - se - f, T = n ? n.height : g(r.height) - ue - d, le = R + z + f + c, ce = T + E + d + v, F = m({
    devicePixelContentBoxSize: x(Math.round(R * devicePixelRatio), Math.round(T * devicePixelRatio), s),
    borderBoxSize: x(le, ce, s),
    contentBoxSize: x(R, T, s),
    contentRect: new te(u, a, R, T)
  });
  return C.set(e, F), F;
}, ie = function(e, t, r) {
  var n = ne(e, r), i = n.borderBoxSize, s = n.contentBoxSize, l = n.devicePixelContentBoxSize;
  switch (t) {
    case B.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case B.BORDER_BOX:
      return i;
    default:
      return s;
  }
}, Ce = /* @__PURE__ */ function() {
  function e(t) {
    var r = ne(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = m([r.borderBoxSize]), this.contentBoxSize = m([r.contentBoxSize]), this.devicePixelContentBoxSize = m([r.devicePixelContentBoxSize]);
  }
  return e;
}(), ae = function(e) {
  if (re(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, We = function() {
  var e = 1 / 0, t = [];
  w.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var o = [];
      l.activeTargets.forEach(function(p) {
        var h = new Ce(p.target), u = ae(p.target);
        o.push(h), p.lastReportedSize = ie(p.target, p.observedBox), u < e && (e = u);
      }), t.push(function() {
        l.callback.call(l.observer, o, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    i();
  }
  return e;
}, J = function(e) {
  w.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (ae(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, Pe = function() {
  var e = 0;
  for (J(e); Ee(); )
    e = We(), J(e);
  return Se() && Be(), e > 0;
}, H, oe = [], De = function() {
  return oe.splice(0).forEach(function(e) {
    return e();
  });
}, Ne = function(e) {
  if (!H) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return De();
    }).observe(r, n), H = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  oe.push(e), H();
}, He = function(e) {
  Ne(function() {
    requestAnimationFrame(e);
  });
}, D = 0, Ae = function() {
  return !!D;
}, Xe = 250, Ie = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, K = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], U = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, A = !1, Fe = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = Xe), !A) {
      A = !0;
      var n = U(t);
      He(function() {
        var i = !1;
        try {
          i = Pe();
        } finally {
          if (A = !1, t = n - U(), !Ae())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, Ie);
    };
    document.body ? r() : S.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), K.forEach(function(r) {
      return S.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), K.forEach(function(r) {
      return S.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), X = new Fe(), j = function(e) {
  !D && e > 0 && X.start(), D += e, !D && X.stop();
}, Le = function(e) {
  return !I(e) && !Te(e) && getComputedStyle(e).display === "inline";
}, Me = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || B.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = ie(this.target, this.observedBox, !0);
    return Le(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Ve = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), W = /* @__PURE__ */ new WeakMap(), Q = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, P = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new Ve(t, r);
    W.set(t, n);
  }, e.observe = function(t, r, n) {
    var i = W.get(t), s = i.observationTargets.length === 0;
    Q(i.observationTargets, r) < 0 && (s && w.push(i), i.observationTargets.push(new Me(r, n && n.box)), j(1), X.schedule());
  }, e.unobserve = function(t, r) {
    var n = W.get(t), i = Q(n.observationTargets, r), s = n.observationTargets.length === 1;
    i >= 0 && (s && w.splice(w.indexOf(n), 1), n.observationTargets.splice(i, 1), j(-1));
  }, e.disconnect = function(t) {
    var r = this, n = W.get(t);
    n.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), $e = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    P.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Y(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    P.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Y(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    P.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    P.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Ye = Oe({
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  fit: {
    type: String,
    values: ["contain", "cover", "fill", "none", "scale-down"],
    default: "none"
  },
  isScale: {
    type: Boolean,
    default: !1
  }
}), qe = {
  resize: (e) => e instanceof Event
}, Ge = /* @__PURE__ */ he({
  name: "LayoutFit",
  __name: "LayoutFit",
  props: Ye,
  emits: qe,
  setup(e, { emit: t }) {
    const r = t, n = e, i = _(() => n.width / n.height), s = k(), l = k(), o = k(0), a = k(0);
    let p;
    const h = _(() => o.value / n.width), u = _(() => a.value / n.height), O = _(() => n.isScale ? {
      width: `${1 / h.value * 100}%`,
      height: `${1 / u.value * 100}%`,
      transform: `scale(${h.value},${u.value})`
    } : {
      width: "100%",
      height: "100%",
      transform: "scale(1,1)"
    }), y = (b) => {
      for (const z of b)
        if (z) {
          const E = Array.isArray(z.contentBoxSize) ? z.contentBoxSize[0] : z.contentBoxSize, c = E.inlineSize, v = E.blockSize;
          switch (n.fit) {
            case "contain": {
              let d = c, f = d / i.value;
              if (f <= v) {
                a.value = f, o.value = d, r("resize", {
                  contentWidth: c,
                  contentHeight: v,
                  scaleX: h.value,
                  scaleY: u.value,
                  innerWidth: o.value,
                  innerHeight: a.value,
                  _entries: b
                });
                return;
              }
              if (f = v, d = f * i.value, d < c) {
                a.value = f, o.value = d, r("resize", {
                  contentWidth: c,
                  contentHeight: v,
                  scaleX: h.value,
                  scaleY: u.value,
                  innerWidth: o.value,
                  innerHeight: a.value,
                  _entries: b
                });
                return;
              }
              break;
            }
            case "cover": {
              let d = c, f = d / i.value;
              if (f <= v) {
                a.value = v, o.value = v * i.value, r("resize", {
                  contentWidth: c,
                  contentHeight: v,
                  scaleX: h.value,
                  scaleY: u.value,
                  innerWidth: o.value,
                  innerHeight: a.value,
                  _entries: b
                });
                return;
              }
              if (f = v, d = f * i.value, d < c) {
                a.value = c * (1 / i.value), o.value = c, r("resize", {
                  contentWidth: c,
                  contentHeight: v,
                  scaleX: h.value,
                  scaleY: u.value,
                  innerWidth: o.value,
                  innerHeight: a.value,
                  _entries: b
                });
                return;
              }
              break;
            }
            case "fill": {
              o.value = c, a.value = v, r("resize", {
                contentWidth: c,
                contentHeight: v,
                scaleX: h.value,
                scaleY: u.value,
                innerWidth: o.value,
                innerHeight: a.value,
                _entries: b
              });
              break;
            }
            case "scale-down": {
              let d = c, f = d / i.value;
              if (f <= v) {
                f < n.height ? (a.value = f, o.value = d) : (a.value = n.height, o.value = n.width), r("resize", {
                  contentWidth: c,
                  contentHeight: v,
                  scaleX: h.value,
                  scaleY: u.value,
                  innerWidth: o.value,
                  innerHeight: a.value,
                  _entries: b
                });
                return;
              }
              if (f = v, d = f * i.value, d < c) {
                d < n.width ? (a.value = f, o.value = d) : (a.value = n.height, o.value = n.width), r("resize", {
                  contentWidth: c,
                  contentHeight: v,
                  scaleX: h.value,
                  scaleY: u.value,
                  innerWidth: o.value,
                  innerHeight: a.value,
                  _entries: b
                });
                return;
              }
              break;
            }
            default: {
              o.value = n.width, a.value = n.height, r("resize", {
                contentWidth: c,
                contentHeight: v,
                scaleX: h.value,
                scaleY: u.value,
                innerWidth: o.value,
                innerHeight: a.value,
                _entries: b
              });
              break;
            }
          }
        }
    }, N = () => {
      s.value && y([
        {
          contentBoxSize: {
            inlineSize: s.value.clientWidth,
            blockSize: s.value.clientHeight
          }
        }
      ]);
    };
    return de(() => {
      p = new $e(y), p.observe(s.value);
    }), fe(() => {
      p && s.value && p.unobserve(s.value);
    }), pe(() => n.fit, () => {
      N();
    }), (b, z) => (be(), ge("div", {
      ref_key: "container",
      ref: s,
      class: "fit-container"
    }, [
      L("div", {
        style: M({
          width: `${o.value}px`,
          height: `${a.value}px`
        }),
        ref_key: "inner",
        ref: l,
        class: "fit-inner"
      }, [
        L("div", {
          class: "fit-scale",
          style: M(O.value)
        }, [
          ze(b.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 4)
    ], 512));
  }
}), Je = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Ke = /* @__PURE__ */ Je(Ge, [["__scopeId", "data-v-4a86107d"]]), Qe = we(Ke);
export {
  Qe as default
};
