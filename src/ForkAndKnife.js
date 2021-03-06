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

function ForkAndKnife(props) {
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
        cx: 47.7,
        cy: 64.162,
        r: 43.596,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A8A8A8",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BFBFBF",
        offset: 0.1684
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D9D9D9",
        offset: 0.4001
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E9E9E9",
        offset: 0.6095
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.7755
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m59.21 7.72c-0.12-2.56-0.7-3.72-1.75-3.72-1.16 0-1.74 1.16-1.86 3.72l-1.39 20.45c0 1.16-0.7 1.98-1.63 1.98-0.81 0-1.51-0.81-1.51-1.98l-1.63-20.45c-0.23-2.67-0.69-3.72-1.74-3.72s-1.63 1.05-1.74 3.72l-1.63 20.45c-0.23 1.16-0.93 1.98-1.63 1.98s-1.39-0.81-1.63-1.98l-1.28-20.45c-0.23-2.56-0.69-3.72-1.85-3.72s-1.63 1.16-1.86 3.72c-0.58 10.11-1.86 20.22-1.86 36.49 0 3.72 1.16 6.74 3.37 8.49l4.19 3.37c1.05 0.81 1.74 2.21 1.63 4.53l-1.69 57.62c-0.05 3.35 2.65 6.1 5.99 6.1 3.35 0 6.05-2.77 5.99-6.12l-1.81-57.6c-0.12-2.33 0.58-3.84 1.63-4.65l4.18-3.25c2.21-1.74 3.49-4.88 3.49-8.49-0.01-16.27-1.29-26.38-1.98-36.49z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m48.29 5.71m-9.8 0.01m19.46 0.04m-20.01 4.29 1.14 18.25c0.01 0.09 0.02 0.18 0.04 0.27 0.42 2.11 1.9 3.58 3.59 3.58s3.17-1.47 3.59-3.59c0.02-0.08 0.03-0.15 0.03-0.23l1.38-17.3 1.37 17.23c0.04 2.19 1.57 3.89 3.51 3.89 2.04 0 3.59-1.67 3.63-3.9l1.2-17.66c0.12 1.58 0.26 3.18 0.39 4.84 0.65 7.78 1.38 16.6 1.38 28.79 0 2.98-1.02 5.57-2.72 6.91l-4.18 3.25c-1.68 1.31-2.53 3.56-2.4 6.29l1.81 57.57c0.02 1.09-0.39 2.11-1.15 2.89-0.76 0.77-1.77 1.2-2.84 1.2-1.08 0-2.09-0.42-2.84-1.19-0.76-0.77-1.17-1.79-1.15-2.85l1.68-57.59c0.17-3.46-1.21-5.29-2.37-6.19l-4.2-3.38c-1.68-1.33-2.61-3.79-2.61-6.92 0-11.57 0.66-20.07 1.23-27.57 0.18-2.26 0.34-4.43 0.49-6.59m18.27 18.13m1.25-24.18c-1.16 0-1.74 1.16-1.86 3.72l-1.39 20.45c0 1.16-0.7 1.98-1.63 1.98-0.81 0-1.51-0.81-1.51-1.98l-1.63-20.45c-0.23-2.67-0.69-3.72-1.74-3.72s-1.63 1.05-1.74 3.72l-1.63 20.45c-0.23 1.16-0.93 1.98-1.63 1.98s-1.39-0.81-1.63-1.98l-1.28-20.45c-0.23-2.56-0.69-3.72-1.85-3.72s-1.63 1.16-1.86 3.72c-0.58 10.11-1.86 20.22-1.86 36.49 0 3.72 1.16 6.74 3.37 8.49l4.19 3.37c1.05 0.81 1.74 2.21 1.63 4.53l-1.69 57.62c-0.05 3.35 2.65 6.1 5.99 6.1 3.35 0 6.05-2.77 5.99-6.12l-1.81-57.6c-0.12-2.33 0.58-3.84 1.63-4.65l4.18-3.25c2.21-1.74 3.49-4.88 3.49-8.49 0-16.27-1.28-26.38-1.98-36.49-0.12-2.56-0.7-3.72-1.75-3.72z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 84.419,
        cy: 64.456,
        r: 34.168,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A3A3A3",
        offset: 0.0017339
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B7B7B7",
        offset: 0.1847
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D5D5D5",
        offset: 0.5159
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E7E7E7",
        offset: 0.7993
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m92 61.45v-52.51c0-4.4-1.44-5.6-3.96-3.94-6.45 4.23-12.77 24.87-12.77 50.13 0 9.31 9.17 8.05 9.57 10.83l-2.87 52.56c-0.05 3.35 2.67 6.1 6.02 6.1s5.64-2.77 5.58-6.12l-1.57-57.05z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m89.76 6.29m-0.17 0.12c0.11 0.37 0.41 1.12 0.41 2.53v52.51 0.06l1.57 57.03c0.02 1.26-0.46 2.41-1.19 3.16-0.6 0.62-1.42 0.93-2.35 0.93-1.09 0-2.13-0.43-2.9-1.21-0.75-0.76-1.17-1.77-1.16-2.82l2.84-52.52c0.01-0.13 0-0.26-0.02-0.39-0.3-2.11-2.31-2.91-4.08-3.61-2.71-1.08-5.51-2.2-5.51-6.93 0-11.62 1.37-23.13 3.86-32.43 2.2-8.22 5.24-14.21 8.01-16.02 0.17-0.15 0.4-0.23 0.52-0.29m0.31-2.12c-0.52 0-1.21 0.24-1.94 0.71-6.46 4.23-12.73 24.87-12.73 50.13 0 9.31 9.19 8.05 9.59 10.83l-2.86 52.56c-0.05 3.35 2.68 6.1 6.03 6.1s5.64-2.77 5.58-6.12l-1.57-57.05v-52.51c0-3.15-0.81-4.65-2.1-4.65z",
        fill: "#424242"
      })
    )
  );
}

exports.default = ForkAndKnife;
