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

function SleepingBed(props) {
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
        x1: 30.917,
        x2: 30.917,
        y1: 69.406,
        y2: 95.406,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#70534A",
        offset: 0.55
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5C4037",
        offset: 0.83
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3C2B24",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 30.92,
      cy: 82.41,
      r: 13,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 17.917,
        x2: 43.917,
        y1: 82.406,
        y2: 82.406,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#4A2F27",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#291B16",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m30.92 70.41c6.62 0 12 5.38 12 12s-5.38 12-12 12-12-5.38-12-12 5.38-12 12-12m0-1c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m40.79 73.84-0.95 0.38c-2.4 1.25-6.69 2.04-9.45 2.22l-1.27 0.06c0.61 4.2 0.66 8.4-0.18 12.56l-0.1 0.5-2.15 5.51s-10.1-1.58-10.1-12.33c0-8.72 4.65-14.17 13.41-14.17 8.02 0.01 10.79 5.27 10.79 5.27z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "g",
          cx: 28.843,
          cy: 81.829,
          r: 12.758,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#444140",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#232020",
          offset: 1
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m41.09 74.32s-0.73 1.45-4.35 2.31c-3.22 0.77-6.45 0.85-6.45 0.85s0.71 4.32 0.16 8.97-3.76 8.63-3.76 8.63-10.1-1.58-10.1-12.33c0-8.72 4.65-14.17 13.41-14.17 8.02 0 11.09 5.74 11.09 5.74z",
        fill: "url(#g)"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement("path", {
        d:
          "m30 69.58c5.9 0 8.87 3.28 9.84 4.63-0.47 0.39-1.45 0.99-3.33 1.44-3.08 0.73-6.22 0.82-6.25 0.82l-1.15 0.03 0.19 1.13c0.01 0.04 0.68 4.25 0.15 8.69-0.4 3.4-2.37 6.48-3.19 7.64-2.04-0.51-8.68-2.8-8.68-11.22 0.01-8.48 4.42-13.16 12.42-13.16m0-1c-8.76 0-13.41 5.45-13.41 14.17 0 10.75 10.1 12.33 10.1 12.33s3.21-3.98 3.76-8.63-0.16-8.97-0.16-8.97 3.23-0.08 6.45-0.85c3.62-0.86 4.35-2.31 4.35-2.31s-3.07-5.74-11.09-5.74z",
        fill: "#1F1D1B"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 24,
        x2: 24,
        y1: 88,
        y2: 103.99,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFEE58",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M40,103.99H8V88h26c3.31,0,6,2.69,6,6V103.99z",
      fill: "url(#f)"
    }),
    _react2.default.createElement("path", {
      d: "M124,113.64H8V100h110c3.31,0,6,2.69,6,6V113.64z",
      fill: "#FFF9C4"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m34 90c2.21 0 4 1.79 4 4v7.99h-28v-11.99h24m0-2h-26v15.99h32v-9.99c0-3.31-2.69-6-6-6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "10 123.95 4 123.95 4 111.98 16 111.98",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m118 102c2.21 0 4 1.79 4 4v5.64h-112v-9.64h108m0-2h-110v13.64h116v-7.64c0-3.31-2.69-6-6-6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points: "118 123.95 124 123.95 124 111.98 112 111.98",
      fill: "#795548"
    }),
    _react2.default.createElement("path", {
      d:
        "m12.13 115.97h-8.13v-47.92c0-2.24 1.82-4.06 4.06-4.06s4.06 1.82 4.06 4.06v47.92z",
      fill: "#795548"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 78.422,
        x2: 78.422,
        y1: 76,
        y2: 114.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0.4701
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7CB342",
        offset: 0.6909
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,114.75H32.84l0.12-12.72c0.03-2.79,0.62-5.55,1.79-8.09C37.7,87.54,44.1,76,51.93,76 h41.39C115,76,124,93.69,124,99.34S124,114.75,124,114.75z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m93.32 78c20.05 0 28.68 16.2 28.68 21.34v13.41h-87.14l0.1-10.7c0.02-2.56 0.57-5.01 1.61-7.27 6.97-15.15 13.06-16.78 15.36-16.78h41.39m0-2h-41.39c-7.83 0-14.23 11.54-17.17 17.94-1.17 2.54-1.77 5.3-1.79 8.09l-0.12 12.72h91.15v-15.41s-9-23.34-30.68-23.34z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 110.1,
      width: 120,
      height: 5.86,
      fill: "#795548"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m8 65.98c1.12 0 2 0.91 2 2.06v41.96c0 1.1 0.9 2 2 2h110v10h-2.76l-3.45-6.89c-0.34-0.68-1.03-1.11-1.79-1.11h-100c-0.76 0-1.45 0.43-1.79 1.11l-3.45 6.89h-2.76v-53.95c0-1.16 0.88-2.07 2-2.07m0-2c-2.24 0-4 1.82-4 4.06v55.96h6l4-8h100l4 8h6v-14h-112v-41.95c0-2.25-1.76-4.07-4-4.07z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SleepingBed;
