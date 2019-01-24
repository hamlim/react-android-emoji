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

function Emoji0x1f3fb(props) {
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
        y1: 4.5,
        y2: 123.82,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F9DDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FADCBA",
        offset: 0.3705
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD8AF",
        offset: 0.6842
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD39E",
        offset: 0.9763
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD29C",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      fill: "url(#a)"
    })
  );
}

exports.default = Emoji0x1f3fb;
