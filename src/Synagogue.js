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

function Synagogue(props) {
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
      "pattern",
      {
        id: "a",
        width: 15.83,
        height: 15.5,
        overflow: "visible",
        patternUnits: "userSpaceOnUse",
        viewBox: "0 -15.5 15.83 15.5"
      },
      _react2.default.createElement("rect", {
        y: -15.5,
        width: 15.83,
        height: 15.5,
        fill: "none"
      }),
      _react2.default.createElement("rect", {
        y: -15.5,
        width: 15.83,
        height: 15.5,
        fill: "#49C0D6"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M68,27.64V24c0-2.21-1.79-4-4-4s-4,1.79-4,4v3.64L20,64v60h88V64L68,27.64z",
      fill: "#49C0D6"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "j",
        cx: 63.5,
        cy: 36,
        r: 89.002,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.2986
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9C9C9",
        offset: 0.8054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m61.31 37.04-41.31 37.55v49.41h88v-49.41l-41.31-37.55c-1.52-1.39-3.86-1.39-5.38 0z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 108,
        x2: 87.071,
        y1: 72,
        y2: 72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m68 27.64v-3.64c0-2.21-1.79-4-4-4v104h44v-60l-40-36.36z",
      fill: "url(#i)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 20,
        x2: 43.382,
        y1: 72,
        y2: 72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m60 24v3.64l-40 36.36v60h44v-104c-2.21 0-4 1.79-4 4z",
      fill: "url(#h)",
      opacity: 0.7
    }),
    _react2.default.createElement("circle", {
      cx: 16,
      cy: 24,
      r: 12,
      fill: "#49C0D6"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.11 23.9c0 5.71-4.46 10.02-6.11 10.02-2.11 0-6.11-4.31-6.11-10.02 0-7.27 3.76-10.65 6.11-10.65 3.13 0 6.11 3.43 6.11 10.65z",
      fill: "#3A99AB"
    }),
    _react2.default.createElement("path", {
      d: "m15.03 4.76-1.03 7.12h4l-1.03-7.12c-0.25-1.01-1.69-1.01-1.94 0z",
      fill: "#49C0D6"
    }),
    _react2.default.createElement("circle", {
      cx: 16,
      cy: 11,
      r: 4,
      fill: "#49C0D6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 23c0.55 0 1 0.45 1 1v3.64c0 0.85 0.36 1.65 0.98 2.22l39.02 35.47v55.67h-82v-55.68l39.02-35.47c0.63-0.57 0.98-1.37 0.98-2.22v-3.63c0-0.55 0.45-1 1-1m0-3c-2.21 0-4 1.79-4 4v3.64l-40 36.36v60h88v-60l-40-36.36v-3.64c0-2.21-1.79-4-4-4z",
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
          "M16,8.74c0.19,0.17,0.41,0.3,0.66,0.39C17.46,9.41,18,10.16,18,11c0,0.27-0.05,0.54-0.16,0.79 c-0.22,0.52-0.22,1.11,0.02,1.62c0.23,0.51,0.67,0.9,1.21,1.08C23.21,15.82,26,19.64,26,24c0,5.51-4.49,10-10,10S6,29.51,6,24 c0-4.36,2.79-8.18,6.94-9.52c0.54-0.17,0.98-0.56,1.21-1.08c0.23-0.51,0.24-1.1,0.02-1.62C14.05,11.54,14,11.27,14,11 c0-0.84,0.54-1.59,1.34-1.87C15.59,9.04,15.81,8.91,16,8.74 M16,4c-0.42,0-0.84,0.25-0.97,0.76l-0.36,2.49 C13.12,7.79,12,9.26,12,11c0,0.56,0.12,1.09,0.33,1.58C7.5,14.13,4,18.65,4,24c0,6.63,5.37,12,12,12s12-5.37,12-12 c0-5.35-3.5-9.87-8.33-11.42C19.88,12.09,20,11.56,20,11c0-1.74-1.12-3.21-2.67-3.76l-0.36-2.49C16.84,4.25,16.42,4,16,4L16,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 112,
      cy: 24,
      r: 12,
      fill: "#49C0D6"
    }),
    _react2.default.createElement("path", {
      d:
        "m105.89 23.9c0 5.71 4.46 10.02 6.11 10.02 2.11 0 6.11-4.31 6.11-10.02 0-7.27-3.76-10.65-6.11-10.65-3.13 0-6.11 3.43-6.11 10.65z",
      fill: "#3A99AB"
    }),
    _react2.default.createElement("path", {
      d: "m112.97 4.76 1.03 7.12h-4l1.03-7.12c0.25-1.01 1.69-1.01 1.94 0z",
      fill: "#49C0D6"
    }),
    _react2.default.createElement("circle", {
      cx: 112,
      cy: 11,
      r: 4,
      fill: "#49C0D6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112 8.74c0.19 0.17 0.41 0.3 0.66 0.39 0.8 0.28 1.34 1.04 1.34 1.87 0 0.27-0.05 0.54-0.16 0.79-0.22 0.52-0.22 1.11 0.02 1.62 0.23 0.51 0.67 0.9 1.21 1.08 4.15 1.33 6.94 5.16 6.94 9.52 0 5.51-4.49 10-10 10s-10-4.49-10-10c0-4.36 2.79-8.18 6.94-9.52 0.54-0.17 0.98-0.56 1.21-1.08 0.23-0.51 0.24-1.1 0.02-1.62-0.13-0.25-0.18-0.52-0.18-0.79 0-0.84 0.54-1.59 1.34-1.87 0.25-0.09 0.47-0.22 0.66-0.39m0-4.74c-0.42 0-0.84 0.25-0.97 0.76l-0.36 2.49c-1.55 0.54-2.67 2.01-2.67 3.75 0 0.56 0.12 1.09 0.33 1.58-4.83 1.55-8.33 6.07-8.33 11.42 0 6.63 5.37 12 12 12s12-5.37 12-12c0-5.35-3.5-9.87-8.33-11.42 0.21-0.48 0.33-1.02 0.33-1.58 0-1.74-1.12-3.21-2.67-3.76l-0.36-2.49c-0.13-0.5-0.55-0.75-0.97-0.75z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 15.667,
        cy: 32.167,
        r: 73.667,
        gradientTransform: "matrix(1.0287e-13 1 -.414 4.259e-14 28.984 16.5)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D6D6D6",
        offset: 0.5278
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M4,124h24V34c0-1.1-0.9-2-2-2H6c-1.1,0-2,0.9-2,2V124z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("rect", {
      x: 4,
      y: 116,
      width: 24,
      height: 8,
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("rect", {
      x: 4,
      y: 84,
      width: 24,
      height: 2,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 111.67,
        cy: 32.167,
        r: 73.667,
        gradientTransform: "matrix(-1.0287e-13 1 .414 4.259e-14 99.016 -79.5)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D6D6D6",
        offset: 0.5278
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m124 124h-24v-90c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2v90z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-1 -1.2246e-16 1.2246e-16 -1 224 240)",
      x: 100,
      y: 116,
      width: 24,
      height: 8,
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("rect", {
      transform: "matrix(-1 -1.2246e-16 1.2246e-16 -1 224 170)",
      x: 100,
      y: 84,
      width: 24,
      height: 2,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9398 -.3418 .3418 .9398 -39.252 12.242)",
        cx: 15.11,
        cy: 117.5,
        rx: 1.26,
        ry: 0.59,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8261 -.5635 .5635 .8261 -65.958 29.566)",
        cx: 14.93,
        cy: 121.66,
        rx: 1.02,
        ry: 0.53,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 16.66,
        cy: 119.51,
        rx: 1.55,
        ry: 0.68,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 10.76,
        cy: 117.27,
        rx: 1.55,
        ry: 0.68,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 18.83,
        cy: 122.04,
        rx: 1.07,
        ry: 0.59,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 19.37,
        cy: 117.53,
        rx: 1.3,
        ry: 0.72,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 22.98,
        cy: 119.34,
        rx: 1.07,
        ry: 0.47,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1284 -.9917 .9917 .1284 -111.4 117.88)",
        cx: 11.36,
        cy: 122.32,
        rx: 0.56,
        ry: 1.28,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1969 -.9804 .9804 .1969 -95.593 119.25)",
        cx: 24.99,
        cy: 117.97,
        rx: 0.76,
        ry: 1.67,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4963 -.8682 .8682 .4963 -98.702 65.523)",
        cx: 7.11,
        cy: 117.82,
        rx: 0.53,
        ry: 1.25,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9268 -.3757 .3757 .9268 -44.199 18.806)",
        cx: 26.13,
        cy: 122.75,
        rx: 1.27,
        ry: 0.46,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9398 -.3418 .3418 .9398 -39.658 14.179)",
        cx: 20.4,
        cy: 119.62,
        rx: 1.34,
        ry: 0.62,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 5.58,
        cy: 119.82,
        rx: 1.13,
        ry: 0.62,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.1969 -.9804 .9804 .1969 -101.05 119.69)",
        cx: 22.53,
        cy: 121.52,
        rx: 0.81,
        ry: 1.77,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.4963 -.8682 .8682 .4963 -97.048 71.194)",
        cx: 12.83,
        cy: 119.23,
        rx: 0.56,
        ry: 1.33,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9268 -.3757 .3757 .9268 -44.889 12.052)",
        cx: 8.46,
        cy: 121.15,
        rx: 2.32,
        ry: 0.85,
        opacity: 0.2
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m18.39 100.72h-5.3c-0.44 0-0.79-0.38-0.79-0.86v-2.4c0-0.47 0.36-0.86 0.79-0.86h5.3c0.44 0 0.79 0.38 0.79 0.86v2.4c0 0.48-0.35 0.86-0.79 0.86z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m85.14 110.85h-5.3c-0.44 0-0.79-0.38-0.79-0.86v-2.4c0-0.47 0.36-0.86 0.79-0.86h5.3c0.44 0 0.79 0.38 0.79 0.86v2.4c0 0.47-0.35 0.86-0.79 0.86z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m9.21 113.44h-4.09c-0.34 0-0.61-0.31-0.61-0.69v-1.92c0-0.38 0.27-0.69 0.61-0.69h4.09c0.34 0 0.61 0.31 0.61 0.69v1.92c0 0.38-0.27 0.69-0.61 0.69z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m13.77 108.88h-7.01c-0.58 0-1.05-0.4-1.05-0.9v-2.51c0-0.5 0.47-0.9 1.05-0.9h7.01c0.58 0 1.05 0.4 1.05 0.9v2.51c0 0.5-0.47 0.9-1.05 0.9z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m80.89 117.25h-7.01c-0.58 0-1.05-0.4-1.05-0.9v-2.51c0-0.5 0.47-0.9 1.05-0.9h7.01c0.58 0 1.05 0.4 1.05 0.9v2.51c0 0.5-0.47 0.9-1.05 0.9z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m42.46 112.82h-8.21c-0.68 0-1.23-0.47-1.23-1.05v-2.94c0-0.58 0.55-1.05 1.23-1.05h8.21c0.68 0 1.23 0.47 1.23 1.05v2.94c0 0.58-0.55 1.05-1.23 1.05z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m10.57 95.87h-4.51c-0.55 0-1-0.53-1-1.19v-1.9c0-0.66 0.45-1.19 1-1.19h4.51c0.55 0 1 0.53 1 1.19v1.9c0 0.65-0.45 1.19-1 1.19z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m12.08 59.95h-5.3c-0.44 0-0.79-0.38-0.79-0.86v-2.4c0-0.47 0.36-0.86 0.79-0.86h5.3c0.44 0 0.79 0.38 0.79 0.86v2.4c0.01 0.47-0.35 0.86-0.79 0.86z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m14.79 66.01h-4.51c-0.55 0-1-0.53-1-1.19v-1.9c0-0.66 0.45-1.19 1-1.19h4.51c0.55 0 1 0.53 1 1.19v1.9c0 0.66-0.45 1.19-1 1.19z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m27.18 47.53h-3.16c-0.39 0-0.7-0.53-0.7-1.19v-1.9c0-0.66 0.31-1.19 0.7-1.19h3.16c0.39 0 0.7 0.53 0.7 1.19v1.9c0 0.66-0.31 1.19-0.7 1.19z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("pattern", {
      id: "e",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "M12,78l-1.5-1.5L9,78c-0.63,0.63-1,1.62-1,2.67V84h5v-3.33C13,79.62,12.63,78.63,12,78z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("pattern", {
      id: "d",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "m23 78-1.5-1.5-1.5 1.5c-0.63 0.63-1 1.62-1 2.67v3.33h5v-3.33c0-1.05-0.37-2.04-1-2.67z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("pattern", {
      id: "c",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "m17.5 46-1.5-1.5-1.5 1.5c-0.63 0.63-1 1.62-1 2.67v3.33h5v-3.33c0-1.05-0.37-2.04-1-2.67z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26 34v88h-20v-88h20m0-2h-20c-1.1 0-2 0.9-2 2v90h24v-90c0-1.1-0.9-2-2-2z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242"
      },
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3418 -.9398 .9398 .3418 -36.122 183.43)",
        cx: 112.89,
        cy: 117.5,
        rx: 0.59,
        ry: 1.26,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.5635 -.8261 .8261 .5635 -51.147 146.51)",
        cx: 113.07,
        cy: 121.66,
        rx: 0.53,
        ry: 1.02,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 111.34,
        cy: 119.51,
        rx: 1.55,
        ry: 0.68,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 117.24,
        cy: 117.27,
        rx: 1.55,
        ry: 0.68,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 109.17,
        cy: 122.04,
        rx: 1.07,
        ry: 0.59,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 108.63,
        cy: 117.53,
        rx: 1.3,
        ry: 0.72,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        cx: 105.02,
        cy: 119.34,
        rx: 1.07,
        ry: 0.47,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9917 -.1284 .1284 .9917 -14.742 15.992)",
        cx: 116.64,
        cy: 122.32,
        rx: 1.28,
        ry: 0.56,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9804 -.1969 .1969 .9804 -21.208 22.588)",
        cx: 103.01,
        cy: 117.97,
        rx: 1.67,
        ry: 0.76,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8682 -.4963 .4963 .8682 -42.531 75.522)",
        cx: 120.89,
        cy: 117.82,
        rx: 1.25,
        ry: 0.53,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3757 -.9268 .9268 .3757 -50.159 171.05)",
        cx: 101.87,
        cy: 122.75,
        rx: 0.46,
        ry: 1.27,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3418 -.9398 .9398 .3418 -41.6 179.85)",
        cx: 107.6,
        cy: 119.62,
        rx: 0.62,
        ry: 1.34,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        cx: 122.42,
        cy: 119.82,
        rx: 1.13,
        ry: 0.62,
        opacity: 0.08
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9804 -.1969 .1969 .9804 -21.859 23.141)",
        cx: 105.47,
        cy: 121.52,
        rx: 1.77,
        ry: 0.81,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8682 -.4963 .4963 .8682 -43.984 72.872)",
        cx: 115.17,
        cy: 119.23,
        rx: 1.33,
        ry: 0.56,
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3757 -.9268 .9268 .3757 -37.639 186.42)",
        cx: 119.54,
        cy: 121.15,
        rx: 0.85,
        ry: 2.32,
        opacity: 0.2
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.61 100.72h5.3c0.44 0 0.79-0.38 0.79-0.86v-2.4c0-0.47-0.36-0.86-0.79-0.86h-5.3c-0.44 0-0.79 0.38-0.79 0.86v2.4c0 0.48 0.35 0.86 0.79 0.86z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m118.79 113.44h4.09c0.34 0 0.61-0.31 0.61-0.69v-1.92c0-0.38-0.27-0.69-0.61-0.69h-4.09c-0.34 0-0.61 0.31-0.61 0.69v1.92c0 0.38 0.27 0.69 0.61 0.69z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m114.23 108.88h7.01c0.58 0 1.05-0.4 1.05-0.9v-2.51c0-0.5-0.47-0.9-1.05-0.9h-7.01c-0.58 0-1.05 0.4-1.05 0.9v2.51c0 0.5 0.47 0.9 1.05 0.9z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m117.43 95.87h4.51c0.55 0 1-0.53 1-1.19v-1.9c0-0.66-0.45-1.19-1-1.19h-4.51c-0.55 0-1 0.53-1 1.19v1.9c0 0.65 0.45 1.19 1 1.19z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m29.31 118.88h6.21c0.51 0 0.93-0.45 0.93-1v-2.81c0-0.55-0.42-1-0.93-1h-6.21c-0.51 0-0.93 0.45-0.93 1v2.81c0 0.55 0.41 1 0.93 1z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m31.22 106.15h5.28c0.65 0 1.17-0.62 1.17-1.39v-2.22c0-0.77-0.52-1.39-1.17-1.39h-5.28c-0.65 0-1.17 0.62-1.17 1.39v2.22c-0.01 0.77 0.52 1.39 1.17 1.39z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m115.92 59.95h5.3c0.44 0 0.79-0.38 0.79-0.86v-2.4c0-0.47-0.36-0.86-0.79-0.86h-5.3c-0.44 0-0.79 0.38-0.79 0.86v2.4c-0.01 0.47 0.35 0.86 0.79 0.86z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m113.21 66.01h4.51c0.55 0 1-0.53 1-1.19v-1.9c0-0.66-0.45-1.19-1-1.19h-4.51c-0.55 0-1 0.53-1 1.19v1.9c0 0.66 0.45 1.19 1 1.19z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m89.29 79.07h5.3c0.44 0 0.79-0.38 0.79-0.86v-2.4c0-0.47-0.36-0.86-0.79-0.86h-5.3c-0.44 0-0.79 0.38-0.79 0.86v2.4c0 0.48 0.35 0.86 0.79 0.86z",
      fill: "#BDBDBD",
      opacity: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m93.58 85.01h4.51c0.55 0 1-0.53 1-1.19v-1.9c0-0.66-0.45-1.19-1-1.19h-4.51c-0.55 0-1 0.53-1 1.19v1.9c0 0.66 0.45 1.19 1 1.19z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m100.82 47.53h3.16c0.39 0 0.7-0.53 0.7-1.19v-1.9c0-0.66-0.31-1.19-0.7-1.19h-3.16c-0.39 0-0.7 0.53-0.7 1.19v1.9c0 0.66 0.31 1.19 0.7 1.19z",
      fill: "#BDBDBD",
      opacity: 0.2
    }),
    _react2.default.createElement("pattern", {
      id: "b",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "m116 78 1.5-1.5 1.5 1.5c0.63 0.63 1 1.62 1 2.67v3.33h-5v-3.33c0-1.05 0.37-2.04 1-2.67z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("pattern", {
      id: "o",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "m105 78 1.5-1.5 1.5 1.5c0.63 0.63 1 1.62 1 2.67v3.33h-5v-3.33c0-1.05 0.37-2.04 1-2.67z",
      fill: "url(#o)"
    }),
    _react2.default.createElement("pattern", {
      id: "n",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.5 46 1.5-1.5 1.5 1.5c0.63 0.63 1 1.62 1 2.67v3.33h-5v-3.33c0-1.05 0.37-2.04 1-2.67z",
      fill: "url(#n)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m122 34v88h-20v-88h20m0-2h-20c-1.1 0-2 0.9-2 2v90h24v-90c0-1.1-0.9-2-2-2z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("pattern", {
      id: "m",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("line", {
      x1: -18.96,
      x2: -18.96,
      y1: 27.46,
      y2: 42.96,
      fill: "url(#m)"
    }),
    _react2.default.createElement("pattern", {
      id: "l",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.2 87.28c-10.75 0-19.5-8.75-19.5-19.5s8.75-19.5 19.5-19.5 19.5 8.75 19.5 19.5-8.74 19.5-19.5 19.5z",
      fill: "url(#l)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.2 49.28c10.2 0 18.5 8.3 18.5 18.5s-8.3 18.5-18.5 18.5-18.5-8.3-18.5-18.5 8.3-18.5 18.5-18.5m0-2c-11.32 0-20.5 9.18-20.5 20.5s9.18 20.5 20.5 20.5 20.5-9.18 20.5-20.5-9.17-20.5-20.5-20.5z",
      fill: "#34A4A8"
    }),
    _react2.default.createElement("path", {
      d:
        "m74.8 67.76 4.54-7.43c0.15-0.25 0.16-0.57 0.02-0.83-0.15-0.26-0.42-0.42-0.72-0.42h-9.14l-4.59-7.81c-0.3-0.5-1.1-0.5-1.41 0.01l-4.58 7.8h-9.14c-0.3 0-0.57 0.16-0.72 0.42s-0.14 0.58 0.02 0.83l4.54 7.43-4.54 7.43c-0.16 0.26-0.16 0.57-0.02 0.83 0.15 0.26 0.42 0.42 0.72 0.42h9.14l4.59 7.81c0.15 0.25 0.41 0.39 0.7 0.39s0.55-0.15 0.71-0.4l4.58-7.8h9.14c0.3 0 0.57-0.16 0.72-0.42s0.14-0.58-0.02-0.83l-4.54-7.43zm-8.82 8.69-1.78 3.12-1.78-3.12h3.56zm-3.55-17.37 1.78-3.12 1.78 3.12h-3.56zm12.3 14.35h-3.39l1.7-2.78 1.69 2.78zm-3.4-11.33h3.39l-1.7 2.78-1.69-2.78zm-0.07 5.66-3.46 5.67h-7.19l-3.46-5.67 3.46-5.67h7.19l3.46 5.67zm-15.88 2.9 1.7 2.78h-3.39l1.69-2.78zm-1.7-8.56h3.39l-1.7 2.78-1.69-2.78z",
      fill: "#FFEA00"
    }),
    _react2.default.createElement("pattern", {
      id: "k",
      xlinkHref: "#a",
      patternTransform: "translate(6.3755 -4.8745)"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.2 102.3-7.2-6.3-7.2 6.3c-3.02 2.64-4.8 6.79-4.8 11.2v10.5h24v-10.5c0-4.41-1.78-8.56-4.8-11.2z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 98.66 5.88 5.15c2.58 2.26 4.12 5.88 4.12 9.69v8.5h-20v-8.5c0-3.81 1.54-7.44 4.12-9.69l5.88-5.15m0-2.66-7.2 6.3c-3.02 2.64-4.8 6.79-4.8 11.2v10.5h24v-10.5c0-4.41-1.78-8.56-4.8-11.2l-7.2-6.3z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Synagogue;
