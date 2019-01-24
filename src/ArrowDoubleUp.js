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

function ArrowDoubleUp(props) {
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
        y1: 4.25,
        y2: 123.91,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 63c0.79 0 1.58 0.34 2.03 1.03l25.66 38.93c0.89 1.36-0.23 3.05-2.03 3.05h-51.32c-1.79 0-2.91-1.69-2.03-3.05l25.66-38.93c0.45-0.69 1.24-1.03 2.03-1.03m0-3c-1.86 0-3.56 0.89-4.54 2.38l-25.65 38.92c-1 1.52-1.08 3.37-0.22 4.96 0.92 1.69 2.74 2.74 4.75 2.74h51.32c2.02 0 3.84-1.05 4.75-2.74 0.86-1.58 0.78-3.43-0.21-4.95l-25.67-38.93c-0.97-1.49-2.67-2.38-4.53-2.38z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 22c0.79 0 1.58 0.35 2.03 1.05l25.66 39.83c0.89 1.39-0.23 3.12-2.03 3.12h-51.32c-1.79 0-2.91-1.73-2.03-3.12l25.66-39.83c0.45-0.7 1.24-1.05 2.03-1.05m0-3c-1.88 0-3.58 0.91-4.55 2.43l-25.66 39.83c-0.99 1.55-1.05 3.42-0.18 5.01 0.92 1.68 2.73 2.73 4.73 2.73h51.32c1.99 0 3.81-1.05 4.73-2.73 0.87-1.6 0.81-3.47-0.18-5l-25.66-39.84c-0.97-1.52-2.67-2.43-4.55-2.43z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "M64,106H38.34c-1.79,0-2.91-1.69-2.03-3.05l25.66-38.93c0.9-1.37,3.16-1.37,4.05,0l25.66,38.93 c0.89,1.36-0.23,3.05-2.03,3.05H64z"
      }),
      _react2.default.createElement("path", {
        d:
          "M64,66H38.34c-1.79,0-2.91-1.73-2.03-3.12l25.66-39.83c0.9-1.4,3.16-1.4,4.05,0l25.66,39.83 c0.89,1.39-0.23,3.12-2.03,3.12H64z"
      })
    )
  );
}

exports.default = ArrowDoubleUp;
