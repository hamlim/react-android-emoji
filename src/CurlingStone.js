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

function CurlingStone(props) {
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
        "m-47.9 45.09h-62.87c-15.71 0-28.56-12.85-28.56-28.56v-14.48c0-13.01 10.54-23.55 23.55-23.55h70.9c14.06 0 25.56 11.5 25.56 25.56v12.48c-0.01 15.7-12.87 28.55-28.58 28.55z",
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 27,
        cy: 63.039,
        r: 99.608,
        gradientTransform: "matrix(1 0 0 .9764 0 1.5953)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757576",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#434343",
        offset: 0.9231
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M95.44,110.44H32.56C12.33,110.44,4,97.88,4,82.54V68.4c0-12.7,10.54-22.99,23.55-22.99 h70.9c14.06,0,25.56,11.23,25.56,24.95v12.18C124,97.88,116.67,110.44,95.44,110.44z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "M95.44,110.44H32.56C12.33,110.44,4,97.88,4,82.54V68.4c0-12.7,10.54-22.99,23.55-22.99h70.9 c14.06,0,25.56,11.23,25.56,24.95v12.18C124,97.88,116.67,110.44,95.44,110.44z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)",
        opacity: 0.78
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: -10.602,
          x2: 139.6,
          y1: 81.471,
          y2: 81.471,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#B0AFAF",
          offset: 0.7305
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m62.29 93.2c-43.51 0-65.37-5.97-66.28-6.29-5.59-1.99-8.13-7.27-5.68-11.79 2.44-4.51 8.92-6.58 14.5-4.62 0.47 0.16 19.44 4.81 57.47 4.81 39.32 0 62.3-4.95 62.53-5.01 5.73-1.67 12.07 0.74 14.13 5.4 2.06 4.65-0.92 9.78-6.66 11.45-1.08 0.29-26.88 6.05-70.01 6.05z",
        fill: "url(#b)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98.44 48.46c12.41 0 22.5 9.83 22.5 21.9v12.18c0 16.48-8.58 24.84-25.51 24.84h-62.87c-22.2 0-25.51-15.56-25.51-24.84v-14.14c0-11 9.2-19.94 20.5-19.94h70.89m0-3.05h-70.9c-13 0-23.54 10.29-23.54 22.99v14.14c0 15.34 8.33 27.89 28.56 27.89h62.87c21.23 0 28.56-12.55 28.56-27.89v-12.18c0.01-13.72-11.49-24.95-25.55-24.95z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 30.984,
        x2: 72.785,
        y1: 12.724,
        y2: 51.31,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5451",
        offset: 0.3703
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53A35",
        offset: 0.8744
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 39.41c-1.39 0-2.73 0.01-4.04 0.03-2.24-0.01-4.05-1.88-4.05-4.17v-1.5c0-2.32 1.84-4.2 4.11-4.2h26.09c3.23 0 6.06-2.54 6.14-5.84 0.09-3.39-2.58-6.16-5.87-6.16h-29.56c-10.04 0-18.82 6.91-21.39 16.83l-0.46 1.79c-0.82 3.18-3.23 5.65-6.32 6.57-7.83 2.35-9.04 5.44-9.04 7.53 0 1.62 8.21 5.51 44.39 5.51s44.39-3.53 44.39-5.51c0-3.8-3.95-10.88-44.39-10.88z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.37 20.33c0.82 0 1.59 0.33 2.18 0.93 0.62 0.64 0.95 1.48 0.92 2.39-0.04 1.73-1.56 3.14-3.37 3.14h-26.08c-3.79 0-6.88 3.13-6.88 6.97v1.5c0 3.76 2.99 6.85 6.68 6.94h0.14 0.03c1.29-0.02 2.62-0.03 4-0.03 34.19 0 40.37 5.04 41.41 7.28-2.11 0.98-10.61 3.57-41.41 3.57-29.86 0-38.97-2.68-41.37-3.72 0.97-1.88 4.55-3.22 6.82-3.9 4.01-1.2 7.15-4.47 8.2-8.53l0.46-1.79c2.25-8.69 9.94-14.76 18.71-14.76h29.56m0-2.76h-29.55c-10.04 0-18.82 6.91-21.39 16.83l-0.46 1.79c-0.82 3.18-3.23 5.65-6.32 6.57-7.83 2.35-9.04 5.44-9.04 7.53 0 1.62 8.21 5.51 44.39 5.51s44.39-3.53 44.39-5.51c0-3.8-3.95-10.88-44.39-10.88-1.39 0-2.73 0.01-4.04 0.03-2.24-0.01-4.05-1.88-4.05-4.17v-1.5c0-2.32 1.84-4.2 4.11-4.2h26.08c3.23 0 6.06-2.54 6.14-5.84 0.09-3.38-2.57-6.16-5.87-6.16z",
        fill: "#434343"
      })
    )
  );
}

exports.default = CurlingStone;
