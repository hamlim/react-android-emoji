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

function Snowboarder(props) {
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
        id: "af",
        x: -132,
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
        xlinkHref: "#af"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: -110.28,
        cy: 78.534,
        r: 122.64,
        gradientTransform: "matrix(.9091 -.4166 .0629 .1373 -14.969 21.805)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E1F5FE",
        offset: 0.3342
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-33.88 51.29c-13.53 14.13-18.9 17.56-54.7 34.87-17.84 8.62-36.27 9.22-42.22 13.08-23.23 15.1-0.89 18.65-0.89 18.65h46.38l87.11-34.41-5.35-69.87c0 0.01-11.89 18.44-30.33 37.68z",
      clipPath: "url(#a)",
      fill: "url(#l)",
      stroke: "#B3E5FC",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10
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
          cx: -83.268,
          cy: 91.108,
          r: 157.91,
          gradientTransform: "matrix(.8866 -.4625 .2243 .4299 -29.874 13.428)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.2141
        }),
        _react2.default.createElement("stop", {
          stopColor: "#B3E5FC",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M-8,128h-128v-12.32c0,0,13.72-8.48,29.28-17.63c18.73-11,46.38-12.78,77-42.81 C-17.67,43.43,2.69,36.21,2.69,36.21L-8,128z",
        fill: "url(#k)"
      })
    ),
    _react2.default.createElement("polyline", {
      points: "-8 46.43 -8 128 -136 128 -136 115.68",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#94CDE8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m-95.1 122.28c25.82-11.27 51.64-22.54 77.47-33.81 3.68-1.6 7.35-3.21 11.03-4.81 3.74-1.63 4.52-7.04 2.69-10.26-2.19-3.86-6.57-4.3-10.26-2.69-25.83 11.26-51.65 22.53-77.47 33.8-3.68 1.6-7.35 3.21-11.03 4.81-3.74 1.63-4.52 7.04-2.69 10.26 2.2 3.86 6.57 4.31 10.26 2.7z",
        fill: "#B3E5FC"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: -114.36,
          x2: -38.06,
          y1: 101.33,
          y2: 99.943,
          gradientTransform: "matrix(.9988 -.0493 .0493 .9988 8.066 -5.0174)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FB8C00",
          offset: 0.1712
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F67F00",
          offset: 0.5625
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EF6C00",
          offset: 0.9831
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-32.54 92.03-64.6 27.02c-4.33 1.81-9.09-1.42-9-6.11v0c0.05-2.58 1.61-4.88 3.99-5.88l64.6-27.02c4.33-1.81 9.09 1.42 9 6.11v0c-0.05 2.58-1.61 4.88-3.99 5.88z",
        fill: "url(#j)",
        stroke: "#DB6300",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement("circle", {
        cx: -79.71,
        cy: 57.81,
        r: 6.85,
        fill: "#616161"
      }),
      _react2.default.createElement("path", {
        d: "m-104.08 71.03",
        fill: "none"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#616161"
        },
        _react2.default.createElement("rect", {
          transform: "matrix(.9131 .4076 -.4076 .9131 20.259 31.87)",
          x: -74.29,
          y: 56.73,
          width: 19.27,
          height: 13.49
        }),
        _react2.default.createElement("rect", {
          transform: "matrix(.2272 .9738 -.9738 .2272 34.14 112.15)",
          x: -63.79,
          y: 70.84,
          width: 20.4,
          height: 13.49
        }),
        _react2.default.createElement("circle", {
          cx: -55.92,
          cy: 67.33,
          r: 6.69
        }),
        _react2.default.createElement("circle", {
          cx: -73.57,
          cy: 59.55,
          r: 6.69
        })
      ),
      _react2.default.createElement(
        "g",
        {
          fill: "#616161"
        },
        _react2.default.createElement("rect", {
          transform: "matrix(.4851 .8744 -.8744 .4851 20.683 106.94)",
          x: -88.52,
          y: 63.52,
          width: 16.1,
          height: 15.03
        }),
        _react2.default.createElement("polygon", {
          points: "-88.83 99.2 -81.49 76.46 -68.62 80.45 -75.16 101.57"
        }),
        _react2.default.createElement("circle", {
          cx: -76.06,
          cy: 78.93,
          r: 7.59
        }),
        _react2.default.createElement("path", {
          d:
            "m-80.87 70.43c-3.6 2-8.13 0.7-10.13-2.9s-3.06-10.37 0.54-12.36 10.5 1.54 12.49 5.13c2 3.6 0.7 8.14-2.9 10.13z"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "i",
          x1: -54.104,
          x2: -42.856,
          y1: 55.277,
          y2: 55.277,
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
          "m-49.71 60.21c-1.76 0-3.33-1.06-3.99-2.69l-0.09-0.22c-0.43-1.07-0.42-2.23 0.03-3.29s1.28-1.88 2.35-2.31l2.55-1.03c0.52-0.21 1.06-0.31 1.61-0.31 1.76 0 3.33 1.06 3.99 2.69l0.09 0.22c0.43 1.07 0.42 2.23-0.03 3.29s-1.28 1.88-2.35 2.31l-2.55 1.03c-0.52 0.2-1.06 0.31-1.61 0.31z",
        fill: "url(#i)"
      }),
      _react2.default.createElement("path", {
        d:
          "m-47.25 50.85c1.56 0 2.94 0.93 3.53 2.38l0.09 0.22c0.38 0.94 0.37 1.98-0.03 2.91s-1.13 1.66-2.08 2.04l-2.55 1.03c-0.46 0.18-0.94 0.28-1.42 0.28-1.56 0-2.94-0.93-3.53-2.38l-0.09-0.22c-0.79-1.94 0.16-4.16 2.1-4.95l2.55-1.03c0.46-0.19 0.94-0.28 1.43-0.28m0-1c-0.6 0-1.21 0.11-1.8 0.35l-2.55 1.03c-2.46 0.99-3.65 3.79-2.65 6.25l0.09 0.22c0.76 1.87 2.55 3.01 4.45 3.01 0.6 0 1.21-0.11 1.8-0.35l2.55-1.03c2.46-0.99 3.65-3.79 2.65-6.25l-0.09-0.22c-0.75-1.88-2.55-3.01-4.45-3.01z",
        fill: "#E6A100"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "h",
          cx: 3.7361,
          cy: 34.613,
          r: 18.073,
          gradientTransform: "matrix(.9698 .2438 -.2438 .9698 -56.968 8.2789)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-49.4 50.21-3.43 8.89c-5.27-1.24-10.18-2.63-13.78-4.52l3.96-10.27c4.66 0.69 13.25 5.9 13.25 5.9z",
        fill: "url(#h)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "at",
          cx: -76.385,
          cy: 41.985,
          r: 18.142,
          gradientTransform: "matrix(.9991 -.043 .043 .9991 10.015 -2.7086)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-69.76 51.21 10.38-3.66c-1.16-5.49-2.17-10.95-5.13-16.77l-11.77 4.15 6.52 16.28z",
        fill: "url(#at)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "as",
          cx: 3.7361,
          cy: 34.507,
          r: 18.142,
          gradientTransform: "matrix(.9698 .2438 -.2438 .9698 -56.968 8.2789)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("circle", {
        cx: -64.66,
        cy: 49.44,
        r: 5.5,
        fill: "url(#as)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ar",
          cx: -81.868,
          cy: 32.079,
          r: 6.2386,
          gradientTransform: "matrix(.9991 -.043 .043 .9991 10.015 -2.7086)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("circle", {
        cx: -70.4,
        cy: 32.86,
        r: 6.24,
        fill: "url(#ar)"
      }),
      _react2.default.createElement("path", {
        d:
          "m-73.57 53.87c0.8 0 1.58 0.17 2.3 0.49l0.1 0.05c0.13 0.06 0.28 0.09 0.42 0.09h0.07l16.95 7.57c0.06 0.04 0.12 0.08 0.19 0.11 1.61 0.74 2.76 2.15 3.16 3.86 0.01 0.04 0.02 0.09 0.02 0.13l0.02 0.13c0.01 0.07 0.03 0.14 0.06 0.2l4.37 18.73-11.19 2.61-3.31-14.19c-0.33-1.39-1.3-2.58-2.61-3.16l-10.95-4.89c-0.13-0.06-0.27-0.09-0.41-0.09-0.27 0-0.54 0.11-0.74 0.32-0.29 0.32-0.35 0.78-0.14 1.16l4.3 7.74c1.09 1.95 1.73 3.63 1.35 5.49-0.01 0.03-0.02 0.05-0.02 0.08-0.04 0.18-0.08 0.36-0.14 0.55-0.06 0.18-0.12 0.36-0.19 0.53-0.01 0.03-0.02 0.05-0.03 0.08l-5.91 19.08-11.29 0.09-0.59-1.5 4.91-15.36c0.47-1.47 0.31-3.09-0.44-4.44l-6.69-12.04c-0.02-0.05-0.04-0.11-0.07-0.16-0.02-0.03-0.04-0.06-0.05-0.09-0.99-1.79-1.65-4.21-1.7-6.32-0.04-1.34 0.15-3.74 1.85-4.68 0.54-0.3 1.22-0.45 2.01-0.45 2.22 0 5.14 1.23 7.28 3.06 0.18 0.16 0.42 0.24 0.65 0.24 0.1 0 0.2-0.02 0.3-0.05 0.33-0.1 0.58-0.37 0.67-0.7 0.09-0.34 0.19-0.64 0.31-0.91 0.9-2.04 2.94-3.36 5.18-3.36m0-1c-2.56 0-5 1.48-6.11 3.96-0.16 0.35-0.27 0.71-0.36 1.06-2.17-1.86-5.32-3.3-7.93-3.3-0.92 0-1.77 0.18-2.49 0.58-3.6 2-2.53 8.77-0.54 12.36 0.02 0.03 0.04 0.07 0.06 0.1l-0.01 0.01 6.77 12.21c0.62 1.12 0.75 2.44 0.36 3.65l-5.02 15.7 0.97 2.47 12.7-0.1 6.13-19.78c0.08-0.2 0.16-0.4 0.22-0.61s0.11-0.42 0.16-0.63l0.03-0.1c0.46-2.23-0.32-4.15-1.46-6.18l-4.3-7.74 10.95 4.89c1.03 0.46 1.79 1.37 2.04 2.47l3.54 15.16 13.14-3.07-4.63-19.86h-0.01c-0.02-0.1-0.03-0.21-0.06-0.31-0.49-2.09-1.91-3.71-3.71-4.55l0.01-0.02-17.6-7.86-0.05 0.11c-0.03-0.01-0.06-0.03-0.09-0.05-0.87-0.39-1.8-0.57-2.71-0.57z",
        fill: "#47494D"
      }),
      _react2.default.createElement("path", {
        d:
          "m-49.4 50.21c-2.59-1.32-7.03-3.19-10.55-5.35-0.98-4.59-2.08-9.21-4.56-14.08l-11.77 4.15 6.22 15.53c0.36 1.92 1.71 3.48 3.48 4.14 3.6 1.88 8.5 3.26 13.75 4.5l3.43-8.89z",
        fill: "none",
        stroke: "#009984",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "aq",
          x1: -79.71,
          x2: -79.084,
          y1: 39.073,
          y2: 67.675,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0.1889
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.269
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.4598
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-76.1 29.98-8.89 0.33c-4.38 0.16-7.8 3.67-7.65 7.83l0.11 18.73c0.17 4.54 1.94 10.07 10.11 8.21 10.44-2.38 16.15-5.58 16.24-8.85 0.18-6.95-1.69-13.55-2.44-20.31-0.15-4.16-3.1-6.1-7.48-5.94z",
        fill: "url(#aq)",
        stroke: "#009984",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "ap",
          x1: -97.862,
          x2: -97.862,
          y1: 63.882,
          y2: 74.158,
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
          "m-98.95 74.16c-1.49 0-2.85-0.75-3.64-2l-0.13-0.2c-0.61-0.97-0.81-2.12-0.56-3.24s0.93-2.08 1.9-2.69l2.32-1.47c0.69-0.44 1.48-0.67 2.3-0.67 1.49 0 2.85 0.75 3.64 2l0.13 0.2c1.27 2 0.67 4.67-1.34 5.94l-2.32 1.47c-0.7 0.43-1.49 0.66-2.3 0.66z",
        fill: "url(#ap)"
      }),
      _react2.default.createElement("path", {
        d:
          "m-96.77 64.38c1.31 0 2.52 0.66 3.22 1.77l0.13 0.2c0.54 0.86 0.72 1.88 0.5 2.87s-0.82 1.84-1.68 2.38l-2.32 1.47c-0.61 0.39-1.31 0.59-2.03 0.59-1.31 0-2.52-0.66-3.22-1.77l-0.13-0.2c-0.54-0.86-0.72-1.88-0.5-2.87s0.82-1.84 1.68-2.38l2.32-1.47c0.61-0.38 1.32-0.59 2.03-0.59m0-1c-0.88 0-1.77 0.24-2.56 0.74l-2.32 1.47c-2.24 1.42-2.91 4.38-1.49 6.63l0.13 0.2c0.91 1.44 2.47 2.23 4.06 2.23 0.88 0 1.77-0.24 2.56-0.74l2.32-1.47c2.24-1.42 2.91-4.38 1.49-6.63l-0.13-0.2c-0.91-1.44-2.47-2.23-4.06-2.23z",
        fill: "#E6A100"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: -97.477,
          cy: 41.346,
          r: 26.835,
          gradientTransform: "matrix(1 .00027466 -.00027466 1 -5.6035 -3.2644)",
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
          "m-94.16 65.59-8.83 3.58c-2.74-4.18-4.8-8.56-6.13-13.15l10.2-4.13 4.76 13.7z",
        fill: "url(#d)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "f",
          cx: 2.4957,
          cy: 23.717,
          r: 26.835,
          gradientTransform: "matrix(.9338 .3578 -.3578 .9338 -91.129 17.184)",
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
          "m-108.34 50.66 8.34 7.18 11.98-12.8-9.46-8.14c-4.79 4.19-9.03 8.57-10.86 13.76z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("circle", {
        cx: -104.11,
        cy: 53.76,
        r: 5.5,
        fill: "url(#d)"
      }),
      _react2.default.createElement("circle", {
        cx: -92.75,
        cy: 40.96,
        r: 6.24,
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m-94.37 21.07-5.94-1.54c-1.42-0.37-3.35-1.63-2.56-3.71 0.29-0.75 1.22-0.67 1.22-0.67l7.08 2.99 0.2 2.93z",
        fill: "#757575"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "ao",
          x1: -35.509,
          x2: -35.509,
          y1: -231.69,
          y2: -210.37,
          gradientTransform: "matrix(.9623 -.272 .272 .9623 13.722 227.33)",
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
          "m-70.67 9.06c-3.46-4.05-9.97-4.72-15.09-3.25-7.08 2.04-9.72 8-8.58 15.06 0 0 1.07 4.62 1.3 5.86 0.02 0.08-0.52 0.12-0.8 0.29-0.63 0.39-0.92 1.16-0.71 1.87 0.77 2.53 2.34 9.37 9.28 7.99 4.43-0.88 14.49-2.56 14.49-2.56s-3.65-1.62 1.53-8.46c3.52-4.63 1.46-13.42-1.42-16.8z",
        fill: "url(#ao)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "an",
          x1: -95.651,
          x2: -67.358,
          y1: 24.986,
          y2: 16.989,
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
          "m-80.64 6.1c3.9 0 7.25 1.32 9.21 3.61 2.75 3.23 4.47 11.48 1.38 15.55-2.4 3.17-3.36 5.79-2.84 7.78 0.06 0.22 0.13 0.41 0.2 0.59-3.09 0.52-9.5 1.62-12.78 2.27-0.54 0.11-1.07 0.16-1.56 0.16-4.38 0-5.71-4.55-6.43-6.99l-0.14-0.47c-0.08-0.27 0.03-0.57 0.26-0.72 0.05-0.02 0.19-0.06 0.27-0.08 1.07-0.26 1.07-0.97 1.01-1.26-0.22-1.21-1.19-5.42-1.3-5.88-1.13-7.07 1.74-12.14 7.87-13.91 1.55-0.42 3.22-0.65 4.85-0.65m0-1c-1.75 0-3.5 0.25-5.11 0.72-7.08 2.04-9.72 8-8.58 15.06 0 0 1.07 4.62 1.3 5.86 0.02 0.08-0.52 0.12-0.8 0.29-0.63 0.39-0.92 1.16-0.71 1.87 0.7 2.3 2.06 8.17 7.52 8.17 0.54 0 1.13-0.06 1.75-0.18 4.43-0.88 14.49-2.56 14.49-2.56s-3.65-1.62 1.53-8.46c3.51-4.64 1.46-13.43-1.42-16.81-2.37-2.77-6.17-3.96-9.97-3.96z",
        fill: "url(#an)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "am",
          d:
            "m-91.27 30.18-3.25-0.13s0.73 1.25 1.29 2.5c1.14 2.57 3.28 5.19 7.96 4.33 0.42-0.08-2.98-5.73-2.98-5.73l-3.02-0.97z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "al"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#am"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#al)"
        },
        _react2.default.createElement("path", {
          d:
            "m-96.47 33.03c1.92 1.83 5.58 2.52 7.53 0.4 0.74-0.81-0.16-1.61-0.9-0.8-1.31 1.42-4.44 0.51-5.65-0.64-0.8-0.76-1.77 0.28-0.98 1.04z",
          fill: "#795548"
        })
      ),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9974 -.0714 .0714 .9974 -2.0991 -6.2921)",
        cx: -89.05,
        cy: 26.21,
        rx: 1.26,
        ry: 2.28,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m-90.41 23.2c-1.52 0.4-2-0.41-1.55-1.08 0.32-0.49 1.23-0.92 3.09-0.68 1.76 0.23 2.57 0.99 3.1 1.46 0.52 0.47 0.53 0.94 0.14 0.99-0.54 0.08-2.89-1.18-4.78-0.69z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ak",
          cx: -62.052,
          cy: -111.05,
          r: 14.656,
          gradientTransform: "matrix(1.0187 -.107 .1089 .9812 -9.0313 114.2)",
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
          "m-78.58 28.58 0.12-5.64s4.46 0.78 3.52 4.67c-0.64 2.64 1.21 5.44 2.42 5.64l0.7 0.18c1.07-3.96 5.87-5.36 6.22-15.64 0.3-8.92-6.99-12.92-14.48-13.02-8.59-0.11-15.57 5.51-14.66 13.24l6.69-0.2c4.13 0.1 6.23 10.59 9.47 10.77z",
        fill: "url(#ak)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "aj",
          d:
            "m-90.15 13.34 19.36 9.9-1.81 7.36s-1.12 1.81-0.91 2.1c0.35 0.47 1.69 0.74 1.69 0.74 1.07-3.96 5.87-5.36 6.22-15.64 0.3-8.92-6.99-12.92-14.48-13.02-8.59-0.11-15.57 5.51-14.66 13.24l2.07-0.06-0.22-1.91 2.74-2.71z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "ai"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#aj"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#ai)"
        },
        _react2.default.createElement("path", {
          d:
            "m-80.33 6.77h0.23c4.15 0.05 7.79 1.41 10 3.72 1.77 1.85 2.61 4.28 2.51 7.23-0.21 6.19-2.11 8.71-3.78 10.94-0.43 0.57-0.87 1.15-1.26 1.78-0.32-0.64-0.56-1.51-0.36-2.36 0.49-2.02-0.08-3.47-0.64-4.33-1.43-2.19-4.17-2.73-4.48-2.78l-2.29-0.4-0.05 2.33-0.02 0.69c-0.17-0.31-0.33-0.6-0.47-0.86-1.73-3.21-3.7-6.84-7.05-6.92h-0.05-0.05l-4.68 0.14c0.15-1.88 0.9-3.61 2.2-5.08 2.28-2.56 6.11-4.1 10.24-4.1m0-2c-8.48 0-15.31 5.59-14.4 13.24l6.69-0.2c4.12 0.09 6.22 10.59 9.46 10.77l0.12-5.64s4.46 0.78 3.52 4.67c-0.64 2.64 1.21 5.44 2.42 5.64l0.7 0.18c1.07-3.96 5.87-5.36 6.22-15.64 0.3-8.92-6.99-12.92-14.48-13.02h-0.25z",
          fill: "#452B22"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "ah",
          x1: -86.341,
          x2: -64.425,
          y1: 16.71,
          y2: 39.092,
          gradientTransform: "matrix(.9997 .0227 -.0227 .9997 -4.3867 -4.46)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FB8C00",
          offset: 0.1712
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F67F00",
          offset: 0.5625
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EF6C00",
          offset: 0.9831
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-83.5 37.38c-1.9 0-4.04-0.34-6.38-1.01-3.07-0.88-4.08-4.16-4.37-5.53-0.43-1.99-0.17-3.49 0.08-3.7 6.22-1.57 7.51-2.56 7.51-3.57 0.01-1.22-1.9-1.8-5.29-2.71-0.88-0.24-1.78-0.48-2.58-0.74-0.67-0.21-0.5-1.63-0.38-2.57 0.02-0.18 0.04-0.35 0.06-0.51 0.79-8.37 7.64-11.27 10.55-12.12 0.95-0.28 2.01-0.42 3.18-0.42 4.92 0 11.13 2.59 14.45 6.02 6.44 6.67 1.52 14.31-0.89 17.28-2.71 3.34-7.06 4.72-7.1 4.73-0.15 0.05-0.27 0.16-0.33 0.31-0.05 0.2-1.65 4.54-8.51 4.54z",
        fill: "url(#ah)"
      }),
      _react2.default.createElement("path", {
        d:
          "m-81.11 5c4.8 0 10.86 2.52 14.09 5.87 6.16 6.38 1.41 13.75-0.91 16.62-2.61 3.21-6.82 4.56-6.86 4.57-0.31 0.09-0.55 0.33-0.65 0.63-0.01 0.04-1.51 4.19-8.05 4.19-1.85 0-3.95-0.33-6.24-0.99-2.03-0.59-3.08-2.35-3.6-3.72-0.77-2.02-0.71-3.98-0.5-4.58 6.41-1.64 7.67-2.72 7.68-4.01 0.01-1.67-2.36-2.31-5.66-3.2-0.87-0.24-1.77-0.48-2.57-0.73-0.25-0.24-0.08-1.59-0.03-2.03 0.02-0.19 0.05-0.37 0.06-0.52 0.76-8.07 7.39-10.86 10.2-11.69 0.9-0.28 1.93-0.41 3.04-0.41m0-1c-1.17 0-2.3 0.14-3.32 0.44-1.62 0.48-10.01 3.07-10.91 12.56-0.1 1.07-0.57 3.21 0.67 3.6 5.1 1.63 13.83 2.66 0.33 6.08-1.28 0.32-0.99 8.63 4.33 10.17 2.56 0.74 4.71 1.03 6.51 1.03 7.33 0 8.99-4.87 8.99-4.87s4.5-1.39 7.34-4.89c4.02-4.96 6.57-12.03 0.86-17.94-3.3-3.43-9.57-6.18-14.8-6.18z",
        fill: "#DB6300"
      }),
      _react2.default.createElement("path", {
        d:
          "m-91.85 21.47 9.03 0.36c0.84 0.11 1.6 0.53 2.13 1.2 0.55 0.69 0.8 1.55 0.71 2.43-0.25 2.31-0.29 2.67-3.96 2.93-0.24 0.02-0.47 0.02-0.7 0.02-2.89 0-5.48-1.22-6.7-1.91l-0.51-5.03m-0.62-2.02c-0.87 0-1.54 0.57-1.47 1.27l0.69 6.97s3.87 2.72 8.59 2.72c0.28 0 0.56-0.01 0.85-0.03 5.09-0.36 5.5-1.8 5.81-4.71s-1.78-5.53-4.67-5.84l-9.72-0.38h-0.08z",
        fill: "#DB6300"
      }),
      _react2.default.createElement("path", {
        d:
          "m-85.45 30.29c-5.09 0.36-9.44-2.69-9.44-2.69l-0.69-6.97c-0.07-0.72 0.64-1.31 1.55-1.27l9.72 0.38c2.89 0.31 4.99 2.92 4.67 5.84-0.32 2.91-0.72 4.35-5.81 4.71z",
        fill: "#E3F2FD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "ag",
          x1: -83.167,
          x2: -74.503,
          y1: -12.314,
          y2: -12.314,
          gradientTransform: "matrix(1.4567 .1565 -.1243 1.1564 23.825 51.134)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#90CAF9",
          offset: 0.3652
        }),
        _react2.default.createElement("stop", {
          stopColor: "#42A5F5",
          offset: 0.9874
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-86.91 28.22c-3.48 0.31-8.12-2.05-8.12-2.05l-0.47-4.98s7.35 0.1 9.23 0.17c2.35 0.09 3.31 1.94 3.11 3.88-0.22 1.94-0.28 2.68-3.75 2.98z",
        fill: "url(#ag)"
      }),
      _react2.default.createElement("path", {
        d:
          "m-80.77 21.38c0.36 0.3 0.14 0.88-0.32 0.87-3.15-0.05-10.92-0.31-14.8-1.64-3.61-1.24-4.44-2.77-5.01-4.4-0.06-0.18-0.56-0.89-1.17-0.95-0.32-0.03 0.35-0.24 0.69-0.17 0.33 0.07 17.43 4.53 18.89 4.91 0.07 0.02 0.13 0.05 0.18 0.1l1.54 1.28z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement("path", {
        d:
          "m-78.54 106.45c-0.66 0-1.3-0.07-1.91-0.2-1.87-0.41-4.61-1.42-6.58-2.2-0.89-0.35-1.47-1.2-1.47-2.17v-1.75c0-0.47 0.34-0.87 0.81-0.95l13.23-1.8c2.45 0.36 3.33 2.41 2.87 6.61-0.03 0.28-0.21 0.54-0.47 0.68-1.22 0.67-3.73 1.78-6.48 1.78z",
        fill: "#4568AD"
      }),
      _react2.default.createElement("path", {
        d:
          "m-74.45 97.89c1.5 0.24 2.91 1.21 2.38 6.05-0.01 0.12-0.09 0.23-0.21 0.29-0.97 0.52-3.52 1.72-6.26 1.72-0.62 0-1.23-0.06-1.8-0.19-1.94-0.42-4.91-1.54-6.51-2.18-0.7-0.28-1.15-0.94-1.15-1.7v-1.75c0-0.23 0.16-0.42 0.37-0.45l13.18-1.79m0.01-1.01-13.31 1.81c-0.71 0.11-1.23 0.72-1.23 1.44v1.75c0 1.16 0.7 2.2 1.78 2.63 1.84 0.73 4.71 1.8 6.66 2.22 0.68 0.15 1.35 0.21 2.01 0.21 2.91 0 5.56-1.21 6.73-1.84 0.4-0.22 0.68-0.61 0.73-1.06 0.37-3.4 0.04-6.7-3.37-7.16z",
        fill: "#315499"
      }),
      _react2.default.createElement("path", {
        d:
          "m-45.96 92.39c-0.25 0-0.51-0.01-0.77-0.02-2.21-0.11-7.13-0.68-9.86-1-0.71-0.08-1.25-0.67-1.28-1.38l-0.17-3.29 12.47-2.06c3.06 0.44 6.33 2.48 6.39 5.44 0.01 0.28-0.13 0.55-0.37 0.69-1.01 0.59-3.17 1.62-6.41 1.62z",
        fill: "#4568AD"
      }),
      _react2.default.createElement("path", {
        d:
          "m-45.57 85.13c2.84 0.43 5.83 2.28 5.88 4.94 0 0.11-0.05 0.2-0.13 0.25-0.96 0.58-3.03 1.56-6.14 1.56-0.24 0-0.49-0.01-0.75-0.02-2.22-0.11-7.11-0.68-9.83-1-0.47-0.06-0.82-0.44-0.84-0.91l-0.14-2.85 11.95-1.97m-0.01-1.01-12.98 2.15 0.19 3.74c0.05 0.96 0.77 1.74 1.72 1.86 2.6 0.31 7.62 0.89 9.9 1.01 0.27 0.01 0.54 0.02 0.8 0.02 3.39 0 5.67-1.1 6.66-1.71 0.39-0.24 0.62-0.67 0.61-1.13-0.07-3.25-3.51-5.48-6.9-5.94z",
        fill: "#315499"
      }),
      _react2.default.createElement("path", {
        d:
          "m-56.51 26.73c-5.95 3.62-5.18 6.21-10.61 10.87-4.85 4.16-10.35 6.21-17.6 3.11-11.85-5.08-10.09-10.87-10.09-10.87s2.85 3.88 14.49 3.36c8.27-0.37 10.09-2.85 13.46-6.21 3.36-3.36 1.04-5.69 8.28-9.32 7.25-3.62 15.01-2.59 15.01-2.59l9.57 8.02s-16.56 0-22.51 3.63z",
        fill: "#039BE5"
      }),
      _react2.default.createElement("path", {
        d:
          "m-92.75 35.73c1.25 0 2.46 0.45 3.41 1.27 2.19 1.88 2.44 5.2 0.55 7.39-0.01 0.01-0.02 0.03-0.03 0.04l-9.63 10.28c-0.25 0.27-0.34 0.66-0.21 1.01l3.23 9.31-7.19 2.91c-2.45-3.86-4.3-7.9-5.5-12.01-0.01-0.12-0.04-0.24-0.1-0.35-1.9-3.84 4.35-11.77 11.39-17.93 0.04-0.03 0.07-0.06 0.1-0.1 1.01-1.16 2.46-1.82 3.98-1.82m0-1c-1.75 0-3.5 0.74-4.73 2.17-4.58 4-14.28 13.75-11.63 19.12l-0.02 0.01c1.32 4.59 3.38 8.97 6.13 13.15l8.83-3.58-3.55-10.21 9.69-10.35c2.25-2.61 1.95-6.55-0.66-8.8-1.17-1.02-2.62-1.51-4.06-1.51z",
        fill: "#009984"
      }),
      _react2.default.createElement("path", {
        d:
          "m-78.58 41.3c-2.4 0-4.74-0.49-6.96-1.46-8.98-3.93-9.46-8.44-9.28-10.13 1.43 0.93 5.29 2.82 13 2.82 0.71 0 1.45-0.02 2.23-0.05 7.13-0.32 8.87-2.22 11.27-4.86 0.45-0.49 0.92-1.01 1.46-1.56 1.19-1.19 1.74-2.11 2.23-2.92 0.9-1.51 1.61-2.7 6.26-5.02 4.42-2.21 9.02-2.67 12.11-2.67 1.25 0 2.14 0.08 2.47 0.12l8.43 7.06c-4.12 0.08-16.36 0.6-21.42 3.68-3.41 2.08-4.71 3.88-6.08 5.78-1.1 1.53-2.25 3.12-4.6 5.13-3.06 2.63-7.02 4.08-11.12 4.08z",
        fill: "#039BE5"
      }),
      _react2.default.createElement("path", {
        d:
          "m-46.25 15.94c1.07 0 1.88 0.06 2.27 0.1l7.3 6.12c-5.01 0.17-15.65 0.86-20.35 3.72-3.5 2.13-4.82 3.97-6.23 5.92-1.09 1.51-2.21 3.07-4.52 5.05-2.98 2.55-6.82 3.96-10.81 3.96-2.33 0-4.6-0.48-6.75-1.42-7.55-3.3-8.9-6.91-9.01-8.82 1.9 1.02 5.78 2.47 12.53 2.47 0.73 0 1.49-0.02 2.26-0.05 7.34-0.33 9.23-2.4 11.62-5.02 0.45-0.5 0.92-1.01 1.45-1.54 1.23-1.23 1.8-2.18 2.3-3.02 0.86-1.44 1.54-2.58 6.06-4.83 4.32-2.18 8.84-2.64 11.88-2.64m0-1c-2.9 0-7.72 0.42-12.33 2.73-7.25 3.62-5.25 4.68-8.62 8.04-3.36 3.36-4.13 5.9-12.4 6.27-0.77 0.03-1.51 0.05-2.21 0.05-9.93 0-13.33-3.19-13.33-3.19s-2.41 6.28 9.41 11.45c2.35 1.03 4.78 1.5 7.15 1.5 4.26 0 8.35-1.53 11.46-4.2 5.44-4.66 4.66-7.25 10.61-10.87s22.51-3.62 22.51-3.62l-9.58-8.02c0.01 0-1.02-0.14-2.67-0.14z",
        fill: "#0089CC"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#fff"
      },
      _react2.default.createElement("path", {
        d:
          "m-29.55 74.95c0.01-0.01 0.02-0.01 0.03-0.03 1.23-1.08 0.39-3.2-1.31-2.93-0.05 0-0.09 0.01-0.13 0.02-0.98 0.24-1.63 1.08-1.91 2.01-0.14 0.48-0.26 0.96-0.36 1.45-0.05 0.24-0.11 0.49-0.13 0.73-0.01 0.14 0.06 0.39 0.22 0.42 0.23 0.05 0.65-0.14 0.87-0.22 0.97-0.31 1.93-0.76 2.72-1.45z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-17.53 63.04c0.01-0.01 0.01-0.02 0.03-0.03 1.1-1.22 3.21-0.35 2.91 1.35 0 0.04-0.02 0.09-0.03 0.13-0.25 0.98-1.1 1.62-2.04 1.89-0.48 0.14-0.97 0.25-1.46 0.34-0.24 0.05-0.49 0.1-0.73 0.12-0.14 0.01-0.39-0.07-0.42-0.23-0.05-0.23 0.15-0.65 0.23-0.86 0.35-0.97 0.81-1.93 1.51-2.71z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-35.5 62.29c0.01-0.01 0.01-0.02 0.01-0.04 0.68-1.69-1.22-3.38-2.77-2.25l-0.12 0.09c-0.85 0.72-1.09 1.89-0.9 2.96 0.1 0.55 0.22 1.09 0.37 1.62 0.08 0.26 0.14 0.54 0.24 0.79 0.06 0.14 0.26 0.35 0.43 0.31 0.26-0.06 0.57-0.46 0.75-0.65 0.83-0.82 1.56-1.75 1.99-2.83z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-22.15 53c0.01-0.01 0.01-0.02 0.02-0.03 1.1-1.16 0.1-3.14-1.53-2.73-0.04 0.01-0.09 0.02-0.13 0.04-0.93 0.31-1.49 1.19-1.68 2.11-0.1 0.48-0.17 0.96-0.23 1.44-0.02 0.24-0.06 0.48-0.06 0.72 0 0.13 0.1 0.37 0.25 0.39 0.23 0.03 0.61-0.19 0.82-0.28 0.94-0.41 1.84-0.93 2.54-1.66z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-23.41 62.13 0.03-0.03c1.37-1.48 0.07-3.96-1.97-3.41-0.05 0.01-0.11 0.03-0.16 0.05-1.16 0.41-1.86 1.53-2.08 2.7-0.11 0.6-0.2 1.21-0.25 1.82-0.03 0.3-0.07 0.61-0.07 0.91 0.01 0.16 0.13 0.46 0.32 0.48 0.29 0.04 0.78-0.25 1.03-0.37 1.16-0.54 2.28-1.21 3.15-2.15z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "ae",
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
        xlinkHref: "#ae"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ad",
        cx: 25.719,
        cy: 78.534,
        r: 122.64,
        gradientTransform: "matrix(.9091 -.4166 .0629 .1373 -2.6041 78.464)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E1F5FE",
        offset: 0.3342
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102.12 51.29c-13.53 14.13-18.9 17.56-54.7 34.87-17.84 8.62-36.27 9.22-42.22 13.08-23.23 15.1-0.89 18.65-0.89 18.65h46.38l87.11-34.41-5.35-69.87c0 0.01-11.89 18.44-30.33 37.68z",
      clipPath: "url(#b)",
      fill: "url(#ad)",
      stroke: "#B3E5FC",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ac",
          cx: 52.732,
          cy: 91.108,
          r: 157.91,
          gradientTransform: "matrix(.8866 -.4625 .2243 .4299 -14.453 76.33)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.2141
        }),
        _react2.default.createElement("stop", {
          stopColor: "#B3E5FC",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M128,128H0v-12.32c0,0,13.72-8.48,29.28-17.63c18.73-11,46.38-12.78,77-42.81 c12.05-11.81,32.41-19.03,32.41-19.03L128,128z",
        fill: "url(#ac)"
      })
    ),
    _react2.default.createElement("polyline", {
      points: "128 46.43 128 128 0 128 0 115.68",
      clipPath: "url(#b)",
      fill: "none",
      stroke: "#94CDE8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m40.9 122.28c25.82-11.27 51.64-22.54 77.47-33.81 3.68-1.6 7.35-3.21 11.03-4.81 3.74-1.63 4.52-7.04 2.69-10.26-2.19-3.86-6.57-4.3-10.26-2.69-25.83 11.26-51.65 22.53-77.47 33.8-3.68 1.6-7.35 3.21-11.03 4.81-3.74 1.63-4.52 7.04-2.69 10.26 2.2 3.86 6.57 4.31 10.26 2.7z",
        fill: "#B3E5FC"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "ab",
          x1: 21.47,
          x2: 97.774,
          y1: 108.04,
          y2: 106.65,
          gradientTransform: "matrix(.9988 -.0493 .0493 .9988 8.066 -5.0174)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FB8C00",
          offset: 0.1712
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F67F00",
          offset: 0.5625
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EF6C00",
          offset: 0.9831
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m103.46 92.03-64.6 27.02c-4.33 1.81-9.09-1.42-9-6.11v0c0.05-2.58 1.61-4.88 3.99-5.88l64.6-27.02c4.33-1.81 9.09 1.42 9 6.11v0c-0.05 2.58-1.61 4.88-3.99 5.88z",
        fill: "url(#ab)",
        stroke: "#DB6300",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement("circle", {
        cx: 56.29,
        cy: 57.81,
        r: 6.85,
        fill: "#616161"
      }),
      _react2.default.createElement("path", {
        d: "m31.92 71.03",
        fill: "none"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#616161"
        },
        _react2.default.createElement("rect", {
          transform: "matrix(.9131 .4076 -.4076 .9131 32.072 -23.569)",
          x: 61.71,
          y: 56.73,
          width: 19.27,
          height: 13.49
        }),
        _react2.default.createElement("rect", {
          transform: "matrix(.2272 .9738 -.9738 .2272 139.24 -20.297)",
          x: 72.21,
          y: 70.84,
          width: 20.4,
          height: 13.49
        }),
        _react2.default.createElement("circle", {
          cx: 80.08,
          cy: 67.33,
          r: 6.69
        }),
        _react2.default.createElement("circle", {
          cx: 62.43,
          cy: 59.55,
          r: 6.69
        })
      ),
      _react2.default.createElement(
        "g",
        {
          fill: "#616161"
        },
        _react2.default.createElement("rect", {
          transform: "matrix(.4851 .8744 -.8744 .4851 90.703 -11.987)",
          x: 47.48,
          y: 63.52,
          width: 16.1,
          height: 15.03
        }),
        _react2.default.createElement("polygon", {
          points: "47.17 99.2 54.51 76.46 67.38 80.45 60.84 101.57"
        }),
        _react2.default.createElement("circle", {
          cx: 59.94,
          cy: 78.93,
          r: 7.59
        }),
        _react2.default.createElement("path", {
          d:
            "m55.13 70.43c-3.6 2-8.13 0.7-10.13-2.9s-3.06-10.37 0.54-12.36 10.5 1.54 12.49 5.13c2 3.6 0.7 8.14-2.9 10.13z"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "aa",
          x1: 81.896,
          x2: 93.144,
          y1: 55.277,
          y2: 55.277,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m86.29 60.21c-1.76 0-3.33-1.06-3.99-2.69l-0.09-0.22c-0.43-1.07-0.42-2.23 0.03-3.29s1.28-1.88 2.35-2.31l2.55-1.03c0.52-0.21 1.06-0.31 1.61-0.31 1.76 0 3.33 1.06 3.99 2.69l0.09 0.22c0.43 1.07 0.42 2.23-0.03 3.29s-1.28 1.88-2.35 2.31l-2.55 1.03c-0.52 0.2-1.06 0.31-1.61 0.31z",
        fill: "url(#aa)"
      }),
      _react2.default.createElement("path", {
        d:
          "m88.75 50.85c1.56 0 2.94 0.93 3.53 2.38l0.09 0.22c0.79 1.94-0.16 4.16-2.1 4.95l-2.55 1.03c-0.46 0.18-0.94 0.28-1.42 0.28-1.56 0-2.94-0.93-3.53-2.38l-0.09-0.22c-0.38-0.94-0.37-1.98 0.03-2.91s1.13-1.66 2.08-2.04l2.55-1.03c0.44-0.19 0.92-0.28 1.41-0.28m0-1c-0.6 0-1.21 0.11-1.8 0.35l-2.55 1.03c-2.46 0.99-3.65 3.79-2.65 6.25l0.09 0.22c0.76 1.87 2.55 3.01 4.45 3.01 0.6 0 1.21-0.11 1.8-0.35l2.55-1.03c2.46-0.99 3.65-3.79 2.65-6.25l-0.09-0.22c-0.75-1.88-2.55-3.01-4.45-3.01z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "g",
          cx: 135.63,
          cy: 1.4621,
          r: 18.073,
          gradientTransform: "matrix(.9698 .2438 -.2438 .9698 -56.968 8.2789)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m86.6 50.21-3.43 8.89c-5.27-1.24-10.18-2.63-13.78-4.52l3.96-10.27c4.66 0.69 13.25 5.9 13.25 5.9z",
        fill: "url(#g)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "z",
          cx: 59.489,
          cy: 47.831,
          r: 18.142,
          gradientTransform: "matrix(.9991 -.043 .043 .9991 10.015 -2.7086)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m66.24 51.21 10.38-3.66c-1.16-5.49-2.17-10.95-5.13-16.77l-11.77 4.15 6.52 16.28z",
        fill: "url(#z)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "y",
          cx: 135.63,
          cy: 1.3561,
          r: 18.142,
          gradientTransform: "matrix(.9698 .2438 -.2438 .9698 -56.968 8.2789)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("circle", {
        cx: 71.34,
        cy: 49.44,
        r: 5.5,
        fill: "url(#y)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "x",
          cx: 54.007,
          cy: 37.925,
          r: 6.2386,
          gradientTransform: "matrix(.9991 -.043 .043 .9991 10.015 -2.7086)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.1879
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.6363
        })
      ),
      _react2.default.createElement("circle", {
        cx: 65.6,
        cy: 32.86,
        r: 6.24,
        fill: "url(#x)"
      }),
      _react2.default.createElement("path", {
        d:
          "m62.43 53.87c0.8 0 1.58 0.17 2.3 0.49l0.1 0.05c0.13 0.06 0.28 0.09 0.42 0.09h0.07l16.95 7.57c0.06 0.04 0.12 0.08 0.19 0.11 1.61 0.74 2.76 2.15 3.16 3.86 0.01 0.04 0.02 0.09 0.02 0.13l0.02 0.13c0.01 0.07 0.03 0.14 0.06 0.2l4.37 18.73-11.19 2.62-3.31-14.19c-0.33-1.39-1.3-2.58-2.61-3.16l-10.95-4.89c-0.13-0.06-0.27-0.09-0.41-0.09-0.27 0-0.54 0.11-0.74 0.32-0.29 0.32-0.35 0.78-0.14 1.16l4.3 7.74c1.09 1.95 1.73 3.63 1.35 5.49-0.01 0.03-0.02 0.05-0.02 0.08-0.04 0.18-0.08 0.36-0.14 0.55-0.06 0.18-0.12 0.36-0.19 0.53-0.01 0.03-0.02 0.05-0.03 0.08l-5.91 19.08-11.29 0.09-0.59-1.5 4.91-15.36c0.47-1.47 0.31-3.09-0.44-4.44l-6.69-12.05c-0.02-0.05-0.04-0.11-0.07-0.16-0.02-0.03-0.04-0.06-0.05-0.09-0.99-1.79-1.65-4.21-1.7-6.32-0.04-1.34 0.15-3.74 1.85-4.68 0.54-0.3 1.22-0.45 2.01-0.45 2.22 0 5.14 1.23 7.28 3.06 0.18 0.16 0.42 0.24 0.65 0.24 0.1 0 0.2-0.02 0.3-0.05 0.33-0.1 0.58-0.37 0.67-0.7 0.09-0.34 0.19-0.64 0.31-0.91 0.9-2.04 2.94-3.36 5.18-3.36m0-1c-2.56 0-5 1.48-6.11 3.96-0.16 0.35-0.27 0.71-0.36 1.06-2.17-1.86-5.32-3.3-7.93-3.3-0.92 0-1.77 0.18-2.49 0.58-3.6 2-2.53 8.77-0.54 12.36 0.02 0.03 0.04 0.07 0.06 0.1l-0.01 0.01 6.77 12.21c0.62 1.12 0.75 2.44 0.36 3.65l-5.02 15.7 0.97 2.47 12.7-0.1 6.13-19.78c0.08-0.2 0.16-0.4 0.22-0.61s0.11-0.42 0.16-0.63l0.03-0.1c0.46-2.23-0.32-4.15-1.46-6.18l-4.3-7.74 10.95 4.89c1.03 0.46 1.79 1.37 2.04 2.47l3.54 15.16 13.14-3.07-4.63-19.86h-0.01c-0.02-0.1-0.03-0.21-0.06-0.31-0.49-2.09-1.91-3.71-3.71-4.55l0.01-0.02-17.6-7.86-0.05 0.11c-0.03-0.01-0.06-0.03-0.09-0.05-0.87-0.39-1.8-0.57-2.71-0.57z",
        fill: "#47494D"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.6 50.21c-2.59-1.32-7.03-3.19-10.55-5.35-0.98-4.59-2.08-9.21-4.56-14.08l-11.77 4.15 6.22 15.53c0.36 1.92 1.71 3.48 3.48 4.14 3.6 1.88 8.5 3.26 13.75 4.5l3.43-8.89z",
        fill: "none",
        stroke: "#009984",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "w",
          x1: 56.29,
          x2: 56.916,
          y1: 39.073,
          y2: 67.675,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 0.1889
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.269
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0.4598
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m59.9 29.98-8.89 0.33c-4.38 0.16-7.8 3.67-7.65 7.83l0.11 18.73c0.17 4.54 1.94 10.07 10.11 8.21 10.44-2.38 16.15-5.58 16.24-8.85 0.18-6.95-1.69-13.55-2.44-20.31-0.15-4.16-3.1-6.1-7.48-5.94z",
        fill: "url(#w)",
        stroke: "#009984",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "v",
          x1: 38.138,
          x2: 38.138,
          y1: 63.882,
          y2: 74.158,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m37.05 74.16c-1.49 0-2.85-0.75-3.64-2l-0.13-0.2c-0.61-0.97-0.81-2.12-0.56-3.24s0.93-2.08 1.9-2.69l2.32-1.47c0.69-0.44 1.48-0.67 2.3-0.67 1.49 0 2.85 0.75 3.64 2l0.13 0.2c1.27 2 0.67 4.67-1.34 5.94l-2.32 1.47c-0.7 0.43-1.49 0.66-2.3 0.66z",
        fill: "url(#v)"
      }),
      _react2.default.createElement("path", {
        d:
          "m39.23 64.38c1.31 0 2.52 0.66 3.22 1.77l0.13 0.2c0.54 0.86 0.72 1.88 0.5 2.87s-0.82 1.84-1.68 2.38l-2.32 1.47c-0.61 0.39-1.31 0.59-2.03 0.59-1.31 0-2.52-0.66-3.22-1.77l-0.13-0.2c-1.12-1.77-0.59-4.12 1.18-5.25l2.32-1.47c0.61-0.38 1.32-0.59 2.03-0.59m0-1c-0.88 0-1.77 0.24-2.56 0.74l-2.32 1.47c-2.24 1.42-2.91 4.38-1.49 6.63l0.13 0.2c0.91 1.44 2.47 2.23 4.06 2.23 0.88 0 1.77-0.24 2.56-0.74l2.32-1.47c2.24-1.42 2.91-4.38 1.49-6.63l-0.13-0.2c-0.91-1.44-2.47-2.23-4.06-2.23z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 38.523,
          cy: 41.309,
          r: 26.835,
          gradientTransform: "matrix(1 .00027466 -.00027466 1 -5.6035 -3.2644)",
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
          "m41.84 65.59-8.83 3.58c-2.74-4.18-4.8-8.56-6.13-13.15l10.2-4.13 4.76 13.7z",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "e",
          cx: 129.49,
          cy: -24.944,
          r: 26.835,
          gradientTransform: "matrix(.9338 .3578 -.3578 .9338 -91.129 17.184)",
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
          "m27.66 50.66 8.34 7.17 11.98-12.8-9.46-8.14c-4.79 4.2-9.03 8.58-10.86 13.77z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("circle", {
        cx: 31.89,
        cy: 53.76,
        r: 5.5,
        fill: "url(#c)"
      }),
      _react2.default.createElement("circle", {
        cx: 43.25,
        cy: 40.96,
        r: 6.24,
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m41.63 21.07-5.94-1.54c-1.42-0.37-3.35-1.63-2.56-3.71 0.29-0.75 1.22-0.67 1.22-0.67l7.08 2.99 0.2 2.93z",
        fill: "#757575"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "u",
          x1: 95.363,
          x2: 95.363,
          y1: -194.7,
          y2: -173.38,
          gradientTransform: "matrix(.9623 -.272 .272 .9623 13.722 227.33)",
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
          "m65.33 9.06c-3.46-4.05-9.97-4.72-15.09-3.25-7.08 2.04-9.72 8-8.58 15.06 0 0 1.07 4.62 1.3 5.86 0.02 0.08-0.52 0.12-0.8 0.29-0.63 0.39-0.92 1.16-0.71 1.87 0.77 2.53 2.34 9.37 9.28 7.99 4.43-0.88 14.49-2.56 14.49-2.56s-3.65-1.62 1.53-8.46c3.52-4.63 1.46-13.42-1.42-16.8z",
        fill: "url(#u)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "t",
          x1: 40.349,
          x2: 68.642,
          y1: 24.986,
          y2: 16.989,
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
          "m55.36 6.1c3.9 0 7.25 1.32 9.21 3.61 2.75 3.23 4.47 11.48 1.38 15.55-2.4 3.17-3.36 5.79-2.84 7.78 0.06 0.22 0.13 0.41 0.2 0.59-3.09 0.52-9.5 1.62-12.78 2.27-0.54 0.11-1.07 0.16-1.56 0.16-4.38 0-5.71-4.55-6.43-6.99l-0.14-0.47c-0.08-0.27 0.03-0.57 0.26-0.72 0.05-0.02 0.19-0.06 0.27-0.08 1.07-0.26 1.07-0.97 1.01-1.26-0.22-1.21-1.19-5.42-1.3-5.88-1.13-7.07 1.74-12.14 7.87-13.91 1.55-0.42 3.22-0.65 4.85-0.65m0-1c-1.75 0-3.5 0.25-5.11 0.72-7.08 2.04-9.72 8-8.58 15.06 0 0 1.07 4.62 1.3 5.86 0.02 0.08-0.52 0.12-0.8 0.29-0.63 0.39-0.92 1.16-0.71 1.87 0.7 2.3 2.06 8.17 7.52 8.17 0.54 0 1.13-0.06 1.75-0.18 4.43-0.88 14.49-2.56 14.49-2.56s-3.65-1.62 1.53-8.46c3.51-4.64 1.46-13.43-1.42-16.81-2.37-2.77-6.17-3.96-9.97-3.96z",
        fill: "url(#t)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "s",
          d:
            "m44.73 30.18-3.25-0.13s0.73 1.25 1.29 2.5c1.14 2.57 3.28 5.19 7.96 4.33 0.42-0.08-2.98-5.73-2.98-5.73l-3.02-0.97z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "r"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#s"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#r)"
        },
        _react2.default.createElement("path", {
          d:
            "m39.53 33.03c1.92 1.83 5.58 2.52 7.53 0.4 0.74-0.81-0.16-1.61-0.9-0.8-1.31 1.42-4.44 0.51-5.65-0.64-0.8-0.76-1.77 0.28-0.98 1.04z",
          fill: "#795548"
        })
      ),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9974 -.0714 .0714 .9974 -1.7519 3.4197)",
        cx: 46.95,
        cy: 26.21,
        rx: 1.26,
        ry: 2.28,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m45.59 23.2c-1.52 0.4-2-0.41-1.55-1.08 0.32-0.49 1.23-0.92 3.09-0.68 1.76 0.23 2.57 0.99 3.1 1.46 0.52 0.47 0.53 0.94 0.14 0.99-0.54 0.08-2.89-1.18-4.78-0.69z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "q",
          cx: 69.913,
          cy: -96.646,
          r: 14.656,
          gradientTransform: "matrix(1.0187 -.107 .1089 .9812 -9.0325 114.19)",
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
          "m57.42 28.58 0.12-5.64s4.46 0.78 3.52 4.67c-0.64 2.64 1.21 5.44 2.42 5.64l0.7 0.18c1.07-3.96 5.87-5.36 6.22-15.64 0.3-8.92-6.99-12.92-14.48-13.02-8.59-0.11-15.57 5.51-14.66 13.24l6.69-0.2c4.13 0.1 6.23 10.59 9.47 10.77z",
        fill: "url(#q)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "p",
          d:
            "m45.85 13.34 19.36 9.9-1.81 7.36s-1.12 1.81-0.91 2.1c0.35 0.47 1.69 0.74 1.69 0.74 1.07-3.96 5.87-5.36 6.22-15.64 0.3-8.92-6.99-12.92-14.48-13.02-8.59-0.11-15.57 5.51-14.66 13.24l2.07-0.06-0.22-1.91 2.74-2.71z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "o"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#p"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#o)"
        },
        _react2.default.createElement("path", {
          d:
            "m55.67 6.77h0.23c4.15 0.05 7.79 1.41 10 3.72 1.77 1.85 2.61 4.28 2.51 7.23-0.21 6.19-2.11 8.71-3.78 10.94-0.43 0.57-0.87 1.15-1.26 1.78-0.32-0.64-0.56-1.51-0.36-2.36 0.49-2.02-0.08-3.47-0.64-4.33-1.43-2.19-4.17-2.73-4.48-2.78l-2.29-0.4-0.05 2.33-0.02 0.69c-0.17-0.31-0.33-0.6-0.47-0.86-1.73-3.21-3.7-6.84-7.05-6.92h-0.05-0.05l-4.68 0.14c0.15-1.88 0.9-3.61 2.2-5.08 2.28-2.56 6.11-4.1 10.24-4.1m0-2c-8.48 0-15.31 5.59-14.4 13.24l6.69-0.2c4.12 0.09 6.22 10.59 9.46 10.77l0.12-5.64s4.46 0.78 3.52 4.67c-0.64 2.64 1.21 5.44 2.42 5.64l0.7 0.18c1.07-3.96 5.87-5.36 6.22-15.64 0.3-8.92-6.99-12.92-14.48-13.02h-0.25z",
          fill: "#452B22"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 49.624,
          x2: 71.539,
          y1: 13.62,
          y2: 36.001,
          gradientTransform: "matrix(.9997 .0227 -.0227 .9997 -4.3867 -4.46)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FB8C00",
          offset: 0.1712
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F67F00",
          offset: 0.5625
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EF6C00",
          offset: 0.9831
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m52.5 37.38c-1.9 0-4.04-0.34-6.38-1.01-3.07-0.88-4.08-4.16-4.37-5.53-0.43-1.99-0.17-3.49 0.08-3.7 6.22-1.57 7.51-2.56 7.51-3.57 0.01-1.22-1.9-1.8-5.29-2.71-0.88-0.24-1.78-0.48-2.58-0.74-0.67-0.21-0.5-1.63-0.38-2.57 0.02-0.18 0.04-0.35 0.06-0.51 0.8-8.37 7.65-11.26 10.56-12.12 0.95-0.28 2.01-0.42 3.18-0.42 4.92 0 11.13 2.59 14.45 6.02 6.44 6.67 1.52 14.31-0.89 17.28-2.71 3.34-7.06 4.72-7.1 4.73-0.15 0.05-0.27 0.16-0.33 0.31-0.06 0.2-1.66 4.54-8.52 4.54z",
        fill: "url(#n)"
      }),
      _react2.default.createElement("path", {
        d:
          "m54.89 5c4.8 0 10.86 2.52 14.09 5.87 6.16 6.38 1.41 13.75-0.91 16.62-2.61 3.21-6.82 4.56-6.86 4.57-0.31 0.09-0.55 0.33-0.65 0.63-0.01 0.04-1.51 4.19-8.05 4.19-1.85 0-3.95-0.33-6.24-0.99-2.03-0.59-3.08-2.35-3.6-3.72-0.77-2.02-0.71-3.98-0.5-4.58 6.41-1.64 7.67-2.72 7.68-4.01 0.01-1.67-2.36-2.31-5.66-3.2-0.87-0.24-1.77-0.48-2.57-0.73-0.25-0.24-0.08-1.59-0.03-2.03 0.02-0.19 0.05-0.37 0.06-0.52 0.76-8.07 7.39-10.86 10.2-11.69 0.9-0.28 1.93-0.41 3.04-0.41m0-1c-1.17 0-2.3 0.14-3.32 0.44-1.62 0.48-10.01 3.07-10.91 12.56-0.1 1.07-0.57 3.21 0.67 3.6 5.1 1.63 13.83 2.66 0.33 6.08-1.28 0.32-0.99 8.63 4.33 10.17 2.56 0.74 4.71 1.03 6.51 1.03 7.33 0 8.99-4.87 8.99-4.87s4.5-1.39 7.34-4.89c4.02-4.96 6.57-12.03 0.86-17.94-3.3-3.43-9.57-6.18-14.8-6.18z",
        fill: "#DB6300"
      }),
      _react2.default.createElement("path", {
        d:
          "m44.15 21.47 9.03 0.36c0.84 0.11 1.6 0.53 2.13 1.2 0.55 0.69 0.8 1.55 0.71 2.43-0.25 2.31-0.29 2.67-3.96 2.93-0.24 0.02-0.47 0.02-0.7 0.02-2.89 0-5.48-1.22-6.7-1.91l-0.51-5.03m-0.62-2.02c-0.87 0-1.54 0.57-1.47 1.27l0.69 6.97s3.87 2.72 8.59 2.72c0.28 0 0.56-0.01 0.85-0.03 5.09-0.36 5.5-1.8 5.81-4.71s-1.78-5.53-4.67-5.84l-9.72-0.38h-0.08z",
        fill: "#DB6300"
      }),
      _react2.default.createElement("path", {
        d:
          "m50.55 30.29c-5.09 0.36-9.44-2.69-9.44-2.69l-0.69-6.97c-0.07-0.72 0.64-1.31 1.55-1.27l9.72 0.38c2.89 0.31 4.99 2.92 4.67 5.84-0.32 2.91-0.72 4.35-5.81 4.71z",
        fill: "#E3F2FD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "m",
          x1: 9.1277,
          x2: 17.792,
          y1: -24.808,
          y2: -24.808,
          gradientTransform: "matrix(1.4567 .1565 -.1243 1.1564 23.825 51.134)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#90CAF9",
          offset: 0.3652
        }),
        _react2.default.createElement("stop", {
          stopColor: "#42A5F5",
          offset: 0.9874
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m49.09 28.22c-3.48 0.31-8.12-2.05-8.12-2.05l-0.47-4.98s7.35 0.1 9.23 0.17c2.35 0.09 3.31 1.94 3.11 3.88-0.22 1.94-0.28 2.68-3.75 2.98z",
        fill: "url(#m)"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.23 21.38c0.36 0.3 0.14 0.88-0.32 0.87-3.15-0.05-10.92-0.31-14.8-1.64-3.61-1.24-4.44-2.77-5.01-4.4-0.06-0.18-0.56-0.89-1.17-0.95-0.32-0.03 0.35-0.24 0.69-0.17 0.33 0.07 17.43 4.53 18.89 4.91 0.07 0.02 0.13 0.05 0.18 0.1l1.54 1.28z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.46 106.45c-0.66 0-1.3-0.07-1.91-0.2-1.87-0.41-4.61-1.42-6.58-2.2-0.89-0.35-1.47-1.2-1.47-2.17v-1.75c0-0.47 0.34-0.87 0.81-0.95l13.23-1.8c2.45 0.36 3.33 2.41 2.87 6.61-0.03 0.28-0.21 0.54-0.47 0.68-1.22 0.67-3.73 1.78-6.48 1.78z",
        fill: "#4568AD"
      }),
      _react2.default.createElement("path", {
        d:
          "m61.55 97.89c1.5 0.24 2.91 1.21 2.38 6.05-0.01 0.12-0.09 0.23-0.21 0.29-0.97 0.52-3.52 1.72-6.26 1.72-0.62 0-1.23-0.06-1.8-0.19-1.94-0.42-4.91-1.54-6.51-2.18-0.7-0.28-1.15-0.94-1.15-1.7v-1.75c0-0.23 0.16-0.42 0.37-0.45l13.18-1.79m0.01-1.01-13.31 1.81c-0.71 0.11-1.23 0.72-1.23 1.44v1.75c0 1.16 0.7 2.2 1.78 2.63 1.84 0.73 4.71 1.8 6.66 2.22 0.68 0.15 1.35 0.21 2.01 0.21 2.91 0 5.56-1.21 6.73-1.84 0.4-0.22 0.68-0.61 0.73-1.06 0.37-3.4 0.04-6.7-3.37-7.16z",
        fill: "#315499"
      }),
      _react2.default.createElement("path", {
        d:
          "m90.04 92.39c-0.25 0-0.51-0.01-0.77-0.02-2.21-0.11-7.13-0.68-9.86-1-0.71-0.08-1.25-0.67-1.28-1.38l-0.17-3.29 12.47-2.06c3.06 0.44 6.33 2.48 6.39 5.44 0.01 0.28-0.13 0.55-0.37 0.69-1.01 0.59-3.17 1.62-6.41 1.62z",
        fill: "#4568AD"
      }),
      _react2.default.createElement("path", {
        d:
          "m90.43 85.13c2.84 0.43 5.83 2.28 5.88 4.94 0 0.11-0.05 0.2-0.13 0.25-0.96 0.58-3.03 1.56-6.14 1.56-0.24 0-0.49-0.01-0.75-0.02-2.22-0.11-7.11-0.68-9.83-1-0.47-0.06-0.82-0.44-0.84-0.91l-0.14-2.85 11.95-1.97m-0.01-1.01-12.98 2.15 0.19 3.73c0.05 0.96 0.77 1.74 1.72 1.86 2.6 0.31 7.62 0.89 9.9 1.01 0.27 0.01 0.54 0.02 0.8 0.02 3.39 0 5.67-1.1 6.66-1.71 0.39-0.24 0.62-0.67 0.61-1.13-0.07-3.24-3.51-5.47-6.9-5.93z",
        fill: "#315499"
      }),
      _react2.default.createElement("path", {
        d:
          "m79.49 26.73c-5.95 3.62-5.18 6.21-10.61 10.87-4.85 4.16-10.35 6.21-17.6 3.11-11.85-5.08-10.09-10.87-10.09-10.87s2.85 3.88 14.49 3.36c8.27-0.37 10.09-2.85 13.46-6.21s1.04-5.69 8.28-9.32c7.25-3.62 15.01-2.59 15.01-2.59l9.57 8.02s-16.56 0-22.51 3.63z",
        fill: "#039BE5"
      }),
      _react2.default.createElement("path", {
        d:
          "m43.25 35.73c1.25 0 2.46 0.45 3.41 1.27 2.19 1.88 2.44 5.2 0.55 7.39-0.01 0.01-0.02 0.03-0.03 0.04l-9.62 10.27c-0.25 0.27-0.34 0.66-0.21 1.01l3.23 9.31-7.19 2.91c-2.45-3.86-4.3-7.9-5.5-12.01-0.01-0.12-0.04-0.24-0.1-0.35-1.9-3.84 4.35-11.77 11.39-17.93 0.04-0.03 0.07-0.06 0.1-0.1 1-1.15 2.45-1.81 3.97-1.81m0-1c-1.75 0-3.5 0.74-4.73 2.17-4.58 4-14.28 13.75-11.63 19.12l-0.02 0.01c1.32 4.59 3.38 8.97 6.13 13.15l8.83-3.58-3.55-10.21 9.69-10.35c2.25-2.61 1.95-6.55-0.66-8.8-1.17-1.02-2.62-1.51-4.06-1.51z",
        fill: "#009984"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.42 41.3c-2.4 0-4.74-0.49-6.96-1.46-8.98-3.93-9.46-8.44-9.28-10.13 1.43 0.93 5.29 2.82 13 2.82 0.71 0 1.45-0.02 2.23-0.05 7.13-0.32 8.87-2.22 11.27-4.86 0.45-0.49 0.92-1.01 1.46-1.56 1.19-1.19 1.74-2.11 2.23-2.92 0.9-1.51 1.61-2.7 6.26-5.02 4.42-2.21 9.02-2.67 12.11-2.67 1.25 0 2.14 0.08 2.47 0.12l8.43 7.06c-4.12 0.08-16.36 0.6-21.42 3.68-3.41 2.08-4.71 3.88-6.08 5.78-1.1 1.53-2.25 3.12-4.6 5.13-3.06 2.63-7.02 4.08-11.12 4.08z",
        fill: "#039BE5"
      }),
      _react2.default.createElement("path", {
        d:
          "m89.75 15.94c1.07 0 1.88 0.06 2.27 0.1l7.3 6.12c-5.01 0.17-15.65 0.86-20.35 3.72-3.5 2.13-4.82 3.97-6.23 5.92-1.09 1.51-2.21 3.07-4.52 5.05-2.98 2.55-6.82 3.96-10.81 3.96-2.33 0-4.6-0.48-6.75-1.42-7.55-3.3-8.9-6.91-9.01-8.82 1.9 1.02 5.78 2.47 12.53 2.47 0.73 0 1.49-0.02 2.26-0.05 7.34-0.33 9.23-2.4 11.62-5.02 0.45-0.5 0.92-1.01 1.45-1.54 1.23-1.23 1.8-2.18 2.3-3.02 0.86-1.44 1.54-2.58 6.06-4.83 4.32-2.18 8.84-2.64 11.88-2.64m0-1c-2.9 0-7.72 0.42-12.33 2.73-7.25 3.62-5.25 4.68-8.62 8.04-3.36 3.36-4.13 5.9-12.4 6.27-0.77 0.03-1.51 0.05-2.21 0.05-9.93 0-13.33-3.19-13.33-3.19s-2.41 6.28 9.41 11.45c2.35 1.03 4.78 1.5 7.15 1.5 4.26 0 8.35-1.53 11.46-4.2 5.44-4.66 4.66-7.25 10.61-10.87s22.51-3.62 22.51-3.62l-9.58-8.02c0.01 0-1.02-0.14-2.67-0.14z",
        fill: "#0089CC"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)",
        fill: "#fff"
      },
      _react2.default.createElement("path", {
        d:
          "m106.45 74.95c0.01-0.01 0.02-0.01 0.03-0.03 1.23-1.08 0.39-3.2-1.31-2.93-0.05 0-0.09 0.01-0.13 0.02-0.98 0.24-1.63 1.08-1.91 2.01-0.14 0.48-0.26 0.96-0.36 1.45-0.05 0.24-0.11 0.49-0.13 0.73-0.01 0.14 0.06 0.39 0.22 0.42 0.23 0.05 0.65-0.14 0.87-0.22 0.97-0.31 1.93-0.76 2.72-1.45z"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.47 63.04c0.01-0.01 0.01-0.02 0.03-0.03 1.1-1.22 3.21-0.35 2.91 1.35 0 0.04-0.02 0.09-0.03 0.13-0.25 0.98-1.1 1.62-2.04 1.89-0.48 0.14-0.97 0.25-1.46 0.34-0.24 0.05-0.49 0.1-0.73 0.12-0.14 0.01-0.39-0.07-0.42-0.23-0.05-0.23 0.15-0.65 0.23-0.86 0.35-0.97 0.81-1.93 1.51-2.71z"
      }),
      _react2.default.createElement("path", {
        d:
          "m100.5 62.29c0.01-0.01 0.01-0.02 0.01-0.04 0.68-1.69-1.22-3.38-2.77-2.25l-0.12 0.09c-0.85 0.72-1.09 1.89-0.9 2.96 0.1 0.55 0.22 1.09 0.37 1.62 0.08 0.26 0.14 0.54 0.24 0.79 0.06 0.14 0.26 0.35 0.43 0.31 0.26-0.06 0.57-0.46 0.75-0.65 0.83-0.82 1.56-1.75 1.99-2.83z"
      }),
      _react2.default.createElement("path", {
        d:
          "m113.85 53c0.01-0.01 0.01-0.02 0.02-0.03 1.1-1.16 0.1-3.14-1.53-2.73-0.04 0.01-0.09 0.02-0.13 0.04-0.93 0.31-1.49 1.19-1.68 2.11-0.1 0.48-0.17 0.96-0.23 1.44-0.02 0.24-0.06 0.48-0.06 0.72 0 0.13 0.1 0.37 0.25 0.39 0.23 0.03 0.61-0.19 0.82-0.28 0.94-0.41 1.84-0.93 2.54-1.66z"
      }),
      _react2.default.createElement("path", {
        d:
          "m112.59 62.13 0.03-0.03c1.37-1.48 0.07-3.96-1.97-3.41-0.05 0.01-0.11 0.03-0.16 0.05-1.16 0.41-1.86 1.53-2.08 2.7-0.11 0.6-0.2 1.21-0.25 1.82-0.03 0.3-0.07 0.61-0.07 0.91 0.01 0.16 0.13 0.46 0.32 0.48 0.29 0.04 0.78-0.25 1.03-0.37 1.16-0.54 2.28-1.21 3.15-2.15z"
      })
    )
  );
}

exports.default = Snowboarder;
