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

function Cinema(props) {
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
          "m23.53 61.47c0.56 0 1.13 0.13 1.69 0.4l20.98 14.71v-9.44c0-3.12 2.55-5.67 5.67-5.67h47.22c3.12 0 5.67 2.55 5.67 5.67v34c0 3.12-2.55 5.67-5.67 5.67h-47.23c-3.12 0-5.67-2.55-5.67-5.67v-9.44l-20.97 14.7c-0.55 0.28-1.13 0.4-1.69 0.4-1.98 0-3.78-1.59-3.78-3.78v-37.77c0-2.19 1.8-3.78 3.78-3.78m75.55-3h-47.22c-4.78 0-8.67 3.89-8.67 8.67v3.68l-16.25-11.4c-0.12-0.08-0.25-0.16-0.38-0.23-0.96-0.48-1.98-0.72-3.03-0.72-1.76 0-3.44 0.68-4.72 1.91-1.33 1.28-2.06 3.01-2.06 4.87v37.77c0 3.74 3.04 6.78 6.78 6.78 1.05 0 2.07-0.24 3.03-0.72 0.13-0.07 0.26-0.14 0.38-0.23l16.25-11.4v3.68c0 4.78 3.89 8.67 8.67 8.67h47.22c4.78 0 8.67-3.89 8.67-8.67v-34c0-4.77-3.89-8.66-8.67-8.66z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.77 21.2c11.33 0 20.52 9.19 20.52 20.52s-9.19 20.52-20.52 20.52-20.52-9.19-20.52-20.52 9.19-20.52 20.52-20.52m0-3c-12.97 0-23.52 10.55-23.52 23.52s10.55 23.52 23.52 23.52 23.52-10.55 23.52-23.52-10.55-23.52-23.52-23.52z"
      }),
      _react2.default.createElement("path", {
        d:
          "m93.89 33.51c7.93 0 14.36 6.43 14.36 14.36s-6.43 14.36-14.36 14.36-14.36-6.43-14.36-14.36 6.42-14.36 14.36-14.36m0-3c-9.57 0-17.36 7.79-17.36 17.36s7.79 17.36 17.36 17.36 17.36-7.79 17.36-17.36-7.79-17.36-17.36-17.36z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m99.08 61.47h-47.22c-3.12 0-5.67 2.55-5.67 5.67v9.44l-20.97-14.71c-2.51-1.26-5.47 0.57-5.47 3.38v37.77c0 2.81 2.96 4.63 5.47 3.38l20.98-14.71v9.44c0 3.12 2.55 5.67 5.67 5.67h47.22c3.12 0 5.67-2.55 5.67-5.67v-34c-0.01-3.11-2.56-5.66-5.68-5.66z"
      }),
      _react2.default.createElement("circle", {
        cx: 58.77,
        cy: 41.72,
        r: 20.52
      }),
      _react2.default.createElement("circle", {
        cx: 93.89,
        cy: 47.88,
        r: 14.36
      })
    )
  );
}

exports.default = Cinema;
