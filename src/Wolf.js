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

function Wolf(props) {
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
      d: "m38.26 16.81v0",
      fill: "#E59242"
    }),
    _react2.default.createElement("path", {
      d:
        "m41.85 54.44c-9.86 0-22.55-1.73-27.07-9.99-6.86-12.51-7.24-31.13-7.19-36.58 6.54 0.57 31.85 3.58 38.72 16.11 6.78 12.38 7.16 25.71 7.11 29.72-2.04 0.26-6.43 0.74-11.57 0.74z",
      fill: "#999"
    }),
    _react2.default.createElement("path", {
      d:
        "m9.09 9.51c3.16 0.33 8.36 1.03 13.92 2.42 7.93 1.99 18.19 5.82 21.98 12.76 5.99 10.94 6.85 22.71 6.92 27.68-2.27 0.26-5.91 0.58-10.06 0.58-18.02 0-23.87-5.77-25.76-9.21-6.11-11.16-6.94-27.45-7-34.23m-2.97-3.26s-1.02 23.66 7.34 38.93c4.88 8.91 18.17 10.77 28.39 10.77 7.29 0 13.02-0.94 13.02-0.94s1.11-16.48-7.25-31.75-41.5-17.01-41.5-17.01z",
      fill: "#666"
    }),
    _react2.default.createElement("path", {
      d:
        "m30.4 31.62c4.42 8.27-1.4 19.55-1.4 19.55s-13-2.12-17.43-10.39-2.16-19.55-2.16-19.55 16.57 2.12 20.99 10.39z",
      fill: "#666"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.15 54.44c-5.14 0-9.52-0.48-11.56-0.75-0.05-4.02 0.34-17.37 7.11-29.72 6.87-12.54 32.18-15.54 38.72-16.11 0.04 5.45-0.34 24.09-7.19 36.59-4.53 8.26-17.23 9.99-27.08 9.99z",
      fill: "#999"
    }),
    _react2.default.createElement("path", {
      d:
        "m118.91 9.51c-0.06 6.77-0.88 23.04-7.01 34.22-1.88 3.44-7.73 9.21-25.76 9.21-4.14 0-7.78-0.32-10.06-0.58 0.07-4.97 0.93-16.74 6.92-27.67 3.79-6.92 14-10.74 21.89-12.73 5.59-1.41 10.84-2.11 14.02-2.45m2.97-3.26s-33.14 1.73-41.5 17-7.25 31.75-7.25 31.75 5.73 0.94 13.02 0.94c10.22 0 23.51-1.85 28.39-10.77 8.36-15.26 7.34-38.92 7.34-38.92z",
      fill: "#666"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.54 32.57c-4.28 9.02 1.36 21.34 1.36 21.34s12.58-2.32 16.86-11.34 2.09-21.34 2.09-21.34-16.02 2.32-20.31 11.34z",
      fill: "#666"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.911,
        x2: 63.911,
        y1: 119.12,
        y2: 13.453,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#8F8F8F",
        offset: 0.0404
      }),
      _react2.default.createElement("stop", {
        stopColor: "#949494",
        offset: 0.0825
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ACACAC",
        offset: 0.3249
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BABABA",
        offset: 0.5504
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BFBFBF",
        offset: 0.7408
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.02 119.12c-12.59-0.15-23.82-8.02-32.02-13.76l-1.31-0.92c-7.81-5.44-16.63-8.37-25.54-8.5 9.83-19.88 9.78-20.85 9.74-21.41-0.05-0.79-0.71-1.53-1.5-1.53h-8.08l4.69-8.14c3.38-5.95 6.57-12.38 10.36-20.99 8.51-19.35 24.34-30.42 43.43-30.42l0.61 0.02c18.66 0.23 34.16 11.06 42.53 29.71 3.8 8.47 6.95 14.68 10.21 20.43l5.4 9.39h-8.5c-0.79 0-1.44 0.74-1.5 1.52-0.04 0.55-0.09 1.3 10.13 21.36-9.05 0.22-17.99 3.28-25.95 8.82-0.87 0.61-1.77 1.26-2.69 1.92-7.82 5.57-17.55 12.5-29.63 12.5h-0.38z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.78 14.99h0.59c18.05 0.22 33.06 10.72 41.18 28.81 3.82 8.5 6.99 15 10.28 20.8l4.13 7.4h-5.93c-1.57 0-2.88 1.1-2.99 2.67-0.07 1.02-0.12 1.55 9.24 19.96-8.53 0.65-16.91 3.68-24.42 8.91-0.88 0.61-1.78 1.24-2.7 1.89-7.65 5.44-17.16 12.21-28.76 12.21l-0.37-0.01c-12.13-0.15-23.14-7.86-31.18-13.49l-1.31-0.92c-7.37-5.14-15.62-8.11-24.02-8.68 8.99-18.23 8.94-18.85 8.87-19.86-0.12-1.58-1.42-2.68-3-2.68h-5.51l3.42-6.15c3.4-6 6.62-12.6 10.42-21.25 8.27-18.78 23.6-29.61 42.06-29.61m0-3c-21.65 0-37.05 13.71-44.8 31.35-3.13 7.12-6.45 14.16-10.29 20.92l-5 8.94c-0.43 0.75 0.1 1.8 0.95 1.8h8.75c0.06 1-7.12 15.9-9.61 20.93-0.37 0.75 0.22 1.56 1.22 1.56v-0.03c9 0 17.58 3.01 25.06 8.23 8.34 5.81 20.3 14.77 34.06 14.94h0.35c13.99 0 24.67-8.98 33.15-14.88 7.74-5.39 16.77-8.75 26.15-8.75h-0.01c0.62 0 1.02-0.33 0.73-0.89-2.35-4.61-10.51-20.11-10.45-21.11h8.78c1.02 0 1.66-1.24 1.15-2.14l-5.52-9.8c-3.75-6.61-7.03-13.51-10.15-20.46-7.68-17.1-22.67-30.34-43.89-30.6-0.21 0-0.42-0.01-0.63-0.01z",
      fill: "#8E8E8E"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 36.242,
        y2: 116.71,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.0035183
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCFCFC",
        offset: 0.2881
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E3E3E3",
        offset: 0.6668
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CDCDCD",
        offset: 0.8278
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3B3B3",
        offset: 0.9698
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m103.53 61.72c-0.3-8.06-2.3-19.68-9.66-23.9-10.57-6.05-21.07 6.43-20.94 17.1 0.16 13.96 12.58 30.69 2.93 43.84-2.77 3.78-6.85 5.51-11.85 5.43-5 0.08-8.76-1.65-11.54-5.43-9.65-13.15 2.51-29.88 2.68-43.84 0.13-10.67-10.43-23.15-20.99-17.09-7.37 4.22-9.38 15.84-9.69 23.9-0.55 14.78 3.92 29.55 13.85 40.12 8.33 8.86 15.68 14.66 25.68 14.86 8-0.2 17.68-6 26.02-14.87 9.93-10.57 14.07-25.34 13.51-40.12z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.19 107.6c-4.44 0-8.19-3.79-8.19-8.27v-7.33c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5v7.33c0 4.48-3.75 8.27-8.19 8.27-0.83 0-1.5 0.67-1.5 1.5s0.67 1.5 1.5 1.5c4.14 0 7.76-2.28 9.69-5.66 1.94 3.38 5.55 5.66 9.69 5.66 0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5z",
      fill: "#404040"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.688,
        x2: 63.688,
        y1: 84.332,
        y2: 94.426,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4D4D4D",
        offset: 0.1628
      }),
      _react2.default.createElement("stop", {
        stopColor: "#373737",
        offset: 0.3672
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0F0F0F",
        offset: 0.7836
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m57.47 84c-2.06 0-3.46 1.83-2.73 3.7 1.55 3.97 4.31 6.83 8.76 6.83 0.07 0 0.13-0.05 0.19-0.05 0.07 0 0.13-0.01 0.19-0.01 4.44 0 7.21-2.79 8.76-6.75 0.73-1.87-0.66-3.71-2.73-3.71h-12.44z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 39.77,
        cy: 64.92,
        rx: 6.49,
        ry: 6.3
      }),
      _react2.default.createElement("ellipse", {
        cx: 88.77,
        cy: 64.92,
        rx: 6.49,
        ry: 6.3
      }),
      _react2.default.createElement("path", {
        d:
          "m31.87 57.37c3.59-1.11 7.64-0.63 10.87 1.28 3.24 1.91 5.61 5.22 6.38 8.9"
      }),
      _react2.default.createElement("path", {
        d:
          "m96.13 57.37c-3.59-1.11-7.64-0.63-10.87 1.28-3.24 1.91-5.61 5.22-6.38 8.9"
      })
    )
  );
}

exports.default = Wolf;
