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

function Paintbrush(props) {
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
        cx: 23.083,
        cy: 93.333,
        r: 19.364,
        gradientTransform: "matrix(1 0 0 .9999 0 .007217)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F47A00",
        offset: 0.4277
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F17200",
        offset: 0.6585
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED6400",
        offset: 0.8418
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E65100",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.06 90.75s-5.46-8.56-9.81-6.94c-6.62 2.48-4.57 1.64-11.62 4.81-17.66 7.93-4.81 18.13-21.78 31.46-1.66 1.3-0.72 3.98 1.38 3.91 9.42-0.31 24.9-2.91 31.18-11.72 6.52-9.17 2.9-15.27 10.65-21.52z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 15.255,
        cy: 105.49,
        r: 15.699,
        gradientTransform: "matrix(1 0 0 .9999 2.2157 -16.194)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CF2D2D",
        offset: 0.3881
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C42525",
        offset: 0.7409
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.62 113.12c-6.68 2.49-7.46 0.31-7.3-8.39 0.06-3.45-2.03-3.84-4.65-3.02-1.23 5.22-1.67 11.19-10.81 18.37-1.66 1.3-0.72 3.87 1.38 3.91 12.1 0.25 23.43-2.65 30.19-10.5-1-1.47-4.56-1.96-8.81-0.37z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m39.4 86.6c0.98 0 2.94 1.63 4.67 3.75-3.24 3.44-4.11 6.93-4.95 10.32-0.75 3.03-1.53 6.16-4.15 9.85-0.22 0.31-0.5 0.64-0.81 1l-0.13 0.15c-0.16 0.18-0.32 0.35-0.49 0.52l-0.04 0.04c-6.62 7.02-17.13 8.67-25.06 8.77 7.53-6.57 8.83-12.67 9.87-17.57 1.1-5.18 1.83-8.61 9.55-12.07 1.08-0.49 1.95-0.88 2.67-1.2 3.34-1.51 3.34-1.51 6.83-2.81l1.94-0.72c0.02-0.02 0.05-0.03 0.1-0.03m0-3c-0.39 0-0.78 0.06-1.15 0.21-6.62 2.48-4.57 1.64-11.63 4.81-17.1 7.68-5.59 17.49-20.25 30.2-0.47 0.4-0.96 0.81-1.48 1.22-0.01 0.01-0.03 0.02-0.04 0.03l-0.01 0.01c-0.61 0.49-0.87 1.15-0.83 1.79 0.04 1.08 0.87 2.11 2.15 2.11h0.08c0.47 0.01 0.95 0.01 1.42 0.01 11.14 0 21.48-2.78 28.03-9.72 0.24-0.25 0.48-0.5 0.71-0.76 0.01-0.01 0.02-0.02 0.03-0.04 0.35-0.4 0.69-0.8 0.99-1.22 6.53-9.17 2.91-15.27 10.66-21.52-0.02 0.02-4.57-7.13-8.68-7.13z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 90.5,
        cy: 3.25,
        r: 69.968,
        gradientTransform: "matrix(1 0 0 .9999 0 .007217)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1F8EEB",
        offset: 0.2752
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1A79D5",
        offset: 0.7013
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0.7539
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122.78 16.2c1.98-3.14 1.5-7.23-1.12-9.85s-6.72-3.1-9.85-1.12c-8.25 5.21-24.91 18.39-53.84 49.56l16.25 16.25c31.16-28.94 43.36-46.59 48.56-54.84z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 55.25,
        cy: 59.25,
        r: 39.869,
        gradientTransform: "matrix(1 0 0 .9999 0 .007217)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m57.96 54.79c-7.65 8.24-15.38 18.41-24.58 29.4-0.67 0.79-0.62 1.97 0.11 2.7l8.72 8.72c0.73 0.73 1.91 0.78 2.7 0.11 10.99-9.21 21.05-17.04 29.29-24.69l-16.24-16.24z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116.01 7.01c1.33 0 2.58 0.52 3.52 1.46 1.63 1.63 1.92 4.2 0.71 6.13-9.72 15.4-25.9 33.65-48.08 54.24-5.52 5.13-12.01 10.44-18.87 16.07-3.1 2.55-6.31 5.17-9.61 7.93l-7.43-7.43c3.03-3.63 5.89-7.16 8.66-10.57 5.32-6.55 10.34-12.74 15.23-18.01 30.16-32.49 46.31-44.69 53.25-49.07 0.8-0.49 1.7-0.75 2.62-0.75m0-3c-1.45 0-2.91 0.4-4.21 1.22-8.25 5.21-24.91 18.39-53.84 49.56-7.65 8.24-15.38 18.41-24.58 29.4-0.67 0.79-0.62 1.97 0.11 2.7l8.72 8.72c0.39 0.39 0.9 0.58 1.41 0.58 0.46 0 0.92-0.16 1.29-0.47 10.99-9.21 21.05-17.04 29.29-24.69 31.17-28.93 43.36-46.58 48.57-54.83 1.98-3.14 1.5-7.23-1.12-9.85-1.53-1.54-3.57-2.34-5.64-2.34z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Paintbrush;
