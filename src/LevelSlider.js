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

function LevelSlider(props) {
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
        id: "b",
        cx: 62.75,
        cy: 4.25,
        r: 119.82,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#CFD8DC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C6D1D6",
        offset: 0.1946
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AFBDC4",
        offset: 0.5083
      }),
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 0.8259
      }),
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m80 124h-32c-4.4 0-8-3.6-8-8v-104c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v104c0 4.4-3.6 8-8 8z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m80 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-32c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h32m0-3h-32c-4.4 0-8 3.6-8 8v104c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-104c0-4.4-3.6-8-8-8z",
        fill: "#BDBDBD"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 23,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 35,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 47,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 59,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 71,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 83,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 95,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 47.94,
        y: 107,
        width: 32,
        height: 1,
        fill: "#90A4AE"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m64 117.5c-3.03 0-5.5-2.47-5.5-5.5v-96c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5v96c0 3.03-2.47 5.5-5.5 5.5z",
      fill: "#607D8B"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 12c2.2 0 4 1.8 4 4v96c0 2.2-1.8 4-4 4s-4-1.8-4-4v-96c0-2.2 1.8-4 4-4m0-3c-3.86 0-7 3.14-7 7v96c0 3.86 3.14 7 7 7s7-3.14 7-7v-96c0-3.86-3.14-7-7-7z",
      fill: "#78909C"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 14c1.1 0 2 0.9 2 2v96c0 1.1-0.9 2-2 2s-2-0.9-2-2v-96c0-1.1 0.9-2 2-2m0-2c-2.2 0-4 1.8-4 4v96c0 2.2 1.8 4 4 4s4-1.8 4-4v-96c0-2.2-1.8-4-4-4z",
        fill: "#BDBDBD"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.833,
        cy: 80.417,
        r: 14.305,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C4FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3DC1FE",
        offset: 0.2777
      }),
      _react2.default.createElement("stop", {
        stopColor: "#32B9FA",
        offset: 0.5131
      }),
      _react2.default.createElement("stop", {
        stopColor: "#21ABF5",
        offset: 0.733
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0898ED",
        offset: 0.9423
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.55 89.75h-19.1c-1.35 0-2.45-1.1-2.45-2.45v-7.1c0-1.35 1.1-2.45 2.45-2.45h19.1c1.35 0 2.45 1.1 2.45 2.45v7.1c0 1.35-1.1 2.45-2.45 2.45z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73 80.75v6h-18v-6h18m0.55-3h-19.1c-1.35 0-2.45 1.1-2.45 2.45v7.1c0 1.35 1.1 2.45 2.45 2.45h19.1c1.35 0 2.45-1.1 2.45-2.45v-7.1c0-1.35-1.1-2.45-2.45-2.45z",
        fill: "#424242"
      })
    )
  );
}

exports.default = LevelSlider;
