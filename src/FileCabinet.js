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

function FileCabinet(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("rect", {
      x: 21.02,
      y: 4,
      width: 85.97,
      height: 120,
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m103.98 7v114h-79.96v-114h79.96m3-3h-85.96v120h85.97v-120h-0.01z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("line", {
      x1: 24.31,
      x2: 103.69,
      y1: 64,
      y2: 64,
      fill: "none",
      stroke: "#212121",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 9.1922,
        y2: 58.551,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0123
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9F9F9F",
        offset: 0.2727
      }),
      _react2.default.createElement("stop", {
        stopColor: "#888",
        offset: 0.5364
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7A7A7A",
        offset: 0.7847
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 27.57,
      y: 9.3,
      width: 72.86,
      height: 50.72,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 68.102,
        y2: 117.46,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0123
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9F9F9F",
        offset: 0.2727
      }),
      _react2.default.createElement("stop", {
        stopColor: "#888",
        offset: 0.5364
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7A7A7A",
        offset: 0.7847
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 27.57,
      y: 68.21,
      width: 72.86,
      height: 50.72,
      fill: "url(#a)"
    }),
    _react2.default.createElement("rect", {
      x: 49.2,
      y: 21.57,
      width: 29.61,
      height: 13.7,
      fill: "#fff",
      stroke: "#BDBDBD",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("rect", {
      x: 49.2,
      y: 44.4,
      width: 29.61,
      height: 4.79,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 49.2,
      y: 79.76,
      width: 29.61,
      height: 13.7,
      fill: "#fff",
      stroke: "#BDBDBD",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("rect", {
      x: 49.2,
      y: 102.59,
      width: 29.61,
      height: 4.79,
      fill: "#BDBDBD"
    })
  );
}

exports.default = FileCabinet;
