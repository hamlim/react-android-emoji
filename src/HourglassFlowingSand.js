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

function HourglassFlowingSand(props) {
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
        x1: 83.2,
        x2: 46.534,
        y1: 111.65,
        y2: 20.316,
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
        "m56.31 59.58c1.57 0.67 1.61 3.21 0.05 3.93-5.14 2.39-30.07 12.39-30.07 48.79l-0.16 6.72 75.75 0.13-0.05-6.78c0-37.1-25.08-46.31-30.25-48.72-1.55-0.72-1.52-3.26 0.05-3.93 5.13-2.2 29.63-12.65 29.63-45.39l0.63-5.7-75.76-0.12 0.66 5.97c0 31.72 24.37 42.89 29.52 45.1z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.395,
        x2: 64.395,
        y1: 38.333,
        y2: 114.21,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA7B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0.2539
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0.4688
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC875",
        offset: 0.6586
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0.8665
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M95.85,109.3C94,100.63,90.93,95,83.04,95H66.79l-0.01-34.35 c0-8.93,22.91-11.52,22.91-24.07l-50.95,0.03c0,12.1,22.75,15.28,22.75,24.13L61.52,95H45.64c-7.95,0-11.05,5.72-12.84,14.48 l-2.19,10.46l67.56,0.18L95.85,109.3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m29.48 11.52 69.05 0.11-0.27 2.37c-0.01 0.11-0.02 0.22-0.02 0.33 0 20.07-9.6 34.81-27.81 42.63-1.8 0.77-2.98 2.6-3.01 4.66s1.1 3.93 2.88 4.75c0.27 0.13 0.59 0.27 0.96 0.43 6.82 3.03 27.56 12.26 27.56 45.59l0.03 3.75-69.65-0.12 0.09-3.65v-0.07c0-14.14 3.9-25.69 11.61-34.33 6.15-6.92 13.1-10.09 16.07-11.44 0.24-0.11 0.46-0.21 0.66-0.3 1.78-0.83 2.91-2.69 2.88-4.75s-1.21-3.88-3.01-4.66c-8.33-3.58-27.71-14.87-27.71-42.34 0-0.11-0.01-0.22-0.02-0.33l-0.29-2.63m-3.35-3.01 0.66 5.97c0 31.72 24.37 42.89 29.52 45.1 1.57 0.67 1.61 3.21 0.05 3.93-5.14 2.39-30.07 12.39-30.07 48.79l-0.16 6.72 75.74 0.13-0.05-6.78c0-37.1-25.08-46.31-30.25-48.72-1.55-0.72-1.52-3.26 0.05-3.93 5.13-2.2 29.63-12.65 29.63-45.39l0.63-5.7-75.75-0.12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m25.02 4h77.96c3.33 0 6.02 2.7 6.02 6.02 0 3.33-2.7 6.02-6.02 6.02h-77.96c-3.33 0-6.02-2.7-6.02-6.02s2.7-6.02 6.02-6.02z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.98 7c1.67 0 3.02 1.36 3.02 3.02 0 1.67-1.36 3.02-3.02 3.02h-77.96c-1.67 0-3.02-1.36-3.02-3.02s1.36-3.02 3.02-3.02h77.96m0-3h-77.96c-3.32 0-6.02 2.7-6.02 6.02 0 3.33 2.7 6.02 6.02 6.02h77.96c3.33 0 6.02-2.7 6.02-6.02s-2.7-6.02-6.02-6.02z",
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
          "m87.43 38.61c-1.23 4.51-6.51 7.56-11.65 10.51-5.66 3.26-11 6.34-11 11.58l0.01 34.35c0 1.1 0.9 1.95 2 1.95h16.25c5.94 0 8.88 3.48 10.85 12.73l1.81 8.39-62.62-0.16 1.69-8.08c1.88-9.24 4.93-12.88 10.87-12.88h15.88c0.53 0 1.04-0.16 1.41-0.54 0.38-0.38 0.59-0.86 0.59-1.39l-0.03-34.29c0-5.21-5.35-8.4-11.02-11.78-5.02-3-10.19-6.08-11.44-10.38l46.4-0.01m2.26-2.01-50.95 0.02c0 12.1 22.75 15.28 22.75 24.12l0.03 34.26h-15.88c-7.95 0-11.05 5.72-12.84 14.48l-2.19 10.46 67.56 0.2-2.33-10.84c-1.84-8.67-4.91-14.3-12.8-14.3h-16.25l-0.01-34.35c0-8.93 22.91-11.49 22.91-24.05z",
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

exports.default = HourglassFlowingSand;