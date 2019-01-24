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

function Lipstick(props) {
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
      "symbol",
      {
        viewBox: "-64.5 -64.5 129 129"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "none",
          stroke: "#4285F4",
          strokeMiterlimit: 10
        },
        _react2.default.createElement("rect", {
          x: -64,
          y: -64,
          width: 128,
          height: 128
        }),
        _react2.default.createElement("path", {
          d:
            "M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z"
        }),
        _react2.default.createElement("path", {
          d:
            "m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z"
        }),
        _react2.default.createElement("path", {
          d:
            "M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z"
        }),
        _react2.default.createElement("line", {
          x1: -0.01,
          x2: -0.01,
          y1: 51,
          y2: -51
        }),
        _react2.default.createElement("line", {
          x1: -16,
          x2: -16,
          y1: 48.95,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 15.99,
          x2: 15.99,
          y1: 48.91,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 53,
          x2: -53,
          y1: 0.08,
          y2: 0.08
        })
      )
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "f",
        x: 4,
        y: 4,
        width: 120,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 7.3938,
        y2: 83.642,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.3439
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40 104v-70c0-13.25 4.75-30 18-30s30 16.75 30 30v70c0 13.25-48 13.25-48 0z",
      clipPath: "url(#a)",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 53.039,
        x2: 81.129,
        y1: 10.759,
        y2: 37.228,
        gradientTransform: "matrix(.9756 .0193 .0193 .9731 .948 -.2222)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E57373",
        offset: 0.1984
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.8571
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.33 37.97c-3.73 3.98-13.23 1.14-21.23-6.35s-11.45-16.79-7.73-20.77 13.23-1.14 21.23 6.35 11.45 16.79 7.73 20.77z",
      clipPath: "url(#a)",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m58 7c11.61 0 27 15.39 27 27v70c0 3.35-8.44 6.94-21 6.94s-21-3.59-21-6.94v-70c0-6.99 1.36-13.79 3.73-18.66 2.69-5.53 6.48-8.34 11.27-8.34m0-3c-13.25 0-18 16.75-18 30v70c0 6.63 12 9.94 24 9.94s24-3.31 24-9.94v-70c0-13.25-16.75-30-30-30z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 36,
        x2: 92,
        y1: 94.54,
        y2: 94.54,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EDC139",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE596",
        offset: 0.4969
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EDC139",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m92 108.03h-56v-22.98c0-2.21 1.79-4 4-4h48c2.21 0 4 1.79 4 4v22.98z",
      clipPath: "url(#a)",
      fill: "url(#c)"
    }),
    _react2.default.createElement("rect", {
      x: 36,
      y: 101.22,
      width: 56,
      height: 15.71,
      clipPath: "url(#a)",
      fill: "#424242",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 31.682,
        x2: 95.132,
        y1: 120.54,
        y2: 120.54,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D9B136",
        offset: 0.09
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7D66A",
        offset: 0.4563
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D9B136",
        offset: 0.8297
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.1 135.93h-64.2v-26.78c0-2.21 1.79-4 4-4h56.2c2.21 0 4 1.79 4 4v26.78z",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88 84c0.54 0 1 0.48 1 1.05v19.95c0 1.66 1.34 3 3 3h0.1c0.48 0 0.9 0.54 0.9 1.15v23.85h-58v-23.85c0-0.61 0.42-1.15 0.9-1.15h0.1c1.66 0 3-1.34 3-3v-19.95c0-0.57 0.46-1.05 1-1.05h48m0-3h-48c-2.21 0-4 1.84-4 4.05v19.95h-0.1c-2.21 0-3.9 1.94-3.9 4.15v26.85h64v-26.85c0-2.21-1.69-4.15-3.9-4.15h-0.1v-19.95c0-2.21-1.79-4.05-4-4.05z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Lipstick;
