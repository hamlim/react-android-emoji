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

function MaleDetective(props) {
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
        id: "g",
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
        xlinkHref: "#g"
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
          id: "f",
          x1: 50,
          x2: 50,
          y1: 97.051,
          y2: 135.87,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#606060",
          offset: 0.1609
        }),
        _react2.default.createElement("stop", {
          stopColor: "#606060",
          offset: 0.2878
        }),
        _react2.default.createElement("stop", {
          stopColor: "#595959",
          offset: 0.449
        }),
        _react2.default.createElement("stop", {
          stopColor: "#464646",
          offset: 0.6836
        }),
        _react2.default.createElement("stop", {
          stopColor: "#262626",
          offset: 0.962
        }),
        _react2.default.createElement("stop", {
          stopColor: "#212121",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-0.5 135.87v-15.26c0-16.23 25.36-23.53 50.5-23.56h0.13c25.03 0 50.37 8.09 50.37 23.56v15.26h-101z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m50.13 98.55c12.9 0 25.42 2.19 34.36 6 6.62 2.83 14.51 7.91 14.51 16.05v13.76h-98v-13.76c0-15.2 24.61-22.03 49-22.06l0.13 0.01m0-3h-0.13c-25.49 0.03-52 7.28-52 25.06v16.76h104v-16.76c0-16.76-26.26-25.06-51.87-25.06z",
        fill: "#404042"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80.59 87.04c0 2.14-2.26 4.12-6.08 5.71-5.58 2.33-16.6 32.6-26.63 32.6-6.53 0-10.47-29.41-15.43-30.5-7.88-1.73-13.03-4.58-13.03-7.81 0-5.27 13.69-9.54 30.59-9.54s30.58 4.27 30.58 9.54z",
      clipPath: "url(#a)",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m49.17 109.33c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.96-3.26 7.17-7.26 7.17h-1.64z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.08 94.18v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#D18100"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "39.43 105 43.02 133 50.2 133 50.61 133 57.37 133 60.57 105",
      clipPath: "url(#a)",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("rect", {
          id: "e",
          x: 10.48,
          y: 29.43,
          width: 77.52,
          height: 74.36
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
            "m22.67 72.11c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
          fill: "#E59600"
        }),
        _react2.default.createElement("path", {
          d:
            "m77.33 52.29c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.66c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.66m0-2h-54.66c-5.89 0-10.71 5.14-10.71 11.41s4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41s-4.81-11.41-10.7-11.41z",
          fill: "#D18100"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "c",
            x1: 50,
            x2: 50,
            y1: 94.447,
            y2: 12.68,
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            offset: 0
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB809",
            offset: 0.102
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFC21A",
            offset: 0.3707
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFC825",
            offset: 0.6592
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFCA28",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m50 95.13c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.05-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.34 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.81 9.6-22.38 9.6z",
          fill: "url(#c)"
        }),
        _react2.default.createElement("path", {
          d:
            "m50 12.92c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z",
          fill: "#ED9E00"
        }),
        _react2.default.createElement("path", {
          d:
            "m25.99 50.58s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.05 0.13-1.49z",
          fill: "#6D4C41"
        }),
        _react2.default.createElement("ellipse", {
          cx: 34.19,
          cy: 58.67,
          rx: 4.93,
          ry: 5.1,
          fill: "#404040"
        }),
        _react2.default.createElement("path", {
          d:
            "m53.86 67.91c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.29-0.7-0.06-1.37-0.7-1.63z",
          fill: "#E59600"
        }),
        _react2.default.createElement("path", {
          d:
            "m58.53 76c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.75-1.67-1.09-3.33-2.92-2.24z",
          fill: "#795548"
        }),
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", {
            id: "b",
            d:
              "m50 3.89h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.13-36.12 52.13s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.3-51.88-36.14-52.12z"
          })
        ),
        _react2.default.createElement(
          "clipPath",
          null,
          _react2.default.createElement("use", {
            xlinkHref: "#b"
          })
        ),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "o",
            cx: 50.26,
            cy: 4.1287,
            r: 48.85,
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
            "m50.02 3.89h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.13-36.13 52.13s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.45 0.81 11.55 1.81 19.37 1.81h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.32-51.89-36.11-52.13z",
          fill: "url(#o)"
        }),
        _react2.default.createElement("path", {
          d:
            "m50.02 3.89h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.13-36.13 52.13s5 8.81 5.1 8.81c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.28 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.1 0 5.1-8.81 5.1-8.81s9.3-51.9-36.13-52.14z",
          fill: "#3F2720"
        })
      )
    ),
    _react2.default.createElement("ellipse", {
      cx: 65.8,
      cy: 60.05,
      rx: 6,
      ry: 6.21,
      clipPath: "url(#a)",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m75.48 50.36c-1.11-1.47-3.68-3.61-8.67-3.61s-7.56 2.14-8.67 3.61c-0.49 0.65-0.37 1.4-0.03 1.86 0.32 0.42 1.25 0.81 2.28 0.46s3.05-1.39 6.42-1.42c3.37 0.02 5.39 1.07 6.42 1.42s1.96-0.04 2.28-0.46c0.33-0.46 0.46-1.21-0.03-1.86z",
      clipPath: "url(#a)",
      fill: "#6D4C41"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m93.37 137.25s0-3.88 2-12.38c1.69-7.16 2.54-10.28 2.54-10.28 0.5-3.32 3.75-5.48 7.01-4.67l9.93 2.48 4.25 24-25.73 0.85z",
        fill: "#616161"
      }),
      _react2.default.createElement("path", {
        d:
          "m114.85 112.41h-3.16c-0.01 1.01 0.37 1.99 0.23 3h0.41l3.19 18h-16.79c-1.26 0.35-2.52 0.68-3.78 1.03l-0.35 1.97h24.5l-4.25-24z",
        fill: "#404042"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 106.51,
      cy: 114.41,
      rx: 8.74,
      ry: 8,
      clipPath: "url(#a)",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m6.15 104.52c-0.52 0.62-0.68 1.45-0.16 2.07l3.11 3.74c0.52 0.62 1.65 1.46 2.32 1 3.12-2.17 10.62-7.21 16.25-5.38l-3.8-7.73c0 0.01-11.33-1.3-17.72 6.3z",
        fill: "#808080",
        stroke: "#575757",
        strokeMiterlimit: 10,
        strokeWidth: 2
      }),
      _react2.default.createElement("circle", {
        cx: 11.29,
        cy: 105.46,
        r: 2.69,
        fill: "#757575",
        stroke: "#9E9E9E",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#424242"
        },
        _react2.default.createElement("circle", {
          cx: 12.22,
          cy: 105.59,
          r: 0.55
        }),
        _react2.default.createElement("circle", {
          cx: 10.36,
          cy: 105.32,
          r: 0.55
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m91.88 104.52c0.52 0.62 0.68 1.45 0.16 2.07l-3.11 3.74c-0.52 0.62-1.65 1.46-2.32 1-3.12-2.17-10.62-7.21-16.25-5.38l3.8-7.73c0 0.01 11.32-1.3 17.72 6.3z",
        fill: "#808080",
        stroke: "#575757",
        strokeMiterlimit: 10,
        strokeWidth: 2
      }),
      _react2.default.createElement("circle", {
        cx: 86.73,
        cy: 105.46,
        r: 2.69,
        fill: "#757575",
        stroke: "#9E9E9E",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#424242"
        },
        _react2.default.createElement("circle", {
          cx: 85.8,
          cy: 105.59,
          r: 0.55
        }),
        _react2.default.createElement("circle", {
          cx: 87.67,
          cy: 105.32,
          r: 0.55
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 34.671,
          x2: 34.671,
          y1: 94.816,
          y2: 136.17,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#757575",
          offset: 0.1252
        }),
        _react2.default.createElement("stop", {
          stopColor: "#707070",
          offset: 0.2997
        }),
        _react2.default.createElement("stop", {
          stopColor: "#626262",
          offset: 0.5018
        }),
        _react2.default.createElement("stop", {
          stopColor: "#4B4B4B",
          offset: 0.7177
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2B2B2B",
          offset: 0.9419
        }),
        _react2.default.createElement("stop", {
          stopColor: "#212121",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m36.89 136.67-15.64-46.67c3.5 1.95 10.46 5.16 18.26 5.16 0.79 0 1.58-0.03 2.35-0.1h0.01c0.73 0 1.36 0.63 1.52 1.44l4.71 40.17h-11.21z",
        fill: "url(#n)"
      }),
      _react2.default.createElement("path", {
        d:
          "m22.99 92.03c3.93 1.91 9.93 4.14 16.52 4.14 0.82 0 1.64-0.04 2.44-0.11 0.08 0 0.34 0.21 0.44 0.58l4.58 39.03h-9.35l-14.63-43.64m-3.55-4.3 16.73 49.94h13.04l-4.85-41.37c-0.25-1.24-1.24-2.25-2.41-2.25-0.06 0-0.12 0-0.18 0.01-0.76 0.07-1.51 0.1-2.26 0.1-10.76 0-20.07-6.43-20.07-6.43z",
        fill: "#575757"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "m",
          x1: 65.277,
          x2: 65.277,
          y1: 94.789,
          y2: 136.17,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#757575",
          offset: 0.1252
        }),
        _react2.default.createElement("stop", {
          stopColor: "#707070",
          offset: 0.2997
        }),
        _react2.default.createElement("stop", {
          stopColor: "#626262",
          offset: 0.5018
        }),
        _react2.default.createElement("stop", {
          stopColor: "#4B4B4B",
          offset: 0.7177
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2B2B2B",
          offset: 0.9419
        }),
        _react2.default.createElement("stop", {
          stopColor: "#212121",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M51.8,136.67l4.83-40.25c0.15-0.74,0.76-1.37,1.38-1.37c0.04,0,0.07,0,0.11,0.01 c0.85,0.1,1.74,0.15,2.64,0.15c7.4,0,14.45-3.28,18-5.24l-15.64,46.7H51.8z",
        fill: "url(#m)"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.02 91.99-14.63 43.68h-9.46l4.68-39.03c0.09-0.36 0.33-0.57 0.39-0.59 0.89 0.1 1.82 0.15 2.76 0.15 6.28 0.01 12.3-2.28 16.26-4.21m3.54-4.26zm0 0s-9.67 6.48-19.8 6.48c-0.84 0-1.69-0.04-2.53-0.14-0.07-0.01-0.15-0.01-0.22-0.01-1.15 0-2.13 1.03-2.37 2.25l-4.96 41.37h13.16l16.72-49.95z",
        fill: "#575757"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 54.395,
        cy: 30.42,
        r: 59.394,
        gradientTransform: "matrix(.9534 0 0 .7823 -1.8599 9.9427)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.0032478
      }),
      _react2.default.createElement("stop", {
        stopColor: "#686868",
        offset: 0.3326
      }),
      _react2.default.createElement("stop", {
        stopColor: "#464646",
        offset: 0.9409
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m83.49 25.84c-4.5-1.07-10.9-2.03-17.03-2.58-5.08-0.46-10.68 0.5-16.46 0.5s-11.38-0.96-16.46-0.51c-6.13 0.55-13.68 2.62-18.18 3.69-7.9 1.89-11.36 3.84-11.36 6.67s4.11 4.11 12.02 5.99c4.5 1.07 7.95 3.59 15.94 4.54 5.06 0.61 13.57-1.2 19.34-1.2 5.78 0 13.42 1.78 18.5 1.33 6.13-0.55 9.69-2.89 14.19-3.96 7.9-1.88 12.01-3.87 12.01-6.7s-4.6-5.89-12.51-7.77z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 47.389,
        cy: 7.4814,
        r: 32.196,
        gradientTransform:
          "matrix(1.0217e-13 .9331 -1.4673 1.418e-13 60.307 -37.487)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.0032478
      }),
      _react2.default.createElement("stop", {
        stopColor: "#686868",
        offset: 0.3326
      }),
      _react2.default.createElement("stop", {
        stopColor: "#464646",
        offset: 0.9409
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.56 4.35c-2.83-0.71-7.39-0.45-10.25 0.03-7.14 1.21-6.11 0.52-12.77-0.13-2.67-0.26-6.29-0.48-8.86 0.3-9.95 3-11.13 11.44-17.43 24.47 0.14 11.87 70.02 11.76 69.88 0-6.08-12.43-10.12-22.06-20.57-24.67z",
      fill: "url(#k)"
    }),
    _react2.default.createElement("path", {
      d:
        "m38.81 9.99c3.2 2.22 7.12 3.27 10.95 2.84 3.53-0.39 6.9-1.7 10.14-3.24 0.55-0.26 1.11 0.31 0.89 0.9-0.49 1.31-5.46 6.16-11.44 6.16-5.53 0-9.23-2.29-11.15-5.63-0.26-0.44-0.06-1.49 0.61-1.03z",
      fill: "#eee",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m82.05 22.58c-11.57 6.57-52.32 6.59-63.78-0.06-0.97 2.13-1.96 4.32-3.02 6.5 0.14 11.87 70.02 11.75 69.88 0-1.03-2.12-2.05-4.29-3.08-6.44z",
      fill: "#404042"
    }),
    _react2.default.createElement("path", {
      d:
        "m83.62 25.87c-0.52-1.1-1.05-2.2-1.57-3.29-0.02 0.01-0.04 0.02-0.05 0.03-4.61-9.25-8.87-16.11-17.44-18.26-2.83-0.71-7.39-0.45-10.25 0.03-7.14 1.21-6.11 0.52-12.77-0.13-2.67-0.26-6.29-0.48-8.86 0.3-9.35 2.82-10.96 10.45-16.34 22.17-0.34 0.08-0.67 0.16-0.98 0.24-7.9 1.87-11.36 3.82-11.36 6.65s4.11 4.11 12.02 5.99c4.5 1.07 7.95 3.59 15.94 4.54 5.06 0.61 13.57-1.2 19.34-1.2 5.78 0 13.42 1.78 18.5 1.33 6.13-0.55 9.69-2.89 14.19-3.96 7.9-1.88 12.01-3.87 12.01-6.7 0-2.81-4.55-5.85-12.38-7.74z",
      fill: "none",
      stroke: "#575757",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.6
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "j",
          cx: 56.55,
          cy: 21.792,
          r: 41.908,
          gradientTransform: "matrix(.9938 .1109 -.1109 .9938 7.5088 13.544)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FAFAFA",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m90.28 43.38c7.33 9.22 5.83 22.68-3.35 30.06s-22.57 5.89-29.9-3.34-5.83-22.68 3.35-30.06 22.57-5.88 29.9 3.34z",
        fill: "url(#j)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.86 85.01-3.51-4.43 0.27-0.22c0.66-0.53 0.76-1.49 0.24-2.14l-0.45-0.56c-0.52-0.66-1.48-0.76-2.13-0.24l-0.27 0.22-3.11-3.92c8.51-8.72 9.41-22.65 1.64-32.42-8.4-10.56-23.73-12.27-34.24-3.82-10.52 8.45-12.24 23.87-3.84 34.43 7.7 9.68 21.22 11.92 31.52 5.72l3.14 3.96-0.63 0.5c-0.66 0.53-0.76 1.49-0.24 2.14l0.45 0.56c0.52 0.66 1.48 0.76 2.13 0.24l0.62-0.5 3.51 4.43 4.9-3.95zm-41.82-16.08c-6.8-8.55-5.4-21.03 3.11-27.87s20.93-5.46 27.72 3.09c6.8 8.55 5.4 21.03-3.11 27.87s-20.92 5.46-27.72-3.09z",
      fill: "none",
      stroke: "#919191",
      strokeMiterlimit: 10,
      strokeWidth: 2.9034
    }),
    _react2.default.createElement("polygon", {
      points: "99.86 85.01 94.96 88.94 84.14 75.3 89.04 71.36",
      fill: "#C7C7C7"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 72.931,
        cy: 32.029,
        r: 48.964,
        gradientTransform: "matrix(.9997 -.0234 .0234 .9997 -1.6 2.0076)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DBDBDB",
        offset: 0.2274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CDCDCD",
        offset: 0.4939
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B5B5B5",
        offset: 0.7789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.54 41.29c-8.4-10.56-23.73-12.27-34.24-3.82-10.52 8.45-12.24 23.87-3.84 34.43s23.73 12.27 34.24 3.82 12.24-23.87 3.84-34.43zm-6.78 30.73c-8.51 6.84-20.93 5.46-27.72-3.09-6.8-8.55-5.4-21.03 3.11-27.87s20.93-5.46 27.72 3.09c6.8 8.55 5.4 21.03-3.11 27.87z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 94.766,
        cy: 55.446,
        r: 24.778,
        gradientTransform: "matrix(.9938 .1109 -.1109 .9938 7.5088 13.544)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA623",
        offset: 0.0404
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0.5168
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.61 105.49c-0.36 0-0.69-0.16-0.91-0.44l-0.41-0.51c-0.11-0.14-0.27-0.25-0.44-0.31-3.17-1.11-6.94-4.14-10.08-8.09-2.79-3.52-4.78-7.37-5.45-10.57-0.21-0.99-0.67-1.96-1.35-2.81l-0.23-0.29 4.73-3.8 0.22 0.28c0.67 0.85 1.52 1.52 2.43 1.94 2.96 1.36 6.25 4.16 9.05 7.67 3.15 3.96 5.25 8.32 5.63 11.67 0.02 0.18 0.09 0.35 0.2 0.49l0.41 0.51c0.4 0.51 0.32 1.25-0.18 1.66l-0.92 0.74c-0.06 0.04-0.11 0.09-0.15 0.15-0.1 0.13-0.21 0.24-0.33 0.34s-0.25 0.18-0.4 0.25c-0.06 0.03-0.12 0.07-0.18 0.11l-0.92 0.74c-0.21 0.18-0.46 0.27-0.72 0.27z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.34 80.02c0.69 0.74 1.5 1.34 2.38 1.75 2.82 1.3 5.99 4 8.7 7.4 3.04 3.82 5.07 8 5.43 11.18 0.04 0.36 0.18 0.7 0.41 0.99l0.41 0.51c0.07 0.09 0.06 0.23-0.03 0.3l-0.92 0.74c-0.11 0.09-0.21 0.19-0.3 0.3-0.06 0.08-0.12 0.14-0.19 0.19-0.06 0.05-0.14 0.1-0.22 0.14-0.13 0.06-0.24 0.14-0.35 0.23l-0.92 0.74c-0.04 0.03-0.08 0.04-0.12 0.04s-0.1-0.01-0.15-0.07l-0.41-0.51c-0.23-0.29-0.53-0.5-0.87-0.62-3-1.05-6.61-3.96-9.64-7.78-2.7-3.4-4.62-7.11-5.26-10.17-0.2-0.95-0.6-1.88-1.18-2.73l3.23-2.63m0.29-2.71-6.24 5.01 0.83 1.04c0.56 0.7 0.97 1.52 1.15 2.4 0.67 3.22 2.64 7.2 5.64 10.97 3.39 4.26 7.3 7.28 10.52 8.4l0.41 0.51c0.42 0.53 1.04 0.8 1.67 0.8 0.47 0 0.94-0.15 1.33-0.47l0.92-0.74c0.21-0.1 0.4-0.22 0.58-0.37 0.18-0.14 0.34-0.31 0.48-0.49l0.92-0.74c0.92-0.74 1.07-2.09 0.34-3.01l-0.41-0.51c-0.38-3.4-2.45-7.91-5.83-12.17-3-3.78-6.42-6.58-9.4-7.95-0.81-0.38-1.52-0.96-2.08-1.66l-0.83-1.02z",
      fill: "#EB6A1F"
    }),
    _react2.default.createElement("path", {
      d:
        "m96.62 80.36-5.8 4.66c-0.66 0.53-1.61 0.42-2.13-0.24l-0.45-0.56c-0.52-0.66-0.42-1.62 0.24-2.14l5.8-4.66c0.66-0.53 1.61-0.42 2.13 0.24l0.45 0.56c0.52 0.65 0.42 1.61-0.24 2.14z",
      fill: "#ABABAB"
    }),
    _react2.default.createElement("path", {
      d:
        "m120.2 109.68-5.85 5.75c-5.45 4.65-11.81 5.28-17.32-1.32-11.98-14.33 6.47-24.83 12.09-21.99 8.41 4.24 13.51 15.48 11.08 17.56z",
      fill: "#FFCA28",
      stroke: "#EDA600",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9846
    }),
    _react2.default.createElement("path", {
      d:
        "m112.22 112.4v0c1.06 1.41 3.06 1.68 4.46 0.62l3.58-2.72c1.4-1.07 1.68-3.07 0.62-4.48v0c-1.06-1.41-3.06-1.68-4.46-0.62l-3.58 2.72c-1.41 1.07-1.68 3.08-0.62 4.48z",
      fill: "#FFCA28",
      stroke: "#EDA600",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.7097
    }),
    _react2.default.createElement("path", {
      d:
        "m109.79 108.35v0c1.08 1.41 3.09 1.68 4.5 0.6l4.67-3.59c1.41-1.08 1.67-3.1 0.6-4.51v0c-1.08-1.41-3.09-1.68-4.5-0.6l-4.67 3.59c-1.41 1.07-1.68 3.09-0.6 4.51z",
      fill: "#FFCA28",
      stroke: "#EDA600",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9846
    }),
    _react2.default.createElement("path", {
      d:
        "m106.81 105.11v0c1.12 1.32 3.1 1.48 4.42 0.36l5.44-4.65c1.32-1.13 1.48-3.11 0.36-4.43v0c-1.12-1.32-3.1-1.48-4.42-0.36l-5.44 4.65c-1.32 1.12-1.48 3.11-0.36 4.43z",
      fill: "#FFCA28",
      stroke: "#EDA600",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9846
    }),
    _react2.default.createElement("path", {
      d:
        "m102.71 101.27v0c1.19 1.26 3.18 1.31 4.43 0.12l5.18-4.94c1.26-1.2 1.31-3.19 0.12-4.45v0c-1.19-1.26-3.18-1.31-4.43-0.12l-5.18 4.94c-1.26 1.2-1.31 3.19-0.12 4.45z",
      fill: "#FFCA28",
      stroke: "#EDA600",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9846
    }),
    _react2.default.createElement("path", {
      d:
        "m105.21 88.49c-0.69 0.43-3.22 1.81-4.77 2.83-0.59 0.39-2.09 1.48-2.58 1.97-1.58 1.59-4.61 8.54-4.58 10.87 0.02 1.14 0.39 2.18 0.99 3.04-0.03-0.58 3.91 9.85 9.51 1.34 2.51-3.4-1.89-6.1-1.95-8.07-0.04-1.51-0.01-3.84 4.74-6.3 1.33-0.69 3-2.46 2.84-3.86-0.26-2.42-2.2-3.08-4.2-1.82z",
      fill: "#FFCA28"
    }),
    _react2.default.createElement("path", {
      d:
        "m108.73 86.87c-1.1-0.52-2.5-0.33-3.83 0.52-0.23 0.15-0.67 0.4-1.21 0.72-1.08 0.63-2.56 1.49-3.62 2.2-0.54 0.37-2.16 1.51-2.77 2.14-4.37 4.57-5.45 9.29-5.21 12.32 0.16 1.98 2.49 3.39 2.36 2.79-0.71-3.18-0.61-5.26 0.86-8.69 1.05-2.44 2.02-3.68 3.38-5.05 0.42-0.42 1.83-1.46 2.44-1.87 1-0.67 2.45-1.51 3.51-2.13 0.57-0.33 1.04-0.61 1.28-0.76 0.74-0.47 1.44-0.61 1.92-0.39 0.42 0.2 1.01 0.79 1.08 1.52 0.07 0.76-1.31 2.45-2.53 3.09-1.72 0.91-3.66 1.8-4.69 3.52-0.78 1.3-1.3 3.22-0.71 4.59 0.58 1.36 3.44 3.44 3.46 6.46 0.01 1.25-0.83 3.66-0.83 3.66s2.15-1.45 2.55-3.04c0.56-2.24-0.61-4.72-1.83-6.44-0.54-0.77-1.74-1.88-1.74-2.27-0.02-1.26-0.24-2.9 4.09-5.19 1.5-0.79 4.07-2.73 3.88-4.73-0.14-1.41-0.79-2.47-1.84-2.97z",
      fill: "#EDA600"
    })
  );
}

exports.default = MaleDetective;