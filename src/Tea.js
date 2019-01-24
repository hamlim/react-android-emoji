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

function Tea(props) {
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
      cx: 64,
      cy: 96.92,
      rx: 60,
      ry: 27.08,
      fill: "#75352B"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 71.49c15.8 0 30.62 2.76 41.75 7.79 10.71 4.83 16.6 11.1 16.6 17.65s-5.9 12.81-16.6 17.65c-11.12 5.02-25.95 7.79-41.75 7.79s-30.62-2.76-41.75-7.79c-10.71-4.83-16.6-11.1-16.6-17.65s5.9-12.81 16.6-17.65c11.13-5.02 25.95-7.79 41.75-7.79m0-1.65c-33.14 0-60 12.12-60 27.08s26.86 27.08 60 27.08 60-12.12 60-27.08-26.86-27.08-60-27.08z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 64,
        cy: 94.09,
        r: 55.924,
        gradientTransform: "matrix(1 0 0 .457 0 51.089)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#3B1A15",
        offset: 0.25
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F1C17",
        offset: 0.4358
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4B221C",
        offset: 0.6206
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5F2C24",
        offset: 0.8045
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7A3930",
        offset: 0.9847
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 94.09,
      rx: 56.74,
      ry: 25.61,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 45.19,
        y2: 112.56,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.5306
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DEDEDE",
        offset: 0.5459
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B8B8B8",
        offset: 0.801
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B8B8B8",
        offset: 0.9898
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.11 58.1c-11.6-13.32-37.21-12.91-37.21-12.91s-25.47-0.41-37.07 12.91c-5.11 5.86-5.35 15.93-4.67 22.52 0.6 5.74 3.38 18.95 14.5 25.54 5.56 3.3 16.42 6.41 27.29 6.41s21.73-3.11 27.29-6.41c11.12-6.59 14.01-19.8 14.6-25.54 0.69-6.6 0.38-16.66-4.73-22.52z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.16 46.92c2.55 0 25.26 0.31 35.71 12.3 5.43 6.24 4.69 17.83 4.34 21.24-0.42 4.03-2.66 17.67-13.81 24.28-5.02 2.98-15.44 6.17-26.45 6.17s-21.43-3.2-26.45-6.18c-11.05-6.55-13.28-20.25-13.7-24.29-0.46-4.39-0.96-15.26 4.27-21.26 10.45-12 33.04-12.26 35.58-12.26l0.23 0.08h0.03 0.03l0.22-0.08m0-1.73h-0.25s-0.09 0-0.25 0c-2.67 0-25.89 0.36-36.82 12.91-5.11 5.86-5.35 15.93-4.67 22.52 0.6 5.74 3.38 18.95 14.5 25.54 5.56 3.3 16.42 6.41 27.29 6.41s21.73-3.11 27.29-6.41c11.12-6.59 14.01-19.8 14.6-25.54 0.69-6.59 0.37-16.66-4.74-22.52-10.93-12.54-34.27-12.91-36.95-12.91z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 63.858,
        x2: 63.858,
        y1: 49.585,
        y2: 73.756,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DEDEDE",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B8B8B8",
        offset: 0.9898
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98.69 63.99c0 8.17-11.99 15.07-35.1 15.07-21.65 0-34.55-6.9-34.55-15.07s15.59-14.8 34.83-14.8 34.82 6.62 34.82 14.8z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m98.69 64.08c0 8.17-11.99 15.07-35.1 15.07-21.65 0-34.55-6.9-34.55-15.07s15.59-14.8 34.83-14.8 34.82 6.62 34.82 14.8z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.064,
        x2: 64.064,
        y1: 60.569,
        y2: 87.485,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7CB324",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#76A724",
        offset: 0.1937
      }),
      _react2.default.createElement("stop", {
        stopColor: "#678825",
        offset: 0.5417
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4E5726",
        offset: 0.9898
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.67 70.87c0 5.64-14.15 10.07-31.6 10.07s-31.6-4.43-31.6-10.07 14.15-10.21 31.6-10.21 31.6 4.57 31.6 10.21z",
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.35 46.92c-1.28 4.29 2.83 9.06 5.32 11.33 0.28 0.25 0.05 0.71-0.3 0.62-3.06-0.76-8.51-2.21-10.48-8.26-1.18-3.63 0.56-7.59 3.88-13.3 1.95-3.41 2.88-6.55 3.14-10.27 0.3-3.86-0.66-6.76-2.31-8.69-0.26-0.31 0.06-0.75 0.4-0.56 2.86 1.54 6.14 4.43 6.94 9.07 0 0.01 0 0.03 0.01 0.05 0.84 8.03-4.27 12.23-6.6 20.01z",
      fill: "#78AC24",
      opacity: 0.3
    }),
    _react2.default.createElement("path", {
      d:
        "m67.07 49.16c-1.81 6.66 4.7 13.84 8.62 17.24 0.43 0.38 0.11 1.09-0.44 0.97-4.74-1.06-13.18-3.07-16.44-12.32-1.95-5.54 0.57-11.7 5.47-20.63 2.87-5.32 4.18-10.2 4.43-15.93 0.31-5.95-1.28-10.38-3.89-13.29-0.41-0.46 0.06-1.16 0.6-0.88 4.46 2.26 9.63 6.59 11.04 13.7 0 0.02 0.01 0.05 0.01 0.07 1.58 12.35-6.12 19.01-9.4 31.07z",
      fill: "#79AC24",
      opacity: 0.3
    })
  );
}

exports.default = Tea;
