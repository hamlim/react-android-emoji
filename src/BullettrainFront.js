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

function BullettrainFront(props) {
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
        y1: 29.5,
        y2: 108.01,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9908
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M123.95,28H75.53c-4.58,0-6.92,2.47-11.64,7.44c-0.64,0.66-3.59,3.74-4.19,4.55L47.69,54.52 l-0.05,0.06c-10.51,3.93-20.35,9.09-27.96,15.08C3.27,82.55-3.22,98,15.17,108h108.78V28z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d: "M124,108H11.36c-1.4,1.37-15.48,16.25-0.95,16.25H124V108z",
      fill: "#263238"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m122 110v12.25h-111.59c-2.43 0-4.09-0.49-4.42-1.3-0.89-2.19 3.26-7.87 6.2-10.95h109.81m2-2h-112.64c-1.4 1.37-15.48 16.25-0.95 16.25h113.59v-16.25z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,68H89.42c-5.17,0-9.76,2.86-13.4,8l-9.61,12.61c-2.97,4.4,0.22,8,4.62,8H124V68z",
      fill: "#0277BD"
    }),
    _react2.default.createElement("path", {
      d:
        "M124,28H75.58c-4.58,0-6.92,2.47-11.64,7.44c-0.64,0.66-3.59,3.74-4.19,4.55L47.74,54.52l-0.05,0.06 c-10.51,3.93-20.35,9.09-27.96,15.08C3.32,82.55-3.17,98,15.22,108H124V28z",
      fill: "none"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.94 31.06v74h-105c-5.52-3.15-8.5-6.9-8.86-11.13-0.53-6.26 4.74-14.23 14.44-21.86 7.09-5.57 16.48-10.63 27.17-14.63l0.75-0.28 0.51-0.62 0.05-0.06 12-14.52 0.05-0.07 0.04-0.06c0.34-0.46 2.36-2.62 3.96-4.27l0.04-0.04c4.77-5.02 6.28-6.47 9.42-6.47h45.43m3-2.99h-48.42c-4.58 0-6.92 2.47-11.64 7.44-0.64 0.66-3.59 3.74-4.19 4.55l-12.01 14.53-0.05 0.06c-10.51 3.93-20.35 9.09-27.96 15.08-16.41 12.9-22.9 28.34-4.51 38.34h108.78v-80z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.41 53.89h-48.07c6.77-8.56 14.97-17.85 14.97-17.85h32.81c2.14 0 3.87 1.73 3.87 3.87v10.09c0.01 2.14-1.44 3.89-3.58 3.89z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64.67 39.04h31.45c0.48 0 0.87 0.39 0.87 0.87v10.09c0 0.15-0.03 0.89-0.59 0.89h-41.78c4.21-5.13 8.3-9.84 10.05-11.85m-1.36-3s-8.2 9.28-14.97 17.85h48.07c2.14 0 3.59-1.75 3.59-3.89v-10.09c0-2.14-1.73-3.87-3.87-3.87h-32.82z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m28.25 87.47c0 9.08-5.27 17.53-12.92 20.53h-0.11c-18.39-10-11.9-25.5 4.51-38.4 5.2 4.2 8.52 10.68 8.52 17.87z",
      fill: "#0288D1"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m19.62 73.93c3.6 3.69 5.63 8.6 5.63 13.79 0 7.41-4.06 14.51-9.82 17.44-5.15-3.09-7.94-6.73-8.29-10.85-0.26-3.15 0.86-6.67 3.33-10.45 2.16-3.29 5.23-6.62 9.15-9.93m0.11-3.7c-16.41 12.9-22.9 28.77-4.51 38.77h0.11c7.65-3 12.92-11.82 12.92-20.9 0-7.2-3.32-13.67-8.52-17.87z",
        fill: "#424242"
      })
    )
  );
}

exports.default = BullettrainFront;