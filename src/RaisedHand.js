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

function RaisedHand(props) {
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
        cx: 57.16,
        cy: 33.264,
        r: 89.842,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#70534A",
        offset: 0.3524
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C4037",
        offset: 0.8767
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m50.9 122.3c-23.88 0-30.28-12.73-31.45-23.41-0.55-5.04-1.27-61.23-1.27-61.8 0-2.78 0.71-7.48 5.46-7.48 4.46 0 6.46 3.77 6.46 7.5l0.46 23.24c0.02 0.82 0.68 1.65 1.5 1.65s1.48-0.84 1.5-1.66l0.59-38.24c0-3.76 2-7.57 6.46-7.57s6.46 3.74 6.46 7.48l0.48 37.92c0.01 0.82 0.68 1.47 1.5 1.47s1.49-0.66 1.5-1.48l0.57-46.71c0-3.75 2-7.52 6.46-7.52s6.46 3.77 6.46 7.5l0.59 46.46c0.01 0.82 0.68 1.48 1.5 1.48s1.49-0.66 1.5-1.48l0.47-34.65c0-3.75 2-7.52 6.46-7.52s6.46 3.77 6.46 7.5c0.11 12.42 0.38 44.85 0.34 46.01-0.08 0.92 0.26 1.52 0.56 1.85 0.4 0.44 0.98 0.69 1.63 0.69 1.44 0 2.87-1.14 3.27-1.49 1.78-1.54 3.31-3.95 4.93-6.5 2.02-3.18 4.12-6.48 6.36-7.39 1.76-0.71 3.89-1.11 6.01-1.11 3.4 0 5.53 1 5.89 1.98 1.56 4.3-0.32 5.95-5.09 9.6l-0.92 0.71c-4.73 3.65-7.8 11.08-10.52 17.63-1.11 2.67-2.15 5.2-3.23 7.32-0.65 1.28-1.21 2.79-1.86 4.53-3.46 9.36-8.72 23.49-37.49 23.49z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.59 7.2c2.29 0 4.96 1.57 4.96 6.04l0.59 46.62c0.02 1.64 1.36 3.14 3 3.14s2.98-1.5 3-3.14l0.47-34.78c0-2.77 1.3-6.04 4.96-6.04s4.96 3.21 4.96 6c0.15 17.6 0.37 44.16 0.34 45.88-0.1 1.46 0.46 2.4 0.95 2.95 0.69 0.76 1.67 1.17 2.74 1.17 1.9 0 3.61-1.3 4.25-1.86 1.94-1.68 3.53-4.18 5.21-6.83 1.81-2.85 3.86-6.07 5.66-6.8 1.56-0.63 3.55-1 5.45-1 2.78 0 4.24 0.74 4.5 1.04 1.12 3.12 0.24 4.14-4.61 7.84l-0.92 0.71c-5.05 3.89-8.2 11.52-10.99 18.25-1.09 2.65-2.13 5.14-3.18 7.21-0.69 1.36-1.3 2.98-1.93 4.69-1.68 4.51-3.77 10.13-8.78 14.57-6.02 5.35-14.96 7.94-27.33 7.94-12.56 0-27.96-3.83-29.96-22.08-0.45-4.12-1.07-45.9-1.26-61.62 0-3.98 1.53-6 4.16-6 2.29 0 5.16 1.57 5.16 6v0.06l0.26 22.96c0.03 1.63 1.17 2.87 2.8 2.87h0.01c1.64 0 2.97-1.25 2.99-2.88l0.59-38.16c0-2.77 1.3-5.98 4.96-5.98s4.96 3.24 4.96 6.05l0.45 37.91c0.04 1.65 0.99 2.97 2.99 2.97s3.01-1.32 3.03-2.96l0.59-46.74c0-4.43 2.68-6 4.97-6m0-3c-4.95 0-7.96 4.03-7.96 9l-0.57 46.7-0.48-37.91c0-4.97-3.01-9-7.96-9s-7.96 4.03-7.96 9l-0.59 38.15-0.47-23.03c0-4.97-3.02-9-7.96-9-4.95 0-6.96 4.03-6.96 9 0 0 0.72 56.78 1.28 61.94 0.93 8.5 5.74 24.75 32.94 24.75 35.1 0 36.64-20.86 40.71-28.84 3.79-7.43 7.09-19.64 13.33-24.45 4.96-3.83 8.62-6.12 6.5-12-0.71-1.96-3.81-2.97-7.3-2.97-2.2 0-4.56 0.4-6.57 1.22-4.6 1.87-7.84 10.79-11.7 14.14-0.72 0.62-1.66 1.13-2.29 1.13-0.46 0-0.76-0.27-0.7-0.95 0.06-0.69-0.34-46.09-0.34-46.09 0-4.97-3.01-9-7.96-9s-7.96 4.03-7.96 9l-0.47 34.65-0.6-46.44c0-4.98-3.01-9-7.96-9z",
      fill: "#4A2F27"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m107.92 57.8c-2.27-2.53-8.01-3.72-13.54-1.54-4.65 1.83-9.96 19.19-9.96 19.19l-3.87-6.4s-65.53 21.5-64.6 30 7.74 24.75 34.94 24.75c35.1 0 36.64-20.86 40.71-28.84 3.79-7.43 8.56-24.71 14.42-26.55 3.8-1.18 3.82-8.48 1.9-10.61z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m83.91 69.48c-10.91 4.16-17.34 14.43-21.29 27.9-0.54 1.86 1.17 2.4 1.83 0.58 6.86-18.88 23.87-25.11 23.87-25.11l-4.41-3.37z",
        fill: "#4A2F27"
      })
    )
  );
}

exports.default = RaisedHand;
