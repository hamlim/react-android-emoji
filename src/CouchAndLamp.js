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

function CouchAndLamp(props) {
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
      d: "m16 124h8s4-8 4-8v-4.02l-12.02-0.03 0.02 12.05z",
      fill: "#3E2723"
    }),
    _react2.default.createElement("path", {
      d: "m87.98 124h-8c0.33 0-3.99-8-3.99-8h0.01v-4.02l12.01-0.03-0.03 12.05z",
      fill: "#3E2723"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m17.98 113.95 8.02 0.02v1.52c-2 3.22-2.79 5.21-3.39 6.51h-4.61l-0.02-8.05m-2-2.01 0.02 12.06h8.01-0.01c-0.33 0 4-8 4-8v-4.02l-12.02-0.04z",
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
          "m86.01 113.95-0.03 8.05h-4.62c-0.59-1.29-1.64-3.28-3.37-6.49v-1.54l8.02-0.02m2-2.01-12.01 0.04v4.02h-0.01s4.32 8 3.99 8h-0.01 8.01l0.03-12.06z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 33.875,
        x2: 33.875,
        y1: 74.333,
        y2: 112.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0.381
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0.7239
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48 110.83h-28.25c-2.21 0-4-1.79-4-4v-26.83c0-2.21 1.79-4 4-4h28.25c2.21 0 4 1.79 4 4v26.83c0 2.21-1.79 4-4 4z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 69.875,
        x2: 69.875,
        y1: 74.333,
        y2: 112.67,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0.381
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 0.7239
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84 110.73h-28.25c-2.21 0-4-1.79-4-4v-26.73c0-2.21 1.79-4 4-4h28.25c2.21 0 4 1.79 4 4v26.73c0 2.21-1.79 4-4 4z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48 79c0.55 0 1 0.45 1 1v28c0 0.55-0.45 1-1 1h-28.25c-0.55 0-1-0.45-1-1v-28c0-0.55 0.45-1 1-1h28.25m0-3h-28.25c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28.25c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z",
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
          "m84 79c0.55 0 1 0.45 1 1v26.83c0 0.55-0.45 1-1 1h-28.25c-0.55 0-1-0.45-1-1v-26.83c0-0.55 0.45-1 1-1h28.25m0-3h-28.25c-2.21 0-4 1.79-4 4v26.83c0 2.21 1.79 4 4 4h28.25c2.21 0 4-1.79 4-4v-26.83c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-98 106.83h-28.25c-2.21 0-4-1.79-4-4v-22.83c0-2.21 1.79-4 4-4h28.25c2.21 0 4 1.79 4 4v22.83c0 2.21-1.79 4-4 4z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m-62 106.83h-28.25c-2.21 0-4-1.79-4-4v-22.83c0-2.21 1.79-4 4-4h28.25c2.21 0 4 1.79 4 4v22.83c0 2.21-1.79 4-4 4z",
      fill: "#757575"
    }),
    _react2.default.createElement("rect", {
      x: -138,
      y: 104,
      width: 88,
      height: 12,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m-130 116h-8c-2.21 0-4-1.79-4-4v-16c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m-50 116h-8c-2.21 0-4-1.79-4-4v-16c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("polygon", {
      points: "-22 68 -54 68 -50 48 -26 48",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: -40,
      y: 64,
      width: 4,
      height: 60,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: -46,
      y: 120,
      width: 16,
      height: 4,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d: "m-130 116v8h8s4-8 4-8-11.88-0.12-12 0z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d: "m-58 116v8h-8s-4-8-4-8h12z",
      fill: "#757575"
    }),
    _react2.default.createElement("rect", {
      x: 103.79,
      y: 56.63,
      width: 4.49,
      height: 67.37,
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("rect", {
      x: 97.05,
      y: 119.51,
      width: 17.96,
      height: 4.49,
      fill: "#757575"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 52,
        x2: 52,
        y1: 101.33,
        y2: 123.68,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 104,
      width: 88,
      height: 12,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m93 107v6h-82v-6h82m3-3h-88v12h88v-12z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 12,
        x2: 12,
        y1: 95,
        y2: 117.06,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m16 116h-8c-2.21 0-4-1.79-4-4v-16c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 92,
        x2: 92,
        y1: 95,
        y2: 117.06,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF9800",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F57C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96 116h-8c-2.21 0-4-1.79-4-4v-16c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m16 95c0.55 0 1 0.45 1 1v16c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-16c0-0.55 0.45-1 1-1h8m0-3h-8c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z",
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
          "m96 95c0.55 0 1 0.45 1 1v16c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-16c0-0.55 0.45-1 1-1h8m0-3h-8c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 103.79,
      y: 56.63,
      width: 4.49,
      height: 67.37,
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("rect", {
      x: 97.05,
      y: 119.51,
      width: 17.96,
      height: 4.49,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m107 58v61.51c0 0.55 0.73 1.49 1.28 1.49h5.72v2h-16v-2h5.79c0.55 0 1.21-0.94 1.21-1.49v-61.51h2m1-1h-4v63h-7v4h18v-4h-7v-63z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "124 61.12 88.07 61.12 92.56 38.67 119.51 38.67",
      fill: "#F9A825"
    }),
    _react2.default.createElement("polygon", {
      points: "124 61.12 88.07 61.12 92.56 38.67 119.51 38.67",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117.05 41.67 3.29 16.46h-28.61l3.29-16.46h22.03m2.46-3h-26.95l-4.49 22.46h35.93l-4.49-22.46z",
        fill: "#424242"
      })
    )
  );
}

exports.default = CouchAndLamp;
