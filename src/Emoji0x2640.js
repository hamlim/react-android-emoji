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

function Emoji0x2640(props) {
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
        y1: 3.5,
        y2: 124.57,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C71FFF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BE1BF2",
        offset: 0.2936
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A710D0",
        offset: 0.8358
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9F0CC4",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M106,46c0-23.74-19.7-42.88-43.64-41.97C40.71,4.86,23.02,22.42,22.04,44.06 C21.09,65.38,36.02,83.38,56,87.23V92H44c-2.21,0-4,1.79-4,4v8c0,2.21,1.79,4,4,4h12v12c0,2.21,1.79,4,4,4h8c2.21,0,4-1.79,4-4v-12 h12c2.21,0,4-1.79,4-4v-8c0-2.21-1.79-4-4-4H72v-4.77C91.37,83.49,106,66.46,106,46z M38.8,46c0-13.9,11.3-25.2,25.2-25.2 S89.2,32.1,89.2,46S77.9,71.2,64,71.2S38.8,59.9,38.8,46z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7c21.5 0 39 17.5 39 39 0 18.65-13.28 34.76-31.57 38.28-1.41 0.28-2.43 1.51-2.43 2.95v4.77c0 1.66 1.34 3 3 3h12c0.55 0 1 0.45 1 1v8c0 0.55-0.45 1-1 1h-12c-1.66 0-3 1.34-3 3v12c0 0.55-0.45 1-1 1h-8c-0.55 0-1-0.45-1-1v-12c0-1.66-1.34-3-3-3h-12c-0.55 0-1-0.45-1-1v-8c0-0.55 0.45-1 1-1h12c1.66 0 3-1.34 3-3v-4.77c0-1.44-1.02-2.67-2.43-2.95-9.07-1.75-17.25-6.71-23.05-13.96-5.89-7.37-8.9-16.65-8.47-26.12 0.9-20.08 17.34-36.4 37.43-37.17 0.51-0.02 1.01-0.03 1.52-0.03m0 67.2c15.55 0 28.2-12.65 28.2-28.2s-12.65-28.2-28.2-28.2-28.2 12.65-28.2 28.2 12.65 28.2 28.2 28.2m0-70.2c-0.55 0-1.09 0.01-1.64 0.03-21.65 0.83-39.34 18.39-40.32 40.03-0.95 21.32 13.98 39.32 33.96 43.17v4.77h-12c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h12v12c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-12h12c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4h-12v-4.77c19.37-3.74 34-20.77 34-41.23 0-23.19-18.81-42-42-42zm0 67.2c-13.9 0-25.2-11.3-25.2-25.2s11.3-25.2 25.2-25.2 25.2 11.3 25.2 25.2-11.3 25.2-25.2 25.2z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Emoji0x2640;
