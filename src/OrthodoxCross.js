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

function OrthodoxCross(props) {
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
        y2: 124.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B388FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A175FF",
        offset: 0.3773
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7C4DFF",
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
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 16c2.76 0 5 2.24 5 5v6h14c2.76 0 5 2.24 5 5s-2.24 5-5 5h-14v9h30c2.76 0 5 2.24 5 5s-2.24 5-5 5h-30v25.11l12.5 6.89c2.39 1.38 3.21 4.44 1.83 6.83-0.93 1.6-2.61 2.5-4.33 2.5-0.85 0-1.71-0.22-2.5-0.67l-7.5-4v14.34c0 2.76-2.24 5-5 5s-5-2.24-5-5v-20.11l-12.5-6.89c-2.39-1.38-3.21-4.44-1.83-6.83 0.93-1.6 2.61-2.5 4.33-2.5 0.85 0 1.71 0.22 2.5 0.67l7.5 4v-19.34h-30c-2.76 0-5-2.24-5-5s2.24-5 5-5h30v-9h-14c-2.76 0-5-2.24-5-5s2.24-5 5-5h14v-6c0-2.76 2.24-5 5-5m0-3c-4.41 0-8 3.59-8 8v3h-11c-4.41 0-8 3.59-8 8s3.59 8 8 8h11v3h-27c-4.41 0-8 3.59-8 8s3.59 8 8 8h27v11.34l-3.05-1.63c-1.2-0.68-2.57-1.05-3.95-1.05-2.85 0-5.51 1.53-6.93 4-2.21 3.82-0.89 8.72 2.93 10.93l0.03 0.02 0.03 0.01 10.94 6.04v18.34c0 4.41 3.59 8 8 8s8-3.59 8-8v-9.34l3.05 1.63c1.2 0.68 2.57 1.05 3.95 1.05 2.85 0 5.51-1.53 6.93-4 1.07-1.85 1.35-4.01 0.8-6.07s-1.88-3.79-3.73-4.86l-0.03-0.02-0.03-0.01-10.94-6.04v-20.34h27c4.41 0 8-3.59 8-8s-3.59-8-8-8h-27v-3h11c4.41 0 8-3.59 8-8s-3.59-8-8-8h-11v-3c0-4.41-3.59-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99 56c2.76 0 5-2.24 5-5s-2.24-5-5-5h-30v-9h14c2.76 0 5-2.24 5-5s-2.24-5-5-5h-14v-6c0-2.76-2.24-5-5-5s-5 2.24-5 5v6h-14c-2.76 0-5 2.24-5 5s2.24 5 5 5h14v9h-30c-2.76 0-5 2.24-5 5s2.24 5 5 5h30v19.34l-7.5-4c-2.39-1.38-5.45-0.56-6.83 1.83s-0.56 5.45 1.83 6.83l12.5 6.89v20.11c0 2.76 2.24 5 5 5s5-2.24 5-5v-14.34l7.5 4c0.79 0.46 1.65 0.67 2.5 0.67 1.73 0 3.41-0.9 4.33-2.5 1.38-2.39 0.56-5.45-1.83-6.83l-12.5-6.89v-25.11h30z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = OrthodoxCross;
