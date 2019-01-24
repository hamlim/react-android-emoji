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

function Emoji0x1f1f3(props) {
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
        "m108.54 15.2h-21.89c-1.31 0-2.36 1.06-2.36 2.36v62.91l-40.94-64.18c-0.43-0.68-1.18-1.09-1.99-1.09h-21.9c-1.3 0-2.36 1.06-2.36 2.36v100.97c0 1.3 1.06 2.36 2.36 2.36h21.9c1.3 0 2.37-1.06 2.37-2.36v-62.92l40.93 64.18c0.43 0.68 1.19 1.09 2 1.09h21.89c1.3 0 2.36-1.06 2.36-2.36v-100.96c-0.01-1.3-1.07-2.36-2.37-2.36z",
      fill: "#40C0E7"
    })
  );
}

exports.default = Emoji0x1f1f3;
