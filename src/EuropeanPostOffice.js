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

function EuropeanPostOffice(props) {
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
        cx: 64.333,
        cy: 38.5,
        r: 105.15,
        gradientTransform:
          "matrix(1.0287e-13 1 -.6832 7.0275e-14 90.635 -25.833)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF7043",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6C3D",
        offset: 0.2253
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5F2C",
        offset: 0.5238
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5722",
        offset: 0.6641
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 20,
      width: 112,
      height: 99.24,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 42.163,
        x2: 10.375,
        y1: 69.618,
        y2: 69.618,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A04128",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A04128",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 20,
      width: 55.21,
      height: 99.24,
      fill: "url(#f)",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 85.842,
        x2: 112.03,
        y1: 69.618,
        y2: 69.618,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A04128",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A04128",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "64.79 119.24 120 119.24 120 20 64.79 20",
      fill: "url(#e)",
      opacity: 0.5
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 64,
        cy: -14.458,
        r: 43.592,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.5427 1.587e-13 41.695 -78.458)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#37474F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,20H4L18.83,5.17C19.58,4.42,20.6,4,21.66,4h84.69c1.06,0,2.08,0.42,2.83,1.17L124,20z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.7 116h-6.2c-0.28 0-0.5-0.22-0.5-0.5v-4.93c0-0.28 0.22-0.5 0.5-0.5h6.2c0.28 0 0.5 0.22 0.5 0.5v4.93c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#BF360C"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "M109.17,5.17C108.42,4.42,107.4,4,106.34,4H21.66c-1.06,0-2.08,0.42-2.83,1.17L4,20h4v99.24h112V20h4 L109.17,5.17z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement("path", {
      d: "m122 22h-116c-1.1 0-2-0.9-2-2h120c0 1.1-0.9 2-2 2z",
      fill: "#455A64"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 63.25,
        cy: 16.499,
        r: 107.96,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF8A65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8660",
        offset: 0.1293
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF7C53",
        offset: 0.2767
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF7043",
        offset: 0.3887
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FC6C3E",
        offset: 0.5669
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F45F30",
        offset: 0.7703
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E64B1A",
        offset: 0.9854
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 0.9912
      })
    ),
    _react2.default.createElement("path", {
      d: "m64 19.71c-0.2 0-24 10-24 10v93.29h48v-95.29 2l-24-10z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.9 16.26-25.53 10.77c-0.84 0.41-1.37 1.27-1.37 2.21 0 1.36 1.11 2.47 2.47 2.47h1.53v-2l22.9-9.45c0.7-0.35 1.51-0.35 2.21 0l22.89 9.45v2h1.53c1.36 0 2.47-1.11 2.47-2.47 0-0.94-0.53-1.79-1.37-2.21l-25.53-10.77c-0.69-0.35-1.51-0.35-2.2 0z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m18.66 106.68h-10.25c-0.23 0-0.41-0.19-0.41-0.41v-3.47c0-0.23 0.19-0.41 0.41-0.41h10.24c0.23 0 0.41 0.19 0.41 0.41v3.47c0.01 0.22-0.18 0.41-0.4 0.41z",
      fill: "#BF360C"
    }),
    _react2.default.createElement("path", {
      d:
        "m113.43 55.69h-7.53c-0.28 0-0.5-0.22-0.5-0.5v-4.87c0-0.28 0.22-0.5 0.5-0.5h7.53c0.28 0 0.5 0.22 0.5 0.5v4.87c0 0.27-0.22 0.5-0.5 0.5z",
      fill: "#E64A19"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.43 48.19h-7.53c-0.28 0-0.5-0.22-0.5-0.5v-4.87c0-0.28 0.22-0.5 0.5-0.5h7.53c0.28 0 0.5 0.22 0.5 0.5v4.87c0 0.27-0.22 0.5-0.5 0.5z",
      fill: "#E64A19"
    }),
    _react2.default.createElement("path", {
      d:
        "m119.5 97.23h-8.25c-0.28 0-0.5-0.22-0.5-0.5v-4.28c0-0.28 0.22-0.5 0.5-0.5h8.25c0.28 0 0.5 0.22 0.5 0.5v4.28c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#BF360C"
    }),
    _react2.default.createElement("path", {
      d:
        "m119.5 110.14h-13.14c-0.28 0-0.5-0.22-0.5-0.5v-5.34c0-0.28 0.22-0.5 0.5-0.5h13.14c0.28 0 0.5 0.22 0.5 0.5v5.34c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#BF360C"
    }),
    _react2.default.createElement("path", {
      d:
        "m26.23 116h-10.02c-0.28 0-0.5-0.22-0.5-0.5v-5.57c0-0.28 0.22-0.5 0.5-0.5h10.02c0.28 0 0.5 0.22 0.5 0.5v5.57c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#BF360C"
    }),
    _react2.default.createElement("path", {
      d:
        "m87.5 57.76h-7.89c-0.28 0-0.5-0.22-0.5-0.5v-3.27c0-0.28 0.22-0.5 0.5-0.5h7.89c0.28 0 0.5 0.22 0.5 0.5v3.27c0 0.27-0.22 0.5-0.5 0.5z",
      fill: "#FF7043"
    }),
    _react2.default.createElement("path", {
      d:
        "m46.48 86.18h-5.98c-0.28 0-0.5-0.22-0.5-0.5v-5.22c0-0.28 0.22-0.5 0.5-0.5h5.98c0.28 0 0.5 0.22 0.5 0.5v5.22c0 0.28-0.23 0.5-0.5 0.5z",
      fill: "#E64A19"
    }),
    _react2.default.createElement("path", {
      d:
        "m87.5 67h-10.59c-0.28 0-0.5-0.22-0.5-0.5v-5.74c0-0.28 0.22-0.5 0.5-0.5h10.59c0.28 0 0.5 0.22 0.5 0.5v5.74c0 0.27-0.22 0.5-0.5 0.5z",
      fill: "#E64A19"
    }),
    _react2.default.createElement("path", {
      d:
        "m51.09 104.12h-10.59c-0.28 0-0.5-0.22-0.5-0.5v-5.74c0-0.28 0.22-0.5 0.5-0.5h10.59c0.28 0 0.5 0.22 0.5 0.5v5.74c0 0.28-0.23 0.5-0.5 0.5z",
      fill: "#E64A19"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.88 113.17h-11.92c-0.28 0-0.5-0.22-0.5-0.5v-5.03c0-0.28 0.22-0.5 0.5-0.5h11.91c0.28 0 0.5 0.22 0.5 0.5v5.03c0.01 0.27-0.22 0.5-0.49 0.5z",
      fill: "#FF7043"
    }),
    _react2.default.createElement("path", {
      d:
        "m77 105.04h-11.91c-0.28 0-0.5-0.22-0.5-0.5v-5.03c0-0.28 0.22-0.5 0.5-0.5h11.91c0.28 0 0.5 0.22 0.5 0.5v5.03c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#FF7043"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.41 77.92h-11.91c-0.28 0-0.5-0.22-0.5-0.5v-5.03c0-0.28 0.22-0.5 0.5-0.5h11.91c0.28 0 0.5 0.22 0.5 0.5v5.03c0 0.27-0.22 0.5-0.5 0.5z",
      fill: "#FF7043"
    }),
    _react2.default.createElement("path", {
      d:
        "m87.5 83.76h-5.89c-0.28 0-0.5-0.22-0.5-0.5v-5.93c0-0.28 0.22-0.5 0.5-0.5h5.89c0.28 0 0.5 0.22 0.5 0.5v5.93c0 0.28-0.22 0.5-0.5 0.5z",
      fill: "#E64A19"
    }),
    _react2.default.createElement("path", {
      d: "M124,124H4v-4c0-2.21,1.79-4,4-4h112c2.21,0,4,1.79,4,4V124z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m55.11 96.25h17.78c0.61 0 1.11-0.45 1.11-1v-0.54c0-0.65-0.45-1.22-1.12-1.45l-8.66-1.88c-0.25-0.08-0.53-0.08-0.78 0l-8.34 1.87c-0.66 0.23-1.1 0.8-1.1 1.44v0.55c0 0.56 0.5 1.01 1.11 1.01z",
      fill: "#80311A"
    }),
    _react2.default.createElement("rect", {
      x: 57,
      y: 96,
      width: 14,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#80311A"
      },
      _react2.default.createElement("rect", {
        x: 56,
        y: 96,
        width: 2,
        height: 20
      }),
      _react2.default.createElement("rect", {
        x: 70,
        y: 96,
        width: 2,
        height: 20
      })
    ),
    _react2.default.createElement("rect", {
      x: 21.22,
      y: 81,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m32 80h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "m33 100h-14c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "M18.89,82h14.22C33.6,82,34,81.64,34,81.19v-0.44c0-0.52-0.36-0.99-0.9-1.17l-6.93-1.53 c-0.2-0.07-0.42-0.07-0.63,0l-6.67,1.52C18.35,79.76,18,80.22,18,80.74v0.45C18,81.64,18.4,82,18.89,82z",
      fill: "#80311A"
    }),
    _react2.default.createElement("rect", {
      x: 21.22,
      y: 39,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m32 38h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "m33 58h-14c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "M18.89,40h14.22C33.6,40,34,39.64,34,39.19v-0.44c0-0.52-0.36-0.99-0.9-1.17l-6.93-1.53 c-0.2-0.07-0.42-0.07-0.63,0l-6.67,1.52C18.35,37.76,18,38.22,18,38.74v0.45C18,39.64,18.4,40,18.89,40z",
      fill: "#80311A"
    }),
    _react2.default.createElement("rect", {
      x: 97.22,
      y: 81,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m108 80h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "m109 100h-14c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.89 82h14.22c0.49 0 0.89-0.36 0.89-0.81v-0.44c0-0.52-0.36-0.99-0.9-1.17l-6.93-1.53c-0.2-0.07-0.42-0.07-0.63 0l-6.67 1.52c-0.52 0.19-0.87 0.65-0.87 1.17v0.45c0 0.45 0.4 0.81 0.89 0.81z",
      fill: "#80311A"
    }),
    _react2.default.createElement("rect", {
      x: 97.22,
      y: 39,
      width: 9.9,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d: "m108 38h-12v22h12v-22zm-1.94 20h-8v-8h8v8zm0-10h-8v-8h8v8z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "m109 58h-14c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1z",
      fill: "#80311A"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.89 40h14.22c0.49 0 0.89-0.36 0.89-0.81v-0.44c0-0.52-0.36-0.99-0.9-1.17l-6.93-1.53c-0.2-0.07-0.42-0.07-0.63 0l-6.67 1.52c-0.52 0.19-0.87 0.65-0.87 1.17v0.45c0 0.45 0.4 0.81 0.89 0.81z",
      fill: "#80311A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m106.34 7c0.27 0 0.52 0.1 0.71 0.29l11.71 11.71h-1.76v100h3c0.55 0 1 0.45 1 1v1h-114v-1c0-0.55 0.45-1 1-1h3v-100h-1.76l11.71-11.71c0.19-0.19 0.44-0.29 0.71-0.29h84.68m0-3h-84.68c-1.06 0-2.08 0.42-2.83 1.17l-14.83 14.83c0 1.1 0.9 2 2 2h2v94c-2.21 0-4 1.79-4 4v4h120v-4c0-2.21-1.79-4-4-4v-94h2c1.1 0 2-0.9 2-2l-14.83-14.83c-0.75-0.75-1.77-1.17-2.83-1.17z",
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
          "m70.64 36.5c0.79 0 1.62 0.04 2.48 0.11 4.9 0.44 8.78 2.05 8.9 3.64h0.02l-0.02 0.02v0.14c-0.04 0.43-0.41 0.73-0.89 1.13-2.74 2.28-4.18 5.24-5.25 7.82-3.79 9.17-8.75 14.38-15.92 15.48-0.63 0.13-1.29 0.2-1.96 0.2h-9.62v0.15c0 0.17-0.13 0.3-0.3 0.3h-1.8c-0.17 0-0.3-0.13-0.3-0.3v-3.91c0-0.17 0.13-0.3 0.3-0.3h1.8c0.17 0 0.3 0.13 0.3 0.3v0.15h2.12c-1.32-1.65-2.12-3.73-2.12-6.01 0-5.31 4.31-9.62 9.62-9.62 4.02 0 7.46 2.47 8.9 5.97 0.48-4.12 0.29-7-0.67-9.2-0.44-1.01-1.16-1.87-1.96-2.63-0.41-0.39-0.62-0.79-0.58-1.19 0.11-1.36 3.05-2.25 6.95-2.25m-12.65 24.94c3.31 0 6.01-2.7 6.01-6.01s-2.7-6.01-6.01-6.01-6.01 2.7-6.01 6.01c0 3.32 2.7 6.01 6.01 6.01m12.65-26.94c-5.45 0-8.72 1.49-8.95 4.08-0.06 0.71 0.09 1.77 1.19 2.82 0.75 0.71 1.22 1.34 1.5 1.98 0.34 0.79 0.57 1.72 0.68 2.83-1.98-1.52-4.45-2.39-7.07-2.39-6.41 0-11.62 5.21-11.62 11.62 0 1.21 0.19 2.41 0.56 3.56h-0.67c-1.27 0-2.3 1.03-2.3 2.3v3.91c0 1.27 1.03 2.3 2.3 2.3h1.8c0.51 0 0.98-0.17 1.37-0.45h8.55c0.77 0 1.55-0.08 2.31-0.23 7.67-1.2 13.21-6.5 17.42-16.68 1.03-2.49 2.31-5.08 4.68-7.05 0.64-0.53 1.49-1.24 1.6-2.49 0-0.05 0.01-0.1 0.01-0.15 0.02-0.21 0.01-0.42-0.04-0.62-0.67-4.08-8.98-5.04-10.68-5.2-0.88-0.1-1.78-0.14-2.64-0.14zm-12.65 24.94c-2.21 0-4.01-1.8-4.01-4.01s1.8-4.01 4.01-4.01 4.01 1.8 4.01 4.01-1.8 4.01-4.01 4.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 34.924,
        y2: 70.988,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF000",
        offset: 0.7489
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEA00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m82.01 40.26c-0.11-1.59-4-3.2-8.9-3.64-5.06-0.46-9.29 0.5-9.43 2.15-0.04 0.4 0.17 0.8 0.58 1.19 0.8 0.76 1.52 1.62 1.96 2.63 0.96 2.21 1.15 5.09 0.67 9.2-1.44-3.5-4.88-5.97-8.9-5.97-5.31 0-9.62 4.31-9.62 9.62 0 2.28 0.79 4.36 2.12 6.01h-2.12v-0.15c0-0.17-0.13-0.3-0.3-0.3h-1.8c-0.17 0-0.3 0.13-0.3 0.3v3.91c0 0.17 0.13 0.3 0.3 0.3h1.8c0.17 0 0.3-0.13 0.3-0.3v-0.15h9.62c0.67 0 1.33-0.07 1.96-0.2 7.17-1.1 12.13-6.3 15.92-15.48 1.07-2.58 2.51-5.54 5.25-7.82 0.48-0.4 0.85-0.7 0.89-1.13v-0.14l0.02-0.02-0.02-0.01zm-24.02 21.18c-3.31 0-6.01-2.7-6.01-6.01s2.7-6.01 6.01-6.01 6.01 2.7 6.01 6.01-2.7 6.01-6.01 6.01z",
      fill: "url(#a)"
    })
  );
}

exports.default = EuropeanPostOffice;
