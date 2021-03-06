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

function BilledHat(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1261 -.992 .992 .1261 48.877 119.29)",
      cx: 92.15,
      cy: 31.9,
      rx: 3.8,
      ry: 5.61,
      fill: "#0D47A1"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m91.59 30.07c0.26 0 0.52 0.02 0.79 0.05 2.15 0.27 3.44 1.53 3.35 2.24-0.08 0.65-1.34 1.38-3.02 1.38-0.26 0-0.53-0.02-0.79-0.05-1.08-0.14-2.07-0.55-2.72-1.12-0.43-0.38-0.67-0.8-0.63-1.12 0.08-0.65 1.34-1.38 3.02-1.38m0-2c-2.62 0-4.77 1.29-5 3.13-0.26 2.08 2.01 4.09 5.09 4.48 0.35 0.04 0.7 0.07 1.04 0.07 2.62 0 4.77-1.29 5-3.13 0.26-2.08-2.01-4.09-5.09-4.48-0.36-0.05-0.7-0.07-1.04-0.07z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.2683 -.9633 .9633 .2683 2.001 163.86)",
      cx: 108.87,
      cy: 80.61,
      rx: 4.34,
      ry: 14.34,
      fill: "#1976D2"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.85 86.88s-17.31 6.72-31.67 10.82c-10.82 3.1-23.19 0.2-26.28-7.14-6.76-16.04 11.6-16.96 11.6-16.96l46.35 13.28z",
      fill: "#125BB5"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.3 59.44-10.97 4.51c-7.1 2.92-14.45 5.19-21.96 6.8l-12.95 2.78c-3.94 0.55-6.62 2.7-8.1 5.32-3.41 6.06 0.86 12.45 0.86 12.45s-2.33-6.74 0.17-11.26c1.64-2.96 5.18-4.25 10.16-3.21 3.57 0.75 7.1 2.72 10.08 4.78 5.8 3.99 11.43 7.59 17.74 10.38 1.47 0.81 3.03 1.52 4.74 2.05 5.31 1.65 10.86 2.7 16.42 2.7 26.52 0 44.2-16.81 44.2-16.81l-50.39-20.49z",
      fill: "#3CA3F4"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 47.561,
        x2: 124,
        y1: 58.362,
        y2: 58.362,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.93 82.64c-0.11 2.46-2.65 4.04-4.92 3.09-2.63-1.09-6.48-2.45-11.71-3.71-7.17-1.73-17.2-4.89-30.86-11.46-7.56-3.64-28.91-6.18-28.87-6.29 0.59-1.89 4.45-14.01 10.62-21.08 11.05-12.67 24.9-12.62 26.93-12.43 37.28 3.49 39.4 38.39 38.81 51.88z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m123.93 82.64c-0.11 2.46-2.65 4.04-4.92 3.09-2.63-1.09-6.48-2.45-11.71-3.71-7.17-1.73-17.2-4.89-30.86-11.46-7.56-3.64-26.9-6.31-28.54-5.89-1.82 0.47-3.79 1.85-3.31 0.82 2.8-5.95 7.73-13.11 11.79-18.59 5.44-7.33 13.06-12.86 21.87-15.29 2.45-0.68 4.84-1.06 6.87-0.87 37.28 3.51 39.4 38.41 38.81 51.9z"
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
    _react2.default.createElement("path", {
      d: " M93.55,30.75C62.59,27.43,56.3,67.03,56.3,67.03",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#1976D2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m91.48 30.74c20.92 4.21 13.71 54.66 13.71 54.66",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#1565C0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.01 33.71c0.51 0 0.78 0.02 0.83 0.03 14.93 1.4 25.42 8.29 31.17 20.49 4.9 10.4 5.19 22.18 4.92 28.28-0.02 0.34-0.33 0.49-0.55 0.49h-0.01c-0.23 0-0.45 0.03-0.67 0.08-0.42 0.1-1.16 0.21-2.34 0.21-2.49 0-5.63-0.49-8.84-1.39-0.92-0.26-1.86-0.55-2.79-0.88-0.32-0.11-0.66-0.17-1-0.17-0.61 0-1.22 0.19-1.73 0.55-6.5 4.61-20.03 12.33-37.51 12.33-4.84 0-10.07-0.86-15.53-2.56-0.71-0.22-1.41-0.48-2.14-0.8-0.38-0.17-0.79-0.25-1.2-0.25-0.33 0-0.65 0.05-0.97 0.16-5.35 1.83-10.15 3.35-14.29 4.53-2.57 0.74-5.25 1.11-7.97 1.11-7.03 0-12.91-2.57-14.64-6.39-0.15-0.33-0.35-0.62-0.59-0.87-0.79-1.66-2.01-5.17-0.22-8.35 0.84-1.49 2.54-3.36 5.9-3.83 0.07-0.01 0.15-0.02 0.22-0.04l12.94-2.76c7.36-1.58 14.66-3.82 21.68-6.65 0.83-0.34 1.47-1.03 1.74-1.89 2-6.41 5.69-15.03 10.02-19.99 9.51-10.89 21.3-11.44 23.57-11.44m0-3c-3.99 0-16.01 1.22-25.82 12.47-6.16 7.06-10.02 19.14-10.62 21.07-6.86 2.77-13.95 4.95-21.19 6.5l-12.95 2.78c-3.94 0.55-6.62 2.7-8.1 5.32-3.42 6.06 0.85 12.45 0.85 12.45s-0.07-0.2-0.16-0.53c2.37 5.24 9.52 8.15 17.38 8.15 2.9 0 5.9-0.4 8.79-1.22 4.73-1.35 9.79-2.99 14.44-4.58 0.78 0.34 1.6 0.65 2.45 0.92 5.31 1.65 10.86 2.7 16.42 2.7 18.19 0 32.23-7.91 39.24-12.88 0.95 0.34 1.94 0.65 2.98 0.94 3.6 1 7 1.49 9.65 1.49 1.16 0 2.18-0.29 3.01-0.29h0.02c1.82 0 3.46-1.39 3.54-3.36 0.59-13.49-1.53-48.39-38.81-51.89-0.24-0.02-0.62-0.04-1.12-0.04z",
        fill: "#424242"
      })
    )
  );
}

exports.default = BilledHat;
