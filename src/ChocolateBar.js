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

function ChocolateBar(props) {
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
        id: "d",
        x1: 63.999,
        x2: 63.999,
        y1: 11.93,
        y2: 67.27,
        gradientTransform: "matrix(.7071 -.7071 .7071 .7071 -26.51 64)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795649",
        offset: 0.1693
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D4137",
        offset: 0.7938
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.59 82.61-38.91 38.76c-2.35 2.34-6.17 2.34-8.52 0l-68.4-68.13c-2.35-2.34-2.35-6.14 0-8.49l38.92-38.75c2.35-2.34 6.17-2.34 8.52 0l68.4 68.12c2.35 2.34 2.35 6.14-0.01 8.49z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48.94 7.24c0.81 0 1.57 0.31 2.14 0.88l68.4 68.12c0.57 0.57 0.88 1.32 0.88 2.12s-0.31 1.55-0.88 2.12l-38.91 38.76c-0.57 0.57-1.33 0.88-2.14 0.88s-1.57-0.31-2.14-0.88l-68.41-68.13c-0.57-0.56-0.88-1.31-0.88-2.11s0.31-1.55 0.88-2.12l38.91-38.76c0.58-0.56 1.34-0.88 2.15-0.88m0-3c-1.54 0-3.08 0.59-4.26 1.76l-38.92 38.75c-2.35 2.34-2.35 6.14 0 8.49l68.4 68.12c1.18 1.17 2.72 1.76 4.26 1.76s3.08-0.59 4.26-1.76l38.91-38.76c2.35-2.34 2.35-6.14 0-8.49l-68.39-68.11c-1.18-1.17-2.72-1.76-4.26-1.76z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 71.76,
        x2: 103.77,
        y1: 71.684,
        y2: 103.69,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.0267
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53A35",
        offset: 0.7214
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122.24 81.97-40.2 40.03c-2.35 2.34-6.17 2.34-8.52 0l-29.94-29.82c-2.35-2.34-2.35-6.14 0-8.49l40.19-40.03c2.35-2.34 6.17-2.34 8.52 0l29.94 29.82c2.36 2.35 2.36 6.15 0.01 8.49z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("polygon", {
      points:
        "28.75 36.52 28.74 31.4 10.55 49.52 28.74 67.63 28.75 62.52 15.7 49.52",
      fill: "#8D6E63"
    }),
    _react2.default.createElement("polygon", {
      points:
        "28.75 36.52 41.81 49.52 28.75 62.52 28.76 67.63 46.95 49.52 28.76 31.4",
      fill: "#6D4D42"
    }),
    _react2.default.createElement("polygon", {
      points: "28.75 36.52 15.7 49.52 28.75 62.52 41.81 49.52",
      fill: "#795649"
    }),
    _react2.default.createElement("polygon", {
      points:
        "49.73 15.62 49.72 10.5 31.53 28.62 49.72 46.74 49.73 41.62 36.68 28.62",
      fill: "#8D6E63"
    }),
    _react2.default.createElement("polygon", {
      points:
        "49.73 15.62 62.79 28.62 49.73 41.62 49.74 46.74 67.93 28.62 49.74 10.5",
      fill: "#6D4D42"
    }),
    _react2.default.createElement("polygon", {
      points: "49.73 15.62 36.68 28.62 49.73 41.62 62.79 28.62",
      fill: "#795649"
    }),
    _react2.default.createElement("polygon", {
      points:
        "50.33 58.01 50.33 52.89 32.13 71.01 50.33 89.13 50.33 84.01 37.28 71.01",
      fill: "#795649"
    }),
    _react2.default.createElement("polygon", {
      points:
        "50.33 58.01 63.39 71.01 50.33 84.01 50.34 89.13 68.53 71.01 50.34 52.89",
      fill: "#5D4137"
    }),
    _react2.default.createElement("polygon", {
      points: "50.33 58.01 37.28 71.01 50.33 84.01 63.39 71.01",
      fill: "#6D4D42"
    }),
    _react2.default.createElement("polygon", {
      points:
        "71.31 37.11 71.3 32 53.11 50.12 71.3 68.23 71.31 63.12 58.26 50.12",
      fill: "#795649"
    }),
    _react2.default.createElement("polygon", {
      points:
        "71.31 37.11 84.37 50.12 71.31 63.12 71.32 68.23 89.51 50.12 71.32 32",
      fill: "#5D4137"
    }),
    _react2.default.createElement("polygon", {
      points: "71.31 37.11 58.26 50.12 71.31 63.12 84.37 50.12",
      fill: "#6D4D42"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.296,
        x2: 61.637,
        y1: 86.509,
        y2: 94.369,
        gradientTransform: "matrix(.7071 -.7071 .7071 .7071 -26.51 64)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#434343",
        offset: 0.3
      }),
      _react2.default.createElement("stop", {
        stopColor: "#434343",
        stopOpacity: 0,
        offset: 0.7938
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.79 68.59-53.82 36.15-11.4-11.35c-1.57-1.57-1.45-4.23 0.27-5.94l42.59-42.42c1.72-1.71 4.39-1.83 5.97-0.27l17.37 17.3c1.81 1.81 1.33 4.98-0.98 6.53z",
      fill: "url(#b)",
      opacity: 0.4
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.04 44.91c0.81 0 1.57 0.31 2.14 0.88l29.94 29.82c0.57 0.57 0.88 1.32 0.88 2.12s-0.31 1.55-0.88 2.12l-40.19 40.03c-0.57 0.57-1.33 0.88-2.14 0.88s-1.57-0.31-2.14-0.88l-29.95-29.82c-0.57-0.57-0.88-1.32-0.88-2.12s0.31-1.55 0.88-2.12l40.19-40.03c0.58-0.57 1.34-0.88 2.15-0.88m0-3c-1.54 0-3.08 0.59-4.26 1.76l-40.2 40.03c-2.35 2.34-2.35 6.14 0 8.49l29.94 29.81c1.18 1.17 2.72 1.76 4.26 1.76s3.08-0.59 4.26-1.76l40.19-40.03c2.35-2.34 2.35-6.14 0-8.49l-29.93-29.82c-1.18-1.17-2.72-1.75-4.26-1.75z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 59.073,
        x2: 81.167,
        y1: 59.162,
        y2: 81.256,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF0",
        offset: 0.1693
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0D8DC",
        offset: 0.7938
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m106.57 62.92-56.84 38.54-11.8-11.75c-1.63-1.62-1.47-4.41 0.35-6.23l45.15-44.97c1.82-1.82 4.62-1.98 6.25-0.35l17.99 17.91c1.88 1.87 1.35 5.19-1.1 6.85z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.89 40.04c0.2 0 0.48 0.04 0.68 0.25l17.99 17.91c0.23 0.23 0.26 0.56 0.24 0.8-0.05 0.55-0.39 1.09-0.91 1.44l-54.8 37.15-10.04-10c-0.16-0.16-0.24-0.38-0.24-0.66 0-0.46 0.22-0.93 0.6-1.31l45.15-44.97c0.38-0.39 0.86-0.61 1.33-0.61m0-3c-1.21 0-2.47 0.5-3.45 1.47l-45.16 44.97c-1.82 1.82-1.98 4.61-0.35 6.23l11.8 11.75 56.84-38.54c2.45-1.66 2.98-4.98 1.11-6.85l-17.99-17.91c-0.75-0.75-1.76-1.12-2.8-1.12z",
        fill: "#434343"
      })
    )
  );
}

exports.default = ChocolateBar;
