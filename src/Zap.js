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

function Zap(props) {
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
        x1: 45.074,
        x2: 84.015,
        y1: 34.738,
        y2: 102.18,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m43.08 120.9 22.27-48.71c0.63-1.37-0.17-3.08-1.44-3.08l-42.26-0.19c-1.53-0.01-2.24-2.35-1.09-3.61l55.25-60.78c1.38-1.51 3.42 0.46 2.57 2.49l-16.71 40.26c-0.57 1.37 0.23 3 1.46 3.01l43.22 0.35c1.52 0.01 2.23 2.34 1.1 3.6l-61.81 69.21c-1.41 1.57-3.49-0.52-2.56-2.55z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73.07 12.01-14.17 34.12c-0.69 1.65-0.51 3.6 0.46 5.07 0.87 1.32 2.24 2.08 3.75 2.09l40.87 0.33-54.99 61.57 19.09-41.75c0.76-1.66 0.63-3.65-0.35-5.17-0.86-1.35-2.28-2.15-3.81-2.16l-39.88-0.18 49.03-53.92m3.83-8.01c-0.37 0-0.75 0.16-1.09 0.53l-55.25 60.78c-1.14 1.26-0.43 3.6 1.09 3.61l42.26 0.19c1.27 0.01 2.06 1.71 1.44 3.08l-22.27 48.71c-0.7 1.54 0.31 3.1 1.46 3.1 0.37 0 0.76-0.16 1.1-0.55l61.81-69.21c1.13-1.26 0.42-3.59-1.1-3.6l-43.22-0.35c-1.24-0.01-2.03-1.64-1.46-3.01l16.72-40.25c0.63-1.53-0.37-3.03-1.49-3.03z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Zap;
