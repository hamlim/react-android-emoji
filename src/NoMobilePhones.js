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

function NoMobilePhones(props) {
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
        id: "b",
        x1: 64,
        x2: 64,
        y1: 4.8333,
        y2: 122.83,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#515151",
        offset: 0.3054
      }),
      _react2.default.createElement("stop", {
        stopColor: "#292929",
        offset: 0.8963
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 59,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.87 26c10.77 0 15.97 1.59 17.93 2.1 1.33 0.32 2.34 1.64 2.34 2.97v65.87c0 1.33-1.01 2.65-2.34 2.97-1.96 0.51-7.17 2.1-17.93 2.1s-16.86-1.78-17.93-2.1c-1.33-0.32-2.34-1.64-2.34-2.97v-65.87c0-1.33 1.01-2.65 2.34-2.97 1.07-0.32 7.16-2.1 17.93-2.1m-13.96 6.52c0.56 0 1.01-0.45 1.01-1.01s-0.45-1.01-1.01-1.01-1.01 0.45-1.01 1.01c0 0.55 0.45 1.01 1.01 1.01m6.88 0.04h14.19c0.56 0 1.01-0.46 1.01-1.01 0-0.56-0.46-1.01-1.01-1.01h-14.19c-0.56 0-1.01 0.46-1.01 1.01s0.46 1.01 1.01 1.01m-8.13 59.86h30.41c0.56 0 1.01-0.45 1.01-1.01v-54.82c0-0.56-0.45-1.01-1.01-1.01h-30.41c-0.56 0-1.01 0.45-1.01 1.01v54.82c0 0.56 0.45 1.01 1.01 1.01m8.13 4.96h14.19c0.56 0 1.01-0.46 1.01-1.01 0-0.56-0.46-1.01-1.01-1.01h-14.19c-0.56 0-1.01 0.46-1.01 1.01s0.46 1.01 1.01 1.01m7.08-74.38c-9.7 0-15.87 1.37-18.72 2.2-2.6 0.66-4.55 3.17-4.55 5.87v65.87c0 2.7 1.95 5.2 4.55 5.87 2.85 0.83 9.02 2.2 18.72 2.2 10.43 0 15.91-1.46 18.26-2.08l0.41-0.11c2.63-0.65 4.6-3.17 4.6-5.88v-65.87c0-2.71-1.98-5.23-4.6-5.88l-0.41-0.11c-2.35-0.62-7.84-2.08-18.26-2.08zm-13.22 15.58h26.43v50.85h-26.43v-50.85z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m81.8 28.1c-1.96-0.51-7.17-2.1-17.93-2.1s-16.86 1.78-17.93 2.1c-1.33 0.32-2.34 1.64-2.34 2.97v65.87c0 1.33 1.01 2.65 2.34 2.97 1.08 0.32 7.17 2.1 17.93 2.1s15.97-1.59 17.93-2.1c1.33-0.32 2.34-1.64 2.34-2.97v-65.87c0-1.33-1.01-2.65-2.34-2.97zm-25.01 2.43h14.19c0.56 0 1.01 0.46 1.01 1.01 0 0.56-0.46 1.01-1.01 1.01h-14.19c-0.56 0-1.01-0.46-1.01-1.01s0.46-1.01 1.01-1.01zm-6.88-0.04c0.56 0 1.01 0.45 1.01 1.01s-0.45 1.01-1.01 1.01-1.01-0.45-1.01-1.01 0.45-1.01 1.01-1.01zm21.07 66.89h-14.19c-0.56 0-1.01-0.46-1.01-1.01 0-0.56 0.46-1.01 1.01-1.01h14.19c0.56 0 1.01 0.46 1.01 1.01 0.01 0.55-0.45 1.01-1.01 1.01zm8.09-4.96h-30.41c-0.56 0-1.01-0.45-1.01-1.01v-54.82c0-0.56 0.45-1.01 1.01-1.01h30.41c0.56 0 1.01 0.45 1.01 1.01v54.82c0 0.56-0.45 1.01-1.01 1.01z",
      fill: "#FAFAFA"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 17c25.92 0 47 21.08 47 47s-21.08 47-47 47-47-21.08-47-47 21.08-47 47-47m0-3c-27.61 0-50 22.39-50 50s22.39 50 50 50 50-22.39 50-50-22.39-50-50-50z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 4,
        y2: 124.13,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F33B3B",
        offset: 0.324
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D50000",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,4C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4z M114,64 c0,11.99-4.24,23-11.3,31.62L32.38,25.3C41,18.24,52.01,14,64,14C91.57,14,114,36.43,114,64z M14,64c0-11.99,4.24-23,11.3-31.62 l70.32,70.32C87,109.76,75.99,114,64,114C36.43,114,14,91.57,14,64z",
      fill: "url(#a)"
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
    )
  );
}

exports.default = NoMobilePhones;
