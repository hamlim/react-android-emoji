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

function Beginner(props) {
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
        id: "b",
        x1: 40,
        x2: 40,
        y1: 4,
        y2: 124.2,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m61.5 34-39-29.12c-2.62-2.09-6.5-0.23-6.5 3.13v82.07c0 1.22 0.55 2.36 1.5 3.12l44 29.92c0.73 0.58 1.61 0.88 2.5 0.88v-89.12c-0.88 0-1.77-0.29-2.5-0.88z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 88,
        x2: 88,
        y1: 4,
        y2: 124.2,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4DB6AC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2BA296",
        offset: 0.4722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00897B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.5 4.88-39 29.12c-0.73 0.58-1.61 0.88-2.5 0.88v89.12c0.88 0 1.77-0.29 2.5-0.88l44-29.92c0.95-0.76 1.5-1.91 1.5-3.12v-82.07c0-3.36-3.88-5.22-6.5-3.13z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m20.02 7c0.22 0 0.42 0.07 0.61 0.23l0.08 0.06 38.97 29.09c0.41 0.32 0.86 0.6 1.33 0.82v81.95l-41.69-28.34c-0.2-0.19-0.32-0.45-0.32-0.73v-82.07c0-0.7 0.6-1.01 1.02-1.01m0-3c-2.07 0-4.02 1.63-4.02 4.01v82.07c0 1.22 0.55 2.36 1.5 3.12l44 29.92c0.73 0.58 1.61 0.88 2.5 0.88v-89.12c-0.88 0-1.77-0.29-2.5-0.88l-39-29.12c-0.76-0.61-1.63-0.88-2.48-0.88z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m107.98 7c0.42 0 1.02 0.31 1.02 1.01v82.07c0 0.28-0.11 0.54-0.32 0.73l-41.68 28.34v-81.95c0.47-0.22 0.92-0.5 1.33-0.82l38.97-29.09 0.08-0.06c0.19-0.16 0.38-0.23 0.6-0.23m0-3c-0.85 0-1.72 0.27-2.48 0.88l-39 29.12c-0.73 0.58-1.61 0.88-2.5 0.88v89.12c0.88 0 1.77-0.29 2.5-0.88l44-29.92c0.95-0.76 1.5-1.91 1.5-3.12v-82.07c0-2.38-1.95-4.01-4.02-4.01z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Beginner;