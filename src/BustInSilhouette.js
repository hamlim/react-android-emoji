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

function BustInSilhouette(props) {
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
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "c",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 64,
          x2: 64,
          y1: 130.9,
          y2: 4.0297,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#1565C0",
          offset: 0.111
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1E88E5",
          offset: 0.8469
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m73.08 95.03v-1.07c9.32-2.75 17.57-9.83 21.67-21.32 4.22-1.53 6.62-15.3 5.48-17.12 0.88-5.94 6.23-51.27-36.23-51.5h-0.02s-0.01 0-0.02 0c-42.56 0.24-37.08 45.8-36.22 51.55-1.12 1.8 1.28 15.54 5.5 17.07 4.11 11.49 12.35 18.57 21.67 21.32v1.06c-22.16 1.63-42.05 9.29-42.05 24.94v10.94h102.27v-10.94c0-14.8-19.79-23.17-42.05-24.93z",
        fill: "url(#b)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.95 7.03h0.04c11.15 0.06 19.68 3.44 25.35 10.05 4.62 5.39 7.41 12.86 8.29 22.21 0.71 7.57-0.1 14-0.36 15.79-0.08 0.57 0 1.14 0.23 1.66 0.11 0.86-0.1 3.75-0.99 7.06-1.15 4.29-2.45 5.83-2.77 6.02-0.84 0.3-1.5 0.97-1.8 1.81-3.52 9.84-10.51 16.75-19.7 19.45-1.28 0.38-2.15 1.55-2.15 2.88v1.07c0 1.57 1.2 2.87 2.76 2.99 11.16 0.88 21.17 3.45 28.19 7.23 7.37 3.97 11.1 8.91 11.1 14.71v7.94h-96.27v-7.94c0-6.12 3.74-11.2 11.11-15.08 6.94-3.65 16.68-6.03 28.16-6.87 1.57-0.11 2.78-1.42 2.78-2.99v-1.06c0-1.33-0.88-2.5-2.15-2.88-9.18-2.71-16.18-9.61-19.7-19.45-0.3-0.84-0.92-1.49-1.76-1.79-0.36-0.2-1.67-1.73-2.82-6.01-0.89-3.3-1.11-6.18-1-7.04 0.23-0.52 0.3-1.09 0.22-1.65-0.38-2.51-3.35-24.89 7.91-38.03 5.67-6.63 14.19-10.02 25.33-10.08m0.05-3h-0.02-0.02c-42.56 0.23-37.08 45.79-36.22 51.54-1.12 1.8 1.28 15.54 5.5 17.07 4.11 11.49 12.35 18.57 21.67 21.32v1.06c-22.16 1.63-42.05 9.29-42.05 24.94v10.94h102.27v-10.94c0-14.79-19.8-23.16-42.05-24.92v-1.07c9.32-2.75 17.57-9.83 21.67-21.32 4.22-1.53 6.62-15.3 5.48-17.12 0.89-5.94 6.23-51.27-36.23-51.5z",
        fill: "#424242"
      })
    )
  );
}

exports.default = BustInSilhouette;
