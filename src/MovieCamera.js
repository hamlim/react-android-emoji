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

function MovieCamera(props) {
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
        id: "i",
        cx: 9.25,
        cy: 66.25,
        r: 58.443,
        gradientTransform: "matrix(1.0287e-13 1 -.8128 8.3606e-14 63.095 57)",
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
        "M32,80L20,64h-8c-4.42,0-8,3.58-8,8v44c0,4.42,3.58,8,8,8h8l12-16h20V80H32z",
      fill: "url(#i)"
    }),
    _react2.default.createElement("rect", {
      x: 16,
      y: 64,
      width: 3,
      height: 60,
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 112,
        x2: 112,
        y1: 73.234,
        y2: 90.332,
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
        "m121.11 73.45-5.11 2.55h-16v12h16l5.11 2.55c1.33 0.66 2.89-0.3 2.89-1.79v-13.52c0-1.49-1.56-2.46-2.89-1.79z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 78.25,
        cy: 47.083,
        r: 24.002,
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
      x: 64,
      y: 48,
      width: 28,
      height: 28,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 31.5,
        y: 80,
        width: 3,
        height: 28,
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
          "m18.5 67 12 16h18.5v22h-18.5l-12 16h-6.5c-2.76 0-5-2.24-5-5v-44c0-2.76 2.24-5 5-5h6.5m1.5-3h-8c-4.42 0-8 3.58-8 8v44c0 4.42 3.58 8 8 8h8l12-16h20v-28h-20l-12-16z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#eee",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 76.85v10.29l-3.66-1.83-0.63-0.31h-13.71v-6h13.71l0.63-0.32 3.66-1.83m1-3.62c-0.3 0-0.6 0.07-0.89 0.21l-5.11 2.56h-16v12h16l5.11 2.55c0.29 0.15 0.6 0.21 0.89 0.21 1.05 0 2-0.84 2-2v-13.52c0-1.16-0.95-2.01-2-2.01z"
      }),
      _react2.default.createElement("path", {
        d: "m89 51v22h-22v-22h22m3-3h-28v28h28v-28z"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 47.833,
        cy: 2.8333,
        r: 65.133,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 48,
      cy: 36,
      r: 32,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 101.83,
        cy: 23.333,
        r: 44.59,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 102,
      cy: 46,
      r: 22,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 77.833,
        cy: 68.167,
        r: 58.648,
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
        "m104 120h-52c-4.42 0-8-3.58-8-8v-36c0-4.42 3.58-8 8-8h52c4.42 0 8 3.58 8 8v36c0 4.42-3.58 8-8 8z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m54 94c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      }),
      _react2.default.createElement("path", {
        d:
          "m54 102c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104 71c2.76 0 5 2.24 5 5v36c0 2.76-2.24 5-5 5h-52c-2.76 0-5-2.24-5-5v-36c0-2.76 2.24-5 5-5h52m0-3h-52c-4.42 0-8 3.58-8 8v36c0 4.42 3.58 8 8 8h52c4.42 0 8-3.58 8-8v-36c0-4.42-3.58-8-8-8z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48 7c15.99 0 29 13.01 29 29s-13.01 29-29 29-29-13.01-29-29 13.01-29 29-29m0-3c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102 27c10.48 0 19 8.52 19 19s-8.52 19-19 19-19-8.52-19-19 8.52-19 19-19m0-3c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 80,
        x2: 80,
        y1: 90.172,
        y2: 113.73,
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
        "m64 108.5c-2.48 0-4.5-2.02-4.5-4.5v-8c0-2.48 2.02-4.5 4.5-4.5h32c2.48 0 4.5 2.02 4.5 4.5v8c0 2.48-2.02 4.5-4.5 4.5h-32z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m96 92c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4h-32c-2.21 0-4-1.79-4-4v-8c0-2.21 1.79-4 4-4h32m0-1h-32c-2.76 0-5 2.24-5 5v8c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5v-8c0-2.76-2.24-5-5-5z",
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 48,
      cy: 36,
      r: 24,
      fill: "none",
      stroke: "#616161",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("circle", {
      cx: 102,
      cy: 46,
      r: 14,
      fill: "none",
      stroke: "#616161",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 47.833,
        cy: 27.167,
        r: 16.602,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 48,
      cy: 36,
      r: 8,
      fill: "url(#b)",
      stroke: "#757575",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 102,
        cy: 37.333,
        r: 16.334,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 102,
      cy: 46,
      r: 8,
      fill: "url(#a)",
      stroke: "#757575",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 54,
        x2: 54,
        y1: 93.75,
        y2: 97.768,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF1744",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 54,
      cy: 96,
      r: 2,
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 54,
        x2: 54,
        y1: 101.75,
        y2: 105.77,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#76FF03",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64DD17",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 54,
      cy: 104,
      r: 2,
      fill: "url(#j)"
    })
  );
}

exports.default = MovieCamera;
