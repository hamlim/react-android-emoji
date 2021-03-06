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

function WineGlass(props) {
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
        id: "e",
        x1: 64.897,
        x2: 64.897,
        y1: 102.84,
        y2: 124.28,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0.1429
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEDEF",
        offset: 0.4477
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2E5E7",
        offset: 0.6128
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D4D8DB",
        offset: 0.7445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C1C5C8",
        offset: 0.8584
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A8ADB1",
        offset: 0.96
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9CA2A6",
        offset: 0.9995
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.9,
      cy: 113.56,
      rx: 20.92,
      ry: 10.72,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64.596,
        x2: 64.596,
        y1: 62.336,
        y2: 110.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CA2A6",
        offset: 0.00053811
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C4C9CC",
        offset: 0.3607
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E1E5E7",
        offset: 0.6764
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0.8571
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.42 76.66c0.14-13.12 2.72-14.53 2.72-14.53 0 0.11-3.47-0.3-4.93-0.48-0.43-0.05-0.86-0.05-1.28 0-1.45 0.18-4.86 0.59-4.86 0.48 0 0 2.61 1.41 2.75 14.53 0.11 10.18 0.54 25.59-0.92 31.79-0.92 3.92 8.61 3.17 7.54-0.17-1.91-6.02-1.13-21.4-1.02-31.62z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 54.105,
        cy: 20.969,
        r: 30.292,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E6EAEC",
        offset: 0.1982
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D6DADD",
        offset: 0.4529
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BCC2C4",
        offset: 0.7373
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9EA5A8",
        offset: 0.9943
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.31 8.53c0.11-0.11-2.44-4.51-20.5-4.51-17.96 0-20.23 4.31-20.12 4.42 0 0-4.44 17.04-2.19 31.29s13.05 23.62 22.5 23.62 20.25-9.38 22.51-23.63-2.2-31.19-2.2-31.19z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.87 5.93c9.68 0 16.23 1.63 18.08 2.79-1.78 1.11-7.99 2.77-18.08 2.77-10.02 0-16.14-1.67-17.84-2.78 1.7-1.11 7.81-2.78 17.84-2.78m0-2c-11.14 0-20.17 2.14-20.17 4.78s9.03 4.78 20.17 4.78 20.44-2.13 20.44-4.76-9.3-4.8-20.44-4.8z",
      fill: "#919191"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 44.664,
        x2: 79.606,
        y1: 25.461,
        y2: 52.7,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#910000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.86 36.81c-10.66 0-19.51-1.83-21.27-4.23 0.03 2.36 0.19 4.72 0.55 6.99 2.09 13.21 12.09 21.91 20.86 21.91 8.76 0 18.78-8.7 20.87-21.91 0.39-2.46 0.55-5.03 0.55-7.58-0.64 2.68-10.05 4.82-21.56 4.82z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 42.613,
        x2: 85.42,
        y1: 32.488,
        y2: 32.488,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#961717",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.42 32.4c0 4.26-9.43 7.8-21.3 7.8s-21.5-3.45-21.5-7.71 9.63-7.71 21.5-7.71c11.68 0 21.3 3.36 21.3 7.62z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m53.71 14.66c-1.05-0.25-2.12-0.07-3.02 0.47-0.9 0.55-1.61 1.47-1.95 2.6-0.51 1.7-0.87 3.28-1.14 4.77-0.26 1.49-0.43 2.9-0.53 4.26s-0.12 2.67-0.09 3.98 0.13 2.62 0.29 3.97c0.17 1.35 0.4 2.74 0.74 4.22 0.34 1.47 0.78 3.03 1.38 4.69 0.51 1.42 1.48 2.51 2.48 3.07s2.03 0.58 2.84 0.02c0.06-0.04 0.09-0.06 0.14-0.1 0.69-0.47 1.12-1.26 1.34-2.16s0.21-1.92-0.07-2.92c-0.46-1.66-0.76-3.18-0.95-4.6s-0.28-2.75-0.3-4.04 0.04-2.55 0.17-3.83 0.34-2.59 0.65-3.98 0.74-2.87 1.34-4.46c0.45-1.2 0.32-2.45-0.27-3.56-0.58-1.11-1.64-2.07-3.05-2.4z",
      fill: "#fff",
      opacity: 0.47
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.81 6.02c14.08 0 17.94 2.71 18.65 3.34 0.58 2.37 4.07 17.43 2.07 30.05-1.53 9.67-7.5 17.86-15.21 20.87-0.41 0.16-0.74 0.44-0.96 0.79-1.26 1.48-2.83 5.38-2.94 15.56-0.02 1.87-0.06 3.91-0.11 6.04-0.14 6.9-0.31 14.71 0.22 20.44 0.09 0.98 0.88 1.75 1.86 1.81 9.06 0.58 16.42 4.46 16.42 8.64 0 4.65-8.84 8.72-18.92 8.72s-18.92-4.07-18.92-8.72c0-4.1 6.94-7.88 15.8-8.59 0.98-0.08 1.76-0.86 1.83-1.85 0.47-6.35 0.35-15.33 0.25-22.54-0.02-1.38-0.04-2.7-0.05-3.95-0.08-7.41-0.97-12.61-2.57-15.04-0.26-0.4-0.66-0.69-1.11-0.82-3.75-1.09-7.44-3.64-10.39-7.2-3.25-3.93-5.42-8.83-6.26-14.16-2.01-12.66 1.52-27.89 2.07-30.18 0.67-0.6 4.37-3.21 18.27-3.21m0-2c-17.96 0-20.23 4.31-20.12 4.42 0 0-4.44 17.04-2.19 31.29 1.91 12.05 9.93 20.62 18.07 22.97 0.77 1.16 2.14 4.54 2.24 13.96 0.08 7.87 0.36 18.87-0.19 26.32-9.99 0.81-17.64 5.24-17.64 10.59 0 5.92 9.36 10.72 20.92 10.72 11.55 0 20.92-4.8 20.92-10.72 0-5.46-7.98-9.97-18.29-10.63-0.67-7.36-0.19-18.36-0.1-26.28 0.13-12.54 2.49-14.38 2.7-14.52-0.02 0-0.04 0.01-0.08 0.01 7.57-2.96 14.68-11.17 16.46-22.42 2.26-14.25-2.19-31.2-2.19-31.2 0.09-0.11-2.46-4.51-20.51-4.51zm6.32 57.98zm0 0.13s-0.01 0-0.01 0.01c0.01 0 0.01-0.01 0.01-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m70.73 111.55c-1.53 0.69-2.89 1.01-4.17 1.18-1.27 0.16-2.47 0.16-3.75 0-1.27-0.16-2.63-0.49-4.17-1.18-1.04-0.47-1.47-1.58-1.02-2.29 0.45-0.72 1.46-0.89 2.28-0.52 1.82 0.82 3.31 1.02 4.77 1.02 1.47 0 2.95-0.2 4.77-1.02 0.82-0.37 1.83-0.2 2.28 0.52 0.48 0.72 0.05 1.83-0.99 2.29z",
      fill: "#BFBFBF"
    }),
    _react2.default.createElement("path", {
      d:
        "m70.73 111.64c-1.53 0.69-2.89 1.01-4.17 1.18-1.27 0.16-2.47 0.16-3.75 0-1.27-0.16-2.63-0.49-4.17-1.18-1.04-0.47-1.47-1.58-1.02-2.29 0.45-0.72 1.46-0.89 2.28-0.52 1.82 0.82 3.31 1.02 4.77 1.02 1.47 0 2.95-0.2 4.77-1.02 0.82-0.37 1.83-0.2 2.28 0.52 0.48 0.71 0.05 1.82-0.99 2.29z",
      fill: "#BFBFBF"
    }),
    _react2.default.createElement("path", {
      d:
        "m65.7 119.3c-1.68 0.15-3.14 0.11-4.49-0.01s-2.58-0.34-3.79-0.64-2.4-0.68-3.65-1.2-2.56-1.17-3.98-2.08c-0.57-0.36-0.73-1.08-0.39-1.57 0.35-0.49 1.04-0.59 1.56-0.25 1.29 0.83 2.5 1.43 3.64 1.9s2.23 0.82 3.34 1.1 2.23 0.47 3.46 0.58 2.57 0.14 4.11 0.01c0.61-0.05 1.18 0.36 1.26 0.95 0.08 0.6-0.4 1.16-1.07 1.21z",
      fill: "#fff"
    })
  );
}

exports.default = WineGlass;
