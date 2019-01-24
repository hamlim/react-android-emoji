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

function HeartDecoration(props) {
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
        y1: 4,
        y2: 124,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110 124h-92c-7.73 0-14-6.27-14-14v-92c0-7.73 6.27-14 14-14h92c7.73 0 14 6.27 14 14v92c0 7.73-6.27 14-14 14z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m110 7c6.07 0 11 4.93 11 11v92c0 6.07-4.93 11-11 11h-92c-6.07 0-11-4.93-11-11v-92c0-6.07 4.93-11 11-11h92m0-3h-92c-7.73 0-14 6.27-14 14v92c0 7.73 6.27 14 14 14h92c7.73 0 14-6.27 14-14v-92c0-7.73-6.27-14-14-14z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64,
        cy: 41.505,
        r: 44.467,
        fx: 90.479,
        fy: 77.228,
        gradientTransform:
          "matrix(-2.9085e-12 -.9337 1.0677 -2.9085e-12 19.684 102.76)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.5716
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m86.43 22.9c-16.38 0-22.4 19.59-22.4 19.59s-5.94-19.59-22.44-19.59c-12.4 0-26.54 9.83-21.31 32.16 5.22 22.33 43.59 50.04 43.59 50.04s0.2-0.08 0.2-0.2c0 0.12 0.13 0.18 0.13 0.18s38.3-27.69 43.53-50.03c5.22-22.32-8.9-32.15-21.3-32.15z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.43 25.9c6.08 0 11.79 2.63 15.29 7.04 4.09 5.16 5.16 12.57 3.08 21.44-4.32 18.48-33.6 41.65-40.78 47.1-7.22-5.48-36.5-28.63-40.82-47.11-2.07-8.86-1.01-16.27 3.08-21.43 3.5-4.42 9.22-7.05 15.31-7.05 5.78 0 10.79 2.83 14.88 8.42 3.25 4.44 4.67 8.99 4.69 9.03l2.84 9.34 2.9-9.32c0.01-0.05 1.46-4.61 4.71-9.05 4.1-5.58 9.09-8.41 14.82-8.41m0-3c-16.38 0-22.4 19.59-22.4 19.59s-5.94-19.59-22.44-19.59c-12.4 0-26.54 9.83-21.31 32.16 5.22 22.33 43.59 50.04 43.59 50.04s0.2-0.08 0.2-0.2c0 0.12 0.13 0.18 0.13 0.18s38.3-27.69 43.53-50.03c5.22-22.32-8.9-32.15-21.3-32.15z",
        fill: "#424242"
      })
    )
  );
}

exports.default = HeartDecoration;
