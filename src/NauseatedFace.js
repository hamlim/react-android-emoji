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

function NauseatedFace(props) {
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
        id: "c",
        x1: -10016,
        x2: -10016,
        y1: -3234.3,
        y2: -3146.3,
        gradientTransform: "matrix(-1 0 0 -1 -9952 -3126)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C0E7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#46C5C9",
        offset: 0.138
      }),
      _react2.default.createElement("stop", {
        stopColor: "#55D479",
        offset: 0.5325
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5FDD46",
        offset: 0.8126
      }),
      _react2.default.createElement("stop", {
        stopColor: "#63E133",
        offset: 0.95
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,119.89c-15.48,0-29.81-5.12-40.36-14.43C12.1,95.28,6,80.94,6,64 c0-16.86,6.1-31.17,17.64-41.39C34.22,13.26,48.55,8.11,64,8.11c27.94,0,58,17.49,58,55.89S91.93,119.89,64,119.89z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.11c15.04 0 28.9 4.91 39.04 13.82 11.1 9.75 16.96 23.61 16.96 40.07 0 16.54-5.86 30.42-16.96 40.15-10.11 8.86-23.98 13.75-39.04 13.75-14.99 0-28.86-4.95-39.03-13.93-11.1-9.8-16.97-23.62-16.97-39.97 0-16.27 5.87-30.07 16.97-39.89 10.2-9.03 24.07-14 39.03-14m0-4c-31.15 0-60 20.72-60 57.89 0 37.37 28.85 57.89 60 57.89s60-20.01 60-57.89c0-37.68-28.85-57.89-60-57.89z",
      fill: "#47A9B0"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 30.792,
        cy: 85.808,
        r: 21.667,
        gradientTransform: "matrix(1 0 0 .7307 0 25.961)",
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
      cx: 30.79,
      cy: 88.66,
      rx: 19.92,
      ry: 15.27,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 97.208,
        cy: 85.336,
        r: 21.667,
        gradientTransform: "matrix(1 0 0 .7307 0 25.806)",
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
      cx: 97.21,
      cy: 88.16,
      rx: 19.92,
      ry: 15.27,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#242424",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 5.2632
      },
      _react2.default.createElement("path", {
        d: "m42.89 79.61c1.93 2.21 3.32 6.7 3.26 9.64s-1.24 5.84-3.26 7.97"
      }),
      _react2.default.createElement("path", {
        d: "m85.11 79.39c-1.93 2.21-3.32 6.92-3.26 9.86s1.24 5.84 3.26 7.97"
      }),
      _react2.default.createElement("path", {
        d: "m46.16 89.26s4.06-5.08 17.19-5.08 18.5 5.08 18.5 5.08"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m82.74 46.69c4.19 0 8 3.54 8 9.42s-3.81 9.42-8 9.42-8-3.54-8-9.42 3.81-9.42 8-9.42z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m45.2 46.69c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m51.1 32.55s-0.01 0.28-0.05 0.77c-0.02 0.13-0.01 0.24-0.05 0.42-0.03 0.18-0.09 0.37-0.14 0.58s-0.11 0.43-0.17 0.67c-0.07 0.22-0.16 0.43-0.24 0.66-0.16 0.47-0.39 0.95-0.66 1.44-0.26 0.5-0.59 0.99-0.95 1.49-0.39 0.47-0.77 0.99-1.24 1.42-0.45 0.47-0.96 0.87-1.47 1.29-0.55 0.36-1.08 0.74-1.65 1.04-0.55 0.33-1.16 0.55-1.72 0.79-0.58 0.2-1.15 0.38-1.7 0.49-0.55 0.12-1.08 0.2-1.57 0.23-0.49 0.06-0.94 0.05-1.34 0.02-0.4-0.01-0.74-0.05-1.03-0.1-0.57-0.1-0.88-0.18-0.88-0.18-0.95-0.24-1.54-1.2-1.3-2.15 0.15-0.62 0.62-1.09 1.19-1.27l0.3-0.09s0.24-0.07 0.64-0.17c0.2-0.04 0.44-0.12 0.71-0.2 0.27-0.07 0.57-0.17 0.89-0.29 0.32-0.1 0.66-0.26 1.02-0.4 0.36-0.13 0.71-0.35 1.09-0.52 0.37-0.21 0.75-0.41 1.12-0.65 0.39-0.21 0.73-0.5 1.1-0.75 0.35-0.28 0.72-0.53 1.03-0.84 0.33-0.29 0.64-0.59 0.94-0.88 0.26-0.32 0.58-0.6 0.81-0.9 0.24-0.3 0.48-0.58 0.67-0.86 0.21-0.29 0.38-0.52 0.51-0.72 0.07-0.1 0.14-0.2 0.21-0.29 0.07-0.1 0.13-0.24 0.19-0.34 0.23-0.43 0.38-0.68 0.38-0.68 0.52-0.86 1.64-1.14 2.5-0.62 0.56 0.33 0.88 0.96 0.86 1.59z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.28 31.56s0.15 0.24 0.38 0.68c0.06 0.1 0.12 0.25 0.19 0.34s0.14 0.19 0.21 0.29c0.13 0.2 0.3 0.43 0.51 0.72 0.19 0.28 0.43 0.56 0.67 0.86 0.23 0.31 0.54 0.58 0.81 0.9 0.3 0.29 0.61 0.6 0.94 0.88 0.31 0.31 0.68 0.56 1.03 0.84 0.37 0.25 0.72 0.54 1.1 0.75 0.37 0.24 0.75 0.45 1.12 0.65 0.38 0.16 0.74 0.38 1.09 0.52 0.36 0.14 0.69 0.3 1.02 0.4 0.32 0.12 0.62 0.22 0.89 0.29 0.27 0.08 0.51 0.16 0.71 0.2 0.4 0.1 0.64 0.17 0.64 0.17l0.29 0.09c0.94 0.29 1.46 1.29 1.16 2.23-0.19 0.61-0.69 1.05-1.27 1.19 0 0-0.31 0.08-0.88 0.18-0.28 0.06-0.63 0.09-1.03 0.1-0.4 0.03-0.85 0.04-1.34-0.02-0.5-0.02-1.02-0.1-1.57-0.23-0.56-0.1-1.12-0.29-1.7-0.49-0.56-0.24-1.17-0.45-1.72-0.79-0.57-0.3-1.11-0.68-1.65-1.04-0.5-0.42-1.02-0.82-1.47-1.29-0.48-0.43-0.85-0.95-1.24-1.42-0.36-0.5-0.7-0.99-0.95-1.49-0.27-0.49-0.5-0.97-0.66-1.44-0.09-0.23-0.18-0.44-0.24-0.66-0.06-0.23-0.12-0.46-0.17-0.67s-0.1-0.4-0.14-0.58c-0.03-0.17-0.03-0.29-0.05-0.42-0.04-0.49-0.05-0.77-0.05-0.77-0.03-1.01 0.77-1.84 1.77-1.87 0.67 0 1.27 0.36 1.6 0.9z",
      fill: "#6D4C41"
    })
  );
}

exports.default = NauseatedFace;
