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

function ConstructionWorkerMan(props) {
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
        id: "m",
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
        xlinkHref: "#m"
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
          x1: 50,
          x2: 50,
          y1: 97.281,
          y2: 136.1,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#448AFF",
          offset: 0.0032478
        }),
        _react2.default.createElement("stop", {
          stopColor: "#3B7DFF",
          offset: 0.4042
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2962FF",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M-0.5,136.1v-15.26c0-16.23,25.36-23.53,50.5-23.56h0.13c25.03,0,50.36,8.09,50.36,23.56 v15.26H-0.5z",
        fill: "url(#l)"
      }),
      _react2.default.createElement("path", {
        d:
          "m50.13 98.78c12.9 0 25.42 2.19 34.36 6 6.62 2.83 14.51 7.91 14.51 16.05v13.76h-98v-13.76c0-15.2 24.61-22.03 49-22.06l0.13 0.01m0-3h-0.13c-25.49 0.03-52 7.28-52 25.06v16.76h104v-16.76c0-16.76-26.26-25.06-51.87-25.06z",
        fill: "#4073D4"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m49.17 109.56c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.95-3.26 7.17-7.26 7.17h-1.64z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.08 94.41v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#D18100"
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
          id: "d",
          d:
            "m-2 120.84v16.76h104v-16.76c0-16.79-26.35-25.09-52-25.06-25.49 0.03-52 7.28-52 25.06z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "e"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#d"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#e)"
        },
        _react2.default.createElement(
          "linearGradient",
          {
            id: "k",
            x1: 31.928,
            x2: 31.928,
            y1: 95.94,
            y2: 136.89,
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#FF9100",
            offset: 0.0032478
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FF8400",
            offset: 0.4399
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FF6D00",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m15.55 100.57v37.03h32.76l-12.13-43.49c-7.72 1.24-14.88 3.35-20.63 6.46z",
          fill: "url(#k)"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "j",
            x1: 30.757,
            x2: 30.757,
            y1: 96.019,
            y2: 137.59,
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#ff0",
            offset: 0.0032478
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFF200",
            offset: 0.6783
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFEA00",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m21.13 98.03 1.77 39.57h17.48l-10.58-42.22c-3.05 0.72-5.96 1.61-8.67 2.65z",
          fill: "url(#j)"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "i",
            x1: 58.169,
            x2: 58.169,
            y1: 95.94,
            y2: 136.89,
            gradientTransform: "matrix(-1 0 0 1 126.24 0)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#FF9100",
            offset: 0.0032478
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FF8400",
            offset: 0.4399
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FF6D00",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m84.45 100.57v37.03h-32.76l12.12-43.48c7.73 1.23 14.89 3.34 20.64 6.45z",
          fill: "url(#i)"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "h",
            x1: 56.998,
            x2: 56.998,
            y1: 96.019,
            y2: 137.59,
            gradientTransform: "matrix(-1 0 0 1 126.24 0)",
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#ff0",
            offset: 0.0032478
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFF200",
            offset: 0.6783
          }),
          _react2.default.createElement("stop", {
            stopColor: "#FFEA00",
            offset: 1
          })
        ),
        _react2.default.createElement("path", {
          d:
            "m78.87 98.03-1.77 39.57h-17.48l10.58-42.22c3.05 0.72 5.96 1.61 8.67 2.65z",
          fill: "url(#h)"
        })
      )
    ),
    _react2.default.createElement("path", {
      d: "m4 52.5c0 9.34 20.59 16.92 46 16.92s46-7.57 46-16.92-92-9.35-92 0z",
      clipPath: "url(#a)",
      fill: "#FFEA00"
    }),
    _react2.default.createElement("path", {
      d:
        "m91.38 52.49c-8.12-5.32-19.54-9.71-41.38-9.72-21.85 0.01-33.27 4.4-41.38 9.72-0.62 0.41-0.78 1.21-0.32 1.8 4.45 5.83 23.46 11.57 41.7 11.59 18.24-0.02 38-6.62 41.71-11.58 0.44-0.6 0.3-1.4-0.33-1.81z",
      clipPath: "url(#a)",
      fill: "#EDBF00"
    }),
    _react2.default.createElement("rect", {
      x: 11,
      y: 20.08,
      width: 78,
      height: 84,
      clipPath: "url(#a)",
      fill: "none"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("rect", {
          id: "g",
          x: 8,
          y: 32.04,
          width: 84,
          height: 76
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "u"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#g"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#u)"
        },
        _react2.default.createElement("path", {
          d:
            "m22.67 72.34c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
          fill: "#E59600"
        }),
        _react2.default.createElement("path", {
          d:
            "m77.33 52.52c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.66c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.66m0-2h-54.66c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41 0.01-6.28-4.81-11.41-10.7-11.41z",
          fill: "#D18100"
        }),
        _react2.default.createElement(
          "linearGradient",
          {
            id: "t",
            x1: 50,
            x2: 50,
            y1: 94.676,
            y2: 12.91,
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
            "m50 95.36c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.05-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.34 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.81 9.6-22.38 9.6z",
          fill: "url(#t)"
        }),
        _react2.default.createElement("path", {
          d:
            "m50 13.15c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z",
          fill: "#ED9E00"
        }),
        _react2.default.createElement("path", {
          d:
            "m25.99 50.81s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.05 0.13-1.49z",
          fill: "#6D4C41"
        }),
        _react2.default.createElement("ellipse", {
          cx: 34.19,
          cy: 58.9,
          rx: 4.93,
          ry: 5.1,
          fill: "#404040"
        }),
        _react2.default.createElement("path", {
          d:
            "m72.05 53.22s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.49 0.28-1.07 0.31-1.56 0.12z",
          fill: "#6D4C41"
        }),
        _react2.default.createElement("ellipse", {
          cx: 65.33,
          cy: 58.9,
          rx: 4.93,
          ry: 5.1,
          fill: "#404040"
        }),
        _react2.default.createElement("path", {
          d:
            "m53.86 68.14c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.29-0.7-0.06-1.37-0.7-1.63z",
          fill: "#E59600"
        }),
        _react2.default.createElement("path", {
          d:
            "m58.53 76.23c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.75-1.67-1.09-3.33-2.92-2.24z",
          fill: "#795548"
        }),
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", {
            id: "s",
            d:
              "m50 4.12h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.13-36.12 52.13s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.3-51.88-36.14-52.12z"
          })
        ),
        _react2.default.createElement(
          "clipPath",
          null,
          _react2.default.createElement("use", {
            xlinkHref: "#s"
          })
        ),
        _react2.default.createElement(
          "radialGradient",
          {
            id: "r",
            cx: 50.26,
            cy: 4.3585,
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
            "m50.02 4.12h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.13-36.13 52.13s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.45 0.81 11.55 1.81 19.37 1.81h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.32-51.89-36.11-52.13z",
          fill: "url(#r)"
        }),
        _react2.default.createElement("path", {
          d:
            "m50.02 4.12h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.13-36.13 52.13s5 8.81 5.1 8.81c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.28 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.1 0 5.1-8.81 5.1-8.81s9.3-51.9-36.13-52.14z",
          fill: "#3F2720"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 50,
          cy: 31.676,
          r: 34.638,
          gradientTransform: "matrix(1 0 0 .9806 0 .0776)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#ff0",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF600",
          offset: 0.325
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFDE00",
          offset: 0.8535
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFD600",
          offset: 0.9978
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m50.41 7.92c-46.75 0-43.23 46.43-43.23 46.43s12.21-10.8 43.5-10.8 42.09 9.8 42.09 9.8 4.4-45.43-42.36-45.43z",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "q",
          x1: 50.321,
          x2: 50.321,
          y1: 4.7354,
          y2: 41.773,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#ff0",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFF900",
          offset: 0.4462
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA00",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m60.72 42.15h-20.8v-33.1c0-2.79 2.26-5.05 5.05-5.05h10.7c2.79 0 5.05 2.26 5.05 5.05v33.1z",
        fill: "url(#q)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "f",
          d:
            "m50.41 7.92c-46.75 0-43.23 46.43-43.23 46.43s12.21-10.8 43.5-10.8 42.09 9.8 42.09 9.8 4.4-45.43-42.36-45.43z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#f"
        })
      ),
      _react2.default.createElement("path", {
        d: "m33.12 10.23 6.95-2.3v23.29c-1.41-10.07-3.43-17.35-6.95-20.99z",
        clipPath: "url(#b)",
        fill: "#EDBF00",
        opacity: 0.5
      }),
      _react2.default.createElement("path", {
        d: "m67.71 10.23-6.95-2.3v23.29c1.41-10.07 3.43-17.35 6.95-20.99z",
        clipPath: "url(#b)",
        fill: "#EDBF00",
        opacity: 0.5
      }),
      _react2.default.createElement("path", {
        d:
          "m55.62 7c1.11 0 2.03 0.84 2.08 1.91 0.07 1.4 1.1 2.57 2.49 2.8 13.61 2.34 22.72 9.9 27.07 22.45 1.8 5.19 2.4 10.24 2.56 13.81-6.1-3.12-18.28-7.41-39.14-7.41-21.22 0-34.04 4.85-40.44 8.27 0.24-3.65 0.94-8.76 2.82-14.03 4.58-12.85 13.81-20.6 27.42-23.04 1.39-0.25 2.41-1.43 2.47-2.83 0.03-1.08 0.95-1.93 2.07-1.93h10.6m0-3h-10.6c-2.75 0-4.97 2.14-5.08 4.81-35.73 6.39-32.76 45.54-32.76 45.54s12.21-10.8 43.5-10.8 42.09 9.8 42.09 9.8 3.72-38.44-32.08-44.6c-0.13-2.64-2.34-4.75-5.07-4.75z",
        fill: "#EDBF00"
      }),
      _react2.default.createElement("path", {
        d:
          "M95.53,50.99c-0.25-0.42-0.63-0.74-1.07-0.99C76.36,39.59,50,39.93,50,39.93S23.64,39.59,5.54,50 c-0.44,0.25-0.82,0.57-1.07,0.99c-0.53,0.9-0.97,2.61,0.75,5.08c0,0,10.95-10.85,44.78-11.54c33.82,0.68,44.78,11.54,44.78,11.54 C96.5,53.6,96.06,51.89,95.53,50.99z",
        fill: "#FFEA00"
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
          id: "p",
          x1: 107.68,
          x2: 98.602,
          y1: 58.024,
          y2: 119.99,
          gradientTransform: "matrix(.9961 -.0882 .0882 .9961 -7.7706 10.196)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FF7043",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FD6A3C",
          offset: 0.3271
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F75928",
          offset: 0.8111
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F4511E",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m99.69 132.24c-0.12 0-0.25 0-0.38-0.01-1.15-0.08-2.22-0.51-2.74-1.1-0.19-0.21-0.27-0.42-0.26-0.6l3.8-59.59 7.91 0.52-5.52 59.45c-0.04 0.63-1.21 1.33-2.81 1.33z",
        fill: "url(#p)"
      }),
      _react2.default.createElement("path", {
        d:
          "m101.05 72 5.89 0.39-5.42 58.35c-0.17 0.17-0.78 0.51-1.83 0.51-0.1 0-0.21 0-0.31-0.01-1.19-0.08-1.88-0.55-2.05-0.76l3.72-58.48m-1.87-2.13-3.86 60.58c-0.1 1.38 1.67 2.62 3.92 2.77 0.15 0.01 0.3 0.01 0.45 0.01 2.05 0 3.72-0.96 3.82-2.24l5.61-60.47-9.94-0.65z",
        fill: "#E3461E"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 110.89,
          x2: 106.22,
          y1: 56.004,
          y2: 76.04,
          gradientTransform: "matrix(.9961 -.0882 .0882 .9961 -7.7706 10.196)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#78909C",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6A828E",
          offset: 0.3589
        }),
        _react2.default.createElement("stop", {
          stopColor: "#546E7A",
          offset: 0.768
        }),
        _react2.default.createElement("stop", {
          stopColor: "#546E7A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m118.77 73.81c-0.27-0.01-1.59-0.07-3.04-0.31-0.62-0.19-1-0.4-1.3-0.58-0.85-0.52-1.85-0.8-2.87-0.8-0.62 0-1.24 0.1-1.83 0.3-0.47 0.16-0.87 0.36-1.11 0.47l-0.81-0.07c-0.24-0.02-0.44-0.04-0.57-0.05-0.02 0-0.05-0.01-0.07-0.01l-7.24-0.67c-0.63-0.06-1.17-0.39-1.41-0.87-0.08-0.15-0.32-0.76-0.36-0.89-0.15-0.48-0.21-1.12-0.28-1.73-0.16-1.48-0.35-3.33-2.04-3.68-0.15-0.03-0.32-0.05-0.49-0.05-0.74 0-1.54 0.29-2.31 0.58-0.52 0.19-1.12 0.41-1.45 0.43h-0.02c-0.4 0-0.59-0.07-0.63-0.11 0.01 0-0.04-0.25 0.29-0.91 0.19-0.38 2.02-3.8 7.33-5.23 1.85-0.5 4-0.75 6.4-0.75 2.29 0 4.24 0.23 5.29 0.35 0.33 0.04 0.58 0.07 0.72 0.08 0.2 0.01 0.38 0.02 0.56 0.02 1.56 0 2.45-0.47 3.16-0.84 0.33-0.17 0.59-0.31 0.87-0.38 0.02-0.01 0.14-0.03 0.46-0.03 1.46 0 4.24 0.5 4.26 0.51 0.62 0.06 0.96 0.39 1.12 0.58 0.28 0.33 0.42 0.75 0.39 1.12l-1.06 11.71c-0.2 1.12-0.81 1.7-1.96 1.81z",
        fill: "url(#o)"
      }),
      _react2.default.createElement("path", {
        d:
          "m116.02 59.08c1.13 0 3.33 0.36 4.08 0.49 0.06 0.01 0.12 0.02 0.17 0.02 0.17 0.02 0.3 0.14 0.36 0.21 0.14 0.16 0.17 0.33 0.16 0.39l-1.06 11.62c-0.15 0.75-0.44 0.93-0.99 0.99-0.35-0.01-1.5-0.07-2.78-0.29-0.48-0.15-0.76-0.31-1-0.46-1.01-0.62-2.19-0.95-3.4-0.95-0.73 0-1.46 0.12-2.15 0.36-0.39 0.13-0.72 0.28-0.97 0.4l-0.57-0.05c-0.2-0.01-0.38-0.03-0.5-0.04-0.03-0.01-0.07-0.01-0.11-0.01l-7.25-0.67c-0.32-0.03-0.54-0.19-0.6-0.32s-0.26-0.62-0.3-0.74c-0.12-0.39-0.18-0.98-0.24-1.54-0.16-1.52-0.43-4.06-2.83-4.55-0.22-0.05-0.45-0.07-0.69-0.07-0.91 0-1.8 0.32-2.66 0.64-0.03 0.01-0.07 0.03-0.11 0.04 0.95-1.3 2.96-3.08 6.22-3.96 1.77-0.48 3.83-0.72 6.14-0.72 2.24 0 4.14 0.23 5.17 0.35 0.36 0.04 0.62 0.07 0.77 0.08 0.22 0.01 0.43 0.02 0.63 0.02 1.81 0 2.9-0.58 3.63-0.96 0.27-0.14 0.48-0.25 0.6-0.28 0.01 0.01 0.09 0 0.28 0m0-2c-0.29 0-0.53 0.02-0.7 0.06-1.14 0.28-1.76 1.19-3.79 1.19-0.16 0-0.32-0.01-0.49-0.02-0.59-0.04-3.03-0.43-6.07-0.43-2.07 0-4.43 0.18-6.66 0.79-4.89 1.32-7.26 4.34-7.96 5.76-1.12 2.25 0.51 2.46 1.16 2.46h0.15c1.03-0.05 2.65-1 3.71-1 0.1 0 0.2 0.01 0.29 0.03 1.46 0.3 1.03 2.99 1.57 4.73 0.05 0.17 0.32 0.83 0.42 1.04 0.38 0.76 1.2 1.33 2.21 1.42l7.24 0.67c0.13 0.01 0.37 0.04 0.65 0.06l1.07 0.09c0.08 0 0.58-0.32 1.25-0.54 0.49-0.17 1-0.25 1.51-0.25 0.82 0 1.64 0.22 2.35 0.65 0.39 0.24 0.85 0.49 1.59 0.7 1.74 0.3 3.29 0.34 3.29 0.34 1.64-0.13 2.63-1.07 2.92-2.72l1.07-11.71c0.12-1.23-0.88-2.64-2.33-2.78-0.01-0.02-2.89-0.54-4.45-0.54z",
        fill: "#476570"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 103.62,
          x2: 92.83,
          y1: 53.196,
          y2: 103.94,
          gradientTransform: "matrix(.9968 -.0794 .0794 .9968 -2.8897 13.743)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FF7043",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FD6A3C",
          offset: 0.3271
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F75928",
          offset: 0.8111
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F4511E",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m104.68 59.94c-0.92-0.04-1.86-0.17-3.06-0.42-0.59-0.12-1.02-0.26-1.28-0.42-0.19-0.11-0.27-0.25-0.27-0.29l-0.01-0.23c-0.01-0.34-0.03-0.73 0.04-0.97 0.05-0.16 0.06-0.22 0.76-0.45 0.83-0.27 1.86-0.4 3.08-0.4 0.29 0 0.57 0.01 0.85 0.02 1.45 0.07 3.07 0.15 4.25 0.71 0.29 0.14 0.29 0.14 0.29 0.49-0.01 0.35-0.09 0.69-0.2 1.1-0.06 0.03-0.16 0.07-0.24 0.11l-0.16 0.07c-0.23 0.1-0.48 0.17-0.73 0.24-0.18 0.05-0.35 0.1-0.52 0.16-0.3 0.1-0.67 0.13-1.07 0.17l-0.26 0.02c-0.48 0.05-0.86 0.09-1.25 0.09h-0.22z",
        fill: "url(#n)"
      }),
      _react2.default.createElement("path", {
        d:
          "m103.94 57.77c0.27 0 0.54 0.01 0.83 0.02 1.2 0.06 2.53 0.12 3.53 0.48-0.01 0.03-0.01 0.07-0.02 0.1-0.14 0.06-0.35 0.12-0.56 0.18-0.19 0.05-0.38 0.11-0.56 0.17-0.19 0.06-0.52 0.09-0.84 0.12l-0.29 0.03-0.1 0.01c-0.39 0.04-0.72 0.07-1.04 0.07h-0.18c-0.86-0.04-1.75-0.16-2.9-0.4-0.38-0.08-0.62-0.15-0.77-0.21v-0.17c0.04-0.01 0.08-0.03 0.13-0.04 0.73-0.25 1.66-0.36 2.77-0.36m-2.88 0.12m2.88-2.12c-1.16 0-2.35 0.12-3.38 0.45-0.78 0.25-1.22 0.45-1.42 1.12-0.14 0.47-0.09 1.03-0.08 1.51 0.01 0.44 0.33 0.86 0.76 1.12 0.45 0.26 1.06 0.43 1.58 0.54 1.07 0.22 2.11 0.39 3.22 0.44 0.09 0 0.18 0.01 0.27 0.01 0.45 0 0.89-0.05 1.34-0.1 0.51-0.05 1.06-0.07 1.55-0.23 0.43-0.14 0.93-0.25 1.34-0.43 0.52-0.23 0.82-0.31 0.95-0.8 0.12-0.46 0.23-0.89 0.24-1.37 0.02-0.66-0.13-1.07-0.86-1.42-1.38-0.66-3.12-0.74-4.64-0.81-0.26-0.03-0.56-0.03-0.87-0.03z",
        fill: "#E3461E"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m100.82 130.36-8-0.25c-6.96-0.71-11.7-4.77-10.79-13.12 1.97-18.12 21.83-12.18 23.64-6.3 2.7 8.8-1.75 19.98-4.85 19.67z",
        fill: "#FFCA28",
        stroke: "#EDA600",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.9369
      }),
      _react2.default.createElement("path", {
        d:
          "m93.5 126.56v0c-0.27 1.7 0.89 3.29 2.59 3.57l4.33 0.69c1.7 0.27 3.29-0.89 3.57-2.59v0c0.27-1.7-0.89-3.29-2.59-3.57l-4.33-0.69c-1.7-0.26-3.3 0.89-3.57 2.59z",
        fill: "#FFCA28",
        stroke: "#EDA600",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.6686
      }),
      _react2.default.createElement("path", {
        d:
          "m94.71 122.11v0c-0.26 1.71 0.91 3.31 2.62 3.58l5.68 0.87c1.71 0.26 3.31-0.91 3.58-2.62v0c0.26-1.71-0.91-3.31-2.62-3.58l-5.68-0.87c-1.71-0.27-3.32 0.91-3.58 2.62z",
        fill: "#FFCA28",
        stroke: "#EDA600",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.9369
      }),
      _react2.default.createElement("path", {
        d:
          "m94.97 117.82v0c-0.17 1.68 1.05 3.19 2.74 3.36l6.95 0.71c1.68 0.17 3.19-1.05 3.36-2.74v0c0.17-1.68-1.05-3.19-2.74-3.36l-6.95-0.71c-1.69-0.17-3.19 1.06-3.36 2.74z",
        fill: "#FFCA28",
        stroke: "#EDA600",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.9369
      }),
      _react2.default.createElement("path", {
        d:
          "m94.89 112.34v0c-0.08 1.69 1.23 3.13 2.92 3.21l6.98 0.33c1.69 0.08 3.13-1.23 3.21-2.92v0c0.08-1.69-1.23-3.13-2.92-3.21l-6.98-0.33c-1.69-0.07-3.13 1.23-3.21 2.92z",
        fill: "#FFCA28",
        stroke: "#EDA600",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.9369
      }),
      _react2.default.createElement("path", {
        d:
          "m105.57 105.48c-0.77-0.19-3.45-1.06-5.22-1.45-0.67-0.15-2.45-0.48-3.13-0.49-2.18-0.04-9.12 2.5-10.74 4.1-0.79 0.78-1.27 1.75-1.47 2.75 0.38-0.41-4.29 9.4 5.49 7.62 4.09-0.52 3.01-5.45 4.36-6.82 1.03-1.05 2.7-2.6 7.64-0.91 1.38 0.47 3.76 0.45 4.63-0.6 1.52-1.82 0.68-3.63-1.56-4.2z",
        fill: "#FFCA28"
      }),
      _react2.default.createElement("path", {
        d:
          "m109.09 106.88c-0.38-1.13-1.46-1.99-2.96-2.35-0.26-0.06-0.74-0.2-1.32-0.37-1.17-0.34-2.78-0.8-4-1.07-0.62-0.14-2.52-0.49-3.38-0.51-6.63-0.15-9.7 2.08-11.66 4.3-1.29 1.45-0.98 4.03-0.63 3.54 0.69-0.95 3.8-3.73 6.56-4.78 2.42-0.92 3.83-1.2 5.72-1.17 0.58 0.01 2.26 0.31 2.97 0.46 1.15 0.25 2.72 0.71 3.87 1.04 0.62 0.18 1.13 0.33 1.4 0.39 0.83 0.2 1.41 0.6 1.57 1.1 0.14 0.43 0.13 1.25-0.34 1.79-0.49 0.57-2.61 0.73-3.88 0.3-1.8-0.6-3.74-1.37-5.64-0.94-1.44 0.33-3.14 1.25-3.71 2.6-0.56 1.32-0.09 4.75-2.2 6.8-0.87 0.84-3.13 1.89-3.13 1.89s2.47 0.54 3.86-0.25c1.96-1.12 2.9-3.62 3.29-5.64 0.17-0.9 0.14-2.5 0.42-2.76 0.87-0.86 1.88-2.12 6.41-0.61 1.58 0.52 4.68 1.03 5.95-0.45 0.89-1.06 1.19-2.24 0.83-3.31z",
        fill: "#EDA600"
      })
    )
  );
}

exports.default = ConstructionWorkerMan;
