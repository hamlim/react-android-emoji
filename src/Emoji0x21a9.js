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

function Emoji0x21a9(props) {
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
          "m84 22c15.46 0 28 14.33 28 32s-12.54 32-28 32h-34c-1.1 0-2 0.9-2 2v13.99c0 2.39-1.96 4.01-4.02 4.01-0.9 0-1.82-0.31-2.61-1l-24-23.99c-1.82-1.59-1.82-4.43 0-6.02l24-23.99c0.79-0.69 1.71-1 2.61-1 2.06 0 4.02 1.62 4.02 4.01v13.99c0 1.1 0.9 2 2 2h34c6.5 0 12-7.33 12-16s-5.5-16-12-16h-32c-2.21 0-4-1.79-4-4v-8c0-2.21 1.79-4 4-4h32m0-3h-32c-3.86 0-7 3.14-7 7v8c0 3.86 3.14 7 7 7h32c4.79 0 9 6.07 9 13s-4.21 13-9 13h-33v-12.99c0-3.86-3.15-7.01-7.02-7.01-1.68 0-3.3 0.62-4.59 1.74l-0.08 0.07-24 24c-1.47 1.32-2.31 3.21-2.31 5.19s0.84 3.87 2.31 5.19l23.94 23.93 0.14 0.14c1.28 1.12 2.91 1.74 4.59 1.74 3.87 0 7.02-3.14 7.02-7.01v-12.99h33c17.09 0 31-15.7 31-35s-13.91-35-31-35z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M84,22H52c-2.21,0-4,1.79-4,4v8c0,2.21,1.79,4,4,4h32c6.5,0,12,7.33,12,16s-5.5,16-12,16H50 c-1.1,0-2-0.9-2-2V54.01c0-3.44-4.05-5.27-6.63-3.01l-24,23.99c-1.82,1.59-1.82,4.43,0,6.02l24,23.99 c2.59,2.26,6.63,0.43,6.63-3.01V88c0-1.1,0.9-2,2-2h34c15.46,0,28-14.33,28-32S99.46,22,84,22z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Emoji0x21a9;
