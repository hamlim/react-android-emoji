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

function Football(props) {
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
        id: "p",
        x1: 25.915,
        x2: 103.91,
        y1: 26.112,
        y2: 103.11,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#945D4F",
        offset: 0.3599
      }),
      _react2.default.createElement("stop", {
        stopColor: "#66352A",
        offset: 0.7899
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.68 11.9c-10.1-9.18-57.09-17.19-89.37 17.47s-20.52 80.5-10.41 89.68c10.1 9.17 58.82 7.5 85.62-21.29 26.81-28.78 24.26-76.68 14.16-85.86z",
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "g",
        transform: "matrix(.7071 -.7071 .7071 .7071 -26.51 64)",
        cx: 64,
        cy: 64,
        rx: 62.38,
        ry: 39.55
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m115.68 11.9c-10.1-9.18-57.09-17.19-89.37 17.47s-20.52 80.5-10.41 89.68c10.1 9.17 58.82 7.5 85.62-21.29 26.81-28.78 24.26-76.68 14.16-85.86z"
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 77.657,
          x2: 115.81,
          y1: 8.0459,
          y2: 46.203,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F5F5F5",
          offset: 0.2078
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.554
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m123.62 63.63c-2.14 0-2 1.44-2.74-0.71-8.05-23.17-30.28-45.88-51.93-53.72l-7.44-3.27c-2.76-1.28 0.96-2.46 2.24-5.22s4.56-3.96 7.32-2.67l2.53 1.16c24.75 11.51 44.31 31.66 55.08 56.74 1.2 2.8-0.09 6.04-2.89 7.24-0.71 0.31-1.45 0.45-2.17 0.45z",
        fill: "url(#e)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 9.1518,
          x2: 47.309,
          y1: 76.551,
          y2: 114.71,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F5F5F5",
          offset: 0.2078
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.554
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m59.01 128.23c-0.71 0-1.43-0.14-2.12-0.43-25.43-10.63-45.58-30.36-56.74-55.57l-1.05-2.38c-1.23-2.78 0.03-6.04 2.81-7.27s4.2-5.28 5.43-2.5l2.89 7.69c10.01 22.62 28.09 40.33 50.91 49.87 2.81 1.17 4.13 4.4 2.96 7.21-0.89 2.11-2.94 3.38-5.09 3.38z",
        fill: "url(#d)"
      })
    ),
    _react2.default.createElement("path", {
      d: "m117.75 11.5s-14 30.25-42.75 61.75-60 48.5-60 48.5",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#212121",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d: "m49 97.5s15-11.25 28-24.75c12.75-13.25 20.25-26.25 20.25-26.25",
      fill: "none",
      stroke: "#ECEFF0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 45.851,
        x2: 71.513,
        y1: 75.443,
        y2: 101.1,
        gradientTransform: "matrix(.9976 .0693 -.0693 .9976 6.5495 -3.707)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.89 100.14c-0.89-0.06-1.76-0.47-2.4-1.19l-12.3-14.14c-1.27-1.46-1.12-3.67 0.34-4.94s3.67-1.12 4.94 0.34l12.3 14.14c1.27 1.46 1.12 3.67-0.34 4.94-0.73 0.63-1.65 0.91-2.54 0.85z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "w",
        x1: 57.213,
        x2: 82.875,
        y1: 65.975,
        y2: 91.637,
        gradientTransform: "matrix(.9996 .027 -.027 .9996 2.2406 -1.8088)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m77.53 90.28c-0.9-0.02-1.78-0.39-2.45-1.09l-12.88-13.61c-1.33-1.4-1.27-3.62 0.13-4.95s3.62-1.27 4.95 0.13l12.89 13.6c1.33 1.4 1.27 3.62-0.13 4.95-0.71 0.67-1.61 0.99-2.51 0.97z",
      fill: "url(#w)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "v",
        x1: 68.337,
        x2: 93.999,
        y1: 54.229,
        y2: 79.891,
        gradientTransform: "matrix(.9978 -.0663 .0663 .9978 -4.4427 5.4716)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.43 77.67c-0.89 0.06-1.81-0.22-2.54-0.86l-14.09-12.34c-1.45-1.27-1.6-3.48-0.33-4.94 1.27-1.45 3.48-1.6 4.94-0.33l14.1 12.34c1.45 1.27 1.6 3.48 0.33 4.94-0.64 0.73-1.51 1.13-2.41 1.19z",
      fill: "url(#v)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "u",
        x1: 78.401,
        x2: 104.06,
        y1: 42.374,
        y2: 68.035,
        gradientTransform: "matrix(.9951 -.0985 .0985 .9951 -5.4787 9.1213)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.53 65.47c-0.89 0.09-1.82-0.16-2.56-0.78l-14.5-11.88c-1.5-1.23-1.71-3.43-0.49-4.93 1.23-1.49 3.43-1.71 4.93-0.49l14.49 11.88c1.5 1.23 1.71 3.43 0.49 4.93-0.62 0.75-1.47 1.18-2.36 1.27z",
      fill: "url(#u)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "t",
        x1: 80.608,
        x2: 134.42,
        y1: -88.893,
        y2: -35.083,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#945D4F",
        offset: 0.3599
      }),
      _react2.default.createElement("stop", {
        stopColor: "#66352A",
        offset: 0.7899
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m159.55-106.74c-0.31-2.79-2.51-4.99-5.3-5.3-13.8-1.53-50.79 0.16-73.71 23.08-22.92 22.91-24.62 59.91-23.09 73.7 0.31 2.79 2.51 4.99 5.3 5.3 13.8 1.53 50.79-0.16 73.71-23.08 22.92-22.91 24.62-59.91 23.09-73.7z",
      fill: "url(#t)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "s",
        transform: "matrix(.7071 -.7071 .7071 .7071 74.913 58.854)",
        cx: 108.5,
        cy: -61,
        rx: 62.38,
        ry: 39.55
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#s"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "r",
        transform: "matrix(.7071 -.7071 .7071 .7071 74.913 58.854)",
        cx: 108.5,
        cy: -61,
        rx: 62.38,
        ry: 39.55
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#r"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7071 -.7071 .7071 .7071 74.913 58.854)",
        cx: 108.5,
        cy: -61,
        rx: 62.38,
        ry: 39.55,
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "q",
        transform: "matrix(.7071 -.7071 .7071 .7071 74.913 58.854)",
        cx: 108.5,
        cy: -61,
        rx: 62.38,
        ry: 39.55
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#q"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "o",
        transform: "matrix(.7071 -.7071 .7071 .7071 74.913 58.854)",
        cx: 108.5,
        cy: -61,
        rx: 62.38,
        ry: 39.55
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
          "m159.55-106.74c-0.31-2.79-2.51-4.99-5.3-5.3-13.8-1.53-50.79 0.16-73.71 23.08-22.92 22.91-24.62 59.91-23.09 73.7 0.31 2.79 2.51 4.99 5.3 5.3 13.8 1.53 50.79-0.16 73.71-23.08 22.92-22.91 24.62-59.91 23.09-73.7z"
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
          x1: 123.65,
          x2: 158.28,
          y1: -114.65,
          y2: -80.024,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F5F5F5",
          offset: 0.2078
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.554
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m164.82-63.67c-1.94 0-3.78-1.13-4.6-3.03-8.8-20.5-24.79-36.97-45.01-46.37l-2.29-1.07c-2.5-1.16-3.59-4.14-2.42-6.64 1.16-2.5 4.14-3.59 6.64-2.43l2.29 1.07c22.46 10.45 40.21 28.73 49.99 51.49 1.09 2.54-0.08 5.48-2.62 6.57-0.66 0.28-1.33 0.41-1.98 0.41z",
        fill: "url(#m)"
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
          id: "l",
          x1: 55.17,
          x2: 89.798,
          y1: -46.172,
          y2: -11.544,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F5F5F5",
          offset: 0.2078
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.554
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m101.15 0c-0.64 0-1.3-0.12-1.93-0.39-23.08-9.65-41.36-27.56-51.48-50.43l-0.95-2.16c-1.12-2.53 0.02-5.48 2.55-6.6 2.52-1.12 5.48 0.02 6.6 2.55l0.95 2.16c9.08 20.52 25.49 36.6 46.2 45.25 2.55 1.07 3.75 3.99 2.68 6.54-0.81 1.92-2.67 3.08-4.62 3.08z",
        fill: "url(#l)"
      })
    ),
    _react2.default.createElement("path", {
      d: "m157.17-110.83s-10.75 14.42-47.33 51-53.09 49.41-53.09 49.41",
      clipPath: "url(#b)",
      fill: "none",
      stroke: "#212121",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m84.17-36.85s12.17-10.48 25.17-23.98 24-24.98 24-24.98",
      fill: "none",
      stroke: "#ECEFF0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m145.8-109.46c2.98 0 5.78 0.14 8.11 0.4 1.4 0.16 2.49 1.25 2.65 2.65 0.79 7.14 0.6 19.41-2.32 32.45-3.62 16.16-10.31 29.22-19.9 38.81-20.98 20.98-53.63 22.61-63.14 22.61-2.98 0-5.78-0.14-8.11-0.4-1.4-0.16-2.49-1.25-2.65-2.65-0.79-7.14-0.6-19.41 2.32-32.45 3.62-16.16 10.31-29.22 19.9-38.81 20.98-20.98 53.63-22.61 63.14-22.61m0-3c-17.05 0-46.09 4.32-65.26 23.5-22.92 22.91-24.62 59.91-23.09 73.7 0.31 2.79 2.51 4.99 5.3 5.3 2.25 0.25 5.12 0.41 8.44 0.41 17.05 0 46.09-4.32 65.26-23.5 22.92-22.92 24.62-59.91 23.08-73.71-0.31-2.79-2.51-4.99-5.3-5.3-2.24-0.24-5.11-0.4-8.43-0.4z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 79.331,
        x2: 104.99,
        y1: -59.582,
        y2: -33.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.87-35.54c-0.9 0-1.79-0.34-2.48-1.03l-13.24-13.25c-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0l13.25 13.25c1.37 1.37 1.37 3.58 0 4.95-0.69 0.69-1.58 1.03-2.48 1.03z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 89.971,
        x2: 115.63,
        y1: -70.222,
        y2: -44.56,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.51-46.18c-0.9 0-1.79-0.34-2.48-1.03l-13.24-13.25c-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0l13.25 13.25c1.37 1.37 1.37 3.58 0 4.95-0.69 0.69-1.58 1.03-2.48 1.03z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 100.61,
        x2: 126.27,
        y1: -80.863,
        y2: -55.201,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.15-56.82c-0.9 0-1.79-0.34-2.47-1.03l-13.25-13.25c-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0l13.25 13.25c1.37 1.37 1.37 3.58 0 4.95-0.69 0.69-1.58 1.03-2.48 1.03z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 111.25,
        x2: 136.91,
        y1: -91.503,
        y2: -65.841,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EFEBE9",
        offset: 0.331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m131.79-67.46c-0.9 0-1.79-0.34-2.47-1.02l-13.25-13.25c-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0l13.25 13.25c1.37 1.37 1.37 3.58 0 4.95-0.69 0.68-1.58 1.02-2.48 1.02z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m85.02 7c13.66 0 24.74 3.58 28.64 7.12 2.47 2.24 5.54 9.3 6.06 21.82 0.73 17.52-4.24 42.42-20.4 59.77-17.38 18.67-44.44 25.29-62.33 25.29-10.67 0-16.85-2.16-19.07-4.18-4.22-3.82-9.03-15.86-9.65-30.62-0.49-11.82 1.48-34.65 20.23-54.79 19.79-21.24 43.9-24.41 56.52-24.41m0-3c-18.19 0-40.73 6.06-58.71 25.37-32.28 34.66-20.52 80.5-10.41 89.68 3.41 3.1 11.21 4.96 21.09 4.96 19.39 0 46.77-7.17 64.53-26.25 26.81-28.77 24.27-76.68 14.16-85.85-4.48-4.07-16.19-7.91-30.66-7.91z",
        fill: "#434343"
      })
    )
  );
}

exports.default = Football;
