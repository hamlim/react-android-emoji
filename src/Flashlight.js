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

function Flashlight(props) {
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
        cx: 43.121,
        cy: 10.613,
        r: 24.941,
        gradientTransform: "matrix(.6689 .6689 -.962 .962 90.342 -20.009)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E1F5FE",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m119.54 45.96c-4.25 4.25-19.18-3.79-26.57-11.18s-15.16-22.05-10.91-26.3 18.91 3.52 26.3 10.91 15.43 22.32 11.18 26.57z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 41.833,
        cy: 52.833,
        r: 70.503,
        gradientTransform: "matrix(-.0055804 1 -.8204 -.0045783 85.412 11.242)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.5441
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.08 36.83-68.35 68.36c-3.15 3.15-1.87 9.52 2.85 14.24s11.09 5.99 14.24 2.85l68.35-68.35-17.09-17.1z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 75.167,
        cy: 14.833,
        r: 45.501,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.571
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "77.82 10.29 72.12 15.98 63.45 47.18 80.53 64.26 112.02 55.88 117.71 50.18",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m85.65 9.28c5.11 0 15.27 5.49 21.3 11.53 3.53 3.53 7.28 8.98 9.55 13.89 2.51 5.42 2.62 8.85 1.63 9.85-0.49 0.49-1.41 0.59-2.1 0.59-5.17 0-15.49-5.61-21.65-11.77-3.57-3.57-7.17-8.83-9.41-13.74-2.59-5.69-2.43-8.8-1.49-9.73 0.51-0.52 1.46-0.62 2.17-0.62m-0.01-2c-1.51 0-2.75 0.37-3.58 1.21-4.25 4.25 3.52 18.91 10.91 26.3 5.97 5.97 16.85 12.36 23.06 12.36 1.48 0 2.69-0.36 3.51-1.18 4.25-4.25-3.79-19.18-11.18-26.57-5.94-5.95-16.56-12.13-22.72-12.12z",
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
          "m77.82 14.53 35.65 35.65-3 3-30.31 8.08c-0.51 0.14-0.98 0.4-1.35 0.78l-58.12 58.12c-0.56 0.56-1.39 0.85-2.46 0.85-2.37 0-5.25-1.42-7.53-3.7-1.84-1.84-3.14-4.09-3.55-6.18-0.19-0.97-0.36-2.76 0.7-3.82l57.86-57.86c0.56-0.56 0.88-1.33 0.88-2.12 0-0.08 0-0.15-0.01-0.23l8.22-29.55 3.02-3.02m0-4.24-5.7 5.7-8.68 31.19 0.15 0.15-57.86 57.86c-3.15 3.15-1.87 9.52 2.85 14.24 2.97 2.97 6.59 4.57 9.65 4.57 1.81 0 3.42-0.56 4.59-1.73l58.12-58.12 31.09-8.28 5.7-5.7-39.91-39.88z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: -1.6712,
        cy: 85.326,
        r: 28.838,
        gradientTransform: "matrix(1.007 0 0 1.007 19.654 7.6208)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m22.93 122.39-17.32-17.32c-0.72-0.72-0.72-1.9 0-2.62l9.26-9.26c0.72-0.72 1.9-0.72 2.62 0l17.31 17.31c0.72 0.72 0.72 1.9 0 2.62l-9.26 9.26c-0.71 0.73-1.89 0.73-2.61 0.01z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 106.74,
        cy: -12.329,
        r: 54.202,
        gradientTransform: "matrix(1.007 0 0 1.007 -18.446 15.027)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m112.02 55.88-39.9-39.9c-0.79-0.79-0.79-2.06 0-2.85l8.54-8.54c0.79-0.79 2.06-0.79 2.85 0l39.89 39.89c0.79 0.79 0.79 2.06 0 2.85l-8.54 8.54c-0.78 0.79-2.06 0.79-2.84 0.01z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 32.862 -53.127)",
      x: 79.56,
      y: 5.1,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 37.812 -55.177)",
      x: 84.51,
      y: 10.05,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 42.762 -57.228)",
      x: 89.46,
      y: 15,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 47.712 -59.278)",
      x: 94.41,
      y: 19.95,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 52.662 -61.328)",
      x: 99.36,
      y: 24.9,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 57.611 -63.378)",
      x: 104.31,
      y: 29.85,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 62.561 -65.429)",
      x: 109.26,
      y: 34.8,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 67.511 -67.479)",
      x: 114.21,
      y: 39.75,
      width: 2,
      height: 16,
      fill: "#757575",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m16.18 96.12 15.69 15.69-7.64 7.64-15.69-15.69 7.64-7.64m0-3.47c-0.47 0-0.95 0.18-1.31 0.54l-9.26 9.26c-0.72 0.72-0.72 1.9 0 2.62l17.31 17.31c0.36 0.36 0.84 0.54 1.31 0.54s0.95-0.18 1.31-0.54l9.26-9.26c0.72-0.72 0.72-1.9 0-2.62l-17.3-17.31c-0.37-0.36-0.84-0.54-1.32-0.54z",
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
          "m52.12 71.86c1.03 0 2.06 0.39 2.85 1.17 1.57 1.57 1.57 4.13 0 5.7l-5.7 5.7c-0.78 0.78-1.82 1.17-2.85 1.17s-2.06-0.39-2.85-1.17c-1.57-1.57-1.57-4.13 0-5.7l5.7-5.7c0.79-0.78 1.82-1.17 2.85-1.17m0-2c-1.61 0-3.13 0.63-4.26 1.76l-5.7 5.7c-2.35 2.35-2.35 6.17 0 8.52 1.14 1.14 2.65 1.76 4.26 1.76s3.13-0.63 4.26-1.76l5.7-5.7c2.35-2.35 2.35-6.17 0-8.52-1.13-1.14-2.65-1.76-4.26-1.76z",
        fill: "#F57C00"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m82.09 7.41 38.5 38.5-7.15 7.15-38.5-38.5 7.15-7.15m0-3.41c-0.52 0-1.03 0.2-1.42 0.59l-8.54 8.54c-0.79 0.79-0.79 2.06 0 2.85l39.91 39.91c0.39 0.39 0.91 0.59 1.42 0.59s1.03-0.2 1.42-0.59l8.54-8.54c0.79-0.79 0.79-2.06 0-2.85l-39.9-39.91c-0.4-0.39-0.91-0.59-1.43-0.59z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 32.093,
        cy: 66.497,
        r: 14.155,
        gradientTransform: "translate(16.739 6.6781)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m46.42 86.1c-1.21 0-2.35-0.47-3.2-1.32-1.77-1.77-1.77-4.64 0-6.4l5.7-5.7c0.85-0.85 1.99-1.32 3.2-1.32s2.35 0.47 3.2 1.32c1.77 1.77 1.77 4.64 0 6.4l-5.7 5.7c-0.85 0.85-1.98 1.32-3.2 1.32z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.12 71.86c1.03 0 2.06 0.39 2.85 1.17 1.57 1.57 1.57 4.13 0 5.7l-5.7 5.7c-0.78 0.78-1.82 1.17-2.85 1.17s-2.06-0.39-2.85-1.17c-1.57-1.57-1.57-4.13 0-5.7l5.7-5.7c0.79-0.78 1.82-1.17 2.85-1.17m0-1c-1.35 0-2.61 0.52-3.56 1.47l-5.7 5.7c-1.96 1.96-1.96 5.15 0 7.11 0.95 0.95 2.21 1.47 3.56 1.47s2.61-0.52 3.56-1.47l5.7-5.7c1.96-1.96 1.96-5.15 0-7.11-0.95-0.95-2.21-1.47-3.56-1.47z",
      fill: "#424242"
    })
  );
}

exports.default = Flashlight;
