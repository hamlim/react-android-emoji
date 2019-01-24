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

function Package(props) {
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
        y1: 6.5,
        y2: 120.08,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE2B8",
        offset: 0.0059391
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0.9219
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "69.1 8.17 8.07 38.09 8.07 91.65 58.9 121.08 119.93 87.06 119.93 33.5",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m38.46 67.02-10-5.19c-1.95-1.01-3.84-0.23-4.16 1.85-0.39 2.15 0.99 4.62 3.05 5.77l10.64 5.57c0.59 0.28 1.2 0.42 1.75 0.41 1.3-0.06 2.18-1 2.24-2.53 0.13-2.17-1.41-4.71-3.52-5.88z",
      fill: "#593E37"
    }),
    _react2.default.createElement("polygon", {
      points: "38.99 63.45 28.65 57.9 28.65 48.47 38.8 53.52",
      fill: "#A17F69"
    }),
    _react2.default.createElement("polygon", {
      points: "38.31 109.06 28.65 103.46 28.65 92.14 38.31 97.9",
      fill: "#A17F69"
    }),
    _react2.default.createElement("polygon", {
      points: "8.07 38.09 58.99 63.38 119.93 33.03 69.1 8.17",
      fill: "#FFE082"
    }),
    _react2.default.createElement("polygon", {
      points: "99.15 22.89 89.2 17.93 28.74 48.47 38.8 53.52",
      fill: "#C99470"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 89.459,
        x2: 89.459,
        y1: 57.25,
        y2: 113.82,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAF39",
        offset: 0.011
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DE8400",
        offset: 0.927
      })
    ),
    _react2.default.createElement("polygon", {
      points: "58.99 63.38 58.99 121.18 119.93 87.06 119.93 33.5",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m69.11 11.46 47.83 23.4v50.4l-57.88 32.4-47.99-27.79v-49.96l58.04-28.45m-0.01-3.34-61.03 29.92v53.56l50.83 29.43 0.09-0.05v0.15l60.94-34.12v-53.56l-0.47-0.23 0.47-0.23-50.83-24.87z",
        fill: "#444"
      })
    )
  );
}

exports.default = Package;
