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

function Ramen(props) {
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
        "m113.9 64.16c-0.03-0.03-0.07-0.06-0.1-0.09 0.26-1.13 0.43-2.79-0.61-3.74-1.45-1.33-4.14-1.11-5.27 0.11-0.09 0.1-0.17 0.21-0.25 0.32-0.17 0.11-0.32 0.24-0.45 0.38-0.2 0.22-0.35 0.47-0.47 0.73-0.66 0.07-1.26 0.35-1.71 0.84-0.08 0.09-0.14 0.19-0.21 0.29-0.18 0.12-0.34 0.25-0.49 0.41-1.13 1.23-0.86 3.3 0.59 4.64 1.13 1.03 2.64 1.32 3.78 0.82 0.12 0.15 0.26 0.3 0.41 0.44 1.45 1.33 3.95 0.83 5.08-0.4 0.08-0.09 0.15-0.18 0.22-0.27 0.18-0.13 0.34-0.27 0.48-0.42 1.13-1.25 0.46-2.73-1-4.06z",
      fill: "#346A34"
    }),
    _react2.default.createElement("path", {
      d:
        "m103.17 61.08c-0.04 0.02-0.07 0.05-0.11 0.08-1.01-0.49-2.37-0.38-3.5 0.39-1.57 1.08-2.11 3.03-1.2 4.36 0.29 0.43 0.7 0.74 1.18 0.93-0.22 0.79-0.13 1.61 0.33 2.27 0.91 1.33 2.92 1.53 4.5 0.46 1.22-0.84 1.82-2.2 1.6-3.38 0.17-0.08 0.34-0.18 0.5-0.29 1.57-1.08 2.11-3.03 1.2-4.36-0.91-1.34-2.93-1.54-4.5-0.46z",
      fill: "#568B3E"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "q",
        x1: 101.82,
        x2: 112.46,
        y1: 60.491,
        y2: 60.491,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8BC249",
        offset: 0.225
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.9398
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m111.02 60.03c-0.03-0.03-0.07-0.05-0.11-0.08 0.17-1.11 0.13-2.7-0.94-3.55-1.49-1.19-3.51-1.14-4.52 0.12-0.32 0.41-0.96 1.21-1.01 1.72-0.82 0.02-1.58 0.35-2.08 0.98-1.01 1.26-0.61 3.24 0.88 4.43 1.16 0.92 2.63 1.09 3.7 0.54 0.13 0.14 0.27 0.27 0.42 0.39 1.49 1.19 3.51 1.14 4.52-0.12 1.03-1.26 0.64-3.24-0.86-4.43z",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "g",
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
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 41.276,
        cy: 54.858,
        r: 77.502,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.3451
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.8524
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.04,
      cy: 57.16,
      rx: 60,
      ry: 20.17,
      clipPath: "url(#a)",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 49.88,
        cy: 120.48,
        r: 18.653,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9D9D9D",
        offset: 0.884
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 115.58,
      rx: 25,
      ry: 8.42,
      clipPath: "url(#a)",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 109.17c14.88 0 23 4.24 23 6.42 0 1.02-1.84 2.67-5.96 4.06-4.52 1.51-10.57 2.35-17.04 2.35-14.88 0-23-4.24-23-6.42 0-1.02 1.84-2.67 5.96-4.06 4.52-1.52 10.57-2.35 17.04-2.35m0-2c-13.81 0-25 3.77-25 8.42s11.19 8.41 25 8.41 25-3.77 25-8.42-11.19-8.41-25-8.41z",
        fill: "#434343"
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
        _react2.default.createElement("ellipse", {
          id: "d",
          cx: 64.04,
          cy: 57.16,
          rx: 60,
          ry: 20.17
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "as"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#d"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ar",
          cx: 64.484,
          cy: 63.611,
          r: 55.11,
          gradientTransform: "matrix(1 0 0 .3331 0 42.423)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F78C1E",
          offset: 0.0785
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F9A01B",
          offset: 0.9285
        })
      ),
      _react2.default.createElement("ellipse", {
        cx: 64.04,
        cy: 64.5,
        rx: 53.06,
        ry: 17.84,
        clipPath: "url(#as)",
        fill: "url(#ar)"
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
        _react2.default.createElement("ellipse", {
          id: "aq",
          cx: 64.04,
          cy: 64.5,
          rx: 44.48,
          ry: 14.95
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#aq"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m27.21 54.77c20.44-3.81 47.48 2.98 60.31 20.37 0.56 0.76 2.44 0.25 1.76-0.68-13.32-18.05-41.29-25.12-62.53-21.16-1.29 0.24-0.66 1.68 0.46 1.47z",
          fill: "#FECC81"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m23.89 57.43c17-3.45 43.02 1.72 49.02 20.6 0.29 0.91 2.27 0.71 1.94-0.31-6.3-19.81-33.55-25.39-51.43-21.75-1.28 0.26-0.66 1.69 0.47 1.46z",
          fill: "#FECC81"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m35.62 52.47c10.79-1.94 22.24-0.86 32.85 1.65 11.84 2.8 24.35 8.01 31.59 18.27 0.58 0.82 2.33-0.15 1.76-0.95-7.02-9.94-18.68-15.26-30.13-18.3-11.44-3.04-24.06-4.39-35.8-2.28-0.99 0.17-1.55 1.84-0.27 1.61z",
          fill: "#FECC81"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m41.29 51.37c21.71-4.14 51.49 1.15 66.19 19.01 0.68 0.83 2.14-0.49 1.55-1.22-15.1-18.36-45.29-23.82-67.64-19.56-0.95 0.18-1.32 2-0.1 1.77z",
          fill: "#FCB64E"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m39.53 55.92c-12.47 0.2-24.41 9.57-24.6 22.49-0.02 1.25 1.7 0.55 1.72-0.42 0.18-11.77 11.07-20.08 22.37-20.26 0.93-0.01 1.66-1.82 0.51-1.81z",
          fill: "#FECC81"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m50.65 57.14c-11.37 1.38-30.86 10.33-30.21 24.11 0.06 1.25 1.76 0.56 1.72-0.42-0.6-12.6 18.04-20.67 28.41-21.92 0.96-0.12 1.31-1.92 0.08-1.77z",
          fill: "#FECC81"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m57.82 61.82c-11.65 0.16-30.54 9.48-29.88 23.16 0.06 1.25 1.76 0.56 1.72-0.42-0.6-12.4 17.07-20.79 27.65-20.93 0.94-0.01 1.66-1.82 0.51-1.81z",
          fill: "#FECC81"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m63.18 66.61c-11.21 1.34-28.8 9.47-28.13 22.93 0.06 1.25 1.77 0.56 1.72-0.42-0.63-12.36 16.08-19.52 26.33-20.75 0.96-0.11 1.31-1.91 0.08-1.76z",
          fill: "#FCB64E"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m68.55 71.22c-11.21 1.34-28.8 9.47-28.13 22.93 0.06 1.25 1.77 0.56 1.72-0.42-0.62-12.36 16.09-19.52 26.34-20.75 0.96-0.11 1.31-1.91 0.07-1.76z",
          fill: "#FCB64E"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m10.9 64.38c-0.63-1.82-0.19-3.53-0.19-3.53s3.34-4.1 10.67-4.79c5.85-0.55 15.92 0.49 18.47 4.56 0.56 0.89-0.11 4.03-0.77 4.66-4.84 4.56-8.31 6.05-17.25 5.8-7.6-0.21-9.16-1.58-10.93-6.7z",
        fill: "#CDA997"
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
          id: "ap",
          cx: 19.456,
          cy: 57.576,
          r: 25.495,
          gradientTransform: "matrix(.938 .1642 -.3441 .5484 22.428 22.079)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFF3E1",
          offset: 0.4485
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFE0B2",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m10.68 61.32c-0.8-3.47 3.96-6.55 11.11-6.92s17.77 2.15 17.95 5.67-10.03 7.21-17.14 7.03c-7.57-0.19-11.19-2.64-11.92-5.78z",
        fill: "url(#ap)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ao",
          cx: 23.552,
          cy: 63.513,
          r: 7.2607,
          gradientTransform: "matrix(.938 .1642 -.3441 .5484 22.428 22.079)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F36E21",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FAAA43",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m15.29 60.76c-0.11-2.16 2.43-4.02 6.81-4.25s8.32 1.09 8.43 3.25-3.54 4.31-7.93 4.54-7.2-1.38-7.31-3.54z",
        fill: "url(#ao)"
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
          id: "an",
          cx: 74.112,
          cy: 53.501,
          r: 19.783,
          gradientTransform: "matrix(.9454 -.326 .1706 .4948 -5.1078 50.92)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#733619",
          offset: 0.1407
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 0.9247
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m90.21 46.93c17.1 6.36-3.69 16.63-17.22 16.32-8.45-0.19-15.22-2.03-12.09-6.43 3.46-4.85 21.98-12.61 29.31-9.89z",
        fill: "url(#an)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "am",
          cx: 73.976,
          cy: 52.55,
          r: 19.783,
          gradientTransform: "matrix(.9454 -.326 .1706 .4948 -4.9105 50.39)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BB5B27",
          offset: 0.3514
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m90.12 45.98c17.1 6.36-3.69 16.63-17.22 16.32-8.45-0.19-15.22-2.03-12.09-6.43 3.45-4.86 21.98-12.62 29.31-9.89z",
        fill: "url(#am)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "al",
          x1: 85.989,
          x2: 75.63,
          y1: 42.302,
          y2: 60.35,
          gradientTransform: "matrix(.999 .0445 -.0445 .999 2.4241 -3.5077)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#C55833",
          offset: 0.1326
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CF6947",
          offset: 0.1631
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65935",
          offset: 0.1954
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.4201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.4302
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C3532E",
          offset: 0.4771
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65A35",
          offset: 0.6515
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.7114
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.7948
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 0.9201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D06C4B",
          offset: 0.9663
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m89.95 46.83c15.53 5.78-4.19 14.78-16.49 14.5-7.68-0.17-13.96-1.39-11.12-5.39 3.14-4.41 20.95-11.59 27.61-9.11z",
        fill: "url(#al)"
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
          id: "ak",
          cx: 85.681,
          cy: 61.515,
          r: 19.782,
          gradientTransform: "matrix(.9306 -.3662 .1917 .4871 -4.4091 61.366)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#733619",
          offset: 0.1407
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 0.9247
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m102.95 52.97c17.36 5.62-2.97 16.77-16.51 17.04-8.45 0.17-15.29-1.38-12.35-5.91 3.25-4.99 21.42-13.54 28.86-11.13z",
        fill: "url(#ak)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "aj",
          cx: 85.545,
          cy: 60.564,
          r: 19.782,
          gradientTransform: "matrix(.9306 -.3662 .1917 .4871 -4.2346 60.828)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BB5B27",
          offset: 0.3514
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m102.82 52.02c17.36 5.62-2.97 16.77-16.51 17.04-8.45 0.17-15.29-1.38-12.35-5.91 3.24-4.99 21.42-13.54 28.86-11.13z",
        fill: "url(#aj)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "ai",
          x1: 97.558,
          x2: 87.199,
          y1: 50.316,
          y2: 68.364,
          gradientTransform: "matrix(1 .0016389 -.0016389 1 1.5313 -1.6999)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#C55833",
          offset: 0.1326
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CF6947",
          offset: 0.1631
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65935",
          offset: 0.1954
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.4201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.4302
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C3532E",
          offset: 0.4771
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65A35",
          offset: 0.6515
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.7114
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.7948
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 0.9201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D06C4B",
          offset: 0.9663
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m102.68 52.88c15.76 5.1-3.56 14.95-15.86 15.19-7.68 0.15-14.01-0.79-11.34-4.91 2.96-4.54 20.45-12.47 27.2-10.28z",
        fill: "url(#ai)"
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
          id: "ah",
          cx: 94.421,
          cy: 64.375,
          r: 19.783,
          gradientTransform: "matrix(.9091 -.4167 .2181 .4758 -4.9414 74.261)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#733619",
          offset: 0.1407
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 0.9247
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m110.37 57.71c17.64 4.66-2.05 16.91-15.55 17.92-8.43 0.63-15.35-0.53-12.66-5.22 2.97-5.17 20.65-14.7 28.21-12.7z",
        fill: "url(#ah)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ag",
          cx: 94.285,
          cy: 63.423,
          r: 19.783,
          gradientTransform: "matrix(.9091 -.4167 .2181 .4758 -4.7968 73.714)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BB5B27",
          offset: 0.6486
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m110.18 56.76c17.64 4.66-2.05 16.91-15.55 17.92-8.43 0.63-15.35-0.53-12.66-5.22 2.97-5.16 20.65-14.69 28.21-12.7z",
        fill: "url(#ag)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "af",
          x1: 115.72,
          x2: 85.818,
          y1: 59.468,
          y2: 72.351,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#C55833",
          offset: 0.1326
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CF6947",
          offset: 0.1631
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65935",
          offset: 0.1954
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.4201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.4302
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C3532E",
          offset: 0.4771
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65A35",
          offset: 0.6515
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.7114
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.7948
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 0.9201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D06C4B",
          offset: 0.9663
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m110.09 57.63c16.02 4.23-2.73 15.12-15 16.04-7.66 0.58-14.03-0.02-11.59-4.28 2.7-4.7 19.72-13.58 26.59-11.76z",
        fill: "url(#af)"
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
          id: "ae",
          cx: 82.685,
          cy: 55.074,
          r: 19.783,
          gradientTransform: "matrix(.9091 -.4167 .2181 .4758 -4.4589 65.134)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#733619",
          offset: 0.1407
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 0.9247
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m98.15 49.04c17.64 4.66-2.05 16.91-15.55 17.92-8.43 0.63-15.35-0.53-12.66-5.22 2.97-5.16 20.65-14.69 28.21-12.7z",
        fill: "url(#ae)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ad",
          cx: 82.549,
          cy: 54.123,
          r: 19.783,
          gradientTransform: "matrix(.9091 -.4167 .2181 .4758 -4.3143 64.588)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BB5B27",
          offset: 0.3514
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m97.97 48.1c17.64 4.66-2.05 16.91-15.55 17.92-8.43 0.63-15.35-0.53-12.66-5.22 2.97-5.16 20.65-14.7 28.21-12.7z",
        fill: "url(#ad)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "ac",
          x1: 103.51,
          x2: 73.604,
          y1: 50.806,
          y2: 63.689,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#C55833",
          offset: 0.1326
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CF6947",
          offset: 0.1631
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65935",
          offset: 0.1954
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.4201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.4302
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C3532E",
          offset: 0.4771
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65A35",
          offset: 0.6515
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.7114
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.7948
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 0.9201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D06C4B",
          offset: 0.9663
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m97.88 48.96c16.02 4.23-2.73 15.12-15 16.04-7.66 0.58-14.03-0.02-11.59-4.28 2.69-4.69 19.72-13.57 26.59-11.76z",
        fill: "url(#ac)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.94 53.75s25.24 8.41 5.76 16.39c-12.31 5.04-27.24 11.51-65.1 7.75-7.76-0.77-27.9-1.99-21.48-7.97s32.77-15.72 38.31-16.39c3.74-0.45 0.37 2.9 0.66 4.43 0.53 2.79 2.39 4.07 7.97 2.44 12.84-3.76 6.88 0.97 13.51 1.33 16.6 0.88 20.37-7.98 20.37-7.98z",
      clipPath: "url(#a)",
      fill: "#F9A01B",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "ab",
          cx: 93.966,
          cy: 59.334,
          r: 19.783,
          gradientTransform: "matrix(.9673 -.2536 .1328 .5063 -4.2138 54.265)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#733619",
          offset: 0.1407
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 0.9247
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m111.11 55.41c16.57 7.63-4.93 16.3-18.41 14.97-8.41-0.83-15.02-3.17-11.57-7.32 3.82-4.58 22.88-10.92 29.98-7.65z",
        fill: "url(#ab)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "aa",
          cx: 93.83,
          cy: 58.383,
          r: 19.783,
          gradientTransform: "matrix(.9673 -.2536 .1328 .5063 -3.977 53.751)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BB5B27",
          offset: 0.3514
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D401E",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m111.09 54.45c16.57 7.63-4.93 16.3-18.41 14.97-8.41-0.83-15.02-3.17-11.57-7.32 3.82-4.58 22.88-10.92 29.98-7.65z",
        fill: "url(#aa)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "z",
          x1: 115,
          x2: 85.095,
          y1: 54.459,
          y2: 67.342,
          gradientTransform: "matrix(.985 .1725 -.1725 .985 12.201 -15.409)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#C55833",
          offset: 0.1326
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CF6947",
          offset: 0.1631
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65935",
          offset: 0.1954
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.4201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.4302
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C3532E",
          offset: 0.4771
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C65A35",
          offset: 0.6515
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D67456",
          offset: 0.7114
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55733",
          offset: 0.7948
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 0.9201
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D06C4B",
          offset: 0.9663
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C55732",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m110.86 55.28c15.05 6.93-5.3 14.42-17.54 13.21-7.64-0.75-13.82-2.44-10.68-6.22 3.46-4.15 21.76-9.96 28.22-6.99z",
        fill: "url(#z)"
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
          id: "y",
          cx: 26.517,
          cy: 71.65,
          r: 25.495,
          gradientTransform: "matrix(.9419 .2374 -.3343 .7322 23.878 5.4182)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFF3E1",
          offset: 0.4485
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFE0B2",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m14.79 70.02c-0.87-4.69 3.84-8.75 10.99-9.12 7.14-0.37 17.83 3.2 18.07 7.94 0.25 4.74-9.9 9.54-17.02 9.17-7.58-0.4-11.26-3.76-12.04-7.99z",
        fill: "url(#y)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "x",
          cx: 30.613,
          cy: 77.587,
          r: 7.2607,
          gradientTransform: "matrix(.9419 .2374 -.3343 .7322 23.878 5.4182)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F36E21",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FAAA43",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m19.39 69.34c-0.15-2.91 2.36-5.37 6.74-5.6s8.34 1.62 8.49 4.53-3.47 5.74-7.85 5.97-7.23-1.99-7.38-4.9z",
        fill: "url(#x)"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "w",
        cx: 45.305,
        cy: 73.849,
        r: 13.847,
        gradientTransform: "matrix(.9995 .0309 -.0183 .5914 1.5861 25.954)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0.1977
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6D4D42",
        offset: 0.8299
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.62 75.69c-0.23 4.63-6.58 8.08-14.19 7.71s-13.6-4.42-13.38-9.05c0.23-4.63 6.58-8.08 14.19-7.71s13.61 4.43 13.38 9.05z",
      clipPath: "url(#a)",
      fill: "url(#w)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m91.33 66.52c-0.05 0.03-0.09 0.07-0.14 0.11-1.37-0.66-3.2-0.52-4.72 0.53-2.13 1.45-2.85 4.09-1.63 5.88 0.4 0.58 0.95 1 1.59 1.25-0.29 1.07-0.17 2.17 0.44 3.07 1.23 1.79 3.95 2.07 6.07 0.62 1.65-1.13 2.45-2.96 2.16-4.57 0.23-0.11 0.46-0.24 0.68-0.39 2.13-1.45 2.85-4.09 1.63-5.88-1.24-1.8-3.95-2.07-6.08-0.62z",
        fill: "#568B3E"
      }),
      _react2.default.createElement("path", {
        d:
          "m105.4 69.2c-0.06-0.02-0.11-0.03-0.17-0.05-0.27-1.49-1.47-2.88-3.22-3.5-2.43-0.86-4.98 0.11-5.71 2.16-0.23 0.66-0.24 1.36-0.07 2.02-1.03 0.39-1.85 1.15-2.21 2.17-0.72 2.05 0.66 4.41 3.09 5.26 1.88 0.66 3.84 0.23 4.96-0.96 0.23 0.12 0.46 0.23 0.72 0.31 2.43 0.86 4.98-0.11 5.71-2.16 0.71-2.04-0.67-4.39-3.1-5.25z",
        fill: "#346A34"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "v",
          cx: 95.155,
          cy: 64.885,
          r: 6.8341,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#8BC249",
          offset: 0.3976
        }),
        _react2.default.createElement("stop", {
          stopColor: "#7CB342",
          offset: 0.9398
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m99.13 62.42c-0.06-0.02-0.11-0.03-0.17-0.04-0.33-1.48-0.78-2.89-2.55-3.43-2.46-0.75-4.98 0.32-5.61 2.4-0.21 0.67-1 1.43-0.8 2.09-1.02 0.43-1.8 1.22-2.12 2.26-0.64 2.08 0.84 4.38 3.31 5.13 1.91 0.59 3.85 0.07 4.92-1.16 0.23 0.11 0.47 0.21 0.73 0.28 2.46 0.75 4.98-0.32 5.61-2.4 0.62-2.08-0.86-4.37-3.32-5.13z",
        fill: "url(#v)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m108.87 59.89c-0.05 0.03-0.09 0.07-0.14 0.11-1.37-0.66-3.2-0.52-4.72 0.53-2.13 1.45-2.85 4.09-1.63 5.88 0.4 0.58 0.95 1 1.59 1.25-0.29 1.07-0.17 2.17 0.44 3.07 1.23 1.79 3.95 2.07 6.07 0.62 1.65-1.13 2.45-2.96 2.16-4.57 0.23-0.11 0.46-0.24 0.68-0.39 2.13-1.45 2.85-4.09 1.63-5.88-1.24-1.8-3.95-2.08-6.08-0.62z",
        fill: "#568B3E"
      }),
      _react2.default.createElement("path", {
        d:
          "m116.93 59.4c-0.06 0.02-0.11 0.04-0.17 0.06-1.12-1.02-2.92-1.4-4.68-0.83-2.45 0.79-3.89 3.12-3.22 5.18 0.22 0.67 0.63 1.23 1.17 1.65-0.58 0.94-0.78 2.04-0.44 3.07 0.67 2.07 3.2 3.1 5.65 2.3 1.9-0.62 3.19-2.15 3.36-3.77 0.25-0.04 0.51-0.1 0.76-0.18 2.45-0.79 3.89-3.12 3.22-5.18-0.67-2.07-3.2-3.1-5.65-2.3z",
        fill: "#346A34"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "u",
          cx: 112.69,
          cy: 58.255,
          r: 6.8341,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#8BC249",
          offset: 0.3976
        }),
        _react2.default.createElement("stop", {
          stopColor: "#7CB342",
          offset: 0.9398
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m116.67 55.79c-0.06-0.02-0.11-0.03-0.17-0.04-0.33-1.48-0.78-2.89-2.55-3.43-2.46-0.75-4.98 0.32-5.61 2.4-0.21 0.67-1 1.43-0.8 2.09-1.02 0.43-1.8 1.22-2.12 2.26-0.64 2.08 0.84 4.38 3.31 5.13 1.91 0.59 3.85 0.07 4.92-1.16 0.23 0.11 0.47 0.21 0.73 0.28 2.46 0.75 4.98-0.32 5.61-2.4 0.62-2.08-0.86-4.37-3.32-5.13z",
        fill: "url(#u)"
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
          id: "t",
          cx: 71.066,
          cy: 66.051,
          r: 13.847,
          gradientTransform: "matrix(.9991 -.0417 .0247 .5912 -.9491 34.012)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#8D6E63",
          offset: 0.1977
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6D4D42",
          offset: 0.8299
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m86.09 73.72c0.11 4.63-5.97 8.53-13.59 8.72s-13.89-3.42-14-8.05 5.97-8.53 13.59-8.72c7.62-0.18 13.89 3.42 14 8.05z",
        fill: "url(#t)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "s",
          cx: 71.581,
          cy: 67.055,
          r: 5.98,
          gradientTransform: "matrix(.9795 .2014 -.2014 .9795 15.382 -8.9185)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FECC81",
          offset: 0.1134
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FAA629",
          offset: 0.8178
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m78.58 71.48-4.95 1.11c-0.13 0.01-0.23 0.11-0.26 0.23l-1.01 4.21c-0.07 0.29-0.47 0.31-0.57 0.03l-1.64-4.4c-0.04-0.1-0.13-0.18-0.24-0.19l-4.68-0.59c-0.34-0.04-0.35-0.53-0.02-0.59l4.87-0.91c0.11-0.02 0.2-0.11 0.23-0.22l0.8-3.01c0.07-0.27 0.43-0.3 0.56-0.06l1.6 3.19c0.04 0.09 0.12 0.15 0.22 0.16l5.13 0.19c0.48 0.06 0.46 0.79-0.04 0.85z",
        fill: "url(#s)"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 45.82,
        cy: 74.853,
        r: 5.98,
        gradientTransform: "matrix(.9623 .272 -.272 .9623 22.01 -12.358)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FECC81",
        offset: 0.1134
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAA629",
        offset: 0.8178
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m52.29 72.91-5.02 0.74c-0.13 0.01-0.24 0.09-0.27 0.21l-1.32 4.12c-0.09 0.28-0.49 0.28-0.57-0.01l-1.32-4.51c-0.03-0.11-0.12-0.19-0.23-0.21l-4.62-0.93c-0.34-0.07-0.31-0.55 0.03-0.59l4.92-0.56c0.11-0.01 0.21-0.09 0.25-0.2l1.02-2.95c0.09-0.26 0.46-0.27 0.56-0.02l1.36 3.29c0.04 0.09 0.11 0.15 0.21 0.18l5.1 0.56c0.48 0.14 0.41 0.86-0.1 0.88z",
      clipPath: "url(#a)",
      fill: "url(#r)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "p",
          cx: 44.896,
          cy: 81.255,
          r: 71.601,
          gradientTransform: "matrix(.9943 .1071 -.0752 .6984 6.3702 19.696)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F5F5F5",
          offset: 0.2291
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 0.8173
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.9733
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64.04 77.33c-30.85 0-56.24-7.83-59.61-17.89-0.12 0.43-0.17 0.89-0.14 1.36 0.86 11.64 7.56 57.53 59.87 57.53 52.32 0 59.02-45.9 59.87-57.53 0.05-0.61-0.05-1.21-0.27-1.76-2.8 10.26-28.46 18.29-59.72 18.29z",
        fill: "url(#p)"
      }),
      _react2.default.createElement("circle", {
        cx: 84.15,
        cy: 88.51,
        r: 2,
        fill: "#A93023"
      }),
      _react2.default.createElement("circle", {
        cx: 43.99,
        cy: 88.35,
        r: 2,
        fill: "#BE3A26"
      }),
      _react2.default.createElement("circle", {
        cx: 63.99,
        cy: 89.43,
        r: 2,
        fill: "#BE3A26"
      }),
      _react2.default.createElement("ellipse", {
        cx: 100.95,
        cy: 85.8,
        rx: 1.5,
        ry: 2,
        fill: "#8D372A"
      }),
      _react2.default.createElement("ellipse", {
        cx: 26.85,
        cy: 85.64,
        rx: 1.5,
        ry: 2,
        fill: "#BE3A26"
      }),
      _react2.default.createElement("ellipse", {
        cx: 114.8,
        cy: 81.18,
        rx: 1,
        ry: 2,
        fill: "#8D372A"
      }),
      _react2.default.createElement("ellipse", {
        cx: 12.76,
        cy: 81.02,
        rx: 1,
        ry: 2,
        fill: "#BE3A26"
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
        _react2.default.createElement("path", {
          id: "o",
          d:
            "m64.04 77.33c-30.85 0-56.24-7.83-59.61-17.89-0.12 0.43-0.17 0.89-0.14 1.36 0.86 11.64 7.56 57.53 59.87 57.53 52.32 0 59.02-45.9 59.87-57.53 0.05-0.61-0.05-1.21-0.27-1.76-2.8 10.26-28.46 18.29-59.72 18.29z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "c"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#o"
        })
      ),
      _react2.default.createElement("path", {
        d: "m5.5 72.58s14 13 59.01 13 58.66-13 58.66-13",
        clipPath: "url(#c)",
        fill: "none",
        stroke: "#BE3A26",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement("path", {
        d: "m5.5 80.08s14 13 59.01 13 58.66-13 58.66-13",
        clipPath: "url(#c)",
        fill: "none",
        stroke: "#BE3A26",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "n",
        cx: 41.198,
        cy: 55.904,
        r: 77.341,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.3451
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.8524
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.92 38.08c-33.07 0-59.88 9.01-59.88 20.13s26.81 20.13 59.88 20.13 59.88-9.01 59.88-20.13c-0.01-11.12-26.82-20.13-59.88-20.13zm0 37.5c-31.25 0-56.58-8.02-56.58-17.91s25.33-17.91 56.58-17.91 56.58 8.02 56.58 17.91-25.33 17.91-56.58 17.91z",
      clipPath: "url(#a)",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.04 39.99c15.71 0 30.44 2.04 41.47 5.75 9.58 3.22 15.53 7.6 15.53 11.42 0 0.17 0 0.48 0.01 0.84 0.01 0.67 0.02 2.23 0 2.58-0.4 5.41-2.19 19.32-10.17 31.73-9.83 15.28-25.55 23.03-46.71 23.03s-36.88-7.75-46.71-23.03c-7.99-12.41-9.78-26.32-10.18-31.73-0.01-0.1-0.02-0.29-0.04-0.54-0.05-0.65-0.2-2.39-0.2-2.88 0-3.82 5.95-8.2 15.53-11.42 11.03-3.7 25.76-5.75 41.47-5.75m0-3c-33.14 0-60 9.03-60 20.17 0 0.77 0.22 3.17 0.25 3.64 0.86 11.64 7.56 57.53 59.87 57.53 52.32 0 59.02-45.9 59.87-57.53 0.05-0.61 0-3 0-3.64 0.01-11.14-26.85-20.17-59.99-20.17z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 86.03,
        x2: 86.03,
        y1: 5.2044,
        y2: 13.726,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795649",
        offset: 0.3477
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D4137",
        offset: 0.8524
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m128.07 12.31-81.02 0.37c-1.66 0.01-3.02-1.32-3.05-2.98s1.29-3.04 2.95-3.09l80.98-2.3 0.14 8z",
      clipPath: "url(#a)",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m125.96 6.36 0.07 3.95-79 0.37c-0.56 0-1.03-0.46-1.04-1.02s0.45-1.04 1.01-1.05l78.96-2.25m1.96-2.05-80.98 2.3c-1.66 0.05-2.98 1.43-2.95 3.09s1.38 2.98 3.04 2.98h0.01l81.02-0.37-0.14-8z",
        fill: "#434343"
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
          id: "l",
          x1: 52.343,
          x2: 52.343,
          y1: 8.1425,
          y2: 55.678,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FECC81",
          offset: 0.2141
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FAA629",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m54.58 5.9c-4.21-1.32-5.27 2.11-5.27 6.85 0 21.59 2.37 36.21-0.25 52.74-0.05 0.29 2.01 1.42 3.68-0.33 2.9-3.03 0.79-44.37 0.79-55.17 0-3.03 2.11-3.82 2.11-3.82l-1.06-0.27z",
        fill: "url(#l)"
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
          id: "k",
          x1: 63.228,
          x2: 63.228,
          y1: 25.26,
          y2: 57.537,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FECC81",
          offset: 0.5446
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FAA629",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m62.46 5.55c-1.49 1.78-0.98 5.95-1.04 8.03-0.18 5.9-0.13 11.82-0.08 17.72 0.09 10.36 0.46 20.71 0.5 31.07 0.01 1.76 2.92 1.05 2.91-0.62-0.03-9.3-0.36-18.59-0.46-27.89-0.07-5.94-0.12-11.89 0-17.84 0.04-1.87-0.51-7.82 0.54-9.07 1.24-1.49-1.24-2.74-2.37-1.4z",
        fill: "url(#k)"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 85.964,
        x2: 85.964,
        y1: 17.65,
        y2: 25.542,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795649",
        offset: 0.3477
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D4137",
        offset: 0.8524
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m128 18.86-81.02-0.34c-1.66-0.01-3.02 1.32-3.05 2.98s1.29 3.04 2.95 3.09l80.98 2.27 0.14-8z",
      clipPath: "url(#a)",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m46.96 18.52v2l79 0.33-0.07 3.95-78.96-2.21c-0.57-0.02-1.02-0.49-1.01-1.05s0.47-1.02 1.04-1.02v-2m0 0c-1.65 0-3.01 1.33-3.04 2.98-0.03 1.66 1.29 3.04 2.95 3.09l80.98 2.27 0.14-8-81.02-0.34h-0.01z",
        fill: "#434343"
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
          x1: 67,
          x2: 67,
          y1: 25.26,
          y2: 57.537,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FECC81",
          offset: 0.6169
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FAA629",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64.7 7.42c1.36 2.15 0.96 6.04 1.01 8.43 0.12 5.7-0.09 11.42-0.29 17.11-0.38 11-1.04 22.03-0.86 33.04 0.03 2.02 3.77 0.63 3.74-1.23-0.2-12 0.62-24.01 0.97-35.99 0.15-5.01 0.3-10.04 0.15-15.06-0.08-2.51 0.16-6.05-1.25-8.28-1.04-1.66-4.51 0.33-3.47 1.98z",
        fill: "url(#i)"
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
          id: "h",
          x1: 58.014,
          x2: 58.014,
          y1: 17.36,
          y2: 60.856,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FECC81",
          offset: 0.2141
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FAA629",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m58.66 5.38c-4.48 1.45-3.29 18.83-3.16 27.78 0.13 9.02-1.11 22.97-1.32 32-0.03 1.5 3.66 1.49 4.08-0.13 1.98-7.64-1.7-57.08 2.64-57.77 1.93-0.31 0.53-2-1.06-1.74l-1.18-0.14z",
        fill: "url(#h)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m18.77 41.13c-1.06 1.09-2.86-0.08-2.29-1.49 1.86-4.59 3.18-10.72 0.53-16.35-3.36-7.15-0.39-11.6 2.34-13.95 0.92-0.79 2.31-0.1 2.3 1.11-0.03 2.54 0.84 6.95 4.42 14.47 2.31 4.83-2.74 11.52-7.3 16.21z",
      fill: "#E1F3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m36.61 50.47c-1.06 1.09-2.86-0.08-2.29-1.49 1.86-4.59 3.18-10.72 0.53-16.35-3.36-7.15-0.39-11.6 2.34-13.95 0.92-0.79 2.31-0.1 2.3 1.11-0.03 2.54 0.84 6.95 4.42 14.47 2.31 4.83-2.74 11.51-7.3 16.21z",
      fill: "#E1F3F7"
    })
  );
}

exports.default = Ramen;
