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

function Stopwatch(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(.7071 .7071 -.7071 .7071 31.136 -9.6101)",
      x: 16.61,
      y: 28.33,
      width: 21.12,
      height: 8.9,
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m22.85 25 12.1 12.1-3.46 3.46-12.11-12.1 3.47-3.46m0-2.83-6.29 6.29 14.93 14.93 6.29-6.29-14.93-14.93z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m29.32 26.62-8.13 8.13c-1.46 1.46-3.83 1.46-5.29 0l-0.78-0.78c-1.46-1.46-1.46-3.83 0-5.29l8.13-8.13c1.46-1.46 3.83-1.46 5.29 0l0.78 0.78c1.46 1.47 1.46 3.84 0 5.29z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m25.9 21.46c0.46 0 0.9 0.18 1.23 0.51l0.78 0.78c0.68 0.68 0.68 1.78 0 2.46l-8.13 8.13c-0.33 0.33-0.76 0.51-1.23 0.51s-0.9-0.18-1.23-0.51l-0.78-0.78c-0.68-0.68-0.68-1.78 0-2.46l8.13-8.13c0.33-0.33 0.76-0.51 1.23-0.51m0-2c-0.96 0-1.91 0.36-2.64 1.09l-8.13 8.13c-1.46 1.46-1.46 3.83 0 5.29l0.78 0.78c0.73 0.73 1.69 1.09 2.64 1.09 0.96 0 1.91-0.36 2.64-1.09l8.13-8.13c1.46-1.46 1.46-3.83 0-5.29l-0.78-0.78c-0.73-0.72-1.69-1.09-2.64-1.09z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(-.7071 .7071 -.7071 -.7071 195.38 -15.368)",
      x: 90.31,
      y: 28.33,
      width: 21.12,
      height: 8.9,
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.19 25 3.46 3.46-12.1 12.1-3.46-3.46 12.1-12.1m0-2.83-14.93 14.93 6.29 6.29 14.93-14.93-6.29-6.29z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98.72 26.62 8.13 8.13c1.46 1.46 3.83 1.46 5.29 0l0.78-0.78c1.46-1.46 1.46-3.83 0-5.29l-8.13-8.13c-1.46-1.46-3.83-1.46-5.29 0l-0.78 0.78c-1.46 1.47-1.46 3.84 0 5.29z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.14 21.46c0.46 0 0.9 0.18 1.23 0.51l8.13 8.13c0.68 0.68 0.68 1.78 0 2.46l-0.78 0.78c-0.33 0.33-0.76 0.51-1.23 0.51s-0.9-0.18-1.23-0.51l-8.13-8.13c-0.68-0.68-0.68-1.78 0-2.46l0.78-0.78c0.33-0.33 0.77-0.51 1.23-0.51m0-2c-0.96 0-1.91 0.36-2.64 1.09l-0.78 0.78c-1.46 1.46-1.46 3.83 0 5.29l8.13 8.13c0.73 0.73 1.69 1.09 2.64 1.09 0.96 0 1.91-0.36 2.64-1.09l0.78-0.78c1.46-1.46 1.46-3.83 0-5.29l-8.13-8.13c-0.72-0.72-1.68-1.09-2.64-1.09z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      transform: "matrix(6.1926e-11 1 -1 6.1926e-11 79.452 -48.495)",
      x: 53.41,
      y: 11.03,
      width: 21.12,
      height: 8.9,
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m66.42 6.92v17.12h-4.9v-17.12h4.9m2-2h-8.9v21.12h8.9v-21.12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.43 15.57h-20.36c-2.9 0-5.25-2.35-5.25-5.25v-1c0-2.9 2.35-5.25 5.25-5.25h20.36c2.9 0 5.25 2.35 5.25 5.25v1c0 2.9-2.35 5.25-5.25 5.25z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m74.43 6.07c1.79 0 3.25 1.46 3.25 3.25v1c0 1.79-1.46 3.25-3.25 3.25h-20.36c-1.79 0-3.25-1.46-3.25-3.25v-1c0-1.79 1.46-3.25 3.25-3.25h20.36m0-2h-20.36c-2.9 0-5.25 2.35-5.25 5.25v1c0 2.9 2.35 5.25 5.25 5.25h20.36c2.9 0 5.25-2.35 5.25-5.25v-1c0-2.9-2.35-5.25-5.25-5.25z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 71.9,
      r: 52.03,
      fill: "#616161"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.254,
        x2: 64.254,
        y1: 41.925,
        y2: 119.54,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0.3212
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64.25,
      cy: 71.9,
      r: 40.32,
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.08 46.97-3.23 27.6 4.02 2.33 4.74-2.33-3.51-27.61c-0.18-1.03-1.86-1.02-2.02 0.01z",
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 31.96,
      cy: 72.01,
      r: 3.47,
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 63.91,
      cy: 38.98,
      r: 3.47,
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 63.91,
      cy: 103.96,
      r: 3.47,
      fill: "#757575"
    }),
    _react2.default.createElement("circle", {
      cx: 95.86,
      cy: 72.01,
      r: 3.47,
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.25 33.58c21.13 0 38.32 17.19 38.32 38.32s-17.19 38.32-38.32 38.32-38.32-17.19-38.32-38.32 17.19-38.32 38.32-38.32m0-2c-22.27 0-40.32 18.05-40.32 40.32s18.05 40.32 40.32 40.32 40.32-18.05 40.32-40.32-18.05-40.32-40.32-40.32z",
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
          "m64 22.87c27.04 0 49.03 22 49.03 49.03s-22 49.03-49.03 49.03-49.03-22-49.03-49.03 21.99-49.03 49.03-49.03m0-3c-28.74 0-52.03 23.3-52.03 52.03s23.3 52.03 52.03 52.03 52.03-23.3 52.03-52.03-23.29-52.03-52.03-52.03z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 71.9,
      r: 6.07,
      fill: "#424242"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 71.9,
      r: 2.6,
      fill: "#CFD8DC"
    })
  );
}

exports.default = Stopwatch;
