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

function Scarf(props) {
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
      "linearGradient",
      {
        id: "i",
        x1: 43.213,
        x2: 28.042,
        y1: 47.765,
        y2: 114.11,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.9955
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m27.58 109.79c-15.61-4.66-15.36-8.88-14.78-11.13l17.98-69.11c0.56-2.14 2.53-3.43 4.46-2.92l24.12 6.41c1.93 0.51 3.11 2.64 2.69 4.81l-13.85 70.21c-0.45 2.28-5.01 6.39-20.62 1.73z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m34.39 29.52c0.03 0 0.05 0 0.08 0.01l24.12 6.41c0.3 0.08 0.65 0.64 0.51 1.33l-13.83 70.14c-0.23 0.42-1.67 1.5-5.52 1.5-3.05 0-6.85-0.67-11.31-2-7.82-2.33-10.92-4.36-12.14-5.66-0.84-0.89-0.74-1.29-0.59-1.84l17.98-69.11c0.13-0.54 0.49-0.78 0.7-0.78m0-3c-1.63 0-3.13 1.21-3.61 3.03l-17.98 69.11c-0.58 2.24-0.83 6.47 14.78 11.13 5.19 1.55 9.16 2.13 12.17 2.13 6.02 0 8.15-2.33 8.45-3.85l13.84-70.21c0.43-2.17-0.76-4.3-2.69-4.81l-24.12-6.41c-0.28-0.09-0.56-0.12-0.84-0.12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "h",
        d:
          "m27.58 109.79c-15.61-4.66-15.36-8.88-14.78-11.13l17.98-69.11c0.56-2.14 2.53-3.43 4.46-2.92l24.12 6.41c1.93 0.51 3.11 2.64 2.69 4.81l-13.85 70.21c-0.45 2.28-5.01 6.39-20.62 1.73z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#h"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 41.479,
        x2: 67.45,
        y1: 62.514,
        y2: 120.63,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.9955
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m43.32 122.8c-15.94-3.34-16.05-7.58-15.65-9.86l12.17-70.37c0.38-2.18 2.24-3.63 4.2-3.28l24.57 4.38c1.96 0.35 3.32 2.37 3.08 4.57l-7.96 71.12c-0.26 2.32-4.46 6.78-20.41 3.44z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m43.32 122.8c-15.94-3.34-16.05-7.58-15.65-9.86l12.17-70.37c0.38-2.18 2.24-3.63 4.2-3.28l24.57 4.38c1.96 0.35 3.32 2.37 3.08 4.57l-7.96 71.12c-0.26 2.32-4.46 6.78-20.41 3.44z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)"
      },
      _react2.default.createElement("path", {
        d:
          "m61.89 83.67c-3.65 0.2-8.22 0.19-13.48-0.38-12.64-1.36-20-7.26-20.31-7.51-2.16-1.77-2.67-8.31-0.91-10.48 1.76-2.15 4.92-2.48 7.08-0.74 0.16 0.12 6.7 4 16.1 5.01 11.73 1.26 18.32-0.31 18.39-0.33 2.69-0.67 5.45 0.95 6.14 3.65s-0.74 8.81-3.44 9.5c-0.22 0.07-3.72 0.95-9.57 1.28z",
        fill: "#C4D100"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)"
      },
      _react2.default.createElement("path", {
        d:
          "m58.8 110.41c-3.65 0.2-8.22 0.19-13.48-0.38-12.64-1.36-20-7.26-20.31-7.51-2.16-1.77-2.67-8.31-0.91-10.48 1.76-2.15 4.92-2.48 7.08-0.74 0.16 0.12 6.7 4 16.1 5.01 11.73 1.26 18.32-0.31 18.39-0.33 2.69-0.67 5.45 0.95 6.14 3.65s-0.74 8.81-3.44 9.5c-0.21 0.07-3.71 0.95-9.57 1.28z",
        fill: "#C4D100"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m43.46 42.24c0.02 0 0.04 0 0.06 0.01l24.57 4.38c0.31 0.05 0.7 0.58 0.62 1.29l-7.95 71.05c-0.22 0.47-1.98 2.04-7.37 2.04-2.67 0-5.85-0.38-9.44-1.14-7.98-1.67-11.24-3.44-12.57-4.63-0.91-0.82-0.84-1.22-0.74-1.78l12.16-70.38c0.1-0.55 0.44-0.84 0.66-0.84m0-3c-1.74 0-3.28 1.37-3.62 3.33l-12.17 70.37c-0.39 2.28-0.29 6.52 15.65 9.86 4.08 0.86 7.39 1.2 10.06 1.2 7.77 0 10.15-2.91 10.34-4.63l7.96-71.12c0.25-2.2-1.11-4.22-3.08-4.57l-24.57-4.38c-0.18-0.05-0.38-0.06-0.57-0.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 63.676,
        x2: 63.676,
        y1: 21.167,
        y2: 66.61,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.9955
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.52 62.29c-39.8 0-49.68-16.99-51.76-22.19-2.71-6.79 0.22-14.65 6.54-17.56 5.93-2.73 12.75-0.14 15.81 5.8 0.87 0.98 7.25 7.21 29.41 7.21 22.46 0 28.96-6.41 29.81-7.37 3.15-5.92 10.05-8.4 15.95-5.53 6.27 3.04 9.05 10.97 6.21 17.7-2.17 5.14-12.34 21.94-51.97 21.94z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m63.52 62.29c-39.8 0-49.68-16.99-51.76-22.19-2.71-6.79 0.22-14.65 6.54-17.56 5.93-2.73 12.75-0.14 15.81 5.8 0.87 0.98 7.25 7.21 29.41 7.21 22.46 0 28.96-6.41 29.81-7.37 3.15-5.92 10.05-8.4 15.95-5.53 6.27 3.04 9.05 10.97 6.21 17.7-2.17 5.14-12.34 21.94-51.97 21.94z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.9 64.95h-24.62s-2.26-8.04 0.29-19.39c2.62-11.65 5.72-13.77 5.72-13.77h12.16s3.68 3.28 5.57 13.18c1.99 10.37 0.88 19.98 0.88 19.98z",
      clipPath: "url(#a)",
      fill: "#C4D100"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m35.07 59.3-12.79-6.16s-3.27-10.65 2.33-17.77c6.39-8.12 13.43-10.54 13.43-10.54l10.17 6.69s-6.34 4.16-9.32 11.72c-2.19 5.55-2.24 10.68-1.55 14.32 0.24 1.29-1.08 2.32-2.27 1.74z",
        fill: "#C4D100"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m94.42 59.3 12.79-6.16s0.89-9.76-3.33-17.77c-4.83-9.16-12.84-11.31-12.84-11.31l-9.66 6.69s6.24 4.93 9.23 12.49c2.19 5.55 2.24 10.68 1.55 14.32-0.25 1.29 1.07 2.32 2.26 1.74z",
        fill: "#C4D100"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 64.333,
        x2: 64.333,
        y1: 36.541,
        y2: 4,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#558B2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.9955
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.21 36.54c-30.88 0-38.75-12.6-40.43-16.46-2.46-5.67-0.16-12.4 5.15-15.03 4.15-2.06 8.9-1 11.96 2.26 2.02 2.16 4.46 3.89 7.3 4.73 3.39 1 8.5 1.87 16.03 1.87 7.56 0 12.71-0.88 16.15-1.89 2.91-0.86 5.42-2.63 7.53-4.82 3.11-3.23 7.91-4.2 12.04-2.04 5.25 2.75 7.43 9.53 4.85 15.14-1.75 3.81-9.84 16.24-40.58 16.24z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m33.38 7c1.97 0 3.9 0.86 5.31 2.37 2.58 2.75 5.48 4.62 8.64 5.55 4.48 1.32 10.16 1.99 16.88 1.99 6.75 0 12.47-0.68 17-2.01 3.18-0.94 6.15-2.83 8.84-5.62 1.4-1.45 3.31-2.28 5.24-2.28 1.13 0 2.23 0.27 3.26 0.81 3.85 2.02 5.43 7.05 3.52 11.23-0.09 0.2-0.25 0.51-0.48 0.92-0.53 0.93-0.53 2.07 0 3s1.52 1.5 2.59 1.5c1.33 0 2.61 0.3 3.8 0.88 4.85 2.35 6.98 8.56 4.76 13.83-1.99 4.72-11.42 20.11-49.21 20.11-37.91 0-47.07-15.54-48.98-20.3-2.13-5.32 0.12-11.47 5.01-13.72 1.15-0.53 2.37-0.8 3.63-0.8 0.33 0 0.67 0.02 1 0.06 0.11 0.01 0.23 0.02 0.34 0.02 1 0 1.95-0.5 2.51-1.35 0.62-0.95 0.66-2.16 0.09-3.15-0.29-0.51-0.48-0.91-0.59-1.16-1.83-4.22-0.16-9.22 3.73-11.14 0.99-0.49 2.04-0.74 3.11-0.74m0-3c-1.49 0-3.01 0.34-4.45 1.06-5.31 2.63-7.61 9.36-5.15 15.03 0.17 0.4 0.42 0.9 0.74 1.46-0.45-0.05-0.9-0.08-1.35-0.08-1.63 0-3.29 0.34-4.88 1.07-6.33 2.91-9.25 10.77-6.54 17.56 2.08 5.2 11.96 22.19 51.76 22.19 39.63 0 49.8-16.8 51.97-21.95 2.84-6.73 0.06-14.65-6.21-17.7-1.66-0.81-3.39-1.18-5.1-1.18 0.26-0.44 0.46-0.84 0.61-1.17 2.57-5.61 0.4-12.39-4.85-15.14-1.49-0.78-3.08-1.15-4.64-1.15-2.74 0-5.41 1.14-7.4 3.2-2.1 2.19-4.61 3.96-7.53 4.82-3.44 1.01-8.59 1.89-16.15 1.89-7.54 0-12.65-0.87-16.03-1.87-2.84-0.84-5.28-2.57-7.3-4.73-1.99-2.12-4.7-3.31-7.5-3.31z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "j",
        d:
          "m64.21 36.54c-30.88 0-38.75-12.6-40.43-16.46-2.46-5.67-0.16-12.4 5.15-15.03 4.15-2.06 8.9-1 11.96 2.26 2.02 2.16 4.46 3.89 7.3 4.73 3.39 1 8.5 1.87 16.03 1.87 7.56 0 12.71-0.88 16.15-1.89 2.91-0.86 5.42-2.63 7.53-4.82 3.11-3.23 7.91-4.2 12.04-2.04 5.25 2.75 7.43 9.53 4.85 15.14-1.75 3.81-9.84 16.24-40.58 16.24z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#j"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m45.08 36.92s-2.35-7.71-1.08-14.42 8.33-10.92 8.33-10.92l-10.47-4.84s-3.68 0-8.42 7.91 0.04 16.12 0.04 16.12l11.58 5.97",
        fill: "#C4D100"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "m83 36.74 11.58-5.97s5.7-7.65 0.96-15.56-9.34-8.47-9.34-8.47l-10.4 5.7s6.82 2.33 8.68 7.36c2.63 7.08 0 14.03-1.48 16.94z",
        fill: "#C4D100"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73 37.75-17.25-0.17s-1.57-5.75-0.29-14.11c1.19-7.78 3.31-9.54 3.31-9.54h11.25s2.09 2.01 3.75 9.54c1.67 7.54-0.77 14.28-0.77 14.28z",
      clipPath: "url(#b)",
      fill: "#C4D100"
    })
  );
}

exports.default = Scarf;
