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

function Cricket(props) {
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
        id: "g",
        cx: 22.911,
        cy: 50.173,
        r: 14.824,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53A35",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 25.91,
      cy: 54.88,
      rx: 14.65,
      ry: 15,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "f",
        cx: 25.91,
        cy: 54.88,
        rx: 14.65,
        ry: 15
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m17.21 67.38c0.94 0.81 1.99 1.49 3.12 2.04 5.72-1.81 15.59-6.25 20.76-16.26-0.25-1.39-0.68-2.71-1.27-3.94-4.88 12.75-17.96 17.03-22.61 18.16z",
      clipPath: "url(#a)",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d:
        "m14.46 64.78c5.74-1.96 17.97-7.38 23.43-19.12-0.61-0.84-1.31-1.62-2.07-2.32-4.93 11.98-18.04 17.31-23.06 18.96 0.49 0.88 1.06 1.71 1.7 2.48z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 35.371,
        x2: 57.544,
        y1: 66.295,
        y2: 88.468,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5B187",
        offset: 0.2086
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E49B70",
        offset: 0.7329
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.32 122.07 62.72-60.63c1.01-0.97 1.57-2.34 1.56-3.81l-3.71-13.24-4.02-4.26-13.09-4.29c-1.5-0.05-2.9 0.5-3.9 1.51l-60.91 62.15c-2.26 2.31-2.61 6.01-0.79 9.08 2.47 4.18 6.65 9.91 12.83 14.03 3.06 2.05 6.91 1.77 9.31-0.54z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.68 68.35c-2.01-2.01 7.67-14.89 24.7-33.23 16.5-17.77 25.29-26.79 25.29-26.79 3.75-3.75 9.08-4.49 11.91-1.66s2.09 8.17-1.66 11.91c0 0-9.03 8.8-26.87 25.22-18.41 16.96-31.36 26.56-33.37 24.55z",
      fill: "#C1694F"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m74.77 53.26c-2.37-2.37 4.91-12.14 17.62-26.16 12.32-13.58 18.94-20.43 18.94-20.43 2.83-2.83 7.42-2.83 10.26 0 2.83 2.83 2.83 7.42 0 10.26 0 0-6.85 6.62-20.51 18.86-14.1 12.63-23.95 19.83-26.31 17.47z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 102.48,
          x2: 110.36,
          y1: 17.855,
          y2: 25.732,
          gradientTransform:
            "matrix(1.1509 -.1509 -.1509 1.1509 -14.876 14.876)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FCB64E",
          offset: 0.1598
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F8981D",
          offset: 0.8325
        })
      ),
      _react2.default.createElement("polygon", {
        points: "101.52 39.28 88.77 26.53 106.94 8.36 119.69 21.11",
        fill: "url(#b)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m25.91 42.88c6.42 0 11.65 5.38 11.65 12s-5.22 12-11.65 12-11.65-5.38-11.65-12 5.22-12 11.65-12m0-3c-8.09 0-14.65 6.72-14.65 15s6.56 15 14.65 15 14.65-6.72 14.65-15-6.57-15-14.65-15z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117.13 7.95c0.68 0 1.64 0.15 2.34 0.84 0.93 0.93 0.89 2.33 0.79 3.08-0.22 1.58-1.11 3.26-2.42 4.56-0.09 0.09-9.21 8.96-26.81 25.16-1.45 1.33-2.85 2.61-4.23 3.86-0.84 0.76-1.18 1.94-0.88 3.03l2.66 9.48c-0.06 0.52-0.28 0.97-0.63 1.31l-62.72 60.63c-0.72 0.7-1.71 1.08-2.79 1.08-0.96 0-1.92-0.3-2.78-0.87-5.74-3.82-9.64-9.21-11.91-13.06-1.1-1.87-0.96-4.12 0.35-5.46l60.92-62.15c0.34-0.34 0.8-0.55 1.31-0.61l9.44 3.09c0.31 0.1 0.62 0.15 0.93 0.15 0.83 0 1.64-0.34 2.21-0.98 1.18-1.29 2.39-2.61 3.65-3.96 16.28-17.53 25.16-26.65 25.22-26.71 1.58-1.54 3.57-2.47 5.35-2.47m0-3c-2.48 0-5.24 1.16-7.46 3.38 0 0-8.79 9.02-25.29 26.79-1.26 1.36-2.48 2.68-3.66 3.98l-9.92-3.25h-0.18c-1.43 0-2.76 0.54-3.72 1.52l-60.93 62.13c-2.26 2.31-2.61 6.01-0.79 9.08 2.47 4.18 6.65 9.91 12.83 14.03 1.39 0.93 2.94 1.37 4.44 1.37 1.82 0 3.56-0.66 4.87-1.92l62.72-60.63c1.01-0.97 1.57-2.34 1.56-3.81l-2.79-9.94c1.38-1.25 2.79-2.54 4.24-3.87 17.84-16.43 26.87-25.22 26.87-25.22 3.75-3.75 4.49-9.08 1.66-11.91-1.15-1.17-2.73-1.73-4.45-1.73z",
        fill: "#434343"
      })
    )
  );
}

exports.default = Cricket;
