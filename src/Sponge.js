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

function Sponge(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m124.08 53.18-55.8-26.37-31.18 27.8-32.87 9.29 0.24 16.88c0.61-0.44 1.34-0.61 2.14-0.43 2.07 0.46 3.75 3.1 3.75 5.89s-1.68 4.68-3.75 4.21c-0.74-0.17-1.43-0.62-2.02-1.25l0.03 2.06s-1.02 9.58 18.51 18.48c0.2-3.42 2.65-5.62 5.65-4.95 3.13 0.7 5.67 4.25 5.67 7.94 0 0.44-0.04 0.86-0.11 1.25 25.24 7.97 38.27 2.53 42.25-7.91 4.16-10.91 20.79-14.29 27.8-15.07 7.02-0.78 18.19-2.6 18.97-10.91s0.72-26.91 0.72-26.91z",
      fill: "#EEB400"
    }),
    _react2.default.createElement("circle", {
      cx: 38.5,
      cy: 48,
      r: 16.5,
      fill: "#CDE7FC"
    }),
    _react2.default.createElement("circle", {
      cx: 22,
      cy: 33,
      r: 4.38,
      fill: "#CDE7FC"
    }),
    _react2.default.createElement("circle", {
      cx: 12.01,
      cy: 39.83,
      r: 3.15,
      fill: "#CDE7FC"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m38.5 33.5c8 0 14.5 6.5 14.5 14.5s-6.5 14.5-14.5 14.5-14.5-6.5-14.5-14.5 6.5-14.5 14.5-14.5m0-2c-9.11 0-16.5 7.39-16.5 16.5s7.39 16.5 16.5 16.5 16.5-7.39 16.5-16.5-7.39-16.5-16.5-16.5z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m9.68 55.26c-7.1 5.12-10.88 17.6 10.33 28.52s31.82 16.83 44.04 4.29c7.41-7.6 23.78-18.9 41.51-17.93 10.99 0.6 35.86-18.19-0.07-36.12s-50.46-5.46-55.57 3.51-24.65 6.49-40.24 17.73z",
      fill: "#FFCF00"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "k",
        d:
          "m4.23 63.9 0.39 27.35s-1.3 11.95 26.24 21.57 41.58 4.16 45.73-6.76 20.79-14.29 27.8-15.07c7.02-0.78 18.19-2.6 18.97-10.91 0.78-8.32 0.71-26.89 0.71-26.89l-55.8-26.37-31.17 27.79-32.87 9.29z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#k"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 25,
        cy: 96.667,
        r: 4.0541,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28.61 97.49c0 2.42-1.62 4-3.61 3.55-1.99-0.46-3.61-2.79-3.61-5.2s1.62-4 3.61-3.55 3.61 2.79 3.61 5.2z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#f)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 43,
        cy: 103.33,
        r: 4.4331,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m46.71 104.16c0 2.76-1.66 4.62-3.71 4.16s-3.7-3.06-3.7-5.81 1.66-4.62 3.71-4.16c2.04 0.45 3.7 3.05 3.7 5.81z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#e)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 50.474,
        cy: 110.47,
        r: 2.4513,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m52.52 110.93c0 1.52-0.92 2.55-2.05 2.3s-2.05-1.69-2.05-3.21 0.92-2.55 2.05-2.3 2.05 1.68 2.05 3.21z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#d)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 70.667,
        cy: 105.33,
        r: 11.353,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m69.26 98.43c-0.2 3.43-2.24 6.86-4.54 7.66s-4.01-1.33-3.8-4.77c0.2-3.43 2.24-6.86 4.54-7.66s4 1.34 3.8 4.77z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#c)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 83,
        cy: 75,
        r: 25.966,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.013
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.1398
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.4007
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.6611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.9187
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m119.97 74.42c-0.08 1.35-1.13 2.79-2.35 3.21s-2.14-0.33-2.06-1.68 1.13-2.79 2.35-3.21 2.14 0.33 2.06 1.68z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#b)",
      opacity: 0.9
    }),
    _react2.default.createElement("path", {
      d:
        "m108.92 79.41c-0.11 1.82-1.47 3.74-3.03 4.28s-2.75-0.49-2.64-2.32c0.11-1.82 1.47-3.74 3.03-4.28 1.57-0.54 2.75 0.5 2.64 2.32z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#b)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "t",
        cx: 102.33,
        cy: 87.333,
        r: 12.481,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.91 78.44c-0.23 3.93-2.73 7.91-5.58 8.9s-4.96-1.39-4.73-5.32 2.73-7.91 5.58-8.9 4.97 1.39 4.73 5.32z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#t)",
      opacity: 0.9
    }),
    _react2.default.createElement("path", {
      d:
        "m88.98 81.21c-0.09 1.5-1.29 3.1-2.67 3.58s-2.44-0.34-2.35-1.84 1.29-3.1 2.67-3.58 2.44 0.34 2.35 1.84z",
      clipPath: "url(#a)",
      enableBackground: "new",
      fill: "url(#b)",
      opacity: 0.9
    }),
    _react2.default.createElement("path", {
      d:
        "m9.68 55.26c-7.1 5.12-10.88 17.6 10.33 28.52s31.82 16.83 44.04 4.29c7.41-7.6 23.78-18.9 41.51-17.93 10.99 0.6 35.86-18.19-0.07-36.12s-50.46-5.46-55.57 3.51-24.65 6.49-40.24 17.73z",
      fill: "#FFD900"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73.66 27.88c8.51 0 18.77 2.97 30.5 8.82 11.9 5.94 17.93 12.58 16.96 18.7-0.02 0.15-0.04 0.31-0.04 0.46-0.01 5.1-0.11 17.63-0.7 23.93-0.41 4.41-5.6 7.02-16.31 8.21-2.58 0.29-9.29 1.25-15.79 3.95-7.5 3.11-12.37 7.5-14.48 13.04-3.08 8.09-11.62 9.79-18.24 9.79-5.21 0-11.3-1.01-18.14-3.01-0.4-4.72-3.76-8.98-7.98-9.92-0.57-0.13-1.15-0.19-1.71-0.19-2.76 0-5.1 1.49-6.43 3.84-6.85-3.57-10.21-7.01-11.84-9.39-0.71-1.03-1.15-1.93-1.41-2.66 3.08-0.45 5.32-3.4 5.32-7.23 0-4.19-2.54-7.92-5.94-8.78l-0.14-9.93c0-0.16-0.02-0.33-0.05-0.49-0.93-5.19 2.98-8.47 4.21-9.35 7.23-5.21 15.47-7.31 22.74-9.17 8.13-2.07 15.14-3.86 18.36-9.51 2.88-5.06 8.89-11.11 21.11-11.11m0-3c-13.6 0-20.52 7.01-23.73 12.64-5.1 8.96-24.66 6.5-40.25 17.73-3.6 2.6-6.34 7.09-5.4 12.31l0.19 13.21c0.45-0.32 0.97-0.5 1.53-0.5 0.2 0 0.4 0.02 0.61 0.07 2.07 0.46 3.75 3.1 3.75 5.89 0 2.51-1.36 4.28-3.14 4.28-0.2 0-0.41-0.02-0.62-0.07-0.74-0.17-1.43-0.62-2.02-1.25l0.03 2.06s-1.02 9.58 18.51 18.48c0.18-3.01 2.09-5.07 4.59-5.07 0.34 0 0.7 0.04 1.06 0.12 3.13 0.7 5.67 4.25 5.67 7.94 0 0.44-0.04 0.86-0.11 1.25 8.37 2.64 15.4 3.81 21.2 3.81 11.69 0 18.39-4.74 21.04-11.72 4.16-10.91 20.79-14.29 27.8-15.07 7.02-0.78 18.19-2.6 18.97-10.91 0.6-6.37 0.7-18.75 0.71-24.2 1.01-6.39-3.24-14.2-18.58-21.86-13.34-6.67-23.75-9.14-31.81-9.14z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "s",
        cx: 23,
        cy: 53,
        r: 7.0868,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 28,
      cy: 58.67,
      rx: 6.92,
      ry: 3.8,
      fill: "url(#s)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 49.333,
        cy: 57,
        r: 12.225,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 53.99,
      cy: 61.63,
      rx: 12.09,
      ry: 5.92,
      fill: "url(#r)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: 55.667,
        cy: 38.667,
        r: 12.867,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 62.33,
      cy: 44.67,
      rx: 8.46,
      ry: 4.65,
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "p",
        cx: 78.576,
        cy: 34.102,
        r: 6.0462,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 78.58,
      cy: 34.1,
      rx: 7.49,
      ry: 4.12,
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 43.056,
        cy: 51.424,
        r: 3.0744,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 43.06,
      cy: 51.42,
      rx: 3.81,
      ry: 2.09,
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "n",
        cx: 76.566,
        cy: 46.28,
        r: 3.0744,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 76.57,
      cy: 46.28,
      rx: 3.81,
      ry: 2.09,
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 78.125,
        cy: 56.414,
        r: 4.9451,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 78.13,
      cy: 56.41,
      rx: 6.13,
      ry: 3.37,
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 72.668,
        cy: 75.512,
        r: 2.9393,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 72.67,
      cy: 75.51,
      rx: 3.64,
      ry: 2,
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 50.646,
        cy: 76.487,
        r: 3.5602,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 50.65,
      cy: 76.49,
      rx: 4.41,
      ry: 2.42,
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 29.014,
        cy: 74.733,
        r: 3.5602,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 29.01,
      cy: 74.73,
      rx: 4.41,
      ry: 2.42,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 99,
        cy: 49,
        r: 12.618,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 105.21,
      cy: 54.85,
      rx: 7.49,
      ry: 4.11,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 101.71,
        cy: 44.331,
        r: 2.6083,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 101.71,
      cy: 44.33,
      rx: 3.23,
      ry: 1.78,
      fill: "url(#g)"
    }),
    _react2.default.createElement("circle", {
      cx: 84.36,
      cy: 99.03,
      r: 9.27,
      fill: "#CDE7FC",
      opacity: 0.76
    }),
    _react2.default.createElement("circle", {
      cx: 102.75,
      cy: 98.17,
      r: 5.32,
      fill: "#CDE7FC"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.75 94.85c1.83 0 3.32 1.49 3.32 3.32s-1.49 3.32-3.32 3.32-3.32-1.49-3.32-3.32 1.49-3.32 3.32-3.32m0-2c-2.94 0-5.32 2.38-5.32 5.32s2.38 5.32 5.32 5.32 5.32-2.38 5.32-5.32-2.38-5.32-5.32-5.32z",
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
          "m84.36 91.76c4.01 0 7.27 3.26 7.27 7.27s-3.26 7.27-7.27 7.27-7.27-3.26-7.27-7.27 3.27-7.27 7.27-7.27m0-2c-5.12 0-9.27 4.15-9.27 9.27s4.15 9.27 9.27 9.27 9.27-4.15 9.27-9.27-4.15-9.27-9.27-9.27z",
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
          "m22 30.62c1.31 0 2.38 1.07 2.38 2.38s-1.07 2.38-2.38 2.38-2.38-1.07-2.38-2.38 1.07-2.38 2.38-2.38m0-2c-2.42 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38-1.96-4.38-4.38-4.38z",
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
          "m12.01 38.68c0.63 0 1.15 0.52 1.15 1.15s-0.52 1.15-1.15 1.15-1.15-0.52-1.15-1.15 0.51-1.15 1.15-1.15m0-2c-1.74 0-3.15 1.41-3.15 3.15s1.41 3.15 3.15 3.15 3.15-1.41 3.15-3.15-1.41-3.15-3.15-3.15z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Sponge;
