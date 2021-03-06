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

function Ring(props) {
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
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "h",
        x: 19.67,
        width: 91.33,
        height: 54.67
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "g"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#h"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#g)"
      },
      _react2.default.createElement("path", {
        d:
          "M64.13,69.43l32.21-47.6L96,21.82V21.8L81.57,4h-34.7L31,21.77v0.02l0.36,0.04l32.38,47.4 L64,69.47l0.08-0.03L64,69h0L64.13,69.43z",
        fill: "#81D4FA"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 31.752,
          x2: 96.669,
          y1: 36.984,
          y2: 36.984,
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
        points: "64.1 69.47 31.75 21.83 46.87 4.5 81.57 4.5 96.67 21.83",
        fill: "url(#f)"
      }),
      _react2.default.createElement("polygon", {
        points: "64.21 4.47 64.18 4.5 64.24 4.5",
        fill: "none"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 63.993,
          x2: 63.993,
          y1: 69.446,
          y2: 21.81,
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
        points: "64.09 69.45 76.98 21.81 51.01 21.83",
        fill: "url(#e)"
      }),
      _react2.default.createElement("polygon", {
        points: "76.98 21.81 77.19 21.81 77.03 21.6",
        fill: "#81D4FA"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 79.776,
          x2: 79.776,
          y1: 69.455,
          y2: 21.808,
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
        points: "96 21.82 76.62 21.81 63.55 69.46 96 21.83",
        fill: "url(#d)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 47.92,
          x2: 47.92,
          y1: 69.455,
          y2: 21.791,
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
          "51.13 22.13 50.66 22.76 51.13 22.13 51.04 21.8 31.78 21.79 31.75 21.83 64.09 69.46",
        fill: "url(#c)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 45.517,
          x2: 41.329,
          y1: 5.2546,
          y2: 22.007,
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
        points: "51.2 21.81 46.87 4.52 31.55 21.83",
        fill: "url(#b)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 86.902,
          x2: 86.902,
          y1: 6.1235,
          y2: 22.365,
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
        points: "77.07 21.81 81.41 4.52 96.73 21.83",
        fill: "url(#a)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 64.017,
          x2: 64.017,
          y1: 6.1404,
          y2: 21.846,
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
        points: "51.06 22 64.07 4.68 76.98 22",
        fill: "url(#l)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 55.467,
          x2: 55.467,
          y1: 4.7274,
          y2: 22.535,
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
        points: "64.21 4.49 51.2 21.83 46.72 4.47",
        fill: "url(#k)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "j",
          x1: 64.067,
          x2: 81.554,
          y1: 13.149,
          y2: 13.149,
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
        points: "64.07 4.49 77.07 21.83 81.55 4.47",
        fill: "url(#j)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m80.21 7.47 12.72 14.55-28.84 42.12-28.63-42.12 12.77-14.55h31.98m1.36-3h-34.7l-15.18 17.3v0.02l0.01 0.04 32.38 47.64 32.62-47.64 0.03-0.01v-0.02l-15.16-17.33z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 63.839,
        x2: 63.839,
        y1: 44.667,
        y2: 118.01,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#CFD8DC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 0.7975
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m83.12 55.51c0-0.08-0.12-0.16-0.12-0.25v-0.39c0-2.66-1.88-4.87-4.54-4.87h-28.23c-2.66 0-5.23 2.22-5.23 4.87v0.25c-11 6.42-18.3 18.39-18.3 32.1 0 20.49 16.71 37.11 37.21 37.11s37.08-16.61 37.08-37.11c-0.01-13.43-7.17-25.2-17.87-31.71zm-19.12 58.35c-14.69 0-26.61-11.64-26.61-26s11.91-26 26.61-26 26.61 11.64 26.61 26-11.92 26-26.61 26z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m78.46 53c1.01 0 1.54 0.94 1.54 1.87v0.39c0 0.56 0.15 1.1 0.44 1.59 0.25 0.49 0.63 0.92 1.12 1.22 10.28 6.26 16.42 17.16 16.42 29.15 0 18.81-15.29 34.11-34.08 34.11-18.86 0-34.21-15.3-34.21-34.11 0-12.15 6.44-23.45 16.82-29.51 0.92-0.54 1.49-1.52 1.49-2.59v-0.25c0-0.91 1.15-1.87 2.23-1.87h28.23m-14.46 63.86c16.32 0 29.61-13.01 29.61-29s-13.28-29-29.61-29c-16.32 0-29.61 13.01-29.61 29s13.29 29 29.61 29m14.46-66.86h-28.23c-2.66 0-5.23 2.22-5.23 4.87v0.25c-11 6.42-18.3 18.39-18.3 32.1 0 20.49 16.71 37.11 37.21 37.11s37.08-16.61 37.08-37.11c0-13.44-7.17-25.2-17.86-31.71 0-0.08-0.12-0.16-0.12-0.25v-0.39c-0.01-2.65-1.89-4.87-4.55-4.87zm-14.46 63.86c-14.69 0-26.61-11.64-26.61-26s11.91-26 26.61-26c14.69 0 26.61 11.64 26.61 26s-11.92 26-26.61 26z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Ring;
