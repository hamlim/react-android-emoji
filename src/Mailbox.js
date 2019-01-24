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

function Mailbox(props) {
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
      fill: "url(#h)"
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
        id: "g",
        x1: -106.59,
        x2: -106.59,
        y1: 56.71,
        y2: 124.21,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-50.59 123.88h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: -106.59,
        x2: -106.59,
        y1: 44.665,
        y2: 107.09,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0.9931
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-46.59 50.04v-2.16c0-2.21-1.79-4-4-4h-112c-2.21 0-4 1.79-4 4v2.02l59.91 46.13 60.09-45.99z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m-50.59 123.88h-112c-2.21 0-4-1.79-4-4v-72c0-2.21 1.79-4 4-4h112c2.21 0 4 1.79 4 4v72c0 2.21-1.79 4-4 4z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "none",
        stroke: "#FFB300",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement("line", {
        x1: -127.58,
        x2: -170.78,
        y1: 80.64,
        y2: 127.81
      }),
      _react2.default.createElement("line", {
        x1: -85.71,
        x2: -42.59,
        y1: 80.53,
        y2: 128
      })
    ),
    _react2.default.createElement("polyline", {
      points: "-170.51 47.66 -106.68 96.02 -42.67 47.82",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#FFB300",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-50.59 46.88c0.55 0 1 0.45 1 1v72c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-72c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v72c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-72c0-2.21-1.79-4-4-4z",
        fill: "#444"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
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
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 26.388,
        x2: 26.388,
        y1: 23.75,
        y2: 96,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0.3323
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M48.78,95.96H4V46.35c0-12.36,10.02-22.39,22.39-22.39h0c12.36,0,22.39,10.02,22.39,22.39 V95.96z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m37.39 51.62h-22c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2h22c1.1 0 2 0.9 2 2v4c0 1.11-0.9 2-2 2z",
      fill: "#1E88E5"
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
        id: "b",
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
      fill: "url(#b)"
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
        id: "i",
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
      fill: "url(#i)"
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

exports.default = Mailbox;
