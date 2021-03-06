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

function Labcoat(props) {
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
        id: "f",
        x1: 52.5,
        x2: 52.5,
        y1: 3.9368,
        y2: 3.9368,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D5ECFD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9C9E3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m52.5 3.94",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 10.721,
        y2: 123.65,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8FCFF",
        offset: 0.3903
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E5F3FD",
        offset: 0.9561
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        offset: 0.999
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.67 84.94 15.5-5.81c0.48-0.18 0.72-0.71 0.54-1.19-2.96-7.65-23.56-58.09-26.24-60.09-2.51-1.88-17.21-5.66-20.89-6.35-0.48-0.09-6.26 20.97-6.26 20.97-0.24 0.93-1.57 0.92-1.79-0.02 0 0-5.57-21.06-6.06-20.95-3.64 0.81-17.46 4.12-19.95 5.99-2.67 2.01-23.28 51.36-26.23 59.01-0.18 0.48 0.06 1.01 0.54 1.19l15.5 5.81c0.48 0.18 1.01-0.07 1.19-0.54 0 0 10.45-25.48 10.45-24.46v58.34c0 0.3 0.14 0.58 0.39 0.75 1.79 1.23 9.59 6.16 19.81 6.16 25.96 0 30.9-4.93 31.72-6.16 0.1-0.15 0.15-0.33 0.15-0.51v-58.58c0-1.03 10.45 25.9 10.45 25.9 0.17 0.48 0.71 0.72 1.18 0.54z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.16 5.99h14.61l0.92 11.67-8.38 19.96-7.99-19.4s0.84-12.09 0.84-12.23z",
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m101.67 85.19 15.5-5.81c0.48-0.18 0.72-0.71 0.54-1.19-2.96-7.65-26.24-60.09-26.24-60.09s-17.21-7.66-20.89-8.35c-0.48-0.09-6.26 22.97-6.26 22.97-0.24 0.93-1.57 0.92-1.79-0.02 0 0-5.57-23.06-6.06-22.95-3.64 0.81-19.95 7.99-19.95 7.99s-23.28 51.36-26.23 59.01c-0.18 0.48 0.06 1.01 0.54 1.19l15.5 5.81c0.48 0.18 1.01-0.07 1.19-0.54 0 0 10.45-25.48 10.45-24.46v58.34c0 0.3 0.14 0.58 0.39 0.75 1.79 1.23 9.59 6.16 19.81 6.16 25.96 0 30.9-4.93 31.72-6.16 0.1-0.15 0.15-0.33 0.15-0.51v-58.58c0-1.03 10.45 25.9 10.45 25.9 0.17 0.48 0.71 0.72 1.18 0.54z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m48.15 103.8h-9.79c-1.58 0-2.86-1.28-2.86-2.86v-16.01h15.5v16.02c0 1.57-1.28 2.85-2.85 2.85z",
        fill: "none",
        stroke: "#CFD8DC",
        strokeMiterlimit: 10,
        strokeWidth: 2
      })
    ),
    _react2.default.createElement("line", {
      x1: 35,
      x2: 50.5,
      y1: 88.17,
      y2: 88.17,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#CFD8DC",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m88.81 103.8h-9.79c-1.58 0-2.86-1.28-2.86-2.86v-16.01h15.5v16.02c0.01 1.57-1.27 2.85-2.85 2.85z",
        fill: "none",
        stroke: "#CFD8DC",
        strokeMiterlimit: 10,
        strokeWidth: 2
      })
    ),
    _react2.default.createElement("line", {
      x1: 75.67,
      x2: 91.17,
      y1: 88.17,
      y2: 88.17,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#CFD8DC",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("line", {
      x1: 8.25,
      x2: 31.75,
      y1: 71,
      y2: 79.5,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#E2E7EA",
      strokeMiterlimit: 10,
      strokeWidth: 0.75
    }),
    _react2.default.createElement("line", {
      x1: 120.75,
      x2: 97.25,
      y1: 72,
      y2: 80.5,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#E2E7EA",
      strokeMiterlimit: 10,
      strokeWidth: 0.75
    }),
    _react2.default.createElement("path", {
      d:
        "m79.38 53.89h-3.13c-1.92 0-3.47-1.55-3.47-3.47v-7.88h10.08v7.88c-0.01 1.92-1.56 3.47-3.48 3.47z",
      fill: "none",
      stroke: "#CFD8DC",
      strokeMiterlimit: 10,
      strokeWidth: 1.0223
    }),
    _react2.default.createElement("path", {
      d:
        "m57.36 20.12c0 0.11 0.02 0.22 0.06 0.33l5.98 15.67 6.28-15.66c0.04-0.11 0.07-0.22 0.07-0.34l0.96-8.23h-14.31l0.96 8.23z",
      fill: "none"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.398,
        x2: 63.398,
        y1: 31.346,
        y2: 40.884,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D5ECFD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9C9E3",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.4 36.12 63.4 36.12",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m78.59 12.83c-0.03-0.17-0.1-0.33-0.21-0.46l-6.75-7.9-0.89 7.42h-0.03l-0.96 8.23c0 0.12-0.02 0.23-0.07 0.34l-6.68 14.84-5.59-14.85c-0.04-0.1-0.06-0.22-0.06-0.33l-0.96-8.23h-0.13l-0.86-7.33-6.67 7.81c-0.11 0.13-0.19 0.29-0.21 0.46l-1.42 9.61c-0.08 0.56 0.36 1.07 0.93 1.05l3.86-0.1c0.82-0.02 1.25 0.96 0.68 1.56l-2.45 2.55c-0.36 0.38-0.34 0.98 0.05 1.32l10.81 9.62c0.29 0.26-1.36 4.14-1.36 4.14l0.15 80.25h1l-0.15-80.25 16.28-13.76c0.41-0.34 0.44-0.96 0.07-1.34l-2.43-2.53c-0.57-0.59-0.14-1.58 0.68-1.56l3.85 0.1c0.57 0.01 1.02-0.49 0.93-1.05l-1.41-9.61z",
      fill: "#CDD6DA"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.509,
        x2: 63.509,
        y1: 4.2051,
        y2: 38.514,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D5ECFD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9C9E3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m56.4 11.89-0.13-1.09c0-0.51 0.41-0.92 0.92-0.92h12.72c0.51 0 0.92 0.41 0.92 0.92l-0.13 1.09h0.03l0.89-7.42-0.16-0.19c-0.17-0.2-0.43-0.32-0.7-0.32h-7.12c-0.04-0.04-0.06 0.02-0.09 0.09-0.03-0.07-0.05-0.12-0.09-0.09h-7.12c-0.27 0-0.52 0.12-0.7 0.32l-0.24 0.28 0.88 7.32h0.12z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.46 4.27c-0.17-0.2-0.43-0.32-0.7-0.32h-7.12c-0.04-0.04-0.06 0.02-0.09 0.09-0.03-0.07-0.05-0.12-0.09-0.09h-7.12c-0.27 0-0.52 0.12-0.7 0.32l-0.24 0.29 0.88 7.32h14.47l0.89-7.42-0.18-0.19z",
      fill: "#ECEFF1"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 56.64,
      r: 1.27,
      fill: "#CFD8DC"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 76.53,
      r: 1.27,
      fill: "#CFD8DC"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 96.43,
      r: 1.27,
      fill: "#CFD8DC"
    }),
    _react2.default.createElement("rect", {
      x: 72.67,
      y: 42.25,
      width: 10.33,
      height: 2.58,
      fill: "#CFD8DC"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m57.93 6.22m11.87 0.73 5.9 6.91v0.03l0.3 1.95 1.9 0.51c7.4 1.99 10.7 3.28 11.6 3.79 3.04 4.3 19.53 43.99 24.64 56.92l-11.6 4.35c-0.94-2.41-2.64-6.76-4.35-11.08-1.49-3.78-2.7-6.79-3.58-8.95-2.01-4.9-2.42-5.91-4.57-5.91l-3.01 0.03v60.73c-1.41 1.1-7.51 4.51-28.88 4.51-8.13 0-14.67-3.47-17.2-5.04v-57.2l-0.01-3.03h-3c-2.1 0-2.57 1.08-4.55 5.63-0.89 2.04-2.09 4.89-3.59 8.46-1.7 4.05-3.38 8.15-4.32 10.43l-11.63-4.36c5.15-12.92 21.62-51.64 24.64-55.84 0.58-0.32 2.87-1.37 10.7-3.43l1.92-0.5 0.29-1.96 0.01-0.04 5.9-6.91h12.49m-18.31 6.32m-12.88 6.36m32.15-15.68h-14.42c-0.27 0-0.52 0.12-0.7 0.32l-0.25 0.29-6.67 7.81c-0.11 0.13-0.19 0.29-0.21 0.46l-0.09 0.63c-4.96 1.3-10.42 2.92-11.9 4.02-2.67 2.02-23.28 51.37-26.23 59.02-0.18 0.48 0.06 1.01 0.54 1.19l15.5 5.81c0.11 0.04 0.22 0.06 0.32 0.06 0.37 0 0.73-0.23 0.86-0.6 0 0 10.04-24.49 10.44-24.49 0.01 0 0.01 0.01 0.01 0.03v58.34c0 0.3 0.14 0.58 0.39 0.75 1.79 1.23 9.59 6.16 19.81 6.16 25.96 0 30.9-4.93 31.72-6.16 0.1-0.15 0.15-0.33 0.15-0.51v-58.58c0-0.02 0-0.03 0.01-0.03 0.38 0 10.44 25.93 10.44 25.93 0.14 0.37 0.49 0.6 0.86 0.6 0.11 0 0.22-0.02 0.32-0.06l15.5-5.81c0.48-0.18 0.72-0.71 0.54-1.19-2.96-7.65-23.56-58.09-26.24-60.09-1.52-1.14-7.5-2.97-12.8-4.39l-0.09-0.63c-0.03-0.17-0.1-0.33-0.21-0.46l-6.75-7.9-0.16-0.19c-0.17-0.21-0.42-0.33-0.69-0.33z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Labcoat;
