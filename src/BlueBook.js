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

function BlueBook(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "M108.82,124H21.97c-3.31,0-6-2.69-6-6V26.05c0-3.31,2.69-6,6-6h86.85V124z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 4.2679,
        y2: 111.72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4480F7",
        offset: 0.0079465
      }),
      _react2.default.createElement("stop", {
        stopColor: "#315DB3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M112.03,111.14H21.97c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h90.05V111.14z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m109.03 7v101.14h-0.2c-1.66 0-3 1.34-3 3v9.86h-83.43c-1.89 0-3.43-1.54-3.43-3.43v-107.14c0-1.89 1.54-3.43 3.43-3.43h86.63m3-3h-89.63c-3.55 0-6.43 2.88-6.43 6.43v107.14c0 3.55 2.88 6.43 6.43 6.43h86.42v-12.86h3.2v-107.14h0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#0D47A1"
      },
      _react2.default.createElement("path", {
        d:
          "m89.06 21.34h-46.19c-1.03 0-1.71 0.7-1.71 1.75v26.3c0 1.05 0.68 1.75 1.71 1.75h46.18c1.03 0 1.71-0.7 1.71-1.75v-26.3c0.01-1.05-0.68-1.75-1.7-1.75zm-1.72 26.3h-42.76v-22.79h42.76v22.79z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.27 35.37h15.39c1.03 0 1.71-0.7 1.71-1.75s-0.68-1.75-1.71-1.75h-15.39c-1.03 0-1.71 0.7-1.71 1.75 0 1.04 0.68 1.75 1.71 1.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m53.14 42.38h25.66c1.03 0 1.71-0.7 1.71-1.75s-0.68-1.75-1.71-1.75h-25.66c-1.03 0-1.71 0.7-1.71 1.75s0.68 1.75 1.71 1.75z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 19.096,
        x2: 104.54,
        y1: 115.96,
        y2: 115.96,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0102
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.9869
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.54 120.79h-80.94c-2.47 0-4.5-2.03-4.5-4.5v-0.64c0-2.47 2.02-4.5 4.5-4.5h80.94v9.64z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "M112.03,111.14H21.97c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h90.05V111.14z"
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
    _react2.default.createElement("rect", {
      x: 10.25,
      y: -0.29,
      width: 12.86,
      height: 128.57,
      clipPath: "url(#a)",
      fill: "#424242"
    })
  );
}

exports.default = BlueBook;
