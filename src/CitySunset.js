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

function CitySunset(props) {
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
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "j",
        d:
          "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "i"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#j"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#i)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "h",
          x1: 64,
          x2: 64,
          y1: 86,
          y2: 3.6498,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFA726",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F06292",
          offset: 0.497
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C3549C",
          offset: 0.6268
        }),
        _react2.default.createElement("stop", {
          stopColor: "#8D43A7",
          offset: 0.8
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6B39AE",
          offset: 0.9296
        }),
        _react2.default.createElement("stop", {
          stopColor: "#5E35B1",
          offset: 1
        })
      ),
      _react2.default.createElement("rect", {
        x: 4,
        y: 4,
        width: 120,
        height: 120,
        fill: "url(#h)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "g",
          x1: 22,
          x2: 22,
          y1: 83,
          y2: 35.102,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#7B1FA2",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#681B9A",
          offset: 0.2915
        }),
        _react2.default.createElement("stop", {
          stopColor: "#521690",
          offset: 0.7231
        }),
        _react2.default.createElement("stop", {
          stopColor: "#4A148C",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m34 36h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2z",
        fill: "url(#g)",
        opacity: 0.7
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 82,
          x2: 82,
          y1: 105.33,
          y2: 17.649,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#7B1FA2",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#681B9A",
          offset: 0.2915
        }),
        _react2.default.createElement("stop", {
          stopColor: "#521690",
          offset: 0.7231
        }),
        _react2.default.createElement("stop", {
          stopColor: "#4A148C",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m118 48h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2z",
        fill: "url(#f)",
        opacity: 0.7
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "e",
          cx: 426.6,
          cy: -627.66,
          r: 37.835,
          gradientTransform: "matrix(.0019 -1 1 .0019 664.68 539.62)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FF8A80",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EC8076",
          offset: 0.0596
        }),
        _react2.default.createElement("stop", {
          stopColor: "#99534D",
          offset: 0.3276
        }),
        _react2.default.createElement("stop", {
          stopColor: "#572F2C",
          offset: 0.565
        }),
        _react2.default.createElement("stop", {
          stopColor: "#281614",
          offset: 0.7629
        }),
        _react2.default.createElement("stop", {
          stopColor: "#0B0605",
          offset: 0.9139
        }),
        _react2.default.createElement("stop", {
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m37.9 73.99c20.9 0.04 37.81 17.01 37.77 37.91-0.04 20.89-17.01 37.8-37.9 37.77-20.89-0.04-37.8-17.01-37.76-37.9 0.03-20.91 17-37.81 37.89-37.78z",
        fill: "url(#e)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: 426.38,
          cy: -561.67,
          r: 31.824,
          gradientTransform: "matrix(.0019 -1 1 .0019 664.68 539.62)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FF8A80",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#EC8076",
          offset: 0.0596
        }),
        _react2.default.createElement("stop", {
          stopColor: "#99534D",
          offset: 0.3276
        }),
        _react2.default.createElement("stop", {
          stopColor: "#572F2C",
          offset: 0.565
        }),
        _react2.default.createElement("stop", {
          stopColor: "#281614",
          offset: 0.7629
        }),
        _react2.default.createElement("stop", {
          stopColor: "#0B0605",
          offset: 0.9139
        }),
        _react2.default.createElement("stop", {
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m103.88 80.35c17.58 0.03 31.8 14.31 31.77 31.88s-14.3 31.8-31.88 31.77c-17.57-0.03-31.8-14.31-31.76-31.88 0.02-17.58 14.3-31.8 31.87-31.77z",
        fill: "url(#d)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 64,
          x2: 64,
          y1: 117.33,
          y2: 60.975,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#6A1B9A",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#361070",
          offset: 0.4278
        }),
        _react2.default.createElement("stop", {
          stopColor: "#0F084F",
          offset: 0.8042
        }),
        _react2.default.createElement("stop", {
          stopColor: "#000543",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m122 60h-20c-1.1 0-2 0.9-2 2v42h-8v-30c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v38h-8v-54c0-1.1-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2v26h-10c-1.1 0-2 0.9-2 2v30h120v-54c0-1.1-0.9-2-2-2z",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 64,
          x2: 64,
          y1: 124.5,
          y2: 95.567,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#111762",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#0B114D",
          offset: 0.2853
        }),
        _react2.default.createElement("stop", {
          stopColor: "#030831",
          offset: 0.7382
        }),
        _react2.default.createElement("stop", {
          stopColor: "#000526",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m120.3 90.25c-4.06 2-7.41 5.21-9.59 9.17-0.59 0.69-1.07 1.52-1.42 2.51-0.02 0.07-0.05 0.14-0.07 0.21-0.17 0.51-0.7 0.78-1.23 0.65-0.32-0.08-0.64-0.12-0.98-0.12-1.34 0-2.57 0.63-3.57 1.7-0.71 0.76-1.91 0.79-2.73 0.15-2.15-1.66-4.81-2.64-7.69-2.64-2.2 0-4.27 0.58-6.08 1.58-0.87 0.48-1.95 0.18-2.54-0.62-3.56-4.84-9.18-7.98-15.52-7.98-4.8 0-9.18 1.8-12.58 4.77-0.38 0.34-0.94 0.34-1.33 0.01-0.9-0.78-1.95-1.23-3.08-1.23-1.1 0-2.13 0.43-3.01 1.17-0.34 0.29-0.82 0.3-1.2 0.06-2.19-1.41-4.77-2.23-7.54-2.23-3.9 0-7.42 1.62-9.99 4.23-0.39 0.4-1.02 0.37-1.43-0.02-0.95-0.92-2.1-1.47-3.34-1.47-1.36 0-2.61 0.65-3.61 1.74-0.39 0.43-1.06 0.47-1.45 0.05-3.57-3.84-8.59-6.24-14.15-6.22-1.21 0.04-2.17 1.05-2.17 2.26v26.02h120v-31.43c0-1.9-2-3.16-3.7-2.32z",
        fill: "url(#b)"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "p",
        d:
          "m-28 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#p"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: -80.167,
        cy: 89.833,
        r: 97.667,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0.2753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DD2C00",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: -140,
      y: 4,
      width: 120,
      height: 120,
      clipPath: "url(#a)",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: -122,
        x2: -122,
        y1: 107,
        y2: 31,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FD850C",
        offset: 0.0909
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F86123",
        offset: 0.2927
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F54B31",
        offset: 0.4569
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.562
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7312A",
        offset: 0.7248
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C02220",
        offset: 0.8944
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-110 36h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2z",
      clipPath: "url(#a)",
      fill: "url(#n)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: -62,
        x2: -62,
        y1: 136.33,
        y2: 18.348,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FD850C",
        offset: 0.0909
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F86123",
        offset: 0.2927
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F54B31",
        offset: 0.4569
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.562
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7312A",
        offset: 0.7248
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C02220",
        offset: 0.8944
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-26 48h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2z",
      clipPath: "url(#a)",
      fill: "url(#m)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: -80,
        x2: -80,
        y1: 126,
        y2: 61.248,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.236
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7312A",
        offset: 0.355
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C02220",
        offset: 0.479
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.5562
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E1818",
        offset: 0.6867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1212",
        offset: 0.89
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6E1010",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-22 60h-20c-1.1 0-2 0.9-2 2v42h-8v-30c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v38h-8v-54c0-1.1-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2v26h-10c-1.1 0-2 0.9-2 2v30h120v-54c0-1.1-0.9-2-2-2z",
      clipPath: "url(#a)",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "k",
          x1: -80,
          x2: -80,
          y1: 127,
          y2: 95.665,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#B71C1C",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6E1010",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-23.7 90.25c-4.06 2-7.41 5.21-9.59 9.17-0.59 0.69-1.07 1.52-1.42 2.51-0.02 0.07-0.05 0.14-0.07 0.21-0.17 0.51-0.7 0.78-1.23 0.65-0.32-0.08-0.64-0.12-0.98-0.12-1.34 0-2.57 0.63-3.57 1.7-0.71 0.76-1.91 0.79-2.73 0.15-2.15-1.66-4.81-2.64-7.69-2.64-2.2 0-4.27 0.58-6.08 1.58-0.87 0.48-1.95 0.18-2.54-0.62-3.56-4.84-9.18-7.98-15.52-7.98-4.8 0-9.18 1.8-12.58 4.77-0.38 0.34-0.94 0.34-1.33 0.01-0.9-0.78-1.95-1.23-3.08-1.23-1.1 0-2.13 0.43-3.01 1.17-0.34 0.29-0.82 0.3-1.2 0.06-2.19-1.41-4.77-2.23-7.54-2.23-3.9 0-7.42 1.62-9.99 4.23-0.39 0.4-1.02 0.37-1.43-0.02-0.95-0.92-2.1-1.47-3.34-1.47-1.36 0-2.61 0.65-3.61 1.74-0.39 0.43-1.06 0.47-1.45 0.05-3.57-3.84-8.59-6.24-14.15-6.22-1.21 0-2.17 1.02-2.17 2.23v26.02h120v-31.4c0-1.9-2-3.16-3.7-2.32z",
        fill: "url(#k)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
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
          "m-28 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFC107"
      },
      _react2.default.createElement("path", {
        d:
          "m-74.75 88h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-58.75 84h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-32.75 72h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-26.75 84h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-102.75 70h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-116.75 78h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-104.75 88h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#E64A19",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-124.75 54h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-114.75 50h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-88.75 42h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-78.75 49h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-78.75 60h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-38.75 58h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m-48.75 64h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFC107"
      },
      _react2.default.createElement("path", {
        d:
          "m69.25 88h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m85.25 84h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m111.25 72h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m117.25 84h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m41.25 70h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.25 78h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m39.25 88h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#7B1FA2",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m19.25 54h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.25 50h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.25 42h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m65.25 49h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m65.25 60h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m105.25 58h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.25 64h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    )
  );
}

exports.default = CitySunset;
