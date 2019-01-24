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

function Gem(props) {
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
      "symbol",
      {
        viewBox: "-64.5 -64.5 129 129"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "none",
          stroke: "#4285F4",
          strokeMiterlimit: 10
        },
        _react2.default.createElement("rect", {
          x: -64,
          y: -64,
          width: 128,
          height: 128
        }),
        _react2.default.createElement("path", {
          d:
            "M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z"
        }),
        _react2.default.createElement("path", {
          d:
            "m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z"
        }),
        _react2.default.createElement("path", {
          d:
            "M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z"
        }),
        _react2.default.createElement("line", {
          x1: -0.01,
          x2: -0.01,
          y1: 51,
          y2: -51
        }),
        _react2.default.createElement("line", {
          x1: -16,
          x2: -16,
          y1: 48.95,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 15.99,
          x2: 15.99,
          y1: 48.91,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 53,
          x2: -53,
          y1: 0.08,
          y2: 0.08
        })
      )
    ),
    _react2.default.createElement("path", {
      d:
        "M63.85,123.84l60.1-87.8l0.05-0.02v-0.03L96.04,4H32.01L4,35.93v0.03l0.03,0.07l59.42,87.45 l0.32,0.44l0.07-0.09L63.62,123h0L63.85,123.84z",
      fill: "#81D4FA"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 4.1114,
        x2: 123.89,
        y1: 64,
        y2: 64,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.00075733
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.79 123.93 4.11 36.03 32.01 4.07 96.04 4.07 123.89 36.03",
      fill: "url(#h)"
    }),
    _react2.default.createElement("polygon", {
      points: "64 4 63.95 4.07 64.05 4.07",
      fill: "none"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 63.599,
        x2: 63.599,
        y1: 123.89,
        y2: 36.003,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7DD3FA",
        offset: 0.2208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#72CFF9",
        offset: 0.4315
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5EC8F8",
        offset: 0.638
      }),
      _react2.default.createElement("stop", {
        stopColor: "#44BFF7",
        offset: 0.8408
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.78 123.89 87.55 36 39.65 36.05",
      fill: "url(#g)"
    }),
    _react2.default.createElement("polygon", {
      points: "87.55 36 87.94 36 87.66 35.62",
      fill: "#81D4FA"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 93.897,
        x2: 93.897,
        y1: 123.91,
        y2: 36,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0398E2",
        offset: 0.3689
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0390D9",
        offset: 0.6377
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0282C9",
        offset: 0.874
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0277BD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "124 36.02 87.58 36 63.79 123.91 124 36.03",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 33.944,
        x2: 33.944,
        y1: 123.91,
        y2: 35.968,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#25B3F4",
        offset: 0.3305
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1AABEF",
        offset: 0.6457
      }),
      _react2.default.createElement("stop", {
        stopColor: "#079EE7",
        offset: 0.9539
      }),
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "39.86 36.59 39 37.75 39.86 36.59 39.69 35.98 4.17 35.97 4.11 36.03 63.78 123.91",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 29.51,
        x2: 21.783,
        y1: 5.4567,
        y2: 36.366,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0.0052615
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "40 36 32 4.1 3.74 36.05",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 105.87,
        x2: 105.87,
        y1: 7.0598,
        y2: 37.027,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.0090681
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "87.74 36 95.74 4.1 124 36.05",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 63.644,
        x2: 63.644,
        y1: 6.7379,
        y2: 35.715,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E1F5FE",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D3F0FD",
        offset: 0.275
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "39.74 36 63.74 4.04 87.55 36",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 47.868,
        x2: 47.868,
        y1: 4.4841,
        y2: 37.34,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.0090681
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "64 4.04 40 36.05 31.74 4",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 63.736,
        x2: 96,
        y1: 20.023,
        y2: 20.023,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 0.0115
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "63.74 4.04 87.74 36.05 96 4",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M94.67,7l25.53,29.2l-56.42,82.41L7.76,36.19L33.37,7H94.67 M96.04,4H32.01L4,35.93v0.03l0.03,0.07 l59.74,87.9l60.18-87.9l0.05-0.02v-0.03L96.04,4L96.04,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Gem;
