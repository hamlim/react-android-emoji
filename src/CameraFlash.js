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

function CameraFlash(props) {
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
        id: "h",
        x1: 24.003,
        x2: 24.003,
        y1: 31.375,
        y2: 39.126,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B8B8B8",
        offset: 0.2106
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A8A8A8",
        offset: 0.4759
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8E8E8E",
        offset: 0.7694
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M38.9,43H9.1c-0.98,0-1.77-0.79-1.77-1.77v-8.46C7.34,31.79,8.13,31,9.1,31h29.8 c0.98,0,1.77,0.79,1.77,1.77v8.46C40.67,42.21,39.88,43,38.9,43z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37.67 34v6h-27.33v-6h27.33m1.23-3h-29.8c-0.98 0-1.77 0.79-1.77 1.77v8.46c0.01 0.98 0.8 1.77 1.77 1.77h29.8c0.98 0 1.77-0.79 1.77-1.77v-8.46c0-0.98-0.79-1.77-1.77-1.77z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 76.833,
        cy: 63,
        r: 71.176,
        gradientTransform:
          "matrix(-.002576 1 -1.1098 -.0028594 146.95 -13.653)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4.01,
      y: 51,
      width: 119.99,
      height: 68,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m120.99 54v62h-113.98v-62h113.98m3-3h-119.98v68h119.99v-68h-0.01z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d: "m120 124h-112c-2.21 0-4-1.79-4-4v-4h119.99v4c0 2.21-1.79 4-3.99 4z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m120 28h-72c-2.21 0-4 1.79-4 4v5c0 1.1-0.9 2-2 2h-34c-2.21 0-4 1.79-4 4v12h119.99v-23c0-2.21-1.79-4-3.99-4z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m70.37 39c0.9 0 1.63 0.73 1.63 1.63v4.73c0 0.9-0.73 1.63-1.63 1.63h-16.74c-0.9 0-1.63-0.73-1.63-1.63v-4.73c0-0.9 0.73-1.63 1.63-1.63h16.74m0-2h-16.74c-2 0-3.63 1.63-3.63 3.63v4.73c0 2 1.63 3.63 3.63 3.63h16.73c2 0 3.63-1.63 3.63-3.63v-4.73c0.01-2-1.62-3.63-3.62-3.63z",
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
          "m113.2 36.2c0.99 0 1.8 0.81 1.8 1.8v7.2c0 0.99-0.81 1.8-1.8 1.8h-14.4c-0.99 0-1.8-0.81-1.8-1.8v-7.2c0-0.99 0.81-1.8 1.8-1.8h14.4m0-2h-14.4c-2.1 0-3.8 1.7-3.8 3.8v7.2c0 2.1 1.7 3.8 3.8 3.8h14.4c2.1 0 3.8-1.7 3.8-3.8v-7.2c0-2.1-1.71-3.8-3.8-3.8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M120.99,116l0,4c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1l0-4h-3v4c0,2.21,1.79,4,4,4H120 c2.21,0,4-1.79,4-4v-4H120.99z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m119.98 28.01h-71.99c-2.21 0-4 1.79-4 4v5c0 1.1-0.9 2-2 2h-34c-2.21 0-4 1.79-4 4v12l3.01-0.01-0.01-11.99c0-0.55 0.45-1 1-1h34c2.76 0 5-2.24 5-5v-5c0-0.55 0.45-1 1-1h71.99c0.55 0 1 0.45 1 1v22.99l3 0.01-0.01-23c0.01-2.21-1.78-4-3.99-4z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 106,
        cy: 41.6,
        r: 12.253,
        gradientTransform: "matrix(.9999 0 0 1 .0054893 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.2 47h-14.4c-0.99 0-1.8-0.81-1.8-1.8v-7.2c0-0.99 0.81-1.8 1.8-1.8h14.4c0.99 0 1.8 0.81 1.8 1.8v7.2c0 0.99-0.81 1.8-1.8 1.8z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "M70.37,47H53.63c-0.9,0-1.63-0.73-1.63-1.63v-4.73c0-0.9,0.73-1.63,1.63-1.63h16.73 c0.9,0,1.63,0.73,1.63,1.63v4.73C72,46.27,71.27,47,70.37,47z",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d:
        "m82 47c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2s2 0.9 2 2v4c0 1.1-0.9 2-2 2z",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d: "m82 42c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d: "m82 46c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#F5F5F5"
      },
      _react2.default.createElement("rect", {
        x: 53.5,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 55.54,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 57.58,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 59.62,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 61.66,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 63.7,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 65.73,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 67.77,
        y: 39,
        width: 1,
        height: 8
      }),
      _react2.default.createElement("rect", {
        x: 69.81,
        y: 39,
        width: 1,
        height: 8
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m44.5 59c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z",
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
          "m82 39c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2s-2-0.9-2-2v-4c0-1.1 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4s4-1.79 4-4v-4c0-2.21-1.8-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 44.5,
      cy: 62,
      r: 3,
      fill: "#E0E0E0"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m31 51c1.1 0 2 0.9 2 2v4.42c1.76 0.77 3 2.53 3 4.58 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.05 1.24-3.81 3-4.58v-4.42c0-1.1 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4v3.26c-1.86 1.29-3 3.43-3 5.74 0 3.86 3.14 7 7 7s7-3.14 7-7c0-2.31-1.14-4.45-3-5.74v-3.26c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 78,
      cy: 85,
      rx: 32,
      ry: 32,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 77.999,
        x2: 77.999,
        y1: 58.872,
        y2: 110.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 78,
      cy: 85,
      rx: 26,
      ry: 26,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 77.875,
        cy: 61.625,
        r: 46.878,
        gradientTransform: "matrix(.9999 0 0 1 .0054893 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 78,
      cy: 85,
      rx: 23,
      ry: 23,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 77.875,
        cy: 85,
        r: 10,
        gradientTransform: "matrix(.9999 0 0 1 .0054893 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6A6A6A",
        offset: 0.2031
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4D4D4D",
        offset: 0.5578
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 78,
      cy: 85,
      r: 10,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78 75c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10m0-3c-7.17 0-13 5.83-13 13s5.83 13 13 13 13-5.83 13-13-5.83-13-13-13z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 31.03,
        x2: 31.03,
        y1: 51.094,
        y2: 59.187,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.03 63c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2s2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("circle", {
      cx: 31.03,
      cy: 62,
      r: 5,
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d:
        "m31.03 65.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m31.03 59c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("path", {
      d:
        "m31.07 56.23h-0.07c-0.53 0-0.96-0.43-0.96-0.96v-2.07c0-0.53 0.43-0.96 0.96-0.96h0.07c0.53 0 0.96 0.43 0.96 0.96v2.07c0 0.53-0.43 0.96-0.96 0.96z",
      fill: "#F44336"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78 77c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 73.49,
        cy: 29.25,
        r: 32.076,
        gradientTransform: "matrix(.9999 0 0 1 .0054893 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0.5083
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF100",
        offset: 0.7622
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEA00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m75.17 4.21-4.57 14.53c-0.07 0.22-0.36 0.28-0.51 0.11l-9.25-10.63c-0.21-0.24-0.6-0.03-0.52 0.27l2.63 10.03c0.06 0.25-0.18 0.46-0.41 0.35-3.51-1.69-18.75-7.65-18.54-6.87s9.88 10.03 12.45 12.47c0.18 0.17 0.08 0.48-0.17 0.51l-14.94 2.09c-0.32 0.04-0.35 0.49-0.05 0.58l16.04 4.91c0.25 0.08 0.3 0.41 0.07 0.54-3.06 1.77-16.96 9.81-16.4 9.81 0.58 0 18.56-0.74 21.35-0.85 0.19-0.01 0.33 0.16 0.31 0.35l-2.48 15.65c-0.05 0.31 0.35 0.48 0.54 0.23l11.02-14.69c0.12-0.17 0.37-0.16 0.49 0.01l7.32 10.99c0.15 0.23 0.51 0.15 0.55-0.13l1.43-10.67c0.03-0.23 0.31-0.34 0.49-0.19l10.64 8.96c0.21 0.18 0.53 0 0.49-0.27l-1.09-8.53c-0.03-0.23 0.2-0.41 0.42-0.31l19.1 8.51c0.32 0.14 0.58-0.3 0.3-0.51l-14.29-13.74c-0.18-0.14-0.14-0.43 0.07-0.51l13.5-5.61c0.27-0.11 0.24-0.5-0.04-0.57l-14.6-3.65c-0.23-0.06-0.3-0.34-0.14-0.5l10.73-10.73c0.22-0.22-0.01-0.6-0.31-0.5l-16.05 5.35c-0.26 0.09-0.49-0.19-0.36-0.43l8.87-15.61c0.16-0.29-0.19-0.59-0.45-0.38l-18.45 14.4c-0.17 0.13-0.42 0.05-0.47-0.15l-4.13-14.6c-0.1-0.3-0.5-0.3-0.59-0.02z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.8
      },
      _react2.default.createElement("path", {
        d:
          "m75.32 13.73 1.67 5.91c0.4 1.41 1.71 2.4 3.18 2.4 0.73 0 1.45-0.25 2.03-0.7l7.72-6.03-2.14 3.78c-0.58 1.02-0.57 2.28 0.02 3.29s1.68 1.64 2.85 1.64c0.36 0 0.71-0.06 1.05-0.17l5.2-1.73-2.64 2.64c-0.84 0.84-1.16 2.07-0.85 3.21 0.32 1.14 1.23 2.03 2.38 2.32l6.68 1.67-5.96 2.47c-1.08 0.45-1.85 1.45-2 2.6-0.15 1.08 0.25 2.16 1.05 2.89l3.14 3.02-5.03-2.24c-0.41-0.18-0.85-0.27-1.3-0.27-0.95 0-1.85 0.41-2.48 1.12s-0.92 1.66-0.8 2.6l0.21 1.66-5.34-4.5c-0.59-0.5-1.35-0.78-2.12-0.78-1.65 0-3.05 1.23-3.27 2.86l-0.48 3.57-3.35-5.03c-0.61-0.92-1.64-1.47-2.75-1.47-1.03 0-2.02 0.49-2.64 1.32l-4.49 5.99 0.78-4.91c0.15-0.96-0.12-1.93-0.75-2.66s-1.54-1.15-2.51-1.15h-0.07-0.06c-3.35 0.14-6.75 0.28-9.81 0.4 1.96-1.15 4.15-2.42 6.48-3.76 1.14-0.66 1.77-1.92 1.63-3.22-0.15-1.31-1.06-2.4-2.32-2.79l-4.38-1.34 2.86-0.4c1.25-0.17 2.3-1.06 2.69-2.26 0.39-1.22 0.06-2.52-0.87-3.4-1.14-1.08-2.32-2.21-3.48-3.33 2.65 1.05 5.03 2.05 6.21 2.61 0.44 0.21 0.94 0.33 1.43 0.33 1.01 0 1.99-0.48 2.61-1.28 0.44-0.57 0.67-1.24 0.69-1.93l1.86 2.13c0.63 0.72 1.53 1.14 2.49 1.14 1.45 0 2.71-0.93 3.15-2.31l1.83-5.91m0.13-9.73c-0.12 0-0.24 0.07-0.29 0.21l-4.57 14.53c-0.04 0.13-0.16 0.21-0.29 0.21-0.08 0-0.16-0.03-0.23-0.1l-9.23-10.63c-0.06-0.07-0.14-0.1-0.22-0.1-0.18 0-0.35 0.16-0.29 0.38l2.63 10.03c0.05 0.2-0.1 0.38-0.29 0.38-0.04 0-0.09-0.01-0.13-0.03-3.29-1.58-16.93-6.94-18.41-6.94-0.1 0-0.14 0.02-0.13 0.07 0.21 0.78 9.88 10.03 12.45 12.47 0.18 0.17 0.08 0.48-0.17 0.51l-14.94 2.09c-0.32 0.04-0.35 0.49-0.05 0.58l16.04 4.91c0.25 0.08 0.3 0.41 0.07 0.54-3.06 1.77-16.96 9.81-16.4 9.81 0.58 0 18.56-0.74 21.35-0.85h0.01c0.18 0 0.32 0.16 0.29 0.35l-2.48 15.65c-0.03 0.2 0.13 0.35 0.3 0.35 0.09 0 0.17-0.04 0.24-0.12l11.02-14.69c0.06-0.08 0.15-0.12 0.24-0.12 0.1 0 0.19 0.04 0.25 0.13l7.32 10.99c0.06 0.09 0.15 0.13 0.25 0.13 0.14 0 0.28-0.1 0.3-0.26l1.43-10.67c0.02-0.16 0.16-0.26 0.3-0.26 0.07 0 0.13 0.02 0.19 0.07l10.64 8.96c0.06 0.05 0.13 0.07 0.19 0.07 0.17 0 0.32-0.14 0.3-0.34l-1.09-8.53c-0.02-0.19 0.13-0.34 0.3-0.34 0.04 0 0.08 0.01 0.12 0.02l19.1 8.51c0.04 0.02 0.08 0.03 0.12 0.03 0.26 0 0.42-0.35 0.18-0.54l-14.28-13.74c-0.18-0.14-0.14-0.43 0.07-0.51l13.5-5.61c0.27-0.11 0.24-0.5-0.04-0.57l-14.6-3.65c-0.23-0.06-0.3-0.34-0.14-0.5l10.73-10.73c0.2-0.2 0.04-0.51-0.21-0.51-0.03 0-0.07 0.01-0.1 0.02l-16.05 5.35c-0.03 0.01-0.07 0.02-0.1 0.02-0.22 0-0.38-0.24-0.26-0.45l8.87-15.61c0.13-0.22-0.05-0.45-0.26-0.45-0.06 0-0.12 0.02-0.18 0.07l-18.45 14.4c-0.06 0.04-0.12 0.06-0.18 0.06-0.13 0-0.25-0.08-0.29-0.22l-4.13-14.6c-0.07-0.16-0.19-0.23-0.32-0.23z",
        fill: "#F44336"
      })
    )
  );
}

exports.default = CameraFlash;
