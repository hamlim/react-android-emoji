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

function NoSmoking(props) {
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
        x1: 64,
        x2: 64,
        y1: 8.25,
        y2: 120.13,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#515151",
        offset: 0.3054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#292929",
        offset: 0.8963
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 56,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m91 59c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1h-66c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h66m0-3h-66c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h66c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z"
      }),
      _react2.default.createElement("path", {
        d:
          "m103 59c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1h-6c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h6m0-3h-6c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m91 69h-66c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h66c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m103 69h-6c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h6c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 17c25.92 0 47 21.08 47 47s-21.08 47-47 47-47-21.08-47-47 21.08-47 47-47m0-3c-27.61 0-50 22.39-50 50s22.39 50 50 50 50-22.39 50-50-22.39-50-50-50z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4,
        y2: 124.13,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F33B3B",
        offset: 0.324
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,4C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4z M114,64 c0,11.99-4.24,23-11.3,31.62L32.38,25.3C41,18.24,52.01,14,64,14C91.57,14,114,36.43,114,64z M14,64c0-11.99,4.24-23,11.3-31.62 l70.32,70.32C87,109.76,75.99,114,64,114C36.43,114,14,91.57,14,64z",
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
    _react2.default.createElement("path", {
      d:
        "m98.14 53.41c-1.08 0.53-0.33 2.24 0.83 1.89 6.2-1.89 16.19-9.51 15.55-24.01-0.63-14.35-0.63-21.41 9.11-26.05 0.63-0.3 0.42-1.26-0.28-1.24-6.56 0.14-22.17 2.88-20.23 20.39 1.58 14.26 1.99 25.58-4.98 29.02z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m114.6 8.71c-3.84 5.53-3.51 12.97-3.08 22.72 0.32 7.21-2.25 12.36-5.44 15.8 1.63-6.17 0.99-14.46 0.02-23.16-0.54-4.87 0.42-8.76 2.86-11.54 1.56-1.8 3.58-3.01 5.64-3.82m8.76-4.71h-0.02c-6.56 0.14-22.17 2.88-20.23 20.39 1.59 14.27 1.99 25.58-4.98 29.02-0.98 0.49-0.45 1.94 0.52 1.94 0.1 0 0.2-0.01 0.31-0.05 6.2-1.89 16.19-9.51 15.55-24.01-0.63-14.35-0.63-21.41 9.11-26.05 0.63-0.3 0.43-1.24-0.26-1.24z",
        fill: "#424242"
      })
    )
  );
}

exports.default = NoSmoking;
