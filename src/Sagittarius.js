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

function Sagittarius(props) {
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
        y1: 4,
        y2: 123.15,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1871CC",
        offset: 0.2636
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1461BC",
        offset: 0.605
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0D48A2",
        offset: 0.9878
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0D47A1",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
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
          "m92 34c2.21 0 4 1.79 4 4v28c0 2.21-1.79 4-4 4-0.13 0-0.26-0.01-0.39-0.02-2.08-0.2-3.61-2.06-3.61-4.15v-15.88c0-0.6-0.49-1-1.01-1-0.25 0-0.5 0.09-0.7 0.29l-21.57 21.12c-0.78 0.78-0.78 2.06 0.01 2.84l10.1 9.97c1.56 1.56 1.56 4.09 0 5.66-0.78 0.78-1.81 1.17-2.83 1.17s-2.05-0.39-2.83-1.17l-10.12-9.99c-0.39-0.38-0.9-0.58-1.41-0.58s-1.02 0.2-1.41 0.59l-17.45 17.98c-0.78 0.78-1.81 1.17-2.83 1.17-1.09 0-2.18-0.44-2.98-1.33-1.45-1.61-1.22-4.13 0.31-5.66l17.24-17.77c0.78-0.78 0.78-2.06-0.01-2.84l-9.68-9.56c-1.56-1.56-1.56-4.09 0-5.66 0.78-0.78 1.8-1.17 2.83-1.17s2.05 0.39 2.83 1.17l9.7 9.58c0.39 0.38 0.9 0.58 1.41 0.58s1.02-0.2 1.41-0.59l21.5-21.05c0.63-0.62 0.18-1.7-0.71-1.7h-15.8c-2.34 0-4.21-2.01-3.98-4.39 0.2-2.08 2.06-3.61 4.15-3.61h27.83m0-3h-27.83c-3.67 0-6.8 2.78-7.14 6.32-0.19 1.97 0.46 3.93 1.79 5.39 1.32 1.45 3.21 2.29 5.18 2.29h10.9l-17.3 16.94-9-8.89c-1.31-1.31-3.07-2.04-4.94-2.04s-3.63 0.73-4.95 2.05-2.05 3.08-2.05 4.95 0.73 3.63 2.05 4.95l8.99 8.88-16.57 17.08c-2.69 2.69-2.87 6.99-0.38 9.76 1.33 1.47 3.23 2.32 5.21 2.32 1.87 0 3.63-0.73 4.95-2.05l16.76-17.27 9.4 9.28c1.3 1.31 3.06 2.04 4.93 2.04s3.63-0.73 4.95-2.05 2.05-3.08 2.05-4.95-0.73-3.63-2.05-4.95l-9.39-9.27 17.44-17.08v11.13c0 3.67 2.78 6.8 6.32 7.14 0.23 0.02 0.46 0.03 0.68 0.03 3.86 0 7-3.14 7-7v-28c0-3.86-3.14-7-7-7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92 34h-27.83c-2.09 0-3.95 1.53-4.15 3.61-0.23 2.38 1.64 4.39 3.98 4.39h15.8c0.89 0 1.34 1.08 0.71 1.71l-21.5 21.05c-0.78 0.78-2.04 0.78-2.82 0.01l-9.7-9.58c-1.56-1.56-4.09-1.56-5.66 0-1.56 1.56-1.56 4.09 0 5.66l9.68 9.56c0.79 0.78 0.79 2.05 0.01 2.84l-17.24 17.76c-1.53 1.53-1.76 4.05-0.31 5.66 1.55 1.72 4.19 1.77 5.8 0.16l17.46-17.98c0.78-0.78 2.04-0.78 2.82-0.01l10.12 9.99c1.56 1.56 4.09 1.56 5.66 0 1.56-1.56 1.56-4.09 0-5.66l-10.1-9.97c-0.79-0.78-0.79-2.05-0.01-2.84l21.57-21.12c0.63-0.63 1.71-0.18 1.71 0.71v15.88c0 2.09 1.53 3.95 3.61 4.15 2.38 0.23 4.39-1.64 4.39-3.98v-28c0-2.21-1.79-4-4-4z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Sagittarius;
