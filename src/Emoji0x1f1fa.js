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

function Emoji0x1f1fa(props) {
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
        "m109.05 16.65h-24.63c-1.24 0-2.24 1-2.24 2.24v49.74c0 0.07-0.1 6.96-0.36 11.03-1.58 9.94-7.09 14.38-17.82 14.38s-16.23-4.43-17.79-14.17c-0.29-4.28-0.38-11.17-0.38-11.21v-49.77c0-1.24-1.01-2.24-2.24-2.24h-24.64c-1.23 0-2.24 1-2.24 2.24v49.76c0 0.32 0.02 7.82 1.09 16.76 1.64 10.26 7 19.63 11.59 24.37 2.99 3.07 14.3 13.11 34.61 13.11 20.32 0 31.62-10.04 34.61-13.11 4.59-4.73 9.95-14.1 11.6-24.45 1.08-8.87 1.09-16.37 1.09-16.68v-49.76c-0.01-1.24-1.01-2.24-2.25-2.24z",
      fill: "#40C0E7"
    })
  );
}

exports.default = Emoji0x1f1fa;
