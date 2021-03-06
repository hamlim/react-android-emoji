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

function Rhinoceros(props) {
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
        id: "g",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "f"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#f)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 47.532,
          x2: 57.699,
          y1: 44.025,
          y2: 59.858,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.339
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F1F1F1",
          offset: 0.44
        }),
        _react2.default.createElement("stop", {
          stopColor: "#DFDFDF",
          offset: 0.6085
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D4D4D4",
          offset: 0.7887
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D1D1D1",
          offset: 0.999
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m47.51 57.63c0.06 1.8 0.26 3.81 1.62 4.98 1.1 0.95 2.73 1.09 4.13 0.71 1.41-0.38 2.64-1.2 3.86-2 1.71-1.14 3.47-2.31 4.69-3.97s1.82-3.93 0.99-5.81c-0.74-1.67-2.4-2.71-3.97-3.64-2.09-1.24-7.99-6.28-10.53-3.99-2.17 1.96-0.83 10.98-0.79 13.72z",
        fill: "url(#e)",
        stroke: "#999",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 67.365,
          x2: 83.928,
          y1: 27.537,
          y2: 27.537,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#CFCFCF",
          offset: 0.079
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BEC1C3",
          offset: 0.3236
        }),
        _react2.default.createElement("stop", {
          stopColor: "#929DA3",
          offset: 0.8053
        }),
        _react2.default.createElement("stop", {
          stopColor: "#818E96",
          offset: 0.9796
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m67.38 19.19c-0.06-0.76-0.01-1.67 0.65-2.05 0.73-0.43 1.62 0.12 2.28 0.65 3.03 2.41 6.05 4.82 9.08 7.23 1.64 1.31 3.36 2.71 4.13 4.66 0.91 2.29 0.25 5.1-1.58 6.75-3.41 3.07-7.58 1.57-9.66-1.83-2.82-4.63-4.5-10.01-4.9-15.41z",
        fill: "url(#d)",
        stroke: "#808080",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 76.072,
          x2: 76.072,
          y1: 28.607,
          y2: 122.35,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#CFCFCF",
          offset: 0.079
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C9CACA",
          offset: 0.256
        }),
        _react2.default.createElement("stop", {
          stopColor: "#B7BBBE",
          offset: 0.498
        }),
        _react2.default.createElement("stop", {
          stopColor: "#9BA3A9",
          offset: 0.7763
        }),
        _react2.default.createElement("stop", {
          stopColor: "#818E96",
          offset: 0.9796
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m126 121.44c-3.3-3.71-8.89-10.93-13.25-16.56-10.48-13.52-10.68-13.52-11.82-13.52-0.07 0-0.16 0.01-0.23 0.02-0.34 0.05-0.66 0.22-0.89 0.48-3.19 3.52-6.19 6.08-9.43 8.06-5.87 3.57-11.83 5.3-18.22 5.3-4.34 0-8.99-0.78-14.22-2.4-0.53-0.16-1.13-0.24-1.84-0.24-2.41 0-5.75 0.92-9.28 1.9-3.43 0.95-6.97 1.92-9.31 1.92-0.87 0-1.32-0.14-1.55-0.25-4.66-2.4-6.34-5.58-7.69-8.14-0.2-0.38-0.39-0.74-0.58-1.07-2.9-5.17-1.37-7.83 1.66-13.13 0.43-0.76 0.89-1.56 1.36-2.4 3.65-6.63 9.51-11.76 15.2-16.44 2.46-2.02 4.41-3.14 6.47-4.32 2.88-1.64 5.86-3.34 10.52-7.53 1.5-1.35 4-4.32 7.15-8.07 7.42-8.83 18.63-22.18 25.96-24.89 4-1.48 8.22-2.23 12.56-2.23 8.52 0 15.24 2.91 17.42 3.98v99.53z",
        fill: "url(#c)"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.33 19.43c7.32 0 13.67 2.24 15.67 3.43v94.49c-3-4.01-7.29-9.49-10.31-13.39-10.93-14.1-10.92-14.1-12.88-14.1-0.15 0-0.25 0.01-0.39 0.03-0.69 0.1-1.28 0.44-1.75 0.95-3.09 3.41-5.96 5.88-9.08 7.78-5.62 3.42-11.32 5.08-17.43 5.08-4.18 0-8.69-0.76-13.77-2.33-0.67-0.21-1.42-0.31-2.28-0.31-2.61 0-6.04 0.95-9.68 1.95-3.33 0.92-6.77 1.87-8.91 1.87-0.62 0-0.86-0.09-0.86-0.09-4.24-2.19-5.8-5.14-7.05-7.51-0.21-0.39-0.4-0.76-0.59-1.1-2.48-4.42-1.27-6.54 1.66-11.65 0.44-0.77 0.9-1.57 1.37-2.43 3.52-6.4 9.26-11.41 14.84-16 2.36-1.94 4.17-2.98 6.26-4.17 2.81-1.6 5.99-3.42 10.78-7.72 1.58-1.42 4.1-4.42 7.3-8.22 6.87-8.18 18.25-21.87 25.21-24.45 3.81-1.39 7.73-2.11 11.89-2.11m0-3c-4.04 0-8.35 0.62-12.95 2.32-10.83 4-28.58 28.81-33.53 33.25-7.99 7.17-10.97 6.92-16.91 11.8-5.94 4.89-11.82 10.1-15.55 16.87-3.73 6.78-6.79 10.25-3.01 16.99 1.45 2.59 3.09 6.82 8.89 9.81 0.57 0.3 1.34 0.42 2.24 0.42 4.96 0 14.07-3.82 18.59-3.82 0.54 0 1.01 0.05 1.4 0.17 5.12 1.58 9.96 2.46 14.66 2.46 6.47 0 12.68-1.61 19-5.45 3.71-2.25 6.83-5.25 9.76-8.25h0.01c1.33 0 23.07 29.35 26.07 32v-104s-7.72-4.57-18.67-4.57z",
        fill: "#808080"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 42.113,
          x2: 7.5768,
          y1: 146.46,
          y2: 106.92,
          gradientTransform: "matrix(.9985 .0545 -.0545 .9985 5.0425 -67.942)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#D1D1D1",
          offset: 0.00097656
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D4D4D4",
          offset: 0.1117
        }),
        _react2.default.createElement("stop", {
          stopColor: "#DFDFDF",
          offset: 0.2065
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F1F1F1",
          offset: 0.2953
        }),
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.3484
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m16 33.33c3.67 17.5 2.78 21.22 22 32.67 1.08 0.64 3.8 1.69 4.38 2.82 2.96 5.85-2.71 12.51-7.38 12.85-4.83 0.35-23-6.15-23-31.92 0-6.75 3.7-17.85 4-16.42z",
        fill: "url(#b)",
        stroke: "#A1A1A1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 85.434,
          x2: 103.27,
          y1: 7.0635,
          y2: 34.897,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#CFCFCF",
          offset: 0.079
        }),
        _react2.default.createElement("stop", {
          stopColor: "#BEC1C3",
          offset: 0.3236
        }),
        _react2.default.createElement("stop", {
          stopColor: "#929DA3",
          offset: 0.8053
        }),
        _react2.default.createElement("stop", {
          stopColor: "#818E96",
          offset: 0.9796
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m90.33 6.35c3.97 3.73 7.94 7.47 11.91 11.2 2.11 1.98 4.28 4.07 5.27 6.75 1.62 4.44-0.88 9.91-5.35 11.71-6.13 2.46-12.29-1.86-13.57-7.58-1.74-7.68-2.62-14.96 1.74-22.08z",
        fill: "url(#a)",
        stroke: "#808080",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.866 -.5 .5 .866 -18.206 48.929)",
        cx: 82.2,
        cy: 58.44,
        rx: 7.19,
        ry: 6.38,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m44.49 88.22c1.37 1.94 1.48 7.09-1.52 9.2-2.99 2.11-7.95 0.39-9.32-1.55s-0.06-5.22 2.94-7.34c3-2.11 6.53-2.25 7.9-0.31z",
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m88.32 55.17c1.4-0.74 1.7-2.56 0.51-3.37-2.79-1.9-6.77-2.12-10.25-0.27s-5.51 5.28-5.5 8.65c0.01 1.44 1.68 2.2 3.08 1.46l12.16-6.47z",
        fill: "#808080"
      })
    )
  );
}

exports.default = Rhinoceros;
