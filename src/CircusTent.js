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

function CircusTent(props) {
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
        id: "i",
        x1: 64,
        x2: 64,
        y1: 67.833,
        y2: 122.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E93C34",
        offset: 0.2139
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.5111
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BF2222",
        offset: 0.7959
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M16.05,120.59C16,122.57,18.02,124,20,124h44h44c1.98,0,3.91-1.43,3.95-3.41 C112.5,93.33,120,64,120,64H8C8,64,16.67,95.83,16.05,120.59z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 63.708,
        cy: 24.673,
        r: 40.309,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.6627 1.7104e-13 104.73 -39.036)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F14C45",
        offset: 0.2526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.5024
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M104.62,51.36C89.88,43.26,64,24,64,24S38.12,43.26,23.38,51.36C12.58,57.29,4,60.67,4,64h60 h60C124,60.67,115.42,57.29,104.62,51.36z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 32.5,
        x2: 32.5,
        y1: 64.167,
        y2: 125.94,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m20 64s12 24 8 60h16s4-44-4-60h-20z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 95.5,
        x2: 95.5,
        y1: 64.167,
        y2: 125.94,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m108 64s-12 24-8 60h-16s-4-44 4-60h20z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 64.167,
        y2: 125.94,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E93C34",
        offset: 0.2003
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.4784
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CB2B2B",
        offset: 0.8427
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 56,
      y: 64,
      width: 16,
      height: 60,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 62.333,
        cy: 28.333,
        r: 43.402,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE038",
        offset: 0.485
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.756
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M20,64c20-8.36,44-40,44-40S48,60,40,64",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64,
        cy: 23.5,
        r: 51.4,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE038",
        offset: 0.4994
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.7785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m108 64c-20-8.36-44-40-44-40s16 36 24 40",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 63.333,
        cy: 28.167,
        r: 45.167,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE038",
        offset: 0.4051
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.6315
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m64 24c0 8-8 40-8 40h16s-8-32-8-40z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 61.742,
        x2: 36.762,
        y1: 98.95,
        y2: 92.768,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M8,64c0,0,8.67,31.83,8.05,56.59C16,122.57,18.02,124,20,124h44V64H8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 161.83,
        x2: 138.44,
        y1: 98.549,
        y2: 93.247,
        gradientTransform: "matrix(-1 0 0 1 232 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124 64s-8.67 31.83-8.05 56.59c0.05 1.98-1.97 3.41-3.95 3.41h-44v-60h56z",
      fill: "url(#o)"
    }),
    _react2.default.createElement("path", {
      d: "m68 64h-8s0 40-20 60h48c-20-20-20-60-20-60z",
      fill: "#1A237E"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "n",
        cx: 59.5,
        cy: 94.667,
        r: 32.004,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2D",
        offset: 0.4022
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.6912
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m64 64h-4s-8 44-28 60h20s12-16 12-60z",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 69,
        cy: 96.667,
        r: 32.668,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.6912
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m64 64h4s8 44 28 60h-20s-12-16-12-60z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 27.73c6.16 4.53 26.51 19.3 39.18 26.26 2.66 1.46 5.2 2.78 7.45 3.94 4.24 2.2 9.5 4.92 10.37 6.28-0.09 2.12-1.54 3.99-3.6 4.59-1.06 0.31-1.86 1.17-2.1 2.25-2.21 10.29-5.96 30.4-6.35 49.48 0 0.11-0.41 0.47-0.95 0.47h-88c-0.46 0-0.85-0.26-0.95-0.39 0.43-17.6-3.72-38.6-6.23-49.57-0.25-1.08-1.07-1.93-2.13-2.22-2.1-0.57-3.59-2.45-3.68-4.6 0.87-1.36 6.12-4.08 10.37-6.28 2.25-1.16 4.79-2.48 7.45-3.94 12.66-6.97 33.01-21.74 39.17-26.27m0-3.73s-25.88 19.26-40.62 27.36c-10.8 5.93-19.38 9.31-19.38 12.64 0 3.69 2.5 6.78 5.89 7.71 2.51 10.96 6.59 31.63 6.15 48.88-0.04 1.98 1.98 3.41 3.96 3.41h88c1.98 0 3.91-1.43 3.95-3.41 0.38-18.71 4.03-38.4 6.28-48.91 3.33-0.97 5.77-4.04 5.77-7.68 0-3.33-8.58-6.71-19.38-12.64-14.74-8.1-40.62-27.36-40.62-27.36z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d: "M4,64c0,4.42,3.58,8,8,8s8-3.58,8-8H4z",
      fill: "#B71C1C"
    }),
    _react2.default.createElement("path", {
      d: "M40,64c0,4.42,3.58,8,8,8s8-3.58,8-8H40z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d: "M20,64c0,4.42,4.48,8,10,8s10-3.58,10-8H20z",
      fill: "#F9A825"
    }),
    _react2.default.createElement("path", {
      d: "M88,64c0,4.42,4.48,8,10,8s10-3.58,10-8H88z",
      fill: "#F9A825"
    }),
    _react2.default.createElement("path", {
      d: "M56,64c0,4.42,3.58,8,8,8s8-3.58,8-8H56z",
      fill: "#FBC02D"
    }),
    _react2.default.createElement("path", {
      d: "M72,64c0,4.42,3.58,8,8,8s8-3.58,8-8H72z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d: "m108 64c0 4.42 3.58 8 8 8s8-3.58 8-8h-16z",
      fill: "#B71C1C"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 69.833,
        cy: 3.8333,
        r: 12.358,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M64,4v12l16-5.06c0.87-0.32,0.87-1.55,0-1.87L64,4z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M65,5.37L79.64,10L65,14.63V5.37 M64,4v12l16-5.06c0.87-0.32,0.87-1.55,0-1.87L64,4L64,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 63.833,
        cy: 4.25,
        r: 14.002,
        gradientTransform:
          "matrix(1.0287e-13 1 -.4345 4.4691e-14 65.68 -59.583)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE038",
        offset: 0.3016
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.4702
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.5 19.45c0 0.57-0.67 1.03-1.5 1.03s-1.5-0.46-1.5-1.03v-14.42c0-0.57 0.67-1.03 1.5-1.03s1.5 0.46 1.5 1.03v14.42z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 63.75,
        cy: 18.417,
        r: 7.6956,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE038",
        offset: 0.3893
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.6068
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m68 22c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 5c0.25 0 0.43 0.08 0.5 0.13v13.17c0 0.41 0.25 0.77 0.62 0.93 1.14 0.46 1.88 1.55 1.88 2.77 0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.22 0.74-2.31 1.88-2.78 0.38-0.15 0.62-0.52 0.62-0.93v-13.16c0.07-0.05 0.25-0.13 0.5-0.13m0-1c-0.83 0-1.5 0.46-1.5 1.03v13.27c-1.46 0.59-2.5 2.02-2.5 3.7 0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.68-1.04-3.11-2.5-3.7v-13.27c0-0.57-0.67-1.03-1.5-1.03z",
        fill: "#424242"
      })
    )
  );
}

exports.default = CircusTent;
