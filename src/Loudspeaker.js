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

function Loudspeaker(props) {
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
      "radialGradient",
      {
        id: "f",
        cx: 119.67,
        cy: 41.333,
        r: 24.88,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8D8D8D",
        offset: 0.2247
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6D6D6D",
        offset: 0.7241
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.86 62c2.83 0 5.14-2.31 5.14-5.14v-13.72c0-2.83-2.31-5.14-5.14-5.14s-5.14 2.31-5.14 5.14v13.71c-0.01 2.84 2.31 5.15 5.14 5.15z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 35.5,
        cy: 86.5,
        r: 18.742,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m22.26 62.25 7.75-2c4.26-1.1 8.65 1.49 9.75 5.75l4 15.49c1.1 4.26-1.49 8.65-5.75 9.75l-7.75 2c-4.26 1.1-8.65-1.49-9.75-5.75l-4-15.49c-1.1-4.26 1.49-8.65 5.75-9.75z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m31.99 63c2.29 0 4.28 1.54 4.85 3.75l4 15.49c0.69 2.67-0.92 5.4-3.59 6.09l-7.75 2c-0.41 0.1-0.82 0.16-1.24 0.16-2.29 0-4.28-1.54-4.85-3.75l-4-15.49c-0.69-2.67 0.92-5.4 3.59-6.09l7.75-2c0.41-0.11 0.83-0.16 1.24-0.16m0-3c-0.66 0-1.32 0.08-1.99 0.25l-7.75 2c-4.26 1.1-6.85 5.48-5.75 9.75l4 15.49c0.93 3.6 4.2 6 7.76 6 0.66 0 1.32-0.08 1.99-0.25l7.75-2c4.26-1.1 6.85-5.48 5.75-9.75l-4-15.49c-0.93-3.6-4.2-6-7.76-6z",
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
          "m118.86 41c1.18 0 2.14 0.96 2.14 2.14v13.71c0 1.18-0.96 2.14-2.14 2.14s-2.14-0.96-2.14-2.14v-13.71c-0.01-1.18 0.96-2.14 2.14-2.14m0-3c-2.83 0-5.14 2.31-5.14 5.14v13.71c0 2.83 2.31 5.14 5.14 5.14s5.14-2.31 5.14-5.14v-13.71c0-2.83-2.31-5.14-5.14-5.14z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 27,
        cy: 66.333,
        r: 52.987,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6E6E6E",
        offset: 0.1054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4E4E4E",
        offset: 0.6817
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m32 106.68v-3.75c0-1.64 0.84-3.08 2.08-3.87 1.2-0.76 1.92-2.15 1.92-3.64v-2.22c0-1.83-0.72-3.22-1.93-3.98-1.23-0.78-2.07-2.22-2.07-3.86v-3.75c0-1.65 0.84-3.08 2.08-3.87 1.2-0.76 1.92-2.14 1.92-3.63v-3.27c0-6.36-4.67-11.35-10.39-11.35h-3.48c-5.71 0-10.39 4.98-10.39 11.07v44.9c0 4.69 3.6 8.53 8 8.53h8.26c4.4 0 8-3.84 8-8.53v-1.28c0-1.49-0.72-2.88-1.93-3.64-1.23-0.78-2.07-2.21-2.07-3.86z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d: "m22 84h-8c-1.1 0-2-0.9-2-2s0.9-2 2-2h8c1.1 0 2 0.9 2 2s-0.9 2-2 2z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d: "m22 96h-8c-1.1 0-2-0.9-2-2s0.9-2 2-2h8c1.1 0 2 0.9 2 2s-0.9 2-2 2z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d: "m22 108h-8c-1.1 0-2-0.9-2-2s0.9-2 2-2h8c1.1 0 2 0.9 2 2s-0.9 2-2 2z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m25.61 62.5c4.07 0 7.39 3.75 7.39 8.35v3.27c0 0.46-0.21 0.89-0.52 1.09-2.18 1.37-3.48 3.77-3.48 6.4v3.75c0 2.63 1.3 5.02 3.47 6.4 0.46 0.3 0.53 1.04 0.53 1.45v2.22c0 0.47-0.21 0.9-0.53 1.11-2.17 1.38-3.47 3.77-3.47 6.4v3.75c0 2.63 1.3 5.02 3.47 6.4 0.32 0.21 0.53 0.64 0.53 1.11v1.28c0 3.05-2.24 5.53-5 5.53h-8.25c-2.76 0-5-2.48-5-5.53v-44.9c0-4.45 3.31-8.07 7.39-8.07h3.47m0-3.01h-3.48c-5.71 0-10.39 4.98-10.39 11.07v44.9c0 4.69 3.6 8.53 8 8.53h8.26c4.4 0 8-3.84 8-8.53v-1.28c0-1.49-0.72-2.88-1.93-3.64-1.24-0.79-2.07-2.22-2.07-3.87v-3.75c0-1.64 0.84-3.08 2.08-3.87 1.2-0.76 1.92-2.15 1.92-3.64v-2.22c0-1.83-0.72-3.22-1.93-3.98-1.23-0.78-2.07-2.22-2.07-3.86v-3.75c0-1.65 0.84-3.09 2.08-3.87 1.2-0.76 1.92-2.14 1.92-3.63v-3.27c0-6.35-4.67-11.34-10.39-11.34z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 24.333,
        cy: 31.667,
        r: 42.359,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F0504B",
        offset: 0.3237
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3473C",
        offset: 0.7149
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.8365
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m10 30 40-4c3.31 0 6 10.75 6 24s-2.69 24-6 24l-40-4c-3.31 0-6-8.95-6-20s2.69-20 6-20z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49.55 29.06c1.29 1.68 3.45 9 3.45 20.94s-2.16 19.26-3.45 20.94l-39.18-3.92c-1.21-1.1-3.37-7.07-3.37-17.02s2.16-15.92 3.36-17.02l39.19-3.92m0.45-3.06-40 4c-3.31 0-6 8.95-6 20s2.69 20 6 20l40 4c3.31 0 6-10.75 6-24s-2.69-24-6-24z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 78.167,
        cy: 19.833,
        r: 62.893,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8E8E8",
        offset: 0.5297
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.7836
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M52.88,24.29L116,5.36v89.28L52.88,75.71C48.53,75.71,45,64.2,45,50S48.53,24.29,52.88,24.29 z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 114,
        x2: 114,
        y1: 2.25,
        y2: 98.353,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113 96h1c2.21 0 4-1.79 4-4v-84c0-2.21-1.79-4-4-4h-1c-1.66 0-3 1.34-3 3v86c0 1.66 1.34 3 3 3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m114 7c0.55 0 1 0.45 1 1v84c0 0.55-0.45 1-1 1h-1v-0.16c0-1.32-0.87-2.49-2.14-2.87l-57.12-17.13c-0.25-0.07-0.5-0.12-0.76-0.12-1.46-0.74-4.98-8.37-4.98-22.72s3.52-21.98 4.98-22.72c0.26-0.01 0.51-0.05 0.76-0.12l57.12-17.13c1.27-0.38 2.14-1.55 2.14-2.87v-0.16h1m0-3h-1c-1.66 0-3 1.34-3 3v0.16l-57.12 17.13c-4.35 0-7.88 11.51-7.88 25.71s3.53 25.71 7.88 25.71l57.12 17.13v0.16c0 1.66 1.34 3 3 3h1c2.21 0 4-1.79 4-4v-84c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Loudspeaker;
