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

function Star(props) {
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
      "radialGradient",
      {
        id: "a",
        cx: 59.936,
        cy: 61.234,
        r: 55.952,
        fx: 27.216,
        fy: 60.094,
        gradientTransform: "matrix(1 0 0 1.0528 0 -6.5434)",
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
        "m67.53 6.66 12.36 37.48c0.46 1.39 1.69 2.34 3.09 2.37l37.64 0.81c3.17 0.07 4.48 4.31 1.95 6.32l-30 23.98c-1.11 0.89-1.58 2.41-1.18 3.82l10.9 37.99c0.92 3.2-2.51 5.82-5.11 3.91l-30.89-22.66c-1.15-0.84-2.67-0.84-3.82 0l-30.89 22.66c-2.6 1.91-6.03-0.71-5.11-3.91l10.9-37.99c0.4-1.41-0.07-2.93-1.18-3.82l-30.01-23.98c-2.52-2.02-1.21-6.26 1.95-6.32l37.64-0.81c1.4-0.03 2.63-0.97 3.09-2.37l12.36-37.48c1.04-3.15 5.27-3.15 6.31 0z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.38 9.86 11.72 35.54c0.99 2.99 3.72 5.05 6.8 5.11l36.22 0.78-29.05 23.21c-2.39 1.91-3.38 5.07-2.53 8.05l10.46 36.43-29.35-21.53c-1.25-0.92-2.73-1.41-4.28-1.41-1.54 0-3.02 0.49-4.28 1.41l-29.35 21.53 10.46-36.44c0.85-2.98-0.14-6.14-2.53-8.05l-29.03-23.21 36.22-0.78c3.08-0.07 5.82-2.12 6.8-5.11l11.72-35.53m0-5.56c-1.32 0-2.64 0.79-3.16 2.37l-12.36 37.47c-0.46 1.39-1.69 2.34-3.09 2.37l-37.64 0.8c-3.17 0.07-4.48 4.31-1.95 6.32l30.01 23.98c1.11 0.89 1.58 2.41 1.18 3.82l-10.9 37.99c-0.7 2.45 1.14 4.55 3.21 4.55 0.64 0 1.29-0.2 1.9-0.65l30.89-22.66c0.57-0.42 1.24-0.63 1.91-0.63s1.34 0.21 1.91 0.63l30.89 22.66c0.61 0.45 1.27 0.65 1.9 0.65 2.07 0 3.91-2.11 3.21-4.55l-10.9-37.99c-0.4-1.41 0.07-2.93 1.18-3.82l30.01-23.98c2.52-2.02 1.21-6.26-1.95-6.32l-37.64-0.81c-1.4-0.03-2.63-0.97-3.09-2.37l-12.37-37.47c-0.52-1.57-1.84-2.36-3.15-2.36z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Star;
