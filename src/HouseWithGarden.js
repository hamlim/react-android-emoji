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

function HouseWithGarden(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "M50,121H25.41V83.09c0-3.9,3.19-7.09,7.09-7.09h10.4c3.9,0,7.09,3.19,7.09,7.09V121z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m42.91 79c2.26 0 4.09 1.84 4.09 4.09v34.91h-18.59v-34.91c0-2.26 1.84-4.09 4.09-4.09h10.41m0-3h-10.4c-3.9 0-7.09 3.19-7.09 7.09v37.91h24.58v-37.91c0-3.9-3.19-7.09-7.09-7.09z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 24.75,
        cy: 32.625,
        r: 49.417,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8BC34A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 0.7888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m4.46 59.5c0.64-14.05 23.37-52.81 23.37-52.81 1.22-3.59 7.96-3.59 9.18 0 0 0 22.06 39.11 22.01 53.12-0.04 13.82-3.4 32.99-26.6 32.99-23.88 0-28.6-19.5-27.96-33.3z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m32.42 7.21c0.95 0 1.5 0.37 1.55 0.51l0.1 0.28 0.15 0.26c6.01 10.68 21.62 40.74 21.59 51.54-0.06 20.32-7.5 29.79-23.39 29.79-7.68 0-13.67-2.2-17.81-6.53-6.66-6.97-7.21-17.66-6.95-23.42 0.5-10.86 16.73-40.74 22.94-51.33l0.16-0.28 0.1-0.31c0.05-0.14 0.6-0.51 1.56-0.51m0-3.21c-1.99 0-3.98 0.9-4.59 2.69 0 0-22.73 38.76-23.37 52.81-0.64 13.8 4.08 33.3 27.96 33.3 23.2 0 26.56-19.17 26.6-32.99 0.04-14.01-22.01-53.12-22.01-53.12-0.61-1.79-2.6-2.69-4.59-2.69z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m4.46 59.5c0.64-14.05 23.37-52.81 23.37-52.81 1.22-3.59 7.96-3.59 9.18 0 0 0 22.06 39.11 22.01 53.12-0.04 13.82-3.4 32.99-26.6 32.99-23.88 0-28.6-19.5-27.96-33.3z",
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 15.382,
        cy: 98.68,
        r: 20.362,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.1994 1.2338e-13 133.74 83.298)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#96C660",
        offset: 0.3004
      }),
      _react2.default.createElement("stop", {
        stopColor: "#93C35E",
        offset: 0.3827
      }),
      _react2.default.createElement("stop", {
        stopColor: "#86B854",
        offset: 0.4872
      }),
      _react2.default.createElement("stop", {
        stopColor: "#639739",
        offset: 0.8182
      }),
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 0.9952
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m5.01 116.77c-0.03-1.17 0.03-3.22 0.64-5.3 0.72-2.45 2.31-5.55 5.75-6.39 0.56-0.14 1.13-0.21 1.69-0.21 0.45 0 0.91 0.04 1.36 0.13 0.06 0.01 0.13 0.02 0.19 0.02 0.44 0 0.83-0.29 0.96-0.72 0.9-3.08 3.76-5.23 6.97-5.23 2.53 0 4.83 1.28 6.17 3.43 0.19 0.3 0.51 0.47 0.85 0.47 0.08 0 0.16-0.01 0.24-0.03 0.57-0.14 1.15-0.21 1.73-0.21 0.44 0 0.88 0.04 1.31 0.12 3.17 0.57 5.59 3.14 5.9 6.26 0.1 1-0.09 1.98-0.53 2.77-0.22 0.39-0.18 0.93 0.14 1.25 0.72 0.72 0.75 1.92 0.41 2.73-0.11 0.27-0.44 0.9-1.02 0.9h-32.76z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.57 100.08c2.18 0 4.17 1.11 5.32 2.96 0.37 0.6 1.02 0.94 1.7 0.94 0.16 0 0.32-0.02 0.48-0.06 0.49-0.12 0.99-0.18 1.49-0.18 0.38 0 0.76 0.03 1.14 0.1 2.68 0.48 4.82 2.74 5.08 5.37 0.08 0.8-0.07 1.57-0.41 2.18-0.57 1.02-0.19 1.95 0.3 2.45 0.24 0.24 0.36 0.67 0.32 1.13-0.04 0.43-0.21 0.71-0.29 0.8h-31.69c0.03-1.1 0.17-2.56 0.6-4.02 0.94-3.2 2.64-5.12 5.03-5.7 0.48-0.12 0.97-0.18 1.46-0.18 0.39 0 0.78 0.04 1.17 0.11 0.13 0.02 0.25 0.04 0.37 0.04 0.87 0 1.67-0.57 1.92-1.44 0.77-2.65 3.24-4.5 6.01-4.5m0-2c-3.76 0-6.93 2.51-7.93 5.95-0.5-0.09-1.02-0.15-1.55-0.15-0.63 0-1.27 0.07-1.93 0.23-3.45 0.84-5.47 3.67-6.47 7.08-0.98 3.32-0.62 6.56-0.62 6.59h33.71c2.1 0 3.07-3.58 1.31-5.34-0.01-0.01 0.89-1.31 0.68-3.41-0.35-3.58-3.18-6.5-6.71-7.14-0.51-0.09-1-0.13-1.49-0.13-0.68 0-1.34 0.08-1.97 0.24-1.47-2.36-4.07-3.92-7.03-3.92z",
      fill: "#689F38"
    }),
    _react2.default.createElement("path", {
      d: "m30.69 107.37s0.08-2.26-1.75-4.69",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m14.77 104.97c2.14 0.04 4.23 1.71 4.54 3.77",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m16.97 109.69c1.88-0.85 4.41-0.72 6.35 0.27",
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
        id: "f",
        cx: 74.029,
        cy: 22.309,
        r: 106.92,
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
      points:
        "74.03 22 27.39 61.98 30.72 61.98 30.72 120.95 117.34 120.95 117.34 61.98 120.67 61.98",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m74.03 25.95 40.58 34.78c-0.17 0.38-0.27 0.8-0.27 1.24v55.97h-80.62v-55.96c0-0.44-0.1-0.87-0.27-1.24l40.58-34.79m0-3.95-46.64 39.98h3.33v58.97h86.62v-58.97h3.33l-46.64-39.98z",
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
          "m81.52 40.33c0.92 0 1.67 0.75 1.67 1.67v14.99c0 0.92-0.75 1.67-1.67 1.67h-14.99c-0.92 0-1.67-0.75-1.67-1.67v-15c0-0.92 0.75-1.67 1.67-1.67h14.99m0-1.99h-14.99c-2.02 0-3.67 1.64-3.67 3.67v14.99c0 2.02 1.64 3.67 3.67 3.67h14.99c2.02 0 3.67-1.64 3.67-3.67v-15c0-2.02-1.64-3.66-3.67-3.66z",
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
          "m102.35 68.64c0.92 0 1.67 0.75 1.67 1.67v23.32c0 0.92-0.75 1.67-1.67 1.67h-15c-0.92 0-1.67-0.75-1.67-1.67v-23.32c0-0.92 0.75-1.67 1.67-1.67h15m0-2h-15c-2.02 0-3.67 1.64-3.67 3.67v23.32c0 2.02 1.64 3.67 3.67 3.67h14.99c2.02 0 3.67-1.64 3.67-3.67v-23.32c0-2.02-1.64-3.67-3.66-3.67z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 58.517,
        cy: 65.104,
        r: 43.727,
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
      d:
        "m74.03 108.62h-29.98v-41.64c0-0.92 0.75-1.67 1.67-1.67h26.65c0.92 0 1.67 0.75 1.67 1.67v41.64z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 58.933,
        cy: 67.394,
        r: 39.252,
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
        "m70.7 106.6h-23.32c-0.46 0-0.83-0.37-0.83-0.83v-37.6c0-0.46 0.37-0.83 0.83-0.83h23.32c0.46 0 0.83 0.37 0.83 0.83v37.6c0 0.46-0.37 0.83-0.83 0.83z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("rect", {
      x: 66.12,
      y: 41.58,
      width: 15.82,
      height: 15.82,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.87 41.99v14.99c0 0.92 0.75 1.67 1.67 1.67h14.99c0.92 0 1.67-0.75 1.67-1.67v-14.99c0-0.92-0.75-1.67-1.67-1.67h-15c-0.92 0.01-1.66 0.75-1.66 1.67zm16.65 6.66h-6.66v-6.66h6.66v6.66zm-8.32-6.66v6.66h-6.66v-6.66h6.66zm-6.67 8.33h6.66v6.66h-6.66v-6.66zm8.33 6.66v-6.66h6.66v6.66h-6.66z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 86.55,
      y: 69.89,
      width: 16.61,
      height: 24.15,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "url(#c)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 58.621,
          cy: 70.934,
          r: 34.659,
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
          "m68.2 83.63h-18.32c-0.46 0-0.83-0.37-0.83-0.83v-11.66c0-0.46 0.37-0.83 0.83-0.83h18.32c0.46 0 0.83 0.37 0.83 0.83v11.66c0 0.46-0.37 0.83-0.83 0.83z"
      }),
      _react2.default.createElement("path", {
        d:
          "m68.2 103.62h-18.32c-0.46 0-0.83-0.37-0.83-0.83v-14.99c0-0.46 0.37-0.83 0.83-0.83h18.32c0.46 0 0.83 0.37 0.83 0.83v14.99c0 0.46-0.37 0.83-0.83 0.83z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 59.057,
        x2: 59.057,
        y1: 106.68,
        y2: 112.12,
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
        "m77.38 111.39h-36.65v-3.05c0-1.14 0.92-2.06 2.06-2.06h32.52c1.14 0 2.06 0.92 2.06 2.06v3.05z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m75.32 107.28c0.59 0 1.06 0.48 1.06 1.06v2.05h-34.65v-2.05c0-0.59 0.48-1.06 1.06-1.06h32.53m0-1h-32.52c-1.14 0-2.06 0.92-2.06 2.06v3.05h36.65v-3.05c-0.01-1.14-0.93-2.06-2.07-2.06z",
        fill: "#263238"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3918 -.92 .92 .3918 -64.656 118.32)",
        cx: 57.17,
        cy: 108.07,
        rx: 0.35,
        ry: 0.71,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6303 -.7763 .7763 .6303 -58.096 97.245)",
        cx: 73.06,
        cy: 109.63,
        rx: 0.31,
        ry: 0.58,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 59.29,
        cy: 109.29,
        rx: 0.86,
        ry: 0.42,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 66.68,
        cy: 109.24,
        rx: 0.86,
        ry: 0.42,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 64.91,
        cy: 108.18,
        rx: 0.59,
        ry: 0.36,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 74.53,
        cy: 108.32,
        rx: 0.85,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 54.16,
        cy: 108.05,
        rx: 0.59,
        ry: 0.29,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9888 -.149 .149 .9888 -15.387 11.807)",
        cx: 71.1,
        cy: 108.58,
        rx: 0.96,
        ry: 0.47,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9735 -.2286 .2286 .9735 -23.489 15.578)",
        cx: 55.51,
        cy: 109.19,
        rx: 0.93,
        ry: 0.46,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 68.21,
        cy: 108.05,
        rx: 1.18,
        ry: 0.43,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.835 -.5503 .5503 .835 -49.252 51.428)",
        cx: 61.12,
        cy: 107.84,
        rx: 0.71,
        ry: 0.31,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4194 -.9078 .9078 .4194 -62.358 120.82)",
        cx: 63.27,
        cy: 109.16,
        rx: 0.48,
        ry: 1.23,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6303 -.7763 .7763 .6303 -66.739 79.866)",
        cx: 50.49,
        cy: 110.01,
        rx: 0.31,
        ry: 0.58,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 44.11,
        cy: 109.62,
        rx: 0.86,
        ry: 0.42,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 42.34,
        cy: 108.57,
        rx: 0.59,
        ry: 0.36,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 51.96,
        cy: 108.71,
        rx: 0.85,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9888 -.149 .149 .9888 -15.697 8.4483)",
        cx: 48.53,
        cy: 108.97,
        rx: 0.96,
        ry: 0.47,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 45.64,
        cy: 108.43,
        rx: 1.18,
        ry: 0.43,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "a",
        d:
          "m102.35 68.64h-15c-0.92 0-1.67 0.75-1.67 1.67v23.32c0 0.92 0.75 1.67 1.67 1.67h14.99c0.92 0 1.67-0.75 1.67-1.67v-23.32c0-0.92-0.74-1.67-1.66-1.67z"
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
        "m87.35 68.64c-0.92 0-1.67 0.75-1.67 1.67v23.32c0 0.92 0.75 1.67 1.67 1.67h14.99c0.92 0 1.67-0.75 1.67-1.67v-23.32c0-0.92-0.75-1.67-1.67-1.67h-14.99zm8.33 1.67h6.66v6.66h-6.66v-6.66zm-8.33 0h6.66v6.66h-6.66v-6.66zm0 8.33h6.66v6.66h-6.66v-6.66zm6.67 14.99h-6.66v-6.66h6.66v6.66zm8.33 0h-6.66v-6.66h6.66v6.66zm-6.67-8.33v-6.66h6.66v6.66h-6.66z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.98 89.63c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
      fill: "#FFC107"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.98 83.63c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m104.84 98.63h-19.98c-0.92 0-1.67-0.75-1.67-1.67v-3.33c0-0.92 0.75-1.67 1.67-1.67h19.99c0.92 0 1.67 0.75 1.67 1.67v3.33c-0.01 0.92-0.76 1.67-1.68 1.67z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.84 93.63v3.33h-19.98v-3.33h19.98m0-1.67h-19.98c-0.92 0-1.67 0.75-1.67 1.67v3.33c0 0.92 0.75 1.67 1.67 1.67h19.99c0.92 0 1.67-0.75 1.67-1.67v-3.33c-0.01-0.92-0.76-1.67-1.68-1.67z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 73.612,
        cy: 18.464,
        r: 56.334,
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
        "m122.57 59.65-45.88-39.98c-1.53-1.34-3.8-1.34-5.33 0l-45.87 39.98c-1.72 1.5-1.92 4.13-0.44 5.87 1.47 1.75 4.06 1.95 5.78 0.45l41.57-36.22c0.94-0.82 2.34-0.82 3.28 0l41.57 36.22c0.77 0.67 1.72 1 2.66 1 1.15 0 2.3-0.49 3.11-1.45 1.47-1.74 1.27-4.37-0.45-5.87z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m74.03 21.67c0.18 0 0.44 0.05 0.7 0.26l45.88 39.98c0.48 0.42 0.54 1.19 0.12 1.68-0.28 0.34-0.63 0.39-0.82 0.39-0.18 0-0.44-0.05-0.69-0.26l-41.58-36.23c-1-0.87-2.28-1.35-3.61-1.35s-2.61 0.48-3.61 1.35l-41.57 36.22c-0.25 0.22-0.52 0.26-0.69 0.26-0.18 0-0.53-0.05-0.82-0.39-0.41-0.49-0.36-1.26 0.12-1.68l45.88-39.98c0.24-0.2 0.51-0.25 0.69-0.25m0-3c-0.95 0-1.9 0.33-2.67 1l-45.87 39.98c-1.72 1.5-1.92 4.13-0.44 5.87 0.81 0.96 1.96 1.45 3.11 1.45 0.94 0 1.89-0.33 2.66-1l41.57-36.22c0.47-0.41 1.06-0.61 1.64-0.61s1.17 0.2 1.64 0.61l41.57 36.22c0.77 0.67 1.72 1 2.66 1 1.15 0 2.3-0.49 3.11-1.45 1.47-1.75 1.27-4.37-0.44-5.87l-45.88-39.98c-0.76-0.66-1.71-1-2.66-1z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("polygon", {
        id: "k",
        points:
          "74.03 22 27.39 61.98 30.72 61.98 30.72 120.95 117.34 120.95 117.34 61.98 120.67 61.98"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#k"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 59.057,
        x2: 59.057,
        y1: 110.56,
        y2: 115.96,
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
        "m80.71 116.05h-43.31v-3.5c0-1.2 0.97-2.17 2.17-2.17h38.96c1.2 0 2.17 0.97 2.17 2.17v3.5z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m78.54 111.38c0.65 0 1.17 0.53 1.17 1.17v2.5h-41.31v-2.5c0-0.65 0.53-1.17 1.17-1.17h38.97m0-1h-38.96c-1.2 0-2.17 0.97-2.17 2.17v3.5h43.31v-3.5c-0.01-1.2-0.98-2.17-2.18-2.17z",
        fill: "#263238"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9398 -.3418 .3418 .9398 -33.989 32.278)",
        cx: 74.6,
        cy: 112.59,
        rx: 0.77,
        ry: 0.36,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8261 -.5635 .5635 .8261 -54.398 52.004)",
        cx: 57.07,
        cy: 114.15,
        rx: 0.62,
        ry: 0.32,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 72.26,
        cy: 113.81,
        rx: 0.95,
        ry: 0.42,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 64.1,
        cy: 113.76,
        rx: 0.95,
        ry: 0.42,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 66.06,
        cy: 112.7,
        rx: 0.65,
        ry: 0.36,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 55.45,
        cy: 112.84,
        rx: 0.94,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 77.92,
        cy: 112.56,
        rx: 0.65,
        ry: 0.29,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1284 -.9917 .9917 .1284 -60.538 157.32)",
        cx: 59.23,
        cy: 113.1,
        rx: 0.47,
        ry: 1.06,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1969 -.9804 .9804 .1969 -50.102 166.26)",
        cx: 76.43,
        cy: 113.71,
        rx: 0.47,
        ry: 1.02,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 62.42,
        cy: 112.57,
        rx: 1.3,
        ry: 0.43,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4963 -.8682 .8682 .4963 -62.165 117.58)",
        cx: 70.23,
        cy: 112.36,
        rx: 0.32,
        ry: 0.77,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9268 -.3757 .3757 .9268 -37.733 33.82)",
        cx: 67.87,
        cy: 113.68,
        rx: 1.34,
        ry: 0.49,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9398 -.3418 .3418 .9398 -35.601 23.903)",
        cx: 50.03,
        cy: 112.97,
        rx: 0.77,
        ry: 0.36,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 47.69,
        cy: 114.2,
        rx: 0.95,
        ry: 0.42,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 41.49,
        cy: 113.09,
        rx: 0.65,
        ry: 0.36,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1969 -.9804 .9804 .1969 -70.214 142.49)",
        cx: 51.86,
        cy: 114.1,
        rx: 0.47,
        ry: 1.02,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4963 -.8682 .8682 .4963 -74.878 96.439)",
        cx: 45.66,
        cy: 112.74,
        rx: 0.32,
        ry: 0.77,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9268 -.3757 .3757 .9268 -39.678 24.619)",
        cx: 43.3,
        cy: 114.06,
        rx: 1.34,
        ry: 0.49,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 104.12,
        cy: 102.78,
        r: 24.938,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.1617 1.195e-13 223.52 -1.347)",
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
        "m88.07 121.12c-0.69 0-1.06-0.73-1.19-1.04-0.38-0.92-0.34-2.27 0.47-3.08 0.32-0.32 0.35-0.86 0.13-1.25-0.49-0.87-0.7-1.96-0.59-3.07 0.33-3.38 3.07-6.28 6.5-6.9 0.48-0.09 0.97-0.13 1.45-0.13 0.64 0 1.28 0.08 1.91 0.23 0.08 0.02 0.16 0.03 0.24 0.03 0.34 0 0.66-0.17 0.85-0.47 1.47-2.37 4.02-3.79 6.81-3.79 3.54 0 6.7 2.37 7.69 5.76 0.13 0.43 0.52 0.72 0.96 0.72 0.06 0 0.12-0.01 0.19-0.02 0.5-0.09 1-0.14 1.5-0.14 0.62 0 1.25 0.08 1.87 0.23 3.34 0.81 5.86 3.76 6.12 7.16 0.16 2.13-0.49 4.16-1.85 5.77h-33.06z",
      fill: "url(#i)"
    }),
    _react2.default.createElement("path", {
      d:
        "m104.65 102.65c3.1 0 5.86 2.07 6.73 5.04 0.25 0.87 1.05 1.44 1.92 1.44 0.12 0 0.25-0.01 0.37-0.04 0.44-0.08 0.88-0.13 1.31-0.13 0.54 0 1.09 0.07 1.63 0.2 2.93 0.71 5.13 3.29 5.36 6.26 0.13 1.71-0.34 3.35-1.34 4.7l-32.55 0.01c-0.08-0.04-0.33-0.32-0.42-0.87-0.08-0.48-0.03-1.14 0.38-1.55 0.5-0.49 0.87-1.43 0.3-2.45-0.39-0.7-0.56-1.58-0.47-2.48 0.29-2.94 2.68-5.47 5.69-6.02 0.42-0.08 0.85-0.11 1.27-0.11 0.56 0 1.12 0.07 1.67 0.2 0.16 0.04 0.32 0.06 0.48 0.06 0.68 0 1.33-0.35 1.7-0.94 1.31-2.08 3.53-3.32 5.97-3.32m0-2c-3.23 0-6.07 1.7-7.66 4.26-0.69-0.17-1.41-0.26-2.15-0.26-0.53 0-1.07 0.05-1.63 0.15-3.86 0.7-6.94 3.89-7.32 7.79-0.22 2.29 0.76 3.7 0.74 3.72-1.92 1.92-0.86 5.83 1.43 5.83h33.51c1.65-1.77 2.6-4.2 2.4-6.85-0.29-3.86-3.12-7.13-6.88-8.05-0.72-0.17-1.42-0.25-2.1-0.25-0.58 0-1.14 0.06-1.69 0.16-1.09-3.76-4.55-6.5-8.65-6.5z",
      fill: "#689F38"
    }),
    _react2.default.createElement("path", {
      d: "m95.79 110.79s-0.08-2.47 1.9-5.11",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m113.15 108.16c-2.33 0.04-4.61 1.87-4.96 4.11",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m110.76 113.31c-2.05-0.93-4.81-0.79-6.93 0.29",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("rect", {
      x: 4,
      y: 116,
      width: 120,
      height: 8,
      fill: "#689F38"
    }),
    _react2.default.createElement("rect", {
      x: 4,
      y: 121,
      width: 120,
      height: 3,
      fill: "#424242",
      opacity: 0.2
    })
  );
}

exports.default = HouseWithGarden;
