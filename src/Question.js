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

function Question(props) {
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
        x1: 62.546,
        x2: 62.546,
        y1: 3.708,
        y2: 122.64,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FD4D4D",
        offset: 0.2061
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F64040",
        offset: 0.4365
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EA2A2A",
        offset: 0.6787
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA0B0B",
        offset: 0.9274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 62.55,
      cy: 112,
      r: 12,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 3.708,
        y2: 122.64,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FD4D4D",
        offset: 0.2061
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F64040",
        offset: 0.4365
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EA2A2A",
        offset: 0.6787
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA0B0B",
        offset: 0.9274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m56.69 88.57c-2.3 0-4.12-1.94-4-4.23 0.29-5.21 1.14-9.5 2.55-12.88 1.77-4.25 5.28-8.92 10.52-14s8.56-8.7 9.96-10.85c2.15-3.27 3.22-6.81 3.22-10.63 0-5.04-1.25-8.89-3.75-11.55s-6.17-3.98-11-3.98c-4.62 0-8.34 1.3-11.17 3.9-2.11 1.95-3.44 4.41-3.97 7.39-0.33 1.86-2.02 3.17-3.91 3.17h-11.67c-2.38 0-4.27-2.07-3.98-4.43 0.93-7.46 4.07-13.51 9.42-18.16 6.38-5.55 14.8-8.32 25.28-8.32 10.8 0 19.23 2.74 25.27 8.23 6.05 5.49 9.07 13.15 9.07 23 0 8.77-4.09 17.4-12.25 25.9l-9.77 9.62c-0.1 0.1-0.2 0.2-0.29 0.31-2.89 3.37-4.61 8.01-5.16 13.92-0.19 2.04-1.92 3.6-3.97 3.6h-10.4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.55 103.01c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9c0-4.97 4.04-9 9-9m0-3c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.38-12-12-12z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.19 7c9.98 0 17.81 2.51 23.26 7.45 5.44 4.94 8.09 11.73 8.09 20.78 0 7.92-3.83 15.92-11.39 23.79l-9.74 9.59c-0.16 0.16-0.31 0.32-0.46 0.49-3.29 3.84-5.27 9.09-5.87 15.59-0.05 0.49-0.48 0.88-0.99 0.88h-10.4c-0.37 0-0.61-0.2-0.73-0.31-0.11-0.12-0.3-0.37-0.28-0.75 0.27-4.84 1.05-8.84 2.32-11.89 1.61-3.85 4.92-8.23 9.84-13 5.45-5.29 8.85-9.01 10.38-11.36 2.47-3.76 3.72-7.88 3.72-12.27 0-5.81-1.54-10.39-4.56-13.61-3.08-3.27-7.52-4.93-13.19-4.93-5.38 0-9.82 1.58-13.2 4.69-2.6 2.39-4.24 5.44-4.89 9.07-0.07 0.39-0.49 0.7-0.96 0.7h-11.67c-0.4 0-0.66-0.22-0.77-0.35-0.13-0.14-0.27-0.38-0.23-0.71 0.85-6.76 3.6-12.08 8.41-16.27 5.78-5.03 13.62-7.58 23.31-7.58m0-3c-10.48 0-18.9 2.77-25.27 8.31-5.35 4.65-8.49 10.71-9.42 18.16-0.3 2.36 1.6 4.43 3.98 4.43h11.67c1.89 0 3.58-1.31 3.91-3.17 0.53-2.98 1.85-5.44 3.97-7.39 2.82-2.6 6.54-3.9 11.17-3.9 4.84 0 8.5 1.33 11 3.98 2.5 2.66 3.75 6.51 3.75 11.55 0 3.81-1.07 7.35-3.22 10.63-1.4 2.15-4.72 5.77-9.96 10.85s-8.75 9.75-10.52 14c-1.41 3.38-2.26 7.67-2.55 12.88-0.13 2.29 1.7 4.23 4 4.23h10.4c2.05 0 3.78-1.56 3.97-3.6 0.55-5.9 2.27-10.54 5.16-13.92 0.09-0.11 0.19-0.21 0.29-0.31l9.77-9.62c8.17-8.5 12.25-17.13 12.25-25.9 0-9.85-3.02-17.51-9.07-23-6.05-5.47-14.48-8.21-25.28-8.21z"
      })
    )
  );
}

exports.default = Question;
