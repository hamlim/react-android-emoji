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

function Emoji0x2665(props) {
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
        x1: 63.903,
        x2: 63.903,
        y1: 105.54,
        y2: 5.5151,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.2153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.6952
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M100,14C80.16,6.74,64,27.85,64,27.85S48.53,7.7,28.36,13.95 C-3.25,23.75-0.42,62.9,15.14,83.02C30.03,102.27,61,121.81,64,123.77v0.12c0,0.02,0.01,0.03,0.01,0.03s0.02-0.03,0.06-0.06 c0.04,0.03-0.02,0.06-0.02,0.06S64,123.91,64,123.89v-0.12c3-1.96,33.87-23.01,48.75-42.26C128.31,61.38,130.75,25.25,100,14z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m91.54 16.48c2.38 0 4.77 0.43 7.08 1.28 10.15 3.71 16.98 10.78 19.77 20.43 3.66 12.7 0.02 29.13-9.06 40.88-5.96 7.7-15.73 17.01-28.27 26.92-7.69 6.08-14.34 10.75-17.6 12.99-10.88-7.16-33.54-23.05-45.4-38.39-9.3-12.03-12.83-29.8-8.59-43.22 3.06-9.69 10-16.46 20.07-19.58 2.19-0.68 4.44-1.02 6.67-1.02 13.98 0 24.52 13.48 24.62 13.61 0.75 0.97 1.93 1.62 3.17 1.62s2.41-0.66 3.17-1.64c0.11-0.14 10.81-13.88 24.37-13.88m0-4c-15.77 0-27.54 15.37-27.54 15.37s-11.59-15.1-27.79-15.1c-2.52 0-5.14 0.36-7.85 1.2-31.61 9.8-29.28 48.95-13.72 69.07 14.89 19.25 45.36 38.79 48.36 40.75v0.12-0.12c3-1.96 34.37-23.01 49.25-42.26 15.56-20.13 18.37-56.26-12.37-67.51-2.91-1.06-5.62-1.52-8.34-1.52zm-27.6 111.39c-0.03 0.02-0.09 0.04-0.14 0.05 0.08-0.02 0.17-0.03 0.14-0.05zm-0.44 0.02c0 0.02 0.23 0.03 0.23 0.03h0.01c-0.06 0-0.24-0.01-0.24-0.03zm0.31 0.02c-0.03 0-0.05 0.01-0.06 0.01h0.02s0.01 0 0.04-0.01z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Emoji0x2665;
