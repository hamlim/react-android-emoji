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

function RailwayTrack(props) {
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
        id: "g",
        x1: 28.028,
        x2: 28.028,
        y1: 43,
        y2: 66.676,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5D6A7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#66BB6A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m50.38 64.78c0-1.78-1.66-2.79-2.86-3.71-1.28-0.99-2.01-2.07-2.23-3.73-0.21-1.55-0.03-3.38-1.1-4.63-0.77-0.9-2-1.2-3.15-1.2-1.35 0-2.7 0.27-4.05 0.25-0.16 0-0.32-0.01-0.46-0.08l-0.06-0.03c-0.21-0.14-0.3-0.4-0.38-0.65-0.58-1.85-1.34-3.67-2.45-5.24-1.21-1.71-2.86-2.74-4.54-3.86-2.32-1.53-4.54-2.56-7.23-1.42-2.3 0.97-4.16 2.79-6.06 4.41-0.11 0.09-0.23 0.19-0.37 0.2-0.14 0.02-0.28-0.06-0.4-0.13-1.67-1.02-3.42-3.16-5.31-1.15-0.85 0.91-1.17 2.22-1.37 3.47-0.21 1.26-0.35 2.56-0.95 3.67-0.71 1.29-1.87 1.72-2.99 2.48-0.12 0.08-0.23 0.18-0.34 0.26v19.24c0.36 0.3 0.75 0.59 1.2 0.89 2.13 1.42 3.41 1.2 6.06 1.2 2.45 0 5.4 3.53 7.41 2.3 2.03-1.24 3.18-3.19 4.46-5.34 1.25 2.2 1.75 5.78 4.06 7.04 2.12 1.15 5.92-4.85 8.56-4.85 2.47 0 4.14 1.88 6.18 0.86 2.2-1.11 8.25 1.33 9.56-0.64 1.35-2.03-1.19-7.05-1.19-9.61z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 80.083,
        x2: 123.93,
        y1: 62.841,
        y2: 62.841,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5D6A7",
        offset: 0.0153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E7D32",
        offset: 0.9981
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.93 45.6c-0.67-0.05-1.34-0.03-2 0.08-0.32 0.05-0.63 0.13-0.94 0.22-1.64 0.51-2.4 1.74-3.76 2.62-0.14 0.09-0.28 0.17-0.45 0.19-0.27 0.02-0.52-0.15-0.74-0.31-3.61-2.58-8.03-3.08-12.3-2.25-1.43 0.28-2.86 0.66-4.14 1.36-0.8 0.44-1.53 1.01-2.12 1.7-0.55 0.66-0.78 1.73-1.73 1.82-6.78 0.67-15.67 6.04-15.67 13.72 0 7.35 9.41 15.35 17.32 15.35 5.49 0 10.29-7.08 12.69-11.29 2.55 4.28 6.86 5.4 11.79 5.4 0.68 0 1.36-0.03 2.04-0.08v-28.53z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 102.01,
        x2: 102.01,
        y1: 43,
        y2: 66.676,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5D6A7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#66BB6A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.93 45.6c-0.67-0.05-1.34-0.03-2 0.08-0.32 0.05-0.63 0.13-0.94 0.22-1.64 0.51-2.4 1.74-3.76 2.62-0.14 0.09-0.28 0.17-0.45 0.19-0.27 0.02-0.52-0.15-0.74-0.31-3.61-2.58-8.03-3.08-12.3-2.25-1.43 0.28-2.86 0.66-4.14 1.36-0.8 0.44-1.53 1.01-2.12 1.7-0.55 0.66-0.78 1.73-1.73 1.82-6.78 0.67-15.67 6.04-15.67 13.72 0 7.35 9.41 15.35 17.32 15.35 5.49 0 10.32-4.52 12.72-8.74 2.55 4.28 6.83 2.84 11.76 2.84 0.68 0 1.36-0.03 2.04-0.08v-28.52z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m24.17 43c0.81 0 1.8 0.42 3.29 1.41l0.26 0.17c1.43 0.94 2.66 1.76 3.49 2.92 0.79 1.11 1.44 2.52 2.03 4.41 0.13 0.42 0.48 1.53 1.59 2.25 0.12 0.08 0.25 0.15 0.38 0.21 0.69 0.34 1.33 0.38 1.76 0.39h0.11c0.81 0 1.55-0.07 2.27-0.14 0.6-0.06 1.17-0.11 1.69-0.11 0.55 0 0.82 0.12 0.86 0.15 0.17 0.2 0.24 1.16 0.28 1.74 0.03 0.43 0.06 0.88 0.12 1.34 0.32 2.36 1.39 4.17 3.36 5.7 0.15 0.12 0.32 0.24 0.48 0.36 0.4 0.3 1.05 0.78 1.22 1.05 0.01 1.36 0.42 2.83 0.85 4.39 0.22 0.79 0.57 2.06 0.7 2.94-0.61-0.03-1.36-0.12-2.08-0.2-1.03-0.12-2.09-0.25-3.1-0.25-1.24 0-2.21 0.19-3.05 0.61-0.22-0.03-0.72-0.21-1.07-0.34-0.94-0.35-2.23-0.82-3.8-0.82-2.36 0-4.29 1.7-6.15 3.34-0.5 0.44-1.24 1.1-1.76 1.47-1.68-0.84-4.63-2.08-7.32-2.08-1.1 0-2.09 0.21-2.94 0.62-0.39-0.16-1.01-0.52-1.45-0.77-1.4-0.8-2.99-1.72-4.85-1.72-0.35 0-0.68 0-0.99 0.01-0.25 0-0.5 0.01-0.73 0.01-1.17 0-1.66-0.05-2.55-0.62v-16.1c0.95-0.58 2.13-1.39 2.97-2.92 0.78-1.42 1.01-2.88 1.21-4.16l0.07-0.46c0.11-0.66 0.23-1.17 0.37-1.51 0.19 0.13 0.4 0.28 0.56 0.4 0.38 0.28 0.78 0.58 1.23 0.85 0.23 0.14 0.94 0.57 1.92 0.57h0.21l0.17-0.02c1.06-0.12 1.73-0.69 1.98-0.9 0.31-0.26 0.62-0.53 0.93-0.8 1.48-1.28 2.87-2.5 4.36-3.13 0.4-0.17 0.76-0.26 1.12-0.26m0-3c-0.73 0-1.49 0.15-2.29 0.49-2.3 0.97-4.16 2.79-6.06 4.41-0.11 0.09-0.23 0.19-0.37 0.2h-0.04c-0.13 0-0.25-0.07-0.36-0.13-1.17-0.71-2.38-1.97-3.65-1.97-0.54 0-1.09 0.23-1.66 0.83-0.85 0.91-1.17 2.22-1.37 3.47-0.21 1.26-0.35 2.56-0.95 3.67-0.71 1.29-1.87 1.72-2.99 2.48-0.12 0.08-0.23 0.18-0.34 0.26v19.24c0.36 0.3 0.75 0.59 1.2 0.89 1.61 1.08 2.74 1.21 4.35 1.21 0.51 0 1.07-0.01 1.72-0.01 2.09 0 4.53 2.56 6.46 2.56 0.34 0 0.65-0.08 0.95-0.26 0.5-0.31 1.14-0.43 1.84-0.43 2.14 0 4.94 1.19 6.68 2.13 0.19 0.1 0.38 0.15 0.59 0.15 2.18 0 5.56-5 7.96-5 1.94 0 3.39 1.16 4.91 1.16 0.41 0 0.83-0.09 1.27-0.31 0.45-0.22 1.05-0.3 1.74-0.3 1.66 0 3.82 0.46 5.49 0.46 1.06 0 1.93-0.19 2.33-0.8 1.35-2.03-1.19-7.05-1.19-9.61 0-1.78-1.66-2.79-2.86-3.71-1.28-0.99-2.01-2.07-2.23-3.73-0.21-1.55-0.03-3.38-1.1-4.63-0.77-0.9-2-1.2-3.14-1.2-1.33 0-2.64 0.25-3.97 0.25h-0.09c-0.16 0-0.32-0.01-0.46-0.08l-0.06-0.03c-0.21-0.14-0.3-0.4-0.38-0.65-0.58-1.85-1.34-3.67-2.45-5.24-1.21-1.71-2.86-2.74-4.54-3.86-1.63-1.08-3.21-1.91-4.94-1.91z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m107.46 48.79c2.63 0 4.94 0.69 6.85 2.06 0.36 0.26 1.22 0.87 2.43 0.87 0.11 0 0.21 0 0.32-0.01 0.82-0.07 1.43-0.41 1.81-0.66 0.7-0.45 1.23-0.93 1.71-1.35 0.13-0.12 0.25-0.22 0.36-0.32v21.84h-0.29c-0.39 0-0.77 0.01-1.14 0.01-3.78 0-5.56-0.33-6.79-2.4l-2.63-4.42-2.55 4.47c-2.34 4.1-6.37 8.23-10.11 8.23-6.42 0-14.32-6.81-14.32-12.35 0-5.85 7.55-10.19 12.97-10.73 2.2-0.22 3.18-1.91 3.6-2.64 0.05-0.09 0.1-0.19 0.14-0.25 0.31-0.37 0.74-0.72 1.26-1 0.8-0.44 1.81-0.77 3.27-1.05 1.04-0.19 2.09-0.3 3.11-0.3m15.79-3.22c-0.44 0-0.89 0.03-1.32 0.11-0.32 0.05-0.63 0.13-0.94 0.22-1.64 0.51-2.4 1.74-3.76 2.62-0.14 0.09-0.28 0.17-0.45 0.19h-0.05c-0.25 0-0.48-0.16-0.69-0.31-2.57-1.84-5.55-2.62-8.59-2.62-1.23 0-2.48 0.13-3.71 0.37-1.43 0.28-2.86 0.66-4.14 1.36-0.8 0.44-1.53 1.01-2.12 1.7-0.55 0.66-0.78 1.73-1.73 1.82-6.78 0.67-15.67 6.04-15.67 13.72 0 7.35 9.41 15.35 17.32 15.35 5.49 0 10.32-5.53 12.72-9.75 2.13 3.57 5.46 3.86 9.37 3.86 0.78 0 1.57-0.01 2.39-0.01 0.68 0 1.36-0.03 2.04-0.08v-28.52c-0.22-0.02-0.44-0.03-0.67-0.03z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 63.97,
        x2: 63.97,
        y1: 65,
        y2: 123.06,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5D6A7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#66BB6A",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4.04,
      y: 64,
      width: 119.87,
      height: 60,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64.019,
        cy: 94,
        r: 47.422,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#6D4C41",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#563A33",
        offset: 0.6122
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4E342E",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "4.13 118.5 47.42 64 80 64 124 118.5 124 123.83 4.04 124",
      fill: "url(#c)"
    }),
    _react2.default.createElement("polygon", {
      points: "80.52 68.52 47.42 68.54 49.56 65.71 78.25 65.69",
      fill: "#BCAAA4"
    }),
    _react2.default.createElement("polygon", {
      points: "84.25 73.61 44 73.63 46.37 70.39 81.88 70.36",
      fill: "#BCAAA4"
    }),
    _react2.default.createElement("polygon", {
      points: "88.12 80.11 39.88 80.14 42.49 76.03 85.44 76",
      fill: "#BCAAA4"
    }),
    _react2.default.createElement("polygon", {
      points: "96 91.96 32 92 37.17 83.78 90.79 83.75",
      fill: "#BCAAA4"
    }),
    _react2.default.createElement("polygon", {
      points: "106.82 107.95 21.16 108 29.5 95.88 98.12 95.88",
      fill: "#BCAAA4"
    }),
    _react2.default.createElement("polygon", {
      points: "117.57 124 109.51 111.74 18.73 111.8 10.74 124",
      fill: "#BCAAA4"
    }),
    _react2.default.createElement("rect", {
      x: 47.42,
      y: 68.54,
      width: 33.1,
      height: 0.39,
      fill: "#3E2723"
    }),
    _react2.default.createElement("rect", {
      x: 44,
      y: 73.69,
      width: 40.25,
      height: 0.56,
      fill: "#3E2723"
    }),
    _react2.default.createElement("rect", {
      x: 39.88,
      y: 80.13,
      width: 48.25,
      height: 1.01,
      fill: "#3E2723"
    }),
    _react2.default.createElement("rect", {
      x: 32,
      y: 92.2,
      width: 64.19,
      height: 1.51,
      fill: "#3E2723"
    }),
    _react2.default.createElement("rect", {
      x: 21.24,
      y: 108,
      width: 85.66,
      height: 2.17,
      fill: "#3E2723"
    }),
    _react2.default.createElement("polygon", {
      points: "28.25 124 19.08 124.04 56.96 64 56.92 65.33",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 52.252,
        x2: 23.378,
        y1: 65.344,
        y2: 120.72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.0036945
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E9E9E9",
        offset: 0.6508
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("polygon", {
      points: "26.25 124 17.08 124 54.25 64 57 64.03",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "99.83 124 109 124.04 71.12 64 71.17 65.33",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 72.252,
        x2: 43.378,
        y1: 65.344,
        y2: 120.72,
        gradientTransform: "matrix(-1 0 0 1 148.08 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.0028473
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F1F1F1",
        offset: 0.4347
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E5E5E5",
        offset: 0.8536
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.9884
      })
    ),
    _react2.default.createElement("polygon", {
      points: "101.83 124 111 124 73.84 64 71.08 64.03",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m120.9 67v54h-113.86v-54h113.86m3-3h-119.86v60h119.86v-60z",
        fill: "#424242"
      })
    )
  );
}

exports.default = RailwayTrack;
