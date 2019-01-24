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

function StraightRuler(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("circle", {
      cx: 35.25,
      cy: 103.54,
      r: 4.6
    }),
    _react2.default.createElement("polygon", {
      points: "93.99 4.11 5.17 93.28 34.54 122.65 123.71 33.48",
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m94 8.34 25.45 25.15-84.92 84.92-25.12-25.13 84.59-84.94m-0.01-4.23-88.82 89.17 29.37 29.37 89.17-89.17-29.72-29.37z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 25.515,
        x2: 78.164,
        y1: 24.81,
        y2: 77.46,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0028914
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECECEC",
        offset: 0.4273
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.6436
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7D7D7",
        offset: 0.8129
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C4C4C4",
        offset: 0.957
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "13.31 93.28 17.91 88.68 23.21 93.99 27.46 89.74 22.15 84.43 26.4 80.19 37.01 90.8 41.26 86.56 30.65 75.94 34.89 71.7 40.2 77 44.45 72.76 39.14 67.45 43.38 63.2 48.69 68.51 52.94 64.26 47.63 58.96 51.88 54.71 62.49 65.33 66.38 61.43 55.77 50.82 60.02 46.57 65.32 51.88 69.57 47.63 64.26 42.33 68.51 38.08 73.82 43.39 78.06 39.14 72.75 33.83 77 29.59 87.62 40.2 91.86 35.96 81.25 25.34 85.49 21.09 90.8 26.4 94.69 22.51 89.39 17.2 93.99 12.6 114.86 33.48 34.54 114.16",
      fill: "url(#a)"
    })
  );
}

exports.default = StraightRuler;
