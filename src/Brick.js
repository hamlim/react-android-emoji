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

function Brick(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      fill: "#FFD3C2"
    }),
    _react2.default.createElement("rect", {
      x: 4.27,
      y: 21.37,
      width: 13.55,
      height: 14.49,
      fill: "#B34A30"
    }),
    _react2.default.createElement("rect", {
      x: 4.27,
      y: 38.48,
      width: 34.01,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement("rect", {
      x: 4.27,
      y: 56.92,
      width: 13.55,
      height: 14.49,
      fill: "#C74122"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 21.271,
        x2: 21.271,
        y1: 71.75,
        y2: 94.762,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B4391F",
        offset: 0.0011619
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC391F",
        offset: 0.2918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#97391F",
        offset: 0.7366
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87391F",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4.27,
      y: 74.2,
      width: 34.01,
      height: 14.49,
      fill: "url(#f)"
    }),
    _react2.default.createElement("rect", {
      x: 4.27,
      y: 91.92,
      width: 16.55,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement("rect", {
      x: 4.27,
      y: 109.65,
      width: 38.56,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement("rect", {
      x: 45.83,
      y: 109.65,
      width: 38.56,
      height: 14.49,
      fill: "#B53E26"
    }),
    _react2.default.createElement("rect", {
      x: 87.67,
      y: 109.65,
      width: 36.33,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement("rect", {
      x: 23.82,
      y: 91.92,
      width: 38.01,
      height: 14.49,
      fill: "#E96E49"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 82.338,
        x2: 82.338,
        y1: 88.5,
        y2: 109.04,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D56437",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D26035",
        offset: 0.3198
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C7552F",
        offset: 0.6082
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B64325",
        offset: 0.8837
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC391F",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 64.83,
      y: 91.92,
      width: 35.01,
      height: 14.49,
      fill: "url(#e)"
    }),
    _react2.default.createElement("rect", {
      x: 102.85,
      y: 91.92,
      width: 21.16,
      height: 14.49,
      fill: "#C6481B"
    }),
    _react2.default.createElement("rect", {
      x: 41.28,
      y: 74.2,
      width: 38.72,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement("rect", {
      x: 83,
      y: 74.2,
      width: 41,
      height: 14.49,
      fill: "#BF471B"
    }),
    _react2.default.createElement("rect", {
      x: 4.27,
      y: 4,
      width: 34.01,
      height: 14.49,
      fill: "#B65324"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 60.638,
        x2: 60.638,
        y1: 3.8333,
        y2: 22.049,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D56437",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D26035",
        offset: 0.3198
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C7552F",
        offset: 0.6082
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B64325",
        offset: 0.8837
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC391F",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 41.28,
      y: 4,
      width: 38.72,
      height: 14.49,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 103.5,
        x2: 103.5,
        y1: -4.5,
        y2: 28.265,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D56437",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D26035",
        offset: 0.3198
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C7552F",
        offset: 0.6082
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B64325",
        offset: 0.8837
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC391F",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 83,
      y: 4,
      width: 41,
      height: 14.49,
      fill: "url(#c)"
    }),
    _react2.default.createElement("rect", {
      x: 20.82,
      y: 56.92,
      width: 37.19,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 80.506,
        x2: 80.506,
        y1: 53,
        y2: 81.777,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B4391F",
        offset: 0.0011619
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC391F",
        offset: 0.2918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#97391F",
        offset: 0.7366
      }),
      _react2.default.createElement("stop", {
        stopColor: "#87391F",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 61.01,
      y: 56.92,
      width: 38.99,
      height: 14.49,
      fill: "url(#b)"
    }),
    _react2.default.createElement("rect", {
      x: 103,
      y: 56.92,
      width: 21,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement("rect", {
      x: 41.28,
      y: 38.48,
      width: 38.72,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement("rect", {
      x: 83,
      y: 38.48,
      width: 41,
      height: 14.49,
      fill: "#D56437"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 39.826,
        x2: 39.826,
        y1: 20,
        y2: 39.79,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D56437",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D26035",
        offset: 0.3198
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C7552F",
        offset: 0.6082
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B64325",
        offset: 0.8837
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC391F",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 20.82,
      y: 21.37,
      width: 38.01,
      height: 14.49,
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 61.83,
      y: 21.37,
      width: 38.01,
      height: 14.49,
      fill: "#AC391F"
    }),
    _react2.default.createElement("rect", {
      x: 102.84,
      y: 21.37,
      width: 21.16,
      height: 14.49,
      fill: "#D56437"
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

exports.default = Brick;
