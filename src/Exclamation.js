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

function Exclamation(props) {
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
      "g",
      {
        fill: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 64,
          x2: 64,
          y1: 4.3925,
          y2: 123.33,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FF5252",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FD4D4D",
          offset: 0.2061
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F64040",
          offset: 0.4365
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EA2A2A",
          offset: 0.6787
        }),
        _react2.default.createElement("stop", {
          stopColor: "#DA0B0B",
          offset: 0.9274
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D50000",
          offset: 1
        })
      ),
      _react2.default.createElement("ellipse", {
        cx: 64,
        cy: 112,
        rx: 12,
        ry: 12
      }),
      _react2.default.createElement("path", {
        d:
          "M70.14,92H57.86c-2.19,0-3.98-1.74-4.03-3.91L52,8.09C51.95,5.85,53.77,4,56.03,4h15.94 c2.26,0,4.08,1.85,4.03,4.09l-1.83,80C74.12,90.26,72.33,92,70.14,92z"
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
          "m64 103c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-3c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z"
      }),
      _react2.default.createElement("path", {
        d:
          "m71.97 7c0.39 0 0.63 0.2 0.75 0.31 0.13 0.14 0.29 0.37 0.28 0.71l-1.83 80c-0.01 0.54-0.48 0.98-1.03 0.98h-12.28c-0.56 0-1.02-0.44-1.03-0.98l-1.83-80c-0.01-0.34 0.15-0.57 0.28-0.71 0.12-0.11 0.36-0.31 0.75-0.31h15.94m0-3h-15.94c-2.26 0-4.08 1.85-4.03 4.09l1.83 80c0.05 2.17 1.84 3.91 4.03 3.91h12.27c2.19 0 3.98-1.74 4.03-3.91l1.83-80c0.06-2.24-1.76-4.09-4.02-4.09z"
      })
    )
  );
}

exports.default = Exclamation;
