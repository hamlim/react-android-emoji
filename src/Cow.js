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

function Cow(props) {
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
      "g",
      {
        stroke: "#B0B0B0",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 16.433,
          x2: 16.433,
          y1: 110.26,
          y2: -56.892,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E3E3E3",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E6E6E6",
          offset: 0.138
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F1F1F1",
          offset: 0.2561
        }),
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.3484
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m26.99 39.58s-7.94-3.87-16.46 4.64c-8.53 8.53-4.65 16.47-4.65 16.47s7.94 3.87 16.46-4.64c8.52-8.52 4.65-16.47 4.65-16.47z",
        fill: "url(#f)"
      }),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 111.57,
          x2: 111.57,
          y1: 110.26,
          y2: -56.892,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#E3E3E3",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#E6E6E6",
          offset: 0.138
        }),
        _react2.default.createElement("stop", {
          stopColor: "#F1F1F1",
          offset: 0.2561
        }),
        _react2.default.createElement("stop", {
          stopColor: "#fff",
          offset: 0.3484
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m122.12 60.69s3.87-7.94-4.64-16.46c-8.52-8.52-16.46-4.64-16.46-4.64s-3.87 7.94 4.64 16.46c8.52 8.52 16.46 4.64 16.46 4.64z",
        fill: "url(#e)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#E6B175",
        stroke: "#C28640",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 3
      },
      _react2.default.createElement("path", {
        d:
          "m35.53 16.1c-3.14-5.43-0.25-12.98-5.68-9.84s-7.3 10.09-4.16 15.52 10.09 7.3 15.52 4.16c5.43-3.13-2.54-4.4-5.68-9.84z"
      }),
      _react2.default.createElement("path", {
        d:
          "m92.47 16.1c3.14-5.43 0.25-12.98 5.68-9.84s7.3 10.09 4.16 15.52-10.09 7.3-15.52 4.16c-5.43-3.13 2.54-4.4 5.68-9.84z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 63.998,
        x2: 63.998,
        y1: 108.63,
        y2: -53.414,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D4D4D4",
        offset: 0.1318
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7D7D7",
        offset: 0.2029
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E2E2E2",
        offset: 0.2638
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3F3F3",
        offset: 0.3208
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.3484
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M24.54,98l-2.92-44.09C21.62,32.6,39.04,15,60.44,15h7.13c21.4,0,38.81,17.6,38.81,39.01 L103.46,98H24.54z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "M67.56,17c20.54,0,37.26,16.38,37.31,36.91L102.06,96H25.94l-2.82-42.09 C23.18,33.38,39.9,17,60.44,17H68 M67.56,14h-7.13c-22.17,0-40.31,17.83-40.31,40.01L23.13,99h81.73l3.01-44.99 C107.88,31.83,89.74,14,67.56,14L67.56,14z",
      fill: "#B0B0B0"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m67 14h-6.56c-22.17 0-40.31 18.33-40.31 40.51l3 45.49h81.73l2.73-45.49"
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
    _react2.default.createElement("path", {
      d:
        "M56,58.37C56,47.12,46.88,38,35.63,38h-0.26C24.12,38,15,47.12,15,58.37 v2.26C15,71.88,24.12,81,35.37,81h0.26C46.88,81,56,71.88,56,60.63V58.37z",
      clipPath: "url(#b)",
      fill: "#C4C4C4"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#404040"
      },
      _react2.default.createElement("ellipse", {
        cx: 36.77,
        cy: 58.11,
        rx: 8.77,
        ry: 9.91
      }),
      _react2.default.createElement("ellipse", {
        cx: 91.23,
        cy: 58.11,
        rx: 8.77,
        ry: 9.91
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 63,
        x2: 63,
        y1: 138.84,
        y2: 18.645,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D69549",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7974C",
        offset: 0.1132
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DB9E57",
        offset: 0.2102
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E1A969",
        offset: 0.3009
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E6B175",
        offset: 0.3484
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m103.5 100.44c0-12.12-9.82-21.94-21.94-21.94h-37.12c-12.12 0-21.94 9.82-21.94 21.94v0.13c0 12.12 9.82 21.94 21.94 21.94h37.13c12.12 0 21.94-9.82 21.94-21.94v-0.13z",
      fill: "url(#a)",
      stroke: "#C28640",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#754C24"
      },
      _react2.default.createElement("ellipse", {
        cx: 45.28,
        cy: 99.29,
        rx: 6.79,
        ry: 8.33
      }),
      _react2.default.createElement("ellipse", {
        cx: 82.72,
        cy: 99.29,
        rx: 6.79,
        ry: 8.33
      })
    )
  );
}

exports.default = Cow;
