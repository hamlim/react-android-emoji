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

function Emoji0x2666(props) {
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
        y1: 102.26,
        y2: 24.059,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.2153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.6952
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.47 121.86-46.15-53.93c-1.96-2.26-1.96-5.6 0-7.86l46.15-53.93c2.39-2.76 6.67-2.76 9.07 0l46.15 53.93c1.96 2.26 1.96 5.6 0 7.86l-46.15 53.93c-2.4 2.76-6.68 2.76-9.07 0z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 8.07c0.34 0 0.99 0.09 1.49 0.67l46.16 53.95c0.65 0.75 0.65 1.87-0.02 2.64l-46.13 53.91c-0.52 0.6-1.17 0.69-1.51 0.69s-0.99-0.09-1.49-0.67l-46.16-53.95c-0.65-0.75-0.65-1.87 0.02-2.64l46.13-53.91c0.52-0.6 1.17-0.69 1.51-0.69m0-4c-1.67 0-3.34 0.69-4.53 2.07l-46.15 53.93c-1.96 2.26-1.96 5.6 0 7.86l46.15 53.93c1.2 1.38 2.86 2.07 4.53 2.07s3.34-0.69 4.53-2.07l46.15-53.93c1.96-2.26 1.96-5.6 0-7.86l-46.15-53.93c-1.19-1.38-2.86-2.07-4.53-2.07z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Emoji0x2666;
