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

function DiamondShapeWithADotInside(props) {
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
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4.3333,
        y2: 124.43,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#80D8FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#36C1FF",
        offset: 0.5888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00B0FF",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.41 44.85 10.22-10.22c3.12-3.12 3.12-8.19 0-11.31l-16.97-16.98c-3.12-3.12-8.19-3.12-11.31 0l-16.98 16.97c-3.12 3.12-3.12 8.19 0 11.31l10.22 10.22c1.17 1.17 2.92 1.49 4.44 0.83 2.44-1.07 5.13-1.67 7.97-1.67s5.53 0.6 7.97 1.67c1.51 0.67 3.27 0.34 4.44-0.82z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 102.99,
        x2: 102.99,
        y1: 4.3333,
        y2: 124.43,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#80D8FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#36C1FF",
        offset: 0.5888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00B0FF",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.66 58.34-16.97-16.97c-3.12-3.12-8.19-3.12-11.31 0l-10.23 10.22c-1.17 1.17-1.49 2.92-0.83 4.44 1.08 2.44 1.68 5.13 1.68 7.97s-0.6 5.53-1.67 7.97c-0.66 1.51-0.34 3.27 0.83 4.44l10.22 10.22c3.12 3.12 8.19 3.12 11.31 0l16.97-16.97c3.12-3.13 3.12-8.19 0-11.32z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 25.007,
        x2: 25.007,
        y1: 4.3333,
        y2: 124.43,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#80D8FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#36C1FF",
        offset: 0.5888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00B0FF",
        offset: 0.9954
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m44.85 51.59-10.22-10.22c-3.12-3.12-8.19-3.12-11.31 0l-16.98 16.97c-3.12 3.12-3.12 8.19 0 11.31l16.97 16.97c3.12 3.12 8.19 3.12 11.31 0l10.22-10.22c1.17-1.17 1.49-2.92 0.83-4.44-1.07-2.43-1.67-5.12-1.67-7.96s0.6-5.53 1.67-7.97c0.67-1.51 0.34-3.27-0.82-4.44z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m51.59 83.15-10.22 10.22c-3.12 3.12-3.12 8.19 0 11.31l16.97 16.97c3.12 3.12 8.19 3.12 11.31 0l16.97-16.97c3.12-3.12 3.12-8.19 0-11.31l-10.21-10.22c-1.17-1.17-2.92-1.49-4.44-0.83-2.44 1.08-5.13 1.68-7.97 1.68s-5.53-0.6-7.97-1.67c-1.51-0.67-3.27-0.34-4.44 0.82z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 48.833,
        y2: 81.844,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 16,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7c1.34 0 2.59 0.52 3.54 1.46l16.97 16.97c0.94 0.94 1.46 2.2 1.46 3.54s-0.52 2.59-1.46 3.54l-10.22 10.22c-0.19 0.19-0.43 0.29-0.7 0.29-0.14 0-0.28-0.03-0.41-0.09-2.91-1.28-6-1.93-9.18-1.93s-6.27 0.65-9.18 1.93c-0.13 0.06-0.27 0.09-0.41 0.09-0.26 0-0.51-0.1-0.7-0.29l-10.22-10.22c-1.95-1.95-1.95-5.12 0-7.07l16.97-16.98c0.95-0.94 2.2-1.46 3.54-1.46m0-3c-2.05 0-4.09 0.78-5.66 2.34l-16.97 16.97c-3.12 3.12-3.12 8.19 0 11.31l10.22 10.22c0.76 0.76 1.78 1.17 2.82 1.17 0.55 0 1.1-0.11 1.62-0.34 2.44-1.07 5.13-1.67 7.97-1.67s5.53 0.6 7.97 1.67c0.52 0.23 1.07 0.34 1.62 0.34 1.04 0 2.06-0.4 2.82-1.17l10.22-10.22c3.12-3.12 3.12-8.19 0-11.31l-16.97-16.97c-1.57-1.56-3.61-2.34-5.66-2.34z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m99.03 42.03c1.34 0 2.59 0.52 3.54 1.46l16.97 16.97c0.94 0.94 1.46 2.2 1.46 3.54s-0.52 2.59-1.46 3.54l-16.97 16.97c-0.94 0.94-2.2 1.46-3.54 1.46s-2.59-0.52-3.54-1.46l-10.22-10.22c-0.29-0.29-0.37-0.73-0.2-1.11 1.28-2.91 1.93-6 1.93-9.18s-0.65-6.27-1.93-9.18c-0.17-0.38-0.09-0.82 0.2-1.11l10.22-10.22c0.95-0.94 2.2-1.46 3.54-1.46m0-3c-2.05 0-4.09 0.78-5.66 2.34l-10.22 10.22c-1.17 1.17-1.49 2.92-0.83 4.44 1.08 2.44 1.68 5.13 1.68 7.97s-0.6 5.53-1.67 7.97c-0.66 1.51-0.34 3.27 0.83 4.44l10.22 10.22c1.56 1.56 3.61 2.34 5.66 2.34s4.09-0.78 5.66-2.34l16.97-16.97c3.12-3.12 3.12-8.19 0-11.31l-16.97-16.97c-1.58-1.57-3.62-2.35-5.67-2.35z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m28.97 42.03c1.34 0 2.59 0.52 3.54 1.46l10.22 10.22c0.29 0.29 0.37 0.73 0.2 1.11-1.28 2.91-1.93 6-1.93 9.18s0.65 6.27 1.93 9.18c0.17 0.38 0.09 0.82-0.2 1.11l-10.22 10.22c-0.94 0.94-2.2 1.46-3.54 1.46s-2.59-0.52-3.54-1.46l-16.97-16.97c-0.94-0.95-1.46-2.2-1.46-3.54s0.52-2.59 1.46-3.54l16.97-16.97c0.95-0.94 2.21-1.46 3.54-1.46m0-3c-2.05 0-4.09 0.78-5.66 2.34l-16.97 16.97c-3.12 3.12-3.12 8.19 0 11.31l16.97 16.97c1.56 1.56 3.61 2.34 5.66 2.34s4.09-0.78 5.66-2.34l10.22-10.22c1.17-1.17 1.49-2.92 0.83-4.44-1.08-2.43-1.68-5.12-1.68-7.96s0.6-5.53 1.67-7.97c0.66-1.51 0.34-3.27-0.83-4.44l-10.21-10.22c-1.56-1.56-3.61-2.34-5.66-2.34z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73.59 84.99c0.26 0 0.51 0.1 0.7 0.29l10.22 10.22c0.94 0.94 1.46 2.2 1.46 3.54s-0.52 2.59-1.46 3.54l-16.97 16.97c-0.94 0.94-2.2 1.46-3.54 1.46s-2.59-0.52-3.54-1.46l-16.97-16.97c-0.94-0.94-1.46-2.2-1.46-3.54s0.52-2.59 1.46-3.54l10.22-10.22c0.19-0.19 0.43-0.29 0.7-0.29 0.14 0 0.28 0.03 0.41 0.09 2.91 1.28 6 1.93 9.18 1.93s6.27-0.65 9.18-1.93c0.13-0.06 0.27-0.09 0.41-0.09m0-3c-0.55 0-1.1 0.11-1.62 0.34-2.44 1.07-5.13 1.67-7.97 1.67s-5.53-0.6-7.97-1.67c-0.52-0.23-1.07-0.34-1.62-0.34-1.04 0-2.06 0.4-2.82 1.17l-10.22 10.21c-3.12 3.12-3.12 8.19 0 11.31l16.97 16.97c1.56 1.56 3.61 2.34 5.66 2.34s4.09-0.78 5.66-2.34l16.97-16.97c3.12-3.12 3.12-8.19 0-11.31l-10.22-10.22c-0.77-0.76-1.78-1.16-2.82-1.16z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 51c7.17 0 13 5.83 13 13s-5.83 13-13 13-13-5.83-13-13 5.83-13 13-13m0-3c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z",
        fill: "#424242"
      })
    )
  );
}

exports.default = DiamondShapeWithADotInside;
