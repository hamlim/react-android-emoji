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

function Keyboard(props) {
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
        id: "e",
        x1: 64.067,
        x2: 64.067,
        y1: 33.798,
        y2: 93.812,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120.47 93.93h-112.81c-1.95 0-3.54-1.58-3.54-3.54v-52.94c0-1.95 1.58-3.54 3.54-3.54h112.81c1.95 0 3.54 1.58 3.54 3.54v52.95c0 1.95-1.59 3.53-3.54 3.53z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.47 36.92c0.3 0 0.54 0.24 0.54 0.54v52.94c0 0.3-0.24 0.54-0.54 0.54h-112.81c-0.3 0-0.54-0.24-0.54-0.54v-52.95c0-0.3 0.24-0.54 0.54-0.54h112.81m0-2.99h-112.81c-1.95 0-3.54 1.58-3.54 3.54v52.94c0 1.95 1.58 3.54 3.54 3.54h112.81c1.95 0 3.54-1.58 3.54-3.54v-52.95c0-1.95-1.59-3.53-3.54-3.53z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#F5F5F5"
      },
      _react2.default.createElement("path", {
        d:
          "m18.35 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.79 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m41.23 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m52.67 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.11 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.55 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.99 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m98.43 49.99h-4.69c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h4.69c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m114.4 49.99h-8.7c-0.91 0-1.65-0.74-1.65-1.65v-4.7c0-0.91 0.74-1.65 1.65-1.65h8.7c0.91 0 1.65 0.74 1.65 1.65v4.7c0 0.91-0.74 1.65-1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m109.7 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m98.26 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.82 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.38 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.94 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m52.5 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m41.06 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.62 61.98h4.69c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.69c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m13.65 61.98h8.7c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-8.7c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m81.72 73.97h4.74c0.9 0 1.63-0.73 1.63-1.63v-4.74c0-0.9-0.73-1.63-1.63-1.63h-4.74c-0.9 0-1.63 0.73-1.63 1.63v4.74c0 0.9 0.73 1.63 1.63 1.63z"
      }),
      _react2.default.createElement("path", {
        d:
          "m69.71 73.97h4.74c0.9 0 1.63-0.73 1.63-1.63v-4.74c0-0.9-0.73-1.63-1.63-1.63h-4.74c-0.9 0-1.63 0.73-1.63 1.63v4.74c0 0.9 0.73 1.63 1.63 1.63z"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.69 73.97h4.74c0.9 0 1.63-0.73 1.63-1.63v-4.74c0-0.9-0.73-1.63-1.63-1.63h-4.74c-0.9 0-1.63 0.73-1.63 1.63v4.74c0 0.9 0.73 1.63 1.63 1.63z"
      }),
      _react2.default.createElement("path", {
        d:
          "m45.68 73.97h4.74c0.9 0 1.63-0.73 1.63-1.63v-4.74c0-0.9-0.73-1.63-1.63-1.63h-4.74c-0.9 0-1.63 0.73-1.63 1.63v4.74c0 0.9 0.73 1.63 1.63 1.63z"
      }),
      _react2.default.createElement("path", {
        d:
          "m33.66 73.97h4.74c0.9 0 1.63-0.73 1.63-1.63v-4.74c0-0.9-0.73-1.63-1.63-1.63h-4.74c-0.9 0-1.63 0.73-1.63 1.63v4.74c0 0.9 0.73 1.63 1.63 1.63z"
      }),
      _react2.default.createElement("path", {
        d:
          "m13.65 73.97h12.65c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-12.65c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.92 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m93.73 74.14h20.64c0.91 0 1.65-0.74 1.65-1.65v-5.03c0-0.91-0.74-1.65-1.65-1.65h-20.64c-0.91 0-1.65 0.74-1.65 1.65v5.03c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m109.7 85.97h4.7c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.7c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m97.26 85.97h4.7c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.7c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m38.53 85.97h50.99c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-50.99c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m26.09 85.97h4.7c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.7c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m13.65 85.97h4.7c0.91 0 1.65-0.74 1.65-1.65v-4.7c0-0.91-0.74-1.65-1.65-1.65h-4.7c-0.91 0-1.65 0.74-1.65 1.65v4.7c0 0.91 0.74 1.65 1.65 1.65z"
      })
    )
  );
}

exports.default = Keyboard;