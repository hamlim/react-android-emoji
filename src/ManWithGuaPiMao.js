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

function ManWithGuaPiMao(props) {
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
        id: "j",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#j"
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
          id: "i",
          x1: 64,
          x2: 64,
          y1: 98.409,
          y2: 130.47,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0.0029297
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1E89E6",
          offset: 0.4716
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1976D2",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m14.86 130.47v-9.16c0-15.78 24.68-22.88 49.15-22.91h0.12c24.36 0 49.02 7.87 49.02 22.91v9.16h-98.29z",
        fill: "url(#i)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.13 99.91c12.55 0 24.74 2.13 33.43 5.84 6.43 2.74 14.08 7.67 14.08 15.56v7.66h-95.28v-7.66c0-14.75 23.93-21.38 47.65-21.4h0.12m0-3h-0.13c-24.82 0.03-50.64 7.09-50.64 24.4v10.66h101.29v-10.66c-0.01-16.31-25.58-24.4-50.52-24.4z",
        fill: "#006FC7"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m13.36 121.31v10.66h101.29v-10.66c0-16.35-25.67-24.43-50.64-24.4-24.83 0.03-50.65 7.09-50.65 24.4z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "a"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#c"
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
            x1: 56.719,
            x2: 71.57,
            y1: 96.442,
            y2: 96.442,
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#F44336",
            offset: 0
          }),
          _react2.default.createElement("stop", {
            stopColor: "#EB3E34",
            offset: 0.3822
          }),
          _react2.default.createElement("stop", {
            stopColor: "#D32F2F",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m57.35 97.16c0.92 1.12 3.55 1.73 7.03 1.73 4.05 0 6.16-0.92 6.74-1.69 0.69-0.91 0.4-2.86 0.36-3.03-0.03-0.09-0.05-0.17-0.07-0.17h-14.63c-0.09 0-0.19 2.23 0.57 3.16z",
          fill: "url(#h)"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "g",
            x1: 64,
            x2: 64,
            y1: 94,
            y2: 134,
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#F44336",
            offset: 0
          }),
          _react2.default.createElement("stop", {
            stopColor: "#EB3E34",
            offset: 0.3822
          }),
          _react2.default.createElement("stop", {
            stopColor: "#D32F2F",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m87.51 94c0.23 3-0.26 8.42-3.67 12.94-2.64 3.49-6.43 5.77-11.21 6.95-2.7 0.66-4.63 3.05-4.63 5.84v12.27h-8v-12.43c0-2.75-1.89-5.12-4.55-5.82-4.62-1.2-8.05-3.42-10.67-6.75-3.57-4.55-4.17-10-4.04-13h-6.74v40h60v-40h-6.49z",
          fill: "url(#g)"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement("path", {
          d:
            "m91 97v34h-20v-11.28c0-1.38 0.96-2.58 2.35-2.92 5.54-1.36 9.88-4.07 12.89-8.05 3.1-4.11 4.03-8.64 4.26-11.74h0.5m-53.16-0.01c0.3 3.12 1.34 7.74 4.58 11.86 3.06 3.9 7.07 6.45 12.27 7.8 1.36 0.35 2.31 1.55 2.31 2.91v11.43h-20v-34h0.84m56.16-3h-6.49c0.23 3-0.26 8.42-3.67 12.94-2.64 3.49-6.43 5.77-11.21 6.95-2.7 0.66-4.63 3.05-4.63 5.84v12.27h-8v-12.43c0-2.75-1.89-5.12-4.55-5.82-4.62-1.2-8.05-3.42-10.67-6.75-3.57-4.55-4.17-10-4.04-13h-6.74v40h60v-40z",
          fill: "#BF1D1D"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#a)"
        },
        _react2.default.createElement("path", {
          d:
            "m64.13 99.91c12.55 0 24.74 2.13 33.43 5.84 6.43 2.74 14.08 7.67 14.08 15.56v7.66h-95.28v-7.66c0-14.75 23.93-21.38 47.65-21.4h0.12m0-3h-0.13c-24.82 0.03-50.64 7.09-50.64 24.4v10.66h101.29v-10.66c-0.01-16.31-25.58-24.4-50.52-24.4z",
          fill: "#0A65BF"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M63.2,107.82c-3.88,0-7.04-3.12-7.04-6.96v-8.72h15.69v8.72c0,3.84-3.16,6.96-7.04,6.96H63.2z",
        fill: "#3C2B24"
      }),
      _react2.default.createElement("path", {
        d:
          "m70.85 93.14v7.72c0 3.29-2.71 5.96-6.04 5.96h-1.61c-3.33 0-6.04-2.67-6.04-5.96v-7.72h13.69m2-2h-17.7v9.72c0 4.4 3.6 7.96 8.04 7.96h1.61c4.44 0 8.04-3.56 8.04-7.96v-9.72h0.01z",
        fill: "#291B16"
      }),
      _react2.default.createElement("path", {
        d:
          "m37.39 73.76c-5.2 0-9.43-4.54-9.43-10.11s4.23-10.11 9.43-10.11h53.23c5.2 0 9.43 4.54 9.43 10.11s-4.23 10.11-9.43 10.11h-53.23z",
        fill: "#3C2B24"
      }),
      _react2.default.createElement("path", {
        d:
          "m90.61 54.53c4.65 0 8.43 4.09 8.43 9.11 0 5.03-3.78 9.11-8.43 9.11h-53.23c-4.65 0-8.43-4.09-8.43-9.11 0-5.03 3.78-9.11 8.43-9.11h53.23m0-2h-53.23c-5.74 0-10.43 5-10.43 11.11s4.7 11.11 10.43 11.11h53.23c5.74 0 10.43-5 10.43-11.11 0.01-6.11-4.69-11.11-10.43-11.11z",
        fill: "#291B16"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 64,
          x2: 64,
          y1: 95.512,
          y2: 15.93,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#63463D",
          offset: 0.1584
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6D5047",
          offset: 0.5335
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64 96.17c-8.34 0-16.07-3.32-21.77-9.34-6.46-6.83-9.88-16.66-9.88-28.43 0-12.05 3.46-23.16 9.76-31.27 5.88-7.59 13.86-11.94 21.89-11.94s16.01 4.35 21.89 11.94c6.29 8.11 9.76 19.22 9.76 31.27 0 11.77-3.41 21.6-9.87 28.43-5.71 6.02-13.44 9.34-21.78 9.34z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 16.19c7.72 0 15.41 4.21 21.1 11.55 6.16 7.94 9.55 18.83 9.55 30.66 0 11.51-3.32 21.1-9.6 27.74-5.51 5.82-12.98 9.03-21.05 9.03-8.06 0-15.54-3.21-21.05-9.03-6.28-6.64-9.6-16.23-9.6-27.74 0-11.83 3.39-22.72 9.55-30.66 5.69-7.34 13.38-11.55 21.1-11.55m0-2c-16.95 0-32.65 18.13-32.65 44.21 0 25.94 16.17 38.77 32.65 38.77 16.47 0 32.65-12.83 32.65-38.77 0-26.08-15.7-44.21-32.65-44.21z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#1A1717"
        },
        _react2.default.createElement("path", {
          d:
            "m40.62 52.82s0.13-0.19 0.37-0.49c0.06-0.08 0.12-0.16 0.21-0.25 0.1-0.11 0.23-0.21 0.36-0.33s0.27-0.24 0.42-0.37c0.15-0.12 0.3-0.22 0.46-0.34 0.16-0.11 0.33-0.23 0.52-0.34 0.19-0.1 0.39-0.21 0.59-0.31 0.2-0.11 0.42-0.2 0.64-0.29s0.45-0.18 0.69-0.26c0.48-0.13 0.98-0.28 1.5-0.35 0.52-0.1 1.05-0.11 1.58-0.13 0.53 0.03 1.07 0.03 1.58 0.13 0.52 0.06 1.02 0.21 1.5 0.35 0.24 0.08 0.47 0.17 0.69 0.26s0.44 0.18 0.64 0.29 0.4 0.21 0.59 0.31c0.18 0.11 0.36 0.23 0.52 0.34 0.16 0.12 0.32 0.22 0.46 0.33 0.14 0.12 0.26 0.23 0.38 0.34s0.23 0.21 0.33 0.3c0.1 0.1 0.18 0.2 0.25 0.29 0.3 0.35 0.45 0.56 0.45 0.56 0.49 0.69 0.34 1.64-0.35 2.14-0.42 0.3-0.94 0.36-1.39 0.21l-0.28-0.1s-0.19-0.07-0.48-0.2c-0.07-0.03-0.15-0.07-0.24-0.11-0.09-0.03-0.19-0.07-0.29-0.11-0.2-0.08-0.43-0.17-0.68-0.24-0.13-0.04-0.25-0.09-0.38-0.13-0.14-0.03-0.28-0.07-0.42-0.11l-0.21-0.06c-0.07-0.01-0.15-0.03-0.23-0.04-0.15-0.03-0.3-0.07-0.46-0.1-0.32-0.03-0.64-0.1-0.97-0.12-0.33-0.04-0.67-0.03-1.01-0.05-0.34 0.02-0.68 0.01-1.01 0.05-0.34 0.02-0.65 0.08-0.97 0.12-0.16 0.03-0.31 0.07-0.46 0.1-0.08 0.01-0.15 0.03-0.23 0.04l-0.21 0.06c-0.14 0.04-0.28 0.07-0.42 0.11s-0.26 0.09-0.38 0.13-0.24 0.08-0.36 0.11c-0.1 0.04-0.2 0.07-0.28 0.1-0.09 0.03-0.18 0.06-0.26 0.08-0.09 0.04-0.2 0.1-0.28 0.14-0.35 0.18-0.56 0.26-0.56 0.26-0.8 0.33-1.73-0.05-2.06-0.85-0.23-0.49-0.15-1.05 0.14-1.47z"
        }),
        _react2.default.createElement("ellipse", {
          cx: 47.99,
          cy: 60.69,
          rx: 4.8,
          ry: 4.97
        }),
        _react2.default.createElement("path", {
          d:
            "m85.48 55.16s-0.21-0.09-0.56-0.26c-0.08-0.04-0.19-0.1-0.28-0.14-0.09-0.02-0.17-0.05-0.26-0.08s-0.18-0.06-0.28-0.1c-0.11-0.04-0.23-0.07-0.36-0.11s-0.25-0.09-0.38-0.13c-0.14-0.03-0.28-0.07-0.42-0.11l-0.21-0.06c-0.07-0.01-0.15-0.03-0.23-0.04-0.15-0.03-0.3-0.07-0.46-0.1-0.32-0.04-0.64-0.1-0.97-0.12-0.33-0.04-0.67-0.03-1.01-0.05-0.34 0.02-0.68 0.01-1.01 0.05-0.34 0.02-0.65 0.08-0.97 0.12-0.16 0.03-0.31 0.07-0.46 0.1-0.08 0.01-0.15 0.03-0.23 0.04l-0.21 0.06c-0.14 0.04-0.28 0.08-0.42 0.11-0.14 0.04-0.26 0.09-0.38 0.13-0.25 0.07-0.48 0.16-0.68 0.24-0.1 0.04-0.2 0.08-0.29 0.11s-0.17 0.07-0.24 0.11c-0.29 0.13-0.48 0.2-0.48 0.2l-0.27 0.1c-0.8 0.28-1.67-0.14-1.95-0.94-0.17-0.49-0.07-1.01 0.2-1.4 0 0 0.15-0.21 0.45-0.56 0.08-0.09 0.16-0.19 0.25-0.29 0.1-0.1 0.21-0.2 0.33-0.3 0.12-0.11 0.25-0.22 0.38-0.34 0.14-0.12 0.3-0.22 0.46-0.33s0.34-0.23 0.52-0.34c0.19-0.1 0.39-0.21 0.59-0.31 0.2-0.11 0.42-0.2 0.64-0.29s0.45-0.18 0.69-0.26c0.48-0.13 0.98-0.28 1.5-0.35 0.52-0.1 1.05-0.11 1.58-0.13 0.53 0.03 1.07 0.03 1.58 0.13 0.52 0.06 1.02 0.21 1.5 0.35 0.24 0.08 0.47 0.17 0.69 0.26s0.44 0.18 0.64 0.29 0.4 0.21 0.59 0.31c0.18 0.11 0.35 0.23 0.52 0.34 0.16 0.12 0.32 0.22 0.46 0.34 0.15 0.13 0.29 0.25 0.42 0.37s0.25 0.22 0.36 0.33c0.09 0.1 0.15 0.18 0.21 0.25 0.24 0.3 0.37 0.49 0.37 0.49 0.49 0.72 0.3 1.7-0.42 2.19-0.47 0.27-1.03 0.31-1.5 0.12z"
        }),
        _react2.default.createElement("ellipse", {
          cx: 80.01,
          cy: 60.69,
          rx: 4.8,
          ry: 4.97
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m67.76 69.69c-0.1-0.04-0.21-0.07-0.31-0.08h-6.89c-0.11 0.01-0.21 0.04-0.31 0.08-0.62 0.25-0.97 0.9-0.67 1.59s1.67 2.62 4.43 2.62 4.14-1.93 4.43-2.62-0.06-1.33-0.68-1.59z",
        fill: "#33251F"
      }),
      _react2.default.createElement("path", {
        d:
          "m72.3 77.57c-3.1 1.85-13.27 1.85-16.38 0-1.78-1.06-3.6 0.56-2.86 2.18 0.73 1.59 6.28 5.28 11.07 5.28s10.28-3.69 11-5.28c0.75-1.62-1.05-3.24-2.83-2.18z",
        fill: "#1A1717"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "e",
          d:
            "m64 7.34h-0.02s-0.01 0-0.02 0c-44.25 0.24-35.18 50.78-35.18 50.78s4.97 8.75 4.97 8.58c-0.03-1.38 0.44-6.71 0.44-6.71l-2.61-2.85s3.79-24.77 6.61-24.26c4.34 0.79 25.85 1.95 25.87 1.95 7.62 0 14.53-0.35 18.87-1.14 2.82-0.51 9.39 1.65 10.4 4.34 1.3 3.45 3.05 19.2 3.05 19.2l-2.61 2.76s0.48 5.36 0.45 6.71c0 0.17 4.97-8.58 4.97-8.58s9.06-50.54-35.19-50.78z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#e"
        })
      ),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: 64.253,
          cy: 7.5756,
          r: 47.576,
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
          "m64.02 7.34h-0.02-0.02c-44.25 0.24-35.18 50.78-35.18 50.78s4.97 8.75 4.97 8.58c-0.16-7.06 2.67-19.56 4.67-24.89 1.01-2.68 3.8-4.25 6.62-3.73 4.34 0.79 11.25 1.76 18.87 1.76h0.08 0.08c7.62 0 14.53-0.97 18.87-1.76 2.82-0.51 5.61 1.05 6.62 3.73 2 5.32 4.83 17.83 4.67 24.89 0 0.17 4.97-8.58 4.97-8.58s9.05-50.54-35.2-50.78z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.02 7.34h-0.02-0.02c-44.25 0.24-35.18 50.78-35.18 50.78s4.87 8.58 4.96 8.58c-0.03-1.44 0.07-3.12 0.25-4.9-0.12-0.28-2.39-4.62-2.41-4.66-0.23-1.56-0.91-6.8-0.54-13.21 0.4-6.86 2.11-16.52 8-23.59 5.52-6.62 13.9-10.01 24.9-10.08h0.04c11.02 0.06 19.41 3.45 24.93 10.08 10.52 12.62 7.97 33.43 7.47 36.8-0.02 0.04-2.39 4.46-2.43 4.53 0.19 1.84 0.3 3.56 0.26 5.03 0.09 0 4.96-8.58 4.96-8.58s9.08-50.54-35.17-50.78z",
        fill: "#3F2720"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m64.38 16.55h-0.17c-3.25 0-5.91-2.66-5.91-5.91v-0.47c0-3.25 2.66-5.91 5.91-5.91h0.17c3.25 0 5.91 2.66 5.91 5.91v0.47c0.01 3.25-2.65 5.91-5.91 5.91z",
        fill: "#FF9800"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.38 6.25c2.16 0 3.91 1.76 3.91 3.91v0.47c0 2.16-1.76 3.91-3.91 3.91h-0.17c-2.16 0-3.91-1.76-3.91-3.91v-0.47c0-2.16 1.76-3.91 3.91-3.91h0.17m0-2h-0.17c-3.25 0-5.91 2.66-5.91 5.91v0.47c0 3.25 2.66 5.91 5.91 5.91h0.17c3.25 0 5.91-2.66 5.91-5.91v-0.47c0.01-3.25-2.65-5.91-5.91-5.91z",
        fill: "#E68900"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 64.198,
          x2: 64.198,
          y1: 7.3289,
          y2: 53.454,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F44336",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EB3E34",
          offset: 0.3822
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D32F2F",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m100.57 44.61c0-22.29-9.94-37.28-36.37-37.28s-36.37 14.99-36.37 37.28c0 3.04 0.3 5.99 0.84 8.84 0 0 7.03-11.53 35.53-11.53s35.53 11.53 35.53 11.53c0.55-2.84 0.84-5.8 0.84-8.84z",
        fill: "url(#n)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.2 10.33c22.46 0 33.37 11.21 33.37 34.28 0 0.87-0.03 1.73-0.08 2.6-5.17-3.72-15.21-8.29-33.3-8.29s-28.12 4.57-33.3 8.29c-0.05-0.87-0.08-1.73-0.08-2.6 0.02-23.07 10.93-34.28 33.39-34.28m0-3c-26.44 0-36.37 14.99-36.37 37.28 0 3.04 0.3 5.99 0.84 8.84 0 0 7.03-11.53 35.53-11.53s35.53 11.53 35.53 11.53c0.55-2.85 0.84-5.8 0.84-8.84 0-22.29-9.94-37.28-36.37-37.28z",
        fill: "#BF1D1D"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "m",
          x1: 64.201,
          x2: 64.201,
          y1: 7.3753,
          y2: 42.692,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1F8DEA",
          offset: 0.3822
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1976D2",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64.18 7.38s-21.31 6.17-21.31 35.32c0 0 7.93-4.61 21.24-4.61s21.43 4.61 21.43 4.61c0-29.16-21.36-35.32-21.36-35.32z",
        fill: "url(#m)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.17 10.55c3.42 1.36 16.38 7.78 18.16 27.51-3.93-1.39-10.2-2.98-18.23-2.98-7.97 0-14.15 1.57-18.04 2.96 1.77-19.8 14.61-26.12 18.11-27.49m0.01-3.17s-21.31 6.17-21.31 35.32c0 0 7.93-4.61 21.24-4.61s21.43 4.61 21.43 4.61c0-29.16-21.36-35.32-21.36-35.32z",
        fill: "#0A65BF"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 64.001,
          x2: 64.001,
          y1: 29.624,
          y2: 55.346,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#757575",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#676767",
          offset: 0.0613
        }),
        _react2.default.createElement("stop", {
          stopColor: "#565656",
          offset: 0.1675
        }),
        _react2.default.createElement("stop", {
          stopColor: "#4B4B4B",
          offset: 0.2997
        }),
        _react2.default.createElement("stop", {
          stopColor: "#444",
          offset: 0.4851
        }),
        _react2.default.createElement("stop", {
          stopColor: "#424242",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m100.72 39.81c-2.52-2.39-12.63-10.18-36.63-10.19-24 0.01-34.14 7.8-36.66 10.19-1.4 1.33-1.42 3.13-1.42 4.38v0.05l0.24 6.87c0.1 1.14 0.37 2.71 1.82 3.59 0.69 0.42 1.47 0.64 2.26 0.64 0.62 0 1.21-0.13 1.78-0.39 1.98-0.89 3.7-2.11 5.36-3.28 4.22-2.99 9.75-5.91 26.72-5.91s22.51 2.92 26.72 5.91c1.66 1.17 3.37 2.39 5.36 3.28 0.57 0.26 1.17 0.39 1.79 0.39 0.79 0 1.57-0.22 2.26-0.64 1.45-0.88 1.53-2.45 1.62-3.59l0.06-6.87v-0.05c0-1.25 0.12-3.05-1.28-4.38z",
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 60.157,
          x2: 68.438,
          y1: 33.266,
          y2: 41.547,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#ff0",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFFB00",
          offset: 0.0197
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA00",
          offset: 0.1306
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFDF00",
          offset: 0.2683
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFD800",
          offset: 0.4621
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFD600",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m65.55 42.79h-2.5c-2.2 0-4-1.8-4-4v-2.76c0-2.2 1.8-4 4-4h2.5c2.2 0 4 1.8 4 4v2.76c0 2.2-1.8 4-4 4z",
        fill: "url(#k)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m64 33h0.2c23.61 0 33.03 7.62 34.68 9.18 0.47 0.44 0.57 1.1 0.57 2.09l-0.28 6.69c-0.1 1.04-0.33 1.15-0.41 1.2-0.22 0.14-0.47 0.2-0.71 0.2-0.19 0-0.37-0.05-0.55-0.13-1.72-0.78-3.32-1.91-4.86-3-4.61-3.27-10.61-6.46-28.46-6.46s-23.85 3.19-28.46 6.46c-1.54 1.09-3.13 2.22-4.86 3-0.18 0.08-0.36 0.12-0.55 0.12-0.24 0-0.49-0.07-0.71-0.21-0.07-0.04-0.29-0.18-0.39-1.22l-0.26-6.74c0-0.99 0.1-1.56 0.57-2 1.65-1.56 11.07-9.18 34.68-9.18m0-3.38c-24 0.01-34.2 7.8-36.72 10.19-1.4 1.33-1.48 3.13-1.48 4.38v0.05l0.24 6.87c0.1 1.14 0.37 2.71 1.82 3.59 0.69 0.42 1.47 0.64 2.26 0.64 0.62 0 1.21-0.13 1.78-0.39 1.98-0.89 3.7-2.11 5.36-3.28 4.22-2.99 9.75-5.91 26.72-5.91s22.51 2.92 26.72 5.91c1.66 1.17 3.37 2.39 5.36 3.28 0.57 0.26 1.17 0.39 1.79 0.39 0.79 0 1.57-0.22 2.26-0.64 1.45-0.88 1.53-2.45 1.62-3.59l0.06-6.87v-0.05c0-1.24 0.12-3.05-1.28-4.38-2.51-2.39-12.51-10.17-36.51-10.19z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m65.55 34.03c1.1 0 2 0.9 2 2v2.76c0 1.1-0.9 2-2 2h-2.5c-1.1 0-2-0.9-2-2v-2.76c0-1.1 0.9-2 2-2h2.5m0-2h-2.5c-2.2 0-4 1.8-4 4v2.76c0 2.2 1.8 4 4 4h2.5c2.2 0 4-1.8 4-4v-2.76c0-2.2-1.8-4-4-4z",
        fill: "#E6AD00"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m62.2 110.36-13.28-5.42c-1.15-0.47-1.9-1.59-1.9-2.83v-5.41c0-2.17 2.2-3.65 4.21-2.83l12.05 4.92c0.54 0.22 0.89 0.74 0.89 1.32v8.92c0 1.03-1.03 1.72-1.97 1.33z",
      fill: "#1565C0"
    }),
    _react2.default.createElement("path", {
      d:
        "m65.99 110.36 13.28-5.42c1.15-0.47 1.9-1.59 1.9-2.83v-5.41c0-2.17-2.2-3.65-4.21-2.83l-12.05 4.93c-0.54 0.22-0.89 0.74-0.89 1.32v8.92c0 1.02 1.03 1.71 1.97 1.32z",
      fill: "#1565C0"
    })
  );
}

exports.default = ManWithGuaPiMao;
