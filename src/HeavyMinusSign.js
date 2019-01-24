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

function HeavyMinusSign(props) {
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
        y1: 51.661,
        y2: 76.04,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120 52h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120 55c0.55 0 1 0.45 1 1v16c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-16c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = HeavyMinusSign;
