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

function Crown(props) {
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
        x1: 33.107,
        x2: 33.107,
        y1: 12.5,
        y2: 91.21,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.0577
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0.7565
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m49.57 89.51h-32.92c-2.35 0-4.25-1.9-4.25-4.25v-3.43c0-0.55 0.11-1.09 0.31-1.6l13.63-33.5c1.34-3.28 5.87-3.58 7.62-0.51l19.29 33.8c0.37 0.64 0.56 1.37 0.56 2.11v3.13c0 2.35-1.9 4.25-4.24 4.25z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 95.955,
        x2: 95.955,
        y1: 12.5,
        y2: 91.21,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.0577
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0.7565
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m79.49 89.51h32.92c2.35 0 4.25-1.9 4.25-4.25v-3.43c0-0.55-0.11-1.09-0.31-1.6l-13.63-33.5c-1.34-3.28-5.87-3.58-7.62-0.51l-19.29 33.8c-0.37 0.64-0.56 1.37-0.56 2.11v3.13c0 2.35 1.9 4.25 4.24 4.25z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 12.5,
        y2: 91.21,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.0577
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0.7565
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80.46 89.51h-32.92c-2.35 0-4.25-1.9-4.25-4.25v-3.28c0-0.65 0.15-1.28 0.43-1.87l16.46-33.67c1.55-3.18 6.08-3.18 7.63 0l16.46 33.67c0.28 0.58 0.43 1.22 0.43 1.87v3.28c0.01 2.35-1.89 4.25-4.24 4.25z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 99.72,
        x2: 99.72,
        y1: 12.5,
        y2: 91.21,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.0577
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0.7565
      })
    ),
    _react2.default.createElement("circle", {
      cx: 99.72,
      cy: 42.04,
      r: 4.05,
      fill: "url(#e)"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 42.04,
      r: 4.05,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 29.197,
        x2: 29.197,
        y1: 12.5,
        y2: 91.21,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.0577
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9A825",
        offset: 0.7565
      })
    ),
    _react2.default.createElement("circle", {
      cx: 29.2,
      cy: 42.04,
      r: 4.05,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m99.73 39.98c1.14 0 2.07 0.92 2.07 2.05 0 0.71-0.35 1.35-0.93 1.73-0.5 0.32-0.83 0.84-0.91 1.43s0.11 1.18 0.51 1.61c0.25 0.27 0.41 0.49 0.49 0.69l13.71 33.49 0.11 0.27c0.08 0.19 0.21 0.49 0.22 0.57v3.43c0 1.28-1.38 2.73-2.58 2.73h-95.77c-1.22 0.02-2.65-1.46-2.65-2.71v-3.39c0.03-0.1 0.13-0.34 0.2-0.5 0.06-0.13 0.11-0.26 0.16-0.37l13.83-33.51c0.1-0.24 0.23-0.46 0.42-0.66 0.4-0.44 0.57-1.04 0.48-1.63s-0.44-1.11-0.95-1.41c-0.63-0.38-1.01-1.03-1.01-1.75 0-1.13 0.92-2.05 2.05-2.05s2.05 0.92 2.05 2.05c0 0.59-0.26 1.03-0.48 1.3-0.38 0.46-0.54 1.07-0.42 1.66 0.11 0.59 0.48 1.09 1.01 1.38 0.37 0.2 0.66 0.49 0.87 0.86l14.18 24.84c0.36 0.62 1.02 1.01 1.74 1.01h0.06c0.74-0.02 1.41-0.45 1.73-1.12l12.04-24.62c0.15-0.3 0.34-0.55 0.59-0.75 0.45-0.37 0.71-0.92 0.72-1.5s-0.23-1.14-0.66-1.53c-0.44-0.4-0.69-0.94-0.69-1.52 0-1.13 0.92-2.05 2.05-2.05s2.05 0.92 2.05 2.05c0 0.58-0.24 1.11-0.69 1.52-0.43 0.39-0.67 0.95-0.66 1.53s0.28 1.13 0.72 1.5c0.25 0.2 0.44 0.46 0.59 0.75l12.53 25.63c0.33 0.67 0.99 1.1 1.73 1.12h0.06c0.72 0 1.38-0.38 1.74-1.01l14.76-25.85c0.2-0.35 0.48-0.63 0.82-0.83 0.52-0.3 0.87-0.81 0.97-1.4s-0.07-1.19-0.45-1.64c-0.23-0.27-0.51-0.72-0.51-1.33 0.04-1.15 0.96-2.07 2.1-2.07m0-2c-2.24 0-4.06 1.82-4.06 4.05 0 1.01 0.38 1.92 0.99 2.63-0.61 0.36-1.16 0.87-1.56 1.57l-14.76 25.85-12.52-25.63c-0.28-0.58-0.67-1.05-1.11-1.42 0.82-0.74 1.35-1.81 1.35-3 0-2.24-1.82-4.05-4.05-4.05-2.24 0-4.05 1.82-4.05 4.05 0 1.19 0.53 2.26 1.35 3-0.44 0.37-0.83 0.84-1.11 1.42l-12.05 24.63-14.19-24.85c-0.42-0.73-1-1.27-1.65-1.63 0.58-0.7 0.94-1.59 0.94-2.57 0-2.24-1.82-4.05-4.05-4.05-2.24 0-4.05 1.82-4.05 4.05 0 1.48 0.8 2.75 1.97 3.46-0.31 0.35-0.58 0.76-0.78 1.24l-13.83 33.5c-0.21 0.51-0.51 1.05-0.51 1.6v3.43c0 2.35 2.3 4.73 4.65 4.73h95.77c2.35 0 4.58-2.39 4.58-4.73v-3.43c0-0.55-0.27-1.09-0.48-1.6l-13.71-33.5c-0.2-0.5-0.53-0.93-0.87-1.29 1.13-0.72 1.86-1.97 1.86-3.41 0-2.23-1.83-4.05-4.07-4.05z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.08 99.61h-72.26c-8.84 0-16-7.16-16-16v-16.07h104.26v16.08c0 8.83-7.16 15.99-16 15.99z",
      fill: "#FDD835"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.531,
        x2: 64.531,
        y1: -2.8235,
        y2: 106.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.2467
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE639",
        offset: 0.4378
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD734",
        offset: 0.6718
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 0.9102
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m112.31 49.08-8.13 14.55c-2.03 1.88-5.3 1.19-6.4-1.35l-10.4-28.17c-1.5-3.04-5.79-2.94-7.49 0l-12.29 26.72c-1.53 2.83-5.6 2.79-7.07-0.07l-11.7-26.65c-1.55-3.18-6.08-3.18-7.63 0l-9.99 28.06c-1.07 2.58-4.38 3.29-6.42 1.39l-8.03-14.48c-2.65-3.15-7.78-1.1-7.48 3l3 41.69c-0.03 7.16 5.6 13.23 12.55 13.23h4.41 1.43 32.93c0.26 0 0.52-0.03 0.77-0.08 0.25 0.05 0.51 0.08 0.77 0.08h33.21 1.43 4.44c6.95 0 12.58-6.07 12.56-13.23l3-41.69c0.31-4.11-4.82-6.15-7.47-3z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 84.467,
        x2: 84.467,
        y1: 20.25,
        y2: 106.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 84.47,
      cy: 28.33,
      r: 7.1,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 44.595,
        x2: 44.595,
        y1: 20.25,
        y2: 106.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 44.6,
      cy: 28.33,
      r: 7.1,
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: 10.082,
        x2: 10.082,
        y1: 20.25,
        y2: 106.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 10.08,
      cy: 45.85,
      r: 6.08,
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 117.92,
        x2: 117.92,
        y1: 20.25,
        y2: 106.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 117.92,
      cy: 45.85,
      r: 6.08,
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.47 24.23c2.26 0 4.1 1.84 4.1 4.1 0 1.57-0.88 2.97-2.29 3.67-1.38 0.68-2.02 2.29-1.49 3.73l10.19 27.59 0.06 0.15c1.11 2.57 3.63 4.23 6.44 4.23 1.77 0 3.45-0.66 4.75-1.87 0.23-0.21 0.42-0.46 0.58-0.73l7.93-14.19c0.94-0.95 1.14-2.4 0.49-3.56-0.25-0.46-0.38-0.96-0.38-1.49 0-1.7 1.38-3.08 3.08-3.08s3.08 1.38 3.08 3.08c0 1.34-0.86 2.52-2.13 2.93-1.26 0.41-2.11 1.6-2.08 2.93v0.15 0.05l-3 41.64c-0.01 0.07-0.01 0.15-0.01 0.22 0.01 2.78-1.11 5.49-3.05 7.44-1.79 1.79-4.1 2.78-6.51 2.78h-39.09c-0.03 0-0.1 0-0.23-0.03-0.18-0.03-0.36-0.05-0.54-0.05s-0.36 0.02-0.54 0.05c-0.14 0.03-0.2 0.03-0.23 0.03h-38.76c-2.41 0-4.72-0.99-6.51-2.78-1.95-1.95-3.06-4.66-3.05-7.44 0-0.07 0-0.15-0.01-0.22l-2.99-41.57v-0.19c-0.04-1.47-1.14-2.7-2.6-2.89-1.53-0.21-2.68-1.52-2.68-3.06 0-1.7 1.38-3.08 3.08-3.08s3.08 1.38 3.08 3.08c0 0.4-0.08 0.8-0.23 1.17-0.56 1.36-0.06 2.92 1.19 3.69 0.07 0.04 0.13 0.09 0.19 0.14l7.85 14.16c0.15 0.28 0.35 0.53 0.58 0.74 1.3 1.21 2.99 1.88 4.76 1.88 2.84 0 5.39-1.69 6.47-4.32 0.02-0.05 0.04-0.1 0.06-0.14l9.86-27.69c0.49-1.37-0.07-2.88-1.33-3.61-1.27-0.73-2.06-2.09-2.06-3.55 0-2.26 1.84-4.1 4.1-4.1s4.1 1.84 4.1 4.1c0 1.31-0.61 2.51-1.68 3.3-1.18 0.87-1.56 2.47-0.89 3.78 0.01 0.02 0.02 0.04 0.03 0.05l11.64 26.51c0.03 0.06 0.05 0.11 0.08 0.17 1.21 2.34 3.59 3.79 6.22 3.79 2.57 0 4.93-1.41 6.16-3.67 0.03-0.06 0.06-0.11 0.09-0.17l12.19-26.5c0.01-0.02 0.02-0.03 0.03-0.05 0.86-1.3 0.59-3.04-0.63-4.01-0.98-0.78-1.55-1.95-1.55-3.2-0.02-2.25 1.82-4.09 4.08-4.09m0-3c-3.92 0-7.1 3.18-7.1 7.1 0 2.25 1.05 4.25 2.68 5.55-0.05 0.08-0.11 0.15-0.16 0.24l-12.29 26.71c-0.76 1.4-2.14 2.1-3.52 2.1-1.41 0-2.81-0.72-3.56-2.16l-11.7-26.65c-0.01-0.03-0.03-0.05-0.04-0.07 1.76-1.29 2.9-3.37 2.9-5.71 0-3.92-3.18-7.1-7.1-7.1s-7.1 3.18-7.1 7.1c0 2.63 1.44 4.93 3.57 6.15l-9.86 27.69c-0.66 1.59-2.17 2.47-3.7 2.47-0.96 0-1.93-0.34-2.72-1.07l-8.03-14.48c-0.32-0.38-0.67-0.68-1.05-0.91 0.29-0.71 0.46-1.5 0.46-2.32 0-3.36-2.72-6.08-6.08-6.08-3.35-0.02-6.07 2.7-6.07 6.06 0 3.08 2.3 5.62 5.27 6.02 0 0.07-0.01 0.13 0 0.21l3 41.69c-0.02 7.16 5.61 13.23 12.56 13.23h4.41 1.43 32.93c0.26 0 0.52-0.03 0.77-0.08 0.25 0.05 0.51 0.08 0.77 0.08h33.21 1.43 4.44c6.95 0 12.58-6.07 12.56-13.23l3-41.69c0.01-0.15 0-0.29 0-0.44 2.44-0.79 4.21-3.08 4.21-5.79 0-3.36-2.72-6.08-6.08-6.08s-6.08 2.72-6.08 6.08c0 1.07 0.28 2.07 0.76 2.94-0.1 0.1-0.2 0.18-0.29 0.29l-8.13 14.55c-0.78 0.73-1.75 1.07-2.71 1.07-1.52 0-3.01-0.86-3.68-2.42l-10.19-27.59c2.35-1.16 3.97-3.57 3.97-6.36 0-3.92-3.17-7.1-7.09-7.1z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: 56.646,
        x2: 72.416,
        y1: 73.477,
        y2: 89.246,
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
    _react2.default.createElement("circle", {
      cx: 64.53,
      cy: 81.36,
      r: 11.15,
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 32.946,
        x2: 41.957,
        y1: 76.856,
        y2: 85.867,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E91E63",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 37.45,
      cy: 81.36,
      r: 6.37,
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 87.105,
        x2: 96.116,
        y1: 76.856,
        y2: 85.867,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E91E63",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 91.61,
      cy: 81.36,
      r: 6.37,
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 7.8614,
        x2: 17.13,
        y1: 76.727,
        y2: 85.995,
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
    _react2.default.createElement("ellipse", {
      cx: 12.5,
      cy: 81.36,
      rx: 5.62,
      ry: 7.37,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 111.93,
        x2: 121.2,
        y1: 76.727,
        y2: 85.995,
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
    _react2.default.createElement("ellipse", {
      cx: 116.57,
      cy: 81.36,
      rx: 5.62,
      ry: 7.37,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m12.5 75.99c1.96 0 3.62 2.46 3.62 5.37s-1.66 5.37-3.62 5.37-3.62-2.46-3.62-5.37 1.66-5.37 3.62-5.37m0-2c-3.1 0-5.62 3.3-5.62 7.37s2.51 7.37 5.62 7.37 5.62-3.3 5.62-7.37c-0.01-4.07-2.52-7.37-5.62-7.37z",
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
          "m116.57 75.99c1.96 0 3.62 2.46 3.62 5.37s-1.66 5.37-3.62 5.37-3.62-2.46-3.62-5.37 1.66-5.37 3.62-5.37m0-2c-3.1 0-5.62 3.3-5.62 7.37s2.51 7.37 5.62 7.37 5.62-3.3 5.62-7.37c-0.01-4.07-2.52-7.37-5.62-7.37z",
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
          "m64.53 72.21c5.05 0 9.15 4.1 9.15 9.15s-4.1 9.15-9.15 9.15-9.15-4.1-9.15-9.15 4.11-9.15 9.15-9.15m0-2c-6.16 0-11.15 4.99-11.15 11.15s4.99 11.15 11.15 11.15 11.15-4.99 11.15-11.15-4.99-11.15-11.15-11.15z",
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
          "m37.45 76.99c2.41 0 4.37 1.96 4.37 4.37s-1.96 4.37-4.37 4.37-4.37-1.96-4.37-4.37 1.96-4.37 4.37-4.37m0-2c-3.52 0-6.37 2.85-6.37 6.37s2.85 6.37 6.37 6.37 6.37-2.85 6.37-6.37-2.85-6.37-6.37-6.37z",
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
          "m91.61 76.99c2.41 0 4.37 1.96 4.37 4.37s-1.96 4.37-4.37 4.37-4.37-1.96-4.37-4.37 1.96-4.37 4.37-4.37m0-2c-3.52 0-6.37 2.85-6.37 6.37s2.85 6.37 6.37 6.37 6.37-2.85 6.37-6.37-2.85-6.37-6.37-6.37z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Crown;
