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

function MrsClaus(props) {
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
        id: "h",
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
        xlinkHref: "#h"
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
          id: "g",
          x1: 64,
          x2: 64,
          y1: 97.416,
          y2: 130.53,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F44336",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E73B32",
          offset: 0.3592
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C62828",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M13.45,130.53v-9.57c0-17.33,27.23-23.52,50.56-23.54h0.14c13.4,0,25.83,2.15,35.03,6.06 c7.02,2.98,15.39,8.44,15.39,17.49v9.57H13.45z",
        fill: "url(#g)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.14 98.86c24.34 0 48.97 7.59 48.97 22.1v8.12h-98.22v-8.12c0-7 4.91-12.56 14.58-16.52 8.76-3.58 21.02-5.57 34.53-5.58h0.14m0-2.89h-0.14c-25.65 0.03-52 7.1-52 24.99v11.01h104v-11.01c0-16.86-26.1-24.99-51.86-24.99z",
        fill: "#CC2623"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m63.17 107.2c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.95-3.26 7.17-7.26 7.17h-1.64z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.08 92.05v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#D18100"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m64.08 109.58c-7.51 0-15.02-0.85-22.34-2.53l-3.48-0.8c-3.71-0.85-6.3-4.11-6.3-7.91v-1.37c0-3.88 3.15-7.03 7.01-7.03 0.54 0 1.08 0.06 1.61 0.19 7.64 1.78 15.49 2.68 23.34 2.68 7.73 0 15.47-0.88 23.01-2.6 0.56-0.13 1.12-0.19 1.68-0.19 4.1 0 7.43 3.34 7.43 7.45v0.91c0 3.8-2.58 7.05-6.28 7.91l-3.02 0.7c-7.42 1.71-15.04 2.59-22.66 2.59z",
        fill: "#fff"
      }),
      _react2.default.createElement("path", {
        d:
          "m38.97 91.43c0.42 0 0.85 0.05 1.27 0.15 7.75 1.8 15.72 2.72 23.68 2.72 7.84 0 15.7-0.89 23.35-2.64 0.45-0.1 0.9-0.15 1.35-0.15 3.27 0 5.93 2.67 5.93 5.95v0.91c0 3.09-2.1 5.75-5.12 6.45l-3.02 0.7c-7.31 1.7-14.82 2.56-22.32 2.56-7.39 0-14.8-0.84-22-2.49l-3.48-0.8c-3.03-0.69-5.14-3.35-5.14-6.45v-1.37c-0.01-3.05 2.46-5.54 5.5-5.54m0-3c-4.58 0-8.51 3.72-8.51 8.53v1.37c0 4.48 3.1 8.37 7.47 9.38l3.48 0.8c7.46 1.71 15.07 2.57 22.68 2.57 7.72 0 15.43-0.88 23-2.64l3.02-0.7c4.36-1.01 7.44-4.9 7.44-9.37v-0.91c0-5.05-4.13-8.95-8.93-8.95-0.66 0-1.34 0.07-2.02 0.23-7.46 1.71-15.07 2.57-22.68 2.57-7.72 0-15.43-0.88-23-2.64-0.66-0.16-1.31-0.24-1.95-0.24z",
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m37.19 71.55c-5.24 0-9.5-4.71-9.5-10.5s4.26-10.5 9.5-10.5h53.57c5.24 0 9.5 4.71 9.5 10.5s-4.26 10.5-9.5 10.5h-53.57z",
        fill: "#3C2B24"
      }),
      _react2.default.createElement("path", {
        d:
          "m90.76 51.55c4.69 0 8.5 4.26 8.5 9.5s-3.81 9.5-8.5 9.5h-53.57c-4.69 0-8.5-4.26-8.5-9.5s3.81-9.5 8.5-9.5h53.57m0-2h-53.57c-5.78 0-10.5 5.18-10.5 11.5s4.73 11.5 10.5 11.5h53.56c5.78 0 10.5-5.18 10.5-11.5s-4.71-11.5-10.49-11.5z",
        fill: "#291B16"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 63.974,
          x2: 63.974,
          y1: 95.835,
          y2: 9.9011,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#63463D",
          offset: 0.1584
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6D5047",
          offset: 0.5335
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m63.97 92.82c-20.54 0-31.86-13.43-31.86-37.81 0-29.92 9.83-43.26 31.86-43.26s31.86 13.34 31.86 43.26c0 24.38-11.31 37.81-31.86 37.81z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.97 12.75c11.54 0 19.53 3.73 24.44 11.41 4.32 6.76 6.42 16.85 6.42 30.84 0 23.74-10.96 36.81-30.86 36.81s-30.86-13.07-30.86-36.81c0-13.99 2.1-24.08 6.42-30.84 4.91-7.68 12.91-11.41 24.44-11.41m0-2c-25.85 0-32.86 18.14-32.86 44.26 0 25.97 12.72 38.81 32.86 38.81s32.86-12.84 32.86-38.81c0-26.11-7-44.26-32.86-44.26z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#33251F"
        },
        _react2.default.createElement("path", {
          d:
            "m48.3 45.56c-0.4 0-0.77-0.24-0.93-0.63-0.2-0.51 0.05-1.09 0.56-1.3 0.27-0.11 6.76-2.63 15.8-2.63 9.02 0 15.98 2.52 16.27 2.63 0.52 0.19 0.78 0.76 0.59 1.28s-0.76 0.78-1.28 0.59c-0.07-0.03-6.93-2.5-15.58-2.5-8.66 0-15 2.47-15.06 2.49-0.13 0.04-0.25 0.07-0.37 0.07z"
        }),
        _react2.default.createElement("path", {
          d:
            "m75.14 39.28c-0.1 0-0.2-0.01-0.3-0.05-0.05-0.02-5.13-1.6-10.86-1.6s-10.81 1.58-10.87 1.6c-0.52 0.17-1.09-0.13-1.25-0.65-0.17-0.53 0.12-1.09 0.65-1.25 0.22-0.07 5.42-1.69 11.47-1.69s11.25 1.62 11.47 1.69c0.53 0.17 0.82 0.73 0.65 1.25-0.14 0.43-0.54 0.7-0.96 0.7z"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m46.55 79.81c-0.26 0-0.51-0.1-0.71-0.29-0.39-0.39-0.39-1.02 0-1.41l7.11-7.11c0.39-0.39 1.02-0.39 1.41 0s0.39 1.02 0 1.41l-7.11 7.11c-0.19 0.2-0.45 0.29-0.7 0.29z",
        fill: "#33251F"
      }),
      _react2.default.createElement("path", {
        d:
          "m81.4 79.81c-0.26 0-0.51-0.1-0.71-0.29l-7.11-7.11c-0.39-0.39-0.39-1.02 0-1.41s1.02-0.39 1.41 0l7.11 7.11c0.39 0.39 0.39 1.02 0 1.41-0.19 0.2-0.44 0.29-0.7 0.29z",
        fill: "#33251F"
      }),
      _react2.default.createElement("path", {
        d:
          "m87.53 50.09c-0.92-1.22-3.05-2.99-7.18-2.99s-6.26 1.77-7.18 2.99c-0.41 0.54-0.3 1.16-0.02 1.54 0.26 0.35 1.03 0.67 1.89 0.38 0.85-0.29 2.52-1.15 5.31-1.17 2.79 0.02 4.46 0.88 5.31 1.17s1.62-0.03 1.89-0.38c0.29-0.38 0.39-1-0.02-1.54z",
        fill: "#9E9E9E"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 63.645,
          x2: 63.645,
          y1: 9.4771,
          y2: 42.49,
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
          "m90.96 21.7c-6.62-7.25-23.58-11.61-27.31-7.75-3.73-3.86-20.69 0.5-27.31 7.75-7.31 8.01-8.97 21.94-6.15 33.67 0.26 1.08 2.95 1.09 2.95-0.02 0-7.72 6.09-17.77 14.66-20.2 4.13-1.17 13.2-1.47 15.85-6.77 2.65 5.3 11.71 5.6 15.85 6.77 8.57 2.43 14.66 12.29 14.66 20.2 0 1.11 2.69 1.1 2.95 0.02 2.82-11.73 1.16-25.67-6.15-33.67z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m54.98 50.09c-0.92-1.22-3.05-2.99-7.18-2.99s-6.26 1.77-7.18 2.99c-0.41 0.54-0.3 1.16-0.02 1.54 0.26 0.35 1.03 0.67 1.89 0.38 0.85-0.29 2.52-1.15 5.31-1.17 2.79 0.02 4.46 0.88 5.31 1.17s1.62-0.03 1.89-0.38c0.28-0.38 0.38-1-0.02-1.54z",
        fill: "#9E9E9E"
      }),
      _react2.default.createElement("ellipse", {
        cx: 47.8,
        cy: 59.07,
        rx: 4.83,
        ry: 5,
        fill: "#1A1717"
      }),
      _react2.default.createElement("ellipse", {
        cx: 80.36,
        cy: 59.07,
        rx: 4.83,
        ry: 5,
        fill: "#1A1717"
      }),
      _react2.default.createElement("path", {
        d:
          "m67.76 68.18c-0.1-0.04-0.21-0.07-0.32-0.08h-6.93c-0.11 0.01-0.21 0.04-0.32 0.08-0.63 0.25-0.97 0.91-0.68 1.6 0.3 0.69 1.68 2.64 4.46 2.64s4.16-1.95 4.46-2.64-0.04-1.34-0.67-1.6z",
        fill: "#33251F"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "d",
          d:
            "m90.96 21.7c-6.62-7.25-23.58-12.35-27.31-8.5-3.73-3.86-20.69 1.25-27.31 8.5-7.31 8.01-8.97 21.94-6.15 33.67 0.26 1.08 2.31 0.77 2.31 0.77l-0.77-4.34 4.77-18.95 27.54-8.98 26.81 8.13 4.77 19.62-1.15 4.69s2.15 0.83 2.64-0.94c3.21-11.63 1.16-25.67-6.15-33.67z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "c"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#d"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#c)"
        },
        _react2.default.createElement("path", {
          d:
            "m68.72 15.51c5.92 0 15.74 3.51 20.02 8.21 5.05 5.53 7.42 15 6.48 24.79-2.24-5.77-6.66-13.16-14.91-15.5-0.81-0.23-1.77-0.45-2.78-0.68-3.85-0.88-9.66-2.21-11.2-5.3-0.51-1.02-1.55-1.66-2.68-1.66-1.14 0-2.17 0.64-2.68 1.66-1.54 3.08-7.36 4.41-11.2 5.3-1.01 0.23-1.96 0.45-2.78 0.68-8.25 2.34-12.66 9.73-14.91 15.5-0.94-9.8 1.43-19.26 6.48-24.79 4.29-4.7 14.11-8.21 20.02-8.21 2.29 0 2.92 0.52 2.92 0.52 0.57 0.58 1.34 0.91 2.15 0.91s1.59-0.33 2.15-0.91c0 0 0.63-0.52 2.92-0.52m0-3c-2.29 0-4.12 0.45-5.07 1.44-0.96-0.99-2.78-1.44-5.07-1.44-6.67 0-17.32 3.79-22.24 9.19-7.31 8.01-8.97 21.94-6.15 33.67 0.13 0.54 0.8 0.8 1.47 0.8 0.68 0 1.36-0.27 1.48-0.82 1.63-7.61 6.09-17.02 14.66-19.45 4.13-1.17 13.2-2.22 15.85-7.52 2.65 5.3 11.71 6.35 15.85 7.52 8.57 2.43 13.04 11.84 14.66 19.45 0.12 0.55 0.8 0.82 1.48 0.82 0.67 0 1.34-0.27 1.47-0.8 2.82-11.73 1.16-25.66-6.15-33.67-4.93-5.4-15.58-9.19-22.24-9.19z",
          fill: "#80848A"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m72.21 75.95c-3.12 1.86-13.36 1.86-16.48 0-1.79-1.07-3.63 0.56-2.88 2.19 0.73 1.6 6.32 5.32 11.15 5.32s10.34-3.72 11.07-5.32c0.74-1.63-1.07-3.26-2.86-2.19z",
        fill: "#1A1717"
      }),
      _react2.default.createElement("path", {
        d: "m54.18 65.9 0.37-0.14c0.03-5.2 18.55-5.06 18.52 0.14v0",
        fill: "none",
        stroke: "#eee",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement("path", {
        d:
          "m54.95 70.87h-14.29c-1.41 0-2.55-1.14-2.55-2.55v-5.34c0-1.41 1.14-2.55 2.55-2.55h14.29c1.41 0 2.55 1.14 2.55 2.55v5.34c-0.01 1.41-1.15 2.55-2.55 2.55z",
        fill: "#BBDEFB"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m54.95 62.43c0.3 0 0.55 0.25 0.55 0.55v5.34c0 0.3-0.25 0.55-0.55 0.55h-14.29c-0.3 0-0.55-0.25-0.55-0.55v-5.34c0-0.3 0.25-0.55 0.55-0.55h14.29m0-2h-14.29c-1.41 0-2.55 1.14-2.55 2.55v5.34c0 1.41 1.14 2.55 2.55 2.55h14.29c1.41 0 2.55-1.14 2.55-2.55v-5.34c-0.01-1.41-1.15-2.55-2.55-2.55z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m87.5 70.87h-14.29c-1.41 0-2.55-1.14-2.55-2.55v-5.34c0-1.41 1.14-2.55 2.55-2.55h14.29c1.41 0 2.55 1.14 2.55 2.55v5.34c0 1.41-1.14 2.55-2.55 2.55z",
        fill: "#BBDEFB"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m87.5 62.43c0.3 0 0.55 0.25 0.55 0.55v5.34c0 0.3-0.25 0.55-0.55 0.55h-14.29c-0.3 0-0.55-0.25-0.55-0.55v-5.34c0-0.3 0.25-0.55 0.55-0.55h14.29m0-2h-14.29c-1.41 0-2.55 1.14-2.55 2.55v5.34c0 1.41 1.14 2.55 2.55 2.55h14.29c1.41 0 2.55-1.14 2.55-2.55v-5.34c0-1.41-1.14-2.55-2.55-2.55z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 63.995,
          x2: 63.995,
          y1: 4.8313,
          y2: 41.049,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F44336",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E73B32",
          offset: 0.3592
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C62828",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m100.86 49.05c-3.81-8.34-13.79-22.63-37.36-22.63-22.93 0-32.68 13.1-36.53 21.26-0.28-7.82 0.63-21.17 8.61-30.66 6.36-7.57 16.14-11.41 29.06-11.41 12.74 0 22.3 3.8 28.42 11.3 8.12 9.95 8.41 24.22 7.8 32.14z",
        fill: "url(#b)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.64 7.05c12.27 0 21.45 3.62 27.28 10.75s7.38 16.67 7.66 23.42c0.03 0.81 0.05 1.6 0.05 2.37-0.78-1.26-1.69-2.56-2.73-3.86-5.39-6.73-15.55-14.76-33.41-14.76-17.85 0-27.84 7.79-33.08 14.32-0.73 0.91-1.39 1.83-1.99 2.72 0.02-0.39 0.04-0.79 0.07-1.19 0.47-6.56 2.27-15.86 8.18-22.89 6.1-7.21 15.51-10.88 27.97-10.88m0-2.89c-47.36 0-38.53 50.18-38.53 50.18s5.05-26.47 37.39-26.47 38.05 27.34 38.05 27.34 10.45-51.05-36.91-51.05z",
        fill: "#CC2623"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.34 61.9c0.05-4.07-0.17-14.6-3.59-19.98-5.63-8.85-15.92-13.93-28.23-13.93-12.57 0-23.22 5.4-28.48 14.45-3.76 6.46-3.2 15.48-2.72 19.41l-0.14-0.07c-0.66-0.45-8.44-5.93-8.56-13.23-0.05-3.35 1.95-6.49 5.1-8 1.15-0.55 2.33-0.83 3.51-0.84 0.79-0.01 1.51-0.38 1.97-1.02 0.46-0.65 0.59-1.5 0.33-2.26-0.44-1.33-0.58-2.72-0.41-4.13 0.51-4.2 3.92-7.63 8.1-8.17 0.41-0.05 0.83-0.08 1.24-0.08 1.98 0 3.87 0.61 5.47 1.76 0.44 0.32 0.96 0.48 1.49 0.48 1.27 0 2.33-0.94 2.47-2.19 0.45-4.05 2.67-8.88 10.7-8.88s10.26 4.83 10.7 8.88c0.14 1.25 1.2 2.19 2.47 2.19 0.54 0 1.05-0.17 1.49-0.48 1.6-1.15 3.5-1.76 5.47-1.76 0.29 0 0.59 0.01 0.89 0.04 4.65 0.43 8.31 4.28 8.52 8.95 0.05 1.17-0.11 2.32-0.48 3.42-0.25 0.75-0.13 1.59 0.34 2.24 0.46 0.64 1.2 1.02 1.98 1.02h0.15c0.17-0.01 0.34-0.02 0.52-0.02 4.56 0 8.21 3.69 8.68 8.77 0.59 6.37-7.94 12.71-8.78 13.32l-0.2 0.11z",
        fill: "#fff"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.61 16.22c5.86 0 9.13 2.69 9.71 7.99 0.19 1.76 1.68 3.08 3.46 3.08 0.75 0 1.46-0.23 2.08-0.67 1.43-1.03 3.12-1.57 4.89-1.57 0.26 0 0.53 0.01 0.8 0.04 4.09 0.38 7.43 3.89 7.61 8 0.05 1.05-0.1 2.08-0.43 3.06-0.36 1.06-0.18 2.24 0.48 3.15 0.65 0.9 1.69 1.44 2.79 1.44 0.07 0 0.14 0 0.22-0.01 0.15-0.01 0.3-0.01 0.46-0.01 4.57 0 7.32 3.95 7.68 7.86 0.39 4.26-4.11 8.96-7.02 11.38-0.07-4.95-0.66-13.7-3.74-18.55-5.81-9.15-16.41-14.4-29.07-14.4-12.93 0-23.91 5.59-29.35 14.95-3.28 5.64-3.4 13.12-3.07 17.75-2.36-2-6.41-6.15-6.49-11.16-0.05-2.96 1.73-5.74 4.53-7.08 1.03-0.49 2.04-0.74 3.09-0.74 1.12-0.01 2.13-0.53 2.78-1.44s0.82-2.09 0.47-3.16c-0.4-1.18-0.52-2.43-0.36-3.69 0.46-3.75 3.5-6.82 7.24-7.3 0.37-0.05 0.75-0.07 1.12-0.07 1.77 0 3.46 0.54 4.89 1.57 0.61 0.44 1.33 0.67 2.08 0.67 1.78 0 3.27-1.33 3.46-3.08 0.57-5.32 3.83-8.01 9.69-8.01m0-2c-9.11 0-11.27 5.87-11.7 9.77-0.09 0.8-0.76 1.3-1.47 1.3-0.31 0-0.63-0.09-0.91-0.3-1.71-1.23-3.79-1.95-6.05-1.95-0.45 0-0.91 0.03-1.37 0.09-4.65 0.6-8.4 4.38-8.97 9.04-0.2 1.61-0.02 3.15 0.45 4.56 0.32 0.96-0.35 1.96-1.36 1.97-1.25 0.01-2.57 0.28-3.94 0.94-3.43 1.65-5.73 5.12-5.67 8.92 0.13 8.23 9.05 14.08 9.05 14.08l1.91 0.96s-2.38-12.59 2.32-20.66c4.39-7.55 13.75-13.95 27.62-13.95 13.43 0 22.73 6.14 27.38 13.47 4.08 6.42 3.39 21.03 3.39 21.03l1.78-0.83s9.95-6.95 9.27-14.28c-0.49-5.32-4.33-9.67-9.67-9.67-0.2 0-0.39 0.01-0.58 0.02h-0.09c-0.99 0-1.7-1-1.38-1.95 0.4-1.18 0.59-2.46 0.53-3.78-0.23-5.14-4.3-9.43-9.43-9.9-0.33-0.03-0.66-0.05-0.98-0.05-2.26 0-4.35 0.72-6.06 1.95-0.28 0.2-0.6 0.3-0.91 0.3-0.72 0-1.39-0.5-1.47-1.3-0.42-3.91-2.58-9.78-11.69-9.78z",
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("circle", {
        cx: 64,
        cy: 117.88,
        r: 4,
        fill: "#fff"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 114.88c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z",
        fill: "#E0E0E0"
      })
    )
  );
}

exports.default = MrsClaus;
