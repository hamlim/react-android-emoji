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

function FaceWithThermometer(props) {
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
        id: "e",
        x1: 63.996,
        x2: 63.996,
        y1: 19.838,
        y2: 107.58,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E04C74",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EA7C60",
        offset: 0.2218
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3A550",
        offset: 0.441
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8BE46",
        offset: 0.6137
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC742",
        offset: 0.7183
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 119.74c-27.86 0-57.84-17.44-57.84-55.74s29.98-55.74 57.84-55.74c15.44 0 29.73 5.11 40.25 14.39 11.51 10.16 17.59 24.46 17.59 41.35 0 16.82-6.08 31.09-17.59 41.27-10.55 9.33-24.84 14.47-40.25 14.47z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.26c14.95 0 28.77 4.93 38.92 13.89 11.07 9.77 16.92 23.55 16.92 39.85 0 16.23-5.85 29.98-16.92 39.78-10.18 9.01-24 13.96-38.92 13.96-15 0-28.82-4.89-38.93-13.78-11.07-9.73-16.91-23.54-16.91-39.96 0-16.49 5.85-30.34 16.91-40.03 10.07-8.84 23.9-13.71 38.93-13.71m0-4c-31.07 0-59.84 19.95-59.84 57.74 0 37.58 28.77 57.74 59.84 57.74s59.84-20.67 59.84-57.74c0-37.27-28.78-57.74-59.84-57.74z",
      fill: "#CC2362"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 36.25,
        cy: 70.562,
        r: 21.667,
        gradientTransform: "matrix(1 0 0 .7307 0 20.935)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0,
        offset: 0.9
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 36.25,
      cy: 72.5,
      rx: 19.92,
      ry: 15.27,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 91.75,
        cy: 70.562,
        r: 21.667,
        gradientTransform: "matrix(1 0 0 .7307 0 20.935)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0,
        offset: 0.9
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 91.75,
      cy: 72.5,
      rx: 19.92,
      ry: 15.27,
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m30.64 91.24c9.33-5.42 20.87-8.63 33.35-8.63 12.49 0 24.02 3.21 33.35 8.63 1.71 1 3.52-1.15 2.23-2.66-8.44-9.88-21.24-16.18-35.57-16.18-14.34 0-27.14 6.3-35.59 16.18-1.29 1.51 0.52 3.65 2.23 2.66z",
      fill: "#242424"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#6D4C41",
        stroke: "#6D4C41",
        strokeMiterlimit: 10
      },
      _react2.default.createElement("path", {
        d:
          "m45.43 35.04c0.35-1.12 1.35-1.86 2.53-1.88 3.27-0.14 6.51-1.74 8.65-4.29 0.86-1.07 2.29-1.37 3.44-0.75 1.1 0.59 1.59 1.8 1.2 3.01-0.05 0.15-0.11 0.31-0.2 0.48-0.71 1.3-1.62 2.44-2.73 3.42-2.94 2.64-6.97 3.89-10.77 3.33-0.84-0.14-1.51-0.57-1.9-1.21-0.36-0.62-0.45-1.39-0.22-2.11z"
      }),
      _react2.default.createElement("path", {
        d:
          "m82.58 35.04c-0.35-1.12-1.35-1.86-2.53-1.88-3.27-0.14-6.51-1.74-8.65-4.29-0.86-1.07-2.29-1.37-3.44-0.75-1.1 0.59-1.59 1.8-1.2 3.01 0.05 0.15 0.11 0.31 0.2 0.48 0.71 1.3 1.62 2.44 2.73 3.42 2.94 2.64 6.97 3.89 10.77 3.33 0.84-0.14 1.51-0.57 1.9-1.21 0.36-0.62 0.45-1.39 0.22-2.11z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m30.64 91.24c9.33-5.42 20.87-8.63 33.35-8.63 12.49 0 24.02 3.21 33.35 8.63 1.71 1 1.3-0.91 2.23-2.66 8.26-15.39 28.43-23.91 28.43-45.58 0-12.65-53.41-10.63-62.56-10.63-14.34 0-28.58 46.33-37.03 56.21-1.29 1.51 0.52 3.65 2.23 2.66z"
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m78.7 93.86c-1.7 0-3.3-0.66-4.5-1.86s-1.86-2.79-1.86-4.5 0.66-3.3 1.86-4.5l40.11-40.11c1.2-1.2 2.79-1.86 4.5-1.86s3.3 0.66 4.5 1.86 1.86 2.8 1.86 4.5-0.66 3.3-1.86 4.5l-40.12 40.11c-1.19 1.2-2.79 1.86-4.49 1.86z",
        fill: "#E6E6E6"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.8 42.54c1.25 0 2.49 0.47 3.44 1.42 1.89 1.89 1.89 4.98 0 6.88l-40.11 40.1c-0.95 0.95-2.19 1.42-3.44 1.42s-2.49-0.47-3.44-1.42c-1.89-1.89-1.89-4.98 0-6.88l40.11-40.11c0.95-0.94 2.2-1.41 3.44-1.41m0-3c-2.1 0-4.08 0.82-5.56 2.3l-40.1 40.1c-3.07 3.07-3.07 8.05 0 11.12 1.48 1.48 3.46 2.3 5.56 2.3s4.08-0.82 5.56-2.3l40.11-40.11c1.48-1.48 2.3-3.46 2.3-5.56s-0.82-4.08-2.3-5.56c-1.49-1.47-3.46-2.29-5.57-2.29z",
        fill: "#404040"
      }),
      _react2.default.createElement("line", {
        x1: 115.94,
        x2: 119.25,
        y1: 50.55,
        y2: 53.86,
        fill: "none",
        stroke: "#404040",
        strokeMiterlimit: 10,
        strokeWidth: 1.7435
      }),
      _react2.default.createElement("path", {
        d:
          "m75.26 90.94c-1.89-1.89-1.89-4.98 0-6.88l28.97-28.97 6.83 6.92-28.93 28.93c-1.89 1.89-4.98 1.89-6.87 0z",
        fill: "#ED1C24"
      }),
      _react2.default.createElement("line", {
        x1: 112.11,
        x2: 114.1,
        y1: 57.03,
        y2: 59.02,
        fill: "none",
        stroke: "#404040",
        strokeMiterlimit: 10,
        strokeWidth: 1.7435
      }),
      _react2.default.createElement("line", {
        x1: 102.37,
        x2: 104.36,
        y1: 66.77,
        y2: 68.76,
        fill: "none",
        stroke: "#404040",
        strokeMiterlimit: 10,
        strokeWidth: 1.7435
      }),
      _react2.default.createElement("line", {
        x1: 92.63,
        x2: 94.62,
        y1: 76.51,
        y2: 78.5,
        fill: "none",
        stroke: "#404040",
        strokeMiterlimit: 10,
        strokeWidth: 1.7435
      }),
      _react2.default.createElement("line", {
        x1: 106.2,
        x2: 109.51,
        y1: 60.29,
        y2: 63.6,
        fill: "none",
        stroke: "#404040",
        strokeMiterlimit: 10,
        strokeWidth: 1.7435
      }),
      _react2.default.createElement("line", {
        x1: 96.46,
        x2: 99.77,
        y1: 70.03,
        y2: 73.34,
        fill: "none",
        stroke: "#404040",
        strokeMiterlimit: 10,
        strokeWidth: 1.7435
      }),
      _react2.default.createElement("line", {
        x1: 86.72,
        x2: 90.03,
        y1: 79.77,
        y2: 83.08,
        fill: "none",
        stroke: "#404040",
        strokeMiterlimit: 10,
        strokeWidth: 1.7435
      }),
      _react2.default.createElement("path", {
        d:
          "m75.26 90.94c-1.89-1.89-1.89-4.98 0-6.88l40.11-40.11c1.89-1.89 4.98-1.89 6.88 0 1.89 1.89 1.89 4.98 0 6.88l-40.12 40.11c-1.89 1.89-4.98 1.89-6.87 0z",
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m52.11 49.03-0.2 0.2c-0.11 0.11-0.36 0.39-0.51 0.5-0.19 0.16-0.42 0.35-0.69 0.57-0.29 0.22-0.62 0.46-0.98 0.71-0.37 0.23-0.77 0.47-1.2 0.68-0.42 0.23-0.9 0.39-1.37 0.57-0.48 0.17-0.99 0.26-1.5 0.37-0.51 0.08-1.04 0.12-1.57 0.12h0.14-0.01-0.02-0.04-0.08-0.16l-0.31-0.01c-0.26 0-0.3-0.02-0.4-0.03-0.16 0-0.45-0.05-0.7-0.09-0.51-0.11-1.02-0.2-1.5-0.37-0.47-0.18-0.95-0.34-1.38-0.57-0.43-0.22-0.83-0.45-1.2-0.68-0.72-0.48-1.31-0.96-1.7-1.32-0.4-0.36-0.63-0.58-0.63-0.58l-0.25-0.25c-1.21-1.17-3.25-1.24-4.57-0.17-1.04 0.85-1.3 2.16-0.78 3.25l0.15 0.3c0.1 0.19 0.22 0.49 0.44 0.84 0.41 0.71 1.09 1.71 2.17 2.76 0.54 0.52 1.17 1.07 1.91 1.57 0.73 0.52 1.58 0.99 2.52 1.4 0.94 0.4 1.96 0.75 3.04 0.97 0.55 0.1 1.06 0.2 1.73 0.26 0.31 0.03 0.68 0.06 0.84 0.07l0.77 0.03c1.13-0.02 2.25-0.14 3.34-0.35 1.08-0.22 2.1-0.57 3.04-0.97 0.93-0.41 1.79-0.88 2.52-1.4 0.75-0.5 1.37-1.04 1.92-1.57 0.54-0.52 0.97-1.04 1.33-1.51 0.17-0.24 0.33-0.46 0.48-0.67 0.14-0.23 0.28-0.44 0.4-0.63 0.27-0.42 0.29-0.58 0.39-0.77 0.07-0.16 0.11-0.25 0.11-0.25 0.67-1.49-0.14-3.18-1.81-3.78-1.32-0.46-2.79-0.1-3.68 0.8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m92.01 49.03-0.2 0.2c-0.11 0.11-0.36 0.39-0.51 0.5-0.19 0.16-0.42 0.35-0.69 0.57-0.29 0.22-0.62 0.46-0.98 0.71-0.37 0.23-0.77 0.47-1.2 0.68-0.42 0.23-0.9 0.39-1.38 0.57-0.48 0.17-0.99 0.26-1.5 0.37-0.51 0.08-1.04 0.12-1.57 0.12h0.14-0.01-0.02-0.04-0.08-0.16l-0.31-0.01c-0.26 0-0.3-0.02-0.4-0.03-0.16 0-0.45-0.05-0.7-0.09-0.51-0.11-1.02-0.2-1.5-0.37-0.47-0.18-0.95-0.34-1.37-0.57-0.43-0.22-0.83-0.45-1.2-0.68-0.72-0.48-1.31-0.96-1.7-1.32-0.4-0.36-0.63-0.58-0.63-0.58l-0.25-0.25c-1.21-1.17-3.25-1.24-4.57-0.17-1.04 0.85-1.3 2.16-0.78 3.25l0.15 0.3c0.1 0.19 0.22 0.49 0.44 0.84 0.41 0.71 1.09 1.71 2.17 2.76 0.54 0.52 1.17 1.07 1.92 1.57 0.73 0.52 1.58 0.99 2.52 1.4 0.94 0.4 1.96 0.75 3.04 0.97 0.55 0.1 1.06 0.2 1.73 0.26 0.31 0.03 0.68 0.06 0.84 0.07l0.77 0.03c1.13-0.02 2.25-0.14 3.34-0.35 1.08-0.22 2.1-0.57 3.04-0.97 0.93-0.41 1.79-0.88 2.52-1.4 0.75-0.5 1.37-1.04 1.91-1.57 0.54-0.52 0.97-1.04 1.33-1.51 0.17-0.24 0.33-0.46 0.48-0.67 0.14-0.23 0.28-0.44 0.39-0.63 0.27-0.42 0.29-0.58 0.39-0.77 0.07-0.16 0.11-0.25 0.11-0.25 0.67-1.49-0.14-3.18-1.81-3.78-1.31-0.46-2.78-0.1-3.67 0.8z"
      })
    )
  );
}

exports.default = FaceWithThermometer;
