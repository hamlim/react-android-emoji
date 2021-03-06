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

function PostalHorn(props) {
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
        x1: 24,
        x2: 24,
        y1: 86.833,
        y2: 99.328,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBF1D",
        offset: 0.5092
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB30C",
        offset: 0.8171
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 87,
      width: 40,
      height: 12,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 8,
        x2: 8,
        y1: 85.5,
        y2: 101.32,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBF1D",
        offset: 0.5092
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB30C",
        offset: 0.8171
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m11 100.5h-6c-0.55 0-1-0.45-1-1v-13c0-0.55 0.45-1 1-1h6c0.55 0 1 0.45 1 1v13c0 0.55-0.45 1-1 1z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 27,
        x2: 15.476,
        y1: 93,
        y2: 93,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 87,
      width: 40,
      height: 12,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 48.859,
        cy: 127.68,
        r: 20.865,
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
        "m52.65 113.85c0-6.95-3.9-6.25-3.9-6.25s-3.9-0.71-3.9 6.25c0 3.94-0.38 6.67-0.7 8.3-0.19 0.96 0.53 1.85 1.5 1.85h6.2c0.97 0 1.69-0.89 1.5-1.85-0.33-1.63-0.7-4.36-0.7-8.3z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 48.743,
        cy: 97.83,
        r: 8.6883,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 48.74,
      cy: 104.23,
      r: 3.81,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48.74 102.42c1 0 1.81 0.81 1.81 1.81 0 0.75-0.46 1.41-1.18 1.68l-0.63 0.24-0.63-0.24c-0.72-0.27-1.18-0.93-1.18-1.68 0.01-1 0.82-1.81 1.81-1.81m0 6.99 0.6 0.24c0.63 0.25 1.31 1.48 1.31 4.2 0 3.71 0.33 6.42 0.64 8.15h-5.09c0.31-1.74 0.64-4.44 0.64-8.15 0-2.72 0.67-3.95 1.31-4.2l0.59-0.24m0-8.99c-2.1 0-3.81 1.7-3.81 3.81 0 1.63 1.03 3.01 2.48 3.56-1.13 0.44-2.58 1.83-2.58 6.06 0 3.94-0.38 6.67-0.7 8.3-0.19 0.96 0.53 1.85 1.5 1.85h6.2c0.97 0 1.69-0.89 1.5-1.85-0.33-1.63-0.7-4.36-0.7-8.3 0-4.23-1.44-5.62-2.58-6.06 1.44-0.54 2.48-1.92 2.48-3.56 0.02-2.1-1.68-3.81-3.79-3.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 41.569,
        cy: 131.49,
        r: 25.861,
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
        "m45.51 113.85c0-6.95-3.9-6.25-3.9-6.25s-3.9-0.71-3.9 6.25c0 3.94-0.38 6.67-0.7 8.3-0.19 0.96 0.53 1.85 1.5 1.85h6.2c0.97 0 1.69-0.89 1.5-1.85-0.32-1.63-0.7-4.36-0.7-8.3z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 41.607,
        cy: 97.83,
        r: 8.6883,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 41.61,
      cy: 104.23,
      r: 3.81,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m41.61 102.42c1 0 1.81 0.81 1.81 1.81 0 0.75-0.46 1.41-1.18 1.68l-0.63 0.24-0.63-0.24c-0.72-0.27-1.18-0.93-1.18-1.68 0-1 0.81-1.81 1.81-1.81m0 6.99 0.6 0.24c0.63 0.25 1.31 1.48 1.31 4.2 0 3.71 0.33 6.42 0.64 8.15h-5.08c0.31-1.74 0.64-4.44 0.64-8.15 0-2.72 0.67-3.95 1.31-4.2l0.58-0.24m0-8.99c-2.1 0-3.81 1.7-3.81 3.81 0 1.63 1.03 3.01 2.48 3.56-1.13 0.44-2.58 1.83-2.58 6.06 0 3.94-0.38 6.67-0.7 8.3-0.19 0.96 0.53 1.85 1.5 1.85h6.2c0.97 0 1.69-0.89 1.5-1.85-0.33-1.63-0.7-4.36-0.7-8.3 0-4.23-1.44-5.62-2.58-6.06 1.44-0.54 2.48-1.92 2.48-3.56 0.01-2.1-1.69-3.81-3.79-3.81z",
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
          "m9 88.5v1.5h32v6h-32v1.5h-2v-9h2m2-3h-6c-0.55 0-1 0.45-1 1v13c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-0.5h32v-12h-32v-0.5c0-0.55-0.45-1-1-1z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 43,
        cy: 32.333,
        r: 58.902,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBF1D",
        offset: 0.5092
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB30C",
        offset: 0.8171
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m44 47c11.03 0 20 8.97 20 20s-8.97 20-20 20-20-8.97-20-20 8.97-20 20-20m0-12c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 59.788,
        x2: 59.788,
        y1: 85.5,
        y2: 62.499,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M44,35c-0.14,0-0.27,0.01-0.41,0.01v12.01c0.14,0,0.27-0.02,0.41-0.02c11.03,0,20,8.97,20,20 c0,9.73-6.99,17.85-16.21,19.63c0.13,0.24,0.25,0.49,0.37,0.74c0.56-0.06,4.31-0.46,4.98-0.63c4.05-1.04,17.74-5.6,22.84-20.42 C75.62,48.96,61.45,35,44,35z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m44 38c15.99 0 29 13.01 29 29s-13.01 29-29 29-29-13.01-29-29 13.01-29 29-29m0 52c12.68 0 23-10.32 23-23s-10.32-23-23-23-23 10.32-23 23 10.32 23 23 23m0-55c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm0 52c-11.03 0-20-8.97-20-20s8.97-20 20-20 20 8.97 20 20-8.97 20-20 20z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 74,
        cy: 10.333,
        r: 76.685,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBF1D",
        offset: 0.5092
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB30C",
        offset: 0.8171
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124 16.5h-0.07c-0.38-5.3-13.31-10.65-29.61-12.12-16.84-1.52-30.9 1.67-31.39 7.14-0.12 1.33 0.57 2.67 1.93 3.95 2.67 2.54 5.05 5.39 6.52 8.77 3.49 8.01 3.96 18.64 1.76 34.45-2.89 20.67-20.06 27.06-25.14 27.52-0.86 0.08-5.75 0.01-5.75 0.01l1.14 13.78c0.45-0.13 5.33 0.05 5.79 0 25.46-2.65 41.2-21.39 54.33-53.16 3.55-8.59 8.36-18.44 17.47-26.04 1.59-1.33 2.83-2.34 2.96-3.76 0.01-0.16 0.01-0.32 0.01-0.48 0.02-0.03 0.05-0.06 0.05-0.06z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.09 7c2.59 0 5.27 0.12 7.97 0.37 18.19 1.64 26.67 7.38 26.88 9.32v0.03c-0.2 0.36-1.14 1.14-1.83 1.72l-0.06 0.05c-9.52 7.94-14.6 18.2-18.32 27.19-13.89 33.6-29.38 48.96-51.79 51.32h-0.13c-0.36 0-0.95-0.01-1.61-0.02-0.34-0.01-0.7-0.01-1.05-0.02l-0.63-7.72h0.24c1.72 0 2.24-0.03 2.52-0.05 5.06-0.45 24.6-6.89 27.84-30.09 2.3-16.51 1.69-27.63-1.98-36.06-1.45-3.32-3.8-6.51-7.2-9.74-0.83-0.79-1.02-1.33-1.01-1.51 0.11-1.36 6.29-4.79 20.16-4.79m0-3c-12.97 0-22.75 2.98-23.16 7.52-0.12 1.33 0.57 2.67 1.93 3.95 2.67 2.54 5.05 5.39 6.52 8.77 3.49 8.01 3.96 18.64 1.76 34.45-2.89 20.67-20.06 27.06-25.14 27.52-0.33 0.03-1.24 0.04-2.25 0.04-1.63 0-3.5-0.02-3.5-0.02l1.14 13.77c0.12-0.04 0.59-0.05 1.21-0.05 1.33 0 3.37 0.06 4.22 0.06 0.18 0 0.3 0 0.36-0.01 25.46-2.65 41.2-21.39 54.33-53.16 3.55-8.59 8.36-18.44 17.47-26.04 1.59-1.33 2.83-2.34 2.96-3.76 0.01-0.16 0.01-0.32 0.01-0.48 0.04-0.03 0.07-0.06 0.07-0.06h-0.07c-0.38-5.3-13.31-10.65-29.61-12.12-2.86-0.26-5.62-0.38-8.25-0.38z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 45.175,
        x2: 45.175,
        y1: 84.25,
        y2: 101.16,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m49.17 100.42h-8c-1.66 0-3-1.34-3-3v-10c0-1.66 1.34-3 3-3h8c1.66 0 3 1.34 3 3v10c0 1.65-1.34 3-3 3z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49.17 84.42h-8c-1.66 0-3 1.34-3 3v10c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3v-10c0-1.66-1.34-3-3-3zm-2.87 2v12h-2.29v-12h2.29zm-6.13 11v-10c0-0.55 0.45-1 1-1h0.84v12h-0.84c-0.55 0-1-0.45-1-1zm10 0c0 0.55-0.45 1-1 1h-0.87v-12h0.87c0.55 0 1 0.45 1 1v10z",
        fill: "#424242"
      })
    )
  );
}

exports.default = PostalHorn;
