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

function Mouse(props) {
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
        id: "d",
        x1: 27.926,
        x2: 27.926,
        y1: 11.279,
        y2: 59.394,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F2F2F2",
        offset: 0.5108
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E7E7E7",
        offset: 0.6077
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CACACA",
        offset: 0.7772
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3B3B3",
        offset: 0.8899
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M27.93,54.39C15.56,54.39,5.5,44.33,5.5,31.96S15.56,9.54,27.93,9.54 S50.35,19.6,50.35,31.96S40.29,54.39,27.93,54.39z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m27.93 11.04c11.54 0 20.93 9.39 20.93 20.93s-9.39 20.93-20.93 20.93-20.93-9.4-20.93-20.94 9.39-20.92 20.93-20.92m0-3c-13.22 0-23.93 10.71-23.93 23.92s10.71 23.93 23.93 23.93 23.93-10.71 23.93-23.93-10.72-23.92-23.93-23.92z",
      fill: "#A3A3A3"
    }),
    _react2.default.createElement("circle", {
      cx: 27.93,
      cy: 31.96,
      r: 13.82,
      fill: "#FFBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 100.07,
        x2: 100.07,
        y1: 11.279,
        y2: 59.394,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F2F2F2",
        offset: 0.5108
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E7E7E7",
        offset: 0.6077
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CACACA",
        offset: 0.7772
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3B3B3",
        offset: 0.8899
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.07 54.39c-12.37 0-22.43-10.06-22.43-22.43s10.07-22.42 22.43-22.42c12.37 0 22.43 10.06 22.43 22.43s-10.06 22.42-22.43 22.42z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m100.07 11.04c11.54 0 20.93 9.39 20.93 20.93s-9.39 20.93-20.93 20.93-20.92-9.4-20.92-20.94 9.39-20.92 20.92-20.92m0-3c-13.21 0-23.93 10.71-23.93 23.93s10.71 23.93 23.93 23.93 23.93-10.72 23.93-23.94-10.71-23.92-23.93-23.92z",
      fill: "#A3A3A3"
    }),
    _react2.default.createElement("circle", {
      cx: 100.07,
      cy: 31.96,
      r: 13.82,
      fill: "#FFBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64.002,
        x2: 64.002,
        y1: 118.46,
        y2: 27.454,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3B3B3",
        offset: 0.1101
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CACACA",
        offset: 0.2228
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E7E7E7",
        offset: 0.3923
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2F2F2",
        offset: 0.4892
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 118.46c-7.51 0-20.03-3.3-31.07-10.66-6.89-4.6-18.46-14.51-18.46-29.25 0-24.57 18.94-51.1 49.53-51.1s49.53 26.52 49.53 51.1c0 14.74-11.57 24.65-18.46 29.25-11.04 7.37-23.56 10.66-31.07 10.66z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 28.95c13.55 0 25.96 5.51 34.94 15.51 8.32 9.27 13.1 21.69 13.1 34.09 0 5.52-1.7 10.84-5.06 15.81-3.03 4.48-7.31 8.58-12.73 12.2-10.78 7.19-22.96 10.41-30.24 10.41s-19.46-3.22-30.24-10.41c-5.42-3.61-9.7-7.72-12.73-12.2-3.36-4.97-5.06-10.29-5.06-15.81 0-12.39 4.77-24.82 13.1-34.09 8.96-10 21.37-15.51 34.92-15.51m0-3c-31.08 0-51.03 26.48-51.03 52.6s34 41.41 51.03 41.41 51.03-15.3 51.03-41.41-19.95-52.6-51.03-52.6z",
      fill: "#A3A3A3"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.61 94.32-4.67-4.34c-0.69-0.63-1.69-0.63-2.39 0l-4.87 4.34c-0.36 0.35-0.68 0.83-0.68 1.34v-0.07c0 3.52 3.11 6.41 6.63 6.41h0.41c3.52 0 5.96-2.89 5.96-6.41v0.04c0-0.51-0.01-0.96-0.39-1.31z",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 35.94,
        cy: -46.13,
        rx: 8.39,
        ry: 9.49
      }),
      _react2.default.createElement("ellipse", {
        cx: 92.07,
        cy: -46.13,
        rx: 8.39,
        ry: 9.49
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#808080",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement("path", {
        d: "m63.37 85.96c0 4.25-3.45 7.7-7.7 7.7s-7.7-3.45-7.7-7.7"
      }),
      _react2.default.createElement("path", {
        d: "m79.26 85.96c0 4.25-3.45 7.7-7.7 7.7s-7.7-3.45-7.7-7.7"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.002,
        x2: 64.002,
        y1: 73.646,
        y2: 87.648,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#575757",
        offset: 0.1628
      }),
      _react2.default.createElement("stop", {
        stopColor: "#262626",
        offset: 0.6453
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 80.22,
      rx: 10.62,
      ry: 6.63,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#404040",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement("line", {
        x1: 20.16,
        x2: 33.34,
        y1: 107.3,
        y2: 95.12
      }),
      _react2.default.createElement("line", {
        x1: 31.74,
        x2: 15.42,
        y1: 89.71,
        y2: 96.22
      }),
      _react2.default.createElement("line", {
        x1: 13,
        x2: 31,
        y1: 84.5,
        y2: 84.5
      }),
      _react2.default.createElement("line", {
        x1: 108,
        x2: 94.83,
        y1: 107.3,
        y2: 95.12
      }),
      _react2.default.createElement("line", {
        x1: 96.43,
        x2: 112.75,
        y1: 89.71,
        y2: 96.22
      }),
      _react2.default.createElement("line", {
        x1: 115,
        x2: 98,
        y1: 84.5,
        y2: 84.5
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m91.83 65.59-7.71-1.77 7.92-3.73c0.09-0.05 0.18-0.11 0.26-0.17 1.65-1.15 1.91-3.54 0.43-5.04-1.15-1.15-3.02-1.18-4.35-0.25-3.14 2.2-10.52 7.37-13.4 9.39-0.52 0.36-0.43 1.15 0.14 1.4l14.53 6.36c0.1 0.04 0.2 0.08 0.31 0.12 1.92 0.62 4-0.62 4.28-2.72 0.22-1.6-0.87-3.09-2.41-3.59z"
      }),
      _react2.default.createElement("path", {
        d:
          "m36.17 65.59 7.71-1.77-7.92-3.73c-0.09-0.05-0.18-0.11-0.26-0.17-1.65-1.15-1.91-3.54-0.43-5.04 1.15-1.15 3.02-1.18 4.35-0.25 3.14 2.2 10.52 7.37 13.4 9.39 0.52 0.36 0.43 1.15-0.14 1.4l-14.53 6.36c-0.1 0.04-0.2 0.08-0.31 0.12-1.92 0.62-4-0.62-4.28-2.72-0.22-1.6 0.87-3.09 2.41-3.59z"
      })
    )
  );
}

exports.default = Mouse;
