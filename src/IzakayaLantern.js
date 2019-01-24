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

function IzakayaLantern(props) {
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
        id: "f",
        cx: 63.167,
        cy: 0,
        r: 27.624,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.9787
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88 24h-48c-2.21 0-4-1.79-4-4v-12c0-2.21 1.79-4 4-4h48c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 63.667,
        cy: 102,
        r: 25.365,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.9787
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88 124h-48c-2.21 0-4-1.79-4-4v-12c0-2.21 1.79-4 4-4h48c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88 7c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1h-48c-0.55 0-1-0.45-1-1v-12c0-0.55 0.45-1 1-1h48m0-3h-48c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4h48c2.21 0 4-1.79 4-4v-12c0-2.21-1.79-4-4-4z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88 107c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1h-48c-0.55 0-1-0.45-1-1v-12c0-0.55 0.45-1 1-1h48m0-3h-48c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4h48c2.21 0 4-1.79 4-4v-12c0-2.21-1.79-4-4-4z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 64,
        cy: 16.167,
        r: 102.88,
        gradientTransform: "matrix(1.2222 0 0 1 -14.222 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E57373",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E76D6D",
        offset: 0.0432
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ED5A58",
        offset: 0.2233
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.3414
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D23534",
        offset: 0.6076
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.7648
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88 116h-48c-11.05 0-20-8.95-20-20v-64c0-11.05 8.95-20 20-20h48c11.05 0 20 8.95 20 20v64c0 11.05-8.95 20-20 20z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m88 116h-48c-11.05 0-20-8.95-20-20v-64c0-11.05 8.95-20 20-20h48c11.05 0 20 8.95 20 20v64c0 11.05-8.95 20-20 20z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 67,
        cy: 14,
        r: 102.32,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7302D",
        offset: 0.2373
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C02121",
        offset: 0.7058
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 16,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 24,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 32,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 40,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 48,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 56,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 64,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 72,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 80,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 88,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 96,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 104,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 10.22,
      y: 112,
      width: 117.33,
      height: 4,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88 15c9.37 0 17 7.63 17 17v64c0 9.37-7.63 17-17 17h-48c-9.37 0-17-7.63-17-17v-64c0-9.37 7.63-17 17-17h48m0-3h-48c-11.05 0-20 8.95-20 20v64c0 11.05 8.95 20 20 20h48c11.05 0 20-8.95 20-20v-64c0-11.05-8.95-20-20-20z",
        fill: "#424242"
      })
    )
  );
}

exports.default = IzakayaLantern;
