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

function RacingCar(props) {
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
        "m44.18 107.99c-0.38 0.06-0.74-0.2-0.8-0.58l-0.45-2.82c-0.06-0.38 0.2-0.74 0.58-0.8s0.74 0.2 0.8 0.58l0.45 2.82c0.06 0.38-0.2 0.74-0.58 0.8z"
    }),
    _react2.default.createElement("path", {
      d:
        "m41 108.12c-0.49-2.07 2.56-3 3.44-2 0.94 1.06 1.69 2.5 1.69 2.5s6.5 0.68 10.54-2.29c3.77-2.77 7.65-1.91 8.21-0.33 0.69 1.94-10.5 5.25-16.5 4.62s-6.88-0.37-7.38-2.5z",
      fill: "#ccc"
    }),
    _react2.default.createElement("path", {
      d:
        "m61 101c0-0.77-1.77-0.95-3.5-1.44-1.29 1.62-1.37 3.94-1.31 5.1 2.75-0.71 5.68-1.04 4.81-3.66z",
      fill: "#1A1A1A"
    }),
    _react2.default.createElement("path", {
      d:
        "m60.57 97.88c-1.44 0.2-2.41 0.85-3.07 1.68 1.73 0.49 3.5 0.67 3.5 1.44 0.87 2.62-2.06 2.95-4.81 3.66 0.02 0.43 0.06 0.71 0.06 0.71 3.02 1.01 10.08-2.02 9.79-3.89-0.28-1.88-1.04-4.23-5.47-3.6z",
      fill: "#B3B3B3"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m61.92 98.9c2.23 0 2.84 1.03 3.13 2.81-0.29 0.89-4.31 2.98-7.36 2.98-0.18 0-0.35-0.01-0.51-0.02-0.04-0.9 0.01-2.99 1.1-4.36 0.59-0.74 1.38-1.17 2.42-1.31 0.45-0.07 0.85-0.1 1.22-0.1m0-1c-0.41 0-0.86 0.03-1.35 0.1-1.44 0.2-2.41 0.85-3.07 1.68-1.29 1.62-1.37 3.94-1.31 5.1 0.02 0.43 0.06 0.71 0.06 0.71 0.41 0.14 0.91 0.2 1.44 0.2 3.38 0 8.6-2.47 8.35-4.09-0.25-1.66-0.88-3.7-4.12-3.7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 12.344,
        x2: 12.344,
        y1: 110.25,
        y2: 121.01,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.2754
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E5E5E5",
        offset: 0.4797
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CECECE",
        offset: 0.8066
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m3.99 119.21c-0.01 0.71 0.2 1.41 0.42 1.93 5.12-1.53 11.51-1.6 16.29 0.64-0.3-3.53-0.7-6.95-0.7-10.78-6.54 0.93-11.33 4.48-16.01 8.21z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m4.41 121.14c0.21 0.52 0.42 0.86 0.42 0.86h15.88c-0.01-0.07-0.01-0.14-0.02-0.22-4.78-2.24-11.16-2.17-16.28-0.64z",
      fill: "#333"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 48.712,
        x2: 48.712,
        y1: 104.75,
        y2: 121.5,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED1C24",
        offset: 0.0051129
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C1272D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59 114c13.03-1.74 27.56-1.22 34.43-12.19-1.58-0.18-3.35-0.34-5.52-0.48-6.05-0.39-9.5-0.92-9.5-0.92s-3.71-1.86-6.04-3.04c-3.88-1.96-8.44-0.58-8.44-0.58l0.12 7.02s-4.06 2.52-10.06 3.19-9.38 0.62-9.38 0.62l-3.38-2.5-8.31 0.88c-17.58 0-25.1 8.25-28.23 11.44-0.51 0.52-0.69 1.15-0.7 1.77 4.68-3.72 9.47-7.27 16.01-8.21 0 3.91 0.42 7.39 0.72 11h30.14c1.44-3.86 4.15-7.2 8.14-8z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 81.165,
        x2: 81.165,
        y1: 100.75,
        y2: 121.5,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.2754
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E5E5E5",
        offset: 0.4797
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CECECE",
        offset: 0.8066
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.58 103.75c-5.18-0.84-8.02-1.47-12.15-1.94-6.87 10.97-21.4 10.45-34.43 12.19-3.99 0.8-6.7 4.14-8.14 8h41.14l0.75-0.83 7.75-0.67 10.75-15.75s1.94 0.24-5.67-1z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 103.85,
        x2: 123.79,
        y1: 102.48,
        y2: 102.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ED1C24",
        offset: 0.0051129
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C1272D",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.3 92.05c-0.76 0-1.45 0.59-1.45 1.36v0.04l0.03 5.75c0 0.3 0.09 0.58 0.26 0.82 0.3 0.44 0.88 1.05 1.83 1.22 1.52 0.27 3.85 1.27 4.15 4.25 0.19 1.89 0.14 4.41 0.08 6-0.03 0.83 0.64 1.52 1.47 1.51l4.23-0.03c2.27 0 5.93-2.89 6.35-5.39l1.53-14c0.09-0.87-0.59-1.63-1.46-1.62l-17.02 0.09z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 26.29,
      cy: 114.29,
      r: 9.71
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26.29 106.58c4.25 0 7.71 3.46 7.71 7.71s-3.46 7.71-7.71 7.71-7.71-3.46-7.71-7.71 3.46-7.71 7.71-7.71m0-2c-5.36 0-9.71 4.35-9.71 9.71s4.35 9.71 9.71 9.71 9.71-4.35 9.71-9.71-4.35-9.71-9.71-9.71z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 26.29,
      cy: 114.29,
      r: 5.48,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 26.29,
      cy: 114.29,
      r: 3.4
    }),
    _react2.default.createElement("circle", {
      cx: 26.29,
      cy: 114.29,
      r: 1.56,
      fill: "none",
      stroke: "#666",
      strokeMiterlimit: 10,
      strokeWidth: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m114.88 122h-10.75c-1.66 0-3-1.34-3-3v-8c0-1.66 1.34-3 3-3h10.75c1.66 0 3 1.34 3 3v8c0 1.66-1.09 3.21-3 3z"
    }),
    _react2.default.createElement("polygon", {
      points: "115.59 122 50.79 122 51.75 119.87 115.59 119.87"
    }),
    _react2.default.createElement("circle", {
      cx: 105.29,
      cy: 114.29,
      r: 9.71
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.29 106.58c4.25 0 7.71 3.46 7.71 7.71s-3.46 7.71-7.71 7.71-7.71-3.46-7.71-7.71 3.46-7.71 7.71-7.71m0-2c-5.36 0-9.71 4.35-9.71 9.71s4.35 9.71 9.71 9.71 9.71-4.35 9.71-9.71-4.35-9.71-9.71-9.71z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 105.29,
      cy: 114.29,
      r: 5.48,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 105.29,
      cy: 114.29,
      r: 3.4
    }),
    _react2.default.createElement("circle", {
      cx: 105.29,
      cy: 114.29,
      r: 1.56,
      fill: "none",
      stroke: "#666",
      strokeMiterlimit: 10,
      strokeWidth: 0.5
    }),
    _react2.default.createElement("path", {
      d:
        "m123.08 100.08h-10.58c-1.1 0-2-0.9-2-2v-1.33c0-1.1 0.9-2 2-2l11.17-0.04-0.59 5.37z",
      fill: "#E6E6E6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121.73 93.94-0.07 1.04-1.41 12.32c-0.19 0.99-1.47 2.54-3.11 3.32-0.69 0.33-1.13 1.02-1.14 1.78l-0.08 6.9c0 0.38-0.24 0.68-0.31 0.71-0.19-0.01-0.76-0.01-3.54-0.01-6.53 0-19.82 0.04-19.81 0.04h-86.11c-0.12-0.35-0.19-0.63-0.2-0.84 0.03-0.07 0.11-0.23 0.32-0.44l0.29-0.29c3.08-3.15 10.28-10.54 26.51-10.54 0.07 0 0.14 0 0.21-0.01l7.56-0.79 2.75 2.04c0.34 0.25 0.75 0.39 1.17 0.39h0.15c0.62 0 4.01-0.03 9.47-0.64 6.37-0.71 10.57-3.26 10.75-3.37 0.61-0.38 0.97-1.05 0.95-1.76l-0.16-5.34c0.55-0.08 1.22-0.15 1.95-0.15 1.46 0 2.73 0.27 3.77 0.79 2.33 1.18 6.05 3.04 6.05 3.04 0.19 0.09 0.39 0.16 0.59 0.19 0.14 0.02 3.6 0.55 9.68 0.94 2 0.13 3.77 0.28 5.42 0.47 2.68 0.31 4.79 0.68 7.46 1.14 1.36 0.24 2.84 0.5 4.59 0.78 1.26 0.21 2.19 0.41 2.93 0.57 0.48 0.11 0.89 0.2 1.25 0.26 0.11 0.02 0.23 0.03 0.34 0.03 0.58 0 1.14-0.25 1.53-0.71 0.46-0.54 0.6-1.28 0.36-1.95-1.21-3.47-4.14-4.34-5.35-4.56-0.39-0.07-0.59-0.3-0.6-0.3 0-0.01-0.01-0.01-0.01-0.02-0.01-0.64-0.04-3.64-0.05-4.96l15.9-0.07m-115.77 25.21m116.51-27.21-17.03 0.06c-0.76 0-1.62 0.61-1.62 1.38 0 0.01 0.06 5.73 0.06 5.73 0 0.3 0.17 0.73 0.34 0.98 0.3 0.43 0.96 0.99 1.92 1.17 1.33 0.24 3.06 1.09 3.81 3.25-0.89-0.15-2.1-0.49-4.2-0.83-5.18-0.84-8.01-1.47-12.14-1.94-1.58-0.18-3.35-0.34-5.51-0.48-6.05-0.39-9.5-0.92-9.5-0.92s-3.71-1.86-6.04-3.04c-1.53-0.77-3.2-1.01-4.67-1.01-2.24 0-4 0.55-4 0.55l0.21 7s-3.92 2.42-9.92 3.08c-5.33 0.59-8.59 0.63-9.25 0.63h-0.12l-3.37-2.5-8.33 0.88c-17.58 0-25.1 8.25-28.23 11.44-0.51 0.52-0.89 1.15-0.9 1.77-0.01 0.71 0.24 1.44 0.46 1.96 0.21 0.52 0.43 0.95 0.43 0.95h87.41s13.28-0.04 19.81-0.04c1.87 0 3.18 0 3.48 0.01h0.06c1.3 0 2.31-1.32 2.31-2.71l0.08-6.88c2-0.95 3.92-2.98 4.23-4.83l1.43-12.43 0.09-1.41c0.07-0.88-0.42-1.82-1.3-1.82z",
        fill: "#424242"
      })
    )
  );
}

exports.default = RacingCar;
