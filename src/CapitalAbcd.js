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

function CapitalAbcd(props) {
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
        y1: 0.6667,
        y2: 128.4,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#169FE4",
        offset: 0.5369
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0.9954
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
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m42.8 23.64c0.83 0 1.58 0.52 1.88 1.3l10.59 27.99c0.5 1.31-0.47 2.71-1.88 2.71h-1.48c-0.85 0-1.61-0.54-1.89-1.34l-1.67-4.77c-0.28-0.8-1.04-1.34-1.89-1.34h-9.56c-0.85 0-1.61 0.54-1.89 1.35l-1.66 4.76c-0.28 0.81-1.04 1.35-1.89 1.35h-1.45c-1.4 0-2.37-1.4-1.88-2.71l10.57-28c0.29-0.78 1.04-1.3 1.88-1.3h2.22m-2.94 20.07h3.63c1.38 0 2.35-1.36 1.89-2.67l-1.81-5.19c-0.31-0.9-1.1-1.34-1.89-1.34s-1.58 0.45-1.89 1.34l-1.81 5.19c-0.46 1.3 0.5 2.67 1.88 2.67m2.94-23.07h-2.22c-2.07 0-3.95 1.3-4.68 3.24l-10.58 27.99c-0.58 1.54-0.37 3.26 0.56 4.61s2.47 2.16 4.12 2.16h1.45c2.13 0 4.03-1.35 4.73-3.36l1.42-4.09h8.14l1.44 4.1c0.7 2 2.6 3.35 4.72 3.35h1.48c1.64 0 3.18-0.81 4.12-2.16s1.14-3.08 0.56-4.62l-10.58-27.99c-0.73-1.93-2.61-3.23-4.68-3.23zm-1.53 20.07 0.41-1.18 0.41 1.18h-0.82z",
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
          "m87.48 24c3.62 0 6.37 0.73 8.26 2.18s2.84 3.61 2.84 6.48c0 1.47-0.4 2.78-1.19 3.96-0.26 0.39-0.57 0.75-0.91 1.08-0.86 0.82-0.73 2.25 0.21 2.99 0.47 0.37 0.89 0.81 1.25 1.3 0.95 1.3 1.42 2.85 1.42 4.67 0 3-0.96 5.31-2.89 6.92-1.94 1.61-4.69 2.42-8.28 2.42h-9.67c-1.11 0-2.01-0.9-2.01-2.01v-27.98c0-1.11 0.9-2.01 2.01-2.01h8.96m-3.4 13.47h3.45c1.73 0 3.08-0.39 4.05-1.18 0.97-0.78 1.46-1.89 1.46-3.33 0-1.58-0.45-2.73-1.35-3.43s-2.3-1.05-4.21-1.05h-3.4c-1.11 0-2.01 0.9-2.01 2.01v4.98c0.01 1.1 0.9 2 2.01 2m0 14.05h4.17c1.74 0 3.11-0.43 4.09-1.29s1.47-2.06 1.47-3.59c0-3.31-1.7-5-5.1-5.08h-4.63c-1.11 0-2.01 0.9-2.01 2.01v5.95c0.01 1.1 0.9 2 2.01 2m3.4-30.52h-8.96c-2.76 0-5.01 2.25-5.01 5.01v27.99c0 2.76 2.25 5.01 5.01 5.01h9.67c4.3 0 7.73-1.05 10.2-3.12 2.63-2.2 3.96-5.3 3.96-9.22 0-2.46-0.67-4.62-1.99-6.44-0.31-0.43-0.65-0.82-1.03-1.19 0.2-0.24 0.38-0.48 0.55-0.74 1.13-1.67 1.7-3.57 1.7-5.63 0-4.78-2.18-7.46-4.01-8.86-2.41-1.87-5.81-2.81-10.09-2.81zm-2.4 10.48h2.41c1.77 0 2.31 0.38 2.36 0.42 0.04 0.03 0.2 0.32 0.2 1.06 0 0.72-0.21 0.89-0.34 0.99-0.42 0.34-1.17 0.51-2.17 0.51h-2.45v-2.98h-0.01zm0 13.08h3.6c1.65 0.04 2.13 0.32 2.13 2.08 0 0.94-0.31 1.21-0.45 1.33-0.51 0.45-1.43 0.55-2.11 0.55h-3.18v-3.96h0.01z",
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
          "m40.79 72c3.44 0 6.2 0.93 8.3 2.79 1.56 1.39 2.64 3.21 3.23 5.46 0.32 1.23-0.62 2.45-1.9 2.45h-1.42c-0.93 0-1.7-0.66-1.91-1.56-0.34-1.45-0.9-2.54-1.69-3.28-1.05-0.99-2.58-1.49-4.61-1.49-2.35 0-4.16 0.86-5.42 2.58s-1.91 4.24-1.94 7.57v2.76c0 3.37 0.6 5.94 1.81 7.71 1.2 1.77 2.97 2.65 5.29 2.65 2.12 0 3.72-0.48 4.79-1.43 0.8-0.72 1.39-1.8 1.75-3.23 0.22-0.89 0.99-1.54 1.91-1.54h1.44c1.28 0 2.23 1.21 1.89 2.45-0.58 2.18-1.67 3.95-3.25 5.33-2.14 1.86-4.98 2.79-8.53 2.79-2.48 0-4.67-0.59-6.56-1.76-1.89-1.18-3.35-2.85-4.37-5.02-1.03-2.17-1.56-4.68-1.6-7.55v-2.91c0-2.94 0.52-5.53 1.56-7.76 1.04-2.24 2.53-3.96 4.48-5.18s4.2-1.83 6.75-1.83m0-3c-3.11 0-5.91 0.76-8.33 2.27-2.44 1.52-4.33 3.69-5.62 6.46-1.22 2.63-1.84 5.66-1.84 9.03v2.91c0.05 3.33 0.69 6.29 1.89 8.84 1.27 2.69 3.12 4.8 5.5 6.28 2.36 1.47 5.1 2.22 8.14 2.22 4.28 0 7.81-1.19 10.5-3.53 2.03-1.77 3.44-4.06 4.18-6.81 0.4-1.49 0.09-3.05-0.85-4.28-0.95-1.24-2.38-1.94-3.94-1.94h-1.44c-2.27 0-4.25 1.57-4.82 3.81-0.2 0.81-0.5 1.43-0.84 1.73-0.48 0.43-1.48 0.67-2.79 0.67-1.67 0-2.36-0.68-2.81-1.34-0.84-1.24-1.29-3.32-1.29-6.02v-2.76c0.02-2.6 0.49-4.62 1.35-5.79 0.46-0.63 1.22-1.35 3-1.35 0.84 0 1.97 0.12 2.55 0.67 0.24 0.23 0.58 0.72 0.83 1.79 0.55 2.24 2.54 3.84 4.84 3.84h1.42c1.55 0 2.98-0.7 3.92-1.93 0.95-1.22 1.26-2.78 0.87-4.27-0.74-2.82-2.13-5.16-4.14-6.94-2.64-2.37-6.1-3.56-10.28-3.56z",
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
          "m85.45 72c2.83 0 5.34 0.63 7.53 1.89s3.89 3.05 5.09 5.36 1.8 4.97 1.8 7.96v1.6c0 3.03-0.6 5.7-1.81 8s-2.93 4.07-5.16 5.32-4.8 1.87-7.68 1.87h-7.2c-1.11 0-2.01-0.9-2.01-2.01v-27.98c-0.01-1.11 0.89-2.01 2-2.01h7.44m-1.88 27.52h1.62c2.92 0 5.15-0.91 6.71-2.73s2.35-4.43 2.38-7.84v-1.78c0-3.47-0.76-6.11-2.26-7.94-1.51-1.83-3.7-2.74-6.57-2.74h-1.89c-1.11 0-2.01 0.9-2.01 2.01v19.02c0.01 1.1 0.91 2 2.02 2m1.88-30.52h-7.45c-2.75 0-5 2.25-5 5.01v27.99c0 2.76 2.25 5.01 5.01 5.01h7.2c3.39 0 6.47-0.76 9.14-2.25 2.74-1.53 4.88-3.73 6.36-6.54 1.43-2.72 2.16-5.88 2.16-9.4v-1.6c0-3.46-0.72-6.6-2.14-9.34-1.47-2.82-3.57-5.04-6.25-6.58-2.65-1.53-5.68-2.3-9.03-2.3zm-0.89 10.48h0.89c2.59 0 3.67 0.94 4.26 1.65 1.05 1.27 1.58 3.3 1.58 6.03v1.78c-0.02 2.64-0.58 4.63-1.66 5.89-0.62 0.72-1.75 1.68-4.44 1.68h-0.63v-17.03z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m46.45 48.19h-9.55c-0.85 0-1.61 0.54-1.89 1.35l-1.66 4.76c-0.28 0.81-1.04 1.35-1.89 1.35h-1.45c-1.4 0-2.37-1.4-1.88-2.71l10.57-28c0.29-0.78 1.04-1.3 1.88-1.3h2.22c0.83 0 1.58 0.52 1.88 1.3l10.59 27.99c0.5 1.31-0.47 2.71-1.88 2.71h-1.48c-0.85 0-1.61-0.54-1.89-1.34l-1.67-4.77c-0.29-0.8-1.04-1.34-1.9-1.34zm-6.59-4.48h3.63c1.38 0 2.35-1.36 1.89-2.67l-1.81-5.19c-0.63-1.79-3.16-1.79-3.79 0l-1.81 5.19c-0.45 1.3 0.51 2.67 1.89 2.67z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.52 53.99v-27.98c0-1.11 0.9-2.01 2.01-2.01h8.96c3.62 0 6.37 0.73 8.26 2.18s2.84 3.61 2.84 6.48c0 1.47-0.4 2.78-1.19 3.96-0.26 0.39-0.57 0.75-0.91 1.08-0.86 0.82-0.73 2.25 0.21 2.99 0.47 0.37 0.89 0.81 1.25 1.3 0.95 1.3 1.42 2.85 1.42 4.67 0 3-0.96 5.31-2.89 6.92-1.95 1.61-4.7 2.42-8.29 2.42h-9.67c-1.11 0-2-0.9-2-2.01zm5.56-18.52c0 1.11 0.9 2.01 2.01 2.01h3.45c1.73 0 3.08-0.39 4.05-1.18 0.97-0.78 1.46-1.89 1.46-3.33 0-1.58-0.45-2.73-1.35-3.43s-2.3-1.05-4.21-1.05h-3.4c-1.11 0-2.01 0.9-2.01 2.01v4.97zm0 8.1v5.95c0 1.11 0.9 2.01 2.01 2.01h4.17c1.74 0 3.11-0.43 4.09-1.29s1.47-2.06 1.47-3.59c0-3.31-1.7-5-5.1-5.08h-4.63c-1.12-0.01-2.01 0.89-2.01 2z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.42 93.43c1.28 0 2.23 1.21 1.89 2.45-0.58 2.18-1.67 3.95-3.25 5.33-2.14 1.86-4.98 2.79-8.53 2.79-2.48 0-4.67-0.59-6.56-1.76-1.89-1.18-3.35-2.85-4.37-5.02-1.03-2.17-1.56-4.68-1.6-7.55v-2.91c0-2.94 0.52-5.53 1.56-7.76 1.04-2.24 2.53-3.96 4.48-5.18 1.95-1.21 4.2-1.82 6.75-1.82 3.44 0 6.2 0.93 8.3 2.79 1.56 1.39 2.64 3.21 3.23 5.46 0.32 1.23-0.62 2.45-1.9 2.45h-1.42c-0.93 0-1.7-0.66-1.91-1.56-0.34-1.45-0.9-2.54-1.69-3.28-1.05-0.99-2.58-1.49-4.61-1.49-2.35 0-4.16 0.86-5.42 2.58s-1.91 4.24-1.94 7.57v2.76c0 3.37 0.6 5.94 1.81 7.71 1.2 1.77 2.97 2.65 5.29 2.65 2.12 0 3.72-0.48 4.79-1.43 0.8-0.72 1.39-1.8 1.75-3.23 0.22-0.89 0.99-1.54 1.91-1.54h1.44z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement("path", {
      d:
        "m76 101.99v-27.98c0-1.11 0.9-2.01 2.01-2.01h7.45c2.83 0 5.34 0.63 7.53 1.89s3.89 3.05 5.09 5.36 1.8 4.97 1.8 7.96v1.6c0 3.03-0.6 5.7-1.81 8s-2.93 4.07-5.16 5.32-4.8 1.87-7.68 1.87h-7.2c-1.13 0-2.03-0.9-2.03-2.01zm5.56-23.5v19.02c0 1.11 0.9 2.01 2.01 2.01h1.62c2.92 0 5.15-0.91 6.71-2.73s2.35-4.43 2.38-7.84v-1.78c0-3.47-0.76-6.11-2.26-7.94-1.51-1.83-3.7-2.74-6.57-2.74h-1.89c-1.1-0.01-2 0.89-2 2z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = CapitalAbcd;
