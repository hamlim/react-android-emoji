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

function Prince(props) {
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
        id: "h",
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
        xlinkHref: "#h"
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
          id: "g",
          x1: 64,
          x2: 64,
          y1: 97.471,
          y2: 130.47,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#1976D2",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1E89E6",
          offset: 0.5284
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0.9971
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M13.5,130.47v-9.44c0-16.23,25.36-23.53,50.5-23.56h0.13c25.03,0,50.36,8.09,50.36,23.56 v9.44H13.5z",
        fill: "url(#g)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.13 98.97c12.9 0 25.42 2.19 34.36 6 6.62 2.83 14.51 7.91 14.51 16.05v7.94h-98v-7.94c0-15.2 24.61-22.03 49-22.06l0.13 0.01m0-3h-0.13c-25.49 0.03-52 7.28-52 25.06v10.94h104v-10.94c0-16.76-26.26-25.06-51.87-25.06z",
        fill: "#006FC7"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.17 107.2c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.95-3.26 7.17-7.26 7.17h-1.64z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.08 92.05v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#D18100"
      }),
      _react2.default.createElement("path", {
        d:
          "m36.67 72.23c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
        fill: "#3C2B24"
      }),
      _react2.default.createElement("path", {
        d:
          "m91.33 52.4c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.66c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.66m0-2h-54.66c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41 0.01-6.27-4.81-11.41-10.7-11.41z",
        fill: "#291B16"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 64,
          x2: 64,
          y1: 94.562,
          y2: 12.796,
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
          "m64 95.24c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.04-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.33 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.81 9.6-22.38 9.6z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 13.04c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.12-45.39-33.52-45.39z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#1A1717"
        },
        _react2.default.createElement("path", {
          d:
            "m39.99 50.7s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.06 0.13-1.49z"
        }),
        _react2.default.createElement("ellipse", {
          cx: 48.58,
          cy: 58.9,
          rx: 4.93,
          ry: 5.1
        }),
        _react2.default.createElement("path", {
          d:
            "m86.05 53.1s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.49 0.28-1.07 0.32-1.56 0.12z"
        }),
        _react2.default.createElement("ellipse", {
          cx: 80.44,
          cy: 58.78,
          rx: 4.93,
          ry: 5.1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m67.86 68.03c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.29-0.71-0.06-1.37-0.7-1.63z",
        fill: "#33251F"
      }),
      _react2.default.createElement("path", {
        d:
          "m72.42 76.11c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.75-1.66-1.09-3.33-2.92-2.24z",
        fill: "#1A1717"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "e",
          d:
            "m64 4h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.3-51.89-36.14-52.13z"
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
          cx: 64.26,
          cy: 4.244,
          r: 48.85,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#444140",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#232020",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64.02 4h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.14-36.13 52.14s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.45 0.81 11.55 1.81 19.37 1.81h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.32-51.9-36.11-52.14z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.02 4h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.13 52.14-36.13 52.14s5 8.81 5.1 8.81c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.29 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.09 0 5.1-8.81 5.1-8.81s9.3-51.91-36.13-52.15z",
        fill: "#1F1D1B"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d: "m65.79 126.25h-4v-23.88c0-0.55 0.9-1 2-1s2 0.45 2 1v23.88z",
        fill: "#fff"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 73.96,
      cy: 116.55,
      r: 3,
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 23.312,
        x2: 23.312,
        y1: 101,
        y2: 126.5,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.199
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m26.23 118.14-16.08-0.12c-1.27-0.01-2.22-1.19-1.94-2.44l1.69-7.46c0.88-4.75 2.83-5.27 5.81-5.66 8.5-1.1 22.76-3.1 22.76-3.1l-6.71 15.19c-0.97 2.2-3.14 3.61-5.53 3.59z",
      clipPath: "url(#a)",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m35.19 101.84-5.26 11.91c-0.64 1.45-2.08 2.38-3.69 2.38l-16.08-0.12 1.69-7.46c0.01-0.03 0.01-0.05 0.02-0.08 0.67-3.59 1.6-3.71 4.1-4.04 5.82-0.74 14.42-1.92 19.22-2.59m3.28-2.47s-14.26 2-22.76 3.1c-2.99 0.39-4.93 0.9-5.81 5.66l-1.69 7.46c-0.28 1.24 0.66 2.43 1.94 2.44l16.08 0.12h0.04c2.37 0 4.53-1.4 5.49-3.58l6.71-15.2z",
        fill: "#E6B000"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m53.33 102.5-43.07 4.05c0.63-3.68 3.64-6.48 7.35-6.85l35.13-3.52 0.59 6.32z",
      clipPath: "url(#a)",
      fill: "#FFA000"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 104.36,
        x2: 104.36,
        y1: 101,
        y2: 126.5,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.199
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.44 118.14 16.09-0.12c1.27-0.01 2.21-1.19 1.94-2.43l-1.93-8.44c-0.38-2.39-2.2-4.25-4.6-4.56-8.15-1.06-23.74-3.22-23.74-3.22l6.71 15.19c0.96 2.19 3.14 3.6 5.53 3.58z",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m92.48 101.84c5.1 0.7 14.51 1.99 20.2 2.74 1.48 0.19 2.64 1.36 2.89 2.9 0.01 0.04 0.02 0.09 0.03 0.13l1.92 8.42-16.12 0.12c-1.58 0-3.02-0.94-3.66-2.38l-5.26-11.93m-3.28-2.47 6.71 15.19c0.96 2.18 3.11 3.58 5.49 3.58h0.04l16.09-0.12c1.27-0.01 2.21-1.19 1.94-2.43l-1.93-8.44c-0.38-2.39-2.2-4.25-4.6-4.56-8.15-1.06-23.74-3.22-23.74-3.22z",
        fill: "#E6B000"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.33 102.5 43.07 4.05c-0.63-3.68-3.64-6.48-7.35-6.85l-35.13-3.52-0.59 6.32z",
      clipPath: "url(#a)",
      fill: "#FFA000"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m50.94 98.37 0.22 2.33-37.8 3.56c1.03-1.41 2.64-2.38 4.46-2.56l33.12-3.33m1.8-2.19-35.13 3.52c-3.71 0.37-6.72 3.17-7.35 6.85l43.07-4.05-0.59-6.32z",
        fill: "#E69000"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m76.73 98.37 33.13 3.32c1.82 0.18 3.42 1.15 4.46 2.56l-37.8-3.56 0.21-2.32m-1.8-2.19-0.59 6.32 43.07 4.05c-0.64-3.68-3.64-6.48-7.35-6.85l-35.13-3.52z",
        fill: "#E69000"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m75.69 93.67c-2.59 1.01-6.35 2.07-8.72 2.52-1.47 0.28-2.63 1.74-3.01 3.41-0.38-1.67-1.55-3.12-3.01-3.41-2.37-0.46-6.07-1.87-8.72-2.67-1.51-0.45-3.11-1.13-3.11 2.68v10.44c0 0.88 0.44 1.69 1.17 2.12 2.63 1.55 24.73 1.55 27.36 0 0.73-0.43 1.17-1.25 1.17-2.12v-10.43c-0.02-5.8-1.5-3.18-3.13-2.54z",
        fill: "#FFEB3B"
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
          id: "i",
          x1: 63.987,
          x2: 63.987,
          y1: 4.7524,
          y2: 32.82,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#ff0",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFD600",
          offset: 0.801
        })
      ),
      _react2.default.createElement("polygon", {
        points:
          "99.77 7.49 90.5 13.57 93.39 18.91 70.6 18.9 73.43 13.66 63.99 4.38 63.98 4.38 63.98 4.38 54.54 13.66 57.38 18.9 34.58 18.91 37.47 13.57 28.2 7.49 28.36 22.84 28.31 32 63.98 32 99.67 32 99.61 22.84",
        fill: "url(#i)"
      }),
      _react2.default.createElement("ellipse", {
        cx: 46.85,
        cy: 25.32,
        rx: 3.04,
        ry: 3.99,
        fill: "#2196F3"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m46.85 22.33c1.1 0 2.04 1.37 2.04 2.99s-0.93 2.99-2.04 2.99-2.04-1.37-2.04-2.99c0.01-1.62 0.94-2.99 2.04-2.99m0-1c-1.68 0-3.04 1.78-3.04 3.99 0 2.2 1.36 3.99 3.04 3.99s3.04-1.78 3.04-3.99-1.36-3.99-3.04-3.99z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("ellipse", {
        cx: 81,
        cy: 25.32,
        rx: 3.04,
        ry: 3.99,
        fill: "#2196F3"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m81 22.33c1.1 0 2.04 1.37 2.04 2.99s-0.93 2.99-2.04 2.99-2.04-1.37-2.04-2.99c0.01-1.62 0.94-2.99 2.04-2.99m0-1c-1.68 0-3.04 1.78-3.04 3.99 0 2.2 1.36 3.99 3.04 3.99s3.04-1.78 3.04-3.99-1.36-3.99-3.04-3.99z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("ellipse", {
        cx: 63.98,
        cy: 23.76,
        rx: 4.61,
        ry: 6.06,
        fill: "#FF1744"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m63.98 18.7c1.99 0 3.61 2.27 3.61 5.06s-1.62 5.06-3.61 5.06-3.61-2.27-3.61-5.06 1.62-5.06 3.61-5.06m0-1c-2.55 0-4.61 2.71-4.61 6.06s2.07 6.06 4.61 6.06 4.61-2.71 4.61-6.06-2.06-6.06-4.61-6.06z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m63.99 7.18 6.97 6.85-2.12 3.92c-0.34 0.62-0.32 1.37 0.04 1.98s1.01 0.98 1.72 0.98l22.79 0.01c0.7 0 1.36-0.37 1.72-0.98s0.38-1.36 0.04-1.98l-2.02-3.73 4.6-3.01-0.12 11.63 0.05 7.15h-67.34l0.04-7.18-0.12-11.6 4.6 3.01-2.02 3.73c-0.34 0.62-0.32 1.37 0.04 1.98 0.36 0.6 1.01 0.98 1.72 0.98l22.79-0.01c0.7 0 1.36-0.37 1.72-0.98s0.38-1.36 0.04-1.98l-2.12-3.92 6.98-6.85m0-2.8-9.45 9.28 2.84 5.24-22.79 0.01 2.89-5.35-9.28-6.07 0.16 15.35-0.05 9.16h71.36l-0.05-9.16 0.16-15.35-9.27 6.08 2.89 5.35-22.8-0.02 2.84-5.24-9.45-9.28zm35.78 2.62z",
        fill: "#E6B000"
      }),
      _react2.default.createElement("ellipse", {
        cx: 29.78,
        cy: 25.32,
        rx: 3.04,
        ry: 3.99,
        fill: "#0091EA"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m29.78 22.33c1.1 0 2.04 1.37 2.04 2.99s-0.93 2.99-2.04 2.99-2.04-1.37-2.04-2.99 0.93-2.99 2.04-2.99m0-1c-1.68 0-3.04 1.78-3.04 3.99 0 2.2 1.36 3.99 3.04 3.99s3.04-1.78 3.04-3.99c-0.01-2.21-1.37-3.99-3.04-3.99z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement("ellipse", {
        cx: 98.08,
        cy: 25.32,
        rx: 3.04,
        ry: 3.99,
        fill: "#0091EA"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m98.08 22.33c1.1 0 2.04 1.37 2.04 2.99s-0.93 2.99-2.04 2.99-2.04-1.37-2.04-2.99 0.94-2.99 2.04-2.99m0-1c-1.68 0-3.04 1.78-3.04 3.99 0 2.2 1.36 3.99 3.04 3.99s3.04-1.78 3.04-3.99c-0.01-2.21-1.36-3.99-3.04-3.99z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m51.15 95.3c0.09 0.03 0.18 0.05 0.26 0.08l0.23 0.07c0.88 0.26 1.88 0.6 2.94 0.95 2.11 0.71 4.29 1.43 5.98 1.76 0.52 0.1 1.2 0.84 1.44 1.89 0.21 0.91 1.02 1.55 1.95 1.55s1.74-0.64 1.95-1.55c0.24-1.06 0.93-1.79 1.44-1.89 2.65-0.51 6.55-1.64 9.07-2.63 0.13-0.05 0.25-0.11 0.37-0.16 0.01 0.24 0.01 0.52 0.01 0.84v10.44c0 0.17-0.08 0.34-0.15 0.38-0.8 0.38-5.27 0.91-12.7 0.91s-11.89-0.53-12.66-0.89c-0.11-0.07-0.19-0.23-0.19-0.4v-10.44c0.02-0.4 0.04-0.7 0.06-0.91m26.72-2.77c-0.57 0-1.36 0.82-2.18 1.14-2.59 1.01-6.35 2.07-8.72 2.52-1.47 0.28-2.63 1.74-3.01 3.41-0.38-1.67-1.55-3.12-3.01-3.41-2.37-0.46-6.07-1.87-8.72-2.67-0.55-0.16-1.1-0.36-1.59-0.36-0.86 0-1.52 0.6-1.52 3.04v10.44c0 0.88 0.44 1.69 1.17 2.12 1.31 0.78 7.5 1.16 13.68 1.16s12.36-0.39 13.68-1.16c0.73-0.43 1.17-1.25 1.17-2.12v-10.43c-0.02-2.88-0.38-3.68-0.95-3.68z",
        fill: "#EDCB24"
      })
    )
  );
}

exports.default = Prince;
