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

function Policeman(props) {
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
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 64,
          x2: 64,
          y1: 97.5,
          y2: 130.5,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#3B78E7",
          offset: 0.0032478
        }),
        _react2.default.createElement("stop", {
          stopColor: "#386EDA",
          offset: 0.2231
        }),
        _react2.default.createElement("stop", {
          stopColor: "#3052B8",
          offset: 0.6286
        }),
        _react2.default.createElement("stop", {
          stopColor: "#283593",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m13.5 130.5v-9.51c0-17.29 27.21-23.46 50.5-23.49h0.14c13.39 0 25.82 2.15 35.01 6.05 7 2.98 15.35 8.42 15.35 17.44v9.51h-101z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.14 99c24.28 0 48.86 7.55 48.86 21.99v8.01h-98v-8.01c0-6.95 4.88-12.47 14.52-16.42 8.74-3.58 20.99-5.55 34.48-5.57h0.14m0-3h-0.14c-25.65 0.03-52 7.1-52 24.99v11.01h104v-11.01c0-16.86-26.1-24.99-51.86-24.99z",
        fill: "#2E51B0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "M63.17,111.23c-4,0-7.26-3.22-7.26-7.17V91.08h16.16v12.98c0,3.96-3.26,7.17-7.26,7.17H63.17z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.08 92.08v11.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-11.98h14.17m2-2h-18.16v13.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-13.98h-0.01z",
        fill: "#D18100"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m31.51 105.29c-3.46 0-7.08-0.48-12.08-1.6-0.96-0.21-1.78-0.8-2.26-1.59-0.43-0.71-0.55-1.53-0.34-2.3l0.74-2.69c0.38-1.37 1.66-2.33 3.11-2.33 0.25 0 0.49 0.03 0.74 0.08 4.21 0.95 7.23 1.35 10.09 1.35 2.87 0 5.89-0.4 10.09-1.35 0.24-0.05 0.49-0.08 0.73-0.08 1.46 0 2.74 0.96 3.11 2.33l0.74 2.69c0.21 0.77 0.09 1.59-0.34 2.3-0.48 0.8-1.3 1.38-2.26 1.59-5 1.12-8.61 1.6-12.07 1.6z",
        fill: "#3674CE"
      }),
      _react2.default.createElement("path", {
        d:
          "m42.34 95.77c0.98 0 1.89 0.62 2.15 1.59 0.29 1.08 0.44 1.62 0.74 2.69 0.31 1.14-0.51 2.36-1.86 2.66-4.69 1.05-8.27 1.58-11.86 1.58s-7.17-0.53-11.86-1.58c-1.34-0.3-2.17-1.52-1.86-2.66 0.29-1.08 0.44-1.62 0.74-2.69 0.26-0.97 1.17-1.59 2.15-1.59 0.17 0 0.34 0.02 0.51 0.06 4.07 0.92 7.19 1.37 10.31 1.37s6.24-0.46 10.31-1.37c0.18-0.04 0.36-0.06 0.53-0.06m0-2c-0.32 0-0.64 0.04-0.95 0.11-4.19 0.94-7.05 1.32-9.88 1.32s-5.69-0.38-9.88-1.32c-0.31-0.07-0.63-0.11-0.95-0.11-1.91 0-3.59 1.26-4.08 3.06l-0.62 2.26-0.12 0.43c-0.28 1.04-0.13 2.13 0.45 3.08 0.62 1.03 1.68 1.78 2.9 2.06 5.08 1.14 8.76 1.63 12.3 1.63s7.22-0.49 12.3-1.63c1.22-0.27 2.28-1.02 2.9-2.06 0.57-0.95 0.73-2.04 0.45-3.08l-0.74-2.69c-0.5-1.8-2.17-3.06-4.08-3.06z",
        fill: "#2E51B0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m96.62 105.29c-3.46 0-7.08-0.48-12.08-1.6-0.96-0.21-1.78-0.8-2.26-1.59-0.43-0.71-0.55-1.53-0.34-2.3l0.74-2.69c0.38-1.37 1.66-2.33 3.11-2.33 0.25 0 0.49 0.03 0.74 0.08 4.21 0.95 7.23 1.35 10.09 1.35 2.87 0 5.89-0.4 10.1-1.35 0.24-0.05 0.49-0.08 0.73-0.08 1.46 0 2.74 0.96 3.11 2.33l0.74 2.69c0.21 0.77 0.09 1.59-0.34 2.3-0.48 0.8-1.3 1.38-2.26 1.59-5.01 1.12-8.62 1.6-12.08 1.6z",
        fill: "#3674CE"
      }),
      _react2.default.createElement("path", {
        d:
          "m107.44 95.77c0.98 0 1.89 0.62 2.15 1.59 0.29 1.08 0.44 1.62 0.74 2.69 0.31 1.14-0.51 2.36-1.86 2.66-4.69 1.05-8.27 1.58-11.86 1.58s-7.17-0.53-11.86-1.58c-1.34-0.3-2.17-1.52-1.86-2.66 0.29-1.08 0.44-1.62 0.74-2.69 0.26-0.97 1.17-1.59 2.15-1.59 0.17 0 0.34 0.02 0.51 0.06 4.07 0.92 7.19 1.37 10.31 1.37s6.24-0.46 10.31-1.37c0.19-0.04 0.36-0.06 0.53-0.06m0-2c-0.32 0-0.64 0.04-0.95 0.11-4.19 0.94-7.05 1.32-9.88 1.32s-5.69-0.38-9.88-1.32c-0.31-0.07-0.63-0.11-0.95-0.11-1.91 0-3.59 1.26-4.08 3.06l-0.62 2.26-0.12 0.43c-0.28 1.04-0.13 2.13 0.45 3.08 0.62 1.03 1.68 1.78 2.9 2.06 5.08 1.14 8.76 1.63 12.3 1.63s7.22-0.49 12.3-1.63c1.22-0.27 2.28-1.02 2.9-2.06 0.57-0.95 0.73-2.04 0.45-3.08l-0.12-0.43-0.62-2.26c-0.49-1.8-2.17-3.06-4.08-3.06z",
        fill: "#2E51B0"
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "63.97 109.09 53.31 116.35 55.89 130 63.99 130 64.43 130 72.64 130 74.87 116.59",
      clipPath: "url(#a)",
      fill: "#20457A"
    }),
    _react2.default.createElement("polygon", {
      points:
        "66.85 115.09 61.22 115.09 59.44 107.59 63.97 109.09 68.56 107.59",
      clipPath: "url(#a)",
      fill: "#fc0"
    }),
    _react2.default.createElement("polygon", {
      points: "68.82 133.38 59.18 133.38 61.18 115.09 66.82 115.09",
      clipPath: "url(#a)",
      fill: "#fc0"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m51.31 97.61 2.71-0.25c0.52 2.33 2.37 6.1 4.13 8.23 1.37 1.65 3.03 2.9 4.15 3.64l-10.99 9.35v-20.97z",
        fill: "#3674CE"
      }),
      _react2.default.createElement("path", {
        d:
          "m53.28 98.43c0.75 2.48 2.44 5.79 4.1 7.79 1.04 1.26 2.25 2.3 3.29 3.07l-8.36 7.11v-17.88l0.97-0.09m1.6-2.16-4.57 0.42v24.04l13.69-11.64s-2.95-1.59-5.07-4.15c-2.1-2.52-4.05-7.07-4.05-8.67z",
        fill: "#2E51B0"
      }),
      _react2.default.createElement("path", {
        d:
          "m65.7 109.22c1.11-0.74 2.78-1.99 4.15-3.64 1.76-2.12 3.61-5.9 4.13-8.23l2.71 0.25v20.96l-10.99-9.34z",
        fill: "#3674CE"
      }),
      _react2.default.createElement("path", {
        d:
          "m74.72 98.43 0.97 0.09v17.89l-8.36-7.11c1.03-0.77 2.24-1.82 3.29-3.07 1.66-2.02 3.35-5.32 4.1-7.8m-1.6-2.16c0 1.6-1.95 6.15-4.04 8.67-2.12 2.56-5.07 4.15-5.07 4.15l13.69 11.64v-24.04l-4.58-0.42z",
        fill: "#2E51B0"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.67 72.26c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
      fill: "#E59600"
    }),
    _react2.default.createElement("path", {
      d:
        "m91.33 52.43c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.66c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.66m0-2h-54.66c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41 0.01-6.27-4.81-11.41-10.7-11.41z",
      fill: "#D18100"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 94.591,
        y2: 12.825,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB809",
        offset: 0.102
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC21A",
        offset: 0.3707
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC825",
        offset: 0.6592
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 95.27c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.04-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.33 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.81 9.6-22.38 9.6z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 13.07c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z",
      fill: "#ED9E00"
    }),
    _react2.default.createElement("path", {
      d:
        "m39.99 50.73s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.06 0.13-1.49z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement("ellipse", {
      cx: 47.56,
      cy: 58.81,
      rx: 4.93,
      ry: 5.1,
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.05 53.13s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.49 0.28-1.07 0.32-1.56 0.12z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement("ellipse", {
      cx: 80.44,
      cy: 58.81,
      rx: 4.93,
      ry: 5.1,
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.86 68.06c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.29-0.71-0.06-1.37-0.7-1.63z",
      fill: "#E59600"
    }),
    _react2.default.createElement("path", {
      d:
        "m72.42 76.14c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.75-1.66-1.09-3.33-2.92-2.24z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m64 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.3-51.89-36.14-52.13z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64.26,
        cy: 4.2736,
        r: 48.85,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#6D4C41",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#543930",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.02 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.14-36.13 52.14s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.46 0.8 11.55 1.8 19.38 1.8h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.31-51.89-36.12-52.13z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.02 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.14-36.13 52.14s5 8.81 5.1 8.81c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.28 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.09 0 5.1-8.81 5.1-8.81s9.3-51.91-36.13-52.15z",
      fill: "#3F2720"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.967,
        x2: 63.967,
        y1: 25.818,
        y2: 43.693,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#666",
        offset: 0.0040219
      }),
      _react2.default.createElement("stop", {
        stopColor: "#606060",
        offset: 0.0985
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F3F3F",
        offset: 0.6803
      }),
      _react2.default.createElement("stop", {
        stopColor: "#333",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.74 44.18c-22.51-0.15-33.39-6.6-36.54-8.89 2.22-2.56 10.66-9.57 36.54-9.57 25.68 0 34.55 6.52 37 9.01-3.29 2.45-14.51 9.3-37 9.45z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.74 27.22c21.68 0 31 4.67 34.57 7.37-1.37 0.87-3.33 1.96-5.96 3.06-5.39 2.24-14.74 4.94-28.59 5.03-19.39-0.13-29.91-4.99-34.2-7.61 3.33-2.82 12.32-7.85 34.18-7.85m0-3c-33.25 0-38.58 11.36-38.58 11.36s10.25 9.91 38.58 10.1c28.33-0.19 39.11-10.73 39.11-10.73s-5.86-10.73-39.11-10.73z",
      fill: "#2A2A2B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 64,
        x2: 64,
        y1: 4.3519,
        y2: 34.313,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#3B78E7",
        offset: 0.0032478
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3B77E6",
        offset: 0.0115
      }),
      _react2.default.createElement("stop", {
        stopColor: "#335BC2",
        offset: 0.2985
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D46A8",
        offset: 0.5675
      }),
      _react2.default.createElement("stop", {
        stopColor: "#293998",
        offset: 0.8091
      }),
      _react2.default.createElement("stop", {
        stopColor: "#283593",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m23.58 34.5c1.57 6.19 3.07 8.81 3.07 8.81 1.6-2 11.06-11.31 37.29-11.31h0.11 0.03c26.22 0 35.26 9.36 36.85 11.36 0 0 1.9-2.8 3.47-8.99 3.65-14.32-14.39-30.37-40.35-30.37-25.9 0-44.09 16.2-40.47 30.5z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "i",
        d:
          "m23.58 34.5c1.57 6.19 3.07 8.81 3.07 8.81 1.6-2 11.06-11.31 37.29-11.31h0.11 0.03c26.22 0 35.26 9.36 36.85 11.36 0 0 1.9-2.8 3.47-8.99 3.65-14.32-14.39-30.37-40.35-30.37-25.9 0-44.09 16.2-40.47 30.5z"
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
    _react2.default.createElement("path", {
      d:
        "m97.06 35.56c-0.19-1.08-0.76-2.06-1.6-2.76-3.48-2.91-13.85-10.09-31.41-10.09-18.01 0-28.11 7.17-31.47 10.09-0.81 0.7-1.35 1.65-1.53 2.71l-0.01 0.06c-0.58 3.3 2.44 6.12 5.68 5.29 6.33-1.62 16.35-3.6 27.33-3.63 10.98 0.02 20.99 2.01 27.33 3.63 3.24 0.81 6.26-2 5.68-5.3z",
      clipPath: "url(#h)",
      fill: "#3B78E7"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.15 13.82c-0.26 0-0.49 0.13-0.63 0.33-0.54 0.84-1.34 1.4-2.76 1.4-1.37 0-2.38-1.28-2.98-2.07-0.19-0.25-0.49-0.41-0.81-0.41-0.33 0-0.63 0.16-0.82 0.41-0.59 0.79-1.55 2.07-2.92 2.07-1.41 0-2.22-0.57-2.76-1.4-0.13-0.21-0.37-0.33-0.63-0.33-0.24 0-0.46 0.11-0.6 0.29l-0.31 0.4c-0.37 0.48-0.43 1.12-0.15 1.65 0.42 0.8 0.64 1.68 0.64 2.57v3.48c0 2.54 4.1 7.72 7.57 7.72s7.57-5.19 7.57-7.72v-3.48c0-0.89 0.22-1.77 0.64-2.57 0.28-0.53 0.22-1.17-0.15-1.65l-0.31-0.4c-0.13-0.18-0.35-0.29-0.59-0.29z",
      fill: "#F7CB4D"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.05 7.06c17.17 0 28.83 7.13 34.02 13.8 2.31 2.97 4.77 7.61 3.43 12.89-0.51 1.99-1.04 3.86-1.53 5.11-4.9-3.71-15.51-8.86-35.92-8.86h-0.11c-20.3 0-30.99 5.12-36 8.9-0.45-1.29-0.95-3.05-1.45-5.01-1.33-5.25 1.14-9.94 3.44-12.9 5.22-6.7 16.92-13.93 34.12-13.93m0-3c-25.9 0-44.09 16.13-40.47 30.44 1.57 6.19 3.22 9.53 3.22 9.53 1.59-2 10.91-11.03 37.14-11.03h0.11 0.03c26.22 0 35.26 8.86 36.85 10.86 0 0 1.9-3.05 3.47-9.24 3.65-14.32-14.39-30.56-40.35-30.56z",
      fill: "#2E51B0"
    })
  );
}

exports.default = Policeman;