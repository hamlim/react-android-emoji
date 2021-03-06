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

function FieldHockey(props) {
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
        "m-47.33-67.67-73.32 121.85c-4.03 6.68-12.76 8.74-19.35 4.57l-1.17-0.74c-6.38-4.04-8.37-12.45-4.47-18.92v0",
      fill: "none",
      stroke: "#434343",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 18
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "f",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "e",
          cx: 68.75,
          cy: 64.75,
          r: 69.219,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#94582C",
          offset: 0.0041055
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BC8051",
          offset: 0.7083
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m11.4 113.73c-8.55-7.13-10.35-23.55-1.92-33.23 3.39-3.9 9.3-4.31 13.2-0.91 3.63 3.16 3.82 7.75 1.15 11.61-1.98 2.87-1.67 7.02 0.9 9.37l0.33 0.3c0.05 0.03 0.1 0.06 0.16 0.09 3.27 1.9 7.44 1.15 9.97-1.66l92.79-103.25s5.21-5.03 9.1-1.64c3.9 3.39 0.22 8.58-3.17 12.48l-87.45 105.84c-4.24 4.88-20.6 13.06-35.06 1z",
        fill: "url(#e)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "d",
          d:
            "m11.4 113.73c-8.55-7.13-10.35-23.55-1.92-33.23 3.39-3.9 9.3-4.31 13.2-0.91 3.63 3.16 3.82 7.75 1.15 11.61-1.98 2.87-1.67 7.02 0.9 9.37l0.33 0.3c0.05 0.03 0.1 0.06 0.16 0.09 3.27 1.9 7.44 1.15 9.97-1.66l92.79-103.25s5.21-5.03 9.1-1.64c3.9 3.39 0.22 8.58-3.17 12.48l-87.45 105.84c-4.24 4.88-20.6 13.06-35.06 1z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "b"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#d"
        })
      ),
      _react2.default.createElement("polygon", {
        points: "86.17 82.04 75.15 35.87 124.51 -20.52 153.64 3.15",
        clipPath: "url(#b)",
        fill: "#58C1EF"
      }),
      _react2.default.createElement("polygon", {
        points: "66.53 103.43 55.69 57.81 68.94 40.9 80.42 86.07",
        clipPath: "url(#b)",
        fill: "#FFCB28"
      }),
      _react2.default.createElement("polygon", {
        points: "91.94 16.4 85.14 26.86 95.98 72.48 103.42 61.57",
        clipPath: "url(#b)",
        fill: "#2C98D4"
      }),
      _react2.default.createElement("polygon", {
        points: "106.94 1.4 100.14 11.86 110.98 57.48 118.42 46.57",
        clipPath: "url(#b)",
        fill: "#2C98D4"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m133.99-3.76c0.43 0 0.77 0.13 1.12 0.44 0.43 0.37 1.02 0.89 0.32 2.7-0.75 1.93-2.52 4.09-3.79 5.55-0.02 0.02-0.03 0.04-0.05 0.06l-87.42 105.8c-2.28 2.59-8.75 6.21-16.1 6.21-5.35 0-10.32-1.88-14.75-5.57-3.47-2.9-5.81-7.93-6.25-13.46-0.47-5.9 1.23-11.55 4.67-15.49 1.21-1.39 2.96-2.18 4.8-2.18 1.53 0 3.01 0.55 4.17 1.56 2.32 2.02 2.57 4.88 0.65 7.64-2.87 4.15-2.27 9.99 1.35 13.29l0.33 0.3c0.15 0.13 0.3 0.25 0.47 0.35l0.2 0.12c1.64 0.95 3.52 1.46 5.42 1.46 3.15 0 6.16-1.35 8.28-3.71l92.7-103.15c0.75-0.67 2.53-1.92 3.88-1.92m0-3c-3.1 0-6.01 2.81-6.01 2.81l-92.78 103.25c-1.58 1.76-3.81 2.71-6.05 2.71-1.34 0-2.69-0.34-3.92-1.05-0.05-0.03-0.1-0.06-0.16-0.09l-0.33-0.3c-2.58-2.35-2.89-6.5-0.9-9.37 2.67-3.86 2.47-8.46-1.15-11.61-1.77-1.54-3.96-2.3-6.14-2.3-2.61 0-5.21 1.09-7.06 3.21-8.43 9.68-6.63 26.1 1.92 33.23 5.54 4.62 11.36 6.27 16.67 6.27 8.54 0 15.76-4.26 18.38-7.27l87.45-105.84c3.39-3.9 7.07-9.09 3.17-12.48-0.98-0.85-2.04-1.17-3.09-1.17z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 83.5,
        cy: 95.5,
        r: 19.276,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEEA39",
        offset: 0.3218
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9BF2C",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 88,
      cy: 104,
      r: 16,
      clipPath: "url(#a)",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88 91c7.17 0 13 5.83 13 13s-5.83 13-13 13-13-5.83-13-13 5.83-13 13-13m0-3c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z",
        fill: "#434343"
      })
    )
  );
}

exports.default = FieldHockey;
