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

function HoneyPot(props) {
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
        "m100.97 26.98c-2.11-2.34-17.44-4.57-36.81-4.57s-35.06 2.47-36.76 4.57c-1.6 1.96 17.23 4.72 36.6 4.72s38.65-2.85 36.97-4.72z",
      fill: "#E79D2A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.15 24.41c15.93 0 26.75 1.4 31.94 2.67-5.98 1.22-18.51 2.62-32.09 2.62-13.88 0-25.91-1.37-31.69-2.57 5.48-1.3 16.86-2.72 31.84-2.72m0-2c-19.37 0-35.06 2.47-36.76 4.57-1.59 1.96 17.24 4.72 36.61 4.72s38.65-2.85 36.97-4.72c-2.11-2.35-17.45-4.57-36.82-4.57z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 29.08,
      rx: 27.48,
      ry: 3.44,
      fill: "#A9742A"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 52.194,
        x2: 54.629,
        y1: 18.889,
        y2: 28.627,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE081",
        offset: 0.2017
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB28",
        offset: 0.7431
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.62 22.55c0 1.48 2.76 9.1-12.01 8.94-8.17-0.09-8.51-6.6-8.51-8.08s6.49-1.95 10.5-1.95 10.02-0.39 10.02 1.09z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m58.09 23.41c2.02 0 3.08 0.1 3.63 0.19 0.17 1.3 0.22 2.55-0.68 3.58-0.92 1.06-3.23 2.31-8.97 2.31h-0.44c-5.02-0.06-6.27-3.01-6.49-5.24 1.35-0.41 4.67-0.8 8.46-0.8 0.68 0 1.41-0.01 2.16-0.02 0.78-0.01 1.57-0.02 2.33-0.02m0-2c-1.52 0-3.12 0.04-4.49 0.04-4.01 0-10.5 0.47-10.5 1.95s0.34 7.99 8.51 8.08h0.46c14.25 0 11.55-7.47 11.55-8.94 0-0.96-2.6-1.13-5.53-1.13z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 41.127,
        cy: 66.291,
        r: 70.423,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54E",
        offset: 0.1083
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEC111",
        offset: 0.6097
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A826",
        offset: 0.9025
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.24 56.36c0-2.45-0.94-4.8-2.59-6.49l-11.7-12.83h-71.89l-11.7 12.83c-1.66 1.69-2.59 4.04-2.59 6.49v28.92c0 10.7 4.11 20.3 11.1 26.82 4.55 6.84 20.43 11.9 39.32 11.9 19.66 0 36.05-5.47 39.82-12.73 6.46-6.49 10.24-15.73 10.24-25.99v-28.92z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98.62 40.04 10.81 11.85c0.02 0.03 0.05 0.05 0.07 0.08 1.1 1.13 1.74 2.73 1.74 4.39v28.92c0 9.33-3.32 17.8-9.36 23.87-0.22 0.22-0.4 0.46-0.54 0.74-1.45 2.8-5.9 5.57-12.21 7.62-6.96 2.25-15.82 3.5-24.94 3.5-19.57 0-33.34-5.31-36.83-10.56-0.13-0.19-0.28-0.37-0.45-0.53-6.45-6.02-10.15-14.99-10.15-24.63v-28.93c0-1.66 0.63-3.26 1.74-4.39 0.02-0.03 0.05-0.05 0.07-0.08l10.81-11.85h69.24m1.32-3h-71.88l-11.7 12.83c-1.66 1.69-2.59 4.04-2.59 6.49v28.92c0 10.7 4.11 20.3 11.1 26.82 4.55 6.84 20.43 11.9 39.32 11.9 19.66 0 36.05-5.47 39.82-12.73 6.46-6.49 10.24-15.73 10.24-25.99v-28.92c0-2.45-0.94-4.8-2.59-6.49l-11.72-12.83z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "h",
        d:
          "M100.84,38.83H27.16l-10.8,11.04c-1.66,1.69-2.59,4.04-2.59,6.49v28.92c0,19.65,13.82,35.58,33.97,35.58 h32.53c20.15,0,33.97-15.93,33.97-35.58V56.36c0-2.45-0.94-4.8-2.59-6.49L100.84,38.83z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#h"
      })
    ),
    _react2.default.createElement("path", {
      d: "m114.24 91.21h-0.01 0.01z",
      fill: "#2D3079"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "g",
        d:
          "M99.94,37.04H28.06l-11.7,12.83c-1.66,1.69-2.59,4.04-2.59,6.49v28.92c0,19.65,13.82,35.58,33.97,35.58 h32.53c20.15,0,33.97-15.93,33.97-35.58V56.36c0-2.45-0.94-4.8-2.59-6.49L99.94,37.04z"
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
      "linearGradient",
      {
        id: "f",
        x1: 13.762,
        x2: 114.24,
        y1: 80.576,
        y2: 80.576,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D49A31",
        offset: 0.2224
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C28A2C",
        offset: 0.8047
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.16 61.94c-11.17 5.03-27.62 8.21-45.97 8.21s-34.8-3.18-45.97-8.21c-1.59-0.72-3.08-1.46-4.45-2.25v31.31c0.12 0.07 0.26 0.14 0.38 0.21 11.01 6.2 29.31 10.25 50.04 10.25s39.03-4.06 50.04-10.25c0 0 0.01 0 0.01-0.01v-31.31c-1.27 0.71-2.63 1.39-4.08 2.05z",
      clipPath: "url(#a)",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m16.76 64.57c0.07 0.03 0.15 0.07 0.22 0.1 11.97 5.39 29.17 8.48 47.2 8.48 17.96 0 35.09-3.06 47.05-8.41v24.67c-11.09 5.69-28.49 9.05-47.05 9.05-18.77 0-36.35-3.44-47.42-9.25v-24.64m-2.99-4.88v4.5 26.81c0.12 0.07 0.26 0.14 0.38 0.21 11.01 6.2 29.31 10.25 50.04 10.25s39.03-4.06 50.04-10.25c0 0 0.01 0 0.01-0.01v-31.31c-1.27 0.71-2.63 1.4-4.08 2.05-11.17 5.03-27.62 8.21-45.97 8.21s-34.8-3.18-45.97-8.21c-1.6-0.72-3.09-1.47-4.45-2.25z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.08 30.56c-2.27-4.19-26.49-4.95-39.95-4.96h-0.15s-0.1 0-0.15 0c-13.46 0.01-37.68 0.77-39.95 4.96-2.29 4.23-1.67 10.25-0.74 12.39 3.84 8.81 18.45 14.42 40.69 14.48h0.15 0.15c22.24-0.06 36.84-5.67 40.69-14.48 0.93-2.14 1.55-8.17-0.74-12.39z",
      fill: "#CB8B2A"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 64.185,
        cy: 32.561,
        r: 44.037,
        gradientTransform: "matrix(1 0 0 .4132 0 19.106)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FCB316",
        offset: 0.6637
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CB8B2A",
        offset: 0.9278
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.18,
      cy: 32.56,
      rx: 40.63,
      ry: 15.92,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.18 19.64c10.33 0 20.03 1.54 27.33 4.34 6.27 2.4 10.11 5.54 10.28 8.38 0.02 0.28 0.07 0.55 0.17 0.82 1.13 3.2 0.67 7.27 0.1 8.56-3.39 7.77-17.93 12.63-37.95 12.68h-0.09-0.05-0.05-0.09c-20.02-0.05-34.56-4.91-37.95-12.68-0.62-1.41-1.15-6.38 0.58-9.67 0.02-0.03 0.03-0.05 0.04-0.08 0.09-0.17 0.17-0.35 0.23-0.53 1.86-5.68 16.7-11.82 37.45-11.82m0-3c-20.69 0-37.75 6.06-40.3 13.89 0 0.01-0.01 0.01-0.01 0.02-2.29 4.23-1.67 10.25-0.74 12.39 3.84 8.81 18.45 14.42 40.69 14.48h0.15 0.15c22.24-0.06 36.84-5.67 40.69-14.48 0.82-1.87 1.39-6.74-0.02-10.76-0.51-8.61-18.49-15.54-40.61-15.54z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.18 26.89c11.47 0 21.11 3.05 23.92 7.2 0.54-0.8 0.83-1.63 0.83-2.5 0-5.36-11.08-9.7-24.75-9.7s-24.75 4.34-24.75 9.7c0 0.86 0.29 1.7 0.83 2.5 2.82-4.15 12.46-7.2 23.92-7.2z",
      fill: "#A9742A"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.18,
      cy: 34.09,
      rx: 23.92,
      ry: 7.2,
      fill: "#82461A"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "d",
        cx: 64.18,
        cy: 34.09,
        rx: 23.92,
        ry: 7.2
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
    _react2.default.createElement("ellipse", {
      cx: 64.18,
      cy: 41.69,
      rx: 30.25,
      ry: 9.1,
      clipPath: "url(#c)",
      fill: "#E69824"
    }),
    _react2.default.createElement("path", {
      d:
        "m41.66 39.68c6.89-3.73 16.1-4.81 23.93-4.58 8.91 0.25 16.3 1.02 20.62 3.31",
      clipPath: "url(#c)",
      fill: "none",
      stroke: "#FCB64E",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d:
        "m39.33 33.77c-2.57-0.39-6.22-0.28-9.74 2.85-5.39 4.8-3.93 12.83-3.3 13.64 3.33 4.23 2.05 9.88-0.8 14.55-1.9 3.11-5.17 4.6-5.78 8.89-1.09 7.66 3.21 8.67 6.32 7.07 4.51-2.33 1.91-14.77 9.11-16.57 2.8-0.7 4.63 3.04 1.95 12.59-2.16 7.67-5.27 14.41-4.2 18.28 0.95 3.41 3.14 4.1 5.1 4.35 4.8 0.6 7.64-3.75 7.04-10.49-0.51-5.74-0.3-17.08 1.35-30.42 0.37-3.03-3.55-4.29 1.05-9.59 3.9-4.5 2.85-7.66 1.73-7.87-1.5-0.29-3.21-1.39-6.64-3.21-3.85-2.06-1.77-3.85-3.19-4.07z",
      fill: "#F9A01B"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 37.416,
        cy: 32.176,
        r: 26.531,
        gradientTransform: "matrix(.9609 .277 -.1659 .5757 6.8025 3.2912)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB2",
        offset: 0.2338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54E",
        offset: 0.6956
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEC111",
        offset: 0.9871
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.33 30.98c-2.57-0.39-6.22-0.28-9.74 2.85-5.39 4.8-3.93 12.83-3.3 13.64 3.33 4.23 2.05 9.88-0.8 14.55-1.9 3.11-5.17 4.6-5.78 8.89-1.09 7.66 3.21 8.67 6.32 7.07 4.51-2.33 1.91-14.77 9.11-16.57 2.8-0.7 4.63 3.04 1.95 12.59-2.16 7.67-5.27 14.41-4.2 18.28 0.95 3.41 3.14 4.1 5.1 4.35 4.8 0.6 7.64-3.75 7.04-10.49-0.51-5.74-0.3-17.08 1.35-30.42 0.37-3.03-3.55-4.29 1.05-9.59 3.9-4.5 2.85-7.66 1.73-7.87-1.5-0.29-3.21-1.39-6.64-3.21-3.85-2.07-1.77-3.86-3.19-4.07z",
      fill: "url(#r)"
    }),
    _react2.default.createElement("path", {
      d:
        "m44.11 54.57c-0.27 0.46-1.29 1.11-2.12 0.9-2.5-0.65-2.24-3.45-4.58-2.64-0.07 0.02-2.28 1.29-4.03 0.88-1.67-0.39-2.87-1.67-3.19-2.26-0.08 0.05 0.19 1.41 2.2 2.48 2.78 1.48 3.73 0.48 5.77 0.44 0.51-0.01 1.79 0.91 1.98 1.11 1.25 1.31 2.72 0.73 2.96 0.63 0.39-0.16 1.07-1.37 1.01-1.54z",
      fill: "#FCB316"
    }),
    _react2.default.createElement("path", {
      d:
        "m40.33 90.83c-0.25 0.91-1.25 1.6-2.46 1.6-1 0-1.85-0.47-2.26-1.15-0.04 0.14-0.06 0.29-0.06 0.44 0 1.13 1.13 2.04 2.52 2.04s2.52-0.91 2.52-2.04c0-0.32-0.1-0.62-0.26-0.89z",
      fill: "#F9A01B"
    }),
    _react2.default.createElement("path", {
      d:
        "m26.68 73.21c-0.59 1.02-2.01 1.53-3.45 1.15-1.2-0.31-2.08-1.15-2.35-2.09-0.09 0.16-0.17 0.33-0.21 0.51-0.35 1.35 0.72 2.8 2.39 3.24s3.31-0.31 3.67-1.66c0.08-0.39 0.05-0.78-0.05-1.15z",
      fill: "#F9A01B"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: 49.934,
        cy: 11.74,
        r: 23.568,
        gradientTransform: "matrix(-1 0 0 .499 115.46 5.8822)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB2",
        offset: 0.2338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54E",
        offset: 0.7877
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCB316",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.25 28.28c1.8-6.74 8.99-6.59 8.99-6.59s1.99-5.36-22.78-6.74c-18.73-1.05-19.48 3.6-19.48 3.6s3.3 1.8 3.45 5.84c0.06 1.62-0.6 4.5 1.5 5.69 0.65 0.37 2.7 0.3 3.45-1.35 0.83-1.84-1.65-4.2 1.95-4.2 4.12 0 3.45 1.95 7.49 2.4 4.77 0.53 4.65-1.5 7.94-1.8 2.09-0.19 0 3.3 2.85 5.39 2.08 1.54 4.08-0.13 4.64-2.24z",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "p",
        cx: 33.925,
        cy: 20.525,
        r: 13.976,
        gradientTransform: "matrix(1 0 0 .3335 0 13.681)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB2",
        offset: 0.2338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54E",
        offset: 0.5978
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCB316",
        offset: 0.908
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.73 28.13c-9.74-3-13.04-0.75-13.04-0.75s-0.02-5.05 11.24-7.34c7.1-1.44 8.68 2.29 9.89 4.35 1.4 2.38 1.35 6.29-1.5 7.49-4.08 1.71-1.87-2.3-6.59-3.75z",
      fill: "url(#p)"
    }),
    _react2.default.createElement("path", {
      d:
        "m109.11 62.83c-4.34-6.47-7.38-5.92-7.07-12.39 0.13-2.83 4.04-7 0.4-11.58-2.75-3.46-8.48-4.17-11.84-2.83-6.48 2.59-7.26 5.16-12.25 6.06-9.59 1.72-9.43 1.01-18.71 0.81-3.22-0.07-5.5 2.89-5.65 7.67-0.13 4.31 3.57 8.34 4.85 8.75 3.77 1.21 4.28 2.73 3.66 11.65-0.32 4.69-2.62 9.41 0.13 12.65 2.29 2.69 6.27 2.44 7.81-0.81 2.19-4.63-2.13-9.03-0.97-13.39 3.16-11.93 7.21-0.61 9.97-0.54 5.65 0.13 2.15-9.56 7.21-7.94 5.69 1.83 4.13 9.1 3.25 12.39-1.3 4.84 1.17 7.31 4.01 7.55s5.19-2.01 4.48-5.43c-1.18-5.69-3.42-14.04 0.24-15.57 3.22-1.35 8.26 3.19 6.49 15.93-0.63 4.54 2.38 8.68 5.5 8.22 4.51-0.67 4.27-12.58-1.51-21.2z",
      fill: "#F9A01B"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 75.235,
        cy: 25.476,
        r: 35.664,
        gradientTransform: "matrix(.9896 -.144 .144 .9896 -8.6013 12.319)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB2",
        offset: 0.2338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54E",
        offset: 0.6956
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEC111",
        offset: 0.9871
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.11 60.22c-4.34-6.47-7.38-5.92-7.07-12.39 0.13-2.83 4.04-7 0.4-11.58-2.75-3.46-8.48-4.17-11.84-2.83-6.48 2.59-7.26 5.16-12.25 6.06-9.59 1.72-9.43 1.01-18.71 0.81-3.22-0.07-5.5 2.89-5.65 7.67-0.13 4.31 3.57 8.34 4.85 8.75 3.77 1.21 4.28 2.73 3.66 11.65-0.32 4.69-2.62 9.41 0.13 12.65 2.29 2.69 6.27 2.44 7.81-0.81 2.19-4.63-2.13-9.03-0.97-13.39 3.16-11.93 7.21-0.61 9.97-0.54 5.65 0.13 2.15-9.56 7.21-7.94 5.69 1.83 4.13 9.1 3.25 12.39-1.3 4.84 1.17 7.31 4.01 7.55s5.19-2.01 4.48-5.43c-1.18-5.69-3.42-14.04 0.24-15.57 3.22-1.35 8.26 3.19 6.49 15.93-0.63 4.54 2.38 8.68 5.5 8.22 4.51-0.67 4.27-12.58-1.51-21.2z",
      fill: "url(#o)"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.79 74.38c-0.16 1.32-1.42 2.47-3.09 2.72-1.39 0.2-2.67-0.28-3.37-1.15-0.03 0.21-0.03 0.41 0 0.62 0.23 1.56 1.98 2.6 3.91 2.32s3.32-1.78 3.09-3.34c-0.06-0.44-0.26-0.83-0.54-1.17z",
      fill: "#F9A01B"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.7 76.71c-0.27 1-1.37 1.75-2.69 1.76-1.09 0-2.03-0.51-2.48-1.26-0.04 0.16-0.07 0.32-0.07 0.48 0 1.23 1.24 2.23 2.76 2.23s2.76-1.01 2.75-2.24c0.02-0.35-0.09-0.68-0.27-0.97z",
      fill: "#F9A01B"
    }),
    _react2.default.createElement("path", {
      d:
        "m98.1 47.44c-0.1 1.34-1.66 3.92-3.75 4.36-6.32 1.32-8.82-5.25-13.17-0.85-0.13 0.13-3.68 5.4-8.05 6.42-4.17 0.98-8.27-0.58-9.64-1.52-0.13 0.2 1.99 2.96 7.67 3.13 7.85 0.24 8.87-3.05 13.4-5.4 1.13-0.58 5.02 0.07 5.66 0.3 4.26 1.56 6.91-1.37 7.34-1.86 0.69-0.8 0.87-4.26 0.54-4.58z",
      fill: "#FCB316"
    }),
    _react2.default.createElement("path", {
      d:
        "m96.42 71.91c-0.14 1.15-1.24 2.16-2.7 2.37-1.21 0.18-2.33-0.25-2.94-1-0.02 0.18-0.02 0.36 0 0.54 0.2 1.36 1.73 2.27 3.41 2.03 1.69-0.25 2.89-1.55 2.69-2.92-0.04-0.38-0.21-0.72-0.46-1.02z",
      fill: "#F9A01B"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.3 16.79c1.56 0 3.26 0.05 5.05 0.15 11.8 0.66 16.99 2.21 19.25 3.33-2.93 0.93-6.11 3.1-7.28 7.5-0.22 0.84-0.77 1.36-1.07 1.36-0.12 0-0.28-0.07-0.46-0.21-0.74-0.55-0.83-1.2-0.92-2.3-0.07-0.86-0.28-3.49-2.96-3.49-0.11 0-0.22 0-0.34 0.02-1.74 0.16-2.79 0.71-3.64 1.16-0.82 0.43-1.36 0.72-2.66 0.72-0.37 0-0.79-0.03-1.24-0.08-1.45-0.16-2.02-0.52-2.73-0.98-1-0.64-2.23-1.43-4.98-1.43-1 0-2.43 0.13-3.34 1.22-0.93 1.11-0.69 2.41-0.53 3.27 0.05 0.28 0.14 0.75 0.1 0.88-0.16 0.34-0.63 0.36-0.73 0.36h-0.02c-0.42-0.36-0.47-1.18-0.4-2.7 0.02-0.44 0.04-0.85 0.02-1.25-0.1-2.74-1.33-4.67-2.47-5.89 1.44-0.72 4.6-1.64 11.35-1.64m0-2c-13.71 0-14.32 3.75-14.32 3.75s3.3 1.8 3.45 5.84c0.06 1.62-0.6 4.5 1.5 5.69 0.2 0.11 0.52 0.19 0.9 0.19 0.87 0 2.02-0.38 2.55-1.53 0.83-1.84-1.65-4.2 1.95-4.2 4.12 0 3.45 1.95 7.49 2.4 0.55 0.06 1.03 0.09 1.46 0.09 3.33 0 3.56-1.62 6.48-1.89 0.05-0.01 0.11-0.01 0.16-0.01 1.83 0-0.08 3.36 2.69 5.4 0.56 0.42 1.12 0.6 1.65 0.6 1.41 0 2.59-1.31 3-2.84 1.72-6.46 8.39-6.59 8.95-6.59h0.04s1.99-5.36-22.78-6.74c-1.91-0.11-3.62-0.16-5.17-0.16z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "n",
        d:
          "m64.18 21.89c-13.67 0-24.75 4.34-24.75 9.7 0 0.86 0.29 1.7 0.83 2.5 2.81 4.14 12.46 7.2 23.92 7.2s21.11-3.05 23.92-7.2c0.42-0.62 14.6-19.42 14.6-19.42l1.47-10.67h-31.75s-5.11 17.89-8.24 17.89z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#n"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "m",
          x1: 78.916,
          x2: 84.646,
          y1: 27.718,
          y2: 33.448,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#8D6E63",
          offset: 0.0838
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6D4D42",
          offset: 0.644
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m72.56 56.57c-0.64 0-1.29-0.16-1.88-0.49-1.88-1.04-2.56-3.41-1.52-5.29l22.32-40.29c1.04-1.88 3.41-2.56 5.29-1.52s2.56 3.41 1.52 5.29l-22.32 40.29c-0.71 1.29-2.04 2.01-3.41 2.01z",
        fill: "url(#m)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m94.89 10.49c0.32 0 0.63 0.08 0.91 0.24 0.44 0.25 0.76 0.65 0.9 1.13 0.14 0.49 0.08 1-0.16 1.44l-22.32 40.29c-0.33 0.6-0.97 0.98-1.66 0.98-0.32 0-0.63-0.08-0.91-0.24-0.91-0.51-1.25-1.66-0.74-2.58l22.32-40.29c0.33-0.6 0.97-0.97 1.66-0.97m0-2c-1.37 0-2.7 0.72-3.41 2.01l-22.32 40.29c-1.04 1.88-0.36 4.25 1.52 5.29 0.6 0.33 1.25 0.49 1.88 0.49 1.37 0 2.7-0.72 3.41-2.01l22.32-40.29c1.04-1.88 0.36-4.25-1.52-5.29-0.59-0.34-1.24-0.49-1.88-0.49z",
          fill: "#434343"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "l",
          cx: 94.032,
          cy: 8.6072,
          r: 8.0795,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#A1887F",
          offset: 0.1799
        }),
        _react2.default.createElement("stop", {
          stopColor: "#795649",
          offset: 0.6917
        })
      ),
      _react2.default.createElement("circle", {
        cx: 95.49,
        cy: 11.04,
        r: 6.82,
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m95.49 6.23c2.66 0 4.82 2.16 4.82 4.82s-2.16 4.82-4.82 4.82-4.82-2.16-4.82-4.82c0.01-2.66 2.17-4.82 4.82-4.82m0-2c-3.76 0-6.82 3.05-6.82 6.82 0 3.76 3.05 6.82 6.82 6.82 3.76 0 6.82-3.05 6.82-6.82s-3.05-6.82-6.82-6.82z",
          fill: "#434343"
        })
      )
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 78.89,
        cy: 33.431,
        r: 7.5653,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE081",
        offset: 0.2307
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB28",
        offset: 0.6805
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.27 42.2-11.99-0.21s3.96-6.1 8.03-11.89c1.31-1.86-1.72 4.06 0.32 4.39 2.68 0.43 5.71-6.75 7.6-6 2.14 0.86 0.54 4.07 0.54 4.07l-4.5 9.64z",
      clipPath: "url(#b)",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m39.86 21.71c3.13 0 4.03 1.58 4.98 3.24 0.09 0.15 0.17 0.3 0.25 0.44 0.61 1.03 0.79 2.46 0.46 3.48-0.19 0.57-0.52 0.95-1.01 1.15-0.23 0.1-0.4 0.16-0.53 0.19-0.04-0.07-0.08-0.13-0.11-0.19-0.6-1.08-1.61-2.9-4.59-3.81-3.43-1.06-6.5-1.61-9.12-1.65 1.42-0.91 3.65-1.87 7.13-2.58 0.94-0.17 1.79-0.27 2.54-0.27m0-2c-0.86 0-1.83 0.1-2.93 0.32-11.26 2.29-11.24 7.34-11.24 7.34s1.19-0.81 4.24-0.81c2.04 0 4.9 0.36 8.8 1.56 3.92 1.2 3.07 4.17 4.99 4.17 0.4 0 0.91-0.13 1.61-0.42 2.85-1.2 2.9-5.11 1.5-7.49-1.03-1.73-2.32-4.67-6.97-4.67z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#434343",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m114.24 91.21s-0.01 0-0.01 0.01l0.01-0.01z"
      }),
      _react2.default.createElement("path", {
        d: "m13.76 91v0.21h0.38c-0.12-0.07-0.25-0.14-0.38-0.21z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m94.26 34.79c2.16 0 5.03 0.71 6.62 2.71 0.98 1.24 1.29 2.42 1.01 3.96-0.04 0.25-0.04 0.5 0.01 0.75 0.31 1.54-0.31 3.14-0.9 4.68-0.38 0.98-0.73 1.9-0.88 2.85-0.03 0.17-0.03 0.35-0.01 0.52 0.35 3.21 1.84 4.75 3.57 6.53 1.1 1.14 2.35 2.43 3.78 4.55 3.33 4.97 4.54 10.92 4.26 14.61-0.01 0.1-0.01 0.19 0 0.29 0.24 3.63-0.65 5.71-1.39 5.82-0.06 0.01-0.12 0.01-0.19 0.01-0.54 0-1.16-0.36-1.7-0.98-0.85-0.97-1.65-2.8-1.34-5 0.01-0.05 0.01-0.09 0.01-0.11 0.03-0.19 0.02-0.38 0-0.56-0.1-0.65-0.1-1.3-0.01-1.94 0.18-1.31 0.29-2.6 0.35-3.97v-0.18c-0.42-8.07-4.16-11.68-7.68-11.68-0.66 0-1.31 0.13-1.91 0.38-1.84 0.77-2.9 2.49-3.16 5.12-0.01 0.12-0.01 0.23 0 0.35 0.2 2.57 0.82 5.46 1.37 8 0.13 0.6 0.25 1.18 0.37 1.74 0.11 0.55 0.11 1.06-0.01 1.52-0.08 0.3-0.09 0.62-0.03 0.93l0.02 0.09 0.02 0.08c0.2 0.94 0.06 1.74-0.39 2.29-0.39 0.48-1 0.75-1.71 0.75-0.08 0-0.16 0-0.25-0.01-0.8-0.07-1.48-0.41-1.92-0.97-0.56-0.72-0.74-1.81-0.53-3.15 0.04-0.23 0.03-0.47-0.01-0.7-0.16-0.8-0.09-1.75 0.2-2.83 0.46-1.72 0.75-3.25 0.88-4.67 0.01-0.13 0.01-0.26 0-0.39-0.48-4.62-3.23-6.43-5.44-7.14-0.58-0.19-1.12-0.28-1.64-0.28-3.22 0-3.89 3.19-4.29 5.1-0.56 2.66-0.9 3-1.67 3.02-0.37-0.24-1.08-1.03-1.56-1.57-1.41-1.57-3.01-3.35-5.12-3.35-3.18 0-4.57 3.71-5.43 6.95-0.04 0.14-0.06 0.29-0.09 0.43l-0.01 0.08c-0.05 0.23-0.05 0.47-0.01 0.71 0.18 1.12 0.51 2.19 0.82 3.23 0.52 1.74 1.02 3.37 0.75 4.87-0.04 0.22-0.04 0.44-0.01 0.66 0.19 1.22 0.08 2.17-0.35 3.08-0.45 0.96-1.26 1.51-2.21 1.51-0.83 0-1.65-0.41-2.26-1.14-0.77-0.9-1-2.06-0.79-3.98 0.02-0.17 0.02-0.33-0.01-0.5-0.2-1.4 0.14-3.17 0.49-5.04 0.26-1.39 0.54-2.82 0.64-4.31 0.1-1.4 0.16-2.59 0.2-3.64v-0.16c-0.2-4.17-1.55-6.08-5.18-7.26-0.75-0.42-3.62-3.54-3.52-6.8 0.01-0.32 0.04-0.65 0.08-1.04 0.02-0.18 0.02-0.35-0.01-0.53-0.06-0.39-0.08-0.73-0.07-1.04 0.08-2.65 1.06-5.74 3.54-5.74h0.07c2.29 0.05 4.03 0.13 5.43 0.2 1.41 0.07 2.53 0.12 3.68 0.12 2.66 0 5.18-0.29 9.99-1.16 3.12-0.56 4.88-1.73 6.74-2.98 1.46-0.98 3.12-2.08 5.9-3.19 0.77-0.32 1.81-0.5 2.89-0.5m0-2c-1.34 0-2.62 0.22-3.66 0.64-6.48 2.59-7.26 5.16-12.25 6.06-4.91 0.88-7.27 1.13-9.64 1.13-2.26 0-4.54-0.22-9.07-0.32h-0.11c-3.16 0-5.4 2.95-5.54 7.67-0.01 0.47 0.02 0.94 0.09 1.4-0.04 0.39-0.08 0.79-0.09 1.21-0.13 4.31 3.57 8.34 4.85 8.75 2.65 0.85 3.68 1.86 3.85 5.47-0.03 1.04-0.1 2.21-0.19 3.56-0.24 3.44-1.53 6.89-1.12 9.77-0.22 2.06-0.06 3.94 1.25 5.49 1.04 1.23 2.44 1.84 3.79 1.84 1.62 0 3.18-0.88 4.02-2.65 0.68-1.43 0.73-2.84 0.52-4.24 0.54-2.99-1.09-5.91-1.56-8.78 0.02-0.13 0.04-0.25 0.07-0.38 1.09-4.11 2.29-5.46 3.5-5.46 2.3 0 4.66 4.87 6.47 4.92h0.12c5.06 0 2.55-8.12 6.06-8.12 0.3 0 0.64 0.06 1.03 0.18 2.77 0.89 3.81 3.07 4.06 5.45-0.15 1.66-0.52 3.22-0.81 4.33-0.39 1.46-0.44 2.7-0.23 3.73-0.65 4.09 1.63 6.2 4.25 6.43 0.14 0.01 0.28 0.02 0.42 0.02 2.65 0 4.74-2.19 4.06-5.45-0.01-0.06-0.02-0.12-0.04-0.17 0.19-0.72 0.22-1.53 0.04-2.44-0.6-2.89-1.47-6.47-1.7-9.49 0.16-1.68 0.72-2.96 1.94-3.47 0.36-0.15 0.75-0.23 1.14-0.23 2.46 0 5.33 3 5.68 9.78-0.04 1.17-0.14 2.41-0.33 3.77-0.12 0.86-0.11 1.71 0.01 2.51 0 0.03-0.01 0.07-0.01 0.1-0.6 4.31 2.08 8.25 5.02 8.25 0.16 0 0.32-0.01 0.48-0.04 2.32-0.34 3.38-3.64 3.1-7.93 0.34-4.4-1.13-10.73-4.59-15.88-3.77-5.62-6.56-5.95-7.02-10.19 0.34-2.16 2.4-5.03 1.76-8.22 0.31-1.73 0.14-3.61-1.41-5.56-1.92-2.36-5.23-3.44-8.21-3.44z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37.29 32.82c0.26 0 0.53 0.01 0.8 0.03 0.29 1.28 1.08 2.67 3.49 3.95 0.81 0.43 1.52 0.82 2.15 1.16 1.93 1.05 3.2 1.75 4.43 2.1 0.03 0.25 0.02 0.66-0.14 1.22-0.13 0.45-0.1 0.92 0.09 1.35 0.18 0.42 0.18 2.25-2.19 4.98-1.19 1.38-1.97 2.64-2.39 3.85-0.14 0.41-0.14 0.86 0 1.27s0.3 0.79 0.44 1.12c0.31 0.73 0.48 1.16 0.43 1.61-0.04 0.3-0.07 0.59-0.1 0.88l-0.05 0.4c-0.03 0.27-0.01 0.55 0.07 0.81 0.08 0.28 0.11 0.49 0.08 0.71-0.96 7.8-1.53 15.81-1.6 22.6 0.03 2.09 0.11 3.93 0.24 5.45 0.08 0.93 0.09 1.85 0.02 2.74-0.01 0.1-0.01 0.21 0 0.31 0.23 3.09-0.36 5.65-1.63 7.02-0.68 0.74-1.53 1.1-2.57 1.1-0.2 0-0.4-0.01-0.61-0.04-1.75-0.22-2.82-0.75-3.42-2.9-0.17-0.62-0.19-1.48-0.05-2.54 0.03-0.2 0.02-0.4-0.01-0.6-0.4-2.3 0.92-6.34 2.32-10.62 0.65-2 1.33-4.06 1.94-6.24 0.7-2.5 1.14-4.76 1.31-6.73 0.01-0.13 0.01-0.26 0-0.38-0.53-4.92-3.61-5.3-4.54-5.3-0.37 0-0.74 0.05-1.12 0.14-5.28 1.32-6.42 6.71-7.34 11.03-0.51 2.4-1.08 5.12-2.2 5.7-0.53 0.27-1.09 0.42-1.58 0.42-0.51 0-0.91-0.16-1.2-0.48-0.38-0.41-0.97-1.51-0.71-4.2 0.01-0.15 0.01-0.3-0.01-0.45-0.11-0.86-0.08-1.9 0.09-3.09 0.31-2.15 1.45-3.37 2.91-4.91 0.9-0.95 1.82-1.94 2.6-3.21 1.63-2.67 2.66-5.45 2.97-8.03 0.02-0.16 0.02-0.33 0-0.5-0.26-1.99-0.99-3.8-2.19-5.36-0.16-0.47-0.48-2.09-0.3-4.12 0.01-0.12 0.01-0.24 0-0.36-0.16-1.81-0.18-6.33 3.24-9.37 1.85-1.7 3.93-2.52 6.33-2.52m0-2c-2.29 0-5.04 0.63-7.7 3.01-3.7 3.29-4.17 8.09-3.9 11.05-0.24 2.74 0.29 4.98 0.61 5.38 1.09 1.39 1.68 2.92 1.89 4.53-0.29 2.45-1.3 4.95-2.69 7.22-1.9 3.11-5.17 4.6-5.78 8.89-0.21 1.44-0.22 2.64-0.09 3.64-0.48 5.05 1.59 6.87 3.91 6.87 0.84 0 1.71-0.24 2.5-0.65 4.51-2.33 1.91-14.77 9.11-16.57 0.22-0.05 0.43-0.08 0.63-0.08 1.3 0 2.3 1.12 2.56 3.52-0.14 1.73-0.53 3.84-1.24 6.35-2.06 7.33-4.99 13.8-4.31 17.74-0.16 1.26-0.15 2.39 0.11 3.34 0.95 3.41 3.14 4.1 5.1 4.35 0.29 0.04 0.58 0.05 0.86 0.05 4.2 0 6.66-4.09 6.2-10.26 0.08-0.96 0.08-1.98-0.02-3.08-0.13-1.43-0.21-3.22-0.24-5.3 0.06-5.97 0.52-13.73 1.59-22.33 0.07-0.56-0.01-1.05-0.15-1.53 0.05-0.42 0.1-0.84 0.15-1.27 0.17-1.39-0.55-2.41-0.95-3.61 0.3-0.89 0.9-1.92 2-3.19 2.85-3.29 3.05-5.86 2.52-7.09 0.6-2.11-0.08-3.44-0.78-3.58-1.5-0.29-3.21-1.39-6.64-3.21-3.85-2.04-1.76-3.84-3.19-4.05-0.64-0.08-1.33-0.14-2.06-0.14z",
        fill: "#434343"
      })
    )
  );
}

exports.default = HoneyPot;
