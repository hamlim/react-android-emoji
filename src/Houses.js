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

function Houses(props) {
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
        y1: 74.333,
        y2: 108.34,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#83B64F",
        offset: 0.4521
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9952
      })
    ),
    _react2.default.createElement("path", {
      d: "M124,124H4V81c0-0.55,0.45-1,1-1h118c0.55,0,1,0.45,1,1V124z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 83v38h-114v-38h114m2-3h-118c-0.55 0-1 0.45-1 1v43h120v-43c0-0.55-0.45-1-1-1z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 86.127,
        cy: 6.7563,
        r: 81.032,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD34B",
        offset: 0.179
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCE3F",
        offset: 0.3526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC62C",
        offset: 0.524
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBA11",
        offset: 0.693
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0.7785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "86.13 6.52 50.78 36.82 53.3 36.82 53.3 81.52 118.95 81.52 118.95 36.82 121.48 36.82",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 96.843,
        x2: 111.92,
        y1: 45.132,
        y2: 27.459,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "86.13 6.52 50.78 36.82 53.3 36.82 53.3 81.52 118.95 81.52 118.95 36.82 121.48 36.82",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.13 10.48 29.91 25.64c-0.06 0.23-0.08 0.47-0.08 0.71v41.69h-59.66v-41.7c0-0.25-0.03-0.48-0.08-0.71l29.91-25.63m0-3.96-35.35 30.3h2.52v44.69h65.65v-44.69h2.52l-35.34-30.3z",
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
          "m91.81 24.41c0.7 0 1.26 0.57 1.26 1.26v11.36c0 0.7-0.57 1.26-1.26 1.26h-11.36c-0.7 0-1.26-0.57-1.26-1.26v-11.36c0-0.7 0.57-1.26 1.26-1.26h11.36m0-2h-11.36c-1.8 0-3.26 1.46-3.26 3.26v11.36c0 1.8 1.46 3.26 3.26 3.26h11.36c1.8 0 3.26-1.46 3.26-3.26v-11.36c0-1.79-1.46-3.26-3.26-3.26z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 80.13,
      y: 25.36,
      width: 11.99,
      height: 11.99,
      fill: "#29B6F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.18 25.67v11.36c0 0.7 0.57 1.26 1.26 1.26h11.36c0.7 0 1.26-0.57 1.26-1.26v-11.36c0-0.7-0.57-1.26-1.26-1.26h-11.35c-0.7 0-1.27 0.57-1.27 1.26zm12.63 5.05h-5.05v-5.05h5.05v5.05zm-6.31-5.05v5.05h-5.05v-5.05h5.05zm-5.05 6.32h5.05v5.05h-5.05v-5.05zm6.31 5.05v-5.05h5.05v5.05h-5.05z",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m108.62 44.41c0.7 0 1.26 0.57 1.26 1.26v11.36c0 0.7-0.57 1.26-1.26 1.26h-11.36c-0.7 0-1.26-0.57-1.26-1.26v-11.36c0-0.7 0.57-1.26 1.26-1.26h11.36m0-2h-11.36c-1.8 0-3.26 1.46-3.26 3.26v11.36c0 1.8 1.46 3.26 3.26 3.26h11.36c1.8 0 3.26-1.46 3.26-3.26v-11.36c0.01-1.8-1.46-3.26-3.26-3.26z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 96.95,
      y: 45.35,
      width: 11.99,
      height: 11.99,
      fill: "#29B6F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m96 45.67v11.36c0 0.7 0.57 1.26 1.26 1.26h11.36c0.7 0 1.26-0.57 1.26-1.26v-11.36c0-0.7-0.57-1.26-1.26-1.26h-11.36c-0.69 0-1.26 0.56-1.26 1.26zm12.62 5.05h-5.05v-5.05h5.05v5.05zm-6.31-5.05v5.05h-5.05v-5.05h5.05zm-5.05 6.31h5.05v5.05h-5.05v-5.05zm6.31 5.05v-5.05h5.05v5.05h-5.05z",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 85.811,
        cy: 3.8422,
        r: 42.695,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE3F35",
        offset: 0.34
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DC3531",
        offset: 0.8027
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122.92 35.06-34.77-30.3c-1.16-1.01-2.88-1.01-4.04 0l-34.77 30.3c-1.3 1.13-1.45 3.13-0.34 4.45 1.12 1.32 3.07 1.48 4.38 0.34l31.5-27.45c0.71-0.62 1.78-0.62 2.49 0l31.5 27.45c0.59 0.51 1.3 0.76 2.02 0.76 0.87 0 1.74-0.37 2.36-1.1 1.12-1.32 0.97-3.32-0.33-4.45z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.13 6c0.18 0 0.45 0.05 0.71 0.27l34.77 30.3c0.48 0.42 0.54 1.16 0.12 1.65-0.29 0.34-0.64 0.39-0.83 0.39-0.18 0-0.45-0.05-0.71-0.27l-31.5-27.45c-0.71-0.62-1.62-0.96-2.56-0.96s-1.85 0.34-2.56 0.96l-31.5 27.45c-0.25 0.22-0.52 0.27-0.71 0.27s-0.54-0.05-0.83-0.39c-0.41-0.49-0.36-1.23 0.12-1.65l34.77-30.3c0.25-0.22 0.52-0.27 0.71-0.27m0-2c-0.72 0-1.44 0.25-2.02 0.76l-34.77 30.3c-1.3 1.13-1.45 3.13-0.34 4.45 0.61 0.73 1.48 1.1 2.36 1.1 0.71 0 1.43-0.25 2.02-0.76l31.5-27.45c0.36-0.31 0.8-0.47 1.24-0.47s0.89 0.16 1.24 0.47l31.5 27.45c0.59 0.51 1.3 0.76 2.02 0.76 0.87 0 1.74-0.37 2.36-1.1 1.12-1.32 0.97-3.32-0.34-4.45l-34.75-30.3c-0.58-0.51-1.3-0.76-2.02-0.76z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 170.38,
        cy: 6.7563,
        r: 81.032,
        gradientTransform: "matrix(-1 0 0 1 212.25 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD34B",
        offset: 0.179
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCE3F",
        offset: 0.3526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC62C",
        offset: 0.524
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBA11",
        offset: 0.693
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0.7785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "41.87 6.52 77.22 36.82 74.7 36.82 74.7 81.52 9.05 81.52 9.05 36.82 6.52 36.82",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m41.87 10.48 29.91 25.64c-0.06 0.23-0.08 0.47-0.08 0.71v41.69h-59.65v-41.7c0-0.25-0.03-0.48-0.08-0.71l29.9-25.63m0-3.96-35.35 30.3h2.52v44.69h65.66v-44.69h2.52l-35.35-30.3z",
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
          "m47.55 24.41c0.7 0 1.26 0.57 1.26 1.26v11.36c0 0.7-0.57 1.26-1.26 1.26h-11.36c-0.7 0-1.26-0.57-1.26-1.26v-11.36c0-0.7 0.57-1.26 1.26-1.26h11.36m0-2h-11.36c-1.8 0-3.26 1.46-3.26 3.26v11.36c0 1.8 1.46 3.26 3.26 3.26h11.36c1.8 0 3.26-1.46 3.26-3.26v-11.36c0.01-1.79-1.46-3.26-3.26-3.26z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 30.089,
        x2: 21.135,
        y1: 40.973,
        y2: 28.484,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "41.87 6.52 77.22 36.82 74.7 36.82 74.7 81.52 9.05 81.52 9.05 36.82 6.52 36.82",
      fill: "url(#d)"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-1 -1.2246e-16 1.2246e-16 -1 83.747 62.71)",
      x: 35.88,
      y: 25.36,
      width: 11.99,
      height: 11.99,
      fill: "#29B6F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m48.82 25.67v11.36c0 0.7-0.57 1.26-1.26 1.26h-11.37c-0.7 0-1.26-0.57-1.26-1.26v-11.36c0-0.7 0.57-1.26 1.26-1.26h11.36c0.7 0 1.27 0.57 1.27 1.26zm-12.63 5.05h5.05v-5.05h-5.05v5.05zm6.31-5.05v5.05h5.05v-5.05h-5.05zm5.05 6.32h-5.05v5.05h5.05v-5.05zm-6.31 5.05v-5.05h-5.05v5.05h5.05z",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.74 44.41c0.7 0 1.26 0.57 1.26 1.26v11.36c0 0.7-0.57 1.26-1.26 1.26h-11.36c-0.7 0-1.26-0.57-1.26-1.26v-11.36c0-0.7 0.57-1.26 1.26-1.26h11.36m0-2h-11.36c-1.8 0-3.26 1.46-3.26 3.26v11.36c0 1.8 1.46 3.26 3.26 3.26h11.36c1.8 0 3.26-1.46 3.26-3.26v-11.36c0-1.8-1.46-3.26-3.26-3.26z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(-1 -1.2246e-16 1.2246e-16 -1 50.113 102.7)",
      x: 19.06,
      y: 45.35,
      width: 11.99,
      height: 11.99,
      fill: "#29B6F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m32 45.67v11.36c0 0.7-0.57 1.26-1.26 1.26h-11.36c-0.7 0-1.26-0.57-1.26-1.26v-11.36c0-0.7 0.57-1.26 1.26-1.26h11.36c0.69 0 1.26 0.56 1.26 1.26zm-12.62 5.05h5.05v-5.05h-5.05v5.05zm6.31-5.05v5.05h5.05v-5.05h-5.05zm5.05 6.31h-5.05v5.05h5.05v-5.05zm-6.31 5.05v-5.05h-5.05v5.05h5.05z",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 170.06,
        cy: 3.8422,
        r: 42.695,
        gradientTransform: "matrix(-1 0 0 1 212.25 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE3F35",
        offset: 0.34
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DC3531",
        offset: 0.8027
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m5.08 35.06 34.77-30.3c1.16-1.01 2.88-1.01 4.04 0l34.77 30.3c1.3 1.13 1.45 3.13 0.34 4.45-1.12 1.32-3.07 1.48-4.38 0.34l-31.5-27.45c-0.71-0.62-1.78-0.62-2.49 0l-31.51 27.45c-0.59 0.51-1.3 0.76-2.02 0.76-0.87 0-1.74-0.37-2.36-1.1-1.11-1.32-0.96-3.32 0.34-4.45z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m41.87 6c0.18 0 0.45 0.05 0.71 0.27l34.77 30.3c0.48 0.42 0.54 1.16 0.12 1.65-0.29 0.34-0.64 0.39-0.83 0.39-0.18 0-0.45-0.05-0.71-0.27l-31.5-27.45c-0.71-0.62-1.62-0.96-2.56-0.96s-1.85 0.34-2.56 0.96l-31.5 27.45c-0.25 0.22-0.52 0.27-0.71 0.27s-0.54-0.05-0.83-0.39c-0.41-0.49-0.36-1.23 0.12-1.65l34.77-30.3c0.26-0.22 0.53-0.27 0.71-0.27m0-2c-0.72 0-1.44 0.25-2.02 0.76l-34.77 30.3c-1.3 1.13-1.45 3.13-0.34 4.45 0.61 0.73 1.48 1.1 2.36 1.1 0.72 0 1.43-0.25 2.02-0.76l31.5-27.45c0.36-0.31 0.8-0.47 1.24-0.47s0.89 0.16 1.24 0.47l31.5 27.45c0.59 0.51 1.3 0.76 2.02 0.76 0.87 0 1.74-0.37 2.36-1.1 1.12-1.32 0.96-3.32-0.34-4.45l-34.75-30.3c-0.58-0.51-1.3-0.76-2.02-0.76z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 21.656,
        x2: 21.656,
        y1: 63.98,
        y2: 85.503,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#66BB6A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#59AE5D",
        offset: 0.1273
      }),
      _react2.default.createElement("stop", {
        stopColor: "#419745",
        offset: 0.4152
      }),
      _react2.default.createElement("stop", {
        stopColor: "#388E3C",
        offset: 0.5924
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1B5E20",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.64 76.86c-0.99-3.34-2.96-6.12-6.35-6.94-1.19-0.29-2.33-0.29-3.41-0.08-0.99-3.38-4.1-5.84-7.78-5.84-2.91 0-5.46 1.53-6.89 3.83-1.06-0.26-2.21-0.32-3.39-0.1-3.47 0.63-6.24 3.5-6.59 7.01-0.2 2.06 0.68 3.33 0.67 3.34-1.73 1.73-0.78 5.24 1.29 5.24h33.07c-0.01-0.03 0.34-3.21-0.62-6.46z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m38.64 76.86c-0.99-3.34-2.96-6.12-6.35-6.94-0.64-0.16-1.28-0.23-1.89-0.23-0.52 0-1.03 0.05-1.52 0.14-0.99-3.37-4.1-5.83-7.78-5.83-2.91 0-5.46 1.53-6.89 3.83-0.62-0.15-1.27-0.23-1.93-0.23-0.48 0-0.97 0.04-1.46 0.13-3.47 0.63-6.24 3.5-6.59 7.01-0.2 2.06 0.68 3.33 0.67 3.34-1.73 1.73-0.78 5.24 1.29 5.24h33.07c-0.01-0.03 0.34-3.21-0.62-6.46zm-32.06 3.94c-0.09-0.28-0.1-0.74 0.09-0.93 0.8-0.8 0.95-2.09 0.39-3.07-0.28-0.5-0.4-1.14-0.33-1.81 0.23-2.33 2.13-4.34 4.52-4.77 0.34-0.06 0.68-0.09 1.01-0.09 0.03 0 0.07 0.01 0.1 0.01-1.35 2.31-1.3 4.3-1.3 4.39 0.02 0.68 0.58 1.22 1.26 1.22h0.04c0.7-0.02 1.24-0.61 1.22-1.3 0-0.02-0.02-1.83 1.46-3.8 0.12-0.16 0.19-0.35 0.22-0.54 0.43-0.2 0.8-0.51 1.07-0.93 1.03-1.65 2.8-2.64 4.74-2.64 2.47 0 4.67 1.65 5.36 4.02 0.05 0.18 0.15 0.34 0.24 0.5-1.99 0.5-3.69 2.04-4.27 3.92-1.19 0.08-2.37 0.39-3.43 0.93-0.62 0.32-0.87 1.08-0.55 1.7 0.22 0.44 0.67 0.69 1.13 0.69 0.19 0 0.39-0.04 0.57-0.14 1.6-0.81 3.66-0.91 5.14-0.24 0.63 0.28 1.38 0.01 1.67-0.63 0.29-0.63 0.01-1.38-0.63-1.67-0.4-0.18-0.83-0.31-1.27-0.42 0.55-1 1.74-1.78 2.93-1.8 0.62-0.01 1.1-0.47 1.2-1.05 0.06-0.01 0.11-0.01 0.17-0.02 0.35-0.07 0.7-0.1 1.05-0.1 0.43 0 0.87 0.05 1.3 0.16 2.14 0.52 3.66 2.27 4.53 5.2 0.33 1.14 0.48 2.28 0.54 3.22h-30.17z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 106.34,
        x2: 106.34,
        y1: 63.98,
        y2: 85.503,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#66BB6A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#59AE5D",
        offset: 0.1273
      }),
      _react2.default.createElement("stop", {
        stopColor: "#419745",
        offset: 0.4152
      }),
      _react2.default.createElement("stop", {
        stopColor: "#388E3C",
        offset: 0.5924
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1B5E20",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.33 76.86c-0.99-3.34-2.96-6.12-6.35-6.94-1.19-0.29-2.33-0.29-3.41-0.08-0.98-3.37-4.09-5.83-7.78-5.83-2.91 0-5.46 1.53-6.89 3.83-1.06-0.26-2.21-0.32-3.39-0.1-3.47 0.63-6.24 3.5-6.59 7.01-0.2 2.06 0.68 3.33 0.67 3.34-1.73 1.73-0.78 5.24 1.29 5.24h33.07c-0.01-0.04 0.34-3.22-0.62-6.47z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m123.33 76.86c-0.99-3.34-2.96-6.12-6.35-6.94-0.64-0.16-1.28-0.23-1.89-0.23-0.52 0-1.03 0.05-1.52 0.14-0.98-3.37-4.09-5.83-7.78-5.83-2.91 0-5.46 1.53-6.89 3.83-0.62-0.15-1.27-0.23-1.93-0.23-0.48 0-0.97 0.04-1.46 0.13-3.47 0.63-6.24 3.5-6.59 7.01-0.2 2.06 0.68 3.33 0.67 3.34-1.73 1.73-0.78 5.24 1.29 5.24h33.07c-0.01-0.03 0.34-3.21-0.62-6.46zm-32.06 3.94c-0.09-0.28-0.1-0.74 0.09-0.93 0.8-0.8 0.95-2.09 0.39-3.07-0.28-0.5-0.4-1.14-0.33-1.81 0.23-2.33 2.13-4.34 4.52-4.77 0.34-0.06 0.68-0.09 1.01-0.09 0.03 0 0.07 0.01 0.1 0.01-1.35 2.31-1.3 4.3-1.3 4.39 0.02 0.68 0.58 1.22 1.26 1.22h0.04c0.7-0.02 1.24-0.61 1.22-1.3 0-0.02-0.02-1.83 1.46-3.8 0.12-0.16 0.19-0.35 0.22-0.54 0.43-0.2 0.8-0.51 1.07-0.93 1.03-1.65 2.8-2.64 4.74-2.64 2.47 0 4.67 1.65 5.36 4.02 0.05 0.18 0.15 0.34 0.24 0.5-1.99 0.5-3.69 2.04-4.27 3.92-1.19 0.08-2.37 0.39-3.43 0.93-0.62 0.32-0.87 1.08-0.55 1.7 0.22 0.44 0.67 0.69 1.13 0.69 0.19 0 0.39-0.04 0.57-0.14 1.6-0.81 3.66-0.91 5.14-0.24 0.63 0.28 1.38 0.01 1.67-0.63 0.29-0.63 0.01-1.38-0.63-1.67-0.4-0.18-0.83-0.31-1.27-0.42 0.55-1 1.74-1.78 2.93-1.8 0.62-0.01 1.1-0.47 1.2-1.05 0.06-0.01 0.11-0.01 0.17-0.02 0.35-0.07 0.7-0.1 1.05-0.1 0.43 0 0.87 0.05 1.3 0.16 2.14 0.52 3.66 2.27 4.53 5.2 0.33 1.14 0.48 2.28 0.54 3.22h-30.17z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: 64,
        cy: 15.137,
        r: 101.6,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD54F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD34B",
        offset: 0.179
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCE3F",
        offset: 0.3526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC62C",
        offset: 0.524
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBA11",
        offset: 0.693
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0.7785
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "64 14.85 17.8 54.45 21.1 54.45 21.1 107.97 106.9 107.97 106.9 54.45 110.2 54.45",
      fill: "url(#q)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,14.85l-46.2,39.6h3.3v53.52h2.96l0.04-53.52c0-0.44-0.09-0.85-0.26-1.23L64,18.8l40.16,34.42 c-0.17,0.37-0.26,0.79-0.26,1.23v50.52l0.01,3h2.99V54.45h3.3L64,14.85z",
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
          "m71.42 33c0.91 0 1.65 0.74 1.65 1.65v14.85c0 0.91-0.74 1.65-1.65 1.65h-14.84c-0.91 0-1.65-0.74-1.65-1.65v-14.85c0-0.91 0.74-1.65 1.65-1.65h14.84m0-2h-14.84c-2.01 0-3.65 1.64-3.65 3.65v14.85c0 2.01 1.64 3.65 3.65 3.65h14.85c2.01 0 3.65-1.64 3.65-3.65v-14.85c-0.01-2.01-1.64-3.65-3.66-3.65z",
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
          "m92.05 61.05c0.91 0 1.65 0.74 1.65 1.65v23.1c0 0.91-0.74 1.65-1.65 1.65h-14.85c-0.91 0-1.65-0.74-1.65-1.65v-23.1c0-0.91 0.74-1.65 1.65-1.65h14.85m0-2h-14.85c-2.01 0-3.65 1.64-3.65 3.65v23.1c0 2.01 1.64 3.65 3.65 3.65h14.85c2.01 0 3.65-1.64 3.65-3.65v-23.1c0-2.02-1.64-3.65-3.65-3.65z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "p",
        cx: 48.636,
        cy: 57.54,
        r: 43.311,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CA2929",
        offset: 0.4374
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,100.64H34.3V59.4c0-0.91,0.74-1.65,1.65-1.65h26.4c0.91,0,1.65,0.74,1.65,1.65V100.64z",
      fill: "url(#p)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 49.048,
        cy: 59.809,
        r: 38.879,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.7 98.64h-23.1c-0.46 0-0.82-0.37-0.82-0.82v-37.25c0-0.46 0.37-0.82 0.82-0.82h23.1c0.46 0 0.82 0.37 0.82 0.82v37.24c0.01 0.46-0.36 0.83-0.82 0.83z",
      fill: "url(#o)"
    }),
    _react2.default.createElement("rect", {
      x: 56.16,
      y: 34.24,
      width: 15.67,
      height: 15.67,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m54.93 34.65v14.85c0 0.91 0.74 1.65 1.65 1.65h14.85c0.91 0 1.65-0.74 1.65-1.65v-14.85c0-0.91-0.74-1.65-1.65-1.65h-14.85c-0.92 0-1.65 0.74-1.65 1.65zm16.49 6.6h-6.6v-6.6h6.6v6.6zm-8.24-6.6v6.6h-6.6v-6.6h6.6zm-6.6 8.25h6.6v6.6h-6.6v-6.6zm8.24 6.6v-6.6h6.6v6.6h-6.6z",
      fill: "#eee"
    }),
    _react2.default.createElement("rect", {
      x: 76.4,
      y: 62.28,
      width: 16.45,
      height: 23.92,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "url(#n)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "n",
          cx: 48.739,
          cy: 63.315,
          r: 34.33,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E53935",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#DC3431",
          offset: 0.4072
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C62828",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m58.23 75.89h-18.15c-0.46 0-0.82-0.37-0.82-0.82v-11.55c0-0.46 0.37-0.82 0.82-0.82h18.15c0.46 0 0.82 0.37 0.82 0.82v11.55c0 0.46-0.37 0.82-0.82 0.82z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.23 95.69h-18.15c-0.46 0-0.82-0.37-0.82-0.82v-14.85c0-0.46 0.37-0.82 0.82-0.82h18.15c0.46 0 0.82 0.37 0.82 0.82v14.85c0 0.45-0.37 0.82-0.82 0.82z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 49.17,
        x2: 49.17,
        y1: 98.722,
        y2: 104.11,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B5B5B5",
        offset: 0.2153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.5502
      }),
      _react2.default.createElement("stop", {
        stopColor: "#787878",
        offset: 0.9652
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.32 103.38h-36.3v-3.02c0-1.13 0.92-2.04 2.04-2.04h32.21c1.13 0 2.04 0.92 2.04 2.04v3.02z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m65.28 99.32c0.58 0 1.04 0.47 1.04 1.04v2.02h-34.3v-2.02c0-0.58 0.47-1.04 1.04-1.04h32.22m0-1h-32.21c-1.13 0-2.04 0.92-2.04 2.04v3.02h36.3v-3.02c-0.01-1.12-0.93-2.04-2.05-2.04z",
        fill: "#263238"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3918 -.92 .92 .3918 -63.332 104.77)",
        cx: 47.58,
        cy: 100.29,
        rx: 0.35,
        ry: 0.7,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6303 -.7763 .7763 .6303 -55.647 86.805)",
        cx: 63.33,
        cy: 101.83,
        rx: 0.31,
        ry: 0.58,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 49.68,
        cy: 101.5,
        rx: 0.85,
        ry: 0.41,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 57.01,
        cy: 101.45,
        rx: 0.85,
        ry: 0.41,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 55.25,
        cy: 100.4,
        rx: 0.58,
        ry: 0.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 64.77,
        cy: 100.55,
        rx: 0.84,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 44.6,
        cy: 100.27,
        rx: 0.58,
        ry: 0.28,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9888 -.149 .149 .9888 -14.336 10.272)",
        cx: 61.38,
        cy: 100.8,
        rx: 0.95,
        ry: 0.46,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9735 -.2286 .2286 .9735 -21.963 13.184)",
        cx: 45.93,
        cy: 101.41,
        rx: 0.92,
        ry: 0.46,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 58.52,
        cy: 100.27,
        rx: 1.17,
        ry: 0.43,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.835 -.5503 .5503 .835 -46.562 44.849)",
        cx: 51.5,
        cy: 100.06,
        rx: 0.71,
        ry: 0.31,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4194 -.9078 .9078 .4194 -60.889 107.54)",
        cx: 53.63,
        cy: 101.37,
        rx: 0.48,
        ry: 1.22,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6303 -.7763 .7763 .6303 -64.208 69.591)",
        cx: 40.97,
        cy: 102.22,
        rx: 0.31,
        ry: 0.58,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 34.65,
        cy: 101.83,
        rx: 0.85,
        ry: 0.41,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 32.89,
        cy: 100.79,
        rx: 0.58,
        ry: 0.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 42.42,
        cy: 100.93,
        rx: 0.84,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9888 -.149 .149 .9888 -14.643 6.945)",
        cx: 39.02,
        cy: 101.18,
        rx: 0.95,
        ry: 0.46,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 36.16,
        cy: 100.65,
        rx: 1.17,
        ry: 0.43,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "l",
        d:
          "m92.05 61.05h-14.85c-0.91 0-1.65 0.74-1.65 1.65v23.1c0 0.91 0.74 1.65 1.65 1.65h14.85c0.91 0 1.65-0.74 1.65-1.65v-23.1c0-0.92-0.74-1.65-1.65-1.65z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#l"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m77.2 61.05c-0.91 0-1.65 0.74-1.65 1.65v23.1c0 0.91 0.74 1.65 1.65 1.65h14.85c0.91 0 1.65-0.74 1.65-1.65v-23.1c0-0.91-0.74-1.65-1.65-1.65h-14.85zm8.25 1.65h6.6v6.6h-6.6v-6.6zm-8.25 0h6.6v6.6h-6.6v-6.6zm0 8.25h6.6v6.6h-6.6v-6.6zm6.6 14.84h-6.6v-6.6h6.6v6.6zm8.25 0h-6.6v-6.6h6.6v6.6zm-6.6-8.25v-6.6h6.6v6.6h-6.6z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.01 81.84c-1.92 0-3.47-1.56-3.47-3.47s1.56-3.48 3.47-3.48 3.48 1.56 3.48 3.48-1.57 3.47-3.48 3.47z",
      fill: "#FFC107"
    }),
    _react2.default.createElement("path", {
      d:
        "m58.01 75.89c1.37 0 2.47 1.11 2.47 2.47s-1.11 2.47-2.47 2.47c-1.37 0-2.47-1.11-2.47-2.47s1.1-2.47 2.47-2.47m0-2c-2.47 0-4.47 2.01-4.47 4.47 0 2.47 2.01 4.47 4.47 4.47s4.47-2.01 4.47-4.47-2.01-4.47-4.47-4.47z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.52 90.74h-19.8c-0.91 0-1.65-0.74-1.65-1.65v-3.3c0-0.91 0.74-1.65 1.65-1.65h19.8c0.91 0 1.65 0.74 1.65 1.65v3.3c0 0.92-0.74 1.65-1.65 1.65z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m94.17 86.14v2.6h-19.1v-2.6h19.1m0.35-2h-19.8c-0.91 0-1.65 0.74-1.65 1.65v3.3c0 0.91 0.74 1.65 1.65 1.65h19.8c0.91 0 1.65-0.74 1.65-1.65v-3.3c0-0.91-0.74-1.65-1.65-1.65z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 63.588,
        cy: 11.343,
        r: 55.798,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE3F35",
        offset: 0.34
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DC3531",
        offset: 0.8027
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m112.08 52.14-45.44-39.6c-1.52-1.32-3.76-1.32-5.28 0l-45.44 39.6c-1.7 1.48-1.9 4.09-0.44 5.82s4.02 1.93 5.72 0.45l41.17-35.88c0.93-0.81 2.32-0.81 3.25 0l41.18 35.87c0.77 0.67 1.7 0.99 2.64 0.99 1.14 0 2.28-0.49 3.08-1.44 1.46-1.72 1.26-4.33-0.44-5.81z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 14.55c0.17 0 0.43 0.04 0.67 0.25l45.44 39.6c0.46 0.4 0.52 1.15 0.12 1.62-0.27 0.32-0.61 0.37-0.79 0.37-0.17 0-0.43-0.04-0.67-0.25l-41.17-35.88c-1-0.87-2.27-1.35-3.6-1.35-1.32 0-2.6 0.48-3.6 1.35l-41.17 35.88c-0.24 0.21-0.5 0.26-0.67 0.26-0.18 0-0.51-0.05-0.79-0.37-0.4-0.47-0.35-1.22 0.12-1.62l45.44-39.6c0.24-0.22 0.5-0.26 0.67-0.26m0-3c-0.94 0-1.88 0.33-2.64 0.99l-45.44 39.6c-1.7 1.48-1.9 4.09-0.44 5.82 0.8 0.95 1.94 1.44 3.08 1.44 0.93 0 1.87-0.33 2.64-0.99l41.17-35.88c0.47-0.41 1.05-0.61 1.63-0.61s1.16 0.2 1.63 0.61l41.17 35.87c0.77 0.67 1.7 0.99 2.64 0.99 1.14 0 2.28-0.49 3.08-1.44 1.46-1.73 1.26-4.33-0.44-5.82l-45.44-39.6c-0.76-0.65-1.7-0.98-2.64-0.98z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 49.17,
        x2: 49.17,
        y1: 102.56,
        y2: 107.91,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BABABA",
        offset: 0.3969
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0B0B0",
        offset: 0.7025
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A0A0A0",
        offset: 0.9786
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m70.62 108h-42.9v-3.47c0-1.19 0.96-2.15 2.15-2.15h38.59c1.19 0 2.15 0.96 2.15 2.15v3.47z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m68.47 102.38h-38.6c-1.19 0-2.15 0.96-2.15 2.15v3.47h1v-1-2.47c0-0.64 0.52-1.15 1.15-1.15h38.59c0.64 0 1.15 0.52 1.15 1.15v2.47 1h1v-3.47c0.01-1.18-0.95-2.15-2.14-2.15z",
        fill: "#263238"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8856 -.4645 .4645 .8856 -41.273 41.949)",
        cx: 64.5,
        cy: 104.74,
        rx: 0.79,
        ry: 0.43,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.7036 -.7106 .7106 .7036 -61.819 65.104)",
        cx: 47.14,
        cy: 106.66,
        rx: 0.67,
        ry: 0.36,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 62.18,
        cy: 106.25,
        rx: 0.94,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 54.11,
        cy: 106.18,
        rx: 0.94,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 56.05,
        cy: 104.88,
        rx: 0.65,
        ry: 0.44,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 45.54,
        cy: 105.06,
        rx: 0.93,
        ry: 0.63,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 67.79,
        cy: 104.71,
        rx: 0.65,
        ry: 0.35,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.182 -.9833 .9833 .182 -63.301 134.65)",
        cx: 49.28,
        cy: 105.37,
        rx: 0.57,
        ry: 1.06,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.2787 -.9604 .9604 .2787 -54.089 140.24)",
        cx: 66.32,
        cy: 106.13,
        rx: 0.57,
        ry: 1.02,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 52.44,
        cy: 104.72,
        rx: 1.29,
        ry: 0.53,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6192 -.7853 .7853 .6192 -59.108 87.038)",
        cx: 60.18,
        cy: 104.46,
        rx: 0.37,
        ry: 0.81,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8778 -.4791 .4791 .8778 -43.753 40.672)",
        cx: 57.83,
        cy: 106.08,
        rx: 1.38,
        ry: 0.58,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8856 -.4645 .4645 .8856 -44.279 30.698)",
        cx: 40.16,
        cy: 105.22,
        rx: 0.79,
        ry: 0.43,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 37.85,
        cy: 106.73,
        rx: 0.94,
        ry: 0.51,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 31.71,
        cy: 105.36,
        rx: 0.65,
        ry: 0.44,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.2787 -.9604 .9604 .2787 -72.098 117.21)",
        cx: 41.98,
        cy: 106.6,
        rx: 0.57,
        ry: 1.02,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6192 -.7853 .7853 .6192 -68.75 68.109)",
        cx: 35.84,
        cy: 104.93,
        rx: 0.37,
        ry: 0.81,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8778 -.4791 .4791 .8778 -46.955 29.072)",
        cx: 33.5,
        cy: 106.56,
        rx: 1.38,
        ry: 0.58,
        opacity: 0.2
      })
    )
  );
}

exports.default = Houses;
