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

function Candy(props) {
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
        id: "j",
        x1: 1.6273,
        x2: 48.549,
        y1: 63.637,
        y2: 63.637,
        gradientTransform: "matrix(.7071 -.7071 .7071 .7071 -26.51 64)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#44B3E6",
        offset: 0.3474
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2C98D4",
        offset: 0.6576
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m43.21 118.87 5.33-33.31c0.65-4.09-2.88-7.63-6.98-6.98l-32.43 5.18c-6.19 0.99-7.03 9.56-1.14 11.73 2.59 0.96 4.22 3.54 3.96 6.29l-0.6 6.25c-0.36 3.78 2.78 6.96 6.56 6.65l6.6-0.55c2.68-0.22 5.19 1.35 6.17 3.85l0.83 2.13c2.27 5.8 10.72 4.89 11.7-1.24z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "i",
        d:
          "m43.21 118.87 5.33-33.31c0.65-4.09-2.88-7.63-6.98-6.98l-32.43 5.18c-6.19 0.99-7.03 9.56-1.14 11.73 2.59 0.96 4.22 3.54 3.96 6.29l-0.6 6.25c-0.36 3.78 2.78 6.96 6.56 6.65l6.6-0.55c2.68-0.22 5.19 1.35 6.17 3.85l0.83 2.13c2.27 5.8 10.72 4.89 11.7-1.24z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "h"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#i"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 9.5712,
        x2: 38.053,
        y1: 63.419,
        y2: 63.419,
        gradientTransform: "matrix(.7071 -.7071 .7071 .7071 -26.51 64)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2C98D4",
        offset: 0.4177
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0277BD",
        offset: 0.8503
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m49.82 80.56-3.1-3.1-26.56 14.33c-1.1 0.59-0.34 2.26 0.83 1.81l15.66-5.98-13.94 15.67c-0.83 0.93 0.46 2.24 1.4 1.42l15.86-13.76-5.25 14.09c-0.44 1.17 1.24 1.92 1.82 0.81l13.28-25.29z",
      clipPath: "url(#h)",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 82.294,
        x2: 129.22,
        y1: 63.637,
        y2: 63.637,
        gradientTransform: "matrix(-.7071 .7071 .7071 .7071 121.04 -83.55)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#44B3E6",
        offset: 0.364
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2C98D4",
        offset: 0.6128
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.87 43.21-33.31 5.33c-4.09 0.65-7.63-2.88-6.98-6.98l5.18-32.43c0.99-6.19 9.56-7.03 11.73-1.14 0.96 2.59 3.54 4.22 6.29 3.96l6.25-0.6c3.78-0.36 6.96 2.78 6.65 6.56l-0.55 6.6c-0.22 2.68 1.35 5.19 3.85 6.17l2.13 0.83c5.8 2.27 4.89 10.72-1.24 11.7z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m118.87 43.21-33.31 5.33c-4.09 0.65-7.63-2.88-6.98-6.98l5.18-32.43c0.99-6.19 9.56-7.03 11.73-1.14 0.96 2.59 3.54 4.22 6.29 3.96l6.25-0.6c3.78-0.36 6.96 2.78 6.65 6.56l-0.55 6.6c-0.22 2.68 1.35 5.19 3.85 6.17l2.13 0.83c5.8 2.27 4.89 10.72-1.24 11.7z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 90.238,
        x2: 118.72,
        y1: 63.419,
        y2: 63.419,
        gradientTransform: "matrix(-.7071 .7071 .7071 .7071 121.04 -83.55)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2C98D4",
        offset: 0.4177
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0277BD",
        offset: 0.8503
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80.56 49.82-3.1-3.1 14.33-26.56c0.59-1.1 2.26-0.34 1.81 0.83l-5.98 15.66 15.67-13.94c0.93-0.83 2.24 0.46 1.42 1.4l-13.76 15.87 14.09-5.25c1.17-0.44 1.92 1.24 0.81 1.82l-25.29 13.27z",
      clipPath: "url(#d)",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 54.418,
        cy: 54.163,
        r: 36.485,
        gradientTransform: "matrix(.6824 -.6824 .6824 .6824 -23.405 63.943)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#57A0D7",
        offset: 0.4042
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3D82C4",
        offset: 0.8643
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m87.79 37.99s20.78 29.01 0 49.79-49.79 0-49.79 0-23.49-26.3 0-49.79 49.79 0 49.79 0z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "o",
        d:
          "m87.79 37.99s20.78 29.01 0 49.79-49.79 0-49.79 0-23.49-26.3 0-49.79 49.79 0 49.79 0z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#o"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "n",
        d:
          "m87.79 37.99s20.78 29.01 0 49.79-49.79 0-49.79 0-23.49-26.3 0-49.79 49.79 0 49.79 0z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#n"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "m",
          cx: 54.012,
          cy: 72.869,
          r: 30.344,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFE081",
          offset: 0.211
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFCB28",
          offset: 0.8584
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m84.36 103.21c-32.9 0-60.69-27.79-60.69-60.69h10.53c0 27.19 22.97 50.16 50.16 50.16v10.53z",
        fill: "url(#m)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "l",
          cx: 69.086,
          cy: 57.795,
          r: 30.344,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFE081",
          offset: 0.211
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFCB28",
          offset: 0.8584
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m99.43 88.14c-25.52 0-60.69-35.17-60.69-60.69h10.53c0 19.69 30.47 50.16 50.16 50.16v10.53z",
        fill: "url(#l)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "k",
          cx: 84.3,
          cy: 42.581,
          r: 24.184,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFE081",
          offset: 0.211
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFCB28",
          offset: 0.8584
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m108.48 66.76c-19.44 0-48.37-28.93-48.37-48.37h10.53c0 13.44 24.4 37.84 37.84 37.84v10.53z",
        fill: "url(#k)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m89.81 7c0.64 0 2.19 0.2 2.87 2.02 1.31 3.56 4.74 5.95 8.53 5.95 0.29 0 0.58-0.01 0.87-0.04l6.25-0.6c0.1-0.01 0.2-0.01 0.3-0.01 0.87 0 1.67 0.36 2.26 1s0.88 1.47 0.8 2.35l-0.55 6.61c-0.33 3.97 2.04 7.76 5.75 9.21l2.13 0.83c2.04 0.8 2.01 2.66 1.95 3.21s-0.42 2.38-2.58 2.72l-25.98 4.15c-0.91 0.15-1.71 0.71-2.16 1.52s-0.49 1.78-0.12 2.63c8.14 18.84 2.07 30.58-4.47 37.11-5.55 5.55-12.28 8.36-20.02 8.36-5.36 0-11.11-1.31-17.09-3.89-0.38-0.16-0.79-0.25-1.19-0.25-0.5 0-1 0.12-1.44 0.37-0.81 0.45-1.37 1.24-1.52 2.16l-4.15 25.99c-0.31 1.92-1.85 2.6-3.09 2.6-0.62 0-2.15-0.19-2.84-1.97l-0.83-2.13c-1.37-3.51-4.69-5.78-8.46-5.78-0.25 0-0.5 0.01-0.75 0.03l-6.61 0.55c-0.09 0.01-0.18 0.01-0.27 0.01-0.87 0-1.68-0.36-2.28-1.01-0.59-0.65-0.87-1.49-0.79-2.37l0.6-6.25c0.39-4.1-2.04-7.97-5.91-9.39-2.08-0.77-2.06-2.64-2.01-3.2s0.4-2.4 2.59-2.75l23.59-3.77c0.96-0.15 1.79-0.77 2.22-1.64s0.41-1.9-0.06-2.76c-5.42-9.95-8.99-24.69 4.76-38.45 6.35-6.35 13.49-9.56 21.23-9.56 6.95 0 13.2 2.61 17.22 4.8 0.45 0.24 0.94 0.37 1.43 0.37 0.45 0 0.91-0.1 1.32-0.31 0.87-0.43 1.49-1.26 1.64-2.22l3.78-23.6c0.3-1.92 1.85-2.6 3.08-2.6m0-3c-2.76 0-5.51 1.78-6.05 5.13l-3.77 23.59c-4.76-2.59-11.33-5.17-18.65-5.17-7.38 0-15.52 2.61-23.35 10.44-15.61 15.61-10.48 32.45-5.28 42l-23.58 3.77c-6.19 0.99-7.03 9.56-1.14 11.73 2.59 0.96 4.22 3.54 3.96 6.29l-0.6 6.25c-0.34 3.6 2.5 6.67 6.05 6.67 0.17 0 0.34-0.01 0.51-0.02l6.6-0.55c0.17-0.01 0.34-0.02 0.5-0.02 2.49 0 4.75 1.52 5.67 3.87l0.83 2.13c1.03 2.63 3.34 3.88 5.64 3.88 2.76 0 5.51-1.79 6.05-5.13l4.15-25.99c4.95 2.14 11.41 4.14 18.28 4.14 7.38 0 15.22-2.31 22.15-9.24 13.38-13.38 9.54-30.16 5.1-40.42l25.98-4.15c6.13-0.98 7.04-9.43 1.26-11.69l-2.13-0.83c-2.51-0.98-4.07-3.49-3.85-6.17l0.55-6.61c0.3-3.58-2.55-6.59-6.06-6.59-0.19 0-0.39 0.01-0.59 0.03l-6.25 0.6c-0.19 0.02-0.39 0.03-0.58 0.03-2.53 0-4.82-1.57-5.71-3.98-1-2.71-3.35-3.99-5.69-3.99z",
        fill: "#434343"
      })
    )
  );
}

exports.default = Candy;
