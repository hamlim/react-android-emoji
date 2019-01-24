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

function IncomingEnvelope(props) {
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
        x1: 74.505,
        x2: 74.505,
        y1: 51.08,
        y2: 100.11,
        gradientTransform: "matrix(1 0 -.6741 1 44.673 0)",
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
        "m101.37 99.87h-79.45c-2.13 0-3.27-1.73-2.56-3.86l16.99-50.4c0.72-2.13 3.03-3.86 5.16-3.86h79.46c2.13 0 3.27 1.73 2.56 3.86l-16.99 50.4c-0.73 2.13-3.04 3.86-5.17 3.86z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 72.973,
        x2: 72.973,
        y1: 42.33,
        y2: 87.673,
        gradientTransform: "matrix(1 0 -.3371 1 22.337 0)",
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
        "m123.31 46.23 0.53-1.57c0.54-1.6-0.32-2.91-1.93-2.91h-81.35c-1.6 0-3.34 1.3-3.88 2.91l-0.49 1.47 32.22 33.5 54.9-33.4z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m101.37 99.87h-79.45c-2.13 0-3.27-1.73-2.56-3.86l16.99-50.4c0.72-2.13 3.03-3.86 5.16-3.86h79.46c2.13 0 3.27 1.73 2.56 3.86l-16.99 50.4c-0.73 2.13-3.04 3.86-5.17 3.86z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "none",
        stroke: "#FFB300",
        strokeMiterlimit: 10,
        strokeWidth: 2.1792
      },
      _react2.default.createElement("line", {
        x1: 56.98,
        x2: 14.06,
        y1: 68.46,
        y2: 102.73
      }),
      _react2.default.createElement("line", {
        x1: 87.43,
        x2: 107.13,
        y1: 68.39,
        y2: 102.86
      })
    ),
    _react2.default.createElement("polyline", {
      points: "33.88 44.51 68.4 79.63 126.7 44.62",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#FFB300",
      strokeMiterlimit: 10,
      strokeWidth: 2.1792
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.64 44.76-16.95 50.3c-0.33 0.98-1.55 1.81-2.31 1.81h-79.14l16.95-50.3c0.33-0.98 1.55-1.81 2.31-1.81h79.14m0.32-3h-79.45c-2.13 0-4.44 1.73-5.16 3.86l-16.99 50.4c-0.72 2.13 0.43 3.86 2.56 3.86h79.46c2.13 0 4.44-1.73 5.16-3.86l16.99-50.4c0.71-2.14-0.44-3.86-2.57-3.86z",
        fill: "#444"
      })
    ),
    _react2.default.createElement("line", {
      x1: 5.84,
      x2: 30.21,
      y1: 45,
      y2: 45,
      fill: "none",
      stroke: "#55AAF0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("line", {
      x1: 5.84,
      x2: 23.31,
      y1: 56.53,
      y2: 56.53,
      fill: "none",
      stroke: "#55AAF0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("line", {
      x1: 5.84,
      x2: 20,
      y1: 56.53,
      y2: 56.53,
      fill: "none",
      stroke: "#55AAF0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("line", {
      x1: 5.84,
      x2: 12.92,
      y1: 67.03,
      y2: 67.03,
      fill: "none",
      stroke: "#55AAF0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    })
  );
}

exports.default = IncomingEnvelope;
