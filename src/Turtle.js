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

function Turtle(props) {
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
        id: "s",
        x1: 35.229,
        x2: 35.229,
        y1: 28.717,
        y2: 92.891,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7BBF33",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#74B632",
        offset: 0.2738
      }),
      _react2.default.createElement("stop", {
        stopColor: "#639E30",
        offset: 0.7195
      }),
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m51.6 93.87c-2.55 0-6.31-0.77-9.76-4.41-3.75-3.96-7.99-12.44-7.23-30.41-1.27-0.18-2.77-0.32-4.33-0.46-9.08-0.82-22.83-2.06-23.22-15.95-0.12-4.36 1.54-8.55 4.68-11.78 3.31-3.41 7.94-5.36 12.69-5.36l4.63 0.04c1.71-1.17 3.7-1.79 5.78-1.79 2.35 0.02 4.55 0.79 6.32 2.18 8.17 1.53 14.23 8.79 14.17 17.05-0.01 1.25-0.22 2.55-0.62 3.88-0.5 4.69 0.71 23.36 7.17 32.52 1.79 2.54 2 5.57 0.57 8.32-1.9 3.69-6.26 6.17-10.85 6.17z",
      fill: "url(#s)"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.85 25.25h0.07c2.14 0.02 4.1 0.8 5.61 2.09 7.57 1.24 13.37 7.8 13.31 15.63-0.01 1.22-0.23 2.42-0.59 3.58-0.6 4.99 0.66 24.11 7.42 33.69 3.9 5.53-2.04 12.12-9.06 12.12-7.77 0-16.88-8.07-15.42-34.58-7.95-1.63-27.19 0.44-27.63-15.18-0.24-8.61 7.2-15.6 15.87-15.6h0.13l4.98 0.04c1.48-1.12 3.31-1.79 5.31-1.79m0-3c-2.23 0-4.36 0.61-6.22 1.78l-4.04-0.03h-0.16c-5.16 0-10.17 2.12-13.77 5.82-3.43 3.52-5.24 8.09-5.1 12.86 0.43 15.22 15.56 16.58 24.6 17.4 1.02 0.09 2 0.18 2.91 0.28-0.42 14.16 2.16 24.29 7.69 30.13 3.82 4.03 8.01 4.88 10.85 4.88 5.13 0 10.03-2.8 12.19-6.98 1.69-3.27 1.45-6.86-0.68-9.87-6.18-8.77-7.38-26.63-6.92-31.36 0.41-1.41 0.63-2.81 0.64-4.16 0.07-8.86-6.34-16.66-15.04-18.47-1.98-1.45-4.38-2.25-6.85-2.27l-0.1-0.01z",
      fill: "#397A26"
    }),
    _react2.default.createElement("path", {
      d:
        "m92.45 92.67c2.28 0 4.6 0.76 6.06 2.49 1.77 2.08 2.09 13.26 2.18 15.99 0.08 2.68 0.1 5.59-1.5 7.74-1.25 1.68-3.32 2.6-5.39 2.9-0.69 0.1-1.38 0.14-2.07 0.14-1.39 0-2.8-0.16-4.18-0.33-1.92-0.23-3.88-0.46-5.61-1.32-1.73-0.85-3.22-2.46-3.39-4.38-0.21-2.41 1.6-4.48 3.29-6.21 1.01-1.03 1.92-10.35 2.55-11.66 0.41-0.84 0.38-1.88 0.8-2.68 0.98-1.88 4.3-2.43 6.23-2.62 0.34-0.04 0.69-0.06 1.03-0.06m0-3c-0.44 0-0.89 0.02-1.33 0.07-4.54 0.46-7.34 1.84-8.59 4.22-0.4 0.78-0.56 1.52-0.69 2.12-0.05 0.23-0.11 0.54-0.16 0.64-0.42 0.86-0.64 2.11-1.18 5.44-0.27 1.68-0.76 4.7-1.1 5.73-1.61 1.66-4.17 4.53-3.84 8.27 0.24 2.79 2.18 5.4 5.05 6.81 2.21 1.09 4.54 1.37 6.59 1.61 1.38 0.16 2.95 0.35 4.53 0.35 0.89 0 1.71-0.06 2.51-0.17 3.13-0.46 5.74-1.9 7.36-4.08 2.3-3.09 2.18-7.02 2.1-9.63v-0.11c-0.41-13.06-1.63-16.24-2.88-17.72-1.93-2.26-4.97-3.55-8.37-3.55z",
      fill: "#397A26"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.29 90.64c1.92 0 3.83 0.56 5.21 1.87 2 1.88 3.56 13 3.95 15.71 0.38 2.67 0.72 5.57-0.64 7.9-1.06 1.81-3.02 2.96-5.05 3.49-1.74 0.46-3.55 0.52-5.36 0.52h-0.91c-1.94-0.01-3.92-0.03-5.75-0.69s-3.49-2.1-3.87-4c-0.48-2.38 1.1-4.65 2.59-6.57 0.89-1.14 0.76-10.55 1.25-11.93 0.31-0.89 0.18-1.92 0.5-2.76 0.77-1.98 4.02-2.9 5.92-3.31 0.71-0.15 1.44-0.23 2.16-0.23m0-3c-0.92 0-1.86 0.1-2.77 0.3-4.47 0.96-7.12 2.65-8.09 5.16-0.32 0.82-0.39 1.58-0.45 2.19-0.02 0.23-0.05 0.55-0.09 0.66-0.32 0.9-0.41 2.17-0.58 5.56-0.08 1.71-0.24 4.78-0.46 5.84-1.42 1.84-3.66 4.98-2.91 8.68 0.55 2.75 2.77 5.14 5.79 6.23 2.33 0.84 4.68 0.86 6.75 0.87h0.93c1.83 0 3.96-0.05 6.12-0.61 3.07-0.8 5.51-2.54 6.88-4.88 1.95-3.33 1.39-7.25 1.02-9.83l-0.02-0.11c-1.86-12.99-3.43-16.02-4.85-17.36-1.84-1.74-4.42-2.7-7.27-2.7z",
      fill: "#397A26"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 70.262,
        x2: 87.29,
        y1: 146.2,
        y2: 129.81,
        gradientTransform: "matrix(.8026 -.5965 .5965 .8026 -55.166 46.454)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#52882D",
        offset: 0.546
      }),
      _react2.default.createElement("stop", {
        stopColor: "#33691E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.84 109.68c-1.69 1.73-3.5 3.8-3.29 6.21 0.17 1.92 1.66 3.53 3.39 4.38s3.69 1.09 5.61 1.32c2.08 0.24 4.19 0.49 6.26 0.19s4.14-1.22 5.39-2.9c1.6-2.15 1.59-5.06 1.5-7.74-0.09-2.73-0.41-13.9-2.18-15.99-1.68-1.98-4.51-2.7-7.1-2.43-1.93 0.19-5.25 0.74-6.23 2.62-0.42 0.8-0.39 1.84-0.8 2.68-0.64 1.31-1.55 10.63-2.55 11.66z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d: "m11.24 60.58",
      fill: "none",
      stroke: "#424242",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2.848
    }),
    _react2.default.createElement("ellipse", {
      cx: 11.64,
      cy: 39.07,
      rx: 2.44,
      ry: 1.48
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 46.207,
        x2: 63.31,
        y1: 118.9,
        y2: 102.43,
        gradientTransform: "matrix(.7315 -.6818 .6818 .7315 -59.452 64.838)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#52882D",
        offset: 0.546
      }),
      _react2.default.createElement("stop", {
        stopColor: "#33691E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m47.47 108.87c-1.49 1.92-3.07 4.18-2.59 6.57 0.38 1.9 2.05 3.34 3.87 4s3.81 0.68 5.75 0.69c2.1 0.01 4.23 0.02 6.27-0.51 2.03-0.53 3.99-1.68 5.05-3.49 1.36-2.33 1.02-5.23 0.64-7.9-0.39-2.72-1.96-13.83-3.95-15.71-1.9-1.79-4.8-2.19-7.35-1.64-1.9 0.41-5.16 1.33-5.92 3.31-0.33 0.85-0.19 1.88-0.5 2.76-0.51 1.38-0.38 10.78-1.27 11.92z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 36.78,
        x2: 55.613,
        y1: 123.44,
        y2: 105.31,
        gradientTransform: "matrix(.8026 -.5965 .5965 .8026 -55.166 46.454)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#92C755",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87BD4E",
        offset: 0.2211
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9222
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m51.55 123.64c-1.5 0-3.03-0.18-4.38-0.34-1.94-0.23-4.14-0.49-6.12-1.47-2.41-1.19-4.03-3.34-4.23-5.62-0.26-3.01 1.73-5.37 3.65-7.34 0.4-0.78 0.96-4.25 1.3-6.34 0.46-2.83 0.71-4.34 1.06-5.05 0.12-0.25 0.2-0.61 0.28-0.99 0.11-0.54 0.24-1.15 0.55-1.74 0.99-1.91 3.42-3.03 7.43-3.43 0.39-0.04 0.79-0.06 1.19-0.06 2.97 0 5.6 1.1 7.23 3.03 0.97 1.15 2.14 4.1 2.54 16.86v0.12c0.08 2.55 0.19 6.04-1.81 8.72-1.38 1.86-3.65 3.1-6.4 3.5-0.72 0.1-1.47 0.15-2.29 0.15z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.27 92.76c2.29 0 4.62 0.77 6.09 2.5 1.77 2.09 2.1 13.31 2.19 16.06 0.08 2.69 0.1 5.62-1.51 7.78-1.26 1.69-3.33 2.61-5.41 2.91-0.69 0.1-1.38 0.14-2.08 0.14-1.4 0-2.81-0.16-4.2-0.33-1.93-0.23-3.9-0.46-5.63-1.32-1.74-0.86-3.23-2.47-3.4-4.4-0.21-2.42 1.6-4.5 3.3-6.24 1.01-1.04 1.92-10.4 2.56-11.71 0.41-0.85 0.39-1.88 0.81-2.69 0.98-1.89 4.32-2.44 6.25-2.63 0.34-0.05 0.68-0.07 1.03-0.07m0-3c-0.44 0-0.9 0.02-1.34 0.07-4.55 0.46-7.37 1.84-8.61 4.23-0.4 0.78-0.56 1.53-0.69 2.13-0.05 0.23-0.11 0.54-0.16 0.64-0.42 0.86-0.65 2.11-1.19 5.46-0.27 1.69-0.76 4.72-1.11 5.76-1.61 1.67-4.19 4.55-3.86 8.3 0.24 2.79 2.18 5.41 5.06 6.83 2.22 1.1 4.55 1.37 6.61 1.61 1.39 0.16 2.96 0.35 4.55 0.35 0.9 0 1.72-0.06 2.51-0.17 3.14-0.46 5.76-1.91 7.38-4.09 2.31-3.1 2.18-7.05 2.1-9.66v-0.11c-0.41-13.12-1.63-16.3-2.89-17.79-1.9-2.26-4.95-3.56-8.36-3.56z",
      fill: "#397A26"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 76.156,
        x2: 94.987,
        y1: 150.5,
        y2: 132.37,
        gradientTransform: "matrix(.4988 -.8667 .8667 .4988 -65.241 112.47)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#92C755",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87BD4E",
        offset: 0.2211
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9222
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.63 122.7c-0.17 0-0.34 0-0.51-0.01-2.69-0.13-5.03-1.46-6.12-3.47-1.44-2.66-0.55-5.61 0.42-8.19 0.06-0.88-0.81-4.28-1.33-6.33-0.71-2.78-1.07-4.26-1.04-5.06 0.01-0.27-0.06-0.63-0.14-1.01-0.11-0.54-0.24-1.15-0.19-1.82 0.15-2.14 1.94-4.14 5.45-6.11 1.66-0.93 3.54-1.44 5.29-1.44 1.31 0 2.52 0.27 3.62 0.81 1.35 0.66 3.59 2.91 9.04 14.45l0.05 0.11c1.09 2.31 2.58 5.47 1.81 8.72-0.53 2.25-2.12 4.3-4.47 5.76-1.97 1.22-4.12 1.87-6.2 2.49-1.7 0.51-3.65 1.1-5.68 1.1z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m98.47 90.75c1.02 0 2.03 0.2 2.95 0.66 2.46 1.21 7.23 11.38 8.4 13.86 1.15 2.44 2.33 5.11 1.71 7.73-0.48 2.05-2.02 3.72-3.8 4.82-1.79 1.11-3.83 1.72-5.84 2.33-1.72 0.52-3.47 1.04-5.26 1.04-0.14 0-0.29 0-0.43-0.01-1.94-0.1-3.95-0.98-4.87-2.69-1.16-2.14-0.32-4.76 0.54-7.04 0.51-1.36-2.37-10.3-2.31-11.77 0.04-0.94-0.4-1.88-0.33-2.79 0.15-2.12 2.99-3.95 4.69-4.9 1.37-0.76 2.98-1.24 4.55-1.24m0-3c-2.03 0-4.11 0.57-6.02 1.63-3.99 2.23-6.03 4.62-6.22 7.31-0.06 0.87 0.09 1.62 0.22 2.23 0.05 0.23 0.11 0.54 0.11 0.65-0.04 0.96 0.25 2.2 1.09 5.48 0.42 1.65 1.18 4.64 1.27 5.72-0.81 2.17-2.03 5.84-0.23 9.15 1.34 2.47 4.16 4.09 7.36 4.25 0.19 0.01 0.39 0.01 0.58 0.01 2.25 0 4.31-0.62 6.13-1.17 2.07-0.62 4.42-1.33 6.55-2.65 2.7-1.67 4.52-4.05 5.14-6.69 0.88-3.76-0.8-7.33-1.92-9.7l-0.05-0.1c-5.6-11.87-7.99-14.3-9.74-15.17-1.29-0.62-2.73-0.95-4.27-0.95z",
      fill: "#397A26"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 37.866,
        x2: 54.969,
        y1: 122.4,
        y2: 105.93,
        gradientTransform: "matrix(.8026 -.5965 .5965 .8026 -55.166 46.454)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#92C755",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87BD4E",
        offset: 0.2211
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9222
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m41.61 109.85c-1.7 1.74-3.51 3.82-3.3 6.24 0.17 1.93 1.66 3.55 3.4 4.4s3.71 1.1 5.63 1.32c2.09 0.25 4.2 0.49 6.28 0.19s4.15-1.23 5.41-2.91c1.61-2.16 1.59-5.08 1.51-7.78-0.09-2.74-0.41-13.96-2.19-16.06-1.69-1.99-4.53-2.71-7.13-2.44-1.94 0.2-5.27 0.75-6.25 2.63-0.42 0.81-0.4 1.84-0.81 2.69-0.63 1.33-1.54 10.68-2.55 11.72z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 77.242,
        x2: 94.345,
        y1: 149.45,
        y2: 132.99,
        gradientTransform: "matrix(.4988 -.8667 .8667 .4988 -65.241 112.47)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#92C755",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87BD4E",
        offset: 0.2211
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9222
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.86 111.47c-0.86 2.27-1.7 4.9-0.54 7.04 0.92 1.7 2.94 2.59 4.87 2.69 1.94 0.1 3.84-0.47 5.7-1.03 2.01-0.61 4.05-1.22 5.84-2.33s3.32-2.78 3.8-4.82c0.62-2.62-0.56-5.3-1.71-7.73-1.17-2.48-5.94-12.65-8.4-13.86-2.34-1.16-5.23-0.68-7.51 0.6-1.7 0.95-4.54 2.78-4.69 4.9-0.06 0.91 0.37 1.85 0.33 2.79-0.06 1.44 2.83 10.39 2.31 11.75z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 35.231,
        x2: 35.231,
        y1: 30.005,
        y2: 91.433,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7BBF33",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#74B632",
        offset: 0.2738
      }),
      _react2.default.createElement("stop", {
        stopColor: "#639E30",
        offset: 0.7195
      }),
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.67 80.25c-6.76-9.58-8.02-28.7-7.42-33.69 0.36-1.16 0.58-2.36 0.59-3.58 0.07-7.83-5.74-14.4-13.31-15.63-1.51-1.28-3.46-2.07-5.61-2.09-2.02-0.02-3.89 0.66-5.38 1.79l-4.97-0.05c-8.73-0.07-16.25 6.95-16.01 15.6 0.44 15.62 19.68 13.55 27.62 15.19-2.76 50.46 32.71 34.12 24.49 22.46z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "ab",
        x1: 105.24,
        x2: 123.56,
        y1: 97.72,
        y2: 97.72,
        gradientTransform: "matrix(.5883 .7654 -.7207 .554 115.54 -44.979)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#92C755",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87BD4E",
        offset: 0.2211
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9222
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.82 102.96c-2.19 0-4.41-0.44-6.43-1.28l-0.12-0.05-0.11-0.07c-0.86-0.54-5.14-3.41-5.12-6.43 0-0.84 0.32-2.04 1.82-2.96 1.14-0.7 2.37-1.06 3.68-1.06 2.53 0 4.61 1.37 5.38 1.95l6.43 1.56c0.79 0.19 2.65 0.64 3.34 2.32 0.45 1.09 0.21 2.41-0.59 3.37-0.63 0.75-1.45 1.16-2.17 1.46-1.91 0.79-3.96 1.19-6.11 1.19z",
      fill: "url(#ab)"
    }),
    _react2.default.createElement("path", {
      d:
        "m107.54 92.61c2.62 0 4.7 1.83 4.7 1.83 2.25 0.54 4.5 1.09 6.75 1.63 0.9 0.22 1.95 0.55 2.31 1.43 0.26 0.62 0.06 1.35-0.36 1.84-0.41 0.49-1 0.79-1.59 1.04-1.73 0.72-3.62 1.08-5.53 1.08-1.98 0-3.99-0.39-5.86-1.17 0 0-7.1-4.5-3.31-6.85 0.98-0.6 1.97-0.83 2.89-0.83m0-3c-1.59 0-3.09 0.43-4.47 1.28-2.19 1.36-2.53 3.23-2.53 4.23-0.02 3.61 4.06 6.59 5.82 7.7l0.22 0.14 0.24 0.1c2.2 0.91 4.62 1.4 7.01 1.4 2.35 0 4.6-0.44 6.69-1.32 0.83-0.35 1.89-0.87 2.73-1.88 1.18-1.41 1.5-3.29 0.83-4.91-0.98-2.38-3.45-2.98-4.38-3.2l-6.13-1.49c-1.07-0.75-3.3-2.05-6.03-2.05z",
      fill: "#397A26"
    }),
    _react2.default.createElement("circle", {
      cx: 35.07,
      cy: 35.96,
      r: 6.25,
      stroke: "#fff",
      strokeMiterlimit: 10,
      strokeWidth: 2.3776
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "aa",
        d:
          "M58.32,75.98c-6.76-9.58-5.67-24.43-5.07-29.42c0.36-1.16,0.58-2.36,0.59-3.58 c0.07-7.83-5.74-14.4-13.31-15.63c-1.51-1.28-3.46-2.07-5.61-2.09c-2.02-0.02-3.89,0.66-5.38,1.79L24.57,27 C15.84,26.93,8.32,33.95,8.56,42.6C9,58.22,28.24,56.15,36.18,57.79C33.8,96.95,73.17,99,73.17,99S66.54,87.64,58.32,75.98z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#aa"
      })
    ),
    _react2.default.createElement("path", {
      d: "m-118.45 60.58",
      fill: "none",
      stroke: "#424242",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2.848
    }),
    _react2.default.createElement("path", {
      d: "m7.89 47.2c3.87 5.58 13.94 6.66 20.61 2.17",
      fill: "none",
      stroke: "#397A26",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2.4791
    }),
    _react2.default.createElement("path", {
      d:
        "m77.92 57c-3.5-0.75-18.37-4.08-30.75 4.25-13.75 9.25-10.43 24.03-9.3 27.87 2.81 9.58 12.1 15.12 21.68 17.96 6.71 1.99 13.57 2.66 18.45 2.45 6.35-0.27 14.08-1.3 20.95-3.04 8.94-2.26 16.44-5.71 17.58-10.2 1.24-4.94 1.85-30.62-38.61-39.29z",
      fill: "#33691E"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "z",
        x1: 86.115,
        x2: 71.698,
        y1: 57.517,
        y2: 106.54,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#579155",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6BA139",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m43.62 71.65s6.77-19.86 36.38-15.31c31.65 4.87 35.02 26.66 34.81 34.88-0.22 8.78-21.67 13.53-35.72 14.19-14.04 0.65-48.85-5.24-35.47-33.76z",
      fill: "url(#z)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "y",
        d:
          "m43.62 71.65s7.97-20.43 37.39-14.85c32.65 6.2 34 26.19 33.79 34.42-0.22 8.78-21.67 13.53-35.72 14.19-14.03 0.65-48.84-5.24-35.46-33.76z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "x"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#y"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#x)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "w",
          x1: 74.789,
          x2: 66.472,
          y1: 56.301,
          y2: 104.74,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m75.4 70.72c0.41-0.52 1.18-0.65 1.74-0.28l0.47 0.31c0.93-5.65 2.33-11.27 4.21-16.73 0.06-0.04 0.12-0.09 0.17-0.14 0.34-0.33 0.43-0.78 0.29-1.18 0.12-0.32 0.23-0.64 0.35-0.96 0.16-0.43 0.04-0.91-0.31-1.22s-0.87-0.39-1.32-0.21c-0.71 0.28-1.22 0.9-1.38 1.64-0.07 0.32-0.06 0.63 0 0.93-2.06 5.87-3.59 11.91-4.56 17.99-3.13 0.37-6.2 1.07-9.18 2.07-0.52 1-1.04 2.01-1.55 3.02 3.81-1.53 7.82-2.49 11.91-2.88 0.14-0.01 0.27-0.04 0.39-0.1l-0.97-0.65c-0.55-0.36-0.66-1.09-0.26-1.61z",
        fill: "url(#w)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "v",
          x1: 56.996,
          x2: 48.679,
          y1: 53.245,
          y2: 101.68,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m54.79 55.97c-0.21-0.61-0.91-0.92-1.56-0.72-0.65 0.21-1.02 0.87-0.81 1.47 1.15 3.38 2.59 6.65 4.31 9.78 0.75-0.34 1.51-0.68 2.27-1-1.67-3.05-3.09-6.23-4.21-9.53z",
        fill: "url(#v)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "u",
          x1: 63.428,
          x2: 55.111,
          y1: 54.35,
          y2: 102.79,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m60.17 67.53c-0.76 0.32-1.52 0.65-2.28 0.99 1.3 2.17 2.73 4.27 4.29 6.3 0.41-0.81 0.83-1.61 1.24-2.42-1.16-1.57-2.25-3.2-3.25-4.87z",
        fill: "url(#u)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "t",
          x1: 84.462,
          x2: 76.145,
          y1: 57.962,
          y2: 106.4,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m77.61 70.75c-0.07 0.44-0.16 0.88-0.23 1.31-0.06 0.41-0.35 0.76-0.74 0.92l9.29 6.19c0.04 0.02 0.09 0.05 0.13 0.08l-0.03-2.9-8.42-5.6z",
        fill: "url(#t)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "r",
          x1: 106.14,
          x2: 97.823,
          y1: 61.684,
          y2: 110.12,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m112.02 59.47c-0.24-0.44-0.76-0.68-1.29-0.59l-1.17 0.19h-0.02c-0.67 0.12-1.13 0.71-1.03 1.34 0.01 0.07 0.03 0.14 0.06 0.21-3.01 2.84-6.16 5.57-9.4 8.18 0.41 0.68 0.82 1.36 1.22 2.04 3.97-3.18 7.78-6.52 11.4-10.03 0.39-0.35 0.48-0.9 0.23-1.34z",
        fill: "url(#r)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "q",
          x1: 95.982,
          x2: 87.665,
          y1: 59.94,
          y2: 108.38,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m88.51 76.69 0.03 2.78c0.19-0.1 0.35-0.2 0.47-0.28 3.23-2.15 6.37-4.42 9.43-6.8-0.41-0.68-0.81-1.36-1.22-2.04-2.83 2.2-5.74 4.32-8.71 6.34z",
        fill: "url(#q)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "p",
          x1: 78.795,
          x2: 70.478,
          y1: 56.989,
          y2: 105.42,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m77.38 72.06c0.07-0.44 0.16-0.88 0.23-1.31l-0.47-0.31c-0.55-0.37-1.33-0.24-1.74 0.28-0.41 0.53-0.29 1.25 0.26 1.62l0.97 0.65c0.39-0.17 0.68-0.52 0.75-0.93z",
        fill: "url(#p)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 50.973,
          x2: 42.656,
          y1: 52.211,
          y2: 100.65,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m38.27 77.83c-0.35 0.28-0.68 0.55-1.01 0.71-0.61 0.3-0.87 1-0.56 1.57 0.25 0.46 0.79 0.69 1.31 0.6 0.12-0.02 0.24-0.06 0.35-0.11 0.59-0.29 1.07-0.67 1.55-1.05 5.49-4.39 11.52-8.08 17.98-11.01-0.4-0.67-0.79-1.34-1.16-2.02-6.61 3-12.8 6.78-18.46 11.31z",
        fill: "url(#o)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 60.703,
          x2: 52.386,
          y1: 53.882,
          y2: 102.32,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m59 65.5c-0.76 0.32-1.52 0.66-2.27 1 0.37 0.68 0.76 1.36 1.16 2.02 0.75-0.34 1.51-0.67 2.28-0.99-0.41-0.66-0.79-1.34-1.17-2.03z",
        fill: "url(#n)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "m",
          x1: 62.588,
          x2: 54.27,
          y1: 54.206,
          y2: 102.64,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64 76.06c-0.45 0.08-0.92-0.08-1.2-0.43-0.21-0.26-0.41-0.54-0.61-0.8-5.13 10.13-9.8 20.55-13.92 31.03-0.24 0.61 0.09 1.27 0.73 1.47 0.21 0.07 0.42 0.08 0.63 0.04 0.43-0.07 0.81-0.35 0.97-0.76 4.07-10.35 8.68-20.63 13.74-30.64-0.02 0.01-0.04 0.02-0.06 0.02-0.1 0.03-0.19 0.06-0.28 0.07z",
        fill: "url(#m)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 67.274,
          x2: 58.956,
          y1: 55.01,
          y2: 103.45,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m64.24 73.5c-0.28-0.36-0.54-0.73-0.81-1.1-0.42 0.81-0.83 1.61-1.24 2.42 0.21 0.27 0.4 0.54 0.61 0.8 0.28 0.35 0.75 0.51 1.2 0.43 0.09-0.02 0.18-0.04 0.27-0.08 0.02-0.01 0.04-0.02 0.06-0.02 0.51-1.01 1.03-2.02 1.55-3.02-0.55 0.19-1.1 0.37-1.64 0.57z",
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 93.534,
          x2: 85.217,
          y1: 59.52,
          y2: 107.96,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m87.62 79.72c-0.7 0.04-1.23-0.25-1.56-0.47l0.35 31.17c0.01 0.64 0.57 1.14 1.25 1.12 0.06 0 0.13-0.01 0.19-0.02 0.6-0.1 1.05-0.6 1.04-1.18l-0.34-30.88c-0.19 0.1-0.42 0.19-0.69 0.23-0.08 0.02-0.16 0.03-0.24 0.03z",
        fill: "url(#k)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: 90.526,
          x2: 82.208,
          y1: 59.003,
          y2: 107.44,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m87.6 77.3c-0.02 0.01-0.05 0.03-0.08 0.05-0.05-0.03-0.1-0.07-0.13-0.08l-1.38-0.92 0.03 2.9c0.33 0.22 0.87 0.52 1.56 0.47 0.08-0.01 0.16-0.01 0.24-0.03 0.26-0.05 0.49-0.13 0.69-0.23l-0.03-2.78c-0.29 0.21-0.59 0.42-0.9 0.62z",
        fill: "url(#j)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 111.13,
          x2: 102.81,
          y1: 62.541,
          y2: 110.98,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m113.43 99.82c0.24 0.48 0.79 0.73 1.33 0.63 0.11-0.02 0.21-0.05 0.32-0.1 0.62-0.28 0.9-0.98 0.61-1.55-4.69-9.47-9.84-18.84-15.29-27.96-0.65 0.52-1.3 1.03-1.95 1.54 5.34 8.96 10.38 18.16 14.98 27.44z",
        fill: "url(#i)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "h",
          x1: 100.51,
          x2: 92.19,
          y1: 60.717,
          y2: 109.15,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2E7D32",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#1B5E20",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m97.22 70.35c0.41 0.68 0.82 1.36 1.22 2.04 0.65-0.51 1.31-1.02 1.95-1.54-0.41-0.68-0.81-1.36-1.22-2.04-0.64 0.52-1.29 1.03-1.95 1.54z",
        fill: "url(#h)"
      })
    )
  );
}

exports.default = Turtle;
