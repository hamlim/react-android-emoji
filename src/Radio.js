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

function Radio(props) {
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
      d: "m26 124h-4c-1.11 0-2-0.9-2-2v-14.05h8v14.05c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d: "m106 124h-4c-1.11 0-2-0.9-2-2v-14.05h8v14.05c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m14.53 31.69-1.98-8.38 90.31-19.26c1.17-0.25 2.32 0.48 2.59 1.65s-0.43 2.34-1.58 2.64l-89.34 23.35z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m27 108.95v13.05c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-13.05h6m1-1h-8v14.05c0 1.11 0.9 2 2 2h4c1.11 0 2-0.9 2-2v-14.05z",
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
          "m107 108.95v13.05c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-13.05h6m1-1h-8v14.05c0 1.11 0.9 2 2 2h4c1.11 0 2-0.9 2-2v-14.05z",
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
          "m103.33 5c0.56 0 1.03 0.38 1.16 0.93 0.15 0.63-0.24 1.28-0.86 1.44l-88.36 23.1-1.51-6.39 89.32-19.04c0.08-0.03 0.17-0.04 0.25-0.04m0-1c-0.15 0-0.3 0.02-0.46 0.05l-90.31 19.26 1.98 8.38 89.35-23.35c1.15-0.3 1.86-1.47 1.58-2.64-0.24-1.01-1.14-1.7-2.14-1.7z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 65.003,
        cy: 30.687,
        r: 85.331,
        gradientTransform: "matrix(.9966 0 0 1 .2146 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFC400",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBE00",
        offset: 0.303
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAE00",
        offset: 0.691
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.7574
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.98 117.98h-99.96c-5.51 0-10.02-4.51-10.02-10.02v-76.29c0-5.51 4.51-10.02 10.02-10.02h99.97c5.51 0 10.02 4.51 10.02 10.02v76.29c-0.01 5.51-4.52 10.02-10.03 10.02z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 62.244,
        cy: 34.952,
        r: 47.666,
        gradientTransform: "matrix(.9966 0 0 1 .2146 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#03A9F4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m107.99 53.76h-87.98c-2.21 0-4.01-1.79-4.01-4.01v-12.05c0-2.21 1.79-4.01 4.01-4.01h87.99c2.21 0 4.01 1.79 4.01 4.01v12.05c-0.01 2.22-1.8 4.01-4.02 4.01z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.19
      },
      _react2.default.createElement("path", {
        d:
          "m113.98 24.66c3.87 0 7.02 3.15 7.02 7.02v76.29c0 3.87-3.15 7.02-7.02 7.02h-99.96c-3.87 0-7.02-3.15-7.02-7.02v-76.3c0-3.87 3.15-7.02 7.02-7.02h99.96m0-2.99h-99.96c-5.51 0-10.02 4.5-10.02 10.01v76.29c0 5.51 4.51 10.02 10.02 10.02h99.97c5.51 0 10.02-4.51 10.02-10.02v-76.29c-0.01-5.51-4.52-10.01-10.03-10.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FF6F00"
      },
      _react2.default.createElement("path", {
        d:
          "m72.69 85.56h-1.83c-0.5 0-0.91-0.41-0.91-0.92s0.41-0.92 0.91-0.92h1.83c0.5 0 0.91 0.41 0.91 0.92s-0.41 0.92-0.91 0.92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m111.09 85.56h-1.83c-0.5 0-0.91-0.41-0.91-0.92s0.41-0.92 0.91-0.92h1.83c0.5 0 0.91 0.41 0.91 0.92s-0.41 0.92-0.91 0.92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.63 80.82c-0.4 0-0.77-0.27-0.88-0.68-0.13-0.49 0.16-0.99 0.65-1.12l1.77-0.48c0.5-0.12 0.99 0.16 1.12 0.65s-0.16 0.99-0.65 1.12l-1.77 0.48c-0.08 0.01-0.16 0.03-0.24 0.03z"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.81 76.39c-0.31 0-0.62-0.17-0.79-0.46-0.25-0.44-0.1-1 0.33-1.25l1.58-0.92c0.44-0.26 1-0.11 1.25 0.34 0.25 0.44 0.1 1-0.33 1.25l-1.58 0.92c-0.15 0.08-0.31 0.12-0.46 0.12z"
      }),
      _react2.default.createElement("path", {
        d:
          "m103.9 72.59c-0.23 0-0.47-0.09-0.65-0.27-0.36-0.36-0.36-0.94 0-1.3l1.29-1.3c0.36-0.36 0.94-0.36 1.29 0 0.36 0.36 0.36 0.94 0 1.3l-1.29 1.3c-0.17 0.18-0.4 0.27-0.64 0.27z"
      }),
      _react2.default.createElement("path", {
        d:
          "m100.11 69.68c-0.16 0-0.31-0.04-0.46-0.12-0.44-0.25-0.59-0.81-0.33-1.25l0.91-1.59c0.25-0.44 0.81-0.59 1.25-0.34s0.59 0.81 0.33 1.25l-0.91 1.59c-0.16 0.29-0.47 0.46-0.79 0.46z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.7 67.84c-0.08 0-0.16-0.01-0.24-0.03-0.49-0.13-0.78-0.63-0.65-1.12l0.47-1.77c0.13-0.49 0.63-0.77 1.12-0.65 0.49 0.13 0.78 0.63 0.65 1.12l-0.47 1.77c-0.1 0.41-0.47 0.68-0.88 0.68z"
      }),
      _react2.default.createElement("path", {
        d:
          "m86.24 67.84c-0.4 0-0.77-0.27-0.88-0.68l-0.47-1.77c-0.13-0.49 0.16-0.99 0.65-1.12 0.5-0.12 0.99 0.16 1.12 0.65l0.47 1.77c0.13 0.49-0.16 0.99-0.65 1.12-0.08 0.02-0.16 0.03-0.24 0.03z"
      }),
      _react2.default.createElement("path", {
        d:
          "m81.83 69.68c-0.31 0-0.62-0.17-0.79-0.46l-0.91-1.59c-0.25-0.44-0.1-1 0.33-1.25 0.44-0.26 1-0.1 1.25 0.34l0.91 1.59c0.25 0.44 0.1 1-0.33 1.25-0.15 0.07-0.31 0.12-0.46 0.12z"
      }),
      _react2.default.createElement("path", {
        d:
          "m78.04 72.59c-0.23 0-0.47-0.09-0.65-0.27l-1.29-1.3c-0.36-0.36-0.36-0.94 0-1.3s0.94-0.36 1.29 0l1.29 1.3c0.36 0.36 0.36 0.94 0 1.3-0.17 0.18-0.4 0.27-0.64 0.27z"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.14 76.39c-0.16 0-0.31-0.04-0.46-0.12l-1.58-0.92c-0.44-0.25-0.59-0.81-0.33-1.25 0.25-0.44 0.81-0.59 1.25-0.34l1.58 0.92c0.44 0.25 0.59 0.81 0.33 1.25-0.17 0.3-0.48 0.46-0.79 0.46z"
      }),
      _react2.default.createElement("path", {
        d:
          "m73.31 80.82c-0.08 0-0.16-0.01-0.24-0.03l-1.77-0.48c-0.49-0.13-0.78-0.63-0.65-1.12s0.63-0.77 1.12-0.65l1.77 0.48c0.49 0.13 0.78 0.63 0.65 1.12-0.11 0.41-0.48 0.68-0.88 0.68z"
      }),
      _react2.default.createElement("path", {
        d:
          "m90.97 67.22c-0.5 0-0.91-0.41-0.91-0.92v-1.83c0-0.51 0.41-0.92 0.91-0.92s0.91 0.41 0.91 0.92v1.83c0.01 0.51-0.4 0.92-0.91 0.92z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.04 69.82c7.22 0 13.17 5.49 13.92 12.54 0.05 0.49 0.08 1 0.08 1.51s-0.03 1.01-0.08 1.51c-0.75 7.05-6.69 12.54-13.92 12.54-7.73 0-14-6.29-14-14.05s6.27-14.05 14-14.05m0-3.01c-9.38 0-17.01 7.65-17.01 17.05s7.63 17.05 17.01 17.05c8.72 0 15.98-6.55 16.91-15.23 0.07-0.62 0.1-1.24 0.1-1.82 0-0.59-0.03-1.2-0.1-1.82-0.92-8.68-8.19-15.23-16.91-15.23z",
      fill: "#FFA000"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 90.589,
        cy: 70.822,
        r: 26.85,
        gradientTransform: "matrix(.9966 0 0 1 .2146 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#03A9F4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.81 82.8-0.71-0.71c-0.39-0.39-0.39-1.03 0-1.42l7.72-7.75c-5.5-4.45-13.57-4.12-18.68 1.01-5.47 5.49-5.47 14.38 0 19.87s14.33 5.49 19.8 0c5.11-5.13 5.44-13.23 1-18.74l-7.72 7.75c-0.39 0.38-1.02 0.38-1.41-0.01z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m99.82 72.93-7.72 7.75c-0.39 0.39-0.39 1.03 0 1.42l0.71 0.71c0.39 0.39 1.02 0.39 1.41 0l7.72-7.75c-0.31-0.39-0.64-0.76-1-1.12-0.36-0.37-0.73-0.7-1.12-1.01z",
      fill: "#B3E5FC"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m91.04 71.82c2.73 0 5.41 0.94 7.52 2.66 0.35 0.29 0.67 0.57 0.96 0.86s0.58 0.61 0.86 0.96c3.86 4.8 3.49 11.71-0.86 16.07-2.27 2.27-5.28 3.53-8.48 3.53s-6.21-1.25-8.48-3.53c-4.68-4.7-4.68-12.34 0-17.04 2.27-2.26 5.28-3.51 8.48-3.51m0-2c-3.58 0-7.16 1.37-9.9 4.11-5.47 5.49-5.47 14.38 0 19.87 2.73 2.74 6.32 4.11 9.9 4.11s7.17-1.37 9.9-4.11c5.11-5.13 5.44-13.23 1-18.74-0.31-0.39-0.64-0.76-1-1.12s-0.73-0.69-1.12-1.01c-2.55-2.07-5.67-3.11-8.78-3.11z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#546E7A"
      },
      _react2.default.createElement("path", {
        d:
          "m18.09 105.94h-0.18c-1.05 0-1.91-0.86-1.91-1.91v-36.31c0-1.05 0.86-1.91 1.91-1.91h0.18c1.05 0 1.91 0.86 1.91 1.91v36.31c0 1.05-0.86 1.91-1.91 1.91z"
      }),
      _react2.default.createElement("path", {
        d:
          "m26.09 105.94h-0.18c-1.05 0-1.91-0.86-1.91-1.91v-36.31c0-1.05 0.86-1.91 1.91-1.91h0.18c1.05 0 1.91 0.86 1.91 1.91v36.31c0 1.05-0.86 1.91-1.91 1.91z"
      }),
      _react2.default.createElement("path", {
        d:
          "m34.09 105.94h-0.18c-1.05 0-1.91-0.86-1.91-1.91v-36.31c0-1.05 0.86-1.91 1.91-1.91h0.18c1.05 0 1.91 0.86 1.91 1.91v36.31c0 1.05-0.86 1.91-1.91 1.91z"
      }),
      _react2.default.createElement("path", {
        d:
          "m42.09 105.94h-0.18c-1.05 0-1.91-0.86-1.91-1.91v-36.31c0-1.05 0.86-1.91 1.91-1.91h0.18c1.05 0 1.91 0.86 1.91 1.91v36.31c0 1.05-0.86 1.91-1.91 1.91z"
      }),
      _react2.default.createElement("path", {
        d:
          "m50.09 105.94h-0.18c-1.05 0-1.91-0.86-1.91-1.91v-36.31c0-1.05 0.86-1.91 1.91-1.91h0.18c1.05 0 1.91 0.86 1.91 1.91v36.31c0 1.05-0.86 1.91-1.91 1.91z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.09 105.94h-0.18c-1.05 0-1.91-0.86-1.91-1.91v-36.31c0-1.05 0.86-1.91 1.91-1.91h0.18c1.05 0 1.91 0.86 1.91 1.91v36.31c0 1.05-0.86 1.91-1.91 1.91z"
      })
    ),
    _react2.default.createElement("rect", {
      x: 20,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 28.4,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 45.2,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 53.6,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 62,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 70.4,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 78.8,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 87.2,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 95.6,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 104,
      y: 45.74,
      width: 4,
      height: 8.03,
      fill: "#B3E5FC"
    }),
    _react2.default.createElement("rect", {
      x: 36.8,
      y: 33.7,
      width: 4,
      height: 20.07,
      fill: "#FF6F00"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m107.99 36.7c0.56 0 1.01 0.45 1.01 1.01v12.05c0 0.56-0.45 1.01-1.01 1.01h-87.98c-0.56 0-1.01-0.45-1.01-1.01v-12.06c0-0.56 0.45-1.01 1.01-1.01h87.98m0-2.99h-87.98c-2.21 0-4.01 1.79-4.01 4.01v12.05c0 2.21 1.79 4.01 4.01 4.01h87.99c2.21 0 4.01-1.79 4.01-4.01v-12.06c-0.01-2.21-1.8-4-4.02-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.19
      },
      _react2.default.createElement("path", {
        d:
          "m18.09 66.8c0.5 0 0.91 0.41 0.91 0.91v36.31c0 0.5-0.41 0.91-0.91 0.91h-0.18c-0.5 0-0.91-0.41-0.91-0.91v-36.3c0-0.5 0.41-0.91 0.91-0.91h0.18m0-1.01h-0.18c-1.05 0-1.91 0.86-1.91 1.91v36.31c0 1.05 0.86 1.91 1.91 1.91h0.18c1.05 0 1.91-0.86 1.91-1.91v-36.3c0-1.06-0.86-1.92-1.91-1.92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m26.09 66.8c0.5 0 0.91 0.41 0.91 0.91v36.31c0 0.5-0.41 0.91-0.91 0.91h-0.18c-0.5 0-0.91-0.41-0.91-0.91v-36.3c0-0.5 0.41-0.91 0.91-0.91h0.18m0-1.01h-0.18c-1.05 0-1.91 0.86-1.91 1.91v36.31c0 1.05 0.86 1.91 1.91 1.91h0.18c1.05 0 1.91-0.86 1.91-1.91v-36.3c0-1.06-0.86-1.92-1.91-1.92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m34.09 66.8c0.5 0 0.91 0.41 0.91 0.91v36.31c0 0.5-0.41 0.91-0.91 0.91h-0.18c-0.5 0-0.91-0.41-0.91-0.91v-36.3c0-0.5 0.41-0.91 0.91-0.91h0.18m0-1.01h-0.18c-1.05 0-1.91 0.86-1.91 1.91v36.31c0 1.05 0.86 1.91 1.91 1.91h0.18c1.05 0 1.91-0.86 1.91-1.91v-36.3c0-1.06-0.86-1.92-1.91-1.92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m42.09 66.8c0.5 0 0.91 0.41 0.91 0.91v36.31c0 0.5-0.41 0.91-0.91 0.91h-0.18c-0.5 0-0.91-0.41-0.91-0.91v-36.3c0-0.5 0.41-0.91 0.91-0.91h0.18m0-1.01h-0.18c-1.05 0-1.91 0.86-1.91 1.91v36.31c0 1.05 0.86 1.91 1.91 1.91h0.18c1.05 0 1.91-0.86 1.91-1.91v-36.3c0-1.06-0.86-1.92-1.91-1.92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m50.09 66.8c0.5 0 0.91 0.41 0.91 0.91v36.31c0 0.5-0.41 0.91-0.91 0.91h-0.18c-0.5 0-0.91-0.41-0.91-0.91v-36.3c0-0.5 0.41-0.91 0.91-0.91h0.18m0-1.01h-0.18c-1.05 0-1.91 0.86-1.91 1.91v36.31c0 1.05 0.86 1.91 1.91 1.91h0.18c1.05 0 1.91-0.86 1.91-1.91v-36.3c0-1.06-0.86-1.92-1.91-1.92z"
      }),
      _react2.default.createElement("path", {
        d:
          "m58.09 66.8c0.5 0 0.91 0.41 0.91 0.91v36.31c0 0.5-0.41 0.91-0.91 0.91h-0.18c-0.5 0-0.91-0.41-0.91-0.91v-36.3c0-0.5 0.41-0.91 0.91-0.91h0.18m0-1.01h-0.18c-1.05 0-1.91 0.86-1.91 1.91v36.31c0 1.05 0.86 1.91 1.91 1.91h0.18c1.05 0 1.91-0.86 1.91-1.91v-36.3c0-1.06-0.86-1.92-1.91-1.92z"
      })
    )
  );
}

exports.default = Radio;
