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

function Man(props) {
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
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "l",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#l"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("rect", {
          id: "h",
          x: 33.32,
          y: 5,
          width: 154,
          height: 154
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#h"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m79.06 96.18c-6.52 0-11.82-5.69-11.82-12.69s5.3-12.69 11.82-12.69h67.95c6.52 0 11.82 5.69 11.82 12.69s-5.3 12.69-11.82 12.69h-67.95z",
          fill: "#E59600"
        }),
        _react2.default.createElement("path", {
          d:
            "m147.01 72.3c5.69 0 10.32 5.02 10.32 11.19s-4.63 11.19-10.32 11.19h-67.95c-5.69 0-10.32-5.02-10.32-11.19s4.62-11.19 10.32-11.19h67.95m0-3h-67.95c-7.33 0-13.32 6.39-13.32 14.19s5.99 14.19 13.32 14.19h67.95c7.33 0 13.32-6.39 13.32-14.19s-5.99-14.19-13.32-14.19z",
          fill: "#CC8600"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "g",
            x1: 109.19,
            x2: 109.19,
            y1: -8.2341,
            y2: 95.157,
            gradientTransform: "matrix(.9963 .0859 -.0859 .9963 5.2852 19.24)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#FFCA28",
            offset: 0.5993
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m109.24 123.5c-1.11 0-2.23-0.05-3.34-0.14-10.55-0.91-19.96-5.95-26.52-14.19-7.43-9.34-10.67-22.17-9.39-37.08 1.26-14.65 6.51-27.95 14.79-37.47 7.81-8.98 17.57-13.93 27.47-13.93 0.83 0 1.67 0.04 2.49 0.11 10.14 0.88 19.75 7.25 26.36 17.48 7.09 10.97 10.26 25.43 8.95 40.71-1.22 14.12-6.15 25.77-14.27 33.69-7.15 6.98-16.58 10.82-26.54 10.82z",
          fill: "url(#g)"
        }),
        _react2.default.createElement("path", {
          d:
            "m112.25 22.19c0.79 0 1.58 0.03 2.36 0.1 9.68 0.83 18.87 6.96 25.23 16.8 6.91 10.69 10 24.81 8.71 39.77-1.19 13.75-5.97 25.08-13.83 32.75-6.87 6.7-15.92 10.4-25.49 10.4-1.07 0-2.15-0.05-3.21-0.14-10.13-0.87-19.18-5.71-25.47-13.63-7.19-9.04-10.32-21.49-9.07-36.02 1.24-14.33 6.36-27.33 14.42-36.61 7.53-8.65 16.89-13.42 26.35-13.42m0-3c-20.69 0-41.01 20.93-43.75 52.77-2.85 33 16.32 51.09 37.27 52.9 1.15 0.1 2.31 0.15 3.47 0.15 19.85 0 39.62-14.7 42.31-45.88 2.86-33.18-15.12-57.96-36.68-59.81-0.87-0.09-1.75-0.13-2.62-0.13z",
          fill: "#EDA600"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "f",
            cx: 110.45,
            cy: 14.808,
            r: 37.789,
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#6D4C41",
            offset: 0.6
          }),
          _react2.default.createElement("stop", {
            stopColor: "#543930",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m110.67 11.6c-56.95 0-44.97 65.43-44.97 65.43s6 10.58 5.99 10.35c-0.2-9.02 3.41-24.98 5.97-31.77 1.29-3.43 4.85-5.42 8.45-4.77 5.54 1 14.36 2.25 24.09 2.25 9.35 0 17.93-1.15 23.56-2.13 3.86-0.67 7.59 1.71 8.61 5.49l7.06 30.93 5.83-11.3c-0.01 0 11.66-64.48-44.59-64.48z",
          fill: "url(#f)"
        }),
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", {
            id: "e",
            d:
              "m110.67 11.6c-56.95 0-45.7 63.82-45.7 63.82s6.73 12.19 6.73 11.97c-0.04-1.93 0.07-5.41 0.07-5.41l-2.81-4.45 0.51-28.05 40.92-11.49 40.07 11.49 2.73 25.59-4.57 8.2 0.81 4.12 5.99-11.85c-0.01-0.01 11.5-63.94-44.75-63.94z"
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
          "g",
          {
            clipPath: "url(#d)"
          },
          _react2.default.createElement("path", {
            d:
              "m110.67 14.6c14.19 0 25 4.33 32.14 12.86 13.8 16.5 10.13 43.96 9.56 47.68l-1.85 3.58-5.23-22.93c-0.01-0.04-0.02-0.07-0.03-0.11-1.24-4.61-5.43-7.82-10.2-7.82-0.61 0-1.22 0.05-1.82 0.16-5.46 0.95-13.88 2.08-23.04 2.08-9.44 0-18.02-1.2-23.55-2.2-0.63-0.11-1.27-0.17-1.9-0.17-4.38 0-8.35 2.75-9.89 6.83-1.86 4.93-4.23 14.39-5.42 22.89-0.56-1-1.14-2.02-1.7-3.02-0.57-3.9-3.81-30.44 9.87-46.7 7.33-8.72 18.45-13.13 33.06-13.13m0-3c-56.95 0-45.82 63.82-45.82 63.82s6.72 11.97 6.84 11.97c-0.2-9.02 3.41-24.98 5.97-31.77 1.13-2.99 3.98-4.89 7.08-4.89 0.45 0 0.91 0.04 1.37 0.12 5.54 1 14.36 2.25 24.09 2.25 9.35 0 17.93-1.15 23.56-2.13 0.44-0.08 0.88-0.11 1.31-0.11 3.37 0 6.4 2.25 7.3 5.6l7.06 30.93 5.83-11.3c-0.01-0.01 11.66-64.49-44.59-64.49z",
            fill: "#402720"
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m80.86 63.21c1.37-1.31 4.29-3.04 9.14-2.13 4.86 0.91 6.95 3.59 7.75 5.3 0.35 0.76 0.09 1.51-0.33 1.91-0.39 0.38-1.37 0.61-2.31 0.06s-2.7-1.99-5.98-2.63c-3.29-0.59-5.45 0.11-6.53 0.28-1.07 0.17-1.9-0.4-2.13-0.89-0.24-0.53-0.21-1.32 0.39-1.9z",
          fill: "#6D4C41"
        }),
        _react2.default.createElement("path", {
          d:
            "m117.26 67.05c1.37-1.31 4.29-3.04 9.14-2.13 4.86 0.91 6.95 3.59 7.75 5.3 0.35 0.76 0.09 1.51-0.33 1.91-0.39 0.38-1.37 0.61-2.31 0.06s-2.7-1.99-5.98-2.63c-3.29-0.59-5.45 0.11-6.53 0.28-1.07 0.17-1.9-0.4-2.13-0.89-0.24-0.52-0.22-1.32 0.39-1.9z",
          fill: "#6D4C41"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "u",
            cx: -345.91,
            cy: 103.48,
            r: 19.862,
            gradientTransform: "matrix(.9957 -.0921 .0921 .9957 461.7 -33.138)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.4,
            offset: 0.0686
          }),
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.15,
            offset: 0.5468
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.7782
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.9712
          })
        ),
        _react2.default.createElement("circle", {
          cx: 126.79,
          cy: 101.76,
          r: 17.82,
          fill: "url(#u)"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "t",
            cx: -387.26,
            cy: 92.643,
            r: 19.862,
            gradientTransform: "matrix(.9957 -.0921 .0921 .9957 461.7 -33.138)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.4,
            offset: 0.0686
          }),
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.15,
            offset: 0.5468
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.7782
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.9712
          })
        ),
        _react2.default.createElement("circle", {
          cx: 84.63,
          cy: 94.78,
          r: 17.82,
          fill: "url(#t)"
        }),
        _react2.default.createElement("path", {
          d:
            "m78.93 73.42c-0.58 0.08-1.01 1.53-0.5 4.09 0.61 3.09 2.76 5.43 4.71 6.39 2.44 1.21 7.29 2.04 11.14-0.66 4.43-3.09 3.12-5.65 1.52-5.07-1.63 0.6-4.58 1.23-7.01 1.08-2.53-0.16-5.26-1.38-7.02-3-1.3-1.18-2.21-2.92-2.84-2.83z",
          fill: "#444"
        }),
        _react2.default.createElement("path", {
          d:
            "m115.06 79.9c-0.58 0.08-1.01 1.53-0.5 4.09 0.61 3.09 2.76 5.43 4.71 6.39 2.44 1.21 7.29 2.04 11.14-0.66 4.43-3.09 3.12-5.65 1.52-5.07-1.63 0.6-4.58 1.23-7.01 1.08-2.53-0.16-5.26-1.38-7.02-3-1.3-1.18-2.21-2.91-2.84-2.83z",
          fill: "#444"
        }),
        _react2.default.createElement("path", {
          d:
            "m97.05 93.27c2.84 0.21 2.82-1.48 3.75-0.45 1.81 2 2.21 3.31 1.86 3.95-0.53 0.97-1.53 0.97-4.44 0.35s-5.9-1.87-5.99-2.97c-0.06-0.74 0.11-1.99 1.18-3.24 0.53-0.61 0.81 2.15 3.64 2.36z",
          fill: "#E59600"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "s",
            cx: -64.184,
            cy: 84.247,
            r: 9.3801,
            gradientTransform:
              "matrix(-.7326 -.1212 -.0816 .6179 55.012 43.89)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#543930",
            offset: 0
          }),
          _react2.default.createElement("stop", {
            stopColor: "#543930",
            offset: 0.9916
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m99.55 100.91c-0.22-0.06-5.9-1.97-7.22 0.96-1.2 2.66 3.44 3.95 3.44 3.95s-4.53-0.9-5.21 2.39c-0.69 3.28 6.45 4.78 6.45 4.78",
          fill: "none",
          stroke: "url(#s)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 3
        })
      ),
      _react2.default.createElement("rect", {
        x: 55.85,
        y: 13.09,
        width: 108.94,
        height: 108.94,
        clipPath: "url(#b)",
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("rect", {
          id: "r",
          transform: "matrix(-1 4.4896e-11 -4.4896e-11 -1 32.36 164)",
          x: -60.82,
          y: 5,
          width: 154,
          height: 154
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "c"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#r"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#c)"
        },
        _react2.default.createElement("path", {
          d:
            "m-20.51 96.18c-6.52 0-11.82-5.69-11.82-12.69s5.3-12.69 11.82-12.69h67.95c6.52 0 11.82 5.69 11.82 12.69s-5.3 12.69-11.82 12.69h-67.95z",
          fill: "#E59600"
        }),
        _react2.default.createElement("path", {
          d:
            "m47.44 72.3c5.69 0 10.32 5.02 10.32 11.19s-4.63 11.19-10.32 11.19h-67.95c-5.69 0-10.32-5.02-10.32-11.19s4.63-11.19 10.32-11.19h67.95m0-3h-67.95c-7.33 0-13.32 6.39-13.32 14.19s5.99 14.19 13.32 14.19h67.95c7.33 0 13.32-6.39 13.32-14.19s-5.99-14.19-13.32-14.19z",
          fill: "#CC8600"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "q",
            x1: 15.394,
            x2: 15.394,
            y1: -0.1469,
            y2: 103.24,
            gradientTransform: "matrix(-.9963 .0859 .0859 .9963 27.074 19.24)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#FFCA28",
            offset: 0.5993
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m17.26 123.5c-9.96 0-19.39-3.84-26.54-10.82-8.12-7.92-13.06-19.58-14.27-33.69-1.32-15.28 1.86-29.74 8.95-40.71 6.61-10.23 16.22-16.61 26.36-17.48 0.82-0.07 1.66-0.11 2.49-0.11 9.91 0 19.66 4.95 27.47 13.93 8.27 9.51 13.52 22.82 14.79 37.47 1.29 14.92-1.96 27.74-9.39 37.08-6.55 8.24-15.97 13.28-26.52 14.19-1.11 0.1-2.23 0.14-3.34 0.14z",
          fill: "url(#q)"
        }),
        _react2.default.createElement("path", {
          d:
            "m14.25 22.19c9.47 0 18.82 4.76 26.34 13.41 8.07 9.28 13.19 22.28 14.42 36.61 1.25 14.53-1.88 26.98-9.07 36.02-6.29 7.91-15.34 12.75-25.47 13.63-1.06 0.09-2.14 0.14-3.21 0.14-9.57 0-18.63-3.69-25.49-10.4-7.86-7.67-12.64-18.99-13.83-32.75-1.29-14.95 1.8-29.08 8.71-39.77 6.36-9.84 15.56-15.97 25.23-16.8 0.79-0.05 1.58-0.09 2.37-0.09m0-3c-0.87 0-1.75 0.04-2.62 0.11-21.56 1.86-39.54 26.64-36.67 59.81 2.68 31.19 22.45 45.89 42.3 45.89 1.16 0 2.31-0.05 3.47-0.15 20.95-1.81 40.12-19.9 37.27-52.9-2.74-31.83-23.07-52.76-43.75-52.76z",
          fill: "#EDA600"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "p",
            cx: 16.313,
            cy: 14.808,
            r: 37.789,
            gradientTransform: "matrix(-1 0 0 1 32.36 0)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#6D4C41",
            offset: 0.6
          }),
          _react2.default.createElement("stop", {
            stopColor: "#543930",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m15.83 11.6c56.95 0 44.97 65.43 44.97 65.43s-6 10.58-5.99 10.35c0.2-9.02-3.41-24.98-5.97-31.77-1.29-3.43-4.85-5.42-8.45-4.77-5.54 1-14.36 2.25-24.09 2.25-9.35 0-17.93-1.15-23.56-2.13-3.86-0.67-7.59 1.71-8.61 5.49l-7.06 30.93-5.83-11.3c0.01 0-11.66-64.48 44.59-64.48z",
          fill: "url(#p)"
        }),
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", {
            id: "o",
            d:
              "m15.83 11.6c56.95 0 45.7 63.82 45.7 63.82s-6.73 12.19-6.73 11.97c0.04-1.93-0.07-5.41-0.07-5.41l2.81-4.45-0.51-28.05-40.91-11.49-40.07 11.49-2.73 25.59 4.57 8.2-0.81 4.12-5.99-11.85c0-0.01-11.51-63.94 44.74-63.94z"
          })
        ),
        _react2.default.createElement(
          "clipPath",
          {
            id: "n"
          },
          _react2.default.createElement("use", {
            xlinkHref: "#o"
          })
        ),
        _react2.default.createElement(
          "g",
          {
            clipPath: "url(#n)"
          },
          _react2.default.createElement("path", {
            d:
              "m15.83 14.6c14.61 0 25.73 4.42 33.07 13.13 13.69 16.26 10.44 42.8 9.87 46.7-0.56 1-1.14 2.02-1.7 3.02-1.19-8.5-3.56-17.95-5.42-22.89-1.54-4.09-5.51-6.83-9.89-6.83-0.63 0-1.27 0.06-1.9 0.17-5.53 1-14.11 2.2-23.55 2.2-9.16 0-17.59-1.13-23.04-2.08-0.6-0.1-1.21-0.16-1.82-0.16-4.77 0-8.96 3.22-10.2 7.82-0.01 0.04-0.02 0.07-0.03 0.11l-5.23 22.93-1.85-3.59c-0.58-3.72-4.27-31.12 9.55-47.66 7.12-8.54 17.94-12.87 32.14-12.87m0-3c-56.25 0-44.58 64.49-44.58 64.49l5.83 11.3 7.06-30.93c0.9-3.35 3.94-5.6 7.3-5.6 0.43 0 0.87 0.04 1.31 0.11 5.63 0.98 14.21 2.13 23.56 2.13 9.73 0 18.55-1.24 24.09-2.25 0.46-0.08 0.92-0.12 1.37-0.12 3.1 0 5.96 1.9 7.08 4.89 2.56 6.8 6.17 22.76 5.97 31.77 0.12 0 6.84-11.97 6.84-11.97s11.12-63.82-45.83-63.82z",
            fill: "#402720"
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m45.64 63.21c-1.37-1.31-4.29-3.04-9.14-2.13-4.86 0.91-6.95 3.59-7.75 5.3-0.35 0.76-0.09 1.51 0.33 1.91 0.39 0.38 1.37 0.61 2.31 0.06s2.7-1.99 5.98-2.63c3.29-0.59 5.45 0.11 6.53 0.28 1.07 0.17 1.9-0.4 2.13-0.89 0.24-0.53 0.21-1.32-0.39-1.9z",
          fill: "#6D4C41"
        }),
        _react2.default.createElement("path", {
          d:
            "m9.24 67.05c-1.37-1.31-4.29-3.04-9.14-2.13-4.86 0.91-6.95 3.59-7.75 5.3-0.35 0.76-0.09 1.51 0.33 1.91 0.39 0.38 1.37 0.61 2.31 0.06s2.7-1.99 5.98-2.63c3.29-0.59 5.45 0.11 6.53 0.28 1.07 0.17 1.9-0.4 2.13-0.89 0.24-0.52 0.22-1.32-0.39-1.9z",
          fill: "#6D4C41"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "m",
            cx: -439.65,
            cy: 94.811,
            r: 19.862,
            gradientTransform:
              "matrix(-.9957 -.0921 -.0921 .9957 -429.34 -33.138)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.4,
            offset: 0.0686
          }),
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.15,
            offset: 0.5468
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.7782
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.9712
          })
        ),
        _react2.default.createElement("circle", {
          cx: -0.29,
          cy: 101.76,
          r: 17.82,
          fill: "url(#m)"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "k",
            cx: -481,
            cy: 83.972,
            r: 19.862,
            gradientTransform:
              "matrix(-.9957 -.0921 -.0921 .9957 -429.34 -33.138)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.4,
            offset: 0.0686
          }),
          _react2.default.createElement("stop", {
            stopColor: "#EC407A",
            stopOpacity: 0.15,
            offset: 0.5468
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.7782
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            stopOpacity: 0,
            offset: 0.9712
          })
        ),
        _react2.default.createElement("circle", {
          cx: 41.87,
          cy: 94.78,
          r: 17.82,
          fill: "url(#k)"
        }),
        _react2.default.createElement("path", {
          d:
            "m47.57 73.42c0.58 0.08 1.01 1.53 0.5 4.09-0.61 3.09-2.76 5.43-4.71 6.39-2.44 1.21-7.29 2.04-11.14-0.66-4.43-3.09-3.12-5.65-1.52-5.07 1.63 0.6 4.58 1.23 7.01 1.08 2.53-0.16 5.26-1.38 7.02-3 1.3-1.18 2.21-2.92 2.84-2.83z",
          fill: "#444"
        }),
        _react2.default.createElement("path", {
          d:
            "m11.44 79.9c0.58 0.08 1.01 1.53 0.5 4.09-0.61 3.09-2.76 5.43-4.71 6.39-2.44 1.21-7.29 2.04-11.14-0.66-4.43-3.09-3.12-5.65-1.52-5.07 1.63 0.6 4.58 1.23 7.01 1.08 2.53-0.16 5.26-1.38 7.02-3 1.3-1.18 2.21-2.91 2.84-2.83z",
          fill: "#444"
        }),
        _react2.default.createElement("path", {
          d:
            "m29.45 93.27c-2.84 0.21-2.82-1.48-3.75-0.45-1.81 2-2.21 3.31-1.86 3.95 0.53 0.97 1.53 0.97 4.44 0.35s5.9-1.87 5.99-2.97c0.06-0.74-0.11-1.99-1.18-3.24-0.53-0.61-0.81 2.15-3.64 2.36z",
          fill: "#E59600"
        }),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "j",
            cx: 61.568,
            cy: 108.51,
            r: 9.3801,
            gradientTransform: "matrix(.7326 -.1212 .0816 .6179 -22.652 43.89)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#543930",
            offset: 0
          }),
          _react2.default.createElement("stop", {
            stopColor: "#543930",
            offset: 0.9916
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m26.95 100.91c0.22-0.06 5.9-1.97 7.22 0.96 1.2 2.66-3.44 3.95-3.44 3.95s4.53-0.9 5.21 2.39c0.69 3.28-6.45 4.78-6.45 4.78",
          fill: "none",
          stroke: "url(#j)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 3
        })
      ),
      _react2.default.createElement("rect", {
        transform: "matrix(-1 4.4897e-11 -4.4897e-11 -1 32.36 135.12)",
        x: -38.29,
        y: 13.09,
        width: 108.94,
        height: 108.94,
        clipPath: "url(#c)",
        fill: "none"
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
          id: "i",
          x1: 64.22,
          x2: 64.22,
          y1: -4.3801,
          y2: 54.603,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F48FB1",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EC407A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64.22 70.89c-0.66 0-1.28-0.26-1.75-0.73-1.16-1.17-2.64-2.66-4.33-4.36-8.42-8.45-22.51-22.58-26.83-29-2.03-3.03-3.26-5.96-3.76-8.95-0.55-3.29-0.52-7.96 0.77-10.97 3.05-7.13 9.21-11.38 16.47-11.38l0.94 0.02c2.79 0.05 5.6 0.65 8.37 1.81 1.88 0.79 3.4 1.87 5 3.01 0.81 0.58 1.66 1.18 2.57 1.76 0.74 0.47 1.62 0.72 2.55 0.72s1.8-0.25 2.54-0.72c0.91-0.58 1.74-1.17 2.55-1.75 1.61-1.15 3.14-2.24 5.03-3.03 2.76-1.15 5.57-1.76 8.35-1.8l0.96-0.02c7.26 0 13.42 4.25 16.47 11.38 1.29 3.01 1.32 7.68 0.77 10.97-0.51 3.02-1.75 5.95-3.76 8.94-4.31 6.43-18.43 20.58-26.86 29.03-1.68 1.69-3.15 3.16-4.3 4.33-0.47 0.48-1.09 0.74-1.75 0.74z",
        fill: "url(#i)"
      }),
      _react2.default.createElement("path", {
        d:
          "m44.79 7h0.06c0.15 0 0.3 0.01 0.45 0.01 0.13 0 0.26 0 0.42 0.01 2.58 0.04 5.21 0.61 7.79 1.69 1.73 0.73 3.11 1.71 4.71 2.85 0.83 0.59 1.69 1.2 2.64 1.81 0.98 0.62 2.14 0.95 3.35 0.95s2.37-0.33 3.35-0.95c0.94-0.6 1.79-1.2 2.61-1.79 1.61-1.15 3-2.14 4.73-2.87 2.59-1.08 5.21-1.65 7.83-1.69 0.13 0 0.26-0.01 0.39-0.01 0.15 0 0.3 0 0.45-0.01h0.06c6.74 0 12.24 3.82 15.09 10.47 1.16 2.72 1.16 7.16 0.67 10.12-0.48 2.81-1.63 5.55-3.53 8.37-4.23 6.3-18.27 20.38-26.67 28.8-1.69 1.69-3.16 3.17-4.31 4.34-0.23 0.24-0.5 0.29-0.68 0.29s-0.44-0.05-0.68-0.29c-1.16-1.17-2.64-2.66-4.33-4.36-8.39-8.41-22.42-22.48-26.65-28.78-1.91-2.86-3.06-5.59-3.53-8.36-0.5-2.98-0.5-7.42 0.67-10.14 2.87-6.64 8.37-10.46 15.11-10.46m38.86-3h-0.11c-0.3 0.01-0.58 0.01-0.88 0.02-3.08 0.05-6.07 0.74-8.9 1.92-3.03 1.27-5.11 3.18-7.8 4.89-0.51 0.32-1.12 0.48-1.74 0.48s-1.24-0.16-1.74-0.48c-2.7-1.71-4.77-3.62-7.8-4.89-2.83-1.18-5.82-1.87-8.9-1.92-0.29-0.01-0.59-0.01-0.88-0.02h-0.11c-7.83 0-14.51 4.48-17.85 12.29-1.42 3.32-1.45 8.32-0.87 11.81 0.58 3.47 2.04 6.61 3.99 9.54 5.26 7.82 24.32 26.44 31.33 33.57 0.77 0.79 1.79 1.18 2.81 1.18s2.04-0.39 2.81-1.18c7.01-7.13 26.08-25.75 31.33-33.57 1.97-2.92 3.41-6.06 4-9.54 0.58-3.49 0.56-8.49-0.87-11.81-3.32-7.81-10-12.29-17.82-12.29z",
        fill: "#D92E67"
      })
    )
  );
}

exports.default = Man;
