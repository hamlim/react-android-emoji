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

function Penguin(props) {
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
        "m57.74 117.39c-0.16-0.11-0.35-0.17-0.54-0.18-1.52-0.08-8.62-0.35-10.47 1.23-0.83 0.72-1.09 1.6-1.11 2.41-0.01 0.91 1.07 1.39 1.76 0.78 1.07-0.95 2.79-1.94 4.98-1.47 11.64 2.5 6.88-1.73 5.38-2.77z",
      fill: "#666"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.94 119.7c1.09 0.07 0.68 1.66-0.26 2.21-1.07 0.62-2.67 2.2-6.06 2.29-6.23 0.17-4.33-1.91-9.01-1.65-0.56 0.03-1.34-0.42-1.82-0.13-0.77 0.47-1.5 0.56-1.43-0.34 0.07-0.87 0.34-1.84 1.11-2.56 2.24-2.13 5.67-4.38 8.64-2.69 2.57 1.49 6.49 2.72 8.83 2.87z",
      fill: "#666"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.111,
        x2: 63.111,
        y1: 34.943,
        y2: 120.09,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 0.0791
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9300",
        offset: 0.1103
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 0.144
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB600",
        offset: 0.1788
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD400",
        offset: 0.2145
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFA00",
        offset: 0.2504
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0.2542
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFF05",
        offset: 0.2713
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFF15",
        offset: 0.2927
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFF2E",
        offset: 0.3163
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFF52",
        offset: 0.3415
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFF7F",
        offset: 0.3681
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFFB7",
        offset: 0.3957
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFFF8",
        offset: 0.4237
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.4268
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.5608
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DCDCDC",
        offset: 0.7841
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.23 30.43c-0.16 7.75 1.35 11.35-1.27 16.8-8.42 17.5-22.17 53.22-2.48 62.41 9.91 4.62 19.21 11.73 37.49 11.73 16.37 0 7.4-21.82 7.4-21.82l-16.3-70.38-24.84 1.26z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m72.19 27.61 14.22 72.58c0.01 0.07 0.03 0.14 0.05 0.21 0.01 0.03 0.82 3 1.06 6.72 0.3 4.6-0.39 8.15-2 10.26-1.32 1.73-3.34 2.57-6.2 2.57-4.89 0-8.72-0.26-12.05-0.81-0.16-0.03-0.32-0.04-0.48-0.04-0.68 0-1.35 0.24-1.88 0.68-0.29 0.25-0.53 0.54-0.71 0.87-0.68 0.23-1.95 0.51-4.17 0.57-0.21 0.01-0.41 0.01-0.61 0.01-1.92 0-2.4-0.25-3-0.57-0.43-0.23-0.88-0.45-1.41-0.63 0.91-0.28 1.65-0.99 1.94-1.94 0.38-1.22-0.08-2.55-1.13-3.28-1.09-0.75-2.4-1.34-3.91-2.02-4.6-2.07-10.9-4.9-14.22-14.52-5.35-15.49 2.22-31.68 7.23-42.39 1.37-2.92 2.55-5.45 3.19-7.43 2.02-6.25 2.66-10.83 2.1-15.82l21.98-5.02m2.3-3.54-27.59 6.31c1 5.27 0.81 9.77-1.58 17.17-2.76 8.53-17.68 30.61-10.4 51.68 4.8 13.89 15.31 15.28 19.24 17.99-2.69 0.01-6.27 0.24-7.5 1.3-0.83 0.72-1.09 1.6-1.11 2.41-0.01 0.63 0.51 1.05 1.06 1.05 0.24 0 0.49-0.08 0.7-0.27 0.35-0.31 0.77-0.62 1.25-0.88-0.17 0.43-0.25 0.87-0.28 1.29-0.05 0.66 0.47 1.15 1.05 1.15 0.18 0 0.37-0.05 0.55-0.16 0.47-0.28 1-0.51 1.54-0.54 0.27-0.01 0.51-0.02 0.74-0.02 3.44 0 2.4 1.62 7.27 1.62 0.22 0 0.45 0 0.69-0.01 3.27-0.09 5.11-0.62 6.15-1.22 0.36-0.21 0.53-0.56 0.53-0.9 3.65 0.61 7.77 0.85 12.53 0.85 16.37 0 9.97-23.26 9.97-23.26l-14.81-75.56z",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 65.217,
        x2: 65.217,
        y1: 3.5498,
        y2: 125.2,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#080808",
        offset: 0.1841
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E1E1E",
        offset: 0.4706
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.822
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4D4D4D",
        offset: 0.919
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.08 125.2c-3.1 0-9.25-0.94-9.51-0.98-14.58-2.23-16.91-14.96-15.99-22.14 0.84-6.52 1.29-17.7 0.81-21.61-0.67 1.56-1.58 4.31-2.3 6.48-2.83 8.53-4.27 12.28-6.21 12.42-0.06 0-0.13 0.01-0.19 0.01-0.93 0-1.9-0.47-2.78-1.37-1.47-1.49-4.88-6.45-4.7-20.29 0.16-12.46 5.41-25.23 9.49-32.66-1.11 0.49-2.28 0.88-3.51 1.17-0.05 0.01-0.1 0.02-0.15 0.02-0.7 0.05-1.4 0.08-2.07 0.08-11.36 0-16.52-7.2-20.41-14.97-0.16-0.32-0.35-0.65-0.59-1.01-1.62-0.4-3.3-0.79-4.9-1.16-2.69-0.63-5.22-1.22-6.75-1.67-0.43-0.13-1.76-0.51-1.6-1.63 0.12-0.82 1.29-1.28 2.62-1.55-0.32 0-0.63 0.02-0.92 0.06-0.12 0.02-0.23 0.02-0.33 0.02-0.98 0-1.48-0.59-1.61-1.15-0.22-0.89 0.38-1.93 1.42-2.48 0.94-0.5 2.41-0.62 4.27-0.77 3.14-0.26 7.04-0.59 8.19-2.93 3.07-6.24 8.11-10.69 14.18-12.55 2.14-0.65 4.39-0.98 6.68-0.98 5.04 0 10 1.6 13.97 4.52 5.52 4.05 8.81 10.73 8.81 17.86 0 2.12-0.29 4.16-0.86 6.09 0.18 2.4 1.46 5.06 3.37 9.03 2.33 4.85 5.52 11.49 8.66 21.79 4.53 14.88 3.04 23.21 1.45 32.04-0.55 3.06-1.12 6.22-1.41 9.69-0.84 9.78 7.38 12.6 10.88 13.81 1.25 0.43 1.76 0.61 1.93 1.24 0.08 0.31-0.01 0.7-0.22 0.94-0.23 0.26-0.54 0.45-1.02 0.56 0.09 0.03 0.18 0.06 0.27 0.08 0.19 0.06 0.36 0.18 0.48 0.34 0.2 0.27 0.36 0.77 0.12 1.28-0.38 0.81-1.51 1.21-3.79 1.33-0.17 0.01-0.33 0.01-0.5 0.01-0.96 0-1.93-0.14-2.84-0.35 0 0.1-0.02 0.19-0.04 0.27-0.1 0.45-0.46 1.01-1.61 1.09-0.25 0.01-0.51 0.02-0.79 0.02z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m59.2 4.52c4.77 0 9.54 1.5 13.4 4.33 5.48 4.02 8.42 10.49 8.42 17.08 0 2.28-0.35 4.27-0.87 5.98 0.31 5.73 6.29 12.23 12.08 31.22 6.07 19.92 1.14 28.08 0 41.36s13.45 14.72 12.83 15.44c-0.25 0.3-1.13 0.38-2.15 0.38-1.44 0-3.15-0.18-3.74-0.18-0.22 0-0.28 0.02-0.11 0.09 0.95 0.38 5.69 1.89 5.69 1.89s0.66 0.88-2.95 1.07c-0.15 0.01-0.3 0.01-0.45 0.01-3.42 0-7.07-1.94-7.22-2.02s0 0 0 0c0.17 0.09 5.26 2.85 2.65 3.03-0.2 0.01-0.44 0.02-0.69 0.02-3.06 0-9.36-0.97-9.36-0.97-13.66-2.09-16.13-13.66-15.18-21.06 0.93-7.28 1.68-23.73 0.08-23.73-0.03 0-0.05 0-0.08 0.01-1.71 0.57-6.07 19.73-8.73 19.92h-0.13c-2.66 0-6.7-5.93-6.52-20.68 0.18-13.98 6.85-28.45 11.15-35.24-1.6 1.09-3.64 2.16-6.36 2.8-0.69 0.05-1.36 0.07-2 0.07-11.1 0-15.94-7.23-19.55-14.44-0.25-0.5-0.54-0.97-0.86-1.43-4.47-1.1-9.52-2.19-11.98-2.91-3.12-0.91 2.55-1.64 4.75-1.64 0.12 0 0.24 0 0.34 0.01 0.76 0.04 1.45 0.15 2.12 0.29-2.11-1.2-4.42-1.87-6.45-1.87-0.36 0-0.71 0.02-1.05 0.06-0.07 0.01-0.14 0.01-0.21 0.01-1.07 0-0.84-1.23 0.26-1.81 2.3-1.21 10.79 0.12 12.88-4.13 2.78-5.65 7.51-10.19 13.6-12.05 2.06-0.61 4.23-0.91 6.39-0.91m0-1.94v1.93-1.93c-2.39 0-4.73 0.34-6.96 1.02-6.33 1.93-11.58 6.56-14.77 13.04-0.91 1.85-4.67 2.17-7.41 2.39-1.97 0.16-3.53 0.29-4.64 0.88-1.45 0.77-2.24 2.24-1.91 3.57 0.12 0.48 0.36 0.89 0.7 1.2-0.24 0.28-0.4 0.63-0.46 1.05-0.1 0.72 0.05 2.04 2.28 2.69 1.56 0.46 3.99 1.02 6.81 1.68 1.47 0.34 3.02 0.71 4.52 1.07 0.13 0.21 0.24 0.4 0.33 0.6 4.03 8.05 9.39 15.51 21.27 15.51 0.7 0 1.42-0.03 2.14-0.08 0.1-0.01 0.21-0.02 0.31-0.05 0.43-0.1 0.85-0.21 1.26-0.34-3.9 7.7-8.28 19.41-8.43 30.87-0.13 10 1.69 17.65 4.98 20.98 1.35 1.37 2.63 1.66 3.47 1.66 0.09 0 0.18 0 0.26-0.01 2.55-0.18 3.96-3.73 7.06-13.08 0.19-0.58 0.4-1.21 0.62-1.85-0.01 4.85-0.38 11.66-1 16.55-1.29 10.08 3.4 21.17 16.8 23.21 0.26 0.04 6.49 0.99 9.66 0.99 0.31 0 0.58-0.01 0.83-0.03 1.3-0.09 1.93-0.68 2.24-1.21 0.71 0.12 1.45 0.2 2.19 0.2 0.18 0 0.37 0 0.55-0.01 1.99-0.1 3.92-0.41 4.61-1.89 0.3-0.65 0.28-1.38-0.04-1.99 0.02-0.02 0.04-0.04 0.05-0.06 0.43-0.51 0.59-1.19 0.41-1.83-0.31-1.13-1.2-1.43-2.55-1.9-5.44-1.87-10.92-4.86-10.24-12.81 0.29-3.42 0.86-6.56 1.4-9.6 1.54-8.55 3.12-17.39-1.48-32.49-3.16-10.37-6.37-17.05-8.71-21.93-1.81-3.78-3.04-6.33-3.26-8.52 0.56-1.96 0.85-4.04 0.85-6.19 0-7.44-3.44-14.4-9.21-18.64-4.12-2.98-9.29-4.65-14.53-4.65z",
      fill: "#666"
    }),
    _react2.default.createElement("circle", {
      cx: 53.23,
      cy: 20.51,
      r: 6.41,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 52.97,
      cy: 18.96,
      r: 2.94
    }),
    _react2.default.createElement("path", {
      d:
        "m33.8 26.34c0.77 0.06 1.53 0.18 2.27 0.4 0.49 0.14 1 0.34 1.31 0.75 0.26 0.34 0.3 0.81 0.09 1.19-0.3 0.54-0.81 0.44-1.35 0.31-2.96-0.75-9.01-2.2-9.05-2.25 0.23-0.19 0.66-0.19 0.96-0.22 0.76-0.09 1.52-0.14 2.29-0.17 1.15-0.06 2.32-0.1 3.48-0.01z",
      fill: "#FF9F02"
    })
  );
}

exports.default = Penguin;