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

function Fog(props) {
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
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      clipPath: "url(#a)",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 55.084,
          x2: 55.084,
          y1: -0.3333,
          y2: 42.033,
          gradientTransform: "matrix(-.999 .0437 .0387 .885 90.874 -2.9139)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.2636
        }),
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0.9182
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m7.3 23.21c0.47-0.02 0.94-0.01 1.4 0.02-0.41-1.06-0.66-2.19-0.71-3.37-0.29-6.58 5.5-12.17 12.92-12.5 3.16-0.14 6.1 0.71 8.47 2.22 2.86-5.32 8.85-9.13 15.93-9.44 10.18-0.44 18.75 6.5 19.15 15.52 0.01 0.32 0.01 0.65 0.01 0.97 7.71 0.5 13.91 6.03 14.21 13.05 0.33 7.51-9.06 13.56-38.9 14.86s-43.68-4.42-43.93-10.25c-0.26-5.84 4.87-10.8 11.45-11.08z",
        fill: "url(#f)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 86.36,
          x2: 86.36,
          y1: 8.0577,
          y2: 64.263,
          gradientTransform: "matrix(.999 .0437 -.0387 .885 1.6507 -2.9139)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.2636
        }),
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0.9182
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m125.42 30.4c-0.62-0.03-1.23-0.01-1.83 0.02 0.53-1.39 0.86-2.87 0.93-4.42 0.38-8.62-7.21-15.96-16.95-16.39-4.14-0.18-8 0.93-11.1 2.92-3.75-6.98-11.61-11.97-20.89-12.38-13.35-0.58-24.59 8.53-25.11 20.36-0.02 0.43-0.02 0.85-0.01 1.27-10.11 0.65-18.23 7.9-18.64 17.11-0.42 9.85 11.88 17.77 51.01 19.49 39.13 1.71 57.28-5.8 57.61-13.45 0.34-7.65-6.39-14.15-15.02-14.53z",
        fill: "url(#e)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 27.16,
          x2: 27.16,
          y1: 35.981,
          y2: 78.845,
          gradientTransform: "matrix(.999 .0437 -.0387 .885 1.6507 -2.9139)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.2636
        }),
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0.9182
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m56.22 47.21c-0.47-0.02-0.94-0.01-1.4 0.02 0.41-1.06 0.66-2.19 0.71-3.37 0.29-6.58-5.5-12.17-12.92-12.5-3.16-0.14-6.1 0.71-8.47 2.22-2.86-5.32-8.85-9.13-15.93-9.44-10.18-0.44-18.75 6.51-19.14 15.52-0.01 0.32-0.01 0.65-0.01 0.97-7.71 0.5-13.91 6.03-14.21 13.05-0.33 7.51 9.06 13.56 38.9 14.86s43.68-4.43 43.94-10.26c0.24-5.83-4.89-10.79-11.47-11.07z",
        fill: "url(#d)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 123.73,
          x2: 123.73,
          y1: 74.153,
          y2: 117.02,
          gradientTransform: "matrix(.999 .0437 -.0387 .885 1.6507 -2.9139)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E0E0E0",
          offset: 0.2636
        }),
        _react2.default.createElement("stop", {
          stopColor: "#9E9E9E",
          offset: 0.9182
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m151.22 85.21c-0.47-0.02-0.94-0.01-1.4 0.02 0.41-1.06 0.66-2.19 0.71-3.37 0.29-6.58-5.5-12.17-12.92-12.5-3.16-0.14-6.1 0.71-8.47 2.22-2.86-5.32-8.85-9.13-15.93-9.44-10.18-0.44-18.75 6.5-19.15 15.52-0.01 0.32-0.01 0.65-0.01 0.97-7.71 0.5-13.91 6.03-14.21 13.05-0.33 7.51 9.06 13.56 38.9 14.86s43.68-4.43 43.94-10.26c0.25-5.83-4.88-10.79-11.46-11.07z",
        fill: "url(#c)"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 88.33,
      cy: 60.67,
      rx: 30,
      ry: 27,
      clipPath: "url(#a)",
      fill: "#eee"
    }),
    _react2.default.createElement("circle", {
      cx: 47.67,
      cy: 58.33,
      r: 29,
      clipPath: "url(#a)",
      fill: "#eee"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 58.165,
        x2: 58.165,
        y1: 50.032,
        y2: 125.55,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.2636
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.9182
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88.22 73.37c-3.46 0-6.79 0.51-9.92 1.44-1.38-12.99-13.28-23.14-27.76-23.14-9.36 0-17.65 4.25-22.7 10.77-1.09-0.12-2.2-0.18-3.32-0.18-15.8 0-28.61 11.79-28.61 26.34s12.81 26.34 28.61 26.34c10.05 0 18.88-4.77 23.99-11.99 0.67 0.04 1.35 0.08 2.04 0.08 1.88 0 3.71-0.17 5.48-0.5 0 0.17-0.01 0.33-0.01 0.5 0 16.37 14.42 29.65 32.21 29.65s32.21-13.27 32.21-29.65c-0.01-16.38-14.43-29.66-32.22-29.66z",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement("circle", {
      cx: 37.14,
      cy: 130.28,
      r: 27.76,
      clipPath: "url(#a)",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.077 -.997 .997 .077 -47.051 175.93)",
      cx: 71.49,
      cy: 113.37,
      rx: 25.63,
      ry: 32.64,
      clipPath: "url(#a)",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("circle", {
      cx: 111.14,
      cy: 128.88,
      r: 26.15,
      clipPath: "url(#a)",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Fog;
