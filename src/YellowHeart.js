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

function YellowHeart(props) {
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
      "radialGradient",
      {
        id: "a",
        cx: 63.499,
        cy: -3.0836,
        r: 76.735,
        gradientTransform: "matrix(.9985 0 0 .9337 .0985 4.2468)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.4763
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0.8779
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M94.01,9C72.09,9,64.04,35.21,64.04,35.21S56.09,9,34.01,9C17.42,9-1.5,22.15,5.49,52.03 C12.48,81.92,63.83,119,63.83,119s0.26-0.1,0.26-0.27c0,0.16,0.17,0.25,0.17,0.25s51.25-37.06,58.24-66.94 C129.5,22.15,110.6,9,94.01,9z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M94.01,12c8.44,0,16.38,3.67,21.25,9.81c5.67,7.15,7.16,17.37,4.32,29.55 c-5.99,25.62-47.08,57.67-55.56,64.06c-8.55-6.44-49.63-38.47-55.62-64.06c-2.85-12.17-1.35-22.38,4.32-29.53 C17.61,15.67,25.56,12,34.01,12c19.55,0,27.08,23.84,27.16,24.08l2.84,9.36l2.9-9.34C66.98,35.85,74.6,12,94.01,12 M94.01,9 C72.09,9,64.04,35.21,64.04,35.21S56.09,9,34.01,9C17.42,9-1.5,22.15,5.49,52.03C12.48,81.92,63.83,119,63.83,119 s0.26-0.1,0.26-0.27c0,0.16,0.17,0.25,0.17,0.25s51.25-37.06,58.24-66.94C129.5,22.15,110.6,9,94.01,9L94.01,9z",
        fill: "#424242"
      })
    )
  );
}

exports.default = YellowHeart;
