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

function Lion(props) {
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
        x1: 64,
        x2: 64,
        y1: 122.24,
        y2: 5.6431,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#603813",
        offset: 0.0696
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C6239",
        offset: 0.8339
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.92 122.24c-2.28-0.86-10.99-4.47-18.8-9.5-5.51-3.55-9.54-8.23-11.94-11.04-1.92-2.23-2.56-2.98-3.62-2.98-0.46 0-0.89 0.18-1.2 0.51-0.5 0.52-0.53 1.18-0.51 1.64 0.04 0.87-0.06 1.53-0.21 2.02-8.61-6.64-11.88-14.32-13.08-18.36-0.34-1.17-1.14-1.87-2.12-1.87-0.81 0-1.54 0.48-2.15 1.43-0.08 0.12-0.16 0.31-0.2 0.45-0.31 0.84-0.86 1.5-1.4 1.97-5.35-13.57 0.3-26.34 3.03-31.27 0.39-0.71 0.38-1.55-0.03-2.24-0.42-0.71-1.19-1.14-2.01-1.14-0.23 0-0.45 0.03-0.67 0.1l-3.02 0.88c0.44-11.73 8.24-20.45 11.64-23.71 0.63-0.61 0.86-1.5 0.59-2.33-0.27-0.84-1-1.44-1.89-1.57-0.99-0.14-2.01-0.49-2.76-0.8 9.3-15.5 23.12-18.78 33.14-18.78 7.87 0 14.25 1.95 16.26 2.65 0.27 0.25 0.64 0.4 1.03 0.4s0.76-0.15 1.04-0.41c2-0.69 8.38-2.65 16.26-2.65 10.03 0 23.84 3.28 33.14 18.78-0.75 0.31-1.77 0.66-2.76 0.8-0.89 0.12-1.62 0.72-1.89 1.57-0.27 0.83-0.04 1.73 0.59 2.33 3.4 3.26 11.2 11.98 11.64 23.71l-3.02-0.88c-0.22-0.06-0.44-0.1-0.67-0.1-0.82 0-1.59 0.44-2.01 1.15-0.41 0.69-0.42 1.53-0.03 2.24 2.73 4.93 8.38 17.71 3.03 31.27-0.54-0.48-1.1-1.15-1.43-2.04-0.04-0.11-0.13-0.3-0.19-0.39-0.6-0.93-1.33-1.41-2.14-1.41-0.99 0-1.78 0.7-2.12 1.87-1.19 4.05-4.48 11.73-13.14 18.4-0.22-0.61-0.31-1.29-0.28-2.06 0.01-0.26 0.05-1.04-0.51-1.62-0.32-0.33-0.75-0.51-1.21-0.51-1.05 0-1.76 0.8-3.67 2.96-2.54 2.87-6.8 7.67-12.53 11.01-8.02 4.66-16.06 8.51-18.18 9.52z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m81.29 7.14c13.33 0 23.7 5.54 30.86 16.46-0.23 0.05-0.46 0.1-0.68 0.13-1.47 0.2-2.66 1.19-3.11 2.59-0.45 1.38-0.07 2.87 0.98 3.88 3.06 2.93 9.82 10.46 11.01 20.58l-0.94-0.27c-0.36-0.1-0.72-0.16-1.09-0.16-1.35 0-2.61 0.72-3.3 1.88-0.68 1.16-0.7 2.55-0.05 3.73 2.43 4.4 7.29 15.28 3.9 27.18-1.11-1.63-2.42-1.98-3.32-1.98-1.3 0-2.92 0.77-3.56 2.94-1.04 3.53-3.75 9.95-10.53 15.91-0.11-0.71-0.4-1.31-0.87-1.8-0.6-0.63-1.42-0.98-2.29-0.98-1.72 0-2.69 1.08-4.79 3.46-2.48 2.8-6.64 7.49-12.16 10.71-7.36 4.29-14.74 7.89-17.49 9.19-2.88-1.13-10.77-4.52-17.93-9.12-5.33-3.43-9.26-8.01-11.62-10.75-2.07-2.41-3.01-3.51-4.75-3.51-0.87 0-1.68 0.35-2.29 0.98-0.45 0.47-0.74 1.06-0.86 1.74-6.69-5.92-9.37-12.31-10.41-15.82-0.64-2.17-2.26-2.94-3.56-2.94-0.91 0-2.2 0.35-3.31 1.97-3.38-11.9 1.47-22.78 3.9-27.17 0.65-1.18 0.63-2.57-0.05-3.73s-1.95-1.88-3.3-1.88c-0.37 0-0.74 0.05-1.09 0.16l-0.94 0.27c1.19-10.12 7.96-17.65 11.01-20.58 1.05-1.01 1.43-2.5 0.98-3.88-0.45-1.4-1.65-2.39-3.11-2.59-0.23-0.03-0.46-0.08-0.68-0.13 7.16-10.93 17.53-16.47 30.86-16.47 7.34 0 13.33 1.75 15.52 2.48 0.5 0.38 1.12 0.58 1.77 0.58s1.27-0.21 1.77-0.58c2.19-0.73 8.18-2.48 15.52-2.48m-14.91 1.89m14.91-4.89c-8.33 0-15.03 2.12-16.92 2.79-0.15 0.06-0.28 0.15-0.37 0.27-0.09-0.12-0.22-0.22-0.37-0.27-1.89-0.66-8.59-2.79-16.92-2.79-11.21 0-25.39 3.84-34.86 20.24-0.23 0.39-0.06 0.89 0.36 1.09 0.87 0.41 2.39 1.03 3.91 1.24 0.67 0.09 0.94 0.87 0.46 1.33-3.53 3.38-12.07 12.9-12.12 25.72 0 0.45 0.38 0.8 0.83 0.8 0.08 0 0.16-0.01 0.24-0.04l3.89-1.14c0.08-0.02 0.17-0.04 0.25-0.04 0.59 0 1.02 0.61 0.72 1.16-2.63 4.75-9.01 18.74-2.76 33.4 0.13 0.31 0.44 0.48 0.76 0.48 0.16 0 0.33-0.05 0.47-0.14 0.83-0.55 2.04-1.6 2.65-3.26 0.01-0.03 0.01-0.06 0.03-0.08 0.35-0.54 0.65-0.74 0.89-0.74 0.33 0 0.56 0.37 0.68 0.79 1.24 4.19 4.77 12.58 14.29 19.65 0.15 0.11 0.33 0.16 0.5 0.16 0.29 0 0.57-0.14 0.72-0.41 0.38-0.66 0.79-1.81 0.71-3.55-0.02-0.4 0.05-0.58 0.21-0.58 1.06 0 6.07 8.27 14.75 13.85 9.31 5.98 19.56 9.93 19.71 9.93s9.38-4.4 18.85-9.92c8.95-5.22 14.33-13.8 15.44-13.8 0.16 0 0.23 0.16 0.21 0.54-0.08 1.74 0.41 2.88 0.78 3.54 0.15 0.26 0.45 0.4 0.75 0.4 0.18 0 0.36-0.06 0.52-0.17 9.52-7.06 13.07-15.46 14.31-19.65 0.13-0.42 0.36-0.79 0.69-0.79 0.25 0 0.55 0.2 0.89 0.74 0.02 0.02 0.02 0.05 0.03 0.08 0.61 1.67 1.82 2.71 2.65 3.26 0.14 0.1 0.31 0.14 0.47 0.14 0.32 0 0.63-0.18 0.76-0.48 6.25-14.66-0.14-28.65-2.76-33.4-0.3-0.55 0.13-1.16 0.72-1.16 0.08 0 0.16 0.01 0.25 0.04l3.89 1.14c0.08 0.02 0.16 0.04 0.24 0.04 0.44 0 0.83-0.35 0.83-0.8-0.05-12.83-8.59-22.34-12.12-25.72-0.48-0.46-0.2-1.24 0.46-1.33 1.53-0.21 3.04-0.83 3.91-1.24 0.42-0.2 0.58-0.69 0.36-1.09-9.45-16.39-23.63-20.23-34.84-20.23z",
      fill: "#61422A"
    }),
    _react2.default.createElement("circle", {
      cx: 37.45,
      cy: 36,
      r: 10.96,
      fill: "#FBB03B",
      stroke: "#E68D00",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("circle", {
      cx: 37.45,
      cy: 36,
      r: 6.25,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 90.55,
      cy: 36,
      r: 10.96,
      fill: "#FBB03B",
      stroke: "#E68D00",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("circle", {
      cx: 90.55,
      cy: 36,
      r: 6.25,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 101.46,
        y2: 27.886,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E6A500",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAAC0D",
        offset: 0.0775
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3BE2D",
        offset: 0.3025
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FACB44",
        offset: 0.5196
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FED252",
        offset: 0.723
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD557",
        offset: 0.899
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 101.46c-23.42 0-38.55-14.1-38.55-35.91 0-22.88 15.13-37.67 38.55-37.67s38.55 14.79 38.55 37.67c0 21.82-15.13 35.91-38.55 35.91z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 29.39c22.51 0 37.05 14.2 37.05 36.17 0 21.23-14.2 34.41-37.05 34.41s-37.05-13.19-37.05-34.42c0-21.97 14.54-36.16 37.05-36.16m0-3c-25.6 0-40.05 17.05-40.05 39.17s14.9 37.41 40.05 37.41 40.05-15.29 40.05-37.41-14.45-39.17-40.05-39.17z",
      fill: "#E68D00"
    }),
    _react2.default.createElement("line", {
      x1: 64,
      x2: 64,
      y1: 92.38,
      y2: 82.88,
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 44.5,
        cy: 57.77,
        rx: 6.2,
        ry: 7.02
      }),
      _react2.default.createElement("ellipse", {
        cx: 83.5,
        cy: 57.77,
        rx: 6.2,
        ry: 7.02
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("ellipse", {
        cx: 54.07,
        cy: 79.59,
        rx: 12.57,
        ry: 11.69
      }),
      _react2.default.createElement("ellipse", {
        cx: 73.93,
        cy: 79.59,
        rx: 12.57,
        ry: 11.69
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 66.629,
        y2: 75.856,
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
        "m64 75.49c3.03 0 5.8-3.14 7.5-5.64 0.84-1.23-0.04-2.86-1.53-2.86h-11.93c-1.49 0-2.38 1.62-1.53 2.86 1.69 2.5 4.46 5.64 7.49 5.64z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("line", {
      x1: 55.79,
      x2: 63.73,
      y1: 96.21,
      y2: 92.5,
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("line", {
      x1: 72.21,
      x2: 63.79,
      y1: 96.21,
      y2: 92.5,
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    })
  );
}

exports.default = Lion;
