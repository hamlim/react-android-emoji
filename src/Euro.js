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

function Euro(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m119.53 108.05h-111.31c-2.4 0-4.35-1.95-4.35-4.35v-67.46c0-2.41 1.95-4.37 4.37-4.37h111.27c2.41 0 4.37 1.95 4.37 4.37v67.46c0 2.41-1.95 4.35-4.35 4.35z",
      fill: "#1565C0"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.875,
        x2: 63.875,
        y1: 95.962,
        y2: 31.723,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m119.65 95.88h-111.55c-2.33 0-4.22-1.89-4.22-4.22v-55.42c0-2.41 1.95-4.37 4.37-4.37h111.27c2.41 0 4.37 1.95 4.37 4.37v55.41c-0.01 2.34-1.9 4.23-4.24 4.23z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 84.65,
      cy: 63.88,
      r: 18.5,
      fill: "#1565C0",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m106.33 39.06c0.86 5.4 5.14 9.68 10.54 10.54v28.54c-5.4 0.86-9.68 5.14-10.54 10.54h-85.03c-1.1-5.11-5.26-9.05-10.42-9.87v-28.54c5.63-0.89 10.03-5.49 10.63-11.21h84.82m1.84-2h-88.61c0.01 0.22 0.02 0.44 0.02 0.67 0 5.91-4.79 10.7-10.7 10.7v32.23c5.68 0 10.33 4.43 10.68 10.03h88.61c0-5.91 4.79-10.7 10.7-10.7v-32.23c-5.91 0-10.7-4.79-10.7-10.7z",
      fill: "#1565C0"
    }),
    _react2.default.createElement("rect", {
      x: 52.87,
      y: 31.88,
      width: 22.01,
      height: 76.18,
      fill: "#FFECB3"
    }),
    _react2.default.createElement("rect", {
      x: 52.87,
      y: 95.88,
      width: 22.01,
      height: 12.18,
      fill: "#FFB74D",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m119.51 32.88c1.86 0 3.37 1.51 3.37 3.37v67.46c0 1.85-1.5 3.35-3.35 3.35h-111.31c-1.85 0-3.35-1.5-3.35-3.35v-67.47c0-1.86 1.51-3.37 3.37-3.37h111.27m0-0.99h-111.27c-2.41 0-4.37 1.95-4.37 4.37v67.46c0 2.4 1.95 4.35 4.35 4.35h111.3c2.4 0 4.35-1.95 4.35-4.35v-67.47c0.01-2.41-1.95-4.36-4.36-4.36z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m41.88 68.38h-7.99c-0.27 0-0.5 0.24-0.49 0.51 0.13 2.81 0.87 5 2.2 6.56 1.42 1.65 3.42 2.47 6.02 2.47 1.45 0 2.83-0.17 4.14-0.51 0.54-0.14 1.07 0.25 1.14 0.8l0.23 1.85c0.06 0.48-0.25 0.94-0.73 1.04-1.61 0.35-3.22 0.52-4.83 0.52-3.9 0-6.98-1.15-9.22-3.46-2.16-2.22-3.32-5.33-3.49-9.32-0.01-0.26-0.22-0.46-0.48-0.46h-3.17c-0.32 0-0.58-0.26-0.58-0.58v-1.78c0-0.32 0.26-0.58 0.58-0.58h3.15c0.27 0 0.48-0.22 0.48-0.48v-2.26c0-0.27-0.22-0.48-0.48-0.48h-3.15c-0.32 0-0.58-0.26-0.58-0.58v-1.8c0-0.32 0.26-0.58 0.58-0.58h3.17c0.25 0 0.46-0.2 0.47-0.46 0.23-3.9 1.42-6.94 3.58-9.12 2.24-2.26 5.28-3.39 9.1-3.39 1.44 0 3.06 0.18 4.84 0.54 0.48 0.1 0.8 0.56 0.74 1.04l-0.23 1.83c-0.07 0.57-0.62 0.97-1.17 0.82-1.38-0.35-2.76-0.53-4.14-0.53-2.58 0-4.57 0.8-5.96 2.4-1.31 1.51-2.05 3.62-2.21 6.34-0.02 0.28 0.21 0.52 0.49 0.52h7.96c0.32 0 0.58 0.26 0.58 0.58v1.8c0 0.32-0.26 0.58-0.58 0.58h-8.01c-0.27 0-0.48 0.22-0.48 0.48v2.27c0 0.27 0.22 0.48 0.48 0.48h8.01c0.32 0 0.58 0.26 0.58 0.58v1.78c0.02 0.32-0.23 0.58-0.55 0.58z",
      fill: "#fff"
    })
  );
}

exports.default = Euro;
