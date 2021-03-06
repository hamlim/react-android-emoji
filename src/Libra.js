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

function Libra(props) {
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
        stopColor: "#66BB6A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#60B564",
        offset: 0.2754
      }),
      _react2.default.createElement("stop", {
        stopColor: "#50A654",
        offset: 0.6319
      }),
      _react2.default.createElement("stop", {
        stopColor: "#388E3C",
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
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m95.5 85.25c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5h-63c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5h63m0-3h-63c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h63c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.96 25.75c0.65 0 1.31 0.02 1.96 0.07 13.6 0.93 24.72 11.87 25.85 25.46 0.53 6.3-1.08 12.59-4.55 17.81h8.19c2.53 0 4.58 2.06 4.58 4.58 0 2.53-2.06 4.58-4.58 4.58h-19.78c-1.61 0-2.92-1.31-2.92-2.92v-3.42c0-1 0.51-1.92 1.36-2.46 0.08-0.05 0.16-0.1 0.24-0.16 5.26-3.5 8.4-9.34 8.4-15.63 0-10.34-8.41-18.75-18.75-18.75-0.71 0-1.44 0.04-2.16 0.12-8.52 0.96-15.44 7.83-16.45 16.34-0.84 7.1 2.32 13.97 8.27 17.91 0.08 0.05 0.16 0.11 0.24 0.16 0.85 0.54 1.36 1.46 1.36 2.46v3.42c0 1.61-1.31 2.92-2.92 2.92h-20.3c-2.53 0-4.58-2.06-4.58-4.58 0-2.53 2.06-4.58 4.58-4.58h8.69c-3.04-4.57-4.64-9.87-4.64-15.42 0-7.46 2.9-14.47 8.18-19.74 5.26-5.27 12.27-8.17 19.73-8.17m0-3c-8.26 0-16.02 3.22-21.86 9.05-5.84 5.84-9.05 13.6-9.05 21.86 0 4.32 0.89 8.53 2.59 12.42h-3.64c-4.18 0-7.58 3.4-7.58 7.58s3.4 7.58 7.58 7.58h20.29c3.26 0 5.92-2.65 5.92-5.92v-3.42c0-2.04-1.03-3.9-2.75-4.99l-0.19-0.12c-5-3.32-7.66-9.09-6.95-15.06 0.85-7.14 6.66-12.91 13.81-13.71 0.61-0.07 1.22-0.1 1.83-0.1 8.68 0 15.75 7.07 15.75 15.75 0 5.28-2.64 10.19-7.06 13.13l-0.19 0.12c-1.72 1.09-2.75 2.96-2.75 4.99v3.42c0 3.26 2.65 5.92 5.92 5.92h19.79c4.18 0 7.58-3.4 7.58-7.58s-3.4-7.58-7.58-7.58h-3.15c2.05-4.7 2.93-9.89 2.5-15.06-1.26-15.05-13.57-27.17-28.64-28.2-0.72-0.06-1.45-0.08-2.17-0.08z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m95.5 94.25h-63c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5h63c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.42 69.08h-8.19c3.46-5.22 5.07-11.51 4.55-17.81-1.13-13.58-12.25-24.53-25.85-25.46-0.65-0.04-1.31-0.07-1.96-0.07-7.46 0-14.47 2.9-19.74 8.18-5.27 5.27-8.18 12.28-8.18 19.74 0 5.54 1.6 10.85 4.64 15.42h-8.69c-2.53 0-4.58 2.06-4.58 4.58 0 2.53 2.06 4.58 4.58 4.58h20.29c1.61 0 2.92-1.31 2.92-2.92v-3.42c0-1-0.51-1.92-1.36-2.46-0.08-0.05-0.16-0.1-0.24-0.16-5.94-3.95-9.11-10.81-8.27-17.91 1.01-8.51 7.93-15.38 16.45-16.34 0.72-0.08 1.45-0.12 2.16-0.12 10.34 0 18.75 8.41 18.75 18.75 0 6.29-3.14 12.13-8.4 15.63-0.08 0.05-0.16 0.11-0.24 0.16-0.85 0.54-1.36 1.46-1.36 2.46v3.42c0 1.61 1.31 2.92 2.92 2.92h19.79c2.53 0 4.58-2.06 4.58-4.58 0.01-2.53-2.05-4.59-4.57-4.59z"
      })
    )
  );
}

exports.default = Libra;
