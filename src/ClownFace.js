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

function ClownFace(props) {
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
        id: "f",
        x1: 63.989,
        x2: 63.989,
        y1: 19.871,
        y2: 107.6,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCFCFC",
        offset: 0.6126
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F1F1F1",
        offset: 0.7091
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.7997
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C7C7C7",
        offset: 0.8861
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C2C2C2",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.99 119.76c-27.85 0-57.83-17.44-57.83-55.73s29.98-55.73 57.83-55.73c15.44 0 29.73 5.11 40.24 14.39 11.51 10.16 17.59 24.45 17.59 41.34 0 16.81-6.08 31.08-17.59 41.27-10.54 9.32-24.83 14.46-40.24 14.46z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.99 10.29c14.95 0 28.77 4.93 38.92 13.89 11.06 9.77 16.91 23.54 16.91 39.84 0 16.22-5.85 29.98-16.92 39.77-10.17 9-23.99 13.96-38.91 13.96-14.99 0-28.82-4.89-38.92-13.78-11.06-9.72-16.91-23.53-16.91-39.95 0-16.48 5.84-30.32 16.9-40.02 10.08-8.84 23.91-13.71 38.93-13.71m0-4c-31.06 0-59.83 19.95-59.83 57.73 0 37.58 28.77 57.73 59.83 57.73s59.83-20.67 59.83-57.73c0-37.26-28.77-57.73-59.83-57.73z",
      fill: "#B0ABA3"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 39.417,
        cy: 67.104,
        r: 21.667,
        gradientTransform: "matrix(1 0 0 .7307 0 19.795)",
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
      cx: 39.42,
      cy: 68.83,
      rx: 19.92,
      ry: 15.27,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 87.583,
        cy: 67.104,
        r: 21.667,
        gradientTransform: "matrix(1 0 0 .7307 0 19.795)",
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
      cx: 87.58,
      cy: 68.83,
      rx: 19.92,
      ry: 15.27,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m91.29 50h-14.28c-2.12 0-3.86-1.74-3.86-3.86s1.74-3.86 3.86-3.86h14.28c2.12 0 3.86 1.74 3.86 3.86-0.2 2.13-1.93 3.86-3.86 3.86z"
      }),
      _react2.default.createElement("path", {
        d:
          "m83.95 57.15c-2.12 0-3.86-1.74-3.86-3.86v-14.29c0-2.12 1.74-3.86 3.86-3.86s3.86 1.74 3.86 3.86v14.28c0 2.13-1.73 3.87-3.86 3.87z"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 66,
        cy: 60,
        r: 20.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF4900",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E30C00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 63.99,
      cy: 66,
      r: 15.11,
      fill: "url(#c)",
      stroke: "#B32E2E",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("path", {
      d:
        "m63.99 103.51c-14.4 0-27.92-6.15-37.1-16.88-0.97-1.13-1.19-2.65-0.57-3.98 0.62-1.35 1.97-2.23 3.42-2.23 0.66 0 1.32 0.18 1.91 0.52 9.41 5.47 20.6 8.35 32.34 8.35 11.75 0 22.93-2.89 32.34-8.35 0.59-0.34 1.25-0.52 1.91-0.52 1.46 0 2.8 0.87 3.42 2.23 0.61 1.33 0.39 2.85-0.57 3.98-9.18 10.73-22.7 16.88-37.1 16.88z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m98.24 82.42c1.35 0 2.39 1.67 1.33 2.91-8.45 9.88-21.25 16.17-35.58 16.17s-27.13-6.3-35.58-16.17c-1.06-1.24-0.02-2.91 1.33-2.91 0.29 0 0.6 0.08 0.9 0.25 9.33 5.42 20.86 8.63 33.35 8.63s24.02-3.21 33.35-8.63c0.3-0.17 0.61-0.25 0.9-0.25m0-4c-1.01 0-2.02 0.27-2.91 0.8-9.11 5.29-19.95 8.08-31.34 8.08s-22.23-2.8-31.34-8.08c-0.9-0.52-1.9-0.79-2.91-0.79-2.23 0-4.29 1.33-5.24 3.39-0.94 2.05-0.61 4.39 0.87 6.12 9.55 11.16 23.63 17.57 38.62 17.57s29.06-6.41 38.62-17.57c1.48-1.73 1.81-4.07 0.87-6.12-0.95-2.07-3-3.4-5.24-3.4z",
      fill: "#ED0009"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 23.808,
        x2: 23.808,
        y1: 5.8113,
        y2: 43.454,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF4900",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E30C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m11.62 46.87c-4.6 0-8.34-3.74-8.34-8.34 0-3.13 1.73-5.97 4.52-7.41 0.93-0.48 1.33-1.6 0.92-2.56-0.69-1.61-1.04-3.33-1.04-5.09 0-7.14 5.81-12.94 12.94-12.94 2.79 0 5.46 0.89 7.71 2.57 0.35 0.26 0.77 0.4 1.2 0.4 0.22 0 0.43-0.04 0.64-0.11 0.62-0.21 1.1-0.72 1.28-1.35 0.79-2.82 3.39-4.79 6.32-4.79 3.63 0 6.57 2.95 6.57 6.57 0 3.63-2.95 6.57-6.57 6.57-0.57 0-1.16-0.08-1.75-0.25-0.18-0.05-0.35-0.07-0.53-0.07-0.46 0-0.92 0.16-1.28 0.47-0.5 0.42-0.77 1.06-0.71 1.72 0.04 0.4 0.06 0.8 0.06 1.2 0 6.75-5.06 12.28-11.78 12.88-1.05 0.09-1.85 0.98-1.82 2.04 0 0.03 0.01 0.15 0.01 0.18-0.01 4.57-3.75 8.31-8.35 8.31z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m37.77 9.24c2.52 0 4.57 2.05 4.57 4.57s-2.05 4.57-4.57 4.57c-0.39 0-0.8-0.06-1.22-0.17-0.35-0.1-0.71-0.14-1.07-0.14-0.93 0-1.84 0.32-2.57 0.93-1.01 0.84-1.54 2.13-1.42 3.44 0.04 0.39 0.05 0.72 0.05 1.02 0 5.7-4.28 10.38-9.96 10.89-2.09 0.19-3.68 1.96-3.65 4.06 0 0.07 0 0.14 0.01 0.21-0.05 3.46-2.88 6.25-6.34 6.25-3.5 0-6.34-2.85-6.34-6.34 0-2.38 1.32-4.54 3.44-5.63 1.86-0.96 2.67-3.2 1.84-5.13-0.58-1.36-0.88-2.81-0.88-4.3 0-6.03 4.91-10.94 10.94-10.94 2.36 0 4.61 0.75 6.52 2.17 0.7 0.52 1.54 0.79 2.39 0.79 0.43 0 0.87-0.07 1.29-0.21 1.25-0.42 2.21-1.43 2.56-2.7 0.57-1.97 2.37-3.34 4.41-3.34m0-4c-3.93 0-7.23 2.64-8.25 6.25-2.49-1.86-5.57-2.97-8.91-2.97-8.25 0-14.94 6.69-14.94 14.94 0 2.09 0.43 4.07 1.2 5.88-3.33 1.72-5.6 5.18-5.6 9.19 0 5.71 4.63 10.34 10.34 10.34s10.34-4.63 10.34-10.34c0-0.06-0.01-0.13-0.01-0.19 7.62-0.68 13.6-7.07 13.6-14.87 0-0.47-0.03-0.93-0.07-1.39 0.73 0.2 1.49 0.32 2.29 0.32 4.74 0 8.57-3.84 8.57-8.57 0.01-4.75-3.83-8.59-8.56-8.59z",
      fill: "#B32E2E"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 104.63,
        x2: 104.63,
        y1: 5.8113,
        y2: 43.454,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF4900",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E30C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116.82 46.87c-4.6 0-8.34-3.74-8.34-8.34 0-0.04 0.01-0.12 0.01-0.16 0.02-1.05-0.78-1.93-1.82-2.02-6.71-0.6-11.78-6.13-11.78-12.88 0-0.41 0.03-0.81 0.06-1.21 0.06-0.65-0.2-1.3-0.71-1.72-0.36-0.3-0.82-0.47-1.28-0.47-0.18 0-0.36 0.02-0.53 0.07-0.59 0.16-1.18 0.25-1.75 0.25-3.62 0-6.57-2.95-6.57-6.57s2.95-6.57 6.57-6.57c2.93 0 5.53 1.97 6.32 4.79 0.18 0.63 0.66 1.14 1.28 1.35 0.21 0.07 0.43 0.11 0.64 0.11 0.42 0 0.84-0.14 1.2-0.4 2.26-1.68 4.92-2.57 7.71-2.57 7.14 0 12.94 5.8 12.94 12.94 0 1.76-0.35 3.48-1.04 5.09-0.41 0.96-0.01 2.08 0.92 2.56 2.79 1.44 4.52 4.28 4.52 7.41 0 4.6-3.75 8.34-8.35 8.34z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m90.67 9.24c2.04 0 3.84 1.37 4.4 3.33 0.36 1.27 1.32 2.28 2.56 2.7 0.42 0.14 0.86 0.21 1.29 0.21 0.85 0 1.69-0.27 2.39-0.79 1.91-1.42 4.16-2.17 6.52-2.17 6.03 0 10.94 4.91 10.94 10.94 0 1.49-0.3 2.94-0.88 4.3-0.83 1.93-0.02 4.17 1.84 5.13 2.12 1.1 3.44 3.26 3.44 5.63 0 3.5-2.85 6.34-6.34 6.34-3.47 0-6.29-2.8-6.34-6.25 0-0.07 0.01-0.14 0.01-0.21 0.04-2.1-1.55-3.87-3.65-4.06-5.68-0.5-9.96-5.19-9.96-10.89 0-0.3 0.02-0.63 0.05-1.02 0.12-1.31-0.41-2.59-1.42-3.44-0.73-0.61-1.64-0.93-2.57-0.93-0.36 0-0.71 0.05-1.07 0.14-0.42 0.11-0.83 0.17-1.22 0.17-2.52 0-4.57-2.05-4.57-4.57 0.01-2.5 2.06-4.56 4.58-4.56m0-4c-4.74 0-8.57 3.84-8.57 8.57 0 4.74 3.84 8.57 8.57 8.57 0.79 0 1.56-0.12 2.29-0.32-0.04 0.46-0.07 0.92-0.07 1.39 0 7.8 5.98 14.19 13.6 14.87 0 0.06-0.01 0.13-0.01 0.19 0 5.71 4.63 10.34 10.34 10.34s10.34-4.63 10.34-10.34c0-4-2.28-7.47-5.6-9.19 0.77-1.8 1.2-3.79 1.2-5.88 0-8.25-6.69-14.94-14.94-14.94-3.34 0-6.42 1.11-8.91 2.97-1.01-3.58-4.31-6.23-8.24-6.23z",
      fill: "#B32E2E"
    }),
    _react2.default.createElement("path", {
      d:
        "m43.67 36.94c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z",
      fill: "#242424"
    })
  );
}

exports.default = ClownFace;
