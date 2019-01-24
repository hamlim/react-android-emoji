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

function StopSign(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      x: 50,
      y: -56.67,
      width: 0,
      height: 0.67,
      fill: "#F2F2F2"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 6,
        y2: 122.65,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "41.1 124 4 87.54 4 38.17 41.1 4 90.48 4 124 38.17 124 87.54 90.48 124",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.74 7.88 31.15 31.95 0.18 46.16-31.13 34.05-46.22 0.09-34.71-34.28-0.08-45.9 34.82-31.98 45.99-0.09m1.69-4.01-49.24 0.1-37.27 34.22 0.1 49.34 37.07 36.6 49.62-0.1 33.37-36.5-0.19-49.34-33.46-34.32z",
        fill: "#424242"
      })
    )
  );
}

exports.default = StopSign;
