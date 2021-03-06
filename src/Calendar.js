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

function Calendar(props) {
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
        "m110.85 124.18h-93.7c-5.52 0-10-4.48-10-10v-79.36c0-5.76 4.67-10.43 10.43-10.43h92.84c5.76 0 10.43 4.67 10.43 10.43v79.36c0 5.52-4.47 10-10 10z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("path", {
      d:
        "m111.14 118.38h-94.28c-5.37 0-9.72-4.35-9.72-9.72v3.4c0 5.37 4.35 9.72 9.72 9.72h94.27c5.37 0 9.72-4.35 9.72-9.72v-3.4c0 5.37-4.35 9.72-9.71 9.72z",
      fill: "#949494"
    }),
    _react2.default.createElement("path", {
      d:
        "m111.14 112.06h-94.28c-5.37 0-9.72-4.35-9.72-9.72v3.4c0 5.37 4.35 9.72 9.72 9.72h94.27c5.37 0 9.72-4.35 9.72-9.72v-3.4c0 5.37-4.35 9.72-9.71 9.72z",
      fill: "#949494"
    }),
    _react2.default.createElement("path", {
      d:
        "m110.85 109.21h-93.7c-5.52 0-10-4.48-10-10v-70.1c0-5.76 4.67-10.43 10.43-10.43h92.84c5.76 0 10.43 4.67 10.43 10.43v70.1c0 5.52-4.47 10-10 10z",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64.041,
        x2: 64.041,
        y1: 49.08,
        y2: 108.93,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.91 108.74h-81.74c-7.58 0-13 0.26-13-11.32v-64.94c0-7.18 5.82-13 13-13h81.74c7.18 0 13 5.82 13 13v63.26c0 12.34-5.82 13-13 13z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "M120.85,48.41H7.15V13.68c0-4.42,3.58-8,8-8h97.71c4.42,0,8,3.58,8,8V48.41z",
      fill: "#1E88E5"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 98.13,
        x2: 108.67,
        y1: 92.026,
        y2: 104.97,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C0C0C1",
        offset: 0.1825
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9A9AA",
        offset: 0.4747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#848384",
        offset: 0.8383
      }),
      _react2.default.createElement("stop", {
        stopColor: "#717071",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113.1 103.24c7.95-8.97 7.75-14.1 7.75-14.1s-2.3 3.1-9.51 3.8c-4.48 0.44-12.4-2.82-12.4-2.82s0.98 4.81-1.41 11.96c-1.94 5.81-8.09 10.03-8.09 10.03s14.77 1.16 23.66-8.87z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 26.2,
      cy: 14.46,
      r: 6.8,
      fill: "#01579B"
    }),
    _react2.default.createElement("circle", {
      cx: 101.52,
      cy: 14.46,
      r: 6.8,
      fill: "#01579B"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#BDBDBD"
      },
      _react2.default.createElement("path", {
        d:
          "M19.74,3.83v8.03c0,3.65,2.96,6.6,6.6,6.6s6.6-2.96,6.6-6.6V3.83H19.74z"
      }),
      _react2.default.createElement("path", {
        d:
          "M95.06,3.83v8.03c0,3.65,2.96,6.6,6.6,6.6s6.6-2.96,6.6-6.6V3.83H95.06z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.49 6.77c0.45 1.09 1.52 1.85 2.77 1.85h4.14c3 0 5.45 2.44 5.45 5.45v99.49c0 4.17-3.39 7.56-7.56 7.56h-92.59c-4.17 0-7.56-3.39-7.56-7.56v-99.49c0-3 2.44-5.45 5.45-5.45h4.15c1.25 0 2.32-0.77 2.77-1.85h7.66c0.45 1.09 1.52 1.85 2.77 1.85h62.11c1.25 0 2.32-0.77 2.77-1.85h7.67m2.77-3h-13.2v1.85h-62.12v-1.85h-13.2v1.85h-4.15c-4.66 0-8.45 3.78-8.45 8.45v99.49c0 5.83 4.73 10.56 10.56 10.56h92.59c5.83 0 10.56-4.73 10.56-10.56v-99.49c0-4.66-3.78-8.45-8.45-8.45h-4.14v-1.85z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("path", {
        d:
          "m47.3 17h4.07v13.66c0 1.26-0.28 2.37-0.83 3.33s-1.34 1.71-2.35 2.23c-1.02 0.52-2.16 0.78-3.44 0.78-2.09 0-3.71-0.53-4.88-1.59s-1.75-2.56-1.75-4.51h4.09c0 0.97 0.2 1.68 0.61 2.14s1.05 0.69 1.92 0.69c0.78 0 1.4-0.27 1.86-0.8s0.69-1.29 0.69-2.28v-13.65z"
      }),
      _react2.default.createElement("path", {
        d:
          "m63.38 35.24c-0.97 1.17-2.3 1.76-4.01 1.76-1.57 0-2.77-0.45-3.6-1.36-0.83-0.9-1.25-2.23-1.27-3.97v-9.61h3.92v9.49c0 1.53 0.7 2.29 2.09 2.29 1.33 0 2.24-0.46 2.74-1.38v-10.39h3.93v14.67h-3.69l-0.11-1.5z"
      }),
      _react2.default.createElement("path", {
        d: "M74.26,36.73h-3.93V15.91h3.93V36.73z"
      }),
      _react2.default.createElement("path", {
        d:
          "m82.96 31.19 2.71-9.12h4.2l-5.9 16.94-0.33 0.77c-0.88 1.92-2.32 2.87-4.34 2.87-0.57 0-1.15-0.09-1.73-0.26v-2.97l0.6 0.01c0.74 0 1.29-0.11 1.66-0.34s0.65-0.6 0.86-1.12l0.46-1.21-5.14-14.71h4.22l2.73 9.14z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#2F2F2F"
      },
      _react2.default.createElement("path", {
        d: "M52.21,102.13H44V70.41l-9.81,3.03v-6.63l17.15-6.14h0.88V102.13z"
      }),
      _react2.default.createElement("path", {
        d: "m93.81 65.32-16.01 36.81h-8.67l16.04-34.78h-20.59v-6.63h29.23v4.6z"
      })
    )
  );
}

exports.default = Calendar;
