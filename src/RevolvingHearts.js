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

function RevolvingHearts(props) {
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
        id: "h",
        x1: 1.9723,
        x2: 96.962,
        y1: 44.071,
        y2: 44.071,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF9A9A",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.53 21.94c-21.34-5.6-42.65-6.09-59.99-1.38-17.61 4.78-29.17 14.38-32.54 27.03-1.2 4.51-1.32 9.22-0.35 14.01l1.86 9.19 1.1-9.31c0.13-1.13 0.37-2.33 0.73-3.66 3.01-11.29 13.49-20.02 29.53-24.6 16.25-4.64 36.35-4.5 56.6 0.39l1.42 0.34 3.1-11.63-1.46-0.38z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 39.825,
        x2: 134.81,
        y1: 78.092,
        y2: 78.092,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.087
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF9A9A",
        offset: 0.5252
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.35 60.57-1.86-9.19-1.1 9.31c-0.13 1.13-0.37 2.33-0.73 3.66-3.01 11.29-13.49 20.02-29.53 24.6-16.25 4.64-36.35 4.5-56.6-0.39l-1.42-0.34-3.1 11.63 1.46 0.38c11.64 3.05 23.27 4.59 34.25 4.59 9.15 0 17.85-1.07 25.73-3.2 17.62-4.78 29.18-14.38 32.55-27.03 1.2-4.52 1.32-9.24 0.35-14.02z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m97.53 21.94c-21.34-5.6-42.65-6.09-59.99-1.38-17.61 4.78-29.17 14.38-32.54 27.03-1.2 4.51-1.32 9.22-0.35 14.01l1.86 9.19 1.1-9.31c0.13-1.13 0.37-2.33 0.73-3.66 3.01-11.29 13.49-20.02 29.53-24.6 16.25-4.64 36.35-4.5 56.6 0.39l1.42 0.34 3.1-11.63-1.46-0.38z",
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m123.35 60.57-1.86-9.19-1.1 9.31c-0.13 1.13-0.37 2.33-0.73 3.66-3.01 11.29-13.49 20.02-29.53 24.6-16.25 4.64-36.35 4.5-56.6-0.39l-1.42-0.34-3.1 11.63 1.46 0.38c11.64 3.05 23.27 4.59 34.25 4.59 9.15 0 17.85-1.07 25.73-3.2 17.62-4.78 29.18-14.38 32.55-27.03 1.2-4.52 1.32-9.24 0.35-14.02z",
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 59.403,
        cy: -24.262,
        r: 0.0206,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d: "m59.39-24.25 0.04-0.02c-0.03 0.01-0.06 0.02-0.06 0.02h0.02z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 59.288,
        cy: -24.241,
        r: 0.0477,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.36-24.24s0.01 0 0 0c-0.04 0.01-0.16 0.03-0.16 0.02 0.01 0.01 0.16-0.02 0.16-0.02z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 59.469,
        cy: -24.295,
        r: 0.0256,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.5-24.3c-0.01 0.01-0.04 0.02-0.07 0.04 0.04-0.02 0.08-0.03 0.07-0.04z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: -184.78,
        cy: -25.152,
        r: 11.631,
        fx: -194.7,
        fy: -19.932,
        gradientTransform: "matrix(1.0262 .3345 -.6593 1.9943 -36.367 50.117)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-196.58-41.93c-21.26-10.4-21.1-28.81-21.1-28.81s2.43 13.34 28.58 16.24c11.32 1.26 6.65 19.48-7.48 12.57z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: -161.99,
        cy: -119.23,
        r: 32.471,
        gradientTransform: "matrix(.983 -.2098 .2113 .9761 11.706 10.515)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-156.22-83.02c-10.76-1.49-16.6 10.78-16.6 10.78s-9.95-8.4-19.42-3.11c-14.83 8.28-9.35 27.56 0.65 35.94 9.56 8.01 27.57 14.37 28.79 15.14l0.01 0.06c0 0.01 0.19-0.02 0.19-0.02s0.09-0.03 0.11-0.05c0.02 0.01-0.14 0.06-0.14 0.06s-0.16 0.03-0.16 0.02l-0.01-0.06c1.82-1.41 14.72-15.16 20.12-26.37 5.64-11.74 3.14-30.08-13.54-32.39z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 66.01,
        cy: 13.26,
        r: 8.92,
        gradientTransform:
          "matrix(-.2672 1.0391 -2.0483 -.5193 -147.82 -177.41)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-196.17-121.13c5.63-13.59 20.86-19.59 20.86-19.59s-11.94 7.39-12.66 23.69c-0.31 7.05-11.94 4.93-8.2-4.1z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 157.52,
        cy: -153.8,
        r: 12.242,
        gradientTransform: "matrix(-1.0274 -.3307 .652 -1.9967 144.82 -371.08)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-127.1-136.93c18.25 8.85 25.2 30.08 25.2 30.08s-9.16-16.88-31.58-19.28c-9.69-1.05-5.75-16.68 6.38-10.8z",
      fill: "url(#r)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: -177.14,
        cy: -98.257,
        r: 25.486,
        gradientTransform: "matrix(1.0031 .0685 -.069 .996 -21.724 -5.351)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-177.75-120.19c-7.79-3.45-14.88 4.55-14.88 4.55s-5.67-8.48-13.97-6.53c-13 3.05-13.08 18.77-7.37 27.24 5.46 8.11 17.65 16.79 18.4 17.63v0.05c0 0.01 0.15 0.02 0.15 0.02s0.08-0.01 0.09-0.02c0.02 0.01-0.12 0.01-0.12 0.01s-0.12-0.01-0.12-0.02v-0.05c1.68-0.67 14.42-8.26 20.94-15.55 6.83-7.62 8.95-21.99-3.12-27.33z",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "p",
        cx: -131.99,
        cy: -98.315,
        r: 22.832,
        gradientTransform: "matrix(.984 .2054 -.2069 .977 -35.506 -13.228)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-131.22-138.87c-6.48-4.02-13.77 2.21-13.77 2.21s-3.97-8.22-11.58-7.51c-11.91 1.11-13.95 15.05-9.94 23.27 3.83 7.86 13.56 17.06 14.13 17.9l-0.01 0.04c0 0.01 0.13 0.04 0.13 0.04s0.07 0 0.09 0c0.01 0.01-0.11 0-0.11 0s-0.11-0.03-0.11-0.03l0.01-0.04c1.57-0.39 13.82-5.56 20.52-11.22 7.01-5.95 10.68-18.43 0.64-24.66z",
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 37.809,
        cy: -237.13,
        r: 11.853,
        gradientTransform: "matrix(.1235 -1.0654 2.1002 .24 368.94 44.966)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-107.72-58.4c-4.19 17.33-21.84 26.93-21.84 26.93s13.12-10.82 11.31-30.53c-0.78-8.52 15.82-18.26 10.53 3.6z",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "n",
        cx: 331.22,
        cy: -148.84,
        r: 21.213,
        gradientTransform: "matrix(-.984 .2054 .2069 .977 237.35 -13.228)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-132.2-92.89c6.02-3.73 12.79 2.05 12.79 2.05s3.69-7.64 10.76-6.98c11.07 1.03 12.96 13.98 9.23 21.62-3.56 7.31-12.6 15.85-13.13 16.63l0.01 0.04c0 0.01-0.12 0.03-0.12 0.03s-0.06 0-0.08 0c-0.01 0.01 0.1 0 0.1 0s0.1-0.02 0.1-0.03l-0.01-0.04c-1.46-0.36-12.84-5.16-19.06-10.43-6.5-5.5-9.92-17.11-0.59-22.89z",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 59.403,
        cy: 123.74,
        r: 0.0206,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d: "m59.39 123.75 0.04-0.02c-0.03 0.01-0.06 0.02-0.06 0.02h0.02z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 59.288,
        cy: 123.76,
        r: 0.0477,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.36 123.76s0.01 0 0 0c-0.04 0.01-0.16 0.03-0.16 0.02 0.01 0.01 0.16-0.02 0.16-0.02z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 59.469,
        cy: 123.7,
        r: 0.0256,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.5 123.7c-0.01 0.01-0.04 0.02-0.07 0.04 0.04-0.02 0.08-0.03 0.07-0.04z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 42.371,
        cy: 57.449,
        r: 49.529,
        gradientTransform: "matrix(.9985 0 0 .9337 .0985 -5.5664)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m62.1 53c-14.15 0-19.35 16.92-19.35 16.92s-5.13-16.92-19.38-16.92c-10.71 0-22.92 8.49-18.41 27.78s37.66 43.22 37.66 43.22 0.17-0.07 0.17-0.17c0 0.11 0.11 0.16 0.11 0.16s33.08-23.92 37.59-43.21-7.68-27.78-18.39-27.78z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.1 56c5.12 0 9.94 2.22 12.89 5.93 3.45 4.35 4.35 10.63 2.58 18.17-3.65 15.63-28.26 35.25-34.82 40.26-6.6-5.03-31.21-24.63-34.86-40.26-1.76-7.53-0.87-13.81 2.59-18.16 2.95-3.72 7.77-5.94 12.9-5.94 4.85 0 9.06 2.39 12.51 7.09 2.77 3.78 3.99 7.66 4 7.7l2.83 9.33 2.9-9.31c0.01-0.04 1.24-3.93 4.02-7.71 3.46-4.71 7.65-7.1 12.46-7.1m0-3c-14.15 0-19.35 16.92-19.35 16.92s-5.13-16.92-19.38-16.92c-10.71 0-22.92 8.49-18.41 27.78s37.66 43.22 37.66 43.22 0.17-0.07 0.17-0.17c0 0.11 0.11 0.16 0.11 0.16s33.08-23.92 37.59-43.21-7.68-27.78-18.39-27.78z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 92.144,
        cy: 5.9357,
        r: 40.46,
        gradientTransform: "matrix(.9985 0 0 .9337 .0985 -5.5664)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M108.19,4C96.63,4,92.38,17.82,92.38,17.82S88.19,4,76.55,4 c-8.75,0-18.72,6.93-15.04,22.69C65.2,42.45,92.27,62,92.27,62s0.14-0.05,0.14-0.14c0,0.09,0.09,0.13,0.09,0.13 s27.03-19.54,30.71-35.3C126.9,10.93,116.94,4,108.19,4z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m108.19 7c4.02 0 7.79 1.73 10.1 4.63 2.71 3.42 3.41 8.39 2.01 14.37-1.37 5.86-6.84 13.47-15.83 22.02-4.93 4.68-9.68 8.47-12.09 10.31-8.21-6.24-25.31-21.12-27.93-32.33-1.4-5.98-0.7-10.95 2.01-14.37 2.29-2.9 6.07-4.63 10.09-4.63 9.24 0 12.93 11.58 12.96 11.69l2.85 9.4 2.89-9.39c0.04-0.12 3.7-11.7 12.94-11.7m0-3c-11.56 0-15.81 13.82-15.81 13.82s-4.19-13.82-15.83-13.82c-8.75 0-18.72 6.93-15.04 22.69 3.69 15.76 30.76 35.31 30.76 35.31s0.14-0.05 0.14-0.14c0 0.09 0.09 0.13 0.09 0.13s27.03-19.54 30.71-35.3c3.69-15.76-6.27-22.69-15.02-22.69z",
        fill: "#424242"
      })
    )
  );
}

exports.default = RevolvingHearts;
