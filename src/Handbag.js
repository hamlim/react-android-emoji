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

function Handbag(props) {
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
        id: "b",
        x1: 63.994,
        x2: 63.994,
        y1: 22.5,
        y2: 100.78,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795548",
        offset: 0.3883
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D4037",
        offset: 0.7397
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.61 104.01c1.32-2.74 1.54-5.87 0.64-8.77l-13.55-43.53c-1.78-4.64-6.23-7.71-11.21-7.71h-67.2c-4.99 0-9.46 3.09-11.22 7.76l-13.35 43.5c-0.89 2.89-0.65 6 0.66 8.72l5.26 15.9c0.81 2.46 3.11 4.12 5.7 4.12h93.33c2.59 0 4.88-1.66 5.7-4.12l5.24-15.87z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64.5,
        cy: 60.25,
        r: 67.507,
        gradientTransform: "matrix(.9899 0 0 .6777 .6545 19.418)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0.3465
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6D4C41",
        offset: 0.8653
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.18 113.92c-2.89-20.11-8.22-40.5-8.05-60.94l0.01-1.29c-0.51-4.41-3.66-7.69-7.37-7.69h-67.53c-3.71 0-6.86 3.3-7.37 7.7l0.01 1.3c0.17 20.44-4.17 40.8-7.06 60.92-0.62 5.35 1.86 10.08 6.38 10.08h84.61c4.51 0 6.99-4.72 6.37-10.08z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m97.49 47c3.67 0 7.03 2.29 8.37 5.7l13.52 43.43c0.68 2.18 0.51 4.52-0.48 6.58-0.06 0.12-0.1 0.24-0.14 0.36l-5.25 15.88c-0.41 1.23-1.55 2.06-2.85 2.06h-93.33c-1.3 0-2.44-0.83-2.85-2.06l-5.26-15.9c-0.04-0.12-0.09-0.24-0.14-0.36-0.98-2.05-1.16-4.37-0.49-6.54l13.32-43.41c1.33-3.44 4.69-5.74 8.38-5.74h67.2m0-3h-67.2c-4.99 0-9.46 3.09-11.22 7.76l-13.35 43.5c-0.89 2.89-0.65 6 0.66 8.72l5.26 15.9c0.81 2.46 3.11 4.12 5.7 4.12h93.32c2.59 0 4.88-1.66 5.7-4.12l5.25-15.88c1.32-2.74 1.54-5.87 0.64-8.77l-13.55-43.52c-1.78-4.64-6.23-7.71-11.21-7.71z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.14 71.88c-0.51-6.5-0.38-13.14 0.09-19.63 0.79-10.99 2.76-23.79 9.39-32.28 6.67-8.54 18.97-9.84 26.72-2.36 7.54 7.28 10.13 20 11.32 30.71 0.88 7.87 1.14 16.02 0.56 23.94-0.42 5.77 7.42 5.74 7.85 0 1.43-19.46-0.3-46-13.39-60.19-8.9-9.66-23.63-11.2-33.82-3.22-9.6 7.52-13.7 21.28-15.47 33.89-1.34 9.55-1.85 19.49-1.09 29.15 0.44 5.71 8.29 5.77 7.84-0.01z",
      fill: "#FFB74D"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.8 5.71c6.55 0 12.89 2.81 17.4 7.7 14.36 15.57 13.78 46.23 12.87 58.69-0.12 1.7-1.22 2.46-2.25 2.46-0.28 0-0.8-0.06-1.17-0.46-0.43-0.46-0.47-1.18-0.43-1.71 0.56-7.67 0.37-15.85-0.57-24.3-1.09-9.82-3.52-23.82-11.92-31.93-3.65-3.53-8.44-5.47-13.48-5.47-6.3 0-12.21 2.93-16.2 8.04-7.33 9.37-9.11 23.54-9.81 33.37-0.53 7.4-0.56 13.92-0.09 19.93 0.04 0.52 0 1.24-0.42 1.7-0.37 0.4-0.88 0.46-1.16 0.46-0.78 0-2.13-0.52-2.28-2.47-0.7-8.93-0.34-18.59 1.08-28.72 2.2-15.7 7.15-26.66 14.72-32.59 3.92-3.07 8.66-4.7 13.71-4.7m0-2c-5.27 0-10.53 1.67-14.94 5.13-9.6 7.52-13.7 21.28-15.47 33.89-1.34 9.55-1.85 19.49-1.09 29.15 0.23 2.87 2.31 4.31 4.28 4.31 1.96 0 3.8-1.43 3.57-4.31-0.51-6.5-0.38-13.14 0.09-19.63 0.79-10.99 2.76-23.79 9.39-32.28 3.72-4.75 9.18-7.27 14.62-7.27 4.33 0 8.66 1.59 12.09 4.91 7.54 7.28 10.13 20 11.32 30.71 0.88 7.87 1.14 16.02 0.56 23.94-0.21 2.88 1.64 4.32 3.6 4.32s4.04-1.44 4.25-4.32c1.43-19.46-0.3-46-13.39-60.19-5.06-5.49-11.98-8.36-18.88-8.36z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.63 80.17c-4.49 0-8.13-3.7-8.13-8.27l2-15.7h12.25l2 15.7c0 4.57-3.64 8.27-8.12 8.27z",
      fill: "#FFB74D"
    }),
    _react2.default.createElement("path", {
      d:
        "m92.38 80.17c-4.49 0-8.13-3.7-8.13-8.27l2-15.7h12.25l2 15.7c0 4.57-3.64 8.27-8.12 8.27z",
      fill: "#FFB74D"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m40.99 58.2 1.76 13.82c-0.06 3.4-2.79 6.15-6.12 6.15s-6.06-2.75-6.12-6.15l1.76-13.82h8.72m1.76-2h-12.25l-2 15.7c0 4.57 3.64 8.27 8.12 8.27 4.49 0 8.12-3.7 8.12-8.27l-1.99-15.7z",
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
          "m96.74 58.2 1.76 13.82c-0.06 3.4-2.79 6.15-6.12 6.15s-6.06-2.75-6.12-6.15l1.76-13.82h8.72m1.76-2h-12.25l-2 15.7c0 4.57 3.64 8.27 8.12 8.27 4.49 0 8.12-3.7 8.12-8.27l-1.99-15.7z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Handbag;
