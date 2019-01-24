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

function Chart(props) {
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
        stopColor: "#81C784",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6EBE71",
        offset: 0.4141
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAF50",
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
    _react2.default.createElement("polyline", {
      points:
        "14.15 110.88 26.1 96.12 38.12 104.5 46.02 88 58.02 80 70.1 100 80.1 72 91.85 90 105.94 64.08 113.85 23.92",
      fill: "none",
      stroke: "#EFEBE9",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("path", {
      d:
        "m40.85 39.39 10.33-22.23c0.29-0.63 0.92-1.03 1.62-1.03h5.12c0.8 0 1.32 0.84 0.95 1.55l-12.24 24.01c-0.35 0.68 0.15 1.49 0.92 1.49h6.93c0.66 0 1.2 0.54 1.2 1.2v2.29c0 0.66-0.54 1.2-1.2 1.2h-9.93c-0.58 0-1.04 0.47-1.04 1.04v4.12c0 0.58 0.47 1.04 1.04 1.04h9.93c0.66 0 1.2 0.54 1.2 1.2v2.25c0 0.66-0.54 1.2-1.2 1.2h-9.93c-0.58 0-1.04 0.47-1.04 1.04v9.72c0 0.74-0.6 1.34-1.34 1.34h-4.57c-0.74 0-1.34-0.6-1.34-1.34v-9.72c0-0.58-0.47-1.04-1.04-1.04h-9.72c-0.66 0-1.2-0.54-1.2-1.2v-2.25c0-0.66 0.54-1.2 1.2-1.2h9.71c0.58 0 1.04-0.47 1.04-1.04v-4.12c0-0.58-0.47-1.04-1.04-1.04h-9.71c-0.66 0-1.2-0.54-1.2-1.2v-2.29c0-0.66 0.54-1.2 1.2-1.2h7c0.77 0 1.26-0.81 0.92-1.49l-12.24-24.01c-0.36-0.71 0.15-1.55 0.95-1.55h5.24c0.69 0 1.32 0.4 1.62 1.03l10.33 22.23c0.29 0.65 1.22 0.65 1.53 0z",
      fill: "#EFEBE9"
    })
  );
}

exports.default = Chart;
