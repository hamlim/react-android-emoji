"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function Emoji0x2196(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4.25,
        y2: 124.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C4FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2DB5F9",
        offset: 0.3517
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m32.88 28.89c0.09 0 0.18 0 0.27 0.01l33.94 0.01c3.43 0.23 4.99 4.39 2.56 6.82l-9.89 9.89c-0.78 0.78-0.78 2.05 0 2.83l41.01 41.01c1.56 1.56 1.56 4.09 0 5.66l-5.66 5.66c-0.78 0.78-1.8 1.17-2.83 1.17-1.02 0-2.05-0.39-2.83-1.17l-41.01-41.02c-0.39-0.39-0.9-0.59-1.41-0.59s-1.02 0.2-1.41 0.59l-9.89 9.89c-0.81 0.81-1.82 1.18-2.8 1.18-1.97 0-3.86-1.46-4.02-3.74l-0.01-33.94c-0.16-2.32 1.69-4.26 3.98-4.26m0-3c-1.93 0-3.79 0.81-5.11 2.22-1.29 1.38-1.97 3.25-1.88 5.13l0.01 33.85v0.1l0.01 0.1c0.24 3.67 3.32 6.54 7.01 6.54 1.85 0 3.6-0.73 4.92-2.06l9.19-9.19 40.31 40.31c1.32 1.32 3.08 2.05 4.95 2.05s3.63-0.73 4.95-2.05l5.66-5.66c2.73-2.73 2.73-7.17 0-9.9l-40.31-40.3 9.19-9.19c1.97-1.97 2.58-4.81 1.6-7.41s-3.31-4.34-6.09-4.52l-0.1-0.01h-0.1-33.85c-0.12-0.01-0.24-0.01-0.36-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28.9 67.09v-33.94c-0.16-2.41 1.84-4.42 4.26-4.26l33.94 0.01c3.43 0.23 4.99 4.39 2.56 6.82l-9.89 9.89c-0.78 0.78-0.78 2.05 0 2.83l41.01 41.01c1.56 1.56 1.56 4.09 0 5.66l-5.66 5.66c-1.56 1.56-4.09 1.56-5.66 0l-41.02-41.01c-0.78-0.78-2.05-0.78-2.83 0l-9.89 9.89c-2.43 2.43-6.59 0.87-6.82-2.56z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Emoji0x2196;
