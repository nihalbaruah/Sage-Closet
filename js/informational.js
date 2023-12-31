(() => {
  var rt = Object.create;
  var _ = Object.defineProperty,
    st = Object.defineProperties,
    it = Object.getOwnPropertyDescriptor,
    at = Object.getOwnPropertyDescriptors,
    lt = Object.getOwnPropertyNames,
    xe = Object.getOwnPropertySymbols,
    ct = Object.getPrototypeOf,
    Te = Object.prototype.hasOwnProperty,
    dt = Object.prototype.propertyIsEnumerable;
  var se = (n, e, t) =>
      e in n
        ? _(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    P = (n, e) => {
      for (var t in e || (e = {})) Te.call(e, t) && se(n, t, e[t]);
      if (xe) for (var t of xe(e)) dt.call(e, t) && se(n, t, e[t]);
      return n;
    },
    ie = (n, e) => st(n, at(e)),
    ft = (n) => _(n, "__esModule", { value: !0 });
  var ut = (n, e) => () => (
    e || n((e = { exports: {} }).exports, e), e.exports
  );
  var pt = (n, e, t) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let o of lt(e))
          !Te.call(n, o) &&
            o !== "default" &&
            _(n, o, {
              get: () => e[o],
              enumerable: !(t = it(e, o)) || t.enumerable,
            });
      return n;
    },
    ae = (n) =>
      pt(
        ft(
          _(
            n != null ? rt(ct(n)) : {},
            "default",
            n && n.__esModule && "default" in n
              ? { get: () => n.default, enumerable: !0 }
              : { value: n, enumerable: !0 }
          )
        ),
        n
      );
  var l = (n, e, t) => (se(n, typeof e != "symbol" ? e + "" : e, t), t);
  var p = (n, e, t) =>
    new Promise((o, r) => {
      var s = (f) => {
          try {
            a(t.next(f));
          } catch (u) {
            r(u);
          }
        },
        i = (f) => {
          try {
            a(t.throw(f));
          } catch (u) {
            r(u);
          }
        },
        a = (f) => (f.done ? o(f.value) : Promise.resolve(f.value).then(s, i));
      a((t = t.apply(n, e)).next());
    });
  var Q = ut((Io, je) => {
    "use strict";
    var w = new WeakMap(),
      Y = new WeakMap(),
      H = new WeakMap(),
      he = Symbol("anyProducer"),
      Ne = Promise.resolve(),
      z = Symbol("listenerAdded"),
      G = Symbol("listenerRemoved"),
      ye = !1;
    function O(n) {
      if (typeof n != "string" && typeof n != "symbol")
        throw new TypeError("eventName must be a string or a symbol");
    }
    function J(n) {
      if (typeof n != "function")
        throw new TypeError("listener must be a function");
    }
    function k(n, e) {
      let t = Y.get(n);
      return t.has(e) || t.set(e, new Set()), t.get(e);
    }
    function U(n, e) {
      let t = typeof e == "string" || typeof e == "symbol" ? e : he,
        o = H.get(n);
      return o.has(t) || o.set(t, new Set()), o.get(t);
    }
    function yt(n, e, t) {
      let o = H.get(n);
      if (o.has(e)) for (let r of o.get(e)) r.enqueue(t);
      if (o.has(he)) {
        let r = Promise.all([e, t]);
        for (let s of o.get(he)) s.enqueue(r);
      }
    }
    function Re(n, e) {
      e = Array.isArray(e) ? e : [e];
      let t = !1,
        o = () => {},
        r = [],
        s = {
          enqueue(i) {
            r.push(i), o();
          },
          finish() {
            (t = !0), o();
          },
        };
      for (let i of e) U(n, i).add(s);
      return {
        next() {
          return p(this, null, function* () {
            return r
              ? r.length === 0
                ? t
                  ? ((r = void 0), this.next())
                  : (yield new Promise((i) => {
                      o = i;
                    }),
                    this.next())
                : { done: !1, value: yield r.shift() }
              : { done: !0 };
          });
        },
        return(a) {
          return p(this, arguments, function* (i) {
            r = void 0;
            for (let f of e) U(n, f).delete(s);
            return (
              o(),
              arguments.length > 0 ? { done: !0, value: yield i } : { done: !0 }
            );
          });
        },
        [Symbol.asyncIterator]() {
          return this;
        },
      };
    }
    function He(n) {
      if (n === void 0) return Ue;
      if (!Array.isArray(n))
        throw new TypeError("`methodNames` must be an array of strings");
      for (let e of n)
        if (!Ue.includes(e))
          throw typeof e != "string"
            ? new TypeError("`methodNames` element must be a string")
            : new Error(`${e} is not Emittery method`);
      return n;
    }
    var be = (n) => n === z || n === G,
      C = class {
        static mixin(e, t) {
          return (
            (t = He(t)),
            (o) => {
              if (typeof o != "function")
                throw new TypeError("`target` must be function");
              for (let i of t)
                if (o.prototype[i] !== void 0)
                  throw new Error(
                    `The property \`${i}\` already exists on \`target\``
                  );
              function r() {
                return (
                  Object.defineProperty(this, e, {
                    enumerable: !1,
                    value: new C(),
                  }),
                  this[e]
                );
              }
              Object.defineProperty(o.prototype, e, { enumerable: !1, get: r });
              let s = (i) =>
                function (...a) {
                  return this[e][i](...a);
                };
              for (let i of t)
                Object.defineProperty(o.prototype, i, {
                  enumerable: !1,
                  value: s(i),
                });
              return o;
            }
          );
        }
        static get isDebugEnabled() {
          if (typeof process != "object") return ye;
          let { env: e } = process || { env: {} };
          return e.DEBUG === "emittery" || e.DEBUG === "*" || ye;
        }
        static set isDebugEnabled(e) {
          ye = e;
        }
        constructor(e = {}) {
          w.set(this, new Set()),
            Y.set(this, new Map()),
            H.set(this, new Map()),
            (this.debug = e.debug || {}),
            this.debug.enabled === void 0 && (this.debug.enabled = !1),
            this.debug.logger ||
              (this.debug.logger = (t, o, r, s) => {
                (s = JSON.stringify(s)),
                  typeof r == "symbol" && (r = r.toString());
                let i = new Date(),
                  a = `${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}.${i.getMilliseconds()}`;
                console.log(`[${a}][emittery:${t}][${o}] Event Name: ${r}
	data: ${s}`);
              });
        }
        logIfDebugEnabled(e, t, o) {
          (C.isDebugEnabled || this.debug.enabled) &&
            this.debug.logger(e, this.debug.name, t, o);
        }
        on(e, t) {
          J(t), (e = Array.isArray(e) ? e : [e]);
          for (let o of e)
            O(o),
              k(this, o).add(t),
              this.logIfDebugEnabled("subscribe", o, void 0),
              be(o) || this.emit(z, { eventName: o, listener: t });
          return this.off.bind(this, e, t);
        }
        off(e, t) {
          J(t), (e = Array.isArray(e) ? e : [e]);
          for (let o of e)
            O(o),
              k(this, o).delete(t),
              this.logIfDebugEnabled("unsubscribe", o, void 0),
              be(o) || this.emit(G, { eventName: o, listener: t });
        }
        once(e) {
          return new Promise((t) => {
            let o = this.on(e, (r) => {
              o(), t(r);
            });
          });
        }
        events(e) {
          e = Array.isArray(e) ? e : [e];
          for (let t of e) O(t);
          return Re(this, e);
        }
        emit(e, t) {
          return p(this, null, function* () {
            O(e), this.logIfDebugEnabled("emit", e, t), yt(this, e, t);
            let o = k(this, e),
              r = w.get(this),
              s = [...o],
              i = be(e) ? [] : [...r];
            yield Ne,
              yield Promise.all([
                ...s.map((a) =>
                  p(this, null, function* () {
                    if (o.has(a)) return a(t);
                  })
                ),
                ...i.map((a) =>
                  p(this, null, function* () {
                    if (r.has(a)) return a(e, t);
                  })
                ),
              ]);
          });
        }
        emitSerial(e, t) {
          return p(this, null, function* () {
            O(e), this.logIfDebugEnabled("emitSerial", e, t);
            let o = k(this, e),
              r = w.get(this),
              s = [...o],
              i = [...r];
            yield Ne;
            for (let a of s) o.has(a) && (yield a(t));
            for (let a of i) r.has(a) && (yield a(e, t));
          });
        }
        onAny(e) {
          return (
            J(e),
            this.logIfDebugEnabled("subscribeAny", void 0, void 0),
            w.get(this).add(e),
            this.emit(z, { listener: e }),
            this.offAny.bind(this, e)
          );
        }
        anyEvent() {
          return Re(this);
        }
        offAny(e) {
          J(e),
            this.logIfDebugEnabled("unsubscribeAny", void 0, void 0),
            this.emit(G, { listener: e }),
            w.get(this).delete(e);
        }
        clearListeners(e) {
          e = Array.isArray(e) ? e : [e];
          for (let t of e)
            if (
              (this.logIfDebugEnabled("clear", t, void 0),
              typeof t == "string" || typeof t == "symbol")
            ) {
              k(this, t).clear();
              let o = U(this, t);
              for (let r of o) r.finish();
              o.clear();
            } else {
              w.get(this).clear();
              for (let o of Y.get(this).values()) o.clear();
              for (let o of H.get(this).values()) {
                for (let r of o) r.finish();
                o.clear();
              }
            }
        }
        listenerCount(e) {
          e = Array.isArray(e) ? e : [e];
          let t = 0;
          for (let o of e) {
            if (typeof o == "string") {
              t +=
                w.get(this).size +
                k(this, o).size +
                U(this, o).size +
                U(this).size;
              continue;
            }
            typeof o != "undefined" && O(o), (t += w.get(this).size);
            for (let r of Y.get(this).values()) t += r.size;
            for (let r of H.get(this).values()) t += r.size;
          }
          return t;
        }
        bindMethods(e, t) {
          if (typeof e != "object" || e === null)
            throw new TypeError("`target` must be an object");
          t = He(t);
          for (let o of t) {
            if (e[o] !== void 0)
              throw new Error(
                `The property \`${o}\` already exists on \`target\``
              );
            Object.defineProperty(e, o, {
              enumerable: !1,
              value: this[o].bind(this),
            });
          }
        }
      },
      Ue = Object.getOwnPropertyNames(C.prototype).filter(
        (n) => n !== "constructor"
      );
    Object.defineProperty(C, "listenerAdded", {
      value: z,
      writable: !1,
      enumerable: !0,
      configurable: !1,
    });
    Object.defineProperty(C, "listenerRemoved", {
      value: G,
      writable: !1,
      enumerable: !0,
      configurable: !1,
    });
    je.exports = C;
  });
  var mt = ["essential"],
    le = ["personalization", "analytics", "marketing"],
    ce = "uncategorized",
    K = [...mt, ...le, ce],
    d = "fs-cc",
    St = d + "-ie",
    Se = ["informational", "opt-in", "opt-out"],
    D = { allow: "allow", deny: "deny", submit: "submit" },
    b = {
      banner: `[${d}="banner"]`,
      preferences: `[${d}="preferences"]`,
      manager: `[${d}="manager"]`,
    },
    v = {
      allow: `[${d}="${D.allow}"]`,
      deny: `[${d}="${D.deny}"]`,
      submit: `[${d}="${D.submit}"]`,
      openPreferences: `[${d}="open-preferences"]`,
      close: `[${d}="close"]`,
    },
    de = { interactionTrigger: `[${d}="interaction"]` },
    m = {
      categories: [`${d}-category`, `${d}-categories`],
      disableScroll: `${d}-scroll`,
      displayProperty: `${d}-display`,
      cookieMaxAge: `${d}-expires`,
      mode: `${d}-mode`,
      debugMode: `${d}-debug`,
      endpoint: `${d}-endpoint`,
      componentsSource: `${d}-source`,
      src: `${d}-src`,
      placeholder: `${d}-placeholder`,
    },
    S = { main: d, consentsUpdated: `${d}-updated` };
  var L = {
    checkbox: (n) => `[${d}-checkbox="${n}"]`,
    gtmEvent: (n) => `${n}-activated`,
  };
  var Ae = `<style>${b.banner},${b.manager},${b.preferences},${de.interactionTrigger}{display:none}</style>`;
  var q = Object.freeze({
      analytics: !1,
      essential: !0,
      marketing: !1,
      personalization: !1,
      uncategorized: !1,
    }),
    $ = Object.freeze({
      analytics: !0,
      essential: !0,
      marketing: !0,
      personalization: !0,
      uncategorized: !0,
    }),
    Oe = "180";
  var F = (n, e = "flex") =>
      new Promise((t) => {
        (n.style.opacity = "0"),
          (n.style.display = e),
          (function o() {
            let r = parseFloat(n.style.opacity);
            if (r >= 1) {
              t();
              return;
            }
            let s = r + 0.1;
            (n.style.opacity = s.toString()), requestAnimationFrame(o);
          })();
      }),
    N = (n) =>
      new Promise((e) => {
        (n.style.opacity = "1"),
          (function t() {
            let r = parseFloat(n.style.opacity) - 0.1;
            (n.style.opacity = r.toString()),
              r <= 0
                ? ((n.style.display = "none"), e())
                : requestAnimationFrame(t);
          })();
      });
  var x = class {
    static activateAlerts() {
      this.alertsActivated = !0;
    }
    static alert(e, t) {
      if ((this.alertsActivated && window.alert(e), t === "error"))
        throw new Error(e);
    }
  };
  x.alertsActivated = !1;
  var T = (n, e) => (
    Array.isArray(e) || (e = [e]),
    e.map((o) => n.dispatchEvent(new Event(o, { bubbles: !0 }))).every((o) => o)
  );
  var g = (n, e) => !!n && e.includes(n);
  function fe(n, e, t) {
    let o = t ? [t] : [];
    if (!n) return o;
    let r = n.split(/[ ,]+/);
    if (e) {
      let s = r.filter((i) => g(i, e));
      return s.length ? s : o;
    }
    return r;
  }
  var ue = (n) => Object.entries(n);
  var R = (n) => Object.keys(n);
  var V = (n) => {
    let { overflow: e } = getComputedStyle(n);
    return e === "auto" || e === "scroll";
  };
  var ke = (n) =>
    !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
  var y = (n, e, t = document) => {
    let o = t.querySelector(n);
    if (o instanceof e) return o;
  };
  var W = (n, e = !0) => (
    e !== n.checked && ((n.checked = e), T(n, ["click", "input", "change"])),
    n.type === "checkbox" ? n.checked : n.value
  );
  var Me = (n) => new Promise((e) => setTimeout(e, n));
  var pe = class {
    constructor({ element: e, duration: t }) {
      this.active = !1;
      this.running = !1;
      this.isActive = () => this.active;
      this.isRunning = () => this.running;
      this.untilFinished = () => this.runningPromise;
      var o, r;
      (this.element =
        typeof e == "string"
          ? y(e, HTMLElement) ||
            x.alert(`No interaction with the ${e} selector was found.`, "error")
          : e),
        (this.duration = {
          first:
            typeof t == "number"
              ? t
              : (o = t == null ? void 0 : t.first) != null
              ? o
              : 0,
          second:
            typeof t == "number"
              ? t
              : (r = t == null ? void 0 : t.second) != null
              ? r
              : 0,
        });
    }
    trigger(e) {
      return p(this, null, function* () {
        return (e === "first" && this.active) ||
          (e === "second" && !this.active)
          ? !1
          : (e || (e = this.active ? "second" : "first"),
            T(this.element, "click"),
            (this.running = !0),
            (this.runningPromise = Me(this.duration[e])),
            yield this.runningPromise,
            (this.running = !1),
            (this.active = e === "first"),
            !0);
      });
    }
  };
  var A = class {
    constructor({
      element: e,
      interaction: t,
      displayProperty: o,
      noTransition: r,
      startsHidden: s,
    }) {
      this.isVisible = () => this.visible;
      if (
        ((this.element =
          typeof e == "string"
            ? y(e, HTMLElement) ||
              x.alert(`No element with the ${e} selector was found.`, "error")
            : e),
        (this.noTransition = r),
        (this.displayProperty = o || "block"),
        s
          ? ((this.element.style.display = "none"), (this.visible = !1))
          : (this.visible = ke(this.element)),
        t)
      ) {
        let { element: i, duration: a } = t;
        this.interaction = new pe({ element: i, duration: a });
      }
    }
    show() {
      return p(this, null, function* () {
        this.visible ||
          (this.interaction
            ? yield this.interaction.trigger("first")
            : this.noTransition
            ? (this.element.style.display = this.displayProperty)
            : yield F(this.element, this.displayProperty),
          (this.visible = !0));
      });
    }
    hide() {
      return p(this, null, function* () {
        !this.visible ||
          (this.interaction
            ? yield this.interaction.trigger("second")
            : this.noTransition
            ? (this.element.style.display = "none")
            : yield N(this.element),
          (this.visible = !1));
      });
    }
  };
  A.displayProperties = ["block", "flex", "grid", "inline-block", "inline"];
  var me = () =>
    p(void 0, null, function* () {
      var e;
      let { Webflow: n } = window;
      if (!(!n || !("destroy" in n) || !("ready" in n) || !("require" in n)))
        return (
          n.destroy(),
          n.ready(),
          (e = n.require("ix2")) == null || e.init(),
          new Promise((t) => n.push(() => t(void 0)))
        );
    });
  var ht = { info: "green", warning: "yellow", error: "red" },
    c = class {
      static activate() {
        this.init(), (this.active = !0);
      }
      static init() {
        (this.element = document.createElement("div")),
          Object.assign(this.element.style, {
            position: "fixed",
            left: "auto",
            top: "auto",
            right: "16px",
            bottom: "0px",
            "z-index": "999999",
            "max-width": "320px",
            "font-size": "14px",
            "line-height": "1.25",
          }),
          document.body.appendChild(this.element);
      }
      static alert(e, t) {
        if (!this.active) return;
        let o = document.createElement("div");
        Object.assign(o.style, {
          position: "relative",
          padding: "16px",
          opacity: "0",
          "margin-bottom": "16px",
          "border-left": `4px solid ${ht[t]}`,
          "background-color": "#fff",
          "box-shadow": "1px 1px 3px 0 rgba(0, 0, 0, 0.1)",
          "word-break": "break-all",
        });
        let r = document.createElement("div");
        (r.innerText = e),
          o.appendChild(r),
          o.insertAdjacentHTML(
            "beforeend",
            `<div ${d}="close" style="position: absolute; left: auto; top: 4px; right: 8px; bottom: auto; cursor: pointer">\u2716</div>`
          ),
          this.handleCard(o);
      }
      static handleCard(e) {
        let t = (o) => {
          o.target instanceof Element &&
            o.target.closest(v.close) &&
            (e.removeEventListener("click", t), e.remove());
        };
        e.addEventListener("click", t),
          this.element.insertAdjacentElement("afterbegin", e),
          F(e);
      }
    };
  l(c, "active", !1), l(c, "element");
  var Ie = (n) =>
      p(void 0, null, function* () {
        let { origin: e, pathname: t, href: o } = window.location,
          { origin: r, pathname: s, href: i } = new URL(document.baseURI);
        try {
          n.startsWith("/") &&
            (n = (i === o ? e : r + s).replace(/\/+$/, "") + n);
          let { origin: a, pathname: f } = new URL(n);
          if (a + f === e + t) return;
          let h = yield (yield fetch(n)).text(),
            ot = new DOMParser().parseFromString(h, "text/html");
          Object.values(b).forEach((nt) => {
            let Ce = ot.querySelector(nt);
            Ce && document.body.appendChild(Ce);
          }),
            me();
        } catch (a) {
          c.alert(`${a}`, "error");
        }
      }),
    Pe = (n) => {
      if (V(n)) return n;
      let e = n.querySelectorAll("*");
      for (let t of e) if (V(t)) return t;
    },
    De = ({ element: n }) => {
      let e = document.createElement("script");
      return (
        (e.type = "text/javascript"),
        (e.innerText = n.innerText),
        (e.text = n.text),
        n.src && (e.src = n.src),
        e
      );
    },
    Le = ({ element: n, src: e, placeholder: t }) => {
      let o = document.createElement("iframe");
      for (let { name: r, value: s } of n.attributes) o.setAttribute(r, s);
      return (
        (o.innerText = n.innerText),
        (o.src = e),
        t && o.addEventListener("load", () => N(t)),
        o
      );
    };
  var $e = (s) =>
    p(
      void 0,
      [s],
      function* ({
        id: n,
        endpoint: e,
        consents: t,
        action: o,
        bannerText: r,
      }) {
        if (!!e)
          try {
            let i = JSON.stringify({
                id: n,
                action: o,
                consents: t,
                bannerText: r,
                url: window.location.href,
                userAgent: navigator.userAgent,
              }),
              a = yield fetch(e, { body: i, method: "POST" });
            if (a.ok)
              c.alert(
                "The new consents were successfully POSTed to the API endpoint.",
                "info"
              );
            else throw new Error(`The API returned a ${a.status} status.`);
          } catch (i) {
            c.alert(
              `There was an error while POSTing to the API: ${i}`,
              "error"
            );
          }
      }
    );
  var Fe = (n) => {
    (window.dataLayer = window.dataLayer || []),
      window.dataLayer.find((e) => e.event === n) ||
        (window.dataLayer.push({ event: n }),
        c.alert(`The GTM event ${n} has been fired.`, "info"));
  };
  var ze = ae(Q());
  var Be = (n = 21) => {
    let e = "",
      t = crypto.getRandomValues(new Uint8Array(n));
    for (; n--; ) {
      let o = t[n] & 63;
      o < 36
        ? (e += o.toString(36))
        : o < 62
        ? (e += (o - 26).toString(36).toUpperCase())
        : o < 63
        ? (e += "_")
        : (e += "-");
    }
    return e;
  };
  var _e = (n) => Object.keys(n).every((e) => g(e, K));
  function X(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var o in t) n[o] = t[o];
    }
    return n;
  }
  var bt = {
    read: function (n) {
      return (
        n[0] === '"' && (n = n.slice(1, -1)),
        n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      );
    },
    write: function (n) {
      return encodeURIComponent(n).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    },
  };
  function ge(n, e) {
    function t(r, s, i) {
      if (typeof document != "undefined") {
        (i = X({}, e, i)),
          typeof i.expires == "number" &&
            (i.expires = new Date(Date.now() + i.expires * 864e5)),
          i.expires && (i.expires = i.expires.toUTCString()),
          (r = encodeURIComponent(r)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var a = "";
        for (var f in i)
          !i[f] ||
            ((a += "; " + f), i[f] !== !0 && (a += "=" + i[f].split(";")[0]));
        return (document.cookie = r + "=" + n.write(s, r) + a);
      }
    }
    function o(r) {
      if (!(typeof document == "undefined" || (arguments.length && !r))) {
        for (
          var s = document.cookie ? document.cookie.split("; ") : [],
            i = {},
            a = 0;
          a < s.length;
          a++
        ) {
          var f = s[a].split("="),
            u = f.slice(1).join("=");
          try {
            var h = decodeURIComponent(f[0]);
            if (((i[h] = n.read(u, h)), r === h)) break;
          } catch (tt) {}
        }
        return r ? i[r] : i;
      }
    }
    return Object.create(
      {
        set: t,
        get: o,
        remove: function (r, s) {
          t(r, "", X({}, s, { expires: -1 }));
        },
        withAttributes: function (r) {
          return ge(this.converter, X({}, this.attributes, r));
        },
        withConverter: function (r) {
          return ge(X({}, this.converter, r), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(e) },
        converter: { value: Object.freeze(n) },
      }
    );
  }
  var gt = ge(bt, { path: "/" }),
    E = gt;
  var Ke = () => {
      let n = E.get(S.main);
      if (!n) return;
      let e = JSON.parse(decodeURIComponent(n));
      if (e.consents && _e(e.consents)) return e.consents;
    },
    qe = (n, e, t = 120) => {
      let o = { id: n, consents: e },
        r = encodeURIComponent(JSON.stringify(o));
      E.set(S.main, r, { expires: t });
    },
    Ve = () => {
      let n = E.get();
      for (let e in n) {
        if (e === S.main) continue;
        let t = window.location.host.split(".");
        for (; t.length > 1; )
          E.remove(e),
            E.remove(e, { domain: `.${t.join(".")}` }),
            E.remove(e, { domain: `${t.join(".")}` }),
            t.splice(0, 1);
      }
    },
    We = () => !!E.get(S.consentsUpdated),
    Ye = (n = 120) => {
      E.set(S.consentsUpdated, "true", { expires: n });
    };
  var Z = class extends ze.default {
    constructor(e) {
      super();
      this.store = e;
      this.loadConsents(),
        this.storeElements(),
        document.readyState !== "complete" &&
          window.addEventListener("load", () => {
            this.storeElements(), this.applyConsents();
          }),
        this.applyConsents();
    }
    storeElements() {
      let { store: e } = this,
        t = document.querySelectorAll(`script[type="${d}"], iframe[${m.src}]`),
        o = e.getStoredElements();
      [...t]
        .filter((s) => !o.find(({ element: i }) => s === i))
        .forEach((s) => {
          let i = fe(
            s.getAttribute(m.categories[0]) || s.getAttribute(m.categories[1]),
            K,
            ce
          );
          if (
            (s instanceof HTMLScriptElement &&
              e.storeScript({ categories: i, element: s, active: !1 }),
            s instanceof HTMLIFrameElement)
          ) {
            let a = s.getAttribute(m.src);
            if (!a) return;
            s.src = "";
            let f = s.getAttribute(m.placeholder),
              u = f ? y(f, HTMLElement) : void 0;
            e.storeIFrame({
              categories: i,
              element: s,
              src: a,
              placeholder: u,
              active: !1,
            });
          }
          c.alert(
            `Stored the element: ${s.outerHTML} in the categories: ${i.join(
              ", "
            )}`,
            "info"
          );
        });
    }
    loadConsents() {
      let e = Ke();
      if (!e) return;
      c.alert(
        `The following consents were loaded from the stored cookies: ${JSON.stringify(
          e
        )}`,
        "info"
      ),
        this.store.storeConsents(e),
        We() &&
          (Ve(),
          c.alert("Previously denied cookies have been deleted.", "info"));
    }
    applyConsents() {
      return p(this, null, function* () {
        let { store: e } = this;
        for (let t of e.getActivableElements())
          yield new Promise((o) => {
            let { element: r } = t,
              { src: s, parentElement: i } = r,
              a;
            if (t.type === "script") a = De(t);
            else if (t.type === "iframe") a = Le(t);
            else {
              o(void 0);
              return;
            }
            let f = () => {
              (t.element = a), (t.active = !0), o(void 0);
            };
            s && a.addEventListener("load", f),
              i == null || i.insertBefore(a, r),
              r.remove(),
              s || f();
          });
        e.getConsentsEntries().forEach(([t, o]) => {
          o && Fe(L.gtmEvent(t));
        });
      });
    }
    updateConsents(e, t) {
      let { store: o } = this,
        { cookieMaxAge: r, endpoint: s } = o,
        i = o.storeConsents(e),
        a = Be();
      qe(a, o.getConsents(), r),
        s &&
          $e({
            action: t,
            endpoint: s,
            id: a,
            consents: o.getConsents(),
            bannerText: o.getBannerText() || "",
          }),
        i.length &&
          (Ye(r),
          this.applyConsents(),
          c.alert(
            `The following consents were updated: ${i.join(", ")}`,
            "info"
          )),
        this.emit("updateconsents");
    }
  };
  function Et(n) {
    if (Array.isArray(n)) {
      for (var e = 0, t = Array(n.length); e < n.length; e++) t[e] = n[e];
      return t;
    } else return Array.from(n);
  }
  var Ee = !1;
  typeof window != "undefined" &&
    ((ve = {
      get passive() {
        Ee = !0;
      },
    }),
    window.addEventListener("testPassive", null, ve),
    window.removeEventListener("testPassive", null, ve));
  var ve,
    Ge =
      typeof window != "undefined" &&
      window.navigator &&
      window.navigator.platform &&
      (/iP(ad|hone|od)/.test(window.navigator.platform) ||
        (window.navigator.platform === "MacIntel" &&
          window.navigator.maxTouchPoints > 1)),
    M = [],
    ee = !1,
    we = -1,
    j = void 0,
    B = void 0,
    Je = function (e) {
      return M.some(function (t) {
        return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
      });
    },
    te = function (e) {
      var t = e || window.event;
      return Je(t.target) || t.touches.length > 1
        ? !0
        : (t.preventDefault && t.preventDefault(), !1);
    },
    vt = function (e) {
      if (B === void 0) {
        var t = !!e && e.reserveScrollBarGap === !0,
          o = window.innerWidth - document.documentElement.clientWidth;
        t &&
          o > 0 &&
          ((B = document.body.style.paddingRight),
          (document.body.style.paddingRight = o + "px"));
      }
      j === void 0 &&
        ((j = document.body.style.overflow),
        (document.body.style.overflow = "hidden"));
    },
    wt = function () {
      B !== void 0 && ((document.body.style.paddingRight = B), (B = void 0)),
        j !== void 0 && ((document.body.style.overflow = j), (j = void 0));
    },
    Ct = function (e) {
      return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
    },
    xt = function (e, t) {
      var o = e.targetTouches[0].clientY - we;
      return Je(e.target)
        ? !1
        : (t && t.scrollTop === 0 && o > 0) || (Ct(t) && o < 0)
        ? te(e)
        : (e.stopPropagation(), !0);
    },
    Qe = function (e, t) {
      if (!e) {
        console.error(
          "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
        );
        return;
      }
      if (
        !M.some(function (r) {
          return r.targetElement === e;
        })
      ) {
        var o = { targetElement: e, options: t || {} };
        (M = [].concat(Et(M), [o])),
          Ge
            ? ((e.ontouchstart = function (r) {
                r.targetTouches.length === 1 &&
                  (we = r.targetTouches[0].clientY);
              }),
              (e.ontouchmove = function (r) {
                r.targetTouches.length === 1 && xt(r, e);
              }),
              ee ||
                (document.addEventListener(
                  "touchmove",
                  te,
                  Ee ? { passive: !1 } : void 0
                ),
                (ee = !0)))
            : vt(t);
      }
    },
    Xe = function () {
      Ge
        ? (M.forEach(function (e) {
            (e.targetElement.ontouchstart = null),
              (e.targetElement.ontouchmove = null);
          }),
          ee &&
            (document.removeEventListener(
              "touchmove",
              te,
              Ee ? { passive: !1 } : void 0
            ),
            (ee = !1)),
          (we = -1))
        : wt(),
        (M = []);
    };
  var Ze = ae(Q());
  var oe = class extends Ze.default {
    constructor(e, t) {
      super();
      this.element = e;
      this.store = t;
      l(this, "checkboxes", new Map());
      this.initElements(), this.listenEvents(), this.updateCheckboxes();
    }
    initElements() {
      let e = le.filter((t) => {
        let o = L.checkbox(t),
          r = this.element.querySelector(`input${o}, ${o} input`);
        return !r || r.type !== "checkbox"
          ? !0
          : (r.checked && W(r, !1), this.checkboxes.set(t, r), !1);
      });
      e.length &&
        c.alert(
          `The Consents Form is missing the following checkboxes: ${e
            .map((t) => L.checkbox(t))
            .join(", ")}.`,
          "warning"
        );
    }
    listenEvents() {
      this.element.addEventListener("submit", (e) => this.handleSubmit(e));
    }
    handleSubmit(e) {
      e.preventDefault(), e.stopPropagation();
      let t = {};
      this.checkboxes.forEach((o, r) => {
        var s;
        t[r] = (s = o.checked) != null ? s : !1;
      }),
        this.emit("submit", t);
    }
    updateCheckboxes() {
      let e = this.store.getConsents();
      this.checkboxes.forEach((t, o) => {
        !!e[o] !== t.checked && W(t, e[o]);
      });
    }
    submit() {
      T(this.element, "submit");
    }
  };
  var et = ae(Q());
  var I = class extends et.default {
    constructor(e, t) {
      super();
      this.selector = e;
      this.store = t;
      l(this, "element");
      l(this, "form");
      l(this, "displayController");
      l(this, "scrollableElement");
      l(this, "disableScrollOnOpen", !1);
      l(this, "ready", !1);
      l(this, "isReady", () => this.ready);
      document.readyState === "complete"
        ? this.init()
        : window.addEventListener("load", () => this.init());
    }
    init() {
      let { banner: e, manager: t, preferences: o } = b;
      if (!this.initElements()) {
        switch (this.selector) {
          case e:
            c.alert(
              `No element with the ${e} attribute was found, it is required to have it!`,
              "error"
            );
            break;
          case t:
            c.alert(
              `No element with the ${t} attribute was found, did you want to use the Manager component?`,
              "info"
            );
            break;
          case o:
            c.alert(
              `No element with the ${o} attribute was found, did you want to use the Preferences component?`,
              "info"
            );
            break;
        }
        return;
      }
      this.handleAccessibility(),
        this.listenEvents(),
        (this.ready = !0),
        this.emit("ready", this.element);
    }
    initElements() {
      this.element = y(this.selector, HTMLElement);
      let { element: e, store: t } = this;
      if (!e) return !1;
      let o = y("form", HTMLFormElement, e);
      o && (this.form = new oe(o, t));
      let r = e.getAttribute(m.displayProperty);
      (this.disableScrollOnOpen =
        e.getAttribute(m.disableScroll) === "disable"),
        this.disableScrollOnOpen && (this.scrollableElement = Pe(e));
      let s = y(de.interactionTrigger, HTMLElement, e);
      return (
        (this.displayController = new A({
          element: e,
          interaction: s ? { element: s } : void 0,
          displayProperty: g(r, A.displayProperties) ? r : "flex",
          startsHidden: !0,
        })),
        !0
      );
    }
    handleAccessibility() {
      let { element: e } = this;
      !e ||
        R(v).forEach((t) => {
          let o = e.querySelector(v[t]);
          !o ||
            (o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"));
        });
    }
    listenEvents() {
      let { element: e, form: t } = this;
      !e ||
        (e.addEventListener("click", (o) => this.handleMouseAndKeyboard(o)),
        e.addEventListener("keydown", (o) => this.handleMouseAndKeyboard(o)),
        t == null || t.on("submit", (o) => this.handleFormSubmit(o)));
    }
    handleMouseAndKeyboard(e) {
      var a;
      let { target: t } = e,
        { allow: o, deny: r, close: s, submit: i } = v;
      t instanceof Element &&
        (("key" in e && e.key !== "Enter") ||
          (t.closest(o)
            ? (this.emit("allow"), this.close())
            : t.closest(r)
            ? (this.emit("deny"), this.close())
            : t.closest(s)
            ? this.close()
            : t.closest(i) && ((a = this.form) == null || a.submit())));
    }
    handleFormSubmit(e) {
      this.emit("formsubmit", e), this.close();
    }
    show(e = !0) {
      let {
        element: t,
        displayController: o,
        disableScrollOnOpen: r,
        scrollableElement: s,
      } = this;
      !t ||
        !o ||
        o.isVisible() === e ||
        (o[e ? "show" : "hide"](),
        r && (e ? Qe(s || t, { reserveScrollBarGap: !0 }) : Xe()),
        this.emit(e ? "open" : "close"));
    }
    open() {
      this.ready ? this.show() : this.once("ready").then(() => this.show());
    }
    close() {
      this.ready ? this.show(!1) : this.once("ready").then(() => this.show(!1));
    }
  };
  var ne = class {
    constructor() {
      l(this, "mode");
      l(this, "cookieMaxAge");
      l(this, "debugMode");
      l(this, "endpoint");
      l(this, "componentsSource");
      l(this, "confirmed", !1);
      l(this, "consents");
      l(this, "bannerText", "empty");
      l(this, "scripts", []);
      l(this, "iFrames", []);
      l(this, "userHasConfirmed", () => this.confirmed);
      l(this, "getStoredElements", () => [...this.scripts, ...this.iFrames]);
      l(this, "getActivableElements", () =>
        this.getStoredElements().filter(
          ({ active: e, categories: t }) =>
            !e && t.every((o) => this.consents[o])
        )
      );
      l(this, "getConsents", () => this.consents);
      l(this, "getConsentsEntries", () => ue(this.consents));
      l(this, "getConsent", (e) => this.consents[e]);
      l(this, "getBannerText", () => this.bannerText);
      let { currentScript: e } = document,
        t = e == null ? void 0 : e.getAttribute(m.mode);
      switch (((this.mode = g(t, Se) ? t : "opt-in"), this.mode)) {
        case "informational":
        case "opt-out":
          this.consents = P({}, $);
          break;
        default:
          this.consents = P({}, q);
      }
      this.cookieMaxAge = parseInt(
        (e == null ? void 0 : e.getAttribute(m.cookieMaxAge)) || Oe
      );
      let o = e == null ? void 0 : e.getAttribute(m.debugMode);
      (this.debugMode = o === "" || o === "true"),
        this.debugMode && c.activate(),
        (this.endpoint = e == null ? void 0 : e.getAttribute(m.endpoint)),
        (this.componentsSource =
          e == null ? void 0 : e.getAttribute(m.componentsSource)),
        c.alert(
          `The cookie banner is set to ${
            this.mode
          } mode with a consent expiry time of ${this.cookieMaxAge} days.${
            this.endpoint
              ? `The consents will be POSTed to ${this.endpoint}`
              : ""
          }`,
          "info"
        );
    }
    storeScript(e) {
      this.scripts.push(ie(P({}, e), { type: "script" }));
    }
    storeIFrame(e) {
      this.iFrames.push(ie(P({}, e), { type: "iframe" }));
    }
    storeConsents(e) {
      let t = [];
      return (
        R(e).forEach((o) => {
          if (o === "essential") return;
          let r = e[o];
          r === void 0 ||
            r === this.consents[o] ||
            ((this.consents[o] = r), t.push(o));
        }),
        (this.confirmed = !0),
        t
      );
    }
    storeBannerText(e) {
      e && e.textContent && (this.bannerText = e.textContent);
    }
  };
  var re = class {
    constructor() {
      l(this, "consentController");
      l(this, "store", new ne());
      l(this, "banner");
      l(this, "preferences");
      l(this, "manager");
      (this.consentController = new Z(this.store)),
        this.initComponents().then(() => this.init());
    }
    initComponents() {
      return p(this, null, function* () {
        let { store: e } = this,
          { componentsSource: t } = e,
          { banner: o, preferences: r, manager: s } = b;
        t && (yield Ie(t)),
          (this.banner = new I(o, e)),
          (this.preferences = new I(r, e)),
          (this.manager = new I(s, e));
      });
    }
    init() {
      let { store: e, manager: t, banner: o } = this;
      document.head.insertAdjacentHTML("beforeend", Ae);
      let r = /bot|crawler|spider|crawling/i.test(navigator.userAgent),
        s = navigator.doNotTrack || window.doNotTrack;
      r ||
        !(s ? s !== "yes" && s !== "1" : !0) ||
        (e.userHasConfirmed() ? t.open() : o.open(), this.listenEvents());
    }
    listenEvents() {
      let { allow: e, deny: t, submit: o } = D,
        r = ["banner", "manager", "preferences"],
        { store: s, consentController: i, banner: a, manager: f } = this;
      document.addEventListener("click", (u) => this.handleMouseAndKeyboard(u)),
        document.addEventListener("keydown", (u) =>
          this.handleMouseAndKeyboard(u)
        ),
        a.isReady()
          ? s.storeBannerText(a.element)
          : a.on("ready", (u) => s.storeBannerText(u)),
        i.on("updateconsents", () => {
          r.forEach((u) => {
            var h;
            return (h = this[u].form) == null ? void 0 : h.updateCheckboxes();
          });
        }),
        r.forEach((u) => {
          this[u].on("allow", () => {
            c.alert(`Allow button was clicked in the ${u} component.`, "info"),
              i.updateConsents($, e);
          }),
            this[u].on("deny", () => {
              c.alert(`Deny button was clicked in the ${u} component.`, "info"),
                i.updateConsents(q, t);
            }),
            this[u].on("formsubmit", (h) => {
              c.alert(
                `Consents Form was submitted in the ${u} component with the following consents: ${JSON.stringify(
                  h
                )}`,
                "info"
              ),
                i.updateConsents(h, o);
            }),
            u !== "manager" &&
              this[u].on("close", () => {
                c.alert(`The ${u} component was closed.`, "info"),
                  s.mode === "informational" &&
                    (c.alert(
                      `All cookies were accepted because the mode is set to ${s.mode}.`,
                      "warning"
                    ),
                    i.updateConsents($, e)),
                  f.open();
              });
        });
    }
    handleMouseAndKeyboard(e) {
      let { target: t } = e,
        { banner: o, manager: r, preferences: s } = this;
      t instanceof Element &&
        (("key" in e && e.key !== "Enter") ||
          (t.closest(v.openPreferences) &&
            (o.close(),
            r.close(),
            s.open(),
            c.alert("Open Preferences button was clicked.", "info"))));
    }
  };
  window.FsCC = new re();
})();
/*! js-cookie v3.0.1 | MIT */
