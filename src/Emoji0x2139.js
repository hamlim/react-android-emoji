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

function Emoji0x2139(props) {
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
        y1: -0.3333,
        y2: 128.1,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#169FE4",
        offset: 0.5369
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("path", {
        d:
          "m69.92 109h-11.84c-1.31 0-2.37-1.06-2.37-2.37v-56.84c0-1.31 1.06-2.37 2.37-2.37h11.84c1.31 0 2.37 1.06 2.37 2.37v56.84c0 1.31-1.06 2.37-2.37 2.37z"
      }),
      _react2.default.createElement("circle", {
        cx: 64,
        cy: 29.66,
        r: 10.66
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
          "m69.29 50.42v55.58h-10.58v-55.58h10.58m0.63-3h-11.84c-1.31 0-2.37 1.06-2.37 2.37v56.84c0 1.31 1.06 2.37 2.37 2.37h11.84c1.31 0 2.37-1.06 2.37-2.37v-56.84c0-1.31-1.06-2.37-2.37-2.37z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 22c4.22 0 7.66 3.44 7.66 7.66s-3.44 7.66-7.66 7.66-7.66-3.44-7.66-7.66 3.44-7.66 7.66-7.66m0-3c-5.89 0-10.66 4.77-10.66 10.66s4.77 10.66 10.66 10.66 10.66-4.77 10.66-10.66-4.77-10.66-10.66-10.66z"
      })
    )
  );
}

exports.default = Emoji0x2139;
