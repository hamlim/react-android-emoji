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

function Grimacing(props) {
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
    _react2.default.createElement("path", {
      d:
        "M35.47,96.24c-6.6,0-11.98-5.37-11.98-11.98V83.6c0-6.6,5.37-11.98,11.98-11.98h57.06 c6.6,0,11.98,5.37,11.98,11.98v0.66c0,6.6-5.37,11.98-11.98,11.98H35.47z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m92.53 73.62c5.5 0 9.98 4.48 9.98 9.98v0.66c0 5.5-4.48 9.98-9.98 9.98h-57.06c-5.5 0-9.98-4.48-9.98-9.98v-0.66c0-5.5 4.48-9.98 9.98-9.98h57.06m0-4h-57.06c-7.69 0-13.98 6.29-13.98 13.98v0.66c0 7.69 6.29 13.98 13.98 13.98h57.06c7.69 0 13.98-6.29 13.98-13.98v-0.66c0-7.69-6.29-13.98-13.98-13.98z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m93.86 73.67c4.76 0 8.64 4.6 8.64 10.25s-3.87 10.25-8.64 10.25h-59.72c-4.76 0-8.64-4.6-8.64-10.25s3.87-10.25 8.64-10.25h59.72"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("line", {
      x1: 16.4,
      x2: 111.6,
      y1: 83.93,
      y2: 83.93,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B3B3B0",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("line", {
      x1: 37.02,
      x2: 37.02,
      y1: 68.66,
      y2: 99.19,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B3B3B0",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("line", {
      x1: 50.76,
      x2: 50.76,
      y1: 68.66,
      y2: 99.19,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B3B3B0",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("line", {
      x1: 64.51,
      x2: 64.51,
      y1: 68.66,
      y2: 99.19,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B3B3B0",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("line", {
      x1: 78.25,
      x2: 78.25,
      y1: 68.66,
      y2: 99.19,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B3B3B0",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("line", {
      x1: 92,
      x2: 92,
      y1: 68.66,
      y2: 99.19,
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#B3B3B0",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d:
        "m44.67 37.86c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m83.33 37.86c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z",
      fill: "#242424"
    })
  );
}

exports.default = Grimacing;
