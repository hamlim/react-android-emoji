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

function InboxTray(props) {
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
        "m113.76 112.44h-99.85c-3.39 0-6.14-2.75-6.14-6.14v-24.04c0-3.39 2.75-6.14 6.14-6.14h99.86c3.39 0 6.14 2.75 6.14 6.14v24.04c0 3.39-2.75 6.14-6.15 6.14z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.76 79.11c1.73 0 3.14 1.41 3.14 3.14v24.04c0 1.73-1.41 3.14-3.14 3.14h-99.85c-1.73 0-3.14-1.41-3.14-3.14v-24.03c0-1.73 1.41-3.14 3.14-3.14h99.85m0-3.01h-99.85c-3.39 0-6.14 2.75-6.14 6.14v24.04c0 3.39 2.75 6.14 6.14 6.14h99.86c3.39 0 6.14-2.75 6.14-6.14v-24.03c0-3.4-2.75-6.15-6.15-6.15z",
        fill: "#444"
      })
    ),
    _react2.default.createElement("rect", {
      x: 11.9,
      y: 87.87,
      width: 104.05,
      height: 21.74,
      fill: "#ECEFF1"
    }),
    _react2.default.createElement("line", {
      x1: 32.17,
      x2: 95.83,
      y1: 93.01,
      y2: 93.01,
      fill: "none",
      stroke: "#90A4AE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.95 89.87v17.74h-100.05v-17.74h100.05m2-2h-104.05v21.74h104.05v-21.74z",
        fill: "#444"
      })
    ),
    _react2.default.createElement("line", {
      x1: 32.17,
      x2: 95.83,
      y1: 99.04,
      y2: 99.04,
      fill: "none",
      stroke: "#90A4AE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.929,
        x2: 63.929,
        y1: 52,
        y2: 132.83,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0.3438
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92 76.11c0 13.15-8.33 27.85-28 27.85s-28-14.7-28-27.85c0-0.01-26.07 0-26.07 0-3.31 0-6 2.67-6 5.95v36.01c0 3.29 2.69 5.95 6 5.95h108c3.31 0 6-2.67 6-5.95v-36c0-3.29-2.69-5.95-6-5.95 0-0.01-25.93-0.02-25.93-0.01z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98.72 79.11c7.68 0 19.21 0.01 19.21 0.01 1.65 0 3 1.32 3 2.95v36.01c0 1.63-1.35 2.95-3 2.95h-108c-1.65 0-3-1.32-3-2.95v-36.01c0-1.63 1.35-2.95 3-2.95 0 0 11.59-0.01 19.31-0.01h3.89c1.22 13.93 11 27.85 30.87 27.85s29.65-13.92 30.87-27.85h3.85m0-3c-3.84 0-6.72 0-6.72 0.01 0 13.15-8.33 27.85-28 27.85s-28-14.7-28-27.85c0 0-2.9-0.01-6.76-0.01-7.72 0-19.31 0.01-19.31 0.01-3.31 0-6 2.67-6 5.95v36.01c0 3.29 2.69 5.95 6 5.95h108c3.31 0 6-2.67 6-5.95v-36.01c0-3.29-2.69-5.95-6-5.95 0-0.01-11.53-0.01-19.21-0.01z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64.067,
        x2: 64.067,
        y1: 8.8412,
        y2: 66.002,
        gradientTransform: "translate(0 -2.2147)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.0077527
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.03 67.55-26.93-21.85c-1.21-0.98-0.51-2.93 1.04-2.93h53.86c1.56 0 2.25 1.95 1.04 2.93l-26.93 21.85c-0.61 0.49-1.48 0.49-2.08 0z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.067,
        x2: 64.067,
        y1: 14.839,
        y2: 63.59,
        gradientTransform: "translate(0 -2.2147)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.0077527
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.97 47.39h-25.8c-1.1 0-2-0.9-2-2v-34.29c0-1.1 0.9-2 2-2h25.8c1.1 0 2 0.9 2 2v34.29c0 1.11-0.9 2-2 2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m76.49 11.58v31.19c0 1.37 1.11 2.48 2.48 2.48h9.7l-24.6 19.96-24.6-19.96h9.7c1.37 0 2.48-1.11 2.48-2.48v-31.19h24.84m0.83-2.48h-26.5c-0.91 0-1.65 0.74-1.65 1.65v32.01h-12.03c-1.56 0-2.25 1.95-1.04 2.93l26.93 21.85c0.3 0.25 0.67 0.37 1.04 0.37s0.74-0.12 1.04-0.37l26.93-21.84c1.21-0.98 0.51-2.93-1.04-2.93h-12.03v-32.02c0-0.91-0.74-1.65-1.65-1.65z",
        fill: "#444"
      })
    )
  );
}

exports.default = InboxTray;
