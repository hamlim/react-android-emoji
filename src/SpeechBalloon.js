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

function SpeechBalloon(props) {
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
        y1: 20.177,
        y2: 101.36,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.4391
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.8212
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.46 14.21h-93.12c-7.34 0-13.34 6-13.34 13.34v53.79c0 7.08 5.79 12.87 12.87 12.87 1.98 0 3.52 1.75 3.25 3.71-1.06 7.74-5.19 11.53-5.6 12.96-0.63 2.22 9.81 3.81 18.97-5 3.84-3.69 5.68-7.36 6.51-9.57 0.48-1.27 1.7-2.1 3.06-2.1h67.72c7.3 0 13.21-5.92 13.21-13.21v-53.25c0.01-7.45-6.08-13.54-13.53-13.54z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#2196F3"
      },
      _react2.default.createElement("circle", {
        cx: 32.57,
        cy: 54,
        r: 8
      }),
      _react2.default.createElement("circle", {
        cx: 64.57,
        cy: 54,
        r: 8
      }),
      _react2.default.createElement("circle", {
        cx: 95.43,
        cy: 54,
        r: 8
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
          "m32.57 48c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.57 48c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.43 48c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m110.46 17.21c5.81 0 10.54 4.73 10.54 10.54v53.25c0 5.63-4.58 10.21-10.21 10.21h-67.72c-2.59 0-4.95 1.63-5.86 4.05-0.79 2.08-2.43 5.24-5.79 8.47-5.43 5.22-10.74 5.85-12.57 5.9 1.51-2.33 3.53-6.01 4.25-11.29 0.25-1.79-0.3-3.6-1.49-4.96-1.19-1.37-2.92-2.16-4.74-2.16-5.45 0-9.87-4.43-9.87-9.87v-53.8c0-5.7 4.64-10.34 10.34-10.34h93.12m0-3h-93.12c-7.34 0-13.34 6-13.34 13.34v53.79c0 7.08 5.79 12.87 12.87 12.87 1.98 0 3.52 1.75 3.25 3.71-1.06 7.74-5.19 11.53-5.6 12.96-0.26 0.92 1.4 1.74 4.08 1.74 3.76 0 9.54-1.6 14.89-6.74 3.84-3.69 5.68-7.36 6.51-9.57 0.48-1.27 1.7-2.1 3.06-2.1h67.72c7.3 0 13.21-5.92 13.21-13.21v-53.25c0.01-7.45-6.08-13.54-13.53-13.54z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SpeechBalloon;
