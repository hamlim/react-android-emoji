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

function DroolingFace(props) {
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
        "m64.01 98.38c3.85 0 7.66 0.66 11.3 1.93 7.7 2.69 14.37-5.99 9.9-12.8-4.66-7.08-11.91-11-21.19-11s-16.53 3.91-21.19 11c-4.48 6.81 2.2 15.48 9.9 12.8 3.62-1.27 7.43-1.93 11.28-1.93z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m77.39 124.52c-1.84 0-3.13-0.48-3.94-1.46-2.24-2.71-1-9.03-0.48-11.72 0.11-0.54 0.3-1.17 0.51-1.85 0.77-2.48 2.21-7.1-2.51-9.06-0.5-0.21-0.99-0.4-1.47-0.59 1.52 0.3 3.08 0.52 4.68 0.54h0.1c1.99 0 4.21-0.75 6.24-1.65-1.64 2.02-0.54 5.59 0.71 9.66 0.47 1.52 0.95 3.1 1.23 4.43 0.9 4.35 0.53 8.1-0.97 10.02-0.83 1.06-2.04 1.61-3.69 1.67-0.13 0.01-0.27 0.01-0.41 0.01z",
      fill: "#5F7AFF"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.72 98m-8.99 3.87c0.09 2.2 0.85 4.67 1.6 7.1 0.45 1.48 0.92 3.01 1.18 4.25 0.76 3.67 0.53 6.96-0.59 8.38-0.31 0.4-0.84 0.86-2.19 0.91-0.12 0-0.23 0.01-0.35 0.01-1.79 0-2.25-0.55-2.4-0.74-1.09-1.32-1.1-4.7-0.06-10.07 0.08-0.43 0.27-1.02 0.46-1.64 0.5-1.6 1.54-4.95 0.34-7.8 0.68-0.08 1.35-0.22 2.01-0.4m8.3-7.79c-1.47 0-7.55 4.3-11.74 4.3h-0.08c-4.97-0.06-9.85-2.3-14.07-2.4h-0.24c-4.72 0-4.65 3.65-4.65 3.65 0.82-0.26 1.79-0.38 2.87-0.38 3.16 0 7.35 1.06 12.09 3.03 3.88 1.62 1.38 5.73 0.8 8.68-1.11 5.71-2.62 15.57 6.38 15.57 0.16 0 0.33 0 0.5-0.01 6.92-0.27 7.9-7.48 6.54-14.1-0.96-4.65-4.03-11.19-2.09-12.67 2.15-1.63 3.09-1.51 3.99-5.17 0.09-0.35-0.02-0.5-0.3-0.5z",
      fill: "#4864ED"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m83.76 38.05c3.69 0 7.04 4.33 7.04 11.5s-3.35 11.5-7.04 11.5-7.04-4.33-7.04-11.5 3.36-11.5 7.04-11.5z"
      }),
      _react2.default.createElement("path", {
        d:
          "m44.22 38.05c-3.69 0-7.04 4.33-7.04 11.5s3.35 11.5 7.04 11.5 7.04-4.33 7.04-11.5-3.35-11.5-7.04-11.5z"
      })
    )
  );
}

exports.default = DroolingFace;
