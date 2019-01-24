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

function ArrowUpSmall(props) {
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
        y2: 123.91,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
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
          "m64 36c0.9 0 1.79 0.45 2.3 1.34l29.18 50.69c1.01 1.77-0.27 3.97-2.3 3.97h-58.36c-2.04 0-3.31-2.2-2.3-3.97l29.18-50.69c0.51-0.89 1.4-1.34 2.3-1.34m0-3c-2.05 0-3.89 1.06-4.91 2.85l-29.17 50.68c-1.02 1.78-1.01 3.89 0.01 5.65s2.85 2.82 4.89 2.82h58.36c2.04 0 3.87-1.05 4.89-2.82 1.02-1.76 1.03-3.87 0.02-5.64l-29.19-50.7c-1.01-1.78-2.85-2.84-4.9-2.84z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,92h29.18c2.04,0,3.31-2.2,2.3-3.97L66.3,37.34c-1.02-1.78-3.59-1.78-4.61,0L32.52,88.03 C31.51,89.8,32.78,92,34.82,92H64z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = ArrowUpSmall;
