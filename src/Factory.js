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

function Factory(props) {
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
        cx: 62.029,
        cy: 1.5286,
        r: 61.198,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.2431 1.2787e-13 63.929 -60.501)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.3926
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CFCFCF",
        offset: 0.6549
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.14 12.47c-3.43-5.11-9.26-8.47-15.87-8.47-5.74 0-10.87 2.54-14.37 6.54-2.49-1.49-5.39-2.36-8.5-2.36-7.35 0-13.57 4.77-15.77 11.38-7.34 0.05-13.68 4.27-16.79 10.41-0.83-0.15-1.68-0.24-2.55-0.24-7.97 0-14.43 6.46-14.43 14.43s6.46 14.43 14.43 14.43c3.76 0 7.18-1.45 9.75-3.81 2.85 1.7 6.16 2.7 9.72 2.7 1.59 0 3.13-0.22 4.61-0.59 4.03 5.64 10.62 9.32 18.08 9.32 6.83 0 12.94-3.08 17.01-7.93 3.91 2.55 8.59 4.05 13.61 4.05 13.78 0 24.94-11.17 24.94-24.94-0.01-13.42-10.6-24.35-23.87-24.92z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.08 34.58c2.72-0.25 4.79 1.35 5.47 3.94 0.48 1.8 3.17 0.74 2.7-1.04-0.31-1.18-0.87-2.22-1.61-3.08 3.77-1.57 7.86-0.88 10.93 1.9 1.38 1.25 3.2-0.99 1.83-2.23-3.9-3.54-9.54-4.4-14.31-2.15-0.35 0.16-0.57 0.41-0.7 0.69-1.37-0.73-2.97-1.06-4.63-0.91-1.85 0.18-1.53 3.05 0.32 2.88z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m100.14 12.47c-3.43-5.11-9.26-8.47-15.87-8.47-5.74 0-10.87 2.54-14.37 6.54-2.49-1.49-5.39-2.36-8.5-2.36-7.35 0-13.57 4.77-15.77 11.38-7.34 0.05-13.68 4.27-16.79 10.41-0.83-0.15-1.68-0.24-2.55-0.24-7.97 0-14.43 6.46-14.43 14.43s6.46 14.43 14.43 14.43c3.76 0 7.18-1.45 9.75-3.81 2.84 1.7 6.16 2.7 9.72 2.7 1.59 0 3.13-0.22 4.61-0.59 4.03 5.64 10.62 9.32 18.08 9.32 6.83 0 12.94-3.08 17.01-7.93 3.91 2.55 8.59 4.05 13.61 4.05 13.78 0 24.94-11.17 24.94-24.94-0.01-13.42-10.6-24.35-23.87-24.92zm-1.08 46.86c-4.27 0-8.41-1.23-11.97-3.56-0.3-0.2-0.62-0.32-0.96-0.4-4.15-1.88-6.33-5.84-5.65-10.33 0.28-1.87-2.63-2.31-2.91-0.43-0.75 4.94 1.28 9.46 5.18 12.19-3.65 4.08-8.83 6.41-14.31 6.41-6.19 0-12.03-3.01-15.64-8.06-0.57-0.8-1.49-1.26-2.44-1.26-0.24 0-0.49 0.03-0.73 0.09-1.32 0.33-2.63 0.5-3.88 0.5-2.86 0-5.69-0.79-8.18-2.28-0.48-0.29-1.01-0.43-1.54-0.43-0.73 0-1.46 0.27-2.03 0.79-2.12 1.95-4.86 3.02-7.72 3.02-6.3 0-11.43-5.13-11.43-11.43s5.13-11.43 11.43-11.43c0.64 0 1.3 0.06 2.02 0.19 0.18 0.03 0.35 0.05 0.53 0.05 1.12 0 2.16-0.62 2.68-1.64 2.72-5.37 8.14-8.73 14.13-8.77 1.29-0.01 2.42-0.83 2.83-2.05 1.86-5.58 7.05-9.29 12.92-9.33 7.98-0.05 12.59 6.3 12.19 9.37-0.28 2.14 3.07 2.2 3.35 0.08 0.19-1.41 0.04-2.77-0.37-4.01 4.74-0.01 8.82 2.53 10.88 6.87 0.93 1.95 3.87 0.36 2.95-1.59-2.62-5.52-8.29-8.93-14.39-8.62-0.44 0.02-0.79 0.19-1.06 0.43-0.6-0.72-1.32-1.35-2.13-1.87 3.04-3.07 7.15-4.83 11.46-4.83 5.38 0 10.38 2.67 13.38 7.14 0.53 0.79 1.41 1.28 2.36 1.32 11.77 0.51 20.99 10.14 20.99 21.93 0 12.1-9.84 21.94-21.94 21.94z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 22,
        cy: 44.083,
        r: 50.343,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.0031768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EA4D4A",
        offset: 0.3272
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DC3A3A",
        offset: 0.7789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.97 44h-11.05c-2.85 0-5.19 1.66-5.3 3.76l-0.23 4.09h22.11l-0.23-4.09c-0.12-2.1-2.46-3.76-5.3-3.76z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 22.667,
        cy: 52.583,
        r: 11.168,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0031768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4F4F4",
        offset: 0.6677
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "33.5 51.85 11.38 51.85 10.94 59.69 33.94 59.69",
      fill: "url(#f)"
    }),
    _react2.default.createElement("polygon", {
      points: "10.94 59.69 10.5 67.54 34.39 67.54 33.94 59.69",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 22.333,
        cy: 68.583,
        r: 9.1727,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0031768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4F4F4",
        offset: 0.6677
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "10.06 75.39 34.83 75.39 34.39 67.54 10.5 67.54",
      fill: "url(#e)"
    }),
    _react2.default.createElement("polygon", {
      points:
        "36.16 98.93 35.71 91.08 35.27 83.24 34.83 75.39 10.06 75.39 9.61 83.24 9.17 91.08 8.73 98.93 8.44 104 36.44 104",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 22.443,
        x2: 22.443,
        y1: 85.917,
        y2: 75.082,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.16 98.93-2.64-47.1-0.23-4.09c-0.12-2.1-2.46-3.76-5.3-3.76h-11.07c-2.85 0-5.19 1.66-5.3 3.76l-0.23 4.09-2.64 47.1-0.31 5.07h28l-0.28-5.07z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.557,
        cy: 44.083,
        r: 50.343,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.0031768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EA4D4A",
        offset: 0.3272
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DC3A3A",
        offset: 0.7789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m69.53 44h-11.06c-2.85 0-5.19 1.66-5.3 3.76l-0.23 4.09h22.12l-0.23-4.09c-0.12-2.1-2.46-3.76-5.3-3.76z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64.224,
        cy: 52.583,
        r: 11.168,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0031768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4F4F4",
        offset: 0.6677
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "75.06 51.85 52.94 51.85 52.5 59.69 75.5 59.69",
      fill: "url(#c)"
    }),
    _react2.default.createElement("polygon", {
      points: "52.5 59.69 52.06 67.54 75.94 67.54 75.5 59.69",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 63.891,
        cy: 68.583,
        r: 9.1727,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.0031768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4F4F4",
        offset: 0.6677
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "51.61 75.39 76.39 75.39 75.94 67.54 52.06 67.54",
      fill: "url(#k)"
    }),
    _react2.default.createElement("polygon", {
      points:
        "77.71 98.93 77.27 91.08 76.83 83.24 76.39 75.39 51.61 75.39 51.17 83.24 50.73 91.08 50.29 98.93 50 104 78 104",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 64,
        x2: 64,
        y1: 85.917,
        y2: 75.082,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m77.71 98.93-2.64-47.1-0.23-4.09c-0.12-2.1-2.46-3.76-5.3-3.76h-11.07c-2.85 0-5.19 1.66-5.3 3.76l-0.23 4.09-2.64 47.1-0.3 5.07h28l-0.29-5.07z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m27.97 47c1.47 0 2.26 0.71 2.31 0.93l0.23 4.09 2.64 47.1 0.11 1.9h-21.64l0.11-1.9 2.64-47.1 0.23-4.08c0.05-0.23 0.84-0.93 2.31-0.93h11.06m0-3.01h-11.05c-2.85 0-5.19 1.66-5.3 3.76l-0.23 4.09-2.64 47.1-0.31 5.05h28l-0.29-5.07-2.64-47.1-0.23-4.09c-0.13-2.08-2.47-3.74-5.31-3.74z",
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
          "m69.53 47c1.47 0 2.26 0.71 2.31 0.93l0.23 4.09 2.64 47.1 0.11 1.9h-21.65l0.11-1.9 2.64-47.1 0.23-4.08c0.05-0.23 0.84-0.93 2.31-0.93h11.07m0-3.01h-11.06c-2.85 0-5.19 1.66-5.3 3.76l-0.23 4.09-2.64 47.1-0.3 5.05h28l-0.29-5.07-2.64-47.1-0.23-4.09c-0.13-2.08-2.47-3.74-5.31-3.74z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 64,
        x2: 64,
        y1: 94.686,
        y2: 42.798,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "52.94 96 75.06 96 74.59 88 53.41 88",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 62.5,
        cy: 83.25,
        r: 43.736,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.7549 1.8052e-13 208.59 20.75)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.0031768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.3796
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M124,124H4V91c0-3.87,3.13-7,7-7h106c3.87,0,7,3.13,7,7V124z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117 87c2.21 0 4 1.79 4 4v30h-114v-30c0-2.21 1.79-4 4-4h106m0-3h-106c-3.87 0-7 3.13-7 7v33h120v-33c0-3.87-3.13-7-7-7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84 102.13h-4.79c-1.1 0-2-0.9-2-2v-0.86c0-1.1 0.9-2 2-2h4.79c1.1 0 2 0.9 2 2v0.86c0 1.1-0.9 2-2 2z",
      fill: "#E53935"
    }),
    _react2.default.createElement("path", {
      d:
        "m116.44 107.75h-6.17c-1.1 0-2-0.9-2-2v-1.62c0-1.1 0.9-2 2-2h6.17c1.1 0 2 0.9 2 2v1.62c0 1.1-0.9 2-2 2z",
      fill: "#B71C1C"
    }),
    _react2.default.createElement("path", {
      d:
        "m103.45 111.32h-5.75c-1.1 0-2-0.9-2-2v-1.39c0-1.1 0.9-2 2-2h5.75c1.1 0 2 0.9 2 2v1.39c0 1.11-0.89 2-2 2z",
      fill: "#EF5350"
    }),
    _react2.default.createElement("path", {
      d:
        "m117.62 118.62h-9.27c-1.1 0-2-0.9-2-2v-3.34c0-1.1 0.9-2 2-2h9.27c1.1 0 2 0.9 2 2v3.34c0 1.11-0.89 2-2 2z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m81.46 95.8h-8.17c-1.1 0-2-0.9-2-2v-2.73c0-1.1 0.9-2 2-2h8.17c1.1 0 2 0.9 2 2v2.73c0 1.1-0.9 2-2 2z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m53.58 102.5h8.77c1.1 0 2-0.9 2-2v-3.06c0-1.1-0.9-2-2-2h-8.77c-1.1 0-2 0.9-2 2v3.06c0 1.1 0.9 2 2 2z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m9.96 119.88h8.77c1.1 0 2-0.9 2-2v-3.06c0-1.1-0.9-2-2-2h-8.77c-1.1 0-2 0.9-2 2v3.06c0 1.1 0.9 2 2 2z",
      fill: "#B71C1C"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.14 112.33h6.48c0.9 0 1.62-0.73 1.62-1.62v-2.13c0-0.9-0.73-1.62-1.62-1.62h-6.48c-0.9 0-1.62 0.73-1.62 1.62v2.13c0 0.9 0.73 1.62 1.62 1.62z",
      fill: "#EF5350"
    }),
    _react2.default.createElement("path", {
      d:
        "m26 104h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 104h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m110 104h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    })
  );
}

exports.default = Factory;
