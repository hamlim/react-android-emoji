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

function Barber(props) {
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
        id: "g",
        cx: 64.083,
        cy: 22,
        r: 98.902,
        gradientTransform:
          "matrix(1.2344e-13 1.0276 -.5662 4.9876e-14 76.557 -43.795)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.4133
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.9947
      })
    ),
    _react2.default.createElement("rect", {
      x: 40,
      y: 20,
      width: 48,
      height: 102.76,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 44,
        x2: 84,
        y1: 70,
        y2: 70,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0.2199
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.4963
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D1D1D1",
        offset: 0.7972
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D4D4D4",
        offset: 0.8736
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.9406
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.9947
      })
    ),
    _react2.default.createElement("rect", {
      x: 44,
      y: 20,
      width: 40,
      height: 100,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "e",
        x: 44,
        y: 20,
        width: 40,
        height: 100
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "94.83 18.42 26.17 58.06 26.17 43.57 94.83 3.93",
      clipPath: "url(#a)",
      fill: "#08128A"
    }),
    _react2.default.createElement("polygon", {
      points: "94.83 47.67 26.17 87.31 26.17 72.82 94.83 33.18",
      clipPath: "url(#a)",
      fill: "#D40004"
    }),
    _react2.default.createElement("polygon", {
      points: "94.83 77.19 26.17 116.83 26.17 102.34 94.83 62.7",
      clipPath: "url(#a)",
      fill: "#08128A"
    }),
    _react2.default.createElement("polygon", {
      points: "94.83 106.7 26.17 146.35 26.17 131.86 94.83 92.21",
      clipPath: "url(#a)",
      fill: "#D40004"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 60.75,
        cy: 12,
        r: 23.034,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.995
      })
    ),
    _react2.default.createElement("path", {
      d: "M42,22.67C42,12.36,51.85,4,64,4s22,8.36,22,18.67H42z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 117.18,
        y2: 123.96,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0052544
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88 124h-48c-1.66 0-3-1.34-3-3s1.34-3 3-3h48c1.66 0 3 1.34 3 3s-1.34 3-3 3z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 20.047,
        y2: 25.908,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9947
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m88 26h-48c-1.66 0-3-1.34-3-3s1.34-3 3-3h48c1.66 0 3 1.34 3 3s-1.34 3-3 3z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c9.43,0,17.52,5.8,18.81,13.5c0.24,1.44,1.49,2.5,2.96,2.5H88c-1.66,0-3,1.34-3,3v92 c0,1.66,1.34,3,3,3H40c1.66,0,3-1.34,3-3V26c0-1.66-1.34-3-3-3h2.23c1.46,0,2.71-1.06,2.96-2.5C46.48,12.8,54.57,7,64,7 M64,4 c-11.08,0-20.25,6.95-21.77,16H40c-1.66,0-3,1.34-3,3s1.34,3,3,3v92c-1.66,0-3,1.34-3,3s1.34,3,3,3h48c1.66,0,3-1.34,3-3 s-1.34-3-3-3V26c1.66,0,3-1.34,3-3s-1.34-3-3-3h-2.23C84.25,10.95,75.08,4,64,4L64,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Barber;
