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

function Sunflower(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      x: 59.37,
      y: 79.76,
      width: 8.07,
      height: 44.13,
      fill: "#7CB342"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.34 81.86v39.92h-3.86v-39.92h3.86m2.1-2.1h-8.07v44.13h8.07v-44.13z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.391,
        cy: 52.772,
        r: 48.852,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0.2073
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.7599
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m112.2 62.58c0.11-0.51-0.01-1.04-0.36-1.58-1.35-2.07-7.95-6-15.77-8.23 7.95-2.34 16.62-7.01 16.15-9.7-0.21-1.19-1.52-1.94-4.4-2.52-3.14-0.63-8.39-1-14.07-0.35 6.41-5.19 12.54-12.72 11.09-15-0.28-0.45-0.76-0.75-1.41-0.88-2.44-0.49-9.86 1.42-16.93 5.34 3.97-7.28 6.79-16.71 4.56-18.28-0.2-0.14-0.42-0.23-0.67-0.28-2.55-0.51-9.35 4.99-14.41 11.31 0.86-8.2-0.13-17.85-2.8-18.45-2.76-0.55-7.41 8.08-9.76 16.14-2.34-8.04-6.8-15.69-9.09-16.15-0.21-0.04-0.42-0.05-0.63-0.01-0.52 0.09-0.96 0.4-1.32 0.93-1.38 2.02-2.46 9.5-1.56 17.49-4.87-6.06-11.02-10.75-13.5-11.25-0.58-0.12-1.07-0.04-1.48 0.21-0.44 0.28-0.73 0.74-0.87 1.37-0.51 2.41 1.37 9.8 5.29 16.89-4.51-2.59-9.33-4.59-13-5.33-2.81-0.56-4.48-0.29-5.25 0.87-0.35 0.53-1.42 2.13 3.43 7.85 2.1 2.48 4.73 4.96 7.49 7.15-8.23-1.03-17.65-0.55-18.33 2.86-0.64 3.21 8.14 7.51 16.02 9.75-3.53 0.95-6.99 2.24-9.88 3.68-6.7 3.35-6.29 5.4-6.16 6.08 0.25 1.27 1.62 2.08 4.43 2.65 2.98 0.6 8.12 0.91 13.91 0.22-6.55 5.09-12.88 12.1-10.95 15 0.32 0.49 0.85 0.81 1.56 0.95 2.76 0.55 9.92-1.6 16.66-5.38-4.14 7.25-7.36 16.28-4.44 18.23 0.21 0.14 0.45 0.24 0.72 0.3 2.67 0.54 9.13-4.69 14.27-11.21-1.03 8.23-0.55 17.65 2.86 18.33 3.21 0.64 7.52-8.15 9.75-16.03 2.1 7.73 5.81 15.42 8.88 16.04 0.3 0.06 0.59 0.06 0.88 0.01 3.18-0.64 3.79-10.25 2.86-18.34 4.52 5.81 9.99 10.65 12.99 11.26 0.79 0.16 1.47 0.05 2.01-0.3 2.73-1.82-0.47-11.15-4.49-18.31 4.94 2.72 9.98 4.4 13.2 5.05 3.64 0.73 4.59 0.19 5.07-0.5 0.3-0.43 0.39-0.97 0.28-1.6-0.45-2.41-4.99-8.47-11.28-13.49 8.22 0.84 17.86-0.15 18.45-2.79z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m54.87 6.57m-0.46 1.25c1.68 2.17 4.41 7.19 6.14 13.12 0.37 1.28 1.55 2.16 2.88 2.16s2.51-0.88 2.88-2.16c1.73-5.94 4.37-10.99 6.07-13.1 0.75 2.6 1.26 8.2 0.63 14.26-0.14 1.32 0.61 2.58 1.84 3.09 0.37 0.15 0.76 0.23 1.14 0.23 0.89 0 1.76-0.4 2.34-1.12 4.02-5.03 8.26-8.43 10.5-9.69-0.29 2.57-1.8 7.87-4.95 13.63-0.64 1.17-0.43 2.63 0.52 3.57 0.58 0.57 1.34 0.87 2.11 0.87 0.5 0 1-0.12 1.45-0.38 5.5-3.05 10.81-4.63 13.57-4.97-1.3 2.36-4.92 6.7-9.67 10.55-1.04 0.84-1.39 2.26-0.88 3.49 0.47 1.12 1.57 1.84 2.77 1.84 0.11 0 0.23-0.01 0.34-0.02 1.86-0.21 3.78-0.32 5.69-0.32 2.73 0 5.45 0.23 7.45 0.63 0.45 0.09 0.82 0.18 1.12 0.26-2.03 1.62-6.84 4.29-13.13 6.14-1.28 0.38-2.16 1.55-2.15 2.89s0.89 2.51 2.18 2.87c6.38 1.82 11.09 4.53 13.09 6.07-1.55 0.45-4.41 0.92-8.69 0.92-1.87 0-3.79-0.1-5.58-0.28-0.1-0.01-0.21-0.02-0.31-0.02-1.21 0-2.31 0.73-2.77 1.86-0.5 1.23-0.14 2.65 0.91 3.48 5.13 4.09 8.41 8.35 9.65 10.5-0.34-0.04-0.75-0.11-1.26-0.21-2.85-0.57-7.59-2.12-12.34-4.73-0.45-0.25-0.95-0.37-1.44-0.37-0.78 0-1.55 0.3-2.13 0.89-0.94 0.95-1.14 2.41-0.49 3.58 3.66 6.53 5.12 11.9 5.14 14.03-2.01-0.87-6.37-4.44-10.67-9.97-0.58-0.75-1.46-1.16-2.37-1.16-0.38 0-0.76 0.07-1.13 0.22-1.25 0.51-2 1.78-1.85 3.12 0.84 7.29 0.14 12.7-0.63 14.64-1.41-1.41-4.08-5.97-6.12-13.48-0.35-1.3-1.53-2.21-2.88-2.21h-0.02c-1.34 0-2.52 0.89-2.89 2.18-2.03 7.14-4.77 11.93-6.25 13.46-0.75-1.82-1.46-6.93-0.5-14.56 0.17-1.34-0.58-2.62-1.82-3.14-0.38-0.16-0.77-0.23-1.16-0.23-0.9 0-1.77 0.4-2.36 1.14-4.67 5.93-8.93 9.02-10.78 9.87 0-1.99 1.32-7.05 5.19-13.83 0.67-1.17 0.47-2.64-0.48-3.6-0.58-0.58-1.35-0.89-2.13-0.89-0.5 0-1.01 0.13-1.47 0.38-5.68 3.19-11.3 4.95-13.92 5.07 0.76-1.82 3.88-5.93 9.95-10.66 1.06-0.83 1.45-2.26 0.93-3.51-0.47-1.14-1.57-1.86-2.77-1.86-0.12 0-0.24 0.01-0.36 0.02-2.06 0.25-4.15 0.37-6.2 0.37-2.54 0-5-0.2-6.76-0.56-0.78-0.16-1.32-0.31-1.67-0.44 0.55-0.53 1.72-1.44 4.15-2.65 2.66-1.33 5.97-2.56 9.32-3.47 1.3-0.35 2.21-1.53 2.22-2.88s-0.88-2.54-2.18-2.9c-7.09-2.03-11.88-4.77-13.42-6.25 1.03-0.43 3.3-0.96 7.51-0.96 2.23 0 4.67 0.16 7.05 0.46 0.13 0.02 0.25 0.02 0.37 0.02 1.2 0 2.29-0.72 2.77-1.84 0.52-1.24 0.15-2.68-0.91-3.51-2.67-2.1-5.11-4.43-7.06-6.73-1.75-2.06-2.51-3.35-2.83-4.06 0.47 0.01 1.07 0.08 1.77 0.22 3.27 0.66 7.79 2.52 12.09 4.99 0.47 0.27 0.98 0.4 1.49 0.4 0.77 0 1.53-0.3 2.11-0.86 0.96-0.94 1.17-2.41 0.52-3.59-3.2-5.79-4.61-11.02-4.93-13.5 2.23 1.31 6.58 4.73 10.53 9.63 0.58 0.72 1.45 1.12 2.34 1.12 0.39 0 0.78-0.08 1.15-0.23 1.23-0.51 1.98-1.78 1.83-3.1-0.72-6.52-0.03-11.83 0.61-14.24m-16.5 5.49m52.19 0.76m-36.11-10.15c-0.09 0-0.19 0.01-0.28 0.02-0.52 0.09-0.96 0.4-1.32 0.93-1.38 2.02-2.46 9.5-1.56 17.49-4.88-6.06-11.03-10.75-13.51-11.25-0.18-0.04-0.35-0.05-0.51-0.05-0.36 0-0.69 0.09-0.97 0.27-0.44 0.28-0.73 0.74-0.87 1.37-0.51 2.41 1.37 9.8 5.29 16.89-4.51-2.59-9.33-4.59-13-5.33-0.94-0.19-1.74-0.28-2.44-0.28-1.39 0-2.3 0.38-2.82 1.15-0.35 0.53-1.42 2.13 3.43 7.85 2.1 2.48 4.73 4.96 7.49 7.15-2.46-0.31-5.02-0.48-7.43-0.48-5.65 0-10.43 0.95-10.91 3.34-0.64 3.21 8.14 7.51 16.02 9.75-3.53 0.95-6.99 2.24-9.88 3.68-6.7 3.35-6.29 5.4-6.16 6.08 0.25 1.27 1.62 2.08 4.43 2.65 1.79 0.36 4.34 0.61 7.35 0.61 2.01 0 4.23-0.12 6.55-0.39-6.55 5.09-12.88 12.1-10.95 15 0.32 0.49 0.85 0.81 1.56 0.95 0.29 0.06 0.62 0.09 1 0.09 3.25 0 9.63-2.08 15.66-5.46-4.14 7.25-7.36 16.28-4.44 18.23 0.21 0.14 0.45 0.24 0.72 0.3 0.13 0.03 0.26 0.04 0.4 0.04 2.87 0 8.97-5.04 13.87-11.25-1.03 8.23-0.55 17.65 2.86 18.33 0.11 0.02 0.22 0.03 0.34 0.03 3.17 0 7.26-8.46 9.41-16.07 2.1 7.73 5.81 15.42 8.88 16.04 0.15 0.03 0.31 0.05 0.46 0.05 0.14 0 0.28-0.01 0.42-0.04 3.18-0.64 3.79-10.25 2.86-18.34 4.52 5.81 9.99 10.65 12.99 11.26 0.24 0.05 0.47 0.07 0.69 0.07 0.5 0 0.94-0.13 1.32-0.38 2.73-1.82-0.47-11.15-4.49-18.31 4.94 2.72 9.98 4.4 13.2 5.05 1.23 0.25 2.15 0.35 2.85 0.35 1.37 0 1.89-0.39 2.21-0.84 0.3-0.43 0.39-0.97 0.28-1.6-0.45-2.41-4.99-8.47-11.28-13.49 1.93 0.2 3.94 0.3 5.89 0.3 6.34 0 12.08-1.05 12.54-3.07 0.11-0.51-0.01-1.04-0.36-1.58-1.35-2.07-7.95-6-15.77-8.23 7.95-2.34 16.62-7.01 16.15-9.7-0.21-1.19-1.52-1.94-4.4-2.52-1.98-0.4-4.8-0.69-8.04-0.69-1.89 0-3.93 0.1-6.03 0.34 6.41-5.19 12.54-12.72 11.09-15-0.28-0.45-0.76-0.75-1.41-0.88-0.25-0.05-0.55-0.08-0.9-0.08-3.05 0-9.69 1.9-16.03 5.42 3.97-7.28 6.79-16.71 4.56-18.28-0.2-0.14-0.42-0.23-0.67-0.28-0.11-0.02-0.23-0.03-0.35-0.03-2.78 0-9.22 5.3-14.06 11.34 0.86-8.2-0.13-17.85-2.8-18.45-0.08-0.02-0.17-0.03-0.26-0.03-2.79 0-7.22 8.35-9.5 16.17-2.34-8.04-6.8-15.69-9.09-16.15-0.04-0.05-0.16-0.06-0.28-0.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d: "m67.27 81.14",
      fill: "none",
      stroke: "#BCAAA4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5
    }),
    _react2.default.createElement("path", {
      d: "m37.02 50.89",
      fill: "none",
      stroke: "#BCAAA4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5
    }),
    _react2.default.createElement("path", {
      d: "m83.58 77.33",
      fill: "none",
      stroke: "#BCAAA4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5
    }),
    _react2.default.createElement("path", {
      d: "m41.93 35.68",
      fill: "none",
      stroke: "#BCAAA4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5
    }),
    _react2.default.createElement("path", {
      d: "m87.34 60.99",
      fill: "none",
      stroke: "#BCAAA4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5
    }),
    _react2.default.createElement("path", {
      d: "m46.83 20.48",
      fill: "none",
      stroke: "#BCAAA4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.5
    }),
    _react2.default.createElement("circle", {
      cx: 63.41,
      cy: 53.4,
      r: 23.93,
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "b",
        cx: 63.41,
        cy: 53.4,
        r: 23.93
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#5D4037"
      },
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 9.0799 48.696)",
        x: 59.44,
        y: 9.51,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 6.2008 55.647)",
        x: 66.39,
        y: 16.46,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 3.3931 62.425)",
        x: 73.17,
        y: 23.24,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 .5854 69.204)",
        x: 79.95,
        y: 30.01,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -2.2224 75.982)",
        x: 86.73,
        y: 36.79,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -5.0301 82.761)",
        x: 93.5,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 6.2722 55.475)",
        x: 66.22,
        y: 16.28,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 3.3931 62.425)",
        x: 73.17,
        y: 23.24,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 .5854 69.204)",
        x: 79.95,
        y: 30.01,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -2.2224 75.982)",
        x: 86.73,
        y: 36.79,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -5.0301 82.761)",
        x: 93.5,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -7.8378 89.539)",
        x: 100.28,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 2.3014 45.889)",
        x: 52.66,
        y: 16.28,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -.5776 52.839)",
        x: 59.61,
        y: 23.24,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -3.3854 59.618)",
        x: 66.39,
        y: 30.01,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -6.1931 66.396)",
        x: 73.17,
        y: 36.79,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -9.0008 73.175)",
        x: 79.95,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -11.809 79.953)",
        x: 86.73,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -.5063 52.667)",
        x: 59.44,
        y: 23.06,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -3.3854 59.618)",
        x: 66.39,
        y: 30.01,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -6.1931 66.396)",
        x: 73.17,
        y: 36.79,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -9.0008 73.175)",
        x: 79.95,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -11.809 79.953)",
        x: 86.73,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -14.616 86.732)",
        x: 93.5,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -4.4771 43.081)",
        x: 45.88,
        y: 23.06,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -7.3561 50.032)",
        x: 52.83,
        y: 30.01,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -10.164 56.81)",
        x: 59.61,
        y: 36.79,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -12.972 63.588)",
        x: 66.39,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -15.779 70.367)",
        x: 73.17,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -18.587 77.145)",
        x: 79.95,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -7.2848 49.859)",
        x: 52.66,
        y: 29.84,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -10.164 56.81)",
        x: 59.61,
        y: 36.79,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -12.972 63.588)",
        x: 66.39,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -15.779 70.367)",
        x: 73.17,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -18.587 77.145)",
        x: 79.95,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -21.395 83.924)",
        x: 86.73,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -11.256 40.273)",
        x: 39.1,
        y: 29.84,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -14.135 47.224)",
        x: 46.06,
        y: 36.79,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -16.942 54.002)",
        x: 52.83,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -19.75 60.781)",
        x: 59.61,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -22.558 67.559)",
        x: 66.39,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -25.366 74.338)",
        x: 73.17,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -14.063 47.052)",
        x: 45.88,
        y: 36.62,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -16.942 54.002)",
        x: 52.83,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -19.75 60.781)",
        x: 59.61,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -22.558 67.559)",
        x: 66.39,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -25.366 74.338)",
        x: 73.17,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -28.173 81.116)",
        x: 79.95,
        y: 70.68,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -18.034 37.465)",
        x: 32.33,
        y: 36.62,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -20.913 44.416)",
        x: 39.28,
        y: 43.57,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -23.721 51.194)",
        x: 46.06,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -26.528 57.973)",
        x: 52.83,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -29.336 64.751)",
        x: 59.61,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -32.144 71.53)",
        x: 66.39,
        y: 70.68,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -20.842 44.244)",
        x: 39.1,
        y: 43.4,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -23.721 51.194)",
        x: 46.06,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -26.528 57.973)",
        x: 52.83,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -29.336 64.751)",
        x: 59.61,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -32.144 71.53)",
        x: 66.39,
        y: 70.68,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -34.952 78.308)",
        x: 73.17,
        y: 77.46,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -24.812 34.658)",
        x: 25.55,
        y: 43.4,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -27.692 41.608)",
        x: 32.5,
        y: 50.35,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -30.499 48.387)",
        x: 39.28,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -33.307 55.165)",
        x: 46.06,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -36.115 61.944)",
        x: 52.83,
        y: 70.68,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -38.922 68.722)",
        x: 59.61,
        y: 77.46,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -27.62 41.436)",
        x: 32.33,
        y: 50.18,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -30.499 48.387)",
        x: 39.28,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -33.307 55.165)",
        x: 46.06,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -36.115 61.944)",
        x: 52.83,
        y: 70.68,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -38.922 68.722)",
        x: 59.61,
        y: 77.46,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -41.73 75.501)",
        x: 66.39,
        y: 84.24,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -31.591 31.85)",
        x: 18.77,
        y: 50.18,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -34.47 38.8)",
        x: 25.72,
        y: 57.13,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -37.278 45.579)",
        x: 32.5,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -40.086 52.358)",
        x: 39.28,
        y: 70.68,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -42.893 59.136)",
        x: 46.06,
        y: 77.46,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -45.701 65.914)",
        x: 52.83,
        y: 84.24,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -34.399 38.628)",
        x: 25.55,
        y: 56.96,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -37.278 45.579)",
        x: 32.5,
        y: 63.91,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -40.086 52.358)",
        x: 39.28,
        y: 70.68,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -42.893 59.136)",
        x: 46.06,
        y: 77.46,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -45.701 65.914)",
        x: 52.83,
        y: 84.24,
        width: 7.76,
        height: 7.76
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7071 -.7071 .7071 .7071 -48.509 72.693)",
        x: 59.61,
        y: 91.02,
        width: 7.76,
        height: 7.76
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.48 112.53s3.76 6.63 16.63 4c8.18-1.67 19-13.96 19-13.96s-11.69-6.49-23.65-2.89c-8.68 2.61-11.43 9.96-11.98 12.85z",
      fill: "#7CB342"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m87.1 101.69c4.21 0 8.04 1.01 10.71 1.96-3.88 3.83-9.88 8.94-14.32 9.85-1.8 0.37-3.5 0.55-5.04 0.55-4.22 0-6.5-1.37-7.56-2.29 0.81-2.42 3.18-7.22 9.46-9.12 2.11-0.63 4.38-0.95 6.75-0.95m0-3.1c-2.45 0-5.04 0.31-7.64 1.09-8.68 2.61-11.42 9.96-11.98 12.85 0 0 2.62 4.62 10.97 4.62 1.65 0 3.53-0.18 5.66-0.62 8.18-1.67 19-13.96 19-13.96s-7.16-3.98-16.01-3.98z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.16 112.53s-3.75 6.62-16.61 3.99c-8.17-1.67-18.98-13.95-18.98-13.95s11.67-6.48 23.62-2.88c8.67 2.61 11.41 9.96 11.97 12.84z",
      fill: "#7CB342"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m39.56 98.6v3.09c2.37 0 4.63 0.32 6.74 0.96 6.28 1.89 8.64 6.7 9.45 9.11-1.05 0.92-3.33 2.29-7.54 2.29-1.55 0-3.24-0.19-5.04-0.55-4.42-0.9-10.42-6.02-14.3-9.84 2.66-0.95 6.48-1.96 10.68-1.96l0.01-3.1m0 0c-8.83 0-15.98 3.97-15.98 3.97s10.81 12.28 18.98 13.95c2.13 0.43 4.01 0.62 5.66 0.62 8.33 0 10.95-4.61 10.95-4.61-0.56-2.89-3.3-10.23-11.97-12.84-2.6-0.78-5.19-1.09-7.64-1.09z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Sunflower;
