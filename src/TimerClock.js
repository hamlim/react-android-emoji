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

function TimerClock(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m104.37 124.13h-79.6c-4.42 0-8-3.58-8-8v-27.99c0-4.42 3.58-8 8-8h79.6c4.42 0 8 3.58 8 8v27.98c0 4.42-3.58 8.01-8 8.01z",
      fill: "#42A5F5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.37 83.14c2.76 0 5 2.24 5 5v27.98c0 2.76-2.24 5-5 5h-79.6c-2.76 0-5-2.24-5-5v-27.98c0-2.76 2.24-5 5-5h79.6m0-3h-79.6c-4.42 0-8 3.58-8 8v27.98c0 4.42 3.58 8 8 8h79.6c4.42 0 8-3.58 8-8v-27.98c0-4.41-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 63.82,
      cy: 62.55,
      r: 58.63,
      fill: "#42A5F5"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.064,
        x2: 64.064,
        y1: 28.932,
        y2: 115.98,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0.3212
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64.06,
      cy: 62.55,
      r: 45.23,
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.04 34.71-3.23 27.58 4.14 4.08 4.61-4.08-3.52-27.59c-0.17-1.03-1.84-1.02-2 0.01z",
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 63.82,
      cy: 62.55,
      r: 5.86,
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 63.82,
      cy: 62.55,
      r: 2.51,
      fill: "#CFD8DC"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.06 19.33c23.83 0 43.23 19.39 43.23 43.23s-19.39 43.23-43.23 43.23c-23.83 0-43.23-19.39-43.23-43.23s19.4-43.23 43.23-43.23m0-2c-24.98 0-45.23 20.25-45.23 45.23s20.25 45.23 45.23 45.23 45.23-20.25 45.23-45.23-20.25-45.23-45.23-45.23z",
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
          "m63.82 6.93c30.67 0 55.63 24.95 55.63 55.63s-24.95 55.63-55.63 55.63-55.63-24.97-55.63-55.64 24.96-55.62 55.63-55.62m0-3c-32.38 0-58.63 26.25-58.63 58.63s26.25 58.63 58.63 58.63 58.63-26.25 58.63-58.63-26.25-58.63-58.63-58.63z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.43 27.38h-2.33c-0.55 0-1-0.45-1-1v-4.66c0-0.55 0.45-1 1-1h2.33c0.55 0 1 0.45 1 1v4.66c0 0.55-0.44 1-1 1z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m65.43 104.32h-2.33c-0.55 0-1-0.45-1-1v-4.66c0-0.55 0.45-1 1-1h2.33c0.55 0 1 0.45 1 1v4.66c0 0.55-0.44 1-1 1z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m99.41 63.68v-2.33c0-0.55 0.45-1 1-1h4.66c0.55 0 1 0.45 1 1v2.33c0 0.55-0.45 1-1 1h-4.66c-0.56 0-1-0.44-1-1z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.47 63.68v-2.33c0-0.55 0.45-1 1-1h4.66c0.55 0 1 0.45 1 1v2.33c0 0.55-0.45 1-1 1h-4.66c-0.55 0-1-0.44-1-1z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.95 43.12-1.22 1.98c-0.29 0.47-0.91 0.62-1.38 0.33l-3.97-2.44c-0.47-0.29-0.62-0.91-0.33-1.38l1.22-1.98c0.29-0.47 0.91-0.62 1.38-0.33l3.97 2.44c0.47 0.29 0.62 0.91 0.33 1.38z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m100.48 83.43-1.22 1.98c-0.29 0.47-0.91 0.62-1.38 0.33l-3.97-2.44c-0.47-0.29-0.62-0.91-0.33-1.38l1.22-1.98c0.29-0.47 0.91-0.62 1.38-0.33l3.97 2.44c0.47 0.29 0.62 0.91 0.33 1.38z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m83.67 33.2-1.98-1.22c-0.47-0.29-0.62-0.91-0.33-1.38l2.44-3.97c0.29-0.47 0.91-0.62 1.38-0.33l1.98 1.22c0.47 0.29 0.62 0.91 0.33 1.38l-2.44 3.97c-0.29 0.47-0.91 0.62-1.38 0.33z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m43.36 98.73-1.98-1.22c-0.47-0.29-0.62-0.91-0.33-1.38l2.44-3.97c0.29-0.47 0.91-0.62 1.38-0.33l1.98 1.22c0.47 0.29 0.62 0.91 0.33 1.38l-2.44 3.97c-0.29 0.47-0.91 0.62-1.38 0.33z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m47.72 31.5-2.02 1.16c-0.48 0.28-1.09 0.11-1.37-0.37l-2.33-4.02c-0.28-0.48-0.11-1.09 0.37-1.37l2.02-1.16c0.48-0.28 1.09-0.11 1.37 0.37l2.33 4.04c0.27 0.47 0.1 1.08-0.37 1.35z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.17 98.14-2.02 1.16c-0.48 0.28-1.09 0.11-1.37-0.37l-2.33-4.04c-0.28-0.48-0.11-1.09 0.37-1.37l2.02-1.16c0.48-0.28 1.09-0.11 1.37 0.37l2.33 4.04c0.27 0.48 0.11 1.09-0.37 1.37z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m95.28 45.97-1.16-2.02c-0.28-0.48-0.11-1.09 0.37-1.37l4.04-2.33c0.48-0.28 1.09-0.11 1.37 0.37l1.16 2.02c0.28 0.48 0.11 1.09-0.37 1.37l-4.04 2.33c-0.48 0.27-1.09 0.1-1.37-0.37z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m28.65 84.42-1.16-2.02c-0.28-0.48-0.11-1.09 0.37-1.37l4.04-2.33c0.48-0.28 1.09-0.11 1.37 0.37l1.16 2.02c0.28 0.48 0.11 1.09-0.37 1.37l-4.04 2.33c-0.48 0.27-1.09 0.11-1.37-0.37z",
      fill: "#424242"
    })
  );
}

exports.default = TimerClock;
