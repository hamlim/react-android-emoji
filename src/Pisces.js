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

function Pisces(props) {
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
        stopColor: "#EC407A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E63B76",
        offset: 0.2899
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D62B6A",
        offset: 0.6645
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C2185B",
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
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m34.98 29.08c0.82 0 1.7 0.25 2.56 0.76 7.11 4.26 12.43 15.52 13.47 29.24 0.04 0.51 0.47 0.92 0.99 0.92h24c0.52 0 0.95-0.41 0.99-0.93 1.07-13.99 6.58-25.42 13.91-29.48 0.61-0.34 1.26-0.5 1.89-0.5 2.05 0 3.94 1.64 4 3.9 0.04 1.49-0.8 2.9-2.1 3.63-3.99 2.26-8.59 10.49-9.66 22.28-0.05 0.58 0.42 1.09 1 1.09h10.58c2.09 0 3.95 1.53 4.15 3.61 0.24 2.39-1.63 4.4-3.97 4.4h-10.76c-0.59 0-1.05 0.51-1 1.09 1.07 11.89 5.75 20.15 9.75 22.34 1.53 0.83 2.31 2.65 1.89 4.41-0.47 2.01-1.95 3.09-3.66 3.09-0.82 0-1.7-0.25-2.55-0.76-7.11-4.26-12.43-15.52-13.47-29.24-0.04-0.52-0.47-0.93-0.99-0.93h-24c-0.52 0-0.95 0.41-0.99 0.93-1.07 13.99-6.58 25.42-13.91 29.48-0.61 0.34-1.26 0.5-1.89 0.5-2.05 0-3.94-1.64-4-3.9-0.04-1.49 0.8-2.9 2.1-3.63 3.99-2.26 8.59-10.49 9.66-22.28 0.05-0.58-0.42-1.09-1-1.09h-10.76c-2.34 0-4.21-2.01-3.98-4.39 0.2-2.08 2.06-3.61 4.15-3.61h10.59c0.59 0 1.05-0.51 1-1.09-1.07-11.89-5.75-20.15-9.75-22.34-1.53-0.83-2.31-2.65-1.89-4.41 0.47-2.02 1.94-3.09 3.65-3.09m0-3c-3.22 0-5.81 2.12-6.58 5.4-0.72 3.07 0.66 6.25 3.38 7.73 2.61 1.42 6.61 7.79 7.96 17.79h-8.35c-3.67 0-6.8 2.78-7.14 6.32-0.19 1.97 0.46 3.93 1.79 5.39 1.32 1.46 3.21 2.29 5.18 2.29h8.53c-0.71 5.32-2.11 9.16-3.22 11.53-2.11 4.51-4.12 5.91-4.69 6.23-2.31 1.31-3.69 3.73-3.62 6.33 0.11 3.76 3.25 6.81 7 6.81 1.16 0 2.32-0.3 3.34-0.87 8.03-4.45 13.8-15.86 15.27-30.03h20.33c1.44 13.8 7.01 25.09 14.76 29.74 1.29 0.78 2.71 1.19 4.1 1.19 3.22 0 5.81-2.12 6.58-5.4 0.72-3.07-0.66-6.25-3.38-7.73-2.61-1.43-6.61-7.8-7.96-17.8h8.53c1.97 0 3.86-0.84 5.18-2.29 1.32-1.46 1.97-3.42 1.79-5.39-0.34-3.54-3.47-6.32-7.14-6.32h-8.35c0.71-5.32 2.11-9.16 3.22-11.54 2.11-4.51 4.12-5.91 4.69-6.23 2.31-1.31 3.69-3.73 3.62-6.33-0.11-3.76-3.25-6.81-7-6.81-1.16 0-2.32 0.3-3.34 0.87-8.05 4.46-13.82 15.87-15.29 30.04h-20.34c-1.44-13.79-7.01-25.09-14.76-29.74-1.29-0.77-2.7-1.18-4.09-1.18z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.62 60h-10.58c-0.59 0-1.05-0.51-1-1.09 1.07-11.79 5.67-20.02 9.66-22.28 1.3-0.74 2.14-2.14 2.1-3.63-0.09-2.96-3.28-4.85-5.89-3.41-7.32 4.06-12.84 15.49-13.91 29.48-0.05 0.52-0.48 0.93-1 0.93h-24c-0.52 0-0.95-0.41-0.99-0.93-1.04-13.71-6.37-24.97-13.47-29.24-2.63-1.58-5.51-0.65-6.21 2.33-0.41 1.76 0.36 3.57 1.89 4.41 4.01 2.18 8.68 10.45 9.75 22.34 0.05 0.58-0.42 1.09-1 1.09h-10.59c-2.09 0-3.95 1.53-4.15 3.61-0.23 2.38 1.64 4.39 3.98 4.39h10.76c0.59 0 1.05 0.51 1 1.09-1.07 11.79-5.67 20.02-9.66 22.28-1.3 0.74-2.14 2.14-2.1 3.63 0.09 2.96 3.28 4.85 5.89 3.41 7.32-4.06 12.84-15.49 13.91-29.48 0.04-0.52 0.47-0.93 0.99-0.93h24c0.52 0 0.95 0.41 0.99 0.93 1.04 13.71 6.37 24.97 13.47 29.24 2.63 1.57 5.51 0.65 6.21-2.33 0.41-1.76-0.36-3.57-1.89-4.41-4.01-2.18-8.68-10.45-9.75-22.34-0.05-0.58 0.42-1.09 1-1.09h10.76c2.34 0 4.21-2.01 3.98-4.39-0.2-2.08-2.06-3.61-4.15-3.61z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Pisces;