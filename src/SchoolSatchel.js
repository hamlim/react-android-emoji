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

function SchoolSatchel(props) {
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
        "m63.86 4c-12.1 0-22 9.72-22 21.59v3.38c0 3.65 2.2 6.65 6.6 7.02v-10.4c0-8.31 6.93-15.11 15.4-15.11 8.51 0 15.4 6.77 15.4 15.11v10.42c3.3-0.2 6.6-3.27 6.6-7.04v-3.38c0-11.92-9.85-21.59-22-21.59z",
      fill: "#1565C0"
    }),
    _react2.default.createElement("path", {
      d:
        "m81.73 98.04h-35.58c-2.24 0-4.06-1.82-4.06-4.06v-0.65c0-2.24 1.82-4.06 4.06-4.06h35.58c2.24 0 4.06 1.82 4.06 4.06v0.65c0 2.24-1.82 4.06-4.06 4.06z",
      fill: "#29B6F6"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 63.859,
        x2: 63.859,
        y1: 123.02,
        y2: 15.275,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.2164
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.8598
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m26.72 124h74.28c5.13 0 9.28-3.87 9.28-8.64v-54.68c0-25.64-20.78-44.42-46.42-44.42s-46.42 18.78-46.42 44.42v54.68c-0.01 4.77 4.15 8.64 9.28 8.64z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.523,
        cy: 104.07,
        r: 53.477,
        gradientTransform: "matrix(1 0 0 .2631 0 76.688)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.2274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1565C0",
        offset: 0.9046
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88.89 114.61h-49.74c-5.52 0-10-4.48-10-10v-30.08c0-1.66 1.34-3 3-3h63.74c1.66 0 3 1.34 3 3v30.08c0 5.52-4.47 10-10 10z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m26.72 124h74.28c5.13 0 9.28-3.87 9.28-8.64v-54.68c0-25.64-20.78-44.42-46.42-44.42s-46.42 18.78-46.42 44.42v54.68c-0.01 4.77 4.15 8.64 9.28 8.64z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m74.09 51.86h-20.18c-4.25 0-7.69-3.44-7.69-7.69s3.44-7.69 7.69-7.69h20.17c4.25 0 7.69 3.44 7.69 7.69 0.01 4.25-3.44 7.69-7.68 7.69z",
      fill: "#FBC02D"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.86 19.26c11.76 0 22.69 4.18 30.77 11.78 8.16 7.67 12.65 18.2 12.65 29.64v54.68c0 3.11-2.82 5.64-6.28 5.64h-74.28c-3.47 0-6.28-2.53-6.28-5.64v-54.68c0-11.44 4.49-21.97 12.65-29.64 8.08-7.6 19-11.78 30.77-11.78m0-3c-25.64 0-46.42 18.78-46.42 44.42v54.68c0 4.77 4.16 8.64 9.28 8.64h74.28c5.13 0 9.28-3.87 9.28-8.64v-54.68c0-25.64-20.78-44.42-46.42-44.42z",
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
          "m95.89 73.53c0.55 0 1 0.45 1 1v30.08c0 4.41-3.59 8-8 8h-49.74c-4.41 0-8-3.59-8-8v-30.08c0-0.55 0.45-1 1-1h63.74m0-2h-63.74c-1.66 0-3 1.34-3 3v30.08c0 5.52 4.48 10 10 10h49.74c5.52 0 10-4.48 10-10v-30.08c0-1.65-1.34-3-3-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.11,
        x2: 64.11,
        y1: 68.667,
        y2: 95.002,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0.2274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.9046
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88.98 94.6h-49.74c-5.52 0-10-5.48-10-11v-11.3c0-2.21 1.79-4 4-4h61.74c2.21 0 4 1.79 4 4v11.3c0 5.53-4.48 11-10 11z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m94.98 70.3c1.1 0 2 0.9 2 2v11.3c0 5.15-4.22 9-8 9h-49.74c-3.78 0-8-3.85-8-9v-11.3c0-1.1 0.9-2 2-2h61.74m0-2h-61.74c-2.21 0-4 1.79-4 4v11.3c0 5.52 4.48 11 10 11h49.74c5.52 0 10-5.48 10-11v-11.3c0-2.2-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 102.43c-2.77 0-5.02-2.25-5.02-5.02v-6.73c0-2.77 2.25-5.02 5.02-5.02s5.02 2.25 5.02 5.02v6.73c0 2.78-2.25 5.02-5.02 5.02z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 87.67c1.67 0 3.02 1.36 3.02 3.02v6.73c0 1.67-1.36 3.02-3.02 3.02s-3.02-1.36-3.02-3.02v-6.73c0-1.67 1.35-3.02 3.02-3.02m0-2c-2.77 0-5.02 2.25-5.02 5.02v6.73c0 2.77 2.25 5.02 5.02 5.02s5.02-2.25 5.02-5.02v-6.73c0-2.78-2.25-5.02-5.02-5.02z",
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
          "m74.09 39.48c2.59 0 4.69 2.1 4.69 4.69s-2.1 4.69-4.69 4.69h-20.18c-2.59 0-4.69-2.1-4.69-4.69s2.1-4.69 4.69-4.69h20.18m0-3h-20.18c-4.25 0-7.69 3.44-7.69 7.69s3.44 7.69 7.69 7.69h20.17c4.25 0 7.69-3.44 7.69-7.69 0.01-4.25-3.44-7.69-7.68-7.69z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SchoolSatchel;
