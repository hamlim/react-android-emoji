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

function Unicorn(props) {
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
        "m13.43 70.15c-4.67 5.42-7.86 9.43-8.18 10.57-1.76 6.23-1.34 14.57 3.5 18.82 3 2.63 9.61 4.8 16.05 2.8 3.2-0.99 9.39-7.98 10.13-7.83-3.22-11.1-10.66-21.4-21.5-24.36z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m18.33 78.02c1.35 0.36 2.26 1.75 2.34 3.16 0.07 1.4-0.59 2.77-1.53 3.8-1.13 1.24-2.78 1.11-3.2-0.73-0.21-0.94 0.73-2.19 0.5-3.23-0.26-1.19-3.79-0.96-1.59-2.26 1.01-0.59 2.33-1.05 3.48-0.74z",
      fill: "#404040"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 50.78,
        x2: 50.78,
        y1: 12.664,
        y2: 42.954,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E33299",
        offset: 0.067
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DC3A9D",
        offset: 0.1536
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C951A9",
        offset: 0.2894
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AB75BC",
        offset: 0.4574
      }),
      _react2.default.createElement("stop", {
        stopColor: "#80A8D6",
        offset: 0.6511
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4BE8F8",
        offset: 0.864
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3FF6FF",
        offset: 0.9073
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28.56 42.95c-0.83 0-1.63-0.19-2.31-0.54-2.13-1.11-3.51-3.85-3.51-6.97 0-12.83 15.54-22.78 28.92-22.78 3.89 0 7.23 0.88 9.67 2.54 1.48 1.01 2.85 1.5 4.19 1.5 2.16 0 3.67-1.27 4.88-2.29 0.83-0.7 1.55-1.31 2.19-1.31 0.61 0 2.04 0.59 4.71 4.58 1.93 2.88 2.05 5.93 0.38 9.06-3.49 6.53-14.12 11.84-23.72 11.84-4.17 0-10.02-0.99-14.14-5.7-1.13-1.3-2.9-2.07-4.73-2.07-1.95 0-3.66 0.86-4.8 2.43-0.73 0.99-0.88 2.37-0.39 3.59 0.43 1.08 1.31 1.88 2.35 2.07 0.31 0.06 0.58 0.1 0.8 0.1h0.13c0.06 0 0.11-0.03 0.17-0.02 0.01 0.02 0.12 0.14 0.13 0.35 0.03 0.36-0.13 0.83-0.45 1.34-0.92 1.41-2.62 2.28-4.47 2.28z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m51.65 14.16c3.59 0 6.64 0.79 8.82 2.28 1.73 1.18 3.38 1.76 5.04 1.76 2.71 0 4.52-1.53 5.85-2.65 0.38-0.32 0.94-0.79 1.23-0.93 0.28 0.12 1.36 0.77 3.45 3.89 1.62 2.41 1.71 4.87 0.3 7.52-3.25 6.09-13.3 11.05-22.39 11.05-3.86 0-9.26-0.9-13.01-5.18-1.42-1.62-3.6-2.58-5.86-2.58-2.41 0-4.6 1.11-6.01 3.05-1.03 1.41-1.25 3.33-0.57 5.03 0.55 1.39 1.65 2.42 2.98 2.83-0.67 0.76-1.77 1.23-2.91 1.23-0.59 0-1.15-0.13-1.62-0.37-1.62-0.84-2.71-3.11-2.71-5.64-0.01-13 16.23-21.29 27.41-21.29m21.01 0.43m-21.01-3.43c-13.39 0-30.42 9.84-30.42 24.28 0 3.38 1.46 6.81 4.32 8.3 0.92 0.48 1.96 0.71 3.01 0.71 2.22 0 4.48-1.04 5.72-3 0.43-0.68 0.74-1.47 0.68-2.26s-0.56-1.55-1.3-1.72c-0.37-0.08-0.78-0.02-1.15-0.09-1.28-0.24-1.83-2.15-1.02-3.26 0.93-1.28 2.27-1.81 3.59-1.81 1.39 0 2.76 0.6 3.6 1.56 3.85 4.39 9.43 6.21 15.27 6.21 15.14 0 31.97-12.21 24.58-23.24-2.67-3.99-4.48-5.24-5.95-5.24-2.49 0-4 3.61-7.07 3.61-0.94 0-2.03-0.34-3.35-1.24-2.8-1.92-6.49-2.81-10.51-2.81z",
      fill: "#D42DA2"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 68.721,
        x2: 68.721,
        y1: 4.9878,
        y2: 124.55,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.2137
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6F6F6",
        offset: 0.3778
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.6493
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B4B4B4",
        offset: 0.9927
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3B3B3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m71.94 28.05c0.87-6.72-4.58-16.74-8.19-22.05-1.11-1.63-3.55-1.21-4.17 0.67-1.5 4.56-3.81 11.69-3.92 17.75-7.88 8.04-30.17 31.74-42.22 45.73 10.84 2.96 18.27 13.26 21.5 24.36 3 0.57 11.4 1.72 19.67-1.29 9.91-3.61 12.97-10.4 12.97-10.4l11.03 41.52h45.39v-41.33s-41.38-49.71-52.06-54.96z",
      fill: "url(#g)"
    }),
    _react2.default.createElement("path", {
      d:
        "m62.49 7.52m-0.46 1.37c4.09 6.18 7.96 14 7.33 18.73-0.17 1.28 0.56 2.53 1.72 3.1 7.46 3.58 33.92 33.52 49.92 53.3v37.31h-39.85l-10.02-38.86c-0.32-1.25-1.41-2.17-2.7-2.26-0.07-0.01-0.15-0.01-0.22-0.01-1.2 0-2.3 0.71-2.76 1.83-0.09 0.21-2.43 5.25-10.99 8.31-3.37 1.21-7.16 1.82-11.26 1.82-3.3 0-5.96-0.41-7.26-0.65-0.18-0.03-0.39-0.05-0.58-0.05-1.49 0-2.36 0.79-4.94 3.12-1.59 1.44-4.91 4.45-6.25 4.85-1.42 0.43-2.93 0.65-4.48 0.65-3.98 0-7.43-1.43-9.08-2.86-3.76-3.24-4.2-10.29-2.7-15.63 0.19-0.36 1.37-2.31 7.73-9.55 12.56-14.31 34.41-37.82 42.18-45.59 0.55-0.55 0.86-1.29 0.88-2.06 0.1-5.24 2.06-11.64 3.33-15.5m-54.08 72.6m53.85-76.57c-0.91 0-1.79 0.57-2.15 1.64-1.53 4.56-3.83 11.71-3.95 17.78-8.04 8.05-30.01 31.72-42.31 45.73-4.77 5.43-7.99 9.44-8.32 10.59-1.8 6.24-1.35 14.59 3.59 18.85 2.22 1.91 6.4 3.58 11.04 3.58 1.74 0 3.55-0.24 5.35-0.78 3.23-0.98 9.45-7.85 10.31-7.85h0.02c1.5 0.28 4.33 0.7 7.81 0.7 3.63 0 7.96-0.46 12.27-2 10.11-3.62 12.73-9.96 12.73-9.96l10.62 41.13h45.18v-41.38s-40.71-49.69-51.61-54.95c0.89-6.73-5.01-16.72-8.69-22.04-0.47-0.7-1.2-1.04-1.89-1.04z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("path", {
      d:
        "m28.08 5.79c-0.36-0.6-0.38-1.28-0.05-1.87 0.34-0.61 1.02-1.01 1.72-1.01 0.52 0 1.01 0.21 1.39 0.6l3.75 3.9 0.02 0.27c0.11 1.64-0.02 3.33-0.14 4.97-0.04 0.48-0.07 0.96-0.1 1.43l-0.15 2.39-6.44-10.68z",
      fill: "#aff"
    }),
    _react2.default.createElement("path", {
      d:
        "m29.75 3.66c0.29 0 0.59 0.11 0.85 0.38 0 0 1.4 1.46 3.55 3.7 0.13 2.05-0.11 4.19-0.25 6.31-2.96-4.93-5.19-8.64-5.19-8.64-0.52-0.88 0.22-1.75 1.04-1.75m0-1.49c-0.97 0-1.9 0.54-2.37 1.39-0.46 0.82-0.44 1.8 0.06 2.62 0 0 2.22 3.71 5.19 8.63l2.47 4.1 0.3-4.78c0.03-0.47 0.07-0.95 0.1-1.42 0.12-1.66 0.25-3.38 0.14-5.07l-0.04-0.55-0.37-0.39-3.55-3.7c-0.53-0.54-1.21-0.83-1.93-0.83z",
      fill: "#999"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 37.439,
        x2: 50.338,
        y1: 15.386,
        y2: 32.772,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFBFD",
        offset: 0.1384
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDEEF9",
        offset: 0.2829
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBD9F0",
        offset: 0.4302
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8BCE5",
        offset: 0.5794
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F496D7",
        offset: 0.7303
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF69C5",
        offset: 0.8802
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EA3FB5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m46.47 35.57c-0.26 0-0.5-0.13-0.64-0.36-1.7-2.78-4.18-6.88-6.76-11.15-0.07-0.12-0.11-0.25-0.11-0.39 0.01-1.48 0.08-3.01 0.15-4.49 0.08-1.77 0.17-3.59 0.15-5.34 0-0.31 0.18-0.58 0.46-0.7 0.09-0.04 0.19-0.06 0.28-0.06 0.2 0 0.39 0.08 0.54 0.23l7.25 7.54c0.13 0.13 0.2 0.31 0.21 0.5 0.08 2.76-0.18 5.64-0.42 8.42-0.16 1.77-0.31 3.44-0.38 5.09-0.01 0.33-0.24 0.61-0.56 0.69-0.05 0.01-0.11 0.02-0.17 0.02z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m40.02 13.83c2.34 2.44 4.87 5.06 7.25 7.54 0.13 4.41-0.62 9.11-0.8 13.46-1.7-2.78-4.18-6.87-6.75-11.15 0.01-3.22 0.34-6.6 0.3-9.85m0-1.49c-0.19 0-0.38 0.04-0.57 0.11-0.57 0.23-0.93 0.79-0.93 1.4 0.02 1.73-0.07 3.54-0.15 5.3-0.07 1.49-0.15 3.03-0.15 4.52 0 0.27 0.07 0.54 0.21 0.78 2.98 4.94 5.25 8.69 6.76 11.15 0.28 0.45 0.76 0.71 1.27 0.71 0.12 0 0.25-0.02 0.37-0.05 0.64-0.16 1.09-0.73 1.12-1.38 0.07-1.63 0.22-3.29 0.37-5.05 0.25-2.8 0.51-5.7 0.43-8.51-0.01-0.37-0.16-0.73-0.42-0.99l-7.25-7.54c-0.27-0.29-0.66-0.45-1.06-0.45z",
      fill: "#999"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 43.472,
        x2: 55.148,
        y1: 22.196,
        y2: 37.934,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCEAF3",
        offset: 0.1669
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5B4D2",
        offset: 0.5119
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EA5E9F",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m50.4 39.75c-1.35 0-2.04-0.56-2.37-1.02-0.12-0.17-0.48-0.72-2.19-3.52l-0.12-0.19 0.01-0.23c0.07-1.68 0.23-3.45 0.38-5.16 0.24-2.74 0.5-5.57 0.42-8.25l-0.06-1.93 1.34 1.39c6.26 6.51 9.79 10.17 10.2 10.58 0.43 0.44 0.65 1 0.62 1.64-0.07 1.85-2.13 3.82-3.01 4.58-1.42 1.25-3.57 2.11-5.22 2.11z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m47.27 21.37c5.2 5.41 9.73 10.1 10.21 10.59 1.19 1.2-0.39 3.45-2.34 5.13-1.29 1.11-3.25 1.92-4.74 1.92-0.77 0-1.41-0.21-1.77-0.71-0.19-0.27-0.99-1.56-2.16-3.47 0.18-4.35 0.93-9.05 0.8-13.46m-1.6-3.82 0.11 3.86c0.08 2.63-0.17 5.44-0.42 8.16-0.15 1.72-0.31 3.49-0.38 5.19l-0.02 0.45 0.24 0.39c1.7 2.79 2.08 3.37 2.22 3.57 0.44 0.61 1.31 1.33 2.98 1.33 1.84 0 4.14-0.92 5.72-2.28 1.19-1.02 3.19-3.05 3.27-5.12 0.03-0.85-0.26-1.61-0.84-2.2-0.41-0.41-3.84-3.97-10.19-10.57l-2.69-2.78z",
      fill: "#999"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 31.471,
        x2: 43.564,
        y1: 7.6207,
        y2: 23.921,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#aff",
        offset: 0.2787
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AAFEFF",
        offset: 0.2809
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CEB1E4",
        offset: 0.5413
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E978D1",
        offset: 0.7562
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F955C5",
        offset: 0.9148
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF48C0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.08 24.06c-1.99-3.29-4.03-6.69-5.81-9.64l-0.12-0.2 0.01-0.23c0.03-0.48 0.07-0.97 0.1-1.45 0.12-1.59 0.24-3.23 0.14-4.76l-0.13-2.04 7.48 7.78v0.3c0.02 1.79-0.07 3.64-0.15 5.43-0.07 1.47-0.14 2.98-0.15 4.43l-0.01 2.66-1.36-2.28z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m34.15 7.73c1.62 1.68 3.66 3.81 5.86 6.1 0.04 3.25-0.29 6.63-0.3 9.85-1.99-3.29-4.03-6.69-5.81-9.64 0.14-2.11 0.39-4.25 0.25-6.31m-1.75-3.97 0.26 4.07c0.1 1.48-0.02 3.03-0.14 4.66-0.04 0.49-0.07 0.97-0.1 1.46l-0.03 0.47 0.24 0.4c1.78 2.95 3.82 6.35 5.81 9.64l2.74 4.54 0.03-5.31c0.01-1.43 0.08-2.94 0.15-4.4 0.09-1.8 0.18-3.66 0.15-5.48l-0.01-0.59-0.41-0.43-5.86-6.1-2.83-2.93z",
      fill: "#999"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "c",
        x: 5,
        y: 4,
        width: 119,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 74.753,
          x2: 134.73,
          y1: 26.255,
          y2: 102.2,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#FF38AC",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FF069F",
          offset: 0.4567
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FF009D",
          offset: 0.5128
        }),
        _react2.default.createElement("stop", {
          stopColor: "#C85BC1",
          offset: 0.699
        }),
        _react2.default.createElement("stop", {
          stopColor: "#6AF4FF",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m123.04 108.27c-4.65 0-9.83-1.45-15.4-4.3-12.35-6.32-13.32-19.47-14.17-31.07-0.58-7.94-1.09-14.79-5.54-17.61-9.05-5.73-14.69-17.03-14.72-24.23-0.01-2.17 0.47-5.07 2.83-6.59 1.54-0.99 3.16-1.44 5.26-1.44 1.13 0 2.29 0.12 3.68 0.3l0.36 0.05c1.18 0.16 2.65 0.35 4.14 0.35 2.88 0 4.95-0.74 6.32-2.28 0.85-0.95 1.22-2.04 1.35-3.05 0.35 0.22 0.7 0.51 1.04 0.87 1.16 1.24 1.95 3.04 1.87 4.28-0.11 1.69-1.07 3.08-2.86 4.14-0.55 0.33-0.83 0.96-0.71 1.59 0.13 0.63 0.64 1.1 1.27 1.19 1.13 0.15 2.24 0.21 3.32 0.27 2.07 0.11 4.02 0.22 5.93 0.94 3.11 1.18 5.54 3.52 6.68 6.44 1.29 3.3 0.72 7.43-1.3 9.4-0.54 0.53-0.6 1.37-0.15 1.97 0.29 0.39 0.74 0.6 1.2 0.6 0.25 0 0.51-0.06 0.74-0.19 1.33-0.76 2.86-1.16 4.4-1.16 2.71 0 5.38 1.22 7.31 3.34 3.27 3.58 4.56 9.66 3.13 14.77-0.12 0.45-0.04 0.93 0.24 1.3s0.71 0.59 1.18 0.6c5.64 0.1 11.19 2.95 15.23 7.81 1.21 1.45 1.09 9.39-2.7 17.47-2.51 5.33-8.41 14.24-19.93 14.24z",
        fill: "url(#a)"
      }),
      _react2.default.createElement("path", {
        d:
          "m97.78 21.23c0.53 0.84 0.8 1.72 0.77 2.25-0.05 0.75-0.32 1.88-2.13 2.95-1.1 0.65-1.67 1.93-1.41 3.18s1.28 2.21 2.55 2.37c1.19 0.16 2.33 0.22 3.43 0.28 2.03 0.11 3.78 0.2 5.47 0.84 2.71 1.03 4.83 3.06 5.81 5.58 1.05 2.69 0.61 6.25-0.96 7.78-1.08 1.05-1.2 2.74-0.3 3.95 0.58 0.78 1.48 1.2 2.4 1.2 0.5 0 1.01-0.13 1.48-0.39 1.11-0.63 2.38-0.96 3.66-0.96 2.29 0 4.55 1.04 6.21 2.85 2.89 3.17 4.07 8.79 2.79 13.36-0.25 0.89-0.07 1.85 0.48 2.6 0.56 0.74 1.42 1.19 2.35 1.21 5.18 0.09 10.3 2.72 14.06 7.22 0.79 1.5 0.58 10.24-4.16 18.41-2.88 4.96-8.21 10.87-17.26 10.87-4.41 0-9.36-1.39-14.71-4.13-11.58-5.95-12.52-18.65-13.35-29.86-0.62-8.34-1.15-15.54-6.24-18.76-8.62-5.46-13.99-16.17-14.02-22.97-0.01-1.79 0.36-4.17 2.14-5.32 1.28-0.83 2.65-1.2 4.45-1.2 1.05 0 2.15 0.12 3.48 0.29l0.36 0.05c1.22 0.16 2.75 0.37 4.33 0.37 3.29 0 5.79-0.93 7.44-2.78 0.36-0.41 0.65-0.82 0.88-1.24m-1.87-4.72c-0.08 0-0.16 0-0.24 0.01 0.12 1.44-0.02 2.86-1 3.95-1.24 1.39-3.21 1.77-5.2 1.77-1.53 0-3.08-0.23-4.3-0.39-1.33-0.17-2.61-0.32-3.87-0.32-2.08 0-4.09 0.39-6.08 1.67-8.27 5.34-0.99 25.19 11.9 33.35 9.59 6.06-1.92 37.61 19.83 48.75 6.14 3.14 11.47 4.46 16.08 4.46 21.95 0 27.33-29.86 23.77-34.15-4.31-5.19-10.3-8.25-16.36-8.35 1.56-5.59 0.14-12.24-3.47-16.18-2.28-2.5-5.36-3.83-8.42-3.83-1.77 0-3.53 0.44-5.14 1.35 2.58-2.52 3.07-7.38 1.65-11.02s-4.39-6.1-7.54-7.3c-3.18-1.21-6.33-0.86-9.58-1.29 1.9-1.12 3.43-2.83 3.59-5.34 0.2-2.9-2.73-7.14-5.62-7.14z",
        fill: "#D42DA2"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("path", {
        d:
          "m44.2 53.96c0.01 0 0.06 0.02 0.09 0.02 0.08 0.02 0.19 0.04 0.33 0.07 0.29 0.06 0.73 0.14 1.25 0.18 0.26 0.02 0.54 0.02 0.84 0.02 0.29 0 0.6-0.04 0.92-0.07 0.32-0.04 0.63-0.12 0.96-0.19 0.32-0.09 0.65-0.19 0.96-0.32l0.12-0.05h0.01c-0.05 0.02 0.11-0.05-0.1 0.05l0.06-0.03 0.07-0.03 0.29-0.14c0.12-0.05 0.13-0.08 0.17-0.1 0.04-0.03 0.07-0.05 0.11-0.07 0.21-0.16 0.44-0.34 0.65-0.55 0.42-0.43 0.79-0.93 1.09-1.39s0.53-0.88 0.69-1.16c0.16-0.29 0.24-0.45 0.23-0.42 0.19-0.72 0.92-1.16 1.64-0.97s1.16 0.92 0.97 1.64c-0.01 0.02-0.03 0.28-0.12 0.7s-0.24 1-0.53 1.69c-0.28 0.68-0.7 1.47-1.34 2.25-0.33 0.39-0.7 0.77-1.17 1.12l-0.42 0.28c-0.14 0.09-0.3 0.19-0.38 0.22l-0.29 0.15-0.07 0.04-0.04 0.02-0.15 0.07-0.18 0.07c-0.48 0.19-0.97 0.33-1.47 0.45-0.5 0.1-1 0.16-1.49 0.19-0.97 0.05-1.88-0.07-2.62-0.27-0.74-0.19-1.33-0.45-1.73-0.67-0.2-0.11-0.36-0.21-0.47-0.28-0.15-0.09-0.19-0.13-0.18-0.12l-0.03-0.03c-0.58-0.48-0.66-1.34-0.18-1.92 0.38-0.49 0.98-0.64 1.51-0.45z"
      }),
      _react2.default.createElement("path", {
        d:
          "m42.01 59.07c0.69 0.46 1.63 0.46 2.4 0.18s1.62-1.77 1.62-1.77 0.23 1.51 0.87 2.67c0.64-0.98 1.07-2.41 1.07-2.41s0.85 2.01 1.83 2.4c0.01-0.91 0.04-2.74 0.04-2.74s1.5 1.89 2.62 2.23c-0.15-1.2-0.25-1.88-0.29-2.88 1.36 1.11 2.15 1.46 3.38 1.48-0.45-0.95-1.55-2.57-1.55-2.57s1.74 1.18 3.74 0.81c-0.82-1.02-1.82-1.54-2.64-2.55 1.11 0.41 3.99 0.03 3.99 0.03s-3.84-0.75-4.14-2.26c0.27 0.25-2.47 2.85-2.75 3.03-1.13 0.72-2.39 1.23-3.7 1.5-0.85 0.18-3.11-0.63-3.63-0.17-0.41 0.37-0.19 0.94-0.98 1.77-0.47 0.48-1.21 1.18-1.88 1.25z"
      })
    )
  );
}

exports.default = Unicorn;
