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

function Emoji0x25aa(props) {
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
        y1: 45.763,
        y2: 82.409,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4E4E4E",
        offset: 0.3517
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M77.33,80H50.67C49.19,80,48,78.81,48,77.33V50.67c0-1.47,1.19-2.67,2.67-2.67h26.67 c1.47,0,2.67,1.19,2.67,2.67v26.67C80,78.81,78.81,80,77.33,80z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m77 51v26h-26v-26h26m0.33-3h-26.66c-1.48 0-2.67 1.19-2.67 2.67v26.67c0 1.47 1.19 2.67 2.67 2.67h26.67c1.47 0 2.67-1.19 2.67-2.67v-26.67c-0.01-1.48-1.2-2.67-2.68-2.67z",
        fill: "#eee"
      })
    )
  );
}

exports.default = Emoji0x25aa;
