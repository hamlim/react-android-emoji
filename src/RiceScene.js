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

function RiceScene(props) {
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
        y: 3.42,
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
    _react2.default.createElement("mask", {
      id: "f",
      x: 4,
      y: 4,
      width: 108.2,
      height: 108.2,
      maskUnits: "userSpaceOnUse"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        mask: "url(#f)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "e",
          cx: 43.532,
          cy: 26.472,
          r: 85.832,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFF59D",
          offset: 0.362
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF38A",
          offset: 0.449
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF06F",
          offset: 0.6029
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEF5E",
          offset: 0.7387
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8409
        })
      ),
      _react2.default.createElement("circle", {
        cx: 58.1,
        cy: 58.1,
        r: 54.1,
        fill: "url(#e)"
      }),
      _react2.default.createElement("circle", {
        cx: 58.1,
        cy: 58.1,
        r: 54.1,
        fill: "none"
      }),
      _react2.default.createElement("circle", {
        cx: 58.1,
        cy: 58.1,
        r: 54.1,
        fill: "none"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: 24.612,
          cy: 71.183,
          r: 12.718,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m35.61 72.84c0.82 5.41-3.21 10.51-8.99 11.38s-11.12-2.81-11.94-8.22 3.21-10.51 8.99-11.38 11.12 2.81 11.94 8.22z",
        fill: "url(#d)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 36.461,
          cy: 88.236,
          r: 11.949,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m43.91 96.95c-0.69 3.68-4.22 6.1-7.88 5.41s-6.07-4.23-5.37-7.9c0.69-3.68 4.22-6.1 7.88-5.41 3.65 0.69 6.06 4.22 5.37 7.9z",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "M58.1,7c28.18,0,51.1,22.92,51.1,51.1s-22.92,51.1-51.1,51.1C29.92,109.2,7,86.28,7,58.1 S29.92,7,58.1,7 M58.1,4C28.22,4,4,28.22,4,58.1s24.22,54.1,54.1,54.1s54.1-24.22,54.1-54.1S87.98,4,58.1,4L58.1,4z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "b",
          cx: 56.687,
          cy: 86.288,
          r: 13.546,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("circle", {
        cx: 57.26,
        cy: 89.38,
        r: 7.97,
        fill: "url(#b)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "k",
          cx: 99.311,
          cy: 23.849,
          r: 10.584,
          gradientTransform: "matrix(.0682 .9977 -1.0103 .069 113.02 -54.601)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m105.16 48.07c-0.11 4.92-4.27 8.82-9.31 8.71-5.03-0.11-9.03-4.19-8.92-9.1s4.27-8.82 9.31-8.71c5.03 0.1 9.03 4.18 8.92 9.1z",
        fill: "url(#k)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "j",
          cx: 83.94,
          cy: -7.736,
          r: 6.7357,
          fx: 83.588,
          fy: -8.139,
          gradientTransform: "matrix(.9964 .0852 -.0775 .9066 17.837 62.849)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m106.68 64.41c-0.23 2.67-2.57 4.66-5.23 4.43s-4.63-2.58-4.41-5.25 2.57-4.66 5.23-4.43c2.67 0.23 4.64 2.58 4.41 5.25z",
        fill: "url(#j)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "i",
          cx: 68.089,
          cy: -40.901,
          r: 6.7357,
          fx: 67.737,
          fy: -41.304,
          gradientTransform: "matrix(.9964 .0852 -.0775 .9066 18.092 59.872)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m95.29 30.24c-0.23 2.67-2.57 4.66-5.23 4.43s-4.63-2.58-4.41-5.25 2.57-4.66 5.23-4.43c2.67 0.23 4.64 2.58 4.41 5.25z",
        fill: "url(#i)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "h",
          cx: 77.237,
          cy: 10.937,
          r: 6.7357,
          fx: 76.885,
          fy: 10.534,
          gradientTransform: "matrix(.9964 .0852 -.0775 .9066 17.694 64.525)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m99.09 82.45c-0.23 2.67-2.57 4.66-5.23 4.43s-4.63-2.58-4.41-5.25 2.57-4.66 5.23-4.43c2.66 0.22 4.63 2.57 4.41 5.25z",
        fill: "url(#h)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("polygon", {
        points: "105.63 128.73 66.2 128.73 69.29 93.18 102.54 93.18",
        fill: "#795548"
      }),
      _react2.default.createElement("circle", {
        cx: 85.82,
        cy: 62.85,
        r: 11.07,
        fill: "#FFF8E1"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m85.82 53.78c5 0 9.07 4.07 9.07 9.07s-4.07 9.07-9.07 9.07-9.07-4.07-9.07-9.07 4.07-9.07 9.07-9.07m0-2c-6.11 0-11.07 4.96-11.07 11.07s4.96 11.07 11.07 11.07 11.07-4.96 11.07-11.07-4.96-11.07-11.07-11.07z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("circle", {
        cx: 76.31,
        cy: 75.3,
        r: 11.07,
        fill: "#FFF8E1"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m76.31 66.23c5 0 9.07 4.07 9.07 9.07s-4.07 9.07-9.07 9.07-9.07-4.07-9.07-9.07 4.07-9.07 9.07-9.07m0-2c-6.11 0-11.07 4.96-11.07 11.07s4.96 11.07 11.07 11.07 11.07-4.96 11.07-11.07-4.96-11.07-11.07-11.07z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("circle", {
        cx: 95.33,
        cy: 75.3,
        r: 11.07,
        fill: "#FFF8E1"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m95.33 66.23c5 0 9.07 4.07 9.07 9.07s-4.07 9.07-9.07 9.07-9.07-4.07-9.07-9.07 4.07-9.07 9.07-9.07m0-2c-6.11 0-11.07 4.96-11.07 11.07s4.96 11.07 11.07 11.07 11.07-4.96 11.07-11.07-4.95-11.07-11.07-11.07z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("circle", {
        cx: 69.91,
        cy: 86.71,
        r: 11.07,
        fill: "#FFF8E1"
      }),
      _react2.default.createElement("circle", {
        cx: 101.73,
        cy: 86.71,
        r: 11.07,
        fill: "#FFF8E1"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m69.91 77.65c5 0 9.07 4.07 9.07 9.07s-4.07 9.07-9.07 9.07-9.07-4.07-9.07-9.07 4.07-9.07 9.07-9.07m0-2c-6.11 0-11.07 4.96-11.07 11.07s4.96 11.07 11.07 11.07 11.07-4.96 11.07-11.07c0-6.12-4.96-11.07-11.07-11.07z",
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
            "m101.73 77.65c5 0 9.07 4.07 9.07 9.07s-4.07 9.07-9.07 9.07-9.07-4.07-9.07-9.07 4.07-9.07 9.07-9.07m0-2c-6.11 0-11.07 4.96-11.07 11.07s4.96 11.07 11.07 11.07 11.07-4.96 11.07-11.07c0-6.12-4.96-11.07-11.07-11.07z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("circle", {
        cx: 85.82,
        cy: 86.71,
        r: 11.07,
        fill: "#FFF8E1"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m85.82 77.65c5 0 9.07 4.07 9.07 9.07s-4.07 9.07-9.07 9.07-9.07-4.07-9.07-9.07 4.07-9.07 9.07-9.07m0-2c-6.11 0-11.07 4.96-11.07 11.07s4.96 11.07 11.07 11.07 11.07-4.96 11.07-11.07c0-6.12-4.96-11.07-11.07-11.07z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m115.38 102.06h-58.87c-1.6 0-2.89-1.29-2.89-2.89v-6.73c0-1.6 1.29-2.89 2.89-2.89h58.87c1.6 0 2.89 1.29 2.89 2.89v6.73c0 1.6-1.29 2.89-2.89 2.89z",
        fill: "#8D6E63"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m115.14 93c0.07 0-0.14-0.39-0.14-0.32v6.25c0 0.07 0.21 0.07 0.14 0.07h-11.83c-0.84 0-1.64 0.38-2.21 1s-0.85 1.6-0.78 2.44l2.03 23.56h-32.88l2.03-23.55c0.07-0.84-0.21-1.76-0.78-2.38-0.56-0.62-1.36-1.07-2.2-1.07h-11.77c-0.07 0 0.25 0 0.25-0.07v-6.25c0-0.07-0.32 0.32-0.25 0.32h58.25m0.14-3h-58.39c-1.73 0-2.75 0.95-2.75 2.68v6.25c0 1.73 1.02 3.07 2.75 3.07h11.77l-2.32 27h39.43l-2.31-27h11.83c1.73 0 2.86-1.34 2.86-3.07v-6.25c-0.01-1.73-1.14-2.68-2.87-2.68z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "m89.43 110.77c-0.33-1.93-1.66-3.38-3.52-3.38s-3.18 1.45-3.52 3.38c-1.64 0.39-2.87 0.45-2.87 2.49 0 2.33 3.95 6.13 6.48 6.13s6.3-3.79 6.3-6.13c0-2.04-1.23-2.1-2.87-2.49z",
      clipPath: "url(#a)",
      fill: "#4E342E"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.14 17.13c-15.46-0.98-32.59 9.18-42.03 20.65-15.68 19.06-15.86 46.61-15.64 70.1 0.07 7.44 0.43 14.85 0.93 22.27 0.31 4.61 8.41 4.64 8.1 0-0.86-12.82-1.49-25.89-1.05-38.8 5.63-5.25 12.4-5.88 19.6-2.69 1.14 0.5 2.54-0.89 1.44-1.87-4.46-3.99-10.53-4.95-15.95-3.41 5.99-4.18 13.72-5.33 20.91-3.65 1.27 0.3 2.15-1.52 0.92-2.18-5.1-2.74-11.44-2.93-17.19-1.19 7.36-4.29 15.61-6.01 24.45-3.85 1.62 0.4 2.76-1.97 1.17-2.78-10.28-5.29-22.21-2.04-31.23 4.53 2.17-3.35 4.81-6.37 8.02-8.84 8.14-6.28 18.63-7.95 28.66-7.24 1.8 0.13 2.22-2.81 0.43-3.17-10.97-2.2-22.98-0.07-31.96 6.8-2.7 2.07-5.14 4.55-7.29 7.3l0.01-0.08c0.33-2.07 2.29-4.98 3.74-6.5 7.18-7.52 16.47-10.27 27.12-10.84 1.57-0.09 1.49-2.19 0-2.38-9.96-1.32-20.86 2.09-28.72 8.7 8.05-11.55 24.13-15.51 37.6-14.09 1.37 0.14 1.57-1.98 0.32-2.34-10.31-2.95-23.3-0.84-32.75 5.4 0.04-0.07 0.08-0.14 0.12-0.2 0.11-0.18 0.23-0.36 0.34-0.53 8.04-9.78 22.66-12.93 34.41-14.81 1.76-0.28 1.23-2.92-0.4-2.99-6.81-0.28-14.73 0.93-21.9 3.75 3.65-3.07 7.68-5.66 12.01-7.63 5.18-2.35 10.82-3.91 16.41-4.9 2.62-0.47 1.79-2.39-0.6-2.54z",
      clipPath: "url(#a)",
      fill: "#FFA726"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m71.05 18.07c0.68 0 1.36 0.02 2.02 0.06 0.6 0.04 0.99 0.21 1.17 0.35-0.12 0.06-0.34 0.15-0.68 0.21-6.2 1.1-11.81 2.77-16.65 4.98-4.31 1.96-8.43 4.57-12.24 7.77-0.38 0.32-0.47 0.86-0.22 1.28 0.18 0.31 0.52 0.49 0.86 0.49 0.12 0 0.25-0.02 0.37-0.07 6.09-2.4 13.04-3.72 19.56-3.72 0.65 0 1.29 0.01 1.92 0.04 0.34 0.01 0.53 0.4 0.54 0.66 0.02 0.3-0.13 0.32-0.25 0.34-12.84 2.05-27.05 5.46-35.02 15.16-0.03 0.03-0.05 0.07-0.08 0.11l-0.14 0.21c-0.07 0.11-0.14 0.22-0.21 0.33-0.03 0.05-0.05 0.09-0.08 0.14l-0.04 0.07c-0.24 0.4-0.17 0.91 0.17 1.24 0.19 0.18 0.44 0.28 0.69 0.28 0.19 0 0.38-0.05 0.55-0.17 6.3-4.16 14.45-6.55 22.37-6.55 3.38 0 6.59 0.43 9.56 1.27 0.03 0.01 0.06 0.02 0.09 0.11 0.04 0.13 0 0.26-0.03 0.27-1.78-0.19-3.6-0.28-5.42-0.28-14.28 0-26.65 5.53-33.11 14.79-0.29 0.41-0.22 0.97 0.15 1.31 0.19 0.17 0.43 0.26 0.67 0.26 0.23 0 0.46-0.08 0.64-0.24 6.6-5.56 15.26-8.75 23.75-8.75 1.42 0 2.83 0.09 4.19 0.27 0.27 0.04 0.28 0.22 0.28 0.28 0 0.05 0 0.11-0.2 0.12-12.31 0.67-21.13 4.2-27.76 11.12-1.35 1.41-3.63 4.58-4.05 7.13-0.07 0.45 0.17 0.89 0.59 1.08 0.13 0.06 0.27 0.08 0.4 0.08 0.3 0 0.6-0.14 0.79-0.39 2.15-2.76 4.54-5.16 7.1-7.12 6.26-4.79 14.42-7.43 22.96-7.43 2.75 0 5.51 0.27 8.19 0.81 0.36 0.07 0.36 0.45 0.34 0.62 0 0.02-0.06 0.58-0.5 0.58-1.45-0.1-2.9-0.16-4.31-0.16-10.07 0-18.5 2.56-25.03 7.6-3.13 2.41-5.9 5.47-8.24 9.09-0.26 0.4-0.2 0.94 0.15 1.27 0.19 0.18 0.44 0.27 0.69 0.27 0.21 0 0.41-0.06 0.59-0.19 6.18-4.5 13.12-6.98 19.55-6.98 3.79 0 7.37 0.85 10.63 2.53 0.16 0.08 0.26 0.19 0.2 0.43-0.06 0.25-0.29 0.51-0.56 0.51-0.04 0-0.08-0.01-0.12-0.02-2.61-0.64-5.25-0.96-7.85-0.96-5.91 0-11.74 1.65-17.34 4.92-0.44 0.26-0.62 0.8-0.41 1.26 0.16 0.37 0.53 0.6 0.92 0.6 0.1 0 0.19-0.01 0.29-0.04 2.38-0.72 4.79-1.08 7.18-1.08 3.38 0 6.58 0.76 9.25 2.19 0.05 0.03 0.06 0.05 0.06 0.05 0.01 0.02 0 0.1-0.06 0.18-0.02 0.03-0.09 0.11-0.17 0.11-0.02 0-0.03 0-0.05-0.01-2.19-0.51-4.43-0.77-6.66-0.77-5.57 0-10.77 1.58-15.06 4.57-0.4 0.28-0.54 0.81-0.33 1.25 0.17 0.36 0.53 0.57 0.9 0.57 0.09 0 0.18-0.01 0.27-0.04 1.54-0.44 3.12-0.66 4.69-0.66 3.88 0 7.54 1.37 10.32 3.85 0.03 0.03 0.05 0.05 0.06 0.05-0.04 0.07-0.17 0.18-0.33 0.18-0.04 0-0.07-0.01-0.1-0.02-3.04-1.35-6-2.03-8.81-2.03-4.39 0-8.39 1.65-11.88 4.9-0.19 0.18-0.31 0.43-0.32 0.7-0.46 13.57 0.28 27.28 1.06 38.9 0.04 0.63-0.13 1.16-0.5 1.56-0.49 0.53-1.36 0.84-2.31 0.84-1.51 0-3.18-0.79-3.29-2.54-0.57-8.51-0.86-15.57-0.93-22.21-0.2-21.17-0.46-50.16 15.41-69.46 8.09-9.77 23.79-20.31 39.2-20.31m0-1c-14.89 0-30.93 9.76-39.94 20.71-15.68 19.06-15.86 46.61-15.64 70.1 0.07 7.44 0.43 14.85 0.93 22.27 0.15 2.31 2.26 3.47 4.29 3.47 2.02 0 3.96-1.15 3.81-3.47-0.86-12.82-1.49-25.89-1.05-38.8 3.38-3.15 7.16-4.63 11.2-4.63 2.7 0 5.52 0.66 8.4 1.94 0.17 0.07 0.34 0.11 0.5 0.11 0.99 0 1.88-1.14 0.94-1.98-3.13-2.8-7.05-4.11-10.99-4.11-1.67 0-3.35 0.24-4.96 0.69 4.22-2.95 9.32-4.39 14.48-4.39 2.15 0 4.31 0.25 6.43 0.75 0.1 0.02 0.19 0.03 0.28 0.03 1.11 0 1.78-1.6 0.64-2.21-2.95-1.58-6.3-2.31-9.72-2.31-2.5 0-5.03 0.39-7.46 1.13 5.2-3.03 10.85-4.78 16.84-4.78 2.48 0 5.02 0.3 7.61 0.93 0.12 0.03 0.24 0.04 0.36 0.04 1.42 0 2.28-2.07 0.81-2.83-3.56-1.83-7.32-2.64-11.09-2.64-7.11 0-14.25 2.88-20.14 7.18 2.17-3.35 4.81-6.37 8.02-8.84 6.99-5.4 15.74-7.39 24.42-7.39 1.42 0 2.83 0.05 4.24 0.15h0.11c1.71 0 2.07-2.83 0.32-3.18-2.75-0.55-5.57-0.83-8.39-0.83-8.42 0-16.84 2.49-23.57 7.64-2.7 2.07-5.14 4.55-7.29 7.3v-0.03c0.34-2.1 2.31-5.04 3.78-6.57 7.18-7.5 16.45-10.23 27.09-10.81 1.57-0.09 1.49-2.19 0-2.38-1.43-0.19-2.87-0.28-4.32-0.28-8.7 0-17.66 3.31-24.39 8.99 7-10.09 20.1-14.39 32.27-14.39 1.8 0 3.58 0.09 5.32 0.28 0.04 0 0.09 0.01 0.13 0.01 1.25 0 1.4-2 0.19-2.35-3.09-0.88-6.42-1.31-9.83-1.31-7.95 0-16.3 2.34-22.92 6.71 0.04-0.07 0.08-0.14 0.12-0.2 0.11-0.18 0.23-0.36 0.34-0.53 8.04-9.78 22.66-12.93 34.41-14.81 1.76-0.28 1.23-2.92-0.4-2.99-0.65-0.03-1.3-0.04-1.97-0.04-6.34 0-13.44 1.23-19.93 3.79 3.65-3.07 7.68-5.66 12.01-7.63 5.18-2.35 10.82-3.91 16.41-4.9 2.62-0.47 1.8-2.39-0.6-2.54-0.7-0.05-1.4-0.07-2.1-0.07z",
        fill: "#424242"
      })
    )
  );
}

exports.default = RiceScene;
