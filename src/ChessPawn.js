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

function ChessPawn(props) {
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
        cx: 44.5,
        cy: 89,
        r: 30.537,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.00018029
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1A1A1A",
        offset: 0.9995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m93.12 111.75c1.56-1.56 2.76-3.72 2.76-7.69 0-3.96-5.76-6.84-10.45-9.61-4.68-2.76-4.92-6.12-4.8-8.29 0.12-2.16 2.16-3.36 2.28-5.16s-3.96-1.32-6.84-3.72-3.48-20.9-3.24-23.78 2.04-2.64 5.16-3.72 4.56-1.08 4.56-3.24-3.24-3.06-8.47-4.68-3.78-7.56-3.78-7.56c-0.18-0.18-12.43-0.18-12.61 0 0 0 1.44 5.94-3.78 7.57s-8.47 2.52-8.47 4.68 1.44 2.16 4.56 3.24 4.92 0.84 5.16 3.72-0.36 21.38-3.24 23.78-6.97 1.92-6.84 3.72 2.16 3 2.28 5.16-0.12 5.52-4.8 8.29c-4.68 2.76-10.45 5.64-10.45 9.61 0 3.96 1.2 6.12 2.76 7.69 0 0-2.52 1.44-2.52 3.72v6.12s5.89 2.4 31.65 2.4 31.64-2.4 31.64-2.4 0-3.84 0-6.12c0-2.29-2.52-3.73-2.52-3.73z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 113.25,
        y2: 122.25,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6D6D6D",
        offset: 0.0525
      }),
      _react2.default.createElement("stop", {
        stopColor: "#494949",
        offset: 0.328
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2F2F2F",
        offset: 0.586
      }),
      _react2.default.createElement("stop", {
        stopColor: "#202020",
        offset: 0.8174
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1A1A1A",
        offset: 0.9995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m93.5 112s-6.25 1.5-30 1.5-29-1.5-29-1.5c-0.7 0.5-2.14 1.75-2.14 3.47v6.12s5.88 2.41 31.64 2.41 31.64-2.4 31.64-2.4 0-3.84 0-6.12c0-1.73-1.44-2.98-2.14-3.48z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 76.583,
        y2: 86.596,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#696969",
        offset: 0.0018229
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1A1A1A",
        offset: 0.9995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m82.91 81.01c0.12-1.8-3.96-1.32-6.84-3.72-0.09-0.08-0.18-0.18-0.27-0.29h-23.59c-0.09 0.11-0.18 0.21-0.27 0.29-2.88 2.4-6.97 1.92-6.84 3.72s2.16 3 2.28 5.16c0.03 0.45 0.03 0.96-0.01 1.49h33.29c-0.04-0.54-0.04-1.04-0.01-1.49 0.1-2.16 2.14-3.36 2.26-5.16z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 34.75,
        y2: 49.852,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.00018029
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1A1A1A",
        offset: 0.9995
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m50.01 49.79c2.2 0.76 3.74 0.87 4.55 1.88h18.88c0.8-1.01 2.35-1.12 4.55-1.88 3.12-1.08 4.56-1.08 4.56-3.24s-3.24-3.06-8.47-4.68-3.78-7.57-3.78-7.57c-0.18-0.18-12.43-0.18-12.61 0 0 0 1.44 5.94-3.78 7.57s-8.47 2.52-8.47 4.68 1.45 2.16 4.57 3.24z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 59.75,
        cy: 15.25,
        r: 21.408,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.1512
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1C1C1C",
        offset: 0.9979
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 21.55,
      r: 17.55,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7c8.03 0 14.55 6.53 14.55 14.55 0 6.05-3.65 11.37-9.3 13.56l-2.45 0.95 0.62 2.52 0.01 0.05 0.01 0.06c0.23 0.91 0.59 1.76 1.08 2.53 0.37 0.58 0.76 1.07 1.21 1.5 0.94 0.9 2.11 1.58 3.47 2l0.75 0.23 0.21 0.06c1.39 0.43 3.12 0.97 4.31 1.45-0.44 0.14-0.93 0.29-1.46 0.48-0.21 0.07-0.42 0.14-0.62 0.2l-0.22 0.07-0.35 0.1-0.41 0.12c-1.54 0.44-3.14 0.89-4.31 2.36-0.73 0.92-1.14 2.05-1.26 3.46-0.11 1.31-0.14 20.92 3.62 25.62 0.22 0.28 0.45 0.51 0.69 0.72 1.66 1.39 3.5 2.02 4.95 2.46-0.64 0.97-1.37 2.24-1.46 3.95-0.02 0.27-0.02 0.56-0.02 0.9 0 0.35 0.01 0.67 0.04 1 0.3 3.79 2.41 6.87 6.26 9.14 0.49 0.29 0.99 0.58 1.49 0.87 2.98 1.72 7.48 4.33 7.48 6.15 0 3.24-0.95 4.63-1.88 5.56l-2.8 2.76 3.4 1.95c0.02 0.01 0.08 0.05 0.15 0.1 0.04 0.03 0.09 0.07 0.18 0.14 0.05 0.04 0.1 0.08 0.16 0.13l0.04 0.03c0.05 0.04 0.09 0.09 0.14 0.14l0.04 0.05c0.04 0.05 0.09 0.1 0.13 0.15l0.03 0.04c0.03 0.04 0.06 0.09 0.1 0.16 0.02 0.03 0.04 0.06 0.05 0.1l0.01 0.02c0 0.02 0.01 0.04 0.01 0.06l0.01 0.02v3.8c-2.97 0.59-9.88 1.53-24.08 1.7-1.46 0.02-2.98 0.03-4.58 0.03s-3.12-0.01-4.56-0.03c-14.2-0.17-21.11-1.11-24.08-1.7v-3.76l0.01-0.07c0-0.02 0.01-0.03 0.01-0.05l0.01-0.03c0.01-0.03 0.03-0.06 0.07-0.12 0.02-0.04 0.05-0.08 0.07-0.11l0.01-0.01 0.03-0.04c0.04-0.05 0.08-0.1 0.13-0.16l0.03-0.04 0.18-0.18c0.05-0.05 0.11-0.09 0.19-0.16 0.05-0.04 0.1-0.08 0.15-0.11 0.07-0.05 0.12-0.08 0.12-0.08l3.4-1.95-2.77-2.77c-0.93-0.93-1.88-2.32-1.88-5.56 0-1.83 4.5-4.43 7.48-6.15 0.5-0.29 1-0.58 1.49-0.87 3.85-2.27 5.95-5.34 6.26-9.14 0.03-0.32 0.04-0.65 0.04-1.04 0-0.27-0.01-0.52-0.02-0.77v-0.07l-0.01-0.1c-0.03-0.44-0.11-0.82-0.18-1.11-0.16-0.65-0.41-1.28-0.77-1.93-0.15-0.28-0.32-0.56-0.51-0.84 1.45-0.44 3.29-1.08 4.96-2.46 0.25-0.2 0.47-0.44 0.7-0.72 3.76-4.69 3.72-24.31 3.62-25.61-0.12-1.42-0.53-2.55-1.26-3.46-1.17-1.46-2.76-1.92-4.31-2.36l-0.77-0.22-0.22-0.07c-0.2-0.06-0.4-0.13-0.62-0.2-0.53-0.18-1.02-0.34-1.46-0.48 1.19-0.48 2.92-1.02 4.31-1.45l0.29-0.09 0.66-0.21c1.8-0.56 3.24-1.54 4.29-2.91 0.68-0.89 1.18-1.94 1.47-3.11l0.03-0.12 0.62-2.52-2.45-0.95c-5.65-2.19-9.3-7.51-9.3-13.56-0.01-8.02 6.51-14.55 14.54-14.55m0-3c-9.69 0-17.55 7.86-17.55 17.55 0 7.46 4.66 13.81 11.22 16.36 0 0.02-0.01 0.04-0.01 0.06-0.17 0.69-0.46 1.39-0.94 2.03-0.6 0.79-1.49 1.46-2.79 1.87-0.33 0.1-0.65 0.2-0.96 0.3-4.35 1.35-7.12 2.24-7.47 4-0.03 0.13-0.04 0.26-0.04 0.39 0 0.27 0.02 0.51 0.07 0.72 0.32 1.46 1.76 1.58 4.5 2.53 0.25 0.09 0.48 0.16 0.72 0.23 0.08 0.03 0.16 0.05 0.25 0.07 0.13 0.04 0.26 0.08 0.38 0.11 1.49 0.43 2.58 0.67 3.21 1.46 0.34 0.42 0.55 0.99 0.62 1.84 0.2 2.78-0.36 20.18-3 23.48-0.09 0.11-0.18 0.21-0.27 0.29-1.62 1.35-3.62 1.79-5.04 2.24-1.1 0.35-1.86 0.7-1.8 1.49 0.01 0.23 0.06 0.44 0.13 0.65s0.16 0.41 0.26 0.61c0.21 0.4 0.48 0.79 0.75 1.18 0.2 0.29 0.38 0.59 0.56 0.9 0.2 0.37 0.37 0.75 0.48 1.18 0.05 0.21 0.09 0.42 0.11 0.64 0.01 0.22 0.02 0.45 0.02 0.69v0.03c0 0.25-0.01 0.5-0.03 0.77-0.16 2.05-1.08 4.61-4.79 6.79-4.68 2.76-10.45 5.64-10.45 9.61 0 3.96 1.2 6.12 2.76 7.69 0 0-0.15 0.09-0.38 0.25-0.08 0.06-0.17 0.12-0.26 0.2-0.02 0.02-0.04 0.03-0.06 0.05-0.09 0.07-0.18 0.15-0.28 0.24l-0.03 0.03c-0.1 0.09-0.2 0.2-0.31 0.31-0.03 0.03-0.05 0.06-0.08 0.09-0.1 0.11-0.19 0.22-0.28 0.33-0.01 0.01-0.02 0.03-0.03 0.04-0.1 0.13-0.19 0.26-0.27 0.41-0.02 0.04-0.04 0.08-0.07 0.12-0.08 0.14-0.15 0.29-0.22 0.44 0 0.01-0.01 0.02-0.01 0.03-0.06 0.16-0.11 0.33-0.15 0.5-0.01 0.04-0.02 0.09-0.03 0.13-0.03 0.18-0.06 0.36-0.06 0.56v6.12s5.17 2.11 27.04 2.37c1.46 0.02 2.99 0.03 4.6 0.03s3.14-0.01 4.6-0.03c21.87-0.26 27.04-2.37 27.04-2.37s0-3.84 0-6.12c0-0.19-0.02-0.38-0.06-0.56-0.01-0.04-0.02-0.09-0.03-0.13-0.04-0.17-0.09-0.34-0.15-0.5 0-0.01-0.01-0.02-0.01-0.03-0.06-0.15-0.14-0.3-0.22-0.44-0.02-0.04-0.04-0.08-0.07-0.12-0.09-0.14-0.18-0.28-0.27-0.41-0.01-0.01-0.02-0.03-0.03-0.04-0.09-0.12-0.19-0.23-0.28-0.33-0.03-0.03-0.05-0.06-0.08-0.09-0.1-0.11-0.21-0.21-0.31-0.31l-0.03-0.03c-0.1-0.09-0.19-0.17-0.28-0.24-0.02-0.02-0.04-0.03-0.06-0.05-0.1-0.08-0.18-0.14-0.26-0.2-0.23-0.16-0.38-0.25-0.38-0.25 1.56-1.56 2.76-3.72 2.76-7.69 0-3.96-5.76-6.84-10.45-9.61-3.71-2.19-4.63-4.75-4.79-6.79-0.02-0.27-0.03-0.52-0.03-0.77v-0.03c0-0.24 0.01-0.48 0.02-0.69 0.12-2.16 2.16-3.36 2.28-5.16 0.01-0.11 0-0.22-0.03-0.31-0.36-1.44-4.12-1.16-6.82-3.41-0.09-0.08-0.18-0.18-0.27-0.29-2.65-3.3-3.2-20.7-2.97-23.49 0.07-0.85 0.28-1.42 0.62-1.84 0.63-0.79 1.71-1.03 3.21-1.46 0.12-0.04 0.25-0.07 0.38-0.11 0.08-0.02 0.16-0.05 0.25-0.07 0.23-0.07 0.47-0.15 0.72-0.23 1.17-0.41 2.11-0.66 2.82-0.93 0.24-0.09 0.45-0.18 0.64-0.28 0.56-0.3 0.91-0.68 1.04-1.31 0.05-0.21 0.07-0.45 0.07-0.72 0-0.14-0.01-0.27-0.04-0.39-0.35-1.76-3.12-2.65-7.47-4-0.31-0.1-0.63-0.19-0.96-0.3-0.98-0.3-1.72-0.76-2.29-1.3-0.3-0.29-0.54-0.61-0.75-0.93-0.34-0.53-0.56-1.1-0.7-1.66 0-0.02-0.01-0.04-0.01-0.06 6.56-2.54 11.22-8.9 11.22-16.36-0.04-9.71-7.9-17.57-17.59-17.57z",
        fill: "#eee"
      })
    )
  );
}

exports.default = ChessPawn;
