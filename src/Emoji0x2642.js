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

function Emoji0x2642(props) {
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
        y1: 12.25,
        y2: 115.83,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00BFA5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00B29A",
        offset: 0.7047
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00AB94",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.99 12h-20.01c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h6.28c0.89 0 1.34 1.08 0.71 1.71l-9.49 9.48c-16.85-11.4-40.15-9.24-54.55 6.49-14.74 16.09-14.54 41.22 0.42 57.09 16.32 17.32 43.62 17.63 60.33 0.93 14.48-14.47 16.18-36.86 5.12-53.2l9.49-9.48c0.63-0.63 1.71-0.18 1.71 0.71v6.27c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4h-12.01zm-28.2 79.82c-9.83 9.83-25.83 9.83-35.66 0s-9.83-25.81 0-35.64 25.83-9.83 35.66 0 9.83 25.81 0 35.64z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112 15c0.55 0 1 0.45 1 1v32c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-6.27c0-2.21-1.8-4-4.01-4-1.06 0-2.06 0.42-2.82 1.17l-9.49 9.48c-1.02 1.02-1.17 2.61-0.36 3.8 10.45 15.43 8.45 36.2-4.75 49.39-7.38 7.37-17.18 11.43-27.61 11.43-10.87 0-20.97-4.36-28.43-12.29-13.92-14.77-14.09-38.05-0.39-53.01 7.5-8.19 17.73-12.7 28.81-12.7 7.84 0 15.39 2.31 21.84 6.67 0.51 0.35 1.1 0.51 1.68 0.51 0.77 0 1.54-0.3 2.12-0.88l9.49-9.48c1.15-1.15 1.49-2.86 0.87-4.36s-2.07-2.47-3.7-2.47h-6.28c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h32.03m-58.04 87.2c7.54 0 14.63-2.93 19.95-8.25s8.25-12.4 8.25-19.94-2.93-14.62-8.25-19.94-12.41-8.25-19.95-8.25-14.63 2.93-19.95 8.25-8.25 12.4-8.25 19.94 2.93 14.62 8.25 19.94 12.41 8.25 19.95 8.25m58.04-90.19h-32.02c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h6.28c0.89 0 1.34 1.08 0.71 1.71l-9.49 9.48c-7.08-4.79-15.3-7.18-23.52-7.18-11.34 0-22.68 4.56-31.03 13.68-14.74 16.08-14.54 41.21 0.42 57.08 8.3 8.82 19.46 13.23 30.61 13.23 10.76 0 21.51-4.1 29.72-12.3 14.48-14.47 16.18-36.86 5.12-53.2l9.49-9.48c0.2-0.2 0.45-0.29 0.7-0.29 0.51 0 1.01 0.4 1.01 1v6.27c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm-58.04 87.19c-6.46 0-12.91-2.46-17.83-7.37-9.83-9.83-9.83-25.81 0-35.64 4.92-4.91 11.37-7.37 17.83-7.37s12.91 2.46 17.83 7.37c9.83 9.83 9.83 25.81 0 35.64-4.91 4.91-11.37 7.37-17.83 7.37z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Emoji0x2642;
