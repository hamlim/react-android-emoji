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

function SixPointedStar(props) {
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
        y1: 4.25,
        y2: 124.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B388FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A175FF",
        offset: 0.3773
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7C4DFF",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
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
          "m64 58c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 6,
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 16c0.33 0 0.66 0.16 0.85 0.48l13.82 23.52h27.55c0.78 0 1.26 0.86 0.85 1.52l-13.74 22.48 13.74 22.48c0.41 0.67-0.07 1.52-0.85 1.52h-27.55l-13.81 23.52c-0.2 0.32-0.53 0.48-0.86 0.48s-0.66-0.16-0.85-0.48l-13.82-23.52h-27.55c-0.78 0-1.26-0.86-0.85-1.52l13.74-22.48-13.74-22.48c-0.41-0.66 0.07-1.52 0.85-1.52h27.55l13.81-23.52c0.2-0.32 0.53-0.48 0.86-0.48m-7.63 24h15.27l-7.64-13.41-7.63 13.41m33.45 18.25 7.48-12.25h-14.97l7.49 12.25m-37.12 23.75h22.6l11-18-11-18h-22.6l-11 18 11 18m-14.52-23.75 7.49-12.25h-14.97l7.48 12.25m44.15 23.75h14.97l-7.48-12.25-7.49 12.25m-51.63 0h14.97l-7.48-12.25-7.49 12.25m33.3 19.41 7.63-13.41h-15.26l7.63 13.41m0-88.41c-1.4 0-2.68 0.72-3.41 1.91l-0.02 0.04-12.95 22.05h-25.84c-1.45 0-2.78 0.78-3.49 2.04s-0.68 2.81 0.08 4.04l12.78 20.92-12.78 20.91c-0.75 1.23-0.78 2.78-0.08 4.04 0.71 1.27 2.05 2.05 3.49 2.05h25.83l12.94 22.04 0.02 0.04c0.73 1.2 2.01 1.91 3.41 1.91s2.68-0.72 3.41-1.91l0.02-0.04 12.97-22.04h25.83c1.45 0 2.78-0.78 3.49-2.04s0.68-2.81-0.08-4.04l-12.77-20.92 12.78-20.91c0.75-1.23 0.78-2.78 0.08-4.04-0.71-1.27-2.05-2.05-3.49-2.05h-25.84l-12.94-22.04-0.02-0.04c-0.74-1.2-2.02-1.92-3.42-1.92zm-2.48 24 2.48-4.35 2.48 4.35h-4.96zm26.16 12h4.27l-2.13 3.49-2.14-3.49zm-33.3 0h19.24l9.17 15-9.17 15h-19.24l-9.17-15 9.17-15zm-18.33 0h4.27l-2.13 3.49-2.14-3.49zm51.63 30 2.14-3.49 2.13 3.49h-4.27zm-51.63 0 2.13-3.49 2.14 3.49h-4.27zm25.48 12h4.95l-2.48 4.35-2.47-4.35z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M93.33,64l13.74-22.48c0.41-0.67-0.07-1.52-0.85-1.52H78.67L64.85,16.48 c-0.39-0.64-1.32-0.64-1.71,0L49.33,40H21.78c-0.78,0-1.26,0.86-0.85,1.52L34.67,64L20.93,86.48C20.52,87.14,21,88,21.78,88h27.55 l13.81,23.52c0.39,0.64,1.32,0.64,1.71,0L78.67,88h27.55c0.78,0,1.26-0.86,0.85-1.52L93.33,64z M97.3,46l-7.48,12.25L82.33,46H97.3 z M86.3,64l-11,18H52.7l-11-18l11-18h22.6L86.3,64z M64,26.59L71.64,40H56.36L64,26.59z M30.7,46h14.97l-7.48,12.25L30.7,46z M30.7,82l7.48-12.25L45.67,82H30.7z M64,101.41L56.37,88h15.27L64,101.41z M89.82,69.75L97.3,82H82.33L89.82,69.75z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = SixPointedStar;
