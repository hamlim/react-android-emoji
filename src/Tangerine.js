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

function Tangerine(props) {
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
        id: "c",
        cx: 50.667,
        cy: 66.333,
        r: 57.936,
        gradientTransform: "matrix(1 -.0049899 .0049899 1 -.3983 .3294)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD03D",
        offset: 0.000015563
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FA8100",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.1 36.8s-13.68-0.83-22.58 1.87-23.61 15.76-26.9 28.9-8.44 54.27 48.3 56.31c56.73 2.05 54.11-39.67 54.02-42.93s-0.64-31.66-24.59-39.87c-21.41-7.33-22.77-5.26-28.25-4.28z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m71.74 38.77c3.87 0 10.23 1.59 20.64 5.16 20.17 6.91 22.36 30.07 22.56 37v0.11l0.01 0.26c0.22 6.21-0.73 17.99-9.61 27.19-7.98 8.27-20.58 12.47-37.45 12.47-1.26 0-2.56-0.02-3.86-0.07-19.34-0.7-32.94-6.1-40.43-16.07-4.06-5.4-6.32-12.13-6.73-20.01-0.37-7.1 0.89-13.39 1.67-16.51 3.02-12.06 16.95-24.36 24.86-26.76 3.95-1.2 9.91-1.86 16.77-1.86 2.81 0 4.74 0.11 4.76 0.12 0.06 0 0.12 0.01 0.18 0.01 0.18 0 0.35-0.02 0.52-0.05 0.76-0.14 1.43-0.29 2.07-0.43 1.38-0.32 2.47-0.56 4.04-0.56m0-3c-2.72 0-4.31 0.62-6.64 1.03 0 0-1.99-0.12-4.94-0.12-4.79 0-12.13 0.32-17.64 1.99-8.89 2.7-23.61 15.76-26.9 28.9s-8.44 54.27 48.3 56.31c1.35 0.05 2.68 0.07 3.97 0.07 52.65 0 50.14-39.82 50.05-43.01-0.09-3.26-0.64-31.66-24.59-39.87-12.27-4.19-17.96-5.3-21.61-5.3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.63 10.38c0.04-0.73 0.03-1.27-0.05-1.46-0.28-0.69-3.69-0.61-5.5 1 0 0 0.15 0.55 0.37 1.37 1.67 0.18 3.74-0.07 5.18-0.91z",
      fill: "#244500"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.86 42.37 0.12-0.05s-0.08-0.01-0.21-0.02c-0.47-0.32-1.44-0.59-2.7-0.74-0.75-0.39-1.36-0.99-1.41-1.89-0.14-2.42-0.7-5.87-1.39-7.83-0.7-1.96-0.42-3.8 0.84-6.68 1.25-2.88 1.95-3.34 2.65-3.8s-2.09-1.84-1.81-4.15c0.2-1.67 0.59-4.91 0.68-6.84-1.44 0.84-3.51 1.09-5.18 0.91 0.56 2.15 1.57 6.21 1.47 7.46-0.14 1.73-2.68 9.06-2.82 10.9s2.37 2.42 2.23 6.1c-0.1 2.61 0.28 4.62 0.07 5.79-1.85 0.21-3.15 0.66-3.15 1.19 0 0.72 2.43 1.31 5.43 1.31s5.43-0.59 5.43-1.31c-0.01-0.12-0.11-0.24-0.25-0.35z",
      fill: "#478800"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 12.939,
        x2: 65.667,
        y1: 38.778,
        y2: 38.778,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.1235
      }),
      _react2.default.createElement("stop", {
        stopColor: "#73A743",
        offset: 0.3217
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8EBD60",
        offset: 0.6685
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AED581",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.33 32.33c-1.1-1.24-6.72-2.47-8.66-2.87-0.83-3.28-4.42-11.39-19.71-11.57-19.18-0.22-28.09 20.84-20.08 41.77 0 0 3.65-18.29 17.46-21.26 12.4-2.66 18.96-1.78 21.75-5.95 4.91-0.41 9.07 3.05 9.07 3.05l1.5-1.67c0.01 0 0.01 0-1.33-1.5z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m35.66 20.89h0.26c13.12 0.15 16.14 6.56 16.84 9.3 0.02 0.09 0.05 0.18 0.08 0.27-0.09 0.1-0.17 0.2-0.24 0.32-1.09 1.63-3.8 2.08-9.34 2.88-2.85 0.41-6.4 0.92-10.55 1.81-8.44 1.82-13.5 8.37-16.38 14.12-1.12-7.84 0.23-15.33 3.97-20.76 3.57-5.19 8.88-7.94 15.36-7.94m0-3c-18.98 0-27.75 20.94-19.78 41.77 0 0 3.65-18.29 17.46-21.26 12.4-2.66 18.96-1.78 21.75-5.95 0.27-0.02 0.54-0.03 0.81-0.03 4.55 0 8.26 3.08 8.26 3.08l1.5-1.67-1.33-1.5c-1.1-1.24-6.72-2.47-8.66-2.87-0.83-3.28-4.42-11.39-19.71-11.57h-0.3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.558,
        x2: 119.3,
        y1: 21.48,
        y2: 21.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.1235
      }),
      _react2.default.createElement("stop", {
        stopColor: "#73A743",
        offset: 0.3217
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8EBD60",
        offset: 0.6685
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AED581",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.99 11.27c-2.67 2.94-13.9 0.4-28.2 0.94-10.39 0.39-15.34 5.64-17.28 8.48-2.43 0.53-6.68 1.59-7.63 2.65l-1.33 1.5 1.5 1.67s3.08-2.55 7.06-3.02c4.22 6.52 7.61 9.38 20.22 8.23 13.23-1.21 28.34-23.39 25.66-20.45z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121.25 13.25m-26.22 1.88c3.86 0 7.45 0.18 10.62 0.34 2.38 0.12 4.46 0.23 6.32 0.24-4.79 5.4-12.39 12.42-18.91 13.02-1.74 0.16-3.25 0.23-4.63 0.23-7.14 0-9.43-2.01-12.45-6.57 0-0.01 0.01-0.01 0.01-0.02 1.72-2.54 5.95-6.84 14.91-7.17 1.35-0.05 2.7-0.07 4.13-0.07m24.26-4.13c-0.03 0-0.13 0.09-0.3 0.27-1.02 1.12-3.3 1.45-6.51 1.45-4.34 0-10.41-0.59-17.44-0.59-1.38 0-2.79 0.02-4.24 0.08-10.39 0.39-15.34 5.64-17.28 8.48-2.43 0.53-6.68 1.59-7.63 2.65l-1.33 1.5 1.5 1.67s3.08-2.55 7.06-3.02c3.61 5.58 6.62 8.48 15.32 8.48 1.46 0 3.09-0.08 4.9-0.25 12.4-1.13 26.46-20.72 25.95-20.72z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Tangerine;