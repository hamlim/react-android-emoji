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

function SmallAirplane(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(-.7071 -.7071 .7071 -.7071 105.78 137.05)",
      x: 62.67,
      y: 44.21,
      width: 37.21,
      height: 4.82,
      fill: "#212121"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#757575"
      },
      _react2.default.createElement("path", {
        d:
          "m89.31 64.17 0.4 0.4c0.77 0.77 2.03 0.77 2.8 0l6.72-6.72c0.77-0.77 0.77-2.03 0-2.8l-0.4-0.4c-0.77-0.77-2.03-0.77-2.8 0l-6.72 6.72c-0.78 0.77-0.78 2.03 0 2.8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.2 38.3 0.4 0.4c0.77 0.77 2.03 0.77 2.8 0l6.72-6.72c0.77-0.77 0.77-2.03 0-2.8l-0.4-0.4c-0.77-0.77-2.03-0.77-2.8 0l-6.72 6.72c-0.77 0.77-0.77 2.03 0 2.8z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 36.915,
        x2: 96.978,
        y1: 90.122,
        y2: 31.076,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m26.24 101.61c4.14 4.14 55.66-40 69.16-51.71 2.08-1.8 3.57-4.17 4.2-6.66l0.77-3.06c0.49-1.93 0.06-3.79-1.16-5l-6.44-6.38c-1.17-1.16-2.94-1.59-4.81-1.17l-3.17 0.72c-2.59 0.59-5.06 2.1-6.93 4.26-11.86 13.68-55.74 64.87-51.62 69z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m95.74 28.9 3.25 3.25 8.34-9.49c0.95-0.95 1.24-2.18 0.66-2.77-0.58-0.58-1.82-0.29-2.77 0.66l-9.48 8.35z",
      fill: "#616161"
    }),
    _react2.default.createElement("path", {
      d:
        "m87.49 10.83 16.4 13.17 13.17 16.4c0.8 0.8 2.09 0.8 2.88 0l0.36-0.36c0.8-0.8 0.8-2.09 0-2.88l-16.41-13.16-13.16-16.4c-0.8-0.8-2.09-0.8-2.88 0l-0.36 0.36c-0.8 0.79-0.8 2.08 0 2.87z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m96.84 26.36 4.69 4.69c1.17 1.17 1.17 3.07 0 4.24l-4.29 4.29-8.93-8.93 4.29-4.29c1.17-1.17 3.07-1.17 4.24 0z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m26.24 101.61c4.14 4.14 55.66-40 69.16-51.71 2.08-1.8 3.57-4.17 4.2-6.66l0.77-3.06c0.49-1.93 0.06-3.79-1.16-5l-6.44-6.38c-1.17-1.16-2.94-1.59-4.81-1.17l-3.17 0.72c-2.59 0.59-5.06 2.1-6.93 4.26-11.86 13.68-55.74 64.87-51.62 69z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(-.7071 -.7071 .7071 -.7071 141.22 122.33)",
      x: 79.69,
      y: 25.36,
      width: 32.5,
      height: 13.12,
      clipPath: "url(#c)",
      fill: "#FB8C00"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m89.29 8c0.26 0 0.51 0.1 0.7 0.27l7.41 9.23-9.23-7.41c-0.18-0.19-0.27-0.44-0.27-0.7 0-0.28 0.11-0.54 0.3-0.73l0.36-0.36c0.19-0.19 0.45-0.3 0.73-0.3m21.1 22.5 9.23 7.41c0.18 0.19 0.27 0.44 0.27 0.7 0 0.28-0.11 0.54-0.3 0.73l-0.36 0.36c-0.2 0.2-0.46 0.3-0.73 0.3-0.26 0-0.51-0.1-0.7-0.27l-7.41-9.23m-21.1-23.5c-0.52 0-1.04 0.2-1.44 0.6l-0.36 0.36c-0.8 0.8-0.8 2.09 0 2.88l16.4 13.16 13.17 16.4c0.4 0.4 0.92 0.6 1.44 0.6s1.04-0.2 1.44-0.6l0.36-0.36c0.8-0.8 0.8-2.09 0-2.88l-16.41-13.16-13.16-16.4c-0.4-0.4-0.92-0.6-1.44-0.6z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.87 40.27c-0.43 0.88-0.01 1.96 0.92 2.34 1.42 0.57 3 2 4.32 3.32 1.24 1.24 2.4 2.56 2.85 3.92 0.33 0.99 1.46 1.46 2.38 1.01l2.93-1.45c1.11-0.55 1.28-2.07 0.41-3.73l-0.13-0.25c-1.76-3.36-4.79-6.43-8.14-8.24l-0.21-0.11c-1.66-0.9-3.19-0.77-3.78 0.32l-1.55 2.87z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m80.13 38.48c0.14 0 0.52 0.03 1.11 0.35l0.21 0.11c3.01 1.63 5.75 4.4 7.32 7.41l0.13 0.25c0.28 0.53 0.33 0.91 0.33 1.08l-2.48 1.23c-0.65-1.68-1.98-3.16-3.22-4.4-1.86-1.86-3.37-3.03-4.7-3.64l1.28-2.39h0.02m0-2c-0.77 0-1.39 0.31-1.72 0.91l-1.54 2.88c-0.43 0.88-0.01 1.96 0.92 2.34 1.42 0.57 3 2 4.32 3.32 1.24 1.24 2.4 2.56 2.85 3.92 0.24 0.73 0.93 1.18 1.64 1.18 0.25 0 0.5-0.05 0.74-0.17l2.93-1.45c1.11-0.55 1.28-2.07 0.41-3.73l-0.13-0.25c-1.76-3.36-4.79-6.43-8.14-8.24l-0.21-0.11c-0.74-0.41-1.46-0.6-2.07-0.6z",
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
          "m89.35 29.47c0.82 0 1.52 0.26 2.02 0.75l6.44 6.38c0.7 0.7 0.94 1.85 0.63 3.09l-0.77 3.06c-0.53 2.1-1.8 4.11-3.57 5.64-5.95 5.16-21.38 18.42-36.01 30.13-19.91 15.93-27.2 20.05-29.82 21.05 0.99-2.59 5.07-9.79 20.84-29.5 11.72-14.64 25.08-30.17 30.28-36.17 1.59-1.84 3.67-3.12 5.86-3.62l3.17-0.72c0.31-0.05 0.63-0.09 0.93-0.09m0-2c-0.45 0-0.91 0.05-1.38 0.16l-3.17 0.72c-2.59 0.59-5.06 2.1-6.93 4.26-11.87 13.68-55.75 64.87-51.63 69 0.18 0.18 0.46 0.27 0.83 0.27 7.82 0 55.43-40.8 68.34-51.98 2.08-1.8 3.57-4.17 4.2-6.66l0.77-3.06c0.49-1.93 0.06-3.79-1.16-5l-6.44-6.38c-0.88-0.87-2.09-1.33-3.43-1.33z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 56.959,
        x2: 21.394,
        y1: 72.146,
        y2: 106.26,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF6C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m8.47 85.02 18.79 15.63 15.61 18.77c1.29 1.55 3.47 1.64 4.17 0.18l5.1-8.38c0.73-1.51 0.46-3.5-0.7-5.2l-12.12-17.73-17.84-12.23c-1.71-1.17-3.72-1.44-5.23-0.7l-7.97 5.49c-1.45 0.72-1.35 2.89 0.19 4.17z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 33.05,
        x2: 108.82,
        y1: 19.906,
        y2: 114.17,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF6C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m17.46 25.29 33.73 39.02 12.08 12.6 39.33 33.52c1.44 1.27 3.43 1.02 3.96-0.5l4.6-13.01c0.79-2.24-0.01-5.04-2.01-7.04l-71.14-71.14c-2-2-4.8-2.8-7.04-2.01l-13.01 4.6c-1.52 0.53-1.77 2.52-0.5 3.96z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m32.79 19.43c1.05 0 2.21 0.54 3.1 1.43l71.14 71.14c1.17 1.17 1.7 2.78 1.3 3.92l-4.2 11.88-38.8-33.07-11.92-12.44-33.31-38.54 11.87-4.2c0.25-0.08 0.52-0.12 0.82-0.12m0-3c-0.63 0-1.24 0.1-1.82 0.3l-13.01 4.6c-1.52 0.54-1.77 2.53-0.5 3.96l33.73 39.02 12.08 12.6 39.33 33.52c0.62 0.55 1.35 0.81 2.01 0.81 0.87 0 1.64-0.45 1.95-1.31l4.6-13.01c0.79-2.24-0.01-5.04-2.01-7.04l-71.14-71.14c-1.49-1.49-3.41-2.31-5.22-2.31z",
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
          "m18.12 77.95c0.51 0 1.12 0.21 1.67 0.59l17.37 11.91 11.81 17.27c0.58 0.85 0.67 1.67 0.52 2.11l-4.52 7.41-15.4-18.51c-0.12-0.14-0.25-0.27-0.39-0.39l-18.57-15.44 7.1-4.89c0.12-0.04 0.26-0.06 0.41-0.06m0-3c-0.66 0-1.3 0.14-1.87 0.41l-7.97 5.49c-1.45 0.71-1.35 2.88 0.19 4.17l18.79 15.63 15.61 18.77c0.67 0.81 1.59 1.22 2.41 1.22 0.75 0 1.42-0.34 1.76-1.04l5.1-8.38c0.73-1.51 0.46-3.5-0.7-5.2l-12.12-17.73-17.84-12.23c-1.07-0.73-2.25-1.11-3.36-1.11z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7071 -.7071 .7071 .7071 -58.004 50.559)",
      cx: 32.03,
      cy: 95.3,
      rx: 15.05,
      ry: 2.97,
      fill: "#616161"
    })
  );
}

exports.default = SmallAirplane;
