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

function Bikini(props) {
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
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "e",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 63.928,
        cy: 116.81,
        r: 36.831,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E91E63",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 0.567
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.36 124.08h-8.74c-1.37 0-2.58-0.89-2.98-2.19-1.6-5.16-3.84-13.64-11.14-20.67-6.82-6.58-19.69-14.39-25.96-15.66-1.89-0.38-2.98-2.37-2.29-4.17v-0.01c0.57-1.51 2.19-2.34 3.74-1.91 6.72 1.84 24.86 6.28 43.01 6.28 18.17 0 36.44-4.46 43.18-6.29 1.55-0.42 3.17 0.41 3.74 1.91 0.68 1.81-0.41 3.8-2.3 4.17-6.39 1.27-19.56 9.12-26.29 15.84-7.15 7.15-9.4 15.37-10.97 20.49-0.41 1.32-1.62 2.21-3 2.21z",
      clipPath: "url(#a)",
      fill: "url(#d)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.1801 -.9836 .9836 .1801 -54.643 112.38)",
      cx: 40.09,
      cy: 88.97,
      rx: 2.7,
      ry: 4,
      clipPath: "url(#a)",
      fill: "#FCE4EC"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.9697 -.2442 .2442 .9697 -19.057 24.202)",
      cx: 88.09,
      cy: 88.97,
      rx: 4,
      ry: 2.7,
      clipPath: "url(#a)",
      fill: "#FCE4EC"
    }),
    _react2.default.createElement("circle", {
      cx: 64.09,
      cy: 109.97,
      r: 4,
      clipPath: "url(#a)",
      fill: "#F8BBD0"
    }),
    _react2.default.createElement("circle", {
      cx: 56.09,
      cy: 95.97,
      r: 4,
      clipPath: "url(#a)",
      fill: "#FCE4EC"
    }),
    _react2.default.createElement("circle", {
      cx: 72.09,
      cy: 95.97,
      r: 4,
      clipPath: "url(#a)",
      fill: "#FCE4EC"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m107.98 81.35c0.46 0 0.89 0.3 1.06 0.75 0.12 0.32 0.09 0.67-0.07 0.97-0.09 0.17-0.32 0.47-0.75 0.55-6.84 1.36-20.37 9.5-27.31 16.44-7.13 7.13-9.59 15.24-11.22 20.61l-0.25 1.07c-0.17 0.54-0.66 1.25-1.08 1.25h-8.74c-0.41 0-0.91-0.71-1.07-1.25-0.12-0.37-0.23-0.89-0.36-1.3-1.66-5.44-4.16-13.74-11.3-20.62-7.25-6.98-20.35-14.88-26.96-16.21-0.44-0.09-0.66-0.4-0.75-0.57s-0.23-0.53-0.06-0.96c0.17-0.44 0.59-0.73 1.05-0.73 0.1 0 0.2 0.01 0.29 0.04 6.99 1.91 25.23 6.35 43.54 6.35 18.32 0 36.67-4.45 43.71-6.36 0.08-0.02 0.17-0.03 0.27-0.03m0-2c-0.27 0-0.53 0.03-0.8 0.11-6.74 1.83-25.02 6.29-43.18 6.29-18.15 0-36.29-4.45-43.01-6.28-0.27-0.07-0.55-0.11-0.82-0.11-1.27 0-2.45 0.78-2.92 2.02v0.01c-0.68 1.8 0.4 3.79 2.29 4.17 6.28 1.27 19.14 9.09 25.96 15.66 7.3 7.04 9.54 15.97 11.14 21.13 0.41 1.31 1.61 2.66 2.98 2.66h8.74c1.38 0 2.59-1.35 2.99-2.67 1.57-5.12 3.82-13.57 10.97-20.72 6.72-6.72 19.9-14.69 26.29-15.96 1.89-0.38 2.99-2.42 2.3-4.23-0.47-1.25-1.66-2.08-2.93-2.08z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m72.53 59.85-0.26 0.05c-5.46 0.97-11.04 0.96-16.49-0.05v-8.23c5.45 1 11.04 1.02 16.49 0.05l0.26-0.05v8.23z",
        fill: "#D81B60"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "c",
          cx: 39.626,
          cy: 24.645,
          r: 45.154,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F06292",
          offset: 0.433
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E91E63",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m58.27 49.84c-6.47-3.47-21.21-12.63-25.78-30.19 1.22-12.24 11.43-24.61 21.69-30.54 3-1.73 0.29-6.39-2.72-4.65-10.18 5.89-19.83 17.05-23.21 28.99-4.76 8.45-13.44 26.23-9.83 38.07 6.46 21.2 30.47 13.91 39.4 9.98 2.3-1.01 3.8-3.26 3.86-5.77 0.07-2.45-1.25-4.73-3.41-5.89z",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "radialGradient",
        {
          id: "b",
          cx: 88.53,
          cy: 24.647,
          r: 45.151,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F06292",
          offset: 0.433
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E91E63",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m99.99 13.84c-3.3-12.11-13.13-23.45-23.46-29.38-3.01-1.73-5.72 2.92-2.72 4.65 10.19 5.85 20.4 18.01 21.8 30.16-4.42 17.81-19.25 27.07-25.73 30.57-2.15 1.16-3.46 3.43-3.4 5.88 0.06 2.51 1.57 4.77 3.87 5.78 8.93 3.93 32.94 11.22 39.39-9.98 3.55-11.66-4.9-29.09-9.75-37.68z",
        fill: "url(#b)"
      }),
      _react2.default.createElement(
        "g",
        {
          fill: "#D81B60"
        },
        _react2.default.createElement("path", {
          d:
            "m46.06 52.95c-0.16 0.93 0.35 1.79 3.64 2.34s8.26-0.35 8.26-0.35-4.41-2.47-7.7-3.02c-3.28-0.55-4.04 0.1-4.2 1.03z"
        }),
        _react2.default.createElement("path", {
          d:
            "m46.18 59.79c0.24 0.91 1.06 1.49 4.28 0.62 3.22-0.86 7.38-3.74 7.38-3.74s-5.04-0.42-8.26 0.44-3.64 1.76-3.4 2.68z"
        }),
        _react2.default.createElement("path", {
          d:
            "m81.94 52.95c0.16 0.93-0.35 1.79-3.64 2.34s-8.26-0.35-8.26-0.35 4.41-2.47 7.7-3.02c3.28-0.55 4.04 0.1 4.2 1.03z"
        }),
        _react2.default.createElement("path", {
          d:
            "m81.82 59.79c-0.24 0.91-1.06 1.49-4.28 0.62-3.22-0.86-7.38-3.74-7.38-3.74s5.04-0.42 8.26 0.44 3.64 1.76 3.4 2.68z"
        })
      ),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9882 -.1531 .1531 .9882 -7.6003 15.434)",
        cx: 96.39,
        cy: 57.05,
        rx: 3.59,
        ry: 2.91,
        fill: "#F48FB1"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9404 -.3402 .3402 .9404 -10.991 31.951)",
        cx: 85.62,
        cy: 47.32,
        rx: 3.59,
        ry: 2.77,
        fill: "#F8BBD0"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3788 -.9255 .9255 .3788 28.993 111.29)",
        cx: 97.4,
        cy: 34.05,
        rx: 3.59,
        ry: 2.6,
        fill: "#FCE4EC"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1869 -.9824 .9824 .1869 40.776 136.89)",
        cx: 103.08,
        cy: 43.81,
        rx: 3.59,
        ry: 3.07,
        fill: "#F8BBD0"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1531 -.9882 .9882 .1531 -30.209 78.853)",
        cx: 30.9,
        cy: 57.05,
        rx: 2.91,
        ry: 3.59,
        fill: "#F48FB1"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3402 -.9404 .9404 .3402 -17.004 70.404)",
        cx: 41.67,
        cy: 47.32,
        rx: 2.77,
        ry: 3.59,
        fill: "#F8BBD0"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9255 -.3788 .3788 .9255 -10.67 13.86)",
        cx: 29.89,
        cy: 34.05,
        rx: 2.6,
        ry: 3.59,
        fill: "#FCE4EC"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9824 -.1869 .1869 .9824 -7.7614 5.2959)",
        cx: 24.21,
        cy: 43.81,
        rx: 3.07,
        ry: 3.59,
        fill: "#F8BBD0"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m52.8-13.92c0.25 0 0.56 0.31 0.65 0.67 0.09 0.34-0.03 0.48-0.28 0.63-10.26 5.94-21.35 18.86-22.66 32.07-0.02 0.24 0 0.47 0.05 0.7 4.26 16.41 16.91 26.16 26.77 31.45 0.71 0.38 1.31 0.96 1.73 1.66 0.33 0.56 0.92 0.93 1.57 0.97 1.17 0.09 2.35 0.13 3.52 0.13 1.12 0 2.25-0.04 3.36-0.12 0.66-0.05 1.25-0.41 1.58-0.98 0.42-0.71 1.02-1.29 1.73-1.67 9.91-5.36 22.6-15.23 26.72-31.85 0.06-0.23 0.07-0.47 0.05-0.71-1.57-13.66-12.91-25.99-22.78-31.65-0.25-0.14-0.37-0.28-0.28-0.61 0.1-0.36 0.41-0.68 0.66-0.68 0.12 0 0.25 0.06 0.34 0.11 10.54 6.04 19.59 17.36 22.53 28.16 0.04 0.16 0.11 0.31 0.19 0.46 4.02 7.12 12.99 24.9 9.58 36.12-2.63 8.64-8.75 13.02-18.18 13.02-7.89 0-15.57-3-18.5-4.29-0.41-0.18-0.81-0.44-1.18-0.77s-0.85-0.51-1.34-0.51c-0.06 0-0.13 0-0.19 0.01-1.43 0.14-2.88 0.21-4.31 0.21-1.46 0-2.94-0.07-4.39-0.22-0.07-0.01-0.13-0.01-0.2-0.01-0.49 0-0.97 0.18-1.34 0.52-0.37 0.33-0.77 0.6-1.18 0.78-2.93 1.29-10.61 4.3-18.5 4.3-9.43 0-15.54-4.38-18.18-13.02-3.46-11.36 5.6-29.33 9.66-36.53 0.08-0.14 0.14-0.29 0.18-0.44 3.06-10.83 11.81-21.75 22.28-27.8 0.09-0.05 0.22-0.11 0.34-0.11m0-2c-0.43 0-0.88 0.12-1.34 0.38-10.18 5.89-19.83 17.05-23.21 28.99-4.76 8.45-13.44 26.23-9.83 38.07 3.41 11.19 11.7 14.44 20.09 14.44 7.51 0 15.09-2.61 19.31-4.46 0.64-0.28 1.21-0.67 1.72-1.12 1.53 0.15 3.06 0.23 4.59 0.23 1.5 0 3.01-0.07 4.5-0.22 0.5 0.45 1.07 0.84 1.71 1.12 4.22 1.86 11.8 4.46 19.3 4.46 8.39 0 16.68-3.25 20.09-14.44 3.55-11.67-4.9-29.09-9.75-37.69-3.29-12.11-13.12-23.45-23.45-29.38-0.46-0.26-0.91-0.38-1.34-0.38-2.37 0-3.93 3.56-1.38 5.03 10.19 5.85 20.4 18.01 21.8 30.16-4.42 17.81-19.25 27.07-25.73 30.57-1.06 0.57-1.92 1.42-2.51 2.42-1.07 0.08-2.15 0.11-3.22 0.11-1.13 0-2.25-0.04-3.37-0.12-0.59-1-1.44-1.83-2.5-2.4-6.47-3.47-21.21-12.63-25.78-30.19 1.21-12.25 11.42-24.62 21.68-30.55 2.54-1.47 0.98-5.03-1.38-5.03z",
          fill: "#424242"
        })
      )
    )
  );
}

exports.default = Bikini;
