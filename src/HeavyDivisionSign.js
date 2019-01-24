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

function HeavyDivisionSign(props) {
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
      "g",
      {
        fill: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "a",
          cx: 63.744,
          cy: 3.5832,
          r: 120.58,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#4CAF50",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#388E3C",
          offset: 1
        })
      ),
      _react2.default.createElement("circle", {
        cx: 64,
        cy: 106,
        r: 18
      }),
      _react2.default.createElement("circle", {
        cx: 64,
        cy: 22,
        r: 18
      }),
      _react2.default.createElement("path", {
        d:
          "m120 52h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z"
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
          "m64 91c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15m0-3c-9.94 0-18 8.06-18 18s8.06 18 18 18 18-8.06 18-18-8.06-18-18-18z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 7c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15m0-3c-9.94 0-18 8.06-18 18s8.06 18 18 18 18-8.06 18-18-8.06-18-18-18z"
      }),
      _react2.default.createElement("path", {
        d:
          "m120 55c0.55 0 1 0.45 1 1v16c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-16c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z"
      })
    )
  );
}

exports.default = HeavyDivisionSign;
