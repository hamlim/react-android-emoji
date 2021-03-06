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

function Bowling(props) {
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
      "radialGradient",
      {
        id: "i",
        cx: 55.338,
        cy: 38.77,
        r: 27.52,
        gradientTransform: "matrix(1.0839 0 0 2.5637 -5.0637 -60.623)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF0",
        offset: 0.4724
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0D8DC",
        offset: 0.8507
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.14 19.46c0-13.87-8.03-15.46-12.66-15.46s-12.66 1.59-12.66 15.46c0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.62 3.72-9.19 13.35-9.19 19.45 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55 0-5.29 4.8-9.09 4.8-16.22z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "h",
        d:
          "m72.14 19.46c0-13.87-8.03-15.46-12.66-15.46s-12.66 1.59-12.66 15.46c0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.62 3.72-9.19 13.35-9.19 19.45 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55 0-5.29 4.8-9.09 4.8-16.22z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#h"
      })
    ),
    _react2.default.createElement("rect", {
      x: 47.15,
      y: 30.73,
      width: 25.89,
      height: 4.68,
      clipPath: "url(#b)",
      fill: "#EF5451"
    }),
    _react2.default.createElement("rect", {
      x: 48.35,
      y: 38.99,
      width: 23.49,
      height: 4.68,
      clipPath: "url(#b)",
      fill: "#EF5451"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m59.48 7c4.15 0 9.66 1.29 9.66 12.46 0 3.14-1.15 5.53-2.37 8.05-1.19 2.47-2.43 5.03-2.43 8.17 0 4.61 2.06 9.8 5.39 13.54 3.46 3.89 8.75 13.48 8.75 17.96 0 18.89-7.44 39.5-9.72 45.37-0.11 0.28-0.49 0.56-1.02 0.56h-16.52c-0.53 0-0.91-0.28-1.02-0.56-2.28-5.87-9.72-26.48-9.72-45.37 0-5.01 5.06-13.99 8.34-17.36 3.92-4.03 5.83-8.66 5.83-14.14 0-3.2-1.26-5.8-2.47-8.32-1.21-2.5-2.35-4.87-2.35-7.89-0.01-11.18 5.51-12.47 9.65-12.47m0-3c-4.63 0-12.66 1.59-12.66 15.46 0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.62 3.72-9.19 13.35-9.19 19.45 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55 0-5.29 4.8-9.08 4.8-16.22 0-13.87-8.03-15.46-12.66-15.46z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 94.374,
        cy: 38.77,
        r: 27.52,
        gradientTransform: "matrix(1.0839 0 0 2.5637 -8.34 -60.623)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF0",
        offset: 0.2327
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0D8DC",
        offset: 0.654
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m111.18 19.46c0-13.87-8.03-15.46-12.66-15.46s-12.66 1.59-12.66 15.46c0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.62 3.72-9.19 13.35-9.19 19.45 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55 0-5.29 4.8-9.09 4.8-16.22z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m111.18 19.46c0-13.87-8.03-15.46-12.66-15.46s-12.66 1.59-12.66 15.46c0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.62 3.72-9.19 13.35-9.19 19.45 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55 0-5.29 4.8-9.09 4.8-16.22z"
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
    _react2.default.createElement("rect", {
      x: 86.18,
      y: 30.73,
      width: 25.89,
      height: 4.68,
      clipPath: "url(#a)",
      fill: "#D32E2E"
    }),
    _react2.default.createElement("rect", {
      x: 87.38,
      y: 38.99,
      width: 23.49,
      height: 4.68,
      clipPath: "url(#a)",
      fill: "#D32E2E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98.52 7c4.15 0 9.66 1.29 9.66 12.46 0 3.14-1.15 5.53-2.37 8.05-1.19 2.47-2.43 5.03-2.43 8.17 0 4.61 2.06 9.8 5.39 13.54 3.46 3.89 8.75 13.48 8.75 17.96 0 18.89-7.44 39.5-9.72 45.37-0.11 0.28-0.49 0.56-1.02 0.56h-16.53c-0.53 0-0.91-0.28-1.02-0.56-2.28-5.87-9.72-26.48-9.72-45.37 0-5.01 5.06-13.99 8.34-17.36 3.92-4.03 5.83-8.66 5.83-14.14 0-3.2-1.26-5.8-2.47-8.32-1.21-2.5-2.35-4.87-2.35-7.89 0-11.18 5.51-12.47 9.66-12.47m0-3c-4.63 0-12.66 1.59-12.66 15.46 0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.62 3.72-9.19 13.35-9.19 19.45 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55 0-5.29 4.8-9.08 4.8-16.22 0-13.87-8.03-15.46-12.66-15.46z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 80.856,
        cy: 46.664,
        r: 27.52,
        gradientTransform: "matrix(1.0839 0 0 2.5637 -7.2054 -72.968)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF0",
        offset: 0.4724
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0D8DC",
        offset: 0.8507
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.66 27.36c0-13.88-8.03-15.46-12.66-15.46s-12.66 1.59-12.66 15.46c0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.61 3.71-9.18 13.34-9.18 19.44 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55-0.01-5.29 4.79-9.08 4.79-16.21z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m97.66 27.36c0-13.88-8.03-15.46-12.66-15.46s-12.66 1.59-12.66 15.46c0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.61 3.71-9.18 13.34-9.18 19.44 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55-0.01-5.29 4.79-9.08 4.79-16.21z"
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
    _react2.default.createElement("rect", {
      x: 72.66,
      y: 38.62,
      width: 25.89,
      height: 4.68,
      clipPath: "url(#c)",
      fill: "#EF5451"
    }),
    _react2.default.createElement("rect", {
      x: 73.86,
      y: 46.89,
      width: 23.49,
      height: 4.68,
      clipPath: "url(#c)",
      fill: "#EF5451"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m85 14.89c4.15 0 9.66 1.29 9.66 12.46 0 3.14-1.15 5.53-2.37 8.05-1.19 2.47-2.43 5.03-2.43 8.17 0 4.61 2.06 9.8 5.39 13.54 3.45 3.89 8.75 13.48 8.75 17.96 0 18.89-7.44 39.5-9.72 45.37-0.11 0.28-0.49 0.56-1.02 0.56h-16.52c-0.53 0-0.91-0.28-1.02-0.56-2.28-5.87-9.72-26.48-9.72-45.37 0-5.01 5.06-13.99 8.34-17.36 3.92-4.03 5.83-8.66 5.83-14.14 0-3.2-1.26-5.8-2.47-8.32-1.21-2.5-2.35-4.87-2.35-7.89-0.01-11.17 5.5-12.47 9.65-12.47m0-3c-4.63 0-12.66 1.59-12.66 15.46 0 6.97 4.82 10.84 4.82 16.22 0 4.65-1.61 8.59-4.98 12.05-3.61 3.72-9.18 13.35-9.18 19.45 0 19.13 7.23 39.52 9.92 46.46 0.58 1.49 2.11 2.47 3.82 2.47h16.53c1.71 0 3.24-0.99 3.82-2.47 2.69-6.94 9.92-27.32 9.92-46.46 0-5.64-5.97-15.97-9.51-19.95-2.76-3.1-4.63-7.54-4.63-11.55 0-5.29 4.8-9.08 4.8-16.22-0.01-13.87-8.04-15.46-12.67-15.46z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 35.241,
        cy: 70.957,
        r: 38,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757576",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#434343",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 45.48,
      cy: 86,
      r: 38,
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#212121"
      },
      _react2.default.createElement("circle", {
        cx: 35.08,
        cy: 80.16,
        r: 6.65
      }),
      _react2.default.createElement("circle", {
        cx: 55.88,
        cy: 80.16,
        r: 6.65
      }),
      _react2.default.createElement("circle", {
        cx: 45.07,
        cy: 97.54,
        r: 6.65
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m45.48 51c19.3 0 35 15.7 35 35s-15.7 35-35 35-35-15.7-35-35 15.7-35 35-35m0-3c-20.99 0-38 17.01-38 38s17.01 38 38 38 38-17.01 38-38-17.01-38-38-38z",
        fill: "#eee"
      })
    )
  );
}

exports.default = Bowling;
