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

function Loop(props) {
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
        y1: 28.659,
        y2: 101.73,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#80D8FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#79D6FF",
        offset: 0.1417
      }),
      _react2.default.createElement("stop", {
        stopColor: "#67D0FF",
        offset: 0.3402
      }),
      _react2.default.createElement("stop", {
        stopColor: "#49C7FF",
        offset: 0.5722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#20BAFF",
        offset: 0.8277
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00B0FF",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.22 34.39c-0.24 0.09-0.51 0.09-0.75-0.02-5.48-2.51-16.67-6.71-30.32-6.71s-24.85 4.2-30.32 6.7c-0.24 0.11-0.51 0.11-0.75 0.02-10.26-3.88-17.25-5.19-25.04-5.22-2.23 0-4.04 1.78-4.04 4v6.41c0 2.16 1.77 3.95 3.93 3.99 2.23 0.03 4.1 0.29 7.23 0.85 0.78 0.14 1.1 1.09 0.55 1.67-7.76 8.1-11.18 18.76-9.57 30.86 1.76 13.34 13.62 23.4 27.74 23.4 13.94 0 25.79-10.06 27.56-23.4 1.67-12.56-2.1-23.55-10.51-31.75-0.56-0.55-0.29-1.5 0.48-1.68 3.76-0.87 8.08-1.5 12.75-1.5 4.66 0 8.99 0.63 12.75 1.5 0.77 0.18 1.04 1.13 0.48 1.68-8.41 8.2-12.18 19.19-10.51 31.75 1.78 13.34 13.62 23.4 27.73 23.4 13.95 0 25.8-10.06 27.56-23.39 1.61-12.11-1.81-22.77-9.58-30.87-0.55-0.57-0.23-1.53 0.55-1.67 3.5-0.64 5.29-0.87 7.87-0.85 1.66 0.01 3-1.34 3-2.99v-7.4c0-2.21-1.8-4.01-4.01-4-7.75 0.02-14.52 1.33-24.78 5.22zm-48.01 40.67c-0.91 6.85-7.5 10.94-13.51 10.94-5.85 0-12.44-4.09-13.34-10.94-1.42-10.65 2.77-18.77 12.46-24.2 0.59-0.33 1.34-0.33 1.93 0 9.68 5.42 13.88 13.55 12.46 24.2zm60.73 0c-0.91 6.85-7.5 10.94-13.51 10.94-5.84 0-12.43-4.09-13.34-10.94-1.41-10.65 2.78-18.77 12.46-24.2 0.59-0.33 1.34-0.33 1.93 0 9.69 5.42 13.87 13.55 12.46 24.2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.15 30.66c13.07 0 23.82 4.03 29.07 6.44 0.52 0.24 1.07 0.36 1.65 0.36 0.48 0 0.96-0.09 1.42-0.26 9.6-3.64 16.02-5 23.72-5.03 0.55 0 0.99 0.45 0.99 1l0.03 7.39h-0.34c-2.69 0-4.67 0.28-8.09 0.9-1.45 0.26-2.64 1.3-3.09 2.71-0.45 1.4-0.1 2.93 0.91 3.99 7.21 7.52 10.24 17.34 8.77 28.4-1.57 11.85-12.14 20.79-24.59 20.79-12.54 0-23.18-8.94-24.76-20.79-1.53-11.48 1.81-21.58 9.63-29.21 1.04-1.02 1.45-2.53 1.06-3.93-0.39-1.41-1.52-2.49-2.95-2.82-4.54-1.05-9.05-1.58-13.42-1.58s-8.89 0.53-13.42 1.58c-1.42 0.33-2.55 1.41-2.95 2.82-0.39 1.41 0.01 2.91 1.05 3.93 7.82 7.63 11.15 17.74 9.63 29.21-1.58 11.84-12.15 20.78-24.59 20.78-12.55 0-23.2-8.94-24.77-20.79-1.47-11.06 1.56-20.88 8.77-28.4 1.02-1.06 1.37-2.59 0.91-3.99-0.46-1.41-1.64-2.44-3.1-2.7-3.05-0.55-5.19-0.86-7.72-0.9-0.51-0.01-0.97-0.47-0.97-0.99v-3.22-3.18c0-0.34 0.16-0.57 0.29-0.7 0.11-0.11 0.36-0.3 0.73-0.3 7.79 0.03 14.52 1.44 23.99 5.02 0.46 0.17 0.93 0.26 1.42 0.26 0.57 0 1.13-0.12 1.64-0.36 5.25-2.4 16.01-6.43 29.08-6.43m30.27 58.33c9.55 0 15.62-6.98 16.49-13.54 1.57-11.81-3.26-21.22-13.97-27.21-0.74-0.41-1.58-0.63-2.43-0.63s-1.69 0.22-2.43 0.63c-10.71 6-15.54 15.41-13.97 27.21 1.13 8.48 9.18 13.54 16.31 13.54m-60.72 0c9.53 0 15.61-6.98 16.49-13.54 1.56-11.8-3.27-21.21-13.97-27.21-0.74-0.41-1.58-0.63-2.43-0.63s-1.69 0.22-2.43 0.63c-10.71 6-15.54 15.41-13.97 27.21 1.12 8.48 9.17 13.54 16.31 13.54m30.45-61.33c-13.65 0-24.85 4.2-30.32 6.7-0.13 0.06-0.26 0.09-0.4 0.09-0.12 0-0.24-0.02-0.35-0.07-10.26-3.88-17.25-5.19-25.04-5.22h-0.02c-2.21 0-4.02 1.78-4.02 4v6.41c0 2.16 1.77 3.95 3.93 3.99 2.23 0.03 4.1 0.29 7.23 0.85 0.78 0.14 1.1 1.09 0.55 1.67-7.76 8.1-11.18 18.76-9.57 30.87 1.76 13.34 13.62 23.4 27.74 23.4 13.94 0 25.79-10.06 27.56-23.4 1.67-12.56-2.1-23.55-10.51-31.75-0.56-0.55-0.29-1.5 0.48-1.68 3.76-0.87 8.08-1.5 12.75-1.5 4.66 0 8.99 0.63 12.75 1.5 0.77 0.18 1.04 1.13 0.48 1.68-8.41 8.2-12.18 19.19-10.51 31.75 1.78 13.34 13.62 23.4 27.73 23.4 13.95 0 25.8-10.06 27.56-23.39 1.61-12.11-1.81-22.77-9.58-30.87-0.55-0.57-0.23-1.53 0.55-1.67 3.35-0.61 5.14-0.85 7.55-0.85h0.32 0.03c1.64 0 2.97-1.34 2.97-2.99v-7.4c0-2.21-1.79-4-3.99-4h-0.01c-7.74 0.03-14.51 1.33-24.77 5.22-0.11 0.04-0.23 0.07-0.35 0.07-0.14 0-0.27-0.03-0.4-0.09-5.5-2.52-16.69-6.72-30.34-6.72zm30.27 58.33c-5.84 0-12.43-4.09-13.34-10.94-1.41-10.65 2.78-18.77 12.46-24.2 0.3-0.17 0.63-0.25 0.97-0.25 0.33 0 0.67 0.08 0.97 0.25 9.69 5.43 13.88 13.55 12.46 24.2-0.91 6.85-7.5 10.94-13.52 10.94zm-60.72 0c-5.85 0-12.44-4.09-13.34-10.94-1.42-10.65 2.77-18.77 12.46-24.2 0.3-0.17 0.63-0.25 0.97-0.25 0.33 0 0.67 0.08 0.97 0.25 9.68 5.43 13.88 13.55 12.46 24.2-0.92 6.85-7.5 10.94-13.52 10.94z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Loop;
