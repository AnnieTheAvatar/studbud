// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2wEGH":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "4ed8fbc456c3fdad29f9e01cb5f57f94"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3Cn65":[function(require,module,exports) {
var global = arguments[3];
// ProgressBar.js 1.1.0
// https://kimmobrunfeldt.github.io/progressbar.js
// License: MIT
(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") module.exports = f();
    else if (typeof define === "function" && define.amd) define([], f);
    else {
        var g;
        if (typeof window !== "undefined") g = window;
        else if (typeof global !== "undefined") g = global;
        else if (typeof self !== "undefined") g = self;
        else g = this;
        g.ProgressBar = f();
    }
})(function() {
    var define, module, exports;
    return (function() {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && undefined;
                        if (!f && c) return c(i, true);
                        if (u) return u(i, true);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a;
                    }
                    var p = n[i] = {
                        exports: {
                        }
                    };
                    e[i][0].call(p.exports, function(r1) {
                        var n1 = e[i][1][r1];
                        return o(n1 || r1);
                    }, p, p.exports, r, e, n, t);
                }
                return n[i].exports;
            }
            for(var u = "function" == typeof require && undefined, i = 0; i < t.length; i++)o(t[i]);
            return o;
        }
        return r;
    })()({
        1: [
            function(require, module1, exports1) {
                (function(t, n) {
                    "object" == typeof exports1 && "object" == typeof module1 ? module1.exports = n() : "function" == typeof define && define.amd ? define("shifty", [], n) : "object" == typeof exports1 ? exports1.shifty = n() : t.shifty = n();
                })(window, function() {
                    return (function(t) {
                        var n = {
                        };
                        function e(r) {
                            if (n[r]) return n[r].exports;
                            var i = n[r] = {
                                i: r,
                                l: false,
                                exports: {
                                }
                            };
                            return t[r].call(i.exports, i, i.exports, e), i.l = true, i.exports;
                        }
                        return e.m = t, e.c = n, e.d = function(t1, n1, r) {
                            e.o(t1, n1) || Object.defineProperty(t1, n1, {
                                enumerable: true,
                                get: r
                            });
                        }, e.r = function(t1) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t1, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(t1, "__esModule", {
                                value: true
                            });
                        }, e.t = function(t1, n1) {
                            if (1 & n1 && (t1 = e(t1)), 8 & n1) return t1;
                            if (4 & n1 && "object" == typeof t1 && t1 && t1.__esModule) return t1;
                            var r = Object.create(null);
                            if (e.r(r), Object.defineProperty(r, "default", {
                                enumerable: true,
                                value: t1
                            }), 2 & n1 && "string" != typeof t1) for(var i in t1)e.d(r, i, (function(n2) {
                                return t1[n2];
                            }).bind(null, i));
                            return r;
                        }, e.n = function(t1) {
                            var n1 = t1 && t1.__esModule ? function() {
                                return t1.default;
                            } : function() {
                                return t1;
                            };
                            return e.d(n1, "a", n1), n1;
                        }, e.o = function(t1, n1) {
                            return Object.prototype.hasOwnProperty.call(t1, n1);
                        }, e.p = "", e(e.s = 3);
                    })([
                        function(t, n, e) {
                            "use strict";
                            (function(t1) {
                                e.d(n, "e", function() {
                                    return d;
                                }), e.d(n, "c", function() {
                                    return y;
                                }), e.d(n, "b", function() {
                                    return _;
                                }), e.d(n, "a", function() {
                                    return g;
                                }), e.d(n, "d", function() {
                                    return w;
                                });
                                var r = e(1);
                                function i(t2, n1) {
                                    for(var e1 = 0; e1 < n1.length; e1++){
                                        var r1 = n1[e1];
                                        r1.enumerable = r1.enumerable || false, r1.configurable = true, "value" in r1 && (r1.writable = true), Object.defineProperty(t2, r1.key, r1);
                                    }
                                }
                                function u(t2) {
                                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
                                        return typeof t3;
                                    } : function(t3) {
                                        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
                                    })(t2);
                                }
                                function o(t2) {
                                    for(var n1 = 1; n1 < arguments.length; n1++){
                                        var e1 = null != arguments[n1] ? arguments[n1] : {
                                        }, r2 = Object.keys(e1);
                                        "function" == typeof Object.getOwnPropertySymbols && (r2 = r2.concat(Object.getOwnPropertySymbols(e1).filter(function(t3) {
                                            return Object.getOwnPropertyDescriptor(e1, t3).enumerable;
                                        }))), r2.forEach(function(n2) {
                                            a(t2, n2, e1[n2]);
                                        });
                                    }
                                    return t2;
                                }
                                function a(t2, n1, e2) {
                                    return n1 in t2 ? Object.defineProperty(t2, n1, {
                                        value: e2,
                                        enumerable: true,
                                        configurable: true,
                                        writable: true
                                    }) : t2[n1] = e2, t2;
                                }
                                var c = "undefined" != typeof window ? window : t1, f = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame || c.mozCancelRequestAnimationFrame && c.mozRequestAnimationFrame || setTimeout, s = function() {
                                }, l = null, h = null, p = o({
                                }, r), d = function(t2, n1, e2, r3, i1, u1, o1) {
                                    var a1 = t2 < u1 ? 0 : (t2 - u1) / i1;
                                    for(var c1 in n1){
                                        var f1 = o1[c1], s1 = f1.call ? f1 : p[f1], l1 = e2[c1];
                                        n1[c1] = l1 + (r3[c1] - l1) * s1(a1);
                                    }
                                    return n1;
                                }, v = function(t2, n1) {
                                    var e2 = t2._attachment, r3 = t2._currentState, i1 = t2._delay, u1 = t2._easing, o1 = t2._originalState, a1 = t2._duration, c1 = t2._step, f2 = t2._targetState, s2 = t2._timestamp, l2 = s2 + i1 + a1, h1 = n1 > l2 ? l2 : n1, p1 = a1 - (l2 - h1);
                                    h1 >= l2 ? (c1(f2, e2, p1), t2.stop(true)) : (t2._applyFilter("beforeTween"), h1 < s2 + i1 ? (h1 = 1, a1 = 1, s2 = 1) : s2 += i1, d(h1, r3, o1, f2, a1, s2, u1), t2._applyFilter("afterTween"), c1(r3, e2, p1));
                                }, y = function() {
                                    for(var t2 = g.now(), n1 = l; n1;){
                                        var e2 = n1._next;
                                        v(n1, t2), n1 = e2;
                                    }
                                }, _ = function(t2) {
                                    var n1 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : "linear", e3 = {
                                    }, r3 = u(n1);
                                    if ("string" === r3 || "function" === r3) for(var i1 in t2)e3[i1] = n1;
                                    else for(var o1 in t2)e3[o1] = n1[o1] || "linear";
                                    return e3;
                                }, m = function(t2) {
                                    if (t2 === l) (l = t2._next) ? l._previous = null : h = null;
                                    else if (t2 === h) (h = t2._previous) ? h._next = null : l = null;
                                    else {
                                        var n1 = t2._previous, e3 = t2._next;
                                        n1._next = e3, e3._previous = n1;
                                    }
                                    t2._previous = t2._next = null;
                                }, g = function() {
                                    function t2() {
                                        var n2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                                        }, e4 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : void 0;
                                        (function(t3, n3) {
                                            if (!(t3 instanceof n3)) throw new TypeError("Cannot call a class as a function");
                                        })(this, t2), this._currentState = n2, this._configured = false, this._filters = [], this._timestamp = null, this._next = null, this._previous = null, e4 && this.setConfig(e4);
                                    }
                                    var n2, e4, r3;
                                    return n2 = t2, e4 = [
                                        {
                                            key: "_applyFilter",
                                            value: function(t3) {
                                                var n3 = true, e5 = false, r4 = void 0;
                                                try {
                                                    for(var i1, u1 = this._filters[Symbol.iterator](); !(n3 = (i1 = u1.next()).done); n3 = true){
                                                        var o1 = i1.value[t3];
                                                        o1 && o1(this);
                                                    }
                                                } catch (t4) {
                                                    e5 = true, r4 = t4;
                                                } finally{
                                                    try {
                                                        n3 || null == u1.return || u1.return();
                                                    } finally{
                                                        if (e5) throw r4;
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            key: "tween",
                                            value: function() {
                                                var n3 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : void 0, e5 = this._attachment, r4 = this._configured;
                                                return !n3 && r4 || this.setConfig(n3), this._pausedAtTime = null, this._timestamp = t2.now(), this._start(this.get(), e5), this.resume();
                                            }
                                        },
                                        {
                                            key: "setConfig",
                                            value: function() {
                                                var n3 = this, e5 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                                                }, r4 = e5.attachment, i1 = e5.delay, u1 = (void 0) === i1 ? 0 : i1, a1 = e5.duration, c1 = (void 0) === a1 ? 500 : a1, f2 = e5.easing, l2 = e5.from, h1 = e5.promise, p1 = (void 0) === h1 ? Promise : h1, d1 = e5.start, v1 = (void 0) === d1 ? s : d1, y1 = e5.step, m1 = (void 0) === y1 ? s : y1, g1 = e5.to;
                                                this._configured = true, this._attachment = r4, this._isPlaying = false, this._pausedAtTime = null, this._scheduleId = null, this._delay = u1, this._start = v1, this._step = m1, this._duration = c1, this._currentState = o({
                                                }, l2 || this.get()), this._originalState = this.get(), this._targetState = o({
                                                }, g1 || this.get());
                                                var w = this._currentState;
                                                this._targetState = o({
                                                }, w, this._targetState), this._easing = _(w, f2);
                                                var b = t2.filters;
                                                for(var S in this._filters.length = 0, b)b[S].doesApply(this) && this._filters.push(b[S]);
                                                return this._applyFilter("tweenCreated"), this._promise = new p1(function(t3, e6) {
                                                    n3._resolve = t3, n3._reject = e6;
                                                }), this._promise.catch(s), this;
                                            }
                                        },
                                        {
                                            key: "get",
                                            value: function() {
                                                return o({
                                                }, this._currentState);
                                            }
                                        },
                                        {
                                            key: "set",
                                            value: function(t3) {
                                                this._currentState = t3;
                                            }
                                        },
                                        {
                                            key: "pause",
                                            value: function() {
                                                if (this._isPlaying) return this._pausedAtTime = t2.now(), this._isPlaying = false, m(this), this;
                                            }
                                        },
                                        {
                                            key: "resume",
                                            value: function() {
                                                if (null === this._timestamp) return this.tween();
                                                if (this._isPlaying) return this._promise;
                                                var n3 = t2.now();
                                                return this._pausedAtTime && (this._timestamp += n3 - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = true, null === l ? (l = this, h = this, (function t3() {
                                                    l && (f.call(c, t3, 1000 / 60), y());
                                                })()) : (this._previous = h, h._next = this, h = this), this._promise;
                                            }
                                        },
                                        {
                                            key: "seek",
                                            value: function(n3) {
                                                n3 = Math.max(n3, 0);
                                                var e5 = t2.now();
                                                return this._timestamp + n3 === 0 ? this : (this._timestamp = e5 - n3, this._isPlaying || v(this, e5), this);
                                            }
                                        },
                                        {
                                            key: "stop",
                                            value: function() {
                                                var t3 = arguments.length > 0 && (void 0) !== arguments[0] && arguments[0], n3 = this._attachment, e5 = this._currentState, r4 = this._easing, i1 = this._originalState, u1 = this._targetState;
                                                if (this._isPlaying) return this._isPlaying = false, m(this), t3 ? (this._applyFilter("beforeTween"), d(1, e5, i1, u1, 1, 0, r4), this._applyFilter("afterTween"), this._applyFilter("afterTweenEnd"), this._resolve(e5, n3)) : this._reject(e5, n3), this;
                                            }
                                        },
                                        {
                                            key: "isPlaying",
                                            value: function() {
                                                return this._isPlaying;
                                            }
                                        },
                                        {
                                            key: "setScheduleFunction",
                                            value: function(n3) {
                                                t2.setScheduleFunction(n3);
                                            }
                                        },
                                        {
                                            key: "dispose",
                                            value: function() {
                                                for(var t3 in this)delete this[t3];
                                            }
                                        }
                                    ], i(n2.prototype, e4), r3 && i(n2, r3), t2;
                                }();
                                function w() {
                                    var t2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
                                    }, n2 = new g(), e4 = n2.tween(t2);
                                    return e4.tweenable = n2, e4;
                                }
                                g.setScheduleFunction = function(t2) {
                                    return f = t2;
                                }, g.formulas = p, g.filters = {
                                }, g.now = Date.now || function() {
                                    return +new Date();
                                };
                            }).call(this, e(2));
                        },
                        function(t, n2, e4) {
                            "use strict";
                            e4.r(n2), e4.d(n2, "linear", function() {
                                return r3;
                            }), e4.d(n2, "easeInQuad", function() {
                                return i;
                            }), e4.d(n2, "easeOutQuad", function() {
                                return u;
                            }), e4.d(n2, "easeInOutQuad", function() {
                                return o2;
                            }), e4.d(n2, "easeInCubic", function() {
                                return a;
                            }), e4.d(n2, "easeOutCubic", function() {
                                return c;
                            }), e4.d(n2, "easeInOutCubic", function() {
                                return f2;
                            }), e4.d(n2, "easeInQuart", function() {
                                return s2;
                            }), e4.d(n2, "easeOutQuart", function() {
                                return l2;
                            }), e4.d(n2, "easeInOutQuart", function() {
                                return h;
                            }), e4.d(n2, "easeInQuint", function() {
                                return p;
                            }), e4.d(n2, "easeOutQuint", function() {
                                return d;
                            }), e4.d(n2, "easeInOutQuint", function() {
                                return v;
                            }), e4.d(n2, "easeInSine", function() {
                                return y;
                            }), e4.d(n2, "easeOutSine", function() {
                                return _;
                            }), e4.d(n2, "easeInOutSine", function() {
                                return m;
                            }), e4.d(n2, "easeInExpo", function() {
                                return g;
                            }), e4.d(n2, "easeOutExpo", function() {
                                return w;
                            }), e4.d(n2, "easeInOutExpo", function() {
                                return b;
                            }), e4.d(n2, "easeInCirc", function() {
                                return S;
                            }), e4.d(n2, "easeOutCirc", function() {
                                return O;
                            }), e4.d(n2, "easeInOutCirc", function() {
                                return M;
                            }), e4.d(n2, "easeOutBounce", function() {
                                return k;
                            }), e4.d(n2, "easeInBack", function() {
                                return j;
                            }), e4.d(n2, "easeOutBack", function() {
                                return P;
                            }), e4.d(n2, "easeInOutBack", function() {
                                return x;
                            }), e4.d(n2, "elastic", function() {
                                return T;
                            }), e4.d(n2, "swingFromTo", function() {
                                return F;
                            }), e4.d(n2, "swingFrom", function() {
                                return A;
                            }), e4.d(n2, "swingTo", function() {
                                return E;
                            }), e4.d(n2, "bounce", function() {
                                return I;
                            }), e4.d(n2, "bouncePast", function() {
                                return C;
                            }), e4.d(n2, "easeFromTo", function() {
                                return q;
                            }), e4.d(n2, "easeFrom", function() {
                                return Q;
                            }), e4.d(n2, "easeTo", function() {
                                return D;
                            });
                            /*!
                 * All equations are adapted from Thomas Fuchs'
                 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
                 *
                 * Based on Easing Equations (c) 2003 [Robert
                 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
                 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
                 */ /*!
                 *  TERMS OF USE - EASING EQUATIONS
                 *  Open source under the BSD License.
                 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
                 */ var r3 = function(t1) {
                                return t1;
                            }, i = function(t1) {
                                return Math.pow(t1, 2);
                            }, u = function(t1) {
                                return -(Math.pow(t1 - 1, 2) - 1);
                            }, o2 = function(t1) {
                                return (t1 /= 0.5) < 1 ? 0.5 * Math.pow(t1, 2) : -0.5 * ((t1 -= 2) * t1 - 2);
                            }, a = function(t1) {
                                return Math.pow(t1, 3);
                            }, c = function(t1) {
                                return Math.pow(t1 - 1, 3) + 1;
                            }, f2 = function(t1) {
                                return (t1 /= 0.5) < 1 ? 0.5 * Math.pow(t1, 3) : 0.5 * (Math.pow(t1 - 2, 3) + 2);
                            }, s2 = function(t1) {
                                return Math.pow(t1, 4);
                            }, l2 = function(t1) {
                                return -(Math.pow(t1 - 1, 4) - 1);
                            }, h = function(t1) {
                                return (t1 /= 0.5) < 1 ? 0.5 * Math.pow(t1, 4) : -0.5 * ((t1 -= 2) * Math.pow(t1, 3) - 2);
                            }, p = function(t1) {
                                return Math.pow(t1, 5);
                            }, d = function(t1) {
                                return Math.pow(t1 - 1, 5) + 1;
                            }, v = function(t1) {
                                return (t1 /= 0.5) < 1 ? 0.5 * Math.pow(t1, 5) : 0.5 * (Math.pow(t1 - 2, 5) + 2);
                            }, y = function(t1) {
                                return 1 - Math.cos(t1 * (Math.PI / 2));
                            }, _ = function(t1) {
                                return Math.sin(t1 * (Math.PI / 2));
                            }, m = function(t1) {
                                return -0.5 * (Math.cos(Math.PI * t1) - 1);
                            }, g = function(t1) {
                                return 0 === t1 ? 0 : Math.pow(2, 10 * (t1 - 1));
                            }, w = function(t1) {
                                return 1 === t1 ? 1 : 1 - Math.pow(2, -10 * t1);
                            }, b = function(t1) {
                                return 0 === t1 ? 0 : 1 === t1 ? 1 : (t1 /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t1 - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t1));
                            }, S = function(t1) {
                                return -(Math.sqrt(1 - t1 * t1) - 1);
                            }, O = function(t1) {
                                return Math.sqrt(1 - Math.pow(t1 - 1, 2));
                            }, M = function(t1) {
                                return (t1 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t1 * t1) - 1) : 0.5 * (Math.sqrt(1 - (t1 -= 2) * t1) + 1);
                            }, k = function(t1) {
                                return t1 < 1 / 2.75 ? 7.5625 * t1 * t1 : t1 < 2 / 2.75 ? 7.5625 * (t1 -= 1.5 / 2.75) * t1 + 0.75 : t1 < 2.5 / 2.75 ? 7.5625 * (t1 -= 2.25 / 2.75) * t1 + 0.9375 : 7.5625 * (t1 -= 2.625 / 2.75) * t1 + 0.984375;
                            }, j = function(t1) {
                                var n3 = 1.70158;
                                return t1 * t1 * ((n3 + 1) * t1 - n3);
                            }, P = function(t1) {
                                var n3 = 1.70158;
                                return (t1 -= 1) * t1 * ((n3 + 1) * t1 + n3) + 1;
                            }, x = function(t1) {
                                var n3 = 1.70158;
                                return (t1 /= 0.5) < 1 ? t1 * t1 * ((1 + (n3 *= 1.525)) * t1 - n3) * 0.5 : 0.5 * ((t1 -= 2) * t1 * ((1 + (n3 *= 1.525)) * t1 + n3) + 2);
                            }, T = function(t1) {
                                return -1 * Math.pow(4, -8 * t1) * Math.sin((6 * t1 - 1) * (2 * Math.PI) / 2) + 1;
                            }, F = function(t1) {
                                var n3 = 1.70158;
                                return (t1 /= 0.5) < 1 ? t1 * t1 * ((1 + (n3 *= 1.525)) * t1 - n3) * 0.5 : 0.5 * ((t1 -= 2) * t1 * ((1 + (n3 *= 1.525)) * t1 + n3) + 2);
                            }, A = function(t1) {
                                var n3 = 1.70158;
                                return t1 * t1 * ((n3 + 1) * t1 - n3);
                            }, E = function(t1) {
                                var n3 = 1.70158;
                                return (t1 -= 1) * t1 * ((n3 + 1) * t1 + n3) + 1;
                            }, I = function(t1) {
                                return t1 < 1 / 2.75 ? 7.5625 * t1 * t1 : t1 < 2 / 2.75 ? 7.5625 * (t1 -= 1.5 / 2.75) * t1 + 0.75 : t1 < 2.5 / 2.75 ? 7.5625 * (t1 -= 2.25 / 2.75) * t1 + 0.9375 : 7.5625 * (t1 -= 2.625 / 2.75) * t1 + 0.984375;
                            }, C = function(t1) {
                                return t1 < 1 / 2.75 ? 7.5625 * t1 * t1 : t1 < 2 / 2.75 ? 2 - (7.5625 * (t1 -= 1.5 / 2.75) * t1 + 0.75) : t1 < 2.5 / 2.75 ? 2 - (7.5625 * (t1 -= 2.25 / 2.75) * t1 + 0.9375) : 2 - (7.5625 * (t1 -= 2.625 / 2.75) * t1 + 0.984375);
                            }, q = function(t1) {
                                return (t1 /= 0.5) < 1 ? 0.5 * Math.pow(t1, 4) : -0.5 * ((t1 -= 2) * Math.pow(t1, 3) - 2);
                            }, Q = function(t1) {
                                return Math.pow(t1, 4);
                            }, D = function(t1) {
                                return Math.pow(t1, 0.25);
                            };
                        },
                        function(t, n2) {
                            var e4;
                            e4 = (function() {
                                return this;
                            })();
                            try {
                                e4 = e4 || new Function("return this")();
                            } catch (t1) {
                                "object" == typeof window && (e4 = window);
                            }
                            t.exports = e4;
                        },
                        function(t, n2, e4) {
                            "use strict";
                            e4.r(n2);
                            var r3 = {
                            };
                            e4.r(r3), e4.d(r3, "doesApply", function() {
                                return x;
                            }), e4.d(r3, "tweenCreated", function() {
                                return T;
                            }), e4.d(r3, "beforeTween", function() {
                                return F;
                            }), e4.d(r3, "afterTween", function() {
                                return A;
                            });
                            var i, u, o2 = e4(0), a = /(\d|-|\.)/, c = /([^\-0-9.]+)/g, f2 = /[0-9.-]+/g, s2 = (i = f2.source, u = /,\s*/.source, new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i, "\\)"), "g")), l2 = /^.*\(/, h = /#([0-9]|[a-f]){3,6}/gi, p = function(t1, n3) {
                                return t1.map(function(t2, e5) {
                                    return "_".concat(n3, "_").concat(e5);
                                });
                            };
                            function d(t1) {
                                return parseInt(t1, 16);
                            }
                            var v = function(t1) {
                                var n3;
                                return "rgb(".concat((n3 = t1, 3 === (n3 = n3.replace(/#/, "")).length && (n3 = (n3 = n3.split(""))[0] + n3[0] + n3[1] + n3[1] + n3[2] + n3[2]), [
                                    d(n3.substr(0, 2)),
                                    d(n3.substr(2, 2)),
                                    d(n3.substr(4, 2))
                                ]).join(","), ")");
                            }, y = function(t1, n3, e5) {
                                var r4 = n3.match(t1), i1 = n3.replace(t1, "VAL");
                                return r4 && r4.forEach(function(t2) {
                                    return i1 = i1.replace("VAL", e5(t2));
                                }), i1;
                            }, _ = function(t1) {
                                for(var n3 in t1){
                                    var e5 = t1[n3];
                                    "string" == typeof e5 && e5.match(h) && (t1[n3] = y(h, e5, v));
                                }
                            }, m = function(t1) {
                                var n3 = t1.match(f2).map(Math.floor), e6 = t1.match(l2)[0];
                                return "".concat(e6).concat(n3.join(","), ")");
                            }, g = function(t1) {
                                return t1.match(f2);
                            }, w = function(t1) {
                                var n3, e6, r4 = {
                                };
                                for(var i1 in t1){
                                    var u1 = t1[i1];
                                    "string" == typeof u1 && (r4[i1] = {
                                        formatString: (n3 = u1, e6 = void 0, e6 = n3.match(c), e6 ? (1 === e6.length || n3.charAt(0).match(a)) && e6.unshift("") : e6 = [
                                            "",
                                            ""
                                        ], e6.join("VAL")),
                                        chunkNames: p(g(u1), i1)
                                    });
                                }
                                return r4;
                            }, b = function(t1, n3) {
                                var e6 = function(e7) {
                                    g(t1[e7]).forEach(function(r4, i1) {
                                        return t1[n3[e7].chunkNames[i1]] = +r4;
                                    }), delete t1[e7];
                                };
                                for(var r4 in n3)e6(r4);
                            }, S = function(t1, n3) {
                                var e6 = {
                                };
                                return n3.forEach(function(n4) {
                                    e6[n4] = t1[n4], delete t1[n4];
                                }), e6;
                            }, O = function(t1, n3) {
                                return n3.map(function(n4) {
                                    return t1[n4];
                                });
                            }, M = function(t1, n3) {
                                return n3.forEach(function(n4) {
                                    return t1 = t1.replace("VAL", +n4.toFixed(4));
                                }), t1;
                            }, k = function(t1, n3) {
                                for(var e6 in n3){
                                    var r4 = n3[e6], i1 = r4.chunkNames, u2 = r4.formatString, o3 = M(u2, O(S(t1, i1), i1));
                                    t1[e6] = y(s2, o3, m);
                                }
                            }, j = function(t1, n3) {
                                var e6 = function(e7) {
                                    var r5 = n3[e7].chunkNames, i2 = t1[e7];
                                    if ("string" == typeof i2) {
                                        var u3 = i2.split(" "), o4 = u3[u3.length - 1];
                                        r5.forEach(function(n4, e8) {
                                            return t1[n4] = u3[e8] || o4;
                                        });
                                    } else r5.forEach(function(n4) {
                                        return t1[n4] = i2;
                                    });
                                    delete t1[e7];
                                };
                                for(var r5 in n3)e6(r5);
                            }, P = function(t1, n3) {
                                for(var e6 in n3){
                                    var r5 = n3[e6].chunkNames, i2 = t1[r5[0]];
                                    t1[e6] = "string" == typeof i2 ? r5.map(function(n4) {
                                        var e7 = t1[n4];
                                        return delete t1[n4], e7;
                                    }).join(" ") : i2;
                                }
                            }, x = function(t1) {
                                var n3 = t1._currentState;
                                return Object.keys(n3).some(function(t2) {
                                    return "string" == typeof n3[t2];
                                });
                            };
                            function T(t1) {
                                var n3 = t1._currentState;
                                [
                                    n3,
                                    t1._originalState,
                                    t1._targetState
                                ].forEach(_), t1._tokenData = w(n3);
                            }
                            function F(t1) {
                                var n3 = t1._currentState, e6 = t1._originalState, r6 = t1._targetState, i3 = t1._easing, u4 = t1._tokenData;
                                j(i3, u4), [
                                    n3,
                                    e6,
                                    r6
                                ].forEach(function(t2) {
                                    return b(t2, u4);
                                });
                            }
                            function A(t1) {
                                var n3 = t1._currentState, e6 = t1._originalState, r6 = t1._targetState, i3 = t1._easing, u4 = t1._tokenData;
                                [
                                    n3,
                                    e6,
                                    r6
                                ].forEach(function(t2) {
                                    return k(t2, u4);
                                }), P(i3, u4);
                            }
                            function E(t1, n3, e6) {
                                return n3 in t1 ? Object.defineProperty(t1, n3, {
                                    value: e6,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }) : t1[n3] = e6, t1;
                            }
                            var I = new o2.a(), C = o2.a.filters, q = function(t1, n3, e6, r6) {
                                var i3 = arguments.length > 4 && (void 0) !== arguments[4] ? arguments[4] : 0, u4 = function(t2) {
                                    for(var n4 = 1; n4 < arguments.length; n4++){
                                        var e7 = null != arguments[n4] ? arguments[n4] : {
                                        }, r7 = Object.keys(e7);
                                        "function" == typeof Object.getOwnPropertySymbols && (r7 = r7.concat(Object.getOwnPropertySymbols(e7).filter(function(t3) {
                                            return Object.getOwnPropertyDescriptor(e7, t3).enumerable;
                                        }))), r7.forEach(function(n5) {
                                            E(t2, n5, e7[n5]);
                                        });
                                    }
                                    return t2;
                                }({
                                }, t1), a1 = Object(o2.b)(t1, r6);
                                for(var c1 in I._filters.length = 0, I.set({
                                }), I._currentState = u4, I._originalState = t1, I._targetState = n3, I._easing = a1, C)C[c1].doesApply(I) && I._filters.push(C[c1]);
                                I._applyFilter("tweenCreated"), I._applyFilter("beforeTween");
                                var f3 = Object(o2.e)(e6, u4, t1, n3, 1, i3, a1);
                                return I._applyFilter("afterTween"), f3;
                            };
                            function Q(t1) {
                                return (function(t2) {
                                    if (Array.isArray(t2)) {
                                        for(var n3 = 0, e6 = new Array(t2.length); n3 < t2.length; n3++)e6[n3] = t2[n3];
                                        return e6;
                                    }
                                })(t1) || (function(t2) {
                                    if (Symbol.iterator in Object(t2) || "[object Arguments]" === Object.prototype.toString.call(t2)) return Array.from(t2);
                                })(t1) || (function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                                })();
                            }
                            function D(t1, n4) {
                                for(var e8 = 0; e8 < n4.length; e8++){
                                    var r6 = n4[e8];
                                    r6.enumerable = r6.enumerable || false, r6.configurable = true, "value" in r6 && (r6.writable = true), Object.defineProperty(t1, r6.key, r6);
                                }
                            }
                            function B(t1, n4) {
                                if (!n4.has(t1)) throw new TypeError("attempted to get private field on non-instance");
                                var e8 = n4.get(t1);
                                return e8.get ? e8.get.call(t1) : e8.value;
                            }
                            var N = function() {
                                function t1() {
                                    (function(t2, n4) {
                                        if (!(t2 instanceof n4)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t1), R.set(this, {
                                        writable: true,
                                        value: []
                                    });
                                    for(var n4 = arguments.length, e8 = new Array(n4), r8 = 0; r8 < n4; r8++)e8[r8] = arguments[r8];
                                    e8.forEach(this.add.bind(this));
                                }
                                var n4, e8, r8;
                                return n4 = t1, e8 = [
                                    {
                                        key: "add",
                                        value: function(t2) {
                                            return B(this, R).push(t2), t2;
                                        }
                                    },
                                    {
                                        key: "remove",
                                        value: function(t2) {
                                            var n5 = B(this, R).indexOf(t2);
                                            return ~n5 && B(this, R).splice(n5, 1), t2;
                                        }
                                    },
                                    {
                                        key: "empty",
                                        value: function() {
                                            return this.tweenables.map(this.remove.bind(this));
                                        }
                                    },
                                    {
                                        key: "isPlaying",
                                        value: function() {
                                            return B(this, R).some(function(t2) {
                                                return t2.isPlaying();
                                            });
                                        }
                                    },
                                    {
                                        key: "play",
                                        value: function() {
                                            return B(this, R).forEach(function(t2) {
                                                return t2.tween();
                                            }), this;
                                        }
                                    },
                                    {
                                        key: "pause",
                                        value: function() {
                                            return B(this, R).forEach(function(t2) {
                                                return t2.pause();
                                            }), this;
                                        }
                                    },
                                    {
                                        key: "resume",
                                        value: function() {
                                            return B(this, R).forEach(function(t2) {
                                                return t2.resume();
                                            }), this;
                                        }
                                    },
                                    {
                                        key: "stop",
                                        value: function(t2) {
                                            return B(this, R).forEach(function(n5) {
                                                return n5.stop(t2);
                                            }), this;
                                        }
                                    },
                                    {
                                        key: "tweenables",
                                        get: function() {
                                            return Q(B(this, R));
                                        }
                                    },
                                    {
                                        key: "promises",
                                        get: function() {
                                            return B(this, R).map(function(t2) {
                                                return t2._promise;
                                            });
                                        }
                                    }
                                ], D(n4.prototype, e8), r8 && D(n4, r8), t1;
                            }(), R = new WeakMap();
                            function z(t1, n4, e8, r8, i3, u4) {
                                var o5 = 0, a1 = 0, c1 = 0, f3 = 0, s3 = 0, l3 = 0, h1 = function(t2) {
                                    return ((o5 * t2 + a1) * t2 + c1) * t2;
                                }, p1 = function(t2) {
                                    return t2 >= 0 ? t2 : 0 - t2;
                                };
                                return o5 = 1 - (c1 = 3 * n4) - (a1 = 3 * (r8 - n4) - c1), f3 = 1 - (l3 = 3 * e8) - (s3 = 3 * (i3 - e8) - l3), (function(t2, n5) {
                                    var e9;
                                    return e9 = (function(t3, n6) {
                                        var e10, r9, i4, u5, f4, s4, l4;
                                        for(i4 = t3, s4 = 0; s4 < 8; s4++){
                                            if (u5 = h1(i4) - t3, p1(u5) < n6) return i4;
                                            if (p1(f4 = (3 * o5 * (l4 = i4) + 2 * a1) * l4 + c1) < 0.000001) break;
                                            i4 -= u5 / f4;
                                        }
                                        if ((i4 = t3) < (e10 = 0)) return e10;
                                        if (i4 > (r9 = 1)) return r9;
                                        for(; e10 < r9;){
                                            if (u5 = h1(i4), p1(u5 - t3) < n6) return i4;
                                            t3 > u5 ? e10 = i4 : r9 = i4, i4 = 0.5 * (r9 - e10) + e10;
                                        }
                                        return i4;
                                    })(t2, n5), ((f3 * e9 + s3) * e9 + l3) * e9;
                                })(t1, function(t2) {
                                    return 1 / (200 * t2);
                                }(u4));
                            }
                            var L = function(t1, n4, e8, r8, i3) {
                                var u4 = function(t2, n5, e9, r9) {
                                    return function(i4) {
                                        return z(i4, t2, n5, e9, r9, 1);
                                    };
                                }(n4, e8, r8, i3);
                                return u4.displayName = t1, u4.x1 = n4, u4.y1 = e8, u4.x2 = r8, u4.y2 = i3, o2.a.formulas[t1] = u4;
                            }, V = function(t1) {
                                return delete o2.a.formulas[t1];
                            };
                            e4.d(n2, "processTweens", function() {
                                return o2.c;
                            }), e4.d(n2, "Tweenable", function() {
                                return o2.a;
                            }), e4.d(n2, "tween", function() {
                                return o2.d;
                            }), e4.d(n2, "interpolate", function() {
                                return q;
                            }), e4.d(n2, "Scene", function() {
                                return N;
                            }), e4.d(n2, "setBezierFunction", function() {
                                return L;
                            }), e4.d(n2, "unsetBezierFunction", function() {
                                return V;
                            }), o2.a.filters.token = r3;
                        }
                    ]);
                });
            },
            {
            }
        ],
        2: [
            function(require, module1, exports1) {
                // Circle shaped progress bar
                var Shape = require("./shape");
                var utils = require("./utils");
                var Circle = function Circle1(container, options) {
                    // Use two arcs to form a circle
                    // See this answer http://stackoverflow.com/a/10477334/1446092
                    this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}";
                    this.containerAspectRatio = 1;
                    Shape.apply(this, arguments);
                };
                Circle.prototype = new Shape();
                Circle.prototype.constructor = Circle;
                Circle.prototype._pathString = function _pathString(opts) {
                    var widthOfWider = opts.strokeWidth;
                    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) widthOfWider = opts.trailWidth;
                    var r3 = 50 - widthOfWider / 2;
                    return utils.render(this._pathTemplate, {
                        radius: r3,
                        "2radius": r3 * 2
                    });
                };
                Circle.prototype._trailString = function _trailString(opts) {
                    return this._pathString(opts);
                };
                module1.exports = Circle;
            },
            {
                "./shape": 7,
                "./utils": 9
            }
        ],
        3: [
            function(require, module1, exports1) {
                // Line shaped progress bar
                var Shape = require("./shape");
                var utils = require("./utils");
                var Line = function Line1(container, options) {
                    this._pathTemplate = "M 0,{center} L 100,{center}";
                    Shape.apply(this, arguments);
                };
                Line.prototype = new Shape();
                Line.prototype.constructor = Line;
                Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
                    svg.setAttribute("viewBox", "0 0 100 " + opts.strokeWidth);
                    svg.setAttribute("preserveAspectRatio", "none");
                };
                Line.prototype._pathString = function _pathString(opts) {
                    return utils.render(this._pathTemplate, {
                        center: opts.strokeWidth / 2
                    });
                };
                Line.prototype._trailString = function _trailString(opts) {
                    return this._pathString(opts);
                };
                module1.exports = Line;
            },
            {
                "./shape": 7,
                "./utils": 9
            }
        ],
        4: [
            function(require, module1, exports1) {
                module1.exports = {
                    // Higher level API, different shaped progress bars
                    Line: require("./line"),
                    Circle: require("./circle"),
                    SemiCircle: require("./semicircle"),
                    Square: require("./square"),
                    // Lower level API to use any SVG path
                    Path: require("./path"),
                    // Base-class for creating new custom shapes
                    // to be in line with the API of built-in shapes
                    // Undocumented.
                    Shape: require("./shape"),
                    // Internal utils, undocumented.
                    utils: require("./utils")
                };
            },
            {
                "./circle": 2,
                "./line": 3,
                "./path": 5,
                "./semicircle": 6,
                "./shape": 7,
                "./square": 8,
                "./utils": 9
            }
        ],
        5: [
            function(require, module1, exports1) {
                // Lower level API to animate any kind of svg path
                var shifty = require("shifty");
                var utils = require("./utils");
                var Tweenable = shifty.Tweenable;
                var EASING_ALIASES = {
                    easeIn: "easeInCubic",
                    easeOut: "easeOutCubic",
                    easeInOut: "easeInOutCubic"
                };
                var Path = function Path1(path, opts) {
                    // Throw a better error if not initialized with `new` keyword
                    if (!(this instanceof Path1)) throw new Error("Constructor was called without new keyword");
                    // Default parameters for animation
                    opts = utils.extend({
                        delay: 0,
                        duration: 800,
                        easing: "linear",
                        from: {
                        },
                        to: {
                        },
                        step: function() {
                        }
                    }, opts);
                    var element;
                    if (utils.isString(path)) element = document.querySelector(path);
                    else element = path;
                    // Reveal .path as public attribute
                    this.path = element;
                    this._opts = opts;
                    this._tweenable = null;
                    // Set up the starting positions
                    var length = this.path.getTotalLength();
                    this.path.style.strokeDasharray = length + " " + length;
                    this.set(0);
                };
                Path.prototype.value = function value() {
                    var offset = this._getComputedDashOffset();
                    var length = this.path.getTotalLength();
                    var progress = 1 - offset / length;
                    // Round number to prevent returning very small number like 1e-30, which
                    // is practically 0
                    return parseFloat(progress.toFixed(6), 10);
                };
                Path.prototype.set = function set(progress) {
                    this.stop();
                    this.path.style.strokeDashoffset = this._progressToOffset(progress);
                    var step = this._opts.step;
                    if (utils.isFunction(step)) {
                        var easing = this._easing(this._opts.easing);
                        var values = this._calculateTo(progress, easing);
                        var reference = this._opts.shape || this;
                        step(values, reference, this._opts.attachment);
                    }
                };
                Path.prototype.stop = function stop() {
                    this._stopTween();
                    this.path.style.strokeDashoffset = this._getComputedDashOffset();
                };
                // Method introduced here:
                // http://jakearchibald.com/2013/animated-line-drawing-svg/
                Path.prototype.animate = function animate(progress, opts, cb) {
                    opts = opts || {
                    };
                    if (utils.isFunction(opts)) {
                        cb = opts;
                        opts = {
                        };
                    }
                    var passedOpts = utils.extend({
                    }, opts);
                    // Copy default opts to new object so defaults are not modified
                    var defaultOpts = utils.extend({
                    }, this._opts);
                    opts = utils.extend(defaultOpts, opts);
                    var shiftyEasing = this._easing(opts.easing);
                    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);
                    this.stop();
                    // Trigger a layout so styles are calculated & the browser
                    // picks up the starting position before animating
                    this.path.getBoundingClientRect();
                    var offset = this._getComputedDashOffset();
                    var newOffset = this._progressToOffset(progress);
                    var self = this;
                    this._tweenable = new Tweenable();
                    this._tweenable.tween({
                        from: utils.extend({
                            offset: offset
                        }, values.from),
                        to: utils.extend({
                            offset: newOffset
                        }, values.to),
                        duration: opts.duration,
                        delay: opts.delay,
                        easing: shiftyEasing,
                        step: function(state) {
                            self.path.style.strokeDashoffset = state.offset;
                            var reference = opts.shape || self;
                            opts.step(state, reference, opts.attachment);
                        }
                    }).then(function(state) {
                        if (utils.isFunction(cb)) cb();
                    });
                };
                Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
                    var computedStyle = window.getComputedStyle(this.path, null);
                    return parseFloat(computedStyle.getPropertyValue("stroke-dashoffset"), 10);
                };
                Path.prototype._progressToOffset = function _progressToOffset(progress) {
                    var length = this.path.getTotalLength();
                    return length - progress * length;
                };
                // Resolves from and to values for animation.
                Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
                    if (opts.from && opts.to) return {
                        from: opts.from,
                        to: opts.to
                    };
                    return {
                        from: this._calculateFrom(easing),
                        to: this._calculateTo(progress, easing)
                    };
                };
                // Calculate `from` values from options passed at initialization
                Path.prototype._calculateFrom = function _calculateFrom(easing) {
                    return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
                };
                // Calculate `to` values from options passed at initialization
                Path.prototype._calculateTo = function _calculateTo(progress, easing) {
                    return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
                };
                Path.prototype._stopTween = function _stopTween() {
                    if (this._tweenable !== null) {
                        this._tweenable.stop();
                        this._tweenable = null;
                    }
                };
                Path.prototype._easing = function _easing(easing) {
                    if (EASING_ALIASES.hasOwnProperty(easing)) return EASING_ALIASES[easing];
                    return easing;
                };
                module1.exports = Path;
            },
            {
                "./utils": 9,
                shifty: 1
            }
        ],
        6: [
            function(require, module1, exports1) {
                // Semi-SemiCircle shaped progress bar
                var Shape = require("./shape");
                var Circle = require("./circle");
                var utils = require("./utils");
                var SemiCircle = function SemiCircle1(container, options) {
                    // Use one arc to form a SemiCircle
                    // See this answer http://stackoverflow.com/a/10477334/1446092
                    this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0";
                    this.containerAspectRatio = 2;
                    Shape.apply(this, arguments);
                };
                SemiCircle.prototype = new Shape();
                SemiCircle.prototype.constructor = SemiCircle;
                SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
                    svg.setAttribute("viewBox", "0 0 100 50");
                };
                SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(opts, container, textContainer) {
                    if (opts.text.style) {
                        // Reset top style
                        textContainer.style.top = "auto";
                        textContainer.style.bottom = "0";
                        if (opts.text.alignToBottom) utils.setStyle(textContainer, "transform", "translate(-50%, 0)");
                        else utils.setStyle(textContainer, "transform", "translate(-50%, 50%)");
                    }
                };
                // Share functionality with Circle, just have different path
                SemiCircle.prototype._pathString = Circle.prototype._pathString;
                SemiCircle.prototype._trailString = Circle.prototype._trailString;
                module1.exports = SemiCircle;
            },
            {
                "./circle": 2,
                "./shape": 7,
                "./utils": 9
            }
        ],
        7: [
            function(require, module1, exports1) {
                // Base object for different progress bar shapes
                var Path = require("./path");
                var utils = require("./utils");
                var DESTROYED_ERROR = "Object is destroyed";
                var Shape = function Shape1(container, opts) {
                    // Throw a better error if progress bars are not initialized with `new`
                    // keyword
                    if (!(this instanceof Shape1)) throw new Error("Constructor was called without new keyword");
                    // Prevent calling constructor without parameters so inheritance
                    // works correctly. To understand, this is how Shape is inherited:
                    //
                    //   Line.prototype = new Shape();
                    //
                    // We just want to set the prototype for Line.
                    if (arguments.length === 0) return;
                    // Default parameters for progress bar creation
                    this._opts = utils.extend({
                        color: "#555",
                        strokeWidth: 1,
                        trailColor: null,
                        trailWidth: null,
                        fill: null,
                        text: {
                            style: {
                                color: null,
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                padding: 0,
                                margin: 0,
                                transform: {
                                    prefix: true,
                                    value: "translate(-50%, -50%)"
                                }
                            },
                            autoStyleContainer: true,
                            alignToBottom: true,
                            value: null,
                            className: "progressbar-text"
                        },
                        svgStyle: {
                            display: "block",
                            width: "100%"
                        },
                        warnings: false
                    }, opts, true); // Use recursive extend
                    // If user specifies e.g. svgStyle or text style, the whole object
                    // should replace the defaults to make working with styles easier
                    if (utils.isObject(opts) && opts.svgStyle !== undefined) this._opts.svgStyle = opts.svgStyle;
                    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) this._opts.text.style = opts.text.style;
                    var svgView = this._createSvgView(this._opts);
                    var element;
                    if (utils.isString(container)) element = document.querySelector(container);
                    else element = container;
                    if (!element) throw new Error("Container does not exist: " + container);
                    this._container = element;
                    this._container.appendChild(svgView.svg);
                    if (this._opts.warnings) this._warnContainerAspectRatio(this._container);
                    if (this._opts.svgStyle) utils.setStyles(svgView.svg, this._opts.svgStyle);
                    // Expose public attributes before Path initialization
                    this.svg = svgView.svg;
                    this.path = svgView.path;
                    this.trail = svgView.trail;
                    this.text = null;
                    var newOpts = utils.extend({
                        attachment: undefined,
                        shape: this
                    }, this._opts);
                    this._progressPath = new Path(svgView.path, newOpts);
                    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) this.setText(this._opts.text.value);
                };
                Shape.prototype.animate = function animate(progress, opts, cb) {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    this._progressPath.animate(progress, opts, cb);
                };
                Shape.prototype.stop = function stop() {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    // Don't crash if stop is called inside step function
                    if (this._progressPath === undefined) return;
                    this._progressPath.stop();
                };
                Shape.prototype.pause = function pause() {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    if (this._progressPath === undefined) return;
                    if (!this._progressPath._tweenable) // It seems that we can't pause this
                    return;
                    this._progressPath._tweenable.pause();
                };
                Shape.prototype.resume = function resume() {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    if (this._progressPath === undefined) return;
                    if (!this._progressPath._tweenable) // It seems that we can't resume this
                    return;
                    this._progressPath._tweenable.resume();
                };
                Shape.prototype.destroy = function destroy() {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    this.stop();
                    this.svg.parentNode.removeChild(this.svg);
                    this.svg = null;
                    this.path = null;
                    this.trail = null;
                    this._progressPath = null;
                    if (this.text !== null) {
                        this.text.parentNode.removeChild(this.text);
                        this.text = null;
                    }
                };
                Shape.prototype.set = function set(progress) {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    this._progressPath.set(progress);
                };
                Shape.prototype.value = function value() {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    if (this._progressPath === undefined) return 0;
                    return this._progressPath.value();
                };
                Shape.prototype.setText = function setText(newText) {
                    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
                    if (this.text === null) {
                        // Create new text node
                        this.text = this._createTextContainer(this._opts, this._container);
                        this._container.appendChild(this.text);
                    }
                    // Remove previous text and add new
                    if (utils.isObject(newText)) {
                        utils.removeChildren(this.text);
                        this.text.appendChild(newText);
                    } else this.text.innerHTML = newText;
                };
                Shape.prototype._createSvgView = function _createSvgView(opts) {
                    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this._initializeSvg(svg, opts);
                    var trailPath = null;
                    // Each option listed in the if condition are 'triggers' for creating
                    // the trail path
                    if (opts.trailColor || opts.trailWidth) {
                        trailPath = this._createTrail(opts);
                        svg.appendChild(trailPath);
                    }
                    var path = this._createPath(opts);
                    svg.appendChild(path);
                    return {
                        svg: svg,
                        path: path,
                        trail: trailPath
                    };
                };
                Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
                    svg.setAttribute("viewBox", "0 0 100 100");
                };
                Shape.prototype._createPath = function _createPath(opts) {
                    var pathString = this._pathString(opts);
                    return this._createPathElement(pathString, opts);
                };
                Shape.prototype._createTrail = function _createTrail(opts) {
                    // Create path string with original passed options
                    var pathString = this._trailString(opts);
                    // Prevent modifying original
                    var newOpts = utils.extend({
                    }, opts);
                    // Defaults for parameters which modify trail path
                    if (!newOpts.trailColor) newOpts.trailColor = "#eee";
                    if (!newOpts.trailWidth) newOpts.trailWidth = newOpts.strokeWidth;
                    newOpts.color = newOpts.trailColor;
                    newOpts.strokeWidth = newOpts.trailWidth;
                    // When trail path is set, fill must be set for it instead of the
                    // actual path to prevent trail stroke from clipping
                    newOpts.fill = null;
                    return this._createPathElement(pathString, newOpts);
                };
                Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
                    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", pathString);
                    path.setAttribute("stroke", opts.color);
                    path.setAttribute("stroke-width", opts.strokeWidth);
                    if (opts.fill) path.setAttribute("fill", opts.fill);
                    else path.setAttribute("fill-opacity", "0");
                    return path;
                };
                Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
                    var textContainer = document.createElement("div");
                    textContainer.className = opts.text.className;
                    var textStyle = opts.text.style;
                    if (textStyle) {
                        if (opts.text.autoStyleContainer) container.style.position = "relative";
                        utils.setStyles(textContainer, textStyle);
                        // Default text color to progress bar's color
                        if (!textStyle.color) textContainer.style.color = opts.color;
                    }
                    this._initializeTextContainer(opts, container, textContainer);
                    return textContainer;
                };
                // Give custom shapes possibility to modify text element
                Shape.prototype._initializeTextContainer = function(opts, container, element) {
                // By default, no-op
                // Custom shapes should respect API options, such as text.style
                };
                Shape.prototype._pathString = function _pathString(opts) {
                    throw new Error("Override this function for each progress bar");
                };
                Shape.prototype._trailString = function _trailString(opts) {
                    throw new Error("Override this function for each progress bar");
                };
                Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
                    if (!this.containerAspectRatio) return;
                    var computedStyle = window.getComputedStyle(container, null);
                    var width = parseFloat(computedStyle.getPropertyValue("width"), 10);
                    var height = parseFloat(computedStyle.getPropertyValue("height"), 10);
                    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
                        console.warn("Incorrect aspect ratio of container", "#" + container.id, "detected:", computedStyle.getPropertyValue("width") + "(width)", "/", computedStyle.getPropertyValue("height") + "(height)", "=", width / height);
                        console.warn("Aspect ratio of should be", this.containerAspectRatio);
                    }
                };
                module1.exports = Shape;
            },
            {
                "./path": 5,
                "./utils": 9
            }
        ],
        8: [
            function(require, module1, exports1) {
                // Square shaped progress bar
                // Note: Square is not core part of API anymore. It's left here
                //       for reference. square is not included to the progressbar
                //       build anymore
                var Shape = require("./shape");
                var utils = require("./utils");
                var Square = function Square1(container, options) {
                    this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}";
                    this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}";
                    Shape.apply(this, arguments);
                };
                Square.prototype = new Shape();
                Square.prototype.constructor = Square;
                Square.prototype._pathString = function _pathString(opts) {
                    var w = 100 - opts.strokeWidth / 2;
                    return utils.render(this._pathTemplate, {
                        width: w,
                        strokeWidth: opts.strokeWidth,
                        halfOfStrokeWidth: opts.strokeWidth / 2
                    });
                };
                Square.prototype._trailString = function _trailString(opts) {
                    var w = 100 - opts.strokeWidth / 2;
                    return utils.render(this._trailTemplate, {
                        width: w,
                        strokeWidth: opts.strokeWidth,
                        halfOfStrokeWidth: opts.strokeWidth / 2,
                        startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
                    });
                };
                module1.exports = Square;
            },
            {
                "./shape": 7,
                "./utils": 9
            }
        ],
        9: [
            function(require, module1, exports1) {
                // Utility functions
                var PREFIXES = "Webkit Moz O ms".split(" ");
                var FLOAT_COMPARISON_EPSILON = 0.001;
                // Copy all attributes from source object to destination object.
                // destination object is mutated.
                function extend(destination, source, recursive) {
                    destination = destination || {
                    };
                    source = source || {
                    };
                    recursive = recursive || false;
                    for(var attrName in source)if (source.hasOwnProperty(attrName)) {
                        var destVal = destination[attrName];
                        var sourceVal = source[attrName];
                        if (recursive && isObject(destVal) && isObject(sourceVal)) destination[attrName] = extend(destVal, sourceVal, recursive);
                        else destination[attrName] = sourceVal;
                    }
                    return destination;
                }
                // Renders templates with given variables. Variables must be surrounded with
                // braces without any spaces, e.g. {variable}
                // All instances of variable placeholders will be replaced with given content
                // Example:
                // render('Hello, {message}!', {message: 'world'})
                function render(template, vars) {
                    var rendered = template;
                    for(var key in vars)if (vars.hasOwnProperty(key)) {
                        var val = vars[key];
                        var regExpString = "\\{" + key + "\\}";
                        var regExp = new RegExp(regExpString, "g");
                        rendered = rendered.replace(regExp, val);
                    }
                    return rendered;
                }
                function setStyle(element, style, value) {
                    var elStyle = element.style; // cache for performance
                    for(var i3 = 0; i3 < PREFIXES.length; ++i3){
                        var prefix = PREFIXES[i3];
                        elStyle[prefix + capitalize(style)] = value;
                    }
                    elStyle[style] = value;
                }
                function setStyles(element, styles) {
                    forEachObject(styles, function(styleValue, styleName) {
                        // Allow disabling some individual styles by setting them
                        // to null or undefined
                        if (styleValue === null || styleValue === undefined) return;
                        // If style's value is {prefix: true, value: '50%'},
                        // Set also browser prefixed styles
                        if (isObject(styleValue) && styleValue.prefix === true) setStyle(element, styleName, styleValue.value);
                        else element.style[styleName] = styleValue;
                    });
                }
                function capitalize(text) {
                    return text.charAt(0).toUpperCase() + text.slice(1);
                }
                function isString(obj) {
                    return typeof obj === "string" || obj instanceof String;
                }
                function isFunction(obj) {
                    return typeof obj === "function";
                }
                function isArray(obj) {
                    return Object.prototype.toString.call(obj) === "[object Array]";
                }
                // Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
                // array
                function isObject(obj) {
                    if (isArray(obj)) return false;
                    var type = typeof obj;
                    return type === "object" && !!obj;
                }
                function forEachObject(object, callback) {
                    for(var key in object)if (object.hasOwnProperty(key)) {
                        var val = object[key];
                        callback(val, key);
                    }
                }
                function floatEquals(a, b) {
                    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
                }
                // https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
                function removeChildren(el) {
                    while(el.firstChild)el.removeChild(el.firstChild);
                }
                module1.exports = {
                    extend: extend,
                    render: render,
                    setStyle: setStyle,
                    setStyles: setStyles,
                    capitalize: capitalize,
                    isString: isString,
                    isFunction: isFunction,
                    isObject: isObject,
                    forEachObject: forEachObject,
                    floatEquals: floatEquals,
                    removeChildren: removeChildren
                };
            },
            {
            }
        ]
    }, {
    }, [
        4
    ])(4);
});

},{}]},["2wEGH","3Cn65"], "3Cn65", "parcelRequire3922")

//# sourceMappingURL=index.b5f57f94.js.map
