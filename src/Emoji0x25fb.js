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

function Emoji0x25fb(props) {
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
        y1: 19.859,
        y2: 108.27,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECECEC",
        offset: 0.6578
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102 108h-76c-3.31 0-6-2.69-6-6v-76c0-3.31 2.69-6 6-6h76c3.31 0 6 2.69 6 6v76c0 3.31-2.69 6-6 6z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102 23c1.65 0 3 1.35 3 3v76c0 1.65-1.35 3-3 3h-76c-1.65 0-3-1.35-3-3v-76c0-1.65 1.35-3 3-3h76m0-3h-76c-3.31 0-6 2.69-6 6v76c0 3.31 2.69 6 6 6h76c3.31 0 6-2.69 6-6v-76c0-3.31-2.69-6-6-6z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Emoji0x25fb;
