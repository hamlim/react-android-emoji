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

function Microscope(props) {
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
      transform: "matrix(.9462 .3236 -.3236 .9462 37.012 -10.654)",
      x: 42.53,
      y: 104.97,
      width: 16.03,
      height: 2,
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.83 112.35-0.95-0.32c-0.52-0.18-0.8-0.75-0.62-1.27l1.94-5.69c0.18-0.52 0.75-0.8 1.27-0.62l0.95 0.32-2.59 7.58z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 79.875,
        cy: 33.75,
        r: 71.223,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.93 31.09 10.02 4.72c0.89 0.42 1.35 1.42 1.07 2.37-0.46 1.56-0.78 3.89 0.85 5.09 2.4 1.78 18.47 10.43 18.34 37.76-0.03 6.43-1.3 12.82-4.11 18.6-4.07 8.37-12.29 17.95-28.42 16.72 0 0-9.04-0.33-15.01-2.23-0.59-0.19-0.88-0.86-0.6-1.41 1.66-3.27 6.04-13.51-1.82-17.25-0.36-0.17-0.6-0.52-0.6-0.92v-6.27s16.03 15.03 24.29 10.85c6.82-3.44 14.43-7.8 14.31-21.21-0.06-6.23-1.93-12.33-5.2-17.64-2.12-3.44-4.85-6.84-7.61-7.39 0 0-1.1-0.24-2.36 2.15-0.43 0.82-1.37 1.25-2.27 1.02l-12.14-3.09 11.26-21.87z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 78.93,
        x2: 78.93,
        y1: 121.99,
        y2: 90.848,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8F1616",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.93 31.09 10.02 4.72c0.89 0.42 1.35 1.42 1.07 2.37-0.46 1.56-0.78 3.89 0.85 5.09 2.4 1.78 18.47 10.43 18.34 37.76-0.03 6.43-1.3 12.82-4.11 18.6-4.07 8.37-12.29 17.95-28.42 16.72 0 0-9.04-0.33-15.01-2.23-0.59-0.19-0.88-0.86-0.6-1.41 1.66-3.27 6.04-13.51-1.82-17.25-0.36-0.17-0.6-0.52-0.6-0.92v-6.27s16.03 15.03 24.29 10.85c6.82-3.44 14.43-7.8 14.31-21.21-0.06-6.23-1.93-12.33-5.2-17.64-2.12-3.44-4.85-6.84-7.61-7.39 0 0-1.1-0.24-2.36 2.15-0.43 0.82-1.37 1.25-2.27 1.02l-12.14-3.09 11.26-21.87z",
      fill: "url(#g)",
      opacity: 0.6
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 37.313,
        cy: 95.254,
        r: 17.615,
        gradientTransform: "matrix(1 -.0037846 .0037846 1 -.3861 .149)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m49.13 105.45c-1.24 3.67-6.71 5.14-12.21 3.28s-8.96-6.34-7.72-10.01 6.71-5.14 12.21-3.28c5.51 1.86 8.96 6.34 7.72 10.01z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m36.67 95.63c1.45 0 2.94 0.25 4.42 0.75 4.89 1.65 8.14 5.65 7.09 8.74-0.7 2.07-3.26 3.4-6.52 3.4-1.45 0-2.94-0.25-4.42-0.75-4.89-1.65-8.14-5.65-7.09-8.74 0.7-2.06 3.26-3.4 6.52-3.4m0-1c-3.61 0-6.6 1.49-7.47 4.08-1.24 3.67 2.22 8.15 7.72 10.01 1.62 0.55 3.23 0.81 4.74 0.81 3.61 0 6.6-1.49 7.47-4.08 1.24-3.67-2.22-8.15-7.72-10.01-1.62-0.55-3.23-0.81-4.74-0.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m47.81 108.14-19.2-6.47c-0.98-0.33-1.54-1.27-1.26-2.11l0.89-2.62c0.28-0.84 1.3-1.25 2.28-0.92l19.2 6.47c0.98 0.33 1.54 1.27 1.26 2.11l-0.89 2.62c-0.28 0.84-1.3 1.25-2.28 0.92z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m29.84 96.91c0.12 0 0.24 0.02 0.36 0.06l19.2 6.47c0.26 0.09 0.48 0.27 0.59 0.48 0.04 0.09 0.09 0.23 0.04 0.36l-0.89 2.62c-0.07 0.21-0.33 0.35-0.65 0.35-0.12 0-0.24-0.02-0.36-0.06l-19.2-6.47c-0.26-0.09-0.48-0.27-0.59-0.48-0.04-0.09-0.09-0.23-0.04-0.36l0.89-2.62c0.07-0.21 0.34-0.35 0.65-0.35m0-1c-0.73 0-1.38 0.39-1.6 1.03l-0.89 2.62c-0.28 0.84 0.28 1.78 1.26 2.11l19.2 6.47c0.23 0.08 0.46 0.11 0.68 0.11 0.73 0 1.38-0.39 1.6-1.03l0.89-2.62c0.28-0.84-0.28-1.78-1.26-2.11l-19.2-6.47c-0.22-0.08-0.45-0.11-0.68-0.11z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 71.046,
        x2: 80.725,
        y1: 43.151,
        y2: 46.58,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8F1616",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m77.08 55.03c1.26-2.39 2.36-2.15 2.36-2.15 2.75 0.55 5.48 3.95 7.61 7.39 0.41 0.67 0.8 1.35 1.17 2.04-0.09-5.82-0.62-11.67-0.08-17.47-1.05-0.76-1.86-1.26-2.27-1.57-1.62-1.21-1.31-3.53-0.85-5.09 0.28-0.95-0.18-1.95-1.07-2.37l-10.02-4.72-11.27 21.87 12.14 3.09c0.91 0.23 1.85-0.2 2.28-1.02z",
      fill: "url(#e)",
      opacity: 0.6
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m73.93 31.09 10.02 4.72c0.89 0.42 1.35 1.42 1.07 2.37-0.46 1.56-0.78 3.89 0.85 5.09 2.4 1.78 18.47 10.43 18.34 37.76-0.03 6.43-1.3 12.82-4.11 18.6-4.07 8.37-12.29 17.95-28.42 16.72 0 0-9.04-0.33-15.01-2.23-0.59-0.19-0.88-0.86-0.6-1.41 1.66-3.27 6.04-13.51-1.82-17.25-0.36-0.17-0.6-0.52-0.6-0.92v-6.27s16.03 15.03 24.29 10.85c6.82-3.44 14.43-7.8 14.31-21.21-0.06-6.23-1.93-12.33-5.2-17.64-2.12-3.44-4.85-6.84-7.61-7.39 0 0-1.1-0.24-2.36 2.15-0.43 0.82-1.37 1.25-2.27 1.02l-12.14-3.09 11.26-21.87z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.27 35.04 6.65 3.14c-1 4.37 0.89 6.57 2.16 7.51 0.2 0.15 0.49 0.34 0.84 0.58 1.92 1.29 5.91 3.97 9.51 9.3 4.55 6.73 6.83 15.3 6.78 25.46-0.03 6.35-1.31 12.17-3.81 17.3-4.89 10.05-12.62 15.14-22.97 15.14-0.82 0-1.67-0.03-2.53-0.1h-0.06-0.06c-0.08 0-6.67-0.26-12.02-1.5 1.48-3.53 2.88-8.57 1.38-12.97-0.17-0.5-0.37-0.97-0.61-1.43 4.3 2.82 9.49 5.39 14.07 5.39 1.72 0 3.29-0.35 4.68-1.05 6.02-3.04 16.1-8.13 15.96-23.92-0.06-6.65-2.01-13.29-5.65-19.18-3.24-5.25-6.36-8.12-9.56-8.76-0.22-0.04-0.45-0.07-0.69-0.07-1.02 0-2.9 0.42-4.54 3.09l-7.75-1.97 8.22-15.96m-1.34-3.95-11.27 21.87 12.14 3.09c0.16 0.04 0.33 0.06 0.49 0.06 0.74 0 1.43-0.41 1.78-1.09 1.05-1.99 1.98-2.16 2.27-2.16 0.06 0 0.09 0.01 0.09 0.01 2.75 0.55 5.48 3.95 7.61 7.39 3.27 5.31 5.14 11.4 5.2 17.64 0.12 13.42-7.49 17.77-14.31 21.21-1.01 0.51-2.13 0.73-3.33 0.73-8.61 0-20.97-11.58-20.97-11.58v6.27c0 0.4 0.24 0.75 0.6 0.92 7.87 3.74 3.48 13.99 1.82 17.25-0.28 0.56 0 1.22 0.6 1.41 5.98 1.9 15.01 2.23 15.01 2.23 0.94 0.07 1.86 0.11 2.75 0.11 14.32 0 21.83-8.95 25.67-16.83 2.81-5.78 4.08-12.17 4.11-18.6 0.13-27.33-15.95-35.98-18.34-37.76-1.62-1.21-1.31-3.53-0.85-5.09 0.28-0.95-0.18-1.95-1.07-2.37l-10-4.71z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 74,
        cy: 5.875,
        r: 18.988,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "71.91 36.42 62.5 32.99 71.88 7.22 81.29 10.64",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m81.29 10.64-9.41-3.43 1.87-2.77c0.26-0.38 0.74-0.54 1.17-0.38l6.06 2.21c0.43 0.16 0.7 0.59 0.65 1.05l-0.34 3.32z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.37 7.41 3.13 1.14-0.15 1.41-8.23 22.61-3.77-1.37 8.23-22.61 0.79-1.18m-0.79-3.41c-0.33 0-0.64 0.16-0.83 0.44l-1.87 2.77-9.38 25.78 9.41 3.43 9.38-25.78 0.35-3.33c0.05-0.46-0.22-0.89-0.65-1.05l-6.06-2.21c-0.12-0.03-0.23-0.05-0.35-0.05z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.88 96.14-32.79-11.73c-0.71-0.26-1.17-1.04-1.18-2.02l-0.03-4.21 37.72 13.49-3.72 4.47z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 43.648,
        cy: 67.604,
        r: 5.4123,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "39.05 71.96 37.35 68.33 48.25 63.25 49.94 66.88",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m38.02 71.33-0.85-1.82c-0.23-0.5-0.02-1.1 0.48-1.33l0.91-0.42 1.69 3.63-0.91 0.42c-0.49 0.24-1.08 0.02-1.32-0.48z",
      fill: "#424242"
    }),
    _react2.default.createElement("polygon", {
      points:
        "53.22 59.83 42.32 64.91 40.93 66.66 42.62 70.29 44.86 70.35 55.76 65.27",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.56,
        cy: 74.852,
        r: 5.4123,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "67.92 79.45 64.28 81.15 59.2 70.25 62.84 68.56",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.29 80.48-1.82 0.85c-0.5 0.23-1.1 0.02-1.33-0.48l-0.42-0.91 3.63-1.69 0.42 0.91c0.24 0.49 0.02 1.08-0.48 1.32z",
      fill: "#424242"
    }),
    _react2.default.createElement("polygon", {
      points:
        "61.23 62.74 55.78 65.28 60.86 76.18 62.62 77.57 66.25 75.88 66.31 73.64",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 53.93,
        cy: 70.332,
        r: 5.2734,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "53.76 76.67 49.99 75.3 54.1 64 57.87 65.37",
      fill: "url(#o)"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.59 76.95-1.88-0.69c-0.52-0.19-0.79-0.76-0.6-1.28l0.34-0.94 3.77 1.37-0.34 0.94c-0.2 0.52-0.77 0.79-1.29 0.6z",
      fill: "#424242"
    }),
    _react2.default.createElement("polygon", {
      points:
        "55.2 58.07 51.08 69.36 51.34 71.59 55.11 72.96 56.73 71.42 60.84 60.12",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m55.79 59.35 3.77 1.37-0.89 2.43-0.83 2.27 2.19-1.02 0.71-0.33 4.56 9.77-0.05 2-0.01 0.24 0.1 0.21 1.1 2.36 0.42 0.91-1.81 0.84-0.02-0.02-0.41-0.88-1.1-2.36-0.1-0.21-0.18-0.15-1.57-1.25-3.19-6.85-1.02-2.19-0.83 2.27-0.76 2.08-1.46 1.38-0.17 0.16-0.08 0.22-0.89 2.45-0.34 0.95-1.87-0.69v-0.02l0.33-0.92 0.89-2.45 0.08-0.22-0.03-0.23-0.23-1.99 0.76-2.08 0.83-2.27-2.19 1.02-6.85 3.19-2-0.05-0.24-0.01-0.21 0.1-2.36 1.1-0.91 0.42-0.84-1.81 0.02-0.02 0.88-0.41 2.36-1.1 0.21-0.1 0.15-0.18 1.25-1.57 9.77-4.56 0.33 0.71 1.02 2.19 0.83-2.27 0.88-2.43m-0.59-1.28-1.23 3.37-0.75-1.61-10.89 5.08-1.39 1.75-2.36 1.1-0.91 0.42-0.31 0.14 0.03 0.06c-0.29 0.29-0.39 0.73-0.21 1.13l0.85 1.82c0.17 0.36 0.53 0.57 0.9 0.57h0.09l0.03 0.06 0.31-0.14 0.91-0.42 2.36-1.1 2.24 0.06 7.06-3.29-0.84 2.3 0.26 2.23-0.89 2.45-0.34 0.94-0.12 0.32 0.06 0.02c0 0.41 0.24 0.8 0.65 0.94l1.88 0.69c0.11 0.04 0.22 0.06 0.34 0.06 0.3 0 0.58-0.14 0.77-0.36l0.06 0.02 0.12-0.32 0.34-0.94 0.89-2.45 1.63-1.54 0.84-2.3 3.29 7.06 1.75 1.39 1.1 2.36 0.42 0.91 0.14 0.31 0.06-0.03c0.19 0.19 0.45 0.3 0.71 0.3 0.14 0 0.28-0.03 0.41-0.09l1.82-0.85c0.39-0.18 0.6-0.59 0.57-1l0.06-0.03-0.14-0.31-0.42-0.91-1.1-2.36 0.06-2.24-5.08-10.89-1.61 0.75 1.23-3.37-5.65-2.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "n",
        cx: 63.625,
        cy: 22.75,
        r: 35.011,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.22 25.85-10.24-3.73c-0.86-0.31-1.83 0-2.35 0.76l-1.44 2.13-12.15 33.53 15.06 5.48 12.16-33.52 0.27-2.55c0.1-0.92-0.44-1.78-1.31-2.1z",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 56.25,
        cy: 59.5,
        r: 7.1744,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.67 56.33c-1.14 3.12 2.16 7.18 7.36 9.07s10.33 0.9 11.47-2.22l-18.83-6.85z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 80.593,
        cy: 96.342,
        r: 30.276,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.16 96c-10.91 0-17.1 8.14-22.21 15.71-0.12 0.18-0.33 0.29-0.55 0.29h-29.15c-4.83 0-8.25 9.23-8.25 12h80.11s-5.19-28-19.95-28z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.69 25.21 8.78 3.19-0.15 1.41-11.01 30.37-9.42-3.43 11.01-30.36 0.79-1.18m-0.39-3.2c-0.65 0-1.28 0.32-1.66 0.88l-1.44 2.13-12.16 33.52 15.06 5.48 12.16-33.52 0.27-2.55c0.1-0.91-0.44-1.78-1.31-2.09l-10.24-3.73c-0.22-0.09-0.45-0.12-0.68-0.12z",
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
          "m49.45 57.68 16.58 6.04c-0.91 1.03-2.65 1.65-4.83 1.65-1.54 0-3.21-0.31-4.83-0.9-2.35-0.85-4.34-2.19-5.62-3.77-0.84-1.04-1.28-2.08-1.3-3.02m-0.78-1.35c-1.14 3.12 2.16 7.18 7.36 9.07 1.78 0.65 3.56 0.96 5.17 0.96 3.08 0 5.55-1.13 6.3-3.18l-18.83-6.85z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.75 65.41-20.71-7.54c-0.52-0.19-0.79-0.76-0.6-1.28l0.69-1.88c0.19-0.52 0.76-0.79 1.28-0.6l20.71 7.54c0.52 0.19 0.79 0.76 0.6 1.28l-0.69 1.88c-0.18 0.52-0.76 0.79-1.28 0.6z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 24.081,
        cy: 76.397,
        r: 52.514,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m71.37 95.36-46.79-16.73c-0.62-0.22-0.95-0.91-0.72-1.53l0.13-0.38c0.22-0.62 0.91-0.95 1.53-0.72l46.79 16.74c0.62 0.22 0.95 0.91 0.72 1.53l-0.13 0.38c-0.22 0.61-0.9 0.94-1.53 0.71z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.16 99c8.64 0 14.02 13.66 16.19 22h-72.58c0.3-0.82 0.69-1.72 1.18-2.59 1.29-2.35 2.59-3.41 3.31-3.41h29.14c1.22 0 2.35-0.6 3.03-1.61 5.12-7.58 10.48-14.39 19.73-14.39m0-3c-10.91 0-17.1 8.14-22.21 15.71-0.12 0.18-0.33 0.29-0.55 0.29h-29.15c-4.83 0-8.25 9.23-8.25 12h80.11s-5.19-28-19.95-28z",
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
          "m48.07 55.05 20.71 7.54-0.69 1.88-20.71-7.54 0.69-1.88m0-1c-0.41 0-0.79 0.25-0.94 0.66l-0.69 1.88c-0.19 0.52 0.08 1.09 0.6 1.28l20.71 7.54c0.11 0.04 0.23 0.06 0.34 0.06 0.41 0 0.79-0.25 0.94-0.66l0.69-1.88c0.19-0.52-0.08-1.09-0.6-1.28l-20.71-7.54c-0.11-0.04-0.22-0.06-0.34-0.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 74.93,
      cy: 42.86,
      r: 6.01,
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 74.808,
        cy: 38.525,
        r: 7.753,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 74.93,
      cy: 42.86,
      r: 3.5,
      fill: "url(#j)"
    }),
    _react2.default.createElement("circle", {
      cx: 83.59,
      cy: 106.63,
      r: 6.01,
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 83.465,
        cy: 102.29,
        r: 7.753,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 83.59,
      cy: 106.63,
      r: 3.5,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m25.12 76.93c0.02 0 0.04 0 0.07 0.01l46.79 16.74c0.1 0.04 0.16 0.15 0.12 0.25l-0.13 0.38c-0.03 0.09-0.12 0.13-0.18 0.13-0.02 0-0.04 0-0.07-0.01l-5.28-1.89-0.66-0.24-0.45 0.54-1.77 2.13-32.14-11.5c-0.3-0.11-0.51-0.55-0.52-1.09l-0.02-1.86-0.01-0.7-0.66-0.24-5.31-1.9c-0.06-0.02-0.1-0.07-0.11-0.1-0.02-0.03-0.03-0.09-0.01-0.15l0.13-0.38c0.06-0.08 0.14-0.12 0.21-0.12m0-1c-0.49 0-0.95 0.3-1.13 0.79l-0.13 0.38c-0.22 0.62 0.1 1.31 0.72 1.53l5.31 1.9 0.02 1.86c0.01 0.99 0.46 1.77 1.18 2.02l32.79 11.73 2.22-2.66 5.28 1.89c0.13 0.05 0.27 0.07 0.4 0.07 0.49 0 0.95-0.3 1.13-0.79l0.13-0.38c0.22-0.62-0.1-1.31-0.72-1.53l-46.8-16.74c-0.13-0.05-0.27-0.07-0.4-0.07z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Microscope;
