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

function Thermometer(props) {
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
        "M76,80.34V16.29C76,9.77,70.82,4,64.3,4h-1.55C56.24,4,51,9.77,51,16.29v64.04 c-7,4.2-11.24,11.68-11.24,20.2c0,13.14,10.64,23.8,23.79,23.8s23.74-10.65,23.74-23.8C87.28,92.01,83,84.54,76,80.34z",
      fill: "#E1F5FE"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 67.014,
        x2: 63.285,
        y1: 38.588,
        y2: 104.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.5974
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m69.92 85.89v-62.07c0-3.53-2.86-6.39-6.39-6.39s-6.39 2.86-6.39 6.39v62.08c-5.82 2.54-9.83 8.44-9.58 15.25 0.3 8.19 6.99 14.96 15.18 15.36 9.19 0.44 16.78-6.87 16.78-15.96-0.01-6.57-3.95-12.19-9.6-14.66z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.87 39.76h-11.92v-6.39h11.92c1.66 0 3 1.34 3 3v0.39c0 1.66-1.34 3-3 3z",
      fill: "#616161"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.87 58.32h-11.92v-6.39h11.92c1.66 0 3 1.34 3 3v0.39c0 1.65-1.34 3-3 3z",
      fill: "#616161"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.87 76.88h-11.92v-6.39h11.92c1.66 0 3 1.34 3 3v0.39c0 1.65-1.34 3-3 3z",
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m69.92 85.89v-62.07c0-3.53-2.86-6.39-6.39-6.39s-6.39 2.86-6.39 6.39v62.08c-5.82 2.54-9.83 8.44-9.58 15.25 0.3 8.19 6.99 14.96 15.18 15.36 9.19 0.44 16.78-6.87 16.78-15.96-0.01-6.57-3.95-12.19-9.6-14.66z",
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64.15,7C68.87,7,73,11.26,73,16.29v64.04c0,1.05,0.55,2.03,1.46,2.57 c6.15,3.69,9.82,10.28,9.82,17.63c0,11.47-9.3,20.8-20.74,20.8c-11.46,0-20.79-9.33-20.79-20.8c0-7.36,3.66-13.95,9.79-17.63 c0.9-0.54,1.46-1.52,1.46-2.57V16.29C54,11.26,58.01,7,62.76,7H64 M64.3,4h-1.55C56.24,4,51,9.77,51,16.29v64.04 c-7,4.2-11.24,11.68-11.24,20.2c0,13.14,10.64,23.8,23.79,23.8s23.74-10.65,23.74-23.8c0-8.52-4.28-16-11.28-20.2V16.29 C76,9.77,70.82,4,64.3,4L64.3,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Thermometer;
