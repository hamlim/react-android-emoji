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

function TippingHandWoman(props) {
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
          x1: 48,
          x2: 48,
          y1: 97.5,
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
          "m1.5 130.5v-9.38c0-16.28 23.54-23.6 46.87-23.62h0.12c22.87 0 46.01 8.12 46.01 23.62v9.38h-93z",
        fill: "url(#g)"
      }),
      _react2.default.createElement("path", {
        d:
          "m48.49 99c22.12 0 44.51 7.6 44.51 22.12v7.88h-90v-7.88c0-15.24 22.79-22.09 45.37-22.12h0.12m0-3h-0.12c-23.93 0.03-48.37 7.46-48.37 25.12v10.88h96v-10.88c0-16.65-23.48-25.12-47.51-25.12z",
        fill: "#009984"
      }),
      _react2.default.createElement("path", {
        d:
          "M47.19,103.1c-4,0-7.26-3.22-7.26-7.17v-8.98H56.1v8.98c0,3.95-3.26,7.17-7.26,7.17H47.19z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.1 87.95v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#D18100"
      }),
      _react2.default.createElement("path", {
        d:
          "m20.69 72.26c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.34 52.43c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.65c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.65m0-2h-54.65c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41s-4.82-11.41-10.71-11.41z",
        fill: "#D18100"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 48.013,
          x2: 48.013,
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
          "m48.01 95.27c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.04-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.34 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.8 9.6-22.38 9.6z",
        fill: "url(#f)"
      }),
      _react2.default.createElement("path", {
        d:
          "m48.01 13.07c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.11-45.39-33.52-45.39z",
        fill: "#ED9E00"
      }),
      _react2.default.createElement("path", {
        d:
          "m24 50.73s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.06 0.13-1.49z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement("ellipse", {
        cx: 31.58,
        cy: 58.81,
        rx: 4.93,
        ry: 5.1,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m70.06 53.13s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.49 0.28-1.07 0.32-1.56 0.12z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement("ellipse", {
        cx: 64.45,
        cy: 58.81,
        rx: 4.93,
        ry: 5.1,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m51.87 68.06c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.3-0.71-0.06-1.37-0.7-1.63z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m56.42 76.14c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.75-1.66-1.09-3.33-2.92-2.24z",
        fill: "#795548"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "e",
          cx: 48.273,
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
          "m48.03 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5.1 8.99 5.1 8.81c-0.16-7.25 2.74-20.09 4.8-25.55 1.04-2.76 3.9-4.36 6.79-3.83 4.45 0.81 11.55 1.81 19.37 1.81h0.08 0.08c7.83 0 14.92-1 19.37-1.81 2.9-0.53 5.76 1.08 6.79 3.83 2.06 5.47 4.96 18.3 4.8 25.55 0 0.18 5.1-8.81 5.1-8.81s9.32-51.9-36.12-52.14z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m48.03 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5 8.81 5.1 8.81c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.96 8.22-24.22 5.67-6.8 14.27-10.28 25.56-10.35h0.04c11.32 0.06 19.93 3.54 25.6 10.35 10.81 12.96 8.18 34.33 7.67 37.79-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.09 0 5.1-8.81 5.1-8.81s9.3-51.91-36.14-52.15z",
        fill: "#3F2720"
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
        _react2.default.createElement("rect", {
          id: "d",
          x: 4.41,
          width: 91.38,
          height: 91.38
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#d"
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 79.185,
        x2: 70.208,
        y1: 114.08,
        y2: 112.16,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00A68E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00BFA5",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "78.33 124 68.83 124 74.04 100.85 81.54 102.67",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 129.78,
          x2: 101.75,
          y1: 62.358,
          y2: 66.457,
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
          "m90.63 72.21c-2.31 0-3.33-1.7-3.49-3.15-0.21-1.83 0.77-3.95 3.42-4.56l10.6-2.44c0.57-0.14 1.22-0.21 1.84-0.21 1.21 0 2.19 0.29 2.6 0.77 0.09 0.1 0.36 0.42 0.24 1.2-0.05 0.33 0.06 0.65 0.3 0.88 0.19 0.18 0.43 0.27 0.69 0.27 0.07 0 0.14-0.01 0.21-0.02 0.08-0.02 7.94-1.7 12.86-1.7 1.39 0 2.17 0.14 2.6 0.26 0.23 0.14 0.47 0.69 0.5 1.49 0.05 1.07-0.3 1.85-0.49 1.96-3.49 0.73-7.29 1.41-10.65 2-3.02 0.53-5.62 1-7.35 1.39-3.45 0.78-9.09 1.73-13.68 1.87l-0.2-0.01z",
        fill: "url(#c)"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.99 62.84c1.08 0 1.7 0.26 1.84 0.42 0.03 0.04 0.05 0.17 0.01 0.4-0.1 0.65 0.12 1.31 0.6 1.76 0.37 0.35 0.87 0.55 1.37 0.55 0.14 0 0.28-0.01 0.42-0.05 0.08-0.02 7.83-1.68 12.65-1.68 0.99 0 1.62 0.07 2 0.15 0.14 0.41 0.13 1.21-0.02 1.66-3.37 0.7-6.99 1.34-10.2 1.91-3.03 0.54-5.65 1-7.4 1.4-3.4 0.77-8.98 1.71-13.51 1.84h-0.15c-1.65 0-2.37-1.17-2.5-2.26-0.15-1.29 0.46-2.97 2.65-3.47l10.61-2.45c0.53-0.11 1.09-0.18 1.63-0.18m0-2c-0.73 0-1.46 0.09-2.06 0.23l-10.6 2.44c-6.04 1.39-5.29 9.69 0.3 9.69h0.23c4.57-0.13 10.25-1.07 13.87-1.89s11.34-1.99 18.01-3.39c1.53-0.32 1.8-4.61 0.13-5.35-0.74-0.23-1.77-0.33-2.97-0.33-5.09 0-13.07 1.72-13.07 1.72 0.37-2.39-1.77-3.12-3.84-3.12z",
        fill: "#EDA600"
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
          x1: 89.5,
          x2: 89.5,
          y1: 72.735,
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
          "m75.74 130.5 12.13-57.41c0.01-0.04 0.02-0.09 0.02-0.14 0.01-0.13 0.12-0.22 0.25-0.22l12.75 0.76c0.11 0.01 0.21 0.11 0.22 0.24l2.16 56.77h-27.53z",
        fill: "url(#i)"
      }),
      _react2.default.createElement("path", {
        d:
          "m89.14 74.3 10.5 0.62 2.06 54.08h-24.11l11.55-54.7m-1.01-3.06c-0.88 0-1.63 0.66-1.73 1.55l-12.51 59.21h30.93l-2.22-58.31c-0.03-0.9-0.73-1.63-1.63-1.69l-12.72-0.76h-0.12z",
        fill: "#009984"
      })
    )
  );
}

exports.default = TippingHandWoman;
