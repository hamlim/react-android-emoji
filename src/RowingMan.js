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

function RowingMan(props) {
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
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "i",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#i"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "h",
          x1: -108.29,
          x2: -108.29,
          y1: 39.245,
          y2: 65.497,
          gradientTransform:
            "matrix(-.9233 -.3841 -.3841 .9233 -18.609 -65.054)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFCA28",
          offset: 0.5453
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFB300",
          offset: 0.834
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E59600",
          offset: 0.9947
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m53.25 7.73c3.92-3.62 10.48-3.51 15.4-1.44 5.5 2.32 7.59 7.19 7.15 12.62-0.16 1.97-0.67 3.84-1.32 5.11-0.08 0.15-0.67 1.24-0.79 1.61-0.55 1.36 1.84 3.42 1.79 5.05-0.04 1.23-2.67 1.39-2.91 1.55-1.21 0.82-0.91 6.24-7.73 5.08-2.38-0.4-3.45-1.04-4.5 0.5l-0.99 4.5-7.62-1.01s1.5-3.88-0.23-9.17c-0.82-2.5-1.28-5.4-2.76-7.94-2.95-5.05 1.24-13.45 4.51-16.46z",
        fill: "url(#h)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "g",
          x1: 75.706,
          x2: 47.283,
          y1: 30.241,
          y2: 18.416,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#EDA600",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D18900",
          offset: 0.8708
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m61.56 5.84c2.23 0 4.61 0.49 6.69 1.37 6.3 2.66 6.8 8.42 6.54 11.61-0.14 1.76-0.6 3.53-1.21 4.73l-0.07 0.13c-0.38 0.71-0.65 1.25-0.76 1.59-0.45 1.18 0.26 2.39 0.9 3.46 0.38 0.64 0.81 1.37 0.83 1.84-0.17 0.17-0.71 0.35-1.61 0.53-0.41 0.08-0.64 0.13-0.86 0.28-0.56 0.38-0.83 1.04-1.15 1.8-0.63 1.53-1.34 3.26-4.25 3.26-0.49 0-1.03-0.05-1.61-0.15-0.44-0.07-0.83-0.16-1.18-0.23-0.67-0.14-1.25-0.26-1.8-0.26-1.05 0-1.85 0.45-2.51 1.42-0.07 0.11-0.12 0.22-0.15 0.35l-0.79 3.6-5.57-0.73c0.36-1.63 0.71-4.78-0.55-8.64-0.23-0.71-0.43-1.45-0.65-2.24-0.53-1.96-1.09-3.99-2.2-5.89-2.64-4.52 1.3-12.41 4.33-15.21 2.34-2.16 5.44-2.62 7.63-2.62m0-1c-3.1 0-6.12 0.86-8.31 2.88-3.27 3.02-7.46 11.41-4.51 16.45 1.48 2.54 1.95 5.44 2.76 7.94 1.73 5.29 0.23 9.17 0.23 9.17l7.62 1.01 0.99-4.5c0.51-0.74 1.02-0.98 1.68-0.98 0.71 0 1.59 0.27 2.82 0.48 0.65 0.11 1.24 0.16 1.77 0.16 5 0 4.86-4.5 5.95-5.24 0.24-0.16 2.87-0.32 2.91-1.55 0.05-1.63-2.34-3.69-1.79-5.05 0.11-0.36 0.71-1.45 0.79-1.61 0.64-1.26 1.16-3.14 1.32-5.11 0.44-5.42-1.65-10.3-7.15-12.62-2.16-0.9-4.65-1.43-7.08-1.43z",
        fill: "url(#g)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "f",
          cx: -149.09,
          cy: -1.7311,
          r: 14.631,
          gradientTransform:
            "matrix(-1.0128 -.2301 -.2274 .9741 -84.709 -20.737)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#6D4C41",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#543930",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m59.33 28.5-0.7-5.96s-3.74 0.18-3.38 4.03c0.25 2.71-1.82 5.39-3.05 5.45l-0.72 0.09c-0.6-4.07-5.21-6.03-4.33-16.3 0.76-8.91 9.26-12.6 16.68-11.54 7.11 1.01 14.33 6.97 12.14 16.5-0.08 0.33-9.43-0.36-11.98 1.56-2.48 1.9-1.42 6.38-4.66 6.17z",
        fill: "url(#f)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "e",
          d:
            "m53.6 21.33-1.28 9.51 0.47 0.99s-0.4 0.17-0.57 0.18l-0.72 0.09c-0.6-4.07-5.21-6.03-4.33-16.3 0.76-8.91 9.26-12.6 16.68-11.54 7.11 1.01 14.38 7.33 12.18 16.54-0.02 0.07-1.12 0.05-1.12 0.05l0.23-1.53-10.95-0.49-10.59 2.5z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "d"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#e"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#d)"
        },
        _react2.default.createElement("path", {
          d:
            "m61.36 5.09c0.79 0 1.58 0.06 2.35 0.16 4.01 0.57 7.65 2.73 9.75 5.79 1.74 2.53 2.33 5.57 1.74 8.82-0.35 0.01-0.81 0.01-1.24 0.02-4.29 0.04-8.64 0.21-10.55 1.65-1.33 1.01-1.83 2.56-2.23 3.8-0.37 1.15-0.61 1.73-0.98 2l-0.57-4.91c-0.06-0.51-0.49-0.88-0.99-0.88h-0.05c-0.08 0-2.07 0.12-3.34 1.58-0.79 0.91-1.12 2.1-0.99 3.54 0.19 2.09-1.32 4.05-1.99 4.33-0.33-1.13-0.91-2.13-1.51-3.17-1.48-2.54-3.15-5.43-2.6-11.92 0.63-7.47 7.08-10.81 13.2-10.81m0-1c-6.72 0-13.52 3.79-14.2 11.72-0.87 10.27 3.74 12.24 4.33 16.3l0.72-0.09c1.22-0.06 3.3-2.74 3.05-5.45-0.36-3.84 3.38-4.03 3.38-4.03l0.7 5.96c0.07 0 0.14 0.01 0.21 0.01 2.98 0 2.02-4.32 4.46-6.18 2.54-1.93 11.94-1.23 12.02-1.56 2.18-9.41-5.07-15.5-12.18-16.51-0.82-0.11-1.66-0.17-2.49-0.17z",
          fill: "#452B22"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m69.31 31 2.49 1.03s-0.55 1.12-0.82 1.57c-1.44 2.43-3.88 4.77-8.44 3.37-0.41-0.13 3.65-5.34 3.65-5.34l3.12-0.63z",
        fill: "none"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m53.25 7.73c3.92-3.62 10.48-3.51 15.4-1.44 6.8 2.87 8.72 9.11 6.75 16.01 0 0-1.14 2.79-1.51 4-0.95 2.33 1.19 2.31 1.25 4.23 0.06 1.81-2.33 1.53-2.57 1.69-1.21 0.82-0.91 6.24-7.73 5.08-2.38-0.4-3.45-1.04-4.5 0.5l-2.22 4.38-6.39-0.89s1.34-9.69-3-17.11c-2.94-5.04 1.25-13.44 4.52-16.45z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "o"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#c"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#o)"
        },
        _react2.default.createElement("path", {
          d:
            "m76.3 33.42c-2 1.74-5.7 2.27-7.56 0.05-0.71-0.84 0.06-1.41 0.94-0.76 1.43 1.06 4.42 0.71 5.69-0.38 0.83-0.72 1.76 0.37 0.93 1.09z",
          fill: "#795548"
        })
      ),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1891 -.982 .982 .1891 30.55 90.344)",
        cx: 69.98,
        cy: 26.67,
        rx: 1.94,
        ry: 1.26,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.4 24c1.19 0.49 1.56-0.29 1.22-0.99-0.25-0.51-0.95-0.99-2.41-0.86-1.38 0.12-2.02 0.84-2.43 1.28s-0.42 0.91-0.11 0.98c0.41 0.1 2.26-1.02 3.73-0.41z",
        fill: "#6D4C41"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "n",
          cx: 50.208,
          cy: 51.836,
          r: 14.87,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.3637
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.8121
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m36.1 65.44 0.59-2.34 7.95-16.9c1.92-4.09 5.23-7.42 9.31-9.36 0.82-0.39 1.69-0.59 2.59-0.59 2.29 0 4.42 1.33 5.41 3.39l2.38 4.94-2.44 8.69-4.31 12.37-0.42 1.79-21.06-1.99z",
        fill: "url(#n)"
      }),
      _react2.default.createElement("path", {
        d:
          "m56.53 36.74c2.1 0 4.05 1.22 4.96 3.11l2.3 4.77-2.38 8.47-4.31 12.38c-0.01 0.03-0.02 0.07-0.03 0.1l-0.31 1.32-20.04-1.89 0.43-1.69 7.94-16.91c1.87-3.99 5.09-7.23 9.07-9.13 0.75-0.34 1.55-0.53 2.37-0.53m0-1c-0.94 0-1.9 0.2-2.8 0.64-4.14 1.97-7.54 5.33-9.55 9.6l-7.98 17-0.73 2.91 22.08 2.08 0.51-2.17 4.32-12.4 2.49-8.87-2.46-5.11c-1.14-2.32-3.46-3.68-5.88-3.68z",
        fill: "#009984"
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "34.64 68.94 36.2 62.98 58.05 65.8 74.29 68.94 74.29 72.73 34.64 72.73",
      clipPath: "url(#a)",
      fill: "#646464"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m36.95 64.08 20.94 2.7 15.4 2.98v1.97h-37.65v-2.66l1.31-4.99m-0.75-1.1-1.56 5.96v3.79h39.65v-3.79l-16.24-3.14-21.85-2.82z",
        fill: "#4F4F4F"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "b",
          cx: 64.383,
          cy: 92.888,
          r: 52.144,
          gradientTransform: "matrix(1 0 0 .4605 0 50.116)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FF9800",
          offset: 0.5
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FA8B00",
          offset: 0.7654
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F57C00",
          offset: 0.9949
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m7.61 73.15h111.59s-0.13 17.86-10.14 24.98h-81.9s-13.2-9.91-19.55-24.98z",
        fill: "url(#b)",
        stroke: "#E37200",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement("path", {
        d:
          "m119.49 76.64h-110.98c-2.49 0-4.51-2.01-4.51-4.5s2.02-4.51 4.51-4.51h110.99c2.49 0 4.51 2.02 4.51 4.51-0.01 2.49-2.03 4.5-4.52 4.5z",
        fill: "#DB5E2C"
      }),
      _react2.default.createElement("path", {
        d:
          "m119.49 76.64h-110.98c-2.49 0-4.51-2.01-4.51-4.5s2.02-4.51 4.51-4.51h110.99c2.49 0 4.51 2.02 4.51 4.51-0.01 2.49-2.03 4.5-4.52 4.5z",
        fill: "#E65100"
      }),
      _react2.default.createElement("path", {
        d:
          "m119.49 68.63c1.93 0 3.51 1.57 3.51 3.51 0 1.93-1.57 3.51-3.51 3.51h-110.98c-1.94-0.01-3.51-1.58-3.51-3.51s1.57-3.51 3.51-3.51h110.98m0-1h-110.98c-2.49 0-4.51 2.02-4.51 4.51s2.02 4.51 4.51 4.51h110.99c2.49 0 4.51-2.02 4.51-4.51-0.01-2.49-2.03-4.51-4.52-4.51z",
        fill: "#D24A00"
      })
    ),
    _react2.default.createElement("rect", {
      y: 93.58,
      width: 127.93,
      height: 34.42,
      clipPath: "url(#a)",
      fill: "#039BE5"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "#29B6F6"
        },
        _react2.default.createElement("path", {
          d: "m0.03 107.36c6.06 0 9.43-7.19 16-7.19h-16v7.19z"
        }),
        _react2.default.createElement("path", {
          d: "m16.03 100.18c6.57 0 9.93 7.19 16 7.19s9.43-7.19 16-7.19h-32z"
        }),
        _react2.default.createElement("path", {
          d:
            "m48.02 100.18c6.57 0 9.93 7.19 16 7.19 6.06 0 9.43-7.19 16-7.19h-32z"
        }),
        _react2.default.createElement("path", {
          d:
            "m80.01 100.18c6.57 0 9.93 7.19 16 7.19 6.06 0 9.43-7.19 16-7.19h-32z"
        }),
        _react2.default.createElement("path", {
          d: "m112 100.18c6.57 0 9.93 7.19 16 7.19v-7.19h-16z"
        })
      ),
      _react2.default.createElement("rect", {
        y: 91.58,
        width: 128,
        height: 8.71,
        fill: "#29B6F6"
      }),
      _react2.default.createElement("path", {
        d: "m127 92.58v34.42h-126v-34.42h126m1-1h-128v36.42h128v-36.42z",
        fill: "#17A3E3"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("rect", {
        transform: "matrix(.7037 -.7105 .7105 .7037 -30.517 75.505)",
        x: 51.27,
        y: 71.52,
        width: 47.99,
        height: 5.65,
        fill: "#FFA726"
      }),
      _react2.default.createElement("path", {
        d:
          "m90.15 56.01 3.3 3.27-33.07 33.39-3.3-3.27 33.07-33.39m-0.01-1.41-34.48 34.81 4.72 4.68 34.48-34.81-4.72-4.68z",
        fill: "#ED9513"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "90.41 63.8 81.53 63.32 91.39 53.08 96.66 57.37",
      clipPath: "url(#a)",
      fill: "#EA960F"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m46.08 111.41c-2.04 0-3.96-0.79-5.41-2.23-3.01-2.98-3.04-7.86-0.05-10.88l8.97-9.05c1.46-1.47 3.4-2.28 5.46-2.28 2.04 0 3.96 0.79 5.41 2.23 3.01 2.98 3.04 7.86 0.05 10.88l-8.97 9.05c-1.45 1.47-3.4 2.28-5.46 2.28z",
        fill: "#FFD54F"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.04 87.47c1.91 0 3.7 0.74 5.06 2.08 1.36 1.35 2.12 3.15 2.13 5.08 0.01 1.92-0.73 3.73-2.08 5.1l-8.97 9.05c-1.36 1.37-3.18 2.13-5.11 2.13-1.91 0-3.7-0.74-5.06-2.08-1.36-1.35-2.12-3.15-2.13-5.08-0.01-1.92 0.73-3.73 2.08-5.1l8.97-9.05c1.36-1.37 3.18-2.12 5.11-2.13m0-1c-2.11 0-4.22 0.81-5.82 2.43l-8.97 9.05c-3.18 3.21-3.16 8.4 0.06 11.58 1.6 1.58 3.68 2.37 5.76 2.37 2.11 0 4.22-0.81 5.82-2.43l8.97-9.05c3.18-3.21 3.16-8.4-0.06-11.58-1.59-1.58-3.67-2.37-5.76-2.37z",
        fill: "#EDC239"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("line", {
        x1: 98.2,
        x2: 96.51,
        y1: 55.83,
        y2: 55.14,
        fill: "none"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "m",
          cx: -646.16,
          cy: -143.92,
          r: 8.6799,
          gradientTransform: "matrix(.0766 -.3143 -.4978 .1895 69.776 -126.5)",
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
      _react2.default.createElement("path", {
        d:
          "m88.42 53.59c-0.36-0.59-0.18-1.36 0.41-1.73l4.01-2.47c0.59-0.36 1.36-0.18 1.73 0.41 0.36 0.59 0.18 1.36-0.41 1.73l-4.02 2.47c-0.59 0.37-1.36 0.18-1.72-0.41z",
        fill: "url(#m)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "l",
          cx: 272.52,
          cy: 402.27,
          r: 10.65,
          gradientTransform: "matrix(-.2709 .0274 .1378 .3273 111.98 -89.398)",
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
      _react2.default.createElement("path", {
        d:
          "m95.78 53.16c-0.54 0.44-1.33 0.36-1.76-0.18l-1.39-1.7c-0.44-0.54-0.36-1.33 0.18-1.76 0.54-0.44 1.33-0.36 1.76 0.18l1.39 1.7c0.44 0.53 0.36 1.32-0.18 1.76z",
        fill: "url(#l)"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(.0343 -.9994 .9994 .0343 24.831 136.07)",
      x: 79.12,
      y: 48.84,
      width: 7.41,
      height: 12.69,
      clipPath: "url(#a)",
      fill: "#FCC21B"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "k",
          cx: -96.785,
          cy: -81.355,
          r: 10.38,
          gradientTransform: "matrix(.1634 -.8565 .885 .1689 180.71 -11.277)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFC107",
          offset: 0.2603
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFA000",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m90.75 53.29-1.69 5.89 3.7 3.34s2.68 0.82 3.28-0.03c0.2-0.28 0.08-0.9 0.18-1.07 0.25-0.43 0.88-0.39 1.16-0.96 0.14-0.28 0.01-0.93-0.07-1.3-0.05-0.24 0.15-0.59 0.37-0.69 0.48-0.2 0.72-0.39 0.85-0.79 0.14-0.41 0.06-0.86-0.15-1.27-0.21-0.4-0.13-1 0.24-1.26 0.32-0.22 0.56-0.96 0.11-1.53-0.5-0.63-2.77-1.37-2.77-1.37l-5.21 1.04z",
        fill: "url(#k)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: -101.23,
          x2: -96.27,
          y1: -89.952,
          y2: -82.838,
          gradientTransform: "matrix(.1634 -.8565 .8818 .1683 180.09 -11.394)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFB300",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFCA28",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m88.43 51.79-2.24 7.29s7.28 5.04 8.05 3.13c0.06-0.15 0.09-0.68 0.1-0.9 0.01-0.25 0.15-0.36 0.36-0.51 0.33-0.24 0.7-0.54 0.77-0.88s-0.03-0.78-0.15-1.14c-0.08-0.25 0.06-0.52 0.31-0.62 0.54-0.22 0.88-0.39 0.99-0.98 0.09-0.47 0.14-1.01-0.13-1.4-0.28-0.42-0.2-1.14 0.16-1.49 0.2-0.19 0.45-0.78 0.15-1.52-0.47-1.14-8.37-0.98-8.37-0.98z",
        fill: "url(#j)"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(.5704 -.8213 .8213 .5704 -11.541 79.29)",
      x: 66.33,
      y: 43.18,
      width: 7.41,
      height: 14.99,
      clipPath: "url(#a)",
      fill: "#FCC21B"
    }),
    _react2.default.createElement("circle", {
      cx: 76.21,
      cy: 54.93,
      r: 3.75,
      clipPath: "url(#a)",
      fill: "#FCC21B"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m66.24 44.75 10.6 7.36c0.16 0.11 0.34 0.17 0.54 0.18l11.7 0.4h0.03c0.19 0 0.37-0.05 0.52-0.15l3.73-2.3c0.02-0.01 0.05-0.03 0.11-0.03 0.02 0 0.04 0 0.06 0.01h0.01c0.01 0 0.02 0.01 0.02 0.01 0.03 0.01 0.06 0.02 0.09 0.02 0.05 0.01 0.12 0.03 0.15 0.07l1.39 1.7c0.04 0.05 0.06 0.12 0.05 0.2-0.07 0.47 0.21 0.93 0.66 1.09 1.27 0.44 1.93 0.82 2.06 0.95 0.04 0.05 0.03 0.11 0.02 0.14-0.7 0.55-0.91 1.64-0.48 2.48 0.1 0.19 0.13 0.37 0.09 0.49-0.01 0.03-0.02 0.05-0.02 0.05-0.01 0.01-0.06 0.05-0.26 0.13-0.69 0.28-1.13 1.12-0.97 1.83 0.08 0.35 0.1 0.55 0.11 0.66-0.05 0.03-0.12 0.06-0.17 0.09-0.26 0.13-0.66 0.34-0.92 0.78-0.17 0.29-0.18 0.59-0.19 0.86v0.08c-0.07 0.01-0.16 0.02-0.28 0.02-0.53 0-1.18-0.14-1.52-0.23-0.04-0.01-0.07-0.02-0.11-0.02-1.53-0.2-4.76-2.19-6.2-3.17-0.01-0.01-0.02-0.02-0.02-0.04-0.18-0.25-0.47-0.41-0.78-0.42l-9.74-0.33c-0.05-0.01-0.1-0.01-0.15-0.01h-0.04-0.11c-0.63 0-1.25-0.22-1.73-0.61-0.02-0.02-0.04-0.03-0.06-0.05l-11.25-7.82 3.06-4.42m-0.25-1.39-4.23 6.09 12.08 8.39c0.65 0.53 1.48 0.83 2.36 0.83h0.15v0.01l9.86 0.34-0.02 0.08s4.69 3.24 6.94 3.54c0.42 0.1 1.13 0.26 1.76 0.26 0.5 0 0.95-0.1 1.15-0.38s0.08-0.9 0.18-1.07c0.25-0.43 0.88-0.39 1.16-0.96 0.14-0.28 0.01-0.93-0.07-1.3-0.05-0.24 0.15-0.59 0.37-0.69 0.48-0.2 0.72-0.39 0.85-0.79 0.14-0.41 0.06-0.86-0.15-1.27-0.21-0.4-0.13-1 0.24-1.26 0.32-0.22 0.56-0.96 0.11-1.53-0.39-0.5-1.91-1.07-2.51-1.28 0.05-0.34-0.03-0.69-0.26-0.97l-1.39-1.7c-0.19-0.23-0.45-0.36-0.72-0.42-0.04-0.01-0.08-0.03-0.12-0.04h-0.03c-0.08-0.01-0.16-0.02-0.24-0.02-0.22 0-0.44 0.05-0.64 0.18l-3.73 2.3-11.7-0.4-11.4-7.94z",
        fill: "#EDA600"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m55.06 46.82c-1.15-0.83-1.91-2.06-2.14-3.46s0.11-2.8 0.94-3.96c1-1.38 2.61-2.2 4.31-2.2 1.12 0 2.19 0.35 3.1 1l9.23 6.66-6.21 8.61-9.23-6.65z",
        fill: "#04A287"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.17 37.7c1.01 0 1.98 0.31 2.81 0.91l8.83 6.37-5.63 7.8-8.83-6.37c-2.15-1.55-2.64-4.56-1.09-6.72 0.9-1.24 2.36-1.99 3.91-1.99m0-1c-1.8 0-3.58 0.84-4.72 2.41-1.88 2.6-1.29 6.23 1.31 8.11l9.64 6.95 6.8-9.42-9.64-6.95c-1.03-0.74-2.21-1.1-3.39-1.1z",
        fill: "#008F76"
      })
    )
  );
}

exports.default = RowingMan;