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

function ArrowDownSmall(props) {
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
          "m93.49 39.71c2.05 0 3.33 2.21 2.32 3.99l-29.33 50.96c-0.51 0.9-1.41 1.34-2.32 1.34s-1.8-0.45-2.32-1.34l-29.32-50.96c-1.02-1.78 0.27-3.99 2.32-3.99h58.65m0-3h-58.66c-2.04 0-3.88 1.06-4.9 2.82-1.03 1.77-1.03 3.88-0.02 5.66l29.33 50.96c1.02 1.78 2.86 2.85 4.92 2.85s3.9-1.07 4.92-2.86l29.33-50.94c1.02-1.78 1.01-3.9-0.01-5.66-1.03-1.77-2.86-2.83-4.91-2.83z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64.16,39.71H34.83c-2.05,0-3.33,2.21-2.32,3.99l29.33,50.95c1.02,1.79,3.61,1.79,4.63,0L95.81,43.7 c1.02-1.78-0.27-3.99-2.32-3.99H64.16z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = ArrowDownSmall;
