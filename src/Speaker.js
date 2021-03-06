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

function Speaker(props) {
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
        id: "b",
        cx: 47.167,
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
        "M64,92.04H36c-2.21,0-4-1.79-4-4.01V39.96c0-2.21,1.79-4.01,4-4.01h28V92.04z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("rect", {
      x: 40,
      y: 35.95,
      width: 4,
      height: 56.09,
      fill: "#1E88E5"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 86,
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
        "m84.8 6.26c-19.78 21.76-32.8 29.69-32.8 29.69v56.09s13.11 8.01 32.81 29.71c3.82 4.2 11.19 2.16 11.19-3.29v-108.94c0-5.46-7.37-7.47-11.2-3.26z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m89.93 7c1.06 0 3.07 0.53 3.07 2.53v108.94c0 1.86-1.85 2.54-3.09 2.54-0.65 0-1.88-0.16-2.88-1.26-19.76-21.78-32.92-29.93-33.47-30.27l-0.72-0.44h-16.84c-0.55 0-1-0.45-1-1.01v-48.07c0-0.55 0.45-1.01 1-1.01h16.84l0.72-0.44c0.55-0.33 13.61-8.4 33.46-30.24 1.01-1.1 2.26-1.27 2.91-1.27m0-3c-1.83 0-3.71 0.71-5.12 2.26-19.79 21.76-32.81 29.69-32.81 29.69h-16c-2.21 0-4 1.79-4 4.01v48.08c0 2.21 1.79 4.01 4 4.01h16s13.11 8.01 32.81 29.71c1.4 1.54 3.28 2.25 5.1 2.25 3.13 0 6.09-2.08 6.09-5.54v-108.94c0-3.45-2.94-5.53-6.07-5.53z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Speaker;
