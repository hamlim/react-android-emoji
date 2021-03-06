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

function Drum(props) {
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
        x1: 64,
        x2: 64,
        y1: 60.761,
        y2: 118.4,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#448AFF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3979FF",
        offset: 0.4747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 60,
      width: 112,
      height: 60,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 26.25,
        cy: 63.75,
        r: 56.392,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1D86E2",
        offset: 0.5579
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 64,
      width: 36,
      height: 60,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 102.75,
        cy: 64,
        r: 53.515,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1D86E2",
        offset: 0.5579
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("rect", {
      x: 84,
      y: 64,
      width: 36,
      height: 60,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 64.25,
        cy: 62.25,
        r: 66.114,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3FA2F4",
        offset: 0.2443
      }),
      _react2.default.createElement("stop", {
        stopColor: "#359AEF",
        offset: 0.4427
      }),
      _react2.default.createElement("stop", {
        stopColor: "#248DE8",
        offset: 0.6246
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.6716
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("rect", {
      x: 44,
      y: 64,
      width: 40,
      height: 60,
      fill: "url(#f)"
    }),
    _react2.default.createElement("rect", {
      x: 25,
      y: 64,
      width: 2,
      height: 52,
      fill: "#0D47A1"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 26,
        x2: 26,
        y1: 82.75,
        y2: 98.665,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 26,
      cy: 90,
      rx: 4,
      ry: 7,
      fill: "url(#e)"
    }),
    _react2.default.createElement("rect", {
      x: 63,
      y: 64,
      width: 2,
      height: 52,
      fill: "#0D47A1"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 82.75,
        y2: 98.665,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 90,
      rx: 4,
      ry: 7,
      fill: "url(#d)"
    }),
    _react2.default.createElement("rect", {
      x: 101,
      y: 64,
      width: 2,
      height: 52,
      fill: "#0D47A1"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 102,
        x2: 102,
        y1: 82.75,
        y2: 98.665,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 102,
      cy: 90,
      rx: 4,
      ry: 7,
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m122.37 124h-116.74c-0.9 0-1.63-0.73-1.63-1.63v-4.73c0-0.9 0.73-1.63 1.63-1.63h116.73c0.9 0 1.63 0.73 1.63 1.63v4.73c0.01 0.9-0.72 1.63-1.62 1.63z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "M122.37,64H5.63C4.73,64,4,63.27,4,62.37v-4.73C4,56.73,4.73,56,5.63,56h116.73 c0.9,0,1.63,0.73,1.63,1.63v4.73C124,63.27,123.27,64,122.37,64z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m115.78 7.17c-1.19-3.24-7.04-3.74-10.05-2.65-0.13 0.05-0.27 0.1-0.39 0.16l-74.1 33.65c-2.02-1.09-4.98-1.17-7.85 0-4.31 1.76-6.8 5.66-5.56 8.71 1.24 3.06 5.75 4.11 10.06 2.36 2.87-1.17 4.93-3.29 5.62-5.49l76.53-27.66c3.02-1.09 6.93-5.84 5.74-9.08z",
      fill: "#FF9800"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26 83c2.21 0 4 3.13 4 7s-1.79 7-4 7-4-3.13-4-7 1.79-7 4-7m0-3c-3.99 0-7 4.3-7 10s3.01 10 7 10 7-4.3 7-10-3.01-10-7-10z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 83c2.21 0 4 3.13 4 7s-1.79 7-4 7-4-3.13-4-7 1.79-7 4-7m0-3c-3.99 0-7 4.3-7 10s3.01 10 7 10 7-4.3 7-10-3.01-10-7-10z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102 83c2.21 0 4 3.13 4 7s-1.79 7-4 7-4-3.13-4-7 1.79-7 4-7m0-3c-3.99 0-7 4.3-7 10s3.01 10 7 10 7-4.3 7-10-3.01-10-7-10z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 54.72,
        x2: 42.595,
        y1: 23.146,
        y2: 36.021,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.24 38.33c-2.02-1.09-4.98-1.17-7.85 0-4.31 1.76-6.8 5.66-5.56 8.71 1.24 3.06 5.75 4.11 10.06 2.36 2.87-1.17 4.93-3.29 5.62-5.49l30.49-11.02-11.57-4.18-21.19 9.62z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 61.686,
        x2: 83.186,
        y1: 22.868,
        y2: 18.202,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.78 7.17c-1.19-3.24-7.04-3.74-10.05-2.65-0.13 0.05-0.27 0.1-0.39 0.16l-41.34 18.77 11.57 5.26 34.47-12.46c3.02-1.09 6.93-5.84 5.74-9.08z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m109.1 7c2.2 0 3.68 0.71 3.86 1.21 0.09 0.24 0.02 0.8-0.32 1.53-0.8 1.71-2.51 3.29-3.62 3.68l-76.53 27.67-0.4 0.14 0.38-0.17 74.09-33.64c0.06-0.03 0.13-0.05 0.19-0.08 0.6-0.22 1.46-0.34 2.35-0.34m-81.54 33.48c0.87 0 1.68 0.17 2.26 0.49l1.26 0.68-0.43 1.37c-0.44 1.41-1.97 2.82-3.89 3.61-1.01 0.41-2.06 0.63-3.05 0.63-1.53 0-2.78-0.54-3.1-1.34-0.31-0.77 0.21-1.73 0.44-2.1 0.71-1.11 1.97-2.1 3.46-2.7 1.01-0.43 2.06-0.64 3.05-0.64m81.54-36.48c-1.25 0-2.44 0.18-3.37 0.52-0.13 0.05-0.27 0.1-0.39 0.16l-74.1 33.65c-1.03-0.55-2.3-0.85-3.69-0.85-1.33 0-2.76 0.27-4.17 0.85-4.31 1.76-6.8 5.66-5.56 8.71 0.84 2.06 3.15 3.21 5.88 3.21 1.33 0 2.77-0.27 4.18-0.85 2.87-1.17 4.93-3.29 5.62-5.49l76.53-27.66c3.01-1.09 6.92-5.84 5.73-9.08-0.8-2.24-3.86-3.17-6.66-3.17z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M121,59v2h-1c-1.66,0-3,1.34-3,3v52c0,1.66,1.34,3,3,3h1v2H7v-2h1c1.66,0,3-1.34,3-3V64c0-1.66-1.34-3-3-3H7v-2H121 M122.37,56H5.63C4.73,56,4,56.73,4,57.63v4.73C4,63.27,4.73,64,5.63,64H8v52H5.63c-0.9,0-1.63,0.73-1.63,1.63v4.73 c0,0.9,0.73,1.63,1.63,1.63h116.73c0.9,0,1.63-0.73,1.63-1.63v-4.73c0-0.9-0.73-1.63-1.63-1.63H120V64h2.37 c0.9,0,1.63-0.73,1.63-1.63v-4.73C124,56.73,123.27,56,122.37,56L122.37,56z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m12.22 7.17c1.19-3.24 7.04-3.74 10.05-2.65 0.13 0.05 0.27 0.1 0.39 0.16l74.1 33.65c2.02-1.09 4.98-1.17 7.85 0 4.31 1.76 6.8 5.66 5.56 8.71-1.24 3.06-5.75 4.11-10.06 2.36-2.87-1.17-4.93-3.29-5.62-5.49l-76.54-27.66c-3.01-1.09-6.92-5.84-5.73-9.08z",
      fill: "#FFA726"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m18.9 7c0.89 0 1.75 0.12 2.35 0.34 0.06 0.02 0.13 0.05 0.18 0.07l74.1 33.65 0.38 0.17-0.4-0.14-76.54-27.67c-1.11-0.4-2.82-1.98-3.62-3.68-0.34-0.73-0.41-1.3-0.32-1.53 0.19-0.5 1.67-1.21 3.87-1.21m81.54 33.48c0.98 0 2.03 0.22 3.04 0.62 1.49 0.61 2.76 1.59 3.46 2.7 0.24 0.37 0.76 1.33 0.44 2.1-0.33 0.8-1.57 1.34-3.1 1.34-0.99 0-2.04-0.22-3.05-0.63-1.92-0.78-3.44-2.2-3.89-3.61l-0.43-1.37 1.26-0.68c0.6-0.3 1.4-0.47 2.27-0.47m-81.54-36.48c-2.8 0-5.85 0.93-6.68 3.17-1.19 3.24 2.73 7.99 5.73 9.08l76.53 27.66c0.69 2.19 2.74 4.32 5.62 5.49 1.41 0.58 2.85 0.85 4.18 0.85 2.74 0 5.05-1.15 5.88-3.21 1.24-3.06-1.24-6.96-5.56-8.71-1.41-0.57-2.84-0.85-4.17-0.85-1.38 0-2.65 0.29-3.69 0.85l-74.08-33.65c-0.12-0.06-0.26-0.11-0.39-0.16-0.93-0.34-2.13-0.52-3.37-0.52z"
      })
    )
  );
}

exports.default = Drum;
