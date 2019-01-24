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

function Hospital(props) {
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
        id: "d",
        x1: 64,
        x2: 64,
        y1: 20,
        y2: 123.44,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2E7EA",
        offset: 0.2515
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9D2D7",
        offset: 0.6708
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M124,124H4V24c0-2.21,1.79-4,4-4h112c2.21,0,4,1.79,4,4V124z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 108,
        x2: 124,
        y1: 72,
        y2: 72,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9D2D7",
        offset: 0.3292
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2E7EA",
        offset: 0.7485
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 108,
      y: 20,
      width: 16,
      height: 104,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 17.667,
        x2: 33.667,
        y1: 72,
        y2: 72,
        gradientTransform: "matrix(-1 0 0 1 37.667 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9D2D7",
        offset: 0.3292
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2E7EA",
        offset: 0.7485
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "4 124 20 124 20 20 4 20",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m114 48h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m114 68h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m114 88h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m22 48h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m22 68h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m22 88h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120 23c0.55 0 1 0.45 1 1v97h-114v-97c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v100h120v-100c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4.5,
        y2: 123.81,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ECEFF1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2E7EA",
        offset: 0.2515
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9D2D7",
        offset: 0.6708
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M108,124H20V8c0-2.21,1.79-4,4-4h80c2.21,0,4,1.79,4,4V124z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m44 92h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 92h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m92 92h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m44 72h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 72h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("path", {
      d:
        "m92 72h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#546E7A"
    }),
    _react2.default.createElement("polygon", {
      points:
        "82 27.86 69.14 27.86 69.14 15 58.86 15 58.86 27.86 46 27.86 46 38.14 58.86 38.14 58.86 51 69.14 51 69.14 38.14 82 38.14",
      fill: "#fff",
      stroke: "#E53935",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("rect", {
      x: 34.75,
      y: 107.5,
      width: 58.5,
      height: 16.5,
      fill: "#78909C"
    }),
    _react2.default.createElement("path", {
      d: "m98 109.5h-68c-1.1 0-2-0.9-2-2h72c0 1.1-0.9 2-2 2z",
      fill: "#80DEEA"
    }),
    _react2.default.createElement("path", {
      d: "m100 108h-72v-2c0-0.55 0.45-1 1-1h70c0.55 0 1 0.45 1 1v2z",
      fill: "#E0F7FA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104 7c0.55 0 1 0.45 1 1v113h-82v-113c0-0.55 0.45-1 1-1h80m0-3h-80c-2.21 0-4 1.79-4 4v116h88v-116c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Hospital;
