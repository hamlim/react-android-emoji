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

function ManInTuxedo(props) {
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
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#h"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "g",
          x1: 64,
          x2: 64,
          y1: 97.5,
          y2: 130.5,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#616161",
          offset: 0.0032478
        }),
        _react2.default.createElement("stop", {
          stopColor: "#545454",
          offset: 0.2772
        }),
        _react2.default.createElement("stop", {
          stopColor: "#323232",
          offset: 0.7831
        }),
        _react2.default.createElement("stop", {
          stopColor: "#212121",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m13.5 130.5v-9.51c0-17.29 27.21-23.46 50.5-23.49h0.14c13.39 0 25.82 2.15 35.01 6.05 7 2.98 15.35 8.42 15.35 17.44v9.51h-101z",
        fill: "url(#g)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.14 99c24.28 0 48.86 7.55 48.86 21.99v8.01h-98v-8.01c0-6.95 4.88-12.47 14.52-16.42 8.74-3.58 20.99-5.55 34.48-5.57h0.14m0-3h-0.14c-25.65 0.03-52 7.1-52 24.99v11.01h104v-11.01c0-16.86-26.1-24.99-51.86-24.99z",
        fill: "#404042"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m63.17 107.23c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.96-3.26 7.17-7.26 7.17h-1.64z",
        fill: "#3C2B24"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.08 92.08v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#291B16"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m12.54 121.29v11.01h102.93v-11.01c0-16.89-25.69-25.65-51.55-25.6-25.63 0.06-51.38 7.71-51.38 25.6z",
      clipPath: "url(#b)",
      fill: "none"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m12 120.99v11.01h104v-11.01c0-16.89-26.19-25.02-52-24.99-25.65 0.03-52 7.1-52 24.99z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "a"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#c"
        })
      ),
      _react2.default.createElement("polygon", {
        points: "52.66 106 56.51 124 64.22 124 64.66 124 71.9 124 75.34 106",
        clipPath: "url(#a)",
        fill: "#E0E0E0"
      }),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement(
          "g",
          {
            fill: "#fff"
          },
          _react2.default.createElement("path", {
            d:
              "m54.88 94.33c0.04 1.79 0.17 3.8 2.99 7.48 3.17 4.13 6.11 4.19 6.11 4.19l-10.27 8.54-3.86-19.71 5.03-0.5z"
          }),
          _react2.default.createElement("path", {
            d:
              "m73.09 94.48c-0.04 1.88-0.15 3.66-2.97 7.33-3.17 4.13-6.13 4.19-6.13 4.19l10.29 8.54 3.86-19.71-5.05-0.35z"
          })
        )
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)",
          fill: "#9E9E9E"
        },
        _react2.default.createElement("path", {
          d:
            "m51.61 96.09 6.54 30h-7.29l-11.44-11.14 4.75-6.11-7.12-4.36 4.29-6.86c-0.01 0 4.35-1.1 10.27-1.53z"
        }),
        _react2.default.createElement("path", {
          d:
            "m76.39 96.09-6.54 30h7.29l11.44-11.14-4.75-6.11 7.12-4.36-4.29-6.86c0.01 0-4.35-1.1-10.27-1.53z"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)",
          fill: "#757575"
        },
        _react2.default.createElement("path", {
          d:
            "m50.03 98.23 5.64 25.86h-4l-9.58-9.33 3.65-4.7c0.35-0.45 0.49-1.03 0.39-1.59s-0.44-1.05-0.92-1.35l-5.4-3.3 2.78-4.44c1.26-0.27 3.99-0.81 7.44-1.15m1.58-2.14c-5.92 0.43-10.28 1.53-10.28 1.53l-4.29 6.86 7.12 4.36-4.75 6.11 11.44 11.14h7.29l-6.53-30z"
        }),
        _react2.default.createElement("path", {
          d:
            "m77.97 98.23c3.45 0.34 6.18 0.88 7.45 1.15l2.78 4.44-5.4 3.3c-0.49 0.3-0.82 0.79-0.92 1.35s0.04 1.14 0.39 1.59l3.65 4.7-9.58 9.33h-4l5.63-25.86m-1.58-2.14-6.54 30h7.29l11.44-11.14-4.75-6.11 7.12-4.36-4.29-6.86c0.01 0-4.35-1.1-10.27-1.53z"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement("path", {
          d:
            "m64.77 115.14h-1.4c-1.53 0-2.85-1.05-3.21-2.54l-0.53-2.24c-0.49-2.07 1.08-4.06 3.21-4.06h2.45c2.12 0 3.68 1.97 3.21 4.03l-0.51 2.24c-0.35 1.51-1.69 2.57-3.22 2.57z",
          fill: "#212121"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m48.79 117.09v-12.07c0-1.5 1.63-2.45 2.95-1.71l10.7 5.94c1.34 0.74 1.35 2.65 0.02 3.42l-10.7 6.13c-1.32 0.74-2.97-0.2-2.97-1.71z",
        clipPath: "url(#a)",
        fill: "#212121"
      }),
      _react2.default.createElement("path", {
        d:
          "m78.79 117.09v-12.07c0-1.5-1.63-2.45-2.95-1.71l-10.7 5.94c-1.34 0.74-1.35 2.65-0.02 3.42l10.7 6.13c1.32 0.74 2.97-0.2 2.97-1.71z",
        clipPath: "url(#a)",
        fill: "#212121"
      }),
      _react2.default.createElement("circle", {
        cx: 63.75,
        cy: 120,
        r: 2,
        clipPath: "url(#a)",
        fill: "#212121"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m36.67 72.26c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
        fill: "#3C2B24"
      }),
      _react2.default.createElement("path", {
        d:
          "m91.33 52.43c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.66c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.66m0-2h-54.66c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41 0.01-6.27-4.81-11.41-10.7-11.41z",
        fill: "#291B16"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 64,
          x2: 64,
          y1: 94.591,
          y2: 12.825,
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
          "m64 95.27c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.04-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.33 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.81 9.6-22.38 9.6z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 13.07c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#1A1717"
        },
        _react2.default.createElement("path", {
          d:
            "m39.99 50.73s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.06 0.13-1.49z"
        }),
        _react2.default.createElement("ellipse", {
          cx: 47.56,
          cy: 58.81,
          rx: 4.93,
          ry: 5.1
        }),
        _react2.default.createElement("path", {
          d:
            "m86.05 53.13s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.49 0.28-1.07 0.32-1.56 0.12z"
        }),
        _react2.default.createElement("ellipse", {
          cx: 80.44,
          cy: 58.81,
          rx: 4.93,
          ry: 5.1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m67.86 68.06c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.29-0.71-0.06-1.37-0.7-1.63z",
        fill: "#33251F"
      }),
      _react2.default.createElement("path", {
        d:
          "m72.42 76.14c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.75-1.66-1.09-3.33-2.92-2.24z",
        fill: "#1A1717"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "e",
          d:
            "m64 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.3-51.89-36.14-52.13z"
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
        "radialGradient",
        {
          id: "d",
          cx: 64.26,
          cy: 4.2736,
          r: 48.85,
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
          "m64.02 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.14-36.13 52.14s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.46 0.8 11.55 1.8 19.38 1.8h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.31-51.89-36.12-52.13z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.02 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.14-36.13 52.14s5 8.81 5.1 8.81c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.28 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.09 0 5.1-8.81 5.1-8.81s9.3-51.91-36.13-52.15z",
        fill: "#1F1D1B"
      })
    )
  );
}

exports.default = ManInTuxedo;