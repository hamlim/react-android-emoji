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

function Metro(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("circle", {
      cx: 63.92,
      cy: 64.17,
      r: 60,
      fill: "#37474F"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("circle", {
        id: "c",
        cx: 63.92,
        cy: 64.17,
        r: 60
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "45.14 99 80.48 99 108.47 124.56 20 123.76",
      clipPath: "url(#a)",
      fill: "#424242"
    }),
    _react2.default.createElement("polygon", {
      points: "36 120 20 120 39.03 100.53 51.33 100.83",
      clipPath: "url(#a)",
      fill: "#757575"
    }),
    _react2.default.createElement("polygon", {
      points: "92.38 119.63 108.76 119.25 89.86 99.94 77 100.22",
      clipPath: "url(#a)",
      fill: "#757575"
    }),
    _react2.default.createElement("ellipse", {
      cx: 43.9,
      cy: 100.54,
      rx: 4.87,
      ry: 4.57,
      clipPath: "url(#a)"
    }),
    _react2.default.createElement("ellipse", {
      cx: 84.7,
      cy: 100.54,
      rx: 4.87,
      ry: 4.57,
      clipPath: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m86.05 101.54h-44.28c-2.17 0-3.94-1.77-3.94-3.94s1.77-3.94 3.94-3.94h44.28c2.17 0 3.94 1.77 3.94 3.94s-1.77 3.94-3.94 3.94z",
      clipPath: "url(#a)",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.907,
        x2: 63.907,
        y1: 20.619,
        y2: 93.836,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.1079
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8E8E8",
        offset: 0.6316
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.8685
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.35 97.52h-54.89c-4.61 0-8.39-3.5-8.39-7.79v-51.3c0-17.5 13.6-18.47 35.83-18.47 23.31 0 35.83 1.13 35.83 18.47v51.3c0.01 4.28-3.77 7.79-8.38 7.79z",
      clipPath: "url(#a)",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.1
      },
      _react2.default.createElement("path", {
        d:
          "m63.91 22.95c25.44 0 32.83 2.03 32.83 15.47v51.3c0 2.64-2.42 4.79-5.39 4.79h-54.89c-2.97 0-5.39-2.15-5.39-4.79v-51.3c0.01-14.07 9.51-15.47 32.84-15.47m0-3c-22.23 0-35.83 0.97-35.83 18.47v51.3c0 4.28 3.77 7.79 8.39 7.79h54.89c4.61 0 8.39-3.5 8.39-7.79v-51.3c-0.01-17.34-12.54-18.47-35.84-18.47z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m52.14 33.27c0-1.77-1.52-3.15-3.29-2.99-7.85 0.71-14.1 4.01-14.1 9.56v31.17c0 1.66 1.34 3 3 3h11.38c1.66 0 3-1.34 3-3v-37.74z",
      clipPath: "url(#a)",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "M75.78,33.27c0-1.77,1.52-3.15,3.29-2.99c7.85,0.71,14.1,4.01,14.1,9.56 v31.17c0,1.66-1.34,3-3,3H78.78c-1.66,0-3-1.34-3-3V33.27z",
      clipPath: "url(#a)",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.14 89.28h-13.17c-1.1 0-2-0.9-2-2v-5.98c0-1.1 0.9-2 2-2h13.17c1.1 0 2 0.9 2 2v5.98c0 1.1-0.9 2-2 2z",
      clipPath: "url(#a)",
      fill: "#212121"
    }),
    _react2.default.createElement("path", {
      d:
        "m90.75 89.28h-12.97c-1.1 0-2-0.9-2-2v-5.98c0-1.1 0.9-2 2-2h12.97c1.1 0 2 0.9 2 2v5.98c0 1.1-0.9 2-2 2z",
      clipPath: "url(#a)",
      fill: "#212121"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.29 28.28h-8.77c-1.1 0-2-0.9-2-2v-0.29c0-1.1 0.9-2 2-2h8.77c1.1 0 2 0.9 2 2v0.29c0 1.1-0.9 2-2 2z",
      clipPath: "url(#a)",
      fill: "#FDD835"
    }),
    _react2.default.createElement("path", {
      d:
        "m68.12 73.92h-8.25c-1.66 0-3-1.34-3-3v-32.25c0-1.66 1.34-3 3-3h8.25c1.66 0 3 1.34 3 3v32.25c0 1.65-1.34 3-3 3z",
      clipPath: "url(#a)",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("circle", {
      cx: 47.25,
      cy: 84.5,
      r: 2.67,
      clipPath: "url(#a)",
      fill: "#FDD835"
    }),
    _react2.default.createElement("circle", {
      cx: 39.25,
      cy: 84.5,
      r: 2.67,
      clipPath: "url(#a)",
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 88.25,
      cy: 84.5,
      r: 2.67,
      clipPath: "url(#a)",
      fill: "#F44336"
    }),
    _react2.default.createElement("circle", {
      cx: 80.25,
      cy: 84.5,
      r: 2.67,
      clipPath: "url(#a)",
      fill: "#FDD835"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.92 8.17c30.88 0 56 25.12 56 56s-25.12 56-56 56-56-25.12-56-56 25.12-56 56-56m0-4c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.87-60-60-60z",
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
          "m49.13 32.26c0.56 0 1.01 0.45 1.01 1.01v37.74c0 0.55-0.45 1-1 1h-11.39c-0.55 0-1-0.45-1-1v-31.18c0-4.77 6.61-7.06 12.28-7.57h0.1m0-2c-0.09 0-0.18 0-0.28 0.01-7.85 0.71-14.1 4.01-14.1 9.56v31.17c0 1.66 1.34 3 3 3h11.38c1.66 0 3-1.34 3-3v-37.73c0.01-1.68-1.36-3.01-3-3.01z",
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
          "m78.79 32.26h0.1c5.66 0.51 12.28 2.8 12.28 7.57v31.17c0 0.55-0.45 1-1 1h-11.39c-0.55 0-1-0.45-1-1v-37.73c0-0.56 0.45-1.01 1.01-1.01m0-2c-1.64 0-3.01 1.33-3.01 3.01v37.74c0 1.66 1.34 3 3 3h11.38c1.66 0 3-1.34 3-3v-31.18c0-5.56-6.25-8.85-14.1-9.56-0.09 0-0.18-0.01-0.27-0.01z",
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
          "m68.12 37.67c0.55 0 1 0.45 1 1v32.25c0 0.55-0.45 1-1 1h-8.25c-0.55 0-1-0.45-1-1v-32.25c0-0.55 0.45-1 1-1h8.25m0-2h-8.25c-1.66 0-3 1.34-3 3v32.25c0 1.66 1.34 3 3 3h8.25c1.66 0 3-1.34 3-3v-32.25c0-1.66-1.34-3-3-3z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Metro;
