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

function Menorah(props) {
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
        stopColor: "#B388FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A175FF",
        offset: 0.3773
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7C4DFF",
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
          "m18.98 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.63 0-2.97-2.17-2.97-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.11-0.15 0.24-0.22 0.37-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m30.23 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.65 0-2.98-2.17-2.98-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.12-0.15 0.25-0.22 0.38-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m41.48 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.65 0-2.98-2.17-2.98-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.12-0.15 0.25-0.22 0.38-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m52.73 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.65 0-2.98-2.17-2.98-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.12-0.15 0.25-0.22 0.38-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.98 16c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.63 0-2.97-2.17-2.97-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.11-0.15 0.24-0.22 0.37-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.23 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.65 0-2.98-2.17-2.98-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.12-0.15 0.25-0.22 0.38-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.48 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.65 0-2.98-2.17-2.98-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.12-0.15 0.25-0.22 0.38-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m97.73 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.65 0-2.98-2.17-2.98-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.12-0.15 0.25-0.22 0.38-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.02h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.92-1.69-1.44-2.8-1.44z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.98 24c0.13 0 0.27 0.07 0.37 0.21 0.82 1.12 2.72 4.04 2.64 6.9v0.05c0 2.67-1.34 4.84-2.98 4.84h-0.02-0.02c-1.65 0-2.98-2.17-2.98-4.84v-0.05c-0.08-2.86 1.8-5.77 2.61-6.89 0.12-0.15 0.25-0.22 0.38-0.22m0-3c-1.11 0-2.13 0.53-2.8 1.45-1.22 1.68-3.23 5.01-3.18 8.6v0.1c0 4.31 2.39 7.6 5.63 7.83l0.04 0.01h0.21 0.1 0.33l0.05-0.01c3.24-0.22 5.64-3.51 5.64-7.83v-0.14-0.01c0.03-3.58-2-6.9-3.22-8.57-0.68-0.91-1.69-1.43-2.8-1.43z"
      }),
      _react2.default.createElement("path", {
        d:
          "m66 32c0.55 0 1 0.45 1 1v13.91c0 0.59 0.48 1 1.01 1 0.17 0 0.34-0.04 0.5-0.14 2.44-1.42 4.16-3.95 4.45-6.89 0.05-0.5 0.48-0.88 1.36-0.88h3.65c0.59 0 1.04 0.5 0.99 1.09-0.47 6.5-5.07 11.85-11.19 13.43-0.45 0.12-0.77 0.5-0.77 1.28v2.75c0 0.57 0.47 1 1.01 1 0.07 0 0.15-0.01 0.22-0.02 8.69-1.88 15.31-9.41 15.75-18.55 0.02-0.55 0.45-0.98 1.37-0.98h3.63c0.56 0 1.02 0.46 1 1.02-0.49 12.58-9.92 22.87-22.12 24.68-0.49 0.08-0.86 0.49-0.86 0.99v3.03c0 0.56 0.45 1.01 0.99 1.01 0.04 0 0.09 0 0.13-0.01 14.84-1.98 26.39-14.49 26.86-29.75 0.02-0.53 0.45-0.97 1-0.97h4c0.56 0 1.02 0.46 1.01 1.02-0.51 18.65-14.82 33.85-33.08 35.76-0.51 0.05-0.9 0.47-0.9 0.99v3.01c0 0.56 0.45 1.01 1 1.01h0.1c20.92-2.03 37.4-19.47 37.9-40.81 0.01-0.54 0.45-0.98 0.99-0.98h4c0.56 0 1.02 0.46 1.01 1.02-0.52 24.72-19.73 44.84-44.07 46.81-0.54 0.04-0.94 0.47-0.94 0.99v12.3c0 0.53 0.42 0.96 0.95 1 6.94 0.42 12.59 1.91 14.91 3.88 1.45 1.23 3.24 2 5.14 2 2.21 0 4 1.79 4 4h-56c0-2.21 1.79-4 4-4 1.91 0 3.69-0.77 5.14-2 2.32-1.97 7.97-3.46 14.91-3.88 0.53-0.03 0.95-0.46 0.95-1v-12.3c0-0.52-0.4-0.95-0.92-0.99-24.34-1.97-43.55-22.09-44.07-46.81-0.01-0.56 0.45-1.02 1.01-1.02h4c0.54 0 0.98 0.44 0.99 0.98 0.49 21.33 16.97 38.77 37.9 40.81h0.09c0.54 0 1-0.47 1-1.31v-2.72c0-0.51-0.39-0.93-0.9-0.98-18.27-1.92-32.58-17.11-33.08-35.76-0.02-0.56 0.44-1.02 1-1.02h4c0.54 0 0.97 0.44 0.99 0.98 0.48 15.26 12.03 27.77 26.86 29.75 0.04 0.01 0.09 0.01 0.13 0.01 0.54 0 0.99-0.47 0.99-1.31v-2.73c0-0.5-0.37-0.91-0.86-0.98-12.2-1.82-21.63-12.1-22.12-24.68-0.01-0.58 0.45-1.04 1.01-1.04h4c0.54 0 0.97 0.43 1 0.97 0.44 9.14 7.05 16.67 15.75 18.55 0.07 0.02 0.15 0.02 0.22 0.02 0.54 0 1.01-0.43 1.01-1v-3.06c0-0.46-0.32-0.85-0.77-0.97-6.12-1.58-10.73-6.93-11.19-13.43-0.04-0.58 0.41-1.08 1-1.08h4.02c0.51 0 0.94 0.38 0.99 0.88 0.29 2.95 2.01 5.47 4.45 6.89 0.16 0.09 0.34 0.14 0.5 0.14 0.52 0 1.01-0.42 1.01-1v-13.91c0-0.55 0.45-1 1-1h3.99m0-3h-4c-2.21 0-4 1.79-4 4v7.36c-0.3-1.93-1.96-3.36-3.95-3.36h-4.02c-1.11 0-2.17 0.46-2.93 1.27-0.23 0.25-0.42 0.52-0.58 0.81-0.68-1.25-2-2.08-3.5-2.08h-4c-1.08 0-2.14 0.45-2.89 1.23-0.24 0.25-0.45 0.53-0.61 0.83-0.68-1.24-1.99-2.06-3.5-2.06h-4c-1.08 0-2.12 0.44-2.88 1.22-0.25 0.25-0.46 0.54-0.63 0.85-0.68-1.24-1.98-2.06-3.5-2.06h-4c-1.07 0-2.12 0.44-2.87 1.21-0.75 0.76-1.16 1.81-1.14 2.88 0.26 12.67 5.21 24.72 13.92 33.94 8.26 8.71 19.23 14.21 31.08 15.6v8.63c-4.24 0.39-11.28 1.46-14.79 4.44-0.7 0.59-1.82 1.29-3.21 1.29-3.86 0-7 3.14-7 7v3h62v-3c0-3.86-3.14-7-7-7-1.39 0-2.51-0.7-3.21-1.29-3.52-2.98-10.56-4.05-14.79-4.44v-8.63c11.85-1.39 22.82-6.89 31.07-15.62 8.71-9.21 13.65-21.27 13.92-33.94 0.02-1.07-0.39-2.11-1.14-2.88s-1.8-1.21-2.87-1.21h-4c-1.52 0-2.82 0.82-3.5 2.06-0.17-0.31-0.38-0.59-0.63-0.85-0.75-0.77-1.8-1.22-2.88-1.22h-4c-1.51 0-2.82 0.83-3.5 2.06-0.17-0.3-0.37-0.58-0.61-0.83-0.75-0.78-1.8-1.23-2.89-1.23h-3.63c-1.89 0-3.2 0.91-3.87 2.1-0.16-0.3-0.36-0.58-0.59-0.83-0.75-0.79-1.81-1.25-2.91-1.25h-3.65c-2.63 0-4.05 1.7-4.32 3.37v-7.37c0-2.21-1.79-4-4-4z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m22 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m33.25 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m44.5 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.75 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m67 23.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m78.25 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m89.5 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m100.75 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m112 31.11c0.08-2.86-1.82-5.77-2.64-6.9-0.21-0.28-0.53-0.28-0.74 0-0.81 1.13-2.69 4.04-2.61 6.89v0.05c0 2.67 1.34 4.84 2.98 4.84h0.02 0.02c1.65 0 2.98-2.17 2.98-4.84-0.01-0.01-0.01-0.03-0.01-0.04z"
      }),
      _react2.default.createElement("path", {
        d:
          "m67.92 87.83c24.34-1.97 43.55-22.09 44.07-46.81 0.01-0.56-0.45-1.02-1.01-1.02h-4c-0.54 0-0.98 0.44-0.99 0.98-0.49 21.33-16.97 38.77-37.9 40.81-0.59 0.06-1.09-0.41-1.09-1v-3.01c0-0.51 0.39-0.93 0.9-0.99 18.27-1.92 32.58-17.11 33.08-35.76 0.02-0.57-0.44-1.03-1-1.03h-4c-0.54 0-0.97 0.44-0.99 0.98-0.48 15.26-12.03 27.77-26.86 29.75-0.59 0.08-1.12-0.4-1.12-1v-3.03c0-0.5 0.37-0.91 0.86-0.98 12.2-1.82 21.63-12.1 22.12-24.68 0.02-0.56-0.44-1.02-1-1.02h-3.63c-0.92 0-1.34 0.43-1.37 0.97-0.44 9.14-7.05 16.67-15.75 18.55-0.64 0.12-1.24-0.35-1.24-0.99v-2.75c0-0.77 0.32-1.16 0.77-1.28 6.12-1.58 10.73-6.93 11.19-13.43 0.04-0.59-0.41-1.09-0.99-1.09h-3.65c-0.88 0-1.31 0.38-1.36 0.88-0.29 2.95-2.01 5.47-4.45 6.89-0.67 0.39-1.51-0.09-1.51-0.86v-13.91c0-0.55-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1v13.91c0 0.77-0.84 1.26-1.51 0.87-2.44-1.42-4.16-3.95-4.45-6.89-0.05-0.5-0.48-0.88-0.99-0.88h-4.02c-0.59 0-1.04 0.5-1 1.09 0.47 6.5 5.07 11.85 11.19 13.43 0.45 0.12 0.77 0.5 0.77 0.97v3.06c0 0.64-0.6 1.11-1.23 0.98-8.69-1.88-15.31-9.41-15.75-18.55-0.01-0.56-0.44-0.99-0.98-0.99h-4c-0.56 0-1.03 0.46-1 1.02 0.49 12.58 9.92 22.87 22.12 24.68 0.49 0.07 0.86 0.48 0.86 0.98v2.73c0 0.9-0.53 1.38-1.12 1.3-14.84-1.98-26.39-14.49-26.86-29.75-0.03-0.52-0.46-0.96-1.01-0.96h-4c-0.56 0-1.02 0.46-1.01 1.02 0.51 18.65 14.82 33.85 33.08 35.76 0.51 0.05 0.9 0.47 0.9 0.98v2.72c0 0.89-0.51 1.36-1.09 1.31-20.92-2.03-37.4-19.47-37.9-40.81 0-0.54-0.44-0.98-0.98-0.98h-4c-0.56 0-1.02 0.46-1.01 1.02 0.52 24.72 19.73 44.84 44.07 46.81 0.52 0.04 0.92 0.47 0.92 0.99v12.3c0 0.53-0.42 0.96-0.95 1-6.94 0.42-12.59 1.91-14.91 3.88-1.45 1.23-3.24 2-5.14 2-2.21 0-4 1.79-4 4h56c0-2.21-1.79-4-4-4-1.91 0-3.69-0.77-5.14-2-2.32-1.97-7.97-3.46-14.91-3.88-0.53-0.03-0.95-0.46-0.95-1v-12.3c0-0.52 0.4-0.95 0.92-0.99z"
      })
    )
  );
}

exports.default = Menorah;