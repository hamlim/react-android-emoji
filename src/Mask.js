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

function Mask(props) {
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
    _react2.default.createElement("polygon", {
      points: "31.5 79.77 3.5 71.25 2.62 62.89 31.5 71.7",
      fill: "#fff",
      stroke: "#A1A1A1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("polygon", {
      points: "13.83 99.17 9.38 91.5 32 88.88 32.5 97",
      fill: "#fff",
      stroke: "#A1A1A1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("polygon", {
      points: "94.5 79.77 123.25 71.25 123.75 62.89 94.5 71.7",
      fill: "#fff",
      stroke: "#A1A1A1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("polygon", {
      points: "113.67 99.17 118.12 91.5 95.5 88.88 95 97",
      fill: "#fff",
      stroke: "#A1A1A1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d:
        "M30.41,105.11c-1.05,0-1.91-0.86-1.91-1.91V68.91c0-1.05,0.86-1.91,1.91-1.91h67.18 c1.05,0,1.91,0.86,1.91,1.91v34.28c0,1.05-0.86,1.91-1.91,1.91H30.41z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.5 69v34.11h-67v-34.11h67m0.09-4h-67.18c-2.16 0-3.91 1.75-3.91 3.91v34.28c0 2.16 1.75 3.91 3.91 3.91h67.18c2.16 0 3.91-1.75 3.91-3.91v-34.28c0-2.16-1.75-3.91-3.91-3.91z",
      fill: "#A1A1A1"
    }),
    _react2.default.createElement("path", {
      d:
        "m124 64c0-37.37-28.85-57.89-60-57.89s-60 20-60 57.89c0 37.68 28.85 57.89 60 57.89s60-20.72 60-57.89z",
      fill: "none"
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
          "m31.33 36.01c0.35-1.12 1.35-1.86 2.53-1.88 3.27-0.14 6.51-1.74 8.65-4.29 0.86-1.07 2.29-1.37 3.44-0.75 1.1 0.59 1.59 1.8 1.2 3.01-0.05 0.15-0.11 0.31-0.2 0.48-0.71 1.3-1.62 2.44-2.73 3.42-2.94 2.64-6.97 3.89-10.77 3.33-0.84-0.14-1.51-0.57-1.9-1.21-0.36-0.62-0.45-1.39-0.22-2.11z"
      }),
      _react2.default.createElement("path", {
        d:
          "m96.67 36.26c-0.35-1.12-1.35-1.86-2.53-1.88-3.27-0.14-6.51-1.74-8.65-4.29-0.86-1.07-2.29-1.37-3.44-0.75-1.1 0.59-1.59 1.8-1.2 3.01 0.05 0.15 0.11 0.31 0.2 0.48 0.71 1.3 1.62 2.44 2.73 3.42 2.94 2.64 6.97 3.89 10.77 3.33 0.84-0.14 1.51-0.57 1.9-1.21 0.36-0.62 0.45-1.39 0.22-2.11z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m51.6 55.36s-0.09-0.02-0.25-0.07c-0.08-0.02-0.18-0.05-0.3-0.08-0.1-0.01-0.15 0-0.23-0.02-0.2-0.02-0.45-0.05-0.74-0.08-0.3-0.03-0.66-0.05-1.05-0.06-0.78-0.02-1.72 0.03-2.74 0.17-0.51 0.06-1.03 0.18-1.57 0.29-0.54 0.1-1.08 0.26-1.62 0.43-0.14 0.05-0.71 0.21-0.86 0.28-0.22 0.08-0.46 0.16-0.72 0.27-0.51 0.21-1.01 0.41-1.46 0.64-0.92 0.46-1.73 0.94-2.37 1.39s-1.11 0.85-1.43 1.14c-0.32 0.28-0.49 0.45-0.49 0.45l-0.38 0.39c-1.2 1.23-3.17 1.24-4.4 0.04-0.92-0.9-1.16-2.24-0.71-3.37 0 0 0.04-0.11 0.13-0.32s0.2-0.52 0.4-0.88c0.38-0.74 1-1.73 1.91-2.73 0.9-1.01 2.09-2.02 3.46-2.88 0.69-0.42 1.42-0.84 2.19-1.18 0.37-0.17 0.79-0.34 1.23-0.5 0.51-0.19 0.63-0.22 1.15-0.4 0.82-0.23 1.65-0.44 2.48-0.58 0.83-0.16 1.66-0.21 2.48-0.25 1.62-0.06 3.17 0.11 4.48 0.45 0.66 0.15 1.25 0.36 1.78 0.57 0.54 0.21 0.93 0.41 1.37 0.64 0.2 0.11 0.4 0.22 0.53 0.3 0.1 0.07 0.18 0.14 0.25 0.19l0.21 0.15c1.4 1.05 1.7 3.03 0.65 4.44-0.81 1.07-2.16 1.49-3.38 1.17z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.4 55.36s0.09-0.02 0.25-0.07c0.08-0.02 0.18-0.05 0.3-0.08 0.1-0.01 0.15 0 0.23-0.02 0.2-0.02 0.45-0.05 0.74-0.08 0.3-0.03 0.66-0.05 1.05-0.06 0.78-0.02 1.72 0.03 2.74 0.17 0.51 0.06 1.03 0.18 1.57 0.29 0.54 0.1 1.08 0.26 1.62 0.43 0.14 0.05 0.71 0.21 0.86 0.28 0.22 0.08 0.46 0.16 0.72 0.27 0.51 0.21 1.01 0.41 1.46 0.64 0.92 0.46 1.73 0.94 2.37 1.39s1.11 0.85 1.43 1.14c0.32 0.28 0.49 0.45 0.49 0.45l0.38 0.39c1.2 1.23 3.17 1.24 4.4 0.04 0.92-0.9 1.16-2.24 0.71-3.37 0 0-0.04-0.11-0.13-0.32-0.08-0.21-0.2-0.52-0.4-0.88-0.38-0.74-1-1.73-1.91-2.73-0.9-1.01-2.09-2.02-3.46-2.88-0.69-0.42-1.42-0.84-2.19-1.18-0.37-0.17-0.79-0.34-1.23-0.5-0.51-0.19-0.63-0.22-1.15-0.4-0.82-0.23-1.65-0.44-2.48-0.58-0.83-0.16-1.66-0.21-2.48-0.25-1.62-0.06-3.17 0.11-4.48 0.45-0.66 0.15-1.25 0.36-1.78 0.57-0.54 0.21-0.93 0.41-1.37 0.64-0.2 0.11-0.4 0.22-0.53 0.3-0.1 0.07-0.18 0.14-0.25 0.19l-0.21 0.15c-1.4 1.05-1.7 3.03-0.65 4.44 0.81 1.07 2.16 1.49 3.38 1.17z",
      fill: "#242424"
    })
  );
}

exports.default = Mask;
