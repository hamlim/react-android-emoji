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

function FrowningWoman(props) {
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
        id: "f",
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
        xlinkHref: "#f"
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
          x1: 64,
          x2: 64,
          y1: 89.201,
          y2: 130.5,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.7047
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m17.5 130.5v-12.62c0-18.33 16.34-25.29 30.04-27.89 2.51-0.48 8.97-0.79 16.46-0.79s13.94 0.31 16.46 0.79c13.71 2.6 30.04 9.55 30.04 27.89v12.62h-93z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 90.7c7.4 0 13.74 0.3 16.18 0.76 13.15 2.5 28.82 9.11 28.82 26.41v11.13h-90v-11.12c0-17.31 15.67-23.92 28.82-26.41 2.44-0.47 8.78-0.77 16.18-0.77m0-3c-6.94 0-13.88 0.27-16.74 0.81-18.04 3.43-31.26 12.39-31.26 29.37v14.12h96v-14.12c0-16.98-13.22-25.94-31.26-29.36-2.86-0.55-9.8-0.82-16.74-0.82z",
        fill: "#009984"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m67.96 76.05c-0.1-0.04-0.21-0.07-0.32-0.08h-6.99c-0.11 0.01-0.21 0.04-0.32 0.08-0.63 0.26-0.98 0.91-0.68 1.61s1.69 2.66 4.49 2.66 4.19-1.96 4.49-2.66c0.31-0.69-0.04-1.35-0.67-1.61z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m56.95 89.77c4.63-1.45 10.27-1.38 14.66 0 0.8 0.25 1.2-0.57 0.65-1.41-0.78-1.19-3.67-3.46-7.98-3.46s-7.2 2.28-7.98 3.46c-0.55 0.85-0.15 1.67 0.65 1.41z",
        fill: "#795548"
      }),
      _react2.default.createElement("path", {
        d:
          "m43.68 67.27c0.01-0.52 0.1-1.02 0.22-1.5 0.97-0.13 2-0.33 3.15-0.67 1.68-0.51 2.94-1.34 3.91-2.24 1.07 1.02 1.76 2.62 1.72 4.43-0.07 3.06-2.13 5.54-4.62 5.53s-4.44-2.49-4.38-5.55z",
        fill: "#444"
      }),
      _react2.default.createElement("path", {
        d:
          "m84.89 67.27c-0.01-0.52-0.1-1.02-0.22-1.5-0.97-0.13-2-0.33-3.15-0.67-1.68-0.51-2.94-1.34-3.91-2.24-1.07 1.02-1.76 2.62-1.72 4.43 0.07 3.06 2.13 5.54 4.62 5.53s4.44-2.49 4.38-5.55z",
        fill: "#444"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.41 58.42c-1.19-1.04-3.75-2.4-8.12-1.63s-6.31 2.93-7.07 4.31c-0.34 0.61-0.12 1.21 0.25 1.53 0.34 0.3 1.21 0.48 2.06 0.03s2.46-1.61 5.42-2.15c2.96-0.5 4.87 0.04 5.83 0.17 0.95 0.13 1.71-0.34 1.93-0.73 0.22-0.43 0.22-1.07-0.3-1.53z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement("path", {
        d:
          "m88.14 61.13c-0.76-1.38-2.7-3.54-7.07-4.31s-6.93 0.59-8.12 1.63c-0.52 0.46-0.52 1.1-0.29 1.52 0.22 0.4 0.98 0.86 1.93 0.73s2.87-0.67 5.83-0.17c2.95 0.54 4.56 1.71 5.42 2.15 0.85 0.45 1.72 0.27 2.06-0.03 0.35-0.31 0.57-0.91 0.24-1.52z",
        fill: "#6D4C41"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m63.17 111c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.96-3.25 7.17-7.26 7.17h-1.64z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.08 95.85v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
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
          "m36.67 80.26c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m91.33 60.43c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.66c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.66m0-2h-54.66c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41 0.01-6.27-4.81-11.41-10.7-11.41z",
        fill: "#D18100"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 64,
          x2: 64,
          y1: 102.59,
          y2: 20.825,
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
          "m64 103.27c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.05-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.34 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.81 9.6-22.38 9.6z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 21.07c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z",
        fill: "#ED9E00"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 64.26,
          cy: 12.274,
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
          "m64.02 12.03h-0.02s-0.01 0-0.02 0c-45.44 0.24-36.13 52.14-36.13 52.14s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.46 0.8 11.55 1.8 19.38 1.8h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.31-51.89-36.12-52.13z",
        fill: "url(#c)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.02 12.03h-0.02s-0.01 0-0.02 0c-45.44 0.24-36.13 52.14-36.13 52.14s5 8.81 5.1 8.81c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.28 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.1 0 5.1-8.81 5.1-8.81s9.3-51.91-36.13-52.15z",
        fill: "#3F2720"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "b",
          d:
            "m64 12.03h-0.02s-0.01 0-0.02 0c-45.44 0.24-36.13 52.14-36.13 52.14s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.31-51.89-36.13-52.13z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#b"
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "m67.81 78.05c-0.1-0.04-0.21-0.07-0.32-0.08h-6.99c-0.11 0.01-0.21 0.04-0.32 0.08-0.63 0.26-0.98 0.91-0.68 1.61s1.69 2.66 4.49 2.66 4.19-1.96 4.49-2.66c0.31-0.69-0.03-1.35-0.67-1.61z",
      fill: "#E59600"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.67 91.77c4.63-1.45 10.27-1.38 14.66 0 0.8 0.25 1.2-0.57 0.65-1.41-0.78-1.18-3.67-3.46-7.98-3.46s-7.2 2.28-7.98 3.46c-0.55 0.85-0.15 1.67 0.65 1.41z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#444"
      },
      _react2.default.createElement("path", {
        d:
          "m43.33 68.27c0.01-0.52 0.1-1.02 0.22-1.5 0.97-0.13 2-0.33 3.15-0.67 1.68-0.51 2.94-1.34 3.91-2.24 1.07 1.02 1.76 2.62 1.72 4.43-0.07 3.06-2.13 5.54-4.62 5.53-2.48-0.01-4.44-2.49-4.38-5.55z"
      }),
      _react2.default.createElement("path", {
        d:
          "m84.67 68.27c-0.01-0.52-0.1-1.02-0.22-1.5-0.97-0.13-2-0.33-3.15-0.67-1.68-0.51-2.94-1.34-3.91-2.24-1.07 1.02-1.76 2.62-1.72 4.43 0.07 3.06 2.13 5.54 4.62 5.53 2.48-0.01 4.44-2.49 4.38-5.55z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#6D4C41"
      },
      _react2.default.createElement("path", {
        d:
          "m55.39 58.29c-1.2-1.14-3.8-2.64-8.22-1.79s-6.39 3.22-7.16 4.74c-0.34 0.67-0.12 1.33 0.25 1.68 0.34 0.33 1.23 0.52 2.09 0.03s2.5-1.78 5.49-2.37c3-0.55 4.94 0.05 5.9 0.19 0.97 0.14 1.74-0.37 1.95-0.81 0.23-0.47 0.23-1.17-0.3-1.67z"
      }),
      _react2.default.createElement("path", {
        d:
          "m88 61.26c-0.77-1.52-2.74-3.89-7.16-4.74s-7.02 0.65-8.22 1.79c-0.53 0.51-0.53 1.21-0.3 1.67 0.22 0.44 0.99 0.95 1.95 0.81 0.97-0.14 2.91-0.74 5.9-0.19 2.99 0.6 4.62 1.88 5.49 2.37 0.86 0.49 1.75 0.3 2.09-0.03 0.37-0.35 0.59-1 0.25-1.68z"
      })
    )
  );
}

exports.default = FrowningWoman;
