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

function GameDie(props) {
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
      "linearGradient",
      {
        id: "c",
        x1: 12.168,
        x2: 63.893,
        y1: 78.848,
        y2: 78.848,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.89 123.6 12.17 93.84 12.17 34.09 63.89 64.17",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.736,
        x2: 115.83,
        y1: 78.855,
        y2: 78.855,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "115.83 93.84 63.93 123.62 63.74 64.17 115.83 34.09",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 12.247,
        x2: 115.81,
        y1: 34.274,
        y2: 34.274,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.89 64.17 12.25 34.12 63.89 4.38 115.81 34.12",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#4D4D4D"
      },
      _react2.default.createElement("path", {
        d:
          "m41.6 28.06c-4.84 0-8.36 2.34-8.36 5.57s3.52 5.57 8.36 5.57 8.36-2.34 8.36-5.57-3.52-5.57-8.36-5.57z"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.19 39.2c4.84 0 8.36-2.34 8.36-5.57s-3.52-5.57-8.36-5.57-8.36 2.34-8.36 5.57 3.51 5.57 8.36 5.57z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.89 39.2c-4.84 0-8.36 2.34-8.36 5.57s3.52 5.57 8.36 5.57 8.36-2.34 8.36-5.57-3.51-5.57-8.36-5.57z"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.53 22.48c0 3.23 3.52 5.57 8.36 5.57s8.36-2.34 8.36-5.57-3.52-5.57-8.36-5.57-8.36 2.34-8.36 5.57z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#4D4D4D"
      },
      _react2.default.createElement("path", {
        d:
          "m109.67 60.64c2.52-4.36 2.23-8.73-0.67-10.41s-6.84 0.27-9.35 4.62c-2.52 4.36-2.23 8.73 0.67 10.41s6.84-0.26 9.35-4.62z"
      }),
      _react2.default.createElement("path", {
        d:
          "m76.5 94.94c-2.52 4.36-2.23 8.73 0.67 10.41s6.84-0.27 9.35-4.62 2.23-8.73-0.67-10.41-6.83 0.27-9.35 4.62z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m32.15 82.24c2.95 5.11 7.56 7.39 10.97 5.42s3.74-7.1 0.79-12.21-7.56-7.39-10.97-5.42-3.74 7.1-0.79 12.21z",
      fill: "#DB0000"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.08 7.84 48.92 28.02v56.24l-48.95 28.08-49.05-28.08v-56.14l49.08-28.12m0-3.46-51.9 29.74-0.18-0.03v59.75l52 29.77 0.07 0.01 51.93-29.78v-59.75l-0.02 0.02-51.9-29.73z",
        fill: "#424242"
      })
    )
  );
}

exports.default = GameDie;
