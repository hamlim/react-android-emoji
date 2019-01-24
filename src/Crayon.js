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

function Crayon(props) {
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
        id: "d",
        x1: 28.49,
        x2: 28.49,
        y1: 149.83,
        y2: 111.84,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D02D2D",
        offset: 0.4097
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62626",
        offset: 0.7309
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m33.35 75.02-11.21 11.22-17.85 30.25c-0.5 0.9-0.34 2.03 0.39 2.76l4.08 4.07c0.73 0.73 1.86 0.89 2.76 0.39l30.25-17.85 11.22-11.22-19.64-19.62z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m33.35 79.26 15.38 15.38-8.83 8.83-29.4 17.35-3.32-3.32 17.35-29.42 8.82-8.82m0-4.24-11.21 11.22-17.85 30.25c-0.5 0.9-0.34 2.03 0.39 2.76l4.08 4.08c0.45 0.45 1.04 0.68 1.64 0.68 0.38 0 0.77-0.1 1.12-0.29l30.25-17.85 11.22-11.22-19.64-19.63z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 67.435,
        x2: 67.435,
        y1: 10.333,
        y2: 108.53,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.68 83c-1.55 1.55-1.55 4.07 0 5.63l19.69 19.69c1.55 1.55 4.07 1.55 5.63 0l71.35-71.35-25.31-25.32",
      fill: "url(#c)"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 -.7071 .7071 .7071 -53.949 52.634)",
      x: 34.57,
      y: 73.54,
      width: 3.98,
      height: 35.81,
      fill: "#212121"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 108.92,
        x2: 108.92,
        y1: 4.6667,
        y2: 27.241,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m93.85 8.83 25.32 25.32 4.25-4.25c0.78-0.78 0.78-2.04 0-2.81l-22.51-22.51c-0.78-0.78-2.04-0.78-2.81 0",
      fill: "url(#b)"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 -.7071 .7071 .7071 14.592 81.025)",
      x: 103.11,
      y: 5,
      width: 3.98,
      height: 35.81,
      fill: "#212121"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 78.104,
        x2: 78.104,
        y1: 31,
        y2: 58.297,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.87 57.66c-11.43 11.43-24.17 17.21-28.46 12.93-4.29-4.29 1.5-17.03 12.93-28.45s24.17-17.21 28.45-12.93c4.29 4.28-1.5 17.02-12.92 28.45z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m99.51 7.42 21.08 21.08-77.7 77.7c-0.25 0.25-0.54 0.29-0.69 0.29s-0.44-0.04-0.69-0.29l-19.71-19.7c-0.38-0.38-0.38-1 0-1.38l77.71-77.7m0-3.42c-0.51 0-1.02 0.19-1.41 0.58l-78.42 78.42c-1.55 1.55-1.55 4.07 0 5.63l19.69 19.69c0.78 0.78 1.79 1.17 2.81 1.17s2.04-0.39 2.81-1.17l78.42-78.42c0.78-0.78 0.78-2.04 0-2.81l-22.5-22.51c-0.39-0.39-0.9-0.58-1.4-0.58z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Crayon;
