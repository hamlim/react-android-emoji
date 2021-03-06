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

function Canoe(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m76.1 76.14c-25.35 25.35-53.69 40.68-67.02 47.06-3.24 1.55-5.81-1.02-4.26-4.26 6.38-13.33 21.71-41.67 47.06-67.02s53.69-40.68 67.02-47.06c3.24-1.55 5.81 1.02 4.26 4.26-6.37 13.34-21.71 41.67-47.06 67.02z",
      fill: "#FFA726"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64.242,
        cy: 63.792,
        r: 66.508,
        gradientTransform: "matrix(.729 -.6846 .1644 .1751 6.9247 96.602)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0.00087691
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6D4C41",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.09 71.65c-22.76 22.76-47.16 36.95-55.76 41.59-1.13 0.61-2.15-0.41-1.54-1.54 4.64-8.6 18.83-32.99 41.59-55.76s47.16-36.95 55.76-41.59c1.13-0.61 2.15 0.41 1.54 1.54-4.64 8.6-18.82 32.99-41.59 55.76z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m113.69 15.89c0.61-1.13-0.41-2.15-1.54-1.54-2.69 1.45-6.93 3.84-12.18 7.13l6.59 6.59c3.29-5.25 5.67-9.49 7.13-12.18z",
      fill: "#795548"
    }),
    _react2.default.createElement("path", {
      d:
        "m18.46 108.15c-0.56 1.04 0.38 1.99 1.43 1.43 2.43-1.31 6.21-3.44 10.9-6.37l-5.96-5.96c-2.93 4.69-5.06 8.48-6.37 10.9z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m56.39 55.94c22.76-22.76 47.16-36.95 55.76-41.59 1.13-0.61 2.15 0.41 1.54 1.54-4.64 8.6-18.83 32.99-41.59 55.76s-47.16 36.95-55.76 41.59c-1.13 0.61-2.15-0.41-1.54-1.54"
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
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 -.7071 .7071 .7071 10.648 79.507)",
      x: 98.52,
      y: 14.3,
      width: 5.55,
      height: 25.19,
      clipPath: "url(#a)",
      fill: "#FFA726"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 -.7071 .7071 .7071 -61.02 49.814)",
      x: 27.05,
      y: 86.9,
      width: 5.14,
      height: 23.32,
      clipPath: "url(#a)",
      fill: "#FFA726"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.61 7.43c-0.02 0.1-0.07 0.24-0.15 0.41-6.76 14.12-21.79 41.5-46.48 66.19-24.69 24.68-52.07 39.71-66.19 46.47-0.17 0.08-0.31 0.12-0.41 0.15 0.02-0.1 0.07-0.24 0.15-0.41 6.76-14.12 21.79-41.5 46.48-66.19s52.07-39.72 66.19-46.48c0.17-0.08 0.31-0.12 0.41-0.14m0.18-3.03c-0.58 0-1.22 0.14-1.89 0.46-13.33 6.38-41.67 21.71-67.02 47.06s-40.68 53.69-47.06 67.02c-1.23 2.57 0.14 4.72 2.37 4.72 0.58 0 1.22-0.14 1.89-0.46 13.33-6.38 41.67-21.71 67.02-47.06s40.68-53.69 47.06-67.02c1.24-2.57-0.13-4.72-2.37-4.72z",
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
          "m110.49 17.54c-5.92 10.55-19.33 32.21-39.81 52.69s-42.14 33.9-52.69 39.81c5.92-10.54 19.33-32.21 39.81-52.69s42.15-33.89 52.69-39.81m2.33-3.37c-0.21 0-0.44 0.06-0.67 0.18-8.6 4.64-32.99 18.83-55.76 41.59s-36.95 47.16-41.59 55.76c-0.48 0.9 0.06 1.72 0.87 1.72 0.21 0 0.44-0.06 0.67-0.18 8.6-4.64 32.99-18.83 55.76-41.59 22.76-22.76 36.95-47.16 41.59-55.76 0.48-0.9-0.06-1.72-0.87-1.72z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 -.7071 .7071 .7071 -26.543 64.023)",
      x: 62.01,
      y: 7.69,
      width: 4,
      height: 112.73,
      fill: "#FFA726"
    }),
    _react2.default.createElement("path", {
      d:
        "m16.02 5.17 11.68 11.68c3.01 3.01 3.01 7.88 0 10.89s-7.88 3.01-10.89 0l-11.68-11.68c-0.65-0.65-0.65-1.7 0-2.35l8.54-8.54c0.65-0.64 1.7-0.64 2.35 0z",
      fill: "#F57F17"
    }),
    _react2.default.createElement("path", {
      d:
        "m111.89 122.83-11.68-11.68c-3.01-3.01-3.01-7.88 0-10.89s7.88-3.01 10.89 0l11.68 11.68c0.65 0.65 0.65 1.7 0 2.35l-8.54 8.54c-0.65 0.64-1.7 0.64-2.35 0z",
      fill: "#F57F17"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m14.85 6.83 11.44 11.44c1.08 1.08 1.67 2.51 1.67 4.03s-0.59 2.95-1.67 4.03-2.51 1.67-4.03 1.67-2.95-0.59-4.03-1.67l-11.44-11.44 8.06-8.06m0-2.14c-0.42 0-0.85 0.16-1.17 0.49l-8.54 8.54c-0.65 0.65-0.65 1.7 0 2.35l11.68 11.68c1.5 1.5 3.47 2.26 5.45 2.26 1.97 0 3.94-0.75 5.45-2.26 3.01-3.01 3.01-7.88 0-10.89l-11.7-11.69c-0.32-0.32-0.75-0.48-1.17-0.48z",
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
          "m105.66 100c1.52 0 2.95 0.59 4.03 1.67l11.44 11.44-8.06 8.06-11.44-11.44c-2.22-2.22-2.22-5.84 0-8.06 1.08-1.08 2.51-1.67 4.03-1.67m0-2c-1.97 0-3.94 0.75-5.45 2.26-3.01 3.01-3.01 7.88 0 10.89l11.68 11.68c0.32 0.32 0.75 0.49 1.17 0.49s0.85-0.16 1.17-0.49l8.54-8.54c0.65-0.65 0.65-1.7 0-2.35l-11.68-11.68c-1.49-1.51-3.46-2.26-5.43-2.26z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Canoe;
