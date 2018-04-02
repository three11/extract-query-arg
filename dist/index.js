"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractQueryArg = void 0;

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

exports.extractQueryArg = extractQueryArg;