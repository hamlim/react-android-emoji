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

function NoEntrySign(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 52,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 5,
        y2: 123.39,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F33B3B",
        offset: 0.324
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,4C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4z M112,64 c0,11.08-3.78,21.28-10.11,29.41l-67.3-67.3C42.72,19.78,52.92,16,64,16C90.47,16,112,37.53,112,64z M16,64 c0-11.08,3.78-21.28,10.11-29.41l67.3,67.3C85.28,108.22,75.08,112,64,112C37.53,112,16,90.47,16,64z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7c31.43 0 57 25.57 57 57s-25.57 57-57 57-57-25.57-57-57 25.57-57 57-57m37.89 89.41c0.06 0 0.12 0 0.19-0.01 0.86-0.05 1.65-0.47 2.18-1.15 7.03-9.03 10.74-19.84 10.74-31.25 0-28.12-22.88-51-51-51-11.41 0-22.22 3.71-31.25 10.74-0.68 0.53-1.1 1.32-1.15 2.18s0.26 1.7 0.87 2.31l67.3 67.3c0.57 0.57 1.33 0.88 2.12 0.88m-37.89 18.59c11.41 0 22.22-3.71 31.25-10.74 0.68-0.53 1.1-1.32 1.15-2.18s-0.26-1.7-0.87-2.31l-67.3-67.3c-0.56-0.56-1.33-0.88-2.12-0.88-0.06 0-0.12 0-0.19 0.01-0.86 0.05-1.65 0.47-2.18 1.15-7.03 9.03-10.74 19.84-10.74 31.25 0 28.12 22.88 51 51 51m0-111c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60zm37.89 89.41-67.3-67.3c8.13-6.33 18.33-10.11 29.41-10.11 26.47 0 48 21.53 48 48 0 11.08-3.78 21.28-10.11 29.41zm-37.89 18.59c-26.47 0-48-21.53-48-48 0-11.08 3.78-21.28 10.11-29.41l67.3 67.3c-8.13 6.33-18.33 10.11-29.41 10.11z",
        fill: "#424242"
      })
    )
  );
}

exports.default = NoEntrySign;
