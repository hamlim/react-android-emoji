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

function PurpleHeart(props) {
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
        id: "a",
        cx: 63.41,
        cy: -3.0014,
        r: 76.735,
        gradientTransform: "matrix(.9985 0 0 .9337 .0985 4.2468)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9C27B0",
        offset: 0.4763
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 0.8779
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m93.92 9.08c-21.92 0-29.97 26.2-29.97 26.2s-7.95-26.2-30.03-26.2c-16.59 0-35.51 13.15-28.52 43.03 6.99 29.89 58.33 66.97 58.33 66.97s0.26-0.1 0.26-0.27c0 0.16 0.17 0.25 0.17 0.25s51.27-37.06 58.26-66.95c6.99-29.88-11.91-43.03-28.5-43.03z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m93.92 12.08c8.44 0 16.38 3.67 21.25 9.81 5.67 7.15 7.16 17.37 4.32 29.55-5.99 25.62-47.08 57.67-55.56 64.06-8.55-6.44-49.63-38.47-55.62-64.06-2.83-12.18-1.34-22.39 4.33-29.54 4.88-6.15 12.83-9.82 21.28-9.82 19.55 0 27.08 23.84 27.16 24.08l2.84 9.36 2.9-9.34c0.07-0.25 7.69-24.1 27.1-24.1m0-3c-21.92 0-29.97 26.2-29.97 26.2s-7.95-26.2-30.03-26.2c-16.59 0-35.51 13.15-28.52 43.03 6.99 29.89 58.33 66.97 58.33 66.97s0.26-0.1 0.26-0.27c0 0.16 0.17 0.25 0.17 0.25s51.27-37.06 58.26-66.95c6.99-29.88-11.91-43.03-28.5-43.03z",
        fill: "#424242"
      })
    )
  );
}

exports.default = PurpleHeart;
