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

function HaircutWoman(props) {
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
        id: "h",
        x: 3,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#h"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 54.428,
        x2: 103.99,
        y1: 43.694,
        y2: 43.694,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.1779
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.7551
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m54.43 47.28 38.43 0.24c2.52 0.02 4.73-1.31 5.97-3.31l5.13 0.03 0.03-4.11-4.11-0.03-37.94-0.24c-4.12-0.02-7.49 3.3-7.51 7.42z",
      clipPath: "url(#b)",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)",
        fill: "#DD5322"
      },
      _react2.default.createElement("rect", {
        transform: "matrix(.0063093 -1 1 .0063093 59.103 143.82)",
        x: 99.86,
        y: 40.12,
        width: 4.11,
        height: 4.11
      }),
      _react2.default.createElement("path", {
        d:
          "m112.31 32.32h0.28c2.72 0 5.28 1.05 7.2 2.97 1.93 1.92 2.99 4.47 2.99 7.19s-1.05 5.28-2.97 7.2-4.45 2.97-7.19 2.99c-2.72 0-5.28-1.05-7.2-2.97-1.93-1.92-2.99-4.47-2.99-7.2 0-2.72 1.05-5.28 2.97-7.2 1.85-1.85 4.3-2.91 6.91-2.98zm0.46 15.91c1.47-0.04 2.85-0.64 3.9-1.68 1.08-1.09 1.68-2.53 1.67-4.06 0-1.53-0.6-2.97-1.69-4.06-1.09-1.08-2.53-1.68-4.06-1.67-1.56-0.02-2.97 0.6-4.06 1.69-1.08 1.09-1.68 2.53-1.67 4.06 0 1.53 0.6 2.97 1.69 4.06 1.09 1.08 2.53 1.68 4.06 1.67 0.06 0 0.11-0.01 0.16-0.01z"
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
          "m112.61 32.32v1c2.45 0 4.75 0.95 6.48 2.68 1.74 1.73 2.7 4.04 2.7 6.49s-0.95 4.76-2.68 6.5c-1.72 1.72-4.03 2.68-6.5 2.7-2.45 0-4.75-0.95-6.48-2.68-1.35-1.35-2.24-3.05-2.56-4.93-0.08-0.48-0.49-0.83-0.98-0.83l-2.73-0.02-1.02-0.01h-0.01c-0.35 0-0.67 0.18-0.85 0.47-1.1 1.78-3 2.84-5.11 2.84l-37.35-0.24c0.5-3.07 3.18-5.42 6.42-5.42l37.94 0.24 2.84 0.02h0.01c0.46 0 0.87-0.32 0.97-0.77 0.39-1.64 1.23-3.15 2.42-4.34 1.67-1.67 3.88-2.63 6.24-2.7h0.25v-1m0.03 16.92h0.16c1.73-0.05 3.35-0.75 4.58-1.98 1.27-1.28 1.97-2.97 1.97-4.77s-0.71-3.49-1.98-4.76l-0.03-0.03c-1.27-1.25-2.94-1.94-4.72-1.94h-0.09c-1.75 0-3.42 0.7-4.69 1.98s-1.97 2.97-1.97 4.77 0.71 3.49 1.98 4.76 2.96 1.97 4.75 1.97h0.04m-0.03-16.92h-0.02-0.28c-2.62 0.07-5.06 1.13-6.92 2.99-1.34 1.35-2.25 3.01-2.68 4.81l-2.84-0.02-37.94-0.24h-0.05c-4.1 0-7.44 3.31-7.46 7.42l38.43 0.24h0.04c2.5 0 4.7-1.33 5.92-3.31l1.02 0.01 2.73 0.02c0.35 2.06 1.32 3.97 2.84 5.47 1.92 1.92 4.47 2.97 7.19 2.97h0.02c2.74-0.02 5.27-1.07 7.19-2.99 1.92-1.93 2.98-4.48 2.97-7.2 0-2.72-1.07-5.27-2.99-7.19-1.91-1.93-4.46-2.98-7.17-2.98zm-0.01 15.92c-1.53 0-2.97-0.59-4.05-1.67-1.09-1.08-1.68-2.52-1.69-4.06 0-1.53 0.59-2.97 1.67-4.06 1.07-1.07 2.45-1.69 3.98-1.69h0.07 0.01c1.53 0 2.96 0.59 4.05 1.67s1.68 2.52 1.69 4.06c0 1.53-0.59 2.97-1.67 4.06-1.05 1.05-2.42 1.64-3.9 1.68h-0.13-0.03c0.01 0.01 0.01 0.01 0 0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "f",
          d:
            "m95.07 30.8 0.01 5.13c-2 1.23-3.35 3.43-3.34 5.95l0.06 38.43c4.12-0.01 7.46-3.35 7.45-7.47l-0.06-37.94-0.01-4.11-4.11 0.01z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "a"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#f"
        })
      ),
      _react2.default.createElement("polygon", {
        points: "101.06 32.57 101.2 37.73 88.77 38.08 88.76 37.48 97.01 28.74",
        clipPath: "url(#a)",
        fill: "#ABABAB"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.0465 2.6993)",
        x: 88.78,
        y: 37.9,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#ABABAB"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.0738 2.7005)",
        x: 88.81,
        y: 38.87,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#ACACAC"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.101 2.7016)",
        x: 88.84,
        y: 39.83,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#ADADAD"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.1282 2.7028)",
        x: 88.87,
        y: 40.8,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#AEAEAE"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.1555 2.7039)",
        x: 88.89,
        y: 41.76,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#AFAFAF"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.1827 2.7051)",
        x: 88.92,
        y: 42.72,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B0B0B0"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.2099 2.7063)",
        x: 88.95,
        y: 43.69,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B1B1B1"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.2371 2.7074)",
        x: 88.97,
        y: 44.65,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B2B2B2"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.2644 2.7086)",
        x: 89,
        y: 45.62,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B3B3B3"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.2916 2.7097)",
        x: 89.03,
        y: 46.58,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B4B4B4"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.3188 2.7109)",
        x: 89.06,
        y: 47.55,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B5B5B5"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.3461 2.712)",
        x: 89.08,
        y: 48.51,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B6B6B6"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.3733 2.7132)",
        x: 89.11,
        y: 49.47,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B7B7B7"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.4005 2.7143)",
        x: 89.14,
        y: 50.44,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B8B8B8"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.4278 2.7155)",
        x: 89.17,
        y: 51.4,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#B9B9B9"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.455 2.7167)",
        x: 89.19,
        y: 52.37,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#BABABA"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.4822 2.7178)",
        x: 89.22,
        y: 53.33,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#BCBCBC"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.5095 2.719)",
        x: 89.25,
        y: 54.3,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#BDBDBD"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.5367 2.7201)",
        x: 89.27,
        y: 55.26,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#BEBEBE"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.5639 2.7213)",
        x: 89.3,
        y: 56.22,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#BFBFBF"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.5912 2.7224)",
        x: 89.33,
        y: 57.19,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C0C0C0"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.6184 2.7236)",
        x: 89.36,
        y: 58.15,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C1C1C1"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.6456 2.7247)",
        x: 89.38,
        y: 59.12,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C2C2C2"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.6729 2.7259)",
        x: 89.41,
        y: 60.08,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C3C3C3"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.7001 2.727)",
        x: 89.44,
        y: 61.05,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C4C4C4"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.7273 2.7282)",
        x: 89.47,
        y: 62.01,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C5C5C5"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.7546 2.7294)",
        x: 89.49,
        y: 62.97,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C6C6C6"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.7818 2.7305)",
        x: 89.52,
        y: 63.94,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C7C7C7"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.809 2.7317)",
        x: 89.55,
        y: 64.9,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C8C8C8"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.8363 2.7328)",
        x: 89.57,
        y: 65.87,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#C9C9C9"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.8635 2.734)",
        x: 89.6,
        y: 66.83,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#CACACA"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(.9996 -.0283 .0283 .9996 -1.8907 2.7351)",
        x: 89.63,
        y: 67.8,
        width: 12.44,
        height: 0.96,
        clipPath: "url(#a)",
        fill: "#CBCBCB"
      }),
      _react2.default.createElement("polygon", {
        points: "102.08 68.58 102.22 73.82 94.06 82.46 89.92 78.54 89.64 68.94",
        clipPath: "url(#a)",
        fill: "#CBCBCB"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(1 -.0015777 .0015777 1 -.0517 .1533)",
        x: 95.07,
        y: 30.8,
        width: 4.11,
        height: 4.11,
        fill: "#DD5322"
      }),
      _react2.default.createElement("path", {
        d:
          "m104.1 15.04c0.07 0.06 0.13 0.13 0.2 0.19 1.93 1.92 2.99 4.47 2.99 7.19s-1.05 5.28-2.97 7.2c-1.92 1.93-4.48 2.99-7.2 2.99s-5.25-1.04-7.2-2.97c-1.93-1.92-2.99-4.47-2.99-7.19s1.05-5.28 2.97-7.2c1.92-1.93 4.47-2.99 7.19-2.99 2.63 0 5.11 0.98 7.01 2.78zm-10.93 11.58c1.07 1.01 2.47 1.57 3.95 1.56 1.53 0 2.97-0.6 4.05-1.69s1.68-2.53 1.67-4.06c0-1.53-0.6-2.97-1.69-4.05-1.09-1.12-2.53-1.68-4.06-1.68s-2.97 0.6-4.05 1.69-1.68 2.53-1.68 4.06 0.6 2.97 1.69 4.05c0.05 0.04 0.09 0.08 0.12 0.12z",
        fill: "#DD5322"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 43.134,
          x2: 43.134,
          y1: 97.5,
          y2: 130.5,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#00BFA5",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00B29A",
          offset: 0.7047
        }),
        _react2.default.createElement("stop", {
          stopColor: "#00AB94",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m-7.37 130.5v-9.44c0-16.24 25.36-23.53 50.5-23.56h0.13c25.03 0 50.37 8.09 50.37 23.56v9.44h-101z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m43.27 99c12.9 0 25.42 2.19 34.36 6 6.62 2.83 14.51 7.91 14.51 16.05v7.95h-98v-7.94c0-15.2 24.61-22.03 49-22.06h0.13m0-3h-0.13c-25.49 0.03-52 7.28-52 25.06v10.94h104v-10.94c-0.01-16.76-26.27-25.06-51.87-25.06z",
        fill: "#009984"
      }),
      _react2.default.createElement("path", {
        d:
          "m42.31 107.23c-4 0-7.26-3.22-7.26-7.17v-8.98h16.16v8.98c0 3.96-3.25 7.17-7.26 7.17h-1.64z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m50.22 92.08v7.98c0 3.4-2.81 6.17-6.26 6.17h-1.65c-3.45 0-6.26-2.77-6.26-6.17v-7.98h14.17m2-2h-18.16v9.98c0 4.51 3.7 8.17 8.26 8.17h1.65c4.56 0 8.26-3.66 8.26-8.17v-9.98h-0.01z",
        fill: "#D18100"
      }),
      _react2.default.createElement("path", {
        d:
          "m15.81 72.26c-5.36 0-9.71-4.67-9.71-10.41s4.36-10.41 9.71-10.41h54.65c5.36 0 9.71 4.67 9.71 10.41s-4.36 10.41-9.71 10.41h-54.65z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m70.46 52.43c4.8 0 8.71 4.22 8.71 9.41s-3.91 9.41-8.71 9.41h-54.65c-4.8 0-8.71-4.22-8.71-9.41s3.91-9.41 8.71-9.41h54.65m0-2h-54.65c-5.89 0-10.71 5.14-10.71 11.41 0 6.28 4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41s-4.82-11.41-10.71-11.41z",
        fill: "#D18100"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 43.134,
          x2: 43.134,
          y1: 94.591,
          y2: 12.825,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FFB300",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFB809",
          offset: 0.102
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFC21A",
          offset: 0.3707
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFC825",
          offset: 0.6592
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFCA28",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m43.13 95.27c-15.66 0-32.52-12.14-32.52-38.81 0-12.38 3.56-23.79 10.02-32.13 6.04-7.8 14.25-12.27 22.5-12.27s16.45 4.47 22.5 12.27c6.46 8.33 10.02 19.75 10.02 32.13 0 12.09-3.51 22.19-10.14 29.21-5.86 6.19-13.8 9.6-22.38 9.6z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d:
          "m43.13 13.07c7.94 0 15.85 4.33 21.71 11.88 6.33 8.16 9.81 19.35 9.81 31.52 0 11.83-3.41 21.7-9.87 28.52-5.67 5.99-13.36 9.29-21.65 9.29s-15.98-3.3-21.65-9.29c-6.46-6.82-9.87-16.69-9.87-28.52 0-12.16 3.49-23.35 9.81-31.52 5.86-7.55 13.77-11.88 21.71-11.88m0-2c-17.4 0-33.52 18.61-33.52 45.39 0 26.64 16.61 39.81 33.52 39.81s33.52-13.17 33.52-39.81c0-26.78-16.11-45.39-33.52-45.39z",
        fill: "#ED9E00"
      }),
      _react2.default.createElement("path", {
        d:
          "m19.12 50.73s0.13-0.19 0.38-0.51c0.07-0.08 0.12-0.16 0.22-0.26 0.11-0.11 0.23-0.22 0.37-0.34s0.28-0.24 0.43-0.38c0.15-0.13 0.31-0.23 0.48-0.35 0.17-0.11 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.47-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.07 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.33 0.22 0.47 0.34s0.27 0.24 0.4 0.35c0.12 0.11 0.24 0.21 0.34 0.31s0.18 0.21 0.26 0.29c0.31 0.36 0.46 0.57 0.46 0.57 0.51 0.7 0.35 1.69-0.36 2.19-0.43 0.31-0.96 0.37-1.43 0.21l-0.29-0.1s-0.19-0.07-0.49-0.2c-0.08-0.03-0.15-0.07-0.25-0.11-0.1-0.03-0.19-0.07-0.3-0.11-0.21-0.08-0.44-0.17-0.7-0.25-0.13-0.04-0.26-0.09-0.4-0.13-0.14-0.03-0.28-0.07-0.43-0.11-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.07-0.43 0.11s-0.27 0.09-0.4 0.13-0.25 0.08-0.37 0.11c-0.1 0.04-0.2 0.07-0.29 0.1s-0.18 0.06-0.27 0.09c-0.1 0.04-0.2 0.1-0.29 0.14-0.36 0.18-0.57 0.27-0.57 0.27-0.83 0.34-1.77-0.05-2.11-0.87-0.24-0.48-0.16-1.06 0.13-1.49z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement("ellipse", {
        cx: 26.7,
        cy: 58.81,
        rx: 4.93,
        ry: 5.1,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m65.18 53.13s-0.22-0.09-0.57-0.27c-0.09-0.04-0.19-0.1-0.29-0.14-0.09-0.02-0.18-0.06-0.27-0.09s-0.19-0.07-0.29-0.1c-0.12-0.04-0.24-0.07-0.37-0.11s-0.26-0.09-0.4-0.13-0.28-0.07-0.43-0.11c-0.07-0.02-0.15-0.04-0.22-0.06-0.08-0.01-0.15-0.03-0.23-0.04-0.16-0.03-0.31-0.07-0.47-0.1-0.33-0.04-0.66-0.11-1-0.12-0.34-0.04-0.69-0.03-1.03-0.05-0.35 0.02-0.7 0.01-1.03 0.05-0.34 0.02-0.67 0.09-1 0.12-0.16 0.03-0.31 0.07-0.47 0.1-0.08 0.01-0.16 0.03-0.23 0.04-0.07 0.02-0.15 0.04-0.22 0.06-0.15 0.04-0.29 0.08-0.43 0.11-0.14 0.04-0.27 0.09-0.4 0.13-0.26 0.07-0.49 0.16-0.7 0.25-0.11 0.04-0.2 0.08-0.3 0.11-0.09 0.04-0.17 0.08-0.25 0.11-0.3 0.13-0.49 0.2-0.49 0.2l-0.28 0.1c-0.82 0.29-1.72-0.15-2-0.97-0.17-0.5-0.08-1.03 0.21-1.44 0 0 0.16-0.22 0.46-0.57 0.08-0.09 0.16-0.19 0.26-0.29s0.22-0.2 0.34-0.31 0.26-0.23 0.4-0.35 0.31-0.22 0.47-0.34c0.17-0.12 0.34-0.24 0.53-0.35 0.19-0.1 0.4-0.21 0.6-0.32 0.21-0.12 0.43-0.21 0.66-0.3s0.46-0.18 0.71-0.27c0.49-0.14 1-0.29 1.54-0.36 0.53-0.1 1.08-0.11 1.63-0.14 0.55 0.03 1.09 0.03 1.63 0.14 0.53 0.06 1.05 0.22 1.54 0.36 0.24 0.08 0.48 0.17 0.71 0.27 0.23 0.09 0.45 0.18 0.66 0.3 0.21 0.11 0.41 0.22 0.6 0.32 0.19 0.11 0.36 0.24 0.53 0.35 0.17 0.12 0.32 0.22 0.48 0.35 0.15 0.13 0.3 0.26 0.43 0.38s0.26 0.23 0.37 0.34c0.09 0.1 0.15 0.18 0.22 0.26 0.25 0.31 0.38 0.51 0.38 0.51 0.5 0.74 0.31 1.74-0.43 2.25-0.49 0.28-1.07 0.32-1.56 0.12z",
        fill: "#6D4C41"
      }),
      _react2.default.createElement("ellipse", {
        cx: 59.57,
        cy: 58.81,
        rx: 4.93,
        ry: 5.1,
        fill: "#404040"
      }),
      _react2.default.createElement("path", {
        d:
          "m46.99 68.06c-0.11-0.04-0.21-0.07-0.32-0.08h-7.07c-0.11 0.01-0.22 0.04-0.32 0.08-0.64 0.26-0.99 0.92-0.69 1.63s1.71 2.69 4.55 2.69 4.25-1.99 4.55-2.69c0.3-0.71-0.06-1.37-0.7-1.63z",
        fill: "#E59600"
      }),
      _react2.default.createElement("path", {
        d:
          "m51.55 76.14c-3.19 1.89-13.63 1.89-16.81 0-1.83-1.09-3.7 0.58-2.94 2.24 0.75 1.63 6.45 5.42 11.37 5.42s10.55-3.79 11.3-5.42c0.76-1.66-1.09-3.33-2.92-2.24z",
        fill: "#795548"
      }),
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "c",
          d:
            "m43.13 4.03h-0.02s-0.01 0-0.02 0c-45.43 0.24-36.12 52.14-36.12 52.14s5.1 8.99 5.1 8.81c-0.03-1.41 0.46-6.89 0.46-6.89l-2.68-2.92s3.89-25.44 6.79-24.91c4.45 0.81 26.54 2 26.57 2 7.83 0 14.92-0.36 19.37-1.17 2.9-0.53 9.64 1.7 10.68 4.45 1.33 3.54 3.13 19.71 3.13 19.71l-2.68 2.83s0.49 5.51 0.46 6.89c0 0.18 5.1-8.81 5.1-8.81s9.3-51.89-36.14-52.13z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#c"
        })
      )
    ),
    _react2.default.createElement("rect", {
      x: -2.65,
      y: 2.67,
      width: 102.42,
      height: 93.3,
      clipPath: "url(#b)",
      fill: "none"
    }),
    _react2.default.createElement("rect", {
      x: -16,
      y: 4,
      width: 120,
      height: 120,
      clipPath: "url(#b)",
      fill: "none"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "j",
          cx: -87.087,
          cy: -70.173,
          r: 159.68,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#6D4C41",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#543930",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m85.17 45.67c-3.09-1.17-5.33-6.11-5.46-6.41-1.37-15.17-8.71-35.09-36.71-35.24v-0.02h0.13s-0.13 0-0.13 0v0.02c-45 0.24-36.07 52.14-36.07 52.14s5.13 8.99 5.13 8.81c-0.16-7.25 2.76-20.09 4.81-25.55 1.04-2.76 3.9-4.56 6.8-4.03 4.45 0.81 11.55 1.61 19.38 1.61h0.08s0.06 0.2 0.08 0.2c7.83 0 14.92-0.9 19.37-1.71 2.9-0.53 5.76 1.13 6.79 3.88 2.06 5.47 4.96 18.33 4.8 25.58 0 0.16 3.96-6.79 4.9-8.44l0.06 0.04s4.74-0.23 8.7-3.06c3.5-2.5 6-6.83 6-6.83s-4.01 0.77-8.66-0.99z",
        fill: "url(#j)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m80.67 53.62c2.2-0.83 3.83-1.43 5.42-2.56 0.64-0.45 1.24-0.99 1.8-1.55-1.17-0.21-2.45-0.53-3.78-1.03-1.34-0.51-2.51-1.41-3.49-2.44 0 0-0.22-0.33-0.55-0.84 0.02 3.75-0.25 6.87-0.48 8.81 0.35-0.13 0.71-0.25 1.08-0.39z",
        fill: "none"
      }),
      _react2.default.createElement("path", {
        d:
          "m76.74 39.64c0.02 0.04 0.04 0.1 0.07 0.15 0-0.05-0.01-0.1-0.01-0.15h-0.06z",
        fill: "#3F2720"
      }),
      _react2.default.createElement("path", {
        d:
          "m76.33 54.93 0.1 0.06c0-0.03 0.01-0.05 0.01-0.08-0.07 0.01-0.11 0.02-0.11 0.02z",
        fill: "#3F2720"
      }),
      _react2.default.createElement("path", {
        d:
          "m91.58 46.83c-1.61 0-3.92-0.22-6.42-1.16-3.09-1.17-5.25-6.11-5.38-6.41 0.19 2.09 0.27 4.09 0.28 5.93 0.33 0.51 0.55 0.84 0.55 0.84 0.98 1.03 2.14 1.93 3.49 2.44 1.33 0.5 2.61 0.83 3.78 1.03-0.56 0.56-1.16 1.1-1.8 1.55-1.59 1.14-3.22 1.74-5.42 2.56-0.37 0.14-0.73 0.26-1.08 0.38-0.16 1.38-0.3 2.17-0.3 2.17s-0.08 0.13-0.2 0.36l0.06 0.03s4.74-0.24 8.7-3.06c3.5-2.5 6-6.83 6-6.83s-0.87 0.17-2.26 0.17z",
        fill: "#3F2720"
      }),
      _react2.default.createElement("path", {
        d:
          "m76.4 55.16c-0.02 0.04-2.46 4.58-2.49 4.65 0.2 1.89 0.31 3.65 0.27 5.17 0.08 0 3.96-6.81 4.89-8.45l-2.65-1.54c0 0.05-0.01 0.12-0.02 0.17z",
        fill: "#3F2720"
      }),
      _react2.default.createElement("path", {
        d:
          "m79.79 39.26c-1.38-15.17-8.54-35.09-36.64-35.24v-0.02h-0.02s-0.01 0-0.02 0v0.02c-45.43 0.24-36.12 52.14-36.12 52.14s5 8.82 5.1 8.82c-0.03-1.48 0.07-3.2 0.26-5.03-0.12-0.29-2.46-4.75-2.48-4.79-0.24-1.6-0.93-6.98-0.55-13.56 0.41-7.04 2.17-16.97 8.22-24.24 5.66-6.8 14.27-10.36 25.56-10.36h0.04v0.02 0.01c11.32 0.06 19.93 3.54 25.6 10.35 5.35 6.42 7.41 14.91 8.06 22.26l2.98-0.41c-0.01 0 0 0.02 0.01 0.03z",
        fill: "#3F2720"
      }),
      _react2.default.createElement("path", {
        d:
          "m79.79 39.26c0-0.01-0.01-0.03-0.01-0.03l-2.98 0.41c0 0.05 0.01 0.1 0.01 0.15 0.49 1.11 2.32 3.97 3.26 5.4-0.01-1.85-0.1-3.85-0.28-5.93z",
        fill: "#3F2720"
      }),
      _react2.default.createElement("path", {
        d:
          "m79.58 54c-1.49 0.5-2.78 0.81-3.14 0.9 0 0.03-0.01 0.06-0.01 0.08l2.65 1.54c0.13-0.22 0.2-0.36 0.2-0.36s0.14-0.78 0.3-2.16z",
        fill: "#3F2720"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 95.49,
          x2: 95.49,
          y1: 30.794,
          y2: 79.132,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m95.07 30.8 0.01 5.13c-2 1.23-3.35 3.43-3.34 5.95l0.06 38.43c4.12-0.01 7.46-3.35 7.45-7.47l-0.06-37.94-0.01-4.11-4.11 0.01z",
        fill: "url(#i)"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(1 -.0015777 .0015777 1 -.0517 .1533)",
        x: 95.07,
        y: 30.8,
        width: 4.11,
        height: 4.11,
        fill: "#DD5322"
      }),
      _react2.default.createElement("path", {
        d:
          "m104.1 15.04c0.07 0.06 0.13 0.13 0.2 0.19 1.93 1.92 2.99 4.47 2.99 7.19s-1.05 5.28-2.97 7.2c-1.92 1.93-4.48 2.99-7.2 2.99s-5.25-1.04-7.2-2.97c-1.93-1.92-2.99-4.47-2.99-7.19s1.05-5.28 2.97-7.2c1.92-1.93 4.47-2.99 7.19-2.99 2.63 0 5.11 0.98 7.01 2.78zm-10.93 11.58c1.07 1.01 2.47 1.57 3.95 1.56 1.53 0 2.97-0.6 4.05-1.69s1.68-2.53 1.67-4.06c0-1.53-0.6-2.97-1.69-4.05-1.09-1.12-2.53-1.68-4.06-1.68s-2.97 0.6-4.05 1.69-1.68 2.53-1.68 4.06 0.6 2.97 1.69 4.05c0.05 0.04 0.09 0.08 0.12 0.12z",
        fill: "#DD5322"
      }),
      _react2.default.createElement("circle", {
        cx: 95.55,
        cy: 43.04,
        r: 1.65,
        fill: "#6E6E6E"
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
          "m97.11 12.26v1c2.36 0 4.59 0.89 6.3 2.5l0.18 0.18c1.74 1.73 2.69 4.04 2.7 6.49 0 2.45-0.95 4.76-2.68 6.5-1.28 1.28-2.88 2.15-4.63 2.51-0.47 0.1-0.8 0.51-0.8 0.98v2.49l0.06 37.94c0 1.73-0.67 3.35-1.89 4.57-0.98 0.98-2.22 1.61-3.57 1.82l-0.06-37.36c0-2.09 1.07-4 2.86-5.1 0.3-0.18 0.48-0.51 0.48-0.85v-1.02-2.5c0-0.47-0.34-0.88-0.8-0.98-1.74-0.35-3.34-1.22-4.64-2.49-1.74-1.73-2.69-4.03-2.7-6.49 0-2.45 0.95-4.76 2.68-6.5s4.03-2.69 6.49-2.7l0.02-0.99m0 16.92s0.01 0 0 0c1.81 0 3.5-0.71 4.77-1.98s1.97-2.97 1.97-4.77v-0.04c-0.01-1.79-0.72-3.46-1.97-4.71-1.24-1.28-2.94-1.98-4.78-1.98-1.8 0-3.49 0.71-4.76 1.98s-1.97 2.97-1.97 4.77 0.71 3.49 1.97 4.75l0.14 0.14c1.26 1.19 2.91 1.84 4.63 1.84m0-16.92h-0.01c-2.72 0-5.27 1.07-7.19 2.99-1.92 1.93-2.97 4.49-2.97 7.2 0 2.72 1.07 5.27 2.99 7.19 1.45 1.43 3.22 2.37 5.14 2.76v2.5 1.02c-2 1.23-3.35 3.43-3.34 5.95l0.06 38.43c4.12-0.01 7.46-3.35 7.45-7.47l-0.06-37.94v-2.49c1.94-0.4 3.71-1.35 5.14-2.78 1.92-1.93 2.97-4.49 2.97-7.2 0-2.72-1.07-5.27-2.99-7.19-0.07-0.07-0.13-0.13-0.2-0.19-1.9-1.79-4.37-2.78-6.99-2.78zm0 15.92c-1.48 0-2.87-0.55-3.94-1.56-0.04-0.04-0.08-0.07-0.11-0.11-1.09-1.08-1.68-2.52-1.69-4.05 0-1.53 0.59-2.98 1.68-4.06 1.08-1.09 2.52-1.68 4.05-1.69h0.01c1.53 0 2.97 0.56 4.05 1.68 1.09 1.08 1.68 2.52 1.69 4.05 0 1.53-0.59 2.97-1.67 4.06-1.08 1.08-2.52 1.68-4.07 1.68 0.01 0 0.01 0 0 0z",
        fill: "#424242"
      })
    )
  );
}

exports.default = HaircutWoman;
