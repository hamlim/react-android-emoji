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

function Bear(props) {
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
        id: "d",
        x1: 22.915,
        x2: 22.915,
        y1: 69.014,
        y2: -2.1591,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#916747",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#946A48",
        offset: 0.1477
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9F734C",
        offset: 0.274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.3484
      })
    ),
    _react2.default.createElement("circle", {
      cx: 22.92,
      cy: 24.8,
      r: 16.97,
      fill: "url(#d)",
      stroke: "#8B5E3C",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("circle", {
      cx: 22.92,
      cy: 24.8,
      r: 9.67,
      fill: "#69472D"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 105.08,
        x2: 105.08,
        y1: 69.014,
        y2: -2.1591,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#916747",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#946A48",
        offset: 0.1477
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9F734C",
        offset: 0.274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.3484
      })
    ),
    _react2.default.createElement("circle", {
      cx: 105.08,
      cy: 24.8,
      r: 16.97,
      fill: "url(#c)",
      stroke: "#8B5E3C",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("circle", {
      cx: 105.08,
      cy: 24.8,
      r: 9.67,
      fill: "#69472D"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 120.66,
        y2: 11.406,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7D593D",
        offset: 0.0011772
      }),
      _react2.default.createElement("stop", {
        stopColor: "#896242",
        offset: 0.1846
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A87B4F",
        offset: 0.513
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.5247
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 120.66c-46.7 0-56.5-24.26-56.5-44.61 0-15.76 5.39-31.72 14.78-43.77 7.42-9.53 20.68-20.87 41.72-20.87s34.3 11.35 41.72 20.87c9.4 12.06 14.78 28.01 14.78 43.77 0 20.35-9.8 44.61-56.5 44.61z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 12.91c20.44 0 33.33 11.03 40.54 20.29 9.19 11.79 14.46 27.41 14.46 42.85 0 35.63-29.91 43.11-55 43.11s-55-7.48-55-43.11c0-15.44 5.27-31.06 14.47-42.85 7.2-9.26 20.09-20.29 40.53-20.29m0-3c-37.07 0-58 35.15-58 66.14s21.58 46.11 58 46.11 58-15.11 58-46.11-20.93-66.14-58-66.14z",
      fill: "#8B5E3C"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 32.8,
        cy: 62.05,
        rx: 9.33,
        ry: 10.55
      }),
      _react2.default.createElement("ellipse", {
        cx: 95.2,
        cy: 62.05,
        rx: 9.33,
        ry: 10.55
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.96 71h-17.92c-10.34 0-18.81 8.66-18.81 19s8.46 19 18.81 19h17.91c10.34 0 18.81-8.66 18.81-19s-8.46-19-18.8-19z",
      fill: "#E6A965"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 71.033,
        y2: 83.479,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4D4D4D",
        offset: 0.1628
      }),
      _react2.default.createElement("stop", {
        stopColor: "#373737",
        offset: 0.3672
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0F0F0F",
        offset: 0.7836
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 82.93c5.69 0 9.02-2.44 10.96-5.4 1.94-2.95-0.24-6.53-3.77-6.53h-14.38c-3.53 0-5.71 3.58-3.78 6.53 1.95 2.95 5.28 5.4 10.97 5.4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.54 85.42s0.09 0.1 0.27 0.29c0.17 0.19 0.46 0.51 0.72 0.74 0.25 0.26 0.64 0.6 1.08 0.97 0.45 0.36 0.98 0.74 1.57 1.13 0.6 0.38 1.26 0.76 1.99 1.1 0.73 0.35 1.53 0.66 2.37 0.92 0.84 0.28 1.74 0.45 2.65 0.61 0.92 0.15 1.86 0.2 2.81 0.21 0.35-0.02 1.14-0.01 1.47-0.06 0.41-0.02 0.87-0.08 1.34-0.15 0.91-0.16 1.81-0.32 2.65-0.61 0.84-0.26 1.64-0.57 2.37-0.92 0.73-0.34 1.4-0.73 1.99-1.1 1.19-0.77 2.1-1.53 2.68-2.13 0.3-0.29 0.52-0.53 0.68-0.69 0.15-0.16 0.24-0.25 0.24-0.25l0.14-0.15c0.89-0.93 2.36-0.97 3.3-0.08 0.82 0.78 0.95 2.03 0.35 2.95 0 0-0.09 0.13-0.25 0.38-0.17 0.25-0.38 0.63-0.74 1.06-0.33 0.45-0.77 0.96-1.3 1.53-0.53 0.56-1.16 1.17-1.92 1.76-0.75 0.59-1.6 1.2-2.56 1.72-0.95 0.54-2 1.05-3.13 1.44-1.12 0.41-2.32 0.73-3.55 0.95-0.61 0.1-1.24 0.19-1.93 0.24-0.77 0.08-1.09 0.06-1.85 0.09-2.54-0.03-5.09-0.45-7.33-1.29-1.13-0.39-2.18-0.9-3.13-1.44-0.96-0.53-1.81-1.13-2.56-1.72s-1.38-1.2-1.92-1.76c-0.52-0.57-0.96-1.08-1.32-1.56-0.39-0.49-0.55-0.79-0.7-1.01-0.14-0.22-0.21-0.34-0.21-0.34-0.69-1.09-0.36-2.54 0.73-3.23 1-0.61 2.25-0.42 3 0.4z",
      fill: "#404040"
    })
  );
}

exports.default = Bear;
