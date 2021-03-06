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

function Ambulance(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m58 52.39c-3.3 0-6-2.7-6-6v-12.34c0-3.3 2.7-6 6-6s6 2.7 6 6v12.35c0 3.29-2.7 5.99-6 5.99z",
      fill: "#E53935"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m58 30.05c2.21 0 4 1.79 4 4v12.35c0 2.21-1.79 4-4 4s-4-1.79-4-4v-12.35c0-2.21 1.79-4 4-4m0-2c-3.3 0-6 2.7-6 6v12.35c0 3.3 2.7 6 6 6s6-2.7 6-6v-12.35c0-3.3-2.7-6-6-6z",
        fill: "#C62828"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.01 39.99h-14.02c-2.2 0-4 1.8-4 4v0.05c0 2.2 1.8 4 4 4h14.01c2.2 0 4-1.8 4-4v-0.05c0.01-2.2-1.79-4-3.99-4z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.01 41.99c1.1 0 2 0.9 2 2v0.05c0 1.1-0.9 2-2 2h-14.02c-1.1 0-2-0.9-2-2v-0.05c0-1.1 0.9-2 2-2h14.02m0-2h-14.02c-2.2 0-4 1.8-4 4v0.05c0 2.2 1.8 4 4 4h14.01c2.2 0 4-1.8 4-4v-0.05c0.01-2.2-1.79-4-3.99-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.118,
        x2: 64.118,
        y1: 47,
        y2: 113.05,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0051299
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.2817
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.5766
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124.04 80.62c-1.07-5.09-5.06-23.67-6.9-32.26-0.56-2.6-2.48-4.41-4.69-4.41-6.31 0.01-18.11 0.02-19.54 0.02h-51.88c-0.72 0-3.01-0.01-4.83 2.03-5.54 6.21-14.76 24.11-16.2 25.94-0.1 0.12-7.38 2.7-10.7 4.69-1.31 0.79-2.05 2.5-2.24 4.26l-2.9 24.48c-0.75 4.83 2 6.84 6.32 6.84h107.71c3.3 0 6-0.94 6-6.84v-23.29c0-0.49-0.05-0.98-0.15-1.46z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m124.04 80.56c-1.07-5.08-5.06-23.61-6.9-32.18-0.56-2.6-2.48-4.4-4.69-4.4-6.31 0.01-18.11 0.02-19.54 0.02h-51.88c-0.72 0-3.01-0.01-4.83 2.03-5.54 6.19-14.76 24.09-16.2 25.91-0.1 0.12-7.38 2.66-10.7 4.64-1.31 0.79-2.05 2.49-2.24 4.25l-2.9 24.42c-0.75 4.82 2 6.83 6.32 6.83h107.71c3.3 0 6-0.93 6-6.83v-23.23c0-0.49-0.05-0.98-0.15-1.46z"
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
      x: 2.62,
      y: 84,
      width: 124.12,
      height: 16.12,
      clipPath: "url(#a)",
      fill: "#E53935"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m14.67 95.96h-12.67c-1.1 0-2-0.9-2-2v-4.17c0-1.1 0.9-2 2-2h13.67c1.1 0 2 0.9 2 2l-1 4.17c0 1.11-0.9 2-2 2z",
        fill: "#FFEE58"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.56 55.98h26.09c1.37 0 2.48 1.11 2.48 2.48v15.05c0 1.37-1.11 2.48-2.48 2.48h-35.42c-2.08 0-3.23-2.4-1.93-4.02l9.32-15.05c0.47-0.59 1.18-0.94 1.94-0.94z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("polygon", {
      points:
        "108 61 98 61 98 51 90 51 90 61 80 61 80 69 90 69 90 79 98 79 98 69 108 69",
      fill: "#fff",
      stroke: "#E53935",
      strokeMiterlimit: 10,
      strokeWidth: 1.5
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112.45 46.96c0.75 0 1.51 0.88 1.76 2.04 1.71 7.98 5.82 27.11 6.9 32.25 0.06 0.27 0.09 0.56 0.09 0.85v23.29c0 1.7-0.28 2.97-0.76 3.4-0.33 0.29-1.08 0.44-2.24 0.44h-107.71c-1.48 0-2.59-0.31-3.05-0.84-0.52-0.61-0.42-1.85-0.31-2.54 0.01-0.04 0.01-0.07 0.02-0.11l2.9-24.52c0.12-1.12 0.54-1.85 0.8-2 2.24-1.35 6.76-3.1 8.93-3.94 1.7-0.66 2.05-0.8 2.58-1.47 0.56-0.71 1.47-2.31 3.47-5.85 3.36-5.96 8.99-15.91 12.6-19.96 0.81-0.91 1.75-1.03 2.59-1.03h51.88c0.89 0 5.77 0 10.86-0.01h8.69m0-3c-6.31 0.01-18.11 0.02-19.54 0.02h-51.88-0.03c-0.74 0-3.01 0.01-4.81 2.03-5.53 6.2-14.75 24.1-16.19 25.93-0.1 0.12-7.38 2.7-10.7 4.69-1.31 0.79-2.05 2.5-2.24 4.26l-2.9 24.48c-0.75 4.83 2 6.84 6.32 6.84h107.71c3.3 0 6-0.94 6-6.84v-23.28c0-0.49-0.05-0.98-0.15-1.46-1.07-5.09-5.06-23.67-6.9-32.26-0.56-2.61-2.48-4.41-4.69-4.41z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.65 57.98c0.26 0 0.48 0.21 0.48 0.48v15.05c0 0.26-0.21 0.48-0.48 0.48h-35.42c-0.25 0-0.37-0.15-0.43-0.27s-0.1-0.31 0.06-0.51c0.05-0.06 0.1-0.13 0.14-0.2l9.23-14.9c0.09-0.08 0.2-0.13 0.32-0.13h26.1m0-2h-26.09c-0.75 0-1.46 0.34-1.93 0.93l-9.33 15.05c-1.3 1.62-0.14 4.02 1.93 4.02h35.41c1.37 0 2.48-1.11 2.48-2.48v-15.04c0-1.37-1.1-2.48-2.47-2.48z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 26.09,
      cy: 114.02,
      r: 10,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26.09 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 26.09,
      cy: 114.02,
      r: 5.65,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 106.19,
      cy: 114.02,
      r: 10,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m106.19 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 106.19,
      cy: 114.02,
      r: 5.65,
      fill: "#BDBDBD"
    })
  );
}

exports.default = Ambulance;
