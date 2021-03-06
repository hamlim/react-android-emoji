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

function Raccoon(props) {
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
        x1: 22.74,
        x2: 40.74,
        y1: 20.481,
        y2: 43.148,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BABBB6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B7B8B3",
        offset: 0.2737
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ACADA9",
        offset: 0.5026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9B9C98",
        offset: 0.7153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#838480",
        offset: 0.9171
      }),
      _react2.default.createElement("stop", {
        stopColor: "#777875",
        offset: 0.996
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.52 30.8c-0.7-2.84-1.19-6.14 0.62-8.45 1.24-1.58 3.33-2.31 5.34-2.33s3.97 0.58 5.87 1.25c6.09 2.13 11.93 4.99 17.36 8.48 1.54 0.99 3.15 2.17 3.7 3.91 0.78 2.49-0.89 5.05-2.62 7.02-3.88 4.43-12.86 14.1-19.64 11.81-6.9-2.33-9.16-15.71-10.63-21.69z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m25.66 34.56c-0.44-1.77-0.74-3.82 0.39-5.26 0.77-0.98 2.07-1.44 3.32-1.45s2.47 0.36 3.65 0.78c3.79 1.33 7.42 3.11 10.79 5.28 0.96 0.62 1.96 1.35 2.3 2.43 0.49 1.55-0.55 3.15-1.63 4.37-2.41 2.76-7.99 8.78-12.21 7.35-4.29-1.45-5.7-9.78-6.61-13.5z",
      fill: "#3E3A37"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 107.17,
        x2: 87.838,
        y1: 20.272,
        y2: 42.272,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BABBB6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B7B8B3",
        offset: 0.2737
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ACADA9",
        offset: 0.5026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9B9C98",
        offset: 0.7153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#838480",
        offset: 0.9171
      }),
      _react2.default.createElement("stop", {
        stopColor: "#777875",
        offset: 0.996
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.48 30.8c0.7-2.84 1.19-6.14-0.62-8.45-1.24-1.58-3.33-2.31-5.34-2.33s-3.97 0.58-5.87 1.25c-6.09 2.13-11.93 4.99-17.36 8.48-1.54 0.99-3.15 2.17-3.7 3.91-0.78 2.49 0.89 5.05 2.62 7.02 3.88 4.43 12.86 14.1 19.64 11.81 6.9-2.33 9.16-15.71 10.63-21.69z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m102.34 34.56c0.44-1.77 0.74-3.82-0.39-5.26-0.77-0.98-2.07-1.44-3.32-1.45s-2.47 0.36-3.65 0.78c-3.79 1.33-7.42 3.11-10.79 5.28-0.96 0.62-1.96 1.35-2.3 2.43-0.49 1.55 0.55 3.15 1.63 4.37 2.41 2.76 7.99 8.78 12.21 7.35 4.29-1.45 5.7-9.78 6.61-13.5z",
      fill: "#3E3A37"
    }),
    _react2.default.createElement("path", {
      d:
        "m25.58 23.02c1.57 0 3.29 0.56 4.78 1.08 5.87 2.06 11.5 4.81 16.73 8.17 0.71 0.46 2.18 1.41 2.46 2.29s-0.44 2.35-2.01 4.15c-4.45 5.08-10.71 11.13-15.22 11.13-0.44 0-0.83-0.06-1.21-0.19-4.54-1.53-6.97-12.14-8.14-17.24-0.2-0.85-0.38-1.64-0.54-2.32-0.51-2.05-0.96-4.58 0.07-5.88 0.56-0.71 1.71-1.17 3.01-1.18l0.07-0.01m0-3h-0.1c-2.01 0.02-4.11 0.75-5.34 2.33-1.81 2.31-1.32 5.61-0.62 8.45 1.47 5.98 3.73 19.36 10.64 21.69 0.7 0.24 1.42 0.35 2.16 0.35 6.42 0 13.99-8.18 17.48-12.15 1.73-1.97 3.4-4.53 2.62-7.02-0.55-1.74-2.15-2.92-3.7-3.91-5.42-3.49-11.26-6.34-17.36-8.48-1.87-0.66-3.8-1.26-5.78-1.26z",
      fill: "#8A8A8A"
    }),
    _react2.default.createElement("path", {
      d:
        "m102.42 23.02h0.07c1.3 0.01 2.45 0.46 3.01 1.18 1.02 1.31 0.58 3.83 0.07 5.88-0.17 0.69-0.35 1.47-0.54 2.32-1.17 5.1-3.6 15.71-8.14 17.24-0.37 0.13-0.77 0.19-1.21 0.19-4.51 0-10.77-6.05-15.22-11.13-1.57-1.79-2.29-3.26-2.01-4.15 0.28-0.88 1.75-1.83 2.46-2.29 5.23-3.36 10.85-6.11 16.73-8.17 1.49-0.51 3.21-1.07 4.78-1.07m0-3c-1.98 0-3.91 0.59-5.78 1.25-6.09 2.13-11.93 4.99-17.36 8.48-1.54 0.99-3.15 2.17-3.7 3.91-0.78 2.49 0.89 5.05 2.62 7.02 3.48 3.97 11.06 12.15 17.48 12.15 0.74 0 1.46-0.11 2.16-0.35 6.91-2.33 9.16-15.71 10.64-21.69 0.7-2.84 1.19-6.14-0.62-8.45-1.24-1.58-3.33-2.31-5.34-2.33-0.03 0.01-0.07 0.01-0.1 0.01z",
      fill: "#8A8A8A"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 25.492,
        y2: 111,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BABBB6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B7B8B3",
        offset: 0.2737
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ACADA9",
        offset: 0.5026
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9B9C98",
        offset: 0.7153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#838480",
        offset: 0.9171
      }),
      _react2.default.createElement("stop", {
        stopColor: "#777875",
        offset: 0.996
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 25.49c-17.54 0-42.67 18.37-59.16 52.57-1.35 2.81-1.06 6.17 0.75 8.69 3.25 4.54 9.98 11.59 22.86 17.16 21.87 9.45 49.22 9.45 71.09 0 12.88-5.56 19.62-12.62 22.86-17.16 1.8-2.52 2.1-5.88 0.75-8.69-16.48-34.2-41.61-52.57-59.15-52.57z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m64 25.49c-17.54 0-42.67 18.37-59.16 52.57-1.35 2.81-1.06 6.17 0.75 8.69 3.25 4.54 9.98 11.59 22.86 17.16 21.87 9.45 49.22 9.45 71.09 0 12.88-5.56 19.62-12.62 22.86-17.16 1.8-2.52 2.1-5.88 0.75-8.69-16.48-34.2-41.61-52.57-59.15-52.57z"
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 64,
          x2: 64,
          y1: 43.123,
          y2: 108.47,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.3186
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FCFCFC",
          offset: 0.5384
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F1F1F1",
          offset: 0.7221
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.8924
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D1D1D1",
          offset: 0.999
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m78.51 44.86c-9.4 1.39-13.28 13.13-14.51 26.96-1.23-13.83-5.11-25.56-14.51-26.96-12.76-1.89-37.37 19.84-32.81 55.75l47.55 18.27 47.09-18.27c4.55-35.91-20.05-57.64-32.81-55.75z",
        fill: "url(#c)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.66 67.19c3.45-4.18 8-7.56 13.19-8.7s11.03 0.25 14.66 4.27 4.44 10.74 1.24 15.13c-1.18 1.62-2.78 2.84-4.36 4.04-2.97 2.25-5.94 4.51-8.92 6.76-2.87 2.18-5.89 4.42-9.41 5.01-3.24 0.54-6.68-0.47-9.17-2.69-8.26-7.37-2.96-16.89 2.77-23.82z",
      clipPath: "url(#a)",
      fill: "#54504A"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.17 67.19c-3.45-4.18-8-7.56-13.19-8.7s-11.03 0.25-14.66 4.27c-3.62 4.02-4.44 10.74-1.24 15.13 1.18 1.62 2.78 2.84 4.36 4.04 2.97 2.25 5.94 4.51 8.92 6.76 2.87 2.18 5.89 4.42 9.41 5.01 3.24 0.54 6.68-0.47 9.17-2.69 8.26-7.37 2.96-16.89-2.77-23.82z",
      clipPath: "url(#a)",
      fill: "#54504A"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.73 62.68c0.46-16.53 15.34-34.33 15.34-34.33l-17.92-4.65v-0.08l-0.15 0.04-0.15-0.04v0.08l-17.92 4.65s14.89 17.79 15.34 34.33c0.46 16.53-3.04 29.92-3.04 29.92h11.54s-3.49-13.39-3.04-29.92z",
      clipPath: "url(#a)",
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 50.62,
      cy: 71.65,
      r: 5.34
    }),
    _react2.default.createElement("circle", {
      cx: 78.2,
      cy: 71.65,
      r: 5.34
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#404040",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 2
      },
      _react2.default.createElement("path", {
        d: "m63.93 94.55c0.07 4-3.12 7.3-7.12 7.36-1.83 0.03-3.51-0.62-4.8-1.72"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.89 94.55c0.07 4 3.36 7.19 7.36 7.12 1.83-0.03 3.49-0.74 4.74-1.87"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 84.333,
        y2: 95.354,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4D4D4D",
        offset: 0.1628
      }),
      _react2.default.createElement("stop", {
        stopColor: "#373737",
        offset: 0.3672
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0F0F0F",
        offset: 0.7836
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.26 95.29 2.4-3.77c2.14-3.36-0.27-7.76-4.26-7.76h-4.8c-3.98 0-6.39 4.4-4.26 7.76l2.4 3.77c1.99 3.11 6.53 3.11 8.52 0z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 28.49c8.31 0 18.27 4.53 28.04 12.75 11.05 9.3 20.88 22.48 28.42 38.12 0.87 1.8 0.68 4.02-0.48 5.64-3.22 4.5-9.59 10.96-21.61 16.15-10.37 4.48-22.25 6.85-34.37 6.85s-24-2.37-34.36-6.84c-12.02-5.19-18.39-11.65-21.61-16.15-1.16-1.62-1.35-3.84-0.48-5.64 7.54-15.64 17.36-28.82 28.42-38.12 9.76-8.23 19.72-12.76 28.03-12.76m0-3c-17.54 0-42.67 18.37-59.16 52.57-1.35 2.81-1.06 6.17 0.75 8.69 3.25 4.54 9.98 11.59 22.86 17.16 10.94 4.73 23.25 7.09 35.55 7.09s24.61-2.36 35.55-7.09c12.88-5.56 19.62-12.62 22.86-17.16 1.8-2.52 2.1-5.88 0.75-8.69-16.49-34.2-41.62-52.57-59.16-52.57z",
      fill: "#8A8A8A"
    })
  );
}

exports.default = Raccoon;
