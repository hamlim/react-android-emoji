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

function Doughnut(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 55.44,
      width: 11.5,
      height: 24.77,
      fill: "#FBAC35"
    }),
    _react2.default.createElement("rect", {
      x: 112.5,
      y: 55.44,
      width: 11.5,
      height: 24.77,
      fill: "#FBAC35"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 28.939,
        y2: 75.018,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8981D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8951D",
        offset: 0.1908
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F68D1E",
        offset: 0.3777
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F47F20",
        offset: 0.5623
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F47C20",
        offset: 0.5904
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 29.42c-28.31 0-52.03 19.59-58.34 38.35h116.68c-6.31-18.76-30.03-38.35-58.34-38.35zm-0.31 35.36c-10.16 0-18.39-4.08-18.39-9.12s8.23-9.12 18.39-9.12 18.39 4.08 18.39 9.12-8.23 9.12-18.39 9.12z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 54.048,
        cy: 102.3,
        r: 59.884,
        gradientTransform: "matrix(1 0 0 .4738 0 53.835)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAA629",
        offset: 0.0014673
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAA327",
        offset: 0.2514
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F99B23",
        offset: 0.496
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F78D1F",
        offset: 0.7378
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F78C1E",
        offset: 0.7509
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M5.66,67.77C4.59,70.97,4,74.15,4,77.2c0,20.93,19.75,40.74,60,40.74s60-19.81,60-40.74 c0-3.05-0.59-6.22-1.66-9.42H5.66z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.78 65.82c0.08 3.56 0.22 9.36 0.22 11.38 0 9.94-4.87 19.11-13.72 25.83-10.26 7.79-25.23 11.91-43.28 11.91s-33.02-4.12-43.28-11.91c-8.85-6.72-13.72-15.89-13.72-25.83 0-2.02 0.08-7.8 0.14-11.38h113.64m2.93-3h-119.53s-0.18 11.33-0.18 14.38c0 20.93 19.75 40.74 60 40.74s60-19.81 60-40.74c0-3.05-0.29-14.38-0.29-14.38z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m124 56.62c0-20.93-26.86-37.9-60-37.9-32.93 0-59.65 16.76-59.98 37.51 0 0.61-0.15 11.2 0.23 15.7 0.19 2.25 3.45 14.57 9.75 13.04 18.5-4.5 19.15 11.76 31.44 12.76 14.03 1.14 14.06-8.39 24.56-8.76 14.58-0.52 17.9 8.79 29.78 6.26 10.64-2.27 10.24-17.93 15.41-15.8 5.56 2.29 8.47-2.66 8.47-2.66s0.34-14.1 0.34-20.15zm-60.31-25.38c26.81 0 27.46 13.18 27.46 21.26s-14.5 12.63-27.46 12.63-27.46-4.55-27.46-12.63c0-8.07 0.65-21.26 27.46-21.26z",
        fill: "#4E352E"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 32.42c12.43 0 25.1 4.12 35.69 11.59 8.16 5.76 14.62 13.16 18.21 20.76h-39.8c4.34-2.19 6.99-5.41 6.99-9.12 0-6.91-9.19-12.12-21.39-12.12-12.19 0-21.39 5.21-21.39 12.12 0 3.71 2.65 6.93 6.99 9.12h-39.19c3.59-7.6 10.04-14.99 18.21-20.76 10.58-7.47 23.25-11.59 35.68-11.59m0-3c-28.31 0-52.03 19.59-58.34 38.35h116.68c-6.31-18.76-30.03-38.35-58.34-38.35zm-0.31 35.36c-10.16 0-18.39-4.08-18.39-9.12s8.23-9.12 18.39-9.12 18.39 4.08 18.39 9.12c0 5.03-8.23 9.12-18.39 9.12z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.661,
        cy: 47.552,
        r: 51.811,
        gradientTransform: "matrix(1 0 0 .5511 0 21.345)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#795649",
        offset: 0.3535
      }),
      _react2.default.createElement("stop", {
        stopColor: "#775447",
        offset: 0.5242
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6E4D42",
        offset: 0.6914
      }),
      _react2.default.createElement("stop", {
        stopColor: "#61433A",
        offset: 0.8565
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D4137",
        offset: 0.895
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124 53.59c0-20.93-26.86-37.9-60-37.9-32.93 0-59.65 16.76-59.98 37.51 0 0.61-0.15 11.2 0.23 15.7 0.19 2.25 3.45 14.57 9.75 13.04 18.5-4.5 19.15 11.76 31.44 12.76 14.03 1.14 14.06-8.38 24.56-8.76 14.58-0.52 17.9 8.79 29.78 6.26 10.64-2.27 10.24-17.93 15.41-15.8 5.56 2.29 8.47-2.66 8.47-2.66s0.34-14.1 0.34-20.15zm-60.31-18.74c12.96 0 23.46 6.55 23.46 14.63s-10.5 12.63-23.46 12.63-23.46-4.55-23.46-12.63 10.5-14.63 23.46-14.63z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m42.52 31.1-6.25-2.39c-1.18-0.45-1.77-1.78-1.32-2.96s1.78-1.77 2.96-1.32l6.25 2.39c1.18 0.45 1.77 1.78 1.32 2.96s-1.78 1.77-2.96 1.32z",
      fill: "#84D2F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m49.93 87.79-5.86-3.23c-1.11-0.61-1.51-2-0.9-3.11s2-1.51 3.11-0.9l5.86 3.23c1.11 0.61 1.51 2 0.9 3.11s-2 1.51-3.11 0.9z",
      fill: "#EC407A"
    }),
    _react2.default.createElement("path", {
      d:
        "m28.16 75.75-6.32 2.2c-1.19 0.42-2.5-0.21-2.92-1.41-0.42-1.19 0.21-2.5 1.41-2.92l6.32-2.2c1.19-0.42 2.5 0.21 2.92 1.41s-0.21 2.5-1.41 2.92z",
      fill: "#44B3E6"
    }),
    _react2.default.createElement("path", {
      d:
        "m101.05 80.92-5.36 4c-1.01 0.76-2.45 0.55-3.2-0.47-0.76-1.01-0.55-2.45 0.47-3.2l5.36-4c1.01-0.76 2.45-0.55 3.2 0.47 0.75 1.01 0.54 2.44-0.47 3.2z",
      fill: "#44B3E6"
    }),
    _react2.default.createElement("path", {
      d:
        "m116.54 61.81-0.61 5.16c-0.11 0.95-0.98 1.64-1.93 1.52-0.95-0.11-1.64-0.98-1.52-1.93l0.61-5.16c0.11-0.95 0.98-1.64 1.93-1.52 0.95 0.11 1.64 0.98 1.52 1.93z",
      fill: "#EC407A"
    }),
    _react2.default.createElement("path", {
      d:
        "m9.19 61.8 3.71 4.93c0.42 0.55 0.3 1.34-0.25 1.75l-0.78 0.59c-0.55 0.42-1.34 0.3-1.75-0.25l-3.71-4.93c-0.42-0.55-0.3-1.34 0.25-1.75l0.78-0.59c0.55-0.41 1.33-0.3 1.75 0.25z",
      fill: "#EC407A"
    }),
    _react2.default.createElement("path", {
      d:
        "m93.91 31.8-6.25-2.39c-1.18-0.45-1.77-1.78-1.32-2.96s1.78-1.77 2.96-1.32l6.25 2.39c1.18 0.45 1.77 1.78 1.32 2.96-0.45 1.19-1.78 1.78-2.96 1.32z",
      fill: "#84D2F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.56 39.5-4.98 3.63c-1.02 0.75-2.45 0.52-3.2-0.5s-0.52-2.45 0.5-3.2l4.98-3.63c1.02-0.75 2.45-0.52 3.2 0.5s0.52 2.46-0.5 3.2z",
      fill: "#F48FB1"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.63 24.87-5.24 0.96c-1.24 0.23-2.44-0.59-2.67-1.84-0.23-1.24 0.59-2.44 1.84-2.67l5.24-0.96c1.24-0.23 2.44 0.59 2.67 1.84s-0.6 2.44-1.84 2.67z",
      fill: "#F48FB1"
    }),
    _react2.default.createElement("path", {
      d:
        "m81.76 67.13 1.96-5.84c0.4-1.2 1.7-1.85 2.9-1.44 1.2 0.4 1.85 1.7 1.44 2.9l-1.96 5.84c-0.4 1.2-1.7 1.85-2.9 1.44-1.2-0.4-1.84-1.7-1.44-2.9z",
      fill: "#F06392"
    }),
    _react2.default.createElement("path", {
      d:
        "m21.96 41.1-4.98 3.63c-1.02 0.75-2.45 0.52-3.2-0.5s-0.52-2.45 0.5-3.2l4.98-3.63c1.02-0.75 2.45-0.52 3.2 0.5 0.74 1.02 0.52 2.46-0.5 3.2z",
      fill: "#F48FB1"
    }),
    _react2.default.createElement("path", {
      d:
        "m31.9 57.14-5.85-1.92c-1.2-0.39-1.86-1.69-1.46-2.89 0.39-1.2 1.69-1.86 2.89-1.46l5.85 1.92c1.2 0.39 1.86 1.69 1.46 2.89s-1.69 1.85-2.89 1.46z",
      fill: "#F48FB1"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.34 69.91-6.16 0.03c-1.26 0.01-2.3-1.01-2.3-2.28-0.01-1.26 1.01-2.3 2.28-2.3l6.16-0.03c1.26-0.01 2.3 1.01 2.3 2.28 0 1.26-1.02 2.3-2.28 2.3z",
      fill: "#84D2F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m101.53 56.64-5.85-1.92c-1.2-0.39-1.86-1.69-1.46-2.89 0.39-1.2 1.69-1.86 2.89-1.46l5.85 1.92c1.2 0.39 1.86 1.69 1.46 2.89-0.39 1.2-1.69 1.85-2.89 1.46z",
      fill: "#84D2F6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.97 18.69c15.47 0 29.97 3.78 40.83 10.64 10.43 6.59 16.17 15.21 16.17 24.27 0 5-0.2 15.62-0.26 18.96-0.6 0.63-1.61 1.48-2.61 1.48-0.27 0-0.53-0.06-0.81-0.18-0.9-0.39-1.8-0.59-2.67-0.59-4.07 0-5.89 3.75-7.64 7.39-1.84 3.8-3.74 7.74-7.85 8.61-1.17 0.25-2.26 0.37-3.32 0.37-3.29 0-5.91-1.24-8.95-2.67-4.03-1.9-8.6-4.05-15.72-4.05-0.42 0-0.84 0.01-1.28 0.02-5.63 0.2-8.84 2.65-11.67 4.81-2.85 2.17-5.3 4.04-10.52 4.04-0.64 0-1.32-0.03-2.02-0.09-3.98-0.32-6.52-2.78-9.46-5.63-3.84-3.72-8.19-7.93-16.24-7.93-2.07 0-4.32 0.29-6.7 0.87-0.08 0.02-0.16 0.03-0.23 0.03-1.66 0-4.38-4.93-5.68-10.22-0.14-6.03-0.35-14.9-0.35-15.59 0.33-19.05 25.88-34.54 56.98-34.54m0-3c-32.93 0-59.65 16.76-59.98 37.52 0 0.61 0.36 16.02 0.36 16.02s2.99 12.83 8.67 12.83c0.31 0 0.62-0.04 0.95-0.12 2.24-0.54 4.22-0.79 5.99-0.79 12.84 0 14.65 12.67 25.45 13.55 0.8 0.07 1.55 0.1 2.26 0.1 11.81 0 12.4-8.5 22.3-8.86 0.4-0.01 0.79-0.02 1.17-0.02 11.92 0 16.05 6.72 24.66 6.72 1.22 0 2.52-0.13 3.95-0.44 9.78-2.08 9.79-15.93 14.87-15.93 0.45 0 0.94 0.11 1.47 0.34 0.7 0.3 1.37 0.43 2.01 0.43 3.29 0 5.59-3.39 5.59-3.39s0.28-14 0.28-20.05c0-20.94-26.86-37.91-60-37.91z",
        fill: "#434343"
      })
    )
  );
}

exports.default = Doughnut;