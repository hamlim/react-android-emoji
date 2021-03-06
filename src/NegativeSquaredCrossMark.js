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

function NegativeSquaredCrossMark(props) {
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
        id: "c",
        cx: 63.75,
        cy: 7.25,
        r: 121.98,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4F4F4F",
        offset: 0.3419
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 4h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 12.25,
        y2: 116.14,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0.9779
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m113 116h-98c-1.66 0-3-1.34-3-3v-98c0-1.66 1.34-3 3-3h98c1.66 0 3 1.34 3 3v98c0 1.66-1.34 3-3 3z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.041,
        x2: 64.041,
        y1: 15.631,
        y2: 110.01,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EE3030",
        offset: 0.4455
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.99 65.39c-0.77-0.77-0.76-2.01 0-2.77l26.03-26.05c4.58-4.59 4.58-12.03 0-16.63-4.58-4.59-12-4.59-16.57 0l-26.05 26.08c-0.77 0.76-2.01 0.76-2.77 0l-25.61-25.62c-4.59-4.57-12.04-4.57-16.64 0-4.59 4.57-4.59 11.99 0 16.56l25.63 25.64c0.77 0.77 0.76 2.01 0 2.77l-26.04 26.06c-4.58 4.59-4.58 12.03 0 16.63 4.58 4.59 12 4.59 16.57 0l26.06-26.08c0.77-0.76 2.01-0.76 2.77 0l26.08 26.01c4.59 4.57 12.04 4.57 16.64 0 4.59-4.57 4.59-11.99 0-16.56l-26.1-26.04z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m99.74 19.5c2.33 0 4.52 0.91 6.16 2.56 3.41 3.42 3.41 8.97 0 12.39l-26.02 26.05c-0.94 0.94-1.46 2.18-1.46 3.51s0.52 2.57 1.46 3.51l26.1 26.04c1.65 1.64 2.56 3.83 2.56 6.15s-0.91 4.51-2.56 6.15c-1.66 1.65-3.86 2.56-6.2 2.56s-4.55-0.91-6.2-2.55l-26.08-26.01c-0.94-0.94-2.18-1.45-3.51-1.45-1.32 0-2.57 0.51-3.51 1.45l-26.06 26.08c-1.65 1.65-3.83 2.56-6.16 2.56s-4.52-0.91-6.16-2.56c-3.41-3.42-3.41-8.97 0-12.39l26.03-26.05c0.94-0.94 1.46-2.18 1.46-3.51s-0.52-2.57-1.45-3.51l-25.64-25.64c-1.65-1.64-2.56-3.83-2.56-6.15s0.91-4.51 2.56-6.15c1.66-1.65 3.86-2.56 6.2-2.56s4.55 0.91 6.2 2.55l25.6 25.62c0.94 0.94 2.18 1.45 3.51 1.45 1.32 0 2.57-0.51 3.51-1.45l26.06-26.08c1.65-1.66 3.83-2.57 6.16-2.57m0-3c-3 0-6 1.15-8.29 3.44l-26.05 26.08c-0.38 0.38-0.88 0.57-1.39 0.57-0.5 0-1-0.19-1.39-0.57l-25.6-25.62c-2.3-2.29-5.31-3.43-8.32-3.43s-6.02 1.14-8.32 3.43c-4.59 4.57-4.59 11.99 0 16.56l25.63 25.64c0.77 0.77 0.76 2.01 0 2.77l-26.04 26.06c-4.58 4.59-4.58 12.03 0 16.63 2.29 2.3 5.29 3.44 8.29 3.44s6-1.15 8.29-3.44l26.06-26.08c0.38-0.38 0.88-0.57 1.39-0.57 0.5 0 1 0.19 1.39 0.57l26.08 26.01c2.3 2.29 5.31 3.43 8.32 3.43s6.02-1.14 8.32-3.43c4.59-4.57 4.59-11.99 0-16.56l-26.1-26.04c-0.77-0.77-0.76-2.01 0-2.77l26.03-26.05c4.58-4.59 4.58-12.03 0-16.63-2.3-2.29-5.3-3.44-8.3-3.44z",
        fill: "#424242"
      })
    )
  );
}

exports.default = NegativeSquaredCrossMark;
