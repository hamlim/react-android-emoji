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

function Bus(props) {
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
        id: "c",
        x1: 64,
        x2: 64,
        y1: 51.167,
        y2: 114.17,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.1157
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.3646
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.6222
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C9C9C9",
        offset: 0.883
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118 115.75h-108c-3.3 0-6-2.7-6-6v-55.75c0-3.3 2.7-6 6-6h108c3.3 0 6 2.7 6 6v55.75c0 3.3-2.7 6-6 6z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("rect", {
      x: 22.86,
      y: 88.25,
      width: 101.21,
      height: 7.75,
      fill: "#66BB6A"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m118 115.75h-108c-3.3 0-6-2.7-6-6v-55.75c0-3.3 2.7-6 6-6h108c3.3 0 6 2.7 6 6v55.75c0 3.3-2.7 6-6 6z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("path", {
      d: "m12 92.13h-22.67v-35.92h22.67c2.2 0 4 1.8 4 4v27.92c0 2.2-1.8 4-4 4z",
      clipPath: "url(#a)",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m12 58.21c1.1 0 2 0.9 2 2v27.92c0 1.1-0.9 2-2 2h-20.67v-31.92h20.67m0-2h-22.67v35.92h22.67c2.2 0 4-1.8 4-4v-27.92c0-2.2-1.8-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m53.17 83.5h-26.34c-2.2 0-4-1.8-4-4v-19.29c0-2.2 1.8-4 4-4h26.33c2.2 0 4 1.8 4 4v19.29c0.01 2.2-1.79 4-3.99 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m112 83.5h-44c-2.2 0-4-1.8-4-4v-19.29c0-2.2 1.8-4 4-4h44c2.21 0 4 1.79 4 4v19.29c0 2.21-1.79 4-4 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m6.84 105.62h-0.59c-1.24 0-2.25-1.01-2.25-2.25v-7c0-1.24 1.01-2.25 2.25-2.25h0.59c1.24 0 2.25 1.01 2.25 2.25v7c0 1.24-1.01 2.25-2.25 2.25z",
      fill: "#FFEE58"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m118 51c1.65 0 3 1.35 3 3v55.75c0 1.65-1.35 3-3 3h-108c-1.65 0-3-1.35-3-3v-55.75c0-1.65 1.35-3 3-3h108m0-3h-108c-3.3 0-6 2.7-6 6v55.75c0 3.3 2.7 6 6 6h108c3.3 0 6-2.7 6-6v-55.75c0-3.3-2.7-6-6-6z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 28,
      cy: 112,
      r: 12,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m28 102c5.51 0 10 4.49 10 10s-4.49 10-10 10-10-4.49-10-10 4.49-10 10-10m0-2c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 28,
      cy: 112,
      r: 5.14,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 102,
      cy: 112,
      r: 12,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102 102c5.51 0 10 4.49 10 10s-4.49 10-10 10-10-4.49-10-10 4.49-10 10-10m0-2c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 102,
      cy: 112,
      r: 5.14,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m53.17 58.21c1.1 0 2 0.9 2 2v19.29c0 1.1-0.9 2-2 2h-26.34c-1.1 0-2-0.9-2-2v-19.29c0-1.1 0.9-2 2-2h26.34m0-2h-26.34c-2.2 0-4 1.8-4 4v19.29c0 2.2 1.8 4 4 4h26.33c2.2 0 4-1.8 4-4v-19.29c0.01-2.2-1.79-4-3.99-4z",
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
          "m112 58.21c1.1 0 2 0.9 2 2v19.29c0 1.1-0.9 2-2 2h-44c-1.1 0-2-0.9-2-2v-19.29c0-1.1 0.9-2 2-2h44m0-2h-44c-2.2 0-4 1.8-4 4v19.29c0 2.2 1.8 4 4 4h44c2.21 0 4-1.79 4-4v-19.29c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Bus;
