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

function Office(props) {
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
        cx: 64.5,
        cy: 24.75,
        r: 80.285,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0571
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.337
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.5964
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ccc",
        offset: 0.8469
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M124,124H4V24c0-2.21,1.79-4,4-4h112c2.21,0,4,1.79,4,4V124z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("rect", {
      x: 4,
      y: 100,
      width: 120,
      height: 24,
      fill: "#9E9E9E"
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
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0.897,
        offset: 0.103
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
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
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0.897,
        offset: 0.103
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
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
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m114 68h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m114 88h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m22 48h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m22 68h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m22 88h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
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
      "radialGradient",
      {
        id: "a",
        cx: 64,
        cy: 15.75,
        r: 107.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0571
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.337
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.5964
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ccc",
        offset: 0.8469
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M108,124H20V8c0-2.21,1.79-4,4-4h80c2.21,0,4,1.79,4,4V124z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d: "m98 104.25h-68c-1.1 0-2-0.9-2-2h72c0 1.1-0.9 2-2 2z",
      fill: "#9E9E9E"
    }),
    _react2.default.createElement("path", {
      d: "m100 102.75h-72v-2c0-0.55 0.45-1 1-1h70c0.55 0 1 0.45 1 1v2z",
      fill: "#eee"
    }),
    _react2.default.createElement("path", {
      d:
        "m44 92h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 92h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m92 92h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m44 72h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 72h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m92 72h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m44 52h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 52h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m92 52h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m44 32h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m68 32h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m92 32h-8c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h8c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("rect", {
      x: 32,
      y: 104,
      width: 16,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 32,
        y: 104,
        width: 2,
        height: 20
      }),
      _react2.default.createElement("rect", {
        x: 46,
        y: 104,
        width: 2,
        height: 20
      })
    ),
    _react2.default.createElement("rect", {
      x: 56,
      y: 104,
      width: 16,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 56,
        y: 104,
        width: 2,
        height: 20
      }),
      _react2.default.createElement("rect", {
        x: 70,
        y: 104,
        width: 2,
        height: 20
      })
    ),
    _react2.default.createElement("rect", {
      x: 80,
      y: 104,
      width: 16,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 80,
        y: 104,
        width: 2,
        height: 20
      }),
      _react2.default.createElement("rect", {
        x: 94,
        y: 104,
        width: 2,
        height: 20
      })
    ),
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

exports.default = Office;
