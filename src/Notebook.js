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

function Notebook(props) {
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
    _react2.default.createElement("path", {
      d:
        "M112.03,111.14H21.97c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h90.05V111.14z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.03 4h-89.63c-3.55 0-6.43 2.88-6.43 6.43v107.14c0 3.55 2.88 6.43 6.43 6.43h86.42v-12.86h3.2v-107.14z",
      fill: "#9E9E9E"
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
    _react2.default.createElement("path", {
      d:
        "m83.84 47.64h-32.46c-2.85 0-5.15-2.31-5.15-5.15v-12.49c0-2.85 2.31-5.15 5.15-5.15h32.46c2.85 0 5.15 2.31 5.15 5.15v12.49c0 2.84-2.31 5.15-5.15 5.15z",
      fill: "#E3E3E3"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "M112.03,111.14H21.97c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h90.05V111.14z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m112.03 4h-89.63c-3.55 0-6.43 2.88-6.43 6.43v107.14c0 3.55 2.88 6.43 6.43 6.43h86.42v-12.86h3.2v-107.14z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement("rect", {
      x: 12.39,
      y: 0.43,
      width: 17.5,
      height: 132.14,
      clipPath: "url(#b)",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 19.096,
        x2: 104.54,
        y1: 115.96,
        y2: 115.96,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0091529
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.54 120.79h-80.94c-2.47 0-4.5-2.03-4.5-4.5v-0.64c0-2.47 2.02-4.5 4.5-4.5h80.94v9.64z",
      fill: "url(#a)"
    })
  );
}

exports.default = Notebook;
