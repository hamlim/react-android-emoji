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

function Scorpius(props) {
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
        stopColor: "#26A69A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#21A194",
        offset: 0.2717
      }),
      _react2.default.createElement("stop", {
        stopColor: "#149184",
        offset: 0.6237
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00796B",
        offset: 1
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
          "m68.15 28.83c0.17 0 0.34 0 0.51 0.01 8.7 0.27 15.49 7.7 15.49 16.41v21.85c-0.57 17.15 5.24 20.03 8.44 20.03 0.8 0 1.43-0.18 1.77-0.36 2.29-1.25 3.49-4.03 3.5-7.45 0-0.02 0-0.03 0.01-0.05h-2c-1.49 0-2.45-1.56-1.79-2.89l6-8c0.37-0.74 1.08-1.11 1.79-1.11s1.42 0.37 1.79 1.11l6 8c0.66 1.33-0.3 2.89-1.79 2.89h-2c-0.08 5.25-2.66 11.07-6.91 13.83-1.33 0.86-4.27 2.07-7.65 2.07-1.75 0-3.62-0.32-5.45-1.19-10.68-5.06-9.74-19.71-9.74-28.55 0-1.42 0.06-20.61 0.06-20.61 0-4.41-3.59-8-8-8-0.18 0-0.36 0.01-0.55 0.02-4.25 0.28-7.45 4.01-7.45 8.26v43.72c0 2.21-1.79 4-4 4-0.13 0-0.26-0.01-0.39-0.02-2.08-0.2-3.61-2.06-3.61-4.15v-43.82c0-4.41-3.59-8-8-8-0.18 0-0.36 0.01-0.55 0.02-4.25 0.28-7.45 4.01-7.45 8.26v43.72c0 2.21-1.79 4-4 4-0.13 0-0.26-0.01-0.39-0.02-2.08-0.2-3.61-2.06-3.61-4.15v-43.42c0-8.71 6.78-16.13 15.49-16.41 0.17-0.01 0.34-0.01 0.51-0.01 4.37 0 8.33 1.76 11.22 4.61 0.22 0.21 0.5 0.32 0.78 0.32s0.57-0.11 0.78-0.32c2.86-2.84 6.82-4.6 11.19-4.6m0-3c-4.42 0-8.61 1.51-12 4.29-3.39-2.78-7.58-4.29-12-4.29-0.2 0-0.4 0-0.61 0.01-10.14 0.32-18.39 9.02-18.39 19.41v43.42c0 3.66 2.78 6.79 6.32 7.13 0.23 0.02 0.45 0.03 0.68 0.03 3.86 0 7-3.14 7-7v-43.72c0-2.78 2.04-5.1 4.65-5.27 0.12-0.01 0.23-0.01 0.35-0.01 2.76 0 5 2.24 5 5v43.83c0 3.67 2.78 6.8 6.32 7.14 0.23 0.02 0.45 0.03 0.68 0.03 3.86 0 7-3.14 7-7v-43.72c0-2.78 2.04-5.1 4.65-5.27 0.12-0.01 0.23-0.01 0.35-0.01 2.76 0 5 2.24 5 5 0 0-0.06 19.19-0.06 20.61 0 0.63 0 1.29-0.01 1.97-0.07 9.47-0.17 23.77 11.47 29.29 2.07 0.98 4.34 1.48 6.73 1.48 3.95 0 7.47-1.38 9.29-2.55 4.14-2.69 7.17-7.85 8.03-13.41 1.44-0.22 2.72-1.05 3.5-2.32 0.92-1.48 1-3.3 0.22-4.86-0.08-0.16-0.18-0.31-0.28-0.46l-5.87-7.83c-0.89-1.53-2.52-2.48-4.32-2.48s-3.42 0.94-4.32 2.48l-5.87 7.83c-0.11 0.14-0.2 0.3-0.28 0.46-0.78 1.56-0.7 3.38 0.22 4.86 0.66 1.07 1.67 1.83 2.84 2.17-0.32 0.93-0.81 1.64-1.44 2.02-0.07 0.02-0.22 0.04-0.41 0.04-0.55 0-1.39-0.19-2.26-1.09-1.34-1.38-3.53-5.28-3.18-15.84v-0.1-21.85c0-10.38-8.25-19.09-18.39-19.41-0.21-0.01-0.41-0.01-0.61-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.64 76.37-6-8c-0.74-1.47-2.84-1.47-3.58 0l-6 8c-0.66 1.33 0.3 2.89 1.79 2.89h2c0 0.02-0.01 0.03-0.01 0.05-0.01 3.42-1.21 6.2-3.5 7.45-1.67 0.91-10.92 1.75-10.2-19.67v-21.84c0-8.71-6.78-16.14-15.49-16.41-4.58-0.14-8.73 1.65-11.73 4.6-0.43 0.43-1.14 0.43-1.57 0-3-2.96-7.15-4.75-11.73-4.6-8.7 0.27-15.49 7.7-15.49 16.41v43.42c0 2.09 1.53 3.95 3.61 4.15 2.39 0.23 4.39-1.64 4.39-3.98v-43.73c0-4.26 3.2-7.98 7.45-8.26 4.66-0.31 8.55 3.39 8.55 7.98v43.83c0 2.09 1.53 3.95 3.61 4.15 2.39 0.23 4.39-1.64 4.39-3.98v-43.72c0-4.26 3.2-7.98 7.45-8.26 4.66-0.31 8.55 3.39 8.55 7.98 0 0-0.06 19.19-0.06 20.61 0 8.83-0.94 23.49 9.74 28.55 5.35 2.54 11.08 0.43 13.1-0.88 4.25-2.76 6.83-8.58 6.91-13.83h2c1.51-0.01 2.48-1.58 1.82-2.91z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Scorpius;
