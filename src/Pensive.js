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

function Pensive(props) {
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
        y1: 19.742,
        y2: 107.73,
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
        "m64 119.92c-27.93 0-58-17.49-58-55.89s30.07-55.89 58-55.9c15.48 0 29.81 5.13 40.36 14.43 11.54 10.19 17.64 24.53 17.64 41.47 0 16.86-6.1 31.17-17.64 41.39-10.58 9.35-24.91 14.5-40.36 14.5z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.13c14.99 0 28.86 4.95 39.03 13.93 11.1 9.8 16.97 23.61 16.97 39.96 0 16.27-5.87 30.07-16.97 39.89-10.21 9.03-24.07 14-39.03 14-15.04 0-28.9-4.91-39.04-13.82-11.1-9.74-16.96-23.6-16.96-40.06 0-16.54 5.86-30.42 16.96-40.15 10.11-8.87 23.97-13.75 39.04-13.75m0-4c-31.15 0-60 20.01-60 57.89 0 37.68 28.85 57.89 60 57.89s60-20.73 60-57.89c0-37.37-28.85-57.89-60-57.89z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("line", {
      x1: 53,
      x2: 75,
      y1: 95,
      y2: 95,
      fill: "none",
      stroke: "#242424",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 8
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#EB8F00"
      },
      _react2.default.createElement("path", {
        d:
          "m21.54 47.09c0.42-1.33 1.61-2.22 3.03-2.25 3.9-0.16 7.78-2.08 10.34-5.12 1.03-1.28 2.74-1.64 4.12-0.9 1.32 0.7 1.9 2.15 1.44 3.59-0.06 0.19-0.14 0.38-0.24 0.57-0.85 1.56-1.94 2.92-3.26 4.09-3.52 3.16-8.33 4.65-12.87 3.98-1.01-0.17-1.8-0.68-2.27-1.44-0.46-0.74-0.56-1.66-0.29-2.52z"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.46 47.09c-0.42-1.33-1.61-2.22-3.03-2.25-3.9-0.16-7.78-2.08-10.34-5.12-1.03-1.28-2.74-1.64-4.12-0.9-1.32 0.7-1.9 2.15-1.44 3.59 0.06 0.19 0.14 0.38 0.24 0.57 0.85 1.56 1.94 2.92 3.26 4.09 3.52 3.16 8.33 4.65 12.87 3.98 1.01-0.17 1.8-0.68 2.27-1.44 0.46-0.74 0.56-1.66 0.29-2.52z"
      })
    ),
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
    )
  );
}

exports.default = Pensive;
