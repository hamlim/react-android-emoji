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

function TrafficLight(props) {
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
        y1: 41.629,
        y2: 82.912,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0012001
      }),
      _react2.default.createElement("stop", {
        stopColor: "#535353",
        offset: 0.0883
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3D3D3D",
        offset: 0.2697
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2D2D2D",
        offset: 0.4674
      }),
      _react2.default.createElement("stop", {
        stopColor: "#242424",
        offset: 0.6918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M4,77.28V50.72c0-5.5,4.5-10,10-10h100c5.5,0,10,4.5,10,10v26.55c0,5.5-4.5,10-10,10H14 C8.5,87.28,4,82.78,4,77.28z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 55.784,
        cy: 64.947,
        r: 13.562,
        gradientTransform: "matrix(4.4896e-11 1 -1 4.4896e-11 132.32 3.9844)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 0.0139
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCCD31",
        offset: 0.6259
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FBC02D",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64.49,
      cy: 63.81,
      r: 13.56,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 55.639,
        cy: 101.45,
        r: 13.562,
        gradientTransform: "matrix(4.4896e-11 1 -1 4.4896e-11 132.32 3.9844)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81C784",
        offset: 0.0051181
      }),
      _react2.default.createElement("stop", {
        stopColor: "#72BE76",
        offset: 0.2014
      }),
      _react2.default.createElement("stop", {
        stopColor: "#50A854",
        offset: 0.7194
      }),
      _react2.default.createElement("stop", {
        stopColor: "#43A047",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 27.55,
      cy: 63.81,
      r: 13.56,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m114 43.95c3.74 0 6.78 3.04 6.78 6.78v26.55c0 3.74-3.04 6.78-6.78 6.78h-100c-3.74 0-6.78-3.04-6.78-6.78v-26.56c0-3.74 3.04-6.78 6.78-6.78h100m0-3.22h-100c-5.5 0-10 4.5-10 10v26.55c0 5.5 4.5 10 10 10h100c5.5 0 10-4.5 10-10v-26.55c0-5.5-4.5-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 55.591,
        cy: 27.34,
        r: 13.562,
        gradientTransform: "matrix(4.4896e-11 1 -1 4.4896e-11 132.32 3.9844)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E57373",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E56564",
        offset: 0.1973
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E54542",
        offset: 0.718
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 101.42,
      cy: 63.81,
      r: 13.56,
      fill: "url(#a)"
    })
  );
}

exports.default = TrafficLight;
