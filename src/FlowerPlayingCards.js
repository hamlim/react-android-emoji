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

function FlowerPlayingCards(props) {
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
        id: "d",
        x1: 64,
        x2: 64,
        y1: 13.667,
        y2: 104,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.1353
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.8422
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100 124h-72c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h72c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("circle", {
      cx: 52.17,
      cy: 39.83,
      r: 22.5,
      fill: "#F5F5F5"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m100 124h-72c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h72c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
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
        x1: 52.957,
        x2: 62.457,
        y1: 53.358,
        y2: 101.36,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.67 134.67h-91.34l-6.67-35.33s49.76-38.28 89.33-18c26.68 13.66 8.8 53.28 8.68 53.33z",
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
          "m100 8c2.21 0 4 1.79 4 4v104c0 2.21-1.79 4-4 4h-72c-2.21 0-4-1.79-4-4v-104c0-2.21 1.79-4 4-4h72m0-4h-72c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h72c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    )
  );
}

exports.default = FlowerPlayingCards;
