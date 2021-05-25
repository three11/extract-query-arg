(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.extractQueryArg = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  var extractQueryArg = function extractQueryArg(queryArg) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    queryArg = queryArg.replace(/[\[\]]/g, '\\$&');
    var matches = new RegExp("[?&]".concat(queryArg, "(=([^&#]*)|&|#|$)")).exec(url);

    if (!matches) {
      return null;
    }

    if (!matches[2]) {
      return '';
    }

    return decodeURIComponent(matches[2].replace(/\+/g, ' '));
  };

  var _default = extractQueryArg;
  _exports["default"] = _default;
});
