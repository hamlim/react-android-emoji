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

function TwoHearts(props) {
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
        id: "b",
        cx: 34.5,
        cy: 42,
        r: 64.228,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.17 57.24c-15.63-8.57-31.61 6.97-31.61 6.97s4.58-21.79-11.16-30.41c-11.82-6.48-30.45-4.5-37.14 19.53-6.7 24.03 15.41 70.53 15.41 70.53s0.23 0.03 0.29-0.09c-0.06 0.12 0.03 0.24 0.03 0.24s51.01-6.39 67.67-24.96 8.34-35.33-3.49-41.81z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.13 33.61c3.73 0 7.48 0.97 10.84 2.82 13.57 7.44 9.71 26.97 9.67 27.17l-2.02 9.62 7.05-6.85c0.09-0.09 9.06-8.69 19.5-8.69 3.02 0 5.9 0.74 8.58 2.21 5.87 3.22 9.99 8.79 11.03 14.9 1.22 7.14-1.66 14.84-8.33 22.28-13.94 15.54-54.52 22.32-63.88 23.71-3.9-8.69-20-46.53-14.4-66.63 4.96-17.88 15.89-20.54 21.96-20.54m0-3c-9.86 0-20.22 6.06-24.86 22.71-6.7 24.03 15.41 70.53 15.41 70.53s0.02 0 0.06 0c0.07 0 0.19-0.01 0.23-0.09-0.06 0.12 0.03 0.24 0.03 0.24s51-6.38 67.66-24.95 8.33-35.33-3.49-41.81c-3.38-1.85-6.77-2.58-10.02-2.58-11.77 0-21.59 9.54-21.59 9.54s4.58-21.79-11.16-30.41c-3.63-1.99-7.9-3.18-12.27-3.18z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 61.84,
        cy: 13.681,
        r: 38.496,
        gradientTransform: "matrix(.9585 -.2796 .2615 .8963 17.634 18.159)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.44 4.53c-10.35 3.02-10.54 16.5-10.54 16.5s-7.36-11.28-17.79-8.24c-7.83 2.29-14.95 11.1-7.54 24.25 7.42 13.15 36.77 23.58 36.77 23.58s0.11-0.09 0.09-0.16c0.02 0.08 0.12 0.09 0.12 0.09s19.09-24.55 18.27-39.63c-0.81-15.07-11.54-18.68-19.38-16.39z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m108.85 6.9c7.02 0 11.5 5.3 11.98 14.19 0.57 10.6-10.69 28.23-16.42 35.99-9.02-3.47-28.01-12.27-33.22-21.51-2.78-4.93-3.46-9.5-1.94-13.21 1.28-3.15 4.16-5.64 7.71-6.68 0.91-0.27 1.83-0.4 2.74-0.4 6.73 0 11.65 7.33 11.7 7.4l5.37 8.23 0.14-9.83c0-0.11 0.25-11.29 8.38-13.67 1.15-0.34 2.35-0.51 3.56-0.51m0-3c-1.51 0-3.01 0.22-4.41 0.63-10.35 3.02-10.54 16.5-10.54 16.5s-5.72-8.76-14.21-8.76c-1.15 0-2.34 0.16-3.58 0.52-7.83 2.29-14.95 11.1-7.54 24.25 7.42 13.15 36.77 23.58 36.77 23.58s0.11-0.09 0.09-0.16c0.02 0.08 0.12 0.09 0.12 0.09s19.09-24.55 18.27-39.63c-0.67-12.37-8.02-17.02-14.97-17.02z",
        fill: "#424242"
      })
    )
  );
}

exports.default = TwoHearts;
