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

function Bagel(props) {
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
        id: "k",
        x1: -226.5,
        x2: -226.5,
        y1: -223.06,
        y2: -223.06,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D5ECFD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9C9E3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m-226.5-223.06",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: -344.88,
        x2: -344.88,
        y1: -191,
        y2: -134.87,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0051299
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.2817
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.5766
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-293.97-162.31c-0.91-4.33-4.3-20.11-5.87-27.41-0.47-2.21-2.11-3.82-3.99-3.81-5.36 0-15.39-0.05-16.6-0.05h-44.08c-0.61 0-2.56 0.06-4.11 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0.01-0.43-0.04-0.84-0.13-1.25z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "a",
        d:
          "m-317.47-145.11c-0.91-4.32-4.3-20.06-5.87-27.34-0.47-2.21-2.11-3.82-3.99-3.82-5.36 0-15.39-0.06-16.6-0.06h-44.08c-0.61 0-2.56 0.07-4.11 1.8-4.7 5.26-12.54 20.51-13.76 22.05-0.08 0.1-6.27 2.28-9.09 3.96-1.12 0.67-1.74 2.13-1.9 3.62l-2.46 20.76c-0.64 4.09 1.7 5.81 5.37 5.81h91.51c2.8 0 5.11-0.79 5.11-5.8v-19.74c0.01-0.42-0.04-0.84-0.13-1.24z"
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
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-285.31-204.67c0.36 0 0.87 0.53 1.05 1.38 1.46 6.78 4.94 23.03 5.86 27.4 0.04 0.2 0.06 0.41 0.06 0.62v19.79c0 2.81-0.49 2.81-2.1 2.81h-91.51c-1.3 0-2.02-0.29-2.25-0.56s-0.3-0.95-0.16-1.8c0.01-0.04 0.01-0.07 0.02-0.11l2.47-20.84c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.46 10.65-16.87 0.57-0.64 1.22-0.72 1.87-0.72h44.08c0.75 0 4.84 0 9.13-0.01h7.48m0-3c-5.36 0-15.39 0.01-16.6 0.01h-44.08-0.02c-0.63 0-2.55 0.01-4.08 1.73-4.7 5.27-12.54 20.49-13.76 22.04-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24-0.91-4.33-4.3-20.11-5.86-27.41-0.49-2.22-2.12-3.76-4-3.76z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-172.67-5.29c0 4.21-3.81 7.62-8.5 7.62s-7.5-3.54-7.5-7.75 2.81-7.5 7.5-7.5c4.7 0 8.5 3.42 8.5 7.63z",
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m-66.67-5.29c0 4.21-3.81 7.62-8.5 7.62s-13-3.29-13-7.5 5.31-6.75 10-6.75 11.5 2.42 11.5 6.63z",
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: -228.9,
        x2: -228.9,
        y1: -215.83,
        y2: -159.71,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0106
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D5D5D",
        offset: 0.2496
      }),
      _react2.default.createElement("stop", {
        stopColor: "#505050",
        offset: 0.5044
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3B3B3B",
        offset: 0.7657
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-177.99-187.26c-0.91-4.33-4.3-20.11-5.86-27.41-0.47-2.21-2.11-3.75-3.99-3.75-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.73-4.7 5.27-12.54 20.49-13.76 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.83-0.13-1.24z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m-177.99-187.31c-0.91-4.32-4.3-20.06-5.86-27.34-0.47-2.21-2.11-3.74-3.99-3.74-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.72-4.7 5.26-12.54 20.47-13.76 22.01-0.08 0.1-6.27 2.26-9.09 3.94-1.12 0.67-1.74 2.12-1.9 3.61l-2.46 20.75c-0.64 4.09 1.7 5.8 5.37 5.8h91.51c2.8 0 5.1-0.79 5.1-5.8v-19.74c0-0.4-0.04-0.82-0.13-1.22z"
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
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-187.84-215.42c0.36 0 0.87 0.53 1.05 1.38 1.46 6.78 4.94 23.02 5.86 27.4 0.04 0.2 0.06 0.41 0.06 0.63v19.79c0 2.81-0.49 2.81-2.1 2.81h-91.51c-1.3 0-2.02-0.29-2.25-0.56s-0.3-0.95-0.16-1.8l0.02-0.1 2.47-20.84c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.46 10.65-16.87 0.57-0.64 1.22-0.72 1.87-0.72h44.08c0.76 0 5.02 0 9.41-0.01l7.2-0.02m0-3c-5.36 0-15.39 0.01-16.6 0.01h-44.08-0.02c-0.63 0-2.55 0.01-4.08 1.73-4.7 5.27-12.54 20.49-13.76 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24-0.91-4.33-4.3-20.11-5.86-27.41-0.49-2.21-2.12-3.75-4-3.75z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: -128.89,
        x2: -128.89,
        y1: -23.301,
        y2: -2.7612,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5BE87",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EBB27B",
        offset: 0.3043
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0945D",
        offset: 0.8466
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C78A53",
        offset: 0.9979
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-151.74-14.12s8.33-7.47 25.84-8.11 19.86 4.06 19.86 4.06v10.46s-28.61-5.18-42.07 8.11l-3.63-14.52z",
      fill: "url(#j)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.902 -.4318 .4318 .902 9.7968 -39.008)",
      cx: -81.01,
      cy: -41.08,
      rx: 2,
      ry: 0.89,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("path", {
      d:
        "m-123.48-31.2s-4.2-0.35-9.25-0.5c-1.84-1.92-5.18-3.21-9-3.21-4.77 0-8.79 2-10.09 4.74-0.49 0.1-0.97 0.2-1.44 0.3-0.57 0.12-1.13 0.25-1.68 0.38-0.88-0.54-1.93-0.85-3.07-0.85-2.43 0-4.48 1.45-5.25 3.46l-0.81 0.33c-0.51-0.15-1.04-0.25-1.6-0.25-2.32 0-4.27 1.4-4.97 3.33-0.53 0.28-1.06 0.57-1.61 0.88-2.19 0.29-4.06 1.51-5.11 3.22-0.78 0.56-1.55 1.14-2.28 1.74-3.68 0.2-6.61 3.01-6.61 6.47 0 0.64 0.1 1.26 0.29 1.85-0.29 0.99-0.41 2.01-0.32 3.04 0.28 3.19 1.04 7.36 3.51 11.61 0.03 0.01 0.06 0.02 0.09 0.02 1.22 1.36 6.3 3.46 10.07 4.82 1.36 2.3 4.36 3.89 7.86 3.89 1.4 0 2.71-0.26 3.88-0.71 1.53 1.85 4.22 3.07 7.28 3.07 2 0 3.84-0.53 5.31-1.41 0.28 0.03 0.55 0.08 0.83 0.11 1.19 0.81 2.66 1.3 4.25 1.3 0.64 0 1.26-0.09 1.86-0.23 1.26 1.91 3.53 3.18 6.12 3.18 2.44 0 4.59-1.13 5.89-2.85 0.18 0.01 0.36 0.01 0.54 0.01 1.26 1.03 2.92 1.66 4.73 1.66 1.77 0 3.39-0.59 4.64-1.58 3.3-0.06 6.52-0.21 9.67-0.45 1.38 0.72 3.04 1.14 4.84 1.14 2.75 0 5.2-0.99 6.78-2.53 10.98-1.87 19.9-5.21 24.71-10.31 13.92-14.73-10.28-33.57-50.06-35.67zm12.7 22.27c0 2.86-5.37 4.16-12.62 4.53-0.43 0.02-0.89 0.03-1.33 0.05-1.26-1.02-2.91-1.64-4.72-1.64-1.09 0-2.12 0.23-3.05 0.63-1.13-2.29-3.62-3.88-6.52-3.88-2.2 0-4.16 0.91-5.48 2.35-0.13-0.1-0.25-0.2-0.36-0.3-0.51-0.5-0.79-1.08-0.79-1.74 0-0.6 0.24-1.18 0.67-1.73 0.38 0.06 0.77 0.1 1.17 0.1 2.84 0 5.28-1.52 6.45-3.73 0.14-0.03 0.27-0.06 0.42-0.09 2.57-0.54 5.55-0.86 8.73-0.86 9.63-0.01 17.43 2.82 17.43 6.31z",
      fill: "#FFFFE7"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: -127.14,
        x2: -127.14,
        y1: 9.5722,
        y2: 34.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5BE87",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECB37B",
        offset: 0.3194
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D4965D",
        offset: 0.8888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CF9056",
        offset: 0.9995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-183.29 0.17c-0.03-0.01-1.33 27.65 30.75 32.89 62.78 10.24 80.72-15.38 81.57-34.17-30.27 16.03-107.27 3.44-112.32 1.28z",
      fill: "url(#i)"
    }),
    _react2.default.createElement("path", {
      d:
        "m-124.16-32.32s-4.2-0.34-9.25-0.48c-1.84-1.87-5.18-3.12-8.99-3.12-4.77 0-8.79 1.94-10.08 4.61-0.49 0.1-0.97 0.19-1.44 0.29-0.57 0.12-1.13 0.25-1.68 0.37-0.88-0.52-1.93-0.83-3.06-0.83-2.43 0-4.48 1.41-5.24 3.36-0.27 0.1-0.54 0.21-0.81 0.32-0.51-0.15-1.03-0.25-1.59-0.25-2.32 0-4.26 1.36-4.96 3.23-0.53 0.27-1.06 0.55-1.6 0.85-2.19 0.28-4.06 1.47-5.11 3.13-0.78 0.54-1.55 1.11-2.28 1.69-3.68 0.19-6.61 2.93-6.61 6.29 0 0.62 0.1 1.22 0.29 1.79-0.29 0.97-0.4 1.95-0.32 2.95 0.28 3.1 1.04 7.15 3.5 11.28 0.03 0.01 0.06 0.02 0.09 0.02 1.22 1.32 4.11 3.56 7.88 4.87 1.36 2.23 6.55 3.59 10.04 3.59 1.4 0 2.71-0.25 3.88-0.69 1.53 1.79 4.22 2.99 7.28 2.99 2 0 3.84-0.51 5.31-1.37 0.28 0.03 0.55 0.07 0.83 0.11 1.19 0.79 2.66 1.26 4.25 1.26 0.64 0 1.26-0.08 1.85-0.23 1.26 1.85 3.52 3.09 6.12 3.09 2.44 0 4.59-1.1 5.88-2.77 0.18 0.01 0.36 0.01 0.54 0.01 1.26 1 2.92 1.61 4.73 1.61 1.77 0 3.38-0.58 4.63-1.53 3.29-0.05 6.52-0.2 9.66-0.43 1.38 0.7 3.04 1.1 4.83 1.1 2.75 0 5.19-0.96 6.77-2.46 10.97-1.82 19.88-5.07 24.69-10.02 13.9-14.28-10.28-32.58-50.03-34.63z",
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-110.78-8.93c0 2.86-5.37 4.16-12.62 4.53-0.43 0.02-0.89 0.03-1.33 0.05-1.26-1.02-2.91-1.64-4.72-1.64-1.09 0-2.12 0.23-3.05 0.63-1.13-2.29-3.62-3.88-6.52-3.88-2.2 0-4.16 0.91-5.48 2.35-0.13-0.1-0.25-0.2-0.36-0.3-0.51-0.5-0.79-1.08-0.79-1.74 0-0.6 0.24-1.18 0.67-1.73 0.38 0.06 0.77 0.1 1.17 0.1 2.84 0 5.28-1.52 6.45-3.73 0.14-0.03 0.27-0.06 0.42-0.09 2.57-0.54 5.55-0.86 8.73-0.86 9.63-0.01 17.43 2.82 17.43 6.31z",
        fill: "none"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-99.35 10.58c0 3.64-5.54 6-10.32 6s-6.99-2.36-6.99-6 3.88-6.58 8.66-6.58 8.65 2.95 8.65 6.58z",
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m-112.1 12.74c0 3.08-3.86 4.35-8.57 4.35s-8.49-1.27-8.49-4.35 3.82-5.57 8.53-5.57 8.53 2.49 8.53 5.57z",
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      cx: -131.13,
      cy: 10.99,
      rx: 8.53,
      ry: 5.57,
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      cx: -174.63,
      cy: 2.4,
      rx: 8.53,
      ry: 5.57,
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m-89.68 4.72c1.55 3.29-0.92 6.07-5.24 8.11s-8.85 2.57-10.4-0.72 0.69-7.61 5.01-9.65 9.08-1.03 10.63 2.26z",
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9041 -.4274 .4274 .9041 -10.652 -37.118)",
      cx: -88,
      cy: 5.17,
      rx: 8.65,
      ry: 6.58,
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9041 -.4274 .4274 .9041 -8.6391 -34.651)",
      cx: -81.5,
      cy: 1.92,
      rx: 8.65,
      ry: 6.58,
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: -78.927,
        cy: -153.76,
        r: 80.859,
        gradientTransform: "matrix(.8427 -.5384 .5384 .8427 -19.51 53.817)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD1A3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC897",
        offset: 0.2468
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EEB179",
        offset: 0.6864
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E39E5F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-144.09-56.21c-33.08 1.54-51.4 31.38-40.68 45.67 7.91 10.54 21.16 17.12 34.14 18.32 25.27 2.34 53.46 2.58 74.16-14.55 3.19-2.64 5.92-6.01 7.14-9.97 2.16-6.99-1.28-14.35-5.67-19.74-15.89-19.53-39.3-21.11-69.09-19.73z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m-111.64-32.48c0.35 4.3-34.15 4.26-32.34-1.41 0.97-3.04 9.11-6.22 15.82-5.93 10.83 0.47 16.26 4.19 16.52 7.34z",
      fill: "#D69062",
      opacity: 0.51
    }),
    _react2.default.createElement("path", {
      d:
        "m-151.22-38.1c0.28 1.04 0.97 1.83 1.75 2.44 0.8 0.61 1.69 1.09 2.63 1.49 1.91 0.8 3.82 1.56 5.8 2.09 0.97 0.31 1.99 0.49 2.97 0.75 1 0.19 2 0.4 3.01 0.52 2.01 0.3 4.05 0.45 6.08 0.45 2.03 0.01 4.07-0.08 6.08-0.37 2.03-0.2 4.01-0.69 6.01-1.16 0.98-0.3 1.97-0.55 2.94-0.91 0.48-0.17 0.98-0.33 1.46-0.51l1.43-0.59c0.98-0.38 1.91-0.78 2.62-1.41 0.35-0.32 0.61-0.72 0.75-1.19 0.14-0.46 0.14-1-0.12-1.47 0.37 0.38 0.55 0.97 0.52 1.53-0.03 0.57-0.25 1.14-0.59 1.62-0.69 0.96-1.68 1.55-2.57 2.1-1.82 1.15-3.78 2.07-5.79 2.85-4.06 1.51-8.41 2.24-12.76 2.23-4.34-0.09-8.7-0.81-12.72-2.44-2.03-0.74-3.93-1.81-5.76-2.92-0.9-0.6-1.8-1.27-2.52-2.12-0.71-0.83-1.24-1.9-1.22-2.98z",
      fill: "#B77B54"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8427 -.5384 .5384 .8427 -7.365 -95.329)",
      cx: -166.82,
      cy: -35.06,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -135.4 -188.54)",
      cx: -165.57,
      cy: -23.99,
      rx: 1.74,
      ry: 0.77,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -130.84 -165.67)",
      cx: -151.42,
      cy: -14.92,
      rx: 1.74,
      ry: 0.77,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1233 -.9924 .9924 .1233 -115.74 -173.32)",
      cx: -155.97,
      cy: -21.15,
      rx: 0.82,
      ry: 1.84,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1233 -.9924 .9924 .1233 -127.06 -176.62)",
      cx: -163.5,
      cy: -16.39,
      rx: 0.82,
      ry: 1.84,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7217 -.6922 .6922 .7217 -28.154 -104.48)",
      cx: -144.02,
      cy: -17.23,
      rx: 0.74,
      ry: 1.66,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6376 -.7703 .7703 .6376 -34.779 -124.52)",
      cx: -149.74,
      cy: -25.29,
      rx: 0.81,
      ry: 1.83,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -108.93 -137.31)",
      cx: -125.74,
      cy: -12.11,
      rx: 1.74,
      ry: 0.77,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1233 -.9924 .9924 .1233 -92.32 -126.34)",
      cx: -117.67,
      cy: -10.92,
      rx: 0.82,
      ry: 1.84,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6376 -.7703 .7703 .6376 -29.495 -89.535)",
      cx: -109.92,
      cy: -13.42,
      rx: 0.81,
      ry: 1.83,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6376 -.7703 .7703 .6376 -24.172 -81.22)",
      cx: -98.42,
      cy: -14.92,
      rx: 0.81,
      ry: 1.83,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1101 -.9939 .9939 .1101 -103.84 -164.38)",
      cx: -143.72,
      cy: -24.2,
      rx: 1.83,
      ry: 0.81,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.999 -.0449 .0449 .999 1.2054 -6.8708)",
      cx: -152.28,
      cy: -30.26,
      rx: 1.83,
      ry: 0.81,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.999 -.0449 .0449 .999 1.1149 -7.7175)",
      cx: -171.17,
      cy: -28.67,
      rx: 1.83,
      ry: 0.81,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -123.82 -190.7)",
      cx: -160.9,
      cy: -31.08,
      rx: 1.94,
      ry: 0.86,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -108.37 -199.27)",
      cx: -157.62,
      cy: -43.38,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.5357 -.8444 .8444 .5357 -30.629 -138.87)",
      cx: -141.59,
      cy: -41.59,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3221 -.9467 .9467 .3221 -61.54 -167.04)",
      cx: -147.41,
      cy: -40.54,
      rx: 1.46,
      ry: 0.65,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.999 -.0449 .0449 .999 1.8744 -5.3959)",
      cx: -119.13,
      cy: -44.41,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3962 -.9182 .9182 .3962 -24.773 -122.15)",
      cx: -105.27,
      cy: -42.24,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3962 -.9182 .9182 .3962 -19.28 -108.75)",
      cx: -92.33,
      cy: -39.72,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9322 -.362 .362 .9322 2.6164 -41.01)",
      cx: -108.13,
      cy: -27.49,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.2152 -.9766 .9766 .2152 -49.926 -121.41)",
      cx: -100.5,
      cy: -29.64,
      rx: 1.93,
      ry: 0.86,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3889 -.9213 .9213 .3889 -30.392 -117.06)",
      cx: -103.43,
      cy: -35.62,
      rx: 0.86,
      ry: 1.93,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9767 -.2144 .2144 .9767 4.5896 -29.334)",
      cx: -132.92,
      cy: -35.82,
      rx: 0.71,
      ry: 1.6,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9767 -.2144 .2144 .9767 6.3322 -29.264)",
      cx: -131.72,
      cy: -43.82,
      rx: 0.71,
      ry: 1.6,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9767 -.2144 .2144 .9767 5.7252 -25.06)",
      cx: -112.65,
      cy: -38.92,
      rx: 0.77,
      ry: 1.73,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6889 -.7248 .7248 .6889 -13.221 -104.06)",
      cx: -127.84,
      cy: -36.63,
      rx: 1.73,
      ry: 0.77,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9997 -.0254 .0254 .9997 .8344 -3.1063)",
      cx: -121.86,
      cy: -34.4,
      rx: 1.73,
      ry: 0.77,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7331 -.6801 .6801 .7331 -24.93 -95.839)",
      cx: -134.57,
      cy: -16.16,
      rx: 1.55,
      ry: 0.69,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0634 -.998 .998 .0634 -102.78 -156.83)",
      cx: -134.95,
      cy: -23.66,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -95.943 -142.2)",
      cx: -121.79,
      cy: -21.3,
      rx: 1.44,
      ry: 0.64,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.4917 -.8708 .8708 .4917 -44.119 -122.95)",
      cx: -127.37,
      cy: -23.69,
      rx: 0.64,
      ry: 1.44,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.402 -.9156 .9156 .402 -45.432 -115.05)",
      cx: -110.8,
      cy: -22.74,
      rx: 0.66,
      ry: 1.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.402 -.9156 .9156 .402 -31.714 -94.585)",
      cx: -88.27,
      cy: -23.01,
      rx: 0.66,
      ry: 1.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.2152 -.9766 .9766 .2152 -69.208 -133.34)",
      cx: -117.56,
      cy: -23.61,
      rx: 0.66,
      ry: 1.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0871 -.9962 .9962 .0871 -68.769 -115.67)",
      cx: -97.49,
      cy: -20.31,
      rx: 0.71,
      ry: 1.61,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0871 -.9962 .9962 .0871 -55.016 -124.65)",
      cx: -95.52,
      cy: -32.31,
      rx: 0.71,
      ry: 1.61,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3928 -.9196 .9196 .3928 -48.223 -106.37)",
      cx: -104.67,
      cy: -16.67,
      rx: 1.07,
      ry: 0.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9055 -.4244 .4244 .9055 4.3816 -40.716)",
      cx: -89.21,
      cy: -30.19,
      rx: 0.86,
      ry: 1.93,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9055 -.4244 .4244 .9055 1.7556 -42.451)",
      cx: -94.42,
      cy: -25.17,
      rx: 0.86,
      ry: 1.93,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7684 -.64 .64 .7684 -16.44 -78.725)",
      cx: -116.99,
      cy: -16.65,
      rx: 1.52,
      ry: 0.67,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      cx: -182.17,
      cy: 1.08,
      rx: 4.5,
      ry: 4.75,
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m-68.67-2.92c0 2.62-0.76 6-3.25 6s-4.5-2.13-4.5-4.75 2.01-4.75 4.5-4.75 3.25 0.88 3.25 3.5z",
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-83.99 88.83c22.71 0 36.91 4.07 47.46 13.61 0.17 0.16 0.36 0.29 0.56 0.4 0.12 0.18 0.27 0.36 0.43 0.52 1.46 1.4 2.85 2.91 4.13 4.47 2.26 2.78 7.29 9.99 5.13 16.97-0.39 1.26-1.01 2.53-1.84 3.79-0.49 0.74-0.63 1.67-0.37 2.52s0.88 1.55 1.7 1.9c1.88 0.8 3.04 2.38 3.04 4.12 0 0.62-0.15 1.23-0.46 1.82-0.26 0.5-0.37 1.07-0.32 1.63 0.01 0.08 0.02 0.15 0.03 0.26-0.02 0.46-0.19 0.88-0.49 1.2-0.46 0.49-0.74 1.13-0.79 1.8-0.11 1.32-1.11 2.79-2.62 3.83-0.54 0.37-0.94 0.9-1.15 1.52-3.2 9.57-14.03 25.62-50.61 25.62-7.88 0-16.62-0.77-25.97-2.3-18.19-2.97-24.78-13.51-27.12-21.83-0.23-0.81-0.79-1.49-1.54-1.87-0.97-0.49-1.64-1.15-1.69-1.67 0-0.04 0.01-0.07 0.01-0.11 0.06-0.83-0.22-1.64-0.78-2.25-0.3-0.32-0.47-0.75-0.48-1.21l0.01-0.05c0.01-0.07 0.02-0.15 0.03-0.22 0.11-1.05-0.34-2.08-1.18-2.71-1.18-0.88-1.85-2.14-1.85-3.45 0-1.41 0.77-2.73 2.11-3.63 0.8-0.53 1.3-1.41 1.34-2.37 0.01-0.21 0.04-0.41 0.09-0.6 0.18-0.71 0.09-1.46-0.25-2.1-2.48-4.8-1.68-11.62 2.14-18.24 5.52-9.56 18.21-20.09 37.29-20.98 5.42-0.27 9.89-0.39 14.01-0.39m50.05 14.33m-50.05-17.33c-4.55 0-9.28 0.15-14.18 0.38-31.56 1.47-49.67 28.69-41.95 43.59-0.1 0.39-0.15 0.79-0.17 1.2-2.09 1.39-3.45 3.61-3.45 6.12 0 2.35 1.19 4.45 3.05 5.85-0.02 0.18-0.05 0.35-0.05 0.53 0 1.29 0.49 2.45 1.28 3.3-0.01 0.09-0.02 0.18-0.02 0.27 0 1.8 1.32 3.4 3.35 4.42 2.4 8.57 9.38 20.69 29.52 23.98 9.9 1.62 18.68 2.34 26.46 2.34 34.11 0 48.86-13.93 53.46-27.67 2.3-1.58 3.74-3.85 3.92-6.06 0.8-0.86 1.29-2.03 1.29-3.32 0-0.15-0.03-0.28-0.04-0.43 0.5-0.97 0.79-2.05 0.79-3.2 0-3.04-1.99-5.66-4.86-6.88 0.94-1.42 1.7-2.93 2.2-4.56 2.16-6.99-1.28-14.35-5.67-19.74-1.4-1.72-2.86-3.29-4.38-4.75 0.2-0.26 0.27-0.52 0.18-0.72-0.1-0.21-0.37-0.31-0.74-0.31-0.15 0-0.32 0.02-0.5 0.05-12.75-11.51-29.38-14.39-49.49-14.39z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.67 69.3c0 4.21-3.81 7.62-8.5 7.62s-7.84-6.11-7.84-10.32 1.31-7.67 6-7.67 10.34 6.16 10.34 10.37z",
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m124.67 67.26c0 4.21-2.81 9.67-7.5 9.67s-13-3.29-13-7.5 4.47-10.83 9.17-10.83 11.33 4.45 11.33 8.66z",
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 63.44,
        x2: 63.44,
        y1: 51.294,
        y2: 71.834,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5BE87",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EBB27B",
        offset: 0.3043
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D0945D",
        offset: 0.8466
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C78A53",
        offset: 0.9979
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.59 60.48s8.33-7.47 25.84-8.11 19.86 4.06 19.86 4.06v10.46s-28.61-5.18-42.07 8.11l-3.63-14.52z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.86 43.39s-4.2-0.35-9.25-0.5c-1.84-1.92-5.18-3.21-9-3.21-4.77 0-8.79 2-10.09 4.74-0.49 0.1-0.97 0.2-1.44 0.3-0.57 0.12-1.13 0.25-1.68 0.38-0.88-0.54-1.93-0.85-3.07-0.85-2.43 0-4.48 1.45-5.25 3.46l-0.81 0.33c-0.51-0.15-1.04-0.25-1.6-0.25-2.32 0-4.27 1.4-4.97 3.33-0.53 0.28-1.06 0.57-1.61 0.88-2.19 0.29-4.06 1.51-5.11 3.22-0.78 0.56-1.55 1.14-2.28 1.74-3.68 0.2-6.61 3.01-6.61 6.47 0 0.64 0.1 1.26 0.29 1.85-0.29 0.99-0.41 2.01-0.32 3.04 0.28 3.19 1.04 7.36 3.51 11.61 0.03 0.01 0.06 0.02 0.09 0.02 1.22 1.36 6.3 3.46 10.07 4.82 1.36 2.3 4.36 3.89 7.86 3.89 1.4 0 2.71-0.26 3.88-0.71 1.53 1.85 4.22 3.07 7.28 3.07 2 0 3.84-0.53 5.31-1.41 0.28 0.03 0.55 0.08 0.83 0.11 1.19 0.81 2.66 1.3 4.25 1.3 0.64 0 1.26-0.09 1.86-0.23 1.26 1.91 3.53 3.18 6.12 3.18 2.44 0 4.59-1.13 5.89-2.85 0.18 0.01 0.36 0.01 0.54 0.01 1.26 1.03 2.92 1.66 4.73 1.66 1.77 0 3.39-0.59 4.64-1.58 3.3-0.06 6.52-0.21 9.67-0.45 1.38 0.72 3.04 1.14 4.84 1.14 2.75 0 5.2-0.99 6.78-2.53 10.98-1.87 19.9-5.21 24.71-10.31 13.91-14.72-10.29-33.56-50.06-35.67zm12.7 22.28c0 2.86-5.37 4.16-12.62 4.53-0.43 0.02-0.89 0.03-1.33 0.05-1.26-1.02-2.91-1.64-4.72-1.64-1.09 0-2.12 0.23-3.05 0.63-1.13-2.29-3.62-3.88-6.52-3.88-2.2 0-4.16 0.91-5.48 2.35-0.13-0.1-0.25-0.2-0.36-0.3-0.51-0.5-0.79-1.08-0.79-1.74 0-0.6 0.24-1.18 0.67-1.73 0.38 0.06 0.77 0.1 1.17 0.1 2.84 0 5.28-1.52 6.45-3.73 0.14-0.03 0.27-0.06 0.42-0.09 2.57-0.54 5.55-0.86 8.73-0.86 9.62-0.01 17.43 2.82 17.43 6.31z",
      fill: "#FFFFE7"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 65.195,
        x2: 65.195,
        y1: 84.168,
        y2: 109.04,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5BE87",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECB37B",
        offset: 0.3194
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D4965D",
        offset: 0.8888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CF9056",
        offset: 0.9995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m9.04 74.76c-0.03-0.01-1.33 27.65 30.75 32.89 62.78 10.25 80.72-15.38 81.57-34.17-30.27 16.03-107.27 3.45-112.32 1.28z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.18 42.28s-4.2-0.34-9.25-0.48c-1.84-1.87-5.18-3.12-8.99-3.12-4.77 0-8.79 1.94-10.08 4.61-0.49 0.1-0.97 0.19-1.44 0.29-0.57 0.12-1.13 0.25-1.68 0.37-0.88-0.52-1.93-0.83-3.06-0.83-2.43 0-4.48 1.41-5.24 3.36-0.27 0.1-0.54 0.21-0.81 0.32-0.51-0.15-1.03-0.25-1.59-0.25-2.32 0-4.26 1.36-4.96 3.23-0.53 0.27-1.06 0.55-1.6 0.85-2.19 0.28-4.06 1.47-5.11 3.13-0.78 0.54-1.55 1.11-2.28 1.69-3.68 0.19-6.61 2.93-6.61 6.29 0 0.62 0.1 1.22 0.29 1.79-0.29 0.97-0.4 1.95-0.32 2.95 0.28 3.1 1.04 7.15 3.5 11.28 0.03 0.01 0.06 0.02 0.09 0.02 1.22 1.32 4.11 3.56 7.88 4.87 1.36 2.23 6.55 3.59 10.04 3.59 1.4 0 2.71-0.25 3.88-0.69 1.53 1.79 4.22 2.99 7.28 2.99 2 0 3.84-0.51 5.31-1.37 0.28 0.03 0.55 0.07 0.83 0.11 1.19 0.79 2.66 1.26 4.25 1.26 0.64 0 1.26-0.08 1.85-0.23 1.26 1.85 2.38 0.59 4.98 0.59 2.44 0 5.73 1.4 7.02-0.27 0.18 0.01 0.36 0.01 0.54 0.01 1.26 1 2.92 1.61 4.73 1.61 1.77 0 3.38-0.58 4.63-1.53 3.29-0.05 6.52-0.2 9.66-0.43 1.38 0.7 3.04 1.1 4.83 1.1 2.75 0 5.19-0.96 6.77-2.46 10.97-1.82 19.88-5.07 24.69-10.02 13.9-14.28-10.29-32.59-50.03-34.63z",
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m81.56 65.67c0 2.86-5.37 4.16-12.62 4.53-0.43 0.02-0.89 0.03-1.33 0.05-1.26-1.02-2.91-1.64-4.72-1.64-1.09 0-2.12 0.23-3.05 0.63-1.13-2.29-3.62-3.88-6.52-3.88-2.2 0-4.16 0.91-5.48 2.35-0.13-0.1-0.25-0.2-0.36-0.3-0.51-0.5-0.79-1.08-0.79-1.74 0-0.6 0.24-1.18 0.67-1.73 0.38 0.06 0.77 0.1 1.17 0.1 2.84 0 5.28-1.52 6.45-3.73 0.14-0.03 0.27-0.06 0.42-0.09 2.57-0.54 5.55-0.86 8.73-0.86 9.62-0.01 17.43 2.82 17.43 6.31z",
        fill: "none"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.99 85.18c0 3.64-5.54 6-10.32 6s-6.99-2.36-6.99-6 3.87-6.58 8.65-6.58 8.66 2.94 8.66 6.58z",
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.24 87.33c0 3.08-3.86 4.35-8.57 4.35s-8.49-1.27-8.49-4.35 3.82-5.57 8.53-5.57 8.53 2.5 8.53 5.57z",
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      cx: 17.7,
      cy: 77,
      rx: 8.53,
      ry: 5.57,
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m102.65 79.31c1.55 3.29-0.92 6.07-5.24 8.11s-8.85 2.57-10.4-0.72 0.69-7.61 5.01-9.65c4.32-2.03 9.08-1.02 10.63 2.26z",
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9041 -.4274 .4274 .9041 -24.082 52.248)",
      cx: 104.33,
      cy: 79.76,
      rx: 8.65,
      ry: 6.58,
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9041 -.4274 .4274 .9041 -22.069 54.714)",
      cx: 110.83,
      cy: 76.51,
      rx: 8.65,
      ry: 6.58,
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 42.989,
        cy: 12.648,
        r: 80.859,
        gradientTransform: "matrix(.8427 -.5384 .5384 .8427 -19.51 53.817)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD1A3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC897",
        offset: 0.2468
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EEB179",
        offset: 0.6864
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E39E5F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M48.24,18.39C15.17,19.93-3.16,49.77,7.56,64.05C15.48,74.6,28.72,81.17,41.7,82.38 c25.27,2.34,53.46,2.58,74.16-14.55c3.19-2.64,5.92-6.01,7.14-9.97c2.16-6.99-1.28-14.35-5.67-19.74 C101.44,18.59,78.04,17,48.24,18.39z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.7 42.11c0.35 4.3-34.15 4.26-32.34-1.41 0.97-3.04 9.11-6.22 15.82-5.93 10.82 0.47 16.26 4.19 16.52 7.34z",
      fill: "#D69062",
      opacity: 0.51
    }),
    _react2.default.createElement("path", {
      d:
        "m41.11 36.5c0.28 1.04 0.97 1.83 1.75 2.44 0.8 0.61 1.69 1.09 2.63 1.49 1.91 0.8 3.82 1.56 5.8 2.09 0.97 0.31 1.99 0.48 2.97 0.75 1 0.19 2 0.4 3.01 0.52 2.01 0.3 4.05 0.45 6.08 0.45 2.03 0.01 4.07-0.08 6.08-0.37 2.03-0.2 4.01-0.69 6-1.16 0.98-0.3 1.97-0.55 2.94-0.91 0.48-0.17 0.98-0.33 1.46-0.51l1.43-0.59c0.98-0.38 1.91-0.78 2.62-1.41 0.35-0.32 0.61-0.72 0.75-1.19 0.14-0.46 0.14-1-0.12-1.47 0.37 0.38 0.55 0.97 0.52 1.53-0.03 0.57-0.25 1.14-0.59 1.62-0.69 0.96-1.68 1.55-2.57 2.1-1.82 1.15-3.78 2.07-5.79 2.85-4.06 1.51-8.41 2.24-12.76 2.23-4.34-0.09-8.7-0.81-12.72-2.44-2.03-0.74-3.93-1.81-5.76-2.92-0.9-0.6-1.8-1.27-2.52-2.12-0.7-0.83-1.22-1.91-1.21-2.98z",
      fill: "#B77B54"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8427 -.5384 .5384 .8427 -17.271 19.957)",
      cx: 25.52,
      cy: 39.53,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -24.813 75.459)",
      cx: 26.76,
      cy: 50.61,
      rx: 1.74,
      ry: 0.77,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -20.253 98.331)",
      cx: 40.92,
      cy: 59.68,
      rx: 1.74,
      ry: 0.77,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1233 -.9924 .9924 .1233 -21.154 82.936)",
      cx: 36.36,
      cy: 53.44,
      rx: 0.82,
      ry: 1.84,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1233 -.9924 .9924 .1233 -32.478 79.638)",
      cx: 28.84,
      cy: 58.2,
      rx: 0.82,
      ry: 1.84,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7217 -.6922 .6922 .7217 -26.265 49.406)",
      cx: 48.31,
      cy: 57.37,
      rx: 0.74,
      ry: 1.66,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6376 -.7703 .7703 .6376 -22.548 50.676)",
      cx: 42.59,
      cy: 49.3,
      rx: 0.81,
      ry: 1.83,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 1.6542 126.69)",
      cx: 66.59,
      cy: 62.48,
      rx: 1.74,
      ry: 0.77,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1233 -.9924 .9924 .1233 2.2645 129.92)",
      cx: 74.67,
      cy: 63.68,
      rx: 0.82,
      ry: 1.84,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6376 -.7703 .7703 .6376 -17.263 85.658)",
      cx: 82.42,
      cy: 61.18,
      rx: 0.81,
      ry: 1.83,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6376 -.7703 .7703 .6376 -11.941 93.973)",
      cx: 93.92,
      cy: 59.68,
      rx: 0.81,
      ry: 1.83,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1101 -.9939 .9939 .1101 -6.8348 93.164)",
      cx: 48.61,
      cy: 50.4,
      rx: 1.83,
      ry: 0.81,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.999 -.0449 .0449 .999 -1.9512 1.8438)",
      cx: 40.05,
      cy: 44.34,
      rx: 1.83,
      ry: 0.81,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.999 -.0449 .0449 .999 -2.0417 .9971)",
      cx: 21.17,
      cy: 45.93,
      rx: 1.83,
      ry: 0.81,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 -13.233 73.296)",
      cx: 31.43,
      cy: 43.52,
      rx: 1.94,
      ry: 0.86,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 2.2141 64.732)",
      cx: 34.71,
      cy: 31.22,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.5357 -.8444 .8444 .5357 -4.3131 58.176)",
      cx: 50.74,
      cy: 33.01,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3221 -.9467 .9467 .3221 -1.7847 65.609)",
      cx: 44.92,
      cy: 34.05,
      rx: 1.46,
      ry: 0.65,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.999 -.0449 .0449 .999 -1.2822 3.3187)",
      cx: 73.2,
      cy: 30.19,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3962 -.9182 .9182 .3962 22.863 99.476)",
      cx: 87.07,
      cy: 32.35,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3962 -.9182 .9182 .3962 28.355 112.88)",
      cx: 100.01,
      cy: 34.88,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9322 -.362 .362 .9322 -11.343 33.679)",
      cx: 84.2,
      cy: 47.11,
      rx: 2.33,
      ry: 1.04,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.2152 -.9766 .9766 .2152 28.175 124.97)",
      cx: 91.84,
      cy: 44.95,
      rx: 1.93,
      ry: 0.86,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3889 -.9213 .9213 .3889 18.426 105.72)",
      cx: 88.9,
      cy: 38.97,
      rx: 0.86,
      ry: 1.93,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9767 -.2144 .2144 .9767 -6.932 13.642)",
      cx: 59.42,
      cy: 38.77,
      rx: 0.71,
      ry: 1.6,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9767 -.2144 .2144 .9767 -5.1894 13.713)",
      cx: 60.61,
      cy: 30.78,
      rx: 0.71,
      ry: 1.6,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9767 -.2144 .2144 .9767 -5.7964 17.917)",
      cx: 79.69,
      cy: 35.68,
      rx: 0.77,
      ry: 1.73,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.6889 -.7248 .7248 .6889 -7.4594 58.559)",
      cx: 64.49,
      cy: 37.97,
      rx: 1.73,
      ry: 0.77,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9997 -.0254 .0254 .9997 -.9983 1.8031)",
      cx: 70.48,
      cy: 40.2,
      rx: 1.73,
      ry: 0.77,
      fill: "#FFFEC2",
      opacity: 0.62
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7331 -.6801 .6801 .7331 -24.33 54.88)",
      cx: 57.76,
      cy: 58.44,
      rx: 1.55,
      ry: 0.69,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0634 -.998 .998 .0634 2.9067 104.98)",
      cx: 57.38,
      cy: 50.94,
      rx: 1.04,
      ry: 2.33,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0375 -.9993 .9993 .0375 14.643 121.8)",
      cx: 70.55,
      cy: 53.3,
      rx: 1.44,
      ry: 0.64,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.4917 -.8708 .8708 .4917 -11.307 82.45)",
      cx: 64.97,
      cy: 50.91,
      rx: 0.64,
      ry: 1.44,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.402 -.9156 .9156 .402 1.2753 105.66)",
      cx: 81.53,
      cy: 51.85,
      rx: 0.66,
      ry: 1.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.402 -.9156 .9156 .402 14.994 126.13)",
      cx: 104.06,
      cy: 51.58,
      rx: 0.66,
      ry: 1.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.2152 -.9766 .9766 .2152 8.8925 113.03)",
      cx: 74.77,
      cy: 50.98,
      rx: 0.66,
      ry: 1.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0871 -.9962 .9962 .0871 32.505 144.03)",
      cx: 94.84,
      cy: 54.28,
      rx: 0.71,
      ry: 1.61,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0871 -.9962 .9962 .0871 46.259 135.06)",
      cx: 96.82,
      cy: 42.29,
      rx: 0.71,
      ry: 1.61,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.3928 -.9196 .9196 .3928 -.044 115.79)",
      cx: 87.67,
      cy: 57.93,
      rx: 1.07,
      ry: 0.48,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9055 -.4244 .4244 .9055 -9.096 47.966)",
      cx: 103.12,
      cy: 44.4,
      rx: 0.86,
      ry: 1.93,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9055 -.4244 .4244 .9055 -11.722 46.23)",
      cx: 97.92,
      cy: 49.43,
      rx: 0.86,
      ry: 1.93,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7684 -.64 .64 .7684 -19.633 61.643)",
      cx: 75.35,
      cy: 57.95,
      rx: 1.52,
      ry: 0.67,
      fill: "#FFFEC2"
    }),
    _react2.default.createElement("ellipse", {
      cx: 10.17,
      cy: 75.68,
      rx: 4.5,
      ry: 4.75,
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m123.67 71.68c0 2.62-0.76 6-3.25 6s-4.5-2.13-4.5-4.75 2.01-4.75 4.5-4.75c2.48 0 3.25 0.88 3.25 3.5z",
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.5 -.866 .866 .5 -55.872 48.065)",
      cx: 13.69,
      cy: 72.42,
      rx: 3.27,
      ry: 6.5,
      fill: "#ffd"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.0479 -.9989 .9989 .0479 -57.949 94.041)",
      cx: 20.36,
      cy: 77.42,
      rx: 3.27,
      ry: 6.5,
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m117.75 69.39c0.66 1.68-1.52 4.11-4.87 5.41s-12.89 5.81-13.55 4.13 3.32-5.36 6.67-6.67c3.35-1.3 11.09-4.56 11.75-2.87z",
      fill: "#ffd"
    }),
    _react2.default.createElement("path", {
      d:
        "m123.5 66.74c0.66 1.68-1.52 4.11-4.87 5.41-3.35 1.31-6.59 1-7.25-0.68s-0.64-3.55 2.7-4.86c3.35-1.3 8.77-1.55 9.42 0.13z",
      fill: "#ffd"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m62.46 21.01c26.34 0 41.57 5.5 52.55 19 2.26 2.78 7.29 9.99 5.13 16.97-0.32 1.05-0.82 2.13-1.47 3.2-0.78 1.29-0.48 2.96 0.7 3.9 1.59 1.26 2.29 2.51 2.29 3.19 0 1.08-0.27 2.29-0.75 3.4-0.16 0.37-0.24 0.76-0.25 1.16-0.02 1.59-0.37 2.59-0.58 2.92-1.1 0.31-1.94 1.22-2.14 2.36-0.98 5.55-4.01 13.51-12.88 19.92-9.14 6.61-22.2 9.96-38.82 9.96-7.88 0-16.62-0.77-25.97-2.3-9.33-1.52-16.52-5.19-21.38-10.89-4.13-4.85-5.78-10.27-6.43-13.96-0.22-1.26-1.23-2.25-2.5-2.44-0.74-0.12-1.31-0.85-1.31-1.72 0-0.21 0.04-0.43 0.13-0.66 0.35-0.97 0.18-2.04-0.46-2.86-1.2-1.54-2-3.78-2-5.56 0-2.08 0.39-3.56 1.09-4.15 0.95-0.81 1.31-2.12 0.88-3.3-1.87-5.2-0.38-12.19 3.97-18.69 7.52-11.23 21.01-18.36 36.1-19.06 5.5-0.27 9.97-0.39 14.1-0.39m0-3c-4.56 0-9.3 0.15-14.21 0.38-30.31 1.41-48.22 26.57-42.76 41.76-1.61 1.37-2.15 3.75-2.15 6.44 0 2.34 0.97 5.26 2.64 7.41-0.19 0.52-0.3 1.08-0.3 1.68 0 2.39 1.67 4.34 3.85 4.68 1.48 8.36 7.36 23.55 30.28 27.29 9.9 1.62 18.68 2.34 26.46 2.34 38.01 0 51.99-17.29 54.65-32.36 2.05-0.4 2.73-3.35 2.76-5.77 0.65-1.49 1-3.12 1-4.6 0-1.95-1.43-3.95-3.43-5.54 0.73-1.22 1.34-2.5 1.76-3.87 2.16-6.99-1.28-14.35-5.67-19.74-13.28-16.3-31.79-20.1-54.88-20.1z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Bagel;
