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

function Necktie(props) {
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
        opacity: 0.2
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "g",
          x1: 64,
          x2: 64,
          y1: 30.135,
          y2: 123.21,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0.3924
        }),
        _react2.default.createElement("stop", {
          stopColor: "#595959",
          offset: 0.996
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m28.17 122.5c-8.36 0-15.17-6.8-15.17-15.17l-2-63.05c0-8.31 6.8-15.12 15.17-15.12h75.67c8.36 0 15.17 6.8 15.17 15.17l-2 62.96c0 8.41-6.8 15.21-15.17 15.21h-71.67z",
        fill: "url(#g)"
      }),
      _react2.default.createElement("path", {
        d:
          "m101.83 30.67c7.52 0 13.64 6.11 13.67 13.62l-2 62.95v0.1c0 7.54-6.13 13.67-13.67 13.67h-71.66c-7.54 0-13.67-6.13-13.67-13.67v-0.1l-2-62.95c0.02-7.51 6.15-13.62 13.67-13.62h75.66m0-3h-75.66c-9.2 0-16.67 7.46-16.67 16.67l2 63c0 9.2 7.46 16.67 16.67 16.67h71.67c9.2 0 16.67-7.46 16.67-16.67l2-63c-0.01-9.21-7.47-16.67-16.68-16.67z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 63.957,
        x2: 63.957,
        y1: -3.029,
        y2: 36.583,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.3924
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.21 18.75-31.01 33.25-31.49-33.25 6.94-11.79s4.64-2.88 24.06-2.88 24.61 2.83 24.61 2.83l6.89 11.84z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 63.961,
          x2: 63.961,
          y1: -0.981,
          y2: 35.58,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0.3924
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m34.57 18.54 6.14-10.43c1.24-0.53 7-2.52 23-2.52 15.95 0 22.12 1.95 23.56 2.51l6.09 10.45-29.17 31.26-29.62-31.27z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.71 7.08c14.36 0 20.6 1.59 22.53 2.23l5.25 9.02-27.31 29.29-27.74-29.29 5.3-9.01c1.75-0.63 7.66-2.24 21.97-2.24m0-3c-19.42 0-24.06 2.88-24.06 2.88l-6.94 11.79 31.49 33.25 31.01-33.25-6.9-11.84s-5.19-2.83-24.6-2.83z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.02 103.56c-2.22-11.46-12.8-42.09-12.8-42.09s12.5-9.21 12.5-21.46-20.72-0.02-20.72-0.02-21.74-12.73-21.74 0.01 13.49 21.46 13.49 21.46-10.56 30.64-12.79 42.09c-1.25 6.48 16.43 22.85 21.04 22.85s22.27-16.37 21.02-22.84z",
      fill: "#ED6C30"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m85.02 103.56c-2.22-11.46-12.8-42.09-12.8-42.09s12.5-9.21 12.5-21.46-20.72-0.02-20.72-0.02-21.74-12.73-21.74 0.01 13.49 21.46 13.49 21.46-10.56 30.64-12.79 42.09c-1.25 6.48 16.43 22.85 21.04 22.85s22.27-16.37 21.02-22.84z"
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
    _react2.default.createElement("path", {
      d: "m33.42 94.69s5.97-10.44 18.9-19.74 24.83-11.14 24.83-11.14",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#FFA726",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 9
    }),
    _react2.default.createElement("path", {
      d: "m45.38 47.03s10.39-0.05 20.87 5.11 14.07 12.54 14.07 12.54",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#FFA726",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 10
    }),
    _react2.default.createElement("path", {
      d: "m40.06 113.66s5.97-10.44 18.9-19.74 24.83-11.14 24.83-11.14",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#FFA726",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 9
    }),
    _react2.default.createElement("path", {
      d: "m49.62 131.93s5.97-10.44 18.9-19.74 24.83-11.14 24.83-11.14",
      clipPath: "url(#a)",
      fill: "none",
      stroke: "#FFA726",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 9
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m47.9 37.34c4.6 0 12.08 3.79 14.58 5.24 0.47 0.27 0.99 0.41 1.52 0.41s1.06-0.14 1.53-0.42c2.36-1.4 9.45-5.02 13.81-5.02 1.89 0 2.38 0.5 2.38 2.45 0 10.56-11.17 18.97-11.28 19.05-1.06 0.78-1.48 2.15-1.06 3.39 0.11 0.3 10.54 30.57 12.69 41.69 0 0.01 0.24 1.45-2.5 5.31-4.91 6.91-13.33 13.48-15.57 13.94-2.25-0.46-10.68-7.04-15.59-13.95-2.74-3.85-2.5-5.29-2.5-5.3 2.16-11.12 12.57-41.38 12.68-41.69 0.45-1.3-0.05-2.74-1.2-3.49-0.12-0.08-12.12-8.02-12.12-18.95 0-0.62 0.08-1.72 0.59-2.17 0.36-0.32 1.08-0.49 2.04-0.49m0-3c-3.22 0-5.64 1.42-5.64 5.67 0 12.74 13.49 21.46 13.49 21.46s-10.56 30.64-12.79 42.09c-1.25 6.47 16.43 22.84 21.04 22.84s22.27-16.37 21.02-22.83c-2.22-11.46-12.8-42.09-12.8-42.09s12.5-9.21 12.5-21.46c0-4.09-2.3-5.45-5.38-5.45-6.14-0.01-15.34 5.42-15.34 5.42s-9.66-5.65-16.1-5.65z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m85.02 103.56c-2.22-11.46-12.8-42.09-12.8-42.09s12.5-9.21 12.5-21.46-20.72-0.02-20.72-0.02-21.74-12.73-21.74 0.01 13.49 21.46 13.49 21.46-10.56 30.64-12.79 42.09c-1.25 6.48 16.43 22.85 21.04 22.85s22.27-16.37 21.02-22.84z"
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
      "linearGradient",
      {
        id: "b",
        x1: 63.957,
        x2: 63.957,
        y1: 71.572,
        y2: 49.423,
        gradientTransform: "matrix(1 0 0 .996 0 .1658)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 0.4473
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8148
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.21 61.99s-12.35-6.1-25.42-6.1-25.08 6.1-25.08 6.1v-22.06h50.5v22.06z",
      fill: "url(#b)",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d: " M36,25.5c0,0,11.63-3.29,27.67-3.29S92,25.5,92,25.5",
      fill: "none",
      opacity: 0.2,
      stroke: "#424242",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("path", {
      d:
        "m27.91 19.64c-2.71 3.55-3.44 8.08-1.96 12.21l9.03 29.91c0.82 2.68 4.52 3.43 6.47 1.31l22.35-22.97s-15.44-11.32-19.87-18.6-4.25-14.65-4.25-14.65l-11.77 12.79z",
      fill: "#F5F5F5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37.54 13.61c0.65 2.78 1.8 6.12 3.83 9.45 3.54 5.82 13.15 13.68 17.92 17.38l-20 20.54c-0.02 0.02-0.04 0.04-0.06 0.07-0.19 0.21-0.45 0.25-0.63 0.25-0.25 0-0.66-0.11-0.75-0.4l-9.03-29.91c-0.01-0.05-0.03-0.1-0.05-0.14-1.11-3.11-0.57-6.57 1.44-9.28l7.33-7.96m2.14-6.76zm0 0-11.77 12.79c-2.71 3.55-3.44 8.08-1.96 12.21l9.03 29.91c0.49 1.62 2.05 2.54 3.63 2.54 1.03 0 2.07-0.39 2.84-1.23l22.35-22.97s-15.44-11.32-19.87-18.6-4.25-14.65-4.25-14.65z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.09 19.64c2.71 3.55 3.44 8.08 1.96 12.21l-9.03 29.91c-0.82 2.68-4.52 3.43-6.47 1.31l-22.35-22.97s15.44-11.32 19.87-18.6 4.25-14.65 4.25-14.65l11.77 12.79z",
      fill: "#F5F5F5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m90.46 13.61 7.32 7.95c2.02 2.71 2.56 6.17 1.44 9.28-0.02 0.05-0.03 0.09-0.05 0.14l-9.03 29.9c-0.09 0.3-0.5 0.41-0.76 0.41-0.18 0-0.44-0.04-0.63-0.25-0.02-0.02-0.04-0.04-0.06-0.07l-19.97-20.53c4.77-3.7 14.38-11.57 17.92-17.38 2.02-3.33 3.17-6.67 3.82-9.45m-2.14-6.76s0.18 7.37-4.25 14.65-19.87 18.6-19.87 18.6l22.35 22.97c0.77 0.84 1.81 1.23 2.84 1.23 1.58 0 3.13-0.92 3.63-2.54l9.03-29.91c1.48-4.13 0.75-8.66-1.96-12.21l-11.77-12.79z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Necktie;