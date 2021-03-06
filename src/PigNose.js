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

function PigNose(props) {
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
        y1: 13.475,
        y2: 116.24,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB5B5",
        offset: 0.3893
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E99494",
        offset: 0.748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E08787",
        offset: 0.9461
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 115.38c-16.29 0-31.04-4.19-41.55-11.8-11.09-8.04-16.95-19.37-16.95-32.78 0-13.95 6.25-28.44 17.15-39.75 11.45-11.89 26.14-18.43 41.35-18.43s29.9 6.55 41.35 18.43c10.9 11.32 17.15 25.8 17.15 39.75 0 13.41-5.86 24.74-16.95 32.78-10.51 7.61-25.26 11.8-41.55 11.8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 14.12c14.8 0 29.1 6.38 40.27 17.97 10.63 11.04 16.73 25.15 16.73 38.71 0 12.9-5.65 23.82-16.33 31.56-10.25 7.43-24.69 11.52-40.67 11.52s-30.42-4.09-40.67-11.52c-10.68-7.74-16.33-18.65-16.33-31.56 0-13.56 6.1-27.67 16.73-38.71 11.17-11.59 25.47-17.97 40.27-17.97m0-3c-33.14 0-60 30.48-60 59.68s26.86 46.08 60 46.08 60-16.87 60-46.08-26.86-59.68-60-59.68z",
      fill: "#ED7E7E"
    }),
    _react2.default.createElement("ellipse", {
      cx: 44.71,
      cy: 66.17,
      rx: 11.26,
      ry: 21.7,
      fill: "#404040"
    }),
    _react2.default.createElement("ellipse", {
      cx: 41.97,
      cy: 66.49,
      rx: 8.52,
      ry: 19.88
    }),
    _react2.default.createElement("ellipse", {
      cx: 83.29,
      cy: 66.17,
      rx: 11.26,
      ry: 21.7,
      fill: "#404040"
    }),
    _react2.default.createElement("ellipse", {
      cx: 80.55,
      cy: 66.49,
      rx: 8.52,
      ry: 19.88
    })
  );
}

exports.default = PigNose;
