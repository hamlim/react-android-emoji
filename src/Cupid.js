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

function Cupid(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("line", {
      x1: 75.2,
      x2: 19.2,
      y1: 74.62,
      y2: 17.95,
      fill: "none",
      stroke: "#F57C00",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.846,
        cy: 26.515,
        r: 58.943,
        gradientTransform: "matrix(1 0 0 .964 0 4.3055)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M90.76,28.88c-14.47-5.1-26.26,9.74-26.26,9.74s-11.28-14.17-26-9.77 c-23.06,6.89-21.24,34.42-9.88,48.57C39.46,90.96,61,104.7,64,106.08v0.09c0,0.01,0.26,0.02,0.26,0.02s0.13-0.02,0.16-0.04 c0.03,0.02-0.2,0.04-0.2,0.04S64,106.18,64,106.17v-0.09c4-1.38,24.95-16.19,35.81-29.72C111.16,62.2,113.19,36.79,90.76,28.88z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.59 30.81c1.74 0 3.48 0.3 5.17 0.9 7.48 2.64 12.47 7.67 14.43 14.54 2.51 8.79-0.17 20.14-6.65 28.23-9.4 11.71-27.94 24.4-33.44 28.04-7.94-5.04-24.45-16.2-33.09-26.97-6.63-8.27-9.23-20.53-6.33-29.83 2.16-6.93 7.24-11.77 14.67-13.99 1.6-0.48 3.24-0.72 4.87-0.72 10.19 0 17.86 9.59 17.93 9.68 0.57 0.71 1.43 1.32 2.34 1.32s1.77-0.61 2.34-1.32c0.09-0.1 7.87-9.88 17.76-9.88m0-3c-11.51 0-20.09 10.81-20.09 10.81s-8.46-10.62-20.28-10.62c-1.84 0-3.75 0.26-5.73 0.85-23.06 6.89-21.24 34.42-9.89 48.57 10.86 13.54 33.4 27.28 35.4 28.66v0.09-0.09c2-1.38 24.95-16.19 35.81-29.72 11.35-14.15 13.35-39.56-9.09-47.48-2.12-0.75-4.15-1.07-6.13-1.07zm-20.14 78.34c-0.02 0.01-0.07 0.03-0.1 0.03 0.05-0.01 0.12-0.02 0.1-0.03zm-0.32 0.02c0 0.01 0.17 0.02 0.17 0.02h0.01c-0.05-0.01-0.18-0.01-0.18-0.02zm0.22 0.01c-0.02 0-0.04 0-0.05 0.01h0.01s0.02-0.01 0.04-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 11.362,
        cy: 114.87,
        r: 30.288,
        gradientTransform: "matrix(4.4897e-11 1 -1 4.4897e-11 128.2 -.7125)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.1709
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0.9448
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m10.9 37.16-6.08-27.95c-0.66-3.05 2.06-5.75 5.1-5.08l27.74 6.09c4.09 0.9 4.6 6.58 0.71 8.12-4.2 1.67-8.4 4.02-11.7 7.32-3.42 3.42-5.87 7.81-7.62 12.16-1.58 3.92-7.25 3.47-8.15-0.66z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m8.98 6.02c0.17 0 0.34 0.02 0.5 0.06l27.74 6.09c1.22 0.27 1.72 1.24 1.79 2.06 0.03 0.39 0.02 1.69-1.38 2.25-5.08 2.02-9.24 4.63-12.37 7.76-3.22 3.22-5.94 7.54-8.06 12.83-0.53 1.31-1.66 1.45-2.12 1.45-0.85 0-1.93-0.47-2.22-1.79l-6.08-27.95c-0.2-0.92 0.19-1.59 0.45-1.9 0.43-0.54 1.07-0.86 1.75-0.86m0-2c-2.64 0-4.75 2.46-4.16 5.18l6.08 27.95c0.48 2.21 2.32 3.36 4.18 3.36 1.61 0 3.24-0.88 3.97-2.7 1.75-4.35 4.2-8.74 7.62-12.16 3.3-3.3 7.5-5.65 11.7-7.32 3.89-1.55 3.37-7.22-0.71-8.12l-27.74-6.08c-0.32-0.07-0.63-0.11-0.94-0.11z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 120.79,
        x2: 83.457,
        y1: 109.24,
        y2: 101.24,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0.0552
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.8291
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.54 122.95c5.59-1.88 0-15.67 0-15.67s12.79 3.73 15-1.67c3.45-8.46-7.49-14.6-15.56-16.81-7.72-2.11-18.49-1.32-19.56-1.25l-0.03-0.03-0.06 0.05s-0.02 0.04-0.02 0.05c-0.02 0 0.03-0.06 0.03-0.06s0.05-0.05 0.06-0.04l0.03 0.03c-0.26 1.26-0.56 12.31 1.55 20.03 2.2 8.08 9.89 18.3 18.56 15.37z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m94.41 89.36c3.64 0 8.86 0.24 13.04 1.38 5.54 1.52 12.05 4.9 14.09 9.03 0.82 1.66 0.87 3.33 0.15 5.09-0.6 1.46-3.26 1.68-4.79 1.68-3.7 0-7.76-1.17-7.8-1.18-0.18-0.05-0.37-0.08-0.56-0.08-0.56 0-1.1 0.23-1.48 0.66-0.51 0.57-0.66 1.38-0.37 2.09 1.38 3.41 3.13 9.75 1.97 12.29-0.23 0.5-0.51 0.65-0.75 0.74-0.8 0.27-1.61 0.41-2.42 0.41-5.95 0-11.68-7.48-13.58-14.4-1.67-6.1-1.75-14.23-1.62-17.6 1.03-0.06 2.46-0.11 4.12-0.11m0-2c-3.16 0-5.52 0.17-5.99 0.2l-0.03-0.03 0.03 0.03c-0.26 1.26-0.56 12.31 1.55 20.03 1.94 7.11 8.14 15.88 15.51 15.88 1 0 2.02-0.16 3.06-0.51 5.59-1.88 0-15.67 0-15.67s4.31 1.26 8.36 1.26c2.93 0 5.72-0.66 6.64-2.92 3.45-8.46-7.49-14.6-15.56-16.81-4.32-1.19-9.58-1.46-13.57-1.46zm-6.02 0.17c-0.01 0-0.05 0.04-0.05 0.04s0 0 0 0c0-0.01 0.04-0.04 0.05-0.04zm-0.06 0.04s-0.01 0.01 0 0c-0.01 0-0.01 0.01-0.01 0.02 0-0.01 0.01-0.02 0.01-0.02zm-0.01 0.02c-0.01 0.02-0.02 0.04-0.01 0.04-0.01-0.01 0-0.03 0.01-0.04z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m66.67 70 4.26-4.23 47.29 47.61c1.17 1.18 1.16 3.08-0.01 4.24-1.18 1.17-3.07 1.16-4.24-0.01l-47.3-47.61z",
      fill: "#FFC107"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.52 64.19c0 0.24-0.03 0.48-0.1 0.72-0.4 1.45-1.89 2.3-3.34 1.9-0.17-0.04-4.63-1.16-7.31 1.85-3.04 3.42-2.96 7.26-2.95 7.42 0.05 1.53-1.12 2.75-2.61 2.81s-2.75-1.08-2.82-2.57c-0.02-0.25-0.24-6.14 4.32-11.27 4.94-5.56 12.49-3.57 12.81-3.48 1.21 0.33 2 1.43 2 2.62z",
      fill: "#B71C1C"
    })
  );
}

exports.default = Cupid;