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

function RiceCracker(props) {
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
      "radialGradient",
      {
        id: "d",
        cx: 65.039,
        cy: 46.665,
        r: 88.965,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAA629",
        offset: 0.4968
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F78C1E",
        offset: 0.823
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D87527",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,68c0,33.14-21.86,56-60,56S4,101.14,4,68S24.17,4,64,4S124,34.86,124,68z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "M124,68c0,33.14-21.94,56-60,56S4,101.14,4,68S24.17,4,64,4S124,34.86,124,68z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 64.5,
        cy: 67.342,
        r: 64.563,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#3E3E3E",
        offset: 0.6046
      }),
      _react2.default.createElement("stop", {
        stopColor: "#292726",
        offset: 0.9366
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88 137.61h-48c-4.42 0-8-3.58-8-8v-54.53c0-4.67 3.98-8.35 8.63-7.97 5.11 0.42 12.71 0.8 23.37 0.8s18.26-0.38 23.37-0.8c4.66-0.38 8.63 3.3 8.63 7.97v54.53c0 4.42-3.58 8-8 8z",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.02 70.01c2.74 0 4.98 2.24 4.98 5v54.53c0 2.76-2.24 5-5 5h-48c-2.76 0-5-2.24-5-5v-54.53c0-2.76 2.23-5 4.98-5 0.14 0 0.28 0.01 0.42 0.02 6.59 0.54 14.54 0.81 23.61 0.81s17.02-0.27 23.61-0.81c0.13-0.02 0.27-0.02 0.4-0.02m0-3c-0.22 0-0.44 0.01-0.66 0.03-5.11 0.42-12.71 0.8-23.37 0.8s-18.26-0.38-23.37-0.8c-0.22-0.02-0.44-0.03-0.66-0.03-4.37 0-7.98 3.55-7.98 8v54.53c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-54.53c0.02-4.45-3.59-8-7.96-8z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d: "m105.74 73.99s2.11 0.21 4.38-1.28 2.91-3.51 2.91-3.51",
      fill: "none",
      stroke: "#3E3E3E",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d: "m34.67 37.17s0.44 1.77 2.22 2.75 3.51 0.41 3.51 0.41",
      fill: "none",
      stroke: "#3E3E3E",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d: "m14 56.44s-0.12 1.89 1.34 3.53 3.34 1.76 3.34 1.76",
      fill: "none",
      stroke: "#3E3E3E",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 4
    }),
    _react2.default.createElement("path", {
      d:
        "m21.56 91.18c-1.05-0.35-2.18 0.21-2.53 1.26 0 0.01-0.52 1.39-2.14 2.41-0.23 0.15-0.45 0.26-0.67 0.37-1.54 0.97-0.27 3.97 1.51 3.73 0.61-0.22 0.64-0.3 1.3-0.72 2.8-1.78 3.69-4.24 3.79-4.52 0.35-1.04-0.22-2.18-1.26-2.53z",
      fill: "#3E3E3E"
    }),
    _react2.default.createElement("path", {
      d:
        "m105.01 37.52c-0.25-1.08-1.32-1.75-2.4-1.5-0.01 0-1.45 0.28-3.18-0.56-0.24-0.12-0.46-0.25-0.66-0.38-1.63-0.8-3.52 1.85-2.38 3.24 0.51 0.4 0.59 0.39 1.29 0.73 2.99 1.46 5.55 0.92 5.83 0.86 1.08-0.24 1.75-1.32 1.5-2.39z",
      fill: "#3E3E3E"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.18 20.31c-0.69-0.86-1.95-1-2.81-0.31-0.01 0.01-1.74 1.78-3.86 2.1-0.27 0.04-1.96-0.16-2.2-0.19-1.82-0.02-2.37 3.19-0.74 3.95 3.93 1.21 9.08-2.57 9.31-2.75 0.85-0.68 0.99-1.94 0.3-2.8z",
      fill: "#3E3E3E"
    }),
    _react2.default.createElement("path", {
      d:
        "m112.93 100.94c0.33-1.06-0.26-2.18-1.31-2.5-0.01 0-1.4-0.49-2.46-2.09-0.15-0.23-0.27-0.45-0.38-0.66-1-1.52-3.97-0.19-3.69 1.59 0.24 0.6 0.31 0.64 0.74 1.29 1.84 2.77 4.32 3.6 4.6 3.69 1.05 0.32 2.17-0.27 2.5-1.32z",
      fill: "#3E3E3E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c17.67,0,32.41,6.4,42.65,18.51C115.9,36.46,121,51.55,121,68c0,32.69-21.84,53-57,53 S7,100.69,7,68c0-16.45,5.1-31.54,14.35-42.49C31.59,13.4,46.33,7,64,7 M64,4C24.17,4,4,34.86,4,68s21.86,56,60,56s60-22.86,60-56 S103.83,4,64,4L64,4z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement("path", {
      d: "m27.18 56.73c2.43 4.49 8.96 6.13 13.22 3.32",
      fill: "none",
      stroke: "#F8981D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement("path", {
      d: "m11.91 77.11c2.03 2.84 7.02 2.68 8.87-0.28",
      fill: "none",
      stroke: "#F8981D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement("path", {
      d: "m103.1 83.76c2.2 1.39 5.38 0.97 7.14-0.96",
      fill: "none",
      stroke: "#F8981D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement("path", {
      d: "m96.04 50c1.14-0.29 2.17-1 2.84-1.97",
      fill: "none",
      stroke: "#F8981D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement("path", {
      d: "m107.56 79.81c-2.32 1.02-5.25 0.45-7.01-1.37",
      fill: "none",
      stroke: "#F8981D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement("path", {
      d: "m64 47.63c2.28 2.9 8.43 2.58 10.54-2.83",
      fill: "none",
      stroke: "#F8981D",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    })
  );
}

exports.default = RiceCracker;