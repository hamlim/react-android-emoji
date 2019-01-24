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

function LoveLetter(props) {
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
        x1: 64,
        x2: 64,
        y1: 108.04,
        y2: 19.956,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.757
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.5 108.04h-99c-5.81 0-10.52-4.71-10.52-10.52v-67.05c0-5.81 4.71-10.52 10.52-10.52h99c5.81 0 10.52 4.71 10.52 10.52v67.05c0 5.81-4.71 10.52-10.52 10.52z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d: "m6.9 103.84",
      fill: "none",
      stroke: "#E57373",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m120.86 22.81",
      fill: "none",
      stroke: "#E57373",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m113.5 108.04h-99c-5.81 0-10.52-4.71-10.52-10.52v-67.05c0-5.81 4.71-10.52 10.52-10.52h99c5.81 0 10.52 4.71 10.52 10.52v67.05c0 5.81-4.71 10.52-10.52 10.52z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement("polyline", {
      points: "-3.01 111.1 63.98 55.14 131.01 110.35",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B0BEC5",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement("polyline", {
      points: "-3.01 14.14 63.98 67.61 131.01 14.89",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B0BEC5",
      strokeMiterlimit: 10,
      strokeWidth: 8
    }),
    _react2.default.createElement("polyline", {
      points: "-3.01 13.14 64.17 65.66 131.01 13.89",
      clipPath: "url(#a)",
      fill: "#F5F5F5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.5 22.96c4.15 0 7.52 3.37 7.52 7.52v67.05c0 4.15-3.37 7.52-7.52 7.52h-99c-4.15 0-7.52-3.37-7.52-7.52v-67.06c0-4.15 3.37-7.52 7.52-7.52h99m0-2.99h-99c-5.81 0-10.52 4.71-10.52 10.52v67.05c0 5.81 4.71 10.52 10.52 10.52h99c5.81 0 10.52-4.71 10.52-10.52v-67.06c0-5.8-4.71-10.51-10.52-10.51z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 64.428,
        cy: 48.535,
        r: 33.154,
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
        "M83.24,40.91c-10.36-3.79-18.8,7.23-18.8,7.23s-8.08-10.52-18.61-7.26 C29.32,46,30.58,66.45,38.71,76.96C46.48,87.01,62,97.21,64,98.24v0.06c0,0.01,0.23,0.02,0.23,0.02s0.12-0.01,0.14-0.03 c0.02,0.02-0.18,0.03-0.18,0.03S64,98.31,64,98.3v-0.06c3-1.02,17.9-12.02,25.68-22.07C97.8,65.66,99.3,46.79,83.24,40.91z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78.82 43.12c1.14 0 2.28 0.21 3.39 0.61 5.09 1.86 8.37 5.25 9.76 10.07 1.84 6.37 0 14.62-4.58 20.54-5.9 7.63-17.73 16.51-23.24 20.31-5.81-3.87-17.05-11.85-22.98-19.53-4.61-5.96-6.44-15.11-4.34-21.74 1.53-4.83 4.85-8.07 9.88-9.63 1.06-0.33 2.14-0.49 3.21-0.49 6.84 0 12.09 6.58 12.13 6.64 0.57 0.74 1.45 1.1 2.38 1.1s1.81-0.36 2.38-1.1c0.06-0.07 5.39-6.78 12.01-6.78m0-3c-8.24 0-14.38 8.02-14.38 8.02s-6.05-7.88-14.51-7.88c-1.31 0-2.68 0.19-4.1 0.63-16.51 5.11-15.25 25.56-7.12 36.07 7.77 10.05 24.29 20.25 25.29 21.28v0.06-0.06c2-1.02 17.9-12.02 25.68-22.07 8.13-10.51 9.58-29.38-6.48-35.25-1.53-0.56-2.96-0.8-4.38-0.8zm-14.41 58.17c-0.01 0.01-0.05 0.02-0.07 0.02 0.03 0 0.08-0.01 0.07-0.02zm-0.23 0.01c0 0.01 0.12 0.02 0.12 0.02s0 0 0 0c-0.03-0.01-0.12-0.01-0.12-0.02zm0.16 0.01h-0.03 0.01s0 0.01 0.02 0z",
        fill: "#424242"
      })
    )
  );
}

exports.default = LoveLetter;
