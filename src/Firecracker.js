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

function Firecracker(props) {
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
        id: "d",
        x1: 41.631,
        x2: 80.921,
        y1: 87.79,
        y2: 87.79,
        gradientTransform: "matrix(.7601 -.6499 .6499 .7601 -28.682 47.579)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E32012",
        offset: 0.0016426
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF2414",
        offset: 0.2863
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B81A0F",
        offset: 0.9966
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m25.86 43.9 66.69 78c2.76 3.22 11.68 0.12 19.92-6.93 8.25-7.05 12.7-15.38 9.94-18.6l-66.69-78-29.86 25.53z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7601 -.6499 .6499 .7601 -10.444 33.974)",
      cx: 40.79,
      cy: 31.13,
      rx: 19.64,
      ry: 7.68,
      fill: "#C41C10"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.7601 -.6499 .6499 .7601 -10.444 33.974)",
      cx: 40.79,
      cy: 31.13,
      rx: 17.03,
      ry: 6.66,
      fill: "#AD190E"
    }),
    _react2.default.createElement("path", {
      d:
        "m41.3 31.74c-0.46 0.4-1.16 0.34-1.56-0.12-3.41-3.98-7.33-7.69-12.97-7.85-0.61-0.02-1.09-0.53-1.07-1.14s0.53-1.09 1.14-1.07c6.52 0.19 11.03 4.47 14.59 8.63 0.39 0.45 0.34 1.15-0.13 1.55z",
      fill: "#1A1A1A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m52.39 20.09c0.78 0 1.09 0.18 1.13 0.22l66.69 78c0.12 0.14 0.4 1.49-1.21 4.5-1.68 3.15-4.74 6.74-8.4 9.87-6.05 5.17-11.67 7.48-14.55 7.48-0.79 0-1.1-0.18-1.14-0.22l-66.69-78c-0.62-0.73 0.76-6.28 8.33-13.24 0.27-0.25 0.49-0.54 0.65-0.86 0.34-0.12 0.66-0.3 0.95-0.54 5.94-4.98 11.43-7.21 14.24-7.21m0-3c-4 0-10.23 2.94-16.17 7.92-2.59-1.95-5.63-3.36-9.3-3.47h-0.03c-0.6 0-1.09 0.47-1.11 1.08s0.46 1.12 1.07 1.14c2.97 0.09 5.47 1.16 7.67 2.74-7.36 6.77-11.18 14.35-8.58 17.39l66.69 78c0.74 0.86 1.92 1.27 3.42 1.27 4.08 0 10.47-3.04 16.5-8.2 8.25-7.05 12.7-15.38 9.94-18.6l-66.69-78c-0.74-0.86-1.92-1.27-3.41-1.27z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m25.86 43.9 66.69 78c2.76 3.22 11.68 0.12 19.92-6.93 8.25-7.05 12.7-15.38 9.94-18.6l-66.69-78-29.86 25.53z"
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
    _react2.default.createElement("path", {
      d:
        "m118.52 90.46c0.98 2.98-2.22 11.85-10.9 19.27-8.67 7.42-17.94 9.2-20.73 7.77l-1.96 1.68c3.72 2.94 14.51 0.58 24.18-7.69s13.68-18.57 11.36-22.69l-1.95 1.66z",
      clipPath: "url(#a)",
      fill: "#fc0"
    }),
    _react2.default.createElement("path", {
      d:
        "m114.81 85.38c2.17 3.1-2.13 13.11-10.92 20.62s-19.34 10.21-22.07 7.58l-0.96 0.82c3.17 3.22 14.04 0.61 23.69-7.63s13.91-18.58 11.22-22.21l-0.96 0.82z",
      clipPath: "url(#a)",
      fill: "#fc0"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.69 25.45c1.49 2.69-2.91 10.68-12.1 18.53s-17.76 10.96-20.19 9.07l-2.28 1.34c3.49 3.37 13.82-0.1 23.91-8.73s15.05-18.22 12.27-22.2l-1.61 1.99z",
      clipPath: "url(#a)",
      fill: "#fc0"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 34.813,
        cy: 12.249,
        r: 17.965,
        gradientTransform: "matrix(.8895 -.4568 .4568 .8895 -7.7386 25.763)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF7EF",
        offset: 0.1324
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE3C4",
        offset: 0.3922
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC280",
        offset: 0.7506
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA94D",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "46.85 24.11 36.88 25.14 41.43 34.07 32.76 29.03 31.2 38.93 27.14 29.76 20.06 36.85 22.17 27.06 12.27 28.63 19.74 21.94 10.8 17.39 20.77 16.37 16.22 7.44 24.89 12.48 26.45 2.58 30.51 11.74 37.59 4.65 35.48 14.45 45.38 12.88 37.91 19.57",
      fill: "url(#b)"
    }),
    _react2.default.createElement("circle", {
      cx: 18.05,
      cy: 4.65,
      r: 1.28,
      fill: "#C41C10"
    }),
    _react2.default.createElement("circle", {
      cx: 32.43,
      cy: 4.5,
      r: 1.28,
      fill: "#C41C10"
    }),
    _react2.default.createElement("circle", {
      cx: 12.26,
      cy: 30.75,
      r: 1.28,
      fill: "#C41C10"
    }),
    _react2.default.createElement("circle", {
      cx: 22.19,
      cy: 38.56,
      r: 1.28,
      fill: "#C41C10"
    }),
    _react2.default.createElement("circle", {
      cx: 49.65,
      cy: 25,
      r: 1.28,
      fill: "#FF2415"
    }),
    _react2.default.createElement("circle", {
      cx: 7.59,
      cy: 17.01,
      r: 1.28,
      fill: "#FF5015"
    }),
    _react2.default.createElement("path", {
      d:
        "m43.21 6.3-6.21 5.97 5.26-6.82c0.22-0.28 0.62-0.33 0.9-0.12s0.33 0.62 0.12 0.9c-0.02 0.03-0.04 0.05-0.07 0.07z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.45 17.05c-3.49 0.75-6.96 1.2-10.4 1.94 3.33-1.15 6.77-2.03 10.05-3.16h0.01c0.33-0.12 0.7 0.06 0.81 0.4 0.12 0.33-0.06 0.7-0.4 0.81-0.02-0.01-0.05 0-0.07 0.01z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.05 2.34c0.63 2.49 1.06 4.99 1.69 7.46-1.03-2.33-1.88-4.74-2.89-7.05-0.14-0.32 0-0.7 0.33-0.84 0.32-0.14 0.7 0 0.84 0.33 0.01 0.03 0.03 0.06 0.03 0.1z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement("path", {
      d:
        "m11.48 10.76 7.83 4.98-8.44-3.86c-0.32-0.15-0.46-0.53-0.32-0.85 0.15-0.32 0.53-0.46 0.85-0.32 0.03 0.02 0.05 0.03 0.08 0.05z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement("path", {
      d:
        "m8.03 23.41 9.81-1.35-9.52 2.59-0.03 0.01c-0.34 0.09-0.69-0.11-0.79-0.45-0.09-0.34 0.11-0.69 0.45-0.79 0.02 0 0.05 0 0.08-0.01z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement("path", {
      d:
        "m14.35 33.38 5.85-4.14-5.02 5.11c-0.25 0.25-0.65 0.26-0.91 0.01s-0.26-0.65-0.01-0.91c0.02-0.02 0.06-0.05 0.09-0.07z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement("path", {
      d:
        "m25.48 39.4 1.52-8.59-0.24 8.72c-0.01 0.35-0.3 0.63-0.66 0.62-0.35-0.01-0.63-0.3-0.62-0.66v-0.09z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement("path", {
      d:
        "m38.21 40.29-4.54-10.1 5.67 9.51c0.18 0.3 0.08 0.7-0.22 0.88s-0.7 0.08-0.88-0.22c-0.01-0.02-0.02-0.04-0.03-0.07z",
      fill: "#FF7A0D"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m27.07 7.34 2.19 4.95c0.18 0.41 0.55 0.7 0.99 0.79 0.08 0.02 0.17 0.02 0.25 0.02 0.36 0 0.7-0.14 0.96-0.4l3.83-3.83-1.14 5.29c-0.09 0.44 0.03 0.89 0.34 1.22 0.26 0.27 0.62 0.42 0.99 0.42 0.07 0 0.14-0.01 0.21-0.02l5.35-0.85-4.03 3.61c-0.33 0.3-0.5 0.74-0.44 1.19 0.06 0.44 0.33 0.83 0.73 1.03l4.83 2.46-5.39 0.55c-0.45 0.05-0.84 0.31-1.05 0.7s-0.22 0.87-0.02 1.27l2.46 4.82-4.68-2.72c-0.21-0.12-0.45-0.18-0.68-0.18-0.2 0-0.4 0.04-0.58 0.13-0.4 0.19-0.69 0.57-0.76 1.01l-0.85 5.35-2.19-4.95c-0.18-0.41-0.55-0.7-0.99-0.79-0.08-0.02-0.17-0.02-0.25-0.02-0.36 0-0.7 0.14-0.96 0.4l-3.83 3.83 1.14-5.29c0.09-0.44-0.03-0.89-0.34-1.22-0.26-0.27-0.62-0.42-0.99-0.42-0.07 0-0.14 0.01-0.21 0.02l-5.35 0.85 4.03-3.61c0.33-0.3 0.5-0.74 0.44-1.19-0.06-0.44-0.33-0.83-0.73-1.03l-4.83-2.46 5.39-0.55c0.45-0.05 0.84-0.31 1.05-0.7s0.22-0.87 0.02-1.27l-2.46-4.82 4.68 2.72c0.21 0.12 0.45 0.18 0.68 0.18 0.2 0 0.4-0.04 0.58-0.13 0.4-0.19 0.69-0.57 0.76-1.01l0.85-5.35m-0.62-4.76-1.56 9.9-8.67-5.03 4.55 8.93-9.97 1.02 8.93 4.55-7.47 6.69 9.9-1.57-2.11 9.8 7.08-7.09 4.05 9.17 1.56-9.9 8.67 5.03-4.55-8.93 9.97-1.02-8.93-4.55 7.47-6.69-9.9 1.57 2.11-9.8-7.08 7.09-4.05-9.17zm11.14 2.07z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Firecracker;
