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

function Bouquet(props) {
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
        id: "h",
        x1: 65.332,
        x2: 102.28,
        y1: 66.78,
        y2: 112.9,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00897B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4DB6AC",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.93 103.2c-0.94-1.63-0.77-3.65-1-6.41-0.56-6.71-0.67-13.39-0.95-20.1-0.27-6.49 0.44-27.1 0.48-33.6 0.01-1.78-5 13.9-5.03 14.81-0.1 3.35-1.88 5.8-4.15 8.15-1.39 1.45-3.1 2.2-4.45 3.62-3.19 3.34-6.14 7.45-8.73 11.29-0.76 1.12-1.34 2.29-2.43 3.12-1.81 1.39-4.21 2.15-6.29 2.98-2.77 1.11-5.78 1.53-8.4 3.03-1.58 0.9-2.76 2.15-4.14 3.29-1.4 1.16-2.7 2.1-3.82 3.56-1.74 2.27-3.75 4.31-5.64 6.44-0.46 0.51-0.89 1.06-1.37 1.56-0.45 0.46-1.34 0.86-1.34 0.86s-29.31 2.15-13.36 3.63c7.24 0.67 29.63 1.39 36.87 2.11 4.33 0.43 8.58 0.9 12.9 1.54 1.98 0.29 4.55 0.07 6.56 0.77 5.53-2.13 10.13-6.13 14.29-10.65z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m114 105.74c-0.14-0.07-0.27-0.14-0.4-0.2-1.36-0.7-2.17-1.46-2.67-2.33-4.16 4.52-8.76 8.52-14.31 10.66 1.08 0.37 2.01 1.01 2.59 2.14 0.09 0.17 0.16 0.36 0.24 0.54 6.02-2.06 10.64-6.02 14.55-10.81z",
      fill: "#AEEA00"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 105.19,
        x2: 114.31,
        y1: 109.12,
        y2: 120.51,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00897B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4DB6AC",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.3 108.6c-1.17-1.25-2.99-2.19-4.3-2.86-3.91 4.79-8.53 8.75-14.54 10.8 0.95 2.16 1.35 4.87 3.37 6.25 6.38 4.38 15.04-5.08 16.52-10.96 0.31-1.24-0.19-2.32-1.05-3.23z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.03 32.23c8.15 10.59 3.04 43.04-20.55 62.41s-56.04 17.77-64.18 7.18 2.34-37.52 25.93-56.89 50.65-23.29 58.8-12.7z",
      fill: "#00695C"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 3.4949,
        x2: 46.247,
        y1: 103.12,
        y2: 74.729,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00AD51",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M27.07,76.6c9.49-2.77,24.29,3.66,24.29,3.66S44.39,91.91,32.12,96 c-15.81,5.28-27.78-2.69-27.78-2.69S11.07,81.26,27.07,76.6z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 10.036,
        x2: 53.343,
        y1: 114.09,
        y2: 85.332,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00AD51",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.56 86.66c5.14-9.9 21.39-17.12 21.39-17.12s3.62 14.62-2.62 27.82c-8.04 17-23.32 20.72-23.32 20.72s-4.11-14.73 4.55-31.42z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 67.894,
        x2: 119.56,
        y1: 54.756,
        y2: 19.275,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00AD51",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.72 26.3c8.18-7.4 25.86-8.24 25.86-8.24s-1.6 15-11.94 25.09c-13.32 12.98-28.89 10.91-28.89 10.91s1.18-15.29 14.97-27.76z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 75.464,
        x2: 126.46,
        y1: 65.493,
        y2: 30.474,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00AD51",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.75 39.51c10.87 0.31 24.4 12.09 24.4 12.09s-11.03 9.89-25.25 10.04c-18.31 0.19-28.38-12.25-28.38-12.25s10.91-10.4 29.23-9.88z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 61.422,
        x2: 80.69,
        y1: 61.626,
        y2: 111.72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00AD51",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.5 70.8c-12.17-14.15-30.16-12.5-30.16-12.5s-0.55 1.92-0.89 4.97c-3.09-1.22-5.2-1.62-5.2-1.62s-1.05 1.74-2.19 4.65c-2.58-1.57-4.37-2.28-4.37-2.28s-13.06 14.83-7.16 32.76c4.59 13.92 20.86 20.86 20.86 20.86s2.64-4.27 5.01-9.89c5.67 3.01 10.64 4.11 10.64 4.11s2.43-6.13 3.76-13.3c7.61 2.25 14.51 1.83 14.51 1.83s2.42-21.19-4.81-29.59z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#B39DDB"
      },
      _react2.default.createElement("ellipse", {
        cx: 85.99,
        cy: 19.14,
        rx: 10,
        ry: 10.33
      }),
      _react2.default.createElement("ellipse", {
        cx: 73.02,
        cy: 24.96,
        rx: 10,
        ry: 10.33
      }),
      _react2.default.createElement("ellipse", {
        cx: 78.66,
        cy: 38.36,
        rx: 10,
        ry: 10.33
      }),
      _react2.default.createElement("ellipse", {
        cx: 91.63,
        cy: 32.54,
        rx: 10,
        ry: 10.33
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 82.33,
      cy: 28.75,
      rx: 4.15,
      ry: 4.28,
      fill: "#EDE7F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.22 59.22c8.65 4.13 13.42 12.48 10.66 18.64s-12.01 7.81-20.66 3.68c-12.81-6.11-18.21-22.24-18.21-22.24s15.4-6.2 28.21-0.08z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m24.81 69.55c4.52 8.67 12.87 13.08 18.66 9.86s6.82-12.86 2.3-21.52c-6.69-12.84-22.61-17.43-22.61-17.43s-5.04 16.25 1.65 29.09z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m39.67 58.23c6.94 6.74 8.91 16.22 4.4 21.17s-13.78 3.49-20.72-3.25c-10.28-9.99-10.47-27.07-10.47-27.07s16.51-0.84 26.79 9.15z",
      fill: "#FF5252"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.72 32.6c7.8 7.72 9.94 18.48 4.78 24.05s-15.66 3.81-23.46-3.91c-11.56-11.44-11.6-30.79-11.6-30.79s18.72-0.79 30.28 10.65z",
      fill: "#F06292"
    }),
    _react2.default.createElement("path", {
      d:
        "m42.95 40.09c1.76 11.01 9.14 18.92 16.5 17.67s11.89-11.19 10.14-22.2c-2.61-16.31-18.04-27.29-18.04-27.29s-11.21 15.51-8.6 31.82z",
      fill: "#F06292"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.91 33.61c5.04 9.87 3.77 20.78-2.82 24.37s-16.02-1.5-21.06-11.37c-7.46-14.63-1.58-33-1.58-33s18 5.37 25.46 20z",
      fill: "#FF80AB"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 50.306,
        cy: 80.94,
        r: 23.721,
        gradientTransform: "matrix(1.0056 0 0 1.0389 -.0242 -4.7503)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFFC1F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCC21B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.23 86.2c3.46-0.26 6.18-3.22 6.18-6.86s-2.73-6.61-6.18-6.86l-0.48-0.5v-0.7c2.27-2.71 2.17-6.8-0.32-9.37s-6.45-2.68-9.07-0.33h-0.68l-0.48-0.5c-0.25-3.57-3.12-6.39-6.64-6.39s-6.39 2.82-6.64 6.39l-0.48 0.5h-0.68c-2.62-2.34-6.58-2.24-9.07 0.33s-2.59 6.66-0.32 9.37v0.7l-0.48 0.5c-3.46 0.26-6.18 3.22-6.18 6.86 0 3.63 2.73 6.6 6.18 6.86l0.48 0.5v0.7c-2.27 2.7-2.16 6.8 0.32 9.37s6.45 2.68 9.07 0.33h0.68l0.48 0.5c0.25 3.57 3.12 6.39 6.64 6.39s6.39-2.82 6.64-6.39l0.48-0.5h0.68c2.62 2.34 6.58 2.24 9.07-0.33s2.59-6.66 0.32-9.37v-0.7l0.48-0.5z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.56 85.11c-3.08 0-5.58-2.58-5.58-5.77s2.5-5.77 5.58-5.77 5.58 2.58 5.58 5.77c0.01 3.18-2.49 5.77-5.58 5.77z",
      fill: "#FFFDE7"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 60.743,
        cy: 50.914,
        r: 20.382,
        gradientTransform: "matrix(1.0056 0 0 1.0389 -.0242 -4.7503)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fe0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FC9E1B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.24 54.04c2.97-0.22 5.31-2.77 5.31-5.89s-2.34-5.68-5.31-5.89l-0.41-0.43v-0.6c1.95-2.32 1.86-5.84-0.28-8.05s-5.54-2.3-7.79-0.29h-0.58l-0.41-0.43c-0.21-3.07-2.68-5.49-5.71-5.49-3.02 0-5.49 2.42-5.71 5.49l-0.41 0.43h-0.58c-2.25-2.01-5.65-1.92-7.79 0.29s-2.23 5.73-0.28 8.05v0.6l-0.41 0.43c-2.97 0.22-5.31 2.77-5.31 5.89s2.35 5.67 5.31 5.89l0.41 0.43v0.6c-1.95 2.32-1.86 5.84 0.28 8.05s5.54 2.3 7.79 0.29h0.58l0.41 0.43c0.21 3.07 2.68 5.49 5.71 5.49 3.02 0 5.49-2.42 5.71-5.49l0.41-0.43h0.58c2.25 2.01 5.65 1.92 7.79-0.29s2.23-5.73 0.28-8.05v-0.6l0.41-0.43z",
      fill: "url(#j)"
    }),
    _react2.default.createElement("path", {
      d:
        "m61.06 53.1c-2.65 0-4.8-2.22-4.8-4.96s2.15-4.96 4.8-4.96 4.8 2.22 4.8 4.96-2.15 4.96-4.8 4.96z",
      fill: "#FFFDE7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m85.99 11.81c0.86 0 1.72 0.17 2.53 0.5 3.54 1.44 5.34 5.65 4.02 9.38-0.4 1.14-0.08 2.41 0.81 3.22 0.56 0.51 1.29 0.78 2.02 0.78 0.43 0 0.86-0.09 1.27-0.28 5.11-2.39 11.34-3.49 15.26-3.98-0.83 3.51-2.55 9.02-5.93 14.17-0.49 0.74-0.62 1.66-0.37 2.52 0.39 1.28 0.67 2.73 0.84 4.3 0.12 1.06 0.78 1.97 1.75 2.41 4.37 1.97 8.46 4.77 11.07 6.73-2.47 1.7-6.36 4-11.08 5.52-1.22 0.39-2.06 1.51-2.08 2.79-0.13 6.06-0.27 13.47-0.12 16.96 0.08 1.83 0.14 3.67 0.2 5.5 0.17 4.81 0.34 9.79 0.75 14.73 0.05 0.63 0.08 1.23 0.11 1.79 0.11 2.06 0.21 4.01 1.28 5.88 0.82 1.43 2.1 2.57 3.89 3.5l0.36 0.18 0.05 0.03c1.06 0.54 2.66 1.36 3.48 2.25 0.27 0.29 0.32 0.45 0.32 0.45-1.03 4.1-6.28 9.81-10.03 9.81-0.68 0-1.29-0.19-1.88-0.59-0.68-0.46-1.1-1.69-1.56-2.99-0.23-0.65-0.46-1.33-0.76-2l-0.05-0.11c-0.09-0.2-0.18-0.41-0.28-0.6-0.88-1.71-2.32-2.92-4.27-3.6-1.69-0.59-3.48-0.67-5.06-0.75-0.76-0.04-1.47-0.07-2.05-0.16-4.66-0.69-9.21-1.17-13.04-1.56-1.76-0.17-4.42-0.36-8.37-0.57h-0.16c-1.15 0-2.21 0.66-2.71 1.71-0.74 1.56-1.46 2.93-2.04 3.99-2.06-1.12-5.18-3.03-8.23-5.69-0.51-0.45-1.15-0.71-1.83-0.74-4.63-0.22-9.34-0.47-12.37-0.7-0.08-0.01-0.16-0.01-0.23-0.01-0.76 0-1.5 0.29-2.05 0.81-3.76 3.53-7.58 5.59-10.13 6.7-0.24-1.97-0.42-4.76-0.18-8.12 0.08-1.17-0.53-2.29-1.56-2.85-1.72-0.93-3.04-1.98-3.91-3.12-0.64-0.83-1.15-1.87-1.51-3.09s-1.45-2.07-2.71-2.14c-4.61-0.25-8.35-1.51-10.71-2.54 2.16-2.73 6.33-7.09 12.88-10.31 0.95-0.47 1.58-1.4 1.67-2.45s-0.39-2.07-1.25-2.69c-6.34-4.52-10.25-11.69-12.04-15.63 1.19-0.33 2.69-0.7 4.4-1 0.8-0.14 1.51-0.6 1.96-1.27 0.46-0.67 0.62-1.5 0.46-2.29-0.35-1.7-0.57-3.22-0.71-4.45 1.33 0.08 3.01 0.24 4.89 0.57 0.17 0.03 0.34 0.04 0.51 0.04 0.66 0 1.31-0.22 1.84-0.63 0.66-0.51 1.08-1.28 1.15-2.12 0.18-2.18 0.49-4.1 0.79-5.57 1.42 0.59 3.24 1.43 5.2 2.55 0.47 0.27 0.98 0.4 1.49 0.4 0.76 0 1.51-0.29 2.08-0.84 0.96-0.92 1.2-2.37 0.58-3.55-3.47-6.68-4.63-13.97-5.02-17.98 1.45 0.09 3.36 0.27 5.5 0.63 0.17 0.03 0.33 0.04 0.5 0.04 0.64 0 1.28-0.21 1.8-0.6 0.66-0.49 1.08-1.23 1.18-2.05 0.25-2.15 0.6-4.03 0.91-5.46 1.47 0.61 3.38 1.48 5.48 2.65 0.45 0.25 0.96 0.38 1.46 0.38 0.33 0 0.65-0.05 0.97-0.16 0.8-0.27 1.45-0.88 1.79-1.66 1.06-2.47 2.17-4.55 3.05-6.06 2.33 2.04 5.91 5.55 8.94 10.12 0.56 0.84 1.5 1.34 2.5 1.34 0.11 0 0.23-0.01 0.35-0.02 1.12-0.13 2.08-0.88 2.47-1.94 0-0.01 0.01-0.02 0.01-0.02 1.08-2.78 3.62-4.58 6.49-4.57 0.86 0 1.72 0.17 2.53 0.5 0.36 0.15 0.75 0.22 1.13 0.22 0.41 0 0.81-0.08 1.2-0.25 0.74-0.32 1.32-0.93 1.61-1.68 1.07-2.8 3.62-4.61 6.5-4.61m-34.44-3.54s-2.65 3.68-5.08 9.33c-5.01-2.8-9.02-4-9.02-4s-1.18 3.69-1.81 9.08c-3.93-0.67-7.08-0.75-8.45-0.75-0.48 0-0.75 0.01-0.75 0.01s0.03 11.81 5.55 22.43c-4.83-2.76-8.82-3.92-8.82-3.92s-1.19 3.86-1.65 9.29c-3.45-0.59-6.27-0.68-7.68-0.68-0.62 0-0.96 0.02-0.96 0.02s0.04 3.43 1.01 8.11c-4.69 0.82-7.88 2.1-7.88 2.1s4.3 12.8 14.29 19.93c-11.15 5.48-15.97 14.1-15.97 14.1s5.94 3.94 14.96 4.44c0.45 1.53 1.11 2.9 2.01 4.06 1.16 1.5 2.82 2.82 4.86 3.92-0.52 7.4 0.85 12.35 0.85 12.35s7.33-1.79 14.51-8.54c2.97 0.23 7.52 0.47 12.46 0.71 5.63 4.93 11.4 7.38 11.4 7.38s1.67-2.71 3.55-6.65c3.42 0.19 6.35 0.38 8.24 0.56 4.33 0.43 8.58 0.9 12.9 1.54 1.98 0.29 4.55 0.07 6.56 0.77 1.08 0.37 2.01 1.01 2.59 2.14 0.09 0.17 0.16 0.36 0.24 0.54 0.95 2.16 1.35 4.87 3.37 6.25 1.14 0.78 2.35 1.12 3.58 1.12 5.66 0 11.73-7.25 12.94-12.08 0.31-1.25-0.19-2.33-1.05-3.24-1.17-1.25-2.99-2.19-4.3-2.86-0.14-0.07-0.27-0.14-0.4-0.2-1.36-0.7-2.17-1.46-2.67-2.33-0.94-1.63-0.77-3.65-1-6.41-0.56-6.71-0.67-13.39-0.95-20.1-0.13-3.24-0.02-10.01 0.12-16.77 8.96-2.87 15.04-8.32 15.04-8.32s-6.85-5.96-14.72-9.51c-0.19-1.75-0.51-3.37-0.95-4.84 6.03-9.16 7.1-19.18 7.1-19.18s-11.47 0.55-20.21 4.63c1.86-5.25-0.65-11.1-5.71-13.16-1.2-0.49-2.44-0.72-3.66-0.72-3.99 0-7.75 2.48-9.31 6.54-1.2-0.49-2.44-0.72-3.66-0.72-3.99 0-7.75 2.48-9.31 6.54v0.01c-5.33-8.06-12.16-12.92-12.16-12.92zm64.03 9.79z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 85.906,
        cy: 62.195,
        r: 19.206,
        gradientTransform: "matrix(1.0056 0 0 1.0389 -.0242 -4.7503)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFFC1F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCC21B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.67 65.42c2.8-0.21 5.01-2.61 5.01-5.55s-2.21-5.35-5.01-5.55l-0.39-0.4v-0.57c1.84-2.19 1.75-5.5-0.26-7.58s-5.22-2.17-7.34-0.27h-0.55l-0.39-0.4c-0.2-2.89-2.53-5.17-5.38-5.17s-5.18 2.28-5.38 5.17l-0.39 0.4h-0.55c-2.12-1.9-5.33-1.81-7.34 0.27s-2.1 5.39-0.26 7.58v0.57l-0.39 0.4c-2.8 0.21-5.01 2.61-5.01 5.55s2.21 5.35 5.01 5.55l0.39 0.4v0.57c-1.84 2.19-1.75 5.5 0.26 7.58s5.22 2.17 7.34 0.27h0.55l0.39 0.4c0.2 2.89 2.53 5.17 5.38 5.17s5.18-2.28 5.38-5.17l0.39-0.4h0.55c2.12 1.9 5.33 1.81 7.34-0.27s2.1-5.39 0.26-7.58v-0.57l0.39-0.4z",
      fill: "url(#i)"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.36 64.53c-2.5 0-4.52-2.09-4.52-4.67s2.02-4.67 4.52-4.67 4.52 2.09 4.52 4.67-2.02 4.67-4.52 4.67z",
      fill: "#FFFDE7"
    })
  );
}

exports.default = Bouquet;
