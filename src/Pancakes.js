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

function Pancakes(props) {
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
        cx: 63.625,
        cy: 97.568,
        r: 46.408,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.4795
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EDEDED",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 63.62,
      cy: 97.57,
      rx: 60,
      ry: 26.6,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.62 73.97c15.62 0 30.25 2.68 41.21 7.53 10.03 4.45 15.79 10.3 15.79 16.06s-5.75 11.62-15.79 16.06c-10.96 4.86-25.59 7.53-41.21 7.53s-30.25-2.68-41.21-7.53c-10.03-4.45-15.79-10.3-15.79-16.06s5.75-11.62 15.79-16.06c10.96-4.85 25.6-7.53 41.21-7.53m0-3c-33.14 0-60 11.91-60 26.6s26.86 26.6 60 26.6 60-11.91 60-26.6-26.86-26.6-60-26.6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.75,
      cy: 96.38,
      rx: 48.38,
      ry: 16.62,
      fill: "#BFBFBF"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 13.478,
        x2: 114.69,
        y1: 100.17,
        y2: 100.17,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E3C386",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EACE94",
        offset: 0.1473
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5E1AC",
        offset: 0.4648
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDEDBB",
        offset: 0.7576
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF1C0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34.43 102.27c-6.46-2.03-13.92-4.28-19.27-9.63-0.67-1.01-1.24-2.01-1.63-3.05-0.28 5.62 0.48 7.06 3.59 9.65 3.21 2.68 1.43 4.64 8.92 6.78s13.02 5.35 25.33 5.89 21.76 3.51 32.65-0.54c11.06-4.1 19.27-5.35 23.55-8.56 3.5-2.63 8.48-11.33 6.77-15.92-17.63 24.24-54.35 23.41-79.91 15.38z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 13.533,
        x2: 114.34,
        y1: 88.89,
        y2: 88.89,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5551B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E7971C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34.43 102.27c25.66 9.5 77.07 6.56 79.91-15.38-0.38-1.02-1.01-1.92-1.95-2.64-5.17-3.92-36.93-15.16-58.69-13.74s-26.4 5-34.79 9.99c0 0-5 2.5-5.35 8.56-0.01 0.18-0.02 0.34-0.03 0.52 0.39 1.04 1.85 2.94 2.52 3.94 5.36 5.36 11.96 6.61 18.38 8.75z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m23.55 61.41c-1.07 0.36-3.75 8.38 1.96 11.95s11.42 5.71 16.95 7.49 5.53 3.57 16.06 3.21 11.24 1.25 16.77 1.07 10.53 0 15.16-3.03c4.64-3.03 6.96-2.85 11.42-5.89 4.46-3.03 7.14-3.75 7.85-8.56 0.71-4.82 3.92-13.92-0.18-18.02s-27.12-9.99-45.67-9.1-30.87 9.65-34.61 12.14c-3.75 2.5-5.71 8.74-5.71 8.74z",
      fill: "#FFEEBF"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 11.082,
        x2: 112.04,
        y1: 78.104,
        y2: 78.104,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF1C0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDEDBB",
        offset: 0.2424
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5E1AC",
        offset: 0.5352
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EACE94",
        offset: 0.8527
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3C386",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.36 70.47c-9.63 12.46-27.83 16.62-43.89 14.54-1.07 0-4.28 1.04-5.35 1.04-12.27 0-25.78-1.95-36.57-7.9-3.17-1.75-6.14-3.94-8.36-6.77-1.05-1.33-1.92-2.8-2.55-4.37-0.69-1.71-0.71-3.62-1.44-5.28 0.32 0.72-0.16 2.55-0.11 3.4 0.07 1.32 0.27 2.64 0.59 3.93 0.56 2.21 0.56 7.33 1.99 9.16 4.32 5.54 11.91 9.96 18.4 12.14 5.17 1.73 15.84 3.74 27.79 3.91s21.76 0.7 27.4-0.98c12.53-3.72 20.58-10.24 22.9-13.7s2.05-7.04 1.52-11.02c-0.02-0.12-0.04-0.24-0.07-0.38-0.71 0.62-1.4 1.45-2.25 2.28z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 11.457,
        x2: 111.61,
        y1: 66.973,
        y2: 66.973,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E7971C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A5551B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m83.85 47.1c-19.98-1.38-44.78-4.85-65.83 8.48-0.34 0.21-4.89 2.27-6.56 6.1 1.1 19.15 31.41 27.66 48.01 26.52 19.96-1.37 37.23 4.25 49.89-17.73 0.85-0.83 1.54-1.65 2.25-2.28-0.9-4.53-8.36-19.75-27.76-21.09z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 16.266,
        x2: 113.7,
        y1: 50.172,
        y2: 50.172,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E7971C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A5551B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m50.49 69.09c4.28 0 8.56-1.07 12.84 0 18.22 1.92 42.44-0.47 50.37-17.92-0.66-1.84-2.06-3.64-4.93-5.64-6.3-4.38-9.72-5.85-13.5-8.22-3.36-2.11-7.59-3.16-11.36-4.19-4.67-1.27-9.71-2.54-14.58-2.41-6.24 0.16-12.47-0.35-18.75 0.58-6.54 0.97-12.94 2.88-18.94 5.68-4.2 1.97-8.48 4.02-12.17 6.91-1.7 1.34-2.79 3.51-3.21 5.97 5.6 13.54 21.3 18.24 34.23 19.24z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 16.064,
        x2: 114.22,
        y1: 63.033,
        y2: 63.033,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF1C0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDEDBB",
        offset: 0.2424
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5E1AC",
        offset: 0.5352
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EACE94",
        offset: 0.8527
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3C386",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.33 69.09c-4.28-1.07-15.52-1.07-19.8-1.07-12.93-0.99-21.67-4.62-27.26-18.17-0.61 3.53 0.15 7.64 2.49 10.66 3.96 5.11 15.48 11.69 21.24 12.97s9.86 1.5 19.41 1.5 16.78 1.24 20.2 1.24 6.3-1.28 12.42-2.37c6.12-1.1 6.12-0.55 11.7-3.11s9.9-7.49 10.26-12.42c0.2-2.69 0.49-4.94-0.3-7.15-7.92 17.44-32.14 19.83-50.36 17.92z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 79.994,
        cy: 46.454,
        r: 38.245,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C95202",
        offset: 0.133
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C75102",
        offset: 0.1536
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B44902",
        offset: 0.4248
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A84502",
        offset: 0.6992
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A44302",
        offset: 0.9803
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m37.44 44.37c-1.34 0.66-2.9 0.62-4.4 0.62-3.28 0-6.67 0.31-9.59 1.84s-5.28 4.52-5.27 7.85 3.04 6.58 6.29 6.07c1.51-0.24 2.8-1.17 4.1-1.98 5.53-3.44 12.39-4.98 18.65-3.24s11.64 7.08 12.62 13.58c0.42 2.79 0.17 5.95 2.03 8.05 2.1 2.36 5.76 2.11 8.86 1.67 1.81-0.26 4.12-1.05 4.1-2.91-0.01-1.52-1.65-2.44-2.38-3.77-1.2-2.22 0.52-5.1 2.82-6.1s4.9-0.7 7.39-0.58c9.92 0.45 19.96-2.44 28.18-8.1 2.02-1.4 4.11-3.28 4.2-5.76 0.07-1.94-1.16-3.71-2.67-4.91s-3.29-1.97-4.94-2.97c-3.26-1.98-5.94-4.84-9.21-6.82-3.88-2.35-8.4-3.33-12.85-4.07-8.9-1.47-17.94-2.08-26.96-1.83-4.58 0.13-9.16 0.47-13.7 1.04-2.34 0.29-8.83 0.57-9.32 3.95-0.4 2.72 7.86 5.52 2.05 8.37z",
      fill: "url(#a)",
      opacity: 0.73
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 67.964,
        x2: 88.658,
        y1: 118.24,
        y2: 89.165,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EE8B3F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E38036",
        offset: 0.0642
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C7651F",
        offset: 0.249
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B4520F",
        offset: 0.4359
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A84705",
        offset: 0.6246
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A44302",
        offset: 0.8178
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.03 90.62c0.54 1.1 1.82 1.66 3.05 1.86 1.67 0.27 3.38 0.06 5.08 0.05s3.49 0.24 4.82 1.29c1.33 1.04 1.96 3.09 0.97 4.46-0.78 1.07-2.21 1.39-3.46 1.85s-2.6 1.39-2.53 2.71c0.06 1.41 1.67 2.21 3.07 2.44 1.41 0.24 2.9 0.23 4.17 0.88s2.18 2.31 1.4 3.49c-0.69 1.05-2.19 1.1-3.45 1.05-1.94-0.09-3.88-0.17-5.82-0.26-1.07-0.05-2.17-0.09-3.18 0.25s-1.93 1.16-2.06 2.21c-0.14 1.13 0.69 2.21 1.71 2.73 1.03 0.52 2.22 0.6 3.37 0.66 11.67 0.57 23.73-0.7 34.11-6 0.9-0.46 1.81-0.96 2.45-1.73s0.99-1.86 0.62-2.79c-0.71-1.8-3.26-1.81-5.18-1.43-5.25 1.03-10.4 2.57-15.34 4.61-0.91 0.37-1.85 0.77-2.83 0.76-0.99-0.01-2.04-0.55-2.31-1.49-0.28-0.98 0.42-2.03 1.32-2.52s1.97-0.58 2.99-0.71c2.05-0.25 4.07-0.69 6.04-1.32 1.01-0.32 2.08-0.76 2.56-1.69 0.77-1.49-0.58-3.37-2.22-3.81s-3.36 0.1-4.98 0.61-3.37 0.99-4.98 0.46c-1.57-0.52-2.73-2.05-2.81-3.68s0.94-3.26 2.45-3.92c1.67-0.73 3.6-0.3 5.42-0.43s3.93-1.38 3.69-3.17c-0.14-1.02-1.03-1.81-2.02-2.13-0.99-0.33-2.05-0.28-3.09-0.22-4.63 0.27-9.25 0.66-13.86 1.18-1.85 0.18-11.05-0.06-9.17 3.75z",
      fill: "url(#i)",
      opacity: 0.78
    }),
    _react2.default.createElement("path", {
      d:
        "m50.84 29.66c-2.13 0.64-4.23 2.13-6.13 3.36-3.29 7.44 4.63 14.11 10.63 18.93 4.67 0.53 9.47 2.55 14.14 2.55 1.99 0 3.29-0.03 5.23-1.08 1.76-0.95 2.37-2.84 3.54-3.83-6.95-2.54-15.05-3.09-21.33-7.28-3.77-1.87-9.19-7.06-6.08-12.65z",
      fill: "#FDE9D2"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.96 29.35c-0.12 0.19-0.29 0.31-0.29 0.31-3.11 5.59 2.39 10.78 6.16 12.66 6.28 4.19 14.43 4.74 21.38 7.28 0.11-0.1 0.26-0.18 0.4-0.24-5.31-3.05-11.2-5.29-17.41-8.11-4.91-3.26-8.79-6.91-10.24-11.9z",
      fill: "#EED4B5"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.16 37.87h-0.12c0.04 0.02 0.07 0.04 0.11 0.05 0-0.01 0-0.03 0.01-0.05z",
      fill: "#FBE2C5"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.14 37.93c-0.03-0.03-0.07-0.04-0.1-0.06-3.71-0.05-7.56 0.01-11.21-0.9-6.42-1.07-14.99-7.49-10.7-14.99 0.75-2.26 3.64-4.52 7.15-5.28 0.42-0.21 0.86-0.39 1.32-0.55-14.74 0.88-17.24 9.69-17.64 13.14 0.09 0.4 0.87 6.36 10.24 11.95 6.22 2.83 12.13 5.06 17.44 8.11 0 0 0.01 0 0.01-0.01 0.53-0.19 1.11-0.09 1.66 0.02 0.55 0.12 1.12 0.25 1.67 0.11 0.95-0.24 1.51-1.22 1.95-2.1 0.83-1.64 2.52-3.76 2.61-5.61 0.03-0.63-0.09-1.14-0.3-1.55-1.27-0.82-2.63-1.57-4.03-2.28-0.03 0.02-0.05 0.01-0.07 0z",
      fill: "#FDE9D2"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.2 37.96c1.4 0.71 2.75 1.46 4.03 2.28-0.72-1.37-2.55-1.74-4.03-2.28z",
      fill: "#FBE2C5"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.33 20.92c0-1.33 1.66-3.08 3.94-4.21-3.51 0.76-6.4 3.01-7.15 5.28-4.28 7.49 4.28 13.92 10.7 14.99 3.65 0.91 7.5 0.85 11.21 0.9-8.29-4.2-17.88-7.14-18.7-16.96z",
      fill: "#D9C1A5"
    }),
    _react2.default.createElement("path", {
      d:
        "m83.49 31.98c-0.54-4.1-11.77-5.89-16.77-8.56-4.18-2.24 0.75-5.84 2.47-6.97-0.66 0.03-1.3 0.13-1.92 0.26-2.28 1.13-3.94 2.88-3.94 4.21 0.82 9.83 10.41 12.76 18.7 16.95h0.12c0.73-2.04 1.63-3.67 1.34-5.89z",
      fill: "#FDDCB9"
    }),
    _react2.default.createElement("path", {
      d:
        "m55.34 51.96c-6-4.83-13.92-11.49-10.63-18.93-0.18 0.12-0.37 0.24-0.55 0.36-2.04 5.44-1.24 11.52 1.63 16.2 2.79 1.61 5.85 2 9.19 2.33 0.12 0 0.24 0.03 0.36 0.04z",
      fill: "#D9C1A5"
    }),
    _react2.default.createElement("path", {
      d:
        "m44.16 33.38c-0.01 0.01-0.02 0.01-0.03 0.02-2.89 1.83-4.66 5.44-4.02 8.85 0.43 2.27 1.78 4.3 3.52 5.82 0.7 0.61 1.42 1.1 2.15 1.52-2.86-4.69-3.66-10.77-1.62-16.21z",
      fill: "#FDF2E6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.16 20.4c-0.06 0.36-0.08 0.71-0.07 1.07 0.05 1.09 0.53 3.14 3.22 4.58 1.9 1.02 4.36 1.84 6.96 2.71 2.44 0.82 7.48 2.51 8.26 3.69 0.01 0.13 0.01 0.28 0.01 0.46-0.04 1.39 0.87 2.62 2.21 2.99l0.19 0.05 0.18 0.05 0.82 0.22c3.44 0.93 7 1.89 9.73 3.61 1.4 0.88 2.73 1.62 4.14 2.42 2.48 1.39 5.29 2.97 9.25 5.73 2.77 1.93 3.5 3.31 3.81 4.18 0.48 1.36 0.36 2.98 0.2 5.04l-0.07 0.9c-0.13 1.75-1.03 3.69-2.54 5.46-0.73 0.86-0.92 2.06-0.49 3.1 0.48 1.15 0.65 1.86 0.7 2.11 0.01 0.07 0.03 0.13 0.03 0.19 0.49 3.61 0.7 6.37-1.04 8.95-0.35 0.52-0.93 1.18-1.64 1.88-0.71 0.69-1.03 1.69-0.85 2.66s0.81 1.8 1.71 2.21c2.45 1.11 3.4 1.75 3.69 1.97 0.44 0.34 0.75 0.75 0.95 1.3 1.03 2.74-2.74 10.2-5.76 12.46-2.19 1.64-6.12 2.83-11.08 4.32-3.43 1.03-7.33 2.2-11.71 3.83-3.5 1.3-7.1 1.9-11.34 1.9-3.31 0-6.71-0.36-10.31-0.73-3.11-0.33-6.33-0.66-9.82-0.82-8.69-0.38-13.66-2.1-18.92-3.92-1.82-0.63-3.71-1.28-5.72-1.86-3.92-1.12-4.41-1.89-5.15-3.05-0.53-0.83-1.25-1.96-2.67-3.15-0.52-0.43-0.95-0.79-1.3-1.15 0.06-0.04 0.12-0.09 0.17-0.14 1.15-1 1.37-2.7 0.51-3.95-0.16-0.24-0.36-0.51-0.56-0.81-0.41-0.59-0.95-1.35-1.3-1.93 0.18-1.93 1.02-3.58 2.51-4.9 0.64-0.57 1-1.38 1-2.24s-0.37-1.67-1-2.24c-1.2-1.07-2.22-2.14-3.04-3.19-0.46-0.67-0.78-3.42-0.94-4.75-0.14-1.23-0.28-2.39-0.51-3.31-0.28-1.1-0.45-2.23-0.51-3.32 0-0.1 0.03-0.33 0.05-0.54 0.35-0.56 0.52-1.25 0.43-1.95l-0.02-0.18c0-0.02-0.01-0.05-0.01-0.07 0.72-1.18 2-2.35 3.67-3.36 0.37-0.22 0.68-0.51 0.92-0.85 0.46-0.04 0.91-0.18 1.31-0.43l0.23-0.14c0.72-0.43 1.22-1.15 1.39-1.97s-0.02-1.68-0.51-2.36c-0.86-1.19-1.56-2.38-2.14-3.62 0.38-1.44 1.06-2.61 1.93-3.29 3.57-2.8 8.02-4.88 11.59-6.55 4.37-2.05 9.02-3.61 13.81-4.65 0.36-0.08 0.7-0.22 1-0.42 1.26-0.82 2.6-1.64 3.82-2.04 0.53-0.17 1-0.49 1.36-0.92 0.66-0.57 1.06-1.41 1.05-2.3 0.72-5.07 4.45-7.64 8.21-8.94m6.44-4.24c-14.74 0.88-17.24 9.69-17.64 13.14 0 0.02 0.01 0.06 0.02 0.09 0-0.02-0.01-0.03-0.02-0.05-0.12 0.19-0.29 0.31-0.29 0.31-0.01 0.02-0.02 0.05-0.03 0.07-1.55 0.51-3.08 1.44-4.53 2.38-4.97 1.08-9.83 2.7-14.45 4.86-4.2 1.97-8.48 4.02-12.17 6.91-1.7 1.34-2.79 3.51-3.21 5.97 0.77 1.86 1.74 3.53 2.85 5.07l-0.24 0.15c-0.93-1.56-1.81-3.27-2.61-5.21-0.36 2.08-0.23 4.34 0.4 6.48-1.57 0.94-4.06 2.72-5.21 5.35 0.02 0.41 0.08 0.8 0.13 1.2-0.11-0.39-0.23-0.78-0.39-1.15 0.32 0.72-0.16 2.55-0.11 3.4 0.07 1.32 0.27 2.64 0.59 3.93 0.56 2.21 0.56 7.33 1.99 9.16 0.98 1.26 2.15 2.47 3.42 3.6-1.47 1.31-3.31 3.65-3.53 7.25-0.01 0.18-0.02 0.34-0.03 0.52-0.28 5.62 0.48 7.06 3.59 9.65 3.21 2.68 1.43 4.64 8.92 6.78s13.02 5.35 25.33 5.89c7.49 0.33 13.92 1.55 20.27 1.55 4.08 0 8.12-0.51 12.38-2.09 11.06-4.1 19.27-5.35 23.55-8.56 3.5-2.63 8.48-11.33 6.77-15.92-0.38-1.02-1.01-1.92-1.95-2.64-0.81-0.62-2.28-1.41-4.26-2.31 0.89-0.87 1.57-1.67 2.03-2.35 2.32-3.46 2.05-7.04 1.52-11.02-0.02-0.12-0.04-0.24-0.07-0.38-0.14-0.68-0.42-1.6-0.87-2.68 1.87-2.19 3.07-4.69 3.25-7.19 0.2-2.69 0.49-4.94-0.3-7.15-0.66-1.84-2.06-3.64-4.93-5.64-6.3-4.38-9.72-5.85-13.5-8.22-3.36-2.11-7.59-3.16-11.36-4.19-0.12-0.03-0.25-0.07-0.38-0.1 0.01-0.34 0-0.68-0.04-1.04-0.54-4.1-11.77-5.89-16.77-8.56-4.18-2.24 0.75-5.84 2.47-6.97-0.66 0.03-1.3 0.13-1.92 0.26 0.43-0.21 0.87-0.39 1.33-0.55zm-52.64 77.22c-0.27-0.24-0.53-0.49-0.79-0.75-0.57-0.86-1.04-1.72-1.42-2.59 0.53 1.02 1.6 2.45 2.21 3.34zm53.24-76.93z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Pancakes;
