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

function ReminderRibbon(props) {
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
        "M94,25.16c-0.65-7.67-5.28-13.11-11.19-16.27C77.39,6,70.49,4.58,63.96,4.47 C57.42,4.58,50.42,6,45,8.9c-5.91,3.16-10.64,8.6-11.29,16.27c-0.6,7.14-0.96,12.03,0.42,19.34c-0.8-4.82,1.81-11.83,3.49-14.23 c5.9-8.43,17-10.3,26.33-10.42c9.33,0.12,20.33,1.99,26.23,10.42c1.68,2.4,4.24,9.41,3.44,14.23C95.01,37.19,94.6,32.31,94,25.16z",
      fill: "#FBC02D"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 70.338,
        x2: 32.944,
        y1: 64.497,
        y2: 98.989,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.5949
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0.8606
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M93.22,21.22c-2.32,15.83-17.7,38.07-35.33,52.24C43.33,85.16,8,99.07,8,99.07v25 c18-4.15,35.33-13.9,49.89-25.61C75.52,84.29,90.34,65.81,94.1,41.94C95.62,32.28,93.22,21.22,93.22,21.22z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.96 7.47c6.47 0.12 12.82 1.6 17.44 4.07 3.3 1.77 8.95 5.92 9.61 13.87 0.03 0.4 0.07 0.86 0.1 1.24-5.56-6.37-14.46-9.65-27.11-9.65h-0.04s-0.03 0-0.04 0c-12.61 0-21.79 3.41-27.32 9.79 0.03-0.42 0.07-0.9 0.11-1.34 0.66-7.91 6.37-12.11 9.71-13.89 4.61-2.47 11-3.97 17.54-4.09m27.54 28.75c-0.06 1.68-0.21 3.46-0.49 5.25-3.15 19.99-14.98 38.38-35.23 54.65-10.26 8.25-25.78 18.87-44.78 24.06v-19.15c8-3.09 35.59-14.82 48.54-25.22 13.4-10.79 25.52-25.9 31.96-39.59m-27.54-31.75c-6.54 0.11-13.54 1.53-18.96 4.43-5.91 3.16-10.65 8.6-11.29 16.27-0.6 7.14-0.96 12.03 0.42 19.34-0.8-4.82 1.81-11.83 3.49-14.23 5.9-8.43 17-10.3 26.33-10.43 9.33 0.12 20.33 1.99 26.23 10.43 0.12 0.17 0.24 0.36 0.37 0.58-5.59 14.37-18.62 31.14-32.89 42.61-14.56 11.69-49.66 25.52-49.66 25.52v25.05c18-4.15 35.1-13.88 49.66-25.58 17.63-14.17 32.56-32.65 36.32-56.52 0.76-4.82 0.66-9.98 0.25-13.95-0.07-0.91-0.15-1.85-0.24-2.83-0.65-7.67-5.28-13.11-11.19-16.27-5.41-2.89-12.31-4.31-18.84-4.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 67.627,
        x2: 82.433,
        y1: 37.513,
        y2: 91.802,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.2168
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0.8703
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34.53 21.22c2.32 15.83 17.83 38.07 35.46 52.24 14.55 11.7 50.01 25.61 50.01 25.61v25c-18-4.15-35.46-13.9-50.02-25.61-17.62-14.17-32.51-32.65-36.27-56.52-1.52-9.66 0.82-20.72 0.82-20.72z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m36.1 35.98c6.31 13.75 18.13 28.87 31.75 39.82 12.96 10.42 41.46 22.27 49.19 25.39l-0.12 19.16c-15.03-4.19-30.97-12.7-45.31-24.22-20.1-16.16-31.89-34.54-35.06-54.65-0.29-1.81-0.42-3.67-0.45-5.5m-1.57-14.76s-2.46 11.06-0.94 20.72c3.76 23.87 18.52 42.35 36.14 56.52 14.56 11.71 32.44 21.6 50.17 25.75l0.15-25.05s-35.77-13.99-50.32-25.7c-17.63-14.17-32.88-36.41-35.2-52.24z",
        fill: "#424242"
      })
    )
  );
}

exports.default = ReminderRibbon;
