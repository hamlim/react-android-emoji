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

function Tiger(props) {
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
        x1: 7.1665,
        x2: 41.611,
        y1: 25.891,
        y2: 25.891,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB503",
        offset: 0.6437
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB10E",
        offset: 0.7668
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA920",
        offset: 0.882
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA723",
        offset: 0.9
      })
    ),
    _react2.default.createElement("circle", {
      cx: 24.39,
      cy: 25.89,
      r: 17.22,
      fill: "url(#f)",
      stroke: "#DE8900",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("circle", {
      cx: 24.39,
      cy: 25.89,
      r: 9.82,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 86.389,
        x2: 120.83,
        y1: 25.891,
        y2: 25.891,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB503",
        offset: 0.6437
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB10E",
        offset: 0.7668
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA920",
        offset: 0.882
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA723",
        offset: 0.9
      })
    ),
    _react2.default.createElement("circle", {
      cx: 103.61,
      cy: 25.89,
      r: 17.22,
      fill: "url(#e)",
      stroke: "#DE8900",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("circle", {
      cx: 103.61,
      cy: 25.89,
      r: 9.82,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 13.682,
        y2: 116.85,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCB402",
        offset: 0.6341
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2A90A",
        offset: 0.7489
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E29717",
        offset: 0.8564
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D98E1E",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 117.83c-25.77 0-53.5-16.43-53.5-52.5s27.73-52.5 53.5-52.5c14.27 0 27.48 4.81 37.21 13.54 10.66 9.57 16.29 23.04 16.29 38.96 0 15.84-5.63 29.29-16.29 38.89-9.76 8.78-22.97 13.61-37.21 13.61z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 14.33c13.9 0 26.75 4.67 36.2 13.16 10.33 9.28 15.8 22.37 15.8 37.84 0 15.4-5.46 28.46-15.8 37.77-9.47 8.53-22.33 13.23-36.2 13.23-25.04 0-52-15.96-52-51 0-15.65 5.46-28.8 15.79-38.01 9.39-8.38 22.25-12.99 36.21-12.99m0-3c-28.56 0-55 18.66-55 54 0 35.15 26.44 54 55 54 28.55 0 55-19.33 55-54 0-34.86-26.44-54-55-54z",
      fill: "#DE8900"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 37.14,
        cy: 58.34,
        rx: 8.84,
        ry: 10
      }),
      _react2.default.createElement("ellipse", {
        cx: 90.86,
        cy: 58.22,
        rx: 8.84,
        ry: 10
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 91.51c10.62 0 19.23-4.43 19.23 0.99 0 5.43-8.61 21.25-19.23 21.25s-19.23-15.82-19.23-21.25c0-5.42 8.61-0.99 19.23-0.99z",
      fill: "#ccc"
    }),
    _react2.default.createElement("path", {
      d:
        "M64,86.35c14.11,0,25.54-4.02,25.54,0.9S78.11,106.5,64,106.5S38.46,92.17,38.46,87.25 S49.89,86.35,64,86.35z",
      fill: "#231F20"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m57.52 47.03s0.11-0.17 0.32-0.45c0.05-0.07 0.11-0.14 0.18-0.23 0.09-0.09 0.2-0.18 0.31-0.29 0.23-0.21 0.5-0.43 0.78-0.62 0.28-0.21 0.61-0.41 0.97-0.59 0.36-0.2 0.76-0.33 1.18-0.49 0.42-0.12 0.87-0.25 1.33-0.31 0.46-0.09 0.94-0.1 1.41-0.12 0.47 0.02 0.95 0.03 1.41 0.12 0.46 0.06 0.91 0.19 1.33 0.31 0.42 0.15 0.82 0.29 1.18 0.49 0.36 0.18 0.69 0.38 0.97 0.59 0.29 0.19 0.53 0.4 0.74 0.59 0.21 0.18 0.38 0.36 0.51 0.52 0.26 0.31 0.39 0.5 0.39 0.5 0.52 0.77 0.32 1.81-0.44 2.33-0.34 0.23-0.73 0.32-1.11 0.28l-0.33-0.03s-0.18-0.02-0.46-0.07c-0.28-0.06-0.68-0.12-1.12-0.19-0.89-0.14-1.99-0.25-3.07-0.26-1.09 0-2.18 0.12-3.08 0.25-0.21 0.03-0.41 0.06-0.58 0.08-0.09 0.01-0.16 0.02-0.25 0.03-0.1 0.03-0.19 0.05-0.27 0.07-0.34 0.09-0.54 0.12-0.54 0.12-0.95 0.16-1.85-0.48-2.02-1.43-0.06-0.41 0.04-0.84 0.26-1.2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m52.63 37.06s0.22-0.3 0.65-0.76c0.11-0.12 0.23-0.25 0.36-0.39 0.16-0.15 0.35-0.29 0.54-0.46 0.39-0.33 0.85-0.7 1.36-1 0.26-0.16 0.52-0.33 0.8-0.5 0.29-0.15 0.59-0.3 0.9-0.45 0.62-0.33 1.32-0.54 2.04-0.8 0.73-0.19 1.5-0.42 2.3-0.51 0.79-0.15 1.61-0.16 2.43-0.2 0.82 0.04 1.64 0.05 2.43 0.2 0.8 0.09 1.56 0.32 2.3 0.51 0.72 0.26 1.42 0.48 2.04 0.8 0.31 0.16 0.61 0.31 0.9 0.45 0.28 0.17 0.54 0.34 0.8 0.5 0.52 0.3 0.95 0.66 1.32 0.97 0.38 0.3 0.68 0.59 0.92 0.85 0.48 0.51 0.72 0.82 0.72 0.82 0.56 0.72 0.43 1.76-0.28 2.32-0.41 0.32-0.91 0.42-1.38 0.31l-0.21-0.05s-0.34-0.08-0.88-0.25c-0.26-0.1-0.6-0.18-0.97-0.29s-0.78-0.23-1.23-0.33c-0.44-0.12-0.93-0.22-1.44-0.32-0.5-0.13-1.05-0.17-1.59-0.28-0.56-0.05-1.11-0.14-1.69-0.17-0.6-0.04-1.19-0.03-1.77-0.06-0.58 0.02-1.17 0.01-1.74 0.07-0.58 0.02-1.14 0.12-1.69 0.17-0.54 0.11-1.09 0.15-1.59 0.28-0.51 0.1-1 0.19-1.44 0.32-0.44 0.11-0.84 0.22-1.19 0.31-0.18 0.04-0.34 0.09-0.5 0.13-0.18 0.06-0.34 0.12-0.49 0.17-0.6 0.21-0.95 0.3-0.95 0.3-0.9 0.24-1.82-0.31-2.06-1.21-0.14-0.52-0.02-1.05 0.28-1.45z"
      }),
      _react2.default.createElement("path", {
        d:
          "m51.12 27.09s0.26-0.33 0.76-0.85c0.13-0.13 0.26-0.27 0.42-0.43 0.18-0.16 0.39-0.32 0.61-0.5 0.45-0.36 0.96-0.77 1.54-1.1 0.29-0.18 0.59-0.36 0.9-0.56 0.32-0.17 0.67-0.33 1.02-0.5 0.7-0.36 1.49-0.6 2.3-0.89 0.83-0.21 1.69-0.46 2.59-0.57 0.89-0.16 1.82-0.18 2.74-0.22 0.92 0.04 1.84 0.05 2.74 0.22 0.9 0.1 1.76 0.35 2.59 0.56 0.81 0.29 1.6 0.53 2.3 0.89 0.35 0.17 0.69 0.34 1.02 0.5 0.31 0.19 0.61 0.38 0.9 0.56 0.59 0.34 1.07 0.73 1.5 1.08 0.43 0.33 0.78 0.66 1.05 0.95 0.55 0.56 0.83 0.9 0.83 0.9 0.57 0.7 0.47 1.74-0.23 2.31-0.42 0.34-0.96 0.45-1.45 0.32l-0.19-0.05s-0.39-0.1-1-0.32c-0.3-0.12-0.69-0.23-1.11-0.36-0.43-0.13-0.9-0.28-1.42-0.41-0.51-0.15-1.08-0.27-1.67-0.39-0.58-0.16-1.22-0.21-1.84-0.35-0.65-0.06-1.3-0.18-1.97-0.21-0.67-0.07-1.35-0.06-2.03-0.09-0.68 0.03-1.36 0.02-2.03 0.09-0.67 0.03-1.33 0.15-1.97 0.21-0.63 0.14-1.27 0.19-1.84 0.35-0.59 0.12-1.16 0.24-1.67 0.4-0.53 0.14-0.98 0.27-1.38 0.39-0.2 0.06-0.39 0.12-0.58 0.16-0.2 0.08-0.39 0.14-0.55 0.21-0.67 0.25-1.08 0.37-1.08 0.37-0.89 0.26-1.82-0.25-2.07-1.14-0.19-0.56-0.05-1.12 0.27-1.53z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 58.45c-4.39 0-8 3.59-8 7.97v10.38c0 4.39 3.61 7.97 8 7.97s8-3.59 8-7.97v-10.38c0-4.39-3.61-7.97-8-7.97z",
      fill: "#FF9D00"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("circle", {
        cx: 51.24,
        cy: 85.37,
        r: 16.17
      }),
      _react2.default.createElement("circle", {
        cx: 76.76,
        cy: 85.37,
        r: 16.17
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.001,
        x2: 64.001,
        y1: 70,
        y2: 79.242,
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
        "m64 78.87c3.23 0 6.19-3.26 8-5.92 0.9-1.32-0.04-2.95-1.64-2.95h-12.72c-1.59 0-2.53 1.63-1.64 2.95 1.82 2.66 4.77 5.92 8 5.92z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m119 65.33c0-34.86-26.44-54-55-54-28.55 0-55 18.66-55 54 0 35.15 26.44 54 55 54s55-19.33 55-54z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m9.61 59.21 12.73 1.75c0.83 0.11 1.41 0.88 1.29 1.71-0.09 0.69-0.64 1.2-1.29 1.29l-12.73 1.74c-1.79 0.25-3.44-1.01-3.69-2.8s1.01-3.44 2.8-3.69c0.29-0.04 0.6-0.03 0.89 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m9.61 69.21 12.73 1.75c0.83 0.11 1.41 0.88 1.29 1.71-0.09 0.69-0.64 1.2-1.29 1.29l-12.73 1.74c-1.79 0.25-3.44-1.01-3.69-2.8s1.01-3.44 2.8-3.69c0.29-0.04 0.6-0.04 0.89 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m9.61 49.71 12.73 1.75c0.83 0.11 1.41 0.88 1.29 1.71-0.09 0.69-0.64 1.2-1.29 1.29l-12.73 1.74c-1.79 0.25-3.44-1.01-3.69-2.8s1.01-3.44 2.8-3.69c0.29-0.04 0.6-0.03 0.89 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.67 65.73-12.73-1.75c-0.83-0.11-1.41-0.88-1.29-1.71 0.09-0.69 0.64-1.2 1.29-1.29l12.73-1.75c1.79-0.25 3.44 1.01 3.69 2.8s-1.01 3.44-2.8 3.69c-0.3 0.05-0.61 0.05-0.89 0.01z"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.67 75.72-12.73-1.75c-0.83-0.11-1.41-0.88-1.29-1.71 0.09-0.69 0.64-1.2 1.29-1.29l12.73-1.75c1.79-0.25 3.44 1.01 3.69 2.8s-1.01 3.44-2.8 3.69c-0.3 0.06-0.61 0.05-0.89 0.01z"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.67 56.23-12.73-1.75c-0.83-0.11-1.41-0.88-1.29-1.71 0.09-0.69 0.64-1.2 1.29-1.29l12.73-1.75c1.79-0.25 3.44 1.01 3.69 2.8s-1.01 3.44-2.8 3.69c-0.3 0.05-0.61 0.05-0.89 0.01z"
      })
    )
  );
}

exports.default = Tiger;
