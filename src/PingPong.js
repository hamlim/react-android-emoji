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

function PingPong(props) {
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
        id: "f",
        x1: 47.306,
        x2: 100.71,
        y1: 36.863,
        y2: 87.257,
        gradientTransform: "matrix(.9562 -.0107 -.0107 .9562 1.7939 5.1744)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F05455",
        offset: 0.258
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D41F26",
        offset: 0.8927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m102.74 26.04c-28.67-28.67-67.83-3.83-80.78 17.3-7.34 11.97-3.6 18.53 2.72 29.69 4.72 8.34 6.11 18.36 6.11 18.36l6.7 6.7s10.02 1.39 18.36 6.11c11.17 6.32 17.72 10.06 29.69 2.72 21.13-12.95 45.88-52.21 17.2-80.88z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m102.74 26.04c-28.67-28.67-67.83-3.83-80.78 17.3-7.34 11.97-3.6 18.53 2.72 29.69 4.72 8.34 6.11 18.36 6.11 18.36l6.7 6.7s10.02 1.39 18.36 6.11c11.17 6.32 17.72 10.06 29.69 2.72 21.13-12.95 45.88-52.21 17.2-80.88z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "d"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#d)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 46.518,
          x2: 57.381,
          y1: 108.64,
          y2: 99.378,
          gradientTransform: "matrix(.6686 .6686 -.6837 .6837 63.276 -20.858)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#F47C20",
          offset: 0.21
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F8981D",
          offset: 0.7859
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m30.7 105.58-7.8-7.8c0.29-12.71-7.79-39.39-7.79-39.39l55.36 55.36s-26.72-8.37-38.63-8.19l-1.14 0.02z",
        fill: "url(#c)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m72.82 16.08c10.43 0 19.79 4.07 27.8 12.08 9.31 9.31 13.29 20.35 11.81 32.81-2.17 18.37-15.96 35.73-28.46 43.39-4 2.45-7.35 3.59-10.55 3.59-4.86 0-9.55-2.66-16.05-6.34l-0.05-0.03c-7.25-4.1-15.54-5.81-18.4-6.31l-5.32-5.32c-0.5-2.87-2.2-11.16-6.31-18.4l-0.03-0.05c-6.28-11.09-9.15-16.15-2.74-26.6 8.56-13.97 28.4-28.82 48.3-28.82m0-3c-21.37 0-42.1 15.98-50.86 30.26-7.34 11.97-3.6 18.53 2.72 29.69 4.72 8.34 6.11 18.36 6.11 18.36l6.7 6.7s10.02 1.39 18.36 6.11c6.82 3.86 11.92 6.76 17.58 6.76 3.61 0 7.45-1.18 12.11-4.04 21.13-12.95 45.88-52.21 17.21-80.88-9.3-9.29-19.69-12.96-29.93-12.96z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 23.478,
        x2: 36.386,
        y1: 91.585,
        y2: 104.49,
        gradientTransform: "matrix(.9562 -.0107 -.0107 .9562 1.7939 5.1744)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE0B2",
        offset: 0.2278
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCB64E",
        offset: 0.8722
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m20.95 116.09-8.17-8.17c-1.32-1.32-2.14-2.6-0.69-3.85l19.61-16.91c3.35-3.35 7.81-4.33 11.08-1.06s2.3 7.73-1.06 11.08l-16.92 19.61c-1.25 1.44-2.53 0.63-3.85-0.7z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m38.14 86.09c1.19 0 2.27 0.48 3.22 1.43 2.65 2.65 1.19 6-1.06 8.25-0.03 0.03-0.07 0.07-0.1 0.11l-16.91 19.6c-0.17-0.1-0.46-0.32-0.93-0.8l-8.17-8.17c-0.47-0.47-0.69-0.77-0.8-0.93l19.61-16.91c0.04-0.03 0.07-0.07 0.11-0.1 1.6-1.6 3.39-2.48 5.03-2.48m0-2c-2.22 0-4.52 1.14-6.44 3.07l-19.61 16.92c-1.45 1.26-0.63 2.53 0.69 3.85l8.17 8.17c0.83 0.83 1.64 1.46 2.44 1.46 0.48 0 0.95-0.22 1.42-0.76l16.92-19.61c3.35-3.35 4.33-7.81 1.06-11.08-1.4-1.4-3.01-2.02-4.65-2.02z",
        fill: "#434343"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 30.116,
        cy: 27.844,
        r: 10.458,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFBFB",
        offset: 0.3753
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9461
      })
    ),
    _react2.default.createElement("circle", {
      cx: 32.37,
      cy: 30.86,
      r: 16,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m32.37 17.86c7.17 0 13 5.83 13 13s-5.83 13-13 13-13-5.83-13-13 5.83-13 13-13m0-3c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16z",
        fill: "#434343"
      })
    )
  );
}

exports.default = PingPong;
