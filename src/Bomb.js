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

function Bomb(props) {
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
        "m31.24 18.76c-0.33-0.34-0.68-0.68-1.11-0.98-2.51-1.75-5.65 1.54-4.27 4.07 0.41 0.76 0.96 1.42 1.58 2 2.5-0.53 3.88-2.48 3.8-5.09z",
      fill: "#F44336"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.4 4.7c-10.18-0.51-17.33 6.91-25.27 12.02-5.23 3.36-10.89 5.32-17.18 4.74-1.49-0.14-3.02-0.35-4.41-0.92-1.04-0.42-1.64-1.1-2.29-1.77 0.07 2.62-1.31 4.56-3.79 5.09 3.03 2.81 8.17 3.58 11.92 3.67 9.89 0.25 17.43-4.52 25.12-10.12 4.93-3.6 16.74-11.53 21.83-3.91 2.7 4.04-0.04 13.03-4.73 14.68-3.62 1.28-2.06 7.08 1.59 5.79 6.22-2.2 9.77-9.39 10.11-15.67 0.42-7.93-5.18-13.21-12.9-13.6z",
      fill: "#212121"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.4 4.7c-10.18-0.51-17.33 6.91-25.27 12.02-5.23 3.36-10.89 5.32-17.18 4.74-1.49-0.14-3.02-0.35-4.41-0.92-1.04-0.42-1.64-1.1-2.29-1.77 0.07 2.62-1.31 4.56-3.79 5.09 3.03 2.81 8.17 3.58 11.92 3.67 9.89 0.25 17.43-4.52 25.12-10.12 4.93-3.6 16.74-11.53 21.83-3.91 2.7 4.04-0.04 13.03-4.73 14.68-3.62 1.28-2.06 7.08 1.59 5.79 6.22-2.2 9.77-9.39 10.11-15.67 0.42-7.93-5.18-13.21-12.9-13.6z",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m79.4 5.67c0.31 0 0.63 0.01 0.95 0.02 3.74 0.19 6.99 1.61 9.14 4 2.01 2.23 2.98 5.18 2.8 8.53-0.43 8.01-5.19 13.28-9.44 14.78-0.24 0.09-0.47 0.13-0.69 0.13-0.91 0-1.45-0.81-1.59-1.62-0.15-0.88 0.12-1.98 1.35-2.41 2.41-0.85 4.54-3.42 5.68-6.86 1.18-3.56 1.01-7.13-0.45-9.32-1.62-2.42-3.96-3.64-6.96-3.64-4.23 0-9.56 2.39-16.29 7.3-7.19 5.24-14.41 9.94-23.79 9.94-0.24 0-0.48 0-0.72-0.01-2.91-0.07-8.25-0.62-11.26-3.41-0.59-0.54-1.04-1.11-1.38-1.74-0.45-0.83-0.08-1.64 0.11-1.95 0.41-0.69 1.11-1.14 1.78-1.14 0.32 0 0.64 0.11 0.93 0.31 0.37 0.26 0.68 0.56 0.96 0.86l0.17 0.17c0.62 0.64 1.32 1.36 2.46 1.83 1.56 0.64 3.25 0.86 4.7 0.99 0.76 0.07 1.53 0.11 2.29 0.11 5.22 0 10.29-1.63 15.52-5 1.79-1.15 3.55-2.43 5.26-3.66 5.84-4.21 11.35-8.21 18.47-8.21m0-1c-9.66 0-16.59 7.1-24.27 12.04-4.61 2.96-9.56 4.84-14.98 4.84-0.73 0-1.46-0.03-2.2-0.1-1.49-0.14-3.02-0.35-4.41-0.92-1.04-0.42-1.64-1.1-2.29-1.77-0.33-0.34-0.68-0.68-1.11-0.98-0.49-0.34-1.01-0.49-1.51-0.49-2.06 0-3.87 2.53-2.76 4.57 0.41 0.76 0.96 1.42 1.58 2 3.03 2.81 8.17 3.58 11.92 3.67 0.25 0.01 0.5 0.01 0.75 0.01 9.53 0 16.88-4.67 24.38-10.13 3.43-2.5 10.19-7.11 15.71-7.11 2.41 0 4.58 0.88 6.13 3.2 2.7 4.04-0.04 13.03-4.73 14.68-3.26 1.15-2.32 5.97 0.57 5.97 0.32 0 0.66-0.06 1.02-0.19 6.22-2.2 9.77-9.39 10.11-15.67 0.42-7.91-5.18-13.2-12.89-13.59-0.36-0.02-0.69-0.03-1.02-0.03z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 60.375,
        cy: 67.033,
        r: 47.649,
        gradientTransform: "matrix(.9563 .2924 -.2924 .9563 22.548 -15.105)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.2311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.9281
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.96 44.22-3.23-11.43c-0.56-2.13-2.31-3.39-4.42-4.03l-12.69-3.88c-2.11-0.64-4.26-0.58-5.92 0.87l-9.14 7.89c-17.25 2.13-32.46 13.99-37.87 31.69-7.33 23.99 6.18 49.32 30.17 56.66 23.99 7.33 49.39-6.19 56.72-30.18 5.43-17.7-0.5-36.18-13.62-47.59z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m77.21 27.49c0.46 0 0.98 0.09 1.54 0.26l12.69 3.88c1.36 0.42 2.17 1.06 2.39 1.92 0 0.02 0.01 0.04 0.02 0.06l3.23 11.43c0.16 0.56 0.48 1.07 0.92 1.45 12.63 10.99 17.63 28.43 12.73 44.45-2.71 8.87-8.09 16.43-15.57 21.88-7.23 5.27-16.11 8.17-25 8.17-4.19 0-8.36-0.63-12.4-1.86-10.84-3.31-19.74-10.64-25.06-20.62-5.32-9.99-6.43-21.45-3.12-32.29 4.87-15.93 18.75-27.54 35.37-29.59 0.59-0.07 1.14-0.32 1.59-0.71l9.16-7.92c0.25-0.22 0.68-0.51 1.51-0.51m0-3c-1.27 0-2.48 0.37-3.5 1.26l-9.14 7.89c-17.25 2.13-32.46 13.99-37.87 31.69-7.33 23.99 6.18 49.32 30.17 56.66 4.42 1.35 8.89 1.99 13.28 1.99 19.45 0 37.46-12.61 43.44-32.18 5.41-17.7-0.52-36.18-13.63-47.59l-3.23-11.43c-0.56-2.13-2.31-3.39-4.42-4.03l-12.69-3.88c-0.8-0.24-1.61-0.38-2.41-0.38z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-32.31-8.06 2.86-3.9c0.29-0.4 0.92-0.19 0.93 0.3l0.04 4.24c0.01 0.93 1.06 1.46 1.82 0.92l9.7-7c0.46-0.33 1.04 0.21 0.73 0.69l-7.86 12.4c-0.22 0.34 0.03 0.78 0.43 0.79l6.51 0.05c0.56 0 0.71 0.78 0.19 0.99l-5.9 2.38c-0.45 0.18-0.42 0.82 0.04 0.96l4.92 1.58c0.5 0.16 0.47 0.88-0.04 0.99l-5.77 1.29c-0.34 0.08-0.51 0.47-0.32 0.77l6.15 9.95c0.31 0.5-0.33 1.04-0.77 0.66l-7.08-6.13c-0.64-0.55-1.62 0.02-1.45 0.85l1.79 6.77c0.2 0.97-0.57 1.03-1.3 0.36l-4.78-6.01c-0.71-0.65-1.85-0.22-1.96 0.73l-0.74 3.74c-0.14 1.17-0.86 1.21-1.3 0.12l-1.49-2.45c-0.42-1.05-1.76-1.35-2.59-0.59l-5.87 5.35c-0.4 0.36-1.01-0.05-0.83-0.55l2.33-6.44c0.33-0.91-0.67-1.73-1.5-1.22l-5.94 3.64c-0.49 0.3-1.03-0.32-0.66-0.76l5.15-6.22c0.27-0.32 0.06-0.81-0.36-0.84l-3.65-0.82c-1.02-0.06-1.21-0.8-0.33-1.33l2.97-1.8c1.03-0.62 0.93-2.14-0.16-2.64l-3.96-1.79c-0.47-0.21-0.37-0.92 0.15-0.98l4.07-0.47c1.75-0.2 2.62-2.22 1.57-3.63l-4.64-6.24c-0.36-0.48 0.26-1.08 0.73-0.71l6.46 5.16c0.61 0.48 1.47-0.12 1.22-0.86l-1.04-3.05c-0.18-0.52 0.48-0.92 0.86-0.51l1.94 2.09c0.7 0.75 1.95 0.34 2.07-0.67l0.66-5.35c0.06-0.52 0.78-0.62 0.98-0.13l2.05 4.99c0.52 1.2 2.18 1.4 2.97 0.33z",
      fill: "#FF9100"
    }),
    _react2.default.createElement("path", {
      d:
        "m-29.1-0.68c0.5-0.23 0.75 0.13 0.45 0.58-0.43 0.64-1.36 1.85-1.73 2.23-0.38 0.39-0.24 1.04 0.26 1.25l1.77 0.33c0.36 0.15 0.33 0.66-0.04 0.77l-1.62 0.4c-0.52 0.16-0.69 0.81-0.31 1.2l1.72 2.38c0.19 0.22-0.05 0.55-0.32 0.44l-2.5-1.24c-0.99-0.57-1.98-0.2-2.32 0.89l-0.82 2.56c-0.06 0.28-0.45 0.3-0.54 0.03l-0.64-2.22c-0.19-0.65-1-0.86-1.48-0.38l-2.09 2.08c-0.25 0.19-0.58-0.1-0.41-0.37l1.01-2.1c0.22-0.36-0.22-1.23-0.64-1.2l-1.87-0.13c-0.32 0-0.61-0.27-0.58-0.59 0.02-0.19 0.13-0.37 0.33-0.46 0.54-0.24 1.49-0.77 2.31-1.24 0.84-0.48 1.08-1.58 0.52-2.37l-1.78-2.35c-0.33-0.42 0.11-1.01 0.61-0.8l3.24 2.31c0.56 0.23 1.19-0.14 1.26-0.74l0.29-2.5c0.03-0.27 0.38-0.34 0.52-0.11l1.02 2.05c0.37 0.74 1.25 1.05 2 0.71l2.38-1.41z",
      fill: "#FFEA00"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-40.05 34.45m20.45 1.3m-12 1.06m-9.29 3.73c0.71 1.09 1.93 1.76 3.27 1.76 1.22 0 2.34-0.55 3.09-1.52 0.34 1.49 1.68 2.6 3.27 2.6 0.7 0 1.38-0.22 1.96-0.64l2.6-1.88-3.17 5.01c-0.53 0.83-0.56 1.89-0.09 2.75 0.31 0.57 0.82 1.01 1.41 1.23-0.5 0.52-0.78 1.23-0.75 1.98 0.03 0.85 0.46 1.63 1.13 2.11-0.83 0.2-1.53 0.79-1.86 1.58-0.34 0.81-0.27 1.74 0.19 2.48l0.68 1.1c-0.35-0.13-0.71-0.2-1.09-0.2-0.93 0-1.81 0.42-2.4 1.14-0.54 0.65-0.77 1.49-0.67 2.33l-0.37-0.46c-0.07-0.09-0.15-0.17-0.23-0.25-0.62-0.57-1.43-0.89-2.28-0.89-1.63 0-3.02 1.16-3.32 2.74-0.71-0.82-1.75-1.31-2.88-1.31-0.95 0-1.86 0.35-2.57 1l-0.82 0.75v-0.01c0.36-0.99 0.21-2.09-0.39-2.94-0.61-0.87-1.6-1.38-2.65-1.38h-0.01c0.4-0.73 0.45-1.61 0.11-2.39-0.38-0.87-1.16-1.47-2.08-1.6l-0.08-0.02c1.07-0.73 1.68-1.97 1.6-3.27-0.06-0.98-0.5-1.87-1.2-2.51 1.03-0.43 1.86-1.24 2.33-2.31 0.37-0.85 0.46-1.76 0.28-2.62 0.13 0.02 0.26 0.03 0.39 0.03 0.96 0 1.87-0.47 2.43-1.25 0.2-0.28 0.35-0.59 0.44-0.9 0.17 0.02 0.33 0.04 0.51 0.04 1.48-0.02 2.75-0.95 3.22-2.28m-0.84-6.8c-0.24 0-0.48 0.16-0.51 0.45l-0.66 5.35c-0.08 0.65-0.63 1.06-1.2 1.06-0.31 0-0.63-0.12-0.87-0.38l-1.94-2.09c-0.11-0.12-0.24-0.17-0.37-0.17-0.32 0-0.62 0.31-0.49 0.68l1.04 3.05c0.19 0.55-0.25 1.03-0.74 1.03-0.16 0-0.33-0.05-0.48-0.17l-6.46-5.16c-0.1-0.08-0.21-0.12-0.32-0.12-0.38 0-0.69 0.45-0.41 0.82l4.73 6.36c1.01 1.36 0.17 3.31-1.51 3.5l-4.22 0.48c-0.52 0.06-0.63 0.76-0.15 0.98l3.96 1.79c1.1 0.49 1.19 2.01 0.16 2.64l-2.97 1.8c-0.88 0.53-0.69 1.27 0.33 1.33l3.65 0.82c0.42 0.03 0.63 0.52 0.36 0.84l-5.15 6.22c-0.3 0.36 0 0.84 0.39 0.84 0.09 0 0.18-0.02 0.27-0.08l5.94-3.64c0.18-0.11 0.36-0.16 0.54-0.16 0.66 0 1.22 0.66 0.96 1.38l-2.33 6.44c-0.13 0.37 0.16 0.69 0.49 0.69 0.12 0 0.24-0.04 0.34-0.14l5.87-5.35c0.32-0.29 0.7-0.42 1.09-0.42 0.63 0 1.24 0.36 1.51 1.01l1.49 2.45c0.21 0.53 0.49 0.79 0.74 0.79 0.27 0 0.49-0.3 0.57-0.91l0.74-3.74c0.07-0.64 0.61-1.04 1.17-1.04 0.27 0 0.55 0.1 0.79 0.31l4.78 6.01c0.32 0.29 0.65 0.45 0.9 0.45 0.32 0 0.52-0.26 0.41-0.8l-1.79-6.77c-0.12-0.6 0.36-1.07 0.88-1.07 0.2 0 0.4 0.07 0.58 0.22l7.08 6.13c0.11 0.09 0.22 0.13 0.33 0.13 0.36 0 0.68-0.41 0.44-0.79l-6.15-9.95c-0.19-0.3-0.02-0.69 0.32-0.77l5.77-1.29c0.51-0.11 0.54-0.83 0.04-0.99l-4.92-1.58c-0.46-0.15-0.48-0.78-0.04-0.96l5.9-2.38c0.52-0.21 0.37-0.98-0.19-0.99l-6.51-0.05c-0.4 0-0.64-0.45-0.43-0.79l7.86-12.4c0.24-0.38-0.07-0.79-0.43-0.79-0.1 0-0.2 0.03-0.3 0.1l-9.7 7c-0.21 0.15-0.44 0.22-0.67 0.22-0.59 0-1.15-0.47-1.15-1.14l-0.04-4.24c0-0.31-0.26-0.51-0.52-0.51-0.15 0-0.3 0.07-0.41 0.21l-2.86 3.9c-0.35 0.47-0.86 0.7-1.38 0.7-0.65 0-1.3-0.37-1.59-1.06l-2.05-4.99c-0.12-0.2-0.32-0.3-0.51-0.3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 28.667,
        x2: 28.834,
        y1: 2.6887,
        y2: 14.022,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.3616
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8A04",
        offset: 0.454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF760F",
        offset: 0.5892
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5621",
        offset: 0.7507
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF2A39",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF1744",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "28.67 2.67 30.33 13.98 27.33 14.02",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 13.25,
        x2: 24.472,
        y1: 13.82,
        y2: 13.82,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.3616
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8A04",
        offset: 0.454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF760F",
        offset: 0.5892
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5621",
        offset: 0.7507
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF2A39",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF1744",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "13.25 9.88 24.47 15.23 22.86 17.77",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 13.52,
        x2: 23.02,
        y1: 25.321,
        y2: 22.654,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.3616
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8A04",
        offset: 0.454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF760F",
        offset: 0.5892
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5621",
        offset: 0.7507
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF2A39",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF1744",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "11.5 25.17 22.8 21.16 23.45 24.09",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 19.648,
        x2: 26.148,
        y1: 36.347,
        y2: 27.181,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.3616
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8A04",
        offset: 0.454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF760F",
        offset: 0.5892
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5621",
        offset: 0.7507
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF2A39",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF1744",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "27.34 28.09 19.68 36.56 24.87 26.39",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 29.578,
        x2: 34.903,
        y1: 38.598,
        y2: 31.088,
        gradientTransform: "matrix(.7057 -.7085 .7085 .7057 -15.834 31.389)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.3616
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8A04",
        offset: 0.454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF760F",
        offset: 0.5892
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5621",
        offset: 0.7507
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF2A39",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF1744",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "32.04 28.43 32.52 37.77 29.62 28.88",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 34.528,
        x2: 41.528,
        y1: 14.587,
        y2: 6.587,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF1744",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF2A39",
        offset: 0.0689
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5621",
        offset: 0.2493
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF760F",
        offset: 0.4108
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8A04",
        offset: 0.546
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 0.6384
      })
    ),
    _react2.default.createElement("polygon", {
      points: "33.04 14.01 41.67 6.5 35.29 15.99",
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 22.94,
      cy: 10.19,
      r: 0.94,
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 17.75,
      cy: 19.38,
      r: 1,
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 38,
      cy: 17.38,
      r: 1,
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 26.33,
      cy: 32.92,
      r: 0.57,
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 17.38,
      cy: 29.5,
      r: 1,
      fill: "#F44336"
    })
  );
}

exports.default = Bomb;
