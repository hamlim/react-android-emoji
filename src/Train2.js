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

function Train2(props) {
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
      d: "m31.69 111.92-15.69 12.08h96l-16.5-11.93s-64.11-0.46-63.81-0.15z",
      fill: "#263238"
    }),
    _react2.default.createElement("path", {
      d: "m43.62 111.92-11.62 12.08h64l-11.58-11.93s-41.02-0.46-40.8-0.15z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none"
      },
      _react2.default.createElement("path", {
        d: "m31.69 111.92-15.69 12.08h96l-16.5-11.93s-64.11-0.46-63.81-0.15z"
      }),
      _react2.default.createElement("path", {
        d: "m43.62 111.92-11.62 12.08h64l-11.58-11.93s-41.02-0.46-40.8-0.15z"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64.466,
        cy: 70.833,
        r: 39.702,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.0013884
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M24,36c4.25-18.82,3.5-32,40-32s35.78,13.42,40,32l8,48.25c2.5,15-10.76,28.75-21.46,28.75 H37.46C26.76,113,14,99.75,16,84.25L24,36z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "M90.54,113H37.46C26.76,113,14,99.75,16,84.25l0.68-4.1C19.58,90.99,29.15,99,37.46,99h53.08 c8.18,0,17.85-8.03,20.84-18.51l0.62,3.76C114.5,99.25,101.24,113,90.54,113z",
      fill: "#0277BD"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "M24,36c2.08-18.42,3.5-32,40-32s37.58,13.33,40,32l8,48.25c2.5,15-10.76,28.75-21.46,28.75H37.46 C26.76,113,14,99.75,16,84.25L24,36z"
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
        "M33.26,41.83c-0.52,2.96,2.21,5.43,5.12,4.67C43.17,45.25,51.17,44,64,44 c12.85,0,20.85,1.25,25.64,2.5c2.91,0.76,5.63-1.7,5.12-4.66L87.45-0.3c-0.34-1.99-2.08-3.43-4.1-3.4L44.55-3.21 c-1.97,0.03-3.65,1.45-3.99,3.4L33.26,41.83z",
      clipPath: "url(#a)",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m83.41-1.71c1.03 0 1.9 0.73 2.07 1.74l7.3 42.15c0.14 0.84-0.22 1.42-0.45 1.69-0.41 0.49-1 0.76-1.63 0.76-0.19 0-0.38-0.02-0.56-0.07-6.52-1.7-15.32-2.56-26.14-2.56-10.81 0-19.61 0.86-26.13 2.56-0.19 0.05-0.38 0.07-0.56 0.07-0.63 0-1.22-0.28-1.63-0.77-0.23-0.27-0.6-0.86-0.45-1.7l7.3-41.65c0.17-1 1.03-1.73 2.05-1.74l38.81-0.49 0.02 0.01m0-2h-0.05l-38.81 0.5c-1.97 0.03-3.65 1.45-3.99 3.4l-7.3 41.65c-0.45 2.59 1.58 4.81 4.05 4.81 0.35 0 0.71-0.04 1.07-0.14 4.79-1.26 12.79-2.51 25.62-2.51 12.85 0 20.85 1.25 25.64 2.5 0.36 0.09 0.72 0.14 1.07 0.14 2.46 0 4.5-2.21 4.05-4.8l-7.31-42.14c-0.34-1.97-2.05-3.41-4.04-3.41z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m32 60h16v16h-16c-4.4 0-8-3.6-8-8 0-2.2 0.9-4.2 2.35-5.65s3.45-2.35 5.65-2.35z",
      fill: "#263238"
    }),
    _react2.default.createElement("path", {
      d:
        "m104 68c0 2.2-0.9 4.2-2.35 5.65s-3.45 2.35-5.65 2.35h-16v-16h16c4.4 0 8 3.6 8 8z",
      fill: "#263238"
    }),
    _react2.default.createElement("circle", {
      cx: 33,
      cy: 68,
      r: 6,
      fill: "#FFEB3B"
    }),
    _react2.default.createElement("circle", {
      cx: 95,
      cy: 68,
      r: 6,
      fill: "#FFEB3B"
    }),
    _react2.default.createElement("line", {
      x1: 52,
      x2: 52,
      y1: 60,
      y2: 76,
      fill: "none",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("line", {
      x1: 56,
      x2: 56,
      y1: 60,
      y2: 76,
      fill: "none",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("line", {
      x1: 60,
      x2: 60,
      y1: 60,
      y2: 76,
      fill: "none",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("line", {
      x1: 64,
      x2: 64,
      y1: 60,
      y2: 76,
      fill: "none",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("line", {
      x1: 68,
      x2: 68,
      y1: 60,
      y2: 76,
      fill: "none",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("line", {
      x1: 72,
      x2: 72,
      y1: 60,
      y2: 76,
      fill: "none",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("line", {
      x1: 76,
      x2: 76,
      y1: 60,
      y2: 76,
      fill: "none",
      stroke: "#78909C",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c14.58,0,23.69,2.16,28.67,6.79c4.46,4.15,5.74,10.28,7.37,18.05 c0.32,1.53,0.65,3.11,1.02,4.74l7.99,48.17c1.02,6.13-0.96,12.68-5.44,17.96c-3.81,4.5-8.82,7.3-13.07,7.3H37.46 c-4.09,0-8.91-2.58-12.56-6.74c-4.6-5.23-6.76-12-5.93-18.57l7.98-48.11c0.37-1.64,0.7-3.23,1.02-4.76 c1.62-7.81,2.91-13.97,7.36-18.09C40.28,9.14,49.39,7,64,7 M64,4C27.5,4,28.25,17.18,24,36l-8,48.25C14,99.75,26.76,113,37.46,113 h53.08c10.7,0,23.96-13.75,21.46-28.75L104,36C99.78,17.42,100.5,4,64,4L64,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Train2;
