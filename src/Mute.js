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

function Mute(props) {
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
        y1: 8.25,
        y2: 120.13,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#515151",
        offset: 0.3054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#292929",
        offset: 0.8963
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 56,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 17c25.92 0 47 21.08 47 47s-21.08 47-47 47-47-21.08-47-47 21.08-47 47-47m0-3c-27.61 0-50 22.39-50 50s22.39 50 50 50 50-22.39 50-50-22.39-50-50-50z",
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
          "m75.65 22.5c2.17 0 4.2 1.44 4.2 3.82v29.42c0.19-0.03 0.39-0.06 0.59-0.06 1.96 0 3.56 1.6 3.56 3.56v9.51c0 1.96-1.6 3.56-3.56 3.56-0.2 0-0.4-0.03-0.59-0.06v29.42c0 2.39-2.04 3.83-4.21 3.83-1.26 0-2.56-0.49-3.53-1.55-13.63-15.01-22.7-20.55-22.7-20.55h-11.06c-1.53 0-2.77-1.24-2.77-2.77v-33.26c0-1.53 1.24-2.77 2.77-2.77h11.07s9-5.48 22.69-20.54c0.97-1.07 2.28-1.56 3.54-1.56m0-3v3-3c-2.19 0-4.29 0.93-5.76 2.54-11.16 12.27-19.09 18.02-21.37 19.56h-10.17c-3.18 0-5.77 2.59-5.77 5.77v33.25c0 3.18 2.59 5.77 5.77 5.77h10.17c2.29 1.56 10.32 7.4 21.37 19.57 1.46 1.61 3.56 2.54 5.75 2.54 4.04 0 7.21-3 7.21-6.83v-26.82c2.43-0.96 4.15-3.33 4.15-6.1v-9.51c0-2.77-1.72-5.14-4.15-6.1v-26.82c0-3.82-3.16-6.82-7.2-6.82z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 80.657,
        cy: 57.364,
        r: 14.428,
        gradientTransform: "matrix(1 0 0 1.0016 0 -.1007)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5CB0F4",
        offset: 0.1808
      }),
      _react2.default.createElement("stop", {
        stopColor: "#47A2EF",
        offset: 0.4567
      }),
      _react2.default.createElement("stop", {
        stopColor: "#258CE7",
        offset: 0.7917
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.8495
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80.44 72.31c1.96 0 3.56-1.6 3.56-3.56v-9.51c0-1.96-1.6-3.56-3.56-3.56s-3.56 1.6-3.56 3.56v9.51c0.01 1.96 1.61 3.56 3.56 3.56z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m80.44 57.68c0.86 0 1.56 0.7 1.56 1.56v9.51c0 0.86-0.7 1.56-1.56 1.56s-1.56-0.7-1.56-1.56v-9.51c0.01-0.86 0.7-1.56 1.56-1.56m0-2c-1.96 0-3.56 1.6-3.56 3.56v9.51c0 1.96 1.6 3.56 3.56 3.56s3.56-1.6 3.56-3.56v-9.51c0-1.95-1.6-3.56-3.56-3.56z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 46.074,
        cy: 45.836,
        r: 44.472,
        gradientTransform: "matrix(1 0 0 1.0016 0 -.1007)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5FB2F5",
        offset: 0.1869
      }),
      _react2.default.createElement("stop", {
        stopColor: "#51A9F1",
        offset: 0.4057
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3A9AEC",
        offset: 0.6394
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 0.8495
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1E88E5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M57.72,83.39H38.35c-1.53,0-2.77-1.24-2.77-2.77V47.37c0-1.53,1.24-2.77,2.77-2.77h19.37 V83.39z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("rect", {
      x: 41.12,
      y: 44.6,
      width: 2.77,
      height: 38.79,
      fill: "#1E88E5"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 72.933,
        cy: 25.72,
        r: 72.661,
        gradientTransform: "matrix(1 0 0 1.0016 0 -.1007)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BBDEFB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3DAFB",
        offset: 0.1183
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9ED0FA",
        offset: 0.2989
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7BC0F8",
        offset: 0.5193
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4CAAF5",
        offset: 0.769
      }),
      _react2.default.createElement("stop", {
        stopColor: "#42A5F5",
        offset: 0.8153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2196F3",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72.11 24.06c-13.69 15.06-22.69 20.54-22.69 20.54v38.79s9.07 5.54 22.7 20.55c2.64 2.91 7.74 1.5 7.74-2.28v-75.35c-0.01-3.77-5.11-5.16-7.75-2.25z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m75.65 24.5c0.76 0 2.2 0.38 2.2 1.82v75.35c0 1.34-1.32 1.83-2.21 1.83-0.46 0-1.34-0.12-2.05-0.9-13.66-15.05-22.75-20.68-23.13-20.91l-0.48-0.29h-11.63c-0.42 0-0.77-0.35-0.77-0.77v-33.26c0-0.43 0.34-0.77 0.77-0.77h11.63l0.48-0.29c0.38-0.23 9.41-5.81 23.13-20.9 0.71-0.79 1.6-0.91 2.06-0.91m0-2c-1.26 0-2.57 0.49-3.54 1.56-13.69 15.06-22.69 20.54-22.69 20.54h-11.07c-1.53 0-2.77 1.24-2.77 2.77v33.25c0 1.53 1.24 2.77 2.77 2.77h11.07s9.07 5.54 22.7 20.55c0.97 1.07 2.27 1.55 3.53 1.55 2.17 0 4.21-1.44 4.21-3.83v-75.35c-0.01-2.37-2.04-3.81-4.21-3.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4,
        y2: 124.13,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F33B3B",
        offset: 0.324
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,4C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4z M114,64 c0,11.99-4.24,23-11.3,31.62L32.38,25.3C41,18.24,52.01,14,64,14C91.57,14,114,36.43,114,64z M14,64c0-11.99,4.24-23,11.3-31.62 l70.32,70.32C87,109.76,75.99,114,64,114C36.43,114,14,91.57,14,64z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Mute;
