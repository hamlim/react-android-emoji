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

function Sweat(props) {
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
      "symbol",
      {
        viewBox: "-64.5 -64.5 129 129"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "none",
          stroke: "#4285F4",
          strokeMiterlimit: 10
        },
        _react2.default.createElement("rect", {
          x: -64,
          y: -64,
          width: 128,
          height: 128
        }),
        _react2.default.createElement("path", {
          d:
            "M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z"
        }),
        _react2.default.createElement("path", {
          d:
            "m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z"
        }),
        _react2.default.createElement("path", {
          d:
            "M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z"
        }),
        _react2.default.createElement("line", {
          x1: -0.01,
          x2: -0.01,
          y1: 51,
          y2: -51
        }),
        _react2.default.createElement("line", {
          x1: -16,
          x2: -16,
          y1: 48.95,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 15.99,
          x2: 15.99,
          y1: 48.91,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 53,
          x2: -53,
          y1: 0.08,
          y2: 0.08
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 19.717,
        y2: 107.7,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F6A323",
        offset: 0.5664
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE133",
        offset: 0.9168
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,119.89C36.07,119.89,6,102.4,6,64S36.07,8.11,64,8.11c15.48,0,29.81,5.12,40.36,14.43 C115.9,32.72,122,47.06,122,64c0,16.86-6.1,31.17-17.64,41.39C93.78,114.74,79.45,119.89,64,119.89z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.11c14.99 0 28.86 4.95 39.03 13.93 11.1 9.79 16.97 23.61 16.97 39.96 0 16.27-5.87 30.07-16.97 39.89-10.21 9.03-24.07 14-39.03 14-15.04 0-28.9-4.91-39.04-13.82-11.1-9.75-16.96-23.61-16.96-40.07 0-16.54 5.86-30.42 16.96-40.15 10.11-8.86 23.97-13.74 39.04-13.74m0-4c-31.15 0-60 20-60 57.89 0 37.68 28.85 57.89 60 57.89s60-20.73 60-57.89c0-37.37-28.85-57.89-60-57.89z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 84.3c10.54 0 18.06 8.82 20.32 12.9 0.87 1.58 1.05 3.29 0.46 4.58-0.44 0.97-1.25 1.53-2.21 1.53-0.32 0-0.66-0.06-0.99-0.19-5.31-1.97-11.4-6.51-17.61-6.51-6.17 0-12.24 4.54-17.53 6.51-0.34 0.13-0.67 0.19-1 0.19-0.96 0-1.77-0.56-2.21-1.53-0.59-1.29-0.42-3 0.46-4.58 2.25-4.08 9.77-12.9 20.31-12.9z",
      fill: "#242424"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m49.61 64.03-0.2 0.2c-0.11 0.11-0.36 0.39-0.51 0.5-0.19 0.16-0.42 0.35-0.69 0.57-0.29 0.22-0.62 0.46-0.98 0.71-0.37 0.23-0.77 0.47-1.2 0.68-0.42 0.23-0.9 0.39-1.37 0.57-0.48 0.17-0.99 0.26-1.5 0.37-0.51 0.08-1.04 0.12-1.57 0.12h0.14-0.01-0.02-0.04-0.08-0.16l-0.31-0.01c-0.26 0-0.3-0.02-0.4-0.03-0.16 0-0.45-0.05-0.7-0.09-0.51-0.11-1.02-0.2-1.5-0.37-0.47-0.18-0.95-0.34-1.38-0.57-0.43-0.22-0.83-0.45-1.2-0.68-0.72-0.48-1.31-0.96-1.7-1.32-0.4-0.36-0.63-0.58-0.63-0.58l-0.25-0.25c-1.21-1.17-3.25-1.24-4.57-0.17-1.04 0.85-1.3 2.16-0.78 3.25l0.15 0.3c0.1 0.19 0.22 0.49 0.44 0.84 0.41 0.71 1.09 1.71 2.17 2.76 0.54 0.52 1.17 1.07 1.91 1.57 0.73 0.52 1.58 0.99 2.52 1.4 0.94 0.4 1.96 0.75 3.04 0.97 0.55 0.1 1.06 0.2 1.73 0.26 0.31 0.03 0.68 0.06 0.84 0.07l0.77 0.03c1.13-0.02 2.25-0.14 3.34-0.35 1.08-0.22 2.1-0.57 3.04-0.97 0.93-0.41 1.79-0.88 2.52-1.4 0.75-0.5 1.37-1.04 1.92-1.57 0.54-0.52 0.97-1.04 1.33-1.51 0.17-0.24 0.33-0.46 0.48-0.67 0.14-0.23 0.28-0.44 0.4-0.63 0.27-0.42 0.29-0.58 0.39-0.77 0.07-0.16 0.11-0.25 0.11-0.25 0.67-1.49-0.14-3.18-1.81-3.78-1.32-0.46-2.79-0.1-3.68 0.8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m94.51 64.03-0.2 0.2c-0.11 0.11-0.36 0.39-0.51 0.5-0.19 0.16-0.42 0.35-0.69 0.57-0.29 0.22-0.62 0.46-0.98 0.71-0.37 0.23-0.77 0.47-1.2 0.68-0.42 0.23-0.9 0.39-1.38 0.57-0.48 0.17-0.99 0.26-1.5 0.37-0.51 0.08-1.04 0.12-1.57 0.12h0.14-0.01-0.02-0.04-0.08-0.16l-0.31-0.01c-0.26 0-0.3-0.02-0.4-0.03-0.16 0-0.45-0.05-0.7-0.09-0.51-0.11-1.02-0.2-1.5-0.37-0.47-0.18-0.95-0.34-1.37-0.57-0.43-0.22-0.83-0.45-1.2-0.68-0.72-0.48-1.31-0.96-1.7-1.32-0.4-0.36-0.63-0.58-0.63-0.58l-0.25-0.25c-1.21-1.17-3.25-1.24-4.57-0.17-1.04 0.85-1.3 2.16-0.78 3.25l0.15 0.3c0.1 0.19 0.22 0.49 0.44 0.84 0.41 0.71 1.09 1.71 2.17 2.76 0.54 0.52 1.17 1.07 1.92 1.57 0.73 0.52 1.58 0.99 2.52 1.4 0.94 0.4 1.96 0.75 3.04 0.97 0.55 0.1 1.06 0.2 1.73 0.26 0.31 0.03 0.68 0.06 0.84 0.07l0.77 0.03c1.13-0.02 2.25-0.14 3.34-0.35 1.08-0.22 2.1-0.57 3.04-0.97 0.93-0.41 1.79-0.88 2.52-1.4 0.75-0.5 1.37-1.04 1.91-1.57 0.54-0.52 0.97-1.04 1.33-1.51 0.17-0.24 0.33-0.46 0.48-0.67 0.14-0.23 0.28-0.44 0.39-0.63 0.27-0.42 0.29-0.58 0.39-0.77 0.07-0.16 0.11-0.25 0.11-0.25 0.67-1.49-0.14-3.18-1.81-3.78-1.31-0.46-2.78-0.1-3.67 0.8z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.62 57.92c-7.68 0-13.63-7.49-13.63-13.94 0-4.39 1.92-9.36 4.57-16.24 0.38-0.99 0.78-2.02 1.18-3.08 2.28-5.99 5.67-12.49 7.76-16.29 1.82 3.74 4.85 10.05 7.67 16.39 4.72 10.58 6.08 14.89 6.08 19.22 0 6.45-5.96 13.94-13.63 13.94z",
      fill: "#5F7AFF"
    }),
    _react2.default.createElement("path", {
      d:
        "m31.4 12.78c1.72 3.59 3.88 8.19 5.94 12.8 4.58 10.28 5.91 14.41 5.91 18.4 0 5.41-5.19 11.94-11.63 11.94s-11.63-6.53-11.63-11.94c0-4.02 1.86-8.84 4.43-15.52 0.38-0.99 0.78-2.02 1.19-3.09 1.65-4.34 3.9-8.96 5.79-12.59m0.22-8.7s-6.17 10.46-9.75 19.86c-3.27 8.58-5.88 14.6-5.88 20.03 0 7.76 7 15.94 15.63 15.94s15.63-8.18 15.63-15.94c0-4.88-1.58-9.55-6.25-20.03-4.47-10.02-9.38-19.86-9.38-19.86z",
      fill: "#4864ED"
    })
  );
}

exports.default = Sweat;