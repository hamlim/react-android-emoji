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

function Tent(props) {
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
        id: "g",
        cx: 63.866,
        cy: 18.214,
        r: 77.705,
        gradientTransform: "matrix(1 0 0 .919 0 1.1813)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF6C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122.72 81.02c-8.7-66.78-58.72-62.37-58.72-62.37s-50.02-4.41-58.72 62.37c-0.87 6.71-1.33 14.14-1.28 22.35 0.02 2.98 2.87 5.26 6.07 4.86 9.21-1.15 28.52-3.1 53.92-3.1s44.71 1.95 53.92 3.1c3.21 0.4 6.05-1.89 6.07-4.86 0.07-8.21-0.39-15.64-1.26-22.35z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.9 21.59c4.42 0 15.93 0.84 27.29 8.58 14.47 9.85 23.4 27.1 26.55 51.25 0.82 6.33 1.25 13.24 1.25 20.56v0.8 0.23 0.2 0.04 0.02 0.14 0.37c0 0.57 0 1.14-0.01 1.71-0.01 0.49-0.6 0.92-1.26 0.92-0.07 0-0.15 0-0.22-0.01-9.43-1.22-29.17-3.28-55.5-3.28s-46.07 2.05-55.5 3.28c-0.07 0.01-0.15 0.01-0.22 0.01-0.67 0-1.26-0.43-1.26-0.92-0.01-0.58-0.01-1.14-0.01-1.71v-0.41-0.11-0.06-0.18-0.25-0.81c0.01-7.3 0.43-14.22 1.25-20.54 3.15-24.15 12.08-41.39 26.55-51.25 11.36-7.74 22.87-8.57 27.29-8.57 1.04 0 1.64 0.05 1.64 0.05l0.26 0.01 0.26-0.02s0.6-0.05 1.64-0.05m0-3c-1.22 0-1.9 0.06-1.9 0.06s-0.68-0.06-1.9-0.06c-9.21 0-49.13 3.44-56.82 62.43-0.82 6.32-1.27 13.28-1.28 20.93v1.07 0.36 0.03c0 0.7 0 1.4 0.01 2.12 0.03 2.18 1.97 3.88 4.26 3.88 0.2 0 0.4-0.01 0.61-0.04 8.66-1.12 28.56-3.25 55.12-3.25s46.46 2.13 55.12 3.25c0.2 0.03 0.41 0.04 0.61 0.04 2.3 0 4.24-1.7 4.26-3.88 0.01-0.72 0.01-1.42 0.01-2.12v-0.03-0.36-1.07c-0.01-7.65-0.45-14.61-1.28-20.93-7.69-58.98-47.6-62.43-56.82-62.43z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 64,
        cy: 19.902,
        r: 93.587,
        gradientTransform: "matrix(1 0 0 .919 0 1.1813)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9100",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122.72 82.01c-26.11-56.97-58.72-62.38-58.72-62.38s-32.61 5.41-58.72 62.38c-0.91 7.02-1.37 14.83-1.27 23.52 0.03 2.37 2.32 4.17 4.87 3.84 8.66-1.12 28.56-3.25 55.12-3.25s46.46 2.13 55.12 3.25c2.55 0.33 4.84-1.47 4.87-3.84 0.1-8.69-0.36-16.5-1.27-23.52z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 22.7c1.9 0.46 8.95 2.52 18.18 9.46 18 13.54 30.37 34.94 37.62 50.68 0.88 6.98 1.28 14.59 1.19 22.65-0.01 0.49-0.6 0.92-1.26 0.92-0.07 0-0.15 0-0.22-0.01-9.43-1.22-29.17-3.28-55.5-3.28s-46.07 2.05-55.5 3.28c-0.07 0.01-0.15 0.01-0.22 0.01-0.67 0-1.26-0.43-1.26-0.92-0.1-8.05 0.3-15.67 1.19-22.65 7.25-15.73 19.62-37.14 37.62-50.68 9.21-6.94 16.26-9 18.16-9.46m0-3.07s-32.61 5.41-58.72 62.37c-0.91 7.02-1.37 14.83-1.27 23.52 0.03 2.18 1.97 3.88 4.26 3.88 0.2 0 0.4-0.01 0.61-0.04 8.66-1.12 28.56-3.25 55.12-3.25s46.46 2.13 55.12 3.25c0.2 0.03 0.41 0.04 0.61 0.04 2.3 0 4.24-1.7 4.26-3.88 0.11-8.69-0.35-16.5-1.27-23.52-26.11-56.96-58.72-62.37-58.72-62.37z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 67.475,
        cy: 60.829,
        r: 22.459,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BF360C",
        offset: 0.7719
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BF360C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m87.37 83.66c-1.68-9.65-3.84-16.57-5.13-20.19-0.63-1.76-2.22-2.91-3.99-2.91h-28.5c-1.77 0-3.36 1.15-3.99 2.91-1.3 3.62-3.46 10.54-5.13 20.19 7.07-1.53 15-2.38 23.37-2.38s16.3 0.86 23.37 2.38z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 63.603,
        cy: 80.97,
        r: 31.565,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BF360C",
        offset: 0.7719
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BF360C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m42.84 106.01h21.16 21.16c2.47 0 4.44-2.21 4.27-4.83-0.41-6.56-1.17-12.42-2.05-17.52-7.07-1.53-15-2.38-23.37-2.38s-16.3 0.86-23.37 2.38c-0.89 5.1-1.64 10.95-2.05 17.52-0.18 2.61 1.79 4.83 4.25 4.83z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64,
        cy: 81.937,
        r: 37.006,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E65100",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m42.84 106.01h21.16 21.16c2.47 0 4.44-2.21 4.27-4.83-0.41-6.56-1.17-12.42-2.05-17.52-7.07-1.53-15-2.38-23.37-2.38s-16.3 0.86-23.37 2.38c-0.89 5.1-1.64 10.95-2.05 17.52-0.18 2.61 1.79 4.83 4.25 4.83z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78.25 63.56c0.51 0 0.97 0.36 1.17 0.92 1.15 3.2 3.32 10.01 5 19.69 0.97 5.58 1.65 11.37 2.02 17.19 0.03 0.47-0.13 0.92-0.43 1.25-0.17 0.18-0.45 0.39-0.85 0.39h-21.16-21.16c-0.4 0-0.68-0.21-0.85-0.39-0.3-0.32-0.46-0.78-0.43-1.25 0.37-5.83 1.05-11.61 2.02-17.19 1.68-9.68 3.86-16.49 5-19.69 0.2-0.56 0.66-0.92 1.17-0.92h28.5m0-3h-28.5c-1.77 0-3.36 1.15-3.99 2.91-1.3 3.62-3.46 10.54-5.13 20.19-0.89 5.1-1.64 10.95-2.05 17.52-0.17 2.61 1.81 4.83 4.27 4.83h21.16 21.16c2.47 0 4.44-2.21 4.27-4.83-0.41-6.56-1.17-12.42-2.05-17.52-1.68-9.65-3.84-16.57-5.13-20.19-0.65-1.76-2.24-2.91-4.01-2.91z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m87.37 83.66c-1.68-9.65-3.84-16.57-5.13-20.19-0.63-1.76-2.22-2.91-3.99-2.91h-28.5c-1.77 0-3.36 1.15-3.99 2.91-1.3 3.62-3.46 10.54-5.13 20.19-0.89 5.1-1.64 10.95-2.05 17.52-0.17 2.61 1.81 4.83 4.27 4.83h21.16 21.16c2.47 0 4.44-2.21 4.27-4.83-0.43-6.56-1.18-12.42-2.07-17.52z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 52.275,
        y2: 67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.95 57.64s-7.79-3.29-15.45 1.24c0 0-12.71-2.05-17.37 1.11 0 0-2.52 7.23 3.34 11.12 0 0 8.64 0.17 15.02-4.15 0 0 6.2 2.27 13.82-1.2 0 0 6.8 3.47 14.38 1.11 0 0 7.1 3.94 15.45 3.98 0 0 4.32-6.97 1.07-11.25 0 0-6.72-2.22-15.27-0.77-0.02 0.01-7.59-4.4-14.99-1.19z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m70.76 58.47c4.45 0 8.12 2.08 8.15 2.1l0.63 0.36 0.71-0.12c1.82-0.31 3.69-0.47 5.58-0.47 3.85 0 6.83 0.65 8.09 0.98 1.15 2.22 0 5.57-0.96 7.5-7.2-0.37-13.25-3.66-13.31-3.69l-0.75-0.41-0.82 0.25c-1.56 0.48-3.21 0.73-4.92 0.73-4.49 0-7.93-1.7-7.96-1.71l-0.86-0.44-0.88 0.4c-2.55 1.16-5.2 1.75-7.88 1.75-2.67 0-4.41-0.6-4.42-0.61l-0.96-0.35-0.85 0.57c-4.86 3.3-11.32 3.74-13.26 3.8-3.09-2.43-2.62-6.25-2.26-7.79 1.07-0.51 3.19-1.09 7.24-1.09 4.14 0 8.06 0.62 8.1 0.63l0.71 0.12 0.62-0.37c2.37-1.41 5.02-2.12 7.88-2.12 3.33 0 5.75 0.99 5.77 1l0.79 0.33 0.79-0.34c1.55-0.67 3.24-1.01 5.03-1.01m0-2c-1.85 0-3.84 0.31-5.82 1.17 0 0-2.73-1.16-6.55-1.16-2.63 0-5.77 0.55-8.89 2.4 0 0-4.05-0.65-8.42-0.65-3.37 0-6.92 0.39-8.95 1.77 0 0-2.52 7.23 3.34 11.12h0.14c1.12 0 8.98-0.15 14.88-4.15 0 0 1.99 0.73 5.11 0.73 2.38 0 5.41-0.43 8.71-1.93 0 0 3.79 1.93 8.86 1.93 1.72 0 3.59-0.22 5.51-0.82 0 0 7.1 3.94 15.45 3.98 0 0 4.32-6.97 1.07-11.25 0 0-3.82-1.26-9.36-1.26-1.81 0-3.81 0.14-5.92 0.49 0 0-4.07-2.37-9.16-2.37z",
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
          "m50.3 58.42s-1.19-0.18-1.58 0.4-0.43 4.39 1.09 8.51c0 0 0.68 0.53 1.62-0.11 0 0.01-2-5.5-1.13-8.8z",
        fill: "#D84315"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78.97 58.33s1.15-0.2 1.53 0.38 0.42 4.39-1.06 8.51c0 0-0.66 0.53-1.58-0.11 0 0.01 1.96-5.48 1.11-8.78z",
        fill: "#D84315"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.8 57.24s0.78-0.6 1.4 0.31c0.33 0.49 0.06 8.36-0.2 8.53s-1.4 0.15-1.43-0.04c0.01 0-0.55-3.81 0.23-8.8z",
        fill: "#D84315"
      })
    )
  );
}

exports.default = Tent;
