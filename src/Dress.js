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

function Dress(props) {
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
        "m-101.27 25.65 2.81-19.34c0.22-1.53 1.81-2.56 3.46-2.25 1.49 0.28 2.49 1.57 2.29 2.95l-2.81 19.34c-0.22 1.53-1.81 2.56-3.46 2.25-1.49-0.28-2.5-1.57-2.29-2.95z",
      fill: "#EC407A"
    }),
    _react2.default.createElement("path", {
      d:
        "m-52.18 25.65-2.81-19.34c-0.22-1.53-1.81-2.56-3.46-2.25-1.49 0.28-2.49 1.57-2.29 2.95l2.81 19.34c0.22 1.53 1.81 2.56 3.46 2.25 1.49-0.28 2.5-1.57 2.29-2.95z",
      fill: "#EC407A"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: -75.953,
        cy: 53.924,
        r: 74.444,
        gradientTransform: "matrix(1 0 0 .9072 0 5.0066)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EC407A",
        offset: 0.208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F48FB1",
        offset: 0.768
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-21.05 96.32-36.5-50.58 8.82-27.59s-4.57-4.99-14.93-1.44c-6.93 2.37-13.18 12.84-13.18 12.84s-4.69-9.54-13.18-12.84c-10.21-3.97-15.23 1.44-15.23 1.44l9.11 27.59-36.81 50.58s21.86 27.68 56.06 27.68 55.84-27.68 55.84-27.68z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m-21.05 96.32-36.5-50.58 8.82-27.59s-4.57-4.99-14.93-1.44c-6.93 2.37-13.18 12.84-13.18 12.84s-4.69-9.54-13.18-12.84c-10.21-3.97-15.23 1.44-15.23 1.44l9.11 27.59-36.81 50.58s21.86 27.68 56.06 27.68 55.84-27.68 55.84-27.68z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "e"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#e)"
      },
      _react2.default.createElement("path", {
        d:
          "m-132.31 83.65c22.33 41.15 88.53 41.15 110.86 0 1.29-2.37-2.33-4.49-3.62-2.11-20.86 38.43-82.77 38.43-103.63 0-1.28-2.38-4.9-0.26-3.61 2.11z",
        fill: "#FFFDE7"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-97.12 18.25c1.86 0 3.88 0.42 6.02 1.25 7.26 2.82 11.53 11.29 11.57 11.37 0.49 0.99 1.47 1.63 2.57 1.67h0.12c1.05 0 2.03-0.55 2.57-1.46 1.59-2.65 6.76-9.89 11.57-11.54 2.16-0.74 4.18-1.11 6.01-1.11 2.02 0 3.48 0.45 4.42 0.91l-8.14 25.48c-0.29 0.91-0.13 1.9 0.42 2.67l35.12 48.66c-5.28 5.85-24.57 24.85-52.02 24.85s-46.89-18.99-52.23-24.85l35.41-48.65c0.57-0.78 0.73-1.79 0.42-2.71l-8.43-25.5c0.99-0.51 2.51-1.04 4.6-1.04m0-3c-5.44 0-8.13 2.9-8.13 2.9l9.11 27.59-36.81 50.58s21.86 27.68 56.06 27.68 55.84-27.68 55.84-27.68l-36.5-50.58 8.82-27.59s-2.49-2.71-7.95-2.71c-1.94 0-4.26 0.34-6.98 1.27-6.93 2.37-13.18 12.84-13.18 12.84s-4.69-9.54-13.18-12.84c-2.74-1.07-5.11-1.46-7.1-1.46z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: -97.709,
          x2: -97.709,
          y1: 62.933,
          y2: 108.3,
          gradientTransform: "matrix(.9959 .0906 -.0906 .9959 5.7566 9.1295)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#EC407A",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F48FB1",
          offset: 0.5833
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-107.85 86.37c-2.18-1.25-2.81-4.09-1.38-6.15l21.65-31 2.41 1.42-16.73 33.92c-1.08 2.2-3.81 3.03-5.95 1.81z",
        fill: "url(#d)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-78.41 92.32 1.61-37.31 2.79 0.1 5.11 36.76c0.39 2.81-1.74 5.34-4.58 5.44-2.77 0.09-5.05-2.21-4.93-4.99z",
        fill: "#EC407A"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: -55.598,
          x2: -55.598,
          y1: 62.933,
          y2: 108.3,
          gradientTransform: "matrix(.9989 -.0465 .0465 .9989 -3.1956 -2.5127)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#EC407A",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F48FB1",
          offset: 0.5833
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-50.36 84.21-17.38-34 2.36-1.49 21.23 31.85c1.2 1.8 0.56 4.24-1.37 5.21-1.78 0.9-3.94 0.2-4.84-1.57z",
        fill: "url(#c)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-54.9 44.06c-0.08-2.15-0.96-3.35-0.96-3.35l-8.14 1.2c-8.63 1.08-17.36 1.05-25.98-0.1l-7.96-1.2s-0.37 1.35-0.5 3.7c-0.12 2.25 0.4 4.12 0.4 4.12l8.06 1.16c2.81 0.38 5.64 0.62 8.47 0.76-1.45 4.33-6.53 7.36-10.48 10.17-4.58 3.26 4.85 10.53 8.37 8.02 5.14-3.66 7.36-11.08 7.06-18.06h0.12c-0.31 6.98 1.92 14.4 7.06 18.06 3.52 2.51 12.95-4.76 8.37-8.02-3.95-2.81-9.03-5.84-10.48-10.18 2.5-0.13 5-0.34 7.49-0.65l8.61-1.1c0.2 0.64 0.64-0.66 0.49-4.53z",
      fill: "#FFFDE7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-97.16 41.73 7.04 1.06c4.47 0.6 9.02 0.9 13.52 0.9 4.23 0 8.51-0.27 12.74-0.8l7.45-1.1c0.21 0.47 0.47 1.25 0.51 2.3 0.07 1.82 0 2.94-0.07 3.55l-8.16 1.05c-2.35 0.3-4.85 0.51-7.41 0.64-0.31 0.02-0.6 0.18-0.78 0.43-0.18 0.26-0.22 0.58-0.12 0.88 1.36 4.08 5.56 7 9.27 9.57 0.54 0.37 1.07 0.74 1.58 1.1 0.76 0.54 0.97 1.17 0.7 2.04-0.7 2.19-4.26 4.69-6.68 4.69-0.51 0-0.92-0.11-1.23-0.33-4.14-2.95-6.66-8.75-6.74-15.49 0-0.27 0.01-0.54 0-0.79 0-0.25 0.01-0.49 0.02-0.74 0-0.11-0.01-0.22-0.04-0.32-0.1-0.66-0.64-0.91-1.01-0.91-0.27 0-0.53 0.11-0.72 0.31s-0.29 0.46-0.28 0.74c0.01 0.3 0.02 0.61 0.03 0.89 0 0.27-0.01 0.54 0 0.79-0.11 6.83-2.6 12.63-6.66 15.53-0.31 0.22-0.72 0.33-1.23 0.33-2.42 0-5.98-2.5-6.68-4.69-0.28-0.87-0.06-1.5 0.7-2.04 0.51-0.36 1.04-0.73 1.58-1.1 3.7-2.57 7.9-5.48 9.27-9.56 0.1-0.3 0.05-0.62-0.12-0.88-0.18-0.26-0.46-0.42-0.78-0.43-2.89-0.14-5.71-0.39-8.37-0.75l-7.37-1.06c-0.13-0.68-0.29-1.86-0.23-3.17 0.05-1.15 0.17-2.04 0.27-2.64m-0.78-1.13s-0.37 1.35-0.5 3.7c-0.12 2.25 0.4 4.12 0.4 4.12l8.06 1.16c2.81 0.38 5.64 0.62 8.47 0.76-1.45 4.33-6.53 7.36-10.48 10.17-3.93 2.8 2.44 8.54 6.56 8.54 0.69 0 1.31-0.16 1.81-0.52 4.71-3.36 6.98-9.88 7.08-16.33v-0.79c0-0.32-0.01-0.63-0.03-0.95 0.04 0 0.01 0.18 0.05 0.18-0.01 0.26-0.02 0.51-0.02 0.77v0.79c0.07 6.48 2.4 12.93 7.15 16.33 0.5 0.36 1.13 0.52 1.81 0.52 4.12 0 10.49-5.74 6.56-8.54-3.95-2.81-9.03-5.84-10.48-10.18 2.5-0.13 5-0.34 7.49-0.65l8.61-1.1c0.03 0.1 0.07 0.16 0.11 0.16 0.22 0 0.5-1.44 0.38-4.68-0.08-2.15-0.96-3.35-0.96-3.35l-8.14 1.2c-4.18 0.53-8.39 0.79-12.59 0.79-4.47 0-8.94-0.3-13.39-0.89l-7.95-1.21z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 47.9,
      y: 47.71,
      width: 32.21,
      height: 6,
      display: "none",
      fill: "#FFFDE7"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 46.034,
        x2: 46.034,
        y1: 3.1184,
        y2: 23.033,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#3949AB",
        offset: 0.5612
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D3B9B",
        offset: 0.802
      }),
      _react2.default.createElement("stop", {
        stopColor: "#283593",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m41.41 19.62 4.37-15.62h4.95l-4.4 16.46c-0.33 1.6-1.81 2.66-3.21 2.31-1.27-0.32-2.02-1.7-1.71-3.15z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 81.825,
        x2: 81.825,
        y1: 4,
        y2: 22.342,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#3949AB",
        offset: 0.5612
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D3B9B",
        offset: 0.802
      }),
      _react2.default.createElement("stop", {
        stopColor: "#283593",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m86.31 19.62-4.09-15.62h-4.95l4.12 16.46c0.33 1.6 1.81 2.66 3.21 2.31 1.27-0.32 2.02-1.7 1.71-3.15z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49.43 5-4.06 15.2c0 0.02-0.01 0.04-0.01 0.05-0.19 0.9-0.91 1.58-1.68 1.58-0.1 0-0.21-0.01-0.31-0.04-0.73-0.19-1.16-1.04-0.99-1.94l4.16-14.85h2.89m1.3-1h-4.95l-4.37 15.62c-0.3 1.45 0.45 2.82 1.71 3.15 0.18 0.05 0.37 0.07 0.55 0.07 1.22 0 2.37-0.98 2.66-2.37l4.4-16.47z",
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
          "m81.45 5 3.89 14.85c0.18 0.91-0.25 1.76-0.99 1.95-0.1 0.03-0.2 0.04-0.31 0.04-0.77 0-1.49-0.68-1.69-1.62l-3.8-15.22h2.9m0.77-1h-4.95l4.12 16.46c0.29 1.39 1.44 2.37 2.66 2.37 0.18 0 0.37-0.02 0.55-0.07 1.27-0.32 2.02-1.7 1.71-3.15l-4.09-15.61z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64,
        x2: 64,
        y1: 26.82,
        y2: 123.24,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#3949AB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#283593",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.85 107.43-35.07-59.27 7.38-25.88c0.96-2.79-1.14-5.86-4.09-5.82-2.26 0.03-18.15 11.41-18.15 11.41s-15.93-11.47-18.3-11.41c-2.84 0.07-4.78 3.13-3.88 5.82l7.35 25.91-34.94 59.23c-0.68 0.87-0.55 2.12 0.3 2.83 6.17 5.14 27.26 13.75 49.67 13.75 22.4 0 43.31-8.6 49.44-13.74 0.85-0.72 0.97-1.96 0.29-2.83z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m58.87 114.79 5.07-68.9v0.18l5.02 68.73c0.41 5.19-1.85 9.03-4.85 9.21-2.96 0.16-5.37-4.08-5.24-9.22z",
        fill: "#283593"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m27.9 107.62 29.92-60.29-0.06 0.16-20.51 63.92c-1.52 4.84-5.02 7.46-7.87 6.49-2.8-0.96-3.48-5.69-1.48-10.28z",
        fill: "#283593"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m100.77 107.62-29.92-60.29 0.06 0.16 20.51 63.92c1.52 4.84 5.02 7.46 7.87 6.49 2.8-0.96 3.48-5.69 1.48-10.28z",
        fill: "#283593"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "78.78 48.16 49.09 48.16 46.71 39.7 81.2 39.7",
      fill: "#1A237E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m82.34 19.48c0.39 0.08 0.65 0.35 0.77 0.53 0.28 0.39 0.36 0.88 0.22 1.3-0.02 0.05-0.03 0.1-0.05 0.15l-7.38 25.87c-0.23 0.79-0.12 1.64 0.3 2.35l34.78 58.78c-6.09 4.53-25.38 12.54-46.86 12.54-21.56 0-40.96-8.01-47.1-12.54l34.65-58.74c0.42-0.71 0.53-1.55 0.3-2.34l-7.35-25.91c-0.01-0.05-0.03-0.09-0.04-0.14-0.14-0.43-0.06-0.92 0.22-1.33 0.11-0.16 0.33-0.41 0.66-0.5 2.17 0.81 10.2 6.13 16.71 10.81 0.52 0.38 1.14 0.56 1.75 0.56s1.22-0.19 1.75-0.56c6.55-4.68 14.58-10.01 16.67-10.83m-0.2-3.02h-0.05c-2.26 0.03-18.15 11.41-18.15 11.41s-15.86-11.41-18.3-11.41h-0.02c-2.84 0.07-4.78 3.13-3.88 5.82l7.35 25.91-34.94 59.23c-0.68 0.87-0.55 2.12 0.3 2.83 6.17 5.14 27.26 13.75 49.67 13.75 22.4 0 43.31-8.6 49.44-13.74 0.85-0.71 0.97-1.95 0.29-2.82l-35.07-59.28 7.38-25.88c0.96-2.77-1.11-5.82-4.02-5.82z",
        fill: "#eee"
      })
    )
  );
}

exports.default = Dress;
