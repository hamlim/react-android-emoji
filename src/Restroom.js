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

function Restroom(props) {
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
          "m92.17 16c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.47-10 10-10m0-3c-7.17 0-13 5.83-13 13s5.83 13 13 13 13-5.83 13-13-5.83-13-13-13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m92.11 38c6.78 0 12.42 2.83 13.64 6.56l9.27 27.01c0.63 1.87-0.32 3.91-2.12 4.57-0.38 0.14-0.76 0.2-1.14 0.2-1.42 0-2.76-0.93-3.25-2.4l-5.42-17.59c-0.04-0.13-0.15-0.2-0.25-0.2-0.14 0-0.27 0.1-0.27 0.28v5.8l6.33 26.03c0.28 1.13-0.55 2.23-1.67 2.23h-3.79c-0.48 0-0.86 0.4-0.86 0.9v16.13c0 2.47-1.93 4.48-4.31 4.48-0.14 0-0.28-0.01-0.42-0.02-2.24-0.22-3.89-2.31-3.89-4.65v-15.05c0-0.99-0.77-1.79-1.72-1.79s-1.72 0.8-1.72 1.79v15.24c0 2.47-1.93 4.48-4.31 4.48-0.14 0-0.28-0.01-0.42-0.02-2.24-0.22-3.89-2.31-3.89-4.65v-15.94c0-0.49-0.39-0.9-0.86-0.9h-3.84c-1.12 0-1.95-1.1-1.67-2.23l6.35-26.13h0.02v-5.72c0-0.18-0.14-0.28-0.27-0.28-0.11 0-0.21 0.06-0.25 0.19l-5.51 17.62c-0.5 1.48-1.83 2.4-3.25 2.4-0.38 0-0.76-0.07-1.14-0.2-1.8-0.65-2.74-2.7-2.12-4.57l9.16-27.05c1.21-3.71 6.83-6.52 13.59-6.52m0-3c-8.01 0-14.78 3.52-16.47 8.57l-9.16 27.04c-1.14 3.4 0.62 7.14 3.93 8.35 0.7 0.25 1.43 0.38 2.16 0.38 0.72 0 1.42-0.12 2.08-0.35l-2.08 8.56c-0.35 1.46-0.03 2.96 0.89 4.14 0.9 1.15 2.25 1.8 3.69 1.8h1.7v13.84c0 3.92 2.89 7.27 6.59 7.64 0.24 0.02 0.48 0.04 0.72 0.04 2.52 0 4.75-1.32 6.07-3.31 1.19 1.8 3.1 3.06 5.28 3.28 0.24 0.02 0.48 0.04 0.72 0.04 4.03 0 7.31-3.36 7.31-7.48v-14.05h1.66c1.45 0 2.79-0.66 3.69-1.8 0.92-1.17 1.25-2.68 0.89-4.14l-2.06-8.55c0.65 0.22 1.33 0.34 2.04 0.34 0.74 0 1.47-0.13 2.16-0.38 3.31-1.2 5.08-4.95 3.93-8.34l-9.27-27.03c-1.64-5.04-8.42-8.59-16.47-8.59z"
      }),
      _react2.default.createElement("path", {
        d:
          "m36.21 16c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.47-10 10-10m0-3c-7.17 0-13 5.83-13 13s5.83 13 13 13 13-5.83 13-13-5.84-13-13-13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m36.15 38c6.78 0 12.42 2.83 13.64 6.56l9.27 27.01c0.63 1.87-0.32 3.91-2.12 4.57-0.38 0.14-0.76 0.2-1.14 0.2-1.42 0-2.76-0.93-3.25-2.4l-5.42-17.59c-0.04-0.13-0.15-0.2-0.25-0.2-0.14 0-0.27 0.1-0.27 0.28v51.08c0 2.47-1.93 4.48-4.31 4.48s-4.31-2.01-4.31-4.48v-31.98c0-0.99-0.77-1.79-1.72-1.79s-1.72 0.8-1.72 1.79v31.99c0 2.47-1.93 4.48-4.31 4.48s-4.31-2.01-4.31-4.48v-51.11c0-0.18-0.14-0.28-0.27-0.28-0.11 0-0.21 0.06-0.25 0.19l-5.51 17.62c-0.5 1.48-1.83 2.4-3.25 2.4-0.38 0-0.76-0.07-1.14-0.2-1.8-0.65-2.74-2.7-2.12-4.57l9.16-27.05c1.21-3.71 6.84-6.52 13.6-6.52m0-3c-8.01 0-14.78 3.52-16.47 8.57l-9.16 27.04c-1.14 3.4 0.62 7.14 3.93 8.35 0.7 0.25 1.43 0.38 2.16 0.38 2.75 0 5.2-1.79 6.1-4.45l0.02-0.06 0.17-0.56v33.24c0 4.13 3.28 7.48 7.31 7.48 2.5 0 4.71-1.29 6.03-3.26 1.32 1.97 3.53 3.26 6.03 3.26 4.03 0 7.31-3.36 7.31-7.48v-32.96l0.09 0.28 0.02 0.08c0.89 2.66 3.34 4.45 6.1 4.45 0.74 0 1.47-0.13 2.16-0.38 3.31-1.2 5.08-4.95 3.93-8.34l-9.27-27.03c-1.63-5.06-8.41-8.61-16.46-8.61z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 16c1.38 0 2.5 1.12 2.5 2.5v91c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-91c0-1.38 1.12-2.5 2.5-2.5m0-3c-3.03 0-5.5 2.47-5.5 5.5v91c0 3.03 2.47 5.5 5.5 5.5s5.5-2.47 5.5-5.5v-91c0-3.03-2.47-5.5-5.5-5.5z"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 92.17,
      cy: 26,
      r: 10,
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m115.01 71.57-9.27-27.01c-1.21-3.73-6.85-6.56-13.63-6.56-6.76 0-12.38 2.81-13.63 6.52l-9.16 27.05c-0.63 1.87 0.32 3.91 2.12 4.57 1.8 0.65 3.76-0.33 4.39-2.2l5.51-17.62c0.1-0.3 0.53-0.23 0.53 0.09v5.72h-0.02l-6.35 26.13c-0.28 1.13 0.55 2.23 1.67 2.23h3.84c0.48 0 0.86 0.4 0.86 0.9v15.94c0 2.34 1.65 4.43 3.89 4.65 2.57 0.25 4.73-1.84 4.73-4.46v-15.24c0-0.99 0.77-1.79 1.72-1.79s1.72 0.8 1.72 1.79v15.04c0 2.34 1.65 4.43 3.89 4.65 2.57 0.25 4.73-1.84 4.73-4.46v-16.12c0-0.49 0.39-0.9 0.86-0.9h3.79c1.12 0 1.95-1.1 1.67-2.23l-6.33-26.03v-5.8c0-0.32 0.43-0.39 0.53-0.09l5.42 17.59c0.63 1.87 2.59 2.85 4.39 2.2 1.81-0.64 2.76-2.69 2.13-4.56z",
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 36.21,
      cy: 26,
      r: 10,
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.93 76.14c1.8-0.65 2.74-2.7 2.12-4.57l-9.27-27.01c-1.21-3.73-6.85-6.56-13.63-6.56-6.76 0-12.38 2.81-13.63 6.52l-9.16 27.05c-0.63 1.87 0.32 3.91 2.12 4.57 1.8 0.65 3.76-0.33 4.39-2.2l5.51-17.62c0.1-0.3 0.53-0.23 0.53 0.09v51.11c0 2.47 1.93 4.48 4.31 4.48s4.31-2.01 4.31-4.48v-31.99c0-0.99 0.77-1.79 1.72-1.79s1.72 0.8 1.72 1.79v31.99c0 2.47 1.93 4.48 4.31 4.48s4.31-2.01 4.31-4.48v-51.08c0-0.32 0.43-0.39 0.53-0.09l5.42 17.59c0.63 1.87 2.6 2.85 4.39 2.2z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 112c-1.38 0-2.5-1.12-2.5-2.5v-91c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v91c0 1.38-1.12 2.5-2.5 2.5z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Restroom;
