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

function WheelOfDharma(props) {
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
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 16c0.87 0 1.83 0.37 2.72 1.26 0.18 0.18 0.28 0.44 0.28 0.7v5.25c0 0.52 0.39 0.94 0.91 0.99 8.11 0.79 15.51 3.99 21.47 8.89 0.19 0.15 0.42 0.23 0.64 0.23 0.25 0 0.51-0.1 0.7-0.29l2.98-2.98c0.59-0.59 1.35-0.88 2.12-0.88 1.57 0 3.15 1.23 3.15 3.69 0 0.26-0.12 0.51-0.3 0.69l-3.71 3.71c-0.36 0.36-0.39 0.94-0.06 1.34 4.9 5.96 8.11 13.36 8.89 21.47 0.05 0.51 0.47 0.91 0.99 0.91h5.25c0.26 0 0.52 0.1 0.7 0.28 2.58 2.6 0.78 5.72-1.74 5.72h-4.21c-0.52 0-0.94 0.39-0.99 0.91-0.79 8.11-3.99 15.51-8.89 21.47-0.33 0.4-0.31 0.98 0.06 1.34l2.98 2.98c1.79 1.79 0.85 5.26-2.81 5.28-0.26 0-0.51-0.12-0.69-0.3l-3.71-3.71c-0.19-0.19-0.44-0.29-0.7-0.29-0.23 0-0.45 0.08-0.64 0.23-5.96 4.9-13.36 8.11-21.47 8.89-0.51 0.05-0.91 0.47-0.91 0.99v4.23c0 1.66-1.34 3-3 3-0.87 0-1.83-0.37-2.72-1.26-0.18-0.18-0.28-0.44-0.28-0.7v-5.25c0-0.52-0.39-0.94-0.91-0.99-8.11-0.79-15.51-3.99-21.47-8.89-0.19-0.15-0.42-0.23-0.64-0.23-0.25 0-0.51 0.1-0.7 0.29l-2.98 2.98c-0.59 0.59-1.35 0.88-2.12 0.88-1.57 0-3.15-1.23-3.16-3.69 0-0.26 0.12-0.51 0.3-0.7l3.71-3.71c0.36-0.36 0.39-0.94 0.06-1.34-4.9-5.96-8.11-13.36-8.89-21.47-0.06-0.53-0.48-0.92-1-0.92h-4.21c-2.53 0-4.32-3.12-1.74-5.72 0.18-0.18 0.44-0.28 0.7-0.28h5.25c0.52 0 0.94-0.39 0.99-0.91 0.79-8.11 3.99-15.51 8.89-21.47 0.33-0.4 0.31-0.98-0.06-1.34l-2.98-2.98c-1.79-1.79-0.85-5.27 2.82-5.27 0.26 0 0.51 0.12 0.69 0.3l3.71 3.71c0.19 0.19 0.44 0.29 0.7 0.29 0.23 0 0.45-0.08 0.64-0.23 5.96-4.9 13.36-8.11 21.47-8.89 0.51-0.05 0.91-0.47 0.91-0.99v-4.22c0.01-1.66 1.35-3 3.01-3m8.86 34.49c0.26 0 0.51-0.1 0.7-0.29l12.17-12.17c0.42-0.42 0.39-1.12-0.08-1.49-4.95-3.91-10.97-6.51-17.55-7.28-0.04 0-0.08-0.01-0.11-0.01-0.54 0-1 0.45-1 1.01v17.24c0 0.47 0.33 0.86 0.79 0.97 1.62 0.39 3.14 1.03 4.53 1.87 0.17 0.09 0.36 0.15 0.55 0.15m-17.72 0c0.19 0 0.38-0.05 0.55-0.15 1.39-0.84 2.91-1.48 4.53-1.87 0.46-0.11 0.79-0.5 0.79-0.97v-17.25c0-0.56-0.45-1.01-1-1.01-0.04 0-0.08 0-0.11 0.01-6.58 0.77-12.6 3.37-17.55 7.28-0.47 0.37-0.5 1.07-0.08 1.49l12.17 12.18c0.19 0.19 0.44 0.29 0.7 0.29m25.37 10.51h17.24c0.59 0 1.07-0.52 1-1.11-0.77-6.58-3.37-12.6-7.28-17.55-0.2-0.25-0.48-0.37-0.77-0.37-0.26 0-0.52 0.1-0.72 0.3l-12.18 12.17c-0.33 0.33-0.38 0.84-0.13 1.24 0.84 1.39 1.48 2.91 1.87 4.53 0.11 0.46 0.5 0.79 0.97 0.79m-50.26 0h17.24c0.47 0 0.86-0.33 0.97-0.79 0.39-1.62 1.03-3.14 1.87-4.53 0.24-0.4 0.2-0.91-0.13-1.24l-12.18-12.17c-0.2-0.2-0.46-0.3-0.72-0.3-0.29 0-0.58 0.12-0.77 0.37-3.91 4.95-6.51 10.97-7.28 17.55-0.07 0.59 0.41 1.11 1 1.11m33.75 14c6.08 0 11-4.92 11-11s-4.92-11-11-11-11 4.92-11 11 4.92 11 11 11m26.69 11.03c0.29 0 0.58-0.12 0.77-0.37 3.91-4.95 6.51-10.97 7.28-17.55 0.07-0.59-0.41-1.11-1-1.11h-17.23c-0.47 0-0.86 0.33-0.97 0.79-0.39 1.62-1.03 3.14-1.87 4.53-0.24 0.4-0.2 0.91 0.13 1.24l12.17 12.17c0.2 0.2 0.46 0.3 0.72 0.3m-53.38 0c0.26 0 0.52-0.1 0.72-0.3l12.17-12.17c0.33-0.33 0.38-0.84 0.13-1.24-0.84-1.39-1.48-2.91-1.87-4.53-0.11-0.46-0.5-0.79-0.97-0.79h-17.24c-0.59 0-1.07 0.52-1 1.11 0.77 6.58 3.37 12.6 7.28 17.55 0.2 0.25 0.49 0.37 0.78 0.37m22.69 12.73c0.54 0 1-0.45 1-1.01v-17.24c0-0.47-0.33-0.86-0.79-0.97-1.62-0.39-3.14-1.03-4.53-1.87-0.17-0.1-0.36-0.15-0.55-0.15-0.26 0-0.51 0.1-0.7 0.29l-12.16 12.17c-0.42 0.42-0.39 1.12 0.08 1.49 4.95 3.91 10.97 6.51 17.55 7.28 0.03 0 0.07 0.01 0.1 0.01m8 0c0.04 0 0.08 0 0.11-0.01 6.58-0.77 12.6-3.37 17.55-7.28 0.47-0.37 0.5-1.07 0.08-1.49l-12.18-12.18c-0.19-0.19-0.44-0.29-0.7-0.29-0.19 0-0.38 0.05-0.55 0.15-1.39 0.84-2.91 1.48-4.53 1.87-0.46 0.11-0.79 0.5-0.79 0.97v17.24c0.01 0.56 0.46 1.02 1.01 1.02m-4-85.76c-1.6 0-3.11 0.62-4.24 1.76-1.14 1.13-1.76 2.64-1.76 4.24v2.43c-7.23 1.01-14.03 3.83-19.86 8.23l-2.45-2.45c-0.75-0.75-1.77-1.18-2.81-1.18-2.87 0.01-5.26 1.49-6.24 3.86-0.93 2.25-0.42 4.81 1.3 6.53l1.72 1.72c-4.4 5.83-7.22 12.63-8.23 19.86h-3.47c-1.06 0-2.1 0.43-2.83 1.17-2.02 2.03-2.66 4.77-1.67 7.14 0.93 2.24 3.11 3.69 5.54 3.69h2.43c1.01 7.23 3.83 14.03 8.23 19.86l-2.45 2.45c-0.75 0.75-1.18 1.78-1.18 2.83 0.02 4.34 3.18 6.68 6.16 6.68 1.6 0 3.11-0.62 4.24-1.76l1.72-1.72c5.83 4.4 12.63 7.22 19.86 8.23v3.47c0 1.06 0.43 2.1 1.17 2.83 1.38 1.37 3.1 2.13 4.83 2.13 3.31 0 6-2.69 6-6v-2.43c7.23-1.01 14.03-3.83 19.86-8.23l2.45 2.45c0.75 0.75 1.77 1.18 2.81 1.18 2.88-0.01 5.26-1.49 6.24-3.87 0.93-2.25 0.41-4.81-1.31-6.53l-1.72-1.72c4.4-5.83 7.22-12.63 8.23-19.86h2.43c2.43 0 4.61-1.45 5.54-3.7 0.99-2.37 0.35-5.11-1.67-7.14-0.74-0.74-1.77-1.17-2.83-1.17h-3.47c-1.01-7.23-3.83-14.03-8.23-19.86l2.45-2.45c0.75-0.75 1.18-1.78 1.18-2.82-0.01-4.34-3.18-6.69-6.15-6.69-1.6 0-3.11 0.62-4.24 1.76l-1.72 1.72c-5.83-4.4-12.63-7.22-19.86-8.23v-3.47c0-1.06-0.42-2.09-1.16-2.83-1.38-1.35-3.1-2.11-4.84-2.11zm-17.97 24.54c3.62-2.46 7.69-4.15 11.97-4.97v13.4c-0.86 0.28-1.7 0.63-2.5 1.03l-9.47-9.46zm23.97 8.44v-13.4c4.28 0.82 8.36 2.51 11.97 4.97l-9.47 9.47c-0.8-0.41-1.64-0.76-2.5-1.04zm10.99 9.52 9.47-9.47c2.46 3.62 4.15 7.69 4.97 11.97h-13.4c-0.29-0.86-0.64-1.7-1.04-2.5zm-48.42 2.5c0.82-4.28 2.51-8.36 4.97-11.97l9.47 9.47c-0.4 0.81-0.75 1.64-1.03 2.5h-13.41zm31.43 14c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm18.02-2h13.4c-0.82 4.28-2.51 8.36-4.97 11.97l-9.47-9.47c0.41-0.8 0.76-1.64 1.04-2.5zm-49.45 0h13.4c0.28 0.86 0.63 1.7 1.03 2.5l-9.47 9.47c-2.45-3.61-4.14-7.69-4.96-11.97zm13.46 20.46 9.47-9.47c0.81 0.4 1.64 0.75 2.5 1.03v13.4c-4.28-0.81-8.36-2.5-11.97-4.96zm23.97-8.44c0.86-0.28 1.7-0.63 2.5-1.03l9.47 9.47c-3.62 2.46-7.69 4.15-11.97 4.97v-13.41z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.74 61.28c-0.18-0.18-0.44-0.28-0.7-0.28h-5.25c-0.52 0-0.94-0.39-0.99-0.91-0.79-8.11-3.99-15.51-8.89-21.47-0.33-0.4-0.31-0.98 0.06-1.34l3.71-3.71c0.18-0.18 0.3-0.43 0.3-0.69-0.01-3.66-3.49-4.6-5.27-2.82l-2.98 2.98c-0.36 0.36-0.94 0.39-1.34 0.06-5.96-4.9-13.36-8.11-21.47-8.89-0.53-0.06-0.92-0.48-0.92-1v-5.25c0-0.26-0.1-0.52-0.28-0.7-2.6-2.58-5.72-0.79-5.72 1.74v4.21c0 0.52-0.39 0.94-0.91 0.99-8.11 0.79-15.51 3.99-21.47 8.89-0.4 0.33-0.98 0.31-1.34-0.06l-3.71-3.71c-0.18-0.18-0.43-0.3-0.69-0.3-3.66 0.01-4.6 3.49-2.82 5.27l2.98 2.98c0.36 0.36 0.39 0.94 0.06 1.34-4.9 5.96-8.11 13.36-8.89 21.47-0.06 0.53-0.48 0.92-1 0.92h-5.25c-0.26 0-0.52 0.1-0.7 0.28-2.58 2.6-0.79 5.72 1.74 5.72h4.21c0.52 0 0.94 0.39 0.99 0.91 0.79 8.11 3.99 15.51 8.89 21.47 0.33 0.4 0.31 0.98-0.06 1.34l-3.71 3.71c-0.18 0.18-0.3 0.44-0.3 0.7 0.01 3.66 3.49 4.6 5.28 2.81l2.98-2.98c0.36-0.36 0.94-0.39 1.34-0.06 5.96 4.9 13.36 8.11 21.47 8.89 0.51 0.05 0.91 0.47 0.91 0.99v5.25c0 0.26 0.1 0.52 0.28 0.7 2.6 2.58 5.72 0.78 5.72-1.74v-4.21c0-0.52 0.39-0.94 0.91-0.99 8.11-0.79 15.51-3.99 21.47-8.89 0.4-0.33 0.98-0.31 1.34 0.06l3.71 3.71c0.18 0.18 0.44 0.3 0.7 0.3 3.66-0.01 4.6-3.49 2.81-5.28l-2.98-2.98c-0.36-0.36-0.39-0.94-0.06-1.34 4.9-5.96 8.11-13.36 8.89-21.47 0.05-0.51 0.47-0.91 0.99-0.91h4.22c2.53 0.01 4.32-3.11 1.74-5.71zm-43.74-31.03c0-0.59 0.52-1.07 1.11-1 6.58 0.77 12.6 3.37 17.55 7.28 0.47 0.37 0.5 1.07 0.08 1.49l-12.18 12.18c-0.33 0.33-0.84 0.38-1.24 0.13-1.39-0.84-2.91-1.48-4.53-1.87-0.46-0.11-0.79-0.5-0.79-0.97v-17.24zm-24.66 6.28c4.95-3.91 10.97-6.51 17.55-7.28 0.59-0.07 1.11 0.41 1.11 1v17.24c0 0.47-0.33 0.86-0.79 0.97-1.62 0.39-3.14 1.03-4.53 1.87-0.4 0.24-0.91 0.2-1.24-0.13l-12.17-12.18c-0.42-0.42-0.4-1.12 0.07-1.49zm-5.81 5.81c0.37-0.47 1.07-0.5 1.49-0.08l12.18 12.18c0.33 0.33 0.38 0.84 0.13 1.24-0.84 1.39-1.48 2.91-1.87 4.53-0.11 0.46-0.5 0.79-0.97 0.79h-17.24c-0.59 0-1.07-0.52-1-1.11 0.77-6.58 3.37-12.6 7.28-17.55zm1.49 43.39c-0.42 0.42-1.12 0.39-1.49-0.08-3.91-4.95-6.51-10.97-7.28-17.55-0.07-0.59 0.41-1.11 1-1.11h17.24c0.47 0 0.86 0.33 0.97 0.79 0.39 1.62 1.03 3.14 1.87 4.53 0.24 0.4 0.2 0.91-0.13 1.24l-12.18 12.18zm22.98 12.02c0 0.59-0.52 1.07-1.11 1-6.58-0.77-12.6-3.37-17.55-7.28-0.47-0.37-0.5-1.07-0.08-1.49l12.18-12.18c0.33-0.33 0.84-0.38 1.24-0.13 1.39 0.84 2.91 1.48 4.53 1.87 0.46 0.11 0.79 0.5 0.79 0.97v17.24zm3-22.75c-6.08 0-11-4.92-11-11s4.92-11 11-11 11 4.92 11 11-4.92 11-11 11zm21.66 16.47c-4.95 3.91-10.97 6.51-17.55 7.28-0.59 0.07-1.11-0.41-1.11-1v-17.24c0-0.47 0.33-0.86 0.79-0.97 1.62-0.39 3.14-1.03 4.53-1.87 0.4-0.24 0.91-0.2 1.24 0.13l12.17 12.17c0.42 0.43 0.4 1.13-0.07 1.5zm5.81-5.81c-0.37 0.47-1.07 0.5-1.49 0.08l-12.18-12.18c-0.33-0.33-0.38-0.84-0.13-1.24 0.84-1.39 1.48-2.91 1.87-4.53 0.11-0.46 0.5-0.79 0.97-0.79h17.24c0.59 0 1.07 0.52 1 1.11-0.77 6.58-3.37 12.6-7.28 17.55zm6.28-24.66h-17.24c-0.47 0-0.86-0.33-0.97-0.79-0.39-1.62-1.03-3.14-1.87-4.53-0.24-0.4-0.2-0.91 0.13-1.24l12.17-12.17c0.42-0.42 1.12-0.39 1.49 0.08 3.91 4.95 6.51 10.97 7.28 17.55 0.08 0.58-0.4 1.1-0.99 1.1z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = WheelOfDharma;