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

function Sunglasses(props) {
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
        x1: 63.992,
        x2: 63.992,
        y1: 20.702,
        y2: 106.73,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEE133",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEDE32",
        offset: 0.6118
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD32F",
        offset: 0.7076
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC12B",
        offset: 0.7975
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7A924",
        offset: 0.8834
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A323",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.99 118.65c-27.31 0-56.71-17.1-56.71-54.65s29.4-54.65 56.71-54.65c15.14 0 29.15 5.01 39.46 14.11 11.29 9.96 17.25 23.98 17.25 40.54 0 16.49-5.96 30.48-17.25 40.47-10.33 9.14-24.35 14.18-39.46 14.18z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.99 11.35c14.65 0 28.19 4.83 38.14 13.61 10.84 9.57 16.57 23.07 16.57 39.04 0 15.9-5.73 29.37-16.58 38.97-9.97 8.82-23.51 13.68-38.14 13.68-14.69 0-28.24-4.8-38.15-13.5-10.82-9.53-16.55-23.07-16.55-39.15 0-16.16 5.73-29.72 16.56-39.22 9.88-8.66 23.43-13.43 38.15-13.43m0-4c-30.48 0-58.71 19.58-58.71 56.65 0 36.87 28.23 56.65 58.71 56.65s58.71-20.28 58.71-56.65c0-36.57-28.23-56.65-58.71-56.65z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m124 45.42s-4.26 0.09-4.26 3.5c0 8.42 0.09 26.49-21.96 26.49-17.66 0-26.09-9.12-27.51-19.19-0.59-4.19-2.04-8.76-6.27-8.76s-5.69 4.57-6.27 8.76c-1.42 10.07-9.85 19.19-27.51 19.19-22.05 0-21.96-18.07-21.96-26.49 0-3.41-4.26-3.5-4.26-3.5v-8.34s8.18-1.26 20.66-1.26 17.45 0 27.38 0.99c5.86 0.59 11.96 0.66 11.96 0.66s6.1-0.06 11.97-0.65c9.93-0.99 14.9-0.99 27.38-0.99s20.66 1.26 20.66 1.26v8.33z"
    }),
    _react2.default.createElement("path", {
      d:
        "m21.12 51.95c-0.1 1.6-0.74 3.08-2.31 3.37-0.18 0.03-0.36 0.05-0.54 0.05-1.36 0-2.58-0.97-2.84-2.36-0.56-2.98 0.09-5.77 1.82-7.86 1.62-1.96 4.02-3.08 6.58-3.08 1.6 0 3.01 0.99 3.01 2.58 0 1.88-1.5 2.67-3.01 3.2-1.41 0.51-2.59 2.16-2.71 4.1z",
      fill: "#858585"
    }),
    _react2.default.createElement("path", {
      d:
        "m84.7 51.95c-0.1 1.6-0.74 3.08-2.31 3.37-0.18 0.03-0.36 0.05-0.54 0.05-1.36 0-2.58-0.97-2.84-2.36-0.56-2.98 0.09-5.77 1.82-7.86 1.62-1.96 4.02-3.08 6.58-3.08 1.6 0 3.01 0.99 3.01 2.58 0 1.88-1.5 2.67-3.01 3.2-1.4 0.51-2.59 2.16-2.71 4.1z",
      fill: "#858585"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 93.81c-11.51 0-19.73-5.97-22.2-9.74-0.95-1.45-1.14-3.03-0.5-4.22 0.48-0.9 1.36-1.41 2.42-1.41 0.35 0 0.72 0.06 1.09 0.18 5.8 1.82 12.45 2.78 19.24 2.78 6.74 0 13.37-0.96 19.16-2.78 0.37-0.12 0.74-0.18 1.09-0.18 1.05 0 1.93 0.51 2.41 1.41 0.64 1.19 0.45 2.76-0.5 4.22-2.48 3.76-10.7 9.74-22.21 9.74z",
      fill: "#242424"
    })
  );
}

exports.default = Sunglasses;
