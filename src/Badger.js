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

function Badger(props) {
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
        "m30.24 17.49c-2.12-1.55-4.46-2.77-6.71-3.53-6.9-2.34-13.5 1.2-13.74 8.55-0.23 7.09 3.76 14.46 9.11 18.91 4.97 4.13 14.04-2.39 16.73-6.51 4.34-6.63 0.33-13.24-5.39-17.42z",
      fill: "#1A1A1A"
    }),
    _react2.default.createElement("path", {
      d:
        "m27.45 21.73c-5.64-3.52-8.87-3.94-10.54-2.71-3.43 2.51-2.42 12.48 4.29 18.72 4.45 4.15 21.52-6.46 6.25-16.01z",
      fill: "#666"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.76 17.49c2.12-1.55 4.46-2.77 6.71-3.53 6.9-2.34 13.5 1.2 13.74 8.55 0.23 7.09-3.76 14.46-9.11 18.91-4.97 4.13-14.04-2.39-16.73-6.51-4.34-6.63-0.33-13.24 5.39-17.42z",
      fill: "#1A1A1A"
    }),
    _react2.default.createElement("path", {
      d:
        "m100.55 21.73c5.64-3.52 8.87-3.94 10.54-2.71 3.43 2.51 2.42 12.48-4.29 18.72-4.45 4.15-21.52-6.46-6.25-16.01z",
      fill: "#666"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.02 19.05c9.19 0 23.22 4.29 32.44 10.16 11.12 7.08 22.13 42.75 23.51 49.83 0.62 3.17-8.72 7.74-19.65 15.16-12.23 8.33-24.97 21.8-35.91 21.8-9.85 0-24.5-12.54-35.83-20.26-12.65-8.62-21.44-12.69-20.51-16.69 1.59-6.87 13.11-42.3 23.85-49.32 9.4-6.13 22.64-10.68 32.1-10.68m0-3.84c-9.94 0-24 4.65-34.2 11.3-12.6 8.22-24.37 46.77-25.5 51.67-1.3 5.64 4.25 9.19 13.45 15.08 2.58 1.65 5.5 3.52 8.65 5.66 2.34 1.59 4.82 3.39 7.44 5.29 10.59 7.68 21.53 15.63 30.56 15.63 9.18 0 18.24-7.16 27.84-14.74 3.39-2.67 6.89-5.44 10.24-7.72 2.94-2 5.82-3.82 8.35-5.42 8.94-5.66 13.87-8.77 12.91-13.66-0.83-4.22-11.85-43.82-25.22-52.34-9.65-6.13-24.48-10.75-34.52-10.75z",
      fill: "#454545"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64.003,
        x2: 64.003,
        y1: 30.412,
        y2: 113.45,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.6516
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F1F1F1",
        offset: 0.7047
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.7935
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D4D4D4",
        offset: 0.8883
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D1D1D1",
        offset: 0.999
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.41 114.71c-7.36 0-18.08-7.79-27.54-14.65-2.65-1.93-5.16-3.75-7.56-5.38-3.21-2.18-6.16-4.07-8.77-5.74-6.54-4.18-11.7-7.49-11.22-9.6 1.54-6.66 12.94-41.77 23.3-48.53 9.45-6.17 22.36-10.47 31.4-10.47 9.18 0 22.83 4.28 31.75 9.96 10.34 6.58 21.42 41.22 22.95 49 0.28 1.44-5.76 5.27-10.62 8.34-2.57 1.62-5.48 3.47-8.49 5.51-3.5 2.38-7.08 5.2-10.54 7.94-8.49 6.69-17.26 13.62-24.66 13.62z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.02 21.62c8.83 0 22.47 4.29 31.06 9.76 9.91 6.31 20.64 39.76 22.32 47.9-0.77 1.43-5.87 4.66-9.99 7.27-2.58 1.63-5.5 3.48-8.53 5.54-3.54 2.41-7.13 5.24-10.61 7.99-8.31 6.57-16.91 13.36-23.86 13.36-6.94 0-17.49-7.65-26.79-14.41-2.66-1.93-5.18-3.76-7.6-5.4-3.22-2.19-6.18-4.09-8.8-5.76-3.62-2.32-6.48-4.14-8.43-5.73-2.18-1.78-2.24-2.5-2.23-2.51 1.84-7.95 13.24-41.53 22.76-47.75 9.26-6.04 21.88-10.26 30.7-10.26m0-2.57c-9.46 0-22.7 4.54-32.1 10.68-10.75 7.02-22.27 42.44-23.85 49.32-0.93 4 7.86 8.08 20.51 16.69 11.33 7.71 25.98 20.26 35.83 20.26 10.94 0 23.68-13.47 35.91-21.79 10.93-7.42 20.27-11.99 19.65-15.16-1.39-7.08-12.4-42.75-23.51-49.83-9.22-5.88-23.26-10.17-32.44-10.17z",
      fill: "#B0B0B0"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 64,
        x2: 64,
        y1: 29.403,
        y2: 114.7,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.6516
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F1F1F1",
        offset: 0.7047
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.7935
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D4D4D4",
        offset: 0.8883
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D1D1D1",
        offset: 0.999
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m119.97 79.05c-1.39-7.08-12.4-42.75-23.51-49.83-9.22-5.87-23.25-10.16-32.44-10.16-9.46 0-22.7 4.54-32.1 10.68-10.75 7.01-22.27 42.43-23.85 49.31-0.93 4 7.86 8.08 20.51 16.69 11.33 7.71 25.98 20.26 35.83 20.26 10.94 0 23.68-13.47 35.91-21.79 10.93-7.42 20.27-11.99 19.65-15.16z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m73.88 100.27 0.01 0.61c0.03 1.71-0.38 3.32-1.12 4.73-0.3 0.57-0.64 1.1-1.04 1.59-0.39 0.5-0.84 0.95-1.32 1.36-1.69 1.44-3.86 2.32-6.25 2.36-0.3 0-0.59 0-0.89-0.02-0.29-0.02-0.58-0.05-0.87-0.1-0.85-0.14-1.67-0.39-2.44-0.73s-1.48-0.78-2.13-1.3c-0.5-0.39-0.95-0.84-1.36-1.32s-0.78-1-1.09-1.56c-0.78-1.39-1.24-2.99-1.27-4.69l-0.01-0.61c4.4-0.07 9.85-2.5 9.77-7.44 0.09 4.95 5.62 7.19 10.01 7.12z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "a",
        d:
          "m73.88 100.27 0.01 0.61c0.03 1.71-0.38 3.32-1.12 4.73-0.3 0.57-0.64 1.1-1.04 1.59-0.39 0.5-0.84 0.95-1.32 1.36-1.69 1.44-3.86 2.32-6.25 2.36-0.3 0-0.59 0-0.89-0.02-0.29-0.02-0.58-0.05-0.87-0.1-0.85-0.14-1.67-0.39-2.44-0.73s-1.48-0.78-2.13-1.3c-0.5-0.39-0.95-0.84-1.36-1.32s-0.78-1-1.09-1.56c-0.78-1.39-1.24-2.99-1.27-4.69l-0.01-0.61c4.4-0.07 9.85-2.5 9.77-7.44 0.09 4.95 5.62 7.19 10.01 7.12z"
      })
    ),
    _react2.default.createElement("use", {
      fill: "#1A1A1A",
      xlinkHref: "#a"
    }),
    _react2.default.createElement(
      "clipPath",
      {
        id: "e"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d",
        clipPath: "url(#e)"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#a"
      })
    ),
    _react2.default.createElement("path", {
      d: "m55.96 112.5c-0.07-4.53 3.53-8.26 8.06-8.33s8.26 3.53 8.33 8.06",
      clipPath: "url(#d)",
      fill: "#ED7770"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.91 91.5c0.08 4.73-3.69 8.62-8.41 8.7-2.16 0.04-4.15-0.73-5.67-2.03",
      fill: "none",
      stroke: "#404040",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2.0568
    }),
    _react2.default.createElement("path", {
      d:
        "m63.87 91.5c0.08 4.73 3.97 8.49 8.7 8.41 2.16-0.04 4.12-0.87 5.6-2.21",
      fill: "none",
      stroke: "#404040",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 2.0568
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 80.74,
        y2: 97.341,
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
        "M64,96.1c6,0,9.52-3.28,11.57-7.24c2.04-3.95-0.26-8.75-3.98-8.75H56.42 c-3.72,0-6.03,4.8-3.98,8.75C54.48,92.82,58,96.1,64,96.1z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 104.24,
        x2: 76.742,
        y1: 33.714,
        y2: 91.214,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#454545",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#090A07",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.66 64.51c-4.43-13.19-11.67-30.58-18.95-35.3-3.76-2.43-8.33-4.58-13.03-6.28-10.44 16.09-10.14 38.36-8.38 53.04 5.03 1.35 9.54 3.57 13.21 6.43 6.85-5.38 16.48-12.27 27.15-17.89z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 23.195,
        x2: 50.695,
        y1: 33.866,
        y2: 89.866,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#454545",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#090A07",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m43.74 23.26c-4.45 1.77-8.79 3.98-12.51 6.47-7 4.68-14.33 22-18.89 35.06 10.57 5.67 20.08 12.58 26.78 17.91 3.52-2.84 7.84-5.07 12.69-6.49 1.76-14.57 2.13-36.8-8.07-52.95z",
      fill: "url(#i)"
    }),
    _react2.default.createElement("circle", {
      cx: 41,
      cy: 66.3,
      r: 8.12,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 41,
      cy: 66.3,
      r: 8.12,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 41,
      cy: 66.3,
      r: 6.68,
      fill: "#1A1A1A"
    }),
    _react2.default.createElement("circle", {
      cx: 41,
      cy: 63.42,
      r: 1.92,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 87,
      cy: 66.3,
      r: 8.12,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 87,
      cy: 66.3,
      r: 8.12,
      fill: "#fff"
    }),
    _react2.default.createElement("circle", {
      cx: 87,
      cy: 66.3,
      r: 6.68,
      fill: "#1A1A1A"
    }),
    _react2.default.createElement("circle", {
      cx: 87,
      cy: 63.42,
      r: 1.92,
      fill: "#fff"
    })
  );
}

exports.default = Badger;
