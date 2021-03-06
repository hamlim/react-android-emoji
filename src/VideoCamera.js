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

function VideoCamera(props) {
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
        id: "n",
        x1: 8,
        x2: 8,
        y1: 35.5,
        y2: 82.715,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.9913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M12,84H9.66C6.53,84,4,81.47,4,78.34V41.66C4,38.53,6.53,36,9.66,36H12V84z",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 120,
        x2: 120,
        y1: 31.5,
        y2: 58.169,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.9913
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.11 57.22-5.11-3.72v-17.47l5.11-3.72c1.33-0.97 2.89 0.44 2.89 2.61v19.7c0 2.16-1.56 3.57-2.89 2.6z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 112.5,
        cy: 36.333,
        r: 17.013,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.989
      })
    ),
    _react2.default.createElement("rect", {
      x: 100,
      y: 36.03,
      width: 16,
      height: 17.48,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 16,
        cy: 36.333,
        r: 48.448,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.989
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 36,
      width: 20,
      height: 48,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 202,
        cy: 66.333,
        r: 20.652,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.989
      })
    ),
    _react2.default.createElement("rect", {
      x: 192,
      y: 68,
      width: 20,
      height: 20,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M29,39v42H12H9.66C8.19,81,7,79.81,7,78.34V41.66C7,40.19,8.19,39,9.66,39H12H29 M32,36H12H9.66 C6.53,36,4,38.53,4,41.66v36.69C4,81.47,6.53,84,9.66,84H12h20V36L32,36z",
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
          "m121 36.1v17.33l-3.23-2.35-0.79-0.57h-13.98v-11.48h13.98l0.79-0.57 3.23-2.36m1-4.1c-0.3 0-0.6 0.1-0.89 0.31l-5.11 3.72h-16v17.47h16l5.11 3.72c0.29 0.21 0.6 0.31 0.89 0.31 1.05 0 2-1.23 2-2.92v-19.7c0-1.68-0.95-2.91-2-2.91z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m209 71v14h-14v-14h14m3-3h-20v20h20v-20z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 175.83,
        cy: 65.167,
        r: 59.167,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ACD7FA",
        offset: 0.2306
      }),
      _react2.default.createElement("stop", {
        stopColor: "#85C5F8",
        offset: 0.6718
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m194.09 124h-36.18c-3.26 0-5.91-2.65-5.91-5.91v-84.18c0-3.26 2.65-5.91 5.91-5.91h36.18c3.26 0 5.91 2.65 5.91 5.91v84.18c0 3.26-2.65 5.91-5.91 5.91z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 66,
        cy: 28.833,
        r: 109.16,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ACD7FA",
        offset: 0.196
      }),
      _react2.default.createElement("stop", {
        stopColor: "#85C5F8",
        offset: 0.5712
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.8503
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104 124h-76c-4.42 0-8-3.58-8-8v-80c0-4.42 3.58-8 8-8h76c4.42 0 8 3.58 8 8v80c0 4.42-3.58 8-8 8z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m194.09 31c1.6 0 2.91 1.3 2.91 2.91v84.18c0 1.6-1.3 2.91-2.91 2.91h-36.18c-1.6 0-2.91-1.3-2.91-2.91v-84.18c0-1.6 1.3-2.91 2.91-2.91h36.18m0-3h-36.18c-3.26 0-5.91 2.65-5.91 5.91v84.18c0 3.26 2.65 5.91 5.91 5.91h36.18c3.26 0 5.91-2.65 5.91-5.91v-84.18c0-3.26-2.65-5.91-5.91-5.91z",
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
          "m104 31c2.76 0 5 2.24 5 5v80c0 2.76-2.24 5-5 5h-76c-2.76 0-5-2.24-5-5v-80c0-2.76 2.24-5 5-5h76m0-3h-76c-4.42 0-8 3.58-8 8v80c0 4.42 3.58 8 8 8h76c4.42 0 8-3.58 8-8v-80c0-4.42-3.58-8-8-8z",
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
          "m96 108h-52c-2.21 0-4-1.79-4-4v-32c0-2.21 1.79-4 4-4h52c2.21 0 4 1.79 4 4v32c0 2.21-1.79 4-4 4z",
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#1565C0",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 52c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"
      }),
      _react2.default.createElement("path", {
        d:
          "m76 52c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"
      }),
      _react2.default.createElement("path", {
        d:
          "m96 52c2.2 0 4 1.8 4 4s-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4s1.8-4 4-4h8m0-1h-8c-2.76 0-5 2.24-5 5s2.24 5 5 5h8c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96 67h-52c-2.76 0-5 2.24-5 5v2.9c-0.3-0.19-0.66-0.3-1.04-0.3h-2c-1.1 0-2 0.9-2 2v22c0 1.1 0.9 2 2 2h2c0.38 0 0.74-0.11 1.04-0.3v3.7c0 2.76 2.24 5 5 5h52c2.76 0 5-2.24 5-5v-32c0-2.76-2.24-5-5-5zm-57.04 31.6c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-22c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v22zm61.04 5.4c0 2.21-1.79 4-4 4h-52c-2.21 0-4-1.79-4-4v-32c0-2.21 1.79-4 4-4h52c2.21 0 4 1.79 4 4v32z",
      fill: "#1565C0",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m188 100c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4v-8c0-2.2 1.8-4 4-4m0-1c-2.76 0-5 2.24-5 5v8c0 2.76 2.24 5 5 5s5-2.24 5-5v-8c0-2.76-2.24-5-5-5z",
        fill: "#1565C0"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 69.333,
        cy: 68.667,
        r: 39.953,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96 108h-52c-2.21 0-4-1.79-4-4v-32c0-2.21 1.79-4 4-4h52c2.21 0 4 1.79 4 4v32c0 2.21-1.79 4-4 4z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 69.833,
        cy: 73.5,
        r: 39.501,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.1941 1.2283e-13 157.6 3.6667)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92 104h-44c-2.21 0-4-1.79-4-4v-24c0-2.21 1.79-4 4-4h44c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "x",
        cx: 234,
        cy: 58.833,
        r: 48.007,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ACD7FA",
        offset: 0.196
      }),
      _react2.default.createElement("stop", {
        stopColor: "#85C5F8",
        offset: 0.5712
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.8503
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m260 100h-52c-2.21 0-4-1.79-4-4v-32c0-2.21 1.79-4 4-4h52c2.21 0 4 1.79 4 4v32c0 2.21-1.79 4-4 4z",
      fill: "url(#x)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "w",
        cx: 233.67,
        cy: 68.167,
        r: 34.167,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.0853 1.1164e-13 307.65 -165.5)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m253.04 92.93h-38.07c-1.1 0-2-0.9-2-2v-22c0-1.1 0.9-2 2-2h38.07c1.1 0 2 0.9 2 2v22c0 1.11-0.9 2-2 2z",
      fill: "url(#w)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "v",
        x1: 36.958,
        x2: 36.958,
        y1: 70.333,
        y2: 94.929,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5EB2F6",
        offset: 0.2136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAAF5",
        offset: 0.5112
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E9CF4",
        offset: 0.8566
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9867
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m37.96 99.6h-2c-0.55 0-1-0.45-1-1v-22c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v22c0 0.55-0.45 1-1 1z",
      fill: "url(#v)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "u",
        x1: 64,
        x2: 64,
        y1: 51.333,
        y2: 62.338,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5EB2F6",
        offset: 0.2136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAAF5",
        offset: 0.5112
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E9CF4",
        offset: 0.8566
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9867
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 56,
      r: 4,
      fill: "url(#u)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "t",
        x1: 76,
        x2: 76,
        y1: 51.333,
        y2: 62.338,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5EB2F6",
        offset: 0.2136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAAF5",
        offset: 0.5112
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E9CF4",
        offset: 0.8566
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9867
      })
    ),
    _react2.default.createElement("circle", {
      cx: 76,
      cy: 56,
      r: 4,
      fill: "url(#t)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "s",
        x1: 92,
        x2: 92,
        y1: 51.333,
        y2: 62.338,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5EB2F6",
        offset: 0.2136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAAF5",
        offset: 0.5112
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E9CF4",
        offset: 0.8566
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9867
      })
    ),
    _react2.default.createElement("path", {
      d: "m96 60h-8c-2.2 0-4-1.8-4-4s1.8-4 4-4h8c2.2 0 4 1.8 4 4s-1.8 4-4 4z",
      fill: "url(#s)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "r",
        x1: 188,
        x2: 188,
        y1: 99.667,
        y2: 116.58,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5EB2F6",
        offset: 0.2136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAAF5",
        offset: 0.5112
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E9CF4",
        offset: 0.8566
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 0.9867
      })
    ),
    _react2.default.createElement("path", {
      d: "m192 104v8c0 2.2-1.8 4-4 4s-4-1.8-4-4v-8c0-2.2 1.8-4 4-4s4 1.8 4 4z",
      fill: "url(#r)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#1565C0",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m34 40c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      }),
      _react2.default.createElement("path", {
        d:
          "m34 48c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "q",
        x1: 34,
        x2: 34,
        y1: 39.75,
        y2: 43.768,
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
      cx: 34,
      cy: 42,
      r: 2,
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "p",
        x1: 34,
        x2: 34,
        y1: 47.75,
        y2: 51.768,
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
      cx: 34,
      cy: 50,
      r: 2,
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#1565C0",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m187.83 79.83c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-2.2-1.79-4-4-4z"
      }),
      _react2.default.createElement("path", {
        d:
          "m187.83 87.83c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-2.2-1.79-4-4-4z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 187.83,
        x2: 187.83,
        y1: 79.583,
        y2: 83.601,
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
      cx: 187.83,
      cy: 81.83,
      r: 2,
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 187.83,
        x2: 187.83,
        y1: 87.583,
        y2: 91.601,
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
      cx: 187.83,
      cy: 89.83,
      r: 2,
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 175.83,
        cy: 3,
        r: 65.208,
        gradientTransform: "matrix(-.0175 .9998 -1.9997 -.0349 184.9 -172.7)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0.9956
      })
    ),
    _react2.default.createElement("circle", {
      cx: 176,
      cy: 36,
      r: 32,
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 176,
        x2: 176,
        y1: 9.8725,
        y2: 61.746,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#01579B",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 176,
      cy: 36,
      r: 26,
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 175.83,
        cy: 12.5,
        r: 46.181,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 176,
      cy: 36,
      r: 23,
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 175.67,
        cy: 25.167,
        r: 21.173,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0D47A1",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 176,
      cy: 36,
      r: 10,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m176 26c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10m0-3c-7.17 0-13 5.83-13 13s5.83 13 13 13 13-5.83 13-13-5.83-13-13-13z",
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
          "m176 28c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z",
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
          "m260 63c0.55 0 1 0.45 1 1v32c0 0.55-0.45 1-1 1h-52c-0.55 0-1-0.45-1-1v-32c0-0.55 0.45-1 1-1h52m0-3h-52c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h52c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4z",
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
          "m176 7c15.99 0 29 13.01 29 29s-13.01 29-29 29-29-13.01-29-29 13.01-29 29-29m0-3c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m253.04 92.93h-38.07c-1.1 0-2-0.9-2-2v-22c0-1.1 0.9-2 2-2h38.07c1.1 0 2 0.9 2 2v22c0 1.11-0.9 2-2 2z",
      fill: "none",
      opacity: 0.2,
      stroke: "#1565C0",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m92 104h-44c-2.21 0-4-1.79-4-4v-24c0-2.21 1.79-4 4-4h44c2.21 0 4 1.79 4 4v24c0 2.21-1.79 4-4 4z",
      fill: "none",
      opacity: 0.2,
      stroke: "#1565C0",
      strokeMiterlimit: 10,
      strokeWidth: 2
    })
  );
}

exports.default = VideoCamera;
