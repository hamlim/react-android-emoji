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

function Balloon(props) {
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
        "m59.84 102.1c-3.02 4.9 2.38 10.12-1.85 13.91-7.84 7.02-17.44-12.05-29.49 7.49",
      fill: "none",
      stroke: "#795548",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d:
        "m67.47 107.78-1.06 0.1c-4.65 0.43-9.33-0.17-13.72-1.75l0.31-0.83c1.85-4.99 4.82-9.49 8.69-13.14 0.79 5.22 2.58 10.24 5.28 14.77l0.5 0.85z",
      fill: "#F4511E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m60.03 98.54c0.66 2.22 1.49 4.37 2.49 6.46-1.97-0.06-3.92-0.33-5.83-0.79 0.92-2 2.04-3.91 3.34-5.67m1.66-6.38c-3.87 3.65-6.84 8.15-8.69 13.14l-0.31 0.83c3.47 1.25 7.12 1.88 10.79 1.88 0.98 0 1.95-0.04 2.93-0.13l1.06-0.1-0.5-0.84c-2.7-4.54-4.5-9.56-5.28-14.78z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 58.968,
        cy: 25.271,
        r: 46.068,
        gradientTransform: "matrix(.9727 .232 -.232 .9727 15.966 -13.135)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF7043",
        offset: 0.258
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FE6C3F",
        offset: 0.4277
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FA6232",
        offset: 0.6055
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4511E",
        offset: 0.782
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m111.15 51.54c-7.58 31.76-38.66 46.21-50.12 43.47s-32.1-32.02-25.08-61.43c4.95-20.7 25.79-33.47 46.55-28.51s33.6 25.76 28.65 46.47z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73 4v3h0.24c2.79 0 5.71 0.33 8.45 0.99 9.27 2.21 17.18 7.89 22.17 15.99 4.99 8.09 6.55 17.64 4.35 26.87-3.72 15.59-12.99 25.57-20.12 31.2-9.62 7.6-18.92 10.29-23.97 10.29-0.91 0-1.71-0.08-2.39-0.24-4.43-1.06-11.86-7.97-17.49-19.14-3.7-7.34-9.32-22.13-5.37-38.67 3.83-16.07 17.83-27.29 34.36-27.29l-0.23-3m0.47 0c-17.47 0-33.29 11.9-37.52 29.59-7.02 29.4 13.61 58.69 25.08 61.43 0.91 0.22 1.95 0.33 3.09 0.33 13.17 0 40.06-14.57 47.03-43.8 4.94-20.71-7.88-41.51-28.65-46.47-3.02-0.73-6.05-1.08-9.03-1.08z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.28 98.11-5.16-1.23c-1.63-0.39-2.63-2.02-2.25-3.65 0.39-1.63 2.02-2.63 3.65-2.25l5.16 1.23c1.63 0.39 2.63 2.02 2.25 3.65s-2.02 2.63-3.65 2.25z",
      fill: "#BF360C"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m58.82 92.89c0.08 0 0.16 0.01 0.24 0.03l5.16 1.23c0.27 0.06 0.5 0.23 0.64 0.46s0.19 0.51 0.12 0.78c-0.11 0.47-0.52 0.79-1 0.79-0.08 0-0.16-0.01-0.24-0.03l-5.16-1.23c-0.55-0.13-0.9-0.69-0.76-1.24 0.11-0.46 0.53-0.79 1-0.79m0-2c-1.37 0-2.61 0.94-2.95 2.33-0.39 1.63 0.62 3.26 2.25 3.65l5.16 1.23c0.24 0.06 0.47 0.08 0.71 0.08 1.37 0 2.61-0.94 2.95-2.33 0.39-1.63-0.62-3.26-2.25-3.65l-5.16-1.23c-0.24-0.05-0.47-0.08-0.71-0.08z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Balloon;
