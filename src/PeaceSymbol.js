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

function PeaceSymbol(props) {
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
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4.25,
        y2: 124.41,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B388FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A175FF",
        offset: 0.3773
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7C4DFF",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d: "m72.05 116h0.15v-0.01c-0.08 0-0.17 0.01-0.25 0.01h0.1z",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m72.2 115.98h-0.15-0.1c0.26 0 0.52 0.02 0.79 0.02-0.18-0.01-0.36-0.02-0.54-0.02z",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48m30.96 73.3c5.64-6.9 9.04-15.71 9.04-25.3 0-20.71-15.82-37.79-36-39.8v38.14l26.96 26.96m-61.92 0 26.96-26.96v-38.14c-20.18 2.01-36 19.09-36 39.8 0 9.59 3.4 18.4 9.04 25.3m26.96 14.5v-30.14l-21.3 21.3c5.93 4.85 13.27 8.04 21.3 8.84m8 0c8.03-0.8 15.37-3.99 21.3-8.84l-21.3-21.3v30.14m-4-90.8c-28.12 0-51 22.88-51 51s22.88 51 51 51 51-22.88 51-51-22.88-51-51-51zm7 48.1v-33.43c7.79 1.5 14.93 5.49 20.35 11.44 6.22 6.83 9.65 15.67 9.65 24.89 0 7.39-2.24 14.63-6.37 20.73l-23.63-23.63zm-37.63 23.63c-4.13-6.1-6.37-13.34-6.37-20.73 0-9.22 3.43-18.06 9.65-24.89 5.42-5.95 12.56-9.95 20.35-11.44v33.43l-23.63 23.63zm9.9 9.9 13.73-13.73v19.44c-4.92-0.95-9.57-2.89-13.73-5.71zm27.73 5.7v-19.43l13.73 13.73c-4.16 2.82-8.81 4.76-13.73 5.7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,16c-26.51,0-48,21.49-48,48s21.49,48,48,48s48-21.49,48-48S90.51,16,64,16z M104,64 c0,9.59-3.4,18.4-9.04,25.3L68,62.34V24.2C88.18,26.21,104,43.29,104,64z M60,103.8c-8.03-0.8-15.37-3.99-21.3-8.84L60,73.66V103.8 z M68,73.66l21.3,21.3C83.37,99.81,76.03,103,68,103.8V73.66z M60,24.2v38.14L33.04,89.3C27.4,82.4,24,73.59,24,64 C24,43.29,39.82,26.21,60,24.2z",
      fill: "#fff"
    })
  );
}

exports.default = PeaceSymbol;
