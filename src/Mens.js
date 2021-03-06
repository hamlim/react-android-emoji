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

function Mens(props) {
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
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4.25,
        y2: 124.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#82B1FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6FA0FF",
        offset: 0.2644
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3D74FF",
        offset: 0.7989
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.12 16c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10m0-3c-7.17 0-13 5.83-13 13s5.83 13 13 13 13-5.83 13-13-5.83-13-13-13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.98 37.72c7.05 0 12.92 2.83 14.18 6.56l9.64 27.01c0.65 1.87-0.33 3.91-2.2 4.57-0.39 0.14-0.79 0.2-1.18 0.2-1.48 0-2.87-0.93-3.38-2.4l-5.64-17.59c-0.04-0.13-0.15-0.2-0.26-0.2-0.14 0-0.28 0.1-0.28 0.28v51.09c0 2.47-2.01 4.48-4.48 4.48s-4.48-2.01-4.48-4.48v-31.99c0-0.99-0.8-1.79-1.79-1.79s-1.79 0.8-1.79 1.79v31.99c0 2.47-2.01 4.48-4.48 4.48s-4.48-2.01-4.48-4.48v-51.11c0-0.18-0.14-0.28-0.28-0.28-0.11 0-0.22 0.06-0.26 0.19l-5.73 17.62c-0.52 1.48-1.9 2.4-3.38 2.4-0.39 0-0.79-0.07-1.18-0.2-1.87-0.65-2.85-2.7-2.2-4.57l9.53-27.05c1.24-3.72 7.09-6.52 14.12-6.52m0-3c-8.26 0-15.26 3.51-17.01 8.53l-9.52 27.04c-1.2 3.43 0.61 7.2 4.04 8.4 0.7 0.25 1.43 0.37 2.17 0.37 2.79 0 5.29-1.77 6.22-4.41l0.02-0.06 0.43-1.31v33.96c0 4.13 3.36 7.48 7.48 7.48 2.62 0 4.94-1.36 6.27-3.41 1.34 2.05 3.65 3.41 6.27 3.41 4.13 0 7.48-3.36 7.48-7.48v-33.7l0.33 1.04 0.02 0.08c0.92 2.64 3.42 4.41 6.22 4.41 0.74 0 1.47-0.12 2.17-0.37 3.43-1.2 5.24-4.96 4.04-8.39l-9.64-27.03c-1.68-5.03-8.68-8.56-16.99-8.56z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("circle", {
        cx: 64.12,
        cy: 26,
        r: 10
      }),
      _react2.default.createElement("path", {
        d:
          "m85.6 75.86c1.87-0.65 2.85-2.7 2.2-4.57l-9.64-27.01c-1.27-3.73-7.13-6.56-14.18-6.56-7.03 0-12.88 2.81-14.17 6.52l-9.53 27.05c-0.65 1.87 0.33 3.91 2.2 4.57 1.87 0.65 3.91-0.33 4.57-2.2l5.73-17.62c0.1-0.3 0.55-0.23 0.55 0.09v51.11c0 2.47 2.01 4.48 4.48 4.48s4.48-2.01 4.48-4.48v-31.99c0-0.99 0.8-1.79 1.79-1.79s1.79 0.8 1.79 1.79v31.99c0 2.47 2.01 4.48 4.48 4.48s4.48-2.01 4.48-4.48v-51.09c0-0.32 0.45-0.39 0.55-0.09l5.64 17.59c0.66 1.88 2.71 2.86 4.58 2.21z"
      })
    )
  );
}

exports.default = Mens;
