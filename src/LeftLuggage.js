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

function LeftLuggage(props) {
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
        stopColor: "#82B1FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6FA0FF",
        offset: 0.2644
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3D74FF",
        offset: 0.7989
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
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
          "m104 36c4.42 0 8 3.58 8 8v60c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-60c0-4.42 3.58-8 8-8h80m-80 71h80c1.65 0 3-1.35 3-3v-60c0-1.65-1.35-3-3-3h-80c-1.65 0-3 1.35-3 3v60c0 1.65 1.35 3 3 3m80-74h-80c-6.07 0-11 4.93-11 11v60c0 6.07 4.93 11 11 11h80c6.07 0 11-4.93 11-11v-60c0-6.07-4.93-11-11-11zm-80 71v-60h80v60h-80z"
      }),
      _react2.default.createElement("path", {
        d:
          "m72 44c2.21 0 4 1.79 4 4v8h3c0.55 0 1 0.45 1 1v42c0 0.55-0.45 1-1 1h-30c-0.55 0-1-0.45-1-1v-42c0-0.55 0.45-1 1-1h3v-8c0-2.21 1.79-4 4-4h16m-15 12h14c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1m15-15h-16c-3.86 0-7 3.14-7 7v5c-2.21 0-4 1.79-4 4v42c0 2.21 1.79 4 4 4h30c2.21 0 4-1.79 4-4v-42c0-2.21-1.79-4-4-4v-5c0-3.86-3.14-7-7-7zm-13 10h10v2h-10v-2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m43 56c0.55 0 1 0.45 1 1v42c0 0.55-0.45 1-1 1h-7c-4.42 0-8-3.58-8-8v-28c0-4.42 3.58-8 8-8h7m0-3h-7c-6.07 0-11 4.93-11 11v28c0 6.07 4.93 11 11 11h7c2.21 0 4-1.79 4-4v-42c0-2.21-1.79-4-4-4z"
      }),
      _react2.default.createElement("path", {
        d:
          "m92 56c4.42 0 8 3.58 8 8v28c0 4.42-3.58 8-8 8h-7c-0.55 0-1-0.45-1-1v-42c0-0.55 0.45-1 1-1h7m0-3h-7c-2.21 0-4 1.79-4 4v42c0 2.21 1.79 4 4 4h7c6.07 0 11-4.93 11-11v-28c0-6.07-4.93-11-11-11z"
      }),
      _react2.default.createElement("path", {
        d:
          "m52 16c3.73 0 6.85 2.55 7.74 6h22.26c1.1 0 2 0.9 2 2s-0.9 2-2 2h-4v4c0 1.1-0.9 2-2 2s-2-0.9-2-2v-4h-4v4c0 1.1-0.9 2-2 2s-2-0.9-2-2v-4h-6.26c-0.89 3.45-4.01 6-7.74 6-4.42 0-8-3.58-8-8s3.58-8 8-8m0 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-15c-6.07 0-11 4.93-11 11s4.93 11 11 11c4.2 0 7.95-2.38 9.79-6h1.21v1c0 2.76 2.24 5 5 5 1.63 0 3.09-0.79 4-2 0.91 1.22 2.37 2 4 2 2.76 0 5-2.24 5-5v-1h1c2.76 0 5-2.24 5-5s-2.24-5-5-5h-20.21c-1.84-3.62-5.59-6-9.79-6zm0 12c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m104 41c1.65 0 3 1.35 3 3v60c0 1.65-1.35 3-3 3h-80c-1.65 0-3-1.35-3-3v-60c0-1.65 1.35-3 3-3h80m0-5h-80c-4.42 0-8 3.58-8 8v60c0 4.42 3.58 8 8 8h80c4.42 0 8-3.58 8-8v-60c0-4.42-3.58-8-8-8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m79 56h-3v-8c0-2.21-1.79-4-4-4h-16c-2.21 0-4 1.79-4 4v8h-3c-0.55 0-1 0.45-1 1v42c0 0.55 0.45 1 1 1h30c0.55 0 1-0.45 1-1v-42c0-0.55-0.45-1-1-1zm-22-8h14c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1v-6c0-0.55 0.45-1 1-1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m43 56h-7c-4.42 0-8 3.58-8 8v28c0 4.42 3.58 8 8 8h7c0.55 0 1-0.45 1-1v-42c0-0.55-0.45-1-1-1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m92 56h-7c-0.55 0-1 0.45-1 1v42c0 0.55 0.45 1 1 1h7c4.42 0 8-3.58 8-8v-28c0-4.42-3.58-8-8-8z"
      }),
      _react2.default.createElement("path", {
        d:
          "m82 22h-22.26c-0.89-3.45-4.01-6-7.74-6-4.42 0-8 3.58-8 8s3.58 8 8 8c3.73 0 6.85-2.55 7.74-6h6.26v4c0 1.1 0.9 2 2 2s2-0.9 2-2v-4h4v4c0 1.1 0.9 2 2 2s2-0.9 2-2v-4h4c1.1 0 2-0.9 2-2s-0.9-2-2-2zm-30 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
      })
    )
  );
}

exports.default = LeftLuggage;
