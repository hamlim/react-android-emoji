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

function BowingMan(props) {
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
        id: "l",
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
        xlinkHref: "#l"
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
          id: "k",
          x1: 64.227,
          x2: 64.227,
          y1: 77.206,
          y2: 122.09,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.7047
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m24.46 122.46c-1.33-0.34-10.33-2.83-13.71-7.62-1.38-1.95-4.44-11.38 5.74-21.9 13.69-14.16 44.08-15.1 47.5-15.16 0.03 0 0.07 0 0.1-0.01h0.28c0.03 0 0.07 0 0.1 0.01 3.42 0.06 33.8 1 47.5 15.16 10.17 10.52 7.11 19.95 5.74 21.9-3.39 4.8-12.39 7.28-13.71 7.62h-79.54z",
        fill: "url(#k)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.13 79.28h0.06 0.04s0.02 0 0.04 0h0.06 0.12c3.36 0.06 33.17 0.98 46.45 14.7 9.36 9.68 6.74 18.36 5.59 19.99-2.64 3.73-9.74 6.22-12.67 6.98h-79.16c-2.93-0.76-10.02-3.23-12.67-6.98-1.15-1.63-3.77-10.31 5.59-19.99 13.27-13.73 43.09-14.64 46.45-14.7h0.1m0.37-3h-0.27-0.27v0.01c-4.33 0.08-34.54 1.13-48.55 15.62-10.21 10.55-8.01 20.79-5.89 23.8 4.01 5.68 14.75 8.25 14.75 8.25h79.9s10.74-2.57 14.75-8.25c2.12-3 4.33-13.25-5.88-23.81-14-14.49-44.21-15.54-48.54-15.62z",
        fill: "#009984"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.27 95.19c-7.57-2.44-17.86-2.32-20.27-2.26-2.41-0.07-12.7-0.19-20.27 2.26-15.19 4.91-16.99 11.12-16.99 11.12l23.66 17.69h27.21l23.65-17.69c0.01 0-1.79-6.21-16.99-11.12z",
      clipPath: "url(#a)",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "none",
        stroke: "#444",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 4
      },
      _react2.default.createElement("line", {
        x1: 52.56,
        x2: 49.86,
        y1: 15.99,
        y2: 5.9
      }),
      _react2.default.createElement("line", {
        x1: 37.69,
        x2: 30.3,
        y1: 23.42,
        y2: 16.04
      }),
      _react2.default.createElement("line", {
        x1: 90.31,
        x2: 97.7,
        y1: 23.42,
        y2: 16.04
      }),
      _react2.default.createElement("line", {
        x1: 75.44,
        x2: 78.14,
        y1: 15.99,
        y2: 5.9
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 12,
      width: 120,
      height: 120,
      clipPath: "url(#a)",
      fill: "none"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: 35.101,
          x2: 62.491,
          y1: 118.72,
          y2: 118.72,
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
          "M35.1,122.98l2.53-8.52l4.58,0.3c1.18,0,2.29,0.17,3.35,0.49 c1.22,0.37,2.94,0.94,4.84,1.56c3.83,1.26,8.17,2.69,11.05,3.42c0.61,0.16,1.04,0.71,1.04,1.35c0,0.77-0.63,1.4-1.4,1.4H35.1z",
        fill: "url(#j)"
      }),
      _react2.default.createElement("path", {
        d:
          "m38.36 115.51 3.78 0.25h0.13c1.02 0 2.02 0.15 2.99 0.44 1.21 0.37 2.97 0.95 4.83 1.56 3.84 1.26 8.2 2.69 11.11 3.43 0.17 0.04 0.29 0.2 0.29 0.38 0 0.22-0.18 0.4-0.4 0.4h-24.65l1.92-6.46m-1.46-2.1-3.14 10.57h27.33c1.32 0 2.4-1.07 2.4-2.4 0-1.09-0.74-2.05-1.8-2.32-4.31-1.1-12.25-3.87-15.85-4.97-1.16-0.35-2.36-0.53-3.57-0.53l-5.37-0.35z",
        fill: "#EDA600"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 65.526,
          x2: 92.916,
          y1: 118.72,
          y2: 118.72,
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
          "m66.92 122.98c-0.77 0-1.4-0.63-1.4-1.4 0-0.64 0.43-1.2 1.04-1.35 2.88-0.73 7.22-2.16 11.05-3.42 1.9-0.63 3.62-1.19 4.84-1.56 1.06-0.32 2.17-0.49 3.28-0.49l4.64-0.31 2.53 8.52h-25.98z",
        fill: "url(#i)"
      }),
      _react2.default.createElement("path", {
        d:
          "m89.66 115.51 1.92 6.47h-24.66c-0.22 0-0.4-0.18-0.4-0.4 0-0.18 0.12-0.34 0.29-0.38 2.91-0.74 7.27-2.17 11.11-3.43 1.86-0.61 3.62-1.19 4.83-1.56 0.97-0.3 1.97-0.44 2.99-0.44h0.13l3.79-0.26m1.46-2.1-5.37 0.36c-1.21 0-2.41 0.18-3.57 0.53-3.6 1.1-11.54 3.87-15.85 4.97-1.06 0.27-1.8 1.23-1.8 2.32 0 1.32 1.07 2.4 2.4 2.4h27.33l-3.14-10.58z",
        fill: "#EDA600"
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
          id: "h",
          x1: 31.788,
          x2: 31.788,
          y1: 75.667,
          y2: 123.56,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.7047
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m23.89 100.01 14.93 9.98c0.78 0.52 1.07 1.53 0.69 2.39l-5.22 11.62h-10.02l-0.38-23.99z",
        fill: "url(#h)"
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
          x1: -32,
          x2: -32,
          y1: 50.246,
          y2: 110.94,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.7047
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M-63,110.92V71.8c0-9.55,7.51-17.04,20.09-20.03c4.32-1.03,8.42-1.52,12.54-1.52 c2.87,0,5.8,0.25,8.69,0.75C-11.68,52.72-1,59.09-1,71.8v39.14L-63,110.92z",
        fill: "url(#g)"
      }),
      _react2.default.createElement("path", {
        d:
          "m-30.37 51.25c2.82 0 5.69 0.25 8.53 0.74 9.59 1.65 19.84 7.72 19.84 19.81v38.14l-60-0.01v-38.12c0-9.06 7.22-16.18 19.33-19.05 4.24-1.02 8.27-1.51 12.3-1.51m0-2c-4.4 0-8.62 0.57-12.77 1.55-11.23 2.66-20.86 9.63-20.86 21v40.12l64 0.02v-40.14c0-12.28-9.62-19.73-21.5-21.78-3.05-0.53-5.99-0.77-8.87-0.77z",
        fill: "#009984"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "d",
          d:
            "m23.89 100.01 14.93 9.98c0.78 0.52 1.07 1.53 0.69 2.39l-5.22 11.62-9.89 0.04-0.9-0.31 0.08-3.06 0.75 0.22 2.95 0.13 6.6-10.72-9.9-6.64-0.09-3.65z"
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
            "m26.98 105.68 9.42 6.29-4.05 9.03h-5.12l-0.25-15.32m-3.09-5.67 0.39 23.99h10.02l5.22-11.63c0.38-0.86 0.1-1.87-0.69-2.39l-14.94-9.97z",
          fill: "#009984"
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
          id: "f",
          x1: 62.038,
          x2: 62.038,
          y1: 75.667,
          y2: 123.56,
          gradientTransform: "matrix(-1 0 0 1 158.24 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.7047
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m104.1 100.01-14.93 9.98c-0.78 0.52-1.07 1.53-0.69 2.39l5.22 11.62h10.02l0.38-23.99z",
        fill: "url(#f)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "e",
          d:
            "m104.1 100.01-14.93 9.98c-0.78 0.52-1.07 1.53-0.69 2.39l5.22 11.62 10.44-0.08 0.04-2.98-3.92 0.1-6.08-10.74 10.4-7.23-0.48-3.06z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#e"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m101.01 105.68-0.25 15.32h-5.12l-4.05-9.03 9.42-6.29m3.09-5.67zm0 0-14.93 9.98c-0.78 0.52-1.07 1.53-0.69 2.39l5.22 11.62h10.02l0.38-23.99z",
          fill: "#009984"
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "m63.17 104.23c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.95-3.26 7.17-7.26 7.17h-1.64z",
      fill: "#E59600"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.08 89.08v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
      fill: "#D18100"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "p",
        x: 20.29,
        y: 20.02,
        width: 87.42,
        height: 79.52
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
          "m37.83 79.35c-5.11 0-9.26-4.01-9.26-8.94s4.15-8.94 9.26-8.94h52.33c5.1 0 9.26 4.01 9.26 8.94s-4.15 8.94-9.26 8.94h-52.33z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m90.17 62.47c4.55 0 8.26 3.56 8.26 7.94s-3.7 7.94-8.26 7.94h-52.34c-4.55 0-8.26-3.56-8.26-7.94s3.7-7.94 8.26-7.94h52.34m0-2h-52.34c-5.64 0-10.26 4.47-10.26 9.94s4.62 9.94 10.26 9.94h52.34c5.64 0 10.26-4.47 10.26-9.94s-4.62-9.94-10.26-9.94z",
        fill: "#CC8600"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 64,
          x2: 64,
          y1: 97.932,
          y2: 26.966,
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
          "m64 98.52c-8.21 0-15.82-2.97-21.43-8.36-6.33-6.08-9.67-14.83-9.67-25.32 0-10.74 3.4-20.64 9.56-27.87 5.79-6.77 13.63-10.66 21.54-10.66s15.75 3.89 21.54 10.67c6.17 7.23 9.56 17.13 9.56 27.87 0 10.48-3.34 19.24-9.67 25.32-5.61 5.38-13.22 8.35-21.43 8.35z",
        fill: "url(#n)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 27.31c7.61 0 15.18 3.76 20.78 10.32 6.01 7.05 9.32 16.72 9.32 27.22 0 10.2-3.24 18.71-9.36 24.6-5.42 5.21-12.78 8.08-20.74 8.08-7.95 0-15.32-2.87-20.74-8.08-6.12-5.89-9.36-14.39-9.36-24.6 0-10.5 3.31-20.17 9.32-27.22 5.6-6.56 13.17-10.32 20.78-10.32m0-2c-16.66 0-32.1 16.21-32.1 39.54 0 23.2 15.9 34.67 32.1 34.67s32.1-11.47 32.1-34.67c0-23.33-15.44-39.54-32.1-39.54z",
        fill: "#EDA600"
      }),
      _react2.default.createElement("path", {
        d:
          "m67.7 83.76c-0.1-0.04-0.2-0.06-0.31-0.07h-6.77c-0.1 0.01-0.21 0.03-0.31 0.07-0.61 0.23-0.95 0.81-0.66 1.42 0.29 0.62 1.64 2.35 4.36 2.35s4.07-1.73 4.36-2.35c0.28-0.61-0.06-1.19-0.67-1.42z",
        fill: "#E59600"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "m",
          cx: 64,
          cy: 47.238,
          r: 32.437,
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
          "m64.02 20.03h-0.02-0.02c-32.38 0.17-36.96 26.58-36.91 41.74 0.01 2.37 0.13 4.47 0.27 6.15l6.04 6.47c0.21-1.63 0.47-3.33 0.78-5.02 1-5.44 2.43-10.86 3.58-13.94 1.04-2.76 3.9-4.36 6.79-3.83 4.47 0.8 11.56 1.8 19.39 1.8h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 1.16 3.09 2.6 8.54 3.59 14 0.31 1.7 0.58 3.39 0.78 5.02l6.03-6.45c0.15-1.67 0.27-3.77 0.28-6.15 0.07-15.15-4.47-41.64-36.9-41.81z",
        fill: "url(#m)"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#3F2720"
        },
        _react2.default.createElement("path", {
          d:
            "m64.02 20.03h-0.02-0.02c-32.38 0.17-36.96 26.58-36.91 41.74l3.09 3.3c-0.11-2.15-0.14-4.71 0.02-7.48 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.28 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 7.95 9.54 8.63 23.63 8.23 31.78l3.1-3.32c0.06-15.14-4.48-41.63-36.91-41.8z"
        }),
        _react2.default.createElement("path", {
          d:
            "m27.34 67.92 3.86 4.13 2.2 2.35 0.72-4.85-7.04-8.18c0.01 2.37 0.11 4.87 0.26 6.55z"
        }),
        _react2.default.createElement("path", {
          d:
            "m100.7 67.92-3.86 4.13-2.2 2.35-0.72-4.85 7.04-8.18c-0.01 2.37-0.12 4.87-0.26 6.55z"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m39.99 66.73s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.06 0.13-1.49z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement("ellipse", {
        cx: 47.56,
        cy: 74.81,
        rx: 4.93,
        ry: 4,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.05 69.13s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.49 0.28-1.07 0.32-1.56 0.12z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement("ellipse", {
        cx: 80.44,
        cy: 74.81,
        rx: 4.93,
        ry: 4,
        fill: "#404040"
      })
    )
  );
}

exports.default = BowingMan;
