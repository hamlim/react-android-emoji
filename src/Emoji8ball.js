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

function Emoji8ball(props) {
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
        cx: 63.333,
        cy: 22,
        r: 72.007,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616262",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M63.88,4C30.76,4.06,3.94,30.98,4,64.12C4.07,97.25,30.99,124.06,64.13,124 c33.13-0.07,59.94-26.98,59.87-60.11C123.95,30.75,97.03,3.93,63.88,4z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "b",
        cx: 64,
        cy: 32.393,
        r: 59.474,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.4945
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9973
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92.93 63.95c0.03 15.97-12.9 28.95-28.87 28.98-15.98 0.03-28.96-12.9-28.99-28.87-0.03-15.98 12.9-28.96 28.87-28.98 15.98-0.04 28.97 12.89 28.99 28.87z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64,
        cy: 41.836,
        r: 35.216,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616262",
        offset: 0.2584
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.32 67.39c-1.18-1.71-2.79-3.05-4.81-4.03 1.78-0.94 3.17-2.19 4.18-3.75 1.01-1.57 1.52-3.36 1.52-5.39 0-3.59-1.19-6.43-3.57-8.52s-5.59-3.14-9.64-3.14c-4.07 0-7.29 1.06-9.65 3.17-2.37 2.11-3.55 4.94-3.55 8.49 0 2.02 0.5 3.82 1.5 5.39s2.39 2.82 4.17 3.75c-2.01 0.96-3.6 2.29-4.78 4.01s-1.78 3.73-1.78 6.04c0 3.69 1.27 6.61 3.81 8.77s5.98 3.24 10.31 3.24c4.34 0 7.76-1.07 10.29-3.22 2.52-2.15 3.78-5.07 3.78-8.78-0.01-2.3-0.6-4.32-1.78-6.03zm-15.93-16.71c0.86-0.95 2.06-1.43 3.61-1.43 1.57 0 2.78 0.49 3.64 1.48 0.86 0.98 1.29 2.29 1.29 3.91 0 1.66-0.42 3-1.27 4.01s-2.06 1.52-3.62 1.52c-1.57 0-2.78-0.51-3.64-1.52s-1.29-2.35-1.29-4.01c-0.01-1.69 0.42-3.01 1.28-3.96zm7.86 26.5c-1.02 1.05-2.43 1.58-4.23 1.58-1.83 0-3.27-0.54-4.3-1.63s-1.55-2.52-1.55-4.3c0-1.83 0.53-3.29 1.58-4.37s2.45-1.62 4.21-1.62c1.78 0 3.19 0.54 4.24 1.63s1.58 2.54 1.58 4.35c0.01 1.86-0.5 3.31-1.53 4.36z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.01 7c31.38 0 56.95 25.52 56.99 56.89 0.06 31.42-25.45 57.04-56.88 57.11h-0.1c-31.38 0-56.96-25.52-57.02-56.89-0.03-15.23 5.88-29.55 16.62-40.34 10.75-10.79 25.05-16.74 40.27-16.77h0.12m0-3h-0.13c-33.12 0.06-59.94 26.98-59.88 60.12 0.07 33.09 26.93 59.88 60.02 59.88h0.11c33.13-0.07 59.94-26.98 59.87-60.11-0.05-33.1-26.91-59.89-59.99-59.89z",
        fill: "#eee"
      })
    )
  );
}

exports.default = Emoji8ball;
