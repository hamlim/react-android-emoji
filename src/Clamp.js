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

function Clamp(props) {
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
        x1: 27.097,
        x2: 27.097,
        y1: -73.413,
        y2: -17.291,
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
        "m78.01-44.84c-0.91-4.33-4.3-20.11-5.86-27.41-0.48-2.21-2.11-3.75-3.99-3.75-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.73-4.7 5.27-12.54 20.49-13.76 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m78.01-44.9c-0.91-4.32-4.3-20.06-5.86-27.34-0.47-2.21-2.11-3.74-3.99-3.74-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.72-4.7 5.26-12.54 20.47-13.76 22.01-0.08 0.1-6.27 2.26-9.09 3.94-1.12 0.67-1.74 2.12-1.9 3.61l-2.46 20.75c-0.64 4.09 1.7 5.8 5.37 5.8h91.51c2.8 0 5.1-0.79 5.1-5.8v-19.74c0-0.4-0.04-0.81-0.13-1.22z"
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
          "m68.16-73c0.36 0 0.87 0.53 1.05 1.38 1.46 6.78 4.94 23.03 5.86 27.4 0.04 0.2 0.06 0.41 0.06 0.63v19.79c0 2.81-0.49 2.81-2.1 2.81h-91.51c-1.3 0-2.02-0.29-2.25-0.56s-0.3-0.95-0.16-1.8l0.02-0.1 2.47-20.84c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.46 10.65-16.87 0.57-0.64 1.22-0.72 1.87-0.72h44.08c0.75 0 4.89 0 9.21-0.01l7.4-0.02m0-3c-5.36 0-15.39 0.01-16.6 0.01h-44.08-0.02c-0.63 0-2.55 0.01-4.08 1.73-4.7 5.27-12.54 20.49-13.76 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24-0.91-4.33-4.3-20.11-5.86-27.41-0.49-2.21-2.12-3.75-4-3.75z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("rect", {
      x: 36.01,
      y: 4.02,
      width: 24.02,
      height: 120.01,
      fill: "#546E7A"
    }),
    _react2.default.createElement("polygon", {
      points: "36.01 59.32 60.03 81.28 60.03 70.13 36.01 48.17",
      fill: "#455A64"
    }),
    _react2.default.createElement("polygon", {
      points: "36.01 37.24 60.03 59.21 60.03 48.06 36.01 26.09",
      fill: "#455A64"
    }),
    _react2.default.createElement("polygon", {
      points: "36.01 15.17 60.03 37.13 60.03 25.98 36.01 4.02",
      fill: "#455A64"
    }),
    _react2.default.createElement("polygon", {
      points: "46.68 80 35.99 70.24 35.99 80",
      fill: "#455A64"
    }),
    _react2.default.createElement("polygon", {
      points: "115.12 26.98 92.7 27.05 96.4 12.99 111.45 12.99",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m109.13 15.99 2.1 8.01-14.64 0.04 2.12-8.05h10.42m2.32-3h-15.05l-3.7 14.06 22.42-0.07-3.67-13.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.97 36h-20.01c-3.31 0-6-2.69-6-6s2.69-6 6-6h20.01c3.31 0 6 2.69 6 6s-2.68 6-6 6z",
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.97 26.99c1.65 0 3 1.35 3 3s-1.35 3-3 3h-20.01c-1.65 0-3-1.35-3-3s1.35-3 3-3h20.01m0-3h-20.01c-3.31 0-6 2.69-6 6s2.69 6 6 6h20.01c3.31 0 6-2.69 6-6s-2.68-6-6-6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "115.12 73.01 92.7 72.95 96.4 87.01 111.45 87.01",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m96.59 75.96 14.64 0.04-2.1 8.01h-10.42l-2.12-8.05m-3.89-3.01 3.7 14.06h15.05l3.67-13.99-22.42-0.07z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.97 64h-20.01c-3.31 0-6 2.69-6 6s2.69 6 6 6h20.01c3.31 0 6-2.69 6-6s-2.68-6-6-6z",
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.97 67c1.65 0 3 1.35 3 3s-1.35 3-3 3h-20.01c-1.65 0-3-1.35-3-3s1.35-3 3-3h20.01m0-3h-20.01c-3.31 0-6 2.69-6 6s2.69 6 6 6h20.01c3.31 0 6-2.69 6-6s-2.68-6-6-6z",
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
          "m57.03 7.02v114.01h-18.02v-114.01h18.02m3-3h-24.02v120.01h24.02v-120.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 110.09,
      width: 72.06,
      height: 7.95,
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m81.89 112.26v3.61h-67.72v-3.61h67.72m2.17-2.17h-72.06v7.95h72.06v-7.95z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 84,
      cy: 113.99,
      r: 8,
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 12,
      cy: 113.99,
      r: 8,
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m119.37 20.03h-90.81c-2.53 0-4.58-2.05-4.58-4.58v-6.86c0-2.53 2.05-4.58 4.58-4.58h90.82c2.53 0 4.58 2.05 4.58 4.58v6.86c-0.01 2.53-2.06 4.58-4.59 4.58z",
      fill: "#90A4AE"
    }),
    _react2.default.createElement("path", {
      d:
        "m119.37 96.01h-90.83c-2.53 0-4.58-2.05-4.58-4.58v-6.86c0-2.53 2.05-4.58 4.58-4.58h90.83c2.53 0 4.58 2.05 4.58 4.58v6.86c0 2.53-2.05 4.58-4.58 4.58z",
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84 108.99c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-3c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8c0-4.41-3.58-8-8-8z",
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
          "m12 108.99c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-3c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8c0-4.41-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.32 124.03h-32.55c-2.03 0-3.68-1.65-3.68-3.68v-12.66c0-2.03 1.65-3.68 3.68-3.68h32.55c2.03 0 3.68 1.65 3.68 3.68v12.66c0 2.03-1.65 3.68-3.68 3.68z",
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.32 107.02c0.37 0 0.68 0.3 0.68 0.68v12.66c0 0.37-0.3 0.68-0.68 0.68h-32.55c-0.37 0-0.68-0.3-0.68-0.68v-12.66c0-0.37 0.3-0.68 0.68-0.68h32.55m0-3h-32.55c-2.03 0-3.68 1.65-3.68 3.68v12.66c0 2.03 1.65 3.68 3.68 3.68h32.55c2.03 0 3.68-1.65 3.68-3.68v-12.66c0-2.04-1.65-3.68-3.68-3.68z",
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
          "m119.37 7.02c0.87 0 1.58 0.71 1.58 1.58v6.86c0 0.87-0.71 1.58-1.58 1.58h-90.81c-0.87 0-1.58-0.71-1.58-1.58v-6.87c0-0.87 0.71-1.58 1.58-1.58h90.81m0-2.99h-90.81c-2.53 0-4.58 2.05-4.58 4.58v6.86c0 2.53 2.05 4.58 4.58 4.58h90.82c2.53 0 4.58-2.05 4.58-4.58v-6.87c-0.01-2.53-2.06-4.57-4.59-4.57z",
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
          "m119.37 83c0.87 0 1.58 0.71 1.58 1.58v6.86c0 0.87-0.71 1.58-1.58 1.58h-90.83c-0.87 0-1.58-0.71-1.58-1.58v-6.86c0-0.87 0.71-1.58 1.58-1.58h90.83m0-3h-90.83c-2.53 0-4.58 2.05-4.58 4.58v6.86c0 2.53 2.05 4.58 4.58 4.58h90.83c2.53 0 4.58-2.05 4.58-4.58v-6.86c0-2.54-2.05-4.58-4.58-4.58z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Clamp;
