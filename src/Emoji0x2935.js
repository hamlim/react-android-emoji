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

function Emoji0x2935(props) {
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
          "m54 16c17.67 0 32 12.54 32 28v34c0 1.1 0.9 2 2 2h13.99c3.44 0 5.27 4.05 3.01 6.63l-23.99 24c-0.8 0.91-1.9 1.37-3.01 1.37s-2.21-0.46-3.01-1.37l-23.99-24c-2.27-2.58-0.43-6.63 3.01-6.63h13.99c1.1 0 2-0.9 2-2v-34c0-6.5-7.33-12-16-12-7.41 0-13.85 4.02-15.56 9.25-0.53 1.64-2.06 2.75-3.79 2.75h-8.26c-2.49 0-4.42-2.27-3.94-4.71 2.56-13.22 15.71-23.29 31.55-23.29m0-3c-17.1 0-31.61 10.81-34.49 25.71-0.39 2.03 0.14 4.12 1.47 5.73 1.34 1.63 3.32 2.56 5.42 2.56h8.26c3.03 0 5.7-1.94 6.64-4.82 1.33-4.09 6.8-7.18 12.7-7.18 6.93 0 13 4.21 13 9v33h-12.99c-2.78 0-5.22 1.57-6.37 4.11-1.15 2.53-0.73 5.41 1.11 7.5l0.07 0.08 0.07 0.07 23.93 23.94c1.33 1.47 3.21 2.31 5.19 2.31s3.87-0.84 5.19-2.31l23.93-23.94 0.14-0.14c1.83-2.09 2.26-4.97 1.11-7.5s-3.59-4.11-6.37-4.11h-13.01v-33.01c0-17.09-15.7-31-35-31z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M34.65,44c1.73,0,3.25-1.11,3.79-2.75C40.15,36.02,46.59,32,54,32c8.67,0,16,5.5,16,12v34 c0,1.1-0.9,2-2,2H54.01c-3.44,0-5.27,4.05-3.01,6.63l23.99,24c1.59,1.82,4.43,1.82,6.02,0l23.99-24c2.26-2.59,0.43-6.63-3.01-6.63 H88c-1.1,0-2-0.9-2-2V44c0-15.46-14.33-28-32-28c-15.84,0-28.99,10.07-31.55,23.29C21.98,41.73,23.9,44,26.39,44H34.65z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Emoji0x2935;
