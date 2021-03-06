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

function Telescope(props) {
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
      points: "64.07 104.04 43.37 96.84 42.08 100.54 62.79 107.73",
      fill: "#F44336"
    }),
    _react2.default.createElement("polygon", {
      points: "64.82 104.04 85.53 96.84 86.81 100.54 66.1 107.73",
      fill: "#F44336"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m43.98 98.12 18.82 6.54-0.63 1.81-18.82-6.54 0.63-1.81m-0.61-1.28-1.29 3.69 20.71 7.2 1.29-3.69-20.71-7.2z",
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
          "m84.91 98.12 0.63 1.8-18.82 6.54-0.63-1.81 18.82-6.53m0.62-1.28-20.71 7.2 1.29 3.69 20.71-7.2-1.29-3.69z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.167,
        cy: 61.971,
        r: 62.247,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E57373",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.384
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.3 62.38c-1.88-1.09-4.28-0.44-5.37 1.43l-26.9 46.58c-1.08 1.88-0.44 4.28 1.43 5.36 1.88 1.08 4.29 0.44 5.37-1.43l26.91-46.58c1.08-1.88 0.43-4.28-1.44-5.36z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m95.97 110.53-26.9-46.58c-1.09-1.87-3.49-2.52-5.37-1.43-1.88 1.08-2.52 3.48-1.44 5.36l26.91 46.58c1.08 1.88 3.48 2.52 5.37 1.44 1.87-1.09 2.52-3.5 1.43-5.37z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.33 63.85c0.34 0 0.67 0.09 0.97 0.26 0.45 0.26 0.76 0.67 0.9 1.17 0.13 0.5 0.06 1.01-0.19 1.46l-26.91 46.58c-0.34 0.59-0.98 0.96-1.67 0.96-0.34 0-0.67-0.09-0.96-0.26-0.92-0.53-1.23-1.71-0.7-2.63l26.9-46.58c0.33-0.6 0.97-0.96 1.66-0.96m0-2c-1.36 0-2.68 0.7-3.4 1.96l-26.9 46.58c-1.08 1.88-0.44 4.28 1.43 5.36 0.62 0.36 1.3 0.53 1.96 0.53 1.36 0 2.68-0.7 3.4-1.96l26.91-46.58c1.09-1.88 0.44-4.28-1.43-5.36-0.62-0.36-1.3-0.53-1.97-0.53z",
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
          "m65.66 63.98c0.69 0 1.33 0.37 1.68 0.96l26.9 46.59c0.26 0.44 0.33 0.96 0.19 1.45-0.13 0.5-0.45 0.92-0.89 1.17-0.3 0.17-0.62 0.26-0.97 0.26-0.69 0-1.33-0.37-1.68-0.96l-26.9-46.58c-0.26-0.44-0.32-0.96-0.19-1.46s0.45-0.91 0.9-1.17c0.3-0.17 0.62-0.26 0.96-0.26m0-2c-0.67 0-1.34 0.17-1.96 0.53-1.88 1.08-2.52 3.48-1.44 5.36l26.91 46.58c0.73 1.26 2.05 1.96 3.41 1.96 0.67 0 1.34-0.17 1.96-0.52 1.87-1.08 2.52-3.49 1.43-5.36l-26.9-46.58c-0.73-1.26-2.05-1.97-3.41-1.97z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 63.167,
        cy: 61.971,
        r: 62.247,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E57373",
        offset: 0.0044248
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.5604
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.98 62.36c-2.17 0-3.93 1.75-3.93 3.92v53.79c0 2.16 1.76 3.93 3.93 3.93s3.92-1.76 3.92-3.93v-53.78c0.01-2.17-1.75-3.93-3.92-3.93z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.98 64.36c1.06 0 1.92 0.86 1.92 1.92v53.79c0 1.06-0.86 1.93-1.92 1.93s-1.93-0.86-1.93-1.93v-53.78c0.01-1.06 0.87-1.93 1.93-1.93m0-2c-2.17 0-3.93 1.75-3.93 3.92v53.79c0 2.16 1.76 3.93 3.93 3.93s3.92-1.76 3.92-3.93v-53.78c0.01-2.17-1.75-3.93-3.92-3.93z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "78.62 72.52 78.62 72.52 78.62 72.52",
      fill: "#B0BEC5"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 16.333,
        cy: 53.804,
        r: 17.264,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.5269
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "10.27 76.92 4.36 62.79 46.8 45.07 52.7 59.21",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 35.333,
        cy: 44.804,
        r: 22.91,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E6E6E6",
        offset: 0.6921
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34.09 67.68-6.4-15.33c-0.41-0.99 0.01-2.13 0.98-2.61l33.08-16.3c1.05-0.52 2.32-0.04 2.78 1.04l8.18 19.57c0.45 1.08-0.1 2.32-1.21 2.7l-34.87 12.07c-1.01 0.35-2.12-0.15-2.54-1.14z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 79,
        cy: 18.971,
        r: 38.989,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E6E6E6",
        offset: 0.6921
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m117.12 41.08-12.15-29.07c-0.45-1.07-1.7-1.55-2.74-1.05l-47.2 22.27c-0.98 0.46-1.43 1.62-1.01 2.62l10.32 24.69c0.42 1 1.55 1.5 2.57 1.13l49.03-17.9c1.09-0.39 1.63-1.62 1.18-2.69z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 112.84,
        cy: 7.7874,
        r: 32.202,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.02 41.25c-3.91 1.63-10.16-4.43-13.97-13.54s-3.73-17.82 0.18-19.45 10.16 4.43 13.97 13.54 3.72 17.82-0.18 19.45z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m108.59 10c2.65 0 7.51 4.81 10.76 12.58 1.74 4.16 2.68 8.33 2.65 11.74-0.03 2.7-0.7 4.65-1.75 5.09-0.18 0.07-0.37 0.11-0.59 0.11-2.65 0-7.51-4.81-10.76-12.58-1.74-4.16-2.68-8.33-2.65-11.74 0.03-2.7 0.7-4.65 1.75-5.09 0.18-0.08 0.37-0.11 0.59-0.11m0-2c-0.48 0-0.93 0.09-1.36 0.27-3.91 1.63-3.99 10.34-0.18 19.45 3.39 8.11 8.72 13.81 12.6 13.81 0.48 0 0.93-0.09 1.36-0.27 3.91-1.63 3.99-10.34 0.18-19.45-3.38-8.12-8.71-13.81-12.6-13.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 36.446,
        x2: 25.071,
        y1: 57.149,
        y2: 62.274,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "27.93 52.97 4.36 62.81 10.27 76.96 33.84 67.11",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 68.886,
        x2: 51.071,
        y1: 44.084,
        y2: 51.685,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m54.5 37.03-25.84 12.74c-0.96 0.47-1.39 1.62-0.98 2.61l6.4 15.34c0.41 0.99 1.53 1.49 2.54 1.14l27.23-9.42-9.35-22.41z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: 111.32,
        x2: 97.473,
        y1: 26.346,
        y2: 32.414,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.53 12.24-44.5 21.01c-0.98 0.46-1.43 1.62-1.01 2.62l10.32 24.71c0.42 1 1.55 1.5 2.57 1.13l46.22-16.88-13.6-32.59z",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117.12 41.08-12.15-29.07c-0.33-0.78-1.08-1.25-1.88-1.25-0.29 0-0.59 0.06-0.87 0.2l-47.2 22.27c-0.98 0.46-1.43 1.62-1.01 2.62l0.48 1.15-25.83 12.74c-0.96 0.47-1.39 1.62-0.98 2.61l0.25 0.59-23.57 9.85 5.91 14.14 23.58-9.84 0.25 0.59c0.32 0.78 1.08 1.25 1.88 1.25 0.22 0 0.45-0.04 0.66-0.11l27.23-9.42 0.48 1.15c0.32 0.78 1.08 1.25 1.88 1.25 0.23 0 0.47-0.04 0.7-0.12l49.03-17.9c1.07-0.4 1.61-1.63 1.16-2.7zm-53.26 18.32-1.16-2.77-28.86 10.45-1.16-2.77-20.8 8.69-3.6-8.61 20.81-8.69-1.15-2.77 27.72-13.17-1.16-2.76 48.1-22.91 11.37 27.2-50.11 18.11z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 10.833,
        cy: 58.138,
        r: 18.179,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF9A9A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m10.47 77.41-6.31-15.1c-0.43-1.04 0.06-2.23 1.09-2.66l5.68-2.37c1.04-0.43 2.23 0.06 2.66 1.09l6.31 15.1c0.43 1.04-0.06 2.23-1.09 2.66l-5.68 2.37c-1.04 0.43-2.23-0.06-2.66-1.09z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 105.83,
        cy: 3.8042,
        r: 41.626,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF9A9A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.41 47.85-16.15-38.66c-0.43-1.04 0.06-2.23 1.09-2.66l5.68-2.37c1.04-0.43 2.23 0.06 2.66 1.09l16.16 38.67c0.43 1.04-0.06 2.23-1.09 2.66l-5.68 2.37c-1.05 0.43-2.24-0.06-2.67-1.1z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.81 4 0.03 2.02 16.14 38.71-5.72 2.35-16.14-38.71 5.68-2.37h0.01v-2m0 0c-0.26 0-0.53 0.05-0.78 0.16l-5.68 2.37c-1.04 0.43-1.53 1.62-1.09 2.66l16.16 38.67c0.33 0.78 1.08 1.25 1.88 1.25 0.26 0 0.53-0.05 0.78-0.16l5.68-2.37c1.04-0.43 1.53-1.62 1.09-2.66l-16.16-38.67c-0.33-0.78-1.09-1.25-1.88-1.25z",
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
          "m11.71 57.12 0.03 2.02 6.29 15.14-5.72 2.35-6.29-15.14 5.68-2.37h0.01v-2m0 0c-0.26 0-0.53 0.05-0.78 0.16l-5.68 2.37c-1.04 0.43-1.53 1.62-1.09 2.66l6.31 15.1c0.33 0.78 1.08 1.25 1.88 1.25 0.26 0 0.53-0.05 0.78-0.16l5.68-2.37c1.04-0.43 1.53-1.62 1.09-2.66l-6.31-15.1c-0.33-0.78-1.08-1.25-1.88-1.25z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 54.75,
        cy: 31.221,
        r: 35.67,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF9A9A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.94 55c1.04-0.37 1.59-1.51 1.22-2.55l-0.02-0.06-5.24-14.78h-0.01l-5.83-16.42c-0.43-1.22-1.89-1.7-2.98-1.01-4.29 2.72-6.31 8.17-4.55 13.15l4.67 13.15c0.11 0.32 0.21 0.64 0.29 0.97 0.02 0.1 0.04 0.19 0.07 0.29 0.05 0.24 0.1 0.48 0.14 0.72 0.02 0.1 0.03 0.19 0.04 0.29 0.04 0.31 0.07 0.62 0.09 0.94v0.03c0.01 0.33 0.01 0.65-0.01 0.98 0 0.09-0.01 0.17-0.02 0.26-0.02 0.24-0.04 0.49-0.08 0.73-0.01 0.09-0.02 0.18-0.04 0.27-0.05 0.29-0.1 0.57-0.17 0.86-0.01 0.03-0.01 0.06-0.02 0.09-0.08 0.31-0.17 0.61-0.27 0.91-0.03 0.09-0.07 0.18-0.1 0.27-0.08 0.21-0.16 0.42-0.25 0.62-0.05 0.1-0.09 0.2-0.14 0.31-0.1 0.21-0.21 0.41-0.32 0.62-0.04 0.08-0.08 0.16-0.13 0.23-0.15 0.25-0.31 0.5-0.48 0.74-0.08 0.11-0.17 0.22-0.25 0.34-0.1 0.13-0.21 0.27-0.31 0.4-0.1 0.12-0.2 0.24-0.31 0.36-0.1 0.11-0.2 0.21-0.31 0.32-0.11 0.12-0.22 0.23-0.34 0.34h0.01c-1.02 0.96-2.23 1.74-3.61 2.27l-0.01 0.01-0.04 0.01c-1.42 0.46-2.86 0.62-4.27 0.51-0.47-0.04-0.93-0.11-1.39-0.2-0.12-0.02-0.23-0.05-0.35-0.08-0.43-0.1-0.85-0.22-1.26-0.37-0.03-0.01-0.07-0.02-0.1-0.03-0.44-0.17-0.86-0.37-1.27-0.58-0.1-0.05-0.2-0.11-0.3-0.17-0.4-0.23-0.78-0.47-1.15-0.74-0.01-0.01-0.03-0.02-0.04-0.03-0.38-0.28-0.74-0.6-1.08-0.93l-0.24-0.24c-0.67-0.69-1.25-1.47-1.73-2.33-0.06-0.1-0.11-0.21-0.17-0.31-0.23-0.44-0.44-0.89-0.61-1.37l-1.82-5.15c-1.78-5-6.82-7.96-11.89-7.34-1.26 0.15-2.03 1.46-1.61 2.66l5.26 14.82 2.96 8.36 0.02 0.06c0.37 1.04 1.51 1.58 2.55 1.22l18.59-6.58 0.61-0.22 18.6-6.62z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m74.17 19.86 0.01 2 5.83 16.42c0.02 0.06 0.04 0.11 0.07 0.17l5.17 14.6 0.02 0.06-11.43 4.05 0.18-0.3c0.04-0.07 0.08-0.14 0.12-0.22l0.03-0.06c0.13-0.24 0.26-0.48 0.38-0.72 0.06-0.12 0.11-0.23 0.16-0.36 0.11-0.24 0.2-0.48 0.3-0.73l0.03-0.07c0.03-0.08 0.06-0.16 0.09-0.25 0.13-0.38 0.24-0.73 0.32-1.07 0.01-0.05 0.02-0.1 0.02-0.11 0.08-0.32 0.15-0.66 0.2-1.01 0.01-0.09 0.03-0.18 0.04-0.27l0.01-0.05c0.04-0.29 0.07-0.57 0.09-0.86l0.01-0.07c0.01-0.08 0.01-0.16 0.02-0.23 0.02-0.42 0.02-0.79 0.01-1.16v-0.07c-0.02-0.34-0.05-0.69-0.1-1.07-0.01-0.09-0.03-0.18-0.04-0.28l-0.01-0.06c-0.04-0.28-0.1-0.57-0.16-0.85l-0.02-0.07-0.06-0.27c-0.11-0.42-0.22-0.8-0.34-1.14l-4.67-13.15c-1.41-3.99 0.16-8.53 3.74-10.8 0.01-0.01 0.02-0.01 0.02-0.01v-1.99m-33.9 23.32c3.88 0 7.36 2.45 8.66 6.09l1.82 5.16c0.18 0.52 0.41 1.03 0.71 1.62 0.06 0.12 0.13 0.25 0.2 0.37 0.56 1 1.24 1.92 2.04 2.75 0.09 0.09 0.18 0.19 0.28 0.28 0.44 0.43 0.86 0.79 1.27 1.1 0.02 0.02 0.05 0.04 0.08 0.06 0.39 0.29 0.82 0.56 1.32 0.85 0.12 0.07 0.24 0.13 0.36 0.2 0.54 0.28 1.03 0.51 1.5 0.69 0.05 0.02 0.1 0.04 0.15 0.05 0.07 0.02 0.13 0.05 0.2 0.07l-11.44 4.05-0.02-0.06c-0.01-0.03-0.03-0.07-0.04-0.1l-2.93-8.26-5.28-14.82c0.39-0.08 0.76-0.1 1.12-0.1m33.86-23.32c-0.37 0-0.75 0.1-1.09 0.32-4.29 2.72-6.31 8.17-4.55 13.15l4.67 13.15c0.11 0.32 0.21 0.64 0.29 0.97 0.02 0.1 0.04 0.19 0.07 0.29 0.05 0.24 0.1 0.48 0.14 0.72 0.02 0.1 0.03 0.19 0.04 0.29 0.04 0.31 0.07 0.62 0.09 0.94v0.03c0.01 0.33 0.01 0.65-0.01 0.98 0 0.09-0.01 0.17-0.02 0.26-0.02 0.24-0.04 0.49-0.08 0.73-0.01 0.09-0.02 0.18-0.04 0.27-0.05 0.29-0.1 0.57-0.17 0.86-0.01 0.03-0.01 0.06-0.02 0.09-0.08 0.31-0.17 0.61-0.27 0.91-0.03 0.09-0.07 0.18-0.1 0.27-0.08 0.21-0.16 0.42-0.25 0.62-0.05 0.1-0.09 0.2-0.14 0.31-0.1 0.21-0.21 0.41-0.32 0.62-0.04 0.08-0.08 0.16-0.13 0.23-0.15 0.25-0.31 0.5-0.48 0.74-0.08 0.11-0.17 0.22-0.25 0.34-0.1 0.13-0.21 0.27-0.31 0.4-0.1 0.12-0.2 0.24-0.31 0.36-0.1 0.11-0.2 0.21-0.31 0.32-0.11 0.12-0.22 0.23-0.34 0.34h0.01c-1.02 0.96-2.23 1.74-3.61 2.27l-0.01 0.01-0.04 0.01c-1.13 0.37-2.29 0.54-3.42 0.54-0.28 0-0.57-0.01-0.85-0.03-0.47-0.04-0.93-0.11-1.39-0.2-0.12-0.02-0.23-0.05-0.35-0.08-0.43-0.1-0.85-0.22-1.26-0.37-0.03-0.01-0.07-0.02-0.1-0.03-0.44-0.17-0.86-0.37-1.27-0.58-0.1-0.05-0.2-0.11-0.3-0.17-0.4-0.23-0.78-0.47-1.15-0.74-0.01-0.01-0.03-0.02-0.04-0.03-0.38-0.28-0.74-0.6-1.08-0.93l-0.24-0.24c-0.67-0.69-1.25-1.47-1.73-2.33-0.06-0.1-0.11-0.21-0.17-0.31-0.23-0.44-0.44-0.89-0.61-1.37l-1.82-5.15c-1.62-4.56-5.95-7.42-10.54-7.42-0.45 0-0.9 0.03-1.35 0.08-1.26 0.15-2.03 1.46-1.61 2.66l5.26 14.82 2.96 8.36 0.02 0.06c0.29 0.82 1.06 1.33 1.89 1.33 0.22 0 0.45-0.04 0.67-0.12l18.59-6.58 0.61-0.22 18.59-6.61c1.04-0.37 1.59-1.51 1.22-2.55l-0.02-0.06-5.24-14.78h-0.01l-5.83-16.42c-0.29-0.84-1.07-1.33-1.89-1.33z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 64,
        cy: 55.455,
        r: 17.847,
        gradientTransform: "matrix(1 0 0 .9995 0 .0309)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0.0044248
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 63.32,
      rx: 9,
      ry: 9,
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 63.805,
        cy: 52.806,
        r: 12.013,
        gradientTransform: "matrix(.7376 0 0 .7372 16.793 19.436)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0.9912
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 63.32,
      r: 4,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 56.32c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Telescope;
