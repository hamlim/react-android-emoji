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

function LockWithInkPen(props) {
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
        "M61.53,78.36h0.77c5.55,0,10.05-4.5,10.05-10.05V29.99c0-5.69-4.65-10.34-10.34-10.34H42.09 c-5.59,0-10.17,4.58-10.17,10.17v20.49c0,2.13-1.73,3.86-3.86,3.86h-7.67c-2.13,0-3.86-1.73-3.86-3.86V29.99 c0-14.15,11.58-25.74,25.74-25.74H62.3c14.05,0,25.45,11.39,25.45,25.45v38.38c0,14.12-11.55,25.68-25.68,25.68h-0.54V78.36z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.3 7.26c12.38 0 22.45 10.07 22.45 22.45v38.38c0 11.67-8.87 21.31-20.22 22.54v-9.46c6.14-1.06 10.82-6.42 10.82-12.86v-38.32c0-7.35-5.98-13.34-13.34-13.34h-19.92c-7.26 0-13.17 5.91-13.17 13.17v20.49c0 0.48-0.39 0.86-0.86 0.86h-7.67c-0.48 0-0.86-0.39-0.86-0.86v-20.32c0-12.54 10.2-22.74 22.74-22.74h20.03m0-2.99h-20.04c-14.15 0-25.74 11.58-25.74 25.74v20.33c0 2.13 1.73 3.86 3.86 3.86h7.67c2.13 0 3.86-1.73 3.86-3.86v-20.5c0-5.59 4.58-10.17 10.17-10.17h19.91c5.69 0 10.34 4.65 10.34 10.34v38.32c0 5.55-4.5 10.05-10.05 10.05h-0.77v15.4h0.54c14.12 0 25.68-11.55 25.68-25.68v-38.38c0.02-14.06-11.38-25.45-25.43-25.45z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 52.136,
        x2: 52.136,
        y1: 123.21,
        y2: 50.192,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 0.0053611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.02 123.54h-77.77c-4 0-7.25-3.25-7.25-7.25v-59.1c0-4 3.25-7.25 7.25-7.25h77.78c4 0 7.25 3.25 7.25 7.25v59.1c-0.01 4.01-3.25 7.25-7.26 7.25z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m91.02 52.94c2.34 0 4.25 1.91 4.25 4.25v59.1c0 2.34-1.91 4.25-4.25 4.25h-77.77c-2.34 0-4.25-1.91-4.25-4.25v-59.1c0-2.34 1.91-4.25 4.25-4.25h77.77m0-3h-77.77c-4 0-7.25 3.25-7.25 7.25v59.1c0 4 3.25 7.25 7.25 7.25h77.78c4 0 7.25-3.25 7.25-7.25v-59.1c-0.01-4-3.25-7.25-7.26-7.25z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 73.441,
        x2: 73.441,
        y1: 66.804,
        y2: 105.4,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124 66.42c-12 0.01-31.01-0.44-46.37-3.5-24.43-4.86-28.26 10.4-50.32 17.33-4.56 1.43-4.43 3.91-4.43 3.91s-0.19 2.48 4.37 3.91c22.06 6.93 25.96 22.19 50.39 17.33 15.36-3.06 34.36-3.52 46.36-3.5v-35.48z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.23 85.31h-56.15c-0.68 0-1.23-0.55-1.23-1.23s0.55-1.23 1.23-1.23h56.18c0.61-3.46 3.63-6.08 7.27-6.08 4.09 0 7.4 3.32 7.4 7.39 0 4.09-3.31 7.4-7.4 7.4-3.7 0-6.75-2.71-7.3-6.25z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m87.52 79.74c2.44 0 4.42 1.98 4.42 4.41 0 2.44-1.98 4.42-4.44 4.42-2.18 0-4-1.56-4.33-3.72l-0.12-0.76 0.13-0.73c0.38-2.09 2.2-3.62 4.34-3.62m0-2.97c-3.64 0-6.66 2.62-7.27 6.08h-56.17c-0.68 0-1.23 0.55-1.23 1.23s0.55 1.23 1.23 1.23h56.16c0.55 3.53 3.59 6.24 7.27 6.24h0.02 0.02c4.08 0 7.38-3.31 7.38-7.4-0.01-4.07-3.32-7.38-7.41-7.38z",
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
          "m68.72 64.98c2.52 0 5.2 0.29 8.18 0.88 11.34 2.26 26.06 3.45 43.81 3.55v29.49c-17.74 0.1-32.47 1.3-43.81 3.55-2.98 0.59-5.66 0.88-8.18 0.88-8.69 0-13.94-3.49-20.58-7.9-5.28-3.51-11.27-7.49-20-10.23-1.2-0.38-1.8-0.79-2.09-1.05 0.29-0.26 0.89-0.67 2.09-1.05 8.72-2.74 14.71-6.72 20-10.23 6.63-4.4 11.88-7.89 20.58-7.89m0-3c-16.99 0-22.36 12.26-41.48 18.27-4.56 1.43-4.39 3.91-4.39 3.91s-0.17 2.48 4.39 3.91c19.12 6.01 24.49 18.27 41.48 18.27 2.62 0 5.51-0.29 8.76-0.94 15.16-3.02 33.56-3.5 45.73-3.5h0.49v-35.48h-0.49c-12.17 0-30.58-0.49-45.73-3.5-3.26-0.65-6.15-0.94-8.76-0.94z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 157.97,
        x2: 157.97,
        y1: 11.757,
        y2: 18.061,
        gradientTransform: "matrix(4.4897e-11 1 1 -4.4897e-11 98.698 -73.86)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 106.29v-44.36c-2.72 0-4.93 2.21-4.93 4.93v34.5c0 2.72 2.21 4.93 4.93 4.93z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 120,
        x2: 120,
        y1: 59.836,
        y2: 114.78,
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
    _react2.default.createElement("polygon", {
      points: "124 63.37 116 61.98 116 106.34 124 104.94",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m118 64.36 4 0.7v38.21l-4 0.7v-39.61m-2-2.38v44.35l8-1.39v-41.57l-8-1.39z",
        fill: "#eee"
      })
    )
  );
}

exports.default = LockWithInkPen;
