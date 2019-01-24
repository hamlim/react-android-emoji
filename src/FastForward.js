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

function FastForward(props) {
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
        y1: 4.25,
        y2: 123.91,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
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
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26.04 36c0.34 0 0.68 0.1 1.01 0.31l38.93 25.66c1.37 0.9 1.37 3.16 0 4.05l-38.93 25.67c-0.33 0.21-0.67 0.31-1.01 0.31-1.06 0-2.04-0.98-2.04-2.34v-51.32c0-1.36 0.98-2.34 2.04-2.34m0-3c-2.78 0-5.04 2.39-5.04 5.34v51.32c0 2.94 2.26 5.34 5.04 5.34 0.93 0 1.85-0.28 2.65-0.8l38.93-25.67c1.49-0.97 2.38-2.67 2.38-4.53s-0.89-3.56-2.38-4.54l-38.92-25.65c-0.81-0.53-1.73-0.81-2.66-0.81z"
      }),
      _react2.default.createElement("path", {
        d:
          "m66.09 36c0.34 0 0.7 0.1 1.03 0.31l39.83 25.66c1.4 0.9 1.4 3.16 0 4.05l-39.83 25.67c-0.33 0.21-0.69 0.31-1.03 0.31-1.09 0-2.09-0.98-2.09-2.34v-51.32c0-1.36 1-2.34 2.09-2.34m0-3c-2.81 0-5.09 2.39-5.09 5.34v51.32c0 2.94 2.28 5.34 5.09 5.34 0.93 0 1.85-0.27 2.65-0.78l39.84-25.67c1.52-0.97 2.43-2.67 2.43-4.55s-0.91-3.58-2.43-4.55l-39.84-25.66c-0.81-0.52-1.72-0.79-2.65-0.79z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "M24,64V38.34c0-1.79,1.69-2.91,3.05-2.03l38.93,25.66c1.37,0.9,1.37,3.16,0,4.05L27.05,91.69 C25.69,92.58,24,91.45,24,89.66V64z"
      }),
      _react2.default.createElement("path", {
        d:
          "M64,64V38.34c0-1.79,1.73-2.91,3.12-2.03l39.83,25.66c1.4,0.9,1.4,3.16,0,4.05L67.12,91.69 C65.73,92.58,64,91.45,64,89.66V64z"
      })
    )
  );
}

exports.default = FastForward;
