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

function MailboxWithMail(props) {
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
        id: "g",
        x1: 63.75,
        x2: 63.75,
        y1: 92.167,
        y2: 124.84,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.2748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("rect", {
      x: 54.75,
      y: 84,
      width: 18,
      height: 40,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m69.75 87v34h-12v-34h12m3-3h-18v40h18v-40z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 76.094,
        x2: 76.094,
        y1: 23.5,
        y2: 90.394,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.6645
      })
    ),
    _react2.default.createElement("path", {
      d: "m123.95 95.96h-95.71v-72h69.72c14.36 0 26 11.64 26 26v46z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 4.6667,
        x2: 48.184,
        y1: 59.957,
        y2: 59.957,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4C636E",
        offset: 0.422
      }),
      _react2.default.createElement("stop", {
        stopColor: "#33424A",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M48.78,95.96H4V46.35c0-12.36,10.02-22.39,22.39-22.39h0c12.36,0,22.39,10.02,22.39,22.39 V95.96z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 4,
        x2: 48.896,
        y1: 92.957,
        y2: 92.957,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.6645
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 89.96,
      width: 44.9,
      height: 6,
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m70.99 89.82h-56.95c-1.53 0-2.76-1.24-2.76-2.76v-36.12c0-1.54 1.25-2.8 2.8-2.8h56.94c1.53 0 2.77 1.24 2.77 2.77v36.11c-0.01 1.55-1.26 2.8-2.8 2.8z",
      fill: "#FFD740"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m71 89.82h-56.94c-1.54 0-2.78-1.25-2.78-2.78v-36.1c0-1.54 1.25-2.78 2.78-2.78h56.94c1.54 0 2.78 1.25 2.78 2.78v36.1c0 1.53-1.24 2.78-2.78 2.78z"
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
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m73.78 51.01v-0.07c0-1.54-1.25-2.79-2.79-2.79h-56.92c-1.54 0-2.79 1.25-2.79 2.79 0 0.22-0.02 1.25-0.02 1.25l30.79 22.79c0.25 0.19 0.6 0.2 0.86 0l30.75-22.96c0.18-0.14 0.12-0.79 0.12-1.01z"
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
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "k",
        d:
          "m71 89.82h-56.93c-1.54 0-2.79-1.25-2.79-2.79v-36.09c0-1.54 1.25-2.8 2.8-2.8h56.94c1.53 0 2.77 1.24 2.77 2.77v36.11c-0.01 1.55-1.25 2.8-2.79 2.8z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#k"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#FFB300"
      },
      _react2.default.createElement("rect", {
        transform: "matrix(.6755 -.7374 .7374 .6755 -52.076 40.826)",
        x: 3.69,
        y: 78.08,
        width: 33.32,
        height: 3
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.7402 -.6724 .6724 .7402 -36.73 64.14)",
        x: 63.14,
        y: 62.9,
        width: 3,
        height: 33.4
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("polygon", {
        points:
          "42.48 77.19 8.33 51.31 10.14 48.92 42.49 73.43 74.92 49 76.73 51.4",
        fill: "#FFB300"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m70.78 51.15v35.67h-56.5v-35.67h56.5m0.23-3h-56.93c-1.54 0-2.8 1.25-2.8 2.8v36.11c0 1.53 1.24 2.76 2.76 2.76h56.95c1.54 0 2.79-1.25 2.79-2.79v-36.11c0-1.53-1.24-2.77-2.77-2.77z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 76.094,
        x2: 76.094,
        y1: 23.5,
        y2: 90.394,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.6645
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.95 23.96h-69.71v0.08c11.5 0.94 20.54 10.56 20.54 22.31v43.61h0.12v6h75.05v-46c0-14.36-11.64-26-26-26z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m97.95 26.96c12.68 0 23 10.32 23 23v43h-113.95v-46.61c0-10.69 8.7-19.39 19.39-19.39 0.49 0 1.01 0.02 1.6 0.07 0.08 0.01 0.16 0.01 0.24 0.01 0.24 0 0.47-0.03 0.7-0.08h69.02m0-3h-69.71v0.08c-0.61-0.05-1.22-0.08-1.85-0.08-12.37 0-22.39 10.02-22.39 22.39v49.61h119.95v-46c0-14.36-11.64-26-26-26z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 76.861,
        x2: 76.861,
        y1: 12.5,
        y2: 64.502,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.2273
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.7827
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.89 4.24h-18.06c-3.31 0-6 2.69-6 6v3.76c0 0.18 0.01 0.36 0.03 0.53v42.56c0 1.37 1.11 2.49 2.49 2.49h5.02c1.37 0 2.49-1.11 2.49-2.49v-37.09h14.04c3.31 0 6-2.69 6-6v-3.76c-0.01-3.31-2.69-6-6.01-6z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m85.89 6.24c2.21 0 4 1.79 4 4v3.76c0 2.21-1.79 4-4 4h-14.04c-1.1 0-2 0.9-2 2v37.09c0 0.27-0.22 0.49-0.49 0.49h-5.02c-0.27 0-0.49-0.22-0.49-0.49v-42.56c0-0.06 0-0.12-0.01-0.18-0.01-0.12-0.02-0.24-0.02-0.36v-3.76c0-2.21 1.79-4 4-4h18.07m0-1.99h-18.06c-3.31 0-6 2.69-6 6v3.76c0 0.18 0.01 0.36 0.03 0.53v42.56c0 1.37 1.11 2.49 2.49 2.49h5.02c1.37 0 2.49-1.11 2.49-2.49v-37.09h14.04c3.31 0 6-2.69 6-6v-3.76c-0.01-3.31-2.69-6-6.01-6z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 63.854,
        cy: 56.168,
        r: 14.929,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0.6718
      })
    ),
    _react2.default.createElement("circle", {
      cx: 66.85,
      cy: 59.42,
      r: 9,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m66.85 52.42c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z",
        fill: "#444"
      })
    )
  );
}

exports.default = MailboxWithMail;
