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

function Ledger(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      x: 20.47,
      y: 20.27,
      width: 92.66,
      height: 103.74,
      fill: "#757575"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 68.398,
        x2: 68.398,
        y1: 4.6955,
        y2: 111.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0.0146
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 20.47,
      y: 4.25,
      width: 95.85,
      height: 106.92,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFE082"
      },
      _react2.default.createElement("path", {
        d:
          "m95.17 21.56h-46.09c-1.02 0-1.71 0.7-1.71 1.75v26.24c0 1.05 0.68 1.75 1.71 1.75h46.09c1.02 0 1.71-0.7 1.71-1.75v-26.25c-0.01-1.05-0.69-1.74-1.71-1.74zm-1.71 26.24h-42.67v-22.75h42.67v22.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.44 35.55h15.36c1.02 0 1.71-0.7 1.71-1.75s-0.68-1.75-1.71-1.75h-15.36c-1.02 0-1.71 0.7-1.71 1.75s0.69 1.75 1.71 1.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m59.32 42.55h25.6c1.02 0 1.71-0.7 1.71-1.75s-0.68-1.75-1.71-1.75h-25.6c-1.02 0-1.71 0.7-1.71 1.75s0.69 1.75 1.71 1.75z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 23.585,
        x2: 108.85,
        y1: 115.99,
        y2: 115.99,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0091529
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 23.59,
      y: 111.17,
      width: 85.27,
      height: 9.62,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "b",
        x: 20.47,
        y: 4.25,
        width: 95.85,
        height: 106.92
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
    _react2.default.createElement("rect", {
      x: 14.76,
      y: -0.03,
      width: 12.83,
      height: 128.31,
      clipPath: "url(#a)",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.65 20.27h-15.57c-1.26 0-2.29-1.03-2.29-2.29v-0.32c0-1.26 1.03-2.29 2.29-2.29h15.57c1.26 0 2.29 1.03 2.29 2.29v0.32c0 1.26-1.03 2.29-2.29 2.29z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.65 34.02h-15.57c-1.26 0-2.29-1.03-2.29-2.29v-0.32c0-1.26 1.03-2.29 2.29-2.29h15.57c1.26 0 2.29 1.03 2.29 2.29v0.32c0 1.25-1.03 2.29-2.29 2.29z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.65 47.76h-15.57c-1.26 0-2.29-1.03-2.29-2.29v-0.32c0-1.26 1.03-2.29 2.29-2.29h15.57c1.26 0 2.29 1.03 2.29 2.29v0.32c0 1.26-1.03 2.29-2.29 2.29z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.65 61.51h-15.57c-1.26 0-2.29-1.03-2.29-2.29v-0.32c0-1.26 1.03-2.29 2.29-2.29h15.57c1.26 0 2.29 1.03 2.29 2.29v0.32c0 1.26-1.03 2.29-2.29 2.29z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.65 75.25h-15.57c-1.26 0-2.29-1.03-2.29-2.29v-0.32c0-1.26 1.03-2.29 2.29-2.29h15.57c1.26 0 2.29 1.03 2.29 2.29v0.32c0 1.26-1.03 2.29-2.29 2.29z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.65 89h-15.57c-1.26 0-2.29-1.03-2.29-2.29v-0.32c0-1.26 1.03-2.29 2.29-2.29h15.57c1.26 0 2.29 1.03 2.29 2.29v0.32c0 1.26-1.03 2.29-2.29 2.29z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.65 102.75h-15.57c-1.26 0-2.29-1.03-2.29-2.29v-0.32c0-1.26 1.03-2.29 2.29-2.29h15.57c1.26 0 2.29 1.03 2.29 2.29v0.32c0 1.26-1.03 2.29-2.29 2.29z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.21 7.25v100.92h-0.2c-1.66 0-3 1.34-3 3v9.83h-86.65v-18.26c0-1.01-0.5-1.91-1.27-2.45 0.77-0.54 1.27-1.44 1.27-2.45v-8.84c0-1.01-0.5-1.91-1.27-2.45 0.77-0.54 1.27-1.44 1.27-2.45v-8.85c0-1.01-0.5-1.91-1.27-2.45 0.77-0.54 1.27-1.44 1.27-2.45v-8.85c0-1.01-0.5-1.91-1.27-2.45 0.77-0.54 1.27-1.44 1.27-2.45v-8.85c0-1.01-0.5-1.91-1.27-2.45 0.77-0.54 1.27-1.44 1.27-2.45v-8.85c0-1.01-0.5-1.91-1.27-2.45 0.77-0.54 1.27-1.44 1.27-2.45v-8.85c0-1.01-0.5-1.91-1.27-2.45 0.77-0.54 1.27-1.44 1.27-2.45v-8.1h89.85m3-3h-95.85v11.12h-6.23c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45h6.23v8.85h-6.23c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45h6.23v8.85h-6.23c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45h6.23v8.85h-6.23c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45h6.23v8.85h-6.23c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45h6.23v8.85h-6.23c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.43 2.44 2.43h6.23v8.85h-6.23c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45h6.23v21.26h92.66v-12.83h3.2v-106.93z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Ledger;
