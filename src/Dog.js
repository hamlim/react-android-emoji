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

function Dog(props) {
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
        "m22.53 6.64c1.63 0 3.64 0.86 5.93 2.64l12.03 9.13c0.01 0.01 0.02 0.01 0.03 0.01h0.01c6.4-1.96 23.59-2.66 23.59-2.66 9.31 0.03 16.99 1.1 23.33 3.03h0.01c0.01 0 0.02 0 0.03-0.01l12.03-9.13c2.29-1.78 4.3-2.64 5.93-2.64 2.71 0 4.38 2.36 4.59 6.76l2.52 28.69v0.01c1.94 5.7 2.88 12.05 3.22 18.81 0.31 2.54 0.47 5.14 0.47 7.79 0 29.08-29.11 52.13-52.26 52.13-23.64 0-52.26-23.04-52.26-52.13 0-2.53 0.15-5.01 0.43-7.45 0.31-7.03 1.25-13.63 3.26-19.53v-0.01l2.52-28.69c0.21-4.39 1.88-6.75 4.59-6.75m0-2.97c-1.66 0-7.12 0.69-7.55 9.53l-2.48 28.28c-1.86 5.58-2.94 12.1-3.29 19.91-0.29 2.56-0.44 5.15-0.44 7.68 0 14.33 6.47 28.23 18.21 39.15 10.75 9.99 24.59 15.95 37.02 15.95 25.02 0 55.23-24.58 55.23-55.1 0-2.69-0.16-5.4-0.48-8.04-0.39-7.49-1.46-13.77-3.26-19.17l-2.48-28.28c-0.44-8.85-5.89-9.53-7.55-9.53-2.36 0-4.97 1.1-7.75 3.27l-10.83 8.22c-6.48-1.79-14.12-2.72-22.74-2.74h-0.01-0.12c-0.67 0.03-15.44 0.65-22.86 2.39l-10.89-8.28c-2.75-2.14-5.36-3.24-7.73-3.24z",
      fill: "#D3914F"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 64.131,
        x2: 64.131,
        y1: 18.892,
        y2: 120.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC559",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D47500",
        offset: 0.9988
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m112.7 42.48v-0.01l-2.52-28.69c-0.33-7.06-4.43-8.87-10.52-4.13l-12.03 9.13c-0.02 0-0.03 0.01-0.04 0.01-6.34-1.94-14.03-3.01-23.33-3.03 0 0-17.2 0.7-23.6 2.66-0.02 0-0.03-0.01-0.04-0.01l-12.03-9.13c-6.08-4.74-10.19-2.93-10.52 4.13l-2.52 28.69v0.01c-2.41 7.07-3.28 15.16-3.38 23.77-0.33 29.02 22.86 53.69 51.83 53.91v0.04c29.09-0.07 52.42-24.46 52.09-53.57-0.1-8.62-0.97-16.71-3.39-23.78z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("line", {
      x1: 37,
      x2: 37,
      y1: 16,
      y2: 16,
      fill: "#E59242"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "M116.26,69.08c0,29.08-29.11,52.13-52.26,52.13c-23.64,0-52.26-23.04-52.26-52.13S30.59,16.42,64,16.42 S116.26,40,116.26,69.08z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "e"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 75.89,
        y2: 120.59,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF8E1",
        offset: 0.1582
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D8D3BF",
        offset: 0.7074
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9C4B2",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.97 61.01c-5.3-1.14-14.41-0.19-19.02 14.62-1 3.22-4.16 7.06-7.34 7.14-6.3 0.15-7.57-7.58-18.8-7.58s-12.05 7.72-18.35 7.58c-3.17-0.07-6.43-3.92-7.44-7.14-4.61-14.81-13.72-15.76-19.02-14.62-22.7 4.87-4.91 38.57 4 48.1 21.29 22.75 60.14 23.43 82.07 0 8.91-9.53 26.6-43.23 3.9-48.1z",
      clipPath: "url(#e)",
      fill: "url(#d)"
    }),
    _react2.default.createElement("ellipse", {
      cx: 43.5,
      cy: 60.5,
      rx: 6.5,
      ry: 7.5
    }),
    _react2.default.createElement("ellipse", {
      cx: 84.5,
      cy: 60.5,
      rx: 6.5,
      ry: 7.5
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 93.235,
        y2: 75.832,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#262626",
        offset: 0.3547
      }),
      _react2.default.createElement("stop", {
        stopColor: "#575757",
        offset: 0.8372
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.29 93.57c-4.83 0-11.29-3.66-11.29-8.13v-0.22c0-4.47 4.41-9.22 9.24-9.22h3.51c4.83 0 9.24 4.75 9.24 9.22v0.11c0.01 4.47-5.86 8.24-10.7 8.24z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m91.68 90.12c-0.1-0.19-0.34-0.32-0.78-0.3-1.24 0.03-1.95 1.06-2.65 1.81-0.64 0.68-1.22 1.4-1.85 2.09-1.67 1.83-3.72 3.25-6.1 4.35-5.13 2.37-7.54 1.57-7.54 1.57-0.81-0.27-1.69-0.35-2.5-0.66-2.1-0.82-3.7-1.9-6.13-1.92-1.54-0.02-3.09 0.34-4.43 1-1.39 0.69-2.77 1.37-4.38 1.59 0 0-2.36 0.81-7.49-1.57-1.96-0.91-3.77-2.03-5.26-3.47-1.43-1.37-2.54-2.95-4.07-4.24-0.24-0.21-0.5-0.41-0.81-0.52-0.43-0.16-1.06-0.09-1.31 0.29s0 0.84 0.22 1.23c2.75 5.02 9.49 22.25 27.41 22.25s24.56-17.1 27.39-22.28c0.23-0.41 0.45-0.9 0.28-1.22z"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m74 102.63c0 5.01 1 17.94-10 17.94s-11-12.93-11-17.94v-1.56c0-5.01 4.06-9.07 9.07-9.07h2.86c5.01 0 9.07 4.06 9.07 9.07v1.56z"
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
        "m46.56 111.09c0-5.47 8.03-11.34 17.92-11.34s17.92 5.87 17.92 11.34-8.03 9.91-17.92 9.91-17.92-4.44-17.92-9.91z",
      clipPath: "url(#a)",
      fill: "#FF8282"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFF5B5"
      },
      _react2.default.createElement("path", {
        d:
          "m25.51 11.99 8.49 6.91c1.16 0.94 0.93 2.78-0.43 3.4l-8.84 4.03c-1.36 0.62-2.9-0.4-2.85-1.9l0.35-10.94c0.05-1.66 1.98-2.55 3.28-1.5z"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.49 11.99-8.49 6.91c-1.16 0.94-0.93 2.78 0.43 3.4l8.84 4.03c1.36 0.62 2.9-0.4 2.85-1.9l-0.35-10.94c-0.05-1.66-1.98-2.55-3.28-1.5z"
      })
    )
  );
}

exports.default = Dog;
