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

function Grapes(props) {
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
        id: "h",
        x1: 47.277,
        x2: 47.277,
        y1: 4.1056,
        y2: 44.454,
        gradientTransform: "matrix(.3607 -.9327 -.9327 -.3607 69.638 80.675)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.0061452
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m83.27 18.36c0 0.55-0.04 1.1-0.1 1.63 5.11 0.15 9.56 2.36 9.56 2.36s-2.64 9.44-9.68 12.56c-0.11 0.05-0.23 0.08-0.34 0.13 0.05 0.11 0.12 0.21 0.17 0.33 3.11 7.04-1.28 15.8-1.28 15.8s-4.78-1.36-8.66-4.69c-0.31 0.44-0.65 0.87-1.02 1.28-5.64 6.18-16.27 5.66-16.27 5.66s-1.49-10.54 4.14-16.72c0.74-0.82 1.58-1.5 2.46-2.1-2.63 0.51-5.48 0.55-8.09-0.51-7.63-3.11-10.21-14.46-10.21-14.46s9.79-6.31 17.41-3.2c2.44 0.99 4.35 2.83 5.84 4.86-0.21-0.94-0.34-1.91-0.34-2.91-0.01-8.36 8.18-15.15 8.18-15.15s8.22 6.77 8.23 15.13z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.05 5.97c2.14 2.16 6.22 6.98 6.22 12.39 0 0.44-0.03 0.89-0.09 1.39-0.07 0.56 0.1 1.12 0.47 1.55s0.9 0.68 1.46 0.7c2.83 0.08 5.48 0.88 7.1 1.48-1.05 2.63-3.56 7.65-7.96 9.6l-0.06 0.02c-0.08 0.03-0.17 0.06-0.25 0.09-0.51 0.21-0.91 0.62-1.11 1.13s-0.18 1.09 0.06 1.59c0.04 0.08 0.08 0.16 0.12 0.23l0.02 0.03c1.95 4.42 0.43 9.83-0.56 12.48-1.6-0.65-4.1-1.84-6.25-3.69-0.36-0.31-0.83-0.48-1.3-0.48-0.08 0-0.16 0.01-0.25 0.02-0.56 0.07-1.06 0.37-1.39 0.83-0.29 0.41-0.57 0.76-0.87 1.09-3.66 4.01-10.05 4.82-12.95 4.98-0.13-3.03 0.11-9.33 3.78-13.35 0.59-0.64 1.27-1.23 2.11-1.79 0.79-0.53 1.09-1.54 0.73-2.42-0.31-0.76-1.05-1.23-1.85-1.23-0.13 0-0.25 0.01-0.38 0.04-1.07 0.21-2.1 0.31-3.05 0.31-1.44 0-2.75-0.24-3.9-0.71-5.09-2.08-7.7-8.73-8.62-11.65 2.04-1.09 6.23-3.02 10.38-3.02 1.45 0 2.77 0.24 3.93 0.71 1.81 0.74 3.49 2.15 4.98 4.19 0.39 0.53 0.99 0.82 1.62 0.82 0.28 0 0.56-0.06 0.82-0.18 0.86-0.39 1.33-1.33 1.13-2.25-0.19-0.88-0.29-1.69-0.29-2.48 0-5.42 4.06-10.25 6.2-12.42m-0.01-2.74s-8.2 6.79-8.18 15.15c0 1 0.13 1.96 0.34 2.91-1.49-2.03-3.4-3.87-5.84-4.86-1.51-0.62-3.1-0.86-4.69-0.86-6.43 0-12.73 4.06-12.73 4.06s2.58 11.35 10.21 14.46c1.5 0.61 3.08 0.85 4.65 0.85 1.16 0 2.32-0.13 3.43-0.35-0.88 0.6-1.72 1.28-2.46 2.1-5.64 6.18-4.14 16.72-4.14 16.72s0.22 0.01 0.62 0.01c2.35 0 10.83-0.38 15.65-5.67 0.37-0.41 0.71-0.84 1.02-1.28 3.88 3.33 8.66 4.69 8.66 4.69s4.39-8.76 1.28-15.8c-0.05-0.11-0.11-0.22-0.17-0.33 0.11-0.05 0.23-0.08 0.34-0.13 7.04-3.12 9.68-12.56 9.68-12.56s-4.46-2.21-9.56-2.36c0.07-0.54 0.11-1.08 0.1-1.63 0.01-8.35-8.21-15.12-8.21-15.12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 106.12,
        cy: 121.57,
        r: 16.181,
        gradientTransform: "matrix(-1 0 0 1 120.14 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A13CB3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9A37B0",
        offset: 0.3197
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8628A7",
        offset: 0.7881
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 28.27,
      cy: 110.94,
      r: 12.94,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m28.27 98v3c1.11 0 2.21 0.19 3.27 0.56 2.51 0.87 4.53 2.67 5.68 5.06 1.16 2.39 1.31 5.09 0.44 7.59-1.39 3.99-5.16 6.68-9.39 6.68-1.11 0-2.21-0.19-3.27-0.56-2.51-0.87-4.53-2.67-5.68-5.06-1.16-2.39-1.31-5.09-0.44-7.59 1.39-3.99 5.16-6.68 9.39-6.68v-3m0 0c-5.35 0-10.36 3.35-12.22 8.69-2.35 6.75 1.22 14.12 7.97 16.47 1.41 0.49 2.84 0.72 4.25 0.72 5.35 0 10.36-3.35 12.22-8.69 2.35-6.75-1.22-14.12-7.97-16.47-1.41-0.49-2.84-0.72-4.25-0.72z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 87.062,
        cy: 56.73,
        r: 16.745,
        gradientTransform: "matrix(-.9983 -.0575 -.0575 .9983 123.57 3.5439)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A03AB5",
        offset: 0.4753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C2BAB",
        offset: 0.789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 30.42,
      cy: 59.07,
      r: 17.14,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.42 41.93v3c1.58 0 3.14 0.27 4.65 0.79 3.57 1.24 6.44 3.8 8.08 7.2s1.87 7.24 0.63 10.8c-1.98 5.68-7.34 9.5-13.35 9.5-1.58 0-3.14-0.27-4.65-0.79-3.57-1.24-6.44-3.8-8.08-7.2s-1.87-7.24-0.63-10.8c1.98-5.68 7.34-9.5 13.35-9.5v-3m0 0c-7.09 0-13.72 4.44-16.19 11.51-3.11 8.94 1.61 18.71 10.55 21.82 1.86 0.65 3.76 0.96 5.63 0.96 7.09 0 13.72-4.44 16.19-11.51 3.11-8.94-1.61-18.71-10.55-21.82-1.86-0.65-3.76-0.96-5.63-0.96z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 84.954,
        cy: 115.31,
        r: 17.965,
        gradientTransform: "matrix(-1 0 0 1 120.14 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A228B5",
        offset: 0.1137
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9B26B0",
        offset: 0.3427
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8722A2",
        offset: 0.6779
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6E1C91",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 45.27,
      cy: 107.43,
      r: 13.59,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m45.27 93.83v3.22c1.16 0 2.3 0.2 3.41 0.58 2.62 0.91 4.72 2.79 5.93 5.28s1.37 5.31 0.46 7.93c-1.45 4.17-5.39 6.97-9.8 6.97-1.16 0-2.3-0.2-3.41-0.58-5.4-1.88-8.27-7.81-6.39-13.21 1.45-4.17 5.39-6.97 9.8-6.97v-3.22m0 0c-5.62 0-10.88 3.52-12.84 9.13-2.47 7.09 1.28 14.84 8.37 17.31 1.48 0.51 2.99 0.76 4.47 0.76 5.62 0 10.88-3.52 12.84-9.13 2.47-7.09-1.28-14.84-8.37-17.31-1.48-0.51-2.99-0.76-4.47-0.76z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m79.32 37.92c5.23-8.6 8.92-19.17 9.7-32.13 0.06-0.94 0.6-1.62 1.33-1.62l6.12 0.04c0.92 0.01 1.74 1.08 1.75 2.3 0.05 5.66-2.9 20.42-14.08 35.52-1.49-1.5-3.03-2.93-4.82-4.11z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m91.01 6.17 5.15 0.03c0.04 0.08 0.07 0.19 0.07 0.32 0.02 2.6-0.68 7.53-2.72 13.56-2.2 6.48-5.51 12.98-9.64 18.9-0.6-0.55-1.24-1.1-1.9-1.62 5.27-9.22 8.31-19.71 9.04-31.19m-0.66-2c-0.72 0-1.26 0.68-1.32 1.62-0.78 12.96-4.47 23.53-9.7 32.13 1.79 1.18 3.33 2.62 4.83 4.1 11.17-15.1 14.12-29.86 14.07-35.52-0.01-1.22-0.83-2.29-1.75-2.3l-6.13-0.03z",
        fill: "#42210B"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 67.042,
        cy: 37.107,
        r: 15.028,
        gradientTransform: "matrix(-.9897 -.1433 -.1433 .9897 125.77 9.4513)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A03AB5",
        offset: 0.4753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C2BAB",
        offset: 0.789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 48.28,
      cy: 40.35,
      r: 18.71,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48.29 24.63c2.21 0 4.37 0.46 6.41 1.38 7.91 3.54 11.46 12.86 7.91 20.76-2.53 5.64-8.16 9.29-14.35 9.29-2.21 0-4.37-0.46-6.41-1.38-7.91-3.54-11.46-12.86-7.91-20.76 2.53-5.64 8.16-9.29 14.35-9.29m0-3c-7.15 0-13.97 4.12-17.09 11.07-4.22 9.43 0 20.5 9.43 24.73 2.48 1.11 5.08 1.64 7.64 1.64 7.15 0 13.97-4.12 17.09-11.07 4.22-9.43 0-20.5-9.43-24.73-2.49-1.11-5.09-1.64-7.64-1.64z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 83.173,
        cy: 81.488,
        r: 17.708,
        gradientTransform: "matrix(-.9983 -.0575 -.0575 .9983 123.57 3.5439)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A03AB5",
        offset: 0.4753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C2BAB",
        offset: 0.789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 30.4,
      cy: 86.13,
      r: 15.98,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.4 70.14v3c1.45 0 2.88 0.24 4.27 0.73 3.28 1.14 5.91 3.49 7.42 6.61s1.71 6.64 0.57 9.92c-1.82 5.22-6.74 8.72-12.26 8.72-1.45 0-2.88-0.24-4.27-0.73-3.28-1.14-5.91-3.49-7.42-6.61s-1.71-6.64-0.57-9.92c1.81-5.22 6.74-8.72 12.26-8.72v-3m0 0c-6.61 0-12.8 4.14-15.09 10.73-2.9 8.34 1.51 17.45 9.84 20.35 1.74 0.61 3.51 0.89 5.25 0.89 6.61 0 12.8-4.14 15.09-10.73 2.9-8.34-1.51-17.45-9.84-20.35-1.74-0.6-3.51-0.89-5.25-0.89z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 49.688,
        cy: 106.73,
        r: 17.654,
        gradientTransform: "matrix(-1 0 0 1 120.14 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9B3AAB",
        offset: 0.0061452
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9434A7",
        offset: 0.2662
      }),
      _react2.default.createElement("stop", {
        stopColor: "#80259C",
        offset: 0.6473
      }),
      _react2.default.createElement("stop", {
        stopColor: "#68128F",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 66.9,
      cy: 100.08,
      r: 14.9,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m66.91 85.18v3c1.33 0 2.64 0.22 3.91 0.67 3 1.04 5.42 3.2 6.8 6.06s1.57 6.09 0.53 9.09c-1.66 4.78-6.18 7.99-11.24 7.99-1.33 0-2.64-0.22-3.91-0.67-3-1.04-5.42-3.2-6.8-6.06s-1.57-6.09-0.53-9.09c1.66-4.78 6.18-7.99 11.24-7.99v-3m-0.01 0c-6.16 0-11.93 3.86-14.07 10.01-2.7 7.77 1.4 16.27 9.18 18.97 1.62 0.56 3.27 0.83 4.9 0.83 6.16 0 11.93-3.86 14.07-10.01 2.7-7.77-1.4-16.27-9.18-18.97-1.62-0.57-3.27-0.83-4.9-0.83z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64.817,
        cy: 81.218,
        r: 20.787,
        gradientTransform: "matrix(-1 0 0 1 120.14 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 47.85,
      cy: 89.01,
      r: 16.11,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m47.85 72.9v3c1.46 0 2.91 0.25 4.31 0.73 6.83 2.38 10.45 9.86 8.07 16.69-1.83 5.27-6.81 8.8-12.38 8.8-1.46 0-2.91-0.25-4.31-0.73-3.31-1.15-5.97-3.52-7.49-6.67s-1.73-6.71-0.58-10.02c1.83-5.27 6.81-8.8 12.38-8.8v-3m0 0c-6.66 0-12.9 4.17-15.21 10.82-2.92 8.4 1.52 17.58 9.92 20.51 1.75 0.61 3.54 0.9 5.29 0.9 6.66 0 12.9-4.17 15.21-10.82 2.92-8.4-1.52-17.58-9.92-20.51-1.74-0.61-3.53-0.9-5.29-0.9z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "n",
        cx: 44.65,
        cy: 37.211,
        r: 13.28,
        gradientTransform: "matrix(-.9983 -.0575 -.0575 .9983 123.57 3.5439)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A03AB5",
        offset: 0.4753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C2BAB",
        offset: 0.789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 72.02,
      cy: 41.9,
      r: 16.53,
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m72.02 25.36v2.65c1.55 0 3.08 0.26 4.56 0.78 3.5 1.22 6.32 3.73 7.94 7.07 1.61 3.34 1.83 7.11 0.61 10.61-1.94 5.58-7.21 9.32-13.11 9.32-1.55 0-3.08-0.26-4.56-0.78-3.5-1.22-6.32-3.73-7.94-7.07-1.61-3.34-1.83-7.11-0.61-10.61 1.94-5.58 7.21-9.32 13.11-9.32v-2.65m-0.01 0c-6.84 0-13.24 4.28-15.62 11.1-3 8.62 1.56 18.05 10.18 21.05 1.8 0.63 3.63 0.92 5.44 0.92 6.84 0 13.24-4.28 15.62-11.1 3-8.62-1.56-18.05-10.18-21.05-1.8-0.62-3.63-0.92-5.44-0.92z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 11.284,
        cy: 54.809,
        r: 20.597,
        gradientTransform: "matrix(-1 0 0 1 120.14 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A03AB5",
        offset: 0.4753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C2BAB",
        offset: 0.789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 97.67,
      cy: 63.62,
      r: 19.56,
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m97.67 44.06v3c1.85 0 3.68 0.31 5.44 0.93 8.62 3 13.2 12.46 10.2 21.08-2.31 6.65-8.6 11.12-15.64 11.12-1.85 0-3.68-0.31-5.44-0.93-4.18-1.45-7.54-4.45-9.46-8.43-1.93-3.98-2.19-8.47-0.73-12.65 2.31-6.65 8.6-11.12 15.64-11.12l-0.01-3m0 0c-8.09 0-15.66 5.06-18.47 13.13-3.55 10.2 1.84 21.35 12.04 24.9 2.13 0.74 4.3 1.09 6.43 1.09 8.09 0 15.66-5.06 18.47-13.13 3.55-10.2-1.84-21.35-12.04-24.9-2.13-0.74-4.3-1.09-6.43-1.09z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 68.768,
        cy: 56.753,
        r: 16.745,
        gradientTransform: "matrix(-.9983 -.0575 -.0575 .9983 123.57 3.5439)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A03AB5",
        offset: 0.4753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C2BAB",
        offset: 0.789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 48.68,
      cy: 60.15,
      r: 17.14,
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48.68 43.01v3c1.58 0 3.14 0.27 4.65 0.79 7.36 2.56 11.27 10.64 8.71 18-1.98 5.68-7.34 9.5-13.35 9.5-1.58 0-3.14-0.27-4.65-0.79-3.57-1.24-6.44-3.8-8.08-7.2s-1.87-7.24-0.63-10.8c1.98-5.68 7.34-9.5 13.35-9.5v-3m0 0c-7.09 0-13.72 4.44-16.19 11.51-3.11 8.94 1.61 18.71 10.55 21.82 1.86 0.65 3.76 0.96 5.63 0.96 7.09 0 13.72-4.44 16.19-11.51 3.11-8.94-1.61-18.71-10.55-21.82-1.86-0.66-3.76-0.97-5.63-0.96z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 31.379,
        cy: 78.872,
        r: 15.115,
        gradientTransform: "matrix(-.9983 -.0575 -.0575 .9983 123.57 3.5439)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A234B5",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9B30B1",
        offset: 0.4934
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8726A8",
        offset: 0.8338
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 84.59,
      cy: 83.86,
      r: 16.21,
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m84.59 67.64v3c1.47 0 2.93 0.25 4.34 0.74 3.33 1.16 6.01 3.55 7.55 6.72 1.54 3.18 1.74 6.76 0.58 10.09-1.85 5.31-6.86 8.87-12.47 8.87-1.47 0-2.93-0.25-4.34-0.74-3.33-1.16-6.01-3.55-7.55-6.72-1.54-3.18-1.74-6.76-0.58-10.09 1.85-5.31 6.86-8.87 12.48-8.87l-0.01-3m0 0c-6.71 0-12.98 4.2-15.31 10.89-2.94 8.45 1.53 17.69 9.98 20.64 1.76 0.61 3.56 0.9 5.33 0.9 6.71 0 12.98-4.2 15.31-10.89 2.94-8.45-1.53-17.69-9.98-20.64-1.76-0.61-3.56-0.9-5.33-0.9z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 49.876,
        cy: 59.613,
        r: 18.224,
        gradientTransform: "matrix(-.9983 -.0575 -.0575 .9983 123.57 3.5439)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A73FB9",
        offset: 0.2611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A03AB5",
        offset: 0.4753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C2BAB",
        offset: 0.789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7B1FA2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 65.27,
      cy: 67.31,
      r: 19.13,
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.27 48.17v3c1.8 0 3.58 0.3 5.3 0.9 8.4 2.92 12.86 12.14 9.93 20.54-2.26 6.48-8.38 10.83-15.23 10.83-1.8 0-3.58-0.3-5.3-0.9-8.4-2.92-12.86-12.14-9.93-20.54 2.26-6.48 8.38-10.83 15.23-10.83v-3m0 0c-7.92 0-15.32 4.95-18.07 12.85-3.47 9.98 1.8 20.88 11.78 24.36 2.08 0.72 4.2 1.07 6.29 1.07 7.92 0 15.32-4.95 18.07-12.85 3.47-9.98-1.8-20.88-11.78-24.36-2.08-0.72-4.2-1.07-6.29-1.07z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 27.571,
        x2: 27.571,
        y1: 30.572,
        y2: 70.921,
        gradientTransform: "matrix(-.9776 .2105 .2105 .9776 110.04 -7.2312)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.0061452
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m75.31 37.31c0.46-0.3 0.94-0.57 1.42-0.81-2.68-4.35-3.28-9.29-3.28-9.29s9.34-2.97 15.81 1.2c0.1 0.07 0.19 0.15 0.3 0.22 0.06-0.11 0.11-0.22 0.18-0.32 4.18-6.46 13.91-7.6 13.91-7.6s1.49 4.75 0.84 9.81c0.54 0.02 1.08 0.06 1.63 0.15 8.26 1.32 13.66 10.49 13.66 10.49s-7.99 7.03-16.25 5.71c-1.09-0.17-2.12-0.5-3.11-0.91 1.87 1.92 3.47 4.28 4.01 7.04 1.59 8.08-6.48 16.48-6.48 16.48s-10.64-4.72-12.23-12.8c-0.51-2.58-0.03-5.19 0.86-7.55-0.67 0.69-1.41 1.33-2.24 1.88-6.98 4.6-17.16 1.48-17.16 1.48s1.14-10.58 8.13-15.18z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.16 23.02c0.34 1.69 0.71 4.42 0.35 7.25-0.07 0.56 0.1 1.12 0.46 1.55s0.89 0.68 1.46 0.7c0.5 0.02 0.95 0.06 1.38 0.13 5.34 0.85 9.47 5.63 11.27 8.08-2.19 1.57-6.7 4.31-11.43 4.31-0.61 0-1.22-0.05-1.8-0.14-0.86-0.14-1.73-0.39-2.66-0.78-0.25-0.1-0.51-0.15-0.77-0.15-0.65 0-1.27 0.31-1.66 0.88-0.53 0.79-0.44 1.84 0.22 2.52 1.91 1.97 3.09 4 3.49 6.03 1.06 5.4-3.07 11.23-5.01 13.61-0.97-0.53-2.36-1.36-3.81-2.47-2.34-1.79-5.27-4.67-5.97-8.23-0.38-1.92-0.12-4.09 0.77-6.46 0.33-0.89 0-1.88-0.8-2.39-0.33-0.21-0.7-0.31-1.07-0.31-0.52 0-1.04 0.21-1.43 0.6-0.63 0.65-1.26 1.17-1.91 1.6-2.2 1.45-5.06 2.18-8.49 2.18-2.1 0-4-0.28-5.28-0.54 0.63-2.97 2.42-9.03 6.94-12.01 0.37-0.24 0.76-0.47 1.21-0.69 0.5-0.25 0.88-0.7 1.04-1.24s0.08-1.12-0.22-1.6c-1.49-2.41-2.28-5.07-2.66-6.75 1.21-0.25 2.96-0.51 4.88-0.51 3.03 0 5.57 0.64 7.51 1.89l0.05 0.04c0.07 0.05 0.14 0.11 0.21 0.16 0.34 0.23 0.73 0.35 1.13 0.35 0.14 0 0.28-0.01 0.42-0.04 0.54-0.12 1.01-0.45 1.29-0.92 0.05-0.08 0.09-0.15 0.13-0.23l0.02-0.04c2.62-4.06 7.98-5.76 10.74-6.38m1.49-2.31s-9.73 1.14-13.91 7.6c-0.07 0.1-0.12 0.21-0.18 0.32-0.1-0.07-0.19-0.15-0.3-0.22-2.67-1.72-5.83-2.23-8.62-2.23-3.97 0-7.19 1.02-7.19 1.02s0.6 4.94 3.28 9.29c-0.48 0.24-0.96 0.51-1.42 0.81-6.98 4.6-8.13 15.18-8.13 15.18s3.37 1.04 7.57 1.04c3.09 0 6.63-0.56 9.59-2.51 0.83-0.55 1.57-1.19 2.24-1.88-0.88 2.36-1.37 4.97-0.86 7.55 1.59 8.08 12.23 12.8 12.23 12.8s8.07-8.39 6.48-16.48c-0.54-2.76-2.15-5.12-4.01-7.04 0.98 0.41 2.02 0.73 3.11 0.91 0.71 0.11 1.41 0.16 2.11 0.16 7.46 0 14.13-5.88 14.13-5.88s-5.4-9.17-13.66-10.49c-0.55-0.09-1.09-0.13-1.63-0.15 0.66-5.06-0.83-9.8-0.83-9.8z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Grapes;
