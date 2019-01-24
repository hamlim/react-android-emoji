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

function StudioMicrophone(props) {
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
        id: "f",
        cx: 64,
        cy: 7.6667,
        r: 63.24,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#999",
        offset: 0.2253
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C8C8C",
        offset: 0.4734
      }),
      _react2.default.createElement("stop", {
        stopColor: "#767676",
        offset: 0.7315
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.7448
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6B6B6B",
        offset: 0.8952
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M92,25.78C92,13.75,79.46,4,64,4s-28,9.75-28,21.78v43.56h0.03c-0.02,0.3-0.03,0.59-0.03,0.89 C36,82.25,48.54,92,64,92s28-9.75,28-21.78c0-0.3-0.01-0.59-0.03-0.89H92V25.78z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.76 108h-25.52c-1.79 0-3.24-1.45-3.24-3.24v-7.52c0-1.79 1.45-3.24 3.24-3.24h25.52c1.79 0 3.24 1.45 3.24 3.24v7.52c0 1.79-1.45 3.24-3.24 3.24z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 63.667,
        cy: 86.833,
        r: 25.554,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A8B7BF",
        offset: 0.1888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#91A4AE",
        offset: 0.4874
      }),
      _react2.default.createElement("stop", {
        stopColor: "#78909C",
        offset: 0.7436
      }),
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m72 112h-16c-2.21 0-4-1.79-4-4v-20c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v20c0 2.21-1.79 4-4 4z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m72 87c0.55 0 1 0.45 1 1v20c0 0.55-0.45 1-1 1h-16c-0.55 0-1-0.45-1-1v-20c0-0.55 0.45-1 1-1h16m0-3h-16c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-20c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 64,
        cy: 123.83,
        r: 32.527,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8BA0AB",
        offset: 0.2042
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7E95A1",
        offset: 0.4371
      }),
      _react2.default.createElement("stop", {
        stopColor: "#678290",
        offset: 0.6833
      }),
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 0.7436
      }),
      _react2.default.createElement("stop", {
        stopColor: "#546E7A",
        offset: 0.9931
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m93.03 118-23.03-2.25v-14.53c0-0.68-0.55-1.22-1.22-1.22h-9.55c-0.68 0-1.22 0.55-1.22 1.22v14.53l-23.04 2.25c-2.27 0.28-2.97 3.71-2.97 6h64c0-2.29-0.7-5.72-2.97-6z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m67 103v15.47l2.71 0.26 22.68 2.22c0.01 0.02 0.02 0.03 0.03 0.05h-56.84c0.01-0.02 0.02-0.03 0.03-0.05l22.68-2.22 2.71-0.26v-15.47h6m1.78-3h-9.55c-0.68 0-1.22 0.55-1.22 1.22v14.53l-23.04 2.25c-2.27 0.28-2.97 3.71-2.97 6h64c0-2.28-0.7-5.72-2.97-6l-23.03-2.25v-14.53c0-0.67-0.55-1.22-1.22-1.22z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "M92,25.78C92,13.75,79.46,4,64,4s-28,9.75-28,21.78v43.56h0.03c-0.02,0.3-0.03,0.59-0.03,0.89 C36,82.25,48.54,92,64,92s28-9.75,28-21.78c0-0.3-0.01-0.59-0.03-0.89H92V25.78z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)",
        fill: "#9E9E9E"
      },
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 12.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 20.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 28.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 36.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 44.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 52.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 60.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 68.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 36,
        cy: 76.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 16.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 24.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 32.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 40.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 48.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 56.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 64.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 72.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 44,
        cy: 80.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 12.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 20.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 28.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 36.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 44.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 52.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 60.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 68.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 52,
        cy: 76.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 16.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 24.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 32.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 40.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 48.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 56.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 64.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 72.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 60,
        cy: 80.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 12.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 20.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 28.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 36.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 44.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 52.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 60.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 68.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 68,
        cy: 76.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 16.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 24.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 32.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 40.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 48.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 56.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 64.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 72.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 76,
        cy: 80.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 12.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 20.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 28.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 36.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 44.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 52.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 60.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 68.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 84,
        cy: 76.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 16.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 24.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 32.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 40.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 48.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 56.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 64.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 72.16,
        r: 2,
        opacity: 0.2
      }),
      _react2.default.createElement("circle", {
        cx: 92,
        cy: 80.16,
        r: 2,
        opacity: 0.2
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64,
        cy: 61.167,
        r: 31.894,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A8B7BF",
        offset: 0.1888
      }),
      _react2.default.createElement("stop", {
        stopColor: "#91A4AE",
        offset: 0.4874
      }),
      _react2.default.createElement("stop", {
        stopColor: "#78909C",
        offset: 0.7436
      }),
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36 69.33v0.89c0 12.03 12.54 21.78 28 21.78s28-9.75 28-21.78v-0.89h-56z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 36,
      y: 69,
      width: 56,
      height: 2,
      fill: "#CFD8DC"
    }),
    _react2.default.createElement("path", {
      d:
        "m39.02 69.49c-0.01 0.24-0.02 0.49-0.02 0.73 0 10.36 11.21 18.78 25 18.78s25-8.42 25-18.78c0-0.25-0.01-0.49-0.02-0.73v-0.35h-49.96v0.35z",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d:
        "M64,7c-13.79,0-25,8.42-25,18.78l0.02,43.36h49.95L89,25.78C89,15.42,77.79,7,64,7z",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d:
        "M39,25.78C39,15.42,50.21,7,64,7s25,8.42,25,18.78l-0.02,43.36H92V25.78 C92,13.75,79.46,4,64,4s-28,9.75-28,21.78v43.36h3.02L39,25.78z",
      fill: "#eee",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "M92,69.14h-3.02l0,0.35c0.01,0.24,0.02,0.49,0.02,0.73C89,80.58,77.79,89,64,89 s-25-8.42-25-18.78c0-0.25,0.01-0.49,0.02-0.73l0-0.35H36v0.19h0.03c-0.02,0.3-0.03,0.59-0.03,0.89C36,82.25,48.54,92,64,92 s28-9.75,28-21.78c0-0.3-0.01-0.59-0.03-0.89H92V69.14z",
      fill: "#424242",
      opacity: 0.2
    })
  );
}

exports.default = StudioMicrophone;
