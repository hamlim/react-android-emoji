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

function Tiger2(props) {
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
        x1: 85.536,
        x2: 80.102,
        y1: 89.78,
        y2: 119.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DA7E1E",
        offset: 0.1
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DB7F1E",
        offset: 0.1025
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EB9711",
        offset: 0.1916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A907",
        offset: 0.2846
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDB402",
        offset: 0.384
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.7729
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.7 84.1c2.93 4.19 7.4 8.56 8.49 13.9 0.94 4.58-1.02 13.2-4 13.12-5.25-0.12-5.68 3.1-5.38 8.38 0.3 5.09 8.09 3.88 10.62 3.88 2.12 0 4.33-0.02 6.11-0.77 2.57-1.08 4.19-5.5 5.2-12.99 0.78-5.76 0-14.88-2.26-22.73-2.26-7.84-4.17-11.83-4.17-11.83",
      fill: "url(#i)",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 32.163,
        x2: 52.936,
        y1: 91.565,
        y2: 131.81,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DA7E1E",
        offset: 0.1
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DB7F1E",
        offset: 0.1025
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EB9711",
        offset: 0.1916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A907",
        offset: 0.2846
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDB402",
        offset: 0.384
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.8731
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m33.18 104.37c1.5 1.98 2.82 4.8 1.34 6.81-1.21 1.64-3.73 1.8-5.05 3.36-1.61 1.91-0.52 5.06 1.54 6.47s4.77 2.2 7.21 1.65c3.49-0.8 12.9-3.3 13.51-5.9 0.51-2.13-0.22-4.37-1.26-6.3s-2.39-3.69-3.28-5.69c-3.42-7.71 0.52-17.55-3.96-24.69-1.85-2.95-18.69-5.71-18.86-2.82-0.87 14.99 4.07 20.86 8.81 27.11z",
      fill: "url(#h)",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m118.21 107.9c-0.91 0-1.88-0.15-2.72-0.41-2.5-0.79-4.57-2.79-5.98-5.79-2.07-4.41-2.5-9.79-2.65-13.46-0.05-1.31 0-2.65 0.05-3.95 0.07-1.78 0.14-3.61-0.06-5.32-0.19-1.63-0.53-3.31-1-4.98-0.46-1.61-0.97-3.09-1.67-4.81-0.48-1.21-1.21-2.41-2.1-3.47-0.8-0.95-1.73-1.81-2.79-2.55-0.86-0.6-1.8-1.13-2.85-1.59-0.87-0.39-1.67-0.63-2.41-0.84-0.71-0.17-1.13-0.27-1.55-0.33l-0.7-0.1c-0.78-0.12-1.46-0.53-1.92-1.16-0.45-0.62-0.64-1.37-0.52-2.13 0.22-1.39 1.45-2.44 2.88-2.44 0.11 0 0.22 0.01 0.34 0.02l0.68 0.08c0.47 0.04 1.35 0.19 2.21 0.38 0.89 0.21 2.06 0.52 3.32 1.03 1.43 0.57 2.77 1.27 3.99 2.06 1.53 1.01 2.9 2.18 4.09 3.49 1.43 1.58 2.51 3.25 3.33 5.1 0.8 1.78 1.54 3.69 2.07 5.37 0.63 1.97 1.11 3.97 1.42 5.94 0.29 1.85 0.45 3.82 0.5 6.02 0.03 1.37 0.02 2.7 0.01 3.97l-0.01 1.53c-0.01 1.47 0 3.17 0.16 4.68 0.14 1.37 0.4 2.55 0.76 3.43 0.44 1.07 0.84 1.47 1.04 1.61 0.05 0.03 0.09 0.07 0.13 0.11 0.07 0.04 0.13 0.07 0.17 0.1 0.08 0.04 0.15 0.09 0.21 0.14 0.15 0.05 0.28 0.1 0.4 0.16 0.04 0.02 0.08 0.04 0.13 0.05 0.25 0.04 0.42 0.08 0.58 0.11l0.14 0.03 0.5 0.02 0.92 0.06c1.07 0.07 2.04 0.55 2.74 1.35 0.68 0.78 1.02 1.78 0.95 2.81-0.16 2.32-1.95 3.68-4.79 3.68z",
      fill: "#FBB03B"
    }),
    _react2.default.createElement("path", {
      d:
        "m92.21 55.58c0.07 0 0.15 0 0.22 0.01 0 0 0.24 0.03 0.68 0.08 0.4 0.03 1.21 0.17 2.11 0.37 0.89 0.21 1.98 0.5 3.16 0.98 1.19 0.48 2.49 1.11 3.82 1.97 1.32 0.87 2.66 1.96 3.89 3.32 1.23 1.37 2.32 2.95 3.16 4.84 0.7 1.56 1.45 3.44 2.04 5.27 0.6 1.86 1.07 3.81 1.38 5.79s0.45 3.97 0.49 5.89 0 3.74 0 5.48c-0.01 1.74 0.02 3.34 0.17 4.79 0.15 1.44 0.43 2.72 0.82 3.7 0.4 0.98 0.87 1.68 1.38 2.05 0.1 0.13 0.26 0.18 0.38 0.26 0.13 0.07 0.22 0.18 0.37 0.22 0.29 0.07 0.48 0.24 0.77 0.27 0.27 0.05 0.49 0.1 0.7 0.15 0.23 0.01 0.43 0.02 0.59 0.02 0.32 0.02 0.49 0.03 0.49 0.03l0.4 0.03c1.63 0.11 2.86 1.49 2.75 3.09-0.14 2.05-1.96 2.72-3.79 2.72-0.86 0-1.72-0.15-2.42-0.36-2.53-0.8-4.28-2.93-5.37-5.26-1.86-3.95-2.38-8.76-2.55-13.07-0.12-3.07 0.34-6.3-0.02-9.35-0.21-1.74-0.56-3.45-1.04-5.13-0.49-1.71-1.03-3.23-1.71-4.92-0.54-1.36-1.36-2.66-2.27-3.74-0.91-1.09-1.94-1.99-2.97-2.72-1.04-0.73-2.08-1.27-3.03-1.69-0.95-0.43-1.82-0.69-2.54-0.89-0.72-0.18-1.2-0.29-1.69-0.35-0.44-0.07-0.68-0.1-0.68-0.1-1.04-0.16-1.76-1.11-1.6-2.14 0.16-0.95 0.98-1.61 1.91-1.61m0-2c-1.94 0-3.57 1.38-3.87 3.28-0.16 1.02 0.09 2.04 0.7 2.87 0.62 0.84 1.53 1.4 2.58 1.55l0.68 0.1c0.41 0.05 0.8 0.14 1.48 0.31 0.69 0.19 1.44 0.42 2.23 0.78 1 0.44 1.88 0.94 2.7 1.51 0.97 0.69 1.85 1.49 2.59 2.37 0.82 0.97 1.51 2.1 1.94 3.19 0.69 1.7 1.2 3.15 1.64 4.73 0.46 1.61 0.78 3.24 0.97 4.82 0.19 1.63 0.13 3.34 0.06 5.16-0.05 1.32-0.1 2.68-0.05 4.03 0.15 3.76 0.59 9.28 2.74 13.85 1.53 3.26 3.81 5.45 6.58 6.32 0.94 0.29 2.01 0.46 3.02 0.46 3.38 0 5.6-1.76 5.79-4.58 0.09-1.3-0.34-2.56-1.2-3.54-0.87-1-2.09-1.6-3.42-1.68l-0.4-0.03-0.49-0.03h-0.05l-0.19-0.01-0.23-0.01-0.04-0.01c-0.16-0.04-0.34-0.08-0.53-0.11-0.08-0.04-0.2-0.09-0.34-0.14-0.05-0.03-0.1-0.07-0.17-0.1-0.03-0.02-0.05-0.03-0.08-0.05-0.05-0.04-0.09-0.08-0.14-0.11 0 0-0.31-0.23-0.7-1.19-0.31-0.78-0.55-1.87-0.68-3.14-0.15-1.45-0.17-3.13-0.16-4.57 0-0.51 0.01-1.03 0.01-1.55 0.01-1.28 0.02-2.6-0.01-3.99-0.05-2.26-0.22-4.27-0.51-6.16-0.31-2.01-0.8-4.06-1.45-6.09-0.55-1.71-1.3-3.66-2.12-5.48-0.84-1.91-2.02-3.71-3.49-5.35-1.24-1.38-2.68-2.61-4.28-3.66-1.28-0.83-2.69-1.56-4.18-2.16-1.33-0.54-2.54-0.86-3.45-1.07-0.94-0.21-1.83-0.36-2.37-0.41l-0.66-0.08c-0.15-0.02-0.3-0.03-0.45-0.03z",
      fill: "#DE8900"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "g",
        d:
          "m92.43 54.65s0.24 0.03 0.68 0.08c0.4 0.04 1.21 0.17 2.11 0.37 0.89 0.22 1.98 0.51 3.16 1 1.19 0.49 2.49 1.13 3.82 2.01 1.32 0.89 2.66 2 3.89 3.38 1.23 1.39 2.32 3.01 3.16 4.93 0.7 1.59 1.45 3.51 2.04 5.37 0.6 1.89 1.07 3.88 1.38 5.89s0.45 4.05 0.49 6c0.04 1.96 0 3.81 0 5.58-0.01 1.77 0.02 3.4 0.17 4.88 0.15 1.47 0.43 2.77 0.82 3.77 0.4 1 0.87 1.71 1.38 2.09 0.1 0.13 0.26 0.18 0.38 0.27 0.13 0.07 0.22 0.19 0.37 0.22 0.29 0.08 0.48 0.25 0.77 0.27 0.27 0.05 0.49 0.11 0.7 0.15 0.23 0.01 0.43 0.02 0.59 0.02 0.32 0.02 0.49 0.03 0.49 0.03l0.4 0.03c1.63 0.11 2.86 1.52 2.75 3.15s-1.52 2.86-3.15 2.75h-0.04s-0.3-0.02-0.88-0.07c-0.28-0.03-0.64-0.06-1.05-0.1-0.43-0.09-0.92-0.21-1.47-0.36-0.54-0.11-1.15-0.45-1.8-0.73-0.33-0.14-0.63-0.39-0.96-0.6-0.32-0.23-0.67-0.45-0.95-0.76-1.29-1.12-2.21-2.74-2.8-4.41-1.18-3.39-1.14-7.08-1-10.7 0.07-1.81 0.17-3.65 0.19-5.45s-0.04-3.59-0.25-5.36-0.56-3.52-1.04-5.23c-0.49-1.74-1.03-3.29-1.71-5.01-0.54-1.39-1.36-2.71-2.27-3.8-0.91-1.11-1.94-2.03-2.97-2.77-1.04-0.74-2.08-1.3-3.03-1.72-0.95-0.43-1.82-0.7-2.54-0.9-0.72-0.18-1.2-0.3-1.69-0.36-0.44-0.07-0.68-0.1-0.68-0.1-1.04-0.16-1.76-1.14-1.6-2.18 0.19-1.04 1.13-1.75 2.14-1.63z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "f"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#g"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.3 103.65c0.22-2.65-2.55-4.23-4.9-3.96-1.03 0.12-1.85 0.57-2.69 1.16-0.78 0.55-1.55 0.93-2.07 1.79-2.56 4.28 3.81 6.63 6.97 5.08 0.3-0.15 0.57-0.34 0.82-0.54 0.44-0.3 0.84-0.71 1.17-1.26 0.21-0.36 0.33-0.74 0.41-1.12 0.14-0.35 0.26-0.73 0.29-1.15z",
      clipPath: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64.265,
        x2: 64.265,
        y1: 121.13,
        y2: 51.042,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.0396
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD555",
        offset: 0.2128
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD658",
        offset: 0.2174
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE289",
        offset: 0.3133
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE9A8",
        offset: 0.3862
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.4271
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE8A4",
        offset: 0.4486
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDC7C",
        offset: 0.4902
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC93C",
        offset: 0.547
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5962
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF8E07",
        offset: 0.7825
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DB5E0F",
        offset: 0.9846
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m95.36 121.13c-5.13 0-6.38-0.61-6.63-0.79-0.01-1.35 0.55-3.2 1.2-5.34 1.81-6.01 4.29-14.24-2.38-21.92-0.19-0.22-0.47-0.34-0.75-0.34-0.13 0-0.26 0.02-0.38 0.08-6.57 2.73-17.92 5.48-28.46 5.48-2.14 0-4.21-0.11-6.15-0.33-0.04 0-0.08-0.01-0.11-0.01-0.42 0-0.81 0.27-0.95 0.68-1.14 3.38-2.44 6.73-3.67 9.43-3.41 7.5-5.49 10.38-9.15 12.39-2.12-2.81-3.99-5.69-5.96-8.72-0.23-0.76 0.54-5.45 1.16-9.21 0.46-2.76 0.93-5.61 1.22-8.07 0.03-0.26-0.04-0.52-0.2-0.73-13-16.8-13.18-30.57-13.18-30.71 0.6-8.06 2.31-9.49 11.46-9.49 1.16 0 2.51 0.03 4.12 0.09h0.04c0.05 0 0.09 0 0.14-0.01 0.18-0.03 18.26-2.57 36.91-2.57 5.29 0 10.19 0.21 14.54 0.61 14.48 1.35 19.34 13.05 19.06 23.55-0.21 8.03-0.01 14.82 0.15 20.27 0.09 2.99 0.17 5.57 0.17 7.87 0 11.37-5.05 16.57-6.15 17.57-0.87 0.05-3.42 0.22-6.05 0.22z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m73.63 52.04c5.26 0 10.12 0.2 14.45 0.61 11.72 1.09 18.51 9.51 18.17 22.52-0.21 8.06-0.01 14.86 0.15 20.32 0.09 2.98 0.17 5.55 0.17 7.84 0 10.34-4.22 15.28-5.57 16.6-1.08 0.07-3.32 0.2-5.64 0.2-3.33 0-4.9-0.26-5.59-0.45 0.14-1.17 0.62-2.75 1.11-4.4 1.77-5.88 4.45-14.77-2.58-22.86-0.39-0.45-0.94-0.69-1.51-0.69-0.26 0-0.52 0.05-0.77 0.15-6.48 2.69-17.67 5.4-28.08 5.4-2.1 0-4.13-0.11-6.04-0.33-0.08-0.01-0.15-0.01-0.23-0.01-0.85 0-1.62 0.54-1.89 1.36-1.11 3.3-2.44 6.71-3.63 9.34-3.09 6.8-4.96 9.6-7.97 11.49-1.83-2.49-3.49-5.04-5.23-7.71-0.09-1.23 0.63-5.55 1.15-8.74 0.46-2.77 0.93-5.63 1.23-8.12 0.06-0.52-0.08-1.04-0.4-1.46-12.32-15.92-12.93-29.05-12.96-30.02 0.53-7.14 1.46-8.55 10.46-8.55 1.15 0 2.48 0.03 4.08 0.09h0.07c0.09 0 0.19-0.01 0.28-0.02 0.18-0.02 18.2-2.56 36.77-2.56m0-2c-18.94 0-37.05 2.58-37.05 2.58-1.52-0.06-2.9-0.09-4.15-0.09-9.8 0-11.84 1.99-12.46 10.49 0 0 0 14 13.37 31.3-0.8 6.74-3.01 16.74-2.23 17.94 2.14 3.29 4.17 6.43 6.52 9.46 4.4-2.18 6.64-5.1 10.35-13.25 1.12-2.46 2.47-5.84 3.71-9.53 2.06 0.23 4.16 0.34 6.26 0.34 11.37 0 22.89-3.08 28.84-5.55 8.77 10.1 0.76 21.36 0.94 26.77 0.04 1.32 3.94 1.63 7.63 1.63 3.32 0 6.46-0.25 6.46-0.25s6.75-5.21 6.75-18.54c0-6.65-0.65-15.83-0.32-28.11s-5.76-23.25-19.98-24.57c-4.74-0.44-9.72-0.62-14.64-0.62z",
      fill: "#DE8900"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 34.364,
        x2: 34.364,
        y1: 100.38,
        y2: 84.333,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.0396
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD555",
        offset: 0.1715
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB38",
        offset: 0.2244
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC220",
        offset: 0.2842
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBC0E",
        offset: 0.3469
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB803",
        offset: 0.4136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.4916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF8E07",
        offset: 0.728
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DB5E0F",
        offset: 0.9846
      })
    ),
    _react2.default.createElement("path", {
      d: "m35.23 84.33c-0.6 6.29-0.85 9.17-1.73 16.04",
      fill: "url(#d)",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m38.59 110.35c-0.41-0.05-2.8 0.06-3.65 0.1-0.76 0.03-2.16 0.04-2.92-0.01 0 0-1.51-0.52-3.2-0.34-1.22-0.46-8.49-0.67-8.9 6.52-0.2 3.55 1.29 6.81 4.28 7.02s3.08-0.47 3.46-0.52c0.62 0.22 1.57 1.11 4.25 1.03s2.58-1.06 3.93-0.96c1.19 0.09 2.46 1.06 3.64 0.87 3.06-0.48 5.3-3.88 5.45-6.63 0.12-2.15-0.91-4.39-2.76-5.75-1.04-0.76-2.29-1.17-3.58-1.33z",
      fill: "#FFECB3",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 1.9702
    }),
    _react2.default.createElement("path", {
      d: "m32.58 111.08c-1.32 0.96-2.2 1.54-2.6 3.12s-0.22 3.31 0.5 4.77",
      fill: "none",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m27.33 110.75c-2.28 2.16-3.01 5.17-1.62 7.99",
      fill: "none",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m101.07 110.43c-1.83-0.18-3.77 0.57-5.47 0.57 0 0-3.19-0.36-3.54-0.3-0.59-0.19-7.5-0.76-7.5 6.55 0 3.61 0.69 6.75 4.13 6.75 0 0 1.16-0.59 2.56-0.53s0.69 0.88 4.34 1c2.17 0.07 3.03-1.03 3.03-1.03 2.65 0 3.17 1.19 5.53-0.19 1.99-1.16 3.29-4.21 3.16-6.49-0.17-2.76-1.21-4.41-3.22-5.57-0.91-0.53-1.94-0.65-3.02-0.76z",
      fill: "#FFECB3",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m96.56 110.88c-1.26 0.92-1.65 1.42-2.03 2.94s-0.11 3.38 0.57 4.79",
      fill: "none",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m91.44 111c-2.18 2.07-2.43 5.14-1.1 7.83",
      fill: "none",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("ellipse", {
      cx: 38.77,
      cy: 57.77,
      rx: 19.21,
      ry: 20.57,
      fill: "#FFECB3"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m88.25 52.69c-23.39-1.93-51.81 1.56-51.81 1.56-13.41-0.49-15.76-0.81-16.47 8.77 0 0 0 14 13.37 31.3-0.8 6.74-3.01 16.74-2.23 17.94 2.14 3.29 4.17 6.43 6.52 9.46 4.4-2.18 6.64-5.1 10.35-13.25 1.12-2.46 2.47-5.84 3.71-9.53 13.19 1.5 28.05-2.28 35.11-5.21 8.77 10.1 0.76 21.36 0.94 26.77 0.08 2.5 14.08 1.38 14.08 1.38s4.81-4.67 4.81-18c0-6.65-0.45-16.15-0.12-28.44 0.32-12.29-6.13-21.75-18.26-22.75z"
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
        "m75.44 49.8-1.47 11.31c-0.23 1.78-2.07 1.78-2.3 0l-1.46-11.31c-0.13-1 0.42-1.91 1.15-1.91h2.94c0.72 0 1.27 0.92 1.14 1.91z",
      clipPath: "url(#a)",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.52 50.48-1.74 10.77c-0.29 1.78-2.33 1.75-2.59-0.03l-1.67-11.53c-0.16-1.13 0.63-2.11 1.53-1.91l3.41 0.76c0.73 0.17 1.21 1.04 1.06 1.94z",
      clipPath: "url(#a)",
      fill: "#404040"
    }),
    _react2.default.createElement("path", {
      d:
        "m99.71 53.83-4.6 9.29c-0.76 1.53-2.91 0.9-2.73-0.8l1.19-11.01c0.12-1.08 1.2-1.74 2.11-1.28l3.41 1.71c0.73 0.37 1.01 1.31 0.62 2.09z",
      clipPath: "url(#a)",
      fill: "#404040"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m48.81 101.71-6.38-3.19c-1.44-0.72-0.82-2.68 0.85-2.68l7.4-0.03c1.06 0 1.82 0.88 1.53 1.79l-1.02 3.22c-0.29 0.91-1.47 1.35-2.38 0.89z"
      }),
      _react2.default.createElement("path", {
        d:
          "m51.47 93.63-6.38-3.19c-1.44-0.72-0.82-2.68 0.85-2.68l7.4-0.03c1.06 0 1.82 0.88 1.53 1.79l-1.02 3.22c-0.29 0.9-1.46 1.35-2.38 0.89z"
      }),
      _react2.default.createElement("path", {
        d:
          "m45.52 110.07-5.66-3.63c-1.33-0.85-0.5-2.74 1.15-2.62l7.02 0.52c1.07 0.08 1.75 1.04 1.35 1.94l-1.36 3.11c-0.39 0.9-1.64 1.24-2.5 0.68z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m107.89 91.84-7.95-0.77c-1.99-0.19-2.21-1.8-0.32-2.27l7.57-1.88c1.26-0.31 2.64 0.16 2.75 0.95l0.38 2.65c0.11 0.79-1.1 1.44-2.43 1.32z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.76 99.28-8.31-1.07c-1.87-0.24-1.97-1.8-0.14-2.14l8.14-1.5c1.17-0.21 2.36 0.29 2.4 1.01l0.17 2.57c0.05 0.72-1.07 1.28-2.26 1.13z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.06 107.1-7.69-1.54c-1.81-0.36-1.65-1.92 0.22-2.16l7.95-1.02c1.22-0.16 2.34 0.42 2.27 1.16l-0.26 2.56c-0.08 0.74-1.32 1.24-2.49 1z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 50,
        x2: 50,
        y1: 112,
        y2: 86.167,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFECB3",
        offset: 0.0396
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD555",
        offset: 0.1715
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB38",
        offset: 0.2244
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC220",
        offset: 0.2842
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBC0E",
        offset: 0.3469
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB803",
        offset: 0.4136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.4916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF8E07",
        offset: 0.728
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DB5E0F",
        offset: 0.9846
      })
    ),
    _react2.default.createElement("path", {
      d: "m45.17 112c3.17-5.17 8.07-20.2 9.67-25.83",
      fill: "url(#b)",
      stroke: "#DE8900",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 4.1583,
        x2: 23.456,
        y1: 20.318,
        y2: 20.318,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB503",
        offset: 0.6437
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB10E",
        offset: 0.7668
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA920",
        offset: 0.882
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA723",
        offset: 0.9
      })
    ),
    _react2.default.createElement("circle", {
      cx: 13.81,
      cy: 20.32,
      r: 9.65,
      fill: "url(#o)",
      stroke: "#DE8900",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("circle", {
      cx: 13.81,
      cy: 20.32,
      r: 5.5,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: 48.544,
        x2: 67.842,
        y1: 20.318,
        y2: 20.318,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB503",
        offset: 0.6437
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB10E",
        offset: 0.7668
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA920",
        offset: 0.882
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFA723",
        offset: 0.9
      })
    ),
    _react2.default.createElement("circle", {
      cx: 58.19,
      cy: 20.32,
      r: 9.65,
      fill: "url(#n)",
      stroke: "#DE8900",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("circle", {
      cx: 58.19,
      cy: 20.32,
      r: 5.5,
      fill: "#fff"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 36,
        x2: 36,
        y1: 13.635,
        y2: 71.123,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB700",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCB402",
        offset: 0.6341
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F2A90A",
        offset: 0.7489
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E29717",
        offset: 0.8564
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D98E1E",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36 71.67c-14.36 0-29.81-9.15-29.81-29.25s15.45-29.26 29.81-29.26c7.95 0 15.32 2.68 20.74 7.55 5.94 5.33 9.08 12.84 9.08 21.71-0.01 19.2-15 29.25-29.82 29.25z",
      fill: "url(#m)"
    }),
    _react2.default.createElement("path", {
      d:
        "m36 14.16c7.71 0 14.83 2.59 20.07 7.29 5.72 5.14 8.74 12.39 8.74 20.96 0 8.54-3.02 15.77-8.75 20.92-5.25 4.73-12.38 7.33-20.07 7.33-13.88 0-28.81-8.84-28.81-28.25 0-8.68 3.02-15.96 8.74-21.06 5.21-4.63 12.33-7.19 20.08-7.19m0-2c-16 0-30.81 10.45-30.81 30.25 0 19.7 14.81 30.26 30.81 30.26s30.81-10.83 30.81-30.25c0-19.54-14.81-30.26-30.81-30.26z",
      fill: "#DE8900"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 20.95,
        cy: 38.5,
        rx: 4.95,
        ry: 5.6
      }),
      _react2.default.createElement("ellipse", {
        cx: 51.05,
        cy: 38.43,
        rx: 4.95,
        ry: 5.6
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36 57.08c5.95 0 10.78-2.48 10.78 0.56s-4.82 11.9-10.78 11.9-10.78-8.86-10.78-11.9 4.83-0.56 10.78-0.56z",
      fill: "#ccc"
    }),
    _react2.default.createElement("path", {
      d:
        "M36,54.19c7.9,0,14.31-2.25,14.31,0.5S43.9,65.48,36,65.48S21.69,57.45,21.69,54.7 S28.1,54.19,36,54.19z",
      fill: "#231F20"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m32.37 32.16s0.06-0.1 0.18-0.25c0.05-0.07 0.14-0.17 0.28-0.29 0.13-0.12 0.28-0.24 0.44-0.34 0.32-0.24 0.73-0.44 1.2-0.6 0.24-0.06 0.48-0.15 0.74-0.18 0.26-0.04 0.52-0.05 0.79-0.07 0.27 0.01 0.53 0.03 0.79 0.07 0.26 0.02 0.51 0.11 0.75 0.17 0.47 0.16 0.89 0.36 1.2 0.6 0.32 0.22 0.56 0.45 0.7 0.62 0.15 0.17 0.22 0.28 0.22 0.28 0.29 0.43 0.18 1.01-0.25 1.31-0.19 0.13-0.41 0.18-0.62 0.16l-0.18-0.02s-0.1-0.01-0.26-0.04c-0.15-0.03-0.37-0.06-0.63-0.11-0.12-0.02-0.25-0.04-0.39-0.06-0.13-0.03-0.28-0.02-0.42-0.05-0.29-0.02-0.6-0.04-0.9-0.04-0.31-0.01-0.61 0.02-0.9 0.04-0.29 0.04-0.57 0.06-0.82 0.11-0.12 0.02-0.23 0.03-0.32 0.05-0.09 0.01-0.19 0.02-0.29 0.05-0.19 0.05-0.3 0.07-0.3 0.07-0.53 0.09-1.04-0.27-1.13-0.8-0.06-0.24 0-0.48 0.12-0.68z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.63 26.57s0.13-0.16 0.36-0.43c0.11-0.13 0.27-0.29 0.5-0.47 0.22-0.18 0.48-0.39 0.76-0.56 0.28-0.19 0.6-0.37 0.95-0.53 0.35-0.18 0.74-0.31 1.14-0.45 0.41-0.11 0.84-0.23 1.29-0.29 0.44-0.08 0.9-0.09 1.36-0.11 0.46 0.02 0.92 0.03 1.36 0.11 0.45 0.05 0.87 0.18 1.29 0.28 0.4 0.14 0.79 0.27 1.14 0.45 0.36 0.16 0.67 0.34 0.95 0.53 0.29 0.17 0.53 0.37 0.74 0.54s0.38 0.33 0.51 0.48c0.27 0.29 0.4 0.46 0.4 0.46 0.32 0.4 0.25 0.98-0.15 1.3-0.23 0.18-0.52 0.24-0.79 0.18l-0.12-0.03s-0.19-0.05-0.49-0.14c-0.3-0.1-0.73-0.22-1.24-0.35-0.25-0.07-0.52-0.12-0.81-0.18-0.28-0.07-0.59-0.09-0.89-0.15-0.62-0.08-1.27-0.13-1.92-0.13-0.65 0.01-1.3 0.06-1.92 0.13-0.3 0.07-0.61 0.08-0.89 0.15-0.28 0.06-0.56 0.11-0.81 0.18-0.24 0.06-0.47 0.12-0.67 0.17-0.19 0.05-0.38 0.09-0.56 0.17-0.34 0.12-0.53 0.17-0.53 0.17-0.5 0.14-1.02-0.16-1.16-0.66-0.04-0.29 0.03-0.59 0.2-0.82z"
      }),
      _react2.default.createElement("path", {
        d:
          "m28.79 20.99s0.15-0.18 0.42-0.48c0.13-0.14 0.31-0.33 0.58-0.52 0.25-0.2 0.54-0.43 0.86-0.62 0.32-0.21 0.68-0.41 1.08-0.59 0.39-0.2 0.83-0.34 1.29-0.5 0.46-0.12 0.95-0.26 1.45-0.32 0.5-0.09 1.02-0.1 1.53-0.12 0.51 0.02 1.03 0.03 1.53 0.12 0.5 0.06 0.99 0.2 1.45 0.32 0.46 0.16 0.9 0.3 1.29 0.5 0.4 0.18 0.76 0.38 1.08 0.59 0.33 0.19 0.6 0.41 0.84 0.6 0.24 0.18 0.44 0.37 0.59 0.53 0.31 0.32 0.46 0.51 0.46 0.51 0.32 0.39 0.27 0.97-0.12 1.29-0.24 0.2-0.55 0.26-0.83 0.18l-0.11-0.03s-0.21-0.06-0.56-0.18c-0.34-0.12-0.84-0.27-1.42-0.43-0.29-0.08-0.6-0.15-0.93-0.23-0.32-0.09-0.68-0.11-1.03-0.19-0.72-0.1-1.48-0.16-2.24-0.17-0.38 0.02-0.76 0.01-1.14 0.05-0.38 0.01-0.74 0.08-1.1 0.12-0.35 0.08-0.71 0.1-1.03 0.19-0.33 0.08-0.65 0.14-0.93 0.23-0.3 0.08-0.55 0.15-0.77 0.22-0.22 0.06-0.44 0.12-0.63 0.21-0.38 0.14-0.6 0.21-0.6 0.21-0.49 0.15-1.02-0.13-1.16-0.63-0.12-0.31-0.04-0.63 0.15-0.86z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36 38.56c-2.46 0-4 2.01-4 4.47v5.82c0 2.46 1.54 4.47 4 4.47s4-2.01 4-4.47v-5.82c0-2.46-1.54-4.47-4-4.47z",
      fill: "#FF9D00"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("circle", {
        cx: 28.85,
        cy: 53.64,
        r: 9.06
      }),
      _react2.default.createElement("circle", {
        cx: 43.15,
        cy: 53.64,
        r: 9.06
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: 36,
        x2: 36,
        y1: 45,
        y2: 50.21,
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
        "M36,50c1.81,0,3.47-1.84,4.48-3.33c0.5-0.74-0.02-1.67-0.92-1.67h-7.13 c-0.89,0-1.42,0.93-0.92,1.67C32.54,48.16,34.19,50,36,50z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "k",
        d:
          "m66.81 42.41c0-19.53-14.81-30.25-30.81-30.25s-30.81 10.45-30.81 30.25c0 19.7 14.81 30.26 30.81 30.26s30.81-10.83 30.81-30.26z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "j"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#k"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#j)",
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m5.52 38.99 7.13 0.98c0.46 0.06 0.79 0.49 0.73 0.96-0.05 0.39-0.36 0.67-0.73 0.73l-7.13 0.98c-1 0.14-1.93-0.56-2.07-1.57s0.56-1.93 1.57-2.07c0.17-0.04 0.35-0.03 0.5-0.01z"
      }),
      _react2.default.createElement("path", {
        d:
          "m5.52 44.59 7.13 0.98c0.46 0.06 0.79 0.49 0.73 0.96-0.05 0.39-0.36 0.67-0.73 0.73l-7.13 0.98c-1 0.14-1.93-0.56-2.07-1.57s0.56-1.93 1.57-2.07c0.17-0.04 0.35-0.03 0.5-0.01z"
      }),
      _react2.default.createElement("path", {
        d:
          "m5.52 33.66 7.13 0.98c0.46 0.06 0.79 0.49 0.73 0.96-0.05 0.39-0.36 0.67-0.73 0.73l-7.13 0.97c-1 0.14-1.93-0.56-2.07-1.57s0.56-1.93 1.57-2.07c0.17-0.02 0.35-0.02 0.5 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m66.63 42.64-7.13-0.98c-0.46-0.06-0.79-0.49-0.73-0.96 0.05-0.39 0.36-0.67 0.73-0.73l7.13-0.97c1-0.14 1.93 0.56 2.07 1.57s-0.56 1.93-1.57 2.07c-0.17 0.02-0.34 0.02-0.5 0z"
      }),
      _react2.default.createElement("path", {
        d:
          "m66.63 48.24-7.13-0.98c-0.46-0.06-0.79-0.49-0.73-0.96 0.05-0.39 0.36-0.67 0.73-0.73l7.13-0.98c1-0.14 1.93 0.56 2.07 1.57s-0.56 1.93-1.57 2.07c-0.17 0.03-0.34 0.03-0.5 0.01z"
      }),
      _react2.default.createElement("path", {
        d:
          "m66.63 37.32-7.13-0.98c-0.46-0.06-0.79-0.49-0.73-0.96 0.05-0.39 0.36-0.67 0.73-0.73l7.13-0.98c1-0.14 1.93 0.56 2.07 1.57s-0.56 1.93-1.57 2.07c-0.17 0.03-0.34 0.03-0.5 0.01z"
      })
    )
  );
}

exports.default = Tiger2;