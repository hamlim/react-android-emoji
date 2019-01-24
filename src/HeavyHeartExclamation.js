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

function HeavyHeartExclamation(props) {
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
        cx: 64.25,
        cy: 107.66,
        r: 11.755,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.4748
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.913
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 111.91,
      r: 11.75,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 103.16c4.83 0 8.75 3.93 8.75 8.75 0 4.83-3.93 8.75-8.75 8.75s-8.75-3.93-8.75-8.75c0-4.83 3.92-8.75 8.75-8.75m0-3c-6.49 0-11.75 5.26-11.75 11.75s5.26 11.75 11.75 11.75 11.75-5.26 11.75-11.75-5.26-11.75-11.75-11.75z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.948,
        cy: -6.2998,
        r: 66.056,
        gradientTransform:
          "matrix(9.9429e-14 .9074 -.9812 9.4755e-14 57.562 -56.911)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M88.92,4C70.65,4,63.94,25.93,63.94,25.93S57.32,4,38.92,4C25.1,4,9.33,15,15.15,40 c5.82,25,48.61,56.02,48.61,56.02s0.22-0.09,0.22-0.22c0,0.14,0.14,0.21,0.14,0.21s42.71-31,48.54-56C118.49,15,102.75,4,88.92,4z ",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m88.92 7c6.86 0 13.32 2.98 17.29 7.98 4.66 5.86 5.88 14.28 3.53 24.34-4.89 20.98-38.15 47.26-45.81 53.08-7.71-5.86-40.97-32.12-45.86-53.08-2.34-10.05-1.12-18.47 3.54-24.33 3.97-5 10.44-7.99 17.31-7.99 15.92 0 22.09 19.6 22.15 19.79l2.85 9.44 2.89-9.43c0.06-0.2 6.24-19.8 22.11-19.8m0-3c-18.27 0-24.98 21.93-24.98 21.93s-6.62-21.93-25.02-21.93c-13.82 0-29.59 11-23.77 36s48.61 56.02 48.61 56.02 0.22-0.09 0.22-0.22c0 0.14 0.14 0.21 0.14 0.21s42.71-31 48.54-56c5.83-25.01-9.91-36.01-23.74-36.01z",
        fill: "#424242"
      })
    )
  );
}

exports.default = HeavyHeartExclamation;
