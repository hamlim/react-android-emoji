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

function House(props) {
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
        cx: 64,
        cy: 8.3519,
        r: 124.15,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD34B",
        offset: 0.179
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCE3F",
        offset: 0.3526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC62C",
        offset: 0.524
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBA11",
        offset: 0.693
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0.7785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "64 8 8 56 12 56 12 122 116 122 116 56 120 56",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,11.95l49.48,42.41C113.18,54.84,113,55.4,113,56v63H15V56c0-0.6-0.18-1.16-0.48-1.63L64,11.95 M64,8L8,56h4v66h104V56h4L64,8L64,8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d: "m124 124h-104v-8h100c2.21 0 4 1.79 4 4v4z",
      fill: "#689F38"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120 119c0.55 0 1 0.45 1 1v1h-98v-2h97m0-3h-100v8h104v-4c0-2.21-1.79-4-4-4z",
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
          "m73 30c1.1 0 2 0.9 2 2v18c0 1.1-0.9 2-2 2h-18c-1.1 0-2-0.9-2-2v-18c0-1.1 0.9-2 2-2h18m0-2h-18c-2.21 0-4 1.79-4 4v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4v-18c0-2.21-1.79-4-4-4z",
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
          "m98 64c1.1 0 2 0.9 2 2v28c0 1.1-0.9 2-2 2h-18c-1.1 0-2-0.9-2-2v-28c0-1.1 0.9-2 2-2h18m0-2h-18c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 45.375,
        cy: 59.75,
        r: 52.502,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CA2929",
        offset: 0.4374
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d: "M64,112H28V62c0-1.1,0.9-2,2-2h32c1.1,0,2,0.9,2,2V112z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 45.875,
        cy: 62.5,
        r: 47.129,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60 109.57h-28c-0.55 0-1-0.45-1-1v-45.14c0-0.55 0.45-1 1-1h28c0.55 0 1 0.45 1 1v45.14c0 0.55-0.45 1-1 1z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("rect", {
      x: 54.5,
      y: 31.5,
      width: 19,
      height: 19,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m53 32v18c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2h-18c-1.1 0-2 0.9-2 2zm20 8h-8v-8h8v8zm-10-8v8h-8v-8h8zm-8 10h8v8h-8v-8zm10 8v-8h8v8h-8z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 79.03,
      y: 65.5,
      width: 19.94,
      height: 29,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "url(#d)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: 45.5,
          cy: 66.75,
          r: 41.615,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E53935",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#DC3431",
          offset: 0.4072
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C62828",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m57 82h-22c-0.55 0-1-0.45-1-1v-14c0-0.55 0.45-1 1-1h22c0.55 0 1 0.45 1 1v14c0 0.55-0.45 1-1 1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m57 106h-22c-0.55 0-1-0.45-1-1v-18c0-0.55 0.45-1 1-1h22c0.55 0 1 0.45 1 1v18c0 0.55-0.45 1-1 1z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 46.024,
        x2: 46.024,
        y1: 109.67,
        y2: 116.2,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B5B5B5",
        offset: 0.2153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.5502
      }),
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.9652
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.02 115.32h-44v-3.66c0-1.37 1.11-2.48 2.48-2.48h39.05c1.37 0 2.48 1.11 2.48 2.48v3.66z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m65.55 110.18c0.81 0 1.48 0.66 1.48 1.48v2.66h-42v-2.66c0-0.81 0.66-1.48 1.48-1.48h39.04m0-1h-39.05c-1.37 0-2.48 1.11-2.48 2.48v3.66h44v-3.66c0-1.37-1.11-2.48-2.47-2.48z",
        fill: "#263238"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 46.024,
        x2: 46.024,
        y1: 114.42,
        y2: 120.91,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BABABA",
        offset: 0.3969
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0B0B0",
        offset: 0.7025
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A0A0A0",
        offset: 0.9786
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.02 121.02h-52v-4.2c0-1.44 1.17-2.61 2.61-2.61h46.78c1.44 0 2.61 1.17 2.61 2.61v4.2z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m69.41 115.21c0.89 0 1.61 0.72 1.61 1.61v3.2h-50v-3.2c0-0.89 0.72-1.61 1.61-1.61h46.78m0-1h-46.78c-1.44 0-2.61 1.17-2.61 2.61v4.2h52v-4.2c0-1.44-1.16-2.61-2.61-2.61z",
        fill: "#263238"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3918 -.92 .92 .3918 -75.82 107.97)",
        cx: 43.76,
        cy: 111.33,
        rx: 0.43,
        ry: 0.85,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6303 -.7763 .7763 .6303 -64.655 90.633)",
        cx: 62.84,
        cy: 113.21,
        rx: 0.38,
        ry: 0.7,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 46.3,
        cy: 112.81,
        rx: 1.03,
        ry: 0.5,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 55.18,
        cy: 112.74,
        rx: 1.03,
        ry: 0.5,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 53.05,
        cy: 111.47,
        rx: 0.71,
        ry: 0.43,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 64.6,
        cy: 111.64,
        rx: 1.02,
        ry: 0.62,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 40.14,
        cy: 111.31,
        rx: 0.71,
        ry: 0.34,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9888 -.149 .149 .9888 -16.008 10.263)",
        cx: 60.48,
        cy: 111.95,
        rx: 1.16,
        ry: 0.56,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9735 -.2286 .2286 .9735 -24.652 12.528)",
        cx: 41.76,
        cy: 112.69,
        rx: 1.12,
        ry: 0.56,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 57.01,
        cy: 111.31,
        rx: 1.42,
        ry: 0.52,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.835 -.5503 .5503 .835 -53.108 45.017)",
        cx: 48.51,
        cy: 111.06,
        rx: 0.86,
        ry: 0.38,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4194 -.9078 .9078 .4194 -72.6 111.78)",
        cx: 51.08,
        cy: 112.65,
        rx: 0.58,
        ry: 1.48,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9398 -.3418 .3418 .9398 -36.048 29.147)",
        cx: 64.68,
        cy: 116.86,
        rx: 0.93,
        ry: 0.43,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8261 -.5635 .5635 .8261 -59.319 45.232)",
        cx: 43.63,
        cy: 118.73,
        rx: 0.75,
        ry: 0.39,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 61.88,
        cy: 118.33,
        rx: 1.14,
        ry: 0.5,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 52.08,
        cy: 118.27,
        rx: 1.14,
        ry: 0.5,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 54.43,
        cy: 117,
        rx: 0.78,
        ry: 0.43,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 41.7,
        cy: 117.17,
        rx: 1.12,
        ry: 0.62,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 68.67,
        cy: 116.84,
        rx: 0.78,
        ry: 0.34,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1284 -.9917 .9917 .1284 -76.209 148.25)",
        cx: 46.24,
        cy: 117.48,
        rx: 0.56,
        ry: 1.27,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1969 -.9804 .9804 .1969 -62.183 160.52)",
        cx: 66.89,
        cy: 118.22,
        rx: 0.56,
        ry: 1.23,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 50.06,
        cy: 116.84,
        rx: 1.56,
        ry: 0.52,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4963 -.8682 .8682 .4963 -71.272 110.34)",
        cx: 59.44,
        cy: 116.59,
        rx: 0.39,
        ry: 0.92,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9268 -.3757 .3757 .9268 -40.246 29.918)",
        cx: 56.6,
        cy: 118.17,
        rx: 1.6,
        ry: 0.59,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "a",
        d:
          "m98 64h-18c-1.1 0-2 0.9-2 2v28c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-28c0-1.1-0.9-2-2-2z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#a"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80 64c-1.1 0-2 0.9-2 2v28c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-28c0-1.1-0.9-2-2-2h-18zm10 2h8v8h-8v-8zm-10 0h8v8h-8v-8zm0 10h8v8h-8v-8zm8 18h-8v-8h8v8zm10 0h-8v-8h8v8zm-8-10v-8h8v8h-8z",
      fill: "#eee"
    }),
    _react2.default.createElement("circle", {
      cx: 56.73,
      cy: 85,
      r: 4,
      fill: "#FFC107"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.73 82c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m101 100h-24c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h24c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m101 94v4h-24v-4h24m0-2h-24c-1.1 0-2 0.9-2 2v4c0 1.1 0.9 2 2 2h24c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "k",
        d: "m120 116h-4v-60h4l-56-48-56 48h4v66h8v2h104v-4c0-2.21-1.79-4-4-4z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "j"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#k"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "64 8 8 56 12 56 12 116 116 116 116 56 120 56",
      clipPath: "url(#j)",
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 63.5,
        cy: 3.75,
        r: 67.639,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE3F35",
        offset: 0.34
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DC3531",
        offset: 0.8027
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122.28 53.2-55.08-48c-1.84-1.6-4.56-1.6-6.4 0l-55.08 48c-2.06 1.8-2.3 4.95-0.53 7.05s4.87 2.34 6.93 0.54l49.91-43.49c1.13-0.98 2.81-0.98 3.94 0l49.91 43.49c0.93 0.81 2.07 1.2 3.2 1.2 1.39 0 2.76-0.59 3.74-1.75 1.76-2.08 1.52-5.24-0.54-7.04z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 22.04,
        cy: 105.13,
        r: 24.298,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.1617 1.195e-13 144.17 83.095)",
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
        "m6.37 123c-0.66 0-1.02-0.7-1.14-1-0.37-0.89-0.33-2.2 0.45-2.98 0.32-0.32 0.35-0.86 0.14-1.25-0.48-0.85-0.68-1.91-0.57-2.98 0.33-3.34 2.93-6.1 6.33-6.72 0.47-0.08 0.94-0.13 1.41-0.13 0.62 0 1.25 0.08 1.86 0.23 0.08 0.02 0.16 0.03 0.24 0.03 0.34 0 0.66-0.17 0.85-0.47 1.44-2.31 3.91-3.69 6.62-3.69 3.44 0 6.52 2.31 7.48 5.61 0.13 0.43 0.52 0.72 0.96 0.72 0.06 0 0.12-0.01 0.19-0.02 0.49-0.09 0.98-0.14 1.46-0.14 0.61 0 1.22 0.07 1.82 0.22 3.25 0.79 5.7 3.66 5.96 6.96 0.16 2.07-0.48 4.04-1.79 5.61h-32.27z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.56 105.03c3 0 5.68 2.01 6.52 4.89 0.25 0.87 1.05 1.44 1.92 1.44 0.12 0 0.25-0.01 0.37-0.04 0.42-0.08 0.85-0.12 1.27-0.12 0.53 0 1.06 0.06 1.58 0.19 2.84 0.69 4.98 3.19 5.2 6.07 0.13 1.65-0.33 3.23-1.28 4.53l-31.72 0.01c-0.07-0.04-0.31-0.33-0.39-0.87-0.07-0.44 0-1.05 0.36-1.42 0.5-0.49 0.87-1.43 0.3-2.45-0.38-0.67-0.54-1.52-0.45-2.4 0.28-2.85 2.6-5.3 5.51-5.83 0.41-0.07 0.82-0.11 1.23-0.11 0.54 0 1.09 0.07 1.62 0.2 0.16 0.04 0.32 0.06 0.48 0.06 0.68 0 1.33-0.35 1.7-0.94 1.25-2 3.41-3.21 5.78-3.21m0-2c-3.16 0-5.92 1.66-7.47 4.16-0.67-0.16-1.37-0.25-2.1-0.25-0.52 0-1.05 0.05-1.59 0.14-3.76 0.68-6.77 3.8-7.15 7.6-0.22 2.23 0.74 3.61 0.72 3.63-1.87 1.88-0.84 5.69 1.4 5.69h32.71c1.61-1.73 2.54-4.1 2.34-6.68-0.29-3.77-3.04-6.96-6.72-7.86-0.7-0.17-1.39-0.25-2.05-0.25-0.56 0-1.11 0.06-1.65 0.16-1.07-3.66-4.44-6.34-8.44-6.34z",
      fill: "#689F38"
    }),
    _react2.default.createElement("path", {
      d: "m13.91 112.93s-0.08-2.41 1.86-4.99",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m30.85 110.37c-2.28 0.04-4.5 1.83-4.84 4.01",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m28.51 115.39c-2-0.91-4.69-0.77-6.76 0.29",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7c0.32 0 0.79 0.08 1.23 0.47l55.08 48c0.83 0.73 0.93 2.01 0.21 2.86-0.5 0.59-1.12 0.68-1.44 0.68s-0.79-0.08-1.23-0.47l-49.91-43.5c-1.09-0.95-2.49-1.48-3.94-1.48s-2.85 0.52-3.94 1.48l-49.91 43.49c-0.44 0.39-0.91 0.47-1.23 0.47s-0.94-0.09-1.44-0.68c-0.72-0.85-0.62-2.13 0.21-2.86l55.08-48c0.44-0.38 0.91-0.46 1.23-0.46m0-3c-1.14 0-2.28 0.4-3.2 1.2l-55.08 48c-2.06 1.8-2.3 4.95-0.53 7.05 0.97 1.16 2.34 1.75 3.73 1.75 1.13 0 2.27-0.4 3.2-1.2l49.91-43.5c0.56-0.49 1.27-0.74 1.97-0.74s1.41 0.25 1.97 0.74l49.91 43.49c0.93 0.81 2.07 1.2 3.2 1.2 1.39 0 2.76-0.59 3.74-1.75 1.77-2.1 1.53-5.25-0.53-7.05l-55.09-47.99c-0.92-0.8-2.06-1.2-3.2-1.2z",
        fill: "#424242"
      })
    )
  );
}

exports.default = House;