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

function Toolbox(props) {
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
        y1: 33.149,
        y2: 87.611,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D4292E",
        offset: 0.0646
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D2292E",
        offset: 0.3992
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CA292E",
        offset: 0.5838
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BC2A2F",
        offset: 0.732
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A82B30",
        offset: 0.8607
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8F2C31",
        offset: 0.9757
      }),
      _react2.default.createElement("stop", {
        stopColor: "#892C31",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 6.85,
      y: 33.15,
      width: 114.29,
      height: 47.02,
      fill: "url(#i)"
    }),
    _react2.default.createElement("rect", {
      x: 11.34,
      y: 37,
      width: 105.32,
      height: 39.73,
      fill: "#911616"
    }),
    _react2.default.createElement("polygon", {
      points: "124 86.39 4 86.39 7 80.12 121 80.12",
      fill: "#FF2F29"
    }),
    _react2.default.createElement("polygon", {
      points: "121.51 85.24 6.49 85.24 8.37 81.26 119.63 81.26",
      fill: "#420909"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 5.1667,
        x2: 123.48,
        y1: 105.25,
        y2: 105.25,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D4292E",
        offset: 0.0852
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D2292E",
        offset: 0.5211
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CB292E",
        offset: 0.6781
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C02A2F",
        offset: 0.79
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AF2A2F",
        offset: 0.8805
      }),
      _react2.default.createElement("stop", {
        stopColor: "#992B30",
        offset: 0.9571
      }),
      _react2.default.createElement("stop", {
        stopColor: "#892C31",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 86.39,
      width: 120,
      height: 37.73,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m118.15 36.15v43.17c-0.21 0.7-0.15 1.46 0.17 2.14l2.68 5.61v34.05h-114v-34.05l2.68-5.61c0.32-0.68 0.38-1.44 0.17-2.14v-43.17h108.3m3-3h-114.3v47.02h0.12l-2.97 6.22v37.73h120v-37.73l-2.98-6.22h0.12v-47.02h0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 19.003,
        x2: 19.003,
        y1: 94.429,
        y2: 100.01,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9997
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m20.61 100.06h-3.21c-0.46 0-0.83-0.39-0.83-0.87l-1.54-4.11c0-0.48 0.37-0.87 0.83-0.87h6.3c0.46 0 0.83 0.39 0.83 0.87l-1.54 4.11c-0.01 0.49-0.38 0.87-0.84 0.87z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 19.003,
        x2: 19.003,
        y1: 93.33,
        y2: 99.483,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.00030048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.16 100.06h-0.31c-0.47 0-0.84-0.39-0.84-0.88l-0.77-5.89c0-0.49 0.38-0.88 0.84-0.88h1.85c0.47 0 0.84 0.39 0.84 0.88l-0.77 5.89c0 0.49-0.38 0.88-0.84 0.88z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 19.003,
        x2: 19.003,
        y1: 87.642,
        y2: 94.916,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9997
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m20.6 94.92h-3.2c-0.46 0-0.84-0.38-0.84-0.84v-5.6c0-0.46 0.38-0.84 0.84-0.84h3.2c0.46 0 0.84 0.38 0.84 0.84v5.6c0 0.46-0.37 0.84-0.84 0.84z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 15.24,
        x2: 15.24,
        y1: 88.035,
        y2: 93.456,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.00030048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m15.86 93.46h-1.24c-0.27 0-0.49-0.22-0.49-0.49v-4.45c0-0.27 0.22-0.49 0.49-0.49h1.24c0.27 0 0.49 0.22 0.49 0.49v4.45c0 0.27-0.22 0.49-0.49 0.49z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 22.7,
        x2: 22.7,
        y1: 88.035,
        y2: 93.456,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.00030048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m23.32 93.46h-1.24c-0.27 0-0.49-0.22-0.49-0.49v-4.45c0-0.27 0.22-0.49 0.49-0.49h1.24c0.27 0 0.49 0.22 0.49 0.49v4.45c0 0.27-0.22 0.49-0.49 0.49z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 109.06,
        x2: 109.06,
        y1: 94.429,
        y2: 100.01,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9997
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.67 100.06h-3.22c-0.46 0-0.83-0.39-0.83-0.87l-1.54-4.11c0-0.48 0.37-0.87 0.83-0.87h6.3c0.46 0 0.83 0.39 0.83 0.87l-1.54 4.11c0 0.49-0.37 0.87-0.83 0.87z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 109.06,
        x2: 109.06,
        y1: 93.33,
        y2: 99.483,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.00030048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.21 100.06h-0.31c-0.47 0-0.84-0.39-0.84-0.88l-0.77-5.89c0-0.49 0.38-0.88 0.84-0.88h1.85c0.47 0 0.84 0.39 0.84 0.88l-0.77 5.89c0.01 0.49-0.37 0.88-0.84 0.88z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "q",
        x1: 109.06,
        x2: 109.06,
        y1: 87.642,
        y2: 94.916,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9997
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.66 94.92h-3.2c-0.46 0-0.84-0.38-0.84-0.84v-5.6c0-0.46 0.38-0.84 0.84-0.84h3.2c0.46 0 0.84 0.38 0.84 0.84v5.6c0 0.46-0.37 0.84-0.84 0.84z",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "p",
        x1: 105.3,
        x2: 105.3,
        y1: 88.035,
        y2: 93.456,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.00030048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.92 93.46h-1.24c-0.27 0-0.49-0.22-0.49-0.49v-4.45c0-0.27 0.22-0.49 0.49-0.49h1.24c0.27 0 0.49 0.22 0.49 0.49v4.45c0 0.27-0.22 0.49-0.49 0.49z",
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 112.76,
        x2: 112.76,
        y1: 88.035,
        y2: 93.456,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.00030048
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.38 93.46h-1.24c-0.27 0-0.49-0.22-0.49-0.49v-4.45c0-0.27 0.22-0.49 0.49-0.49h1.24c0.27 0 0.49 0.22 0.49 0.49v4.45c0 0.27-0.22 0.49-0.49 0.49z",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "n",
        x: 4,
        y: 27.24,
        width: 120,
        height: 58.29
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "m"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#n"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#m)"
      },
      _react2.default.createElement("path", {
        d:
          "m32.11 70.48c0.07 0.05 0.08 0.14 0.03 0.21l-3.75 5c-0.05 0.07-0.14 0.08-0.21 0.03l-1.66-1.24c-0.07-0.05-0.08-0.14-0.03-0.21l3.75-5c0.05-0.07 0.14-0.08 0.21-0.03l1.66 1.24z",
        fill: "#8FAEBC"
      }),
      _react2.default.createElement("path", {
        d:
          "m18.96 61.49c-0.92 3.64 0.36 7.65 3.55 10.04 3.2 2.4 7.4 2.5 10.64 0.59l-3.54-5.89-3.94 0.29-6.71-5.03z",
        fill: "#809CA8"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 42.306,
          x2: 47.243,
          y1: 50.61,
          y2: 78.724,
          gradientTransform: "matrix(.7748 -.6322 .6322 .7748 -41.76 47.404)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#BAD4DD",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#B6D1DA",
          offset: 0.3181
        }),
        _react2.default.createElement("stop", {
          stopColor: "#ABC7D2",
          offset: 0.6076
        }),
        _react2.default.createElement("stop", {
          stopColor: "#99B7C4",
          offset: 0.8851
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8FAEBC",
          offset: 0.999
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m23.49 54.67 7.17 5.37 0.38 3.16-8.08 10.8c0.19 0.08 0.39 0.16 0.6 0.23 0.02 0.01 0.03 0.01 0.05 0.02 0.01 0 0.03 0.01 0.04 0.01 0.78 0.26 1.57 0.42 2.37 0.47 1.84 0.21 3.8 0.18 5.12 0.21 3.66 0.09 7.43 3.08 9.47 4.98l29.43 29.87 5.71-7.43-33.51-31.97-0.24-0.24c-5.24-5.03-3.37-8.98-5.52-12.25-0.54-0.83-0.89-1.27-1.13-1.47-0.38-0.41-0.8-0.79-1.27-1.14-3.19-2.38-7.36-2.49-10.59-0.62z",
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 48.579,
          x2: 49.688,
          y1: 77.265,
          y2: 95,
          gradientTransform: "matrix(.7748 -.6322 .6322 .7748 -41.76 47.404)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#D4292E",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D2262B",
          offset: 0.0586
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C30A13",
          offset: 0.6533
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BD000A",
          offset: 1
        })
      ),
      _react2.default.createElement("polygon", {
        points: "40.89 80.88 46.58 73.88 76.39 102.31 70.09 110.51",
        fill: "url(#k)"
      }),
      _react2.default.createElement("path", {
        d:
          "m47.22 73.39c0.41 0.3 0.5 0.87 0.2 1.28l-5.07 7.05c-0.3 0.41-0.87 0.5-1.28 0.2s-0.5-0.87-0.2-1.28l5.07-7.05c0.3-0.41 0.87-0.5 1.28-0.2z",
        fill: "#FF3238"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: 83.172,
          x2: 109.06,
          y1: 109.26,
          y2: 57.956,
          gradientTransform: "matrix(.9763 .2165 -.2165 .9763 19.667 -21.723)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#8FAEBC",
          offset: 0.00098157
        }),
        _react2.default.createElement("stop", {
          stopColor: "#94B3C0",
          offset: 0.2609
        }),
        _react2.default.createElement("stop", {
          stopColor: "#A4C0CC",
          offset: 0.5869
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BAD4DD",
          offset: 0.9056
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m116.27 62.68-4.05 5.17-6.03-0.3-1.72-5.78 4.07-5.15s-4.41-0.97-7.95 3.53c-3.34 4.25 0 9.1 0 9.1l-16.25 20.58-5.53-0.59-6.39 8.1 3.2 8.99-0.05 0.06v0.01l0.07 0.01 0.02 0.07h0.01l0.05-0.06 9.5 0.98 6.36-8.12-1.88-5.23 16.17-20.65s5.51 2.09 8.85-2.15c3.54-4.52 1.55-8.57 1.55-8.57zm-32.57 40.51-5.12-0.53-1.72-4.85 3.45-4.37 5.09 0.55 1.74 4.82-3.44 4.38z",
        fill: "url(#j)"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.56 55.19-0.91 12.08c-0.06-0.01-0.11-0.03-0.17-0.04-1.45-0.25-2.47 0.5-2.67 1.67-0.2 1.16 0.48 2.29 1.94 2.54l-4.94 3.48s-0.78-1.76-0.23-4.92c0.59-3.39 5.28-15.62 5.28-15.62l1.7 0.81z",
        fill: "#8FAEBC"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#FFAB2E"
        },
        _react2.default.createElement("path", {
          d:
            "m78.04 110.54c-0.05-4.07-1.25-8.69-2.41-13.15-1.04-4.02-2.03-7.81-2.08-10.94 0-0.19 0-0.39 0.01-0.57l0.01-0.24h0.25 0.01l3.99-0.07-0.02 0.27c-0.02 0.22-0.02 0.4-0.02 0.54 0.04 2.62 0.96 6.18 1.94 9.94l0.01 0.02c1.22 4.7 2.48 9.57 2.54 14.15v0.24l-4.23 0.06v-0.25z"
        }),
        _react2.default.createElement("path", {
          d:
            "m77.56 85.82c-0.02 0.21-0.02 0.4-0.02 0.56 0.04 2.65 0.97 6.22 1.95 10.01 1.22 4.69 2.48 9.55 2.54 14.1l-3.74 0.05c-0.05-4.1-1.26-8.73-2.42-13.21-1.04-4.01-2.02-7.79-2.07-10.89 0-0.17 0-0.36 0.01-0.56h0.02l3.73-0.06m0.52-0.5-0.54 0.01-3.71 0.06h-0.03l-0.48-0.01-0.02 0.47c-0.01 0.18-0.02 0.39-0.01 0.59 0.05 3.16 1.04 6.97 2.09 11 1.15 4.45 2.35 9.05 2.4 13.09l0.01 0.49 0.49-0.01 3.74-0.05 0.49-0.01-0.01-0.49c-0.06-4.61-1.32-9.48-2.55-14.2v-0.01c-0.97-3.76-1.89-7.3-1.94-9.89 0-0.13 0-0.3 0.02-0.51l0.05-0.53z"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m74.28 80.66c-0.04-0.58-0.44-0.79-0.72-0.86l0.64-3.68c1.23 0.21 3.6 1.38 3.81 4.27 0.07 0.91-0.07 2.12-0.22 3.32-0.08-0.02-0.17-0.03-0.26-0.03l-3.51 0.06c0.01-0.08 0.02-0.15 0.03-0.23 0.13-1.05 0.27-2.24 0.23-2.85z",
        fill: "#8FAEBC"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#FFC431"
        },
        _react2.default.createElement("path", {
          d:
            "m73.52 86.18c-0.57-0.11-0.99-0.61-1-1.19-0.01-0.33 0.12-0.64 0.35-0.88s0.54-0.37 0.86-0.38l3.74-0.06c0.07 0 0.15 0.01 0.24 0.02 0.02 0 0.04 0.01 0.06 0.01 0.55 0.13 0.94 0.61 0.95 1.18 0.01 0.68-0.53 1.24-1.21 1.25l-3.75 0.06h-0.02c-0.06 0.01-0.14 0-0.22-0.01z"
        }),
        _react2.default.createElement("path", {
          d:
            "m77.68 83.86c0.02 0 0.04 0.01 0.06 0.01 0.46 0.11 0.82 0.52 0.82 1.02 0.01 0.59-0.46 1.08-1.05 1.09h-0.01l-3.73 0.06h-0.02c-0.07 0-0.14-0.01-0.2-0.02-0.49-0.09-0.86-0.51-0.87-1.03-0.01-0.59 0.46-1.08 1.05-1.09h0.23l3.51-0.06c0.07 0 0.14 0 0.21 0.02m0.06-0.32c-0.1-0.02-0.18-0.03-0.27-0.02l-3.51 0.06h-0.23c-0.37 0.01-0.72 0.16-0.98 0.43s-0.4 0.62-0.39 0.99c0.01 0.66 0.49 1.22 1.13 1.34 0.08 0.02 0.16 0.02 0.24 0.02h0.05l3.73-0.06h0.01c0.76-0.01 1.38-0.65 1.37-1.42-0.01-0.64-0.45-1.18-1.08-1.33-0.02 0-0.05-0.01-0.07-0.01z"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          fill: "#FFAB2E"
        },
        _react2.default.createElement("path", {
          d:
            "m51.27 105.33 0.09-0.23c1.6-4.29 4.43-8.45 7.17-12.46 2.2-3.23 4.27-6.26 5.19-8.71 0.05-0.13 0.1-0.29 0.16-0.51l0.07-0.26 3.73 1.41 0.02 0.01 0.22 0.08-0.07 0.23c-0.05 0.17-0.11 0.36-0.18 0.54-1.1 2.92-3.31 6.17-5.65 9.6-2.6 3.81-5.28 7.75-6.71 11.57l-0.09 0.23-3.95-1.5z"
        }),
        _react2.default.createElement("path", {
          d:
            "m64.11 83.48 3.49 1.32h0.02c-0.06 0.18-0.11 0.36-0.18 0.53-1.09 2.9-3.29 6.13-5.62 9.55-2.61 3.82-5.3 7.78-6.73 11.62l-3.5-1.31c1.59-4.26 4.42-8.41 7.15-12.42 2.2-3.23 4.28-6.28 5.21-8.76 0.05-0.14 0.11-0.32 0.16-0.53m-0.32-0.65-0.14 0.52c-0.06 0.21-0.11 0.37-0.16 0.49-0.91 2.42-2.97 5.45-5.15 8.65l-0.01 0.01c-2.75 4.03-5.59 8.2-7.2 12.52l-0.17 0.46 0.46 0.17 3.5 1.31 0.46 0.17 0.17-0.46c1.42-3.79 4.09-7.72 6.68-11.51 2.35-3.44 4.56-6.7 5.68-9.65 0.07-0.19 0.13-0.39 0.19-0.56l0.14-0.45-0.44-0.16-0.03-0.01h-0.01l-3.46-1.31-0.51-0.19z"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m68.94 79.73c0.24-0.53 0.68-0.6 0.97-0.56l0.64-3.68c-1.23-0.21-3.86 0.08-5.03 2.73-0.37 0.84-0.65 2.02-0.91 3.2 0.09 0.01 0.17 0.03 0.26 0.06l3.28 1.24c0.02-0.08 0.03-0.15 0.05-0.23 0.23-1.03 0.49-2.2 0.74-2.76z",
        fill: "#8FAEBC"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#FFC431"
        },
        _react2.default.createElement("path", {
          d:
            "m67.7 85.17c-0.06-0.01-0.13-0.03-0.19-0.05l-0.02-0.01-3.49-1.32c-0.32-0.12-0.56-0.35-0.69-0.65-0.14-0.3-0.15-0.63-0.03-0.94 0.2-0.53 0.73-0.85 1.29-0.78 0.04 0 0.07 0.01 0.11 0.02 0.07 0.01 0.13 0.03 0.19 0.05l3.5 1.32c0.64 0.24 0.96 0.95 0.72 1.59-0.22 0.55-0.8 0.88-1.39 0.77z"
        }),
        _react2.default.createElement("path", {
          d:
            "m64.65 81.59c0.05 0.01 0.11 0.02 0.16 0.04l3.28 1.24 0.22 0.08c0.55 0.21 0.83 0.83 0.62 1.38-0.19 0.49-0.7 0.77-1.2 0.67-0.05-0.01-0.11-0.03-0.16-0.04h-0.02l-3.49-1.32h-0.01c-0.55-0.21-0.83-0.83-0.62-1.38 0.18-0.47 0.64-0.73 1.12-0.68 0.03 0 0.07 0 0.1 0.01m0.06-0.32c-0.04-0.01-0.08-0.01-0.12-0.02-0.64-0.07-1.24 0.29-1.46 0.89-0.13 0.35-0.12 0.73 0.03 1.07s0.43 0.6 0.78 0.73l3.5 1.32 0.02 0.01h0.02c0.06 0.02 0.13 0.04 0.2 0.05 0.67 0.13 1.32-0.24 1.56-0.88 0.27-0.72-0.09-1.53-0.81-1.8l-0.22-0.08-3.28-1.24c-0.07-0.02-0.14-0.04-0.22-0.05z"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m72.42 71.03c0.29 0.16 0.62 0.27 0.98 0.34 1.45 0.25 2.64-0.49 2.84-1.65 0.19-1.07-0.5-2.11-1.75-2.47l3.23-11.71 1.87-0.04s0.28 12.99-0.31 16.35c-0.4 2.32-1.23 3.69-1.63 4.25 0 0.29-0.02 0.58-0.07 0.88-0.48 2.76-3.11 4.61-5.87 4.13s-4.61-3.11-4.13-5.87c0.41-2.42 2.48-4.14 4.84-4.21z",
        fill: "#BAD4DD"
      }),
      _react2.default.createElement("path", {
        d:
          "m70.21 75.7c-0.23 1.31 0.65 2.55 1.96 2.78s2.55-0.65 2.78-1.96-0.65-2.55-1.96-2.78-2.56 0.65-2.78 1.96z",
        fill: "#8FAEBC"
      })
    )
  );
}

exports.default = Toolbox;
