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

function RadioButton(props) {
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
        cx: 63.999,
        cy: 64,
        r: 60,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#039BE5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#079EE7",
        offset: 0.3237
      }),
      _react2.default.createElement("stop", {
        stopColor: "#13A6EC",
        offset: 0.65
      }),
      _react2.default.createElement("stop", {
        stopColor: "#27B5F5",
        offset: 0.9766
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
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
          "m63.99 20c9.79 0 19.57 3.25 27.61 9.73 1.21 0.98 2.39 2.02 3.52 3.15s2.17 2.3 3.15 3.52c13.95 17.28 12.91 42.65-3.15 58.71-8.6 8.59-19.86 12.89-31.12 12.89s-22.52-4.3-31.11-12.89c-17.18-17.18-17.18-45.04 0-62.23 8.59-8.59 19.84-12.88 31.1-12.88m0-3c-12.55 0-24.35 4.89-33.22 13.76-18.33 18.33-18.33 48.15 0 66.47 8.87 8.88 20.68 13.77 33.23 13.77s24.36-4.89 33.24-13.77c17.03-17.03 18.48-44 3.36-62.72-1.11-1.37-2.21-2.6-3.36-3.75-1.16-1.16-2.39-2.26-3.75-3.36-8.31-6.71-18.79-10.4-29.5-10.4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.667,
        cy: 24,
        r: 82.538,
        gradientTransform:
          "matrix(1.0287e-13 1 -.7673 7.8933e-14 82.082 -39.667)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98.27 36.4c-0.98-1.21-2.02-2.39-3.15-3.52s-2.3-2.17-3.52-3.15c-17.28-13.95-42.65-12.91-58.71 3.15-17.18 17.18-17.18 45.04 0 62.23 17.18 17.18 45.04 17.18 62.23 0 16.05-16.06 17.1-41.43 3.15-58.71z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.99 23c9.35 0 18.48 3.22 25.72 9.07 1.2 0.97 2.27 1.93 3.28 2.94s1.97 2.08 2.94 3.28c13.18 16.33 11.92 39.85-2.94 54.71-7.74 7.73-18.04 12-28.99 12s-21.25-4.27-28.99-12.01c-7.75-7.74-12.01-18.04-12.01-28.99s4.26-21.25 12.01-29c7.74-7.74 18.03-12 28.98-12m0-3c-11.26 0-22.51 4.29-31.1 12.88-17.18 17.18-17.18 45.04 0 62.23 8.59 8.59 19.85 12.89 31.11 12.89s22.52-4.3 31.11-12.89c16.06-16.06 17.1-41.43 3.15-58.71-0.98-1.21-2.02-2.39-3.15-3.52s-2.3-2.17-3.52-3.15c-8.03-6.48-17.82-9.73-27.6-9.73z",
        fill: "#eee"
      })
    )
  );
}

exports.default = RadioButton;