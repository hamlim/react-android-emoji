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

function Alien(props) {
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
      "radialGradient",
      {
        id: "c",
        cx: 64.538,
        cy: 47.344,
        r: 55.854,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.0267 1.0561e-13 113.15 -17.194)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8ECEE",
        offset: 0.1864
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DCE2E6",
        offset: 0.3692
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9D2D7",
        offset: 0.5506
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ADBCC3",
        offset: 0.73
      }),
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 0.8805
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 4.55c-27.76 0-56 23.51-56 51.27s44.33 67.68 56.17 67.68c13.17 0 55.83-39.92 55.83-67.68s-28.24-51.27-56-51.27z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 8.55c12.55 0 25.58 5.18 35.76 14.21 10.32 9.17 16.24 21.22 16.24 33.06 0 11.02-8.2 26.55-21.93 41.55-12.51 13.67-25.27 22.13-29.9 22.13-3.64 0-16.27-7.89-29.6-22.16-14.34-15.36-22.57-30.49-22.57-41.52 0-11.84 5.92-23.89 16.24-33.05 10.18-9.03 23.21-14.22 35.76-14.22m0-4c-27.76 0-56 23.51-56 51.27s44.33 67.68 56.17 67.68c13.17 0 55.83-39.92 55.83-67.68s-28.24-51.27-56-51.27z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 36.576,
        x2: 36.576,
        y1: 81.167,
        y2: 45.665,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#414042",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29292A",
        offset: 0.3436
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m54.05 81.56c-2.99 3.89-17.71 3.89-28.85-6.36-10.1-9.29-9.46-25.64-6.13-28.94 3.33-3.31 19.19-3.38 28.85 6.36 9.66 9.75 9.8 25.3 6.13 28.94z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 91.364,
        x2: 91.364,
        y1: 83.167,
        y2: 47.642,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#414042",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29292A",
        offset: 0.3436
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80.08 52.58c9.66-9.69 25.52-9.61 28.85-6.32 3.33 3.28 3.53 19.11-6.13 28.8-9.67 9.69-25.16 9.95-28.85 6.32-3.67-3.63-3.53-19.1 6.13-28.8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 102.35c-9.37 0-16.06-5.52-18.07-8.58-0.78-1.18-0.93-2.47-0.41-3.43 0.39-0.73 1.11-1.15 1.97-1.15 0.29 0 0.58 0.05 0.88 0.14 4.72 1.48 8.85 3.63 15.63 3.63 6.85 0 10.92-2.15 15.63-3.63 0.3-0.1 0.6-0.14 0.89-0.14 0.86 0 1.57 0.42 1.97 1.15 0.52 0.97 0.37 2.25-0.41 3.43-2.02 3.06-8.71 8.58-18.08 8.58z",
      fill: "#242424"
    })
  );
}

exports.default = Alien;
