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

function VerticalTrafficLight(props) {
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
        y1: 5.3946,
        y2: 121.39,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.3086
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.5332
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3D3D3D",
        offset: 0.7312
      }),
      _react2.default.createElement("stop", {
        stopColor: "#535353",
        offset: 0.9127
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.44 124h-24.88c-5.5 0-10-4.5-10-10v-100c0-5.5 4.5-10 10-10h24.88c5.5 0 10 4.5 10 10v100c0 5.5-4.5 10-10 10z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 60.105,
        cy: 61.054,
        r: 13.076,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0.0014825
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD743",
        offset: 0.3529
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCC633",
        offset: 0.7247
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 63.84,
      r: 13.08,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 59.966,
        cy: 96.247,
        r: 13.076,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81C784",
        offset: 0.0019061
      }),
      _react2.default.createElement("stop", {
        stopColor: "#77C07A",
        offset: 0.1121
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5AAF5E",
        offset: 0.4646
      }),
      _react2.default.createElement("stop", {
        stopColor: "#49A44D",
        offset: 0.7726
      }),
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 99.45,
      r: 13.08,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m76.44 7.11c3.8 0 6.89 3.09 6.89 6.89v100c0 3.8-3.09 6.89-6.89 6.89h-24.88c-3.8 0-6.89-3.09-6.89-6.89v-100c0-3.8 3.09-6.89 6.89-6.89h24.88m0-3.11h-24.88c-5.5 0-10 4.5-10 10v100c0 5.5 4.5 10 10 10h24.88c5.5 0 10-4.5 10-10v-100c0-5.5-4.5-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 59.92,
        cy: 24.794,
        r: 13.076,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E57373",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E56969",
        offset: 0.1104
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E54F4C",
        offset: 0.4636
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53F3B",
        offset: 0.7721
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 28.23,
      r: 13.08,
      fill: "url(#a)"
    })
  );
}

exports.default = VerticalTrafficLight;
