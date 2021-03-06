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

function StarStruck(props) {
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
    _react2.default.createElement(
      "g",
      {
        fill: "#CC1775",
        stroke: "#B3005C",
        strokeMiterlimit: 10,
        strokeWidth: 4
      },
      _react2.default.createElement("path", {
        d:
          "m32.08 17.13 8.06 10.7c0.4 0.53 1.03 0.82 1.68 0.79l13.38-0.57c1.66-0.07 2.67 1.79 1.72 3.15l-7.69 10.97c-0.38 0.54-0.47 1.23-0.24 1.85l4.68 12.55c0.58 1.55-0.87 3.1-2.46 2.61l-12.81-3.92c-0.63-0.19-1.31-0.06-1.83 0.35l-10.47 8.32c-1.3 1.03-3.21 0.13-3.24-1.53l-0.23-13.4c-0.01-0.66-0.35-1.27-0.89-1.63l-11.16-7.4c-1.38-0.92-1.11-3.02 0.45-3.56l12.67-4.36c0.62-0.21 1.1-0.72 1.28-1.36l3.59-12.9c0.43-1.59 2.51-1.99 3.51-0.66z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.92 17.13-8.06 10.7c-0.4 0.53-1.03 0.82-1.68 0.79l-13.38-0.57c-1.66-0.07-2.67 1.79-1.72 3.15l7.69 10.97c0.38 0.54 0.47 1.23 0.24 1.85l-4.68 12.55c-0.58 1.55 0.87 3.1 2.46 2.61l12.81-3.92c0.63-0.19 1.31-0.06 1.83 0.35l10.49 8.33c1.3 1.03 3.21 0.13 3.24-1.53l0.21-13.41c0.01-0.66 0.35-1.27 0.89-1.63l11.16-7.4c1.38-0.92 1.11-3.02-0.45-3.56l-12.67-4.36c-0.62-0.21-1.1-0.72-1.28-1.36l-3.59-12.9c-0.43-1.59-2.51-1.99-3.51-0.66z"
      })
    )
  );
}

exports.default = StarStruck;
