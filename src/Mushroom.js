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

function Mushroom(props) {
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
        x1: 63.644,
        x2: 65.245,
        y1: 62.776,
        y2: 82.784,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A1887F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EED1C2",
        offset: 0.9951
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M24,74.62c7.13,2.88,14.97,2.51,22.46,1.77c7.68-0.75,15.4-2.1,23.13-1.24 c4.46,0.5,8.89,1.19,13.38,1.52c6.98,0.51,15.76,0.58,22.16-2.8C88.01,59.92,29.67,61.46,24,74.62z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.3 7.22c3.55 0 7.05 0.47 10.43 1.4 20.99 5.79 36.12 25.04 36.8 46.8 0.15 4.83-0.76 11.35-5.97 14.94-0.45 0.31-0.96 0.61-1.6 0.95-3.36 1.78-7.76 2.64-13.46 2.64-1.86 0-3.83-0.08-6.4-0.27-2.83-0.2-5.73-0.57-8.53-0.93-1.55-0.2-3.15-0.4-4.74-0.58-1.79-0.2-3.63-0.3-5.62-0.3-4.51 0-9 0.51-13.35 1.01-1.58 0.18-3.2 0.37-4.79 0.52-3 0.29-6.21 0.57-9.4 0.57-4.84 0-8.79-0.65-12.09-1.97-0.06-0.03-0.13-0.05-0.2-0.08-8.09-3.36-9.06-11.78-8.91-16.5 0.25-8.13 2.45-16.06 6.36-22.96 8.57-15.1 25.23-25.24 41.47-25.24m0-3c-17.92 0-35.2 11.12-44.07 26.77-4.21 7.42-6.49 15.82-6.75 24.35-0.26 8.3 2.71 16.03 10.76 19.37 0.08 0.03 0.15 0.06 0.23 0.09 4.14 1.67 8.67 2.19 13.21 2.19 3.28 0 6.56-0.27 9.7-0.58 5.93-0.58 11.88-1.51 17.84-1.51 1.76 0 3.53 0.08 5.29 0.28 4.46 0.5 8.89 1.19 13.38 1.52 2.13 0.15 4.36 0.28 6.61 0.28 5.15 0 10.42-0.64 14.87-2.99 0.65-0.34 1.29-0.71 1.9-1.13 5.75-3.96 7.48-10.84 7.27-17.5-0.72-22.95-16.83-43.48-39-49.6-3.74-1.06-7.5-1.54-11.24-1.54z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 61.15,
        y2: 113.42,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EED1C2",
        offset: 0.0049261
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EECB92",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.29 82.53c-1-4.01-2-12.45-2-12.45s-3.49-2.53-10.97-2.49c-4.38-0.09-9.75 2.45-9.75 2.45s-0.1 3.84-1.97 12.5c-1.93 8.98-4.99 18.57-3.64 27.83 0.05 0.32 0.13 0.63 0.19 0.94 5.44 1.43 12.71-2.27 19.04-2.27 1.07 0 3.21 2.14 5.35 4.28 1.98 1.24 4.02 1.84 5.97 1.91 4.32-9.35 0.02-23.74-2.22-32.7z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.2 109.03c-6.34 0-13.6 3.71-19.04 2.27 2.01 9.89 12.18 15.11 21.96 11.51 4.24-1.56 6.87-4.26 8.41-7.6-1.95-0.07-3.99-0.67-5.97-1.91-2.15-2.13-4.29-4.27-5.36-4.27z",
      fill: "#EFEBE9"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.11 70.58h0.16 0.06 0.02 0.15c4.04 0 6.69 0.84 8.02 1.41 0.34 2.68 1.09 8.15 1.87 11.27 0.19 0.75 0.39 1.55 0.6 2.37 2.12 8.26 5.32 20.74 1.81 28.33-1.33 2.89-3.53 4.86-6.72 6.04-1.72 0.63-3.48 0.96-5.24 0.96-6.38 0-11.5-4.12-12.74-10.25-0.03-0.13-0.05-0.25-0.08-0.37-0.03-0.13-0.06-0.27-0.08-0.4-1.02-6.99 0.74-14.46 2.45-21.69 0.39-1.67 0.8-3.4 1.16-5.08 1.17-5.42 1.67-9.05 1.88-11.07 1.79-0.69 4.48-1.52 6.68-1.52m0-3c-4.34 0-9.53 2.45-9.53 2.45s-0.1 3.84-1.97 12.5c-1.93 8.98-4.99 18.57-3.64 27.83 0.05 0.32 0.13 0.63 0.19 0.94 1.58 7.76 8.19 12.65 15.68 12.65 2.05 0 4.17-0.37 6.27-1.14 4.24-1.56 6.87-4.26 8.41-7.6 4.31-9.33 0.01-23.72-2.23-32.68-1-4.01-2-12.45-2-12.45s-3.43-2.49-10.8-2.49h-0.17c-0.07-0.01-0.14-0.01-0.21-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m75.65 41c-3.47-6-8.4-12.55-14.74-18.13-11.21-0.25-8.2 8.99-8.2 8.99s3.34 12.14 22.94 9.14z",
      fill: "#fff",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 46.245,
        cy: 27.894,
        r: 62.356,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF7A86",
        offset: 0.0049261
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DE121C",
        offset: 0.8128
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE000C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.36 73.96c0.65-0.34 1.29-0.71 1.9-1.13 5.75-3.96 7.48-10.84 7.27-17.5-0.72-22.95-16.83-43.48-39-49.6-21.58-5.95-44.58 6.35-55.3 25.26-4.21 7.42-6.49 15.82-6.75 24.35-0.26 8.3 2.71 16.03 10.76 19.37 0.08 0.03 0.15 0.06 0.23 0.09 6.02-11.22 62.52-13.9 80.89-0.84z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m105.36 73.96c0.65-0.34 1.29-0.71 1.9-1.13 5.75-3.96 7.48-10.84 7.27-17.5-0.72-22.95-16.83-43.48-39-49.6-21.58-5.95-44.58 6.35-55.3 25.26-4.21 7.42-6.49 15.82-6.75 24.35-0.26 8.3 2.71 16.03 10.76 19.37 0.08 0.03 0.15 0.06 0.23 0.09 6.02-11.22 62.52-13.9 80.89-0.84z"
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
        clipPath: "url(#a)",
        fill: "#FFD9CF"
      },
      _react2.default.createElement("ellipse", {
        cx: 61.92,
        cy: 35.14,
        rx: 12.58,
        ry: 8.77
      }),
      _react2.default.createElement("ellipse", {
        cx: 28.4,
        cy: 29.13,
        rx: 9.93,
        ry: 7.17
      }),
      _react2.default.createElement("ellipse", {
        cx: 29.1,
        cy: 56.07,
        rx: 9.76,
        ry: 8.04
      }),
      _react2.default.createElement("ellipse", {
        cx: 95.46,
        cy: 54.29,
        rx: 8.19,
        ry: 7.15
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1869 -.9824 .9824 .1869 56.314 117.05)",
        cx: 98.87,
        cy: 24.51,
        rx: 10,
        ry: 14.49
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9288 -.3707 .3707 .9288 .63 20.691)",
        cx: 54.14,
        cy: 8.71,
        rx: 10.68,
        ry: 7.78
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.3 7.22c3.55 0 7.06 0.47 10.43 1.4 20.99 5.79 36.12 25.04 36.8 46.8 0.15 4.83-0.76 11.35-5.97 14.94-0.04 0.03-0.08 0.05-0.12 0.08-8.59-5.16-23.84-8.21-41.47-8.21-15.02 0-33.57 2.36-40.35 8.83-6.48-3.78-7.29-11.28-7.15-15.63 0.25-8.13 2.45-16.06 6.36-22.96 8.57-15.11 25.23-25.25 41.47-25.25m0-3c-17.92 0-35.2 11.12-44.07 26.77-4.21 7.42-6.49 15.82-6.75 24.35-0.26 8.3 2.71 16.03 10.76 19.37 0.08 0.03 0.15 0.06 0.23 0.09 3.23-6 20.94-9.56 39.52-9.56 16.1 0 32.85 2.67 41.38 8.74 0.65-0.34 1.29-0.71 1.9-1.13 5.75-3.96 7.48-10.84 7.27-17.5-0.72-22.95-16.83-43.48-39-49.6-3.74-1.05-7.5-1.53-11.24-1.53z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Mushroom;