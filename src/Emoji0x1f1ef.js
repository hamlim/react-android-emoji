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

function Emoji0x1f1ef(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m100.08 16.44h-24.64c-1.24 0-2.24 1-2.24 2.24v45.53c0.31 10.84-0.18 23.69-1.52 25.89-0.1 0.13-0.2 0.28-0.27 0.43-1.6 3.33-6.9 6.78-12.99 6.78-6.33 0-13.78-5.46-15.94-11.68-0.4-1.15-1.62-1.77-2.79-1.41l-20.47 6.41c-1.06 0.33-1.7 1.38-1.53 2.48 0.01 0.07 0.03 0.14 0.04 0.2 2.32 17.58 18.94 29.38 41.46 29.38 22.53 0 39.16-11.81 41.48-29.4 0.02-0.1 0.04-0.19 0.05-0.29 1.56-15.02 1.58-28.71 1.58-28.85v-45.47c0.02-1.23-0.98-2.24-2.22-2.24z",
      fill: "#40C0E7"
    })
  );
}

exports.default = Emoji0x1f1ef;
