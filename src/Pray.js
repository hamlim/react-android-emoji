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

function Pray(props) {
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
        id: "f",
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
        xlinkHref: "#f"
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
          x1: 41.241,
          x2: 41.241,
          y1: 114.68,
          y2: 5.5791,
          gradientTransform: "matrix(1.0084 0 0 1 -1.2118 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m18.39 90.92c-0.07-0.06-0.14-0.12-0.23-0.17-0.19-0.12-0.31-0.28-0.34-0.48-0.03-0.18 0-0.37 0.09-0.56 2.82-1.34 19.41-9.28 23.6-13.09 1.21-1.1 1.71-3.51 2.74-8.86 0.22-1.16 0.46-2.4 0.72-3.7 0.24-1.19 0.9-3.42 1.59-5.78 0.95-3.24 1.94-6.59 2.27-8.59 2.74-16.59 5.02-37.13 5.04-37.34 0.5-4.74 1.56-6.76 3.55-6.76 3.17 0 5.31 1.9 5.31 4.74l0.21 79.03c0 5.31-1.81 6-4.32 6.96-1.46 0.56-3.12 1.19-4.32 2.8-2.3 3.08-4.76 7.15-7.14 11.1-0.9 1.5-1.83 3.03-2.73 4.48l-26.04-23.78z",
        fill: "url(#e)"
      }),
      _react2.default.createElement("path", {
        d:
          "m57.43 7.08c2.35 0 3.81 1.24 3.81 3.25l0.21 79.02c0 4.28-1.05 4.68-3.36 5.56-1.57 0.6-3.52 1.34-4.99 3.3-2.35 3.14-4.82 7.25-7.22 11.22-0.59 0.97-1.18 1.96-1.77 2.93l-24.1-21.99c5.15-2.47 18.62-9.1 22.51-12.64 1.63-1.48 2.19-4.4 3.2-9.68 0.22-1.15 0.46-2.39 0.72-3.69 0.23-1.13 0.91-3.43 1.56-5.65 0.97-3.29 1.97-6.68 2.31-8.77 2.74-16.63 5.03-37.21 5.05-37.44 0.39-3.65 1.06-5.42 2.07-5.42m0-3c-3.97 0-4.7 4.87-5.04 8.09 0 0-2.27 20.52-5.03 37.26-0.56 3.39-3.27 11.44-3.85 14.32-1.23 6.04-1.86 10.71-3 11.75-4.37 3.97-23.61 13.02-23.61 13.02-0.94 1.19-0.73 2.76 0.48 3.5l27.37 24.98c3.5-5.5 7.31-12.4 10.75-17 2.75-3.68 8.94-1 8.94-10.66l-0.21-79.02c0-3.44-2.58-6.24-6.8-6.24z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: -2.9132,
          x2: 55.292,
          y1: 103.73,
          y2: 103.73,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m47.57 130.66-50.49-0.56 0.56-38.82 31.74-14.25c1.49-0.66 3.22 0.17 3.62 1.75 0.95 3.71 3.16 10.29 8 16.89 4.56 6.22 9.48 11.02 12.54 13.76 1.76 1.58 2.26 4.13 1.21 6.25l-12.16 9.35 4.98 5.63z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("path", {
        d: "m52.6 18s0.82-5.17 5.52-5.17 5.02 5.17 5.02 5.17",
        fill: "none",
        stroke: "#4A2F27",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 2
      }),
      _react2.default.createElement("path", {
        d: "m51.11 31s1.03-5.65 6.01-5.65 6.12 5.65 6.12 5.65",
        fill: "none",
        stroke: "#4A2F27",
        strokeLinecap: "round",
        strokeLinejoin: "round",
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
            "m30.21 79.95c1 3.75 3.35 10.64 8.37 17.49 4.64 6.32 9.61 11.22 12.96 14.22 0.6 0.54 0.86 1.36 0.71 2.13l-11.42 8.33c-0.67 0.49-1.1 1.22-1.21 2.04s0.13 1.64 0.65 2.28l0.94 1.15-41.07-0.46 0.49-33.89 29.58-13.29m0.25-3.15c-0.36 0-0.72 0.07-1.07 0.23l-31.74 14.25-0.56 38.82 50.49 0.56-4.99-6.12 12.16-8.86c1.05-2.12 0.56-4.68-1.21-6.25-3.06-2.74-7.97-7.53-12.54-13.76-4.84-6.59-7.05-13.17-8-16.89-0.3-1.21-1.39-1.98-2.54-1.98z",
          fill: "#424242"
        })
      )
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
          x1: 334.79,
          x2: 334.79,
          y1: 114.68,
          y2: 5.5791,
          gradientTransform: "matrix(-1.0084 0 0 1 424.74 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#5C4037",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#70534A",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m83.09 114.68c-0.9-1.46-1.83-2.99-2.73-4.48-2.38-3.94-4.83-8.02-7.14-11.1-1.2-1.61-2.86-2.24-4.32-2.8-2.51-0.96-4.32-1.65-4.32-6.96l0.21-79.02c0-2.84 2.13-4.74 5.31-4.74 1.99 0 3.05 2.02 3.55 6.75 0.02 0.21 2.31 20.76 5.04 37.35 0.33 2 1.32 5.35 2.27 8.59 0.69 2.36 1.35 4.59 1.59 5.78 0.27 1.31 0.5 2.56 0.73 3.72 1.02 5.34 1.52 7.74 2.73 8.84 4.19 3.81 20.78 11.75 23.6 13.09 0.09 0.19 0.13 0.39 0.1 0.56-0.04 0.2-0.15 0.37-0.34 0.48-0.08 0.05-0.16 0.11-0.23 0.17l-26.05 23.77z",
        fill: "url(#c)"
      }),
      _react2.default.createElement("path", {
        d:
          "m70.1 7.08c1 0 1.68 1.77 2.06 5.42 0.02 0.21 2.31 20.79 5.05 37.42 0.35 2.09 1.34 5.49 2.31 8.77 0.65 2.22 1.33 4.52 1.56 5.65 0.26 1.3 0.5 2.54 0.72 3.69 1.01 5.29 1.57 8.2 3.2 9.68 3.89 3.54 17.36 10.17 22.51 12.64l-24.1 21.99c-0.59-0.97-1.19-1.96-1.77-2.93-2.4-3.97-4.87-8.08-7.22-11.22-1.46-1.96-3.42-2.7-4.99-3.3-2.3-0.88-3.36-1.28-3.36-5.55l0.21-79.03c0.01-1.99 1.47-3.23 3.82-3.23m0-3c-4.22 0-6.81 2.8-6.81 6.24l-0.21 79.02c0 9.66 6.19 6.98 8.94 10.66 3.44 4.6 7.25 11.5 10.75 17l27.37-24.97c1.21-0.74 1.43-2.31 0.48-3.5 0 0-19.24-9.05-23.61-13.02-1.14-1.04-1.77-5.71-3-11.75-0.58-2.88-3.29-10.93-3.85-14.32-2.76-16.74-5.03-37.26-5.03-37.26-0.32-3.23-1.06-8.1-5.03-8.1z",
        fill: "#4A2F27"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 293.09,
          x2: 351.29,
          y1: 103.73,
          y2: 103.73,
          gradientTransform: "matrix(-1 0 0 1 423.53 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m79.95 130.66 50.49-0.56-0.56-38.82-31.74-14.25c-1.49-0.66-3.22 0.17-3.62 1.75-0.95 3.71-3.16 10.29-8 16.89-4.56 6.22-9.48 11.02-12.54 13.76-1.76 1.58-2.26 4.13-1.21 6.25l12.16 9.35-4.98 5.63z",
        fill: "url(#b)"
      }),
      _react2.default.createElement("path", {
        d: "m74.93 18s-0.82-5.17-5.52-5.17-5.02 5.17-5.02 5.17",
        fill: "none",
        stroke: "#4A2F27",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 2
      }),
      _react2.default.createElement("path", {
        d: "m76.42 31s-1.03-5.65-6.01-5.65c-4.99 0-6.12 5.65-6.12 5.65",
        fill: "none",
        stroke: "#4A2F27",
        strokeLinecap: "round",
        strokeLinejoin: "round",
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
            "m97.32 79.95 29.59 13.28 0.49 33.89-41.07 0.46 0.94-1.15c0.52-0.64 0.76-1.46 0.65-2.28s-0.54-1.55-1.21-2.04l-11.42-8.33c-0.15-0.77 0.11-1.59 0.71-2.13 3.35-3 8.32-7.9 12.96-14.22 5.01-6.84 7.36-13.73 8.36-17.48m-0.25-3.15c-1.16 0-2.24 0.77-2.55 1.98-0.95 3.71-3.16 10.29-8 16.89-4.56 6.22-9.48 11.02-12.54 13.76-1.76 1.58-2.26 4.13-1.21 6.25l12.16 8.86-4.99 6.12 50.49-0.56-0.56-38.82-31.73-14.25c-0.35-0.16-0.71-0.23-1.07-0.23z",
          fill: "#424242"
        })
      )
    )
  );
}

exports.default = Pray;
