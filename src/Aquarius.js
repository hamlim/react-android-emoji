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

function Aquarius(props) {
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
        y1: 4,
        y2: 123.15,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#AB47BC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A542B9",
        offset: 0.267
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9535B0",
        offset: 0.6128
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
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
          "m40 36c1.41 0 2.71 0.74 3.43 1.94l7.71 12.85c0.19 0.32 0.53 0.49 0.86 0.49s0.66-0.16 0.86-0.49l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 0.43-0.13 0.87-0.2 1.29-0.2 1.41 0 2.71 0.74 3.43 1.94l7.71 12.85c0.19 0.32 0.53 0.49 0.86 0.49s0.66-0.16 0.86-0.49l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 0.43-0.13 0.87-0.2 1.29-0.2 1.41 0 2.71 0.74 3.43 1.94l11.91 19.85c1.08 1.8 0.72 4.2-0.97 5.43-0.72 0.53-1.55 0.78-2.37 0.78-1.36 0-2.68-0.69-3.43-1.94l-7.71-12.86c-0.19-0.32-0.53-0.49-0.86-0.49s-0.66 0.16-0.86 0.49l-7.64 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-0.43 0.14-0.87 0.21-1.29 0.21-1.41 0-2.71-0.74-3.43-1.94l-7.71-12.86c-0.19-0.32-0.53-0.49-0.86-0.49s-0.66 0.16-0.86 0.49l-7.64 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-0.43 0.14-0.87 0.21-1.29 0.21-1.41 0-2.71-0.74-3.43-1.94l-7.71-12.86c-0.19-0.32-0.53-0.49-0.86-0.49s-0.66 0.16-0.86 0.49l-7.62 12.71c-0.77 1.29-2.17 2.07-3.59 2.07-0.55 0-1.11-0.12-1.64-0.37-2.16-1.03-2.92-3.67-1.72-5.67l11.93-19.88c0.51-0.85 1.27-1.54 2.21-1.85 0.43-0.14 0.87-0.21 1.29-0.21m48-3c-0.75 0-1.5 0.12-2.23 0.36-1.57 0.52-2.93 1.64-3.84 3.15l-5.93 9.88-6-10c-1.26-2.1-3.56-3.4-6-3.4-0.75 0-1.5 0.12-2.23 0.36-1.57 0.52-2.93 1.64-3.84 3.15l-5.93 9.89-6-10c-1.26-2.1-3.56-3.4-6-3.4-0.75 0-1.5 0.12-2.23 0.36-1.57 0.52-2.93 1.64-3.84 3.15l-11.93 19.9c-1.01 1.69-1.27 3.74-0.7 5.62s1.92 3.45 3.7 4.3c0.92 0.44 1.9 0.66 2.93 0.66 2.5 0 4.86-1.35 6.17-3.53l5.9-9.84 6 10c1.26 2.1 3.56 3.4 6 3.4 0.75 0 1.5-0.12 2.23-0.36 1.57-0.52 2.93-1.64 3.84-3.15l5.93-9.9 6 10c1.26 2.1 3.56 3.4 6 3.4 0.75 0 1.5-0.12 2.23-0.36 1.57-0.52 2.93-1.64 3.84-3.15l5.93-9.89 6 10c1.26 2.1 3.56 3.4 6.01 3.4 1.49 0 2.92-0.47 4.14-1.35 2.89-2.11 3.67-6.24 1.77-9.4l-11.92-19.85c-1.26-2.1-3.56-3.4-6-3.4z"
      }),
      _react2.default.createElement("path", {
        d:
          "m40 64c1.41 0 2.71 0.74 3.43 1.94l7.71 12.85c0.19 0.32 0.53 0.49 0.86 0.49s0.66-0.16 0.86-0.49l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 0.43-0.13 0.87-0.2 1.29-0.2 1.41 0 2.71 0.74 3.43 1.94l7.71 12.85c0.19 0.32 0.53 0.49 0.86 0.49s0.66-0.16 0.86-0.49l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 0.43-0.13 0.87-0.2 1.29-0.2 1.41 0 2.71 0.74 3.43 1.94l11.91 19.85c1.08 1.8 0.72 4.2-0.97 5.43-0.72 0.53-1.55 0.78-2.37 0.78-1.36 0-2.68-0.69-3.43-1.94l-7.71-12.86c-0.19-0.32-0.53-0.49-0.86-0.49s-0.66 0.16-0.86 0.49l-7.64 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-0.43 0.14-0.87 0.21-1.29 0.21-1.41 0-2.71-0.74-3.43-1.94l-7.71-12.86c-0.19-0.32-0.53-0.49-0.86-0.49s-0.66 0.16-0.86 0.49l-7.64 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-0.43 0.14-0.87 0.21-1.29 0.21-1.41 0-2.71-0.74-3.43-1.94l-7.71-12.86c-0.19-0.32-0.53-0.49-0.86-0.49s-0.66 0.16-0.86 0.49l-7.62 12.71c-0.77 1.29-2.17 2.07-3.59 2.07-0.55 0-1.11-0.12-1.64-0.37-2.16-1.03-2.92-3.67-1.72-5.67l11.93-19.88c0.51-0.85 1.27-1.54 2.21-1.85 0.43-0.14 0.87-0.21 1.29-0.21m48-3c-0.75 0-1.5 0.12-2.23 0.36-1.57 0.52-2.93 1.64-3.84 3.15l-5.93 9.88-6-10c-1.26-2.1-3.56-3.4-6-3.4-0.75 0-1.5 0.12-2.23 0.36-1.57 0.52-2.93 1.64-3.84 3.15l-5.93 9.89-6-10c-1.26-2.1-3.56-3.4-6-3.4-0.75 0-1.5 0.12-2.23 0.36-1.57 0.52-2.93 1.64-3.84 3.15l-11.93 19.9c-1.01 1.69-1.27 3.74-0.7 5.62s1.92 3.45 3.7 4.3c0.92 0.44 1.9 0.66 2.93 0.66 2.5 0 4.86-1.35 6.17-3.53l5.9-9.84 6 10c1.26 2.1 3.56 3.4 6 3.4 0.75 0 1.5-0.12 2.23-0.36 1.57-0.52 2.93-1.64 3.84-3.15l5.93-9.9 6 10c1.26 2.1 3.56 3.4 6 3.4 0.75 0 1.5-0.12 2.23-0.36 1.57-0.52 2.93-1.64 3.84-3.15l5.93-9.89 6 10c1.26 2.1 3.56 3.4 6.01 3.4 1.49 0 2.92-0.47 4.14-1.35 2.89-2.11 3.67-6.24 1.77-9.4l-11.92-19.85c-1.26-2.1-3.56-3.4-6-3.4z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m100 64c-1.36 0-2.68-0.69-3.43-1.94l-7.71-12.86c-0.39-0.65-1.33-0.65-1.71 0l-7.65 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-1.85 0.61-3.78-0.16-4.72-1.73l-7.71-12.86c-0.39-0.65-1.33-0.65-1.71 0l-7.65 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-1.85 0.61-3.78-0.16-4.72-1.73l-7.71-12.86c-0.39-0.65-1.33-0.65-1.72 0l-7.62 12.71c-1.07 1.79-3.34 2.61-5.23 1.71-2.16-1.03-2.92-3.67-1.72-5.67l11.93-19.89c0.51-0.85 1.27-1.54 2.21-1.85 1.85-0.61 3.78 0.16 4.72 1.73l7.71 12.85c0.39 0.65 1.33 0.65 1.72 0l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 1.85-0.61 3.78 0.16 4.72 1.73l7.71 12.85c0.39 0.65 1.33 0.65 1.71 0l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 1.85-0.61 3.78 0.16 4.72 1.73l11.91 19.85c1.08 1.8 0.72 4.2-0.97 5.43-0.71 0.55-1.54 0.8-2.36 0.8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m100 92c-1.36 0-2.68-0.69-3.43-1.94l-7.71-12.86c-0.39-0.65-1.33-0.65-1.71 0l-7.65 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-1.85 0.61-3.78-0.16-4.72-1.73l-7.71-12.86c-0.39-0.65-1.33-0.65-1.71 0l-7.65 12.74c-0.51 0.85-1.27 1.54-2.21 1.85-1.85 0.61-3.78-0.16-4.72-1.73l-7.71-12.86c-0.39-0.65-1.33-0.65-1.72 0l-7.62 12.71c-1.07 1.79-3.34 2.61-5.23 1.71-2.16-1.03-2.92-3.67-1.72-5.67l11.93-19.89c0.51-0.85 1.27-1.54 2.21-1.85 1.85-0.61 3.78 0.16 4.72 1.73l7.71 12.85c0.39 0.65 1.33 0.65 1.72 0l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 1.85-0.61 3.78 0.16 4.72 1.73l7.71 12.85c0.39 0.65 1.33 0.65 1.71 0l7.64-12.74c0.51-0.85 1.27-1.54 2.21-1.85 1.85-0.61 3.78 0.16 4.72 1.73l11.91 19.85c1.08 1.8 0.72 4.2-0.97 5.43-0.71 0.55-1.54 0.8-2.36 0.8z"
      })
    )
  );
}

exports.default = Aquarius;
