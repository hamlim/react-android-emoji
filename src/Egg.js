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

function Egg(props) {
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
        id: "a",
        cx: 46.333,
        cy: 39.667,
        r: 77.333,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFDCB5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F3CA9C",
        offset: 0.2414
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4B37D",
        offset: 0.6022
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DEAA71",
        offset: 0.803
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E0AB7B",
        offset: 0.9901
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m107.3 66.42c-1.62-21.91-16.43-59.83-44.09-59.83-25.36 0-42.69 37.93-44.09 59.82-2.81 44 23.67 57.27 44.09 57.27 19.9 0.01 47.23-14.57 44.09-57.26z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.21 9.59c14.09 0 23.68 11.01 29.24 20.24 7.68 12.74 11.16 27.37 11.85 36.8 1.29 17.49-2.74 31.8-11.64 41.38-7.37 7.94-18.39 12.68-29.46 12.68-11.5 0-22.24-4.41-29.45-12.1-8.9-9.49-12.82-23.62-11.65-41.98 0.72-11.26 5.67-25.67 12.61-36.72 4.78-7.58 14.81-20.3 28.5-20.3m0-3c-25.36 0-42.69 37.93-44.09 59.82-2.81 44 23.67 57.27 44.09 57.27 19.9 0 47.23-14.57 44.09-57.27-1.62-21.9-16.43-59.82-44.09-59.82z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Egg;
