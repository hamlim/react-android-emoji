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

function MantelpieceClock(props) {
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
        "m26.38 119.78h-18.92c-1.66 0-3-1.34-3-3v-9.83c0-1.66 1.34-3 3-3h18.91c1.66 0 3 1.34 3 3v9.83c0.01 1.66-1.34 3-2.99 3z",
      fill: "#4E342E"
    }),
    _react2.default.createElement("path", {
      d:
        "m121.19 119.78h-18.91c-1.66 0-3-1.34-3-3v-9.83c0-1.66 1.34-3 3-3h18.91c1.66 0 3 1.34 3 3v9.83c0 1.66-1.34 3-3 3z",
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26.38 105.95c0.55 0 1 0.45 1 1v9.83c0 0.55-0.45 1-1 1h-18.92c-0.55 0-1-0.45-1-1v-9.83c0-0.55 0.45-1 1-1h18.92m0-2h-18.92c-1.66 0-3 1.34-3 3v9.83c0 1.66 1.34 3 3 3h18.91c1.66 0 3-1.34 3-3v-9.83c0.01-1.66-1.34-3-2.99-3z",
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
          "m121.19 105.95c0.55 0 1 0.45 1 1v9.83c0 0.55-0.45 1-1 1h-18.91c-0.55 0-1-0.45-1-1v-9.83c0-0.55 0.45-1 1-1h18.91m0-2h-18.91c-1.66 0-3 1.34-3 3v9.83c0 1.66 1.34 3 3 3h18.91c1.66 0 3-1.34 3-3v-9.83c0-1.66-1.34-3-3-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 76.351,
        x2: 33.392,
        y1: 119.42,
        y2: 24.25,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#5D4037",
        offset: 0.0425
      }),
      _react2.default.createElement("stop", {
        stopColor: "#795548",
        offset: 0.6899
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120 86c-4.39 0-7.95-3.82-7.95-8.53l-0.01-19.08c-0.02-4.35-0.47-8.71-1.55-12.91-5.47-21.21-24.85-37.1-46.49-37.1s-41.24 15.9-46.7 37.11c-1.08 4.2-1.53 8.55-1.55 12.91l0.36 18.91c0.06 4.78-3.54 8.7-8 8.7h-0.11c-2.21 0-4 1.92-4 4.29l0.25 19.73c0 2.37 1.79 4.29 4 4.29h112c2.21 0 4-1.92 4-4.29l-0.25-19.75c0-2.36-1.79-4.28-4-4.28z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.196,
        x2: 64.196,
        y1: 97.113,
        y2: 41.603,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF3E0",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64.2,
      cy: 57.7,
      r: 34,
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 62.75,
      y: 39.75,
      width: 2.55,
      height: 19.55,
      fill: "#3E2723"
    }),
    _react2.default.createElement("circle", {
      cx: 64.01,
      cy: 57.7,
      r: 3.4,
      fill: "#3E2723"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.2 25.7c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.35-32 32-32m0-2c-18.78 0-34 15.22-34 34s15.22 34 34 34 34-15.22 34-34-15.23-34-34-34z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.71 31.26h-1.26c-0.55 0-1-0.45-1-1v-3.01c0-0.55 0.45-1 1-1h1.26c0.55 0 1 0.45 1 1v3.01c0 0.55-0.45 1-1 1z",
      fill: "#4E342E"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.71 89.1h-1.26c-0.55 0-1-0.45-1-1v-3.01c0-0.55 0.45-1 1-1h1.26c0.55 0 1 0.45 1 1v3.01c0 0.55-0.45 1-1 1z",
      fill: "#4E342E"
    }),
    _react2.default.createElement("path", {
      d:
        "m90.49 58.3v-1.26c0-0.55 0.45-1 1-1h3.01c0.55 0 1 0.45 1 1v1.26c0 0.55-0.45 1-1 1h-3.01c-0.55 0-1-0.44-1-1z",
      fill: "#4E342E"
    }),
    _react2.default.createElement("path", {
      d:
        "m32.65 58.3v-1.26c0-0.55 0.45-1 1-1h3.01c0.55 0 1 0.45 1 1v1.26c0 0.55-0.45 1-1 1h-3.01c-0.55 0-1-0.44-1-1z",
      fill: "#4E342E"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.63 42.09c-1.32 2.21-2.58-0.39-2.58-0.39s-1.48 2.75-2.58 0.23c-1.19-2.74 2.58-7.43 2.58-7.43s3.89 5.39 2.58 7.59z",
      fill: "#3E2723"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-2.8105e-10 1 -1 -2.8105e-10 132.66 -16.659)",
      x: 73.39,
      y: 50.44,
      width: 2.55,
      height: 15.12,
      fill: "#3E2723"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.48 60.6c-2.21-1.32 0.39-2.58 0.39-2.58s-2.75-1.48-0.23-2.58c2.74-1.19 7.43 2.58 7.43 2.58s-5.39 3.9-7.59 2.58z",
      fill: "#3E2723"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 11.22c20.05 0 38.38 14.68 43.58 34.91 0.94 3.66 1.43 7.77 1.46 12.18l0.01 19.1c0 6.36 4.92 11.54 10.95 11.54 0.54 0 1 0.59 1 1.33l0.25 19.72c0 0.7-0.46 1.3-1 1.3h-112c-0.54 0-1-0.59-1-1.33l-0.25-19.72c0-0.7 0.46-1.3 1-1.3h0.11c2.86 0 5.57-1.15 7.62-3.23 2.19-2.22 3.42-5.32 3.38-8.53l-0.36-18.9c0.03-4.42 0.52-8.51 1.46-12.16 2.49-9.7 8.26-18.56 16.25-24.95 8.02-6.42 17.8-9.96 27.54-9.96m0-3c-21.64 0-41.24 15.92-46.7 37.16-1.08 4.2-1.53 8.57-1.55 12.93l0.36 18.93c0.06 4.79-3.54 8.71-8 8.71h-0.11c-2.21 0-4 1.92-4 4.3l0.25 19.76c0 2.37 1.79 4.3 4 4.3h112c2.21 0 4-1.92 4-4.3l-0.25-19.76c0-2.37-1.79-4.3-4-4.3-4.39 0-7.95-3.82-7.95-8.54l-0.01-19.1c-0.02-4.36-0.47-8.72-1.55-12.93-5.47-21.24-24.85-37.16-46.49-37.16z",
        fill: "#424242"
      })
    )
  );
}

exports.default = MantelpieceClock;
