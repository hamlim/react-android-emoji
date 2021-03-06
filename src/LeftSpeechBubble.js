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

function LeftSpeechBubble(props) {
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
      "radialGradient",
      {
        id: "a",
        cx: 65.342,
        cy: 65.067,
        r: 66.666,
        gradientTransform: "matrix(1 0 0 .661 0 22.057)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.3766
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.7657
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m103.63 91.92c15.06-11.67 19.78-27.21 19.78-27.21s-14.19-41.27-59.41-41.27-59.73 41.27-59.73 41.27 12.42 39.85 59.73 39.85c8.24 0 15.41-1.21 21.64-3.21 5.95 8.49 18.78 12.47 25.3 13.32 1.71 0.22 2.88-1.66 1.91-3.08-2.93-4.31-7.58-12.03-9.22-19.67z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 26.44c17.78 0 32.68 6.55 44.27 19.46 7.2 8.02 10.86 16.16 11.95 18.86-1.27 3.4-6.4 15.47-18.43 24.79-0.91 0.71-1.34 1.87-1.1 3 1.53 7.13 5.49 14.26 8.38 18.78-6.68-1.35-16.42-5.17-20.99-11.69-0.57-0.82-1.5-1.28-2.46-1.28-0.31 0-0.61 0.05-0.92 0.14-6.34 2.03-13.31 3.06-20.72 3.06-18.64 0-33.85-6.31-45.21-18.75-6.96-7.65-10.3-15.41-11.3-18.05 1.12-2.72 4.84-10.84 12.09-18.85 11.7-12.92 26.65-19.47 44.44-19.47m0-3c-45.22 0-59.73 41.27-59.73 41.27s12.42 39.85 59.73 39.85c8.24 0 15.41-1.21 21.64-3.21 5.95 8.49 18.78 12.47 25.3 13.32 0.09 0.01 0.19 0.02 0.28 0.02 1.56 0 2.55-1.76 1.64-3.1-2.93-4.31-7.58-12.03-9.22-19.67 15.06-11.67 19.78-27.21 19.78-27.21s-14.2-41.27-59.42-41.27z",
        fill: "#424242"
      })
    )
  );
}

exports.default = LeftSpeechBubble;
