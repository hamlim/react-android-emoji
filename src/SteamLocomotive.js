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

function SteamLocomotive(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("polygon", {
      points: "120 94 64.14 94 62.06 94 26 94 26 118 64 118 64 112 120 112",
      fill: "#3E2723"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 16.084,
        x2: 16.084,
        y1: 94.833,
        y2: 118.17,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF7043",
        offset: 0.0031062
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F15A2B",
        offset: 0.6144
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M28,94.58v23.84c0,0.87-0.71,1.58-1.58,1.58H5.75c-1.22,0-1.98-1.33-1.36-2.39l15.15-23.84 c0.28-0.48,0.8-0.77,1.36-0.77h5.52C27.29,93,28,93.71,28,94.58z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.15
      },
      _react2.default.createElement("path", {
        d:
          "m25 96v21h-16.66l13.35-21h3.31m1.42-3h-5.52c-0.56 0-1.07 0.29-1.36 0.77l-15.15 23.84c-0.62 1.06 0.14 2.39 1.36 2.39h20.67c0.87 0 1.58-0.71 1.58-1.58v-23.84c0-0.87-0.71-1.58-1.58-1.58z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 23.67,
      cy: 71,
      r: 4,
      fill: "#FF5722"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m23.67 69c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.89-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m30 36.65v6.71c0 0.15 0.02 0.29 0.07 0.43l3.71 11.29c0.18 0.54 0.67 0.91 1.23 0.91h6.05c0.56 0 1.05-0.37 1.23-0.92l3.64-11.29c0.04-0.14 0.07-0.28 0.07-0.42v-6.71c0-0.74-0.58-1.34-1.3-1.34h-13.4c-0.72 0-1.3 0.6-1.3 1.34z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m44 37.31v5.96l-3.46 10.73h-5.01l-3.53-10.73v-5.95h12m0.7-2.01h-13.4c-0.72 0-1.3 0.6-1.3 1.34v6.71c0 0.15 0.02 0.29 0.07 0.43l3.71 11.29c0.18 0.54 0.67 0.91 1.23 0.91h6.05c0.56 0 1.05-0.37 1.23-0.92l3.64-11.29c0.04-0.14 0.07-0.28 0.07-0.42v-6.71c0-0.74-0.58-1.34-1.3-1.34z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 56.5,
        x2: 56.5,
        y1: 55.384,
        y2: 89.791,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF7043",
        offset: 0.00058829
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F15A2B",
        offset: 0.6134
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m83.88 56h-54.88c-2.75 0-5 1.97-5 4.45v25.1c0 2.48 2.25 4.46 5 4.46h54.88c2.75 0 5.12-2.18 5.12-4.65v-24.94c0-2.47-2.38-4.42-5.12-4.42z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m83.88 59c1.21 0 2.12 0.72 2.12 1.35v24.56c0 0.88-1 2.09-2 2.09h-55c-1.07 0-2-1.06-2-1.91v-24.71c0-0.75 0.92-1.38 2-1.38h55m-0.12-3h-54.88c-2.75 0-5 1.94-5 4.38v24.72c0 2.44 2.25 4.91 5 4.91h55c2.75 0 5-2.66 5-5.09v-24.57c0-2.43-2.38-4.35-5.12-4.35z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 98,
        x2: 98,
        y1: 32,
        y2: 90,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF7043",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F15A2B",
        offset: 0.6132
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M121.64,32H74.36c-1.3,0-2.36,0.95-2.36,2.05v0.11c0,1.1,1.06,1.83,2.36,1.83H76v54h44V36 h1.64c1.3,0,2.36-0.73,2.36-1.83v-0.11C124,32.95,122.94,32,121.64,32z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117 35v52h-38v-52h38m4.64-3h-47.28c-1.3 0-2.36 0.95-2.36 2.05v0.11c0 1.1 1.06 1.83 2.36 1.83h1.64v54h44v-53.99h1.64c1.3 0 2.36-0.73 2.36-1.83v-0.11c0-1.11-1.06-2.06-2.36-2.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 75.51,
      cy: 108.06,
      r: 16.06,
      fill: "#3E2723"
    }),
    _react2.default.createElement("circle", {
      cx: 75.51,
      cy: 108.06,
      r: 13.37,
      fill: "#6D4C41"
    }),
    _react2.default.createElement("circle", {
      cx: 75.51,
      cy: 108.06,
      r: 6.31,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 107.56,
      cy: 108.06,
      r: 16.06,
      fill: "#3E2723"
    }),
    _react2.default.createElement("circle", {
      cx: 107.56,
      cy: 108.06,
      r: 13.7,
      fill: "#6D4C41"
    }),
    _react2.default.createElement("circle", {
      cx: 107.51,
      cy: 108.06,
      r: 6.31,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 36.82,
      cy: 117.3,
      r: 6.82,
      fill: "#5D4037"
    }),
    _react2.default.createElement("circle", {
      cx: 36.82,
      cy: 117.3,
      r: 2.75,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m93.67 64h-8.17c-1.1 0-2-0.9-2-2v-19.88c0-1.1 0.9-2 2-2h8.17c1.1 0 2 0.9 2 2v19.88c0 1.1-0.89 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.5 64h-8.17c-1.1 0-2-0.9-2-2v-19.88c0-1.1 0.9-2 2-2h8.17c1.1 0 2 0.9 2 2v19.88c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("circle", {
      cx: 53.12,
      cy: 117.3,
      r: 6.82,
      fill: "#5D4037"
    }),
    _react2.default.createElement("circle", {
      cx: 53.04,
      cy: 117.3,
      r: 2.75,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "M109,110H64c-0.26,0-0.51-0.07-0.74-0.2l-12-6.81c-0.72-0.41-0.97-1.33-0.56-2.04 c0.41-0.72,1.33-0.97,2.04-0.56L64.4,107H109c0.83,0,1.5,0.67,1.5,1.5S109.83,110,109,110z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.77 107.27h-19.62c-1.65 0-3-1.35-3-3v-5.17c0-1.65 1.35-3 3-3h19.63c1.65 0 3 1.35 3 3v5.17c-0.01 1.65-1.36 3-3.01 3z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m52.77 98.1c0.54 0 1 0.46 1 1v5.17c0 0.54-0.46 1-1 1h-19.62c-0.54 0-1-0.46-1-1v-5.17c0-0.54 0.46-1 1-1h19.62m0-2h-19.62c-1.65 0-3 1.35-3 3v5.17c0 1.65 1.35 3 3 3h19.63c1.65 0 3-1.35 3-3v-5.17c-0.01-1.65-1.36-3-3.01-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122 94.52h-104c-1.1 0-2-0.9-2-2v-1.03c0-1.1 0.9-2 2-2h104c1.1 0 2 0.9 2 2v1.03c0 1.1-0.9 2-2 2z",
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m93.67 42.12v19.88h-8.17v-19.88h8.17m0-2h-8.17c-1.1 0-2 0.9-2 2v19.88c0 1.1 0.9 2 2 2h8.17c1.1 0 2-0.9 2-2v-19.88c0-1.1-0.89-2-2-2z",
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
          "m110.5 42.12v19.88h-8.17v-19.88h8.17m0-2h-8.17c-1.1 0-2 0.9-2 2v19.88c0 1.1 0.9 2 2 2h8.17c1.1 0 2-0.9 2-2v-19.88c0-1.1-0.9-2-2-2z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SteamLocomotive;
