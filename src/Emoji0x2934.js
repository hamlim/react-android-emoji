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

function Emoji0x2934(props) {
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
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78 16c1.11 0 2.21 0.46 3.01 1.37l23.99 24c2.26 2.59 0.43 6.63-3.01 6.63h-13.99c-1.1 0-2 0.9-2 2v34c0 15.46-14.33 28-32 28-15.84 0-28.99-10.07-31.55-23.29-0.47-2.44 1.45-4.71 3.94-4.71h8.26c1.73 0 3.25 1.11 3.79 2.75 1.71 5.23 8.15 9.25 15.56 9.25 8.67 0 16-5.5 16-12v-34c0-1.1-0.9-2-2-2h-13.99c-3.44 0-5.27-4.05-3.01-6.63l23.99-24c0.8-0.91 1.9-1.37 3.01-1.37m0-3c-1.98 0-3.87 0.84-5.19 2.31l-24 24-0.07 0.08c-1.83 2.09-2.26 4.97-1.11 7.5s3.59 4.11 6.37 4.11h13v33c0 4.79-6.07 9-13 9-5.9 0-11.37-3.09-12.7-7.18-0.95-2.88-3.62-4.82-6.65-4.82h-8.26c-2.1 0-4.08 0.93-5.42 2.56-1.33 1.61-1.86 3.69-1.47 5.73 2.89 14.9 17.4 25.71 34.5 25.71 19.3 0 35-13.91 35-31v-33h12.99c2.78 0 5.22-1.57 6.37-4.11 1.15-2.53 0.73-5.41-1.11-7.5l-0.14-0.14-23.92-23.94c-1.32-1.47-3.21-2.31-5.19-2.31z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M34.65,84c1.73,0,3.25,1.11,3.79,2.75C40.15,91.98,46.59,96,54,96c8.67,0,16-5.5,16-12V50 c0-1.1-0.9-2-2-2H54.01c-3.44,0-5.27-4.05-3.01-6.63l23.99-24c1.59-1.82,4.43-1.82,6.02,0l23.99,24c2.26,2.59,0.43,6.63-3.01,6.63 H88c-1.1,0-2,0.9-2,2v34c0,15.46-14.33,28-32,28c-15.84,0-28.99-10.07-31.55-23.29C21.98,86.27,23.9,84,26.39,84H34.65z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Emoji0x2934;
