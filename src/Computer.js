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

function Computer(props) {
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
        id: "b",
        x1: -93.047,
        x2: -93.047,
        y1: -73.413,
        y2: -17.291,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0051299
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.2817
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.5766
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-42.13-44.72c-0.91-4.33-4.3-20.11-5.87-27.41-0.47-2.21-2.11-3.82-3.99-3.81-5.36 0-15.39-0.05-16.6-0.05h-44.08c-0.61 0-2.56 0.06-4.11 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0-0.43-0.05-0.85-0.13-1.25z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m-42.13-44.78c-0.91-4.32-4.3-20.06-5.87-27.34-0.47-2.21-2.11-3.82-3.99-3.82-5.36 0-15.39-0.06-16.6-0.06h-44.08c-0.61 0-2.56 0.07-4.11 1.8-4.7 5.26-12.54 20.51-13.76 22.05-0.08 0.1-6.27 2.28-9.09 3.96-1.12 0.67-1.74 2.13-1.9 3.62l-2.46 20.76c-0.64 4.09 1.7 5.81 5.37 5.81h91.51c2.8 0 5.11-0.79 5.11-5.8v-19.74c0-0.42-0.05-0.83-0.13-1.24z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-51.98-73c0.36 0 0.87 0.59 1.05 1.44 1.46 6.78 4.95 23.06 5.86 27.43 0.04 0.2 0.07 0.44 0.07 0.66v19.79c0 2.81-0.49 2.69-2.11 2.69h-91.51c-1.3 0-2.02-0.23-2.25-0.5s-0.3-0.92-0.16-1.77c0.01-0.04 0.01-0.06 0.02-0.09l2.47-20.83c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.53 10.65-16.93 0.57-0.64 1.22-0.79 1.87-0.79h44.08 9.21 7.4-0.02m0.02-3.01s-0.01 0 0 0h-16.6-44.08-0.02c-0.63 0-2.55 0.08-4.08 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0-0.42-0.05-0.84-0.13-1.24-0.91-4.33-4.3-20.17-5.87-27.47-0.49-2.21-2.13-3.81-4-3.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 46.43,
        x2: 46.43,
        y1: -117.5,
        y2: -61.374,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0106
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D5D5D",
        offset: 0.2496
      }),
      _react2.default.createElement("stop", {
        stopColor: "#505050",
        offset: 0.5044
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3B3B3B",
        offset: 0.7657
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.35-88.93c-0.91-4.33-4.3-20.11-5.86-27.41-0.47-2.21-2.11-3.75-3.99-3.75-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.73-4.71 5.28-12.55 20.49-13.76 22.04-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c-0.01-0.43-0.05-0.84-0.13-1.25z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m97.35-88.98c-0.91-4.32-4.3-20.06-5.86-27.34-0.47-2.21-2.11-3.74-3.99-3.74-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.72-4.71 5.27-12.55 20.48-13.76 22.02-0.08 0.1-6.27 2.26-9.09 3.94-1.12 0.67-1.74 2.12-1.9 3.61l-2.47 20.76c-0.64 4.09 1.7 5.8 5.37 5.8h91.51c2.8 0 5.1-0.79 5.1-5.8v-19.74c0-0.42-0.04-0.84-0.12-1.24z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m87.5-117.08c0.36 0 0.87 0.53 1.05 1.38 1.46 6.78 4.94 23.03 5.86 27.4 0.04 0.2 0.06 0.41 0.06 0.63v19.79c0 2.81-0.49 2.81-2.1 2.81h-91.51c-1.3 0-2.02-0.29-2.25-0.56s-0.3-0.95-0.16-1.8l0.02-0.1 2.47-20.84c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.46 10.65-16.87 0.57-0.64 1.22-0.72 1.87-0.72h44.08c0.75 0 4.89 0 9.21-0.01l7.4-0.02m0-3c-5.36 0-15.39 0.01-16.6 0.01h-44.08-0.02c-0.63 0-2.55 0.01-4.08 1.73-4.72 5.27-12.56 20.48-13.77 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24-0.91-4.33-4.3-20.11-5.86-27.41-0.48-2.22-2.12-3.75-3.99-3.75z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 63.938,
        x2: 63.938,
        y1: -14.732,
        y2: 4.1387,
        gradientTransform: "matrix(1 0 0 -1 0 89.343)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "112.59 85.08 15.18 85.08 4 104.12 123.88 104.12",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m19.08 82.42 89.61 0.01 11.68 19.7h-112.87l11.58-19.71m-1.15-2-13.93 23.7h119.88l-14.05-23.7h-91.9z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#F5F5F5"
      },
      _react2.default.createElement("polygon", {
        points: "26.79 88.03 20.35 88.03 21.22 86.35 27.68 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "36.87 88.03 30.43 88.03 31.23 86.35 37.84 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "46.46 88.03 40.02 88.03 40.94 86.35 47.39 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "56 88.03 49.56 88.03 50.6 86.35 56.63 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "65.4 88.03 58.96 88.03 59.47 86.35 64.88 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "75 88.03 68.55 88.03 67.84 86.35 73.94 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "84.84 88.03 78.4 88.03 77.18 86.35 83.62 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "94.33 88.03 87.89 88.03 86.74 86.35 93.19 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "107.23 88.03 97.56 88.03 96.33 86.35 106.28 86.35"
      }),
      _react2.default.createElement("polygon", {
        points: "102.3 90.54 108.74 90.54 107.6 88.86 101.06 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "91.77 90.54 98.21 90.54 96.98 88.86 90.54 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "82.16 90.54 88.6 90.54 87.51 88.86 81.08 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "71.83 90.54 78.27 90.54 77.12 88.86 71.05 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "62.61 90.54 69.05 90.54 68.34 88.86 62.91 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "53.39 90.54 59.83 90.54 60.22 88.86 53.98 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "43.3 90.54 49.74 90.54 50.52 88.86 44.34 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "32.08 90.54 38.52 90.54 39.52 88.86 33.07 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "18.94 90.54 28.62 90.54 29.57 88.86 19.86 88.86"
      }),
      _react2.default.createElement("polygon", {
        points: "79.95 93.05 86.4 93.05 85.28 91.37 78.84 91.37"
      }),
      _react2.default.createElement("polygon", {
        points: "69.69 93.05 76.13 93.05 75.19 91.37 69.15 91.37"
      }),
      _react2.default.createElement("polygon", {
        points: "57.59 93.05 64.03 93.05 63.85 91.37 58.09 91.37"
      }),
      _react2.default.createElement("polygon", {
        points: "46.07 93.05 52.52 93.05 53.09 91.37 46.91 91.37"
      }),
      _react2.default.createElement("polygon", {
        points: "33.94 93.05 40.39 93.05 41.41 91.37 34.96 91.37"
      }),
      _react2.default.createElement("polygon", {
        points: "17.69 93.05 30.54 93.05 31.6 91.37 18.63 91.37"
      }),
      _react2.default.createElement("polygon", {
        points: "90.83 93.08 110.13 93.08 108.98 91.34 89.69 91.34"
      }),
      _react2.default.createElement("polygon", {
        points: "105.49 95.56 111.93 95.56 110.63 93.88 104.19 93.88"
      }),
      _react2.default.createElement("polygon", {
        points: "93.46 95.56 99.91 95.56 98.65 93.88 92.21 93.88"
      }),
      _react2.default.createElement("polygon", {
        points: "42.13 95.56 85.88 95.56 84.87 93.88 43.12 93.88"
      }),
      _react2.default.createElement("polygon", {
        points: "28.39 95.56 34.83 95.56 35.62 93.88 29.32 93.88"
      }),
      _react2.default.createElement("polygon", {
        points: "16.08 95.56 22.53 95.56 23.29 93.88 17 93.88"
      }),
      _react2.default.createElement("polygon", {
        points: "41.44 99.99 86.25 99.99 84.33 96.51 43.3 96.51"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.74 108.05h-115.6c-1.18 0-2.14-0.96-2.14-2.14v-1.79h119.88v1.79c0 1.19-0.96 2.14-2.14 2.14z",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m122.88 105.12v0.79c0 0.63-0.51 1.14-1.14 1.14h-115.6c-0.63 0-1.14-0.51-1.14-1.14v-0.79h117.88m1-1h-119.88v1.79c0 1.18 0.96 2.14 2.14 2.14h115.6c1.18 0 2.14-0.96 2.14-2.14v-1.79z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 63.883,
        x2: 63.883,
        y1: 20.113,
        y2: 84.671,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.0056401
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.9988
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M112.59,85.08H15.18V22.79c0-1.57,1.27-2.84,2.84-2.84h91.72c1.57,0,2.84,1.27,2.84,2.84 V85.08z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m109.74 21.95c0.47 0 0.84 0.38 0.84 0.84v60.29h-93.4v-60.29c0-0.47 0.38-0.84 0.84-0.84h91.72m0-2h-91.72c-1.57 0-2.84 1.27-2.84 2.84v62.29h97.41v-62.29c0-1.57-1.28-2.84-2.85-2.84z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 24.02,
      y: 27.23,
      width: 79.66,
      height: 49.9,
      fill: "#616161"
    })
  );
}

exports.default = Computer;
