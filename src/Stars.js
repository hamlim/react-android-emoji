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

function Stars(props) {
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
        id: "d",
        cx: 37.056,
        cy: 57.62,
        r: 42.815,
        fx: 12.018,
        fy: 56.747,
        gradientTransform: "matrix(.7322 -.5356 .5346 .7353 -19.453 49.68)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m24.02 41.66 19.61 13.66c1.16 0.81 2.7 0.81 3.85 0l19.54-13.69c2.62-1.83 6.08 0.68 5.16 3.75l-6.84 22.94c-0.4 1.35 0.07 2.82 1.2 3.67l19.06 14.45c2.55 1.94 1.24 6.01-1.96 6.08l-23.84 0.5c-1.41 0.03-2.65 0.94-3.11 2.28l-7.76 22.61c-1.04 3.03-5.31 3.04-6.37 0.01l-7.9-22.62c-0.47-1.33-1.71-2.24-3.12-2.27l-23.85-0.47c-3.19-0.06-4.52-4.13-1.98-6.07l18.97-14.48c1.12-0.86 1.59-2.32 1.18-3.68l-6.97-22.91c-0.94-3.07 2.51-5.59 5.13-3.76z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m68.95 43.97c0.12 0 0.27 0.09 0.36 0.2 0.08 0.11 0.09 0.2 0.04 0.36l-7.07 23.69c-0.62 2.07 0.12 4.34 1.85 5.65l19.68 14.93c0.08 0.06 0.24 0.18 0.15 0.48-0.09 0.28-0.28 0.28-0.38 0.28l-24.62 0.52c-2.17 0.05-4.11 1.46-4.81 3.52l-8.01 23.36c-0.03 0.1-0.1 0.28-0.38 0.28-0.29 0-0.36-0.18-0.39-0.28l-8.17-23.38c-0.71-2.05-2.65-3.45-4.81-3.49l-24.64-0.49c-0.09 0-0.29-0.01-0.38-0.29-0.09-0.29 0.07-0.41 0.14-0.47l19.59-14.95c1.72-1.31 2.45-3.59 1.82-5.67l-7.2-23.66c-0.05-0.18-0.02-0.27 0.04-0.36 0.09-0.12 0.24-0.2 0.36-0.2 0.03 0 0.1 0 0.22 0.09l20.25 14.11c0.88 0.61 1.91 0.93 2.97 0.93 1.07 0 2.1-0.33 2.98-0.94l20.18-14.14c0.13-0.08 0.2-0.08 0.23-0.08m0-2.96c-0.64 0-1.3 0.19-1.92 0.62l-20.18 14.14c-0.39 0.27-0.84 0.41-1.29 0.41s-0.9-0.13-1.28-0.4l-20.26-14.12c-0.62-0.43-1.28-0.62-1.91-0.62-2.09 0-3.94 2.03-3.23 4.38l7.2 23.66c0.27 0.9-0.04 1.88-0.79 2.45l-19.58 14.96c-2.54 1.94-1.21 6.01 1.98 6.07l24.64 0.49c0.94 0.02 1.77 0.62 2.08 1.51l8.16 23.36c0.53 1.51 1.86 2.27 3.18 2.27 1.33 0 2.66-0.76 3.18-2.28l8.01-23.36c0.31-0.89 1.13-1.5 2.07-1.52l24.62-0.52c3.19-0.07 4.51-4.14 1.96-6.08l-19.67-14.92c-0.75-0.57-1.07-1.54-0.8-2.45l7.07-23.69c0.7-2.34-1.16-4.36-3.24-4.36z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 71.716,
        x2: 124,
        y1: 42.564,
        y2: 42.564,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m77.64 38.37-5.92 24.91s36.25-34.1 52.28-41.43c0 0-22.69 0.28-46.36 16.52z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 26.091,
        x2: 104.76,
        y1: 29.346,
        y2: 29.346,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m26.09 39.11 14.06 8.88s38.26-32.01 64.61-36.59c0 0-42.66-7.64-78.67 27.71z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 78.868,
        x2: 120.82,
        y1: 64.127,
        y2: 64.127,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m78.87 75.36 10.94 9.19s20.5-32.33 31.01-40.85c0 0-27.07 6.35-41.95 31.66z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m110.09 26.99c-11.52 8.29-25.13 20.22-33.26 27.57l3.42-14.39c10.98-7.33 21.73-11.17 29.84-13.18m13.91-4.99zm0-0.15s-22.69 0.28-46.36 16.52l-5.92 24.91s36.25-34.1 52.28-41.43z",
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
          "m87.41 13.95c-20.35 9.03-41.42 25.49-47.49 30.4l-9.03-5.71c20.13-18.37 41.96-23.55 56.52-24.69m7.06-3.25c-14.84 0-43.23 3.72-68.38 28.41l14.06 8.88s38.26-32.01 64.61-36.59c0 0-3.88-0.7-10.29-0.7z",
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
          "m109.8 51.13c-8.05 9.88-16.9 23.21-20.67 28.99l-6.41-5.38c7.89-12.23 18.83-19.52 27.08-23.61m11.02-7.13zm0-0.3s-27.07 6.35-41.95 31.66l10.94 9.19c-0.01 0 20.5-32.33 31.01-40.85z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Stars;
