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

function Rice(props) {
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
        id: "c",
        cx: 49.88,
        cy: 120.48,
        r: 18.653,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9D9D9D",
        offset: 0.884
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 115.58,
      rx: 25,
      ry: 8.42,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 109.17c14.88 0 23 4.24 23 6.42 0 1.02-1.84 2.67-5.96 4.06-4.52 1.51-10.57 2.35-17.04 2.35-14.88 0-23-4.24-23-6.42 0-1.02 1.84-2.67 5.96-4.06 4.52-1.52 10.57-2.35 17.04-2.35m0-2c-13.81 0-25 3.77-25 8.42s11.19 8.41 25 8.41 25-3.77 25-8.42-11.19-8.41-25-8.41z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 44.895,
        cy: 71.693,
        r: 75.259,
        gradientTransform: "matrix(.9943 .1071 -.0752 .6984 5.6509 16.812)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.2291
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.8173
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.9733
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m121.76 56.89c1.5 0.71 2.4 2.26 2.28 3.91-0.86 11.64-7.56 57.53-59.87 57.53s-59.02-45.89-59.88-57.53c-0.12-1.66 0.78-3.21 2.28-3.91 7.29-3.43 30.32-13.14 57.6-13.14s50.3 9.71 57.59 13.14z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 41.276,
        cy: 54.858,
        r: 77.502,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.3451
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.8524
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.04,
      cy: 57.16,
      rx: 60,
      ry: 20.17,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.04 39.99c15.71 0 30.44 2.04 41.47 5.75 9.58 3.22 15.53 7.6 15.53 11.42 0 0.17 0 0.48 0.01 0.84 0.01 0.67 0.02 2.23 0 2.58-0.4 5.41-2.19 19.32-10.17 31.73-9.83 15.28-25.55 23.03-46.71 23.03s-36.88-7.75-46.71-23.03c-7.99-12.41-9.78-26.32-10.18-31.73-0.01-0.1-0.02-0.29-0.04-0.54-0.05-0.65-0.2-2.39-0.2-2.88 0-3.82 5.95-8.2 15.53-11.42 11.03-3.7 25.76-5.75 41.47-5.75m0-3c-33.14 0-60 9.03-60 20.17 0 0.77 0.22 3.17 0.25 3.64 0.86 11.64 7.56 57.53 59.87 57.53 52.32 0 59.02-45.9 59.87-57.53 0.05-0.61 0-3 0-3.64 0.01-11.14-26.85-20.17-59.99-20.17z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m120 56.66v-54.53h-112v55.12h0.04c0.08 10.18 25.12 17.47 56 17.47 30.93 0 56-7.31 56-17.52 0-0.19-0.02-0.37-0.04-0.54z"
      })
    ),
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
      "g",
      {
        clipPath: "url(#e)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "d",
          cx: 62.11,
          cy: 9.617,
          r: 69.896,
          gradientTransform:
            "matrix(1.0287e-13 1 -1.0588 1.0891e-13 72.292 -52.493)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F5F5F5",
          offset: 0.4585
        }),
        _react2.default.createElement("stop", {
          stopColor: "#D0D8DC",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m119.96 55.06c-0.55-1.56-1.06-4.68-1.55-6.52-0.43-1.63-0.97-2.8-1.58-3.66-4.61-14.4-25.73-37.05-52.63-37.05-24.05 0-43.59 18.1-50.89 32.12h-0.01s-5.45 8.5-5.45 15.2c0 6.71 0.5 9.51 2.27 12.32 2.22 3.52 4.17 5.17 8.38 5.98 1.66 0.32 2.81 1.82 3.72 3.18 4.42 6.55 8.38 7.42 15.51 7.61 2.89 0.07 9.7 1.19 11.04 1.91 1.83 0.99 4.14 1.59 6.66 1.59 1.7 0 3.31-0.27 4.74-0.76 2.14-0.72 4.44-0.69 6.58 0.01 1.99 0.65 4.35 0.93 6.85 0.72 2.66-0.23 5.06-0.98 6.96-2.06 2.13-1.22 4.74-1.55 7.11-0.84 2.04 0.61 4.47 0.71 6.96 0.17 3.26-0.7 5.93-2.36 7.48-4.39 1.35-1.77 3.42-3.01 5.69-3.3 0.92-0.12 1.86-0.37 2.78-0.77 2.17-0.94 3.28-3.52 3.81-5.67 0.48-1.95 1.43-3.88 3.07-5.12 2.94-2.26 3.36-8.23 2.5-10.67z",
        fill: "url(#d)"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9677 -.2523 .2523 .9677 -16.221 19.201)",
        cx: 66.77,
        cy: 72.86,
        rx: 5.84,
        ry: 3.48,
        fill: "#B0BEC5",
        opacity: 0.6
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.314 -.9494 .9494 .314 11.866 141.89)",
        cx: 104.12,
        cy: 62.74,
        rx: 6.05,
        ry: 3.36,
        fill: "#B0BEC5",
        opacity: 0.6
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9141 -.4055 .4055 .9141 -24.99 20.809)",
        cx: 36.62,
        cy: 69.39,
        rx: 3.35,
        ry: 6.08,
        fill: "#B0BEC5",
        opacity: 0.6
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9973 -.074 .074 .9973 -3.8502 3.879)",
        cx: 50.44,
        cy: 53.92,
        rx: 5.82,
        ry: 3.49,
        fill: "#D0D8DC"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8379 -.5458 .5458 .8379 -19.911 56.059)",
        cx: 84.42,
        cy: 61.55,
        rx: 3.39,
        ry: 6,
        fill: "#D0D8DC"
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9053 -.4248 .4248 .9053 -24.437 45.478)",
        cx: 89.78,
        cy: 77.55,
        rx: 4.13,
        ry: 2.36,
        fill: "#90A4AE",
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9971 -.076 .076 .9971 -4.4822 1.446)",
        cx: 16.75,
        cy: 59.6,
        rx: 2.74,
        ry: 5.17,
        fill: "#B0BEC5",
        opacity: 0.6
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9583 -.2859 .2859 .9583 -6.7147 26.069)",
        cx: 85.92,
        cy: 36.03,
        rx: 4.97,
        ry: 2.34,
        fill: "#D0D8DC",
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.6439 -.7651 .7651 .6439 -6.6131 52.365)",
        cx: 52.94,
        cy: 33.29,
        rx: 4.13,
        ry: 2.29,
        fill: "#D0D8DC",
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.8552 -.5183 .5183 .8552 -16.505 20.78)",
        cx: 28.94,
        cy: 39.93,
        rx: 5.13,
        ry: 3.51,
        fill: "#B0BEC5",
        opacity: 0.5
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.3291 -.9443 .9443 .3291 26.564 130.61)",
        cx: 105.2,
        cy: 46.61,
        rx: 2.35,
        ry: 3.49,
        fill: "#D0D8DC",
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.9597 -.281 .281 .9597 -5.893 12.322)",
        cx: 40.02,
        cy: 26.71,
        rx: 3.49,
        ry: 2.34,
        fill: "#D0D8DC",
        opacity: 0.2
      }),
      _react2.default.createElement("ellipse", {
        transform: "matrix(.0906 -.9959 .9959 .0906 42.52 91.774)",
        cx: 71.51,
        cy: 22.61,
        rx: 2.34,
        ry: 3.51,
        fill: "#D0D8DC",
        opacity: 0.2
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m64.2 10.83c14.38 0 25.76 6.77 32.78 12.46 9.73 7.88 15.16 16.79 16.99 22.51 0.09 0.3 0.23 0.57 0.41 0.83 0.44 0.61 0.81 1.51 1.12 2.69 0.17 0.66 0.36 1.54 0.56 2.48 0.33 1.54 0.66 3.14 1.06 4.27 0.53 1.51 0.16 6.01-1.49 7.27-2 1.52-3.44 3.87-4.16 6.79-0.47 1.91-1.25 3.27-2.09 3.64-0.64 0.28-1.3 0.46-1.96 0.54-3.03 0.38-5.83 2-7.71 4.45-1.17 1.53-3.31 2.75-5.73 3.28-0.86 0.19-1.73 0.28-2.59 0.28-1.02 0-1.99-0.13-2.88-0.4-1.1-0.33-2.24-0.49-3.41-0.49-2.12 0-4.21 0.55-6.05 1.6-1.6 0.91-3.58 1.49-5.73 1.68-0.46 0.04-0.93 0.06-1.39 0.06-1.52 0-3-0.22-4.28-0.64-1.4-0.46-2.84-0.69-4.28-0.69s-2.85 0.23-4.2 0.69c-1.17 0.4-2.44 0.6-3.77 0.6-1.91 0-3.77-0.44-5.23-1.23-2.15-1.16-9.89-2.21-12.39-2.27-6.54-0.17-9.37-0.76-13.1-6.28-0.85-1.25-2.6-3.86-5.64-4.44-3.15-0.61-4.47-1.56-6.41-4.63-1.25-1.98-1.81-4-1.81-10.72 0-4.63 3.43-11.09 4.88-13.41 0.09-0.12 0.17-0.26 0.25-0.39 3.84-7.36 10.49-14.74 18.27-20.29 6.55-4.67 17.07-10.24 29.98-10.24m0-3c-24.05 0-43.59 18.1-50.89 32.12h-0.01s-5.45 8.5-5.45 15.2c0 6.71 0.5 9.51 2.27 12.32 2.22 3.52 4.17 5.17 8.38 5.98 1.66 0.32 2.81 1.82 3.72 3.18 4.42 6.55 8.38 7.42 15.51 7.61 2.89 0.07 9.7 1.19 11.04 1.91 1.83 0.99 4.14 1.59 6.66 1.59 1.7 0 3.31-0.27 4.74-0.76 1.05-0.36 2.15-0.53 3.24-0.53 1.13 0 2.25 0.18 3.34 0.54 1.55 0.51 3.32 0.79 5.21 0.79 0.54 0 1.09-0.02 1.64-0.07 2.66-0.23 5.06-0.98 6.96-2.06 1.39-0.79 2.97-1.21 4.56-1.21 0.86 0 1.72 0.12 2.55 0.37 1.14 0.34 2.41 0.52 3.73 0.52 1.04 0 2.13-0.11 3.22-0.35 3.26-0.7 5.93-2.36 7.48-4.39 1.35-1.77 3.42-3.01 5.69-3.3 0.92-0.12 1.86-0.37 2.78-0.77 2.17-0.94 3.28-3.52 3.81-5.67 0.48-1.95 1.43-3.88 3.07-5.12 2.95-2.24 3.37-8.22 2.51-10.66-0.55-1.56-1.06-4.68-1.55-6.52-0.43-1.63-0.97-2.8-1.58-3.66-4.61-14.41-25.73-37.06-52.63-37.06z",
          fill: "#434343"
        })
      )
    )
  );
}

exports.default = Rice;
