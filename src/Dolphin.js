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

function Dolphin(props) {
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
        id: "b",
        x1: 83.852,
        x2: 100.41,
        y1: 22.218,
        y2: 5.1947,
        gradientTransform:
          "matrix(1.1392 .00062564 .00062564 1.1374 -14.137 -1.4203)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#0277BD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1D8BCA",
        offset: 0.2465
      }),
      _react2.default.createElement("stop", {
        stopColor: "#63BEEB",
        offset: 0.7741
      }),
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.9918
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.06 28.8c-5.32 0-20.24-9.21-22.72-11.73 3.01-6.61 10.09-10.49 21.62-11.86 0.54-0.06 1.13-0.1 1.76-0.1 5.28 0 12.09 2.13 15.6 3.59-5.17 1.88-10.7 6.25-13.74 11.08-1.88 2.99-2.55 5.75-1.93 7.99 0.18 0.66 0.11 0.9 0.1 0.93-0.02 0.01-0.2 0.1-0.69 0.1z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.72 6.53c3.71 0 8.36 1.14 11.88 2.29-4.73 2.52-8.89 6.55-11.21 10.22-1.88 2.98-2.66 5.82-2.28 8.27-5.03-0.88-16.53-7.74-20.04-10.57 3.04-5.57 9.62-8.89 20.04-10.12 0.49-0.06 1.03-0.09 1.61-0.09m0-2.81c-0.67 0-1.32 0.03-1.93 0.11-12.09 1.42-19.86 5.6-23.02 13.32-0.56 1.36 17.92 13.06 24.28 13.06 1.67 0 2.5-0.8 1.95-2.81-1.65-5.94 8.68-16.55 17.42-18.09 2.36-0.41-10.31-5.6-18.7-5.59z",
      fill: "#0277BD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 37.068,
        x2: 93.523,
        y1: 15.671,
        y2: 122.51,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.0082272
      }),
      _react2.default.createElement("stop", {
        stopColor: "#59B7E7",
        offset: 0.3437
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0277BD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.38 26.6c-24.33-19.84-89.24-25.55-92.38 30.92-0.04 0.64-0.23 1.25-0.73 1.59-2.82 1.9-10.89 10.03-7.32 14.68 1.72 2.24 2.31 0.52 12.97-2.18 11.64-2.95 15.71 6.95 35.54-1.59 0.36-0.16 5.45 23.58 20.74 23.58 4.29 0-4.64-16.26 0.36-25.4 43.24 8.96 10.73 67.12-21.79 38.54-0.71-0.62-2.33-17.07-13.08-22.23-2.29-1.1 2.89 15.64 0.56 21.78-3.27 8.63-18.41 11.54-14.78 13.76 5.83 3.55 17.46 1.43 24.42-3.66 17.15 6.7 29.14 12.12 48.24-0.54 23.07-15.29 39.14-63.26 7.25-89.25z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m5.58 74.73c1.41 1.11 3.04-0.5 12.34-2.86 10.7-2.71 17.34 6 35.2-1.5-11.25-12.51-41.26-7.15-47.54 4.36z",
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("path", {
      d:
        "m101.9 95.74c4.06-14.66-6.65-22.31-18.04-25.73 18.66 9.67 13.22 34.48-2.64 42.23 5.47-0.89 16.57-1.67 20.68-16.5z",
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("circle", {
      cx: 29.92,
      cy: 48.93,
      r: 6.58,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 29.92,
      cy: 48.93,
      r: 3.43
    }),
    _react2.default.createElement("path", {
      d:
        "m61.73 15.45c15.5 0 31.94 5.23 41.88 13.33 14.85 12.1 17.31 27.86 16.76 38.94-0.9 18.27-10.68 37.09-23.78 45.77-7.38 4.89-13.92 7.17-20.57 7.17-7.46 0-14.82-2.88-23.33-6.22l-1.76-0.69c-0.33-0.13-0.68-0.19-1.02-0.19-0.59 0-1.17 0.18-1.66 0.54-4.06 2.97-10.03 4.89-15.21 4.89-0.99 0-1.92-0.07-2.77-0.21 0.01-0.01 0.03-0.01 0.04-0.02 4.13-2.26 10.37-5.67 12.58-11.48 1.55-4.09 0.5-10.99-0.34-16.54-0.04-0.26-0.08-0.53-0.12-0.8 4.45 4.63 6.2 11.95 7.04 15.48 0.46 1.92 0.65 2.71 1.46 3.42 6.35 5.58 13.36 8.53 20.26 8.53 14.99 0 25.62-13.17 26.88-25.38 1.61-15.74-10.78-24.04-22.92-26.56-0.19-0.04-0.38-0.06-0.57-0.06-1.01 0-1.97 0.55-2.47 1.46-3.3 6.04-1.59 14.04-0.35 19.89 0.27 1.25 0.6 2.8 0.76 3.92-6.57-0.99-11.91-7.79-15.91-20.27-0.48-1.49-1.02-3.19-3.13-3.19-0.38 0-0.76 0.08-1.12 0.23-5.2 2.24-9.69 3.33-13.73 3.33-3.14 0-5.75-0.65-8.28-1.28-2.48-0.62-5.05-1.26-7.98-1.26-1.72 0-3.4 0.21-5.14 0.66-3.86 0.98-6.47 1.85-8.2 2.42-0.73 0.24-1.48 0.49-1.96 0.62-0.16-0.26-0.28-0.67-0.16-1.37 0.51-3.1 4.77-7.66 6.93-9.1 1.18-0.79 1.88-2.13 1.97-3.77 2.12-38.1 32.82-42.21 45.92-42.21m-19.81 69.96m19.81-72.77c-23.73 0-46.88 11.71-48.73 44.88-0.04 0.64-0.23 1.25-0.73 1.59-2.82 1.9-10.89 10.03-7.32 14.68 0.55 0.72 0.99 1.03 1.68 1.03 1.46 0 4.05-1.38 11.29-3.22 1.61-0.41 3.07-0.57 4.45-0.57 5.45 0 9.61 2.54 16.26 2.54 3.86 0 8.56-0.86 14.84-3.56 0.39 0 5.5 23.58 20.73 23.58 4.29 0-4.64-16.26 0.36-25.4 34.83 7.22 20.5 46.37-3.38 46.37-5.76 0-12.08-2.28-18.4-7.83-0.71-0.62-2.33-17.07-13.08-22.23-0.07-0.03-0.14-0.05-0.2-0.05-1.77 0 3.01 15.89 0.76 21.83-3.27 8.63-18.41 11.54-14.78 13.76 1.98 1.21 4.64 1.76 7.56 1.76 5.65 0 12.27-2.07 16.87-5.43 9.6 3.75 17.59 7.1 26.11 7.1 6.7 0 13.72-2.07 22.12-7.64 23.05-15.28 39.13-63.24 7.24-89.24-10.04-8.17-26.99-13.95-43.65-13.95z",
      fill: "#0277BD"
    })
  );
}

exports.default = Dolphin;
