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

function Hole(props) {
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
        y1: 49.476,
        y2: 87.565,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64,
      cy: 64,
      rx: 60,
      ry: 31.27,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 3.998,
        x2: 124,
        y1: 51.367,
        y2: 51.367,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#78909C",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B0BEC5",
        offset: 0.5648
      }),
      _react2.default.createElement("stop", {
        stopColor: "#78909C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,44.73c29.2,0,53.51,10.87,58.89,25.27c0.72-1.94,1.12-3.95,1.12-6 c0-17.27-26.86-31.27-60-31.27S4,46.73,4,64c0,2.05,0.39,4.06,1.12,6C10.49,55.6,34.8,44.73,64,44.73z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 35.73c15.55 0 30.13 3.13 41.04 8.82 10.29 5.37 15.96 12.27 15.96 19.45s-5.67 14.08-15.96 19.45c-10.91 5.68-25.49 8.82-41.04 8.82s-30.13-3.13-41.04-8.82c-10.29-5.37-15.96-12.27-15.96-19.45s5.67-14.08 15.96-19.45c10.91-5.68 25.49-8.82 41.04-8.82m0-3c-33.14 0-60 14-60 31.27s26.86 31.27 60 31.27 60-14 60-31.27-26.86-31.27-60-31.27z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 35.73c15.55 0 30.13 3.13 41.04 8.82 10.29 5.37 15.96 12.27 15.96 19.45s-5.67 14.08-15.96 19.45c-10.91 5.68-25.49 8.82-41.04 8.82s-30.13-3.13-41.04-8.82c-10.29-5.37-15.96-12.27-15.96-19.45s5.67-14.08 15.96-19.45c10.91-5.68 25.49-8.82 41.04-8.82m0-3c-33.14 0-60 14-60 31.27s26.86 31.27 60 31.27 60-14 60-31.27-26.86-31.27-60-31.27z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Hole;
