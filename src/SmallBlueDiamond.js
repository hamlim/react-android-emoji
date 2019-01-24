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

function SmallBlueDiamond(props) {
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
        y1: 41.084,
        y2: 88.056,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#82B1FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#386FFF",
        offset: 0.8409
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m62.06 85.2-19.26-19.26c-1.07-1.07-1.07-2.81 0-3.88l19.26-19.26c1.07-1.07 2.81-1.07 3.88 0l19.26 19.26c1.07 1.07 1.07 2.81 0 3.88l-19.26 19.26c-1.07 1.07-2.81 1.07-3.88 0z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,45.11L82.89,64L64,82.89L45.11,64L64,45.11 M64,42c-0.7,0-1.4,0.27-1.94,0.8L42.8,62.06 c-1.07,1.07-1.07,2.81,0,3.88L62.06,85.2C62.6,85.73,63.3,86,64,86s1.4-0.27,1.94-0.8L85.2,65.94c1.07-1.07,1.07-2.81,0-3.88 L65.94,42.8C65.4,42.27,64.7,42,64,42L64,42z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SmallBlueDiamond;
