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

function Avocado(props) {
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
      "radialGradient",
      {
        id: "d",
        cx: 44.971,
        cy: 56.68,
        r: 71.753,
        gradientTransform:
          "matrix(1.0131 -.0062449 -.0062449 1.003 .5425 -.2582)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#22B511",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#45590E",
        offset: 0.9902
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m5.91 99.28c5.9 12.4 16.29 11.88 27.29 11.34 5.07-0.25 10.82-0.54 17.33 0.16 28.17 3.04 52.63-5.69 65.43-23.35 9.25-12.75 10.68-28.2 3.92-42.39-6.75-14.19-19.65-22.82-35.37-23.69-21.77-1.2-43.97 12.27-59.38 36.05-3.56 5.5-7.41 9.78-10.8 13.55-7.37 8.2-14.32 15.94-8.42 28.33z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m81.81 24.3c0.84 0 1.69 0.02 2.52 0.07 14.59 0.8 26.55 8.81 32.81 21.97s4.94 27.49-3.64 39.32c-10.45 14.42-29.45 22.69-52.11 22.69-3.45 0-7-0.19-10.55-0.58-2.86-0.31-5.8-0.46-8.99-0.46-3.16 0-6.03 0.14-8.82 0.28-2.25 0.11-4.38 0.22-6.46 0.22-8.19 0-14.05-1.64-17.95-9.83-5.03-10.58 0.69-16.94 7.93-25 3.47-3.86 7.4-8.23 11.09-13.93 14.12-21.76 34.36-34.75 54.17-34.75m0-3.02c-20.9 0-41.91 13.33-56.69 36.12-3.56 5.5-7.41 9.78-10.8 13.55-7.36 8.2-14.31 15.94-8.41 28.33 4.7 9.87 12.25 11.56 20.68 11.56 2.16 0 4.37-0.11 6.61-0.22 2.69-0.13 5.58-0.28 8.66-0.28 2.73 0 5.61 0.11 8.66 0.44 3.69 0.4 7.32 0.59 10.87 0.59 23.52 0 43.44-8.6 54.56-23.94 9.25-12.75 10.68-28.2 3.92-42.39-6.75-14.19-19.65-22.82-35.37-23.69-0.9-0.05-1.79-0.07-2.69-0.07z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 46.908,
        x2: 97.242,
        y1: 7.1899,
        y2: 119.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#5DB111",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#45590E",
        offset: 0.9902
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.19 5.86c-12.66 5.32-12.68 15.58-12.71 26.45-0.01 5.01-0.02 10.69-1.06 17.07-4.48 27.65 2.95 52.11 19.88 65.43 12.23 9.62 27.55 11.65 42.03 5.56s23.75-18.45 25.43-33.92c2.32-21.41-9.95-43.83-32.84-59.97-5.29-3.73-9.36-7.69-12.95-11.19-7.78-7.59-15.13-14.75-27.78-9.43z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m56.5 7.02c6.69 0 11.64 4.82 17.38 10.41 3.67 3.57 7.82 7.62 13.31 11.49 21.98 15.5 33.79 36.88 31.59 57.2-1.56 14.35-10.16 25.83-23.61 31.48-5.08 2.14-10.29 3.22-15.49 3.22-8.43 0-16.57-2.9-23.53-8.37-16.05-12.63-23.07-36.03-18.77-62.59 1.07-6.62 1.09-12.42 1.1-17.55 0.02-10.69 0.04-19.14 10.87-23.69 2.57-1.07 4.91-1.6 7.15-1.6m0-3c-2.52 0-5.26 0.56-8.32 1.84-12.66 5.32-12.68 15.58-12.71 26.45-0.01 5.01-0.02 10.69-1.06 17.07-4.48 27.65 2.95 52.11 19.88 65.43 7.58 5.97 16.36 9.02 25.38 9.02 5.53 0 11.15-1.14 16.65-3.45 14.48-6.09 23.75-18.45 25.43-33.92 2.32-21.41-9.95-43.83-32.84-59.97-5.29-3.73-9.36-7.69-12.95-11.19-5.89-5.77-11.54-11.28-19.46-11.28z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 72.141,
        cy: 66.389,
        r: 56.532,
        gradientTransform: "matrix(.9351 -.3543 .4556 1.2025 -25.566 12.114)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF9C4",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCF7BD",
        offset: 0.1454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F0AB",
        offset: 0.3507
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E58D",
        offset: 0.5917
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CFD663",
        offset: 0.8579
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9D156",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9D13B",
        offset: 0.9902
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m49.73 9.52c-10.62 4.46-10.28 13.92-9.93 23.93 0.16 4.61 0.35 9.85-0.31 15.7-2.87 25.32 4.32 48.11 19.24 60.98 10.77 9.29 23.92 11.69 36.07 6.58s19.63-16.18 20.53-30.38c1.24-19.65-10.02-40.74-30.11-56.4-4.65-3.62-8.25-7.41-11.44-10.76-6.91-7.26-13.43-14.11-24.05-9.65z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.59 64.63c-5.65-9.63-19.84-20.06-28.43-16.71-8.15 3.17-12.29 16.26-9.93 27.18 3.14 14.58 17.73 24.1 28.5 19.98 10.71-4.25 17.41-17.59 9.86-30.45z",
      fill: "#CCC465"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 70.333,
        cy: 66.667,
        r: 27.101,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B37F58",
        offset: 0.0295
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7E3600",
        offset: 0.9951
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.45 64.39c-5.56-8.42-18.86-17.15-26.45-13.72-7.2 3.25-10.31 15.26-7.67 25 3.53 13.01 17.15 20.89 26.67 16.66 9.47-4.34 14.88-16.69 7.45-27.94z",
      fill: "url(#a)"
    })
  );
}

exports.default = Avocado;
