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

function NoBell(props) {
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
        x1: 64,
        x2: 64,
        y1: 8.25,
        y2: 120.13,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#515151",
        offset: 0.3054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#292929",
        offset: 0.8963
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 56,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 17c25.92 0 47 21.08 47 47s-21.08 47-47 47-47-21.08-47-47 21.08-47 47-47m0-3c-27.61 0-50 22.39-50 50s22.39 50 50 50 50-22.39 50-50-22.39-50-50-50z",
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
          "m64 22c2.8 0 5.07 2.27 5.07 5.07 0 0.03-0.01 0.05-0.01 0.08 7.39 0.65 20.27 4.1 20.27 20.19 0 22.56 7.6 32.93 7.6 32.93h1.27c2.09 0 3.8 1.71 3.8 3.8s-1.71 3.8-3.8 3.8h-27.04c0.28 0.79 0.44 1.64 0.44 2.53 0 4.2-3.4 7.6-7.6 7.6s-7.6-3.4-7.6-7.6c0-0.89 0.16-1.74 0.44-2.53h-27.04c-2.09 0-3.8-1.71-3.8-3.8s1.71-3.8 3.8-3.8h1.27s7.6-10.38 7.6-32.93c0-16.09 12.88-19.53 20.27-20.19 0-0.03-0.01-0.05-0.01-0.08 0-2.8 2.27-5.07 5.07-5.07m0-3c-3.52 0-6.53 2.27-7.62 5.43-13.2 1.95-20.71 10.19-20.71 22.91 0 16.93-4.48 26.69-6.29 29.95-3.55 0.21-6.38 3.17-6.38 6.78 0 3.75 3.05 6.8 6.8 6.8h23.61c0.25 5.63 4.9 10.13 10.59 10.13s10.34-4.5 10.59-10.13h23.61c3.75 0 6.8-3.05 6.8-6.8 0-3.61-2.83-6.57-6.38-6.79-1.8-3.24-6.28-13-6.28-29.95 0-12.71-7.51-20.96-20.71-22.91-1.1-3.15-4.11-5.42-7.63-5.42z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 64.113,
        cy: 99.359,
        r: 13.964,
        gradientTransform: "matrix(.9373 0 0 .9373 4.0101 3.8114)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 0.7434
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 90.4,
      r: 7.6,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 63.831,
        cy: 15.688,
        r: 11.928,
        gradientTransform: "matrix(.9373 0 0 .9373 4.0101 3.8114)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.203
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4162
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.6332
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.8336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 27.07,
      r: 5.07,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 84.8c3.09 0 5.6 2.51 5.6 5.6s-2.51 5.6-5.6 5.6-5.6-2.51-5.6-5.6 2.51-5.6 5.6-5.6m0-2c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6-3.4-7.6-7.6-7.6z",
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
          "M64,24c1.69,0,3.07,1.38,3.07,3.07s-1.38,3.07-3.07,3.07s-3.07-1.38-3.07-3.07S62.31,24,64,24 M64,22c-2.8,0-5.07,2.27-5.07,5.07s2.27,5.07,5.07,5.07s5.07-2.27,5.07-5.07S66.8,22,64,22L64,22z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.887,
        cy: 24.247,
        r: 69.921,
        gradientTransform: "matrix(.9373 0 0 .9373 4.0101 3.8114)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.203
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4162
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.6332
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.8336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m89.33 47.33c0-22.55-25.33-20.26-25.33-20.26s-25.33-2.29-25.33 20.27-7.6 32.93-7.6 32.93h65.86s-7.6-10.38-7.6-32.94z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m98.2 87.87h-68.4c-2.09 0-3.8-1.71-3.8-3.8s1.71-3.8 3.8-3.8h68.4c2.09 0 3.8 1.71 3.8 3.8s-1.71 3.8-3.8 3.8z",
      fill: "#FFD740"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.92 29c6.44 0 21.41 1.79 21.41 18.33 0 22.95 7.66 33.67 7.99 34.12l0.6 0.82h2.28c0.99 0 1.8 0.81 1.8 1.8s-0.81 1.8-1.8 1.8h-68.4c-0.99 0-1.8-0.81-1.8-1.8s0.81-1.8 1.8-1.8h2.28l0.6-0.82c0.33-0.45 7.99-11.17 7.99-34.12 0-7.24 2.84-12.44 8.43-15.43 4.71-2.52 10.15-2.9 12.98-2.9 1.08 0 1.74 0.06 1.74 0.06l0.18 0.01 0.18-0.02c0 0.01 0.66-0.05 1.74-0.05m0-2c-1.2 0-1.92 0.07-1.92 0.07s-0.72-0.07-1.92-0.07c-5.91 0-23.41 1.58-23.41 20.33 0 22.56-7.6 32.93-7.6 32.93h-1.27c-2.09 0-3.8 1.71-3.8 3.8s1.71 3.8 3.8 3.8h68.4c2.09 0 3.8-1.71 3.8-3.8s-1.71-3.8-3.8-3.8h-1.27s-7.6-10.38-7.6-32.93c0-18.75-17.5-20.33-23.41-20.33z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 64.338,
        cy: 85.507,
        r: 52.478,
        gradientTransform: "matrix(.9373 0 0 .9373 4.0101 3.8114)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.2435
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4992
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.7596
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98.2 87.87h-68.4c-2.09 0-3.8-1.71-3.8-3.8s1.71-3.8 3.8-3.8h68.4c2.09 0 3.8 1.71 3.8 3.8s-1.71 3.8-3.8 3.8z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m98.2 82.27c0.99 0 1.8 0.81 1.8 1.8s-0.81 1.8-1.8 1.8h-68.4c-0.99 0-1.8-0.81-1.8-1.8s0.81-1.8 1.8-1.8h68.4m0-2h-68.4c-2.09 0-3.8 1.71-3.8 3.8s1.71 3.8 3.8 3.8h68.4c2.09 0 3.8-1.71 3.8-3.8s-1.71-3.8-3.8-3.8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4,
        y2: 124.13,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F33B3B",
        offset: 0.324
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,4C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4z M114,64 c0,11.99-4.24,23-11.3,31.62L32.38,25.3C41,18.24,52.01,14,64,14C91.57,14,114,36.43,114,64z M14,64c0-11.99,4.24-23,11.3-31.62 l70.32,70.32C87,109.76,75.99,114,64,114C36.43,114,14,91.57,14,64z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = NoBell;
