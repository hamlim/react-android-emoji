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

function Snake(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m32.62 21.61c-3.81 0-6.91-2.65-6.91-5.92 0-3.26 3.1-5.92 6.91-5.92s6.91 2.65 6.91 5.92-3.1 5.92-6.91 5.92z",
      fill: "#CCFF90"
    }),
    _react2.default.createElement("path", {
      d:
        "m32.62 10.56c3.39 0 6.13 2.3 6.13 5.14s-2.74 5.14-6.13 5.14-6.13-2.3-6.13-5.14 2.75-5.14 6.13-5.14m0-1.56c-4.24 0-7.69 3-7.69 6.7s3.45 6.7 7.69 6.7 7.69-3 7.69-6.7-3.45-6.7-7.69-6.7z",
      fill: "#B3B3B3"
    }),
    _react2.default.createElement("ellipse", {
      cx: 32.68,
      cy: 15.66,
      rx: 1.6,
      ry: 4.84
    }),
    _react2.default.createElement("path", {
      d:
        "m38.46 33.83s-0.1-0.01-0.3-0.02c-0.18 0-0.42 0-0.75 0.03-0.65 0.06-1.6 0.3-2.53 0.93-0.46 0.3-0.92 0.73-1.28 1.24-0.37 0.51-0.66 1.14-0.84 1.81s-0.23 1.41-0.13 2.11c0.11 0.75 0.37 1.52 0.53 2.39 0.16 0.84 0.19 1.91-0.44 2.78-0.57 0.82-1.56 1.18-2.37 1.27-0.85 0.11-1.65-0.02-2.34-0.17-0.7-0.14-1.33-0.29-1.92-0.32-1.17-0.1-2.1 0.33-2.56 0.83-0.47 0.5-0.48 0.95-0.49 0.93 0 0.04-0.04 0.06-0.07 0.06-0.04 0-0.06-0.04-0.06-0.07 0 0 0-0.11 0.04-0.31s0.13-0.5 0.36-0.8c0.23-0.31 0.59-0.62 1.07-0.87 0.47-0.25 1.1-0.39 1.74-0.39 1.3-0.04 2.75 0.42 4.11 0.19 0.68-0.12 1.32-0.41 1.66-0.96 0.32-0.5 0.33-1.21 0.18-1.96-0.14-0.75-0.42-1.55-0.56-2.39-0.15-0.9-0.09-1.78 0.12-2.61 0.22-0.82 0.59-1.56 1.06-2.18 0.48-0.64 1.02-1.11 1.6-1.48 1.15-0.73 2.29-0.92 3.06-0.96 0.38-0.02 0.71 0.01 0.91 0.03 0.19 0.03 0.29 0.04 0.29 0.04 0.24 0.03 0.41 0.26 0.37 0.5-0.03 0.2-0.24 0.37-0.46 0.35z",
      fill: "#ED1C24"
    }),
    _react2.default.createElement("path", {
      d:
        "m28.75 46.4-0.24 0.08c-0.17 0.06-0.3 0.1-0.53 0.24-0.44 0.24-0.96 0.72-1.33 1.32s-0.59 1.31-0.63 1.86c-0.05 0.55 0.02 0.92 0.02 0.92s-0.02-0.09-0.06-0.25-0.09-0.39-0.1-0.67c-0.04-0.57 0.07-1.34 0.38-2.06 0.31-0.71 0.81-1.36 1.3-1.73 0.22-0.19 0.51-0.34 0.64-0.41 0.15-0.07 0.23-0.11 0.23-0.11 0.22-0.11 0.48-0.01 0.59 0.2 0.11 0.22 0.01 0.48-0.2 0.59-0.03 0.01-0.05 0.02-0.07 0.02z",
      fill: "#ED1C24"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.78 6.92c7.55 0 15.89 2.98 19.17 14.66 4.14 14.77-12.08 24.92-22.19 41.18-0.45 0.73-0.86 1.44-1.25 2.14 3.02-0.45 6.85-0.71 11.08-0.71 16.89 0 40.08 4.2 42.51 17.32 3.97 4.48 6.26 9.38 6.26 14.02 0 11.83-15.01 21.72-45.61 22.61-0.59 0.02-1.18 0.03-1.76 0.03-6.16 0-11.66-0.93-16.51-2.1-5.7 2.47-11.78 5.02-17.3 5.02-4.9 0-9.37-2.01-12.76-7.86-9.85-16.99 4.84-30.14 4.84-30.14s-0.2 0.43-0.42 1.23c1.8-4.13 5.38-7.86 10.31-10.9 4.41-16.97 24.61-34.9 28.26-39.36 2.53-3.1 2.66-5.88 2.24-7.82-2.46 3.2-6.03 6.17-10.44 8.39-4.55 2.29-9.23 3.41-13.35 3.41-3.37 0-6.37-0.74-8.64-2.19-1.43-0.92-2.58-2.1-3.33-3.57-3.36-6.66 2.54-16.4 13.17-21.75 4.17-2.1 8.43-3.2 12.29-3.38 1.09-0.15 2.25-0.23 3.43-0.23m-20.83 108.24c1.96 0 4.01-0.41 6.13-1.04-8.81-3.27-14.79-8.25-17.94-13.9 0.02 0.04 0.03 0.09 0.04 0.13-1.12 4.2-0.21 6.88 2.47 10.15 2.82 3.45 5.94 4.66 9.3 4.66m20.83-111.24c-1.2 0-2.44 0.07-3.7 0.2-4.42 0.22-9.05 1.49-13.41 3.69-5.64 2.84-10.27 6.93-13.04 11.51-3.04 5.02-3.56 10.09-1.45 14.27 0.96 1.9 2.43 3.5 4.39 4.75 2.72 1.74 6.27 2.67 10.26 2.67 4.57 0 9.41-1.18 14.05-3.41-7.56 7.85-19.45 20.79-23.34 33.88-4.1 2.71-7.28 5.89-9.32 9.35-0.33 0.3-4.22 3.9-6.83 9.69-2.52 5.58-4.31 14.3 1.42 24.18 3.6 6.21 8.77 9.36 15.36 9.36 5.97 0 12.32-2.61 17.58-4.87 5.71 1.31 11.03 1.96 16.23 1.96 0.61 0 1.23-0.01 1.85-0.03 14.88-0.43 27.2-3.04 35.61-7.55 8.33-4.46 12.91-10.88 12.91-18.05 0-5.09-2.24-10.4-6.49-15.41-2.03-8.29-10.66-12.75-17.67-15.04-7.55-2.47-17.61-3.89-27.61-3.89-1.82 0-3.6 0.05-5.28 0.14 2.63-3.77 5.54-7.23 8.37-10.59 7.93-9.43 15.43-18.34 12.17-29.96-3.05-10.86-10.88-16.84-22.06-16.85z",
      fill: "#4E8754"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 67.927,
        cy: 91.656,
        r: 45.269,
        gradientTransform: "matrix(1 0 0 .5877 0 37.789)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#136600",
        offset: 0.0387
      }),
      _react2.default.createElement("stop", {
        stopColor: "#116D00",
        offset: 0.2939
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0B7F00",
        offset: 0.6282
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0E8303",
        offset: 0.7241
      }),
      _react2.default.createElement("stop", {
        stopColor: "#198D0D",
        offset: 0.8096
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2AA01C",
        offset: 0.8911
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42B933",
        offset: 0.9697
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4DC53D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.34 95.52c0 13.98-20.5 22.77-45.61 22.61-30.15-0.2-45.22-13.78-45.22-27.77s19.91-25.19 45.02-25.19 45.81 16.37 45.81 30.35z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 70.529,
        x2: 70.529,
        y1: 7.3334,
        y2: 105.33,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4DC53D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CC33C",
        offset: 0.3861
      }),
      _react2.default.createElement("stop", {
        stopColor: "#47BB37",
        offset: 0.5691
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3FAE30",
        offset: 0.7092
      }),
      _react2.default.createElement("stop", {
        stopColor: "#339C25",
        offset: 0.8276
      }),
      _react2.default.createElement("stop", {
        stopColor: "#248417",
        offset: 0.9311
      }),
      _react2.default.createElement("stop", {
        stopColor: "#17700B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.12 23.65s3.57 4.62-1.75 10.39c-5.09 5.53-36.61 33.1-26.71 54.25 10.51 22.45 60.62 25.08 70.14 2.27 12.03-28.82-52.16-28.96-58.51-23.8v16.66s32.13-4.16 39.07 1.78c0 0 3.57 4.16-16.26 3.57s-25.48-9.74-15.35-26.02c10.12-16.25 26.34-26.4 22.2-41.17-6.03-21.5-29.25-13.52-33.02-11.73s20.19 13.8 20.19 13.8z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.34 12.86c-3.35-6.66-14.69-7.72-25.32-2.36-10.62 5.35-16.52 15.09-13.16 21.75 0.74 1.47 1.9 2.66 3.33 3.57 10.1-0.63 18.41-8.82 27.47-12.44 2.16-1.08 5.4 1.08 5.4 2.16 0.01 0.02 0.01 0.04 0.02 0.06 3.12-4.34 4.14-9.02 2.26-12.74z",
      fill: "#4DC53D"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 8.7641,
        x2: 60.894,
        y1: 85.28,
        y2: 123.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4DC53D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4BC23B",
        offset: 0.2512
      }),
      _react2.default.createElement("stop", {
        stopColor: "#44B835",
        offset: 0.4579
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3AA62B",
        offset: 0.6489
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2A8E1D",
        offset: 0.8293
      }),
      _react2.default.createElement("stop", {
        stopColor: "#17700B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.63 108.3c-13.95 0.48-26.62 13.64-35.97 2.21-2.68-3.27-3.87-6.06-2.75-10.27-3.93-10.95-0.67-17.18-0.67-17.18s-14.7 13.16-4.84 30.15c10.11 17.44 29.74 0.75 41.95-1.47 7.28-1.33 11.69-3.6 17.62 6.99 0 0-1.39-10.91-15.34-10.43z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.12 21.61c-3.81 0-6.91-2.65-6.91-5.92 0-3.26 3.1-5.92 6.91-5.92s6.91 2.65 6.91 5.92-3.1 5.92-6.91 5.92z",
      fill: "#CCFF90"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.12 10.56c3.39 0 6.13 2.3 6.13 5.14s-2.74 5.14-6.13 5.14-6.13-2.3-6.13-5.14 2.74-5.14 6.13-5.14m0-1.56c-4.24 0-7.69 3-7.69 6.7s3.45 6.7 7.69 6.7 7.69-3 7.69-6.7-3.45-6.7-7.69-6.7z",
      fill: "#B3B3B3"
    }),
    _react2.default.createElement("ellipse", {
      cx: 50.17,
      cy: 15.66,
      rx: 1.6,
      ry: 4.84
    }),
    _react2.default.createElement("path", {
      d:
        "m33.62 72.45s-5.93 31.81 35.66 33.55c47.26 1.97 38.68-25.89 38.68-25.89",
      fill: "none",
      stroke: "#4E8754",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m24.31 81.16c-3.39 6.63-2.46 15.75 1.39 22.12",
      fill: "none",
      stroke: "#4E8754",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d:
        "m55.45 63.55c-2.68 4.53-3.95 7-4.36 10.55s0.32 7.39 2.74 10.02c2.37 2.57 5.95 3.6 9.39 4.22 6.33 1.14 12.84 1.26 19.2 0.35 1.42-0.2 3.37-0.58 3.55-2 0.85-7.04-24.2-6.15-33.2-4.08",
      fill: "none",
      stroke: "#4E8754",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 50.874,
        x2: 50.874,
        y1: 23.632,
        y2: 101.89,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#36762C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#55944A",
        offset: 0.063
      }),
      _react2.default.createElement("stop", {
        stopColor: "#70AE63",
        offset: 0.1338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87C379",
        offset: 0.2148
      }),
      _react2.default.createElement("stop", {
        stopColor: "#98D489",
        offset: 0.3086
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A4DF95",
        offset: 0.4235
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ABE69B",
        offset: 0.5819
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ADE89D",
        offset: 0.9918
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.95 23.63s4.44 1.17 3.61 8.8c-0.97 8.94-41.55 35.43-22.98 61.8 4.4 6.25 8.1 7.66 8.1 7.66s-11.66-3.3-16.15-13.2c-1.88-4.15-6.12-14.61 4.53-30.72 4.77-7.22 15.67-18.46 20.34-23.06 2.58-2.56 5.36-6.04 2.55-11.28z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 25.801,
        x2: 46.33,
        y1: 85.92,
        y2: 124.06,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#36762C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#55944A",
        offset: 0.063
      }),
      _react2.default.createElement("stop", {
        stopColor: "#70AE63",
        offset: 0.1338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87C379",
        offset: 0.2148
      }),
      _react2.default.createElement("stop", {
        stopColor: "#98D489",
        offset: 0.3086
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A4DF95",
        offset: 0.4235
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ABE69B",
        offset: 0.5819
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ADE89D",
        offset: 0.9918
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m21.14 91.79s0.37 4.09 1.65 7.39c1.11 2.87 1.8 3.5 1.8 3.5s1.31 8.75 6.43 10.83c4.71 1.91 7.91 1.83 14.94-0.26 2.88-0.86 7.66-2.64 9.51-3.3 0 0-9.51 7.86-21.52 6.47-12.85-1.49-17.56-12.83-12.81-24.63z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.66 23.38c-9.07 3.63-17.37 11.81-27.47 12.44 5.03 3.22 13.72 2.96 21.99-1.21 4.69-2.36 9.58-5.87 10.41-8.25 0.82-2.38-1.29-4.46-4.93-2.98z",
      fill: "#ADE89D"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 47.032,
        x2: 113.44,
        y1: 78.262,
        y2: 82.487,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#36762C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#55944A",
        offset: 0.063
      }),
      _react2.default.createElement("stop", {
        stopColor: "#70AE63",
        offset: 0.1338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87C379",
        offset: 0.2148
      }),
      _react2.default.createElement("stop", {
        stopColor: "#98D489",
        offset: 0.3086
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A4DF95",
        offset: 0.4235
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ABE69B",
        offset: 0.5819
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ADE89D",
        offset: 0.9918
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m52.44 72.84c-1.45 5.15 0.86 8.58 0.86 8.58s3.7-0.92 16.11-1.19c12.41-0.26 16.37 2.77 17.43 5.15s-1.85 3.83-1.85 3.83c5.68-1.06 12.02-4.89 10.83-8.05-1.19-3.17-5.57-7.91-20.2-9.51-16.91-1.84-23.18 1.19-23.18 1.19z",
      fill: "url(#a)"
    })
  );
}

exports.default = Snake;
