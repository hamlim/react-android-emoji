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

function Wastebasket(props) {
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
        id: "b",
        x1: 64.8,
        x2: 64.8,
        y1: 9.327,
        y2: 57.349,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0475
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C3C3C3",
        stopOpacity: 0.7801,
        offset: 0.2569
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D3D3D3",
        stopOpacity: 0.4913,
        offset: 0.532
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        stopOpacity: 0.1654,
        offset: 0.8424
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.72 81.2 0.31-0.33c0.39-2.42 0.72-4.86 1.02-7.29l-4.32 4.57-5.15-5.24 5.3-5.57 4.39 4.43c0.21-1.78 0.4-3.55 0.58-5.31l-2.11-2.12 2.6-2.74c0.34-3.38 0.68-6.67 1.08-9.79l-4.28-4.28 5.29-5.5 0.51 0.5c0.09-0.4 0.17-0.79 0.26-1.18 1.63-6.94 8.05-12.14 7.99-14.23 0-0.04-0.01-0.08-0.01-0.13l-1.28 1.33-5.38-5.28 2.72-2.82c-0.97-0.83-2.09-1.62-3.37-2.37l-2.27 2.34-5.35-5.24 0.41-0.42c-2.75-1-5.83-1.88-9.16-2.63l3.1 3.05-4.81 4.91-4.87-4.81 3.68-3.74c-1.57-0.3-3.19-0.57-4.85-0.8l-1.69 1.71-2.23-2.21c-3.32-0.36-6.78-0.59-10.35-0.69l-3.29 3.28-3.31-3.3c-3.39 0.07-6.69 0.27-9.87 0.58l-2.66 2.64-2.06-2.08c-1.67 0.23-3.29 0.5-4.87 0.79l4.07 4.12-5.3 5.25-5.07-5.16 3.76-3.7c-3.77 0.81-7.22 1.8-10.27 2.93l0.8 0.82-4.86 4.77-2.5-2.56c-1.31 0.76-2.47 1.55-3.46 2.38l3 3.09-5.17 5.07-1.88-1.95c-0.04 0.27-0.07 0.55-0.08 0.83-0.06 1.94 4.61 5.75 6.57 11.85l0.3 0.32-0.16 0.16c0.09 0.31 0.18 0.62 0.26 0.94 0.27 1.15 0.54 2.39 0.8 3.71l1.91-1.9 5.12 5.32-5.36 5.36-0.09-0.1c0.39 2.32 0.77 4.77 1.16 7.29l3.85 4.04-2.82 2.85c0.25 1.7 0.5 3.42 0.75 5.15l4.92-5 4.87 5.11-5.4 5.52-4.21-4.45c0.36 2.44 0.71 4.9 1.07 7.35l0.15 0.16-0.15 0.13c0.26 1.75 0.52 3.49 0.78 5.22l2.22-2.28 5.35 5.67-6.05 6.24c0.3 1.79 0.6 3.52 0.9 5.19l8.06-8.34 5.24 5.56-8.76 9.08 3.06 3.02 8.64-8.99 5.54 5.88-8.34 8.73 3.09 3.05 8.22-8.64 5.15 5.46-5.99 6.33c2.19 0.02 4.27-0.04 6.09-0.08l2.9-3.08 2.76 2.92c1.87-0.13 3.65-0.38 5.32-0.74l-5.08-5.37 5.41-5.74 7.77 8.16c1.32-0.72 2.55-1.52 3.7-2.41l-8.5-8.89 5.36-5.69 8.64 8.99c0.88-1.15 1.7-2.37 2.45-3.65l-8.16-8.45 5.23-5.52 6.44 6.63c0.56-1.47 1.07-2.98 1.54-4.52l-5.06-5.19 4.91-5.2 2.19 2.23c0.34-1.67 0.65-3.36 0.93-5.07l-0.23-0.24zm-11.12-11.31-5.54-5.64 5.3-5.51 5.54 5.6-5.3 5.55zm-19.61-14.01-4.88 5.03-5.35-5.49 4.88-5 5.35 5.46zm-2.45-8.43 5.29-5.42 5.35 5.41-5.29 5.45-5.35-5.44zm-10.67 5.01-4.87-5 4.87-4.95 4.87 4.97-4.87 4.98zm5.31 11.48-5.19 5.35-5.35-5.55 5.19-5.32 5.35 5.52zm2.91 3 5.3 5.45-5.21 5.4-5.28-5.48 5.19-5.37zm2.93-3.03 4.88-5.05 5.31 5.42-4.9 5.08-5.29-5.45zm7.78-8.05 5.29-5.47 5.33 5.39-5.3 5.5-5.32-5.42zm8.14-8.43 5.07-5.24 5.34 5.35-5.08 5.27-5.33-5.38zm-2.91-2.93-5.35-5.39 5.07-5.2 5.35 5.36-5.07 5.23zm-8.24-8.31-4.87-4.91 5.08-5.14 4.87 4.88-5.08 5.17zm-2.85 2.92-5.29 5.4-4.87-4.95 5.29-5.37 4.87 4.92zm-13.02-2.46-4.99-5.08 5.3-5.31 4.98 5.04-5.29 5.35zm-2.91 2.95-4.87 4.93-5.01-5.14 4.88-4.89 5 5.1zm-7.81 7.9-5.18 5.24-5.02-5.2 5.19-5.2 5.01 5.16zm2.86 2.95 4.87 5.01-5.18 5.3-4.87-5.04 5.18-5.27zm-0.36 16.3 5.35 5.56-5.35 5.52-5.35-5.6 5.35-5.48zm8.27 8.59 5.28 5.49-5.36 5.56-5.27-5.51 5.35-5.54zm8.22 8.55 5.54 5.76-5.36 5.62-5.54-5.8 5.36-5.58zm2.94-3.06 5.21-5.42 5.55 5.71-5.21 5.46-5.55-5.75zm8.13-8.46 4.9-5.1 5.55 5.65-4.9 5.13-5.55-5.68zm26.58-16.33-5.08 5.32-5.54-5.59 5.08-5.28 5.54 5.55zm-5.65-11.44-5.35-5.34 5.27-5.46 5.36 5.32-5.28 5.48zm7.53-18.67 5.38 5.29-4.82 4.99-5.37-5.31 4.81-4.97zm-8.26-8.12 5.35 5.26-4.81 4.96-5.35-5.29 4.81-4.93zm-7.61 7.79 5.35 5.31-5.28 5.44-5.35-5.34 5.28-5.41zm-7.75-7.69 4.87 4.83-5.28 5.39-4.87-4.86 5.28-5.36zm-7.81-7.75 4.95 4.91-5.28 5.34-4.96-4.95 5.29-5.3zm-3.15 13.12-5.07 5.13-4.98-5.02 5.08-5.09 4.97 4.98zm-12.93-12.95 5.12 5.13-5.08 5.08-5.12-5.16 5.08-5.05zm-7.93 7.88 5.12 5.18-5.3 5.3-5.12-5.21 5.3-5.27zm-3.11 13.4-4.88 4.87-5.12-5.26 4.87-4.84 5.13 5.23zm-13.01-13.26 5.08 5.18-4.87 4.82-5.07-5.21 4.86-4.79zm-7.92 18.04-5.07-5.26 5.17-5.09 5.08 5.22-5.18 5.13zm2.81 2.91 5.18-5.14 5.12 5.27-5.18 5.18-5.12-5.31zm4.69 21.83-5.04-5.27 5.36-5.37 5.03 5.23-5.35 5.41zm2.86 2.99 5.35-5.43 4.87 5.06-5.35 5.47-4.87-5.1zm4.74 22.34-5.35-5.65 5.4-5.54 5.35 5.62-5.4 5.57zm8.16 8.62-5.25-5.55 5.4-5.59 5.26 5.52-5.41 5.62zm8.48 8.97-5.54-5.86 5.41-5.63 5.54 5.82-5.41 5.67zm8.12 8.58-5.15-5.44 5.41-5.69 5.15 5.41-5.41 5.72zm8.39-8.86-5.15-5.39 5.36-5.63 5.15 5.35-5.36 5.67zm8.3-8.78-5.15-5.33 5.21-5.48 5.15 5.3-5.21 5.51zm8.13-8.6-5.15-5.28 4.9-5.15 5.15 5.25-4.9 5.18z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.15 94.15c-14.96 0-30.18 4.89-30.33 14.3-0.16 9.51 15.14 14.52 30.33 14.52s30.49-5.01 30.33-14.52c-0.15-9.42-15.37-14.3-30.33-14.3z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.998,
        x2: 63.998,
        y1: 3.6432,
        y2: 120.78,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0.1461
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C9FA8",
        offset: 0.4998
      }),
      _react2.default.createElement("stop", {
        stopColor: "#546E7A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.11 23.74c-0.02-0.3-0.09-0.66-0.2-1.09-0.05-0.21-0.11-0.44-0.17-0.68-0.09-0.23-0.18-0.48-0.27-0.74-0.76-2.13-2.67-4.62-5.4-6.68s-6.25-3.84-10.35-5.32c-4.1-1.46-8.79-2.63-13.93-3.52-5.14-0.85-10.72-1.44-16.65-1.64-5.92-0.17-12.18-0.07-18.63 0.66-6.45 0.71-13.12 1.92-19.78 4.21-3.33 1.18-6.67 2.63-9.86 4.84-1.59 1.12-3.15 2.44-4.51 4.2-0.35 0.42-0.64 0.93-0.95 1.41-0.27 0.53-0.57 1.03-0.78 1.61l-0.32 0.86c-0.1 0.32-0.18 0.7-0.26 1.05l-0.11 0.54-0.04 0.34-0.07 0.65c-0.03 0.48-0.01 0.2-0.01 0.34v0.12 0.24l0.01 0.48c0 0.32 0.04 0.63 0.09 0.94s0.09 0.62 0.16 0.93l0.25 0.88c0.17 0.6 0.43 1.11 0.66 1.66 0.28 0.49 0.54 1.03 0.85 1.47 1.23 1.85 2.72 3.27 4.25 4.48 0.38 0.29 0.76 0.58 1.14 0.85 1.68 11.1 3.34 22.34 5.12 33.7l5.99 38.4c0.04 1.13 0.31 2.22 0.72 3.13 0.47 1.05 1.06 1.93 1.7 2.65 1.28 1.46 2.68 2.46 4.08 3.33 2.82 1.67 5.72 2.72 8.64 3.54 2.92 0.8 5.86 1.35 8.81 1.71 1.47 0.19 2.95 0.3 4.43 0.4 0.74 0.04 1.48 0.08 2.24 0.1 0.79 0.03 1.42 0.03 2.2 0.04 5.91-0.03 11.83-0.64 17.67-2.24 2.91-0.82 5.81-1.87 8.63-3.54 1.4-0.86 2.8-1.87 4.08-3.33 0.64-0.72 1.23-1.61 1.7-2.65 0.41-0.92 0.68-2.01 0.72-3.14l5.71-38.12c1.73-11.47 3.33-22.82 4.96-34.02 0.77-0.53 1.49-1.08 2.15-1.64 2.62-2.22 4.36-4.83 4.95-7.01 0.08-0.27 0.15-0.52 0.21-0.76 0.05-0.28 0.1-0.55 0.13-0.8s0.06-0.48 0.09-0.69c0.01-0.18 0.01-0.26 0.01-0.38 0.01-0.42 0.01-0.63 0.01-0.63v-0.2c0.02-0.04-0.02-0.34-0.07-0.94zm-18.09 45.97-1.21 7.54-3.73-3.97 5.32-5.86c-0.13 0.76-0.26 1.52-0.38 2.29zm-48.82 45.44c-0.03-0.01-0.07-0.02-0.1-0.03-0.94-0.26-1.86-0.56-2.77-0.88l-3.69-4.13 5.72-6.24 5.52 6.14-4.68 5.14zm-19.43-68.58-1.4 1.47c-0.21-1.23-0.42-2.46-0.64-3.69l2.04 2.22zm2.76 3 5.39 5.88-5.71 6.02-1.91-2.08-1.08-6.36 3.31-3.46zm5.34-5.6c0.69 0.18 1.38 0.36 2.07 0.52 1.56 0.37 3.11 0.69 4.66 0.98l1.37 1.48-5.19 5.48-5.39-5.86 2.48-2.6zm27.49 5.79 5.14 5.49-5.59 6.01-5.14-5.53 5.59-5.97zm18.98 64.35c-0.96 0.36-1.95 0.68-2.96 0.96l-4.4-4.8 5.57-6.2 5.45 5.93-3.66 4.11zm-43.96-43.74-5.38-5.86 5.7-6.03 5.36 5.84-5.68 6.05zm8.49-2.99 5.14 5.6-5.66 6.08-5.16-5.62 5.68-6.06zm-8.57 9.16 5.16 5.64-5.52 5.94-5.14-5.7 5.5-5.88zm8.01 8.75 5.66 6.19-5.55 6.03-5.64-6.25 5.53-5.97zm2.89-3.12 5.65-6.1 5.64 6.15-5.63 6.12-5.66-6.17zm14.16-3.06-5.64-6.13 5.19-5.6 5.64 6.09-5.19 5.64zm8.06-2.55 5.52 5.96-5.19 5.7-5.52-5.99 5.19-5.67zm-8.06 8.79 5.52 6.01-5.61 6.15-5.54-6.03 5.63-6.13zm8.42 9.16 5.85 6.37-5.58 6.18-5.87-6.4 5.6-6.15zm8.71 3.2-5.85-6.35 5.19-5.72 5.85 6.31-5.19 5.76zm-6.23-24.24 5.59-6.09 5.52 5.9-5.59 6.13-5.52-5.94zm8.4-9.15 5.36-5.84 5.52 5.84-5.36 5.87-5.52-5.87zm-2.87-3.05-5.64-6.01 5.36-5.78 5.64 5.97-5.36 5.82zm-2.81 3.05-5.59 6.07-5.64-6.07 5.59-6.03 5.64 6.03zm-16.91 0-5.19 5.58-5.14-5.58 5.19-5.55 5.14 5.55zm-13.14-3.05-5.36-5.82 5.19-5.5 5.36 5.78-5.19 5.54zm-16.82 6.31 5.37 5.88-4.08 4.34-1.4-8.4c-0.08-0.48-0.17-0.97-0.25-1.45l0.36-0.37zm4.9 23.68-1.15 1.24-0.52-3.1 1.67 1.86zm-0.27 6.51 3.11-3.36 5.64 6.27-5.72 6.22-1.85-2.08-1.18-7.05zm14.55 2.92 5.56-6.06 5.54 6.05-5.58 6.12-5.52-6.11zm13.99 3.17 5.87 6.42-5.6 6.21-5.85-6.48 5.58-6.15zm8.81 9.63 2.42 2.65c-1.79 0.31-3.6 0.54-5.43 0.69l3.01-3.34zm16.78-6.69-5.45-5.91 5.19-5.78 2.83 3.05-1.13 7.03-1.44 1.61zm2.58-14.84 1.2-1.34-0.36 2.24-0.84-0.9zm2.45-9.11-5.38 5.96-5.85-6.29 5.59-6.15 5.7 6.09-0.06 0.39zm2.42-21.58-5.52-5.82 5.57-6.07 2.55 2.67c-0.43 2.58-0.85 5.17-1.27 7.76l-1.33 1.46zm2.8-14.89 0.9-0.98c-0.09 0.54-0.18 1.09-0.27 1.63l-0.63-0.65zm-2.87-2.99-1.01-1.06c1.06-0.37 2.08-0.76 3.06-1.17l-2.05 2.23zm-5.32 0.3 2.57 2.69-5.57 6.05-5.64-5.95 0.91-0.98c0.42-0.08 0.85-0.15 1.26-0.23 2.26-0.47 4.41-1 6.47-1.58zm-14.31 2.84-5.31 5.7-4.67-4.98c0.21-0.01 0.42-0.01 0.64-0.02 3.21-0.09 6.33-0.34 9.34-0.7zm-18.78 0.65c0.75 0.03 1.49 0.05 2.24 0.08l-5.12 5.45-5.36-5.76 0.39-0.41c2.64 0.29 5.27 0.52 7.85 0.64zm-27.21-3.6-1.67-1.81c0.85 0.32 1.69 0.62 2.54 0.9l-0.87 0.91zm21.45 72.61 2.69-2.96 3.3 3.66c-1.02-0.07-2.04-0.15-3.06-0.28-0.98-0.11-1.96-0.25-2.93-0.42zm56.06-90.79-0.06 0.15c-0.02 0.06-0.03 0.11-0.04 0.18-0.04 0.1-0.08 0.21-0.12 0.33-0.29 0.92-1.24 2.4-3.24 3.96s-4.97 3.13-8.66 4.42c-3.7 1.29-8.1 2.36-12.99 3.14-4.9 0.77-10.3 1.23-16.03 1.43-1.42 0.05-2.91 0.05-4.34 0.06-0.75 0-1.51-0.01-2.28-0.01-0.73-0.02-1.47-0.04-2.21-0.05-3.01-0.1-6.08-0.32-9.17-0.68-6.18-0.69-12.51-1.92-18.48-4.02-2.95-1.07-5.83-2.38-8.18-4.08-1.17-0.84-2.19-1.79-2.9-2.76-0.2-0.24-0.3-0.49-0.47-0.73-0.1-0.24-0.26-0.48-0.32-0.72l-0.12-0.35-0.07-0.34c-0.03-0.11-0.05-0.23-0.05-0.34l-0.01-0.17-0.01-0.09-0.01-0.04v-0.04l0.03-0.43c0.01-0.1 0.01-0.23 0.03-0.31 0.01-0.03 0.03-0.07 0.04-0.1 0.02-0.07 0.02-0.12 0.04-0.22l0.12-0.36c0.06-0.24 0.22-0.49 0.32-0.75 0.17-0.25 0.28-0.51 0.48-0.76 0.72-1.03 1.76-2.03 2.95-2.93 2.39-1.8 5.28-3.23 8.25-4.4s6.06-2.09 9.16-2.8c3.1-0.72 6.2-1.28 9.28-1.69 6.17-0.77 12.19-1.06 17.92-0.88 5.68 0.17 11.09 0.7 15.96 1.64 4.88 0.9 9.27 2.14 12.96 3.6 3.69 1.45 6.68 3.14 8.72 4.78 2.04 1.66 3.02 3.21 3.3 4.16 0.27 0.81 0.25 1.26 0.26 1.39-0.01 0.11-0.02 0.27-0.03 0.49-0.01 0.09-0.01 0.24-0.03 0.32z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.48 7.18c1.53 0 3.13 0.02 4.75 0.07 5.5 0.18 10.97 0.72 16.25 1.6 5.03 0.87 9.55 2 13.43 3.38 3.91 1.41 7.13 3.06 9.56 4.9 2.52 1.9 3.92 3.98 4.4 5.32l0.22 0.6 0.14 0.54c0.1 0.39 0.11 0.54 0.11 0.56 0 0.03 0 0.05 0.01 0.08l0.07 0.75-0.01 0.61v0.18 0.02l-0.07 0.53c-0.02 0.16-0.05 0.34-0.08 0.52l-0.05 0.2-0.13 0.46c-0.36 1.34-1.61 3.49-3.99 5.51-0.58 0.49-1.23 0.98-1.92 1.46-0.69 0.47-1.14 1.21-1.26 2.04-0.47 3.22-0.93 6.46-1.4 9.7-1.14 7.94-2.33 16.14-3.55 24.31l-5.71 38.13c-0.02 0.11-0.03 0.22-0.03 0.33-0.03 0.7-0.19 1.43-0.46 2.04-0.31 0.69-0.71 1.33-1.21 1.89-1.1 1.25-2.32 2.09-3.38 2.74-2.24 1.32-4.67 2.32-7.88 3.22-5.12 1.4-10.64 2.1-16.87 2.13-0.25 0-0.49-0.01-0.72-0.01-0.45 0-0.88-0.01-1.42-0.03-0.74-0.02-1.47-0.06-2.12-0.09-1.71-0.11-3.02-0.23-4.26-0.38-2.98-0.36-5.72-0.89-8.36-1.62-3.23-0.91-5.66-1.9-7.9-3.22-1.05-0.65-2.28-1.48-3.38-2.74-0.49-0.56-0.9-1.2-1.21-1.89-0.27-0.61-0.44-1.33-0.46-2.03 0-0.12-0.02-0.23-0.03-0.34l-5.99-38.41c-1.3-8.28-2.55-16.6-3.76-24.65-0.46-3.03-0.91-6.04-1.36-9.05-0.12-0.81-0.57-1.53-1.23-2-0.35-0.25-0.69-0.5-1.02-0.75-1.57-1.24-2.72-2.44-3.62-3.79l-0.06-0.09c-0.11-0.16-0.27-0.44-0.41-0.71l-0.18-0.33c-0.05-0.1-0.09-0.21-0.14-0.31-0.14-0.32-0.26-0.6-0.33-0.84l-0.22-0.78c-0.03-0.15-0.05-0.31-0.08-0.47l-0.04-0.25c-0.03-0.18-0.05-0.32-0.05-0.43v-0.07l-0.01-0.44v-0.22-0.08-0.04-0.07l0.06-0.53 0.03-0.23 0.08-0.4c0.05-0.23 0.11-0.51 0.17-0.72l0.29-0.79c0.08-0.23 0.23-0.5 0.39-0.81 0.05-0.1 0.11-0.2 0.16-0.31 0.07-0.11 0.14-0.22 0.21-0.33 0.17-0.26 0.34-0.53 0.47-0.69 0.02-0.03 0.04-0.05 0.06-0.08 0.99-1.29 2.22-2.42 3.84-3.56 3.21-2.22 6.58-3.56 9.13-4.47 5.64-1.95 11.9-3.28 19.14-4.07 4.19-0.47 8.58-0.7 13.39-0.7m0-3c-4.44 0-9.05 0.2-13.76 0.73-6.46 0.71-13.12 1.92-19.79 4.21-3.33 1.18-6.67 2.63-9.86 4.84-1.59 1.12-3.15 2.44-4.51 4.2-0.35 0.42-0.64 0.93-0.95 1.41-0.27 0.53-0.57 1.03-0.78 1.61l-0.32 0.86c-0.1 0.32-0.18 0.7-0.26 1.05l-0.11 0.54-0.04 0.34-0.07 0.65c-0.02 0.27-0.02 0.3-0.01 0.3v0.04 0.12 0.24l0.01 0.48c0 0.32 0.04 0.63 0.09 0.94s0.09 0.62 0.16 0.93l0.25 0.88c0.17 0.6 0.43 1.11 0.66 1.66 0.28 0.49 0.54 1.03 0.85 1.47 1.23 1.85 2.72 3.27 4.26 4.48 0.38 0.29 0.76 0.58 1.14 0.85 1.68 11.1 3.34 22.34 5.13 33.71l5.99 38.41c0.04 1.13 0.31 2.22 0.72 3.14 0.47 1.05 1.06 1.93 1.7 2.65 1.28 1.46 2.68 2.46 4.08 3.33 2.82 1.67 5.72 2.72 8.64 3.54 2.92 0.8 5.86 1.35 8.81 1.71 1.48 0.19 2.95 0.3 4.43 0.4 0.74 0.04 1.48 0.08 2.24 0.1 0.79 0.03 1.42 0.03 2.2 0.04 5.91-0.03 11.83-0.64 17.67-2.24 2.91-0.82 5.81-1.87 8.64-3.54 1.4-0.86 2.8-1.87 4.08-3.33 0.64-0.72 1.23-1.61 1.7-2.65 0.41-0.92 0.68-2.01 0.72-3.14l5.71-38.13c1.73-11.48 3.33-22.83 4.96-34.03 0.77-0.53 1.49-1.08 2.15-1.64 2.62-2.22 4.36-4.83 4.95-7.02 0.08-0.27 0.15-0.52 0.21-0.76 0.05-0.28 0.1-0.55 0.13-0.8s0.06-0.48 0.09-0.69c0.01-0.18 0.01-0.26 0.01-0.38 0.01-0.42 0.01-0.63 0.01-0.63v-0.2s-0.03-0.31-0.09-0.9c-0.02-0.3-0.09-0.66-0.2-1.09-0.05-0.21-0.11-0.44-0.17-0.68-0.09-0.23-0.18-0.48-0.27-0.74-0.76-2.13-2.67-4.62-5.41-6.68-2.73-2.06-6.25-3.85-10.35-5.32-4.1-1.46-8.79-2.63-13.93-3.52-5.14-0.85-10.72-1.44-16.66-1.64-1.59-0.08-3.21-0.11-4.85-0.11z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Wastebasket;
