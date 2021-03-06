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

function GlobeWithMeridians(props) {
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
        id: "c",
        cx: 64,
        cy: 3.75,
        r: 120.35,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.3522
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2B8BE2",
        offset: 0.6798
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "b",
        cx: 64,
        cy: 64,
        r: 60
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
    _react2.default.createElement("path", {
      d:
        "M124.99,63.27l-0.03-1.38h-27.7 c-0.15-8.04-1.11-15.77-2.87-23h25.3l-0.69-1.43c-0.33-0.69-0.69-1.36-1.04-2.03l-0.28-0.53H93.31C87.84,16.23,77.48,4.19,66,3.1 V2.94l-1.39-0.03c-0.41-0.01-0.82-0.01-1.23,0L62,2.94v0.22C50.76,4.57,40.61,16.6,35.26,34.9H10.33l-0.28,0.53 c-0.36,0.67-0.71,1.35-1.04,2.03L8.32,38.9h25.86c-1.76,7.24-2.73,14.96-2.87,23H3.04l-0.03,1.38C3.01,63.48,3,63.69,3,63.9 s0.01,0.42,0.01,0.62l0.03,1.38h28.26c0.13,8.03,1.08,15.76,2.82,23H8.32l0.69,1.43c0.33,0.69,0.68,1.36,1.04,2.03l0.28,0.53H35.2 c5.39,18.6,15.38,30.52,26.81,31.95c0.31,0.04,0.62,0.07,0.92,0.09c0.45,0.03,0.9,0.06,1.35,0.06c0.17,0,0.34-0.01,0.51-0.02 l0.25-0.01c0.56-0.02,1.11-0.07,1.65-0.14c11.37-1.5,21.31-13.42,26.68-31.93h24.3l0.28-0.53c0.36-0.67,0.71-1.35,1.04-2.03 l0.69-1.43H94.43c1.75-7.25,2.7-14.97,2.83-23h27.7l0.03-1.38c0.01-0.21,0.01-0.41,0.01-0.62S124.99,63.48,124.99,63.27z M62,92.9 v27.92c-6.55-1.05-12.8-6.61-17.7-15.8c-1.93-3.62-3.59-7.7-4.95-12.12H62z M62,65.9v23H38.25c-1.82-7.2-2.81-14.92-2.94-23H62z M62,38.9v23H35.31c0.15-8.08,1.15-15.81,2.99-23H62z M62,7.19V34.9H39.42c1.34-4.35,2.98-8.35,4.88-11.91 C49.2,13.8,55.45,8.23,62,7.19z M84.26,22.99c1.9,3.56,3.54,7.56,4.88,11.91H66V7.12C72.76,7.93,79.21,13.52,84.26,22.99z M66,88.9 v-23h27.26c-0.13,8.07-1.12,15.8-2.94,23H66z M66,61.9v-23h24.26c1.83,7.19,2.84,14.92,2.99,23H66z M66,92.9h23.21 c-1.35,4.42-3.01,8.5-4.95,12.12h0c-5.05,9.47-11.5,15.05-18.26,15.87V92.9z",
      clipPath: "url(#a)",
      fill: "#01579B",
      opacity: 0.4
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
    )
  );
}

exports.default = GlobeWithMeridians;
