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

function FountainPen(props) {
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
        id: "h",
        x1: 19.655,
        x2: 19.655,
        y1: 93,
        y2: 126.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m12.07 103.24c4.21 0.21 14.97-10.56 14.97-10.56l8.27 8.27s-10.76 10.77-10.56 14.98c0.03 0.52-0.34 0.99-0.85 1.1-2.68 0.6-10.44 2.59-17.71 6.78-0.39 0.22-0.84 0.25-1.24 0.1-0.19-0.07-0.37-0.18-0.52-0.33-0.17-0.17-0.27-0.35-0.35-0.54-0.15-0.4-0.12-0.85 0.1-1.24 4.18-7.27 6.17-15.03 6.77-17.72 0.13-0.51 0.59-0.87 1.12-0.84z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m15.48 113.38-10.52 10.53c-0.19-0.07-0.37-0.18-0.52-0.33-0.17-0.17-0.27-0.35-0.35-0.54l10.52-10.52c-0.44-0.82-0.32-1.86 0.37-2.55 0.84-0.84 2.21-0.84 3.05 0s0.84 2.21 0 3.05c-0.69 0.68-1.74 0.81-2.55 0.36z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 91.675,
        x2: 91.675,
        y1: -7.6667,
        y2: 35.476,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 0.9765
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m107.33 5.33c-1.61-1.61-4.21-1.61-5.82 0l-21.98 18.75c-1.69 1.43-3.32 2.94-4.89 4.5l-3.27 3.27c-0.11 0.11-0.11 0.28 0 0.39 1.1 1.1 2.88 1.1 3.97 0l2.04-2.04c0.36-0.36 0.58-0.8 0.68-1.26 0.15-0.71 0.55-1.34 1.1-1.8l21.62-18.18c0.8-0.8 2.83-1.53 3.64-0.73l4.73 4.73 2.91-2.91-4.73-4.72z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m27.01 96.88 4.09 4.1c-3.43 3.66-8.18 9.29-9.17 13.43-2.86 0.71-7.73 2.13-12.89 4.54 2.41-5.15 3.82-10.02 4.54-12.89 4.12-0.97 9.77-5.74 13.43-9.18m0.03-4.21s-10.56 10.57-14.85 10.57h-0.12-0.05c-0.5 0-0.94 0.36-1.05 0.85-0.6 2.69-2.59 10.45-6.77 17.72-0.22 0.39-0.25 0.84-0.1 1.24 0.07 0.19 0.18 0.37 0.35 0.54 0.15 0.15 0.33 0.26 0.52 0.33 0.16 0.05 0.33 0.08 0.51 0.08 0.25 0 0.49-0.06 0.72-0.19 7.26-4.18 15.02-6.17 17.71-6.78 0.51-0.12 0.87-0.58 0.85-1.1-0.21-4.21 10.56-14.98 10.56-14.98l-8.28-8.28z",
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
          "m16.5 110.33c0.31 0 0.6 0.12 0.82 0.34 0.45 0.45 0.45 1.18 0 1.63-0.22 0.22-0.51 0.34-0.81 0.34-0.19 0-0.38-0.05-0.55-0.14l-0.3-0.16-0.16-0.3c-0.24-0.45-0.16-1.01 0.2-1.37 0.21-0.22 0.5-0.34 0.8-0.34m0-1c-0.55 0-1.1 0.21-1.52 0.63-0.69 0.69-0.81 1.74-0.37 2.55l-10.52 10.53c0.07 0.19 0.18 0.37 0.35 0.54 0.15 0.15 0.33 0.26 0.52 0.33l10.52-10.52c0.32 0.17 0.67 0.26 1.03 0.26 0.55 0 1.1-0.21 1.52-0.63 0.84-0.84 0.84-2.21 0-3.05-0.42-0.43-0.97-0.64-1.53-0.64z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 27.013,
        x2: 27.013,
        y1: 89.667,
        y2: 108.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m33.52 106.1-11.63-11.64-0.31 0.31c-1.44 1.44-1.44 3.77 0 5.21l6.43 6.43c1.44 1.44 3.77 1.44 5.21 0l0.3-0.31z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 51.883,
        x2: 51.883,
        y1: 40,
        y2: 108.66,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.25 53.72-7.64-7.64c-37.69 38.2-44.72 48.38-44.72 48.38l11.64 11.64s10.18-7.03 48.36-44.75l-7.64-7.63z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m66.62 50.34 11 11c-27.14 26.73-39.48 37.26-43.84 40.78l-7.91-7.91c3.48-4.34 13.92-16.59 40.75-43.87m-0.01-4.26c-37.69 38.2-44.72 48.38-44.72 48.38l11.64 11.64s10.18-7.03 48.36-44.75l-7.64-7.64-7.64-7.63z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 93.7,
        x2: 93.7,
        y1: 2.3333,
        y2: 67.104,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.73 15.91-0.14-0.14c1.22-2.54-0.41-5.49-3.15-8.22s-5.68-4.37-8.22-3.15l-0.14-0.14s-23.31 16.29-48.16 42.3c-0.72 0.75-0.7 1.94 0.03 2.68l14.82 14.82c0.73 0.73 1.93 0.75 2.68 0.03 26-24.86 42.28-48.18 42.28-48.18z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 113.35,
        x2: 113.35,
        y1: 2.5,
        y2: 25.255,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.73 6.73c-0.93 0.69-2.04 1.53-3.31 2.51l13.35 13.35c0.97-1.27 1.81-2.38 2.51-3.31l-12.55-12.55z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m114.03 7c0.38 0 1.81 0.19 4.29 2.68 2.03 2.03 3.01 3.87 2.56 4.8l-0.36 0.75c-3.41 4.71-18.38 24.78-40.38 45.96l-6.65-6.66-6.66-6.66c21.15-22 41.23-36.99 45.94-40.41l0.75-0.36c0.17-0.07 0.33-0.1 0.51-0.1m0-3c-0.62 0-1.22 0.13-1.81 0.41l-0.14-0.14s-23.31 16.29-48.16 42.3c-0.72 0.75-0.7 1.94 0.03 2.68l14.82 14.82c0.37 0.37 0.86 0.56 1.36 0.56 0.48 0 0.95-0.18 1.32-0.53 26-24.87 42.28-48.19 42.28-48.19l-0.14-0.14c1.22-2.54-0.41-5.49-3.15-8.22-2.1-2.1-4.33-3.55-6.41-3.55z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m123.73 15.91-0.14-0.14c1.22-2.54-0.41-5.49-3.15-8.22s-5.68-4.37-8.22-3.15l-0.14-0.14s-23.31 16.29-48.16 42.3c-0.72 0.75-0.7 1.94 0.03 2.68l14.82 14.82c0.73 0.73 1.93 0.75 2.68 0.03 26-24.86 42.28-48.18 42.28-48.18z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#FFB300"
      },
      _react2.default.createElement("path", {
        d:
          "m64.37 43.29c-0.38 0.39-0.77 0.8-1.15 1.22l20.29 20.3c0.42-0.38 0.82-0.76 1.22-1.15l-20.36-20.37z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64.37 43.29c-0.38 0.39-0.77 0.8-1.15 1.22l20.29 20.3c0.42-0.38 0.82-0.76 1.22-1.15l-20.36-20.37z",
        opacity: 0.3
      })
    )
  );
}

exports.default = FountainPen;
