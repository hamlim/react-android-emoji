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

function School(props) {
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
        id: "g",
        cx: 63.25,
        cy: 41.25,
        r: 80.076,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEE54",
        offset: 0.053
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEC42",
        offset: 0.3561
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.571
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 40,
      width: 112,
      height: 76,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 64,
        x2: 64,
        y1: 119.25,
        y2: 35.247,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        stopOpacity: 0.9839,
        offset: 0.0161
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 40,
      width: 112,
      height: 76,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 46.215,
        x2: 20.222,
        y1: 78,
        y2: 78,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        stopOpacity: 0.9839,
        offset: 0.0161
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 40,
      width: 35.06,
      height: 76,
      fill: "url(#e)",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 95.546,
        x2: 69.554,
        y1: 78,
        y2: 78,
        gradientTransform: "matrix(-1 0 0 1 177.33 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        stopOpacity: 0.9839,
        offset: 0.0161
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "84.94 116 120 116 120 40 84.94 40",
      fill: "url(#d)",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117 43v76h3c0.55 0 1 0.45 1 1v1h-114v-1c0-0.55 0.45-1 1-1h3v-76h106m3-3h-112v76c-2.21 0-4 1.79-4 4v4h120v-4c0-2.21-1.79-4-4-4v-76z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.751,
        cy: 11.75,
        r: 38.375,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.8835 1.9375e-13 85.882 -52.001)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F04036",
        offset: 0.3423
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.6613
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M121.73,44H6.27c-1.2,0-2.13-1.05-1.98-2.25L11.22,15c0.46-1.76,2.05-3,3.87-3h97.81 c1.82,0,3.41,1.23,3.87,3l6.94,26.76C123.87,42.95,122.94,44,121.73,44z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112.91 15c0.46 0 0.85 0.31 0.97 0.75l6.54 25.25h-112.84l6.55-25.25c0.11-0.44 0.51-0.75 0.97-0.75h97.81m0-3h-97.82c-1.82 0-3.41 1.23-3.87 3l-6.94 26.75c-0.15 1.2 0.78 2.25 1.99 2.25h115.47c1.2 0 2.13-1.05 1.98-2.25l-6.94-26.75c-0.46-1.77-2.05-3-3.87-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m123.72 41.75-6.94-26.75c-0.46-1.76-2.05-3-3.87-3h-97.82c-1.82 0-3.41 1.23-3.87 3l-6.94 26.75c-0.15 1.2 0.78 2.25 1.99 2.25h1.73v72h112v-72h1.73c1.21 0 2.14-1.05 1.99-2.25z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "a",
        x: 8,
        y: 40,
        width: 112,
        height: 76
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#a"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 64,
        cy: 1.25,
        r: 118.31,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF176",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF172",
        offset: 0.0243
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEE54",
        offset: 0.2465
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEC42",
        offset: 0.4366
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.571
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "64 4 40 28 40 116 88 116 88 28",
      fill: "url(#j)"
    }),
    _react2.default.createElement("rect", {
      x: 57,
      y: 96,
      width: 14,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#eee"
      },
      _react2.default.createElement("rect", {
        x: 56,
        y: 96,
        width: 2,
        height: 20
      }),
      _react2.default.createElement("rect", {
        x: 70,
        y: 96,
        width: 2,
        height: 20
      })
    ),
    _react2.default.createElement("rect", {
      x: 21.22,
      y: 51,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m32 50h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m33 72h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m33 52h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 46.72,
      y: 61,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m57.5 60h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.5 82h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.5 62h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 70.72,
      y: 61,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m81.5 60h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.5 82h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.5 62h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 21.22,
      y: 81,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m32 80h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m33 102h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m33 82h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 97.26,
      y: 51,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m108.04 50h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m109.04 72h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m109.04 52h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 97.26,
      y: 81,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m108.04 80h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m109.04 102h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m109.04 82h-14c-0.28 0-0.5-0.22-0.5-0.5v-1c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.22 0.5 0.5v1c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 55.31c-8.27 0-15-6.73-15-15s6.73-15 15-15 15 6.73 15 15c0 8.28-6.73 15-15 15z",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 26.31c7.73 0 14 6.27 14 14s-6.27 14-14 14-14-6.27-14-14 6.27-14 14-14m0-2c-8.82 0-16 7.18-16 16s7.18 16 16 16 16-7.18 16-16-7.18-16-16-16z",
      fill: "#AAA19F"
    }),
    _react2.default.createElement("path", {
      d:
        "m77 40.32c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13c7.18-0.01 13 5.81 13 13z",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#9E9E9E"
      },
      _react2.default.createElement("path", {
        d:
          "m65 31.36c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1c0.56 0 1 0.45 1 1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.09 34.65c-0.39 0.39-1.02 0.39-1.41 0s-0.39-1.03 0-1.42 1.02-0.39 1.41 0 0.39 1.03 0 1.42z"
      }),
      _react2.default.createElement("path", {
        d: "m73.06 41.27c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m69.77 47.36c-0.39-0.39-0.39-1.02 0-1.42 0.39-0.39 1.03-0.39 1.42 0s0.39 1.03 0 1.42c-0.4 0.39-1.03 0.39-1.42 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.15 49.33c0-0.55 0.45-1 1-1s1 0.45 1 1-0.45 1-1 1c-0.56 0-1.01-0.45-1-1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.06 46.04c0.39-0.39 1.02-0.39 1.41 0s0.39 1.02 0 1.41-1.03 0.39-1.41 0c-0.39-0.39-0.39-1.02 0-1.41z"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.09 39.41c0.55 0 1 0.44 1 1 0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.38 33.33c0.39 0.39 0.39 1.02 0 1.42-0.39 0.39-1.03 0.39-1.42 0s-0.39-1.02 0-1.42c0.39-0.39 1.03-0.39 1.42 0z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#616161"
      },
      _react2.default.createElement("circle", {
        cx: 64.05,
        cy: 40.25,
        r: 1.98
      }),
      _react2.default.createElement("path", {
        d:
          "m64.14 40.86c-0.73 0-1.32-0.59-1.32-1.32v-7.98c0-0.73 0.59-1.32 1.32-1.32s1.32 0.59 1.32 1.32v7.98c0 0.73-0.59 1.32-1.32 1.32z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.52 39.66c0.52 0.52 0.52 1.35 0 1.87l-3.31 3.31c-0.52 0.52-1.35 0.52-1.87 0s-0.52-1.35 0-1.87l3.31-3.31c0.52-0.51 1.36-0.51 1.87 0z"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 24.869,
        cy: 102.96,
        r: 21.378,
        gradientTransform:
          "matrix(8.9895e-11 1 1.1617 -1.0443e-10 -96.872 78.095)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#96C760",
        offset: 0.2538
      }),
      _react2.default.createElement("stop", {
        stopColor: "#84B851",
        offset: 0.5994
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9952
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m8.05 118.63c-1.13-1.36-1.67-3.08-1.53-4.86 0.22-2.89 2.36-5.4 5.21-6.09 0.52-0.13 1.06-0.19 1.59-0.19 0.42 0 0.85 0.04 1.28 0.12 0.06 0.01 0.12 0.02 0.19 0.02 0.44 0 0.83-0.29 0.96-0.72 0.84-2.89 3.53-4.91 6.54-4.91 2.37 0 4.54 1.21 5.79 3.22 0.19 0.3 0.51 0.47 0.85 0.47 0.08 0 0.16-0.01 0.24-0.03 0.53-0.13 1.08-0.2 1.62-0.2 0.41 0 0.83 0.04 1.24 0.11 2.92 0.53 5.25 3 5.53 5.87 0.09 0.93-0.08 1.85-0.5 2.58-0.22 0.4-0.18 0.94 0.15 1.26 0.65 0.65 0.68 1.76 0.37 2.52-0.1 0.25-0.4 0.82-0.91 0.82h-28.62z",
      fill: "url(#i)"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.28 103c2.02 0 3.87 1.03 4.94 2.75 0.37 0.6 1.02 0.94 1.7 0.94 0.16 0 0.32-0.02 0.48-0.06 0.46-0.11 0.92-0.17 1.39-0.17 0.35 0 0.71 0.03 1.06 0.1 2.49 0.45 4.48 2.55 4.72 4.98 0.07 0.73-0.06 1.44-0.37 2-0.57 1.01-0.19 1.95 0.3 2.44 0.2 0.2 0.3 0.54 0.28 0.92-0.02 0.37-0.15 0.62-0.23 0.72h-28c-0.77-1.1-1.13-2.42-1.03-3.79 0.19-2.47 2.02-4.6 4.45-5.19 0.45-0.11 0.9-0.16 1.35-0.16 0.36 0 0.73 0.03 1.09 0.1 0.13 0.02 0.25 0.04 0.37 0.04 0.87 0 1.67-0.57 1.92-1.44 0.72-2.46 3.02-4.18 5.58-4.18m0-2c-3.56 0-6.56 2.38-7.5 5.62-0.47-0.09-0.96-0.14-1.46-0.14-0.59 0-1.2 0.07-1.83 0.22-3.27 0.8-5.71 3.63-5.97 6.98-0.18 2.3 0.65 4.41 2.08 5.94h29.07c1.99 0 2.91-3.39 1.24-5.05-0.01-0.01 0.84-1.24 0.64-3.22-0.33-3.38-3.01-6.15-6.35-6.76-0.48-0.09-0.95-0.13-1.41-0.13-0.64 0-1.27 0.08-1.86 0.23-1.38-2.21-3.84-3.69-6.65-3.69z",
      fill: "#689F38"
    }),
    _react2.default.createElement("path", {
      d: "m29.97 109.79s0.07-2.14-1.65-4.43",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m14.91 107.52c2.02 0.03 4 1.62 4.3 3.57",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m16.99 111.98c1.78-0.81 4.17-0.68 6.01 0.26",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 105.04,
        cy: 101.96,
        r: 21.378,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.1617 1.195e-13 223.49 -3.0721)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#96C760",
        offset: 0.2538
      }),
      _react2.default.createElement("stop", {
        stopColor: "#84B851",
        offset: 0.5994
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9952
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.11 117.63c-0.52 0-0.81-0.57-0.91-0.82-0.31-0.75-0.28-1.87 0.38-2.53 0.32-0.32 0.36-0.86 0.14-1.25-0.41-0.73-0.59-1.65-0.5-2.58 0.28-2.87 2.61-5.34 5.53-5.87 0.41-0.07 0.83-0.11 1.24-0.11 0.54 0 1.09 0.07 1.62 0.2 0.08 0.02 0.16 0.03 0.24 0.03 0.34 0 0.66-0.17 0.85-0.47 1.26-2.02 3.42-3.22 5.79-3.22 3.01 0 5.7 2.02 6.54 4.91 0.13 0.43 0.52 0.72 0.96 0.72 0.06 0 0.12-0.01 0.19-0.02 0.43-0.08 0.86-0.12 1.28-0.12 0.53 0 1.07 0.06 1.59 0.19 2.85 0.69 4.99 3.2 5.21 6.09 0.14 1.79-0.41 3.5-1.53 4.86h-28.62z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m105.49 102c2.57 0 4.86 1.72 5.58 4.19 0.25 0.87 1.05 1.44 1.92 1.44 0.12 0 0.25-0.01 0.37-0.04 0.36-0.07 0.73-0.1 1.09-0.1 0.45 0 0.91 0.06 1.35 0.16 2.43 0.59 4.26 2.73 4.45 5.19 0.1 1.37-0.26 2.69-1.03 3.79h-28c-0.08-0.11-0.2-0.36-0.23-0.72-0.02-0.38 0.08-0.72 0.27-0.92 0.5-0.49 0.88-1.43 0.31-2.45-0.31-0.56-0.44-1.27-0.37-2 0.24-2.44 2.22-4.53 4.72-4.98 0.35-0.06 0.71-0.1 1.06-0.1 0.47 0 0.93 0.06 1.39 0.17 0.16 0.04 0.32 0.06 0.48 0.06 0.68 0 1.33-0.35 1.7-0.94 1.07-1.72 2.92-2.75 4.94-2.75m0-2c-2.8 0-5.26 1.48-6.64 3.7-0.6-0.15-1.22-0.23-1.86-0.23-0.46 0-0.93 0.04-1.41 0.13-3.35 0.6-6.02 3.37-6.35 6.76-0.2 1.99 0.66 3.21 0.64 3.22-1.67 1.67-0.75 5.05 1.24 5.05h29.07c1.43-1.53 2.25-3.64 2.08-5.94-0.26-3.35-2.7-6.19-5.97-6.98-0.62-0.15-1.23-0.22-1.83-0.22-0.5 0-0.99 0.05-1.46 0.14-0.95-3.25-3.95-5.63-7.51-5.63z",
      fill: "#689F38"
    }),
    _react2.default.createElement("path", {
      d: "m97.81 108.79s-0.07-2.14 1.65-4.43",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m112.87 106.52c-2.02 0.03-4 1.62-4.3 3.57",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m110.79 110.98c-1.78-0.81-4.17-0.68-6.01 0.26",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "M124,124H4v-4c0-2.21,1.79-4,4-4h112c2.21,0,4,1.79,4,4V124z",
      fill: "#78909C"
    }),
    _react2.default.createElement("path", {
      d:
        "m72.05 96h-16.1c-1.08 0-1.95-0.87-1.95-1.95v-0.1c0-1.08 0.87-1.95 1.95-1.95h16.1c1.08 0 1.95 0.87 1.95 1.95v0.1c0 1.08-0.87 1.95-1.95 1.95z",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120 116h-0.38v3h0.38c0.55 0 1 0.45 1 1v1h-114v-1c0-0.46 0.32-0.84 0.75-0.95v-3.03c-2.09 0.14-3.75 1.86-3.75 3.98v4h120v-4c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92 36c-0.51 0-1.02-0.2-1.41-0.59l-26.59-26.58-26.59 26.58c-0.78 0.78-2.05 0.78-2.83 0s-0.78-2.05 0-2.83l28-28c0.78-0.78 2.05-0.78 2.83 0l28 28c0.78 0.78 0.78 2.05 0 2.83-0.39 0.39-0.9 0.59-1.41 0.59z",
      fill: "#C62828"
    })
  );
}

exports.default = School;
