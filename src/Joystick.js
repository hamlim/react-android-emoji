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

function Joystick(props) {
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
        "m32.87 82.05h-13.02c-1.77 0-3.21 1.44-3.21 3.21v5.09c0 1.77 1.44 3.21 3.21 3.21h13.02c1.77 0 3.21-1.44 3.21-3.21v-5.09c0-1.78-1.44-3.21-3.21-3.21z",
      fill: "#E53935"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m32.87 84.05c0.67 0 1.21 0.54 1.21 1.21v5.09c0 0.67-0.54 1.21-1.21 1.21h-13.02c-0.67 0-1.21-0.54-1.21-1.21v-5.09c0-0.67 0.54-1.21 1.21-1.21h13.02m0-2h-13.02c-1.77 0-3.21 1.44-3.21 3.21v5.09c0 1.77 1.44 3.21 3.21 3.21h13.02c1.77 0 3.21-1.44 3.21-3.21v-5.09c0-1.78-1.44-3.21-3.21-3.21z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m32.02 112.04h-15.69c-2.21 0-4 1.79-4 4v4.1c0 2.21 1.79 4 4 4h16.35c2.08 0 4.01-1.08 5.1-2.85l3.24-5.25s-6.79-4-9-4z",
      fill: "#0D47A1"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.02 112.04h-15.7c-2.21 0-9 4-9 4l3.24 5.25c1.09 1.77 3.02 2.85 5.1 2.85h16.35c2.21 0 4-1.79 4-4v-4.1c0.01-2.21-1.78-4-3.99-4z",
      fill: "#0D47A1"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m32.02 114.04c0.76 0.02 3.43 1.2 6.21 2.72l-2.15 3.48c-0.73 1.19-2.01 1.9-3.4 1.9h-16.35c-1.1 0-2-0.9-2-2v-4.1c0-1.1 0.9-2 2-2h15.69m0-2h-15.69c-2.21 0-4 1.79-4 4v4.1c0 2.21 1.79 4 4 4h16.35c2.08 0 4.01-1.08 5.1-2.85l3.24-5.25s-6.79-4-9-4z",
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
          "m112.02 114.04c1.1 0 2 0.9 2 2v4.1c0 1.1-0.9 2-2 2h-16.35c-1.4 0-2.67-0.71-3.4-1.9l-2.15-3.48c2.78-1.52 5.45-2.7 6.21-2.72h15.69m0-2h-15.7c-2.21 0-9 4-9 4l3.24 5.25c1.09 1.77 3.02 2.85 5.1 2.85h16.35c2.21 0 4-1.79 4-4v-4.1c0.01-2.21-1.78-4-3.99-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 58,
      y: 43.68,
      width: 12,
      height: 65.36,
      fill: "#eee"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 59.5,
        y: 45.18,
        width: 9,
        height: 62.36,
        fill: "#eee"
      }),
      _react2.default.createElement("path", {
        d: "m67 46.68v59.36h-6v-59.36h6m3-3h-12v65.36h12v-65.36z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m70.34 72.05h-12.68c-8.89 7.45-16.02 16.78-20.85 27.33l-0.28 0.62h54.94l-0.39-0.85c-4.81-10.46-11.89-19.73-20.74-27.1z",
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m69.24 75.05c7.12 6.11 13.09 13.63 17.44 21.95h-45.35c4.37-8.31 10.34-15.82 17.44-21.95h10.47m1.1-3h-12.68c-8.89 7.45-16.02 16.78-20.85 27.33l-0.28 0.62h54.94l-0.39-0.85c-4.81-10.46-11.89-19.73-20.74-27.1z",
        fill: "#616161"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 72.333,
        y2: 119.69,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.1217
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.8858
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 88.42h-104c-4.42 0-8 3.58-8 8v15.49c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-15.49c0-4.41-3.58-8-8-8z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 60.833,
        cy: 23,
        r: 23.552,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.1713
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.5571
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64.31,
      cy: 27.43,
      r: 23,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.31 7.43c11.03 0 20 8.97 20 20s-8.97 20-20 20-20-8.97-20-20 8.97-20 20-20m0-3c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23-10.3-23-23-23z",
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
          "m116 91.42c2.76 0 5 2.24 5 5v15.49c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-15.49c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v15.49c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-15.49c0-4.41-3.58-8-8-8z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Joystick;
