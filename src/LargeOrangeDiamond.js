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

function LargeOrangeDiamond(props) {
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
        y1: 3,
        y2: 125.24,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB74D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8D03",
        offset: 0.7426
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 0.7677
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m58.34 121.65-52-52c-3.12-3.12-3.12-8.19 0-11.31l52-52c3.12-3.12 8.19-3.12 11.31 0l52 52c3.12 3.12 3.12 8.19 0 11.31l-52 52c-3.12 3.13-8.18 3.13-11.31 0z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7c1.34 0 2.59 0.52 3.54 1.46l52 52c0.94 0.94 1.46 2.2 1.46 3.54s-0.52 2.59-1.46 3.54l-52 52c-0.94 0.94-2.2 1.46-3.54 1.46s-2.59-0.52-3.54-1.46l-52-52c-0.94-0.95-1.46-2.2-1.46-3.54s0.52-2.59 1.46-3.54l52-52c0.95-0.94 2.2-1.46 3.54-1.46m0-3c-2.05 0-4.09 0.78-5.66 2.34l-52 52c-3.12 3.12-3.12 8.19 0 11.31l52 52c1.56 1.56 3.61 2.34 5.66 2.34s4.09-0.78 5.66-2.34l52-52c3.12-3.12 3.12-8.19 0-11.31l-52-52c-1.57-1.56-3.61-2.34-5.66-2.34z",
        fill: "#424242"
      })
    )
  );
}

exports.default = LargeOrangeDiamond;
