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

function Hedgehog(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("polygon", {
      points:
        "17.47 110.09 32.21 97.57 10.65 95.34 27.07 81.39 9.44 77.35 24.74 69.23 11.05 58.4 29.43 55.34 18.77 41.27 37.65 44.11 33.96 25.51 48.44 35.98 52.79 16.63 62.06 25.71 62.06 122.15",
      fill: "#6B4230"
    }),
    _react2.default.createElement("path", {
      d:
        "m53.92 20.46 6.19 6.07v93.09l-38.57-10.43 8.46-7.19 6.94-5.89-9.05-0.94-12.51-1.29 10-8.49 5.91-5.02-7.56-1.73-8.77-2.01 8.06-4.28 5.26-2.79-4.67-3.69-7.92-6.26 10.89-1.82 6.34-1.06-3.88-5.12-5.84-7.7 11.42 1.72 5.47 0.82-1.08-5.42-2.19-11.04 8.09 5.85 4.78 3.45 1.29-5.75 2.94-13.08m-2.26-7.65-4.47 19.87-16.1-11.64 4.11 20.74-20.86-3.14 11.61 15.32-19.55 3.25 14.8 11.7-17.27 9.17 18.93 4.34-16.94 14.39 21.57 2.23-14.09 11.96 50.6 13.69v-99.8l-12.34-12.08z",
      fill: "#4F3124"
    }),
    _react2.default.createElement("polygon", {
      points:
        "65.87 25.71 75.14 16.63 79.49 35.98 93.97 25.51 90.28 44.11 109.16 41.27 98.49 55.34 116.88 58.4 103.18 69.23 118.48 77.35 100.86 81.39 117.28 95.34 95.71 97.57 110.46 110.09 65.87 122.15",
      fill: "#6B4230"
    }),
    _react2.default.createElement("path", {
      d:
        "m74.01 20.46 2.94 13.07 1.29 5.75 4.78-3.45 8.09-5.85-2.19 11.04-1.08 5.42 5.47-0.82 11.42-1.72-5.84 7.7-3.89 5.13 6.34 1.06 10.89 1.82-7.92 6.26-4.67 3.69 5.26 2.79 8.06 4.28-8.77 2.01-7.56 1.73 5.91 5.02 10 8.49-12.51 1.29-9.05 0.94 6.94 5.89 8.46 7.19-38.57 10.43v-93.09l6.2-6.07m2.26-7.65-12.34 12.08v99.8l50.6-13.68-14.09-11.97 21.57-2.23-16.94-14.39 18.93-4.34-17.28-9.17 14.8-11.7-19.54-3.26 11.61-15.32-20.86 3.14 4.11-20.74-16.1 11.64-4.47-19.86z",
      fill: "#4F3124"
    }),
    _react2.default.createElement("polygon", {
      points:
        "20.98 119.96 30.82 106.27 13.86 101.22 29.48 90.14 9.88 86.15 20.05 76.78 9.68 69.16 23.7 61.69 14.69 48.86 30.31 49.14 24.23 31.35 45.42 37.81 40.76 20.57 56.28 29.05 64 13.99 71.72 29.05 87.24 20.57 82.58 37.81 103.77 31.35 97.69 49.14 113.32 48.86 104.3 61.69 118.32 69.16 107.95 76.78 118.13 86.15 98.53 90.14 114.14 101.22 97.24 106.26 106.44 119.63 63.99 123.93",
      fill: "#6B4230"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 18.15 5.15 10.03 1.78 3.47 3.42-1.87 9.91-5.41-2.61 9.64-1.79 6.62 6.56-2 14.36-4.38-4.01 11.72-1.75 5.12 5.41-0.1 9.19-0.16-5.64 8.02-2.47 3.51 3.79 2.02 9.46 5.04-6.08 4.47-3.71 2.73 3.39 3.12 5.75 5.3-11.68 2.38-8.58 1.75 7.14 5.07 8.87 6.29-10.67 3.18-5 1.49 2.96 4.3 5.91 8.59-39.08 3.95-39.53-3.65 6.35-8.83 3.12-4.33-5.11-1.52-10.67-3.18 8.87-6.29 7.14-5.07-8.58-1.75-11.68-2.38 5.75-5.3 3.39-3.12-3.71-2.73-6.08-4.47 9.46-5.04 3.79-2.02-2.47-3.51-5.64-8.02 9.19 0.16 5.41 0.1-1.75-5.12-4.01-11.72 14.36 4.38 6.56 2-1.79-6.62-2.61-9.64 9.91 5.41 3.42 1.87 1.78-3.47 5.15-10.03m0-8.32-8.52 16.62-17.71-9.68 4.93 18.23-21.46-6.54 6.41 18.74-16.66-0.3 9.93 14.13-14.79 7.88 10.94 8.04-11.21 10.32 18.95 3.86-15.22 10.8 18.14 5.4-10.23 14.21 46.5 4.29 45.82-4.63-9.54-13.87 18.14-5.4-15.22-10.8 18.95-3.86-11.21-10.33 10.94-8.04-14.79-7.88 9.93-14.13-16.66 0.3 6.41-18.74-21.46 6.55 4.93-18.23-17.71 9.68-8.53-16.62z",
      fill: "#4F3124"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64,
        x2: 64,
        y1: 41.459,
        y2: 122.49,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFDB99",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FED894",
        offset: 0.0584
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5BB67",
        offset: 0.6501
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2B056",
        offset: 0.9488
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.86 122.48c-14.37-0.49-23.3-3.67-28.1-10.02-6.46-8.55-6.37-23.73 0.3-50.74 3.7-14.96 13.36-20.26 20.52-20.26 2.69 0 5.01 0.77 6.36 2.12l1.06 1.05 1.06-1.05c1.36-1.35 3.68-2.12 6.36-2.12 7.15 0 16.82 5.31 20.52 20.26 6.68 27.01 6.77 42.19 0.3 50.74-4.8 6.35-13.73 9.53-28.1 10.02l-0.16 0.01-0.12-0.01z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.42 42.96c6.61 0 15.57 5.01 19.06 19.12 6.56 26.53 6.73 41.32 0.56 49.47-4.5 5.96-13.07 8.95-26.96 9.43h-0.08-0.1c-13.89-0.47-22.45-3.47-26.96-9.43-6.16-8.15-5.99-22.95 0.56-49.47 3.49-14.12 12.45-19.12 19.06-19.12 2.26 0 4.24 0.63 5.31 1.68l2.13 2.1 2.11-2.09c1.07-1.06 3.05-1.69 5.31-1.69m0-3c-3.12 0-5.8 0.94-7.42 2.55-1.63-1.61-4.3-2.55-7.42-2.55-7.71 0-18.01 5.76-21.88 21.4-11.13 45.05-5.7 61.45 29.3 62.62v0.02s-0.07-0.01 0-0.01 0 0.01 0 0.01v-0.02c35-1.18 40.43-17.57 29.3-62.62-3.87-15.64-14.17-21.4-21.88-21.4z",
      fill: "#F7A11E"
    }),
    _react2.default.createElement("path", {
      d:
        "m48.83 65c-2.85 0-5.17-2.32-5.17-5.17s2.32-5.17 5.17-5.17 5.17 2.32 5.17 5.17-2.32 5.17-5.17 5.17z"
    }),
    _react2.default.createElement("path", {
      d:
        "m48.83 55.67c2.3 0 4.17 1.87 4.17 4.17s-1.87 4.16-4.17 4.16-4.17-1.87-4.17-4.17 1.87-4.16 4.17-4.16m0-2c-3.4 0-6.17 2.77-6.17 6.17s2.77 6.16 6.17 6.16 6.17-2.77 6.17-6.17-2.77-6.16-6.17-6.16z",
      fill: "#FEEDC9"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.17 65c-2.85 0-5.17-2.32-5.17-5.17s2.32-5.17 5.17-5.17 5.17 2.32 5.17 5.17c-0.01 2.85-2.32 5.17-5.17 5.17z"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.17 55.67c2.3 0 4.17 1.87 4.17 4.17s-1.87 4.16-4.17 4.16-4.17-1.87-4.17-4.17 1.87-4.16 4.17-4.16m0-2c-3.4 0-6.17 2.77-6.17 6.17s2.77 6.16 6.17 6.16 6.17-2.77 6.17-6.17-2.77-6.16-6.17-6.16z",
      fill: "#FEEDC9"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "g",
        d:
          "m93.3 60.56c-5.43-21.16-23.7-23.53-29.34-18.14-5.64-5.38-23.84-3.01-29.27 18.14-11.14 43.36-5.69 59.14 29.31 60.27v0.02s-0.07-0.01 0-0.01 0 0.01 0 0.01v-0.02c35-1.13 40.43-16.91 29.3-60.27z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "f"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 113.71,
      rx: 21.88,
      ry: 22.38,
      clipPath: "url(#f)",
      fill: "#FEE7B4"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m71.77 78.07 0.01 0.48c0.02 1.34-0.3 2.61-0.88 3.72-0.23 0.44-0.51 0.86-0.82 1.25s-0.66 0.75-1.04 1.07c-1.33 1.13-3.04 1.83-4.92 1.86-0.23 0-0.47 0-0.7-0.02s-0.46-0.04-0.68-0.08c-0.67-0.11-1.32-0.3-1.92-0.57s-1.17-0.61-1.68-1.02c-0.39-0.31-0.75-0.66-1.07-1.04s-0.61-0.79-0.86-1.23c-0.62-1.09-0.98-2.35-1-3.69l-0.01-0.48c3.46-0.06 7.74-1.97 7.68-5.85 0.09 3.89 4.43 5.66 7.89 5.6z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "a",
        d:
          "m71.77 78.07 0.01 0.48c0.02 1.34-0.3 2.61-0.88 3.72-0.23 0.44-0.51 0.86-0.82 1.25s-0.66 0.75-1.04 1.07c-1.33 1.13-3.04 1.83-4.92 1.86-0.23 0-0.47 0-0.7-0.02s-0.46-0.04-0.68-0.08c-0.67-0.11-1.32-0.3-1.92-0.57s-1.17-0.61-1.68-1.02c-0.39-0.31-0.75-0.66-1.07-1.04s-0.61-0.79-0.86-1.23c-0.62-1.09-0.98-2.35-1-3.69l-0.01-0.48c3.46-0.06 7.74-1.97 7.68-5.85 0.09 3.89 4.43 5.66 7.89 5.6z"
      })
    ),
    _react2.default.createElement("use", {
      fill: "#6B4230",
      xlinkHref: "#a"
    }),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c",
        clipPath: "url(#d)"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#a"
      })
    ),
    _react2.default.createElement("path", {
      d: "m57.68 87.68c-0.06-3.56 2.78-6.49 6.34-6.55s6.49 2.78 6.55 6.34",
      clipPath: "url(#c)",
      fill: "#ED7770"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.93 71.18c0.06 3.71-2.9 6.78-6.61 6.84-1.7 0.03-3.26-0.58-4.46-1.59",
      fill: "none",
      stroke: "#6B4230",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.6965
    }),
    _react2.default.createElement("path", {
      d:
        "m63.9 71.18c0.06 3.71 3.12 6.68 6.84 6.61 1.7-0.03 3.24-0.68 4.4-1.74",
      fill: "none",
      stroke: "#6B4230",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.6965
    }),
    _react2.default.createElement("path", {
      d:
        "m51.23 90.66c1.84 0.62 3.8 0.99 5.46 1.99 1.66 1.01 3 2.91 2.59 4.81-0.54 2.5-3.57 3.48-6.12 3.71-2.75 0.24-5.52 0.15-8.24-0.29-2.61-0.42-5.34-1.24-7.05-3.26-2.02-2.37-2.17-5.75-2.22-8.86-0.06-3.98 1.6-9.42 5.85-5.27 3.07 3.02 5.47 5.73 9.73 7.17z",
      fill: "#C49D6B"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.77 90.66c-1.84 0.62-3.8 0.99-5.46 1.99-1.66 1.01-3 2.91-2.59 4.81 0.54 2.5 3.57 3.48 6.12 3.71 2.75 0.24 5.52 0.15 8.24-0.29 2.61-0.42 5.34-1.24 7.05-3.26 2.02-2.37 2.17-5.75 2.22-8.86 0.06-3.98-1.6-9.42-5.85-5.27-3.07 3.02-5.47 5.73-9.73 7.17z",
      fill: "#C49D6B"
    }),
    _react2.default.createElement("path", {
      d:
        "m47.8 105.56c2.71 0.82 5.3 2.53 6.59 5.11 0.87 1.74 1.04 4.03-0.17 5.52-1.09 1.35-2.96 1.7-4.67 1.73-2.76 0.04-5.83-0.26-8.23-1.67-2.72-1.6-7.57-7.54-4.36-10.87 2.04-2.11 8.49-0.53 10.84 0.18z",
      fill: "#F3B55E"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.2 105.56c-2.71 0.82-5.3 2.53-6.59 5.11-0.87 1.74-1.04 4.03 0.17 5.52 1.09 1.35 2.96 1.7 4.67 1.73 2.76 0.04 5.83-0.26 8.23-1.67 2.72-1.6 7.57-7.54 4.36-10.87-2.04-2.11-8.49-0.53-10.84 0.18z",
      fill: "#F3B55E"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 63.865,
        cy: 66.503,
        r: 5.2605,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#73450B",
        offset: 0.0046512
      }),
      _react2.default.createElement("stop", {
        stopColor: "#673E0D",
        offset: 0.1548
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F2713",
        offset: 0.7111
      }),
      _react2.default.createElement("stop", {
        stopColor: "#301E16",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.93 72.76c2.19 0 3.48-1.95 4.23-3.57s-0.1-4.19-1.46-4.19h-5.55c-1.36 0-2.2 2.57-1.46 4.19 0.75 1.62 2.04 3.57 4.24 3.57z",
      fill: "url(#b)"
    })
  );
}

exports.default = Hedgehog;
