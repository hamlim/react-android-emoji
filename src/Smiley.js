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

function Smiley(props) {
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
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.11c14.99 0 28.86 4.95 39.03 13.93 11.1 9.79 16.97 23.61 16.97 39.96 0 16.27-5.87 30.07-16.97 39.89-10.21 9.03-24.07 14-39.03 14-15.04 0-28.9-4.91-39.04-13.82-11.1-9.75-16.96-23.61-16.96-40.07 0-16.54 5.86-30.42 16.96-40.15 10.11-8.86 23.97-13.74 39.04-13.74m0-4c-31.15 0-60 20-60 57.89 0 37.68 28.85 57.89 60 57.89s60-20.73 60-57.89c0-37.37-28.85-57.89-60-57.89z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m63.47 62.53c-15.71 0-30.31-1.32-42.49-3.57-3.02-0.56-5.69 2.1-5.08 5.11 4.04 19.81 23.55 36.08 47.55 36.08 26.27 0 43.94-16.8 47.61-36.15 0.57-2.99-2.1-5.6-5.09-5.04-12.18 2.25-26.78 3.57-42.5 3.57z"
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
        "m63.47 62.53c-15.71 0-30.31-1.32-42.49-3.57-3.02-0.56-5.69 2.1-5.08 5.11 4.04 19.81 23.55 36.08 47.55 36.08 26.27 0 43.94-16.8 47.61-36.15 0.57-2.99-2.1-5.6-5.09-5.04-12.18 2.25-26.78 3.57-42.5 3.57z",
      clipPath: "url(#a)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "M116.72,61.38V46.49H10.24v14.89C26.61,71,44.6,76.35,63.48,76.35 S100.34,71,116.72,61.38z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.48 86.42c-11.78 0-22.05 6.42-27.53 15.95 7.12 3.89 16.83 6.29 27.53 6.29s20.41-2.4 27.53-6.29c-5.48-9.53-15.75-15.95-27.53-15.95z",
      clipPath: "url(#a)",
      fill: "#ED7770"
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
            "m10.24 46.49v14.89c16.38 9.62 34.36 14.97 53.24 14.97s36.86-5.35 53.24-14.97v-14.89h-106.48zm53.24 39.93c-11.78 0-22.05 6.42-27.53 15.95 7.12 3.89 16.83 6.29 27.53 6.29 10.71 0 20.41-2.4 27.53-6.29-5.48-9.53-15.75-15.95-27.53-15.95z"
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
            "m106.79 63.09c0.07 0 0.14 0.07 0.14 0.12-1.68 8.85-6.6 16.96-13.85 22.84-7.97 6.46-18.21 9.88-29.63 9.88-10.46 0-20.64-3.45-28.67-9.72-7.72-6.03-12.96-14.19-14.76-23.02 0.01-0.02 0.07-0.1 0.18-0.1h0.01c12.86 2.38 27.82 3.64 43.26 3.64s30.41-1.26 43.28-3.65c0.01 0.01 0.03 0.01 0.04 0.01m0-4.21c-0.27 0-0.54 0.02-0.81 0.08-12.18 2.26-26.79 3.58-42.51 3.58-15.71 0-30.31-1.32-42.49-3.57-0.27-0.05-0.54-0.08-0.81-0.08-2.67 0-4.83 2.44-4.27 5.18 4.04 19.81 23.55 36.08 47.55 36.08 26.27 0 43.94-16.8 47.61-36.15 0.52-2.72-1.63-5.12-4.27-5.12z",
          fill: "#EB8F00"
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "m83.65 23.62c3.8 0 7.26 5.64 7.26 15s-3.46 15-7.26 15-7.26-5.64-7.26-15 3.46-15 7.26-15z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m44.27 23.62c-4.06 0-7.74 5.64-7.74 15s3.69 15 7.74 15c4.06 0 7.74-5.64 7.74-15s-3.68-15-7.74-15z",
      fill: "#242424"
    })
  );
}

exports.default = Smiley;
