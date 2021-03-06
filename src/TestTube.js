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

function TestTube(props) {
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
        "m33.79 4.25-0.06 0.05c-1.69-0.56-8.93 4.9-16.7 12.67s-13.23 15.01-12.67 16.7l-0.06 0.06 5.92 5.92 0.01-0.01c0.16 0.12 0.41 0.15 0.73 0.1 2.62-0.47 5.57 0.36 7.76 2.56l74.1 74.1c10.18 10.18 19.9 8.63 26.07 2.46s7.7-15.91-2.46-26.07l-74.1-74.1c-2.2-2.2-3.03-5.15-2.56-7.77 0.06-0.33 0.03-0.57-0.1-0.73l0.01-0.01-5.89-5.93z",
      fill: "#E6E6E6"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: -69.547,
        x2: -69.547,
        y1: -92.663,
        y2: -36.541,
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
        "m-18.63-63.97c-0.91-4.33-4.3-20.11-5.87-27.41-0.47-2.21-2.11-3.82-3.99-3.81-5.36 0-15.39-0.05-16.6-0.05h-44.08c-0.61 0-2.56 0.06-4.11 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0-0.43-0.05-0.85-0.13-1.25z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m-42.13-46.78c-0.91-4.32-4.3-20.06-5.87-27.34-0.47-2.21-2.11-3.82-3.99-3.82-5.36 0-15.39-0.06-16.6-0.06h-44.08c-0.61 0-2.56 0.07-4.11 1.8-4.7 5.26-12.54 20.51-13.76 22.05-0.08 0.1-6.27 2.28-9.09 3.96-1.12 0.67-1.74 2.13-1.9 3.62l-2.46 20.76c-0.64 4.09 1.7 5.81 5.37 5.81h91.51c2.8 0 5.11-0.79 5.11-5.8v-19.74c0-0.42-0.05-0.83-0.13-1.24z"
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
          "m-9.98-106.33c0.36 0 0.87 0.53 1.05 1.38 1.46 6.78 4.94 23.03 5.86 27.4 0.05 0.19 0.07 0.4 0.07 0.61v19.79c0 2.81-0.49 2.81-2.1 2.81h-91.51c-1.3 0-2.02-0.29-2.25-0.56s-0.3-0.95-0.16-1.8c0.01-0.04 0.01-0.07 0.02-0.11l2.47-20.84c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.46 10.65-16.87 0.57-0.64 1.22-0.72 1.87-0.72h44.08c0.75 0 4.89 0 9.21-0.01l7.39 0.01m0-3c-5.36 0-15.39 0.01-16.6 0.01h-44.08-0.02c-0.63 0-2.55 0.01-4.08 1.73-4.7 5.27-12.54 20.49-13.76 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.5c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24-0.91-4.33-4.3-20.11-5.86-27.41-0.48-2.22-2.11-3.75-3.99-3.75z",
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
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.48-10.71c-3.76 0-6.83-0.16-9.16-0.37 2.33-0.21 5.39-0.37 9.16-0.37 3.76 0 6.83 0.16 9.16 0.37-2.33 0.21-5.39 0.37-9.16 0.37z",
        fill: "#808080"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.49-12.95c-8.55 0-15.49 0.84-15.49 1.87s6.93 1.87 15.49 1.87 15.49-0.84 15.49-1.87-6.94-1.87-15.49-1.87z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 51.553,
        x2: 83.165,
        y1: 79.197,
        y2: 79.197,
        gradientTransform: "matrix(.7071 -.7071 .7071 .7071 -29.682 64.948)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4CAF50",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A4E849",
        offset: 0.6933
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9CDE47",
        offset: 0.7603
      }),
      _react2.default.createElement("stop", {
        stopColor: "#86C441",
        offset: 0.873
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m18.66 40.39 74.35 74.35c9.9 9.9 19.11 8.62 24.85 2.89 5.74-5.74 6.99-14.97-2.89-24.84l-48.02-48.03-48.29-4.37z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m115.58 103.39c-0.63 0.63-1.65 0.63-2.28 0l-74.84-74.84c-0.63-0.63-0.63-1.65 0-2.28s1.65-0.63 2.28 0l74.84 74.84c0.62 0.63 0.62 1.65 0 2.28z",
      fill: "#fff",
      opacity: 0.55
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m32.68 9.3 2.63 2.63c-0.12 3.59 1.29 7.17 3.95 9.83l74.1 74.1c3.88 3.88 5.98 7.88 6.08 11.56 0.1 3.81-1.91 6.64-3.62 8.34-1.66 1.66-4.4 3.63-8.07 3.63-3.76 0-7.85-2.11-11.83-6.09l-74.1-74.1c-2.55-2.55-5.89-3.96-9.4-3.96-0.14 0-0.28 0-0.42 0.01l-2.64-2.64c1.42-2.24 4.81-6.64 10.75-12.57s10.34-9.32 12.57-10.74m1.11-5.06-0.06 0.06c-0.08-0.03-0.17-0.04-0.28-0.04-2.1 0-9.02 5.31-16.42 12.71-7.77 7.77-13.23 15.01-12.67 16.7l-0.06 0.06 5.92 5.92 0.01-0.01c0.11 0.08 0.25 0.12 0.44 0.12 0.09 0 0.19-0.01 0.3-0.03 0.47-0.08 0.95-0.13 1.44-0.13 2.21 0 4.52 0.88 6.32 2.68l74.1 74.1c5.23 5.23 10.35 7.37 14.92 7.37 4.32 0 8.16-1.91 11.16-4.91 6.17-6.17 7.7-15.91-2.46-26.07l-74.1-74.1c-2.2-2.2-3.03-5.15-2.56-7.77 0.06-0.33 0.03-0.57-0.1-0.73l0.01-0.01-5.91-5.92z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 45.04,
      cy: 52.22,
      r: 4.54,
      fill: "#fff",
      opacity: 0.69
    }),
    _react2.default.createElement("circle", {
      cx: 31,
      cy: 33.96,
      r: 4.54,
      fill: "#9CCC65"
    }),
    _react2.default.createElement("circle", {
      cx: 55.69,
      cy: 58.77,
      r: 2.2,
      fill: "#fff",
      opacity: 0.69
    }),
    _react2.default.createElement("circle", {
      cx: 17.46,
      cy: 9.28,
      r: 3.16,
      fill: "#9CCC65"
    }),
    _react2.default.createElement("circle", {
      cx: 11.25,
      cy: 15.25,
      r: 1.47,
      fill: "#9CCC65"
    }),
    _react2.default.createElement("circle", {
      cx: 69.25,
      cy: 72.71,
      r: 3.81,
      fill: "#fff",
      opacity: 0.69
    }),
    _react2.default.createElement("circle", {
      cx: 63.33,
      cy: 62.38,
      r: 1.47,
      fill: "#fff",
      opacity: 0.69
    })
  );
}

exports.default = TestTube;
