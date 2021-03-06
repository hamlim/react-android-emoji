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

function FishingPoleAndFish(props) {
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
    _react2.default.createElement("path", {
      d: "m53 21.5c-5.5 5-10.99 11.9-8.67 19.17 2.67 8.33-5 15-12 14",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#607D8B",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d: "m-13.5 45.25s-4-28.5 7.25-39.5",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B0BEC5",
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
      _react2.default.createElement(
        "linearGradient",
        {
          id: "g",
          x1: 21.84,
          x2: 30.432,
          y1: 112.57,
          y2: 122.01,
          gradientTransform: "matrix(.984 .1783 -.1783 .984 16.563 -4.9634)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 0.0114
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0.9881
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m32.72 123.85-4.42-1.91c-3.5-1.52-7.31-2.15-11.12-1.86l-3.42 0.27c-1.07 0.08-1.76-1.13-1.17-2.07 2.58-4.14 8.39-12.4 13.16-11.54 4.78 0.87 7.63 10.73 8.74 15.53 0.26 1.08-0.79 2.01-1.77 1.58z",
        fill: "url(#g)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m25.05 108.68c0.12 0 0.24 0.01 0.35 0.03 2.34 0.42 4.99 5.38 6.85 12.76l-3.16-1.37c-3.21-1.39-6.6-2.09-10.09-2.09-0.66 0-1.32 0.03-1.97 0.08l-2.04 0.16c3.86-5.93 7.67-9.57 10.06-9.57m0-2c-4.62 0-10 7.67-12.45 11.6-0.57 0.91 0.06 2.08 1.07 2.08h0.1l3.42-0.27c0.61-0.05 1.21-0.07 1.82-0.07 3.19 0 6.35 0.65 9.3 1.93l4.42 1.91c0.17 0.07 0.34 0.11 0.5 0.11 0.8 0 1.49-0.79 1.28-1.69-1.11-4.8-3.96-14.66-8.74-15.53-0.24-0.05-0.48-0.07-0.72-0.07z",
          fill: "#444"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 39.905,
          x2: 54.214,
          y1: 66.471,
          y2: 103.12,
          gradientTransform: "matrix(.984 .1783 -.1783 .984 16.563 -4.9634)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 0.0031888
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0.7129
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m38.83 106.39-4.69-0.85 17.29-36.2 10.5 6.36c1.15 0.7 1.65 2.22 1.16 3.59-0.93 2.63-2.54 7.01-4.38 11.04-2.51 5.46-12.02 17.48-19.88 16.06z",
        fill: "url(#f)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 0.951,
          x2: 9.5475,
          y1: 80.681,
          y2: 102.7,
          gradientTransform: "matrix(-.9983 .059 .059 .9983 13.678 -3.3259)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 0.0031888
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0.7129
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m17.57 100.7 2.87-0.23-7.26-22.59-6.79 3.17c-0.75 0.35-1.17 1.22-0.99 2.07 0.33 1.62 0.93 4.33 1.69 6.84 1.02 3.4 5.67 11.13 10.48 10.74z",
        fill: "url(#e)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m51.85 70.77 9.55 5.78c0.74 0.45 1.06 1.48 0.74 2.4-1 2.85-2.57 7.06-4.35 10.95-2.42 5.29-10.83 15.6-17.64 15.6-0.39 0-0.77-0.03-1.14-0.1l-3.4-0.62 16.24-34.01m-0.43-1.43-17.29 36.2 4.69 0.85c0.43 0.08 0.87 0.12 1.32 0.12 7.58 0 16.19-11.01 18.55-16.18 1.84-4.03 3.46-8.41 4.38-11.04 0.48-1.37-0.01-2.89-1.16-3.59l-10.49-6.36z",
          fill: "#444"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m12.57 79.27 6.53 20.31-1.61 0.13c-0.09 0.01-0.18 0.01-0.27 0.01-4.06 0-8.28-7.04-9.19-10.05-0.73-2.41-1.31-5-1.66-6.75-0.08-0.4 0.11-0.81 0.44-0.96l5.76-2.69m0.61-1.39-6.79 3.17c-0.75 0.35-1.17 1.22-0.99 2.07 0.33 1.62 0.93 4.33 1.69 6.84 1 3.32 5.46 10.76 10.14 10.76 0.12 0 0.23 0 0.35-0.01l2.87-0.23-7.27-22.6z",
          fill: "#444"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: 24.164,
          cy: 68.059,
          r: 51.441,
          gradientTransform: "matrix(.9276 .1681 -.1696 .9359 18.31 -3.1971)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BBDEFB",
          offset: 0.3579
        }),
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 0.7143
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m41.2 50.85-5.61 2.76-4.12-4.53s-17.81 3.76-21.15 22.19c-4.87 26.88 14.8 40.57 14.8 40.57s25.84-5.1 30.78-32.31c3.39-18.77-14.7-28.68-14.7-28.68z",
        fill: "url(#d)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m41.2 50.85-5.71 3.07-4.02-4.83s-17.81 3.76-21.15 22.19c-4.87 26.88 14.8 40.57 14.8 40.57s25.84-5.1 30.78-32.31c3.39-18.78-14.7-28.69-14.7-28.69z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#c"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "m",
          cx: 7.4492,
          cy: 63.705,
          r: 70.535,
          gradientTransform: "matrix(.7367 .1335 -.1411 .7787 22.194 9.9325)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E3F2FD",
          offset: 0.4351
        }),
        _react2.default.createElement("stop", {
          stopColor: "#90CAF9",
          offset: 0.9562
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m27.56 113.8c3.37 7.92-36.31-5.24-36.31-5.24l12.03-66.39 33.42 3.32 12.14 4.34s8.09 15.26-12.61 21.99c-17.8 5.79-13.2 31.33-8.67 41.98z",
        clipPath: "url(#b)",
        fill: "url(#m)"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1783 -.984 .984 .1783 -28.469 91.162)",
        cx: 40.35,
        cy: 62.63,
        rx: 3.15,
        ry: 3.33,
        fill: "#283593"
      }),
      _react2.default.createElement("path", {
        d: "m22.84 65.81s1.48 3.72 10.11 5.29c8.63 1.56 11.63-1.48 11.63-1.48",
        fill: "none",
        stroke: "#82B1FF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 24.102,
          x2: 34.958,
          y1: 78.186,
          y2: 78.186,
          gradientTransform: "matrix(.984 .1783 -.1783 .984 16.563 -4.9634)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 0.0031888
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0.7129
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m33.35 84.35-5.74-1.04c-1.51-0.27-2.4-1.94-1.89-3.53 1.22-3.8 3.67-9.76 6.89-9.18 3.18 0.58 3.72 6.92 3.74 10.96 0.02 1.72-1.43 3.07-3 2.79z",
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m30.76 51.34 3.3 3.82c0.39 0.45 0.95 0.69 1.51 0.69 0.32 0 0.64-0.08 0.94-0.24l4.61-2.46c3.44 2.23 15.48 11.21 12.8 26.02-1.93 10.68-7.4 19.08-16.25 24.97-5.23 3.48-10.18 5.03-12.1 5.54-1.45-1.17-4.97-4.29-8.09-9.25-5.37-8.53-7.12-18.22-5.2-28.8 2.62-14.46 14.7-19.16 18.48-20.29m0.7-2.25s-17.81 3.76-21.15 22.19c-4.87 26.88 14.8 40.57 14.8 40.57s25.84-5.1 30.78-32.31c3.4-18.77-14.7-28.68-14.7-28.68l-5.62 3-4.11-4.77z",
          fill: "#444"
        })
      )
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 59.987,
        cy: 56.431,
        r: 10.941,
        gradientTransform: "matrix(.9735 .2285 -.2285 .9735 17.071 -15.876)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0.1652
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0.7398
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m61.62 61.32c0.03 0.04 0.05 0.08 0.08 0.1 3.41 4.89 11.4 2.7 11.09-3.54 0-0.16-0.02-0.33-0.04-0.49-0.46-3.63-3.24-6.34-6.48-7.72-1.66-0.7-3.37-1.33-5.1-1.87-0.84-0.27-1.71-0.59-2.58-0.76-0.49-0.1-1.42 0.08-1.61 0.62-0.29 0.82 0.25 2.4 0.43 3.22 0.81 3.68 2.04 7.34 4.21 10.44z",
      clipPath: "url(#a)",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m59.06 49.22c0.33 0.1 0.67 0.21 1.02 0.33l0.5 0.17c1.68 0.53 3.33 1.14 4.91 1.81 2.98 1.27 4.96 3.56 5.28 6.13l0.03 0.27v0.07c0.06 1.15-0.28 2.14-0.98 2.88-0.75 0.79-1.85 1.24-3.02 1.24-0.82 0-2.35-0.24-3.46-1.82-0.02-0.03-0.04-0.06-0.07-0.09 0-0.01-0.01-0.01-0.01-0.01-1.75-2.5-2.99-5.59-3.9-9.73-0.04-0.19-0.1-0.41-0.16-0.65-0.03-0.17-0.09-0.38-0.14-0.6m-0.75-2.2c-0.5 0-1.16 0.2-1.32 0.64-0.29 0.82 0.25 2.4 0.43 3.22 0.81 3.68 2.03 7.34 4.21 10.45 0.03 0.04 0.05 0.08 0.08 0.1 1.28 1.83 3.21 2.67 5.1 2.67 3.15 0 6.19-2.32 6-6.21 0-0.16-0.02-0.33-0.04-0.49-0.46-3.63-3.24-6.34-6.48-7.72-1.66-0.7-3.37-1.33-5.1-1.87-0.84-0.27-1.71-0.59-2.58-0.76-0.1-0.03-0.2-0.03-0.3-0.03z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m52.22 25.26c12.49-13.22 25.18-14.94 37.12-10.84 21.01 7.21 24.22 26.49 24.57 35.48 0.32 8.05-1.1 19.71-2.35 27.68-1.36 8.69-10.21 59.42-13.1 76.12-1.4 8.12 8.14 9.68 9.54 1.56 5.26-30.46 11.13-60.85 15.37-91.48 2.15-15.56-0.2-31.08-9.95-42.65-8.16-9.69-19.23-15.9-31.52-16.52-13.65-0.69-23.62 5.82-32.95 17.37-2.54 3.17 1.52 5.13 3.27 3.28z",
        fill: "#5D4037"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "j",
          d:
            "m54.95 29.5c8.25-11.09 21.64-14.53 33.69-10.79 6.3 1.95 11.81 5.93 16.2 11.16 5.58 6.66 7.26 14.04 7.61 23.03 0.32 8.05-1.54 16.4-2.79 24.36-1.36 8.69-2.81 17.37-4.3 26.04-2.87 16.7-5.91 33.38-8.79 50.08-1.4 8.12 10.05 10 11.45 1.87 5.26-30.46 11.13-60.85 15.37-91.48 2.15-15.56-0.2-31.08-9.95-42.65-8.16-9.69-19.23-15.9-31.52-16.52-13.65-0.68-26.92 4.96-35.82 16.91-4.81 6.47 4.04 14.46 8.85 7.99z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#j"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m79.96 6.56c0.61 0 1.23 0.02 1.85 0.05 11.29 0.57 21.98 6.19 30.09 15.81 10.78 12.79 11.11 29.4 9.5 41.08-3.08 22.25-7.09 44.77-10.97 66.54-1.45 8.15-2.95 16.57-4.39 24.87-0.47 2.73-2 3.71-3.16 3.71-0.68 0-1.31-0.3-1.77-0.84-0.7-0.83-0.94-2.16-0.67-3.74 0.7-4.06 1.75-10.12 2.97-17.11 3.84-22.13 9.1-52.45 10.14-59.04 0.84-5.34 2.74-18.77 2.37-28.06-0.34-8.65-3.55-29.61-25.92-37.29-4.01-1.38-7.98-2.07-11.81-2.07-9.77 0-18.99 4.52-27.41 13.44-0.07 0.08-0.2 0.09-0.27 0.09-0.15 0-0.28-0.05-0.35-0.09 0.02-0.09 0.1-0.31 0.37-0.65 9.3-11.56 18.38-16.7 29.43-16.7m0-2c-12.66 0-22.12 6.42-30.99 17.42-1.88 2.32-0.19 4 1.53 4 0.63 0 1.26-0.22 1.72-0.72 8.67-9.17 17.42-12.81 25.96-12.81 3.77 0 7.5 0.71 11.16 1.97 21.01 7.21 24.22 26.49 24.57 35.48 0.32 8.05-1.1 19.71-2.35 27.68-1.36 8.69-10.21 59.42-13.1 76.12-0.77 4.45 1.75 6.93 4.41 6.93 2.2 0 4.5-1.69 5.13-5.36 5.26-30.46 11.13-60.85 15.37-91.48 2.15-15.56-0.2-31.08-9.95-42.65-8.16-9.69-19.23-15.9-31.52-16.52-0.64-0.04-1.3-0.06-1.94-0.06z",
          fill: "#eee"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 106.71,
          x2: 120.32,
          y1: 79.092,
          y2: 131.82,
          gradientTransform: "matrix(.9869 .1615 -.1615 .9869 13.064 -10.618)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFA726",
          offset: 0.1671
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FB8C00",
          offset: 0.7265
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m108.79 155.96-10.92-1.79c-1.64-0.27-2.74-1.81-2.48-3.45l10.16-62.08c0.27-1.64 1.81-2.74 3.45-2.48l10.92 1.79c1.64 0.27 2.74 1.81 2.48 3.45l-10.16 62.08c-0.27 1.64-1.82 2.74-3.45 2.48z",
        fill: "url(#i)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m108.51 88.13c0.05 0 0.11 0 0.16 0.01l10.92 1.79c0.36 0.06 0.56 0.28 0.65 0.4 0.09 0.13 0.23 0.39 0.17 0.75l-10.16 62.08c-0.08 0.48-0.5 0.84-0.98 0.84-0.05 0-0.11 0-0.17-0.01l-10.9-1.79c-0.54-0.09-0.91-0.6-0.83-1.15l10.16-62.08c0.08-0.48 0.5-0.84 0.98-0.84m0-2c-1.44 0-2.72 1.04-2.96 2.52l-10.15 62.07c-0.27 1.64 0.84 3.18 2.48 3.45l10.92 1.79c0.16 0.03 0.33 0.04 0.49 0.04 1.44 0 2.72-1.04 2.96-2.52l10.16-62.08c0.27-1.64-0.84-3.18-2.48-3.45l-10.93-1.78c-0.16-0.03-0.33-0.04-0.49-0.04z",
          fill: "#444"
        })
      ),
      _react2.default.createElement("circle", {
        cx: 96.41,
        cy: 103.52,
        r: 15.68,
        fill: "#BDBDBD"
      }),
      _react2.default.createElement("circle", {
        cx: 96.41,
        cy: 103.52,
        r: 7.24,
        fill: "#757575"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#444",
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m96.4 89.84c0.74 0 1.49 0.06 2.23 0.18 7.44 1.22 12.51 8.27 11.29 15.71-1.09 6.65-6.76 11.47-13.48 11.47-0.74 0-1.49-0.06-2.23-0.18-7.44-1.22-12.51-8.27-11.29-15.71 1.08-6.65 6.75-11.47 13.48-11.47m0-2c-7.54 0-14.2 5.46-15.45 13.15-1.4 8.55 4.4 16.61 12.94 18.01 0.86 0.14 1.71 0.21 2.55 0.21 7.54 0 14.2-5.46 15.45-13.15 1.4-8.55-4.4-16.61-12.94-18.01-0.86-0.15-1.71-0.21-2.55-0.21z"
        }),
        _react2.default.createElement("path", {
          d:
            "m96.41 98.28c0.28 0 0.57 0.02 0.85 0.07 1.38 0.23 2.59 0.98 3.41 2.11 0.82 1.14 1.14 2.52 0.92 3.9-0.42 2.54-2.59 4.39-5.16 4.39-0.28 0-0.57-0.02-0.85-0.07-2.85-0.47-4.79-3.16-4.32-6.01 0.4-2.54 2.57-4.39 5.15-4.39m0-2c-3.48 0-6.55 2.52-7.13 6.07-0.65 3.94 2.03 7.66 5.97 8.31 0.4 0.06 0.79 0.1 1.18 0.1 3.48 0 6.55-2.52 7.13-6.07 0.65-3.94-2.03-7.66-5.97-8.31-0.4-0.07-0.8-0.1-1.18-0.1z"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m95.91 108.92-14.82 10.65c-1.25 0.9-2.99 0.61-3.89-0.64l-0.67-0.93c-0.9-1.25-0.61-2.99 0.64-3.89l14.82-10.65c1.25-0.9 2.99-0.61 3.89 0.64l0.67 0.93c0.89 1.26 0.61 3-0.64 3.89z",
        fill: "#FFD54F"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m93.61 103.95c0.57 0 1.12 0.28 1.45 0.74l0.67 0.93c0.57 0.8 0.39 1.92-0.41 2.49l-14.82 10.65c-0.31 0.22-0.66 0.34-1.04 0.34-0.57 0-1.12-0.28-1.45-0.74l-0.67-0.93c-0.57-0.8-0.39-1.92 0.41-2.49l14.82-10.65c0.31-0.23 0.66-0.34 1.04-0.34m0-1c-0.56 0-1.13 0.17-1.62 0.52l-14.82 10.65c-1.25 0.9-1.53 2.64-0.64 3.89l0.67 0.93c0.54 0.76 1.4 1.16 2.26 1.16 0.56 0 1.13-0.17 1.62-0.52l14.82-10.65c1.25-0.9 1.53-2.64 0.64-3.89l-0.67-0.93c-0.54-0.76-1.39-1.16-2.26-1.16z",
          fill: "#444"
        })
      )
    )
  );
}

exports.default = FishingPoleAndFish;
