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

function WaningGibbousMoon(props) {
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
        id: "d",
        cx: 47.842,
        cy: 28.923,
        r: 95.191,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#686868",
        offset: 0.202
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4C4C4C",
        offset: 0.7063
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#d)"
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
        id: "c",
        cx: 26.86,
        cy: 78.509,
        r: 14.105,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#545454",
        offset: 0.8481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.9256
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.05 80.35c0.91 6-3.56 11.66-9.97 12.62-6.41 0.97-12.34-3.12-13.24-9.12s3.56-11.66 9.97-12.62c6.41-0.97 12.34 3.11 13.24 9.12z",
      fill: "url(#c)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 40,
        cy: 97.421,
        r: 13.252,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#545454",
        offset: 0.8481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.9256
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.26 107.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76 4.68-6.76 8.74-6 6.72 4.69 5.96 8.76z",
      fill: "url(#b)",
      opacity: 0.3
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
        id: "a",
        cx: 62.432,
        cy: 95.26,
        r: 15.023,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#545454",
        offset: 0.8481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.9256
      })
    ),
    _react2.default.createElement("circle", {
      cx: 63.07,
      cy: 98.68,
      r: 8.84,
      fill: "url(#a)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 107.55,
        cy: 48.462,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 145.32 -66.927)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#545454",
        offset: 0.8481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.9256
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.19 45.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
      fill: "url(#r)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: 90.646,
        cy: 103.4,
        r: 14.343,
        fx: 89.896,
        fy: 102.54,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.54 -33.922)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#545454",
        offset: 0.8481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.9256
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.45 73.94c-0.49 5.69-5.48 9.92-11.15 9.43s-9.87-5.49-9.38-11.19c0.49-5.69 5.48-9.92 11.15-9.43s9.87 5.5 9.38 11.19z",
      fill: "url(#q)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "p",
        cx: 75.608,
        cy: 62.011,
        r: 7.4702,
        fx: 75.218,
        fy: 61.564,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.857 -37.637)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#545454",
        offset: 0.8481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.9256
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98.24 26.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91 5.15 2.86 4.89 5.83z",
      fill: "url(#p)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 85.79,
        cy: 123.41,
        r: 12.604,
        fx: 85.132,
        fy: 122.66,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.386 -32.125)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#545454",
        offset: 0.8481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.9256
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m110.14 92.69c-0.43 5-4.81 8.72-9.79 8.29s-8.67-4.83-8.25-9.83 4.81-8.72 9.79-8.29c4.99 0.42 8.68 4.83 8.25 9.83z",
      fill: "url(#o)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "filter",
        {
          id: "s",
          x: 4,
          y: 4,
          width: 120,
          height: 120,
          filterUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("feColorMatrix", {
          values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
        })
      )
    ),
    _react2.default.createElement(
      "mask",
      {
        id: "n",
        x: 4,
        y: 4,
        width: 120,
        height: 120,
        maskUnits: "userSpaceOnUse"
      },
      _react2.default.createElement(
        "g",
        {
          filter: "url(#s)"
        },
        _react2.default.createElement(
          "radialGradient",
          {
            id: "m",
            cx: 28.645,
            cy: 62.257,
            r: 118.23,
            gradientUnits: "userSpaceOnUse"
          },
          _react2.default.createElement("stop", {
            stopColor: "#fff",
            offset: 0.5069
          }),
          _react2.default.createElement("stop", {
            stopColor: "#C6C6C6",
            offset: 0.5199
          }),
          _react2.default.createElement("stop", {
            stopColor: "#8B8B8B",
            offset: 0.535
          }),
          _react2.default.createElement("stop", {
            stopColor: "#595959",
            offset: 0.5497
          }),
          _react2.default.createElement("stop", {
            stopColor: "#323232",
            offset: 0.5634
          }),
          _react2.default.createElement("stop", {
            stopColor: "#171717",
            offset: 0.576
          }),
          _react2.default.createElement("stop", {
            stopColor: "#060606",
            offset: 0.5871
          }),
          _react2.default.createElement("stop", {
            offset: 0.5954
          })
        ),
        _react2.default.createElement("circle", {
          cx: 64,
          cy: 64,
          r: 67.66,
          fill: "url(#m)"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        mask: "url(#n)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "l",
          cx: 47.842,
          cy: 28.923,
          r: 95.191,
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
        fill: "url(#l)"
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
          id: "k",
          cx: 109.7,
          cy: 55.417,
          r: 11.738,
          gradientTransform: "matrix(.0682 .9977 -1.0103 .069 154.2 -62.554)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m116.19 52.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
        fill: "url(#k)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "j",
          cx: 99.697,
          cy: 104.51,
          r: 7.4702,
          fx: 99.307,
          fy: 104.06,
          gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.531 -33.822)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m117.88 71c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
        fill: "url(#j)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "i",
          cx: 82.118,
          cy: 67.727,
          r: 7.4702,
          fx: 81.728,
          fy: 67.28,
          gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.813 -37.124)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m105.24 33.11c-0.25 2.97-2.85 5.17-5.8 4.91s-5.14-2.86-4.89-5.83 2.85-5.17 5.8-4.91 5.15 2.86 4.89 5.83z",
        fill: "url(#i)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "h",
          cx: 92.263,
          cy: 125.22,
          r: 7.4702,
          fx: 91.873,
          fy: 124.77,
          gradientTransform: "matrix(.9964 .0852 -.0775 .9066 21.372 -31.964)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FDD835",
          offset: 0.1543
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FDDA38",
          offset: 0.4262
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FEE042",
          offset: 0.6381
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEA52",
          offset: 0.8292
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFEE58",
          offset: 0.8784
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m109.45 91c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
        fill: "url(#h)"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 24.935,
        cy: 82.26,
        r: 19.126,
        gradientTransform: "matrix(.8574 .5146 -.5146 .8574 48.223 -1.8498)",
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
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
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
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 61.973,
        cy: 102.24,
        r: 17.206,
        gradientTransform: "matrix(1.1129 0 0 .8206 -5.7845 21.164)",
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
      fill: "url(#e)"
    })
  );
}

exports.default = WaningGibbousMoon;
