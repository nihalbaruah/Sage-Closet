
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "undefined" },
      ],
      tags: [
        {
          function: "__rep",
          vtp_containerId: "UA-125959790-1",
          vtp_remoteConfig: ["map"],
          tag_id: 1,
        },
        {
          function: "__zone",
          vtp_childContainers: ["list", ["map", "publicId", "G-2XBBXW4MJB"]],
          vtp_enableConfiguration: false,
          tag_id: 3,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ca;
  if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
  else {
    var da;
    a: {
      var ea = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ea;
        da = ja.a;
        break a;
      } catch (a) {}
      da = !1;
    }
    ca = da
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = ca,
    la = function (a, b) {
      a.prototype = ba(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.ek = b.prototype;
    },
    ma = this || self,
    na = function (a) {
      return a;
    };
  var oa = function () {},
    pa = function (a) {
      return "function" === typeof a;
    },
    m = function (a) {
      return "string" === typeof a;
    },
    qa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ra = Array.isArray,
    sa = function (a, b) {
      if (a && ra(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ta = function (a, b) {
      if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    va = function (a, b) {
      for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    wa = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    xa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    za = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Aa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ba = function (a) {
      var b = [];
      if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ca = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Da = function () {
      return new Date(Date.now());
    },
    B = function () {
      return Da().getTime();
    },
    ua = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ua.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ua.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ea = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Fa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ga = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ha = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ja = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    La = /^\w{1,9}$/,
    Ma = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      wa(a, function (d, e) {
        La.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var Na,
    Oa = function () {
      if (void 0 === Na) {
        var a = null,
          b = ma.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: na,
              createScript: na,
              createScriptURL: na,
            });
          } catch (c) {
            ma.console && ma.console.error(c.message);
          }
          Na = a;
        } else Na = a;
      }
      return Na;
    };
  var Qa = function (a, b) {
    this.h = b === Pa ? a : "";
  };
  Qa.prototype.toString = function () {
    return this.h + "";
  };
  var Pa = {};
  var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Sa() {
    var a = ma.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function Ta(a) {
    return -1 != Sa().indexOf(a);
  }
  var Ua = {},
    Va = function (a, b) {
      this.h = b === Ua ? a : "";
    };
  Va.prototype.toString = function () {
    return this.h.toString();
  };
  var Wa = function (a) {
      return a instanceof Va && a.constructor === Va
        ? a.h
        : "type_error:SafeHtml";
    },
    Xa = function (a) {
      var b = a,
        c = Oa(),
        d = c ? c.createHTML(b) : b;
      return new Va(d, Ua);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function Ya(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var F = window,
    H = document,
    Za = navigator,
    $a = H.currentScript && H.currentScript.src,
    ab = function (a, b) {
      var c = F[a];
      F[a] = void 0 === c ? b : c;
      return F[a];
    },
    bb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    cb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    db = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function eb(a, b, c) {
    b &&
      wa(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var fb = function (a, b, c, d) {
      var e = H.createElement("script");
      eb(e, d, cb);
      e.type = "text/javascript";
      e.async = !0;
      var f,
        g = a,
        k = Oa(),
        l = k ? k.createScriptURL(g) : g;
      f = new Qa(l, Pa);
      e.src =
        f instanceof Qa && f.constructor === Qa
          ? f.h
          : "type_error:TrustedResourceUrl";
      var n,
        p,
        q,
        r =
          null ==
          (q = (p = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : q.call(p, "script[nonce]");
      (n = r ? r.nonce || r.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", n);
      bb(e, b);
      c && (e.onerror = c);
      var t = H.getElementsByTagName("script")[0] || H.body || H.head;
      t.parentNode.insertBefore(e, t);
      return e;
    },
    gb = function () {
      if ($a) {
        var a = $a.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    hb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        k = !1;
      g || ((g = H.createElement("iframe")), (k = !0));
      eb(g, c, db);
      d &&
        wa(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (k) {
        var l = (H.body && H.body.lastChild) || H.body || H.head;
        l.parentNode.insertBefore(g, l);
      }
      bb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    ib = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    jb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    kb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      F.setTimeout(a, 0);
    },
    lb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    mb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    nb = function (a) {
      var b = H.createElement("div"),
        c = b,
        d = Xa("A<div>" + a + "</div>");
      void 0 !== c.tagName && Ya(c);
      c.innerHTML = Wa(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    ob = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    pb = function (a) {
      var b;
      try {
        b = Za.sendBeacon && Za.sendBeacon(a);
      } catch (c) {}
      b || ib(a);
    },
    qb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var rb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    sb = function (a) {
      if (null == a) return String(a);
      var b = rb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    tb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    ub = function (a) {
      if (!a || "object" != sb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !tb(a, "constructor") &&
          !tb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || tb(a, b);
    },
    M = function (a, b) {
      var c = b || ("array" == sb(a) ? [] : {}),
        d;
      for (d in a)
        if (tb(a, d)) {
          var e = a[d];
          "array" == sb(e)
            ? ("array" != sb(c[d]) && (c[d] = []), (c[d] = M(e, c[d])))
            : ub(e)
            ? (ub(c[d]) || (c[d] = {}), (c[d] = M(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var vb = function (a) {
    if (void 0 === a || ra(a) || ub(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var wb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      dh: a("consent"),
      eh: a("consent_always_fire"),
      pf: a("convert_case_to"),
      qf: a("convert_false_to"),
      rf: a("convert_null_to"),
      sf: a("convert_true_to"),
      tf: a("convert_undefined_to"),
      tj: a("debug_mode_metadata"),
      qb: a("function"),
      Ae: a("instance_name"),
      Ph: a("live_only"),
      Qh: a("malware_disabled"),
      Rh: a("metadata"),
      Uh: a("original_activity_id"),
      Uj: a("original_vendor_template_id"),
      Tj: a("once_on_load"),
      Th: a("once_per_event"),
      Rf: a("once_per_load"),
      Vj: a("priority_override"),
      Wj: a("respected_consent_types"),
      Xf: a("setup_tags"),
      Zf: a("tag_id"),
      ag: a("teardown_tags"),
    };
  })();
  var Vb;
  var Wb = [],
    Xb = [],
    Yb = [],
    Zb = [],
    $b = [],
    ac = {},
    bc,
    cc,
    dc,
    ec = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = ac[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.ng && d.ng(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === wb.eh.toString() && a[g]) {
          }
      e && d && d.mg && (f.vtp_gtmCachedValues = d.mg);
      if (b) {
        if (null == b.name) {
          var k;
          a: {
            var l = b.index;
            if (null == l) k = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = Wb[l];
                  break;
                case 1:
                  n = Zb[l];
                  break;
                default:
                  k = "";
                  break a;
              }
              var p = n && n[wb.Ae];
              k = p ? String(p) : "";
            }
          }
          b.name = k;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : Vb(c, f, b);
    },
    gc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = fc(a[e], b, c));
      return d;
    },
    fc = function (a, b, c) {
      if (ra(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(fc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = Wb[f];
            if (!g || b.Ue(g)) return;
            c[f] = !0;
            var k = String(g[wb.Ae]);
            try {
              var l = gc(g, b, c);
              l.vtp_gtmEventId = b.id;
              b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
              d = ec(l, { event: b, index: f, type: 2, name: k });
              dc && (d = dc.gi(d, l));
            } catch (w) {
              b.Eg && b.Eg(w, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[fc(a[n], b, c)] = fc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = fc(a[q], b, c);
              cc && (p = p || r === cc.qd);
              d.push(r);
            }
            return cc && p ? cc.ii(d) : d.join("");
          case "escape":
            d = fc(a[1], b, c);
            if (cc && ra(a[1]) && "macro" === a[1][0] && cc.Di(a))
              return cc.Ui(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) xb[a[t]] && (d = xb[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Zb[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { ug: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var x = ic(v, b, c),
              y = !!a[4];
            return y || 2 !== x ? y !== (1 === x) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    ic = function (a, b, c) {
      try {
        return bc(gc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var lc = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = jc(a), f = 0; f < Xb.length; f++) {
        var g = Xb[f],
          k = kc(g, e);
        if (k) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < Zb.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    kc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    jc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ic(Yb[c], a));
        return b[c];
      };
    };
  var mc = {
    gi: function (a, b) {
      b[wb.pf] &&
        "string" === typeof a &&
        (a = 1 == b[wb.pf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(wb.rf) && null === a && (a = b[wb.rf]);
      b.hasOwnProperty(wb.tf) && void 0 === a && (a = b[wb.tf]);
      b.hasOwnProperty(wb.sf) && !0 === a && (a = b[wb.sf]);
      b.hasOwnProperty(wb.qf) && !1 === a && (a = b[wb.qf]);
      return a;
    },
  };

  var Lc = function (a) {
      return Kc ? H.querySelectorAll(a) : null;
    },
    Mc = function (a, b) {
      if (!Kc) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Nc = !1;
  if (H.querySelectorAll)
    try {
      var Oc = H.querySelectorAll(":root");
      Oc && 1 == Oc.length && Oc[0] == H.documentElement && (Nc = !0);
    } catch (a) {}
  var Kc = Nc;
  var Pc = {},
    Qc = function (a, b) {
      Pc[a] = Pc[a] || [];
      Pc[a][b] = !0;
    },
    Rc = function (a) {
      for (var b = [], c = Pc[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    Sc = function () {
      for (var a = [], b = Pc.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var Q = function (a) {
    Qc("GTM", a);
  };
  var T = {
      g: {
        H: "ad_storage",
        M: "analytics_storage",
        lf: "region",
        nf: "wait_for_update",
        hh: "app_remove",
        ih: "app_store_refund",
        jh: "app_store_subscription_cancel",
        kh: "app_store_subscription_convert",
        lh: "app_store_subscription_renew",
        uf: "add_payment_info",
        mh: "add_shipping_info",
        Cb: "add_to_cart",
        Db: "remove_from_cart",
        nh: "view_cart",
        ib: "begin_checkout",
        Wd: "select_item",
        jb: "view_item_list",
        Xd: "select_promotion",
        Eb: "view_promotion",
        xa: "purchase",
        Fb: "refund",
        ya: "view_item",
        vf: "add_to_wishlist",
        oh: "first_open",
        ph: "first_visit",
        Ea: "gtag.config",
        La: "gtag.get",
        qh: "in_app_purchase",
        Yb: "page_view",
        rh: "session_start",
        Zb: "user_engagement",
        Yd: "gclid",
        da: "ads_data_redaction",
        W: "allow_ad_personalization_signals",
        Zd: "allow_custom_scripts",
        sh: "allow_display_features",
        Tc: "allow_enhanced_conversions",
        ac: "allow_google_signals",
        za: "allow_interest_groups",
        th: "auid",
        uh: "auto_detection_enabled",
        kb: "aw_remarketing",
        ae: "aw_remarketing_only",
        be: "discount",
        ce: "aw_feed_country",
        de: "aw_feed_language",
        Z: "items",
        ee: "aw_merchant_id",
        Uc: "campaign_content",
        Vc: "campaign_id",
        Wc: "campaign_medium",
        Xc: "campaign_name",
        bc: "campaign",
        Yc: "campaign_source",
        Zc: "campaign_term",
        ka: "client_id",
        vh: "content_group",
        wh: "content_type",
        Fa: "conversion_cookie_prefix",
        uj: "conversion_id",
        vj: "conversion_label",
        la: "conversion_linker",
        wj: "conversion_api",
        ma: "cookie_domain",
        Aa: "cookie_expires",
        Ma: "cookie_flags",
        Gb: "cookie_name",
        Ua: "cookie_path",
        Ga: "cookie_prefix",
        Hb: "cookie_update",
        ad: "country",
        na: "currency",
        fe: "customer_lifetime_value",
        cc: "custom_map",
        xj: "debug_mode",
        X: "developer_id",
        wf: "disable_merchant_reported_purchases",
        xh: "dc_custom_params",
        yh: "dc_natural_search",
        he: "dynamic_event_settings",
        zh: "affiliation",
        xf: "checkout_option",
        yf: "checkout_step",
        Ah: "coupon",
        ie: "list_name",
        Bh: "promotions",
        je: "shipping",
        zf: "tax",
        bd: "engagement_time_msec",
        Va: "enhanced_client_id",
        ke: "enhanced_conversions",
        Af: "enhanced_conversions_automatic_settings",
        yj: "enhanced_conversions_mode",
        me: "estimated_delivery_date",
        fc: "euid_logged_in_state",
        Ib: "event_callback",
        ne: "event_developer_id_string",
        zj: "event",
        cd: "event_settings",
        dd: "event_timeout",
        Ch: "experiments",
        oe: "firebase_id",
        hc: "first_party_collection",
        ed: "_x_20",
        lb: "_x_19",
        Aj: "fledge",
        Bj: "gac_gclid",
        Cj: "gac_wbraid",
        Dj: "gac_wbraid_multiple_conversions",
        ic: "ga_restrict_domain",
        pe: "ga_temp_client_id",
        Ej: "gdpr_applies",
        Bf: "geo_granularity",
        Wa: "value_callback",
        Na: "value_key",
        qe: "global_developer_id_string",
        Fj: "google_ono",
        Xa: "google_signals",
        fd: "google_tld",
        gd: "groups",
        Gj: "gsa_experiment_id",
        Hj: "iframe_state",
        hd: "ignore_referrer",
        se: "internal_traffic_results",
        Ij: "is_passthrough",
        nb: "language",
        Jj: "legacy_developer_id_string",
        oa: "linker",
        Jb: "accept_incoming",
        Kb: "decorate_forms",
        N: "domains",
        jc: "url_position",
        Cf: "method",
        te: "new_customer",
        Df: "non_interaction",
        Dh: "optimize_id",
        Ya: "page_location",
        ue: "page_path",
        Za: "page_referrer",
        jd: "page_title",
        Ef: "passengers",
        Ff: "phone_conversion_callback",
        Eh: "phone_conversion_country_code",
        Gf: "phone_conversion_css_class",
        Fh: "phone_conversion_ids",
        Hf: "phone_conversion_number",
        If: "phone_conversion_options",
        Jf: "quantity",
        ve: "redact_device_info",
        Kf: "redact_enhanced_user_id",
        Gh: "redact_ga_client_id",
        Hh: "redact_user_id",
        kd: "referral_exclusion_definition",
        kc: "restricted_data_processing",
        Ih: "retoken",
        Lf: "screen_name",
        we: "screen_resolution",
        Jh: "search_term",
        Ba: "send_page_view",
        ob: "send_to",
        mc: "session_duration",
        nc: "session_engaged",
        ld: "session_engaged_time",
        pb: "session_id",
        oc: "session_number",
        md: "delivery_postal_code",
        Kj: "tc_privacy_string",
        Mf: "temporary_client_id",
        Kh: "tracking_id",
        xe: "traffic_type",
        ab: "transaction_id",
        V: "transport_url",
        Nf: "trip_type",
        nd: "update",
        cb: "url_passthrough",
        qa: "user_data",
        Lj: "user_data_auto_latency",
        Mj: "user_data_auto_meta",
        Nj: "user_data_auto_multi",
        Oj: "user_data_auto_selectors",
        Pj: "user_data_auto_status",
        Lb: "user_data_settings",
        Ha: "user_id",
        Ia: "user_properties",
        Qj: "us_privacy_string",
        ja: "value",
        Rj: "wbraid",
        Sj: "wbraid_multiple_conversions",
        Pf: "_is_linker_valid",
        Qf: "_is_passthrough_cid",
      },
    },
    md = {},
    nd = Object.freeze(
      ((md[T.g.W] = 1),
      (md[T.g.Tc] = 1),
      (md[T.g.ac] = 1),
      (md[T.g.Z] = 1),
      (md[T.g.ma] = 1),
      (md[T.g.Aa] = 1),
      (md[T.g.Ma] = 1),
      (md[T.g.Gb] = 1),
      (md[T.g.Ua] = 1),
      (md[T.g.Ga] = 1),
      (md[T.g.Hb] = 1),
      (md[T.g.cc] = 1),
      (md[T.g.X] = 1),
      (md[T.g.he] = 1),
      (md[T.g.Ib] = 1),
      (md[T.g.cd] = 1),
      (md[T.g.dd] = 1),
      (md[T.g.hc] = 1),
      (md[T.g.ic] = 1),
      (md[T.g.Xa] = 1),
      (md[T.g.fd] = 1),
      (md[T.g.gd] = 1),
      (md[T.g.se] = 1),
      (md[T.g.oa] = 1),
      (md[T.g.kd] = 1),
      (md[T.g.kc] = 1),
      (md[T.g.Ba] = 1),
      (md[T.g.ob] = 1),
      (md[T.g.mc] = 1),
      (md[T.g.ld] = 1),
      (md[T.g.md] = 1),
      (md[T.g.V] = 1),
      (md[T.g.nd] = 1),
      (md[T.g.Lb] = 1),
      (md[T.g.Ia] = 1),
      md)
    ),
    od = Object.freeze([
      T.g.Ya,
      T.g.Za,
      T.g.jd,
      T.g.nb,
      T.g.Lf,
      T.g.Ha,
      T.g.oe,
      T.g.vh,
    ]),
    pd = {},
    qd = Object.freeze(
      ((pd[T.g.hh] = 1),
      (pd[T.g.ih] = 1),
      (pd[T.g.jh] = 1),
      (pd[T.g.kh] = 1),
      (pd[T.g.lh] = 1),
      (pd[T.g.oh] = 1),
      (pd[T.g.ph] = 1),
      (pd[T.g.qh] = 1),
      (pd[T.g.rh] = 1),
      (pd[T.g.Zb] = 1),
      pd)
    ),
    rd = {},
    sd = Object.freeze(
      ((rd[T.g.uf] = 1),
      (rd[T.g.mh] = 1),
      (rd[T.g.Cb] = 1),
      (rd[T.g.Db] = 1),
      (rd[T.g.nh] = 1),
      (rd[T.g.ib] = 1),
      (rd[T.g.Wd] = 1),
      (rd[T.g.jb] = 1),
      (rd[T.g.Xd] = 1),
      (rd[T.g.Eb] = 1),
      (rd[T.g.xa] = 1),
      (rd[T.g.Fb] = 1),
      (rd[T.g.ya] = 1),
      (rd[T.g.vf] = 1),
      rd)
    ),
    td = Object.freeze([T.g.W, T.g.ac, T.g.Hb]),
    ud = Object.freeze([].concat(td)),
    vd = Object.freeze([T.g.Aa, T.g.dd, T.g.mc, T.g.ld, T.g.bd]),
    wd = Object.freeze([].concat(vd)),
    xd = {},
    yd = ((xd[T.g.H] = "1"), (xd[T.g.M] = "2"), xd),
    zd = {},
    Ad = Object.freeze(
      ((zd[T.g.W] = 1),
      (zd[T.g.Tc] = 1),
      (zd[T.g.za] = 1),
      (zd[T.g.kb] = 1),
      (zd[T.g.ae] = 1),
      (zd[T.g.be] = 1),
      (zd[T.g.ce] = 1),
      (zd[T.g.de] = 1),
      (zd[T.g.Z] = 1),
      (zd[T.g.ee] = 1),
      (zd[T.g.Fa] = 1),
      (zd[T.g.la] = 1),
      (zd[T.g.ma] = 1),
      (zd[T.g.Aa] = 1),
      (zd[T.g.Ma] = 1),
      (zd[T.g.Ga] = 1),
      (zd[T.g.na] = 1),
      (zd[T.g.fe] = 1),
      (zd[T.g.X] = 1),
      (zd[T.g.wf] = 1),
      (zd[T.g.ke] = 1),
      (zd[T.g.me] = 1),
      (zd[T.g.oe] = 1),
      (zd[T.g.hc] = 1),
      (zd[T.g.nb] = 1),
      (zd[T.g.te] = 1),
      (zd[T.g.Ya] = 1),
      (zd[T.g.Za] = 1),
      (zd[T.g.Ff] = 1),
      (zd[T.g.Gf] = 1),
      (zd[T.g.Hf] = 1),
      (zd[T.g.If] = 1),
      (zd[T.g.kc] = 1),
      (zd[T.g.Ba] = 1),
      (zd[T.g.ob] = 1),
      (zd[T.g.md] = 1),
      (zd[T.g.ab] = 1),
      (zd[T.g.V] = 1),
      (zd[T.g.nd] = 1),
      (zd[T.g.cb] = 1),
      (zd[T.g.qa] = 1),
      (zd[T.g.Ha] = 1),
      (zd[T.g.ja] = 1),
      zd)
    );
  Object.freeze(T.g);
  var Bd = {},
    U = (F.google_tag_manager = F.google_tag_manager || {}),
    Cd = Math.random();
  Bd.xd = "6t0";
  Bd.aa = "dataLayer";
  Bd.gh =
    "ChAI8Nn/lQYQyoP7t+bdkLEUEicA8//PGrqZ+aL9RARfEMMnbPMKVAbtiJDTW7MdGUNUgeqc5nKhPBcaAjWL";
  var Dd = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Ed = { __paused: !0, __tg: !0 },
    Fd;
  for (Fd in Dd) Dd.hasOwnProperty(Fd) && (Ed[Fd] = !0);
  Bd.Xb = "www.googletagmanager.com";
  var Gd,
    Id = Bd.Xb + "/gtm.js";
  Id = Bd.Xb + "/gtag/js";
  Gd = Id;
  var Jd = Aa(""),
    Kd = Aa(""),
    Ld = null,
    Md = null,
    Nd = {},
    Od = {},
    Pd = function () {
      var a = U.sequence || 1;
      U.sequence = a + 1;
      return a;
    };
  Bd.fh = "";
  var Qd = "";
  Bd.yd = Qd;
  var Rd = new ua(),
    Sd = {},
    Td = {},
    Wd = {
      name: Bd.aa,
      set: function (a, b) {
        M(Ja(a, b), Sd);
        Ud();
      },
      get: function (a) {
        return Vd(a, 2);
      },
      reset: function () {
        Rd = new ua();
        Sd = {};
        Ud();
      },
    },
    Vd = function (a, b) {
      return 2 != b ? Rd.get(a) : Xd(a);
    },
    Xd = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Sd, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Yd = function (a, b) {
      Td.hasOwnProperty(a) || (Rd.set(a, b), M(Ja(a, b), Sd), Ud());
    },
    Ud = function (a) {
      wa(Td, function (b, c) {
        Rd.set(b, c);
        M(Ja(b), Sd);
        M(Ja(b, c), Sd);
        a && delete Td[b];
      });
    },
    Zd = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Xd(a) : Rd.get(a);
      "array" === sb(d) || "object" === sb(d) ? (c = M(d)) : (c = d);
      return c;
    };
  var $d,
    ae = !1,
    be = function (a) {
      if (!ae) {
        ae = !0;
        $d = $d || {};
      }
      return $d[a];
    };
  var ce = function (a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !F.getComputedStyle)
      return !0;
    var c = F.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        0 <= k &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = F.getComputedStyle(d, null));
    }
    return !1;
  };
  var le = /:[0-9]+$/,
    me = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    pe = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = ne(a.protocol) || ne(F.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : F.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || F.location.hostname)
            .replace(le, "")
            .toLowerCase());
      return oe(a, b, c, d, e);
    },
    oe = function (a, b, c, d, e) {
      var f,
        g = ne(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = qe(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(le, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Qc("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = me(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    ne = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    qe = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    re = function (a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Qc("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(le, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    se = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = re(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var l = "" + f + g + k;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var te = {};
  var Ve = {},
    We = function (a, b) {
      if (F._gtmexpgrp && F._gtmexpgrp.hasOwnProperty(a))
        return F._gtmexpgrp[a];
      void 0 === Ve[a] && (Ve[a] = Math.floor(Math.random() * b));
      return Ve[a];
    };
  var Ye = { pg: "IN", aj: "IN-AS" };
  var Ze = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var af = function () {
    var a = $e,
      b = "Se";
    if (a.Se && a.hasOwnProperty(b)) return a.Se;
    var c = new a();
    a.Se = c;
    a.hasOwnProperty(b);
    return c;
  };
  var $e = function () {
    var a = {};
    this.h = function () {
      var b = Ze.h,
        c = Ze.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[Ze.h] = !0;
    };
  };
  var bf = [];
  function cf() {
    var a = ab("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: df,
        update: ef,
        addListener: ff,
        notifyListeners: gf,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function df(a, b, c, d, e, f) {
    var g = cf();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var k = g.entries,
        l = k[a] || {},
        n = l.region,
        p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) k[a] = r;
        q &&
          F.setTimeout(function () {
            k[a] === r &&
              r.quiet &&
              ((r.quiet = !1), hf(a), gf(), Qc("TAGGING", 2));
          }, f);
      }
    }
  }
  function ef(a, b) {
    var c = cf();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = jf(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = jf(c, a);
      f.quiet ? ((f.quiet = !1), hf(a)) : g !== d && hf(a);
    }
  }
  function ff(a, b) {
    bf.push({ Ke: a, oi: b });
  }
  function hf(a) {
    for (var b = 0; b < bf.length; ++b) {
      var c = bf[b];
      ra(c.Ke) && -1 !== c.Ke.indexOf(a) && (c.Jg = !0);
    }
  }
  function gf(a, b) {
    for (var c = 0; c < bf.length; ++c) {
      var d = bf[c];
      if (d.Jg) {
        d.Jg = !1;
        try {
          d.oi({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function jf(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var kf = function (a) {
      var b = cf();
      b.accessedAny = !0;
      return jf(b, a);
    },
    lf = function (a) {
      var b = cf();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    mf = function (a) {
      var b = cf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    nf = function () {
      if (!af().h()) return !1;
      var a = cf();
      a.accessedAny = !0;
      return a.active;
    },
    of = function () {
      var a = cf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    pf = function (a, b) {
      cf().addListener(a, b);
    },
    qf = function (a, b) {
      cf().notifyListeners(a, b);
    },
    rf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!mf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        pf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    sf = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          !1 === kf(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = m(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        pf(d, function (f) {
          var g = c();
          0 < g.length && ((f.Ke = g), a(f));
        });
    };
  function tf() {}
  function uf() {}
  function vf(a) {
    for (var b = [], c = 0; c < wf.length; c++) {
      var d = a(wf[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var wf = [T.g.H, T.g.M],
    xf = function (a) {
      var b = a[T.g.lf];
      b && Q(40);
      var c = a[T.g.nf];
      c && Q(41);
      for (
        var d = ra(b) ? b : [b], e = { Tb: 0 };
        e.Tb < d.length;
        e = { Tb: e.Tb }, ++e.Tb
      )
        wa(
          a,
          (function (f) {
            return function (g, k) {
              if (g !== T.g.lf && g !== T.g.nf) {
                var l = d[f.Tb],
                  n = Ye.pg,
                  p = Ye.aj;
                cf().set(g, k, l, n, p, c);
              }
            };
          })(e)
        );
    },
    yf = 0,
    zf = function (a, b) {
      wa(a, function (e, f) {
        cf().update(e, f);
      });
      qf(b.eventId, b.priorityId);
      var c = B(),
        d = c - yf;
      yf && 0 <= d && 1e3 > d && Q(66);
      yf = c;
    },
    Af = function (a) {
      var b = kf(a);
      return void 0 != b ? b : !0;
    },
    Bf = function () {
      return "G1" + vf(kf);
    },
    Cf = function (a, b) {
      sf(a, b);
    },
    Df = function (a, b) {
      rf(a, b);
    };
  var Ef = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Ff = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var l = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  };
  var Gf = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Hf = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function If(a) {
    return "null" !== a.origin;
  }
  var Lf = function (a, b, c, d) {
      return Jf(d) ? Ff(a, String(b || Kf()), c) : [];
    },
    Of = function (a, b, c, d, e) {
      if (Jf(e)) {
        var f = Mf(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Nf(
            f,
            function (g) {
              return g.Ed;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Nf(
            f,
            function (g) {
              return g.Fc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Pf(a, b, c, d) {
    var e = Kf(),
      f = window;
    If(f) && (f.document.cookie = a);
    var g = Kf();
    return e != g || (void 0 != c && 0 <= Lf(b, g, !1, d).indexOf(c));
  }
  var Tf = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete g[u], t;
        g[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete g[u], t;
        g[u] = !0;
        return t + "; " + u;
      }
      if (!Jf(c.Pa)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Qf(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      f = d(f, "expires", k);
      f = d(f, "max-age", c.Zj);
      f = d(f, "samesite", c.ck);
      c.dk && (f = e(f, "secure"));
      var l = c.domain;
      if (l && "auto" === l.toLowerCase()) {
        for (var n = Rf(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Sf(q, c.path) && Pf(r, a, b, c.Pa)) return 0;
        }
        return 1;
      }
      l && "none" !== l.toLowerCase() && (f = d(f, "domain", l));
      f = e(f, c.flags);
      return Sf(l, c.path) ? 1 : Pf(f, a, b, c.Pa) ? 0 : 1;
    },
    Uf = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Tf(a, b, c);
    };
  function Nf(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Mf(a, b, c) {
    for (var d = [], e = Lf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = g.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: g.join("."), Ed: 1 * l[0] || 1, Fc: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var Qf = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Vf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Wf = /(^|\.)doubleclick\.net$/i,
    Sf = function (a, b) {
      return (
        Wf.test(window.document.location.hostname) || ("/" === b && Vf.test(a))
      );
    },
    Kf = function () {
      return If(window) ? window.document.cookie : "";
    },
    Rf = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Wf.test(e) || Vf.test(e) || a.push("none");
      return a;
    },
    Jf = function (a) {
      if (!af().h() || !a || !nf()) return !0;
      if (!mf(a)) return !1;
      var b = kf(a);
      return null == b ? !0 : !!b;
    };
  var Xf = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Ef(a) & 2147483647)) : String(b);
    },
    Yf = function (a) {
      return [Xf(a), Math.round(B() / 1e3)].join(".");
    },
    ag = function (a, b, c, d, e) {
      var f = Zf(b);
      return Of(a, f, $f(c), d, e);
    },
    bg = function (a, b, c, d) {
      var e = "" + Zf(c),
        f = $f(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Zf = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    $f = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var cg = function () {
    U.dedupe_gclid || (U.dedupe_gclid = "" + Yf());
    return U.dedupe_gclid;
  };
  var dg = function () {
    var a = !1;
    return a;
  };
  var eg = { I: "UA-125959790-1", Wb: "" },
    fg = { Hg: "UA-125959790-1", Ig: "UA-125959790-1" },
    gg = function () {
      var a = [eg.I];
      fg.Hg && (a = fg.Hg.split("|"));
      return a;
    },
    hg = function () {
      var a = [eg.I];
      return a;
    },
    ig = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    kg = function (a) {
      return jg().container.hasOwnProperty(a);
    };
  function jg() {
    var a = U.tidr;
    a || ((a = new ig()), (U.tidr = a));
    return a;
  }
  var lg;
  if (3 === Bd.xd.length) lg = "g";
  else {
    var mg = "G";
    mg = "g";
    lg = mg;
  }
  var ng = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: lg,
      OPT: "o",
    },
    og = function (a) {
      var b = eg.I.split("-"),
        c = b[0].toUpperCase(),
        d = ng[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Bd.xd.length) {
        var g = "w";
        g = dg() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Bd.xd + e;
    };
  function pg(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var qg = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Cg() {
    return Ta("iPhone") && !Ta("iPod") && !Ta("iPad");
  }
  Ta("Opera");
  Ta("Trident") || Ta("MSIE");
  Ta("Edge");
  !Ta("Gecko") ||
    (-1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge")) ||
    Ta("Trident") ||
    Ta("MSIE") ||
    Ta("Edge");
  -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
  Ta("Macintosh");
  Ta("Windows");
  Ta("Linux") || Ta("CrOS");
  var Dg = ma.navigator || null;
  Dg && (Dg.appVersion || "").indexOf("X11");
  Ta("Android");
  Cg();
  Ta("iPad");
  Ta("iPod");
  Cg() || Ta("iPad") || Ta("iPod");
  Sa().toLowerCase().indexOf("kaios");
  var Eg = function (a) {
    if (!a || !H.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var Fg = function () {};
  var Gg = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Hg = function (a, b, c) {
      this.s = a;
      this.h = null;
      this.J = {};
      this.ia = 0;
      this.R = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.B = null;
    };
  la(Hg, Fg);
  Hg.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = Hf(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.R &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.R));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Gg(c)),
          (c.internalBlockOnErrors = b.D),
          (k && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Ig(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Hg.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ig(this, "removeEventListener", null, a.listenerId);
  };
  var Kg = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c
        ? ((k = 0), 2 === g && (k = 1))
        : 3 === c && ((k = 1), 1 === g && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Jg(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Jg(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Jg(a.purpose.legitimateInterests, b) &&
                Jg(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Jg = function (a, b) {
      return !(!a || !a[b]);
    },
    Ig = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Lg(a)) {
        Mg(a);
        var f = ++a.ia;
        a.J[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Lg = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Mg = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.J[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        qg(a.s, a.B));
    };
  var Ng = !0;
  Ng = !1;
  var Og = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Pg = pg("", 550),
    Qg = pg("", 500);
  function Rg() {
    var a = U.tcf || {};
    return (U.tcf = a);
  }
  var Wg = function () {
    var a = Rg(),
      b = new Hg(F, Ng ? 3e3 : -1);
    if (
      !0 === F.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof F.__tcfapi ||
        "function" === typeof b.s.__tcfapi ||
        null != Lg(b))
    ) {
      a.active = !0;
      a.Hc = {};
      Sg();
      var c = null;
      Ng
        ? (c = F.setTimeout(function () {
            Tg(a);
            Ug(a);
            c = null;
          }, Qg))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Tg(a), Ug(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Vg()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Og)
                if (Og.hasOwnProperty(g))
                  if ("1" === g) {
                    var k = d,
                      l = !0;
                    l = void 0 === l ? !1 : l;
                    var n;
                    var p = k;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = Gg(p)),
                        (n =
                          "error" === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : "loaded" !== p.cmpStatus ||
                              ("tcloaded" !== p.eventStatus &&
                                "useractioncomplete" !== p.eventStatus)
                            ? !1
                            : !0));
                    f["1"] = n
                      ? !1 === k.gdprApplies ||
                        "tcunavailable" === k.tcString ||
                        (void 0 === k.gdprApplies && !l) ||
                        "string" !== typeof k.tcString ||
                        !k.tcString.length
                        ? !0
                        : Kg(k, "1", 0)
                      : !1;
                  } else f[g] = Kg(d, g, Og[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Hc = e), Ug(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Tg(a), Ug(a);
      }
    }
  };
  function Tg(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Ng && (a.Hc = Vg());
  }
  function Sg() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Pg), a);
    xf(b);
  }
  function Vg() {
    var a = {},
      b;
    for (b in Og) Og.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Ug(a) {
    var b = {},
      c = ((b.ad_storage = a.Hc["1"] ? "granted" : "denied"), b);
    zf(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Xg() }
    );
  }
  var Xg = function () {
      var a = Rg();
      return a.active ? a.tcString || "" : "";
    },
    Yg = function () {
      var a = Rg();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Zg = function (a) {
      if (!Og.hasOwnProperty(String(a))) return !0;
      var b = Rg();
      return b.active && b.Hc ? !!b.Hc[String(a)] : !0;
    };
  function $g(a, b, c) {
    var d,
      e = Number(null != a.Qb ? a.Qb : void 0);
    0 !== e && (d = new Date((b || B()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var ah = ["1"],
    bh = {},
    ch = {},
    gh = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = dh(a.prefix);
      if (!bh[c] && !eh(c, a.path, a.domain) && b) {
        var d = dh(a.prefix),
          e = Yf();
        if (0 === fh(d, e, a)) {
          var f = ab("google_tag_data", {});
          f._gcl_au ? Qc("GTM", 57) : (f._gcl_au = e);
        }
        eh(c, a.path, a.domain);
      }
    };
  function fh(a, b, c, d) {
    var e = bg(b, "1", c.domain, c.path),
      f = $g(c, d);
    f.Pa = "ad_storage";
    return Uf(a, e, f);
  }
  function eh(a, b, c) {
    var d = ag(a, b, c, ah, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((bh[a] = e.slice(0, 2).join(".")),
        (ch[a] = { id: e.slice(2, 4).join("."), Cg: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (ch[a] = { id: e.slice(0, 2).join("."), Cg: Number(e[2]) || 0 })
      : (bh[a] = d);
    return !0;
  }
  function dh(a) {
    return (a || "_gcl") + "_au";
  }
  function hh() {
    for (var a = ih, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function jh() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ih, kh;
  function lh(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = kh[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    ih = ih || jh();
    kh = kh || hh();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var mh;
  var qh = function () {
      var a = nh,
        b = oh,
        c = ph(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        jb(H, "mousedown", d);
        jb(H, "keyup", d);
        jb(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    rh = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      ph().decorators.push(f);
    },
    sh = function (a, b, c) {
      for (var d = ph().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if ((k = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== H.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ga(e, g.callback());
        }
      }
      return e;
    };
  function ph() {
    var a = ab("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var th = /(.*?)\*(.*?)\*(.*)/,
    uh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    vh = /^(?:www\.|m\.|amp\.)+/,
    wh = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function xh(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var zh = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            k = String(d);
          ih = ih || jh();
          kh = kh || hh();
          for (var l = [], n = 0; n < k.length; n += 3) {
            var p = n + 1 < k.length,
              q = n + 2 < k.length,
              r = k.charCodeAt(n),
              t = p ? k.charCodeAt(n + 1) : 0,
              u = q ? k.charCodeAt(n + 2) : 0,
              v = r >> 2,
              x = ((r & 3) << 4) | (t >> 4),
              y = ((t & 15) << 2) | (u >> 6),
              w = u & 63;
            q || ((w = 64), p || (y = 64));
            l.push(ih[v], ih[x], ih[y], ih[w]);
          }
          g = l.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", yh(A), A].join("*");
  };
  function yh(a, b) {
    var c = [
        F.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Za.userLanguage || Za.language,
        Math.floor(B() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = mh)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    mh = d;
    for (var l = 4294967295, n = 0; n < c.length; n++)
      l = (l >>> 8) ^ mh[(l ^ c.charCodeAt(n)) & 255];
    return ((l ^ -1) >>> 0).toString(36);
  }
  function Ah() {
    return function (a) {
      var b = re(F.location.href),
        c = b.search.replace("?", ""),
        d = me(c, "_gl", !0) || "";
      a.query = Bh(d) || {};
      var e = pe(b, "fragment").match(xh("_gl"));
      a.fragment = Bh((e && e[3]) || "") || {};
    };
  }
  function Ch(a, b) {
    var c = xh(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Dh = function (a, b) {
      b || (b = "_gl");
      var c = wh.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Ch(b, (c[2] || "").slice(1)),
        f = Ch(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Eh = function (a) {
      var b = Ah(),
        c = ph();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ga(d, e.query), a && Ga(d, e.fragment));
      return d;
    },
    Bh = function (a) {
      try {
        var b = Fh(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = lh(d[e + 1]);
            c[f] = g;
          }
          Qc("TAGGING", 6);
          return c;
        }
      } catch (k) {
        Qc("TAGGING", 8);
      }
    };
  function Fh(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = th.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var k = g[3],
          l;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === yh(k, p)) {
              l = !0;
              break a;
            }
          l = !1;
        }
        if (l) return k;
        Qc("TAGGING", 7);
      }
    }
  }
  function Gh(a, b, c, d) {
    function e(p) {
      p = Ch(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = wh.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (k = "?" + e(k.substring(1)));
    return "" + g + k + l;
  }
  function Hh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = sh(b, 1, c),
      e = sh(b, 2, c),
      f = sh(b, 3, c);
    if (Ha(d)) {
      var g = zh(d);
      c ? Ih("_gl", g, a) : Jh("_gl", g, a, !1);
    }
    if (!c && Ha(e)) {
      var k = zh(e);
      Jh("_gl", k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Jh(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Ih(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Gh(n, p, q);
        }
  }
  function Jh(a, b, c, d) {
    if (c.href) {
      var e = Gh(a, b, c.href, void 0 === d ? !1 : d);
      Ra.test(e) && (c.href = e);
    }
  }
  function Ih(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = H.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = Gh(a, b, c.action);
        Ra.test(n) && (c.action = n);
      }
    }
  }
  function nh(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Hh(e, e.hostname);
      }
    } catch (g) {}
  }
  function oh(a) {
    try {
      if (a.action) {
        var b = pe(re(a.action), "host");
        Hh(a, b);
      }
    } catch (c) {}
  }
  var Kh = function (a, b, c, d) {
      qh();
      rh(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Lh = function (a, b) {
      qh();
      rh(a, [oe(F.location, "host", !0)], b, !0, !0);
    },
    Mh = function () {
      var a = H.location.hostname,
        b = uh.exec(H.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(vh, ""),
        l = e.replace(vh, ""),
        n;
      if (!(n = k === l)) {
        var p = "." + l;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    Nh = function (a, b) {
      return !1 === a ? !1 : a || b || Mh();
    };
  var Oh = {};
  var Ph = function (a) {
    for (
      var b = [],
        c = H.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          jf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function Qh(a, b) {
    var c = Ph(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].jf] || (d[c[e].jf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Ca: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].jf].push(g);
      }
    }
    return d;
  }
  var Rh = /^\w+$/,
    Sh = /^[\w-]+$/,
    Th = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    Uh = function () {
      if (!af().h() || !nf()) return !0;
      var a = kf("ad_storage");
      return null == a ? !0 : !!a;
    },
    Vh = function (a, b) {
      mf("ad_storage")
        ? Uh()
          ? a()
          : sf(a, "ad_storage")
        : b
        ? Qc("TAGGING", 3)
        : rf(
            function () {
              Vh(a, !0);
            },
            ["ad_storage"]
          );
    },
    Xh = function (a) {
      return Wh(a).map(function (b) {
        return b.Ca;
      });
    },
    Wh = function (a) {
      var b = [];
      if (!If(F) || !H.cookie) return b;
      var c = Lf(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Pc: d.Pc }, e++) {
        var f = Yh(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.Pc = g.Ca;
          var l = g.timestamp,
            n = g.labels,
            p = sa(
              b,
              (function (q) {
                return function (r) {
                  return r.Ca === q.Pc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = Zh(p.labels, n || [])))
            : b.push({ version: k, Ca: d.Pc, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return $h(b);
    };
  function Zh(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function ai(a) {
    return a && "string" == typeof a && a.match(Rh) ? a : "_gcl";
  }
  var ci = function () {
      var a = re(F.location.href),
        b = pe(a, "query", !1, void 0, "gclid"),
        c = pe(a, "query", !1, void 0, "gclsrc"),
        d = pe(a, "query", !1, void 0, "wbraid"),
        e = pe(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || me(f, "gclid");
        c = c || me(f, "gclsrc");
        d = d || me(f, "wbraid");
      }
      return bi(b, c, e, d);
    },
    bi = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Sh.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Sh))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    ei = function (a) {
      var b = ci();
      Vh(function () {
        di(b, !1, a);
      });
    };
  function di(a, b, c, d, e) {
    function f(x, y) {
      var w = fi(x, g);
      w && (Uf(w, y, k), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = ai(c.prefix);
    d = d || B();
    var k = $g(c, d, !0);
    k.Pa = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ["GCL", n, x];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Oh.enable_gbraid_cookie_write
        ? 0
        : Oh.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        r = fi("gb", g),
        t = !1;
      if (!b)
        for (var u = Wh(r), v = 0; v < u.length; v++)
          u[v].Ca === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var hi = function (a, b) {
      var c = Eh(!0);
      Vh(function () {
        for (var d = ai(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Th[f]) {
            var g = fi(f, d),
              k = c[g];
            if (k) {
              var l = Math.min(gi(k), B()),
                n;
              b: {
                var p = l;
                if (If(F))
                  for (
                    var q = Lf(g, H.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (gi(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = $g(b, l, !0);
                t.Pa = "ad_storage";
                Uf(g, k, t);
              }
            }
          }
        }
        di(bi(c.gclid, c.gclsrc), !1, b);
      });
    },
    fi = function (a, b) {
      var c = Th[a];
      if (void 0 !== c) return b + c;
    },
    gi = function (a) {
      return 0 !== ii(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Yh(a) {
    var b = ii(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Ca: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function ii(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Sh.test(a[2])
      ? []
      : a;
  }
  var ji = function (a, b, c, d, e) {
      if (ra(b) && If(F)) {
        var f = ai(e),
          g = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = fi(a[l], f);
              if (n) {
                var p = Lf(n, H.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Vh(function () {
          Kh(g, b, c, d);
        });
      }
    },
    $h = function (a) {
      return a.filter(function (b) {
        return Sh.test(b.Ca);
      });
    },
    ki = function (a, b) {
      if (If(F)) {
        for (var c = ai(b.prefix), d = {}, e = 0; e < a.length; e++)
          Th[a[e]] && (d[a[e]] = Th[a[e]]);
        Vh(function () {
          wa(d, function (f, g) {
            var k = Lf(c + g, H.cookie, void 0, "ad_storage");
            k.sort(function (t, u) {
              return gi(u) - gi(t);
            });
            if (k.length) {
              var l = k[0],
                n = gi(l),
                p = 0 !== ii(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== ii(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [r];
              di(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function li(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var mi = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (nf()) {
      var c = ci();
      if (li(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Lh(function () {
          return d;
        }, 3);
        Lh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function ni(a, b) {
    var c = ai(b),
      d = fi(a, c);
    if (!d) return 0;
    for (var e = Wh(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function oi(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var ui = /[A-Z]+/,
    vi = /\s/,
    wi = function (a) {
      if (m(a)) {
        a = Ca(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (ui.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (vi.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], K: d };
          }
        }
      }
    },
    yi = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = wi(a[c]);
        d && (b[d.id] = d);
      }
      xi(b);
      var e = [];
      wa(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function xi(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.K[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Ai = function (a, b, c, d) {
      return (2 === zi() || d || "http:" != F.location.protocol ? a : b) + c;
    },
    zi = function () {
      var a = gb(),
        b;
      if (1 === a)
        a: {
          var c = Gd;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = H.getElementsByTagName("script"),
              k = 0;
            k < g.length && 100 > k;
            k++
          ) {
            var l = g[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var Ci = function (a, b, c) {
      if (F[a.functionName]) return b.Ze && I(b.Ze), F[a.functionName];
      var d = Bi();
      F[a.functionName] = d;
      if (a.Bd)
        for (var e = 0; e < a.Bd.length; e++) F[a.Bd[e]] = F[a.Bd[e]] || Bi();
      a.Ld && void 0 === F[a.Ld] && (F[a.Ld] = c);
      fb(Ai("https://", "http://", a.hf), b.Ze, b.Pi);
      return d;
    },
    Bi = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Di = {
      functionName: "_googWcmImpl",
      Ld: "_googWcmAk",
      hf: "www.gstatic.com/wcm/loader.js",
    },
    Ei = {
      functionName: "_gaPhoneImpl",
      Ld: "ga_wpid",
      hf: "www.gstatic.com/gaphone/loader.js",
    },
    Fi = { bh: "", Vh: "5" },
    Gi = {
      functionName: "_googCallTrackingImpl",
      Bd: [Ei.functionName, Di.functionName],
      hf:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Fi.bh || Fi.Vh) +
        ".js",
    },
    Hi = {},
    Ii = function (a, b, c, d) {
      Q(22);
      if (c) {
        d = d || {};
        var e = Ci(Di, d, a),
          f = { ak: a, cl: b };
        void 0 === d.Oa && (f.autoreplace = c);
        e(2, d.Oa, f, c, 0, Da(), d.options);
      }
    },
    Ji = function (a, b, c, d) {
      Q(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Da(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          Hi[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length
              ? ((e.adData = { ak: g.K[0], cl: g.K[1] }), (Hi[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.containerId }), (Hi[g.id] = !0)));
        }
        (e.gaData || e.adData) && Ci(Gi, d)(d.Oa, e, d.options);
      }
    },
    Ki = function () {
      var a = !1;
      return a;
    },
    Li = function (a, b) {
      if (a)
        if (dg()) {
        } else {
          if (m(a)) {
            var c = wi(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(T.g.Fh);
          if (f && ra(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var k = wi(f[g]);
              k &&
                (d.push(k),
                (a.id === k.id ||
                  (a.id === a.containerId &&
                    a.containerId === k.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var l = b.getWithConfig(T.g.Hf),
              n;
            if (l) {
              ra(l) ? (n = l) : (n = [l]);
              var p = b.getWithConfig(T.g.Ff),
                q = b.getWithConfig(T.g.Gf),
                r = b.getWithConfig(T.g.If),
                t = b.getWithConfig(T.g.Eh),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var x = 0; x < n.length; x++)
                if (x < v)
                  if (d) Ji(d, n[x], t, { Oa: u, options: r });
                  else if ("AW" === a.prefix && a.K[1])
                    Ki()
                      ? Ji([a], n[x], t || "US", { Oa: u, options: r })
                      : Ii(a.K[0], a.K[1], n[x], { Oa: u, options: r });
                  else if ("UA" === a.prefix)
                    if (Ki()) Ji([a], n[x], t || "US", { Oa: u });
                    else {
                      var y = a.containerId,
                        w = n[x],
                        A = { Oa: u };
                      Q(23);
                      if (w) {
                        A = A || {};
                        var z = Ci(Ei, A, y),
                          C = {};
                        void 0 !== A.Oa ? (C.receiver = A.Oa) : (C.replace = w);
                        C.ga_wpid = y;
                        C.destination = w;
                        z(2, Da(), C);
                      }
                    }
            }
          }
        }
    };
  var Mi = function (a, b, c) {
      this.D = a;
      this.eventName = b;
      this.h = c;
      this.s = {};
      this.metadata = M(c.eventMetadata || {});
      this.B = !1;
    },
    Ni = function (a, b, c) {
      var d = a.h.getWithConfig(b);
      void 0 !== d ? (a.s[b] = d) : void 0 !== c && (a.s[b] = c);
    },
    Oi = function (a, b, c) {
      var d = be(a.D);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Pi(a) {
    return {
      getDestinationId: function () {
        return a.D;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.s[b];
      },
      setHitData: function (b, c) {
        return void (a.s[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.s[b] && (a.s[b] = c);
      },
      copyToHitData: function (b, c) {
        Ni(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.B = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var Ui = [];
  Ui[10] = !0;
  Ui[12] = !0;
  Ui[20] = !0;
  Ui[21] = !0;
  Ui[22] = !0;
  Ui[16] = !0;
  function kj(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var lj = !1;
  function mj() {
    if (kj("join-ad-interest-group") && pa(Za.joinAdInterestGroup)) return !0;
    lj ||
      (Eg(
        "A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (lj = !0));
    return kj("join-ad-interest-group") && pa(Za.joinAdInterestGroup);
  }
  function nj(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > B() - d) {
        Qc("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          H.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Qc("TAGGING", 10);
          return;
        }
      } catch (e) {}
    hb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: B() },
      c
    );
  }
  var oj = function () {
    if (pa(F.__uspapi)) {
      var a = "";
      try {
        F.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  function pj(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return re("" + c + b).href;
    }
  }
  function qj(a, b) {
    return rj() ? pj(a, b) : void 0;
  }
  function rj() {
    var a = !1;
    return a;
  }
  function sj() {
    return !!Bd.yd && "SGTM_TOKEN" !== Bd.yd.split("@@").join("");
  }
  var uj = !1;
  var vj = function () {
      this.h = {};
    },
    wj = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    xj = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    zj = function (a, b, c, d, e) {};
  var Bj = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Cj = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Dj = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Ej =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Xj = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Zj = function (a) {
      var b = Vd("gtm.allowlist") || Vd("gtm.whitelist");
      b && Q(9);
      Xj() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Ia(Ba(b), Cj),
        d = Vd("gtm.blocklist") || Vd("gtm.blacklist");
      d || ((d = Vd("tagTypeBlacklist")) && Q(3));
      d ? Q(8) : (d = []);
      Yj() &&
        ((d = Ba(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ba(d).indexOf("google") && Q(2);
      var e = d && Ia(Ba(d), Dj),
        f = {};
      return function (g) {
        var k = g && g[wb.qb];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var l = Od[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > c.indexOf(l[q])) {
                      Q(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(k);
          if (t) r = t;
          else {
            var u = va(e, l || []);
            u && Q(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= l.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = va(e, Ej));
        return (f[k] = v);
      };
    },
    Yj = function () {
      return Bj.test(F.location && F.location.hostname);
    };
  var ck = function (a) {
      var b = !1;
      return b;
    },
    fk = function (a, b) {
      var c;
      return c;
    },
    ik = function (a) {},
    mk = function (a) {},
    nk = function () {
      return (
        "&tc=" +
        Zb.filter(function (a) {
          return a;
        }).length
      );
    },
    qk = function () {
      2022 <= ok().length && pk();
    },
    rk = function (a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
    },
    tk = function () {
      sk || (sk = F.setTimeout(pk, 500));
    },
    pk = function (a) {
      sk && (F.clearTimeout(sk), (sk = void 0));
      if (void 0 !== ak && (!uk[ak] || vk || wk || ck(a)))
        if (void 0 === ek[ak] && (xk[ak] || yk.Ei() || 0 >= zk--))
          Q(1), (xk[ak] = !0);
        else {
          void 0 === ek[ak] && yk.bj();
          var b = ok(!0, a);
          pb(b);
          if (Ak || (Bk && 0 < Ck.length)) {
            var c = b.replace("/a?", "/td?");
            pb(c);
          }
          uk[ak] = !0;
          Bk = Ak = Dk = Ek = Fk = wk = vk = "";
          Ck = [];
        }
    },
    ok = function (a, b) {
      var c = ak;
      if (void 0 === c) return "";
      var d = Rc("GTM"),
        e = Rc("TAGGING");
      return [
        Gk,
        uk[c] ? "" : "&es=1",
        Hk[c],
        ik(c),
        d ? "&u=" + d : "",
        e ? "&ut=" + e : "",
        nk(),
        vk,
        wk,
        Fk,
        Ek,
        mk(a),
        Dk,
        Ak,
        fk(a, b),
        Bk ? "&dl=" + encodeURIComponent(Bk) : "",
        0 < Ck.length ? "&tdp=" + Ck.join(".") : "",
        "&z=0",
      ].join("");
    },
    Jk = function () {
      Gk = Ik();
    },
    Ik = function () {
      return [Kk, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Bd.xd].join("");
    },
    lk = ["L", "S", "Y"],
    hk = ["S", "E"],
    Lk = { sampleRate: "0.005000", Yg: "", Xg: Number("5") },
    Mk =
      0 <= H.location.search.indexOf("?gtm_latency=") ||
      0 <= H.location.search.indexOf("&gtm_latency="),
    Nk;
  if (!(Nk = Mk)) {
    var Ok = Math.random(),
      Pk = Lk.sampleRate;
    Nk = Ok < Pk;
  }
  var Qk = Nk,
    Kk = "https://www.googletagmanager.com/a?id=" + eg.I + "&cv=1",
    Rk = {
      label: eg.I + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Gk = Ik(),
    uk = {},
    vk = "",
    wk = "",
    Dk = "",
    Ek = "",
    Ak = "",
    Ck = [],
    Bk = "",
    kk = {},
    jk = !1,
    gk = {},
    Sk = {},
    Fk = "",
    ak = void 0,
    Hk = {},
    xk = {},
    sk = void 0,
    Tk = 5;
  0 < Lk.Xg && (Tk = Lk.Xg);
  var yk = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Ei: function () {
          return c < a ? !1 : B() - d[c % a] < b;
        },
        bj: function () {
          var f = c++ % a;
          d[f] = B();
        },
      };
    })(Tk, 1e3),
    zk = 1e3,
    Vk = function (a, b) {
      if (Qk && void 0 !== a && !xk[a] && ak !== a) {
        pk();
        ak = a;
        Dk = vk = "";
        Hk[a] = "&e=" + rk(b) + "&eid=" + a;
        tk();
      }
    },
    Wk = function (a, b, c, d) {
      if (Qk && b) {
        var e,
          f = String(b[wb.qb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!xk[a]) {
          a !== ak && (pk(), (ak = a));
          vk = vk ? vk + "." + g : "&tr=" + g;
          var k = b["function"];
          if (!k)
            throw Error("Error: No function name given for function call.");
          var l = (ac[k] ? "1" : "2") + e;
          Dk = Dk ? Dk + "." + l : "&ti=" + l;
          tk();
          qk();
        }
      }
    };
  var cl = function (a, b, c) {
      if (Qk && void 0 !== a && !xk[a]) {
        a !== ak && (pk(), (ak = a));
        var d = c + b;
        wk = wk ? wk + "." + d : "&epr=" + d;
        tk();
        qk();
      }
    },
    dl = function (a, b, c) {},
    dk = ["S", "P", "C", "Z"],
    el = {},
    fl = ((el[1] = 5), (el[2] = 5), (el[3] = 5), el),
    bk = {},
    ek = {},
    gl = function (a, b, c) {},
    hl = function () {
      if (Qk) {
        F.setInterval(Jk, 864e5);
      }
    };
  var il = { initialized: 11, complete: 12, interactive: 13 },
    jl = {},
    kl = Object.freeze(((jl[T.g.Ba] = !0), jl)),
    ll =
      0 <= H.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= H.location.search.indexOf("&gtm_diagnostics="),
    nl = function (a, b, c) {
      if ("config" !== a || 1 < wi(b).K.length) return;
      var d,
        e = ab("google_tag_data", {});
      e.td || (e.td = {});
      d = e.td;
      var f = M(c.globalConfig);
      M(c.eventModel, f);
      var g = [],
        k;
      for (k in d) {
        var l = ml(d[k], f);
        l.length && (ll && console.log(l), g.push(k));
      }
      if (g.length) {
        if (g.length) {
          var n = b + "*" + g.join(".");
          Ak = Ak ? Ak + "!" + n : "&tdc=" + n;
        }
        Qc("TAGGING", il[H.readyState] || 14);
      }
      d[b] = f;
    };
  function ol(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function ml(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? kl[q] : t;
      },
      f;
    for (f in ol(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        l = e(f, b),
        n = "object" === sb(k) || "array" === sb(k),
        p = "object" === sb(l) || "array" === sb(l);
      if (n && p) ml(k, l, c, g);
      else if (n || p || k !== l) c[g] = !0;
    }
    return Object.keys(c);
  }
  var pl = !1,
    ql = 0,
    rl = [];
  function sl(a) {
    if (!pl) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        pl = !0;
        for (var e = 0; e < rl.length; e++) I(rl[e]);
      }
      rl.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function tl() {
    if (!pl && 140 > ql) {
      ql++;
      try {
        H.documentElement.doScroll("left"), sl();
      } catch (a) {
        F.setTimeout(tl, 50);
      }
    }
  }
  var ul = function (a) {
    pl ? a() : rl.push(a);
  };
  var vl = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: eg.I,
    };
  };
  var xl = function (a, b) {
      this.h = !1;
      this.D = [];
      this.J = { tags: [] };
      this.R = !1;
      this.s = this.B = 0;
      wl(this, a, b);
    },
    yl = function (a, b, c, d) {
      if (Ed.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      ub(d) && (e = M(d, e));
      e.id = c;
      e.status = "timeout";
      return a.J.tags.push(e) - 1;
    },
    zl = function (a, b, c, d) {
      var e = a.J.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Al = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    wl = function (a, b, c) {
      void 0 !== b && Bl(a, b);
      c &&
        F.setTimeout(function () {
          return Al(a);
        }, Number(c));
    },
    Bl = function (a, b) {
      var c = Fa(function () {
        return I(function () {
          b(eg.I, a.J);
        });
      });
      a.h ? c() : a.D.push(c);
    },
    Cl = function (a) {
      a.B++;
      return Fa(function () {
        a.s++;
        a.R && a.s >= a.B && Al(a);
      });
    },
    Dl = function (a) {
      a.R = !0;
      a.s >= a.B && Al(a);
    };
  var El = function () {
      function a(d) {
        return !qa(d) || 0 > d ? 0 : d;
      }
      if (!U._li && F.performance && F.performance.timing) {
        var b = F.performance.timing.navigationStart,
          c = qa(Wd.get("gtm.start")) ? Wd.get("gtm.start") : 0;
        U._li = { cst: a(c - b), cbt: a(Md - b) };
      }
    },
    Fl = function (a) {
      F.performance && F.performance.mark(eg.I + "_" + a + "_start");
    },
    Gl = function (a) {
      if (F.performance) {
        var b = eg.I + "_" + a + "_start",
          c = eg.I + "_" + a + "_duration";
        F.performance.measure(c, b);
        var d = F.performance.getEntriesByName(c)[0];
        F.performance.clearMarks(b);
        F.performance.clearMeasures(c);
        var e = U._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (U._p = e));
        return d.duration;
      }
    },
    Hl = function () {
      if (F.performance && F.performance.now) {
        var a = U._p || {};
        a.PAGEVIEW = F.performance.now();
        U._p = a;
      }
    };
  var Il = {},
    Jl = function () {
      return F.GoogleAnalyticsObject && F[F.GoogleAnalyticsObject];
    },
    Kl = !1;
  var Ll = function (a) {
      F.GoogleAnalyticsObject || (F.GoogleAnalyticsObject = a || "ga");
      var b = F.GoogleAnalyticsObject;
      if (F[b]) F.hasOwnProperty(b) || Q(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Da());
        F[b] = c;
      }
      El();
      return F[b];
    },
    Ml = function (a) {
      if (nf()) {
        var b = Jl();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Nl() {
    return F.GoogleAnalyticsObject || "ga";
  }
  var Ol = function (a) {},
    Pl = function (a, b) {
      return function () {
        var c = Jl(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              l = 0 > g.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", k, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Ul(a, b, c, d) {
    var e = Zb[a],
      f = Vl(a, b, c, d);
    if (!f) return null;
    var g = fc(e[wb.Xf], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Ul(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.ug ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Vl(a, b, c, d) {
    function e() {
      if (f[wb.Qh]) k();
      else {
        var x = gc(f, c, []);
        var y = x[wb.dh];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!Af(y[w])) {
              k();
              return;
            }
        var A = yl(c.sb, String(f[wb.qb]), Number(f[wb.Zf]), x[wb.Rh]),
          z = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!z) {
            z = !0;
            var G = B() - E;
            Wk(c.id, Zb[a], "5", G);
            zl(c.sb, A, "success", G);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!z) {
            z = !0;
            var G = B() - E;
            Wk(c.id, Zb[a], "6", G);
            zl(c.sb, A, "failure", G);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Wk(c.id, f, "1");
        var C = function () {
          var G = B() - E;
          Wk(c.id, f, "7", G);
          zl(c.sb, A, "exception", G);
          z || ((z = !0), k());
        };
        var E = B();
        try {
          ec(x, { event: c, index: a, type: 1 });
        } catch (G) {
          C(G);
        }
      }
    }
    var f = Zb[a],
      g = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Ue(f)) return null;
    var n = fc(f[wb.ag], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Ul(p.index, { onSuccess: g, onFailure: k, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.ug ? l : q;
    }
    if (f[wb.Rf] || f[wb.Th]) {
      var r = f[wb.Rf] ? $b : c.oj,
        t = g,
        u = k;
      if (!r[a]) {
        e = Fa(e);
        var v = Wl(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Wl(a, b, c) {
    var d = [],
      e = [];
    b[a] = Xl(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Yl;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Zl;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Xl(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Yl(a) {
    a();
  }
  function Zl(a, b) {
    b();
  }
  var $l = !1;
  $l = !0;
  var bm = function (a, b, c) {
      if (!am() && !kg(a)) {
        var d = c ? "/gtag/js" : "/gtm.js",
          e = "?id=" + encodeURIComponent(a) + "&l=" + Bd.aa,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = sj();
        g && (e += "&sign=" + Bd.yd);
        var k = qj(b, d + e);
        if (!k) {
          var l = Bd.Xb + d;
          g &&
            $a &&
            f &&
            (l = $a.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          k = Ai("https://", "http://", l + e);
        }
        jg().container[a] = !0;
        fb(k);
      }
    },
    cm = function (a, b) {
      if ($l) {
        var c;
        if ((c = !am())) c = !jg().destination.hasOwnProperty(a);
        if (c) {
          var d =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Bd.aa +
            "&cx=c";
          sj() && (d += "&sign=" + Bd.yd);
          var e = qj(b, d);
          e || (e = Ai("https://", "http://", Bd.Xb + d));
          jg().destination[a] = !0;
          fb(e);
        }
      } else bm(a, b, !0);
    };
  function am() {
    if (dg()) {
      return !0;
    }
    return !1;
  }
  var em = function (a, b) {
      return 1 === arguments.length ? dm("set", a) : dm("set", a, b);
    },
    fm = function (a, b) {
      return 1 === arguments.length ? dm("config", a) : dm("config", a, b);
    },
    gm = function (a, b, c) {
      c = c || {};
      c[T.g.ob] = a;
      return dm("event", b, c);
    };
  function dm(a) {
    return arguments;
  }
  var hm = function () {
    this.h = [];
    this.s = [];
  };
  hm.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (g) {}
  };
  hm.prototype.listen = function (a) {
    this.s.push(a);
  };
  hm.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  hm.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var jm = function (a, b, c) {
      im().enqueue(a, b, c);
    },
    lm = function () {
      var a = km;
      im().listen(a);
    };
  function im() {
    var a = U.mb;
    a || ((a = new hm()), (U.mb = a));
    return a;
  }
  var nm = function () {
      var a = U.zones;
      a || (a = U.zones = new mm());
      return a;
    },
    om = {
      zone: !0,
      cn: !0,
      css: !0,
      ew: !0,
      eq: !0,
      ge: !0,
      gt: !0,
      lc: !0,
      le: !0,
      lt: !0,
      re: !0,
      sw: !0,
      um: !0,
    },
    pm = { cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"] },
    mm = function () {
      this.h = {};
      this.s = {};
      this.B = 0;
    };
  h = mm.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.cf], b)) return !1;
    for (var e = 0; e < c.Mc.length; e++) if (this.s[c.Mc[e]].Ob(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Mc.length; f++) {
      var g = this.s[c.Mc[f]];
      g.Ob(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.cf], b);
    return function (l, n) {
      n = n || [];
      if (!k(l, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].B(l, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.h[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.B);
    this.s[c] = new qm(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.s[a];
    d && d.D(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.h[a];
    if ((!d && U[a]) || (!d && kg(a)) || (d && d.cf !== b)) return !1;
    if (d) return d.Mc.push(c), !1;
    this.h[a] = { cf: b, Mc: [c] };
    return !0;
  };
  var qm = function (a, b) {
    this.h = [{ eventId: a, Ob: !0 }];
    this.s = null;
    if (b) {
      this.s = {};
      for (var c = 0; c < b.length; c++) this.s[b[c]] = !0;
    }
  };
  qm.prototype.D = function (a, b) {
    var c = this.h[this.h.length - 1];
    a <= c.eventId || (c.Ob !== b && this.h.push({ eventId: a, Ob: b }));
  };
  qm.prototype.Ob = function (a) {
    for (var b = this.h.length - 1; 0 <= b; b--)
      if (this.h[b].eventId <= a) return this.h[b].Ob;
    return !1;
  };
  qm.prototype.B = function (a, b) {
    b = b || [];
    if (!this.s || om[a] || this.s[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.s[b[c]]) return !0;
    return !1;
  };
  var rm = function (a, b, c, d, e) {
      var f = nm();
      c = c && Ia(c, pm);
      for (var g = f.createZone(a, c), k = 0; k < b.length; k++) {
        var l = String(b[k]);
        if (f.registerChild(l, eg.I, g)) {
          var n = a,
            p = d,
            q = e;
          if (0 === l.indexOf("GTM-")) bm(l, void 0, !1);
          else {
            var r = dm("js", Da());
            bm(l, void 0, !0);
            var t = { originatingEntity: q };
            jm(r, n, t);
            jm(fm(l, p), n, t);
          }
        }
      }
      return g;
    },
    sm = function (a, b, c) {
      nm().updateZone(a, b, c);
    };
  var tm = function (a) {
      var b = U.zones;
      return b
        ? b.getIsAllowedFn(gg(), a)
        : function () {
            return !0;
          };
    },
    um = function (a) {
      var b = U.zones;
      return b ? b.isActive(gg(), a) : !0;
    };
  var xm = function (a, b) {
    for (var c = [], d = 0; d < Zb.length; d++)
      if (a[d]) {
        var e = Zb[d];
        var f = Cl(b.sb);
        try {
          var g = Ul(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = c,
              l = k.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = ac[p];
            l.call(k, {
              Sg: n,
              Kg: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else vm(d, b), f();
        } catch (t) {
          f();
        }
      }
    c.sort(wm);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  function wm(a, b) {
    var c,
      d = b.Kg,
      e = a.Kg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Sg,
        k = b.Sg;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function vm(a, b) {
    if (!Qk) return;
    var c = function (d) {
      var e = b.Ue(Zb[d]) ? "3" : "4",
        f = fc(Zb[d][wb.Xf], b, []);
      f && f.length && c(f[0].index);
      Wk(b.id, Zb[d], e);
      var g = fc(Zb[d][wb.ag], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Am = !1,
    ym;
  var Fm = function (a) {
    var b = B(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (Am) return !1;
      Am = !0;
    }
    var k,
      l = !1;
    if (um(c)) k = tm(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      l = !0;
      k = tm(Number.MAX_SAFE_INTEGER);
    }
    Vk(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Ue: Zj(k),
        oj: [],
        Eg: function () {
          Q(6);
        },
        mg: Bm(),
        ng: Cm(c),
        sb: new xl(q, p),
      },
      t = lc(r);
    l && (t = Dm(t));
    var u = xm(t, r),
      v = !1;
    Dl(r.sb);
    ("gtm.js" !== e && "gtm.sync" !== e) || Ol(eg.I);
    return Em(t, u) || v;
  };
  function Cm(a) {
    return function (b) {
      Qk && (vb(b) || dl(a, "input", b));
    };
  }
  function Bm() {
    var a = {};
    a.event = Zd("event", 1);
    a.ecommerce = Zd("ecommerce", 1);
    a.gtm = Zd("gtm");
    a.eventModel = Zd("eventModel");
    return a;
  }
  function Dm(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] &&
        (Dd[String(Zb[c][wb.qb])] && (b[c] = !0),
        void 0 !== Zb[c][wb.Uh] && (b[c] = !0));
    return b;
  }
  function Em(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Zb[c] && !Ed[String(Zb[c][wb.qb])]) return !0;
    return !1;
  }
  var Gm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.eventMetadata = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.isGtmEvent = !1;
    },
    Hm = function (a, b) {
      a.eventModel = b;
      return a;
    },
    Im = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    Jm = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    Km = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    Lm = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    Mm = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    Nm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Om = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Pm = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    Qm = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    Rm = function (a, b) {
      a.onFailure = b;
      return a;
    };
  Gm.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    Sm(this, this.globalConfig[a], this.dataLayerConfig[a]) && (Q(71), Q(79));
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  Gm.prototype.getTopLevelKeys = function () {
    function a(f) {
      for (var g = Object.keys(f), k = 0; k < g.length; ++k) b[g[k]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
      var e = c[d];
      if (
        "event" !== e &&
        "gtm" !== e &&
        "tagTypeBlacklist" !== e &&
        !b.hasOwnProperty(e)
      ) {
        Q(71);
        Q(80);
        break;
      }
    }
    return Object.keys(b);
  };
  Gm.prototype.getMergedValues = function (a, b) {
    function c(k) {
      ub(k) &&
        wa(k, function (l, n) {
          e = !0;
          d[l] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    if (e !== f || Sm(this, d, g)) Q(71), Q(81);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  Gm.prototype.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var k = 0; k < a.length; k++)
          void 0 !== g[a[k]] && ((b[a[k]] = g[a[k]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
      return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    Sm(this, b, e) && (Q(71), Q(82));
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  var Sm = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = sb(b);
      if (d !== sb(c) || !((ub(b) && ub(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (Sm(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b)
          if (!c.hasOwnProperty(g) || Sm(a, b[g], c[g])) return !0;
      }
    } catch (k) {
      Q(72);
    }
    return !1;
  };
  var Un = function () {
      var a = !0;
      (Zg(7) && Zg(9) && Zg(10)) || (a = !1);
      return a;
    },
    Vn = function () {
      var a = !0;
      (Zg(3) && Zg(4)) || (a = !1);
      return a;
    };
  var Zn = function (a, b) {
      if (b.isGtmEvent) return;
      var c = b.getWithConfig(T.g.Na),
        d = b.getWithConfig(T.g.Wa),
        e = b.getWithConfig(c);
      if (void 0 === e) {
        var f = void 0;
        Wn.hasOwnProperty(c)
          ? (f = Wn[c])
          : Xn.hasOwnProperty(c) && (f = Xn[c]);
        1 === f && (f = Yn(c));
        m(f)
          ? Jl()(function () {
              var g = Jl().getByName(a).get(f);
              d(g);
            })
          : d(void 0);
      } else d(e);
    },
    $n = function (a, b) {
      var c = a[T.g.jc],
        d = b + ".",
        e = a[T.g.N] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[T.g.Kb];
      e = String(e).replace(/\s+/g, "").split(",");
      var k = Jl();
      k(d + "require", "linker");
      k(d + "linker:autoLink", e, f, g);
    },
    eo = function (a, b, c) {
      if (nf() && (!c.isGtmEvent || !ao[a])) {
        var d = !Af(T.g.M),
          e = function (f) {
            var g,
              k,
              l = Jl(),
              n = bo(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || co(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + Pd()),
                (k = n.createOnlyFields),
                n.gtmTrackerName && (k.name = g));
              l(function () {
                var t = l.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || l.remove(b);
              });
              l("create", a, c.isGtmEvent ? k : n.createOnlyFields);
              d &&
                Af(T.g.M) &&
                ((d = !1),
                l(function () {
                  var t = Jl().getByName(c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = yd[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = yd[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                l(function () {
                  l.remove(g);
                });
            }
          };
        Cf(function () {
          return e(T.g.M);
        }, T.g.M);
        Cf(function () {
          return e(T.g.H);
        }, T.g.H);
        c.isGtmEvent && (ao[a] = !0);
      }
    },
    fo = function (a, b) {
      sj() && b && (a[T.g.lb] = b);
    },
    oo = function (a, b, c) {
      function d() {
        var K = c.getWithConfig(T.g.cc);
        k(function () {
          if (!c.isGtmEvent && ub(K)) {
            var O = u.fieldsToSend,
              S = l().getByName(n),
              N;
            for (N in K)
              if (
                K.hasOwnProperty(N) &&
                /^(dimension|metric)\d+$/.test(N) &&
                void 0 != K[N]
              ) {
                var J = S.get(Yn(K[N]));
                go(O, N, J);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: K });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        k = c.isGtmEvent ? Ll(c.getWithConfig("gaFunctionName")) : Ll();
      if (pa(k)) {
        var l = Jl,
          n;
        c.isGtmEvent
          ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (K) {
            var O = [].slice.call(arguments, 0);
            O[0] = n ? n + "." + O[0] : "" + O[0];
            k.apply(window, O);
          },
          q = function (K) {
            var O = function (P, ha) {
                for (var ia = 0; ha && ia < ha.length; ia++) p(P, ha[ia]);
              },
              S = c.isGtmEvent,
              N = S ? ho(u) : io(b, c);
            if (N) {
              var J = {};
              fo(J, K);
              p("require", "ec", "ec.js", J);
              S && N.Le && p("set", "&cu", N.Le);
              var R = N.action;
              if (S || "impressions" === R)
                if ((O("ec:addImpression", N.Bg), !S)) return;
              if ("promo_click" === R || "promo_view" === R || (S && N.Gc)) {
                var W = N.Gc;
                O("ec:addPromo", W);
                if (W && 0 < W.length && "promo_click" === R) {
                  S ? p("ec:setAction", R, N.eb) : p("ec:setAction", R);
                  return;
                }
                if (!S) return;
              }
              "promo_view" !== R &&
                "impressions" !== R &&
                (O("ec:addProduct", N.xb), p("ec:setAction", R, N.eb));
            }
          },
          r = function (K) {
            if (K) {
              var O = {};
              if (ub(K))
                for (var S in jo) jo.hasOwnProperty(S) && ko(jo[S], S, K[S], O);
              fo(O, y);
              p("require", "linkid", O);
            }
          },
          t = function () {
            if (dg()) {
            } else {
              var K = c.getWithConfig(T.g.Dh);
              K &&
                (p("require", K, { dataLayer: Bd.aa }), p("require", "render"));
            }
          },
          u = bo(n, b, c),
          v = function (K, O, S) {
            S && (O = "" + O);
            u.fieldsToSend[K] = O;
          };
        !c.isGtmEvent &&
          co(n, u.createOnlyFields) &&
          (k(function () {
            l() && l().remove(n);
          }),
          (lo[n] = !1));
        k("create", f, u.createOnlyFields);
        if (u.createOnlyFields[T.g.lb] && !c.isGtmEvent) {
          var x = qj(u.createOnlyFields[T.g.lb], "/analytics.js");
          x && (g = x);
        }
        var y = c.isGtmEvent
          ? u.fieldsToSet[T.g.lb]
          : u.createOnlyFields[T.g.lb];
        if (y) {
          var w = c.isGtmEvent
            ? u.fieldsToSet[T.g.ed]
            : u.createOnlyFields[T.g.ed];
          w && !lo[n] && ((lo[n] = !0), k(Pl(n, w)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[T.g.oa];
        A && A[T.g.N] && $n(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var z = {};
            fo(z, y);
            p("require", "linkid", "linkid.js", z);
          }
          nf() && eo(f, n, c);
        }
        if (b === T.g.Yb)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            q(y);
            p("send", "pageview");
            u.createOnlyFields._useUp && Ml(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === T.g.Ea
            ? (t(),
              Li(f, c),
              c.getWithConfig(T.g.cb) && (mi(["aw", "dc"]), Ml(n + ".")),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              eo(f, n, c))
            : b === T.g.La
            ? Zn(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", za(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || mo[b]) && q(y),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", za(u.value))),
              p("send", u.fieldsToSend));
        var E = !1;
        var G = no;
        E && (G = c.getContainerTypeLoaded("UA"));
        if (!G && !c.isGtmEvent) {
          no = !0;
          E && c.setContainerTypeLoaded("UA", !0);
          El();
          var D = function () {
              E && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            L = function () {
              l().loaded || D();
            };
          dg() ? I(L) : fb(g, L, D);
        }
      } else I(c.onFailure);
    },
    po = function (a, b, c, d) {
      Df(
        function () {
          oo(a, b, d);
        },
        [T.g.M, T.g.H]
      );
    },
    ro = function (a, b) {
      function c(f) {
        function g(p, q) {
          for (var r = 0; r < q.length; r++) {
            var t = q[r];
            if (f[t]) {
              l[p] = f[t];
              break;
            }
          }
        }
        function k() {
          if (f.category) l.category = f.category;
          else {
            for (var p = "", q = 0; q < qo.length; q++)
              void 0 !== f[qo[q]] && (p && (p += "/"), (p += f[qo[q]]));
            p && (l.category = p);
          }
        }
        var l = M(f),
          n = !1;
        if (n || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            k();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return l;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && ub(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    so = function (a) {
      return Af(a);
    },
    to = !1;
  var no,
    lo = {},
    ao = {},
    uo = {},
    Wn = Object.freeze(
      ((uo.client_storage = "storage"),
      (uo.sample_rate = 1),
      (uo.site_speed_sample_rate = 1),
      (uo.store_gac = 1),
      (uo.use_amp_client_id = 1),
      (uo[T.g.ka] = 1),
      (uo[T.g.la] = "storeGac"),
      (uo[T.g.ma] = 1),
      (uo[T.g.Aa] = 1),
      (uo[T.g.Ma] = 1),
      (uo[T.g.Gb] = 1),
      (uo[T.g.Ua] = 1),
      (uo[T.g.Hb] = 1),
      uo)
    ),
    vo = {},
    wo = Object.freeze(
      ((vo._cs = 1),
      (vo._useUp = 1),
      (vo.allowAnchor = 1),
      (vo.allowLinker = 1),
      (vo.alwaysSendReferrer = 1),
      (vo.clientId = 1),
      (vo.cookieDomain = 1),
      (vo.cookieExpires = 1),
      (vo.cookieFlags = 1),
      (vo.cookieName = 1),
      (vo.cookiePath = 1),
      (vo.cookieUpdate = 1),
      (vo.legacyCookieDomain = 1),
      (vo.legacyHistoryImport = 1),
      (vo.name = 1),
      (vo.sampleRate = 1),
      (vo.siteSpeedSampleRate = 1),
      (vo.storage = 1),
      (vo.storeGac = 1),
      (vo.useAmpClientId = 1),
      (vo._cd2l = 1),
      vo)
    ),
    xo = Object.freeze({ anonymize_ip: 1 }),
    yo = {},
    Xn = Object.freeze(
      ((yo.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (yo.app_id = 1),
      (yo.app_installer_id = 1),
      (yo.app_name = 1),
      (yo.app_version = 1),
      (yo.description = "exDescription"),
      (yo.fatal = "exFatal"),
      (yo.language = 1),
      (yo.page_hostname = "hostname"),
      (yo.transport_type = "transport"),
      (yo[T.g.na] = "currencyCode"),
      (yo[T.g.Df] = 1),
      (yo[T.g.Ya] = "location"),
      (yo[T.g.ue] = "page"),
      (yo[T.g.Za] = "referrer"),
      (yo[T.g.jd] = "title"),
      (yo[T.g.Lf] = 1),
      (yo[T.g.Ha] = 1),
      yo)
    ),
    zo = {},
    Ao = Object.freeze(
      ((zo.content_id = 1),
      (zo.event_action = 1),
      (zo.event_category = 1),
      (zo.event_label = 1),
      (zo.link_attribution = 1),
      (zo.name = 1),
      (zo[T.g.oa] = 1),
      (zo[T.g.Cf] = 1),
      (zo[T.g.Ba] = 1),
      (zo[T.g.ja] = 1),
      zo)
    ),
    Bo = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    qo = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    Co = {},
    jo = Object.freeze(
      ((Co.levels = 1), (Co[T.g.Aa] = "duration"), (Co[T.g.Gb] = 1), Co)
    ),
    Do = {},
    Eo = Object.freeze(
      ((Do.anonymize_ip = 1),
      (Do.fatal = 1),
      (Do.send_page_view = 1),
      (Do.store_gac = 1),
      (Do.use_amp_client_id = 1),
      (Do[T.g.la] = 1),
      (Do[T.g.Df] = 1),
      Do)
    ),
    ko = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (Eo[b] && (c = Aa(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Yn(b)] = c;
        else if (m(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Yn = function (a) {
      return a && m(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    Fo = {},
    mo = Object.freeze(
      ((Fo.checkout_progress = 1),
      (Fo.select_content = 1),
      (Fo.set_checkout_option = 1),
      (Fo[T.g.Cb] = 1),
      (Fo[T.g.Db] = 1),
      (Fo[T.g.ib] = 1),
      (Fo[T.g.jb] = 1),
      (Fo[T.g.Eb] = 1),
      (Fo[T.g.xa] = 1),
      (Fo[T.g.Fb] = 1),
      (Fo[T.g.ya] = 1),
      Fo)
    ),
    Go = {},
    Ho = Object.freeze(
      ((Go.checkout_progress = 1),
      (Go.set_checkout_option = 1),
      (Go[T.g.uf] = 1),
      (Go[T.g.Cb] = 1),
      (Go[T.g.Db] = 1),
      (Go[T.g.ib] = 1),
      (Go[T.g.xa] = 1),
      (Go[T.g.Fb] = 1),
      (Go[T.g.vf] = 1),
      Go)
    ),
    Io = {},
    Jo = Object.freeze(
      ((Io.generate_lead = 1),
      (Io.login = 1),
      (Io.search = 1),
      (Io.select_content = 1),
      (Io.share = 1),
      (Io.sign_up = 1),
      (Io.view_search_results = 1),
      (Io[T.g.jb] = 1),
      (Io[T.g.Eb] = 1),
      (Io[T.g.ya] = 1),
      Io)
    ),
    Ko = function (a) {
      var b = "general";
      Ho[a]
        ? (b = "ecommerce")
        : Jo[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Lo = {},
    Mo = Object.freeze(
      ((Lo.view_search_results = 1),
      (Lo[T.g.jb] = 1),
      (Lo[T.g.Eb] = 1),
      (Lo[T.g.ya] = 1),
      Lo)
    ),
    go = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    No = function (a) {
      if (ra(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    bo = function (a, b, c) {
      var d = function (L) {
          return c.getWithConfig(L);
        },
        e = {},
        f = {},
        g = {},
        k = {},
        l = No(d(T.g.Ch));
      !c.isGtmEvent && l && go(f, "exp", l);
      g["&gtm"] = og(!0);
      nf() && (k._cs = so);
      var n = d(T.g.cc);
      if (!c.isGtmEvent && ub(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && go(f, p, q);
          }
      for (var r = c.getTopLevelKeys(), t = 0; t < r.length; ++t) {
        var u = r[t];
        if (c.isGtmEvent) {
          var v = d(u);
          Bo.hasOwnProperty(u)
            ? (e[u] = v)
            : wo.hasOwnProperty(u)
            ? (k[u] = v)
            : (g[u] = v);
        } else {
          var x = void 0;
          x = u !== T.g.X ? d(u) : c.getMergedValues(u);
          if (Ao.hasOwnProperty(u)) ko(Ao[u], u, x, e);
          else if (xo.hasOwnProperty(u)) ko(xo[u], u, x, g);
          else if (Xn.hasOwnProperty(u)) ko(Xn[u], u, x, f);
          else if (Wn.hasOwnProperty(u)) ko(Wn[u], u, x, k);
          else if (/^(dimension|metric|content_group)\d+$/.test(u))
            ko(1, u, x, f);
          else if (u === T.g.X) {
            if (!to) {
              var y = Ma(x);
              y && (f["&did"] = y);
            }
            var w = void 0,
              A = void 0;
            b === T.g.Ea
              ? (w = Ma(c.getMergedValues(u), "."))
              : ((w = Ma(c.getMergedValues(u, 1), ".")),
                (A = Ma(c.getMergedValues(u, 2), ".")));
            w && (f["&gdid"] = w);
            A && (f["&edid"] = A);
          } else
            u === T.g.Ga && 0 > r.indexOf(T.g.Gb) && (k.cookieName = x + "_ga");
        }
      }
      (!1 !== d(T.g.sh) && !1 !== d(T.g.ac) && Un()) ||
        (g.allowAdFeatures = !1);
      (!1 !== d(T.g.W) && Vn()) || (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(T.g.cb) && (k._useUp = !0);
      if (c.isGtmEvent) {
        k.name = k.name || e.gtmTrackerName;
        var z = g.hitCallback;
        g.hitCallback = function () {
          pa(z) && z();
          c.onSuccess();
        };
      } else {
        go(k, "cookieDomain", "auto");
        go(g, "forceSSL", !0);
        go(e, "eventCategory", Ko(b));
        Mo[b] && go(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? go(e, "eventLabel", d(T.g.Cf))
          : "search" === b || "view_search_results" === b
          ? go(e, "eventLabel", d(T.g.Jh))
          : "select_content" === b && go(e, "eventLabel", d(T.g.wh));
        var C = e[T.g.oa] || {},
          E = C[T.g.Jb];
        E || (0 != E && C[T.g.N])
          ? (k.allowLinker = !0)
          : !1 === E && go(k, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        k.name = a;
      }
      nf() &&
        ((g["&gcs"] = Bf()),
        Af(T.g.M) || (k.storage = "none"),
        Af(T.g.H) || ((g.allowAdFeatures = !1), (k.storeGac = !1)));
      var G = d(T.g.V) || d(T.g.lb),
        D = d(T.g.ed);
      G && (c.isGtmEvent || (k[T.g.lb] = G), (k._cd2l = !0));
      D && !c.isGtmEvent && (k[T.g.ed] = D);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = k;
      return e;
    },
    ho = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Le = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Bg = "impressions" === b.translateIfKeyEquals ? ro(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Gc = "promoView" === b.translateIfKeyEquals ? ro(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Gc = "promoClick" === b.translateIfKeyEquals ? ro(f, !0) : f;
        c.eb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var k = b[g].products;
          c.xb = "products" === b.translateIfKeyEquals ? ro(k, !0) : k;
          c.eb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    io = function (a, b) {
      function c(t) {
        return {
          id: d(T.g.ab),
          affiliation: d(T.g.zh),
          revenue: d(T.g.ja),
          tax: d(T.g.zf),
          shipping: d(T.g.je),
          coupon: d(T.g.Ah),
          list: d(T.g.ie) || t,
        };
      }
      for (
        var d = function (t) {
            return b.getWithConfig(t);
          },
          e = d(T.g.Z),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][T.g.ie]);
        g++
      );
      var k = d(T.g.cc);
      if (ub(k))
        for (var l = 0; e && l < e.length; ++l) {
          var n = e[l],
            p;
          for (p in k)
            k.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != k[p] &&
              go(n, p, n[k[p]]);
        }
      var q = null,
        r = d(T.g.Bh);
      a === T.g.xa || a === T.g.Fb
        ? (q = { action: a, eb: c(), xb: ro(e) })
        : a === T.g.Cb
        ? (q = { action: "add", xb: ro(e) })
        : a === T.g.Db
        ? (q = { action: "remove", xb: ro(e) })
        : a === T.g.ya
        ? (q = { action: "detail", eb: c(f), xb: ro(e) })
        : a === T.g.jb
        ? (q = { action: "impressions", Bg: ro(e) })
        : "view_promotion" === a
        ? (q = { action: "promo_view", Gc: ro(r) })
        : "select_content" === a && r && 0 < r.length
        ? (q = { action: "promo_click", Gc: ro(r) })
        : "select_content" === a
        ? (q = { action: "click", eb: { list: d(T.g.ie) || f }, xb: ro(e) })
        : a === T.g.ib || "checkout_progress" === a
        ? (q = {
            action: "checkout",
            xb: ro(e),
            eb: { step: a === T.g.ib ? 1 : d(T.g.yf), option: d(T.g.xf) },
          })
        : "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            eb: { step: d(T.g.yf), option: d(T.g.xf) },
          });
      q && (q.Le = d(T.g.na));
      return q;
    },
    Oo = {},
    co = function (a, b) {
      var c = Oo[a];
      Oo[a] = M(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var Po = null,
    Qo = !1;
  Qo = !0;
  function Ro(a) {
    return Qo && !a ? (Po = Po || new So()) : (U.gcq = U.gcq || new So());
  }
  var To = function (a, b, c) {
      Ro().register(a, b, c);
    },
    Uo = function (a, b, c, d) {
      Ro().push("event", [b, a], c, d);
    },
    Vo = function (a, b, c) {
      Ro().push("config", [a], b, c);
    },
    Wo = function (a, b, c, d) {
      Ro().push("get", [a, b], c, d);
    },
    Xo = function () {
      var a = T.g.V;
      return Ro().getGlobalConfigValue && Ro().getGlobalConfigValue(a);
    },
    Yo = {},
    Zo = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.B = null;
      this.claimed = this.h = !1;
    },
    $o = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.O = c || "";
      this.h = d;
      this.messageContext = e;
    },
    So = function () {
      this.s = {};
      this.B = {};
      this.h = [];
      this.D = { AW: !1, UA: !1 };
    },
    ap = function (a, b) {
      var c = wi(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new Zo());
    },
    bp = function (a, b, c, d) {
      if (b) {
        var e = wi(b);
        if (e && 1 === ap(a, b).status) {
          ap(a, b).status = 2;
          var f = {};
          Qk &&
            (f.timeoutId = F.setTimeout(function () {
              Q(38);
              tk();
            }, 3e3));
          a.push("require", [f], e.containerId, {});
          Yo[e.containerId] = B();
          if (dg()) {
          } else 2 === d ? cm(e.containerId, c) : bm(e.containerId, c, !0);
        }
      }
    },
    cp = function (a, b, c, d) {
      if (d.O) {
        var e = ap(a, d.O),
          f = e.B;
        if (f) {
          var g = M(c),
            k = M(e.targetConfig[d.O]),
            l = M(e.containerConfig),
            n = M(e.remoteConfig),
            p = M(a.B),
            q = {};
          try {
            q = M(Sd);
          } catch (v) {
            Q(72);
          }
          var r = wi(d.O).prefix,
            t = function (v) {
              cl(d.messageContext.eventId, r, v);
              var x = g[T.g.Ib];
              x && I(x);
            },
            u = Qm(
              Pm(
                Rm(
                  Om(
                    Nm(
                      Lm(
                        Km(
                          Mm(
                            Jm(
                              Im(
                                Hm(
                                  new Gm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              l
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                    }
                  }
                ),
                function (v, x) {
                  a.D[v] = x;
                }
              ),
              function (v) {
                return a.D[v];
              }
            );
          try {
            cl(d.messageContext.eventId, r, "1"), nl(d.type, d.O, u);
            f(d.O, b, d.s, u);
          } catch (v) {
            cl(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  h = So.prototype;
  h.register = function (a, b, c) {
    var d = ap(this, a);
    if (3 !== d.status) {
      d.B = b;
      d.status = 3;
      c && (M(d.remoteConfig, c), (d.remoteConfig = c));
      var e = wi(a),
        f = Yo[e.containerId];
      if (void 0 !== f) {
        var g = U[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        U[e.containerId]._spx && (k = k.toLowerCase());
        var l = Vd("gtm.uniqueEventId"),
          n = k,
          p = B() - g;
        if (Qk && !xk[l]) {
          l !== ak && (pk(), (ak = l));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Ek = Ek ? Ek + "," + q : "&cl=" + q;
        }
        delete Yo[e.containerId];
      }
      this.flush();
    }
  };
  h.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (wi(f)) {
          var g = ap(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  h.push = function (a, b, c, d) {
    null == d ? (d = {}) : "boolean" === typeof d && (d = { deferrable: d });
    if (void 0 !== c) {
      if (!wi(c)) return;
      bp(this, c, b[0][T.g.V] || this.B[T.g.V], "event" === a ? 2 : 1);
      ap(this, c).h && (d.deferrable = !1);
    }
    this.h.push(new $o(a, Math.floor(B() / 1e3), c, b, d));
    d.deferrable || this.flush();
  };
  h.insert = function (a, b, c, d) {
    null == d && (d = {});
    var e = Math.floor(B() / 1e3);
    0 < this.h.length
      ? this.h.splice(1, 0, new $o(a, e, c, b, d))
      : this.h.push(new $o(a, e, c, b, d));
  };
  h.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.O || ap(this, f.O).h
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = ap(this, f.O);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            Qk && F.clearTimeout(f.h[0].timeoutId);
            break;
          case "set":
            wa(f.h[0], function (r, t) {
              M(Ja(r, t), b.B);
            });
            break;
          case "config":
            g = ap(this, f.O);
            if (g.claimed) break;
            e.Ra = {};
            wa(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  M(Ja(t, u), r.Ra);
                };
              })(e)
            );
            var k = !!e.Ra[T.g.nd];
            delete e.Ra[T.g.nd];
            var l = wi(f.O),
              n = l.containerId === l.id;
            k || (n ? (g.containerConfig = {}) : (g.targetConfig[f.O] = {}));
            (g.h && k) || cp(this, T.g.Ea, e.Ra, f);
            g.h = !0;
            n
              ? M(e.Ra, g.containerConfig)
              : (M(e.Ra, g.targetConfig[f.O]), Q(70));
            d = !0;
            break;
          case "event":
            g = ap(this, f.O);
            if (g.claimed) break;
            e.Oc = {};
            wa(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  M(Ja(t, u), r.Oc);
                };
              })(e)
            );
            cp(this, f.h[1], e.Oc, f);
            break;
          case "get":
            if (((g = ap(this, f.O)), !g.claimed)) {
              var p = {},
                q = ((p[T.g.Na] = f.h[0]), (p[T.g.Wa] = f.h[1]), p);
              cp(this, T.g.La, q, f);
            }
        }
        this.h.shift();
        dp(this, f);
      }
      e = { Ra: e.Ra, Oc: e.Oc };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var dp = function (a, b) {
    if ("require" !== b.type)
      if (b.O)
        for (
          var c = a.getCommandListeners(b.O)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var g = f.s[b.type] || [], k = 0; k < g.length; k++) g[k]();
          }
  };
  So.prototype.getRemoteConfig = function (a) {
    return ap(this, a).remoteConfig;
  };
  So.prototype.getCommandListeners = function (a) {
    return ap(this, a).s;
  };
  So.prototype.getGlobalConfigValue = function (a) {
    return this.B[a];
  };
  var ep = !1;
  var fp = !1;
  fp = !0;
  var gp = {},
    hp = {},
    ip = {},
    jp = function (a, b) {
      var c = hp[b] || [];
      c.push(a);
      hp[b] = c;
    },
    lp = function () {
      U.addTargetToGroup = function (e) {
        kp(e, "default");
      };
      U.addDestinationToContainer = function (e, f) {
        jp(e, f);
      };
      var a = U.pendingDefaultTargets;
      delete U.pendingDefaultTargets;
      if (Array.isArray(a))
        for (var b = 0; b < a.length; ++b) kp(a[b], "default");
      var c = U.pendingDestinationIds;
      delete U.pendingDestinationIds;
      if (Array.isArray(c))
        for (var d = 0; d < c.length; ++d) jp(c[d][0], c[d][1]);
    },
    kp = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = gp[b[c]] || [];
        gp[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    mp = function (a, b) {
      b = String(b).split(",");
      for (var c = 0; c < b.length; c++) {
        var d = ip[b[c]] || [];
        ip[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    np = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Vb: d.Vb, Qc: d.Qc }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          if (fp) {
            if (((d.Vb = wi(f)), d.Vb))
              if (ep) {
                var g = hg();
                sa(
                  g,
                  (function (u) {
                    return function (v) {
                      return u.Vb.containerId === v;
                    };
                  })(d)
                )
                  ? b.push(f)
                  : c.push(f);
              } else d.Vb.containerId === eg.I || dg() ? b.push(f) : c.push(f);
          } else b.push(f);
        else {
          var k = gp[f] || [];
          if (fp)
            if (ep) {
              d.Qc = {};
              k.forEach(
                (function (u) {
                  return function (v) {
                    return (u.Qc[v] = !0);
                  };
                })(d)
              );
              for (var l = gg(), n = 0; n < l.length; n++)
                if (d.Qc[l[n]]) {
                  var p = hg();
                  p && p.length && (b = b.concat(p));
                  break;
                }
              var q = ip[f] || [];
              q.length && (b = b.concat(q));
            } else
              for (var r = 0; r < k.length; r++) {
                var t = wi(k[r]);
                ((t && t.containerId === eg.I) || dg()) && b.push(t.id);
              }
          else k && k.length && (b = b.concat(k));
        }
      }
      return { Mi: b, Oi: c };
    },
    op = function (a) {
      wa(gp, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    pp = function (a) {
      wa(ip, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var qp = !1;
  var Qp = "HA GF G UA AW DC".split(" "),
    Rp = !1,
    Sp = !1,
    Tp = !1;
  function Up(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Pd() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  function Vp() {
    if (Qo) return !1;
    Rp || U.gtagRegistered || ((Rp = U.gtagRegistered = !0), lp());
    return Rp;
  }
  var Wp = {
      config: function (a, b) {
        var c = Up(a, b);
        if (2 > a.length || !m(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !ub(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = wi(a[1]);
        if (!e) return;
        Vk(c.eventId, "gtag.config");
        var f = e.id !== e.containerId,
          g = !1,
          k = -1 !== gg().indexOf(e.containerId);
        k && ((g = Tp), (Tp = !0));
        if (Ui[12] && Kd && !f && g) return;
        if (Qo) {
          var l = d[T.g.V] || Xo();
          if (qp && f) {
            if (
              !sa(hg(), function (x) {
                return x === e.containerId;
              })
            ) {
              cm(e.containerId, l);
              return;
            }
          } else if (!k && !dg()) {
            bm(e.containerId, l, !0);
            return;
          }
        }
        var n = Vp() || Qo;
        b.noTargetGroup ||
          (qp && f
            ? (pp(e.id), mp(e.id, d[T.g.gd] || "default"))
            : (op(e.id), kp(e.id, d[T.g.gd] || "default")));
        delete d[T.g.gd];
        Sp || Q(43);
        if (n) {
          var p = [e.id];
          qp && !f && (p = hg());
          for (var q = !1, r = 0; r < p.length; r++) {
            var t = wi(p[r]),
              u = M(b);
            if (t && -1 !== Qp.indexOf(t.prefix)) {
              var v = u.eventMetadata || {};
              v.hasOwnProperty("is_external_event") ||
                (v.is_external_event = !u.fromContainerExecution);
              u.eventMetadata = v;
              delete d[T.g.Ib];
              Vo(d, t.id, u);
              q = !0;
            }
          }
          if (q) return;
        }
        Yd("gtag.targets." + e.id);
        Yd("gtag.targets." + e.id, M(d));
      },
      consent: function (a, b) {
        if (3 === a.length) {
          Q(39);
          var c = Up(a, b),
            d = a[1];
          "default" === d ? xf(a[2]) : "update" === d && zf(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && m(c)) {
          var d;
          if (2 < a.length) {
            if ((!ub(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = M(e)),
            e[T.g.Ib] && (g.eventCallback = e[T.g.Ib]),
            e[T.g.dd] && (g.eventTimeout = e[T.g.dd]));
          var k = Up(a, b),
            l = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = l;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[T.g.ob];
          void 0 === r &&
            ((r = Vd(T.g.ob, 2)), void 0 === r && (r = "default"));
          if (m(r) || ra(r)) {
            var t = r.toString().replace(/\s+/g, "").split(","),
              u = np(t),
              v = u.Mi,
              x = u.Oi;
            if (x.length)
              for (var y = (q && q[T.g.V]) || Xo(), w = 0; w < x.length; w++) {
                var A = wi(x[w]);
                A && (qp ? cm(A.containerId, y) : bm(A.containerId, y, !0));
              }
            p = yi(v);
          } else p = void 0;
          var z = p;
          if (!z) return;
          Vk(l, c);
          for (var C = Vp() || Qo, E = [], G = 0; C && G < z.length; G++) {
            var D = z[G],
              L = M(b);
            if (-1 !== Qp.indexOf(D.prefix)) {
              var K = M(d),
                O = L.eventMetadata || {};
              O.hasOwnProperty("is_external_event") ||
                (O.is_external_event = !L.fromContainerExecution);
              L.eventMetadata = O;
              delete K[T.g.Ib];
              Uo(c, K, D.id, L);
            }
            E.push(D.id);
          }
          g.eventModel = g.eventModel || {};
          0 < z.length
            ? (g.eventModel[T.g.ob] = E.join())
            : delete g.eventModel[T.g.ob];
          Sp || Q(43);
          return b.noGtmEvent ? void 0 : g;
        }
      },
      get: function (a, b) {
        Q(53);
        if (4 !== a.length || !m(a[1]) || !m(a[2]) || !pa(a[3])) return;
        var c = wi(a[1]),
          d = String(a[2]),
          e = a[3];
        if (!c) return;
        Sp || Q(43);
        if (Qo) {
          var f = Xo();
          if (qp) {
            if (
              !sa(hg(), function (k) {
                return c.containerId === k;
              })
            ) {
              cm(c.containerId, f);
              return;
            }
          } else if (c.containerId !== eg.I && !dg()) {
            bm(c.containerId, f, !0);
            return;
          }
        } else if (!Vp()) return;
        if (-1 === Qp.indexOf(c.prefix)) return;
        Up(a, b);
        var g = {};
        tf(M(((g[T.g.Na] = d), (g[T.g.Wa] = e), g)));
        Wo(
          d,
          function (k) {
            I(function () {
              return e(k);
            });
          },
          c.id,
          b
        );
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Sp = !0;
          Vp();
          var c = Up(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && ub(a[1])
          ? (c = M(a[1]))
          : 3 == a.length &&
            m(a[1]) &&
            ((c = {}),
            ub(a[2]) || ra(a[2]) ? (c[a[1]] = M(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Up(a, b),
            e = d.eventId,
            f = d.priorityId;
          M(c);
          if (Vp() || Qo) {
            var g = M(c);
            Ro().push("set", [g], void 0, b);
          }
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Xp = { policy: !0 };
  var Yp = function (a) {
      var b = F[Bd.aa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Zp = function (a) {
      var b = F[Bd.aa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var $p = !1,
    aq = [];
  function bq() {
    if (!$p) {
      $p = !0;
      for (var a = 0; a < aq.length; a++) I(aq[a]);
    }
  }
  var cq = function (a) {
    $p ? I(a) : aq.push(a);
  };
  var tq = function (a) {
    if (sq(a)) return a;
    this.h = a;
  };
  tq.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var sq = function (a) {
    return !a || "object" !== sb(a) || ub(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  tq.prototype.getUntrustedMessageValue = tq.prototype.getUntrustedMessageValue;
  var uq = 0,
    vq = {},
    wq = [],
    xq = [],
    yq = !1,
    zq = !1;
  function Aq(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Bq = function (a) {
      return F[Bd.aa].push(a);
    },
    Cq = function (a, b) {
      var c = U[Bd.aa],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = F.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (F.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function Dq(a, b) {
    var c = (!!Ui[10] && a._clear) || b.overwriteModelFields;
    wa(a, function (e, f) {
      "_clear" !== e && (c && Yd(e), Yd(e, f));
    });
    Ld || (Ld = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Pd()), (a["gtm.uniqueEventId"] = d), Yd("gtm.uniqueEventId", d));
    return Fm(a);
  }
  function Eq(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (xa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Fq() {
    var a;
    if (xq.length) a = xq.shift();
    else if (wq.length) a = wq.shift();
    else return;
    var b;
    var c = a;
    if (yq || !Eq(c.message)) b = c;
    else {
      yq = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Pd());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      wq.unshift(k, c);
      b = f;
    }
    return b;
  }
  function Gq() {
    for (var a = !1, b; !zq && (b = Fq()); ) {
      zq = !0;
      delete Sd.eventModel;
      Ud();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) zq = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              g = 0;
            g < f.length;
            g++
          ) {
            var k = f[g],
              l = Vd(k, 1);
            if (ra(l) || ub(l)) l = M(l);
            Td[k] = l;
          }
        try {
          if (pa(d))
            try {
              d.call(Wd);
            } catch (A) {}
          else if (ra(d)) {
            var n = d;
            if (m(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = Vd(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, r);
                } catch (A) {}
            }
          } else {
            var u = void 0;
            if (xa(d))
              a: {
                if (d.length && m(d[0])) {
                  var v = Wp[d[0]];
                  if (v && (!e.fromContainerExecution || !Xp[d[0]])) {
                    u = v(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
            else u = d;
            u && (a = Dq(u, e) || a);
          }
        } finally {
          e.fromContainerExecution && Ud(!0);
          var x = d["gtm.uniqueEventId"];
          if ("number" === typeof x) {
            for (var y = vq[String(x)] || [], w = 0; w < y.length; w++)
              xq.push(Hq(y[w]));
            y.length && xq.sort(Aq);
            delete vq[String(x)];
            uq = x;
          }
          zq = !1;
        }
      }
    }
    return !a;
  }
  function Iq() {
    var b = Gq();
    try {
      Yp(eg.I);
    } catch (c) {}
    return b;
  }
  function km(a) {
    if (uq < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      vq[b] = vq[b] || [];
      vq[b].push(a);
    } else
      xq.push(Hq(a)),
        xq.sort(Aq),
        I(function () {
          zq || Gq();
        });
  }
  function Hq(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Kq = function () {
      function a(f) {
        var g = {};
        if (sq(f)) {
          var k = f;
          f = sq(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = ab(Bd.aa, []),
        c = (U[Bd.aa] = U[Bd.aa] || {});
      !0 === c.pruned && Q(83);
      vq = im().get();
      lm();
      ul(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      cq(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        function f(r) {
          if (Ui[18]) {
            var t = r["gtm.uniqueEventId"],
              u = [r];
            "number" === typeof t &&
              u.push.apply(
                u,
                ((im().prune && im().prune(t)) || []).map(function (A) {
                  return A.message;
                })
              );
            for (var v = 0; v < u.length; v++) {
              var x = u[v];
              if (xa(x) && "set" === x[0]) {
                var y = void 0;
                if (2 == x.length && ub(x[1])) y = x[1];
                else if (3 == x.length && m(x[1])) {
                  var w = {};
                  y = ((w[x[1]] = x[2]), w);
                } else continue;
                c.pageConfig = c.pageConfig || {};
                wa(y, function (A, z) {
                  M(Ja(A, z), c.pageConfig);
                });
              }
            }
          }
        }
        var g;
        if (0 < U.SANDBOXED_JS_SEMAPHORE) {
          g = [];
          for (var k = 0; k < arguments.length; k++)
            g[k] = new tq(arguments[k]);
        } else g = [].slice.call(arguments, 0);
        var l = g.map(function (r) {
          return a(r);
        });
        wq.push.apply(wq, l);
        var n = d.apply(b, g),
          p = 300;
        Ui[16] && (p = Math.max(100, Number("1000") || p));
        if (this.length > p)
          for (Q(4), c.pruned = !0; this.length > p; ) f(this.shift());
        var q = "boolean" !== typeof n || n;
        return Gq() && q;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Ui[18] &&
        c.pageConfig &&
        e.unshift({ message: em(M(c.pageConfig)), messageContext: {} });
      wq.push.apply(wq, e);
      if (Jq()) {
        I(Iq);
      }
    },
    Jq = function () {
      var a = !0;
      return a;
    };
  function Lq(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = B();
    return b < c + 3e5 && b > c - 9e5;
  }
  var Mq = {};
  Mq.qd = new String("undefined");
  var mr = F.clearTimeout,
    nr = F.setTimeout,
    V = function (a, b, c, d) {
      if (dg()) {
        b && I(b);
      } else return fb(a, b, c, d);
    },
    or = function () {
      return new Date();
    },
    pr = function () {
      return F.location.href;
    },
    qr = function (a) {
      return pe(re(a), "fragment");
    },
    rr = function (a) {
      return qe(re(a));
    },
    sr = function (a, b) {
      return Vd(a, b || 2);
    },
    tr = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Bq(a)))
        : (d = Bq(a));
      return d;
    },
    ur = function (a, b) {
      F[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === F[a] || (c && !F[a])) && (F[a] = b);
      return F[a];
    },
    vr = function (a, b, c) {
      return Lf(a, b, void 0 === c ? !0 : !!c);
    },
    wr = function (a, b, c) {
      return 0 === Uf(a, b, c);
    },
    xr = function (a, b) {
      if (dg()) {
        b && I(b);
      } else hb(a, b);
    },
    yr = function (a) {
      return !!Tq(a, "init", !1);
    },
    zr = function (a) {
      Rq(a, "init", !0);
    },
    Ar = function (a, b, c) {
      Qk && (vb(a) || dl(c, b, a));
    };
  var Yr = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Zr(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var $r = new ua();
  function as(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = $r.get(e);
      f || ((f = new RegExp(b, d)), $r.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function bs(a, b) {
    function c(g) {
      var k = re(g),
        l = pe(k, "protocol"),
        n = pe(k, "host", !0),
        p = pe(k, "port"),
        q = pe(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" === l && "80" === p) ||
        ("https" === l && "443" === p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function cs(a) {
    return ds(a) ? 1 : 0;
  }
  function ds(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = M(a, {});
        M({ arg1: c[d], any_of: void 0 }, e);
        if (cs(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Yr.length; g++) {
                var k = Yr[g];
                if (b[k]) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (l) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Zr(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return as(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return bs(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var is = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  var js = encodeURI,
    Y = encodeURIComponent,
    ks = ib;
  var ls = function (a, b) {
      if (!a) return !1;
      var c = pe(re(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    ms = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  function Kt() {
    return (F.gaGlobal = F.gaGlobal || {});
  }
  var Lt = function () {
      var a = Kt();
      a.hid = a.hid || ta();
      return a.hid;
    },
    Mt = function (a, b) {
      var c = Kt();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Uu = window,
    Vu = document,
    Wu = function (a) {
      var b = Uu._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Uu["ga-disable-" + a]))
        return !0;
      try {
        var c = Uu.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Ff("AMP_TOKEN", String(Vu.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Vu.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var Xu = {};
  function ev(a) {
    wa(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[T.g.Ia] || {};
    wa(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Iv = function (a, b, c, d, e) {
      if (Ui[13]) {
        var f = gm(a, b, d);
        e = e || {};
        jm(f, c, e);
      } else (e = e || {}), (e.fromContainerExecution = !0), Uo(b, d, a, e);
    },
    Jv = function (a, b, c, d, e) {
      if (Ui[13]) {
        var f = gm(a, b, d);
        e = e || {};
        e.deferrable = !0;
        jm(f, c, e);
      } else
        (e = e || {}),
          (e.deferrable = !0),
          (e.fromContainerExecution = !0),
          Uo(b, d, a, e);
    },
    Lv = function (a, b, c) {};
  function Kv(a, b, c) {}
  var Z = { m: {} };

  (Z.m.c = ["google"]),
    (function () {
      (function (a) {
        Z.__c = a;
        Z.__c.o = "c";
        Z.__c.isVendorTemplate = !0;
        Z.__c.priorityOverride = 0;
      })(function (a) {
        Ar(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (Z.m.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.o = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();

  (Z.m.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.o = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = sr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Ar(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.m.rep = ["google"]),
    (function () {
      var a = !1;
      a = !0;
      (function (b) {
        Z.__rep = b;
        Z.__rep.o = "rep";
        Z.__rep.isVendorTemplate = !0;
        Z.__rep.priorityOverride = 0;
      })(function (b) {
        var c = wi(b.vtp_containerId),
          d;
        switch (c.prefix) {
          case "AW":
            d = un;
            break;
          case "DC":
            d = En;
            break;
          case "GF":
            d = Ln;
            break;
          case "HA":
            d = Qn;
            break;
          case "UA":
            d = po;
            break;
          default:
            I(b.vtp_gtmOnFailure);
            return;
        }
        I(b.vtp_gtmOnSuccess);
        if (a) {
          var e = c.containerId,
            f = hg();
          Ro(!0).notifyContainerLoaded(e, f);
        }
        To(b.vtp_containerId, d, b.vtp_remoteConfig || {});
      });
    })();

  (Z.m.get = ["google"]),
    (function () {
      (function (a) {
        Z.__get = a;
        Z.__get.o = "get";
        Z.__get.isVendorTemplate = !0;
        Z.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        (a.vtp_deferrable ? Jv : Iv)(String(b.streamId), d, e.eventId, c, e);
        a.vtp_gtmOnSuccess();
      });
    })();
  (Z.m.zone = []),
    (function () {
      var a = {},
        b = function (c) {
          for (var d = 0; d < c.length; d++) if (!c[d]) return !1;
          return !0;
        };
      (function (c) {
        Z.__zone = c;
        Z.__zone.o = "zone";
        Z.__zone.isVendorTemplate = !0;
        Z.__zone.priorityOverride = 0;
      })(function (c) {
        var d = b(c.vtp_boundaries || []);
        if (c.vtp_gtmTagId in a) sm(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d);
        else if (d) {
          var e = c.vtp_childContainers.map(function (l) {
              return l.publicId;
            }),
            f = c.vtp_enableTypeRestrictions
              ? c.vtp_whitelistedTypes.map(function (l) {
                  return l.typeId;
                })
              : null,
            g = {};
          var k = rm(
            c.vtp_gtmEventId,
            e,
            f,
            g,
            vl(c.vtp_gtmEntityIndex, c.vtp_gtmEntityName)
          );
          a[c.vtp_gtmTagId] = k;
        }
        I(c.vtp_gtmOnSuccess);
      });
    })();

  var Mv = {};
  Mv.dataLayer = Wd;
  Mv.callback = function (a) {
    Nd.hasOwnProperty(a) && pa(Nd[a]) && Nd[a]();
    delete Nd[a];
  };
  Mv.bootstrap = 0;
  Mv._spx = !1;
  (function (a) {
    if (!F["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (H.referrer) {
        var c = re(H.referrer);
        b = "cct.google" === oe(c, "host");
      }
      if (!b) {
        var d = Lf("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((F["__TAGGY_INSTALLED"] = !0),
        fb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          t = "GTM";
        (r = "OGT"), (t = "GTAG");
        var u = F["google.tagmanager.debugui2.queue"];
        u ||
          ((u = []),
          (F["google.tagmanager.debugui2.queue"] = u),
          fb(
            "https://" +
              Bd.Xb +
              "/debug/bootstrap?id=" +
              eg.I +
              "&src=" +
              t +
              "&cond=" +
              q +
              "&gtm=" +
              og()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: $a, containerProduct: r, debug: !1, id: eg.I },
        };
        v.data.resume = function () {
          a();
        };
        Bd.fh && (v.data.initialPublish = !0);
        u.push(v);
      },
      g = void 0,
      k = pe(F.location, "query", !1, void 0, "gtm_debug");
    Lq(k) && (g = 2);
    if (!g && H.referrer) {
      var l = re(H.referrer);
      "tagassistant.google.com" === oe(l, "host") && (g = 3);
    }
    if (!g) {
      var n = Lf("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = H.documentElement.getAttribute("data-tag-assistant-present");
      Lq(p) && (g = 5);
    }
    g && $a ? f(g) : a();
  })(function () {
    var a = !1;
    a && Fl("INIT");
    af().s();
    Wg();
    Oh.enable_gbraid_cookie_write = !0;
    var b = !!U[eg.I];
    !b && eg.Wb && (b = !!U["ctid_" + eg.Wb]);
    if (b) {
      var c = U.zones;
      c && c.unregisterChild(gg());
    } else {
      for (var d = hg(), e = 0; e < d.length; e++) {
        var f = d[e],
          g = eg.I;
        U.addDestinationToContainer
          ? U.addDestinationToContainer(f, g)
          : ((U.pendingDestinationIds = U.pendingDestinationIds || []),
            U.pendingDestinationIds.push([f, g]));
      }
      for (
        var k = data.resource || {}, l = k.macros || [], n = 0;
        n < l.length;
        n++
      )
        Wb.push(l[n]);
      for (var p = k.tags || [], q = 0; q < p.length; q++) Zb.push(p[q]);
      for (var r = k.predicates || [], t = 0; t < r.length; t++) Yb.push(r[t]);
      for (var u = k.rules || [], v = 0; v < u.length; v++) {
        for (var x = u[v], y = {}, w = 0; w < x.length; w++)
          y[x[w][0]] = Array.prototype.slice.call(x[w], 1);
        Xb.push(y);
      }
      ac = Z;
      bc = cs;
      U[eg.I] = Mv;
      eg.Wb && (U["ctid_" + eg.Wb] = Mv);
      for (var A = jg(), z = gg(), C = 0; C < z.length; C++)
        A.container[z[C]] = !0;
      for (var E = hg(), G = 0; G < E.length; G++) A.destination[E[G]] = !0;
      A.canonical[eg.Wb] = !0;
      Ga(Od, Z.m);
      dc = mc;
      Kq();
      pl = !1;
      ql = 0;
      if (
        ("interactive" == H.readyState && !H.createEventObject) ||
        "complete" == H.readyState
      )
        sl();
      else {
        jb(H, "DOMContentLoaded", sl);
        jb(H, "readystatechange", sl);
        if (H.createEventObject && H.documentElement.doScroll) {
          var D = !0;
          try {
            D = !F.frameElement;
          } catch (N) {}
          D && tl();
        }
        jb(F, "load", sl);
      }
      $p = !1;
      "complete" === H.readyState ? bq() : jb(F, "load", bq);
      hl();
      Md = B();
      Mv.bootstrap = Md;
      if (a) {
        var S = Gl("INIT");
      }
    }
  });
})();
