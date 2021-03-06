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

function RoundPushpin(props) {
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
        x1: 63.934,
        x2: 63.934,
        y1: 58.395,
        y2: 123.98,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.2128
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C3C3C3",
        offset: 0.4465
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.6632
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EFEFEF",
        offset: 0.8545
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.23 111.29-3.29 12.46-3.29-12.46v-52.71c0.83 0 2.6 0.14 3.29 0.14 0.83 0 2.6 0 3.29-0.14v52.71z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 54.101,
        cy: 20.788,
        r: 38.832,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.0958
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC3E32",
        offset: 0.2341
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D42F29",
        offset: 0.4539
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.6732
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.9665
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.77 32.09v1.39c-0.83 13.78-11.69 25.05-25.47 26.31-0.83 0.14-1.53 0.14-2.37 0.14-0.83 0-1.53 0-2.23-0.14-13.78-1.25-24.64-12.25-25.47-26.31v-1.39c-0.14-15.31 12.39-27.84 27.7-27.84s27.84 12.39 27.84 27.84z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m63.86 7.25c13.7 0 24.84 11.14 24.84 24.84v1.3c-0.77 12.01-9.97 21.8-21.92 23.29-1.5 0.19-2.63 1.46-2.63 2.98v51.24l-0.29 1.11-0.29-1.11v-51.26c0-1.51-1.12-2.78-2.62-2.98-11.89-1.53-21.04-11.32-21.79-23.28v-1.33c-0.05-6.55 2.48-12.75 7.14-17.45 4.69-4.74 10.93-7.35 17.56-7.35m0-3c-15.31 0-27.84 12.53-27.7 27.84v1.39c0.81 13.69 11.14 24.45 24.41 26.16v51.65l3.29 12.46 3.29-12.46v-51.63c13.33-1.67 23.73-12.71 24.54-26.18v-1.39c0.01-15.45-12.52-27.84-27.83-27.84z",
        fill: "#424242"
      })
    )
  );
}

exports.default = RoundPushpin;
