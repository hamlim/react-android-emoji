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

function PlateWithCutlery(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("circle", {
      cx: 65.85,
      cy: 65.6,
      r: 37.92,
      fill: "#E8E8E8"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 78.19,
        x2: 50.69,
        y1: 50.493,
        y2: 84.16,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.00022998
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.1211
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.4234
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.7183
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9949
      })
    ),
    _react2.default.createElement("circle", {
      cx: 65.85,
      cy: 65.6,
      r: 25.35,
      fill: "url(#c)"
    }),
    _react2.default.createElement("circle", {
      cx: 65.31,
      cy: 66.89,
      r: 24.22,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 65.98,
      cy: 66.22,
      r: 23.56,
      fill: "#E8E8E8"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.85 29.68c19.8 0 35.92 16.11 35.92 35.92s-16.11 35.92-35.92 35.92-35.91-16.12-35.91-35.92 16.11-35.92 35.91-35.92m0-2c-20.94 0-37.92 16.98-37.92 37.92s16.98 37.92 37.92 37.92 37.92-16.98 37.92-37.92-16.98-37.92-37.92-37.92z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 15.171,
        cy: 65.812,
        r: 36.096,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A8A8A8",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BFBFBF",
        offset: 0.1684
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D9D9D9",
        offset: 0.4001
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E9E9E9",
        offset: 0.6095
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.7755
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m24.7 19.08c-0.1-2.12-0.58-3.08-1.45-3.08-0.96 0-1.44 0.96-1.54 3.08l-1.15 16.94c0 0.96-0.58 1.64-1.35 1.64-0.67 0-1.25-0.67-1.25-1.64l-1.35-16.94c-0.19-2.21-0.57-3.08-1.44-3.08s-1.35 0.87-1.44 3.08l-1.35 16.94c-0.19 0.96-0.77 1.64-1.35 1.64s-1.15-0.67-1.35-1.64l-1.05-16.94c-0.19-2.12-0.58-3.08-1.54-3.08s-1.35 0.96-1.54 3.08c-0.48 8.37-1.54 16.74-1.54 30.22 0 3.08 0.96 5.58 2.79 7.03l3.47 2.79c0.87 0.67 1.44 1.83 1.35 3.75l-1.4 47.71c-0.04 2.77 2.19 5.05 4.96 5.05 2.78 0 5.01-2.29 4.96-5.07l-1.5-47.69c-0.1-1.93 0.48-3.18 1.35-3.85l3.46-2.69c1.83-1.44 2.89-4.04 2.89-7.03-0.01-13.47-1.07-21.85-1.64-30.22z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m15.96 17.58m-8.12 0.02m16.11 0.04m-0.71 8.43c0.52 6.29 1.09 13.45 1.09 23.23 0 2.36-0.8 4.4-2.12 5.45l-3.46 2.69c-0.86 0.67-2.28 2.28-2.12 5.49l1.5 47.67c0.01 0.81-0.29 1.57-0.86 2.14-0.56 0.57-1.31 0.89-2.11 0.89s-1.55-0.31-2.11-0.88-0.87-1.33-0.86-2.11l1.4-47.67c0.15-3.01-1.07-4.62-2.09-5.41l-3.48-2.8c-1.31-1.04-2.03-2.97-2.03-5.46 0-9.56 0.54-16.6 1.02-22.8 0.01-0.14 0.02-0.27 0.03-0.41l0.63 10.06c0.01 0.09 0.02 0.18 0.04 0.27 0.38 1.91 1.74 3.24 3.31 3.24s2.93-1.33 3.31-3.25c0.02-0.08 0.03-0.15 0.03-0.23l0.8-10.02 0.79 9.95c0.04 1.99 1.45 3.54 3.25 3.54 1.88 0 3.31-1.52 3.35-3.56l0.69-10.02m-0.68 9.95m0.69-20.02c-0.96 0-1.44 0.96-1.54 3.08l-1.15 16.94c0 0.96-0.58 1.64-1.35 1.64-0.67 0-1.25-0.67-1.25-1.64l-1.35-16.94c-0.19-2.21-0.57-3.08-1.44-3.08s-1.35 0.87-1.44 3.08l-1.35 16.94c-0.19 0.96-0.77 1.64-1.35 1.64s-1.15-0.67-1.35-1.64l-1.05-16.94c-0.19-2.12-0.58-3.08-1.54-3.08s-1.35 0.96-1.54 3.08c-0.48 8.37-1.54 16.74-1.54 30.22 0 3.08 0.96 5.58 2.79 7.03l3.47 2.79c0.87 0.67 1.44 1.83 1.35 3.75l-1.4 47.71c-0.04 2.77 2.19 5.05 4.96 5.05 2.78 0 5.01-2.29 4.96-5.07l-1.5-47.69c-0.1-1.93 0.48-3.18 1.35-3.85l3.46-2.69c1.83-1.44 2.89-4.04 2.89-7.03 0-13.47-1.06-21.84-1.64-30.22-0.1-2.12-0.58-3.08-1.45-3.08z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 115.88,
        cy: 66.056,
        r: 28.287,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A3A3A3",
        offset: 0.0017339
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B7B7B7",
        offset: 0.1847
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D5D5D5",
        offset: 0.5159
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E7E7E7",
        offset: 0.7993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M122,63.57V20.09c0-3.65-1.06-4.64-3.16-3.26c-5.34,3.51-10.51,20.59-10.51,41.51 c0,7.71,7.62,6.67,7.96,8.97l-2.36,43.52c-0.04,2.77,2.22,5.05,4.99,5.05c2.78,0,4.55-2.29,4.5-5.07L122,63.57z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.46 18.23m-0.56 0.3c0.06 0.33 0.1 0.83 0.1 1.56v43.48 0.06l1.42 47.22c0.02 0.95-0.28 1.81-0.82 2.37-0.43 0.44-1 0.66-1.67 0.66-0.81 0-1.57-0.32-2.14-0.9-0.56-0.57-0.86-1.31-0.86-2.09l2.36-43.48c0.01-0.13 0-0.26-0.02-0.39-0.28-1.94-2.12-2.67-3.59-3.26-2.24-0.89-4.35-1.74-4.35-5.42 0-21.81 5.54-37.09 9.57-39.81m0.48-2.29c-0.43 0-0.94 0.2-1.54 0.59-5.34 3.51-10.51 20.59-10.51 41.51 0 7.71 7.62 6.67 7.96 8.97l-2.36 43.52c-0.04 2.77 2.22 5.05 4.99 5.05 2.78 0 4.55-2.29 4.5-5.07l-1.42-47.24v-43.48c0-2.6-0.54-3.85-1.62-3.85z",
        fill: "#424242"
      })
    )
  );
}

exports.default = PlateWithCutlery;
