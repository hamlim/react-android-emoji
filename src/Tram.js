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

function Tram(props) {
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
      d: "m35.97 111.92-15.97 12.08h88l-15.93-11.93s-56.4-0.46-56.1-0.15z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d: "m43.62 111.92-11.62 12.08h64l-11.58-11.93s-41.02-0.46-40.8-0.15z",
      fill: "#616161"
    }),
    _react2.default.createElement("polygon", {
      points: "70 124 58 124 61 112 67 112",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m44.57 113.81c14.29 0 42.19 0.22 46.83 0.25l10.59 7.93h-76.03l10.75-8.13c0.78-0.02 2.78-0.05 7.86-0.05m0-2c-5.23 0-8.68 0.03-8.6 0.1l-15.97 12.09h88l-15.93-11.93s-31.77-0.26-47.5-0.26z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "64.05 29.44 46.44 10.05 47.87 8.75 64.05 26.56 80.46 8.44 81.89 9.74",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m84.82 8h-41.64c-4.79 0-8.68 3.59-8.68 8.08 0 0.78 0.12 1.69 0.36 2.45 0.07 0.21 0.26 0.47 0.48 0.47h2.12c0.17 0 0.33-0.24 0.42-0.38s0.11-0.4 0.04-0.55c-0.28-0.63-0.42-1.21-0.42-1.88 0-2.91 2.55-5.18 5.68-5.18h41.64c3.13 0 5.68 2.24 5.68 5.15 0 0.68-0.14 1.28-0.42 1.91-0.07 0.15-0.05 0.46 0.04 0.6s0.25 0.35 0.42 0.35h2.12c0.22 0 0.41-0.3 0.48-0.5 0.24-0.76 0.36-1.56 0.36-2.34 0-4.51-3.89-8.18-8.68-8.18z",
      fill: "#212121"
    }),
    _react2.default.createElement("path", {
      d:
        "m88.23 116h-48.36c-2.18 0-3.96-1.78-3.96-3.96v-0.09c0-2.18 1.78-3.96 3.96-3.96h48.37c2.18 0 3.96 1.78 3.96 3.96v0.09c-0.01 2.18-1.79 3.96-3.97 3.96z",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.82 8h-41.64c-4.79 0-8.68 3.34-8.68 7.83 0 0.78 0.12 1.81 0.36 2.57 0.07 0.21 0.26 0.6 0.48 0.6h2.12c0.17 0 0.33-0.49 0.42-0.63s0.11-0.52 0.04-0.68c-0.28-0.63-0.42-1.02-0.42-1.69 0-2.91 2.55-5 5.68-5h4.13l16.75 18.44 16.69-18.44h4.07c3.13 0 5.68 1.99 5.68 4.9 0 0.68-0.14 1.15-0.42 1.78-0.07 0.15-0.05 0.64 0.04 0.79 0.1 0.13 0.25 0.53 0.42 0.53h2.12c0.22 0 0.41-0.55 0.48-0.75 0.24-0.76 0.36-1.43 0.36-2.21 0-4.5-3.89-8.04-8.68-8.04zm-20.77 18.56-14.13-15.56h28.22l-14.09 15.56z",
        fill: "none",
        stroke: "#eee",
        strokeMiterlimit: 10,
        strokeWidth: 1.5
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 24.167,
        y2: 111.25,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0.1355
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC21B",
        offset: 0.3294
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB707",
        offset: 0.7004
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0.9529
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.57 111.96h-55.14c-4.63 0-8.43-4.15-8.43-9.23v-50.73c0-32 16-28 36-28s36-4 36 27.88v50.86c0 5.06-3.79 9.22-8.43 9.22z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.46 26.84c6.86 0 12.15 0.63 15.66 3.72 3.96 3.48 5.88 10.45 5.88 21.32v50.86c0 3.43-2.43 6.23-5.43 6.23h-55.14c-2.99 0-5.43-2.79-5.43-6.23v-50.74c0-10.92 1.93-17.93 5.9-21.43 3.51-3.1 8.81-3.73 15.68-3.73 1.71 0 3.47 0.04 5.34 0.08 1.97 0.04 4 0.08 6.09 0.08s4.13-0.04 6.11-0.08c1.86-0.04 3.62-0.08 5.34-0.08m0-3c-3.6 0-7.45 0.16-11.46 0.16-4 0-7.84-0.16-11.42-0.16-14.34 0-24.58 2.56-24.58 28.16v50.73c0 5.07 3.79 9.23 8.43 9.23h55.15c4.63 0 8.43-4.15 8.43-9.23v-50.85c-0.01-25.49-10.23-28.04-24.55-28.04z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m42.5 41.72c0-1.69-1.37-2.96-2.89-2.74-3.21 0.47-6.2 2.12-6.2 7.57v31.9c0 1.53 1.13 2.76 2.52 2.76h4.06c1.39 0 2.52-1.24 2.52-2.76l-0.01-36.73z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m85.2 41.72c0-1.69 1.37-2.96 2.89-2.74 3.21 0.47 6.2 2.12 6.2 7.57v31.9c0 1.53-1.13 2.76-2.52 2.76h-4.06c-1.39 0-2.52-1.24-2.52-2.76l0.01-36.73z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m74.81 85.17h-21.62c-4.42 0-8-3.58-8-8v-37.17c0-4.42 3.58-8 8-8h21.61c4.42 0 8 3.58 8 8v37.17c0.01 4.41-3.58 8-7.99 8z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m48.38 100.08h-12.42c-2.18 0-3.96-1.78-3.96-3.96v-0.16c0-2.18 1.78-3.96 3.96-3.96h12.42c2.18 0 3.96 1.78 3.96 3.96v0.16c-0.01 2.18-1.79 3.96-3.96 3.96z",
      fill: "#212121"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.96 100.08h12.42c2.18 0 3.96-1.78 3.96-3.96v-0.2c0-2.18-1.78-3.96-3.96-3.96h-12.42c-2.18 0-3.96 1.78-3.96 3.96v0.2c0 2.18 1.78 3.96 3.96 3.96z",
      fill: "#212121"
    }),
    _react2.default.createElement("path", {
      d:
        "m39.48 98.47h5.38c1.35 0 2.45-1.1 2.45-2.45s-1.1-2.45-2.45-2.45h-5.38c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45z",
      fill: "#FFEE58"
    }),
    _react2.default.createElement("path", {
      d:
        "m83.48 98.47h5.38c1.35 0 2.45-1.1 2.45-2.45s-1.1-2.45-2.45-2.45h-5.38c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45z",
      fill: "#FFEE58"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.73 38.16c0.03 0 0.07 0 0.11 0.01 4.67 0.69 5.31 3.58 5.31 6.6v36.13c0 0.61-0.39 1.13-0.85 1.13h-4.6c-0.46 0-0.85-0.52-0.85-1.13v-41.62c0-0.69 0.46-1.12 0.88-1.12m0-2c-1.56 0-2.88 1.36-2.88 3.13v41.61c0 1.73 1.28 3.13 2.85 3.13h4.6c1.57 0 2.85-1.4 2.85-3.13v-36.14c0-6.18-3.39-8.05-7.02-8.58-0.14-0.01-0.27-0.02-0.4-0.02z",
        fill: "#F5F5F5"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m74.81 34c3.31 0 6 2.69 6 6v37.17c0 3.31-2.69 6-6 6h-21.62c-3.31 0-6-2.69-6-6v-37.17c0-3.31 2.69-6 6-6h21.62m0-2h-21.62c-4.42 0-8 3.58-8 8v37.17c0 4.42 3.58 8 8 8h21.61c4.42 0 8-3.58 8-8v-37.17c0.01-4.42-3.58-8-7.99-8z",
        fill: "#F5F5F5"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m39.96 40.96c0.26 0 0.54 0.31 0.54 0.76v36.74c0 0.44-0.27 0.76-0.52 0.76h-4.06c-0.24 0-0.52-0.33-0.52-0.76v-31.9c0-4.34 2.16-5.25 4.49-5.6h0.07m0-2c-0.12 0-0.23 0.01-0.35 0.03-3.21 0.47-6.2 2.12-6.2 7.57v31.9c0 1.53 1.13 2.76 2.52 2.76h4.06c1.39 0 2.52-1.24 2.52-2.76v-36.74c-0.01-1.56-1.17-2.76-2.55-2.76z",
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
          "m87.75 40.96h0.06c2.33 0.34 4.49 1.26 4.49 5.6v31.9c0 0.44-0.27 0.76-0.52 0.76h-4.06c-0.24 0-0.52-0.33-0.52-0.76v-36.74c0-0.46 0.28-0.76 0.55-0.76m0-2c-1.38 0-2.54 1.2-2.54 2.76v36.74c0 1.53 1.13 2.76 2.52 2.76h4.06c1.39 0 2.52-1.24 2.52-2.76v-31.9c0-5.46-2.99-7.1-6.2-7.57-0.13-0.02-0.25-0.03-0.36-0.03z",
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
          "m74.81 34c3.31 0 6 2.69 6 6v37.17c0 3.31-2.69 6-6 6h-21.62c-3.31 0-6-2.69-6-6v-37.17c0-3.31 2.69-6 6-6h21.62m0-2h-21.62c-4.42 0-8 3.58-8 8v37.17c0 4.42 3.58 8 8 8h21.61c4.42 0 8-3.58 8-8v-37.17c0.01-4.42-3.58-8-7.99-8z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Tram;
