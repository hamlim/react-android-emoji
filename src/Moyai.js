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

function Moyai(props) {
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
        x1: 61.844,
        x2: 61.844,
        y1: 3.441,
        y2: 117.65,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.39 97.77c-0.65-0.75-1.16-1.61-1.41-2.55-0.03-0.1-0.06-0.21-0.08-0.31-1.39-5.26-1.88-9.51-2.45-12.21v-74.09c0-2.56-2.21-4.64-4.92-4.6-0.29 0-0.61 0.01-0.92 0.02-11.59 0.05-37.62 2.83-44.67 26.07 0 0 0 4.31 4.57 8.62 0 0-8.85 8.34-13.49 29.14-0.15 0.67-0.27 1.34-0.36 2.02-0.65 4.68-3.58 24.83-6.89 33.85-0.89 2.43 0.52 5.07 3.12 5.82 4.02 1.17 10.14 2.45 17.63 2.45 0.1 0 0.2 0 0.3-0.01-1.82 4.45-2.86 7.77-3 8.01-0.89 1.62-1.4 5.27 13.89 3.53 2.34-0.27 4.66-0.7 6.93-1.23 12.7-2.96 23.88-9.37 28.4-12.19 1.65-1.03 3.23-2.93 4.18-4.75 0.19-0.37 0.37-0.74 0.51-1.1 0.78-2.06 0.72-4.13-1.34-6.49z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 46.75,
        x2: 73.192,
        y1: 102.81,
        y2: 102.81,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.01 82.46c-3.84 1.52-8.21 3.89-12.76 7.33-10.56 7.96-17.08 29.6-17.43 30.23-0.89 1.62-1.4 5.27 13.89 3.53 2.34-0.27 4.66-0.7 6.93-1.23 2.75-10.54 13.57-27.23 21.21-38.13-3.2-2.53-7.72-3.36-11.84-1.73z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m96.39 97.77c-0.65-0.75-1.16-1.61-1.41-2.55-0.03-0.1-0.06-0.21-0.08-0.31-3.14-11.9-1.71-18.68-6.85-13.83-0.69 0.97-1.43 2.01-2.2 3.11-7.63 10.9-18.45 27.58-21.21 38.13 12.7-2.96 23.88-9.37 28.4-12.19 1.65-1.03 3.23-2.93 4.18-4.75 0.19-0.37 0.37-0.74 0.51-1.1 0.78-2.08 0.72-4.15-1.34-6.51z",
      fill: "#616161"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 58.352,
        cy: 102.76,
        r: 15.544,
        gradientTransform: "matrix(.2245 .9745 -2.4854 .5725 300.66 -12.927)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.39 97.77c-0.65-0.75-1.16-1.61-1.41-2.55-0.03-0.1-0.06-0.21-0.08-0.31-3.14-11.9-1.71-18.68-6.85-13.83-0.69 0.97-1.43 2.01-2.2 3.11-3.2-2.53-7.72-3.36-11.84-1.73-3.84 1.52-8.21 3.89-12.76 7.33-10.56 7.96-17.08 29.6-17.43 30.23-0.89 1.62-1.4 5.27 13.89 3.53 2.34-0.27 4.66-0.7 6.93-1.23 12.7-2.96 23.88-9.37 28.4-12.19 1.65-1.03 3.23-2.93 4.18-4.75 0.19-0.37 0.37-0.74 0.51-1.1 0.78-2.08 0.72-4.15-1.34-6.51z",
      fill: "url(#f)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m96.39 97.77c-0.65-0.75-1.16-1.61-1.41-2.55-0.03-0.1-0.06-0.21-0.08-0.31-3.14-11.9-1.71-18.68-6.85-13.83-0.69 0.97-1.43 2.01-2.2 3.11-3.2-2.53-7.72-3.36-11.84-1.73-3.84 1.52-8.21 3.89-12.76 7.33-10.56 7.96-17.08 29.6-17.43 30.23-0.89 1.62-1.4 5.27 13.89 3.53 2.34-0.27 4.66-0.7 6.93-1.23 12.7-2.96 23.88-9.37 28.4-12.19 1.65-1.03 3.23-2.93 4.18-4.75 0.19-0.37 0.37-0.74 0.51-1.1 0.78-2.08 0.72-4.15-1.34-6.51z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 58.875,
        x2: 58.875,
        y1: -7.0961,
        y2: 113.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m86.92 4.02c-11.44 0.01-37.87 2.63-44.98 26.08 0 0 0 4.31 4.57 8.62 0 0-8.85 8.34-13.49 29.14-0.15 0.67-0.27 1.34-0.36 2.02-0.65 4.68-3.58 24.83-6.89 33.85-0.89 2.43 0.52 5.07 3.12 5.82 4.02 1.17 10.14 2.45 17.63 2.45 13.72 0 45.73-8.62 45.73-21.55v-81.4c0-2.78-2.38-5.03-5.33-5.03z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m88.27 4.92s13.72-4.31 13.72 17.24v32.98c0 2.84 0.18 5.68 0.43 8.51 0.43 4.85-0.43 14.55-14.15 14.55v-73.28z",
      fill: "#616161"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 90.923,
        cy: 46.508,
        r: 6.255,
        gradientTransform: "matrix(1 0 0 5.4357 0 -206.29)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.45 14.12s4.9-3.75 4.9 14.99v31.82c0 1.01 0.03 2.01 0.09 3.02 0.23 3.49 0.44 13.86-4.99 13.86v-63.69z",
      fill: "url(#c)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 73.366,
        x2: 73.366,
        y1: 3.5,
        y2: 105.66,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.75 4.11c-2.96 3.31-2.7 11.6 0.34 20.09 2.08 5.82 2.69 12.02 2.07 18.14-1.87 18.65-8.58 53.87-32.88 69 15.36-2.17 38.17-9.53 38.17-20.46v-82.27c0-2.56-2.21-4.64-4.92-4.6-0.84 0-1.77 0.03-2.78 0.1z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 53.952,
        x2: 64.972,
        y1: 13.211,
        y2: 33.235,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.44 28.36s-7.14-6.09-15.09-7.14c-19.25-2.54-27.2 9.3-27.2 9.3s-0.23 4.04 4.34 8.35l2.2 0.37c16.74 0.61 29.49-4.06 35.46-6.81 1.73-0.79 1.9-3.06 0.29-4.07z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d: "m83.31 21.9",
      fill: "#FFA000"
    }),
    _react2.default.createElement("path", {
      d:
        "m40 81.42c-0.86 0.11-1.09-0.07-0.42-0.58 1.98-1.51 14.4-13.34 16.16-14.5 1.19-0.79-13.62-5.02-20.64-5.81-0.66 2.1-1.37 4.32-1.94 6.76-0.25 1.09-0.44 2.19-0.6 3.29-0.22 1.54-2.07 13.14-2.08 13.18-1.97 10.47-3.21 15.44-4.4 19 6.19-3.98 9.62-9.24 11.42-13.27 0.74-1.66 2.48-2.58 4.37-2.83 6.79-0.91 11.98-1.06 14.44-2.07 0.16-0.07 0.18-0.29 0.03-0.39-3.51-2.36-8.91-3.75-16.34-2.78z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.92 7.02c0.4 0 0.79 0.1 1.18 0.31 0.43 0.23 0.91 0.34 1.4 0.34 0.14 0 0.27-0.01 0.41-0.03 0.36-0.05 0.73-0.07 1.09-0.07 6.61 0 8 7.94 8 14.59v32.98c0 2.59 0.14 5.37 0.44 8.77 0.56 6.33-2.03 10.03-7.69 11.01-1.44 0.25-2.49 1.5-2.49 2.96v3.93c0 0.25 0.03 0.5 0.09 0.74 0.23 0.89 0.44 2.17 0.7 3.65 0.43 2.56 0.97 5.74 1.96 9.46l0.08 0.31c0.35 1.34 1.04 2.6 2.05 3.76 1.24 1.43 1.24 2.29 0.79 3.46-0.08 0.2-0.2 0.46-0.36 0.78-0.76 1.46-2.01 2.9-3.11 3.59-4.14 2.59-15.09 8.93-27.48 11.81-2.37 0.55-4.52 0.93-6.59 1.17-2.56 0.29-4.79 0.44-6.61 0.44-2.09 0-3.3-0.19-3.96-0.36 0.06-0.17 0.13-0.37 0.22-0.63 0.47-1.34 1.33-3.83 2.58-6.88 0.38-0.93 0.27-1.99-0.29-2.82-0.56-0.82-1.49-1.32-2.48-1.32h-0.03-0.19-0.09c-7.24 0-13.13-1.27-16.79-2.33-0.49-0.14-0.87-0.44-1.08-0.85-0.12-0.24-0.23-0.61-0.06-1.06 3.37-9.15 6.25-28.7 7.05-34.47 0.09-0.65 0.19-1.23 0.32-1.78 0.17-0.75 0.36-1.54 0.59-2.48 0.34-1.36-0.3-2.77-1.55-3.41-1.4-0.71-1.77-1.28-1.79-1.42-0.03-0.22 0.24-1.11 1.86-2.63 0.11-0.1 2.66-2.52 6.31-6.64 0.18-0.2 0.33-0.43 0.45-0.68 3.47-7.14 6.74-10.33 6.76-10.35 0.6-0.57 0.94-1.36 0.94-2.18 0-0.83-0.34-1.62-0.94-2.18-2.81-2.65-3.45-5.17-3.59-6.11 6.76-21.07 31.51-23.37 41.9-23.38m0-3c-11.44 0.01-37.87 2.63-44.98 26.08 0 0 0 4.31 4.57 8.62 0 0-3.59 3.39-7.4 11.22-3.6 4.07-6.12 6.45-6.12 6.45-4.43 4.17-3.14 7 0.63 8.91-0.21 0.83-0.42 1.68-0.61 2.56-0.15 0.67-0.27 1.34-0.36 2.02-0.65 4.68-3.58 24.83-6.89 33.85-0.89 2.43 0.52 5.07 3.12 5.82 4.02 1.17 10.14 2.45 17.63 2.45 0.1 0 0.2 0 0.3-0.01-1.82 4.45-2.86 7.77-3 8.01-0.73 1.32-1.2 3.99 6.93 3.99 1.84 0 4.13-0.14 6.95-0.46 2.34-0.27 4.66-0.7 6.93-1.23 12.7-2.96 23.88-9.37 28.4-12.19 1.65-1.03 3.23-2.93 4.18-4.75 0.19-0.37 0.37-0.74 0.51-1.1 0.79-2.07 0.72-4.14-1.34-6.5-0.65-0.75-1.16-1.61-1.41-2.55-0.03-0.1-0.06-0.21-0.08-0.31-1.55-5.87-1.98-10.49-2.65-13.09v-3.93c9.9-1.71 10.55-9.9 10.17-14.23-0.25-2.83-0.43-5.67-0.43-8.51v-32.97c0-15.4-7-17.59-11-17.59-0.57 0-1.08 0.04-1.5 0.1-0.74-0.41-1.61-0.66-2.55-0.66z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 49.592,
        x2: 49.592,
        y1: 14.995,
        y2: 63.582,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.65 26.53c3.27 0.89 7.46 3.47 9.96 10.55 0 0-11.85 5.13-14.3 15.51-0.47 1.97-0.03 4.03 1.09 5.75 1.16 1.79 2.62 4.81 2.97 9.07 0.08 1.04-0.82 1.91-1.92 1.89-8.08-0.2-39.07-3.1-27.19-14.29 0 0 14.31-9.5 23.02-25.9 1.16-2.21 3.88-3.26 6.37-2.58z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 32.899,
        x2: 45.814,
        y1: 52.602,
        y2: 66.109,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28.58 59.88c0.94 8.21 23.29 9.26 30.08 9.42 0.89 0.02 1.44-0.89 1-1.62-4.63-7.63-22.08-8.27-31.08-7.8z",
      fill: "url(#j)"
    }),
    _react2.default.createElement("path", {
      d:
        "m43.64 62.71c2.29 0.26 8.25 1.09 10.54 3.1 0.4 0.35 0.29 0.98-0.22 1.16-0.89 0.33-2.55 0.74-5.3 0.78-2.3 0.04-4.53-1.12-5.47-3.1-0.16-0.35-0.29-0.72-0.37-1.13-0.09-0.45 0.33-0.86 0.82-0.81z",
      fill: "#515151"
    }),
    _react2.default.createElement("path", {
      d:
        "m32.93 60.96s2.44 4.06 4.89 5.71c0 0-2.23-0.27-3.96-1.25-1.12-0.63-1.74-1.86-1.48-3.08 0.09-0.43 0.26-0.89 0.55-1.38z",
      fill: "#515151"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#A1887F"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9489 -.3154 .3154 .9489 -20.795 21.605)",
        cx: 56.35,
        cy: 75.04,
        rx: 2.87,
        ry: 1.28,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.5026 -.8645 .8645 .5026 -42.056 94.03)",
        cx: 60.69,
        cy: 83.56,
        rx: 2.23,
        ry: 1.2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.5026 -.8645 .8645 .5026 -46.845 71.269)",
        cx: 38.51,
        cy: 76.35,
        rx: 2.23,
        ry: 1.2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8982 -.4395 .4395 .8982 -33.406 38.39)",
        cx: 66.2,
        cy: 91.33,
        rx: 3.51,
        ry: 1.49,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8982 -.4395 .4395 .8982 -.8951 36.984)",
        cx: 79.42,
        cy: 20.43,
        rx: 3.04,
        ry: 1.29,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8982 -.4395 .4395 .8982 -20.448 26.288)",
        cx: 46.54,
        cy: 57.3,
        rx: 3.04,
        ry: 1.29,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8982 -.4395 .4395 .8982 -28.159 23.108)",
        cx: 35.82,
        cy: 72.36,
        rx: 3.02,
        ry: 1.28,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9019 -.4319 .4319 .9019 -32.566 44.97)",
        cx: 82.73,
        cy: 94.19,
        rx: 2.41,
        ry: 1.28,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9019 -.4319 .4319 .9019 -28.58 38.141)",
        cx: 69.69,
        cy: 82,
        rx: 2.95,
        ry: 1.57,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9019 -.4319 .4319 .9019 -3.9577 31.428)",
        cx: 67.22,
        cy: 24.43,
        rx: 2.49,
        ry: 1.32,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8982 -.4395 .4395 .8982 -29.226 44.706)",
        cx: 81.93,
        cy: 85.46,
        rx: 2.41,
        ry: 1.02,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9448 -.3275 .3275 .9448 -27.507 19.89)",
        cx: 45.3,
        cy: 91.62,
        rx: 2.9,
        ry: 1.23,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9448 -.3275 .3275 .9448 -2.9883 18.786)",
        cx: 54.28,
        cy: 18.27,
        rx: 2.9,
        ry: 1.23,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7899 -.6133 .6133 .7899 -9.1244 63.005)",
        cx: 87.38,
        cy: 44.82,
        rx: 1.26,
        ry: 2.81,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9642 -.2652 .2652 .9642 -16.515 23.052)",
        cx: 77.12,
        cy: 72.69,
        rx: 3.81,
        ry: 1.66,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.0269 -.9996 .9996 .0269 -50.266 145.85)",
        cx: 49.78,
        cy: 98.75,
        rx: 1.13,
        ry: 2.87,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9362 -.3515 .3515 .9362 -31.556 32.712)",
        cx: 74.31,
        cy: 103.26,
        rx: 2.88,
        ry: 1.01,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9362 -.3515 .3515 .9362 -35.321 31.142)",
        cx: 68.1,
        cy: 112.84,
        rx: 2.88,
        ry: 1.01,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7017 -.7124 .7124 .7017 -29.64 69.833)",
        cx: 68.58,
        cy: 70.32,
        rx: 2.97,
        ry: 1.39,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7686 -.6398 .6398 .7686 -35.944 43.152)",
        cx: 41.67,
        cy: 71.26,
        rx: 1.36,
        ry: 3.03,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 40.28,
        cy: 97.77,
        rx: 2.59,
        ry: 1.34,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1808 -.9835 .9835 .1808 -63.12 137.76)",
        cx: 51.13,
        cy: 106.77,
        rx: 1.76,
        ry: 4.05,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.0269 -.9996 .9996 .0269 -38.088 150.26)",
        cx: 58.13,
        cy: 94.69,
        rx: 1.2,
        ry: 3.05,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.0269 -.9996 .9996 .0269 -68.384 173.27)",
        cx: 54.81,
        cy: 121.76,
        rx: 1.2,
        ry: 3.05,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9362 -.3515 .3515 .9362 -34.621 19.535)",
        cx: 36.49,
        cy: 105.11,
        rx: 2.08,
        ry: 0.73,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8727 -.4882 .4882 .8727 -13.804 46.712)",
        cx: 82.69,
        cy: 49.83,
        rx: 1.33,
        ry: 2.76,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7161 -.698 .698 .7161 -18.323 57.96)",
        cx: 62.08,
        cy: 51.5,
        rx: 1.18,
        ry: 2.26,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9911 -.1334 .1334 .9911 -5.524 9.7293)",
        cx: 69.84,
        cy: 46.09,
        rx: 1.56,
        ry: 3.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9911 -.1334 .1334 .9911 -4.9085 10.831)",
        cx: 78.37,
        cy: 42.05,
        rx: 1.56,
        ry: 3.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9911 -.1334 .1334 .9911 -3.7644 7.907)",
        cx: 57.12,
        cy: 32.05,
        rx: 1.56,
        ry: 3.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6409 -.7677 .7677 .6409 11.346 59.767)",
        cx: 69.55,
        cy: 17.76,
        rx: 2.32,
        ry: 1.19,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9906 -.1368 .1368 .9906 -6.3105 6.9883)",
        cx: 47.71,
        cy: 49.42,
        rx: 1.34,
        ry: 2.3,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9906 -.1368 .1368 .9906 -7.6877 9.6326)",
        cx: 66.26,
        cy: 60.77,
        rx: 1.64,
        ry: 2.82,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7933 -.6088 .6088 .7933 -48.768 38.965)",
        cx: 33.01,
        cy: 91.31,
        rx: 1.05,
        ry: 2.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6653 -.7465 .7465 .6653 -13.92 52.491)",
        cx: 51.59,
        cy: 41.77,
        rx: 1.25,
        ry: 2.85,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4153 -.9097 .9097 .4153 2.5654 77.745)",
        cx: 61.76,
        cy: 36.88,
        rx: 2.73,
        ry: 1.19,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.99 -.141 .141 .99 -3.7392 6.9611)",
        cx: 47.25,
        cy: 29.87,
        rx: 2.07,
        ry: 0.87,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8727 -.4882 .4882 .8727 -20.831 46.122)",
        cx: 78.05,
        cy: 63.01,
        rx: 1.41,
        ry: 2.93,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9906 -.1368 .1368 .9906 -1.4764 8.7344)",
        cx: 62.83,
        cy: 15.11,
        rx: 1.42,
        ry: 2.45,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.2187 -.9758 .9758 .2187 10.411 115.7)",
        cx: 77.46,
        cy: 51.35,
        rx: 2.69,
        ry: 1.44,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7161 -.698 .698 .7161 -56.435 87.068)",
        cx: 78.81,
        cy: 112.91,
        rx: 1.18,
        ry: 2.26,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4019 -.9157 .9157 .4019 -72.852 119.94)",
        cx: 55.38,
        cy: 115.74,
        rx: 1.86,
        ry: 1.01,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9911 -.1334 .1334 .9911 -13.211 12.326)",
        cx: 85.38,
        cy: 104.75,
        rx: 1.56,
        ry: 3.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9906 -.1368 .1368 .9906 -15.529 7.8429)",
        cx: 49.32,
        cy: 116.94,
        rx: 1.64,
        ry: 2.82,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8727 -.4882 .4882 .8727 -48.292 44.306)",
        cx: 60.83,
        cy: 114.78,
        rx: 1.41,
        ry: 2.93,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.2187 -.9758 .9758 .2187 -28.18 171.06)",
        cx: 92.73,
        cy: 103.13,
        rx: 2.69,
        ry: 1.44,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7899 -.6133 .6133 .7899 -19.515 67.53)",
        cx: 88.79,
        cy: 62.24,
        rx: 1.26,
        ry: 2.81,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8727 -.4882 .4882 .8727 -24.4 51.098)",
        cx: 85.81,
        cy: 72.35,
        rx: 1.33,
        ry: 2.76,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8727 -.4882 .4882 .8727 -5.3322 39.604)",
        cx: 73.29,
        cy: 30.03,
        rx: 1.33,
        ry: 2.76,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9911 -.1334 .1334 .9911 -.5555 12.073)",
        cx: 89.82,
        cy: 10.18,
        rx: 1.56,
        ry: 3.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8727 -.4882 .4882 .8727 -12.066 53.91)",
        cx: 97.37,
        cy: 50.1,
        rx: 1.41,
        ry: 2.93,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8727 -.4882 .4882 .8727 -22.098 56.25)",
        cx: 96.84,
        cy: 70.51,
        rx: 1.41,
        ry: 2.93,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.2187 -.9758 .9758 .2187 50.444 101.97)",
        cx: 88.9,
        cy: 19.49,
        rx: 2.69,
        ry: 1.44,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.2967 -.955 .955 .2967 27.7 99.415)",
        cx: 81.35,
        cy: 30.9,
        rx: 2.01,
        ry: 1.11,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4153 -.9097 .9097 .4153 -25.576 68.303)",
        cx: 40.34,
        cy: 54.05,
        rx: 2.9,
        ry: 1.27,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8864 -.4629 .4629 .8864 3.1785 36.398)",
        cx: 75.75,
        cy: 11.72,
        rx: 1.35,
        ry: 3.55,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 43.776,
        x2: 48.151,
        y1: 75.596,
        y2: 90.346,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.7 87.61c-1.86-0.75-2.97-2.07-7.11-2.82-6.01-1.09-9.35 1.3-13.51 1.04-4.86-0.31-3.8-2.49-2.14-3.29 2.25-1.08 4.96-2.23 17.19 1.46 2.39 0.72 1.33-0.39 1.33-0.39-1.17-1.58-7.63-3.77-13.28-3.92-14.75-0.39-10.2 9.58-5.36 10.89 7.55 2.04 17.96-1.19 22.76-2.35 0.37-0.08 0.47-0.48 0.12-0.62z",
      fill: "url(#i)"
    })
  );
}

exports.default = Moyai;
