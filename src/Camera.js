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

function Camera(props) {
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
      fill: "url(#g)"
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
        id: "f",
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
      fill: "url(#f)"
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
        id: "e",
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
      fill: "url(#e)"
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
        id: "d",
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
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
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
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
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
      fill: "url(#b)"
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
        id: "a",
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
      fill: "url(#a)"
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
    )
  );
}

exports.default = Camera;
