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

function Gift(props) {
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
        cx: 102.25,
        cy: 12.5,
        r: 34.324,
        gradientTransform: "matrix(-1 0 0 1.1051 204.04 -.4321)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2562
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.08 38.51s6.46 2.27 16.45 3.87c12.75 2.04 31.89 2.04 35.08-4.88 2.62-5.68-9.57-33.38-17.29-33.38-5.6 0-8.11 3.81-15.72 12.32s-18.52 22.07-18.52 22.07z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m78.29 31.12s11.3-15.84 17.77-20.64c3.18-2.35 6.31 0.81 4.09 4.34-2.12 3.4-21.86 16.3-21.86 16.3z",
      fill: "#FBC02D"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 26.25,
        cy: 12.5,
        r: 34.324,
        gradientTransform: "matrix(1 0 0 1.1051 0 -.4321)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2562
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.96 38.51s-6.46 2.27-16.45 3.87c-12.75 2.04-31.89 2.04-35.08-4.88-2.6-5.69 9.58-33.39 17.3-33.39 5.6 0 8.11 3.81 15.72 12.32s18.51 22.08 18.51 22.08z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m49.76 31.12s-11.3-15.84-17.77-20.64c-3.18-2.35-6.31 0.81-4.09 4.34 2.12 3.4 21.86 16.3 21.86 16.3z",
      fill: "#FBC02D"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98.32 7.11c0.51 0 2.5 0.97 5.55 5.39 6.24 9.07 9.87 21.48 9.01 23.73-0.92 1.99-6.05 4.32-17.5 4.32-4.66 0-9.76-0.41-14.38-1.14-4.92-0.79-8.98-1.75-11.77-2.5 3.74-4.58 10.46-12.74 15.6-18.48 1.01-1.13 1.93-2.17 2.78-3.13 5.59-6.36 7.35-8.19 10.71-8.19m0-3c-5.6 0-8.11 3.81-15.72 12.32s-18.52 22.08-18.52 22.08 6.46 2.27 16.45 3.87c4.48 0.72 9.76 1.18 14.85 1.18 9.39 0 18.16-1.58 20.23-6.06 2.61-5.69-9.57-33.39-17.29-33.39z",
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
          "m29.73 7.11c3.36 0 5.12 1.83 10.71 8.18 0.85 0.96 1.77 2.01 2.78 3.13 5.14 5.74 11.86 13.9 15.6 18.48-2.79 0.75-6.85 1.71-11.77 2.5-4.62 0.74-9.72 1.14-14.38 1.14-11.45 0-16.58-2.33-17.5-4.31-0.86-2.26 2.76-14.68 9.01-23.74 3.04-4.41 5.04-5.38 5.55-5.38m0-3c-7.72 0-19.9 27.7-17.29 33.38 2.07 4.49 10.84 6.06 20.23 6.06 5.09 0 10.36-0.46 14.85-1.18 9.99-1.59 16.45-3.87 16.45-3.87s-10.9-13.57-18.51-22.08-10.13-12.31-15.73-12.31z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.08 24.25c-8.64 0-15.66 7.87-16.06 15.75h32.13c-0.41-7.88-7.44-15.75-16.07-15.75z",
      fill: "#FBC02D"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.08 27.25c5.89 0 10.78 4.68 12.46 9.75h-24.92c1.68-5.07 6.57-9.75 12.46-9.75m0-3c-8.64 0-15.66 7.87-16.06 15.75h32.13c-0.41-7.88-7.44-15.75-16.07-15.75z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 99.024,
        y2: 40.759,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.3754
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0.8273
      })
    ),
    _react2.default.createElement("polygon", {
      points: "112.09 124.01 15.91 124.01 11.91 51.14 116.09 51.14",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112.92 54.14-3.67 66.88h-90.5l-3.67-66.88h97.84m3.17-3h-104.18l4 72.88h96.19l3.99-72.88z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.89 59.42h-114.99c-0.37 0-0.7-0.23-0.81-0.56-2.57-7.47-2.5-15.55 0.19-22.98h115.61c2.61 7.44 2.68 15.49 0.19 22.98l-0.19 0.56z",
      fill: "#2196F3"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m119.69 38.88c1.62 5.77 1.62 11.77 0 17.54h-111.23c-1.66-5.72-1.66-11.83 0-17.54h111.23m2.2-3h-115.61c-2.7 7.43-2.76 15.51-0.19 22.98 0.12 0.34 0.44 0.56 0.81 0.56h114.99l0.19-0.57c2.49-7.48 2.42-15.53-0.19-22.97z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 50.861,
        x2: 83.116,
        y1: 58.264,
        y2: 111.04,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.252
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 51.21,
      y: 35.88,
      width: 26,
      height: 88.46,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m74.21 38.88v82.46h-20v-82.46h20m3-3h-26v88.46h26v-88.46z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Gift;
