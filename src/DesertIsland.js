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

function DesertIsland(props) {
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
        id: "e",
        x1: 64,
        x2: 64,
        y1: 64.625,
        y2: 120.19,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#01579B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00ACC1",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M124,124H4V72c0-4.42,3.58-8,8-8h104c4.42,0,8,3.58,8,8V124z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d: "M124,124H4V72c0-4.42,3.58-8,8-8h104c4.42,0,8,3.58,8,8V124z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 63.96,
      cy: 103.17,
      rx: 53,
      ry: 8.83,
      fill: "#00BCD4",
      opacity: 0.7
    }),
    _react2.default.createElement("ellipse", {
      cx: 63.96,
      cy: 102.12,
      rx: 50,
      ry: 6.21,
      fill: "#FFECB3"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.982,
        x2: 63.982,
        y1: 78.89,
        y2: 110.78,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD965",
        offset: 0.4442
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0.8164
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m112 100.67h-0.02c-5.23-11.46-24.72-19.96-47.98-19.96s-42.75 8.51-47.98 19.96h-0.02l0.01 0.01c0 0.01-0.01 0.02-0.01 0.02h0.03c-1.66 3.21 27.97 4.88 47.97 4.88s48.75-1.92 47.97-4.88h0.03c0-0.01-0.01-0.02-0.01-0.02l0.01-0.01z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 67c2.76 0 5 2.24 5 5v49h-114v-49c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v52h120v-52c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 30.89,
      cy: 95.76,
      rx: 1.49,
      ry: 0.93,
      fill: "#FFB300"
    }),
    _react2.default.createElement("ellipse", {
      cx: 37.17,
      cy: 89.43,
      rx: 0.94,
      ry: 0.59,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 74,
      cy: 91.89,
      rx: 0.94,
      ry: 0.59,
      fill: "#FFD54F"
    }),
    _react2.default.createElement("ellipse", {
      cx: 85.48,
      cy: 100.75,
      rx: 1.49,
      ry: 0.93,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 56.76,
      cy: 90.86,
      rx: 1.35,
      ry: 0.85,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 50.14,
      cy: 91.36,
      rx: 1.35,
      ry: 0.85,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 63.05,
      cy: 95.59,
      rx: 0.94,
      ry: 0.59,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 36.86,
      cy: 100.77,
      rx: 1.25,
      ry: 0.79,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 58.38,
      cy: 94.25,
      rx: 0.94,
      ry: 0.59,
      fill: "#FFD54F"
    }),
    _react2.default.createElement("ellipse", {
      cx: 46.42,
      cy: 102.19,
      rx: 0.94,
      ry: 0.59,
      fill: "#FFD54F"
    }),
    _react2.default.createElement("ellipse", {
      cx: 26.73,
      cy: 97.78,
      rx: 0.94,
      ry: 0.59,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 47.18,
      cy: 96.12,
      rx: 1.25,
      ry: 0.79,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 96.58,
      cy: 102.07,
      rx: 1.25,
      ry: 0.79,
      fill: "#FFC107"
    }),
    _react2.default.createElement("ellipse", {
      cx: 75.05,
      cy: 100.57,
      rx: 0.94,
      ry: 0.59,
      fill: "#FFD54F"
    }),
    _react2.default.createElement("ellipse", {
      cx: 102.76,
      cy: 97.72,
      rx: 1.49,
      ry: 0.93,
      fill: "#FFC107"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 83.71c19.81 0 37.59 6.56 43.94 15.9-6.22 1.47-24.7 2.98-43.94 2.98-21.54 0-38.35-1.5-44.04-2.83 6.27-9.43 24.13-16.05 44.04-16.05m0-3c-23.26 0-42.75 8.51-47.98 19.96h-0.02l0.01 0.01c0 0.01-0.01 0.02-0.01 0.02h0.03c-1.66 3.21 27.97 4.88 47.97 4.88s48.75-1.92 47.97-4.88h0.03c0-0.01-0.01-0.02-0.01-0.02l0.01-0.01h-0.02c-5.23-11.46-24.72-19.96-47.98-19.96z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 76.057,
        x2: 86.05,
        y1: 35.392,
        y2: 92.333,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D4037",
        offset: 0.9977
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.84 28.35c14.78 26.34 8.17 63.35 8.17 63.35s1.31 2.1 6.91 2.29c4.65 0.16 7.04-2.03 7.04-2.04 2.98-32.36-8.86-58.2-16.84-65.11 0.03 0-4.35 0.46-5.28 1.51z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73.11 30.02c6.92 7.2 17.35 30.35 14.99 60.22-0.75 0.35-1.97 0.76-3.7 0.76-0.12 0-0.25 0-0.38-0.01-1.88-0.06-3.06-0.37-3.77-0.65 1.12-7.69 4.3-36.92-7.14-60.32-0.01 0-0.01 0 0 0m1.01-3.18zm0 0c-0.02 0.01-4.35 0.47-5.28 1.51 14.78 26.34 8.17 63.35 8.17 63.35s1.31 2.1 6.91 2.29c0.17 0.01 0.33 0.01 0.48 0.01 4.33 0 6.56-2.03 6.56-2.05 2.98-32.36-8.86-58.2-16.84-65.11z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 38.848,
        x2: 105.42,
        y1: 7.4269,
        y2: 66.309,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9952
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.26 22.31c15.54-13.23 33.1-2.25 38.82 2.05 0.71 0.54 1.68-0.17 1.41-1.02-1.96-6.13-9.74-17.9-23.92-17.81-14.61 0.09-16.81 8.36-19.95 12.26-3.77-23-30.2-10.94-28.03-8.04 1.92 2.55 16.4-0.97 22.06 9.46-3.99-2.9-13.51-6.66-25.08-2.64-9.65 3.35-12.7 14.31-12.95 19.32-0.05 0.93 1.1 1.42 1.75 0.75 4.41-4.56 18.16-16.79 35.33-12.82-38.77 5.64-32.49 30.1-28.65 39.29 0.51 1.22 2.27 1.16 2.67-0.1 5.44-17.24 20.43-30.08 28.81-34.58-20.45 19.13-12.73 42.9 2.41 45.97 1.42 0.29 2.63-1.08 2.22-2.48-2.63-8.93-6.73-25.12 1.21-43.2 0.9 0.36 20.4 5.24 35.8 27.81 0.75 1.1 2.45 0.75 2.68-0.56 1.74-9.89 3.05-37.3-36.59-33.66z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m57.87 7c6.59 0 10.55 3.79 11.78 11.27 0.19 1.17 1.05 2.11 2.19 2.42 0.25 0.07 0.51 0.1 0.77 0.1 0.43 0 0.85-0.09 1.24-0.27-0.63 0.84-0.78 1.96-0.36 2.96 0.47 1.12 1.57 1.84 2.76 1.84 0.09 0 0.18 0 0.28-0.01 2.3-0.21 4.52-0.32 6.6-0.32 10.5 0 18.08 2.69 22.53 7.98 4.7 5.6 5.21 13.16 4.74 18.72-13.12-17.46-28.49-23.76-34.74-25.7-0.1-0.03-0.18-0.06-0.23-0.07-0.34-0.13-0.7-0.19-1.04-0.19-1.16 0-2.26 0.67-2.75 1.79-0.05 0.12-0.1 0.23-0.15 0.35-0.08-0.41-0.25-0.81-0.51-1.18-0.58-0.81-1.5-1.25-2.44-1.25-0.1 0-0.21 0.01-0.31 0.02 0.29-0.44 0.46-0.96 0.48-1.51 0.03-0.78-0.24-1.5-0.71-2.06 0.22-0.11 0.43-0.25 0.63-0.42 1.06-0.92 1.33-2.45 0.66-3.69-4.23-7.78-12.38-9.09-17.92-9.64 1.85-0.64 4.12-1.14 6.5-1.14m34.86 1.53c8.3 0 13.94 4.62 17.3 9.09-4.66-2.45-10.64-4.63-17.2-4.63-6.41 0-12.3 2.1-17.54 6.23 0.51-0.69 0.98-1.42 1.48-2.2 2.52-3.95 5.39-8.43 15.81-8.5l0.15 0.01m-41.02 9.28c4.37 0 8.16 1.11 10.85 2.44-1.22-0.14-2.45-0.21-3.68-0.21-11.18 0-20.39 5.64-26.1 10.31 1.41-4.19 4.31-9.06 9.77-10.96 3.03-1.05 6.11-1.58 9.16-1.58m13.41 9.13c-7.66 4.71-20.4 15.57-26.74 30.96-1.44-4.98-2.22-11.7 1.12-17.59 3.86-6.8 12.47-11.3 25.62-13.37m5.12 4.01c-5.69 15.45-3.48 29.26-0.48 40.02-4.6-1.63-8.28-5.79-9.83-11.25-2.64-9.36 1.21-20.09 10.31-28.77m-12.37-26.95c-7.38 0-14.45 4.19-13.29 5.74 1.92 2.55 16.4-0.97 22.06 9.46-2.74-2-8.09-4.39-14.93-4.39-3.11 0-6.53 0.5-10.15 1.75-9.65 3.35-12.7 14.31-12.95 19.32-0.03 0.63 0.49 1.06 1.02 1.06 0.25 0 0.51-0.1 0.72-0.31 3.81-3.94 14.59-13.6 28.52-13.6 2.2 0 4.47 0.24 6.82 0.78-38.77 5.64-32.49 30.1-28.65 39.29 0.25 0.59 0.79 0.88 1.32 0.88 0.57 0 1.14-0.33 1.34-0.98 5.44-17.24 20.43-30.08 28.81-34.58-20.43 19.14-12.71 42.91 2.43 45.98 0.13 0.03 0.26 0.04 0.38 0.04 1.25 0 2.21-1.25 1.83-2.51-2.63-8.93-6.73-25.12 1.21-43.2 0.9 0.36 20.4 5.24 35.8 27.81 0.3 0.45 0.77 0.65 1.23 0.65 0.67 0 1.32-0.44 1.45-1.21 1.63-9.29 2.88-34-29.73-34-2.14 0-4.43 0.11-6.87 0.33 5.48-4.66 11.21-6.32 16.58-6.32 9.87 0 18.53 5.59 22.24 8.37 0.17 0.13 0.36 0.19 0.54 0.19 0.57 0 1.07-0.56 0.87-1.2-1.95-6.11-9.68-17.81-23.75-17.81h-0.16c-14.61 0.09-16.81 8.36-19.95 12.26-1.75-10.67-8.36-13.8-14.74-13.8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m79.65 57.76c0.11-0.07 0.2-0.06 0.33-0.1 0.18-0.06 0.35-0.19 0.52-0.28 0.54-0.29 1.09-0.54 1.66-0.75 0.63-0.23 1.3-0.34 1.93-0.57 0.13-0.05 0.28-0.14 0.36-0.25-0.15 0.08-0.26 0.24-0.37 0.37-0.41 0.48-0.84 0.94-1.24 1.42-0.17 0.17-0.3 0.36-0.4 0.57-0.06 0.11-0.11 0.23-0.16 0.34-0.13 0.15-0.22 0.1-0.37 0.02-0.44-0.21-0.93-0.46-1.41-0.57-0.19-0.04-0.71-0.14-0.85-0.2z",
      fill: "none"
    }),
    _react2.default.createElement("polygon", {
      points: "77.74 42.33 80.45 42.32 78.83 43.34",
      fill: "#A1887F"
    }),
    _react2.default.createElement("polygon", {
      points: "80.26 51.29 83.54 51.14 81.63 52.46",
      fill: "#A1887F"
    }),
    _react2.default.createElement("polygon", {
      points: "81.37 59.22 85.86 57.6 83.78 60.26",
      fill: "#A1887F"
    }),
    _react2.default.createElement("polygon", {
      points: "81.43 65.2 86.2 65.07 83.4 66.94",
      fill: "#A1887F"
    }),
    _react2.default.createElement("polygon", {
      points: "83.21 73.19 87.7 71.57 85.62 74.22",
      fill: "#A1887F"
    }),
    _react2.default.createElement("polygon", {
      points: "81.84 80.03 86.73 79.69 83.72 81.95",
      fill: "#A1887F"
    })
  );
}

exports.default = DesertIsland;
