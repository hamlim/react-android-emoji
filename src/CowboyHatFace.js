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

function CowboyHatFace(props) {
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
      "symbol",
      {
        viewBox: "-64.5 -64.5 129 129"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "none",
          stroke: "#4285F4",
          strokeMiterlimit: 10
        },
        _react2.default.createElement("rect", {
          x: -64,
          y: -64,
          width: 128,
          height: 128
        }),
        _react2.default.createElement("path", {
          d:
            "M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z"
        }),
        _react2.default.createElement("path", {
          d:
            "m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z"
        }),
        _react2.default.createElement("path", {
          d:
            "M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z"
        }),
        _react2.default.createElement("line", {
          x1: -0.01,
          x2: -0.01,
          y1: 51,
          y2: -51
        }),
        _react2.default.createElement("line", {
          x1: -16,
          x2: -16,
          y1: 48.95,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 15.99,
          x2: 15.99,
          y1: 48.91,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 53,
          x2: -53,
          y1: 0.08,
          y2: 0.08
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "M64,39.75c-35.34,0-63.99-30.22-63.99-16.94c0,94.92,127.98,94.92,127.98,0 C127.99,9,99.34,39.75,64,39.75z",
      fill: "#7A5549"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 64,
        x2: 64,
        y1: 28.991,
        y2: 110.68,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEE133",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEDE32",
        offset: 0.6118
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD32F",
        offset: 0.7076
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC12B",
        offset: 0.7975
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7A924",
        offset: 0.8834
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A323",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 122c-25.94 0-53.85-16.24-53.85-51.89s27.92-51.89 53.85-51.9c14.38 0 27.69 4.76 37.48 13.4 10.71 9.46 16.38 22.77 16.38 38.49 0 15.66-5.66 28.94-16.38 38.42-9.82 8.7-23.13 13.48-37.48 13.48z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 20.21c13.89 0 26.73 4.58 36.15 12.9 10.27 9.06 15.7 21.86 15.7 37 0 15.07-5.43 27.84-15.7 36.93-9.45 8.35-22.29 12.96-36.15 12.96-13.93 0-26.77-4.54-36.16-12.8-10.27-9.03-15.69-21.85-15.69-37.1 0-15.31 5.43-28.17 15.69-37.17 9.36-8.2 22.2-12.72 36.16-12.72m0-4c-29 0-55.85 18.62-55.85 53.89 0 35.08 26.85 53.9 55.85 53.9s55.85-19.29 55.85-53.89c0-34.8-26.85-53.9-55.85-53.9z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.75 29.91c-2.14-12.06-13.14-29.86-23.08-29.73-7.74 0.1-6.33 3.43-10.67 3.43-4.54 0-2.8-3.39-10.13-3.43-9.69-0.06-21.2 16.57-23.62 29.07-1.67 8.65 23.69 2.98 33.97 2.98 10.29 0 24.87-0.7 33.53-2.32z",
      fill: "#826156"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m98.83 34.28c-2.42-13.07-12.24-36.24-22.74-36.24-8.76 0-6.96 3.72-11.88 3.72-5.14 0-3.38-3.72-11.68-3.72-10.2 0-21.29 23.17-23.7 36.24 9.82 1.75 23.78 2.67 35.43 2.67s24.77-0.92 34.57-2.67z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "e"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.48 39.44h-80.95v-23.94s12.38 7.1 40.48 7.13c28.19 0.03 40.48-7.13 40.48-7.13v23.94z",
      clipPath: "url(#e)",
      fill: "#A1887F"
    }),
    _react2.default.createElement("path", {
      d:
        "m3.02 19.48s34.49 8.52 60.98 8.52 60.09-8.52 60.09-8.52-16.42 34.27-60.09 34.27-60.98-34.27-60.98-34.27z",
      fill: "#4A251A"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m63.99 88.57c-10.06 0-19.41-0.93-27.21-2.51-1.93-0.39-3.65 1.47-3.25 3.59 2.59 13.93 15.08 25.37 30.45 25.37 16.82 0 28.14-11.81 30.49-25.42 0.36-2.1-1.34-3.94-3.26-3.55-7.8 1.59-17.15 2.52-27.22 2.52z"
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
      d:
        "m63.99 88.57c-10.06 0-19.41-0.93-27.21-2.51-1.93-0.39-3.65 1.47-3.25 3.59 2.59 13.93 15.08 25.37 30.45 25.37 16.82 0 28.14-11.81 30.49-25.42 0.36-2.1-1.34-3.94-3.26-3.55-7.8 1.59-17.15 2.52-27.22 2.52z",
      clipPath: "url(#a)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m98.09 87.76v-10.47h-68.18v10.47c10.49 6.77 22 10.53 34.09 10.53s23.6-3.77 34.09-10.53z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 105.37c-7.54 0-14.12 4.52-17.63 11.22 4.56 2.73 10.77 4.41 17.63 4.41s13.07-1.69 17.63-4.42c-3.51-6.7-10.09-11.21-17.63-11.21z",
      clipPath: "url(#a)",
      fill: "#ED7770"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m29.91 77.29v10.47c10.49 6.77 22 10.53 34.09 10.53s23.6-3.76 34.09-10.53v-10.47h-68.18zm34.09 28.08c-7.54 0-14.12 4.52-17.63 11.22 4.56 2.73 10.77 4.41 17.63 4.41s13.07-1.69 17.63-4.42c-3.51-6.7-10.09-11.21-17.63-11.21z"
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
            "m90.25 90.32c-1.24 5.47-4.14 10.44-8.26 14.11-4.84 4.31-11.07 6.59-18.01 6.59-12.29 0-23.32-8.8-26.21-20.7 7.92 1.47 16.94 2.25 26.22 2.25 9.3 0 18.33-0.78 26.26-2.25m1.48-4.32c-0.17 0-0.34 0.02-0.52 0.05-7.8 1.59-17.16 2.52-27.22 2.52s-19.41-0.93-27.21-2.51c-0.17-0.04-0.34-0.06-0.51-0.06-1.71 0-3.09 1.72-2.73 3.64 2.59 13.93 15.08 25.37 30.45 25.37 16.82 0 28.14-11.81 30.49-25.42 0.32-1.9-1.06-3.59-2.75-3.59z",
          fill: "#EB8F00"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m82.3 57.36c3.51 0 6.7 4.12 6.7 10.94s-3.19 10.94-6.7 10.94-6.7-4.12-6.7-10.94 3.2-10.94 6.7-10.94z"
      }),
      _react2.default.createElement("path", {
        d:
          "m45.7 57.36c-3.51 0-6.7 4.12-6.7 10.94s3.19 10.94 6.7 10.94 6.7-4.12 6.7-10.94-3.2-10.94-6.7-10.94z"
      })
    )
  );
}

exports.default = CowboyHatFace;
