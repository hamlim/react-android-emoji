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

function Rat(props) {
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
        id: "g",
        x1: 143.69,
        x2: 143.69,
        y1: 0.9322,
        y2: 25.581,
        gradientTransform: "matrix(-.6073 -.7945 .7945 -.6073 61.125 213.93)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#6A889C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81A2B5",
        offset: 0.2024
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBFD1",
        offset: 0.4731
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A5CADB",
        offset: 0.6279
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-25.1 87.09c1.97-2.69 4.9-0.48 7.02 0.74 2.67 1.54 5.06 3.57 8.42 2.67 2.17-0.58 5.59-3.88 6.91-4.4 2.67-1.05 2.83 0.01 1.92 3.06-1.13 3.77-4.65 7.68-8.42 9.25-8.87 3.69-21.71-3.3-15.85-11.32z",
      fill: "url(#g)",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m102.65 118.51c0.87-0.11 1.75-0.24 2.64-0.41 2.85-0.53 4.51-1.47 5.07-2.86 0.44-0.96 0.29-2.18 0.09-3.03-0.24-1.04-0.75-1.98-1.52-2.79-1.27-1.32-3.24-2.29-5.87-2.87-1.9-0.42-4.01-0.64-6.65-0.68h-0.64c-1.84 0-3.76 0.09-5.86 0.28-3.6 0.33-7.34 0.89-11.43 1.72-3.51 0.72-6.26 1.43-7.95 1.91-0.95 0.27-1.69 0.49-2.19 0.65l-0.77 0.25c-0.07 0.02-0.12 0.03-0.18 0.03-0.23 0-0.44-0.15-0.51-0.37-0.04-0.14-0.03-0.28 0.03-0.41 0.06-0.12 0.17-0.21 0.29-0.26l0.82-0.25c0.52-0.15 1.27-0.37 2.23-0.62 1.72-0.45 4.52-1.13 8.04-1.8 4.13-0.77 7.9-1.28 11.54-1.55 1.8-0.13 3.46-0.2 5.07-0.2 0.5 0 1 0.01 1.5 0.02 2.72 0.08 4.8 0.33 6.76 0.79 1.89 0.46 4.29 1.23 6.05 3.1 0.77 0.82 1.34 1.9 1.56 2.96 0.07 0.29 0.1 0.55 0.14 0.81 0.02 0.16 0.02 0.21 0.02 0.27l0.01 0.19v0.35c-0.02 0.62-0.15 1.18-0.38 1.66-0.52 1.1-1.58 1.71-2.37 2.03-0.94 0.38-1.85 0.58-2.92 0.75-0.88 0.14-1.76 0.24-2.62 0.33z",
      fill: "#FFBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.92 104.24c-1.75 0-3.47 0.08-5.14 0.2-4.31 0.33-8.27 0.94-11.65 1.57s-6.17 1.3-8.12 1.81c-0.98 0.26-1.74 0.48-2.26 0.63-0.52 0.16-0.79 0.24-0.79 0.24l-0.02 0.01c-0.81 0.26-1.25 1.12-0.99 1.93 0.21 0.65 0.81 1.07 1.46 1.07 0.16 0 0.31-0.02 0.47-0.07h0.01s0.27-0.09 0.76-0.25c0.49-0.15 1.22-0.38 2.16-0.64 1.88-0.53 4.59-1.22 7.88-1.89s7.16-1.32 11.32-1.7c1.88-0.17 3.82-0.28 5.79-0.28h0.62c2.17 0.03 4.37 0.19 6.45 0.65 2.07 0.46 4.08 1.25 5.36 2.58 0.63 0.66 1.07 1.45 1.27 2.33 0.22 0.9 0.24 1.8-0.04 2.43-0.52 1.3-2.55 1.92-4.33 2.25-1.84 0.35-3.68 0.52-5.37 0.75-1.7 0.23-3.28 0.5-4.68 0.89-1.39 0.39-2.59 0.91-3.5 1.51-0.92 0.59-1.53 1.23-1.91 1.7-0.37 0.47-0.52 0.75-0.52 0.75l-0.02 0.04c-0.2 0.36-0.09 0.83 0.27 1.05 0.13 0.08 0.27 0.11 0.41 0.11 0.26 0 0.52-0.13 0.67-0.37 0 0 0.13-0.21 0.43-0.57 0.3-0.35 0.79-0.84 1.56-1.3 0.76-0.46 1.8-0.89 3.08-1.2 1.28-0.32 2.78-0.53 4.45-0.7 1.67-0.18 3.51-0.29 5.51-0.6 1-0.17 2.05-0.38 3.13-0.81 1.06-0.42 2.27-1.21 2.9-2.54 0.3-0.65 0.45-1.34 0.47-2.01 0-0.17 0.01-0.38 0-0.51-0.01-0.16 0-0.22-0.03-0.46-0.04-0.31-0.08-0.63-0.16-0.94-0.26-1.26-0.92-2.49-1.81-3.44-1.82-1.93-4.25-2.82-6.55-3.39-2.33-0.56-4.68-0.75-6.96-0.82-0.56-0.01-1.07-0.01-1.58-0.01z",
      fill: "#D9A0A0"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 59.44,
        x2: 59.44,
        y1: 122.1,
        y2: 65.168,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#6A889C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81A2B5",
        offset: 0.2024
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBFD1",
        offset: 0.4731
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A5CADB",
        offset: 0.6279
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.44 122.1c-7.41 0-19.84-2.52-19.84-19.43 0-16.38 16.27-33.85 19.84-37.49 3.58 3.61 19.84 20.89 19.84 37.49 0 16.9-12.43 19.43-19.84 19.43z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.45 66.6c4.56 4.73 18.83 20.76 18.83 36.06 0 8.41-3.27 18.43-18.84 18.43s-18.84-10.02-18.84-18.43c0-15.1 14.29-31.29 18.85-36.06m-0.01-2.84s-20.84 19.94-20.84 38.9c0 14.84 9.33 20.43 20.84 20.43s20.84-5.6 20.84-20.43c0-19.22-20.84-38.9-20.84-38.9z",
      fill: "#78909C"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 72.957,
        x2: 72.957,
        y1: 79,
        y2: 103.9,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5CADB",
        offset: 0.3721
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBFD1",
        offset: 0.5269
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81A2B5",
        offset: 0.7976
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6A889C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m70.93 79.44c-2.9 1.24-2.52 5.86-1.57 7.96 1.2 2.66 2.89 5.1 1.72 8.18-0.75 1.98-4.18 4.9-4.79 6.09-1.24 2.41-0.26 2.67 2.7 2.1 3.66-0.71 7.67-3.65 9.5-7.05 4.32-8.01-0.39-20.35-7.56-17.28z",
      fill: "url(#e)",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 46.326,
        x2: 46.326,
        y1: 78.333,
        y2: 102.87,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5CADB",
        offset: 0.3721
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBFD1",
        offset: 0.5269
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81A2B5",
        offset: 0.7976
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6A889C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.35 79.44c2.9 1.24 2.52 5.86 1.57 7.96-1.2 2.66-2.89 5.1-1.72 8.18 0.75 1.98 4.18 4.9 4.79 6.09 1.24 2.41 0.26 2.67-2.7 2.1-3.66-0.71-7.67-3.65-9.5-7.05-4.31-8.01 0.39-20.35 7.56-17.28z",
      fill: "url(#d)",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 36.203,
        x2: 36.203,
        y1: 6.5431,
        y2: 42.198,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5CADB",
        offset: 0.3721
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBFD1",
        offset: 0.494
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81A2B5",
        offset: 0.7072
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6A889C",
        offset: 0.8665
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.2 37.23c-7.77 0-14.09-6.32-14.09-14.09s6.32-14.09 14.09-14.09 14.09 6.32 14.09 14.09c0.01 7.76-6.32 14.09-14.09 14.09z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m36.2 10.04c7.22 0 13.09 5.87 13.09 13.09s-5.87 13.1-13.09 13.1-13.09-5.87-13.09-13.09 5.87-13.1 13.09-13.1m0-2c-8.34 0-15.09 6.76-15.09 15.09s6.76 15.09 15.09 15.09 15.1-6.75 15.1-15.09-6.76-15.09-15.1-15.09z",
      fill: "#78909C"
    }),
    _react2.default.createElement("circle", {
      cx: 36.2,
      cy: 23.13,
      r: 8.72,
      fill: "#FFBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 81.716,
        x2: 81.716,
        y1: 6.5431,
        y2: 42.198,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A5CADB",
        offset: 0.3721
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBFD1",
        offset: 0.494
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81A2B5",
        offset: 0.7072
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6A889C",
        offset: 0.8665
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.72 37.23c-7.77 0-14.09-6.32-14.09-14.09s6.32-14.09 14.09-14.09 14.09 6.32 14.09 14.09c0 7.76-6.32 14.09-14.09 14.09z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m81.72 10.04c7.22 0 13.09 5.87 13.09 13.09s-5.87 13.09-13.09 13.09-13.09-5.87-13.09-13.09 5.87-13.09 13.09-13.09m0-2c-8.34 0-15.09 6.76-15.09 15.09s6.76 15.09 15.09 15.09c8.34 0 15.09-6.76 15.09-15.09s-6.76-15.09-15.09-15.09z",
      fill: "#78909C"
    }),
    _react2.default.createElement("circle", {
      cx: 81.72,
      cy: 23.13,
      r: 8.72,
      fill: "#FFBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 58.961,
        x2: 58.961,
        y1: 83.009,
        y2: 19.432,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#6A889C",
        offset: 0.1335
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81A2B5",
        offset: 0.2928
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBFD1",
        offset: 0.506
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A5CADB",
        offset: 0.6279
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m58.96 83.01c-10.45 0-28.47-15.51-28.47-31.4 0-8.42 2.54-16.29 7.17-22.15 5.17-6.56 12.54-10.03 21.3-10.03s16.13 3.47 21.3 10.03c4.62 5.86 7.17 13.73 7.17 22.15 0 15.88-18.01 31.4-28.47 31.4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.96 20.43c8.44 0 15.54 3.34 20.51 9.65 4.42 5.6 6.95 13.45 6.95 21.53 0 15.08-17.62 30.4-27.47 30.4s-27.47-15.32-27.47-30.4c0-8.08 2.53-15.92 6.95-21.53 4.99-6.31 12.09-9.65 20.53-9.65m0-2c-19.6 0-29.47 16.71-29.47 33.18s18.72 32.4 29.47 32.4 29.47-15.92 29.47-32.4-9.86-33.18-29.47-33.18z",
      fill: "#78909C"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.55 64.98-2.97-2.06c-0.24-0.16-0.54-0.23-0.84-0.21-0.3-0.02-0.6 0.05-0.84 0.21l-2.97 2.06c-0.24 0.16-0.3 0.37-0.3 0.61 0 3.61 3.24 4.29 4.1 4.29s4.1-0.68 4.1-4.29c0.02-0.24-0.04-0.45-0.28-0.61z",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 41.26,
        cy: 43.89,
        rx: 5.29,
        ry: 5.99
      }),
      _react2.default.createElement("ellipse", {
        cx: 76.66,
        cy: 43.89,
        rx: 5.29,
        ry: 5.99
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#546E7A",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.8476
      },
      _react2.default.createElement("path", {
        d: "m58.56 60.45c0 2.68-2.17 4.86-4.86 4.86s-4.86-2.17-4.86-4.86"
      }),
      _react2.default.createElement("path", {
        d: "m68.59 60.45c0 2.68-2.17 4.86-4.86 4.86-2.68 0-4.86-2.17-4.86-4.86"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 58.96,
      cy: 53.62,
      rx: 6.7,
      ry: 7.04,
      fill: "#FFBDBD",
      stroke: "#E57373",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#404040",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10
      },
      _react2.default.createElement("line", {
        x1: 31.31,
        x2: 39.62,
        y1: 70.66,
        y2: 62.97,
        strokeWidth: 1.8476
      }),
      _react2.default.createElement("line", {
        x1: 38.61,
        x2: 28.31,
        y1: 59.56,
        y2: 63.67,
        strokeWidth: 1.8476
      }),
      _react2.default.createElement("line", {
        x1: 26,
        x2: 38,
        y1: 57,
        y2: 57,
        strokeWidth: 2
      }),
      _react2.default.createElement("line", {
        x1: 86.72,
        x2: 78.41,
        y1: 70.66,
        y2: 62.97,
        strokeWidth: 1.8476
      }),
      _react2.default.createElement("line", {
        x1: 79.42,
        x2: 89.71,
        y1: 59.56,
        y2: 63.67,
        strokeWidth: 1.8476
      }),
      _react2.default.createElement("line", {
        x1: 92,
        x2: 81,
        y1: 57,
        y2: 57,
        strokeWidth: 2
      })
    ),
    _react2.default.createElement(
      "g",
      {
        stroke: "#E57373",
        strokeMiterlimit: 10
      },
      _react2.default.createElement("path", {
        d:
          "m32.4 119.24c0 2.63 4.69 4.76 8.69 4.76s8.69-2.13 8.69-4.76-4.69-7.66-8.69-7.66-8.69 5.04-8.69 7.66z",
        fill: "#FFBDBD",
        strokeWidth: 1.3191
      }),
      _react2.default.createElement("path", {
        d: "m38.85 115.73c-0.86 2.47-1.01 5.18-0.43 7.73",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.642
      }),
      _react2.default.createElement("path", {
        d: "m42.79 115.6c1.1 2.55 1 7.79 0.96 7.61",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.642
      }),
      _react2.default.createElement("path", {
        d:
          "m69.16 119.24c0 2.63 4.69 4.76 8.69 4.76s8.69-2.13 8.69-4.76-4.69-7.66-8.69-7.66-8.69 5.04-8.69 7.66z",
        fill: "#FFBDBD",
        strokeWidth: 1.3191
      }),
      _react2.default.createElement("path", {
        d: "m75.61 115.73c-0.86 2.47-1.01 5.18-0.43 7.73",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.642
      }),
      _react2.default.createElement("path", {
        d: "m79.55 115.6c1.1 2.55 1 7.79 0.96 7.61",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.642
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.23 160.6c0.17-0.5 0.46-1.06 0.98-1.13 0.43-0.05 0.82 0.3 0.94 0.71s0.22 0.6 0.04 1c-0.27 0.61-0.05 1.14-0.12 1.81s3.39-2.27 5.09-3.07c0.46-0.22 1.12-0.35 1.4 0.08 0.25 0.4-0.19 0.83-0.36 1.27-0.69 1.81-1 2.29-2.15 4.39 1.95-0.3 4.62-0.22 4.87 0.08 0.25 0.29 0.15 0.75-0.1 1.03-0.26 0.28-0.62 0.41-0.98 0.54-1.58 0.56-3.16 1.12-4.74 1.68-1 0.35-2.02 0.71-3.08 0.72-4.72 0.02-2.72-6.41-1.79-9.11z",
      fill: "#FFBDBD",
      stroke: "#E57373",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m50.85 107.66c0.17 0.39 0.44 0.83 0.86 0.85 0.35 0.01 0.57-2.36 0.47-2.89-0.11-0.53 2.88 1.61 4.3 2.15 0.39 0.15 0.93 0.21 1.12-0.15 0.18-0.34-0.2-0.66-0.37-1-0.67-1.41-0.95-1.78-2.01-3.4 1.59 0.12 4-0.98 3.77-1.19-0.22-0.21-0.53-0.29-0.82-0.37-1.31-0.35-2.62-0.7-3.93-1.06-0.83-0.22-1.68-0.45-2.53-0.38-3.79 0.27-1.78 5.33-0.86 7.44z",
      fill: "#78909C"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.64 107.66c-0.17 0.39-0.44 0.83-0.86 0.85-0.35 0.01-0.57-2.36-0.47-2.89 0.11-0.53-2.88 1.61-4.3 2.15-0.39 0.15-0.93 0.21-1.12-0.15-0.18-0.34 0.2-0.66 0.37-1 0.67-1.41 0.95-1.78 2.01-3.4-1.59 0.12-4-0.98-3.77-1.19 0.22-0.21 0.53-0.29 0.82-0.37 1.31-0.35 2.62-0.7 3.93-1.06 0.83-0.22 1.68-0.45 2.53-0.38 3.8 0.27 1.78 5.33 0.86 7.44z",
      fill: "#78909C"
    })
  );
}

exports.default = Rat;
