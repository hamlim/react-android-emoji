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

function PassengerShip(props) {
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
        y1: 83.5,
        y2: 125.65,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0.9826
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 80,
      width: 120,
      height: 44,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m121 83v38h-114v-38h114m3-3h-120v44h120v-44z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: -399,
      y: -202.67,
      width: 0,
      height: 0.67,
      fill: "#F2F2F2"
    }),
    _react2.default.createElement("path", {
      d: "m-107.5-112.17",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m-103.5-112.17",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m6-100.25",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m14.64-121.97",
      fill: "none",
      stroke: "#ED1E79",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d:
        "m66.96 28h-19.56c-2.76 0-5.68 6.52-5.68 6.52h30.35c0.01 0-2.24-6.52-5.11-6.52z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m103.08 28c-3.73 0-7.13 1.92-8.8 4.96l-0.86 1.56h19.37l-1.05-1.79c-1.71-2.91-5.04-4.73-8.66-4.73z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d: "m54.55 22.16",
      fill: "#BDBDBD",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m58.56 22.16",
      fill: "#BDBDBD",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m66.95 30c0.44 0.07 1.28 1.09 2.06 2.52h-23.92c0.9-1.39 1.82-2.44 2.31-2.52h19.55m0.01-2h-19.56c-2.76 0-5.68 6.52-5.68 6.52h30.35c0.01 0-2.24-6.52-5.11-6.52z",
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
          "m103.08 30c2.37 0 4.56 0.94 6.03 2.52h-12.06c1.47-1.56 3.69-2.52 6.03-2.52m0-2c-3.73 0-7.13 1.92-8.8 4.96l-0.86 1.56h19.37l-1.05-1.79c-1.71-2.91-5.04-4.73-8.66-4.73z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d: "m20.02 54.91",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m24.02 54.91",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 63.987,
        x2: 63.987,
        y1: 46,
        y2: 88.672,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m117.1 33h-81.01c-0.96 0-1.86 0.47-2.41 1.25l-1.32 1.88c-0.37 0.53 0.01 1.27 0.66 1.26l1.76-0.02c0.52-0.01 0.82 0.58 0.52 1l-15.3 21.69h-16c-0.06 0 0 1.91 0 1.91 0 1.97 0.67 3.87 1.9 5.41l11.64 14.5c1.62 2.02 2.46 3.66 2.41 6.25l104.05-0.09v-28.26l-5.16-21.68c0.85 0 1.44-0.86 1.13-1.65l-0.32-0.82c-0.56-1.58-0.88-2.63-2.55-2.63z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "M34.57,39.41L20,60.06H4v1.95c0,1.94,0.66,3.83,1.88,5.34l11.67,14.53c1.62,2.02,2.46,3.66,2.41,6.25l0,0 L124,88.04V74.21L95.08,61.07L112,60.99l-0.38-21.11L34.57,39.41z"
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
    _react2.default.createElement("rect", {
      x: 4,
      y: 75.83,
      width: 122,
      height: 13.17,
      clipPath: "url(#a)",
      fill: "#01579B"
    }),
    _react2.default.createElement("rect", {
      x: 28.75,
      y: 40,
      width: 79.33,
      height: 6,
      clipPath: "url(#a)",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("rect", {
      x: 21.01,
      y: 50.41,
      width: 86.87,
      height: 8,
      clipPath: "url(#a)",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m106.08 42v2h-75.33v-2h75.33m2-2h-79.33v6h79.33v-6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m105.87 52.41v4h-82.86v-4h82.86m2-2h-86.86v8h86.87v-8h-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "13.35 59.12 12.01 61 13.35 59.13",
      fill: "none"
    }),
    _react2.default.createElement("polygon", {
      points: "92.6 32.42 92.23 33 92.23 33",
      fill: "#90CAF9"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "107.13 32.26 107.64 33",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "36.09 33 36.09 33",
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
          "m117.1 35c0.07 0 0.12 0 0.15 0.01 0.13 0.21 0.32 0.74 0.46 1.13l0.06 0.16c0.01 0.02 0.01 0.04 0.02 0.06l0.01 0.03c-0.2 0.12-0.38 0.28-0.53 0.47-0.38 0.48-0.52 1.11-0.38 1.7l5.1 21.46v26.03l-100.17 0.08c-0.35-2.16-1.35-3.81-2.71-5.5l-11.65-14.51c-0.92-1.15-1.44-2.59-1.46-4.06h14c0.65 0 1.26-0.32 1.63-0.85l15.3-21.69c0.57-0.81 0.64-1.85 0.19-2.73-0.37-0.72-1.04-1.21-1.82-1.37l0.02-0.02c0.18-0.25 0.46-0.4 0.77-0.4h81.01m0-2h-81.01c-0.96 0-1.86 0.47-2.41 1.25l-1.32 1.88c-0.37 0.53 0.01 1.26 0.65 1.26h0.01l1.76-0.02h0.01c0.51 0 0.81 0.58 0.52 1l-15.31 21.69h-16c-0.06 0 0 1.91 0 1.91 0 1.97 0.67 3.87 1.9 5.41l11.64 14.5c1.62 2.02 2.46 3.66 2.41 6.25l104.05-0.09v-28.26l-5.16-21.68c0.85 0 1.44-0.86 1.13-1.65l-0.32-0.82c-0.56-1.58-0.88-2.63-2.55-2.63z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 26.71,
      cy: 68.43,
      r: 4,
      fill: "#FF9800"
    }),
    _react2.default.createElement("circle", {
      cx: 48.23,
      cy: 68.43,
      r: 4,
      fill: "#FF9800"
    }),
    _react2.default.createElement("circle", {
      cx: 69.75,
      cy: 68.43,
      r: 4,
      fill: "#FF9800"
    }),
    _react2.default.createElement("circle", {
      cx: 91.27,
      cy: 68.43,
      r: 4,
      fill: "#FF9800"
    }),
    _react2.default.createElement("circle", {
      cx: 112.79,
      cy: 68.43,
      r: 4,
      fill: "#FF9800"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m26.71 66.43c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.89-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
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
          "m48.23 66.43c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
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
          "m69.75 66.43c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
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
          "m91.27 66.43c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
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
          "m112.79 66.43c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = PassengerShip;
