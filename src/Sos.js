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

function Sos(props) {
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
        id: "a",
        x1: 64,
        x2: 64,
        y1: 5,
        y2: 128.72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0403E",
        offset: 0.5777
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#424242"
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
          "m27.46 34c2.82 0 5.33 0.75 7.54 2.25s3.94 3.63 5.2 6.4c0.66 1.45 1.15 2.98 1.46 4.59 0.45 2.31-0.73 4.61-2.4 4.61h-1.99c-1.13 0-2.14-1.08-2.4-2.67-0.29-1.78-0.88-3.26-1.79-4.43-1.33-1.71-3.22-2.57-5.69-2.57-2.3 0-4.09 0.71-5.36 2.12s-1.91 3.38-1.91 5.91c0 2.13 0.69 3.91 2.06 5.33s3.64 2.81 6.79 4.16c3.15 1.34 5.69 2.88 7.6 4.6 1.91 1.73 3.31 3.7 4.2 5.94 0.89 2.23 1.34 4.85 1.34 7.84 0 4.87-1.29 8.74-3.88 11.61-2.58 2.87-6.09 4.31-10.52 4.31-2.93 0-5.63-0.78-8.08-2.35-2.46-1.56-4.37-3.72-5.73-6.48-0.8-1.61-1.36-3.38-1.69-5.3-0.38-2.21 0.86-4.33 2.44-4.33h2.04c1.15 0 2.16 1.14 2.41 2.76 0.32 2.02 1.01 3.67 2.08 4.94 1.52 1.82 3.7 2.73 6.54 2.73 2.45 0 4.29-0.71 5.52-2.15 1.23-1.43 1.85-3.32 1.85-5.67 0-2.57-0.63-4.55-1.88-5.94s-3.51-2.79-6.78-4.21-5.86-3-7.79-4.73c-3.69-3.34-5.54-7.7-5.54-13.08 0-4.71 1.33-8.58 3.99-11.63 2.66-3.04 6.12-4.56 10.37-4.56m0-3c-5.13 0-9.38 1.88-12.63 5.6-3.14 3.6-4.73 8.17-4.73 13.6 0 6.23 2.2 11.38 6.52 15.3 2.17 1.95 5.06 3.72 8.61 5.26s5.08 2.74 5.74 3.47c0.73 0.81 1.11 2.14 1.11 3.93 0 1.62-0.37 2.84-1.12 3.71-0.24 0.27-0.95 1.11-3.25 1.11-2.56 0-3.65-0.94-4.24-1.65-0.71-0.85-1.19-2.02-1.42-3.49-0.49-3.11-2.7-5.29-5.37-5.29h-2.04c-1.48 0-2.87 0.68-3.9 1.9-1.31 1.55-1.87 3.77-1.5 5.94 0.38 2.2 1.04 4.26 1.96 6.12 1.6 3.24 3.89 5.82 6.81 7.68 2.94 1.87 6.2 2.82 9.69 2.82 5.3 0 9.6-1.79 12.76-5.31 3.09-3.43 4.65-8.01 4.65-13.62 0-3.36-0.52-6.37-1.55-8.95-1.06-2.65-2.73-5.02-4.98-7.05-2.15-1.94-4.99-3.67-8.43-5.14-3.45-1.47-5.06-2.7-5.81-3.48-0.83-0.86-1.22-1.9-1.22-3.25 0-1.75 0.38-3.07 1.14-3.9 0.43-0.48 1.23-1.12 3.13-1.12 1.98 0 2.81 0.75 3.32 1.4 0.59 0.76 1 1.8 1.2 3.07 0.49 3.06 2.69 5.19 5.36 5.19h1.99c1.5 0 2.89-0.68 3.91-1.93 1.32-1.6 1.87-4 1.43-6.26-0.36-1.84-0.92-3.61-1.68-5.26-1.49-3.26-3.59-5.83-6.25-7.64-2.69-1.83-5.79-2.76-9.21-2.76z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.83 34c3.3 0 6.23 1.14 8.78 3.43s4.52 5.58 5.91 9.87 2.1 9.28 2.12 14.98v3.25c0 5.72-0.69 10.74-2.06 15.06s-3.33 7.63-5.89 9.95c-2.55 2.3-5.48 3.46-8.8 3.46-3.28 0-6.21-1.16-8.78-3.47s-4.56-5.61-5.96-9.89-2.11-9.21-2.13-14.8v-3.29c0-5.7 0.7-10.72 2.1-15.08s3.38-7.69 5.93-10.01c2.55-2.3 5.48-3.46 8.78-3.46m0.06 51.66c3.12 0 5.51-1.71 7.19-5.13s2.52-8.42 2.52-15v-3.05c0-6.47-0.85-11.43-2.55-14.88s-4.11-5.17-7.22-5.17c-3.04 0-5.42 1.72-7.14 5.15-1.72 3.44-2.59 8.3-2.63 14.58v3.37c0 6.42 0.87 11.38 2.6 14.88 1.74 3.5 4.15 5.25 7.23 5.25m-0.06-54.66c-4.05 0-7.69 1.43-10.79 4.25-2.93 2.66-5.21 6.47-6.77 11.31-1.49 4.63-2.25 10.02-2.25 16v3.29c0.02 5.89 0.79 11.18 2.28 15.73 1.56 4.76 3.85 8.53 6.8 11.18 3.12 2.81 6.75 4.24 10.79 4.24 4.07 0 7.72-1.43 10.82-4.25 2.93-2.66 5.2-6.45 6.73-11.26 1.46-4.59 2.2-9.97 2.2-15.97v-3.25c-0.02-5.99-0.78-11.34-2.26-15.91-1.55-4.78-3.83-8.54-6.77-11.17-3.1-2.78-6.73-4.19-10.78-4.19zm0.06 51.66c-1.28 0-2.96-0.41-4.53-3.59-1.52-3.07-2.29-7.63-2.29-13.55v-3.37c0.03-5.77 0.81-10.23 2.31-13.24 1.55-3.1 3.19-3.49 4.45-3.49 1.31 0 3 0.4 4.53 3.5 1.48 3.02 2.24 7.58 2.24 13.55v3.05c0 6.08-0.74 10.69-2.21 13.68-1.51 3.06-3.2 3.46-4.5 3.46z"
      }),
      _react2.default.createElement("path", {
        d:
          "m101.2 34c2.82 0 5.33 0.75 7.54 2.25s3.94 3.63 5.2 6.4c0.66 1.45 1.15 2.98 1.46 4.59 0.45 2.31-0.73 4.61-2.4 4.61h-1.99c-1.13 0-2.14-1.08-2.4-2.67-0.29-1.78-0.88-3.26-1.79-4.43-1.33-1.71-3.22-2.57-5.69-2.57-2.3 0-4.09 0.71-5.36 2.12s-1.91 3.38-1.91 5.91c0 2.13 0.69 3.91 2.06 5.33s3.64 2.81 6.79 4.16c3.15 1.34 5.69 2.88 7.6 4.6 1.91 1.73 3.31 3.7 4.2 5.94 0.89 2.23 1.34 4.85 1.34 7.84 0 4.87-1.29 8.74-3.88 11.61-2.59 2.88-6.1 4.31-10.53 4.31-2.93 0-5.63-0.78-8.08-2.35-2.46-1.56-4.37-3.72-5.73-6.48-0.8-1.61-1.36-3.38-1.69-5.3-0.38-2.21 0.86-4.33 2.44-4.33h2.04c1.15 0 2.16 1.14 2.41 2.76 0.32 2.02 1.01 3.66 2.08 4.94 1.52 1.82 3.7 2.73 6.54 2.73 2.45 0 4.29-0.71 5.52-2.15 1.23-1.43 1.85-3.32 1.85-5.67 0-2.57-0.63-4.55-1.88-5.94s-3.51-2.79-6.78-4.21-5.86-3-7.79-4.73c-3.69-3.34-5.54-7.7-5.54-13.08 0-4.71 1.33-8.58 3.99-11.63 2.68-3.04 6.13-4.56 10.38-4.56m0-3c-5.13 0-9.38 1.88-12.63 5.6-3.14 3.6-4.73 8.17-4.73 13.6 0 6.23 2.2 11.38 6.52 15.3 2.17 1.95 5.06 3.72 8.61 5.26s5.08 2.74 5.74 3.47c0.73 0.81 1.11 2.14 1.11 3.93 0 1.63-0.37 2.84-1.12 3.71-0.24 0.27-0.95 1.11-3.25 1.11-2.56 0-3.65-0.94-4.24-1.65-0.71-0.85-1.19-2.02-1.42-3.48-0.49-3.12-2.7-5.29-5.38-5.29h-2.04c-1.48 0-2.87 0.68-3.9 1.9-1.31 1.55-1.87 3.77-1.49 5.94 0.38 2.2 1.04 4.26 1.96 6.12 1.6 3.24 3.89 5.82 6.81 7.68 2.94 1.87 6.2 2.82 9.7 2.82 5.3 0 9.6-1.79 12.76-5.31 3.09-3.43 4.65-8.01 4.65-13.62 0-3.36-0.52-6.37-1.55-8.95-1.06-2.65-2.73-5.02-4.98-7.05-2.15-1.94-4.99-3.67-8.43-5.14-3.45-1.47-5.06-2.7-5.8-3.48-0.83-0.86-1.22-1.9-1.22-3.25 0-1.75 0.38-3.07 1.14-3.9 0.43-0.48 1.23-1.12 3.13-1.12 1.98 0 2.81 0.75 3.32 1.4 0.59 0.76 1 1.8 1.2 3.07 0.49 3.06 2.69 5.19 5.36 5.19h1.99c1.5 0 2.89-0.68 3.91-1.93 1.32-1.6 1.87-4 1.43-6.26-0.36-1.84-0.92-3.61-1.68-5.26-1.49-3.26-3.59-5.83-6.25-7.64-2.71-1.84-5.81-2.77-9.23-2.77z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m35.08 78.16c0-2.57-0.63-4.55-1.88-5.94s-3.51-2.79-6.78-4.21-5.86-3-7.79-4.73c-3.69-3.34-5.54-7.7-5.54-13.08 0-4.71 1.33-8.58 3.99-11.63 2.67-3.05 6.13-4.57 10.38-4.57 2.82 0 5.33 0.75 7.54 2.25s3.94 3.63 5.2 6.4c0.66 1.45 1.15 2.98 1.46 4.59 0.45 2.31-0.73 4.61-2.4 4.61h-1.99c-1.13 0-2.14-1.08-2.4-2.67-0.29-1.78-0.88-3.26-1.79-4.43-1.33-1.71-3.22-2.57-5.69-2.57-2.3 0-4.09 0.71-5.36 2.12s-1.91 3.38-1.91 5.91c0 2.13 0.69 3.91 2.06 5.33s3.64 2.81 6.79 4.16c3.15 1.34 5.69 2.88 7.6 4.6 1.91 1.73 3.31 3.7 4.2 5.94 0.89 2.23 1.34 4.85 1.34 7.84 0 4.87-1.29 8.74-3.88 11.61-2.58 2.87-6.09 4.31-10.52 4.31-2.93 0-5.63-0.78-8.08-2.35-2.46-1.56-4.37-3.72-5.73-6.48-0.8-1.61-1.36-3.38-1.69-5.3-0.38-2.21 0.86-4.33 2.44-4.33h2.04c1.15 0 2.16 1.14 2.41 2.76 0.32 2.02 1.01 3.67 2.08 4.94 1.52 1.82 3.7 2.73 6.54 2.73 2.45 0 4.29-0.71 5.52-2.15 1.23-1.42 1.84-3.31 1.84-5.66z"
      }),
      _react2.default.createElement("path", {
        d:
          "m80.64 65.52c0 5.72-0.69 10.74-2.06 15.06s-3.33 7.63-5.89 9.95c-2.55 2.31-5.48 3.47-8.8 3.47-3.28 0-6.21-1.16-8.78-3.47s-4.56-5.61-5.96-9.89-2.11-9.21-2.13-14.8v-3.29c0-5.7 0.7-10.72 2.1-15.08s3.38-7.69 5.93-10.01c2.55-2.3 5.48-3.46 8.78-3.46s6.23 1.14 8.78 3.43 4.52 5.58 5.91 9.87 2.1 9.28 2.12 14.98v3.24zm-7.04-3.04c0-6.47-0.85-11.43-2.55-14.88s-4.11-5.17-7.22-5.17c-3.04 0-5.42 1.72-7.14 5.15-1.72 3.44-2.59 8.3-2.63 14.58v3.37c0 6.42 0.87 11.38 2.6 14.88s4.14 5.25 7.22 5.25c3.12 0 5.51-1.71 7.19-5.13s2.52-8.42 2.52-15v-3.05z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.83 78.16c0-2.57-0.63-4.55-1.88-5.94s-3.51-2.79-6.78-4.21-5.86-3-7.79-4.73c-3.69-3.34-5.54-7.7-5.54-13.08 0-4.71 1.33-8.58 3.99-11.63 2.67-3.05 6.12-4.57 10.37-4.57 2.82 0 5.33 0.75 7.54 2.25s3.94 3.63 5.2 6.4c0.66 1.45 1.15 2.98 1.46 4.59 0.45 2.31-0.73 4.61-2.4 4.61h-1.99c-1.13 0-2.14-1.08-2.4-2.67-0.29-1.78-0.88-3.26-1.79-4.43-1.33-1.71-3.22-2.57-5.69-2.57-2.3 0-4.09 0.71-5.36 2.12s-1.91 3.38-1.91 5.91c0 2.13 0.69 3.91 2.06 5.33s3.64 2.81 6.79 4.16c3.15 1.34 5.69 2.88 7.6 4.6 1.91 1.73 3.31 3.7 4.2 5.94 0.89 2.23 1.34 4.85 1.34 7.84 0 4.87-1.29 8.74-3.88 11.61-2.59 2.88-6.1 4.31-10.53 4.31-2.93 0-5.63-0.78-8.08-2.35-2.46-1.56-4.37-3.72-5.73-6.48-0.8-1.61-1.36-3.38-1.69-5.3-0.38-2.21 0.86-4.33 2.44-4.33h2.04c1.15 0 2.16 1.14 2.41 2.76 0.32 2.02 1.01 3.66 2.08 4.94 1.52 1.82 3.7 2.73 6.54 2.73 2.45 0 4.29-0.71 5.52-2.15 1.24-1.42 1.86-3.31 1.86-5.66z"
      })
    )
  );
}

exports.default = Sos;
