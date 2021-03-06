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

function BalanceScale(props) {
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
        id: "b",
        x1: -93.047,
        x2: -93.047,
        y1: -73.413,
        y2: -17.291,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0051299
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.2817
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.5766
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-42.13-44.72c-0.91-4.33-4.3-20.11-5.87-27.41-0.47-2.21-2.11-3.82-3.99-3.81-5.36 0-15.39-0.05-16.6-0.05h-44.08c-0.61 0-2.56 0.06-4.11 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0-0.43-0.05-0.85-0.13-1.25z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m-42.13-44.78c-0.91-4.32-4.3-20.06-5.87-27.34-0.47-2.21-2.11-3.82-3.99-3.82-5.36 0-15.39-0.06-16.6-0.06h-44.08c-0.61 0-2.56 0.07-4.11 1.8-4.7 5.26-12.54 20.51-13.76 22.05-0.08 0.1-6.27 2.28-9.09 3.96-1.12 0.67-1.74 2.13-1.9 3.62l-2.46 20.76c-0.64 4.09 1.7 5.81 5.37 5.81h91.51c2.8 0 5.11-0.79 5.11-5.8v-19.74c0-0.42-0.05-0.83-0.13-1.24z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-51.98-73c0.36 0 0.87 0.59 1.05 1.44 1.46 6.78 4.95 23.06 5.86 27.43 0.04 0.2 0.07 0.44 0.07 0.66v19.79c0 2.81-0.49 2.69-2.11 2.69h-91.51c-1.3 0-2.02-0.23-2.25-0.5s-0.3-0.92-0.16-1.77c0.01-0.04 0.01-0.06 0.02-0.09l2.47-20.83c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.53 10.65-16.93 0.57-0.64 1.22-0.79 1.87-0.79h44.08 9.21 7.4-0.02m0.02-3.01s-0.01 0 0 0h-16.6-44.08-0.02c-0.63 0-2.55 0.08-4.08 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0-0.42-0.05-0.84-0.13-1.24-0.91-4.33-4.3-20.17-5.87-27.47-0.49-2.21-2.13-3.81-4-3.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 46.43,
        x2: 46.43,
        y1: -117.5,
        y2: -61.374,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0106
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D5D5D",
        offset: 0.2496
      }),
      _react2.default.createElement("stop", {
        stopColor: "#505050",
        offset: 0.5044
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3B3B3B",
        offset: 0.7657
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.35-88.93c-0.91-4.33-4.3-20.11-5.86-27.41-0.47-2.21-2.11-3.75-3.99-3.75-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.73-4.71 5.28-12.55 20.49-13.76 22.04-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c-0.01-0.43-0.05-0.84-0.13-1.25z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m97.35-88.98c-0.91-4.32-4.3-20.06-5.86-27.34-0.47-2.21-2.11-3.74-3.99-3.74-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.72-4.71 5.27-12.55 20.48-13.76 22.02-0.08 0.1-6.27 2.26-9.09 3.94-1.12 0.67-1.74 2.12-1.9 3.61l-2.47 20.76c-0.64 4.09 1.7 5.8 5.37 5.8h91.51c2.8 0 5.1-0.79 5.1-5.8v-19.74c0-0.42-0.04-0.84-0.12-1.24z"
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
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m87.5-117.08c0.36 0 0.87 0.53 1.05 1.38 1.46 6.78 4.94 23.03 5.86 27.4 0.04 0.2 0.06 0.41 0.06 0.63v19.79c0 2.81-0.49 2.81-2.1 2.81h-91.51c-1.3 0-2.02-0.29-2.25-0.56s-0.3-0.95-0.16-1.8l0.02-0.1 2.47-20.84c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.46 10.65-16.87 0.57-0.64 1.22-0.72 1.87-0.72h44.08c0.75 0 4.89 0 9.21-0.01l7.4-0.02m0-3c-5.36 0-15.39 0.01-16.6 0.01h-44.08-0.02c-0.63 0-2.55 0.01-4.08 1.73-4.72 5.27-12.56 20.48-13.77 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24-0.91-4.33-4.3-20.11-5.86-27.41-0.48-2.22-2.12-3.75-3.99-3.75z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M31.98,41h-4l23.95,39.06l0.09,0.15L53.7,83l2.02-0.01c0.12-1,0.27-2.02,0.27-2.99h0L31.98,41z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m31.42 42 23.57 38.28c-0.02 0.55-0.08 1.12-0.16 1.72h-0.57l-1.38-2.31-0.09-0.15-23.02-37.54h1.65m0.56-1h-4l23.95 39.06 0.09 0.15 1.68 2.79 2.02-0.01c0.12-1 0.27-2.02 0.27-2.99l-24.01-39z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.99 41h4l-23.95 39.06-0.09 0.15-1.68 2.79-2.02-0.01c-0.12-1-0.27-2.02-0.27-2.99l24.01-39z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.2 42-23.02 37.54-0.1 0.16-1.37 2.3h-0.57c-0.08-0.6-0.14-1.18-0.16-1.72l23.57-38.28h1.65m1.79-1h-4l-24.01 39c0 0.97 0.16 1.99 0.27 2.99l2.02 0.01 1.67-2.79 0.09-0.15 23.96-39.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 27.98,
      y: 40.67,
      width: 4,
      height: 47.23,
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m30.98 41.67v45.23h-2v-45.23h2m1-1h-4v47.23h4v-47.23z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 29.987,
        x2: 29.987,
        y1: 104.06,
        y2: 80,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.0020129
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A3A3A3",
        offset: 0.0407
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BEBEBE",
        offset: 0.2703
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D1D1D1",
        offset: 0.5048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DCDCDC",
        offset: 0.7451
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M56,80c0,14.18-13.2,24.06-26.01,24.06c-12.93,0-26.01-9.89-26.01-24.06H56z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m52.76 83c-0.73 4.58-3.13 8.79-6.93 12.08-4.39 3.8-10.17 5.98-15.85 5.98-5.72 0-11.51-2.18-15.89-5.98-3.77-3.28-6.16-7.49-6.88-12.08h45.55m3.24-3h-52.02c0 14.18 13.08 24.06 26.01 24.06 12.81 0 26.01-9.88 26.01-24.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.99 41h-4l23.95 39.06 0.09 0.15 1.67 2.79 2.02-0.01c0.12-1 0.27-2.02 0.27-2.99l-24-39z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m99.44 42 23.57 38.28c-0.02 0.55-0.08 1.12-0.16 1.72h-0.57l-1.38-2.31-0.09-0.15-23.03-37.54h1.66m0.55-1h-4l23.95 39.06 0.09 0.15 1.67 2.79 2.02-0.01c0.12-1 0.27-2.02 0.27-2.99l-24-39z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.01 41h4l-23.96 39.06-0.09 0.15-1.67 2.79-2.02-0.01c-0.12-1-0.27-2.02-0.27-2.99l24.01-39z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98.22 42-23.02 37.54-0.1 0.16-1.38 2.3h-0.57c-0.07-0.6-0.14-1.17-0.16-1.72l23.58-38.28h1.65m1.79-1h-4l-24.02 39c0 0.97 0.16 1.99 0.27 2.99l2.03 0.01 1.67-2.79 0.09-0.15 23.96-39.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 96,
      y: 40.67,
      width: 4,
      height: 47.23,
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m98.99 41.67v45.23h-2v-45.23h2m1-1h-4v47.23h4v-47.23z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 98.002,
        x2: 98.002,
        y1: 104.06,
        y2: 80,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.0020129
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A3A3A3",
        offset: 0.0407
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BEBEBE",
        offset: 0.2703
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D1D1D1",
        offset: 0.5048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DCDCDC",
        offset: 0.7451
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124.01 80c0 14.18-13.2 24.06-26.01 24.06-12.93 0-26.01-9.89-26.01-24.06h52.02z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.78 83c-0.73 4.58-3.13 8.79-6.93 12.08-4.39 3.8-10.17 5.98-15.85 5.98-5.72 0-11.51-2.18-15.89-5.98-3.78-3.28-6.16-7.5-6.89-12.08h45.56m3.23-3h-52.02c0 14.18 13.08 24.06 26.01 24.06 12.81 0 26.01-9.88 26.01-24.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68 116v-83.89c2 0.96 3.79 1.96 5.78 3.26 7.09 4.61 15.22 7.07 23.22 7.54l-3.01-6.32c-5.97-0.82-11.55-2.91-16.83-6.34-3.13-2.03-6.12-3.69-9.16-5v-13.34h-8v13.34c-3.03 1.31-6.03 2.97-9.16 5-5.28 3.43-10.86 5.53-16.83 6.34l-3.01 6.32c8-0.47 16.13-2.94 23.22-7.54 1.99-1.29 3.78-2.29 5.78-3.26v83.89h8z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m66 13.91v11.34c0 0.8 0.47 1.52 1.21 1.84 2.84 1.23 5.73 2.81 8.86 4.84 5.16 3.35 10.73 5.53 16.57 6.49l1.04 2.17c-6.76-0.9-13.2-3.25-18.8-6.89-2-1.3-3.85-2.34-6-3.38-0.28-0.13-0.57-0.2-0.87-0.2-0.37 0-0.74 0.1-1.06 0.31-0.6 0.36-0.95 1-0.95 1.68v81.89h-4v-81.89c0-0.69-0.35-1.33-0.94-1.69-0.32-0.2-0.69-0.31-1.06-0.31-0.3 0-0.59 0.07-0.87 0.2-2.15 1.04-4 2.08-6.01 3.38-5.6 3.64-12.04 6-18.8 6.89l1.04-2.17c5.84-0.96 11.41-3.13 16.57-6.49 3.13-2.03 6.03-3.62 8.86-4.84 0.73-0.32 1.21-1.04 1.21-1.84v-11.34h4m2-1.99h-8v13.34c-3.03 1.31-6.03 2.97-9.16 5-5.28 3.43-10.86 5.53-16.83 6.34l-3.01 6.32c8-0.47 16.13-2.94 23.22-7.54 1.99-1.29 3.78-2.29 5.78-3.26v83.89h8v-83.89c2 0.96 3.79 1.96 5.78 3.26 7.09 4.61 15.22 7.07 23.22 7.54l-3.01-6.32c-5.97-0.82-11.55-2.91-16.83-6.34-3.13-2.03-6.12-3.69-9.16-5v-13.34z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: -222.99,
      y: 187.5,
      width: 7.99,
      height: 112.5
    }),
    _react2.default.createElement("path", {
      d:
        "m-190.27 300c2.26 0 3.86-2.3 2.99-4.39-3.46-8.38-16.35-15.85-31.72-15.85s-28.26 7.47-31.72 15.85c-0.86 2.09 0.73 4.39 2.99 4.39h57.46z"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64,
        x2: 64,
        y1: 124,
        y2: 103.76,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.73 124c2.26 0 3.86-2.3 2.99-4.39-3.46-8.38-16.35-15.85-31.72-15.85s-28.26 7.47-31.72 15.85c-0.87 2.09 0.72 4.39 2.99 4.39h57.46z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 105.76c15.48 0 26.95 7.53 29.88 14.61 0.2 0.48 0.01 0.88-0.12 1.07-0.11 0.17-0.43 0.55-1.03 0.55h-57.46c-0.59 0-0.92-0.39-1.03-0.55-0.13-0.19-0.31-0.59-0.12-1.07 2.93-7.08 14.4-14.61 29.88-14.61m0-2c-15.37 0-28.26 7.47-31.72 15.85-0.87 2.09 0.72 4.39 2.99 4.39h57.47c2.26 0 3.86-2.3 2.99-4.39-3.47-8.38-16.36-15.85-31.73-15.85z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: -219,
      cy: 187.91,
      r: 7.91
    }),
    _react2.default.createElement("circle", {
      cx: -254.91,
      cy: 213.25,
      r: 5.99
    }),
    _react2.default.createElement("path", {
      d:
        "m-231.12 256c0 14-12.12 19.75-23.89 19.75-11.88 0-23.89-5.75-23.89-19.75h47.78z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-159 256c0 14-12.12 19.75-23.89 19.75-11.88 0-23.89-5.75-23.89-19.75h47.78z"
    }),
    _react2.default.createElement("polygon", {
      points: "-275.01 256 -278.91 256 -256.85 216.67 -252.96 216.67"
    }),
    _react2.default.createElement("polygon", {
      points: "-235.02 256 -231.12 256 -253.18 216.67 -257.07 216.67"
    }),
    _react2.default.createElement("rect", {
      x: -256.96,
      y: 216.67,
      width: 3.9,
      height: 39.33
    }),
    _react2.default.createElement("path", {
      d:
        "m-215 198.63c-6 1.32-11.34 3.84-17.16 7.61-7.48 4.86-15.51 7.06-24.51 6.71-1.75-0.06-3.18 1.28-3.25 3l5.02 3.29c9.43 0 18.22-2.6 26.14-7.75 4.69-3.05 8.75-5.17 13.75-6.41v-6.45z"
    }),
    _react2.default.createElement("circle", {
      cx: -183,
      cy: 213.25,
      r: 5.99
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 64.002,
        x2: 64.002,
        y1: 19.812,
        y2: 4,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 11.91,
      r: 7.91,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 29.982,
        x2: 29.982,
        y1: 45.46,
        y2: 33.481,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 29.98,
      cy: 39.47,
      r: 5.99,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,6c3.26,0,5.91,2.65,5.91,5.91s-2.65,5.91-5.91,5.91s-5.91-2.65-5.91-5.91S60.75,6,64,6 M64,4 c-4.37,0-7.91,3.54-7.91,7.91s3.54,7.91,7.91,7.91s7.91-3.54,7.91-7.91S68.37,4,64,4L64,4z",
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
          "m29.98 35.48c2.2 0 3.99 1.79 3.99 3.99s-1.79 3.99-3.99 3.99-3.99-1.79-3.99-3.99 1.79-3.99 3.99-3.99m0-2c-3.31 0-5.99 2.68-5.99 5.99s2.68 5.99 5.99 5.99 5.99-2.68 5.99-5.99-2.68-5.99-5.99-5.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 98.002,
        x2: 98.002,
        y1: 45.46,
        y2: 33.481,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 98,
      cy: 39.47,
      r: 5.99,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98 35.48c2.2 0 3.99 1.79 3.99 3.99s-1.79 3.99-3.99 3.99-3.99-1.79-3.99-3.99 1.79-3.99 3.99-3.99m0-2c-3.31 0-5.99 2.68-5.99 5.99s2.68 5.99 5.99 5.99 5.99-2.68 5.99-5.99-2.68-5.99-5.99-5.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "-162.9 256 -159 256 -181.05 216.67 -184.95 216.67"
    }),
    _react2.default.createElement("polygon", {
      points: "-202.89 256 -206.78 256 -184.73 216.67 -180.83 216.67"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-1 -4.4823e-11 4.4823e-11 -1 -365.78 472.67)",
      x: -184.84,
      y: 216.67,
      width: 3.9,
      height: 39.33
    }),
    _react2.default.createElement("path", {
      d:
        "m-223 198.63c6 1.32 11.39 3.84 17.2 7.61 7.48 4.86 15.53 7.06 24.54 6.71 1.75-0.06 3.19 1.28 3.26 3l-5.02 3.29c-9.43 0-18.27-2.6-26.19-7.75-4.69-3.05-8.79-5.17-13.79-6.41v-6.45z"
    })
  );
}

exports.default = BalanceScale;
