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

function SpiralNotepad(props) {
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
        id: "e",
        x1: 65.316,
        x2: 65.316,
        y1: 15.301,
        y2: 123.52,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#888",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.23 123.57h-79.83c-1.54 0-2.79-1.25-2.79-2.79v-102.81c0-1.54 1.25-2.79 2.79-2.79h79.83c1.54 0 2.79 1.25 2.79 2.79v102.81c0 1.54-1.25 2.79-2.79 2.79z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 62.684,
        x2: 62.684,
        y1: 12.884,
        y2: 119.52,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102.6 118.83h-79.83c-1.54 0-2.79-1.23-2.79-2.74v-100.81c0-1.51 1.25-2.74 2.79-2.74h79.83c1.54 0 2.79 1.23 2.79 2.74v100.81c0 1.51-1.25 2.74-2.79 2.74z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#616161"
      },
      _react2.default.createElement("path", {
        d:
          "m93.27 45.51h-61.17c-1.37 0-2.49-1.11-2.49-2.49s1.11-2.49 2.49-2.49h61.16c1.37 0 2.49 1.11 2.49 2.49s-1.11 2.49-2.48 2.49z"
      }),
      _react2.default.createElement("path", {
        d:
          "m93.27 59.17h-61.17c-1.37 0-2.49-1.11-2.49-2.49s1.11-2.49 2.49-2.49h61.16c1.37 0 2.49 1.11 2.49 2.49s-1.11 2.49-2.48 2.49z"
      }),
      _react2.default.createElement("path", {
        d:
          "m93.27 72.82h-61.17c-1.37 0-2.49-1.11-2.49-2.49s1.11-2.49 2.49-2.49h61.16c1.37 0 2.49 1.11 2.49 2.49s-1.11 2.49-2.48 2.49z"
      }),
      _react2.default.createElement("path", {
        d:
          "m93.27 86.48h-61.17c-1.37 0-2.49-1.11-2.49-2.49s1.11-2.49 2.49-2.49h61.16c1.37 0 2.49 1.11 2.49 2.49s-1.11 2.49-2.48 2.49z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.26 100.14h-26.16c-1.37 0-2.49-1.11-2.49-2.49s1.11-2.49 2.49-2.49h26.16c1.37 0 2.49 1.11 2.49 2.49s-1.12 2.49-2.49 2.49z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.39 90.85-12.26 15.33-15.78 12.62h25.25c1.56 0 2.79-1.21 2.79-2.79v-25.16z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m77.35 118.8c0.8-4.35 1.07-9.43 0.36-15.9-0.16-1.48 0.94-2.79 2.42-2.86 3.44-0.17 9.35-0.6 13.54-1.72 6-1.59 11.73-7.47 11.73-7.47s-3.49 9.28-12.69 18.16c-6.49 6.25-15.36 9.79-15.36 9.79z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 38.403,
        x2: 38.403,
        y1: 1.6459,
        y2: 21.412,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.032
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.41 17.64c-1.26 0-2.66-1.89-2.66-4.43s1.4-4.43 2.66-4.43c1.19 0 2.51 1.72 2.64 4.07h5.22c-0.15-5.23-3.54-9.28-7.85-9.28-4.41 0-7.87 4.23-7.87 9.64 0 5.4 3.46 9.64 7.87 9.64 1.44 0 2.6-1.17 2.6-2.6-0.01-1.44-1.17-2.61-2.61-2.61z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 62.684,
        x2: 62.684,
        y1: 1.6459,
        y2: 21.412,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.032
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m62.69 17.64c-1.26 0-2.66-1.89-2.66-4.43s1.4-4.43 2.66-4.43c1.19 0 2.51 1.72 2.64 4.07h5.22c-0.16-5.23-3.55-9.28-7.86-9.28-4.41 0-7.87 4.23-7.87 9.64 0 5.4 3.46 9.64 7.87 9.64 1.44 0 2.6-1.17 2.6-2.6 0.01-1.44-1.16-2.61-2.6-2.61z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 87.891,
        x2: 87.891,
        y1: 1.6459,
        y2: 21.412,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.032
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m87.9 17.64c-1.26 0-2.66-1.89-2.66-4.43s1.4-4.43 2.66-4.43c1.19 0 2.51 1.72 2.64 4.07h5.22c-0.15-5.23-3.54-9.28-7.85-9.28-4.41 0-7.87 4.23-7.87 9.64 0 5.4 3.46 9.64 7.87 9.64 1.44 0 2.6-1.17 2.6-2.6-0.01-1.44-1.17-2.61-2.61-2.61z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m93.11 14.01c0.52 0.92 1.5 1.53 2.62 1.53h6.67c0.16 1.37 1.24 2.46 2.62 2.63v102.41h-79.41v-1.76c0-1.52-1.14-2.79-2.63-2.98v-100.3h7.59c1.12 0 2.1-0.61 2.61-1.53 0.11 0.19 0.24 0.37 0.39 0.54 0.57 0.63 1.38 0.99 2.23 0.99h5.21c0.85 0 1.66-0.36 2.23-0.99 0.15-0.17 0.28-0.35 0.39-0.54 0.52 0.92 1.5 1.53 2.62 1.53h8.61c1.12 0 2.1-0.61 2.61-1.53 0.11 0.19 0.24 0.37 0.39 0.54 0.57 0.63 1.38 0.99 2.23 0.99h5.21c0.85 0 1.66-0.36 2.23-0.99 0.15-0.17 0.28-0.35 0.39-0.54 0.52 0.92 1.5 1.53 2.62 1.53h9.53c1.12 0 2.1-0.61 2.61-1.53 0.11 0.19 0.24 0.37 0.39 0.54 0.57 0.63 1.38 0.99 2.23 0.99h5.21c0.85 0 1.66-0.36 2.23-0.99 0.13-0.17 0.26-0.35 0.37-0.54m-5.21-10.44c-4.23 0-7.57 3.89-7.84 8.97h-9.53c-0.28-5.08-3.61-8.97-7.83-8.97-4.23 0-7.57 3.89-7.84 8.97h-8.61c-0.28-5.08-3.61-8.97-7.83-8.97-4.23 0-7.57 3.89-7.84 8.97h-7.8c-1.54 0-2.79 1.23-2.79 2.74v100.81c0 1.46 1.17 2.64 2.63 2.72v1.97c0 1.54 1.25 2.79 2.79 2.79h79.83c1.54 0 2.79-1.25 2.79-2.79v-102.81c0-1.49-1.17-2.7-2.64-2.78-0.05-1.47-1.27-2.65-2.78-2.65h-6.87c-0.28-5.08-3.62-8.97-7.84-8.97zm-2.62 8.97c0.22-2.19 1.47-3.76 2.61-3.76s2.38 1.57 2.6 3.76h-5.21zm-25.2 0c0.22-2.19 1.47-3.76 2.61-3.76s2.38 1.57 2.6 3.76h-5.21zm-24.28 0c0.22-2.19 1.47-3.76 2.61-3.76s2.38 1.57 2.6 3.76h-5.21z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SpiralNotepad;
