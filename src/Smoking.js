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

function Smoking(props) {
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
        id: "e",
        x1: 106.6,
        x2: 106.6,
        y1: 6.5,
        y2: 75.447,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m119.45 65.73c1.24 0.74 0.18 2.71-1.17 2.18-7.22-2.84-18.42-12.89-16.28-30.15 2.12-17.07 2.79-25.5-8.39-31.97-0.73-0.42-0.39-1.54 0.45-1.45 7.82 0.79 26.2 5.55 22.21 26.26-3.25 16.88-4.81 30.36 3.18 35.13z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 90.539,
        x2: 90.539,
        y1: 6.5,
        y2: 67.051,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.64 54.69c1.01 0.63 0.11 2.23-0.99 1.77-5.88-2.43-14.92-10.83-12.91-24.95 1.98-13.96 2.65-20.86-6.42-26.32-0.59-0.36-0.29-1.27 0.39-1.19 6.4 0.76 21.4 4.92 17.83 21.85-2.91 13.79-4.38 24.82 2.1 28.84z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 76,
        x2: 76,
        y1: 69.468,
        y2: 94.966,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E9E9E9",
        offset: 0.2665
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DADADA",
        offset: 0.5944
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C1C1C1",
        offset: 0.9532
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "48 72 40 72 40 92 48 92 112 92 112 72",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 117.68,
        x2: 117.68,
        y1: 71.875,
        y2: 92.899,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF6E40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6A3A",
        offset: 0.224
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5D2A",
        offset: 0.519
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF480E",
        offset: 0.8523
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF3D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.95 92h-10.59v-20h10.59c1.13 0 2.05 0.92 2.05 2.05v15.89c0 1.14-0.92 2.06-2.05 2.06z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 22,
        x2: 22,
        y1: 72.5,
        y2: 90.677,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m8 72c-2.21 0-4 4.48-4 10s1.79 10 4 10h32v-20h-32z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 37,
      y: 72,
      width: 3,
      height: 20,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      x: 40,
      y: 72,
      width: 8,
      height: 20,
      fill: "#eee",
      opacity: 0.8
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFCA28"
      },
      _react2.default.createElement("path", {
        d:
          "m9.5 72.84-0.8 0.86c-0.19 0.21-0.06 0.56 0.22 0.56h1.6c0.27 0 0.41-0.35 0.22-0.56l-0.8-0.86c-0.13-0.13-0.32-0.13-0.44 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m15.77 87.96 1.3-1.14c0.31-0.28 0.16-0.82-0.24-0.86l-2.36-0.25c-0.4-0.04-0.65 0.46-0.4 0.8l1.07 1.39c0.15 0.2 0.44 0.23 0.63 0.06z"
      }),
      _react2.default.createElement("path", {
        d:
          "m10.45 90.05-0.88 0.97c-0.21 0.23-0.06 0.63 0.25 0.62l1.78-0.02c0.3 0 0.45-0.4 0.23-0.63l-0.9-0.94c-0.13-0.15-0.35-0.15-0.48 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m16.17 77.08-0.8 0.86c-0.19 0.21-0.06 0.56 0.22 0.56h1.6c0.27 0 0.41-0.35 0.22-0.56l-0.8-0.86c-0.12-0.12-0.32-0.12-0.44 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m6.82 78.79 0.8 1.94c0.19 0.47 0.82 0.45 0.99-0.03l1.01-2.8c0.17-0.48-0.28-0.94-0.72-0.73l-1.81 0.86c-0.27 0.13-0.39 0.47-0.27 0.76z"
      }),
      _react2.default.createElement("path", {
        d:
          "m8.75 85.55 0.31 0.74c0.07 0.18 0.31 0.17 0.38-0.01l0.39-1.08c0.07-0.18-0.11-0.36-0.28-0.28l-0.69 0.33c-0.11 0.06-0.16 0.19-0.11 0.3z"
      }),
      _react2.default.createElement("path", {
        d:
          "m11.68 79.15-0.62 0.21c-0.15 0.05-0.17 0.27-0.03 0.35l0.82 0.45c0.14 0.08 0.3-0.06 0.25-0.22l-0.2-0.66c-0.03-0.1-0.13-0.16-0.22-0.13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m21.25 74.74-0.8 0.86c-0.19 0.21-0.06 0.56 0.22 0.56h1.6c0.27 0 0.41-0.35 0.22-0.56l-0.8-0.86c-0.12-0.13-0.32-0.13-0.44 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.79 87.95-1.67-0.14c-0.4-0.03-0.65 0.47-0.38 0.8l1.54 1.94c0.26 0.33 0.77 0.16 0.8-0.28l0.13-1.8c0.01-0.27-0.17-0.5-0.42-0.52z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.93 78.99-0.8 0.86c-0.19 0.21-0.06 0.56 0.22 0.56h1.6c0.27 0 0.41-0.35 0.22-0.56l-0.8-0.86c-0.12-0.13-0.32-0.13-0.44 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m33.06 75.48 0.69 0.96c0.17 0.23 0.51 0.13 0.55-0.16l0.2-1.7c0.03-0.29-0.28-0.48-0.49-0.3l-0.89 0.74c-0.14 0.11-0.16 0.32-0.06 0.46z"
      }),
      _react2.default.createElement("path", {
        d:
          "m35.36 77.29-1.28 0.65c-0.31 0.16-0.29 0.64 0.03 0.76l1.89 0.73c0.32 0.12 0.62-0.23 0.48-0.57l-0.61-1.38c-0.09-0.2-0.32-0.29-0.51-0.19z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.23 84.12-0.8 0.86c-0.19 0.21-0.06 0.56 0.22 0.56h1.6c0.27 0 0.41-0.35 0.22-0.56l-0.8-0.86c-0.12-0.13-0.32-0.13-0.44 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m23.97 73.75 0.25 1.61c0.06 0.39 0.53 0.51 0.74 0.19l1.26-1.88c0.21-0.32-0.04-0.76-0.4-0.7l-1.5 0.26c-0.24 0.05-0.39 0.28-0.35 0.52z"
      }),
      _react2.default.createElement("path", {
        d:
          "m18.58 80.7 0.8 1.94c0.19 0.47 0.82 0.45 0.99-0.03l1.01-2.8c0.17-0.48-0.28-0.94-0.72-0.73l-1.81 0.86c-0.27 0.13-0.39 0.47-0.27 0.76z"
      }),
      _react2.default.createElement("path", {
        d:
          "m20.51 87.45 0.31 0.74c0.07 0.18 0.31 0.17 0.38-0.01l0.39-1.08c0.07-0.18-0.11-0.36-0.28-0.28l-0.69 0.33c-0.11 0.06-0.16 0.19-0.11 0.3z"
      }),
      _react2.default.createElement("path", {
        d:
          "m23.44 81.06-0.62 0.21c-0.15 0.05-0.17 0.27-0.03 0.35l0.82 0.45c0.14 0.08 0.3-0.06 0.25-0.22l-0.2-0.66c-0.03-0.11-0.13-0.17-0.22-0.13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.62 76.19-0.08 0.6c-0.02 0.15 0.13 0.24 0.24 0.16l0.64-0.51c0.11-0.09 0.07-0.27-0.07-0.29l-0.56-0.09c-0.08-0.02-0.16 0.04-0.17 0.13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m32.06 72.36-0.49 0.3c-0.12 0.07-0.09 0.26 0.04 0.3l0.77 0.22c0.13 0.04 0.24-0.12 0.17-0.24l-0.28-0.52c-0.04-0.08-0.14-0.11-0.21-0.06z"
      }),
      _react2.default.createElement("path", {
        d:
          "m32.74 80.12-0.91 0.29c-0.22 0.07-0.25 0.39-0.05 0.51l1.18 0.69c0.2 0.12 0.44-0.08 0.37-0.32l-0.27-0.98c-0.04-0.15-0.18-0.24-0.32-0.19z"
      }),
      _react2.default.createElement("path", {
        d:
          "m35.23 84.08 0.86 0.79c0.21 0.19 0.53 0.02 0.5-0.28l-0.13-1.71c-0.02-0.29-0.36-0.41-0.54-0.19l-0.73 0.92c-0.1 0.14-0.09 0.35 0.04 0.47z"
      }),
      _react2.default.createElement("path", {
        d:
          "m25.7 83.94 0.48 0.44c0.12 0.11 0.29 0.01 0.28-0.15l-0.07-0.95c-0.01-0.16-0.2-0.23-0.3-0.1l-0.41 0.51c-0.06 0.07-0.05 0.18 0.02 0.25z"
      }),
      _react2.default.createElement("path", {
        d:
          "m5.81 83.71-0.94 0.23c-0.22 0.06-0.27 0.38-0.08 0.51l1.15 0.78c0.2 0.13 0.45-0.06 0.39-0.3l-0.21-1.01c-0.03-0.15-0.17-0.24-0.31-0.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m15.93 81.88-0.62 0.21c-0.15 0.05-0.17 0.27-0.03 0.35l0.82 0.45c0.14 0.08 0.3-0.06 0.25-0.22l-0.2-0.67c-0.03-0.1-0.12-0.15-0.22-0.12z"
      }),
      _react2.default.createElement("path", {
        d:
          "m35.7 87.64-1.51 0.51c-0.36 0.12-0.41 0.66-0.07 0.85l1.98 1.11c0.34 0.19 0.72-0.16 0.61-0.55l-0.48-1.62c-0.06-0.24-0.3-0.38-0.53-0.3z"
      }),
      _react2.default.createElement("path", {
        d:
          "m15.64 73.67-0.99 0.33c-0.24 0.08-0.27 0.43-0.04 0.56l1.3 0.73c0.22 0.12 0.47-0.1 0.4-0.36l-0.31-1.06c-0.05-0.16-0.21-0.25-0.36-0.2z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#E64A19"
      },
      _react2.default.createElement("path", {
        d:
          "m117.35 72.67-0.86 0.86c-0.21 0.21-0.06 0.56 0.23 0.56h1.71c0.29 0 0.44-0.35 0.23-0.56l-0.86-0.86c-0.12-0.13-0.32-0.13-0.45 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m120.91 87.87 1.39-1.14c0.34-0.28 0.17-0.82-0.26-0.86l-2.54-0.25c-0.43-0.04-0.7 0.46-0.43 0.8l1.14 1.39c0.19 0.2 0.49 0.23 0.7 0.06z"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.37 89.88-0.94 0.97c-0.23 0.23-0.06 0.63 0.27 0.62l1.91-0.02c0.33 0 0.48-0.4 0.25-0.63l-0.97-0.94c-0.15-0.15-0.38-0.14-0.52 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m120.01 76.08-0.86 0.86c-0.21 0.21-0.06 0.56 0.23 0.56h1.71c0.29 0 0.44-0.35 0.23-0.56l-0.86-0.86c-0.11-0.12-0.32-0.12-0.45 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m114.48 78.63 0.86 1.94c0.21 0.47 0.88 0.45 1.06-0.03l1.08-2.8c0.18-0.48-0.3-0.94-0.77-0.73l-1.94 0.86c-0.29 0.13-0.42 0.47-0.29 0.76z"
      }),
      _react2.default.createElement("path", {
        d:
          "m116.55 85.38 0.33 0.75c0.08 0.18 0.34 0.17 0.41-0.01l0.41-1.08c0.07-0.18-0.12-0.36-0.3-0.28l-0.75 0.33c-0.1 0.05-0.15 0.18-0.1 0.29z"
      }),
      _react2.default.createElement("path", {
        d:
          "m119.69 78.99-0.66 0.21c-0.16 0.05-0.18 0.27-0.03 0.35l0.88 0.45c0.15 0.08 0.32-0.06 0.27-0.22l-0.21-0.66c-0.05-0.11-0.15-0.16-0.25-0.13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m113.4 83.55-1.01 0.23c-0.24 0.06-0.3 0.38-0.09 0.51l1.24 0.78c0.21 0.13 0.48-0.06 0.42-0.3l-0.23-1.01c-0.03-0.15-0.18-0.25-0.33-0.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.09 81.88-0.66 0.21c-0.16 0.05-0.18 0.27-0.03 0.35l0.88 0.45c0.15 0.08 0.32-0.06 0.27-0.22l-0.23-0.67c-0.03-0.1-0.13-0.15-0.23-0.12z"
      }),
      _react2.default.createElement("path", {
        d:
          "m113.5 75.58-0.66 0.21c-0.16 0.05-0.18 0.27-0.03 0.35l0.88 0.45c0.15 0.08 0.32-0.06 0.27-0.22l-0.21-0.66c-0.04-0.1-0.15-0.16-0.25-0.13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m122.02 73.75-1.06 0.34c-0.26 0.08-0.29 0.43-0.05 0.56l1.4 0.73c0.24 0.12 0.51-0.1 0.43-0.36l-0.34-1.06c-0.05-0.17-0.22-0.26-0.38-0.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m121.85 82.17-1.06 0.34c-0.26 0.08-0.29 0.43-0.05 0.56l1.4 0.73c0.24 0.12 0.51-0.1 0.43-0.36l-0.34-1.06c-0.05-0.17-0.22-0.26-0.38-0.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m114.94 88.25-1.06 0.34c-0.26 0.08-0.29 0.43-0.05 0.56l1.4 0.73c0.24 0.12 0.51-0.1 0.43-0.36l-0.34-1.06c-0.05-0.17-0.22-0.26-0.38-0.21z"
      })
    ),
    _react2.default.createElement("rect", {
      x: 54.06,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 59.31,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 64.56,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 69.81,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 75.06,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 80.31,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 85.56,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 90.81,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 96.06,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 101.31,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement("rect", {
      x: 106.56,
      y: 72,
      width: 1,
      height: 20,
      fill: "#E0E0E0",
      opacity: 0.1
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 75v14h-112.51c-0.59-0.79-1.49-3.32-1.49-7s0.9-6.21 1.49-7h112.51m0.95-3h-113.95c-2.21 0-4 4.48-4 10s1.79 10 4 10h113.95c1.13 0 2.05-0.92 2.05-2.05v-15.9c0-1.13-0.92-2.05-2.05-2.05z",
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
          "m102.41 9.41c3.08 1.22 6.28 3.13 8.49 6.1 2.75 3.7 3.57 8.58 2.42 14.52-2.18 11.33-3.84 22.1-1.65 29.72-4.32-4.5-7.94-11.61-6.7-21.62 1.55-12.41 2.7-21.64-2.56-28.72m-8.44-5.08c-0.77 0-1.06 1.05-0.36 1.46 11.18 6.47 10.52 14.9 8.39 31.97-2.14 17.26 9.06 27.31 16.28 30.15 0.16 0.06 0.31 0.09 0.45 0.09 1.11 0 1.81-1.62 0.71-2.27-7.99-4.77-6.43-18.25-3.18-35.13 3.99-20.72-14.39-25.47-22.21-26.26-0.02-0.01-0.05-0.01-0.08-0.01z",
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
          "m88.85 9.52c1.9 0.99 3.73 2.35 5.06 4.2 2.11 2.94 2.68 6.81 1.69 11.51-1.75 8.32-3.15 16.28-2.21 22.45-2.72-3.65-4.66-8.86-3.68-15.74 1.3-9.15 2.35-16.53-0.86-22.42m-8.23-5.52c-0.62 0-0.87 0.85-0.3 1.19 9.07 5.46 8.41 12.36 6.42 26.32-2 14.11 7.03 22.51 12.91 24.95 0.13 0.06 0.26 0.08 0.39 0.08 0.9 0 1.49-1.3 0.6-1.85-6.48-4.02-5.01-15.05-2.11-28.84 3.57-16.92-11.43-21.08-17.83-21.84-0.02-0.01-0.05-0.01-0.08-0.01z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Smoking;
