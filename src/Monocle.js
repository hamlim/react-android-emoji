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

function Monocle(props) {
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
      "symbol",
      {
        viewBox: "-64.5 -64.5 129 129"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "none",
          stroke: "#4285F4",
          strokeMiterlimit: 10
        },
        _react2.default.createElement("rect", {
          x: -64,
          y: -64,
          width: 128,
          height: 128
        }),
        _react2.default.createElement("path", {
          d:
            "M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z"
        }),
        _react2.default.createElement("path", {
          d:
            "m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z"
        }),
        _react2.default.createElement("path", {
          d:
            "M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z"
        }),
        _react2.default.createElement("line", {
          x1: -0.01,
          x2: -0.01,
          y1: 51,
          y2: -51
        }),
        _react2.default.createElement("line", {
          x1: -16,
          x2: -16,
          y1: 48.95,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 15.99,
          x2: 15.99,
          y1: 48.91,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 53,
          x2: -53,
          y1: 0.08,
          y2: 0.08
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 19.698,
        y2: 107.72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEE133",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEDE32",
        offset: 0.6118
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD32F",
        offset: 0.7076
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC12B",
        offset: 0.7975
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7A924",
        offset: 0.8834
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A323",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,119.92c-27.95,0-58.02-17.5-58.02-55.92S36.05,8.08,64,8.08 c15.49,0,29.83,5.13,40.38,14.44c11.55,10.19,17.65,24.53,17.65,41.48c0,16.87-6.1,31.19-17.65,41.41 C93.8,114.76,79.46,119.92,64,119.92z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.08c15 0 28.87 4.95 39.05 13.94 11.1 9.8 16.97 23.62 16.97 39.98 0 16.28-5.87 30.08-16.98 39.91-10.21 9.03-24.08 14.01-39.05 14.01-15.04 0-28.92-4.91-39.06-13.83-11.09-9.76-16.95-23.62-16.95-40.09 0-16.55 5.87-30.44 16.96-40.17 10.11-8.86 23.99-13.75 39.06-13.75m0-4c-31.16 0-60.02 20.02-60.02 57.92 0 37.7 28.86 57.92 60.02 57.92s60.02-20.73 60.02-57.92c0-37.39-28.86-57.92-60.02-57.92z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d: "m46.94 41.88",
      fill: "none",
      stroke: "#fff",
      strokeMiterlimit: 10,
      strokeWidth: 0.9183
    }),
    _react2.default.createElement("path", {
      d:
        "m74.34 24.51c0.9-0.75 1.85-1.46 2.8-2.16 0.98-0.67 2.06-1.25 3.11-1.84 2.25-1.03 4.62-2.01 7.48-2.09 0.67-0.09 1.44 0.06 2.16 0.11 0.72 0.03 1.46 0.3 2.18 0.52 0.18 0.06 0.36 0.11 0.54 0.18l0.51 0.26 1.01 0.55c0.63 0.42 1.24 0.9 1.76 1.41 1.05 1.05 1.82 2.26 2.4 3.47 0.26 0.61 0.52 1.22 0.69 1.83 0.19 0.6 0.33 1.23 0.41 1.64l0.05 0.26c0.23 1.22-0.58 2.39-1.79 2.61-0.98 0.18-1.94-0.31-2.39-1.15-0.33-0.63-0.55-1.06-0.8-1.48-0.24-0.43-0.49-0.82-0.74-1.19-0.51-0.74-1.08-1.34-1.66-1.82-0.13-0.14-0.31-0.2-0.46-0.3-0.16-0.09-0.28-0.22-0.45-0.29-0.16-0.06-0.32-0.13-0.48-0.2l-0.23-0.11c-0.08-0.02-0.18-0.03-0.26-0.05-0.67-0.2-1.42-0.29-2.24-0.24-1.64-0.02-3.51 0.65-5.38 1.27-0.93 0.43-1.89 0.77-2.83 1.21-0.95 0.46-1.9 0.93-2.9 1.34l-0.18 0.08c-1.15 0.48-2.46-0.07-2.94-1.21-0.39-0.95-0.11-1.99 0.63-2.61z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d:
        "m45.63 38.54c-0.81 0.18-1.35 0.26-2.02 0.31-0.64 0.05-1.27 0.07-1.91 0.04-1.26-0.04-2.57-0.25-3.76-0.56-2.01-0.45-3.99-0.79-5.7-0.82-0.84 0.02-1.6 0.08-2.19 0.29-0.6 0.2-1.08 0.46-1.58 0.95-1.03 0.95-1.98 2.75-2.96 4.62l-0.01 0.02c-0.59 1.11-1.96 1.53-3.06 0.94-0.89-0.47-1.33-1.45-1.17-2.39 0.2-1.14 0.49-2.29 0.94-3.47 0.45-1.17 1.05-2.4 2.03-3.56 0.95-1.15 2.33-2.17 3.81-2.7 1.48-0.55 2.94-0.7 4.29-0.67 2.69 0.07 5.01 0.77 7.2 1.57 0.9 0.35 1.75 0.57 2.68 0.75 0.46 0.08 0.92 0.15 1.38 0.19 0.43 0.04 0.98 0.07 1.26 0.08l0.4 0.02c1.23 0.05 2.18 1.08 2.14 2.31-0.07 1.02-0.81 1.86-1.77 2.08z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("path", {
      d: "m22.64 54.12",
      fill: "none",
      stroke: "#fff",
      strokeMiterlimit: 10,
      strokeWidth: 0.9183
    }),
    _react2.default.createElement("path", {
      d:
        "m43.98 91.28c1.78-1.98 6.57-4.33 13.33-4.16 8.88 0.22 13.74 4.2 13.74 4.2 2.89 2.44 1.59 6.13-1.52 5.77-4.98-0.58-4.74-1.51-13.68-1.67-6.51-0.11-9.62 0.9-9.9 0.91-1.77 0.06-2.5-0.56-2.84-1.78-0.28-1.02 0.01-2.3 0.87-3.27z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.32 43.78c4.42 0 8.45 3.74 8.45 9.94s-4.02 9.94-8.45 9.94c-4.42 0-8.45-3.74-8.45-9.94s4.03-9.94 8.45-9.94z",
      fill: "#303030"
    }),
    _react2.default.createElement("path", {
      d:
        "m37.23 45.49c-4.19 0-8 3.54-8 9.42s3.81 9.42 8 9.42 8-3.54 8-9.42-3.81-9.42-8-9.42z",
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: 79.56,
      cy: 53.68,
      r: 20.59,
      fill: "#ccc",
      fillOpacity: 0.5,
      stroke: "#404040",
      strokeMiterlimit: 10,
      strokeWidth: 3.5
    }),
    _react2.default.createElement("path", {
      d:
        "m106.49 49.88h-5.56v9h5.56c2.69 0 5.44-1.66 5.44-4.35v-0.37c0-2.7-2.75-4.28-5.44-4.28zm-0.47 7.71c-1.9 0-3.45-1.49-3.45-3.33s1.54-3.33 3.45-3.33 3.45 1.49 3.45 3.33-1.54 3.33-3.45 3.33z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m94.82 52.46c-0.36-3.77-2.1-7.3-4.87-9.68-2.76-2.38-6.38-3.68-10.03-3.66-3.65-0.03-7.29 1.19-10.09 3.53-2.82 2.32-4.57 5.85-4.93 9.62-0.02 0.26-0.26 0.45-0.52 0.43-0.24-0.02-0.42-0.22-0.43-0.45-0.09-2.01 0.29-4.07 1.05-5.98 0.79-1.91 2.01-3.64 3.53-5.07 3.04-2.88 7.26-4.33 11.4-4.32 4.15 0.01 8.35 1.56 11.34 4.48 1.49 1.45 2.68 3.2 3.46 5.1 0.75 1.92 1.12 3.97 1.03 5.98-0.01 0.26-0.23 0.46-0.49 0.45-0.24-0.01-0.43-0.19-0.45-0.43z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 70.75h-0.05c-0.28 0-0.5-0.22-0.5-0.5v-4.62c0-0.28 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.22 0.5 0.5v4.62c0 0.28-0.23 0.5-0.5 0.5z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 78.44h-0.05c-0.28 0-0.5-0.22-0.5-0.5v-4.62c0-0.28 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.22 0.5 0.5v4.62c0 0.28-0.23 0.5-0.5 0.5z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 86.14h-0.05c-0.28 0-0.5-0.22-0.5-0.5v-4.62c0-0.28 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.22 0.5 0.5v4.62c0 0.27-0.23 0.5-0.5 0.5z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 93.83h-0.05c-0.28 0-0.5-0.22-0.5-0.5v-4.63c0-0.28 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.22 0.5 0.5v4.62c0 0.28-0.23 0.51-0.5 0.51z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 101.52h-0.05c-0.28 0-0.5-0.22-0.5-0.5v-4.62c0-0.28 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.22 0.5 0.5v4.62c0 0.27-0.23 0.5-0.5 0.5z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 109.21h-0.05c-0.28 0-0.5-0.23-0.5-0.5v-4.62c0-0.27 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.23 0.5 0.5v4.62c0 0.27-0.23 0.5-0.5 0.5z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 116.9h-0.05c-0.28 0-0.5-0.23-0.5-0.5v-4.62c0-0.27 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.23 0.5 0.5v4.62c0 0.28-0.23 0.5-0.5 0.5z",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m106.13 62.65h-0.05c-0.28 0-0.5-0.23-0.5-0.5v-4.62c0-0.27 0.22-0.5 0.5-0.5h0.05c0.28 0 0.5 0.23 0.5 0.5v4.62c0 0.27-0.23 0.5-0.5 0.5z",
      fill: "#404040"
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 64.1,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 71.75,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 79.41,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 87.06,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 94.72,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 102.38,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 110.03,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("circle", {
      cx: 106.1,
      cy: 117.69,
      r: 2.61,
      fill: "none",
      stroke: "#404040",
      strokeMiterlimit: 10
    })
  );
}

exports.default = Monocle;
