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

function DizzyFace(props) {
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
        id: "e",
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
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.11c14.99 0 28.86 4.95 39.03 13.93 11.1 9.79 16.97 23.61 16.97 39.96 0 16.27-5.87 30.07-16.97 39.89-10.21 9.03-24.07 14-39.03 14-15.04 0-28.9-4.91-39.04-13.82-11.1-9.75-16.96-23.61-16.96-40.07 0-16.54 5.86-30.42 16.96-40.15 10.11-8.86 23.97-13.74 39.04-13.74m0-4c-31.15 0-60 20-60 57.89 0 37.68 28.85 57.89 60 57.89s60-20.73 60-57.89c0-37.37-28.85-57.89-60-57.89z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m102.18 50.48c0.02-8.95-7.22-16.22-16.17-16.24-7.16-0.02-12.98 5.77-12.99 12.93-0.01 5.73 4.62 10.38 10.35 10.39 4.58 0.01 8.3-3.7 8.32-8.28 0.01-3.67-2.96-6.64-6.62-6.65-2.93-0.01-5.32 2.36-5.32 5.3",
      fill: "none",
      stroke: "#242424",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement("path", {
      d:
        "m30.31 33.8c-5.16 7.31-3.41 17.42 3.9 22.58 5.85 4.13 13.94 2.73 18.07-3.12 3.3-4.68 2.18-11.15-2.5-14.45-3.74-2.64-8.92-1.75-11.56 2-2.11 3-1.4 7.14 1.6 9.25 2.4 1.69 5.71 1.12 7.4-1.28",
      fill: "none",
      stroke: "#242424",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 5
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m64 64.87c-16.03 0-33.43 16.18-33.43 36.14 0 5.58 5.31 8.83 10.05 6.56 5.86-2.8 14.49-8.36 23.38-8.36s17.52 5.56 23.38 8.36c4.74 2.27 10.05-0.98 10.05-6.56 0-19.96-18.61-36.14-33.43-36.14z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 64.87c-16.03 0-33.43 16.18-33.43 36.14 0 5.58 5.31 8.83 10.05 6.56 5.86-2.8 14.49-5.62 23.38-5.62s17.52 2.81 23.38 5.62c4.74 2.27 10.05-0.98 10.05-6.56 0-19.96-18.61-36.14-33.43-36.14z",
      clipPath: "url(#a)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 78.79c11.75 0 22.65 1.84 31.26 5.2v-32.65h-62.51v32.65c8.6-3.36 19.5-5.2 31.25-5.2z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m64 78.79c11.75 0 22.65 1.84 31.26 5.2v-32.65h-62.51v32.65c8.6-3.36 19.5-5.2 31.25-5.2z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#c"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#b)"
        },
        _react2.default.createElement("path", {
          d:
            "m64 69.4c6.08 0 13.39 3.54 19.06 9.25 6.35 6.38 9.84 14.32 9.84 22.37 0 1.9-1.23 2.76-2.38 2.76-0.39 0-0.79-0.1-1.19-0.29-3.81-1.82-13.9-6.06-25.33-6.06s-21.52 4.24-25.33 6.06c-0.4 0.19-0.8 0.29-1.19 0.29-1.15 0-2.38-0.86-2.38-2.76 0-17.81 15.53-31.62 28.9-31.62m0-4.53c-16.03 0-33.43 16.18-33.43 36.14 0 4.36 3.24 7.29 6.91 7.29 1.03 0 2.1-0.23 3.14-0.73 5.86-2.8 14.49-5.62 23.38-5.62s17.52 2.81 23.38 5.62c1.04 0.5 2.11 0.73 3.14 0.73 3.67 0 6.91-2.93 6.91-7.29 0-19.96-18.61-36.14-33.43-36.14z",
          fill: "#EB8F00"
        })
      )
    )
  );
}

exports.default = DizzyFace;
