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

function AlarmClock(props) {
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
        "m104.57 96.19h-80.61l-2.55 23.04c-0.73 2.55 1.19 5.09 3.85 5.09h78.02c2.66 0 4.57-2.54 3.85-5.09l-2.56-23.04z",
      fill: "#78909C"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m101.88 99.19 2.26 20.37c0.02 0.17 0.05 0.33 0.1 0.49 0.12 0.42-0.05 0.73-0.16 0.88s-0.36 0.4-0.8 0.4h-78.02c-0.43 0-0.69-0.25-0.8-0.4s-0.28-0.46-0.16-0.88c0.05-0.16 0.08-0.32 0.1-0.49l2.26-20.37h75.22m2.69-3h-80.61l-2.55 23.04c-0.73 2.55 1.19 5.09 3.85 5.09h78.02c2.66 0 4.57-2.54 3.85-5.09l-2.56-23.04z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(8.4609e-11 1 -1 8.4609e-11 75.55 -52.112)",
      x: 57.2,
      y: 7.9,
      width: 13.26,
      height: 7.65,
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m65.65 7.09v9.26h-3.65v-9.26h3.65m2-2h-7.65v13.26h7.65v-13.26z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.07 12.24h-16.48c-2.06 0-3.74-1.67-3.74-3.74v-0.51c0-2.06 1.67-3.74 3.74-3.74h16.47c2.06 0 3.74 1.67 3.74 3.74v0.51c0.01 2.06-1.67 3.74-3.73 3.74z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m72.07 6.25c0.96 0 1.74 0.78 1.74 1.74v0.51c0 0.96-0.78 1.74-1.74 1.74h-16.48c-0.96 0-1.74-0.78-1.74-1.74v-0.51c0-0.96 0.78-1.74 1.74-1.74h16.48m0-2h-16.48c-2.06 0-3.74 1.67-3.74 3.74v0.51c0 2.06 1.67 3.74 3.74 3.74h16.47c2.06 0 3.74-1.67 3.74-3.74v-0.51c0.01-2.06-1.67-3.74-3.73-3.74z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(-.7071 -.7071 .7071 -.7071 147.04 126.64)",
      x: 95.41,
      y: 21.07,
      width: 8.68,
      height: 23.59,
      fill: "#757575"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 -.7071 .7071 .7071 -15.204 29.023)",
      x: 23.09,
      y: 21.07,
      width: 8.68,
      height: 23.59,
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 63.83,
      cy: 68.95,
      r: 52.39,
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.05,
        x2: 64.05,
        y1: 38.908,
        y2: 116.69,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0.3212
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64.05,
      cy: 68.95,
      r: 40.41,
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.27 39.18h-0.38c-1.55 0-2.8 1.25-2.8 2.8v24.33c0 1.55 1.25 2.8 2.8 2.8h0.38c1.55 0 2.8-1.25 2.8-2.8v-24.33c0-1.55-1.25-2.8-2.8-2.8z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.01 86.67 0.32 0.21c1.29 0.85 3.03 0.49 3.88-0.81l8.91-13.57c0.85-1.29 0.49-3.03-0.81-3.88l-0.32-0.21c-1.29-0.85-3.03-0.49-3.88 0.81l-8.91 13.57c-0.85 1.3-0.49 3.03 0.81 3.88z",
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 63.83,
      cy: 68.95,
      r: 5.24,
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 63.83,
      cy: 68.95,
      r: 2.25,
      fill: "#CFD8DC"
    }),
    _react2.default.createElement("circle", {
      cx: 28.77,
      cy: 69.05,
      r: 2.99,
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 63.75,
      cy: 34.07,
      r: 2.99,
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 63.75,
      cy: 104.02,
      r: 2.99,
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 98.73,
      cy: 69.05,
      r: 2.99,
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.05 30.54c21.18 0 38.41 17.23 38.41 38.41s-17.23 38.41-38.41 38.41-38.41-17.23-38.41-38.41 17.23-38.41 38.41-38.41m0-2c-22.32 0-40.41 18.09-40.41 40.41s18.09 40.41 40.41 40.41 40.41-18.09 40.41-40.41-18.09-40.41-40.41-40.41z",
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
          "m63.83 19.56c27.23 0 49.39 22.16 49.39 49.39s-22.16 49.39-49.39 49.39-49.39-22.16-49.39-49.39 22.16-49.39 49.39-49.39m0-3c-28.93 0-52.39 23.46-52.39 52.39s23.46 52.39 52.39 52.39 52.39-23.46 52.39-52.39-23.46-52.39-52.39-52.39z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 14.458,
        x2: 26.385,
        y1: 18.883,
        y2: 30.81,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0.2367
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.7995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.54 14.74c-7.79-7.79-20.51-7.87-28.3-0.08s-7.68 20.55 0.11 28.34l0.16 0.16 28.22-28.22s-0.18-0.19-0.19-0.2z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 113.11,
        x2: 100.52,
        y1: 19.311,
        y2: 31.907,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0.2367
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.7995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.46 14.74c7.79-7.79 20.51-7.87 28.3-0.08s7.68 20.55-0.11 28.34l-0.16 0.16-28.22-28.22s0.18-0.19 0.19-0.2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.69 11.85c4.53 0 8.77 1.75 11.95 4.93 5.95 5.95 6.51 15.31 1.69 21.98l-23.67-23.67c2.89-2.1 6.37-3.24 10.03-3.24m0-3c-5.15 0-10.31 1.97-14.23 5.88l-0.2 0.2 28.22 28.22s0.15-0.14 0.16-0.16c7.79-7.79 7.91-20.55 0.11-28.34-3.86-3.87-8.96-5.8-14.06-5.8z",
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
          "m24.31 11.85c3.66 0 7.14 1.14 10.03 3.23l-23.67 23.68c-4.82-6.68-4.26-16.03 1.69-21.98 3.17-3.18 7.42-4.93 11.95-4.93m0-3c-5.1 0-10.2 1.93-14.07 5.81-7.8 7.79-7.68 20.55 0.11 28.34l0.16 0.16 28.22-28.22s-0.18-0.19-0.2-0.2c-3.91-3.92-9.07-5.89-14.22-5.89z",
        fill: "#424242"
      })
    )
  );
}

exports.default = AlarmClock;
