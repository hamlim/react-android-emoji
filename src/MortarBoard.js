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

function MortarBoard(props) {
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
        id: "f",
        cx: -88.695,
        cy: 86.604,
        r: 65.781,
        gradientTransform: "matrix(1 0 0 .4002 0 51.944)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.2974
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-50.24 68.73c0 0.97-0.34 1.91-0.96 2.64-3.22 3.78-13.75 16-37.15 16-23.42 0-33.71-12.24-36.84-16-0.61-0.73-0.93-1.65-0.93-2.6l-0.99-29.03h77.87l-1 28.99z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m-50.19 56.25-36.08 17.75c-1.79 0.91-3.91 0.88-5.67-0.06l-34.05-17.69-1.04-17.24h77.78l-0.94 17.24z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m-91.9 70.58-53.93-28.17c-0.67-0.35-1.09-1.03-1.1-1.79l-0.07-4.76 115.73-0.32-0.05 4.96c-0.01 0.76-0.43 1.45-1.1 1.8l-54.01 28.28c-1.71 0.85-3.74 0.86-5.47 0z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: -89.126,
        x2: -89.126,
        y1: -1.9017,
        y2: 56.26,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.0033283
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.5852
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-91.9 64.59-53.91-26.8c-1.55-0.77-1.51-3 0.07-3.7l54.09-24.29c1.59-0.72 3.42-0.72 5.01-0.01l54.13 24.02c1.58 0.7 1.64 2.93 0.09 3.7l-53.99 27.07c-1.73 0.87-3.76 0.87-5.49 0.01z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-88.56 12.25c0.42 0 0.82 0.08 1.2 0.25l53.59 23.69-0.04 3.77-17.15 8.71c-0.97 0.49-1.6 1.48-1.64 2.57l-0.6 17.43v0.1c0 0.26-0.05 0.39-0.21 0.58l-0.18 0.21c-3.13 3.68-12.66 14.87-34.26 14.87-10.3 0-24.71-2.55-34.82-14.72-0.25-0.3-0.43-0.73-0.44-0.88v-0.11l-0.6-16.37c-0.04-1.07-0.64-2.03-1.59-2.54l-18.14-9.67-0.05-3.38 53.56-24.23c0.44-0.18 0.91-0.28 1.37-0.28m0-3c-0.89 0-1.77 0.19-2.6 0.56l-54.09 24.35c-0.77 0.35-1.17 0.84-1.2 1.84h-0.05l0.07 4.72c0.01 0.75 0.43 1.42 1.1 1.77l18.62 9.96 0.6 16.38c0 0.95 0.52 2.07 1.13 2.8 3.13 3.77 13.71 15.81 37.12 15.81 23.4 0 33.5-12.36 36.72-16.13 0.63-0.74 0.93-1.56 0.93-2.53l0.6-17.43 17.69-8.99c0.67-0.35 1.09-1.34 1.1-2.1l0.05-5.26h-0.04c-0.05 0-0.44-1.1-1.2-1.43l-54.14-23.87c-0.77-0.34-1.59-0.45-2.41-0.45zm57.79 25.75z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-32.3 99.17c-1.37 0-2.48-1.11-2.48-2.48v-59.63c0-1.37 1.11-2.48 2.48-2.48s2.48 1.11 2.48 2.48v59.63c0 1.37-1.11 2.48-2.48 2.48z",
      fill: "#FFB300"
    }),
    _react2.default.createElement("path", {
      d:
        "m-26.5 90.41c0-2.93-2.37-5.3-5.3-5.3s-4.89 2.37-4.89 5.3c0 1.31 0.69 2.49 1.69 3.41v3.69c0 4.18-2.97 8.31-5.53 11.61-0.77 1-1.58 2.06-1.62 3.03-0.13 2.9 4.81 6.72 7.66 6.72 2.84 0 3.16-1.88 5.04-4.88 2.19-7 1.7-16.29 1.43-19.61 0.94-0.94 1.52-2.52 1.52-3.97z",
      fill: "#FFB300"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-31.8 87.11c1.82 0 3.3 1.48 3.3 3.3 0 0.84-0.32 1.59-0.95 2.23-0.41 0.41-0.61 0.99-0.57 1.57 0.27 3.33 0.69 11.73-1.27 18.26-0.38 0.62-0.7 1.2-0.99 1.72-1.16 2.1-1.4 2.34-2.33 2.34-1.1 0-3.32-1.05-4.77-2.56-0.76-0.8-1.02-1.42-1-1.72 0.01-0.16 0.04-0.76 0.92-1.89 3.71-4.77 5.45-8.97 5.45-12.84v-3.69c0-0.56-0.18-1.09-0.59-1.47-0.36-0.33-0.57-0.78-0.57-1.94 0.01-1.83 1.54-3.31 3.37-3.31m0-2c-2.93 0-5.39 2.37-5.39 5.3 0 1.31 0.19 2.49 1.19 3.41v3.69c0 4.18-2.47 8.31-5.03 11.61-0.77 1-1.33 2.06-1.37 3.03-0.13 2.9 4.94 6.22 7.78 6.22s3.28-2.38 5.17-5.38c2.19-7 1.7-15.79 1.43-19.11 0.94-0.96 1.52-2.11 1.52-3.56 0-2.91-2.37-5.21-5.3-5.21z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-90.35 36.61c0-1.37 1.11-2.48 2.48-2.48h55.39c1.37 0 2.48 1.11 2.48 2.48s-1.11 2.48-2.48 2.48h-55.39c-1.37 0-2.48-1.11-2.48-2.48z",
      fill: "#FFCA28"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: -86.781,
        cy: 34.177,
        r: 11.894,
        gradientTransform: "matrix(1 0 0 .6605 0 11.604)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.9968
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: -87.59,
      cy: 36.63,
      rx: 6.3,
      ry: 4.45,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-87.59 34.18c2.46 0 4.3 1.29 4.3 2.45s-1.84 2.45-4.3 2.45-4.3-1.29-4.3-2.45 1.83-2.45 4.3-2.45m0-2c-3.48 0-6.3 1.99-6.3 4.45s2.82 4.45 6.3 4.45 6.3-1.99 6.3-4.45-2.82-4.45-6.3-4.45z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.998,
        x2: 63.998,
        y1: 46.167,
        y2: 79.5,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.7026
      })
    ),
    _react2.default.createElement("path", {
      d: "M102,66c0,0-10.7,11.81-38.17,11.81S26,66,26,66V40.32h76V66z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("polygon", {
      points: "63.05 59.75 3.96 40.37 3.87 36.53 122.13 36.25 122.14 40.28",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.08,
        x2: 63.08,
        y1: 4.3333,
        y2: 42.834,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.7151
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.05 55.91 3.96 36.53 63.05 20.76 122.2 36.25",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.13 23.92 55.27 14.44-17.35 5.74c-1.22 0.4-2.05 1.55-2.05 2.84v17.75c-2.87 2.44-13.64 10.12-35.19 10.12-21.56 0-32.05-7.69-34.81-10.09v-17.09c0-1.3-0.83-2.44-2.06-2.85l-18.86-6.21 55.05-14.65m-0.01-3.11-59.15 15.75-0.01 3.81 22.04 7.26v18.37s10.45 11.81 37.81 11.81 38.19-11.81 38.19-11.81v-19.06l20.14-6.66-0.01-4.01 0.07-0.02-59.08-15.44z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120.19 35.3h-55.65c-0.98 0-1.89 0.67-2.05 1.64-0.2 1.23 0.75 2.3 1.94 2.3h51.79c1.1 0 2 0.9 2 2v55.02c0 0.98 0.67 1.89 1.64 2.05 1.23 0.2 2.3-0.75 2.3-1.94v-59.1c0-1.09-0.88-1.97-1.97-1.97z",
      fill: "#FFB300"
    }),
    _react2.default.createElement("path", {
      d:
        "m120.19 98.34c-1.09 0-1.97-0.88-1.97-1.97v-59.1c0-1.09 0.88-1.97 1.97-1.97s1.97 0.88 1.97 1.97v59.1c0 1.09-0.88 1.97-1.97 1.97z",
      fill: "#FFB300"
    }),
    _react2.default.createElement("path", {
      d:
        "m118.19 107.24c-2.18 0-6.04-2.72-5.94-4.94 0.03-0.74 0.49-1.56 1.08-2.32 1.96-2.52 3.92-5.69 3.92-8.89v-3.55c0-1.1 0.9-2 2-2h1.88c1.1 0 2 0.9 2 2 0 0 1.08 9.35-1 15.76-1.45 2.19-1.77 3.94-3.94 3.94z",
      fill: "#FFB300"
    }),
    _react2.default.createElement("circle", {
      cx: 120.24,
      cy: 85.23,
      r: 4.06,
      fill: "#FFB300"
    }),
    _react2.default.createElement("path", {
      d:
        "m120.19 98.34c-1.09 0-1.97-0.88-1.97-1.97v-59.1c0-1.09 0.88-1.97 1.97-1.97s1.97 0.88 1.97 1.97v59.1c0 1.09-0.88 1.97-1.97 1.97z",
      fill: "#FFB300"
    }),
    _react2.default.createElement("path", {
      d:
        "m118.19 107.24c-2.18 0-6.04-2.72-5.94-4.94 0.03-0.74 0.49-1.56 1.08-2.32 1.96-2.52 3.92-5.69 3.92-8.89v-3.55c0-1.1 0.9-2 2-2h1.88c1.1 0 2 0.9 2 2 0 0 1.08 9.35-1 15.76-1.45 2.19-1.77 3.94-3.94 3.94z",
      fill: "#FFB300"
    }),
    _react2.default.createElement("circle", {
      cx: 120.24,
      cy: 85.23,
      r: 4.06,
      fill: "#FFB300"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.24 83.17c1.13 0 2.06 0.92 2.06 2.06 0 0.52-0.2 1.02-0.57 1.41-0.4 0.42-0.6 0.99-0.54 1.56 0.14 1.47 0.73 8.98-0.88 14.23-0.3 0.48-0.56 0.93-0.78 1.33-0.83 1.47-0.92 1.47-1.33 1.47-1.34 0-3.9-2-3.94-2.85 0 0-0.09-0.37 0.54-1.18 2.92-3.76 4.22-7.06 4.22-10.11v-3.15c0-0.5-0.06-0.98-0.39-1.34-0.25-0.27-0.48-0.73-0.48-1.37-0.03-1.14 0.96-2.06 2.09-2.06m0-2c-2.24 0-4.18 1.82-4.18 4.06 0 1.05 0.94 1.99 0.94 2.71v3.15c0 3.2-1.83 6.36-3.8 8.89-0.59 0.76-0.99 1.58-1.02 2.32-0.1 2.22 3.79 4.94 5.97 4.94s2.51-1.75 3.96-3.94c1.8-5.56 1.24-13.31 1.06-15.28 0.69-0.73 1.13-1.71 1.13-2.79-0.01-2.24-1.82-4.06-4.06-4.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m62.47 37.27c0-1.09 0.88-1.97 1.97-1.97h55.76c1.09 0 1.97 0.88 1.97 1.97s-0.88 1.97-1.97 1.97h-55.76c-1.09 0-1.97-0.88-1.97-1.97z",
      fill: "#FFCA28"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64.135,
        cy: 35.72,
        r: 7.6865,
        gradientTransform: "matrix(1 0 0 .6605 0 12.128)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.9968
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 36.8,
      rx: 6.15,
      ry: 4.34,
      fill: "url(#a)"
    })
  );
}

exports.default = MortarBoard;
