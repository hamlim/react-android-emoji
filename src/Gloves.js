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

function Gloves(props) {
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
        "m64.08 109.73s0.66 2.94 18.11 7.44c17.45 4.49 19.7 2.3 19.7 2.3l3-22.46-32.76-8.44-8.05 21.16z",
      fill: "#37474F"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73.98 92.14 27.58 7.1-2.37 17.75c-0.15 0.01-0.32 0.01-0.51 0.01-2.33 0-6.94-0.48-15.74-2.74-9.63-2.48-13.7-4.39-15.33-5.37l6.37-16.75m-1.85-3.57-8.05 21.16s0.66 2.94 18.11 7.44c8.83 2.27 13.76 2.83 16.49 2.83 2.66 0 3.21-0.54 3.21-0.54l3-22.46-32.76-8.43z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 90.135,
        x2: 90.135,
        y1: 102.87,
        y2: 32.55,
        gradientTransform: "matrix(-.9689 -.2475 -.2475 .9689 193.79 22.816)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#455A64",
        offset: 0.1656
      }),
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 0.8693
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m61.05 57.46c1.65-1.11 4.29-1.92 7.88 0.96 3.19 2.55 3.38 6.87 5.08 9.33 0.54 0.79 1.77 0.5 1.92-0.45 1.01-6.31 4.95-29.48 4.95-29.48 0.48-3.14 2.77-5.35 5.75-4.52 2.35 0.66 3.35 3.21 2.95 5.83l-2.68 20.98c-0.04 0.28 0.12 0.53 0.37 0.59h0.01c0.26 0.06 0.53-0.12 0.6-0.4l6.6-23.66c0.65-2.57 2.35-4.57 4.78-4.33 3.04 0.3 4.36 3.24 3.58 6.32l-5.44 23.78c-0.15 0.58 0.15 1.16 0.68 1.32 0.01 0 0.01 0 0.02 0.01 0.54 0.17 1.12-0.16 1.3-0.74 0 0 5.73-16.61 6.52-19.02s2.76-4.92 5.72-3.98c2.95 0.94 3.11 3.54 2.42 6.28-0.59 2.34-4.6 15.12-5.75 18.8-0.17 0.55 0.12 1.15 0.66 1.34 0.51 0.18 1.07-0.05 1.31-0.53l4.99-10.11c1.24-2.51 2.87-4.06 5.23-3.39 2.93 0.84 3.81 3.69 2.57 6.61l-6.79 17.67s-4.13 11.38-5.88 16.08-7.93 12.95-23.28 9c-19.8-5.1-17.66-17.18-18.81-22.32-1.07-4.78-4.66-13.75-7.71-15.64-1.98-1.25-0.94-5.4 0.45-6.33z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m61.05 57.46c1.65-1.11 4.9-0.81 7.88 0.96 2.31 1.37 4.42 11.11 6.75 10.4 0.29-1.35 4.74-31.09 4.74-31.09 0.48-3.14 3.42-5.27 6.34-4.39 2.34 0.71 3.71 3.28 3.31 5.9l-3.23 21.1c-0.04 0.28 0.06 0.74 0.31 0.81h0.01c0.26 0.07 0.58-0.57 0.65-0.85l6.03-23.81c0.65-2.57 3.04-4.39 5.47-4.16 3.04 0.3 5.05 3.42 4.27 6.49l-5.99 23.63c-0.15 0.58 0.06 1.13 0.58 1.3 0.01 0-0.03-0.01-0.03-0.01 0.54 0.17 1.09-0.17 1.27-0.75l5.98-19.17c0.79-2.52 3.14-4.24 5.55-3.85 3.01 0.49 4.71 3.7 3.77 6.73l-6.1 19.46c-0.13 0.42 0.13 0.79 0.53 0.84h0.01c0.29 0.04 0.57-0.07 0.69-0.36l4.74-11.1c1.03-2.43 3.54-3.85 5.89-3.18 2.93 0.84 4.3 4.24 3.06 7.16l-7.29 17.13s-4.13 11.38-5.88 16.08-7.93 12.95-23.28 9c-19.8-5.1-17.66-17.18-18.81-22.32-1.07-4.78-4.66-13.75-7.71-15.64-1.94-1.23-0.9-5.38 0.49-6.31z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement("path", {
      d: "m116.1 78.2s-4.72-5.44-19.51-10.14c-15.16-4.81-20.8-4.48-20.8-4.48",
      clipPath: "url(#b)",
      fill: "none",
      opacity: 0.2,
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m74.12 66.61c11.92 0.97 18.37 24.75-3.65 28.77",
      clipPath: "url(#b)",
      fill: "none",
      opacity: 0.2,
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
          "m98.86 35.3c0.03 0 0.06 0 0.1 0.01 0.47 0.05 0.66 0.23 0.78 0.4 0.26 0.37 0.45 1.15 0.18 2.19-0.01 0.02-0.01 0.05-0.02 0.07l-5.42 23.75c-0.51 2.1 0.67 4.24 2.71 4.88 0.39 0.12 0.79 0.18 1.19 0.18 1.76 0 3.3-1.14 3.86-2.84 0.35-1.02 5.75-16.66 6.53-19.03 0.38-1.17 1.11-2.12 1.63-2.12 0.09 0 0.2 0.02 0.33 0.06 0.5 0.16 1.01 0.32 0.42 2.68-0.45 1.79-3.25 10.8-5.71 18.64-0.66 2.11 0.45 4.33 2.53 5.06 0.44 0.15 0.89 0.23 1.35 0.23 1.56 0 2.95-0.87 3.64-2.27l4.99-10.11c0.67-1.36 1.26-1.87 1.47-1.87 0.04 0 0.12 0.01 0.24 0.04 0.63 0.18 0.76 0.47 0.82 0.58 0.22 0.45 0.15 1.19-0.18 1.97-0.01 0.03-0.03 0.07-0.04 0.1l-6.79 17.67c-0.01 0.02-0.01 0.04-0.02 0.05-0.04 0.11-4.14 11.42-5.87 16.05-0.71 1.9-3.73 8.09-12.91 8.09-2.08 0-4.37-0.32-6.81-0.95-14.8-3.81-15.61-11.42-16.19-16.98-0.12-1.1-0.23-2.14-0.44-3.09-0.81-3.6-4.33-14.18-8.72-17.32-0.03-0.44 0.15-1.23 0.38-1.59 0.45-0.28 0.87-0.41 1.31-0.41 1.01 0 2.12 0.71 2.86 1.31 1.33 1.07 1.96 2.81 2.62 4.65 0.49 1.38 1.01 2.8 1.86 4.04 0.76 1.1 2 1.76 3.33 1.76 2.01 0 3.71-1.44 4.02-3.43 0.99-6.22 4.9-29.21 4.94-29.44 0-0.02 0.01-0.03 0.01-0.05 0.16-1.07 0.74-2.15 1.54-2.15 0.13 0 0.27 0.02 0.43 0.07 0.73 0.21 0.96 1.44 0.8 2.49 0 0.02-0.01 0.05-0.01 0.07l-2.68 20.96c-0.25 1.8 0.92 3.52 2.69 3.92 0.25 0.06 0.51 0.09 0.76 0.09 1.59 0 2.98-1.08 3.39-2.62l6.59-23.64c0.01-0.02 0.01-0.05 0.02-0.07 0.26-1.03 0.86-2.08 1.49-2.08m0-3c-2.23 0-3.78 1.93-4.39 4.35l-6.6 23.66c-0.06 0.24-0.27 0.41-0.5 0.41-0.03 0-0.07 0-0.1-0.01h-0.01c-0.25-0.06-0.41-0.31-0.37-0.59l2.68-20.98c0.4-2.62-0.59-5.17-2.95-5.83-0.43-0.12-0.84-0.18-1.24-0.18-2.36 0-4.1 2.01-4.51 4.7 0 0-3.94 23.16-4.95 29.48-0.09 0.57-0.57 0.91-1.06 0.91-0.32 0-0.64-0.14-0.86-0.46-1.7-2.47-1.89-6.78-5.08-9.33-1.83-1.47-3.41-1.97-4.74-1.97-1.28 0-2.33 0.47-3.14 1.02-1.39 0.93-2.43 5.08-0.46 6.31 3.04 1.9 6.64 10.87 7.71 15.64 1.15 5.14-0.99 17.22 18.81 22.32 2.82 0.73 5.33 1.04 7.56 1.04 9.91 0 14.29-6.2 15.72-10.04 1.75-4.7 5.88-16.08 5.88-16.08l6.79-17.67c1.24-2.91 0.36-5.77-2.57-6.61-0.37-0.11-0.73-0.16-1.06-0.16-1.8 0-3.12 1.43-4.16 3.54l-4.99 10.11c-0.18 0.37-0.56 0.6-0.95 0.6-0.12 0-0.24-0.02-0.35-0.06-0.54-0.19-0.84-0.78-0.66-1.34 1.16-3.68 5.16-16.46 5.75-18.8 0.69-2.74 0.54-5.34-2.42-6.28-0.43-0.14-0.85-0.2-1.24-0.2-2.27 0-3.8 2.13-4.48 4.18-0.79 2.41-6.52 19.02-6.52 19.02-0.15 0.48-0.57 0.79-1.01 0.79-0.09 0-0.19-0.01-0.29-0.04-0.01 0-0.01 0-0.02-0.01-0.52-0.17-0.82-0.75-0.68-1.32l5.42-23.77c0.78-3.08-0.54-6.02-3.58-6.32-0.13-0.02-0.26-0.03-0.38-0.03z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.43 85.76s-0.69 2.94-18.18 7.27-19.72 2.11-19.72 2.11l-2.79-22.49 32.84-8.13 7.85 21.24z",
      fill: "#37474F"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m53.69 68.08 6.22 16.81c-1.64 0.96-5.73 2.84-15.38 5.22-8.65 2.14-13.26 2.59-15.6 2.59-0.25 0-0.48-0.01-0.68-0.01l-2.21-17.77 27.65-6.84m1.89-3.56-32.84 8.13 2.79 22.49s0.57 0.57 3.4 0.57c2.76 0 7.68-0.54 16.32-2.68 17.49-4.33 18.18-7.27 18.18-7.27l-7.85-21.24z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 160.66,
        x2: 160.66,
        y1: 102.75,
        y2: 32.433,
        gradientTransform: "matrix(.9712 -.2383 .2383 .9712 -133.92 14.545)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#455A64",
        offset: 0.1656
      }),
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 0.8693
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m66.95 33.52c-1.64-1.12-4.27-1.96-7.89 0.88-3.21 2.52-3.45 6.83-5.17 9.29-0.55 0.78-1.77 0.48-1.91-0.47-0.95-6.32-4.67-29.52-4.67-29.52-0.45-3.14-2.72-5.38-5.71-4.57-2.36 0.64-3.38 3.18-3 5.8l2.48 21.01c0.04 0.28-0.12 0.53-0.37 0.59h-0.01c-0.26 0.06-0.53-0.12-0.6-0.4l-6.37-23.72c-0.63-2.57-2.3-4.59-4.74-4.38-3.04 0.27-4.39 3.2-3.64 6.28l5.2 23.82c0.14 0.58-0.16 1.16-0.69 1.32-0.01 0-0.01 0-0.02 0.01-0.54 0.16-1.11-0.17-1.29-0.76 0 0-5.58-16.67-6.35-19.08s-2.72-4.94-5.68-4.03-3.14 3.51-2.47 6.25c0.57 2.34 4.46 15.16 5.58 18.86 0.17 0.55-0.13 1.14-0.68 1.33-0.51 0.17-1.07-0.06-1.3-0.55l-4.89-10.15c-1.21-2.52-2.84-4.08-5.19-3.44-2.94 0.81-3.84 3.66-2.63 6.58l6.63 17.73s4.02 11.42 5.73 16.13 7.81 13.03 23.19 9.22c19.84-4.92 17.81-17.02 19.01-22.15 1.11-4.77 4.79-13.7 7.85-15.57 1.98-1.21 0.98-5.37-0.4-6.31z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m66.95 33.52c-1.64-1.12-4.89-0.86-7.89 0.88-2.33 1.35-4.52 11.07-6.84 10.34-0.28-1.35-4.45-31.13-4.45-31.13-0.45-3.14-3.37-5.3-6.3-4.45-2.35 0.68-3.74 3.25-3.36 5.87l3.03 21.13c0.04 0.28-0.07 0.74-0.32 0.8h-0.01c-0.26 0.06-0.58-0.57-0.64-0.85l-5.81-23.86c-0.63-2.57-2.99-4.42-5.43-4.21-3.04 0.27-5.08 3.37-4.33 6.45l5.77 23.68c0.14 0.58-0.07 1.13-0.59 1.29-0.01 0 0.03-0.01 0.03-0.01-0.54 0.16-1.09-0.18-1.27-0.76l-5.8-19.22c-0.77-2.53-3.1-4.27-5.52-3.9-3.01 0.46-4.75 3.66-3.83 6.69l5.92 19.51c0.13 0.42-0.13 0.79-0.54 0.83h-0.01c-0.29 0.03-0.57-0.07-0.69-0.36l-4.65-11.14c-1.01-2.44-3.5-3.89-5.86-3.24-2.94 0.81-4.34 4.2-3.13 7.13l7.13 17.2s4.02 11.42 5.73 16.14 7.81 13.03 23.19 9.22c19.85-4.92 17.82-17.03 19.02-22.15 1.11-4.77 4.79-13.7 7.85-15.57 1.98-1.21 0.98-5.37-0.4-6.31z"
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
    _react2.default.createElement("path", {
      d: "m11.7 53.74s4.77-5.4 19.61-9.96c15.2-4.67 20.84-4.28 20.84-4.28",
      clipPath: "url(#a)",
      fill: "none",
      opacity: 0.2,
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m53.79 42.54c-11.93 0.86-18.6 24.57 3.38 28.8",
      clipPath: "url(#a)",
      fill: "none",
      opacity: 0.2,
      stroke: "#212121",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
          "m29.34 11c0.63 0 1.22 1.06 1.47 2.1 0.01 0.02 0.01 0.05 0.02 0.07l6.37 23.7c0.4 1.57 1.8 2.66 3.4 2.66 0.25 0 0.49-0.03 0.74-0.08 1.76-0.38 2.95-2.08 2.72-3.89l-2.48-20.99c0-0.02-0.01-0.05-0.01-0.07-0.15-1.05 0.09-2.28 0.82-2.48 0.15-0.04 0.29-0.06 0.42-0.06 0.84 0 1.38 1.12 1.53 2.16 0 0.02 0.01 0.03 0.01 0.05 0.04 0.23 3.73 23.26 4.67 29.49 0.3 2.01 2 3.47 4.03 3.47 1.31 0 2.55-0.64 3.31-1.72 0.87-1.24 1.39-2.65 1.9-4.02 0.68-1.84 1.32-3.57 2.67-4.63 1.07-0.84 2.06-1.29 2.85-1.29 0.44 0 0.87 0.13 1.33 0.42 0.22 0.37 0.4 1.16 0.36 1.59-4.42 3.1-8.04 13.64-8.88 17.23-0.22 0.94-0.34 1.98-0.47 3.08-0.64 5.55-1.52 13.16-16.35 16.83-2.36 0.58-4.59 0.88-6.62 0.88-9.34 0-12.34-6.28-13.03-8.21-1.68-4.65-5.68-16-5.72-16.11-0.01-0.02-0.01-0.04-0.02-0.05l-6.63-17.72c-0.01-0.03-0.03-0.07-0.04-0.1-0.32-0.78-0.39-1.52-0.16-1.97 0.05-0.11 0.19-0.4 0.82-0.57 0.12-0.03 0.19-0.04 0.24-0.04 0.21 0 0.8 0.51 1.46 1.88l4.89 10.15c0.67 1.4 2.11 2.3 3.66 2.3 0.45 0 0.89-0.07 1.32-0.22 2.08-0.71 3.21-2.93 2.57-5.04-2.39-7.86-5.1-16.9-5.53-18.69-0.58-2.36-0.06-2.52 0.44-2.68 0.12-0.04 0.23-0.06 0.32-0.06 0.52 0 1.24 0.96 1.61 2.13 0.76 2.38 6.01 18.08 6.35 19.09 0.55 1.72 2.09 2.88 3.87 2.88 0.39 0 0.78-0.06 1.17-0.18 2.03-0.62 3.23-2.74 2.74-4.85l-5.19-23.8c-0.01-0.02-0.01-0.05-0.02-0.07-0.26-1.05-0.06-1.82 0.2-2.19 0.12-0.17 0.31-0.35 0.78-0.39 0.03 0.01 0.06 0.01 0.09 0.01m0-3c-0.12 0-0.23 0.01-0.35 0.02-3.04 0.27-4.39 3.2-3.64 6.28l5.2 23.82c0.14 0.58-0.16 1.16-0.69 1.32-0.01 0-0.01 0-0.02 0.01-0.09 0.03-0.19 0.04-0.28 0.04-0.45 0-0.87-0.32-1.01-0.8 0 0-5.58-16.67-6.35-19.08-0.66-2.07-2.18-4.22-4.47-4.22-0.38 0-0.78 0.06-1.21 0.19-2.96 0.91-3.14 3.51-2.47 6.25 0.57 2.34 4.46 15.16 5.58 18.86 0.17 0.55-0.13 1.14-0.68 1.33-0.11 0.04-0.23 0.06-0.34 0.06-0.4 0-0.78-0.23-0.96-0.6l-4.89-10.15c-1.03-2.13-2.35-3.58-4.16-3.58-0.33 0-0.67 0.05-1.03 0.15-2.94 0.81-3.84 3.66-2.63 6.58l6.63 17.73s4.02 11.42 5.73 16.13c1.4 3.88 5.79 10.19 15.85 10.19 2.17 0 4.61-0.29 7.34-0.97 19.84-4.93 17.81-17.03 19.01-22.16 1.11-4.77 4.79-13.7 7.85-15.57 1.98-1.21 0.98-5.37-0.4-6.31-0.81-0.56-1.87-1.05-3.18-1.05-1.32 0-2.89 0.5-4.71 1.93-3.21 2.52-3.45 6.83-5.17 9.29-0.22 0.31-0.53 0.45-0.85 0.45-0.49 0-0.98-0.34-1.06-0.92-0.95-6.32-4.67-29.52-4.67-29.52-0.39-2.7-2.12-4.74-4.5-4.74-0.39 0-0.79 0.05-1.2 0.17-2.36 0.64-3.38 3.18-3 5.8l2.48 21.01c0.04 0.28-0.12 0.53-0.37 0.59h-0.01c-0.03 0.01-0.07 0.01-0.1 0.01-0.23 0-0.44-0.17-0.5-0.41l-6.37-23.72c-0.6-2.46-2.15-4.41-4.4-4.41z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Gloves;