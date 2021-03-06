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

function PotableWater(props) {
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
        y1: 4.25,
        y2: 124.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#82B1FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6FA0FF",
        offset: 0.2644
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3D74FF",
        offset: 0.7989
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
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
          "m79 16c1.66 0 3 1.34 3 3 0 0.55 0.44 0.99 0.99 0.99h9.01v0.03l1.09-0.56c0.3-0.15 0.6-0.22 0.9-0.22 1.05 0 2 0.84 2 2v5.53c0 1.16-0.95 2-2 2-0.29 0-0.59-0.07-0.88-0.21l-1.11-0.53v-0.03h-9c-0.55 0-1 0.45-1 1v4.16c3.14 1.56 5.72 4.29 7.3 7.72 0.32 0.7 1.03 1.13 1.8 1.13h10.9c1.1 0 2-0.9 2-2v-0.8c0-1.52 0.86-2.9 2.21-3.58l2.89-1.45c0.29-0.15 0.6-0.21 0.89-0.21 1.05 0 2 0.84 2 2v25.52c0 1.16-0.95 2-2 2-0.3 0-0.6-0.07-0.89-0.21l-2.89-1.45c-1.36-0.68-2.21-2.06-2.21-3.58v-2.25c0-1.1-0.9-2-2-2h-10.3c-0.83 0-1.57 0.51-1.86 1.29-2.27 6.13-7.6 10.44-13.83 10.44s-11.57-4.31-13.83-10.44c-0.3-0.78-1.05-1.29-1.88-1.29h-8.13c-4.51 0-8.17 3.66-8.17 8.17v2.83c0 1.66-1.34 3-3 3h-6c-1.66 0-3-1.34-3-3v-2.83c0-11.14 9.03-20.17 20.17-20.17h8.73c0.77 0 1.48-0.43 1.8-1.13 1.58-3.43 4.16-6.16 7.3-7.72v-4.16c0-0.55-0.45-1-1-1h-9v0.03l-1.12 0.55c-0.29 0.14-0.59 0.21-0.88 0.21-1.05 0-2-0.84-2-2v-5.53c0-1.16 0.95-2 2-2 0.3 0 0.61 0.07 0.9 0.22l1.1 0.56v-0.03h9.01c0.55 0 0.99-0.44 0.99-0.99 0-1.66 1.34-3 3-3h6m0-3.01h-6c-2.61 0-4.83 1.67-5.66 3.99h-6.69l-0.39-0.2c-0.7-0.36-1.48-0.54-2.26-0.54-1.3 0-2.53 0.5-3.48 1.41-0.98 0.94-1.52 2.22-1.52 3.59v5.53c0 2.76 2.24 5 5 5 0.77 0 1.51-0.17 2.21-0.52l0.55-0.27h6.24v0.42c-2.81 1.8-5.15 4.43-6.73 7.59h-8.1c-12.77 0-23.17 10.4-23.17 23.17v2.83c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6v-2.83c0-2.85 2.32-5.17 5.17-5.17h7.44c2.92 7.15 9.28 11.73 16.39 11.73s13.47-4.58 16.39-11.73h8.61v1.26c0 2.67 1.48 5.07 3.87 6.26l2.89 1.45c0.7 0.35 1.46 0.53 2.24 0.53 2.76 0 5-2.24 5-5v-25.54c0-2.76-2.24-5-5-5-0.78 0-1.53 0.18-2.24 0.53l-2.89 1.45c-2.33 1.16-3.79 3.47-3.87 6.06h-9.27c-1.58-3.16-3.92-5.79-6.73-7.59v-0.42h6.24l0.55 0.27c0.7 0.34 1.44 0.52 2.21 0.52 2.76 0 5-2.24 5-5v-5.53c0-2.76-2.24-5-5-5-0.78 0-1.56 0.19-2.26 0.54l-0.39 0.2h-6.69c-0.83-2.32-3.06-3.99-5.66-3.99z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.47 71c1.67 0 2.81 1.51 2.47 3.04l-7.3 32.87c-0.67 3-3.28 5.09-6.35 5.09h-17.58c-3.07 0-5.68-2.09-6.35-5.09l-7.3-32.87c-0.34-1.53 0.8-3.04 2.47-3.04 0.56 0 1.17 0.17 1.81 0.56 0.22 0.14 0.37 0.37 0.43 0.62l1.01 4.54c0.1 0.46 0.51 0.78 0.98 0.78h31.5c0.47 0 0.87-0.33 0.98-0.78l1.01-4.54c0.06-0.25 0.21-0.49 0.43-0.62 0.62-0.4 1.23-0.56 1.79-0.56m-32.5 21h25.05c0.47 0 0.87-0.33 0.98-0.78l1.67-7.5c0.14-0.62-0.34-1.22-0.98-1.22h-28.38c-0.64 0-1.11 0.59-0.98 1.22l1.67 7.5c0.1 0.45 0.51 0.78 0.97 0.78m32.5-24c-1.14 0-2.3 0.34-3.37 1-0.9 0.55-1.56 1.47-1.79 2.53l-0.66 2.97h-28.29l-0.66-2.97c-0.23-1.06-0.89-1.98-1.79-2.53-1.07-0.65-2.23-1-3.37-1-1.7 0-3.27 0.75-4.32 2.06s-1.44 3-1.08 4.64l7.3 32.87c0.98 4.38 4.79 7.44 9.27 7.44h17.58c4.49 0 8.3-3.06 9.27-7.44l7.3-32.87c0.36-1.64-0.03-3.33-1.08-4.63-1.04-1.32-2.62-2.07-4.31-2.07zm-31.67 17.5h23.4l-0.78 3.5h-21.84l-0.78-3.5z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.11 34.17-2.89 1.45c-1.36 0.68-2.21 2.06-2.21 3.58v0.8c0 1.1-0.9 2-2 2h-10.91c-0.77 0-1.48-0.43-1.8-1.13-1.58-3.43-4.16-6.16-7.3-7.72v-4.16c0-0.55 0.45-1 1-1h9v0.03l1.12 0.55c1.33 0.65 2.88-0.31 2.88-1.79v-5.53c0-1.49-1.57-2.46-2.91-1.78l-1.09 0.56v-0.03h-9.01c-0.55-0.01-0.99-0.45-0.99-1 0-1.66-1.34-3-3-3h-6c-1.66 0-3 1.34-3 3 0 0.55-0.44 0.99-0.99 0.99h-9.01v0.03l-1.09-0.56c-1.34-0.67-2.91 0.3-2.91 1.79v5.53c0 1.48 1.55 2.45 2.88 1.79l1.12-0.54v-0.03h9c0.55 0 1 0.45 1 1v4.16c-3.14 1.56-5.72 4.29-7.3 7.72-0.32 0.7-1.03 1.13-1.8 1.13h-8.73c-11.14-0.01-20.17 9.02-20.17 20.16v2.83c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3v-2.83c0-4.51 3.66-8.17 8.17-8.17h8.13c0.83 0 1.57 0.51 1.86 1.29 2.27 6.13 7.6 10.44 13.83 10.44s11.57-4.31 13.83-10.44c0.3-0.78 1.05-1.29 1.88-1.29h10.3c1.1 0 2 0.9 2 2v2.26c0 1.52 0.86 2.9 2.21 3.58l2.89 1.45c1.33 0.66 2.89-0.3 2.89-1.79v-25.54c0.01-1.48-1.55-2.45-2.88-1.79z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.66 71.55c-0.22 0.14-0.37 0.37-0.43 0.62l-1.01 4.54c-0.1 0.46-0.51 0.78-0.98 0.78h-31.5c-0.47 0-0.87-0.33-0.98-0.78l-1.01-4.54c-0.06-0.25-0.21-0.49-0.43-0.62-2.56-1.56-4.73 0.45-4.28 2.49l7.3 32.87c0.67 3 3.28 5.09 6.35 5.09h17.58c3.07 0 5.68-2.09 6.35-5.09l7.3-32.87c0.47-2.04-1.7-4.05-4.26-2.49zm-32.35 10.95h28.39c0.64 0 1.11 0.59 0.98 1.22l-1.68 7.5c-0.1 0.45-0.5 0.78-0.97 0.78h-25.06c-0.47 0-0.87-0.33-0.98-0.78l-1.67-7.5c-0.13-0.63 0.35-1.22 0.99-1.22z",
      fill: "#FAFAFA"
    })
  );
}

exports.default = PotableWater;
