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

function Hourglass(props) {
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
        x1: 86.73,
        x2: 44.572,
        y1: 114.53,
        y2: 20.484,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0.0021923
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m71.57 63.65c-1.55-0.72-1.52-3.26 0.05-3.93 5.13-2.2 29.63-12.65 29.63-45.39l0.63-5.7-75.75-0.12 0.66 5.97c0 31.72 24.37 42.89 29.52 45.1 1.57 0.67 1.61 3.21 0.05 3.93-5.14 2.39-30.07 12.39-30.07 48.79l-0.16 6.72 75.75 0.13-0.05-6.78c-0.01-37.11-25.09-46.32-30.26-48.72zm-25.11 16.15h37.5-37.5z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m29.48 11.52 69.05 0.11-0.27 2.37c-0.01 0.11-0.02 0.22-0.02 0.33 0 20.07-9.6 34.81-27.81 42.63-1.8 0.77-2.98 2.6-3.01 4.66s1.1 3.92 2.88 4.75c0.27 0.13 0.59 0.27 0.96 0.43 6.82 3.03 27.56 12.26 27.56 45.59l0.03 3.75-69.65-0.12 0.09-3.65v-0.07c0-14.14 3.9-25.69 11.61-34.33 6.15-6.92 13.1-10.09 16.07-11.44 0.24-0.11 0.46-0.21 0.66-0.3 1.78-0.83 2.91-2.69 2.88-4.75s-1.21-3.88-3.01-4.66c-8.33-3.58-27.71-14.87-27.71-42.34 0-0.11-0.01-0.22-0.02-0.33l-0.29-2.63m-3.35-3.01 0.66 5.97c0 31.72 24.37 42.89 29.52 45.1 1.57 0.67 1.61 3.21 0.05 3.93-5.14 2.39-30.07 12.39-30.07 48.79l-0.16 6.72 75.75 0.13-0.05-6.78c0-37.1-25.08-46.31-30.25-48.72-1.55-0.72-1.52-3.26 0.05-3.93 5.13-2.2 29.63-12.65 29.63-45.39l0.63-5.7-75.76-0.12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m25.02 4h77.96c3.33 0 6.02 2.7 6.02 6.02 0 3.33-2.7 6.02-6.02 6.02h-77.96c-3.33 0-6.02-2.7-6.02-6.02s2.7-6.02 6.02-6.02z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.395,
        x2: 64.395,
        y1: 80.876,
        y2: 116.8,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0.1575
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0.9978
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34.41 115.41 59.98 0.06c0-16.08-5.37-26.24-11.14-32.52-1.87-2.03-4.53-3.15-7.29-3.15h-23.71c-2.96 0-5.74 1.32-7.66 3.57-5.34 6.26-10.18 16.28-10.18 32.04z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.98 7c1.67 0 3.02 1.36 3.02 3.02s-1.36 3.02-3.02 3.02h-77.96c-1.67 0-3.02-1.36-3.02-3.02s1.36-3.02 3.02-3.02h77.96m0-3h-77.96c-3.32 0-6.02 2.7-6.02 6.02s2.7 6.02 6.02 6.02h77.96c3.33 0 6.02-2.7 6.02-6.02s-2.7-6.02-6.02-6.02z",
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
          "m75.95 82.8c1.95 0 3.81 0.8 5.08 2.18 6.32 6.87 9.77 16.11 10.29 27.48l-53.85-0.05c0.47-11.22 3.63-20.32 9.41-27.1 1.36-1.6 3.32-2.51 5.38-2.51h23.69m0-3h-23.7c-2.96 0-5.74 1.32-7.66 3.57-5.34 6.26-10.18 16.29-10.18 32.04l59.98 0.06c0-16.08-5.37-26.24-11.14-32.52-1.88-2.03-4.54-3.15-7.3-3.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m24.86 112.31h78.28c3.23 0 5.85 2.62 5.85 5.85s-2.62 5.85-5.85 5.85h-78.28c-3.23 0-5.85-2.62-5.85-5.85 0-3.24 2.62-5.85 5.85-5.85z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.14 115.31c1.57 0 2.85 1.28 2.85 2.85s-1.28 2.85-2.85 2.85h-78.28c-1.57 0-2.85-1.28-2.85-2.85s1.28-2.85 2.85-2.85h78.28m0-3h-78.28c-3.23 0-5.85 2.62-5.85 5.85s2.62 5.85 5.85 5.85h78.28c3.23 0 5.85-2.62 5.85-5.85s-2.62-5.85-5.85-5.85z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Hourglass;
