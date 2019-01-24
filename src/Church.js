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

function Church(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("polygon", {
      points: "120 76 7.96 76 19.96 36 107.99 36",
      fill: "#B71C1C"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.76 39 10.2 34h-103.97l10.2-34h83.57m2.23-3h-88.03l-12 40h112.04l-12.01-40z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "t",
        cx: 22.298,
        cy: 11.072,
        r: 21.528,
        gradientTransform: "matrix(1 0 0 .9997 0 .0222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DD3431",
        offset: 0.1914
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C82625",
        offset: 0.4858
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.6661
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.63 16.92h-2.5v-3.54c0-1.1-0.9-2-2-2s-2 0.9-2 2v3.54h-2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2h2.5v9.08c0 1.1 0.9 2 2 2s2-0.9 2-2v-9.08h2.5c1.1 0 2-0.9 2-2s-0.89-2-2-2z",
      fill: "url(#t)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: 104.16,
        cy: 11.072,
        r: 21.528,
        gradientTransform: "matrix(1 0 0 .9997 0 .0222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DD3431",
        offset: 0.1914
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C82625",
        offset: 0.4858
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.6661
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.49 16.92h-2.5v-3.54c0-1.1-0.9-2-2-2s-2 0.9-2 2v3.54h-2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2h2.5v9.08c0 1.1 0.9 2 2 2s2-0.9 2-2v-9.08h2.5c1.1 0 2-0.9 2-2s-0.89-2-2-2z",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("polygon", {
        id: "n",
        points: "120 76 8 76 20 36.01 108 36.01"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#n"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("polygon", {
        id: "i",
        points: "120 76 8 76 20 36.01 108 36.01"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#i"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 64.479,
        cy: 7.7305,
        r: 118.61,
        gradientTransform:
          "matrix(1.0287e-13 .9997 -.6157 6.3309e-14 69.239 -56.707)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.4769
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.6331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9C9C9",
        offset: 0.8982
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.98 8 35.97 60 35.97 124 91.99 124 91.99 60",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 63.646,
        cy: 1.4784,
        r: 64.919,
        gradientTransform: "matrix(1 0 0 .9997 0 .0222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E04341",
        offset: 0.2724
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.6292
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.22 66.74c-1.07 0-2.1-0.57-2.65-1.58l-26.96-50.2c-0.38-0.7-1.38-0.7-1.76 0l-26.46 49.2c-0.79 1.46-2.61 2.01-4.06 1.22-1.46-0.79-2.01-2.6-1.22-4.06l29.98-55.74c0.52-0.97 1.54-1.58 2.64-1.58s2.12 0.61 2.64 1.58l30.49 56.74c0.79 1.46 0.24 3.28-1.22 4.06-0.46 0.25-0.94 0.36-1.42 0.36z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 100,
        x2: 71.331,
        y1: 64.015,
        y2: 64.015,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.86 62.32-30.49-56.74c-0.46-0.85-1.29-1.42-2.23-1.55v119.97h27.84v-58.26c0.58 0.64 1.39 1.01 2.23 1.01 0.48 0 0.97-0.12 1.42-0.36 1.47-0.79 2.01-2.61 1.23-4.07z",
      fill: "url(#f)",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ac",
        x1: 24,
        x2: 52.736,
        y1: 64,
        y2: 64,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M63.73,4c-1.1,0-2.12,0.61-2.64,1.58L31.1,61.32 c-0.79,1.46-0.24,3.28,1.22,4.06c1.24,0.67,2.74,0.36,3.65-0.64V124h28.18V4.03C64.01,4.01,63.87,4,63.73,4z",
      fill: "url(#ac)",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M46.61,38.83L63.73,7h0l0,0l17.11,31.84h3.4L66.37,5.58C65.85,4.61,64.83,4,63.73,4 s-2.12,0.61-2.64,1.58L43.2,38.83H46.61z"
      }),
      _react2.default.createElement("polygon", {
        points:
          "88.99 120.67 88.99 121 38.97 121 38.97 120.67 35.97 120.67 35.97 124 91.99 124 91.99 120.67"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m90.65 106.31h-6.34c-0.52 0-0.95-0.46-0.95-1.03v-2.86c0-0.57 0.43-1.03 0.95-1.03h6.34c0.52 0 0.95 0.46 0.95 1.03v2.86c0 0.57-0.42 1.03-0.95 1.03z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m43.69 119.78h-4.89c-0.4 0-0.73-0.37-0.73-0.82v-2.3c0-0.45 0.33-0.82 0.73-0.82h4.89c0.4 0 0.73 0.37 0.73 0.82v2.3c0 0.45-0.33 0.82-0.73 0.82z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m53.86 92.44h-4.89c-0.4 0-0.73-0.37-0.73-0.82v-2.3c0-0.45 0.33-0.82 0.73-0.82h4.89c0.4 0 0.73 0.37 0.73 0.82v2.3c0 0.45-0.33 0.82-0.73 0.82z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m46.15 113.72h-8.38c-0.69 0-1.26-0.48-1.26-1.07v-3c0-0.59 0.56-1.07 1.26-1.07h8.38c0.69 0 1.26 0.48 1.26 1.07v3c-0.01 0.59-0.57 1.07-1.26 1.07z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m85.29 100.16h-6.78c-0.83 0-1.5-0.64-1.5-1.42v-2.27c0-0.79 0.67-1.42 1.5-1.42h6.78c0.83 0 1.5 0.64 1.5 1.42v2.27c0 0.79-0.67 1.42-1.5 1.42z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m79.54 117.22h-6.78c-0.83 0-1.5-0.64-1.5-1.42v-2.27c0-0.79 0.67-1.42 1.5-1.42h6.78c0.83 0 1.5 0.64 1.5 1.42v2.27c0 0.79-0.67 1.42-1.5 1.42z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m51.7 86.39h-6.78c-0.83 0-1.5-0.64-1.5-1.42v-2.27c0-0.79 0.67-1.42 1.5-1.42h6.78c0.83 0 1.5 0.64 1.5 1.42v2.27c0 0.78-0.67 1.42-1.5 1.42z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ab",
        cx: 22.799,
        cy: 31.144,
        r: 99.22,
        gradientTransform:
          "matrix(1.0287e-13 .9997 -.3938 4.0493e-14 35.063 8.3646)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.4531
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8E8E8",
        offset: 0.5979
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D8D8D8",
        offset: 0.7883
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "22.97 31 6.96 75 6.96 124 38.97 124 38.97 75",
      fill: "url(#ab)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aa",
        cx: 22.632,
        cy: 27.988,
        r: 49.032,
        gradientTransform: "matrix(1 0 0 .9997 0 .0222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E04341",
        offset: 0.4329
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M38.97,78c-1.23,0-2.38-0.76-2.82-1.98L23.91,42.36c-0.32-0.88-1.56-0.88-1.88,0 L9.78,76.03c-0.59,1.61-2.41,2.41-4,1.73c-1.49-0.63-2.14-2.42-1.58-3.94l15.95-43.84C20.58,28.79,21.7,28,22.97,28 s2.39,0.79,2.82,1.97l15.95,43.85c0.56,1.54-0.11,3.32-1.62,3.95C39.74,77.93,39.35,78,38.97,78z",
      fill: "url(#aa)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "z",
        cx: 104.87,
        cy: 31.144,
        r: 99.22,
        gradientTransform:
          "matrix(1.0287e-13 .9997 -.3938 4.0493e-14 117.13 -73.673)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.4531
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8E8E8",
        offset: 0.5979
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D8D8D8",
        offset: 0.7883
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "105.03 31 89.03 75 89.03 124 121.04 124 121.04 75",
      fill: "url(#z)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "y",
        cx: 104.7,
        cy: 27.988,
        r: 49.032,
        gradientTransform: "matrix(1 0 0 .9997 0 .0222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E04341",
        offset: 0.4329
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.04 78c-1.23 0-2.38-0.76-2.82-1.98l-12.25-33.66c-0.32-0.88-1.56-0.88-1.88 0l-12.24 33.67c-0.59 1.61-2.41 2.41-4 1.73-1.49-0.63-2.14-2.42-1.58-3.94l15.95-43.84c0.43-1.19 1.56-1.97 2.82-1.97s2.39 0.79 2.82 1.97l15.95 43.85c0.56 1.54-0.11 3.32-1.62 3.95-0.38 0.15-0.77 0.22-1.15 0.22z",
      fill: "url(#y)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m22.97 31 15.95 43.85c0.02 0.06 0.02 0.11 0.01 0.15h-2.96v46h-26.01v-43l-0.01-3h-2.94c-0.01-0.04-0.01-0.1 0.01-0.16l15.95-43.84m0-3c-1.26 0-2.39 0.79-2.82 1.97l-15.95 43.85c-0.55 1.52 0.09 3.31 1.58 3.94 0.39 0.16 0.79 0.24 1.18 0.24v46h32.01v-46c0.38 0 0.77-0.07 1.15-0.23 1.51-0.62 2.18-2.41 1.62-3.95l-15.95-43.85c-0.43-1.18-1.56-1.97-2.82-1.97z",
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
          "m105.03 31 15.95 43.85c0.02 0.06 0.02 0.11 0.01 0.15h-2.96v46h-26v-43l-0.01-3h-2.95c-0.01-0.04-0.01-0.1 0.01-0.15l15.95-43.85m0-3c-1.26 0-2.39 0.79-2.82 1.97l-15.95 43.85c-0.55 1.52 0.09 3.31 1.58 3.94 0.39 0.16 0.79 0.24 1.18 0.24v46h32.01v-46c0.38 0 0.77-0.07 1.15-0.23 1.51-0.62 2.18-2.41 1.62-3.95l-15.95-43.85c-0.43-1.18-1.56-1.97-2.82-1.97z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34.98 91.85h-5.31c-0.44 0-0.8-0.38-0.8-0.86v-2.4c0-0.47 0.36-0.86 0.8-0.86h5.31c0.44 0 0.8 0.38 0.8 0.86v2.4c0 0.47-0.36 0.86-0.8 0.86z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m87.96 93.28h-6.78c-0.56 0-1.02-0.51-1.02-1.14v-3.19c0-0.63 0.46-1.14 1.02-1.14h6.78c0.56 0 1.02 0.51 1.02 1.14v3.19c0 0.62-0.46 1.14-1.02 1.14z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m19.69 119.8h-4.89c-0.4 0-0.73-0.37-0.73-0.82v-2.3c0-0.45 0.33-0.82 0.73-0.82h4.89c0.4 0 0.73 0.37 0.73 0.82v2.3c0.01 0.45-0.32 0.82-0.73 0.82z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m17.29 114.15h-6.33c-0.52 0-0.95-0.5-0.95-1.12v-3.14c0-0.62 0.42-1.12 0.95-1.12h6.33c0.52 0 0.95 0.5 0.95 1.12v3.14c0 0.61-0.42 1.12-0.95 1.12z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m111.39 117.46h-4.89c-0.4 0-0.73-0.37-0.73-0.82v-2.3c0-0.45 0.33-0.82 0.73-0.82h4.89c0.4 0 0.73 0.37 0.73 0.82v2.3c0 0.45-0.32 0.82-0.73 0.82z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m115.99 111.81h-6.33c-0.52 0-0.95-0.5-0.95-1.12v-3.14c0-0.62 0.42-1.12 0.95-1.12h6.33c0.52 0 0.95 0.5 0.95 1.12v3.14c0 0.62-0.42 1.12-0.95 1.12z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d: "m75.98 124h-24v-16c0-6.63 5.37-12 12-12s12 5.37 12 12v16z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.98 58c0 8.84-7.17 16-16.01 16s-16.01-7.16-16.01-16 7.17-16 16.01-16c8.85 0 16.01 7.16 16.01 16z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m78.24 58c0 7.88-6.39 14.26-14.26 14.26-7.88 0-14.27-6.38-14.27-14.26s6.39-14.26 14.27-14.26 14.26 6.38 14.26 14.26z",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "x",
        cx: 63.979,
        cy: 57.998,
        r: 13.076,
        gradientTransform: "matrix(1 0 0 .9997 0 .0222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m77.06 58c0 7.22-5.85 13.07-13.08 13.07-7.22 0-13.08-5.85-13.08-13.07s5.85-13.07 13.08-13.07c7.22 0 13.08 5.85 13.08 13.07z",
      fill: "url(#x)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "w",
        d:
          "m30.38 90.55c-0.03-4.26-1.34-7.38-2.85-9.58-0.22-0.32-0.43-0.61-0.66-0.89-1.92-2.4-3.91-3.43-3.91-3.43s-1.99 1.03-3.91 3.43c-0.22 0.28-0.44 0.57-0.66 0.89-1.51 2.2-2.82 5.32-2.85 9.58h-0.01v13.9h14.84l0.01-13.9z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "e"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#w"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#e)"
      },
      _react2.default.createElement("polygon", {
        points: "20.92 84.25 22.97 84.25 22.9 80.27 20.92 80.27",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m18.42 80.76c-0.05 0.07-0.1 0.14-0.16 0.21-0.63 0.92-1.23 2.02-1.71 3.28h1.87v-3.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("path", {
        d: "m20.92 84.25v-3.98h-2.14c-0.12 0.16-0.24 0.32-0.36 0.49v3.5h2.5z",
        fill: "#00E5FF"
      }),
      _react2.default.createElement("path", {
        d:
          "m20.92 78.02c-0.61 0.52-1.31 1.2-1.99 2.07-0.05 0.06-0.09 0.13-0.14 0.19h2.14v-2.26z",
        fill: "#00BCD4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "23.05 88.74 20.92 88.74 18.42 88.74 18.42 93.23 20.92 93.23 23.14 93.23",
        fill: "#651FFF"
      }),
      _react2.default.createElement("polygon", {
        points: "20.92 84.25 20.92 88.74 23.05 88.74 22.97 84.25",
        fill: "#2196F3"
      }),
      _react2.default.createElement("rect", {
        x: 18.42,
        y: 97.72,
        width: 2.49,
        height: 3.98,
        fill: "#3F51B5"
      }),
      _react2.default.createElement("rect", {
        x: 18.42,
        y: 93.23,
        width: 2.49,
        height: 4.49,
        fill: "#4CAF50"
      }),
      _react2.default.createElement("path", {
        d: "m22.9 80.27-0.07-3.62s-0.82 0.43-1.91 1.36v2.26h1.98z",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "20.92 101.7 23.29 101.7 23.22 97.72 20.92 97.72",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points:
          "20.92 104.45 22.32 104.45 23.34 104.45 23.29 101.7 20.92 101.7",
        fill: "#304FFE"
      }),
      _react2.default.createElement("polygon", {
        points: "20.92 97.72 23.22 97.72 23.14 93.23 20.92 93.23",
        fill: "#9C27B0"
      }),
      _react2.default.createElement("path", {
        d: "m18.42 84.25h-1.87c-0.5 1.3-0.87 2.79-1.04 4.49h5.4v-4.49h-2.49z",
        fill: "#64DD17"
      }),
      _react2.default.createElement("rect", {
        x: 15.41,
        y: 93.23,
        width: 3.02,
        height: 4.49,
        fill: "#00BCD4"
      }),
      _react2.default.createElement("path", {
        d:
          "m18.42 88.74h-2.91c-0.06 0.58-0.1 1.18-0.1 1.81h-0.01v2.68h3.02v-4.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "18.42 101.7 15.41 101.7 15.41 104.45 18.42 104.45 20.92 104.45 20.92 101.7",
        fill: "#1DE9B6"
      }),
      _react2.default.createElement("rect", {
        x: 15.41,
        y: 97.72,
        width: 3.02,
        height: 3.98,
        fill: "#9C27B0"
      }),
      _react2.default.createElement("polygon", {
        points:
          "15.41 94.56 16.35 94.56 19.91 87.17 18.05 87.17 15.41 92.1 15.41 93.23",
        fill: "#18FFFF"
      }),
      _react2.default.createElement("polygon", {
        points: "19.91 87.17 22.91 80.95 22.9 80.27 22.86 78.2 18.05 87.17",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "15.41 94.56 15.41 96.52 16.35 94.56",
        fill: "#FFC107"
      }),
      _react2.default.createElement("polygon", {
        points:
          "18.77 94.56 15.39 102.93 15.41 104.45 17.52 104.45 20.78 94.56",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points:
          "23.02 87.17 22.97 84.25 22.97 84.16 21.75 87.17 18.77 94.56 20.78 94.56 23.03 87.71",
        fill: "#FFEA00"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#e)"
      },
      _react2.default.createElement("polygon", {
        points: "24.76 84.25 22.7 84.25 22.77 80.27 24.76 80.27",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.25 80.76c0.05 0.07 0.1 0.14 0.16 0.21 0.63 0.92 1.23 2.02 1.71 3.28h-1.87v-3.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("path", {
        d: "m24.76 84.25v-3.98h2.14c0.12 0.16 0.24 0.32 0.36 0.49v3.5h-2.5z",
        fill: "#00E5FF"
      }),
      _react2.default.createElement("path", {
        d:
          "m24.76 78.02c0.61 0.52 1.31 1.2 1.99 2.07 0.05 0.06 0.09 0.13 0.14 0.19h-2.14v-2.26z",
        fill: "#00BCD4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "22.62 88.74 24.76 88.74 27.25 88.74 27.25 93.23 24.76 93.23 22.54 93.23",
        fill: "#651FFF"
      }),
      _react2.default.createElement("polygon", {
        points: "24.76 84.25 24.76 88.74 22.62 88.74 22.7 84.25",
        fill: "#2196F3"
      }),
      _react2.default.createElement("rect", {
        x: 24.76,
        y: 97.72,
        width: 2.49,
        height: 3.98,
        fill: "#3F51B5"
      }),
      _react2.default.createElement("rect", {
        x: 24.76,
        y: 93.23,
        width: 2.49,
        height: 4.49,
        fill: "#4CAF50"
      }),
      _react2.default.createElement("path", {
        d: "m22.77 80.27 0.07-3.62s0.82 0.43 1.91 1.36v2.26h-1.98z",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "24.76 101.7 22.38 101.7 22.45 97.72 24.76 97.72",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points:
          "24.76 104.45 23.35 104.45 22.33 104.45 22.38 101.7 24.76 101.7",
        fill: "#304FFE"
      }),
      _react2.default.createElement("polygon", {
        points: "24.76 97.72 22.45 97.72 22.54 93.23 24.76 93.23",
        fill: "#9C27B0"
      }),
      _react2.default.createElement("path", {
        d: "m27.25 84.25h1.87c0.5 1.3 0.87 2.79 1.04 4.49h-5.4v-4.49h2.49z",
        fill: "#64DD17"
      }),
      _react2.default.createElement("rect", {
        x: 27.25,
        y: 93.23,
        width: 3.02,
        height: 4.49,
        fill: "#00BCD4"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.25 88.74h2.91c0.06 0.58 0.1 1.18 0.1 1.81h0.01v2.68h-3.02v-4.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "27.25 101.7 30.26 101.7 30.26 104.45 27.25 104.45 24.76 104.45 24.76 101.7",
        fill: "#1DE9B6"
      }),
      _react2.default.createElement("rect", {
        x: 27.25,
        y: 97.72,
        width: 3.02,
        height: 3.98,
        fill: "#9C27B0"
      }),
      _react2.default.createElement("polygon", {
        points:
          "30.26 94.56 29.32 94.56 25.76 87.17 27.62 87.17 30.26 92.1 30.26 93.23",
        fill: "#18FFFF"
      }),
      _react2.default.createElement("polygon", {
        points: "25.76 87.17 22.76 80.95 22.77 80.27 22.81 78.2 27.62 87.17",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "30.26 94.56 30.26 96.52 29.32 94.56",
        fill: "#FFC107"
      }),
      _react2.default.createElement("polygon", {
        points: "26.9 94.56 30.28 102.93 30.26 104.45 28.15 104.45 24.89 94.56",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points: "23.92 87.17 26.9 94.56 24.89 94.56 22.64 87.71 22.65 87.17",
        fill: "#FFEA00"
      }),
      _react2.default.createElement("polygon", {
        points: "22.65 87.17 22.7 84.25 22.7 84.16 23.92 87.17",
        fill: "#F44336"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "v",
        x1: 22.927,
        x2: 22.927,
        y1: 76.676,
        y2: 86.675,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF59D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m22.93 87.8c0.84-3.72 2.57-6.17 3.91-7.59-1.92-2.4-3.91-3.43-3.91-3.43s-1.99 1.03-3.91 3.43c1.34 1.42 3.07 3.86 3.91 7.59z",
      fill: "url(#v)"
    }),
    _react2.default.createElement("path", {
      d:
        "m30.95 89.97c-0.12-3.52-1.11-6.66-2.94-9.33-0.22-0.33-0.45-0.63-0.68-0.92-1.97-2.47-4.01-3.54-4.1-3.58l-0.26-0.14-0.27 0.14c-0.08 0.04-2.12 1.11-4.1 3.58-0.23 0.29-0.45 0.59-0.68 0.92-1.84 2.67-2.82 5.81-2.94 9.33l-0.02 15.06h16.01v-15.06h-0.02zm-7.98-12.65c0.56 0.34 1.92 1.27 3.27 2.91-1.22 1.48-2.59 3.72-3.31 6.92-0.71-3.16-2.06-5.39-3.28-6.87 1.37-1.66 2.75-2.61 3.32-2.96zm-6.85 13.81 0.01-0.57c0.02-3.52 0.95-6.64 2.75-9.26 0.04-0.05 0.08-0.1 0.11-0.15 1.55 1.87 3.35 5.13 3.44 10.26l-0.01 12.47h-6.3v-12.75zm7.32 12.74v-12.83c0.17-4.96 1.95-8.12 3.47-9.94 0.05 0.07 0.1 0.13 0.15 0.2 1.8 2.62 2.73 5.74 2.75 9.26l0.01 13.32h-6.38z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "u",
        d:
          "m112.45 90.55c-0.03-4.26-1.34-7.38-2.85-9.58-0.22-0.32-0.43-0.61-0.66-0.89-1.92-2.4-3.91-3.43-3.91-3.43s-1.99 1.03-3.91 3.43c-0.22 0.28-0.44 0.57-0.66 0.89-1.51 2.2-2.82 5.32-2.85 9.58h-0.01v13.9h14.84l0.01-13.9z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#u"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#d)"
      },
      _react2.default.createElement("polygon", {
        points: "102.98 84.25 105.04 84.25 104.96 80.27 102.98 80.27",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m100.49 80.76c-0.05 0.07-0.1 0.14-0.16 0.21-0.63 0.92-1.23 2.02-1.71 3.28h1.87v-3.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("path", {
        d: "m102.98 84.25v-3.98h-2.14c-0.12 0.16-0.24 0.32-0.36 0.49v3.5h2.5z",
        fill: "#00E5FF"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.98 78.02c-0.61 0.52-1.31 1.2-1.99 2.07-0.05 0.06-0.09 0.13-0.14 0.19h2.14v-2.26z",
        fill: "#00BCD4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "105.12 88.74 102.98 88.74 100.49 88.74 100.49 93.23 102.98 93.23 105.2 93.23",
        fill: "#651FFF"
      }),
      _react2.default.createElement("polygon", {
        points: "102.98 84.25 102.98 88.74 105.12 88.74 105.04 84.25",
        fill: "#2196F3"
      }),
      _react2.default.createElement("rect", {
        x: 100.49,
        y: 97.72,
        width: 2.49,
        height: 3.98,
        fill: "#3F51B5"
      }),
      _react2.default.createElement("rect", {
        x: 100.49,
        y: 93.23,
        width: 2.49,
        height: 4.49,
        fill: "#4CAF50"
      }),
      _react2.default.createElement("path", {
        d: "m104.96 80.27-0.07-3.62s-0.82 0.43-1.91 1.36v2.26h1.98z",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "102.98 101.7 105.36 101.7 105.29 97.72 102.98 97.72",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points:
          "102.98 104.45 104.39 104.45 105.41 104.45 105.36 101.7 102.98 101.7",
        fill: "#304FFE"
      }),
      _react2.default.createElement("polygon", {
        points: "102.98 97.72 105.29 97.72 105.2 93.23 102.98 93.23",
        fill: "#9C27B0"
      }),
      _react2.default.createElement("path", {
        d: "m100.49 84.25h-1.87c-0.5 1.3-0.87 2.79-1.04 4.49h5.4v-4.49h-2.49z",
        fill: "#64DD17"
      }),
      _react2.default.createElement("rect", {
        x: 97.47,
        y: 93.23,
        width: 3.02,
        height: 4.49,
        fill: "#00BCD4"
      }),
      _react2.default.createElement("path", {
        d:
          "m100.49 88.74h-2.91c-0.06 0.58-0.1 1.18-0.1 1.81h-0.01v2.68h3.02v-4.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "100.49 101.7 97.47 101.7 97.47 104.45 100.49 104.45 102.98 104.45 102.98 101.7",
        fill: "#1DE9B6"
      }),
      _react2.default.createElement("rect", {
        x: 97.47,
        y: 97.72,
        width: 3.02,
        height: 3.98,
        fill: "#9C27B0"
      }),
      _react2.default.createElement("polygon", {
        points:
          "97.47 94.56 98.42 94.56 101.98 87.17 100.12 87.17 97.47 92.1 97.47 93.23",
        fill: "#18FFFF"
      }),
      _react2.default.createElement("polygon", {
        points:
          "101.98 87.17 104.98 80.95 104.96 80.27 104.93 78.2 100.12 87.17",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "97.47 94.56 97.47 96.52 98.42 94.56",
        fill: "#FFC107"
      }),
      _react2.default.createElement("polygon", {
        points:
          "100.84 94.56 97.45 102.93 97.47 104.45 99.58 104.45 102.85 94.56",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points:
          "105.09 87.17 105.04 84.25 105.04 84.16 103.82 87.17 100.84 94.56 102.85 94.56 105.1 87.71",
        fill: "#FFEA00"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#d)"
      },
      _react2.default.createElement("polygon", {
        points: "106.82 84.25 104.77 84.25 104.84 80.27 106.82 80.27",
        fill: "#673AB7"
      }),
      _react2.default.createElement("path", {
        d:
          "m109.32 80.76c0.05 0.07 0.1 0.14 0.16 0.21 0.63 0.92 1.23 2.02 1.71 3.28h-1.87v-3.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("path", {
        d: "m106.82 84.25v-3.98h2.14c0.12 0.16 0.24 0.32 0.36 0.49v3.5h-2.5z",
        fill: "#00E5FF"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.82 78.02c0.61 0.52 1.31 1.2 1.99 2.07 0.05 0.06 0.09 0.13 0.14 0.19h-2.14v-2.26z",
        fill: "#00BCD4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "104.68 88.74 106.82 88.74 109.32 88.74 109.32 93.23 106.82 93.23 104.6 93.23",
        fill: "#651FFF"
      }),
      _react2.default.createElement("polygon", {
        points: "106.82 84.25 106.82 88.74 104.68 88.74 104.77 84.25",
        fill: "#2196F3"
      }),
      _react2.default.createElement("rect", {
        x: 106.82,
        y: 97.72,
        width: 2.49,
        height: 3.98,
        fill: "#3F51B5"
      }),
      _react2.default.createElement("rect", {
        x: 106.82,
        y: 93.23,
        width: 2.49,
        height: 4.49,
        fill: "#4CAF50"
      }),
      _react2.default.createElement("path", {
        d: "m104.84 80.27 0.07-3.62s0.82 0.43 1.91 1.36v2.26h-1.98z",
        fill: "#009688"
      }),
      _react2.default.createElement("polygon", {
        points: "106.82 101.7 104.44 101.7 104.52 97.72 106.82 97.72",
        fill: "#2196F3"
      }),
      _react2.default.createElement("polygon", {
        points:
          "106.82 104.45 105.42 104.45 104.39 104.45 104.44 101.7 106.82 101.7",
        fill: "#304FFE"
      }),
      _react2.default.createElement("polygon", {
        points: "106.82 97.72 104.52 97.72 104.6 93.23 106.82 93.23",
        fill: "#9C27B0"
      }),
      _react2.default.createElement("path", {
        d: "m109.32 84.25h1.87c0.5 1.3 0.87 2.79 1.04 4.49h-5.4v-4.49h2.49z",
        fill: "#64DD17"
      }),
      _react2.default.createElement("rect", {
        x: 109.32,
        y: 93.23,
        width: 3.02,
        height: 4.49,
        fill: "#00BCD4"
      }),
      _react2.default.createElement("path", {
        d:
          "m109.32 88.74h2.91c0.06 0.58 0.1 1.18 0.1 1.81h0.01v2.68h-3.02v-4.49z",
        fill: "#03A9F4"
      }),
      _react2.default.createElement("polygon", {
        points:
          "109.32 101.7 112.33 101.7 112.33 104.45 109.32 104.45 106.82 104.45 106.82 101.7",
        fill: "#1DE9B6"
      }),
      _react2.default.createElement("rect", {
        x: 109.32,
        y: 97.72,
        width: 3.02,
        height: 3.98,
        fill: "#9C27B0"
      }),
      _react2.default.createElement("polygon", {
        points:
          "112.33 94.56 111.38 94.56 107.83 87.17 109.69 87.17 112.33 92.1 112.33 93.23",
        fill: "#18FFFF"
      }),
      _react2.default.createElement("polygon", {
        points:
          "107.83 87.17 104.83 80.95 104.84 80.27 104.88 78.2 109.69 87.17",
        fill: "#F44336"
      }),
      _react2.default.createElement("polygon", {
        points: "112.33 94.56 112.33 96.52 111.38 94.56",
        fill: "#FFC107"
      }),
      _react2.default.createElement("polygon", {
        points:
          "108.96 94.56 112.35 102.93 112.33 104.45 110.22 104.45 106.96 94.56",
        fill: "#FB8C00"
      }),
      _react2.default.createElement("polygon", {
        points:
          "105.99 87.17 108.96 94.56 106.96 94.56 104.7 87.71 104.71 87.17",
        fill: "#FFEA00"
      }),
      _react2.default.createElement("polygon", {
        points: "104.71 87.17 104.77 84.25 104.77 84.16 105.99 87.17",
        fill: "#F44336"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "s",
        x1: 104.99,
        x2: 104.99,
        y1: 76.676,
        y2: 86.675,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF59D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.99 87.8c0.84-3.72 2.57-6.17 3.91-7.59-1.92-2.4-3.91-3.43-3.91-3.43s-1.99 1.03-3.91 3.43c1.35 1.42 3.07 3.86 3.91 7.59z",
      fill: "url(#s)"
    }),
    _react2.default.createElement("path", {
      d:
        "m113.02 89.97c-0.12-3.52-1.11-6.66-2.94-9.33-0.22-0.33-0.45-0.63-0.68-0.92-1.97-2.47-4.01-3.54-4.1-3.58l-0.27-0.14-0.27 0.14c-0.08 0.04-2.12 1.11-4.1 3.58-0.23 0.29-0.45 0.59-0.68 0.92-1.84 2.67-2.82 5.81-2.94 9.33l-0.02 15.06h16.01v-15.06h-0.01zm-7.99-12.65c0.56 0.34 1.92 1.27 3.27 2.91-1.22 1.48-2.59 3.72-3.31 6.92-0.71-3.16-2.06-5.39-3.28-6.87 1.37-1.66 2.76-2.61 3.32-2.96zm-6.84 13.81 0.01-0.57c0.02-3.52 0.95-6.64 2.75-9.26 0.04-0.05 0.08-0.1 0.11-0.15 1.55 1.87 3.35 5.13 3.44 10.26l-0.01 12.47h-6.3v-12.75zm7.32 12.74v-12.83c0.17-4.96 1.95-8.12 3.47-9.94 0.05 0.07 0.1 0.13 0.15 0.2 1.8 2.62 2.73 5.74 2.75 9.26l0.01 13.32h-6.38z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.9 47.11 0.46-1.72c-1.08-0.29-2.21-0.46-3.38-0.46v1.78c1.01 0 1.99 0.15 2.92 0.4z",
      fill: "#03A9F4"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.98 46.71v-1.78c-2.38 0-4.61 0.65-6.53 1.76l0.89 1.54c1.66-0.96 3.58-1.52 5.64-1.52z",
      fill: "#9C27B0"
    }),
    _react2.default.createElement("path", {
      d:
        "m55.99 50.02-1.26-1.26c-1.6 1.6-2.77 3.61-3.37 5.86l1.72 0.46c0.52-1.94 1.53-3.68 2.91-5.06z",
      fill: "#64DD17"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.34 48.23-0.89-1.54c-0.99 0.57-1.91 1.26-2.71 2.07l1.26 1.26c0.69-0.7 1.48-1.29 2.34-1.79z",
      fill: "#4CAF50"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.96 50.02 1.26-1.26c-1.6-1.6-3.62-2.77-5.87-3.37l-0.46 1.72c1.95 0.52 3.69 1.53 5.07 2.91z",
      fill: "#4CAF50"
    }),
    _react2.default.createElement("path", {
      d:
        "m74.88 60.92 1.72 0.46c0.29-1.08 0.46-2.21 0.46-3.38h-1.78c-0.01 1.01-0.15 1.99-0.4 2.92z",
      fill: "#18FFFF"
    }),
    _react2.default.createElement("path", {
      d:
        "m75.27 58h1.78c0-2.38-0.65-4.61-1.76-6.53l-1.54 0.89c0.96 1.66 1.52 3.58 1.52 5.64z",
      fill: "#3F51B5"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.75 52.36 1.54-0.89c-0.57-0.99-1.26-1.91-2.07-2.71l-1.26 1.26c0.7 0.69 1.3 1.48 1.79 2.34z",
      fill: "#2196F3"
    }),
    _react2.default.createElement("path", {
      d:
        "m74.88 60.92c-0.52 1.94-1.53 3.68-2.91 5.06l1.26 1.26c1.6-1.6 2.77-3.61 3.37-5.86l-1.72-0.46z",
      fill: "#2196F3"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.98 69.29v1.78c2.38 0 4.61-0.65 6.53-1.76l-0.89-1.54c-1.66 0.96-3.58 1.52-5.64 1.52z",
      fill: "#FB8C00"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.62 67.77 0.89 1.54c0.99-0.57 1.91-1.26 2.71-2.07l-1.26-1.26c-0.69 0.7-1.48 1.29-2.34 1.79z",
      fill: "#F44336"
    }),
    _react2.default.createElement("path", {
      d:
        "m53.08 55.08-1.72-0.46c-0.29 1.08-0.46 2.21-0.46 3.38h1.78c0.01-1.01 0.15-1.99 0.4-2.92z",
      fill: "#03A9F4"
    }),
    _react2.default.createElement("path", {
      d:
        "m61.06 68.89-0.46 1.72c1.08 0.29 2.21 0.46 3.38 0.46v-1.78c-1.01 0-1.99-0.15-2.92-0.4z",
      fill: "#FFEA00"
    }),
    _react2.default.createElement("path", {
      d:
        "m54.21 63.64-1.54 0.89c0.57 0.99 1.26 1.91 2.07 2.71l1.26-1.26c-0.7-0.69-1.3-1.48-1.79-2.34z",
      fill: "#64DD17"
    }),
    _react2.default.createElement("path", {
      d:
        "m55.99 65.98-1.26 1.26c1.6 1.6 3.62 2.77 5.87 3.37l0.46-1.72c-1.94-0.52-3.69-1.53-5.07-2.91z",
      fill: "#F44336"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.69 58h-1.79c0 2.38 0.65 4.61 1.76 6.53l1.54-0.89c-0.95-1.66-1.51-3.58-1.51-5.64z",
      fill: "#00E5FF"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.98 50.87v-4.16c-2.06 0-3.98 0.56-5.64 1.52l2.08 3.6c1.05-0.61 2.26-0.96 3.56-0.96z",
      fill: "#F44336"
    }),
    _react2.default.createElement("path", {
      d:
        "m60.42 51.83-2.08-3.6c-0.86 0.5-1.65 1.09-2.34 1.79l2.94 2.94c0.44-0.44 0.93-0.82 1.48-1.13z",
      fill: "#18FFFF"
    }),
    _react2.default.createElement("path", {
      d:
        "m65.82 51.12 1.08-4.01c-0.93-0.25-1.91-0.39-2.92-0.39v4.16c0.64-0.01 1.25 0.08 1.84 0.24z",
      fill: "#00E5FF"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.94 52.96-2.94-2.94c-1.38 1.38-2.39 3.12-2.91 5.06l4.02 1.08c0.31-1.23 0.95-2.33 1.83-3.2z",
      fill: "#03A9F4"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.02 52.96 2.94-2.94c-1.38-1.38-3.12-2.39-5.07-2.91l-1.08 4.01c1.24 0.33 2.34 0.97 3.21 1.84z",
      fill: "#64DD17"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.1 56.16-4.02-1.08c-0.25 0.93-0.4 1.91-0.4 2.92h4.16c0.01-0.64 0.1-1.25 0.26-1.84z",
      fill: "#00BCD4"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.11 58h4.16c0-2.06-0.56-3.98-1.52-5.64l-3.6 2.08c0.61 1.05 0.96 2.26 0.96 3.56z",
      fill: "#651FFF"
    }),
    _react2.default.createElement("path", {
      d:
        "m70.15 54.44 3.6-2.08c-0.5-0.86-1.09-1.65-1.79-2.34l-2.94 2.94c0.44 0.44 0.82 0.94 1.13 1.48z",
      fill: "#03A9F4"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.54 64.17 2.08 3.6c0.86-0.5 1.65-1.09 2.34-1.79l-2.94-2.94c-0.44 0.44-0.94 0.82-1.48 1.13z",
      fill: "#3F51B5"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.85 58h-4.16c0 2.06 0.56 3.98 1.52 5.64l3.6-2.08c-0.61-1.05-0.96-2.26-0.96-3.56z",
      fill: "#9C27B0"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.98 65.13v4.16c2.06 0 3.98-0.56 5.64-1.52l-2.08-3.6c-1.05 0.61-2.26 0.96-3.56 0.96z",
      fill: "#9C27B0"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.11 58c0 0.64-0.09 1.25-0.25 1.84l4.02 1.08c0.25-0.93 0.4-1.91 0.4-2.92h-4.17z",
      fill: "#00BCD4"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.02 63.04 2.94 2.94c1.38-1.38 2.39-3.12 2.91-5.06l-4.02-1.08c-0.32 1.23-0.96 2.33-1.83 3.2z",
      fill: "#4CAF50"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.94 63.04-2.94 2.94c1.38 1.38 3.12 2.39 5.07 2.91l1.08-4.01c-1.24-0.33-2.34-0.97-3.21-1.84z",
      fill: "#304FFE"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.13 64.88-1.08 4.01c0.93 0.25 1.91 0.39 2.92 0.39v-4.16c-0.63 0.01-1.25-0.08-1.84-0.24z",
      fill: "#1DE9B6"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.81 61.56-3.6 2.08c0.5 0.86 1.09 1.65 1.79 2.34l2.94-2.94c-0.44-0.44-0.82-0.94-1.13-1.48z",
      fill: "#2196F3"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 63.979,
        cy: 57.998,
        r: 7.9394,
        gradientTransform: "matrix(1 0 0 .9997 0 .0222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFFF8D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFF8B",
        offset: 0.3556
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFE84",
        offset: 0.5144
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFC77",
        offset: 0.6341
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF965",
        offset: 0.7342
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF64D",
        offset: 0.8221
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF131",
        offset: 0.9014
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEC0F",
        offset: 0.9727
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEA00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m70.15 54.44c-0.31-0.54-0.69-1.04-1.13-1.48-0.87-0.87-1.97-1.51-3.2-1.84-0.59-0.16-1.21-0.25-1.84-0.25-1.3 0-2.51 0.35-3.56 0.96-0.54 0.31-1.04 0.69-1.48 1.13-0.87 0.87-1.51 1.97-1.84 3.2-0.16 0.59-0.25 1.2-0.25 1.84 0 1.3 0.35 2.51 0.96 3.56 0.31 0.54 0.69 1.04 1.13 1.48 0.87 0.87 1.97 1.51 3.2 1.84 0.59 0.16 1.21 0.25 1.84 0.25 1.3 0 2.51-0.35 3.56-0.96 0.54-0.31 1.04-0.69 1.48-1.13 0.87-0.87 1.51-1.97 1.84-3.2 0.16-0.59 0.25-1.2 0.25-1.84 0-1.3-0.35-2.51-0.96-3.56zm-1.02 4.94c-0.25 0.92-0.71 1.75-1.36 2.4-0.33 0.33-0.71 0.6-1.12 0.83-0.79 0.46-1.69 0.74-2.66 0.74-0.48 0-0.94-0.08-1.38-0.2-0.92-0.25-1.75-0.71-2.4-1.36-0.33-0.33-0.6-0.71-0.83-1.12-0.46-0.79-0.74-1.69-0.74-2.66 0-0.48 0.08-0.94 0.2-1.38 0.25-0.92 0.71-1.75 1.36-2.4 0.33-0.33 0.71-0.6 1.12-0.83 0.79-0.46 1.69-0.74 2.66-0.74 0.48 0 0.94 0.08 1.38 0.2 0.92 0.25 1.75 0.71 2.4 1.36 0.33 0.33 0.6 0.71 0.83 1.12 0.46 0.79 0.74 1.69 0.74 2.66 0 0.48-0.09 0.94-0.2 1.38z",
      fill: "url(#r)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.979,
        x2: 63.979,
        y1: 58,
        y2: 58,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 63.98,
      y: 58,
      width: 0,
      height: 0,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.979,
        x2: 63.979,
        y1: 58,
        y2: 58,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 63.98,
      y: 58,
      width: 0,
      height: 0,
      fill: "url(#c)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.979,
        x2: 63.979,
        y1: 58,
        y2: 58,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58 63.98 58",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58 63.98 58",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#c)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58 63.98 58",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58 63.98 58",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58 63.98 58",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.98 58 63.98 58",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "p",
        x1: 63.75,
        x2: 66.028,
        y1: 57.494,
        y2: 62.94,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDF80",
        offset: 0.3651
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDB79",
        offset: 0.527
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD46C",
        offset: 0.6486
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCA5A",
        offset: 0.7502
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD43",
        offset: 0.8393
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAD26",
        offset: 0.9195
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9A04",
        offset: 0.9916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.98 58v5.35c0.97 0 1.88-0.28 2.66-0.74 0.41-0.23 0.79-0.5 1.12-0.83l-3.78-3.78z",
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 64.078,
        x2: 69.428,
        y1: 58.559,
        y2: 58.559,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF59D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF499",
        offset: 0.1736
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF08E",
        offset: 0.3365
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE97B",
        offset: 0.4954
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE060",
        offset: 0.6516
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43E",
        offset: 0.806
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC614",
        offset: 0.957
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.59 55.34-4.61 2.66 3.78 3.78c0.65-0.65 1.12-1.48 1.36-2.4 0.12-0.44 0.2-0.9 0.2-1.38 0.01-0.97-0.27-1.88-0.73-2.66z",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 60.706,
        x2: 63.43,
        y1: 53.353,
        y2: 58.354,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC30C",
        offset: 0.016
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD238",
        offset: 0.1795
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDF5C",
        offset: 0.3448
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE879",
        offset: 0.5097
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEF8D",
        offset: 0.6741
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF499",
        offset: 0.8377
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF59D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m61.32 53.39c-0.41 0.23-0.79 0.5-1.12 0.83-0.65 0.65-1.12 1.48-1.36 2.4l5.14 1.38v-5.35c-0.98 0-1.88 0.28-2.66 0.74z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: 63.832,
        x2: 61.678,
        y1: 58.414,
        y2: 63.539,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF59D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF399",
        offset: 0.1511
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEF8B",
        offset: 0.3161
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE776",
        offset: 0.4878
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDD57",
        offset: 0.664
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCF30",
        offset: 0.8419
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M60.2,61.78c0.65,0.65,1.48,1.12,2.4,1.36c0.44,0.12,0.9,0.2,1.38,0.2V58L60.2,61.78z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 63.912,
        x2: 66.982,
        y1: 57.785,
        y2: 52.883,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDF7F",
        offset: 0.2759
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDA77",
        offset: 0.4453
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD269",
        offset: 0.5861
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC754",
        offset: 0.711
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB83A",
        offset: 0.8256
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA619",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.76 54.22c-0.65-0.65-1.48-1.12-2.4-1.36-0.44-0.12-0.9-0.2-1.38-0.2v5.34l4.61-2.66c-0.23-0.41-0.5-0.79-0.83-1.12z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 64.247,
        x2: 58.551,
        y1: 58.008,
        y2: 59.444,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDF80",
        offset: 0.3082
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDA78",
        offset: 0.4754
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD36A",
        offset: 0.6089
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC857",
        offset: 0.7245
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBA3D",
        offset: 0.8286
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA91F",
        offset: 0.923
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m58.83 56.62c-0.12 0.44-0.2 0.9-0.2 1.38 0 0.97 0.28 1.88 0.74 2.66 0.23 0.41 0.5 0.79 0.83 1.12l3.78-3.78-5.15-1.38z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.98 98c5.51 0 10 4.49 10 10v14h-20v-14c0-5.51 4.48-10 10-10m0-2c-6.63 0-12.01 5.37-12.01 12v16h24.01v-16c0-6.63-5.37-12-12-12z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Church;
