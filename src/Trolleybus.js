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

function Trolleybus(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "M122.06,19H5.94C4.87,19,4,18.06,4,17s0.87-2,1.94-2h116.13c1.07,0,1.94,0.94,1.94,2 S123.13,19,122.06,19z",
      fill: "#263238"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m122.03 16c0.5 0 0.95 0.47 0.95 1s-0.42 1-0.92 1h-116.12c-0.5 0-0.94-0.47-0.94-1s0.44-1 0.94-1h116.06m0.06-1h-116.12c-1.07 0-1.94 0.94-1.94 2s0.87 2 1.94 2h116.13c1.07 0 1.94-0.94 1.94-2s-0.88-2-1.95-2z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M108,16H91.96c-0.26,0-0.51,0.07-0.73,0.19l-26,27.46c-0.18,0.1-0.34,0.35-0.46,0.35H54 c-1.1,0-2,0.98-2,2.08v0.83c0,1.1,0.9,2.08,2,2.08h23.92c1.1,0,2.08-0.98,2.08-2.08v-0.83c0-1.1-0.98-2.08-2.08-2.08h-7.24 l22.94-25H108c0.83,0,1.5-0.67,1.5-1.5S108.83,16,108,16z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m108 17c0.28 0 0.5 0.22 0.5 0.5s-0.22 0.5-0.5 0.5h-14.82l-0.3 0.32-22.94 25-1.53 1.68h9.52c0.56 0 1.08 0.53 1.08 1.08v0.83c0 0.56-0.53 1.08-1.08 1.08h-23.93c-0.53 0-1-0.51-1-1.08v-0.83c0-0.58 0.47-1.08 1-1.08h10.77c0.48 0 0.77-0.29 0.93-0.45l0.05-0.05 0.1-0.05 0.11-0.11 25.87-27.32c0.05-0.01 0.09-0.02 0.14-0.02h16.03m0-1h-16.04c-0.26 0-0.51 0.07-0.73 0.19l-26 27.46c-0.18 0.1-0.34 0.35-0.46 0.35h-10.77c-1.1 0-2 0.98-2 2.08v0.83c0 1.1 0.9 2.08 2 2.08h23.92c1.1 0 2.08-0.98 2.08-2.08v-0.83c0-1.1-0.98-2.08-2.08-2.08h-7.24l22.94-25h14.38c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 48.639,
        y2: 103.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF8E1",
        offset: 0.0068083
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF7DC",
        offset: 0.1844
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF3CC",
        offset: 0.4054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.6496
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE490",
        offset: 0.9087
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0.9981
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118 115.75h-108c-3.3 0-6-2.7-6-6v-55.75c0-3.3 2.7-6 6-6h108c3.3 0 6 2.7 6 6v55.75c0 3.3-2.7 6-6 6z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.95 81.92h-13.92c-1.66 0-3-1.34-3-3v-20.05c0-1.66 1.34-3 3-3h13.92c1.66 0 3 1.34 3 3v20.05c0 1.66-1.34 3-3 3z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m49.87 75.67h-9.84c-1.66 0-3-1.34-3-3v-13.8c0-1.66 1.34-3 3-3h9.84c1.66 0 3 1.34 3 3v13.8c0 1.66-1.34 3-3 3z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.82 75.67h-9.84c-1.66 0-3-1.34-3-3v-13.8c0-1.66 1.34-3 3-3h9.84c1.66 0 3 1.34 3 3v13.8c0 1.66-1.34 3-3 3z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m89.96 75.67h-9.84c-1.66 0-3-1.34-3-3v-13.8c0-1.66 1.34-3 3-3h9.84c1.66 0 3 1.34 3 3v13.8c0 1.66-1.34 3-3 3z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m109.92 75.67h-9.84c-1.66 0-3-1.34-3-3v-13.8c0-1.66 1.34-3 3-3h9.84c1.66 0 3 1.34 3 3v13.8c0 1.66-1.34 3-3 3z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m118 115.75h-108c-3.3 0-6-2.7-6-6v-55.75c0-3.3 2.7-6 6-6h108c3.3 0 6 2.7 6 6v55.75c0 3.3-2.7 6-6 6z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("rect", {
      x: 3.88,
      y: 89.1,
      width: 120.12,
      height: 29.05,
      clipPath: "url(#a)",
      fill: "#66BB6A"
    }),
    _react2.default.createElement("path", {
      d:
        "m4.87 90.75c-0.3 0-0.59 0.04-0.87 0.1v10.3c0.28 0.06 0.57 0.1 0.87 0.1 2.18 0 3.96-1.78 3.96-3.96v-2.58c0-2.18-1.78-3.96-3.96-3.96z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m118 50.87c1.73 0 3.13 1.4 3.13 3.13v55.75c0 1.73-1.4 3.13-3.13 3.13h-108c-1.73 0-3.13-1.4-3.13-3.13v-55.75c0-1.73 1.4-3.13 3.13-3.13h108m0-2.87h-108c-3.3 0-6 2.7-6 6v55.75c0 3.3 2.7 6 6 6h108c3.3 0 6-2.7 6-6v-55.75c0-3.3-2.7-6-6-6z",
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
          "m29.95 57.87c0.55 0 1 0.45 1 1v20.05c0 0.55-0.45 1-1 1h-13.92c-0.55 0-1-0.45-1-1v-20.05c0-0.55 0.45-1 1-1h13.92m0-2h-13.92c-1.66 0-3 1.34-3 3v20.05c0 1.66 1.34 3 3 3h13.92c1.66 0 3-1.34 3-3v-20.05c0-1.65-1.34-3-3-3z",
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
          "m50.36 57.87c0.28 0 0.51 0.23 0.51 0.51v14.77c0 0.28-0.23 0.51-0.51 0.51h-10.81c-0.28 0-0.51-0.23-0.51-0.51v-14.76c0-0.28 0.23-0.51 0.51-0.51h10.81m0-2.01h-10.81c-1.39 0-2.51 1.13-2.51 2.51v14.77c0 1.39 1.13 2.51 2.51 2.51h10.81c1.39 0 2.51-1.13 2.51-2.51v-14.76c0-1.39-1.12-2.52-2.51-2.52z",
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
          "m69.82 57.87c0.55 0 1 0.45 1 1v13.8c0 0.55-0.45 1-1 1h-9.84c-0.55 0-1-0.45-1-1v-13.8c0-0.55 0.45-1 1-1h9.84m0-2h-9.84c-1.66 0-3 1.34-3 3v13.8c0 1.66 1.34 3 3 3h9.84c1.66 0 3-1.34 3-3v-13.8c0-1.65-1.34-3-3-3z",
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
          "m89.96 57.87c0.55 0 1 0.45 1 1v13.8c0 0.55-0.45 1-1 1h-9.84c-0.55 0-1-0.45-1-1v-13.8c0-0.55 0.45-1 1-1h9.84m0-2h-9.84c-1.66 0-3 1.34-3 3v13.8c0 1.66 1.34 3 3 3h9.84c1.66 0 3-1.34 3-3v-13.8c0-1.65-1.34-3-3-3z",
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
          "m109.92 57.87c0.55 0 1 0.45 1 1v13.8c0 0.55-0.45 1-1 1h-9.84c-0.55 0-1-0.45-1-1v-13.8c0-0.55 0.45-1 1-1h9.84m0-2h-9.84c-1.66 0-3 1.34-3 3v13.8c0 1.66 1.34 3 3 3h9.84c1.66 0 3-1.34 3-3v-13.8c0-1.65-1.34-3-3-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 27,
      cy: 112,
      r: 12,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m27 102c5.51 0 10 4.49 10 10s-4.49 10-10 10-10-4.49-10-10 4.49-10 10-10m0-2c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 27,
      cy: 112,
      r: 5.14,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 101,
      cy: 112,
      r: 12,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m101 102c5.51 0 10 4.49 10 10s-4.49 10-10 10-10-4.49-10-10 4.49-10 10-10m0-2c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 101,
      cy: 112,
      r: 5.14,
      fill: "#BDBDBD"
    })
  );
}

exports.default = Trolleybus;
