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

function Sparkler(props) {
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
        id: "b",
        x1: 64,
        x2: 64,
        y1: -33,
        y2: 74.671,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0.3483
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0D47A1",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 65.978,
        cy: 66.775,
        r: 54.152,
        gradientTransform: "matrix(-1.0236 0 0 -1 130.86 128.37)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF59D",
        offset: 0.1884
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M14.6,113.3l35.99-35.41c0.68-0.69,0.14-1.84-0.84-1.79l-36.59,1.84l38.27-9L11.38,46.89 L51.87,61.6c0.93,0.32,1.77-0.64,1.32-1.49L30.12,18.65l28.68,37.8c0.61,0.77,1.87,0.39,1.94-0.59l2.34-50.64 c0.09-1.32,2.08-1.32,2.16,0l2.39,50.63c0.06,0.97,1.32,1.35,1.94,0.58L98,19L75.19,60.09c-0.45,0.85,0.4,1.8,1.32,1.49l22.01-7.53 c1.4-0.48,2.27,1.48,0.99,2.2L76.96,68.91l38.29,8.93l-36.59-1.77c-0.98-0.05-1.52,1.1-0.84,1.79l25.38,25.81L73.4,82.86 c-0.8-0.56-1.88,0.13-1.7,1.07l7.05,35.02c0,0.01-0.01,0.02-0.02,0.01L64.23,83.34c0-0.01-0.02-0.01-0.02,0l-9.47,23.37 c-0.57,1.42-2.7,0.78-2.4-0.72l4.4-22.05c0.19-0.94-0.9-1.62-1.7-1.06L14.6,113.3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.05 101.15c0.3-2.45 1.92-6.77 1.92-6.77s1.83 4.2 2.18 6.77c0.34 2.57-0.92 3.85-2.05 3.85s-2.35-1.4-2.05-3.85z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m46.64 96.29c1.56-1.94 5.25-4.79 5.25-4.79s-0.68 4.52-1.75 6.88c-1.08 2.36-2.84 2.82-3.8 2.24-0.97-0.57-1.26-2.39 0.3-4.33z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.53 82.9c2.33-0.96 6.97-1.7 6.97-1.7s-2.84 3.63-4.96 5.18c-2.12 1.56-3.88 1.12-4.44 0.15s0.1-2.68 2.43-3.63z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m30.03 63.97c2.48 0.48 6.76 2.39 6.76 2.39s-4.43 1.46-7.07 1.6c-2.65 0.14-3.86-1.19-3.77-2.29 0.08-1.1 1.6-2.17 4.08-1.7z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m39.11 46.44c1.81 1.72 4.33 5.6 4.33 5.6s-4.53-1.13-6.82-2.42-2.57-3.05-1.89-3.93c0.69-0.87 2.57-0.97 4.38 0.75z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m57 36.04c0.43 2.43 0.13 7.02 0.13 7.02s-2.98-3.52-4.06-5.88-0.24-3.95 0.84-4.26c1.09-0.31 2.66 0.69 3.09 3.12z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.95 37.14c-1.07 2.24-3.99 5.84-3.99 5.84s-0.4-4.55 0.1-7.09 2.1-3.38 3.18-3.03c1.07 0.34 1.78 2.04 0.71 4.28z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m93.29 50.07c-2.1 1.38-6.51 2.98-6.51 2.98s2.07-4.09 3.84-6.02 3.59-1.83 4.33-0.99 0.44 2.65-1.66 4.03z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m100.06 67.96c-2.53-0.07-7.07-1.26-7.07-1.26s4.12-2.16 6.7-2.73c2.59-0.56 4.01 0.55 4.11 1.65s-1.21 2.4-3.74 2.34z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m93.94 86.01c-2.11-1.36-5.32-4.73-5.32-4.73s4.66 0.29 7.16 1.15 3.11 2.54 2.59 3.52c-0.5 0.99-2.33 1.42-4.43 0.06z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.32 97.89c-0.88-2.31-1.45-6.88-1.45-6.88s3.59 2.92 5.1 5.05c1.5 2.13 0.98 3.84-0.02 4.34-1.02 0.5-2.75-0.2-3.63-2.51z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement("circle", {
      cx: 31,
      cy: 19.33,
      r: 8,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 10,
      cy: 46.33,
      r: 5,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 14,
      cy: 77.33,
      r: 5,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 16,
      cy: 112.33,
      r: 7,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 53,
      cy: 109.33,
      r: 5,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 79,
      cy: 118.33,
      r: 5,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 106.17,
      cy: 105.5,
      r: 8,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 116,
      cy: 78.33,
      r: 5,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 106.67,
      cy: 52.67,
      r: 7.67,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 97,
      cy: 21.33,
      r: 5,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Sparkler;