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

function FloppyDisk(props) {
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
        y1: 3.3333,
        y2: 123.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124.17 27.95v87.49c0 4.82-3.91 8.73-8.73 8.73h-102.88c-4.82 0-8.73-3.91-8.73-8.73v-102.88c0-4.82 3.91-8.73 8.73-8.73h89.64c3.56 0 6.94 1.59 9.21 4.34l10.04 12.19c1.76 2.14 2.72 4.82 2.72 7.59z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "M103.94,124.17H24V71.25c0-1.81,1.47-3.28,3.28-3.28h73.39c1.81,0,3.28,1.47,3.28,3.28V124.17z",
      fill: "#fff"
    }),
    _react2.default.createElement("rect", {
      x: 24,
      y: 111.92,
      width: 79.94,
      height: 12.25,
      fill: "#0288D1"
    }),
    _react2.default.createElement("path", {
      d:
        "M16.75,3.83v47.75c0,1.78,1.57,3.17,3.65,3.17h76.65c2.08,0,3.69-1.38,3.69-3.17V3.83H16.75z",
      fill: "#474747"
    }),
    _react2.default.createElement("path", {
      d:
        "M35,3.83v45.02c0,1.68,1.18,2.98,2.74,2.98H95.2c1.56,0,2.77-1.3,2.77-2.98V3.83H35z M85.97,46.52 c0,0.72-0.59,1.31-1.31,1.31H67.28c-0.72,0-1.31-0.59-1.31-1.31V9.14c0-0.72,0.59-1.31,1.31-1.31h17.38c0.72,0,1.31,0.59,1.31,1.31 V46.52z",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.21 6.83c2.68 0 5.19 1.19 6.89 3.25l10.04 12.19c1.31 1.59 2.04 3.61 2.04 5.67v87.49c0 3.16-2.57 5.73-5.73 5.73h-102.89c-3.16 0-5.73-2.57-5.73-5.73v-102.87c0-3.16 2.57-5.73 5.73-5.73h89.65m0-3h-89.65c-4.82 0-8.73 3.91-8.73 8.73v102.87c0 4.82 3.91 8.73 8.73 8.73h102.87c4.82 0 8.73-3.91 8.73-8.73v-87.48c0-2.77-0.96-5.45-2.72-7.58l-10.03-12.19c-2.26-2.75-5.64-4.35-9.2-4.35z",
        fill: "#eee"
      })
    )
  );
}

exports.default = FloppyDisk;
