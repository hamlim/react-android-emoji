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

function Bone(props) {
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
        x1: -18.406,
        x2: 120.55,
        y1: 49.429,
        y2: 49.429,
        gradientTransform: "matrix(.7071 .7071 -.7071 .7071 63.512 -7.1564)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F4E9D1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DCC699",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.1 5.85c-8.36-3.13-18.84 1.78-20.21 11.86-0.48 3.53-7.25-0.22-11.87 7.03-6.96 10.93 4.27 21.91 15.62 20.79 5.45-0.54 8.33-1.23 12.51 2.95l51.79 51.79c0.7 0.7-7.93 9.74 1.88 20.18 4 4.25 9.72 4.65 14.86 1.57 6.67-4 7.33-10 7.33-10s13.33-2.5 15.11-15.04c1.13-7.94-5.33-13.33-15.28-12.71-5.85 0.37-11.5 1.75-11.5 1.75s-54.6-55.63-54.65-55.69c0.27 0.27 3.4-6.25 3.55-6.9 1.07-4.5 0.15-9.14-2.73-12.83-1.79-2.3-4.02-3.86-6.41-4.75z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m32.87 7.91c1.45 0 2.86 0.25 4.18 0.74 2.01 0.75 3.72 2.02 5.09 3.77 2.26 2.9 3.05 6.5 2.21 10.17-0.21 0.53-1.09 2.45-2 4.19-1.31 2.53-0.84 5.59 1.15 7.63l52.69 53.69 1.2 1.22 1.66-0.4c0.05-0.01 5.48-1.33 10.97-1.67 0.46-0.03 0.91-0.04 1.35-0.04 4.06 0 7.33 1.19 9.2 3.34 1.38 1.59 1.91 3.61 1.57 5.99-1.45 10.2-12.25 12.43-12.69 12.52l-2.18 0.37-0.25 2.21c-0.03 0.19-0.69 4.67-5.9 7.79-1.73 1.04-3.56 1.59-5.27 1.59-2.21 0-4.23-0.91-5.86-2.64-6.31-6.71-3.46-12.29-1.92-15.29 0.63-1.22 1.67-3.27-0.02-4.96l-51.79-51.79c-2.97-2.97-5.83-4.23-9.57-4.23-1.31 0-2.68 0.14-4.14 0.3-0.39 0.04-0.8 0.08-1.22 0.12-0.43 0.04-0.88 0.06-1.32 0.06-4.92 0-9.86-2.75-12.02-6.69-1.17-2.13-2.03-5.52 0.54-9.56 1.94-3.05 4.14-3.38 6.46-3.72 1.87-0.28 5.34-0.8 5.85-4.51 0.93-6.69 6.75-10.2 12.03-10.2m0-3c-6.99 0-13.89 4.75-14.98 12.79-0.48 3.53-7.25-0.22-11.87 7.03-6.63 10.42 3.24 20.87 14.01 20.87 0.54 0 1.07-0.03 1.61-0.08 1.96-0.19 3.59-0.41 5.06-0.41 2.63 0 4.77 0.68 7.45 3.35l51.79 51.79c0.7 0.7-7.93 9.74 1.88 20.18 2.27 2.41 5.09 3.58 8.04 3.58 2.26 0 4.59-0.68 6.82-2.02 6.67-4 7.33-10 7.33-10s13.33-2.5 15.11-15.04c1.07-7.52-4.68-12.76-13.74-12.76-0.5 0-1.01 0.02-1.54 0.05-5.85 0.37-11.5 1.75-11.5 1.75s-42.93-43.72-52.7-53.68c-1.08-1.1-1.34-2.77-0.63-4.15 0.97-1.88 2.13-4.36 2.22-4.75 1.07-4.5 0.15-9.14-2.73-12.83-1.78-2.28-4.01-3.84-6.4-4.73-1.69-0.63-3.46-0.94-5.23-0.94z",
      fill: "#BDAA86"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#BDAA86",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement("path", {
        d: "m14.57 20.91c4.59-0.67 9.19-1.34 13.78-2.01"
      }),
      _react2.default.createElement("path", {
        d: "m14.57 20.91c4.59-0.67 9.19-1.34 13.78-2.01",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ),
    _react2.default.createElement("path", {
      d: "m108.44 111.5c0.43-3.34 0.86-6.67 1.29-10.01",
      fill: "none",
      stroke: "#BDAA86",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    })
  );
}

exports.default = Bone;
