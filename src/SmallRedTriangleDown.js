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

function SmallRedTriangleDown(props) {
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
        y1: 36,
        y2: 91.637,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0403E",
        offset: 0.5777
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.66 89.94-28-48.53c-1.24-2.49 0.56-5.41 3.34-5.41h56c2.78 0 4.58 2.92 3.34 5.4l-28 48.53c-1.37 2.76-5.3 2.76-6.68 0.01z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m92 39c0.34 0 0.53 0.19 0.62 0.35 0.09 0.15 0.17 0.38 0.06 0.66l-27.94 48.43-0.08 0.16c-0.17 0.33-0.45 0.4-0.66 0.4s-0.49-0.07-0.66-0.41l-0.08-0.16-27.94-48.42c-0.12-0.28-0.04-0.51 0.06-0.66 0.09-0.16 0.28-0.35 0.62-0.35h56m0-3h-56c-2.78 0-4.58 2.92-3.34 5.4l28 48.53c0.69 1.38 2.02 2.07 3.34 2.07 1.33 0 2.65-0.69 3.34-2.06l28-48.53c1.24-2.49-0.56-5.41-3.34-5.41z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SmallRedTriangleDown;
