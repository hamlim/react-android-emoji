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

function Ear(props) {
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
        id: "d",
        cx: 61.657,
        cy: 70.462,
        r: 73.632,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#70534A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C4037",
        offset: 0.74
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.4 122.56c-13.17 0-19.17-7.86-19.17-15.17 0-3.57 0.52-6.14 1.03-8.62 0.87-4.27 1.69-8.31-0.59-15.9-0.86-2.85-2.93-5.46-5.34-8.49-2.43-3.05-5.17-6.52-7.24-10.96-6.69-14.4-6.37-28.61 0.9-40 6.98-10.93 19.54-18 32.02-18 11.86 0 23.87 5.12 32.15 13.69 6.42 6.65 9.8 14.42 9.54 21.89-0.75 21.19-9.12 34.92-15.85 45.96-3.39 5.56-6.32 10.36-7.57 15.04-4.71 17.71-9.72 20.56-19.88 20.56z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.02 6.94c11.46 0 23.07 4.95 31.07 13.23 6.04 6.26 9.37 13.84 9.12 20.79-0.73 20.8-8.99 34.35-15.63 45.23-3.45 5.66-6.43 10.55-7.74 15.43-3.89 14.59-7.1 19.44-18.43 19.44-12.14 0-17.67-7.08-17.67-13.67 0-3.42 0.51-5.91 1-8.32 0.91-4.46 1.77-8.68-0.63-16.63-0.94-3.12-3.1-5.84-5.6-8.98-2.37-2.99-5.06-6.38-7.05-10.66-6.46-13.92-6.18-27.62 0.81-38.56 6.7-10.51 18.78-17.3 30.75-17.3m0-3c-23.63 0-50.53 25.12-34.28 60.12 4.15 8.94 10.9 13.94 12.5 19.25 3.47 11.5-0.5 14.08-0.5 24.08 0 8.67 7.33 16.67 20.67 16.67s17.33-6.67 21.33-21.67c3.58-13.43 22.33-29 23.47-61.33 0.64-18.24-19.57-37.12-43.19-37.12z",
      fill: "#4A2F27"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 62.235,
        cy: 55.25,
        r: 32.315,
        gradientTransform: "matrix(1 0 0 1.345 0 -19.063)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#70534A",
        offset: 0.48
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C4037",
        offset: 0.86
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.89 43.79c0.47-13.55-14.36-27.58-31.71-27.58s-37.11 18.67-25.18 44.67c3.05 6.65 10.37 9.7 12.09 13.85s-1 8.31-2.01 12.46c-1.01 4.19-1.55 7.94 1.56 10.1 7.01 4.85 7.74-10.29 17.24-10.78 9.34-0.48 8.46 9.42 13.17-3.59 3.53-9.7 14-15.1 14.84-39.13z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m48.44 46.28c-0.24-0.33-0.64 0.17-0.43 0.52 1.59 2.74 4.98 6.6 8.58 7.48 5.29 1.29 10.96 3.23 14.14 8.12 6.49 9.98 2.33 21.48-8.46 24.63-1.8 0.52-1.49 1.16 0.31 0.63 10.92-3.18 17.44-12.9 12.81-23.93-5.52-13.17-19.16-6.49-26.95-17.45z",
      fill: "#4A2F27",
      opacity: 0.6
    }),
    _react2.default.createElement("path", {
      d:
        "m36.72 35.07s14.58-19.06 34.95-12.93c9.55 2.87 17.27 11.94 18.74 21.86 1.66 11.25-11.46 40.31-11.46 40.31l3.28-4.64s16.26-24.24 12.26-39.12c-9.7-36.15-47.75-25.15-53.35-13.14-2.8 6.03-4.42 7.66-4.42 7.66z",
      fill: "#4A2F27",
      opacity: 0.6
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m94.89 44.79c0.47-13.55-14.36-27.58-31.71-27.58s-37.11 18.67-25.18 44.67c3.05 6.65 10.03 7.43 12.09 13.85 2.01 6.26-0.96 8.52-1.96 12.68-1.01 4.19-1.59 7.73 1.52 9.88 7.01 4.85 7.74-10.29 17.24-10.78 9.34-0.48 8.46 9.42 13.17-3.59 3.52-9.7 13.99-15.1 14.83-39.13z"
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m53.82 71.15c-1.6-2.59-6.67-6.35-11.75-3.44-2.42 1.39 4.3 17.19 5.59 19.2 0.26 0.41 0.4 1.23 2.44 0.43 1.8-0.71 4.18-3.11 4.83-5.82 0.77-3.27 0.9-7.1-1.11-10.37z",
        fill: "#4A2F27"
      })
    )
  );
}

exports.default = Ear;