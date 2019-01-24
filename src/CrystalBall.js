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

function CrystalBall(props) {
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
        "m99.3 106.61-7.3-14.61h-56l-7.3 14.61c-0.58 1.17-0.8 2.49-0.55 3.77 0.33 1.73 1.28 4.03 3.86 5.62 4.63 2.86 15.33 7.88 32 8 15.73-0.12 27.37-5.14 32-8 2.58-1.59 3.52-3.89 3.86-5.62 0.24-1.28 0.02-2.6-0.57-3.77z",
      fill: "#7E57C2"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 94,
        y2: 117.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#512DA8",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#512DA8",
        stopOpacity: 0,
        offset: 0.9936
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.3 106.61-7.3-14.61h-56l-7.3 14.61c-0.58 1.17-0.8 2.49-0.55 3.77 0.33 1.73 1.28 4.03 3.86 5.62 4.63 2.86 15.33 7.88 32 8 15.73-0.12 27.37-5.14 32-8 2.58-1.59 3.52-3.89 3.86-5.62 0.24-1.28 0.02-2.6-0.57-3.77z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m99.3 106.61-7.3-14.61h-56l-7.3 14.61c-0.58 1.17-0.8 2.49-0.55 3.77 0.33 1.73 1.28 4.03 3.86 5.62 4.63 2.86 15.33 7.88 32 8 15.73-0.12 27.37-5.14 32-8 2.58-1.59 3.52-3.89 3.86-5.62 0.24-1.28 0.02-2.6-0.57-3.77z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m90.15 95 6.48 12.95c0.3 0.61 0.41 1.27 0.29 1.86-0.31 1.58-1.14 2.8-2.49 3.64-1.23 0.76-12.5 7.41-30.4 7.55-16.65-0.12-26.84-5.32-30.44-7.55-1.35-0.83-2.18-2.06-2.49-3.64-0.12-0.6-0.01-1.26 0.29-1.86l6.46-12.95h52.3m1.85-3h-56l-7.3 14.61c-0.58 1.17-0.8 2.49-0.55 3.77 0.33 1.73 1.28 4.03 3.86 5.62 4.63 2.86 15.33 7.88 32 8 15.73-0.12 27.37-5.14 32-8 2.58-1.59 3.52-3.89 3.86-5.62 0.25-1.28 0.03-2.61-0.55-3.77l-7.32-14.61z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 64,
        cy: 53.925,
        r: 54.106,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#77D1F9",
        offset: 0.202
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5DC8F8",
        offset: 0.5425
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0.6923
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0.9936
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 55,
      r: 51,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 106.1,
        y2: 82.907,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#512DA8",
        stopOpacity: 0,
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#512DA8",
        offset: 0.7814
      }),
      _react2.default.createElement("stop", {
        stopColor: "#512DA8",
        offset: 0.9936
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.68 93.36c-0.35-0.7-0.56-1.44-0.82-2.18-1.44-4.03-13.36-7.18-27.86-7.18s-26.42 3.15-27.86 7.18c-0.26 0.73-0.48 1.48-0.82 2.18l-1.41 2.81c8.44 6.18 18.84 9.83 30.09 9.83s21.65-3.65 30.09-9.83l-1.41-2.81z",
      fill: "url(#a)",
      opacity: 0.4
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7c26.47 0 48 21.53 48 48s-21.53 48-48 48-48-21.53-48-48 21.53-48 48-48m0-3c-28.17 0-51 22.83-51 51s22.83 51 51 51 51-22.83 51-51-22.83-51-51-51z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.59 65.68c-4.88-0.37-8.72-4.43-8.76-9.4-0.04 4.97-3.9 9.02-8.78 9.4 4.88 0.37 8.74 4.42 8.78 9.38 0.04-4.96 3.88-9.01 8.76-9.38z",
      clipRule: "evenodd",
      fill: "#FFF59D",
      fillRule: "evenodd",
      opacity: 0.6
    }),
    _react2.default.createElement("path", {
      d:
        "m109.09 54.06c-3.56-0.27-6.37-3.24-6.41-6.86-0.03 3.63-2.84 6.59-6.4 6.86 3.56 0.27 6.37 3.23 6.4 6.86 0.04-3.62 2.84-6.59 6.41-6.86z",
      clipRule: "evenodd",
      fill: "#FFF59D",
      fillRule: "evenodd",
      opacity: 0.6
    }),
    _react2.default.createElement("path", {
      d:
        "m99.19 33.56c-5.64-0.54-10.03-5.32-9.98-11.08-0.16 5.75-4.7 10.37-10.38 10.7 5.66 0.54 10.04 5.33 9.98 11.08 0.17-5.74 4.71-10.37 10.38-10.7z",
      clipRule: "evenodd",
      fill: "#FFF59D",
      fillRule: "evenodd",
      opacity: 0.6
    })
  );
}

exports.default = CrystalBall;
