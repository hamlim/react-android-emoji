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

function Sandal(props) {
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
        x1: 99.935,
        x2: 99.935,
        y1: 121.23,
        y2: 100.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0.169
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BCAAA4",
        offset: 0.8438
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.25 100.44h8.95c1.74 0 3.24 1.22 3.58 2.93l2.63 13.26 0.1 4.53-21.04 0.08-0.11-4.55 2.29-13.24c0.32-1.74 1.83-3.01 3.6-3.01z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.2 102.44c0.78 0 1.47 0.56 1.62 1.32l2.59 13.09 0.05 2.32-17.04 0.06-0.06-2.39 2.26-13.03c0.14-0.79 0.83-1.36 1.63-1.36h8.95m0-2.01h-8.95c-1.77 0-3.28 1.27-3.6 3.01l-2.29 13.24 0.11 4.55 21.04-0.08-0.1-4.53-2.63-13.26c-0.34-1.71-1.84-2.93-3.58-2.93z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 25.501,
        x2: 25.501,
        y1: 94.25,
        y2: 130.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795548",
        offset: 0.1734
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A1887F",
        offset: 0.8527
      })
    ),
    _react2.default.createElement("polygon", {
      points: "41.39 123.96 12.63 123.96 8.03 89.34 42.98 89.34",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 21.75,
        cy: 45,
        r: 46.524,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BCAAA4",
        offset: 0.1562
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0.831
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m53.81 46.91h-37.68c-1.66 0-3 1.34-3 3v0.55c0 1.66 1.34 3 3 3h37.69c1.66 0 3-1.34 3-3v-0.55c-0.01-1.66-1.35-3-3.01-3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.902,
        x2: 64.902,
        y1: 124,
        y2: 84.798,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795548",
        offset: 0.1734
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A1887F",
        offset: 0.8527
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m117.61 122.95-4.1 1.02-29.29 0.03c-2.74 0-5.4-0.89-7.58-2.54l-20.65-18.77c-7.97-5.98-17.66-9.21-27.62-9.21h-18.26c-2.27 0-4.15-1.77-4.29-4.03l-0.01-0.09c-0.15-2.47 1.81-4.56 4.29-4.56h18.62c10.52 0 20.78 3.22 29.42 9.21l22.79 19.01c2.11 1.49 4.63 2.29 7.21 2.29l23.48 0.04 9.82-1h0.07c2.31 0.04 3.34 2.94 1.68 4.55-1.76 1.72-4.05 3.68-5.58 4.05z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m53.81 48.91c0.55 0 1 0.45 1 1v0.55c0 0.55-0.45 1-1 1h-37.68c-0.55 0-1-0.45-1-1v-0.55c0-0.55 0.45-1 1-1h37.68m0-2h-37.68c-1.66 0-3 1.34-3 3v0.55c0 1.66 1.34 3 3 3h37.69c1.66 0 3-1.34 3-3v-0.55c-0.01-1.66-1.35-3-3.01-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m9.14 53.63-2.49 15.67c-0.47 2.95-1 5.9-1.8 8.77-2.85 10.25 1.81 17.38 9.46 17.38h18.03c3.38 0 6.74 0.39 10.03 1.15l5.83 1.36-22.02-29.67c-3.54-4.78-6.13-10.19-7.62-15.95l-1.4-5.42c-3.98-0.08-7.4 2.78-8.02 6.71z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m15.65 49.06 0.97 3.77c1.56 6.03 4.24 11.63 7.95 16.64l13.06 17.6c0.29 0.39 0.72 0.67 1.2 0.77 6.55 1.37 12.64 3.97 18.09 7.74l22.72 18.93c0.04 0.03 0.08 0.07 0.13 0.1 2.42 1.7 5.31 2.61 8.36 2.61l23.48-0.04c0.08 0 0.16 0 0.23-0.01l9.69-1.16c0.16 0.02 0.29 0.14 0.39 0.36 0.09 0.21 0.16 0.65-0.13 0.93-0.88 0.85-3.55 3.44-4.66 3.71l-3.87 0.96-29.05 0.03c-2.25 0-4.49-0.74-6.29-2.08l-20.58-18.71c-0.05-0.04-0.09-0.08-0.14-0.12-2.53-1.9-5.29-3.57-8.18-4.94-0.13-0.06-0.27-0.11-0.41-0.14l-5.51-1.28c-0.15-0.03-0.3-0.05-0.45-0.05-0.43 0-0.86 0.14-1.21 0.41-0.47 0.36-0.76 0.91-0.79 1.5l-1.17 25.41h-25.1l-3.78-28.46c-0.08-0.57-0.39-1.08-0.87-1.4-3.5-2.34-4.63-7.52-2.96-13.54 0.87-3.12 1.42-6.3 1.85-9l2.49-15.66c0.39-2.45 2.21-4.34 4.54-4.88m1.36-2.15c-3.91 0-7.26 2.85-7.88 6.72l-2.48 15.66c-0.47 2.95-1 5.9-1.8 8.77-2.04 7.34-0.23 13.07 3.77 15.74l4.01 30.2h28.76l1.25-27.32 5.51 1.28c2.75 1.31 5.38 2.89 7.84 4.74l20.65 18.77c2.18 1.65 4.84 2.54 7.57 2.54h0.01l29.29-0.03 4.1-1.02c1.53-0.37 3.82-2.51 5.57-4.21 1.66-1.61 0.63-4.73-1.68-4.73h-0.07l-9.82 1.18-23.48 0.04c-2.58 0-5.1-0.76-7.21-2.25l-22.78-19c-5.72-3.97-12.15-6.7-18.89-8.11l-13.06-17.6c-3.54-4.78-6.13-10.19-7.62-15.95l-1.4-5.42h-0.16z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 31.518,
        x2: 43.518,
        y1: 50.184,
        y2: 50.184,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795548",
        offset: 0.1734
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A1887F",
        offset: 0.8527
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.09 54.18h-5.15c-1.89 0-3.42-1.53-3.42-3.42v-1.15c0-1.89 1.53-3.42 3.42-3.42h5.15c1.89 0 3.42 1.53 3.42 3.42v1.15c0.01 1.89-1.53 3.42-3.42 3.42z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m40.09 48.18c0.79 0 1.42 0.64 1.42 1.42v1.15c0 0.79-0.64 1.42-1.42 1.42h-5.15c-0.79 0-1.42-0.64-1.42-1.42v-1.15c0-0.79 0.64-1.42 1.42-1.42h5.15m0-2h-5.15c-1.89 0-3.42 1.53-3.42 3.42v1.15c0 1.89 1.53 3.42 3.42 3.42h5.15c1.89 0 3.42-1.53 3.42-3.42v-1.15c0.01-1.88-1.53-3.42-3.42-3.42z",
      fill: "#FFCC80"
    })
  );
}

exports.default = Sandal;
