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

function ArrowsCounterclockwise(props) {
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
        stopColor: "#40C4FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2DB5F9",
        offset: 0.3517
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
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
          "m43.98 12c2.06 0 4.02 1.62 4.02 4.01v13.99c0 1.1 0.9 2 2 2h34c15.46 0 28 14.33 28 32 0 3.23-0.42 6.35-1.2 9.29 0 0.01-0.02 0.02-0.02 0.03l-14.78-13.32c-0.45-10.49-7.18-12-12-12h-34c-1.1 0-2 0.9-2 2v13.99c0 2.39-1.96 4.01-4.02 4.01-0.9 0-1.82-0.31-2.61-1l-24-23.99c-1.82-1.59-1.82-4.43 0-6.02l24-23.99c0.78-0.69 1.7-1 2.61-1m0-3c-1.68 0-3.3 0.62-4.59 1.74l-0.14 0.14-23.94 23.93c-1.47 1.32-2.31 3.21-2.31 5.19s0.84 3.87 2.31 5.19l23.94 23.93 0.07 0.07 0.08 0.07c1.27 1.12 2.9 1.74 4.58 1.74 3.87 0 7.02-3.14 7.02-7.01v-12.99h33c6.04 0 8.73 2.73 9 9.13l0.05 1.26 0.93 0.84 14.78 13.32 2.87 2.59 1.56-2.97 0.27-0.25 0.24-0.86c0.86-3.25 1.3-6.64 1.3-10.06 0-19.3-13.91-35-31-35h-33v-12.99c0-3.87-3.15-7.01-7.02-7.01z"
      }),
      _react2.default.createElement("path", {
        d:
          "m17.22 54.68 14.78 13.32c0.45 10.49 7.18 12 12 12h34c1.1 0 2-0.9 2-2v-13.99c0-2.39 1.96-4.01 4.02-4.01 0.9 0 1.82 0.31 2.61 1l24 23.99c1.82 1.59 1.82 4.43 0 6.02l-24 23.99c-0.79 0.69-1.71 1-2.61 1-2.06 0-4.02-1.62-4.02-4.01v-13.99c0-1.1-0.9-2-2-2h-34c-15.46 0-28-14.33-28-32 0-3.23 0.42-6.35 1.2-9.29 0-0.02 0.02-0.02 0.02-0.03m-0.86-4.82-1.56 2.97-0.27 0.25-0.24 0.86c-0.85 3.25-1.29 6.64-1.29 10.06 0 19.3 13.91 35 31 35h33v12.99c0 3.86 3.15 7.01 7.02 7.01 1.68 0 3.3-0.62 4.59-1.74l0.14-0.14 23.94-23.93c1.47-1.33 2.31-3.21 2.31-5.19s-0.84-3.87-2.31-5.19l-24-24-0.08-0.07c-1.28-1.12-2.91-1.74-4.59-1.74-3.87 0-7.02 3.14-7.02 7.01v12.99h-33c-6.04 0-8.73-2.73-9-9.13l-0.05-1.26-0.93-0.84-14.79-13.32-2.87-2.59z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "M41.37,67c2.59,2.26,6.63,0.43,6.63-3.01V50c0-1.1,0.9-2,2-2h34c4.82,0,11.55,1.51,12,12 l14.78,13.32c0.01-0.01,0.02-0.02,0.02-0.03c0.78-2.94,1.2-6.06,1.2-9.29c0-17.67-12.54-32-28-32H50c-1.1,0-2-0.9-2-2V16.01 c0-3.44-4.05-5.27-6.63-3.01l-24,23.99c-1.82,1.59-1.82,4.43,0,6.02L41.37,67z"
      }),
      _react2.default.createElement("path", {
        d:
          "M86.63,61C84.05,58.73,80,60.57,80,64.01V78c0,1.1-0.9,2-2,2H44c-4.82,0-11.55-1.51-12-12 L17.22,54.68c-0.01,0.01-0.02,0.02-0.02,0.03C16.42,57.65,16,60.77,16,64c0,17.67,12.54,32,28,32h34c1.1,0,2,0.9,2,2v13.99 c0,3.44,4.05,5.27,6.63,3.01l24-23.99c1.82-1.59,1.82-4.43,0-6.02L86.63,61z"
      })
    )
  );
}

exports.default = ArrowsCounterclockwise;
