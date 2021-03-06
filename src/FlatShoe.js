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

function FlatShoe(props) {
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
        "m8.66 117.28v3.21c0 0.46 0.3 0.87 0.74 0.99 1.98 0.56 7.68 2 14.13 2 6.16 0 11.53-0.11 13.67-0.17 0.56-0.01 1-0.47 1-1.03 0-0.57 0.45-1.03 1.02-1.03 2.96-0.03 11.68-0.08 16.36 0.4 5.7 0.58 22.21 2.99 31.06 2.42 10.54-0.69 19.39-3.72 24.32-5.89 4.92-2.17 8.81-3.22 12.24-7.39 0.84-1.02 0.91-2.96 0.63-3.88-0.15-0.46-0.7-1.17-1.19-1.12l-113.04 10.46c-0.53 0.05-0.94 0.5-0.94 1.03z",
      fill: "#734F2B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 95.928,
        y2: 125,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#87FFDE",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#63B59D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m7.55 90.07c-4.69 0.74-5.07 25.2 0.87 27.52s15.64 2.46 29.26 2.46 25.41 1.38 29.5 1.98c8.74 1.28 24.46 1.78 35.07-1.84 10.42-3.55 18.62-6.95 21.42-11.2 0 0 2.61-4.34-6.57-8.21-7.2-3.03-13.03-4.15-24.72-2.8-11.68 1.35-26.55 1.26-37.95-0.58s-39.59-8.49-46.88-7.33z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m7.55 90.07c-4.69 0.74-5.07 25.2 0.87 27.52s15.64 2.46 29.26 2.46 25.44 1.21 29.5 1.98 24.91 1.93 35.15-2.12 18.54-6.66 21.34-10.91c0 0 2.61-4.34-6.57-8.21-7.2-3.03-13.03-4.15-24.72-2.8-11.68 1.35-26.55 1.26-37.95-0.58s-39.59-8.5-46.88-7.34z"
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
        x1: 15.773,
        x2: 91.82,
        y1: 81.944,
        y2: 108.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#72D1B4",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#66BBA1",
        offset: 0.1976
      }),
      _react2.default.createElement("stop", {
        stopColor: "#488472",
        offset: 0.7384
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3C6E5F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m7.9 89.73c-1.5 0.56-4.42 1.32 18.43 8.45 22.83 7.13 46.83 12.07 60.93 8.21s14.92-9.34 6.13-8.72c-6.86 0.49-79.25-8.44-79.25-8.44s-4.25-0.25-6.24 0.5z",
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
          "m8.79 92.81m0.96 0.2c6.25 0 19.99 2.73 31.02 4.92 5.33 1.06 9.93 1.97 13.27 2.51 6.24 1 13.66 1.54 21.45 1.54 6.02 0 12.01-0.32 17.31-0.94 3.18-0.37 5.9-0.55 8.32-0.55 6.2 0 10.3 1.2 14.89 3.13 3.89 1.64 5.16 3.31 5.07 4.03-0.02 0.15-0.03 0.3-0.02 0.46 0.01 0.43-0.08 0.77-0.13 0.88-2.35 2.84-4.96 3.92-8.57 5.43-0.81 0.34-1.65 0.69-2.53 1.08-3.3 1.46-12.17 4.92-23.3 5.64-0.83 0.05-1.79 0.08-2.83 0.08-6.91 0-16.59-1.17-23-1.94-1.9-0.23-3.54-0.43-4.73-0.55-3.52-0.36-9.12-0.43-13.2-0.43-1.46 0-2.69 0.01-3.49 0.02-1.5 0.02-2.81 0.86-3.49 2.1-2.6 0.06-7.13 0.13-12.17 0.13-4.89 0-9.32-0.87-11.87-1.51v-1.3c0-1.25-0.78-2.37-1.95-2.81-0.06-0.02-0.11-0.04-0.19-0.07-0.37-0.24-1.49-1.83-2.12-6.17-1.02-6.97 0.07-13.92 1.12-15.65 0.29-0.01 0.66-0.03 1.14-0.03m0-3c-0.82 0-1.53 0.04-2.1 0.13-4.69 0.74-5.07 25.2 0.87 27.52l0.24 0.09v2.81c0 0.46 0.3 0.87 0.74 0.99 1.98 0.56 7.68 2 14.13 2 6.16 0 11.53-0.11 13.67-0.17 0.56-0.01 1-0.47 1-1.03 0-0.57 0.45-1.03 1.02-1.03 0.8-0.01 2.02-0.02 3.46-0.02 3.91 0 9.48 0.07 12.9 0.42 5.1 0.52 18.85 2.5 28.03 2.5 1.08 0 2.1-0.03 3.03-0.09 10.54-0.69 19.39-3.72 24.32-5.89 4.92-2.17 8.81-3.22 12.24-7.39 0.59-0.71 0.79-1.87 0.77-2.82 0.19-1.52-0.44-4.46-6.88-7.18-5.17-2.18-9.63-3.37-16.05-3.37-2.53 0-5.36 0.18-8.67 0.57-5.22 0.6-11.07 0.92-16.97 0.92-7.3 0-14.67-0.48-20.98-1.5-10.49-1.67-35.23-7.46-44.77-7.46z",
        fill: "#424242"
      })
    )
  );
}

exports.default = FlatShoe;
