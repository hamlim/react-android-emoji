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

function Boar(props) {
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
      _react2.default.createElement("rect", {
        id: "f",
        x: 4,
        y: 4,
        width: 120,
        height: 120
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
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#e)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 57.145,
          x2: 32.656,
          y1: 148.73,
          y2: 120.7,
          gradientTransform: "matrix(.9985 .0545 -.0545 .9985 5.0425 -67.942)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#D1D1D1",
          offset: 0.00097656
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D4D4D4",
          offset: 0.5765
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m34.27 53.88c4.5 8.44 11.28 15.58 19.41 20.34 0.68 0.4 1.33 0.89 1.84 1.51 3.26 3.97-1.14 8.2-4.54 8.9-3 0.62-5.34-2.31-7.2-4.35-4.65-5.08-8.04-11.38-9.81-18.13-0.67-2.55-1.1-5.16-1.29-7.79-0.07-0.92 1.15-1.3 1.59-0.48z",
        fill: "url(#d)",
        stroke: "#878787",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 58.546,
          x2: 128.05,
          y1: 43.226,
          y2: 104.23,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#B8A088",
          offset: 0.1231
        }),
        _react2.default.createElement("stop", {
          stopColor: "#A7876B",
          offset: 0.3279
        }),
        _react2.default.createElement("stop", {
          stopColor: "#936949",
          offset: 0.6117
        }),
        _react2.default.createElement("stop", {
          stopColor: "#865734",
          offset: 0.846
        }),
        _react2.default.createElement("stop", {
          stopColor: "#82502C",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m12.69 89.94c11.88-3.67 9.6-9.29 15.31-13.6s14.49-10.69 18.94-16.3c6.29-7.94 3.4-15.04 13.2-27.28 9.28-11.6 21.36-20.43 35.94-23.25s17.92-2.5 31.92-1.01v120.08c0-6.75-0.52-3.96-4-7.33s-25.3-17.89-31.59-18.07c-6.19-0.18-12.14 1.86-18.19 3.17-9.09 1.98-30.59-1.45-38.05 4.15-4.34 3.26-5.71-2.32-4.67-3.5 3.75-4.25 8.92-7.5 11.75-13-4.05 7.07-12.55 11.18-21.56 12.56l-9-16.62z",
        fill: "url(#c)"
      }),
      _react2.default.createElement("path", {
        d:
          "m113.33 9.79c3.29 0 6.8 0.32 11.67 0.83v110.24c-5.26-4.54-24.93-20.07-32.22-20.29-0.27-0.01-0.54-0.01-0.8-0.01-3.97 0-6.87 0.91-10.88 2.16-2.42 0.76-5.42 1.7-9.47 2.68-3.13 0.76-6.46 1.13-10.18 1.13-3.15 0-6.14-0.25-9.03-0.5-2.59-0.22-5.03-0.43-7.34-0.43-3.17 0-7.25 0.33-10.72 2.9 1.48-1.71 3.9-3.65 6.25-5.54 3.94-3.16 8.01-6.44 9.9-10.11 0.74-1.45 0.19-3.23-1.24-4.01-0.45-0.25-0.94-0.36-1.43-0.36-1.04 0-2.06 0.55-2.61 1.51-3.55 6.22-15.65 12.6-23.68 13.94-0.1 0.02-0.19 0.04-0.29 0.06-0.87-0.55-2.65-2.31-4.35-5.27-1.54-2.68-2.2-4.92-2.35-6.09 7.69-2.68 9.91-6.48 11.7-9.56 0.98-1.69 1.76-3.02 3.38-4.25l1.46-1.11c5.81-4.38 13.76-10.38 18.1-15.89 3.18-4.03 4.26-7.78 5.4-11.75 1.33-4.62 2.7-9.4 7.81-15.81 9.86-12.37 21.39-19.91 34.28-22.41 8.07-1.53 12.26-2.06 16.64-2.06m-98.78 82.16m19.54 16.65m79.24-101.81c-4.73 0-9.28 0.61-17.21 2.15-14.67 2.86-26.71 11.78-36.05 23.49-9.86 12.38-6.88 19.54-13.22 27.57-4.47 5.67-13.28 12.11-19.03 16.47-5.69 4.32-3.5 9.93-15.06 13.64-0.17 0.02-0.32 0.06-0.46 0.14-1.55 0.9-0.65 5.38 2.01 10 2.34 4.08 5.28 6.91 7 6.91 0.23 0 0.44-0.05 0.63-0.16 0.04-0.02 0.07-0.05 0.1-0.08 8.87-1.48 21.8-8.41 25.79-15.41-2.85 5.56-12.83 11-16.46 15.95-0.73 1-0.13 4.56 2.23 4.56 0.68 0 1.5-0.29 2.47-1.03 2.44-1.84 5.48-2.36 9-2.36 4.68 0 10.23 0.93 16.36 0.93 3.46 0 7.1-0.29 10.89-1.21 10.58-2.56 13.87-4.76 19.65-4.76 0.23 0 0.47 0 0.71 0.01 6.32 0.19 27.81 17.01 31.31 20.42 1.24 1.21 2.11 1.36 2.71 1.36 0.21 0 0.38-0.02 0.53-0.02 0.63 0 0.77 0.34 0.77 3.91v-121.34c-6.48-0.69-10.64-1.14-14.67-1.14z",
        fill: "#6E503E"
      }),
      _react2.default.createElement("path", {
        d:
          "m59.77 35.02c-1.21 0-2.06-0.54-2.6-1.65-1.51-3.11-0.21-9.84 5.18-16.69 4.54-5.76 11.42-9.39 17.03-10.83-0.21 0.36-0.42 0.73-0.63 1.09-0.82 1.41-1.66 2.86-2.35 3.79-0.44 0.58-0.39 1.4 0.11 1.93 0.29 0.31 0.69 0.47 1.09 0.47 0.29 0 0.57-0.08 0.83-0.25 4.92-3.26 12.29-7.12 19.89-7.42-0.34 0.62-0.74 1.34-1.01 1.62-0.49 0.52-0.54 1.31-0.12 1.89 0.29 0.4 0.75 0.63 1.22 0.63 0.21 0 0.41-0.04 0.61-0.13 4.42-1.97 9.62-3.1 14.27-3.1 1.52 0 2.98 0.12 4.32 0.36 8.54 1.51 14.68 5.45 17.77 11.38 2 3.84 2.22 7.48 2.06 9.33-12.88-6.17-24.58-9.17-35.74-9.17-6.73 0-13.21 1.08-19.8 3.32-10.23 3.47-16.78 9.38-19.92 12.22-0.49 0.45-1.04 0.94-1.3 1.14-0.32 0.04-0.62 0.07-0.91 0.07z",
        fill: "#3B210D"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.54 7.23c-0.26 0.87-0.12 1.83 0.43 2.61 0.58 0.81 1.5 1.26 2.44 1.26 0.41 0 0.83-0.08 1.22-0.26 4.24-1.89 9.22-2.97 13.66-2.97 1.44 0 2.8 0.11 4.06 0.34 7.71 1.37 13.16 4.63 16.19 9.69 1.56 2.6 2.17 5.22 2.36 7.17-12.23-5.58-23.46-8.3-34.22-8.3-6.9 0-13.53 1.11-20.28 3.4-10.53 3.57-17.23 9.62-20.44 12.52-0.32 0.29-0.67 0.61-0.93 0.83-0.09 0.01-0.18 0.01-0.27 0.01-0.64 0-0.96-0.21-1.25-0.8-1.02-2.09-0.55-8.05 5.01-15.11 3.37-4.28 8.11-7.33 12.55-9.1-0.32 0.51-0.62 0.97-0.88 1.32-0.87 1.17-0.78 2.8 0.22 3.86 0.58 0.62 1.38 0.94 2.18 0.94 0.57 0 1.15-0.16 1.66-0.5 4.15-2.76 10.05-5.94 16.29-6.91m-13.04-3.48c-6.13 0.66-15.46 4.56-21.32 12-8.13 10.31-7.61 20.77-1.4 20.77 0.44 0 0.91-0.05 1.4-0.16 1.07-0.23 8.12-8.93 21.2-13.36 6-2.03 12.37-3.24 19.32-3.24 10.59 0 22.52 2.8 36.56 9.74 0.02 0.01 0.04 0.01 0.06 0.01 1.26 0 3.21-20.08-20.43-24.26-1.47-0.26-3.01-0.38-4.58-0.38-5.04 0-10.43 1.25-14.88 3.23 0.82-0.88 1.76-3.21 2.58-4.1-0.58-0.04-1.17-0.06-1.75-0.06-7.55 0-15.23 3.44-21.64 7.69 1.47-1.99 3.39-5.89 4.88-7.88z",
        fill: "#603813"
      }),
      _react2.default.createElement("ellipse", {
        cx: 67.86,
        cy: 55.51,
        rx: 6.5,
        ry: 7.35,
        fill: "#292929"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 50.139,
          x2: 20.313,
          y1: 161.24,
          y2: 127.1,
          gradientTransform: "matrix(.9985 .0545 -.0545 .9985 5.0425 -67.942)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#A3A3A3",
          offset: 0.00097656
        }),
        _react2.default.createElement("stop", {
          stopColor: "#A4A4A4",
          offset: 0.0023064
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BCBCBC",
          offset: 0.0572
        }),
        _react2.default.createElement("stop", {
          stopColor: "#CFCFCF",
          offset: 0.119
        }),
        _react2.default.createElement("stop", {
          stopColor: "#DCDCDC",
          offset: 0.1915
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E4E4E4",
          offset: 0.284
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E6E6E6",
          offset: 0.4651
        }),
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.6631
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m22.29 59.5c5.49 10.28 13.74 18.97 23.63 24.77 0.83 0.49 1.62 1.08 2.24 1.83 3.98 4.84-1.38 9.99-5.53 10.84-3.66 0.75-6.5-2.82-8.77-5.29-5.67-6.19-9.79-13.86-11.95-22.08-0.81-3.1-1.35-6.28-1.57-9.48-0.07-1.13 1.42-1.58 1.95-0.59z",
        fill: "url(#b)",
        stroke: "#999",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement("path", {
        d:
          "m93.34 27.72c6.06-3.04 15.96-5.87 21.62-2.15 1.18 8.14-2.3 17.45-8.48 22.88-4.2 3.7-11.33 5.51-16.97 1.33-9.93-7.36-5.03-17.62 3.83-22.06z",
        fill: "#4D4131"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 101.31,
          x2: 121.1,
          y1: -146.52,
          y2: -160.53,
          gradientTransform: "matrix(.9906 -.1367 .1367 .9906 9.1564 206.82)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#50433C",
          offset: 0.0204
        }),
        _react2.default.createElement("stop", {
          stopColor: "#59493E",
          offset: 0.1246
        }),
        _react2.default.createElement("stop", {
          stopColor: "#85664A",
          offset: 0.6528
        }),
        _react2.default.createElement("stop", {
          stopColor: "#96714E",
          offset: 0.921
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m92.06 33.54c4.51-2.26 11.88-4.37 16.09-1.6 0.88 6.06-1.71 12.99-6.31 17.03-3.13 2.75-8.43 4.1-12.63 0.99-7.39-5.48-3.74-13.12 2.85-16.42z",
        fill: "url(#a)"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m20.88 95c2.64 4.58 2.79 10.66 1.25 11.55s-4.93-2.1-7.58-6.68c-2.64-4.58-3.54-9.01-2-9.9s5.68 0.45 8.33 5.03z",
      fill: "#423732"
    })
  );
}

exports.default = Boar;
