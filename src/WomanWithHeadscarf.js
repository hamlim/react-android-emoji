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

function WomanWithHeadscarf(props) {
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
          y1: 86.537,
          y2: 117.09,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#616161",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#545454",
          offset: 0.2749
        }),
        _react2.default.createElement("stop", {
          stopColor: "#323232",
          offset: 0.7823
        }),
        _react2.default.createElement("stop", {
          stopColor: "#212121",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m14.04 126.5v-6.61c0-7.67 5.11-13.74 15.2-18.04 8.89-3.79 21.23-5.89 34.76-5.9h0.13c24.76 0 49.83 8.22 49.83 23.94v6.61h-99.92z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.13 97.45c12.86 0 25.3 2.24 34.12 6.14 6.49 2.87 14.22 8.03 14.22 16.3v5.11h-96.93v-5.11c0-15.46 24.34-22.41 48.47-22.44h0.12m0-3h-0.13c-25.65 0.03-51.46 7.55-51.46 25.44v8.11h102.93v-8.11c-0.01-16.87-25.57-25.44-51.34-25.44z",
        fill: "#0D0C0C"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m63.17 107.23c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.96-3.26 7.17-7.26 7.17h-1.64z",
        fill: "#E49800"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.08 92.08v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#C78500"
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
          id: "d",
          x1: 63.818,
          x2: 63.818,
          y1: 92.086,
          y2: 16.246,
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
          "m63.82 92.64c-2.24 0-4.8-0.49-7.4-1.4-11.18-3.96-24.23-16.13-24.23-37.41 0-28.35 17.04-38.41 31.63-38.41s31.63 10.06 31.63 38.41c0 21.32-13.08 33.49-24.28 37.43-2.58 0.9-5.12 1.38-7.35 1.38z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.82 16.91c13.9 0 30.13 9.67 30.13 36.91 0 20.53-12.54 32.23-23.28 36.01-2.42 0.85-4.79 1.3-6.85 1.3-2.07 0-4.46-0.46-6.9-1.32-10.72-3.79-23.23-15.5-23.23-36 0-27.23 16.23-36.9 30.13-36.9m0-3c-17.2 0-33.13 12.79-33.13 39.91 0 21.79 13.49 34.67 25.23 38.83 2.8 0.99 5.5 1.49 7.9 1.49 2.38 0 5.07-0.49 7.85-1.47 11.76-4.14 25.28-17.03 25.28-38.84 0-27.13-15.93-39.92-33.13-39.92z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#1A1717"
        },
        _react2.default.createElement("ellipse", {
          cx: 47.72,
          cy: 58.87,
          rx: 4.87,
          ry: 5.04
        }),
        _react2.default.createElement("ellipse", {
          cx: 80.58,
          cy: 58.87,
          rx: 4.87,
          ry: 5.04
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m67.96 68.05c-0.1-0.04-0.21-0.07-0.32-0.08h-6.99c-0.11 0.01-0.21 0.04-0.32 0.08-0.63 0.26-0.98 0.91-0.68 1.61s1.69 2.66 4.49 2.66 4.19-1.96 4.49-2.66c0.31-0.69-0.04-1.35-0.67-1.61z",
        fill: "#33251F"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.78 49.82c-0.93-1.23-3.07-3.01-7.23-3.01s-6.31 1.79-7.23 3.01c-0.41 0.54-0.31 1.17-0.02 1.55 0.26 0.35 1.04 0.68 1.9 0.39s2.54-1.16 5.35-1.18c2.81 0.02 4.49 0.89 5.35 1.18s1.64-0.03 1.9-0.39c0.29-0.38 0.39-1.01-0.02-1.55z",
        fill: "#1A1717"
      }),
      _react2.default.createElement("path", {
        d:
          "m87.92 49.82c-0.93-1.23-3.07-3.01-7.23-3.01s-6.31 1.79-7.23 3.01c-0.41 0.54-0.31 1.17-0.02 1.55 0.26 0.35 1.04 0.68 1.9 0.39s2.54-1.16 5.35-1.18c2.81 0.02 4.49 0.89 5.35 1.18s1.64-0.03 1.9-0.39c0.28-0.38 0.39-1.01-0.02-1.55z",
        fill: "#1A1717"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m30.41 88.85-1.5-51.44c0-16.95 15.78-29.85 32.73-29.85h4.93c16.95 0 32.54 12.9 32.54 29.85l-1.5 51.18-67.2 0.26z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#c"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m72.05 76.14c-3.15 1.87-13.46 1.87-16.61 0-1.81-1.07-3.65 0.57-2.9 2.21 0.74 1.61 6.37 5.36 11.23 5.36 4.87 0 10.42-3.75 11.16-5.36 0.75-1.64-1.07-3.29-2.88-2.21z",
        fill: "#1A1717"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.11 35.39h-63.99v33.53l4.78-6.16c7.18-9.25 16.48-16.65 27.11-21.57 10.65 5.08 19.99 12.52 27.34 21.75l4.75 5.98v-33.53z",
      clipPath: "url(#a)",
      fill: "#424242",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64.371,
        x2: 64.371,
        y1: 118.53,
        y2: 21.398,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#792D96",
        offset: 0.0174
      }),
      _react2.default.createElement("stop", {
        stopColor: "#842AA6",
        offset: 0.533
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8A29B0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.22 47.51c-1.86-23.96-13.16-43.5-41.19-43.51-28.04 0.01-41.03 19.68-41.03 43.17 0 21.99 4.06 37.42 10.97 47.5-6.38 2.8-10.22 8.34-9.47 13.84 1.75 12.84 16.15 19.49 39.5 19.49 48.07 0 41.67-74.73 41.22-80.49zm-41.19-10.82s25.76 12.63 29.89 31.25c0 0-8.89 24.4-29.89 24.4s-29.89-24.4-29.89-24.4c3.55-18.74 29.89-31.25 29.89-31.25z",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m32.85 98.13s0.47 12.25 14.16 18.94c17.53 8.57 33.59 0.78 40.69-7.18 9.93-11.14 9.35-30.83 9.35-30.83s-1.34 19.51-15.75 29.63c-10.11 7.1-22.17 8.03-32.99 3.75-13.49-5.33-15.46-14.31-15.46-14.31z",
      clipPath: "url(#a)",
      fill: "#541E69"
    }),
    _react2.default.createElement("path", {
      d:
        "m47.33 99.33c-12.27-4.07-20.67-26-20.67-26s4.4 31.49 28.87 35.67c30.66 5.24 44.93-26.73 47.47-38.67 6.67-31.33-8.33-51.67-8.33-51.67s13.46 28.62 3.18 53.63c-5.84 14.22-18.12 37.79-50.52 27.04z",
      clipPath: "url(#a)",
      fill: "#48145C"
    }),
    _react2.default.createElement("path", {
      d:
        "m65.59 16.43s-14.25-4.43-27.25 9.57c-12.47 13.43-8.58 39.09-8.58 39.09s-0.14-21.42 14.58-35.42c12.87-12.25 21.25-13.24 21.25-13.24z",
      clipPath: "url(#a)",
      fill: "#A23DC9"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m88.23 38.05c9.86 13.59 9.05 31.86 9.05 31.86s5.17-20.84-4.83-34.76c-7.88-10.97-20.64-11.41-20.64-11.41s7.15 1.53 16.42 14.31z",
        fill: "#541E69"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m43.83 87.6c16.09 12.82 34.91 6.88 34.91 6.88s-20.9 11.66-38.14-3.77c-10.08-9.02-10.45-24.07-10.45-24.07s3.88 13.14 13.68 20.96z",
        fill: "#541E69"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m64.03 7c28.96 0.01 36.76 22.16 38.21 40.74l0.02 0.21c0.75 9.56 0.65 19.39-0.3 28.43-1.84 17.5-6.6 30.53-14.17 38.71-6.09 6.58-14.09 9.91-23.79 9.91-12.78 0-34.52-2.2-36.53-16.91-0.56-4.12 2.53-8.41 7.7-10.68 0.82-0.36 1.43-1.06 1.68-1.92s0.09-1.78-0.41-2.52c-6.93-10.11-10.44-25.52-10.44-45.8 0-11.54 3.21-21.37 9.28-28.43 6.69-7.79 16.36-11.74 28.75-11.74m0-3c-28.04 0.01-41.03 19.68-41.03 43.17 0 21.99 4.06 37.42 10.97 47.5-6.38 2.8-10.22 8.34-9.47 13.84 1.75 12.84 16.15 19.49 39.5 19.49 48.07 0 41.67-74.73 41.22-80.49-1.86-23.96-13.16-43.5-41.19-43.51z",
        fill: "#3F174F"
      })
    )
  );
}

exports.default = WomanWithHeadscarf;