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

function ChartWithDownwardsTrend(props) {
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
        y1: 4.378,
        y2: 123.54,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#575757",
        strokeMiterlimit: 10
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 4,
        width: 120,
        height: 120
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 104,
        y2: 104
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 84,
        y2: 84
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 64,
        y2: 64
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 44,
        y2: 44
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 24,
        y2: 24
      }),
      _react2.default.createElement("line", {
        x1: 104,
        x2: 104,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 84,
        x2: 84,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 64,
        x2: 64,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 44,
        x2: 44,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 24,
        x2: 24,
        y1: 4,
        y2: 124
      })
    ),
    _react2.default.createElement("polyline", {
      points:
        "116.16 113.19 93.46 75.66 78.4 80.66 59.96 30.51 34.6 49.53 10.77 13.5",
      fill: "none",
      stroke: "#2CA94F",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = ChartWithDownwardsTrend;
