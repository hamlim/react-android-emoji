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

function Woman(props) {
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
        id: "n",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#n"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("rect", {
          id: "h",
          transform: "matrix(-1 4.4896e-11 -4.4896e-11 -1 220.64 164)",
          x: 33.32,
          y: 5,
          width: 154,
          height: 154
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "a"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#h"
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
            id: "g",
            cx: 100.92,
            cy: 1.4786,
            r: 60.288,
            gradientTransform: "matrix(-1.0353 0 0 1 217.57 0)",
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
            "m79.21 157.13c-0.09 0-0.18 0.01-0.32 0.01-1.35 0-8.26-0.3-11.42-6.29-2.8-5.3-3.89-57.17-3.94-90.75-0.01-0.24-0.38-20.07 12.95-33.76 8.53-8.77 20.82-13.21 36.5-13.21 15.69 0 27.99 4.45 36.57 13.22 13.39 13.7 13.1 33.53 13.1 33.72-0.18 33.66-1.43 85.59-4.14 90.79-3.22 6.18-10.23 6.36-11.02 6.36l-68.28-0.09z",
          fill: "url(#g)"
        }),
        _react2.default.createElement("path", {
          d:
            "m112.99 14.63c15.26 0 27.19 4.29 35.47 12.74 12.95 13.22 12.7 32.47 12.69 32.66v0.06c-0.29 53.92-2.26 86.66-3.97 90.08-2.81 5.39-8.99 5.55-9.7 5.55h-0.09l-68.17-0.08h-0.14-0.17c-1.2 0-7.33-0.26-10.1-5.49-0.51-0.99-2.25-7.35-3.21-47.31-0.52-21.6-0.56-42.53-0.56-42.74v-0.08c-0.01-0.19-0.39-19.34 12.51-32.61 8.23-8.48 20.16-12.78 35.44-12.78m0-3c-52.33 0-50.95 48.47-50.95 48.47s0.12 83.9 4.12 91.45c3.55 6.71 11.12 7.08 12.75 7.08 0.2 0 0.31-0.01 0.31-0.01l68.17 0.08h0.1c0.99 0 8.74-0.22 12.35-7.16 3.86-7.42 4.31-91.45 4.31-91.45s1.16-48.46-51.16-48.46z",
          fill: "#402821"
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
            id: "f",
            x1: 106.31,
            x2: 106.31,
            y1: 183.53,
            y2: 109.88,
            gradientTransform:
              "matrix(-.991 -.1342 -.1342 .991 233.42 -42.367)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            offset: 0
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFCA28",
            offset: 0.4007
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m106.87 122.96c-1.08 0-2.12-0.07-3.1-0.2-2.82-0.38-5.94-1.42-9.03-3-13.37-6.84-27.7-24.31-24.08-51.01 1.89-13.97 7.05-25.33 14.92-32.85 7.03-6.72 15.95-10.28 25.8-10.28 1.82 0 3.67 0.13 5.5 0.37 10.73 1.45 19.94 6.93 25.94 15.42 6.81 9.63 9.31 22.81 7.24 38.09-3.61 26.65-22.04 39.69-36.72 42.75-2.26 0.47-4.43 0.71-6.47 0.71z",
          fill: "url(#f)"
        }),
        _react2.default.createElement("path", {
          d:
            "m111 24v3.13c2 0 3.72 0.12 5.48 0.36 10.31 1.4 19.26 6.65 25.01 14.8 6.58 9.32 9.04 22.12 7.03 37.02-3.51 25.88-21.31 38.52-35.52 41.48-2.14 0.45-4.2 0.67-6.14 0.67-1.01 0-1.98-0.06-2.89-0.19-2.65-0.36-5.6-1.34-8.54-2.85-7.21-3.69-13.52-9.93-17.78-17.57-5.17-9.26-7.07-20.29-5.49-31.9 1.85-13.63 6.85-24.68 14.47-31.97 6.75-6.45 15.12-9.86 24.57-9.86l-0.19-3m0.37 0.01c-19.45 0-38.05 13.7-42.21 44.42-3.67 27.12 10.97 45.42 24.88 52.54 3.3 1.69 6.55 2.75 9.51 3.15 1.05 0.14 2.15 0.21 3.3 0.21 2.12 0 4.4-0.24 6.77-0.74 15.3-3.19 34.24-16.93 37.91-44.02 4.57-33.72-13.08-52.3-34.46-55.19-1.91-0.24-3.81-0.37-5.7-0.37z",
          fill: "#EDA600"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "e",
          cx: -526.72,
          cy: 98.272,
          r: 19.862,
          gradientTransform: "translate(650.97)",
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
        cx: 124.25,
        cy: 98.27,
        r: 17.82,
        clipPath: "url(#a)",
        fill: "url(#e)"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(-1 4.4891e-11 -4.4891e-11 -1 226.07 135.77)",
        x: 56.47,
        y: 11.32,
        width: 113.13,
        height: 113.13,
        clipPath: "url(#a)",
        fill: "none"
      }),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement("path", {
          d:
            "m79.51 63.21c1.37-1.31 4.29-3.04 9.14-2.13 4.86 0.91 6.95 3.59 7.75 5.3 0.35 0.76 0.09 1.51-0.33 1.91-0.39 0.38-1.37 0.61-2.31 0.06s-2.7-1.99-5.98-2.63c-3.29-0.59-5.45 0.11-6.53 0.28-1.07 0.17-1.9-0.4-2.13-0.89-0.23-0.53-0.21-1.32 0.39-1.9z",
          fill: "#6D4C41"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: -568.31,
          cy: 90.134,
          r: 19.862,
          gradientTransform: "translate(650.97)",
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
        cx: 82.66,
        cy: 90.13,
        r: 17.82,
        clipPath: "url(#a)",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.82 73.42c-0.58 0.08-1.01 1.53-0.5 4.09 0.61 3.09 2.76 5.43 4.71 6.39 2.44 1.21 7.29 2.04 11.14-0.66 4.43-3.09 3.12-5.65 1.52-5.07-1.63 0.6-4.58 1.23-7.01 1.08-2.53-0.16-5.26-1.38-7.02-3-1.3-1.18-2.21-2.92-2.84-2.83z",
        clipPath: "url(#a)",
        fill: "#444"
      }),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement("path", {
          d:
            "m115.91 67.05c1.37-1.31 4.29-3.04 9.14-2.13 4.86 0.91 6.95 3.59 7.75 5.3 0.35 0.76 0.09 1.51-0.33 1.91-0.39 0.38-1.37 0.61-2.31 0.06s-2.7-1.99-5.98-2.63c-3.29-0.59-5.45 0.11-6.53 0.28-1.07 0.17-1.9-0.4-2.13-0.89-0.24-0.52-0.21-1.32 0.39-1.9z",
          fill: "#6D4C41"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m113.95 79.9c-0.58 0.08-1.01 1.53-0.5 4.09 0.61 3.09 2.76 5.43 4.71 6.39 2.44 1.21 7.29 2.04 11.14-0.66 4.43-3.09 3.12-5.65 1.52-5.07-1.63 0.6-4.58 1.23-7.01 1.08-2.53-0.16-5.26-1.38-7.02-3-1.3-1.18-2.21-2.91-2.84-2.83z",
        clipPath: "url(#a)",
        fill: "#444"
      }),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", {
            id: "w",
            d:
              "m154.53 118.06v-64.53c0-21.26-19.79-37.44-41.05-37.44h-6.18c-21.26 0-40.82 16.18-40.82 37.44v64.2l88.05 0.33z"
          })
        ),
        _react2.default.createElement(
          "clipPath",
          {
            id: "v"
          },
          _react2.default.createElement("use", {
            xlinkHref: "#w"
          })
        ),
        _react2.default.createElement(
          "g",
          {
            clipPath: "url(#v)"
          },
          _react2.default.createElement(
            "radialGradient",
            {
              id: "u",
              cx: 141.21,
              cy: 6.0794,
              r: 49.949,
              gradientTransform: "matrix(-.9637 0 0 1 246.47 0)",
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
              "m62.85 60.11s-1.28-44.62 47.43-44.62 47.63 44.62 47.63 44.62-0.42 57.05-4.01 64.47-9.03 7.16-9.03 7.16 2.54-33.29 2.84-48.97c0.07-3.66 1.18-17.22-6.47-18.94-28.05-6.3-43.92-21.18-43.92-21.18-4.13 9.01-17.03 17.8-21.67 21.15-3.81 2.74-3.27 14.05-3.2 18.86l3.82 49s-5.88 0.47-9.59-7.08c-3.72-7.55-3.83-64.47-3.83-64.47z",
            fill: "url(#u)"
          })
        )
      ),
      _react2.default.createElement("path", {
        d:
          "m99.07 93.27c2.84 0.21 2.82-1.48 3.75-0.45 1.81 2 2.21 3.31 1.86 3.95-0.53 0.97-1.53 0.97-4.44 0.35s-5.9-1.87-5.99-2.97c-0.06-0.74 0.11-1.99 1.18-3.24 0.53-0.61 0.81 2.15 3.64 2.36z",
        clipPath: "url(#a)",
        fill: "#E59600"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "t",
          cx: 160.16,
          cy: 126.09,
          r: 9.3801,
          gradientTransform: "matrix(-.7326 -.1212 -.0816 .6179 223.6 43.89)",
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
          "m100.31 100c-0.22-0.06-5.9-1.97-7.22 0.96-1.2 2.66 3.44 3.95 3.44 3.95s-4.53-0.9-5.21 2.39 6.45 4.78 6.45 4.78",
        clipPath: "url(#a)",
        fill: "none",
        stroke: "url(#t)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("rect", {
          id: "s",
          x: -60.82,
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
          xlinkHref: "#s"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement(
          "radialGradient",
          {
            id: "r",
            cx: 9.9872,
            cy: 1.4786,
            r: 60.288,
            gradientTransform: "matrix(1.0353 0 0 1 3.072 0)",
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
            "m-20.99 157.22c-0.79 0-7.8-0.18-11.02-6.36-2.71-5.21-3.96-57.13-4.14-90.77 0-0.23-0.29-20.06 13.1-33.75 8.57-8.77 20.88-13.22 36.57-13.22 15.7 0 27.99 4.45 36.52 13.23 13.34 13.72 12.94 33.5 12.93 33.7-0.05 33.62-1.14 85.49-3.94 90.79-3.17 5.98-10.07 6.29-11.42 6.29h-0.24l-68.36 0.09z",
          fill: "url(#r)"
        }),
        _react2.default.createElement("path", {
          d:
            "m13.51 14.63c15.25 0 27.17 4.29 35.41 12.74 12.89 13.22 12.55 32.46 12.55 32.65v0.08c-0.08 53.87-2 86.6-3.77 90.05-2.76 5.22-8.9 5.49-10.1 5.49h-0.16-0.16l-68.17 0.08h-0.1c-0.7 0-6.88-0.16-9.69-5.55-2.29-4.59-3.76-49.84-3.97-90.08v-0.05c0-0.19-0.25-19.44 12.69-32.66 8.28-8.46 20.22-12.75 35.47-12.75m0-3c-52.33 0-51.16 48.47-51.16 48.47s0.45 84.03 4.31 91.45c3.61 6.94 11.36 7.16 12.35 7.16h0.1l68.17-0.08s0.11 0.01 0.31 0.01c1.63 0 9.2-0.37 12.75-7.08 3.99-7.55 4.12-91.45 4.12-91.45s1.38-48.48-50.95-48.48z",
          fill: "#402821"
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
            id: "q",
            x1: 13.024,
            x2: 13.024,
            y1: 170.9,
            y2: 97.244,
            gradientTransform: "matrix(.991 -.1342 .1342 .991 -12.777 -42.367)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#FFB300",
            offset: 0
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFCA28",
            offset: 0.4007
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m19.63 122.96c-2.04 0-4.22-0.24-6.46-0.7-14.68-3.06-33.11-16.09-36.72-42.75-2.07-15.28 0.43-28.45 7.24-38.09 6-8.49 15.21-13.96 25.94-15.42 1.83-0.25 3.68-0.37 5.5-0.37 16.86 0 36.41 11.33 40.72 43.13 3.62 26.7-10.71 44.16-24.08 51.01-3.09 1.58-6.21 2.62-9.03 3-0.99 0.12-2.03 0.19-3.11 0.19z",
          fill: "url(#q)"
        }),
        _react2.default.createElement("path", {
          d:
            "m15.12 27.13c9.45 0 18.01 3.41 24.76 9.86 7.62 7.29 12.63 18.34 14.47 31.97 1.57 11.61-0.33 22.64-5.49 31.9-4.26 7.64-10.58 13.88-17.79 17.57-2.94 1.51-5.9 2.49-8.55 2.85-0.91 0.12-1.89 0.19-2.9 0.19-1.94 0-4.01-0.23-6.16-0.67-14.21-2.96-32.04-15.6-35.54-41.48-2.02-14.9 0.39-27.7 6.98-37.02 5.75-8.14 14.6-13.4 24.92-14.8 1.77-0.25 3.55-0.37 5.3-0.37m0-3c-1.9 0-3.8 0.13-5.7 0.39-21.38 2.9-39.03 21.47-34.46 55.19 3.67 27.08 22.61 40.83 37.91 44.02 2.37 0.49 4.65 0.74 6.77 0.74 1.15 0 2.25-0.07 3.3-0.21 2.96-0.4 6.22-1.47 9.51-3.15 13.91-7.14 28.55-25.44 24.88-52.56-4.16-30.72-22.76-44.42-42.21-44.42z",
          fill: "#EDA600"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "p",
          cx: -432.58,
          cy: 98.272,
          r: 19.862,
          gradientTransform: "matrix(-1 0 0 1 -430.33 0)",
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
        cx: 2.25,
        cy: 98.27,
        r: 17.82,
        clipPath: "url(#b)",
        fill: "url(#p)"
      }),
      _react2.default.createElement("rect", {
        x: -43.1,
        y: 11.32,
        width: 113.13,
        height: 113.13,
        clipPath: "url(#b)",
        fill: "none"
      }),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m46.99 63.21c-1.37-1.31-4.29-3.04-9.14-2.13-4.86 0.91-6.95 3.59-7.75 5.3-0.35 0.76-0.09 1.51 0.33 1.91 0.39 0.38 1.37 0.61 2.31 0.06s2.7-1.99 5.98-2.63c3.29-0.59 5.45 0.11 6.53 0.28 1.07 0.17 1.9-0.4 2.13-0.89 0.23-0.53 0.21-1.32-0.39-1.9z",
          fill: "#6D4C41"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "o",
          cx: -474.17,
          cy: 90.134,
          r: 19.862,
          gradientTransform: "matrix(-1 0 0 1 -430.33 0)",
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
        cx: 43.84,
        cy: 90.13,
        r: 17.82,
        clipPath: "url(#b)",
        fill: "url(#o)"
      }),
      _react2.default.createElement("path", {
        d:
          "m48.68 73.42c0.58 0.08 1.01 1.53 0.5 4.09-0.61 3.09-2.76 5.43-4.71 6.39-2.44 1.21-7.29 2.04-11.14-0.66-4.43-3.09-3.12-5.65-1.52-5.07 1.63 0.6 4.58 1.23 7.01 1.08 2.53-0.16 5.26-1.38 7.02-3 1.3-1.18 2.21-2.92 2.84-2.83z",
        clipPath: "url(#b)",
        fill: "#444"
      }),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m10.59 67.05c-1.37-1.31-4.29-3.04-9.14-2.13-4.86 0.91-6.95 3.59-7.75 5.3-0.35 0.76-0.09 1.51 0.33 1.91 0.39 0.38 1.37 0.61 2.31 0.06s2.7-1.99 5.98-2.63c3.29-0.59 5.45 0.11 6.53 0.28 1.07 0.17 1.9-0.4 2.13-0.89 0.24-0.52 0.21-1.32-0.39-1.9z",
          fill: "#6D4C41"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m12.55 79.9c0.58 0.08 1.01 1.53 0.5 4.09-0.61 3.09-2.76 5.43-4.71 6.39-2.44 1.21-7.28 2.04-11.14-0.65-4.43-3.09-3.12-5.65-1.52-5.07 1.63 0.6 4.58 1.23 7.01 1.08 2.53-0.16 5.26-1.38 7.02-3 1.3-1.19 2.21-2.92 2.84-2.84z",
        clipPath: "url(#b)",
        fill: "#444"
      }),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", {
            id: "m",
            d:
              "m-28.03 118.06v-64.53c0-21.26 19.79-37.44 41.05-37.44h6.18c21.26 0 40.82 16.18 40.82 37.44v64.2l-88.05 0.33z"
          })
        ),
        _react2.default.createElement(
          "clipPath",
          {
            id: "l"
          },
          _react2.default.createElement("use", {
            xlinkHref: "#m"
          })
        ),
        _react2.default.createElement(
          "g",
          {
            clipPath: "url(#l)"
          },
          _react2.default.createElement(
            "radialGradient",
            {
              id: "k",
              cx: 43.529,
              cy: 6.0794,
              r: 49.949,
              gradientTransform: "matrix(.9637 0 0 1 -25.826 0)",
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
              "m63.65 60.11s1.28-44.62-47.43-44.62-47.63 44.62-47.63 44.62 0.42 57.05 4.01 64.47 9.03 7.16 9.03 7.16-2.54-33.29-2.84-48.97c-0.07-3.66-1.18-17.22 6.47-18.94 28.05-6.3 43.92-21.18 43.92-21.18 4.13 9.01 17.03 17.8 21.67 21.15 3.81 2.74 3.27 14.05 3.2 18.86l-3.82 49s5.88 0.47 9.59-7.08c3.72-7.55 3.83-64.47 3.83-64.47z",
            fill: "url(#k)"
          })
        )
      ),
      _react2.default.createElement("path", {
        d:
          "m27.43 93.27c-2.84 0.21-2.82-1.48-3.75-0.45-1.81 2-2.21 3.31-1.86 3.95 0.53 0.97 1.53 0.97 4.44 0.35s5.9-1.87 5.99-2.97c0.06-0.74-0.11-1.99-1.18-3.24-0.53-0.61-0.81 2.15-3.64 2.36z",
        clipPath: "url(#b)",
        fill: "#E59600"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "j",
          cx: 34.412,
          cy: 101.83,
          r: 9.3801,
          gradientTransform: "matrix(.7326 -.1212 .0816 .6179 -2.957 43.89)",
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
          "m26.19 100c0.22-0.06 5.9-1.97 7.22 0.96 1.2 2.66-3.44 3.95-3.44 3.95s4.53-0.9 5.21 2.39c0.69 3.28-6.45 4.78-6.45 4.78",
        clipPath: "url(#b)",
        fill: "none",
        stroke: "url(#j)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)"
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
          "m44.79 7h0.06c0.15 0 0.3 0.01 0.45 0.01 0.13 0 0.26 0 0.42 0.01 2.58 0.04 5.21 0.61 7.79 1.69 1.73 0.73 3.11 1.71 4.71 2.85 0.83 0.59 1.69 1.2 2.64 1.81 0.98 0.62 2.14 0.95 3.35 0.95s2.37-0.33 3.35-0.95c0.94-0.6 1.79-1.2 2.61-1.79 1.61-1.15 3-2.14 4.73-2.87 2.59-1.08 5.21-1.65 7.83-1.69 0.13 0 0.26-0.01 0.39-0.01 0.15 0 0.3 0 0.45-0.01h0.06c6.74 0 12.24 3.82 15.09 10.47 1.16 2.72 1.16 7.16 0.67 10.12-0.48 2.81-1.63 5.55-3.54 8.37-4.23 6.3-18.27 20.38-26.67 28.8-1.69 1.69-3.16 3.17-4.31 4.34-0.23 0.24-0.5 0.29-0.68 0.29s-0.44-0.05-0.68-0.29c-1.16-1.17-2.64-2.66-4.33-4.36-8.39-8.41-22.42-22.48-26.65-28.78-1.91-2.86-3.06-5.59-3.53-8.36-0.5-2.98-0.5-7.42 0.67-10.14 2.88-6.64 8.38-10.46 15.12-10.46m38.86-3h-0.11c-0.3 0.01-0.58 0.01-0.88 0.02-3.08 0.05-6.07 0.74-8.9 1.92-3.03 1.27-5.11 3.18-7.8 4.89-0.51 0.32-1.12 0.48-1.74 0.48s-1.24-0.16-1.74-0.48c-2.7-1.71-4.77-3.62-7.8-4.89-2.83-1.18-5.82-1.87-8.9-1.92-0.29-0.01-0.59-0.01-0.88-0.02h-0.11c-7.83 0-14.51 4.48-17.85 12.29-1.42 3.32-1.45 8.32-0.87 11.81 0.58 3.47 2.04 6.61 3.99 9.54 5.26 7.82 24.32 26.44 31.33 33.57 0.77 0.79 1.79 1.18 2.81 1.18s2.04-0.39 2.81-1.18c7.01-7.13 26.08-25.75 31.33-33.57 1.97-2.92 3.41-6.06 4-9.54 0.58-3.49 0.56-8.49-0.87-11.81-3.32-7.81-10-12.29-17.82-12.29z",
        fill: "#D92E67"
      })
    )
  );
}

exports.default = Woman;
