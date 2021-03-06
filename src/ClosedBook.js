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

function ClosedBook(props) {
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
      d: "M109.71,124H19.82c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h89.89V124z",
      fill: "#5D4037"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 4.4294,
        y2: 107.29,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BCAAA4",
        offset: 0.0131
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M114.18,107.04H19.82c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h94.36V107.04z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.86 48.64h-37.54c-2.21 0-4-1.79-4-4v-12.09c0-2.21 1.79-4 4-4h37.54c2.21 0 4 1.79 4 4v12.09c0 2.21-1.79 4-4 4z",
      fill: "#D7CCC8"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#5D4037",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement("line", {
        x1: 45.68,
        x2: 90.5,
        y1: 79.54,
        y2: 79.54
      }),
      _react2.default.createElement("line", {
        x1: 53.62,
        x2: 82.55,
        y1: 89.45,
        y2: 89.45
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M92.75,4h13.19v28.43l-5.04-6.16c-0.43-0.52-0.99-0.79-1.55-0.79s-1.13,0.26-1.55,0.79l-5.04,6.16 V4z",
      fill: "#ED1C24"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 18.106,
        x2: 105.68,
        y1: 113.91,
        y2: 113.91,
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
        "m105.85 120.79h-83.14c-2.75 0-5-2.25-5-5v-3.75c0-2.75 2.25-5 5-5h83.15v13.75z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "M112.92,107.04H19.82c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h93.09V107.04z"
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
      x: 13.82,
      y: 4,
      width: 9.75,
      height: 121.07,
      clipPath: "url(#a)",
      fill: "#5D4037"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m111.18 7v97.04h-1.46c-1.66 0-3 1.34-3 3v13.96h-86.47c-1.89 0-3.43-1.54-3.43-3.43v-107.14c0-1.89 1.54-3.43 3.43-3.43h90.93m3-3h-93.93c-3.55 0-6.43 2.88-6.43 6.43v107.14c0 3.55 2.88 6.43 6.43 6.43h89.46v-16.96h4.46v-103.04h0.01z",
        fill: "#424242"
      })
    )
  );
}

exports.default = ClosedBook;
