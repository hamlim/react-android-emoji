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

function Kaaba(props) {
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
        id: "c",
        cx: 7.5853,
        cy: 18.568,
        r: 116.62,
        gradientTransform:
          "matrix(1.0287e-13 1 -.893 9.1865e-14 24.167 10.982)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#414141",
        offset: 0.5227
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,4L5.48,19.6C4.61,19.84,4,20.63,4,21.54v84.93c0,0.91,0.61,1.7,1.48,1.93L64,124V4z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "M64,4l58.52,15.6c0.88,0.23,1.48,1.03,1.48,1.93v84.93c0,0.91-0.61,1.7-1.48,1.93L64,124V4z",
      fill: "#212121"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 5,
        cy: 38.25,
        r: 62.774,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC51F",
        offset: 0.3261
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB808",
        offset: 0.8468
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M20,65.19c0-1.72-1.1-3.18-2.62-3.74C17.76,61.08,18,60.57,18,60c0-1.1-0.9-2-2-2s-2,0.9-2,2 c0,0.57,0.24,1.08,0.62,1.45C13.1,62.01,12,63.46,12,65.19c0,1.53,0.87,2.85,2.13,3.52C14.42,69.46,15.14,70,16,70 s1.58-0.54,1.87-1.29C19.13,68.03,20,66.72,20,65.19z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "M52,65.19c0-1.72-1.1-3.18-2.62-3.74C49.76,61.08,50,60.57,50,60c0-1.1-0.9-2-2-2s-2,0.9-2,2 c0,0.57,0.24,1.08,0.62,1.45C45.1,62.01,44,63.46,44,65.19c0,1.53,0.87,2.85,2.13,3.52C46.42,69.46,47.14,70,48,70 s1.58-0.54,1.87-1.29C51.13,68.03,52,66.72,52,65.19z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64.75,
        cy: 28.75,
        r: 67.091,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFB300",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fa0",
        offset: 0.352
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF9300",
        offset: 0.9142
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF8F00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M84,65.19c0-1.72-1.1-3.18-2.62-3.74C81.76,61.08,82,60.57,82,60c0-1.1-0.9-2-2-2s-2,0.9-2,2 c0,0.57,0.24,1.08,0.62,1.45C77.1,62.01,76,63.46,76,65.19c0,1.53,0.87,2.85,2.13,3.52C78.42,69.46,79.14,70,80,70 s1.58-0.54,1.87-1.29C83.13,68.03,84,66.72,84,65.19z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m116 65.19c0-1.72-1.1-3.18-2.62-3.74 0.38-0.36 0.62-0.88 0.62-1.45 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.57 0.24 1.08 0.62 1.45-1.53 0.56-2.62 2.02-2.62 3.74 0 1.53 0.87 2.85 2.13 3.52 0.29 0.76 1.01 1.29 1.87 1.29s1.58-0.54 1.87-1.29c1.26-0.68 2.13-1.99 2.13-3.52z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points: "4 40 64 32 64 44 4 48",
      fill: "url(#b)"
    }),
    _react2.default.createElement("polygon", {
      points: "124 40 64 32 64 44 124 48",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m26 60h12c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-12c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d: "m58 60h6v8h-6c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d: "m64 60h6c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-6v-8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m90 60h12c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-12c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7.1l57,15.2v83.39l-57,15.2L7,105.7V22.3L64,7.1 M64,4L5.48,19.6C4.61,19.84,4,20.63,4,21.54 v84.93c0,0.91,0.61,1.7,1.48,1.93L64,124l58.52-15.6c0.88-0.23,1.48-1.03,1.48-1.93V21.54c0-0.91-0.61-1.7-1.48-1.93L64,4L64,4z",
        fill: "#eee"
      })
    )
  );
}

exports.default = Kaaba;
