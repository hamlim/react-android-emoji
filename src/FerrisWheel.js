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

function FerrisWheel(props) {
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
      "g",
      {
        fill: "#BDBDBD"
      },
      _react2.default.createElement("path", {
        d:
          "m112 58.27h-96c-1.1 0-2-0.89-2-1.99s0.9-1.99 2-1.99h96c1.1 0 2 0.89 2 1.99s-0.9 1.99-2 1.99z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 106.07c-1.1 0-2-0.89-2-1.99v-95.6c0-1.1 0.9-1.99 2-1.99s2 0.89 2 1.99v95.6c0 1.1-0.9 1.99-2 1.99z"
      }),
      _react2.default.createElement("path", {
        d:
          "m98.5 92.63c-0.51 0-1.02-0.19-1.41-0.58l-69-68.71c-0.78-0.78-0.78-2.04 0-2.82s2.05-0.78 2.83 0l69 68.71c0.78 0.78 0.78 2.04 0 2.82-0.4 0.39-0.91 0.58-1.42 0.58z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.5 92.63c-0.51 0-1.02-0.19-1.41-0.58-0.78-0.78-0.78-2.04 0-2.82l69-68.71c0.78-0.78 2.05-0.78 2.83 0s0.78 2.04 0 2.82l-69 68.71c-0.4 0.39-0.91 0.58-1.42 0.58z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112 55.29c0.55 0 1 0.44 1 0.99s-0.45 0.99-1 0.99h-96c-0.55 0-1-0.44-1-0.99s0.45-0.99 1-0.99h96m0-1h-96c-1.1 0-2 0.89-2 1.99s0.9 1.99 2 1.99h96c1.1 0 2-0.89 2-1.99s-0.9-1.99-2-1.99z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 7.49c0.55 0 1 0.44 1 0.99v95.6c0 0.55-0.45 0.99-1 0.99s-1-0.44-1-0.99v-95.6c0-0.55 0.45-0.99 1-0.99m0-1c-1.1 0-2 0.89-2 1.99v95.6c0 1.1 0.9 1.99 2 1.99s2-0.89 2-1.99v-95.6c0-1.1-0.9-1.99-2-1.99z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.5 20.93c0.27 0 0.52 0.1 0.71 0.29l69 68.71c0.19 0.19 0.29 0.44 0.29 0.7s-0.1 0.51-0.29 0.7-0.44 0.29-0.71 0.29-0.52-0.1-0.71-0.29l-69-68.71c-0.19-0.19-0.29-0.44-0.29-0.7s0.1-0.51 0.29-0.7c0.19-0.18 0.44-0.29 0.71-0.29m0-1c-0.51 0-1.02 0.19-1.41 0.58-0.78 0.78-0.78 2.04 0 2.82l69 68.71c0.39 0.39 0.9 0.58 1.41 0.58s1.02-0.19 1.41-0.58c0.78-0.78 0.78-2.04 0-2.82l-69-68.71c-0.39-0.38-0.9-0.58-1.41-0.58z"
      }),
      _react2.default.createElement("path", {
        d:
          "m98.5 20.93c0.27 0 0.52 0.1 0.71 0.29s0.29 0.44 0.29 0.7-0.1 0.51-0.29 0.7l-69 68.71c-0.19 0.19-0.44 0.29-0.71 0.29s-0.52-0.1-0.71-0.29-0.29-0.44-0.29-0.7 0.1-0.51 0.29-0.7l69-68.71c0.19-0.18 0.44-0.29 0.71-0.29m0-1c-0.51 0-1.02 0.19-1.41 0.58l-69 68.71c-0.78 0.78-0.78 2.04 0 2.82 0.39 0.39 0.9 0.58 1.41 0.58s1.02-0.19 1.41-0.58l69-68.71c0.78-0.78 0.78-2.04 0-2.82-0.39-0.38-0.9-0.58-1.41-0.58z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M67.84,59.14c-0.58-1.97-2.59-3.22-4.7-2.77c-1.46,0.31-2.59,1.48-3.01,2.91l-21.18,62.16 c-0.38,1.28,0.58,2.55,1.92,2.55h4.17c0.89,0,1.67-0.58,1.92-1.43L64,74.38l17.05,48.19c0.25,0.85,1.03,1.43,1.92,1.43h4.17 c1.34,0,2.3-1.28,1.92-2.55L67.84,59.14z",
      fill: "#9575CD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 58.28c0.88 0 1.67 0.59 1.92 1.43 0.01 0.03 0.02 0.05 0.02 0.08l21.2 62.21h-4.17c-0.01-0.03-0.02-0.07-0.03-0.1l-17.05-48.18c-0.28-0.8-1.04-1.33-1.89-1.33s-1.6 0.53-1.89 1.33l-17.05 48.18c-0.01 0.03-0.02 0.06-0.03 0.1l-4.17 0.01 21.16-62.08c0.01-0.03 0.02-0.05 0.02-0.08 0.23-0.78 0.82-1.38 1.51-1.52 0.15-0.03 0.3-0.05 0.45-0.05m0-2c-0.28 0-0.57 0.03-0.87 0.09-1.46 0.31-2.59 1.48-3.01 2.91l-21.18 62.16c-0.38 1.28 0.58 2.55 1.92 2.55h4.17c0.89 0 1.67-0.58 1.92-1.43l17.05-48.18 17.05 48.19c0.25 0.85 1.03 1.43 1.92 1.43h4.17c1.34 0 2.3-1.28 1.92-2.55l-21.22-62.3c-0.5-1.7-2.07-2.87-3.84-2.87z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 20.43c19.85 0 36 16.08 36 35.85s-16.15 35.85-36 35.85-36-16.08-36-35.85 16.15-35.85 36-35.85m0-3.98c-22.09 0-40 17.83-40 39.83s17.91 39.83 40 39.83 40-17.83 40-39.83-17.91-39.83-40-39.83z",
      fill: "#7E57C2"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 8.98c26.19 0 47.5 21.22 47.5 47.3s-21.31 47.3-47.5 47.3-47.5-21.22-47.5-47.3 21.31-47.3 47.5-47.3m0-4.48c-28.72 0-52 23.18-52 51.78s23.28 51.78 52 51.78 52-23.18 52-51.78-23.28-51.78-52-51.78z",
      fill: "#7E57C2"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 17.45c21.5 0 39 17.42 39 38.83s-17.5 38.84-39 38.84-39-17.42-39-38.84 17.5-38.83 39-38.83m0 75.68c20.4 0 37-16.53 37-36.85s-16.6-36.85-37-36.85-37 16.53-37 36.85 16.6 36.85 37 36.85m0-76.68c-22.09 0-40 17.83-40 39.83s17.91 39.83 40 39.83 40-17.83 40-39.83-17.91-39.83-40-39.83zm0 75.68c-19.85 0-36-16.08-36-35.85s16.15-35.85 36-35.85 36 16.08 36 35.85-16.15 35.85-36 35.85z",
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
          "m64 5.5c28.12 0 51 22.78 51 50.78s-22.88 50.78-51 50.78-51-22.78-51-50.78 22.88-50.78 51-50.78m0 99.09c26.74 0 48.5-21.67 48.5-48.3s-21.76-48.31-48.5-48.31-48.5 21.67-48.5 48.3 21.76 48.31 48.5 48.31m0-100.09c-28.72 0-52 23.18-52 51.78s23.28 51.78 52 51.78 52-23.18 52-51.78-23.28-51.78-52-51.78zm0 99.09c-26.19 0-47.5-21.22-47.5-47.3s21.31-47.3 47.5-47.3 47.5 21.22 47.5 47.3-21.31 47.3-47.5 47.3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 56.28,
      rx: 16,
      ry: 15.93,
      fill: "#FFEB3B"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 56.28,
      rx: 10,
      ry: 9.96,
      fill: "#FFC107"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 42.34c7.72 0 14 6.25 14 13.94s-6.28 13.94-14 13.94-14-6.25-14-13.94 6.28-13.94 14-13.94m0-1.99c-8.84 0-16 7.13-16 15.93s7.16 15.93 16 15.93 16-7.13 16-15.93-7.16-15.93-16-15.93z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.51 5.71h0.93c0.46 0 0.83-0.37 0.83-0.83v-0.05c0.01-0.46-0.37-0.83-0.83-0.83h-3.28c-0.46 0-0.83 0.37-0.83 0.83v0.05c0 0.46 0.37 0.83 0.83 0.83h1.15l-1.44 3.21h-0.01l-1.66 3.74 1.18 0.52 0.66-1.47h3.74l0.66 1.47 1.18-0.52-3.11-6.95zm-0.58 1.8 0.62 1.39h-1.25l0.63-1.39zm-1.5 3.34 0.48-1.07h2.01l0.48 1.07h-2.97z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 63.912,
        x2: 63.912,
        y1: 9.8613,
        y2: 25.861,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE539",
        offset: 0.4869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.7747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.42 27.88h-19.01c-1.65 0-2.99-1.35-2.99-2.99v-12.94c0-1.65 1.35-2.99 2.99-2.99h19.01c1.65 0 2.99 1.35 2.99 2.99v12.93c0 1.65-1.35 3-2.99 3z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73.42 9.96c1.1 0 1.99 0.89 1.99 1.99v12.93c0 1.1-0.89 1.99-1.99 1.99h-19.01c-1.1 0-1.99-0.89-1.99-1.99v-12.93c0-1.1 0.89-1.99 1.99-1.99h19.01m0-1h-19.01c-1.65 0-2.99 1.35-2.99 2.99v12.93c0 1.65 1.35 2.99 2.99 2.99h19.01c1.65 0 2.99-1.35 2.99-2.99v-12.93c0-1.65-1.35-2.99-2.99-2.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.37 22.66h-6.96c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h6.96c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.64-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m67.37 13.24c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-6.96c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h6.96m0-1h-6.96c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h6.96c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m56.04 22.66h-4.62v-10.42h4.62c0.63 0 1.15 0.51 1.15 1.15v8.12c-0.01 0.64-0.52 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m56.04 13.24c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-3.63v-8.42h3.63m0-1h-4.62v10.42h4.62c0.63 0 1.15-0.51 1.15-1.15v-8.12c-0.01-0.63-0.52-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.41 22.66h-4.7c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h4.7v10.42z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.41 13.24v8.42h-3.7c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h3.7m1-1h-4.7c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h4.7v-10.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28.1 22.14h0.93c0.46 0 0.83-0.37 0.83-0.83v-0.05c0-0.46-0.37-0.83-0.83-0.83h-3.28c-0.46 0-0.83 0.37-0.83 0.83v0.05c0 0.46 0.37 0.83 0.83 0.83h1.15l-1.44 3.21h-0.01l-1.66 3.74 1.18 0.52 0.66-1.47h3.74l0.66 1.47 1.18-0.52-3.11-6.95zm-0.58 1.81 0.62 1.39h-1.25l0.63-1.39zm-1.51 3.33 0.48-1.07h2.01l0.48 1.07h-2.97z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 27.5,
        x2: 27.5,
        y1: 26.23,
        y2: 42.23,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE539",
        offset: 0.4869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.7747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m37.01 44.25h-19.02c-1.65 0-2.99-1.35-2.99-2.99v-12.94c0-1.65 1.35-2.99 2.99-2.99h19.01c1.65 0 2.99 1.35 2.99 2.99v12.93c0.01 1.65-1.34 3-2.98 3z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37.01 26.33c1.1 0 1.99 0.89 1.99 1.99v12.93c0 1.1-0.89 1.99-1.99 1.99h-19.02c-1.1 0-1.99-0.89-1.99-1.99v-12.93c0-1.1 0.89-1.99 1.99-1.99h19.02m0-1h-19.02c-1.65 0-2.99 1.35-2.99 2.99v12.93c0 1.65 1.35 2.99 2.99 2.99h19.01c1.65 0 2.99-1.35 2.99-2.99v-12.93c0.01-1.65-1.34-2.99-2.98-2.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m30.96 39.03h-6.96c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h6.96c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.64-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.96 29.61c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-6.96c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h6.96m0-1h-6.96c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h6.96c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.62 39.03h-4.62v-10.42h4.62c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.64-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m19.62 29.61c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-3.62v-8.42h3.62m0-1h-4.62v10.42h4.62c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M40,39.03h-4.7c-0.63,0-1.15-0.51-1.15-1.15v-8.12c0-0.63,0.51-1.15,1.15-1.15H40V39.03z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m39 29.61v8.42h-3.7c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h3.7m1-1h-4.7c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h4.7v-10.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.1 22.14h0.93c0.46 0 0.83-0.37 0.83-0.83v-0.05c0-0.46-0.37-0.83-0.83-0.83h-3.28c-0.46 0-0.83 0.37-0.83 0.83v0.05c0 0.46 0.37 0.83 0.83 0.83h1.15l-1.44 3.21h-0.01l-1.66 3.74 1.18 0.52 0.66-1.47h3.74l0.66 1.47 1.18-0.52-3.11-6.95zm-0.58 1.81 0.62 1.39h-1.25l0.63-1.39zm-1.51 3.33 0.48-1.07h2.01l0.48 1.07h-2.97z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 100.5,
        x2: 100.5,
        y1: 26.23,
        y2: 42.23,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE539",
        offset: 0.4869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.7747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.01 44.25h-19.02c-1.65 0-2.99-1.35-2.99-2.99v-12.94c0-1.65 1.35-2.99 2.99-2.99h19.01c1.65 0 2.99 1.35 2.99 2.99v12.93c0.01 1.65-1.34 3-2.98 3z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m110.01 26.33c1.1 0 1.99 0.89 1.99 1.99v12.93c0 1.1-0.89 1.99-1.99 1.99h-19.02c-1.1 0-1.99-0.89-1.99-1.99v-12.93c0-1.1 0.89-1.99 1.99-1.99h19.02m0-1h-19.02c-1.65 0-2.99 1.35-2.99 2.99v12.93c0 1.65 1.35 2.99 2.99 2.99h19.01c1.65 0 2.99-1.35 2.99-2.99v-12.93c0.01-1.65-1.34-2.99-2.98-2.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m103.96 39.03h-6.96c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h6.96c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.64-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.96 29.61c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-6.96c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h6.96m0-1h-6.96c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h6.96c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.62 39.03h-4.62v-10.42h4.62c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.64-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m92.62 29.61c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-3.62v-8.42h3.62m0-1h-4.62v10.42h4.62c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113 39.03h-4.7c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h4.7v10.42z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112 29.61v8.42h-3.7c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h3.7m1-1h-4.7c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h4.7v-10.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.1 89.51h0.93c0.46 0 0.83-0.37 0.83-0.83v-0.05c0-0.46-0.37-0.83-0.83-0.83h-3.28c-0.46 0-0.83 0.37-0.83 0.83v0.05c0 0.46 0.37 0.83 0.83 0.83h1.15l-1.44 3.21h-0.01l-1.66 3.74 1.18 0.52 0.66-1.47h3.74l0.66 1.47 1.18-0.52-3.11-6.95zm-0.58 1.8 0.62 1.39h-1.25l0.63-1.39zm-1.51 3.34 0.48-1.07h2.01l0.48 1.07h-2.97z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 26.5,
        x2: 26.5,
        y1: 93.408,
        y2: 109.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE539",
        offset: 0.4869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.7747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.01 111.42h-19.02c-1.65 0-2.99-1.35-2.99-2.99v-12.93c0-1.65 1.35-2.99 2.99-2.99h19.01c1.65 0 2.99 1.35 2.99 2.99v12.93c0.01 1.65-1.34 2.99-2.98 2.99z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m36.01 93.5c1.1 0 1.99 0.89 1.99 1.99v12.93c0 1.1-0.89 1.99-1.99 1.99h-19.02c-1.1 0-1.99-0.89-1.99-1.99v-12.92c0-1.1 0.89-1.99 1.99-1.99h19.02m0-1.01h-19.02c-1.65 0-2.99 1.35-2.99 2.99v12.93c0 1.65 1.35 2.99 2.99 2.99h19.01c1.65 0 2.99-1.35 2.99-2.99v-12.92c0.01-1.65-1.34-3-2.98-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m29.96 106.21h-6.96c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h6.96c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.63-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m29.96 96.79c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-6.96c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h6.96m0-1h-6.96c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h6.96c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m18.62 106.21h-4.62v-10.42h4.62c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.63-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m18.62 96.79c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-3.62v-8.42h3.62m0-1h-4.62v10.42h4.62c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39 106.21h-4.7c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h4.7v10.42z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m38 96.79v8.42h-3.7c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h3.7m1-1h-4.7c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h4.7v-10.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102.1 89.51h0.93c0.46 0 0.83-0.37 0.83-0.83v-0.05c0-0.46-0.37-0.83-0.83-0.83h-3.28c-0.46 0-0.83 0.37-0.83 0.83v0.05c0 0.46 0.37 0.83 0.83 0.83h1.15l-1.44 3.21h-0.01l-1.66 3.74 1.18 0.52 0.66-1.47h3.74l0.66 1.47 1.18-0.52-3.11-6.95zm-0.58 1.8 0.62 1.39h-1.25l0.63-1.39zm-1.51 3.34 0.48-1.07h2.01l0.48 1.07h-2.97z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 101.5,
        x2: 101.5,
        y1: 93.408,
        y2: 109.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE539",
        offset: 0.4869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.7747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m111.01 111.42h-19.02c-1.65 0-2.99-1.35-2.99-2.99v-12.93c0-1.65 1.35-2.99 2.99-2.99h19.01c1.65 0 2.99 1.35 2.99 2.99v12.93c0.01 1.65-1.34 2.99-2.98 2.99z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m111.01 93.5c1.1 0 1.99 0.89 1.99 1.99v12.93c0 1.1-0.89 1.99-1.99 1.99h-19.02c-1.1 0-1.99-0.89-1.99-1.99v-12.92c0-1.1 0.89-1.99 1.99-1.99h19.02m0-1.01h-19.02c-1.65 0-2.99 1.35-2.99 2.99v12.93c0 1.65 1.35 2.99 2.99 2.99h19.01c1.65 0 2.99-1.35 2.99-2.99v-12.92c0.01-1.65-1.34-3-2.98-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.96 106.21h-6.96c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h6.96c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.63-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.96 96.79c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-6.96c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h6.96m0-1h-6.96c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h6.96c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m93.62 106.21h-4.62v-10.42h4.62c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.63-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m93.62 96.79c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-3.62v-8.42h3.62m0-1h-4.62v10.42h4.62c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114 106.21h-4.7c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h4.7v10.42z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113 96.79v8.42h-3.7c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h3.7m1-1h-4.7c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h4.7v-10.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m15.1 57.64h0.93c0.46 0 0.83-0.37 0.83-0.83v-0.05c0-0.46-0.37-0.83-0.83-0.83h-3.28c-0.46 0-0.83 0.37-0.83 0.83v0.05c0 0.46 0.37 0.83 0.83 0.83h1.15l-1.44 3.21h-0.01l-1.66 3.74 1.18 0.52 0.66-1.47h3.74l0.66 1.47 1.18-0.52-3.11-6.95zm-0.58 1.8 0.62 1.39h-1.25l0.63-1.39zm-1.51 3.34 0.48-1.07h2.01l0.48 1.07h-2.97z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 16.5,
        x2: 16.5,
        y1: 61.603,
        y2: 77.603,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE539",
        offset: 0.4869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.7747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m26.01 79.62h-19.02c-1.64 0-2.99-1.35-2.99-2.99v-12.94c0-1.65 1.35-2.99 2.99-2.99h19.01c1.65 0 2.99 1.35 2.99 2.99v12.93c0.01 1.65-1.34 3-2.98 3z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26.01 61.7c1.1 0 1.99 0.89 1.99 1.99v12.93c0 1.1-0.89 1.99-1.99 1.99h-19.02c-1.1 0-1.99-0.89-1.99-1.99v-12.93c0-1.1 0.89-1.99 1.99-1.99h19.02m0-1h-19.02c-1.64 0-2.99 1.35-2.99 2.99v12.93c0 1.65 1.35 2.99 2.99 2.99h19.01c1.65 0 2.99-1.35 2.99-2.99v-12.93c0.01-1.64-1.34-2.99-2.98-2.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.96 74.4h-6.96c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h6.96c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.64-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m19.96 64.98c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-6.96c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h6.96m0-0.99h-6.96c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h6.96c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.64-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M8.62,74.4H4V63.99h4.62c0.63,0,1.15,0.51,1.15,1.15v8.12C9.77,73.89,9.26,74.4,8.62,74.4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m8.62 64.98c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-3.62v-8.42h3.62m0-0.99h-4.62v10.41h4.62c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.14-1.15-1.14z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M29,74.4h-4.7c-0.63,0-1.15-0.51-1.15-1.15v-8.12c0-0.63,0.51-1.15,1.15-1.15H29V74.4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m28 64.98v8.42h-3.7c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h3.7m1-0.99h-4.7c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h4.7v-10.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.1 57.64h0.93c0.46 0 0.83-0.37 0.83-0.83v-0.05c0-0.46-0.37-0.83-0.83-0.83h-3.28c-0.46 0-0.83 0.37-0.83 0.83v0.05c0 0.46 0.37 0.83 0.83 0.83h1.15l-1.44 3.21h-0.01l-1.66 3.74 1.18 0.52 0.66-1.47h3.74l0.66 1.47 1.18-0.52-3.11-6.95zm-0.58 1.8 0.62 1.39h-1.25l0.63-1.39zm-1.51 3.34 0.48-1.07h2.01l0.48 1.07h-2.97z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 111.5,
        x2: 111.5,
        y1: 61.603,
        y2: 77.603,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE539",
        offset: 0.4869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD333",
        offset: 0.7747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.01 79.62h-19.01c-1.65 0-2.99-1.35-2.99-2.99v-12.94c0-1.65 1.35-2.99 2.99-2.99h19.01c1.65 0 2.99 1.35 2.99 2.99v12.93c0 1.65-1.35 3-2.99 3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121.01 61.7c1.1 0 1.99 0.89 1.99 1.99v12.93c0 1.1-0.89 1.99-1.99 1.99h-19.01c-1.1 0-1.99-0.89-1.99-1.99v-12.93c0-1.1 0.89-1.99 1.99-1.99h19.01m0-1h-19.01c-1.65 0-2.99 1.35-2.99 2.99v12.93c0 1.65 1.35 2.99 2.99 2.99h19.01c1.65 0 2.99-1.35 2.99-2.99v-12.93c0-1.64-1.35-2.99-2.99-2.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.96 74.4h-6.96c-0.63 0-1.15-0.51-1.15-1.15v-8.12c0-0.63 0.51-1.15 1.15-1.15h6.96c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.64-0.51 1.15-1.15 1.15z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m114.96 64.98c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-6.96c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h6.96m0-0.99h-6.96c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h6.96c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.64-0.51-1.15-1.15-1.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m103.62 74.4h-4.62v-10.41h4.62c0.63 0 1.15 0.51 1.15 1.15v8.12c0 0.63-0.51 1.14-1.15 1.14z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.62 64.98c0.08 0 0.15 0.07 0.15 0.15v8.12c0 0.08-0.07 0.15-0.15 0.15h-3.62v-8.42h3.62m0-0.99h-4.62v10.41h4.62c0.63 0 1.15-0.51 1.15-1.15v-8.12c0-0.63-0.51-1.14-1.15-1.14z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,74.4h-4.7c-0.63,0-1.15-0.51-1.15-1.15v-8.12c0-0.63,0.51-1.15,1.15-1.15h4.7V74.4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m123 64.98v8.42h-3.7c-0.08 0-0.15-0.07-0.15-0.15v-8.12c0-0.08 0.07-0.15 0.15-0.15h3.7m1-0.99h-4.7c-0.63 0-1.15 0.51-1.15 1.15v8.12c0 0.63 0.51 1.15 1.15 1.15h4.7v-10.42z",
        fill: "#424242"
      })
    )
  );
}

exports.default = FerrisWheel;
