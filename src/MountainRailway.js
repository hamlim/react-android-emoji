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

function MountainRailway(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "M4.02,44l29.11-24.97C43.98,10,44.64,11,52.04,15.71l32.15,20.45l18.96-19.44 c3.62-4.56,6.19-7.44,10.88-0.88l9.92,12.28l0.04,95.88L4.02,124V44z",
      fill: "#81C784"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m109 15c0.08 0.02 0.92 0.27 2.58 2.59 0.03 0.05 0.07 0.1 0.11 0.14l9.26 11.45 0.04 91.81-113.97 0.01v-75.62l28.02-24.05c4.69-3.9 7.74-6.15 9.46-6.15 1.14 0 2.74 1.03 5.17 2.58l0.75 0.48 32.16 20.46c0.5 0.32 1.05 0.47 1.61 0.47 0.79 0 1.57-0.31 2.15-0.91l18.96-19.44c0.07-0.07 0.14-0.15 0.2-0.23 0.82-1.04 2.75-3.47 3.5-3.59m0-3c-2.01 0-3.75 2.08-5.86 4.72l-18.95 19.45-32.15-20.46c-3.38-2.16-5.35-3.53-7.53-3.53-2.59 0-5.48 1.95-11.38 6.85l-29.11 24.97v80h119.96l-0.04-95.88-9.92-12.28c-1.97-2.75-3.56-3.84-5.02-3.84z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 4.04,
      y: 101,
      width: 119.85,
      height: 23,
      fill: "#8D6E63"
    }),
    _react2.default.createElement("rect", {
      x: 4.04,
      y: 101,
      width: 119.92,
      height: 7,
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m121.89 103v19h-115.85v-19h115.85m2-2h-119.85v23h119.85v-23z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 33,
      cy: 99,
      r: 6
    }),
    _react2.default.createElement("circle", {
      cx: 50,
      cy: 99,
      r: 6
    }),
    _react2.default.createElement("circle", {
      cx: 101,
      cy: 99,
      r: 6
    }),
    _react2.default.createElement("circle", {
      cx: 118,
      cy: 99,
      r: 6
    }),
    _react2.default.createElement("path", {
      d: "M20,37.08V92c0,3.3,2.7,6,6,6h98l0-60.92H20z",
      fill: "#FFF8E1"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.04 68.25h-8.11c-2.21 0-4-1.79-4-4v-16.08c0-2.21 1.79-4 4-4h8.11c2.21 0 4 1.79 4 4v16.08c0 2.21-1.79 4-4 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m88.09 68.25h-8.11c-2.21 0-4-1.79-4-4v-16.08c0-2.21 1.79-4 4-4h8.11c2.21 0 4 1.79 4 4v16.08c0 2.21-1.79 4-4 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m112 68.25h-8.11c-2.21 0-4-1.79-4-4v-16.08c0-2.21 1.79-4 4-4h8.11c2.21 0 4 1.79 4 4v16.08c0 2.21-1.79 4-4 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d: "M20,37.08V92c0,3.3,2.7,6,6,6h98l0-60.92H20z"
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
      "linearGradient",
      {
        id: "a",
        x1: 72,
        x2: 72,
        y1: 73.25,
        y2: 100,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.0067653
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D32F2F",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 20,
      y: 74.14,
      width: 104,
      height: 31.72,
      clipPath: "url(#b)",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.04 46.17c1.1 0 2 0.9 2 2v16.08c0 1.1-0.9 2-2 2h-8.11c-1.1 0-2-0.9-2-2v-16.08c0-1.1 0.9-2 2-2h8.11m0-2h-8.11c-2.21 0-4 1.79-4 4v16.08c0 2.21 1.79 4 4 4h8.11c2.21 0 4-1.79 4-4v-16.08c0-2.21-1.79-4-4-4z",
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
          "m88.09 46.17c1.1 0 2 0.9 2 2v16.08c0 1.1-0.9 2-2 2h-8.11c-1.1 0-2-0.9-2-2v-16.08c0-1.1 0.9-2 2-2h8.11m0-2h-8.11c-2.21 0-4 1.79-4 4v16.08c0 2.21 1.79 4 4 4h8.11c2.21 0 4-1.79 4-4v-16.08c0-2.21-1.79-4-4-4z",
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
          "m112 46.17c1.1 0 2 0.9 2 2v16.08c0 1.1-0.9 2-2 2h-8.11c-1.1 0-2-0.9-2-2v-16.08c0-1.1 0.9-2 2-2h8.11m0-2h-8.11c-2.21 0-4 1.79-4 4v16.08c0 2.21 1.79 4 4 4h8.11c2.21 0 4-1.79 4-4v-16.08c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.04 69.91h-20.04v-25.91h20.04c2.21 0 4 1.79 4 4v17.91c0 2.21-1.79 4-4 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m40.04 46c1.1 0 2 0.9 2 2v17.91c0 1.1-0.9 2-2 2h-18.04v-21.91h18.04m0-2h-20.04v25.91h20.04c2.21 0 4-1.79 4-4v-17.91c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d: "m120 28h-96c-2.21 0-4 1.79-4 4v5.08h104v-5.08c0-2.21-1.79-4-4-4z",
      fill: "#37474F"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.02 31c0.29 0 0.98 0.07 0.98 0.75v63.25h-94.96c-1.59 0-3.04-1.55-3.04-3.25v-60c0-0.74 1-0.75 1.04-0.75h95.96m0.04-3h-96c-2.21 0-4.04 1.54-4.04 3.75v60c0 3.3 2.74 6.25 6.04 6.25h97.96v-66.25c0-2.21-1.75-3.75-3.96-3.75z",
        fill: "#424242"
      })
    )
  );
}

exports.default = MountainRailway;
