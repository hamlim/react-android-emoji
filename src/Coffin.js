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

function Coffin(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("polygon", {
      points: "12.02 18.77 10.53 33.8 16.63 73.37 86.02 123.38 86.02 92.05",
      fill: "#AB664B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 29.624,
        x2: 98.916,
        y1: 16.002,
        y2: 98.675,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#CF8A59",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CC8756",
        offset: 0.2602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C17D4E",
        offset: 0.4871
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AF6D41",
        offset: 0.7014
      }),
      _react2.default.createElement("stop", {
        stopColor: "#96562E",
        offset: 0.9069
      }),
      _react2.default.createElement("stop", {
        stopColor: "#884924",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "12.02 18.77 17.2 48.3 85.83 104.53 116.38 92.5 74.43 22.35 46.13 8.16",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "85.83 104.53 116.38 92.5 116.38 111.76 86.02 123.38",
      fill: "#230A04"
    }),
    _react2.default.createElement("polygon", {
      points: "16.87 46.42 16.87 73.37 86.02 123.38 85.83 104.53",
      fill: "#6F3A26"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 33.084,
        x2: 94.731,
        y1: 19.267,
        y2: 94.055,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF3E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCF0DD",
        offset: 0.257
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2E5D4",
        offset: 0.4811
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2D3C6",
        offset: 0.6928
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CBBAB1",
        offset: 0.8958
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BCAAA4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m46.61 15.69 22.83 11.41 37.29 60.97-21.32 8.33-61.78-52.39-3.17-20.09 26.15-8.23m0.16-1.98-28.37 8.93 3.52 22.33 63.13 53.55 24.4-9.53-38.72-63.3-23.96-11.98z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m26.46 71.25c-2.01-1.6-1.55-5.24-1.55-5.24l9.27 7.77c0.01 0-2.42 1.69-7.72-2.53z",
      fill: "#AB664B"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.52 105.41c-2.01-1.6-1.55-5.24-1.55-5.24l9.27 7.77c0 0.01-2.43 1.7-7.72-2.53z",
      fill: "#AB664B"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m45.86 11.55 26.45 13.26 41.08 68.68v16.37l-26.92 10.3-67.07-48.32-5.85-37.96 1.25-12.67 31.06-9.66m0.27-3.23-34.11 10.61-1.48 15.03 6.1 39.58 69.39 50.01 30.36-11.62v-19.27l-41.96-70.14-28.3-14.2z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Coffin;
