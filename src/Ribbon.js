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

function Ribbon(props) {
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
        id: "e",
        cx: 38.896,
        cy: 79.652,
        r: 37.939,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.4173
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.841
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.68 122.97-10.47-15.34c-0.86-1.25-2.51-1.67-3.86-0.97l-14.9 7.72c-1.69 0.4-3.05-1.38-2.22-2.9 0 0 4.71-22.68 16.98-44.53s24.76-31.83 24.76-31.83l17.84 4.87s-8.69 10.31-15.76 37.36-8.62 45.41-8.62 45.41c-0.53 1.8-3.02 1.94-3.75 0.21z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 89.66,
        cy: 79.652,
        r: 37.939,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.4173
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.841
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m87.88 122.97 10.47-15.34c0.86-1.25 2.51-1.67 3.86-0.97l14.9 7.72c1.69 0.4 3.05-1.38 2.22-2.9 0 0-4.71-22.68-16.98-44.53s-24.77-31.84-24.77-31.84l-17.84 4.87s8.69 10.31 15.76 37.36 8.62 45.41 8.62 45.41c0.53 1.81 3.03 1.95 3.76 0.22z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m51.73 38.43 12.21 3.34c-3.22 5.18-8.9 16.11-13.79 34.82-5.42 20.73-7.61 36.26-8.37 42.69l-9.1-13.34c-1.12-1.64-2.97-2.62-4.96-2.62-0.95 0-1.91 0.23-2.76 0.67l-12.42 6.44c1.33-5.56 6.26-24.19 16.28-42.02 9.72-17.28 19.64-27.02 22.91-29.98m-0.76-3.32s-12.48 9.99-24.76 31.83-16.98 44.53-16.98 44.53c-0.75 1.37 0.29 2.96 1.74 2.96 0.16 0 0.32-0.02 0.48-0.06l14.9-7.72c0.44-0.23 0.91-0.34 1.38-0.34 0.96 0 1.9 0.47 2.48 1.31l10.47 15.34c0.35 0.82 1.09 1.22 1.84 1.22 0.82 0 1.64-0.49 1.92-1.44 0 0 1.54-18.36 8.62-45.41 7.07-27.05 15.76-37.36 15.76-37.36l-17.85-4.86z",
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
          "m76.83 38.43c3.27 2.96 13.19 12.7 22.9 29.98 10.02 17.83 14.95 36.46 16.28 42.02l-12.42-6.44c-0.85-0.44-1.8-0.67-2.76-0.67-1.99 0-3.84 0.98-4.96 2.62l-9.1 13.34c-0.75-6.43-2.94-21.96-8.37-42.69-4.89-18.71-10.57-29.64-13.79-34.82l12.22-3.34m0.75-3.32-17.84 4.87s8.69 10.31 15.76 37.36 8.62 45.41 8.62 45.41c0.28 0.95 1.1 1.44 1.92 1.44 0.74 0 1.49-0.4 1.84-1.22l10.47-15.34c0.58-0.84 1.52-1.31 2.48-1.31 0.47 0 0.94 0.11 1.38 0.34l14.9 7.72c0.16 0.04 0.32 0.06 0.48 0.06 1.45 0 2.49-1.59 1.74-2.96 0 0-4.71-22.68-16.98-44.53-12.28-21.85-24.77-31.84-24.77-31.84z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 54.938,
        cy: 31.144,
        r: 31.424,
        fx: 49.951,
        fy: 31.164,
        gradientTransform: "matrix(-1 0 0 .8204 80.896 5.5932)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.4173
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.841
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m16.04 61.76c-8.31 1.74-12.91-2.97-12.06-10.74l0.8-7.31c1.04-9.56 0.75-19.25-0.87-28.71-1-5.79 2.85-11.18 7.94-11.09 7.11 0.14 17.27 1.29 27.68 5.69 6.68 2.83 13.21 6.55 18.87 10.18 6.4 4.11 7.65 17-4.54 24.68-19.72 12.42-28.52 15.36-37.82 17.3z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 101.94,
        cy: 31.144,
        r: 31.424,
        fx: 96.951,
        fy: 31.164,
        gradientTransform: "matrix(1 0 0 .8204 0 5.5932)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.4173
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.841
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m111.85 61.76c8.31 1.73 12.91-2.97 12.07-10.74l-0.8-7.31c-1.04-9.56-0.75-19.25 0.87-28.71 0.99-5.8-2.86-11.19-7.95-11.09-7.1 0.14-17.27 1.29-27.67 5.69-6.68 2.83-13.21 6.55-18.87 10.18-6.4 4.11-7.65 17 4.54 24.68 19.71 12.42 28.51 15.36 37.81 17.3z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m11.72 6.91h0.08c6.54 0.12 16.45 1.17 26.56 5.45 5.72 2.42 11.92 5.77 18.42 9.94 2.1 1.34 3.39 4.13 3.38 7.26-0.02 4.7-2.9 9.21-7.9 12.36-20.23 12.75-28.65 15.19-36.82 16.9-0.94 0.2-1.83 0.3-2.65 0.3-1.97 0-3.47-0.56-4.45-1.65-1.17-1.31-1.66-3.48-1.37-6.12l0.8-7.31c1.07-9.86 0.77-19.79-0.9-29.54-0.37-2.15 0.18-4.35 1.47-5.88 0.92-1.1 2.12-1.71 3.38-1.71m0-3c-5.02 0-8.8 5.35-7.82 11.09 1.62 9.45 1.91 19.15 0.87 28.71l-0.8 7.31c-0.73 6.68 2.58 11.1 8.81 11.1 1.01 0 2.1-0.12 3.26-0.36 9.3-1.94 18.1-4.88 37.81-17.3 12.19-7.68 10.95-20.57 4.54-24.68-5.66-3.63-12.19-7.35-18.87-10.18-10.4-4.4-20.56-5.55-27.67-5.69h-0.13z",
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
          "m116.18 6.91c1.26 0 2.46 0.61 3.39 1.71 1.29 1.53 1.84 3.73 1.47 5.88-1.67 9.74-1.97 19.68-0.9 29.54l0.8 7.31c0.29 2.64-0.2 4.81-1.37 6.12-0.98 1.1-2.48 1.65-4.45 1.65-0.82 0-1.71-0.1-2.65-0.3-8.18-1.7-16.59-4.15-36.82-16.9-5-3.15-7.88-7.65-7.9-12.36-0.01-3.13 1.28-5.92 3.38-7.26 6.5-4.17 12.7-7.52 18.42-9.94 10.11-4.29 20.03-5.33 26.56-5.45h0.07m0-3h-0.13c-7.11 0.14-17.28 1.29-27.68 5.69-6.68 2.83-13.21 6.55-18.87 10.18-6.4 4.11-7.65 17 4.54 24.68 19.71 12.42 28.51 15.36 37.81 17.3 1.16 0.24 2.25 0.36 3.26 0.36 6.23 0 9.53-4.42 8.81-11.1l-0.8-7.31c-1.04-9.56-0.75-19.25 0.87-28.71 0.99-5.74-2.79-11.09-7.81-11.09z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m30.2 33.02c0 3.56 5.19 6.44 11.59 6.44s15.23-6.44 15.23-6.44-8.82-6.44-15.23-6.44-11.59 2.88-11.59 6.44z",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.7 33.02c0 3.56-5.19 6.44-11.59 6.44s-15.23-6.44-15.23-6.44 8.82-6.44 15.23-6.44 11.59 2.88 11.59 6.44z",
      fill: "#C62828"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64.161,
        cy: 27.124,
        r: 13.743,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.2131
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0.8956
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.22 48.14h-7.45c-4.03 0-7.29-3.26-7.29-7.29v-17.45c0-4.03 3.26-7.29 7.29-7.29h7.45c4.03 0 7.29 3.26 7.29 7.29v17.45c0 4.02-3.27 7.29-7.29 7.29z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m68.22 19.11c2.37 0 4.29 1.92 4.29 4.29v17.45c0 2.37-1.92 4.29-4.29 4.29h-7.45c-2.37 0-4.29-1.92-4.29-4.29v-17.45c0-2.37 1.92-4.29 4.29-4.29h7.45m0-3h-7.45c-4.03 0-7.29 3.26-7.29 7.29v17.45c0 4.03 3.26 7.29 7.29 7.29h7.45c4.03 0 7.29-3.26 7.29-7.29v-17.45c0-4.03-3.27-7.29-7.29-7.29z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Ribbon;
