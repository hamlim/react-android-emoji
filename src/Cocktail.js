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

function Cocktail(props) {
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
      d: "m19.33 33.84",
      fill: "#F5FAFC"
    }),
    _react2.default.createElement("path", {
      d: "m95.11 1.14",
      fill: "#FFCA28"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.678,
        x2: 63.678,
        y1: 112.76,
        y2: 123.88,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F2F3ED",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C6B9",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 63.68,
      cy: 118.15,
      rx: 17.25,
      ry: 5.49,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 6.9404,
        y2: 116.96,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F2F3ED",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C6B9",
        offset: 0.7602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFCEC",
        offset: 0.9949
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m103.44 10.5h-0.04c-0.82-2.1-18.06-3.78-39.23-3.78-21.35 0-39.05 1.65-39.59 3.78h-0.03l0.02 0.02c-0.01 0.03-0.02 0.05-0.02 0.08 0 0.27 33.08 38.76 35.14 45.02 2.27 6.92 2.49 14.02 2.29 28.26-0.21 14.24-1.21 31.53-1.21 31.53s-0.1 2.43 3.05 2.43c3.26 0 2.95-2.43 2.95-2.43s-1-17.28-1.2-31.53c-0.21-14.24 0.02-21.34 2.28-28.26 2.04-6.23 35.58-44.67 35.58-44.97 0-0.04-0.02-0.08-0.03-0.12 0.03-0.01 0.04-0.03 0.04-0.03z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.83,
        x2: 63.83,
        y1: 18.132,
        y2: 48.712,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E8FFA1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BA269",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.91 21.59c0-2.22-12.53-4.01-27.98-4.01-15.4 0-27.89 1.78-27.98 3.99l-0.21 0.02s19.33 27.47 28.08 27.47c7.85 0 24.22-22.11 27.5-26.65 0.39-0.26 0.59-0.54 0.59-0.82z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.2,
      cy: 10.6,
      rx: 39.24,
      ry: 5.63,
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.85 44.49s1.38-2.5 3.68-6.09c1.14-1.8 2.51-3.87 4.01-6.07 0.76-1.09 1.52-2.24 2.33-3.37 0.81-1.14 1.63-2.29 2.46-3.44 0.84-1.14 1.69-2.28 2.51-3.4 0.82-1.13 1.68-2.2 2.48-3.26 1.62-2.11 3.17-4.05 4.53-5.69 2.7-3.29 4.65-5.38 4.65-5.38s-1.38 2.5-3.68 6.09c-1.14 1.8-2.51 3.87-4.01 6.07-0.76 1.09-1.52 2.24-2.34 3.37-0.81 1.14-1.63 2.29-2.46 3.44-0.84 1.14-1.69 2.28-2.52 3.4-0.82 1.13-1.68 2.2-2.48 3.26-1.62 2.11-3.17 4.05-4.53 5.69-2.68 3.29-4.63 5.38-4.63 5.38z",
      fill: "#8C6239"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9756 -.2196 .2196 .9756 -5.5889 15.908)",
      cx: 68.75,
      cy: 33.09,
      rx: 8.34,
      ry: 6.92,
      fill: "#81882D"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9756 -.2196 .2196 .9756 -3.3747 17.572)",
      cx: 77.34,
      cy: 23.96,
      rx: 6.21,
      ry: 5.15,
      fill: "#727724"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7071 -.7071 .7071 .7071 -3.5055 57.286)",
      cx: 67.4,
      cy: 32.87,
      rx: 4.18,
      ry: 3.34,
      fill: "#85471B"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7071 -.7071 .7071 .7071 5.3537 60.36)",
      cx: 75.54,
      cy: 23.72,
      rx: 2.83,
      ry: 2.26,
      fill: "#85471B"
    }),
    _react2.default.createElement("ellipse", {
      cx: 63.93,
      cy: 21.59,
      rx: 27.98,
      ry: 4.01,
      fill: "#E6EECB",
      opacity: 0.52
    }),
    _react2.default.createElement("path", {
      d: "m207.11 1.14",
      fill: "#FFCA28"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.2 7.98c18.7 0 30.5 1.78 34.94 3.18-0.58 0.68-1.27 1.5-2.05 2.42-21.52 25.33-30.81 37.25-32.08 41.11-0.5 1.52-0.9 3.04-1.23 4.62-0.33-1.58-0.73-3.1-1.23-4.62-1.28-3.9-10.52-15.89-31.87-41.39-0.61-0.73-1.2-1.43-1.71-2.05 4.18-1.41 16.09-3.27 35.23-3.27m-0.42 105.68c0.37 1.16 1.43 2.01 2.69 2.08 5.71 0.32 9.44 1.52 10.93 2.41-1.63 0.97-6.11 2.5-13.72 2.5s-12.08-1.53-13.72-2.5c1.51-0.9 5.3-2.12 11.12-2.42 1.27-0.07 2.32-0.91 2.7-2.07m0.42-108.68c-19.88 0-36.29 2.12-38.88 4.87-0.43 0.21-0.69 0.43-0.75 0.66h-0.03l0.02 0.02c-0.01 0.03-0.02 0.05-0.02 0.08 0 0.27 33.08 38.76 35.14 45.02 2.27 6.92 2.49 14.02 2.29 28.26-0.16 10.85-0.77 23.45-1.06 28.85-8.21 0.42-14.49 2.68-14.49 5.42 0 3.03 7.72 5.49 17.25 5.49s17.25-2.46 17.25-5.49c0-2.71-6.18-4.96-14.29-5.41-0.28-5.39-0.9-18-1.06-28.86-0.21-14.24 0.02-21.34 2.28-28.26 1.83-5.61 29.18-37.3 34.63-43.79 0.58-0.37 0.91-0.76 0.94-1.16 0 0 0.01-0.01 0.01-0.02v-0.02c0-0.01 0.01-0.02 0.01-0.04 0-0.03-0.01-0.06-0.01-0.08 0-0.01 0.01-0.02 0.01-0.02h-0.02c-0.37-3.06-17.78-5.52-39.22-5.52zm39.24 6.02z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Cocktail;
