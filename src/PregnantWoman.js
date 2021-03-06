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

function PregnantWoman(props) {
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
        id: "h"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#i"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#h)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "g",
          x1: 26.806,
          x2: 26.806,
          y1: -62.914,
          y2: -23.722,
          gradientTransform: "matrix(.9559 -.2938 .2938 .9559 58.98 88.373)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 0.55
        }),
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0.83
        }),
        _react2.default.createElement("stop", {
          stopColor: "#3C2B24",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m86.13 14.58c-5.22-5.84-14.83-6.61-22.31-4.27-8.37 2.62-12.11 9.45-12.23 17.44-0.04 2.9 0.44 5.72 1.21 7.65 0.09 0.23 0.81 1.91 0.92 2.46 0.62 2.07-3.17 4.74-3.32 7.13-0.12 1.8 3.7 2.4 4.03 2.68 1.66 1.37 0.45 9.25 10.58 8.51 3.54-0.26 6.82-1.04 8.14 1.36l1.03 6.72 12.61-0.4s-5.39-14.36 2-24.59c5.01-6.95 1.69-19.82-2.66-24.69z",
        fill: "url(#g)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 50.254,
          x2: 92.961,
          y1: 44.78,
          y2: 31.653,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#4A2F27",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#291B16",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m71.92 10.07c5.7 0 10.48 1.84 13.46 5.17 4.26 4.77 7.11 17.16 2.59 23.43-3.16 4.38-4.53 10.19-3.95 16.81 0.28 3.24 0.96 5.91 1.4 7.41l-10.39 0.33-0.89-5.84c-0.02-0.12-0.06-0.23-0.11-0.33-1.09-1.98-3.17-2.21-4.64-2.21-0.9 0-1.85 0.09-2.85 0.19-0.52 0.05-1.06 0.1-1.6 0.14-0.42 0.03-0.83 0.05-1.21 0.05-5.65 0-6.62-3.19-7.39-5.76-0.33-1.09-0.61-2.03-1.27-2.57-0.23-0.19-0.51-0.28-1.06-0.44-2.31-0.7-2.63-1.18-2.61-1.4 0.05-0.82 0.82-1.88 1.57-2.9 1.07-1.46 2.17-2.98 1.73-4.54-0.11-0.49-0.49-1.43-0.87-2.36l-0.09-0.21c-0.75-1.9-1.17-4.62-1.14-7.27 0.12-8.35 4.21-14.21 11.52-16.5 2.48-0.79 5.18-1.2 7.8-1.2m0-1c-2.78 0-5.56 0.44-8.1 1.23-8.37 2.62-12.11 9.45-12.23 17.44-0.04 2.9 0.44 5.72 1.21 7.65 0.09 0.23 0.81 1.91 0.92 2.46 0.62 2.07-3.17 4.74-3.32 7.13-0.12 1.8 3.7 2.4 4.03 2.68 1.58 1.31 0.55 8.56 9.3 8.56 0.41 0 0.83-0.02 1.28-0.05 1.56-0.11 3.07-0.33 4.38-0.33 1.67 0 3.02 0.35 3.76 1.69l1.03 6.72 12.61-0.4s-5.39-14.36 2-24.59c5.02-6.95 1.7-19.82-2.65-24.69-3.46-3.85-8.82-5.5-14.22-5.5z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m59.36 46.34-3.78 1.16s0.65 1.72 0.97 2.4c1.76 3.75 5.01 7.52 11.86 6.11 0.62-0.13-4.58-8.33-4.58-8.33l-4.47-1.34z",
        fill: "none"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "e",
          d:
            "m86.13 14.58c-5.22-5.84-14.83-6.61-22.31-4.27-10.35 3.23-14.03 12.09-12.12 22.45 0 0 1.27 4.24 1.65 6.07 1.06 3.55-2.06 3.21-2.43 6-0.35 2.63 3.19 2.56 3.52 2.84 1.66 1.37 0.45 9.25 10.58 8.51 3.54-0.26 6.82-1.04 8.14 1.36l2.63 6.72 11.01-0.4s-5.39-14.36 2-24.59c5-6.95 1.68-19.82-2.67-24.69z"
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
            "m48.8 48.9c2.69 2.83 8.02 4.12 11.04 1.14 1.15-1.13 0.12-2.08-1.26-1.24-2.24 1.35-6.57 0.42-8.26-1.36-1.11-1.17-2.63 0.29-1.52 1.46z",
          fill: "#1A1717"
        })
      ),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9956 -.0941 .0941 .9956 -3.494 5.7263)",
        cx: 59,
        cy: 39.93,
        rx: 1.86,
        ry: 2.85,
        fill: "#1A1717"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.3 35.81c-1.81 0.54-2.24-0.64-1.65-1.61 0.44-0.71 1.53-1.31 3.65-0.92 2 0.37 2.83 1.51 3.37 2.21 0.54 0.69 0.48 1.39 0.03 1.45-0.63 0.09-3.17-1.8-5.4-1.13z",
        fill: "#1A1717"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 44.633,
          cy: -46.906,
          r: 26.644,
          gradientTransform: "matrix(.9457 -.3251 .3251 .9457 39.329 78.364)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#444140",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#232020",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m77.27 60.28 10.52-0.85c4.27-0.35 7.69-3.68 8.14-7.94l0.56-5.24s1.5-8.34-0.59-24.08c-1.54-11.65-9.77-19.59-24.8-17.65-12.09 1.57-20.79 8.02-20.81 20.08 0 0.33 3.46 5.73 20.12 9.07 9.26 1.85 6.86 26.61 6.86 26.61z",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "b",
          d:
            "m77.27 60.28 10.52-0.85c4.27-0.35 7.69-3.68 8.14-7.94l0.56-5.24s1.5-8.34-0.59-24.08c-1.54-11.65-9.77-19.59-24.8-17.65-12.18 1.58-20.78 8.12-20.78 20.2 0 0.29 2.83 2.08 2.83 2.08l9.86-3.55 19.52 6.63-1.15 27.06-4.05 0.27-0.06 3.07z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "a"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#b"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement("path", {
          d:
            "m75.47 4.23v3c13.42 0 16.7 9.6 17.46 15.33 1.98 14.98 0.62 23.09 0.61 23.16l-0.03 0.21-0.56 5.24c-0.3 2.82-2.57 5.04-5.4 5.27l-7.15 0.58c0.06-2.59 0.06-6.35-0.23-10.24-0.78-10.63-3.17-16.27-7.53-17.75-3.51-1.19-7.22-1.8-11.03-1.8-3.34 0-6.17 0.47-8.16 0.93-1.19-4.57-0.81-8.51 1.15-11.76 2.8-4.63 8.95-7.88 16.88-8.91 1.38-0.18 2.72-0.27 3.98-0.27v-2.99m0.02 0c-1.39 0-2.84 0.1-4.37 0.29-14.34 1.86-25.78 10.8-19.62 27.34 0 0 4.16-1.62 10.13-1.62 3 0 6.45 0.41 10.07 1.64 7.2 2.44 5.59 28.4 5.59 28.4l10.52-0.85c4.27-0.35 7.69-3.68 8.14-7.94l0.56-5.24s1.5-8.34-0.59-24.08c-1.39-10.47-8.17-17.94-20.43-17.94z",
          fill: "#1F1D1B"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 53.626,
          x2: 74.244,
          y1: 77.533,
          y2: 112.58,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#a0f",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#9500E0",
          offset: 0.9874
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m42.45 131.83c-1.37-1.57-6.34-8.47-4.97-24.96 1.3-15.62 14.81-23.66 21.78-25.72 0.5-0.15 0.89-0.55 1.03-1.06 0.13-0.51-0.01-1.05-0.37-1.42-0.45-0.46-1.12-2.41-0.64-4.81 0.48-2.43 2.21-5.83 7.75-8.24 3.98-1.73 9.67-6.51 11.08-7.72 0.4-0.06 0.82-0.1 1.25-0.1 0.52 0 1.06 0.05 1.62 0.14 5.73 0.96 9.77 6.41 9.19 12.41-0.32 3.29-1.32 7.9-2.2 11.97-0.73 3.36-1.36 6.26-1.53 8.03-0.6 6.2-0.02 13.31 0.4 18.5 0.18 2.23 0.34 4.15 0.34 5.32 0 8.94-1.31 15.27-1.9 17.67h-42.83z",
        fill: "url(#o)"
      }),
      _react2.default.createElement("path", {
        d:
          "m79.34 59.31c0.43 0 0.9 0.04 1.37 0.12 4.96 0.83 8.45 5.57 7.94 10.78-0.31 3.2-1.3 7.77-2.17 11.79-0.74 3.41-1.37 6.35-1.55 8.2-0.62 6.33-0.03 13.52 0.4 18.76 0.18 2.19 0.33 4.09 0.33 5.19 0 7.59-0.97 13.28-1.6 16.17h-40.92c-1.55-2.04-5.39-8.67-4.17-23.33 1.23-14.82 14.09-22.44 20.71-24.41 1.01-0.3 1.78-1.1 2.05-2.11 0.26-0.99 0-2.04-0.69-2.79-0.26-0.41-0.74-2.04-0.16-4.11 0.77-2.72 3.1-4.99 6.73-6.58 3.89-1.7 9.24-6.08 11.11-7.66 0.21-0.01 0.41-0.02 0.62-0.02m0-3c-0.65 0-1.29 0.06-1.93 0.2 0 0-6.69 5.86-11 7.74-10.82 4.72-9.34 13.65-7.58 15.47-9 2.67-21.58 11.78-22.85 27.03-1.68 20.18 5.83 26.58 5.83 26.58h44.6s2.25-7.33 2.25-19.17c0-3.94-1.61-14.86-0.75-23.67 0.37-3.81 3.14-13.95 3.72-20 0.65-6.66-3.83-12.92-10.43-14.03-0.61-0.09-1.24-0.15-1.86-0.15z",
        fill: "#9900E6"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 64.547,
          x2: 69.132,
          y1: 112.06,
          y2: 131.21,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#650099",
          stopOpacity: 0.5,
          offset: 0.1522
        }),
        _react2.default.createElement("stop", {
          stopColor: "#7600B3",
          stopOpacity: 0,
          offset: 0.7368
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m40.79 131.75 16.82-3.56c14.59-3.09 25.45-15.34 26.76-30.2l1.42-16.12-10.03-2.55-4.48 23.42-34.63 9.22 4.14 19.79z",
        fill: "url(#n)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "m",
          x1: 97.971,
          x2: 97.971,
          y1: 111.66,
          y2: 164.77,
          gradientTransform: "matrix(.9306 .3845 -.392 1.1694 33.26 -94.191)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 0.9991
        })
      ),
      _react2.default.createElement("polygon", {
        points: "67.82 99.53 79.84 101.87 85.72 71.75 73.7 69.4",
        fill: "url(#m)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 128.24,
          x2: 128.24,
          y1: 161.07,
          y2: 214.18,
          gradientTransform: "matrix(.7359 .6771 -.6771 .7359 103.32 -120.14)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 0.9991
        })
      ),
      _react2.default.createElement("circle", {
        cx: 73.63,
        cy: 101.51,
        r: 6.2,
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 198.31,
          x2: 198.31,
          y1: 62.855,
          y2: 113.97,
          gradientTransform: "matrix(.8194 .7615 -1.3531 .6997 23.522 -110.92)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 0.9991
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m37.57 109.98c0.77 4.09 6.76 3.8 11.59 2.76l26.19-5.23-4.46-11-24.48 6.53c-4.82 1.05-9.55 3.16-8.84 6.94z",
        fill: "url(#k)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: 32.438,
          x2: 48.938,
          y1: 126.53,
          y2: 126.53,
          gradientTransform: "matrix(.9951 .099 -.099 .9951 11.12 -20.859)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 0.9991
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m46.98 113.09-8.82 2.81c-1.91 0.37-3.82-0.67-4.56-2.48l-2.61-6.28 2.25-4.26c1.14-1.24 2.95-1.53 4.45-0.76 1.74 0.89 4.12 2.15 6.2 1.62 3.78-0.96 3.09 9.35 3.09 9.35z",
        fill: "url(#j)"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.28 71.75 8.09 1.58-5.44 27.88c-0.06 0.17-0.1 0.35-0.11 0.54-0.1 1.78-1.32 3.3-3.04 3.79-0.09 0.03-0.19 0.06-0.27 0.1l-25.77 5.14c-0.76 0.16-1.53 0.3-2.3 0.41-0.11 0.02-0.22 0.04-0.33 0.08l-8.43 2.68c-0.1 0.01-0.2 0.02-0.29 0.02-0.85 0-1.61-0.51-1.94-1.32l-2.25-5.41 1.67-3.16c0.3-0.25 0.68-0.39 1.09-0.39 0.28 0 0.57 0.07 0.82 0.2l0.08 0.04c1.58 0.81 3.74 1.92 5.99 1.92 0.43 0 0.86-0.04 1.27-0.12 0.07-0.01 0.14-0.03 0.21-0.05 0.78-0.25 1.63-0.47 2.53-0.67 0.03-0.01 0.06-0.01 0.1-0.02l21.85-5.83c0.74-0.2 1.3-0.8 1.45-1.55l5.02-25.86m-1.58-2.35-5.43 27.81-21.85 5.83c-0.92 0.2-1.84 0.44-2.72 0.72-0.28 0.06-0.57 0.08-0.87 0.08-1.8 0-3.7-0.99-5.15-1.73-0.55-0.28-1.15-0.42-1.74-0.42-1.01 0-1.99 0.4-2.71 1.19l-2.25 4.26 2.61 6.28c0.64 1.56 2.15 2.55 3.79 2.55 0.25 0 0.51-0.02 0.77-0.07l8.56-2.73c0.83-0.11 1.65-0.26 2.44-0.43l26.19-5.23-0.02-0.05c2.59-0.74 4.34-3.03 4.48-5.6h0.02l5.88-30.12-12-2.34z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.18 84.06 10.87 2.14c2.2 0.43 4.34-1 4.77-3.2l2.39-12.14c1.03-5.2-2.36-10.25-7.56-11.28s-10.25 2.36-11.28 7.56l-2.39 12.14c-0.43 2.21 1 4.35 3.2 4.78z",
        fill: "#7600B3"
      })
    )
  );
}

exports.default = PregnantWoman;
