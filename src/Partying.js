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

function Partying(props) {
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
        id: "h",
        x1: 64,
        x2: 64,
        y1: 28.991,
        y2: 110.68,
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
        "m64 122c-25.94 0-53.85-16.24-53.85-51.89s27.92-51.89 53.85-51.9c14.38 0 27.69 4.76 37.48 13.4 10.71 9.46 16.38 22.77 16.38 38.49 0 15.66-5.66 28.94-16.38 38.42-9.82 8.7-23.13 13.48-37.48 13.48z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 20.21c13.89 0 26.73 4.58 36.15 12.9 10.27 9.06 15.7 21.86 15.7 37 0 15.07-5.43 27.84-15.7 36.93-9.45 8.35-22.29 12.96-36.15 12.96-13.93 0-26.77-4.54-36.16-12.8-10.27-9.03-15.69-21.85-15.69-37.1 0-15.31 5.43-28.17 15.69-37.17 9.36-8.2 22.2-12.72 36.16-12.72m0-4c-29 0-55.85 18.62-55.85 53.89 0 35.08 26.85 53.9 55.85 53.9s55.85-19.29 55.85-53.89c0-34.8-26.85-53.9-55.85-53.9z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 35.994,
        cy: 68.577,
        r: 19.444,
        gradientTransform: "matrix(.9791 0 0 .877 -1.4908 11.44)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0,
        offset: 0.9
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 33.75,
      cy: 71.58,
      rx: 17.5,
      ry: 16.5,
      fill: "url(#g)",
      opacity: 0.8
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 97.787,
        cy: 68.577,
        r: 19.444,
        gradientTransform: "matrix(.9791 0 0 .877 -1.4908 11.44)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED7770",
        stopOpacity: 0,
        offset: 0.9
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 94.25,
      cy: 71.58,
      rx: 17.5,
      ry: 16.5,
      fill: "url(#f)",
      opacity: 0.8
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#242424"
      },
      _react2.default.createElement("path", {
        d:
          "m49.56 65.38s-0.05-0.07-0.16-0.2c-0.1-0.13-0.24-0.31-0.42-0.54-0.15-0.16-0.33-0.35-0.54-0.57-0.21-0.24-0.47-0.49-0.73-0.75-0.27-0.25-0.55-0.51-0.84-0.72-0.28-0.23-0.59-0.4-0.84-0.54-0.26-0.16-0.5-0.2-0.65-0.25-0.08-0.03-0.15-0.03-0.21-0.04-0.03 0.01-0.06-0.01-0.09 0l-0.04 0.01h-0.02-0.01c0.12 0-0.27 0.01 0.27-0.01l-0.55 0.02c-0.14 0-0.05 0.01-0.04 0.01 0.03 0 0.05 0 0.07-0.01 0.08-0.03 0 0-0.02 0-0.03 0-0.07 0.01-0.11 0.03-0.16 0.05-0.4 0.09-0.65 0.25-0.25 0.14-0.56 0.31-0.84 0.54-0.28 0.22-0.57 0.47-0.84 0.72-0.52 0.51-0.98 1.02-1.3 1.39-0.33 0.38-0.51 0.6-0.51 0.6l-0.23 0.27c-1.37 1.6-3.89 1.87-5.62 0.61-1.18-0.86-1.69-2.2-1.47-3.48 0 0 0.07-0.41 0.27-1.12 0.21-0.71 0.56-1.72 1.25-2.91 0.69-1.18 1.69-2.57 3.38-3.84 0.83-0.62 1.84-1.24 3.04-1.66 0.29-0.11 0.6-0.21 0.92-0.29 0.33-0.08 0.59-0.17 1.04-0.23l0.62-0.09c0.19-0.02 0.47-0.05 0.51-0.05l0.55-0.04 0.31-0.01h0.03 0.06l0.13 0.01 0.26 0.01 0.51 0.03c0.34 0.03 0.67 0.09 1 0.14 0.65 0.12 1.3 0.29 1.89 0.51 1.2 0.42 2.21 1.03 3.04 1.66 1.69 1.27 2.69 2.66 3.38 3.84 0.35 0.59 0.61 1.15 0.8 1.64 0.21 0.47 0.36 0.97 0.48 1.34 0.11 0.36 0.11 0.55 0.16 0.72 0.03 0.16 0.04 0.25 0.04 0.25 0.37 2.02-1.12 3.93-3.31 4.26-1.59 0.24-3.1-0.39-3.97-1.51z"
      }),
      _react2.default.createElement("path", {
        d:
          "m87.06 65.38s-0.05-0.07-0.16-0.2c-0.1-0.13-0.24-0.31-0.42-0.54-0.15-0.16-0.33-0.35-0.54-0.57-0.21-0.24-0.47-0.49-0.73-0.75-0.27-0.25-0.55-0.51-0.84-0.72-0.28-0.23-0.59-0.4-0.84-0.54-0.26-0.16-0.5-0.2-0.65-0.25-0.08-0.03-0.15-0.03-0.21-0.04-0.03 0.01-0.06-0.01-0.09 0l-0.04 0.01h-0.02-0.01-0.01c0.12 0-0.27 0.01 0.27-0.01l-0.55 0.02c-0.14 0-0.05 0.01-0.04 0.01 0.03 0 0.05 0 0.07-0.01 0.08-0.03 0 0-0.02 0-0.03 0-0.07 0.01-0.11 0.03-0.16 0.05-0.4 0.09-0.65 0.25-0.25 0.14-0.56 0.31-0.84 0.54-0.28 0.22-0.57 0.47-0.84 0.72-0.52 0.51-0.98 1.02-1.3 1.39-0.33 0.38-0.51 0.6-0.51 0.6l-0.23 0.27c-1.37 1.6-3.89 1.87-5.62 0.61-1.18-0.86-1.69-2.2-1.47-3.48 0 0 0.07-0.41 0.27-1.12 0.21-0.71 0.56-1.72 1.25-2.91 0.69-1.18 1.69-2.57 3.38-3.84 0.83-0.62 1.84-1.24 3.04-1.66 0.29-0.11 0.6-0.21 0.92-0.29 0.33-0.08 0.59-0.17 1.04-0.23l0.62-0.09c0.19-0.02 0.47-0.05 0.51-0.05l0.55-0.04 0.31-0.01h0.03 0.06l0.13 0.01 0.26 0.01 0.51 0.03c0.34 0.03 0.67 0.09 1 0.14 0.65 0.12 1.3 0.29 1.89 0.51 1.2 0.42 2.21 1.03 3.04 1.66 1.69 1.27 2.69 2.66 3.38 3.84 0.35 0.59 0.61 1.15 0.8 1.64 0.21 0.47 0.36 0.97 0.48 1.34 0.11 0.36 0.11 0.55 0.16 0.72 0.03 0.16 0.04 0.25 0.04 0.25 0.37 2.02-1.12 3.93-3.31 4.26-1.59 0.24-3.1-0.39-3.96-1.51z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.06 52.88c-0.22-0.03-5.56-0.78-14.66-7.79-8.98-6.91-10.84-11.54-11.02-12.04l-0.58-1.59 39-21.99-10.98 43.64-1.76-0.23z",
      fill: "#FF4545"
    }),
    _react2.default.createElement("path", {
      d:
        "m114.72 13.5-9.41 37.4s-4.92-0.63-13.7-7.39-10.36-11.14-10.36-11.14l33.47-18.87m6.15-8.06-8.12 4.58-33.46 18.86-2.95 1.66 1.15 3.18c0.33 0.91 2.45 5.83 11.68 12.94 9.36 7.21 15.01 8.11 15.63 8.19l3.52 0.45 0.87-3.45 9.41-37.4 2.27-9.01z",
      fill: "#C93737"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m114.72 13.5-33.47 18.87s1.59 4.38 10.36 11.14 13.7 7.39 13.7 7.39l9.41-37.4z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#d)"
      },
      _react2.default.createElement("rect", {
        transform: "matrix(.1415 -.9899 .9899 .1415 66.925 119.26)",
        x: 97.49,
        y: -2.93,
        width: 9.44,
        height: 47.94,
        fill: "#ff0"
      }),
      _react2.default.createElement("path", {
        d:
          "m80.85 15.24 43.5 6.22-0.77 5.39-43.5-6.22 0.77-5.39m-3.39-4.53-0.57 3.96-0.77 5.39-0.57 3.96 3.96 0.57 43.5 6.22 3.96 0.57 0.57-3.96 0.77-5.39 0.57-3.96-3.96-0.57-43.5-6.22-3.96-0.57z",
        fill: "#C93737"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.1418 -.9899 .9899 .1418 56.2 127.43)",
        x: 96.87,
        y: 7.33,
        width: 9.44,
        height: 47.94,
        fill: "#ff0"
      }),
      _react2.default.createElement("path", {
        d:
          "m80.23 25.5 43.5 6.22-0.77 5.39-43.5-6.22 0.77-5.39m-3.4-4.53-0.57 3.96-0.77 5.39-0.57 3.96 3.96 0.57 43.5 6.22 3.96 0.57 0.57-3.96 0.77-5.39 0.57-3.96-3.96-0.57-43.5-6.22-3.96-0.57z",
        fill: "#C93737"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.1415 -.9899 .9899 .1415 42.936 134.71)",
        x: 94.41,
        y: 18.63,
        width: 9.44,
        height: 47.94,
        fill: "#ff0"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.77 36.8 43.5 6.22-0.77 5.39-43.5-6.22 0.77-5.39m-3.4-4.53-0.57 3.96-0.77 5.39-0.57 3.96 3.96 0.57 43.5 6.22 3.96 0.57 0.57-3.96 0.77-5.39 0.57-3.96-3.96-0.57-43.5-6.22-3.96-0.57z",
        fill: "#C93737"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.72 13.5-33.47 18.87s1.59 4.38 10.36 11.14 13.7 7.39 13.7 7.39l9.41-37.4z",
      fill: "#FF4545"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m114.72 13.5-33.47 18.87s1.59 4.38 10.36 11.14 13.7 7.39 13.7 7.39l9.41-37.4z"
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
        fill: "#FF9C9C"
      },
      _react2.default.createElement("rect", {
        transform: "matrix(.9899 .1416 -.1416 .9899 4.0104 -14.263)",
        x: 80.24,
        y: 18.32,
        width: 43.94,
        height: 5.44
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9899 .1416 -.1416 .9899 5.4573 -14.071)",
        x: 79.62,
        y: 28.58,
        width: 43.94,
        height: 5.44
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9899 .1416 -.1416 .9899 7.0323 -13.609)",
        x: 77.16,
        y: 39.88,
        width: 43.94,
        height: 5.44
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 24,
      cy: 15,
      rx: 7,
      ry: 5,
      fill: "#FF00A2"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7071 -.7071 .7071 .7071 -3.4776 42.494)",
      cx: 49.56,
      cy: 25.44,
      rx: 4.16,
      ry: 5.5,
      fill: "#FD3B3B"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7908 -.612 .612 .7908 4.0562 48.192)",
      cx: 72.53,
      cy: 18.16,
      rx: 8.44,
      ry: 3.87,
      fill: "#0ef"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.866 -.5 .5 .866 -37.797 22.275)",
      cx: 22.67,
      cy: 81.67,
      rx: 2.9,
      ry: 6.5,
      fill: "#0048FF"
    }),
    _react2.default.createElement("ellipse", {
      cx: 96.5,
      cy: 110.5,
      rx: 3.5,
      ry: 5.5,
      fill: "#F63BBE"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8177 -.5756 .5756 .8177 -11.852 76.822)",
      cx: 115.38,
      cy: 57.12,
      rx: 6.5,
      ry: 2,
      fill: "#0c0"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.8361 -.5486 .5486 .8361 -60.502 29.575)",
      cx: 19.24,
      cy: 116.04,
      rx: 2.5,
      ry: 6,
      fill: "#0048FF"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9975 -.0708 .0708 .9975 -6.9722 1.3106)",
      cx: 15,
      cy: 99,
      rx: 6,
      ry: 2.5,
      fill: "#7ACDED"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9978 -.0664 .0664 .9978 -5.7052 1.7861)",
      cx: 24,
      cy: 86.67,
      rx: 7.19,
      ry: 1.72,
      fill: "#FF82B2"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.38 90.25 0.38 5.12 10.49-0.11c-0.03-1.5-0.15-3.02-0.21-4.62-5.91-0.2-10.66-0.39-10.66-0.39z",
      fill: "#7F0099"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 82.033,
        x2: 119.38,
        y1: 82.759,
        y2: 82.759,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#004054",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#45A4FF",
        offset: 0.9935
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118.89 78.22c-0.88-2.95-2.85-5.37-5.55-6.83-4.64-2.51-10.44-0.76-12.94 3.9-2.1 3.9-0.63 8.79 3.26 10.9 1.59 0.86 3.4 1.09 5.11 0.67 1.8-0.45 3.27-1.59 4.13-3.2 0.91-1.69 0.84-4.07-0.18-5.94-0.89-1.63-2.41-2.65-4.18-2.79-1.03-0.08-1.94 0.69-2.02 1.73s0.69 1.94 1.72 2.02c0.19 0.01 0.76 0.06 1.18 0.84 0.43 0.79 0.43 1.85 0.17 2.35-0.46 0.86-1.2 1.2-1.74 1.33-0.78 0.19-1.67 0.08-2.42-0.33-1-0.54-1.74-1.44-2.06-2.54-0.33-1.09-0.21-2.25 0.33-3.26 0.74-1.37 1.96-2.37 3.44-2.82s3.05-0.29 4.42 0.45c1.82 0.98 3.14 2.61 3.74 4.6 0.59 1.98 0.38 4.08-0.6 5.9-1.95 3.64-5.6 5.97-10.96 6.04-3.11 0.04-13.52-0.3-21.7-0.59 0.06 1.6 0.18 3.12 0.21 4.62l21.28-0.22c6.32 0 11.5-2.51 14.48-8.07 1.44-2.7 1.76-5.81 0.88-8.76z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.79 81.83h-0.02 0.16 0.32l0.64 0.01c0.42 0.02 0.85 0.04 1.28 0.09 0.86 0.09 1.72 0.23 2.62 0.5 0.9 0.26 1.83 0.61 2.76 1.26 0.46 0.28 0.92 0.72 1.33 1.15 0.4 0.49 0.77 0.99 1.01 1.59 0.51 1.17 0.69 2.31 0.47 3.64-0.2 1.33-1.08 2.65-2.04 3.35-0.96 0.73-1.93 1.08-2.83 1.32-0.45 0.12-0.9 0.2-1.34 0.26-0.46 0.06-0.83 0.09-1.4 0.1l0.09-4.63c0.65 0.04 1.06 0.11 1.58 0.22 0.49 0.11 0.98 0.25 1.48 0.44 0.98 0.38 2 0.96 2.86 1.87 0.87 0.89 1.5 2.15 1.69 3.35 0.08 0.31 0.09 0.59 0.11 0.89 0.01 0.31 0.06 0.55 0.01 0.91-0.04 0.35-0.08 0.69-0.15 1.04-0.06 0.34-0.22 0.69-0.36 1.02-0.59 1.33-1.66 2.35-2.64 2.91-0.99 0.6-1.97 0.98-2.9 1.23-0.94 0.27-1.85 0.43-2.75 0.54-0.93 0.11-1.74 0.17-2.78 0.17-1.66-0.01-2.99-1.36-2.98-3.02s1.36-2.99 3.02-2.98c0.06 0 0.13 0 0.19 0.01l0.08 0.01c1.19 0.09 2.71 0.04 3.85-0.2 1.22-0.21 2.05-0.75 2.09-0.9 0-0.03 0.06-0.03 0.06-0.08s0.01-0.09 0.04-0.13c0.02-0.11 0.04-0.41 0.02-0.55-0.02-0.36-0.11-0.59-0.3-0.86-0.2-0.26-0.55-0.54-1.02-0.77-0.23-0.11-0.49-0.21-0.77-0.29-0.25-0.08-0.61-0.15-0.74-0.18l-0.09-0.02c-1.27-0.27-2.07-1.52-1.8-2.78 0.21-0.99 1.03-1.7 1.98-1.83 0.16-0.02 0.5-0.07 0.75-0.13 0.27-0.06 0.53-0.13 0.77-0.21 0.48-0.16 0.86-0.39 1.02-0.56 0.16-0.19 0.09-0.18 0.09-0.27 0.02-0.02-0.04-0.17-0.04-0.27-0.08-0.09-0.06-0.24-0.14-0.28-0.08-0.15-0.22-0.25-0.51-0.41-0.27-0.16-0.71-0.3-1.2-0.39-0.49-0.1-1.05-0.15-1.63-0.17-0.29-0.01-0.59 0-0.88 0.01l-0.44 0.03-0.33 0.03-0.29 0.02c-1.66 0-3-1.34-3-3 0-1.72 1.34-3.06 3-3.06z",
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: 120.75,
      cy: 6.5,
      r: 4.78,
      fill: "#C93737"
    })
  );
}

exports.default = Partying;
