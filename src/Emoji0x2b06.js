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

function Emoji0x2b06(props) {
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
        y2: 124.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C4FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2DB5F9",
        offset: 0.3517
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
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
          "m64 22c1.11 0 2.21 0.46 3.01 1.37l23.99 24c2.26 2.59 0.43 6.63-3.01 6.63h-13.99c-1.1 0-2 0.9-2 2v46c0 2.21-1.79 4-4 4h-8c-2.21 0-4-1.79-4-4v-46c0-1.1-0.9-2-2-2h-13.99c-3.44 0-5.27-4.05-3.01-6.63l23.99-24c0.8-0.91 1.9-1.37 3.01-1.37m0-3c-1.98 0-3.87 0.84-5.19 2.31l-24.07 24.07c-1.83 2.09-2.26 4.97-1.11 7.5s3.59 4.11 6.37 4.11h13v45c0 3.86 3.14 7 7 7h8c3.86 0 7-3.14 7-7v-44.99h12.99c2.78 0 5.22-1.57 6.37-4.11 1.15-2.53 0.73-5.41-1.11-7.5l-0.14-0.14-23.92-23.94c-1.32-1.47-3.21-2.31-5.19-2.31z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M37,47.37l23.99-24c1.59-1.82,4.43-1.82,6.02,0l23.99,24c2.26,2.59,0.43,6.63-3.01,6.63H74 c-1.1,0-2,0.9-2,2v46c0,2.21-1.79,4-4,4h-8c-2.21,0-4-1.79-4-4V56c0-1.1-0.9-2-2-2H40.01C36.57,54,34.73,49.95,37,47.37z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Emoji0x2b06;
