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

function Art(props) {
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
        id: "g",
        cx: 60.676,
        cy: 20.768,
        r: 106.44,
        gradientTransform:
          "matrix(1.0361e-13 1 -.6564 6.7036e-14 74.288 -39.907)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCC80",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB7D",
        offset: 0.2942
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC774",
        offset: 0.4879
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC166",
        offset: 0.6526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB850",
        offset: 0.8012
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAD35",
        offset: 0.9375
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m117.5 56.14c4.21-3.85 14.28-23.01-4.45-40.17-6.3-5.78-20.55-11.97-36.64-11.97-24.41 0-55.53 12.41-67.63 40.2-17.43 40 15.48 79.8 55.84 79.8 18.59 0 38.95-11.46 47.23-23.08 0.52-0.73 1.09-1.42 1.63-2.13 2.04-2.65 6.01-10.02-7.34-15.64-5.93-2.5-6.66-8.26-5.93-11.13 2.19-8.67 9.65-8.89 17.29-15.88zm-29.87 43.38c-6.47 2.2-13.17-0.24-14.97-5.46-1.8-5.21 1.98-11.22 8.45-13.42s13.17 0.24 14.97 5.46c1.8 5.21-1.98 11.22-8.45 13.42z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m117.5 56.14c4.21-3.85 14.28-23.01-4.45-40.17-6.3-5.78-20.55-11.97-36.64-11.97-24.41 0-55.53 12.41-67.63 40.2-17.43 40 15.48 79.8 55.84 79.8 18.59 0 38.95-11.46 47.23-23.08 0.52-0.73 1.09-1.42 1.63-2.13 2.04-2.65 6.01-10.02-7.34-15.64-5.93-2.5-6.66-8.26-5.93-11.13 2.19-8.67 9.65-8.89 17.29-15.88zm-29.87 43.38c-6.47 2.2-13.17-0.24-14.97-5.46-1.8-5.21 1.98-11.22 8.45-13.42s13.17 0.24 14.97 5.46c1.8 5.21-1.98 11.22-8.45 13.42z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.773 -.6344 .6344 .773 -54.686 39.806)",
      cx: 28.28,
      cy: 96.32,
      rx: 16.05,
      ry: 4.02,
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m11.6 101.76s24.05-24.13 32.07-20.11-20.04 28.15-20.04 28.15h-4.01l4.01 4.02s36.07-28.15 32.07-40.22-44.56 22.71-47.25 24.28l3.15 3.88z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m1.51 87.52s33.55-26.8 66.59-29.98c0 0 10.51-2.34 8.18 5.69-2.34 8.04-14.35 36.51-44.23 56.1l-3.5-2.51s51.07-35.67 34.55-51.92c0 0-1.84-3.01-12.68 1.34s-47.41 28.98-47.41 28.98l-1.5-7.7z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m-3.32 78.52s24.17-17.06 51.62-26.1 38.51-26.72 38.51-26.72 0.2 16.03-42.81 32.89-43.63 25.28-43.63 25.28l-3.69-5.35z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m65.55 3.48s-38.92 46.04-59.2 35.35l-3.69 7.19s34.21 4.32 68-42.96l-5.11 0.42z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m0.43 56.8s29.29-4.11 46.7-15.83 26.21-32.67 53.46-31.65l5.53 2.26s-17.82-3.91-32.57 13.57-18.43 18.91-31.54 23.64-44.45 11.71-44.45 11.71l2.87-3.7z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m118.73 20.26s-20.99 11.96-27.47 20.03c0 0 25.4-12.74 32.92-11.18l-5.45-8.85z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m124.23 35.19s-39.26 14.23-48.73 39.88-22.11 33.43-24.99 34.87c-2.87 1.44-18.67 15.27-18.96 16.43l11.78 2.31s26.42-22.48 29.29-38.04 17.99-37.27 55.63-53.72l-4.02-1.73z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m82.16 95.93s-10.63 25.36-30.16 41.21c0 0 22.4-10.38 36.48-38.91l-6.32-2.3z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m106.95 83.37s-8.36 34.02-23.47 42.43c0 0 20.9-1.83 30.54-43.53l-7.07 1.1z",
      clipPath: "url(#a)",
      fill: "#FFA726",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m76.41 7c14.71 0 28.55 5.63 34.62 11.19 6.62 6.07 9.98 12.9 9.97 20.31-0.01 7.78-3.79 13.86-5.52 15.43-2.56 2.34-5.09 3.85-7.55 5.31-4.59 2.74-8.93 5.33-10.62 12.05-1.04 4.14 0.14 11.45 7.68 14.63 4.36 1.84 6.97 3.97 7.55 6.18 0.52 1.96-0.67 3.89-1.42 4.86-0.17 0.22-0.34 0.43-0.51 0.65-0.39 0.5-0.8 1.01-1.19 1.57-7.49 10.49-26.74 21.82-44.8 21.82-19.6 0-38.4-10.1-49.05-26.36-9.73-14.86-11.2-32.8-4.04-49.24 5.28-12.12 14.91-22.17 27.86-29.07 11.29-6.02 24.44-9.33 37.02-9.33m6.42 96.33c1.94 0 3.88-0.33 5.77-0.97 4.31-1.46 7.81-4.43 9.63-8.13 1.45-2.96 1.69-6.2 0.69-9.11-1.74-5.03-6.84-8.29-13-8.29-1.94 0-3.88 0.33-5.77 0.97-4.31 1.46-7.81 4.43-9.63 8.13-1.45 2.96-1.69 6.2-0.69 9.11 1.74 5.04 6.84 8.29 13 8.29m-6.42-99.33c-24.41 0-55.53 12.41-67.63 40.2-17.43 40 15.48 79.8 55.84 79.8 18.59 0 38.95-11.46 47.23-23.08 0.52-0.73 1.09-1.42 1.63-2.13 2.04-2.65 6.01-10.02-7.34-15.64-5.93-2.5-6.66-8.26-5.93-11.13 2.18-8.67 9.64-8.9 17.28-15.88 4.21-3.85 14.28-23.01-4.45-40.17-6.29-5.78-20.54-11.97-36.63-11.97zm6.42 96.33c-4.7 0-8.81-2.35-10.17-6.26-1.8-5.21 1.98-11.22 8.45-13.42 1.61-0.55 3.24-0.81 4.8-0.81 4.7 0 8.81 2.35 10.17 6.27 1.8 5.21-1.98 11.22-8.45 13.42-1.61 0.54-3.24 0.8-4.8 0.8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9546 -.2979 .2979 .9546 -4.2463 19.712)",
      cx: 62.54,
      cy: 23.78,
      rx: 12.82,
      ry: 10.28,
      fill: "#C62828"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 59.167,
        cy: 13.833,
        r: 17.099,
        gradientTransform:
          "matrix(1.0287e-13 1 -.7798 8.0216e-14 69.954 -45.333)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E94B49",
        offset: 0.3459
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D73534",
        offset: 0.8869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.86 18.74c1.61 5.27-2.47 11.21-9.13 13.26s-13.37-0.56-14.98-5.83 2.47-11.21 9.13-13.26 13.36 0.56 14.98 5.83z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9546 -.2979 .2979 .9546 -11.931 12.447)",
      cx: 34.87,
      cy: 45.37,
      rx: 12.94,
      ry: 10.34,
      fill: "#1565C0"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 31.522,
        cy: 35.116,
        r: 20.387,
        gradientTransform:
          "matrix(1.0287e-13 1 -.7798 8.0216e-14 58.905 3.5937)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3B9DEF",
        offset: 0.2859
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2787DE",
        offset: 0.7328
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m45.56 40.15c1.66 5.41-2.54 11.49-9.36 13.6s-13.7-0.57-15.36-5.98 2.54-11.49 9.36-13.6 13.7 0.57 15.36 5.98z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9546 -.2979 .2979 .9546 -21.184 11.599)",
      cx: 27.45,
      cy: 75.28,
      rx: 13.3,
      ry: 10.67,
      fill: "#F9A825"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 24.833,
        cy: 65.667,
        r: 21.006,
        gradientTransform:
          "matrix(1.0287e-13 1 -.7798 8.0216e-14 76.04 40.833)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.436
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEE238",
        offset: 0.6129
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCCA30",
        offset: 0.8995
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.52 70.58c1.61 5.27-2.47 11.21-9.13 13.26s-13.37-0.56-14.98-5.83 2.47-11.21 9.13-13.26c6.66-2.06 13.37 0.55 14.98 5.83z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9545 -.2983 .2983 .9545 -28.562 19.098)",
      cx: 48.29,
      cy: 103.12,
      rx: 12.68,
      ry: 10.34,
      fill: "#558B2F"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 45,
        cy: 93.5,
        r: 17.099,
        gradientTransform: "matrix(1.0287e-13 1 -.7798 8.0216e-14 117.91 48.5)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8BC34A",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#83BB46",
        offset: 0.3459
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6DA53B",
        offset: 0.8869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m58.69 98.41c1.61 5.27-2.47 11.21-9.13 13.26s-13.37-0.56-14.98-5.83 2.47-11.21 9.13-13.26 13.37 0.56 14.98 5.83z",
      fill: "url(#b)"
    })
  );
}

exports.default = Art;
