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

function NewMoonWithFace(props) {
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
        id: "ap",
        cx: -368.95,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.3643
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C5C5C",
        offset: 0.5814
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8359
      })
    ),
    _react2.default.createElement("circle", {
      cx: -360,
      cy: 64,
      r: 60,
      fill: "url(#ap)"
    }),
    _react2.default.createElement("circle", {
      cx: -360,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: -399.14,
        cy: 84.509,
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
        "m-386.95 86.35c0.91 6-3.56 11.66-9.97 12.62-6.41 0.97-12.34-3.12-13.24-9.12s3.56-11.66 9.97-12.62c6.41-0.97 12.34 3.11 13.24 9.12z",
      fill: "url(#c)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: -386,
        cy: 98.421,
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
        "m-377.74 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z",
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
          "m-360 8c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: -365.57,
        cy: 96.26,
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
      cx: -364.93,
      cy: 99.68,
      r: 8.84,
      fill: "url(#a)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bj",
        cx: -313.34,
        cy: 53.396,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 -242 357.65)",
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
        "m-306.81 50.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
      fill: "url(#bj)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bi",
        cx: -323.48,
        cy: 102.43,
        r: 7.4702,
        fx: -323.87,
        fy: 101.98,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.006 2.1129)",
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
        "m-305.12 69c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#bi)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bh",
        cx: -341.06,
        cy: 65.649,
        r: 7.4702,
        fx: -341.45,
        fy: 65.202,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.288 -1.1885)",
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
        "m-317.76 31.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91 5.15 2.86 4.89 5.83z",
      fill: "url(#bh)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bg",
        cx: -330.91,
        cy: 123.14,
        r: 7.4702,
        fx: -331.3,
        fy: 122.69,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 19.847 3.9717)",
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
        "m-313.55 89c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#bg)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bf",
        cx: -368.95,
        cy: 201.05,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.3643
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C5C5C",
        offset: 0.5814
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8359
      })
    ),
    _react2.default.createElement("circle", {
      cx: -360,
      cy: 226.67,
      r: 60,
      fill: "url(#bf)"
    }),
    _react2.default.createElement("circle", {
      cx: -360,
      cy: 226.67,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "be",
        cx: -399.14,
        cy: 247.18,
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
        "m-386.95 249.01c0.91 6-3.56 11.66-9.97 12.62-6.41 0.97-12.34-3.12-13.24-9.12s3.56-11.66 9.97-12.62 12.34 3.12 13.24 9.12z",
      fill: "url(#be)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bd",
        cx: -386,
        cy: 261.09,
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
        "m-377.74 270.75c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.68 5.96 8.76z",
      fill: "url(#bd)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-360 170.67c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bc",
        cx: -365.57,
        cy: 258.93,
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
      cx: -364.93,
      cy: 262.35,
      r: 8.84,
      fill: "url(#bc)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "bb",
        cx: -309.81,
        cy: 216.02,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 -77.947 505.56)",
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
        "m-306.81 213.54c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66 10.01 4.64 9.89 10.1z",
      fill: "url(#bb)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ba",
        cx: -309.62,
        cy: 264.51,
        r: 7.4702,
        fx: -310.01,
        fy: 264.06,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 18.762 16.661)",
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
        "m-305.12 231.67c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#ba)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "az",
        cx: -327.2,
        cy: 227.72,
        r: 7.4702,
        fx: -327.59,
        fy: 227.28,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 19.044 13.359)",
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
        "m-317.76 193.77c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91 5.15 2.87 4.89 5.83z",
      fill: "url(#az)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ay",
        cx: -317.05,
        cy: 285.21,
        r: 7.4702,
        fx: -317.44,
        fy: 284.77,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 18.603 18.519)",
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
        "m-313.55 251.67c-0.25 2.97-2.85 5.17-5.8 4.91s-5.14-2.86-4.89-5.83 2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#ay)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ax",
        cx: -222.95,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.3643
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C5C5C",
        offset: 0.5814
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8359
      })
    ),
    _react2.default.createElement("circle", {
      cx: -214,
      cy: 64,
      r: 60,
      fill: "url(#ax)"
    }),
    _react2.default.createElement("circle", {
      cx: -214,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aw",
        cx: -253.14,
        cy: 84.509,
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
        "m-240.95 86.35c0.91 6-3.56 11.66-9.97 12.62-6.41 0.97-12.34-3.12-13.24-9.12s3.56-11.66 9.97-12.62c6.41-0.97 12.34 3.11 13.24 9.12z",
      fill: "url(#aw)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "av",
        cx: -240,
        cy: 98.421,
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
        "m-231.74 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76 4.68-6.76 8.74-6 6.72 4.69 5.96 8.76z",
      fill: "url(#av)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-214 8c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "au",
        cx: -219.57,
        cy: 96.26,
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
      cx: -218.93,
      cy: 99.68,
      r: 8.84,
      fill: "url(#au)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "at",
        cx: -167.38,
        cy: 50.227,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 -109.15 212.24)",
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
        "m-160.81 50.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66 10.01 4.65 9.89 10.1z",
      fill: "url(#at)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "as",
        cx: -178.01,
        cy: 89.992,
        r: 7.4702,
        fx: -178.4,
        fy: 89.545,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.101 .9965)",
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
        "m-159.12 69c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#as)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ar",
        cx: -195.59,
        cy: 53.211,
        r: 7.4702,
        fx: -195.98,
        fy: 52.764,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.383 -2.3049)",
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
        "m-171.76 31.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#ar)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aq",
        cx: -185.44,
        cy: 110.7,
        r: 7.4702,
        fx: -185.83,
        fy: 110.25,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 19.942 2.8553)",
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
        "m-167.55 89c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#aq)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ao",
        cx: -222.95,
        cy: 200.39,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.3643
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C5C5C",
        offset: 0.5814
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8359
      })
    ),
    _react2.default.createElement("circle", {
      cx: -214,
      cy: 226,
      r: 60,
      fill: "url(#ao)"
    }),
    _react2.default.createElement("circle", {
      cx: -214,
      cy: 226,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "an",
        cx: -253.14,
        cy: 246.51,
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
        "m-240.95 248.35c0.91 6-3.56 11.66-9.97 12.62-6.41 0.97-12.34-3.12-13.24-9.12-0.91-6 3.56-11.66 9.97-12.62 6.41-0.97 12.34 3.11 13.24 9.12z",
      fill: "url(#an)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "am",
        cx: -240,
        cy: 260.42,
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
        "m-231.74 270.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z",
      fill: "url(#am)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-214 170c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "al",
        cx: -219.57,
        cy: 258.26,
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
      cx: -218.93,
      cy: 261.68,
      r: 8.84,
      fill: "url(#al)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ak",
        cx: -163.86,
        cy: 212.19,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 54.23 359.55)",
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
        "m-160.81 212.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
      fill: "url(#ak)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aj",
        cx: -164.21,
        cy: 251.4,
        r: 7.4702,
        fx: -164.6,
        fy: 250.96,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 18.862 15.485)",
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
        "m-159.12 231c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#aj)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ai",
        cx: -181.79,
        cy: 214.62,
        r: 7.4702,
        fx: -182.18,
        fy: 214.18,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 19.144 12.183)",
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
        "m-171.76 193.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#ai)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ah",
        cx: -171.64,
        cy: 272.11,
        r: 7.4702,
        fx: -172.03,
        fy: 271.66,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 18.703 17.343)",
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
        "m-167.55 251c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#ah)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ag",
        cx: -82.947,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.3643
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C5C5C",
        offset: 0.5814
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8359
      })
    ),
    _react2.default.createElement("circle", {
      cx: -74,
      cy: 64,
      r: 60,
      fill: "url(#ag)"
    }),
    _react2.default.createElement("circle", {
      cx: -74,
      cy: 64,
      r: 60,
      fill: "none"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "af",
        cx: -113.14,
        cy: 84.509,
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
        "m-100.95 86.35c0.91 6-3.56 11.66-9.97 12.62-6.41 0.97-12.34-3.12-13.24-9.12-0.91-6 3.56-11.66 9.97-12.62 6.41-0.97 12.34 3.11 13.24 9.12z",
      fill: "url(#af)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ae",
        cx: -100,
        cy: 98.421,
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
        "m-91.74 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z",
      fill: "url(#ae)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-74 8c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ad",
        cx: -79.568,
        cy: 96.26,
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
      cx: -78.93,
      cy: 99.68,
      r: 8.84,
      fill: "url(#ad)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ac",
        cx: -27.409,
        cy: 47.189,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 18.237 72.806)",
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
        "m-20.81 50.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66 10.01 4.65 9.89 10.1z",
      fill: "url(#ac)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "ab",
        cx: -38.516,
        cy: 78.065,
        r: 7.4702,
        fx: -38.907,
        fy: 77.618,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.193 -.0741)",
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
        "m-19.12 69c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#ab)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "aa",
        cx: -56.095,
        cy: 41.284,
        r: 7.4702,
        fx: -56.486,
        fy: 40.837,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.475 -3.3755)",
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
        "m-31.76 31.11c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91 5.15 2.86 4.89 5.83z",
      fill: "url(#aa)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "z",
        cx: -45.95,
        cy: 98.774,
        r: 7.4702,
        fx: -46.34,
        fy: 98.326,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.034 1.7847)",
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
        "m-27.55 89c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#z)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "y",
        cx: 55.053,
        cy: 38.386,
        r: 62.739,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.3643
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C5C5C",
        offset: 0.5814
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.8359
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#y)"
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
        id: "x",
        cx: 24.86,
        cy: 84.509,
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
        "m37.05 86.35c0.91 6-3.56 11.66-9.97 12.62-6.41 0.97-12.34-3.12-13.24-9.12s3.56-11.66 9.97-12.62c6.41-0.97 12.34 3.11 13.24 9.12z",
      fill: "url(#x)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "w",
        cx: 38,
        cy: 98.421,
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
        "m46.26 108.08c-0.77 4.08-4.68 6.76-8.74 6s-6.73-4.69-5.96-8.76c0.77-4.08 4.68-6.76 8.74-6s6.72 4.69 5.96 8.76z",
      fill: "url(#w)",
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
        id: "v",
        cx: 58.432,
        cy: 96.26,
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
      cx: 59.07,
      cy: 99.68,
      r: 8.84,
      fill: "url(#v)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "u",
        cx: 110.56,
        cy: 44.194,
        r: 11.738,
        gradientTransform: "matrix(.0682 .9977 -1.0103 .069 143.81 -64.633)",
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
        "m117.19 50.87c-0.12 5.46-4.74 9.78-10.32 9.66s-10.01-4.64-9.89-10.1 4.74-9.78 10.32-9.66c5.58 0.13 10.01 4.65 9.89 10.1z",
      fill: "url(#u)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "t",
        cx: 98.982,
        cy: 66.308,
        r: 7.4702,
        fx: 98.592,
        fy: 65.861,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.283 -1.1293)",
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
        "m118.88 69c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.95 0.25 5.14 2.86 4.89 5.83z",
      fill: "url(#t)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "s",
        cx: 81.403,
        cy: 29.527,
        r: 7.4702,
        fx: 81.013,
        fy: 29.08,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.565 -4.4307)",
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
        "m106.24 31.11c-0.25 2.97-2.85 5.17-5.8 4.91s-5.14-2.86-4.89-5.83 2.85-5.17 5.8-4.91 5.15 2.86 4.89 5.83z",
      fill: "url(#s)",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "r",
        cx: 91.548,
        cy: 87.017,
        r: 7.4702,
        fx: 91.158,
        fy: 86.57,
        gradientTransform: "matrix(.9964 .0852 -.0775 .9066 20.124 .7295)",
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
        "m110.45 89c-0.25 2.97-2.85 5.17-5.8 4.91-2.95-0.25-5.14-2.86-4.89-5.83s2.85-5.17 5.8-4.91c2.96 0.25 5.15 2.86 4.89 5.83z",
      fill: "url(#r)",
      opacity: 0.3
    }),
    _react2.default.createElement("path", {
      d:
        "m87.35 82.29c-0.64 2.17-2.19 4.06-3.93 5.58-1.78 1.52-3.83 2.66-5.96 3.56-4.28 1.77-8.87 2.55-13.45 2.6-4.58 0.04-9.2-0.73-13.49-2.52-2.13-0.91-4.18-2.09-5.94-3.63-1.73-1.55-3.22-3.44-3.91-5.59 3.21 3.13 7.1 4.59 11.07 5.55 3.99 0.93 8.12 1.3 12.25 1.27 4.12-0.04 8.26-0.42 12.28-1.34 2.01-0.46 3.98-1.07 5.86-1.92 1.88-0.84 3.64-1.96 5.22-3.56z"
    }),
    _react2.default.createElement("path", {
      d:
        "m36 84.62c1.61-0.45 2.79-1.26 3.89-2.24 0.54-0.49 1.06-1.02 1.51-1.6 0.44-0.59 0.84-1.21 1.08-2.02 0.34 0.8 0.18 1.75-0.16 2.54-0.35 0.8-0.88 1.51-1.52 2.09s-1.41 1.02-2.25 1.28c-0.83 0.25-1.76 0.29-2.55-0.05z"
    }),
    _react2.default.createElement("path", {
      d:
        "m92.49 84.62c-0.79 0.34-1.72 0.3-2.54 0.04-0.83-0.25-1.6-0.7-2.25-1.28-0.65-0.57-1.18-1.29-1.52-2.09-0.34-0.79-0.5-1.75-0.16-2.54 0.23 0.81 0.64 1.43 1.08 2.02 0.45 0.59 0.96 1.11 1.51 1.6 1.09 0.99 2.27 1.81 3.88 2.25z"
    }),
    _react2.default.createElement("path", {
      d:
        "m51.46 51.11c-1.38-1.98-2.93-3.58-7.8-3.58-6.21 0-12.03 2.36-15.99 6.11-1.95 1.9 0.57 4.49 2.62 3.15 2.78-1.77 5.98-3.06 9.35-3.79-0.23 0.81-0.36 1.71-0.36 2.68 0 4.9 3.17 7.85 6.67 7.85 3.49 0 6.67-2.95 6.67-7.85-0.01-1.8-0.44-3.34-1.16-4.57z"
    }),
    _react2.default.createElement("path", {
      d:
        "m99.88 51.11c-1.38-1.98-2.93-3.58-7.8-3.58-6.21 0-12.03 2.36-15.99 6.11-1.95 1.9 0.57 4.49 2.62 3.15 2.78-1.77 5.98-3.06 9.35-3.79-0.23 0.81-0.36 1.71-0.36 2.68 0 4.9 3.17 7.85 6.67 7.85 3.49 0 6.67-2.95 6.67-7.85 0-1.8-0.44-3.34-1.16-4.57z"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.6 69.33c0.18-0.07 0.35-0.11 0.53-0.14h11.74c0.18 0.02 0.36 0.07 0.53 0.14 1.06 0.43 1.65 1.53 1.15 2.71-0.5 1.17-2.84 4.47-7.55 4.47s-7.04-3.29-7.55-4.47c-0.5-1.18 0.08-2.28 1.15-2.71z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-92.29 89.46c11.19 6.97 25.39 6.97 36.58 0 1.17-0.73 1.54-2.13 0.89-3.01-0.66-0.88-1.99-1.02-3-0.39-9.9 6.16-22.46 6.16-32.35 0-1.01-0.63-2.34-0.49-3 0.39s-0.29 2.28 0.88 3.01z",
      fill: "#4C3734"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "filter",
        {
          id: "bm",
          x: -93.5,
          y: 85.67,
          width: 39,
          height: 9.01,
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
        id: "q",
        x: -93.5,
        y: 85.67,
        width: 39,
        height: 9.01,
        maskUnits: "userSpaceOnUse"
      },
      _react2.default.createElement(
        "g",
        {
          filter: "url(#bm)"
        },
        _react2.default.createElement("image", {
          transform: "matrix(-1 0 0 1 -52 82.833)",
          width: 44,
          height: 15,
          overflow: "visible",
          xlinkHref:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAGLAAABswAAAfv/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAA8ALAMBIgACEQEDEQH/ xAB5AAADAQEAAAAAAAAAAAAAAAABAwQCBgEBAAAAAAAAAAAAAAAAAAAAABAAAgMAAwEAAAAAAAAA AAAAAQIAAwQQERIUEQABAgMHBQAAAAAAAAAAAAABABExAgMQIVFxkRIiQWGBMjMSAQAAAAAAAAAA AAAAAAAAABD/2gAMAwEAAhEDEQAAAOFCqSc1Awjaz//aAAgBAgABBQDn/9oACAEDAAEFAOf/2gAI AQEAAQUApqS0WZrUnh4K7GK5CF6X0O+0t1qPp0Q6NJlrXMZ//9oACAECAgY/AH//2gAIAQMCBj8A f//aAAgBAQEGPwAgzNN0UHGIXqdEwlL5LdUO0YJn4vFXRQ4zTDuCvkdCrqZHgp6jjMNZ/9k="
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        mask: "url(#q)",
        opacity: 0.75
      },
      _react2.default.createElement("path", {
        d:
          "m-92.29 89.46c11.19 6.97 25.39 6.97 36.58 0 1.17-0.73 1.54-2.13 0.89-3.01-0.66-0.88-1.99-1.02-3-0.39-9.9 6.16-22.46 6.16-32.35 0-1.01-0.63-2.34-0.49-3 0.39s-0.29 2.28 0.88 3.01z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement(
        "filter",
        {
          id: "bl",
          x: -96,
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
        id: "SVGID_55_",
        x: -96,
        y: 82.83,
        width: 44,
        height: 15,
        maskUnits: "userSpaceOnUse"
      },
      _react2.default.createElement(
        "g",
        {
          filter: "url(#bl)"
        },
        _react2.default.createElement("image", {
          transform: "translate(-96 83)",
          width: 44,
          height: 14,
          overflow: "visible",
          xlinkHref:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAGaAAAB0QAAAnT/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAA4ALAMBIgACEQEDEQH/ xACFAAADAQEAAAAAAAAAAAAAAAADBQYEBwEBAAAAAAAAAAAAAAAAAAAAABAAAQMEAwEAAAAAAAAA AAAABQMEBgABAgcQExUUEQABAgQDBQcFAAAAAAAAAAABAgMAESETMRIEQVFxFAUQwSIyYnLSI5M0 dBUSAQAAAAAAAAAAAAAAAAAAABD/2gAMAwEAAhEDEQAAAFWdBdkUfpABPK7kJ//aAAgBAgABBQDn /9oACAEDAAEFAOf/2gAIAQEAAQUAi0cDHGRKCHmSnlFKax447yG67xSS6Bnst/o7ha+yEcLFptTs jsBTCQ3ld71//9oACAECAgY/AH//2gAIAQMCBj8Af//aAAgBAQEGPwB1D2pLWvSqgBAkNlDjOCGm ubaxDjUsBvSo0j8N/wC0v4wUsaF5RTjmTkx9+WDqeuagNJAnaQabfMo90WLp/nXct30cd04Ty2e/ PwW555+nLWEy03MNTBk+ppKsu4ErTFehNk/stfKANN0lpg7SXmnKcLiYn1sPJbJJAMrQrh9OaeE+ z//Z"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        mask: "url(#p)",
        opacity: 0.75
      },
      _react2.default.createElement("path", {
        d:
          "m-92.29 89.46c11.19 6.97 25.39 6.97 36.58 0 1.17-0.73 1.54-2.13 0.89-3.01-0.66-0.88-1.99-1.02-3-0.39-9.9 6.16-22.46 6.16-32.35 0-1.01-0.63-2.34-0.49-3 0.39s-0.29 2.28 0.88 3.01z",
        fill: "#B07232"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement(
          "filter",
          {
            id: "bk",
            x: -93.5,
            y: 85.67,
            width: 39,
            height: 9.01,
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
          id: "p",
          x: -93.5,
          y: 85.67,
          width: 39,
          height: 9.01,
          maskUnits: "userSpaceOnUse"
        },
        _react2.default.createElement(
          "g",
          {
            filter: "url(#bk)"
          },
          _react2.default.createElement("image", {
            transform: "matrix(-1 0 0 1 -52 82.833)",
            width: 44,
            height: 15,
            overflow: "visible",
            xlinkHref:
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAGLAAABswAAAfv/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAA8ALAMBIgACEQEDEQH/ xAB5AAADAQEAAAAAAAAAAAAAAAABAwQCBgEBAAAAAAAAAAAAAAAAAAAAABAAAgMAAwEAAAAAAAAA AAAAAQIAAwQQERIUEQABAgMHBQAAAAAAAAAAAAABABExAgMQIVFxkRIiQWGBMjMSAQAAAAAAAAAA AAAAAAAAABD/2gAMAwEAAhEDEQAAAOFCqSc1Awjaz//aAAgBAgABBQDn/9oACAEDAAEFAOf/2gAI AQEAAQUApqS0WZrUnh4K7GK5CF6X0O+0t1qPp0Q6NJlrXMZ//9oACAECAgY/AH//2gAIAQMCBj8A f//aAAgBAQEGPwAgzNN0UHGIXqdEwlL5LdUO0YJn4vFXRQ4zTDuCvkdCrqZHgp6jjMNZ/9k="
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
            "m-92.29 89.46c11.19 6.97 25.39 6.97 36.58 0 1.17-0.73 1.54-2.13 0.89-3.01-0.66-0.88-1.99-1.02-3-0.39-9.9 6.16-22.46 6.16-32.35 0-1.01-0.63-2.34-0.49-3 0.39s-0.29 2.28 0.88 3.01z",
          fill: "#B07232"
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "m-80.4 69.33c0.18-0.07 0.35-0.11 0.53-0.14h11.74c0.18 0.02 0.36 0.07 0.53 0.14 1.06 0.43 1.65 1.53 1.15 2.71-0.5 1.17-2.84 4.47-7.55 4.47s-7.04-3.29-7.55-4.47c-0.5-1.18 0.08-2.28 1.15-2.71z"
    }),
    _react2.default.createElement("circle", {
      cx: -48.5,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: -41.86,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("circle", {
      cx: -99.5,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: -92.86,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("path", {
      d:
        "m-190.65 82.29c-0.64 2.17-2.19 4.06-3.93 5.58-1.78 1.52-3.83 2.66-5.96 3.56-4.28 1.77-8.87 2.55-13.45 2.6-4.58 0.04-9.2-0.73-13.49-2.52-2.13-0.91-4.18-2.09-5.94-3.63-1.73-1.55-3.22-3.44-3.91-5.59 3.21 3.13 7.1 4.59 11.07 5.55 3.99 0.93 8.12 1.3 12.25 1.27 4.12-0.04 8.26-0.42 12.28-1.34 2.01-0.46 3.98-1.07 5.86-1.92 1.88-0.84 3.64-1.96 5.22-3.56z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-242 84.62c1.61-0.45 2.79-1.26 3.89-2.24 0.54-0.49 1.06-1.02 1.51-1.6 0.44-0.59 0.84-1.21 1.08-2.02 0.34 0.8 0.18 1.75-0.16 2.54-0.35 0.8-0.88 1.51-1.52 2.09s-1.41 1.02-2.25 1.28c-0.83 0.25-1.76 0.29-2.55-0.05z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-185.51 84.62c-0.79 0.34-1.72 0.3-2.54 0.04-0.83-0.25-1.6-0.7-2.25-1.28-0.65-0.57-1.18-1.29-1.52-2.09-0.34-0.79-0.5-1.75-0.16-2.54 0.23 0.81 0.64 1.43 1.08 2.02 0.45 0.59 0.96 1.11 1.51 1.6 1.09 0.99 2.27 1.81 3.88 2.25z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-220.4 69.33c0.18-0.07 0.35-0.11 0.53-0.14h11.74c0.18 0.02 0.36 0.07 0.53 0.14 1.06 0.43 1.65 1.53 1.15 2.71-0.5 1.17-2.84 4.47-7.55 4.47s-7.04-3.29-7.55-4.47c-0.5-1.18 0.08-2.28 1.15-2.71z"
    }),
    _react2.default.createElement("circle", {
      cx: -188.5,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: -181.86,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("circle", {
      cx: -239.5,
      cy: 53.15,
      r: 12.24,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: -232.86,
      cy: 53.15,
      r: 5.6
    }),
    _react2.default.createElement("path", {
      d:
        "m-353.6 69.33c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.18-0.08-2.28-1.15-2.71z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-360 95.18c-6.57 0-12.99-1.83-18.55-5.3-0.74-0.46-1.25-1.18-1.4-1.97-0.12-0.65 0.01-1.27 0.38-1.76 0.46-0.62 1.21-0.98 2.05-0.98 0.56 0 1.12 0.16 1.61 0.46 4.78 2.97 10.28 4.55 15.91 4.55s11.14-1.57 15.91-4.55c0.49-0.3 1.04-0.46 1.61-0.46 0.84 0 1.59 0.36 2.05 0.98 0.37 0.49 0.5 1.11 0.38 1.76-0.15 0.79-0.66 1.51-1.4 1.97-5.56 3.47-11.98 5.3-18.55 5.3z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-377.52 85.67c0.46 0 0.93 0.13 1.35 0.39 4.95 3.08 10.56 4.62 16.18 4.62s11.23-1.54 16.18-4.62c0.42-0.26 0.89-0.39 1.34-0.39 0.65 0 1.27 0.26 1.65 0.78 0.66 0.88 0.28 2.28-0.89 3.01-5.59 3.48-11.94 5.22-18.29 5.22s-12.7-1.74-18.29-5.22c-1.17-0.73-1.54-2.13-0.89-3.01 0.39-0.52 1.01-0.78 1.66-0.78m0-1c-1 0-1.89 0.43-2.45 1.18-0.45 0.6-0.62 1.37-0.47 2.15 0.17 0.93 0.77 1.77 1.63 2.3 5.65 3.52 12.15 5.38 18.82 5.38 6.66 0 13.17-1.86 18.82-5.38 0.86-0.53 1.45-1.37 1.63-2.3 0.15-0.79-0.02-1.55-0.47-2.15-0.56-0.75-1.45-1.18-2.45-1.18-0.66 0-1.3 0.19-1.87 0.54-4.7 2.93-10.11 4.47-15.65 4.47s-10.95-1.55-15.65-4.47c-0.59-0.35-1.23-0.54-1.89-0.54z"
    }),
    _react2.default.createElement("circle", {
      cx: -333.67,
      cy: 52.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "o",
        cx: -333.67,
        cy: 52.24,
        r: 18.1
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "n"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#o"
      })
    ),
    _react2.default.createElement("circle", {
      cx: -320.86,
      cy: 48.21,
      r: 7.08,
      clipPath: "url(#n)",
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: -386.33,
      cy: 52.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "m",
        cx: -386.33,
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
      cx: -373.52,
      cy: 48.21,
      r: 7.08,
      clipPath: "url(#l)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m-353.6 231.99c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.17-0.08-2.28-1.15-2.71z"
    }),
    _react2.default.createElement("circle", {
      cx: -333.67,
      cy: 214.9,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "k",
        cx: -333.67,
        cy: 214.9,
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
      cx: -320.86,
      cy: 210.88,
      r: 7.08,
      clipPath: "url(#j)",
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: -386.33,
      cy: 214.9,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "i",
        cx: -386.33,
        cy: 214.9,
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
      cx: -373.52,
      cy: 210.88,
      r: 7.08,
      clipPath: "url(#h)",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m-336.65 247.96c-0.64 2.17-2.19 4.06-3.93 5.58-1.78 1.52-3.83 2.66-5.96 3.56-4.28 1.77-8.87 2.55-13.45 2.6-4.58 0.04-9.2-0.73-13.49-2.52-2.13-0.91-4.18-2.09-5.94-3.63-1.73-1.55-3.22-3.44-3.91-5.59 3.21 3.13 7.1 4.59 11.07 5.55 3.99 0.93 8.12 1.3 12.25 1.27 4.12-0.04 8.26-0.42 12.28-1.34 2.01-0.46 3.98-1.07 5.86-1.92 1.88-0.84 3.64-1.96 5.22-3.56z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-388 250.29c1.61-0.45 2.79-1.26 3.89-2.24 0.54-0.49 1.06-1.02 1.51-1.6 0.44-0.59 0.84-1.21 1.08-2.02 0.34 0.8 0.18 1.75-0.16 2.54-0.35 0.8-0.88 1.51-1.52 2.09s-1.41 1.02-2.25 1.28c-0.83 0.25-1.76 0.29-2.55-0.05z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-331.51 250.29c-0.79 0.34-1.72 0.3-2.54 0.04-0.83-0.25-1.6-0.7-2.25-1.28-0.65-0.57-1.18-1.29-1.52-2.09-0.34-0.79-0.5-1.75-0.16-2.54 0.23 0.81 0.64 1.43 1.08 2.02 0.45 0.59 0.96 1.11 1.51 1.6 1.09 0.99 2.27 1.8 3.88 2.25z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-189.26 244.11c-6.92 4.02-15.48 6.4-24.74 6.4s-17.82-2.38-24.74-6.4c-1.27-0.74-2.61 0.85-1.66 1.97 6.27 7.33 15.76 12 26.4 12 10.63 0 20.13-4.67 26.4-12 0.95-1.12-0.39-2.71-1.66-1.97z"
    }),
    _react2.default.createElement("path", {
      d:
        "m-207.6 231.33c-0.18-0.07-0.35-0.11-0.53-0.14h-11.74c-0.18 0.02-0.36 0.07-0.53 0.14-1.06 0.43-1.65 1.53-1.15 2.71 0.5 1.17 2.84 4.47 7.55 4.47s7.04-3.29 7.55-4.47c0.5-1.18-0.08-2.28-1.15-2.71z"
    }),
    _react2.default.createElement("circle", {
      cx: -187.67,
      cy: 214.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "g",
        cx: -187.67,
        cy: 214.24,
        r: 18.1
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
    _react2.default.createElement("circle", {
      cx: -174.86,
      cy: 210.21,
      r: 7.08,
      clipPath: "url(#f)",
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: -240.33,
      cy: 214.24,
      r: 18.1,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "e",
        cx: -240.33,
        cy: 214.24,
        r: 18.1
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement("circle", {
      cx: -227.52,
      cy: 210.21,
      r: 7.08,
      clipPath: "url(#d)",
      fill: "#242424"
    })
  );
}

exports.default = NewMoonWithFace;
