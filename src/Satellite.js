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

function Satellite(props) {
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
      "radialGradient",
      {
        id: "g",
        cx: 31.662,
        cy: 78.838,
        r: 25.172,
        gradientTransform: "matrix(.9917 0 0 .9917 .5331 .5248)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C5CAE9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m41.34 103.5-16.84-16.84c-0.89-0.89-0.89-2.32 0-3.21l12.21-12.21c0.89-0.89 2.32-0.89 3.21 0l16.84 16.84c0.89 0.89 0.89 2.32 0 3.21l-12.21 12.21c-0.89 0.89-2.33 0.89-3.21 0z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 41.287,
        cy: 69.226,
        r: 23.909,
        gradientTransform: "matrix(.9917 0 0 .9917 .5331 .5248)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#727FC8",
        offset: 0.24
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5E6DC1",
        offset: 0.5939
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F51B5",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "52.12 95.78 32.22 75.88 38.55 56.29 71.71 89.45",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 33.662,
        cy: 100.84,
        r: 25.75,
        gradientTransform:
          "matrix(1.0202e-13 .9917 -1.409 1.4494e-13 175.99 67.145)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C5CAE9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M40.4,100.2H27.1L5.77,114.4C4.64,115.05,4,115.93,4,116.85V124h59.5v-7.15 c0-0.92-0.64-1.8-1.77-2.45L40.4,100.2z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 74.163,
        x2: 110.47,
        y1: 53.837,
        y2: 17.529,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#5C6BC0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6E7BC7",
        offset: 0.2246
      }),
      _react2.default.createElement("stop", {
        stopColor: "#919CD5",
        offset: 0.7295
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9FA8DA",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "81.28 59.05 68.95 46.72 113.22 10.8 117.27 14.84",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m39.9 61.88 26.22 26.22-14.69 4.74-0.69 0.22-7.79 7.79-2.79-2.79-13.02-13 7.79-7.79 0.22-0.69 4.75-14.7m0.71 41.32-0.44 0.44 3.05 2.03 16.86 11.23 0.08 0.06 0.09 0.05c0.12 0.07 0.2 0.13 0.26 0.17v3.82h-53.51v-3.82c0.06-0.05 0.14-0.11 0.26-0.17l0.09-0.05 0.08-0.06 20.58-13.7h12.6m-2.06-46.91-6.25 19.36-7.8 7.8c-0.89 0.89-0.89 2.32 0 3.21l13.54 13.54h-10.94l-21.33 14.2c-1.13 0.65-1.77 1.53-1.77 2.45v7.15h59.5v-7.15c0-0.92-0.64-1.8-1.77-2.45l-16.86-11.23 7.47-7.47 19.36-6.25-33.15-33.16z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("polygon", {
        id: "c",
        points: "52.12 95.78 32.22 75.88 38.55 56.29 71.71 89.45"
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
      _react2.default.createElement("polygon", {
        id: "b",
        points: "81.28 59.05 68.95 46.72 113.22 10.8 117.27 14.84"
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
        id: "a",
        d:
          "M40.4,100.2H27.1L5.77,114.4C4.64,115.05,4,115.93,4,116.85V124h59.5v-7.15c0-0.92-0.64-1.8-1.77-2.45 L40.4,100.2z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#a"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "m",
        d:
          "M40.4,100.2H27.1L5.77,114.4C4.64,115.05,4,115.93,4,116.85V124h59.5v-7.15c0-0.92-0.64-1.8-1.77-2.45 L40.4,100.2z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#m"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.01 14.83 0.22 0.22-32.18 39.53-7.63-7.63 39.59-32.12m0.21-4.03-44.27 35.92 12.34 12.34 35.99-44.21-4.06-4.05z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 36.996,
        cy: 16.004,
        r: 73.441,
        gradientTransform: "matrix(.9917 0 0 .9917 .5331 .5248)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C5CAE9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M37.55,7.17c-12.02,23.86-8.53,53.16,10.8,72.49s48.63,22.82,72.49,10.8L37.55,7.17z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 58.662,
        cy: 13.671,
        r: 97.708,
        gradientTransform: "matrix(.9917 0 0 .9917 .5331 .5248)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C5CAE9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.59 95.22-82.81-82.81c-1.83-1.83-1.83-4.81 0-6.64l0.39-0.39c0.71-0.71 1.87-0.71 2.59 0l86.86 86.86c0.71 0.71 0.71 1.87 0 2.59l-0.39 0.39c-1.84 1.84-4.81 1.84-6.64 0z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 33.752,
        x2: 33.752,
        y1: 83.266,
        y2: 125.18,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#727FC8",
        offset: 0.24
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5E6DC1",
        offset: 0.5939
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3F51B5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M43.67,124H23.83V88.54c0-2.32,1.88-4.21,4.21-4.21h11.42c2.32,0,4.21,1.88,4.21,4.21V124z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 33.496,
        cy: 90.588,
        r: 8.9334,
        gradientTransform: "matrix(.9917 0 0 .9917 .5331 .5248)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C5CAE9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 33.75,
      cy: 94.25,
      r: 3.97,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 117.25,
        cy: 3.5042,
        r: 14.139,
        gradientTransform: "matrix(.9917 0 0 .9917 .5331 .5248)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C5CAE9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7986CB",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 117.06,
      cy: 10.94,
      r: 6.94,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m33.75 90.28c2.19 0 3.97 1.78 3.97 3.97s-1.78 3.97-3.97 3.97-3.97-1.78-3.97-3.97 1.78-3.97 3.97-3.97m0-2c-3.29 0-5.97 2.68-5.97 5.97s2.68 5.97 5.97 5.97 5.97-2.68 5.97-5.97-2.68-5.97-5.97-5.97z",
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
          "m117.06 7c1.05 0 2.04 0.41 2.79 1.15 0.74 0.74 1.15 1.73 1.15 2.79 0 1.05-0.41 2.04-1.15 2.79-0.74 0.74-1.73 1.15-2.79 1.15s-2.04-0.41-2.79-1.15c-0.74-0.74-1.15-1.73-1.15-2.79 0-1.05 0.41-2.04 1.15-2.79 0.74-0.74 1.73-1.15 2.79-1.15m0-3c-1.78 0-3.55 0.68-4.91 2.03-2.71 2.71-2.71 7.11 0 9.82 1.36 1.36 3.13 2.03 4.91 2.03s3.55-0.68 4.91-2.03c2.71-2.71 2.71-7.11 0-9.82-1.36-1.35-3.14-2.03-4.91-2.03z",
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
          "m34.54 8.41 85.04 85.04c-0.21 0.09-0.44 0.14-0.68 0.14-0.45 0-0.88-0.18-1.2-0.5l-3.09-3.09-1.8 0.66c-6.83 2.5-13.94 3.76-21.15 3.76-15.68 0-30.31-6-41.2-16.88-8.02-8.02-13.46-18.18-15.71-29.38-2.2-10.92-1.3-22.32 2.59-32.97l0.66-1.8-3.1-3.1c-0.51-0.5-0.63-1.26-0.36-1.88m-0.08-3.56c-0.47 0-0.94 0.18-1.29 0.54l-0.39 0.39c-1.83 1.83-1.83 4.81 0 6.64l1.75 1.75c-8.18 22.39-3.65 48.03 13.82 65.5 11.86 11.86 27.5 17.76 43.32 17.76 7.48 0 15-1.32 22.18-3.94l1.75 1.75c0.92 0.92 2.12 1.38 3.32 1.38s2.4-0.46 3.32-1.38l0.39-0.39c0.71-0.71 0.71-1.87 0-2.59l-1.79-1.79-83.29-83.3-1.79-1.79c-0.36-0.36-0.83-0.53-1.3-0.53z",
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
          "m39.46 87.33c0.67 0 1.21 0.54 1.21 1.21v32.46h-13.84v-32.46c0-0.67 0.54-1.21 1.21-1.21h11.42m0-3h-11.42c-2.32 0-4.21 1.88-4.21 4.21v35.46h19.83v-35.46c0.01-2.33-1.87-4.21-4.2-4.21z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Satellite;
