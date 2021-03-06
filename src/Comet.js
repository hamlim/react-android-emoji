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

function Comet(props) {
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
        id: "h",
        cx: 65.813,
        cy: 120.54,
        r: 156.63,
        gradientTransform: "matrix(.5775 .5775 -.7071 .7071 72.36 -18.274)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0.2498
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BADEFB",
        stopOpacity: 0.662,
        offset: 0.5667
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D8EDFC",
        stopOpacity: 0.3667,
        offset: 0.8437
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        stopOpacity: 0.2,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m14.8 113.52c-3.95-3.95-3.64-10.08 3.42-18.77l61.26-74.77c10.96-12.87 27.35-12.9 34.32-5.93s7.17 23.25-4.37 33.71l-76.08 62.34c-8.55 7.29-14.61 7.37-18.55 3.42z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 97.279,
        cy: 57.946,
        r: 45.074,
        gradientTransform: "matrix(.591 .591 -.545 .545 71.395 -14.543)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0.0882
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BADEFB",
        stopOpacity: 0.5776,
        offset: 0.4305
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D8EDFC",
        stopOpacity: 0.2084,
        offset: 0.7295
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        stopOpacity: 0,
        offset: 0.8983
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m94.71 76.61c-1.36-1.36-1.53-3.2 0.24-5.52l15.77-18.65c2.19-2.59 6.12-2.75 8.51-0.36 2.4 2.4 2.23 6.34-0.36 8.52l-18.7 15.76c-2.27 1.84-4.1 1.61-5.46 0.25z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 42.456,
        cy: 130.5,
        r: 47.185,
        gradientTransform: "matrix(.4842 .4842 -.4263 .4263 58.914 -3.8788)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0.289
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BADEFB",
        stopOpacity: 0.5776,
        offset: 0.5893
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D8EDFC",
        stopOpacity: 0.2084,
        offset: 0.8518
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m21.7 74.01c-1.17-1.17-1.35-2.72 0.09-4.64l12.74-15.18c1.87-2.23 5.25-2.38 7.31-0.32s1.91 5.44-0.33 7.31l-15.23 12.73c-1.87 1.5-3.41 1.27-4.58 0.1z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 20.877,
        cy: 104.16,
        r: 81.55,
        gradientTransform: "matrix(.4842 .4842 -.588 .588 75.939 -20.904)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0.1458
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BADEFB",
        stopOpacity: 0.5776,
        offset: 0.5067
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D8EDFC",
        stopOpacity: 0.2084,
        offset: 0.822
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.94 54.54c-1.98-1.98-1.84-5.04 1.67-9.37l33.35-37.86c2.99-3.39 8.47-3.29 11.99 0.22 3.52 3.52 3.62 9.01 0.22 11.99l-37.97 33.35c-4.25 3.62-7.28 3.65-9.26 1.67z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64.256,
        x2: 64.256,
        y1: 126.48,
        y2: 34.476,
        gradientTransform: "matrix(.5775 .5775 -.6724 .6724 67.871 -13.785)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        stopOpacity: 0.9,
        offset: 0.1712
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C7E4FC",
        stopOpacity: 0.3509,
        offset: 0.4667
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        stopOpacity: 0,
        offset: 0.6555
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m18.02 110.3c-2.87-2.87-2.76-7.22 2.1-13.26l43.17-49.3c5.77-6.59 15.04-7.89 20.11-2.83 5.07 5.07 3.75 14.36-2.85 20.12l-49.43 43.17c-5.93 5.02-10.23 4.97-13.1 2.1z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("circle", {
      cx: 24.99,
      cy: 103.85,
      r: 7.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 34.99,
      cy: 90.35,
      r: 4,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 45.99,
      cy: 87.35,
      r: 2,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 45.99,
      cy: 75.35,
      r: 2,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 65.452,
          cy: 62.767,
          r: 53.277,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#424242",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#757575",
          stopOpacity: 0.5,
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m101.02 11.41c4.64 0 8.78 1.48 11.36 4.06 2.79 2.79 4.38 7.49 4.25 12.58-0.17 6.8-3.27 13.43-8.52 18.2l-76.07 62.33c-4.32 3.69-8.06 5.56-11.13 5.56-1.81 0-3.35-0.66-4.7-2.02-3.48-3.48-2.29-8.9 3.56-16.08l61.23-74.76c5.35-6.28 12.65-9.87 20.02-9.87m0-2c-7.08 0-15.21 3.15-21.54 10.58l-61.26 74.77c-7.06 8.68-7.37 14.82-3.42 18.77 1.66 1.66 3.69 2.6 6.12 2.6 3.36 0 7.48-1.81 12.43-6.04l76.08-62.34c11.54-10.46 11.35-26.74 4.37-33.71-2.95-2.94-7.58-4.63-12.78-4.63z",
        fill: "url(#c)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "b",
          cx: 107.3,
          cy: 64.033,
          r: 13.644,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#424242",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#757575",
          stopOpacity: 0.5,
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m115.14 52.38c1.01 0 1.96 0.39 2.68 1.11 0.76 0.76 1.15 1.77 1.11 2.84-0.05 1.07-0.52 2.04-1.34 2.74l-18.68 15.74c-0.7 0.57-1.34 0.88-1.82 0.88-0.2 0-0.53-0.05-0.97-0.49-0.35-0.35-1.01-1.01 0.39-2.86l15.74-18.61c0.72-0.86 1.78-1.35 2.89-1.35m0-2c-1.64 0-3.27 0.69-4.42 2.05l-15.77 18.65c-1.76 2.32-1.6 4.16-0.24 5.52 0.68 0.68 1.47 1.08 2.38 1.08s1.94-0.4 3.08-1.32l18.7-15.76c2.59-2.19 2.76-6.12 0.36-8.52-1.13-1.14-2.61-1.7-4.09-1.7z",
        fill: "url(#b)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "a",
          cx: 32.027,
          cy: 63.689,
          r: 11.266,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#424242",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#757575",
          stopOpacity: 0.5,
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m38.33 54.42c0.79 0 1.53 0.31 2.09 0.87 0.59 0.59 0.9 1.38 0.86 2.22s-0.41 1.6-1.06 2.14l-15.2 12.7c-0.49 0.39-0.94 0.61-1.25 0.61-0.07 0-0.3 0-0.67-0.37-0.3-0.3-0.7-0.7 0.25-1.98l12.7-15.14c0.57-0.67 1.4-1.05 2.28-1.05m0-2c-1.41 0-2.82 0.6-3.8 1.77l-12.74 15.18c-1.44 1.92-1.26 3.47-0.09 4.64 0.6 0.6 1.29 0.95 2.08 0.95 0.75 0 1.59-0.32 2.5-1.05l15.23-12.73c2.24-1.87 2.39-5.25 0.33-7.31-0.98-0.97-2.25-1.45-3.51-1.45z",
        fill: "url(#a)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "i",
          cx: 44.158,
          cy: 30.341,
          r: 25.504,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#424242",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#757575",
          stopOpacity: 0.5,
          offset: 0.7971
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m60.6 6.83c1.79 0 3.58 0.77 4.93 2.12 1.4 1.4 2.18 3.28 2.12 5.13-0.05 1.57-0.69 2.97-1.8 3.94l-37.95 33.32c-2.43 2.08-4 2.51-4.88 2.51-0.64 0-1.17-0.23-1.67-0.73-1.32-1.32-0.72-3.56 1.79-6.66l33.32-37.83c1.02-1.16 2.5-1.8 4.14-1.8m0-2c-2.13 0-4.18 0.82-5.64 2.48l-33.34 37.86c-3.51 4.32-3.65 7.39-1.67 9.37 0.84 0.84 1.86 1.31 3.08 1.31 1.67 0 3.72-0.89 6.18-2.99l37.96-33.34c3.4-2.99 3.3-8.47-0.22-11.99-1.8-1.8-4.12-2.7-6.35-2.7z",
        fill: "url(#i)"
      })
    )
  );
}

exports.default = Comet;
