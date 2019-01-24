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

function Clapper(props) {
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
        id: "l",
        cx: 63.048,
        cy: 52.7,
        r: 76.756,
        gradientTransform: "matrix(1 0 0 1.0008 0 -.0537)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#00796B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#007365",
        offset: 0.2831
      }),
      _react2.default.createElement("stop", {
        stopColor: "#006355",
        offset: 0.6536
      }),
      _react2.default.createElement("stop", {
        stopColor: "#004D40",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116.05 124h-104c-2.21 0-4-1.79-4-4v-72.06h112v72.06c0 2.21-1.79 4-4 4z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117.05 50.94v69.06c0 0.55-0.45 1-1 1h-104c-0.55 0-1-0.45-1-1v-69.06h106m3-3h-112v72.06c0 2.21 1.79 4 4 4h104c2.21 0 4-1.79 4-4v-72.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 61.136,
        x2: 61.136,
        y1: 29.651,
        y2: 52.558,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "45.42 35.67 61.14 51.94 76.85 51.94 61.14 35.67",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 17.918,
        x2: 17.918,
        y1: 36.007,
        y2: 52.385,
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
    _react2.default.createElement("polygon", {
      points: "6.13 35.67 6.13 51.94 29.7 51.94 13.99 35.67",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 29.704,
        x2: 29.704,
        y1: 29.651,
        y2: 52.558,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "13.99 35.67 29.7 51.94 45.42 51.94 29.7 35.67",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 45.42,
        x2: 45.42,
        y1: 36.007,
        y2: 52.385,
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
    _react2.default.createElement("polygon", {
      points: "29.7 35.67 45.42 51.94 61.14 51.94 45.42 35.67",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 108.28,
        x2: 108.28,
        y1: 36.007,
        y2: 52.385,
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
    _react2.default.createElement("polygon", {
      points: "108.28 35.67 92.57 35.67 108.28 51.94 124 51.94",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 116.14,
        x2: 116.14,
        y1: 29.651,
        y2: 52.558,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "124 35.67 108.28 35.67 124 51.94",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 92.568,
        x2: 92.568,
        y1: 29.651,
        y2: 52.558,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "76.85 35.67 92.57 51.94 108.28 51.94 92.57 35.67",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 76.852,
        x2: 76.852,
        y1: 36.007,
        y2: 52.385,
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
    _react2.default.createElement("polygon", {
      points: "61.14 35.67 76.85 51.94 92.57 51.94 76.85 35.67",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "v",
        x1: 61.187,
        x2: 61.187,
        y1: 5.4576,
        y2: 28.364,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "42.95 14.36 60.67 28.42 76.25 26.35 58.53 12.29",
      fill: "url(#v)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "u",
        x1: 17.967,
        x2: 17.967,
        y1: 11.819,
        y2: 28.197,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
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
    _react2.default.createElement("polygon", {
      points: "4 19.54 6.14 35.67 29.51 32.56 11.79 18.5",
      fill: "url(#u)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "t",
        x1: 29.755,
        x2: 29.755,
        y1: 5.461,
        y2: 28.368,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "11.79 18.5 29.51 32.56 45.09 30.49 27.37 16.43",
      fill: "url(#t)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "s",
        x1: 45.471,
        x2: 45.471,
        y1: 11.815,
        y2: 28.193,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
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
    _react2.default.createElement("polygon", {
      points: "27.37 16.43 45.09 30.49 60.67 28.42 42.95 14.36",
      fill: "url(#s)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "r",
        x1: 108.34,
        x2: 108.34,
        y1: 11.808,
        y2: 28.186,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
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
    _react2.default.createElement("polygon", {
      points: "105.26 6.07 89.68 8.14 107.4 22.2 122.98 20.13",
      fill: "url(#r)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "q",
        x1: 116.19,
        x2: 116.19,
        y1: 5.4507,
        y2: 28.357,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "120.84 4 105.26 6.07 122.98 20.13",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "p",
        x1: 92.62,
        x2: 92.62,
        y1: 5.4542,
        y2: 28.361,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "74.11 10.22 91.83 24.27 107.4 22.2 89.68 8.14",
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 76.903,
        x2: 76.903,
        y1: 11.812,
        y2: 28.19,
        gradientTransform: "matrix(.9913 -.1317 .1317 .9913 -3.6399 8.9722)",
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
    _react2.default.createElement("polygon", {
      points: "58.53 12.29 76.25 26.35 91.83 24.27 74.11 10.22",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 38.67v10.27h-111.87v-10.27h111.87m3-3h-117.87v16.27h117.87v-16.27z"
      }),
      _react2.default.createElement("path", {
        d:
          "m118.26 7.37 1.35 10.18-12.61 1.68-15.57 2.07-62.32 8.28-20.39 2.72-1.35-10.18 4.82-0.64 93.48-12.42 12.59-1.69m2.58-3.37-93.48 12.42-15.57 2.08-7.79 1.04 2.14 16.13 23.37-3.11 93.48-12.42-2.15-16.14z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: 16.048,
        x2: 112.05,
        y1: 69.955,
        y2: 69.955,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 16.05,
      y: 67.95,
      width: 96,
      height: 4,
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 16.048,
        x2: 112.05,
        y1: 85.968,
        y2: 85.968,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 16.05,
      y: 83.97,
      width: 96,
      height: 4,
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 16.048,
        x2: 112.05,
        y1: 101.98,
        y2: 101.98,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 16.05,
      y: 99.98,
      width: 96,
      height: 4,
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 84.048,
        x2: 88.048,
        y1: 108.99,
        y2: 108.99,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "84.05 115.99 84.05 101.98 88.05 101.98 88.05 115.99",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 40.048,
        x2: 44.048,
        y1: 108.99,
        y2: 108.99,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "40.05 115.99 40.05 101.98 44.05 101.98 44.05 115.99",
      fill: "url(#i)"
    }),
    _react2.default.createElement("rect", {
      x: 16.05,
      y: 59.95,
      width: 16,
      height: 4,
      fill: "#B2DFDB"
    }),
    _react2.default.createElement("rect", {
      x: 16.05,
      y: 75.96,
      width: 24,
      height: 4,
      fill: "#B2DFDB"
    }),
    _react2.default.createElement("rect", {
      x: 16.05,
      y: 91.97,
      width: 16,
      height: 4,
      fill: "#B2DFDB"
    })
  );
}

exports.default = Clapper;
