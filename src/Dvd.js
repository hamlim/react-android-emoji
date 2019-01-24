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

function Dvd(props) {
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
        "m63.83 4c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.89-60-60-60zm0 75.02c-8.32 0-15.02-6.69-15.02-15.02 0-8.32 6.69-15.02 15.02-15.02 8.32 0 15.02 6.69 15.02 15.02 0 8.32-6.69 15.02-15.02 15.02z",
      fill: "#FBC02D"
    }),
    _react2.default.createElement("path", {
      d:
        "m101.38 101.55c6.4-6.4 10.82-14.03 13.26-22.14l-36.1-18.49c1 4.79-0.35 9.96-4.09 13.69-3.73 3.73-8.91 5.09-13.69 4.09l18.49 36.11c8.1-2.44 15.73-6.86 22.13-13.26z",
      fill: "#FFFDE7",
      opacity: 0.7
    }),
    _react2.default.createElement("path", {
      d:
        "m26.28 26.45c-6.4 6.4-10.82 14.03-13.26 22.14l36.11 18.49c-1-4.79 0.35-9.96 4.09-13.69 3.73-3.73 8.91-5.09 13.69-4.09l-18.49-36.11c-8.1 2.44-15.74 6.86-22.14 13.26z",
      fill: "#FFFDE7",
      opacity: 0.7
    }),
    _react2.default.createElement("path", {
      d:
        "m63.75 40.08c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0.08 38.94c-8.32 0-15.02-6.69-15.02-15.02 0-8.32 6.69-15.02 15.02-15.02 8.32 0 15.02 6.69 15.02 15.02 0 8.32-6.69 15.02-15.02 15.02z",
      fill: "#FFA000"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.83 7c31.43 0 57 25.57 57 57s-25.57 57-57 57-57-25.57-57-57 25.57-57 57-57m0 75.02c9.93 0 18.02-8.08 18.02-18.02 0-9.93-8.08-18.02-18.02-18.02-9.93 0-18.02 8.08-18.02 18.02 0.01 9.93 8.09 18.02 18.02 18.02m0-78.02c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.89-60-60-60zm0 75.02c-8.32 0-15.02-6.69-15.02-15.02 0-8.32 6.69-15.02 15.02-15.02 8.32 0 15.02 6.69 15.02 15.02 0 8.32-6.69 15.02-15.02 15.02z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Dvd;
