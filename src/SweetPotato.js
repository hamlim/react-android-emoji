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

function SweetPotato(props) {
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
        id: "f",
        x1: 14.74,
        x2: 82.805,
        y1: 31.558,
        y2: 56.107,
        gradientTransform: "matrix(.9803 .1975 -.1975 .9803 13.697 -11.299)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F78C1E",
        offset: 0.2933
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5871F",
        offset: 0.3444
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F07922",
        offset: 0.5285
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE7023",
        offset: 0.7147
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED6D23",
        offset: 0.9049
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34.21 89.08c-32.4-7.13-34.73-39.34-25.52-52.76 5.57-8.11 10.77-13.17 21.58-16.24 15.42-4.37 22.18-6.06 34.89-6.55 8.93-0.34 18.84-3.11 24.05-1.37 7.22 2.41 14.72 2.99 17.52 3.44 8.59 1.37 9.96 2.41 16.15 6.18 1.88 1.15 1.25 4.05-0.88 4.63-1.62 0.44-3.15 14.39-12.52 21.48-12.71 9.62-8.93 15.46-25.42 26.11-8.55 5.52-12.03 11.34-22.68 13.4-7.6 1.47-18.22 3.65-27.17 1.68z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 37.923,
        cy: 56.314,
        r: 36.538,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEC111",
        offset: 0.5233
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDBE12",
        offset: 0.6569
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCB516",
        offset: 0.7877
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAA71A",
        offset: 0.9169
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A01B",
        offset: 0.9715
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m50.63 27.69c-1.29-0.57-2.6-1.05-3.92-1.44l-3.27 6.51-1.23-7.51c-2.18-0.32-4.37-0.42-6.53-0.29-0.66 0.04-1.62 3.47-1.62 3.47s-1.81-3.1-2.54-2.96c-9.78 1.86-18.45 8.24-22.75 17.91-7.01 15.8 0.35 34.4 16.45 41.55s34.84 0.12 41.85-15.68c7.02-15.81-0.34-34.42-16.44-41.56z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m34.21 89.08c-32.4-7.13-34.73-39.34-25.52-52.76 5.57-8.11 10.77-13.17 21.58-16.24 15.42-4.37 22.18-6.06 34.89-6.55 8.93-0.34 18.84-3.11 24.05-1.37 7.22 2.41 14.72 2.99 17.52 3.44 8.59 1.37 9.96 2.41 16.15 6.18 1.88 1.15 1.25 4.05-0.88 4.63-1.62 0.44-3.15 14.39-12.52 21.48-12.71 9.62-8.93 15.46-25.42 26.11-8.55 5.52-12.03 11.34-22.68 13.4-7.6 1.47-18.22 3.65-27.17 1.68z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.88 74.54c5.46-21.85-11.93-37.67-11.93-37.67s5.26 5.9 7.46 14.72 2.45 22.21-3.49 29.2c-0.92 1.09 5.12-3.79 5.12-3.79l2.84-2.46z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.63 13.27c14.98 2.44 19.64 19.77 19.64 19.77s-13.16-23.69-36.84-18.19c-1.4 0.33 9.31-2.56 9.31-2.56l7.89 0.98z",
        fill: "#434343",
        opacity: 0.5
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m107.27 49.55c0.68-12.7-12.53-21.65-12.53-21.65s13.39 16.52 8.29 26.95c-0.42 0.87 2.76-3.26 2.76-3.26l1.48-2.04z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m114.43 46.34c0.25-7.99-6.47-14.59-6.47-14.59s6.88 11.04 1.65 18.73c-0.36 0.53 3.81-2.8 3.81-2.8l1.01-1.34z",
        fill: "#434343",
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
          "m84.82 13.59c1.59 0 2.81 0.15 3.75 0.47 5.96 1.99 12.06 2.76 15.71 3.23 0.86 0.11 1.61 0.2 2.13 0.29 7.8 1.25 9.24 2.13 14.59 5.41l0.83 0.51c0.07 0.04 0.19 0.12 0.15 0.39-0.03 0.22-0.19 0.52-0.51 0.61-1.53 0.42-2.03 1.88-3.12 5.08-1.55 4.58-4.15 12.25-10.09 16.74-5.99 4.53-8.51 8.31-10.95 11.96-2.9 4.34-5.63 8.43-14.35 14.06-2.78 1.8-4.99 3.58-7.12 5.3-4.49 3.63-8.04 6.5-14.85 7.81l-0.73 0.14c-5.26 1.02-11.8 2.29-18.11 2.29-2.76 0-5.29-0.25-7.52-0.74-16.29-3.59-23.24-13.29-26.21-20.8-4.49-11.38-2.16-22.94 1.91-28.87 5.33-7.76 10.18-12.53 20.48-15.45 15.57-4.42 22.12-6.01 34.42-6.48 3.42-0.13 6.9-0.6 10.27-1.05 3.43-0.47 6.67-0.9 9.32-0.9m0-2c-5.43 0-12.83 1.68-19.66 1.94-12.71 0.49-19.47 2.18-34.89 6.55-10.81 3.07-16.01 8.13-21.58 16.24-9.22 13.42-6.88 45.63 25.52 52.76 2.55 0.56 5.24 0.79 7.95 0.79 6.81 0 13.79-1.41 19.22-2.47 10.65-2.06 14.13-7.88 22.68-13.4 16.49-10.65 12.71-16.49 25.43-26.11 9.37-7.09 10.91-21.04 12.52-21.48 2.13-0.58 2.76-3.48 0.88-4.63-6.18-3.78-7.56-4.81-16.15-6.18-2.8-0.45-10.31-1.03-17.52-3.44-1.24-0.41-2.72-0.57-4.4-0.57z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 9.8684,
        x2: 88.207,
        y1: 100.36,
        y2: 100.36,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F78C1E",
        offset: 0.2933
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5871F",
        offset: 0.3444
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F07922",
        offset: 0.5285
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE7023",
        offset: 0.7147
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED6D23",
        offset: 0.9049
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.99 93.96v0.02c-6.02-5.69-19.84-9.68-35.94-9.68-16.74 0-31.02 4.31-36.62 10.36h-2.56v6.53l0.08 0.06c1.13 8.45 18.2 15.16 39.1 15.16 21.34 0 38.68-7 39.14-15.7l0.02-0.02v-6.74h-3.22z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49.04 79.58c10.21 0 19.77 1.62 26.93 4.55 6.5 2.67 10.23 6.13 10.23 9.47v0.05c-0.01 0.07-0.01 0.13-0.01 0.2-0.01 0.12 0 0.24 0.02 0.36v6.19c-0.01 0.06-0.02 0.13-0.02 0.19-0.36 6.67-15.37 13.81-37.14 13.81-9.84 0-19.16-1.52-26.24-4.28-6.47-2.52-10.44-5.86-10.88-9.15-0.01-0.1-0.03-0.19-0.06-0.28v-5.41c0.1-0.3 0.13-0.61 0.08-0.93-0.04-0.29-0.06-0.51-0.06-0.72 0-3.37 3.73-6.84 10.23-9.5 7.15-2.93 16.72-4.55 26.92-4.55m0-2c-21.63 0-39.16 7.19-39.16 16.06 0 0.34 0.04 0.68 0.09 1.02h-0.1v6.53l0.08 0.06c1.13 8.45 18.2 15.16 39.1 15.16 21.34 0 38.68-7 39.14-15.7l0.02-0.02v-6.74h-0.02c0-0.1 0.02-0.21 0.02-0.31 0-8.87-17.54-16.06-39.17-16.06z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 48.261,
        cy: 92.858,
        r: 38.78,
        gradientTransform: "matrix(1 0 0 .4141 0 54.409)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCB28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCC2E",
        offset: 0.2139
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCF3C",
        offset: 0.4233
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD352",
        offset: 0.631
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDA6E",
        offset: 0.8363
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE081",
        offset: 0.9741
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 49.04,
      cy: 93.64,
      rx: 39.16,
      ry: 16.06,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49.04 79.58c10.21 0 19.77 1.62 26.93 4.55 6.5 2.67 10.23 6.13 10.23 9.5s-3.73 6.84-10.23 9.5c-7.16 2.94-16.73 4.55-26.93 4.55-10.21 0-19.77-1.62-26.93-4.55-6.5-2.67-10.23-6.13-10.23-9.5s3.73-6.84 10.23-9.5c7.16-2.93 16.73-4.55 26.93-4.55m0-2c-21.63 0-39.16 7.19-39.16 16.06s17.53 16.06 39.16 16.06 39.16-7.19 39.16-16.06-17.53-16.06-39.16-16.06z",
        fill: "#6D4D42"
      })
    )
  );
}

exports.default = SweetPotato;
