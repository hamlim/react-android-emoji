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

function HighBrightness(props) {
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
        id: "a",
        x1: 64,
        x2: 64,
        y1: 3.4825,
        y2: 124.52,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 36c-15.46 0-28 12.54-28 28s12.54 28 28 28 28-12.54 28-28-12.54-28-28-28zm0 44c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m60 28h8c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2h-8c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 100h-8c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 112,
        x2: 112,
        y1: 3.4825,
        y2: 124.52,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122 58h-20c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 16,
        x2: 16,
        y1: 3.4825,
        y2: 124.52,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28 68v-8c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 98.1,
        x2: 98.1,
        y1: 3.4825,
        y2: 124.52,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.44 41.37c0.78 0.78 2.05 0.78 2.83 0l14.14-14.14c0.78-0.78 0.78-2.05 0-2.83l-5.66-5.66c-0.78-0.78-2.05-0.78-2.83 0l-14.13 14.15c-0.78 0.78-0.78 2.05 0 2.83l5.65 5.65z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 30.218,
        x2: 30.218,
        y1: 3.4825,
        y2: 124.52,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m35.88 86.63c-0.78-0.78-2.05-0.78-2.83 0l-14.15 14.14c-0.78 0.78-0.78 2.05 0 2.83l5.66 5.66c0.78 0.78 2.05 0.78 2.83 0l14.14-14.14c0.78-0.78 0.78-2.05 0-2.83l-5.65-5.66z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m95.27 86.63c-0.78-0.78-2.05-0.78-2.83 0l-5.66 5.66c-0.78 0.78-0.78 2.05 0 2.83l14.14 14.14c0.78 0.78 2.05 0.78 2.83 0l5.66-5.66c0.78-0.78 0.78-2.05 0-2.83l-14.14-14.14z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "M33.05,41.37c0.78,0.78,2.05,0.78,2.83,0l5.66-5.66c0.78-0.78,0.78-2.05,0-2.83L27.39,18.75 c-0.78-0.78-2.05-0.78-2.83,0L18.9,24.4c-0.78,0.78-0.78,2.05,0,2.83L33.05,41.37z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 39c13.79 0 25 11.21 25 25s-11.21 25-25 25-25-11.21-25-25 11.21-25 25-25m0 44c10.48 0 19-8.52 19-19s-8.52-19-19-19-19 8.52-19 19 8.52 19 19 19m0-47c-15.46 0-28 12.54-28 28s12.54 28 28 28 28-12.54 28-28-12.54-28-28-28zm0 44c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"
      }),
      _react2.default.createElement("path", {
        d:
          "m67 7v18h-6v-18h6m1-3h-8c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m67 103v18h-6v-18h6m1-3h-8c-1.1 0-2 0.9-2 2v20c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-20c0-1.1-0.9-2-2-2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m121 61v6h-18v-6h18m1-3h-20c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m25 61v6h-18v-6h18m1-3h-20c-1.1 0-2 0.9-2 2v8c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m102.34 21.57 4.24 4.24-12.72 12.73-4.24-4.24 12.72-12.73m0-3.41c-0.51 0-1.02 0.2-1.41 0.59l-14.14 14.14c-0.78 0.78-0.78 2.05 0 2.83l5.66 5.66c0.39 0.39 0.9 0.59 1.41 0.59s1.02-0.2 1.41-0.59l14.14-14.14c0.78-0.78 0.78-2.05 0-2.83l-5.66-5.66c-0.38-0.4-0.9-0.59-1.41-0.59z"
      }),
      _react2.default.createElement("path", {
        d:
          "m34.46 89.46 4.24 4.24-12.73 12.73-4.24-4.24 12.73-12.73m0-3.42c-0.51 0-1.02 0.2-1.41 0.59l-14.15 14.14c-0.78 0.78-0.78 2.05 0 2.83l5.66 5.66c0.39 0.39 0.9 0.59 1.41 0.59s1.02-0.2 1.41-0.59l14.14-14.14c0.78-0.78 0.78-2.05 0-2.83l-5.66-5.66c-0.38-0.39-0.89-0.59-1.4-0.59z"
      }),
      _react2.default.createElement("path", {
        d:
          "m93.86 89.46 12.73 12.73-4.24 4.24-12.73-12.73 4.24-4.24m0-3.42c-0.51 0-1.02 0.2-1.41 0.59l-5.66 5.66c-0.78 0.78-0.78 2.05 0 2.83l14.14 14.14c0.39 0.39 0.9 0.59 1.41 0.59s1.02-0.2 1.41-0.59l5.66-5.66c0.78-0.78 0.78-2.05 0-2.83l-14.14-14.14c-0.39-0.39-0.9-0.59-1.41-0.59z"
      }),
      _react2.default.createElement("path", {
        d:
          "m25.98 21.57 12.72 12.73-4.24 4.24-12.73-12.72 4.25-4.25m0-3.41c-0.51 0-1.02 0.2-1.41 0.59l-5.67 5.65c-0.78 0.78-0.78 2.05 0 2.83l14.14 14.14c0.39 0.39 0.9 0.59 1.41 0.59s1.02-0.2 1.41-0.59l5.66-5.66c0.78-0.78 0.78-2.05 0-2.83l-14.13-14.13c-0.39-0.4-0.9-0.59-1.41-0.59z"
      })
    )
  );
}

exports.default = HighBrightness;