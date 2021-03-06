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

function NotebookWithDecorativeCover(props) {
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
        "M105.27,124H18.43c-3.31,0-6-2.69-6-6V26.05c0-3.31,2.69-6,6-6h86.85V124z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.45 37.55h-5c-1.66 0-3-1.34-3-3v-12.97c0-1.66 1.34-3 3-3h5c1.66 0 3 1.34 3 3v12.97c0 1.66-1.34 3-3 3z",
      fill: "#EC4431"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.45 57.8h-5c-1.66 0-3-1.34-3-3v-12.97c0-1.66 1.34-3 3-3h5c1.66 0 3 1.34 3 3v12.97c0 1.65-1.34 3-3 3z",
      fill: "#FBBE00"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.45 78.04h-5c-1.66 0-3-1.34-3-3v-12.97c0-1.66 1.34-3 3-3h5c1.66 0 3 1.34 3 3v12.97c0 1.66-1.34 3-3 3z",
      fill: "#2CA94F"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.45 98.29h-5c-1.66 0-3-1.34-3-3v-12.97c0-1.66 1.34-3 3-3h5c1.66 0 3 1.34 3 3v12.97c0 1.65-1.34 3-3 3z",
      fill: "#4480F7"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 60.452,
        x2: 60.452,
        y1: 4.4464,
        y2: 111.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0.0087699
      }),
      _react2.default.createElement("stop", {
        stopColor: "#78909C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M108.48,111.14H18.43c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h90.05V111.14z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.6 7v11.58c0 1.66 1.34 3 3 3h3.76c0.12 0 0.21 0.1 0.21 0.21v12.54c0 0.12-0.1 0.21-0.21 0.21h-3.76c-1.66 0-3 1.34-3 3v1.28c0 1.66 1.34 3 3 3h3.76c0.12 0 0.21 0.1 0.21 0.21v12.54c0 0.12-0.1 0.21-0.21 0.21h-3.76c-1.66 0-3 1.34-3 3v1.28c0 1.66 1.34 3 3 3h3.76c0.12 0 0.21 0.1 0.21 0.21v12.54c0 0.12-0.1 0.21-0.21 0.21h-3.76c-1.66 0-3 1.34-3 3v1.28c0 1.66 1.34 3 3 3h3.76c0.12 0 0.21 0.1 0.21 0.21v12.54c0 0.12-0.1 0.21-0.21 0.21h-3.76c-1.66 0-3 1.34-3 3v9.86h-0.2c-1.66 0-3 1.34-3 3v9.88h-83.42c-1.89 0-3.43-1.54-3.43-3.43v-107.14c0-1.89 1.54-3.43 3.43-3.43h86.62m3-3h-89.62c-3.55 0-6.43 2.88-6.43 6.43v107.14c0 3.55 2.88 6.43 6.43 6.43h86.42v-12.86h3.2v-12.85h3.76c1.78 0 3.21-1.44 3.21-3.21v-12.55c0-1.78-1.44-3.21-3.21-3.21h-3.76v-1.28h3.76c1.78 0 3.21-1.44 3.21-3.21v-12.54c0-1.78-1.44-3.21-3.21-3.21h-3.76v-1.28h3.76c1.78 0 3.21-1.44 3.21-3.21v-12.55c0-1.78-1.44-3.21-3.21-3.21h-3.76v-1.28h3.76c1.78 0 3.21-1.44 3.21-3.21v-12.54c0-1.78-1.44-3.21-3.21-3.21h-3.76v-14.59z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#546E7A"
      },
      _react2.default.createElement("path", {
        d:
          "m83.36 21.34h-46.18c-1.03 0-1.71 0.7-1.71 1.75v26.3c0 1.05 0.68 1.75 1.71 1.75h46.18c1.03 0 1.71-0.7 1.71-1.75v-26.3c0-1.05-0.68-1.75-1.71-1.75zm-1.71 26.3h-42.76v-22.79h42.76v22.79z"
      }),
      _react2.default.createElement("path", {
        d:
          "m52.58 35.37h15.39c1.03 0 1.71-0.7 1.71-1.75s-0.68-1.75-1.71-1.75h-15.39c-1.03 0-1.71 0.7-1.71 1.75 0 1.04 0.68 1.75 1.71 1.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m47.45 42.38h25.65c1.03 0 1.71-0.7 1.71-1.75s-0.68-1.75-1.71-1.75h-25.65c-1.03 0-1.71 0.7-1.71 1.75s0.68 1.75 1.71 1.75z"
      })
    ),
    _react2.default.createElement("line", {
      x1: 95.27,
      x2: 95.27,
      y1: 4,
      y2: 111.14,
      fill: "none",
      stroke: "#424242",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 15.547,
        x2: 100.99,
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
        "m100.99 120.79h-80.94c-2.47 0-4.5-2.03-4.5-4.5v-0.64c0-2.47 2.02-4.5 4.5-4.5h80.94v9.64z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "M108.48,111.14H18.43c-3.31,0-6-2.69-6-6V10c0-3.31,2.69-6,6-6h90.05V111.14z"
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
      x: 6.7,
      y: -0.29,
      width: 12.86,
      height: 128.57,
      clipPath: "url(#a)",
      fill: "#546E7A"
    })
  );
}

exports.default = NotebookWithDecorativeCover;
