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

function Motorcycle(props) {
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
      d:
        "M104,89.5c-9.53,0-17.25,7.72-17.25,17.25S94.47,124,104,124s17.25-7.72,17.25-17.25S113.53,89.5,104,89.5z M104,118.1 c-6.27,0-11.35-5.08-11.35-11.35S97.73,95.4,104,95.4s11.35,5.08,11.35,11.35S110.27,118.1,104,118.1z"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.5766 .817 -.817 .5766 131.58 -39.512)",
      x: 102.25,
      y: 94.17,
      width: 3.33,
      height: 26.08
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-.6174 .7866 -.7866 -.6174 252.01 91.182)",
      x: 102.17,
      y: 93.83,
      width: 3.33,
      height: 26.08
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 104,
        cy: 106.75,
        r: 7.0171,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.0093054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DBDBDB",
        offset: 0.1738
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CBCBCB",
        offset: 0.3806
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B1B1B1",
        offset: 0.6101
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8E8E8E",
        offset: 0.8543
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 104,
      cy: 106.75,
      r: 7.02,
      fill: "url(#h)"
    }),
    _react2.default.createElement("circle", {
      cx: 104,
      cy: 106.75,
      r: 3.23,
      fill: "#666"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.75 76.92c0.42-0.17 0.92-1.08 4.33-2.5 3.42-1.42 5.25-1.42 8.17 0.25s23.83 11.92 26.58 13.5 8.58 7.75 10.42 9.5v15.92l-49.5-36.67z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m87.1 80.87c0.78-0.29 1.68-0.57 2.4-0.15 0.51 0.3 0.77 0.87 1 1.41 0.89 2.06 1.78 4.12 2.67 6.18-5.38 2.37-10.89 4.48-16.48 6.3-0.63 0.21-3.24-4.22-3.56-4.78-0.91-1.6-1.51-2.87 0.35-3.88 4.12-2.23 9.23-3.44 13.62-5.08z",
      fill: "#999"
    }),
    _react2.default.createElement("path", {
      d:
        "m20.83 89.88c-9.53 0-17.25 7.72-17.25 17.25s7.72 17.25 17.25 17.25 17.25-7.72 17.25-17.25-7.72-17.25-17.25-17.25zm0 28.6c-6.27 0-11.35-5.08-11.35-11.35s5.08-11.35 11.35-11.35 11.35 5.08 11.35 11.35-5.08 11.35-11.35 11.35z"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.5766 .817 -.817 .5766 96.681 28.594)",
      x: 19.08,
      y: 94.54,
      width: 3.33,
      height: 26.08
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-.6174 .7866 -.7866 -.6174 117.79 157.21)",
      x: 19,
      y: 94.21,
      width: 3.33,
      height: 26.08
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 20.833,
        cy: 107.12,
        r: 7.0171,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.0093054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DBDBDB",
        offset: 0.1738
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CBCBCB",
        offset: 0.3806
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B1B1B1",
        offset: 0.6101
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8E8E8E",
        offset: 0.8543
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 20.83,
      cy: 107.12,
      r: 7.02,
      fill: "url(#g)"
    }),
    _react2.default.createElement("circle", {
      cx: 20.83,
      cy: 107.12,
      r: 3.23,
      fill: "#666"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m20.83 91.75c8.41 0 15.25 6.84 15.25 15.25s-6.84 15.25-15.25 15.25-15.25-6.84-15.25-15.25 6.84-15.25 15.25-15.25m0-2c-9.53 0-17.25 7.72-17.25 17.25s7.72 17.25 17.25 17.25 17.25-7.72 17.25-17.25-7.72-17.25-17.25-17.25z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.08 91.75c8.41 0 15.25 6.84 15.25 15.25s-6.84 15.25-15.25 15.25-15.25-6.84-15.25-15.25 6.84-15.25 15.25-15.25m0-2c-9.53 0-17.25 7.72-17.25 17.25s7.72 17.25 17.25 17.25 17.25-7.72 17.25-17.25-7.72-17.25-17.25-17.25z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.75 101.25-28.75-5.63 0.12 5.75 27.5 5.5c0.47-2.22 0.59-3.41 1.13-5.62z",
      fill: "#808080"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 78.568,
        x2: 124.07,
        y1: 100.72,
        y2: 100.72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.0093054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DBDBDB",
        offset: 0.1738
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CBCBCB",
        offset: 0.3806
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B1B1B1",
        offset: 0.6101
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8E8E8E",
        offset: 0.8543
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m79.58 108.6c3.87-1.6 11.26-4.55 13.71-5.52 0.51-0.2 0.88-0.65 1-1.19l0.16-0.76c0.11-0.53 0.48-0.98 0.99-1.18l24.83-10.15c0.82-0.34 1.76 0.04 2.12 0.86l1.55 3.49c0.37 0.84-0.02 1.82-0.86 2.18l-24.48 10.41c-0.47 0.2-1.01 0.17-1.45-0.08l-0.91-0.52c-0.43-0.25-0.96-0.28-1.42-0.1l-13.98 5.59c-0.57 0.23-1.21 0.12-1.68-0.28-0.95-0.78-0.71-2.28 0.42-2.75z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m20.78 107.19c-0.71-0.17-1.14-0.89-0.96-1.59l2.43-9.83c0.17-0.7 0.88-1.13 1.59-0.96 0.7 0.17 1.13 0.88 0.96 1.59l-2.43 9.83c-0.17 0.7-0.88 1.13-1.59 0.96z",
      fill: "#ccc"
    }),
    _react2.default.createElement("path", {
      d:
        "m20.09 75.44c-0.86-0.76-1.59-2.92-2.84-3-1.75 4.12-1.06 7.97-0.23 10.68 4.35-1.41 4.29-5.55 3.07-7.68z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m33 78.02c-0.25 0-0.5-0.05-0.74-0.14-1.03-0.41-1.53-1.57-1.12-2.6l3.1-7.8c0.15-0.38 0.55-1.39 1.67-1.82 1.04-0.4 2.1 0.06 2.63 0.37 0.05 0.03 0.11 0.07 0.16 0.1l4.48 3.21c0.9 0.64 1.11 1.89 0.46 2.79-0.64 0.9-1.89 1.11-2.79 0.46l-3.39-2.42-2.62 6.58c-0.3 0.79-1.05 1.27-1.84 1.27z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 48.351,
        x2: 48.351,
        y1: 57.833,
        y2: 113.66,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.0093054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.2301
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBBB2B",
        offset: 0.514
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9AD27",
        offset: 0.7778
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.95 113.58c2.41 0 3.51-3 1.67-4.55-4.39-3.7-9.95-8.66-11.03-10.86-1.83-3.75 0.25-4.67-9.5-11.58-7.1-5.04-10.14-7.03-11.26-7.73-0.36-0.23-0.77-0.36-1.19-0.39-1.79-0.11-7.06-0.52-10.88-1.55-4.67-1.25-11.42-7.17-4.17-11.67s14.25-5.67 8.42-7.33c-4.44-1.27-14.92 5.33-20.08 11.75-0.55 0.69-1.01 1.42-1.39 2.18-0.48 0.98-0.09 1.65 0.89 2.68 0.02 0.02 0.05 0.03 0.07 0.05 0.36 0.24 0.61 0.6 0.75 1.01 0.55 1.61 0.49 3.97-1.19 5.41-0.84 0.71-1.12 1.92-0.66 2.92 0.95 2.06 2.39 3.61 4.11 4.18 5.08 1.67 6.5 6.58 8.08 7.92 1.58 1.33 7.67 6.17 8.83 9.25 0.64 1.7 0.83 4.05 0.87 5.82 0.03 1.39 1.16 2.51 2.55 2.51h35.11z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 82.44,
        x2: 103.44,
        y1: 64.822,
        y2: 86.322,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0077351
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4C4C4C",
        offset: 0.2083
      }),
      _react2.default.createElement("stop", {
        stopColor: "#343434",
        offset: 0.5002
      }),
      _react2.default.createElement("stop", {
        stopColor: "#262626",
        offset: 0.7715
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114 71c2-1 2.5-2.74 2.75-4.61-8.09 0.43-20.45 3.29-21.33 3.95-1.33 1-3.17 4.75-7.5 5.42s-13.17 1.5-13.17 1.5-6.58 7.74-3.75 9.32 2.83 1.58 2.83 1.58l6.75-3.33s4.18-0.26 7.18 0.73c5.12-3.42 9.68-8.14 14.24-11.56 2-2 8-1 12-3z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 112.52,
        x2: 122.77,
        y1: 74.05,
        y2: 87.8,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0084158
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B6B6B6",
        offset: 0.1823
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A1A1A1",
        offset: 0.4419
      }),
      _react2.default.createElement("stop", {
        stopColor: "#808080",
        offset: 0.7537
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.45 87.38c0.75 0.37 1.76 0.67 2.35 0.08 0.6-0.61 0.27-1.63-0.11-2.39-1.33-2.69-2.84-5.3-4.51-7.8-0.63-0.93-1.33-1.9-2.37-2.33-1.53-0.63-3.8 0.09-4.93 1.27-1.35 1.41 0.01 2.78 0.99 4.07 2.27 2.97 5.22 5.43 8.58 7.1z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 112.08,
        x2: 122.08,
        y1: 76.375,
        y2: 76.375,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.0093054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DBDBDB",
        offset: 0.1738
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CBCBCB",
        offset: 0.3806
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B1B1B1",
        offset: 0.6101
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8E8E8E",
        offset: 0.8543
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "122.08 78.83 112.08 78.75 112.08 73.92 122.08 74.08",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "122.08 78.83 120.19 78.81 120.12 74.06 122.08 74.08",
      fill: "#FF6F00"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 59.833,
        x2: 59.833,
        y1: 66.833,
        y2: 88.189,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.0093054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.2301
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBBB2B",
        offset: 0.514
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9AD27",
        offset: 0.7778
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m43.5 73.42s3.42-7.58 15.75-7 16.42 4.16 16.92 10.08l-5.17 10.08s-1.75 3.33-5.17 1.5c-2.55-1.37-22.33-14.66-22.33-14.66z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 105.73,
        x2: 105.73,
        y1: 69.167,
        y2: 85.854,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.0093054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.2301
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBBB2B",
        offset: 0.514
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9AD27",
        offset: 0.7778
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116.75 66.39c-0.25 1.87-0.75 3.61-2.75 4.61-4 2-10 1-12 3-4.56 3.42-9.12 8.14-14.23 11.56 0.77 0.25 1.46 0.58 1.98 1.02 2.58 2.17 5.83 2.08 9.33 0.33s23.58-13.5 24.58-18.58c0.35-1.74-2.7-2.17-6.91-1.94z",
      fill: "url(#k)"
    }),
    _react2.default.createElement("path", {
      d:
        "m8.83 91.92s6.42-5.5 13.83-4 5.17 9.83 0.17 10.75-1.5-4.75-5.42-5.17-9.74 2.25-8.58-1.58z",
      fill: "#FFB300"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 41.144,
        x2: 41.144,
        y1: 80.875,
        y2: 94.382,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0077351
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4C4C4C",
        offset: 0.2083
      }),
      _react2.default.createElement("stop", {
        stopColor: "#343434",
        offset: 0.5002
      }),
      _react2.default.createElement("stop", {
        stopColor: "#262626",
        offset: 0.7715
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m32.69 82.44c-1.97 1.45 3.67 10.53 13.19 11.25s0.23-5.05-4.75-9.75c-3.74-3.53-6.32-3.06-8.44-1.5z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 26.576,
        x2: 33.029,
        y1: 68.635,
        y2: 75.241,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0077351
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4C4C4C",
        offset: 0.2083
      }),
      _react2.default.createElement("stop", {
        stopColor: "#343434",
        offset: 0.5002
      }),
      _react2.default.createElement("stop", {
        stopColor: "#262626",
        offset: 0.7715
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m26.22 72.96c-0.82-2.07 0.1-4.67 2.03-5.76 0.53-0.3 1.2-0.49 1.73-0.18 0.42 0.25 0.62 0.74 0.8 1.2 0.63 1.68 1.26 3.35 1.88 5.03 0.24 0.63 0.47 1.32 0.26 1.96-0.42 1.24-2.65 0.77-3.57 0.51-1.38-0.41-2.6-1.42-3.13-2.76z",
      fill: "url(#i)"
    }),
    _react2.default.createElement("circle", {
      cx: 66.02,
      cy: 98.69,
      r: 5.69,
      fill: "#333"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.02 93.5c2.86 0 5.19 2.33 5.19 5.19s-2.33 5.19-5.19 5.19-5.19-2.33-5.19-5.19 2.33-5.19 5.19-5.19m0-1c-3.42 0-6.19 2.77-6.19 6.19s2.77 6.19 6.19 6.19 6.19-2.77 6.19-6.19-2.77-6.19-6.19-6.19z",
      fill: "#808080"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.02 100.61c-1.06 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92 1.92 0.86 1.92 1.92-0.86 1.92-1.92 1.92z",
      fill: "#333"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.02 97.27c0.78 0 1.42 0.64 1.42 1.42s-0.64 1.42-1.42 1.42-1.42-0.64-1.42-1.42 0.64-1.42 1.42-1.42m0-1c-1.34 0-2.42 1.08-2.42 2.42s1.08 2.42 2.42 2.42 2.42-1.08 2.42-2.42-1.08-2.42-2.42-2.42z",
      fill: "#808080"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m36.42 60.08c-0.03 0.01-0.06 0.03-0.09 0.04-1.93 0.92-4.33 2.06-6.8 3.59-1.13 0.7-2.04 1.49-2.71 2.34-0.58 0.74-0.57 1.78 0.02 2.51 0.39 0.48 0.96 0.73 1.55 0.73 0.19 0 0.38-0.03 0.57-0.08l0.53 1.43 0.95 2.55c0.29 0.77 1.03 1.29 1.85 1.3h0.02c0.82 0 1.56-0.5 1.86-1.26l1.93-4.85c0.11-0.29 0.25-0.58 0.52-0.69 0.03-0.01 0.07-0.02 0.14-0.02 0.2 0 0.49 0.1 0.77 0.26l4.48 3.21-3.39-2.42c-0.34-0.25-0.75-0.37-1.16-0.37-0.19 0-0.38 0.03-0.56 0.08-0.59 0.17-1.07 0.61-1.29 1.18l-2.56 6.44c-0.03 0.04-0.05 0.09-0.07 0.13-0.38 0.76-0.24 1.67 0.34 2.28 0.39 0.4 0.91 0.62 1.44 0.62 0.28 0 0.56-0.06 0.82-0.18 0.35-0.16 0.61-0.37 0.83-0.56 0.41-0.34 1.18-0.98 3.43-1.91 1.45-0.6 2.48-0.87 3.34-0.87 0.07 0 0.14 0 0.21 0.01h0.1c0.77 0 1.48-0.46 1.82-1.16 0.11-0.24 2.9-5.86 12.59-5.86 0.4 0 0.82 0.01 1.24 0.03 12.05 0.57 14.47 3.98 14.96 7.7l-0.06 0.11c-0.33 0.65-0.29 1.43 0.13 2.04 0.37 0.55 1 0.87 1.65 0.87 0.06 0 0.13 0 0.2-0.01 2.51-0.25 8.73-0.88 12.19-1.41 3.93-0.6 6.18-3.26 7.52-4.84 0.26-0.31 0.58-0.69 0.78-0.87 1.65-0.65 12.67-3.22 20.33-3.63 0.65-0.03 1.26-0.05 1.81-0.05 1.42 0 2.27 0.12 2.75 0.23-0.42 0.67-1.42 1.92-3.84 3.93-0.64 0.53-0.88 1.41-0.61 2.2 0.28 0.79 1.02 1.32 1.85 1.34l1.27 0.02v0.77c-0.68 0.04-1.31 0.42-1.64 1.02-0.36 0.64-0.33 1.42 0.06 2.04 1.09 1.72 2.09 3.49 3 5.26-2.71-1.5-5.13-3.59-7.03-6.08-0.11-0.14-0.22-0.28-0.33-0.42-0.18-0.23-0.36-0.45-0.52-0.68-0.39-0.56-1.01-0.85-1.64-0.85-0.39 0-0.77 0.11-1.12 0.34-5.4 3.64-11 6.85-12.67 7.69-1.44 0.72-2.76 1.08-3.95 1.08-0.29 0-0.57-0.02-0.84-0.06-0.11-0.02-0.21-0.02-0.31-0.02-0.59 0-1.15 0.26-1.53 0.71-3.93 1.71-8.03 3.31-12.19 4.76-0.65 0.23-1.14 0.78-1.29 1.45-0.15 0.68 0.06 1.38 0.55 1.87 0.92 0.9 1.8 1.78 2.54 2.52 0.41 0.41 0.79 0.79 1.11 1.1 0.13 0.82 0.76 1.48 1.59 1.65l10.67 2.09c0.13 0.02 0.25 0.04 0.38 0.04 0.5 0 1-0.19 1.37-0.54l24.41-9.98 1.26 2.84-23.98 10.19-0.07-0.04c-0.18-0.1-0.38-0.18-0.59-0.22l-2.22-0.44c-0.13-0.03-0.26-0.04-0.39-0.04-0.25 0-0.51 0.05-0.74 0.14l-10.45 4.18c-0.57 0.23-1 0.71-1.17 1.28-0.3-0.17-0.65-0.26-0.99-0.26-0.25 0-0.5 0.05-0.74 0.14l-0.37 0.15c-0.25-0.1-0.51-0.15-0.77-0.15-0.29 0-0.57 0.06-0.84 0.19-0.56 0.26-0.97 0.76-1.11 1.36-0.03 0.14-0.15 0.46-0.57 0.46h-35.11c-0.3 0-0.55-0.24-0.55-0.56-0.06-2.71-0.4-4.89-1-6.48-1.1-2.91-5.11-6.51-8.9-9.64-0.2-0.17-0.38-0.31-0.52-0.43-0.24-0.2-0.69-0.91-1.09-1.53-0.22-0.34-0.45-0.71-0.7-1.08-0.38-0.56-1.01-0.88-1.66-0.88-0.19 0-0.38 0.03-0.57 0.08-0.84 0.25-1.42 1.02-1.43 1.9-0.01 1.54-1.15 3.41-2.95 3.74-0.24 0.04-0.45 0.07-0.62 0.07h-0.05c-0.06-0.21-0.12-0.56-0.16-0.81-0.22-1.33-0.69-4.09-4.01-4.44-0.36-0.04-0.74-0.06-1.14-0.06-1.22 0-2.49 0.17-3.61 0.33-0.11 0.02-0.22 0.03-0.33 0.04 1.82-1.02 4.51-2.15 7.51-2.15 0.16 0 0.33 0 0.49 0.01h0.08c0.89 0 1.68-0.59 1.92-1.46 0.25-0.89-0.14-1.84-0.95-2.29-0.92-0.51-1.77-1.53-2.39-2.87-0.02-0.04-0.03-0.1-0.03-0.14-0.03-0.42-0.19-0.82-0.45-1.14-0.8-2.99-0.75-5.58 0.16-8.03 0.24-0.29 0.4-0.64 0.44-1.02 0.32-0.65 0.71-1.26 1.15-1.81 4.01-5 11.49-10.07 15.94-11.02m60.2 12.02m24.4 19.72m-24.7 10.08m-58.56-43.97c-4.93 0-14.11 6.03-18.84 11.91-0.55 0.69-1.01 1.42-1.39 2.18-0.11 0.22-0.16 0.42-0.19 0.61-0.03 0-0.06-0.02-0.09-0.02-1.75 4.12-1.06 7.97-0.23 10.68l0.15-0.06c0.02 0.29 0.09 0.58 0.21 0.85 0.79 1.7 1.91 3.04 3.24 3.78-0.19-0.01-0.38-0.01-0.57-0.01-6.25 0-11.22 4.24-11.22 4.24-0.51 1.66 0.3 2.1 1.7 2.1 1.58 0 3.91-0.56 5.95-0.56 0.32 0 0.63 0.01 0.93 0.05 3.62 0.39 0.9 5.27 4.43 5.27 0.29 0 0.61-0.03 0.98-0.1 2.69-0.49 4.56-3.13 4.59-5.69 0.87 1.3 1.51 2.47 2.16 3.03 1.58 1.33 7.67 6.17 8.83 9.25 0.64 1.7 0.83 4.05 0.87 5.82 0.03 1.39 1.16 2.51 2.55 2.51h35.11c1.34 0 2.27-0.93 2.52-2.01 0.24 0.12 0.5 0.19 0.76 0.19 0.2 0 0.4-0.04 0.6-0.11l0.52-0.21 2.9 2.15v-3.31l10.45-4.18 2.22 0.44 0.22 0.12c0.25 0.14 0.52 0.21 0.79 0.21 0.13 0 0.27-0.02 0.4-0.05l0.29 0.06c0.01-0.06 0.02-0.11 0.03-0.16l24.41-10.38c0.84-0.36 1.23-1.34 0.86-2.18l-1.55-3.49c-0.27-0.61-0.87-0.98-1.5-0.98-0.21 0-0.42 0.04-0.62 0.12l-24.83 10.15c-0.2 0.08-0.37 0.21-0.52 0.35l-10.67-2.09v-0.55c-0.82-0.78-2.44-2.45-4.22-4.19 4.45-1.55 8.83-3.27 13.14-5.17-0.03-0.06-0.05-0.13-0.08-0.19 0.38 0.06 0.76 0.09 1.15 0.09 1.52 0 3.15-0.45 4.84-1.29 1.72-0.86 7.41-4.12 12.9-7.82 0.28 0.4 0.6 0.79 0.9 1.17 2.27 2.98 5.22 5.44 8.57 7.11 0.44 0.22 0.97 0.41 1.46 0.41 0.34 0 0.65-0.09 0.89-0.34 0.6-0.61 0.27-1.63-0.11-2.39-1.06-2.14-2.23-4.22-3.5-6.24l1.9 0.02v-4.75l-3.23-0.05c2.63-2.19 4.53-4.22 4.82-5.7 0.29-1.46-1.82-2-5-2-0.6 0-1.24 0.02-1.92 0.06-8.09 0.43-20.45 3.29-21.33 3.95-1.33 1-3.17 4.75-7.5 5.42-3.41 0.52-9.6 1.15-12.08 1.39l0.33-0.64c-0.5-5.92-4.58-9.5-16.92-10.08-0.46-0.02-0.9-0.03-1.34-0.03-11.11 0-14.33 6.86-14.41 7.02-0.1-0.01-0.21-0.01-0.31-0.01-1.2 0-2.47 0.35-4.11 1.02-3.37 1.4-3.9 2.3-4.31 2.49 0.03-0.05 0.06-0.09 0.09-0.15l2.62-6.58 3.39 2.42c0.35 0.25 0.76 0.37 1.16 0.37 0.62 0 1.24-0.29 1.63-0.84 0.64-0.9 0.43-2.15-0.46-2.79l-4.47-3.25c-0.05-0.04-0.11-0.07-0.16-0.1-0.39-0.22-1.05-0.53-1.77-0.53-0.28 0-0.57 0.04-0.86 0.16-1.12 0.43-1.52 1.44-1.67 1.82l-1.93 4.84c-0.51-1.37-1.03-2.74-1.54-4.11-0.17-0.46-0.37-0.95-0.8-1.2-0.19-0.11-0.39-0.15-0.6-0.15-0.33 0-0.68 0.11-0.99 0.27 0.51-0.64 1.22-1.27 2.2-1.88 7.25-4.5 14.25-5.67 8.42-7.33-0.37-0.11-0.79-0.16-1.24-0.16z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Motorcycle;
