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

function BoxingGlove(props) {
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
        cx: 46.694,
        cy: 98.084,
        r: 38.66,
        gradientTransform: "matrix(.9059 0 0 1 3.1749 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F05455",
        offset: 0.258
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D41F26",
        offset: 0.8927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.59 90.36 0.06 25.48c0.01 3.44 8.6 7.91 24.87 7.91s23.73-4.29 23.77-7.73l0.32-25.47c0.04-3.48-2.7-6.32-6.1-6.34l-36.76-0.13c-3.41-0.01-6.17 2.81-6.16 6.28z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.5 55.84-36.76-0.13c-3.4-0.01-6.16 2.8-6.16 6.28l0.06 27.48c0.01 3.44 11 6.31 24.58 6.31s24.02-2.69 24.06-6.13l0.32-27.47c0.05-3.48-2.7-6.32-6.1-6.34z",
      fill: "#B72025"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 38.686,
        cy: 19.81,
        r: 68.125,
        gradientTransform: "matrix(.8831 0 0 .9988 8.4817 .1141)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F05455",
        offset: 0.258
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D41F26",
        offset: 0.8927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.35 34.65c-1.93-12.77-8.45-10.4-8.86-10.18 0.26-0.38 0.05-8.24-6.74-14.72-5.49-5.23-28.72-5.91-38.25-5.11-10.66 0.9-22.26 5.45-25.72 17.43-3.16 10.95-0.93 31.39 2.1 44.77 2.92 12.9 9.26 18.07 9.26 18.07s7.16 4.84 19.86 4.84c19.72 0 30.63-5.01 37.25-15.75 7.25-11.75 12.77-28.34 11.1-39.35z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m59.45 7.36c13.58 0 25.45 1.92 28.23 4.57 5 4.76 5.9 10.46 5.88 11.91-0.2 0.93 0.05 1.93 0.72 2.66 0.58 0.64 1.39 0.97 2.21 0.97 0.41 0 0.83-0.09 1.22-0.26 0.06-0.02 0.22-0.05 0.43-0.05 1.87 0 3.49 3.04 4.24 7.94 1.59 10.55-4.17 26.76-10.69 37.32-2.16 3.5-4.77 6.23-7.99 8.36-0.83 0.55-1.33 1.47-1.35 2.47l-0.05 5.25c0 0.32 0.04 0.64 0.14 0.95 0.11 0.35 0.17 0.71 0.16 1.07l-0.32 25.39c-0.53 1.33-6.31 4.84-20.77 4.84-14.59 0-21.11-3.7-21.87-5.08l-0.06-25.32c0-0.12 0.01-0.27 0.04-0.46 0.02-0.16 0.03-0.32 0.02-0.47v-0.08l-0.01-4.91c0-0.8-0.33-1.58-0.9-2.14-1.29-1.26-5.67-6.14-7.92-16.12-3.2-14.12-4.96-33.52-2.14-43.27 3.43-11.88 15.94-14.67 23.09-15.27 2.07-0.18 4.8-0.27 7.69-0.27m0-3c-3.09 0-5.85 0.1-7.95 0.28-10.66 0.9-22.26 5.45-25.72 17.43-3.16 10.95-0.93 31.39 2.1 44.77 2.42 10.71 7.2 16.08 8.75 17.6l0.01 5.03v0.04c-0.04 0.28-0.06 0.57-0.06 0.86l0.06 25.48c0.01 3.44 8.6 7.91 24.87 7.91s23.73-4.29 23.77-7.73l0.32-25.47c0.01-0.71-0.1-1.38-0.31-2.02l0.06-5.25c3.63-2.4 6.54-5.48 8.89-9.29 7.25-11.75 12.77-28.34 11.1-39.35-1.37-9.04-5.03-10.49-7.2-10.49-0.9 0-1.54 0.25-1.66 0.31 0.26-0.38 0.05-8.24-6.74-14.72-4.27-4.08-19.34-5.39-30.29-5.39z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.49 24.47s-3.59 0.69-5.29 5.52-0.12 9.98-1.55 13.57c-1.42 3.58-5 3.91-6.84 2-1.57-1.63-3.68-11.53 1.18-18.25 6.77-9.38 12.5-2.84 12.5-2.84z",
      fill: "#A52822"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 46.342,
        x2: 71.832,
        y1: 102.45,
        y2: 110.84,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE081",
        offset: 0.1192
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB28",
        offset: 0.7466
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.12 115.2c-4.77 1.19-19.76 1.56-25.02 0.01s-6.3-3.96-6.3-5.91v-5.5c0-2.42 2.63-4.27 5.54-3.89l0.54 0.07c8.29 1.08 16.73 1.09 25.03 0.03l0.91-0.12c2.9-0.37 5.52 1.48 5.52 3.9v5.52c-0.01 1.93-1.45 4.7-6.22 5.89z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.52 17.25c-3.28 2.28-0.41 7.62 2.99 5.78 6.01-3.26 11.21-2.26 16.5 1.5 1.32 0.94-7.61-15.54-19.49-7.28z",
      fill: "#A52822"
    })
  );
}

exports.default = BoxingGlove;
