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

function PlayOrPauseButton(props) {
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
          "m84.13 36c1.03 0 1.87 0.84 1.87 1.87v52.26c0 1.03-0.84 1.87-1.87 1.87h-10.26c-1.03 0-1.87-0.84-1.87-1.87v-52.26c0-1.03 0.84-1.87 1.87-1.87h10.26m0-3h-10.26c-2.68 0-4.87 2.19-4.87 4.87v52.26c0 2.69 2.19 4.87 4.87 4.87h10.26c2.69 0 4.87-2.19 4.87-4.87v-52.26c0-2.68-2.19-4.87-4.87-4.87z"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.13 36c1.03 0 1.87 0.84 1.87 1.87v52.26c0 1.03-0.84 1.87-1.87 1.87h-10.26c-1.03 0-1.87-0.84-1.87-1.87v-52.26c0-1.03 0.84-1.87 1.87-1.87h10.26m0-3h-10.26c-2.68 0-4.87 2.19-4.87 4.87v52.26c0 2.69 2.19 4.87 4.87 4.87h10.26c2.69 0 4.87-2.19 4.87-4.87v-52.26c0-2.68-2.19-4.87-4.87-4.87z"
      }),
      _react2.default.createElement("path", {
        d:
          "m22.28 36c0.38 0 0.76 0.1 1.12 0.31l43.45 25.66c1.53 0.9 1.53 3.16 0 4.05l-43.45 25.67c-0.36 0.21-0.75 0.31-1.12 0.31-1.19 0-2.28-0.98-2.28-2.34v-51.32c0-1.36 1.09-2.34 2.28-2.34m0-3c-2.91 0-5.28 2.39-5.28 5.34v51.32c0 2.94 2.37 5.34 5.28 5.34 0.92 0 1.84-0.25 2.64-0.72l43.46-25.67c1.64-0.96 2.62-2.69 2.62-4.61s-0.98-3.65-2.63-4.61l-43.44-25.66c-0.82-0.48-1.73-0.73-2.65-0.73z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "M84.13,92H73.87C72.84,92,72,91.16,72,90.13V37.87c0-1.03,0.84-1.87,1.87-1.87h10.26 c1.03,0,1.87,0.84,1.87,1.87v52.26C86,91.16,85.16,92,84.13,92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.13 92h-10.26c-1.03 0-1.87-0.84-1.87-1.87v-52.26c0-1.03 0.84-1.87 1.87-1.87h10.26c1.03 0 1.87 0.84 1.87 1.87v52.26c0 1.03-0.84 1.87-1.87 1.87z"
      }),
      _react2.default.createElement("path", {
        d:
          "M20,64V38.34c0-1.79,1.89-2.91,3.4-2.03l43.45,25.66c1.53,0.9,1.53,3.16,0,4.05L23.4,91.69 c-1.52,0.89-3.4-0.23-3.4-2.03V64z"
      })
    )
  );
}

exports.default = PlayOrPauseButton;
