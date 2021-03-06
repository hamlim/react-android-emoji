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

function SneezingFace(props) {
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
        y1: 20.016,
        y2: 107.28,
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
        "m64 119.37c-27.71 0-57.53-17.35-57.53-55.44 0-38.08 29.82-55.43 57.53-55.43 15.35 0 29.57 5.08 40.03 14.31 11.45 10.1 17.5 24.32 17.5 41.12 0 16.73-6.05 30.92-17.5 41.05-10.49 9.28-24.7 14.39-40.03 14.39z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.5c14.87 0 28.61 4.91 38.71 13.81 11 9.71 16.82 23.41 16.82 39.62 0 16.14-5.82 29.81-16.82 39.55-10.12 8.95-23.86 13.89-38.7 13.89-14.91 0-28.66-4.87-38.71-13.7-11.01-9.67-16.83-23.41-16.83-39.73 0-16.4 5.81-30.16 16.81-39.81 10.03-8.79 23.78-13.63 38.72-13.63m0-4c-30.91 0-59.53 19.85-59.53 57.44 0 37.39 28.62 57.44 59.53 57.44 30.9 0 59.53-20.56 59.53-57.44 0-37.08-28.62-57.44-59.53-57.44z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 64.25,
        cy: 59.874,
        r: 49.754,
        gradientTransform: "matrix(1 0 0 .7307 0 17.412)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        offset: 0.19
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0.1191,
        offset: 0.8154
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0,
        offset: 0.9
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.25,
      cy: 61.16,
      rx: 45.83,
      ry: 35.13,
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m43.95 95.26c-7.29 0-13.19-6.71-13.19-14.98s5.91-14.98 13.19-14.98h40.12c7.29 0 13.19 6.71 13.19 14.98s-5.91 14.98-13.19 14.98h-40.12z",
      fill: "#242424"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.541,
        x2: 63.541,
        y1: 55.523,
        y2: 125.34,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.3913
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9F9F9",
        offset: 0.5103
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8E8E8",
        offset: 0.6689
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CDCDCD",
        offset: 0.8489
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0B0B0",
        offset: 0.9993
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m32.59 124.33c3.42 0 7.72-4.05 14.39-4.04s9.73 4.04 16.65 4.04c6.85 0 9.87-4.02 16.47-4.02 8.24 0.01 10.99 4.02 14.41 4.02 1.71 0 3.11-1 2.79-2l-15.1-47.33c-8.66-27.13-29.18-28.25-37.65-0.72l-14.77 48.02c-0.3 1.02 1.1 2.03 2.81 2.03z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m32.59 124.33c3.42 0 7.72-4.05 14.39-4.04s9.73 4.04 16.65 4.04c6.85 0 9.87-4.02 16.47-4.02 8.24 0.01 10.99 4.02 14.41 4.02 1.71 0 3.11-1 2.79-2l-15.1-47.33c-8.66-27.13-29.18-28.25-37.65-0.72l-14.77 48.02c-0.3 1.02 1.1 2.03 2.81 2.03z",
      fill: "none",
      stroke: "#A1A1A1",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d: "m57.5 73.75c1.16 11.92-1.18 24.15-6.64 34.8",
      fill: "none",
      stroke: "#BDBDBD",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement("path", {
      d: "m78.25 114.5c-3.5-4.33-5.58-11.83-6.25-22.5",
      fill: "none",
      stroke: "#BDBDBD",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("path", {
      d:
        "m33.19 48.05 12.17-2.36-12.55-5.21c-0.14-0.07-0.28-0.15-0.42-0.23-2.61-1.6-3.06-4.89-0.72-6.93 1.81-1.58 4.76-1.6 6.88-0.3 4.98 3.05 16.7 10.24 21.27 13.04 0.82 0.5 0.7 1.58-0.22 1.93l-22.91 8.6c-0.15 0.06-0.32 0.11-0.48 0.16-3.03 0.84-6.32-0.89-6.79-3.78-0.35-2.2 1.35-4.25 3.77-4.92z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m95.81 47.8-12.17-2.36 12.55-5.21c0.14-0.07 0.28-0.15 0.42-0.23 2.61-1.6 3.06-4.89 0.72-6.93-1.81-1.58-4.76-1.6-6.88-0.3-4.98 3.05-16.7 10.24-21.27 13.04-0.82 0.5-0.7 1.58 0.22 1.93l22.91 8.6c0.15 0.06 0.32 0.11 0.48 0.16 3.03 0.84 6.32-0.89 6.79-3.78 0.35-2.2-1.35-4.25-3.77-4.92z",
      fill: "#242424"
    })
  );
}

exports.default = SneezingFace;
