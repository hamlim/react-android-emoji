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

function Cry(props) {
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
        "m64 79.44c10.75 0 18.41 5.58 20.72 9.09 0.89 1.36 1.07 2.83 0.47 3.94-0.45 0.84-1.27 1.32-2.25 1.32-0.33 0-0.67-0.06-1.01-0.16-5.42-1.7-11.62-2.59-17.96-2.59-6.29 0-12.48 0.9-17.88 2.59-0.35 0.11-0.69 0.16-1.02 0.16-0.98 0-1.8-0.48-2.25-1.32-0.6-1.11-0.42-2.58 0.47-3.94 2.3-3.52 9.96-9.09 20.71-9.09z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m41.32 106.55c-5.6 0-9.94-5.47-9.94-10.18 0-3.3 1.48-7.12 3.52-12.42 0.3-0.77 0.61-1.58 0.93-2.41 1.55-4.07 3.76-8.44 5.37-11.44 1.43 2.96 3.47 7.25 5.39 11.55 3.63 8.15 4.69 11.46 4.69 14.72-0.01 4.71-4.36 10.18-9.96 10.18z",
      fill: "#5F7AFF"
    }),
    _react2.default.createElement("path", {
      d:
        "m41.12 75.17c1.07 2.27 2.26 4.83 3.4 7.4 3.48 7.81 4.49 10.91 4.49 13.8 0 4.39-4.2 7.93-7.68 7.93s-7.68-3.54-7.68-7.93c0-2.88 1.41-6.54 3.37-11.61 0.3-0.78 0.61-1.58 0.93-2.42 0.9-2.4 2.05-4.91 3.17-7.17m0.2-9.94s-4.81 8.16-7.61 15.5c-2.55 6.7-4.59 11.39-4.59 15.64 0 6.05 5.46 12.44 12.2 12.44s12.2-6.39 12.2-12.44c0-3.81-1.23-7.45-4.88-15.63-3.49-7.83-7.32-15.51-7.32-15.51z",
      fill: "#4864ED"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#6D4C41",
        stroke: "#6D4C41",
        strokeMiterlimit: 10
      },
      _react2.default.createElement("path", {
        d:
          "m95.25 46.43c-1.38 0.21-2.7-0.46-3.36-1.71-1.88-3.43-5.32-6.05-9.18-6.99-1.6-0.35-2.68-1.73-2.63-3.29 0.05-1.49 1.08-2.65 2.58-2.88 0.19-0.03 0.4-0.04 0.62-0.04 1.77 0.07 3.48 0.44 5.11 1.1 4.39 1.75 7.87 5.4 9.28 9.76 0.3 0.98 0.19 1.92-0.28 2.68-0.47 0.73-1.25 1.23-2.14 1.37z"
      }),
      _react2.default.createElement("path", {
        d:
          "m32.75 46.43c1.38 0.21 2.7-0.46 3.36-1.71 1.88-3.43 5.32-6.05 9.18-6.99 1.6-0.35 2.68-1.73 2.63-3.29-0.05-1.49-1.08-2.65-2.58-2.88-0.19-0.03-0.4-0.04-0.62-0.04-1.77 0.07-3.48 0.44-5.11 1.1-4.39 1.75-7.87 5.4-9.28 9.76-0.3 0.98-0.19 1.92 0.28 2.68 0.47 0.73 1.25 1.23 2.14 1.37z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m82.77 46.86c4.19 0 8 3.54 8 9.42s-3.81 9.42-8 9.42-8-3.54-8-9.42 3.81-9.42 8-9.42z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m45.23 46.86c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z",
      fill: "#242424"
    })
  );
}

exports.default = Cry;
