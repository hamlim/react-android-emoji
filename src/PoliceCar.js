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

function PoliceCar(props) {
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
        "M67.83,59c-1.1,0-1.83,0.89-1.83,2.16v5.13c0,1.27,0.73,2.71,1.83,2.71H74V59H67.83z",
      fill: "#F44336"
    }),
    _react2.default.createElement("path", {
      d:
        "M87.83,59H82v10h5.83c1.1,0,2.17-1.44,2.17-2.71v-5.13C90,59.89,88.94,59,87.83,59z",
      fill: "#424242"
    }),
    _react2.default.createElement("rect", {
      x: 74,
      y: 59,
      width: 8,
      height: 10,
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d: "M68,59c-1.1,0-2,1.01-2,2.29v5.13c0,1.27,0.9,2.59,2,2.59h6V59H68z",
      fill: "#F44336"
    }),
    _react2.default.createElement("path", {
      d: "m88 59h-6v10h6c1.1 0 2-1.32 2-2.59v-5.13c0-1.27-0.9-2.28-2-2.28z",
      fill: "#1565C0"
    }),
    _react2.default.createElement("rect", {
      x: 74,
      y: 59,
      width: 8,
      height: 10,
      fill: "#F5F5F5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88 61v6h-20v-6h20m-0.04-2h-19.92c-1.1 0-2.04 0.88-2.04 1.98v5.92c0 1.1 0.94 2.09 2.04 2.09h19.91c1.1 0 2.04-0.99 2.04-2.09v-5.92c0.01-1.1-0.93-1.98-2.03-1.98z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 63.996,
        x2: 63.996,
        y1: 70.167,
        y2: 114.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.1132
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9411
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,90.05v20.62c0,2.83-1.08,5.26-4,5.26l-106.85,0.29c-3.5,0-9.4-1.01-9.15-7.84 c0,0,0.25-8.95,0.41-11.38c0.46-7,4.71-9.58,15.17-10.91c13.43-1.71,14.73-5.73,18.67-8.67C47.1,70.82,52,66,75.46,66 c17.3,0,30.41,5.81,38.74,15.89c0.38,0.46,2.95,1.76,7.05,3.35C122.72,85.81,124,86.92,124,90.05z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "M124,90.05v20.62c0,2.83-1.08,5.26-4,5.26l-106.85,0.29c-3.5,0-9.4-1.01-9.15-7.84 c0,0,0.25-8.95,0.41-11.38c0.46-7,4.71-9.58,15.17-10.91c13.43-1.71,14.73-5.73,18.67-8.67C47.1,70.82,52,66,75.46,66 c17.3,0,30.41,5.81,38.74,15.89c0.38,0.46,2.95,1.76,7.05,3.35C122.72,85.81,124,86.92,124,90.05z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("rect", {
      x: 1.82,
      y: 97.29,
      width: 133.23,
      height: 33.47,
      clipPath: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "M0,101.99h9.7c4.63,0,5.81-1.31,6.76-3.69c0,0,2.28-4.3-3.47-4.3H4.3 c-0.31,0-0.63,0.03-0.93,0.08C1.74,96.02,0.3,98.53,0,101.99z",
      clipPath: "url(#a)",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement("path", {
      d:
        "m122.9 99.46h-1.27c-0.82 0-1.23-0.53-1.49-1.93l-0.73-6.47c-0.26-1.93 0.67-1.93 1.49-1.93h2c1.4 0 1.49 0.87 1.49 1.93v6.47c0 1.07 0.07 1.93-1.49 1.93z",
      clipPath: "url(#a)",
      fill: "#E53935"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.05 71.85c-15.05-0.02-30.18 7.62-34.4 15.42-0.53 0.99 0.28 2.13 1.5 2.13h33.15c0.91 0 1.65-0.66 1.65-1.48v-14.6c0-0.91-0.89-1.47-1.9-1.47z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m81.85 71.85c13.72 0 21.49 7.62 25.33 15.42 0.49 0.99-0.25 2.13-1.36 2.13h-24.18c-0.83 0-1.51-0.66-1.51-1.48v-11.67c0-3.13 0.16-4.4 1.72-4.4z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.47 69c15.83 0 28.43 5.12 36.43 14.8 0.34 0.41 1.24 1.49 8.27 4.23 0.45 0.18 0.84 0.33 0.84 2.02v20.62c0 2.26-0.68 2.26-1.01 2.26l-106.84 0.29c-1.4 0-3.93-0.2-5.22-1.53-0.68-0.71-0.99-1.75-0.93-3.23 0-0.09 0.25-8.92 0.41-11.26 0.3-4.56 2.18-6.82 12.56-8.14 11.62-1.48 15.21-4.83 18.1-7.52 0.67-0.62 1.3-1.21 1.98-1.72 0.53-0.4 1.05-0.79 1.56-1.17 7.69-5.81 12.79-9.65 33.85-9.65m0-3c-23.47 0-28.37 4.82-37.22 11.42-3.94 2.94-5.23 6.96-18.67 8.67-10.45 1.33-14.7 3.91-15.16 10.91-0.16 2.43-0.42 11.38-0.42 11.38-0.25 6.83 5.65 7.84 9.15 7.84l106.85-0.29c2.92 0 4-2.42 4-5.26v-20.62c0-3.13-1.28-4.24-2.75-4.81-4.09-1.59-6.67-2.89-7.05-3.35-8.32-10.08-21.43-15.89-38.73-15.89z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "c",
        x: 1.58,
        y: 97.25,
        width: 124.38,
        height: 28.85
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.47 69c15.83 0 28.43 5.12 36.43 14.8 0.34 0.41 1.24 1.49 8.27 4.23 0.45 0.18 0.84 0.33 0.84 2.02v20.62c0 2.26-0.68 2.26-1.01 2.26l-106.84 0.29c-1.4 0-3.93-0.2-5.22-1.53-0.68-0.71-0.99-1.75-0.93-3.23 0-0.09 0.25-8.92 0.41-11.26 0.3-4.56 2.18-6.82 12.56-8.14 11.62-1.48 15.21-4.83 18.1-7.52 0.67-0.62 1.3-1.21 1.98-1.72 0.53-0.4 1.05-0.79 1.56-1.17 7.69-5.81 12.79-9.65 33.85-9.65m0-3c-23.47 0-28.37 4.82-37.22 11.42-3.94 2.94-5.23 6.96-18.67 8.67-10.45 1.33-14.7 3.91-15.16 10.91-0.16 2.43-0.42 11.38-0.42 11.38-0.25 6.83 5.65 7.84 9.15 7.84l106.85-0.29c2.92 0 4-2.42 4-5.26v-20.62c0-3.13-1.28-4.24-2.75-4.81-4.09-1.59-6.67-2.89-7.05-3.35-8.32-10.08-21.43-15.89-38.73-15.89z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 102.85,
      cy: 114.02,
      r: 10,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.85 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 102.85,
      cy: 114.02,
      r: 5.65,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 31.73,
      cy: 114.02,
      r: 10,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m31.73 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 31.73,
      cy: 114.02,
      r: 5.65,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m72.95 73.85v13.55h-32.05c2.09-3.2 6.3-6.43 11.72-8.95 6.34-2.96 13.56-4.59 20.33-4.6m0.07-2c-15.04 0-30.15 7.63-34.37 15.42-0.53 0.99 0.28 2.13 1.5 2.13h33.15c0.91 0 1.65-0.66 1.65-1.48v-14.6c0-0.9-0.89-1.47-1.89-1.47h-0.04z",
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
          "m82.23 73.85c13.43 0.15 19.94 8.21 22.77 13.55h-22.87v-11.15c0-0.47 0-1.72 0.1-2.4m-0.38-2c-1.56 0-1.72 1.28-1.72 4.4v11.67c0 0.82 0.67 1.48 1.51 1.48h24.18c1.11 0 1.85-1.15 1.36-2.13-3.84-7.8-11.61-15.42-25.33-15.42z",
        fill: "#424242"
      })
    )
  );
}

exports.default = PoliceCar;
