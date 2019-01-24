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

function Basketball(props) {
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
        cx: 63.598,
        cy: 27.638,
        r: 65.453,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8981D",
        offset: 0.0063776
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F47C20",
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
      d: "m-0.34 69.24s17.28 18.48 64.09 18.48 64.49-18.48 64.49-18.48",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#BE3A26",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("line", {
      x1: 64,
      x2: 64,
      y1: 0.07,
      y2: 127.64,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#BE3A26",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("path", {
      d: "m12.52 25.58s22.7 9.84 30.13 38.57-12.85 59.87-12.85 59.87",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#BE3A26",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("path", {
      d: "m115.28 25.58s-22.7 9.84-30.13 38.57 12.85 59.87 12.85 59.87",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#BE3A26",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
        fill: "#434343"
      })
    )
  );
}

exports.default = Basketball;
