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

function MonkeyFace(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("ellipse", {
      cx: 27.91,
      cy: 66,
      rx: 22.41,
      ry: 25.14,
      fill: "#E6B175"
    }),
    _react2.default.createElement("path", {
      d:
        "m27.91 42.36c11.53 0 20.91 10.6 20.91 23.64s-9.38 23.64-20.91 23.64-20.91-10.61-20.91-23.64 9.38-23.64 20.91-23.64m0-3c-13.2 0-23.91 11.93-23.91 26.64s10.71 26.64 23.91 26.64 23.91-11.93 23.91-26.64-10.7-26.64-23.91-26.64z",
      fill: "#8B5E3C"
    }),
    _react2.default.createElement("path", {
      d:
        "m100.09 91.14c-12.36 0-22.41-11.28-22.41-25.14s10.05-25.14 22.41-25.14 22.41 11.28 22.41 25.14-10.05 25.14-22.41 25.14z",
      fill: "#E6B175"
    }),
    _react2.default.createElement("path", {
      d:
        "m100.09 42.36c11.53 0 20.91 10.61 20.91 23.64s-9.38 23.64-20.91 23.64-20.91-10.61-20.91-23.64 9.38-23.64 20.91-23.64m0-3c-13.21 0-23.91 11.93-23.91 26.64s10.71 26.64 23.91 26.64 23.91-11.93 23.91-26.64-10.71-26.64-23.91-26.64z",
      fill: "#8B5E3C"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64.071,
        x2: 64.071,
        y1: 113.87,
        y2: 13.865,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#825C40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#855F41",
        offset: 0.1672
      }),
      _react2.default.createElement("stop", {
        stopColor: "#906746",
        offset: 0.3105
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2764D",
        offset: 0.4445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A97C50",
        offset: 0.4881
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64.07 113.87c-14.34 0-26.67-5.46-35.64-15.79-8.29-9.54-12.86-22.31-12.86-35.94 0-24.03 15-48.28 48.5-48.28s48.5 24.25 48.5 48.28c0 13.63-4.57 26.39-12.86 35.94-8.97 10.33-21.3 15.79-35.64 15.79z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.07 15.36c14.34 0 26.38 4.72 34.8 13.64 7.87 8.33 12.2 20.1 12.2 33.14 0 13.27-4.44 25.68-12.49 34.95-8.68 9.99-20.61 15.27-34.51 15.27s-25.83-5.28-34.51-15.27c-8.06-9.27-12.49-21.68-12.49-34.95 0-13.04 4.33-24.81 12.2-33.14 8.42-8.92 20.46-13.64 34.8-13.64m0-3c-31.96 0-50 22.29-50 49.78s18.6 53.22 50 53.22 50-25.73 50-53.22-18.04-49.78-50-49.78z",
      fill: "#8B5E3C"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64.071,
        x2: 64.071,
        y1: 36.395,
        y2: 109.5,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E6B175",
        offset: 0.2592
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2AC70",
        offset: 0.4545
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59E62",
        offset: 0.6859
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C0884A",
        offset: 0.9346
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BD8446",
        offset: 0.9692
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m105.19 56.21c0-10.94-9.23-19.81-20.61-19.81-10.14 0-18.55 7.04-20.27 16.31-0.1 0-0.21-0.01-0.31-0.01h-0.17c-1.73-9.27-10.14-16.3-20.27-16.3-11.38 0-20.61 8.87-20.61 19.81 0 5.88 2.68 11.14 6.91 14.77-1.15 2.59-1.78 5.36-1.78 8.24 0 14.65 16.08 30.28 35.92 30.28s35.92-15.63 35.92-30.28c0-2.84-0.61-5.58-1.73-8.15 4.28-3.63 7-8.94 7-14.86z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 41.4,
        cy: 59.01,
        rx: 7.87,
        ry: 8.91
      }),
      _react2.default.createElement("ellipse", {
        cx: 86.6,
        cy: 59.01,
        rx: 7.87,
        ry: 8.91
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m70.56 102.78c11.78-2.35 19.56-10.93 21.39-20.6 0.33-1.76-1.23-3.29-2.99-2.96-7.16 1.33-15.74 2.1-24.97 2.1s-17.8-0.77-24.96-2.1c-1.77-0.33-3.34 1.23-2.98 3 2.38 11.64 13.83 21.19 27.93 21.19 2.31 0 4.51-0.22 6.58-0.63"
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
    _react2.default.createElement("path", {
      d:
        "m63.99 81.32c-9.23 0-17.8-0.77-24.96-2.1-1.77-0.33-3.34 1.23-2.98 3 2.38 11.64 13.83 21.19 27.93 21.19 15.43 0 25.81-9.87 27.97-21.23 0.33-1.76-1.23-3.29-2.99-2.96-7.15 1.32-15.73 2.1-24.97 2.1z",
      clipPath: "url(#a)",
      fill: "#404040",
      stroke: "#404040",
      strokeMiterlimit: 10
    }),
    _react2.default.createElement("path", {
      d: "M95,78.97V70H33v8.97c9,5.65,19.91,8.8,31,8.8S86,84.62,95,78.97z",
      clipPath: "url(#a)",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m63.99 81.32c-9.23 0-17.8-0.77-24.96-2.1-1.77-0.33-3.34 1.23-2.98 3 2.38 11.64 13.83 21.19 27.93 21.19 15.43 0 25.81-9.87 27.97-21.23 0.33-1.76-1.23-3.29-2.99-2.96-7.15 1.32-15.73 2.1-24.97 2.1z",
        fill: "none"
      })
    ),
    _react2.default.createElement("path", {
      d: "m33 72v8.64c9 5.65 19.91 8.8 31 8.8s22-3.14 31-8.8v-8.64h-62z",
      clipPath: "url(#a)",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 95.35c-6.92 0-12.95 3.77-16.17 9.37 4.18 2.28 9.88 3.69 16.17 3.69s11.99-1.41 16.17-3.69c-3.22-5.6-9.25-9.37-16.17-9.37z",
      clipPath: "url(#a)",
      fill: "#FF4F4F"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 58.75,
        cy: 70.12,
        rx: 2.44,
        ry: 3.91
      }),
      _react2.default.createElement("ellipse", {
        cx: 69.25,
        cy: 70.12,
        rx: 2.44,
        ry: 3.91
      })
    )
  );
}

exports.default = MonkeyFace;
