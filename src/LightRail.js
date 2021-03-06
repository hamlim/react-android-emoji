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

function LightRail(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("polygon", {
      points:
        "86.26 35.1 84.24 32.9 98.36 19.93 86.91 7.91 89.09 5.84 102.64 20.07",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.14 36.85h-19.3c-1.08 0-1.96-0.88-1.96-1.96v-1.78c0-1.08 0.88-1.96 1.96-1.96h19.3c1.08 0 1.96 0.88 1.96 1.96v1.78c-0.01 1.08-0.88 1.96-1.96 1.96z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m100.12 8h-24.08c-1.08 0-1.96-0.88-1.96-1.96v-0.06c0-1.08 0.88-1.96 1.96-1.96h24.08c1.08 0 1.96 0.88 1.96 1.96v0.06c0 1.08-0.87 1.96-1.96 1.96z",
      fill: "#616161"
    }),
    _react2.default.createElement("path", {
      d: "M124,112.83H8.03C6.6,114.2,1.67,124.5,8.75,124.5H124V112.83z",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.038,
        x2: 64.038,
        y1: 36.302,
        y2: 111.3,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.0968
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECECEC",
        offset: 0.3215
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9302
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,34H33.03c-7.28,0-10.78,2.67-12.82,8.92L6.52,88.64l-1.14,4.29 c-3.62,11.62,0.88,20,6.82,20H124V34z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "M124,34H33.03c-7.28,0-10.78,2.67-12.82,8.92L6.52,88.64l-1.14,4.29c-3.62,11.62,0.88,20,6.82,20H124V34z"
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
          "M-31.84,48.88h66.16c3.12,0,5.67,2.7,5.67,6v32.25c0,3.3-2.55,6-5.67,6h-66.16V48.88z",
        fill: "#4FC3F7"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.6
      },
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "M-31.84,48.88h66.16c3.12,0,5.67,2.7,5.67,6v32.25c0,3.3-2.55,6-5.67,6h-66.16V48.88z",
          fill: "none"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m34.32 51.88c1.45 0 2.67 1.37 2.67 3v32.25c0 1.63-1.22 3-2.67 3h-63.16v-38.25h63.16m0-3h-66.16v44.25h66.16c3.12 0 5.67-2.7 5.67-6v-32.25c0-3.3-2.55-6-5.67-6z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "M131,48.88H64.84c-3.12,0-5.67,2.7-5.67,6v32.25c0,3.3,2.55,6,5.67,6H131V48.88z",
        fill: "#4FC3F7"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m128 51.88v38.25h-63.16c-1.45 0-2.67-1.37-2.67-3v-32.25c0-1.63 1.22-3 2.67-3h63.16m3-3h-66.16c-3.12 0-5.67 2.7-5.67 6v32.25c0 3.3 2.55 6 5.67 6h66.16v-44.25z",
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
          "M121,37v72.94H12.19c-1.49,0-2.56-1.02-3.19-1.88c-1.77-2.4-2.89-7.4-0.76-14.23 c0.01-0.04,0.02-0.08,0.04-0.12l1.13-4.25l13.67-45.64c1.69-5.16,4.11-6.81,9.95-6.81H121 M124,34H33.03 c-7.28,0-10.78,2.67-12.82,8.92L6.52,88.64l-1.14,4.29c-3.62,11.62,0.88,20,6.82,20H124V34L124,34z",
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
          "m121 115.83v5.67h-112.25c-0.38 0-0.58-0.05-0.67-0.08-0.38-0.94 0.59-3.91 1.5-5.59h111.42m3-3h-115.97c-1.43 1.37-6.36 11.67 0.72 11.67h115.25v-11.67z",
        fill: "#BBDEFB"
      })
    )
  );
}

exports.default = LightRail;
