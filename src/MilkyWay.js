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

function MilkyWay(props) {
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
      _react2.default.createElement("path", {
        id: "i",
        d:
          "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#i"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 64,
        cy: 120.33,
        r: 119.72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#512DA8",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#352893",
        offset: 0.4691
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1A237E",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      clipPath: "url(#a)",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "g",
          x1: -41.472,
          x2: 154.56,
          y1: 17.916,
          y2: 17.916,
          gradientTransform: "matrix(-.5419 .8405 .8405 .5419 70.238 -44.449)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#90CAF9",
          stopOpacity: 0,
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1976D2",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m137.62 38.55c9.31-14.99 16.14-30.95 18.97-48.47 1.04-6.41 1.38-12.83-0.66-19.14-2.11-6.52-6.1-11.77-11.22-16.19-3.45-2.97-7.26-5.43-11.5-7.15-0.48-0.19-0.97-0.36-1.46-0.51-3.09-0.95-3.57-0.58-3.31 2.54 1.65 19.79-0.94 39-8.09 57.54-3.14 8.16-7.12 15.91-12.15 23.06-11.55 16.43-26.43 28.64-45.52 35.37-13.61 4.8-27.67 6.42-42.02 5.77-21.67-0.98-42.14-6.84-61.98-15.27-6.69-2.84-13.2-6.06-19.68-9.35-0.92-0.46-1.89-0.84-2.86-1.16-0.75-0.24-1.69-0.79-2.26 0.08-0.5 0.76 0.23 1.45 0.69 2.05 1.58 2.06 3.45 3.84 5.43 5.49 6.77 5.65 13.92 10.79 21.12 15.86 5.05 3.55 10.98 5.42 16.66 7.71 13.48 5.45 27.35 9.52 41.76 11.67 12.41 1.85 24.83 2.08 37.3 0.38 17.6-2.4 33.8-8.65 48.96-17.71 8.71-5.21 16.02-12.09 22.52-19.85 3.36-4.04 6.49-8.26 9.3-12.72z",
        fill: "url(#g)"
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
          x1: 75.553,
          x2: 75.553,
          y1: -1.3578,
          y2: 98.842,
          gradientTransform: "matrix(.9164 .5643 -.5774 .9377 4.8467 -48.784)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C6BC0",
          stopOpacity: 0,
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#3949AB",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-61.51 44.34c2.37-1.07 4.38-0.22 6.13 1.26 3.98 3.34 8.3 6.23 12.72 8.86 20.94 12.49 43.3 21.24 67.73 24.43 16.61 2.17 32.44-1.04 47.78-7.73 19.92-8.69 36.25-22.18 50.1-38.96 3.49-4.23 6.68-8.69 9.64-13.28 1.71-2.65 3.14-5.47 5.32-7.8 0.94-1 2.02-1.75 3.39-1.95 0.61 0.37 1.22 0.75 1.82 1.12 0.86 1.53 1.37 3.16 1.62 4.92 0.58 4.15 0.49 8.33 0.04 12.48-1.95 18.19-7.12 35.21-18.38 50.16-8.06 10.7-17.81 19.22-29.59 25.35-11.58 6.03-23.94 9.18-36.74 10.64-14.51 1.65-28.81 0.85-42.86-2.84-12.16-3.2-23.69-7.89-34.44-14.41-0.46-0.28-0.91-0.58-1.48-0.57-1.22-0.75-2.43-1.5-3.65-2.25-0.34-0.32-0.64-0.72-1.03-0.96-5.25-3.17-10.09-6.91-14.77-10.86-8.31-7.02-15.74-14.85-21.59-24.13-2.1-3.34-3.65-6.87-3.32-11 0.54-0.82 1.05-1.65 1.56-2.48z",
        fill: "url(#f)"
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
          x1: 20.488,
          x2: 20.488,
          y1: -8.6869,
          y2: 74.591,
          gradientTransform: "matrix(.9692 .2464 -.2464 .9692 -7.6544 -31.899)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C6BC0",
          stopOpacity: 0,
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#3949AB",
          stopOpacity: 0.6,
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-73.75 32.34c1.49-1.3 3.17-1.13 4.8-0.45 3.7 1.54 7.56 2.66 11.42 3.58 18.31 4.38 36.79 5.76 55.49 2.66 12.71-2.11 23.6-7.94 33.3-16.17 12.6-10.7 21.44-24.06 27.69-39.25 1.58-3.83 2.87-7.76 3.97-11.73 0.64-2.29 1.03-4.65 2.09-6.81 0.46-0.93 1.07-1.71 2.04-2.16 0.53 0.14 1.07 0.27 1.6 0.41 0.99 0.91 1.74 1.98 2.34 3.2 1.4 2.87 2.31 5.91 2.95 9.01 2.83 13.58 3.01 27.02-1.76 40.32-3.41 9.52-8.59 17.83-15.81 24.87-7.1 6.92-15.44 11.94-24.51 15.83-10.28 4.41-20.97 7-32.16 7.44-9.69 0.38-19.26-0.46-28.68-2.79-0.4-0.1-0.8-0.22-1.22-0.09-1.07-0.27-2.14-0.54-3.21-0.82-0.33-0.16-0.64-0.38-0.98-0.46-4.6-1.13-9.03-2.76-13.4-4.58-7.75-3.23-15.04-7.25-21.51-12.65-2.33-1.94-4.29-4.15-5.01-7.22 0.2-0.72 0.38-1.43 0.56-2.14z",
        fill: "url(#e)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.75 66.62c-2.49-0.94-3.88-3.64-3.15-6.23-0.77 2.58-3.4 4.11-6 3.57 2.49 0.93 3.88 3.63 3.15 6.23 0.77-2.59 3.39-4.12 6-3.57z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#FFEB3B",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.18 62.84c-2.6-0.79-4.2-3.46-3.62-6.16-0.62 2.69-3.21 4.43-5.9 4.04 2.61 0.79 4.21 3.46 3.63 6.15 0.63-2.68 3.2-4.42 5.89-4.03z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#A7FFEB",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.27 44.98c-1.9-0.58-3.07-2.53-2.65-4.5-0.45 1.97-2.34 3.24-4.3 2.95 1.9 0.57 3.07 2.53 2.64 4.49 0.46-1.95 2.34-3.22 4.31-2.94z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#FFF59D",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m93.57 16.91c-2.62-0.78-4.25-3.44-3.7-6.16-0.61 2.71-3.18 4.47-5.9 4.11 2.63 0.78 4.26 3.45 3.7 6.16 0.61-2.71 3.18-4.48 5.9-4.11z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#FFEB3B",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m39.62 87.35c-2.59-0.61-4.32-3.1-3.94-5.77-0.44 2.66-2.84 4.52-5.49 4.32 2.59 0.61 4.33 3.11 3.94 5.78 0.43-2.67 2.83-4.53 5.49-4.33z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#FFEB3B",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m23.49 82.12c-2.6-0.79-4.2-3.46-3.63-6.15-0.62 2.69-3.2 4.42-5.89 4.03 2.6 0.79 4.2 3.45 3.62 6.15 0.62-2.68 3.21-4.41 5.9-4.03z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#A7FFEB",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m113.81 47.28c-2.6-0.79-4.2-3.46-3.63-6.15-0.62 2.69-3.2 4.42-5.89 4.03 2.6 0.79 4.2 3.45 3.62 6.15 0.63-2.68 3.21-4.42 5.9-4.03z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#A7FFEB",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m77.43 81.77c-1.9-0.58-3.07-2.52-2.65-4.5-0.45 1.97-2.34 3.23-4.3 2.95 1.9 0.58 3.07 2.53 2.64 4.49 0.46-1.96 2.35-3.23 4.31-2.94z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#FFEB3B",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("path", {
      d:
        "m99.84 27.23c-2.11-0.64-3.4-2.8-2.93-4.98-0.5 2.18-2.59 3.58-4.78 3.27 2.11 0.64 3.41 2.8 2.94 4.98 0.51-2.18 2.59-3.59 4.77-3.27z",
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#A7FFEB",
      fillRule: "evenodd"
    }),
    _react2.default.createElement("circle", {
      cx: 45.89,
      cy: 27.74,
      r: 3.4,
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#5C6BC0",
      fillRule: "evenodd",
      opacity: 0.8
    }),
    _react2.default.createElement("circle", {
      cx: 83.52,
      cy: 73.06,
      r: 3.15,
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#9575CD",
      fillRule: "evenodd",
      opacity: 0.5
    }),
    _react2.default.createElement("circle", {
      cx: 104.58,
      cy: 81.55,
      r: 2.52,
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#9575CD",
      fillRule: "evenodd",
      opacity: 0.5
    }),
    _react2.default.createElement("circle", {
      cx: 40.1,
      cy: 55.13,
      r: 2.62,
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#5C6BC0",
      fillRule: "evenodd",
      opacity: 0.8
    }),
    _react2.default.createElement("circle", {
      cx: 73.4,
      cy: 20.07,
      r: 3.62,
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#9575CD",
      fillRule: "evenodd",
      opacity: 0.5
    }),
    _react2.default.createElement("circle", {
      cx: 103.62,
      cy: 59.48,
      r: 3.62,
      clipPath: "url(#a)",
      clipRule: "evenodd",
      fill: "#9575CD",
      fillRule: "evenodd",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 104.81,
        cy: 12.241,
        r: 12.712,
        gradientTransform: "matrix(.9761 .2174 -.2174 .9761 13.418 -13.126)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.13 21.03 0.43 4.17c0.01 0.13 0.09 0.24 0.2 0.3l3.68 2.01c0.28 0.16 0.27 0.57-0.03 0.7l-3.83 1.7c-0.12 0.05-0.2 0.16-0.23 0.29l-0.77 4.12c-0.06 0.32-0.46 0.43-0.68 0.19l-2.8-3.12c-0.09-0.1-0.21-0.14-0.34-0.13l-4.16 0.54c-0.32 0.04-0.55-0.3-0.39-0.58l2.1-3.63c0.06-0.11 0.07-0.25 0.02-0.36l-1.8-3.79c-0.14-0.29 0.12-0.62 0.44-0.55l4.1 0.88c0.13 0.03 0.26-0.01 0.35-0.1l3.05-2.88c0.24-0.23 0.63-0.08 0.66 0.24z",
      clipPath: "url(#a)",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.43,
        cy: 76.774,
        r: 13.273,
        gradientTransform: "matrix(.9761 .2174 -.2174 .9761 13.418 -13.126)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m55.57 73.89 2.83 2.98c0.09 0.09 0.21 0.13 0.34 0.11l4.06-0.64c0.31-0.05 0.55 0.28 0.4 0.56l-1.96 3.61c-0.06 0.11-0.06 0.24 0 0.36l1.86 3.66c0.14 0.28-0.1 0.61-0.41 0.55l-4.04-0.75c-0.12-0.02-0.25 0.02-0.34 0.11l-2.9 2.9c-0.22 0.22-0.61 0.09-0.65-0.22l-0.54-4.07c-0.02-0.12-0.09-0.23-0.21-0.29l-3.66-1.86c-0.28-0.14-0.28-0.55 0.01-0.69l3.7-1.77c0.11-0.05 0.19-0.16 0.21-0.29l0.64-4.06c0.05-0.31 0.44-0.43 0.66-0.2z",
      clipPath: "url(#a)",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 78.2,
        cy: 26.993,
        r: 14.319,
        gradientTransform: "matrix(.9761 .2174 -.2174 .9761 13.418 -13.126)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.52 33.02 4.04 0.72c0.12 0.02 0.25-0.02 0.34-0.11l2.89-2.92c0.22-0.23 0.61-0.1 0.65 0.22l0.56 4.07c0.02 0.12 0.09 0.23 0.21 0.29l3.67 1.84c0.28 0.14 0.28 0.55 0 0.69l-3.69 1.79c-0.11 0.05-0.19 0.16-0.21 0.29l-0.62 4.06c-0.05 0.31-0.43 0.44-0.65 0.21l-2.85-2.96c-0.09-0.09-0.21-0.13-0.34-0.11l-4.05 0.67c-0.31 0.05-0.55-0.28-0.4-0.56l1.94-3.62c0.06-0.11 0.06-0.24 0-0.36l-1.89-3.65c-0.16-0.29 0.08-0.62 0.4-0.56z",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m-2.09 107.33c5.23-3 13.55-7.5 18.58-10.2 2.71-1.46 5.93-1.6 8.76-0.39l13.91 5.91c1.78 0.75 3.73 0.99 5.63 0.67l10.25-1.71c1.74-0.29 3.53-0.12 5.19 0.49l5.87 2.17c3.59 1.33 7.61 0.53 10.42-2.07l14.63-13.56c1.58-1.46 3.58-2.38 5.71-2.63l0.53-0.06c3.24-0.38 6.46 0.82 8.66 3.22l5.82 6.35c1.48 1.61 3.43 2.7 5.58 3.11l2.15 0.41c4.85 0.92 8.33 5.19 8.25 10.13-0.16 9.53-0.31 23.59 0.16 23.12 0.59-0.59-92.78-0.21-125.55-0.05-6 0.03-10.71-5.13-10.14-11.1 0.2-2.09 0.4-4.18 0.57-5.97 0.3-3.29 2.17-6.21 5.02-7.84z",
      clipPath: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#eee"
      })
    )
  );
}

exports.default = MilkyWay;
