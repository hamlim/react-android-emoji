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

function PauseButton(props) {
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
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m54 36c1.1 0 2 0.9 2 2v52c0 1.1-0.9 2-2 2h-12c-1.1 0-2-0.9-2-2v-52c0-1.1 0.9-2 2-2h12m0-3h-12c-2.76 0-5 2.24-5 5v52c0 2.76 2.24 5 5 5h12c2.76 0 5-2.24 5-5v-52c0-2.76-2.24-5-5-5z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86 36c1.1 0 2 0.9 2 2v52c0 1.1-0.9 2-2 2h-12c-1.1 0-2-0.9-2-2v-52c0-1.1 0.9-2 2-2h12m0-3h-12c-2.76 0-5 2.24-5 5v52c0 2.76 2.24 5 5 5h12c2.76 0 5-2.24 5-5v-52c0-2.76-2.24-5-5-5z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m54 92h-12c-1.1 0-2-0.9-2-2v-52c0-1.1 0.9-2 2-2h12c1.1 0 2 0.9 2 2v52c0 1.1-0.9 2-2 2z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m86 92h-12c-1.1 0-2-0.9-2-2v-52c0-1.1 0.9-2 2-2h12c1.1 0 2 0.9 2 2v52c0 1.1-0.9 2-2 2z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = PauseButton;
