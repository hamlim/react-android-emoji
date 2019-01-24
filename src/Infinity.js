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

function Infinity(props) {
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
          "m89.29 44.46c11.97 0 21.71 9.66 21.71 21.53s-9.74 21.53-21.71 21.53c-10.7 0-18.28-7.44-25.29-15.57-7.07 8.18-14.63 15.57-25.29 15.57-11.97 0-21.71-9.66-21.71-21.53s9.74-21.53 21.71-21.53c10.7 0 18.51 7.59 25.29 15.41 6.78-7.81 14.6-15.41 25.29-15.41m-50.58 35.22c7.71 0 13.87-6.41 20.16-13.78-6.25-7.29-12.38-13.61-20.16-13.61-7.65 0-13.87 6.15-13.87 13.7-0.01 7.55 6.22 13.69 13.87 13.69m50.58 0.01c7.65 0 13.87-6.14 13.87-13.7 0-7.55-6.22-13.7-13.87-13.7h-0.01c-7.78 0-13.91 6.32-20.15 13.61 6.35 7.44 12.49 13.79 20.16 13.79m0-38.23c-10.51 0-18.42 6.4-25.29 13.9-6.87-7.5-14.78-13.9-25.29-13.9-13.62 0-24.71 11-24.71 24.53s11.08 24.53 24.71 24.53c10.89 0 18.78-6.85 25.29-14.04 6.5 7.19 14.38 14.04 25.3 14.04 13.62 0 24.71-11 24.71-24.53s-11.09-24.53-24.72-24.53zm-50.58 35.22c-6 0-10.87-4.8-10.87-10.7s4.88-10.7 10.87-10.7c5.92 0 11.08 4.82 16.19 10.62-5.16 5.89-10.35 10.78-16.19 10.78zm34.39-10.77c5.1-5.79 10.25-10.61 16.18-10.61 6 0 10.88 4.8 10.88 10.7s-4.88 10.7-10.87 10.7c-5.82-0.01-11.02-4.91-16.19-10.79z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.29 87.52c-10.7 0-18.28-7.44-25.29-15.57-7.07 8.18-14.63 15.57-25.29 15.57-11.97 0-21.71-9.66-21.71-21.53s9.74-21.53 21.71-21.53c10.7 0 18.51 7.59 25.29 15.41 6.78-7.81 14.6-15.41 25.29-15.41 11.97 0 21.71 9.66 21.71 21.53s-9.74 21.53-21.71 21.53zm-20.16-21.61c6.35 7.43 12.49 13.78 20.16 13.78 7.65 0 13.87-6.14 13.87-13.7 0-7.55-6.22-13.7-13.87-13.7-7.78 0-13.92 6.32-20.16 13.62zm-30.42-13.62c-7.65 0-13.87 6.15-13.87 13.7 0 7.56 6.22 13.7 13.87 13.7 7.71 0 13.87-6.41 20.16-13.78-6.25-7.3-12.38-13.62-20.16-13.62z",
      fill: "#fff"
    })
  );
}

exports.default = Infinity;
