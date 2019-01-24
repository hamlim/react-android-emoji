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

function StopButton(props) {
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
          "m89.2 36c1.55 0 2.8 1.25 2.8 2.8v50.4c0 1.55-1.25 2.8-2.8 2.8h-50.4c-1.55 0-2.8-1.25-2.8-2.8v-50.4c0-1.55 1.25-2.8 2.8-2.8h50.4m0-3h-50.4c-3.2 0-5.8 2.6-5.8 5.8v50.4c0 3.2 2.6 5.8 5.8 5.8h50.4c3.2 0 5.8-2.6 5.8-5.8v-50.4c0-3.2-2.6-5.8-5.8-5.8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.2 92h-50.4c-1.55 0-2.8-1.25-2.8-2.8v-50.4c0-1.55 1.25-2.8 2.8-2.8h50.4c1.55 0 2.8 1.25 2.8 2.8v50.4c0 1.55-1.25 2.8-2.8 2.8z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = StopButton;
