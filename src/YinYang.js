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

function YinYang(props) {
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
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48m19.92 11.06-0.02 0.02c2.48 3.75 3.93 8.24 3.93 13.07 0 13.02-10.49 23.6-23.51 23.83v0.03c-13.02 0.22-23.51 10.8-23.51 23.83v0.18c0 0.34 0.01 0.68 0.04 1.01 0.23 3.7 1.63 7.06 3.84 9.79 2.64 3.27 6.44 5.38 10.55 6.26 2.83 0.6 5.76 0.92 8.76 0.92 1.19 0 2.4-0.05 3.62-0.15 20.25-1.72 36.56-18.04 38.24-38.3 1.44-17.42-7.82-32.87-21.91-40.51-0.02 0.02-0.03 0.02-0.03 0.02m-19.92 20.44c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5-7.5 3.36-7.5 7.5 3.36 7.5 7.5 7.5m0-34.5c-28.12 0-51 22.88-51 51s22.88 51 51 51 51-22.88 51-51-22.88-51-51-51zm3.33 53.77c13.21-1.69 23.51-13.06 23.51-26.61 0-1.63-0.15-3.25-0.44-4.83 8.73 8.05 13.47 19.8 12.47 31.98-1.54 18.68-16.8 33.97-35.5 35.55-1.12 0.09-2.26 0.14-3.37 0.14-2.74 0-5.47-0.29-8.13-0.86-3.62-0.77-6.76-2.62-8.84-5.21-1.9-2.35-2.99-5.15-3.18-8.1-0.02-0.28-0.03-0.56-0.03-0.85v-0.16c0-11.29 9.22-20.63 20.56-20.83l2.95-0.05v-0.17zm-3.33-22.27c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"
      }),
      _react2.default.createElement("path", {
        d:
          "m64 79c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m64 16c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 16.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5zm3.62 73.35c-4.27 0.36-8.43 0.07-12.38-0.77-4.11-0.88-7.92-2.99-10.55-6.26-2.2-2.74-3.61-6.09-3.84-9.79-0.02-0.34-0.03-0.67-0.04-1.01v-0.18c0-13.02 10.49-23.6 23.51-23.83v-0.03c13.02-0.22 23.51-10.8 23.51-23.83 0-4.83-1.45-9.32-3.93-13.07 0.04-0.04 0 0 0.03-0.04 14.09 7.63 23.35 23.09 21.91 40.51-1.66 20.25-17.97 36.58-38.22 38.3z"
      }),
      _react2.default.createElement("circle", {
        cx: 64,
        cy: 85,
        r: 6
      })
    )
  );
}

exports.default = YinYang;
