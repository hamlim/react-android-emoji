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

function LyingFace(props) {
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
        id: "b",
        x1: 62.992,
        x2: 62.992,
        y1: 20.455,
        y2: 106.97,
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
        "m62.99 118.96c-27.47 0-57.03-17.2-57.03-54.96s29.56-54.96 57.03-54.96c15.22 0 29.32 5.04 39.69 14.19 11.35 10.02 17.35 24.11 17.35 40.77 0 16.58-6 30.65-17.35 40.7-10.4 9.2-24.49 14.26-39.69 14.26z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.99 11c14.74 0 28.37 4.87 38.38 13.7 10.91 9.63 16.68 23.22 16.68 39.3 0 16-5.77 29.57-16.69 39.23-10.02 8.88-23.65 13.77-38.37 13.77-14.79 0-28.42-4.83-38.39-13.59-10.91-9.59-16.68-23.22-16.68-39.41 0-16.26 5.77-29.92 16.67-39.48 9.95-8.72 23.59-13.52 38.4-13.52m0-3.93c-30.63 0-59 19.67-59 56.93 0 37.06 28.37 56.93 59 56.93s59-20.38 59-56.93c0-36.75-28.37-56.93-59-56.93z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.68 105.33c-3.45 0-6.65-1.95-8.34-5.08s-1.52-6.79 0.45-9.78c4.36-6.63 11.09-10.14 19.46-10.14s15.1 3.51 19.46 10.14c1.97 2.99 2.14 6.65 0.45 9.78s-4.88 5.08-8.34 5.08c-1.07 0-2.15-0.19-3.2-0.55-2.72-0.95-5.54-1.43-8.37-1.43-2.84 0-5.65 0.48-8.37 1.43-1.05 0.37-2.13 0.55-3.2 0.55z",
      fill: "#242424"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#EB8F00",
        stroke: "#EB8F00",
        strokeMiterlimit: 10
      },
      _react2.default.createElement("path", {
        d:
          "m43.74 24.7c0.36-1.12 1.35-1.86 2.54-1.89 3.28-0.14 6.53-1.74 8.67-4.3 0.86-1.07 2.3-1.37 3.45-0.75 1.11 0.59 1.59 1.8 1.21 3.01-0.05 0.16-0.12 0.32-0.2 0.48-0.71 1.31-1.63 2.45-2.73 3.43-2.95 2.65-6.99 3.9-10.8 3.34-0.85-0.14-1.51-0.57-1.91-1.21-0.37-0.62-0.46-1.39-0.23-2.11z"
      }),
      _react2.default.createElement("path", {
        d:
          "m84.28 24.7c-0.36-1.12-1.35-1.86-2.54-1.89-3.28-0.14-6.53-1.74-8.67-4.3-0.86-1.07-2.3-1.37-3.45-0.75-1.11 0.59-1.59 1.8-1.21 3.01 0.05 0.16 0.12 0.32 0.2 0.48 0.71 1.31 1.63 2.45 2.73 3.43 2.95 2.65 6.99 3.9 10.8 3.34 0.85-0.14 1.51-0.57 1.91-1.21 0.37-0.62 0.46-1.39 0.23-2.11z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m82.77 45.03c4.19 0 8 3.54 8 9.42s-3.81 9.42-8 9.42-8-3.54-8-9.42 3.81-9.42 8-9.42z"
      }),
      _react2.default.createElement("path", {
        d:
          "m45.23 45.03c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 61.387,
        x2: 125.62,
        y1: 65.82,
        y2: 65.82,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEE133",
        offset: 0.1356
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDDD32",
        offset: 0.3398
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD02F",
        offset: 0.5563
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9BB29",
        offset: 0.7777
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A323",
        offset: 0.9645
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.9 72.53h-50.8c-3.69 0-6.71-3.02-6.71-6.71s3.02-6.71 6.71-6.71h51.14c3.51 0 6.37 2.87 6.37 6.37v0.34c0.01 3.69-3.01 6.71-6.71 6.71z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m119.09 57.11h-51.09v4h51.09c2.46 0 4.47 1.95 4.47 4.36v0.37c0 2.59-2.16 4.69-4.81 4.69h-50.75v4h50.75c4.92 0 8.92-3.9 8.92-8.69v-0.37c0-4.61-3.85-8.36-8.58-8.36z",
      fill: "#EB8F00"
    })
  );
}

exports.default = LyingFace;
