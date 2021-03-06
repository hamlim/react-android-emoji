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

function Mag(props) {
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
      "linearGradient",
      {
        id: "e",
        x1: 69.845,
        x2: 69.845,
        y1: 72.22,
        y2: 82.027,
        gradientTransform: "matrix(.7071 -.7071 .7071 .7071 -29.463 68.997)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "98.78 90.08 90.33 98.58 56.54 64.6 64.99 56.11",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.98 60.37 29.56 29.72-4.22 4.24-29.56-29.72 4.22-4.24m0-4.26-8.45 8.49 33.79 33.98 8.45-8.49-33.79-33.98z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 43.358,
        cy: 4.3333,
        r: 82.01,
        gradientTransform: "matrix(1.0004 0 0 1 -.0267 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DBDBDB",
        offset: 0.2274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CDCDCD",
        offset: 0.4939
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B5B5B5",
        offset: 0.7789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 44.81,
      cy: 45.03,
      rx: 40.81,
      ry: 41.03,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 83.25,
        cy: 72.5,
        r: 51.6,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA623",
        offset: 0.0404
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0.5168
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.32 89.31c-6.48-6.52-13.55-11.1-19.48-13.06-1.62-0.54-3.07-1.49-4.28-2.71l-1.78-1.79-10.75 10.8 1.78 1.79c1.21 1.21 2.16 2.67 2.69 4.3 1.96 5.96 6.51 13.06 12.99 19.58 7.31 7.35 15.36 12.23 21.69 13.69l0.88 0.89c1.59 1.59 4.16 1.59 5.74 0l1.59-1.6c0.37-0.24 0.71-0.51 1.02-0.81 0.31-0.31 0.58-0.65 0.81-1.02l1.59-1.6c1.59-1.59 1.59-4.18 0-5.77l-0.88-0.89c-1.45-6.35-6.3-14.45-13.61-21.8z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m44.81 7c10.1 0 19.59 3.95 26.73 11.13 14.75 14.83 14.75 38.97 0 53.8-7.14 7.18-16.63 11.13-26.73 11.13s-19.59-3.95-26.73-11.13c-14.75-14.83-14.75-38.97 0-53.8 7.14-7.18 16.64-11.13 26.73-11.13m0-3c-10.44 0-20.89 4.01-28.86 12.02-15.94 16.02-15.94 42 0 58.03 7.97 8.01 18.41 12.02 28.86 12.02s20.89-4.01 28.86-12.02c15.94-16.02 15.94-42 0-58.03-7.97-8.01-18.41-12.02-28.86-12.02z",
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
          "m82.78 76c1.51 1.42 3.26 2.49 5.11 3.1 5.72 1.9 12.39 6.39 18.3 12.33 6.64 6.68 11.44 14.29 12.82 20.35l0.19 0.84 0.61 0.61 0.88 0.89c0.42 0.43 0.42 1.12 0 1.54l-1.59 1.6-0.23 0.23-0.17 0.28c-0.13 0.2-0.26 0.37-0.41 0.51-0.15 0.15-0.31 0.28-0.51 0.41l-0.27 0.18-0.23 0.23-1.59 1.6c-0.27 0.27-0.58 0.31-0.74 0.31s-0.48-0.04-0.74-0.31l-0.88-0.89-0.61-0.61-0.84-0.19c-6.03-1.39-13.59-6.2-20.23-12.88-5.91-5.94-10.38-12.65-12.27-18.4-0.61-1.86-1.68-3.64-3.1-5.15l6.5-6.58m-0.01-4.25-10.75 10.8 1.78 1.79c1.21 1.21 2.16 2.67 2.69 4.3 1.96 5.96 6.51 13.06 12.99 19.58 7.31 7.35 15.36 12.23 21.69 13.69l0.88 0.89c0.79 0.8 1.83 1.2 2.87 1.2s2.08-0.4 2.87-1.2l1.59-1.6c0.37-0.24 0.71-0.51 1.02-0.81 0.31-0.31 0.58-0.65 0.81-1.02l1.59-1.6c1.59-1.59 1.59-4.18 0-5.77l-0.88-0.89c-1.45-6.36-6.3-14.45-13.61-21.8-6.48-6.52-13.55-11.1-19.48-13.06-1.62-0.54-3.07-1.49-4.28-2.71l-1.78-1.79z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 23.025,
        cy: 23.5,
        r: 65.078,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ADE3FC",
        offset: 0.1696
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9DDDFB",
        offset: 0.3927
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.6456
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5CC7F8",
        offset: 0.9186
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 44.73,
      cy: 44.95,
      rx: 33.04,
      ry: 33.22,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m44.73 14.73c8.02 0 15.56 3.14 21.23 8.84 11.72 11.78 11.72 30.96 0 42.74-5.67 5.7-13.21 8.84-21.23 8.84s-15.56-3.14-21.23-8.84c-11.72-11.78-11.72-30.96 0-42.74 5.66-5.7 13.21-8.84 21.23-8.84m0-3c-8.46 0-16.91 3.24-23.36 9.73-12.9 12.97-12.9 34 0 46.98 6.45 6.49 14.91 9.73 23.36 9.73s16.91-3.24 23.36-9.73c12.9-12.97 12.9-34 0-46.98-6.45-6.49-14.91-9.73-23.36-9.73z",
        fill: "#039BE5"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 77.192,
        cy: 74.667,
        r: 12.886,
        gradientTransform: "matrix(1.0004 0 0 1 -.0267 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m87.19 77.1-9.99 10.05c-1.13 1.14-2.96 1.14-4.09 0l-0.96-0.97c-1.13-1.14-1.13-2.98 0-4.11l9.99-10.05c1.13-1.14 2.96-1.14 4.09 0l0.96 0.97c1.13 1.14 1.13 2.98 0 4.11z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.18 73.17c0.14 0 0.4 0.03 0.63 0.26l0.96 0.97c0.35 0.36 0.35 0.93 0 1.29l-9.99 10.05c-0.23 0.23-0.49 0.26-0.63 0.26s-0.4-0.03-0.63-0.26l-0.96-0.97c-0.35-0.36-0.35-0.93 0-1.29l9.99-10.05c0.23-0.22 0.5-0.26 0.63-0.26m0-2c-0.74 0-1.48 0.28-2.04 0.85l-9.99 10.05c-1.13 1.14-1.13 2.98 0 4.11l0.96 0.97c0.56 0.57 1.3 0.85 2.04 0.85s1.48-0.28 2.04-0.85l9.99-10.05c1.13-1.14 1.13-2.98 0-4.11l-0.96-0.97c-0.56-0.56-1.3-0.85-2.04-0.85z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Mag;
