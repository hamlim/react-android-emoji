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

function BlueCar(props) {
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
        "m121.12 95.9h-2.6c-1.58 0-2.88-1.29-2.88-2.88v-16.4c0-1.58 1.29-2.88 2.88-2.88h2.6c1.58 0 2.88 1.29 2.88 2.88v16.41c0 1.58-1.29 2.87-2.88 2.87z",
      fill: "#333"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 62.999,
        x2: 62.999,
        y1: 46.448,
        y2: 112.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#57CAFF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#53C4FB",
        offset: 0.2032
      }),
      _react2.default.createElement("stop", {
        stopColor: "#46B5F1",
        offset: 0.4615
      }),
      _react2.default.createElement("stop", {
        stopColor: "#329BDF",
        offset: 0.7481
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1C7ECC",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.11 51.15c0-2.86-2.32-5.18-5.18-5.18h-50.18c-3.45 0-5.83 2.47-8.05 5.12-6.14 7.31-19.56 21.99-20.62 23.33-0.07 0.09-11.44 1.62-17.9 2.49-2.56 0.34-4.55 2.39-4.82 4.96l-0.46 23.84c-0.77 4.94 2.05 7 6.49 7h95.08l10.77-5.21-5.13-56.35z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m78.12 75.9h-33.6c-1.64 0-2.53-1.91-1.48-3.16l17.38-20.78c0.37-0.44 0.91-0.69 1.48-0.69h16.22c1.38 0 2.5 1.12 2.5 2.5v19.62c0 1.39-1.12 2.51-2.5 2.51z",
      fill: "#B7E6FC"
    }),
    _react2.default.createElement("path", {
      d:
        "m107.68 75.9h-19.09c-1.45 0-2.63-1.18-2.63-2.63v-19.38c0-1.45 1.18-2.63 2.63-2.63h17.04c1.45 0 2.63 1.18 2.63 2.63l2.05 19.38c-0.01 1.45-1.18 2.63-2.63 2.63z",
      fill: "#B7E6FC"
    }),
    _react2.default.createElement("path", {
      d:
        "m5.54 112.35h113.68c0.91-0.53 1.54-1.51 1.54-2.64v-4.26c0-1.69-1.38-3.07-3.07-3.07h-3.94c-2.77-6.96-9.55-11.88-17.5-11.88s-14.73 4.92-17.5 11.88h-31.64c-2.77-6.96-9.55-11.88-17.5-11.88s-14.73 4.92-17.5 11.88h-5.04c-1.69 0-3.07 1.38-3.07 3.07v4.26c0 1.13 0.62 2.11 1.54 2.64z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("circle", {
      cx: 29.62,
      cy: 109.34,
      r: 15.34,
      fill: "#3E2723"
    }),
    _react2.default.createElement("circle", {
      cx: 29.62,
      cy: 109.34,
      r: 6.14,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 96.26,
      cy: 109.34,
      r: 15.34,
      fill: "#3E2723"
    }),
    _react2.default.createElement("circle", {
      cx: 96.26,
      cy: 109.34,
      r: 6.14,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m114.11 51.15c0-2.86-2.32-5.18-5.18-5.18h-50.18c-3.45 0-5.83 2.47-8.05 5.12-6.14 7.31-19.56 21.99-20.62 23.33-0.07 0.09-11.44 1.62-17.9 2.49-2.56 0.34-4.55 2.39-4.82 4.96l-0.46 23.84c-0.77 4.94 2.05 7 6.49 7h95.08l10.77-5.21-5.13-56.35z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m10.48 90.91h-10.23c-1.13 0-2.05-0.92-2.05-2.05v-4.26c0-1.13 0.92-2.05 2.05-2.05h13.98c1.7 0 2.83 1.44 2.28 3.01l-1.11 2.69c-0.86 2.2-1.79 2.66-4.92 2.66z",
        fill: "#FFF9C4"
      }),
      _react2.default.createElement("rect", {
        x: 113.86,
        y: 80.65,
        width: 5.24,
        height: 10.99,
        fill: "#F44336"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78.12 53.31c0.25 0 0.46 0.21 0.46 0.46v19.62c0 0.25-0.21 0.46-0.46 0.46h-33.35l17.18-20.54h16.17m0-2.04h-16.23c-0.57 0-1.11 0.25-1.48 0.69l-17.37 20.77c-1.05 1.25-0.16 3.16 1.48 3.16h33.6c1.38 0 2.5-1.12 2.5-2.5v-19.62c0-1.38-1.12-2.5-2.5-2.5z",
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
          "m105.63 53.31c0.32 0 0.58 0.26 0.58 0.58 0 0.07 0 0.14 0.01 0.21l2.03 19.23c-0.03 0.29-0.28 0.51-0.58 0.51h-19.08c-0.32 0-0.58-0.26-0.58-0.58v-19.37c0-0.32 0.26-0.58 0.58-0.58h17.04m0-2.04h-17.04c-1.45 0-2.63 1.18-2.63 2.63v19.38c0 1.45 1.18 2.63 2.63 2.63h19.09c1.45 0 2.63-1.18 2.63-2.63l-2.05-19.38c0-1.46-1.18-2.63-2.63-2.63z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m51.87 80.64c-0.98 0-2.81-1.7-4.18-3.14-1.25-1.32-1.34-3.39-0.15-4.76 1.38-1.58 3.31-3.1 4.32-3.1h0.01c1.69 0 3.07 1.38 3.07 3.07v4.86c0 1.68-1.38 3.07-3.07 3.07z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m108.94 48.02c1.73 0 3.13 1.4 3.13 3.13 0 0.06 0 0.12 0.01 0.18l2.15 23.71c0.08 0.84 0.65 1.54 1.46 1.78 0.19 0.06 0.39 0.08 0.58 0.08 0.62 0 1.22-0.28 1.61-0.79 0.08-0.1 0.3-0.33 0.65-0.33h2.6c0.45 0 0.83 0.38 0.83 0.83v16.41c0 0.45-0.38 0.83-0.83 0.83h-2.55-0.04l-0.11-0.02c-0.08-0.01-0.17-0.02-0.25-0.02-0.53 0-1.04 0.2-1.42 0.58-0.44 0.43-0.67 1.04-0.61 1.66l0.61 6.72c0.07 0.78 0.58 1.44 1.3 1.72 0.33 0.13 0.67 0.47 0.67 0.95v4.26c0 0.22-0.07 0.43-0.2 0.6h-7.21c-0.98 0-1.82 0.69-2.01 1.65-1.23 6.19-6.71 10.69-13.04 10.69-6.16 0-11.61-4.36-12.96-10.38-0.21-0.93-1.04-1.6-2-1.6h-36.73c-0.96 0-1.79 0.66-2 1.6-1.35 6.01-6.8 10.38-12.96 10.38s-11.61-4.36-12.96-10.38c-0.21-0.93-1.04-1.6-2-1.6h-1.27c-0.86 0-1.62-0.09-2.27-0.28-0.18-0.05-0.37-0.08-0.56-0.08h-4.3c-0.13-0.17-0.2-0.38-0.2-0.6v-4.26c0-0.54 0.44-0.99 0.99-1.01 1.09-0.04 1.95-0.92 1.97-2l0.39-20.43c0.2-1.6 1.44-2.85 3.04-3.07 3.23-0.43 7.69-1.03 11.35-1.54 7.32-1.01 7.32-1.01 7.88-1.71 0.35-0.44 2.58-2.92 5.15-5.79 4.87-5.42 11.54-12.85 15.43-17.49 2.33-2.78 4.14-4.39 6.48-4.39h50.2m0-2.03h-50.19c-3.45 0-5.83 2.47-8.05 5.12-6.14 7.31-19.56 21.99-20.62 23.33-0.07 0.09-11.44 1.62-17.9 2.49-2.56 0.34-4.55 2.39-4.82 4.96l-0.4 20.52c-1.63 0.05-2.96 1.4-2.96 3.05v4.26c0 1.13 0.62 2.11 1.54 2.64h5.02c0.84 0.24 1.79 0.36 2.83 0.36h1.27c1.54 6.85 7.64 11.97 14.96 11.97 7.31 0 13.42-5.12 14.96-11.97h36.72c1.54 6.85 7.64 11.97 14.96 11.97 7.44 0 13.64-5.3 15.04-12.33h7.92c0.91-0.53 1.54-1.51 1.54-2.64v-4.26c0-1.3-0.83-2.42-1.98-2.86l-0.61-6.72c0.12 0.01 0.23 0.04 0.35 0.04h2.6c1.58 0 2.88-1.29 2.88-2.88v-16.41c0-1.58-1.29-2.88-2.88-2.88h-2.6c-0.92 0-1.73 0.44-2.26 1.12l-2.15-23.71c0-2.86-2.31-5.17-5.17-5.17z",
        fill: "#424242"
      })
    )
  );
}

exports.default = BlueCar;
