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

function Heartbeat(props) {
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
        id: "a",
        cx: 63.54,
        cy: 12.506,
        r: 70.502,
        gradientTransform: "matrix(.9985 0 0 .9337 .0985 4.2468)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.58 22.94c-20.14 0-27.54 24.08-27.54 24.08s-7.3-24.08-27.59-24.08c-15.24 0-32.62 12.08-26.2 39.54 6.42 27.45 53.59 61.52 53.59 61.52s0.24-0.1 0.24-0.25c0 0.15 0.16 0.23 0.16 0.23s47.09-34.04 53.51-61.5-10.93-39.54-26.17-39.54z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m91.58 25.94c7.68 0 14.91 3.33 19.34 8.92 5.16 6.51 6.52 15.83 3.92 26.94-5.45 23.32-42.72 52.5-50.81 58.61-8.15-6.15-45.41-35.32-50.86-58.61-2.6-11.11-1.24-20.42 3.92-26.93 4.43-5.59 11.67-8.93 19.36-8.93 17.78 0 24.65 21.73 24.72 21.95l2.83 9.35 2.9-9.34c0.07-0.22 7.03-21.96 24.68-21.96m0-3c-20.14 0-27.54 24.08-27.54 24.08s-7.3-24.08-27.59-24.08c-15.24 0-32.62 12.08-26.2 39.54 6.42 27.45 53.59 61.52 53.59 61.52s0.24-0.1 0.24-0.25c0 0.15 0.16 0.23 0.16 0.23s47.09-34.04 53.51-61.5-10.93-39.54-26.17-39.54z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#EF9A9A"
      },
      _react2.default.createElement("path", {
        d:
          "m10.94 47.6c-0.01-0.05-0.02-0.09-0.03-0.14h0.01c0.01 0.04 0.02 0.09 0.02 0.14z"
      }),
      _react2.default.createElement("path", {
        d:
          "m34.06 15.78c1.9 0.14 3.62 0.58 5.17 1.23 1.29 0.54 0.67 2.44-0.7 2.16-0.73-0.15-1.48-0.25-2.26-0.31-10.96-0.77-17.54 3.81-21.32 8.33-0.89 1.07-2.59-0.06-1.95-1.3 2.83-5.43 8.74-11.02 21.06-10.11z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#EF5350"
      },
      _react2.default.createElement("path", {
        d:
          "m3.51 46.09c-0.01-0.06-0.02-0.12-0.03-0.17 0.01 0 0.01 0 0.02-0.01 0 0.06 0.01 0.12 0.01 0.18z"
      }),
      _react2.default.createElement("path", {
        d:
          "m32.65 4.65c5.07 0.26 9.03 2.39 12.09 5.18 0.66 0.61-0.1 1.64-0.88 1.19-2.45-1.41-5.31-2.36-8.62-2.51-17.09-0.81-25.68 9.44-29.46 16.19-0.43 0.77-1.61 0.29-1.37-0.56 2.27-7.94 8.92-20.49 28.24-19.49z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#EF9A9A"
      },
      _react2.default.createElement("path", {
        d:
          "m117.19 47.6c0.01-0.05 0.02-0.09 0.03-0.14h-0.01c-0.01 0.04-0.01 0.09-0.02 0.14z"
      }),
      _react2.default.createElement("path", {
        d:
          "m94.07 15.78c-1.9 0.14-3.62 0.58-5.17 1.23-1.29 0.54-0.67 2.44 0.7 2.16 0.73-0.15 1.48-0.25 2.26-0.31 10.96-0.77 17.54 3.81 21.32 8.33 0.89 1.07 2.59-0.06 1.95-1.3-2.83-5.43-8.74-11.02-21.06-10.11z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#EF5350"
      },
      _react2.default.createElement("path", {
        d:
          "m124.62 46.09c0.01-0.06 0.02-0.12 0.03-0.17-0.01 0-0.01 0-0.02-0.01 0 0.06 0 0.12-0.01 0.18z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.48 4.65c-5.07 0.26-9.03 2.39-12.09 5.18-0.66 0.61 0.1 1.64 0.88 1.19 2.45-1.41 5.31-2.36 8.62-2.51 17.09-0.81 25.68 9.44 29.46 16.19 0.43 0.77 1.61 0.29 1.37-0.56-2.27-7.94-8.92-20.49-28.24-19.49z"
      })
    )
  );
}

exports.default = Heartbeat;
