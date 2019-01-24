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

function Clock430(props) {
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
        "m64.2 63.98h-0.4c-2.1 0-3.8 1.7-3.8 3.8v32.4c0 2.1 1.7 3.8 3.8 3.8h0.4c2.1 0 3.8-1.7 3.8-3.8v-32.4c0-2.09-1.7-3.8-3.8-3.8z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.98 63.81-0.21 0.34c-1.08 1.8-0.49 4.13 1.31 5.21l18.52 11.09c1.8 1.08 4.13 0.49 5.21-1.31l0.21-0.34c1.08-1.8 0.49-4.13-1.31-5.21l-18.52-11.09c-1.8-1.07-4.13-0.49-5.21 1.31z",
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

exports.default = Clock430;
