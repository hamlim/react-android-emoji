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

function Emoji0x2197(props) {
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
          "m95.12 28.89c2.29 0 4.14 1.94 3.99 4.27l-0.01 33.93c-0.15 2.28-2.05 3.74-4.02 3.74-0.99 0-1.99-0.37-2.8-1.18l-9.89-9.89c-0.39-0.39-0.9-0.59-1.41-0.59s-1.02 0.2-1.41 0.59l-41.01 41.01c-0.78 0.78-1.8 1.17-2.83 1.17-1.02 0-2.05-0.39-2.83-1.17l-5.66-5.66c-1.56-1.56-1.56-4.09 0-5.66l41.01-41.01c0.78-0.78 0.78-2.05 0-2.83l-9.89-9.89c-2.43-2.43-0.87-6.59 2.56-6.82l33.94-0.01h0.26m0-3c-0.12 0-0.24 0-0.36 0.01h-33.85-0.1l-0.1 0.01c-2.78 0.19-5.11 1.92-6.09 4.52s-0.36 5.44 1.6 7.41l9.19 9.19-40.3 40.3c-2.73 2.73-2.73 7.17 0 9.9l5.66 5.66c1.32 1.32 3.08 2.05 4.95 2.05s3.63-0.73 4.95-2.05l40.31-40.31 9.19 9.19c1.33 1.33 3.07 2.06 4.92 2.06 3.69 0 6.77-2.87 7.01-6.54l0.01-0.1v-0.1l0.01-33.85c0.09-1.89-0.59-3.75-1.88-5.13-1.33-1.41-3.2-2.22-5.12-2.22z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.1 67.09 0.01-33.94c0.16-2.41-1.84-4.42-4.26-4.26l-33.94 0.01c-3.43 0.23-4.99 4.39-2.56 6.82l9.89 9.89c0.78 0.78 0.78 2.05 0 2.83l-41.01 41.02c-1.56 1.56-1.56 4.09 0 5.66l5.66 5.66c1.56 1.56 4.09 1.56 5.66 0l41.01-41.01c0.78-0.78 2.05-0.78 2.83 0l9.89 9.89c2.43 2.42 6.59 0.86 6.82-2.57z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Emoji0x2197;
