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

function Coffee(props) {
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
        id: "g",
        cx: 63.138,
        cy: 96.922,
        r: 57.66,
        gradientTransform: "matrix(1.0146 0 0 .5359 -.0583 40.312)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3E3E3",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 92.25,
      rx: 59.44,
      ry: 31,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.49
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 63.125,
          x2: 63.125,
          y1: 76.604,
          y2: 106.51,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E2E2E2",
          offset: 0.2122
        }),
        _react2.default.createElement("stop", {
          stopColor: "#B8B8B8",
          offset: 0.5595
        }),
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0.8323
        }),
        _react2.default.createElement("stop", {
          stopColor: "#949494",
          offset: 0.9947
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m99.51 89.1c0 9.86-16.29 18.9-36.38 18.9s-36.38-9.05-36.38-18.9 16.29-17.85 36.38-17.85 36.38 7.99 36.38 17.85z",
        fill: "url(#f)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-263.11 142.06c-2.21-5.85-7.78-9.58-14.26-10.34 0.02-0.61 0.02-1.23-0.01-1.83-0.09-1.66-0.43-3.27-1.26-4.8-2.84-5.26-8.85-8.4-14.22-10.43-7.9-3-16.48-4.19-24.89-4.23h-0.42c-8.43 0-17.04 1.15-24.97 4.12-5.4 2.02-11.41 5.14-14.31 10.39-1.01 1.83-1.3 3.58-1.3 5.66 0 3.97 0.4 7.95 1.17 11.84 0.7 3.85 1.69 7.66 2.98 11.35 1.3 3.7 2.9 7.31 4.88 10.7 1.93 3.31 4.21 6.42 6.9 9.16 1.41 1.44 2.93 2.8 4.62 3.91 1.76 1.16 3.73 1.99 5.73 2.65 0.93 0.31 1.88 0.58 2.84 0.81 1.01 0.25 2.04 0.46 3.06 0.63 1.08 0.18 2.17 0.33 3.26 0.44 3.83 0.38 7.71 0.34 11.53-0.13 1.07-0.13 2.14-0.3 3.2-0.51 1.01-0.2 2.01-0.43 3-0.7 0.93-0.25 1.85-0.54 2.76-0.87 0.84-0.31 1.68-0.65 2.49-1.03 3.78-1.79 6.79-4.75 9.42-7.95 1.2-1.46 2.3-2.99 3.31-4.58 3.75 0.71 7.89 0.41 11.91-1.11 10.3-3.9 15.94-14.27 12.58-23.15zm-15.27 14.32c-1.32 0.5-3.26 0.89-4.55 0.86 1.03-2.48 1.92-5.02 2.66-7.61 0.78-2.72 1.4-5.49 1.88-8.28 2.4 0.65 5.42 1.88 6.28 4.16 1.56 4.09-1.5 9.06-6.27 10.87z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-318.18 113.42h0.41c8.89 0.04 16.91 1.4 23.84 4.03 6.57 2.49 10.7 5.46 12.65 9.06 0.53 0.98 0.82 2.11 0.9 3.55 0.02 0.44 0.03 0.92 0.01 1.58-0.04 1.55 1.11 2.88 2.65 3.06 5.65 0.67 10.07 3.82 11.81 8.42 2.77 7.32-2.1 15.97-10.85 19.28-2.25 0.85-4.58 1.28-6.92 1.28-1.14 0-2.28-0.11-3.38-0.31-0.19-0.04-0.37-0.05-0.56-0.05-1.01 0-1.97 0.51-2.53 1.38-1 1.56-2.04 3-3.1 4.29-2.96 3.59-5.54 5.8-8.39 7.15-0.69 0.33-1.44 0.64-2.23 0.93-0.8 0.29-1.65 0.56-2.52 0.8-0.89 0.24-1.83 0.46-2.78 0.65-0.97 0.19-1.98 0.35-2.99 0.47-1.98 0.24-3.99 0.36-5.99 0.36-1.63 0-3.27-0.08-4.88-0.24-1.03-0.1-2.06-0.24-3.05-0.41-0.97-0.17-1.93-0.36-2.85-0.59-0.9-0.22-1.78-0.47-2.61-0.75-2.09-0.69-3.68-1.42-5.02-2.3-1.32-0.87-2.63-1.98-4.13-3.51-2.38-2.42-4.54-5.3-6.45-8.57-1.79-3.08-3.35-6.5-4.64-10.18-1.21-3.47-2.18-7.13-2.87-10.94-0.74-3.77-1.11-7.56-1.11-11.26 0-1.83 0.26-3.01 0.93-4.21 1.99-3.61 6.16-6.57 12.74-9.03 6.95-2.61 15-3.94 23.91-3.94m35.41 46.81c1.6 0 3.8-0.42 5.46-1.05 2.97-1.12 5.47-3.2 7.03-5.86 1.68-2.86 2.04-6.09 0.99-8.88-1.04-2.76-3.84-4.78-8.3-5.99-0.26-0.07-0.52-0.11-0.79-0.11-0.57 0-1.13 0.16-1.61 0.47-0.71 0.45-1.2 1.19-1.34 2.02-0.47 2.72-1.08 5.4-1.81 7.97-0.7 2.44-1.55 4.89-2.54 7.28-0.38 0.91-0.28 1.96 0.26 2.79s1.45 1.34 2.44 1.36h0.21m-35.41-49.81c-8.43 0-17.04 1.15-24.97 4.12-5.4 2.02-11.41 5.14-14.31 10.39-1.01 1.83-1.3 3.58-1.3 5.66 0 3.97 0.4 7.95 1.17 11.84 0.7 3.85 1.69 7.66 2.98 11.35 1.3 3.7 2.9 7.31 4.88 10.7 1.93 3.31 4.21 6.42 6.9 9.16 1.41 1.44 2.93 2.8 4.62 3.91 1.76 1.16 3.73 1.99 5.73 2.65 0.93 0.31 1.88 0.58 2.84 0.81 1.01 0.25 2.04 0.46 3.06 0.63 1.08 0.18 2.17 0.33 3.26 0.44 1.72 0.17 3.45 0.26 5.18 0.26 2.12 0 4.25-0.13 6.35-0.39 1.07-0.13 2.14-0.3 3.2-0.51 1.01-0.2 2.01-0.43 3-0.7 0.93-0.25 1.85-0.54 2.76-0.87 0.84-0.31 1.68-0.65 2.49-1.03 3.78-1.79 6.79-4.75 9.42-7.95 1.2-1.46 2.3-2.99 3.31-4.58 1.27 0.24 2.59 0.37 3.93 0.37 2.61 0 5.32-0.47 7.98-1.48 10.32-3.9 15.96-14.27 12.6-23.15-2.21-5.85-7.78-9.58-14.26-10.34 0.02-0.61 0.02-1.23-0.01-1.83-0.09-1.66-0.43-3.27-1.26-4.8-2.84-5.26-8.85-8.4-14.22-10.43-7.9-3-16.48-4.19-24.89-4.23h-0.44zm35.41 46.81h-0.15c1.03-2.48 1.92-5.02 2.66-7.61 0.78-2.72 1.4-5.49 1.88-8.28 2.4 0.65 5.42 1.88 6.28 4.16 1.55 4.1-1.5 9.07-6.27 10.88-1.27 0.47-3.12 0.85-4.4 0.85z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-318.56 150.53 0.29 0.06 0.5-0.06c18.56-0.11 33.76-7.2 33.97-16.13 0-0.19 0.01-0.39 0.01-0.59 0-9.08-15.46-16.45-34.35-16.45-18.88 0-34.19 7.36-34.19 16.45 0 0.27 0.01 0.54 0.01 0.81 0.47 8.83 15.36 15.81 33.76 15.91z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m-318.56 150.53 0.29 0.06 0.5-0.06c16.69-0.09 30.65-5.84 33.45-13.49-2.83-7.73-16.96-13.6-33.82-13.6-16.88 0-30.89 5.88-33.68 13.62 2.79 7.64 16.58 13.38 33.26 13.47z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#EFEBE9"
      },
      _react2.default.createElement("path", {
        d:
          "m-326.8 94.4c4.02 3.9 9.76 7.91 10.56 13.17 0.79 5.22-1.41 10.35-3.45 13.68-0.23 0.38 0.23 0.8 0.56 0.51 3.34-3 8.17-7.89 8.45-14.35 0.27-6.2-4.33-10.82-9.2-15.27-2.36-2.16-4.78-4.28-6.74-6.51-1.71-1.96-3.02-4.1-3.7-6.41-0.99-3.38-0.58-7.24 1.83-9.79 0.95-1.11 2.14-1.92 3.33-2.52 0.4-0.2 0.18-0.83-0.25-0.73-2.26 0.52-4.78 1.33-6.53 2.63-4.21 3.13-4.5 7.18-4.04 11.1 0.71 5.61 4.72 10.15 9.18 14.49z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-331.68 106.33c2.45 3.54 1.62 7.78 0.43 10.56-0.17 0.4 0.32 0.74 0.61 0.43 2.6-2.74 6.3-7.54 4.49-12.29-1.7-4.44-3.23-5.88-8.48-9.93-4.75-3.66-7.93-5.66-9.44-9.37-1.63-3.94-1.53-7.89-0.39-10.69 0.16-0.4-0.31-0.75-0.6-0.44-2.43 2.52-4.88 6.6-4.15 11.66 0 0.02 0.01 0.04 0.01 0.05 1.83 8.51 12.55 12.84 17.52 20.02z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-301.39 104.58c2.74 3.96 0.12 10.21-1.67 13.36-0.2 0.35 0.18 0.74 0.52 0.53 2.88-1.8 7.96-5.09 7.96-11.94 0-4.1-3.09-7.57-8.4-12.31-3.13-2.84-5.12-5.75-6.62-9.46-1.59-3.85-1.57-7.13-0.53-9.66 0.16-0.4-0.31-0.75-0.6-0.44-2.41 2.52-4.81 6.57-4.08 11.59 0 0.02 0.01 0.03 0.01 0.05 1.82 8.51 8.44 11.1 13.41 18.28z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-324.96 68.11m-7.15 3.5c-0.88 2.45-0.95 5.32-0.13 8.15 0.72 2.46 2.1 4.87 4.11 7.17 1.74 1.98 3.81 3.87 5.82 5.69l1.08 0.98c4.82 4.41 8.79 8.48 8.56 13.71-0.09 2.09-0.73 4-1.69 5.75 0.32-1.84 0.41-3.8 0.11-5.81-0.75-4.9-4.92-8.65-8.61-11.96-0.9-0.81-1.75-1.58-2.54-2.34-4.73-4.59-7.99-8.61-8.59-13.3-0.38-3.17-0.17-5.82 1.88-8.04m6.79-5.46c-0.03 0-0.06 0-0.09 0.01-2.26 0.52-4.78 1.33-6.53 2.63-4.21 3.13-4.5 7.18-4.04 11.1 0.71 5.62 4.72 10.17 9.18 14.5 4.02 3.9 9.76 7.91 10.56 13.17 0.79 5.22-1.41 10.35-3.45 13.68-0.18 0.29 0.05 0.6 0.32 0.6 0.08 0 0.16-0.03 0.24-0.1 3.34-3 8.17-7.89 8.45-14.35 0.27-6.2-4.33-10.82-9.2-15.27-2.36-2.16-4.78-4.28-6.74-6.51-1.71-1.96-3.02-4.1-3.7-6.41-0.99-3.38-0.58-7.24 1.83-9.79 0.95-1.11 2.14-1.92 3.33-2.52 0.37-0.18 0.21-0.74-0.16-0.74z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-343.62 75.98m-3.48 6.24c0.22 1.44 0.61 2.88 1.18 4.26 1.5 3.72 4.32 5.85 8.22 8.8 0.59 0.44 1.2 0.91 1.85 1.41 5.18 3.99 6.32 5.12 7.83 9.06 0.55 1.44 0.39 2.96-0.16 4.45-0.18-1.64-0.72-3.36-1.85-5-2.13-3.08-5.16-5.61-8.09-8.05-4.18-3.49-8.13-6.78-9.11-11.22-0.2-1.34-0.12-2.58 0.13-3.71m2.29-7.74c-0.09 0-0.18 0.03-0.26 0.12-2.43 2.52-4.88 6.6-4.15 11.66 0 0.02 0.01 0.04 0.01 0.05 1.84 8.51 12.56 12.85 17.53 20.03 2.45 3.54 1.62 7.78 0.43 10.56-0.12 0.29 0.1 0.55 0.35 0.55 0.09 0 0.18-0.04 0.26-0.12 2.6-2.74 6.3-7.54 4.49-12.29-1.7-4.44-3.23-5.88-8.48-9.93-4.75-3.66-7.93-5.66-9.44-9.37-1.63-3.94-1.53-7.89-0.39-10.69 0.12-0.3-0.1-0.57-0.35-0.57z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-309.28 76.05m-3.32 5.71c0.22 1.16 0.58 2.41 1.14 3.75 1.64 4.07 3.84 7.21 7.14 10.2 5.01 4.48 7.73 7.53 7.73 10.82 0 2.69-0.9 4.71-2.22 6.32 0.81-3.04 1.01-6.59-0.95-9.41-1.94-2.8-4.05-4.88-6.09-6.89-3.2-3.15-5.97-5.87-7-10.63-0.21-1.51-0.07-2.91 0.25-4.16m2.13-7.21c-0.09 0-0.18 0.04-0.26 0.12-2.41 2.52-4.81 6.57-4.08 11.59 0 0.02 0.01 0.03 0.01 0.05 1.83 8.51 8.45 11.1 13.41 18.28 2.74 3.96 0.12 10.21-1.67 13.36-0.16 0.28 0.06 0.59 0.32 0.59 0.06 0 0.13-0.02 0.19-0.06 2.88-1.8 7.96-5.09 7.96-11.94 0-4.1-3.09-7.57-8.4-12.31-3.13-2.84-5.12-5.75-6.62-9.46-1.59-3.85-1.57-7.13-0.53-9.66 0.13-0.29-0.09-0.56-0.33-0.56z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-187.52 232.56c-3.34-10.25-14.37-16.13-26.11-14.69-3.52-5.2-9.46-9.64-14.93-11.72-9.01-3.42-19.12-4.77-28.25-4.82-9.13 0.05-19.17 1.4-28.17 4.82-6.13 2.33-12.77 7.62-16.01 13.62-0.94 1.75-1.32 5.47-1.43 7.36-0.11 1.91 0.06 3.87 0.21 5.81 0.44 5.66 1.52 11.26 3.07 16.71 1.26 4.42 2.88 8.75 4.91 12.88 1.99 4.05 4.39 7.92 7.26 11.41 3.01 3.65 6.43 7.03 10.74 9.07 0.93 0.44 1.86 0.83 2.83 1.18 1.04 0.38 2.06 0.71 3.12 1 1.13 0.31 2.22 0.57 3.37 0.8 1.21 0.24 2.32 0.43 3.55 0.58 2.25 0.27 4.28 0.42 6.56 0.43 2.28-0.02 4.39-0.16 6.64-0.43 1.22-0.15 2.38-0.34 3.59-0.58 1.15-0.22 2.26-0.49 3.39-0.8 1.06-0.29 2.1-0.62 3.13-1 0.96-0.35 1.9-0.74 2.83-1.18 4.32-2.05 7.74-5.42 10.75-9.07 2.75-3.34 5.04-7.02 6.98-10.88 4.5 0.86 9.42 0.61 14.27-0.97 13.64-4.44 21.57-17.66 17.7-29.53zm-21.01 19.38c-2.26 0.73-4.54 0.93-6.68 0.65 0.32-0.98 0.62-1.95 0.9-2.94 1.56-5.45 2.64-11.06 3.07-16.71 0.11-1.48 0.24-2.98 0.24-4.45 5.42 0.04 10.24 3.03 11.81 7.86 2.05 6.27-2.14 13.25-9.34 15.59z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-256.81 204.32c6.95 0.04 17.3 0.87 27.19 4.63 5.18 1.97 10.48 6.13 13.51 10.59 0.56 0.83 1.5 1.32 2.48 1.32 0.12 0 0.24-0.01 0.37-0.02 1.04-0.13 2.1-0.19 3.14-0.19 9.32 0 17.25 5.16 19.75 12.84 1.6 4.9 0.88 10.26-2.01 15.08-2.97 4.96-7.87 8.75-13.78 10.67-2.67 0.87-5.41 1.31-8.15 1.31-1.56 0-3.12-0.15-4.63-0.43-0.19-0.04-0.38-0.05-0.56-0.05-1.12 0-2.16 0.63-2.68 1.65-1.95 3.88-4.18 7.35-6.62 10.32-3.42 4.15-6.41 6.7-9.72 8.27-0.82 0.39-1.69 0.75-2.57 1.07-0.97 0.35-1.92 0.65-2.9 0.92-1.1 0.3-2.13 0.54-3.17 0.75-1.23 0.24-2.3 0.41-3.38 0.55-2.16 0.26-4.16 0.39-6.25 0.41-2.1-0.02-4.02-0.14-6.21-0.41-1.03-0.13-2.03-0.29-3.34-0.55-1-0.19-2-0.43-3.15-0.75-0.95-0.26-1.9-0.56-2.89-0.92-0.88-0.32-1.72-0.67-2.57-1.07-3.3-1.56-6.29-4.11-9.71-8.27-2.57-3.12-4.89-6.77-6.89-10.83-1.87-3.8-3.46-7.97-4.72-12.38-1.57-5.49-2.56-10.91-2.97-16.12l-0.03-0.37c-0.14-1.78-0.27-3.45-0.18-5.04 0.15-2.66 0.61-5.23 1.08-6.11 2.7-5.01 8.64-10.04 14.44-12.24 9.9-3.76 20.21-4.59 27.12-4.63m43.48 51.39c1.93 0 3.86-0.31 5.73-0.92 4.17-1.36 7.65-4.07 9.79-7.63 2.22-3.7 2.75-7.87 1.49-11.74-1.91-5.88-7.8-9.88-14.64-9.93h-0.02c-0.79 0-1.55 0.31-2.11 0.87-0.57 0.56-0.89 1.33-0.89 2.12 0 1.26-0.1 2.55-0.21 3.92l-0.02 0.31c-0.4 5.21-1.4 10.63-2.97 16.12-0.24 0.85-0.53 1.77-0.87 2.83-0.28 0.85-0.16 1.78 0.32 2.53s1.27 1.26 2.15 1.37c0.73 0.1 1.49 0.15 2.25 0.15m-43.48-54.39c-9.13 0.05-19.17 1.4-28.17 4.82-6.13 2.33-12.77 7.62-16.01 13.62-0.94 1.75-1.32 5.47-1.43 7.36-0.11 1.91 0.06 3.87 0.21 5.81 0.44 5.66 1.52 11.26 3.07 16.71 1.26 4.42 2.88 8.75 4.91 12.88 1.99 4.05 4.39 7.92 7.26 11.41 3.01 3.65 6.43 7.03 10.74 9.07 0.93 0.44 1.86 0.83 2.83 1.18 1.04 0.38 2.06 0.71 3.12 1 1.13 0.31 2.22 0.57 3.37 0.8 1.21 0.24 2.32 0.43 3.55 0.58 2.25 0.27 4.28 0.42 6.56 0.43 2.28-0.02 4.39-0.16 6.64-0.43 1.22-0.15 2.38-0.34 3.59-0.58 1.15-0.22 2.26-0.49 3.39-0.8 1.06-0.29 2.1-0.62 3.13-1 0.96-0.35 1.9-0.74 2.83-1.18 4.32-2.05 7.74-5.42 10.75-9.07 2.75-3.34 5.04-7.02 6.98-10.88 1.68 0.32 3.42 0.49 5.19 0.49 2.97 0 6.04-0.47 9.08-1.46 13.65-4.44 21.58-17.66 17.72-29.53-3-9.22-12.24-14.91-22.6-14.91-1.16 0-2.33 0.07-3.51 0.22-3.52-5.2-9.46-9.64-14.93-11.72-9.02-3.41-19.14-4.77-28.27-4.82zm43.48 51.39c-0.64 0-1.26-0.04-1.88-0.12 0.32-0.98 0.62-1.95 0.9-2.94 1.56-5.45 2.64-11.06 3.07-16.71 0.11-1.48 0.24-2.98 0.24-4.45 5.42 0.04 10.24 3.03 11.81 7.86 2.04 6.27-2.15 13.25-9.35 15.59-1.6 0.53-3.22 0.77-4.79 0.77z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-257.27 245.27 0.32 0.06 0.54-0.06c20.2-0.11 36.73-7.83 36.96-17.55 0-0.21 0.01-0.43 0.01-0.64 0-9.89-16.83-17.9-37.37-17.9-20.55 0-37.2 8.01-37.2 17.9 0 0.29 0.01 0.59 0.01 0.89 0.5 9.6 16.7 17.19 36.73 17.3z",
      fill: "#CFD8DC"
    }),
    _react2.default.createElement("path", {
      d:
        "m-257.27 245.27 0.32 0.06 0.54-0.06c18.16-0.1 33.35-6.35 36.4-14.68-3.08-8.41-18.45-14.8-36.8-14.8-18.36 0-33.61 6.4-36.64 14.82 3.03 8.32 18.03 14.56 36.18 14.66z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement("path", {
      d:
        "m-262.85 168.96m-7.32 3.14c-1.45 2.97-1.72 6.7-0.66 10.36 0.81 2.77 2.37 5.48 4.64 8.07 1.97 2.25 4.33 4.39 6.62 6.47 0.41 0.37 0.82 0.75 1.23 1.12 5.55 5.08 10.12 9.77 9.86 15.87-0.13 3.02-1.26 5.73-2.83 8.14 0.62-2.52 0.9-5.31 0.46-8.17-0.84-5.49-5.56-9.74-9.73-13.48-1.03-0.93-2.01-1.8-2.91-2.68-5.44-5.28-9.2-9.91-9.88-15.35-0.43-3.62-0.32-7.37 3.2-10.35m6.97-5.1c-0.03 0-0.07 0-0.1 0.01-2.58 0.59-5.45 1.51-7.46 3-4.81 3.57-5.14 8.19-4.61 12.67 0.81 6.42 5.39 11.6 10.48 16.55 4.59 4.45 11.14 9.03 12.06 15.03 0.91 5.96-1.61 11.81-3.94 15.61-0.2 0.33 0.06 0.69 0.36 0.69 0.09 0 0.19-0.03 0.28-0.11 3.81-3.43 9.33-9 9.65-16.37 0.31-7.07-4.94-12.35-10.5-17.43-2.69-2.46-5.45-4.88-7.69-7.43-1.95-2.23-3.45-4.68-4.22-7.32-1.12-3.86-0.67-8.26 2.08-11.17 1.09-1.26 2.44-2.19 3.81-2.87 0.41-0.22 0.23-0.86-0.2-0.86z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 64.25c15.4 0 29.84 3.1 40.64 8.74 10.19 5.31 15.8 12.15 15.8 19.26s-5.61 13.95-15.8 19.26c-10.81 5.64-25.24 8.74-40.64 8.74s-29.84-3.1-40.64-8.74c-10.19-5.31-15.8-12.15-15.8-19.26s5.61-13.95 15.8-19.26c10.8-5.64 25.24-8.74 40.64-8.74m0-3c-32.83 0-59.44 13.88-59.44 31s26.61 31 59.44 31 59.44-13.88 59.44-31-26.61-31-59.44-31z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-284.29 178.02m-3.65 5.84c0.16 2.09 0.66 4.21 1.49 6.23 1.68 4.17 4.87 6.58 9.29 9.92 0.67 0.51 1.38 1.04 2.11 1.61 5.87 4.53 7.3 5.93 9.03 10.47 0.73 1.91 0.51 4.05-0.65 6.41-0.05-2.18-0.61-4.55-2.15-6.78-2.41-3.48-5.85-6.35-9.19-9.13-4.82-4.02-9.37-7.81-10.5-12.97-0.29-2.15-0.01-4.08 0.57-5.76m2.5-7.36c-0.1 0-0.2 0.04-0.29 0.13-2.78 2.88-5.57 7.53-4.74 13.3 0 0.02 0.01 0.04 0.01 0.06 2.1 9.72 14.33 14.67 20 22.86 2.79 4.04 1.84 8.89 0.49 12.05-0.14 0.33 0.12 0.63 0.4 0.63 0.1 0 0.21-0.04 0.3-0.14 2.97-3.12 7.19-8.6 5.12-14.03-1.94-5.07-3.69-6.72-9.68-11.34-5.42-4.17-9.06-6.46-10.77-10.7-1.86-4.5-1.74-9-0.45-12.2 0.14-0.31-0.11-0.62-0.39-0.62z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 62.548,
        cy: 66.739,
        r: 42.384,
        gradientTransform: "matrix(1 0 0 .9815 0 .6327)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.00509
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBFBFB",
        offset: 0.2759
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.5646
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D9D9D9",
        offset: 0.8606
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ccc",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.95 56.17c-3.52-0.78-9.05-0.45-13.25 1.19 0.13-4.64-0.22-7.71-0.22-7.71l-37.97-0.05-37.85 0.03s-5.52 50.76 37.85 50.76c14.81 0 23.94-5.83 29.54-13.54 21.36-3.75 27.61-13.17 29.06-19.55 1.47-6.49-2.97-10.2-7.16-11.13zm0.5 12.08c-0.55 1.08-5.74 8.17-15.87 9.02 0 0 3.61-15.5 11.16-15.65 7.54-0.15 5.26 5.55 4.71 6.63z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 62.637,
        x2: 62.637,
        y1: 28.365,
        y2: 53.127,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.00509
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBFBFB",
        offset: 0.2759
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.5646
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D9D9D9",
        offset: 0.8606
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ccc",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.73 51.75c0 9.71-17.1 17.59-38.2 17.59s-37.99-7.91-37.99-17.63 16.89-17.55 37.99-17.55 38.2 7.87 38.2 17.59z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.48 37.64c20.6 0 33.4 6.53 35.07 12.72 0.08 0.49 0.16 1.14 0.16 1.35 0 0.27-0.06 3.4-0.11 5.31-0.03 1.01 0.45 1.96 1.28 2.54 0.51 0.36 1.12 0.55 1.73 0.55 0.37 0 0.74-0.07 1.1-0.21 2.25-0.88 5.16-1.39 7.98-1.39 1.32 0 2.53 0.11 3.51 0.33 1.8 0.4 3.39 1.45 4.26 2.82 0.83 1.3 1.03 2.91 0.61 4.78-1.11 4.93-6.04 13.74-26.61 17.38-0.77 0.14-1.46 0.57-1.91 1.2-5.94 8.23-15.04 12.4-27.06 12.4-10.31 0-18.48-3.04-24.28-9.05-10.39-10.72-10.95-28.29-10.71-35.35v-0.16c-0.03-1.42 0.08-2.38 0.11-2.68 1.96-7.16 16.89-12.54 34.87-12.54m0-3c-19.53 0-35.56 5.89-37.81 14.95 0 0-0.21 1.25-0.17 3.33-0.37 10.76 0.88 47.52 37.96 47.52 14.79 0 23.91-5.89 29.5-13.65 21.33-3.77 27.58-13.26 29.02-19.68 1.46-6.51-2.96-10.26-7.15-11.19-1.2-0.27-2.63-0.4-4.16-0.4-2.97 0-6.31 0.51-9.07 1.6 0.05-1.86 0.11-5.09 0.11-5.39 0-0.65-0.22-1.97-0.22-1.97-2.24-9.06-18.48-15.12-38.01-15.12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m99.92 51.75c0 9.41-16.96 16.31-37.39 16.31s-37.57-6.9-37.57-16.31 17.14-17.04 37.57-17.04 37.39 7.63 37.39 17.04z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 62.53,
        x2: 62.53,
        y1: 46.75,
        y2: 74.84,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7B402B",
        offset: 0.00022998
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6F3A28",
        offset: 0.0942
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F241A",
        offset: 0.5043
      }),
      _react2.default.createElement("stop", {
        stopColor: "#211611",
        offset: 0.8176
      }),
      _react2.default.createElement("stop", {
        stopColor: "#16110E",
        offset: 0.9949
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 62.53,
      cy: 60.9,
      rx: 32.72,
      ry: 15.07,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.9 44.44c-1.02 3.4 2.24 7.19 4.22 8.99 0.22 0.2 0.04 0.56-0.24 0.49-2.43-0.61-6.75-1.75-8.31-6.56-0.94-2.88 0.44-6.02 3.08-10.55 1.55-2.7 2.28-5.2 2.49-8.14 0.24-3.06-0.53-5.36-1.83-6.89-0.21-0.24 0.04-0.6 0.32-0.45 2.27 1.22 4.87 3.51 5.51 7.19 0 0.01 0 0.02 0.01 0.04 0.65 6.38-3.41 9.71-5.25 15.88z",
      fill: "#D7CCC8",
      opacity: 0.58
    }),
    _react2.default.createElement("path", {
      d:
        "m66.09 43.1c-2.44 5.07 1.71 11.79 4.35 15.1 0.29 0.37-0.08 0.89-0.5 0.71-3.65-1.55-10.11-4.42-11.35-12.32-0.74-4.73 2.19-9.29 7.45-15.72 3.1-3.84 4.87-7.56 5.92-12.11 1.14-4.72 0.52-8.51-1.14-11.23-0.26-0.43 0.22-0.92 0.61-0.62 3.24 2.48 6.74 6.71 6.81 12.62v0.06c-0.56 10.14-7.72 14.33-12.15 23.51z",
      fill: "#D7CCC8",
      opacity: 0.58
    }),
    _react2.default.createElement("path", {
      d:
        "m64.05 117.17c-21.24 0-41.55-3.67-50.12-12.45 7.76 9.03 27.27 15.45 50.12 15.45s42.36-6.41 50.12-15.45c-11.5 8.45-28.88 12.45-50.12 12.45z",
      fill: "#fff"
    })
  );
}

exports.default = Coffee;