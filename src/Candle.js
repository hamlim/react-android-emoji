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

function Candle(props) {
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
        id: "d",
        cx: 63.667,
        cy: 58.5,
        r: 64.302,
        gradientTransform:
          "matrix(1.0287e-13 1 -.7335 7.5455e-14 106.58 -5.1667)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.1652
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.5547
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M44,48v68c0,4.42,8.95,8,20,8s20-3.58,20-8V48H44z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m81 51v65c0 0.42-0.97 1.67-3.97 2.87-3.38 1.35-8.13 2.13-13.03 2.13s-9.65-0.78-13.03-2.13c-3-1.2-3.97-2.45-3.97-2.87v-65h34m3-3h-40v68c0 4.42 8.95 8 20 8s20-3.58 20-8v-68z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.167,
        cy: 49.833,
        r: 42.936,
        gradientTransform:
          "matrix(1.0287e-13 1 -.5163 5.3108e-14 88.894 -13.333)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.6303
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m50.89 63.63c-1.85 1.99-4.86 2.56-7.3 1.39-1.52-0.73-2.86-2.25-2.6-5.4 0.25-3.06 1.4-4.23 0.25-8.44-1.5-5.5 2.79-9.27 8.38-9.19s6.83 2.35 9.81 2.25c9.5-0.31 12.25-2.75 19.06-0.31 8.14 2.91 7.5 11.31 6.38 14s-1.19 11.59 0.06 16.31c2.75 10.38 3.44 16.5-1.44 17.06s-11.81-4.75-9.81-15.38c1.83-9.73 1.88-16.63-1.92-18.01-0.82-0.3-1.74-0.11-2.36 0.51-0.58 0.58-0.99 1.63-1.48 3.32-1.25 4.38-5.81 3.75-7.44 0.62s-2.5-8.38-6.25-5.75c-1.43 1.02-1.25 4.77-3.34 7.02z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49.43 45h0.14c2.57 0.04 3.95 0.62 5.28 1.17 1.21 0.51 2.58 1.08 4.39 1.08h0.29c3.65-0.12 6.4-0.54 8.6-0.89 1.79-0.28 3.21-0.5 4.61-0.5 1.55 0 3.01 0.28 4.74 0.9 2.14 0.76 3.56 2.01 4.36 3.82 1.1 2.49 0.64 5.3 0.26 6.2-1.55 3.7-1.35 13.41-0.07 18.24 1.97 7.45 2.54 11.86 1.69 13.11-0.03 0.04-0.1 0.15-0.57 0.21-0.12 0.01-0.24 0.02-0.37 0.02-1.18 0-2.94-0.62-4.38-2.35-1.87-2.26-2.5-5.63-1.77-9.51 1.74-9.25 2.65-19.03-3.84-21.39-0.58-0.21-1.19-0.32-1.81-0.32-1.39 0-2.7 0.54-3.69 1.52-1.08 1.07-1.66 2.56-2.25 4.62-0.1 0.35-0.33 0.95-0.69 0.95-0.37 0-0.9-0.3-1.2-0.88-0.28-0.54-0.55-1.2-0.84-1.91-1.07-2.6-2.53-6.17-6.22-6.17-1.18 0-2.38 0.42-3.57 1.25-1.54 1.08-2.06 2.86-2.52 4.42-0.34 1.15-0.68 2.33-1.3 3-0.61 0.66-1.5 1.03-2.43 1.03-0.49 0-0.96-0.1-1.39-0.31-0.37-0.18-1.06-0.51-0.9-2.45 0.06-0.75 0.19-1.38 0.34-2.05 0.38-1.78 0.8-3.81-0.18-7.42-0.38-1.38-0.21-2.55 0.49-3.46 0.91-1.21 2.71-1.93 4.8-1.93m0-3c-5.49 0-9.68 3.75-8.19 9.19 1.15 4.21 0 5.38-0.25 8.44-0.26 3.15 1.07 4.67 2.6 5.4 0.85 0.41 1.77 0.6 2.68 0.6 1.72 0 3.42-0.69 4.63-1.99 2.09-2.25 1.91-6 3.35-7.01 0.71-0.5 1.32-0.71 1.85-0.71 2.26 0 3.09 3.93 4.4 6.46 0.81 1.56 2.36 2.5 3.86 2.5s2.95-0.94 3.58-3.12c0.48-1.69 0.9-2.74 1.48-3.32 0.43-0.42 0.99-0.65 1.57-0.65 0.26 0 0.53 0.05 0.78 0.14 3.8 1.38 3.75 8.28 1.92 18.01-1.9 10.12 4.29 15.42 9.1 15.42 0.24 0 0.48-0.01 0.71-0.04 4.88-0.56 4.19-6.69 1.44-17.06-1.25-4.72-1.19-13.62-0.06-16.31 1.12-2.69 1.76-11.09-6.38-14-2.22-0.8-4.02-1.07-5.75-1.07-3.58 0-6.91 1.17-13.31 1.38h-0.19c-2.85 0-4.16-2.17-9.62-2.25-0.08-0.01-0.14-0.01-0.2-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.93 51.06c-0.67 0-1.29-0.46-1.46-1.14-1.88-7.6-0.37-13.33-0.3-13.57 0.22-0.8 1.05-1.27 1.84-1.05 0.8 0.22 1.27 1.04 1.05 1.84-0.03 0.11-1.36 5.29 0.32 12.06 0.2 0.8-0.29 1.62-1.1 1.82-0.11 0.03-0.23 0.04-0.35 0.04z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 63.317,
        cy: 19.498,
        r: 24.979,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEA700",
        offset: 0.1699
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FA9A00",
        offset: 0.3491
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F58500",
        offset: 0.5327
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED6700",
        offset: 0.7192
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E34200",
        offset: 0.9062
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DD2C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m70.42 42.69c-3.97 2.52-9.09 2.64-13.23 0.42-4.57-2.45-9.15-7.77-4-19.11 8.68-19.1 12.85-20.42 13.46-19.92s-1.16 6.51 5.81 17.33c5.45 8.45 4.64 17.05-2.04 21.28z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.317,
        cy: 19.139,
        r: 20.577,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEA00",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE600",
        offset: 0.2549
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFDA00",
        offset: 0.5051
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC700",
        offset: 0.7526
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.9984
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.17 37.63c-2.01 1.98-5.27 2.1-7.55 0.43-1.94-1.42-3.57-4.2-1.4-9.53 3.99-9.81 5.94-10.47 6.23-10.21s-0.52 3.36 2.79 8.98c2.35 4 2.28 8.02-0.07 10.33z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.65 52.53c-3.19 0.26-6.57-0.28-9.99-1.63-0.64-0.25-1.02-1.1-0.83-1.88 0.18-0.79 0.85-1.22 1.49-0.97 4.98 1.96 9.82 2.07 14 0.3 0.74-0.31 1.48-0.69 2.19-1.12 0.59-0.36 1.32-0.05 1.63 0.7s0.09 1.64-0.51 2c-0.8 0.49-1.62 0.91-2.46 1.26-1.75 0.74-3.6 1.19-5.52 1.34z",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.29 9.83c0.6 3.18 2.05 7.62 5.65 13.2 2.6 4.03 3.62 8.12 2.87 11.51-0.52 2.37-1.87 4.26-4 5.61-1.57 1-3.42 1.52-5.34 1.52-1.7 0-3.38-0.42-4.87-1.22-5.2-2.79-6.07-7.77-2.69-15.23 3.79-8.3 6.56-12.88 8.38-15.39m2.08-5.83c-1.19 0-5.34 2.76-13.18 20-5.15 11.34-0.57 16.66 4 19.11 1.95 1.05 4.12 1.57 6.29 1.57 2.43 0 4.85-0.66 6.94-1.99 6.68-4.23 7.49-12.84 2.04-21.28-6.97-10.81-5.19-16.82-5.81-17.33-0.06-0.05-0.15-0.08-0.28-0.08z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Candle;
