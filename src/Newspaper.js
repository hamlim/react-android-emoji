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

function Newspaper(props) {
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
        x1: 66.768,
        x2: 66.768,
        y1: 19.597,
        y2: 109.34,
        gradientTransform: "matrix(1.014 .0779 -.073 .9502 5.2752 -3.2297)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B4B4B5",
        offset: 0.00697
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B2B2B3",
        offset: 0.3655
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AAA9AA",
        offset: 0.569
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9C9C9D",
        offset: 0.7338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#898889",
        offset: 0.8768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#717071",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.64 109.85-101.3-7.78c-1.65-0.13-2.89-1.57-2.76-3.22l6.13-79.77c0.13-1.65 1.57-2.89 3.22-2.76l101.3 7.78c1.65 0.13 2.89 1.57 2.76 3.22l-6.13 79.77c-0.13 1.65-1.57 2.88-3.22 2.76z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 62.139,
        x2: 62.139,
        y1: 21.91,
        y2: 111.65,
        gradientTransform: "matrix(1.0143 -.0736 .069 .9505 -5.5652 5.9519)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EEEEEF",
        offset: 0.0117
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECECED",
        offset: 0.3072
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E3E4",
        offset: 0.475
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D6D6D7",
        offset: 0.6108
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C2C2C3",
        offset: 0.7295
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9A8A9",
        offset: 0.8369
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8A898A",
        offset: 0.9349
      }),
      _react2.default.createElement("stop", {
        stopColor: "#717071",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.84 103.92-101.33 7.36c-1.65 0.12-3.09-1.12-3.21-2.77l-5.8-79.81c-0.12-1.65 1.12-3.09 2.77-3.21l101.33-7.36c1.65-0.12 3.09 1.12 3.21 2.77l5.79 79.8c0.13 1.66-1.11 3.1-2.76 3.22z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.978,
        x2: 63.978,
        y1: 16.623,
        y2: 106.36,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EEEEEF",
        offset: 0.005936
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECECED",
        offset: 0.3475
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3E3E4",
        offset: 0.5414
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D6D6D7",
        offset: 0.6982
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C2C2C3",
        offset: 0.8353
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A8A8A9",
        offset: 0.9583
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.88 106.46h-99.8c-1.66 0-3-1.34-3-3v-84.25c0-1.66 1.34-3 3-3h99.8c1.66 0 3 1.34 3 3v84.25c0 1.66-1.34 3-3 3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m114.28 19.73c0.07 0 0.12 0.05 0.12 0.12v4.35c0 1.57 1.21 2.87 2.77 2.99l5.22 0.4c0.02 0 0.05 0 0.08 0.04s0.03 0.07 0.03 0.09l-6.11 79.53c-0.01 0.08-0.07 0.11-0.13 0.11l-39.48-3.03c-0.08-0.01-0.15-0.01-0.23-0.01-0.07 0-0.14 0-0.22 0.01l-61.42 4.46c-0.04 0-0.11-0.04-0.12-0.11l-5.76-79.56c0-0.07 0.05-0.12 0.11-0.13l2.68-0.19c1.57-0.11 2.78-1.42 2.78-2.99v-5.95c0-0.07 0.05-0.12 0.12-0.12h99.56m0-3.01h-99.56c-1.72 0-3.12 1.4-3.12 3.12v5.95l-2.68 0.2c-1.72 0.12-3.01 1.62-2.89 3.34l5.77 79.56c0.12 1.64 1.49 2.89 3.11 2.89 0.08 0 0.15 0 0.23-0.01l61.41-4.46 39.48 3.03c0.08 0.01 0.16 0.01 0.24 0.01 1.61 0 2.98-1.24 3.11-2.88l6.11-79.53c0.13-1.72-1.15-3.22-2.87-3.35l-5.22-0.4v-4.35c0-1.72-1.4-3.12-3.12-3.12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.56 44h-16.26c-0.55 0-1-0.45-1-1v-12.92c0-0.55 0.45-1 1-1h16.26c0.55 0 1 0.45 1 1v12.92c0 0.55-0.44 1-1 1z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.94 44h-16.27c-0.55 0-1-0.45-1-1v-12.92c0-0.55 0.45-1 1-1h16.26c0.55 0 1 0.45 1 1v12.92c0.01 0.55-0.44 1-0.99 1z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.31 44h-16.27c-0.55 0-1-0.45-1-1v-12.92c0-0.55 0.45-1 1-1h16.26c0.55 0 1 0.45 1 1v12.92c0.01 0.55-0.44 1-0.99 1z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m107.13 51.99h-85.85c-1.09 0-1.98-0.89-1.98-1.98v-0.16c0-1.09 0.89-1.98 1.98-1.98h85.85c1.09 0 1.98 0.89 1.98 1.98v0.16c0 1.1-0.89 1.98-1.98 1.98z",
      fill: "#B4B4B5"
    }),
    _react2.default.createElement("path", {
      d:
        "m44.6 93.29h-23.3c-1.1 0-2-0.9-2-2v-32.66c0-1.1 0.9-2 2-2h23.3c1.1 0 2 0.9 2 2v32.66c0 1.11-0.89 2-2 2z",
      fill: "#757575"
    }),
    _react2.default.createElement("line", {
      x1: 50.72,
      x2: 107.13,
      y1: 58.95,
      y2: 58.95,
      fill: "none",
      stroke: "#757575",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9813
    }),
    _react2.default.createElement("line", {
      x1: 50.72,
      x2: 107.13,
      y1: 67.19,
      y2: 67.19,
      fill: "none",
      stroke: "#757575",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9813
    }),
    _react2.default.createElement("line", {
      x1: 84.98,
      x2: 108.68,
      y1: 31.9,
      y2: 31.9,
      fill: "none",
      stroke: "#B4B4B5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9813
    }),
    _react2.default.createElement("line", {
      x1: 84.98,
      x2: 108.68,
      y1: 40.15,
      y2: 40.15,
      fill: "none",
      stroke: "#B4B4B5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9813
    }),
    _react2.default.createElement("line", {
      x1: 50.72,
      x2: 107.13,
      y1: 75.43,
      y2: 75.43,
      fill: "none",
      stroke: "#757575",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9813
    }),
    _react2.default.createElement("line", {
      x1: 50.72,
      x2: 107.13,
      y1: 83.68,
      y2: 83.68,
      fill: "none",
      stroke: "#757575",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9813
    }),
    _react2.default.createElement("line", {
      x1: 50.72,
      x2: 107.13,
      y1: 91.92,
      y2: 91.92,
      fill: "none",
      stroke: "#757575",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9813
    })
  );
}

exports.default = Newspaper;
