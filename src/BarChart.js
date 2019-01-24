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

function BarChart(props) {
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
        id: "e",
        x1: 64,
        x2: 64,
        y1: 4.378,
        y2: 123.54,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#BDBDBD",
        strokeMiterlimit: 10
      },
      _react2.default.createElement("rect", {
        x: 4,
        y: 4,
        width: 120,
        height: 120
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 104,
        y2: 104
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 84,
        y2: 84
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 64,
        y2: 64
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 44,
        y2: 44
      }),
      _react2.default.createElement("line", {
        x1: 4,
        x2: 124,
        y1: 24,
        y2: 24
      }),
      _react2.default.createElement("line", {
        x1: 104,
        x2: 104,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 84,
        x2: 84,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 64,
        x2: 64,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 44,
        x2: 44,
        y1: 4,
        y2: 124
      }),
      _react2.default.createElement("line", {
        x1: 24,
        x2: 24,
        y1: 4,
        y2: 124
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 24.579,
        x2: 24.579,
        y1: 55.294,
        y2: 123.33,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4480F7",
        offset: 0.0051509
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3462BD",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 15.29,
      y: 54.72,
      width: 18.58,
      height: 69.28,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 50.614,
        x2: 50.614,
        y1: 80.634,
        y2: 124,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EC4431",
        offset: 0.0051509
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E74330",
        offset: 0.3002
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA3F2D",
        offset: 0.6329
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C33828",
        offset: 0.9828
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C23828",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 41.32,
      y: 80.63,
      width: 18.58,
      height: 43.37,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 76.648,
        x2: 76.648,
        y1: 33.696,
        y2: 124,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0.0051509
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F9D534",
        offset: 0.2697
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EDCB32",
        offset: 0.5326
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D9BA2D",
        offset: 0.7941
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C4A829",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 67.36,
      y: 33.7,
      width: 18.58,
      height: 90.3,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 102.68,
        x2: 102.68,
        y1: 99.1,
        y2: 124,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2CA94F",
        offset: 0.0079082
      }),
      _react2.default.createElement("stop", {
        stopColor: "#207A39",
        offset: 0.9969
      })
    ),
    _react2.default.createElement("rect", {
      x: 93.39,
      y: 99.1,
      width: 18.58,
      height: 24.9,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = BarChart;
