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

function Cheese(props) {
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
        id: "i",
        cx: 52.44,
        cy: 100.64,
        r: 12.849,
        gradientTransform: "matrix(1 0 0 -1 0 130)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d: "m47.73 29.72 0.02 9.37c5.59 0.15 6.46-9.3-0.02-9.37z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 64,
        x2: 64,
        y1: 78.096,
        y2: 21.966,
        gradientTransform: "matrix(1 0 0 -1 0 130)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F7BC00",
        offset: 0.0197
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD73E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124 35.87s-0.19 35.19 0 49.06c0.05 4.06-2.3 7.8-6.51 8.68l-113.49 22.92v-52.56c0-0.16 120-28.1 120-28.1z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d:
        "M124,35.9c0,0-14.19-20.98-40.22-24.39C77.17,10.64,53.83,26.09,47.8,29.7c0,0,9.01,3.69,0.54,7.84 c-5.04,2.47-7.3-1.89-7.3-1.89L4.02,62.21l0,1.76C25.05,59.1,124,35.9,124,35.9z",
      fill: "#FFE959"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m83.2 14.72c0.09 0 0.14 0.01 0.16 0.01 21.69 2.85 34.61 18.5 37.39 22.22-0.03 6.07-0.17 35.53 0.01 48.03 0.03 2.14-0.98 4.85-3.91 5.46l-109.61 22.12v-48.22c0.01-0.12 0.02-0.25 0.02-0.37v-0.09l33.36-23.95c1.22 0.89 2.82 1.59 4.78 1.59 1.16 0 2.36-0.24 3.55-0.73 1.23-0.49 2.04-1.69 2.03-3.02l-0.01-6.22c0.69-0.43 1.48-0.92 2.38-1.48 6.74-4.2 24.63-15.36 29.85-15.35m0-3.25c-7.29 0-29.54 14.72-35.41 18.22 0 0 0.03 0.01 0.09 0.04-0.06 0-0.1-0.02-0.16-0.02l0.02 8.06c-0.87 0.35-1.65 0.49-2.35 0.49-2.99 0-4.36-2.63-4.36-2.63l-37.01 26.58v1.75l-0.02 0.01v52.55l113.49-22.92c4.2-0.88 6.56-4.62 6.51-8.68-0.19-13.72 0-48.3 0-49.02v-0.03s-0.02 0-0.02 0c-0.42-0.61-14.56-21-40.2-24.36-0.18-0.03-0.37-0.04-0.58-0.04zm40.8 24.4z",
        fill: "#606060"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "e",
        cx: 113.64,
        cy: 83.019,
        r: 14.631,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.03 68.6c4.65-0.42 8.42 2.85 8.42 7.32 0 4.46-3.77 8.41-8.42 8.83s-8.41-2.85-8.41-7.32c0.01-4.46 3.77-8.41 8.41-8.83z",
      enableBackground: "new",
      fill: "url(#e)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 89.314,
        cy: 45.694,
        r: 11.845,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DB7E13",
        offset: 0.3288
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D37911",
        offset: 0.5269
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C5720D",
        offset: 0.6903
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B06708",
        offset: 0.8348
      }),
      _react2.default.createElement("stop", {
        stopColor: "#975901",
        offset: 0.9657
      }),
      _react2.default.createElement("stop", {
        stopColor: "#915600",
        offset: 0.9891
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.31 41.64s-3.41-6.99-13.05-4.56-8.83 9.54-8.83 9.54 3.51 7.75 12.97 5.23c8.29-2.97 8.91-10.21 8.91-10.21z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 32.778,
        cy: 58.198,
        r: 7.6828,
        gradientTransform: "matrix(.8944 .0132 -.0148 .9999 3.9954 -.463)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D13",
        offset: 0.2654
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CF770F",
        offset: 0.5099
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BD6D09",
        offset: 0.7461
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A26000",
        offset: 0.976
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A15F00",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m38.38 55.9s-1.94-4.64-7.65-3.12c-5.7 1.52-5.3 6.21-5.3 6.21s2.55 4.35 7.46 3.09 5.49-6.18 5.49-6.18z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "d",
        cx: 229.26,
        cy: 353.29,
        r: 8.5432,
        gradientTransform: "matrix(.723 .6909 .5657 -.592 -287.64 68.918)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D99914",
        offset: 0.0875
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D59612",
        offset: 0.4098
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C98D0D",
        offset: 0.735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA8207",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.21 19.22c3.03-0.27 5.47 1.24 5.47 3.37 0 2.14-2.44 4.1-5.47 4.37s-5.48-1.24-5.48-3.38 2.44-4.09 5.48-4.36z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 77.251,
        cy: 83.38,
        r: 26.321,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m66.86 60.84c7.92-0.71 14.33 4.87 14.33 12.46 0 7.6-6.42 14.33-14.33 15.06-7.92 0.71-14.33-4.86-14.33-12.46s6.42-14.35 14.33-15.06z",
      enableBackground: "new",
      fill: "url(#c)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 44.104,
        cy: 97.791,
        r: 12.936,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.49 84.59c4.01-0.36 7.26 2.46 7.26 6.31s-3.25 7.26-7.26 7.62-7.26-2.46-7.26-6.31 3.25-7.26 7.26-7.62z",
      enableBackground: "new",
      fill: "url(#b)",
      opacity: 0.9
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 20.37,
        cy: 80.858,
        r: 4.5957,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DE7F14",
        offset: 0.0813
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DA7D12",
        offset: 0.3389
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CE760D",
        offset: 0.5993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BA6C05",
        offset: 0.8602
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AD6500",
        offset: 0.987
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m18.12 74c2.14-0.19 3.89 1.32 3.89 3.38s-1.74 3.89-3.89 4.09c-2.15 0.19-3.89-1.32-3.89-3.38 0-2.05 1.74-3.89 3.89-4.09z",
      enableBackground: "new",
      fill: "url(#a)",
      opacity: 0.9
    })
  );
}

exports.default = Cheese;
