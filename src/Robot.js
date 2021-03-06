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

function Robot(props) {
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
    _react2.default.createElement("path", {
      d:
        "M12.53,106.01c-3.46,0-6.28-2.82-6.28-6.29V61.34c0-3.46,2.82-6.28,6.28-6.28h3.55v50.96H12.53z",
      fill: "#F15A24"
    }),
    _react2.default.createElement("path", {
      d:
        "m14.08 57.05v46.96h-1.55c-2.36 0-4.28-1.93-4.28-4.29v-38.38c0-2.36 1.92-4.28 4.28-4.28h1.55m4-4.01h-5.55c-4.57 0-8.28 3.72-8.28 8.28v38.38c0 4.57 3.72 8.29 8.28 8.29h5.55v-54.95z",
      fill: "#C1272D"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.17 106.01v-50.96h3.55c3.46 0 6.28 2.82 6.28 6.28v38.38c0 3.47-2.82 6.29-6.28 6.29h-3.55z",
      fill: "#F15A24"
    }),
    _react2.default.createElement("path", {
      d:
        "m115.72 57.05c2.36 0 4.28 1.92 4.28 4.28v38.38c0 2.37-1.92 4.29-4.28 4.29h-1.55v-46.95h1.55m0-4h-5.55v54.96h5.55c4.56 0 8.28-3.72 8.28-8.29v-38.38c0-4.57-3.71-8.29-8.28-8.29z",
      fill: "#C1272D"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.059,
        x2: 64.059,
        y1: 15.275,
        y2: 119.02,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0.00056691
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B2C2CB",
        offset: 0.1775
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B4C9D4",
        offset: 0.3161
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8AA6B3",
        offset: 0.6614
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7795A3",
        offset: 0.8649
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M22.78,122c-3.21,0-5.82-2.58-5.82-5.76V44.46c0-3.17,2.61-5.75,5.82-5.75h40.16V21.8 l-1.38-0.45c-3.18-1.05-5.31-3.96-5.31-7.26c0-4.22,3.47-7.65,7.75-7.65c4.27,0,7.74,3.43,7.74,7.65c0,3.3-2.14,6.21-5.31,7.26 l-1.38,0.45v16.9l40.17-0.01c3.21,0,5.83,2.58,5.83,5.75l0.12,9.98v52.43h-0.12v9.37c0,3.18-2.61,5.76-5.83,5.76H22.78z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 8.44c3.17 0 5.74 2.54 5.74 5.65 0 2.43-1.58 4.59-3.94 5.36l-1.81 0.59-1.81-0.59c-2.36-0.78-3.94-2.93-3.94-5.36 0.01-3.12 2.59-5.65 5.76-5.65m41.22 32.26c2.11 0 3.82 1.68 3.83 3.8l0.12 9.91v50.46h-0.12v11.37c0 2.07-1.72 3.76-3.82 3.76h-82.45c-2.11 0-3.82-1.69-3.82-3.76v-71.78c0-2.07 1.72-3.75 3.82-3.75h40.27 4l38.17-0.01m-41.22-36.26c-5.37 0-9.75 4.33-9.75 9.65 0 4.26 2.81 7.88 6.69 9.16v13.46h-38.16c-4.32 0-7.82 3.48-7.82 7.75v71.78c0 4.28 3.51 7.76 7.82 7.76h82.45c4.32 0 7.82-3.48 7.82-7.76v-7.37h0.12v-54.46l-0.12-9.96c0-4.28-3.52-7.75-7.82-7.75l-38.17 0.01v-13.46c3.88-1.28 6.69-4.9 6.69-9.16-0.01-5.32-4.39-9.65-9.75-9.65z",
      fill: "#658CA1"
    }),
    _react2.default.createElement("circle", {
      cx: 42.64,
      cy: 66.81,
      r: 11.5,
      fill: "#fff",
      stroke: "#666",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d:
        "m84.95 55.28c-6.34 0-11.5 5.16-11.5 11.5s5.16 11.5 11.5 11.5 11.5-5.16 11.5-11.5c0-6.35-5.15-11.5-11.5-11.5z",
      fill: "#fff",
      stroke: "#666",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d:
        "m83.85 107.55h-39.7c-3.46 0-6.27-2.81-6.27-6.27v-0.56c0-3.46 2.81-6.27 6.27-6.27h39.71c3.46 0 6.27 2.81 6.27 6.27v0.56c-0.01 3.47-2.81 6.27-6.28 6.27z",
      fill: "#fff",
      stroke: "#666",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#666",
        stroke: "#666",
        strokeMiterlimit: 10,
        strokeWidth: 0.7282
      },
      _react2.default.createElement("rect", {
        x: 53.67,
        y: 95.21,
        width: 1.36,
        height: 11.98
      }),
      _react2.default.createElement("rect", {
        x: 63.32,
        y: 95.21,
        width: 1.36,
        height: 11.98
      }),
      _react2.default.createElement("rect", {
        x: 72.97,
        y: 95.21,
        width: 1.36,
        height: 11.98
      }),
      _react2.default.createElement("rect", {
        x: 82.62,
        y: 95.21,
        width: 1.36,
        height: 11.98
      }),
      _react2.default.createElement("rect", {
        x: 44.02,
        y: 95.19,
        width: 1.36,
        height: 11.99
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 17.99c-2.22 0-4.03-1.81-4.03-4.03s1.81-4.02 4.03-4.02 4.03 1.81 4.03 4.03-1.81 4.02-4.03 4.02z",
      fill: "#FF5252"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.67 86.83c-0.88 0-1.67-0.45-2.13-1.19-0.46-0.75-0.5-1.66-0.1-2.44l2.74-5.41 2.6-4.82c0.44-0.81 1.28-1.31 2.2-1.31 0.93 0 1.78 0.51 2.22 1.34l5.32 10.17c0.41 0.78 0.38 1.7-0.08 2.45s-1.26 1.21-2.14 1.21h-10.63z",
      fill: "#FF5252"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.99 73.16c0.35 0 0.7 0.18 0.89 0.54l2.61 4.98 2.71 5.19c0.35 0.67-0.13 1.46-0.89 1.46h-10.64c-0.75 0-1.23-0.79-0.89-1.45l2.74-5.41 2.59-4.79c0.19-0.34 0.53-0.52 0.88-0.52m0-3c-1.47 0-2.82 0.8-3.52 2.1l-2.59 4.79-0.04 0.06-2.74 5.41c-0.63 1.25-0.57 2.71 0.16 3.9s2.01 1.91 3.41 1.91h10.64c1.41 0 2.69-0.72 3.42-1.93s0.78-2.68 0.12-3.93l-2.71-5.19-2.61-4.98c-0.69-1.32-2.05-2.14-3.54-2.14z",
      fill: "#C1272D"
    })
  );
}

exports.default = Robot;
