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

function AthleticShoe(props) {
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
        id: "c",
        x1: 64.039,
        x2: 64.039,
        y1: 77.69,
        y2: 115.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.2553
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.8476
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.84 121.25c0.03 1.68-1.23 3.06-2.79 3.07l-113.09 0.11c-2.2 0-3.92-2.04-3.7-4.4l0.01-6.29s0.05-1.37 0.25-4.24c0.43-6.03 1.86-34.19 7.23-31.34 6.43 3.42 12.95 5.5 18.09 4.62 6.57-1.12 9.35-6.5 12.66-10.25 2.68-3.04 5.75-3.51 7.02-2.04 21.54 24.92 54.39 14.15 67.93 25.05 6.68 5.4 6.28 19.58 6.39 25.71z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m123.84 121.25c0.03 1.68-1.23 3.06-2.79 3.07l-113.09 0.11c-2.2 0-3.92-2.04-3.7-4.4l0.01-6.29s0.05-1.37 0.25-4.24c0.43-6.03 1.86-34.19 7.23-31.34 6.43 3.42 12.95 5.5 18.09 4.62 6.57-1.12 9.35-6.5 12.66-10.25 2.68-3.04 5.75-3.51 7.02-2.04 21.54 24.92 54.39 14.15 67.93 25.05 6.68 5.4 6.28 19.58 6.39 25.71z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m82.41 132.08c-10.36 11.05 45.59 0 45.59 0v-54.34h-42.02s18.36 30.96-3.57 54.34z",
      clipPath: "url(#a)",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d:
        "M128,115.81c0-1.72-0.92-2.81-2.1-2.81H1.87C0.69,113,0,114.09,0,115.81 v6.79c0,1.72,0.69,3.41,1.87,3.41H125.9c1.18,0,2.1-1.69,2.1-3.41V115.81z",
      clipPath: "url(#a)",
      fill: "#B0BEC5"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "M0,87.04c12.78,14.06,51.66,6.9,43.09-11.65c-2.42-5.23-5.72,0.09-11.75,2.5 C24.19,80.75,0,71.5,0,71.5V87.04z",
        fill: "#E0E0E0"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m67.87 72.56c-4.65 4.05-9.55 7.84-14.74 11.17-2.06 1.32-3.25 3.59-2.14 6 0.92 1.99 3.95 3.45 6 2.14 5.85-3.76 11.43-7.85 16.68-12.42 4.36-3.81-1.43-10.71-5.8-6.89z",
        fill: "#fff"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m70.64 73.44c0.97 0 2.01 0.82 2.41 1.9 0.26 0.68 0.34 1.69-0.7 2.59-4.95 4.31-10.33 8.31-16.44 12.24-0.19 0.12-0.42 0.18-0.7 0.18-0.92 0-2.04-0.69-2.4-1.47-0.83-1.79 0.71-3.03 1.4-3.48 4.98-3.2 9.88-6.91 14.97-11.34 0.47-0.41 0.96-0.62 1.46-0.62m0-2c-0.92 0-1.87 0.33-2.77 1.11-4.65 4.05-9.55 7.84-14.74 11.17-2.06 1.32-3.25 3.59-2.14 6 0.67 1.46 2.49 2.64 4.22 2.64 0.62 0 1.23-0.15 1.78-0.5 5.85-3.76 11.43-7.85 16.68-12.42 3.46-3.02 0.52-8-3.03-8z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m81.16 74.56c-3.38 5.16-7.08 10.12-11.17 14.74-1.63 1.83-2.16 4.33-0.44 6.35 1.42 1.67 4.74 2.25 6.35 0.44 4.62-5.2 8.88-10.64 12.7-16.46 3.17-4.85-4.26-9.92-7.44-5.07z",
        fill: "#fff"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m84.59 74.6c0.97 0 2.02 0.66 2.51 1.56 0.41 0.77 0.36 1.57-0.17 2.37-3.6 5.49-7.7 10.8-12.52 16.23-0.34 0.39-0.92 0.44-1.23 0.44-0.8 0-1.68-0.36-2.1-0.85-1.28-1.5-0.14-3.11 0.41-3.73 3.93-4.43 7.64-9.32 11.35-14.97 0.46-0.71 1.03-1.05 1.75-1.05m0-2c-1.26 0-2.52 0.58-3.43 1.97-3.38 5.16-7.08 10.12-11.17 14.74-1.63 1.83-2.16 4.33-0.44 6.35 0.81 0.95 2.24 1.55 3.62 1.55 1.03 0 2.04-0.34 2.73-1.11 4.62-5.2 8.88-10.64 12.7-16.46 2.26-3.47-0.87-7.04-4.01-7.04z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m47.45 72.7c13.83 15.81 32.02 17.88 46.65 19.54 9.03 1.03 16.82 1.91 21.46 5.64 5.07 4.08 5.2 16.08 5.25 21.85 0.01 0.57 0.01 1.1 0.02 1.57v0.01l-112.88 0.12c-0.15 0-0.3-0.07-0.43-0.22-0.1-0.11-0.32-0.41-0.28-0.9 0.01-0.09 0.01-0.18 0.01-0.27l0.01-6.23c0.01-0.25 0.07-1.6 0.24-4.09 0.03-0.42 0.06-0.95 0.1-1.56 1.22-18.7 2.86-24.79 3.84-26.76 6 3.05 11.35 4.59 15.91 4.59 1.03 0 2.03-0.08 2.97-0.24 6.38-1.09 9.8-5.44 12.54-8.93 0.64-0.82 1.25-1.6 1.86-2.29 1.2-1.34 2.25-1.77 2.73-1.83m0.11-3c-1.46 0-3.34 0.89-5.06 2.84-3.31 3.75-6.09 9.13-12.66 10.25-0.79 0.13-1.62 0.2-2.47 0.2-4.67 0-10.18-1.93-15.62-4.82-0.26-0.14-0.51-0.2-0.75-0.2-4.76 0-6.08 25.8-6.48 31.54-0.2 2.87-0.25 4.24-0.25 4.24l-0.01 6.29c-0.22 2.35 1.5 4.4 3.69 4.4l113.09-0.11c1.56 0 2.82-1.38 2.79-3.07-0.11-6.14 0.3-20.32-6.39-25.71-13.54-10.9-46.39-0.13-67.93-25.05-0.45-0.52-1.14-0.8-1.95-0.8z",
        fill: "#424242"
      })
    )
  );
}

exports.default = AthleticShoe;
