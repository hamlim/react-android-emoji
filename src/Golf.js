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

function Golf(props) {
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
        id: "g",
        x: 4,
        y: 4.12,
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
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 34.833,
        cy: 79.291,
        r: 59.513,
        gradientTransform: "matrix(.9989 .0473 -.0305 .6444 2.4585 26.551)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0.2639
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.8315
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M36.12,72c-40,5-35.2,26.83-36.03,29.66H0v39.6h128V90.75 C128,90.75,76.12,67,36.12,72z",
      clipPath: "url(#a)",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m47.82 74.31c32.35 0 68.85 14.83 77.18 18.4v45.55h-122v-35.84c0.19-0.69 0.21-1.43 0.24-2.45 0.17-5.72 0.62-20.91 33.26-24.99 3.55-0.45 7.36-0.67 11.32-0.67m0-3c-3.97 0-7.89 0.22-11.7 0.69-40 5-35.2 26.83-36.03 29.66h-0.09v39.6h128v-50.51s-42.47-19.44-80.18-19.44z",
        fill: "#434343"
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
          id: "e",
          d:
            "M36.12,72c-40,5-35.2,26.83-36.03,29.66H0v39.6h128V90.75C128,90.75,76.12,67,36.12,72z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#e"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("ellipse", {
        cx: 48.7,
        cy: 94.5,
        rx: 11.31,
        ry: 4.62,
        fill: "#1E5F30"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("ellipse", {
          id: "d",
          cx: 48.7,
          cy: 94.5,
          rx: 11.31,
          ry: 4.62
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
      _react2.default.createElement("ellipse", {
        cx: 48.7,
        cy: 96.33,
        rx: 9.74,
        ry: 3.98,
        clipPath: "url(#c)",
        fill: "#FEF5A0"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.4
        },
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement("path", {
            id: "b",
            d:
              "M36.12,72c-40,5-35.2,26.83-36.03,29.66H0v39.6h128V90.75 C128,90.75,76.12,67,36.12,72z",
            opacity: 0.4
          })
        ),
        _react2.default.createElement(
          "clipPath",
          {
            id: "i"
          },
          _react2.default.createElement("use", {
            xlinkHref: "#b"
          })
        ),
        _react2.default.createElement(
          "g",
          {
            clipPath: "url(#i)"
          },
          _react2.default.createElement("path", {
            d:
              "m45.82 93.4c-0.73 0.38-1.02 1.29-0.63 2.02 0.27 0.51 0.79 0.8 1.33 0.8 0.23 0 0.47-0.05 0.69-0.17l6.62-3.11c-1.89-0.43-3.64-0.61-5.7-0.62l-2.31 1.08z",
            fill: "#757576"
          }),
          _react2.default.createElement("path", {
            d:
              "m78.13 74.48-29.92 15.5 5.71 0.58 28.86-15.11c-1.53-0.35-3.08-0.66-4.65-0.97z",
            fill: "#757576"
          }),
          _react2.default.createElement("polygon", {
            points: "53.83 92.98 48.11 92.33 48.13 89.92 53.99 90.42",
            fill: "#434343"
          })
        )
      ),
      _react2.default.createElement("path", {
        d:
          "m45.26 96.57c-1.1 0-2-0.71-2-1.59v-87.99c0-0.88 0.9-1.59 2-1.59s2 0.71 2 1.59v87.99c0 0.88-0.9 1.59-2 1.59z",
        fill: "#FCB64E"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "h",
          x1: 49.18,
          x2: 60.43,
          y1: 10.851,
          y2: 27.851,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#EF5451",
          offset: 0.2716
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E53A35",
          offset: 0.8315
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m73.81 23.48-26.99 9.12c-0.5 0.17-1.01-0.2-1.01-0.73v-20.8c0-0.55 0.56-0.92 1.07-0.7l26.99 11.69c0.65 0.27 0.61 1.2-0.06 1.42z",
        fill: "url(#h)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m45.26 6.4c0.56 0 1 0.32 1 0.59v3.53c0 0.4 0.24 0.76 0.6 0.92l26.06 11.29-25.98 8.77c-0.41 0.14-0.68 0.52-0.68 0.95v62.54c0 0.27-0.44 0.59-1 0.59s-1-0.32-1-0.59v-88c0-0.27 0.43-0.59 1-0.59m0-1c-1.1 0-2 0.71-2 1.59v87.99c0 0.88 0.9 1.59 2 1.59s2-0.71 2-1.59v-62.53l26.56-8.97c0.66-0.22 0.7-1.15 0.06-1.43l-26.62-11.52v-3.54c0-0.87-0.9-1.59-2-1.59z",
          fill: "#434343"
        })
      )
    )
  );
}

exports.default = Golf;
