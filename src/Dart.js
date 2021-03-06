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

function Dart(props) {
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
      "radialGradient",
      {
        id: "c",
        cx: 46.895,
        cy: 35.963,
        r: 62.182,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5451",
        offset: 0.4707
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53A35",
        offset: 0.8338
      })
    ),
    _react2.default.createElement("circle", {
      cx: 63.99,
      cy: 64,
      r: 59.82,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "b",
        cx: 63.99,
        cy: 64,
        r: 59.82
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.99 7.18c31.33 0 56.82 25.49 56.82 56.82s-25.49 56.82-56.82 56.82-56.82-25.49-56.82-56.82 25.49-56.82 56.82-56.82m0-3c-33.04 0-59.82 26.79-59.82 59.82s26.78 59.82 59.82 59.82 59.82-26.78 59.82-59.82-26.79-59.82-59.82-59.82z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 63.99,
      cy: 64,
      r: 41.66,
      fill: "#FEFCE9"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 58.828,
        cy: 53.686,
        r: 30.652,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5451",
        offset: 0.4707
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53A35",
        offset: 0.8338
      })
    ),
    _react2.default.createElement("circle", {
      cx: 63.99,
      cy: 64,
      r: 26.71,
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 63.99,
      cy: 64,
      r: 8.01,
      fill: "#FEFCE9"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.04 18.25 0.35-8.44c0.16-3.8-3.22-6.49-6.97-5.55l-6.96 1.73c-2.4 0.6-4.32 2.55-4.87 4.96l-7.59 33.34 0.06-0.03 26-26-0.02-0.01z",
      fill: "#09BCD4"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.05 18.25 8.44-0.35c3.8-0.16 6.49 3.22 5.55 6.97l-1.73 6.96c-0.6 2.4-2.55 4.32-4.96 4.87l-33.34 7.59 0.03-0.06 26-26 0.01 0.02z",
      fill: "#38A4DD"
    }),
    _react2.default.createElement("path", {
      d:
        "m65.32 65.13c-1.4 1.25-3.35-0.7-2.11-2.1l37.53-41.45c1.65-1.65 4.33-1.65 5.98 0s1.65 4.33 0 5.98l-41.4 37.57z",
      fill: "#1B87C9"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.91 6.07c0.99 0 1.89 0.37 2.54 1.05 0.65 0.67 0.98 1.6 0.94 2.61l-0.35 8.42c-0.02 0.39 0.08 0.77 0.27 1.09 0.09 0.15 0.19 0.28 0.31 0.4 0.37 0.38 0.89 0.61 1.43 0.61h0.08l8.42-0.35h0.17c1.12 0 2.1 0.46 2.75 1.29 0.68 0.86 0.9 2.03 0.61 3.19l-1.73 6.96c-0.41 1.65-1.8 3.02-3.46 3.4l-27.64 6.3c-0.34 0.08-0.65 0.24-0.9 0.47l-16.68 15.16 15.1-16.68c0.23-0.25 0.39-0.56 0.47-0.9l6.31-27.7c0.38-1.66 1.74-3.05 3.4-3.46l6.96-1.73c0.33-0.09 0.67-0.13 1-0.13m0-2c-0.49 0-0.99 0.06-1.49 0.19l-6.96 1.73c-2.4 0.6-4.32 2.55-4.87 4.96l-6.31 27.7-22.07 24.37c-0.97 1.09-0.01 2.5 1.12 2.5 0.33 0 0.67-0.12 0.98-0.4l24.39-22.12 27.64-6.3c2.4-0.55 4.36-2.47 4.96-4.87l1.73-6.96c0.91-3.67-1.64-6.97-5.3-6.97-0.08 0-0.17 0-0.26 0.01l-8.42 0.35h-0.02v-0.02l0.35-8.42c0.14-3.3-2.36-5.75-5.47-5.75z",
        fill: "#434343"
      })
    )
  );
}

exports.default = Dart;
