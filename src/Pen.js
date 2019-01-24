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

function Pen(props) {
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
        id: "i",
        x1: 90.367,
        x2: 90.367,
        y1: -10.27,
        y2: 33.457,
        gradientTransform: "translate(.8832 2.4456)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#78909C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m107.12 5.35c-1.63-1.63-4.27-1.63-5.89 0l-22.27 19c-1.71 1.45-3.37 2.97-4.96 4.56l-3.31 3.32c-0.11 0.11-0.11 0.29 0 0.4 1.11 1.11 2.91 1.11 4.02 0l2.07-2.07c0.36-0.36 0.59-0.81 0.69-1.27 0.15-0.72 0.56-1.36 1.12-1.83l21.91-18.42c0.81-0.81 2.87-1.55 3.68-0.74l4.79 4.79 2.95-2.95-4.8-4.79z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 20.432,
        x2: 20.432,
        y1: 94.578,
        y2: 120.45,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m11.39 122c5.44-2.84 13.22-8.32 23.47-16.75l-12.12-12.12c-8.42 10.24-13.9 18.02-16.73 23.46 2.94 0.1 5.3 2.47 5.38 5.41z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 61.642,
        x2: 61.642,
        y1: 115.29,
        y2: 145.34,
        gradientTransform: "matrix(.7071 .7071 -.7071 .7071 64.883 -24.064)",
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
        "m4.44 123.56c0.8 0.8 2.63 0.5 5.34-0.75 0.51-0.24 1.05-0.51 1.61-0.8-0.08-2.95-2.44-5.32-5.39-5.42-0.3 0.57-0.57 1.12-0.81 1.63-1.25 2.71-1.54 4.54-0.75 5.34z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m4.44 123.56c0.8 0.8 2.63 0.5 5.34-0.75 0.51-0.24 1.05-0.51 1.61-0.8-0.08-2.95-2.44-5.32-5.39-5.42-0.3 0.57-0.57 1.12-0.81 1.63-1.25 2.71-1.54 4.54-0.75 5.34z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m22.97 97.6 7.42 7.43c-11.77 9.5-18.36 13.43-21.87 15.06-0.4 0.19-0.75 0.33-1.05 0.45 0.12-0.3 0.27-0.65 0.45-1.05 1.62-3.52 5.55-10.11 15.05-21.89m-0.23-4.47c-9.3 11.31-15.02 19.63-17.55 25.09-1.25 2.71-1.55 4.54-0.75 5.34 0.3 0.3 0.74 0.44 1.31 0.44 0.97 0 2.32-0.41 4.02-1.19 5.46-2.53 13.78-8.25 25.08-17.55l-12.11-12.13z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 50.936,
        x2: 50.936,
        y1: 43.745,
        y2: 114.54,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#03A9F4",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.59 54.39-7.74-7.74c-38.18 38.72-45.31 49.04-45.31 49.04l11.78 11.8s10.31-7.13 49-45.35l-7.73-7.75z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.87 50.91 5.6 5.6 5.6 5.61c-27.57 27.16-40.08 37.84-44.48 41.38l-4.03-4.03-4.03-4.04c3.5-4.37 14.07-16.79 41.34-44.52m-0.01-4.26c-38.19 38.72-45.32 49.04-45.32 49.04l11.78 11.8s10.31-7.13 49-45.35l-7.74-7.74-7.72-7.75z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 93.303,
        x2: 93.303,
        y1: 3.2449,
        y2: 64.003,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.72 16.08-0.14-0.14c1.23-2.57-0.42-5.56-3.19-8.33s-5.76-4.43-8.32-3.19l-0.14-0.14s-23.61 16.51-48.79 42.87c-0.73 0.76-0.71 1.97 0.03 2.72l15 15.02c0.74 0.74 1.95 0.76 2.71 0.03 26.35-25.21 42.84-48.84 42.84-48.84z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 113.21,
        x2: 113.21,
        y1: 6.9949,
        y2: 26.876,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#CFD8DC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.53 6.76c-0.94 0.7-2.07 1.56-3.35 2.54l13.52 13.54c0.99-1.28 1.84-2.41 2.54-3.36l-12.71-12.72z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.9 7c0.39 0 1.85 0.2 4.37 2.73 2.07 2.07 3.07 3.95 2.61 4.91l-0.37 0.77c-3.46 4.77-18.63 25.14-40.95 46.62l-6.77-6.77-6.77-6.78c21.45-22.32 41.81-37.53 46.58-40.99l0.76-0.37c0.18-0.08 0.35-0.12 0.54-0.12m0-3c-0.63 0-1.24 0.13-1.83 0.41l-0.14-0.14s-23.61 16.51-48.79 42.87c-0.73 0.76-0.71 1.97 0.03 2.72l15 15.02c0.38 0.38 0.88 0.57 1.37 0.57 0.48 0 0.97-0.18 1.34-0.54 26.34-25.2 42.83-48.84 42.83-48.84l-0.14-0.14c1.23-2.57-0.42-5.56-3.19-8.33-2.12-2.13-4.38-3.6-6.48-3.6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m123.72 16.08-0.14-0.14c1.23-2.57-0.42-5.56-3.19-8.33s-5.76-4.43-8.32-3.19l-0.14-0.14s-23.61 16.51-48.79 42.87c-0.73 0.76-0.71 1.97 0.03 2.72l15 15.02c0.74 0.74 1.95 0.76 2.71 0.03 26.35-25.21 42.84-48.84 42.84-48.84z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m63.58 43.82c-0.39 0.4-0.78 0.81-1.16 1.24l20.56 20.58c0.42-0.38 0.83-0.77 1.23-1.16l-20.63-20.66z",
        fill: "#FFB300"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 73.319,
          x2: 73.319,
          y1: 47.12,
          y2: 66.873,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#CFD8DC",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#90A4AE",
          offset: 0.9954
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m63.58 43.82c-0.39 0.4-0.78 0.81-1.16 1.24l20.56 20.58c0.42-0.38 0.83-0.77 1.23-1.16l-20.63-20.66z",
        fill: "url(#a)"
      })
    )
  );
}

exports.default = Pen;
