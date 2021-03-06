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

function Minibus(props) {
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
        x1: 64.118,
        x2: 64.118,
        y1: 45.755,
        y2: 111.76,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F1F1F1",
        offset: 0.2577
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.5324
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CFCFCF",
        offset: 0.8141
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9943
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124.04 80.38c-1.07-5.09-5.06-23.67-6.9-32.26-0.56-2.6-2.48-4.41-4.69-4.41-6.31 0.01-18.11 0.02-19.54 0.02h-51.88c-0.72 0-3.01-0.01-4.83 2.03-5.54 6.21-14.76 24.11-16.2 25.93-0.1 0.12-7.38 2.7-10.7 4.69-1.31 0.79-2.05 2.5-2.24 4.26l-2.9 24.48c-0.75 4.83 2 6.84 6.32 6.84h107.71c3.3 0 6-0.94 6-6.84v-23.29c0-0.48-0.05-0.97-0.15-1.45z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("polygon", {
      points: "124.19 99.88 4.76 99.88 5.53 93.84 124.19 93.84",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m124.04 80.32c-1.07-5.08-5.06-23.61-6.9-32.18-0.56-2.6-2.48-4.4-4.69-4.4-6.31 0.01-18.11 0.02-19.54 0.02h-51.88c-0.72 0-3.01-0.01-4.83 2.03-5.54 6.18-14.76 24.08-16.2 25.9-0.1 0.12-7.38 2.66-10.7 4.64-1.31 0.79-2.05 2.49-2.24 4.25l-2.9 24.42c-0.75 4.82 2 6.83 6.32 6.83h107.71c3.3 0 6-0.93 6-6.83v-23.23c0-0.49-0.05-0.98-0.15-1.45z"
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m122.99 95.73-1.62 0.01c-1.04 0-1.57-0.6-1.9-2.23l-0.95-7.5c-0.34-2.23 0.84-2.24 1.88-2.24l2.54-0.01c1.78-0.01 1.9 1 1.9 2.23l0.03 7.5c0.01 1.23 0.1 2.24-1.88 2.24z",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m14.67 88.34h-12.67c-1.1 0-2-0.9-2-2v-4.17c0-1.1 0.9-2 2-2h13.67c1.1 0 2 0.9 2 2l-1 4.17c0 1.11-0.9 2-2 2z",
        fill: "#FFEE58"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m37.83 55.74h9.33c1.37 0 2.48 1.11 2.48 2.48v15.05c0 1.37-1.11 2.48-2.48 2.48h-18.65c-2.08 0-3.23-2.4-1.93-4.02l9.32-15.05c0.47-0.6 1.18-0.94 1.93-0.94z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m113.21 75.74h-54.11c-1.64 0-2.98-1.35-2.98-3v-14c0-1.65 1.34-3 2.98-3h50.28c1.64 0 2.57 0.92 2.98 3l3.57 14c0.41 1.71-1.08 3-2.72 3z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112.45 46.71c0.75 0 1.51 0.88 1.76 2.04 1.71 7.98 5.82 27.1 6.9 32.25 0.06 0.27 0.09 0.56 0.09 0.85v23.29c0 1.7-0.28 2.97-0.76 3.4-0.33 0.29-1.08 0.44-2.24 0.44h-107.71c-1.48 0-2.59-0.31-3.05-0.84-0.52-0.61-0.42-1.85-0.31-2.54l0.02-0.1 2.9-24.52c0.12-1.12 0.54-1.85 0.8-2 2.24-1.35 6.76-3.1 8.93-3.94 1.7-0.66 2.05-0.8 2.58-1.47 0.56-0.71 1.47-2.31 3.47-5.85 3.36-5.94 8.99-15.89 12.6-19.94 0.81-0.91 1.75-1.03 2.59-1.03h51.88c0.88 0 5.71 0 10.76-0.01l8.79-0.03m0-3c-6.31 0.01-18.11 0.02-19.54 0.02h-51.88-0.03c-0.74 0-3.01 0.01-4.81 2.03-5.53 6.21-14.75 24.11-16.19 25.93-0.1 0.12-7.38 2.7-10.7 4.69-1.31 0.79-2.05 2.5-2.24 4.26l-2.9 24.48c-0.75 4.83 2 6.84 6.32 6.84h107.71c3.3 0 6-0.94 6-6.84v-23.28c0-0.49-0.05-0.98-0.15-1.46-1.07-5.09-5.06-23.67-6.9-32.26-0.56-2.6-2.48-4.41-4.69-4.41z",
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
          "m47.16 57.74c0.26 0 0.48 0.21 0.48 0.48v15.05c0 0.26-0.21 0.48-0.48 0.48h-18.65c-0.25 0-0.37-0.15-0.43-0.27s-0.1-0.31 0.06-0.5l0.08-0.09 0.06-0.1 9.23-14.9c0.09-0.08 0.2-0.13 0.32-0.13h9.33m0-2.02h-9.33c-0.75 0-1.46 0.34-1.93 0.93l-9.32 15.05c-1.3 1.62-0.14 4.02 1.93 4.02h18.65c1.37 0 2.48-1.11 2.48-2.48v-15.04c0-1.37-1.11-2.48-2.48-2.48z",
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
          "m109.38 57.74c0.43 0 0.75 0 1.02 1.39l0.02 0.1 3.56 13.98c0.03 0.12 0.01 0.17-0.04 0.23-0.11 0.14-0.39 0.3-0.74 0.3h-54.1c-0.53 0-0.98-0.46-0.98-1v-14c0-0.54 0.45-1 0.98-1h50.28m0-2h-50.28c-1.64 0-2.98 1.35-2.98 3v14c0 1.65 1.34 3 2.98 3h54.11c1.64 0 3.14-1.29 2.72-3l-3.57-14c-0.41-2.08-1.34-3-2.98-3z",
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

exports.default = Minibus;
