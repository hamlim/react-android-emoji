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

function BellhopBell(props) {
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
        "M73.95,46H54.05C51.53,46,50,47.32,50,49.84v0.55c0,2.52,0.46,4.61,4.05,4.61H60v17h8V55h5.95 c3.76,0,4.05-2.09,4.05-4.61v-0.55C78,47.32,76.47,46,73.95,46z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m73.98 48c1.7 0 2.02 0.7 2.02 1.84v0.55c0 2.39-0.17 2.61-2.05 2.61h-5.95c-1.1 0-2 0.9-2 2v15h-4v-15c0-1.1-0.9-2-2-2h-5.95c-1.69 0-2.05-0.22-2.05-2.61v-0.55c0-1.14 0.34-1.84 2.05-1.84h19.95m-0.05-2h-19.9c-2.52 0-4.05 1.32-4.05 3.84v0.55c0 2.52 0.46 4.61 4.05 4.61h5.95v17h8v-17h5.95c3.76 0 4.05-2.09 4.05-4.61v-0.55c0-2.52-1.53-3.84-4.05-3.84z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 52,
      y: 96,
      width: 24,
      height: 16,
      fill: "#4E342E"
    }),
    _react2.default.createElement("path", {
      d:
        "M118.16,119.98H10.12V114c0-3.31,2.69-6,6-6h96.04c3.31,0,6,2.69,6,6V119.98z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement("path", {
      d: "m64 109.15",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d: "m64 109.15",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d: "M124,124H4v-2.03c0-3.31,2.69-6,6-6h108c3.31,0,6,2.69,6,6V124z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 45.672,
        cy: 67.056,
        r: 74.814,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.1423
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0.6472
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m111.86 92.34c-0.4-12.25-7.18-32.48-47.67-32.48-40.27 0-47.4 20.18-48.03 32.43-2.41 0.77-4.16 3.04-4.16 5.71 0 3.31 2.69 6 6 6h91.9c3.31 0 6-2.69 6-6 0-2.62-1.69-4.85-4.04-5.66z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.19 62.86c17 0 29.38 3.63 36.78 10.8 6.21 6.01 7.72 13.53 7.89 18.78 0.04 1.24 0.84 2.33 2.01 2.74 1.21 0.42 2.02 1.56 2.02 2.83 0 1.65-1.35 3-3 3h-91.89c-1.65 0-3-1.35-3-3 0-1.31 0.84-2.46 2.08-2.86 1.19-0.38 2.02-1.46 2.08-2.7 0.27-5.25 1.91-12.77 8.22-18.79 7.51-7.17 19.9-10.8 36.81-10.8m0-3c-40.27 0-47.4 20.18-48.03 32.43-2.41 0.77-4.16 3.04-4.16 5.71 0 3.31 2.69 6 6 6h91.9c3.31 0 6-2.69 6-6 0-2.62-1.69-4.85-4.03-5.66-0.4-12.26-7.19-32.48-47.68-32.48z",
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
          "m112 111c1.65 0 3 1.35 3 3v1.98c0 1.63 1.38 2.96 3 3 1.3 0.03 2.45 0.87 2.84 2.02h-113.68c0.4-1.18 1.52-2 2.84-2h0.12c1.66 0 2.88-1.37 2.88-3.03v-1.97c0-1.65 1.47-3 3.12-3h95.88m0.16-3h-96.04c-3.31 0-6.12 2.69-6.12 6v2c-3.31 0-6 2.66-6 5.97v2.03h120v-2.03c0-3.26-3-5.91-6-5.99v-1.98c0-3.31-2.61-6-5.92-6h0.08z",
        fill: "#424242"
      })
    )
  );
}

exports.default = BellhopBell;