// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9IOHb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
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
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1jwFz":[function(require,module,exports) {
var _ui = require("@tonconnect/ui");
var _mock = require("./mock");
// @ts-ignore
window.tonkeeper1234 = (0, _mock.tonkeeper1234);
const tonConnectUI = new (0, _ui.TonConnectUI)({
    manifestUrl: "https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json",
    buttonRootId: "connect"
});
tonConnectUI.uiOptions = {
    walletsListConfiguration: {
        includeWallets: [
            {
                appName: "tk",
                name: "tk",
                imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                tondns: "",
                aboutUrl: "https://www.safepal.com",
                jsBridgeKey: "tonkeeper1234",
                platforms: [
                    "ios",
                    "android",
                    "chrome",
                    "firefox"
                ]
            },
            {
                appName: "new-wallet",
                name: "new-wallet",
                imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                tondns: "",
                aboutUrl: "https://www.safepal.com",
                jsBridgeKey: "tonkeeper123",
                platforms: [
                    "ios",
                    "android",
                    "chrome",
                    "firefox"
                ]
            }
        ]
    }
};
async function sign() {
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60,
        messages: [
            {
                address: "EQBBJBB3HagsujBqVfqeDUPJ0kXjgTPLWPFFffuNXNiJL0aA",
                amount: "20000000"
            },
            {
                address: "EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn",
                amount: "60000000"
            }
        ]
    };
    try {
        document.querySelector("#transaction").innerHTML = JSON.stringify(transaction);
        const result = await tonConnectUI.sendTransaction(transaction);
        document.querySelector("#transaction-result").innerHTML = JSON.stringify(result);
        console.log("result", result);
    // // you can use signed boc to find the transaction 
    // const someTxData = await myAppExplorerService.getTransaction(result.boc);
    // alert('Transaction was sent successfully', someTxData);
    } catch (e) {
        console.error(e);
    }
}
async function t() {
    const walletsList = await tonConnectUI.getWallets();
    console.log("walletsList", walletsList);
// await tonConnectUI.openModal();
}
t();
document.querySelector("#sign")?.addEventListener("click", sign);

},{"@tonconnect/ui":"i7qX7","./mock":"fbbvA"}],"i7qX7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "THEME", ()=>THEME);
parcelHelpers.export(exports, "TonConnectUI", ()=>TonConnectUI);
parcelHelpers.export(exports, "TonConnectUIError", ()=>TonConnectUIError);
var _sdk = require("@tonconnect/sdk");
parcelHelpers.exportAll(_sdk, exports);
var _uaParserJs = require("ua-parser-js");
var _uaParserJsDefault = parcelHelpers.interopDefault(_uaParserJs);
var _deepmerge = require("deepmerge");
var _deepmergeDefault = parcelHelpers.interopDefault(_deepmerge);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var process = require("ee72e0e3c0386191");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a2, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(b))if (__propIsEnum.call(b, prop)) __defNormalProp(a2, prop, b[prop]);
    }
    return a2;
};
var __spreadProps = (a2, b)=>__defProps(a2, __getOwnPropDescs(b));
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e2) {
                reject(e2);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e2) {
                reject(e2);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
var _a, _b, _c, _d, _e, _f, _g, _h;
const sharedConfig = {};
function setHydrateContext(context) {
    sharedConfig.context = context;
}
const equalFn = (a2, b)=>a2 === b;
const $PROXY = Symbol("solid-proxy");
const $TRACK = Symbol("solid-track");
const signalOptions = {
    equals: equalFn
};
let runEffects = runQueue;
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
};
const NO_INIT = {};
var Owner = null;
let Transition$1 = null;
let Listener = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = fn.length === 0, root = unowned ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: null,
        owner: detachedOwner === void 0 ? owner : detachedOwner
    }, updateFn = unowned ? fn : ()=>fn(()=>untrack(()=>cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
        return runUpdates(updateFn, true);
    } finally{
        Listener = listener;
        Owner = owner;
    }
}
function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s2 = {
        value,
        observers: null,
        observerSlots: null,
        comparator: options.equals || void 0
    };
    const setter = (value2)=>{
        if (typeof value2 === "function") value2 = value2(s2.value);
        return writeSignal(s2, value2);
    };
    return [
        readSignal.bind(s2),
        setter
    ];
}
function createComputed(fn, value, options) {
    const c2 = createComputation(fn, value, true, STALE);
    updateComputation(c2);
}
function createRenderEffect(fn, value, options) {
    const c2 = createComputation(fn, value, false, STALE);
    updateComputation(c2);
}
function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c2 = createComputation(fn, value, false, STALE);
    c2.user = true;
    Effects ? Effects.push(c2) : updateComputation(c2);
}
function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c2 = createComputation(fn, value, true, 0);
    c2.observers = null;
    c2.observerSlots = null;
    c2.comparator = options.equals || void 0;
    updateComputation(c2);
    return readSignal.bind(c2);
}
function createResource(pSource, pFetcher, pOptions) {
    let source;
    let fetcher;
    let options;
    if (arguments.length === 2 && typeof pFetcher === "object" || arguments.length === 1) {
        source = true;
        fetcher = pSource;
        options = pFetcher || {};
    } else {
        source = pSource;
        fetcher = pFetcher;
        options = pOptions || {};
    }
    let pr = null, initP = NO_INIT, id = null, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
    const contexts = /* @__PURE__ */ new Set(), [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
        equals: false
    }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
    if (sharedConfig.context) {
        id = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
        let v;
        if (options.ssrLoadFrom === "initial") initP = options.initialValue;
        else if (sharedConfig.load && (v = sharedConfig.load(id))) initP = v[0];
    }
    function loadEnd(p2, v, error2, key) {
        if (pr === p2) {
            pr = null;
            resolved = true;
            if ((p2 === initP || v === initP) && options.onHydrated) queueMicrotask(()=>options.onHydrated(key, {
                    value: v
                }));
            initP = NO_INIT;
            completeLoad(v, error2);
        }
        return v;
    }
    function completeLoad(v, err) {
        runUpdates(()=>{
            if (err === void 0) setValue(()=>v);
            setState(err !== void 0 ? "errored" : "ready");
            setError(err);
            for (const c2 of contexts.keys())c2.decrement();
            contexts.clear();
        }, false);
    }
    function read() {
        const c2 = SuspenseContext, v = value(), err = error();
        if (err !== void 0 && !pr) throw err;
        if (Listener && !Listener.user && c2) createComputed(()=>{
            track();
            if (pr) {
                if (c2.resolved) ;
                else if (!contexts.has(c2)) {
                    c2.increment();
                    contexts.add(c2);
                }
            }
        });
        return v;
    }
    function load(refetching = true) {
        if (refetching !== false && scheduled) return;
        scheduled = false;
        const lookup2 = dynamic ? dynamic() : source;
        if (lookup2 == null || lookup2 === false) {
            loadEnd(pr, untrack(value));
            return;
        }
        const p2 = initP !== NO_INIT ? initP : untrack(()=>fetcher(lookup2, {
                value: value(),
                refetching
            }));
        if (typeof p2 !== "object" || !(p2 && "then" in p2)) {
            loadEnd(pr, p2, void 0, lookup2);
            return p2;
        }
        pr = p2;
        scheduled = true;
        queueMicrotask(()=>scheduled = false);
        runUpdates(()=>{
            setState(resolved ? "refreshing" : "pending");
            trigger();
        }, false);
        return p2.then((v)=>loadEnd(p2, v, void 0, lookup2), (e2)=>loadEnd(p2, void 0, castError(e2), lookup2));
    }
    Object.defineProperties(read, {
        state: {
            get: ()=>state()
        },
        error: {
            get: ()=>error()
        },
        loading: {
            get () {
                const s2 = state();
                return s2 === "pending" || s2 === "refreshing";
            }
        },
        latest: {
            get () {
                if (!resolved) return read();
                const err = error();
                if (err && !pr) throw err;
                return value();
            }
        }
    });
    if (dynamic) createComputed(()=>load(false));
    else load(false);
    return [
        read,
        {
            refetch: load,
            mutate: setValue
        }
    ];
}
function batch(fn) {
    return runUpdates(fn, false);
}
function untrack(fn) {
    if (Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
        return fn();
    } finally{
        Listener = listener;
    }
}
function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return (prevValue)=>{
        let input;
        if (isArray) {
            input = Array(deps.length);
            for(let i2 = 0; i2 < deps.length; i2++)input[i2] = deps[i2]();
        } else input = deps();
        if (defer) {
            defer = false;
            return void 0;
        }
        const result = untrack(()=>fn(input, prevInput, prevValue));
        prevInput = input;
        return result;
    };
}
function onMount(fn) {
    createEffect(()=>untrack(fn));
}
function onCleanup(fn) {
    if (Owner === null) ;
    else if (Owner.cleanups === null) Owner.cleanups = [
        fn
    ];
    else Owner.cleanups.push(fn);
    return fn;
}
function getListener() {
    return Listener;
}
function getOwner() {
    return Owner;
}
function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
        id,
        Provider: createProvider(id),
        defaultValue
    };
}
function useContext(context) {
    let ctx;
    return (ctx = lookup(Owner, context.id)) !== void 0 ? ctx : context.defaultValue;
}
function children(fn) {
    const children2 = createMemo(fn);
    const memo = createMemo(()=>resolveChildren(children2()));
    memo.toArray = ()=>{
        const c2 = memo();
        return Array.isArray(c2) ? c2 : c2 != null ? [
            c2
        ] : [];
    };
    return memo;
}
let SuspenseContext;
function readSignal() {
    const runningTransition = Transition$1;
    if (this.sources && (this.state || runningTransition)) {
        if (this.state === STALE || runningTransition) updateComputation(this);
        else {
            const updates = Updates;
            Updates = null;
            runUpdates(()=>lookUpstream(this), false);
            Updates = updates;
        }
    }
    if (Listener) {
        const sSlot = this.observers ? this.observers.length : 0;
        if (!Listener.sources) {
            Listener.sources = [
                this
            ];
            Listener.sourceSlots = [
                sSlot
            ];
        } else {
            Listener.sources.push(this);
            Listener.sourceSlots.push(sSlot);
        }
        if (!this.observers) {
            this.observers = [
                Listener
            ];
            this.observerSlots = [
                Listener.sources.length - 1
            ];
        } else {
            this.observers.push(Listener);
            this.observerSlots.push(Listener.sources.length - 1);
        }
    }
    return this.value;
}
function writeSignal(node, value, isComp) {
    let current = node.value;
    if (!node.comparator || !node.comparator(current, value)) {
        node.value = value;
        if (node.observers && node.observers.length) runUpdates(()=>{
            for(let i2 = 0; i2 < node.observers.length; i2 += 1){
                const o2 = node.observers[i2];
                const TransitionRunning = Transition$1 && Transition$1.running;
                TransitionRunning && Transition$1.disposed.has(o2);
                if (TransitionRunning && !o2.tState || !TransitionRunning && !o2.state) {
                    if (o2.pure) Updates.push(o2);
                    else Effects.push(o2);
                    if (o2.observers) markDownstream(o2);
                }
                if (TransitionRunning) ;
                else o2.state = STALE;
            }
            if (Updates.length > 1e6) {
                Updates = [];
                throw new Error();
            }
        }, false);
    }
    return value;
}
function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const owner = Owner, listener = Listener, time = ExecCount;
    Listener = Owner = node;
    runComputation(node, node.value, time);
    Listener = listener;
    Owner = owner;
}
function runComputation(node, value, time) {
    let nextValue;
    try {
        nextValue = node.fn(value);
    } catch (err) {
        if (node.pure) {
            node.state = STALE;
            node.owned && node.owned.forEach(cleanNode);
            node.owned = null;
        }
        handleError(err);
    }
    if (!node.updatedAt || node.updatedAt <= time) {
        if (node.updatedAt != null && "observers" in node) writeSignal(node, nextValue);
        else node.value = nextValue;
        node.updatedAt = time;
    }
}
function createComputation(fn, init, pure, state = STALE, options) {
    const c2 = {
        fn,
        state,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: init,
        owner: Owner,
        context: null,
        pure
    };
    if (Owner === null) ;
    else if (Owner !== UNOWNED) {
        if (!Owner.owned) Owner.owned = [
            c2
        ];
        else Owner.owned.push(c2);
    }
    return c2;
}
function runTop(node) {
    const runningTransition = Transition$1;
    if (node.state === 0 || runningTransition) return;
    if (node.state === PENDING || runningTransition) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [
        node
    ];
    while((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount))if (node.state || runningTransition) ancestors.push(node);
    for(let i2 = ancestors.length - 1; i2 >= 0; i2--){
        node = ancestors[i2];
        if (node.state === STALE || runningTransition) updateComputation(node);
        else if (node.state === PENDING || runningTransition) {
            const updates = Updates;
            Updates = null;
            runUpdates(()=>lookUpstream(node, ancestors[0]), false);
            Updates = updates;
        }
    }
}
function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;
    else Effects = [];
    ExecCount++;
    try {
        const res = fn();
        completeUpdates(wait);
        return res;
    } catch (err) {
        if (!wait) Effects = null;
        Updates = null;
        handleError(err);
    }
}
function completeUpdates(wait) {
    if (Updates) {
        runQueue(Updates);
        Updates = null;
    }
    if (wait) return;
    const e2 = Effects;
    Effects = null;
    if (e2.length) runUpdates(()=>runEffects(e2), false);
}
function runQueue(queue) {
    for(let i2 = 0; i2 < queue.length; i2++)runTop(queue[i2]);
}
function runUserEffects(queue) {
    let i2, userLength = 0;
    for(i2 = 0; i2 < queue.length; i2++){
        const e2 = queue[i2];
        if (!e2.user) runTop(e2);
        else queue[userLength++] = e2;
    }
    if (sharedConfig.context) setHydrateContext();
    for(i2 = 0; i2 < userLength; i2++)runTop(queue[i2]);
}
function lookUpstream(node, ignore) {
    const runningTransition = Transition$1;
    node.state = 0;
    for(let i2 = 0; i2 < node.sources.length; i2 += 1){
        const source = node.sources[i2];
        if (source.sources) {
            if (source.state === STALE || runningTransition) {
                if (source !== ignore) runTop(source);
            } else if (source.state === PENDING || runningTransition) lookUpstream(source, ignore);
        }
    }
}
function markDownstream(node) {
    const runningTransition = Transition$1;
    for(let i2 = 0; i2 < node.observers.length; i2 += 1){
        const o2 = node.observers[i2];
        if (!o2.state || runningTransition) {
            o2.state = PENDING;
            if (o2.pure) Updates.push(o2);
            else Effects.push(o2);
            o2.observers && markDownstream(o2);
        }
    }
}
function cleanNode(node) {
    let i2;
    if (node.sources) while(node.sources.length){
        const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
            const n2 = obs.pop(), s2 = source.observerSlots.pop();
            if (index < obs.length) {
                n2.sourceSlots[s2] = index;
                obs[index] = n2;
                source.observerSlots[index] = s2;
            }
        }
    }
    if (node.owned) {
        for(i2 = 0; i2 < node.owned.length; i2++)cleanNode(node.owned[i2]);
        node.owned = null;
    }
    if (node.cleanups) {
        for(i2 = 0; i2 < node.cleanups.length; i2++)node.cleanups[i2]();
        node.cleanups = null;
    }
    node.state = 0;
    node.context = null;
}
function castError(err) {
    if (err instanceof Error || typeof err === "string") return err;
    return new Error("Unknown error");
}
function handleError(err) {
    err = castError(err);
    throw err;
}
function lookup(owner, key) {
    return owner ? owner.context && owner.context[key] !== void 0 ? owner.context[key] : lookup(owner.owner, key) : void 0;
}
function resolveChildren(children2) {
    if (typeof children2 === "function" && !children2.length) return resolveChildren(children2());
    if (Array.isArray(children2)) {
        const results = [];
        for(let i2 = 0; i2 < children2.length; i2++){
            const result = resolveChildren(children2[i2]);
            Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
        }
        return results;
    }
    return children2;
}
function createProvider(id, options) {
    return function provider(props) {
        let res;
        createRenderEffect(()=>res = untrack(()=>{
                Owner.context = {
                    [id]: props.value
                };
                return children(()=>props.children);
            }), void 0);
        return res;
    };
}
const FALLBACK = Symbol("fallback");
function dispose(d) {
    for(let i2 = 0; i2 < d.length; i2++)d[i2]();
}
function mapArray(list, mapFn, options = {}) {
    let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
    onCleanup(()=>dispose(disposers));
    return ()=>{
        let newItems = list() || [], i2, j;
        newItems[$TRACK];
        return untrack(()=>{
            let newLen = newItems.length, newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    indexes && (indexes = []);
                }
                if (options.fallback) {
                    items = [
                        FALLBACK
                    ];
                    mapped[0] = createRoot((disposer)=>{
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
            } else if (len === 0) {
                mapped = new Array(newLen);
                for(j = 0; j < newLen; j++){
                    items[j] = newItems[j];
                    mapped[j] = createRoot(mapper);
                }
                len = newLen;
            } else {
                temp = new Array(newLen);
                tempdisposers = new Array(newLen);
                indexes && (tempIndexes = new Array(newLen));
                for(start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
                for(end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--){
                    temp[newEnd] = mapped[end];
                    tempdisposers[newEnd] = disposers[end];
                    indexes && (tempIndexes[newEnd] = indexes[end]);
                }
                newIndices = /* @__PURE__ */ new Map();
                newIndicesNext = new Array(newEnd + 1);
                for(j = newEnd; j >= start; j--){
                    item = newItems[j];
                    i2 = newIndices.get(item);
                    newIndicesNext[j] = i2 === void 0 ? -1 : i2;
                    newIndices.set(item, j);
                }
                for(i2 = start; i2 <= end; i2++){
                    item = items[i2];
                    j = newIndices.get(item);
                    if (j !== void 0 && j !== -1) {
                        temp[j] = mapped[i2];
                        tempdisposers[j] = disposers[i2];
                        indexes && (tempIndexes[j] = indexes[i2]);
                        j = newIndicesNext[j];
                        newIndices.set(item, j);
                    } else disposers[i2]();
                }
                for(j = start; j < newLen; j++)if (j in temp) {
                    mapped[j] = temp[j];
                    disposers[j] = tempdisposers[j];
                    if (indexes) {
                        indexes[j] = tempIndexes[j];
                        indexes[j](j);
                    }
                } else mapped[j] = createRoot(mapper);
                mapped = mapped.slice(0, len = newLen);
                items = newItems.slice(0);
            }
            return mapped;
        });
        function mapper(disposer) {
            disposers[j] = disposer;
            if (indexes) {
                const [s2, set] = createSignal(j);
                indexes[j] = set;
                return mapFn(newItems[j], s2);
            }
            return mapFn(newItems[j]);
        }
    };
}
function createComponent(Comp, props) {
    return untrack(()=>Comp(props || {}));
}
function trueFn() {
    return true;
}
const propTraps = {
    get (_, property, receiver) {
        if (property === $PROXY) return receiver;
        return _.get(property);
    },
    has (_, property) {
        if (property === $PROXY) return true;
        return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor (_, property) {
        return {
            configurable: true,
            enumerable: true,
            get () {
                return _.get(property);
            },
            set: trueFn,
            deleteProperty: trueFn
        };
    },
    ownKeys (_) {
        return _.keys();
    }
};
function resolveSource(s2) {
    return !(s2 = typeof s2 === "function" ? s2() : s2) ? {} : s2;
}
function mergeProps(...sources) {
    let proxy = false;
    for(let i2 = 0; i2 < sources.length; i2++){
        const s2 = sources[i2];
        proxy = proxy || !!s2 && $PROXY in s2;
        sources[i2] = typeof s2 === "function" ? (proxy = true, createMemo(s2)) : s2;
    }
    if (proxy) return new Proxy({
        get (property) {
            for(let i2 = sources.length - 1; i2 >= 0; i2--){
                const v = resolveSource(sources[i2])[property];
                if (v !== void 0) return v;
            }
        },
        has (property) {
            for(let i2 = sources.length - 1; i2 >= 0; i2--){
                if (property in resolveSource(sources[i2])) return true;
            }
            return false;
        },
        keys () {
            const keys = [];
            for(let i2 = 0; i2 < sources.length; i2++)keys.push(...Object.keys(resolveSource(sources[i2])));
            return [
                ...new Set(keys)
            ];
        }
    }, propTraps);
    const target = {};
    for(let i2 = sources.length - 1; i2 >= 0; i2--)if (sources[i2]) {
        const descriptors = Object.getOwnPropertyDescriptors(sources[i2]);
        for(const key in descriptors){
            if (key in target) continue;
            Object.defineProperty(target, key, {
                enumerable: true,
                get () {
                    for(let i3 = sources.length - 1; i3 >= 0; i3--){
                        const v = (sources[i3] || {})[key];
                        if (v !== void 0) return v;
                    }
                }
            });
        }
    }
    return target;
}
function splitProps(props, ...keys) {
    const blocked = new Set(keys.flat());
    if ($PROXY in props) {
        const res = keys.map((k)=>{
            return new Proxy({
                get (property) {
                    return k.includes(property) ? props[property] : void 0;
                },
                has (property) {
                    return k.includes(property) && property in props;
                },
                keys () {
                    return k.filter((property)=>property in props);
                }
            }, propTraps);
        });
        res.push(new Proxy({
            get (property) {
                return blocked.has(property) ? void 0 : props[property];
            },
            has (property) {
                return blocked.has(property) ? false : property in props;
            },
            keys () {
                return Object.keys(props).filter((k)=>!blocked.has(k));
            }
        }, propTraps));
        return res;
    }
    const descriptors = Object.getOwnPropertyDescriptors(props);
    keys.push(Object.keys(descriptors).filter((k)=>!blocked.has(k)));
    return keys.map((k)=>{
        const clone = {};
        for(let i2 = 0; i2 < k.length; i2++){
            const key = k[i2];
            if (!(key in props)) continue;
            Object.defineProperty(clone, key, descriptors[key] ? descriptors[key] : {
                get () {
                    return props[key];
                },
                set () {
                    return true;
                },
                enumerable: true
            });
        }
        return clone;
    });
}
function For(props) {
    const fallback = "fallback" in props && {
        fallback: ()=>props.fallback
    };
    return createMemo(mapArray(()=>props.each, props.children, fallback || void 0));
}
function Show(props) {
    let strictEqual = false;
    const keyed = props.keyed;
    const condition = createMemo(()=>props.when, void 0, {
        equals: (a2, b)=>strictEqual ? a2 === b : !a2 === !b
    });
    return createMemo(()=>{
        const c2 = condition();
        if (c2) {
            const child = props.children;
            const fn = typeof child === "function" && child.length > 0;
            strictEqual = keyed || fn;
            return fn ? untrack(()=>child(c2)) : child;
        }
        return props.fallback;
    }, void 0, void 0);
}
function Switch(props) {
    let strictEqual = false;
    let keyed = false;
    const equals = (a2, b)=>a2[0] === b[0] && (strictEqual ? a2[1] === b[1] : !a2[1] === !b[1]) && a2[2] === b[2];
    const conditions = children(()=>props.children), evalConditions = createMemo(()=>{
        let conds = conditions();
        if (!Array.isArray(conds)) conds = [
            conds
        ];
        for(let i2 = 0; i2 < conds.length; i2++){
            const c2 = conds[i2].when;
            if (c2) {
                keyed = !!conds[i2].keyed;
                return [
                    i2,
                    c2,
                    conds[i2]
                ];
            }
        }
        return [
            -1
        ];
    }, void 0, {
        equals
    });
    return createMemo(()=>{
        const [index, when, cond] = evalConditions();
        if (index < 0) return props.fallback;
        const c2 = cond.children;
        const fn = typeof c2 === "function" && c2.length > 0;
        strictEqual = keyed || fn;
        return fn ? untrack(()=>c2(when)) : c2;
    }, void 0, void 0);
}
function Match(props) {
    return props;
}
const booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected"
];
const Properties = /* @__PURE__ */ new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans
]);
const ChildProperties = /* @__PURE__ */ new Set([
    "innerHTML",
    "textContent",
    "innerText",
    "children"
]);
const Aliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
    className: "class",
    htmlFor: "for"
});
const PropAliases = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
});
const DelegatedEvents = /* @__PURE__ */ new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
]);
const SVGElements = /* @__PURE__ */ new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern"
]);
const SVGNamespace = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
};
function reconcileArrays(parentNode, a2, b) {
    let bLength = b.length, aEnd = a2.length, bEnd = bLength, aStart = 0, bStart = 0, after = a2[aEnd - 1].nextSibling, map = null;
    while(aStart < aEnd || bStart < bEnd){
        if (a2[aStart] === b[bStart]) {
            aStart++;
            bStart++;
            continue;
        }
        while(a2[aEnd - 1] === b[bEnd - 1]){
            aEnd--;
            bEnd--;
        }
        if (aEnd === aStart) {
            const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
            while(bStart < bEnd)parentNode.insertBefore(b[bStart++], node);
        } else if (bEnd === bStart) while(aStart < aEnd){
            if (!map || !map.has(a2[aStart])) a2[aStart].remove();
            aStart++;
        }
        else if (a2[aStart] === b[bEnd - 1] && b[bStart] === a2[aEnd - 1]) {
            const node = a2[--aEnd].nextSibling;
            parentNode.insertBefore(b[bStart++], a2[aStart++].nextSibling);
            parentNode.insertBefore(b[--bEnd], node);
            a2[aEnd] = b[bEnd];
        } else {
            if (!map) {
                map = /* @__PURE__ */ new Map();
                let i2 = bStart;
                while(i2 < bEnd)map.set(b[i2], i2++);
            }
            const index = map.get(a2[aStart]);
            if (index != null) {
                if (bStart < index && index < bEnd) {
                    let i2 = aStart, sequence = 1, t2;
                    while(++i2 < aEnd && i2 < bEnd){
                        if ((t2 = map.get(a2[i2])) == null || t2 !== index + sequence) break;
                        sequence++;
                    }
                    if (sequence > index - bStart) {
                        const node = a2[aStart];
                        while(bStart < index)parentNode.insertBefore(b[bStart++], node);
                    } else parentNode.replaceChild(b[bStart++], a2[aStart++]);
                } else aStart++;
            } else a2[aStart++].remove();
        }
    }
}
const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init, options = {}) {
    let disposer;
    createRoot((dispose2)=>{
        disposer = dispose2;
        element === document ? code() : insert(element, code(), element.firstChild ? null : void 0, init);
    }, options.owner);
    return ()=>{
        disposer();
        element.textContent = "";
    };
}
function template$1(html, check, isSVG) {
    if (typeof window === "undefined") return null;
    const t2 = document.createElement("template");
    t2.innerHTML = html;
    let node = t2.content.firstChild;
    if (isSVG) node = node.firstChild;
    return node;
}
function delegateEvents(eventNames, document2 = window.document) {
    const e2 = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
    for(let i2 = 0, l2 = eventNames.length; i2 < l2; i2++){
        const name = eventNames[i2];
        if (!e2.has(name)) {
            e2.add(name);
            document2.addEventListener(name, eventHandler);
        }
    }
}
function setAttribute(node, name, value) {
    if (value == null) node.removeAttribute(name);
    else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
    if (value == null) node.removeAttributeNS(namespace, name);
    else node.setAttributeNS(namespace, name, value);
}
function className(node, value) {
    if (value == null) node.removeAttribute("class");
    else node.className = value;
}
function addEventListener(node, name, handler, delegate) {
    if (delegate) {
        if (Array.isArray(handler)) {
            node[`$$${name}`] = handler[0];
            node[`$$${name}Data`] = handler[1];
        } else node[`$$${name}`] = handler;
    } else if (Array.isArray(handler)) {
        const handlerFn = handler[0];
        node.addEventListener(name, handler[0] = (e2)=>handlerFn.call(node, handler[1], e2));
    } else node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
    const classKeys = Object.keys(value || {}), prevKeys = Object.keys(prev);
    let i2, len;
    for(i2 = 0, len = prevKeys.length; i2 < len; i2++){
        const key = prevKeys[i2];
        if (!key || key === "undefined" || value[key]) continue;
        toggleClassKey(node, key, false);
        delete prev[key];
    }
    for(i2 = 0, len = classKeys.length; i2 < len; i2++){
        const key = classKeys[i2], classValue = !!value[key];
        if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
        toggleClassKey(node, key, true);
        prev[key] = classValue;
    }
    return prev;
}
function style(node, value, prev) {
    if (!value) return prev ? setAttribute(node, "style") : value;
    const nodeStyle = node.style;
    if (typeof value === "string") return nodeStyle.cssText = value;
    typeof prev === "string" && (nodeStyle.cssText = prev = void 0);
    prev || (prev = {});
    value || (value = {});
    let v, s2;
    for(s2 in prev){
        value[s2] == null && nodeStyle.removeProperty(s2);
        delete prev[s2];
    }
    for(s2 in value){
        v = value[s2];
        if (v !== prev[s2]) {
            nodeStyle.setProperty(s2, v);
            prev[s2] = v;
        }
    }
    return prev;
}
function spread(node, props = {}, isSVG, skipChildren) {
    const prevProps = {};
    if (!skipChildren) createRenderEffect(()=>prevProps.children = insertExpression(node, props.children, prevProps.children));
    createRenderEffect(()=>props.ref && props.ref(node));
    createRenderEffect(()=>assign(node, props, isSVG, true, prevProps, true));
    return prevProps;
}
function use(fn, element, arg) {
    return untrack(()=>fn(element, arg));
}
function insert(parent, accessor, marker, initial) {
    if (marker !== void 0 && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    createRenderEffect((current)=>insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
    props || (props = {});
    for(const prop in prevProps)if (!(prop in props)) {
        if (prop === "children") continue;
        prevProps[prop] = assignProp(node, prop, null, prevProps[prop], isSVG, skipRef);
    }
    for(const prop in props){
        if (prop === "children") {
            if (!skipChildren) insertExpression(node, props.children);
            continue;
        }
        const value = props[prop];
        prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef);
    }
}
function getNextElement(template2) {
    let node, key;
    if (!sharedConfig.context || !(node = sharedConfig.registry.get(key = getHydrationKey()))) return template2.cloneNode(true);
    if (sharedConfig.completed) sharedConfig.completed.add(node);
    sharedConfig.registry.delete(key);
    return node;
}
function toPropertyName(name) {
    return name.toLowerCase().replace(/-([a-z])/g, (_, w)=>w.toUpperCase());
}
function toggleClassKey(node, key, value) {
    const classNames = key.trim().split(/\s+/);
    for(let i2 = 0, nameLen = classNames.length; i2 < nameLen; i2++)node.classList.toggle(classNames[i2], value);
}
function assignProp(node, prop, value, prev, isSVG, skipRef) {
    let isCE, isProp, isChildProp;
    if (prop === "style") return style(node, value, prev);
    if (prop === "classList") return classList(node, value, prev);
    if (value === prev) return prev;
    if (prop === "ref") {
        if (!skipRef) value(node);
    } else if (prop.slice(0, 3) === "on:") {
        const e2 = prop.slice(3);
        prev && node.removeEventListener(e2, prev);
        value && node.addEventListener(e2, value);
    } else if (prop.slice(0, 10) === "oncapture:") {
        const e2 = prop.slice(10);
        prev && node.removeEventListener(e2, prev, true);
        value && node.addEventListener(e2, value, true);
    } else if (prop.slice(0, 2) === "on") {
        const name = prop.slice(2).toLowerCase();
        const delegate = DelegatedEvents.has(name);
        if (!delegate && prev) {
            const h2 = Array.isArray(prev) ? prev[0] : prev;
            node.removeEventListener(name, h2);
        }
        if (delegate || value) {
            addEventListener(node, name, value, delegate);
            delegate && delegateEvents([
                name
            ]);
        }
    } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
        if (prop === "class" || prop === "className") className(node, value);
        else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;
        else node[PropAliases[prop] || prop] = value;
    } else {
        const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
        if (ns) setAttributeNS(node, ns, prop, value);
        else setAttribute(node, Aliases[prop] || prop, value);
    }
    return value;
}
function eventHandler(e2) {
    const key = `$$${e2.type}`;
    let node = e2.composedPath && e2.composedPath()[0] || e2.target;
    if (e2.target !== node) Object.defineProperty(e2, "target", {
        configurable: true,
        value: node
    });
    Object.defineProperty(e2, "currentTarget", {
        configurable: true,
        get () {
            return node || document;
        }
    });
    if (sharedConfig.registry && !sharedConfig.done) {
        sharedConfig.done = true;
        document.querySelectorAll("[id^=pl-]").forEach((elem)=>{
            while(elem && elem.nodeType !== 8 && elem.nodeValue !== "pl-" + e2){
                let x = elem.nextSibling;
                elem.remove();
                elem = x;
            }
            elem && elem.remove();
        });
    }
    while(node){
        const handler = node[key];
        if (handler && !node.disabled) {
            const data = node[`${key}Data`];
            data !== void 0 ? handler.call(node, data, e2) : handler.call(node, e2);
            if (e2.cancelBubble) return;
        }
        node = node._$host || node.parentNode || node.host;
    }
}
function insertExpression(parent, value, current, marker, unwrapArray) {
    if (sharedConfig.context && !current) current = [
        ...parent.childNodes
    ];
    while(typeof current === "function")current = current();
    if (value === current) return current;
    const t2 = typeof value, multi = marker !== void 0;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t2 === "string" || t2 === "number") {
        if (sharedConfig.context) return current;
        if (t2 === "number") value = value.toString();
        if (multi) {
            let node = current[0];
            if (node && node.nodeType === 3) node.data = value;
            else node = document.createTextNode(value);
            current = cleanChildren(parent, current, marker, node);
        } else if (current !== "" && typeof current === "string") current = parent.firstChild.data = value;
        else current = parent.textContent = value;
    } else if (value == null || t2 === "boolean") {
        if (sharedConfig.context) return current;
        current = cleanChildren(parent, current, marker);
    } else if (t2 === "function") {
        createRenderEffect(()=>{
            let v = value();
            while(typeof v === "function")v = v();
            current = insertExpression(parent, v, current, marker);
        });
        return ()=>current;
    } else if (Array.isArray(value)) {
        const array = [];
        const currentArray = current && Array.isArray(current);
        if (normalizeIncomingArray(array, value, current, unwrapArray)) {
            createRenderEffect(()=>current = insertExpression(parent, array, current, marker, true));
            return ()=>current;
        }
        if (sharedConfig.context) {
            if (!array.length) return current;
            for(let i2 = 0; i2 < array.length; i2++){
                if (array[i2].parentNode) return current = array;
            }
        }
        if (array.length === 0) {
            current = cleanChildren(parent, current, marker);
            if (multi) return current;
        } else if (currentArray) {
            if (current.length === 0) appendNodes(parent, array, marker);
            else reconcileArrays(parent, current, array);
        } else {
            current && cleanChildren(parent);
            appendNodes(parent, array);
        }
        current = array;
    } else if (value instanceof Node) {
        if (sharedConfig.context && value.parentNode) return current = multi ? [
            value
        ] : value;
        if (Array.isArray(current)) {
            if (multi) return current = cleanChildren(parent, current, marker, value);
            cleanChildren(parent, current, null, value);
        } else if (current == null || current === "" || !parent.firstChild) parent.appendChild(value);
        else parent.replaceChild(value, parent.firstChild);
        current = value;
    }
    return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap2) {
    let dynamic = false;
    for(let i2 = 0, len = array.length; i2 < len; i2++){
        let item = array[i2], prev = current && current[i2];
        if (item instanceof Node) normalized.push(item);
        else if (item == null || item === true || item === false) ;
        else if (Array.isArray(item)) dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
        else if (typeof item === "function") {
            if (unwrap2) {
                while(typeof item === "function")item = item();
                dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [
                    item
                ], Array.isArray(prev) ? prev : [
                    prev
                ]) || dynamic;
            } else {
                normalized.push(item);
                dynamic = true;
            }
        } else {
            const value = String(item);
            if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);
            else normalized.push(document.createTextNode(value));
        }
    }
    return dynamic;
}
function appendNodes(parent, array, marker = null) {
    for(let i2 = 0, len = array.length; i2 < len; i2++)parent.insertBefore(array[i2], marker);
}
function cleanChildren(parent, current, marker, replacement) {
    if (marker === void 0) return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
        let inserted = false;
        for(let i2 = current.length - 1; i2 >= 0; i2--){
            const el = current[i2];
            if (node !== el) {
                const isParent = el.parentNode === parent;
                if (!inserted && !i2) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
                else isParent && el.remove();
            } else inserted = true;
        }
    } else parent.insertBefore(node, marker);
    return [
        node
    ];
}
function getHydrationKey() {
    const hydrate = sharedConfig.context;
    return `${hydrate.id}${hydrate.count++}`;
}
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
    return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
function Portal(props) {
    const { useShadow } = props, marker = document.createTextNode(""), mount = props.mount || document.body;
    function renderPortal() {
        if (sharedConfig.context) {
            const [s2, set] = createSignal(false);
            queueMicrotask(()=>set(true));
            return ()=>s2() && props.children;
        } else return ()=>props.children;
    }
    if (mount instanceof HTMLHeadElement) {
        const [clean, setClean] = createSignal(false);
        const cleanup = ()=>setClean(true);
        createRoot((dispose2)=>insert(mount, ()=>!clean() ? renderPortal()() : dispose2(), null));
        onCleanup(()=>{
            if (sharedConfig.context) queueMicrotask(cleanup);
            else cleanup();
        });
    } else {
        const container = createElement(props.isSVG ? "g" : "div", props.isSVG), renderRoot = useShadow && container.attachShadow ? container.attachShadow({
            mode: "open"
        }) : container;
        Object.defineProperty(container, "_$host", {
            get () {
                return marker.parentNode;
            },
            configurable: true
        });
        insert(renderRoot, renderPortal());
        mount.appendChild(container);
        props.ref && props.ref(container);
        onCleanup(()=>mount.removeChild(container));
    }
    return marker;
}
function Dynamic(props) {
    const [p2, others] = splitProps(props, [
        "component"
    ]);
    const cached = createMemo(()=>p2.component);
    return createMemo(()=>{
        const component = cached();
        switch(typeof component){
            case "function":
                return untrack(()=>component(others));
            case "string":
                const isSvg = SVGElements.has(component);
                const el = sharedConfig.context ? getNextElement() : createElement(component, isSvg);
                spread(el, others, isSvg);
                return el;
        }
    });
}
var THEME = /* @__PURE__ */ ((THEME2)=>{
    THEME2["DARK"] = "DARK";
    THEME2["LIGHT"] = "LIGHT";
    return THEME2;
})(THEME || {});
let e = {
    data: ""
}, t = (t2)=>"object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : t2 || e, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n = /\n+/g, o = (e2, t2)=>{
    let r = "", l2 = "", a2 = "";
    for(let n2 in e2){
        let c2 = e2[n2];
        "@" == n2[0] ? "i" == n2[1] ? r = n2 + " " + c2 + ";" : l2 += "f" == n2[1] ? o(c2, n2) : n2 + "{" + o(c2, "k" == n2[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o(c2, t2 ? t2.replace(/([^,])+/g, (e3)=>n2.replace(/(^:.*)|([^,])+/g, (t3)=>/&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n2) : null != c2 && (n2 = /^--/.test(n2) ? n2 : n2.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o.p ? o.p(n2, c2) : n2 + ":" + c2 + ";");
    }
    return r + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
}, c = {}, s = (e2)=>{
    if ("object" == typeof e2) {
        let t2 = "";
        for(let r in e2)t2 += r + s(e2[r]);
        return t2;
    }
    return e2;
}, i = (e2, t2, r, i2, p2)=>{
    let u2 = s(e2), d = c[u2] || (c[u2] = ((e3)=>{
        let t3 = 0, r2 = 11;
        for(; t3 < e3.length;)r2 = 101 * r2 + e3.charCodeAt(t3++) >>> 0;
        return "go" + r2;
    })(u2));
    if (!c[d]) {
        let t3 = u2 !== e2 ? e2 : ((e3)=>{
            let t4, r2, o2 = [
                {}
            ];
            for(; t4 = l.exec(e3.replace(a, ""));)t4[4] ? o2.shift() : t4[3] ? (r2 = t4[3].replace(n, " ").trim(), o2.unshift(o2[0][r2] = o2[0][r2] || {})) : o2[0][t4[1]] = t4[2].replace(n, " ").trim();
            return o2[0];
        })(e2);
        c[d] = o(p2 ? {
            ["@keyframes " + d]: t3
        } : t3, r ? "" : "." + d);
    }
    let f = r && c.g ? c.g : null;
    return r && (c.g = c[d]), ((e3, t3, r2, l2)=>{
        l2 ? t3.data = t3.data.replace(l2, e3) : -1 === t3.data.indexOf(e3) && (t3.data = r2 ? e3 + t3.data : t3.data + e3);
    })(c[d], t2, i2, f), d;
}, p = (e2, t2, r)=>e2.reduce((e3, l2, a2)=>{
        let n2 = t2[a2];
        if (n2 && n2.call) {
            let e4 = n2(r), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
            n2 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o(e4, "") : false === e4 ? "" : e4;
        }
        return e3 + l2 + (null == n2 ? "" : n2);
    }, "");
function u(e2) {
    let r = this || {}, l2 = e2.call ? e2(r.p) : e2;
    return i(l2.unshift ? l2.raw ? p(l2, [].slice.call(arguments, 1), r.p) : l2.reduce((e3, t2)=>Object.assign(e3, t2 && t2.call ? t2(r.p) : t2), {}) : l2, t(r.target), r.g, r.o, r.k);
}
u.bind({
    g: 1
});
let h = u.bind({
    k: 1
});
const ThemeContext = createContext();
function ThemeProvider(props) {
    return createComponent(ThemeContext.Provider, {
        value: props.theme,
        get children () {
            return props.children;
        }
    });
}
function useTheme() {
    return useContext(ThemeContext);
}
function makeStyled(tag) {
    let _ctx = this || {};
    return (...args)=>{
        const Styled = (props)=>{
            const theme = useContext(ThemeContext);
            const withTheme = mergeProps(props, {
                theme
            });
            const clone = mergeProps(withTheme, {
                get class () {
                    const pClass = withTheme.class, append = "class" in withTheme && /^go[0-9]+/.test(pClass);
                    let className2 = u.apply({
                        target: _ctx.target,
                        o: append,
                        p: withTheme,
                        g: _ctx.g
                    }, args);
                    return [
                        pClass,
                        className2
                    ].filter(Boolean).join(" ");
                }
            });
            const [local, newProps] = splitProps(clone, [
                "as",
                "theme"
            ]);
            const htmlProps = newProps;
            const createTag = local.as || tag;
            let el;
            if (typeof createTag === "function") el = createTag(htmlProps);
            else if (_ctx.g == 1) {
                el = document.createElement(createTag);
                spread(el, htmlProps);
            } else el = Dynamic(mergeProps({
                component: createTag
            }, htmlProps));
            return el;
        };
        Styled.class = (props)=>{
            return untrack(()=>{
                return u.apply({
                    target: _ctx.target,
                    p: props,
                    g: _ctx.g
                }, args);
            });
        };
        return Styled;
    };
}
const styled = new Proxy(makeStyled, {
    get (target, tag) {
        return target(tag);
    }
});
function createGlobalStyles() {
    const fn = makeStyled.call({
        g: 1
    }, "div").apply(null, arguments);
    return function GlobalStyles2(props) {
        fn(props);
        return null;
    };
}
const globalStylesTag = "tc-root";
const disableScrollClass = "tc-disable-scroll";
const usingMouseClass = "tc-using-mouse";
const GlobalStyles = ()=>{
    document.body.addEventListener("mousedown", ()=>document.body.classList.add(usingMouseClass));
    document.body.addEventListener("keydown", (event)=>{
        if (event.key === "Tab") document.body.classList.remove(usingMouseClass);
    });
    const Styles = createGlobalStyles`
    ${globalStylesTag} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${globalStylesTag} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${globalStylesTag} *:focus {
        outline: #08f auto 2px;
    }
    
    ${globalStylesTag} li {
        list-style: none;
    }
    
    ${globalStylesTag} button {
        outline: none;
    }
    
    body.${disableScrollClass} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${usingMouseClass} ${globalStylesTag} *:focus {
        outline: none;
    }
`;
    return createComponent(Styles, {});
};
function hexToRgb(hex) {
    if (hex[0] === "#") hex = hex.slice(1);
    const bigint = parseInt(hex, 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return [
        r,
        g,
        b
    ].join(",");
}
function rgba(color, opacity) {
    if (color[0] === "#") color = hexToRgb(color);
    return `rgba(${color}, ${opacity})`;
}
function toPx(value) {
    return value.toString() + "px";
}
const _InMemoryStorage = class {
    constructor(){
        __publicField(this, "storage", {});
    }
    static getInstance() {
        if (!_InMemoryStorage.instance) _InMemoryStorage.instance = new _InMemoryStorage();
        return _InMemoryStorage.instance;
    }
    get length() {
        return Object.keys(this.storage).length;
    }
    clear() {
        this.storage = {};
    }
    getItem(key) {
        var _a2;
        return (_a2 = this.storage[key]) != null ? _a2 : null;
    }
    key(index) {
        var _a2;
        const keys = Object.keys(this.storage);
        if (index < 0 || index >= keys.length) return null;
        return (_a2 = keys[index]) != null ? _a2 : null;
    }
    removeItem(key) {
        delete this.storage[key];
    }
    setItem(key, value) {
        this.storage[key] = value;
    }
};
let InMemoryStorage = _InMemoryStorage;
__publicField(InMemoryStorage, "instance");
class TonConnectUIError extends (0, _sdk.TonConnectError) {
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, TonConnectUIError.prototype);
    }
}
function logDebug(...args) {
    try {
        console.debug("[TON_CONNECT_UI]", ...args);
    } catch (e2) {}
}
function logError(...args) {
    try {
        console.error("[TON_CONNECT_UI]", ...args);
    } catch (e2) {}
}
function logWarning(...args) {
    try {
        console.warn("[TON_CONNECT_UI]", ...args);
    } catch (e2) {}
}
function openLink(href, target = "_self") {
    logDebug("openLink", href, target);
    window.open(href, target, "noopener noreferrer");
}
function openLinkBlank(href) {
    openLink(href, "_blank");
}
function openDeeplinkWithFallback(href, fallback) {
    const doFallback = ()=>{
        if (isBrowser("safari") || isOS("android") && isBrowser("firefox")) return;
        fallback();
    };
    const fallbackTimeout = setTimeout(()=>doFallback(), 200);
    window.addEventListener("blur", ()=>clearTimeout(fallbackTimeout), {
        once: true
    });
    openLink(href, "_self");
}
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) return THEME.LIGHT;
    return THEME.DARK;
}
function subscribeToThemeChange(callback) {
    const handler = (event)=>callback(event.matches ? THEME.DARK : THEME.LIGHT);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handler);
    return ()=>window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handler);
}
function disableScroll() {
    if (document.documentElement.scrollHeight === document.documentElement.clientHeight) return;
    document.body.style.top = toPx(-document.documentElement.scrollTop);
    document.body.classList.add(disableScrollClass);
}
function enableScroll() {
    document.body.classList.remove(disableScrollClass);
    document.documentElement.scrollTo({
        top: -parseFloat(getComputedStyle(document.body).top)
    });
    document.body.style.top = "auto";
}
function fixMobileSafariActiveTransition() {
    if (!document.body.hasAttribute("ontouchstart")) document.body.setAttribute("ontouchstart", "");
}
function defineStylesRoot() {
    customElements.define(globalStylesTag, class TcRootElement extends HTMLElement {
    });
}
function createMacrotask(callback) {
    return __async(this, null, function*() {
        yield new Promise((resolve)=>requestAnimationFrame(resolve));
        callback();
    });
}
function createMacrotaskAsync(callback) {
    return __async(this, null, function*() {
        yield new Promise((resolve)=>requestAnimationFrame(resolve));
        return callback();
    });
}
function preloadImages(images) {
    if (document.readyState !== "complete") window.addEventListener("load", ()=>createMacrotask(()=>preloadImages(images)), {
        once: true
    });
    else images.forEach((img)=>{
        const node = new window.Image();
        node.src = img;
    });
}
function getWindow$1() {
    if (typeof window !== "undefined") return window;
    return void 0;
}
function tryGetLocalStorage() {
    if (isLocalStorageAvailable()) return localStorage;
    if (isNodeJs()) throw new TonConnectUIError("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
    return InMemoryStorage.getInstance();
}
function isLocalStorageAvailable() {
    try {
        return typeof localStorage !== "undefined";
    } catch (e2) {
        return false;
    }
}
function isNodeJs() {
    return typeof process !== "undefined" && process.versions != null && process.versions.node != null;
}
function getUserAgent() {
    var _a2, _b2, _c2;
    const results = new (0, _uaParserJsDefault.default)().getResult();
    const osName = (_a2 = results.os.name) == null ? void 0 : _a2.toLowerCase();
    const deviceModel = (_b2 = results.device.model) == null ? void 0 : _b2.toLowerCase();
    let os;
    switch(true){
        case deviceModel === "ipad":
            os = "ipad";
            break;
        case osName === "ios":
            os = "ios";
            break;
        case osName === "android":
            os = "android";
            break;
        case osName === "mac os":
            os = "macos";
            break;
        case osName === "linux":
            os = "linux";
            break;
        case osName == null ? void 0 : osName.includes("windows"):
            os = "windows";
            break;
    }
    const browserName = (_c2 = results.browser.name) == null ? void 0 : _c2.toLowerCase();
    let browser;
    switch(true){
        case browserName === "chrome":
            browser = "chrome";
            break;
        case browserName === "firefox":
            browser = "firefox";
            break;
        case browserName == null ? void 0 : browserName.includes("safari"):
            browser = "safari";
            break;
        case browserName == null ? void 0 : browserName.includes("opera"):
            browser = "opera";
            break;
    }
    return {
        os,
        browser
    };
}
function isOS(...os) {
    return os.includes(getUserAgent().os);
}
function isBrowser(...browser) {
    return browser.includes(getUserAgent().browser);
}
function toDeeplink(universalLink, deeplink) {
    const url = new URL(universalLink);
    return deeplink + url.search;
}
class WalletInfoStorage {
    constructor(){
        __publicField(this, "localStorage");
        __publicField(this, "storageKey", "ton-connect-ui_wallet-info");
        this.localStorage = tryGetLocalStorage();
    }
    setWalletInfo(walletInfo) {
        this.localStorage.setItem(this.storageKey, JSON.stringify(walletInfo));
    }
    getWalletInfo() {
        const walletInfoString = this.localStorage.getItem(this.storageKey);
        if (!walletInfoString) return null;
        return JSON.parse(walletInfoString);
    }
    removeWalletInfo() {
        this.localStorage.removeItem(this.storageKey);
    }
}
class PreferredWalletStorage {
    constructor(){
        __publicField(this, "localStorage");
        __publicField(this, "storageKey", "ton-connect-ui_preferred-wallet");
        this.localStorage = tryGetLocalStorage();
    }
    setPreferredWalletAppName(name) {
        this.localStorage.setItem(this.storageKey, name);
    }
    getPreferredWalletAppName() {
        return this.localStorage.getItem(this.storageKey) || void 0;
    }
}
class LastSelectedWalletInfoStorage {
    constructor(){
        __publicField(this, "localStorage");
        __publicField(this, "storageKey", "ton-connect-ui_last-selected-wallet-info");
        this.localStorage = tryGetLocalStorage();
    }
    setLastSelectedWalletInfo(walletInfo) {
        this.localStorage.setItem(this.storageKey, JSON.stringify(walletInfo));
    }
    getLastSelectedWalletInfo() {
        const walletInfoString = this.localStorage.getItem(this.storageKey);
        if (!walletInfoString) return null;
        return JSON.parse(walletInfoString);
    }
    removeLastSelectedWalletInfo() {
        this.localStorage.removeItem(this.storageKey);
    }
}
const [walletsModalState, setWalletsModalState] = createSignal({
    status: "closed",
    closeReason: null
});
const getWalletsModalIsOpened = createMemo(()=>walletsModalState().status === "opened");
const [singleWalletModalState, setSingleWalletModalState] = createSignal({
    status: "closed",
    closeReason: null
});
const getSingleWalletModalIsOpened = createMemo(()=>singleWalletModalState().status === "opened");
const getSingleWalletModalWalletInfo = createMemo(()=>{
    const state = singleWalletModalState();
    if (state.status === "opened") return state.walletInfo;
    return null;
});
let lastSelectedWalletInfoStorage = typeof window !== "undefined" ? new LastSelectedWalletInfoStorage() : void 0;
const [lastSelectedWalletInfo, _setLastSelectedWalletInfo] = createSignal((lastSelectedWalletInfoStorage == null ? void 0 : lastSelectedWalletInfoStorage.getLastSelectedWalletInfo()) || null);
const setLastSelectedWalletInfo = (walletInfo)=>{
    if (!lastSelectedWalletInfoStorage) lastSelectedWalletInfoStorage = new LastSelectedWalletInfoStorage();
    if (walletInfo) lastSelectedWalletInfoStorage.setLastSelectedWalletInfo(walletInfo);
    else lastSelectedWalletInfoStorage.removeLastSelectedWalletInfo();
    _setLastSelectedWalletInfo(walletInfo);
};
const [action, setAction] = createSignal(null);
const common$1 = {
    close: "Close",
    openWallet: "Open wallet",
    copyLink: "Copy Link",
    linkCopied: "Link Copied",
    copied: "Copied",
    yourWallet: "Your Wallet",
    retry: "Retry",
    get: "GET",
    mobile: "Mobile",
    browserExtension: "Browser Extension",
    desktop: "Desktop"
};
const button$1 = {
    connectWallet: "Connect Wallet",
    dropdown: {
        copy: "Copy address",
        copied: "Address copied!",
        disconnect: "Disconnect"
    }
};
const notifications$1 = {
    confirm: {
        header: "Open {{ name }} to\xa0confirm the\xa0transaction."
    },
    transactionSent: {
        header: "Transaction sent",
        text: "Your transaction\xa0will be\xa0processed in\xa0a\xa0few seconds."
    },
    transactionCanceled: {
        header: "Transaction canceled",
        text: "There will be no changes to\xa0your account."
    }
};
const walletItem$1 = {
    walletOn: "Wallet On",
    recent: "Recent",
    installed: "Installed",
    popular: "Popular"
};
const walletModal$1 = {
    loading: "Loading wallets",
    wallets: "Wallets",
    mobileUniversalModal: {
        connectYourWallet: "Connect your wallet",
        openWalletOnTelegramOrSelect: "Open Wallet in Telegram or select your wallet to connect",
        openWalletOnTelegram: "Open Wallet in Telegram",
        openLink: "Open Link",
        scan: "Scan with your mobile wallet"
    },
    desktopUniversalModal: {
        connectYourWallet: "Connect your wallet",
        scan: "Scan with your mobile wallet",
        availableWallets: "Available wallets"
    },
    mobileConnectionModal: {
        showQR: "Show QR Code",
        scanQR: "Scan the\xa0QR code below with your phone\u2019s\xa0or\xa0{{ name }}\u2019s camera",
        continueIn: "Continue in {{ name }}\u2026",
        connectionDeclined: "Connection declined"
    },
    desktopConnectionModal: {
        scanQR: "Scan the\xa0QR code below with your phone\u2019s\xa0or\xa0{{ name }}\u2019s camera",
        continueInExtension: "Continue in\xa0{{ name }} browser extension\u2026",
        dontHaveExtension: "Seems you don't have installed {{ name }}\xa0browser\xa0extension",
        getWallet: "Get {{ name }}",
        continueOnDesktop: "Continue in\xa0{{ name }} on desktop\u2026",
        openWalletOnTelegram: "Open Wallet in Telegram on desktop",
        connectionDeclined: "Connection declined"
    },
    infoModal: {
        whatIsAWallet: "What is a wallet",
        secureDigitalAssets: "Secure digital assets storage",
        walletProtects: "A wallet protects and manages your digital assets\xa0including TON, tokens and collectables.",
        controlIdentity: "Control your Web3 identity",
        manageIdentity: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in\xa0the\xa0blockchain ecosystem.",
        effortlessCryptoTransactions: "Effortless crypto transactions",
        easilySend: "Easily send, receive, monitor your cryptocurrencies.\xa0Streamline your operations with\xa0decentralized applications.",
        getAWallet: "Get a Wallet"
    }
};
const actionModal$1 = {
    confirmTransaction: {
        header: "Confirm the\xa0transaction in\xa0{{ name }}",
        text: "It will only take a\xa0moment."
    },
    transactionSent: "$notifications.transactionSent",
    transactionCanceled: "$notifications.transactionCanceled"
};
const en = {
    common: common$1,
    button: button$1,
    notifications: notifications$1,
    walletItem: walletItem$1,
    walletModal: walletModal$1,
    actionModal: actionModal$1
};
const common = {
    close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    openWallet: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u043E\u0448\u0435\u043B\u0451\u043A",
    copyLink: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
    linkCopied: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
    copied: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430",
    yourWallet: "\u0412\u0430\u0448 \u043A\u043E\u0448\u0435\u043B\u0451\u043A",
    retry: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
    get: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C",
    mobile: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439",
    browserExtension: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435",
    desktop: "\u0414\u0435\u0441\u043A\u0442\u043E\u043F"
};
const button = {
    connectWallet: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u043E\u0448\u0435\u043B\u0451\u043A",
    dropdown: {
        copy: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u0434\u0440\u0435\u0441",
        copied: "\u0410\u0434\u0440\u0435\u0441 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D!",
        disconnect: "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u043E\u0448\u0435\u043B\u0451\u043A"
    }
};
const notifications = {
    confirm: {
        header: "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 {{ name }}, \u0447\u0442\u043E\u0431\u044B\xa0\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044E."
    },
    transactionSent: {
        header: "\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430",
        text: "\u0412\u0430\u0448\u0430 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F\xa0\u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430 \u0447\u0435\u0440\u0435\u0437\xa0\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434."
    },
    transactionCanceled: {
        header: "\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u0430",
        text: "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0447\u0451\u0442\u0430 \u043D\u0435\xa0\u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F."
    }
};
const walletItem = {
    walletOn: "Wallet \u0432",
    recent: "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0439",
    installed: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",
    popular: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u0435\u043D"
};
const walletModal = {
    loading: "\u041A\u043E\u0448\u0435\u043B\u044C\u043A\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044E\u0442\u0441\u044F",
    wallets: "\u041A\u043E\u0448\u0435\u043B\u044C\u043A\u0438",
    mobileUniversalModal: {
        connectYourWallet: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u043A\u043E\u0448\u0435\u043B\u0451\u043A",
        openWalletOnTelegramOrSelect: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 Wallet \u0432\xa0Telegram \u0438\u043B\u0438\xa0\u0432\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u043A\u043E\u0448\u0435\u043B\u0451\u043A \u0434\u043B\u044F\xa0\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
        openWalletOnTelegram: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C Wallet \u0432 Telegram",
        openLink: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
        scan: "\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0432\u0430\u0448\u0435\u0433\u043E\xa0\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
    },
    desktopUniversalModal: {
        connectYourWallet: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u043A\u043E\u0448\u0435\u043B\u0451\u043A",
        scan: "\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0432\u0430\u0448\u0435\u0433\u043E\xa0\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
        availableWallets: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438"
    },
    mobileConnectionModal: {
        showQR: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C QR-\u043A\u043E\u0434",
        scanQR: "\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434 \u043D\u0438\u0436\u0435 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0432\xa0\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 {{ name }}, \u0438\u043B\u0438\xa0\u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
        continueIn: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435 \u0432 {{ name }}\u2026",
        connectionDeclined: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043E"
    },
    desktopConnectionModal: {
        scanQR: "\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 QR-\u043A\u043E\u0434 \u043D\u0438\u0436\u0435 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0432\xa0\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 {{ name }}, \u0438\u043B\u0438\xa0\u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
        continueInExtension: "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 {{ name }}",
        dontHaveExtension: "\u041F\u043E\u0445\u043E\u0436\u0435, \u0443 \u0432\u0430\u0441 \u043D\u0435\xa0\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043D\u043E\u0435\xa0\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\xa0{{ name }}",
        getWallet: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C {{ name }}",
        continueOnDesktop: "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 {{ name }} \u043D\u0430\xa0\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435\u2026",
        openWalletOnTelegram: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C Wallet \u0432\xa0Telegram",
        connectionDeclined: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043E"
    },
    infoModal: {
        whatIsAWallet: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043A\u043E\u0448\u0435\u043B\u0451\u043A?",
        secureDigitalAssets: "\u041D\u0430\u0434\u0435\u0436\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432",
        walletProtects: "\u041A\u043E\u0448\u0435\u043B\u0451\u043A \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u044B, \u0432\u043A\u043B\u044E\u0447\u0430\u044F TON, \u0442\u043E\u043A\u0435\u043D\u044B \u0438\xa0\u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0438\xa0\u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0438\u043C\u0438.",
        controlIdentity: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441\u0432\u043E\u0435\u0439 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438 Web3",
        manageIdentity: "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u0432\u043E\u0435\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u0438\xa0\u0441\xa0\u043B\u0435\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A\xa0\u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C. \u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434\xa0\u0441\u0432\u043E\u0438\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0438\xa0\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0432\xa0\u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0435\xa0\u0431\u043B\u043E\u043A\u0447\u0435\u0439\u043D\u0430.",
        effortlessCryptoTransactions: "\u041F\u0440\u043E\u0441\u0442\u044B\u0435 \u043A\u0440\u0438\u043F\u0442\u043E\u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438",
        easilySend: "\u041B\u0435\u0433\u043A\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435, \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0438\xa0\u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B. \u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\xa0\u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        getAWallet: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043A\u043E\u0448\u0435\u043B\u0451\u043A"
    }
};
const actionModal = {
    confirmTransaction: {
        header: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\xa0{{ name }}",
        text: "\u042D\u0442\u043E \u0437\u0430\u0439\u043C\u0435\u0442 \u043F\u0430\u0440\u0443 \u0441\u0435\u043A\u0443\u043D\u0434."
    },
    transactionSent: "$notifications.transactionSent",
    transactionCanceled: "$notifications.transactionCanceled"
};
const ru = {
    common,
    button,
    notifications,
    walletItem,
    walletModal,
    actionModal
};
const i18nDictionary = {
    en: parseDictionary(en),
    ru: parseDictionary(ru)
};
function parseDictionary(dictionary) {
    const refSymbol = "$";
    const iterate = (subDictionary)=>{
        Object.entries(subDictionary).forEach(([key, value])=>{
            if (typeof value === "object" && value) return iterate(value);
            if (typeof value === "string") {
                if (value[0] === refSymbol) {
                    const path = value.slice(1).split(".");
                    let obj = dictionary;
                    path.forEach((item)=>{
                        if (item in obj) obj = obj[item];
                        else throw new Error(`Cannot parse translations: there is no property ${item} in translation`);
                    });
                    subDictionary[key] = obj;
                }
                if (value.slice(0, 2) === `\\${refSymbol}`) subDictionary[key] = value.slice(1);
            }
        });
    };
    iterate(dictionary);
    return dictionary;
}
const ConnectorContext = createContext();
const $RAW = Symbol("store-raw"), $NODE = Symbol("store-node"), $NAME = Symbol("store-name");
function wrap$1(value, name) {
    let p2 = value[$PROXY];
    if (!p2) {
        Object.defineProperty(value, $PROXY, {
            value: p2 = new Proxy(value, proxyTraps$1)
        });
        if (!Array.isArray(value)) {
            const keys = Object.keys(value), desc = Object.getOwnPropertyDescriptors(value);
            for(let i2 = 0, l2 = keys.length; i2 < l2; i2++){
                const prop = keys[i2];
                if (desc[prop].get) Object.defineProperty(value, prop, {
                    enumerable: desc[prop].enumerable,
                    get: desc[prop].get.bind(p2)
                });
            }
        }
    }
    return p2;
}
function isWrappable(obj) {
    let proto;
    return obj != null && typeof obj === "object" && (obj[$PROXY] || !(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype || Array.isArray(obj));
}
function unwrap(item, set = /* @__PURE__ */ new Set()) {
    let result, unwrapped, v, prop;
    if (result = item != null && item[$RAW]) return result;
    if (!isWrappable(item) || set.has(item)) return item;
    if (Array.isArray(item)) {
        if (Object.isFrozen(item)) item = item.slice(0);
        else set.add(item);
        for(let i2 = 0, l2 = item.length; i2 < l2; i2++){
            v = item[i2];
            if ((unwrapped = unwrap(v, set)) !== v) item[i2] = unwrapped;
        }
    } else {
        if (Object.isFrozen(item)) item = Object.assign({}, item);
        else set.add(item);
        const keys = Object.keys(item), desc = Object.getOwnPropertyDescriptors(item);
        for(let i2 = 0, l2 = keys.length; i2 < l2; i2++){
            prop = keys[i2];
            if (desc[prop].get) continue;
            v = item[prop];
            if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
        }
    }
    return item;
}
function getDataNodes(target) {
    let nodes = target[$NODE];
    if (!nodes) Object.defineProperty(target, $NODE, {
        value: nodes = {}
    });
    return nodes;
}
function getDataNode(nodes, property, value) {
    return nodes[property] || (nodes[property] = createDataNode(value));
}
function proxyDescriptor$1(target, property) {
    const desc = Reflect.getOwnPropertyDescriptor(target, property);
    if (!desc || desc.get || !desc.configurable || property === $PROXY || property === $NODE || property === $NAME) return desc;
    delete desc.value;
    delete desc.writable;
    desc.get = ()=>target[$PROXY][property];
    return desc;
}
function trackSelf(target) {
    if (getListener()) {
        const nodes = getDataNodes(target);
        (nodes._ || (nodes._ = createDataNode()))();
    }
}
function ownKeys(target) {
    trackSelf(target);
    return Reflect.ownKeys(target);
}
function createDataNode(value) {
    const [s2, set] = createSignal(value, {
        equals: false,
        internal: true
    });
    s2.$ = set;
    return s2;
}
const proxyTraps$1 = {
    get (target, property, receiver) {
        if (property === $RAW) return target;
        if (property === $PROXY) return receiver;
        if (property === $TRACK) {
            trackSelf(target);
            return receiver;
        }
        const nodes = getDataNodes(target);
        const tracked = nodes.hasOwnProperty(property);
        let value = tracked ? nodes[property]() : target[property];
        if (property === $NODE || property === "__proto__") return value;
        if (!tracked) {
            const desc = Object.getOwnPropertyDescriptor(target, property);
            if (getListener() && (typeof value !== "function" || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getDataNode(nodes, property, value)();
        }
        return isWrappable(value) ? wrap$1(value) : value;
    },
    has (target, property) {
        if (property === $RAW || property === $PROXY || property === $TRACK || property === $NODE || property === "__proto__") return true;
        this.get(target, property, target);
        return property in target;
    },
    set () {
        return true;
    },
    deleteProperty () {
        return true;
    },
    ownKeys,
    getOwnPropertyDescriptor: proxyDescriptor$1
};
function setProperty(state, property, value, deleting = false) {
    if (!deleting && state[property] === value) return;
    const prev = state[property], len = state.length;
    if (value === void 0) delete state[property];
    else state[property] = value;
    let nodes = getDataNodes(state), node;
    if (node = getDataNode(nodes, property, prev)) node.$(()=>value);
    if (Array.isArray(state) && state.length !== len) (node = getDataNode(nodes, "length", len)) && node.$(state.length);
    (node = nodes._) && node.$();
}
function mergeStoreNode(state, value) {
    const keys = Object.keys(value);
    for(let i2 = 0; i2 < keys.length; i2 += 1){
        const key = keys[i2];
        setProperty(state, key, value[key]);
    }
}
function updateArray(current, next) {
    if (typeof next === "function") next = next(current);
    next = unwrap(next);
    if (Array.isArray(next)) {
        if (current === next) return;
        let i2 = 0, len = next.length;
        for(; i2 < len; i2++){
            const value = next[i2];
            if (current[i2] !== value) setProperty(current, i2, value);
        }
        setProperty(current, "length", len);
    } else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
    let part, prev = current;
    if (path.length > 1) {
        part = path.shift();
        const partType = typeof part, isArray = Array.isArray(current);
        if (Array.isArray(part)) {
            for(let i2 = 0; i2 < part.length; i2++)updatePath(current, [
                part[i2]
            ].concat(path), traversed);
            return;
        } else if (isArray && partType === "function") {
            for(let i2 = 0; i2 < current.length; i2++)if (part(current[i2], i2)) updatePath(current, [
                i2
            ].concat(path), traversed);
            return;
        } else if (isArray && partType === "object") {
            const { from = 0, to = current.length - 1, by = 1 } = part;
            for(let i2 = from; i2 <= to; i2 += by)updatePath(current, [
                i2
            ].concat(path), traversed);
            return;
        } else if (path.length > 1) {
            updatePath(current[part], path, [
                part
            ].concat(traversed));
            return;
        }
        prev = current[part];
        traversed = [
            part
        ].concat(traversed);
    }
    let value = path[0];
    if (typeof value === "function") {
        value = value(prev, traversed);
        if (value === prev) return;
    }
    if (part === void 0 && value == void 0) return;
    value = unwrap(value);
    if (part === void 0 || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) mergeStoreNode(prev, value);
    else setProperty(current, part, value);
}
function createStore(...[store, options]) {
    const unwrappedStore = unwrap(store || {});
    const isArray = Array.isArray(unwrappedStore);
    const wrappedStore = wrap$1(unwrappedStore);
    function setStore(...args) {
        batch(()=>{
            isArray && args.length === 1 ? updateArray(unwrappedStore, args[0]) : updatePath(unwrappedStore, args);
        });
    }
    return [
        wrappedStore,
        setStore
    ];
}
const defaultLightColorsSet = {
    constant: {
        black: "#000000",
        white: "#FFFFFF"
    },
    connectButton: {
        background: "#0098EA",
        foreground: "#FFFFFF"
    },
    accent: "#0098EA",
    telegramButton: "#0098EA",
    icon: {
        primary: "#0F0F0F",
        secondary: "#7A8999",
        tertiary: "#C1CAD2",
        success: "#29CC6A",
        error: "#F5A73B"
    },
    background: {
        primary: "#FFFFFF",
        secondary: "#F1F3F5",
        segment: "#FFFFFF",
        tint: "#F1F3F5",
        qr: "#F1F3F5"
    },
    text: {
        primary: "#0F0F0F",
        secondary: "#6A7785"
    }
};
const defaultDarkColorsSet = {
    constant: {
        black: "#000000",
        white: "#FFFFFF"
    },
    connectButton: {
        background: "#0098EA",
        foreground: "#FFFFFF"
    },
    accent: "#E5E5EA",
    telegramButton: "#31A6F5",
    icon: {
        primary: "#E5E5EA",
        secondary: "#909099",
        tertiary: "#434347",
        success: "#29CC6A",
        error: "#F5A73B"
    },
    background: {
        primary: "#121214",
        secondary: "#18181A",
        segment: "#262629",
        tint: "#222224",
        qr: "#FFFFFF"
    },
    text: {
        primary: "#E5E5EA",
        secondary: "#7D7D85"
    }
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject(o2) {
    return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject(o2) {
    var ctor, prot;
    if (isObject(o2) === false) return false;
    ctor = o2.constructor;
    if (ctor === void 0) return true;
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
    return true;
}
function mergeOptions(options, defaultOptions) {
    if (!options) return defaultOptions;
    const overwriteMerge = (_, sourceArray, __)=>sourceArray;
    return (0, _deepmergeDefault.default)(defaultOptions, options, {
        arrayMerge: overwriteMerge,
        isMergeableObject: isPlainObject
    });
}
const [themeState, setThemeState] = createStore({
    theme: THEME.LIGHT,
    colors: defaultLightColorsSet,
    borderRadius: "m"
});
const themeColorsMappingDefault = {
    [THEME.LIGHT]: defaultLightColorsSet,
    [THEME.DARK]: defaultDarkColorsSet
};
const themeCustomColors = {
    [THEME.LIGHT]: void 0,
    [THEME.DARK]: void 0
};
function setTheme(theme, colorsSet) {
    if (colorsSet) {
        themeCustomColors[THEME.DARK] = mergeOptions(colorsSet[THEME.DARK], themeCustomColors[THEME.DARK]);
        themeCustomColors[THEME.LIGHT] = mergeOptions(colorsSet[THEME.LIGHT], themeCustomColors[THEME.LIGHT]);
    }
    setThemeState({
        theme,
        colors: mergeOptions(themeCustomColors[theme], themeColorsMappingDefault[theme])
    });
}
function setBorderRadius(borderRadius) {
    setThemeState({
        borderRadius
    });
}
function setColors(colorsSet) {
    themeCustomColors[THEME.DARK] = mergeOptions(colorsSet[THEME.DARK], themeCustomColors[THEME.DARK]);
    themeCustomColors[THEME.LIGHT] = mergeOptions(colorsSet[THEME.LIGHT], themeCustomColors[THEME.LIGHT]);
    setThemeState((state)=>({
            colors: mergeOptions(themeCustomColors[state.theme], themeColorsMappingDefault[state.theme])
        }));
}
const ImagePlaceholder = styled.div`
    background-color: ${(props)=>props.theme.colors.background.secondary};
`;
const Image = (props)=>{
    let imgRef;
    const [image, setImage] = createSignal(null);
    createEffect(()=>{
        const img = new window.Image();
        img.src = props.src;
        img.alt = props.alt || "";
        img.setAttribute("draggable", "false");
        if (props.class) img.classList.add(props.class);
        if (img.complete) return setImage(img);
        img.addEventListener("load", ()=>setImage(img));
        return ()=>img.removeEventListener("load", ()=>setImage(img));
    });
    return [
        createComponent(Show, {
            get when () {
                return image();
            },
            get children () {
                return image();
            }
        }),
        createComponent(Show, {
            get when () {
                return !image();
            },
            get children () {
                return createComponent(ImagePlaceholder, {
                    get ["class"] () {
                        return props.class;
                    },
                    ref (r$) {
                        const _ref$ = imgRef;
                        typeof _ref$ === "function" ? _ref$(r$) : imgRef = r$;
                    }
                });
            }
        })
    ];
};
let initParams = {};
try {
    let locationHash = location.hash.toString();
    initParams = urlParseHashParams(locationHash);
} catch (e2) {}
let tmaPlatform = "unknown";
if (initParams == null ? void 0 : initParams.tgWebAppPlatform) tmaPlatform = (_a = initParams.tgWebAppPlatform) != null ? _a : "unknown";
if (tmaPlatform === "unknown") {
    const window2 = getWindow$1();
    tmaPlatform = (_d = (_c = (_b = window2 == null ? void 0 : window2.Telegram) == null ? void 0 : _b.WebApp) == null ? void 0 : _c.platform) != null ? _d : "unknown";
}
let webAppVersion = "6.0";
if (initParams == null ? void 0 : initParams.tgWebAppVersion) webAppVersion = initParams.tgWebAppVersion;
if (!webAppVersion) {
    const window2 = getWindow$1();
    webAppVersion = (_g = (_f = (_e = window2 == null ? void 0 : window2.Telegram) == null ? void 0 : _e.WebApp) == null ? void 0 : _f.version) != null ? _g : "6.0";
}
function isTmaPlatform(...platforms) {
    return platforms.includes(tmaPlatform);
}
function isInTMA() {
    var _a2;
    return tmaPlatform !== "unknown" || !!((_a2 = getWindow$1()) == null ? void 0 : _a2.TelegramWebviewProxy);
}
function sendExpand() {
    postEvent("web_app_expand", {});
}
function sendOpenTelegramLink(link, fallback) {
    const url = new URL(link);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
        if (fallback) return fallback();
        throw new TonConnectUIError(`Url protocol is not supported: ${url}`);
    }
    if (url.hostname !== "t.me") {
        if (fallback) return fallback();
        throw new TonConnectUIError(`Url host is not supported: ${url}`);
    }
    const pathFull = url.pathname + url.search;
    if (isIframe() || versionAtLeast("6.1")) postEvent("web_app_open_tg_link", {
        path_full: pathFull
    });
    else openLinkBlank("https://t.me" + pathFull);
}
function isIframe() {
    try {
        const window2 = getWindow$1();
        if (!window2) return false;
        return window2.parent != null && window2 !== window2.parent;
    } catch (e2) {
        return false;
    }
}
function postEvent(eventType, eventData) {
    try {
        const window2 = getWindow$1();
        if (!window2) throw new TonConnectUIError(`Can't post event to parent window: window is not defined`);
        if (window2.TelegramWebviewProxy !== void 0) {
            logDebug("postEvent", eventType, eventData);
            window2.TelegramWebviewProxy.postEvent(eventType, JSON.stringify(eventData));
        } else if (window2.external && "notify" in window2.external) {
            logDebug("postEvent", eventType, eventData);
            window2.external.notify(JSON.stringify({
                eventType,
                eventData
            }));
        } else if (isIframe()) {
            const trustedTarget = "*";
            const message = JSON.stringify({
                eventType,
                eventData
            });
            logDebug("postEvent", eventType, eventData);
            window2.parent.postMessage(message, trustedTarget);
        } else throw new TonConnectUIError(`Can't post event to TMA`);
    } catch (e2) {
        logError(`Can't post event to parent window: ${e2}`);
    }
}
function urlParseHashParams(locationHash) {
    locationHash = locationHash.replace(/^#/, "");
    let params = {};
    if (!locationHash.length) return params;
    if (locationHash.indexOf("=") < 0 && locationHash.indexOf("?") < 0) {
        params._path = urlSafeDecode(locationHash);
        return params;
    }
    let qIndex = locationHash.indexOf("?");
    if (qIndex >= 0) {
        let pathParam = locationHash.substr(0, qIndex);
        params._path = urlSafeDecode(pathParam);
        locationHash = locationHash.substr(qIndex + 1);
    }
    let query_params = urlParseQueryString(locationHash);
    for(let k in query_params)params[k] = query_params[k];
    return params;
}
function urlSafeDecode(urlencoded) {
    try {
        urlencoded = urlencoded.replace(/\+/g, "%20");
        return decodeURIComponent(urlencoded);
    } catch (e2) {
        return urlencoded;
    }
}
function urlParseQueryString(queryString) {
    let params = {};
    if (!queryString.length) return params;
    let queryStringParams = queryString.split("&");
    let i2, param, paramName, paramValue;
    for(i2 = 0; i2 < queryStringParams.length; i2++){
        param = queryStringParams[i2].split("=");
        paramName = urlSafeDecode(param[0]);
        paramValue = param[1] == null ? null : urlSafeDecode(param[1]);
        params[paramName] = paramValue;
    }
    return params;
}
function versionCompare(v1, v2) {
    if (typeof v1 !== "string") v1 = "";
    if (typeof v2 !== "string") v2 = "";
    let v1List = v1.replace(/^\s+|\s+$/g, "").split(".");
    let v2List = v2.replace(/^\s+|\s+$/g, "").split(".");
    let a2, i2, p1, p2;
    a2 = Math.max(v1List.length, v2List.length);
    for(i2 = 0; i2 < a2; i2++){
        p1 = parseInt(v1List[i2]) || 0;
        p2 = parseInt(v2List[i2]) || 0;
        if (p1 === p2) continue;
        if (p1 > p2) return 1;
        return -1;
    }
    return 0;
}
function versionAtLeast(ver) {
    return versionCompare(webAppVersion, ver) >= 0;
}
const maxWidth = {
    mobile: 440,
    tablet: 1020
};
function isDevice(device) {
    const window2 = getWindow$1();
    if (!window2) return device === "desktop";
    if (isTmaPlatform("weba")) return true;
    const width = window2.innerWidth;
    switch(device){
        case "desktop":
            return width > maxWidth.tablet;
        case "tablet":
            return width > maxWidth.mobile;
        default:
        case "mobile":
            return width <= maxWidth.mobile || isOS("ios", "android", "ipad");
    }
}
function media(device) {
    switch(device){
        case "mobile":
            return `@media (max-width: ${maxWidth.mobile}px)`;
        case "tablet":
            return `@media (max-width: ${maxWidth.tablet}px) (min-width: ${maxWidth.mobile}px)`;
        default:
        case "desktop":
            return `@media (min-width: ${maxWidth.tablet}px)`;
    }
}
const mediaTouch = "@media (hover: none)";
const mediaNotTouch = "@media not all and (hover: none)";
const borders$5 = {
    m: "100vh",
    s: "8px",
    none: "0"
};
const scaleValues = {
    s: 0.02,
    m: 0.04
};
const ButtonStyled$1 = styled.button`
    display: ${(props)=>props.leftIcon || props.rightIcon ? "flex" : "inline-block"};
    gap: ${(props)=>props.leftIcon || props.rightIcon ? "6px" : "unset"};
    align-items: ${(props)=>props.leftIcon || props.rightIcon ? "center" : "unset"};
    justify-content: ${(props)=>props.leftIcon || props.rightIcon ? "space-between" : "unset"};
    background-color: ${(props)=>props.appearance === "flat" ? "transparent" : props.appearance === "secondary" ? props.theme.colors.background.tint : rgba(props.theme.colors.accent, 0.12)};
    color: ${(props)=>props.appearance === "secondary" ? props.theme.colors.text.primary : props.theme.colors.accent};

    padding: ${(props)=>props.appearance === "flat" ? "0" : "9px 16px"};
    padding-left: ${(props)=>props.leftIcon && props.appearance !== "flat" ? "12px" : "16px"};
    padding-right: ${(props)=>props.rightIcon && props.appearance !== "flat" ? "12px" : "16px"};
    border: none;
    border-radius: ${(props)=>borders$5[props.theme.borderRadius]};
    cursor: ${(props)=>props.disabled ? "not-allowed" : "pointer"};

    font-size: 14px;
    font-weight: 590;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: ${(props)=>props.disabled ? "unset" : `scale(${1 + scaleValues[props.scale]})`};
        }
    }

    &:active {
        transform: ${(props)=>props.disabled ? "unset" : `scale(${1 - scaleValues[props.scale]})`};
    }

    ${mediaTouch} {
        &:active {
            transform: ${(props)=>props.disabled ? "unset" : `scale(${1 - scaleValues[props.scale] * 2})`};
        }
    }
`;
function useDataAttributes(props) {
    const keys = untrack(()=>Object.keys(props).filter((key)=>key.startsWith("data-")));
    const [dataAttrs] = splitProps(props, keys);
    return dataAttrs;
}
const Button = (props)=>{
    const dataAttrs = useDataAttributes(props);
    return createComponent(ButtonStyled$1, mergeProps({
        get appearance () {
            return props.appearance || "primary";
        },
        get ["class"] () {
            return props.class;
        },
        onClick: (e2)=>{
            var _a2;
            return (_a2 = props.onClick) == null ? void 0 : _a2.call(props, e2);
        },
        onMouseEnter: (e2)=>{
            var _a2;
            return (_a2 = props.onMouseEnter) == null ? void 0 : _a2.call(props, e2);
        },
        onMouseLeave: (e2)=>{
            var _a2;
            return (_a2 = props.onMouseLeave) == null ? void 0 : _a2.call(props, e2);
        },
        ref (r$) {
            const _ref$ = props.ref;
            typeof _ref$ === "function" ? _ref$(r$) : props.ref = r$;
        },
        get disabled () {
            return props.disabled;
        },
        get scale () {
            return props.scale || "m";
        },
        get leftIcon () {
            return !!props.leftIcon;
        },
        get rightIcon () {
            return !!props.rightIcon;
        },
        "data-tc-button": "true"
    }, dataAttrs, {
        get children () {
            return [
                createMemo(()=>props.leftIcon),
                createMemo(()=>props.children),
                createMemo(()=>props.rightIcon)
            ];
        }
    }));
};
function nextFrame(fn) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(fn);
    });
}
const Transition = (props)=>{
    let el;
    let first = true;
    const [s1, set1] = createSignal();
    const [s2, set2] = createSignal();
    const resolved = children(()=>props.children);
    const { onBeforeEnter, onEnter, onAfterEnter, onBeforeExit, onExit, onAfterExit } = props;
    const classnames = createMemo(()=>{
        const name = props.name || "s";
        return {
            enterActiveClass: props.enterActiveClass || name + "-enter-active",
            enterClass: props.enterClass || name + "-enter",
            enterToClass: props.enterToClass || name + "-enter-to",
            exitActiveClass: props.exitActiveClass || name + "-exit-active",
            exitClass: props.exitClass || name + "-exit",
            exitToClass: props.exitToClass || name + "-exit-to"
        };
    });
    function enterTransition(el2, prev) {
        if (!first || props.appear) {
            let endTransition = function(e2) {
                if (el2 && (!e2 || e2.target === el2)) {
                    el2.removeEventListener("transitionend", endTransition);
                    el2.removeEventListener("animationend", endTransition);
                    el2.classList.remove(...enterActiveClasses);
                    el2.classList.remove(...enterToClasses);
                    batch(()=>{
                        s1() !== el2 && set1(el2);
                        s2() === el2 && set2(void 0);
                    });
                    onAfterEnter && onAfterEnter(el2);
                    if (props.mode === "inout") exitTransition(el2, prev);
                }
            };
            const enterClasses = classnames().enterClass.split(" ");
            const enterActiveClasses = classnames().enterActiveClass.split(" ");
            const enterToClasses = classnames().enterToClass.split(" ");
            onBeforeEnter && onBeforeEnter(el2);
            el2.classList.add(...enterClasses);
            el2.classList.add(...enterActiveClasses);
            nextFrame(()=>{
                el2.classList.remove(...enterClasses);
                el2.classList.add(...enterToClasses);
                onEnter && onEnter(el2, ()=>endTransition());
                if (!onEnter || onEnter.length < 2) {
                    el2.addEventListener("transitionend", endTransition);
                    el2.addEventListener("animationend", endTransition);
                }
            });
        }
        prev && !props.mode ? set2(el2) : set1(el2);
    }
    function exitTransition(el2, prev) {
        const exitClasses = classnames().exitClass.split(" ");
        const exitActiveClasses = classnames().exitActiveClass.split(" ");
        const exitToClasses = classnames().exitToClass.split(" ");
        if (!prev.parentNode) return endTransition();
        onBeforeExit && onBeforeExit(prev);
        prev.classList.add(...exitClasses);
        prev.classList.add(...exitActiveClasses);
        nextFrame(()=>{
            prev.classList.remove(...exitClasses);
            prev.classList.add(...exitToClasses);
        });
        onExit && onExit(prev, ()=>endTransition());
        if (!onExit || onExit.length < 2) {
            prev.addEventListener("transitionend", endTransition);
            prev.addEventListener("animationend", endTransition);
        }
        function endTransition(e2) {
            if (!e2 || e2.target === prev) {
                prev.removeEventListener("transitionend", endTransition);
                prev.removeEventListener("animationend", endTransition);
                prev.classList.remove(...exitActiveClasses);
                prev.classList.remove(...exitToClasses);
                s1() === prev && set1(void 0);
                onAfterExit && onAfterExit(prev);
                if (props.mode === "outin") enterTransition(el2, prev);
            }
        }
    }
    createComputed((prev)=>{
        el = resolved();
        while(typeof el === "function")el = el();
        return untrack(()=>{
            if (el && el !== prev) {
                if (props.mode !== "outin") enterTransition(el, prev);
                else if (first) set1(el);
            }
            if (prev && prev !== el && props.mode !== "inout") exitTransition(el, prev);
            first = false;
            return el;
        });
    });
    return [
        s1,
        s2
    ];
};
function getRect(element) {
    const { top, bottom, left, right, width, height } = element.getBoundingClientRect();
    const parentRect = element.parentNode.getBoundingClientRect();
    return {
        top: top - parentRect.top,
        bottom,
        left: left - parentRect.left,
        right,
        width,
        height
    };
}
const TransitionGroup = (props)=>{
    const resolved = children(()=>props.children);
    const classnames = createMemo(()=>{
        const name = props.name || "s";
        return {
            enterActiveClass: props.enterActiveClass || name + "-enter-active",
            enterClass: props.enterClass || name + "-enter",
            enterToClass: props.enterToClass || name + "-enter-to",
            exitActiveClass: props.exitActiveClass || name + "-exit-active",
            exitClass: props.exitClass || name + "-exit",
            exitToClass: props.exitToClass || name + "-exit-to",
            moveClass: props.moveClass || name + "-move"
        };
    });
    const { onBeforeEnter, onEnter, onAfterEnter, onBeforeExit, onExit, onAfterExit } = props;
    const [combined, setCombined] = createSignal();
    let p2 = [];
    let first = true;
    createComputed(()=>{
        const c2 = resolved();
        const comb = [
            ...c2
        ];
        const next = new Set(c2);
        const prev = new Set(p2);
        const enterClasses = classnames().enterClass.split(" ");
        const enterActiveClasses = classnames().enterActiveClass.split(" ");
        const enterToClasses = classnames().enterToClass.split(" ");
        const exitClasses = classnames().exitClass.split(" ");
        const exitActiveClasses = classnames().exitActiveClass.split(" ");
        const exitToClasses = classnames().exitToClass.split(" ");
        for(let i2 = 0; i2 < c2.length; i2++){
            const el = c2[i2];
            if (!first && !prev.has(el)) {
                let endTransition = function(e2) {
                    if (el && (!e2 || e2.target === el)) {
                        el.removeEventListener("transitionend", endTransition);
                        el.removeEventListener("animationend", endTransition);
                        el.classList.remove(...enterActiveClasses);
                        el.classList.remove(...enterToClasses);
                        onAfterEnter && onAfterEnter(el);
                    }
                };
                onBeforeEnter && onBeforeEnter(el);
                el.classList.add(...enterClasses);
                el.classList.add(...enterActiveClasses);
                nextFrame(()=>{
                    el.classList.remove(...enterClasses);
                    el.classList.add(...enterToClasses);
                    onEnter && onEnter(el, ()=>endTransition());
                    if (!onEnter || onEnter.length < 2) {
                        el.addEventListener("transitionend", endTransition);
                        el.addEventListener("animationend", endTransition);
                    }
                });
            }
        }
        for(let i2 = 0; i2 < p2.length; i2++){
            const old = p2[i2];
            if (!next.has(old) && old.parentNode) {
                let endTransition = function(e2) {
                    if (!e2 || e2.target === old) {
                        old.removeEventListener("transitionend", endTransition);
                        old.removeEventListener("animationend", endTransition);
                        old.classList.remove(...exitActiveClasses);
                        old.classList.remove(...exitToClasses);
                        onAfterExit && onAfterExit(old);
                        p2 = p2.filter((i3)=>i3 !== old);
                        setCombined(p2);
                    }
                };
                comb.splice(i2, 0, old);
                onBeforeExit && onBeforeExit(old);
                old.classList.add(...exitClasses);
                old.classList.add(...exitActiveClasses);
                nextFrame(()=>{
                    old.classList.remove(...exitClasses);
                    old.classList.add(...exitToClasses);
                });
                onExit && onExit(old, ()=>endTransition());
                if (!onExit || onExit.length < 2) {
                    old.addEventListener("transitionend", endTransition);
                    old.addEventListener("animationend", endTransition);
                }
            }
        }
        p2 = comb;
        setCombined(comb);
    });
    createEffect((nodes)=>{
        const c2 = combined();
        c2.forEach((child)=>{
            let n2;
            if (!(n2 = nodes.get(child))) nodes.set(child, n2 = {
                pos: getRect(child),
                new: !first
            });
            else if (n2.new) {
                n2.new = false;
                n2.newPos = getRect(child);
            }
            if (n2.new) child.addEventListener("transitionend", ()=>{
                n2.new = false;
                child.parentNode && (n2.newPos = getRect(child));
            }, {
                once: true
            });
            n2.newPos && (n2.pos = n2.newPos);
            n2.newPos = getRect(child);
        });
        if (first) {
            first = false;
            return nodes;
        }
        c2.forEach((child)=>{
            const c3 = nodes.get(child);
            const oldPos = c3.pos;
            const newPos = c3.newPos;
            const dx = oldPos.left - newPos.left;
            const dy = oldPos.top - newPos.top;
            if (dx || dy) {
                c3.moved = true;
                const s2 = child.style;
                s2.transform = `translate(${dx}px,${dy}px)`;
                s2.transitionDuration = "0s";
            }
        });
        document.body.offsetHeight;
        c2.forEach((child)=>{
            const c3 = nodes.get(child);
            if (c3.moved) {
                let endTransition = function(e2) {
                    if (e2 && e2.target !== child || !child.parentNode) return;
                    if (!e2 || /transform$/.test(e2.propertyName)) {
                        child.removeEventListener("transitionend", endTransition);
                        child.classList.remove(...moveClasses);
                    }
                };
                c3.moved = false;
                const s2 = child.style;
                const moveClasses = classnames().moveClass.split(" ");
                child.classList.add(...moveClasses);
                s2.transform = s2.transitionDuration = "";
                child.addEventListener("transitionend", endTransition);
            }
        });
        return nodes;
    }, /* @__PURE__ */ new Map());
    return combined;
};
function clickOutside$1(el, accessor) {
    const onClick = (e2)=>{
        var _a2;
        return !el.contains(e2.target) && ((_a2 = accessor()) == null ? void 0 : _a2());
    };
    document.body.addEventListener("click", onClick);
    onCleanup(()=>document.body.removeEventListener("click", onClick));
}
function escPressed(_, accessor) {
    const onKeyPress = (e2)=>{
        var _a2, _b2;
        if (e2.key === "Escape") {
            (_a2 = document.activeElement) == null || _a2.blur();
            (_b2 = accessor()) == null || _b2();
        }
    };
    document.body.addEventListener("keydown", onKeyPress);
    onCleanup(()=>document.body.removeEventListener("keydown", onKeyPress));
}
function androidBackHandler$1(_, config) {
    const { isEnabled, onClose } = config();
    if (!isEnabled) return;
    const userOSIsAndroid = getUserAgent().os === "android";
    if (!userOSIsAndroid) return;
    window.history.pushState(ROUTE_STATE, "");
    const popstateHandler = (event)=>{
        event.preventDefault();
        onClose();
    };
    window.addEventListener("popstate", popstateHandler, {
        once: true
    });
    onCleanup(()=>{
        window.removeEventListener("popstate", popstateHandler);
        createMacrotask(()=>{
            var _a2;
            if (((_a2 = window.history.state) == null ? void 0 : _a2[ROUTE_STATE_KEY]) === true) window.history.back();
        });
    });
}
const ROUTE_STATE_KEY = "androidBackHandler";
const ROUTE_STATE = {
    [ROUTE_STATE_KEY]: true
};
const _tmpl$$v = /* @__PURE__ */ template$1(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>`, 4, true);
const rotationDegrees = {
    left: 0,
    top: 90,
    right: 180,
    bottom: 270
};
const ArrowIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    const direction = ()=>props.direction || "left";
    const Svg = styled("svg")`
        transform: rotate(${(props2)=>rotationDegrees[props2.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `;
    return createComponent(Svg, {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        get svgDirection () {
            return direction();
        },
        get children () {
            const _el$ = _tmpl$$v.cloneNode(true);
            createRenderEffect(()=>setAttribute(_el$, "fill", fill()));
            return _el$;
        }
    });
};
const _tmpl$$u = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>`);
const CloseIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$u.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const IconButtonStyled = styled.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(props)=>props.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${mediaTouch} {
        &:active {
            transform: scale(0.92);
        }
    }
`;
const IconButton = (props)=>{
    const dataAttrs = useDataAttributes(props);
    const icon = ()=>props.icon || "close";
    return createComponent(IconButtonStyled, mergeProps({
        get ["class"] () {
            return props.class;
        },
        onClick: ()=>props.onClick(),
        "data-tc-icon-button": "true"
    }, dataAttrs, {
        get children () {
            return [
                createComponent(Show, {
                    get when () {
                        return !!props.children;
                    },
                    get children () {
                        return props.children;
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return !props.children;
                    },
                    get children () {
                        return createComponent(Switch, {
                            get children () {
                                return [
                                    createComponent(Match, {
                                        get when () {
                                            return icon() === "close";
                                        },
                                        get children () {
                                            return createComponent(CloseIcon, {
                                                get fill () {
                                                    return props.fill;
                                                }
                                            });
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return icon() === "arrow";
                                        },
                                        get children () {
                                            return createComponent(ArrowIcon, {
                                                get fill () {
                                                    return props.fill;
                                                }
                                            });
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return icon() === "question";
                                        },
                                        get children () {
                                            return createComponent(QuestionIcon, {
                                                get fill () {
                                                    return props.fill;
                                                }
                                            });
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return typeof icon() !== "string";
                                        },
                                        get children () {
                                            return icon();
                                        }
                                    })
                                ];
                            }
                        });
                    }
                })
            ];
        }
    }));
};
const borders$4 = {
    m: "24px",
    s: "16px",
    none: "0"
};
const ModalBackgroundStyled = styled.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${media("mobile")} {
        padding-bottom: 0;
    }
`;
const ModalWrapperClass = u`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${media("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`;
const ModalBodyStyled = styled.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${(props)=>props.theme.colors.background.primary};
    border-radius: ${(props)=>borders$4[props.theme.borderRadius]};

    ${media("mobile")} {
        width: 100%;
    }
`;
const CloseButtonStyled = styled(IconButton)`
    position: absolute;
    right: 16px;
    top: 16px;
`;
const ModalFooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${(props)=>borders$4[props.theme.borderRadius]}
        ${(props)=>borders$4[props.theme.borderRadius]};
`;
const QuestionButtonStyled = styled(IconButton)`
    background-color: ${(props)=>rgba(props.theme.colors.icon.secondary, 0.12)};
`;
class AnimationTimelineNoop {
    constructor(){
        __publicField(this, "currentTime", 0);
    }
}
const _AnimationNoop = class {
    constructor(){
        __publicField(this, "currentTime", 0);
        __publicField(this, "playbackRate", 1);
        __publicField(this, "startTime", null);
        __publicField(this, "timeline", new AnimationTimelineNoop());
        __publicField(this, "finished", Promise.resolve(this));
        __publicField(this, "effect", null);
        __publicField(this, "id", "");
        __publicField(this, "pending", false);
        __publicField(this, "playState", "finished");
        __publicField(this, "replaceState", "active");
        __publicField(this, "ready", Promise.resolve(this));
        __publicField(this, "oncancel", null);
        __publicField(this, "onfinish", null);
        __publicField(this, "onremove", null);
    }
    static create() {
        if (!_AnimationNoop._instance) {
            logWarning("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API.");
            _AnimationNoop._instance = new _AnimationNoop();
        }
        return _AnimationNoop._instance;
    }
    cancel() {}
    finish() {}
    pause() {}
    play() {}
    reverse() {}
    addEventListener(_type, _listener, _options) {}
    dispatchEvent(_event) {
        return false;
    }
    removeEventListener(_type, _callback, _options) {}
    updatePlaybackRate(_playbackRate) {}
    commitStyles() {}
    persist() {}
};
let AnimationNoop = _AnimationNoop;
__publicField(AnimationNoop, "_instance", null);
function animate(element, keyframes, options) {
    if ("animate" in element) return element.animate(keyframes, options);
    return AnimationNoop.create();
}
const _tmpl$$t = /* @__PURE__ */ template$1(`<div></div>`);
const clickOutside = clickOutside$1;
const keyPressed = escPressed;
const androidBackHandler = androidBackHandler$1;
const Modal = (props)=>{
    const theme = useTheme();
    const dataAttrs = useDataAttributes(props);
    createEffect(()=>{
        if (props.opened) disableScroll();
        else enableScroll();
    });
    return createComponent(Transition, {
        onBeforeEnter: (el)=>{
            const duration = isDevice("mobile") ? 200 : 100;
            animate(el, [
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                duration
            });
            if (isDevice("mobile")) animate(el.firstElementChild, [
                {
                    transform: "translateY(390px)"
                },
                {
                    transform: "translateY(0)"
                }
            ], {
                duration
            });
        },
        onExit: (el, done)=>{
            const duration = isDevice("mobile") ? 200 : 100;
            const backgroundAnimation = animate(el, [
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], {
                duration
            });
            if (isDevice("mobile")) {
                const contentAnimation = animate(el.firstElementChild, [
                    {
                        transform: "translateY(0)"
                    },
                    {
                        transform: "translateY(390px)"
                    }
                ], {
                    duration
                });
                Promise.all([
                    backgroundAnimation.finished,
                    contentAnimation.finished
                ]).then(done);
            } else backgroundAnimation.finished.then(done);
        },
        get children () {
            return createComponent(Show, {
                get when () {
                    return props.opened;
                },
                get children () {
                    return createComponent(ModalBackgroundStyled, mergeProps({
                        "data-tc-modal": "true"
                    }, dataAttrs, {
                        get children () {
                            const _el$ = _tmpl$$t.cloneNode(true);
                            use(androidBackHandler, _el$, ()=>({
                                    isEnabled: props.enableAndroidBackHandler,
                                    onClose: ()=>props.onClose()
                                }));
                            use(keyPressed, _el$, ()=>()=>props.onClose());
                            use(clickOutside, _el$, ()=>()=>props.onClose());
                            insert(_el$, createComponent(ModalBodyStyled, {
                                get ["class"] () {
                                    return props.class;
                                },
                                get children () {
                                    return [
                                        createComponent(CloseButtonStyled, {
                                            icon: "close",
                                            onClick: ()=>props.onClose()
                                        }),
                                        createMemo(()=>props.children)
                                    ];
                                }
                            }), null);
                            insert(_el$, createComponent(Show, {
                                get when () {
                                    return props.onClickQuestion;
                                },
                                get children () {
                                    return createComponent(ModalFooterStyled, {
                                        get children () {
                                            return [
                                                createComponent(TonConnectBrand, {}),
                                                createComponent(QuestionButtonStyled, {
                                                    get onClick () {
                                                        return props.onClickQuestion;
                                                    },
                                                    icon: "question"
                                                })
                                            ];
                                        }
                                    });
                                }
                            }), null);
                            createRenderEffect(()=>className(_el$, (0, _classnamesDefault.default)(ModalWrapperClass, u`
                                border-radius: ${borders$4[theme.borderRadius]};
                                background-color: ${theme.colors.background.tint};

                                ${media("mobile")} {
                                    border-radius: ${borders$4[theme.borderRadius]}
                                        ${borders$4[theme.borderRadius]} 0 0;
                                }
                            `)));
                            return _el$;
                        }
                    }));
                }
            });
        }
    });
};
const wrapperBorderRadius = {
    m: "22px",
    s: "12px",
    none: "0"
};
const sliderBorderRadius = {
    m: "18px",
    s: "8px",
    none: "0"
};
const TabBarStyled = styled.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${(props)=>wrapperBorderRadius[props.theme.borderRadius]};

    background-color: ${(props)=>props.theme.colors.background.secondary};
`;
const SliderStyled = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${(props)=>sliderBorderRadius[props.theme.borderRadius]};
    background-color: ${(props)=>props.theme.colors.background.segment};

    transform: ${(props)=>props.right ? "translateX(100%)" : "translateX(0)"};

    transition: transform 0.13s ease-in-out;
`;
const InputStyled = styled.input`
    display: none;
`;
const LabelStyled = styled.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${(props)=>props.isActive ? "default" : "pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${(props)=>props.isActive ? "none" : "scale(1.025)"};
    }

    > * {
        ${(props)=>!props.isActive ? `color: ${props.theme.colors.text.secondary};` : ""}
    }
`;
const TabBar = (props)=>{
    const groupName = "tabBar" + Math.floor(Math.random() * 1e4);
    return createComponent(TabBarStyled, {
        get ["class"] () {
            return props.class;
        },
        "data-tc-tab-bar": "true",
        get children () {
            return [
                createComponent(SliderStyled, {
                    get right () {
                        return props.selectedTabIndex === 1;
                    }
                }),
                createComponent(LabelStyled, {
                    get isActive () {
                        return props.selectedTabIndex === 0;
                    },
                    get children () {
                        return [
                            createComponent(InputStyled, {
                                type: "radio",
                                name: groupName,
                                get checked () {
                                    return props.selectedTabIndex === 0;
                                },
                                onInput: ()=>{
                                    var _a2;
                                    return (_a2 = props.onSelectedTabIndexChange) == null ? void 0 : _a2.call(props, 0);
                                }
                            }),
                            createMemo(()=>props.tab1)
                        ];
                    }
                }),
                createComponent(LabelStyled, {
                    get isActive () {
                        return props.selectedTabIndex === 1;
                    },
                    get children () {
                        return [
                            createComponent(InputStyled, {
                                type: "radio",
                                get checked () {
                                    return props.selectedTabIndex === 1;
                                },
                                name: groupName,
                                onInput: ()=>{
                                    var _a2;
                                    return (_a2 = props.onSelectedTabIndexChange) == null ? void 0 : _a2.call(props, 1);
                                }
                            }),
                            createMemo(()=>props.tab2)
                        ];
                    }
                })
            ];
        }
    });
};
const backgroundBorders = {
    m: "16px",
    s: "12px",
    none: "0"
};
const imageBorders = {
    m: "12px",
    s: "8px",
    none: "0"
};
const qrNormalSize = 256;
const imgSizeDefault = 60;
const picSizeDefault = 48;
const qrPaddingTop = 24;
const CopyIconButton = styled.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`;
const QrCodeBackground = styled.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${(props)=>props.theme.colors.background.qr};
    border-radius: ${(props)=>backgroundBorders[props.theme.borderRadius]};
    padding: ${toPx(qrPaddingTop)} 0;
    height: ${toPx(qrNormalSize + qrPaddingTop * 2)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${mediaNotTouch} {
        &:hover {
            ${CopyIconButton.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${CopyIconButton.class} {
            transform: scale(0.96);
        }
    }

    ${mediaTouch} {
        &:active {
            ${CopyIconButton.class} {
                transform: scale(0.92);
            }
        }
    }
`;
const QrCodeWrapper$2 = styled.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${(props)=>props.theme.colors.constant.black};
    }
`;
const ImageBackground = styled.div`
    position: absolute;
    width: ${toPx(imgSizeDefault)};
    height: ${toPx(imgSizeDefault)};
    background: ${(props)=>props.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`;
const ImageStyled$3 = styled(Image)`
    width: ${(props)=>toPx(props.size)};
    height: ${(props)=>toPx(props.size)};
    border-radius: ${(props)=>imageBorders[props.theme.borderRadius]};
    background-color: ${(props)=>props.theme.colors.background.qr};
`;
const CopiedBoxStyled = styled.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${(props)=>props.theme.colors.background.segment};
`;
var qrcode$1 = {
    exports: {}
};
(function(module, exports) {
    var qrcode2 = function() {
        var qrcode3 = function(typeNumber, errorCorrectionLevel) {
            var PAD0 = 236;
            var PAD1 = 17;
            var _typeNumber = typeNumber;
            var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
            var _modules = null;
            var _moduleCount = 0;
            var _dataCache = null;
            var _dataList = [];
            var _this = {};
            var makeImpl = function(test, maskPattern) {
                _moduleCount = _typeNumber * 4 + 17;
                _modules = function(moduleCount) {
                    var modules = new Array(moduleCount);
                    for(var row = 0; row < moduleCount; row += 1){
                        modules[row] = new Array(moduleCount);
                        for(var col = 0; col < moduleCount; col += 1)modules[row][col] = null;
                    }
                    return modules;
                }(_moduleCount);
                setupPositionProbePattern(0, 0);
                setupPositionProbePattern(_moduleCount - 7, 0);
                setupPositionProbePattern(0, _moduleCount - 7);
                setupPositionAdjustPattern();
                setupTimingPattern();
                setupTypeInfo(test, maskPattern);
                if (_typeNumber >= 7) setupTypeNumber(test);
                if (_dataCache == null) _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
                mapData(_dataCache, maskPattern);
            };
            var setupPositionProbePattern = function(row, col) {
                for(var r = -1; r <= 7; r += 1){
                    if (row + r <= -1 || _moduleCount <= row + r) continue;
                    for(var c2 = -1; c2 <= 7; c2 += 1){
                        if (col + c2 <= -1 || _moduleCount <= col + c2) continue;
                        if (0 <= r && r <= 6 && (c2 == 0 || c2 == 6) || 0 <= c2 && c2 <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c2 && c2 <= 4) _modules[row + r][col + c2] = true;
                        else _modules[row + r][col + c2] = false;
                    }
                }
            };
            var getBestMaskPattern = function() {
                var minLostPoint = 0;
                var pattern = 0;
                for(var i2 = 0; i2 < 8; i2 += 1){
                    makeImpl(true, i2);
                    var lostPoint = QRUtil.getLostPoint(_this);
                    if (i2 == 0 || minLostPoint > lostPoint) {
                        minLostPoint = lostPoint;
                        pattern = i2;
                    }
                }
                return pattern;
            };
            var setupTimingPattern = function() {
                for(var r = 8; r < _moduleCount - 8; r += 1){
                    if (_modules[r][6] != null) continue;
                    _modules[r][6] = r % 2 == 0;
                }
                for(var c2 = 8; c2 < _moduleCount - 8; c2 += 1){
                    if (_modules[6][c2] != null) continue;
                    _modules[6][c2] = c2 % 2 == 0;
                }
            };
            var setupPositionAdjustPattern = function() {
                var pos = QRUtil.getPatternPosition(_typeNumber);
                for(var i2 = 0; i2 < pos.length; i2 += 1)for(var j = 0; j < pos.length; j += 1){
                    var row = pos[i2];
                    var col = pos[j];
                    if (_modules[row][col] != null) continue;
                    for(var r = -2; r <= 2; r += 1){
                        for(var c2 = -2; c2 <= 2; c2 += 1)if (r == -2 || r == 2 || c2 == -2 || c2 == 2 || r == 0 && c2 == 0) _modules[row + r][col + c2] = true;
                        else _modules[row + r][col + c2] = false;
                    }
                }
            };
            var setupTypeNumber = function(test) {
                var bits = QRUtil.getBCHTypeNumber(_typeNumber);
                for(var i2 = 0; i2 < 18; i2 += 1){
                    var mod = !test && (bits >> i2 & 1) == 1;
                    _modules[Math.floor(i2 / 3)][i2 % 3 + _moduleCount - 8 - 3] = mod;
                }
                for(var i2 = 0; i2 < 18; i2 += 1){
                    var mod = !test && (bits >> i2 & 1) == 1;
                    _modules[i2 % 3 + _moduleCount - 8 - 3][Math.floor(i2 / 3)] = mod;
                }
            };
            var setupTypeInfo = function(test, maskPattern) {
                var data = _errorCorrectionLevel << 3 | maskPattern;
                var bits = QRUtil.getBCHTypeInfo(data);
                for(var i2 = 0; i2 < 15; i2 += 1){
                    var mod = !test && (bits >> i2 & 1) == 1;
                    if (i2 < 6) _modules[i2][8] = mod;
                    else if (i2 < 8) _modules[i2 + 1][8] = mod;
                    else _modules[_moduleCount - 15 + i2][8] = mod;
                }
                for(var i2 = 0; i2 < 15; i2 += 1){
                    var mod = !test && (bits >> i2 & 1) == 1;
                    if (i2 < 8) _modules[8][_moduleCount - i2 - 1] = mod;
                    else if (i2 < 9) _modules[8][15 - i2 - 1 + 1] = mod;
                    else _modules[8][15 - i2 - 1] = mod;
                }
                _modules[_moduleCount - 8][8] = !test;
            };
            var mapData = function(data, maskPattern) {
                var inc = -1;
                var row = _moduleCount - 1;
                var bitIndex = 7;
                var byteIndex = 0;
                var maskFunc = QRUtil.getMaskFunction(maskPattern);
                for(var col = _moduleCount - 1; col > 0; col -= 2){
                    if (col == 6) col -= 1;
                    while(true){
                        for(var c2 = 0; c2 < 2; c2 += 1)if (_modules[row][col - c2] == null) {
                            var dark = false;
                            if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                            var mask = maskFunc(row, col - c2);
                            if (mask) dark = !dark;
                            _modules[row][col - c2] = dark;
                            bitIndex -= 1;
                            if (bitIndex == -1) {
                                byteIndex += 1;
                                bitIndex = 7;
                            }
                        }
                        row += inc;
                        if (row < 0 || _moduleCount <= row) {
                            row -= inc;
                            inc = -inc;
                            break;
                        }
                    }
                }
            };
            var createBytes = function(buffer, rsBlocks) {
                var offset = 0;
                var maxDcCount = 0;
                var maxEcCount = 0;
                var dcdata = new Array(rsBlocks.length);
                var ecdata = new Array(rsBlocks.length);
                for(var r = 0; r < rsBlocks.length; r += 1){
                    var dcCount = rsBlocks[r].dataCount;
                    var ecCount = rsBlocks[r].totalCount - dcCount;
                    maxDcCount = Math.max(maxDcCount, dcCount);
                    maxEcCount = Math.max(maxEcCount, ecCount);
                    dcdata[r] = new Array(dcCount);
                    for(var i2 = 0; i2 < dcdata[r].length; i2 += 1)dcdata[r][i2] = 255 & buffer.getBuffer()[i2 + offset];
                    offset += dcCount;
                    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
                    var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
                    var modPoly = rawPoly.mod(rsPoly);
                    ecdata[r] = new Array(rsPoly.getLength() - 1);
                    for(var i2 = 0; i2 < ecdata[r].length; i2 += 1){
                        var modIndex = i2 + modPoly.getLength() - ecdata[r].length;
                        ecdata[r][i2] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
                    }
                }
                var totalCodeCount = 0;
                for(var i2 = 0; i2 < rsBlocks.length; i2 += 1)totalCodeCount += rsBlocks[i2].totalCount;
                var data = new Array(totalCodeCount);
                var index = 0;
                for(var i2 = 0; i2 < maxDcCount; i2 += 1){
                    for(var r = 0; r < rsBlocks.length; r += 1)if (i2 < dcdata[r].length) {
                        data[index] = dcdata[r][i2];
                        index += 1;
                    }
                }
                for(var i2 = 0; i2 < maxEcCount; i2 += 1){
                    for(var r = 0; r < rsBlocks.length; r += 1)if (i2 < ecdata[r].length) {
                        data[index] = ecdata[r][i2];
                        index += 1;
                    }
                }
                return data;
            };
            var createData = function(typeNumber2, errorCorrectionLevel2, dataList) {
                var rsBlocks = QRRSBlock.getRSBlocks(typeNumber2, errorCorrectionLevel2);
                var buffer = qrBitBuffer();
                for(var i2 = 0; i2 < dataList.length; i2 += 1){
                    var data = dataList[i2];
                    buffer.put(data.getMode(), 4);
                    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber2));
                    data.write(buffer);
                }
                var totalDataCount = 0;
                for(var i2 = 0; i2 < rsBlocks.length; i2 += 1)totalDataCount += rsBlocks[i2].dataCount;
                if (buffer.getLengthInBits() > totalDataCount * 8) throw "code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")";
                if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) buffer.put(0, 4);
                while(buffer.getLengthInBits() % 8 != 0)buffer.putBit(false);
                while(true){
                    if (buffer.getLengthInBits() >= totalDataCount * 8) break;
                    buffer.put(PAD0, 8);
                    if (buffer.getLengthInBits() >= totalDataCount * 8) break;
                    buffer.put(PAD1, 8);
                }
                return createBytes(buffer, rsBlocks);
            };
            _this.addData = function(data, mode) {
                mode = mode || "Byte";
                var newData = null;
                switch(mode){
                    case "Numeric":
                        newData = qrNumber(data);
                        break;
                    case "Alphanumeric":
                        newData = qrAlphaNum(data);
                        break;
                    case "Byte":
                        newData = qr8BitByte(data);
                        break;
                    case "Kanji":
                        newData = qrKanji(data);
                        break;
                    default:
                        throw "mode:" + mode;
                }
                _dataList.push(newData);
                _dataCache = null;
            };
            _this.isDark = function(row, col) {
                if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) throw row + "," + col;
                return _modules[row][col];
            };
            _this.getModuleCount = function() {
                return _moduleCount;
            };
            _this.make = function() {
                if (_typeNumber < 1) {
                    var typeNumber2 = 1;
                    for(; typeNumber2 < 40; typeNumber2++){
                        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber2, _errorCorrectionLevel);
                        var buffer = qrBitBuffer();
                        for(var i2 = 0; i2 < _dataList.length; i2++){
                            var data = _dataList[i2];
                            buffer.put(data.getMode(), 4);
                            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber2));
                            data.write(buffer);
                        }
                        var totalDataCount = 0;
                        for(var i2 = 0; i2 < rsBlocks.length; i2++)totalDataCount += rsBlocks[i2].dataCount;
                        if (buffer.getLengthInBits() <= totalDataCount * 8) break;
                    }
                    _typeNumber = typeNumber2;
                }
                makeImpl(false, getBestMaskPattern());
            };
            _this.createTableTag = function(cellSize, margin) {
                cellSize = cellSize || 2;
                margin = typeof margin == "undefined" ? cellSize * 4 : margin;
                var qrHtml = "";
                qrHtml += '<table style="';
                qrHtml += " border-width: 0px; border-style: none;";
                qrHtml += " border-collapse: collapse;";
                qrHtml += " padding: 0px; margin: " + margin + "px;";
                qrHtml += '">';
                qrHtml += "<tbody>";
                for(var r = 0; r < _this.getModuleCount(); r += 1){
                    qrHtml += "<tr>";
                    for(var c2 = 0; c2 < _this.getModuleCount(); c2 += 1){
                        qrHtml += '<td style="';
                        qrHtml += " border-width: 0px; border-style: none;";
                        qrHtml += " border-collapse: collapse;";
                        qrHtml += " padding: 0px; margin: 0px;";
                        qrHtml += " width: " + cellSize + "px;";
                        qrHtml += " height: " + cellSize + "px;";
                        qrHtml += " background-color: ";
                        qrHtml += _this.isDark(r, c2) ? "#000000" : "#ffffff";
                        qrHtml += ";";
                        qrHtml += '"/>';
                    }
                    qrHtml += "</tr>";
                }
                qrHtml += "</tbody>";
                qrHtml += "</table>";
                return qrHtml;
            };
            _this.createSvgTag = function(cellSize, margin, alt, title) {
                var opts = {};
                if (typeof arguments[0] == "object") {
                    opts = arguments[0];
                    cellSize = opts.cellSize;
                    margin = opts.margin;
                    alt = opts.alt;
                    title = opts.title;
                }
                cellSize = cellSize || 2;
                margin = typeof margin == "undefined" ? cellSize * 4 : margin;
                alt = typeof alt === "string" ? {
                    text: alt
                } : alt || {};
                alt.text = alt.text || null;
                alt.id = alt.text ? alt.id || "qrcode-description" : null;
                title = typeof title === "string" ? {
                    text: title
                } : title || {};
                title.text = title.text || null;
                title.id = title.text ? title.id || "qrcode-title" : null;
                var size = _this.getModuleCount() * cellSize + margin * 2;
                var c2, mc, r, mr, qrSvg = "", rect;
                rect = "l" + cellSize + ",0 0," + cellSize + " -" + cellSize + ",0 0,-" + cellSize + "z ";
                qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
                qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : "";
                qrSvg += ' viewBox="0 0 ' + size + " " + size + '" ';
                qrSvg += ' preserveAspectRatio="xMinYMin meet"';
                qrSvg += title.text || alt.text ? ' role="img" aria-labelledby="' + escapeXml([
                    title.id,
                    alt.id
                ].join(" ").trim()) + '"' : "";
                qrSvg += ">";
                qrSvg += title.text ? '<title id="' + escapeXml(title.id) + '">' + escapeXml(title.text) + "</title>" : "";
                qrSvg += alt.text ? '<description id="' + escapeXml(alt.id) + '">' + escapeXml(alt.text) + "</description>" : "";
                qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
                qrSvg += '<path d="';
                for(r = 0; r < _this.getModuleCount(); r += 1){
                    mr = r * cellSize + margin;
                    for(c2 = 0; c2 < _this.getModuleCount(); c2 += 1)if (_this.isDark(r, c2)) {
                        mc = c2 * cellSize + margin;
                        qrSvg += "M" + mc + "," + mr + rect;
                    }
                }
                qrSvg += '" stroke="transparent" fill="black"/>';
                qrSvg += "</svg>";
                return qrSvg;
            };
            _this.createDataURL = function(cellSize, margin) {
                cellSize = cellSize || 2;
                margin = typeof margin == "undefined" ? cellSize * 4 : margin;
                var size = _this.getModuleCount() * cellSize + margin * 2;
                var min2 = margin;
                var max2 = size - margin;
                return createDataURL(size, size, function(x, y) {
                    if (min2 <= x && x < max2 && min2 <= y && y < max2) {
                        var c2 = Math.floor((x - min2) / cellSize);
                        var r = Math.floor((y - min2) / cellSize);
                        return _this.isDark(r, c2) ? 0 : 1;
                    } else return 1;
                });
            };
            _this.createImgTag = function(cellSize, margin, alt) {
                cellSize = cellSize || 2;
                margin = typeof margin == "undefined" ? cellSize * 4 : margin;
                var size = _this.getModuleCount() * cellSize + margin * 2;
                var img = "";
                img += "<img";
                img += ' src="';
                img += _this.createDataURL(cellSize, margin);
                img += '"';
                img += ' width="';
                img += size;
                img += '"';
                img += ' height="';
                img += size;
                img += '"';
                if (alt) {
                    img += ' alt="';
                    img += escapeXml(alt);
                    img += '"';
                }
                img += "/>";
                return img;
            };
            var escapeXml = function(s2) {
                var escaped = "";
                for(var i2 = 0; i2 < s2.length; i2 += 1){
                    var c2 = s2.charAt(i2);
                    switch(c2){
                        case "<":
                            escaped += "&lt;";
                            break;
                        case ">":
                            escaped += "&gt;";
                            break;
                        case "&":
                            escaped += "&amp;";
                            break;
                        case '"':
                            escaped += "&quot;";
                            break;
                        default:
                            escaped += c2;
                            break;
                    }
                }
                return escaped;
            };
            var _createHalfASCII = function(margin) {
                var cellSize = 1;
                margin = typeof margin == "undefined" ? cellSize * 2 : margin;
                var size = _this.getModuleCount() * cellSize + margin * 2;
                var min2 = margin;
                var max2 = size - margin;
                var y, x, r1, r2, p2;
                var blocks = {
                    "\u2588\u2588": "\u2588",
                    "\u2588 ": "\u2580",
                    " \u2588": "\u2584",
                    "  ": " "
                };
                var blocksLastLineNoMargin = {
                    "\u2588\u2588": "\u2580",
                    "\u2588 ": "\u2580",
                    " \u2588": " ",
                    "  ": " "
                };
                var ascii = "";
                for(y = 0; y < size; y += 2){
                    r1 = Math.floor((y - min2) / cellSize);
                    r2 = Math.floor((y + 1 - min2) / cellSize);
                    for(x = 0; x < size; x += 1){
                        p2 = "\u2588";
                        if (min2 <= x && x < max2 && min2 <= y && y < max2 && _this.isDark(r1, Math.floor((x - min2) / cellSize))) p2 = " ";
                        if (min2 <= x && x < max2 && min2 <= y + 1 && y + 1 < max2 && _this.isDark(r2, Math.floor((x - min2) / cellSize))) p2 += " ";
                        else p2 += "\u2588";
                        ascii += margin < 1 && y + 1 >= max2 ? blocksLastLineNoMargin[p2] : blocks[p2];
                    }
                    ascii += "\n";
                }
                if (size % 2 && margin > 0) return ascii.substring(0, ascii.length - size - 1) + Array(size + 1).join("\u2580");
                return ascii.substring(0, ascii.length - 1);
            };
            _this.createASCII = function(cellSize, margin) {
                cellSize = cellSize || 1;
                if (cellSize < 2) return _createHalfASCII(margin);
                cellSize -= 1;
                margin = typeof margin == "undefined" ? cellSize * 2 : margin;
                var size = _this.getModuleCount() * cellSize + margin * 2;
                var min2 = margin;
                var max2 = size - margin;
                var y, x, r, p2;
                var white = Array(cellSize + 1).join("\u2588\u2588");
                var black = Array(cellSize + 1).join("  ");
                var ascii = "";
                var line = "";
                for(y = 0; y < size; y += 1){
                    r = Math.floor((y - min2) / cellSize);
                    line = "";
                    for(x = 0; x < size; x += 1){
                        p2 = 1;
                        if (min2 <= x && x < max2 && min2 <= y && y < max2 && _this.isDark(r, Math.floor((x - min2) / cellSize))) p2 = 0;
                        line += p2 ? white : black;
                    }
                    for(r = 0; r < cellSize; r += 1)ascii += line + "\n";
                }
                return ascii.substring(0, ascii.length - 1);
            };
            _this.renderTo2dContext = function(context, cellSize) {
                cellSize = cellSize || 2;
                var length = _this.getModuleCount();
                for(var row = 0; row < length; row++)for(var col = 0; col < length; col++){
                    context.fillStyle = _this.isDark(row, col) ? "black" : "white";
                    context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
                }
            };
            return _this;
        };
        qrcode3.stringToBytesFuncs = {
            "default": function(s2) {
                var bytes = [];
                for(var i2 = 0; i2 < s2.length; i2 += 1){
                    var c2 = s2.charCodeAt(i2);
                    bytes.push(c2 & 255);
                }
                return bytes;
            }
        };
        qrcode3.stringToBytes = qrcode3.stringToBytesFuncs["default"];
        qrcode3.createStringToBytes = function(unicodeData, numChars) {
            var unicodeMap = function() {
                var bin = base64DecodeInputStream(unicodeData);
                var read = function() {
                    var b = bin.read();
                    if (b == -1) throw "eof";
                    return b;
                };
                var count = 0;
                var unicodeMap2 = {};
                while(true){
                    var b0 = bin.read();
                    if (b0 == -1) break;
                    var b1 = read();
                    var b2 = read();
                    var b3 = read();
                    var k = String.fromCharCode(b0 << 8 | b1);
                    var v = b2 << 8 | b3;
                    unicodeMap2[k] = v;
                    count += 1;
                }
                if (count != numChars) throw count + " != " + numChars;
                return unicodeMap2;
            }();
            var unknownChar = "?".charCodeAt(0);
            return function(s2) {
                var bytes = [];
                for(var i2 = 0; i2 < s2.length; i2 += 1){
                    var c2 = s2.charCodeAt(i2);
                    if (c2 < 128) bytes.push(c2);
                    else {
                        var b = unicodeMap[s2.charAt(i2)];
                        if (typeof b == "number") {
                            if ((b & 255) == b) bytes.push(b);
                            else {
                                bytes.push(b >>> 8);
                                bytes.push(b & 255);
                            }
                        } else bytes.push(unknownChar);
                    }
                }
                return bytes;
            };
        };
        var QRMode = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        };
        var QRErrorCorrectionLevel = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        };
        var QRMaskPattern = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        var QRUtil = function() {
            var PATTERN_POSITION_TABLE = [
                [],
                [
                    6,
                    18
                ],
                [
                    6,
                    22
                ],
                [
                    6,
                    26
                ],
                [
                    6,
                    30
                ],
                [
                    6,
                    34
                ],
                [
                    6,
                    22,
                    38
                ],
                [
                    6,
                    24,
                    42
                ],
                [
                    6,
                    26,
                    46
                ],
                [
                    6,
                    28,
                    50
                ],
                [
                    6,
                    30,
                    54
                ],
                [
                    6,
                    32,
                    58
                ],
                [
                    6,
                    34,
                    62
                ],
                [
                    6,
                    26,
                    46,
                    66
                ],
                [
                    6,
                    26,
                    48,
                    70
                ],
                [
                    6,
                    26,
                    50,
                    74
                ],
                [
                    6,
                    30,
                    54,
                    78
                ],
                [
                    6,
                    30,
                    56,
                    82
                ],
                [
                    6,
                    30,
                    58,
                    86
                ],
                [
                    6,
                    34,
                    62,
                    90
                ],
                [
                    6,
                    28,
                    50,
                    72,
                    94
                ],
                [
                    6,
                    26,
                    50,
                    74,
                    98
                ],
                [
                    6,
                    30,
                    54,
                    78,
                    102
                ],
                [
                    6,
                    28,
                    54,
                    80,
                    106
                ],
                [
                    6,
                    32,
                    58,
                    84,
                    110
                ],
                [
                    6,
                    30,
                    58,
                    86,
                    114
                ],
                [
                    6,
                    34,
                    62,
                    90,
                    118
                ],
                [
                    6,
                    26,
                    50,
                    74,
                    98,
                    122
                ],
                [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126
                ],
                [
                    6,
                    26,
                    52,
                    78,
                    104,
                    130
                ],
                [
                    6,
                    30,
                    56,
                    82,
                    108,
                    134
                ],
                [
                    6,
                    34,
                    60,
                    86,
                    112,
                    138
                ],
                [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142
                ],
                [
                    6,
                    34,
                    62,
                    90,
                    118,
                    146
                ],
                [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126,
                    150
                ],
                [
                    6,
                    24,
                    50,
                    76,
                    102,
                    128,
                    154
                ],
                [
                    6,
                    28,
                    54,
                    80,
                    106,
                    132,
                    158
                ],
                [
                    6,
                    32,
                    58,
                    84,
                    110,
                    136,
                    162
                ],
                [
                    6,
                    26,
                    54,
                    82,
                    110,
                    138,
                    166
                ],
                [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142,
                    170
                ]
            ];
            var G15 = 1335;
            var G18 = 7973;
            var G15_MASK = 21522;
            var _this = {};
            var getBCHDigit = function(data) {
                var digit = 0;
                while(data != 0){
                    digit += 1;
                    data >>>= 1;
                }
                return digit;
            };
            _this.getBCHTypeInfo = function(data) {
                var d = data << 10;
                while(getBCHDigit(d) - getBCHDigit(G15) >= 0)d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);
                return (data << 10 | d) ^ G15_MASK;
            };
            _this.getBCHTypeNumber = function(data) {
                var d = data << 12;
                while(getBCHDigit(d) - getBCHDigit(G18) >= 0)d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);
                return data << 12 | d;
            };
            _this.getPatternPosition = function(typeNumber) {
                return PATTERN_POSITION_TABLE[typeNumber - 1];
            };
            _this.getMaskFunction = function(maskPattern) {
                switch(maskPattern){
                    case QRMaskPattern.PATTERN000:
                        return function(i2, j) {
                            return (i2 + j) % 2 == 0;
                        };
                    case QRMaskPattern.PATTERN001:
                        return function(i2, j) {
                            return i2 % 2 == 0;
                        };
                    case QRMaskPattern.PATTERN010:
                        return function(i2, j) {
                            return j % 3 == 0;
                        };
                    case QRMaskPattern.PATTERN011:
                        return function(i2, j) {
                            return (i2 + j) % 3 == 0;
                        };
                    case QRMaskPattern.PATTERN100:
                        return function(i2, j) {
                            return (Math.floor(i2 / 2) + Math.floor(j / 3)) % 2 == 0;
                        };
                    case QRMaskPattern.PATTERN101:
                        return function(i2, j) {
                            return i2 * j % 2 + i2 * j % 3 == 0;
                        };
                    case QRMaskPattern.PATTERN110:
                        return function(i2, j) {
                            return (i2 * j % 2 + i2 * j % 3) % 2 == 0;
                        };
                    case QRMaskPattern.PATTERN111:
                        return function(i2, j) {
                            return (i2 * j % 3 + (i2 + j) % 2) % 2 == 0;
                        };
                    default:
                        throw "bad maskPattern:" + maskPattern;
                }
            };
            _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
                var a2 = qrPolynomial([
                    1
                ], 0);
                for(var i2 = 0; i2 < errorCorrectLength; i2 += 1)a2 = a2.multiply(qrPolynomial([
                    1,
                    QRMath.gexp(i2)
                ], 0));
                return a2;
            };
            _this.getLengthInBits = function(mode, type) {
                if (1 <= type && type < 10) switch(mode){
                    case QRMode.MODE_NUMBER:
                        return 10;
                    case QRMode.MODE_ALPHA_NUM:
                        return 9;
                    case QRMode.MODE_8BIT_BYTE:
                        return 8;
                    case QRMode.MODE_KANJI:
                        return 8;
                    default:
                        throw "mode:" + mode;
                }
                else if (type < 27) switch(mode){
                    case QRMode.MODE_NUMBER:
                        return 12;
                    case QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw "mode:" + mode;
                }
                else if (type < 41) switch(mode){
                    case QRMode.MODE_NUMBER:
                        return 14;
                    case QRMode.MODE_ALPHA_NUM:
                        return 13;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 12;
                    default:
                        throw "mode:" + mode;
                }
                else throw "type:" + type;
            };
            _this.getLostPoint = function(qrcode4) {
                var moduleCount = qrcode4.getModuleCount();
                var lostPoint = 0;
                for(var row = 0; row < moduleCount; row += 1)for(var col = 0; col < moduleCount; col += 1){
                    var sameCount = 0;
                    var dark = qrcode4.isDark(row, col);
                    for(var r = -1; r <= 1; r += 1){
                        if (row + r < 0 || moduleCount <= row + r) continue;
                        for(var c2 = -1; c2 <= 1; c2 += 1){
                            if (col + c2 < 0 || moduleCount <= col + c2) continue;
                            if (r == 0 && c2 == 0) continue;
                            if (dark == qrcode4.isDark(row + r, col + c2)) sameCount += 1;
                        }
                    }
                    if (sameCount > 5) lostPoint += 3 + sameCount - 5;
                }
                for(var row = 0; row < moduleCount - 1; row += 1)for(var col = 0; col < moduleCount - 1; col += 1){
                    var count = 0;
                    if (qrcode4.isDark(row, col)) count += 1;
                    if (qrcode4.isDark(row + 1, col)) count += 1;
                    if (qrcode4.isDark(row, col + 1)) count += 1;
                    if (qrcode4.isDark(row + 1, col + 1)) count += 1;
                    if (count == 0 || count == 4) lostPoint += 3;
                }
                for(var row = 0; row < moduleCount; row += 1){
                    for(var col = 0; col < moduleCount - 6; col += 1)if (qrcode4.isDark(row, col) && !qrcode4.isDark(row, col + 1) && qrcode4.isDark(row, col + 2) && qrcode4.isDark(row, col + 3) && qrcode4.isDark(row, col + 4) && !qrcode4.isDark(row, col + 5) && qrcode4.isDark(row, col + 6)) lostPoint += 40;
                }
                for(var col = 0; col < moduleCount; col += 1){
                    for(var row = 0; row < moduleCount - 6; row += 1)if (qrcode4.isDark(row, col) && !qrcode4.isDark(row + 1, col) && qrcode4.isDark(row + 2, col) && qrcode4.isDark(row + 3, col) && qrcode4.isDark(row + 4, col) && !qrcode4.isDark(row + 5, col) && qrcode4.isDark(row + 6, col)) lostPoint += 40;
                }
                var darkCount = 0;
                for(var col = 0; col < moduleCount; col += 1){
                    for(var row = 0; row < moduleCount; row += 1)if (qrcode4.isDark(row, col)) darkCount += 1;
                }
                var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
                lostPoint += ratio * 10;
                return lostPoint;
            };
            return _this;
        }();
        var QRMath = function() {
            var EXP_TABLE = new Array(256);
            var LOG_TABLE = new Array(256);
            for(var i2 = 0; i2 < 8; i2 += 1)EXP_TABLE[i2] = 1 << i2;
            for(var i2 = 8; i2 < 256; i2 += 1)EXP_TABLE[i2] = EXP_TABLE[i2 - 4] ^ EXP_TABLE[i2 - 5] ^ EXP_TABLE[i2 - 6] ^ EXP_TABLE[i2 - 8];
            for(var i2 = 0; i2 < 255; i2 += 1)LOG_TABLE[EXP_TABLE[i2]] = i2;
            var _this = {};
            _this.glog = function(n2) {
                if (n2 < 1) throw "glog(" + n2 + ")";
                return LOG_TABLE[n2];
            };
            _this.gexp = function(n2) {
                while(n2 < 0)n2 += 255;
                while(n2 >= 256)n2 -= 255;
                return EXP_TABLE[n2];
            };
            return _this;
        }();
        function qrPolynomial(num, shift) {
            if (typeof num.length == "undefined") throw num.length + "/" + shift;
            var _num = function() {
                var offset = 0;
                while(offset < num.length && num[offset] == 0)offset += 1;
                var _num2 = new Array(num.length - offset + shift);
                for(var i2 = 0; i2 < num.length - offset; i2 += 1)_num2[i2] = num[i2 + offset];
                return _num2;
            }();
            var _this = {};
            _this.getAt = function(index) {
                return _num[index];
            };
            _this.getLength = function() {
                return _num.length;
            };
            _this.multiply = function(e2) {
                var num2 = new Array(_this.getLength() + e2.getLength() - 1);
                for(var i2 = 0; i2 < _this.getLength(); i2 += 1)for(var j = 0; j < e2.getLength(); j += 1)num2[i2 + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i2)) + QRMath.glog(e2.getAt(j)));
                return qrPolynomial(num2, 0);
            };
            _this.mod = function(e2) {
                if (_this.getLength() - e2.getLength() < 0) return _this;
                var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e2.getAt(0));
                var num2 = new Array(_this.getLength());
                for(var i2 = 0; i2 < _this.getLength(); i2 += 1)num2[i2] = _this.getAt(i2);
                for(var i2 = 0; i2 < e2.getLength(); i2 += 1)num2[i2] ^= QRMath.gexp(QRMath.glog(e2.getAt(i2)) + ratio);
                return qrPolynomial(num2, 0).mod(e2);
            };
            return _this;
        }
        var QRRSBlock = function() {
            var RS_BLOCK_TABLE = [
                [
                    1,
                    26,
                    19
                ],
                [
                    1,
                    26,
                    16
                ],
                [
                    1,
                    26,
                    13
                ],
                [
                    1,
                    26,
                    9
                ],
                [
                    1,
                    44,
                    34
                ],
                [
                    1,
                    44,
                    28
                ],
                [
                    1,
                    44,
                    22
                ],
                [
                    1,
                    44,
                    16
                ],
                [
                    1,
                    70,
                    55
                ],
                [
                    1,
                    70,
                    44
                ],
                [
                    2,
                    35,
                    17
                ],
                [
                    2,
                    35,
                    13
                ],
                [
                    1,
                    100,
                    80
                ],
                [
                    2,
                    50,
                    32
                ],
                [
                    2,
                    50,
                    24
                ],
                [
                    4,
                    25,
                    9
                ],
                [
                    1,
                    134,
                    108
                ],
                [
                    2,
                    67,
                    43
                ],
                [
                    2,
                    33,
                    15,
                    2,
                    34,
                    16
                ],
                [
                    2,
                    33,
                    11,
                    2,
                    34,
                    12
                ],
                [
                    2,
                    86,
                    68
                ],
                [
                    4,
                    43,
                    27
                ],
                [
                    4,
                    43,
                    19
                ],
                [
                    4,
                    43,
                    15
                ],
                [
                    2,
                    98,
                    78
                ],
                [
                    4,
                    49,
                    31
                ],
                [
                    2,
                    32,
                    14,
                    4,
                    33,
                    15
                ],
                [
                    4,
                    39,
                    13,
                    1,
                    40,
                    14
                ],
                [
                    2,
                    121,
                    97
                ],
                [
                    2,
                    60,
                    38,
                    2,
                    61,
                    39
                ],
                [
                    4,
                    40,
                    18,
                    2,
                    41,
                    19
                ],
                [
                    4,
                    40,
                    14,
                    2,
                    41,
                    15
                ],
                [
                    2,
                    146,
                    116
                ],
                [
                    3,
                    58,
                    36,
                    2,
                    59,
                    37
                ],
                [
                    4,
                    36,
                    16,
                    4,
                    37,
                    17
                ],
                [
                    4,
                    36,
                    12,
                    4,
                    37,
                    13
                ],
                [
                    2,
                    86,
                    68,
                    2,
                    87,
                    69
                ],
                [
                    4,
                    69,
                    43,
                    1,
                    70,
                    44
                ],
                [
                    6,
                    43,
                    19,
                    2,
                    44,
                    20
                ],
                [
                    6,
                    43,
                    15,
                    2,
                    44,
                    16
                ],
                [
                    4,
                    101,
                    81
                ],
                [
                    1,
                    80,
                    50,
                    4,
                    81,
                    51
                ],
                [
                    4,
                    50,
                    22,
                    4,
                    51,
                    23
                ],
                [
                    3,
                    36,
                    12,
                    8,
                    37,
                    13
                ],
                [
                    2,
                    116,
                    92,
                    2,
                    117,
                    93
                ],
                [
                    6,
                    58,
                    36,
                    2,
                    59,
                    37
                ],
                [
                    4,
                    46,
                    20,
                    6,
                    47,
                    21
                ],
                [
                    7,
                    42,
                    14,
                    4,
                    43,
                    15
                ],
                [
                    4,
                    133,
                    107
                ],
                [
                    8,
                    59,
                    37,
                    1,
                    60,
                    38
                ],
                [
                    8,
                    44,
                    20,
                    4,
                    45,
                    21
                ],
                [
                    12,
                    33,
                    11,
                    4,
                    34,
                    12
                ],
                [
                    3,
                    145,
                    115,
                    1,
                    146,
                    116
                ],
                [
                    4,
                    64,
                    40,
                    5,
                    65,
                    41
                ],
                [
                    11,
                    36,
                    16,
                    5,
                    37,
                    17
                ],
                [
                    11,
                    36,
                    12,
                    5,
                    37,
                    13
                ],
                [
                    5,
                    109,
                    87,
                    1,
                    110,
                    88
                ],
                [
                    5,
                    65,
                    41,
                    5,
                    66,
                    42
                ],
                [
                    5,
                    54,
                    24,
                    7,
                    55,
                    25
                ],
                [
                    11,
                    36,
                    12,
                    7,
                    37,
                    13
                ],
                [
                    5,
                    122,
                    98,
                    1,
                    123,
                    99
                ],
                [
                    7,
                    73,
                    45,
                    3,
                    74,
                    46
                ],
                [
                    15,
                    43,
                    19,
                    2,
                    44,
                    20
                ],
                [
                    3,
                    45,
                    15,
                    13,
                    46,
                    16
                ],
                [
                    1,
                    135,
                    107,
                    5,
                    136,
                    108
                ],
                [
                    10,
                    74,
                    46,
                    1,
                    75,
                    47
                ],
                [
                    1,
                    50,
                    22,
                    15,
                    51,
                    23
                ],
                [
                    2,
                    42,
                    14,
                    17,
                    43,
                    15
                ],
                [
                    5,
                    150,
                    120,
                    1,
                    151,
                    121
                ],
                [
                    9,
                    69,
                    43,
                    4,
                    70,
                    44
                ],
                [
                    17,
                    50,
                    22,
                    1,
                    51,
                    23
                ],
                [
                    2,
                    42,
                    14,
                    19,
                    43,
                    15
                ],
                [
                    3,
                    141,
                    113,
                    4,
                    142,
                    114
                ],
                [
                    3,
                    70,
                    44,
                    11,
                    71,
                    45
                ],
                [
                    17,
                    47,
                    21,
                    4,
                    48,
                    22
                ],
                [
                    9,
                    39,
                    13,
                    16,
                    40,
                    14
                ],
                [
                    3,
                    135,
                    107,
                    5,
                    136,
                    108
                ],
                [
                    3,
                    67,
                    41,
                    13,
                    68,
                    42
                ],
                [
                    15,
                    54,
                    24,
                    5,
                    55,
                    25
                ],
                [
                    15,
                    43,
                    15,
                    10,
                    44,
                    16
                ],
                [
                    4,
                    144,
                    116,
                    4,
                    145,
                    117
                ],
                [
                    17,
                    68,
                    42
                ],
                [
                    17,
                    50,
                    22,
                    6,
                    51,
                    23
                ],
                [
                    19,
                    46,
                    16,
                    6,
                    47,
                    17
                ],
                [
                    2,
                    139,
                    111,
                    7,
                    140,
                    112
                ],
                [
                    17,
                    74,
                    46
                ],
                [
                    7,
                    54,
                    24,
                    16,
                    55,
                    25
                ],
                [
                    34,
                    37,
                    13
                ],
                [
                    4,
                    151,
                    121,
                    5,
                    152,
                    122
                ],
                [
                    4,
                    75,
                    47,
                    14,
                    76,
                    48
                ],
                [
                    11,
                    54,
                    24,
                    14,
                    55,
                    25
                ],
                [
                    16,
                    45,
                    15,
                    14,
                    46,
                    16
                ],
                [
                    6,
                    147,
                    117,
                    4,
                    148,
                    118
                ],
                [
                    6,
                    73,
                    45,
                    14,
                    74,
                    46
                ],
                [
                    11,
                    54,
                    24,
                    16,
                    55,
                    25
                ],
                [
                    30,
                    46,
                    16,
                    2,
                    47,
                    17
                ],
                [
                    8,
                    132,
                    106,
                    4,
                    133,
                    107
                ],
                [
                    8,
                    75,
                    47,
                    13,
                    76,
                    48
                ],
                [
                    7,
                    54,
                    24,
                    22,
                    55,
                    25
                ],
                [
                    22,
                    45,
                    15,
                    13,
                    46,
                    16
                ],
                [
                    10,
                    142,
                    114,
                    2,
                    143,
                    115
                ],
                [
                    19,
                    74,
                    46,
                    4,
                    75,
                    47
                ],
                [
                    28,
                    50,
                    22,
                    6,
                    51,
                    23
                ],
                [
                    33,
                    46,
                    16,
                    4,
                    47,
                    17
                ],
                [
                    8,
                    152,
                    122,
                    4,
                    153,
                    123
                ],
                [
                    22,
                    73,
                    45,
                    3,
                    74,
                    46
                ],
                [
                    8,
                    53,
                    23,
                    26,
                    54,
                    24
                ],
                [
                    12,
                    45,
                    15,
                    28,
                    46,
                    16
                ],
                [
                    3,
                    147,
                    117,
                    10,
                    148,
                    118
                ],
                [
                    3,
                    73,
                    45,
                    23,
                    74,
                    46
                ],
                [
                    4,
                    54,
                    24,
                    31,
                    55,
                    25
                ],
                [
                    11,
                    45,
                    15,
                    31,
                    46,
                    16
                ],
                [
                    7,
                    146,
                    116,
                    7,
                    147,
                    117
                ],
                [
                    21,
                    73,
                    45,
                    7,
                    74,
                    46
                ],
                [
                    1,
                    53,
                    23,
                    37,
                    54,
                    24
                ],
                [
                    19,
                    45,
                    15,
                    26,
                    46,
                    16
                ],
                [
                    5,
                    145,
                    115,
                    10,
                    146,
                    116
                ],
                [
                    19,
                    75,
                    47,
                    10,
                    76,
                    48
                ],
                [
                    15,
                    54,
                    24,
                    25,
                    55,
                    25
                ],
                [
                    23,
                    45,
                    15,
                    25,
                    46,
                    16
                ],
                [
                    13,
                    145,
                    115,
                    3,
                    146,
                    116
                ],
                [
                    2,
                    74,
                    46,
                    29,
                    75,
                    47
                ],
                [
                    42,
                    54,
                    24,
                    1,
                    55,
                    25
                ],
                [
                    23,
                    45,
                    15,
                    28,
                    46,
                    16
                ],
                [
                    17,
                    145,
                    115
                ],
                [
                    10,
                    74,
                    46,
                    23,
                    75,
                    47
                ],
                [
                    10,
                    54,
                    24,
                    35,
                    55,
                    25
                ],
                [
                    19,
                    45,
                    15,
                    35,
                    46,
                    16
                ],
                [
                    17,
                    145,
                    115,
                    1,
                    146,
                    116
                ],
                [
                    14,
                    74,
                    46,
                    21,
                    75,
                    47
                ],
                [
                    29,
                    54,
                    24,
                    19,
                    55,
                    25
                ],
                [
                    11,
                    45,
                    15,
                    46,
                    46,
                    16
                ],
                [
                    13,
                    145,
                    115,
                    6,
                    146,
                    116
                ],
                [
                    14,
                    74,
                    46,
                    23,
                    75,
                    47
                ],
                [
                    44,
                    54,
                    24,
                    7,
                    55,
                    25
                ],
                [
                    59,
                    46,
                    16,
                    1,
                    47,
                    17
                ],
                [
                    12,
                    151,
                    121,
                    7,
                    152,
                    122
                ],
                [
                    12,
                    75,
                    47,
                    26,
                    76,
                    48
                ],
                [
                    39,
                    54,
                    24,
                    14,
                    55,
                    25
                ],
                [
                    22,
                    45,
                    15,
                    41,
                    46,
                    16
                ],
                [
                    6,
                    151,
                    121,
                    14,
                    152,
                    122
                ],
                [
                    6,
                    75,
                    47,
                    34,
                    76,
                    48
                ],
                [
                    46,
                    54,
                    24,
                    10,
                    55,
                    25
                ],
                [
                    2,
                    45,
                    15,
                    64,
                    46,
                    16
                ],
                [
                    17,
                    152,
                    122,
                    4,
                    153,
                    123
                ],
                [
                    29,
                    74,
                    46,
                    14,
                    75,
                    47
                ],
                [
                    49,
                    54,
                    24,
                    10,
                    55,
                    25
                ],
                [
                    24,
                    45,
                    15,
                    46,
                    46,
                    16
                ],
                [
                    4,
                    152,
                    122,
                    18,
                    153,
                    123
                ],
                [
                    13,
                    74,
                    46,
                    32,
                    75,
                    47
                ],
                [
                    48,
                    54,
                    24,
                    14,
                    55,
                    25
                ],
                [
                    42,
                    45,
                    15,
                    32,
                    46,
                    16
                ],
                [
                    20,
                    147,
                    117,
                    4,
                    148,
                    118
                ],
                [
                    40,
                    75,
                    47,
                    7,
                    76,
                    48
                ],
                [
                    43,
                    54,
                    24,
                    22,
                    55,
                    25
                ],
                [
                    10,
                    45,
                    15,
                    67,
                    46,
                    16
                ],
                [
                    19,
                    148,
                    118,
                    6,
                    149,
                    119
                ],
                [
                    18,
                    75,
                    47,
                    31,
                    76,
                    48
                ],
                [
                    34,
                    54,
                    24,
                    34,
                    55,
                    25
                ],
                [
                    20,
                    45,
                    15,
                    61,
                    46,
                    16
                ]
            ];
            var qrRSBlock = function(totalCount, dataCount) {
                var _this2 = {};
                _this2.totalCount = totalCount;
                _this2.dataCount = dataCount;
                return _this2;
            };
            var _this = {};
            var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {
                switch(errorCorrectionLevel){
                    case QRErrorCorrectionLevel.L:
                        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
                    case QRErrorCorrectionLevel.M:
                        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
                    case QRErrorCorrectionLevel.Q:
                        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
                    case QRErrorCorrectionLevel.H:
                        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
                    default:
                        return void 0;
                }
            };
            _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {
                var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);
                if (typeof rsBlock == "undefined") throw "bad rs block @ typeNumber:" + typeNumber + "/errorCorrectionLevel:" + errorCorrectionLevel;
                var length = rsBlock.length / 3;
                var list = [];
                for(var i2 = 0; i2 < length; i2 += 1){
                    var count = rsBlock[i2 * 3 + 0];
                    var totalCount = rsBlock[i2 * 3 + 1];
                    var dataCount = rsBlock[i2 * 3 + 2];
                    for(var j = 0; j < count; j += 1)list.push(qrRSBlock(totalCount, dataCount));
                }
                return list;
            };
            return _this;
        }();
        var qrBitBuffer = function() {
            var _buffer = [];
            var _length = 0;
            var _this = {};
            _this.getBuffer = function() {
                return _buffer;
            };
            _this.getAt = function(index) {
                var bufIndex = Math.floor(index / 8);
                return (_buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
            };
            _this.put = function(num, length) {
                for(var i2 = 0; i2 < length; i2 += 1)_this.putBit((num >>> length - i2 - 1 & 1) == 1);
            };
            _this.getLengthInBits = function() {
                return _length;
            };
            _this.putBit = function(bit) {
                var bufIndex = Math.floor(_length / 8);
                if (_buffer.length <= bufIndex) _buffer.push(0);
                if (bit) _buffer[bufIndex] |= 128 >>> _length % 8;
                _length += 1;
            };
            return _this;
        };
        var qrNumber = function(data) {
            var _mode = QRMode.MODE_NUMBER;
            var _data = data;
            var _this = {};
            _this.getMode = function() {
                return _mode;
            };
            _this.getLength = function(buffer) {
                return _data.length;
            };
            _this.write = function(buffer) {
                var data2 = _data;
                var i2 = 0;
                while(i2 + 2 < data2.length){
                    buffer.put(strToNum(data2.substring(i2, i2 + 3)), 10);
                    i2 += 3;
                }
                if (i2 < data2.length) {
                    if (data2.length - i2 == 1) buffer.put(strToNum(data2.substring(i2, i2 + 1)), 4);
                    else if (data2.length - i2 == 2) buffer.put(strToNum(data2.substring(i2, i2 + 2)), 7);
                }
            };
            var strToNum = function(s2) {
                var num = 0;
                for(var i2 = 0; i2 < s2.length; i2 += 1)num = num * 10 + chatToNum(s2.charAt(i2));
                return num;
            };
            var chatToNum = function(c2) {
                if ("0" <= c2 && c2 <= "9") return c2.charCodeAt(0) - "0".charCodeAt(0);
                throw "illegal char :" + c2;
            };
            return _this;
        };
        var qrAlphaNum = function(data) {
            var _mode = QRMode.MODE_ALPHA_NUM;
            var _data = data;
            var _this = {};
            _this.getMode = function() {
                return _mode;
            };
            _this.getLength = function(buffer) {
                return _data.length;
            };
            _this.write = function(buffer) {
                var s2 = _data;
                var i2 = 0;
                while(i2 + 1 < s2.length){
                    buffer.put(getCode(s2.charAt(i2)) * 45 + getCode(s2.charAt(i2 + 1)), 11);
                    i2 += 2;
                }
                if (i2 < s2.length) buffer.put(getCode(s2.charAt(i2)), 6);
            };
            var getCode = function(c2) {
                if ("0" <= c2 && c2 <= "9") return c2.charCodeAt(0) - "0".charCodeAt(0);
                else if ("A" <= c2 && c2 <= "Z") return c2.charCodeAt(0) - "A".charCodeAt(0) + 10;
                else switch(c2){
                    case " ":
                        return 36;
                    case "$":
                        return 37;
                    case "%":
                        return 38;
                    case "*":
                        return 39;
                    case "+":
                        return 40;
                    case "-":
                        return 41;
                    case ".":
                        return 42;
                    case "/":
                        return 43;
                    case ":":
                        return 44;
                    default:
                        throw "illegal char :" + c2;
                }
            };
            return _this;
        };
        var qr8BitByte = function(data) {
            var _mode = QRMode.MODE_8BIT_BYTE;
            var _bytes = qrcode3.stringToBytes(data);
            var _this = {};
            _this.getMode = function() {
                return _mode;
            };
            _this.getLength = function(buffer) {
                return _bytes.length;
            };
            _this.write = function(buffer) {
                for(var i2 = 0; i2 < _bytes.length; i2 += 1)buffer.put(_bytes[i2], 8);
            };
            return _this;
        };
        var qrKanji = function(data) {
            var _mode = QRMode.MODE_KANJI;
            var stringToBytes = qrcode3.stringToBytesFuncs["SJIS"];
            if (!stringToBytes) throw "sjis not supported.";
            !function(c2, code) {
                var test = stringToBytes(c2);
                if (test.length != 2 || (test[0] << 8 | test[1]) != code) throw "sjis not supported.";
            }("\u53CB", 38726);
            var _bytes = stringToBytes(data);
            var _this = {};
            _this.getMode = function() {
                return _mode;
            };
            _this.getLength = function(buffer) {
                return ~~(_bytes.length / 2);
            };
            _this.write = function(buffer) {
                var data2 = _bytes;
                var i2 = 0;
                while(i2 + 1 < data2.length){
                    var c2 = (255 & data2[i2]) << 8 | 255 & data2[i2 + 1];
                    if (33088 <= c2 && c2 <= 40956) c2 -= 33088;
                    else if (57408 <= c2 && c2 <= 60351) c2 -= 49472;
                    else throw "illegal char at " + (i2 + 1) + "/" + c2;
                    c2 = (c2 >>> 8 & 255) * 192 + (c2 & 255);
                    buffer.put(c2, 13);
                    i2 += 2;
                }
                if (i2 < data2.length) throw "illegal char at " + (i2 + 1);
            };
            return _this;
        };
        var byteArrayOutputStream = function() {
            var _bytes = [];
            var _this = {};
            _this.writeByte = function(b) {
                _bytes.push(b & 255);
            };
            _this.writeShort = function(i2) {
                _this.writeByte(i2);
                _this.writeByte(i2 >>> 8);
            };
            _this.writeBytes = function(b, off, len) {
                off = off || 0;
                len = len || b.length;
                for(var i2 = 0; i2 < len; i2 += 1)_this.writeByte(b[i2 + off]);
            };
            _this.writeString = function(s2) {
                for(var i2 = 0; i2 < s2.length; i2 += 1)_this.writeByte(s2.charCodeAt(i2));
            };
            _this.toByteArray = function() {
                return _bytes;
            };
            _this.toString = function() {
                var s2 = "";
                s2 += "[";
                for(var i2 = 0; i2 < _bytes.length; i2 += 1){
                    if (i2 > 0) s2 += ",";
                    s2 += _bytes[i2];
                }
                s2 += "]";
                return s2;
            };
            return _this;
        };
        var base64EncodeOutputStream = function() {
            var _buffer = 0;
            var _buflen = 0;
            var _length = 0;
            var _base64 = "";
            var _this = {};
            var writeEncoded = function(b) {
                _base64 += String.fromCharCode(encode(b & 63));
            };
            var encode = function(n2) {
                if (n2 < 0) ;
                else if (n2 < 26) return 65 + n2;
                else if (n2 < 52) return 97 + (n2 - 26);
                else if (n2 < 62) return 48 + (n2 - 52);
                else if (n2 == 62) return 43;
                else if (n2 == 63) return 47;
                throw "n:" + n2;
            };
            _this.writeByte = function(n2) {
                _buffer = _buffer << 8 | n2 & 255;
                _buflen += 8;
                _length += 1;
                while(_buflen >= 6){
                    writeEncoded(_buffer >>> _buflen - 6);
                    _buflen -= 6;
                }
            };
            _this.flush = function() {
                if (_buflen > 0) {
                    writeEncoded(_buffer << 6 - _buflen);
                    _buffer = 0;
                    _buflen = 0;
                }
                if (_length % 3 != 0) {
                    var padlen = 3 - _length % 3;
                    for(var i2 = 0; i2 < padlen; i2 += 1)_base64 += "=";
                }
            };
            _this.toString = function() {
                return _base64;
            };
            return _this;
        };
        var base64DecodeInputStream = function(str) {
            var _str = str;
            var _pos = 0;
            var _buffer = 0;
            var _buflen = 0;
            var _this = {};
            _this.read = function() {
                while(_buflen < 8){
                    if (_pos >= _str.length) {
                        if (_buflen == 0) return -1;
                        throw "unexpected end of file./" + _buflen;
                    }
                    var c2 = _str.charAt(_pos);
                    _pos += 1;
                    if (c2 == "=") {
                        _buflen = 0;
                        return -1;
                    } else if (c2.match(/^\s$/)) continue;
                    _buffer = _buffer << 6 | decode(c2.charCodeAt(0));
                    _buflen += 6;
                }
                var n2 = _buffer >>> _buflen - 8 & 255;
                _buflen -= 8;
                return n2;
            };
            var decode = function(c2) {
                if (65 <= c2 && c2 <= 90) return c2 - 65;
                else if (97 <= c2 && c2 <= 122) return c2 - 97 + 26;
                else if (48 <= c2 && c2 <= 57) return c2 - 48 + 52;
                else if (c2 == 43) return 62;
                else if (c2 == 47) return 63;
                else throw "c:" + c2;
            };
            return _this;
        };
        var gifImage = function(width, height) {
            var _width = width;
            var _height = height;
            var _data = new Array(width * height);
            var _this = {};
            _this.setPixel = function(x, y, pixel) {
                _data[y * _width + x] = pixel;
            };
            _this.write = function(out) {
                out.writeString("GIF87a");
                out.writeShort(_width);
                out.writeShort(_height);
                out.writeByte(128);
                out.writeByte(0);
                out.writeByte(0);
                out.writeByte(0);
                out.writeByte(0);
                out.writeByte(0);
                out.writeByte(255);
                out.writeByte(255);
                out.writeByte(255);
                out.writeString(",");
                out.writeShort(0);
                out.writeShort(0);
                out.writeShort(_width);
                out.writeShort(_height);
                out.writeByte(0);
                var lzwMinCodeSize = 2;
                var raster = getLZWRaster(lzwMinCodeSize);
                out.writeByte(lzwMinCodeSize);
                var offset = 0;
                while(raster.length - offset > 255){
                    out.writeByte(255);
                    out.writeBytes(raster, offset, 255);
                    offset += 255;
                }
                out.writeByte(raster.length - offset);
                out.writeBytes(raster, offset, raster.length - offset);
                out.writeByte(0);
                out.writeString(";");
            };
            var bitOutputStream = function(out) {
                var _out = out;
                var _bitLength = 0;
                var _bitBuffer = 0;
                var _this2 = {};
                _this2.write = function(data, length) {
                    if (data >>> length != 0) throw "length over";
                    while(_bitLength + length >= 8){
                        _out.writeByte(255 & (data << _bitLength | _bitBuffer));
                        length -= 8 - _bitLength;
                        data >>>= 8 - _bitLength;
                        _bitBuffer = 0;
                        _bitLength = 0;
                    }
                    _bitBuffer = data << _bitLength | _bitBuffer;
                    _bitLength = _bitLength + length;
                };
                _this2.flush = function() {
                    if (_bitLength > 0) _out.writeByte(_bitBuffer);
                };
                return _this2;
            };
            var getLZWRaster = function(lzwMinCodeSize) {
                var clearCode = 1 << lzwMinCodeSize;
                var endCode = (1 << lzwMinCodeSize) + 1;
                var bitLength = lzwMinCodeSize + 1;
                var table = lzwTable();
                for(var i2 = 0; i2 < clearCode; i2 += 1)table.add(String.fromCharCode(i2));
                table.add(String.fromCharCode(clearCode));
                table.add(String.fromCharCode(endCode));
                var byteOut = byteArrayOutputStream();
                var bitOut = bitOutputStream(byteOut);
                bitOut.write(clearCode, bitLength);
                var dataIndex = 0;
                var s2 = String.fromCharCode(_data[dataIndex]);
                dataIndex += 1;
                while(dataIndex < _data.length){
                    var c2 = String.fromCharCode(_data[dataIndex]);
                    dataIndex += 1;
                    if (table.contains(s2 + c2)) s2 = s2 + c2;
                    else {
                        bitOut.write(table.indexOf(s2), bitLength);
                        if (table.size() < 4095) {
                            if (table.size() == 1 << bitLength) bitLength += 1;
                            table.add(s2 + c2);
                        }
                        s2 = c2;
                    }
                }
                bitOut.write(table.indexOf(s2), bitLength);
                bitOut.write(endCode, bitLength);
                bitOut.flush();
                return byteOut.toByteArray();
            };
            var lzwTable = function() {
                var _map = {};
                var _size = 0;
                var _this2 = {};
                _this2.add = function(key) {
                    if (_this2.contains(key)) throw "dup key:" + key;
                    _map[key] = _size;
                    _size += 1;
                };
                _this2.size = function() {
                    return _size;
                };
                _this2.indexOf = function(key) {
                    return _map[key];
                };
                _this2.contains = function(key) {
                    return typeof _map[key] != "undefined";
                };
                return _this2;
            };
            return _this;
        };
        var createDataURL = function(width, height, getPixel) {
            var gif = gifImage(width, height);
            for(var y = 0; y < height; y += 1)for(var x = 0; x < width; x += 1)gif.setPixel(x, y, getPixel(x, y));
            var b = byteArrayOutputStream();
            gif.write(b);
            var base64 = base64EncodeOutputStream();
            var bytes = b.toByteArray();
            for(var i2 = 0; i2 < bytes.length; i2 += 1)base64.writeByte(bytes[i2]);
            base64.flush();
            return "data:image/gif;base64," + base64;
        };
        return qrcode3;
    }();
    !function() {
        qrcode2.stringToBytesFuncs["UTF-8"] = function(s2) {
            function toUTF8Array(str) {
                var utf8 = [];
                for(var i2 = 0; i2 < str.length; i2++){
                    var charcode = str.charCodeAt(i2);
                    if (charcode < 128) utf8.push(charcode);
                    else if (charcode < 2048) utf8.push(192 | charcode >> 6, 128 | charcode & 63);
                    else if (charcode < 55296 || charcode >= 57344) utf8.push(224 | charcode >> 12, 128 | charcode >> 6 & 63, 128 | charcode & 63);
                    else {
                        i2++;
                        charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i2) & 1023);
                        utf8.push(240 | charcode >> 18, 128 | charcode >> 12 & 63, 128 | charcode >> 6 & 63, 128 | charcode & 63);
                    }
                }
                return utf8;
            }
            return toUTF8Array(s2);
        };
    }();
    (function(factory) {
        module.exports = factory();
    })(function() {
        return qrcode2;
    });
})(qrcode$1);
const qrcode = qrcode$1.exports;
function copyToClipboard(text) {
    return __async(this, null, function*() {
        try {
            if (!(navigator == null ? void 0 : navigator.clipboard)) throw new TonConnectUIError("Clipboard API not available");
            return yield navigator.clipboard.writeText(text);
        } catch (e2) {}
        fallbackCopyTextToClipboard(text);
    });
}
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand("copy");
    } finally{
        document.body.removeChild(textArea);
    }
}
const _tmpl$$s = /* @__PURE__ */ template$1(`<div></div>`);
const QRCode = (props)=>{
    let qrCodeCanvasRef;
    let qrCodeWrapperRef;
    let imageRef;
    const [copyButtonOpened, setCopyButtonOpened] = createSignal(false);
    const [picSize, setPicSize] = createSignal(picSizeDefault);
    createEffect(()=>{
        const errorCorrectionLevel = "L";
        const cellSize = 4;
        const qr = qrcode(0, errorCorrectionLevel);
        qr.addData(props.sourceUrl);
        qr.make();
        qrCodeCanvasRef.innerHTML = qr.createSvgTag(cellSize, 0);
        const qrSize = qrCodeCanvasRef.firstElementChild.clientWidth;
        const scale = Math.round(qrNormalSize / qrSize * 1e5) / 1e5;
        if (imageRef) {
            const imgSize = Math.ceil(imgSizeDefault / (scale * cellSize)) * cellSize;
            const imgOffset = toPx(Math.ceil((qrSize - imgSize) / (2 * cellSize)) * cellSize);
            imageRef.style.top = imgOffset;
            imageRef.style.left = imgOffset;
            imageRef.style.height = toPx(imgSize);
            imageRef.style.width = toPx(imgSize);
            setPicSize(Math.round(picSizeDefault / scale));
        }
        qrCodeWrapperRef.style.transform = `scale(${scale})`;
    });
    let timeoutId = null;
    const onCopyClick = ()=>{
        setCopyButtonOpened(true);
        copyToClipboard(props.sourceUrl);
        if (timeoutId != null) clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>setCopyButtonOpened(false), 1500);
    };
    return createComponent(QrCodeBackground, {
        get ["class"] () {
            return props.class;
        },
        onClick: onCopyClick,
        get children () {
            return [
                createComponent(QrCodeWrapper$2, {
                    ref (r$) {
                        const _ref$ = qrCodeWrapperRef;
                        typeof _ref$ === "function" ? _ref$(r$) : qrCodeWrapperRef = r$;
                    },
                    get children () {
                        return [
                            (()=>{
                                const _el$ = _tmpl$$s.cloneNode(true);
                                const _ref$2 = qrCodeCanvasRef;
                                typeof _ref$2 === "function" ? use(_ref$2, _el$) : qrCodeCanvasRef = _el$;
                                return _el$;
                            })(),
                            createComponent(Show, {
                                get when () {
                                    return props.imageUrl;
                                },
                                get children () {
                                    return createComponent(ImageBackground, {
                                        ref (r$) {
                                            const _ref$3 = imageRef;
                                            typeof _ref$3 === "function" ? _ref$3(r$) : imageRef = r$;
                                        },
                                        get children () {
                                            return createComponent(ImageStyled$3, {
                                                get src () {
                                                    return props.imageUrl;
                                                },
                                                alt: "",
                                                get size () {
                                                    return picSize();
                                                }
                                            });
                                        }
                                    });
                                }
                            })
                        ];
                    }
                }),
                createComponent(Transition, {
                    onBeforeEnter: (el)=>{
                        animate(el, [
                            {
                                opacity: 0,
                                transform: "translate(-50%, 44px)"
                            },
                            {
                                opacity: 1,
                                transform: "translate(-50%, 0)"
                            }
                        ], {
                            duration: 150,
                            easing: "ease-out"
                        });
                    },
                    onExit: (el, done)=>{
                        animate(el, [
                            {
                                opacity: 1,
                                transform: "translate(-50%, 0)"
                            },
                            {
                                opacity: 0,
                                transform: "translate(-50%, 44px)"
                            }
                        ], {
                            duration: 150,
                            easing: "ease-out"
                        }).finished.then(()=>{
                            done();
                        });
                    },
                    get children () {
                        return createComponent(Show, {
                            get when () {
                                return copyButtonOpened() && !props.disableCopy;
                            },
                            get children () {
                                return createComponent(CopiedBoxStyled, {
                                    get children () {
                                        return [
                                            createComponent(SuccessIcon, {
                                                size: "xs"
                                            }),
                                            createComponent(Text, {
                                                translationKey: "common.linkCopied",
                                                children: "Link Copied"
                                            })
                                        ];
                                    }
                                });
                            }
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return !props.disableCopy;
                    },
                    get children () {
                        return createComponent(CopyIconButton, {
                            get children () {
                                return createComponent(CopyLightIcon, {});
                            }
                        });
                    }
                })
            ];
        }
    });
};
var deepReadObject = (obj, path, defaultValue)=>{
    const value = path.trim().split(".").reduce((a2, b)=>a2 ? a2[b] : void 0, obj);
    return value !== void 0 ? value : defaultValue;
};
var template = (str, params, reg = /{{(.*?)}}/g)=>str.replace(reg, (_, key)=>deepReadObject(params, key, ""));
var createI18nContext = (init = {}, lang = navigator.language in init ? navigator.language : Object.keys(init)[0])=>{
    const [locale, setLocale] = createSignal(lang);
    const [dict, setDict] = createStore(init);
    const translate = (key, params, defaultValue)=>{
        const val = deepReadObject(dict[locale()], key, defaultValue || "");
        if (typeof val === "function") return val(params);
        if (typeof val === "string") return template(val, params || {});
        return val;
    };
    const actions = {
        add (lang2, table) {
            setDict(lang2, (t2)=>Object.assign(t2 || {}, table));
        },
        locale: (lang2)=>lang2 ? setLocale(lang2) : locale(),
        dict: (lang2)=>deepReadObject(dict, lang2)
    };
    return [
        translate,
        actions
    ];
};
var I18nContext = createContext({});
var useI18n = ()=>useContext(I18nContext);
const TextStyled$3 = styled.div`
    font-style: normal;
    font-weight: ${(props)=>props.fontWeight};
    font-size: ${(props)=>props.fontSize};
    line-height: ${(props)=>props.lineHeight};

    color: ${(props)=>props.color};
`;
const Text = (inputs)=>{
    const theme = useTheme();
    const [t2] = useI18n();
    let textRef;
    const color = ()=>inputs.color || theme.colors.text.primary;
    const props = mergeProps({
        fontSize: "14px",
        fontWeight: "510",
        lineHeight: "130%"
    }, inputs);
    createEffect(()=>{
        if (!textRef) return;
        if (props.cursor === "unset") return;
        if (getComputedStyle(textRef).cursor !== "pointer") textRef.style.cursor = "default";
    });
    return createComponent(TextStyled$3, {
        get fontSize () {
            return props.fontSize;
        },
        get fontWeight () {
            return props.fontWeight;
        },
        get lineHeight () {
            return props.lineHeight;
        },
        get color () {
            return color();
        },
        get ["class"] () {
            return props.class;
        },
        ref (r$) {
            const _ref$ = textRef;
            typeof _ref$ === "function" ? _ref$(r$) : textRef = r$;
        },
        "data-tc-text": "true",
        get children () {
            var _a2;
            return createMemo(()=>!!props.translationKey)() ? t2(props.translationKey, props.translationValues, (_a2 = props.children) == null ? void 0 : _a2.toString()) : props.children;
        }
    });
};
const ImageContainer = styled.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`;
const ImageStyled$2 = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;
const WalletImage = (props)=>{
    return createComponent(ImageContainer, {
        get ["class"] () {
            return props.class;
        },
        get children () {
            return createComponent(ImageStyled$2, {
                get src () {
                    return props.src;
                }
            });
        }
    });
};
const borders$3 = {
    m: "16px",
    s: "12px",
    none: "0"
};
const badgeBorders = {
    m: "6px",
    s: "6px",
    none: "0"
};
const WalletItemStyled = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${media("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${mediaTouch} {
        &:active {
            transform: scale(0.92);
        }
    }
`;
const ImageStyled$1 = styled(WalletImage)`
    width: 60px;
    height: 60px;
    border-radius: ${(props)=>borders$3[props.theme.borderRadius]};

    margin-bottom: 8px;
`;
const BadgeStyled = styled(Image)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${(props)=>badgeBorders[props.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`;
const StyledText = styled(Text)`
    max-width: 90px;
    font-weight: 590;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${media("mobile")} {
        max-width: 80px;
    }
`;
const StyledSecondLine = styled(Text)`
    font-weight: 510;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${(props)=>props.colorPrimary ? props.theme.colors.text.primary : props.theme.colors.text.secondary};

    ${media("mobile")} {
        max-width: 80px;
    }
`;
const WalletItem = (props)=>{
    return createComponent(WalletItemStyled, {
        get ["class"] () {
            return props.class;
        },
        onClick: ()=>props.onClick(),
        "data-tc-wallet-item": "true",
        get children () {
            return [
                createMemo(()=>createMemo(()=>typeof props.icon === "string")() ? createComponent(ImageStyled$1, {
                        get src () {
                            return props.icon;
                        }
                    }) : props.icon),
                createMemo(()=>createMemo(()=>!!props.badgeUrl)() && createComponent(BadgeStyled, {
                        get src () {
                            return props.badgeUrl;
                        }
                    })),
                createComponent(StyledText, {
                    get children () {
                        return props.name;
                    }
                }),
                createMemo(()=>createMemo(()=>!!props.secondLine)() && createComponent(StyledSecondLine, {
                        get colorPrimary () {
                            var _a2;
                            return (_a2 = props.secondLineColorPrimary) != null ? _a2 : true;
                        },
                        get children () {
                            return props.secondLine;
                        }
                    }))
            ];
        }
    });
};
const H1Styled$9 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${(props)=>props.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`;
const H1 = (props)=>{
    const [t2] = useI18n();
    return createComponent(H1Styled$9, {
        get ["class"] () {
            return props.class;
        },
        "data-tc-h1": "true",
        get children () {
            var _a2;
            return createMemo(()=>!!props.translationKey)() ? t2(props.translationKey, props.translationValues, (_a2 = props.children) == null ? void 0 : _a2.toString()) : props.children;
        }
    });
};
const H2Styled$5 = styled.h2`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${(props)=>props.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`;
const H2 = (props)=>{
    const [t2] = useI18n();
    return createComponent(H2Styled$5, {
        get ["class"] () {
            return props.class;
        },
        "data-tc-h2": "true",
        get children () {
            var _a2;
            return createMemo(()=>!!props.translationKey)() ? t2(props.translationKey, props.translationValues, (_a2 = props.children) == null ? void 0 : _a2.toString()) : props.children;
        }
    });
};
const H3Styled$1 = styled.h3`
    font-style: normal;
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;

    color: ${(props)=>props.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`;
const H3 = (props)=>{
    const [t2] = useI18n();
    return createComponent(H3Styled$1, {
        "data-tc-h3": "true",
        get ["class"] () {
            return props.class;
        },
        get children () {
            var _a2;
            return createMemo(()=>!!props.translationKey)() ? t2(props.translationKey, props.translationValues, (_a2 = props.children) == null ? void 0 : _a2.toString()) : props.children;
        }
    });
};
const _tmpl$$r = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>`);
const LongArrowIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$r.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = fill(), _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "fill", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$q = /* @__PURE__ */ template$1(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>`);
const TonIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.primary;
    return (()=>{
        const _el$ = _tmpl$$q.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$p = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>`), _tmpl$2$3 = /* @__PURE__ */ template$1(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>`), _tmpl$3$2 = /* @__PURE__ */ template$1(`<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>`);
const SuccessIcon = (props)=>{
    const theme = useTheme();
    const size = ()=>props.size || "s";
    const fill = ()=>props.fill || theme.colors.icon.success;
    return createMemo((()=>{
        const _c$ = createMemo(()=>size() === "xs");
        return ()=>_c$() ? (()=>{
                const _el$ = _tmpl$$p.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
                createRenderEffect((_p$)=>{
                    const _v$ = props.class, _v$2 = fill(), _v$3 = theme.colors.constant.white;
                    _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
                    _v$2 !== _p$._v$2 && setAttribute(_el$3, "fill", _p$._v$2 = _v$2);
                    _v$3 !== _p$._v$3 && setAttribute(_el$4, "stroke", _p$._v$3 = _v$3);
                    return _p$;
                }, {
                    _v$: void 0,
                    _v$2: void 0,
                    _v$3: void 0
                });
                return _el$;
            })() : (()=>{
                const _c$2 = createMemo(()=>size() === "s");
                return ()=>_c$2() ? (()=>{
                        const _el$5 = _tmpl$2$3.cloneNode(true), _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
                        createRenderEffect((_p$)=>{
                            const _v$4 = props.class, _v$5 = fill(), _v$6 = theme.colors.constant.white;
                            _v$4 !== _p$._v$4 && setAttribute(_el$5, "class", _p$._v$4 = _v$4);
                            _v$5 !== _p$._v$5 && setAttribute(_el$6, "fill", _p$._v$5 = _v$5);
                            _v$6 !== _p$._v$6 && setAttribute(_el$7, "fill", _p$._v$6 = _v$6);
                            return _p$;
                        }, {
                            _v$4: void 0,
                            _v$5: void 0,
                            _v$6: void 0
                        });
                        return _el$5;
                    })() : (()=>{
                        const _el$8 = _tmpl$3$2.cloneNode(true), _el$9 = _el$8.firstChild, _el$10 = _el$9.nextSibling;
                        createRenderEffect((_p$)=>{
                            const _v$7 = props.class, _v$8 = fill(), _v$9 = theme.colors.constant.white;
                            _v$7 !== _p$._v$7 && setAttribute(_el$8, "class", _p$._v$7 = _v$7);
                            _v$8 !== _p$._v$8 && setAttribute(_el$9, "fill", _p$._v$8 = _v$8);
                            _v$9 !== _p$._v$9 && setAttribute(_el$10, "fill", _p$._v$9 = _v$9);
                            return _p$;
                        }, {
                            _v$7: void 0,
                            _v$8: void 0,
                            _v$9: void 0
                        });
                        return _el$8;
                    })();
            })();
    })());
};
const _tmpl$$o = /* @__PURE__ */ template$1(`<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>`), _tmpl$2$2 = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`), _tmpl$3$1 = /* @__PURE__ */ template$1(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>`);
const ErrorIcon = (props)=>{
    const theme = useTheme();
    const size = ()=>props.size || "m";
    const fill = ()=>props.fill || theme.colors.icon.error;
    return createMemo((()=>{
        const _c$ = createMemo(()=>size() === "m");
        return ()=>_c$() ? (()=>{
                const _el$ = _tmpl$$o.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
                createRenderEffect((_p$)=>{
                    const _v$ = props.class, _v$2 = fill(), _v$3 = theme.colors.constant.white;
                    _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
                    _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
                    _v$3 !== _p$._v$3 && setAttribute(_el$3, "fill", _p$._v$3 = _v$3);
                    return _p$;
                }, {
                    _v$: void 0,
                    _v$2: void 0,
                    _v$3: void 0
                });
                return _el$;
            })() : (()=>{
                const _c$2 = createMemo(()=>size() === "s");
                return ()=>_c$2() ? (()=>{
                        const _el$4 = _tmpl$2$2.cloneNode(true), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling;
                        createRenderEffect((_p$)=>{
                            const _v$4 = props.class, _v$5 = fill(), _v$6 = theme.colors.constant.white;
                            _v$4 !== _p$._v$4 && setAttribute(_el$4, "class", _p$._v$4 = _v$4);
                            _v$5 !== _p$._v$5 && setAttribute(_el$5, "fill", _p$._v$5 = _v$5);
                            _v$6 !== _p$._v$6 && setAttribute(_el$6, "stroke", _p$._v$6 = _v$6);
                            return _p$;
                        }, {
                            _v$4: void 0,
                            _v$5: void 0,
                            _v$6: void 0
                        });
                        return _el$4;
                    })() : (()=>{
                        const _el$7 = _tmpl$3$1.cloneNode(true), _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling;
                        createRenderEffect((_p$)=>{
                            const _v$7 = props.class, _v$8 = fill(), _v$9 = theme.colors.constant.white;
                            _v$7 !== _p$._v$7 && setAttribute(_el$7, "class", _p$._v$7 = _v$7);
                            _v$8 !== _p$._v$8 && setAttribute(_el$8, "fill", _p$._v$8 = _v$8);
                            _v$9 !== _p$._v$9 && setAttribute(_el$9, "fill", _p$._v$9 = _v$9);
                            return _p$;
                        }, {
                            _v$7: void 0,
                            _v$8: void 0,
                            _v$9: void 0
                        });
                        return _el$7;
                    })();
            })();
    })());
};
const _tmpl$$n = /* @__PURE__ */ template$1(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>`), _tmpl$2$1 = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>`), _tmpl$3 = /* @__PURE__ */ template$1(`<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
const LoaderIcon = (props)=>{
    const theme = useTheme();
    const size = ()=>props.size || "xs";
    const fill = ()=>props.fill || theme.colors.icon.tertiary;
    const rotateAnimation = h`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `;
    const svgClass = u`
        animation: ${rotateAnimation} 1s linear infinite;
    `;
    return createMemo((()=>{
        const _c$ = createMemo(()=>size() === "xs");
        return ()=>_c$() ? (()=>{
                const _el$ = _tmpl$$n.cloneNode(true), _el$2 = _el$.firstChild;
                createRenderEffect((_p$)=>{
                    const _v$ = (0, _classnamesDefault.default)(svgClass, props.class), _v$2 = fill();
                    _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
                    _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
                    return _p$;
                }, {
                    _v$: void 0,
                    _v$2: void 0
                });
                return _el$;
            })() : (()=>{
                const _c$2 = createMemo(()=>size() === "s");
                return ()=>_c$2() ? (()=>{
                        const _el$3 = _tmpl$2$1.cloneNode(true), _el$4 = _el$3.firstChild;
                        createRenderEffect((_p$)=>{
                            const _v$3 = (0, _classnamesDefault.default)(svgClass, props.class), _v$4 = fill();
                            _v$3 !== _p$._v$3 && setAttribute(_el$3, "class", _p$._v$3 = _v$3);
                            _v$4 !== _p$._v$4 && setAttribute(_el$4, "fill", _p$._v$4 = _v$4);
                            return _p$;
                        }, {
                            _v$3: void 0,
                            _v$4: void 0
                        });
                        return _el$3;
                    })() : (()=>{
                        const _el$5 = _tmpl$3.cloneNode(true), _el$6 = _el$5.firstChild;
                        createRenderEffect((_p$)=>{
                            const _v$5 = (0, _classnamesDefault.default)(svgClass, props.class), _v$6 = fill();
                            _v$5 !== _p$._v$5 && setAttribute(_el$5, "class", _p$._v$5 = _v$5);
                            _v$6 !== _p$._v$6 && setAttribute(_el$6, "stroke", _p$._v$6 = _v$6);
                            return _p$;
                        }, {
                            _v$5: void 0,
                            _v$6: void 0
                        });
                        return _el$5;
                    })();
            })();
    })());
};
const _tmpl$$m = /* @__PURE__ */ template$1(`<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>`);
const TonConnectBrand = ()=>{
    const theme = useTheme();
    const fill = ()=>theme.theme === THEME.DARK ? theme.colors.constant.white : theme.colors.constant.black;
    return (()=>{
        const _el$ = _tmpl$$m.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.nextSibling;
        createRenderEffect(()=>setAttribute(_el$4, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$l = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>`);
const QuestionIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$l.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$k = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>`);
const BrowserIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.primary;
    return (()=>{
        const _el$ = _tmpl$$k.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$j = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>`);
const MobileIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.primary;
    return (()=>{
        const _el$ = _tmpl$$j.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$i = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>`);
const DesktopIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.primary;
    return (()=>{
        const _el$ = _tmpl$$i.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$h = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>`);
const RetryIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.accent;
    return (()=>{
        const _el$ = _tmpl$$h.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
        createRenderEffect(()=>setAttribute(_el$3, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$g = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>`);
const LinkIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.accent;
    return (()=>{
        const _el$ = _tmpl$$g.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$f = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>`);
const WalletIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.accent;
    return (()=>{
        const _el$ = _tmpl$$f.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
        createRenderEffect(()=>setAttribute(_el$3, "fill", fill()));
        return _el$;
    })();
};
const _tmpl$$e = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>`);
const SecurityIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$e.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = props.class, _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$d = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>`);
const PersonalityIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$d.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = props.class, _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$c = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>`);
const SwapIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$c.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = props.class, _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$b = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>`);
const AtWalletIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.constant.white;
    return (()=>{
        const _el$ = _tmpl$$b.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = props.class, _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$a = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>`);
const DoneIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$a.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = props.class, _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$9 = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>`);
const CopyLightIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$9.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = fill(), _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "fill", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$8 = /* @__PURE__ */ template$1(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>`);
const QRIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.secondary;
    return (()=>{
        const _el$ = _tmpl$$8.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect(()=>setAttribute(_el$2, "fill", fill()));
        return _el$;
    })();
};
const containerBorders = {
    m: "16px",
    s: "12px",
    none: "0"
};
const walletBorders = {
    m: "6px",
    s: "6px",
    none: "0"
};
const FourWalletsCard = styled.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${(props)=>containerBorders[props.theme.borderRadius]};
    background-color: ${(props)=>props.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`;
const FourWalletsImage = styled(WalletImage)`
    width: 20px;
    height: 20px;
    border-radius: ${(props)=>walletBorders[props.theme.borderRadius]};
`;
const FourWalletsItem = (props)=>{
    return createComponent(WalletItem, {
        get name () {
            return props.labelLine1;
        },
        get secondLine () {
            return props.labelLine2;
        },
        get icon () {
            return createComponent(FourWalletsCard, {
                get children () {
                    return createComponent(For, {
                        each: [
                            0,
                            1,
                            2,
                            3
                        ],
                        children: (index)=>createComponent(FourWalletsImage, {
                                get src () {
                                    return props.images[index];
                                }
                            })
                    });
                }
            });
        },
        onClick: ()=>props.onClick()
    });
};
const AT_WALLET_APP_NAME = "telegram-wallet";
const IMG = {
    TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",
    TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"
};
const WalletLabeledItem = (props)=>{
    const [t2] = useI18n();
    const walletsSecondLine = ()=>{
        if (props.wallet.appName === AT_WALLET_APP_NAME) return void 0;
        if ("isPreferred" in props.wallet && props.wallet.isPreferred) return t2("walletItem.recent", {}, "Recent");
        if ((0, _sdk.isWalletInfoCurrentlyInjected)(props.wallet)) return t2("walletItem.installed", {}, "Installed");
        if (props.wallet.name === "Tonkeeper") return t2("walletItem.popular", {}, "Popular");
        return void 0;
    };
    return createMemo((()=>{
        const _c$ = createMemo(()=>props.wallet.appName === AT_WALLET_APP_NAME);
        return ()=>_c$() ? createComponent(WalletItem, {
                get icon () {
                    return props.wallet.imageUrl;
                },
                get name () {
                    return t2("walletItem.walletOn", {}, "Wallet On");
                },
                secondLine: "Telegram",
                get badgeUrl () {
                    return IMG.TG;
                },
                onClick: ()=>props.onClick()
            }) : createComponent(WalletItem, {
                get icon () {
                    return props.wallet.imageUrl;
                },
                get name () {
                    return props.wallet.name;
                },
                get secondLine () {
                    return walletsSecondLine();
                },
                secondLineColorPrimary: false,
                onClick: ()=>props.onClick()
            });
    })());
};
const ScrollContainerStyled = styled.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${(props)=>props.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`;
const ScrollDivider = styled.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${(props)=>props.isShown ? props.theme.colors.icon.secondary : "transparent"};
    transition: background 0.15s ease-in-out;

    ${media("mobile")} {
        width: 100%;
        margin: 0;
    }
`;
const [windowHeight, setWindowHeight] = createSignal(((_h = getWindow$1()) == null ? void 0 : _h.innerHeight) || 0);
if (getWindow$1()) window.addEventListener("resize", ()=>setWindowHeight(window.innerHeight));
const [isMobile, setIsMobile] = createSignal(isDevice("mobile"));
const updateIsMobile = ()=>setIsMobile(isDevice("mobile"));
if (getWindow$1()) {
    window.addEventListener("resize", ()=>updateIsMobile());
    window.addEventListener("load", ()=>updateIsMobile(), {
        once: true
    });
}
const ScrollContainer = (props)=>{
    const [scrolled, setScrolled] = createSignal(false);
    const onScroll = (e2)=>{
        setScrolled(e2.target.scrollTop > 0);
    };
    const offset = ()=>isMobile() ? 150 : 200;
    const maxHeight = ()=>props.maxHeight !== void 0 ? `${props.maxHeight}px` : `${windowHeight() - offset()}px`;
    return [
        createComponent(ScrollDivider, {
            get isShown () {
                return scrolled();
            }
        }),
        createComponent(ScrollContainerStyled, {
            get maxHeight () {
                return maxHeight();
            },
            onScroll,
            get ["class"] () {
                return props.class;
            },
            get children () {
                return props.children;
            }
        })
    ];
};
const AStyled = styled.a`
    display: block;
    text-decoration: unset;
`;
const Link = (props)=>{
    const attributes = ()=>props.blank ? {
            rel: "noreferrer noopener"
        } : {};
    return createComponent(AStyled, mergeProps({
        get href () {
            return props.href;
        },
        get target () {
            return props.blank ? "_blank" : "_self";
        },
        get ["class"] () {
            return props.class;
        }
    }, attributes, {
        get children () {
            return props.children;
        }
    }));
};
const TonConnectUiContext = createContext();
const _tmpl$$7 = /* @__PURE__ */ template$1(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>`);
const CopyIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.primary;
    return (()=>{
        const _el$ = _tmpl$$7.cloneNode(true), _el$2 = _el$.firstChild;
        createRenderEffect((_p$)=>{
            const _v$ = props.class, _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$, "class", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$2, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const _tmpl$$6 = /* @__PURE__ */ template$1(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>`);
const DisconnectIcon = (props)=>{
    const theme = useTheme();
    const fill = ()=>props.fill || theme.colors.icon.primary;
    return (()=>{
        const _el$ = _tmpl$$6.cloneNode(true), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
        createRenderEffect((_p$)=>{
            const _v$ = fill(), _v$2 = fill();
            _v$ !== _p$._v$ && setAttribute(_el$2, "fill", _p$._v$ = _v$);
            _v$2 !== _p$._v$2 && setAttribute(_el$3, "fill", _p$._v$2 = _v$2);
            return _p$;
        }, {
            _v$: void 0,
            _v$2: void 0
        });
        return _el$;
    })();
};
const hoverBorders$1 = {
    m: "8px",
    s: "4px",
    none: "0"
};
const dropdownBorders = {
    m: "16px",
    s: "8px",
    none: "0"
};
const AccountButtonDropdownStyled = styled.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${(props)=>dropdownBorders[props.theme.borderRadius]};

    background-color: ${(props)=>props.theme.colors.background.primary}
           
    color: ${(props)=>props.theme.colors.text.primary}
`;
const UlStyled$1 = styled.ul`
    background-color: ${(props)=>props.theme.colors.background.primary};
    padding: 8px;
`;
const MenuButtonStyled = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${(props)=>props.theme.colors.background.primary};
    border: none;
    border-radius: ${(props)=>hoverBorders$1[props.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${(props)=>props.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`;
const _tmpl$$5 = /* @__PURE__ */ template$1(`<li></li>`);
const MenuItemText = (props)=>createComponent(Text, {
        get translationKey () {
            return props.translationKey;
        },
        fontSize: "15px",
        fontWeight: "590",
        get children () {
            return props.children;
        }
    });
const AccountButtonDropdown = (props)=>{
    const tonConnectUi = useContext(TonConnectUiContext);
    const [isCopiedShown, setIsCopiedShown] = createSignal(false);
    const onCopy = ()=>__async(void 0, null, function*() {
            const userFriendlyAddress = (0, _sdk.toUserFriendlyAddress)(tonConnectUi.account.address, tonConnectUi.account.chain === (0, _sdk.CHAIN).TESTNET);
            yield copyToClipboard(userFriendlyAddress);
            setIsCopiedShown(true);
            setTimeout(()=>setIsCopiedShown(false), 1e3);
        });
    const onDisconnect = ()=>{
        tonConnectUi.disconnect();
        props.onClose();
    };
    return createComponent(AccountButtonDropdownStyled, {
        ref (r$) {
            const _ref$ = props.ref;
            typeof _ref$ === "function" ? _ref$(r$) : props.ref = r$;
        },
        get ["class"] () {
            return props.class;
        },
        "data-tc-dropdown": "true",
        get children () {
            return createComponent(UlStyled$1, {
                get children () {
                    return [
                        (()=>{
                            const _el$ = _tmpl$$5.cloneNode(true);
                            insert(_el$, createComponent(MenuButtonStyled, {
                                onClick: ()=>onCopy(),
                                get children () {
                                    return [
                                        createComponent(CopyIcon, {}),
                                        createComponent(Show, {
                                            get when () {
                                                return !isCopiedShown();
                                            },
                                            get children () {
                                                return createComponent(MenuItemText, {
                                                    translationKey: "button.dropdown.copy",
                                                    children: "Copy address"
                                                });
                                            }
                                        }),
                                        createComponent(Show, {
                                            get when () {
                                                return isCopiedShown();
                                            },
                                            get children () {
                                                return createComponent(MenuItemText, {
                                                    translationKey: "button.dropdown.copied",
                                                    children: "Address copied!"
                                                });
                                            }
                                        })
                                    ];
                                }
                            }));
                            return _el$;
                        })(),
                        (()=>{
                            const _el$2 = _tmpl$$5.cloneNode(true);
                            insert(_el$2, createComponent(MenuButtonStyled, {
                                onClick: ()=>onDisconnect(),
                                get children () {
                                    return [
                                        createComponent(DisconnectIcon, {}),
                                        createComponent(MenuItemText, {
                                            translationKey: "button.dropdown.disconnect",
                                            children: "Disconnect"
                                        })
                                    ];
                                }
                            }));
                            return _el$2;
                        })()
                    ];
                }
            });
        }
    });
};
const borders$2 = {
    m: "16px",
    s: "8px",
    none: "0"
};
const NotificationStyled = styled.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${(props)=>props.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${(props)=>borders$2[props.theme.borderRadius]};
`;
const NotificationContentStyled = styled.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`;
const TextStyled$2 = styled(Text)`
    margin-top: 4px;
    color: ${(props)=>props.theme.colors.text.secondary};
`;
const Notification = (props)=>{
    const dataAttrs = useDataAttributes(props);
    return createComponent(NotificationStyled, mergeProps({
        get ["class"] () {
            return props.class;
        },
        "data-tc-notification": "true"
    }, dataAttrs, {
        get children () {
            return [
                createComponent(NotificationContentStyled, {
                    get children () {
                        return [
                            createComponent(H3, {
                                get translationKey () {
                                    return props.header.translationKey;
                                },
                                get translationValues () {
                                    return props.header.translationValues;
                                },
                                get children () {
                                    return props.children;
                                }
                            }),
                            createComponent(Show, {
                                get when () {
                                    return props.text;
                                },
                                get children () {
                                    return createComponent(TextStyled$2, {
                                        get translationKey () {
                                            return props.text.translationKey;
                                        },
                                        get translationValues () {
                                            return props.text.translationValues;
                                        }
                                    });
                                }
                            })
                        ];
                    }
                }),
                createMemo(()=>props.icon)
            ];
        }
    }));
};
const LoaderIconStyled$2 = styled(LoaderIcon)`
    align-self: center;
`;
const ConfirmOperationNotification = (props)=>{
    const tonConnectUI = useContext(TonConnectUiContext);
    const [t2] = useI18n();
    const name = ()=>tonConnectUI.wallet && "name" in tonConnectUI.wallet ? tonConnectUI.wallet.name : t2("common.yourWallet", {}, "Your wallet");
    return createComponent(Notification, {
        get header () {
            return {
                translationKey: "notifications.confirm.header",
                translationValues: {
                    name: name()
                }
            };
        },
        get ["class"] () {
            return props.class;
        },
        get icon () {
            return createComponent(LoaderIconStyled$2, {});
        },
        "data-tc-notification-confirm": "true",
        children: "Confirm operation in your wallet"
    });
};
const ErrorIconStyled$2 = styled(ErrorIcon)`
    margin-top: 2px;
`;
const ErrorTransactionNotification = (props)=>{
    return createComponent(Notification, {
        header: {
            translationKey: "notifications.transactionCanceled.header"
        },
        text: {
            translationKey: "notifications.transactionCanceled.text"
        },
        get icon () {
            return createComponent(ErrorIconStyled$2, {
                size: "xs"
            });
        },
        get ["class"] () {
            return props.class;
        },
        "data-tc-notification-tx-cancelled": "true",
        children: "Transaction cancelled"
    });
};
const SuccessIconStyled = styled(SuccessIcon)`
    margin-top: 2px;
`;
const SuccessTransactionNotification = (props)=>{
    return createComponent(Notification, {
        header: {
            translationKey: "notifications.transactionSent.header"
        },
        text: {
            translationKey: "notifications.transactionSent.text"
        },
        get icon () {
            return createComponent(SuccessIconStyled, {});
        },
        get ["class"] () {
            return props.class;
        },
        "data-tc-notification-tx-sent": "true",
        children: "Transaction sent"
    });
};
const NotificationClass = u`
    transform: translateY(-8px);
    margin-bottom: 12px;
`;
const defaultConfig = {
    timeout: 4500
};
const [latestAction, setLatestAction] = createSignal(null);
function useOpenedNotifications(config) {
    const { timeout } = __spreadValues(__spreadValues({}, defaultConfig), config);
    const [openedNotifications, setOpenedNotifications] = createSignal([]);
    const [timeoutIds, setTimeoutIds] = createSignal([]);
    createEffect(on(action, (action2)=>{
        var _a2;
        if (!action2 || !action2.showNotification) return;
        if (latestAction() === action2) return;
        if (((_a2 = latestAction()) == null ? void 0 : _a2.name) === "confirm-transaction" && action2.name === "confirm-transaction") return;
        setLatestAction(action2);
        setOpenedNotifications((openedNotifications2)=>openedNotifications2.filter((n2)=>n2.action !== "confirm-transaction"));
        const notification = {
            action: action2.name
        };
        setOpenedNotifications((openedNotifications2)=>[
                ...openedNotifications2,
                notification
            ]);
        const timeoutId = setTimeout(()=>{
            setOpenedNotifications((openedNotifications2)=>openedNotifications2.filter((n2)=>n2 !== notification));
            setTimeoutIds((timeoutIds2)=>timeoutIds2.filter((id)=>id !== timeoutId));
        }, timeout);
        setTimeoutIds((timeoutIds2)=>[
                ...timeoutIds2,
                timeoutId
            ]);
    }));
    onCleanup(()=>{
        timeoutIds().forEach((id)=>clearTimeout(id));
    });
    return openedNotifications;
}
const _tmpl$$4 = /* @__PURE__ */ template$1(`<div data-tc-list-notifications="true"></div>`);
const Notifications = (props)=>{
    const openedNotifications = useOpenedNotifications();
    return (()=>{
        const _el$ = _tmpl$$4.cloneNode(true);
        insert(_el$, createComponent(TransitionGroup, {
            onBeforeEnter: (el)=>{
                animate(el, [
                    {
                        opacity: 0,
                        transform: "translateY(0)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(-8px)"
                    }
                ], {
                    duration: 200
                });
            },
            onExit: (el, done)=>{
                const a2 = animate(el, [
                    {
                        opacity: 1,
                        transform: "translateY(-8px)"
                    },
                    {
                        opacity: 0,
                        transform: "translateY(-30px)"
                    }
                ], {
                    duration: 200
                });
                a2.finished.then(done);
            },
            get children () {
                return createComponent(For, {
                    get each () {
                        return openedNotifications();
                    },
                    children: (openedNotification)=>createComponent(Switch, {
                            get children () {
                                return [
                                    createComponent(Match, {
                                        get when () {
                                            return openedNotification.action === "transaction-sent";
                                        },
                                        get children () {
                                            return createComponent(SuccessTransactionNotification, {
                                                "class": NotificationClass
                                            });
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return openedNotification.action === "transaction-canceled";
                                        },
                                        get children () {
                                            return createComponent(ErrorTransactionNotification, {
                                                "class": NotificationClass
                                            });
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return openedNotification.action === "confirm-transaction";
                                        },
                                        get children () {
                                            return createComponent(ConfirmOperationNotification, {
                                                "class": NotificationClass
                                            });
                                        }
                                    })
                                ];
                            }
                        })
                });
            }
        }));
        createRenderEffect(()=>className(_el$, props.class));
        return _el$;
    })();
};
const AccountButtonStyled = styled(Button)`
    background-color: ${(props)=>props.theme.colors.connectButton.background};
    color: ${(props)=>props.theme.colors.connectButton.foreground};
    box-shadow: ${(props)=>`0 4px 24px ${rgba(props.theme.colors.constant.black, 0.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`;
const DropdownButtonStyled = styled(AccountButtonStyled)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${(props)=>props.theme.colors.background.primary};
`;
const LoaderButtonStyled$1 = styled(Button)`
    min-width: 148px;
    height: 40px;

    background-color: ${(props)=>props.theme.colors.background.primary};
    color: ${(props)=>props.theme.colors.connectButton.foreground};
    box-shadow: ${(props)=>`0 4px 24px ${rgba(props.theme.colors.constant.black, 0.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`;
const LoaderIconStyled$1 = styled(LoaderIcon)`
    height: 18px;
    width: 18px;
`;
const DropdownContainerStyled = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const DropdownStyled = styled(AccountButtonDropdown)`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`;
const NotificationsStyled = styled(Notifications)`
    > div:first-child {
        margin-top: 20px;
    }
`;
function getSide(placement) {
    return placement.split("-")[0];
}
function getAlignment(placement) {
    return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
    return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const mainAxis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(mainAxis);
    const commonAlign = reference[length] / 2 - floating[length] / 2;
    const side = getSide(placement);
    const isVertical = mainAxis === "x";
    let coords;
    switch(side){
        case "top":
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case "bottom":
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case "right":
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case "left":
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch(getAlignment(placement)){
        case "start":
            coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case "end":
            coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
const computePosition$1 = (reference, floating, config)=>__async(void 0, null, function*() {
        const { placement = "bottom", strategy = "absolute", middleware = [], platform: platform2 } = config;
        const validMiddleware = middleware.filter(Boolean);
        const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(floating);
        if (platform2 == null) console.error([
            "Floating UI: `platform` property was not passed to config. If you",
            "want to use Floating UI on the web, install @floating-ui/dom",
            "instead of the /core package. Otherwise, you can create your own",
            "`platform`: https://floating-ui.com/docs/platform"
        ].join(" "));
        if (validMiddleware.filter((_ref)=>{
            let { name } = _ref;
            return name === "autoPlacement" || name === "flip";
        }).length > 1) throw new Error([
            "Floating UI: duplicate `flip` and/or `autoPlacement` middleware",
            "detected. This will lead to an infinite loop. Ensure only one of",
            "either has been passed to the `middleware` array."
        ].join(" "));
        if (!reference || !floating) console.error([
            "Floating UI: The reference and/or floating element was not defined",
            "when `computePosition()` was called. Ensure that both elements have",
            "been created and can be measured."
        ].join(" "));
        let rects = yield platform2.getElementRects({
            reference,
            floating,
            strategy
        });
        let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
        let statefulPlacement = placement;
        let middlewareData = {};
        let resetCount = 0;
        for(let i2 = 0; i2 < validMiddleware.length; i2++){
            const { name, fn } = validMiddleware[i2];
            const { x: nextX, y: nextY, data, reset } = yield fn({
                x,
                y,
                initialPlacement: placement,
                placement: statefulPlacement,
                strategy,
                middlewareData,
                rects,
                platform: platform2,
                elements: {
                    reference,
                    floating
                }
            });
            x = nextX != null ? nextX : x;
            y = nextY != null ? nextY : y;
            middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
                [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
            });
            if (resetCount > 50) console.warn([
                "Floating UI: The middleware lifecycle appears to be running in an",
                "infinite loop. This is usually caused by a `reset` continually",
                "being returned without a break condition."
            ].join(" "));
            if (reset && resetCount <= 50) {
                resetCount++;
                if (typeof reset === "object") {
                    if (reset.placement) statefulPlacement = reset.placement;
                    if (reset.rects) rects = reset.rects === true ? yield platform2.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                    ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
                }
                i2 = -1;
                continue;
            }
        }
        return {
            x,
            y,
            placement: statefulPlacement,
            strategy,
            middlewareData
        };
    });
function rectToClientRect(rect) {
    return __spreadProps(__spreadValues({}, rect), {
        top: rect.y,
        left: rect.x,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
function getWindow(node) {
    var _node$ownerDocument;
    return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
    return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
let uaString;
function getUAString() {
    if (uaString) return uaString;
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
        uaString = uaData.brands.map((item)=>item.brand + "/" + item.version).join(" ");
        return uaString;
    }
    return navigator.userAgent;
}
function isHTMLElement(value) {
    return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
    return value instanceof getWindow(value).Element;
}
function isNode(value) {
    return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") return false;
    const OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX) && ![
        "inline",
        "contents"
    ].includes(display);
}
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].includes(getNodeName(element));
}
function isContainingBlock(element) {
    const isFirefox = /firefox/i.test(getUAString());
    const css = getComputedStyle$1(element);
    const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
    return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || [
        "transform",
        "perspective"
    ].some((value)=>css.willChange.includes(value)) || [
        "paint",
        "layout",
        "strict",
        "content"
    ].some((value)=>{
        const contain = css.contain;
        return contain != null ? contain.includes(value) : false;
    });
}
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
    return [
        "html",
        "body",
        "#document"
    ].includes(getNodeName(node));
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
const FALLBACK_SCALE = {
    x: 1,
    y: 1
};
function getScale(element) {
    const domElement = !isElement(element) && element.contextElement ? element.contextElement : isElement(element) ? element : null;
    if (!domElement) return FALLBACK_SCALE;
    const rect = domElement.getBoundingClientRect();
    const css = getComputedStyle$1(domElement);
    if (css.boxSizing !== "border-box") {
        if (!isHTMLElement(domElement)) return FALLBACK_SCALE;
        return {
            x: domElement.offsetWidth > 0 ? round(rect.width) / domElement.offsetWidth || 1 : 1,
            y: domElement.offsetHeight > 0 ? round(rect.height) / domElement.offsetHeight || 1 : 1
        };
    }
    let x = rect.width / parseFloat(css.width);
    let y = rect.height / parseFloat(css.height);
    if (!x || !Number.isFinite(x)) x = 1;
    if (!y || !Number.isFinite(y)) y = 1;
    return {
        x,
        y
    };
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    const clientRect = element.getBoundingClientRect();
    let scale = FALLBACK_SCALE;
    if (includeScale) {
        if (offsetParent) {
            if (isElement(offsetParent)) scale = getScale(offsetParent);
        } else scale = getScale(element);
    }
    const win = isElement(element) ? getWindow(element) : window;
    const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scale.x;
    const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scale.y;
    const width = clientRect.width / scale.x;
    const height = clientRect.height / scale.y;
    return {
        width,
        height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x,
        y
    };
}
function getDocumentElement(node) {
    return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
    if (isElement(element)) return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
    return {
        scrollLeft: element.pageXOffset,
        scrollTop: element.pageYOffset
    };
}
function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
        if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
function getParentNode(node) {
    if (getNodeName(node) === "html") return node;
    const result = node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
    return element.offsetParent;
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) return currentNode;
        else currentNode = getParentNode(currentNode);
    }
    return null;
}
function getOffsetParent(element) {
    const window2 = getWindow(element);
    let offsetParent = getTrueOffsetParent(element);
    while(offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) return window2;
    return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
    if (isHTMLElement(element)) return {
        width: element.offsetWidth,
        height: element.offsetHeight
    };
    const rect = getBoundingClientRect(element);
    return {
        width: rect.width,
        height: rect.height
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { rect, offsetParent, strategy } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) return rect;
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = {
        x: 1,
        y: 1
    };
    const offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
        if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
        if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
}
function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const layoutViewport = isLayoutViewport();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width,
        height,
        x,
        y
    };
}
function getDocumentRect(element) {
    var _element$ownerDocumen;
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === "rtl") x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width,
        height,
        x,
        y
    };
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) return node.ownerDocument.body;
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
    var _node$ownerDocument;
    if (list === void 0) list = [];
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : {
        x: 1,
        y: 1
    };
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y,
        width,
        height
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    if (clippingAncestor === "viewport") return rectToClientRect(getViewportRect(element, strategy));
    if (isElement(clippingAncestor)) return getInnerBoundingClientRect(clippingAncestor, strategy);
    return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) return cachedResult;
    let result = getOverflowAncestors(element).filter((el)=>isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while(isElement(currentNode) && !isLastTraversableNode(currentNode)){
        const computedStyle = getComputedStyle$1(currentNode);
        const containingBlock = isContainingBlock(currentNode);
        const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && [
            "absolute",
            "fixed"
        ].includes(currentContainingBlockComputedStyle.position);
        if (shouldDropCurrentNode) result = result.filter((ancestor)=>ancestor !== currentNode);
        else currentContainingBlockComputedStyle = computedStyle;
        currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
}
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
const platform = {
    getClippingRect,
    convertOffsetParentRelativeRectToViewportRelativeRect,
    isElement,
    getDimensions,
    getOffsetParent,
    getDocumentElement,
    getScale,
    getElementRects (_ref) {
        return __async(this, null, function*() {
            let { reference, floating, strategy } = _ref;
            const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
            const getDimensionsFn = this.getDimensions;
            return {
                reference: getRectRelativeToOffsetParent(reference, (yield getOffsetParentFn(floating)), strategy),
                floating: __spreadValues({
                    x: 0,
                    y: 0
                }, (yield getDimensionsFn(floating)))
            };
        });
    },
    getClientRects: (element)=>Array.from(element.getClientRects()),
    isRTL: (element)=>getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
    if (options === void 0) options = {};
    const { ancestorScroll: _ancestorScroll = true, ancestorResize = true, elementResize = true, animationFrame = false } = options;
    const ancestorScroll = _ancestorScroll && !animationFrame;
    const ancestors = ancestorScroll || ancestorResize ? [
        ...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [],
        ...getOverflowAncestors(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener("resize", update);
    });
    let observer = null;
    if (elementResize) {
        let initialUpdate = true;
        observer = new ResizeObserver(()=>{
            if (!initialUpdate) update();
            initialUpdate = false;
        });
        isElement(reference) && !animationFrame && observer.observe(reference);
        if (!isElement(reference) && reference.contextElement && !animationFrame) observer.observe(reference.contextElement);
        observer.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) frameLoop();
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) update();
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _observer;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
        });
        (_observer = observer) == null || _observer.disconnect();
        observer = null;
        if (animationFrame) cancelAnimationFrame(frameId);
    };
}
const computePosition = (reference, floating, options)=>{
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = __spreadValues({
        platform
    }, options);
    const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
        _c: cache
    });
    return computePosition$1(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
        platform: platformWithCache
    }));
};
function P(l2, u2, e2) {
    let c2 = ()=>{
        var t2;
        return (t2 = e2 == null ? void 0 : e2.placement) != null ? t2 : "bottom";
    }, d = ()=>{
        var t2;
        return (t2 = e2 == null ? void 0 : e2.strategy) != null ? t2 : "absolute";
    }, [n2, o2] = createSignal({
        x: null,
        y: null,
        placement: c2(),
        strategy: d(),
        middlewareData: {}
    }), [x, F] = createSignal();
    createEffect(()=>{
        let t2 = x();
        if (t2) throw t2.value;
    });
    let s2 = createMemo(()=>(l2(), u2(), {}));
    function i2() {
        let t2 = l2(), r = u2();
        if (t2 && r) {
            let a2 = s2();
            computePosition(t2, r, {
                middleware: e2 == null ? void 0 : e2.middleware,
                placement: c2(),
                strategy: d()
            }).then((m)=>{
                a2 === s2() && o2(m);
            }, (m)=>{
                F(m);
            });
        }
    }
    return createEffect(()=>{
        let t2 = l2(), r = u2();
        if (e2 == null || e2.middleware, c2(), d(), t2 && r) {
            if (e2 != null && e2.whileElementsMounted) {
                let a2 = e2.whileElementsMounted(t2, r, i2);
                a2 && onCleanup(a2);
            } else i2();
        }
    }), {
        get x () {
            return n2().x;
        },
        get y () {
            return n2().y;
        },
        get placement () {
            return n2().placement;
        },
        get strategy () {
            return n2().strategy;
        },
        get middlewareData () {
            return n2().middlewareData;
        },
        update: i2
    };
}
const _tmpl$$3 = /* @__PURE__ */ template$1(`<tc-root data-tc-dropdown-container="true"></tc-root>`);
const AccountButton = ()=>{
    const theme = useTheme();
    const connector = useContext(ConnectorContext);
    const tonConnectUI = useContext(TonConnectUiContext);
    const [isOpened, setIsOpened] = createSignal(false);
    const [account, setAccount] = createSignal(connector.account);
    const [restoringProcess, setRestoringProcess] = createSignal(!connector.account);
    let dropDownRef;
    const [floating, setFloating] = createSignal();
    const [anchor, setAnchor] = createSignal();
    const position = P(anchor, floating, {
        whileElementsMounted: autoUpdate,
        placement: "bottom-end"
    });
    const normalizedAddress = ()=>{
        const acc = account();
        if (acc) {
            const userFriendlyAddress = (0, _sdk.toUserFriendlyAddress)(acc.address, acc.chain === (0, _sdk.CHAIN).TESTNET);
            return userFriendlyAddress.slice(0, 4) + "\u2026" + userFriendlyAddress.slice(-4);
        }
        return "";
    };
    tonConnectUI.connectionRestored.then(()=>setRestoringProcess(false));
    const unsubscribe = connector.onStatusChange((wallet)=>{
        if (!wallet) {
            setIsOpened(false);
            setAccount(null);
            setRestoringProcess(false);
            return;
        }
        setAccount(wallet.account);
        setRestoringProcess(false);
    });
    const onClick = (e2)=>{
        if (!account() || !isOpened()) return;
        const clickToButton = anchor().contains(e2.target);
        const clickToDropdown = dropDownRef.contains(e2.target);
        if (!clickToButton && !clickToDropdown) setIsOpened(false);
    };
    onMount(()=>{
        document.body.addEventListener("click", onClick);
    });
    onCleanup(()=>{
        document.body.removeEventListener("click", onClick);
        unsubscribe();
    });
    return createComponent(Dynamic, {
        component: globalStylesTag,
        get children () {
            return [
                createComponent(Show, {
                    get when () {
                        return restoringProcess();
                    },
                    get children () {
                        return createComponent(LoaderButtonStyled$1, {
                            disabled: true,
                            "data-tc-connect-button-loading": "true",
                            get children () {
                                return createComponent(LoaderIconStyled$1, {});
                            }
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return !restoringProcess();
                    },
                    get children () {
                        return [
                            createComponent(Show, {
                                get when () {
                                    return !account();
                                },
                                get children () {
                                    return createComponent(AccountButtonStyled, {
                                        onClick: ()=>tonConnectUI.openModal(),
                                        "data-tc-connect-button": "true",
                                        scale: "s",
                                        get children () {
                                            return [
                                                createComponent(TonIcon, {
                                                    get fill () {
                                                        return theme.colors.connectButton.foreground;
                                                    }
                                                }),
                                                createComponent(Text, {
                                                    translationKey: "button.connectWallet",
                                                    fontSize: "15px",
                                                    lineHeight: "18px",
                                                    fontWeight: "590",
                                                    get color () {
                                                        return theme.colors.connectButton.foreground;
                                                    },
                                                    children: "Connect wallet"
                                                })
                                            ];
                                        }
                                    });
                                }
                            }),
                            createComponent(Show, {
                                get when () {
                                    return account();
                                },
                                get children () {
                                    return createComponent(DropdownContainerStyled, {
                                        get children () {
                                            return [
                                                createComponent(DropdownButtonStyled, {
                                                    onClick: ()=>setIsOpened((v)=>!v),
                                                    ref: setAnchor,
                                                    "data-tc-dropdown-button": "true",
                                                    scale: "s",
                                                    get children () {
                                                        return [
                                                            createComponent(Text, {
                                                                fontSize: "15px",
                                                                fontWeight: "590",
                                                                lineHeight: "18px",
                                                                get children () {
                                                                    return normalizedAddress();
                                                                }
                                                            }),
                                                            createComponent(ArrowIcon, {
                                                                direction: "bottom"
                                                            })
                                                        ];
                                                    }
                                                }),
                                                createComponent(Portal, {
                                                    get children () {
                                                        const _el$ = untrack(()=>document.importNode(_tmpl$$3, true));
                                                        use(setFloating, _el$);
                                                        _el$.style.setProperty("z-index", "999");
                                                        _el$._$owner = getOwner();
                                                        insert(_el$, createComponent(Transition, {
                                                            onBeforeEnter: (el)=>{
                                                                animate(el, [
                                                                    {
                                                                        opacity: 0,
                                                                        transform: "translateY(-8px)"
                                                                    },
                                                                    {
                                                                        opacity: 1,
                                                                        transform: "translateY(0)"
                                                                    }
                                                                ], {
                                                                    duration: 150
                                                                });
                                                            },
                                                            onExit: (el, done)=>{
                                                                const a2 = animate(el, [
                                                                    {
                                                                        opacity: 1,
                                                                        transform: "translateY(0)"
                                                                    },
                                                                    {
                                                                        opacity: 0,
                                                                        transform: "translateY(-8px)"
                                                                    }
                                                                ], {
                                                                    duration: 150
                                                                });
                                                                a2.finished.then(done);
                                                            },
                                                            get children () {
                                                                return createComponent(Show, {
                                                                    get when () {
                                                                        return isOpened();
                                                                    },
                                                                    get children () {
                                                                        return createComponent(DropdownStyled, {
                                                                            get hidden () {
                                                                                return !isOpened();
                                                                            },
                                                                            onClose: ()=>setIsOpened(false),
                                                                            ref (r$) {
                                                                                const _ref$ = dropDownRef;
                                                                                typeof _ref$ === "function" ? _ref$(r$) : dropDownRef = r$;
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        }), null);
                                                        insert(_el$, createComponent(NotificationsStyled, {}), null);
                                                        createRenderEffect((_p$)=>{
                                                            var _a2, _b2;
                                                            const _v$ = position.strategy, _v$2 = `${(_a2 = position.y) != null ? _a2 : 0}px`, _v$3 = `${(_b2 = position.x) != null ? _b2 : 0}px`;
                                                            _v$ !== _p$._v$ && _el$.style.setProperty("position", _p$._v$ = _v$);
                                                            _v$2 !== _p$._v$2 && _el$.style.setProperty("top", _p$._v$2 = _v$2);
                                                            _v$3 !== _p$._v$3 && _el$.style.setProperty("left", _p$._v$3 = _v$3);
                                                            return _p$;
                                                        }, {
                                                            _v$: void 0,
                                                            _v$2: void 0,
                                                            _v$3: void 0
                                                        });
                                                        return _el$;
                                                    }
                                                })
                                            ];
                                        }
                                    });
                                }
                            })
                        ];
                    }
                })
            ];
        }
    });
};
const StyledModal = styled(Modal)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${media("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`;
const H1Styled$8 = styled(H1)`
    margin-top: 12px;

    ${media("mobile")} {
        padding: 0 10px;
    }
`;
const LoaderContainerStyled = styled.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${media("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
styled(Text)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`;
styled(TabBar)`
    margin: 0 auto 22px;
`;
const [appState, setAppState] = createStore({
    buttonRootId: null,
    language: "en",
    returnStrategy: "back",
    twaReturnUrl: void 0,
    walletsListConfiguration: {},
    enableAndroidBackHandler: true
});
function uniq(array) {
    return [
        ...new Set(array)
    ];
}
function mergeConcat(idKey, array1, array2) {
    return array1.map((item1)=>{
        const item2 = array2.find((elem)=>elem[idKey] === item1[idKey]);
        array2 = array2.filter((elem)=>elem[idKey] !== item1[idKey]);
        return item2 === void 0 ? item1 : item2;
    }).concat(array2);
}
function uiWalletToWalletInfo(uiWallet) {
    if ("jsBridgeKey" in uiWallet) return __spreadProps(__spreadValues({}, uiWallet), {
        injected: (0, _sdk.TonConnect).isWalletInjected(uiWallet.jsBridgeKey),
        embedded: (0, _sdk.TonConnect).isInsideWalletBrowser(uiWallet.jsBridgeKey)
    });
    return uiWallet;
}
function applyWalletsListConfiguration(walletsList, configuration) {
    var _a2;
    if (!configuration) return walletsList;
    if ((_a2 = configuration.includeWallets) == null ? void 0 : _a2.length) walletsList = mergeConcat("name", walletsList, configuration.includeWallets.map(uiWalletToWalletInfo));
    return walletsList;
}
function supportsDesktop(walletInfo) {
    return walletInfo.platforms.some((w)=>[
            "macos",
            "linux",
            "windows"
        ].includes(w));
}
function supportsMobile(walletInfo) {
    return walletInfo.platforms.some((w)=>[
            "ios",
            "android"
        ].includes(w));
}
function supportsExtension(walletInfo) {
    return walletInfo.platforms.some((w)=>[
            "chrome",
            "firefox",
            "safari"
        ].includes(w));
}
function eqWalletName(wallet1, name) {
    if (!name) return false;
    return wallet1.name.toLowerCase() === name.toLowerCase() || wallet1.appName.toLowerCase() === name.toLowerCase();
}
const DesktopSelectWalletModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const H1Styled$7 = styled(H1)`
    margin-bottom: 18px;
`;
styled.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${(props)=>props.isShown ? props.theme.colors.icon.secondary : "transparent"};
    transition: background 0.15s ease-in-out;

    ${media("mobile")} {
        width: 100%;
    }
`;
const WalletsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${media("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
styled(Button)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
const StyledIconButton$3 = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`;
const WalletLabeledItemStyled = styled(WalletLabeledItem)`
    height: 100%;
`;
const _tmpl$$2 = /* @__PURE__ */ template$1(`<li></li>`);
const AllWalletsListModal = (props)=>{
    const maxHeight = ()=>isMobile() ? void 0 : 510;
    const walletsList = ()=>isMobile() ? props.walletsList.filter(supportsMobile) : props.walletsList;
    return createComponent(DesktopSelectWalletModalStyled, {
        "data-tc-wallets-modal-list": "true",
        get children () {
            return [
                createComponent(StyledIconButton$3, {
                    icon: "arrow",
                    onClick: ()=>props.onBack()
                }),
                createComponent(H1Styled$7, {
                    translationKey: "walletModal.wallets",
                    children: "Wallets"
                }),
                createComponent(ScrollContainer, {
                    get maxHeight () {
                        return maxHeight();
                    },
                    get children () {
                        return createComponent(WalletsUl, {
                            get children () {
                                return createComponent(For, {
                                    get each () {
                                        return walletsList();
                                    },
                                    children: (wallet)=>(()=>{
                                            const _el$ = _tmpl$$2.cloneNode(true);
                                            insert(_el$, createComponent(WalletLabeledItemStyled, {
                                                wallet,
                                                onClick: ()=>props.onSelect(wallet)
                                            }));
                                            return _el$;
                                        })()
                                });
                            }
                        });
                    }
                })
            ];
        }
    });
};
const tgButtonBorders = {
    m: "16px",
    s: "12px",
    none: "0"
};
const tgIconBorders = {
    m: "6px",
    s: "6px",
    none: "0"
};
const DesktopConnectionModalStyled = styled.div`
    display: flex;
    flex-direction: column;
`;
const BodyStyled$1 = styled.div`
    flex: 1;
    margin-top: ${(props)=>props.qr ? "0" : "18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`;
const QRCodeStyled$1 = styled(QRCode)`
    margin-bottom: 24px;
`;
const H1Styled$6 = styled(H1)`
    max-width: 288px;
    margin: 0 auto 2px;
`;
const H2Styled$4 = styled(H2)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`;
const StyledIconButton$2 = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`;
const ButtonsContainerStyled$1 = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`;
const BottomButtonsContainerStyled = styled(ButtonsContainerStyled$1)`
    padding-bottom: 0;
`;
const FooterButton$1 = styled(Button)`
    margin-bottom: 24px;
`;
const LoaderStyled$1 = styled(LoaderIcon)`
    margin-bottom: 18px;
    margin-top: 2px;
`;
const ErrorIconStyled$1 = styled(ErrorIcon)`
    margin-bottom: 16px;
`;
const BodyTextStyled$1 = styled(H2)`
    color: ${(props)=>props.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`;
const TgButtonStyled = styled(Button)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${(props)=>tgButtonBorders[props.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`;
const TgImageStyled = styled(Image)`
    width: 32px;
    height: 32px;
    border-radius: ${(props)=>tgIconBorders[props.theme.borderRadius]};
`;
const Translation = (props)=>{
    const [t2] = useI18n();
    return createMemo(()=>{
        var _a2;
        return t2(props.translationKey, props.translationValues, (_a2 = props.children) == null ? void 0 : _a2.toString());
    });
};
function addReturnStrategy(url, strategy) {
    let returnStrategy;
    if (typeof strategy === "string") returnStrategy = strategy;
    else returnStrategy = isInTMA() ? strategy.twaReturnUrl || strategy.returnStrategy : "none";
    const newUrl = addQueryParameter(url, "ret", returnStrategy);
    if (!(0, _sdk.isTelegramUrl)(url)) return newUrl;
    const lastParam = newUrl.slice(newUrl.lastIndexOf("&") + 1);
    return newUrl.slice(0, newUrl.lastIndexOf("&")) + "-" + (0, _sdk.encodeTelegramUrlParameters)(lastParam);
}
function redirectToTelegram(universalLink, options) {
    options = __spreadValues({}, options);
    const directLink = convertToTGDirectLink(universalLink);
    const directLinkUrl = new URL(directLink);
    if (!directLinkUrl.searchParams.has("startapp")) directLinkUrl.searchParams.append("startapp", "tonconnect");
    if (isInTMA()) {
        if (isTmaPlatform("ios", "android")) {
            options.returnStrategy = "back";
            options.twaReturnUrl = void 0;
            sendOpenTelegramLink(addReturnStrategy(directLinkUrl.toString(), options));
        } else if (isTmaPlatform("macos", "tdesktop")) sendOpenTelegramLink(addReturnStrategy(directLinkUrl.toString(), options));
        else if (isTmaPlatform("weba")) sendOpenTelegramLink(addReturnStrategy(directLinkUrl.toString(), options));
        else if (isTmaPlatform("web")) {
            options.returnStrategy = "back";
            options.twaReturnUrl = void 0;
            sendOpenTelegramLink(addReturnStrategy(directLinkUrl.toString(), options));
        } else openLinkBlank(addReturnStrategy(directLinkUrl.toString(), options));
    } else {
        if (isOS("ios")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("safari")) options.returnStrategy = "back";
                else if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = location.href;
            }
            const isChrome = isBrowser("chrome");
            const isFirefox = isBrowser("firefox");
            const useDeepLink = (isChrome || isFirefox) && !options.forceRedirect;
            if (useDeepLink) {
                const linkWithStrategy = addReturnStrategy(directLinkUrl.toString(), options.returnStrategy);
                const deepLink = convertToTGDeepLink(linkWithStrategy);
                openDeeplinkWithFallback(deepLink, ()=>openLinkBlank(linkWithStrategy));
            } else {
                const linkWithStrategy = addReturnStrategy(directLinkUrl.toString(), options.returnStrategy);
                openLinkBlank(linkWithStrategy);
            }
        } else if (isOS("android")) {
            options.returnStrategy = "none";
            const isChrome = isBrowser("chrome");
            const isFirefox = isBrowser("firefox");
            const useDeepLink = (isChrome || isFirefox) && !options.forceRedirect;
            if (useDeepLink) {
                const linkWithStrategy = addReturnStrategy(directLinkUrl.toString(), options.returnStrategy);
                const deepLink = convertToTGDeepLink(linkWithStrategy);
                openDeeplinkWithFallback(deepLink, ()=>openLinkBlank(linkWithStrategy));
            } else {
                const linkWithStrategy = addReturnStrategy(directLinkUrl.toString(), options.returnStrategy);
                openLinkBlank(linkWithStrategy);
            }
        } else if (isOS("ipad")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("safari")) options.returnStrategy = "back";
                else if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = location.href;
            }
            const isChrome = isBrowser("chrome");
            const isFirefox = isBrowser("firefox");
            const useDeepLink = (isChrome || isFirefox) && !options.forceRedirect;
            if (useDeepLink) {
                const linkWithStrategy = addReturnStrategy(directLinkUrl.toString(), options.returnStrategy);
                const deepLink = convertToTGDeepLink(linkWithStrategy);
                openDeeplinkWithFallback(deepLink, ()=>openLinkBlank(linkWithStrategy));
            } else {
                const linkWithStrategy = addReturnStrategy(directLinkUrl.toString(), options.returnStrategy);
                openLinkBlank(linkWithStrategy);
            }
        } else if (isOS("macos", "windows", "linux")) {
            options.returnStrategy = "none";
            options.twaReturnUrl = void 0;
            if (options.forceRedirect) openLinkBlank(addReturnStrategy(directLinkUrl.toString(), options));
            else {
                const link = addReturnStrategy(directLinkUrl.toString(), options);
                const deepLink = convertToTGDeepLink(link);
                openDeeplinkWithFallback(deepLink, ()=>openLinkBlank(link));
            }
        } else openLinkBlank(addReturnStrategy(directLinkUrl.toString(), options));
    }
}
function redirectToWallet(universalLink, deepLink, options, setOpenMethod) {
    options = __spreadValues({}, options);
    if (isInTMA()) {
        if (isTmaPlatform("ios", "android")) {
            if (options.returnStrategy === "back") options.returnStrategy = "tg://resolve";
            setOpenMethod("universal-link");
            const linkWitStrategy = addReturnStrategy(universalLink, options.returnStrategy);
            sendOpenTelegramLink(linkWitStrategy, ()=>{
                setOpenMethod("universal-link");
                openLinkBlank(linkWitStrategy);
            });
        } else if (isTmaPlatform("macos", "tdesktop")) {
            if (options.returnStrategy === "back") options.returnStrategy = "tg://resolve";
            const linkWitStrategy = addReturnStrategy(universalLink, options.returnStrategy);
            const useDeepLink = !!deepLink && !options.forceRedirect;
            if (useDeepLink) {
                setOpenMethod("custom-deeplink");
                openDeeplinkWithFallback(toDeeplink(linkWitStrategy, deepLink), ()=>{
                    setOpenMethod("universal-link");
                    openLinkBlank(linkWitStrategy);
                });
            } else {
                setOpenMethod("universal-link");
                openLinkBlank(linkWitStrategy);
            }
        } else if (isTmaPlatform("weba")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("safari")) options.returnStrategy = location.href;
                else if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = location.href;
            }
            const linkWitStrategy = addReturnStrategy(universalLink, options.returnStrategy);
            const useDeepLink = !!deepLink && !options.forceRedirect;
            if (useDeepLink) {
                setOpenMethod("custom-deeplink");
                openDeeplinkWithFallback(toDeeplink(linkWitStrategy, deepLink), ()=>{
                    setOpenMethod("universal-link");
                    openLinkBlank(linkWitStrategy);
                });
            } else {
                setOpenMethod("universal-link");
                openLinkBlank(linkWitStrategy);
            }
        } else if (isTmaPlatform("web")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("safari")) options.returnStrategy = location.href;
                else if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = location.href;
            }
            const linkWitStrategy = addReturnStrategy(universalLink, options.returnStrategy);
            const useDeepLink = !!deepLink && !options.forceRedirect;
            if (useDeepLink) {
                setOpenMethod("custom-deeplink");
                openDeeplinkWithFallback(toDeeplink(linkWitStrategy, deepLink), ()=>{
                    setOpenMethod("universal-link");
                    openLinkBlank(linkWitStrategy);
                });
            } else {
                setOpenMethod("universal-link");
                openLinkBlank(linkWitStrategy);
            }
        } else {
            setOpenMethod("universal-link");
            const linkWitStrategy = addReturnStrategy(universalLink, options.returnStrategy);
            openLinkBlank(linkWitStrategy);
        }
    } else {
        if (isOS("ios")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("safari")) options.returnStrategy = "none";
                else if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = location.href;
            }
            if (isBrowser("chrome")) {
                setOpenMethod("universal-link");
                openLink(addReturnStrategy(universalLink, options.returnStrategy), "_self");
            } else {
                setOpenMethod("universal-link");
                openLinkBlank(addReturnStrategy(universalLink, options.returnStrategy));
            }
        } else if (isOS("android")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = location.href;
            }
            setOpenMethod("universal-link");
            openLinkBlank(addReturnStrategy(universalLink, options.returnStrategy));
        } else if (isOS("ipad")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("safari")) options.returnStrategy = "none";
                else if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = location.href;
            }
            if (isBrowser("chrome")) {
                setOpenMethod("universal-link");
                openLink(addReturnStrategy(universalLink, options.returnStrategy), "_self");
            } else {
                setOpenMethod("universal-link");
                openLinkBlank(addReturnStrategy(universalLink, options.returnStrategy));
            }
        } else if (isOS("macos", "windows", "linux")) {
            if (options.returnStrategy === "back") {
                if (isBrowser("safari")) options.returnStrategy = "none";
                else if (isBrowser("chrome")) options.returnStrategy = "googlechrome://";
                else if (isBrowser("firefox")) options.returnStrategy = "firefox://";
                else if (isBrowser("opera")) options.returnStrategy = "opera-http://";
                else options.returnStrategy = "none";
            }
            const linkWitStrategy = addReturnStrategy(universalLink, options.returnStrategy);
            const useDeepLink = !!deepLink && !options.forceRedirect;
            if (useDeepLink) {
                setOpenMethod("custom-deeplink");
                openDeeplinkWithFallback(toDeeplink(linkWitStrategy, deepLink), ()=>{
                    setOpenMethod("universal-link");
                    openLinkBlank(linkWitStrategy);
                });
            } else {
                setOpenMethod("universal-link");
                openLinkBlank(linkWitStrategy);
            }
        } else {
            setOpenMethod("universal-link");
            openLinkBlank(addReturnStrategy(universalLink, options.returnStrategy));
        }
    }
}
function addQueryParameter(url, key, value) {
    const parsed = new URL(url);
    parsed.searchParams.append(key, value);
    return parsed.toString();
}
function convertToTGDirectLink(universalLink) {
    const url = new URL(universalLink);
    if (url.searchParams.has("attach")) {
        url.searchParams.delete("attach");
        url.pathname += "/start";
    }
    return url.toString();
}
function convertToTGDeepLink(directLink) {
    const parsed = new URL(directLink);
    const [, domain, appname] = parsed.pathname.split("/");
    const startapp = parsed.searchParams.get("startapp");
    return `tg://resolve?domain=${domain}&appname=${appname}&startapp=${startapp}`;
}
const DesktopConnectionModal = (props)=>{
    const [mode, setMode] = createSignal("mobile");
    const [connectionErrored, setConnectionErrored] = createSignal(false);
    const [universalLink, setUniversalLink] = createSignal();
    const [firstClick, setFirstClick] = createSignal(true);
    const connector = useContext(ConnectorContext);
    const unsubscribe = connector.onStatusChange(()=>{}, ()=>{
        if (props.wallet.appName !== AT_WALLET_APP_NAME) setConnectionErrored(true);
    });
    onCleanup(unsubscribe);
    const generateUniversalLink = ()=>{
        try {
            const universalLink2 = connector.connect({
                universalLink: props.wallet.universalLink,
                bridgeUrl: props.wallet.bridgeUrl
            }, props.additionalRequest);
            setUniversalLink(universalLink2);
        } catch (e2) {}
    };
    createEffect(()=>{
        if (untrack(mode) !== "extension" && (supportsMobile(props.wallet) || supportsDesktop(props.wallet))) generateUniversalLink();
    });
    const onClickMobile = ()=>{
        setConnectionErrored(false);
        if (mode() === "extension") generateUniversalLink();
        setMode("mobile");
        setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, props.wallet), {
            openMethod: "qrcode"
        }));
    };
    const onClickDesktop = ()=>{
        setConnectionErrored(false);
        if (mode() === "extension") generateUniversalLink();
        setMode("desktop");
        const forceRedirect = !firstClick();
        setFirstClick(false);
        redirectToWallet(universalLink(), props.wallet.deepLink, {
            returnStrategy: appState.returnStrategy,
            forceRedirect
        }, (method)=>{
            setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, props.wallet), {
                openMethod: method
            }));
        });
    };
    const onClickTelegram = ()=>{
        const forceRedirect = !firstClick();
        setFirstClick(false);
        setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, props.wallet), {
            openMethod: "universal-link"
        }));
        redirectToTelegram(universalLink(), {
            returnStrategy: appState.returnStrategy,
            twaReturnUrl: appState.twaReturnUrl,
            forceRedirect
        });
    };
    const onClickExtension = ()=>{
        setConnectionErrored(false);
        setMode("extension");
        if ((0, _sdk.isWalletInfoCurrentlyInjected)(props.wallet)) {
            setLastSelectedWalletInfo(props.wallet);
            connector.connect({
                jsBridgeKey: props.wallet.jsBridgeKey
            }, props.additionalRequest);
        }
    };
    if (supportsMobile(props.wallet)) onClickMobile();
    else if (supportsExtension(props.wallet)) onClickExtension();
    else onClickDesktop();
    return createComponent(DesktopConnectionModalStyled, {
        "data-tc-wallets-modal-connection-desktop": "true",
        get children () {
            return [
                createComponent(Show, {
                    get when () {
                        return !props.backDisabled;
                    },
                    get children () {
                        return createComponent(StyledIconButton$2, {
                            icon: "arrow",
                            onClick: ()=>props.onBackClick()
                        });
                    }
                }),
                createComponent(H1Styled$6, {
                    get children () {
                        return props.wallet.name;
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return mode() === "mobile";
                    },
                    get children () {
                        return createComponent(H2Styled$4, {
                            translationKey: "walletModal.desktopConnectionModal.scanQR",
                            get translationValues () {
                                return {
                                    name: props.wallet.name
                                };
                            },
                            get children () {
                                return [
                                    "Scan the QR code below with your phone\u2019s or ",
                                    createMemo(()=>props.wallet.name),
                                    "\u2019s camera"
                                ];
                            }
                        });
                    }
                }),
                createComponent(BodyStyled$1, {
                    get qr () {
                        return mode() === "mobile";
                    },
                    get children () {
                        return createComponent(Switch, {
                            get children () {
                                return [
                                    createComponent(Match, {
                                        get when () {
                                            return mode() === "mobile";
                                        },
                                        get children () {
                                            return createComponent(QRCodeStyled$1, {
                                                disableCopy: false,
                                                get sourceUrl () {
                                                    return addReturnStrategy(universalLink(), "none");
                                                },
                                                get imageUrl () {
                                                    return props.wallet.imageUrl;
                                                }
                                            });
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return connectionErrored();
                                        },
                                        get children () {
                                            return [
                                                createComponent(ErrorIconStyled$1, {
                                                    size: "s"
                                                }),
                                                createComponent(BodyTextStyled$1, {
                                                    translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                                                    children: "Connection declined"
                                                }),
                                                createComponent(ButtonsContainerStyled$1, {
                                                    get children () {
                                                        return createComponent(Button, {
                                                            get leftIcon () {
                                                                return createComponent(RetryIcon, {});
                                                            },
                                                            get onClick () {
                                                                return mode() === "extension" ? onClickExtension : onClickDesktop;
                                                            },
                                                            get children () {
                                                                return createComponent(Translation, {
                                                                    translationKey: "common.retry",
                                                                    children: "Retry"
                                                                });
                                                            }
                                                        });
                                                    }
                                                })
                                            ];
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return mode() === "extension";
                                        },
                                        get children () {
                                            return [
                                                createComponent(Show, {
                                                    get when () {
                                                        return (0, _sdk.isWalletInfoCurrentlyInjected)(props.wallet);
                                                    },
                                                    get children () {
                                                        return [
                                                            createComponent(LoaderStyled$1, {
                                                                size: "s"
                                                            }),
                                                            createComponent(BodyTextStyled$1, {
                                                                translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                                                                get translationValues () {
                                                                    return {
                                                                        name: props.wallet.name
                                                                    };
                                                                },
                                                                get children () {
                                                                    return [
                                                                        "Continue in ",
                                                                        createMemo(()=>props.wallet.name),
                                                                        " browser extension\u2026"
                                                                    ];
                                                                }
                                                            }),
                                                            createComponent(ButtonsContainerStyled$1, {
                                                                get children () {
                                                                    return createComponent(Button, {
                                                                        get leftIcon () {
                                                                            return createComponent(RetryIcon, {});
                                                                        },
                                                                        onClick: onClickExtension,
                                                                        get children () {
                                                                            return createComponent(Translation, {
                                                                                translationKey: "common.retry",
                                                                                children: "Retry"
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            })
                                                        ];
                                                    }
                                                }),
                                                createComponent(Show, {
                                                    get when () {
                                                        return !(0, _sdk.isWalletInfoCurrentlyInjected)(props.wallet);
                                                    },
                                                    get children () {
                                                        return [
                                                            createComponent(BodyTextStyled$1, {
                                                                translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                                                                get translationValues () {
                                                                    return {
                                                                        name: props.wallet.name
                                                                    };
                                                                },
                                                                get children () {
                                                                    return [
                                                                        "Seems you don't have installed ",
                                                                        createMemo(()=>props.wallet.name),
                                                                        " browser extension"
                                                                    ];
                                                                }
                                                            }),
                                                            createComponent(ButtonsContainerStyled$1, {
                                                                get children () {
                                                                    return createComponent(Link, {
                                                                        get href () {
                                                                            return props.wallet.aboutUrl;
                                                                        },
                                                                        blank: true,
                                                                        get children () {
                                                                            return createComponent(Button, {
                                                                                get rightIcon () {
                                                                                    return createComponent(LinkIcon, {});
                                                                                },
                                                                                onClick: onClickExtension,
                                                                                get children () {
                                                                                    return createComponent(Translation, {
                                                                                        translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                                        get translationValues () {
                                                                                            return {
                                                                                                name: props.wallet.name
                                                                                            };
                                                                                        },
                                                                                        get children () {
                                                                                            return [
                                                                                                "Get ",
                                                                                                createMemo(()=>props.wallet.name)
                                                                                            ];
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            })
                                                        ];
                                                    }
                                                })
                                            ];
                                        }
                                    }),
                                    createComponent(Match, {
                                        get when () {
                                            return mode() === "desktop";
                                        },
                                        get children () {
                                            return [
                                                createComponent(LoaderIcon, {
                                                    size: "m"
                                                }),
                                                createComponent(BodyTextStyled$1, {
                                                    translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                                                    get translationValues () {
                                                        return {
                                                            name: props.wallet.name
                                                        };
                                                    },
                                                    get children () {
                                                        return [
                                                            "Continue in ",
                                                            createMemo(()=>props.wallet.name),
                                                            " on desktop\u2026"
                                                        ];
                                                    }
                                                }),
                                                createComponent(ButtonsContainerStyled$1, {
                                                    get children () {
                                                        return [
                                                            createComponent(Button, {
                                                                get leftIcon () {
                                                                    return createComponent(RetryIcon, {});
                                                                },
                                                                onClick: onClickDesktop,
                                                                get children () {
                                                                    return createComponent(Translation, {
                                                                        translationKey: "common.retry",
                                                                        children: "Retry"
                                                                    });
                                                                }
                                                            }),
                                                            createComponent(Link, {
                                                                get href () {
                                                                    return props.wallet.aboutUrl;
                                                                },
                                                                blank: true,
                                                                get children () {
                                                                    return createComponent(Button, {
                                                                        get rightIcon () {
                                                                            return createComponent(LinkIcon, {});
                                                                        },
                                                                        get children () {
                                                                            return createComponent(Translation, {
                                                                                translationKey: "walletModal.desktopConnectionModal.getWallet",
                                                                                get translationValues () {
                                                                                    return {
                                                                                        name: props.wallet.name
                                                                                    };
                                                                                },
                                                                                get children () {
                                                                                    return [
                                                                                        "Get ",
                                                                                        createMemo(()=>props.wallet.name)
                                                                                    ];
                                                                                }
                                                                            });
                                                                        }
                                                                    });
                                                                }
                                                            })
                                                        ];
                                                    }
                                                })
                                            ];
                                        }
                                    })
                                ];
                            }
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return props.wallet.appName === AT_WALLET_APP_NAME;
                    },
                    get children () {
                        return createComponent(TgButtonStyled, {
                            get rightIcon () {
                                return createComponent(TgImageStyled, {
                                    get src () {
                                        return IMG.TG;
                                    }
                                });
                            },
                            scale: "s",
                            onClick: onClickTelegram,
                            get children () {
                                return createComponent(Translation, {
                                    translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                                    children: "Open Wallet in Telegram on desktop"
                                });
                            }
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return props.wallet.appName !== AT_WALLET_APP_NAME;
                    },
                    get children () {
                        return createComponent(BottomButtonsContainerStyled, {
                            get children () {
                                return [
                                    createComponent(Show, {
                                        get when () {
                                            return createMemo(()=>mode() !== "mobile")() && supportsMobile(props.wallet);
                                        },
                                        get children () {
                                            return createComponent(FooterButton$1, {
                                                appearance: "secondary",
                                                get leftIcon () {
                                                    return createComponent(MobileIcon, {});
                                                },
                                                onClick: onClickMobile,
                                                get children () {
                                                    return createComponent(Translation, {
                                                        translationKey: "common.mobile",
                                                        children: "Mobile"
                                                    });
                                                }
                                            });
                                        }
                                    }),
                                    createComponent(Show, {
                                        get when () {
                                            return createMemo(()=>mode() !== "extension")() && supportsExtension(props.wallet);
                                        },
                                        get children () {
                                            return createComponent(FooterButton$1, {
                                                appearance: "secondary",
                                                get leftIcon () {
                                                    return createComponent(BrowserIcon, {});
                                                },
                                                onClick: onClickExtension,
                                                get children () {
                                                    return createComponent(Translation, {
                                                        translationKey: "common.browserExtension",
                                                        children: "Browser Extension"
                                                    });
                                                }
                                            });
                                        }
                                    }),
                                    createComponent(Show, {
                                        get when () {
                                            return createMemo(()=>mode() !== "desktop")() && supportsDesktop(props.wallet);
                                        },
                                        get children () {
                                            return createComponent(FooterButton$1, {
                                                appearance: "secondary",
                                                get leftIcon () {
                                                    return createComponent(DesktopIcon, {});
                                                },
                                                onClick: onClickDesktop,
                                                get children () {
                                                    return createComponent(Translation, {
                                                        translationKey: "common.desktop",
                                                        children: "Desktop"
                                                    });
                                                }
                                            });
                                        }
                                    })
                                ];
                            }
                        });
                    }
                })
            ];
        }
    });
};
const InfoModalStyled = styled.div``;
const StyledIconButton$1 = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`;
const H1Styled$5 = styled(H1)`
    margin-bottom: 18px;
`;
const InfoBlock = styled.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const InfoBlockIconClass = u`
    margin-bottom: 12px;
`;
const H3Styled = styled(H3)`
    text-align: center;
    margin-bottom: 4px;
`;
const TextStyled$1 = styled(Text)`
    text-align: center;
    max-width: 352px;
    color: ${(props)=>props.theme.colors.text.secondary};
`;
const ButtonsBlock = styled.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;
const LINKS = {
    GET_A_WALLET: "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"
};
const InfoModal = (props)=>{
    return createComponent(InfoModalStyled, {
        "data-tc-wallets-modal-info": "true",
        get children () {
            return [
                createComponent(StyledIconButton$1, {
                    icon: "arrow",
                    onClick: ()=>props.onBackClick()
                }),
                createComponent(H1Styled$5, {
                    translationKey: "walletModal.infoModal.whatIsAWallet",
                    children: "What is a wallet"
                }),
                createComponent(ScrollContainer, {
                    get children () {
                        return [
                            createComponent(InfoBlock, {
                                get children () {
                                    return [
                                        createComponent(SecurityIcon, {
                                            "class": InfoBlockIconClass
                                        }),
                                        createComponent(H3Styled, {
                                            translationKey: "walletModal.infoModal.secureDigitalAssets",
                                            children: "Secure digital assets storage"
                                        }),
                                        createComponent(TextStyled$1, {
                                            translationKey: "walletModal.infoModal.walletProtects",
                                            children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
                                        })
                                    ];
                                }
                            }),
                            createComponent(InfoBlock, {
                                get children () {
                                    return [
                                        createComponent(PersonalityIcon, {
                                            "class": InfoBlockIconClass
                                        }),
                                        createComponent(H3Styled, {
                                            translationKey: "walletModal.infoModal.controlIdentity",
                                            children: "Control your Web3 identity"
                                        }),
                                        createComponent(TextStyled$1, {
                                            translationKey: "walletModal.infoModal.manageIdentity",
                                            children: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."
                                        })
                                    ];
                                }
                            }),
                            createComponent(InfoBlock, {
                                get children () {
                                    return [
                                        createComponent(SwapIcon, {
                                            "class": InfoBlockIconClass
                                        }),
                                        createComponent(H3Styled, {
                                            translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                                            children: "Effortless crypto transactions"
                                        }),
                                        createComponent(TextStyled$1, {
                                            translationKey: "walletModal.infoModal.easilySend",
                                            children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
                                        })
                                    ];
                                }
                            }),
                            createComponent(ButtonsBlock, {
                                get children () {
                                    return createComponent(Link, {
                                        get href () {
                                            return LINKS.GET_A_WALLET;
                                        },
                                        blank: true,
                                        get children () {
                                            return createComponent(Button, {
                                                get rightIcon () {
                                                    return createComponent(WalletIcon, {});
                                                },
                                                get children () {
                                                    return createComponent(Translation, {
                                                        translationKey: "walletModal.infoModal.getAWallet",
                                                        children: "Get a Wallet"
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            })
                        ];
                    }
                })
            ];
        }
    });
};
const MobileConnectionModalStyled = styled.div``;
const BodyStyled = styled.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`;
const H1Styled$4 = styled(H1)`
    max-width: 262px;
    margin: 0 auto 8px;
`;
const StyledIconButton = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`;
const FooterStyled = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${(props)=>rgba(props.theme.colors.icon.secondary, 0.2)};
`;
const ImageStyled = styled(Image)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`;
const FooterButton = styled(Link)`
    margin-left: auto;
`;
const LoaderStyled = styled(LoaderIcon)`
    margin-bottom: 18px;
    margin-top: 2px;
`;
const ErrorIconStyled = styled(ErrorIcon)`
    margin-bottom: 16px;
`;
const BodyTextStyled = styled(H2)`
    color: ${(props)=>props.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`;
const ButtonsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`;
const H1Styled$3 = styled(H1)`
    margin-bottom: 2px;
    padding: 0 64px;
`;
const H2Styled$3 = styled(H2)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`;
const QrCodeWrapper$1 = styled.div`
    padding: 0 24px 24px;
`;
const MobileConnectionQR = (props)=>{
    return [
        createComponent(H1Styled$3, {
            get children () {
                return props.walletInfo.name;
            }
        }),
        createComponent(H2Styled$3, {
            translationKey: "walletModal.mobileConnectionModal.scanQR",
            get translationValues () {
                return {
                    name: props.walletInfo.name
                };
            },
            get children () {
                return [
                    "Scan the QR code below with your phone\u2019s or ",
                    createMemo(()=>props.walletInfo.name),
                    "\u2019s camera"
                ];
            }
        }),
        createComponent(QrCodeWrapper$1, {
            get children () {
                return createComponent(QRCode, {
                    get imageUrl () {
                        return props.walletInfo.imageUrl;
                    },
                    get sourceUrl () {
                        return addReturnStrategy(props.universalLink, "none");
                    },
                    disableCopy: true
                });
            }
        })
    ];
};
const MobileConnectionModal = (props)=>{
    const theme = useTheme();
    const [firstClick, setFirstClick] = createSignal(true);
    const [showQR, setShowQR] = createSignal(false);
    const [connectionErrored, setConnectionErrored] = createSignal(false);
    const connector = useContext(ConnectorContext);
    const unsubscribe = connector.onStatusChange(()=>{}, ()=>{
        setConnectionErrored(true);
    });
    const universalLink = createMemo(()=>connector.connect({
            universalLink: props.wallet.universalLink,
            bridgeUrl: props.wallet.bridgeUrl
        }, props.additionalRequest));
    const onClickTelegram = ()=>{
        const alwaysForceRedirect = true;
        setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, props.wallet), {
            openMethod: "universal-link"
        }));
        redirectToTelegram(universalLink(), {
            returnStrategy: appState.returnStrategy,
            twaReturnUrl: appState.twaReturnUrl,
            forceRedirect: alwaysForceRedirect
        });
    };
    const onRetry = ()=>{
        const currentUniversalLink = universalLink();
        if ((0, _sdk.isTelegramUrl)(currentUniversalLink)) return onClickTelegram();
        setConnectionErrored(false);
        const forceRedirect = !firstClick();
        setFirstClick(false);
        redirectToWallet(universalLink(), props.wallet.deepLink, {
            returnStrategy: appState.returnStrategy,
            forceRedirect
        }, (method)=>{
            setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, props.wallet), {
                openMethod: method
            }));
        });
    };
    const onOpenQR = ()=>{
        setConnectionErrored(false);
        setShowQR(true);
        setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, props.wallet), {
            openMethod: "qrcode"
        }));
    };
    const onCloseQR = ()=>{
        setShowQR(false);
        setLastSelectedWalletInfo(__spreadProps(__spreadValues({}, props.wallet), {
            openMethod: "universal-link"
        }));
    };
    const onBack = ()=>{
        if (showQR()) onCloseQR();
        else props.onBackClick();
    };
    onCleanup(unsubscribe);
    onRetry();
    return createComponent(MobileConnectionModalStyled, {
        "data-tc-wallets-modal-connection-mobile": "true",
        get children () {
            return [
                createComponent(Show, {
                    get when () {
                        return !props.backDisabled || showQR();
                    },
                    get children () {
                        return createComponent(StyledIconButton, {
                            icon: "arrow",
                            onClick: onBack
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return showQR();
                    },
                    get children () {
                        return createComponent(MobileConnectionQR, {
                            get universalLink () {
                                return universalLink();
                            },
                            get walletInfo () {
                                return props.wallet;
                            }
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return !showQR();
                    },
                    get children () {
                        return [
                            createComponent(H1Styled$4, {
                                get children () {
                                    return props.wallet.name;
                                }
                            }),
                            createComponent(BodyStyled, {
                                get children () {
                                    return [
                                        createComponent(Show, {
                                            get when () {
                                                return connectionErrored();
                                            },
                                            get children () {
                                                return [
                                                    createComponent(ErrorIconStyled, {
                                                        size: "s"
                                                    }),
                                                    createComponent(BodyTextStyled, {
                                                        translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                                                        children: "Connection declined"
                                                    }),
                                                    createComponent(ButtonsContainerStyled, {
                                                        get children () {
                                                            return [
                                                                createComponent(Button, {
                                                                    get leftIcon () {
                                                                        return createComponent(RetryIcon, {});
                                                                    },
                                                                    onClick: onRetry,
                                                                    get children () {
                                                                        return createComponent(Translation, {
                                                                            translationKey: "common.retry",
                                                                            children: "Retry"
                                                                        });
                                                                    }
                                                                }),
                                                                createComponent(Button, {
                                                                    get leftIcon () {
                                                                        return createComponent(QRIcon, {
                                                                            get fill () {
                                                                                return theme.colors.accent;
                                                                            }
                                                                        });
                                                                    },
                                                                    onClick: onOpenQR,
                                                                    get children () {
                                                                        return createComponent(Translation, {
                                                                            translationKey: "walletModal.mobileConnectionModal.showQR",
                                                                            children: "Show QR Code"
                                                                        });
                                                                    }
                                                                })
                                                            ];
                                                        }
                                                    })
                                                ];
                                            }
                                        }),
                                        createComponent(Show, {
                                            get when () {
                                                return !connectionErrored();
                                            },
                                            get children () {
                                                return [
                                                    createComponent(LoaderStyled, {
                                                        size: "s"
                                                    }),
                                                    createComponent(BodyTextStyled, {
                                                        translationKey: "walletModal.mobileConnectionModal.continueIn",
                                                        get translationValues () {
                                                            return {
                                                                name: props.wallet.name
                                                            };
                                                        },
                                                        get children () {
                                                            return [
                                                                "Continue in ",
                                                                createMemo(()=>props.wallet.name),
                                                                "\u2026"
                                                            ];
                                                        }
                                                    }),
                                                    createComponent(ButtonsContainerStyled, {
                                                        get children () {
                                                            return [
                                                                createComponent(Button, {
                                                                    get leftIcon () {
                                                                        return createComponent(RetryIcon, {});
                                                                    },
                                                                    onClick: onRetry,
                                                                    get children () {
                                                                        return createComponent(Translation, {
                                                                            translationKey: "common.retry",
                                                                            children: "Retry"
                                                                        });
                                                                    }
                                                                }),
                                                                createComponent(Button, {
                                                                    get leftIcon () {
                                                                        return createComponent(QRIcon, {
                                                                            get fill () {
                                                                                return theme.colors.accent;
                                                                            }
                                                                        });
                                                                    },
                                                                    onClick: onOpenQR,
                                                                    get children () {
                                                                        return createComponent(Translation, {
                                                                            translationKey: "walletModal.mobileConnectionModal.showQR",
                                                                            children: "Show QR Code"
                                                                        });
                                                                    }
                                                                })
                                                            ];
                                                        }
                                                    })
                                                ];
                                            }
                                        })
                                    ];
                                }
                            }),
                            createComponent(FooterStyled, {
                                get children () {
                                    return [
                                        createComponent(ImageStyled, {
                                            get src () {
                                                return props.wallet.imageUrl;
                                            }
                                        }),
                                        createComponent(H3, {
                                            get children () {
                                                return props.wallet.name;
                                            }
                                        }),
                                        createComponent(FooterButton, {
                                            get href () {
                                                return props.wallet.aboutUrl;
                                            },
                                            blank: true,
                                            get children () {
                                                return createComponent(Button, {
                                                    get children () {
                                                        return createComponent(Translation, {
                                                            translationKey: "common.get",
                                                            children: "GET"
                                                        });
                                                    }
                                                });
                                            }
                                        })
                                    ];
                                }
                            })
                        ];
                    }
                })
            ];
        }
    });
};
const borders$1 = {
    m: "16px",
    s: "12px",
    none: "0"
};
const tgBorders = {
    m: "6px",
    s: "6px",
    none: "0"
};
const UlStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`;
const OtherOptionButton = styled.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${mediaTouch} {
        &:active {
            transform: scale(0.92);
        }
    }
`;
const Divider = styled.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${(props)=>props.theme.colors.icon.secondary};
    opacity: 0.2;
`;
const IconContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: ${(props)=>borders$1[props.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props)=>props.theme.colors.background.tint};
    margin-bottom: 8px;
`;
const H1Styled$2 = styled(H1)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`;
const H2Styled$2 = styled(H2)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
`;
styled(Button)`
    display: block;
    margin: 0 auto;
`;
const TelegramButtonStyled = styled(Button)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${(props)=>borders$1[props.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${(props)=>props.theme.colors.telegramButton};

    color: ${(props)=>props.theme.colors.constant.white};
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;
`;
const TGImageStyled = styled(Image)`
    border-radius: ${(props)=>tgBorders[props.theme.borderRadius]};
    width: 24px;
    height: 24px;
`;
const StyledLeftActionButton = styled(IconButton)`
    position: absolute;
    top: 16px;
    left: 16px;
`;
const H1Styled$1 = styled(H1)`
    margin-bottom: 2px;
    padding: 0 64px;
`;
const H2Styled$1 = styled(H2)`
    margin-bottom: 20px;
    padding: 0 64px;
`;
const QrCodeWrapper = styled.div`
    padding: 0 24px 24px;
`;
const MobileUniversalQR = (props)=>{
    return [
        createComponent(H1Styled$1, {
            translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
            children: "Connect your wallet"
        }),
        createComponent(H2Styled$1, {
            translationKey: "walletModal.mobileUniversalModal.scan",
            children: "Scan with your mobile wallet"
        }),
        createComponent(QrCodeWrapper, {
            get children () {
                return createComponent(QRCode, {
                    get imageUrl () {
                        return IMG.TON;
                    },
                    get sourceUrl () {
                        return addReturnStrategy(props.universalLink, "none");
                    },
                    disableCopy: true
                });
            }
        })
    ];
};
function getUniqueBridges(walletsList) {
    const uniqueBridges = new Set(walletsList.filter((0, _sdk.isWalletInfoRemote)).map((item)=>item.bridgeUrl));
    return Array.from(uniqueBridges).map((bridgeUrl)=>({
            bridgeUrl
        }));
}
function bridgesIsEqual(left, right) {
    const leftSet = new Set(left == null ? void 0 : left.map((i2)=>i2.bridgeUrl));
    const rightSet = new Set(right == null ? void 0 : right.map((i2)=>i2.bridgeUrl));
    return leftSet.size === rightSet.size && [
        ...leftSet
    ].every((value)=>rightSet.has(value));
}
const _tmpl$$1 = /* @__PURE__ */ template$1(`<li></li>`), _tmpl$2 = /* @__PURE__ */ template$1(`<div data-tc-wallets-modal-universal-mobile="true"></div>`);
const MobileUniversalModal = (props)=>{
    const [showQR, setShowQR] = createSignal(false);
    const [firstClick, setFirstClick] = createSignal(true);
    const connector = appState.connector;
    const walletsList = ()=>props.walletsList.filter((w)=>supportsMobile(w) && w.appName !== AT_WALLET_APP_NAME);
    const shouldShowMoreButton = ()=>walletsList().length > 7;
    const walletsBridges = createMemo(()=>getUniqueBridges(props.walletsList), null, {
        equals: bridgesIsEqual
    });
    const getUniversalLink = createMemo(()=>connector.connect(walletsBridges(), props.additionalRequest));
    setLastSelectedWalletInfo({
        openMethod: "universal-link"
    });
    const [isCopiedShown, setIsCopiedShown] = createSignal(void 0);
    const onCopy = ()=>__async(void 0, null, function*() {
            if (isCopiedShown() !== void 0) clearTimeout(isCopiedShown());
            yield copyToClipboard(getUniversalLink());
            const timeoutId = setTimeout(()=>setIsCopiedShown(void 0), 1500);
            setIsCopiedShown(timeoutId);
        });
    const onSelectUniversal = ()=>{
        const forceRedirect = !firstClick();
        setFirstClick(false);
        redirectToWallet(getUniversalLink(), void 0, {
            returnStrategy: appState.returnStrategy,
            forceRedirect
        }, (method)=>{
            setLastSelectedWalletInfo({
                openMethod: method
            });
        });
    };
    const onSelectTelegram = ()=>{
        const atWallet = props.walletsList.find((wallet)=>wallet.appName === AT_WALLET_APP_NAME);
        if (!atWallet || !(0, _sdk.isWalletInfoRemote)(atWallet)) throw new TonConnectUIError("@wallet bot not found in the wallets list");
        const walletLink = connector.connect({
            bridgeUrl: atWallet.bridgeUrl,
            universalLink: atWallet.universalLink
        }, props.additionalRequest);
        const forceRedirect = !firstClick();
        setFirstClick(false);
        redirectToTelegram(walletLink, {
            returnStrategy: appState.returnStrategy,
            twaReturnUrl: appState.twaReturnUrl,
            forceRedirect
        });
    };
    const onOpenQR = ()=>{
        setShowQR(true);
        setLastSelectedWalletInfo({
            openMethod: "qrcode"
        });
    };
    const onCloseQR = ()=>{
        setShowQR(false);
        setLastSelectedWalletInfo({
            openMethod: "universal-link"
        });
    };
    return (()=>{
        const _el$ = _tmpl$2.cloneNode(true);
        insert(_el$, createComponent(Show, {
            get when () {
                return showQR();
            },
            get children () {
                return [
                    createComponent(StyledLeftActionButton, {
                        icon: "arrow",
                        onClick: onCloseQR
                    }),
                    createComponent(MobileUniversalQR, {
                        get universalLink () {
                            return getUniversalLink();
                        }
                    })
                ];
            }
        }), null);
        insert(_el$, createComponent(Show, {
            get when () {
                return !showQR();
            },
            get children () {
                return [
                    createComponent(StyledLeftActionButton, {
                        get icon () {
                            return createComponent(QRIcon, {});
                        },
                        onClick: onOpenQR
                    }),
                    createComponent(H1Styled$2, {
                        translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
                        children: "Connect your wallet"
                    }),
                    createComponent(H2Styled$2, {
                        translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
                        children: "Open Wallet in Telegram or select your wallet to connect"
                    }),
                    createComponent(TelegramButtonStyled, {
                        get leftIcon () {
                            return createComponent(AtWalletIcon, {});
                        },
                        get rightIcon () {
                            return createComponent(TGImageStyled, {
                                get src () {
                                    return IMG.TG;
                                }
                            });
                        },
                        onClick: onSelectTelegram,
                        scale: "s",
                        get children () {
                            return createComponent(Translation, {
                                translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                                children: "Open Wallet in Telegram"
                            });
                        }
                    }),
                    createComponent(UlStyled, {
                        get children () {
                            return [
                                createComponent(For, {
                                    get each () {
                                        return createMemo(()=>!!shouldShowMoreButton())() ? walletsList().slice(0, 4) : walletsList();
                                    },
                                    children: (wallet)=>(()=>{
                                            const _el$3 = _tmpl$$1.cloneNode(true);
                                            insert(_el$3, createComponent(WalletItem, {
                                                get icon () {
                                                    return wallet.imageUrl;
                                                },
                                                get name () {
                                                    return wallet.name;
                                                },
                                                onClick: ()=>props.onSelect(wallet)
                                            }));
                                            return _el$3;
                                        })()
                                }),
                                createComponent(Show, {
                                    get when () {
                                        return shouldShowMoreButton();
                                    },
                                    get children () {
                                        const _el$2 = _tmpl$$1.cloneNode(true);
                                        insert(_el$2, createComponent(FourWalletsItem, {
                                            labelLine1: "View all",
                                            labelLine2: "wallets",
                                            get images () {
                                                return walletsList().slice(3, 7).map((i2)=>i2.imageUrl);
                                            },
                                            onClick: ()=>props.onSelectAllWallets()
                                        }));
                                        return _el$2;
                                    }
                                }),
                                createComponent(Divider, {
                                    children: "\xa0"
                                }),
                                createComponent(OtherOptionButton, {
                                    onClick: onSelectUniversal,
                                    get children () {
                                        return [
                                            createComponent(IconContainer, {
                                                get children () {
                                                    return createComponent(LongArrowIcon, {});
                                                }
                                            }),
                                            createComponent(Text, {
                                                fontWeight: 590,
                                                translationKey: "walletModal.mobileUniversalModal.openLink",
                                                children: "Open Link"
                                            })
                                        ];
                                    }
                                }),
                                createComponent(OtherOptionButton, {
                                    onClick: onCopy,
                                    get children () {
                                        return [
                                            createComponent(IconContainer, {
                                                get children () {
                                                    return createMemo(()=>isCopiedShown() !== void 0)() ? createComponent(DoneIcon, {}) : createComponent(CopyLightIcon, {});
                                                }
                                            }),
                                            createComponent(Text, {
                                                fontWeight: 590,
                                                get translationKey () {
                                                    return isCopiedShown() !== void 0 ? "common.copied" : "common.copyLink";
                                                },
                                                get children () {
                                                    return isCopiedShown() !== void 0 ? "Copied" : "Copy Link";
                                                }
                                            })
                                        ];
                                    }
                                })
                            ];
                        }
                    })
                ];
            }
        }), null);
        return _el$;
    })();
};
const borders = {
    m: "16px",
    s: "8px",
    none: "0"
};
const hoverBorders = {
    m: "8px",
    s: "4px",
    none: "0"
};
const DesktopUniversalModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`;
const H2Styled = styled(H2)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`;
const H2AvailableWalletsStyled = styled(H2)`
    margin-bottom: 16px;
`;
const QRCodeStyled = styled(QRCode)`
    margin-bottom: 24px;
`;
const WalletsContainerStyled = styled.ul`
    display: flex;
`;
styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`;
styled(Button)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${(props)=>borders[props.theme.borderRadius]};

    &:hover {
        ${(props)=>props.disableEventsAnimation ? "transform: unset;" : ""}
    }

    &:active {
        ${(props)=>props.disableEventsAnimation ? "transform: unset;" : ""}
    }
`;
styled.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${(props)=>props.theme.colors.background.primary};
    border-radius: ${(props)=>borders[props.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`;
styled.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${(props)=>hoverBorders[props.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${(props)=>props.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`;
styled(Image)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`;
styled.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
styled(Text)`
    color: ${(props)=>props.theme.colors.text.secondary};
    font-size: 16px;
`;
const _tmpl$ = /* @__PURE__ */ template$1(`<li></li>`);
const DesktopUniversalModal = (props)=>{
    const [popupOpened, setPopupOpened] = createSignal(false);
    const connector = appState.connector;
    const walletsBridges = createMemo(()=>getUniqueBridges(props.walletsList), null, {
        equals: bridgesIsEqual
    });
    setLastSelectedWalletInfo({
        openMethod: "qrcode"
    });
    const request = createMemo(()=>connector.connect(walletsBridges(), props.additionalRequest));
    return createComponent(DesktopUniversalModalStyled, {
        onClick: ()=>setPopupOpened(false),
        "data-tc-wallets-modal-universal-desktop": "true",
        get children () {
            return [
                createComponent(H1, {
                    translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
                    children: "Connect your wallet"
                }),
                createComponent(H2Styled, {
                    translationKey: "walletModal.desktopUniversalModal.scan",
                    children: "Scan with your mobile wallet"
                }),
                createComponent(QRCodeStyled, {
                    get sourceUrl () {
                        return addReturnStrategy(request(), "none");
                    },
                    get disableCopy () {
                        return popupOpened();
                    },
                    get imageUrl () {
                        return IMG.TON;
                    }
                }),
                createComponent(H2AvailableWalletsStyled, {
                    translationKey: "walletModal.desktopUniversalModal.availableWallets",
                    children: "Available wallets"
                }),
                createComponent(WalletsContainerStyled, {
                    get children () {
                        return [
                            createComponent(For, {
                                get each () {
                                    return props.walletsList.slice(0, 3);
                                },
                                children: (wallet)=>(()=>{
                                        const _el$ = _tmpl$.cloneNode(true);
                                        insert(_el$, createComponent(WalletLabeledItem, {
                                            wallet,
                                            onClick: ()=>props.onSelect(wallet)
                                        }));
                                        return _el$;
                                    })()
                            }),
                            createComponent(FourWalletsItem, {
                                labelLine1: "View all",
                                labelLine2: "wallets",
                                get images () {
                                    return props.walletsList.slice(3, 7).map((i2)=>i2.imageUrl);
                                },
                                onClick: ()=>props.onSelectAllWallets()
                            })
                        ];
                    }
                })
            ];
        }
    });
};
const WalletsModal = ()=>{
    const { locale } = useI18n()[1];
    createEffect(()=>locale(appState.language));
    createEffect(()=>{
        if (getWalletsModalIsOpened()) updateIsMobile();
        else {
            setSelectedWalletInfo(null);
            setSelectedTab("universal");
            setInfoTab(false);
        }
    });
    const connector = useContext(ConnectorContext);
    const tonConnectUI = useContext(TonConnectUiContext);
    const [fetchedWalletsList] = createResource(()=>tonConnectUI.getWallets());
    const [selectedWalletInfo, setSelectedWalletInfo] = createSignal(null);
    const [selectedTab, setSelectedTab] = createSignal("universal");
    const [infoTab, setInfoTab] = createSignal(false);
    const walletsList = createMemo(()=>{
        if (fetchedWalletsList.state !== "ready") return null;
        let walletsList2 = applyWalletsListConfiguration(fetchedWalletsList(), appState.walletsListConfiguration);
        const injectedWallets = walletsList2.filter((0, _sdk.isWalletInfoCurrentlyInjected));
        const notInjectedWallets = walletsList2.filter((w)=>!(0, _sdk.isWalletInfoCurrentlyInjected)(w));
        walletsList2 = (injectedWallets || []).concat(notInjectedWallets);
        const preferredWalletAppName = appState.preferredWalletAppName;
        const preferredWallet = walletsList2.find((item)=>eqWalletName(item, preferredWalletAppName));
        const someWalletsWithSameName = walletsList2.filter((item)=>eqWalletName(item, preferredWalletAppName)).length >= 2;
        if (preferredWalletAppName && preferredWallet && !someWalletsWithSameName) walletsList2 = [
            __spreadProps(__spreadValues({}, preferredWallet), {
                isPreferred: true
            })
        ].concat(walletsList2.filter((item)=>!eqWalletName(item, preferredWalletAppName)));
        const atWallet = walletsList2.find((item)=>eqWalletName(item, AT_WALLET_APP_NAME));
        if (atWallet) walletsList2 = [
            atWallet
        ].concat(walletsList2.filter((item)=>!eqWalletName(item, AT_WALLET_APP_NAME)));
        return walletsList2;
    });
    const additionalRequestLoading = ()=>{
        var _a2;
        return ((_a2 = appState.connectRequestParameters) == null ? void 0 : _a2.state) === "loading";
    };
    const additionalRequest = createMemo(()=>{
        var _a2;
        if (additionalRequestLoading()) return void 0;
        return (_a2 = appState.connectRequestParameters) == null ? void 0 : _a2.value;
    });
    const onClose = (closeReason)=>{
        tonConnectUI.closeModal(closeReason);
    };
    const unsubscribe = connector.onStatusChange((wallet)=>{
        if (wallet) onClose("wallet-selected");
    });
    const onSelectAllWallets = ()=>{
        setSelectedTab("all-wallets");
    };
    const onSelectUniversal = ()=>{
        setSelectedTab("universal");
    };
    const clearSelectedWalletInfo = ()=>{
        setSelectedWalletInfo(null);
    };
    onCleanup(()=>{
        setSelectedWalletInfo(null);
        setInfoTab(false);
    });
    onCleanup(unsubscribe);
    return createComponent(StyledModal, {
        get opened () {
            return getWalletsModalIsOpened();
        },
        get enableAndroidBackHandler () {
            return appState.enableAndroidBackHandler;
        },
        onClose: ()=>onClose("action-cancelled"),
        onClickQuestion: ()=>setInfoTab((v)=>!v),
        "data-tc-wallets-modal-container": "true",
        get children () {
            return [
                createComponent(Show, {
                    get when () {
                        return infoTab();
                    },
                    get children () {
                        return createComponent(InfoModal, {
                            onBackClick: ()=>setInfoTab(false)
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return !infoTab();
                    },
                    get children () {
                        return [
                            createComponent(Show, {
                                get when () {
                                    return additionalRequestLoading() || !walletsList();
                                },
                                get children () {
                                    return [
                                        createComponent(H1Styled$8, {
                                            translationKey: "walletModal.loading",
                                            children: "Wallets list is loading"
                                        }),
                                        createComponent(LoaderContainerStyled, {
                                            get children () {
                                                return createComponent(LoaderIcon, {
                                                    size: "m"
                                                });
                                            }
                                        })
                                    ];
                                }
                            }),
                            createComponent(Show, {
                                get when () {
                                    return createMemo(()=>!!!additionalRequestLoading())() && walletsList();
                                },
                                get children () {
                                    return createComponent(Switch, {
                                        get children () {
                                            return [
                                                createComponent(Match, {
                                                    get when () {
                                                        return selectedWalletInfo();
                                                    },
                                                    get children () {
                                                        return createComponent(Dynamic, {
                                                            get component () {
                                                                return isMobile() ? MobileConnectionModal : DesktopConnectionModal;
                                                            },
                                                            get wallet () {
                                                                return selectedWalletInfo();
                                                            },
                                                            get additionalRequest () {
                                                                return additionalRequest();
                                                            },
                                                            onBackClick: clearSelectedWalletInfo
                                                        });
                                                    }
                                                }),
                                                createComponent(Match, {
                                                    get when () {
                                                        return selectedTab() === "universal";
                                                    },
                                                    get children () {
                                                        return createComponent(Dynamic, {
                                                            get component () {
                                                                return isMobile() ? MobileUniversalModal : DesktopUniversalModal;
                                                            },
                                                            onSelect: setSelectedWalletInfo,
                                                            get walletsList () {
                                                                return walletsList();
                                                            },
                                                            get additionalRequest () {
                                                                return additionalRequest();
                                                            },
                                                            onSelectAllWallets
                                                        });
                                                    }
                                                }),
                                                createComponent(Match, {
                                                    get when () {
                                                        return selectedTab() === "all-wallets";
                                                    },
                                                    get children () {
                                                        return createComponent(AllWalletsListModal, {
                                                            get walletsList () {
                                                                return walletsList();
                                                            },
                                                            onBack: onSelectUniversal,
                                                            onSelect: setSelectedWalletInfo
                                                        });
                                                    }
                                                })
                                            ];
                                        }
                                    });
                                }
                            })
                        ];
                    }
                })
            ];
        }
    });
};
const ActionModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`;
const H1Styled = styled(H1)`
    margin-top: 16px;
`;
const TextStyled = styled(Text)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${(props)=>props.theme.colors.text.secondary};
`;
const LoaderButtonStyled = styled(Button)`
    min-width: 112px;
    margin-top: 32px;
`;
const LoaderIconStyled = styled(LoaderIcon)`
    height: 16px;
    width: 16px;
`;
const ButtonStyled = styled(Button)`
    margin-top: 32px;
`;
const ActionModal = (props)=>{
    const dataAttrs = useDataAttributes(props);
    const tonConnectUI = useContext(TonConnectUiContext);
    const [firstClick, setFirstClick] = createSignal(true);
    const [sent, setSent] = createSignal(false);
    createEffect(()=>{
        const currentAction = action();
        setSent(!!currentAction && "sent" in currentAction && currentAction.sent);
    });
    let universalLink;
    if ((tonConnectUI == null ? void 0 : tonConnectUI.wallet) && "universalLink" in tonConnectUI.wallet && (tonConnectUI.wallet.openMethod === "universal-link" || (0, _sdk.isTelegramUrl)(tonConnectUI.wallet.universalLink) && isInTMA())) universalLink = tonConnectUI.wallet.universalLink;
    let deepLink;
    if ((tonConnectUI == null ? void 0 : tonConnectUI.wallet) && "deepLink" in tonConnectUI.wallet && (tonConnectUI.wallet.openMethod === "custom-deeplink" || (0, _sdk.isTelegramUrl)(tonConnectUI.wallet.deepLink) && isInTMA())) deepLink = tonConnectUI.wallet.deepLink;
    const onOpenWallet = ()=>{
        const currentAction = action();
        const returnStrategy = "returnStrategy" in currentAction ? currentAction.returnStrategy : appState.returnStrategy;
        const forceRedirect = !firstClick();
        setFirstClick(false);
        if ((0, _sdk.isTelegramUrl)(universalLink)) redirectToTelegram(universalLink, {
            returnStrategy,
            twaReturnUrl: "twaReturnUrl" in currentAction ? currentAction.twaReturnUrl : appState.twaReturnUrl,
            forceRedirect
        });
        else redirectToWallet(universalLink, deepLink, {
            returnStrategy,
            forceRedirect
        }, ()=>{});
    };
    return createComponent(ActionModalStyled, mergeProps(dataAttrs, {
        get children () {
            return [
                createMemo(()=>props.icon),
                createComponent(H1Styled, {
                    get translationKey () {
                        return props.headerTranslationKey;
                    },
                    get translationValues () {
                        return props.headerTranslationValues;
                    }
                }),
                createComponent(TextStyled, {
                    get translationKey () {
                        return props.textTranslationKey;
                    },
                    get translationValues () {
                        return props.textTranslationValues;
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return !sent() && (props.showButton === "open-wallet" && universalLink || props.showButton !== "open-wallet");
                    },
                    get children () {
                        return createComponent(LoaderButtonStyled, {
                            disabled: true,
                            "data-tc-connect-button-loading": "true",
                            get children () {
                                return createComponent(LoaderIconStyled, {});
                            }
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return sent();
                    },
                    get children () {
                        return [
                            createComponent(Show, {
                                get when () {
                                    return props.showButton !== "open-wallet";
                                },
                                get children () {
                                    return createComponent(ButtonStyled, {
                                        onClick: ()=>props.onClose(),
                                        get children () {
                                            return createComponent(Translation, {
                                                translationKey: "common.close",
                                                children: "Close"
                                            });
                                        }
                                    });
                                }
                            }),
                            createComponent(Show, {
                                get when () {
                                    return props.showButton === "open-wallet" && universalLink;
                                },
                                get children () {
                                    return createComponent(ButtonStyled, {
                                        onClick: onOpenWallet,
                                        get children () {
                                            return createComponent(Translation, {
                                                translationKey: "common.openWallet",
                                                children: "Open wallet"
                                            });
                                        }
                                    });
                                }
                            })
                        ];
                    }
                })
            ];
        }
    }));
};
const ConfirmTransactionModal = (props)=>{
    const tonConnectUI = useContext(TonConnectUiContext);
    const [t2] = useI18n();
    const name = ()=>tonConnectUI.wallet && "name" in tonConnectUI.wallet ? tonConnectUI.wallet.name : t2("common.yourWallet", {}, "Your wallet");
    return createComponent(ActionModal, {
        headerTranslationKey: "actionModal.confirmTransaction.header",
        get headerTranslationValues () {
            return {
                name: name()
            };
        },
        textTranslationKey: "actionModal.confirmTransaction.text",
        get icon () {
            return createComponent(LoaderIcon, {
                size: "m"
            });
        },
        onClose: ()=>props.onClose(),
        showButton: "open-wallet",
        "data-tc-confirm-modal": "true"
    });
};
const TransactionCanceledModal = (props)=>{
    return createComponent(ActionModal, {
        headerTranslationKey: "actionModal.transactionCanceled.header",
        textTranslationKey: "actionModal.transactionCanceled.text",
        get icon () {
            return createComponent(ErrorIcon, {
                size: "m"
            });
        },
        onClose: ()=>props.onClose(),
        "data-tc-transaction-canceled-modal": "true"
    });
};
const TransactionSentModal = (props)=>{
    return createComponent(ActionModal, {
        headerTranslationKey: "actionModal.transactionSent.header",
        textTranslationKey: "actionModal.transactionSent.text",
        get icon () {
            return createComponent(SuccessIcon, {
                size: "m"
            });
        },
        onClose: ()=>props.onClose(),
        "data-tc-transaction-sent-modal": "true"
    });
};
const ActionsModal = ()=>{
    return createComponent(Modal, {
        get opened () {
            var _a2;
            return createMemo(()=>action() !== null)() && ((_a2 = action()) == null ? void 0 : _a2.openModal) === true;
        },
        get enableAndroidBackHandler () {
            return appState.enableAndroidBackHandler;
        },
        onClose: ()=>setAction(null),
        "data-tc-actions-modal-container": "true",
        get children () {
            return createComponent(Switch, {
                get children () {
                    return [
                        createComponent(Match, {
                            get when () {
                                return action().name === "transaction-sent";
                            },
                            get children () {
                                return createComponent(TransactionSentModal, {
                                    onClose: ()=>setAction(null)
                                });
                            }
                        }),
                        createComponent(Match, {
                            get when () {
                                return action().name === "transaction-canceled";
                            },
                            get children () {
                                return createComponent(TransactionCanceledModal, {
                                    onClose: ()=>setAction(null)
                                });
                            }
                        }),
                        createComponent(Match, {
                            get when () {
                                return action().name === "confirm-transaction";
                            },
                            get children () {
                                return createComponent(ConfirmTransactionModal, {
                                    onClose: ()=>setAction(null)
                                });
                            }
                        })
                    ];
                }
            });
        }
    });
};
const SingleWalletModal = ()=>{
    const { locale } = useI18n()[1];
    createEffect(()=>locale(appState.language));
    createEffect(()=>{
        if (getSingleWalletModalIsOpened()) updateIsMobile();
    });
    const connector = useContext(ConnectorContext);
    const tonConnectUI = useContext(TonConnectUiContext);
    const [infoTab, setInfoTab] = createSignal(false);
    const additionalRequestLoading = ()=>{
        var _a2;
        return ((_a2 = appState.connectRequestParameters) == null ? void 0 : _a2.state) === "loading";
    };
    const additionalRequest = createMemo(()=>{
        var _a2;
        if (additionalRequestLoading()) return void 0;
        return (_a2 = appState.connectRequestParameters) == null ? void 0 : _a2.value;
    });
    const onClose = (closeReason)=>{
        tonConnectUI.closeSingleWalletModal(closeReason);
    };
    const unsubscribe = connector.onStatusChange((wallet)=>{
        if (wallet) onClose("wallet-selected");
    });
    onCleanup(unsubscribe);
    onCleanup(()=>{
        setInfoTab(false);
    });
    return createComponent(StyledModal, {
        get opened () {
            return getSingleWalletModalIsOpened();
        },
        get enableAndroidBackHandler () {
            return appState.enableAndroidBackHandler;
        },
        onClose: ()=>onClose("action-cancelled"),
        onClickQuestion: ()=>setInfoTab((v)=>!v),
        "data-tc-wallets-modal-container": "true",
        get children () {
            return [
                createComponent(Show, {
                    get when () {
                        return infoTab();
                    },
                    get children () {
                        return createComponent(InfoModal, {
                            onBackClick: ()=>setInfoTab(false)
                        });
                    }
                }),
                createComponent(Show, {
                    get when () {
                        return !infoTab();
                    },
                    get children () {
                        return [
                            createComponent(Show, {
                                get when () {
                                    return additionalRequestLoading();
                                },
                                get children () {
                                    return [
                                        createComponent(H1Styled$8, {
                                            translationKey: "walletModal.loading",
                                            children: "Wallets list is loading"
                                        }),
                                        createComponent(LoaderContainerStyled, {
                                            get children () {
                                                return createComponent(LoaderIcon, {
                                                    size: "m"
                                                });
                                            }
                                        })
                                    ];
                                }
                            }),
                            createComponent(Show, {
                                get when () {
                                    return !additionalRequestLoading();
                                },
                                get children () {
                                    return createComponent(Dynamic, {
                                        get component () {
                                            return isMobile() ? MobileConnectionModal : DesktopConnectionModal;
                                        },
                                        get wallet () {
                                            return getSingleWalletModalWalletInfo();
                                        },
                                        get additionalRequest () {
                                            return additionalRequest();
                                        },
                                        onBackClick: ()=>{},
                                        backDisabled: true
                                    });
                                }
                            })
                        ];
                    }
                })
            ];
        }
    });
};
const App = (props)=>{
    const translations = createI18nContext(i18nDictionary, appState.language);
    defineStylesRoot();
    fixMobileSafariActiveTransition();
    return createComponent(I18nContext.Provider, {
        value: translations,
        get children () {
            return createComponent(TonConnectUiContext.Provider, {
                get value () {
                    return props.tonConnectUI;
                },
                get children () {
                    return createComponent(ConnectorContext.Provider, {
                        get value () {
                            return appState.connector;
                        },
                        get children () {
                            return [
                                createComponent(GlobalStyles, {}),
                                createComponent(ThemeProvider, {
                                    theme: themeState,
                                    get children () {
                                        return [
                                            createComponent(Show, {
                                                get when () {
                                                    return appState.buttonRootId;
                                                },
                                                get children () {
                                                    return createComponent(Portal, {
                                                        get mount () {
                                                            return document.getElementById(appState.buttonRootId);
                                                        },
                                                        get children () {
                                                            return createComponent(AccountButton, {});
                                                        }
                                                    });
                                                }
                                            }),
                                            createComponent(Dynamic, {
                                                component: globalStylesTag,
                                                get children () {
                                                    return [
                                                        createComponent(WalletsModal, {}),
                                                        createComponent(SingleWalletModal, {}),
                                                        createComponent(ActionsModal, {})
                                                    ];
                                                }
                                            })
                                        ];
                                    }
                                })
                            ];
                        }
                    });
                }
            });
        }
    });
};
const widgetController = {
    openWalletsModal: ()=>void setTimeout(()=>setWalletsModalState({
                status: "opened",
                closeReason: null
            })),
    closeWalletsModal: (reason)=>void setTimeout(()=>setWalletsModalState({
                status: "closed",
                closeReason: reason
            })),
    openSingleWalletModal: (walletInfo)=>{
        setTimeout(()=>setSingleWalletModalState({
                status: "opened",
                closeReason: null,
                walletInfo
            }));
    },
    closeSingleWalletModal: (reason)=>void setTimeout(()=>setSingleWalletModalState({
                status: "closed",
                closeReason: reason
            })),
    setAction: (action2)=>void setTimeout(()=>setAction(action2)),
    clearAction: ()=>void setTimeout(()=>setAction(null)),
    getSelectedWalletInfo: ()=>lastSelectedWalletInfo(),
    removeSelectedWalletInfo: ()=>setLastSelectedWalletInfo(null),
    renderApp: (root, tonConnectUI)=>render(()=>createComponent(App, {
                tonConnectUI
            }), document.getElementById(root))
};
class WalletsModalManager {
    constructor(options){
        __publicField(this, "connector");
        __publicField(this, "setConnectRequestParametersCallback");
        __publicField(this, "consumers", []);
        __publicField(this, "tracker");
        __publicField(this, "state", walletsModalState());
        this.connector = options.connector;
        this.tracker = options.tracker;
        this.setConnectRequestParametersCallback = options.setConnectRequestParametersCallback;
        createEffect(()=>{
            const state = walletsModalState();
            this.state = state;
            this.consumers.forEach((consumer)=>consumer(state));
        });
    }
    open() {
        return __async(this, null, function*() {
            this.tracker.trackConnectionStarted();
            const walletsList = yield this.connector.getWallets();
            const embeddedWallet = walletsList.find((0, _sdk.isWalletInfoCurrentlyEmbedded));
            if (embeddedWallet) return this.connectEmbeddedWallet(embeddedWallet);
            else return this.openWalletsModal();
        });
    }
    close(reason = "action-cancelled") {
        if (reason === "action-cancelled") this.tracker.trackConnectionError("Connection was cancelled");
        widgetController.closeWalletsModal(reason);
    }
    onStateChange(onChange) {
        this.consumers.push(onChange);
        return ()=>{
            this.consumers = this.consumers.filter((consumer)=>consumer !== onChange);
        };
    }
    connectEmbeddedWallet(embeddedWallet) {
        const connect = (parameters)=>{
            setLastSelectedWalletInfo(embeddedWallet);
            this.connector.connect({
                jsBridgeKey: embeddedWallet.jsBridgeKey
            }, parameters);
        };
        const additionalRequest = appState.connectRequestParameters;
        if ((additionalRequest == null ? void 0 : additionalRequest.state) === "loading") this.setConnectRequestParametersCallback(connect);
        else connect(additionalRequest == null ? void 0 : additionalRequest.value);
    }
    openWalletsModal() {
        return __async(this, null, function*() {
            if (isInTMA()) sendExpand();
            widgetController.openWalletsModal();
            return new Promise((resolve)=>{
                const unsubscribe = this.onStateChange((state)=>{
                    const { status } = state;
                    if (status === "opened") {
                        unsubscribe();
                        resolve();
                    }
                });
            });
        });
    }
}
class TransactionModalManager {
    constructor(options){
        __publicField(this, "connector");
        __publicField(this, "consumers", []);
        this.connector = options.connector;
        createEffect(()=>{
            const currentAction = action();
            this.consumers.forEach((consumer)=>consumer(currentAction));
        });
    }
    onStateChange(consumer) {
        this.consumers.push(consumer);
        return ()=>{
            this.consumers = this.consumers.filter((c2)=>c2 !== consumer);
        };
    }
}
class SingleWalletModalManager {
    constructor(options){
        __publicField(this, "connector");
        __publicField(this, "setConnectRequestParametersCallback");
        __publicField(this, "consumers", []);
        __publicField(this, "tracker");
        __publicField(this, "state", singleWalletModalState());
        this.connector = options.connector;
        this.tracker = options.tracker;
        this.setConnectRequestParametersCallback = options.setConnectRequestParametersCallback;
        createEffect(()=>{
            const state = singleWalletModalState();
            this.state = state;
            this.consumers.forEach((consumer)=>consumer(state));
        });
    }
    open(wallet) {
        return __async(this, null, function*() {
            this.tracker.trackConnectionStarted();
            const fetchedWalletsList = yield this.connector.getWallets();
            const walletsList = applyWalletsListConfiguration(fetchedWalletsList, appState.walletsListConfiguration);
            const embeddedWallet = walletsList.find((0, _sdk.isWalletInfoCurrentlyEmbedded));
            const isEmbeddedWalletExist = !!embeddedWallet;
            if (isEmbeddedWalletExist) return this.connectEmbeddedWallet(embeddedWallet);
            const externalWallets = walletsList.filter((0, _sdk.isWalletInfoRemote));
            const externalWallet = externalWallets.find((walletInfo)=>eqWalletName(walletInfo, wallet));
            const isExternalWalletExist = !!externalWallet;
            if (isExternalWalletExist) return this.openSingleWalletModal(externalWallet);
            const error = `Trying to open modal window with unknown wallet "${wallet}".`;
            this.tracker.trackConnectionError(error);
            throw new TonConnectUIError(error);
        });
    }
    close(reason = "action-cancelled") {
        if (reason === "action-cancelled") this.tracker.trackConnectionError("Connection was cancelled");
        widgetController.closeSingleWalletModal("action-cancelled");
    }
    onStateChange(onChange) {
        this.consumers.push(onChange);
        return ()=>{
            this.consumers = this.consumers.filter((consumer)=>consumer !== onChange);
        };
    }
    connectEmbeddedWallet(embeddedWallet) {
        const connect = (parameters)=>{
            setLastSelectedWalletInfo(embeddedWallet);
            this.connector.connect({
                jsBridgeKey: embeddedWallet.jsBridgeKey
            }, parameters);
        };
        const additionalRequest = appState.connectRequestParameters;
        if ((additionalRequest == null ? void 0 : additionalRequest.state) === "loading") this.setConnectRequestParametersCallback(connect);
        else connect(additionalRequest == null ? void 0 : additionalRequest.value);
    }
    openSingleWalletModal(wallet) {
        return __async(this, null, function*() {
            if (isInTMA()) sendExpand();
            widgetController.openSingleWalletModal(wallet);
            return new Promise((resolve)=>{
                const unsubscribe = this.onStateChange((state)=>{
                    const { status } = state;
                    if (status === "opened") {
                        unsubscribe();
                        resolve();
                    }
                });
            });
        });
    }
}
class TonConnectUITracker {
    constructor(options){
        __publicField(this, "eventPrefix", "ton-connect-ui-");
        __publicField(this, "tonConnectUiVersion");
        __publicField(this, "tonConnectSdkVersion", null);
        __publicField(this, "eventDispatcher");
        var _a2;
        this.eventDispatcher = (_a2 = options == null ? void 0 : options.eventDispatcher) != null ? _a2 : new (0, _sdk.BrowserEventDispatcher)();
        this.tonConnectUiVersion = options.tonConnectUiVersion;
        this.init().catch();
    }
    get version() {
        return (0, _sdk.createVersionInfo)({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
        });
    }
    init() {
        return __async(this, null, function*() {
            try {
                yield this.setRequestVersionHandler();
                this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion();
            } catch (e2) {}
        });
    }
    setRequestVersionHandler() {
        return __async(this, null, function*() {
            yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", ()=>__async(this, null, function*() {
                    yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", (0, _sdk.createResponseVersionEvent)(this.tonConnectUiVersion));
                }));
        });
    }
    requestTonConnectSdkVersion() {
        return __async(this, null, function*() {
            return new Promise((resolve, reject)=>__async(this, null, function*() {
                    try {
                        yield this.eventDispatcher.addEventListener("ton-connect-response-version", (event)=>{
                            resolve(event.detail.version);
                        }, {
                            once: true
                        });
                        yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", (0, _sdk.createRequestVersionEvent)());
                    } catch (e2) {
                        reject(e2);
                    }
                }));
        });
    }
    dispatchUserActionEvent(eventDetails) {
        var _a2;
        try {
            (_a2 = this.eventDispatcher) == null || _a2.dispatchEvent(`${this.eventPrefix}${eventDetails.type}`, eventDetails).catch();
        } catch (e2) {}
    }
    trackConnectionStarted(...args) {
        try {
            const event = (0, _sdk.createConnectionStartedEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackConnectionCompleted(...args) {
        try {
            const event = (0, _sdk.createConnectionCompletedEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackConnectionError(...args) {
        try {
            const event = (0, _sdk.createConnectionErrorEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackConnectionRestoringStarted(...args) {
        try {
            const event = (0, _sdk.createConnectionRestoringStartedEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackConnectionRestoringCompleted(...args) {
        try {
            const event = (0, _sdk.createConnectionRestoringCompletedEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackConnectionRestoringError(...args) {
        try {
            const event = (0, _sdk.createConnectionRestoringErrorEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackDisconnection(...args) {
        try {
            const event = (0, _sdk.createDisconnectionEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackTransactionSentForSignature(...args) {
        try {
            const event = (0, _sdk.createTransactionSentForSignatureEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackTransactionSigned(...args) {
        try {
            const event = (0, _sdk.createTransactionSignedEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
    trackTransactionSigningFailed(...args) {
        try {
            const event = (0, _sdk.createTransactionSigningFailedEvent)(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e2) {}
    }
}
const tonConnectUiVersion = "2.0.3";
class TonConnectUI {
    constructor(options){
        __publicField(this, "walletInfoStorage", new WalletInfoStorage());
        __publicField(this, "preferredWalletStorage", new PreferredWalletStorage());
        __publicField(this, "tracker");
        __publicField(this, "walletInfo", null);
        __publicField(this, "systemThemeChangeUnsubscribe", null);
        __publicField(this, "actionsConfiguration");
        __publicField(this, "walletsList");
        __publicField(this, "connectRequestParametersCallback");
        __publicField(this, "connector");
        __publicField(this, "modal");
        __publicField(this, "singleWalletModal");
        __publicField(this, "transactionModal");
        __publicField(this, "connectionRestored", Promise.resolve(false));
        if (options && "connector" in options && options.connector) this.connector = options.connector;
        else if (options && "manifestUrl" in options && options.manifestUrl) this.connector = new (0, _sdk.TonConnect)({
            manifestUrl: options.manifestUrl,
            eventDispatcher: options == null ? void 0 : options.eventDispatcher
        });
        else throw new TonConnectUIError("You have to specify a `manifestUrl` or a `connector` in the options.");
        this.tracker = new TonConnectUITracker({
            eventDispatcher: options == null ? void 0 : options.eventDispatcher,
            tonConnectUiVersion
        });
        this.modal = new WalletsModalManager({
            connector: this.connector,
            tracker: this.tracker,
            setConnectRequestParametersCallback: (callback)=>{
                this.connectRequestParametersCallback = callback;
            }
        });
        this.singleWalletModal = new SingleWalletModalManager({
            connector: this.connector,
            tracker: this.tracker,
            setConnectRequestParametersCallback: (callback)=>{
                this.connectRequestParametersCallback = callback;
            }
        });
        this.transactionModal = new TransactionModalManager({
            connector: this.connector
        });
        this.walletsList = this.getWallets();
        this.walletsList.then((list)=>preloadImages(uniq(list.map((item)=>item.imageUrl))));
        const rootId = this.normalizeWidgetRoot(options == null ? void 0 : options.widgetRootId);
        this.subscribeToWalletChange();
        if ((options == null ? void 0 : options.restoreConnection) !== false) this.connectionRestored = createMacrotaskAsync(()=>__async(this, null, function*() {
                this.tracker.trackConnectionRestoringStarted();
                yield this.connector.restoreConnection();
                if (!this.connector.connected) {
                    this.tracker.trackConnectionRestoringError("Connection was not restored");
                    this.walletInfoStorage.removeWalletInfo();
                } else this.tracker.trackConnectionRestoringCompleted(this.wallet);
                return this.connector.connected;
            }));
        this.uiOptions = mergeOptions(options, {
            uiPreferences: {
                theme: "SYSTEM"
            }
        });
        const preferredWalletName = this.preferredWalletStorage.getPreferredWalletAppName();
        setAppState({
            connector: this.connector,
            preferredWalletAppName: preferredWalletName
        });
        widgetController.renderApp(rootId, this);
    }
    static getWallets() {
        return (0, _sdk.TonConnect).getWallets();
    }
    get connected() {
        return this.connector.connected;
    }
    get account() {
        return this.connector.account;
    }
    get wallet() {
        if (!this.connector.wallet) return null;
        return __spreadValues(__spreadValues({}, this.connector.wallet), this.walletInfo);
    }
    set uiOptions(options) {
        var _a2, _b2, _c2, _d2, _e2;
        this.checkButtonRootExist(options.buttonRootId);
        this.actionsConfiguration = options.actionsConfiguration;
        if ((_a2 = options.uiPreferences) == null ? void 0 : _a2.theme) {
            if (((_b2 = options.uiPreferences) == null ? void 0 : _b2.theme) !== "SYSTEM") {
                (_c2 = this.systemThemeChangeUnsubscribe) == null || _c2.call(this);
                setTheme(options.uiPreferences.theme, options.uiPreferences.colorsSet);
            } else {
                setTheme(getSystemTheme(), options.uiPreferences.colorsSet);
                if (!this.systemThemeChangeUnsubscribe) this.systemThemeChangeUnsubscribe = subscribeToThemeChange(setTheme);
            }
        } else if ((_d2 = options.uiPreferences) == null ? void 0 : _d2.colorsSet) setColors(options.uiPreferences.colorsSet);
        if ((_e2 = options.uiPreferences) == null ? void 0 : _e2.borderRadius) setBorderRadius(options.uiPreferences.borderRadius);
        setAppState((state)=>{
            var _a3, _b3;
            const merged = mergeOptions(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, options.language && {
                language: options.language
            }), !!((_a3 = options.actionsConfiguration) == null ? void 0 : _a3.returnStrategy) && {
                returnStrategy: options.actionsConfiguration.returnStrategy
            }), !!((_b3 = options.actionsConfiguration) == null ? void 0 : _b3.twaReturnUrl) && {
                twaReturnUrl: options.actionsConfiguration.twaReturnUrl
            }), !!options.walletsListConfiguration && {
                walletsListConfiguration: options.walletsListConfiguration
            }), unwrap(state));
            if (options.buttonRootId !== void 0) merged.buttonRootId = options.buttonRootId;
            if (options.enableAndroidBackHandler !== void 0) merged.enableAndroidBackHandler = options.enableAndroidBackHandler;
            return merged;
        });
    }
    setConnectRequestParameters(connectRequestParameters) {
        var _a2;
        setAppState({
            connectRequestParameters
        });
        if ((connectRequestParameters == null ? void 0 : connectRequestParameters.state) === "ready" || !connectRequestParameters) (_a2 = this.connectRequestParametersCallback) == null || _a2.call(this, connectRequestParameters == null ? void 0 : connectRequestParameters.value);
    }
    getWallets() {
        return __async(this, null, function*() {
            return this.connector.getWallets();
        });
    }
    onStatusChange(callback, errorsHandler) {
        return this.connector.onStatusChange((wallet)=>__async(this, null, function*() {
                if (wallet) {
                    const lastSelectedWalletInfo2 = yield this.getSelectedWalletInfo(wallet);
                    callback(__spreadValues(__spreadValues({}, wallet), lastSelectedWalletInfo2 || this.walletInfoStorage.getWalletInfo()));
                } else callback(wallet);
            }), errorsHandler);
    }
    openModal() {
        return __async(this, null, function*() {
            return this.modal.open();
        });
    }
    closeModal(reason) {
        this.modal.close(reason);
    }
    onModalStateChange(onChange) {
        return this.modal.onStateChange(onChange);
    }
    get modalState() {
        return this.modal.state;
    }
    openSingleWalletModal(wallet) {
        return __async(this, null, function*() {
            return this.singleWalletModal.open(wallet);
        });
    }
    closeSingleWalletModal(closeReason) {
        this.singleWalletModal.close(closeReason);
    }
    onSingleWalletModalStateChange(onChange) {
        return this.singleWalletModal.onStateChange(onChange);
    }
    get singleWalletModalState() {
        return this.singleWalletModal.state;
    }
    connectWallet() {
        return __async(this, null, function*() {
            const walletsList = yield this.getWallets();
            const embeddedWallet = walletsList.find((0, _sdk.isWalletInfoCurrentlyEmbedded));
            if (embeddedWallet) return yield this.connectEmbeddedWallet(embeddedWallet);
            else return yield this.connectExternalWallet();
        });
    }
    disconnect() {
        this.tracker.trackDisconnection(this.wallet, "dapp");
        widgetController.clearAction();
        widgetController.removeSelectedWalletInfo();
        this.walletInfoStorage.removeWalletInfo();
        return this.connector.disconnect();
    }
    sendTransaction(tx, options) {
        return __async(this, null, function*() {
            this.tracker.trackTransactionSentForSignature(this.wallet, tx);
            if (!this.connected) {
                this.tracker.trackTransactionSigningFailed(this.wallet, tx, "Wallet was not connected");
                throw new TonConnectUIError("Connect wallet to send a transaction.");
            }
            if (isInTMA()) sendExpand();
            const { notifications: notifications2, modals, returnStrategy, twaReturnUrl, skipRedirectToWallet } = this.getModalsAndNotificationsConfiguration(options);
            widgetController.setAction({
                name: "confirm-transaction",
                showNotification: notifications2.includes("before"),
                openModal: modals.includes("before"),
                sent: false
            });
            const onRequestSent = ()=>{
                if (abortController.signal.aborted) return;
                widgetController.setAction({
                    name: "confirm-transaction",
                    showNotification: notifications2.includes("before"),
                    openModal: modals.includes("before"),
                    sent: true
                });
                if (this.walletInfo && "universalLink" in this.walletInfo && (this.walletInfo.openMethod === "universal-link" || this.walletInfo.openMethod === "custom-deeplink")) {
                    if ((0, _sdk.isTelegramUrl)(this.walletInfo.universalLink)) redirectToTelegram(this.walletInfo.universalLink, {
                        returnStrategy,
                        twaReturnUrl: twaReturnUrl || appState.twaReturnUrl,
                        forceRedirect: false
                    });
                    else redirectToWallet(this.walletInfo.universalLink, this.walletInfo.deepLink, {
                        returnStrategy,
                        forceRedirect: false
                    }, ()=>{});
                }
            };
            const abortController = new AbortController();
            const unsubscribe = this.onTransactionModalStateChange((action2)=>{
                if (action2 == null ? void 0 : action2.openModal) return;
                unsubscribe();
                if (!action2) abortController.abort();
            });
            try {
                const result = yield this.waitForSendTransaction({
                    transaction: tx,
                    signal: abortController.signal
                }, onRequestSent);
                this.tracker.trackTransactionSigned(this.wallet, tx, result);
                widgetController.setAction({
                    name: "transaction-sent",
                    showNotification: notifications2.includes("success"),
                    openModal: modals.includes("success")
                });
                return result;
            } catch (e2) {
                widgetController.setAction({
                    name: "transaction-canceled",
                    showNotification: notifications2.includes("error"),
                    openModal: modals.includes("error")
                });
                if (e2 instanceof (0, _sdk.TonConnectError)) throw e2;
                else {
                    console.error(e2);
                    throw new TonConnectUIError("Unhandled error:" + e2);
                }
            } finally{
                unsubscribe();
            }
        });
    }
    connectEmbeddedWallet(embeddedWallet) {
        return __async(this, null, function*() {
            const connect = (parameters)=>{
                setLastSelectedWalletInfo(embeddedWallet);
                this.connector.connect({
                    jsBridgeKey: embeddedWallet.jsBridgeKey
                }, parameters);
            };
            const additionalRequest = appState.connectRequestParameters;
            if ((additionalRequest == null ? void 0 : additionalRequest.state) === "loading") this.connectRequestParametersCallback = connect;
            else connect(additionalRequest == null ? void 0 : additionalRequest.value);
            return yield this.waitForWalletConnection({
                ignoreErrors: false
            });
        });
    }
    connectExternalWallet() {
        return __async(this, null, function*() {
            const abortController = new AbortController();
            widgetController.openWalletsModal();
            const unsubscribe = this.onModalStateChange((state)=>{
                const { status, closeReason } = state;
                if (status === "opened") return;
                unsubscribe();
                if (closeReason === "action-cancelled") abortController.abort();
            });
            return yield this.waitForWalletConnection({
                ignoreErrors: true,
                signal: abortController.signal
            });
        });
    }
    waitForWalletConnection(options) {
        return __async(this, null, function*() {
            return new Promise((resolve, reject)=>{
                this.tracker.trackConnectionStarted();
                const { ignoreErrors = false, signal = null } = options;
                if (signal && signal.aborted) {
                    this.tracker.trackConnectionError("Connection was cancelled");
                    return reject(new TonConnectUIError("Wallet was not connected"));
                }
                const onStatusChangeHandler = (wallet)=>__async(this, null, function*() {
                        if (!wallet) {
                            this.tracker.trackConnectionError("Connection was cancelled");
                            if (ignoreErrors) return;
                            unsubscribe();
                            reject(new TonConnectUIError("Wallet was not connected"));
                        } else {
                            this.tracker.trackConnectionCompleted(wallet);
                            unsubscribe();
                            resolve(wallet);
                        }
                    });
                const onErrorsHandler = (reason)=>{
                    this.tracker.trackConnectionError(reason.message);
                    if (ignoreErrors) return;
                    unsubscribe();
                    reject(reason);
                };
                const unsubscribe = this.onStatusChange((wallet)=>onStatusChangeHandler(wallet), (reason)=>onErrorsHandler(reason));
                if (signal) signal.addEventListener("abort", ()=>{
                    unsubscribe();
                    reject(new TonConnectUIError("Wallet was not connected"));
                }, {
                    once: true
                });
            });
        });
    }
    waitForSendTransaction(options, onRequestSent) {
        return __async(this, null, function*() {
            return new Promise((resolve, reject)=>{
                const { transaction, signal } = options;
                if (signal.aborted) {
                    this.tracker.trackTransactionSigningFailed(this.wallet, transaction, "Transaction was cancelled");
                    return reject(new TonConnectUIError("Transaction was not sent"));
                }
                const onTransactionHandler = (transaction2)=>__async(this, null, function*() {
                        resolve(transaction2);
                    });
                const onErrorsHandler = (reason)=>{
                    reject(reason);
                };
                const onCanceledHandler = ()=>{
                    this.tracker.trackTransactionSigningFailed(this.wallet, transaction, "Transaction was cancelled");
                    reject(new TonConnectUIError("Transaction was not sent"));
                };
                signal.addEventListener("abort", onCanceledHandler, {
                    once: true
                });
                this.connector.sendTransaction(transaction, {
                    onRequestSent,
                    signal
                }).then((result)=>{
                    signal.removeEventListener("abort", onCanceledHandler);
                    return onTransactionHandler(result);
                }).catch((reason)=>{
                    signal.removeEventListener("abort", onCanceledHandler);
                    return onErrorsHandler(reason);
                });
            });
        });
    }
    onTransactionModalStateChange(onChange) {
        return this.transactionModal.onStateChange(onChange);
    }
    subscribeToWalletChange() {
        this.connector.onStatusChange((wallet)=>__async(this, null, function*() {
                var _a2;
                if (wallet) {
                    yield this.updateWalletInfo(wallet);
                    this.setPreferredWalletAppName(((_a2 = this.walletInfo) == null ? void 0 : _a2.appName) || wallet.device.appName);
                } else this.walletInfoStorage.removeWalletInfo();
            }));
    }
    setPreferredWalletAppName(value) {
        this.preferredWalletStorage.setPreferredWalletAppName(value);
        setAppState({
            preferredWalletAppName: value
        });
    }
    getSelectedWalletInfo(wallet) {
        return __async(this, null, function*() {
            let lastSelectedWalletInfo2 = widgetController.getSelectedWalletInfo();
            if (!lastSelectedWalletInfo2) return null;
            let fullLastSelectedWalletInfo;
            if (!("name" in lastSelectedWalletInfo2)) {
                const walletsList = applyWalletsListConfiguration((yield this.walletsList), appState.walletsListConfiguration);
                const walletInfo = walletsList.find((item)=>eqWalletName(item, wallet.device.appName));
                if (!walletInfo) throw new TonConnectUIError(`Cannot find WalletInfo for the '${wallet.device.appName}' wallet`);
                fullLastSelectedWalletInfo = __spreadValues(__spreadValues({}, walletInfo), lastSelectedWalletInfo2);
            } else fullLastSelectedWalletInfo = lastSelectedWalletInfo2;
            return fullLastSelectedWalletInfo;
        });
    }
    updateWalletInfo(wallet) {
        return __async(this, null, function*() {
            const selectedWalletInfo = yield this.getSelectedWalletInfo(wallet);
            if (selectedWalletInfo) {
                this.walletInfo = selectedWalletInfo;
                this.walletInfoStorage.setWalletInfo(selectedWalletInfo);
                return;
            }
            const storedWalletInfo = this.walletInfoStorage.getWalletInfo();
            if (storedWalletInfo) {
                this.walletInfo = storedWalletInfo;
                return;
            }
            this.walletInfo = (yield this.walletsList).find((walletInfo)=>eqWalletName(walletInfo, wallet.device.appName)) || null;
        });
    }
    normalizeWidgetRoot(rootId) {
        if (!rootId || !document.getElementById(rootId)) {
            rootId = "tc-widget-root";
            const rootElement = document.createElement("div");
            rootElement.id = rootId;
            document.body.appendChild(rootElement);
        }
        return rootId;
    }
    checkButtonRootExist(buttonRootId) {
        if (buttonRootId == null) return;
        if (!document.getElementById(buttonRootId)) throw new TonConnectUIError(`${buttonRootId} element not found in the document.`);
    }
    getModalsAndNotificationsConfiguration(options) {
        var _a2, _b2, _c2, _d2, _e2, _f2;
        const allActions = [
            "before",
            "success",
            "error"
        ];
        let notifications2 = allActions;
        if (((_a2 = this.actionsConfiguration) == null ? void 0 : _a2.notifications) && ((_b2 = this.actionsConfiguration) == null ? void 0 : _b2.notifications) !== "all") notifications2 = this.actionsConfiguration.notifications;
        if (options == null ? void 0 : options.notifications) {
            if (options.notifications === "all") notifications2 = allActions;
            else notifications2 = options.notifications;
        }
        let modals = [
            "before"
        ];
        if ((_c2 = this.actionsConfiguration) == null ? void 0 : _c2.modals) {
            if (this.actionsConfiguration.modals === "all") modals = allActions;
            else modals = this.actionsConfiguration.modals;
        }
        if (options == null ? void 0 : options.modals) {
            if (options.modals === "all") modals = allActions;
            else modals = options.modals;
        }
        const returnStrategy = (options == null ? void 0 : options.returnStrategy) || ((_d2 = this.actionsConfiguration) == null ? void 0 : _d2.returnStrategy) || "back";
        const twaReturnUrl = (options == null ? void 0 : options.twaReturnUrl) || ((_e2 = this.actionsConfiguration) == null ? void 0 : _e2.twaReturnUrl);
        let skipRedirectToWallet = (options == null ? void 0 : options.skipRedirectToWallet) || ((_f2 = this.actionsConfiguration) == null ? void 0 : _f2.skipRedirectToWallet) || "ios";
        if (isInTMA()) skipRedirectToWallet = "never";
        return {
            notifications: notifications2,
            modals,
            returnStrategy,
            twaReturnUrl,
            skipRedirectToWallet
        };
    }
}

},{"ee72e0e3c0386191":"d5jf4","@tonconnect/sdk":"2ZoEW","ua-parser-js":"2fabB","deepmerge":"ck1Q2","classnames":"jocGM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"2ZoEW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CHAIN", ()=>(0, _protocol.CHAIN));
parcelHelpers.export(exports, "CONNECT_EVENT_ERROR_CODES", ()=>(0, _protocol.CONNECT_EVENT_ERROR_CODES));
parcelHelpers.export(exports, "CONNECT_ITEM_ERROR_CODES", ()=>(0, _protocol.CONNECT_ITEM_ERROR_CODES));
parcelHelpers.export(exports, "SEND_TRANSACTION_ERROR_CODES", ()=>(0, _protocol.SEND_TRANSACTION_ERROR_CODES));
parcelHelpers.export(exports, "BadRequestError", ()=>BadRequestError);
parcelHelpers.export(exports, "BrowserEventDispatcher", ()=>BrowserEventDispatcher);
parcelHelpers.export(exports, "FetchWalletsError", ()=>FetchWalletsError);
parcelHelpers.export(exports, "LocalstorageNotFoundError", ()=>LocalstorageNotFoundError);
parcelHelpers.export(exports, "ParseHexError", ()=>ParseHexError);
parcelHelpers.export(exports, "TonConnect", ()=>TonConnect);
parcelHelpers.export(exports, "TonConnectError", ()=>TonConnectError);
parcelHelpers.export(exports, "UnknownAppError", ()=>UnknownAppError);
parcelHelpers.export(exports, "UnknownError", ()=>UnknownError);
parcelHelpers.export(exports, "UserRejectsError", ()=>UserRejectsError);
parcelHelpers.export(exports, "WalletAlreadyConnectedError", ()=>WalletAlreadyConnectedError);
parcelHelpers.export(exports, "WalletNotConnectedError", ()=>WalletNotConnectedError);
parcelHelpers.export(exports, "WalletNotInjectedError", ()=>WalletNotInjectedError);
parcelHelpers.export(exports, "WalletsListManager", ()=>WalletsListManager);
parcelHelpers.export(exports, "WrongAddressError", ()=>WrongAddressError);
parcelHelpers.export(exports, "createConnectionCompletedEvent", ()=>createConnectionCompletedEvent);
parcelHelpers.export(exports, "createConnectionErrorEvent", ()=>createConnectionErrorEvent);
parcelHelpers.export(exports, "createConnectionRestoringCompletedEvent", ()=>createConnectionRestoringCompletedEvent);
parcelHelpers.export(exports, "createConnectionRestoringErrorEvent", ()=>createConnectionRestoringErrorEvent);
parcelHelpers.export(exports, "createConnectionRestoringStartedEvent", ()=>createConnectionRestoringStartedEvent);
parcelHelpers.export(exports, "createConnectionStartedEvent", ()=>createConnectionStartedEvent);
parcelHelpers.export(exports, "createDisconnectionEvent", ()=>createDisconnectionEvent);
parcelHelpers.export(exports, "createRequestVersionEvent", ()=>createRequestVersionEvent);
parcelHelpers.export(exports, "createResponseVersionEvent", ()=>createResponseVersionEvent);
parcelHelpers.export(exports, "createTransactionSentForSignatureEvent", ()=>createTransactionSentForSignatureEvent);
parcelHelpers.export(exports, "createTransactionSignedEvent", ()=>createTransactionSignedEvent);
parcelHelpers.export(exports, "createTransactionSigningFailedEvent", ()=>createTransactionSigningFailedEvent);
parcelHelpers.export(exports, "createVersionInfo", ()=>createVersionInfo);
parcelHelpers.export(exports, "default", ()=>TonConnect);
parcelHelpers.export(exports, "encodeTelegramUrlParameters", ()=>encodeTelegramUrlParameters);
parcelHelpers.export(exports, "isTelegramUrl", ()=>isTelegramUrl);
parcelHelpers.export(exports, "isWalletInfoCurrentlyEmbedded", ()=>isWalletInfoCurrentlyEmbedded);
parcelHelpers.export(exports, "isWalletInfoCurrentlyInjected", ()=>isWalletInfoCurrentlyInjected);
parcelHelpers.export(exports, "isWalletInfoInjectable", ()=>isWalletInfoInjectable);
parcelHelpers.export(exports, "isWalletInfoInjected", ()=>isWalletInfoInjected);
parcelHelpers.export(exports, "isWalletInfoRemote", ()=>isWalletInfoRemote);
parcelHelpers.export(exports, "toUserFriendlyAddress", ()=>toUserFriendlyAddress);
var _protocol = require("@tonconnect/protocol");
var _isomorphicEventsource = require("@tonconnect/isomorphic-eventsource");
var _isomorphicFetch = require("@tonconnect/isomorphic-fetch");
var process = require("52c206a362bfb8cf");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
/**
 * Base class for TonConnect errors. You can check if the error was triggered by the @tonconnect/sdk using `err instanceof TonConnectError`.
 */ class TonConnectError extends Error {
    constructor(message, options){
        super(message, options);
        this.message = `${TonConnectError.prefix} ${this.constructor.name}${this.info ? ": " + this.info : ""}${message ? "\n" + message : ""}`;
        Object.setPrototypeOf(this, TonConnectError.prototype);
    }
    get info() {
        return "";
    }
}
TonConnectError.prefix = "[TON_CONNECT_SDK_ERROR]";
/**
 * Thrown when passed DappMetadata is in incorrect format.
 */ class DappMetadataError extends TonConnectError {
    get info() {
        return "Passed DappMetadata is in incorrect format.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, DappMetadataError.prototype);
    }
}
/**
 * Thrown when passed manifest contains errors.
 */ class ManifestContentErrorError extends TonConnectError {
    get info() {
        return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, ManifestContentErrorError.prototype);
    }
}
/**
 * Thrown when wallet can't get manifest by passed manifestUrl.
 */ class ManifestNotFoundError extends TonConnectError {
    get info() {
        return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, ManifestNotFoundError.prototype);
    }
}
/**
 * Thrown when wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection.
 */ class WalletAlreadyConnectedError extends TonConnectError {
    get info() {
        return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, WalletAlreadyConnectedError.prototype);
    }
}
/**
 * Thrown when send transaction or other protocol methods called while wallet is not connected.
 */ class WalletNotConnectedError extends TonConnectError {
    get info() {
        return "Send transaction or other protocol methods called while wallet is not connected.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, WalletNotConnectedError.prototype);
    }
}
function isWalletConnectionSourceJS(value) {
    return "jsBridgeKey" in value;
}
/**
 * Thrown when user rejects the action in the wallet.
 */ class UserRejectsError extends TonConnectError {
    get info() {
        return "User rejects the action in the wallet.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, UserRejectsError.prototype);
    }
}
/**
 * Thrown when request to the wallet contains errors.
 */ class BadRequestError extends TonConnectError {
    get info() {
        return "Request to the wallet contains errors.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
/**
 * Thrown when app tries to send rpc request to the injected wallet while not connected.
 */ class UnknownAppError extends TonConnectError {
    get info() {
        return "App tries to send rpc request to the injected wallet while not connected.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, UnknownAppError.prototype);
    }
}
/**
 * Thrown when there is an attempt to connect to the injected wallet while it is not exists in the webpage.
 */ class WalletNotInjectedError extends TonConnectError {
    get info() {
        return "There is an attempt to connect to the injected wallet while it is not exists in the webpage.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, WalletNotInjectedError.prototype);
    }
}
/**
 * Thrown when `Storage` was not specified in the `DappMetadata` and default `localStorage` was not detected in the Node.js environment.
 */ class LocalstorageNotFoundError extends TonConnectError {
    get info() {
        return "Storage was not specified in the `DappMetadata` and default `localStorage` was not detected in the environment.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, LocalstorageNotFoundError.prototype);
    }
}
/**
 * Thrown when an error occurred while fetching the wallets list.
 */ class FetchWalletsError extends TonConnectError {
    get info() {
        return "An error occurred while fetching the wallets list.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, FetchWalletsError.prototype);
    }
}
/**
 * Thrown when passed address is in incorrect format.
 */ class WrongAddressError extends TonConnectError {
    get info() {
        return "Passed address is in incorrect format.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, WrongAddressError.prototype);
    }
}
/**
 * Thrown when passed hex is in incorrect format.
 */ class ParseHexError extends TonConnectError {
    get info() {
        return "Passed hex is in incorrect format.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, ParseHexError.prototype);
    }
}
/**
 * Unhanded unknown error.
 */ class UnknownError extends TonConnectError {
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, UnknownError.prototype);
    }
}
const connectEventErrorsCodes = {
    [(0, _protocol.CONNECT_EVENT_ERROR_CODES).UNKNOWN_ERROR]: UnknownError,
    [(0, _protocol.CONNECT_EVENT_ERROR_CODES).USER_REJECTS_ERROR]: UserRejectsError,
    [(0, _protocol.CONNECT_EVENT_ERROR_CODES).BAD_REQUEST_ERROR]: BadRequestError,
    [(0, _protocol.CONNECT_EVENT_ERROR_CODES).UNKNOWN_APP_ERROR]: UnknownAppError,
    [(0, _protocol.CONNECT_EVENT_ERROR_CODES).MANIFEST_NOT_FOUND_ERROR]: ManifestNotFoundError,
    [(0, _protocol.CONNECT_EVENT_ERROR_CODES).MANIFEST_CONTENT_ERROR]: ManifestContentErrorError
};
class ConnectErrorsParser {
    parseError(error) {
        let ErrorConstructor = UnknownError;
        if (error.code in connectEventErrorsCodes) ErrorConstructor = connectEventErrorsCodes[error.code] || UnknownError;
        return new ErrorConstructor(error.message);
    }
}
const connectErrorsParser = new ConnectErrorsParser();
class RpcParser {
    isError(response) {
        return "error" in response;
    }
}
const sendTransactionErrors = {
    [(0, _protocol.SEND_TRANSACTION_ERROR_CODES).UNKNOWN_ERROR]: UnknownError,
    [(0, _protocol.SEND_TRANSACTION_ERROR_CODES).USER_REJECTS_ERROR]: UserRejectsError,
    [(0, _protocol.SEND_TRANSACTION_ERROR_CODES).BAD_REQUEST_ERROR]: BadRequestError,
    [(0, _protocol.SEND_TRANSACTION_ERROR_CODES).UNKNOWN_APP_ERROR]: UnknownAppError
};
class SendTransactionParser extends RpcParser {
    convertToRpcRequest(request) {
        return {
            method: "sendTransaction",
            params: [
                JSON.stringify(request)
            ]
        };
    }
    parseAndThrowError(response) {
        let ErrorConstructor = UnknownError;
        if (response.error.code in sendTransactionErrors) ErrorConstructor = sendTransactionErrors[response.error.code] || UnknownError;
        throw new ErrorConstructor(response.error.message);
    }
    convertFromRpcResponse(rpcResponse) {
        return {
            boc: rpcResponse.result
        };
    }
}
const sendTransactionParser = new SendTransactionParser();
class HttpBridgeGatewayStorage {
    constructor(storage, bridgeUrl){
        this.storage = storage;
        this.storeKey = "ton-connect-storage_http-bridge-gateway::" + bridgeUrl;
    }
    storeLastEventId(lastEventId) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.storage.setItem(this.storeKey, lastEventId);
        });
    }
    removeLastEventId() {
        return __awaiter(this, void 0, void 0, function*() {
            return this.storage.removeItem(this.storeKey);
        });
    }
    getLastEventId() {
        return __awaiter(this, void 0, void 0, function*() {
            const stored = yield this.storage.getItem(this.storeKey);
            if (!stored) return null;
            return stored;
        });
    }
}
function removeUrlLastSlash(url) {
    if (url.slice(-1) === "/") return url.slice(0, -1);
    return url;
}
function addPathToUrl(url, path) {
    return removeUrlLastSlash(url) + "/" + path;
}
function isTelegramUrl(link) {
    if (!link) return false;
    const url = new URL(link);
    return url.protocol === "tg:" || url.hostname === "t.me";
}
function encodeTelegramUrlParameters(parameters) {
    return parameters.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--");
}
/**
 * Delays the execution of code for a specified number of milliseconds.
 * @param {number} timeout - The number of milliseconds to delay the execution.
 * @param {DelayOptions} [options] - Optional configuration options for the delay.
 * @return {Promise<void>} - A promise that resolves after the specified delay, or rejects if the delay is aborted.
 */ function delay(timeout, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            var _a, _b;
            if ((_a = options === null || options === void 0 ? void 0 : options.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
                reject(new TonConnectError("Delay aborted"));
                return;
            }
            const timeoutId = setTimeout(()=>resolve(), timeout);
            (_b = options === null || options === void 0 ? void 0 : options.signal) === null || _b === void 0 || _b.addEventListener("abort", ()=>{
                clearTimeout(timeoutId);
                reject(new TonConnectError("Delay aborted"));
            });
        });
    });
}
/**
 * Creates an AbortController instance with an optional AbortSignal.
 *
 * @param {AbortSignal} [signal] - An optional AbortSignal to use for aborting the controller.
 * @returns {AbortController} - An instance of AbortController.
 */ function createAbortController(signal) {
    const abortController = new AbortController();
    if (signal === null || signal === void 0 ? void 0 : signal.aborted) abortController.abort();
    else signal === null || signal === void 0 || signal.addEventListener("abort", ()=>abortController.abort(), {
        once: true
    });
    return abortController;
}
/**
 * Function to call ton api until we get response.
 * Because ton network is pretty unstable we need to make sure response is final.
 * @param {T} fn - function to call
 * @param {CallForSuccessOptions} [options] - optional configuration options
 */ function callForSuccess(fn, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function*() {
        const attempts = (_a = options === null || options === void 0 ? void 0 : options.attempts) !== null && _a !== void 0 ? _a : 10;
        const delayMs = (_b = options === null || options === void 0 ? void 0 : options.delayMs) !== null && _b !== void 0 ? _b : 200;
        const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
        if (typeof fn !== "function") throw new TonConnectError(`Expected a function, got ${typeof fn}`);
        let i = 0;
        let lastError;
        while(i < attempts){
            if (abortController.signal.aborted) throw new TonConnectError(`Aborted after attempts ${i}`);
            try {
                return yield fn({
                    signal: abortController.signal
                });
            } catch (err) {
                lastError = err;
                i++;
                if (i < attempts) yield delay(delayMs);
            }
        }
        throw lastError;
    });
}
function logDebug(...args) {
    try {
        console.debug("[TON_CONNECT_SDK]", ...args);
    } catch (_a) {}
}
function logError(...args) {
    try {
        console.error("[TON_CONNECT_SDK]", ...args);
    } catch (_a) {}
}
function logWarning(...args) {
    try {
        console.warn("[TON_CONNECT_SDK]", ...args);
    } catch (_a) {}
}
/**
 * Create a resource.
 *
 * @template T - The type of the resource.
 * @template Args - The type of the arguments for creating the resource.
 *
 * @param {(...args: Args) => Promise<T>} createFn - A function that creates the resource.
 * @param {(resource: T) => Promise<void>} [disposeFn] - An optional function that disposes the resource.
 */ function createResource(createFn, disposeFn) {
    let currentResource = null;
    let currentArgs = null;
    let currentPromise = null;
    let currentSignal = null;
    let abortController = null;
    // create a new resource
    const create = (signal, ...args)=>__awaiter(this, void 0, void 0, function*() {
            currentSignal = signal !== null && signal !== void 0 ? signal : null;
            abortController === null || abortController === void 0 || abortController.abort();
            abortController = createAbortController(signal);
            if (abortController.signal.aborted) throw new TonConnectError("Resource creation was aborted");
            currentArgs = args !== null && args !== void 0 ? args : null;
            const promise = createFn(abortController.signal, ...args);
            currentPromise = promise;
            const resource = yield promise;
            if (currentPromise !== promise && resource !== currentResource) {
                yield disposeFn(resource);
                throw new TonConnectError("Resource creation was aborted by a new resource creation");
            }
            currentResource = resource;
            return currentResource;
        });
    // get the current resource
    const current = ()=>{
        return currentResource !== null && currentResource !== void 0 ? currentResource : null;
    };
    // dispose the current resource
    const dispose = ()=>__awaiter(this, void 0, void 0, function*() {
            try {
                const resource = currentResource;
                currentResource = null;
                const promise = currentPromise;
                currentPromise = null;
                try {
                    abortController === null || abortController === void 0 || abortController.abort();
                } catch (e) {}
                yield Promise.allSettled([
                    resource ? disposeFn(resource) : Promise.resolve(),
                    promise ? disposeFn((yield promise)) : Promise.resolve()
                ]);
            } catch (e) {}
        });
    // recreate the current resource
    const recreate = (delayMs)=>__awaiter(this, void 0, void 0, function*() {
            const resource = currentResource;
            const promise = currentPromise;
            const args = currentArgs;
            const signal = currentSignal;
            yield delay(delayMs);
            if (resource === currentResource && promise === currentPromise && args === currentArgs && signal === currentSignal) return yield create(currentSignal, ...args !== null && args !== void 0 ? args : []);
            throw new TonConnectError("Resource recreation was aborted by a new resource creation");
        });
    return {
        create,
        current,
        dispose,
        recreate
    };
}
/**
 * Executes a function and provides deferred behavior, allowing for a timeout and abort functionality.
 *
 * @param {Deferrable<T>} fn - The function to execute. It should return a promise that resolves with the desired result.
 * @param {DeferOptions} options - Optional configuration options for the defer behavior.
 * @returns {Promise<T>} - A promise that resolves with the result of the executed function, or rejects with an error if it times out or is aborted.
 */ function timeout(fn, options) {
    const timeout = options === null || options === void 0 ? void 0 : options.timeout;
    const signal = options === null || options === void 0 ? void 0 : options.signal;
    const abortController = createAbortController(signal);
    return new Promise((resolve, reject)=>{
        if (abortController.signal.aborted) {
            reject(new TonConnectError("Operation aborted"));
            return;
        }
        let timeoutId;
        if (typeof timeout !== "undefined") timeoutId = setTimeout(()=>{
            abortController.abort();
            reject(new TonConnectError(`Timeout after ${timeout}ms`));
        }, timeout);
        abortController.signal.addEventListener("abort", ()=>{
            clearTimeout(timeoutId);
            reject(new TonConnectError("Operation aborted"));
        }, {
            once: true
        });
        const deferOptions = {
            timeout,
            abort: abortController.signal
        };
        fn(resolve, reject, deferOptions).finally(()=>clearTimeout(timeoutId));
    });
}
class BridgeGateway {
    constructor(storage, bridgeUrl, sessionId, listener, errorsListener){
        this.bridgeUrl = bridgeUrl;
        this.sessionId = sessionId;
        this.listener = listener;
        this.errorsListener = errorsListener;
        this.ssePath = "events";
        this.postPath = "message";
        this.heartbeatMessage = "heartbeat";
        this.defaultTtl = 300;
        this.defaultReconnectDelay = 5000;
        this.eventSource = createResource((signal, openingDeadlineMS)=>__awaiter(this, void 0, void 0, function*() {
                const eventSourceConfig = {
                    bridgeUrl: this.bridgeUrl,
                    ssePath: this.ssePath,
                    sessionId: this.sessionId,
                    bridgeGatewayStorage: this.bridgeGatewayStorage,
                    errorHandler: this.errorsHandler.bind(this),
                    messageHandler: this.messagesHandler.bind(this),
                    signal: signal,
                    openingDeadlineMS: openingDeadlineMS
                };
                return yield createEventSource(eventSourceConfig);
            }), (resource)=>__awaiter(this, void 0, void 0, function*() {
                resource.close();
            }));
        this.bridgeGatewayStorage = new HttpBridgeGatewayStorage(storage, bridgeUrl);
    }
    get isReady() {
        const eventSource = this.eventSource.current();
        return (eventSource === null || eventSource === void 0 ? void 0 : eventSource.readyState) === EventSource.OPEN;
    }
    get isClosed() {
        const eventSource = this.eventSource.current();
        return (eventSource === null || eventSource === void 0 ? void 0 : eventSource.readyState) !== EventSource.OPEN;
    }
    get isConnecting() {
        const eventSource = this.eventSource.current();
        return (eventSource === null || eventSource === void 0 ? void 0 : eventSource.readyState) === EventSource.CONNECTING;
    }
    registerSession(options) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.eventSource.create(options === null || options === void 0 ? void 0 : options.signal, options === null || options === void 0 ? void 0 : options.openingDeadlineMS);
        });
    }
    send(message, receiver, topic, ttlOrOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            // TODO: remove deprecated method
            const options = {};
            if (typeof ttlOrOptions === "number") options.ttl = ttlOrOptions;
            else {
                options.ttl = ttlOrOptions === null || ttlOrOptions === void 0 ? void 0 : ttlOrOptions.ttl;
                options.signal = ttlOrOptions === null || ttlOrOptions === void 0 ? void 0 : ttlOrOptions.signal;
                options.attempts = ttlOrOptions === null || ttlOrOptions === void 0 ? void 0 : ttlOrOptions.attempts;
            }
            const url = new URL(addPathToUrl(this.bridgeUrl, this.postPath));
            url.searchParams.append("client_id", this.sessionId);
            url.searchParams.append("to", receiver);
            url.searchParams.append("ttl", ((options === null || options === void 0 ? void 0 : options.ttl) || this.defaultTtl).toString());
            url.searchParams.append("topic", topic);
            const body = (0, _protocol.Base64).encode(message);
            yield callForSuccess((options)=>__awaiter(this, void 0, void 0, function*() {
                    const response = yield this.post(url, body, options.signal);
                    if (!response.ok) throw new TonConnectError(`Bridge send failed, status ${response.status}`);
                }), {
                attempts: (_a = options === null || options === void 0 ? void 0 : options.attempts) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER,
                delayMs: 5000,
                signal: options === null || options === void 0 ? void 0 : options.signal
            });
        });
    }
    pause() {
        this.eventSource.dispose().catch((e)=>logError(`Bridge pause failed, ${e}`));
    }
    unPause() {
        return __awaiter(this, void 0, void 0, function*() {
            const RECREATE_WITHOUT_DELAY = 0;
            yield this.eventSource.recreate(RECREATE_WITHOUT_DELAY);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.eventSource.dispose().catch((e)=>logError(`Bridge close failed, ${e}`));
        });
    }
    setListener(listener) {
        this.listener = listener;
    }
    setErrorsListener(errorsListener) {
        this.errorsListener = errorsListener;
    }
    post(url, body, signal) {
        return __awaiter(this, void 0, void 0, function*() {
            const response = yield fetch(url, {
                method: "post",
                body: body,
                signal: signal
            });
            if (!response.ok) throw new TonConnectError(`Bridge send failed, status ${response.status}`);
            return response;
        });
    }
    errorsHandler(eventSource, e) {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.isConnecting) {
                logError("Bridge error", JSON.stringify(e));
                return;
            }
            if (this.isReady) {
                try {
                    this.errorsListener(e);
                } catch (e) {}
                return;
            }
            if (this.isClosed) {
                eventSource.close();
                logDebug(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`);
                return yield this.eventSource.recreate(this.defaultReconnectDelay);
            }
            throw new TonConnectError("Bridge error, unknown state");
        });
    }
    messagesHandler(e) {
        return __awaiter(this, void 0, void 0, function*() {
            if (e.data === this.heartbeatMessage) return;
            yield this.bridgeGatewayStorage.storeLastEventId(e.lastEventId);
            if (this.isClosed) return;
            let bridgeIncomingMessage;
            try {
                bridgeIncomingMessage = JSON.parse(e.data);
            } catch (e) {
                throw new TonConnectError(`Bridge message parse failed, message ${e.data}`);
            }
            this.listener(bridgeIncomingMessage);
        });
    }
}
/**
 * Creates an event source.
 * @param {CreateEventSourceConfig} config - Configuration for creating an event source.
 */ function createEventSource(config) {
    return __awaiter(this, void 0, void 0, function*() {
        return yield timeout((resolve, reject, deferOptions)=>__awaiter(this, void 0, void 0, function*() {
                var _a;
                const abortController = createAbortController(deferOptions.signal);
                const signal = abortController.signal;
                if (signal.aborted) {
                    reject(new TonConnectError("Bridge connection aborted"));
                    return;
                }
                const url = new URL(addPathToUrl(config.bridgeUrl, config.ssePath));
                url.searchParams.append("client_id", config.sessionId);
                const lastEventId = yield config.bridgeGatewayStorage.getLastEventId();
                if (lastEventId) url.searchParams.append("last_event_id", lastEventId);
                if (signal.aborted) {
                    reject(new TonConnectError("Bridge connection aborted"));
                    return;
                }
                const eventSource = new EventSource(url.toString());
                eventSource.onerror = (reason)=>__awaiter(this, void 0, void 0, function*() {
                        if (signal.aborted) {
                            eventSource.close();
                            reject(new TonConnectError("Bridge connection aborted"));
                            return;
                        }
                        try {
                            const newInstance = yield config.errorHandler(eventSource, reason);
                            if (newInstance !== eventSource) eventSource.close();
                            if (newInstance && newInstance !== eventSource) resolve(newInstance);
                        } catch (e) {
                            eventSource.close();
                            reject(e);
                        }
                    });
                eventSource.onopen = ()=>{
                    if (signal.aborted) {
                        eventSource.close();
                        reject(new TonConnectError("Bridge connection aborted"));
                        return;
                    }
                    resolve(eventSource);
                };
                eventSource.onmessage = (event)=>{
                    if (signal.aborted) {
                        eventSource.close();
                        reject(new TonConnectError("Bridge connection aborted"));
                        return;
                    }
                    config.messageHandler(event);
                };
                (_a = config.signal) === null || _a === void 0 || _a.addEventListener("abort", ()=>{
                    eventSource.close();
                    reject(new TonConnectError("Bridge connection aborted"));
                });
            }), {
            timeout: config.openingDeadlineMS,
            signal: config.signal
        });
    });
}
function isPendingConnectionHttp(connection) {
    return !("connectEvent" in connection);
}
class BridgeConnectionStorage {
    constructor(storage){
        this.storage = storage;
        this.storeKey = "ton-connect-storage_bridge-connection";
    }
    storeConnection(connection) {
        return __awaiter(this, void 0, void 0, function*() {
            if (connection.type === "injected") return this.storage.setItem(this.storeKey, JSON.stringify(connection));
            if (!isPendingConnectionHttp(connection)) {
                const rawSession = {
                    sessionKeyPair: connection.session.sessionCrypto.stringifyKeypair(),
                    walletPublicKey: connection.session.walletPublicKey,
                    bridgeUrl: connection.session.bridgeUrl
                };
                const rawConnection = {
                    type: "http",
                    connectEvent: connection.connectEvent,
                    session: rawSession,
                    lastWalletEventId: connection.lastWalletEventId,
                    nextRpcRequestId: connection.nextRpcRequestId
                };
                return this.storage.setItem(this.storeKey, JSON.stringify(rawConnection));
            }
            const rawConnection = {
                type: "http",
                connectionSource: connection.connectionSource,
                sessionCrypto: connection.sessionCrypto.stringifyKeypair()
            };
            return this.storage.setItem(this.storeKey, JSON.stringify(rawConnection));
        });
    }
    removeConnection() {
        return __awaiter(this, void 0, void 0, function*() {
            return this.storage.removeItem(this.storeKey);
        });
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function*() {
            const stored = yield this.storage.getItem(this.storeKey);
            if (!stored) return null;
            const connection = JSON.parse(stored);
            if (connection.type === "injected") return connection;
            if ("connectEvent" in connection) {
                const sessionCrypto = new (0, _protocol.SessionCrypto)(connection.session.sessionKeyPair);
                return {
                    type: "http",
                    connectEvent: connection.connectEvent,
                    lastWalletEventId: connection.lastWalletEventId,
                    nextRpcRequestId: connection.nextRpcRequestId,
                    session: {
                        sessionCrypto,
                        bridgeUrl: connection.session.bridgeUrl,
                        walletPublicKey: connection.session.walletPublicKey
                    }
                };
            }
            return {
                type: "http",
                sessionCrypto: new (0, _protocol.SessionCrypto)(connection.sessionCrypto),
                connectionSource: connection.connectionSource
            };
        });
    }
    getHttpConnection() {
        return __awaiter(this, void 0, void 0, function*() {
            const connection = yield this.getConnection();
            if (!connection) throw new TonConnectError("Trying to read HTTP connection source while nothing is stored");
            if (connection.type === "injected") throw new TonConnectError("Trying to read HTTP connection source while injected connection is stored");
            return connection;
        });
    }
    getHttpPendingConnection() {
        return __awaiter(this, void 0, void 0, function*() {
            const connection = yield this.getConnection();
            if (!connection) throw new TonConnectError("Trying to read HTTP connection source while nothing is stored");
            if (connection.type === "injected") throw new TonConnectError("Trying to read HTTP connection source while injected connection is stored");
            if (!isPendingConnectionHttp(connection)) throw new TonConnectError("Trying to read HTTP-pending connection while http connection is stored");
            return connection;
        });
    }
    getInjectedConnection() {
        return __awaiter(this, void 0, void 0, function*() {
            const connection = yield this.getConnection();
            if (!connection) throw new TonConnectError("Trying to read Injected bridge connection source while nothing is stored");
            if ((connection === null || connection === void 0 ? void 0 : connection.type) === "http") throw new TonConnectError("Trying to read Injected bridge connection source while HTTP connection is stored");
            return connection;
        });
    }
    storedConnectionType() {
        return __awaiter(this, void 0, void 0, function*() {
            const stored = yield this.storage.getItem(this.storeKey);
            if (!stored) return null;
            const connection = JSON.parse(stored);
            return connection.type;
        });
    }
    storeLastWalletEventId(id) {
        return __awaiter(this, void 0, void 0, function*() {
            const connection = yield this.getConnection();
            if (connection && connection.type === "http" && !isPendingConnectionHttp(connection)) {
                connection.lastWalletEventId = id;
                return this.storeConnection(connection);
            }
        });
    }
    getLastWalletEventId() {
        return __awaiter(this, void 0, void 0, function*() {
            const connection = yield this.getConnection();
            if (connection && "lastWalletEventId" in connection) return connection.lastWalletEventId;
            return undefined;
        });
    }
    increaseNextRpcRequestId() {
        return __awaiter(this, void 0, void 0, function*() {
            const connection = yield this.getConnection();
            if (connection && "nextRpcRequestId" in connection) {
                const lastId = connection.nextRpcRequestId || 0;
                connection.nextRpcRequestId = lastId + 1;
                return this.storeConnection(connection);
            }
        });
    }
    getNextRpcRequestId() {
        return __awaiter(this, void 0, void 0, function*() {
            const connection = yield this.getConnection();
            if (connection && "nextRpcRequestId" in connection) return connection.nextRpcRequestId || 0;
            return 0;
        });
    }
}
const PROTOCOL_VERSION = 2;
class BridgeProvider {
    constructor(storage, walletConnectionSource){
        this.storage = storage;
        this.walletConnectionSource = walletConnectionSource;
        this.type = "http";
        this.standardUniversalLink = "tc://";
        this.pendingRequests = new Map();
        this.session = null;
        this.gateway = null;
        this.pendingGateways = [];
        this.listeners = [];
        this.defaultOpeningDeadlineMS = 5000;
        this.connectionStorage = new BridgeConnectionStorage(storage);
    }
    static fromStorage(storage) {
        return __awaiter(this, void 0, void 0, function*() {
            const bridgeConnectionStorage = new BridgeConnectionStorage(storage);
            const connection = yield bridgeConnectionStorage.getHttpConnection();
            if (isPendingConnectionHttp(connection)) return new BridgeProvider(storage, connection.connectionSource);
            return new BridgeProvider(storage, {
                bridgeUrl: connection.session.bridgeUrl
            });
        });
    }
    connect(message, options) {
        var _a;
        const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
        (_a = this.abortController) === null || _a === void 0 || _a.abort();
        this.abortController = abortController;
        this.closeGateways();
        const sessionCrypto = new (0, _protocol.SessionCrypto)();
        this.session = {
            sessionCrypto,
            bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
        };
        this.connectionStorage.storeConnection({
            type: "http",
            connectionSource: this.walletConnectionSource,
            sessionCrypto
        }).then(()=>__awaiter(this, void 0, void 0, function*() {
                if (abortController.signal.aborted) return;
                yield callForSuccess((_options)=>this.openGateways(sessionCrypto, {
                        openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
                        signal: _options === null || _options === void 0 ? void 0 : _options.signal
                    }), {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: 5000,
                    signal: abortController.signal
                });
            }));
        const universalLink = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
        return this.generateUniversalLink(universalLink, message);
    }
    restoreConnection(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
            (_a = this.abortController) === null || _a === void 0 || _a.abort();
            this.abortController = abortController;
            if (abortController.signal.aborted) return;
            this.closeGateways();
            const storedConnection = yield this.connectionStorage.getHttpConnection();
            if (!storedConnection) return;
            if (abortController.signal.aborted) return;
            const openingDeadlineMS = (_b = options === null || options === void 0 ? void 0 : options.openingDeadlineMS) !== null && _b !== void 0 ? _b : this.defaultOpeningDeadlineMS;
            if (isPendingConnectionHttp(storedConnection)) {
                this.session = {
                    sessionCrypto: storedConnection.sessionCrypto,
                    bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
                };
                return yield this.openGateways(storedConnection.sessionCrypto, {
                    openingDeadlineMS: openingDeadlineMS,
                    signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal
                });
            }
            if (Array.isArray(this.walletConnectionSource)) throw new TonConnectError("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
            this.session = storedConnection.session;
            if (this.gateway) {
                logDebug("Gateway is already opened, closing previous gateway");
                yield this.gateway.close();
            }
            this.gateway = new BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, storedConnection.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this));
            if (abortController.signal.aborted) return;
            // notify listeners about stored connection
            this.listeners.forEach((listener)=>listener(storedConnection.connectEvent));
            // wait for the connection to be opened
            try {
                yield callForSuccess((options)=>this.gateway.registerSession({
                        openingDeadlineMS: openingDeadlineMS,
                        signal: options.signal
                    }), {
                    attempts: Number.MAX_SAFE_INTEGER,
                    delayMs: 5000,
                    signal: abortController.signal
                });
            } catch (e) {
                yield this.disconnect({
                    signal: abortController.signal
                });
                return;
            }
        });
    }
    sendRequest(request, optionsOrOnRequestSent) {
        // TODO: remove deprecated method
        const options = {};
        if (typeof optionsOrOnRequestSent === "function") options.onRequestSent = optionsOrOnRequestSent;
        else {
            options.onRequestSent = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.onRequestSent;
            options.signal = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.signal;
            options.attempts = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.attempts;
        }
        return new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                var _a;
                if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new TonConnectError("Trying to send bridge request without session");
                const id = (yield this.connectionStorage.getNextRpcRequestId()).toString();
                yield this.connectionStorage.increaseNextRpcRequestId();
                logDebug("Send http-bridge request:", Object.assign(Object.assign({}, request), {
                    id
                }));
                const encodedRequest = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, request), {
                    id
                })), (0, _protocol.hexToByteArray)(this.session.walletPublicKey));
                try {
                    yield this.gateway.send(encodedRequest, this.session.walletPublicKey, request.method, {
                        attempts: options === null || options === void 0 ? void 0 : options.attempts,
                        signal: options === null || options === void 0 ? void 0 : options.signal
                    });
                    (_a = options === null || options === void 0 ? void 0 : options.onRequestSent) === null || _a === void 0 || _a.call(options);
                    this.pendingRequests.set(id.toString(), resolve);
                } catch (e) {
                    reject(e);
                }
            }));
    }
    closeConnection() {
        this.closeGateways();
        this.listeners = [];
        this.session = null;
        this.gateway = null;
    }
    disconnect(options) {
        return __awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve)=>__awaiter(this, void 0, void 0, function*() {
                    let called = false;
                    let timeoutId = null;
                    const onRequestSent = ()=>{
                        if (!called) {
                            called = true;
                            this.removeBridgeAndSession().then(resolve);
                        }
                    };
                    try {
                        this.closeGateways();
                        const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
                        timeoutId = setTimeout(()=>{
                            abortController.abort();
                        }, this.defaultOpeningDeadlineMS);
                        yield this.sendRequest({
                            method: "disconnect",
                            params: []
                        }, {
                            onRequestSent: onRequestSent,
                            signal: abortController.signal,
                            attempts: 1
                        });
                    } catch (e) {
                        logDebug("Disconnect error:", e);
                        if (!called) this.removeBridgeAndSession().then(resolve);
                    } finally{
                        if (timeoutId) clearTimeout(timeoutId);
                        onRequestSent();
                    }
                }));
        });
    }
    listen(callback) {
        this.listeners.push(callback);
        return ()=>this.listeners = this.listeners.filter((listener)=>listener !== callback);
    }
    pause() {
        var _a;
        (_a = this.gateway) === null || _a === void 0 || _a.pause();
        this.pendingGateways.forEach((bridge)=>bridge.pause());
    }
    unPause() {
        return __awaiter(this, void 0, void 0, function*() {
            const promises = this.pendingGateways.map((bridge)=>bridge.unPause());
            if (this.gateway) promises.push(this.gateway.unPause());
            yield Promise.all(promises);
        });
    }
    pendingGatewaysListener(gateway, bridgeUrl, bridgeIncomingMessage) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.pendingGateways.includes(gateway)) {
                yield gateway.close();
                return;
            }
            this.closeGateways({
                except: gateway
            });
            if (this.gateway) {
                logDebug("Gateway is already opened, closing previous gateway");
                yield this.gateway.close();
            }
            this.session.bridgeUrl = bridgeUrl;
            this.gateway = gateway;
            this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this));
            this.gateway.setListener(this.gatewayListener.bind(this));
            return this.gatewayListener(bridgeIncomingMessage);
        });
    }
    gatewayListener(bridgeIncomingMessage) {
        return __awaiter(this, void 0, void 0, function*() {
            const walletMessage = JSON.parse(this.session.sessionCrypto.decrypt((0, _protocol.Base64).decode(bridgeIncomingMessage.message).toUint8Array(), (0, _protocol.hexToByteArray)(bridgeIncomingMessage.from)));
            logDebug("Wallet message received:", walletMessage);
            if (!("event" in walletMessage)) {
                const id = walletMessage.id.toString();
                const resolve = this.pendingRequests.get(id);
                if (!resolve) {
                    logDebug(`Response id ${id} doesn't match any request's id`);
                    return;
                }
                resolve(walletMessage);
                this.pendingRequests.delete(id);
                return;
            }
            if (walletMessage.id !== undefined) {
                const lastId = yield this.connectionStorage.getLastWalletEventId();
                if (lastId !== undefined && walletMessage.id <= lastId) {
                    logError(`Received event id (=${walletMessage.id}) must be greater than stored last wallet event id (=${lastId}) `);
                    return;
                }
                if (walletMessage.event !== "connect") yield this.connectionStorage.storeLastWalletEventId(walletMessage.id);
            }
            // `this.listeners` might be modified in the event handler
            const listeners = this.listeners;
            if (walletMessage.event === "connect") yield this.updateSession(walletMessage, bridgeIncomingMessage.from);
            if (walletMessage.event === "disconnect") {
                logDebug(`Removing bridge and session: received disconnect event`);
                yield this.removeBridgeAndSession();
            }
            listeners.forEach((listener)=>listener(walletMessage));
        });
    }
    gatewayErrorsListener(e) {
        return __awaiter(this, void 0, void 0, function*() {
            throw new TonConnectError(`Bridge error ${JSON.stringify(e)}`);
        });
    }
    updateSession(connectEvent, walletPublicKey) {
        return __awaiter(this, void 0, void 0, function*() {
            this.session = Object.assign(Object.assign({}, this.session), {
                walletPublicKey
            });
            const tonAddrItem = connectEvent.payload.items.find((item)=>item.name === "ton_addr");
            const connectEventToSave = Object.assign(Object.assign({}, connectEvent), {
                payload: Object.assign(Object.assign({}, connectEvent.payload), {
                    items: [
                        tonAddrItem
                    ]
                })
            });
            yield this.connectionStorage.storeConnection({
                type: "http",
                session: this.session,
                lastWalletEventId: connectEvent.id,
                connectEvent: connectEventToSave,
                nextRpcRequestId: 0
            });
        });
    }
    removeBridgeAndSession() {
        return __awaiter(this, void 0, void 0, function*() {
            this.closeConnection();
            yield this.connectionStorage.removeConnection();
        });
    }
    generateUniversalLink(universalLink, message) {
        if (isTelegramUrl(universalLink)) return this.generateTGUniversalLink(universalLink, message);
        return this.generateRegularUniversalLink(universalLink, message);
    }
    generateRegularUniversalLink(universalLink, message) {
        const url = new URL(universalLink);
        url.searchParams.append("v", PROTOCOL_VERSION.toString());
        url.searchParams.append("id", this.session.sessionCrypto.sessionId);
        url.searchParams.append("r", JSON.stringify(message));
        return url.toString();
    }
    generateTGUniversalLink(universalLink, message) {
        const urlToWrap = this.generateRegularUniversalLink("about:blank", message);
        const linkParams = urlToWrap.split("?")[1];
        const startapp = "tonconnect-" + encodeTelegramUrlParameters(linkParams);
        // TODO: Remove this line after all dApps and the wallets-list.json have been updated
        const updatedUniversalLink = this.convertToDirectLink(universalLink);
        const url = new URL(updatedUniversalLink);
        url.searchParams.append("startapp", startapp);
        return url.toString();
    }
    // TODO: Remove this method after all dApps and the wallets-list.json have been updated
    convertToDirectLink(universalLink) {
        const url = new URL(universalLink);
        if (url.searchParams.has("attach")) {
            url.searchParams.delete("attach");
            url.pathname += "/start";
        }
        return url.toString();
    }
    openGateways(sessionCrypto, options) {
        return __awaiter(this, void 0, void 0, function*() {
            if (Array.isArray(this.walletConnectionSource)) {
                // close all gateways before opening new ones
                this.pendingGateways.map((bridge)=>bridge.close().catch());
                // open new gateways
                this.pendingGateways = this.walletConnectionSource.map((source)=>{
                    const gateway = new BridgeGateway(this.storage, source.bridgeUrl, sessionCrypto.sessionId, ()=>{}, ()=>{});
                    gateway.setListener((message)=>this.pendingGatewaysListener(gateway, source.bridgeUrl, message));
                    return gateway;
                });
                yield Promise.allSettled(this.pendingGateways.map((bridge)=>callForSuccess((_options)=>{
                        if (!this.pendingGateways.some((item)=>item === bridge)) return bridge.close();
                        return bridge.registerSession({
                            openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
                            signal: _options.signal
                        });
                    }, {
                        attempts: Number.MAX_SAFE_INTEGER,
                        delayMs: 5000,
                        signal: options === null || options === void 0 ? void 0 : options.signal
                    })));
                return;
            } else {
                if (this.gateway) {
                    logDebug(`Gateway is already opened, closing previous gateway`);
                    yield this.gateway.close();
                }
                this.gateway = new BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this));
                return yield this.gateway.registerSession({
                    openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
                    signal: options === null || options === void 0 ? void 0 : options.signal
                });
            }
        });
    }
    closeGateways(options) {
        var _a;
        (_a = this.gateway) === null || _a === void 0 || _a.close();
        this.pendingGateways.filter((item)=>item !== (options === null || options === void 0 ? void 0 : options.except)).forEach((bridge)=>bridge.close());
        this.pendingGateways = [];
    }
}
function hasProperty(value, propertyKey) {
    return hasProperties(value, [
        propertyKey
    ]);
}
function hasProperties(value, propertyKeys) {
    if (!value || typeof value !== "object") return false;
    return propertyKeys.every((propertyKey)=>propertyKey in value);
}
function isJSBridgeWithMetadata(value) {
    try {
        if (!hasProperty(value, "tonconnect") || !hasProperty(value.tonconnect, "walletInfo")) return false;
        return hasProperties(value.tonconnect.walletInfo, [
            "name",
            "app_name",
            "image",
            "about_url",
            "platforms"
        ]);
    } catch (_a) {
        return false;
    }
}
/**
 * In memory storage like localStorage, but without persistence.
 * Uses as a fallback for localStorage in Safari's private mode.
 */ class InMemoryStorage {
    constructor(){
        this.storage = {};
    }
    static getInstance() {
        if (!InMemoryStorage.instance) InMemoryStorage.instance = new InMemoryStorage();
        return InMemoryStorage.instance;
    }
    get length() {
        return Object.keys(this.storage).length;
    }
    clear() {
        this.storage = {};
    }
    getItem(key) {
        var _a;
        return (_a = this.storage[key]) !== null && _a !== void 0 ? _a : null;
    }
    key(index) {
        var _a;
        const keys = Object.keys(this.storage);
        if (index < 0 || index >= keys.length) return null;
        return (_a = keys[index]) !== null && _a !== void 0 ? _a : null;
    }
    removeItem(key) {
        delete this.storage[key];
    }
    setItem(key, value) {
        this.storage[key] = value;
    }
}
function getWindow() {
    if (typeof window === "undefined") return undefined;
    return window;
}
/**
 * The function try to get window keys, if it is not available it returns empty array.
 * As an example, for Safari's private mode it returns empty array, because the browser does not allow to get window keys.
 */ function tryGetWindowKeys() {
    const window1 = getWindow();
    if (!window1) return [];
    try {
        return Object.keys(window1);
    } catch (_a) {
        return [];
    }
}
function getDocument() {
    if (typeof document === "undefined") return undefined;
    return document;
}
function getWebPageManifest() {
    var _a;
    const origin = (_a = getWindow()) === null || _a === void 0 ? void 0 : _a.location.origin;
    if (origin) return origin + "/tonconnect-manifest.json";
    return "";
}
/**
 * Returns `localStorage` if it is available. In Safari's private mode, it returns `InMemoryStorage`. In Node.js, it throws an error.
 */ function tryGetLocalStorage() {
    if (isLocalStorageAvailable()) return localStorage;
    if (isNodeJs()) throw new TonConnectError("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
    return InMemoryStorage.getInstance();
}
/**
 * Checks if `localStorage` is available.
 */ function isLocalStorageAvailable() {
    // We use a try/catch block because Safari's private mode throws an error when attempting to access localStorage.
    try {
        return typeof localStorage !== "undefined";
    } catch (_a) {
        return false;
    }
}
/**
 * Checks if the environment is Node.js.
 */ function isNodeJs() {
    return typeof process !== "undefined" && process.versions != null && process.versions.node != null;
}
class InjectedProvider {
    constructor(storage, injectedWalletKey){
        this.injectedWalletKey = injectedWalletKey;
        this.type = "injected";
        this.unsubscribeCallback = null;
        this.listenSubscriptions = false;
        this.listeners = [];
        const window1 = InjectedProvider.window;
        if (!InjectedProvider.isWindowContainsWallet(window1, injectedWalletKey)) throw new WalletNotInjectedError();
        this.connectionStorage = new BridgeConnectionStorage(storage);
        this.injectedWallet = window1[injectedWalletKey].tonconnect;
    }
    static fromStorage(storage) {
        return __awaiter(this, void 0, void 0, function*() {
            const bridgeConnectionStorage = new BridgeConnectionStorage(storage);
            const connection = yield bridgeConnectionStorage.getInjectedConnection();
            return new InjectedProvider(storage, connection.jsBridgeKey);
        });
    }
    static isWalletInjected(injectedWalletKey) {
        return InjectedProvider.isWindowContainsWallet(this.window, injectedWalletKey);
    }
    static isInsideWalletBrowser(injectedWalletKey) {
        if (InjectedProvider.isWindowContainsWallet(this.window, injectedWalletKey)) return this.window[injectedWalletKey].tonconnect.isWalletBrowser;
        return false;
    }
    static getCurrentlyInjectedWallets() {
        if (!this.window) return [];
        const windowKeys = tryGetWindowKeys();
        const wallets = windowKeys.filter(([_, value])=>isJSBridgeWithMetadata(value));
        return wallets.map(([jsBridgeKey, wallet])=>({
                name: wallet.tonconnect.walletInfo.name,
                appName: wallet.tonconnect.walletInfo.app_name,
                aboutUrl: wallet.tonconnect.walletInfo.about_url,
                imageUrl: wallet.tonconnect.walletInfo.image,
                tondns: wallet.tonconnect.walletInfo.tondns,
                jsBridgeKey,
                injected: true,
                embedded: wallet.tonconnect.isWalletBrowser,
                platforms: wallet.tonconnect.walletInfo.platforms
            }));
    }
    static isWindowContainsWallet(window1, injectedWalletKey) {
        return !!window1 && injectedWalletKey in window1 && typeof window1[injectedWalletKey] === "object" && "tonconnect" in window1[injectedWalletKey];
    }
    connect(message) {
        this._connect(PROTOCOL_VERSION, message);
    }
    restoreConnection() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                logDebug(`Injected Provider restoring connection...`);
                const connectEvent = yield this.injectedWallet.restoreConnection();
                logDebug("Injected Provider restoring connection response", connectEvent);
                if (connectEvent.event === "connect") {
                    this.makeSubscriptions();
                    this.listeners.forEach((listener)=>listener(connectEvent));
                } else yield this.connectionStorage.removeConnection();
            } catch (e) {
                yield this.connectionStorage.removeConnection();
                console.error(e);
            }
        });
    }
    closeConnection() {
        if (this.listenSubscriptions) this.injectedWallet.disconnect();
        this.closeAllListeners();
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve)=>{
                const onRequestSent = ()=>{
                    this.closeAllListeners();
                    this.connectionStorage.removeConnection().then(resolve);
                };
                try {
                    this.injectedWallet.disconnect();
                    onRequestSent();
                } catch (e) {
                    logDebug(e);
                    this.sendRequest({
                        method: "disconnect",
                        params: []
                    }, onRequestSent);
                }
            });
        });
    }
    closeAllListeners() {
        var _a;
        this.listenSubscriptions = false;
        this.listeners = [];
        (_a = this.unsubscribeCallback) === null || _a === void 0 || _a.call(this);
    }
    listen(eventsCallback) {
        this.listeners.push(eventsCallback);
        return ()=>this.listeners = this.listeners.filter((listener)=>listener !== eventsCallback);
    }
    sendRequest(request, optionsOrOnRequestSent) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            // TODO: remove deprecated method
            const options = {};
            if (typeof optionsOrOnRequestSent === "function") options.onRequestSent = optionsOrOnRequestSent;
            else {
                options.onRequestSent = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.onRequestSent;
                options.signal = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.signal;
            }
            const id = (yield this.connectionStorage.getNextRpcRequestId()).toString();
            yield this.connectionStorage.increaseNextRpcRequestId();
            logDebug("Send injected-bridge request:", Object.assign(Object.assign({}, request), {
                id
            }));
            const result = this.injectedWallet.send(Object.assign(Object.assign({}, request), {
                id
            }));
            result.then((response)=>logDebug("Wallet message received:", response));
            (_a = options === null || options === void 0 ? void 0 : options.onRequestSent) === null || _a === void 0 || _a.call(options);
            return result;
        });
    }
    _connect(protocolVersion, message) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                logDebug(`Injected Provider connect request: protocolVersion: ${protocolVersion}, message:`, message);
                const connectEvent = yield this.injectedWallet.connect(protocolVersion, message);
                logDebug("Injected Provider connect response:", connectEvent);
                if (connectEvent.event === "connect") {
                    yield this.updateSession();
                    this.makeSubscriptions();
                }
                this.listeners.forEach((listener)=>listener(connectEvent));
            } catch (e) {
                logDebug("Injected Provider connect error:", e);
                const connectEventError = {
                    event: "connect_error",
                    payload: {
                        code: 0,
                        message: e === null || e === void 0 ? void 0 : e.toString()
                    }
                };
                this.listeners.forEach((listener)=>listener(connectEventError));
            }
        });
    }
    makeSubscriptions() {
        this.listenSubscriptions = true;
        this.unsubscribeCallback = this.injectedWallet.listen((e)=>{
            logDebug("Wallet message received:", e);
            if (this.listenSubscriptions) this.listeners.forEach((listener)=>listener(e));
            if (e.event === "disconnect") this.disconnect();
        });
    }
    updateSession() {
        return this.connectionStorage.storeConnection({
            type: "injected",
            jsBridgeKey: this.injectedWalletKey,
            nextRpcRequestId: 0
        });
    }
}
InjectedProvider.window = getWindow();
/**
 * Default storage to save protocol data, uses `localStorage` if it is available. In Safari's private mode, it uses `InMemoryStorage`. In Node.js, it throws an error.
 */ class DefaultStorage {
    constructor(){
        this.localStorage = tryGetLocalStorage();
    }
    getItem(key) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.localStorage.getItem(key);
        });
    }
    removeItem(key) {
        return __awaiter(this, void 0, void 0, function*() {
            this.localStorage.removeItem(key);
        });
    }
    setItem(key, value) {
        return __awaiter(this, void 0, void 0, function*() {
            this.localStorage.setItem(key, value);
        });
    }
}
/**
 * Checks if `WalletInfo` is `WalletInfoInjectable` and `WalletInfo` is injected to the current webpage (`walletInfo.injected === true`).
 * @param value WalletInfo to check.
 */ function isWalletInfoCurrentlyInjected(value) {
    return isWalletInfoInjectable(value) && value.injected;
}
/**
 * Checks if `WalletInfo` is `WalletInfoInjectable` and dApp is opened inside this wallet's browser.
 * @param value WalletInfo to check.
 */ function isWalletInfoCurrentlyEmbedded(value) {
    return isWalletInfoCurrentlyInjected(value) && value.embedded;
}
/**
 * Checks if `WalletInfo` is `WalletInfoInjected`, but doesn't check if it is injected to the page or not.
 * @param value WalletInfo to check.
 */ function isWalletInfoInjectable(value) {
    return "jsBridgeKey" in value;
}
/**
 * Checks if `WalletInfo` is `WalletInfoRemote`.
 * @param value WalletInfo to check.
 */ function isWalletInfoRemote(value) {
    return "bridgeUrl" in value;
}
/**
 * @deprecated use `isWalletInfoInjectable` or `isWalletInfoCurrentlyInjected` instead.
 * @param value WalletInfo to check.
 */ function isWalletInfoInjected(value) {
    return "jsBridgeKey" in value;
}
const FALLBACK_WALLETS_LIST = [
    {
        app_name: "telegram-wallet",
        name: "Wallet",
        image: "https://wallet.tg/images/logo-288.png",
        about_url: "https://wallet.tg/",
        universal_url: "https://t.me/wallet?attach=wallet",
        bridge: [
            {
                type: "sse",
                url: "https://bridge.tonapi.io/bridge"
            }
        ],
        platforms: [
            "ios",
            "android",
            "macos",
            "windows",
            "linux"
        ]
    },
    {
        app_name: "tonkeeper",
        name: "Tonkeeper",
        image: "https://tonkeeper.com/assets/tonconnect-icon.png",
        tondns: "tonkeeper.ton",
        about_url: "https://tonkeeper.com",
        universal_url: "https://app.tonkeeper.com/ton-connect",
        deepLink: "tonkeeper-tc://",
        bridge: [
            {
                type: "sse",
                url: "https://bridge.tonapi.io/bridge"
            },
            {
                type: "js",
                key: "tonkeeper"
            }
        ],
        platforms: [
            "ios",
            "android",
            "chrome",
            "firefox",
            "macos"
        ]
    },
    {
        app_name: "mytonwallet",
        name: "MyTonWallet",
        image: "https://mytonwallet.io/icon-256.png",
        about_url: "https://mytonwallet.io",
        universal_url: "https://connect.mytonwallet.org",
        bridge: [
            {
                type: "js",
                key: "mytonwallet"
            },
            {
                type: "sse",
                url: "https://tonconnectbridge.mytonwallet.org/bridge/"
            }
        ],
        platforms: [
            "chrome",
            "windows",
            "macos",
            "linux",
            "ios",
            "android",
            "firefox"
        ]
    },
    {
        app_name: "openmask",
        name: "OpenMask",
        image: "https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",
        about_url: "https://www.openmask.app/",
        bridge: [
            {
                type: "js",
                key: "openmask"
            }
        ],
        platforms: [
            "chrome"
        ]
    },
    {
        app_name: "tonhub",
        name: "Tonhub",
        image: "https://tonhub.com/tonconnect_logo.png",
        about_url: "https://tonhub.com",
        universal_url: "https://tonhub.com/ton-connect",
        bridge: [
            {
                type: "js",
                key: "tonhub"
            },
            {
                type: "sse",
                url: "https://connect.tonhubapi.com/tonconnect"
            }
        ],
        platforms: [
            "ios",
            "android"
        ]
    },
    {
        app_name: "dewallet",
        name: "DeWallet",
        image: "https://app.delabwallet.com/logo_black.png",
        about_url: "https://delabwallet.com",
        bridge: [
            {
                type: "js",
                key: "dewallet"
            }
        ],
        platforms: [
            "chrome"
        ]
    },
    {
        app_name: "xtonwallet",
        name: "XTONWallet",
        image: "https://xtonwallet.com/assets/img/icon-256-back.png",
        about_url: "https://xtonwallet.com",
        bridge: [
            {
                type: "js",
                key: "xtonwallet"
            }
        ],
        platforms: [
            "chrome",
            "firefox"
        ]
    },
    {
        app_name: "tonwallet",
        name: "TON Wallet",
        image: "https://wallet.ton.org/assets/ui/qr-logo.png",
        about_url: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
        bridge: [
            {
                type: "js",
                key: "tonwallet"
            }
        ],
        platforms: [
            "chrome"
        ]
    }
];
class WalletsListManager {
    constructor(options){
        this.walletsListCache = null;
        this.walletsListCacheCreationTimestamp = null;
        this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json";
        if (options === null || options === void 0 ? void 0 : options.walletsListSource) this.walletsListSource = options.walletsListSource;
        if (options === null || options === void 0 ? void 0 : options.cacheTTLMs) this.cacheTTLMs = options.cacheTTLMs;
    }
    getWallets() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs) this.walletsListCache = null;
            if (!this.walletsListCache) {
                this.walletsListCache = this.fetchWalletsList();
                this.walletsListCache.then(()=>{
                    this.walletsListCacheCreationTimestamp = Date.now();
                }).catch(()=>{
                    this.walletsListCache = null;
                    this.walletsListCacheCreationTimestamp = null;
                });
            }
            return this.walletsListCache;
        });
    }
    getEmbeddedWallet() {
        return __awaiter(this, void 0, void 0, function*() {
            const walletsList = yield this.getWallets();
            const embeddedWallets = walletsList.filter(isWalletInfoCurrentlyEmbedded);
            if (embeddedWallets.length !== 1) return null;
            return embeddedWallets[0];
        });
    }
    fetchWalletsList() {
        return __awaiter(this, void 0, void 0, function*() {
            let walletsList = [];
            try {
                const walletsResponse = yield fetch(this.walletsListSource);
                walletsList = yield walletsResponse.json();
                if (!Array.isArray(walletsList)) throw new FetchWalletsError("Wrong wallets list format, wallets list must be an array.");
                const wrongFormatWallets = walletsList.filter((wallet)=>!this.isCorrectWalletConfigDTO(wallet));
                if (wrongFormatWallets.length) {
                    logError(`Wallet(s) ${wrongFormatWallets.map((wallet)=>wallet.name).join(", ")} config format is wrong. They were removed from the wallets list.`);
                    walletsList = walletsList.filter((wallet)=>this.isCorrectWalletConfigDTO(wallet));
                }
            } catch (e) {
                logError(e);
                walletsList = FALLBACK_WALLETS_LIST;
            }
            let currentlyInjectedWallets = [];
            try {
                currentlyInjectedWallets = InjectedProvider.getCurrentlyInjectedWallets();
            } catch (e) {
                logError(e);
            }
            return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(walletsList), currentlyInjectedWallets);
        });
    }
    walletConfigDTOListToWalletConfigList(walletConfigDTO) {
        return walletConfigDTO.map((walletConfigDTO)=>{
            const walletConfigBase = {
                name: walletConfigDTO.name,
                appName: walletConfigDTO.app_name,
                imageUrl: walletConfigDTO.image,
                aboutUrl: walletConfigDTO.about_url,
                tondns: walletConfigDTO.tondns,
                platforms: walletConfigDTO.platforms
            };
            const walletConfig = walletConfigBase;
            walletConfigDTO.bridge.forEach((bridge)=>{
                if (bridge.type === "sse") {
                    walletConfig.bridgeUrl = bridge.url;
                    walletConfig.universalLink = walletConfigDTO.universal_url;
                    walletConfig.deepLink = walletConfigDTO.deepLink;
                }
                if (bridge.type === "js") {
                    const jsBridgeKey = bridge.key;
                    walletConfig.jsBridgeKey = jsBridgeKey;
                    walletConfig.injected = InjectedProvider.isWalletInjected(jsBridgeKey);
                    walletConfig.embedded = InjectedProvider.isInsideWalletBrowser(jsBridgeKey);
                }
            });
            return walletConfig;
        });
    }
    mergeWalletsLists(list1, list2) {
        const names = new Set(list1.concat(list2).map((item)=>item.name));
        return [
            ...names.values()
        ].map((name)=>{
            const list1Item = list1.find((item)=>item.name === name);
            const list2Item = list2.find((item)=>item.name === name);
            return Object.assign(Object.assign({}, list1Item && Object.assign({}, list1Item)), list2Item && Object.assign({}, list2Item));
        });
    }
    // eslint-disable-next-line complexity
    isCorrectWalletConfigDTO(value) {
        if (!value || !(typeof value === "object")) return false;
        const containsName = "name" in value;
        const containsAppName = "app_name" in value;
        const containsImage = "image" in value;
        const containsAbout = "about_url" in value;
        const containsPlatforms = "platforms" in value;
        if (!containsName || !containsImage || !containsAbout || !containsPlatforms || !containsAppName) return false;
        if (!value.platforms || !Array.isArray(value.platforms) || !value.platforms.length) return false;
        if (!("bridge" in value) || !Array.isArray(value.bridge) || !value.bridge.length) return false;
        const bridge = value.bridge;
        if (bridge.some((item)=>!item || typeof item !== "object" || !("type" in item))) return false;
        const sseBridge = bridge.find((item)=>item.type === "sse");
        if (sseBridge) {
            if (!("url" in sseBridge) || !sseBridge.url || !value.universal_url) return false;
        }
        const jsBridge = bridge.find((item)=>item.type === "js");
        if (jsBridge) {
            if (!("key" in jsBridge) || !jsBridge.key) return false;
        }
        return true;
    }
}
/**
 * Thrown when wallet doesn't support requested feature method.
 */ class WalletNotSupportFeatureError extends TonConnectError {
    get info() {
        return "Wallet doesn't support requested feature method.";
    }
    constructor(...args){
        super(...args);
        Object.setPrototypeOf(this, WalletNotSupportFeatureError.prototype);
    }
}
function checkSendTransactionSupport(features, options) {
    const supportsDeprecatedSendTransactionFeature = features.includes("SendTransaction");
    const sendTransactionFeature = features.find((feature)=>feature && typeof feature === "object" && feature.name === "SendTransaction");
    if (!supportsDeprecatedSendTransactionFeature && !sendTransactionFeature) throw new WalletNotSupportFeatureError("Wallet doesn't support SendTransaction feature.");
    if (sendTransactionFeature && sendTransactionFeature.maxMessages !== undefined) {
        if (sendTransactionFeature.maxMessages < options.requiredMessagesNumber) throw new WalletNotSupportFeatureError(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${sendTransactionFeature.maxMessages}, but ${options.requiredMessagesNumber} is required.`);
        return;
    }
    logWarning("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.");
}
/**
 * Create a request version event.
 */ function createRequestVersionEvent() {
    return {
        type: "request-version"
    };
}
/**
 * Create a response version event.
 * @param version
 */ function createResponseVersionEvent(version) {
    return {
        type: "response-version",
        version: version
    };
}
/**
 * Create a version info.
 * @param version
 */ function createVersionInfo(version) {
    return {
        ton_connect_sdk_lib: version.ton_connect_sdk_lib,
        ton_connect_ui_lib: version.ton_connect_ui_lib
    };
}
function createConnectionInfo(version, wallet) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const isTonProof = ((_a = wallet === null || wallet === void 0 ? void 0 : wallet.connectItems) === null || _a === void 0 ? void 0 : _a.tonProof) && "proof" in wallet.connectItems.tonProof;
    const authType = isTonProof ? "ton_proof" : "ton_addr";
    return {
        wallet_address: (_c = (_b = wallet === null || wallet === void 0 ? void 0 : wallet.account) === null || _b === void 0 ? void 0 : _b.address) !== null && _c !== void 0 ? _c : null,
        wallet_type: (_d = wallet === null || wallet === void 0 ? void 0 : wallet.device.appName) !== null && _d !== void 0 ? _d : null,
        wallet_version: (_e = wallet === null || wallet === void 0 ? void 0 : wallet.device.appVersion) !== null && _e !== void 0 ? _e : null,
        auth_type: authType,
        custom_data: Object.assign({
            chain_id: (_g = (_f = wallet === null || wallet === void 0 ? void 0 : wallet.account) === null || _f === void 0 ? void 0 : _f.chain) !== null && _g !== void 0 ? _g : null,
            provider: (_h = wallet === null || wallet === void 0 ? void 0 : wallet.provider) !== null && _h !== void 0 ? _h : null
        }, createVersionInfo(version))
    };
}
/**
 * Create a connection init event.
 */ function createConnectionStartedEvent(version) {
    return {
        type: "connection-started",
        custom_data: createVersionInfo(version)
    };
}
/**
 * Create a connection completed event.
 * @param version
 * @param wallet
 */ function createConnectionCompletedEvent(version, wallet) {
    return Object.assign({
        type: "connection-completed",
        is_success: true
    }, createConnectionInfo(version, wallet));
}
/**
 * Create a connection error event.
 * @param version
 * @param error_message
 * @param errorCode
 */ function createConnectionErrorEvent(version, error_message, errorCode) {
    return {
        type: "connection-error",
        is_success: false,
        error_message: error_message,
        error_code: errorCode !== null && errorCode !== void 0 ? errorCode : null,
        custom_data: createVersionInfo(version)
    };
}
/**
 * Create a connection restoring started event.
 */ function createConnectionRestoringStartedEvent(version) {
    return {
        type: "connection-restoring-started",
        custom_data: createVersionInfo(version)
    };
}
/**
 * Create a connection restoring completed event.
 * @param version
 * @param wallet
 */ function createConnectionRestoringCompletedEvent(version, wallet) {
    return Object.assign({
        type: "connection-restoring-completed",
        is_success: true
    }, createConnectionInfo(version, wallet));
}
/**
 * Create a connection restoring error event.
 * @param version
 * @param errorMessage
 */ function createConnectionRestoringErrorEvent(version, errorMessage) {
    return {
        type: "connection-restoring-error",
        is_success: false,
        error_message: errorMessage,
        custom_data: createVersionInfo(version)
    };
}
function createTransactionInfo(wallet, transaction) {
    var _a, _b, _c, _d;
    return {
        valid_until: (_a = String(transaction.validUntil)) !== null && _a !== void 0 ? _a : null,
        from: (_d = (_b = transaction.from) !== null && _b !== void 0 ? _b : (_c = wallet === null || wallet === void 0 ? void 0 : wallet.account) === null || _c === void 0 ? void 0 : _c.address) !== null && _d !== void 0 ? _d : null,
        messages: transaction.messages.map((message)=>{
            var _a, _b;
            return {
                address: (_a = message.address) !== null && _a !== void 0 ? _a : null,
                amount: (_b = message.amount) !== null && _b !== void 0 ? _b : null
            };
        })
    };
}
/**
 * Create a transaction init event.
 * @param version
 * @param wallet
 * @param transaction
 */ function createTransactionSentForSignatureEvent(version, wallet, transaction) {
    return Object.assign(Object.assign({
        type: "transaction-sent-for-signature"
    }, createConnectionInfo(version, wallet)), createTransactionInfo(wallet, transaction));
}
/**
 * Create a transaction signed event.
 * @param version
 * @param wallet
 * @param transaction
 * @param signedTransaction
 */ function createTransactionSignedEvent(version, wallet, transaction, signedTransaction) {
    return Object.assign(Object.assign({
        type: "transaction-signed",
        is_success: true,
        signed_transaction: signedTransaction.boc
    }, createConnectionInfo(version, wallet)), createTransactionInfo(wallet, transaction));
}
/**
 * Create a transaction error event.
 * @param version
 * @param wallet
 * @param transaction
 * @param errorMessage
 * @param errorCode
 */ function createTransactionSigningFailedEvent(version, wallet, transaction, errorMessage, errorCode) {
    return Object.assign(Object.assign({
        type: "transaction-signing-failed",
        is_success: false,
        error_message: errorMessage,
        error_code: errorCode !== null && errorCode !== void 0 ? errorCode : null
    }, createConnectionInfo(version, wallet)), createTransactionInfo(wallet, transaction));
}
/**
 * Create a disconnect event.
 * @param version
 * @param wallet
 * @param scope
 * @returns
 */ function createDisconnectionEvent(version, wallet, scope) {
    return Object.assign({
        type: "disconnection",
        scope: scope
    }, createConnectionInfo(version, wallet));
}
/**
 * A concrete implementation of EventDispatcher that dispatches events to the browser window.
 */ class BrowserEventDispatcher {
    constructor(){
        /**
         * The window object, possibly undefined in a server environment.
         * @private
         */ this.window = getWindow();
    }
    /**
     * Dispatches an event with the given name and details to the browser window.
     * @param eventName - The name of the event to dispatch.
     * @param eventDetails - The details of the event to dispatch.
     * @returns A promise that resolves when the event has been dispatched.
     */ dispatchEvent(eventName, eventDetails) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            const event = new CustomEvent(eventName, {
                detail: eventDetails
            });
            (_a = this.window) === null || _a === void 0 || _a.dispatchEvent(event);
        });
    }
    /**
     * Adds an event listener to the browser window.
     * @param eventName - The name of the event to listen for.
     * @param listener - The listener to add.
     * @param options - The options for the listener.
     * @returns A function that removes the listener.
     */ addEventListener(eventName, listener, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            (_a = this.window) === null || _a === void 0 || _a.addEventListener(eventName, listener, options);
            return ()=>{
                var _a;
                return (_a = this.window) === null || _a === void 0 ? void 0 : _a.removeEventListener(eventName, listener);
            };
        });
    }
}
/**
 * Tracker for TonConnect user actions, such as transaction signing, connection, etc.
 *
 * List of events:
 *  * `connection-started`: when a user starts connecting a wallet.
 *  * `connection-completed`: when a user successfully connected a wallet.
 *  * `connection-error`: when a user cancels a connection or there is an error during the connection process.
 *  * `connection-restoring-started`: when the dApp starts restoring a connection.
 *  * `connection-restoring-completed`: when the dApp successfully restores a connection.
 *  * `connection-restoring-error`: when the dApp fails to restore a connection.
 *  * `disconnection`: when a user starts disconnecting a wallet.
 *  * `transaction-sent-for-signature`: when a user sends a transaction for signature.
 *  * `transaction-signed`: when a user successfully signs a transaction.
 *  * `transaction-signing-failed`: when a user cancels transaction signing or there is an error during the signing process.
 *
 * If you want to track user actions, you can subscribe to the window events with prefix `ton-connect-`:
 *
 * @example
 * window.addEventListener('ton-connect-transaction-sent-for-signature', (event) => {
 *    console.log('Transaction init', event.detail);
 * });
 *
 * @internal
 */ class TonConnectTracker {
    constructor(options){
        var _a;
        /**
         * Event prefix for user actions.
         * @private
         */ this.eventPrefix = "ton-connect-";
        /**
         * TonConnect UI version.
         */ this.tonConnectUiVersion = null;
        this.eventDispatcher = (_a = options === null || options === void 0 ? void 0 : options.eventDispatcher) !== null && _a !== void 0 ? _a : new BrowserEventDispatcher();
        this.tonConnectSdkVersion = options.tonConnectSdkVersion;
        this.init().catch();
    }
    /**
     * Version of the library.
     */ get version() {
        return createVersionInfo({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
        });
    }
    /**
     * Called once when the tracker is created and request version other libraries.
     */ init() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                yield this.setRequestVersionHandler();
                this.tonConnectUiVersion = yield this.requestTonConnectUiVersion();
            } catch (e) {}
        });
    }
    /**
     * Set request version handler.
     * @private
     */ setRequestVersionHandler() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.eventDispatcher.addEventListener("ton-connect-request-version", ()=>__awaiter(this, void 0, void 0, function*() {
                    yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", createResponseVersionEvent(this.tonConnectSdkVersion));
                }));
        });
    }
    /**
     * Request TonConnect UI version.
     * @private
     */ requestTonConnectUiVersion() {
        return __awaiter(this, void 0, void 0, function*() {
            return new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                    try {
                        yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", (event)=>{
                            resolve(event.detail.version);
                        }, {
                            once: true
                        });
                        yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", createRequestVersionEvent());
                    } catch (e) {
                        reject(e);
                    }
                }));
        });
    }
    /**
     * Emit user action event to the window.
     * @param eventDetails
     * @private
     */ dispatchUserActionEvent(eventDetails) {
        try {
            this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${eventDetails.type}`, eventDetails).catch();
        } catch (e) {}
    }
    /**
     * Track connection init event.
     * @param args
     */ trackConnectionStarted(...args) {
        try {
            const event = createConnectionStartedEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track connection success event.
     * @param args
     */ trackConnectionCompleted(...args) {
        try {
            const event = createConnectionCompletedEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track connection error event.
     * @param args
     */ trackConnectionError(...args) {
        try {
            const event = createConnectionErrorEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track connection restoring init event.
     * @param args
     */ trackConnectionRestoringStarted(...args) {
        try {
            const event = createConnectionRestoringStartedEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track connection restoring success event.
     * @param args
     */ trackConnectionRestoringCompleted(...args) {
        try {
            const event = createConnectionRestoringCompletedEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track connection restoring error event.
     * @param args
     */ trackConnectionRestoringError(...args) {
        try {
            const event = createConnectionRestoringErrorEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track disconnect event.
     * @param args
     */ trackDisconnection(...args) {
        try {
            const event = createDisconnectionEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track transaction init event.
     * @param args
     */ trackTransactionSentForSignature(...args) {
        try {
            const event = createTransactionSentForSignatureEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track transaction signed event.
     * @param args
     */ trackTransactionSigned(...args) {
        try {
            const event = createTransactionSignedEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
    /**
     * Track transaction error event.
     * @param args
     */ trackTransactionSigningFailed(...args) {
        try {
            const event = createTransactionSigningFailedEvent(this.version, ...args);
            this.dispatchUserActionEvent(event);
        } catch (e) {}
    }
}
const tonConnectSdkVersion = "3.0.3";
class TonConnect {
    constructor(options){
        this.walletsList = new WalletsListManager();
        this._wallet = null;
        this.provider = null;
        this.statusChangeSubscriptions = [];
        this.statusChangeErrorSubscriptions = [];
        this.dappSettings = {
            manifestUrl: (options === null || options === void 0 ? void 0 : options.manifestUrl) || getWebPageManifest(),
            storage: (options === null || options === void 0 ? void 0 : options.storage) || new DefaultStorage()
        };
        this.walletsList = new WalletsListManager({
            walletsListSource: options === null || options === void 0 ? void 0 : options.walletsListSource,
            cacheTTLMs: options === null || options === void 0 ? void 0 : options.walletsListCacheTTLMs
        });
        this.tracker = new TonConnectTracker({
            eventDispatcher: options === null || options === void 0 ? void 0 : options.eventDispatcher,
            tonConnectSdkVersion: tonConnectSdkVersion
        });
        if (!this.dappSettings.manifestUrl) throw new DappMetadataError("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
        this.bridgeConnectionStorage = new BridgeConnectionStorage(this.dappSettings.storage);
        if (!(options === null || options === void 0 ? void 0 : options.disableAutoPauseConnection)) this.addWindowFocusAndBlurSubscriptions();
    }
    /**
     * Returns available wallets list.
     */ static getWallets() {
        return this.walletsList.getWallets();
    }
    /**
     * Shows if the wallet is connected right now.
     */ get connected() {
        return this._wallet !== null;
    }
    /**
     * Current connected account or null if no account is connected.
     */ get account() {
        var _a;
        return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.account) || null;
    }
    /**
     * Current connected wallet or null if no account is connected.
     */ get wallet() {
        return this._wallet;
    }
    set wallet(value) {
        this._wallet = value;
        this.statusChangeSubscriptions.forEach((callback)=>callback(this._wallet));
    }
    /**
     * Returns available wallets list.
     */ getWallets() {
        return this.walletsList.getWallets();
    }
    /**
     * Allows to subscribe to connection status changes and handle connection errors.
     * @param callback will be called after connections status changes with actual wallet or null.
     * @param errorsHandler (optional) will be called with some instance of TonConnectError when connect error is received.
     * @returns unsubscribe callback.
     */ onStatusChange(callback, errorsHandler) {
        this.statusChangeSubscriptions.push(callback);
        if (errorsHandler) this.statusChangeErrorSubscriptions.push(errorsHandler);
        return ()=>{
            this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter((item)=>item !== callback);
            if (errorsHandler) this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter((item)=>item !== errorsHandler);
        };
    }
    connect(wallet, requestOrOptions) {
        var _a, _b;
        // TODO: remove deprecated method
        const options = {};
        if (typeof requestOrOptions === "object" && "tonProof" in requestOrOptions) options.request = requestOrOptions;
        if (typeof requestOrOptions === "object" && ("openingDeadlineMS" in requestOrOptions || "signal" in requestOrOptions || "request" in requestOrOptions)) {
            options.request = requestOrOptions === null || requestOrOptions === void 0 ? void 0 : requestOrOptions.request;
            options.openingDeadlineMS = requestOrOptions === null || requestOrOptions === void 0 ? void 0 : requestOrOptions.openingDeadlineMS;
            options.signal = requestOrOptions === null || requestOrOptions === void 0 ? void 0 : requestOrOptions.signal;
        }
        if (this.connected) throw new WalletAlreadyConnectedError();
        const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
        (_a = this.abortController) === null || _a === void 0 || _a.abort();
        this.abortController = abortController;
        if (abortController.signal.aborted) throw new TonConnectError("Connection was aborted");
        (_b = this.provider) === null || _b === void 0 || _b.closeConnection();
        this.provider = this.createProvider(wallet);
        abortController.signal.addEventListener("abort", ()=>{
            var _a;
            (_a = this.provider) === null || _a === void 0 || _a.closeConnection();
            this.provider = null;
        });
        this.tracker.trackConnectionStarted();
        return this.provider.connect(this.createConnectRequest(options === null || options === void 0 ? void 0 : options.request), {
            openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
            signal: abortController.signal
        });
    }
    /**
     * Try to restore existing session and reconnect to the corresponding wallet. Call it immediately when your app is loaded.
     */ restoreConnection(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            this.tracker.trackConnectionRestoringStarted();
            const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
            (_a = this.abortController) === null || _a === void 0 || _a.abort();
            this.abortController = abortController;
            if (abortController.signal.aborted) {
                this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                return;
            }
            // TODO: potentially race condition here
            const [bridgeConnectionType, embeddedWallet] = yield Promise.all([
                this.bridgeConnectionStorage.storedConnectionType(),
                this.walletsList.getEmbeddedWallet()
            ]);
            if (abortController.signal.aborted) {
                this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                return;
            }
            let provider = null;
            try {
                switch(bridgeConnectionType){
                    case "http":
                        provider = yield BridgeProvider.fromStorage(this.dappSettings.storage);
                        break;
                    case "injected":
                        provider = yield InjectedProvider.fromStorage(this.dappSettings.storage);
                        break;
                    default:
                        if (embeddedWallet) provider = this.createProvider(embeddedWallet);
                        else return;
                }
            } catch (_c) {
                this.tracker.trackConnectionRestoringError("Provider is not restored");
                yield this.bridgeConnectionStorage.removeConnection();
                provider === null || provider === void 0 || provider.closeConnection();
                provider = null;
                return;
            }
            if (abortController.signal.aborted) {
                provider === null || provider === void 0 || provider.closeConnection();
                this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                return;
            }
            if (!provider) {
                logError("Provider is not restored");
                this.tracker.trackConnectionRestoringError("Provider is not restored");
                return;
            }
            (_b = this.provider) === null || _b === void 0 || _b.closeConnection();
            this.provider = provider;
            provider.listen(this.walletEventsListener.bind(this));
            const onAbortRestore = ()=>{
                this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
                provider === null || provider === void 0 || provider.closeConnection();
                provider = null;
            };
            abortController.signal.addEventListener("abort", onAbortRestore);
            return yield callForSuccess((_options)=>__awaiter(this, void 0, void 0, function*() {
                    yield provider === null || provider === void 0 ? void 0 : provider.restoreConnection({
                        openingDeadlineMS: options === null || options === void 0 ? void 0 : options.openingDeadlineMS,
                        signal: _options.signal
                    });
                    abortController.signal.removeEventListener("abort", onAbortRestore);
                    if (this.connected) this.tracker.trackConnectionRestoringCompleted(this.wallet);
                    else this.tracker.trackConnectionRestoringError("Connection restoring failed");
                }), {
                attempts: Number.MAX_SAFE_INTEGER,
                delayMs: 5000,
                signal: options === null || options === void 0 ? void 0 : options.signal
            });
        });
    }
    sendTransaction(transaction, optionsOrOnRequestSent) {
        return __awaiter(this, void 0, void 0, function*() {
            // TODO: remove deprecated method
            const options = {};
            if (typeof optionsOrOnRequestSent === "function") options.onRequestSent = optionsOrOnRequestSent;
            else {
                options.onRequestSent = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.onRequestSent;
                options.signal = optionsOrOnRequestSent === null || optionsOrOnRequestSent === void 0 ? void 0 : optionsOrOnRequestSent.signal;
            }
            const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
            if (abortController.signal.aborted) throw new TonConnectError("Transaction sending was aborted");
            this.checkConnection();
            checkSendTransactionSupport(this.wallet.device.features, {
                requiredMessagesNumber: transaction.messages.length
            });
            this.tracker.trackTransactionSentForSignature(this.wallet, transaction);
            const { validUntil } = transaction, tx = __rest(transaction, [
                "validUntil"
            ]);
            const from = transaction.from || this.account.address;
            const network = transaction.network || this.account.chain;
            const response = yield this.provider.sendRequest(sendTransactionParser.convertToRpcRequest(Object.assign(Object.assign({}, tx), {
                valid_until: validUntil,
                from,
                network
            })), {
                onRequestSent: options.onRequestSent,
                signal: abortController.signal
            });
            if (sendTransactionParser.isError(response)) {
                this.tracker.trackTransactionSigningFailed(this.wallet, transaction, response.error.message, response.error.code);
                return sendTransactionParser.parseAndThrowError(response);
            }
            const result = sendTransactionParser.convertFromRpcResponse(response);
            this.tracker.trackTransactionSigned(this.wallet, transaction, result);
            return result;
        });
    }
    /**
     * Disconnect form thw connected wallet and drop current session.
     */ disconnect(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            if (!this.connected) throw new WalletNotConnectedError();
            const abortController = createAbortController(options === null || options === void 0 ? void 0 : options.signal);
            const prevAbortController = this.abortController;
            this.abortController = abortController;
            if (abortController.signal.aborted) throw new TonConnectError("Disconnect was aborted");
            this.onWalletDisconnected("dapp");
            yield (_a = this.provider) === null || _a === void 0 ? void 0 : _a.disconnect({
                signal: abortController.signal
            });
            prevAbortController === null || prevAbortController === void 0 || prevAbortController.abort();
        });
    }
    /**
     * Pause bridge HTTP connection. Might be helpful, if you want to pause connections while browser tab is unfocused,
     * or if you use SDK with NodeJS and want to save server resources.
     */ pauseConnection() {
        var _a;
        if (((_a = this.provider) === null || _a === void 0 ? void 0 : _a.type) !== "http") return;
        this.provider.pause();
    }
    /**
     * Unpause bridge HTTP connection if it is paused.
     */ unPauseConnection() {
        var _a;
        if (((_a = this.provider) === null || _a === void 0 ? void 0 : _a.type) !== "http") return Promise.resolve();
        return this.provider.unPause();
    }
    addWindowFocusAndBlurSubscriptions() {
        const document1 = getDocument();
        if (!document1) return;
        try {
            document1.addEventListener("visibilitychange", ()=>{
                if (document1.hidden) this.pauseConnection();
                else this.unPauseConnection().catch();
            });
        } catch (e) {
            logError("Cannot subscribe to the document.visibilitychange: ", e);
        }
    }
    createProvider(wallet) {
        let provider;
        if (!Array.isArray(wallet) && isWalletConnectionSourceJS(wallet)) provider = new InjectedProvider(this.dappSettings.storage, wallet.jsBridgeKey);
        else provider = new BridgeProvider(this.dappSettings.storage, wallet);
        provider.listen(this.walletEventsListener.bind(this));
        return provider;
    }
    walletEventsListener(e) {
        switch(e.event){
            case "connect":
                this.onWalletConnected(e.payload);
                break;
            case "connect_error":
                this.onWalletConnectError(e.payload);
                break;
            case "disconnect":
                this.onWalletDisconnected("wallet");
        }
    }
    onWalletConnected(connectEvent) {
        const tonAccountItem = connectEvent.items.find((item)=>item.name === "ton_addr");
        const tonProofItem = connectEvent.items.find((item)=>item.name === "ton_proof");
        if (!tonAccountItem) throw new TonConnectError("ton_addr connection item was not found");
        const wallet = {
            device: connectEvent.device,
            provider: this.provider.type,
            account: {
                address: tonAccountItem.address,
                chain: tonAccountItem.network,
                walletStateInit: tonAccountItem.walletStateInit,
                publicKey: tonAccountItem.publicKey
            }
        };
        if (tonProofItem) wallet.connectItems = {
            tonProof: tonProofItem
        };
        this.wallet = wallet;
        this.tracker.trackConnectionCompleted(wallet);
    }
    onWalletConnectError(connectEventError) {
        const error = connectErrorsParser.parseError(connectEventError);
        this.statusChangeErrorSubscriptions.forEach((errorsHandler)=>errorsHandler(error));
        logDebug(error);
        this.tracker.trackConnectionError(connectEventError.message, connectEventError.code);
        if (error instanceof ManifestNotFoundError || error instanceof ManifestContentErrorError) {
            logError(error);
            throw error;
        }
    }
    onWalletDisconnected(scope) {
        this.tracker.trackDisconnection(this.wallet, scope);
        this.wallet = null;
    }
    checkConnection() {
        if (!this.connected) throw new WalletNotConnectedError();
    }
    createConnectRequest(request) {
        const items = [
            {
                name: "ton_addr"
            }
        ];
        if (request === null || request === void 0 ? void 0 : request.tonProof) items.push({
            name: "ton_proof",
            payload: request.tonProof
        });
        return {
            manifestUrl: this.dappSettings.manifestUrl,
            items
        };
    }
}
TonConnect.walletsList = new WalletsListManager();
/**
 * Check if specified wallet is injected and available to use with the app.
 * @param walletJSKey target wallet's js bridge key.
 */ TonConnect.isWalletInjected = (walletJSKey)=>InjectedProvider.isWalletInjected(walletJSKey);
/**
 * Check if the app is opened inside specified wallet's browser.
 * @param walletJSKey target wallet's js bridge key.
 */ TonConnect.isInsideWalletBrowser = (walletJSKey)=>InjectedProvider.isInsideWalletBrowser(walletJSKey);
const noBounceableTag = 0x51;
const testOnlyTag = 0x80;
/**
 * Converts raw TON address to no-bounceable user-friendly format. [See details]{@link https://ton.org/docs/learn/overviews/addresses#user-friendly-address}
 * @param hexAddress raw TON address formatted as "0:<hex string without 0x>".
 * @param [testOnly=false] convert address to test-only form. [See details]{@link https://ton.org/docs/learn/overviews/addresses#user-friendly-address}
 */ function toUserFriendlyAddress(hexAddress, testOnly = false) {
    const { wc, hex } = parseHexAddress(hexAddress);
    let tag = noBounceableTag;
    if (testOnly) tag |= testOnlyTag;
    const addr = new Int8Array(34);
    addr[0] = tag;
    addr[1] = wc;
    addr.set(hex, 2);
    const addressWithChecksum = new Uint8Array(36);
    addressWithChecksum.set(addr);
    addressWithChecksum.set(crc16(addr), 34);
    let addressBase64 = (0, _protocol.Base64).encode(addressWithChecksum);
    return addressBase64.replace(/\+/g, "-").replace(/\//g, "_");
}
function parseHexAddress(hexAddress) {
    if (!hexAddress.includes(":")) throw new WrongAddressError(`Wrong address ${hexAddress}. Address must include ":".`);
    const parts = hexAddress.split(":");
    if (parts.length !== 2) throw new WrongAddressError(`Wrong address ${hexAddress}. Address must include ":" only once.`);
    const wc = parseInt(parts[0]);
    if (wc !== 0 && wc !== -1) throw new WrongAddressError(`Wrong address ${hexAddress}. WC must be eq 0 or -1, but ${wc} received.`);
    const hex = parts[1];
    if ((hex === null || hex === void 0 ? void 0 : hex.length) !== 64) throw new WrongAddressError(`Wrong address ${hexAddress}. Hex part must be 64bytes length, but ${hex === null || hex === void 0 ? void 0 : hex.length} received.`);
    return {
        wc,
        hex: hexToBytes(hex)
    };
}
function crc16(data) {
    const poly = 0x1021;
    let reg = 0;
    const message = new Uint8Array(data.length + 2);
    message.set(data);
    for (let byte of message){
        let mask = 0x80;
        while(mask > 0){
            reg <<= 1;
            if (byte & mask) reg += 1;
            mask >>= 1;
            if (reg > 0xffff) {
                reg &= 0xffff;
                reg ^= poly;
            }
        }
    }
    return new Uint8Array([
        Math.floor(reg / 256),
        reg % 256
    ]);
}
const toByteMap = {};
for(let ord = 0; ord <= 0xff; ord++){
    let s = ord.toString(16);
    if (s.length < 2) s = "0" + s;
    toByteMap[s] = ord;
}
function hexToBytes(hex) {
    hex = hex.toLowerCase();
    const length2 = hex.length;
    if (length2 % 2 !== 0) throw new ParseHexError("Hex string must have length a multiple of 2: " + hex);
    const length = length2 / 2;
    const result = new Uint8Array(length);
    for(let i = 0; i < length; i++){
        const doubled = i * 2;
        const hexSubstring = hex.substring(doubled, doubled + 2);
        if (!toByteMap.hasOwnProperty(hexSubstring)) throw new ParseHexError("Invalid hex character: " + hexSubstring);
        result[i] = toByteMap[hexSubstring];
    }
    return result;
}

},{"52c206a362bfb8cf":"d5jf4","@tonconnect/protocol":"cKFEI","@tonconnect/isomorphic-eventsource":"7gMnQ","@tonconnect/isomorphic-fetch":"4PqjN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKFEI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Base64", ()=>Base64);
parcelHelpers.export(exports, "CHAIN", ()=>CHAIN);
parcelHelpers.export(exports, "CONNECT_EVENT_ERROR_CODES", ()=>CONNECT_EVENT_ERROR_CODES);
parcelHelpers.export(exports, "CONNECT_ITEM_ERROR_CODES", ()=>CONNECT_ITEM_ERROR_CODES);
parcelHelpers.export(exports, "DISCONNECT_ERROR_CODES", ()=>DISCONNECT_ERROR_CODES);
parcelHelpers.export(exports, "SEND_TRANSACTION_ERROR_CODES", ()=>SEND_TRANSACTION_ERROR_CODES);
parcelHelpers.export(exports, "SIGN_DATA_ERROR_CODES", ()=>SIGN_DATA_ERROR_CODES);
parcelHelpers.export(exports, "SessionCrypto", ()=>SessionCrypto);
parcelHelpers.export(exports, "concatUint8Arrays", ()=>concatUint8Arrays);
parcelHelpers.export(exports, "hexToByteArray", ()=>hexToByteArray);
parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "splitToUint8Arrays", ()=>splitToUint8Arrays);
parcelHelpers.export(exports, "toHexString", ()=>toHexString);
var _tweetnaclUtil = require("tweetnacl-util");
var _tweetnaclUtilDefault = parcelHelpers.interopDefault(_tweetnaclUtil);
var _tweetnacl = require("tweetnacl");
var _tweetnaclDefault = parcelHelpers.interopDefault(_tweetnacl);
var process = require("e8799a2bff0ca398");
var CONNECT_EVENT_ERROR_CODES;
(function(CONNECT_EVENT_ERROR_CODES) {
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_NOT_FOUND_ERROR"] = 2] = "MANIFEST_NOT_FOUND_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_CONTENT_ERROR"] = 3] = "MANIFEST_CONTENT_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
    CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(CONNECT_EVENT_ERROR_CODES || (CONNECT_EVENT_ERROR_CODES = {}));
var CONNECT_ITEM_ERROR_CODES;
(function(CONNECT_ITEM_ERROR_CODES) {
    CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(CONNECT_ITEM_ERROR_CODES || (CONNECT_ITEM_ERROR_CODES = {}));
var SEND_TRANSACTION_ERROR_CODES;
(function(SEND_TRANSACTION_ERROR_CODES) {
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
    SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(SEND_TRANSACTION_ERROR_CODES || (SEND_TRANSACTION_ERROR_CODES = {}));
var SIGN_DATA_ERROR_CODES;
(function(SIGN_DATA_ERROR_CODES) {
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
    SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(SIGN_DATA_ERROR_CODES || (SIGN_DATA_ERROR_CODES = {}));
var DISCONNECT_ERROR_CODES;
(function(DISCONNECT_ERROR_CODES) {
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
    DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
})(DISCONNECT_ERROR_CODES || (DISCONNECT_ERROR_CODES = {}));
var CHAIN;
(function(CHAIN) {
    CHAIN["MAINNET"] = "-239";
    CHAIN["TESTNET"] = "-3";
})(CHAIN || (CHAIN = {}));
function encodeUint8Array(value, urlSafe) {
    const encoded = (0, _tweetnaclUtilDefault.default).encodeBase64(value);
    if (!urlSafe) return encoded;
    return encodeURIComponent(encoded);
}
function decodeToUint8Array(value, urlSafe) {
    if (urlSafe) value = decodeURIComponent(value);
    return (0, _tweetnaclUtilDefault.default).decodeBase64(value);
}
function encode(value, urlSafe = false) {
    let uint8Array;
    if (value instanceof Uint8Array) uint8Array = value;
    else {
        if (typeof value !== "string") value = JSON.stringify(value);
        uint8Array = (0, _tweetnaclUtilDefault.default).decodeUTF8(value);
    }
    return encodeUint8Array(uint8Array, urlSafe);
}
function decode(value, urlSafe = false) {
    const decodedUint8Array = decodeToUint8Array(value, urlSafe);
    return {
        toString () {
            return (0, _tweetnaclUtilDefault.default).encodeUTF8(decodedUint8Array);
        },
        toObject () {
            try {
                return JSON.parse((0, _tweetnaclUtilDefault.default).encodeUTF8(decodedUint8Array));
            } catch (e) {
                return null;
            }
        },
        toUint8Array () {
            return decodedUint8Array;
        }
    };
}
const Base64 = {
    encode,
    decode
};
function concatUint8Arrays(buffer1, buffer2) {
    const mergedArray = new Uint8Array(buffer1.length + buffer2.length);
    mergedArray.set(buffer1);
    mergedArray.set(buffer2, buffer1.length);
    return mergedArray;
}
function splitToUint8Arrays(array, index) {
    if (index >= array.length) throw new Error("Index is out of buffer");
    const subArray1 = array.slice(0, index);
    const subArray2 = array.slice(index);
    return [
        subArray1,
        subArray2
    ];
}
function toHexString(byteArray) {
    let hexString = "";
    byteArray.forEach((byte)=>{
        hexString += ("0" + (byte & 0xff).toString(16)).slice(-2);
    });
    return hexString;
}
function hexToByteArray(hexString) {
    if (hexString.length % 2 !== 0) throw new Error(`Cannot convert ${hexString} to bytesArray`);
    const result = new Uint8Array(hexString.length / 2);
    for(let i = 0; i < hexString.length; i += 2)result[i / 2] = parseInt(hexString.slice(i, i + 2), 16);
    return result;
}
function isNode() {
    return typeof process !== "undefined" && process.versions != null && process.versions.node != null;
}
class SessionCrypto {
    constructor(keyPair){
        this.nonceLength = 24;
        this.keyPair = keyPair ? this.createKeypairFromString(keyPair) : this.createKeypair();
        this.sessionId = toHexString(this.keyPair.publicKey);
    }
    createKeypair() {
        return (0, _tweetnaclDefault.default).box.keyPair();
    }
    createKeypairFromString(keyPair) {
        return {
            publicKey: hexToByteArray(keyPair.publicKey),
            secretKey: hexToByteArray(keyPair.secretKey)
        };
    }
    createNonce() {
        return (0, _tweetnaclDefault.default).randomBytes(this.nonceLength);
    }
    encrypt(message, receiverPublicKey) {
        const encodedMessage = new TextEncoder().encode(message);
        const nonce = this.createNonce();
        const encrypted = (0, _tweetnaclDefault.default).box(encodedMessage, nonce, receiverPublicKey, this.keyPair.secretKey);
        return concatUint8Arrays(nonce, encrypted);
    }
    decrypt(message, senderPublicKey) {
        const [nonce, internalMessage] = splitToUint8Arrays(message, this.nonceLength);
        const decrypted = (0, _tweetnaclDefault.default).box.open(internalMessage, nonce, senderPublicKey, this.keyPair.secretKey);
        if (!decrypted) throw new Error(`Decryption error: \n message: ${message.toString()} \n sender pubkey: ${senderPublicKey.toString()} \n keypair pubkey: ${this.keyPair.publicKey.toString()} \n keypair secretkey: ${this.keyPair.secretKey.toString()}`);
        return new TextDecoder().decode(decrypted);
    }
    stringifyKeypair() {
        return {
            publicKey: toHexString(this.keyPair.publicKey),
            secretKey: toHexString(this.keyPair.secretKey)
        };
    }
}

},{"e8799a2bff0ca398":"d5jf4","tweetnacl-util":"iqvvT","tweetnacl":"3J9rh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iqvvT":[function(require,module,exports) {
var Buffer = require("f7984539c0ca95ea").Buffer;
// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
(function(root, f) {
    "use strict";
    if (0, module.exports) module.exports = f();
    else if (root.nacl) root.nacl.util = f();
    else {
        root.nacl = {};
        root.nacl.util = f();
    }
})(this, function() {
    "use strict";
    var util = {};
    function validateBase64(s) {
        if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s)) throw new TypeError("invalid encoding");
    }
    util.decodeUTF8 = function(s) {
        if (typeof s !== "string") throw new TypeError("expected string");
        var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
        for(i = 0; i < d.length; i++)b[i] = d.charCodeAt(i);
        return b;
    };
    util.encodeUTF8 = function(arr) {
        var i, s = [];
        for(i = 0; i < arr.length; i++)s.push(String.fromCharCode(arr[i]));
        return decodeURIComponent(escape(s.join("")));
    };
    if (typeof atob === "undefined") {
        // Node.js
        if (typeof Buffer.from !== "undefined") {
            // Node v6 and later
            util.encodeBase64 = function(arr) {
                return Buffer.from(arr).toString("base64");
            };
            util.decodeBase64 = function(s) {
                validateBase64(s);
                return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, "base64"), 0));
            };
        } else {
            // Node earlier than v6
            util.encodeBase64 = function(arr) {
                return new Buffer(arr).toString("base64");
            };
            util.decodeBase64 = function(s) {
                validateBase64(s);
                return new Uint8Array(Array.prototype.slice.call(new Buffer(s, "base64"), 0));
            };
        }
    } else {
        // Browsers
        util.encodeBase64 = function(arr) {
            var i, s = [], len = arr.length;
            for(i = 0; i < len; i++)s.push(String.fromCharCode(arr[i]));
            return btoa(s.join(""));
        };
        util.decodeBase64 = function(s) {
            validateBase64(s);
            var i, d = atob(s), b = new Uint8Array(d.length);
            for(i = 0; i < d.length; i++)b[i] = d.charCodeAt(i);
            return b;
        };
    }
    return util;
});

},{"f7984539c0ca95ea":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"3J9rh":[function(require,module,exports) {
(function(nacl) {
    "use strict";
    // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
    // Public domain.
    //
    // Implementation derived from TweetNaCl version 20140427.
    // See for details: http://tweetnacl.cr.yp.to/
    var gf = function(init) {
        var i, r = new Float64Array(16);
        if (init) for(i = 0; i < init.length; i++)r[i] = init[i];
        return r;
    };
    //  Pluggable, initialized in high-level API below.
    var randombytes = function() {
        throw new Error("no PRNG");
    };
    var _0 = new Uint8Array(16);
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf(), gf1 = gf([
        1
    ]), _121665 = gf([
        0xdb41,
        1
    ]), D = gf([
        0x78a3,
        0x1359,
        0x4dca,
        0x75eb,
        0xd8ab,
        0x4141,
        0x0a4d,
        0x0070,
        0xe898,
        0x7779,
        0x4079,
        0x8cc7,
        0xfe73,
        0x2b6f,
        0x6cee,
        0x5203
    ]), D2 = gf([
        0xf159,
        0x26b2,
        0x9b94,
        0xebd6,
        0xb156,
        0x8283,
        0x149a,
        0x00e0,
        0xd130,
        0xeef3,
        0x80f2,
        0x198e,
        0xfce7,
        0x56df,
        0xd9dc,
        0x2406
    ]), X = gf([
        0xd51a,
        0x8f25,
        0x2d60,
        0xc956,
        0xa7b2,
        0x9525,
        0xc760,
        0x692c,
        0xdc5c,
        0xfdd6,
        0xe231,
        0xc0a4,
        0x53fe,
        0xcd6e,
        0x36d3,
        0x2169
    ]), Y = gf([
        0x6658,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666
    ]), I = gf([
        0xa0b0,
        0x4a0e,
        0x1b27,
        0xc4ee,
        0xe478,
        0xad2f,
        0x1806,
        0x2f43,
        0xd7a7,
        0x3dfb,
        0x0099,
        0x2b4d,
        0xdf0b,
        0x4fc1,
        0x2480,
        0x2b83
    ]);
    function ts64(x, i, h, l) {
        x[i] = h >> 24 & 0xff;
        x[i + 1] = h >> 16 & 0xff;
        x[i + 2] = h >> 8 & 0xff;
        x[i + 3] = h & 0xff;
        x[i + 4] = l >> 24 & 0xff;
        x[i + 5] = l >> 16 & 0xff;
        x[i + 6] = l >> 8 & 0xff;
        x[i + 7] = l & 0xff;
    }
    function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for(i = 0; i < n; i++)d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
    }
    function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
    }
    function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
    }
    function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24, j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24, j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24, j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24, j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24, j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24, j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24, j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24, j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24, j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24, j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24, j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24, j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24, j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24, j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24, j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for(var i = 0; i < 20; i += 2){
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 25;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 19;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 25;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 19;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 25;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 19;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 25;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 19;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 14;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 25;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 19;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 25;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 19;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 25;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 19;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 25;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 19;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 14;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 0xff;
        o[1] = x0 >>> 8 & 0xff;
        o[2] = x0 >>> 16 & 0xff;
        o[3] = x0 >>> 24 & 0xff;
        o[4] = x1 >>> 0 & 0xff;
        o[5] = x1 >>> 8 & 0xff;
        o[6] = x1 >>> 16 & 0xff;
        o[7] = x1 >>> 24 & 0xff;
        o[8] = x2 >>> 0 & 0xff;
        o[9] = x2 >>> 8 & 0xff;
        o[10] = x2 >>> 16 & 0xff;
        o[11] = x2 >>> 24 & 0xff;
        o[12] = x3 >>> 0 & 0xff;
        o[13] = x3 >>> 8 & 0xff;
        o[14] = x3 >>> 16 & 0xff;
        o[15] = x3 >>> 24 & 0xff;
        o[16] = x4 >>> 0 & 0xff;
        o[17] = x4 >>> 8 & 0xff;
        o[18] = x4 >>> 16 & 0xff;
        o[19] = x4 >>> 24 & 0xff;
        o[20] = x5 >>> 0 & 0xff;
        o[21] = x5 >>> 8 & 0xff;
        o[22] = x5 >>> 16 & 0xff;
        o[23] = x5 >>> 24 & 0xff;
        o[24] = x6 >>> 0 & 0xff;
        o[25] = x6 >>> 8 & 0xff;
        o[26] = x6 >>> 16 & 0xff;
        o[27] = x6 >>> 24 & 0xff;
        o[28] = x7 >>> 0 & 0xff;
        o[29] = x7 >>> 8 & 0xff;
        o[30] = x7 >>> 16 & 0xff;
        o[31] = x7 >>> 24 & 0xff;
        o[32] = x8 >>> 0 & 0xff;
        o[33] = x8 >>> 8 & 0xff;
        o[34] = x8 >>> 16 & 0xff;
        o[35] = x8 >>> 24 & 0xff;
        o[36] = x9 >>> 0 & 0xff;
        o[37] = x9 >>> 8 & 0xff;
        o[38] = x9 >>> 16 & 0xff;
        o[39] = x9 >>> 24 & 0xff;
        o[40] = x10 >>> 0 & 0xff;
        o[41] = x10 >>> 8 & 0xff;
        o[42] = x10 >>> 16 & 0xff;
        o[43] = x10 >>> 24 & 0xff;
        o[44] = x11 >>> 0 & 0xff;
        o[45] = x11 >>> 8 & 0xff;
        o[46] = x11 >>> 16 & 0xff;
        o[47] = x11 >>> 24 & 0xff;
        o[48] = x12 >>> 0 & 0xff;
        o[49] = x12 >>> 8 & 0xff;
        o[50] = x12 >>> 16 & 0xff;
        o[51] = x12 >>> 24 & 0xff;
        o[52] = x13 >>> 0 & 0xff;
        o[53] = x13 >>> 8 & 0xff;
        o[54] = x13 >>> 16 & 0xff;
        o[55] = x13 >>> 24 & 0xff;
        o[56] = x14 >>> 0 & 0xff;
        o[57] = x14 >>> 8 & 0xff;
        o[58] = x14 >>> 16 & 0xff;
        o[59] = x14 >>> 24 & 0xff;
        o[60] = x15 >>> 0 & 0xff;
        o[61] = x15 >>> 8 & 0xff;
        o[62] = x15 >>> 16 & 0xff;
        o[63] = x15 >>> 24 & 0xff;
    }
    function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24, j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24, j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24, j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24, j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24, j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24, j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24, j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24, j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24, j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24, j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24, j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24, j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24, j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24, j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24, j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for(var i = 0; i < 20; i += 2){
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 25;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 19;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 25;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 19;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 25;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 19;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 25;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 19;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 14;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 25;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 19;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 25;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 19;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 25;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 19;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 25;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 19;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 14;
        }
        o[0] = x0 >>> 0 & 0xff;
        o[1] = x0 >>> 8 & 0xff;
        o[2] = x0 >>> 16 & 0xff;
        o[3] = x0 >>> 24 & 0xff;
        o[4] = x5 >>> 0 & 0xff;
        o[5] = x5 >>> 8 & 0xff;
        o[6] = x5 >>> 16 & 0xff;
        o[7] = x5 >>> 24 & 0xff;
        o[8] = x10 >>> 0 & 0xff;
        o[9] = x10 >>> 8 & 0xff;
        o[10] = x10 >>> 16 & 0xff;
        o[11] = x10 >>> 24 & 0xff;
        o[12] = x15 >>> 0 & 0xff;
        o[13] = x15 >>> 8 & 0xff;
        o[14] = x15 >>> 16 & 0xff;
        o[15] = x15 >>> 24 & 0xff;
        o[16] = x6 >>> 0 & 0xff;
        o[17] = x6 >>> 8 & 0xff;
        o[18] = x6 >>> 16 & 0xff;
        o[19] = x6 >>> 24 & 0xff;
        o[20] = x7 >>> 0 & 0xff;
        o[21] = x7 >>> 8 & 0xff;
        o[22] = x7 >>> 16 & 0xff;
        o[23] = x7 >>> 24 & 0xff;
        o[24] = x8 >>> 0 & 0xff;
        o[25] = x8 >>> 8 & 0xff;
        o[26] = x8 >>> 16 & 0xff;
        o[27] = x8 >>> 24 & 0xff;
        o[28] = x9 >>> 0 & 0xff;
        o[29] = x9 >>> 8 & 0xff;
        o[30] = x9 >>> 16 & 0xff;
        o[31] = x9 >>> 24 & 0xff;
    }
    function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
    }
    function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
    }
    var sigma = new Uint8Array([
        101,
        120,
        112,
        97,
        110,
        100,
        32,
        51,
        50,
        45,
        98,
        121,
        116,
        101,
        32,
        107
    ]);
    // "expand 32-byte k"
    function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for(i = 0; i < 16; i++)z[i] = 0;
        for(i = 0; i < 8; i++)z[i] = n[i];
        while(b >= 64){
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < 64; i++)c[cpos + i] = m[mpos + i] ^ x[i];
            u = 1;
            for(i = 8; i < 16; i++){
                u = u + (z[i] & 0xff) | 0;
                z[i] = u & 0xff;
                u >>>= 8;
            }
            b -= 64;
            cpos += 64;
            mpos += 64;
        }
        if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < b; i++)c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
    }
    function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for(i = 0; i < 16; i++)z[i] = 0;
        for(i = 0; i < 8; i++)z[i] = n[i];
        while(b >= 64){
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < 64; i++)c[cpos + i] = x[i];
            u = 1;
            for(i = 8; i < 16; i++){
                u = u + (z[i] & 0xff) | 0;
                z[i] = u & 0xff;
                u >>>= 8;
            }
            b -= 64;
            cpos += 64;
        }
        if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < b; i++)c[cpos + i] = x[i];
        }
        return 0;
    }
    function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
    }
    function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
    }
    /*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/ var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 0xff | (key[1] & 0xff) << 8;
        this.r[0] = t0 & 0x1fff;
        t1 = key[2] & 0xff | (key[3] & 0xff) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
        t2 = key[4] & 0xff | (key[5] & 0xff) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
        t3 = key[6] & 0xff | (key[7] & 0xff) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
        t4 = key[8] & 0xff | (key[9] & 0xff) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
        this.r[5] = t4 >>> 1 & 0x1ffe;
        t5 = key[10] & 0xff | (key[11] & 0xff) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
        t6 = key[12] & 0xff | (key[13] & 0xff) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
        t7 = key[14] & 0xff | (key[15] & 0xff) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
        this.r[9] = t7 >>> 5 & 0x007f;
        this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
        this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
        this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
        this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
        this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
        this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
        this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
        this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
    };
    poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 2048;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while(bytes >= 16){
            t0 = m[mpos + 0] & 0xff | (m[mpos + 1] & 0xff) << 8;
            h0 += t0 & 0x1fff;
            t1 = m[mpos + 2] & 0xff | (m[mpos + 3] & 0xff) << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 0x1fff;
            t2 = m[mpos + 4] & 0xff | (m[mpos + 5] & 0xff) << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 0x1fff;
            t3 = m[mpos + 6] & 0xff | (m[mpos + 7] & 0xff) << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 0x1fff;
            t4 = m[mpos + 8] & 0xff | (m[mpos + 9] & 0xff) << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 0x1fff;
            h5 += t4 >>> 1 & 0x1fff;
            t5 = m[mpos + 10] & 0xff | (m[mpos + 11] & 0xff) << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 0x1fff;
            t6 = m[mpos + 12] & 0xff | (m[mpos + 13] & 0xff) << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 0x1fff;
            t7 = m[mpos + 14] & 0xff | (m[mpos + 15] & 0xff) << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 0x1fff;
            h9 += t7 >>> 5 | hibit;
            c = 0;
            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 0x1fff;
            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 0x1fff;
            d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 0x1fff;
            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 0x1fff;
            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 0x1fff;
            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 0x1fff;
            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 0x1fff;
            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 0x1fff;
            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 0x1fff;
            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 0x1fff;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 0x1fff;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
    };
    poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask, f, i;
        if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for(; i < 16; i++)this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 0x1fff;
        for(i = 2; i < 10; i++){
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 0x1fff;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 0x1fff;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 0x1fff;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for(i = 1; i < 10; i++){
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= 8192;
        mask = (c ^ 1) - 1;
        for(i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(i = 0; i < 10; i++)this.h[i] = this.h[i] & mask | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 0xffff;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 0xffff;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 0xffff;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 0xffff;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 0xffff;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 0xffff;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 0xffff;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 0xffff;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 0xffff;
        for(i = 1; i < 8; i++){
            f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
            this.h[i] = f & 0xffff;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 0xff;
        mac[macpos + 1] = this.h[0] >>> 8 & 0xff;
        mac[macpos + 2] = this.h[1] >>> 0 & 0xff;
        mac[macpos + 3] = this.h[1] >>> 8 & 0xff;
        mac[macpos + 4] = this.h[2] >>> 0 & 0xff;
        mac[macpos + 5] = this.h[2] >>> 8 & 0xff;
        mac[macpos + 6] = this.h[3] >>> 0 & 0xff;
        mac[macpos + 7] = this.h[3] >>> 8 & 0xff;
        mac[macpos + 8] = this.h[4] >>> 0 & 0xff;
        mac[macpos + 9] = this.h[4] >>> 8 & 0xff;
        mac[macpos + 10] = this.h[5] >>> 0 & 0xff;
        mac[macpos + 11] = this.h[5] >>> 8 & 0xff;
        mac[macpos + 12] = this.h[6] >>> 0 & 0xff;
        mac[macpos + 13] = this.h[6] >>> 8 & 0xff;
        mac[macpos + 14] = this.h[7] >>> 0 & 0xff;
        mac[macpos + 15] = this.h[7] >>> 8 & 0xff;
    };
    poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
            want = 16 - this.leftover;
            if (want > bytes) want = bytes;
            for(i = 0; i < want; i++)this.buffer[this.leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16) return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - bytes % 16;
            this.blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for(i = 0; i < bytes; i++)this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes;
        }
    };
    function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
    }
    function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
    }
    function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32) return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for(i = 0; i < 16; i++)c[i] = 0;
        return 0;
    }
    function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32) return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for(i = 0; i < 32; i++)m[i] = 0;
        return 0;
    }
    function set25519(r, a) {
        var i;
        for(i = 0; i < 16; i++)r[i] = a[i] | 0;
    }
    function car25519(o) {
        var i, v, c = 1;
        for(i = 0; i < 16; i++){
            v = o[i] + c + 65535;
            c = Math.floor(v / 65536);
            o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
    }
    function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for(var i = 0; i < 16; i++){
            t = c & (p[i] ^ q[i]);
            p[i] ^= t;
            q[i] ^= t;
        }
    }
    function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for(i = 0; i < 16; i++)t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for(j = 0; j < 2; j++){
            m[0] = t[0] - 0xffed;
            for(i = 1; i < 15; i++){
                m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
                m[i - 1] &= 0xffff;
            }
            m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 0xffff;
            sel25519(t, m, 1 - b);
        }
        for(i = 0; i < 16; i++){
            o[2 * i] = t[i] & 0xff;
            o[2 * i + 1] = t[i] >> 8;
        }
    }
    function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
    }
    function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
    }
    function unpack25519(o, n) {
        var i;
        for(i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 0x7fff;
    }
    function A(o, a, b) {
        for(var i = 0; i < 16; i++)o[i] = a[i] + b[i];
    }
    function Z(o, a, b) {
        for(var i = 0; i < 16; i++)o[i] = a[i] - b[i];
    }
    function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        // t15 left as is
        // first car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        // second car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
    }
    function S(o, a) {
        M(o, a, a);
    }
    function inv25519(o, i) {
        var c = gf();
        var a;
        for(a = 0; a < 16; a++)c[a] = i[a];
        for(a = 253; a >= 0; a--){
            S(c, c);
            if (a !== 2 && a !== 4) M(c, c, i);
        }
        for(a = 0; a < 16; a++)o[a] = c[a];
    }
    function pow2523(o, i) {
        var c = gf();
        var a;
        for(a = 0; a < 16; a++)c[a] = i[a];
        for(a = 250; a >= 0; a--){
            S(c, c);
            if (a !== 1) M(c, c, i);
        }
        for(a = 0; a < 16; a++)o[a] = c[a];
    }
    function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for(i = 0; i < 31; i++)z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for(i = 0; i < 16; i++){
            b[i] = x[i];
            d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for(i = 254; i >= 0; --i){
            r = z[i >>> 3] >>> (i & 7) & 1;
            sel25519(a, b, r);
            sel25519(c, d, r);
            A(e, a, c);
            Z(a, a, c);
            A(c, b, d);
            Z(b, b, d);
            S(d, e);
            S(f, a);
            M(a, c, a);
            M(c, b, e);
            A(e, a, c);
            Z(a, a, c);
            S(b, a);
            Z(c, d, f);
            M(a, c, _121665);
            A(a, a, d);
            M(c, c, a);
            M(a, d, f);
            M(d, b, x);
            S(b, e);
            sel25519(a, b, r);
            sel25519(c, d, r);
        }
        for(i = 0; i < 16; i++){
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
    }
    function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
    }
    function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
    }
    function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
    }
    var crypto_box_afternm = crypto_secretbox;
    var crypto_box_open_afternm = crypto_secretbox_open;
    function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
    }
    function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
    }
    var K = [
        0x428a2f98,
        0xd728ae22,
        0x71374491,
        0x23ef65cd,
        0xb5c0fbcf,
        0xec4d3b2f,
        0xe9b5dba5,
        0x8189dbbc,
        0x3956c25b,
        0xf348b538,
        0x59f111f1,
        0xb605d019,
        0x923f82a4,
        0xaf194f9b,
        0xab1c5ed5,
        0xda6d8118,
        0xd807aa98,
        0xa3030242,
        0x12835b01,
        0x45706fbe,
        0x243185be,
        0x4ee4b28c,
        0x550c7dc3,
        0xd5ffb4e2,
        0x72be5d74,
        0xf27b896f,
        0x80deb1fe,
        0x3b1696b1,
        0x9bdc06a7,
        0x25c71235,
        0xc19bf174,
        0xcf692694,
        0xe49b69c1,
        0x9ef14ad2,
        0xefbe4786,
        0x384f25e3,
        0x0fc19dc6,
        0x8b8cd5b5,
        0x240ca1cc,
        0x77ac9c65,
        0x2de92c6f,
        0x592b0275,
        0x4a7484aa,
        0x6ea6e483,
        0x5cb0a9dc,
        0xbd41fbd4,
        0x76f988da,
        0x831153b5,
        0x983e5152,
        0xee66dfab,
        0xa831c66d,
        0x2db43210,
        0xb00327c8,
        0x98fb213f,
        0xbf597fc7,
        0xbeef0ee4,
        0xc6e00bf3,
        0x3da88fc2,
        0xd5a79147,
        0x930aa725,
        0x06ca6351,
        0xe003826f,
        0x14292967,
        0x0a0e6e70,
        0x27b70a85,
        0x46d22ffc,
        0x2e1b2138,
        0x5c26c926,
        0x4d2c6dfc,
        0x5ac42aed,
        0x53380d13,
        0x9d95b3df,
        0x650a7354,
        0x8baf63de,
        0x766a0abb,
        0x3c77b2a8,
        0x81c2c92e,
        0x47edaee6,
        0x92722c85,
        0x1482353b,
        0xa2bfe8a1,
        0x4cf10364,
        0xa81a664b,
        0xbc423001,
        0xc24b8b70,
        0xd0f89791,
        0xc76c51a3,
        0x0654be30,
        0xd192e819,
        0xd6ef5218,
        0xd6990624,
        0x5565a910,
        0xf40e3585,
        0x5771202a,
        0x106aa070,
        0x32bbd1b8,
        0x19a4c116,
        0xb8d2d0c8,
        0x1e376c08,
        0x5141ab53,
        0x2748774c,
        0xdf8eeb99,
        0x34b0bcb5,
        0xe19b48a8,
        0x391c0cb3,
        0xc5c95a63,
        0x4ed8aa4a,
        0xe3418acb,
        0x5b9cca4f,
        0x7763e373,
        0x682e6ff3,
        0xd6b2b8a3,
        0x748f82ee,
        0x5defb2fc,
        0x78a5636f,
        0x43172f60,
        0x84c87814,
        0xa1f0ab72,
        0x8cc70208,
        0x1a6439ec,
        0x90befffa,
        0x23631e28,
        0xa4506ceb,
        0xde82bde9,
        0xbef9a3f7,
        0xb2c67915,
        0xc67178f2,
        0xe372532b,
        0xca273ece,
        0xea26619c,
        0xd186b8c7,
        0x21c0c207,
        0xeada7dd6,
        0xcde0eb1e,
        0xf57d4f7f,
        0xee6ed178,
        0x06f067aa,
        0x72176fba,
        0x0a637dc5,
        0xa2c898a6,
        0x113f9804,
        0xbef90dae,
        0x1b710b35,
        0x131c471b,
        0x28db77f5,
        0x23047d84,
        0x32caab7b,
        0x40c72493,
        0x3c9ebe0a,
        0x15c9bebc,
        0x431d67c4,
        0x9c100d4c,
        0x4cc5d4be,
        0xcb3e42b6,
        0x597f299c,
        0xfc657e2a,
        0x5fcb6fab,
        0x3ad6faec,
        0x6c44198c,
        0x4a475817
    ];
    function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while(n >= 128){
            for(i = 0; i < 16; i++){
                j = 8 * i + pos;
                wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
                wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
            }
            for(i = 0; i < 80; i++){
                bh0 = ah0;
                bh1 = ah1;
                bh2 = ah2;
                bh3 = ah3;
                bh4 = ah4;
                bh5 = ah5;
                bh6 = ah6;
                bh7 = ah7;
                bl0 = al0;
                bl1 = al1;
                bl2 = al2;
                bl3 = al3;
                bl4 = al4;
                bl5 = al5;
                bl6 = al6;
                bl7 = al7;
                // add
                h = ah7;
                l = al7;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                // Sigma1
                h = (ah4 >>> 14 | al4 << 18) ^ (ah4 >>> 18 | al4 << 14) ^ (al4 >>> 9 | ah4 << 23);
                l = (al4 >>> 14 | ah4 << 18) ^ (al4 >>> 18 | ah4 << 14) ^ (ah4 >>> 9 | al4 << 23);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // Ch
                h = ah4 & ah5 ^ ~ah4 & ah6;
                l = al4 & al5 ^ ~al4 & al6;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // K
                h = K[i * 2];
                l = K[i * 2 + 1];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // w
                h = wh[i % 16];
                l = wl[i % 16];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                th = c & 0xffff | d << 16;
                tl = a & 0xffff | b << 16;
                // add
                h = th;
                l = tl;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                // Sigma0
                h = (ah0 >>> 28 | al0 << 4) ^ (al0 >>> 2 | ah0 << 30) ^ (al0 >>> 7 | ah0 << 25);
                l = (al0 >>> 28 | ah0 << 4) ^ (ah0 >>> 2 | al0 << 30) ^ (ah0 >>> 7 | al0 << 25);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // Maj
                h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
                l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh7 = c & 0xffff | d << 16;
                bl7 = a & 0xffff | b << 16;
                // add
                h = bh3;
                l = bl3;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                h = th;
                l = tl;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh3 = c & 0xffff | d << 16;
                bl3 = a & 0xffff | b << 16;
                ah1 = bh0;
                ah2 = bh1;
                ah3 = bh2;
                ah4 = bh3;
                ah5 = bh4;
                ah6 = bh5;
                ah7 = bh6;
                ah0 = bh7;
                al1 = bl0;
                al2 = bl1;
                al3 = bl2;
                al4 = bl3;
                al5 = bl4;
                al6 = bl5;
                al7 = bl6;
                al0 = bl7;
                if (i % 16 === 15) for(j = 0; j < 16; j++){
                    // add
                    h = wh[j];
                    l = wl[j];
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16;
                    h = wh[(j + 9) % 16];
                    l = wl[(j + 9) % 16];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma0
                    th = wh[(j + 1) % 16];
                    tl = wl[(j + 1) % 16];
                    h = (th >>> 1 | tl << 31) ^ (th >>> 8 | tl << 24) ^ th >>> 7;
                    l = (tl >>> 1 | th << 31) ^ (tl >>> 8 | th << 24) ^ (tl >>> 7 | th << 25);
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma1
                    th = wh[(j + 14) % 16];
                    tl = wl[(j + 14) % 16];
                    h = (th >>> 19 | tl << 13) ^ (tl >>> 29 | th << 3) ^ th >>> 6;
                    l = (tl >>> 19 | th << 13) ^ (th >>> 29 | tl << 3) ^ (tl >>> 6 | th << 26);
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    wh[j] = c & 0xffff | d << 16;
                    wl[j] = a & 0xffff | b << 16;
                }
            }
            // add
            h = ah0;
            l = al0;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[0];
            l = hl[0];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[0] = ah0 = c & 0xffff | d << 16;
            hl[0] = al0 = a & 0xffff | b << 16;
            h = ah1;
            l = al1;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[1];
            l = hl[1];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[1] = ah1 = c & 0xffff | d << 16;
            hl[1] = al1 = a & 0xffff | b << 16;
            h = ah2;
            l = al2;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[2];
            l = hl[2];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[2] = ah2 = c & 0xffff | d << 16;
            hl[2] = al2 = a & 0xffff | b << 16;
            h = ah3;
            l = al3;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[3];
            l = hl[3];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[3] = ah3 = c & 0xffff | d << 16;
            hl[3] = al3 = a & 0xffff | b << 16;
            h = ah4;
            l = al4;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[4];
            l = hl[4];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[4] = ah4 = c & 0xffff | d << 16;
            hl[4] = al4 = a & 0xffff | b << 16;
            h = ah5;
            l = al5;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[5];
            l = hl[5];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[5] = ah5 = c & 0xffff | d << 16;
            hl[5] = al5 = a & 0xffff | b << 16;
            h = ah6;
            l = al6;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[6];
            l = hl[6];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[6] = ah6 = c & 0xffff | d << 16;
            hl[6] = al6 = a & 0xffff | b << 16;
            h = ah7;
            l = al7;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[7];
            l = hl[7];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[7] = ah7 = c & 0xffff | d << 16;
            hl[7] = al7 = a & 0xffff | b << 16;
            pos += 128;
            n -= 128;
        }
        return n;
    }
    function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 0x6a09e667;
        hh[1] = 0xbb67ae85;
        hh[2] = 0x3c6ef372;
        hh[3] = 0xa54ff53a;
        hh[4] = 0x510e527f;
        hh[5] = 0x9b05688c;
        hh[6] = 0x1f83d9ab;
        hh[7] = 0x5be0cd19;
        hl[0] = 0xf3bcc908;
        hl[1] = 0x84caa73b;
        hl[2] = 0xfe94f82b;
        hl[3] = 0x5f1d36f1;
        hl[4] = 0xade682d1;
        hl[5] = 0x2b3e6c1f;
        hl[6] = 0xfb41bd6b;
        hl[7] = 0x137e2179;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for(i = 0; i < n; i++)x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 0x20000000 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for(i = 0; i < 8; i++)ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
    }
    function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
    }
    function cswap(p, q, b) {
        var i;
        for(i = 0; i < 4; i++)sel25519(p[i], q[i], b);
    }
    function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for(i = 255; i >= 0; --i){
            b = s[i / 8 | 0] >> (i & 7) & 1;
            cswap(p, q, b);
            add(q, p);
            add(p, p);
            cswap(p, q, b);
        }
    }
    function scalarbase(p, s) {
        var q = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
    }
    function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        var i;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for(i = 0; i < 32; i++)sk[i + 32] = pk[i];
        return 0;
    }
    var L = new Float64Array([
        0xed,
        0xd3,
        0xf5,
        0x5c,
        0x1a,
        0x63,
        0x12,
        0x58,
        0xd6,
        0x9c,
        0xf7,
        0xa2,
        0xde,
        0xf9,
        0xde,
        0x14,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0x10
    ]);
    function modL(r, x) {
        var carry, i, j, k;
        for(i = 63; i >= 32; --i){
            carry = 0;
            for(j = i - 32, k = i - 12; j < k; ++j){
                x[j] += carry - 16 * x[i] * L[j - (i - 32)];
                carry = Math.floor((x[j] + 128) / 256);
                x[j] -= carry * 256;
            }
            x[j] += carry;
            x[i] = 0;
        }
        carry = 0;
        for(j = 0; j < 32; j++){
            x[j] += carry - (x[31] >> 4) * L[j];
            carry = x[j] >> 8;
            x[j] &= 255;
        }
        for(j = 0; j < 32; j++)x[j] -= carry * L[j];
        for(i = 0; i < 32; i++){
            x[i + 1] += x[i] >> 8;
            r[i] = x[i] & 255;
        }
    }
    function reduce(r) {
        var x = new Float64Array(64), i;
        for(i = 0; i < 64; i++)x[i] = r[i];
        for(i = 0; i < 64; i++)r[i] = 0;
        modL(r, x);
    }
    // Note: difference from C - smlen returned, not passed as argument.
    function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for(i = 0; i < n; i++)sm[64 + i] = m[i];
        for(i = 0; i < 32; i++)sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for(i = 32; i < 64; i++)sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for(i = 0; i < 64; i++)x[i] = 0;
        for(i = 0; i < 32; i++)x[i] = r[i];
        for(i = 0; i < 32; i++)for(j = 0; j < 32; j++)x[i + j] += h[i] * d[j];
        modL(sm.subarray(32), x);
        return smlen;
    }
    function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
    }
    function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ], q = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        if (n < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for(i = 0; i < n; i++)m[i] = sm[i];
        for(i = 0; i < 32; i++)m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
            for(i = 0; i < n; i++)m[i] = 0;
            return -1;
        }
        for(i = 0; i < n; i++)m[i] = sm[i + 64];
        return n;
    }
    var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
    nacl.lowlevel = {
        crypto_core_hsalsa20: crypto_core_hsalsa20,
        crypto_stream_xor: crypto_stream_xor,
        crypto_stream: crypto_stream,
        crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
        crypto_stream_salsa20: crypto_stream_salsa20,
        crypto_onetimeauth: crypto_onetimeauth,
        crypto_onetimeauth_verify: crypto_onetimeauth_verify,
        crypto_verify_16: crypto_verify_16,
        crypto_verify_32: crypto_verify_32,
        crypto_secretbox: crypto_secretbox,
        crypto_secretbox_open: crypto_secretbox_open,
        crypto_scalarmult: crypto_scalarmult,
        crypto_scalarmult_base: crypto_scalarmult_base,
        crypto_box_beforenm: crypto_box_beforenm,
        crypto_box_afternm: crypto_box_afternm,
        crypto_box: crypto_box,
        crypto_box_open: crypto_box_open,
        crypto_box_keypair: crypto_box_keypair,
        crypto_hash: crypto_hash,
        crypto_sign: crypto_sign,
        crypto_sign_keypair: crypto_sign_keypair,
        crypto_sign_open: crypto_sign_open,
        crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES: crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
        crypto_hash_BYTES: crypto_hash_BYTES,
        gf: gf,
        D: D,
        L: L,
        pack25519: pack25519,
        unpack25519: unpack25519,
        M: M,
        A: A,
        S: S,
        Z: Z,
        pow2523: pow2523,
        add: add,
        set25519: set25519,
        modL: modL,
        scalarmult: scalarmult,
        scalarbase: scalarbase
    };
    /* High-level API */ function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
    }
    function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
    }
    function checkArrayTypes() {
        for(var i = 0; i < arguments.length; i++){
            if (!(arguments[i] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
        }
    }
    function cleanup(arr) {
        for(var i = 0; i < arr.length; i++)arr[i] = 0;
    }
    nacl.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
    };
    nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for(var i = 0; i < msg.length; i++)m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
    };
    nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for(var i = 0; i < box.length; i++)c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32) return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
    };
    nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
    nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
    nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
    nacl.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
    };
    nacl.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
    };
    nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
    nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
    nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k);
    };
    nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
    };
    nacl.box.after = nacl.secretbox;
    nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k);
    };
    nacl.box.open.after = nacl.secretbox.open;
    nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return {
            publicKey: pk,
            secretKey: new Uint8Array(secretKey)
        };
    };
    nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
    nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
    nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
    nacl.box.nonceLength = crypto_box_NONCEBYTES;
    nacl.box.overheadLength = nacl.secretbox.overheadLength;
    nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
    };
    nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m = new Uint8Array(mlen);
        for(var i = 0; i < m.length; i++)m[i] = tmp[i];
        return m;
    };
    nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for(var i = 0; i < sig.length; i++)sig[i] = signedMsg[i];
        return sig;
    };
    nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES) throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for(i = 0; i < crypto_sign_BYTES; i++)sm[i] = sig[i];
        for(i = 0; i < msg.length; i++)sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
    };
    nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for(var i = 0; i < pk.length; i++)pk[i] = secretKey[32 + i];
        return {
            publicKey: pk,
            secretKey: new Uint8Array(secretKey)
        };
    };
    nacl.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES) throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for(var i = 0; i < 32; i++)sk[i] = seed[i];
        crypto_sign_keypair(pk, sk, true);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
    nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
    nacl.sign.seedLength = crypto_sign_SEEDBYTES;
    nacl.sign.signatureLength = crypto_sign_BYTES;
    nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
    };
    nacl.hash.hashLength = crypto_hash_BYTES;
    nacl.verify = function(x, y) {
        checkArrayTypes(x, y);
        // Zero length arguments are considered not equal.
        if (x.length === 0 || y.length === 0) return false;
        if (x.length !== y.length) return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
    };
    nacl.setPRNG = function(fn) {
        randombytes = fn;
    };
    (function() {
        // Initialize PRNG if environment provides CSPRNG.
        // If not, methods calling randombytes will throw.
        var crypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto && crypto.getRandomValues) {
            // Browsers.
            var QUOTA = 65536;
            nacl.setPRNG(function(x, n) {
                var i, v = new Uint8Array(n);
                for(i = 0; i < n; i += QUOTA)crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
                for(i = 0; i < n; i++)x[i] = v[i];
                cleanup(v);
            });
        } else {
            // Node.js.
            crypto = require("64deaebb838d47b8");
            if (crypto && crypto.randomBytes) nacl.setPRNG(function(x, n) {
                var i, v = crypto.randomBytes(n);
                for(i = 0; i < n; i++)x[i] = v[i];
                cleanup(v);
            });
        }
    })();
})((0, module.exports) ? module.exports : self.nacl = self.nacl || {});

},{"64deaebb838d47b8":"jhUEF"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7gMnQ":[function(require,module,exports) {

},{}],"4PqjN":[function(require,module,exports) {

},{}],"2fabB":[function(require,module,exports) {
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.38
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
(function(window1, undefined) {
    "use strict";
    //////////////
    // Constants
    /////////////
    var LIBVERSION = "1.0.38", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
    ///////////
    // Helper
    //////////
    var extend = function(regexes, extensions) {
        var mergedRegexes = {};
        for(var i in regexes)if (extensions[i] && extensions[i].length % 2 === 0) mergedRegexes[i] = extensions[i].concat(regexes[i]);
        else mergedRegexes[i] = regexes[i];
        return mergedRegexes;
    }, enumerize = function(arr) {
        var enums = {};
        for(var i = 0; i < arr.length; i++)enums[arr[i].toUpperCase()] = arr[i];
        return enums;
    }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
        return str.toLowerCase();
    }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined;
    }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };
    ///////////////
    // Map helper
    //////////////
    var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        // loop through all regexes maps
        while(i < arrays.length && !matches){
            var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
            j = k = 0;
            // try matching uastring with regexes
            while(j < regex.length && !matches){
                if (!regex[j]) break;
                matches = regex[j++].exec(ua);
                if (!!matches) for(p = 0; p < props.length; p++){
                    match = matches[++k];
                    q = props[p];
                    // check if given property is actually array
                    if (typeof q === OBJ_TYPE && q.length > 0) {
                        if (q.length === 2) {
                            if (typeof q[1] == FUNC_TYPE) // assign modified match
                            this[q[0]] = q[1].call(this, match);
                            else // assign given value, ignore regex match
                            this[q[0]] = q[1];
                        } else if (q.length === 3) {
                            // check whether function or regex
                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) // call function (usually string mapper)
                            this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                            else // sanitize match using given regex
                            this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                        } else if (q.length === 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                    } else this[q] = match ? match : undefined;
                }
            }
            i += 2;
        }
    }, strMapper = function(str, map) {
        for(var i in map){
            // check if current value is array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) for(var j = 0; j < map[i].length; j++){
                if (has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
            }
            else if (has(map[i], str)) return i === UNKNOWN ? undefined : i;
        }
        return str;
    };
    ///////////////
    // String map
    //////////////
    // Safari < 3.0
    var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
    }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": [
            "NT 5.1",
            "NT 5.2"
        ],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": [
            "NT 6.4",
            "NT 10.0"
        ],
        "RT": "ARM"
    };
    //////////////
    // Regex map
    /////////////
    var regexes = {
        browser: [
            [
                /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "Chrome"
                ]
            ],
            [
                /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
            ],
            [
                VERSION,
                [
                    NAME,
                    "Edge"
                ]
            ],
            [
                // Presto based
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Mini"
                ]
            ],
            [
                /\bop(?:rg)?x\/([\w\.]+)/i // Opera GX
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " GX"
                ]
            ],
            [
                /\bopr\/([\w\.]+)/i // Opera Webkit
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA
                ]
            ],
            [
                // Mixed
                /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i // Baidu
            ],
            [
                VERSION,
                [
                    NAME,
                    "Baidu"
                ]
            ],
            [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                // Trident based
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i // Weibo
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bddg\/([\w\.]+)/i // DuckDuckGo
            ],
            [
                VERSION,
                [
                    NAME,
                    "DuckDuckGo"
                ]
            ],
            [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
            ],
            [
                VERSION,
                [
                    NAME,
                    "UC" + BROWSER
                ]
            ],
            [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i // WeChat
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat"
                ]
            ],
            [
                /konqueror\/([\w\.]+)/i // Konqueror
            ],
            [
                VERSION,
                [
                    NAME,
                    "Konqueror"
                ]
            ],
            [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
            ],
            [
                VERSION,
                [
                    NAME,
                    "IE"
                ]
            ],
            [
                /ya(?:search)?browser\/([\w\.]+)/i // Yandex
            ],
            [
                VERSION,
                [
                    NAME,
                    "Yandex"
                ]
            ],
            [
                /slbrowser\/([\w\.]+)/i // Smart Lenovo Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Smart Lenovo " + BROWSER
                ]
            ],
            [
                /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 Secure " + BROWSER
                ],
                VERSION
            ],
            [
                /\bfocus\/([\w\.]+)/i // Firefox Focus
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Focus"
                ]
            ],
            [
                /\bopt\/([\w\.]+)/i // Opera Touch
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Touch"
                ]
            ],
            [
                /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Coc Coc"
                ]
            ],
            [
                /dolfin\/([\w\.]+)/i // Dolphin
            ],
            [
                VERSION,
                [
                    NAME,
                    "Dolphin"
                ]
            ],
            [
                /coast\/([\w\.]+)/i // Opera Coast
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Coast"
                ]
            ],
            [
                /miuibrowser\/([\w\.]+)/i // MIUI Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "MIUI " + BROWSER
                ]
            ],
            [
                /fxios\/([-\w\.]+)/i // Firefox for iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX
                ]
            ],
            [
                /\bqihu|(qi?ho?o?|360)browser/i // 360
            ],
            [
                [
                    NAME,
                    "360 " + BROWSER
                ]
            ],
            [
                /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 " + BROWSER
                ],
                VERSION
            ],
            [
                /samsungbrowser\/([\w\.]+)/i // Samsung Internet
            ],
            [
                VERSION,
                [
                    NAME,
                    SAMSUNG + " Internet"
                ]
            ],
            [
                /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
            ],
            [
                [
                    NAME,
                    /_/g,
                    " "
                ],
                VERSION
            ],
            [
                /metasr[\/ ]?([\d\.]+)/i // Sogou Explorer
            ],
            [
                VERSION,
                [
                    NAME,
                    "Sogou Explorer"
                ]
            ],
            [
                /(sogou)mo\w+\/([\d\.]+)/i // Sogou Mobile
            ],
            [
                [
                    NAME,
                    "Sogou Mobile"
                ],
                VERSION
            ],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i // QQBrowser/2345 Browser
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
            ],
            [
                NAME
            ],
            [
                // WebView
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
            ],
            [
                [
                    NAME,
                    FACEBOOK
                ],
                VERSION
            ],
            [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i // Chromium/Instagram/Snapchat
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "GSA"
                ]
            ],
            [
                /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i // TikTok
            ],
            [
                VERSION,
                [
                    NAME,
                    "TikTok"
                ]
            ],
            [
                /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + " Headless"
                ]
            ],
            [
                / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
            ],
            [
                [
                    NAME,
                    CHROME + " WebView"
                ],
                VERSION
            ],
            [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Android " + BROWSER
                ]
            ],
            [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
                NAME,
                VERSION
            ],
            [
                /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i // Mobile Safari
            ],
            [
                VERSION,
                [
                    NAME,
                    "Mobile Safari"
                ]
            ],
            [
                /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
            ],
            [
                VERSION,
                NAME
            ],
            [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    oldSafariMap
                ]
            ],
            [
                /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                // Gecko based
                /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
            ],
            [
                [
                    NAME,
                    "Netscape"
                ],
                VERSION
            ],
            [
                /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Reality"
                ]
            ],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i // Panasonic Viera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(cobalt)\/([\w\.]+)/i // Cobalt
            ],
            [
                NAME,
                [
                    VERSION,
                    /master.|lts./,
                    ""
                ]
            ]
        ],
        cpu: [
            [
                /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i // AMD64 (x64)
            ],
            [
                [
                    ARCHITECTURE,
                    "amd64"
                ]
            ],
            [
                /(ia32(?=;))/i // IA32 (quicktime)
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ],
            [
                /((?:i[346]|x)86)[;\)]/i // IA32 (x86)
            ],
            [
                [
                    ARCHITECTURE,
                    "ia32"
                ]
            ],
            [
                /\b(aarch64|arm(v?8e?l?|_?64))\b/i // ARM64
            ],
            [
                [
                    ARCHITECTURE,
                    "arm64"
                ]
            ],
            [
                /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i // ARMHF
            ],
            [
                [
                    ARCHITECTURE,
                    "armhf"
                ]
            ],
            [
                // PocketPC mistakenly identified as PowerPC
                /windows (ce|mobile); ppc;/i
            ],
            [
                [
                    ARCHITECTURE,
                    "arm"
                ]
            ],
            [
                /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i // PowerPC
            ],
            [
                [
                    ARCHITECTURE,
                    /ower/,
                    EMPTY,
                    lowerize
                ]
            ],
            [
                /(sun4\w)[;\)]/i // SPARC
            ],
            [
                [
                    ARCHITECTURE,
                    "sparc"
                ]
            ],
            [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ]
        ],
        device: [
            [
                //////////////////////////
                // MOBILES & TABLETS
                /////////////////////////
                // Samsung
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Apple
                /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i // iPod/iPhone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(macintosh);/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ]
            ],
            [
                // Sharp
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Huawei
                /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Xiaomi
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i // Mi Pad tablets
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OPPO
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OPPO"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(opd2\d{3}a?) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OPPO"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Vivo
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Vivo"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Realme
                /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Realme"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Motorola
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // LG
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Lenovo
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Lenovo"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Nokia
                /(?:maemo|nokia).*(n900|lumia \d+)/i,
                /nokia[-_ ]?([-\w\.]*)/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    "Nokia"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Google
                /(pixel c)\b/i // Google Pixel C
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sony
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
                [
                    MODEL,
                    "Xperia Tablet"
                ],
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OnePlus
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OnePlus"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Amazon
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
            ],
            [
                [
                    MODEL,
                    /(.+)/g,
                    "Fire Phone $1"
                ],
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // BlackBerry
                /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
            ],
            [
                MODEL,
                VENDOR,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i // BlackBerry 10
            ],
            [
                MODEL,
                [
                    VENDOR,
                    BLACKBERRY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Asus
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // HTC
                /(nexus 9)/i // HTC Nexus 9
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "HTC"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                // ZTE
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
                VENDOR,
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Acer
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Acer"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Meizu
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Meizu"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Ulefone
                /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Ulefone"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // MIXED
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i // OPPO
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(surface duo)/i // Surface Duo
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Fairphone"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(u304aa)/i // AT&T
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "AT&T"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\bsie-(\w*)/i // Siemens
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Siemens"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(rct\w+) b/i // RCA Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "RCA"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Dell"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Verizon"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Barnes & Noble"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(tm\d{3}\w+) b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NuVision"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(k88) b/i // ZTE K Series Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(nx\d{3}j) b/i // ZTE Nubia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(zur\d{3}) b/i // Swiss ZUR Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((zeki)?tb.*\b) b/i // Zeki Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Zeki"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
            ],
            [
                [
                    VENDOR,
                    "Dragon Touch"
                ],
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(ns-?\w{0,9}) b/i // Insignia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Insignia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NextBook"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
            ],
            [
                [
                    VENDOR,
                    "Voice"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
            ],
            [
                [
                    VENDOR,
                    "LvTel"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(ph-1) /i // Essential PH-1
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Essential"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Envizen"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "MachSpeed"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\btu_(1491) b/i // Rotor Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Rotor"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(shield[\w ]+) b/i // Nvidia Shield Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(sprint) (\w+)/i // Sprint Phones
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kin\.[onetw]{3})/i // Microsoft Kin
            ],
            [
                [
                    MODEL,
                    /\./g,
                    " "
                ],
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                ///////////////////
                // SMARTTVS
                ///////////////////
                /smart-tv.+(samsung)/i // Samsung
            ],
            [
                VENDOR,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /hbbtv.+maple;(\d+)/i
            ],
            [
                [
                    MODEL,
                    /^/,
                    "SmartTV"
                ],
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
            ],
            [
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(apple) ?tv/i // Apple TV
            ],
            [
                VENDOR,
                [
                    MODEL,
                    APPLE + " TV"
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /crkey/i // Google Chromecast
            ],
            [
                [
                    MODEL,
                    CHROME + "cast"
                ],
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /droid.+aft(\w+)( bui|\))/i // Fire TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\(dtv[\);].+(aquos)/i,
                /(aquos-tv[\w ]+)\)/i // Sharp
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(bravia[\w ]+)( bui|\))/i // Sony
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(mitv-\w{5}) bui/i // Xiaomi
            ],
            [
                MODEL,
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /Hbbtv.*(technisat) (.*);/i // TechniSAT
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i // HbbTV devices
            ],
            [
                [
                    VENDOR,
                    trim
                ],
                [
                    MODEL,
                    trim
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i // SmartTV from Unidentified Vendors
            ],
            [
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                ///////////////////
                // CONSOLES
                ///////////////////
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i // Nintendo
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /droid.+; (shield) bui/i // Nvidia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /(playstation [345portablevi]+)/i // Playstation
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                ///////////////////
                // WEARABLES
                ///////////////////
                /((pebble))app/i // Pebble
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i // Apple Watch
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (wt63?0{2,3})\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(quest( \d| pro)?)/i // Oculus Quest
            ],
            [
                MODEL,
                [
                    VENDOR,
                    FACEBOOK
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // EMBEDDED
                ///////////////////
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
            ],
            [
                VENDOR,
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                /(aeobc)\b/i // Echo Dot
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                ////////////////////
                // MIXED (GENERIC)
                ///////////////////
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
            ],
            [
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
            ],
            [
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(android[-\w\. ]{0,9});.+buil/i // Generic Android Device
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Generic"
                ]
            ]
        ],
        engine: [
            [
                /windows.+ edge\/([\w\.]+)/i // EdgeHTML
            ],
            [
                VERSION,
                [
                    NAME,
                    EDGE + "HTML"
                ]
            ],
            [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
            ],
            [
                VERSION,
                [
                    NAME,
                    "Blink"
                ]
            ],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
            ],
            [
                VERSION,
                NAME
            ]
        ],
        os: [
            [
                // Windows
                /microsoft (windows) (vista|xp)/i // Windows (iTunes)
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i // Windows Phone
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ],
                [
                    NAME,
                    "Windows"
                ]
            ],
            [
                // iOS/macOS
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i
            ],
            [
                [
                    VERSION,
                    /_/g,
                    "."
                ],
                [
                    NAME,
                    "iOS"
                ]
            ],
            [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
            ],
            [
                [
                    NAME,
                    MAC_OS
                ],
                [
                    VERSION,
                    /_/g,
                    "."
                ]
            ],
            [
                // Mobile OSes
                /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
            ],
            [
                VERSION,
                NAME
            ],
            [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i // Series 40
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\(bb(10);/i // BlackBerry 10
            ],
            [
                VERSION,
                [
                    NAME,
                    BLACKBERRY
                ]
            ],
            [
                /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i // Symbian
            ],
            [
                VERSION,
                [
                    NAME,
                    "Symbian"
                ]
            ],
            [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " OS"
                ]
            ],
            [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "webOS"
                ]
            ],
            [
                /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i // watchOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "watchOS"
                ]
            ],
            [
                // Google Chromecast
                /crkey\/([\d\.]+)/i // Google Chromecast
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + "cast"
                ]
            ],
            [
                /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i // Chromium OS
            ],
            [
                [
                    NAME,
                    CHROMIUM_OS
                ],
                VERSION
            ],
            [
                // Smart TVs
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                // Console
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                // Other
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i // Haiku
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(sunos) ?([\w\.\d]*)/i // Solaris
            ],
            [
                [
                    NAME,
                    "Solaris"
                ],
                VERSION
            ],
            [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i // UNIX
            ],
            [
                NAME,
                VERSION
            ]
        ]
    };
    /////////////////
    // Constructor
    ////////////////
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }
        if (!(this instanceof UAParser)) return new UAParser(ua, extensions).getResult();
        var _navigator = typeof window1 !== UNDEF_TYPE && window1.navigator ? window1.navigator : undefined;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) _browser[NAME] = "Brave";
            return _browser;
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) _device[TYPE] = MOBILE;
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = "iPad";
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform && _uach.platform != "Unknown") _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS); // backward compatibility
            return _os;
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function() {
            return _ua;
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([
        NAME,
        VERSION,
        MAJOR
    ]);
    UAParser.CPU = enumerize([
        ARCHITECTURE
    ]);
    UAParser.DEVICE = enumerize([
        MODEL,
        VENDOR,
        TYPE,
        CONSOLE,
        MOBILE,
        SMARTTV,
        TABLET,
        WEARABLE,
        EMBEDDED
    ]);
    UAParser.ENGINE = UAParser.OS = enumerize([
        NAME,
        VERSION
    ]);
    ///////////
    // Export
    //////////
    // check js environment
    if (typeof exports !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) exports = module.exports = UAParser;
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof define === FUNC_TYPE && define.amd) define(function() {
            return UAParser;
        });
        else if (typeof window1 !== UNDEF_TYPE) // browser env
        window1.UAParser = UAParser;
    }
    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window1 !== UNDEF_TYPE && (window1.jQuery || window1.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for(var prop in result)$.ua[prop] = result[prop];
        };
    }
})(typeof window === "object" ? window : this);

},{}],"ck1Q2":[function(require,module,exports) {
"use strict";
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) return deepmerge;
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
    );
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) return;
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
    else if (sourceIsArray) return options.arrayMerge(target, source, options);
    else return mergeObject(target, source, options);
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) throw new Error("first argument should be an array");
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

},{}],"jocGM":[function(require,module,exports) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = "";
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) classes = appendClass(classes, parseValue(arg));
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") return arg;
        if (typeof arg !== "object") return "";
        if (Array.isArray(arg)) return classNames.apply(null, arg);
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
        var classes = "";
        for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) return value;
        if (value) return value + " " + newClass;
        return value + newClass;
    }
    if (0, module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"fbbvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tonkeeper1234", ()=>tonkeeper1234);
var NETWORK;
(function(NETWORK) {
    NETWORK["MAINNET"] = "-239";
    NETWORK["TESTNET"] = "-3";
})(NETWORK || (NETWORK = {}));
const tonkeeper1234 = {
    provider: {
        callbacks: {
            chainChanged: [
                null
            ]
        },
        isTonkeeper: true,
        targetOrigin: "*",
        nextJsonRpcId: 3,
        promises: {},
        onMessage: (...args)=>console.log("onmessage", ...args)
    },
    tonconnect: {
        async connect (protocolVersion, message) {
            console.log("connect with ton_proof", protocolVersion, message);
            // TODO: [TON] connect, connect_error 需要调用 notify 来触发用户注册的 handler
            return {
                event: "connect",
                id: 1716908283733,
                payload: {
                    items: [
                        {
                            name: "ton_addr",
                            address: "0:f6ec31912994229d903edc42e23475be311599e14856620a2629307ee08be8c9",
                            network: "-239",
                            walletStateInit: "te6cckECFgEAAwQAAgE0AgEAUQAAAAApqaMXdgs06RoUlFDYAZyWDsCurtuEoQYYKXUSk5gwT4bK0fdAART/APSkE/S88sgLAwIBIAkEBPjygwjXGCDTH9Mf0x8C+CO78mTtRNDTH9Mf0//0BNFRQ7ryoVFRuvKiBfkBVBBk+RDyo/gAJKTIyx9SQMsfUjDL/1IQ9ADJ7VT4DwHTByHAAJ9sUZMg10qW0wfUAvsA6DDgIcAB4wAhwALjAAHAA5Ew4w0DpMjLHxLLH8v/CAcGBQAK9ADJ7VQAbIEBCNcY+gDTPzBSJIEBCPRZ8qeCEGRzdHJwdIAYyMsFywJQBc8WUAP6AhPLassfEss/yXP7AABwgQEI1xj6ANM/yFQgR4EBCPRR8qeCEG5vdGVwdIAYyMsFywJQBs8WUAT6AhTLahLLH8s/yXP7AAIAbtIH+gDU1CL5AAXIygcVy//J0Hd0gBjIywXLAiLPFlAF+gIUy2sSzMzJc/sAyEAUgQEI9FHypwICAUgTCgIBIAwLAFm9JCtvaiaECAoGuQ+gIYRw1AgIR6STfSmRDOaQPp/5g3gSgBt4EBSJhxWfMYQCASAODQARuMl+1E0NcLH4AgFYEg8CASAREAAZrx32omhAEGuQ64WPwAAZrc52omhAIGuQ64X/wAA9sp37UTQgQFA1yH0BDACyMoHy//J0AGBAQj0Cm+hMYALm0AHQ0wMhcbCSXwTgItdJwSCSXwTgAtMfIYIQcGx1Z70ighBkc3RyvbCSXwXgA/pAMCD6RAHIygfL/8nQ7UTQgQFA1yH0BDBcgQEI9ApvoTGzkl8H4AXTP8glghBwbHVnupI4MOMNA4IQZHN0crqSXwbjDRUUAIpQBIEBCPRZMO1E0IEBQNcgyAHPFvQAye1UAXKwjiOCEGRzdHKDHrFwgBhQBcsFUAPPFiP6AhPLassfyz/JgED7AJJfA+IAeAH6APQEMPgnbyIwUAqhIb7y4FCCEHBsdWeDHrFwgBhQBMsFJs8WWPoCGfQAy2kXyx9SYMs/IMmAQPsABntvxc8=",
                            publicKey: "760b34e91a149450d8019c960ec0aeaedb84a106182975129398304f86cad1f7"
                        },
                        // {
                        //   name: "ton_proof",
                        //   // @ts-ignore
                        //   error: {
                        //       code: 400,
                        //       message: "don't support ton_proof for now."
                        //   }
                        // }
                        {
                            name: "ton_proof",
                            proof: {
                                // @ts-ignore
                                timestamp: 1716908279,
                                domain: {
                                    lengthBytes: 11,
                                    value: "lucifer.ren"
                                },
                                signature: "r6AD3SdhXKCNhdSzJGNwbO2SBpyQ5P7s9Rl81undX+aLVgQNasKX+JtG7xFgPAsR3oizE0rw1JsDhNf8ipSyAQ==",
                                payload: "eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiZWFhYjEwMDI5MzMxOTA2NmNhNjZjMzRkOWM5YmJhMjJjMjFmMzNkOGRkNWJhNzNiZTY5ZTgxNzQyZTRjYzlmZCIsImlhdCI6MTcxNjkwNzk4NiwiZXhwIjoxNzE2OTA4ODg2fQ.PW_SkU7GTsatpPsy0FGYzI4M_3NlSubyoILidektWO4"
                            }
                        }
                    ],
                    device: {
                        platform: "mac",
                        appName: "Tonkeeper",
                        appVersion: "3.12.3",
                        maxProtocolVersion: 2,
                        features: [
                            // @ts-ignore
                            "SendTransaction",
                            {
                                name: "SendTransaction",
                                maxMessages: 4
                            }
                        ]
                    }
                }
            };
        },
        listen (...args) {
            // TODO: [TON] 添加到 set
            console.log("listen", ...args);
        },
        notify (...args) {
            console.log("notify", ...args);
        },
        restoreConnection (...args) {
            // TODO: [TON] connect 需要调用 notify 来触发用户注册的 handler
            console.log("restoreConnection", ...args);
        },
        async send (req) {
            console.log("send", req);
            // TODO: [TON]  disconnect 需要调用 notify 来触发用户注册的 handler
            // req.method: signData, sendTransaction, disconnect, [signMessage???]
            return {
                result: "mock singature",
                id: req.id
            };
        },
        provider: {
            callbacks: {
                chainChanged: [
                    null
                ]
            },
            isTonkeeper: true,
            targetOrigin: "*",
            nextJsonRpcId: 3,
            promises: {}
        },
        callbacks: [
            null
        ],
        deviceInfo: {
            platform: "mac",
            appName: "Tonkeeper",
            appVersion: "3.12.3",
            maxProtocolVersion: 2,
            features: [
                "SendTransaction",
                {
                    name: "SendTransaction",
                    maxMessages: 4
                }
            ]
        },
        walletInfo: {
            name: "tonkeeper1234",
            image: "https://tonkeeper.com/assets/tonconnect-icon.png",
            tondns: "tonkeeper.ton",
            about_url: "https://tonkeeper.com"
        },
        protocolVersion: 2,
        isWalletBrowser: false
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9IOHb","1jwFz"], "1jwFz", "parcelRequire94c2")

//# sourceMappingURL=index.8e9bd240.js.map
