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

function Rabbit(props) {
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
        id: "f",
        x1: 20.408,
        x2: 46.972,
        y1: 4.9611,
        y2: 61.042,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.2943
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2F2F2",
        offset: 0.4111
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CFCFCF",
        offset: 0.6277
      }),
      _react2.default.createElement("stop", {
        stopColor: "#989898",
        offset: 0.9184
      }),
      _react2.default.createElement("stop", {
        stopColor: "#878787",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m53.02 71.91c-4.55 0-20.99-11.22-29.94-28.91-10.2-20.19-11.91-35.85-4.33-39.9 0.7-0.38 1.51-0.57 2.39-0.57 7.29 0 18.61 11.93 26.93 28.37 10.18 20.14 7.52 39.53 5.26 40.98-0.02 0-0.11 0.03-0.31 0.03z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m21.14 4.07c5.64 0 16.51 9.65 25.56 27.53 3.99 7.89 6.51 17.03 7.09 25.74 0.49 7.31-0.56 11.61-1.22 12.99-4.25-0.77-19.45-10.91-28.11-28.02-9.65-19.08-11.65-34.29-4.99-37.85 0.49-0.26 1.03-0.39 1.67-0.39m0-3.07c-1.12 0-2.17 0.24-3.11 0.75-9.08 4.85-6.29 22.22 3.69 41.95 9.18 18.15 25.96 29.75 31.31 29.75 0.46 0 0.84-0.09 1.12-0.27 3.68-2.34 5.26-23.24-4.71-42.97-8.74-17.26-20.44-29.21-28.3-29.21z",
      fill: "#B0B0B0"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 28.27,
        x2: 41.341,
        y1: 21.523,
        y2: 49.118,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF87A8",
        offset: 0.1628
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F87C9F",
        offset: 0.3056
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D94874",
        offset: 0.998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m42.29 34.09c4.72 9.33 3.97 19.22 2.23 20.33-1.66 1.06-10.63-4.62-15.35-13.95s-6.04-17.55-1.75-19.85c3.6-1.92 10.15 4.13 14.87 13.47z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 67.822,
        x2: 94.386,
        y1: 4.9609,
        y2: 61.041,
        gradientTransform: "matrix(-1 0 0 1 175.41 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.2943
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2F2F2",
        offset: 0.4111
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CFCFCF",
        offset: 0.6277
      }),
      _react2.default.createElement("stop", {
        stopColor: "#989898",
        offset: 0.9184
      }),
      _react2.default.createElement("stop", {
        stopColor: "#878787",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.98 71.91c-0.23 0-0.32-0.04-0.32-0.04-2.24-1.43-4.91-20.82 5.28-40.97 8.31-16.44 19.63-28.37 26.92-28.37 0.88 0 1.68 0.19 2.39 0.57 7.57 4.05 5.87 19.71-4.34 39.9-8.94 17.69-25.38 28.91-29.93 28.91z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.86 4.07c0.63 0 1.18 0.13 1.66 0.39 6.67 3.57 4.66 18.78-4.98 37.86-8.64 17.08-23.81 27.22-28.1 28.01-0.66-1.39-1.71-5.68-1.22-12.99 0.58-8.71 3.1-17.85 7.09-25.74 9.04-17.88 19.91-27.53 25.55-27.53m0-3.07c-7.86 0-19.56 11.95-28.29 29.21-9.97 19.72-8.39 40.63-4.71 42.97 0.28 0.18 0.66 0.27 1.12 0.27 5.35 0 22.13-11.6 31.31-29.75 9.97-19.72 12.76-37.09 3.69-41.95-0.95-0.51-1.99-0.75-3.12-0.75z",
      fill: "#B0B0B0"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 75.684,
        x2: 88.755,
        y1: 21.523,
        y2: 49.118,
        gradientTransform: "matrix(-1 0 0 1 175.41 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF87A8",
        offset: 0.1628
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F87C9F",
        offset: 0.3056
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D94874",
        offset: 0.998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.71 34.09c-4.72 9.33-3.97 19.22-2.23 20.33 1.66 1.06 10.63-4.62 15.35-13.95s6.04-17.55 1.75-19.85c-3.6-1.92-10.15 4.13-14.87 13.47z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.998,
        x2: 63.998,
        y1: 122.1,
        y2: 47.503,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D4D4D4",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3E3E3",
        offset: 0.2916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.7057
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 122.1c-35.52 0-42.98-17.72-42.98-32.58 0-25.52 16.87-42.02 42.98-42.02s42.98 16.49 42.98 42.02c0 28.35-26.93 32.58-42.98 32.58z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 48.88c13.07 0 23.86 4.15 31.22 12.01 6.7 7.15 10.38 17.32 10.38 28.64 0 10.35-3.76 18.28-11.19 23.55-7.05 5.01-17.56 7.65-30.41 7.65-18.98 0-41.61-5.41-41.61-31.2 0-11.31 3.69-21.48 10.39-28.64 7.36-7.86 18.15-12.01 31.22-12.01m0-2.75c-29.46 0-44.36 19.89-44.36 43.4s17.65 33.95 44.36 33.95c26.21 0 44.35-10.44 44.35-33.95s-14.89-43.4-44.35-43.4z",
      fill: "#B0B0B0"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 84.36,
        cy: 78.64,
        rx: 6.21,
        ry: 6.7
      }),
      _react2.default.createElement("ellipse", {
        cx: 43.64,
        cy: 78.45,
        rx: 6.21,
        ry: 6.7
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80.81 101.43c-0.31 1.62-1.1 3.15-2.35 4.37-3.34 3.25-8.75 3.12-12.08-0.3-1.34-1.37-2.16-5.59-2.42-7.34-0.21 1.74-0.93 5.94-2.23 7.28-3.25 3.34-8.66 3.35-12.08 0.01-1.29-1.26-2.11-2.81-2.46-4.43",
      fill: "none",
      stroke: "#B3B3B3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.999,
        x2: 63.999,
        y1: 89.346,
        y2: 99.888,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF87A8",
        offset: 0.1628
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6492",
        offset: 0.6897
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5589",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m57.74 89c-2.08 0-3.48 1.93-2.74 3.87 1.56 4.13 4.34 7.12 8.8 7.12 0.07 0 0.13-0.05 0.19-0.05 0.07 0 0.13-0.01 0.19-0.01 4.47 0 7.25-2.92 8.8-7.05 0.73-1.94-0.67-3.88-2.74-3.88h-12.5z",
      fill: "url(#a)"
    })
  );
}

exports.default = Rabbit;
