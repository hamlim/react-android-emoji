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

function Pouch(props) {
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
    _react2.default.createElement("path", {
      d:
        "m123.41 91.39c-0.88-8.62-7.4-40.78-55.87-40.78-48.49 0-54.95 32.29-55.81 40.93-0.13 1.3 0.2 7.6 0.93 8.68l12.5 15.3c0.91 2.01 2.91 3.31 5.11 3.31l29.65-0.79c5.36-0.14 10.73-0.14 16.09 0l28.84 0.78c2.21 0 4.22-1.3 5.12-3.32l12.52-15.44c0.72-1.07 1.05-7.37 0.92-8.67z",
      fill: "#FFF59D"
    }),
    _react2.default.createElement("path", {
      d:
        "m13.43 102.51c1.07 0 1.96 0.8 2.07 1.87 0.06 0.56-0.1 1.1-0.45 1.54s-0.85 0.71-1.4 0.77c-0.08 0.01-0.15 0.01-0.23 0.01-1.07 0-1.96-0.8-2.07-1.87-0.12-1.15 0.71-2.18 1.85-2.3 0.08-0.02 0.16-0.02 0.23-0.02m0-3c-0.18 0-0.37 0.01-0.55 0.03-2.8 0.3-4.82 2.81-4.51 5.61 0.28 2.61 2.49 4.54 5.06 4.54 0.18 0 0.37-0.01 0.55-0.03 2.8-0.3 4.82-2.81 4.51-5.61-0.28-2.61-2.49-4.54-5.06-4.54z",
      fill: "#00ACC1"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 67.734,
        cy: 86.904,
        r: 54.094,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0.1721
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0.6868
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.41 96.56c-0.88-8.62-2.4-38.78-50.87-38.78-48.49 0-49.95 30.29-50.81 38.93-0.13 1.3-4.8 2.6-4.07 3.68l12.5 20.3c0.91 2.01 2.91 3.31 5.11 3.31l29.65-0.79c5.36-0.14 10.73-0.14 16.09 0l28.84 0.78c2.21 0 4.22-1.3 5.12-3.32l12.52-20.44c0.72-1.07-3.95-2.37-4.08-3.67z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m-91.91 54.81c-9.74-1.22-22.91-0.05-30.7 6.84-4.49 3.97-6.11 11.66-2.12 16.59 3.05 3.77 7.54 4.07 12.24 2.56 8.31-2.67 17.25-11.06 19.89-16.17 0.72-1.4 0.28-2.72-0.61-3.58-1.1-0.26-2.35-0.43-3.68-0.5-0.34 0.24-0.65 0.58-0.89 1.05-2.09 4.05-3.88 5.48-7.63 7.92-2.54 1.65-8.91 5.2-11.3 1.62-0.78-1.17-0.97-2.26-0.72-3.27 1.18-4.8 12.47-7.75 20.55-7.32 1.14-0.81 2.69-0.46 3.68 0.5 0.37 0.09 0.72 0.18 1.05 0.29 3.66 1.22 0.24-6.53 0.24-6.53z",
      fill: "#BA68C8"
    }),
    _react2.default.createElement("path", {
      d:
        "m-97.78 61.61c-2.09 4.05-3.88 5.48-7.63 7.92-2.54 1.65-8.91 5.2-11.3 1.62-0.78-1.17-0.97-2.26-0.72-3.27-2.72 4.77-0.03 10.93 4.95 12.92 8.31-2.67 17.25-11.06 19.89-16.17 0.72-1.4 0.28-2.72-0.61-3.58-1.1-0.26-2.35-0.43-3.68-0.5-0.35 0.25-0.65 0.59-0.9 1.06z",
      fill: "#AB47BC"
    }),
    _react2.default.createElement("path", {
      d:
        "m-96.88 60.56c1.34 0.07 2.58 0.24 3.68 0.5-0.99-0.96-2.54-1.32-3.68-0.5z",
      fill: "#BA68C8"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: -61.377,
        cy: 59.309,
        r: 54.61,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DCE775",
        offset: 0.2793
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CDDC39",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-7.06 112.31-1.8-17.07c-2.82-26.75-17.24-47.04-43.46-47.11l-19.55-0.01c-26.4-0.07-38.4 20.37-41.14 47.31l-1.72 16.92c-0.63 6.23 4.13 11.65 10.23 11.65h87.2c6.13 0 10.9-5.45 10.24-11.69z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m-17.29 124h-87.2c-6.1 0-10.86-5.42-10.23-11.65l1.72-16.92c2.73-26.94 14.74-47.38 41.14-47.31h19.55c26.22 0.07 40.64 20.37 43.46 47.11l1.8 17.07c0.65 6.25-4.12 11.7-10.24 11.7z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: -60.919,
        x2: -60.919,
        y1: 65.914,
        y2: 87.879,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C0CA33",
        stopOpacity: 0,
        offset: 0.2793
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AFB42B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-115.92 67.04v11.41c1.06 1.14 2.39 2.05 3.92 2.56-1.53-0.51-2.86-1.41-3.92-2.56v5.72h110v-17.13h-110z",
      clipPath: "url(#b)",
      fill: "url(#e)"
    }),
    _react2.default.createElement("rect", {
      x: -115.92,
      y: 83.53,
      width: 110,
      height: 3.13,
      clipPath: "url(#b)",
      fill: "#DCE775"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-72 51.12h0.14 19.54c11.64 0.03 21.14 4.24 28.24 12.51 6.63 7.72 10.86 18.75 12.25 31.92l1.8 17.07c0.23 2.19-0.47 4.37-1.92 5.98-1.39 1.55-3.28 2.4-5.33 2.4h-87.2c-2.04 0-3.92-0.85-5.32-2.39-1.45-1.6-2.15-3.77-1.93-5.96l1.72-16.92c2.06-20.35 10.33-44.61 38.01-44.61m0-3c-26.3 0-38.27 20.42-41 47.31l-1.72 16.92c-0.63 6.23 4.13 11.65 10.23 11.65h87.2c6.12 0 10.88-5.45 10.23-11.69l-1.8-17.07c-2.82-26.75-17.24-47.04-43.46-47.11h-19.55c-0.04-0.01-0.09-0.01-0.13-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m10.2 123.74-1.93-0.38c-1.84-0.36-2.98-2.23-2.47-4.03l3.29-11.55c0.46-1.61 2.07-2.6 3.72-2.27 1.64 0.32 2.76 1.85 2.57 3.52l-1.36 11.93c-0.21 1.86-1.97 3.15-3.82 2.78z",
      fill: "#81D4FA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m12.18 107.44c0.08 0 0.16 0.01 0.24 0.02 0.62 0.12 1.04 0.71 0.97 1.33l-1.36 11.93c-0.07 0.61-0.59 1.08-1.2 1.08-0.08 0-0.16-0.01-0.24-0.02l-1.93-0.38c-0.45-0.09-0.7-0.39-0.8-0.56s-0.26-0.52-0.13-0.97l3.29-11.55c0.14-0.52 0.62-0.88 1.16-0.88m0-2c-1.41 0-2.69 0.93-3.09 2.34l-3.29 11.55c-0.51 1.81 0.62 3.67 2.47 4.03l1.93 0.38c0.21 0.04 0.42 0.06 0.63 0.06 1.6 0 3-1.2 3.19-2.85l1.36-11.93c0.19-1.66-0.93-3.19-2.57-3.52-0.21-0.04-0.42-0.06-0.63-0.06z",
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
          "m67.53 53.62c45.48 0 51.98 29.15 52.89 38.03 0.06 1.03-0.21 5.89-0.58 7.17l-12.44 20.3c-0.07 0.11-0.13 0.23-0.18 0.34-0.41 0.93-1.33 1.53-2.35 1.54l-28.79-0.78c-2.72-0.07-5.49-0.11-8.21-0.11-2.67 0-5.37 0.04-8.04 0.11l-29.6 0.78c-1.01-0.01-1.93-0.61-2.35-1.54-0.05-0.12-0.11-0.23-0.18-0.34l-12.4-20.16c-0.37-1.27-0.64-6.13-0.59-7.12 0.89-8.97 7.34-38.22 52.82-38.22m0-3c-48.49 0-54.95 32.29-55.81 40.93-0.09 0.87 0.2 7.76 0.93 8.85l12.5 20.3c0.91 2.01 2.91 3.31 5.11 3.31l29.65-0.79c2.65-0.07 5.3-0.11 7.96-0.11 2.71 0 5.42 0.04 8.13 0.11l28.84 0.78c2.21 0 4.22-1.3 5.12-3.32l12.52-20.44c0.73-1.09 1.01-7.97 0.92-8.85-0.87-8.62-7.39-40.77-55.87-40.77z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m118.41 96.56c-0.88-8.62-2.4-38.78-50.87-38.78-48.49 0-49.95 30.29-50.81 38.93-0.13 1.3-4.8 2.6-4.07 3.68l12.5 20.3c0.91 2.01 2.91 3.31 5.11 3.31l29.65-0.79c5.36-0.14 10.73-0.14 16.09 0l28.84 0.78c2.21 0 4.22-1.3 5.12-3.32l12.52-20.44c0.72-1.07-3.95-2.37-4.08-3.67z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 20.557,
        x2: 20.557,
        y1: 70.333,
        y2: 123.94,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        stopOpacity: 0,
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6F00",
        stopOpacity: 0.4,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28 125s-19-12.13-19-27.08 12.92-27.08 12.92-27.08l1.46 2.34c9.71 15.55 11.43 34.8 4.62 51.82z",
      clipPath: "url(#a)",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 40.337,
        x2: 40.337,
        y1: 70.333,
        y2: 123.94,
        gradientTransform: "matrix(-1 0 0 1 154.45 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        stopOpacity: 0,
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6F00",
        stopOpacity: 0.4,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m106.67 125s19-12.13 19-27.08-12.92-27.08-12.92-27.08l-1.46 2.34c-9.72 15.55-11.43 34.8-4.62 51.82z",
      clipPath: "url(#a)",
      fill: "url(#i)"
    })
  );
}

exports.default = Pouch;
