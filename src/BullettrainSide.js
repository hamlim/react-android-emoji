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

function BullettrainSide(props) {
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
        "M120.84,104.21H20c-39.62,0,17.25-76.08,60.06-76.08c39.5,0,40.77,16.25,40.77,16.25V104.21z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m80.06 31.13c34.1 0 37.53 12.31 37.77 13.47v56.61h-97.83c-3.78 0-6.56-0.75-8.25-2.23-1.44-1.25-2.13-3.09-2.13-5.62 0-9.28 9.69-25.04 23.56-38.33 15.62-14.96 33.15-23.9 46.88-23.9m0-3c-42.81 0-99.69 76.08-60.06 76.08h100.84v-59.83s-1.27-16.25-40.78-16.25z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.24 58.46-14.42 11.33c-0.57 0.44-1.76 0.15-1.51-0.87 0.44-1.8 2.35-5.08 5.95-8.12 4.74-4 8.59-3.72 9.4-3.7 0.7 0.01 1.13 0.93 0.58 1.36z",
      fill: "#FFEB3B"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.313,
        x2: 64.313,
        y1: 28.25,
        y2: 104.27,
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
      d: "m124 104.53-108-0.21c-45.12-10.62 56.75-77.57 84-76.5h24v76.71z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d: "M124,104.01H12c-1.4,1.37-15.64,19.83-1.58,19.83H124V104.01z",
      fill: "#263238"
    }),
    _react2.default.createElement("path", {
      d:
        "m124 72.04c-6.02 0-16.46 0.11-24.08-0.01-29.54-0.44-56.25 31.97-56.25 31.97l80.33 0.21v-32.17z",
      fill: "#0288D1"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m99.34 30.81c0.19 0 0.37 0 0.54 0.01h0.06 21.06v70.7l-104.64-0.2c-9.36-2.3-8.87-6.54-8.68-8.15 1.02-8.79 16.11-23.96 38.43-38.65 21.22-13.96 43.11-23.71 53.23-23.71m0-3c-28.19 0-128.11 65.97-83.34 76.51l108 0.21v-76.71h-24c-0.22-0.01-0.43-0.01-0.66-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 107v14h-110.58c-1.29 0-2.77-0.31-3.03-0.93-1.05-2.49 3.54-10.07 5.97-13.07h107.64m3-3h-112c-1.4 1-15.64 20-1.58 20h113.58v-20z",
        fill: "#eee"
      })
    )
  );
}

exports.default = BullettrainSide;
