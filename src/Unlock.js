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

function Unlock(props) {
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
        "M72.84,73.74h0.72c5.22,0,9.46-4.23,9.46-9.46V28.22c0-5.35-4.38-9.73-9.73-9.73H54.55 c-5.26,0-9.57,4.31-9.57,9.57v10.65c0,2.01-1.63,3.64-3.64,3.64h-7.22c-2.01,0-3.64-1.63-3.64-3.64V28.22 C30.49,14.9,41.39,4,54.71,4h18.86c13.23,0,23.95,10.72,23.95,23.95v36.12c0,13.29-10.87,24.16-24.16,24.16h-0.51V73.74z",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m73.56 7c11.55 0 20.95 9.4 20.95 20.95v36.12c0 10.83-8.17 19.78-18.67 21.02v-8.55c5.79-1.07 10.18-6.16 10.18-12.25v-36.07c0-7.02-5.71-12.73-12.73-12.73h-18.74c-6.93 0-12.57 5.64-12.57 12.57v10.65c0 0.35-0.28 0.64-0.64 0.64h-7.22c-0.35 0-0.63-0.28-0.63-0.64v-10.49c0-11.7 9.52-21.22 21.22-21.22h18.85m0-3h-18.85c-13.32 0-24.22 10.9-24.22 24.22v10.49c0 2.01 1.63 3.64 3.63 3.64h7.22c2.01 0 3.64-1.63 3.64-3.64v-10.65c0-5.26 4.31-9.57 9.57-9.57h18.74c5.35 0 9.73 4.38 9.73 9.73v36.07c0 5.22-4.23 9.46-9.46 9.46h-0.72v14.49h0.51c13.29 0 24.16-10.87 24.16-24.16v-36.13c0-13.23-10.72-23.95-23.95-23.95z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 122.93,
        y2: 54.974,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA000",
        offset: 0.0053611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFC107",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m100.11 124h-72.22c-4.04 0-7.32-3.28-7.32-7.32v-54.63c0-4.04 3.28-7.32 7.32-7.32h72.21c4.04 0 7.32 3.28 7.32 7.32v54.64c0 4.03-3.27 7.31-7.31 7.31z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m100.11 57.73c2.38 0 4.32 1.94 4.32 4.32v54.64c0 2.38-1.94 4.32-4.32 4.32h-72.22c-2.38 0-4.32-1.94-4.32-4.32v-54.64c0-2.38 1.94-4.32 4.32-4.32h72.22m0-3h-72.22c-4.04 0-7.32 3.28-7.32 7.32v54.64c0 4.04 3.28 7.32 7.32 7.32h72.21c4.04 0 7.32-3.28 7.32-7.32v-54.64c0-4.04-3.27-7.32-7.31-7.32z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Unlock;
