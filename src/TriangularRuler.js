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

function TriangularRuler(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("polygon", {
      points: "4 4 4 124 122.46 124",
      fill: "#90A4AE"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M7,11.31L115.29,121H7V11.31 M4,4v120h118.46L4,4L4,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 60.036,
        x2: 60.036,
        y1: 18.226,
        y2: 118.46,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0028914
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EBEBEB",
        offset: 0.3492
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2E2E2",
        offset: 0.5939
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D3D3D3",
        offset: 0.8065
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M8.91,113.37v6.17l102.25-0.24L8.91,18.1l0,21.74h7.12v5.69H8.91v5.69h7.12v5.69H8.91v5.69 h14.23v5.22H8.91v5.69h7.12v5.69H8.91v5.69h7.12v5.69H8.91v5.69h14.23v5.69H8.91v5.69h7.12v5.69H8.91z M29.31,58.05l43.06,42.82 H29.31V58.05z",
      fill: "url(#a)"
    })
  );
}

exports.default = TriangularRuler;
