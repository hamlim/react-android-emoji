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

function Microphone(props) {
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
        "m15.66 124c-2.98 0-4.76-1.45-5.83-3.11-1.91-3-1.38-7.1 1.26-9.75l5.64-5.65 2.12 2.12-5.64 5.65c-1.66 1.66-2.01 4.18-0.85 6.01 2.28 3.58 8.13 0.9 12.63-1.97 6.38-4.07 11.28-5.16 14.55-3.23 2.94 1.73 3.6 6.01 3.73 8.35 0.05 0.86-0.64 1.58-1.5 1.58-0.79 0-1.45-0.61-1.5-1.41-0.1-1.84-0.54-4.94-2.26-5.94-1.53-0.9-4.75-1.07-11.41 3.18-4.78 3.06-8.32 4.17-10.94 4.17z",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("path", {
      d:
        "m12.7 110.81c-1.56-1.56-1.56-4.1 0-5.66l4.24-7.08 8.49 8.5-7.07 4.25c-1.57 1.56-4.1 1.56-5.66-0.01z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m17.54 102.91 3.06 3.06-3.78 2.27-0.32 0.19-0.26 0.26c-0.23 0.23-0.5 0.28-0.69 0.28-0.08 0-0.16-0.01-0.24-0.03l-0.4-0.09-0.22-0.35c-0.2-0.33-0.25-0.86 0.14-1.24l0.26-0.26 0.19-0.32 2.26-3.77m-0.6-4.84-4.24 7.08c-1.34 1.34-1.52 3.4-0.56 4.95l-1.04 1.05c-2.64 2.65-3.17 6.74-1.26 9.75 1.06 1.67 2.84 3.11 5.83 3.11 2.62 0 6.16-1.11 10.95-4.17 4.44-2.83 7.35-3.7 9.25-3.7 0.95 0 1.65 0.22 2.16 0.52 1.72 1.01 2.16 4.11 2.26 5.94 0.04 0.79 0.71 1.41 1.5 1.41 0.86 0 1.55-0.72 1.5-1.58-0.13-2.34-0.79-6.62-3.73-8.35-1.05-0.62-2.26-0.92-3.64-0.92-2.92 0-6.57 1.39-10.91 4.16-2.96 1.89-6.5 3.69-9.22 3.69-1.42 0-2.62-0.49-3.41-1.72-1.16-1.82-0.8-4.35 0.85-6.01l1.4-1.4c0.31 0.07 0.62 0.11 0.93 0.11 1.02 0 2.04-0.38 2.81-1.16l7.07-4.25-8.5-8.51z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 53.976,
        cy: 35.587,
        r: 70.217,
        gradientTransform: "matrix(1 0 0 1.0013 0 -.0852)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C4FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3ABFFD",
        offset: 0.2233
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B1F7",
        offset: 0.5256
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0C9BEE",
        offset: 0.8716
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.93 41.52-50.4 55.13c-1.56 1.56-0.3 5.37 2.83 8.5s6.92 4.4 8.49 2.83l55.05-50.47c-3.58-1.25-6.94-3.31-9.81-6.17-2.86-2.87-4.91-6.24-6.16-9.82z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m74.92 31.51-8.99 10.01c1.25 3.59 3.3 6.95 6.16 9.82s6.22 4.92 9.81 6.17l9.99-9.01-16.97-16.99z",
      fill: "#0091EA"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.25 69.71c-0.94 0-1.82-0.36-2.47-1.02-1.36-1.37-1.36-3.59 0-4.96l4.24-4.25c0.66-0.66 1.54-1.02 2.48-1.02s1.82 0.36 2.47 1.02c1.36 1.37 1.36 3.59 0 4.96l-4.24 4.25c-0.67 0.65-1.55 1.02-2.48 1.02z",
      fill: "#0091EA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m61.49 58.45c0.94 0 1.82 0.36 2.47 1.02 1.36 1.37 1.36 3.59 0 4.96l-4.24 4.25c-0.66 0.66-1.54 1.02-2.48 1.02s-1.82-0.36-2.47-1.02c-1.36-1.37-1.36-3.59 0-4.96l4.24-4.25c0.66-0.65 1.54-1.02 2.48-1.02m0-2c-1.47 0-2.85 0.57-3.89 1.61l-4.24 4.25c-2.14 2.15-2.14 5.64 0 7.78 1.04 1.04 2.42 1.61 3.89 1.61s2.85-0.57 3.89-1.61l4.24-4.25c2.14-2.15 2.14-5.64 0-7.78-1.04-1.04-2.42-1.61-3.89-1.61z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.04 35.87 12.5 12.52-7.67 6.91-54.93 50.35c-0.78-0.02-2.58-0.73-4.47-2.62-2.04-2.04-2.61-3.87-2.62-4.48l50.31-55.03 6.88-7.65m-0.12-4.36-8.99 10.01-50.4 55.13c-1.56 1.56-0.3 5.37 2.83 8.5 2.22 2.22 4.77 3.5 6.63 3.5 0.76 0 1.4-0.22 1.86-0.67l55.05-50.47 9.99-9.01-16.97-16.99z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 93.642,
        cy: 5.9204,
        r: 51.366,
        gradientTransform: "matrix(1 0 0 1.0013 0 -.0852)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6F6F6F",
        offset: 0.2223
      }),
      _react2.default.createElement("stop", {
        stopColor: "#606060",
        offset: 0.5051
      }),
      _react2.default.createElement("stop", {
        stopColor: "#464646",
        offset: 0.8196
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8589
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 93.31,
      cy: 30.09,
      rx: 26,
      ry: 26.03,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "b",
        cx: 93.3,
        cy: 30.03,
        rx: 26,
        ry: 26.03
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
        fill: "#9E9E9E"
      },
      _react2.default.createElement("ellipse", {
        cx: 97.54,
        cy: -11.86,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 91.88,
        cy: -6.2,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 86.23,
        cy: -0.53,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 80.57,
        cy: 5.13,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 74.91,
        cy: 10.8,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 69.25,
        cy: 16.46,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 63.6,
        cy: 22.12,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 57.94,
        cy: 27.79,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 52.28,
        cy: 33.45,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 100.37,
        cy: -3.37,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 94.71,
        cy: 2.3,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 89.05,
        cy: 7.96,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 83.4,
        cy: 13.63,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 77.74,
        cy: 19.29,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 72.08,
        cy: 24.96,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 66.43,
        cy: 30.62,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 60.77,
        cy: 36.29,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 55.11,
        cy: 41.95,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 108.85,
        cy: -0.53,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 103.2,
        cy: 5.13,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 97.54,
        cy: 10.8,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 91.88,
        cy: 16.46,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 86.23,
        cy: 22.12,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 80.57,
        cy: 27.79,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 74.91,
        cy: 33.45,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 69.25,
        cy: 39.12,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 63.6,
        cy: 44.78,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 111.68,
        cy: 7.96,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 106.02,
        cy: 13.63,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 100.37,
        cy: 19.29,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 94.71,
        cy: 24.96,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 89.05,
        cy: 30.62,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 83.4,
        cy: 36.29,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 77.74,
        cy: 41.95,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 72.08,
        cy: 47.61,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 66.43,
        cy: 53.28,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 120.17,
        cy: 10.8,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 114.51,
        cy: 16.46,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 108.85,
        cy: 22.12,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 103.2,
        cy: 27.79,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 97.54,
        cy: 33.45,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 91.88,
        cy: 39.12,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 86.23,
        cy: 44.78,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 80.57,
        cy: 50.45,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 74.91,
        cy: 56.11,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 123,
        cy: 19.29,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 117.34,
        cy: 24.96,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 111.68,
        cy: 30.62,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 106.02,
        cy: 36.29,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 100.37,
        cy: 41.95,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 94.71,
        cy: 47.61,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 89.05,
        cy: 53.28,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 83.4,
        cy: 58.94,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 77.74,
        cy: 64.61,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 131.48,
        cy: 22.12,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 125.82,
        cy: 27.79,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 120.17,
        cy: 33.45,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 114.51,
        cy: 39.12,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 108.85,
        cy: 44.78,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 103.2,
        cy: 50.45,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 97.54,
        cy: 56.11,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 91.88,
        cy: 61.78,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 86.23,
        cy: 67.44,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 134.31,
        cy: 30.62,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 128.65,
        cy: 36.29,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 123,
        cy: 41.95,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 117.34,
        cy: 47.61,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 111.68,
        cy: 53.28,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 106.02,
        cy: 58.94,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 100.37,
        cy: 64.61,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 94.71,
        cy: 70.27,
        rx: 2,
        ry: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 89.05,
        cy: 75.94,
        rx: 2,
        ry: 2,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m93.31 7.06c6.14 0 11.92 2.4 16.26 6.75 8.97 8.98 8.97 23.6 0 32.58-4.34 4.35-10.12 6.75-16.26 6.75s-11.92-2.4-16.26-6.75c-8.97-8.98-8.97-23.6 0-32.58 4.34-4.36 10.12-6.75 16.26-6.75m0-3c-6.65 0-13.31 2.54-18.38 7.63-10.15 10.17-10.15 26.65 0 36.82 5.08 5.08 11.73 7.63 18.38 7.63s13.31-2.54 18.38-7.63c10.15-10.17 10.15-26.65 0-36.82-5.07-5.09-11.73-7.63-18.38-7.63z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m107.93 51.1-35.6-35.65c-1.1-1.1-1.1-2.9 0-4.01l1.66-1.66c1.1-1.1 2.9-1.1 4 0l35.6 35.65c1.1 1.1 1.1 2.9 0 4.01l-1.66 1.66c-1.1 1.1-2.9 1.1-4 0z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.63 50.98-38.18-38.23c-0.78-0.78-0.78-2.05 0-2.83s2.05-0.78 2.83 0l38.18 38.23c0.78 0.78 0.78 2.05 0 2.83s-2.05 0.78-2.83 0z",
      fill: "#E0E0E0"
    })
  );
}

exports.default = Microphone;