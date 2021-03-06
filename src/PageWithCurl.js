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

function PageWithCurl(props) {
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
        x1: 57.034,
        x2: 57.034,
        y1: 4.7158,
        y2: 123.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FDFDFD",
        offset: 0.2908
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F4F4F4",
        offset: 0.456
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E6E6E6",
        offset: 0.5896
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D3D3D3",
        offset: 0.7064
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B9B9B9",
        offset: 0.8122
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9A9A9A",
        offset: 0.9086
      }),
      _react2.default.createElement("stop", {
        stopColor: "#767676",
        offset: 0.9987
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m10.07 102.33v-94.99c0-1.67 1.35-3.02 3.02-3.02h87.85c1.67 0 3.02 1.35 3.02 3.02l0.03 115.53-72.52 0.85c-11.81 0.01-21.4-9.58-21.4-21.39z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "none",
        stroke: "#757575",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 4.5944
      },
      _react2.default.createElement("line", {
        x1: 25.45,
        x2: 92.82,
        y1: 26.71,
        y2: 26.71
      }),
      _react2.default.createElement("line", {
        x1: 25.45,
        x2: 92.82,
        y1: 41.75,
        y2: 41.75
      }),
      _react2.default.createElement("line", {
        x1: 25.45,
        x2: 92.82,
        y1: 56.79,
        y2: 56.79
      }),
      _react2.default.createElement("line", {
        x1: 25.45,
        x2: 92.82,
        y1: 71.84,
        y2: 71.84
      }),
      _react2.default.createElement("line", {
        x1: 25.45,
        x2: 54.26,
        y1: 86.88,
        y2: 86.88
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 71.426,
        x2: 71.426,
        y1: 102.27,
        y2: 122.95,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.53 102.07h-73.05c-1.93 0-3.55 1.46-3.76 3.38-1.02 9.29-6.19 16.5-12.57 17.29v0.09l78.84 0.58c7.91 0 12.57-8.03 13.69-17.82 0.22-1.87-1.26-3.52-3.15-3.52z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m101.17 7.37c0.03 0 0.04 0.02 0.04 0.02v94.73c0 1.66 1.34 3 3 3h10.55c0.02 0 0.07 0 0.13 0.06 0.05 0.05 0.04 0.1 0.04 0.12-0.98 8.52-5.78 15.46-10.71 15.47h-72.52c-1.76 0-3.53-0.26-5.25-0.77-0.07-0.02-0.14-0.04-0.22-0.06-7.74-2.4-12.94-9.46-12.94-17.57l0.02-95h87.86m0-3h-87.85c-1.67 0-3.02 1.35-3.02 3.02v94.98c0 9.62 6.34 17.75 15.08 20.45v0.06h0.22c1.93 0.57 3.98 0.89 6.1 0.89h72.52c6.87-0.02 12.57-8.36 13.69-18.13 0.21-1.87-1.26-3.52-3.15-3.52h-10.55v-94.73c0-1.67-1.37-3.02-3.04-3.02z",
        fill: "#424242"
      })
    )
  );
}

exports.default = PageWithCurl;
