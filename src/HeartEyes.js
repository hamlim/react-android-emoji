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

function HeartEyes(props) {
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
        id: "c",
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
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.11c14.99 0 28.86 4.95 39.03 13.93 11.1 9.79 16.97 23.61 16.97 39.96 0 16.27-5.87 30.07-16.97 39.89-10.21 9.03-24.07 14-39.03 14-15.04 0-28.9-4.91-39.04-13.82-11.1-9.75-16.96-23.61-16.96-40.07 0-16.54 5.86-30.42 16.96-40.15 10.11-8.86 23.97-13.74 39.04-13.74m0-4c-31.15 0-60 20-60 57.89 0 37.68 28.85 57.89 60 57.89s60-20.73 60-57.89c0-37.37-28.85-57.89-60-57.89z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 32.34,
        cy: 68.577,
        r: 19.444,
        gradientTransform: "matrix(.9791 0 0 .877 2.0871 11.44)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0,
        offset: 0.9
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 33.75,
      cy: 71.58,
      rx: 17.5,
      ry: 16.5,
      fill: "url(#b)",
      opacity: 0.8
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 94.132,
        cy: 68.577,
        r: 19.444,
        gradientTransform: "matrix(.9791 0 0 .877 2.0871 11.44)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0,
        offset: 0.9
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 94.25,
      cy: 71.58,
      rx: 17.5,
      ry: 16.5,
      fill: "url(#a)",
      opacity: 0.8
    }),
    _react2.default.createElement("path", {
      d:
        "m63.99 82.23c-3.58 0-7.12-0.61-10.5-1.79-7.15-2.5-13.36 5.57-9.2 11.89 4.33 6.58 11.07 10.22 19.69 10.22s15.36-3.64 19.69-10.22c4.16-6.33-2.04-14.39-9.2-11.89-3.37 1.18-6.9 1.79-10.48 1.79z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m41.93 69.94c-1.03-0.26-7.31-1.9-13.83-5.16-6.06-3.03-13.69-8.18-15.7-15.5-0.81-2.9-0.42-5.93 1.08-8.56s3.95-4.53 6.9-5.36c0.97-0.28 1.98-0.42 3-0.42 2.96 0 5.87 1.17 7.98 3.21l2.47 2.39 0.86-3.33c1.01-3.91 4.08-7.01 8.03-8.11 1.03-0.31 2.06-0.46 3.09-0.46 4.99 0 9.56 3.48 10.87 8.27 3.8 13.84-13.37 31.63-14.75 33.03z",
      fill: "#CC1775"
    }),
    _react2.default.createElement("path", {
      d:
        "m45.81 30.65c4.1 0 7.87 2.86 8.95 6.8 3.16 11.5-9.9 26.46-13.45 30.25-4.98-1.4-23.83-7.43-26.99-18.97-0.66-2.37-0.34-4.86 0.9-7.03s3.27-3.74 5.72-4.43c0.79-0.22 1.62-0.34 2.45-0.34 2.45 0 4.85 0.96 6.59 2.65l4.94 4.78 1.71-6.66c0.84-3.27 3.32-5.76 6.63-6.68l0.08-0.02c0.79-0.22 1.63-0.35 2.47-0.35m0-4c-1.2 0-2.42 0.17-3.63 0.53-4.81 1.33-8.28 5.06-9.43 9.54-2.46-2.39-5.87-3.77-9.37-3.77-1.18 0-2.37 0.16-3.54 0.49-3.45 0.97-6.33 3.19-8.1 6.29s-2.23 6.68-1.28 10.09c4.24 15.49 30.01 21.84 31.11 22.11 0.13 0.03 0.27 0.05 0.41 0.05 0.13 0 0.26-0.02 0.39-0.04 0.32-0.07 0.63-0.24 0.88-0.47 0.8-0.79 19.61-19.62 15.37-35.06-1.6-5.84-7.03-9.76-12.81-9.76z",
      fill: "#B3005C"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.46 70.05c-0.72-0.7-5.36-5.29-9.41-11.44-3.74-5.68-7.81-13.98-5.93-21.32 1.25-4.9 5.84-8.46 10.92-8.46 0.97 0 1.94 0.13 2.87 0.39 4 1.03 7.13 4.09 8.21 7.98l0.92 3.31 2.43-2.43c2.12-2.13 5.08-3.35 8.12-3.35 0.95 0 1.9 0.12 2.81 0.36 2.97 0.77 5.45 2.63 7 5.24 1.55 2.6 1.99 5.64 1.24 8.54-1.88 7.37-9.43 12.65-15.43 15.78-6.52 3.4-12.81 5.15-13.75 5.4z",
      fill: "#CC1775"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.05 30.83c0.79 0 1.58 0.11 2.34 0.32l0.08 0.02c3.32 0.86 5.84 3.31 6.74 6.56l1.83 6.63 4.86-4.87c1.75-1.76 4.19-2.76 6.7-2.76 0.78 0 1.55 0.1 2.31 0.3 2.45 0.64 4.51 2.17 5.78 4.32 1.27 2.14 1.64 4.63 1.01 7.03-2.96 11.58-21.71 17.93-26.65 19.42-1.62-1.66-5.15-5.48-8.32-10.29-3.52-5.34-7.36-13.1-5.66-19.73 1.03-4.03 4.8-6.95 8.98-6.95m0-4c-5.86 0-11.34 4.04-12.85 9.96-3.98 15.52 15.15 34.01 15.97 34.79 0.25 0.23 0.56 0.39 0.88 0.46 0.12 0.02 0.24 0.04 0.36 0.04 0.15 0 0.29-0.02 0.44-0.06 1.09-0.28 26.75-7.08 30.72-22.64 0.89-3.42 0.38-6.99-1.45-10.06s-4.74-5.24-8.21-6.15c-1.1-0.29-2.21-0.43-3.32-0.43-3.58 0-7.06 1.46-9.53 3.94-1.23-4.46-4.76-8.12-9.6-9.37-1.14-0.33-2.28-0.48-3.41-0.48z",
      fill: "#B3005C"
    })
  );
}

exports.default = HeartEyes;
