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

function Sailboat(props) {
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
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 108.33,
        y2: 126.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0.9826
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 108,
      width: 120,
      height: 16,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m121 111v10h-114v-10h114m3-3h-120v16h120v-16z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m32.98 98.02 9.2-6.02 33.66 1.84c0.72 0.04 1.31 0.59 1.4 1.3l0.66 7.45-44.92-4.57z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement("polygon", {
      points: "64 11.64 81.45 16 64 20.36",
      fill: "#E65100"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.07 103.64h-0.14c-0.44 0-0.79-0.36-0.79-0.79v-90.42c0-0.44 0.36-0.79 0.79-0.79h0.14c0.44 0 0.79 0.36 0.79 0.79v90.42c0 0.43-0.35 0.79-0.79 0.79z",
      fill: "#5D4037"
    }),
    _react2.default.createElement("path", {
      d: "m63.09 54h-14.42l-6.48 9h20.88l0.02-9z",
      fill: "#81D4FA"
    }),
    _react2.default.createElement("polygon", {
      points: "63.06 63 42.19 63 33.5 76 63.03 76",
      fill: "#039BE5"
    }),
    _react2.default.createElement("polygon", {
      points: "33.5 76 23.67 90 63 90 63.03 76",
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("path", {
      d: "m63.14 33.17-14.47 20.83h14.42l0.05-20.83z",
      fill: "#B3E5FC"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m60.11 42.78-0.03 11.21-0.02 9-0.03 13-0.02 11.01h-30.57l6.51-9.28 0.04-0.06 8.66-12.96 6.45-8.96 0.02-0.02 0.01-0.02 8.98-12.92m3.03-9.78zm0 0.17-14.47 20.83-6.48 9-8.69 13-9.83 14h39.33l0.03-14 0.03-13 0.02-9 0.06-20.83z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 16,
        x2: 112,
        y1: 104.64,
        y2: 104.64,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0.0095774
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FD9A14",
        offset: 0.3163
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FC9005",
        offset: 0.6933
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m16.08 94.41 7.61 19.43c0.13 0.34 0.41 0.59 0.76 0.66 2.2 0.45 4.24 1.87 41.64 1.87 34.19 0 42.09-2.84 45.19-3.84 0.43-0.14 0.73-0.56 0.73-1.04v-7.3c0-0.61-0.48-1.11-1.07-1.09-4.96 0.14-26.61-0.84-53.19-2.91-25.85-2.01-36.66-6.12-40.41-7.23-0.85-0.26-1.59 0.61-1.26 1.45z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 84.205,
        x2: 84.205,
        y1: 26.75,
        y2: 96.218,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.009644
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 25.21s4 15.23 4.31 35.86c0.33 21.45-4.31 34.93-4.31 34.93l39.89 1s8.11-56.32-39.89-71.79z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 30.52,
      cy: 106.02,
      r: 3.61,
      fill: "#5D4037"
    }),
    _react2.default.createElement("circle", {
      cx: 43.2,
      cy: 107.8,
      r: 3.2,
      fill: "#5D4037"
    }),
    _react2.default.createElement("circle", {
      cx: 56.3,
      cy: 108.89,
      r: 3.2,
      fill: "#5D4037"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m20.32 97.02c5.84 1.74 17.03 4.59 37.18 6.15 22.74 1.77 43.59 2.85 51.49 2.93v3.99c-3.84 1.15-13.38 3.27-42.91 3.27-31.91 0-37.76-1.03-39.97-1.55l-5.79-14.79m-3.28-4.11c-0.71 0-1.25 0.76-0.96 1.5l7.61 19.43c0.13 0.34 0.41 0.59 0.76 0.66 2.2 0.45 4.24 1.87 41.64 1.87 34.19 0 42.09-2.84 45.19-3.84 0.43-0.14 0.73-0.56 0.73-1.04v-7.3c0-0.6-0.47-1.09-1.04-1.09h-0.03c-0.31 0.01-0.69 0.01-1.13 0.01-6.57 0-27.15-0.98-52.06-2.92-25.85-2.01-36.66-6.12-40.41-7.23-0.11-0.04-0.21-0.05-0.3-0.05z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m68.11 29.92c15.93 6.7 26.31 19.3 30.88 37.53 2.84 11.31 2.54 21.76 2.19 26.48l-33.24-0.83c1.4-5.57 3.6-16.84 3.37-32.08-0.2-13.6-1.96-24.81-3.2-31.1m-4.11-4.71s4 15.23 4.31 35.86c0.33 21.45-4.31 34.93-4.31 34.93l39.89 1s8.11-56.32-39.89-71.79z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Sailboat;