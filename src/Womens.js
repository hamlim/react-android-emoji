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

function Womens(props) {
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
          "m63.92 38c7.05 0 12.92 2.83 14.18 6.56l9.64 27.01c0.65 1.87-0.33 3.91-2.2 4.57-0.39 0.14-0.79 0.2-1.18 0.2-1.48 0-2.87-0.93-3.38-2.4l-5.64-17.59c-0.04-0.13-0.15-0.2-0.26-0.2-0.14 0-0.28 0.1-0.28 0.28v5.8l6.58 26.03c0.29 1.13-0.57 2.23-1.74 2.23h-3.95c-0.5 0-0.9 0.4-0.9 0.9v16.13c0 2.47-2.01 4.48-4.48 4.48-0.15 0-0.29-0.01-0.44-0.02-2.33-0.22-4.04-2.31-4.04-4.65v-15.05c0-0.99-0.8-1.79-1.79-1.79s-1.79 0.8-1.79 1.79v15.24c0 2.47-2.01 4.48-4.48 4.48-0.15 0-0.29-0.01-0.44-0.02-2.33-0.22-4.04-2.31-4.04-4.65v-15.94c0-0.49-0.4-0.9-0.9-0.9h-4c-1.17 0-2.02-1.1-1.74-2.23l6.61-26.13h0.02v-5.72c0-0.18-0.14-0.28-0.28-0.28-0.11 0-0.22 0.06-0.26 0.19l-5.73 17.62c-0.52 1.48-1.9 2.4-3.38 2.4-0.39 0-0.79-0.07-1.18-0.2-1.87-0.65-2.85-2.7-2.2-4.57l9.53-27.05c1.26-3.71 7.11-6.52 14.14-6.52m0-3c-8.26 0-15.26 3.51-17.01 8.53l-9.52 27.04c-1.2 3.43 0.61 7.2 4.04 8.4 0.7 0.25 1.43 0.37 2.17 0.37 0.8 0 1.58-0.15 2.3-0.41l-2.17 8.59c-0.36 1.44-0.05 2.94 0.86 4.12 0.91 1.17 2.29 1.85 3.78 1.85h1.89v13.84c0 3.92 2.97 7.28 6.76 7.64 0.24 0.02 0.48 0.03 0.73 0.03 2.65 0 4.98-1.38 6.31-3.46 1.21 1.89 3.21 3.21 5.51 3.43 0.24 0.02 0.48 0.03 0.73 0.03 4.13 0 7.48-3.36 7.48-7.48v-14.03h1.84c1.49 0 2.87-0.67 3.78-1.85 0.91-1.17 1.23-2.68 0.86-4.12l-2.17-8.58c0.71 0.26 1.47 0.4 2.25 0.4 0.74 0 1.47-0.12 2.17-0.37 1.66-0.58 3-1.77 3.76-3.36 0.76-1.58 0.86-3.37 0.28-5.03l-9.64-27.03c-1.68-5.02-8.68-8.55-16.99-8.55z"
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
          "m87.74 71.57-9.64-27.01c-1.27-3.73-7.13-6.56-14.18-6.56-7.03 0-12.88 2.81-14.17 6.52l-9.53 27.05c-0.65 1.87 0.33 3.91 2.2 4.57 1.87 0.65 3.91-0.33 4.57-2.2l5.73-17.62c0.1-0.3 0.55-0.23 0.55 0.09v5.72h-0.02l-6.61 26.13c-0.29 1.13 0.57 2.23 1.74 2.23h4c0.49 0 0.9 0.4 0.9 0.9v15.94c0 2.34 1.71 4.43 4.04 4.65 2.67 0.25 4.92-1.84 4.92-4.46v-15.24c0-0.99 0.8-1.79 1.79-1.79s1.79 0.8 1.79 1.79v15.04c0 2.34 1.71 4.43 4.04 4.65 2.67 0.25 4.92-1.84 4.92-4.46v-16.12c0-0.49 0.4-0.9 0.9-0.9h3.95c1.17 0 2.02-1.1 1.74-2.23l-6.58-26.03v-5.8c0-0.32 0.45-0.39 0.55-0.09l5.64 17.59c0.65 1.87 2.7 2.85 4.57 2.2 1.85-0.64 2.84-2.69 2.19-4.56z"
      })
    )
  );
}

exports.default = Womens;
