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

function ConvenienceStore(props) {
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
        cy: 68.667,
        r: 51.168,
        gradientTransform: "matrix(1.0287e-13 1 -1.3383 1.3767e-13 156.07 4.5)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.5893
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E1E1E1",
        offset: 0.9791
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 8,
      y: 68,
      width: 112,
      height: 52,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 73.75,
        y2: 118.51,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0.5582
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 44,
      y: 72,
      width: 40,
      height: 52,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m84 72v48h-40v-48h40m2-2h-44v52h44v-52z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 20,
        x2: 20,
        y1: 80,
        y2: 104,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0.5582
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "m30 104h-22v-24h22c1.1 0 2 0.9 2 2v20c0 1.1-0.9 2-2 2z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 108,
        x2: 108,
        y1: 80,
        y2: 104,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0.5582
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M120,104H98c-1.1,0-2-0.9-2-2V82c0-1.1,0.9-2,2-2h22V104z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d: "M124,124H4v-4c0-2.21,1.79-4,4-4h112c2.21,0,4,1.79,4,4V124z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m117 71v48h3c0.55 0 1 0.45 1 1v1h-114v-1c0-0.55 0.45-1 1-1h3v-48h106m3-3h-112v48c-2.21 0-4 1.79-4 4v4h120v-4c0-2.21-1.79-4-4-4v-48z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 44,
      y: 96,
      width: 40,
      height: 4,
      fill: "#0089DA"
    }),
    _react2.default.createElement("rect", {
      x: 44,
      y: 92,
      width: 40,
      height: 4,
      fill: "#0FAC34"
    }),
    _react2.default.createElement("rect", {
      x: 76,
      y: 44,
      width: 8,
      height: 12,
      fill: "#424242"
    }),
    _react2.default.createElement("rect", {
      x: 100,
      y: 44,
      width: 8,
      height: 12,
      fill: "#424242"
    }),
    _react2.default.createElement("rect", {
      x: 4,
      y: 58,
      width: 120,
      height: 10,
      fill: "#FEFEFE"
    }),
    _react2.default.createElement("path", {
      d: "M4,66v5c0,1.66,1.34,3,3,3h114c1.66,0,3-1.34,3-3v-5H4z",
      fill: "#0089DA"
    }),
    _react2.default.createElement("path", {
      d: "m121 52h-114c-1.66 0-3 1.34-3 3v3h120v-3c0-1.66-1.34-3-3-3z",
      fill: "#0FAC34"
    }),
    _react2.default.createElement("path", {
      d:
        "M64,13v26c0,1.05,0.19,2.06,0.52,3h54.95c0.33-0.94,0.52-1.95,0.52-3V13c0-1.05-0.19-2.06-0.52-3 H64.52C64.19,10.94,64,11.95,64,13z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.52 42c0.4 1.12 1.01 2.13 1.78 3 1.65 1.84 4.03 3 6.69 3h38c2.66 0 5.05-1.16 6.69-3 0.78-0.87 1.39-1.88 1.78-3h-54.94z",
      fill: "#0089DA"
    }),
    _react2.default.createElement("path", {
      d:
        "m117.69 7c-1.65-1.84-4.03-3-6.69-3h-38c-2.66 0-5.05 1.16-6.69 3-0.78 0.87-1.39 1.88-1.78 3h54.95c-0.4-1.12-1.01-2.13-1.79-3z",
      fill: "#0FAC34"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#0FAC34"
      },
      _react2.default.createElement("path", {
        d:
          "m91.02 40h-14.28c-0.55 0-1-0.45-1-1v-2.42c0-0.22 0.07-0.44 0.21-0.62l7.26-9.26c0.95-1.32 1.65-2.48 2.1-3.48s0.67-1.95 0.67-2.87c0-1.23-0.21-2.2-0.64-2.89-0.42-0.7-1.03-1.05-1.83-1.05-0.87 0-1.57 0.41-2.08 1.22-0.4 0.64-0.65 1.49-0.73 2.53-0.04 0.51-0.48 0.91-0.99 0.91h-3.38c-0.59 0-1.06-0.52-1-1.11 0.12-1.27 0.46-2.45 1-3.54 0.7-1.4 1.69-2.49 2.96-3.27s2.71-1.17 4.32-1.17c2.47 0 4.38 0.68 5.74 2.04s2.04 3.29 2.04 5.8c0 1.56-0.38 3.13-1.13 4.73-0.75 1.59-2.1 3.56-4.06 5.89-0.02 0.02-0.03 0.04-0.05 0.06l-2.43 3.48c-0.46 0.66 0.01 1.57 0.82 1.57h6.47c0.55 0 1 0.45 1 1v2.45c0.01 0.55-0.44 1-0.99 1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m107.76 29.57h0.35c0.55 0 1 0.45 1 1v2.42c0 0.55-0.45 1-1 1h-0.35c-0.55 0-1 0.45-1 1v4.01c0 0.55-0.45 1-1 1h-3.37c-0.55 0-1-0.45-1-1v-4.01c0-0.55-0.45-1-1-1h-7.21c-0.52 0-0.96-0.41-1-0.93l-0.16-2.23c-0.01-0.18 0.02-0.37 0.11-0.53l8.96-17.37c0.17-0.33 0.51-0.54 0.89-0.54h3.78c0.55 0 1 0.45 1 1v15.19c0 0.54 0.45 0.99 1 0.99zm-8.99 0h1.63c0.55 0 1-0.45 1-1v-8.24l-0.11 0.21-3.43 7.62c-0.3 0.66 0.18 1.41 0.91 1.41z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 55v16h-114v-16h114m0-3h-114c-1.66 0-3 1.34-3 3v16c0 1.66 1.34 3 3 3h114c1.66 0 3-1.34 3-3v-16c0-1.66-1.34-3-3-3z",
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
          "m111 7c1.69 0 3.32 0.73 4.46 2 0.53 0.59 0.93 1.26 1.19 2 0.23 0.66 0.35 1.33 0.35 2v26c0 0.67-0.12 1.34-0.35 2-0.26 0.74-0.66 1.41-1.19 2-1.14 1.27-2.77 2-4.46 2h-38c-1.69 0-3.32-0.73-4.46-2-0.53-0.59-0.93-1.26-1.19-2-0.23-0.66-0.35-1.33-0.35-2v-26c0-0.67 0.12-1.34 0.35-2 0.26-0.74 0.66-1.41 1.19-2 1.14-1.27 2.77-2 4.46-2h38m0-3h-38c-2.66 0-5.05 1.16-6.69 3-0.78 0.87-1.39 1.88-1.78 3-0.34 0.94-0.53 1.95-0.53 3v26c0 1.05 0.19 2.06 0.52 3 0.4 1.12 1.01 2.13 1.78 3 1.65 1.84 4.03 3 6.69 3h38c2.66 0 5.05-1.16 6.69-3 0.78-0.87 1.39-1.88 1.78-3 0.33-0.94 0.52-1.95 0.52-3v-26c0-1.05-0.19-2.06-0.52-3-0.4-1.12-1.01-2.13-1.78-3-1.63-1.84-4.02-3-6.68-3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 63.5,
      y: 74,
      width: 1,
      height: 42,
      fill: "#eee",
      opacity: 0.3
    })
  );
}

exports.default = ConvenienceStore;