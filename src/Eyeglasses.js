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

function Eyeglasses(props) {
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
        x1: 63.76,
        x2: 63.76,
        y1: 37.69,
        y2: 73.273,
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
        "m74.87 48.95c-0.46-0.44-1.1-0.53-1.64-0.24-0.02 0.01-1.78 0.93-4.01 0.78l-0.27-0.02c-1.86-0.12-3.62-0.23-5.57-0.24h-0.08c-1.12 0.01-3.51 0.14-5.25 0.25-2.17 0.14-3.69-0.74-3.69-0.74-0.54-0.33-1.21-0.26-1.69 0.18-0.47 0.44-0.66 1.16-0.46 1.81l2.91 9.54c0.19 0.61 0.67 1.05 1.25 1.12 0.58 0.08 1.14-0.23 1.45-0.77 0.02-0.03 1.82-3.15 6.04-3.19 4.17 0.05 5.98 3.07 6.05 3.19 0.28 0.49 0.76 0.79 1.27 0.79 0.06 0 0.12 0 0.19-0.01 0.58-0.08 1.07-0.53 1.24-1.15l2.71-9.54c0.18-0.63 0-1.33-0.45-1.76z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 31.48,
        x2: 31.48,
        y1: 37.69,
        y2: 73.273,
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
        "m57.84 50.84s-7.54-8.78-34.58-6.26c-18.05 1.68-19.03 3.36-19.03 3.36l-0.11 6.81s2.69 0.77 4.43 2.93c1.74 2.13 2.55 14.07 5.37 19.7 4.37 8.72 26.09 6.51 26.09 6.51s8.86 0.7 13.18-6.76c4.32-7.44 5.64-18.2 5.64-18.2l-0.99-8.09z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 33.753,
        x2: 33.753,
        y1: 35.771,
        y2: 83.24,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m51.67 53.86c0.87 1.48 1.57 4.92-0.16 12.87-1.72 7.96-3.88 13.38-18.61 12.55-9.48-0.54-16.08-0.52-17.59-14.35-0.93-8.59 0.11-11.84 0.82-12.88 0.7-1.03 3.23-4.01 17.91-3.49 14.66 0.51 16.77 3.81 17.63 5.3z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m51.67 53.86c0.87 1.48 1.57 4.92-0.16 12.87-1.72 7.96-3.88 13.38-18.61 12.55-9.48-0.54-16.08-0.52-17.59-14.35-0.93-8.59 0.11-11.84 0.82-12.88 0.7-1.03 3.23-4.01 17.91-3.49 14.66 0.51 16.77 3.81 17.63 5.3z",
      fill: "none"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m51.67 53.86c0.87 1.48 1.57 4.92-0.16 12.87-1.72 7.96-3.88 13.38-18.61 12.55-9.48-0.54-16.08-0.52-17.59-14.35-0.93-8.59 0.11-11.84 0.82-12.88 0.7-1.03 3.23-4.01 17.91-3.49 14.66 0.51 16.77 3.81 17.63 5.3z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#d)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 12.116,
          x2: 12.116,
          y1: 47.138,
          y2: 47.057,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#616161",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m12.27 47.06c-0.11 0-0.21 0.03-0.31 0.06 0.1-0.03 0.21-0.06 0.31-0.06z",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 11.751,
          x2: 11.751,
          y1: 47.386,
          y2: 47.146,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#616161",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m11.61 47.35c0.08-0.08 0.18-0.14 0.28-0.19-0.1 0.04-0.2 0.1-0.28 0.19z",
        fill: "url(#b)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.79 49.5c1.02 0 2.1 0.02 3.21 0.06 14.32 0.5 16.12 3.63 16.81 4.81 0.64 1.1 1.47 4.14-0.28 12.15-1.59 7.37-3.38 11.84-14.79 11.84-0.88 0-1.81-0.03-2.79-0.08l-0.77-0.04c-9.04-0.5-14.5-0.8-15.88-13.42-1-9.24 0.36-11.79 0.65-12.21 1.36-2.01 6.27-3.11 13.84-3.11m0-1c-11.82 0-14.02 2.6-14.67 3.55-0.71 1.04-1.75 4.29-0.82 12.88 1.51 13.84 8.11 13.81 17.59 14.35 1.01 0.06 1.95 0.09 2.85 0.09 12.18 0 14.16-5.22 15.77-12.63 1.73-7.95 1.03-11.39 0.16-12.87-0.86-1.49-2.97-4.79-17.63-5.31-1.16-0.04-2.24-0.06-3.25-0.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 96.52,
        x2: 96.52,
        y1: 37.69,
        y2: 73.273,
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
        "m70.16 50.84s7.54-8.78 34.58-6.26c18.05 1.68 19.02 3.36 19.02 3.36l0.11 6.81s-2.69 0.77-4.43 2.93c-1.74 2.13-2.55 14.07-5.37 19.7-4.37 8.72-26.09 6.51-26.09 6.51s-8.86 0.7-13.18-6.76c-4.32-7.44-5.64-18.2-5.64-18.2l1-8.09z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 94.247,
        x2: 94.247,
        y1: 35.771,
        y2: 83.24,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.33 53.86c-0.87 1.48-1.57 4.92 0.16 12.87 1.72 7.96 3.88 13.38 18.61 12.55 9.48-0.54 16.08-0.52 17.59-14.35 0.93-8.59-0.11-11.84-0.82-12.88-0.7-1.03-3.23-4.01-17.91-3.49-14.66 0.51-16.77 3.81-17.63 5.3z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "l",
        d:
          "m76.33 53.86c-0.87 1.48-1.57 4.92 0.16 12.87 1.72 7.96 3.88 13.38 18.61 12.55 9.48-0.54 16.08-0.52 17.59-14.35 0.93-8.59-0.11-11.84-0.82-12.88-0.7-1.03-3.23-4.01-17.91-3.49-14.66 0.51-16.77 3.81-17.63 5.3z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "k"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#l"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#k)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: -67.089,
          x2: -67.089,
          y1: 47.138,
          y2: 47.057,
          gradientTransform: "matrix(-1 0 0 1 49.124 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#616161",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m116.06 47.06c0.11 0 0.21 0.03 0.31 0.06-0.1-0.03-0.21-0.06-0.31-0.06z",
        fill: "url(#j)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "i",
          x1: -67.454,
          x2: -67.454,
          y1: 47.386,
          y2: 47.146,
          gradientTransform: "matrix(-1 0 0 1 49.124 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#616161",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m116.72 47.35c-0.08-0.08-0.18-0.14-0.28-0.19 0.1 0.04 0.19 0.1 0.28 0.19z",
        fill: "url(#i)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m97.21 49.5c7.57 0 12.48 1.11 13.84 3.11 0.28 0.42 1.65 2.97 0.65 12.21-1.38 12.61-6.84 12.92-15.88 13.42l-0.77 0.04c-0.98 0.06-1.91 0.08-2.79 0.08-11.41 0-13.2-4.47-14.79-11.84-1.74-8.01-0.92-11.05-0.27-12.16 0.68-1.18 2.48-4.3 16.8-4.81 1.12-0.03 2.19-0.05 3.21-0.05m0-1c-1.01 0-2.09 0.02-3.24 0.06-14.67 0.52-16.77 3.81-17.63 5.31-0.87 1.48-1.57 4.92 0.16 12.87 1.6 7.42 3.59 12.63 15.77 12.63 0.89 0 1.84-0.03 2.85-0.09 9.48-0.54 16.08-0.52 17.59-14.35 0.93-8.59-0.11-11.84-0.82-12.88-0.65-0.95-2.86-3.55-14.68-3.55z",
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
          "m95.46 46.12c2.86 0 5.92 0.15 9.1 0.45 11.42 1.06 15.73 2.12 17.23 2.61l0.07 4.21c-1.14 0.53-2.72 1.48-3.96 3.02-1.08 1.32-1.64 4.01-2.54 8.64-0.79 4.06-1.69 8.67-3.07 11.42-1.8 3.59-8.52 5.66-18.43 5.66-3.27 0-5.65-0.24-5.68-0.24-0.07-0.01-0.13-0.01-0.2-0.01-0.05 0-0.1 0-0.15 0.01-0.03 0-0.19 0.01-0.46 0.01-1.76 0-7.74-0.42-10.85-5.78-3.42-5.89-4.89-14.17-5.26-16.57-0.06-0.38-0.23-0.74-0.49-1.03-1.01-1.13-3.26-3.03-6.96-3.07-3.16 0.03-5.26 1.44-6.46 2.61-0.32 0.31-0.52 0.71-0.59 1.15-0.25 1.73-1.7 10.69-5.31 16.91-3.11 5.36-9.09 5.78-10.84 5.78-0.26 0-0.42-0.01-0.45-0.01-0.05 0-0.1-0.01-0.16-0.01-0.07 0-0.13 0-0.2 0.01-0.02 0-2.41 0.24-5.68 0.24-9.91 0-16.62-2.06-18.43-5.66-1.38-2.75-2.28-7.36-3.07-11.42-0.9-4.64-1.46-7.32-2.53-8.64-1.24-1.54-2.82-2.49-3.96-3.02l0.07-4.21c1.5-0.5 5.8-1.55 17.23-2.61 3.18-0.3 6.24-0.45 9.1-0.45 13.06 0 19.6 3.05 22.33 4.87 0.2 0.14 0.43 0.23 0.67 0.29 0.68 0.15 1.37 0.23 2.05 0.23 0.19 0 0.39-0.01 0.59-0.02 1.7-0.11 4.07-0.36 5.14-0.37 0.03 0 0.02-0.12 0.05-0.12h0.03c1.88 0 3.6 0.24 5.42 0.35l0.27 0.08c0.21 0.01 0.41 0.05 0.61 0.05 1.47 0 2.73-0.33 3.52-0.61 0.13-0.05 0.25-0.1 0.37-0.17 2.78-1.71 9.31-4.58 21.88-4.58m-62.92-2c-2.8 0-5.89 0.14-9.28 0.45-18.05 1.69-19.03 3.37-19.03 3.37l-0.11 6.81s2.69 0.77 4.43 2.93c1.74 2.13 2.55 14.07 5.37 19.7 2.9 5.79 13.45 6.76 20.21 6.76 3.42 0 5.88-0.25 5.88-0.25s0.22 0.02 0.6 0.02c2.07 0 8.93-0.49 12.58-6.78 3.73-6.43 5.22-15.32 5.56-17.62 0.93-0.91 2.58-2.02 5.09-2.05 2.86 0.03 4.61 1.47 5.45 2.4 0.42 2.75 1.94 11.13 5.51 17.27 3.64 6.28 10.51 6.78 12.58 6.78 0.39 0 0.6-0.02 0.6-0.02s2.45 0.25 5.88 0.25c6.76 0 17.31-0.97 20.21-6.76 2.82-5.62 3.63-17.56 5.37-19.7 1.74-2.16 4.43-2.93 4.43-2.93l-0.11-6.81s-0.97-1.68-19.02-3.36c-3.39-0.32-6.48-0.45-9.28-0.45-12.82 0-19.7 2.89-22.92 4.88-0.63 0.23-1.65 0.51-2.85 0.51-0.16 0-0.32 0-0.48-0.02l-0.27-0.02c-1.86-0.12-3.62-0.23-5.57-0.24h-0.08c-1.12 0.01-3.51 0.14-5.25 0.25-0.16 0.01-0.31 0.01-0.46 0.01-0.61 0-1.15-0.08-1.61-0.18-2.97-1.97-9.89-5.2-23.43-5.2z",
        fill: "#eee"
      })
    )
  );
}

exports.default = Eyeglasses;