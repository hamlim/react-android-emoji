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

function VibrationMode(props) {
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
        y1: 3.4016,
        y2: 125.11,
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
        "m92.31 7.31c-3.1-0.8-11.31-3.31-28.31-3.31s-26.61 2.81-28.31 3.31c-2.1 0.5-3.69 2.59-3.69 4.69v104c0 2.1 1.59 4.19 3.69 4.69 1.7 0.5 11.31 3.31 28.31 3.31s25.21-2.51 28.31-3.31c2.1-0.5 3.69-2.59 3.69-4.69v-104c0-2.1-1.59-4.19-3.69-4.69z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d: "m78 16h-28c-1.1 0-2-0.9-2-2s0.9-2 2-2h28c1.1 0 2 0.9 2 2s-0.9 2-2 2z",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 37,
        y2: 119.11,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m86 104h-44c-1.1 0-2-0.9-2-2v-76c0-1.1 0.9-2 2-2h44c1.1 0 2 0.9 2 2v76c0 1.1-0.9 2-2 2z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("circle", {
      cx: 42,
      cy: 14,
      r: 2,
      fill: "#9E9E9E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78 13c0.55 0 1 0.45 1 1s-0.45 1-1 1h-28c-0.55 0-1-0.45-1-1s0.45-1 1-1h28m0-1h-28c-1.1 0-2 0.9-2 2s0.9 2 2 2h28c1.1 0 2-0.9 2-2s-0.9-2-2-2z",
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
          "m42 13c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1m0-1c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2z",
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
          "m86 24c1.1 0 2 0.9 2 2v76c0 1.1-0.9 2-2 2h-44c-1.1 0-2-0.9-2-2v-76c0-1.1 0.9-2 2-2h44m0-3h-44c-2.76 0-5 2.24-5 5v76c0 2.76 2.24 5 5 5h44c2.76 0 5-2.24 5-5v-76c0-2.76-2.24-5-5-5z",
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
          "m64 7c15.45 0 23.43 2.12 26.84 3.03 0.27 0.07 0.51 0.14 0.73 0.19l0.06 0.02c0.7 0.16 1.37 1.02 1.37 1.76v104c0 0.74-0.67 1.6-1.38 1.77l-0.06 0.02c-0.22 0.06-0.46 0.12-0.73 0.19-3.4 0.9-11.38 3.02-26.83 3.02-15 0-24.2-2.23-27.47-3.19l-0.16-0.04c-0.7-0.17-1.37-1.03-1.37-1.77v-104c0-0.74 0.67-1.6 1.38-1.77l0.16-0.04c3.26-0.96 12.46-3.19 27.46-3.19m0-3c-17 0-26.61 2.81-28.31 3.31-2.1 0.5-3.69 2.59-3.69 4.69v104c0 2.1 1.59 4.19 3.69 4.69 1.7 0.5 11.31 3.31 28.31 3.31s25.21-2.51 28.31-3.31c2.1-0.5 3.69-2.59 3.69-4.69v-104c0-2.1-1.59-4.19-3.69-4.69-3.1-0.8-11.31-3.31-28.31-3.31z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 12,
        x2: 12,
        y1: 16.894,
        y2: 112.89,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9C30",
        offset: 0.3074
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF7407",
        offset: 0.9036
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m19.47 75.87-5.57-11.87 5.57-11.87c0.71-1.51 0.71-3.31 0-4.81l-5.57-11.86 5.57-11.87c1.16-2.47 0.33-5.59-1.86-6.94-0.69-0.42-1.47-0.65-2.26-0.65-1.74 0-3.32 1.06-4.13 2.78l-6.7 14.27c-0.71 1.51-0.71 3.31 0 4.81l5.57 11.87-5.56 11.86c-0.71 1.51-0.71 3.31 0 4.81l5.57 11.87-5.57 11.87c-0.71 1.51-0.71 3.31 0 4.81l6.7 14.27c0.81 1.71 2.39 2.78 4.12 2.78 0.79 0 1.57-0.23 2.26-0.65 2.19-1.35 3.02-4.47 1.86-6.94l-5.57-11.87 5.57-11.87c0.71-1.5 0.71-3.3 0-4.8z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 108,
        x2: 108,
        y1: 16.894,
        y2: 112.89,
        gradientTransform: "matrix(-1 0 0 1 224 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFAB40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9C30",
        offset: 0.3074
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF7407",
        offset: 0.9036
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF6D00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.53 75.87 5.57-11.87-5.57-11.87c-0.71-1.51-0.71-3.31 0-4.81l5.57-11.87-5.57-11.87c-1.16-2.47-0.33-5.59 1.86-6.94 0.69-0.43 1.47-0.65 2.25-0.65 1.74 0 3.32 1.06 4.13 2.78l6.7 14.27c0.71 1.51 0.71 3.31 0 4.81l-5.57 11.87 5.57 11.87c0.71 1.51 0.71 3.31 0 4.81l-5.57 11.87 5.57 11.87c0.71 1.51 0.71 3.31 0 4.81l-6.7 14.27c-0.81 1.71-2.39 2.78-4.12 2.78-0.79 0-1.57-0.23-2.26-0.65-2.19-1.35-3.02-4.47-1.86-6.94l5.57-11.87-5.57-11.87c-0.71-1.5-0.71-3.3 0-4.8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m15.35 19c0.23 0 0.46 0.07 0.68 0.2 0.89 0.55 1.23 2.03 0.72 3.11l-5.57 11.87c-0.38 0.81-0.38 1.74 0 2.55l5.57 11.87c0.33 0.7 0.33 1.57 0 2.26l-5.57 11.87c-0.38 0.81-0.38 1.74 0 2.55l5.57 11.87c0.33 0.7 0.33 1.57 0 2.26l-5.57 11.87c-0.38 0.81-0.38 1.74 0 2.55l5.57 11.86c0.51 1.08 0.16 2.57-0.72 3.11-0.21 0.13-0.45 0.2-0.68 0.2-0.56 0-1.1-0.4-1.41-1.05l-6.7-14.27c-0.33-0.7-0.33-1.57 0-2.26l5.57-11.87c0.38-0.81 0.38-1.74 0-2.55l-5.56-11.87c-0.33-0.7-0.33-1.57 0-2.26l5.56-11.87c0.38-0.81 0.38-1.74 0-2.55l-5.56-11.86c-0.33-0.7-0.33-1.57 0-2.26l6.7-14.27c0.3-0.67 0.83-1.06 1.4-1.06m0-3c-1.74 0-3.32 1.06-4.13 2.78l-6.7 14.27c-0.71 1.51-0.71 3.31 0 4.81l5.57 11.87-5.56 11.86c-0.71 1.51-0.71 3.31 0 4.81l5.57 11.87-5.57 11.87c-0.71 1.51-0.71 3.31 0 4.81l6.7 14.27c0.81 1.71 2.39 2.78 4.12 2.78 0.79 0 1.57-0.23 2.26-0.65 2.19-1.35 3.02-4.47 1.86-6.94l-5.57-11.87 5.57-11.87c0.71-1.51 0.71-3.31 0-4.81l-5.57-11.86 5.57-11.87c0.71-1.51 0.71-3.31 0-4.81l-5.57-11.86 5.57-11.87c1.16-2.47 0.33-5.59-1.86-6.94-0.69-0.42-1.47-0.65-2.26-0.65z",
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
          "m112.65 19c0.57 0 1.1 0.39 1.41 1.05l6.7 14.27c0.33 0.7 0.33 1.57 0 2.26l-5.57 11.87c-0.38 0.81-0.38 1.74 0 2.55l5.57 11.86c0.33 0.7 0.33 1.57 0 2.26l-5.57 11.88c-0.38 0.81-0.38 1.74 0 2.55l5.57 11.86c0.33 0.7 0.33 1.57 0 2.26l-6.7 14.27c-0.31 0.65-0.85 1.05-1.41 1.05-0.23 0-0.46-0.07-0.68-0.2-0.89-0.55-1.23-2.03-0.72-3.11l5.57-11.87c0.38-0.81 0.38-1.74 0-2.55l-5.57-11.86c-0.33-0.7-0.33-1.57 0-2.26l5.57-11.87c0.38-0.81 0.38-1.74 0-2.55l-5.57-11.87c-0.33-0.7-0.33-1.57 0-2.26l5.57-11.87c0.38-0.81 0.38-1.74 0-2.55l-5.57-11.87c-0.51-1.08-0.16-2.57 0.73-3.11 0.21-0.12 0.44-0.19 0.67-0.19m0-3c-0.79 0-1.57 0.23-2.25 0.65-2.19 1.35-3.02 4.46-1.86 6.94l5.57 11.87-5.57 11.87c-0.71 1.51-0.71 3.31 0 4.81l5.56 11.86-5.57 11.87c-0.71 1.51-0.71 3.31 0 4.81l5.57 11.87-5.57 11.87c-1.16 2.47-0.32 5.59 1.86 6.94 0.69 0.43 1.47 0.65 2.26 0.65 1.74 0 3.32-1.06 4.12-2.78l6.7-14.27c0.71-1.51 0.71-3.31 0-4.81l-5.57-11.87 5.57-11.87c0.71-1.51 0.71-3.31 0-4.81l-5.57-11.87 5.57-11.87c0.71-1.51 0.71-3.31 0-4.81l-6.7-14.27c-0.8-1.72-2.38-2.78-4.12-2.78z",
        fill: "#424242"
      })
    )
  );
}

exports.default = VibrationMode;
