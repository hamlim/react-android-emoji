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

function Fish(props) {
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
        x1: 70.901,
        x2: 70.901,
        y1: 17.504,
        y2: 38.871,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9E6F5",
        offset: 0.1948
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5FB4E2",
        offset: 0.594
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1C94D6",
        offset: 0.8708
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m83.35 41.37c-8.46-2.97-18.09-5.19-27.48-7.17 6.97-4.96 19.98-10.67 26.59-10.67 1.54 0 2.65 0.32 3.12 0.9 0.39 0.48 0.46 1.29 0.22 2.4-0.82 3.72-1.9 9.91-2.45 14.54z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m82.46 25.03c1.48 0 1.92 0.32 1.93 0.32 0.01 0.02 0.12 0.33-0.06 1.16-0.72 3.29-1.64 8.47-2.23 12.85-7.02-2.34-14.73-4.2-22.39-5.87 7.04-4.25 17.37-8.46 22.75-8.46m0-3c-8.21 0-24.27 7.78-30.02 12.98 10.55 2.2 22.33 4.75 32.21 8.42 0.42-4.54 1.68-11.98 2.62-16.28 0.79-3.69-1.29-5.12-4.81-5.12z",
      fill: "#258ECC"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 80.303,
        x2: 80.303,
        y1: 86.39,
        y2: 104.5,
        gradientTransform: "matrix(.9942 -.1076 -.1076 -.9942 10.338 203.22)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCFDFE",
        offset: 0.1406
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2F9FD",
        offset: 0.2559
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0F1F9",
        offset: 0.3624
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8E5F5",
        offset: 0.4635
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9D7EF",
        offset: 0.5609
      }),
      _react2.default.createElement("stop", {
        stopColor: "#83C5E8",
        offset: 0.6555
      }),
      _react2.default.createElement("stop", {
        stopColor: "#55AFE0",
        offset: 0.7478
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2297D7",
        offset: 0.836
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0.8849
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88.01 102.71c-5.17 0-14.24-2.99-19.65-5.88 5.36-2.09 10.59-4.85 15.67-7.53 1.05-0.55 2.09-1.1 3.12-1.64 0.81 3.1 2.24 7.44 3.26 10.5 0.27 0.83 0.52 1.56 0.71 2.15 0.17 0.52 0.31 1.21 0.03 1.6-0.14 0.19-0.77 0.8-3.14 0.8z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.2 89.85c0.81 2.81 1.9 6.12 2.78 8.77 0.27 0.83 0.52 1.56 0.71 2.15 0.03 0.1 0.05 0.18 0.07 0.25-0.29 0.09-0.83 0.19-1.75 0.19-4.04 0-10.82-2.02-15.98-4.28 4.34-1.89 8.56-4.12 12.7-6.3 0.49-0.27 0.98-0.52 1.47-0.78m1.97-4.41c-7.39 3.78-15.23 8.34-23.26 11.04 4.57 3.29 16.4 7.73 23.09 7.73 3.47 0 5.56-1.19 4.54-4.36-1.05-3.25-3.7-10.93-4.37-14.41z",
      fill: "#258ECC"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 52.745,
        x2: 52.745,
        y1: 86.165,
        y2: 101.61,
        gradientTransform: "matrix(.9464 .323 .323 -.9464 -29.954 172.62)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.0029626
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9D1E9",
        offset: 0.3089
      }),
      _react2.default.createElement("stop", {
        stopColor: "#50A1D1",
        offset: 0.6463
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1883C3",
        offset: 0.8842
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0277BD",
        offset: 0.9985
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.62 107.32c-4.07 0-13.88-8.49-18.86-15.19 0.3 0.05 0.59 0.1 0.89 0.15 6.82 1.17 13.86 2.37 20.82 2.61-0.66 3.55-1.17 7.35-1.42 10.46-0.16 1.97-0.92 1.97-1.43 1.97z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m44.44 94.27c5.35 0.9 10.8 1.73 16.25 2.04-0.52 3.09-0.93 6.26-1.14 8.92-0.02 0.26-0.06 0.45-0.09 0.58-2.93-0.2-10.02-5.89-15.02-11.54m-6.83-4.2c3.73 6.63 16.25 18.74 22.01 18.74 1.64 0 2.73-0.98 2.92-3.35 0.29-3.75 0.96-8.26 1.73-12.04-8.83-0.08-17.64-1.85-26.66-3.35z",
      fill: "#258ECC"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63.777,
        x2: 63.777,
        y1: 40.38,
        y2: 112.33,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4886B7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#43ADE4",
        offset: 0.2072
      }),
      _react2.default.createElement("stop", {
        stopColor: "#40C4FF",
        offset: 0.3532
      }),
      _react2.default.createElement("stop", {
        stopColor: "#77D5FF",
        offset: 0.4227
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B1E7FF",
        offset: 0.5037
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DBF4FF",
        offset: 0.5732
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5FCFF",
        offset: 0.6274
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.6598
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m53.61 99.29c-28.72 0-44.15-18.9-44.87-21.94 0.44-1.1 2.26-1.76 3.88-2.34 1.56-0.56 3.03-1.09 3.89-2.14 0.33-0.4 0.43-0.93 0.27-1.42s-0.56-0.86-1.06-0.98l-0.59-0.15c-3.08-0.77-6.92-1.72-9.29-3.35-0.12-0.08-0.16-0.13-0.16-0.13 0-0.19 0.41-0.96 0.68-1.47l0.27-0.51c4.75-9.26 11.37-16.71 19.66-22.14 9.31-6.1 20.74-9.6 31.35-9.6 6.65 0 12.74 1.32 18.09 3.94 11.96 5.83 17.19 13.23 20.65 18.12 2.41 3.41 4.16 5.88 6.95 6.17 0.29 0.03 0.57 0.04 0.86 0.04 6.36 0 12.5-6.98 16.55-11.6 0.36-0.41 0.74-0.84 1.11-1.26-0.34 2.49-0.88 4.91-1.45 7.43-1.02 4.52-2.07 9.19-2.07 14.89 0 7.01 1.37 12.67 2.27 16.41 0.28 1.17 0.59 2.45 0.71 3.28-1.53-0.94-4.49-3.96-6.55-6.06-5.18-5.27-8.78-8.73-11.6-8.73h-0.1c-4.53 0.13-6.48 2.98-8.75 6.28-3.24 4.72-7.67 11.18-22.78 14.96-6.09 1.53-12.13 2.3-17.92 2.3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m57.65 34.62c6.42 0 12.29 1.27 17.44 3.78 11.62 5.67 16.51 12.59 20.08 17.64 2.54 3.6 4.55 6.44 8.02 6.79 0.33 0.03 0.67 0.05 1.01 0.05 5.79 0 11.14-4.92 15.22-9.35-0.15 0.69-0.31 1.39-0.47 2.1-1.04 4.6-2.11 9.35-2.11 15.22 0 6.51 1.14 11.84 2.04 15.63-1.05-1.02-2.14-2.13-3.04-3.04-5.61-5.71-9.26-9.18-12.67-9.18h-0.15c-5.29 0.16-7.65 3.6-9.94 6.93-3.1 4.52-7.35 10.71-21.91 14.35-5.99 1.5-11.9 2.25-17.56 2.25-14.77 0-25.49-5.1-31.89-9.38-6.69-4.47-10.21-9.02-11.24-10.84 0.65-0.42 1.99-0.91 2.65-1.15 1.68-0.61 3.42-1.24 4.54-2.6 0.65-0.79 0.85-1.87 0.53-2.85s-1.12-1.72-2.12-1.97l-0.58-0.14c-2.59-0.64-5.73-1.43-7.92-2.6 0.04-0.07 0.08-0.14 0.11-0.21 0.09-0.17 0.18-0.35 0.28-0.53 4.62-9.02 11.06-16.27 19.14-21.56 9.08-5.93 20.21-9.34 30.54-9.34m0-3c-11.27 0-22.89 3.76-32.18 9.84-8.22 5.38-15.15 12.91-20.16 22.7-0.87 1.7-1.79 3.02-0.31 4.04 2.75 1.89 6.99 2.88 10.36 3.72-1.5 1.82-7.24 1.97-8.11 5.19-0.68 2.51 15.52 23.68 46.37 23.68 5.62 0 11.72-0.7 18.29-2.34 25.96-6.49 21.72-20.91 31.21-21.19h0.06c4.5 0 15.36 15.07 18.82 15.07 0.23 0 0.42-0.07 0.58-0.21 1.43-1.25-2.74-9.19-2.74-21.28 0-9.67 3.16-16.47 3.77-24.57 0.05-0.68-0.07-0.98-0.33-0.98-1.83 0-10.75 14.59-19.09 14.59-0.24 0-0.47-0.01-0.71-0.04-5.49-0.56-7.1-14.39-27.09-24.14-5.77-2.81-12.2-4.08-18.74-4.08z",
      fill: "#258ECC"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.6
      },
      _react2.default.createElement("path", {
        d:
          "m33.32 46.14s0.47 0.5 1.3 1.36c0.2 0.22 0.43 0.46 0.68 0.73 0.23 0.29 0.46 0.64 0.72 1 0.5 0.72 1.14 1.54 1.59 2.49 0.25 0.47 0.51 0.97 0.78 1.48s0.45 1.08 0.69 1.65c0.21 0.58 0.48 1.15 0.66 1.77 0.17 0.62 0.34 1.26 0.51 1.9 0.36 1.29 0.54 2.67 0.72 4.05 0.1 1.4 0.26 2.81 0.18 4.23 0.02 1.42-0.17 2.83-0.3 4.22-0.11 0.69-0.25 1.37-0.37 2.04-0.11 0.67-0.27 1.33-0.46 1.97-0.18 0.64-0.34 1.27-0.55 1.88-0.22 0.6-0.44 1.18-0.66 1.75-0.19 0.58-0.47 1.1-0.72 1.62-0.26 0.51-0.49 1.01-0.74 1.48-0.57 0.9-1.04 1.75-1.59 2.42s-0.98 1.27-1.43 1.7c-0.9 0.84-1.41 1.32-1.41 1.32-0.13 0.12-0.33 0.11-0.45-0.01-0.11-0.11-0.11-0.28-0.03-0.4l0.03-0.04s0.38-0.55 1.05-1.51c0.35-0.46 0.63-1.13 1.05-1.81 0.41-0.69 0.71-1.57 1.14-2.45 0.33-0.94 0.72-1.94 1.02-3.03 0.15-0.55 0.3-1.11 0.45-1.68 0.14-0.58 0.22-1.18 0.35-1.78s0.24-1.22 0.3-1.85c0.07-0.63 0.16-1.27 0.22-1.91 0.06-1.29 0.2-2.6 0.13-3.91 0.01-1.31-0.11-2.61-0.21-3.9-0.05-0.64-0.19-1.26-0.28-1.89-0.09-0.62-0.16-1.24-0.33-1.83-0.14-0.59-0.28-1.18-0.41-1.75-0.14-0.57-0.34-1.11-0.5-1.64-0.3-1.08-0.73-2.04-1.11-2.95-0.34-0.94-0.8-1.66-1.15-2.37-0.18-0.35-0.34-0.68-0.51-0.98-0.2-0.3-0.38-0.58-0.55-0.83-0.65-1.01-1.02-1.59-1.02-1.59-0.23-0.35-0.13-0.82 0.23-1.05 0.33-0.21 0.73-0.16 0.98 0.1z",
        fill: "#0277BD"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 25.03,
      cy: 59.63,
      rx: 6.34,
      ry: 6.38,
      fill: "#fff"
    }),
    _react2.default.createElement("ellipse", {
      cx: 24.97,
      cy: 59.69,
      rx: 3.3,
      ry: 3.32
    })
  );
}

exports.default = Fish;
