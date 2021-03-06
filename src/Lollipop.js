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

function Lollipop(props) {
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
        id: "c",
        x1: 30.055,
        x2: 110.16,
        y1: 30.056,
        y2: 110.16,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAA629",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FECC81",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.8 111.2-53.83-53.84c-1.42-1.42-3.3-2.2-5.3-2.2s-3.89 0.78-5.3 2.2c-1.42 1.42-2.2 3.3-2.2 5.3s0.78 3.89 2.2 5.3l53.83 53.83c1.42 1.42 3.3 2.2 5.3 2.2s3.89-0.78 5.3-2.2c1.42-1.42 2.2-3.3 2.2-5.3s-0.78-3.88-2.2-5.29z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.67 58.17c1.2 0 2.33 0.47 3.18 1.32l53.83 53.83c0.85 0.85 1.32 1.98 1.32 3.18s-0.47 2.33-1.32 3.18-1.98 1.32-3.18 1.32-2.33-0.47-3.18-1.32l-53.84-53.83c-0.85-0.85-1.32-1.98-1.32-3.18s0.47-2.33 1.32-3.18 1.98-1.32 3.19-1.32m0-3c-2 0-3.89 0.78-5.3 2.2-1.42 1.42-2.2 3.3-2.2 5.3s0.78 3.89 2.2 5.3l53.83 53.83c1.42 1.42 3.3 2.2 5.3 2.2s3.89-0.78 5.3-2.2c1.42-1.42 2.2-3.3 2.2-5.3s-0.78-3.89-2.2-5.3l-53.83-53.84c-1.42-1.41-3.3-2.19-5.3-2.19z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 4,
        x2: 94,
        y1: 49,
        y2: 49,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F48FB1",
        offset: 0.2047
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 0.8442
      })
    ),
    _react2.default.createElement("circle", {
      cx: 49,
      cy: 49,
      r: 45,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49 7c23.16 0 42 18.84 42 42s-18.84 42-42 42-42-18.84-42-42 18.84-42 42-42m0-3c-24.85 0-45 20.15-45 45s20.15 45 45 45 45-20.15 45-45-20.15-45-45-45z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 20.575,
        x2: 82,
        y1: 20.983,
        y2: 82.408,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FCE4EB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F48FB1",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m78.54 23.94c-9.25-10.61-33.75-20.96-54.73-4.93-7.67 5.86-14.08 19.25-14.08 31.88 0 6.63 1.5 12.9 4.17 18.51-1.84-4.64-2.85-9.66-2.85-14.87 0-18.78 15.05-37.75 35.17-38.12 23.56-0.43 34.01 15.64 34.01 30.66 0 11.13-4.78 19.25-11.99 23.82-4.44 2.82-9.81 4.28-15.55 4.26-12.71-0.05-22.35-8.86-22.35-21.83 0-11.86 9.63-18.76 18.9-19.15 11.89-0.5 16.1 9.11 16.02 15.27-0.1 7.76-7.04 12.23-13.26 11.76-5.42-0.41-8.69-3.88-8.51-9.64 0.13-3.88 3.76-6.76 7.13-6.76 3.75 0 6.27 2.64 6.63 5.13 0.34 2.3-0.37 5.88-5.38 5.88-2.03 0-3.58-1.69-3.82-2.98-0.23-1.28-0.05-3.62 2.1-3.62 0 0-2.01 1.15-1.01 3.07 0.54 1.03 1.32 1.26 2.23 1.28 1.53-0.13 2.73-1.31 2.73-2.77 0-1.93-1.68-3.5-3.75-3.5-2.59 0-4.68 1.96-4.68 4.37 0 3.02 2.37 6.65 6.53 6.82 4.86 0.2 9.82-4.36 8.93-9.82-0.76-4.65-3.19-9.26-11.29-9.26-6.32 0-13.63 3.95-13.63 13.03 0 9.94 8.14 16.27 16.03 16.27 12.14 0 21.77-6.37 21.77-20.15 0-3.3-0.5-6.66-1.68-9.78-2.07-5.48-8.62-14.71-24.79-14.9-15.5-0.19-28.07 12.57-28.07 28.07 0 18.25 14.39 31.95 34.22 32.04 23.98 0.12 48.78-32.61 24.85-60.04z",
      fill: "url(#a)"
    })
  );
}

exports.default = Lollipop;
