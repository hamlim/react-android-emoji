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

function LotionBottle(props) {
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
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-45.57 37.65v11.65c-1.12 0.45-1.9 1.55-1.9 2.82v2.86c0 1.52 1.11 2.8 2.61 3.01 6.31 0.9 11.07 6.39 11.07 12.76v70.96c0 5.14-4.18 9.32-9.32 9.32h-16.16c-5.14 0-9.32-4.18-9.32-9.32v-70.96c0-6.37 4.76-11.86 11.07-12.76 1.5-0.21 2.61-1.5 2.61-3.01v-2.86c0-1.28-0.79-2.37-1.9-2.82v-11.65h11.24m1.35-3.05h-13.95c-0.94 0-1.7 0.76-1.7 1.7v14.13c0 0.94 0.76 1.7 1.7 1.7h0.21v2.86c-7.73 1.11-13.68 7.74-13.68 15.77v70.96c0 6.83 5.54 12.37 12.37 12.37h16.16c6.83 0 12.37-5.54 12.37-12.37v-70.97c0-8.04-5.95-14.67-13.68-15.77v-2.86h0.21c0.94 0 1.7-0.76 1.7-1.7v-14.12c-0.02-0.94-0.78-1.7-1.71-1.7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m70.72 21.55h-13.44c-0.89 0-1.62-0.73-1.62-1.62v-14.31c0-0.89 0.73-1.62 1.62-1.62h13.43c0.89 0 1.62 0.73 1.62 1.62v14.31c0.01 0.89-0.72 1.62-1.61 1.62z",
      fill: "#3E2723"
    }),
    _react2.default.createElement("path", {
      d:
        "m72.31 8.29-16.65-0.05v0.78h3.67c0.48 1.59 2.38 2.79 4.67 2.79s4.19-1.19 4.67-2.79l3.64 0.05v-0.78z",
      fill: "#6D4C41"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 42.476,
        x2: 85.524,
        y1: 71.743,
        y2: 71.743,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E6E4D0",
        offset: 0.1152
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DEDCC9",
        offset: 0.3022
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C6B5",
        offset: 0.5926
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B5B3A4",
        offset: 0.7923
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.49 124h-34.98c-2.23 0-4.04-1.81-4.04-4.04v-83.6c0-9.32 7.55-16.87 16.87-16.87h9.31c9.32 0 16.87 7.55 16.87 16.87v83.61c0 2.22-1.8 4.03-4.03 4.03z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 42.489,
        x2: 71.931,
        y1: 74.661,
        y2: 74.661,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFFDE7",
        offset: 0.1256
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7F5E0",
        offset: 0.343
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E1DFCC",
        offset: 0.6806
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D1CFBD",
        offset: 0.8782
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.36 110.61h-25.87v-71.9h25.87c1.97 0 3.57 1.6 3.57 3.57v64.76c0 1.97-1.6 3.57-3.57 3.57z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m68.36 110.61h-25.87v-71.9h25.87c1.97 0 3.57 1.6 3.57 3.57v64.76c0 1.97-1.6 3.57-3.57 3.57z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.6
      },
      _react2.default.createElement("rect", {
        x: 36.95,
        y: 97.12,
        width: 36.21,
        height: 6.37,
        fill: "#F57F17"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.6
      },
      _react2.default.createElement("rect", {
        x: 36.95,
        y: 46.82,
        width: 37.42,
        height: 2.87,
        fill: "#F9A825"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 77.22,
        x2: 102.97,
        y1: 74.661,
        y2: 74.661,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D1CFBD",
        offset: 0.1218
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E1DFCC",
        offset: 0.3194
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7F5E0",
        offset: 0.657
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFDE7",
        offset: 0.8744
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m79.12 110.61h6.4v-71.9h-6.4c-1.05 0-1.89 0.85-1.89 1.89v68.1c-0.01 1.06 0.84 1.91 1.89 1.91z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m69.29 7.05v12.85c0 1.43 0.99 2.66 2.38 2.97 6.26 1.4 10.81 7.07 10.81 13.48v83.61c0 0.55-0.44 0.99-0.99 0.99h-34.98c-0.55 0-0.99-0.44-0.99-0.99v-83.6c0-6.42 4.54-12.09 10.81-13.48 1.39-0.31 2.38-1.55 2.38-2.97v-12.86h10.58m1.43-3.05h-13.44c-0.89 0-1.62 0.73-1.62 1.62v14.28c-7.54 1.68-13.19 8.4-13.19 16.45v83.61c0 2.23 1.81 4.04 4.04 4.04h34.97c2.23 0 4.04-1.81 4.04-4.04v-83.6c0-8.05-5.64-14.77-13.19-16.45v-14.29c0.01-0.89-0.72-1.62-1.61-1.62z",
        fill: "#424242"
      })
    )
  );
}

exports.default = LotionBottle;
