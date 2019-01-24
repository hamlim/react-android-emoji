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

function Emoji0x25c0(props) {
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
          "m81.72 36c1.19 0 2.28 0.98 2.28 2.34v51.32c0 1.36-1.09 2.34-2.28 2.34-0.38 0-0.76-0.1-1.12-0.31l-43.45-25.66c-1.53-0.9-1.53-3.16 0-4.05l43.45-25.67c0.36-0.21 0.75-0.31 1.12-0.31m0-3c-0.92 0-1.84 0.25-2.64 0.72l-43.46 25.67c-1.64 0.96-2.62 2.69-2.62 4.61s0.98 3.65 2.63 4.61l43.44 25.66c0.82 0.48 1.73 0.73 2.65 0.73 2.91 0 5.28-2.39 5.28-5.34v-51.32c0-2.95-2.37-5.34-5.28-5.34z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M84,64V38.34c0-1.79-1.89-2.91-3.4-2.03L37.15,61.97c-1.53,0.9-1.53,3.16,0,4.05L80.6,91.69 c1.52,0.89,3.4-0.23,3.4-2.03V64z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Emoji0x25c0;
