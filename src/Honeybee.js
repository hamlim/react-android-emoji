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

function Honeybee(props) {
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
      d: "m42.29 13.44s15.4 0.97 13.89 15.56",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m86.06 13.44s-15.4 0.97-13.89 15.56",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 56.97,
        x2: 81.791,
        y1: 72.186,
        y2: 105.99,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0.001168
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD045",
        offset: 0.2117
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC428",
        offset: 0.5759
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.14 83.2c0 14.38-25.01 33.75-25.01 33.75s-25-19.37-25-33.75 11.2-26.04 25.01-26.04 25 11.66 25 26.04z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 52.6,
      rx: 21.27,
      ry: 13.21
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m89.25 83.18c0 14.45-25.11 33.9-25.11 33.9s-25.11-19.45-25.11-33.9 11.24-26.16 25.11-26.16 25.11 11.72 25.11 26.16z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement("rect", {
      x: 31.93,
      y: 70.03,
      width: 64.42,
      height: 9.7,
      clipPath: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 31.47,
      y: 86.73,
      width: 64.42,
      height: 9.7,
      clipPath: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 31.93,
      y: 103.91,
      width: 64.42,
      height: 13.57,
      clipPath: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "60.26 112.29 64.14 124.34 68.01 112.46"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.91 46.48c6.7 0 12.36 3.69 12.36 8.05 0 1.86-1.04 3.32-1.91 4.22-0.64 0.66-0.95 1.58-0.83 2.49s0.64 1.72 1.43 2.2c6.95 4.22 11.27 11.9 11.27 20.02 0 3.97-2.72 12.96-20.96 28.63-0.42 0.36-0.73 0.83-0.91 1.36l-0.4 1.22-0.37-1.16c-0.17-0.53-0.49-1.01-0.91-1.37-12.97-11.13-20.71-21.89-20.71-28.78 0-8.15 4.19-15.77 10.92-19.89 0.79-0.48 1.31-1.29 1.43-2.21 0.11-0.92-0.19-1.83-0.84-2.49-0.88-0.91-1.94-2.38-1.94-4.24 0.01-4.36 5.67-8.05 12.37-8.05m0-3.03c-8.5 0-15.39 4.96-15.39 11.08 0 2.37 1.04 4.56 2.8 6.36-7.4 4.52-12.37 12.89-12.37 22.47 0 11.15 15.01 25.28 21.77 31.08l3.24 10.06 3.3-10.11c6.79-5.83 22.01-19.81 22.01-30.93 0-9.61-5.3-18.09-12.73-22.61 1.74-1.79 2.77-3.97 2.77-6.33-0.01-6.11-6.9-11.07-15.4-11.07z",
      fill: "#616161"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64.015,
        x2: 64.015,
        y1: 20.661,
        y2: 50.326,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0.001168
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD045",
        offset: 0.2116
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC428",
        offset: 0.5756
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0.9996
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.01 50.64c-10.77 0-18.82-8.54-18.82-16.17 0-7.85 8.44-14.23 18.82-14.23s18.82 6.38 18.82 14.23c0 7.63-8.04 16.17-18.82 16.17z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.01 21.83c9.5 0 17.23 5.67 17.23 12.64 0 3.34-1.84 7-4.93 9.8-3.4 3.08-7.77 4.78-12.29 4.78-4.53 0-8.9-1.7-12.29-4.78-3.09-2.8-4.93-6.46-4.93-9.8-0.01-6.97 7.72-12.64 17.21-12.64m0-3.19c-11.27 0-20.41 7.08-20.41 15.82s9.14 17.76 20.41 17.76 20.41-9.02 20.41-17.76c0-8.73-9.13-15.82-20.41-15.82z",
      fill: "#F9A825"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 36.691,
        x2: 36.691,
        y1: 39.092,
        y2: 99.882,
        gradientTransform: "matrix(.9894 .1454 -.1454 .9894 9.4061 -4.4886)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.3045
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8294
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m21.25 90.4c-4 0-6.98-2.19-9.11-6.69-1.98-4.19-1.99-7.75-0.02-10.87 3.54-5.59 13.55-9.77 28.95-12.09 8.17-1.23 15.88-1.62 19.93-1.75-2.5 3.12-7.35 8.94-13.13 14.72-10.92 10.91-20.12 16.68-26.62 16.68 0 0 0.01 0 0 0z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.99 60.51c-8.97 10.82-25.87 28.48-36.73 28.48-2.17 0-5.34-0.61-7.84-5.89-1.76-3.72-1.79-6.83-0.1-9.51 5.91-9.34 30.45-12.41 44.67-13.08m5.96-2.98s-65.76-0.01-53.08 26.77c2.53 5.36 6.18 7.5 10.39 7.5 16.83 0.01 42.69-34.27 42.69-34.27z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 31.83,
        x2: 31.83,
        y1: 37.724,
        y2: 97.041,
        gradientTransform: "matrix(.9759 .218 -.218 .9759 13.407 -6.2638)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.3045
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8294
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m24.75 62.78c-8.91 0-14.89-1.76-17.78-5.24-1.92-2.31-2.49-5.37-1.75-9.36 1.25-6.71 5.2-9.97 12.08-9.97 14.23 0 36.03 13.89 43.26 18.77-6.42 1.77-22.51 5.8-35.81 5.8z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m17.29 39.62c12.44 0 31.05 11.06 39.87 16.81-7.52 1.94-21.02 4.95-32.41 4.95-8.35 0-14.12-1.64-16.7-4.74-1.64-1.97-2.11-4.65-1.45-8.2 1.14-6.1 4.43-8.82 10.69-8.82m0-2.82c-6.75 0-11.94 2.96-13.46 11.13-2.35 12.63 8.11 16.27 20.92 16.27 17.36 0 39.05-6.68 39.05-6.68s-28.67-20.72-46.51-20.72z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 76.865,
        x2: 76.865,
        y1: 38.93,
        y2: 99.716,
        gradientTransform: "matrix(-.9894 .1454 .1454 .9894 158.7 -4.4886)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.3045
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8294
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m106.24 90.4c-6.5 0-15.72-5.78-26.66-16.72-5.76-5.76-10.59-11.57-13.09-14.68 9.87 0.31 41.53 2.22 48.88 13.84 1.97 3.12 1.97 6.67-0.02 10.87-2.12 4.5-5.1 6.69-9.11 6.69z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.53 60.53c4.27 0.21 10.35 0.66 16.71 1.61 14.75 2.22 24.67 6.29 27.94 11.45 1.69 2.68 1.66 5.79-0.1 9.51-2.5 5.28-5.67 5.89-7.84 5.89-10.85 0-27.74-17.63-36.71-28.46m-5.98-3s25.86 34.27 42.69 34.27c4.21 0 7.85-2.14 10.39-7.5 12.67-26.76-53.02-26.77-53.08-26.77z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 71.458,
        x2: 71.458,
        y1: 37.269,
        y2: 96.586,
        gradientTransform: "matrix(-.9759 .218 .218 .9759 154.7 -6.2638)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.3045
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8294
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102.75 62.78c-13.31 0-29.39-4.03-35.8-5.8 7.23-4.89 29.03-18.78 43.26-18.78 6.88 0 10.83 3.26 12.08 9.97 0.74 3.99 0.17 7.05-1.75 9.36-2.9 3.49-8.88 5.25-17.79 5.25z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.21 36.8v2.82c6.26 0 9.55 2.72 10.69 8.82 0.66 3.55 0.19 6.23-1.45 8.2-2.58 3.1-8.35 4.74-16.7 4.74-11.39 0-24.89-3.01-32.41-4.95 8.82-5.74 27.43-16.81 39.87-16.81v-2.82m0 0c-17.84 0-46.5 20.72-46.5 20.72s21.68 6.68 39.05 6.68c12.81 0 23.27-3.64 20.92-16.27-1.53-8.17-6.73-11.13-13.47-11.13z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 54.15,
      cy: 33.64,
      r: 6.18,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 54.15,
      cy: 33.64,
      r: 2.82
    }),
    _react2.default.createElement("circle", {
      cx: 74.04,
      cy: 33.64,
      r: 6.18,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 74.04,
      cy: 33.64,
      r: 2.82
    }),
    _react2.default.createElement("circle", {
      cx: 40.24,
      cy: 12.82,
      r: 2.8,
      fill: "#E6E7E8",
      stroke: "#231F20",
      strokeLinecap: "round",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 87.26,
      cy: 12.82,
      r: 2.8,
      fill: "#E6E7E8",
      stroke: "#231F20",
      strokeLinecap: "round",
      strokeMiterlimit: 10
    })
  );
}

exports.default = Honeybee;
