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

function OpenFileFolder(props) {
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
        "m80.71 43.28h-24.04c-1.75 0-3.47-1.42-3.84-3.16l-1.27-5.98c-0.37-1.75 0.74-3.16 2.49-3.16h24.04c1.75 0 3.47 1.42 3.84 3.16l1.27 5.98c0.37 1.74-0.74 3.16-2.49 3.16z",
      fill: "#946134"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.2 43.28h-24.04c-1.75 0-3.47-1.42-3.84-3.16l-1.27-5.98c-0.37-1.75 0.74-3.16 2.49-3.16h24.04c1.75 0 3.47 1.42 3.84 3.16l1.27 5.98c0.37 1.74-0.74 3.16-2.49 3.16z",
      fill: "#FF8F00"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 57.385,
        x2: 57.385,
        y1: 31.062,
        y2: 123.15,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F1AF06",
        offset: 0.1894
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CD7F02",
        offset: 0.5692
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BD6A00",
        offset: 0.7232
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m6.83 30.97c-1.32 0.15-2.43 1.39-2.42 2.72-0.08 35.38-0.08 48.95-0.08 87.03 0 1.42 1.3 2.72 2.72 2.72h95.26c0.39 0 0.77-0.1 1.12-0.27 0.91-0.43 1.45-1.39 1.54-2.39l5.46-62.71c0.01-0.08 0.01-0.16 0.01-0.24 0.05-4.36 0.02-7.97 0-12.04-0.01-3.16-2.6-5.74-5.76-5.74h-63.72c-1.29 0-2.43-0.81-2.86-2.02-0.54-1.52-1.3-3.66-2-5.6-0.53-1.47-2.7-1.47-3.28-1.46h-25.99z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.328,
        x2: 64.328,
        y1: 57.692,
        y2: 123.49,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEA54",
        offset: 0.2852
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDDC48",
        offset: 0.5961
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCC733",
        offset: 0.9179
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.81 123.61h-94.25c-2.33 0-3.71-1.72-3.09-3.85l17.03-57.96c0.62-2.13 3.02-3.85 5.35-3.85h94.25c2.33 0 3.71 1.72 3.09 3.85l-17.03 57.96c-0.63 2.13-3.02 3.85-5.35 3.85z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78.09 33.97c0.31 0 0.82 0.4 0.9 0.79l1.26 5.93c0.29 1.39 1.52 2.38 2.93 2.38h21.48c1.49 0 2.75 1.26 2.76 2.75l0.01 2.25c0.01 3.19 0.03 6.2-0.01 9.7v0.06c-0.04 0.82 0.26 1.62 0.82 2.21 0.57 0.59 1.35 0.93 2.17 0.93h10.68c0.08 0 0.15 0.01 0.21 0.01l-17.02 57.94c-0.23 0.77-1.38 1.69-2.47 1.69h-94.25c-0.1 0-0.18-0.01-0.23-0.02v-0.03c0-37.7 0.01-51.24 0.08-86.59h25.13 0.07 45.48m0-3h-45.55-0.01-25.71c-1.32 0.15-2.43 1.39-2.42 2.72-0.08 35.38-0.08 48.95-0.08 87.03 0 0.08 0.02 0.17 0.03 0.25 0.11 1.53 1.35 2.64 3.21 2.64h94.25c2.33 0 4.72-1.72 5.35-3.85l17.03-57.96c0.62-2.13-0.76-3.85-3.09-3.85h-10.68c0-0.04 0.01-0.08 0.01-0.12 0.05-4.36 0.02-7.97 0-12.04-0.01-3.16-2.6-5.74-5.76-5.74h-21.48l-1.26-5.93c-0.37-1.73-2.09-3.15-3.84-3.15z",
        fill: "#424242"
      })
    )
  );
}

exports.default = OpenFileFolder;
