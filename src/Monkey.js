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

function Monkey(props) {
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
        "m91.78 110.57c2.76 9.33 14.59 8.73 20.78 3.57 3.57-2.98 6.07-7.67 6.13-12.36 0.07-5.3-2.95-10.17-6.57-14.05-3.62-3.87-7.92-7.08-11.36-11.11s-6.05-9.24-5.29-14.48c0.65-4.49 3.9-8.68 8.25-10.12 4.6-1.52 10.58-0.07 12.29 4.9 0.82 2.39 0.28 5.26-1.53 7.03-1.8 1.77-4.84 2.23-6.98 0.88s-3.02-4.46-1.72-6.63",
      fill: "none",
      stroke: "#734D32",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3.7558
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: -95.827,
        x2: -70.708,
        y1: 26.052,
        y2: 26.052,
        gradientTransform: "matrix(.9706 .2407 -.2407 .9706 142.74 87.964)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#825C40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#855F41",
        offset: 0.1672
      }),
      _react2.default.createElement("stop", {
        stopColor: "#906746",
        offset: 0.3105
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2764D",
        offset: 0.4445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.4881
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m47.17 84.63c-3.97 4.01-4.95 10-5.74 15.59-0.23 1.61-0.45 3.3 0.13 4.82 0.57 1.52 2.22 2.77 3.78 2.31 1.28-0.38 2.02-1.71 2.37-2.99s0.46-2.65 1.1-3.82c0.82-1.52 2.44-2.48 4.09-2.98 1.66-0.5 3.4-0.62 5.11-0.9 3.2-0.52 6.39-1.68 8.79-3.86s3.9-5.52 3.33-8.71c-0.39-2.17-2.08-4.68-4.26-5.38-1.84-0.59-4 0.48-5.84 0.76-4.67 0.71-9.4 1.66-12.86 5.16z",
      fill: "url(#h)",
      stroke: "#734D32",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 64.855,
        x2: 84.317,
        y1: 61.311,
        y2: 123.02,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.2558
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9C714B",
        offset: 0.5668
      }),
      _react2.default.createElement("stop", {
        stopColor: "#825C40",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m57.61 57s24.41 0 35.74 17.73 5.85 47.34-10.71 47.77c-25.33 0.67-21.67-24.83-21.67-24.83s-9.2-16.07-17.92-26.92 14.56-13.75 14.56-13.75z",
      fill: "url(#g)",
      stroke: "#734D32",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: -29.492,
        x2: 26.008,
        y1: 81.032,
        y2: 38.532,
        gradientTransform: "matrix(1.1467 .1028 -.02 1.0076 53.782 25.757)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#825C40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#855F41",
        offset: 0.1672
      }),
      _react2.default.createElement("stop", {
        stopColor: "#906746",
        offset: 0.3105
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2764D",
        offset: 0.4445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.4881
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.18 78.76c-1.99 0.92-7.29 1.78-9.51 2.24-9.89 2.06-13.95 11.05-13.04 20.22 0.16 1.65 0.97 2.68 2.63 3.56 2.48 1.3 5.12 0.2 6.13-2.01s-0.74-6.89 0.99-8.69c1.55-1.62 6-1.17 8.49-1.23s5.01 0.37 7.51 0.51c4.51 0.25 9.09-0.49 12.69-2.62s6.11-5.74 6.09-9.72c-0.02-3.97-2.86-8.17-7.12-9.78-3.26-1.24-7.08-0.67-9.53 1.26-2.3 1.82-2.41 4.91-5.33 6.26z",
      fill: "url(#f)",
      stroke: "#734D32",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 58.775,
        x2: 58.775,
        y1: 87.75,
        y2: 120.55,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.5119
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2764D",
        offset: 0.5555
      }),
      _react2.default.createElement("stop", {
        stopColor: "#906746",
        offset: 0.6895
      }),
      _react2.default.createElement("stop", {
        stopColor: "#855F41",
        offset: 0.8328
      }),
      _react2.default.createElement("stop", {
        stopColor: "#825C40",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.82 91.15c-5.25-5.71-18.62-6.19-22.47 2.26-3.41 7.48 2.94 15.04 6.61 21.03-4.4 0.99-19.22-3.7-19.81 4.73-0.27 3.8 34.67 7.83 40.71-1.51 6.11-9.48-0.04-21.08-5.04-26.51z",
      fill: "url(#e)",
      stroke: "#734D32",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m25.26 55.92c-8.24 0-14.95-7.52-14.95-16.77s6.71-16.77 14.95-16.77 14.95 7.52 14.95 16.77c0 9.24-6.7 16.77-14.95 16.77z",
      fill: "#E6B175"
    }),
    _react2.default.createElement("path", {
      d:
        "m25.26 23.38c7.69 0 13.95 7.07 13.95 15.77s-6.26 15.77-13.95 15.77-13.95-7.07-13.95-15.77 6.26-15.77 13.95-15.77m0-2c-8.81 0-15.95 7.96-15.95 17.77s7.14 17.77 15.95 17.77 15.95-7.96 15.95-17.77-7.14-17.77-15.95-17.77z",
      fill: "#8B5E3C"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.41 55.92c-8.24 0-14.95-7.52-14.95-16.77s6.71-16.77 14.95-16.77c8.25 0 14.95 7.52 14.95 16.77 0.01 9.24-6.7 16.77-14.95 16.77z",
      fill: "#E6B175"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.41 23.38c7.69 0 13.95 7.07 13.95 15.77s-6.26 15.77-13.95 15.77-13.95-7.07-13.95-15.77 6.26-15.77 13.95-15.77m0-2c-8.81 0-15.95 7.96-15.95 17.77s7.14 17.77 15.95 17.77 15.95-7.96 15.95-17.77-7.14-17.77-15.95-17.77z",
      fill: "#8B5E3C"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 49.385,
        x2: 49.385,
        y1: 71.078,
        y2: 4.3647,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#825C40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#855F41",
        offset: 0.1672
      }),
      _react2.default.createElement("stop", {
        stopColor: "#906746",
        offset: 0.3105
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2764D",
        offset: 0.4445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.4881
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M49.39,71.08c-21.02,0-32.36-17.78-32.36-34.51c0-16.03,10-32.21,32.36-32.21 s32.36,16.18,32.36,32.21C81.74,53.3,70.4,71.08,49.39,71.08z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m49.39 5.36c18.75 0 31.36 12.54 31.36 31.21 0 8.85-2.96 17.13-8.33 23.32-5.79 6.67-13.75 10.19-23.02 10.19s-17.23-3.52-23.02-10.19c-5.37-6.18-8.33-14.47-8.33-23.32-0.02-18.66 12.58-31.21 31.34-31.21m0-2c-21.32 0-33.36 14.87-33.36 33.21s12.41 35.51 33.36 35.51 33.36-17.17 33.36-35.51-12.04-33.21-33.36-33.21z",
      fill: "#8B5E3C"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 49.385,
        x2: 49.385,
        y1: 19.396,
        y2: 68.163,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E6B175",
        offset: 0.2592
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2AC70",
        offset: 0.4545
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59E62",
        offset: 0.6859
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C0884A",
        offset: 0.9346
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BD8446",
        offset: 0.9692
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.82 32.61c0-7.3-6.16-13.22-13.75-13.22-6.76 0-12.37 4.7-13.52 10.88h-0.21-0.12c-1.15-6.18-6.76-10.87-13.52-10.87-7.59 0-13.75 5.92-13.75 13.22 0 3.92 1.79 7.43 4.61 9.85-0.77 1.73-1.18 3.58-1.18 5.49 0 9.77 10.73 20.2 23.96 20.2s23.96-10.43 23.96-20.2c0-1.9-0.41-3.72-1.16-5.44 2.86-2.42 4.68-5.95 4.68-9.91z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 34.26,
        cy: 34.48,
        rx: 5.25,
        ry: 5.94
      }),
      _react2.default.createElement("ellipse", {
        cx: 64.41,
        cy: 34.48,
        rx: 5.25,
        ry: 5.94
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m53.71 63.68c7.86-1.57 13.05-7.29 14.27-13.74 0.22-1.17-0.82-2.19-1.99-1.98-4.77 0.89-10.5 1.4-16.66 1.4s-11.88-0.52-16.65-1.4c-1.18-0.22-2.23 0.82-1.99 2 1.59 7.76 9.23 14.14 18.63 14.14 1.55 0 3.01-0.14 4.39-0.42"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m49.33 49.36c-6.16 0-11.88-0.52-16.65-1.4-1.18-0.22-2.23 0.82-1.99 2 1.59 7.76 9.23 14.14 18.63 14.14 10.29 0 17.22-6.58 18.66-14.17 0.22-1.17-0.82-2.19-1.99-1.98-4.77 0.9-10.5 1.41-16.66 1.41z",
      clipPath: "url(#a)",
      fill: "#404040",
      stroke: "#404040",
      strokeMiterlimit: 10,
      strokeWidth: 0.6671
    }),
    _react2.default.createElement("path", {
      d: "M70,47.8V42H29v5.8c5,3.77,13.1,5.87,20.5,5.87S63,51.57,70,47.8z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m49.33 49.36c-6.16 0-11.88-0.52-16.65-1.4-1.18-0.22-2.23 0.82-1.99 2 1.59 7.76 9.23 14.14 18.63 14.14 10.29 0 17.22-6.58 18.66-14.17 0.22-1.17-0.82-2.19-1.99-1.98-4.77 0.9-10.5 1.41-16.66 1.41z",
        fill: "none"
      })
    ),
    _react2.default.createElement("path", {
      d: "m29 44v4.91c5 3.77 13.1 5.87 20.5 5.87s13.5-2.1 20.5-5.87v-4.91h-41z",
      clipPath: "url(#a)",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d:
        "m49.34 58.72c-4.62 0-8.64 2.52-10.79 6.25 2.79 1.52 6.59 2.46 10.79 2.46s8-0.94 10.79-2.46c-2.15-3.73-6.18-6.25-10.79-6.25z",
      clipPath: "url(#a)",
      fill: "#FF4F4F"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 45.84,
        cy: 41.89,
        rx: 1.63,
        ry: 2.61
      }),
      _react2.default.createElement("ellipse", {
        cx: 52.84,
        cy: 41.89,
        rx: 1.63,
        ry: 2.61
      })
    )
  );
}

exports.default = Monkey;