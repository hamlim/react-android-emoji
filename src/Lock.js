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

function Lock(props) {
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
        "M73.45,78.55h0.77c5.58,0,10.11-4.53,10.11-10.11V29.89c0-5.72-4.68-10.4-10.4-10.4H53.9 c-5.63,0-10.23,4.6-10.23,10.23v20.62c0,2.15-1.74,3.89-3.89,3.89h-7.72c-2.15,0-3.89-1.74-3.89-3.89V29.89 C28.18,15.65,39.83,4,54.07,4h20.16c14.14,0,25.6,11.46,25.6,25.6v38.61c0,14.21-11.62,25.83-25.83,25.83h-0.54V78.55z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M74.22,7c12.46,0,22.6,10.14,22.6,22.6v38.61c0,11.76-8.94,21.47-20.37,22.7v-9.55 c6.17-1.06,10.88-6.45,10.88-12.92V29.89c0-7.39-6.01-13.4-13.4-13.4H53.9c-7.3,0-13.23,5.94-13.23,13.23v20.62 c0,0.49-0.4,0.89-0.89,0.89h-7.72c-0.49,0-0.89-0.4-0.89-0.89V29.89C31.18,17.27,41.45,7,54.07,7H74.22 M74.22,4H54.07 C39.83,4,28.18,15.65,28.18,29.89v20.45c0,2.15,1.74,3.89,3.89,3.89h7.72c2.15,0,3.89-1.74,3.89-3.89V29.72 c0-5.63,4.6-10.23,10.23-10.23h20.03c5.72,0,10.4,4.68,10.4,10.4v38.55c0,5.58-4.53,10.11-10.11,10.11h-0.77v15.49h0.54 c14.21,0,25.83-11.62,25.83-25.83V29.6C99.82,15.46,88.36,4,74.22,4L74.22,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 123.04,
        y2: 50.312,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 0.0053611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m103.1 124h-78.2c-4.04 0-7.32-3.28-7.32-7.32v-59.41c0-4.04 3.28-7.32 7.32-7.32h78.2c4.04 0 7.32 3.28 7.32 7.32v59.41c-0.01 4.04-3.28 7.32-7.32 7.32z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.1 52.96c2.38 0 4.32 1.94 4.32 4.32v59.41c0 2.38-1.94 4.32-4.32 4.32h-78.2c-2.38 0-4.32-1.94-4.32-4.32v-59.42c0-2.38 1.94-4.32 4.32-4.32h78.2m0-2.99h-78.2c-4.04 0-7.32 3.28-7.32 7.32v59.41c0 4.04 3.28 7.32 7.32 7.32h78.2c4.04 0 7.32-3.28 7.32-7.32v-59.42c-0.01-4.04-3.28-7.31-7.32-7.31z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Lock;
