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

function FullMoonWithFace(props) {
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
        id: "an",
        cx: 55.053,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF157",
        offset: 0.282
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEEE54",
        offset: 0.5225
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAE44A",
        offset: 0.7208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4D538",
        offset: 0.9035
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F0C92C",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#an)"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ac",
        cx: 2.548,
        cy: 1.4626,
        r: 19.126,
        gradientTransform: "matrix(.8574 .5146 -.5146 .8574 25.836 78.948)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.16 92.16c-3.14 7.61-12.27 11.07-20.4 7.72s-12.16-12.23-9.02-19.85c3.14-7.61 12.27-11.07 20.4-7.72 8.12 3.35 12.16 12.24 9.02 19.85z",
      fill: "url(#ac)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 38,
        cy: 98.421,
        r: 13.252,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m46.26 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z",
      fill: "url(#r)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,8c30.88,0,56,25.12,56,56s-25.12,56-56,56S8,94.88,8,64S33.12,8,64,8 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 46.045,
        cy: 102.24,
        r: 17.206,
        gradientTransform: "matrix(1.1129 0 0 .8206 11.941 21.164)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.12,
      cy: 108.5,
      rx: 12.88,
      ry: 9.5,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 107.51,
        cy: 45.055,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 141.88 -66.655)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.19 45.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 90.075,
        cy: 90.026,
        r: 14.343,
        fx: 89.326,
        fy: 89.168,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.072 -21.747)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.45 73.94c-0.49 5.69-5.48 9.92-11.15 9.43s-9.87-5.49-9.38-11.19c0.49-5.69 5.48-9.92 11.15-9.43s9.87 5.5 9.38 11.19z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 75.037,
        cy: 48.636,
        r: 7.4702,
        fx: 74.647,
        fy: 48.189,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.389 -25.462)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98.24 26.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91 5.15 2.86 4.89 5.83z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 85.219,
        cy: 110.04,
        r: 12.604,
        fx: 84.561,
        fy: 109.28,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.918 -19.951)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.14 92.69c-0.43 5-4.81 8.72-9.79 8.29s-8.67-4.83-8.25-9.83 4.81-8.72 9.79-8.29c4.99 0.42 8.68 4.83 8.25 9.83z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ax",
        cx: 196.05,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF157",
        offset: 0.282
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEEE54",
        offset: 0.5225
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAE44A",
        offset: 0.7208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4D538",
        offset: 0.9035
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F0C92C",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 204.99,
      cy: 64,
      r: 60,
      fill: "url(#ax)"
    }),
    _react2.default.createElement("circle", {
      cx: 204.99,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement("circle", {
      cx: 204.99,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aw",
        cx: 123.44,
        cy: -71.097,
        r: 19.126,
        gradientTransform: "matrix(.8574 .5146 -.5146 .8574 25.836 78.948)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m181.16 92.16c-3.14 7.61-12.27 11.07-20.4 7.72s-12.17-12.24-9.03-19.85 12.27-11.07 20.4-7.72c8.12 3.35 12.16 12.24 9.03 19.85z",
      fill: "url(#aw)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "av",
        cx: 178.99,
        cy: 98.421,
        r: 13.252,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m187.25 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76 4.68-6.76 8.74-6 6.73 4.69 5.96 8.76z",
      fill: "url(#av)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m204.99 8c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "au",
        cx: 172.73,
        cy: 102.24,
        r: 17.206,
        gradientTransform: "matrix(1.1129 0 0 .8206 11.941 21.164)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 205.11,
      cy: 108.5,
      rx: 12.88,
      ry: 9.5,
      fill: "url(#au)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "at",
        cx: 248.47,
        cy: 41.995,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 270.18 -207.08)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m255.18 45.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66 10.01 4.65 9.89 10.1z",
      fill: "url(#at)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "as",
        cx: 230.56,
        cy: 78.014,
        r: 14.343,
        fx: 229.81,
        fy: 77.156,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.164 -22.825)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m259.45 73.94c-0.49 5.69-5.48 9.92-11.15 9.43s-9.87-5.49-9.38-11.19c0.49-5.69 5.48-9.92 11.15-9.43 5.66 0.49 9.86 5.5 9.38 11.19z",
      fill: "url(#as)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ar",
        cx: 215.52,
        cy: 36.624,
        r: 7.4702,
        fx: 215.13,
        fy: 36.177,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.481 -26.54)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m239.24 26.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#ar)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aq",
        cx: 225.7,
        cy: 98.026,
        r: 12.604,
        fx: 225.04,
        fy: 97.272,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.01 -21.029)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m251.13 92.69c-0.43 5-4.81 8.72-9.79 8.29s-8.67-4.83-8.25-9.83 4.81-8.72 9.79-8.29c4.99 0.42 8.68 4.83 8.25 9.83z",
      fill: "url(#aq)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ap",
        cx: 334.04,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF157",
        offset: 0.282
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEEE54",
        offset: 0.5225
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAE44A",
        offset: 0.7208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4D538",
        offset: 0.9035
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F0C92C",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 342.99,
      cy: 64,
      r: 60,
      fill: "url(#ap)"
    }),
    _react2.default.createElement("circle", {
      cx: 342.99,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement("circle", {
      cx: 342.99,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ao",
        cx: 241.75,
        cy: -142.11,
        r: 19.126,
        gradientTransform: "matrix(.8574 .5146 -.5146 .8574 25.836 78.948)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m319.15 92.16c-3.14 7.61-12.27 11.07-20.4 7.72s-12.17-12.24-9.03-19.85 12.27-11.07 20.4-7.72c8.12 3.35 12.17 12.24 9.03 19.85z",
      fill: "url(#ao)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "am",
        cx: 316.99,
        cy: 98.421,
        r: 13.252,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m325.24 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.73 4.69 5.96 8.76z",
      fill: "url(#am)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m342.99 8c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.87-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "al",
        cx: 296.73,
        cy: 102.24,
        r: 17.206,
        gradientTransform: "matrix(1.1129 0 0 .8206 11.941 21.164)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 343.1,
      cy: 108.5,
      rx: 12.88,
      ry: 9.5,
      fill: "url(#al)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ak",
        cx: 386.43,
        cy: 39,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 395.74 -344.51)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m393.17 45.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
      fill: "url(#ak)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aj",
        cx: 368.05,
        cy: 66.258,
        r: 14.343,
        fx: 367.3,
        fy: 65.4,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.254 -23.88)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m397.44 73.94c-0.49 5.69-5.48 9.92-11.15 9.43s-9.87-5.49-9.38-11.19c0.49-5.69 5.48-9.92 11.15-9.43s9.87 5.5 9.38 11.19z",
      fill: "url(#aj)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ai",
        cx: 353.01,
        cy: 24.868,
        r: 7.4702,
        fx: 352.62,
        fy: 24.421,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.572 -27.595)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m377.23 26.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#ai)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ah",
        cx: 363.19,
        cy: 86.27,
        r: 12.604,
        fx: 362.53,
        fy: 85.516,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.1 -22.084)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m389.12 92.69c-0.43 5-4.81 8.72-9.79 8.29s-8.67-4.83-8.25-9.83 4.81-8.72 9.79-8.29c4.99 0.42 8.68 4.83 8.25 9.83z",
      fill: "url(#ah)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ag",
        cx: 469.03,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF157",
        offset: 0.282
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEEE54",
        offset: 0.5225
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAE44A",
        offset: 0.7208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4D538",
        offset: 0.9035
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F0C92C",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 477.98,
      cy: 64,
      r: 60,
      fill: "url(#ag)"
    }),
    _react2.default.createElement("circle", {
      cx: 477.98,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement("circle", {
      cx: 477.98,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "af",
        cx: 357.5,
        cy: -211.59,
        r: 19.126,
        gradientTransform: "matrix(.8574 .5146 -.5146 .8574 25.836 78.948)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m454.14 92.16c-3.14 7.61-12.27 11.07-20.4 7.72s-12.17-12.24-9.03-19.85 12.27-11.07 20.4-7.72 12.17 12.24 9.03 19.85z",
      fill: "url(#af)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ae",
        cx: 451.98,
        cy: 98.421,
        r: 13.252,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m460.24 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z",
      fill: "url(#ae)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m477.98 8c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ad",
        cx: 418.03,
        cy: 102.24,
        r: 17.206,
        gradientTransform: "matrix(1.1129 0 0 .8206 11.941 21.164)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 478.1,
      cy: 108.5,
      rx: 12.88,
      ry: 9.5,
      fill: "url(#ad)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ab",
        cx: 521.4,
        cy: 36.07,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 518.57 -478.95)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m528.17 45.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
      fill: "url(#ab)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aa",
        cx: 502.55,
        cy: 54.758,
        r: 14.343,
        fx: 501.8,
        fy: 53.9,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.342 -24.912)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m532.43 73.94c-0.49 5.69-5.48 9.92-11.15 9.43-5.67-0.48-9.87-5.49-9.38-11.19 0.49-5.69 5.48-9.92 11.15-9.43s9.87 5.5 9.38 11.19z",
      fill: "url(#aa)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "z",
        cx: 487.51,
        cy: 13.368,
        r: 7.4702,
        fx: 487.12,
        fy: 12.921,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.66 -28.628)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m512.22 26.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#z)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "y",
        cx: 497.69,
        cy: 74.77,
        r: 12.604,
        fx: 497.04,
        fy: 74.016,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.188 -23.116)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m524.12 92.69c-0.43 5-4.81 8.72-9.79 8.29s-8.67-4.83-8.25-9.83 4.81-8.72 9.79-8.29c4.98 0.42 8.68 4.83 8.25 9.83z",
      fill: "url(#y)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "x",
        cx: -101.95,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF157",
        offset: 0.282
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEEE54",
        offset: 0.5225
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAE44A",
        offset: 0.7208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4D538",
        offset: 0.9035
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F0C92C",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: -93,
      cy: 64,
      r: 60,
      fill: "url(#x)"
    }),
    _react2.default.createElement("circle", {
      cx: -93,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement("circle", {
      cx: -93,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "w",
        cx: -132.07,
        cy: 82.26,
        r: 19.126,
        gradientTransform: "matrix(.8574 .5146 -.5146 .8574 25.836 78.948)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-116.84 92.16c-3.14 7.61-12.27 11.07-20.4 7.72s-12.17-12.24-9.03-19.85 12.27-11.07 20.4-7.72 12.17 12.24 9.03 19.85z",
      fill: "url(#w)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "v",
        cx: -119,
        cy: 98.421,
        r: 13.252,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-110.74 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z",
      fill: "url(#v)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-93 8c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "u",
        cx: -95.027,
        cy: 102.24,
        r: 17.206,
        gradientTransform: "matrix(1.1129 0 0 .8206 11.941 21.164)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: -92.88,
      cy: 108.5,
      rx: 12.88,
      ry: 9.5,
      fill: "url(#u)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "t",
        cx: -49.449,
        cy: 48.462,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 -.9746 89.708)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-42.81 45.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66 10.01 4.65 9.89 10.1z",
      fill: "url(#t)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "s",
        cx: -66.354,
        cy: 103.4,
        r: 14.343,
        fx: -67.104,
        fy: 102.54,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.969 -20.546)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-38.55 73.94c-0.49 5.69-5.48 9.92-11.15 9.43s-9.87-5.49-9.38-11.19c0.49-5.69 5.48-9.92 11.15-9.43s9.87 5.5 9.38 11.19z",
      fill: "url(#s)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: -81.392,
        cy: 62.011,
        r: 7.4702,
        fx: -81.782,
        fy: 61.564,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.286 -24.262)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-58.76 26.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "p",
        cx: -71.21,
        cy: 123.41,
        r: 12.604,
        fx: -71.868,
        fy: 122.66,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.815 -18.75)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        offset: 0.0061135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0.1074,
        offset: 0.6098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0A800",
        stopOpacity: 0,
        offset: 0.6825
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-46.86 92.69c-0.43 5-4.81 8.72-9.79 8.29s-8.67-4.83-8.25-9.83 4.81-8.72 9.79-8.29c4.99 0.42 8.68 4.83 8.25 9.83z",
      fill: "url(#p)"
    }),
    _react2.default.createElement("path", {
      d:
        "m40.65 82.29c1.58 1.6 3.34 2.72 5.23 3.56 1.88 0.85 3.85 1.46 5.86 1.92 4.02 0.92 8.16 1.31 12.28 1.34 4.13 0.03 8.26-0.34 12.25-1.27 3.97-0.97 7.86-2.43 11.07-5.55-0.69 2.15-2.18 4.04-3.91 5.59-1.76 1.54-3.81 2.72-5.94 3.63-4.29 1.79-8.92 2.55-13.49 2.52-4.58-0.04-9.17-0.83-13.45-2.6-2.13-0.9-4.18-2.04-5.96-3.56-1.75-1.52-3.3-3.41-3.94-5.58z"
    }),
    _react2.default.createElement("path", {
      d:
        "m92 84.62c-0.79 0.34-1.72 0.3-2.54 0.04-0.83-0.25-1.6-0.7-2.25-1.28-0.65-0.57-1.18-1.29-1.52-2.09-0.34-0.79-0.5-1.75-0.16-2.54 0.23 0.81 0.64 1.43 1.08 2.02 0.45 0.59 0.96 1.11 1.51 1.6 1.09 0.99 2.27 1.81 3.88 2.25z",
      fill: "#C97F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m35.51 84.62c1.61-0.45 2.79-1.26 3.89-2.24 0.54-0.49 1.06-1.02 1.51-1.6 0.44-0.59 0.84-1.21 1.08-2.02 0.34 0.8 0.18 1.75-0.16 2.54-0.35 0.8-0.88 1.51-1.52 2.09s-1.41 1.02-2.25 1.28c-0.83 0.25-1.76 0.29-2.55-0.05z",
      fill: "#C97F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m227.33 161.96c-0.79 0.34-1.72 0.3-2.54 0.04-0.83-0.25-1.6-0.7-2.25-1.28-0.65-0.57-1.18-1.29-1.52-2.09-0.34-0.79-0.5-1.75-0.16-2.54 0.23 0.81 0.64 1.43 1.08 2.02 0.45 0.59 0.96 1.11 1.51 1.6 1.09 0.99 2.27 1.8 3.88 2.25z",
      fill: "#C97F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m170.84 161.96c1.61-0.45 2.79-1.26 3.89-2.24 0.54-0.49 1.06-1.02 1.51-1.6 0.44-0.59 0.84-1.21 1.08-2.02 0.34 0.8 0.18 1.75-0.16 2.54-0.35 0.8-0.88 1.51-1.52 2.09s-1.41 1.02-2.25 1.28c-0.84 0.24-1.76 0.29-2.55-0.05z",
      fill: "#C97F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m319.64 82.29c1.58 1.6 3.34 2.72 5.23 3.56 1.88 0.85 3.85 1.46 5.86 1.92 4.02 0.92 8.16 1.31 12.28 1.34 4.13 0.03 8.26-0.34 12.25-1.27 3.97-0.97 7.86-2.43 11.07-5.55-0.69 2.15-2.18 4.04-3.91 5.59-1.76 1.54-3.81 2.72-5.94 3.63-4.29 1.79-8.92 2.55-13.49 2.52-4.58-0.04-9.17-0.83-13.45-2.6-2.13-0.9-4.18-2.04-5.96-3.56-1.75-1.52-3.3-3.41-3.94-5.58z"
    }),
    _react2.default.createElement("path", {
      d:
        "m370.99 84.62c-0.79 0.34-1.72 0.3-2.54 0.04-0.83-0.25-1.6-0.7-2.25-1.28-0.65-0.57-1.18-1.29-1.52-2.09-0.34-0.79-0.5-1.75-0.16-2.54 0.23 0.81 0.64 1.43 1.08 2.02 0.45 0.59 0.96 1.11 1.51 1.6 1.09 0.99 2.27 1.81 3.88 2.25z",
      fill: "#C97F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m314.5 84.62c1.61-0.45 2.79-1.26 3.89-2.24 0.54-0.49 1.06-1.02 1.51-1.6 0.44-0.59 0.84-1.21 1.08-2.02 0.34 0.8 0.18 1.75-0.16 2.54-0.35 0.8-0.88 1.51-1.52 2.09s-1.41 1.02-2.25 1.28c-0.84 0.25-1.76 0.29-2.55-0.05z",
      fill: "#C97F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.54 51.11c1.38-1.98 2.93-3.58 7.8-3.58 6.21 0 12.03 2.36 15.99 6.11 1.95 1.9-0.57 4.49-2.62 3.15-2.78-1.77-5.98-3.06-9.35-3.79 0.23 0.81 0.36 1.71 0.36 2.68 0 4.9-3.17 7.85-6.67 7.85s-6.67-2.95-6.67-7.85c0.01-1.8 0.44-3.34 1.16-4.57z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m28.12 51.11c1.38-1.98 2.93-3.58 7.8-3.58 6.21 0 12.03 2.36 15.99 6.11 1.95 1.9-0.57 4.49-2.62 3.15-2.78-1.77-5.98-3.06-9.35-3.79 0.23 0.81 0.36 1.71 0.36 2.68 0 4.9-3.17 7.85-6.67 7.85s-6.67-2.95-6.67-7.85c0-1.8 0.44-3.34 1.16-4.57z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m502.72 82.11c-6.92 4.02-15.48 6.4-24.74 6.4s-17.82-2.38-24.74-6.4c-1.27-0.74-2.61 0.85-1.66 1.97 6.27 7.33 15.76 12 26.4 12 10.63 0 20.13-4.67 26.4-12 0.95-1.12-0.39-2.71-1.66-1.97z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
      fill: "#4C3734"
    }),
    _react2.default.createElement("path", {
      d:
        "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
      fill: "none",
      stroke: "#4C3734",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "filter",
        {
          id: "ba",
          x: 184.99,
          y: 85.17,
          width: 40,
          height: 10.01,
          filterUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("feColorMatrix", {
          colorInterpolationFilters: "sRGB",
          result: "source",
          values: "-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
        })
      )
    ),
    _react2.default.createElement(
      "mask",
      {
        id: "o",
        x: 184.99,
        y: 85.17,
        width: 40,
        height: 10.01,
        maskUnits: "userSpaceOnUse"
      },
      _react2.default.createElement(
        "g",
        {
          filter: "url(#ba)"
        },
        _react2.default.createElement("image", {
          transform: "translate(182.99 82.833)",
          width: 44,
          height: 15,
          overflow: "visible",
          xlinkHref:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAGPAAABvgAAAjT/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIABAALQMBIgACEQEDEQH/ xAB9AAADAQEAAAAAAAAAAAAAAAABAgMEBgEBAAAAAAAAAAAAAAAAAAAAABAAAgICAwEAAAAAAAAA AAAAAwUAAQIEEBMVFBEAAgECBAMJAAAAAAAAAAAAAQIDAAQRUdI0YZKTIRIichMzUxQFEgEAAAAA AAAAAAAAAAAAAAAQ/9oADAMBAAIRAxEAAADncNMwSwKJGR//2gAIAQIAAQUA5//aAAgBAwABBQDn /9oACAEBAAEFAHDBnbwjF2Oeu3nruLg953lXqtex8E/vYZ7mNdhZZDQl7hJ8+xP/2gAIAQICBj8A f//aAAgBAwIGPwB//9oACAEBAQY/AP0oo72eNUup1RRK4AAkYAABq7b25IzEr6q31z1X1Vvbnqvq rE31wo4zPqruffuMM/WfVX6TLG+Bu5yCFPyNWBiZhxU1tm5TXht2B8prAxuBkFNe0/Ka/9k="
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        mask: "url(#o)",
        opacity: 0.75
      },
      _react2.default.createElement("path", {
        d:
          "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
        fill: "#B07232"
      }),
      _react2.default.createElement("path", {
        d:
          "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
        fill: "none",
        stroke: "#B07232",
        strokeMiterlimit: 10
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "filter",
        {
          id: "az",
          x: 182.99,
          y: 82.83,
          width: 44,
          height: 15,
          filterUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("feColorMatrix", {
          colorInterpolationFilters: "sRGB",
          result: "source",
          values: "-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
        })
      )
    ),
    _react2.default.createElement(
      "mask",
      {
        id: "SVGID_43_",
        x: 182.99,
        y: 82.83,
        width: 44,
        height: 15,
        maskUnits: "userSpaceOnUse"
      },
      _react2.default.createElement(
        "g",
        {
          filter: "url(#az)"
        },
        _react2.default.createElement("image", {
          transform: "translate(182 83)",
          width: 45,
          height: 15,
          overflow: "visible",
          xlinkHref:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAGYAAAB0AAAAoD/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAA8ALQMBIgACEQEDEQH/ xACEAAACAwEAAAAAAAAAAAAAAAAFBgECAwQBAQAAAAAAAAAAAAAAAAAAAAAQAAICAQQDAAAAAAAA AAAAAAIFBAYDEAESBwAVFhEAAQMDAgMGBwAAAAAAAAAAARECAwASBCExQRMFUXGRIjIjEKFCwxQV BhIBAAAAAAAAAAAAAAAAAAAAEP/aAAwDAQACEQMRAAAAA7rDWL13nM4BUAD/2gAIAQIAAQUA1//a AAgBAwABBQDX/9oACAEBAAEFAKkmUODa9fuYZmoagUdC5k5FHXUgx9cg+lDnzWt77DxjcLXttIt1 xyY3U63yw8//2gAIAQICBj8Af//aAAgBAwIGPwB//9oACAEBAQY/AJ8fOnMWQnsgFNO0LvrRdhtG bAT5SxA8DX1A0WOw5w5pQ+246juFcuHCmLkXVhaPF6ChkdZlGLENTE0guTfzO2Ffg88/r1tvX69r bqby1vUWW+q7gicaAhxsrIiQBglx5JAAOwhoPzoB389O48Ty5h9ui3H6FNC/g8wzPHhYKc7qcWVF j7lhifFGAmu7Rp3n4f/Z"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        mask: "url(#n)",
        opacity: 0.75
      },
      _react2.default.createElement("path", {
        d:
          "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
        fill: "#B07232"
      }),
      _react2.default.createElement("path", {
        d:
          "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
        fill: "none",
        stroke: "#B07232",
        strokeMiterlimit: 10
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement(
          "filter",
          {
            id: "ay",
            x: 184.99,
            y: 85.17,
            width: 40,
            height: 10.01,
            filterUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("feColorMatrix", {
            colorInterpolationFilters: "sRGB",
            result: "source",
            values: "-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          })
        )
      ),
      _react2.default.createElement(
        "mask",
        {
          id: "n",
          x: 184.99,
          y: 85.17,
          width: 40,
          height: 10.01,
          maskUnits: "userSpaceOnUse"
        },
        _react2.default.createElement(
          "g",
          {
            filter: "url(#ay)"
          },
          _react2.default.createElement("image", {
            transform: "translate(182.99 82.833)",
            width: 44,
            height: 15,
            overflow: "visible",
            xlinkHref:
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAGPAAABvgAAAjT/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIABAALQMBIgACEQEDEQH/ xAB9AAADAQEAAAAAAAAAAAAAAAABAgMEBgEBAAAAAAAAAAAAAAAAAAAAABAAAgICAwEAAAAAAAAA AAAAAwUAAQIEEBMVFBEAAgECBAMJAAAAAAAAAAAAAQIDAAQRUdI0YZKTIRIichMzUxQFEgEAAAAA AAAAAAAAAAAAAAAQ/9oADAMBAAIRAxEAAADncNMwSwKJGR//2gAIAQIAAQUA5//aAAgBAwABBQDn /9oACAEBAAEFAHDBnbwjF2Oeu3nruLg953lXqtex8E/vYZ7mNdhZZDQl7hJ8+xP/2gAIAQICBj8A f//aAAgBAwIGPwB//9oACAEBAQY/AP0oo72eNUup1RRK4AAkYAABq7b25IzEr6q31z1X1Vvbnqvq rE31wo4zPqruffuMM/WfVX6TLG+Bu5yCFPyNWBiZhxU1tm5TXht2B8prAxuBkFNe0/Ka/9k="
          })
        )
      ),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.75
        },
        _react2.default.createElement("path", {
          d:
            "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
          fill: "#B07232"
        }),
        _react2.default.createElement("path", {
          d:
            "m223.28 89.46c-11.19 6.97-25.39 6.97-36.58 0-1.17-0.73-1.54-2.13-0.89-3.01 0.66-0.88 1.99-1.02 3-0.39 9.9 6.16 22.46 6.16 32.35 0 1.01-0.63 2.34-0.49 3 0.39 0.67 0.88 0.29 2.28-0.88 3.01z",
          fill: "none",
          stroke: "#B07232",
          strokeMiterlimit: 10
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "m211.39 69.33c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.18-0.08-2.28-1.15-2.71z",
      fill: "#E59600"
    }),
    _react2.default.createElement("circle", {
      cx: 179.49,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 172.85,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("circle", {
      cx: 230.49,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 223.85,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("circle", {
      cx: 317.49,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 310.84,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("circle", {
      cx: 368.49,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 361.84,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("path", {
      d:
        "m349.39 69.33c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.18-0.09-2.28-1.15-2.71z",
      fill: "#E59600"
    }),
    _react2.default.createElement("path", {
      d:
        "m70.4 69.33c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.18-0.08-2.28-1.15-2.71z",
      fill: "#E59600"
    }),
    _react2.default.createElement("path", {
      d:
        "m484.38 69.33c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.18-0.09-2.28-1.15-2.71z",
      fill: "#E59600"
    }),
    _react2.default.createElement("circle", {
      cx: 451.65,
      cy: 52.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "m",
        cx: 451.65,
        cy: 52.24,
        r: 18.1
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "l"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#m"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 438.84,
      cy: 48.21,
      r: 7.08,
      clipPath: "url(#l)",
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: 504.31,
      cy: 52.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "k",
        cx: 504.31,
        cy: 52.24,
        r: 18.1
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "j"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#k"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 491.5,
      cy: 48.21,
      r: 7.08,
      clipPath: "url(#j)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m-86.6 69.33c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.18-0.08-2.28-1.15-2.71z",
      fill: "#E59600"
    }),
    _react2.default.createElement("circle", {
      cx: -119.33,
      cy: 52.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "i",
        cx: -119.33,
        cy: 52.24,
        r: 18.1
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "h"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#i"
      })
    ),
    _react2.default.createElement("circle", {
      cx: -132.14,
      cy: 48.21,
      r: 7.08,
      clipPath: "url(#h)",
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: -66.67,
      cy: 52.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "f",
        cx: -66.67,
        cy: 52.24,
        r: 18.1
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "e"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement("circle", {
      cx: -79.48,
      cy: 48.21,
      r: 7.08,
      clipPath: "url(#e)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m-116.35 82.29c1.58 1.6 3.34 2.72 5.23 3.56 1.88 0.85 3.85 1.46 5.86 1.92 4.02 0.92 8.16 1.31 12.28 1.34 4.13 0.03 8.26-0.34 12.25-1.27 3.97-0.97 7.86-2.43 11.07-5.55-0.69 2.15-2.18 4.04-3.91 5.59-1.76 1.54-3.81 2.72-5.94 3.63-4.29 1.79-8.92 2.55-13.49 2.52-4.58-0.04-9.17-0.83-13.45-2.6-2.13-0.9-4.18-2.04-5.96-3.56-1.75-1.52-3.3-3.41-3.94-5.58z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-65 84.62c-0.79 0.34-1.72 0.3-2.54 0.04-0.83-0.25-1.6-0.7-2.25-1.28-0.65-0.57-1.18-1.29-1.52-2.09-0.34-0.79-0.5-1.75-0.16-2.54 0.23 0.81 0.64 1.43 1.08 2.02 0.45 0.59 0.96 1.11 1.51 1.6 1.09 0.99 2.27 1.81 3.88 2.25z",
      fill: "#C97F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m-121.49 84.62c1.61-0.45 2.79-1.26 3.89-2.24 0.54-0.49 1.06-1.02 1.51-1.6 0.44-0.59 0.84-1.21 1.08-2.02 0.34 0.8 0.18 1.75-0.16 2.54-0.35 0.8-0.88 1.51-1.52 2.09s-1.41 1.02-2.25 1.28c-0.83 0.25-1.76 0.29-2.55-0.05z",
      fill: "#C97F00"
    })
  );
}

exports.default = FullMoonWithFace;
