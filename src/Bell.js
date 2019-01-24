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

function Bell(props) {
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
        cx: 64.167,
        cy: 122.33,
        r: 20.667,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 0.7434
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 112,
      r: 12,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 63.75,
        cy: -1.5,
        r: 17.653,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.203
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4162
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.6332
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.8336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 12,
      r: 8,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 103c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-3c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z",
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
          "m64 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-3c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 63.833,
        cy: 11.167,
        r: 103.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.203
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4162
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.6332
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 0.8336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104 44c0-35.62-40-32-40-32s-40-3.62-40 32-12 52-12 52h104s-12-16.38-12-52z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m118 108h-108c-3.3 0-6-2.7-6-6s2.7-6 6-6h108c3.3 0 6 2.7 6 6s-2.7 6-6 6z",
      fill: "#FFD740"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m67.03 14.9c10.22 0 33.97 2.83 33.97 29.1 0 36.18 12.07 53.07 12.58 53.77l0.9 1.23h3.52c1.65 0 3 1.35 3 3s-1.35 3-3 3h-108c-1.65 0-3-1.35-3-3s1.35-3 3-3h3.52l0.9-1.23c0.51-0.7 12.58-17.59 12.58-53.77 0-11.5 4.51-19.75 13.4-24.51 7.46-4 16.09-4.59 20.56-4.59 1.71 0 2.76 0.09 2.76 0.09l0.28 0.02 0.27-0.02c0.01 0 1.05-0.09 2.76-0.09m0-3c-1.89 0-3.03 0.1-3.03 0.1s-1.14-0.1-3.03-0.1c-9.33 0-36.97 2.49-36.97 32.1 0 35.62-12 52-12 52h-2c-3.3 0-6 2.7-6 6s2.7 6 6 6h108c3.3 0 6-2.7 6-6s-2.7-6-6-6h-2s-12-16.38-12-52c0-29.6-27.64-32.1-36.97-32.1z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64.5,
        cy: 101.83,
        r: 77.668,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFD740",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD43C",
        offset: 0.2435
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFCB2F",
        offset: 0.4992
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFBD1A",
        offset: 0.7596
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFAB00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118 108h-108c-3.3 0-6-2.7-6-6s2.7-6 6-6h108c3.3 0 6 2.7 6 6s-2.7 6-6 6z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m118 99c1.65 0 3 1.35 3 3s-1.35 3-3 3h-108c-1.65 0-3-1.35-3-3s1.35-3 3-3h108m0-3h-108c-3.3 0-6 2.7-6 6s2.7 6 6 6h108c3.3 0 6-2.7 6-6s-2.7-6-6-6z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Bell;
