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

function Taurus(props) {
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
        y1: 3.6667,
        y2: 124.02,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF7043",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F45F30",
        offset: 0.5053
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 1
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
    _react2.default.createElement("path", {
      d:
        "m94.83 36.74c0.55-1.41 0.37-2.99-0.48-4.24s-2.26-2-3.77-2h-0.52c-1.87 0-3.55 1.15-4.26 2.93-3.42 8.5-9.93 12.12-21.79 12.12s-18.37-3.63-21.79-12.12c-0.72-1.78-2.39-2.93-4.26-2.93h-0.52c-1.51 0-2.92 0.75-3.77 2s-1.03 2.84-0.48 4.24c2.25 5.76 8.81 11.9 14.12 15.31-7.63 5.3-12.63 14.12-12.63 24.11 0 16.2 13.14 29.34 29.34 29.34s29.34-13.14 29.34-29.34c0-10.11-5.11-19.02-12.89-24.3 5.34-3.44 12.15-9.47 14.36-15.12zm-30.83 59.76c-11.22 0-20.34-9.12-20.34-20.34s9.12-20.34 20.34-20.34 20.34 9.12 20.34 20.34-9.12 20.34-20.34 20.34z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m90.58 30.5c1.51 0 2.92 0.75 3.77 2s1.03 2.84 0.48 4.24c-2.21 5.66-9.02 11.68-14.38 15.12 7.78 5.28 12.89 14.19 12.89 24.3 0 16.2-13.14 29.34-29.34 29.34s-29.34-13.14-29.34-29.34c0-9.99 5-18.81 12.63-24.11-5.31-3.41-11.87-9.55-14.12-15.31-0.55-1.41-0.37-2.99 0.48-4.24s2.26-2 3.77-2h0.52c1.87 0 3.55 1.15 4.26 2.93 3.42 8.5 9.93 12.12 21.79 12.12s18.37-3.63 21.79-12.12c0.72-1.78 2.39-2.93 4.26-2.93h0.54m-26.58 66c11.22 0 20.34-9.12 20.34-20.34s-9.12-20.34-20.34-20.34-20.34 9.12-20.34 20.34 9.12 20.34 20.34 20.34m26.58-69h-0.52c-3.11 0-5.87 1.89-7.05 4.81-2.93 7.27-8.44 10.24-19.01 10.24s-16.08-2.97-19.01-10.24c-1.18-2.92-3.94-4.81-7.05-4.81h-0.52c-2.5 0-4.84 1.24-6.25 3.3-1.41 2.07-1.71 4.7-0.8 7.03 2.03 5.19 7.02 10.53 11.93 14.35-6.73 6.09-10.64 14.79-10.64 23.97 0 17.83 14.51 32.34 32.34 32.34s32.34-14.51 32.34-32.34c0-9.31-3.99-18.07-10.85-24.17 4.88-3.71 10.1-8.94 12.14-14.16 0.91-2.33 0.61-4.96-0.8-7.03-1.42-2.05-3.75-3.29-6.25-3.29zm-26.58 66c-9.56 0-17.34-7.78-17.34-17.34s7.78-17.34 17.34-17.34 17.34 7.78 17.34 17.34-7.78 17.34-17.34 17.34z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Taurus;
