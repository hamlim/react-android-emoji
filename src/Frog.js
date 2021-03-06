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

function Frog(props) {
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
        id: "c",
        x1: 64.44,
        x2: 64.44,
        y1: 14.199,
        y2: 115.76,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CD18D",
        offset: 0.00096318
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6AAE74",
        offset: 0.5439
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3C8F5E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.44 115.71c-29.78 0-54.01-18.33-54.01-40.85 0-8.49 3.42-16.63 9.89-23.55 1.73-1.85 1.89-4.73 0.38-6.84-2.5-3.5-3.82-7.63-3.82-11.94 0-11.39 9.31-20.66 20.76-20.66s20.76 9.27 20.76 20.66v0.13c0 0.41 0.17 0.81 0.47 1.09 0.28 0.26 0.65 0.41 1.03 0.41h0.09c1.64-0.1 3.1-0.15 4.46-0.15 1.46 0 2.99 0.05 4.68 0.16h0.1c0.38 0 0.76-0.15 1.04-0.42 0.3-0.29 0.47-0.7 0.46-1.12v-0.11c0-11.39 9.31-20.66 20.76-20.66s20.76 9.27 20.76 20.66c0 4.36-1.35 8.52-3.9 12.05-1.53 2.11-1.38 4.99 0.34 6.85 6.39 6.89 9.77 14.99 9.77 23.42-0.01 22.54-24.24 40.87-54.02 40.87z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m91.47 13.36c10.62 0 19.26 8.6 19.26 19.16 0 4.04-1.25 7.9-3.61 11.17-1.95 2.69-1.75 6.37 0.46 8.75 6.13 6.61 9.37 14.35 9.37 22.4 0 21.7-23.55 39.35-52.51 39.35s-52.51-17.64-52.51-39.34c0-8.1 3.28-15.89 9.48-22.52 2.21-2.37 2.42-6.04 0.5-8.74-2.32-3.25-3.54-7.07-3.54-11.07 0-10.57 8.64-19.16 19.26-19.16 10.61 0 19.24 8.58 19.26 19.14v0.14c0 0.83 0.34 1.63 0.94 2.2 0.56 0.53 1.3 0.82 2.06 0.82 0.06 0 0.12 0 0.19-0.01 1.6-0.1 3.03-0.15 4.36-0.15 1.43 0 2.92 0.05 4.58 0.16 0.07 0 0.13 0.01 0.19 0.01 0.76 0 1.5-0.29 2.06-0.82 0.61-0.57 0.95-1.37 0.94-2.2v-0.12c0-10.57 8.64-19.17 19.26-19.17m0-3c-12.29 0-22.26 9.92-22.26 22.16v0.14c-1.57-0.1-3.16-0.17-4.77-0.17-1.53 0-3.05 0.06-4.55 0.15v-0.13c0-12.24-9.97-22.16-22.26-22.16s-22.26 9.92-22.26 22.16c0 4.77 1.52 9.19 4.1 12.81 1.08 1.52 1.02 3.59-0.25 4.95-6.47 6.94-10.29 15.42-10.29 24.58 0 23.39 24.85 42.35 55.51 42.35s55.51-18.96 55.51-42.35c0-9.1-3.77-17.54-10.17-24.44-1.27-1.37-1.32-3.44-0.23-4.96 2.63-3.64 4.18-8.1 4.18-12.93 0-12.23-9.97-22.16-22.26-22.16z",
      fill: "#388558"
    }),
    _react2.default.createElement("circle", {
      cx: 38.23,
      cy: 34.38,
      r: 13,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 38.23,
      cy: 34.38,
      r: 6.38,
      fill: "#404040"
    }),
    _react2.default.createElement("circle", {
      cx: 90.99,
      cy: 34.38,
      r: 13,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 90.99,
      cy: 34.38,
      r: 6.38,
      fill: "#404040"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 59.17,
        cy: 62.96,
        rx: 2.41,
        ry: 3.87
      }),
      _react2.default.createElement("ellipse", {
        cx: 69.57,
        cy: 62.96,
        rx: 2.41,
        ry: 3.87
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m72.99 103.55c16.14-2.89 26.81-13.42 29.32-25.28 0.46-2.16-1.69-4.03-4.1-3.63-9.81 1.63-21.57 2.58-34.22 2.58s-24.4-0.95-34.21-2.58c-2.43-0.4-4.58 1.51-4.09 3.68 3.26 14.28 18.96 26.01 38.28 26.01 3.17 0 6.18-0.27 9.02-0.78"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.99 77.22c-12.65 0-24.4-0.95-34.21-2.58-2.43-0.4-4.58 1.51-4.09 3.68 3.26 14.28 18.96 26.01 38.28 26.01 21.15 0 35.38-12.11 38.33-26.06 0.46-2.16-1.69-4.03-4.1-3.63-9.79 1.63-21.55 2.58-34.21 2.58z",
      clipPath: "url(#a)",
      fill: "#404040",
      stroke: "#404040",
      strokeMiterlimit: 10,
      strokeWidth: 1.297
    }),
    _react2.default.createElement("path", {
      d: "M107,74.33V64H21v10.33c13,6.94,27.8,10.8,43,10.8S94,81.27,107,74.33z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m63.99 77.22c-12.65 0-24.4-0.95-34.21-2.58-2.43-0.4-4.58 1.51-4.09 3.68 3.26 14.28 18.96 26.01 38.28 26.01 21.15 0 35.38-12.11 38.33-26.06 0.46-2.16-1.69-4.03-4.1-3.63-9.79 1.63-21.55 2.58-34.21 2.58z",
        fill: "none"
      })
    ),
    _react2.default.createElement("path", {
      d: "m21 66v10.39c13 6.94 27.8 10.8 43 10.8s30-3.86 43-10.8v-10.39h-86z",
      clipPath: "url(#a)",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 94.44c-9.48 0-17.76 4.63-22.17 11.5 5.73 2.8 13.55 4.53 22.17 4.53s16.43-1.73 22.17-4.53c-4.41-6.87-12.69-11.5-22.17-11.5z",
      clipPath: "url(#a)",
      fill: "#FF4F4F"
    })
  );
}

exports.default = Frog;
