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

function Sound(props) {
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
        cx: 100,
        cy: 15.906,
        r: 106.76,
        gradientTransform: "matrix(1 0 0 1.0016 0 -.1007)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB74D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEB449",
        offset: 0.2212
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDAA3C",
        offset: 0.4534
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FA9A27",
        offset: 0.6907
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6840A",
        offset: 0.9301
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 63.81c0-18.07-12.22-33.34-28.81-37.96-1.27-0.35-2.52 0.62-2.52 1.94v8.41c0 0.83 0.51 1.59 1.28 1.87 10.51 3.81 18.05 13.91 18.05 25.74s-7.54 21.93-18.05 25.74c-0.78 0.28-1.28 1.04-1.28 1.87v8.41c0 1.32 1.25 2.29 2.52 1.94 16.59-4.62 28.81-19.89 28.81-37.96z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m87.67 29.12c14.98 4.77 25.33 18.85 25.33 34.69s-10.35 29.91-25.33 34.69v-6.39c11.59-4.53 19.33-15.81 19.33-28.3s-7.74-23.77-19.33-28.3v-6.39m-1.01-3.35c-1.07 0-1.99 0.88-1.99 2.01v8.41c0 0.83 0.51 1.59 1.28 1.87 10.51 3.82 18.05 13.92 18.05 25.75s-7.54 21.93-18.05 25.74c-0.78 0.28-1.28 1.04-1.28 1.87v8.41c0 1.13 0.93 2.01 1.99 2.01 0.17 0 0.35-0.02 0.53-0.07 16.59-4.62 28.81-19.89 28.81-37.96s-12.22-33.34-28.81-37.96c-0.18-0.05-0.36-0.08-0.53-0.08z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 27.167,
        cy: 37.739,
        r: 64.296,
        gradientTransform: "matrix(1 0 0 1.0016 0 -.1007)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5FB2F5",
        offset: 0.1869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#51A9F1",
        offset: 0.4057
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3A9AEC",
        offset: 0.6394
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.8495
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M44,92.04H16c-2.21,0-4-1.79-4-4.01V39.96c0-2.21,1.79-4.01,4-4.01h28V92.04z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("rect", {
      x: 20,
      y: 35.95,
      width: 4,
      height: 56.09,
      fill: "#1E88E5"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 66,
        cy: 8.656,
        r: 105.05,
        gradientTransform: "matrix(1 0 0 1.0016 0 -.1007)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3DAFB",
        offset: 0.1183
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9ED0FA",
        offset: 0.2989
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7BC0F8",
        offset: 0.5193
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAAF5",
        offset: 0.769
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.8153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.8 6.26c-19.78 21.76-32.8 29.69-32.8 29.69v56.09s13.11 8.01 32.81 29.71c3.82 4.2 11.19 2.16 11.19-3.29v-108.94c0-5.46-7.37-7.47-11.2-3.26z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m69.93 7c1.06 0 3.07 0.53 3.07 2.53v108.94c0 1.86-1.85 2.54-3.09 2.54-0.65 0-1.88-0.16-2.88-1.26-19.76-21.78-32.92-29.93-33.47-30.27l-0.72-0.44h-16.84c-0.55 0-1-0.45-1-1.01v-48.07c0-0.55 0.45-1.01 1-1.01h16.84l0.72-0.44c0.55-0.33 13.61-8.4 33.46-30.24 1.01-1.1 2.26-1.27 2.91-1.27m0-3c-1.83 0-3.71 0.71-5.12 2.26-19.79 21.76-32.81 29.69-32.81 29.69h-16c-2.21 0-4 1.79-4 4.01v48.08c0 2.21 1.79 4.01 4 4.01h16s13.11 8.01 32.81 29.71c1.4 1.54 3.28 2.25 5.1 2.25 3.13 0 6.09-2.08 6.09-5.54v-108.94c0-3.45-2.94-5.53-6.07-5.53z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Sound;
