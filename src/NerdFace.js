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

function NerdFace(props) {
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
      "symbol",
      {
        viewBox: "-64.5 -64.5 129 129"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "none",
          stroke: "#4285F4",
          strokeMiterlimit: 10
        },
        _react2.default.createElement("rect", {
          x: -64,
          y: -64,
          width: 128,
          height: 128
        }),
        _react2.default.createElement("path", {
          d:
            "M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z"
        }),
        _react2.default.createElement("path", {
          d:
            "m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z"
        }),
        _react2.default.createElement("path", {
          d:
            "M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z"
        }),
        _react2.default.createElement("line", {
          x1: -0.01,
          x2: -0.01,
          y1: 51,
          y2: -51
        }),
        _react2.default.createElement("line", {
          x1: -16,
          x2: -16,
          y1: 48.95,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 15.99,
          x2: 15.99,
          y1: 48.91,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 53,
          x2: -53,
          y1: 0.08,
          y2: 0.08
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 63.742,
        x2: 63.742,
        y1: 18.823,
        y2: 106.85,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEE133",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEDE32",
        offset: 0.6118
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD32F",
        offset: 0.7076
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC12B",
        offset: 0.7975
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7A924",
        offset: 0.8834
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A323",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.74 119.04c-27.95 0-58.02-17.5-58.02-55.92s30.08-55.91 58.02-55.91c15.49 0 29.83 5.13 40.38 14.44 11.55 10.19 17.65 24.53 17.65 41.48 0 16.87-6.1 31.19-17.65 41.41-10.58 9.35-24.92 14.5-40.38 14.5z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.74 9.21c15 0 28.87 4.95 39.05 13.94 11.1 9.8 16.97 23.62 16.97 39.98 0 16.28-5.87 30.08-16.98 39.91-10.21 9.03-24.08 14.01-39.05 14.01-15.04 0-28.92-4.91-39.06-13.83-11.09-9.76-16.95-23.62-16.95-40.1 0-16.55 5.87-30.44 16.96-40.17 10.12-8.86 23.99-13.74 39.06-13.74m0-4c-31.16 0-60.02 20.01-60.02 57.92 0 37.7 28.86 57.92 60.02 57.92s60.02-20.73 60.02-57.92c0.01-37.39-28.85-57.92-60.02-57.92z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m89.43 43.11c3.89 0 7.42 3.29 7.42 8.73s-3.53 8.73-7.42 8.73-7.42-3.29-7.42-8.73 3.54-8.73 7.42-8.73z"
      }),
      _react2.default.createElement("path", {
        d:
          "m38.57 43.11c-3.89 0-7.42 3.29-7.42 8.73s3.53 8.73 7.42 8.73 7.42-3.29 7.42-8.73-3.54-8.73-7.42-8.73z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "g",
        d:
          "m63.99 69.45c-15.71 0-30.31-1.32-42.49-3.57-3.02-0.56-5.69 2.1-5.08 5.11 4.04 19.81 23.55 36.08 47.55 36.08 26.27 0 43.94-16.8 47.61-36.15 0.57-2.99-2.1-5.6-5.09-5.04-12.17 2.25-26.78 3.57-42.5 3.57z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.99 69.45c-15.71 0-30.31-1.32-42.49-3.57-3.02-0.56-5.69 2.1-5.08 5.11 4.04 19.81 23.55 36.08 47.55 36.08 26.27 0 43.94-16.8 47.61-36.15 0.57-2.99-2.1-5.6-5.09-5.04-12.17 2.25-26.78 3.57-42.5 3.57z",
      clipPath: "url(#a)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "M117.24,68.3V53.41H10.76V68.3C27.14,77.92,45.12,83.27,64,83.27 S100.86,77.92,117.24,68.3z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "M64,93.33c-11.78,0-22.05,6.42-27.53,15.95 c7.12,3.89,16.83,6.29,27.53,6.29s20.41-2.4,27.53-6.29C86.05,99.75,75.78,93.33,64,93.33z",
      clipPath: "url(#a)",
      fill: "#ED7770"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "f",
          d:
            "m10.76 53.41v14.89c16.38 9.62 34.36 14.97 53.24 14.97s36.86-5.35 53.24-14.97v-14.89h-106.48zm53.24 39.92c-11.78 0-22.05 6.42-27.53 15.95 7.12 3.89 16.83 6.29 27.53 6.29 10.71 0 20.41-2.4 27.53-6.29-5.48-9.53-15.75-15.95-27.53-15.95z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "e"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#f"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#e)"
        },
        _react2.default.createElement("path", {
          d:
            "m107.31 70.01c0.07 0 0.14 0.07 0.14 0.12-1.68 8.85-6.6 16.96-13.85 22.84-7.97 6.46-18.21 9.88-29.63 9.88-10.46 0-20.64-3.45-28.67-9.72-7.72-6.03-12.96-14.19-14.76-23.02 0.01-0.02 0.07-0.1 0.18-0.1h0.01c12.86 2.38 27.82 3.64 43.26 3.64s30.41-1.26 43.28-3.65c0.01 0.01 0.03 0.01 0.04 0.01m0-4.21c-0.27 0-0.54 0.02-0.81 0.08-12.18 2.26-26.79 3.58-42.51 3.58-15.71 0-30.31-1.32-42.49-3.57-0.27-0.05-0.54-0.07-0.81-0.08-2.67 0-4.83 2.44-4.27 5.18 4.04 19.81 23.55 36.08 47.55 36.08 26.27 0 43.94-16.8 47.61-36.15 0.52-2.73-1.63-5.12-4.27-5.12z",
          fill: "#EB8F00"
        })
      )
    ),
    _react2.default.createElement("path", {
      d: "m52.62 53.25",
      fill: "none",
      stroke: "#fff",
      strokeMiterlimit: 10,
      strokeWidth: 0.9183
    }),
    _react2.default.createElement("path", {
      d: "m22.38 53.25",
      fill: "none",
      stroke: "#fff",
      strokeMiterlimit: 10,
      strokeWidth: 0.9183
    }),
    _react2.default.createElement("path", {
      d:
        "m75.17 37.53c-0.47-0.45-1.13-0.54-1.68-0.24-0.02 0.01-1.83 0.95-4.13 0.8l-0.28-0.02c-1.91-0.12-3.72-0.24-5.72-0.24h-0.09c-1.15 0.01-3.61 0.15-5.39 0.26-2.23 0.14-3.79-0.76-3.79-0.76-0.56-0.34-1.25-0.27-1.74 0.18s-0.68 1.19-0.47 1.86l2.99 9.81c0.19 0.63 0.69 1.08 1.28 1.15 0.6 0.08 1.17-0.23 1.49-0.79 0.02-0.03 1.87-3.23 6.21-3.28 4.29 0.05 6.15 3.16 6.22 3.28 0.28 0.51 0.78 0.81 1.31 0.81 0.06 0 0.13 0 0.19-0.01 0.6-0.08 1.1-0.55 1.28-1.18l2.79-9.81c0.18-0.66-0.01-1.38-0.47-1.82z"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.06 38.4s-7.99-9.3-36.65-6.63c-19.13 1.78-20.16 3.56-20.16 3.56l-0.12 7.22s2.85 0.81 4.7 3.1c1.84 2.26 2.7 14.92 5.69 20.87 4.63 9.24 27.65 6.9 27.65 6.9s9.39 0.74 13.97-7.17c4.58-7.89 5.98-19.29 5.98-19.29l-1.06-8.56zm-6.71 16.85c-1.82 8.44-4.11 14.19-19.72 13.3-10.05-0.57-17.04-0.55-18.65-15.21-0.99-9.11 0.11-12.55 0.86-13.65 0.74-1.09 3.43-4.25 18.98-3.7s17.78 4.04 18.69 5.62c0.93 1.57 1.67 5.21-0.16 13.64z"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.88 46.96s1.4 11.4 5.98 19.29c4.58 7.9 13.97 7.17 13.97 7.17s23.02 2.34 27.65-6.9c2.99-5.96 3.85-18.61 5.69-20.87 1.84-2.29 4.69-3.1 4.69-3.1l-0.12-7.22s-1.03-1.78-20.16-3.56c-28.65-2.67-36.64 6.63-36.64 6.63l-1.06 8.56zm7.6-5.35c0.91-1.58 3.14-5.08 18.69-5.62 15.56-0.55 18.24 2.61 18.98 3.7 0.75 1.1 1.85 4.54 0.86 13.65-1.6 14.66-8.59 14.64-18.64 15.21-15.61 0.89-17.9-4.86-19.72-13.3-1.83-8.43-1.09-12.07-0.17-13.64z"
    }),
    _react2.default.createElement("path", {
      d:
        "m51.32 42.58c0.89 1.52 1.61 5.06-0.17 13.23-1.77 8.18-3.99 13.76-19.13 12.9-9.74-0.55-16.52-0.53-18.08-14.75-0.96-8.83 0.11-12.17 0.84-13.24 0.72-1.06 3.32-4.12 18.41-3.59 15.09 0.52 17.25 3.91 18.13 5.45z",
      fill: "none"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 10.672,
        x2: 10.672,
        y1: 35.665,
        y2: 35.582,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m10.83 35.59c-0.11 0-0.22 0.03-0.32 0.07 0.1-0.05 0.21-0.07 0.32-0.07z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 10.296,
        x2: 10.296,
        y1: 35.92,
        y2: 35.673,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m10.15 35.88c0.09-0.09 0.18-0.15 0.29-0.2-0.1 0.05-0.2 0.11-0.29 0.2z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 229.46,
        x2: 229.46,
        y1: 35.665,
        y2: 35.582,
        gradientTransform: "matrix(-1 0 0 1 347.12 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m117.5 35.59c0.11 0 0.22 0.03 0.32 0.07-0.1-0.05-0.2-0.07-0.32-0.07z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 229.08,
        x2: 229.08,
        y1: 35.92,
        y2: 35.673,
        gradientTransform: "matrix(-1 0 0 1 347.12 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.19 35.88c-0.09-0.09-0.18-0.15-0.29-0.2 0.1 0.05 0.2 0.11 0.29 0.2z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("path", {
        d:
          "m7.56 40.25h-1.75c-0.85 0-1.54-0.69-1.54-1.54s0.69-1.54 1.54-1.54h1.75c0.85 0 1.54 0.69 1.54 1.54s-0.69 1.54-1.54 1.54z"
      }),
      _react2.default.createElement("path", {
        d:
          "m122.19 40.25h-1.75c-0.85 0-1.54-0.69-1.54-1.54s0.69-1.54 1.54-1.54h1.75c0.85 0 1.54 0.69 1.54 1.54s-0.69 1.54-1.54 1.54z"
      })
    )
  );
}

exports.default = NerdFace;