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

function WhiteCheckMark(props) {
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
        id: "a",
        x1: 64,
        x2: 64,
        y1: 3.9996,
        y2: 124.38,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EBEBEB",
        offset: 0.2714
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E1E1E1",
        offset: 0.4849
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0D0D0",
        offset: 0.678
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.8328
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36 124c-0.69 0-1.38-0.06-2.08-0.18-4.34-0.76-7.91-3.84-9.31-8.02l-20-60c-2.1-6.29 1.3-13.08 7.59-15.18s13.08 1.3 15.18 7.59l12.98 38.95 62.22-78.6c4.11-5.2 11.66-6.07 16.86-1.96s6.07 11.66 1.96 16.86l-76 96c-2.29 2.89-5.77 4.54-9.4 4.54z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112.01 7c2.04 0 3.97 0.67 5.58 1.94 1.88 1.49 3.08 3.63 3.35 6.02 0.28 2.39-0.39 4.74-1.88 6.63l-76 96c-1.72 2.17-4.29 3.41-7.06 3.41-0.52 0-1.04-0.05-1.56-0.14-3.26-0.57-5.93-2.88-6.98-6.02l-20-60c-1.57-4.71 0.98-9.82 5.69-11.38 0.93-0.31 1.88-0.47 2.85-0.47 3.88 0 7.31 2.47 8.54 6.16l12.98 38.95c0.35 1.05 1.24 1.82 2.33 2.01 0.17 0.03 0.35 0.05 0.52 0.05 0.91 0 1.78-0.41 2.35-1.14l62.22-78.6c1.72-2.18 4.3-3.42 7.07-3.42m0-3c-3.54 0-7.05 1.56-9.42 4.55l-62.22 78.6-12.98-38.94c-1.68-5.03-6.36-8.21-11.38-8.21-1.26 0-2.54 0.2-3.8 0.62-6.29 2.1-9.68 8.89-7.59 15.18l20 60c1.39 4.18 4.97 7.26 9.31 8.02 0.69 0.12 1.39 0.18 2.08 0.18 3.63 0 7.11-1.65 9.41-4.55l76-96c4.11-5.2 3.24-12.74-1.96-16.86-2.22-1.74-4.84-2.59-7.45-2.59z",
        fill: "#424242"
      })
    )
  );
}

exports.default = WhiteCheckMark;
