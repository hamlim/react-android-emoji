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

function KiwiFruit(props) {
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
        id: "c",
        x1: 17.036,
        x2: 98.519,
        y1: 53.476,
        y2: 53.476,
        gradientTransform: "matrix(.7071 .7071 -.7071 .7071 63.344 -10.421)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#AFB42B",
        offset: 0.0085237
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8F8136",
        offset: 0.448
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6D4C41",
        offset: 0.8725
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.74 11.6-82.27 82.2c16.35 23.78 72.21 44.18 98.65 16.57 34.2-35.72 5.26-84.52-16.38-98.77z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 52.227,
        cy: 53.703,
        r: 55.246,
        gradientTransform: "matrix(.6958 -.7183 .4662 .4516 -9.1448 66.966)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#394A0C",
        offset: 0.1713
      }),
      _react2.default.createElement("stop", {
        stopColor: "#43590E",
        offset: 0.2402
      }),
      _react2.default.createElement("stop", {
        stopColor: "#648C15",
        offset: 0.4916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB11B",
        offset: 0.7111
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8BC81E",
        offset: 0.8879
      }),
      _react2.default.createElement("stop", {
        stopColor: "#90D01F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.75 101.96c-8.55 0-15.67-2.6-20.6-7.53-7.01-7.01-9.13-18.26-5.97-31.68 3.09-13.14 11.09-26.9 21.95-37.76 12.42-12.42 28.04-19.54 42.87-19.54 9.08 0 17.02 2.78 22.35 7.81 5.48 5.18 8.37 12.71 8.35 21.76-0.03 15.48-8.33 32.5-22.21 45.53-14.28 13.4-31.75 21.41-46.74 21.41z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m70 5v1.2c9 0 16.64 2.7 21.83 7.61 5.33 5.04 8.13 12.37 8.12 21.21-0.03 15.28-8.24 32.09-21.97 44.98-14.14 13.27-31.42 21.2-46.22 21.2-8.35 0-15.28-2.53-20.07-7.31-3.44-3.44-5.67-7.94-6.63-13.37-0.94-5.28-0.65-11.2 0.86-17.6 3.06-13.01 10.99-26.64 21.75-37.4 12.27-12.28 27.7-19.32 42.33-19.32v-1.5m0 0c-13.7 0-29.82 6.18-43.39 19.76-22.72 22.71-31.04 55.44-15.98 70.5 5.2 5.2 12.62 7.75 21.13 7.75 14.48 0 32.1-7.38 47.25-21.61 23.42-21.98 29.33-53.75 13.86-68.38-5.53-5.22-13.66-8.02-22.87-8.02z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m69.73 7.87c7.84 0 14.83 2.22 19.68 6.26l2.11 1.75 0.22-0.22c12.34 9.21 25.95 29.13 28.32 50.11 1.83 16.23-3.05 30.54-14.51 42.54-7.7 8.06-18.89 12.32-32.38 12.32-24.52 0-49.35-13.4-59.79-26.5l0.19-0.19-1.83-2.11c-12.1-13.98-4.37-43.8 16.89-65.11 11.95-11.98 26.93-18.85 41.1-18.85m0-3c-13.65 0-29.7 6.17-43.23 19.73-22.03 22.09-30.46 53.68-17.01 69.19l-0.05 0.05c10.72 15.63 38.49 29.8 63.74 29.8 13.11 0 25.54-3.82 34.54-13.25 34.08-35.67 5.25-84.4-16.32-98.62l-0.07 0.07c-5.45-4.55-13.05-6.97-21.6-6.97z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 51.426,
        cy: 54.909,
        r: 39.071,
        gradientTransform: "matrix(1.0445 0 0 1.0307 -.89 -2.8536)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2F8DB",
        stopOpacity: 0.7153,
        offset: 0.2884
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8F3C1",
        stopOpacity: 0.4546,
        offset: 0.5526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4F1B7",
        stopOpacity: 0.3,
        offset: 0.7092
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2F0B6",
        stopOpacity: 0,
        offset: 0.8566
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "92.86 39.22 92.68 36.37 69.93 45.46 92.1 32.78 91.4 30.18 69.23 42.86 90.14 26.97 88.94 24.71 68.03 40.6 87.05 21.98 85.39 20.12 66.37 38.74 82.92 17.95 80.85 16.55 64.3 37.33 77.87 15.02 75.45 14.11 61.88 36.42 72.07 13.25 69.37 12.87 59.18 36.04 65.68 12.72 62.79 12.88 56.29 36.2 58.9 13.43 55.9 14.12 53.3 36.89 51.93 15.37 48.92 16.57 50.29 38.09 44.99 18.48 42.06 20.16 47.36 39.76 38.29 22.65 35.52 24.76 44.59 41.86 32.03 27.78 29.52 30.24 42.08 44.33 26.4 33.69 24.22 36.43 39.89 47.07 21.58 40.2 19.78 43.16 38.09 50.03 17.7 47.13 16.36 50.2 36.74 53.09 14.9 54.27 14.04 57.35 35.89 56.17 13.24 61.38 12.9 64.39 35.54 59.18 12.79 68.26 12.97 71.11 35.72 62.03 13.55 74.71 14.25 77.3 36.42 64.62 15.51 80.51 16.71 82.77 37.62 66.88 18.6 85.5 20.26 87.37 39.28 68.74 22.73 89.53 24.8 90.94 41.35 70.15 27.78 92.47 30.2 93.38 43.77 71.06 33.58 94.23 36.28 94.61 46.47 71.44 39.97 94.76 42.86 94.61 49.36 71.29 46.76 94.05 49.75 93.36 52.35 70.6 53.72 92.11 56.73 90.91 55.36 69.4 60.66 89 63.59 87.33 58.29 67.72 67.36 84.83 70.13 82.73 61.06 65.62 73.62 79.71 76.13 77.25 63.57 63.16 79.25 73.8 81.43 71.05 65.76 60.41 84.07 67.28 85.87 64.33 67.56 57.46 87.95 60.35 89.29 57.28 68.91 54.39 90.75 53.22 91.61 50.13 69.77 51.31 92.41 46.1 92.75 43.09 70.11 48.3",
      fill: "url(#a)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8792 -.4765 .4765 .8792 -30.561 36.338)",
      cx: 56.38,
      cy: 78.43,
      rx: 1.51,
      ry: 3.36
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8792 -.4765 .4765 .8792 -25.246 38.348)",
      cx: 63,
      cy: 68.96,
      rx: 1.45,
      ry: 3.24
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6288 -.7775 .7775 .6288 -24.088 75.457)",
      cx: 66.99,
      cy: 62.96,
      rx: 1.37,
      ry: 3.07
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.501 -.8654 .8654 .501 -14.707 89.873)",
      cx: 70.58,
      cy: 57.69,
      rx: 1.49,
      ry: 3.34
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.998 -.0632 .0632 .998 -3.1289 4.8475)",
      cx: 75.09,
      cy: 51.9,
      rx: 2.6,
      ry: 1.17
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.998 -.0632 .0632 .998 -2.8377 5.1888)",
      cx: 80.63,
      cy: 47.47,
      rx: 2.6,
      ry: 1.17
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9951 -.0989 .0989 .9951 -3.5971 8.359)",
      cx: 82.48,
      cy: 40.45,
      rx: 2.6,
      ry: 1.17
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8741 -.4858 .4858 .8741 -5.3063 43.698)",
      cx: 81.64,
      cy: 32.08,
      rx: 3.09,
      ry: 1.38
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.5405 -.8414 .8414 .5405 -51.417 62.497)",
      cx: 31.51,
      cy: 78.32,
      rx: 3.26,
      ry: 1.46
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0829 -.9966 .9966 .0829 -47.522 111.77)",
      cx: 36.97,
      cy: 81.71,
      rx: 3.25,
      ry: 1.46
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.992 -.1265 .1265 .992 -9.9816 6.4409)",
      cx: 45.73,
      cy: 81.82,
      rx: 1.53,
      ry: 3.42
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.5499 -.8353 .8353 .5499 -23.963 50.882)",
      cx: 35.23,
      cy: 47.67,
      rx: 1.42,
      ry: 3.18
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8792 -.4765 .4765 .8792 -13.868 25.383)",
      cx: 43.12,
      cy: 40.04,
      rx: 1.41,
      ry: 3.14
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9836 -.1805 .1805 .9836 -5.4403 9.5597)",
      cx: 49.81,
      cy: 34.67,
      rx: 1.17,
      ry: 2.6
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9954 -.0954 .0954 .9954 -2.2892 5.4827)",
      cx: 56.17,
      cy: 26.67,
      rx: 1.47,
      ry: 3.29
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1455 -.9894 .9894 .1455 30.858 81.386)",
      cx: 62.54,
      cy: 22.83,
      rx: 3.14,
      ry: 1.41
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.4804 -.877 .877 .4804 15.532 74.095)",
      cx: 70.3,
      cy: 23.94,
      rx: 3.14,
      ry: 1.41
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6694 -.7429 .7429 .6694 8.2259 67.049)",
      cx: 79.44,
      cy: 24.28,
      rx: 2.6,
      ry: 1.17
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.882 -.4713 .4713 .882 -32.609 20.107)",
      cx: 23.84,
      cy: 75.16,
      rx: 2.6,
      ry: 1.17
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.98 -.1991 .1991 .98 -11.656 5.4156)",
      cx: 21.1,
      cy: 60.67,
      rx: 3.31,
      ry: 1.48
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.2308 -.973 .973 .2308 -28.081 68.462)",
      cx: 29.26,
      cy: 51.99,
      rx: 1.39,
      ry: 3.11
    }),
    _react2.default.createElement("path", {
      d:
        "m66.48 33.18c1.53 0.47 2.89 1.74 3.09 3.33 0.3 2.4-1.98 4.53-1.78 6.94 0.12 1.52 1.22 2.81 1.38 4.32 0.22 1.99-1.22 3.8-2.85 4.97s-3.53 1.97-4.99 3.34c-2.34 2.22-3.16 5.55-4.25 8.59s-2.92 6.24-6.04 7.08c-3.52 0.95-6.99-1.5-10.6-2-2.19-0.3-4.41 0.12-6.62 0.07s-4.62-0.74-5.8-2.61c-1.13-1.79-0.79-4.2 0.29-6.02s2.77-3.18 4.43-4.49c5.88-4.67 13.47-9.02 18.22-14.84 3.56-4.35 9.02-10.66 15.52-8.68z",
      fill: "#DCE775"
    })
  );
}

exports.default = KiwiFruit;
