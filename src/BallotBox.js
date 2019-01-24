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

function BallotBox(props) {
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
        "M124,93H4L3.97,75.99l6.89-27.43c0.67-2.67,3.07-4.54,5.82-4.54h94.61c2.77,0,5.17,1.89,5.83,4.58 l6.68,27.4L124,93z",
      fill: "#B0BEC5"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 64,
        x2: 64,
        y1: 55,
        y2: 131.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#78909C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m118 124.01h-108c-3.31 0-6-2.69-6-6v-42h120v42c0 3.32-2.69 6-6 6z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m94 64.7h-60c-2.76 0-5-2.24-5-5s2.24-5 5-5h60c2.76 0 5 2.24 5 5s-2.24 5-5 5z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m111.32 47.02c1.38 0 2.58 0.93 2.91 2.27l6.77 27.1v41.61c0 1.65-1.35 3-3 3h-108c-1.65 0-3-1.35-3-3v-41.61l6.77-27.1c0.33-1.34 1.53-2.27 2.91-2.27h94.64m0-3h-94.64c-2.75 0-5.15 1.87-5.82 4.54l-6.86 27.46v41.98c0 3.31 2.69 6 6 6h108c3.31 0 6-2.69 6-6v-41.98l-6.86-27.45c-0.67-2.67-3.07-4.55-5.82-4.55z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "e",
        x: 31.12,
        y: 3.44,
        width: 65.75,
        height: 61.27
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
      "linearGradient",
      {
        id: "d",
        x1: 64.002,
        x2: 64.002,
        y1: 10.839,
        y2: 63.579,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0.4154
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.24 10.49h-42.48c-3.31 0-6 2.69-6 6v48.21h54.48v-48.21c0-3.31-2.68-6-6-6z",
      clipPath: "url(#a)",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.002,
        x2: 64.002,
        y1: 10.869,
        y2: 68.282,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0.4104
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.6832
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EBC620",
        offset: 0.9155
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.24 10.49h-42.48c-3.31 0-6 2.69-6 6v53.02h54.48v-53.02c0-3.31-2.68-6-6-6z",
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
          "m85.24 13.49c1.65 0 3 1.35 3 3v50.02h-48.48v-50.02c0-1.65 1.35-3 3-3h42.48m0-3h-42.48c-3.31 0-6 2.69-6 6v53.02h54.48v-53.02c0-3.31-2.68-6-6-6z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#795548"
      },
      _react2.default.createElement("path", {
        d:
          "m72.41 53.6-23.13-23.14c-1.74-1.74-1.74-4.57 0-6.31s4.57-1.74 6.31 0l23.13 23.13c1.74 1.74 1.74 4.57 0 6.31-1.74 1.75-4.57 1.75-6.31 0.01z"
      }),
      _react2.default.createElement("path", {
        d:
          "m49.28 47.29 23.13-23.13c1.74-1.74 4.57-1.74 6.31 0s1.74 4.57 0 6.31l-23.13 23.13c-1.74 1.74-4.57 1.74-6.31 0-1.74-1.75-1.74-4.57 0-6.31z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.999,
        x2: 63.999,
        y1: 64.697,
        y2: 59.57,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#444",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#444",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m29.01 59.57c0 0.04-0.01 0.08-0.01 0.13 0 2.76 2.24 5 5 5h60c2.76 0 5-2.24 5-5 0-0.04-0.01-0.08-0.01-0.13h-69.98z",
      fill: "url(#b)",
      opacity: 0.4
    })
  );
}

exports.default = BallotBox;
