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

function Curry(props) {
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
        "m123 83.74c0 20.58-25.86 36.26-59 36.26s-59-15.68-59-36.26c0-2.9-0.96-5.16-0.96-5.16h119.96s-1 2.05-1 5.16z",
      fill: "#9D9D9D"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 35.009,
        x2: 88.772,
        y1: 50.714,
        y2: 104.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFBFB",
        offset: 0.1705
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.8701
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 79.71,
      rx: 60,
      ry: 37.26,
      fill: "url(#i)"
    }),
    _react2.default.createElement("circle", {
      cx: 76.08,
      cy: 76.78,
      r: 9,
      fill: "#F5F5F5"
    }),
    _react2.default.createElement("circle", {
      cx: 63.98,
      cy: 83.25,
      r: 9,
      fill: "#F5F5F5"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.68 74.01c-0.97 2.02 1.12 4.6 2.07 7.24 1.16 3.26-0.14 7.81-4 11-4.51 3.74-6.33 2.53-9.39 4.47-2.93 1.86-1.6 4.17-5.37 6.66-1.43 0.94-6.67 0.39-9.4 1.03-3.87 0.91-8.51 3.21-17.79 3.32-5.88 0.07-13.41-0.93-18.57-2.3-3.44-0.91-4.51-2.78-7.52-4.09-6.58-2.88-15.7-1.99-20.7-10.22-1.61-2.64 0-3.48-0.88-6.63-0.75-2.69-3.23-2.81-3.23-7.79 0-16.74 16.2-28.48 49.96-28.48 29.24 0.01 50.69 13.61 44.82 25.79z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 79.164,
        cy: 55.665,
        r: 10.855,
        gradientTransform: "matrix(1 0 0 .6527 0 19.332)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FBC41F",
        offset: 0.5587
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D09C2B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.47 64.07s-5.4 1.07-8.95-3.98c-2.08-2.96 0.98-4.7 4.12-6.25 3.13-1.55 7.91-0.63 10.78 1.15s2.56 3.97 2.56 3.97c-0.1 0.22-0.41 4.32-8.51 5.11z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m80.43 54.04c2.2 0 4.68 0.69 6.46 1.79 2.05 1.27 2.11 2.69 2.1 2.94-0.01 0.02-0.01 0.04-0.02 0.06-0.53 2.31-3.23 3.81-7.61 4.23-0.03 0-0.06 0.01-0.09 0.01 0 0-0.41 0.08-1.06 0.08-1.61 0-4.65-0.47-6.88-3.65-0.63-0.9-0.5-1.41-0.46-1.58 0.33-1.29 2.75-2.49 4.2-3.2 0.92-0.44 2.08-0.68 3.36-0.68m0-1c-1.37 0-2.68 0.24-3.79 0.79-3.13 1.55-6.19 3.29-4.12 6.25 2.49 3.55 5.89 4.08 7.7 4.08 0.77 0 1.25-0.1 1.25-0.1 8.09-0.79 8.41-4.89 8.51-5.12 0 0 0.31-2.19-2.56-3.97-1.85-1.13-4.5-1.93-6.99-1.93z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88.74 62.95c0.46 0.47-4.8 2.18-7.18 2.18s-7.39-1.73-7.39-2.39 2.38-1.4 3.5-0.8c4.31 2.32 7.58-2.59 11.07 1.01z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 92.751,
        cy: 61.605,
        r: 8.0621,
        gradientTransform: "matrix(1 0 0 .7994 0 12.357)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F37123",
        offset: 0.5352
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E05F26",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m86.56 64.16c1.22-3.53 2.2-4.17 5-5.51 2.79-1.34 6.78 0.17 9.07 2.39 0.02 0.02 0.05 0.04 0.07 0.07 1.98 1.97 1.41 5.36-1.07 6.63-0.98 0.5-7.67 1.56-12.25-0.01-1.18-0.4-1.17-2.56-0.82-3.57z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.86 49.23c22.97 0 38.47 8.01 43.14 15.44 1.9 3.03 2.16 6.03 0.78 8.91-0.89 1.86 0.08 3.85 1.03 5.79 0.36 0.73 0.73 1.49 0.99 2.23 1.11 3.11-0.41 7.18-3.69 9.9-2.54 2.1-4.14 2.53-5.68 2.94-1.11 0.29-2.25 0.6-3.61 1.45-1.63 1.03-2.18 2.26-2.66 3.33-0.5 1.12-0.97 2.18-2.72 3.34-0.56 0.37-2.75 0.44-4.35 0.48-1.69 0.05-3.43 0.1-4.73 0.41-0.97 0.23-1.99 0.54-3.07 0.87-3.39 1.04-7.62 2.34-14.5 2.42h-0.58c-5.48 0-12.61-0.91-17.73-2.27-1.82-0.48-2.88-1.23-4.1-2.1-0.94-0.66-1.91-1.35-3.27-1.94-2.07-0.91-4.4-1.46-6.65-1.99-5.08-1.2-10.32-2.45-13.59-7.83-0.72-1.18-0.65-1.83-0.54-2.81 0.09-0.88 0.21-1.98-0.23-3.57-0.34-1.2-0.97-1.99-1.53-2.68-0.86-1.06-1.67-2.07-1.67-4.84 0-8.15 4.09-14.95 11.84-19.66 8.53-5.19 21.02-7.82 37.12-7.82m0-1c-33.76 0-49.96 11.74-49.96 28.48 0 4.99 2.48 5.1 3.23 7.79 0.88 3.15-0.73 3.99 0.88 6.63 5 8.23 14.12 7.34 20.7 10.22 3.01 1.32 4.07 3.18 7.52 4.09 4.99 1.32 12.2 2.3 17.99 2.3h0.59c9.28-0.11 13.92-2.42 17.79-3.32 2.73-0.64 7.97-0.08 9.4-1.03 3.77-2.49 2.44-4.81 5.37-6.66 3.06-1.94 4.88-0.73 9.39-4.47 3.86-3.19 5.16-7.75 4-11-0.94-2.64-3.04-5.22-2.07-7.24 5.86-12.19-15.59-25.79-44.83-25.79z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 47.498,
        cy: 47.741,
        r: 37.28,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.0588 1.0891e-13 98.045 .2433)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.4829
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF0",
        offset: 0.724
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0D8DC",
        offset: 0.9654
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m78.22 73.61c-0.02-0.04-0.04-0.09-0.07-0.13-0.36-0.66-0.42-1.41-0.27-2.15 0.18-0.87 0.05-1.83-0.21-2.81-0.23-0.87-0.52-1.5-0.84-1.95-2.46-7.69-13.74-19.78-28.1-19.78-12.84 0-23.28 9.66-27.17 17.15 0 0-2.62 3.48-2.91 7.05-0.3 3.67 2.14 4.29 2.3 5.65 0.23 1.92 1.05 4.23 3.3 4.66 0.89 0.17 1.5 0.97 1.99 1.7 2.36 3.5 4.56 4.48 8.37 4.58 1.54 0.04 5.18 0.63 5.89 1.02 0.98 0.53 2.21 0.85 3.55 0.85 0.91 0 1.77-0.15 2.53-0.4 1.14-0.39 2.37-0.37 3.51 0.01 1.06 0.35 2.32 0.5 3.66 0.38 1.42-0.12 2.7-0.52 3.72-1.1 1.14-0.65 2.53-0.83 3.79-0.45 1.09 0.33 2.38 0.38 3.71 0.09 1.74-0.38 3.17-1.26 3.99-2.34 0.72-0.95 1.82-1.61 3.04-1.76 0.49-0.06 0.99-0.2 1.49-0.41 1.16-0.5 1.75-1.88 2.03-3.03 0.26-1.04 0.84-1.98 1.64-2.74 1.22-1.16 1.7-2.75 1.06-4.09z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9677 -.2523 .2523 .9677 -18.942 15.275)",
      cx: 50.1,
      cy: 81.51,
      rx: 3.12,
      ry: 1.86,
      fill: "#90A4AE",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.314 -.9494 .9494 .314 -24.204 118.71)",
      cx: 70.04,
      cy: 76.1,
      rx: 3.23,
      ry: 1.79,
      fill: "#90A4AE",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0081988 -1 1 .0081988 -48.217 110.08)",
      cx: 31.39,
      cy: 79.35,
      rx: 3.24,
      ry: 1.79,
      fill: "#90A4AE",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9973 -.074 .074 .9973 -6.1033 3.2343)",
      cx: 40.61,
      cy: 84.01,
      rx: 3.11,
      ry: 1.86,
      fill: "#90A4AE",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8379 -.5458 .5458 .8379 -31.545 44.725)",
      cx: 59.52,
      cy: 75.47,
      rx: 1.81,
      ry: 3.2,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1938 -.981 .981 .1938 -36.739 83.982)",
      cx: 32.73,
      cy: 64.35,
      rx: 2.13,
      ry: 1.3,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1938 -.981 .981 .1938 -42.33 99.426)",
      cx: 39.33,
      cy: 75.47,
      rx: 2.13,
      ry: 1.3,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1938 -.981 .981 .1938 -46.783 76.889)",
      cx: 23.39,
      cy: 66.91,
      rx: 2.13,
      ry: 1.3,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7472 -.6646 .6646 .7472 -35.779 52.626)",
      cx: 51.28,
      cy: 73.34,
      rx: 1.33,
      ry: 2.09,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9053 -.4248 .4248 .9053 -29.777 34.453)",
      cx: 62.38,
      cy: 84.01,
      rx: 2.21,
      ry: 1.26,
      fill: "#90A4AE",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9971 -.076 .076 .9971 -5.5905 1.9937)",
      cx: 23.39,
      cy: 74.43,
      rx: 1.47,
      ry: 2.76,
      fill: "#B0BEC5",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9495 -.3138 .3138 .9495 -20.998 12.887)",
      cx: 29.53,
      cy: 71.67,
      rx: 2.65,
      ry: 1.52,
      fill: "#B0BEC5",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9583 -.2859 .2859 .9583 -16.823 21.688)",
      cx: 65.86,
      cy: 68.46,
      rx: 2.65,
      ry: 1.25,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9885 -.1511 .1511 .9885 -10.489 10.788)",
      cx: 65.76,
      cy: 74.43,
      rx: 1.2,
      ry: 2.24,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9885 -.1511 .1511 .9885 -9.1927 8.7494)",
      cx: 52.99,
      cy: 64.88,
      rx: 1.2,
      ry: 2.24,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6439 -.7651 .7651 .6439 -33.486 52.2)",
      cx: 39.33,
      cy: 62.07,
      rx: 2.2,
      ry: 1.22,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8552 -.5183 .5183 .8552 -27.394 23.199)",
      cx: 27.82,
      cy: 60.63,
      rx: 1.85,
      ry: 1.26,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8552 -.5183 .5183 .8552 -28.697 32.626)",
      cx: 44.04,
      cy: 67.67,
      rx: 1.85,
      ry: 1.26,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8552 -.5183 .5183 .8552 -25.14 39.768)",
      cx: 58.6,
      cy: 64.88,
      rx: 1.85,
      ry: 1.26,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3291 -.9443 .9443 .3291 -13.061 111.37)",
      cx: 71.85,
      cy: 64.88,
      rx: 1.25,
      ry: 1.86,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9597 -.281 .281 .9597 -13.474 12.689)",
      cx: 37.51,
      cy: 53.33,
      rx: 1.87,
      ry: 1.25,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0906 -.9959 .9959 .0906 -8.9452 105.24)",
      cx: 53.15,
      cy: 57.52,
      rx: 1.25,
      ry: 1.87,
      fill: "#D0D8DC",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 100.23,
        cy: 70.48,
        r: 7.6411,
        gradientTransform: "matrix(.9314 -.364 .1825 .4668 -5.9823 74.066)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FBC41F",
        offset: 0.4892
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D09C2B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.97 73.38c-0.64-1.93 2.87-3.77 5.23-4.83s4.87-0.07 6.8 1.69c0.02 0.02 0.04 0.04 0.06 0.05 1.37 1.29 0.78 3.6-1.01 4.2-3.07 1.01-9.83 2.61-11.08-1.11z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m93.93 59.15c1.98 0 4.39 1.05 6 2.61l0.06 0.06c0.7 0.7 1.02 1.68 0.86 2.69-0.16 1.03-0.77 1.88-1.68 2.34-0.44 0.21-2.98 0.71-5.92 0.71-2.16 0-4.07-0.27-5.54-0.77-0.08-0.03-0.24-0.26-0.31-0.75-0.08-0.59 0.01-1.21 0.12-1.55 1.11-3.21 1.84-3.67 4.48-4.93 0.55-0.27 1.2-0.41 1.93-0.41m0-1c-0.84 0-1.65 0.16-2.37 0.5-2.79 1.34-3.78 1.98-5 5.51-0.35 1.01-0.36 3.16 0.81 3.57 1.79 0.62 3.9 0.83 5.87 0.83 3.06 0 5.78-0.51 6.38-0.82 2.49-1.26 3.05-4.66 1.07-6.63-0.02-0.02-0.05-0.04-0.07-0.07-1.69-1.64-4.31-2.89-6.69-2.89z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 61.558,
        cy: 99.358,
        r: 5.9152,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F37123",
        offset: 0.5352
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E05F26",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.68 100.99c0.72-2.15-3.21-4.21-5.84-5.39s-5.43-0.08-7.59 1.88l-0.06 0.06c-1.53 1.44-0.87 4.02 1.12 4.68 3.44 1.14 10.98 2.93 12.37-1.23z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.23 69.11c1.32 0 2.78 0.66 4.1 1.86l0.04 0.04c0.37 0.35 0.52 0.85 0.41 1.36-0.12 0.55-0.51 0.98-1.04 1.16-1.07 0.36-3.83 1.18-6.25 1.18-3.01 0-3.43-1.24-3.56-1.65-0.04-0.13-0.29-1.37 4.69-3.6 0.51-0.23 1.05-0.35 1.61-0.35m0-1c-0.68 0-1.36 0.14-2.03 0.44-2.36 1.06-5.87 2.9-5.23 4.83 0.59 1.77 2.42 2.34 4.51 2.34 2.32 0 4.95-0.7 6.57-1.23 1.79-0.59 2.38-2.9 1.01-4.2-0.02-0.02-0.04-0.04-0.06-0.05-1.38-1.27-3.06-2.13-4.77-2.13z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.31 67.15c0.59 0.39-4.94 2.61-7.57 2.39-7.5-0.63-8.41-3.1-7.71-2.93 1.52 0.37 1.66-0.65 3.39-0.26 6.18 1.4 7.22-2.23 11.89 0.8z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement("path", {
      d:
        "m109.61 74.7c0.64 0.39-5.29 2.61-8.1 2.39-8.03-0.63-9.01-3.1-8.25-2.93 1.63 0.37 1.78-0.65 3.63-0.26 6.61 1.41 7.73-2.22 12.72 0.8z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 45.45c15.47 0 29.98 3.71 40.84 10.46 10.42 6.47 16.16 14.92 16.16 23.8s-5.74 17.33-16.16 23.79c-10.86 6.75-25.37 10.46-40.84 10.46s-29.98-3.71-40.84-10.46c-10.42-6.47-16.16-14.92-16.16-23.79s5.74-17.33 16.16-23.79c10.86-6.75 25.37-10.47 40.84-10.47m0-3c-33.14 0-60 16.68-60 37.26s26.86 37.26 60 37.26 60-16.68 60-37.26-26.86-37.26-60-37.26z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48.73 47.79c13.54 0 24.65 11.29 27.15 19.09 0.03 0.1 0.08 0.19 0.14 0.28 0.27 0.39 0.51 0.93 0.69 1.63 0.26 0.97 0.32 1.74 0.19 2.35-0.21 1.02-0.08 2 0.37 2.83 0.01 0.03 0.03 0.06 0.04 0.08 0.43 0.89 0.1 2.04-0.84 2.92-0.96 0.91-1.63 2.02-1.92 3.22-0.18 0.72-0.6 1.98-1.46 2.35-0.39 0.17-0.8 0.28-1.21 0.34-1.46 0.18-2.81 0.97-3.71 2.15-0.72 0.94-1.96 1.66-3.41 1.97-0.5 0.11-1.01 0.16-1.51 0.16-0.61 0-1.18-0.08-1.71-0.24s-1.08-0.24-1.65-0.24c-1.03 0-2.04 0.27-2.93 0.78-0.93 0.53-2.07 0.87-3.3 0.97-0.26 0.02-0.53 0.03-0.79 0.03-0.87 0-1.73-0.13-2.47-0.37-0.69-0.22-1.39-0.34-2.1-0.34-0.7 0-1.39 0.11-2.05 0.34-0.69 0.23-1.43 0.35-2.21 0.35-1.12 0-2.21-0.26-3.08-0.73-1-0.54-4.92-1.1-6.34-1.14-3.67-0.1-5.51-1.1-7.56-4.14-0.65-0.96-1.42-1.89-2.63-2.12-1.82-0.35-2.35-2.53-2.49-3.79-0.09-0.79-0.57-1.34-1.04-1.87-0.7-0.8-1.42-1.63-1.26-3.58 0.24-2.98 2.34-6 2.67-6.47 0.05-0.06 0.1-0.13 0.14-0.2 3.47-6.68 13.33-16.61 26.28-16.61m0-1c-12.84 0-23.28 9.66-27.17 17.15 0 0-2.62 3.48-2.91 7.05-0.3 3.67 2.14 4.29 2.3 5.65 0.23 1.92 1.05 4.23 3.3 4.66 0.89 0.17 1.5 0.97 1.99 1.7 2.36 3.5 4.56 4.48 8.37 4.58 1.54 0.04 5.18 0.63 5.89 1.02 0.98 0.53 2.21 0.85 3.55 0.85 0.91 0 1.77-0.15 2.53-0.4 0.56-0.19 1.15-0.28 1.73-0.28 0.6 0 1.2 0.1 1.79 0.29 0.83 0.27 1.77 0.42 2.78 0.42 0.29 0 0.58-0.01 0.88-0.04 1.42-0.12 2.7-0.52 3.72-1.1 0.74-0.42 1.59-0.64 2.44-0.64 0.46 0 0.92 0.06 1.36 0.2 0.61 0.18 1.28 0.28 1.99 0.28 0.56 0 1.13-0.06 1.72-0.19 1.74-0.38 3.17-1.26 3.99-2.34 0.72-0.95 1.82-1.61 3.04-1.76 0.49-0.06 0.99-0.2 1.49-0.41 1.16-0.5 1.75-1.88 2.03-3.03 0.26-1.04 0.84-1.98 1.64-2.74 1.22-1.15 1.7-2.74 1.06-4.08-0.02-0.04-0.04-0.09-0.07-0.13-0.36-0.66-0.42-1.41-0.27-2.15 0.18-0.87 0.05-1.83-0.21-2.81-0.23-0.87-0.52-1.5-0.84-1.95-2.49-7.71-13.76-19.8-28.12-19.8z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m79.82 75.71c0.4-4.51-3.47-11.37-3.47-11.37s2.82 7.65-0.28 8.27c-2.79 0.55-1.6 4.78-4 6.74-3.41 2.79-7.42-1.78-10.52 2.79-3.49 5.12-10.9 5.15-12.93 3.75-1.98-1.37-6.02-1.91-10.64-0.55-7.1 2.09-12.76-4.26-13.25-3.8-2.86 2.69 12.77 14.87 47.34 4.85 6.29-1.82 7.35-6.17 7.75-10.68z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m60.58 96.12c0.64 0 1.26 0.13 1.85 0.4 5.53 2.48 5.38 3.9 5.3 4.16-0.43 1.28-1.8 1.92-4.09 1.92-2.72 0-5.81-0.93-7.02-1.33-0.63-0.21-1.09-0.72-1.24-1.38-0.14-0.61 0.04-1.21 0.49-1.63l0.05-0.05c1.5-1.35 3.15-2.09 4.66-2.09m0-1c-1.91 0-3.78 0.96-5.33 2.37l-0.06 0.06c-1.53 1.44-0.87 4.02 1.12 4.68 1.8 0.6 4.74 1.38 7.33 1.38 2.33 0 4.38-0.63 5.03-2.61 0.72-2.15-3.21-4.21-5.84-5.39-0.73-0.34-1.49-0.49-2.25-0.49z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.6 98.6c0.77 0.32-1.25 6.27-10.53 6.26-9.33-0.01-10.44-3.1-9.56-2.93 1.89 0.37 3.9-0.83 6.01-0.29 9.52 2.42 10.26-4.65 14.08-3.04z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 93.145,
        cy: 73.228,
        r: 8.9603,
        gradientTransform: "matrix(.7975 .6033 -.419 .554 42.851 -21.6)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#6C463F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5A352E",
        offset: 0.784
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m82.86 78.35c0.76-2.25 3.28-5.07 6.22-4.4s5.48 1.54 7.01 4.64c0 0 3.66 5-3.05 5.55-3.77 0.32-11.65-1.44-10.18-5.79z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.19 74.85c0.22 0 0.45 0.03 0.67 0.08 2.66 0.61 4.97 1.34 6.34 4.11 0.03 0.05 0.06 0.1 0.09 0.15 0.25 0.34 1.11 1.81 0.69 2.72-0.3 0.67-1.38 1.11-3.02 1.25-0.25 0.02-0.53 0.03-0.82 0.03-2.95 0-6.88-1.04-8.08-2.72-0.39-0.55-0.47-1.12-0.24-1.79 0.61-1.85 2.46-3.83 4.37-3.83m0-1c-2.55 0-4.65 2.48-5.33 4.5-1.36 4.02 5.29 5.83 9.27 5.83 0.32 0 0.62-0.01 0.91-0.03 6.71-0.55 3.05-5.55 3.05-5.55-1.53-3.1-4.07-3.96-7.01-4.64-0.3-0.07-0.6-0.11-0.89-0.11z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.75 81.86c0.73 0.4-2.34 5.63-9.87 4.25-5.88-1.08-8.96-3.61-8.34-4.25 0.99-1.02 2.23-0.64 4.31 0 11.32 3.49 10.26-1.98 13.9 0z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 40.975,
        cy: 88.555,
        r: 8.821,
        gradientTransform: "matrix(1 0 0 .6946 0 27.044)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#6C463F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5A352E",
        offset: 0.784
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m35.51 92c-0.75-2.25 1.36-4.41 4.11-5.64s7.68-0.09 9.94 1.97c0.02 0.02 0.04 0.04 0.07 0.06 1.6 1.51 0.91 4.21-1.18 4.9-3.59 1.19-11.49 3.07-12.94-1.29z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m42.37 86.85c2.36 0 5.09 0.93 6.51 2.22l0.05 0.05c0.48 0.45 0.67 1.09 0.52 1.75-0.16 0.7-0.65 1.25-1.33 1.48-1.26 0.42-4.5 1.39-7.36 1.39-2.41 0-3.87-0.69-4.32-2.04-0.56-1.69 1.39-3.43 3.57-4.41 0.63-0.29 1.44-0.44 2.36-0.44m0-1c-1.02 0-1.98 0.16-2.76 0.51-2.75 1.23-4.86 3.39-4.11 5.64 0.69 2.07 2.83 2.73 5.27 2.73 2.71 0 5.78-0.82 7.67-1.44 2.09-0.69 2.78-3.39 1.18-4.9-0.02-0.02-0.04-0.04-0.07-0.06-1.61-1.47-4.6-2.48-7.18-2.48z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m52.57 89.7c0.73 0.4-1.98 6.97-11.22 6.03-9.28-0.94-9.97-5-9.11-4.74 1.84 0.56 3.96-0.44 6.01 0.31 9.24 3.38 10.69-3.58 14.32-1.6z",
      fill: "#9A5A25"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 83.052,
        cy: 88.274,
        r: 11.326,
        gradientTransform: "matrix(.9908 -.1356 .0817 .5971 -7.283 46.87)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FBC41F",
        offset: 0.2866
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D09C2B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.78 91.58c-0.69-2.82 4.54-5.03 8.02-6.26s6.94 0.47 9.48 3.2c0.03 0.03 0.05 0.05 0.07 0.08 1.8 2 0.69 5.22-1.93 5.86-4.49 1.08-14.31 2.57-15.64-2.88z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.14 85.91c2.15 0 4.43 1.17 6.4 3.29l0.06 0.07c0.59 0.66 0.78 1.53 0.51 2.4-0.28 0.91-1 1.59-1.93 1.82-1.57 0.38-4.65 1.02-7.68 1.02-3.97 0-6.24-1.06-6.76-3.16-0.17-0.69 0.22-2.55 7.38-5.08 0.66-0.24 1.34-0.36 2.02-0.36m0-1c-0.78 0-1.56 0.13-2.35 0.41-3.48 1.23-8.7 3.44-8.02 6.26 0.74 3.04 4.11 3.92 7.73 3.92 2.88 0 5.92-0.56 7.92-1.04 2.62-0.63 3.73-3.85 1.93-5.86-0.02-0.03-0.05-0.05-0.07-0.08-1.97-2.12-4.49-3.61-7.14-3.61z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.91 92.2c0.58 0.6-0.4 6.14-11.63 5.25-9.3-0.73-10.24-3.72-9.37-3.49 1.87 0.48 3.44-1.54 5.51-0.88 9.37 3 12.81-3.62 15.49-0.88z",
      fill: "#9A5A25"
    })
  );
}

exports.default = Curry;
