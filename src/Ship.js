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

function Ship(props) {
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
        "m68.58 39.8h-16.96l1.69-9.7c0.22-1.24 1.07-2.12 2.05-2.12h9.29c0.97 0 1.81 0.85 2.04 2.06l1.89 9.76z"
    }),
    _react2.default.createElement("path", {
      d: "m48.34 19.01",
      fill: "#BDBDBD",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m52.53 19.01",
      fill: "#BDBDBD",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "i",
        d:
          "m68.58 39.8h-16.96l1.69-9.7c0.22-1.24 1.07-2.12 2.05-2.12h9.29c0.97 0 1.81 0.85 2.04 2.06l1.89 9.76z"
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
    _react2.default.createElement("rect", {
      x: 49.69,
      y: 27.98,
      width: 20.68,
      height: 3.77,
      clipPath: "url(#h)",
      fill: "#C62828"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.66 28.98c0.47 0 0.92 0.53 1.06 1.25l1.65 8.57h-14.56l1.49-8.53c0.13-0.74 0.59-1.29 1.07-1.29h9.29m0-1h-9.29c-0.98 0-1.84 0.88-2.05 2.12l-1.69 9.7h16.95l-1.88-9.76c-0.24-1.21-1.08-2.06-2.04-2.06z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m78.08 13.39c-2.92-0.42-5.55 0.99-6.93 3.25-0.2 0.33-0.62 0.42-0.94 0.23-0.83-0.5-1.8-0.78-2.83-0.78-2.02 0-3.78 1.09-4.75 2.7-0.17 0.28-0.5 0.4-0.81 0.29-0.66-0.23-1.4-0.3-2.16-0.15-1.75 0.34-3.11 1.83-3.31 3.6-0.28 2.5 1.68 4.62 4.12 4.62 1.06 0 2.02-0.4 2.76-1.05 0.24-0.22 0.6-0.24 0.86-0.04 0.92 0.69 2.06 1.1 3.29 1.1 1.6 0 3.04-0.68 4.04-1.77 0.26-0.28 0.69-0.31 0.96-0.05 1.23 1.13 2.86 1.82 4.66 1.82 4.08 0 7.33-3.53 6.87-7.7-0.34-3.09-2.78-5.63-5.83-6.07z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m77.04 14.32c0.29 0 0.59 0.02 0.89 0.06 2.6 0.38 4.69 2.55 4.98 5.17 0.19 1.71-0.33 3.35-1.47 4.62-1.12 1.25-2.73 1.97-4.4 1.97-1.48 0-2.89-0.55-3.99-1.56-0.31-0.28-0.71-0.44-1.12-0.44-0.47 0-0.93 0.2-1.25 0.55-0.87 0.93-2.04 1.45-3.31 1.45-0.98 0-1.91-0.31-2.7-0.9-0.29-0.22-0.64-0.33-1-0.33-0.41 0-0.81 0.15-1.13 0.43-0.58 0.51-1.32 0.8-2.09 0.8-0.89 0-1.75-0.38-2.34-1.05-0.6-0.67-0.88-1.55-0.78-2.46 0.15-1.35 1.18-2.47 2.5-2.72 0.21-0.04 0.42-0.06 0.62-0.06 0.35 0 0.69 0.06 1.02 0.17 0.18 0.06 0.37 0.09 0.56 0.09 0.59 0 1.14-0.31 1.44-0.82 0.83-1.39 2.28-2.22 3.89-2.22 0.82 0 1.62 0.22 2.32 0.64 0.27 0.16 0.57 0.24 0.88 0.24 0.59 0 1.13-0.3 1.44-0.81 1.08-1.76 2.97-2.82 5.04-2.82m0-1c-2.5 0-4.69 1.33-5.9 3.32-0.13 0.21-0.35 0.33-0.58 0.33-0.12 0-0.25-0.03-0.36-0.1-0.83-0.5-1.8-0.78-2.83-0.78-2.02 0-3.78 1.09-4.75 2.7-0.12 0.21-0.35 0.33-0.58 0.33-0.08 0-0.15-0.01-0.23-0.04-0.42-0.15-0.88-0.23-1.35-0.23-0.27 0-0.54 0.03-0.81 0.08-1.75 0.34-3.11 1.83-3.31 3.6-0.28 2.5 1.68 4.62 4.12 4.62 1.06 0 2.02-0.4 2.76-1.05 0.13-0.12 0.3-0.18 0.46-0.18 0.14 0 0.28 0.04 0.4 0.13 0.92 0.69 2.06 1.1 3.29 1.1 1.6 0 3.04-0.68 4.04-1.77 0.14-0.15 0.33-0.23 0.52-0.23 0.16 0 0.32 0.06 0.45 0.17 1.23 1.13 2.86 1.82 4.66 1.82 4.08 0 7.33-3.53 6.87-7.7-0.34-3.07-2.78-5.6-5.83-6.04-0.35-0.06-0.7-0.08-1.04-0.08z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.58 39.8h-16.96l1.69-9.7c0.22-1.24 1.07-2.12 2.05-2.12h9.29c0.97 0 1.81 0.85 2.04 2.06l1.89 9.76z"
    }),
    _react2.default.createElement("path", {
      d: "m80.34 19.01",
      fill: "#BDBDBD",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m84.53 19.01",
      fill: "#BDBDBD",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "g",
        d:
          "m100.58 39.8h-16.96l1.69-9.7c0.22-1.24 1.07-2.12 2.05-2.12h9.29c0.97 0 1.81 0.85 2.04 2.06l1.89 9.76z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "f"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement("rect", {
      x: 81.69,
      y: 27.98,
      width: 20.68,
      height: 3.77,
      clipPath: "url(#f)",
      fill: "#C62828"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m96.66 28.98c0.47 0 0.92 0.53 1.06 1.25l1.65 8.57h-14.56l1.49-8.53c0.13-0.74 0.59-1.29 1.07-1.29h9.29m0-1h-9.29c-0.98 0-1.84 0.88-2.05 2.12l-1.69 9.7h16.95l-1.88-9.76c-0.24-1.21-1.08-2.06-2.04-2.06z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.08 13.39c-2.92-0.42-5.55 0.99-6.93 3.25-0.2 0.33-0.62 0.42-0.94 0.23-0.83-0.5-1.8-0.78-2.83-0.78-2.02 0-3.78 1.09-4.75 2.7-0.17 0.28-0.5 0.4-0.81 0.29-0.66-0.23-1.4-0.3-2.16-0.15-1.75 0.34-3.11 1.83-3.31 3.6-0.28 2.5 1.68 4.62 4.12 4.62 1.06 0 2.02-0.4 2.76-1.05 0.24-0.22 0.6-0.24 0.86-0.04 0.92 0.69 2.06 1.1 3.29 1.1 1.6 0 3.04-0.68 4.04-1.77 0.26-0.28 0.69-0.31 0.96-0.05 1.23 1.13 2.86 1.82 4.66 1.82 4.08 0 7.33-3.53 6.87-7.7-0.34-3.09-2.78-5.63-5.83-6.07z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m109.04 14.32c0.29 0 0.59 0.02 0.89 0.06 2.6 0.38 4.69 2.55 4.98 5.17 0.19 1.71-0.33 3.35-1.47 4.62-1.12 1.25-2.73 1.97-4.4 1.97-1.48 0-2.89-0.55-3.99-1.56-0.31-0.28-0.71-0.44-1.12-0.44-0.47 0-0.93 0.2-1.25 0.55-0.87 0.93-2.04 1.45-3.31 1.45-0.98 0-1.91-0.31-2.7-0.9-0.29-0.22-0.64-0.33-1-0.33-0.41 0-0.81 0.15-1.13 0.43-0.58 0.51-1.32 0.8-2.09 0.8-0.89 0-1.75-0.38-2.34-1.05-0.6-0.67-0.88-1.55-0.78-2.46 0.15-1.35 1.18-2.47 2.5-2.72 0.21-0.04 0.42-0.06 0.62-0.06 0.35 0 0.69 0.06 1.02 0.17 0.18 0.06 0.37 0.09 0.56 0.09 0.59 0 1.14-0.31 1.44-0.82 0.83-1.39 2.28-2.22 3.89-2.22 0.82 0 1.62 0.22 2.32 0.64 0.27 0.16 0.57 0.24 0.88 0.24 0.59 0 1.13-0.3 1.44-0.81 1.08-1.76 2.97-2.82 5.04-2.82m0-1c-2.5 0-4.69 1.33-5.9 3.32-0.13 0.21-0.35 0.33-0.58 0.33-0.12 0-0.25-0.03-0.36-0.1-0.83-0.5-1.8-0.78-2.83-0.78-2.02 0-3.78 1.09-4.75 2.7-0.12 0.21-0.35 0.33-0.58 0.33-0.08 0-0.15-0.01-0.23-0.04-0.42-0.15-0.88-0.23-1.35-0.23-0.27 0-0.54 0.03-0.81 0.08-1.75 0.34-3.11 1.83-3.31 3.6-0.28 2.5 1.68 4.62 4.12 4.62 1.06 0 2.02-0.4 2.76-1.05 0.13-0.12 0.3-0.18 0.46-0.18 0.14 0 0.28 0.04 0.4 0.13 0.92 0.69 2.06 1.1 3.29 1.1 1.6 0 3.04-0.68 4.04-1.77 0.14-0.15 0.33-0.23 0.52-0.23 0.16 0 0.32 0.06 0.45 0.17 1.23 1.13 2.86 1.82 4.66 1.82 4.08 0 7.33-3.53 6.87-7.7-0.34-3.07-2.78-5.6-5.83-6.04-0.35-0.06-0.7-0.08-1.04-0.08z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 69.575,
        x2: 69.575,
        y1: 57.171,
        y2: 77.576,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0031217
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.7 52-82.76-0.04c-1.25 0-2.37 0.78-2.81 1.95l-8.98 24.09h94.89l5.96-11.09-3.4-12.69c-0.36-1.31-1.54-2.22-2.9-2.22z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 76.088,
        x2: 76.088,
        y1: 43.016,
        y2: 60.937,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0031217
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.67 40.58c-0.43-1.45-1.73-2.45-3.21-2.45h-59.75c-0.82 0-1.55 0.56-1.8 1.39l-4.47 14.58h73.29l-4.06-13.52z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 83.5,
        y2: 125.65,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0.9826
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 80,
      width: 120,
      height: 44,
      fill: "url(#c)"
    }),
    _react2.default.createElement("rect", {
      x: -381,
      y: -484.67,
      width: 0,
      height: 0.67,
      fill: "#F2F2F2"
    }),
    _react2.default.createElement("path", {
      d: "m-89.5-394.17",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m-85.5-394.17",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m24-382.25",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m32.64-403.97",
      fill: "none",
      stroke: "#ED1E79",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m19.15 53.32",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m23.35 53.32",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("polygon", {
      points: "10.16 61.92 8.76 63.9 10.16 61.94",
      fill: "none"
    }),
    _react2.default.createElement("polygon", {
      points: "95.19 33.96 94.8 34.56 94.8 34.56",
      fill: "#90CAF9"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "110.42 33.79 110.95 34.56",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.1 70.35c-1.69 1.89-4.11 2.97-6.64 2.97h-35.02c-0.91 0-1.79-0.26-2.55-0.76l-13.13-5.94c-0.76-0.5-1.65-0.76-2.55-0.76h-29.26c-0.79 0-1.29 0.84-0.92 1.53l5.66 8.55c1.27 2.36-2.52 6.34-2.52 8.3 0 1.4 0.57 3.89 3.99 3.89l101.94-0.1c4.43 0 8.13-3.36 8.56-7.76l1.19-12.02c0.08-0.78-0.53-1.45-1.32-1.45l-19.59 0.02c-2.99 0.02-5.85 1.3-7.84 3.53z"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m96.48 68.8-2.78 3.11c-0.81 0.9-1.96 1.42-3.16 1.42h-34.42c-1.66 0-16.15-10.49-16.15-10.49h-34.6c-0.79 0-1.29 0.84-0.92 1.53l6.24 11.58c1.27 2.36-2.52 6.34-2.52 8.3 0 1.4 0.57 3.89 3.99 3.89l101.94-0.1c4.43 0 8.13-3.36 8.56-7.76l1.05-10.65c0.15-1.51-1.04-2.82-2.56-2.82l-20.29 0.02c-1.67 0.01-3.26 0.72-4.38 1.97z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("rect", {
      x: 4.56,
      y: 83.54,
      width: 121.54,
      height: 8.12,
      clipPath: "url(#a)",
      fill: "#C62828"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m35.2 67.86c0.52 0 1.02 0.15 1.46 0.43l0.13 0.08 0.14 0.06 13 5.88c1.05 0.65 2.26 1 3.51 1h35.02c3.1 0 6.07-1.33 8.13-3.64 1.62-1.81 3.94-2.85 6.37-2.85l18.84-0.02-1.11 11.27c-0.34 3.4-3.16 5.96-6.57 5.96l-101.94 0.1c-0.96 0-1.99-0.15-1.99-1.86 0.04-0.36 0.6-1.41 0.98-2.1 1.15-2.14 2.59-4.79 1.31-7.18l-0.04-0.08-0.05-0.08-4.62-6.98h27.43m0-1.99h-29.25c-0.79 0-1.29 0.84-0.92 1.53l5.66 8.55c1.27 2.36-2.52 6.34-2.52 8.3 0 1.4 0.57 3.89 3.99 3.89l101.94-0.1c4.43 0 8.13-3.36 8.56-7.76l1.19-12.02c0.08-0.78-0.53-1.45-1.32-1.45l-19.59 0.02c-3 0-5.86 1.28-7.86 3.52-1.69 1.89-4.11 2.97-6.64 2.97h-35c-0.91 0-1.79-0.26-2.55-0.76l-13.13-5.94c-0.77-0.48-1.66-0.75-2.56-0.75z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#4FC3F7"
      },
      _react2.default.createElement("path", {
        d:
          "m102.08 48.05h-8c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v2c0 1.1-0.89 2-2 2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.19 48.05h-8c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m80.13 48.05h-8c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v2c0 1.1-0.89 2-2 2z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.45 62.26h-4c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.83 62.26h-4c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v2c0 1.1-0.89 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.22 62.26h-4c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m89.6 62.26h-4c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v2c0 1.1-0.89 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m105.99 62.26h-4c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.23 40c0.57 0 1.23 0.45 1.41 1.09l3.49 11.48c0.25 0.85 1.09 1.43 1.97 1.43h1.6c0.45 0 0.85 0.3 0.96 0.74l3.2 11.92-5.02 9.34h-90.81l7.98-21.39c0.15-0.39 0.52-0.66 0.94-0.66l9.15-0.01c0.88 0 1.65-0.58 1.91-1.42l3.81-12.48c0-0.01 0.01-0.02 0.01-0.03h59.17m0.46-2.01h-59.75c-0.82 0-1.55 0.63-1.8 1.46l-3.81 12.5-9.16 0.04c-1.25 0-2.37 0.76-2.81 1.93l-8.98 24.07h94.89l5.96-11.09-3.4-12.69c-0.35-1.31-1.54-2.22-2.9-2.22h-1.6l-3.43-11.48c-0.43-1.46-1.73-2.52-3.21-2.52z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "g",
        {
          fill: "#424242"
        },
        _react2.default.createElement("path", {
          d:
            "m102.08 43.05c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h8m0-1h-8c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-2c0-1.11-0.89-2-2-2z"
        }),
        _react2.default.createElement("path", {
          d:
            "m58.19 43.05c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h8m0-1h-8c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-2c0-1.11-0.9-2-2-2z"
        }),
        _react2.default.createElement("path", {
          d:
            "m80.13 43.05c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h8m0-1h-8c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-2c0-1.11-0.89-2-2-2z"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m40.45 57.26c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h4m0-1h-4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-2c0-1.11-0.9-2-2-2z",
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
          "m56.83 57.26c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h4m0-1h-4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-2c0-1.11-0.89-2-2-2z",
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
          "m73.22 57.26c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h4m0-1h-4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-2c0-1.11-0.9-2-2-2z",
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
          "m89.6 57.26c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h4m0-1h-4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-2c0-1.11-0.89-2-2-2z",
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
          "m105.99 57.26c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h4m0-1h-4c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h4c1.1 0 2-0.9 2-2v-2c0-1.11-0.9-2-2-2z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 103.64,
      cy: 74.37,
      r: 3.14,
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("circle", {
      cx: 115.17,
      cy: 74.37,
      r: 3.14,
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("path", {
      d:
        "m24.53 75.42h-6.4c-0.54 0-0.98 0.44-0.98 0.98v2.23c0 0.54 0.44 0.98 0.98 0.98h6.4c0.54 0 0.98-0.44 0.98-0.98v-2.23c0-0.54-0.44-0.98-0.98-0.98z",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.64 72.23c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14m0-1c-1.74 0-3.14 1.41-3.14 3.14 0 1.74 1.41 3.14 3.14 3.14s3.14-1.41 3.14-3.14-1.4-3.14-3.14-3.14z",
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
          "m115.17 72.23c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.95-2.14 2.14-2.14m0-1c-1.74 0-3.14 1.41-3.14 3.14 0 1.74 1.41 3.14 3.14 3.14 1.74 0 3.14-1.41 3.14-3.14s-1.41-3.14-3.14-3.14z",
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
          "m24.51 76.42 0.02 2.19-6.38 0.02-0.02-2.21h6.38m0.02-1h-6.4c-0.54 0-0.98 0.44-0.98 0.98v2.23c0 0.54 0.44 0.98 0.98 0.98h6.4c0.54 0 0.98-0.44 0.98-0.98v-2.23c0-0.54-0.44-0.98-0.98-0.98z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m121 83v38h-114v-38h114m3-3h-120v44h120v-44z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Ship;
