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

function Memo(props) {
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
        id: "h",
        x1: 52,
        x2: 52,
        y1: 0.3333,
        y2: 122.6,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92 124h-80c-4.4 0-8-3.6-8-8v-104c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v104c0 4.4-3.6 8-8 8z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 16,
      width: 28,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 28,
      width: 76,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 40,
      width: 76,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 52,
      width: 76,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 64,
      width: 76,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 76,
      width: 56,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 88,
      width: 48,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 100,
      width: 20,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m92 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-80c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h80m0-3h-80c-4.4 0-8 3.6-8 8v104c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-104c0-4.4-3.6-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 73.419,
        x2: 73.419,
        y1: 29.068,
        y2: 101.72,
        gradientTransform: "matrix(-1 0 0 1 128 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.006854
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.15 100.15 4.53-12.09 3.12-8.32c0.7-2.15 1.9-4.1 3.5-5.7l7.2-7.2 18.67 18.67-7.2 7.2c-1.6 1.6-3.55 2.8-5.7 3.5l-8.32 3.12-12.09 4.53c-2.29 0.74-4.46-1.43-3.71-3.71z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none"
      },
      _react2.default.createElement("path", {
        d: "m64.17 91.37 0.03-0.02c-0.01 0.01-0.02 0.02-0.03 0.02z"
      }),
      _react2.default.createElement("path", {
        d: "m48.66 75.8-0.15 0.16c0.05-0.05 0.09-0.11 0.14-0.17l0.01 0.01z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m54.49 71.08 14.42 14.42-5.08 5.08c-1.26 1.26-2.82 2.22-4.51 2.77l-0.12 0.04-8.32 3.12-11.83 4.43 4.43-11.83 3.12-8.32 0.04-0.12c0.55-1.69 1.51-3.25 2.77-4.51l5.08-5.08m0-4.24-7.2 7.2c-1.6 1.6-2.8 3.55-3.5 5.7l-3.12 8.32-4.53 12.09c-0.64 1.97 0.88 3.85 2.77 3.85 0.3 0 0.61-0.05 0.93-0.15l12.09-4.53 8.32-3.12c2.15-0.7 4.1-1.9 5.7-3.5l7.2-7.2-18.66-18.66z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 84.029,
        x2: 84.029,
        y1: 71.856,
        y2: 103.02,
        gradientTransform: "matrix(-1 0 0 1 128 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.15 100.15 4.53-12.09c2.36 1.17 4.59 2.74 6.55 4.71 1.97 1.97 3.53 4.19 4.71 6.55l-12.09 4.53c-2.28 0.75-4.45-1.42-3.7-3.7z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m42.23 92.46c1.03 0.72 1.99 1.53 2.88 2.42s1.7 1.85 2.42 2.88l-8.48 3.18 3.18-8.48m-1.55-4.4-4.53 12.09c-0.64 1.97 0.88 3.85 2.77 3.85 0.3 0 0.61-0.05 0.93-0.15l12.09-4.53c-1.17-2.36-2.74-4.59-4.71-6.55-1.96-1.97-4.19-3.54-6.55-4.71z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 26.46,
        x2: 26.46,
        y1: 22.05,
        y2: 53.593,
        gradientTransform: "matrix(-1 0 0 1 128 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "89.09 32.24 107.76 50.91 113.98 44.68 95.32 26.02",
      fill: "url(#e)"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-.7071 -.7071 .7071 -.7071 146.14 137.46)",
      x: 88.34,
      y: 36.99,
      width: 26.4,
      height: 2.93,
      fill: "#9E9E9E"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 18.341,
        x2: 18.341,
        y1: 11.722,
        y2: 42.01,
        gradientTransform: "matrix(-1 0 0 1 128 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E57373",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.32 26.02 18.67 18.67 8.3-8.3c2.29-2.29 2.29-6.01 0-8.3l-10.37-10.37c-2.29-2.29-6.01-2.29-8.3 0l-8.3 8.3z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 48.808,
        x2: 48.808,
        y1: 24.922,
        y2: 79.796,
        gradientTransform: "matrix(-1 0 0 1 128 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102.23 45.37-7.61-7.61-38.4 38.4-0.07 1.5c-0.14 3.23 2.95 6.32 6.17 6.17l1.5-0.07 38.41-38.39z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 35.026,
        x2: 35.026,
        y1: 39.632,
        y2: 92.066,
        gradientTransform: "matrix(-.7071 -.7071 -.7071 .7071 163.23 39.444)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m107.76 50.91-40.11 40.11c-2.25-0.94-3.99-3.3-3.89-5.74l0.07-1.5 38.4-38.4 5.53 5.53z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 53.604,
        x2: 53.604,
        y1: 39.632,
        y2: 92.066,
        gradientTransform: "matrix(-.7071 -.7071 -.7071 .7071 163.23 39.444)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.63 37.77-38.4 38.4-1.5 0.07c-2.44 0.11-4.8-1.64-5.74-3.89l40.11-40.11 5.53 5.53z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m107.76 19c0.77 0 1.49 0.3 2.03 0.84l10.37 10.37c0.54 0.54 0.84 1.26 0.84 2.03s-0.3 1.49-0.84 2.03l-52.81 52.81c-0.38-0.52-0.61-1.12-0.59-1.67l0.07-1.5 0.14-3.27-3.27 0.14-1.5 0.07h-0.08c-0.69 0-1.47-0.38-2.07-1.01-0.59-0.61-0.92-1.38-0.89-2.04l0.07-1.5 0.14-3.27-3.27 0.14-1.5 0.07h-0.08c-0.53 0-1.1-0.22-1.59-0.59l52.81-52.81c0.54-0.54 1.26-0.84 2.02-0.84m0-3c-1.5 0-3 0.57-4.15 1.72l-54.63 54.63c0.92 2.19 3.17 3.89 5.53 3.89h0.21l1.5-0.07-0.06 1.5c-0.14 3.16 2.81 6.18 5.96 6.18h0.21l1.5-0.07-0.07 1.5c-0.11 2.44 1.64 4.8 3.89 5.74l54.63-54.63c2.29-2.29 2.29-6.01 0-8.3l-10.37-10.37c-1.14-1.15-2.65-1.72-4.15-1.72z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Memo;
