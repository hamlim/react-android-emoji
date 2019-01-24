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

function Emoji0x20e3(props) {
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
        id: "b",
        x1: 5.5161,
        x2: 118.82,
        y1: 5.2803,
        y2: 119.05,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0094D6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#b)"
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
      "linearGradient",
      {
        id: "a",
        x1: 21.247,
        x2: 106.25,
        y1: 20.744,
        y2: 106.74,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C2ECFF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDEAFE",
        offset: 0.157
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AEE3FA",
        offset: 0.3484
      }),
      _react2.default.createElement("stop", {
        stopColor: "#95D7F5",
        offset: 0.5578
      }),
      _react2.default.createElement("stop", {
        stopColor: "#73C7ED",
        offset: 0.7789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#49B3E3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101 109h-74c-4.42 0-8-3.58-8-8v-74c0-4.42 3.58-8 8-8h74c4.42 0 8 3.58 8 8v74c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    })
  );
}

exports.default = Emoji0x20e3;
