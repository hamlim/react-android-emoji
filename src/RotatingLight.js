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

function RotatingLight(props) {
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
      x: -237,
      y: -56.67,
      width: 0,
      height: 0.67,
      fill: "#F2F2F2"
    }),
    _react2.default.createElement("rect", {
      x: 77.68,
      y: 42.01,
      width: 1.36,
      height: 0.37,
      fill: "#666"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.07,
        x2: 64.07,
        y1: 102.86,
        y2: 36.559,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.2346
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E73B33",
        offset: 0.5991
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.9106
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.02 104.15-0.21 15.76h-101.69l0.03-15.76 12.35-68.11c1.28-6.95 6.92-11.95 13.46-11.95h50.25c6.54 0 12.18 5 13.46 11.95l12.35 68.11z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.09,
      cy: 64.09,
      rx: 30.46,
      ry: 33,
      fill: "#EF5350"
    }),
    _react2.default.createElement("polygon", {
      points: "45.01 79.79 45.14 48.21 63.96 64.41",
      fill: "#FFCDD2"
    }),
    _react2.default.createElement("polygon", {
      points: "83.54 79.79 83.41 48.21 64.6 64.41",
      fill: "#FFCDD2"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m89.22 27.09c5.07 0 9.49 4 10.51 9.49l12.29 67.83-0.16 12.51h-95.73l0.03-12.49 12.3-67.84c1.02-5.5 5.44-9.5 10.51-9.5h50.25m0-3h-50.26c-6.54 0-12.18 5-13.46 11.95l-12.35 68.11-0.03 15.76h101.69l0.21-15.76-12.34-68.11c-1.29-6.95-6.92-11.95-13.46-11.95z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M4.09,124l0.02-10.94c0-4.9,3.66-8.86,8.18-8.87l103.42-0.04c4.47,0,8.12,3.88,8.19,8.73l0.2,11.12 H4.09z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m115.71 107.15c2.81 0 5.14 2.59 5.18 5.78l0.14 8.07h-113.94l0.01-7.94c0-3.23 2.32-5.87 5.18-5.87l103.43-0.04m0-3-103.42 0.04c-4.52 0-8.18 3.97-8.18 8.87l-0.02 10.94h120l-0.2-11.12c-0.07-4.84-3.71-8.73-8.18-8.73z",
        fill: "#eee"
      })
    )
  );
}

exports.default = RotatingLight;
