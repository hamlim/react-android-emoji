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

function EMinusmail(props) {
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
        x1: 64,
        x2: 64,
        y1: 36.833,
        y2: 104.33,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120 104h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 8.4562,
        y2: 72.154,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0.9931
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,30.16V28c0-2.21-1.79-4-4-4H8c-2.21,0-4,1.79-4,4v2.02l59.91,46.13L124,30.16z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m120 104h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z"
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "none",
        stroke: "#FFB300",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement("line", {
        x1: 43.01,
        x2: -0.19,
        y1: 60.76,
        y2: 107.93
      }),
      _react2.default.createElement("line", {
        x1: 84.88,
        x2: 128,
        y1: 60.66,
        y2: 108.12
      })
    ),
    _react2.default.createElement("polyline", {
      points: "0.08 27.78 63.91 76.14 127.92 27.94",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#FFB300",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120 27c0.55 0 1 0.45 1 1v72c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-72c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v72c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-72c0-2.21-1.79-4-4-4z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 31.901,
        y2: 95.573,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.0027503
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "84 81.96 58.3 81.96 58.3 69.98 79.9 69.98 81.9 69.98 81.9 67.98 81.9 58.34 81.9 56.34 79.9 56.34 58.3 56.34 58.3 46.12 83.92 46.12 85.92 46.12 85.92 44.12 85.92 34.16 85.92 32.16 83.92 32.16 44 32.16 42 32.16 42 34.16 42 93.84 42 95.84 44 95.84 84 95.84 86 95.84 86 93.84 86 83.96 86 81.96",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m82.92 35.16v7.96h-24.62c-1.66 0-3 1.34-3 3v10.22c0 1.66 1.34 3 3 3h20.6v7.63h-20.6c-1.66 0-3 1.34-3 3v11.98c0 1.66 1.34 3 3 3h24.7v7.88h-38v-57.67h37.92m3-3h-43.92v63.67h44v-13.88h-27.7v-11.97h23.6v-13.63h-23.6v-10.23h27.62v-13.96z",
        fill: "#444"
      })
    )
  );
}

exports.default = EMinusmail;
