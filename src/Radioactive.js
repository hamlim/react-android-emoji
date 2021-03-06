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

function Radioactive(props) {
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
        id: "d",
        x1: 64,
        x2: 64,
        y1: 3.1667,
        y2: 124.88,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDC28",
        offset: 0.419
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.13 24.37c0.34 0 0.68 0.09 0.98 0.29 12.65 8.02 21.22 21.9 21.85 37.83 0.04 1.02-0.77 1.88-1.79 1.88h-32.66c-0.87 0-1.64-0.62-1.76-1.49-0.39-2.83-1.87-5.31-4.01-7-0.71-0.57-0.94-1.55-0.49-2.34l16.33-28.29c0.33-0.57 0.93-0.88 1.55-0.88m0-3c-1.71 0-3.3 0.92-4.15 2.39l-16.33 28.29c-1.2 2.07-0.68 4.67 1.22 6.19 1.6 1.27 2.62 3.06 2.9 5.06 0.32 2.33 2.36 4.08 4.74 4.08h32.66c1.29 0 2.55-0.54 3.45-1.47 0.9-0.94 1.39-2.23 1.34-3.53-0.65-16.39-9.33-31.44-23.24-40.25-0.78-0.5-1.67-0.76-2.59-0.76z"
      }),
      _react2.default.createElement("path", {
        d:
          "m39.87 24.37c0.62 0 1.22 0.31 1.55 0.89l16.33 28.29c0.46 0.79 0.23 1.77-0.49 2.34-2.13 1.69-3.62 4.17-4.01 7-0.12 0.86-0.89 1.49-1.76 1.49h-32.66c-1.02 0-1.83-0.86-1.79-1.88 0.63-15.93 9.19-29.82 21.85-37.83 0.3-0.21 0.64-0.3 0.98-0.3m0-3c-0.92 0-1.81 0.26-2.59 0.75-13.91 8.81-22.59 23.86-23.24 40.25-0.05 1.3 0.44 2.59 1.34 3.53 0.9 0.93 2.15 1.47 3.45 1.47h32.66c2.38 0 4.42-1.75 4.74-4.08 0.27-2 1.3-3.79 2.9-5.06 1.9-1.51 2.42-4.11 1.22-6.19l-16.33-28.28c-0.85-1.47-2.44-2.39-4.15-2.39z"
      }),
      _react2.default.createElement("path", {
        d:
          "m68.71 74.3c0.62 0 1.22 0.33 1.54 0.9l16.33 28.29c0.51 0.89 0.17 2.01-0.74 2.49-6.53 3.44-13.96 5.39-21.85 5.39s-15.32-1.95-21.85-5.39c-0.91-0.48-1.25-1.6-0.74-2.49l16.35-28.29c0.33-0.57 0.92-0.9 1.54-0.9 0.22 0 0.43 0.04 0.65 0.13 1.25 0.51 2.62 0.79 4.06 0.79s2.81-0.28 4.06-0.79c0.21-0.09 0.43-0.13 0.65-0.13m0-3c-0.61 0-1.21 0.12-1.78 0.35-0.93 0.37-1.92 0.57-2.93 0.57s-2-0.19-2.93-0.57c-0.57-0.23-1.16-0.35-1.78-0.35-1.7 0-3.29 0.92-4.14 2.4l-16.33 28.29c-0.66 1.14-0.82 2.46-0.45 3.72 0.36 1.25 1.23 2.32 2.39 2.93 7.13 3.75 15.16 5.74 23.24 5.74s16.12-1.98 23.24-5.74c1.16-0.61 2.03-1.68 2.39-2.93 0.36-1.26 0.2-2.58-0.45-3.72l-16.33-28.29c-0.86-1.48-2.44-2.4-4.14-2.4z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 57.14c3.99 0 7.23 3.24 7.23 7.23s-3.24 7.23-7.23 7.23-7.23-3.24-7.23-7.23 3.24-7.23 7.23-7.23m0-3c-5.64 0-10.23 4.59-10.23 10.23s4.59 10.23 10.23 10.23 10.23-4.59 10.23-10.23-4.59-10.23-10.23-10.23z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 90.488,
        x2: 90.488,
        y1: 22.5,
        y2: 113.37,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F3F3F",
        offset: 0.4947
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.51 64.37h32.66c1.02 0 1.83-0.86 1.79-1.88-0.63-15.93-9.19-29.82-21.85-37.83-0.87-0.55-2.02-0.29-2.53 0.6l-16.33 28.29c-0.46 0.79-0.23 1.77 0.49 2.34 2.13 1.69 3.62 4.17 4.01 7 0.11 0.86 0.89 1.48 1.76 1.48z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 37.512,
        x2: 37.512,
        y1: 22.5,
        y2: 113.37,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F3F3F",
        offset: 0.4947
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m57.75 53.55-16.33-28.29c-0.51-0.89-1.66-1.15-2.53-0.6-12.65 8.02-21.22 21.9-21.85 37.83-0.04 1.02 0.77 1.88 1.79 1.88h32.66c0.87 0 1.64-0.62 1.76-1.49 0.39-2.83 1.87-5.31 4.01-7 0.72-0.56 0.95-1.54 0.49-2.33z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 22.5,
        y2: 113.37,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F3F3F",
        offset: 0.4947
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 75.22c-1.44 0-2.81-0.28-4.06-0.79-0.81-0.33-1.75 0.01-2.19 0.77l-16.33 28.29c-0.51 0.89-0.17 2.01 0.74 2.49 6.53 3.44 13.96 5.39 21.85 5.39s15.32-1.95 21.85-5.39c0.91-0.48 1.25-1.6 0.74-2.49l-16.35-28.29c-0.44-0.76-1.37-1.11-2.19-0.77-1.25 0.5-2.62 0.79-4.06 0.79z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64.37,
      r: 7.23,
      fill: "url(#a)"
    })
  );
}

exports.default = Radioactive;
