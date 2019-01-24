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

function Clipboard(props) {
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
        id: "c",
        x1: 64.001,
        x2: 64.001,
        y1: 8.4902,
        y2: 124.04,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D1A773",
        offset: 0.0065487
      }),
      _react2.default.createElement("stop", {
        stopColor: "#916843",
        offset: 0.9989
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.34 124.04h-88.68c-2.21 0-4-1.79-4-4v-107.55c0-2.21 1.79-4 4-4h88.67c2.21 0 4 1.79 4 4v107.55c0.01 2.21-1.78 4-3.99 4z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64.001,
        x2: 64.001,
        y1: 19.166,
        y2: 115.59,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98.79 114.97h-69.58c-1.34 0-2.43-1.11-2.43-2.48v-91.16c0-1.37 1.09-2.48 2.43-2.48h69.57c1.34 0 2.44 1.11 2.44 2.48v91.16c0 1.37-1.09 2.48-2.43 2.48z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.001,
        x2: 64.001,
        y1: 4.9356,
        y2: 30.477,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 0.8627
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.74 14.67c-0.01-5.91-4.82-10.71-10.74-10.71s-10.72 4.79-10.74 10.71h-17.41v16.07h56.3v-16.07h-17.41zm-10.74 3.65c-2.38 0-4.31-1.93-4.31-4.31s1.93-4.31 4.31-4.31 4.31 1.93 4.31 4.31-1.93 4.31-4.31 4.31z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 6.96c2.49 0 4.85 1.22 6.31 3.27 0.56 0.79 1.47 1.26 2.44 1.26h35.19c0.77 0 1.39 0.63 1.39 1.39v106.76c0 0.77-0.63 1.39-1.39 1.39h-87.88c-0.77 0-1.39-0.63-1.39-1.39v-106.76c0-0.77 0.63-1.39 1.39-1.39h35.19c0.97 0 1.88-0.47 2.44-1.26 1.46-2.05 3.82-3.27 6.31-3.27m0-3c-3.61 0-6.8 1.79-8.75 4.53h-35.19c-2.43 0-4.39 1.97-4.39 4.39v106.76c0 2.43 1.97 4.39 4.39 4.39h87.88c2.43 0 4.39-1.97 4.39-4.39v-106.76c0-2.43-1.97-4.39-4.39-4.39h-35.19c-1.94-2.74-5.13-4.53-8.75-4.53z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#757575"
      },
      _react2.default.createElement("path", {
        d:
          "m91.25 48.99h-54.5c-1.22 0-2.22-0.99-2.22-2.22 0-1.22 0.99-2.22 2.22-2.22h54.51c1.22 0 2.22 0.99 2.22 2.22-0.01 1.23-1 2.22-2.23 2.22z"
      }),
      _react2.default.createElement("path", {
        d:
          "m91.25 61.16h-54.5c-1.22 0-2.22-0.99-2.22-2.22s0.99-2.22 2.22-2.22h54.51c1.22 0 2.22 0.99 2.22 2.22s-1 2.22-2.23 2.22z"
      }),
      _react2.default.createElement("path", {
        d:
          "m91.25 73.33h-54.5c-1.22 0-2.22-0.99-2.22-2.22s0.99-2.22 2.22-2.22h54.51c1.22 0 2.22 0.99 2.22 2.22s-1 2.22-2.23 2.22z"
      }),
      _react2.default.createElement("path", {
        d:
          "m91.25 85.5h-54.5c-1.22 0-2.22-0.99-2.22-2.22 0-1.22 0.99-2.22 2.22-2.22h54.51c1.22 0 2.22 0.99 2.22 2.22-0.01 1.23-1 2.22-2.23 2.22z"
      }),
      _react2.default.createElement("path", {
        d:
          "m60.06 97.67h-23.31c-1.22 0-2.22-0.99-2.22-2.22s0.99-2.22 2.22-2.22h23.31c1.22 0 2.22 0.99 2.22 2.22s-1 2.22-2.22 2.22z"
      })
    )
  );
}

exports.default = Clipboard;
