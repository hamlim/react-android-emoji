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

function Accept(props) {
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
        y1: 5.5,
        y2: 124.83,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#AED581",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A7D078",
        offset: 0.2385
      }),
      _react2.default.createElement("stop", {
        stopColor: "#93C35F",
        offset: 0.6284
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
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
          "m102.32 29.5c1.1 0 2 0.9 2 2v4.44c0 1.1-0.9 2-2 2h-6.81c-1.1 0-2 0.9-2 2v55.39c0 5.45-1.36 8.26-5.18 9.53-3.68 1.45-9.52 1.62-17.77 1.63-0.89 0-1.67-0.58-1.92-1.44-0.41-1.44-1.06-3.14-1.75-4.71-0.58-1.32 0.4-2.79 1.83-2.79h0.07c3.52 0.12 6.96 0.14 9.54 0.14 1.69 0 3.02-0.01 3.74-0.01 2-0.09 2.63-0.64 2.63-2.54v-55.19c0-1.1-0.9-2-2-2h-57.02c-1.1 0-2-0.9-2-2v-4.45c0-1.1 0.9-2 2-2h76.64m-34.33 20.34c1.1 0 2 0.9 2 2v30.14c0 1.1-0.9 2-2 2h-25.24c-1.1 0-2 0.9-2 2v3.08c0 1.1-0.9 2-2 2h-4.17c-1.1 0-2-0.9-2-2v-37.22c0-1.1 0.9-2 2-2h33.41m-25.24 26.15h16.88c1.1 0 2-0.9 2-2v-14.16c0-1.1-0.9-2-2-2h-16.88c-1.1 0-2 0.9-2 2v14.16c0 1.11 0.9 2 2 2m59.57-49.49h-76.64c-2.76 0-5 2.24-5 5v4.44c0 2.76 2.24 5 5 5h56.02v53.75h-0.77c-0.7 0-1.58 0.01-2.6 0.01-3.54 0-6.63-0.05-9.44-0.14h-0.17c-1.7 0-3.26 0.85-4.19 2.27-0.92 1.42-1.07 3.18-0.39 4.73 0.68 1.53 1.26 3.11 1.62 4.33 0.61 2.12 2.59 3.61 4.8 3.61 8.31-0.01 14.53-0.15 18.8-1.81 6.33-2.15 7.15-7.73 7.15-12.35v-54.39h5.81c2.76 0 5-2.24 5-5v-4.45c0-2.76-2.25-5-5-5zm-34.33 20.34h-33.41c-2.76 0-5 2.24-5 5v37.22c0 2.76 2.24 5 5 5h4.17c2.76 0 5-2.24 5-5v-2.08h24.24c2.76 0 5-2.24 5-5v-30.14c0-2.76-2.24-5-5-5zm-24.24 13.99h14.88v12.16h-14.88v-12.16z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102.32 37.95h-6.81c-1.1 0-2 0.9-2 2v55.39c0 5.45-1.36 8.26-5.18 9.53-3.68 1.45-9.52 1.62-17.77 1.63-0.89 0-1.67-0.58-1.92-1.44-0.41-1.44-1.06-3.14-1.75-4.71-0.59-1.34 0.44-2.84 1.9-2.79 5.84 0.19 11.45 0.13 13.28 0.13 2-0.09 2.63-0.64 2.63-2.54v-55.2c0-1.1-0.9-2-2-2h-57.02c-1.1 0-2-0.9-2-2v-4.45c0-1.1 0.9-2 2-2h76.63c1.1 0 2 0.9 2 2v4.44c0.01 1.11-0.89 2.01-1.99 2.01zm-61.57 48.03v3.08c0 1.1-0.9 2-2 2h-4.17c-1.1 0-2-0.9-2-2v-37.22c0-1.1 0.9-2 2-2h33.41c1.1 0 2 0.9 2 2v30.14c0 1.1-0.9 2-2 2h-25.24c-1.1 0-2 0.9-2 2zm0-26.15v14.16c0 1.1 0.9 2 2 2h16.88c1.1 0 2-0.9 2-2v-14.16c0-1.1-0.9-2-2-2h-16.88c-1.1 0-2 0.9-2 2z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Accept;
