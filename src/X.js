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

function X(props) {
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
        y1: 2.9028,
        y2: 122.12,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE3030",
        offset: 0.4455
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m82.35 65.42c-0.78-0.78-0.78-2.05 0-2.83l38.15-38.11c4.67-4.69 4.67-12.28 0-16.97s-12.23-4.69-16.9 0l-38.18 38.14c-0.78 0.78-2.05 0.78-2.83 0l-38.1-38.15c-4.69-4.67-12.29-4.67-16.98 0s-4.69 12.23 0 16.9l38.14 38.17c0.78 0.78 0.78 2.05 0 2.83l-38.15 38.11c-4.67 4.69-4.67 12.28 0 16.97s12.23 4.69 16.9 0l38.17-38.14c0.78-0.78 2.05-0.78 2.83 0l38.11 38.15c4.69 4.67 12.28 4.67 16.97 0s4.69-12.23 0-16.9l-38.13-38.17z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m16 7c2.41 0 4.67 0.93 6.36 2.62l38.11 38.15c0.94 0.95 2.2 1.47 3.54 1.47 1.33 0 2.59-0.52 3.53-1.46l38.18-38.14c1.69-1.7 3.94-2.63 6.33-2.63s4.64 0.93 6.33 2.63c3.5 3.51 3.5 9.23 0.01 12.73l-38.16 38.1c-1.95 1.95-1.95 5.12 0 7.07l38.14 38.18c1.7 1.69 2.63 3.94 2.63 6.33s-0.93 4.64-2.63 6.33-3.96 2.63-6.37 2.63-4.67-0.93-6.36-2.62l-38.11-38.16c-0.94-0.95-2.2-1.47-3.54-1.47-1.33 0-2.59 0.52-3.53 1.46l-38.18 38.14c-1.69 1.7-3.94 2.63-6.33 2.63s-4.64-0.93-6.33-2.63c-3.5-3.51-3.5-9.23-0.01-12.73l38.15-38.11c1.95-1.95 1.95-5.12 0-7.07l-38.13-38.17c-1.7-1.69-2.63-3.94-2.63-6.33s0.93-4.64 2.63-6.33 3.96-2.62 6.37-2.62m0-3c-3.07 0-6.14 1.17-8.49 3.5-4.69 4.67-4.69 12.23 0 16.9l38.14 38.17c0.78 0.78 0.78 2.05 0 2.83l-38.15 38.11c-4.67 4.69-4.67 12.28 0 16.97 2.33 2.34 5.39 3.51 8.45 3.51s6.12-1.17 8.45-3.51l38.17-38.14c0.39-0.39 0.9-0.59 1.41-0.59s1.02 0.2 1.41 0.59l38.11 38.15c2.34 2.33 5.41 3.5 8.49 3.5s6.14-1.17 8.49-3.5c4.69-4.67 4.69-12.23 0-16.9l-38.13-38.17c-0.78-0.78-0.78-2.05 0-2.83l38.15-38.11c4.67-4.69 4.67-12.28 0-16.97-2.33-2.34-5.39-3.51-8.45-3.51s-6.12 1.17-8.45 3.51l-38.18 38.14c-0.39 0.39-0.9 0.59-1.41 0.59s-1.02-0.2-1.41-0.59l-38.11-38.15c-2.35-2.33-5.42-3.5-8.49-3.5z",
        fill: "#424242"
      })
    )
  );
}

exports.default = X;
