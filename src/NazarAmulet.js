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

function NazarAmulet(props) {
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
        x1: 29.536,
        x2: 91.734,
        y1: 20.517,
        y2: 100.95,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1700D0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1900A0",
        offset: 0.9982
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M122.09,66.2c0,32.82-26.07,57.8-58.68,57.8S5.91,97.59,5.91,64.77S31.22,4,63.82,4 S122.09,33.38,122.09,66.2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.48 31.96c-16.28 3.65-24.73 17.71-24.12 32.67 0.61 14.97 11.6 32.07 32.98 32.07s32.67-20.46 29.93-37.25c-2.75-16.8-21.08-31.46-38.79-27.49z",
      fill: "#E2E8F5"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 64,
      rx: 22.7,
      ry: 21.58,
      fill: "#6CBBE8"
    }),
    _react2.default.createElement("ellipse", {
      cx: 63.39,
      cy: 64.35,
      rx: 11.04,
      ry: 10.05,
      fill: "#0E191F"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.82 7c14.71 0 28.62 6.33 39.15 17.82 10.24 11.18 16.12 26.26 16.12 41.38 0 30.73-24.46 54.8-55.68 54.8-30.56 0-54.5-24.7-54.5-56.23 0-31.86 24.63-57.77 54.91-57.77m0-3c-32.6 0-57.91 27.95-57.91 60.77s24.9 59.23 57.5 59.23 58.68-24.98 58.68-57.8-25.66-62.2-58.27-62.2z",
        fill: "#eee"
      })
    )
  );
}

exports.default = NazarAmulet;
