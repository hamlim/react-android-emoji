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

function NameBadge(props) {
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
        id: "b",
        cx: 64.25,
        cy: 3.25,
        r: 120.53,
        gradientTransform: "matrix(1.0287e-13 1 -.7757 7.9796e-14 66.771 -61)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 0.3328
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D81B60",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124 72c0-35.75-16.09-56.08-23.87-66.41-1.8-2.38-5.48-2.02-6.78 0.66-4.64 9.51-8.58 17-10.95 21.4-1.1 2.04-4.03 2.12-5.21 0.12-3.84-6.5-7.23-16.85-9.61-21.56-1.48-2.94-5.66-2.94-7.14 0-2.38 4.72-5.77 15.07-9.61 21.56-1.18 2-4.11 1.92-5.21-0.12-2.37-4.4-6.32-11.89-10.95-21.4-1.31-2.68-4.99-3.04-6.78-0.66-7.8 10.33-23.89 30.66-23.89 66.41 0 0-0.38 51.5 60 52 60.38-0.5 60-52 60-52z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104 56c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4h-80c-2.21 0-4-1.79-4-4v-24c0-2.21 1.79-4 4-4h80m0-3h-80c-3.86 0-7 3.14-7 7v24c0 3.86 3.14 7 7 7h80c3.86 0 7-3.14 7-7v-24c0-3.86-3.14-7-7-7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 57.2,
        y2: 88.876,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104 88h-80c-2.21 0-4-1.79-4-4v-24c0-2.21 1.79-4 4-4h80c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M96.95,7c0.22,0,0.54,0.07,0.78,0.39l0.62,0.83C106.27,18.69,121,38.18,121,72.02 c0,0.12-0.03,12.42-7.08,24.51c-9.35,16.04-26.15,24.28-49.89,24.47c-23.79-0.2-40.59-8.43-49.94-24.47C7.03,84.44,7,72.14,7,72 C7,38.18,21.73,18.69,29.64,8.22l0.62-0.83C30.51,7.07,30.83,7,31.05,7c0.19,0,0.66,0.05,0.91,0.56 c4.6,9.44,8.53,16.9,11.01,21.51c1.05,1.94,3.08,3.15,5.29,3.15c2.13,0,4.06-1.09,5.14-2.93c2.48-4.19,4.69-9.69,6.64-14.55 c1.13-2.82,2.21-5.49,3.07-7.19C63.35,7.07,63.77,7,64,7s0.65,0.07,0.89,0.55c0.86,1.7,1.93,4.37,3.07,7.19 c1.95,4.86,4.17,10.36,6.64,14.55c1.08,1.83,3.01,2.93,5.14,2.93c2.21,0,4.24-1.21,5.29-3.15c2.48-4.6,6.41-12.07,11.01-21.51 C96.29,7.05,96.76,7,96.95,7 M96.95,4c-1.45,0-2.89,0.77-3.6,2.25c-4.64,9.51-8.58,17-10.95,21.4c-0.56,1.05-1.61,1.58-2.65,1.58 c-0.99,0-1.98-0.48-2.56-1.46c-3.84-6.5-7.23-16.85-9.61-21.56C66.83,4.73,65.42,4,64,4s-2.83,0.73-3.57,2.2 c-2.38,4.72-5.77,15.07-9.61,21.56c-0.58,0.97-1.57,1.46-2.56,1.46c-1.04,0-2.08-0.53-2.65-1.58c-2.37-4.4-6.32-11.89-10.95-21.4 C33.94,4.77,32.5,4,31.05,4c-1.18,0-2.37,0.52-3.18,1.59C20.09,15.92,4,36.25,4,72c0,0-0.38,51.5,60,52c60.38-0.5,60-52,60-52 c0-35.75-16.09-56.08-23.87-66.41C99.32,4.52,98.13,4,96.95,4L96.95,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = NameBadge;
