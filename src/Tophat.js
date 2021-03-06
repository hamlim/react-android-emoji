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

function Tophat(props) {
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
        "m72.47 91.82c-15.27-3.15-32.19-12.24-46.44-12.24-17.33 0-21.64 12.02-21.64 12.02s-0.6 5.26 1.66 10.78c3.87 9.45 24.62 17.03 57.08 17.03 35.51 0 58.59-9.23 60.09-17.47 0.17-0.92 0.6-2.21 0.42-2.58-3.27-6.87-36.69-4.56-51.17-7.54z",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 38.437,
        cy: 116.49,
        r: 65.038,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.8279
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.47 86.82c-15.27-3.15-32.19-12.24-46.44-12.24-22.4 0-24.68 16.84-18.98 24.79 7.72 10.77 23.62 16.12 56.08 16.03 33.14-0.1 59.34-7.33 59.34-15.71 0-7.83-34.73-9.73-50-12.87z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m100.28 102.54s-6.45 4.8-37.59 4.8-37.2-4.8-37.2-4.8l-5.35-76.64c-0.36-5.24 2.65-10.13 7.45-12.01 6.53-2.55 17.54-5.29 34.7-5.29 17.45 0 28.89 2.83 35.69 5.42 4.88 1.86 7.99 6.77 7.63 12.08l-5.33 76.44z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 15.563,
        x2: 89.804,
        y1: 6.4062,
        y2: 80.647,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.116
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.66 89.44c-0.26 3.46-2.71 6.34-6.07 7.18-5.25 1.3-14.89 5.73-31.9 5.73-16.86 0-26.37-4.41-31.54-5.7-3.35-0.83-5.78-3.72-6.03-7.17l-4.98-63.58c-0.36-5.24 2.65-10.13 7.45-12.01 6.53-2.55 17.54-5.29 34.7-5.29 17.45 0 28.89 2.83 35.69 5.42 4.88 1.86 7.99 6.77 7.63 12.08l-4.95 63.34z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m100.66 89.44c-0.26 3.46-2.71 6.34-6.07 7.18-5.25 1.3-14.89 5.73-31.9 5.73-16.86 0-26.37-4.41-31.54-5.7-3.35-0.83-5.78-3.72-6.03-7.17l-4.98-63.58c-0.36-5.24 2.65-10.13 7.45-12.01 6.53-2.55 17.54-5.29 34.7-5.29 17.45 0 28.89 2.83 35.69 5.42 4.88 1.86 7.99 6.77 7.63 12.08l-4.95 63.34z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 43.227,
        x2: 77.063,
        y1: 62.942,
        y2: 96.779,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.1607
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0.6999
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m107.55 97.68s-8 6.26-44.33 6.26-44.67-6.26-44.67-6.26v-29.83s14.67 8.74 44.33 8.74 44.67-8.74 44.67-8.74v29.83z",
      clipPath: "url(#c)",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 88.598,
        cy: 71.353,
        r: 53.998,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.1808
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.8323
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.51 98.44s2.22 10.02-27.81 14.9c-16.61 2.7-33.64 3.7-46.23 2.95-11.8-0.71-14.76-2.81-14.76-2.81s16.45 1.69 32.74-8.85c13.06-8.45 15.3-21.05 32.34-21.05 21.81 0 23.72 14.86 23.72 14.86z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.3 11.6c17.26 0 28.36 2.84 34.63 5.23 3.62 1.38 5.97 5.11 5.7 9.04l-4.5 57.52c-0.06 0.82 0.21 1.63 0.76 2.24s1.32 0.97 2.15 0.99c17.56 0.51 19.67 11.76 19.73 12.22 0.02 0.16 0.24 0.1 0.24 0.14v0.01c0 0.3-0.22 0.6-0.16 0.89-0.03 0.15-0.19 0.32-0.22 0.45-0.09 0.37-0.23 0.75-0.29 1.08-0.98 5.39-20.94 15.01-57.17 15.01-33.04 0-51.33-7.86-54.32-15.16-1.68-4.09-1.55-8.1-1.48-9.07 0.06-0.26 0.08-0.53 0.07-0.8-0.29-6.23 3.93-13.1 16.68-13.73 0.81-0.04 1.57-0.41 2.1-1.01 0.54-0.61 0.8-1.41 0.74-2.22l-3.81-48.7c-0.27-3.92 2.02-7.63 5.55-9.01 5.93-2.36 16.58-5.12 33.6-5.12m0-3c-17.16 0-28.17 2.74-34.7 5.29-4.8 1.88-7.81 6.77-7.45 12.01l3.81 48.73c-14.77 0.73-19.89 9.28-19.53 16.88-0.03 0.05-0.04 0.09-0.04 0.09s-0.6 5.26 1.66 10.78c3.87 9.45 24.62 17.03 57.08 17.03 35.51 0 58.59-9.23 60.09-17.47 0.17-0.92 0.6-2.21 0.42-2.58-0.03-0.06-0.07-0.11-0.1-0.16 0.03-0.47-0.02-0.75-0.02-0.75s-1.84-14.24-22.39-14.83l4.5-57.52c0.36-5.31-2.74-10.22-7.62-12.08-6.82-2.59-18.26-5.42-35.71-5.42z",
        fill: "#eee"
      })
    )
  );
}

exports.default = Tophat;
