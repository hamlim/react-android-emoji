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

function Lips(props) {
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
        x1: 64,
        x2: 64,
        y1: 38.902,
        y2: 103.02,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E91E63",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 0.7601
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.12 103.59c-24.08 0-34.53-11.8-43.6-20.14-8.19-7.53-16.14-11.68-16.14-11.68s30.68-43.23 47.36-43.23c5.87 0 9.23 2.27 10.93 3.99 0.84 0.85 2.19 0.89 3.07 0.08 1.91-1.76 5.49-4.2 10.72-4.2 17.1 0 47.16 43.73 47.16 43.73s-6.21 3.04-16.54 11.31c-9.24 7.41-21.31 20.14-42.96 20.14z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 63.938,
        x2: 63.938,
        y1: 43.543,
        y2: 60.137,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.1071
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.4553
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.88 76.34c-31.29 0-46.07-6.5-46.07-6.5s20.31-26.53 46.07-26.53 46.2 26.45 46.2 26.45-14.91 6.58-46.2 6.58z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m63.88 76.34c-31.29 0-46.07-6.5-46.07-6.5s20.31-26.53 46.07-26.53 46.2 26.45 46.2 26.45-14.91 6.58-46.2 6.58z"
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
        x1: 63.994,
        x2: 63.994,
        y1: 50.542,
        y2: 72.417,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#632627",
        offset: 0.5447
      }),
      _react2.default.createElement("stop", {
        stopColor: "#522627",
        offset: 0.8929
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m126.37 81.81c0 20.71-27.93 37.5-62.37 37.5s-62.38-16.79-62.38-37.5c0-11.05 30.6-27.85 30.6-27.85s8.23 3.61 31.77 3.61 32.28-3.34 32.28-3.34 30.1 16.68 30.1 27.58z",
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m76.46 31.41c3.48 0 11.71 2.7 27.71 20.81 6.61 7.48 12.26 15.05 15.07 18.94-2.89 1.73-7.71 4.89-14.04 9.95-1.18 0.94-2.38 1.95-3.65 3.02-8.72 7.33-19.58 16.46-37.44 16.46-20.94 0-30.7-9.16-39.32-17.24-0.77-0.72-1.52-1.42-2.26-2.1-5.38-4.94-10.62-8.46-13.78-10.4 2.86-3.84 8.59-11.29 15.26-18.68 16.2-17.95 24.32-20.63 27.71-20.63 4.73 0 7.4 1.69 8.8 3.1 0.99 1 2.31 1.55 3.71 1.55 1.31 0 2.56-0.49 3.52-1.37 1.71-1.56 4.58-3.41 8.71-3.41m0-3c-5.23 0-8.82 2.44-10.72 4.2-0.42 0.39-0.95 0.58-1.48 0.58-0.57 0-1.15-0.22-1.59-0.66-1.7-1.71-5.06-3.99-10.93-3.99-16.68 0-47.36 43.23-47.36 43.23s7.95 4.15 16.14 11.68c9.07 8.34 19.52 20.14 43.6 20.14 21.65 0 33.72-12.73 42.96-20.14 10.33-8.27 16.54-11.31 16.54-11.31s-30.06-43.73-47.16-43.73z",
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
          "m63.88 46.31c18.7 0 34.79 15.25 41.04 22.06-1.77 0.53-4.14 1.17-7.11 1.8-6.79 1.44-18.18 3.17-33.93 3.17-21.22 0-34.74-3.07-40.92-4.9 6.21-6.84 22.23-22.13 40.92-22.13m0-3c-25.76 0-46.07 26.53-46.07 26.53s14.78 6.5 46.07 6.5 46.19-6.58 46.19-6.58-20.43-26.45-46.19-26.45z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Lips;
