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

function Fountain(props) {
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
        id: "i",
        x1: 64,
        x2: 64,
        y1: 94,
        y2: 128.73,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#989898",
        offset: 0.2308
      }),
      _react2.default.createElement("stop", {
        stopColor: "#888",
        offset: 0.5354
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6C6C6C",
        offset: 0.8799
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M4,92v17.6c0,7.95,26.86,14.4,60,14.4s60-6.45,60-14.4V92H4z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,79c15.77,0,30.57,1.63,41.65,4.58C116.2,86.4,121,89.92,121,92v17.6 c0,0.93-2.81,4.27-15.27,7.27C94.62,119.53,79.8,121,64,121s-30.62-1.47-41.73-4.13C9.81,113.87,7,110.53,7,109.6V92 c0-2.08,4.8-5.6,15.35-8.42C33.43,80.63,48.23,79,64,79 M64,76C30.86,76,4,83.16,4,92v17.6c0,7.95,26.86,14.4,60,14.4 s60-6.45,60-14.4V92C124,83.16,97.14,76,64,76L64,76z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64,
        x2: 64,
        y1: 75.167,
        y2: 125.37,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CBCBCB",
        offset: 0.6431
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 92,
      rx: 60,
      ry: 16,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("ellipse", {
        id: "g",
        cx: 64,
        cy: 92,
        rx: 60,
        ry: 16
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "f"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#f)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 35.968,
          x2: 35.968,
          y1: 75.067,
          y2: 122.29,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m11.45 83.06c5.52-2.19 12.93-4.02 21.61-5.32l27.43 13.16-49.04-7.84z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m32.97 78.3 24 11.51-43.47-6.95c5.21-1.86 11.85-3.41 19.47-4.56m0.17-1.1c-9.73 1.45-17.88 3.55-23.61 6.09l54.47 8.71-30.86-14.8z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 29.2,
          x2: 29.2,
          y1: 75.86,
          y2: 122.42,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "M1.06,91.47c0.35-2.65,3.28-5.27,8.54-7.63l47.73,7.63H1.06z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m9.68 84.39 41 6.55h-48.96c0.68-2.22 3.44-4.5 7.96-6.55m-0.15-1.1c-5.73 2.55-9.03 5.53-9.03 8.71h63.5l-54.47-8.71z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 92.032,
          x2: 92.032,
          y1: 75.067,
          y2: 122.29,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M94.94,77.75c8.67,1.3,16.09,3.12,21.61,5.32L67.51,90.9L94.94,77.75z",
        fill: "url(#c)"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.03 78.3c7.63 1.15 14.26 2.71 19.47 4.56l-43.47 6.95 24-11.51m-0.17-1.1-30.86 14.8 54.47-8.71c-5.73-2.54-13.88-4.64-23.61-6.09z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 49.206,
          x2: 49.206,
          y1: 74.785,
          y2: 123.62,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "M34.94,77.48c8.79-1.21,18.6-1.86,28.53-1.88v15.56L34.94,77.48z",
        fill: "url(#b)"
      }),
      _react2.default.createElement("path", {
        d:
          "m62.94 76.13v14.19l-26.17-12.55c8.15-1.04 17.1-1.6 26.17-1.64m1.06-1.06c-11.2 0-21.72 0.78-30.86 2.13l30.86 14.8v-16.93z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 78.794,
          x2: 78.794,
          y1: 74.785,
          y2: 123.62,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "M64.53,75.6c9.93,0.02,19.74,0.67,28.53,1.88L64.53,91.16V75.6z",
        fill: "url(#a)"
      }),
      _react2.default.createElement("path", {
        d:
          "m65.06 76.13c9.07 0.04 18.02 0.6 26.17 1.64l-26.17 12.55v-14.19m-1.06-1.06v16.93l30.86-14.8c-9.14-1.36-19.66-2.13-30.86-2.13z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "r",
          x1: 29.2,
          x2: 29.2,
          y1: 76.918,
          y2: 123.47,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "M9.6,100.16c-5.26-2.36-8.19-4.98-8.54-7.63h56.27L9.6,100.16z",
        fill: "url(#r)"
      }),
      _react2.default.createElement("path", {
        d:
          "M50.67,93.06l-41,6.55c-4.52-2.05-7.28-4.33-7.96-6.55H50.67 M64,92H0.5 c0,3.18,3.3,6.16,9.03,8.71L64,92L64,92z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "q",
          x1: 98.8,
          x2: 98.8,
          y1: 76.918,
          y2: 123.47,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "m70.66 92.53h56.27c-0.35 2.65-3.28 5.27-8.54 7.63l-47.73-7.63z",
        fill: "url(#q)"
      }),
      _react2.default.createElement("path", {
        d:
          "m126.28 93.06c-0.68 2.22-3.44 4.51-7.96 6.55l-41-6.55h48.96m1.22-1.06h-63.5l54.47 8.71c5.73-2.55 9.03-5.53 9.03-8.71z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "p",
          x1: 35.968,
          x2: 35.968,
          y1: 77.262,
          y2: 124.49,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m33.06 106.25c-8.67-1.3-16.09-3.12-21.61-5.32l49.04-7.84-27.43 13.16z",
        fill: "url(#p)"
      }),
      _react2.default.createElement("path", {
        d:
          "m56.98 94.19-24 11.51c-7.63-1.15-14.26-2.71-19.47-4.56l43.47-6.95m7.02-2.19-54.47 8.71c5.72 2.54 13.88 4.65 23.61 6.09l30.86-14.8z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 98.8,
          x2: 98.8,
          y1: 75.86,
          y2: 122.42,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "M70.66,91.47l47.73-7.63c5.26,2.36,8.2,4.98,8.54,7.63H70.66z",
        fill: "url(#o)"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.32 84.39c4.52 2.05 7.28 4.33 7.96 6.55h-48.95l40.99-6.55m0.15-1.1-54.47 8.71h63.5c0-3.18-3.3-6.16-9.03-8.71z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 92.032,
          x2: 92.032,
          y1: 77.262,
          y2: 124.49,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "M67.51,93.1l49.04,7.84c-5.52,2.19-12.94,4.02-21.61,5.32L67.51,93.1z",
        fill: "url(#n)"
      }),
      _react2.default.createElement("path", {
        d:
          "M71.02,94.19l43.47,6.95c-5.21,1.85-11.84,3.41-19.47,4.56L71.02,94.19 M64,92l30.86,14.8 c9.73-1.45,17.88-3.55,23.61-6.09L64,92L64,92z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "m",
          x1: 78.794,
          x2: 78.794,
          y1: 76.467,
          y2: 125.3,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "M64.53,92.84l28.53,13.68c-8.79,1.21-18.6,1.86-28.53,1.88V92.84z",
        fill: "url(#m)"
      }),
      _react2.default.createElement("path", {
        d:
          "M65.06,93.68l26.17,12.55c-8.15,1.04-17.1,1.6-26.17,1.64V93.68 M64,92v16.93 c11.2,0,21.72-0.78,30.86-2.13L64,92L64,92z",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 49.206,
          x2: 49.206,
          y1: 76.467,
          y2: 125.3,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#eee",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CBCBCB",
          offset: 0.6431
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BDBDBD",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d: "m63.47 108.4c-9.93-0.02-19.74-0.67-28.53-1.88l28.53-13.68v15.56z",
        fill: "url(#l)"
      }),
      _react2.default.createElement("path", {
        d:
          "m62.94 93.68v14.19c-9.07-0.04-18.02-0.6-26.17-1.64l26.17-12.55m1.06-1.68-30.86 14.8c9.14 1.36 19.66 2.13 30.86 2.13v-16.93z",
        fill: "#BDBDBD"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.26 96c1.77-1.25 2.74-2.6 2.74-4 0-6.63-21.49-12-48-12s-48 5.37-48 12c0 1.4 0.97 2.75 2.74 4 6.59-4.66 24.36-8 45.26-8s38.67 3.34 45.26 8z",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 64,
        cy: 90.5,
        r: 15.502,
        gradientTransform: "matrix(.00129 1 -3.7589 .0048489 404.1 26.061)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#49C0F6",
        offset: 0.178
      }),
      _react2.default.createElement("stop", {
        stopColor: "#38B7F2",
        offset: 0.4176
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1CA8EB",
        offset: 0.6911
      }),
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 0.8886
      }),
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 96,
      rx: 45.26,
      ry: 8,
      fill: "url(#k)"
    }),
    _react2.default.createElement("ellipse", {
      cx: 114.67,
      cy: 105.33,
      rx: 2.33,
      ry: 1.25,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      cx: 107.33,
      cy: 112.67,
      rx: 3.67,
      ry: 0.94,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("ellipse", {
      cx: 99.42,
      cy: 109.25,
      rx: 3.75,
      ry: 1.46,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 82c30.2 0 46 6.51 46 10 0 0.65-0.69 1.51-1.9 2.37-6.35 4.49-24.49 7.63-44.1 7.63s-37.75-3.14-44.1-7.63c-1.21-0.86-1.9-1.72-1.9-2.37 0-3.49 15.8-10 46-10m0-2c-26.51 0-48 5.37-48 12 0 1.4 0.97 2.75 2.74 4 6.59 4.66 24.36 8 45.26 8s38.67-3.34 45.26-8c1.77-1.25 2.74-2.6 2.74-4 0-6.63-21.49-12-48-12z",
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
          "m64 77c35.29 0 59 7.76 59 15s-23.71 15-59 15-59-7.76-59-15 23.71-15 59-15m0-1c-33.14 0-60 7.16-60 16s26.86 16 60 16 60-7.16 60-16-26.86-16-60-16z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 95.44,
      rx: 9.38,
      ry: 2.23,
      fill: "#81D4FA"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        cx: 10,
        cy: 103.75,
        rx: 2.83,
        ry: 1.42,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 25.67,
        cy: 109,
        rx: 3.33,
        ry: 1.25,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 17.5,
        cy: 111.67,
        rx: 2.33,
        ry: 1.25,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 50.83,
        cy: 110.33,
        rx: 3.67,
        ry: 0.94,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 64.67,
        cy: 116.9,
        rx: 3.67,
        ry: 0.94,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 80.25,
        cy: 114.75,
        rx: 4.25,
        ry: 1.58,
        opacity: 0.2
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m8.15 43.27s4.16 1.7 4.49-2.57c0.1-1.3-0.3-3.45-0.94-4.59-1.15-2.07-3.11-6.1-1.05-12.17 0.12-0.35-13.17 11.8-2.5 19.33z",
      fill: "#03A9F4",
      opacity: 0.8
    }),
    _react2.default.createElement("path", {
      d:
        "m118.28 32.17c3.09 2.93 9.11 9.89 3.25 15.12 0 0-5.95 2.34-4.63-5.97 0.7-4.37 0.6-7.06 0.36-8.62-0.09-0.58 0.6-0.93 1.02-0.53z",
      fill: "#03A9F4",
      opacity: 0.8
    }),
    _react2.default.createElement("path", {
      d:
        "m116.29 70.36c7.14-6.68-1.87-18.98-1.91-18.33-0.24 3.92-2.01 9.62-3.68 11.44-1.28 1.38-2.04 3.2-2.04 5.08 0.01 2.63 1.57 3.38 3.07 3.51 1.68 0.13 3.34-0.56 4.56-1.7z",
      fill: "#039BE5",
      opacity: 0.8
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 64.383,
        x2: 64.383,
        y1: 4.3865,
        y2: 94.416,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#03A9F4",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 0.4937
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0277BD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.92 4.73c-20.19-4.54-33.93 13.46-35.54 15.67-1.6-2.22-15.35-20.22-35.54-15.67-19.31 4.35-16.07 20.76-11.75 25.66 0.49 0.55 1.4 0.19 1.41-0.55 0.03-4.44 1.47-15.9 15.64-16.16 15.07-0.27 18.39 13.92 19.03 17.98 0.08 0.49-0.38 0.88-0.86 0.73-4.43-1.4-22.48-5.99-31 9.18-8 14.26 4.77 22.56 9.6 25.07 0.54 0.28 1.12-0.28 0.86-0.82-2.05-4.18-6.36-15.21 2.57-19.51 11.12-5.37 19.49 5.68 20.87 8.74 1.38 3.05 4.13 6.53 4.13 40.63h10.06c0-34.1 2.75-37.58 4.13-40.63s9.75-14.11 20.87-8.74c8.93 4.31 4.62 15.33 2.57 19.51-0.27 0.54 0.32 1.1 0.86 0.82 4.83-2.52 17.61-10.81 9.6-25.07-8.51-15.17-26.57-10.58-31-9.18-0.47 0.15-0.93-0.25-0.86-0.73 0.64-4.06 3.96-18.25 19.03-17.98 14.17 0.25 15.61 11.71 15.64 16.16 0 0.74 0.92 1.1 1.41 0.55 4.34-4.9 7.59-21.31-11.73-25.66z",
      fill: "url(#j)",
      opacity: 0.8
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m7.8 30.48c0.26 2.8 1.25 4.98 2.15 6.6 0.42 0.75 0.77 2.5 0.69 3.46-0.08 1.06-0.34 1.06-0.74 1.06-0.3 0-0.62-0.07-0.82-0.13-2.01-1.48-3.02-3.2-3.08-5.24-0.05-1.97 0.76-3.99 1.8-5.75m2.84-6.55c-0.25 0-13.01 11.91-2.49 19.34 0 0 0.82 0.33 1.75 0.33 1.18 0 2.55-0.53 2.73-2.9 0.1-1.3-0.3-3.45-0.94-4.59-1.14-2.07-3.1-6.1-1.05-12.18 0.01 0 0.01 0 0 0z",
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
          "m119.43 36.37c1.68 2.16 2.6 4.21 2.57 5.9-0.02 1.2-0.51 2.26-1.49 3.24-0.18 0.04-0.42 0.08-0.67 0.08-0.52 0-0.66-0.17-0.72-0.23-0.34-0.4-0.58-1.59-0.24-3.73 0.31-1.93 0.49-3.69 0.55-5.26m-1.57-4.37c-0.34 0-0.66 0.29-0.6 0.7 0.25 1.57 0.34 4.26-0.36 8.62-0.85 5.32 1.28 6.28 2.93 6.28 0.93 0 1.7-0.3 1.7-0.3 5.86-5.23-0.16-12.19-3.25-15.12-0.12-0.13-0.27-0.18-0.42-0.18z",
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
          "m115.47 57.44c0.87 1.91 1.62 4.27 1.57 6.53-0.05 2.03-0.74 3.64-2.11 4.93-0.8 0.75-1.8 1.17-2.76 1.17-0.09 0-0.18 0-0.27-0.01-0.87-0.07-1.23-0.3-1.23-1.52 0-1.32 0.55-2.68 1.51-3.72 1.29-1.41 2.5-4.37 3.29-7.38m-1.07-5.44c-0.01 0-0.02 0.01-0.02 0.03-0.24 3.92-2.01 9.62-3.68 11.44-1.28 1.38-2.04 3.2-2.04 5.08 0.01 2.63 1.57 3.38 3.07 3.51 0.14 0.01 0.29 0.02 0.43 0.02 1.53 0 3.01-0.66 4.13-1.71 6.96-6.52-1.42-18.37-1.89-18.37z",
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
          "m93.43 7c1.93 0 3.89 0.22 5.84 0.66 6.58 1.48 10.66 4.52 12.13 9.02 0.57 1.77 0.68 3.59 0.5 5.27-2.27-6.12-7.55-11.1-17.21-11.28h-0.48c-13.52 0-20.01 10.6-21.57 20.51-0.17 1.06 0.14 2.14 0.83 2.95 0.7 0.82 1.71 1.28 2.78 1.28 0.38 0 0.75-0.06 1.11-0.17 1.53-0.49 5.6-1.61 10.25-1.61 7.93 0 13.72 3.16 17.22 9.4 2.11 3.75 2.69 7.27 1.74 10.45-0.77 2.58-2.46 4.74-4.29 6.44 0.68-3.01 0.87-6.33-0.18-9.37-1.07-3.09-3.21-5.43-6.38-6.96-2.4-1.16-4.87-1.75-7.33-1.75-9.12 0-15.89 8.21-17.58 11.95-0.08 0.18-0.16 0.35-0.25 0.54-1.6 3.36-3.99 8.38-4.14 38.32h-4.08c-0.15-29.94-2.54-34.96-4.14-38.32-0.09-0.19-0.17-0.36-0.25-0.54-1.69-3.74-8.46-11.95-17.58-11.95-2.46 0-4.93 0.59-7.33 1.75-3.17 1.53-5.31 3.87-6.38 6.96-1.05 3.04-0.86 6.36-0.18 9.37-1.84-1.7-3.53-3.86-4.29-6.44-0.95-3.18-0.36-6.7 1.74-10.45 3.5-6.24 9.29-9.4 17.22-9.4 4.66 0 8.72 1.13 10.25 1.61 0.36 0.11 0.73 0.17 1.11 0.17 1.07 0 2.09-0.47 2.78-1.28 0.7-0.81 1-1.89 0.83-2.95-1.57-9.92-8.06-20.51-21.57-20.51h-0.48c-9.66 0.17-14.94 5.15-17.21 11.28-0.18-1.68-0.07-3.5 0.5-5.27 1.46-4.51 5.54-7.54 12.13-9.02 1.96-0.44 3.92-0.66 5.85-0.66 15.2 0 25.49 13.61 26.61 15.16 0.56 0.78 1.47 1.24 2.43 1.24s1.87-0.46 2.43-1.24c1.13-1.55 11.42-15.16 26.62-15.16m0-3c-16.61 0-27.62 14.44-29.05 16.4-1.42-1.96-12.44-16.4-29.04-16.4-2.08 0-4.25 0.23-6.5 0.73-19.31 4.35-16.07 20.76-11.75 25.66 0.16 0.19 0.38 0.27 0.58 0.27 0.42 0 0.82-0.33 0.82-0.82 0.03-4.44 1.47-15.9 15.64-16.16h0.42c14.71 0 17.98 13.96 18.61 17.98 0.07 0.42-0.26 0.77-0.65 0.77-0.07 0-0.13-0.01-0.2-0.03-1.87-0.59-6.17-1.75-11.16-1.75-6.82 0-14.92 2.17-19.84 10.93-8 14.26 4.77 22.56 9.6 25.07 0.1 0.05 0.2 0.07 0.3 0.07 0.43 0 0.78-0.45 0.56-0.9-2.05-4.18-6.36-15.21 2.57-19.51 2.12-1.02 4.14-1.45 6.03-1.45 8.03 0 13.73 7.71 14.84 10.19 1.38 3.05 4.13 6.53 4.13 40.63h10.06c0-34.1 2.75-37.58 4.13-40.63 1.11-2.47 6.81-10.19 14.84-10.19 1.89 0 3.91 0.43 6.03 1.45 8.93 4.31 4.62 15.33 2.57 19.51-0.22 0.44 0.13 0.9 0.56 0.9 0.1 0 0.2-0.02 0.3-0.07 4.83-2.52 17.61-10.81 9.6-25.07-4.92-8.76-13.02-10.93-19.84-10.93-4.99 0-9.29 1.16-11.16 1.75-0.07 0.02-0.14 0.03-0.2 0.03-0.39 0-0.72-0.35-0.65-0.77 0.64-4.02 3.9-17.98 18.61-17.98h0.42c14.17 0.25 15.61 11.71 15.64 16.16 0 0.49 0.41 0.82 0.82 0.82 0.21 0 0.42-0.08 0.58-0.27 4.31-4.9 7.56-21.3-11.75-25.65-2.22-0.51-4.39-0.74-6.47-0.74z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Fountain;
