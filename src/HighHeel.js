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

function HighHeel(props) {
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
        id: "d",
        cx: 22.05,
        cy: 45.945,
        r: 108.58,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E30400",
        offset: 0.0722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DE0400",
        offset: 0.2464
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CF0401",
        offset: 0.454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B70302",
        offset: 0.6785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#960204",
        offset: 0.9136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#880205",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.19 97.38s-5.82 5.38-15.69 4.67c-21.82-1.56-31.53-38.53-39.12-54.19-2.51-5.18-8.38-10.2-11.63-14.8-2.22-3.14-2.51-7.01-2.51-7.01s-20.22 7.53-22.6 20.62c-2.08 11.45 2.75 15.53 5.37 23.4 3.88 11.63 2.95 53.96 2.95 53.96l4.1-0.03s-1.04-44.5 8.81-47.58c2.82-0.88 7.05 0.53 19.21 19.03 11.88 18.08 15.33 28.66 33.45 28.66h42.08c3.24 0 6.07-5.48 2.37-8.22-8.81-6.52-26.79-18.51-26.79-18.51z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m95.19 97.38s-5.82 5.38-15.69 4.67c-21.82-1.56-31.53-38.53-39.12-54.19-2.51-5.18-8.38-10.2-11.63-14.8-2.22-3.14-2.51-7.01-2.51-7.01s-20.22 7.53-22.6 20.62c-2.08 11.45 2.75 15.53 5.37 23.4 3.88 11.63 2.95 53.96 2.95 53.96l4.1-0.03s-1.04-44.5 8.81-47.58c2.82-0.88 7.05 0.53 19.21 19.03 11.88 18.08 15.33 28.66 33.45 28.66h42.08c3.24 0 6.07-5.48 2.37-8.22-8.81-6.52-26.79-18.51-26.79-18.51z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 43.754,
        x2: 43.754,
        y1: 55.351,
        y2: 127.85,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4D4D4D",
        offset: 0.0365
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.37 134.57-0.18-6.96-44.44-0.36c-10.72 0-15.85-4.33-21.2-17.71-3.11-7.76-9.42-22.28-22.12-34.45-12.87-12.34-18.9-19.7-38.6-20.09-25.11-0.51-20.53 81.16 4.58 81.16 19.79-0.01 121.96-1.59 121.96-1.59z",
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m25.67 26.53s0.44-1.67 3.08 0.44 12.87 17.45 15.25 26.18 12.25 34.9 21.5 38.33c9.25 3.44 23.13 0.4 30 6.21 6.87 5.82-15.46 6.74-24.98 3.04s-25.91-26.57-31.46-39.65c-14.1-33.22-13.39-34.55-13.39-34.55z",
      fill: "#30060A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26.63 29.12c0.07 0.05 0.16 0.12 0.25 0.19 2.03 1.62 11.95 16.29 14.22 24.62 1.91 6.99 12.06 36.16 23.35 40.35 4.31 1.6 9.3 1.92 14.13 2.23 5.89 0.38 11.45 0.73 14.71 3.27 0.25 0.19 0.52 0.34 0.8 0.44 3.11 2.08 18.32 12.26 26.1 18.02 0.35 0.26 0.69 0.64 0.47 1.42-0.22 0.82-0.85 1.31-1.05 1.33h-42.08c-13.77 0-17.9-6.58-26.11-19.68-1.5-2.4-3.05-4.87-4.83-7.58-11.2-17.03-16.28-20.52-20.47-20.52-0.72 0-1.42 0.11-2.14 0.33-3.01 0.94-7.04 4.1-9.29 19.53-0.41-9.73-1.23-19.18-2.83-23.96-0.79-2.36-1.73-4.34-2.64-6.26-2.21-4.66-3.96-8.34-2.63-15.65 1.83-10.09 17.01-16.83 20.04-18.08m-0.06-3.22c-0.35 0-0.57 0.14-0.71 0.29-2.73 1.09-20.04 8.43-22.23 20.47-2.07 11.46 2.76 15.54 5.38 23.4 3.88 11.63 2.95 53.96 2.95 53.96l4.1-0.03s-1.04-44.5 8.81-47.58c0.38-0.12 0.79-0.2 1.24-0.2 2.87 0 7.46 3.18 17.97 19.18 11.88 18.08 15.33 28.61 33.45 28.61h42.08c3.24 0 6.07-5.42 2.37-8.16-8.81-6.52-26.79-18.48-26.79-18.48s-0.03 0.04-0.05 0.06c-6.98-5.44-20.54-2.56-29.64-5.94-9.25-3.44-19.12-29.6-21.5-38.33-2.38-8.72-12.6-24.05-15.24-26.17-1.03-0.83-1.72-1.08-2.19-1.08z",
        fill: "#424242"
      })
    )
  );
}

exports.default = HighHeel;
