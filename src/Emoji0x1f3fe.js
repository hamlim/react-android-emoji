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

function Emoji0x1f3fe(props) {
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
        id: "b",
        x1: 64,
        x2: 64,
        y1: 4.3333,
        y2: 123.89,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A56C43",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A26941",
        offset: 0.4272
      }),
      _react2.default.createElement("stop", {
        stopColor: "#97603D",
        offset: 0.7837
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8D5738",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 106,
        x2: 106,
        y1: 305.27,
        y2: 305.27,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8D5738",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#97603D",
        offset: 0.2163
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A26941",
        offset: 0.5728
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A56C43",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m106 305.27",
      fill: "url(#a)",
      stroke: "#875334",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    })
  );
}

exports.default = Emoji0x1f3fe;
