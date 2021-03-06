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

function Vhs(props) {
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
        id: "h",
        cx: 63.333,
        cy: 54.833,
        r: 32.002,
        gradientTransform:
          "matrix(1.0287e-13 1 -2.9061 2.9894e-13 222.68 -8.5)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 40,
      width: 112,
      height: 48,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 87.917,
        cy: 43.667,
        r: 40.84,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 88,
      cy: 64,
      r: 20,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 88,
        cy: 52.833,
        r: 21.412,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 88,
      cy: 64,
      r: 10,
      fill: "url(#f)"
    }),
    _react2.default.createElement("circle", {
      cx: 88,
      cy: 64,
      r: 16,
      fill: "none",
      opacity: 0.2,
      stroke: "#eee",
      strokeMiterlimit: 10,
      strokeWidth: 0.9412
    }),
    _react2.default.createElement("circle", {
      cx: 88,
      cy: 64,
      r: 13,
      fill: "none",
      opacity: 0.2,
      stroke: "#eee",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 39.833,
        cy: 43.75,
        r: 40.847,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 40,
      cy: 64,
      r: 20,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 39.667,
        cy: 53.333,
        r: 21.006,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 40,
      cy: 64,
      r: 10,
      fill: "url(#d)"
    }),
    _react2.default.createElement("circle", {
      cx: 40,
      cy: 64,
      r: 16,
      fill: "none",
      opacity: 0.2,
      stroke: "#eee",
      strokeMiterlimit: 10,
      strokeWidth: 0.9412
    }),
    _react2.default.createElement("circle", {
      cx: 40,
      cy: 64,
      r: 13,
      fill: "none",
      opacity: 0.2,
      stroke: "#eee",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88 55c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z",
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
          "m40 55c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z",
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
          "m40 46c9.93 0 18 8.07 18 18s-8.07 18-18 18-18-8.07-18-18 8.07-18 18-18m0-2c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20z",
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
          "m88 46c9.93 0 18 8.07 18 18s-8.07 18-18 18-18-8.07-18-18 8.07-18 18-18m0-2c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 64.5,
        cy: 28.75,
        r: 87.882,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m4 32v64c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-64c0-2.21-1.79-4-4-4h-112c-2.21 0-4 1.79-4 4zm36 46c0 1.1-0.9 2-2 2h-18c-2.21 0-8-7.16-8-16s5.79-16 8-16h18c1.1 0 2 0.9 2 2v28zm68 2h-18c-1.1 0-2-0.9-2-2v-28c0-1.1 0.9-2 2-2h18c2.21 0 8 7.16 8 16s-5.79 16-8 16z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 38,
      width: 104,
      height: 2,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 42,
      width: 104,
      height: 2,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 34,
      width: 104,
      height: 2,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 88,
      width: 104,
      height: 2,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 92,
      width: 104,
      height: 2,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("rect", {
      x: 12,
      y: 84,
      width: 104,
      height: 2,
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m82 48c1.1 0 2 0.9 2 2v28c0 1.1-0.9 2-2 2h-36c-1.1 0-2-0.9-2-2v-28c0-1.1 0.9-2 2-2h36m0-2h-36c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z",
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
          "m120 31c0.55 0 1 0.45 1 1v64c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-64c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v64c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-64c0-2.21-1.79-4-4-4z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 63.5,
        cy: 48.5,
        r: 21.844,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M84,50c0-1.1-0.9-2-2-2H46c-1.1,0-2,0.9-2,2v6h40V50z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.333,
        cy: 55.167,
        r: 28.404,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M44,56v22c0,1.1,0.9,2,2,2h36c1.1,0,2-0.9,2-2V56H44z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m77 66h-26c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h26c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m77 74h-26c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h26c0.55 0 1 0.45 1 1v2c0 0.55-0.45 1-1 1z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m108 48c2.21 0 8 7.16 8 16s-5.79 16-8 16h-18c-1.1 0-2-0.9-2-2v-28c0-1.1 0.9-2 2-2h18m-70 0c1.1 0 2 0.9 2 2v28c0 1.1-0.9 2-2 2h-18c-2.21 0-8-7.16-8-16s5.79-16 8-16h18m70-2h-18c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h18c3.77 0 10-8.41 10-18s-6.23-18-10-18zm-70 0h-18c-3.77 0-10 8.41-10 18s6.23 18 10 18h18c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Vhs;
