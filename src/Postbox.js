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

function Postbox(props) {
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
        id: "i",
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
        xlinkHref: "#i"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64,
        x2: 64,
        y1: 92.983,
        y2: 128.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.2748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("rect", {
      x: 50.41,
      y: 84,
      width: 27.18,
      height: 44,
      clipPath: "url(#a)",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m74.59 87v38h-21.18v-38h21.18m3-3h-27.18v44h27.18v-44z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 64,
        x2: 64,
        y1: 5.0431,
        y2: 96.972,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.1383
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.6599
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102 99.96h-76c-4.42 0-8-3.58-8-8v-79.96c0-4.42 3.58-8 8-8h76c4.42 0 8 3.58 8 8v79.96c0 4.42-3.58 8-8 8z",
      clipPath: "url(#a)",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102 7.07c2.72 0 4.93 2.21 4.93 4.93v79.96c0 2.72-2.21 4.93-4.93 4.93h-76c-2.72 0-4.93-2.21-4.93-4.93v-79.96c0-2.72 2.21-4.93 4.93-4.93h76m0-3.07h-76c-4.42 0-8 3.58-8 8v79.96c0 4.42 3.58 8 8 8h76c4.42 0 8-3.58 8-8v-79.96c0-4.42-3.58-8-8-8z",
        fill: "#444"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95 33.95h-62c-2.21 0-4-1.79-4-4v-2.01c0-2.21 1.79-4 4-4h62c2.21 0 4 1.79 4 4v2.01c0 2.21-1.79 4-4 4z",
      clipPath: "url(#a)",
      fill: "#444"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 63.667,
        x2: 63.667,
        y1: 35.828,
        y2: 79.469,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.3406
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        stopOpacity: 0,
        offset: 0.8799
      })
    ),
    _react2.default.createElement("rect", {
      x: 42.33,
      y: 35.33,
      width: 42.67,
      height: 45.56,
      fill: "url(#f)",
      opacity: 0.4
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "e",
        x: 36.81,
        y: 25.5,
        width: 54.38,
        height: 53.5
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 46.516,
          x2: 77.752,
          y1: 15.536,
          y2: 62.169,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFC107",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFD54F",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m84.34 68.15v-54.01c0-2.21-1.79-4-4-4h-33.34c-2.21 0-4 1.79-4 4v54.01c0 2.21 1.79 4 4 4h33.34c2.21 0 4-1.79 4-4z",
        fill: "url(#d)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 54.187,
          x2: 90.664,
          y1: 9.77,
          y2: 53.763,
          gradientTransform: "matrix(0 1 1 0 -43.127 -79.123)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFC107",
          offset: 0.2369
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFD54F",
          offset: 0.8023
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m43.07 68.61-0.07-55.71c0-1.53 1.24-2.77 2.77-2.77 0.22 0 0.42 0.1 0.55 0.27l23.3 30.26c0.19 0.25 0.19 0.6 0 0.85l-23.23 30.36c-0.13 0.18-3.1-3.26-3.32-3.26z",
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "k",
          d:
            "m84.34 68.15v-54.01c0-2.21-1.79-4-4-4h-33.34c-2.21 0-4 1.79-4 4v54.01c0 2.21 1.79 4 4 4h33.34c2.21 0 4-1.79 4-4z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "c"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#k"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          clipPath: "url(#c)",
          fill: "none",
          stroke: "#FFB300",
          strokeMiterlimit: 10,
          strokeWidth: 3.2631
        },
        _react2.default.createElement("line", {
          x1: 62,
          x2: 86.37,
          y1: 30.3,
          y2: 7.97
        }),
        _react2.default.createElement("line", {
          x1: 61.94,
          x2: 86.47,
          y1: 51.94,
          y2: 74.22
        })
      ),
      _react2.default.createElement("polyline", {
        points: "44.95 8.11 69.94 41.09 45.04 74.17",
        clipPath: "url(#c)",
        fill: "none",
        stroke: "#FFB300",
        strokeMiterlimit: 10,
        strokeWidth: 3.2631
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m80.44 12.31c0.95 0 1.72 0.77 1.72 1.72v54.22c0 0.95-0.77 1.72-1.72 1.72h-33.55c-0.95 0-1.72-0.77-1.72-1.72v-54.22c0-0.95 0.77-1.72 1.72-1.72h33.55m0-2.17h-33.55c-2.15 0-3.89 1.74-3.89 3.89v54.22c0 2.15 1.74 3.89 3.89 3.89h33.55c2.15 0 3.89-1.74 3.89-3.89v-54.22c0.01-2.15-1.73-3.89-3.89-3.89z",
          fill: "#444"
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 63.613,
        x2: 63.613,
        y1: 67.573,
        y2: 25.058,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 0.7524
      }),
      _react2.default.createElement("stop", {
        stopColor: "#444",
        offset: 0.9032
      })
    ),
    _react2.default.createElement("rect", {
      x: 42.87,
      y: 25.06,
      width: 41.48,
      height: 42.52,
      clipPath: "url(#b)",
      fill: "url(#j)",
      opacity: 0.4
    })
  );
}

exports.default = Postbox;
