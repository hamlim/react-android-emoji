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

function Wedding(props) {
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
      d: "M124,80H4l12-12h94.34c1.06,0,2.08,0.42,2.83,1.17L124,80z",
      fill: "#F06292"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ar",
        x1: 64,
        x2: 64,
        y1: 118,
        y2: 124.43,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 120,
      width: 120,
      height: 4,
      fill: "url(#ar)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ag",
        x1: 64,
        x2: 64,
        y1: 108,
        y2: 120.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 112,
      width: 120,
      height: 8,
      fill: "url(#ag)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "w",
        x1: 64,
        x2: 64,
        y1: 100,
        y2: 112.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 104,
      width: 120,
      height: 8,
      fill: "url(#w)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: 64,
        x2: 64,
        y1: 92,
        y2: 104.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 96,
      width: 120,
      height: 8,
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 64,
        x2: 64,
        y1: 84,
        y2: 96.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 88,
      width: 120,
      height: 8,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 64,
        x2: 64,
        y1: 76,
        y2: 88.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 80,
      width: 120,
      height: 8,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 53.667,
        cy: 79.389,
        r: 64.271,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.4167 1.4573e-13 166.13 25.722)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        stopOpacity: 0,
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        stopOpacity: 0.9181,
        offset: 0.9181
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 80,
      width: 120,
      height: 44,
      fill: "url(#e)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.4
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 120,
        width: 120,
        height: 1,
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.4
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 112,
        width: 120,
        height: 1,
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.4
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 104,
        width: 120,
        height: 1,
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.4
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 96,
        width: 120,
        height: 1,
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.4
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 88,
        width: 120,
        height: 1,
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 36,
        x2: 36,
        y1: 72,
        y2: 84.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 76,
      width: 40,
      height: 8,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 62.276,
        cy: 66.331,
        r: 3.0706,
        gradientTransform: "matrix(-.9933 -.1154 -.1154 .9933 105.08 -.2753)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 0.7434
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 35.76,
      cy: 56.9,
      r: 1.78,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ba",
        cx: 62.214,
        cy: 47.933,
        r: 2.6228,
        gradientTransform: "matrix(-.9933 -.1154 -.1154 .9933 105.08 -.2753)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.203
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4162
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.6332
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.8336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 37.48,
      cy: 42.15,
      r: 1.19,
      fill: "url(#ba)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "az",
        cx: 62.226,
        cy: 49.814,
        r: 15.375,
        gradientTransform: "matrix(-.9933 -.1154 -.1154 .9933 105.08 -.2753)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.203
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4162
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.6332
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.8336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.03 46.18c0.61-5.26 6.45-4.04 6.45-4.04s5.97 0.15 5.35 5.41 0.88 7.88 0.88 7.88l-15.34-1.78c-0.01 0 2.05-2.21 2.66-7.47z",
      fill: "url(#az)"
    }),
    _react2.default.createElement("path", {
      d:
        "m27.86 55.39 15.94 1.85c0.49 0.06 0.93-0.3 0.99-0.78 0.06-0.49-0.3-0.93-0.78-0.99l-15.94-1.85c-0.49-0.06-0.93 0.3-0.99 0.78-0.06 0.49 0.3 0.93 0.78 0.99z",
      fill: "#FFD740"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ay",
        cx: 62.326,
        cy: 63.285,
        r: 11.54,
        gradientTransform: "matrix(-.9933 -.1154 -.1154 .9933 105.08 -.2753)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.2435
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4992
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.7596
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.86 55.39 15.94 1.85c0.49 0.06 0.93-0.3 0.99-0.78 0.06-0.49-0.3-0.93-0.78-0.99l-15.94-1.85c-0.49-0.06-0.93 0.3-0.99 0.78-0.06 0.49 0.3 0.93 0.78 0.99z",
      fill: "url(#ay)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37.48 40.96c0.05 0 0.09 0 0.14 0.01 0.65 0.08 1.12 0.67 1.04 1.32 0 0.01-0.01 0.01-0.01 0.02 1.7 0.35 4.62 1.5 4.18 5.25-0.61 5.26 0.88 7.88 0.88 7.88l0.3 0.03c0.49 0.06 0.84 0.5 0.78 0.99-0.05 0.45-0.44 0.79-0.89 0.79-0.03 0-0.07 0-0.1-0.01l-6.31-0.73c0.04 0.19 0.06 0.39 0.04 0.6-0.11 0.91-0.88 1.58-1.77 1.58-0.07 0-0.14 0-0.21-0.01-0.98-0.11-1.68-1-1.57-1.98 0.02-0.21 0.09-0.4 0.18-0.58l-6.31-0.73c-0.49-0.06-0.84-0.5-0.78-0.99 0.05-0.45 0.44-0.79 0.89-0.79 0.03 0 0.07 0 0.1 0.01l0.3 0.03s2.05-2.21 2.66-7.47c0.42-3.59 3.27-4.16 5.04-4.16h0.24v-0.02c0.07-0.6 0.58-1.04 1.18-1.04m0-1c-0.8 0-1.5 0.43-1.89 1.08-3.19 0.16-5.2 1.97-5.56 5.03-0.43 3.68-1.6 5.76-2.13 6.54-0.93 0.03-1.7 0.74-1.81 1.67-0.12 1.04 0.62 1.98 1.66 2.1l5.23 0.61c0.04 1.36 1.07 2.52 2.46 2.68 0.11 0.01 0.22 0.02 0.32 0.02 1.27 0 2.37-0.86 2.69-2.06l5.23 0.61c0.07 0.01 0.15 0.01 0.22 0.01 0.96 0 1.77-0.72 1.88-1.67 0.11-0.94-0.49-1.8-1.38-2.04-0.34-0.88-1-3.18-0.58-6.86 0.36-3.07-1.19-5.29-4.26-6.17-0.25-0.8-0.95-1.42-1.84-1.53-0.07-0.02-0.16-0.02-0.24-0.02z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.4
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 80,
        width: 120,
        height: 1,
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ax",
        x1: 52,
        x2: 72,
        y1: 96,
        y2: 96,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 52,
      y: 68,
      width: 20,
      height: 56,
      fill: "url(#ax)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "aw",
        d:
          "M113.17,69.17c-0.75-0.75-1.77-1.17-2.83-1.17H16L4,80v44h120V80L113.17,69.17z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "av"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#aw"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "au",
        x1: -4,
        x2: 8,
        y1: 96,
        y2: 96,
        gradientTransform: "matrix(-1 0 0 1 12 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "4 124 16 124 16 68 4 68",
      clipPath: "url(#av)",
      fill: "url(#au)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "at",
        cx: 36,
        cy: 68.08,
        r: 60.702,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.4803
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "36 68 12 88 12 124 60 124 60 88",
      fill: "url(#at)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "as",
        d:
          "M16,37.66v81.21h40V37.66H16z M46,65.69H26V51.03c0-5.52,4.48-10,10-10s10,4.48,10,10V65.69z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#as"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "aq",
        x1: 36,
        x2: 36,
        y1: 106.88,
        y2: 119.74,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 110.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#aq)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ap",
        x1: 36,
        x2: 36,
        y1: 98.875,
        y2: 111.74,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 102.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#ap)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ao",
        x1: 36,
        x2: 36,
        y1: 90.875,
        y2: 103.74,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 94.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#ao)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "an",
        x1: 36,
        x2: 36,
        y1: 82.875,
        y2: 95.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 86.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#an)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "am",
        x1: 36,
        x2: 36,
        y1: 74.875,
        y2: 87.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 78.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#am)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "al",
        x1: 36,
        x2: 36,
        y1: 66.875,
        y2: 79.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 70.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#al)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ak",
        x1: 36,
        x2: 36,
        y1: 58.875,
        y2: 71.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 62.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#ak)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "aj",
        x1: 36,
        x2: 36,
        y1: 50.875,
        y2: 63.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 54.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#aj)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ai",
        x1: 36,
        x2: 36,
        y1: 42.875,
        y2: 55.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 46.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#ai)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ah",
        x1: 36,
        x2: 36,
        y1: 34.875,
        y2: 47.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 38.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#ah)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "af",
        x1: 36,
        x2: 36,
        y1: 26.875,
        y2: 39.735,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 30.88,
      width: 40,
      height: 8,
      clipPath: "url(#a)",
      fill: "url(#af)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("polygon", {
        id: "ae",
        points: "36 72 12 92 12 124 60 124 60 92"
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
      "linearGradient",
      {
        id: "ad",
        x1: 36,
        x2: 36,
        y1: 116,
        y2: 128.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 120,
      width: 48,
      height: 8,
      clipPath: "url(#b)",
      fill: "url(#ad)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ac",
        x1: 36,
        x2: 36,
        y1: 108,
        y2: 120.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 112,
      width: 48,
      height: 8,
      clipPath: "url(#b)",
      fill: "url(#ac)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ab",
        x1: 36,
        x2: 36,
        y1: 100,
        y2: 112.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 104,
      width: 48,
      height: 8,
      clipPath: "url(#b)",
      fill: "url(#ab)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "aa",
        x1: 36,
        x2: 36,
        y1: 92,
        y2: 104.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 96,
      width: 48,
      height: 8,
      clipPath: "url(#b)",
      fill: "url(#aa)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "z",
        x1: 36,
        x2: 36,
        y1: 84,
        y2: 96.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 88,
      width: 48,
      height: 8,
      clipPath: "url(#b)",
      fill: "url(#z)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "y",
        x1: 36,
        x2: 36,
        y1: 76,
        y2: 88.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 80,
      width: 48,
      height: 8,
      clipPath: "url(#b)",
      fill: "url(#y)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "x",
        x1: 36,
        x2: 36,
        y1: 68,
        y2: 80.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 72,
      width: 48,
      height: 8,
      clipPath: "url(#b)",
      fill: "url(#x)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m36 41.03c5.52 0 10 4.48 10 10v14.67h-20v-14.67c0-5.53 4.48-10 10-10m0-1c-6.07 0-11 4.93-11 11v15.67h22v-15.67c0-6.07-4.93-11-11-11z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "v",
        cx: 93.167,
        cy: 6.3333,
        r: 42.767,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F48FB1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5A8C",
        offset: 0.4667
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 0.7387
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.3 46.44-1.96-2.75c-9.4-11.69-15.5-19.53-14.12-27.62 1.13-6.59 7.12-10.83 13.71-9.7 3.63 0.62 6.95 2.94 8.82 6.11 2.81-2.37 6.72-3.45 10.35-2.83 6.59 1.13 10.83 7.12 9.7 13.71-1.39 8.1-9.75 13.46-22.5 21.36l-2.76 1.95c-0.4 0.27-0.96 0.18-1.24-0.23z",
      fill: "url(#v)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "u",
        cx: 73.167,
        cy: 40.5,
        r: 27.629,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F48FB1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF6090",
        offset: 0.4327
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 0.7604
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m71.2 63.77-1.28-1.74c-6.13-7.35-10.11-12.29-9.32-17.47 0.65-4.22 4.42-6.99 8.64-6.35 2.32 0.36 4.47 1.8 5.7 3.8 1.77-1.54 4.25-2.28 6.57-1.92 4.22 0.65 6.99 4.42 6.35 8.64-0.79 5.18-6.07 8.7-14.12 13.88l-1.74 1.28c-0.26 0.19-0.61 0.13-0.8-0.12z",
      fill: "url(#u)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "t",
        cx: 34.833,
        cy: 10.833,
        r: 33.759,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F48FB1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5A8C",
        offset: 0.6318
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.56 37.97-4.16-2.04c-0.91-0.45-1.61-1.12-1.99-1.91l-14.65-28.58c-1.04-1.92-4.48-1.92-5.51 0l-14.67 28.58c-0.38 0.79-1.08 1.46-1.99 1.91l-4.16 2.04c-0.93 0.75-0.26 2.03 1.07 2.03h45c1.33 0 2-1.28 1.06-2.03z",
      fill: "url(#t)"
    }),
    _react2.default.createElement("path", {
      d: "m48 124h-24v-16c0-6.63 5.37-12 12-12s12 5.37 12 12v16z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m36 98c5.51 0 10 4.49 10 10v14h-20v-14c0-5.51 4.49-10 10-10m0-2c-6.63 0-12 5.37-12 12v16h24v-16c0-6.63-5.37-12-12-12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "s",
        cx: 35.5,
        cy: 57.375,
        r: 32.048,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F48FB1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5A8C",
        offset: 0.6318
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m61.92 85.7-24-20c-1.11-0.93-2.73-0.93-3.84 0l-24 20c-1.27 1.06-1.44 2.95-0.38 4.23 1.06 1.27 2.95 1.45 4.23 0.38l22.07-18.4 22.08 18.4c0.56 0.46 1.24 0.69 1.92 0.69 0.86 0 1.71-0.37 2.31-1.08 1.06-1.27 0.88-3.16-0.39-4.22z",
      fill: "url(#s)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m90.82 9.18c0.53 0 1.07 0.05 1.61 0.14 2.73 0.47 5.32 2.26 6.74 4.68 0.45 0.76 1.21 1.28 2.08 1.43 0.17 0.03 0.34 0.04 0.51 0.04 0.7 0 1.39-0.25 1.93-0.7 1.74-1.46 4.06-2.3 6.37-2.3 0.52 0 1.04 0.04 1.54 0.13 2.4 0.41 4.46 1.68 5.8 3.58s1.86 4.27 1.45 6.66c-1.14 6.64-8.39 11.43-21.12 19.32-0.05 0.03-0.1 0.06-0.15 0.1l-1.05 0.74-0.74-1.05c-0.03-0.05-0.07-0.1-0.11-0.14-9.38-11.67-14.64-18.59-13.5-25.24 0.74-4.35 4.3-7.39 8.64-7.39m0-3c-5.72 0-10.59 4.01-11.59 9.89-1.39 8.1 4.72 15.94 14.12 27.62l1.96 2.75c0.18 0.25 0.45 0.38 0.73 0.38 0.18 0 0.36-0.05 0.52-0.16l2.76-1.95c12.75-7.9 21.11-13.26 22.5-21.36 1.13-6.59-3.11-12.58-9.7-13.71-0.68-0.12-1.36-0.17-2.05-0.17-3 0-6.01 1.08-8.3 3-1.87-3.17-5.19-5.49-8.82-6.11-0.73-0.12-1.44-0.18-2.13-0.18z",
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
          "m68.03 41.12c0.25 0 0.51 0.02 0.76 0.06 1.44 0.22 2.82 1.14 3.59 2.4 0.46 0.75 1.23 1.26 2.1 1.4 0.15 0.02 0.3 0.03 0.45 0.03 0.72 0 1.42-0.26 1.97-0.74 0.91-0.8 2.2-1.27 3.43-1.27 0.24 0 0.48 0.02 0.71 0.05 2.58 0.4 4.23 2.64 3.83 5.22-0.58 3.77-5.21 6.94-12.72 11.78-5.72-6.86-9.19-11.27-8.61-15.04 0.38-2.29 2.21-3.89 4.49-3.89m0-3c-3.71 0-6.84 2.63-7.43 6.44-0.79 5.18 3.19 10.12 9.32 17.47l1.28 1.74c0.11 0.15 0.29 0.23 0.46 0.23 0.12 0 0.24-0.04 0.34-0.11l1.74-1.27c8.05-5.18 13.33-8.7 14.12-13.88 0.65-4.22-2.13-7.99-6.35-8.64-0.38-0.07-0.77-0.1-1.17-0.1-1.96 0-3.93 0.73-5.41 2.01-1.23-2-3.38-3.45-5.7-3.8-0.4-0.06-0.8-0.09-1.2-0.09z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M113.17,69.17c-0.75-0.75-1.77-1.17-2.83-1.17H56V40h2.5c1.34,0,2.01-1.28,1.06-2.03 l-4.16-2.04c-0.91-0.45-1.61-1.12-1.99-1.91L38.76,5.44C38.24,4.48,37.12,4,36,4s-2.24,0.48-2.76,1.44L18.58,34.02 c-0.38,0.79-1.08,1.46-1.99,1.91l-4.16,2.04C11.5,38.72,12.17,40,13.5,40H16v28L4,80v44h120V80L113.17,69.17z M121,121H7V81.24l9-9 v0l0.37-0.38L17.24,71h1.85L19,40c0-1.36,1.98-4.05,2.27-4.64L35.8,7.02C35.85,7.01,35.92,7,36,7c0.08,0,0.15,0.01,0.2,0.02 l14.53,28.32c0,0,0.89,1.65,2.28,4.66v31v0h3v0h54.34c0.27,0,0.52,0.1,0.71,0.29l9.95,9.95V121z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "r",
        d:
          "m87.41 102c-0.03-4.26-1.34-7.38-2.85-9.58-0.22-0.32-0.43-0.61-0.66-0.89-1.91-2.41-3.9-3.43-3.9-3.43s-1.99 1.03-3.91 3.43c-0.22 0.28-0.44 0.57-0.66 0.89-1.51 2.2-2.82 5.32-2.85 9.58h-0.01v13.9h14.84v-13.9z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "q"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#r"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#q)"
      },
      _react2.default.createElement("polygon", {
        points: "78.07 91.65 78.07 93.21 78.91 91.65",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.56 92.13c-0.05 0.07-0.11 0.14-0.16 0.21-0.64 0.93-1.23 2.03-1.72 3.31h1.88v-3.52z",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d:
          "m76.76 95.66 1.31-2.44v-1.57h-2.15c-0.12 0.16-0.24 0.32-0.36 0.49v3.52h1.2z",
        fill: "#26C6DA"
      }),
      _react2.default.createElement("polygon", {
        points: "76.88 109.22 75.56 113.23 78.07 113.23 78.07 109.22",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d: "m77.47 107.43-0.59 1.79h1.19v-1.24c-0.21-0.19-0.4-0.37-0.6-0.55z",
        fill: "#A5D6A7"
      }),
      _react2.default.createElement("path", {
        d: "m78.07 107.98v1.24h1.35l-0.33-0.33c-0.36-0.32-0.69-0.62-1.02-0.91z",
        fill: "#FFEB3B"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.31 98.36 1.45-2.7h-3.08c-0.5 1.31-0.88 2.81-1.05 4.52h1.13c0.29-0.79 0.84-1.42 1.55-1.82z",
        fill: "#80DEEA"
      }),
      _react2.default.createElement("path", {
        d:
          "m73.53 101.44c0-0.45 0.09-0.87 0.23-1.27h-1.13c-0.06 0.59-0.1 1.19-0.1 1.82h-0.01v1.56l1.03-1.92c-0.01-0.05-0.02-0.12-0.02-0.19z",
        fill: "#3F51B5"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.56 105.55c-0.26-0.29-0.5-0.57-0.71-0.85-0.15-0.2-0.31-0.4-0.44-0.6l-0.29 0.6-0.64 1.34-0.95 1.98v1.21h2.1l0.93-2.31 0.35-0.88 0.03-0.07c-0.14-0.15-0.26-0.29-0.38-0.42z",
        fill: "#64B5F6"
      }),
      _react2.default.createElement("polygon", {
        points: "75.56 113.23 74.65 116 75.56 116 78.07 116 78.07 113.23",
        fill: "#29B6F6"
      }),
      _react2.default.createElement("polygon", {
        points: "72.52 109.22 72.52 113.23 72.52 114.42 73 113.23 74.62 109.22",
        fill: "#81D4FA"
      }),
      _react2.default.createElement("polygon", {
        points: "79.97 89.65 78.91 91.65 79.94 91.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m78.91 91.65-0.84 1.57-1.31 2.44-1.45 2.7c0.52-0.29 1.12-0.47 1.77-0.47 0.1 0 0.2 0.03 0.3 0.03l0.68-1.42 0.4-0.84 1.45-3.01 0.02-1h-1.02z",
        fill: "#C5E1A5"
      }),
      _react2.default.createElement("path", {
        d:
          "m73.55 101.64-1.03 1.92v4.46l0.95-1.98 0.64-1.34 0.29-0.6c-0.52-0.81-0.81-1.61-0.85-2.46z",
        fill: "#1E88E5"
      }),
      _react2.default.createElement("polygon", {
        points: "72.5 114.47 72.52 116 72.52 114.42",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points: "75.56 113.23 73 113.23 72.52 114.42 72.52 116 74.65 116",
        fill: "#80DEEA"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "p",
          x1: 73.002,
          x2: 77.469,
          y1: 109.6,
          y2: 109.6,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFC107",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF59D",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m76.01 106.03-0.07-0.07-0.03 0.07-0.35 0.88-0.93 2.31-1.63 4.01h2.55l1.32-4.01 0.59-1.79c-0.52-0.48-1.01-0.95-1.45-1.4z",
        fill: "url(#p)"
      }),
      _react2.default.createElement("polygon", {
        points: "81.93 91.65 81.09 91.65 81.93 93.21",
        fill: "#673AB7"
      }),
      _react2.default.createElement("polygon", {
        points:
          "79.87 95.56 79.9 95.66 80.1 95.66 80.13 95.56 80.14 95.66 80.08 92.65 80 92.48 79.92 92.65 79.86 95.66",
        fill: "#673AB7"
      }),
      _react2.default.createElement("polygon", {
        points: "79.93 92.33 79.94 91.65 79.92 92.65 80 92.48",
        fill: "#673AB7"
      }),
      _react2.default.createElement("polygon", {
        points: "80.13 95.56 80.1 95.66 80.14 95.66",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.32 95.66c-0.49-1.27-1.08-2.38-1.72-3.31-0.05-0.08-0.11-0.14-0.16-0.21v3.52h1.88z",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d:
          "m81.93 93.21 1.31 2.44h1.2v-3.52c-0.12-0.17-0.24-0.33-0.36-0.49h-2.15v1.57z",
        fill: "#26C6DA"
      }),
      _react2.default.createElement("polygon", {
        points: "80.1 95.66 79.9 95.66 80 95.89",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "80.15 96.26 80.14 95.66",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "80.15 96.26 80.14 95.66 80.1 95.66 80 95.89",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "79.8 99.05 79.8 99.05 79.81 98.74",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "81.93 109.22 81.93 113.23 84.44 113.23 83.12 109.22",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d: "m81.93 107.98v1.24h1.19l-0.59-1.79c-0.2 0.18-0.39 0.36-0.6 0.55z",
        fill: "#A5D6A7"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#B39DDB"
        },
        _react2.default.createElement("path", {
          d:
            "m78.07 89.37c-0.62 0.53-1.31 1.21-2.01 2.08-0.05 0.06-0.09 0.13-0.14 0.19h2.99l1.07-1.99 0.02-1.36-0.01-0.29s-0.82 0.43-1.92 1.37z"
        }),
        _react2.default.createElement("path", {
          d:
            "m83.94 91.45c-0.69-0.87-1.39-1.55-2.01-2.08-1.1-0.94-1.93-1.37-1.93-1.37v0.29l0.02 1.27v0.09l1.07 1.99h2.99c-0.05-0.06-0.09-0.13-0.14-0.19z"
        })
      ),
      _react2.default.createElement("polygon", {
        points: "79.97 89.65 79.98 89.56 80 89.61 80.02 89.56 80 88.29",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "80.03 89.65 80.02 89.56 80.02 89.56",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "79.97 89.65 79.97 89.65 79.94 91.65",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "80.02 89.56 80 89.61 80.03 89.65",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points:
          "80.58 109.22 80.39 109.41 80 109.8 79.61 109.41 79.42 109.22 78.07 109.22 78.07 113.23 79.54 113.23 80.46 113.23 81.93 113.23 81.93 109.22",
        fill: "#FFEB3B"
      }),
      _react2.default.createElement("polygon", {
        points:
          "80.46 113.23 79.54 113.23 78.07 113.23 78.07 116 79.48 116 79.49 116 80.51 116 80.52 116 81.93 116 81.93 113.23",
        fill: "#80CBC4"
      }),
      _react2.default.createElement("path", {
        d: "m80.91 108.89-0.33 0.33h1.35v-1.24c-0.33 0.29-0.66 0.59-1.02 0.91z",
        fill: "#FFEB3B"
      }),
      _react2.default.createElement("path", {
        d:
          "m83.24 95.66 1.45 2.7c0.71 0.4 1.26 1.04 1.55 1.82h1.13c-0.17-1.71-0.55-3.21-1.05-4.52h-3.08z",
        fill: "#80DEEA"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.53 106.03-0.64-1.34-0.29-0.6c-0.13 0.2-0.29 0.4-0.44 0.6-0.21 0.28-0.45 0.56-0.71 0.85-0.13 0.14-0.25 0.28-0.38 0.42l0.03 0.07 0.35 0.88 0.93 2.31h2.1v-1.21l-0.95-1.98z",
        fill: "#64B5F6"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.47 101.44c0 0.07-0.02 0.13-0.02 0.2l1.03 1.92v-1.56h-0.01c0-0.64-0.04-1.24-0.1-1.82h-1.13c0.15 0.39 0.23 0.81 0.23 1.26z",
        fill: "#3F51B5"
      }),
      _react2.default.createElement("polygon", {
        points: "81.93 113.23 81.93 116 84.44 116 85.35 116 84.44 113.23",
        fill: "#29B6F6"
      }),
      _react2.default.createElement("polygon", {
        points: "85.38 109.22 87 113.23 87.48 114.42 87.48 113.23 87.48 109.22",
        fill: "#81D4FA"
      }),
      _react2.default.createElement("polygon", {
        points: "80 92.48 80.08 92.65 80.06 91.65 80.07 92.33",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "80 92.48 80.07 92.33 80.06 91.65 79.94 91.65 79.93 92.33",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "81.09 91.65 80.03 89.65 80.06 91.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "79.98 89.56 79.97 89.65 80 89.61",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "80.06 91.65 80.03 89.65 80.03 89.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "80.06 91.65 80.03 89.65 80 89.61 79.97 89.65 79.94 91.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m83.24 95.66-1.31-2.44-0.84-1.57h-1.03l0.02 1 1.45 3.01 0.4 0.84 0.68 1.42c0.1-0.01 0.2-0.03 0.3-0.03 0.66 0 1.25 0.18 1.77 0.47l-1.44-2.7z",
        fill: "#C5E1A5"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.45 101.64c-0.04 0.85-0.33 1.65-0.86 2.46l0.29 0.6 0.64 1.34 0.95 1.98v-4.46l-1.02-1.92z",
        fill: "#1E88E5"
      }),
      _react2.default.createElement("polygon", {
        points: "87.48 114.42 87.48 116 87.5 114.47",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points:
          "87 113.23 84.44 113.23 84.44 113.23 85.35 116 87.48 116 87.48 114.42",
        fill: "#80DEEA"
      }),
      _react2.default.createElement("polygon", {
        points: "79.81 98.6 79.81 98.74",
        fill: "#FFEA00"
      }),
      _react2.default.createElement("polygon", {
        points: "80.2 99.05 80.19 98.6 80.19 98.6",
        fill: "#FFEA00"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 82.531,
          x2: 86.998,
          y1: 109.6,
          y2: 109.6,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFC107",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF59D",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m85.38 109.22-0.93-2.31-0.35-0.88-0.03-0.07-0.07 0.07c-0.44 0.45-0.93 0.91-1.46 1.4l0.59 1.79 1.32 4.01h2.55l-1.62-4.01z",
        fill: "url(#o)"
      }),
      _react2.default.createElement("polygon", {
        points: "79.86 95.66 79.85 96.26 79.85 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "79.81 98.6 79.85 96.26 79.85 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "79.87 95.56 79.86 95.66 79.9 95.66",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "80 95.89 79.9 95.66 79.86 95.66 79.85 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "80.19 98.6 80.19 98.6 80.15 96.26 80.15 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m81.93 96.5-0.4-0.84-1.45-3.01 0.06 3.01 0.01 0.6 0.04 2.34-0.04-2.34-0.15-0.37-0.15 0.36-0.04 2.34 0.04-2.34 0.01-0.6 0.06-3.01-1.45 3.01-0.4 0.84-0.68 1.42c0.23 0.02 0.46 0.05 0.68 0.12 0.32 0.09 0.62 0.22 0.91 0.39 0.3 0.17 0.58 0.38 0.82 0.63l0.01-0.31-0.01 0.31c0.06 0.07 0.14 0.12 0.2 0.19 0.06-0.07 0.13-0.12 0.2-0.19 0.16-0.17 0.34-0.32 0.53-0.46 0.09-0.06 0.19-0.12 0.29-0.18 0.29-0.17 0.59-0.3 0.91-0.39 0.22-0.06 0.45-0.1 0.68-0.12l-0.68-1.4z",
        fill: "#26C6DA"
      }),
      _react2.default.createElement("path", {
        d:
          "m78.07 98.03c-0.22-0.06-0.45-0.1-0.68-0.12l-0.33 0.68-0.76 1.58h1.97l0.64-1.58 0.07-0.18c-0.29-0.15-0.59-0.29-0.91-0.38z",
        fill: "#FF8A80"
      }),
      _react2.default.createElement("path", {
        d:
          "m78.07 100.18h-1.77l-0.74 1.53-1.15 2.39c0.13 0.2 0.29 0.4 0.44 0.6 0.21 0.28 0.45 0.56 0.71 0.85 0.13 0.14 0.25 0.28 0.38 0.42l0.51-1.26 1.82-4.52h-0.2z",
        fill: "#F06292"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.56 100.18h-1.8c-0.14 0.39-0.23 0.82-0.23 1.27 0 0.07 0.02 0.13 0.02 0.2 0.04 0.85 0.33 1.65 0.86 2.46l1.15-2.39 0.74-1.53h-0.74z",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.09 97.88c-0.66 0-1.25 0.18-1.77 0.47-0.71 0.4-1.26 1.04-1.55 1.82h2.54l0.76-1.58 0.33-0.68c-0.12 0-0.21-0.03-0.31-0.03z",
        fill: "#F8BBD0"
      }),
      _react2.default.createElement("path", {
        d:
          "m78.07 104.7h-1.62l-0.51 1.26 0.07 0.07c0.44 0.45 0.93 0.91 1.46 1.4l0.46-1.4 0.14-0.42 0.3-0.92h-0.3z",
        fill: "#FF9800"
      }),
      _react2.default.createElement("polygon", {
        points:
          "80.22 100.43 80.14 100.18 79.86 100.18 79.78 100.43 78.37 104.7 79.7 104.7 80.3 104.7 81.63 104.7",
        fill: "#F06292"
      }),
      _react2.default.createElement("polygon", {
        points:
          "79.78 100.18 78.27 100.18 76.45 104.7 78.07 104.7 78.37 104.7 79.78 100.43 79.86 100.18",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("path", {
        d:
          "m82.07 106.03-0.14-0.42-0.3-0.92h-3.26l-0.3 0.92-0.14 0.42-0.46 1.4c0.2 0.18 0.39 0.36 0.6 0.55 0.33 0.3 0.67 0.6 1.02 0.91l0.91 0.91 0.91-0.91c0.36-0.32 0.69-0.62 1.02-0.91 0.21-0.19 0.4-0.37 0.6-0.55l-0.46-1.4z",
        fill: "#EC407A"
      }),
      _react2.default.createElement("path", {
        d:
          "m82.94 98.6-0.33-0.68c-0.23 0.02-0.46 0.05-0.68 0.12-0.32 0.09-0.62 0.22-0.91 0.39l0.07 0.18 0.64 1.58h1.97l-0.76-1.59z",
        fill: "#FF8A80"
      }),
      _react2.default.createElement("path", {
        d:
          "m84.44 101.71-0.74-1.53h-1.97l1.82 4.52 0.51 1.26c0.14-0.14 0.26-0.28 0.38-0.42 0.26-0.29 0.5-0.57 0.71-0.85 0.15-0.2 0.31-0.4 0.44-0.6l-1.15-2.38z",
        fill: "#F06292"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.24 100.18h-2.54l0.74 1.53 1.15 2.39c0.52-0.81 0.81-1.61 0.86-2.46 0-0.07 0.02-0.13 0.02-0.2 0-0.45-0.08-0.87-0.23-1.26z",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("path", {
        d:
          "m84.69 98.36c-0.52-0.29-1.12-0.47-1.77-0.47-0.1 0-0.2 0.03-0.3 0.03l0.33 0.68 0.76 1.58h2.54c-0.3-0.79-0.85-1.42-1.56-1.82z",
        fill: "#F8BBD0"
      }),
      _react2.default.createElement("polygon", {
        points:
          "81.73 100.18 80.22 100.18 80.14 100.18 80.22 100.43 81.63 104.7 81.93 104.7 83.55 104.7",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("polygon", {
        points: "80.2 99.14 80.2 99.14 80.2 99.05 80.2 99.05",
        fill: "#C62828"
      }),
      _react2.default.createElement("path", {
        d:
          "m83.55 104.7h-1.92l0.3 0.92 0.14 0.42 0.46 1.4c0.53-0.48 1.02-0.95 1.46-1.4l0.07-0.07-0.51-1.27z",
        fill: "#FF9800"
      }),
      _react2.default.createElement("path", {
        d:
          "m81.09 98.6-0.07-0.18c-0.1 0.06-0.2 0.11-0.29 0.18-0.19 0.13-0.37 0.29-0.53 0.46v0.09-0.09c-0.06 0.07-0.14 0.12-0.2 0.19-0.06-0.07-0.13-0.12-0.2-0.19-0.24-0.25-0.52-0.46-0.82-0.63l-0.07 0.18-0.64 1.58h3.46l-0.64-1.59z",
        fill: "#FF5722"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 80,
          x2: 80,
          y1: 88.024,
          y2: 98.095,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F48FB1",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FCE4EC",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m80 99.22c0.84-3.75 2.58-6.21 3.94-7.65-1.94-2.42-3.94-3.45-3.94-3.45s-2 1.03-3.94 3.45c1.36 1.44 3.1 3.9 3.94 7.65z",
        fill: "url(#n)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m87.98 100.84c-0.12-3.52-1.11-6.66-2.94-9.33-0.22-0.33-0.45-0.63-0.68-0.92-1.97-2.47-4.01-3.54-4.09-3.58l-0.27-0.14-0.27 0.14c-0.08 0.04-2.12 1.11-4.1 3.58-0.23 0.29-0.45 0.59-0.68 0.92-1.83 2.67-2.82 5.81-2.94 9.33l-0.01 15.06h16v-15.06h-0.02zm-7.98-12.65c0.56 0.34 1.91 1.27 3.27 2.91-1.22 1.48-2.59 3.72-3.31 6.92-0.71-3.16-2.06-5.39-3.28-6.87 1.37-1.66 2.75-2.61 3.32-2.96zm-6.84 13.81 0.01-0.57c0.02-3.52 0.95-6.64 2.75-9.26 0.04-0.05 0.08-0.1 0.11-0.15 1.55 1.87 3.35 5.13 3.44 10.26l-0.01 12.47h-6.29v-12.75zm7.31 12.74v-12.83c0.17-4.96 1.94-8.12 3.46-9.94 0.05 0.07 0.1 0.13 0.15 0.2 1.8 2.62 2.73 5.74 2.75 9.26l0.01 13.32h-6.37z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "m",
        d:
          "m111.41 102c-0.03-4.26-1.34-7.38-2.85-9.58-0.22-0.32-0.43-0.61-0.66-0.89-1.92-2.4-3.91-3.43-3.91-3.43s-1.99 1.03-3.91 3.43c-0.22 0.28-0.44 0.57-0.66 0.89-1.51 2.2-2.82 5.32-2.85 9.58h-0.01v13.9h14.84l0.01-13.9z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "k"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#m"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#k)"
      },
      _react2.default.createElement("polygon", {
        points: "102.07 91.65 102.07 93.21 102.91 91.65",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m99.56 92.13c-0.05 0.07-0.11 0.14-0.16 0.21-0.64 0.93-1.23 2.03-1.72 3.31h1.88v-3.52z",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d:
          "m100.76 95.66 1.31-2.44v-1.57h-2.15c-0.12 0.16-0.24 0.32-0.36 0.49v3.52h1.2z",
        fill: "#26C6DA"
      }),
      _react2.default.createElement("polygon", {
        points: "100.88 109.22 99.56 113.23 102.07 113.23 102.07 109.22",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d: "m101.47 107.43-0.59 1.79h1.19v-1.24c-0.21-0.19-0.4-0.37-0.6-0.55z",
        fill: "#A5D6A7"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.07 107.98v1.24h1.35l-0.33-0.33c-0.36-0.32-0.69-0.62-1.02-0.91z",
        fill: "#FFEB3B"
      }),
      _react2.default.createElement("path", {
        d:
          "m99.31 98.36 1.45-2.7h-3.08c-0.5 1.31-0.88 2.81-1.05 4.52h1.13c0.29-0.79 0.84-1.42 1.55-1.82z",
        fill: "#80DEEA"
      }),
      _react2.default.createElement("path", {
        d:
          "m97.53 101.44c0-0.45 0.09-0.87 0.23-1.27h-1.13c-0.06 0.59-0.1 1.19-0.1 1.82h-0.01v1.56l1.03-1.92c-0.01-0.05-0.02-0.12-0.02-0.19z",
        fill: "#3F51B5"
      }),
      _react2.default.createElement("path", {
        d:
          "m99.56 105.55c-0.26-0.29-0.5-0.57-0.71-0.85-0.15-0.2-0.31-0.4-0.44-0.6l-0.29 0.6-0.64 1.34-0.95 1.98v1.21h2.1l0.93-2.31 0.35-0.88 0.03-0.07c-0.14-0.15-0.26-0.29-0.38-0.42z",
        fill: "#64B5F6"
      }),
      _react2.default.createElement("polygon", {
        points: "99.56 113.23 98.65 116 99.56 116 102.07 116 102.07 113.23",
        fill: "#29B6F6"
      }),
      _react2.default.createElement("polygon", {
        points: "96.52 109.22 96.52 113.23 96.52 114.42 97 113.23 98.62 109.22",
        fill: "#81D4FA"
      }),
      _react2.default.createElement("polygon", {
        points: "103.97 89.65 102.91 91.65 103.94 91.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.91 91.65-0.84 1.57-1.31 2.44-1.45 2.7c0.52-0.29 1.12-0.47 1.77-0.47 0.1 0 0.2 0.03 0.3 0.03l0.68-1.42 0.4-0.84 1.45-3.01 0.02-1h-1.02z",
        fill: "#C5E1A5"
      }),
      _react2.default.createElement("path", {
        d:
          "m97.55 101.64-1.03 1.92v4.46l0.95-1.98 0.64-1.34 0.29-0.6c-0.52-0.81-0.81-1.61-0.85-2.46z",
        fill: "#1E88E5"
      }),
      _react2.default.createElement("polygon", {
        points: "96.5 114.47 96.52 116 96.52 114.42",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points: "99.56 113.23 97 113.23 96.52 114.42 96.52 116 98.65 116",
        fill: "#80DEEA"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: 97.002,
          x2: 101.47,
          y1: 109.6,
          y2: 109.6,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFC107",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF59D",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m100.01 106.03-0.07-0.07-0.03 0.07-0.35 0.88-0.93 2.31-1.63 4.01h2.55l1.32-4.01 0.59-1.79c-0.52-0.48-1.01-0.95-1.45-1.4z",
        fill: "url(#j)"
      }),
      _react2.default.createElement("polygon", {
        points: "105.93 91.65 105.09 91.65 105.93 93.21",
        fill: "#673AB7"
      }),
      _react2.default.createElement("polygon", {
        points:
          "103.87 95.56 103.9 95.66 104.1 95.66 104.13 95.56 104.14 95.66 104.08 92.65 104 92.48 103.92 92.65 103.86 95.66",
        fill: "#673AB7"
      }),
      _react2.default.createElement("polygon", {
        points: "103.93 92.33 103.94 91.65 103.92 92.65 104 92.48",
        fill: "#673AB7"
      }),
      _react2.default.createElement("polygon", {
        points: "104.13 95.56 104.1 95.66 104.14 95.66",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m110.32 95.66c-0.49-1.27-1.08-2.38-1.72-3.31-0.05-0.08-0.11-0.14-0.16-0.21v3.52h1.88z",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d:
          "m105.93 93.21 1.31 2.44h1.2v-3.52c-0.12-0.17-0.24-0.33-0.36-0.49h-2.15v1.57z",
        fill: "#26C6DA"
      }),
      _react2.default.createElement("polygon", {
        points: "104.1 95.66 103.9 95.66 104 95.89",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "104.15 96.26 104.14 95.66",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "104.15 96.26 104.14 95.66 104.1 95.66 104 95.89",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "103.8 99.05 103.8 99.05 103.81 98.74",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points: "105.93 109.22 105.93 113.23 108.44 113.23 107.12 109.22",
        fill: "#4DD0E1"
      }),
      _react2.default.createElement("path", {
        d: "m105.93 107.98v1.24h1.19l-0.59-1.79c-0.2 0.18-0.39 0.36-0.6 0.55z",
        fill: "#A5D6A7"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#B39DDB"
        },
        _react2.default.createElement("path", {
          d:
            "m102.07 89.37c-0.62 0.53-1.31 1.21-2.01 2.08-0.05 0.06-0.09 0.13-0.14 0.19h2.99l1.07-1.99 0.03-1.36-0.02-0.29s-0.82 0.43-1.92 1.37z"
        }),
        _react2.default.createElement("path", {
          d:
            "m107.94 91.45c-0.69-0.87-1.39-1.55-2.01-2.08-1.1-0.94-1.93-1.37-1.93-1.37v0.29l0.02 1.27v0.09l1.07 1.99h2.99c-0.05-0.06-0.09-0.13-0.14-0.19z"
        })
      ),
      _react2.default.createElement("polygon", {
        points: "103.97 89.65 103.98 89.56 104 89.61 104.02 89.56 104 88.29",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "104.03 89.65 104.02 89.56 104.02 89.56",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "103.97 89.65 103.97 89.65 103.94 91.65",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "104.02 89.56 104 89.61 104.03 89.65",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points:
          "104.58 109.22 104.39 109.41 104 109.8 103.61 109.41 103.42 109.22 102.07 109.22 102.07 113.23 103.54 113.23 104.46 113.23 105.93 113.23 105.93 109.22",
        fill: "#FFEB3B"
      }),
      _react2.default.createElement("polygon", {
        points:
          "104.46 113.23 103.54 113.23 102.07 113.23 102.07 116 103.48 116 103.49 116 104.51 116 104.52 116 105.93 116 105.93 113.23",
        fill: "#80CBC4"
      }),
      _react2.default.createElement("path", {
        d:
          "m104.91 108.89-0.33 0.33h1.35v-1.24c-0.33 0.29-0.66 0.59-1.02 0.91z",
        fill: "#FFEB3B"
      }),
      _react2.default.createElement("path", {
        d:
          "m107.24 95.66 1.45 2.7c0.71 0.4 1.26 1.04 1.55 1.82h1.13c-0.17-1.71-0.55-3.21-1.05-4.52h-3.08z",
        fill: "#80DEEA"
      }),
      _react2.default.createElement("path", {
        d:
          "m110.53 106.03-0.64-1.34-0.29-0.6c-0.13 0.2-0.29 0.4-0.44 0.6-0.21 0.28-0.45 0.56-0.71 0.85-0.13 0.14-0.25 0.28-0.38 0.42l0.03 0.07 0.35 0.88 0.93 2.31h2.1v-1.21l-0.95-1.98z",
        fill: "#64B5F6"
      }),
      _react2.default.createElement("path", {
        d:
          "m110.47 101.44c0 0.07-0.02 0.13-0.02 0.2l1.03 1.92v-1.56h-0.01c0-0.64-0.04-1.24-0.1-1.82h-1.13c0.15 0.39 0.23 0.81 0.23 1.26z",
        fill: "#3F51B5"
      }),
      _react2.default.createElement("polygon", {
        points: "105.93 113.23 105.93 116 108.44 116 109.35 116 108.44 113.23",
        fill: "#29B6F6"
      }),
      _react2.default.createElement("polygon", {
        points:
          "109.38 109.22 111 113.23 111.48 114.42 111.48 113.23 111.48 109.22",
        fill: "#81D4FA"
      }),
      _react2.default.createElement("polygon", {
        points: "104 92.48 104.08 92.65 104.06 91.65 104.07 92.33",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "104 92.48 104.07 92.33 104.06 91.65 103.94 91.65 103.93 92.33",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "105.09 91.65 104.03 89.65 104.06 91.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "103.98 89.56 103.97 89.65 104 89.61",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "104.06 91.65 104.03 89.65 104.03 89.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "104.06 91.65 104.03 89.65 104 89.61 103.97 89.65 103.94 91.65",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m107.24 95.66-1.31-2.44-0.84-1.57h-1.03l0.02 1 1.45 3.01 0.4 0.84 0.68 1.42c0.1-0.01 0.2-0.03 0.3-0.03 0.66 0 1.25 0.18 1.77 0.47l-1.44-2.7z",
        fill: "#C5E1A5"
      }),
      _react2.default.createElement("path", {
        d:
          "m110.45 101.64c-0.04 0.85-0.33 1.65-0.86 2.46l0.29 0.6 0.64 1.34 0.95 1.98v-4.46l-1.02-1.92z",
        fill: "#1E88E5"
      }),
      _react2.default.createElement("polygon", {
        points: "111.48 114.42 111.48 116 111.5 114.47",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points:
          "111 113.23 108.44 113.23 108.44 113.23 109.35 116 111.48 116 111.48 114.42",
        fill: "#80DEEA"
      }),
      _react2.default.createElement("polygon", {
        points: "103.81 98.6 103.81 98.74",
        fill: "#FFEA00"
      }),
      _react2.default.createElement("polygon", {
        points: "104.2 99.05 104.19 98.6 104.19 98.6",
        fill: "#FFEA00"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 106.53,
          x2: 111,
          y1: 109.6,
          y2: 109.6,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFC107",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF59D",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m109.38 109.22-0.93-2.31-0.35-0.88-0.03-0.07-0.07 0.07c-0.44 0.45-0.93 0.91-1.46 1.4l0.59 1.79 1.32 4.01h2.55l-1.62-4.01z",
        fill: "url(#i)"
      }),
      _react2.default.createElement("polygon", {
        points: "103.86 95.66 103.85 96.26 103.85 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "103.81 98.6 103.85 96.26 103.85 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "103.87 95.56 103.86 95.66 103.9 95.66",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "104 95.89 103.9 95.66 103.86 95.66 103.85 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "104.19 98.6 104.19 98.6 104.15 96.26 104.15 96.26",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m105.93 96.5-0.4-0.84-1.45-3.01 0.06 3.01 0.01 0.6 0.04 2.34-0.04-2.34-0.15-0.37-0.15 0.36-0.04 2.34 0.04-2.34 0.01-0.6 0.06-3.01-1.45 3.01-0.4 0.84-0.68 1.42c0.23 0.02 0.46 0.05 0.68 0.12 0.32 0.09 0.62 0.22 0.91 0.39 0.3 0.17 0.58 0.38 0.82 0.63l0.01-0.31-0.01 0.31c0.06 0.07 0.14 0.12 0.2 0.19 0.06-0.07 0.13-0.12 0.2-0.19 0.16-0.17 0.34-0.32 0.53-0.46 0.09-0.06 0.19-0.12 0.29-0.18 0.29-0.17 0.59-0.3 0.91-0.39 0.22-0.06 0.45-0.1 0.68-0.12l-0.68-1.4z",
        fill: "#26C6DA"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.07 98.03c-0.22-0.06-0.45-0.1-0.68-0.12l-0.33 0.68-0.76 1.58h1.97l0.64-1.58 0.07-0.18c-0.29-0.15-0.59-0.29-0.91-0.38z",
        fill: "#FF8A80"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.07 100.18h-1.77l-0.74 1.53-1.15 2.39c0.13 0.2 0.29 0.4 0.44 0.6 0.21 0.28 0.45 0.56 0.71 0.85 0.13 0.14 0.25 0.28 0.38 0.42l0.51-1.26 1.82-4.52h-0.2z",
        fill: "#F06292"
      }),
      _react2.default.createElement("path", {
        d:
          "m99.56 100.18h-1.8c-0.14 0.39-0.23 0.82-0.23 1.27 0 0.07 0.02 0.13 0.02 0.2 0.04 0.85 0.33 1.65 0.86 2.46l1.15-2.39 0.74-1.53h-0.74z",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("path", {
        d:
          "m101.09 97.88c-0.66 0-1.25 0.18-1.77 0.47-0.71 0.4-1.26 1.04-1.55 1.82h2.54l0.76-1.58 0.33-0.68c-0.12 0-0.21-0.03-0.31-0.03z",
        fill: "#F8BBD0"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.07 104.7h-1.62l-0.51 1.26 0.07 0.07c0.44 0.45 0.93 0.91 1.46 1.4l0.46-1.4 0.14-0.42 0.3-0.92h-0.3z",
        fill: "#FF9800"
      }),
      _react2.default.createElement("polygon", {
        points:
          "104.22 100.43 104.14 100.18 103.86 100.18 103.78 100.43 102.37 104.7 103.7 104.7 104.3 104.7 105.63 104.7",
        fill: "#F06292"
      }),
      _react2.default.createElement("polygon", {
        points:
          "103.78 100.18 102.27 100.18 100.45 104.7 102.07 104.7 102.37 104.7 103.78 100.43 103.86 100.18",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.07 106.03-0.14-0.42-0.3-0.92h-3.27l-0.3 0.92-0.14 0.42-0.46 1.4c0.2 0.18 0.39 0.36 0.6 0.55 0.33 0.3 0.67 0.6 1.02 0.91l0.91 0.91 0.91-0.91c0.36-0.32 0.69-0.62 1.02-0.91 0.21-0.19 0.4-0.37 0.6-0.55l-0.45-1.4z",
        fill: "#EC407A"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.94 98.6-0.33-0.68c-0.23 0.02-0.46 0.05-0.68 0.12-0.32 0.09-0.62 0.22-0.91 0.39l0.07 0.18 0.64 1.58h1.97l-0.76-1.59z",
        fill: "#FF8A80"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.44 101.71-0.74-1.53h-1.97l1.82 4.52 0.51 1.26c0.14-0.14 0.26-0.28 0.38-0.42 0.26-0.29 0.5-0.57 0.71-0.85 0.15-0.2 0.31-0.4 0.44-0.6l-1.15-2.38z",
        fill: "#F06292"
      }),
      _react2.default.createElement("path", {
        d:
          "m110.24 100.18h-2.54l0.74 1.53 1.15 2.39c0.52-0.81 0.81-1.61 0.86-2.46 0-0.07 0.02-0.13 0.02-0.2 0-0.45-0.08-0.87-0.23-1.26z",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.69 98.36c-0.52-0.29-1.12-0.47-1.77-0.47-0.1 0-0.2 0.03-0.3 0.03l0.33 0.68 0.76 1.58h2.54c-0.3-0.79-0.85-1.42-1.56-1.82z",
        fill: "#F8BBD0"
      }),
      _react2.default.createElement("polygon", {
        points:
          "105.73 100.18 104.22 100.18 104.14 100.18 104.22 100.43 105.63 104.7 105.93 104.7 107.55 104.7",
        fill: "#FF80AB"
      }),
      _react2.default.createElement("polygon", {
        points: "104.2 99.14 104.2 99.14 104.2 99.05 104.2 99.05",
        fill: "#C62828"
      }),
      _react2.default.createElement("path", {
        d:
          "m107.55 104.7h-1.92l0.3 0.92 0.14 0.42 0.46 1.4c0.53-0.48 1.02-0.95 1.46-1.4l0.07-0.07-0.51-1.27z",
        fill: "#FF9800"
      }),
      _react2.default.createElement("path", {
        d:
          "m105.09 98.6-0.07-0.18c-0.1 0.06-0.2 0.11-0.29 0.18-0.19 0.13-0.37 0.29-0.53 0.46v0.09-0.09c-0.06 0.07-0.14 0.12-0.2 0.19-0.06-0.07-0.13-0.12-0.2-0.19-0.24-0.25-0.52-0.46-0.82-0.63l-0.07 0.18-0.64 1.58h3.46l-0.64-1.59z",
        fill: "#FF5722"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "h",
          x1: 104,
          x2: 104,
          y1: 88.024,
          y2: 98.095,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F48FB1",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FCE4EC",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m104 99.22c0.84-3.75 2.58-6.21 3.94-7.65-1.94-2.42-3.94-3.45-3.94-3.45s-2 1.03-3.94 3.45c1.36 1.44 3.1 3.9 3.94 7.65z",
        fill: "url(#h)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m111.98 100.84c-0.12-3.52-1.11-6.66-2.94-9.33-0.22-0.33-0.45-0.63-0.68-0.92-1.97-2.47-4.01-3.54-4.09-3.58l-0.27-0.14-0.27 0.14c-0.08 0.04-2.12 1.11-4.1 3.58-0.23 0.29-0.45 0.59-0.68 0.92-1.83 2.67-2.82 5.81-2.94 9.33l-0.01 15.06h16v-15.06h-0.02zm-7.98-12.65c0.56 0.34 1.91 1.27 3.27 2.91-1.22 1.48-2.59 3.72-3.31 6.92-0.71-3.16-2.06-5.39-3.28-6.87 1.37-1.66 2.75-2.61 3.32-2.96zm-6.84 13.81 0.01-0.57c0.02-3.52 0.95-6.64 2.75-9.26 0.04-0.05 0.08-0.1 0.11-0.15 1.55 1.87 3.35 5.13 3.44 10.26l-0.01 12.47h-6.29v-12.75zm7.31 12.74v-12.83c0.17-4.96 1.94-8.12 3.46-9.94 0.05 0.07 0.1 0.13 0.15 0.2 1.8 2.62 2.73 5.74 2.75 9.26l0.01 13.32h-6.37z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = Wedding;
