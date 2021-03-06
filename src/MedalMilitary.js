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

function MedalMilitary(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("polygon", {
      points:
        "2085.4 77.08 2045.2 77.08 2037.2 52.75 2037.2 8.75 2093.4 8.75 2093.4 52.75",
      fill: "#006064"
    }),
    _react2.default.createElement("rect", {
      x: 2045,
      y: 76.5,
      width: 40.75,
      height: 4.5,
      fill: "#E57373"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: 64,
        x2: 64,
        y1: 5.25,
        y2: 69.504,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.2579
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.89
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M74.33,70.42H53.67l-16.92-13.2c-1.94-1.52-3.08-3.84-3.08-6.31V10.11c0-3.31,2.69-6,6-6 h48.65c3.31,0,6,2.69,6,6v40.67c0,2.45-1.12,4.77-3.05,6.28L74.33,70.42z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "g",
        d:
          "M74.33,70.67H53.67l-16.92-13.2c-1.94-1.52-3.08-3.84-3.08-6.31V10.36c0-3.31,2.69-6.29,6-6.29h48.65 c3.31,0,6,2.98,6,6.29v40.67c0,2.45-1.12,4.77-3.05,6.28L74.33,70.67z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 64.831,
        x2: 64.831,
        y1: 11.5,
        y2: 74.004,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.2104
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.7737
      })
    ),
    _react2.default.createElement("rect", {
      x: 46.13,
      y: 2.36,
      width: 37.4,
      height: 70.14,
      clipPath: "url(#c)",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64.417,
        x2: 64.417,
        y1: 7.25,
        y2: 69.513,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.1355
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9462
      })
    ),
    _react2.default.createElement("rect", {
      x: 52.39,
      y: 2.36,
      width: 24.06,
      height: 70.14,
      clipPath: "url(#c)",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "M74.33,70.67H53.67l-16.92-13.2c-1.94-1.52-3.08-3.84-3.08-6.31V10.36c0-3.31,2.69-6.29,6-6.29h48.65 c3.31,0,6,2.98,6,6.29v40.67c0,2.45-1.12,4.77-3.05,6.28L74.33,70.67z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("rect", {
      x: 43.76,
      y: 2.36,
      width: 42.13,
      height: 70.14,
      clipPath: "url(#b)",
      fill: "none"
    }),
    _react2.default.createElement("rect", {
      x: 49.71,
      y: 2.36,
      width: 29.42,
      height: 70.14,
      clipPath: "url(#b)",
      fill: "none"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.33 7.11c1.65 0 3 1.35 3 3v40.67c0 1.54-0.69 2.97-1.9 3.93l-16.14 12.71h-18.58l-16.11-12.56c-1.22-0.95-1.92-2.39-1.92-3.94v-40.81c0-1.65 1.35-3 3-3h48.65m0-3h-48.66c-3.31 0-6 2.69-6 6v40.81c0 2.46 1.14 4.79 3.08 6.31l16.92 13.2h20.65l16.95-13.37c1.92-1.52 3.05-3.83 3.05-6.28v-40.67c0.01-3.32-2.68-6-5.99-6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 49.165,
        cy: 74.438,
        r: 54.048,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2972
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0.9544
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 95.75,
      r: 28.25,
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m78.65 71.56h-29.08v-3.34c0-1.66 1.34-3 3-3h23.07c1.66 0 3 1.34 3 3v3.34z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "url(#q)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "q",
          cx: 52.559,
          cy: 76.209,
          r: 44.592,
          gradientTransform: "matrix(.9369 0 0 .9369 4.036 6.0941)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.0977
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F9A825",
          offset: 0.9508
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m65.69 74.36 5.27 10.68c0.27 0.55 0.8 0.94 1.41 1.03l11.78 1.71c0.17 0.02 0.32 0.08 0.47 0.14-3.1-7.77-10.46-13.37-19.19-13.92 0.1 0.1 0.19 0.22 0.26 0.36z"
      }),
      _react2.default.createElement("path", {
        d:
          "m43.85 87.77 11.78-1.71c0.61-0.09 1.14-0.47 1.41-1.03l5.27-10.68c0.07-0.14 0.16-0.26 0.25-0.37-8.73 0.56-16.09 6.16-19.19 13.92 0.16-0.05 0.31-0.1 0.48-0.13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m49.87 112.69 2.01-11.74c0.1-0.61-0.1-1.23-0.54-1.66l-8.53-8.31c-0.13-0.12-0.22-0.26-0.31-0.4-0.46 1.78-0.7 3.64-0.7 5.56 0 6.88 3.13 13.03 8.05 17.1-0.02-0.18-0.02-0.36 0.02-0.55z"
      }),
      _react2.default.createElement("path", {
        d:
          "m85.5 90.58c-0.08 0.14-0.18 0.28-0.31 0.4l-8.53 8.31c-0.44 0.43-0.64 1.05-0.54 1.66l2.01 11.74c0.03 0.19 0.04 0.38 0.02 0.55 4.91-4.07 8.05-10.22 8.05-17.1 0-1.92-0.24-3.79-0.7-5.56z"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.42 114.67-10.54-5.54c-0.55-0.29-1.2-0.29-1.75 0l-10.54 5.54c-0.17 0.09-0.35 0.15-0.52 0.18 3.45 2.2 7.54 3.48 11.93 3.48s8.49-1.28 11.93-3.48c-0.17-0.03-0.34-0.09-0.51-0.18z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m69.01 76.57c4.95 1.28 9.28 4.41 12.03 8.73l-8.32-1.21-3.71-7.52m-3.57-2.58c0.09 0.11 0.18 0.23 0.25 0.37l5.27 10.68c0.27 0.55 0.8 0.94 1.41 1.03l11.78 1.71c0.17 0.02 0.32 0.08 0.47 0.14-3.1-7.77-10.45-13.38-19.18-13.93z",
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
          "m59 76.57-3.71 7.52-8.32 1.21c2.75-4.31 7.07-7.45 12.03-8.73m3.57-2.57zm0-0.01c-8.73 0.56-16.09 6.16-19.19 13.92 0.15-0.06 0.3-0.11 0.47-0.14l11.78-1.71c0.61-0.09 1.14-0.47 1.41-1.03l5.27-10.68c0.08-0.13 0.17-0.25 0.26-0.36z",
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
          "m43.85 94.78 6.05 5.89-1.43 8.36c-2.99-3.6-4.66-8.14-4.66-12.9 0-0.45 0.01-0.9 0.04-1.35m-1.34-4.2c-0.46 1.78-0.7 3.64-0.7 5.56 0 6.88 3.13 13.03 8.05 17.1-0.02-0.18-0.02-0.36 0.02-0.55l2.01-11.74c0.1-0.61-0.1-1.23-0.54-1.66l-8.53-8.31c-0.13-0.13-0.23-0.26-0.31-0.4z",
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
          "m84.16 94.78c0.03 0.45 0.04 0.9 0.04 1.36 0 4.77-1.66 9.31-4.66 12.9l-1.43-8.36 6.05-5.9m1.34-4.2c-0.08 0.14-0.18 0.28-0.31 0.4l-8.53 8.31c-0.44 0.43-0.64 1.05-0.54 1.66l2.01 11.74c0.03 0.19 0.04 0.38 0.02 0.55 4.91-4.07 8.05-10.22 8.05-17.1 0-1.92-0.24-3.79-0.7-5.56z",
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
          "m64 110.93 7.53 3.96c-2.38 0.96-4.93 1.45-7.53 1.45s-5.15-0.5-7.53-1.45l7.53-3.96m0-2.02c-0.3 0-0.6 0.07-0.87 0.22l-10.54 5.54c-0.17 0.09-0.35 0.15-0.52 0.18 3.45 2.2 7.54 3.48 11.93 3.48s8.49-1.28 11.93-3.48c-0.17-0.03-0.35-0.09-0.52-0.18l-10.54-5.54c-0.27-0.15-0.57-0.22-0.87-0.22z",
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
          "m75.42 68c0.15 0 0.58 0.24 0.58 0.39v1.72c0 0.08-0.17 0.17-0.19 0.25-0.38 1.28 0.08 2.65 1.2 3.37 7.79 5.02 12.23 12.98 12.23 21.85 0 14.02-11.36 25.42-25.3 25.42-13.97 0-25.34-11.33-25.34-25.25 0-9.14 4.54-17.25 12.15-21.69 0.92-0.54 1.49-1.52 1.49-2.59v-2.98c0.04-0.19 0.38-0.5 0.52-0.5h22.24m0.48-2.99h-22.74c-1.75 0-3.74 1.64-3.74 3.39v3.09c-8 4.93-13.53 13.95-13.53 24.28 0 15.6 12.79 28.25 28.39 28.25s28.32-12.92 28.32-28.52c0-10.27-5.41-19.48-13.6-24.48h0.42v-2.61c0-1.76-1.77-3.4-3.52-3.4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "p",
        x1: -126.19,
        x2: -94.857,
        y1: 8.0746,
        y2: 58.075,
        gradientTransform: "matrix(-1 0 0 1 98.309 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.1848
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1565C0",
        offset: 0.806
      })
    ),
    _react2.default.createElement("polygon", {
      points: "179.44 55.18 210.87 55.18 240.87 6.75 209.44 6.75",
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: -123.95,
        x2: -97.07,
        y1: 14.89,
        y2: 56.89,
        gradientTransform: "matrix(-1 0 0 1 98.309 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.461
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "190.26 55.17 203.69 55.17 233.69 6.74 220.26 6.74",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: -132.92,
        x2: -107.92,
        y1: 13.058,
        y2: 53.808,
        gradientTransform: "matrix(-1 0 0 1 98.309 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.2565
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.8859
      })
    ),
    _react2.default.createElement("polygon", {
      points: "199.64 55.17 210.87 55.17 240.87 6.74 229.69 6.74",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m235.48 9.75-26.28 42.43h-24.37l26.28-42.43h24.37m5.39-3zm0 0h-31.42l-30 48.43h31.42l30-48.43z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m213 43h-36c-4.42 0-8 3.58-8 8v16.04c0 2.17 1.8 3.95 4.02 3.96h0.01c2.23-0.01 4.97-1.75 4.97-3.96v-10.04c0-1.1 0.9-2 2-2h30c1.1 0 2 0.9 2 2v9.93c0 1.98 2.35 3.68 4.22 4.04 0.26 0.05 0.52 0.08 0.78 0.08 2.21 0 4-1.79 4-4v-16.05c0-4.42-3.58-8-8-8z",
      fill: "#FDD835"
    }),
    _react2.default.createElement("polyline", {
      points: "255.48 71.37 134.93 71.37 134.93 13.01 255.48 13.01",
      fill: "none"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m213 45c3.31 0 6 2.69 6 6v16.04c0 1.1-0.9 2-2 2-0.13 0-0.27-0.01-0.41-0.04-1.19-0.23-2.59-1.35-2.59-2.07v-9.93c0-2.21-1.79-4-4-4h-30c-2.21 0-4 1.79-4 4v10.04c0 0.88-1.64 1.96-2.97 1.96-1.12-0.01-2.03-0.89-2.03-1.96v-16.04c0-3.31 2.69-6 6-6h36m0-2h-36c-4.42 0-8 3.58-8 8v16.04c0 2.17 1.8 3.95 4.02 3.96h0.01c2.23-0.01 4.97-1.75 4.97-3.96v-10.04c0-1.1 0.9-2 2-2h30c1.1 0 2 0.9 2 2v9.93c0 1.98 2.35 3.68 4.22 4.04 0.26 0.05 0.52 0.08 0.78 0.08 2.21 0 4-1.79 4-4v-16.05c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 165.81,
        x2: 197.14,
        y1: 8.0746,
        y2: 58.075,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.1355
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9462
      })
    ),
    _react2.default.createElement("polygon", {
      points: "210.87 55.18 179.44 55.18 149.44 6.75 180.87 6.75",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 169.23,
        x2: 196.11,
        y1: 10.477,
        y2: 52.477,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.2104
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.7737
      })
    ),
    _react2.default.createElement("polygon", {
      points: "204.04 55.17 190.62 55.17 160.62 6.74 174.04 6.74",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 179.25,
        x2: 204.25,
        y1: 13.058,
        y2: 53.808,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.2579
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.89
      })
    ),
    _react2.default.createElement("polygon", {
      points: "210.84 55.17 199.62 55.17 169.62 6.74 180.8 6.74",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m179.2 9.75 26.28 42.43h-24.37l-26.28-42.43h24.37m1.67-3h-31.42l30 48.43h31.42l-30-48.43z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 174,
        cy: 66.5,
        r: 72.577,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2972
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0.9544
      })
    ),
    _react2.default.createElement("circle", {
      cx: 195,
      cy: 95,
      r: 38,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m195 60c19.3 0 35 15.7 35 35s-15.7 35-35 35-35-15.7-35-35 15.7-35 35-35m0-3c-20.99 0-38 17.01-38 38s17.01 38 38 38 38-17.01 38-38-17.01-38-38-38z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "url(#h)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "h",
          cx: 181.02,
          cy: 70.305,
          r: 54.464,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.0977
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F9A825",
          offset: 0.9508
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m197.2 66.21 6.87 13.92c0.36 0.72 1.05 1.22 1.84 1.34l15.36 2.23c0.22 0.03 0.42 0.1 0.61 0.18-4.04-10.12-13.63-17.43-25.01-18.15 0.12 0.15 0.23 0.3 0.33 0.48z"
      }),
      _react2.default.createElement("path", {
        d:
          "m168.73 83.7 15.36-2.23c0.8-0.12 1.49-0.62 1.84-1.34l6.87-13.92c0.09-0.18 0.21-0.33 0.33-0.48-11.38 0.72-20.97 8.03-25.01 18.15 0.19-0.08 0.39-0.15 0.61-0.18z"
      }),
      _react2.default.createElement("path", {
        d:
          "m176.57 116.18 2.62-15.3c0.14-0.79-0.13-1.6-0.7-2.17l-11.12-10.83c-0.16-0.16-0.29-0.34-0.4-0.52-0.6 2.32-0.91 4.74-0.91 7.24 0 8.97 4.08 16.99 10.49 22.29-0.03-0.22-0.02-0.46 0.02-0.71z"
      }),
      _react2.default.createElement("path", {
        d:
          "m223.02 87.36c-0.11 0.18-0.23 0.36-0.4 0.52l-11.12 10.83c-0.58 0.56-0.84 1.37-0.7 2.17l2.62 15.3c0.04 0.25 0.05 0.49 0.02 0.72 6.41-5.31 10.49-13.32 10.49-22.29 0.01-2.51-0.31-4.94-0.91-7.25z"
      }),
      _react2.default.createElement("path", {
        d:
          "m209.88 118.76-13.74-7.22c-0.71-0.37-1.57-0.37-2.28 0l-13.74 7.22c-0.22 0.12-0.45 0.2-0.68 0.24 4.49 2.87 9.83 4.54 15.56 4.54s11.06-1.67 15.56-4.54c-0.23-0.05-0.46-0.12-0.68-0.24z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m202.27 69.71c5.73 1.68 10.75 5.32 14.13 10.25l-9.78-1.42-4.35-8.83m-5.4-3.98c0.12 0.15 0.24 0.3 0.33 0.48l6.87 13.92c0.36 0.72 1.05 1.22 1.84 1.34l15.36 2.23c0.22 0.03 0.42 0.1 0.61 0.18-4.04-10.12-13.63-17.43-25.01-18.15z",
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
          "m187.73 69.71-4.36 8.83-9.78 1.42c3.39-4.92 8.41-8.56 14.14-10.25m5.4-3.71zm0-0.27c-11.38 0.72-20.97 8.03-25.01 18.15 0.19-0.08 0.39-0.15 0.61-0.18l15.36-2.23c0.8-0.12 1.49-0.62 1.84-1.34l6.87-13.92c0.1-0.18 0.21-0.33 0.33-0.48z",
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
          "m169.08 93.72 7.11 6.93-1.69 9.84c-3.5-4.51-5.44-10.07-5.44-15.9 0-0.28 0.01-0.57 0.02-0.87m-2.1-6.36c-0.6 2.32-0.91 4.74-0.91 7.24 0 8.97 4.08 16.99 10.49 22.29-0.03-0.23-0.02-0.47 0.02-0.72l2.62-15.3c0.14-0.79-0.13-1.6-0.7-2.17l-11.12-10.83c-0.17-0.15-0.3-0.33-0.4-0.51z",
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
          "m220.92 93.72c0.01 0.29 0.01 0.58 0.01 0.88 0 5.83-1.94 11.39-5.44 15.9l-1.69-9.84 7.12-6.94m2.1-6.36c-0.11 0.18-0.23 0.36-0.4 0.52l-11.12 10.83c-0.58 0.56-0.84 1.37-0.7 2.17l2.62 15.3c0.04 0.25 0.05 0.49 0.02 0.72 6.41-5.31 10.49-13.32 10.49-22.29 0.01-2.51-0.31-4.94-0.91-7.25z",
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
          "m195 114.33 8.86 4.66c-2.82 1.03-5.82 1.56-8.86 1.56s-6.04-0.53-8.86-1.56l8.86-4.66m0-3.08c-0.39 0-0.78 0.09-1.14 0.28l-13.74 7.22c-0.22 0.12-0.45 0.2-0.68 0.24 4.49 2.87 9.83 4.54 15.56 4.54s11.06-1.67 15.56-4.54c-0.23-0.04-0.45-0.12-0.68-0.24l-13.74-7.22c-0.36-0.18-0.75-0.28-1.14-0.28z",
        fill: "#424242"
      })
    )
  );
}

exports.default = MedalMilitary;
