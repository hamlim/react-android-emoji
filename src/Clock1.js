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

function Clock1(props) {
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
        y1: 19.751,
        y2: 111.99,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0.3212
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.8 63.98h0.4c2.1 0 3.8-1.7 3.8-3.8v-32.4c0-2.1-1.7-3.8-3.8-3.8h-0.4c-2.1 0-3.8 1.7-3.8 3.8v32.4c0 2.1 1.7 3.8 3.8 3.8z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.7 63.88 0.34 0.21c1.79 1.1 4.13 0.55 5.23-1.24l11.34-18.37c1.1-1.79 0.55-4.13-1.24-5.23l-0.34-0.21c-1.79-1.1-4.13-0.55-5.23 1.24l-11.33 18.37c-1.1 1.79-0.55 4.13 1.23 5.23z",
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 7,
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 3,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#757575"
      },
      _react2.default.createElement("circle", {
        cx: 15.89,
        cy: 64.13,
        r: 4
      }),
      _react2.default.createElement("circle", {
        cx: 63.89,
        cy: 16.13,
        r: 4
      }),
      _react2.default.createElement("circle", {
        cx: 63.89,
        cy: 112.13,
        r: 4
      }),
      _react2.default.createElement("circle", {
        cx: 111.89,
        cy: 64.13,
        r: 4
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,8c30.88,0,56,25.12,56,56s-25.12,56-56,56S8,94.88,8,64S33.12,8,64,8 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Clock1;
