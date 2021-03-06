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

function FramedPicture(props) {
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
        id: "h",
        cx: 63.125,
        cy: 75.5,
        r: 54.371,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.4702
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7BD2FA",
        offset: 0.5492
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6CCDF9",
        offset: 0.6502
      }),
      _react2.default.createElement("stop", {
        stopColor: "#51C4F8",
        offset: 0.763
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2DB7F6",
        offset: 0.8836
      }),
      _react2.default.createElement("stop", {
        stopColor: "#03A9F4",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 24,
      width: 92,
      height: 68,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 36.071,
        y2: 68.298,
        gradientTransform: "matrix(-1 0 0 1 128 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#849AA5",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#637F8D",
        offset: 0.9575
      }),
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.34 51.51c0.68-0.71 1.59-1.15 2.56-1.28 1.24-0.16 2.67 0.04 3.95-0.98 1.34-1.07 7.98-13.31 11.06-13.26 0.81 0.01 1.48 0.72 2.08 1.61 1.07 1.6 1.92 3.82 3.01 3.82 2.27 0 2.27 6.78 5.05 7.59 2.57 0.75 3.42 0.71 5.82 4.21 2.7-3.29 5.06-5.77 6.46-6.4 0.23-0.1 0.44-0.17 0.61-0.17 2.01 0 4.09 5.37 6.16 8.66s3.05 2.44 5 2.2c1.95-0.23 13.9 18.49 13.9 18.49h-80s9.3-19.29 14.34-24.49z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m38.34 51.51c0.68-0.71 1.59-1.15 2.56-1.28 1.24-0.16 2.67 0.04 3.95-0.98 1.34-1.07 7.98-13.31 11.06-13.26 0.81 0.01 1.48 0.72 2.08 1.61 1.07 1.6 1.92 3.82 3.01 3.82 2.27 0 2.27 6.78 5.05 7.59 2.57 0.75 3.42 0.71 5.82 4.21 2.7-3.29 5.06-5.77 6.46-6.4 0.23-0.1 0.44-0.17 0.61-0.17 2.01 0 4.09 5.37 6.16 8.66s3.05 2.44 5 2.2c1.95-0.23 13.9 18.49 13.9 18.49h-80s9.3-19.29 14.34-24.49z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 53.875,
        cy: 43.75,
        r: 36.276,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4DB6AC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4AB5AA",
        offset: 0.2539
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3FB0A5",
        offset: 0.4718
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2DA99D",
        offset: 0.6765
      }),
      _react2.default.createElement("stop", {
        stopColor: "#159F92",
        offset: 0.8719
      }),
      _react2.default.createElement("stop", {
        stopColor: "#009688",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.48 54.15c-2.89-4.43-3.66-4.32-6.44-5.13-2.77-0.81-2.77-7.59-5.05-7.59-1.09 0-1.94-2.22-3.01-3.82-0.6-0.89-1.26-1.6-2.08-1.61-3.08-0.05-9.72 12.18-11.06 13.26-1.27 1.02-2.71 0.82-3.95 0.98-0.98 0.13-1.88 0.57-2.56 1.28-5.03 5.19-14.33 24.48-14.33 24.48h63.2c-1.97-0.77-9.5-13.85-14.72-21.85z",
      fill: "url(#g)",
      opacity: 0.8
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 78.5,
        cy: 49.375,
        r: 26.654,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#66BB6A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#52AC56",
        offset: 0.6026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m90.1 57.52c-1.95 0.24-2.93 1.1-5-2.2-2.07-3.29-4.15-8.66-6.16-8.66-0.17 0-0.38 0.07-0.61 0.17-4.57 2.06-19.49 23.88-22.51 29.17h48.18s-11.95-18.72-13.9-18.48z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m75.24 57.95c0.08-0.2-0.2-0.35-0.33-0.18-1.74 2.31-8.35 8.77-10.84 11.6-0.24 0.28 0.07 0.68 0.4 0.53 1.01-0.47 3.05-1.63 3.24-2.06 0.27-0.62 1.86-2.19 2.36-2.68 0.1-0.1 0.2-0.19 0.3-0.27l2-1.66c0.39-0.32 0.71-0.73 0.92-1.19l1.95-4.09z",
      fill: "#81C784",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m77.65 62.93c0.1-0.14-0.04-0.32-0.2-0.25l-1.91 0.84c-0.15 0.1-0.26 0.23-0.33 0.39l-2.39 4.92c-0.04 0.2 0.24 0.3 0.33 0.12l4.5-6.02z",
      fill: "#81C784",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m52.23 45.7c0.05-0.28-0.34-0.41-0.47-0.15-1.68 3.44-8.63 13.48-11.13 17.78-0.24 0.42 0.26 0.87 0.65 0.59 1.2-0.86 3.55-2.88 3.68-3.49 0.19-0.88 1.86-3.31 2.39-4.07 0.1-0.15 0.21-0.29 0.33-0.43l2.17-2.66c0.42-0.52 0.73-1.13 0.9-1.77l1.48-5.8z",
      fill: "#4DB6AC",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m43.87 54.42c0.15-0.17-0.02-0.43-0.24-0.36l-2.62 0.88c-0.2 0.11-0.37 0.27-0.48 0.47l-3.72 6.19c-0.08 0.26 0.27 0.43 0.42 0.2l6.64-7.38z",
      fill: "#4DB6AC",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m88.95 67.15c0.13 0.08 0.27-0.09 0.17-0.2-1.35-1.51-4.89-6.91-6.5-8.99-0.16-0.2-0.48-0.05-0.42 0.2 0.18 0.76 0.71 2.31 0.98 2.5 0.39 0.27 1.25 1.57 1.52 1.98l0.15 0.24 0.87 1.59c0.17 0.31 0.41 0.58 0.69 0.79l2.54 1.89z",
      fill: "#81C784",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m88.24 62.7c-0.06-0.11 0.04-0.13 0.17-0.04l2.15 1.6c0.16 0.08 0.31 0.21 0.41 0.35l2.22 3.21-1.68-1.56c-0.08-0.07-0.17-0.08-0.14-0.01l0.99 2.6c0.04 0.11-0.15 0.06-0.49 0l-3.63-6.15z",
      fill: "#81C784",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m56.59 46.39c-0.04-0.19 0.12-0.19 0.27 0l2.69 3.28c0.21 0.18 0.4 0.44 0.49 0.69l2.17 5.77-1.98-3.04c-0.09-0.14-0.22-0.18-0.21-0.06l0.52 4.37c0.01 0.19-0.26 0.04-0.74-0.19l-3.21-10.82z",
      fill: "#4DB6AC",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64.608,
        x2: 64.608,
        y1: 64,
        y2: 79.167,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#378C3B",
        offset: 0.6026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E7D32",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.79 76.07s-0.89-0.58-1.35-1.41c0.48 0.06 1.26 0.1 1.04-0.36 0 0-0.97-0.67-1.33-1.6 0.15 0.02 0.3-0.01 0.45-0.1 0 0 0.2-0.14-0.35-0.67 0 0-0.48-0.4-1.23-2.21-0.13-0.3-0.54-0.32-0.67-0.02-0.33 0.71-0.86 1.72-1.39 2.36 0 0-0.7 0.83 0.45 0.53-0.2 0.27-0.97 1.29-1.45 1.55 0 0-0.11 0.12-0.09 0.24-0.28-0.3-0.58-0.67-0.77-1.11 0.48 0.06 1.26 0.09 1.04-0.34 0 0-0.8-0.52-1.21-1.27 0.43 0.05 1.13 0.09 0.93-0.32 0 0-0.88-0.6-1.2-1.44 0.13 0.01 0.27 0 0.4-0.09 0 0 0.18-0.13-0.32-0.6 0 0-0.43-0.36-1.1-1.99-0.11-0.27-0.48-0.28-0.61-0.02-0.3 0.63-0.77 1.55-1.25 2.12 0 0-0.63 0.75 0.41 0.48-0.18 0.24-0.87 1.16-1.3 1.39 0 0-0.49 0.54 0.89 0.47-0.33 0.39-0.82 0.94-1.17 1.12 0 0-0.57 0.58 1.06 0.49-0.2 0.26-0.51 0.65-0.83 0.98-0.01-0.03-0.01-0.06-0.03-0.09 0 0-0.8-0.52-1.21-1.27 0.43 0.05 1.13 0.09 0.93-0.32 0 0-0.88-0.6-1.2-1.44 0.13 0.01 0.27 0 0.4-0.09 0 0 0.18-0.13-0.32-0.6 0 0-0.43-0.36-1.1-1.99-0.11-0.27-0.48-0.28-0.61-0.02-0.3 0.63-0.77 1.55-1.25 2.12 0 0-0.63 0.75 0.41 0.48-0.18 0.24-0.87 1.16-1.3 1.39 0 0-0.49 0.54 0.89 0.47-0.31 0.37-0.77 0.88-1.11 1.08-0.11-0.17-0.21-0.36-0.29-0.55 0.17 0.02 0.36-0.01 0.52-0.12 0 0 0.24-0.16-0.41-0.78 0 0-0.56-0.47-1.43-2.58-0.15-0.35-0.62-0.37-0.79-0.02-0.39 0.82-1 2.01-1.62 2.75 0 0-0.82 0.97 0.53 0.62-0.14 0.2-0.54 0.72-0.96 1.17-0.26-0.25-0.56-0.6-0.73-1.01 0.38 0.05 1.01 0.07 0.83-0.27 0 0-0.64-0.42-0.97-1.02 0.35 0.04 0.91 0.07 0.75-0.26 0 0-0.7-0.48-0.96-1.15 0.11 0.01 0.22 0 0.32-0.07 0 0 0.15-0.1-0.25-0.48 0 0-0.34-0.29-0.88-1.59-0.09-0.22-0.39-0.23-0.49-0.01-0.24 0.51-0.62 1.24-1 1.7 0 0-0.51 0.6 0.32 0.38-0.14 0.19-0.7 0.93-1.04 1.12 0 0-0.4 0.43 0.72 0.37-0.26 0.31-0.66 0.75-0.94 0.89 0 0-0.45 0.47 0.85 0.39-0.29 0.37-0.84 1.05-1.21 1.26 0 0-0.51 0.56 0.93 0.49-0.34 0.4-0.85 0.97-1.21 1.16 0 0-0.06 0.07-0.09 0.15-0.16-0.16-0.33-0.36-0.46-0.59 0.35 0.04 0.91 0.07 0.75-0.26 0 0-0.7-0.48-0.96-1.15 0.11 0.01 0.22 0 0.32-0.07 0 0 0.15-0.1-0.25-0.48 0 0-0.34-0.29-0.88-1.59-0.09-0.22-0.39-0.23-0.49-0.01-0.24 0.51-0.62 1.24-1 1.7 0 0-0.51 0.6 0.33 0.38-0.14 0.19-0.7 0.93-1.04 1.12 0 0-0.4 0.43 0.72 0.37-0.09 0.11-0.2 0.23-0.31 0.34 0-0.03-0.01-0.06-0.03-0.09 0 0-0.64-0.42-0.97-1.02 0.35 0.04 0.91 0.07 0.75-0.26 0 0-0.7-0.48-0.96-1.15 0.11 0.01 0.22 0 0.32-0.07 0 0 0.15-0.1-0.25-0.48 0 0-0.34-0.29-0.88-1.59-0.09-0.22-0.39-0.23-0.49-0.01-0.24 0.51-0.62 1.24-1 1.7 0 0-0.51 0.6 0.33 0.38-0.14 0.19-0.7 0.93-1.04 1.12 0 0-0.4 0.43 0.72 0.37-0.26 0.31-0.66 0.75-0.94 0.89 0 0-0.45 0.47 0.85 0.39-0.29 0.37-0.84 1.05-1.21 1.26 0 0-0.51 0.56 0.93 0.49-0.34 0.4-0.85 0.97-1.21 1.16 0 0-0.67 0.69 1.48 0.48 0 0 0.12 0.69 1.48 0.08 0 0 0.44 0.23 0.82 0.25-0.11 0.15-0.31 0.62 1.52 0.43 0 0 0.12 0.69 1.48 0.08 0 0 1.19 0.63 1.33-0.1 0 0 1.77 0.34 1.44-0.3 0 0-0.83-0.54-1.26-1.32 0.45 0.06 1.18 0.09 0.97-0.33 0 0-0.84-0.59-1.2-1.41 0.38 0.05 1.01 0.07 0.83-0.27 0 0-0.05-0.03-0.12-0.09 0.24 0.04 0.61 0.05 1.18-0.01 0 0 0.12 0.69 1.48 0.08 0 0 0.53 0.28 0.92 0.25-0.02 0.03-0.8 0.86 1.85 0.59 0 0 0.14 0.87 1.85 0.1 0 0 0.49 0.26 0.94 0.31-0.12 0.15-0.51 0.8 1.88 0.56 0 0 0.14 0.87 1.85 0.1 0 0 1.49 0.79 1.66-0.12 0 0 2.21 0.42 1.8-0.37 0 0-0.45-0.3-0.91-0.78 0.25 0 0.55-0.01 0.92-0.05 0 0 0.14 0.87 1.85 0.1 0 0 1.49 0.79 1.66-0.12 0 0 2.21 0.42 1.8-0.37 0 0-0.37-0.24-0.78-0.64 0.25 0.02 0.59 0.01 1.06-0.03 0 0 0.12 0.74 1.59 0.08 0 0 1.28 0.68 1.42-0.11-0.03-0.04 1.86 0.32 1.51-0.36zm-29.85 0.72s0 0.01-0.01 0.01c-0.08-0.12-0.15-0.25-0.21-0.38 0.22 0.03 0.51 0.04 0.69-0.01-0.17 0.16-0.33 0.31-0.47 0.38zm0.59 0.71c-0.1-0.09-0.21-0.21-0.32-0.34 0.14 0.02 0.32 0.03 0.58 0.01-0.07 0.1-0.16 0.21-0.26 0.33zm7.67-0.62c0.01-0.03 0.02-0.05 0.03-0.09 0 0 0.02 0 0.06 0.01-0.04 0.03-0.06 0.05-0.09 0.08zm9.89-0.19c-0.01-0.01-0.01-0.02-0.02-0.03 0.02 0 0.04 0 0.05 0.01-0.01 0.01-0.02 0.02-0.03 0.02z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 46.01,
        x2: 46.01,
        y1: 64,
        y2: 79.167,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#378C3B",
        offset: 0.6026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E7D32",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.05 77s-0.58-0.38-0.89-0.93c0.32 0.04 0.83 0.06 0.68-0.24 0 0-0.64-0.44-0.88-1.05 0.1 0.01 0.2 0 0.3-0.07 0 0 0.13-0.09-0.23-0.44 0 0-0.31-0.27-0.81-1.46-0.08-0.2-0.35-0.21-0.44-0.01-0.22 0.46-0.56 1.13-0.91 1.55 0 0-0.46 0.55 0.3 0.35-0.13 0.18-0.64 0.85-0.96 1.02 0 0-0.36 0.4 0.66 0.34-0.24 0.28-0.6 0.69-0.86 0.82 0 0-0.47 0.49 1.04 0.34 0 0 0.08 0.49 1.04 0.06 0 0 0.84 0.45 0.94-0.07 0 0 1.25 0.24 1.02-0.21z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 94.494,
        x2: 94.494,
        y1: 64,
        y2: 79.167,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#378C3B",
        offset: 0.6026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E7D32",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.5 77.31s-0.91-0.59-1.38-1.45c0.49 0.06 1.29 0.1 1.06-0.37 0 0-1-0.69-1.36-1.64 0.15 0.02 0.31-0.01 0.46-0.1 0 0 0.21-0.15-0.36-0.68 0 0-0.49-0.41-1.26-2.27-0.13-0.31-0.55-0.32-0.69-0.02-0.34 0.72-0.88 1.76-1.42 2.41 0 0-0.72 0.85 0.46 0.54-0.11 0.15-0.4 0.54-0.72 0.89-0.01-0.01-0.02-0.02-0.03-0.04 0 0-0.49-0.41-1.26-2.27-0.13-0.31-0.55-0.32-0.69-0.02-0.34 0.72-0.88 1.76-1.42 2.41 0 0-0.72 0.85 0.46 0.54-0.21 0.28-0.99 1.32-1.49 1.59 0 0-0.56 0.62 1.02 0.53-0.37 0.44-0.94 1.07-1.33 1.27 0 0-0.74 0.76 1.63 0.52 0 0 0.13 0.76 1.62 0.09 0 0 1.31 0.7 1.46-0.11 0 0 1.94 0.37 1.58-0.33 0 0-0.71-0.46-1.2-1.16 0.07-0.01 0.13-0.01 0.21-0.02 0 0 0.13 0.76 1.62 0.09 0 0 1.31 0.7 1.46-0.11-0.01 0.03 1.93 0.4 1.57-0.29zm-5.09-1.45h0.14c-0.03 0.03-0.05 0.06-0.08 0.09l-0.06-0.09z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 63.333,
        cy: 76.667,
        r: 52.258,
        gradientTransform: "matrix(1 0 0 .8 0 15.2)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8BC34A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#84BC47",
        offset: 0.2466
      }),
      _react2.default.createElement("stop", {
        stopColor: "#72AA3D",
        offset: 0.5981
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.7526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 24,
      y: 76,
      width: 80,
      height: 32,
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m89.19 91.89h-0.92c-0.51 0-0.92-0.41-0.92-0.92v-4.59h2.76v4.59c0 0.51-0.41 0.92-0.92 0.92z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 88.5,
        cy: 65.75,
        r: 23.195,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#378C3B",
        offset: 0.6026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E7D32",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.34 86.28s-2.47-1.61-3.75-3.92c1.33 0.17 3.5 0.27 2.89-1 0 0-2.7-1.86-3.69-4.44 0.41 0.04 0.85-0.02 1.25-0.28 0 0 0.57-0.39-0.98-1.85 0 0-1.33-1.12-3.41-6.15-0.35-0.84-1.49-0.88-1.87-0.05-0.92 1.96-2.38 4.78-3.85 6.54 0 0-1.95 2.31 1.25 1.47-0.56 0.75-2.69 3.57-4.03 4.3 0 0-1.53 1.67 2.76 1.44-1.01 1.2-2.54 2.9-3.61 3.45 0 0-2 2.06 4.4 1.42 0 0 0.34 2.06 4.4 0.24 0 0 3.55 1.89 3.95-0.29 0 0 5.26 1 4.29-0.88z",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: 49.428,
        x2: 49.428,
        y1: 74.5,
        y2: 100.25,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 0.401
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0A87D8",
        offset: 0.6491
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1565C0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.25 95.67c9.52-4.48 15.75-8.8-6.17-13.33-17.11-3.55-17.73-6.34-17.73-6.34h-6.63c-0.39 3.67 7.73 6.26 15.43 8.77 7.67 2.5 14.17 4.57-2.15 9.17-11.9 3.35-17.4 8.26-16.15 14.06h45.33c-16.66-2.76-20.01-8.53-11.93-12.33z",
      fill: "url(#n)"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.43 87.2h-0.78c-0.43 0-0.78-0.35-0.78-0.78v-3.89h2.34v3.89c0 0.43-0.35 0.78-0.78 0.78z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 29.75,
        cy: 62.25,
        r: 22.82,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#378C3B",
        offset: 0.6026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E7D32",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m41.33 82.44s-2.09-1.36-3.18-3.32c1.13 0.14 2.97 0.23 2.45-0.84 0 0-2.29-1.58-3.13-3.76 0.35 0.04 0.72-0.01 1.06-0.23 0 0 0.48-0.33-0.83-1.57 0 0-1.12-0.95-2.89-5.21-0.3-0.71-1.26-0.75-1.59-0.05-0.78 1.66-2.01 4.05-3.26 5.54 0 0-1.66 1.96 1.06 1.25-0.47 0.64-2.28 3.03-3.41 3.65 0 0-1.3 1.42 2.34 1.22-0.85 1.02-2.15 2.45-3.06 2.92 0 0-1.7 1.75 3.73 1.2 0 0 0.29 1.75 3.73 0.2 0 0 3 1.6 3.34-0.25 0.01 0 4.47 0.85 3.64-0.75z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: 9.6667,
        x2: 27.336,
        y1: 64,
        y2: 64,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "6.5 18 21.83 29.5 21.83 98.5 6.5 110",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 64,
        x2: 64,
        y1: 19.5,
        y2: 34.342,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "6.5 18 21.83 29.5 106.17 29.5 121.5 18",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 125.17,
        x2: 105.32,
        y1: 64,
        y2: 64,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "121.5 18 106.17 29.5 106.17 98.5 121.5 110",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 64,
        x2: 64,
        y1: 97.667,
        y2: 109.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "21.83 98.5 6.5 110 121.5 110 106.17 98.5",
      fill: "url(#i)"
    }),
    _react2.default.createElement("path", {
      d: "m103.17 32.5v63h-78.34v-63h78.34m3-3h-84.34v69h84.33v-69h0.01z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m119 21v86h-110v-86h110m1-5h-112c-2.21 0-4 1.79-4 4v88c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-88c0-2.21-1.79-4-4-4z",
      fill: "#FFCA28"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120 19c0.55 0 1 0.45 1 1v88c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-88c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v88c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-88c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = FramedPicture;
