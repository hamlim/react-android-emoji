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

function EnvelopeWithArrow(props) {
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
        id: "f",
        x1: 64,
        x2: 64,
        y1: 56.71,
        y2: 124.21,
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
        "m120 123.88h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 28.333,
        y2: 92.031,
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
        "M124,50.04v-2.16c0-2.21-1.79-4-4-4H8c-2.21,0-4,1.79-4,4v2.02l59.91,46.13L124,50.04z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m120 123.88h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
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
        y1: 80.64,
        y2: 127.81
      }),
      _react2.default.createElement("line", {
        x1: 84.88,
        x2: 128,
        y1: 80.53,
        y2: 128
      })
    ),
    _react2.default.createElement("polyline", {
      points: "0.08 47.66 63.91 96.02 127.92 47.82",
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
          "m120 46.88c0.55 0 1 0.45 1 1v72c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-72c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v72c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-72c0-2.21-1.79-4-4-4z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.227,
        x2: 64.227,
        y1: 9,
        y2: 78.232,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9922
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80.28 58.37h-32.1c-1.1 0-2-0.9-2-2v-50.37c0-1.1 0.9-2 2-2h32.1c1.1 0 2 0.9 2 2v50.37c0 1.11-0.9 2-2 2z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.987,
        x2: 63.987,
        y1: 9,
        y2: 78.232,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9922
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m62.73 82.79-32.62-26.46c-1.46-1.19-0.62-3.55 1.26-3.55h65.24c1.88 0 2.72 2.37 1.26 3.55l-32.62 26.46c-0.74 0.6-1.79 0.6-2.52 0z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m79.28 7v45.77c0 1.66 1.34 3 3 3h11.51l-29.8 24.18-29.8-24.18h11.99c1.66 0 3-1.34 3-3v-45.77h30.1m1-3h-32.1c-1.1 0-2 0.9-2 2v46.77h-14.81c-1.88 0-2.72 2.37-1.26 3.55l32.62 26.46c0.37 0.3 0.81 0.45 1.26 0.45s0.89-0.15 1.26-0.45l32.62-26.46c1.46-1.19 0.62-3.55-1.26-3.55h-14.33v-46.77c0-1.1-0.9-2-2-2z",
        fill: "#444"
      })
    )
  );
}

exports.default = EnvelopeWithArrow;
