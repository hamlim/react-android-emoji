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

function Rainbow(props) {
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
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "e",
        x: 3.85,
        y: 4,
        width: 120,
        height: 120.03
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m123.67 4.33c-66.27 0-120 53.73-120 120s53.73 120 120 120 120-53.73 120-120-53.73-120-120-120zm0 150c-16.57 0-30-13.43-30-30s13.43-30 30-30 30 13.43 30 30-13.43 30-30 30z",
        fill: "#F44336"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m122.67 19.33c-57.99 0-105 47.01-105 105s47.01 105 105 105 105-47.01 105-105-47.01-105-105-105zm1 135c-16.57 0-30-13.43-30-30s13.43-30 30-30 30 13.43 30 30-13.43 30-30 30z",
        fill: "#FF9800"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m123.67 34.33c-49.71 0-90 40.29-90 90s40.29 90 90 90 90-40.29 90-90-40.3-90-90-90zm0 120c-16.57 0-30-13.43-30-30s13.43-30 30-30 30 13.43 30 30-13.43 30-30 30z",
        fill: "#FFEB3B"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m123.67 49.33c-41.42 0-75 33.58-75 75s33.58 75 75 75 75-33.58 75-75-33.58-75-75-75zm0 105c-16.57 0-30-13.43-30-30s13.43-30 30-30 30 13.43 30 30-13.43 30-30 30z",
        fill: "#8BC34A"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m123.67 64.33c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.87-60-60-60zm0 90c-16.57 0-30-13.43-30-30s13.43-30 30-30 30 13.43 30 30-13.43 30-30 30z",
        fill: "#2196F3"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m123.67 79.33c-24.85 0-45 20.15-45 45s20.15 45 45 45 45-20.15 45-45-20.15-45-45-45zm0 75c-16.57 0-30-13.43-30-30s13.43-30 30-30 30 13.43 30 30-13.43 30-30 30z",
        fill: "#673AB7"
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
          "m123.67 8.33c30.98 0 60.11 12.07 82.02 33.98s33.98 51.04 33.98 82.02-12.07 60.11-33.98 82.02-51.04 33.98-82.02 33.98-60.11-12.07-82.02-33.98-33.98-51.04-33.98-82.02 12.07-60.11 33.98-82.02c21.9-21.91 51.03-33.98 82.02-33.98m0-4c-66.27 0-120 53.73-120 120s53.73 120 120 120 120-53.73 120-120-53.73-120-120-120z",
        fill: "#424242"
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
          "m123.67 95.37c15.97 0 28.96 12.99 28.96 28.96s-12.99 28.96-28.96 28.96-28.96-12.99-28.96-28.96 12.99-28.96 28.96-28.96m0-4c-18.2 0-32.96 14.76-32.96 32.96s14.76 32.96 32.96 32.96 32.96-14.76 32.96-32.96-14.76-32.96-32.96-32.96z",
        fill: "#424242"
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
          id: "d",
          cx: 29.297,
          cy: 189.96,
          r: 37.538,
          gradientTransform:
            "matrix(1.0458 .00070611 .00070611 .9524 6.5818 3.1251)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BBDEFB",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m57.18 183.88c-0.08 10.34-9.35 18.66-20.71 18.57s-20.5-8.54-20.42-18.88 9.35-18.66 20.71-18.57 20.5 8.54 20.42 18.88z",
        fill: "url(#d)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 74.435,
          cy: 187.95,
          r: 29.901,
          gradientTransform: "matrix(.9524 0 0 .9524 -3.6667 3.0476)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BBDEFB",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 1
        })
      ),
      _react2.default.createElement("circle", {
        cx: 66.05,
        cy: 182.54,
        r: 15.89,
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "b",
          cx: 39.535,
          cy: 123.05,
          r: 105.82,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E3F2FD",
          offset: 0.4209
        }),
        _react2.default.createElement("stop", {
          stopColor: "#90CAF9",
          offset: 0.8707
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m85.62 160.64c-0.57 0-1.13 0.04-1.68 0.11 0.44-1.47 0.68-3.01 0.68-4.62 0-8.96-7.26-16.22-16.22-16.22-3.81 0-7.31 1.32-10.08 3.53-3.72-7.07-11.14-11.89-19.68-11.89-12.28 0-22.24 9.96-22.24 22.24 0 0.45 0.02 0.89 0.04 1.33-9.27 1.12-16.44 9-16.44 18.56 0 10.34 8.39 18.73 18.73 18.73 8.71 0 16.01-5.95 18.1-14.01 3.27 6.7 10.13 11.33 18.09 11.33 7.31 0 13.69-3.9 17.22-9.73 2.03 5.48 7.29 9.39 13.47 9.39 7.94 0 14.38-6.44 14.38-14.38 0.01-7.93-6.43-14.37-14.37-14.37z",
        fill: "url(#b)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m38.63 133.54c7.53 0 14.4 4.15 17.91 10.82 0.28 0.53 0.78 0.9 1.36 1.02 0.14 0.03 0.27 0.04 0.41 0.04 0.45 0 0.89-0.15 1.24-0.43 2.54-2.02 5.6-3.09 8.84-3.09 7.84 0 14.22 6.38 14.22 14.22 0 1.36-0.2 2.72-0.59 4.05-0.19 0.64-0.05 1.34 0.39 1.86 0.38 0.45 0.94 0.71 1.53 0.71 0.08 0 0.15 0 0.23-0.01 0.54-0.06 1.01-0.09 1.45-0.09 6.83 0 12.38 5.55 12.38 12.38s-5.55 12.38-12.38 12.38c-1.41 0-2.81-0.25-4.18-0.74-0.22-0.08-0.45-0.12-0.68-0.12-0.79 0-1.54 0.47-1.85 1.24-2.14 5.25-7.19 8.65-12.85 8.65-3.88 0-7.61-1.65-10.24-4.54-0.38-0.42-0.92-0.65-1.48-0.65-0.05 0-0.11 0-0.17 0.01-0.62 0.05-1.18 0.16-1.51 0.68-3.32 5.12-9.45 8.08-16 8.08h-0.16c-6.9 0-13.17-3.3-16.36-8.83-0.35-0.61-1-0.87-1.7-0.89-9.07-0.17-16.44-7.61-16.44-16.67 0-8.43 6.31-15.53 14.67-16.56 1.05-0.13 1.81-1.03 1.75-2.09-0.03-0.45-0.04-0.84-0.04-1.2 0.01-11.16 9.09-20.23 20.25-20.23m0-2c-12.28 0-22.24 9.96-22.24 22.24 0 0.45 0.02 0.89 0.04 1.33-9.26 1.13-16.43 9.01-16.43 18.57 0 10.23 8.21 18.31 18.4 18.48 3.42 5.93 10.21 9.83 18.07 9.83h0.17c7.53 0 14.11-3.47 17.68-8.99 2.91 3.18 7.07 5.31 11.72 5.31 6.65 0 12.34-4.03 14.71-9.83 1.52 0.55 3.15 0.89 4.86 0.89 7.94 0 14.38-6.42 14.38-14.37s-6.44-14.37-14.38-14.37c-0.57 0-1.13 0.05-1.68 0.11 0.44-1.47 0.68-3.01 0.68-4.62 0-8.96-7.26-16.22-16.22-16.22-3.81 0-7.31 1.33-10.08 3.53-3.72-7.07-11.14-11.89-19.68-11.89z",
          fill: "#424242"
        })
      )
    )
  );
}

exports.default = Rainbow;
