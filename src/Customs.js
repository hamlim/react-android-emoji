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

function Customs(props) {
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
          "M112.5,62.17c-2.7-5.2-8.12-8.38-15.79-9.05c-0.32-0.06-0.64-0.09-0.97-0.09l-0.96,0 C101.87,50.62,107,43.9,107,36v-6c0-1.29-0.5-2.46-1.31-3.34c0.8-0.89,1.31-2.05,1.31-3.34v-5.08c0-2.76-2.24-5-5-5H70.68 c-2.4,0-4.49,1.36-5.47,3.54c-0.96,2.15-0.62,4.56,0.9,6.35c0.35,0.46,1.53,1.88,3.26,3.13l-3.13,1.34l-0.26,0.11l-0.24,0.16 c-1.83,1.24-2.63,3.49-1.98,5.61C64.4,35.58,66.33,37,68.54,37h2.49c0.41,7.44,5.36,13.67,12.11,16H81v0l-1.82,0 c-3.3,0-6.5,1.15-9.03,3.24c-0.6,0.5-1.17,1.06-1.7,1.67L54.18,71.59c-0.4,0.39-0.93,0.6-1.49,0.6H37.38 c-3.82,0-7.14,2.57-8.09,6.06V65c0-2.21-1.79-4-4-4H22c-4.96,0-9,4.04-9,9v25.71c0,4.96,4.04,9,9,9h1.29V106c0,4.96,4.04,9,9,9H58 c4.96,0,9-4.04,9-9v-3.29c0-2.21-1.79-4-4-4H29.29V82.44c0.33,1.25,0.95,2.42,1.84,3.4c1.54,1.7,3.74,2.67,6.04,2.67h20.69 c2.19,0,4.32-0.9,5.84-2.46L69,80.59V98c0,1.49,0.67,2.82,1.71,3.73C69.68,102.46,69,103.65,69,105v6c0,2.21,1.79,4,4,4h26 c1.32,0,2.49-0.65,3.22-1.65c1.14,0.88,2.51,1.47,4.01,1.61c0.26,0.02,0.52,0.04,0.78,0.04c4.41,0,8-3.59,8-8V71.4 C115,68.18,114.13,65,112.5,62.17z"
      }),
      _react2.default.createElement("polygon", {
        points: "100 64.38 100.31 64 100 64"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("path", {
        d:
          "m68.44 21.22c-1.72-1.93-0.35-4.99 2.24-4.99h31.32c1.1 0 2 0.9 2 2v5.08c0 1.1-0.9 2-2 2h-26.87c-3.63 0-6.69-4.09-6.69-4.09z"
      }),
      _react2.default.createElement("path", {
        d:
          "m99 112h-26c-0.55 0-1-0.45-1-1v-6c0-0.55 0.45-1 1-1h26c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1z"
      }),
      _react2.default.createElement("path", {
        d:
          "m104 30c0-1.1-0.9-2-2-2h-27.88c-0.81 0-1.62 0.16-2.36 0.48l-4.34 1.86c-1.64 1.1-0.85 3.66 1.12 3.66h4.5c0.58 0 1.04 0.5 0.99 1.08-0.02 0.3-0.03 0.61-0.03 0.92 0 8.28 6.72 15 15 15s15-6.72 15-15v-6z"
      }),
      _react2.default.createElement("path", {
        d:
          "m72.06 73.15v13.85c0 0.95 1.2 1.36 1.78 0.62l22.67-27.62c0.52-0.65 1.78-3.97-0.78-3.97-4.83 0-16.56-0.03-16.56-0.03-2.7 0-5.18 0.96-7.11 2.55-0.52 0.43-0.99 0.91-1.43 1.42l-14.37 13.78c-0.96 0.92-2.24 1.43-3.57 1.43h-15.31c-2.69 0-5.1 1.97-5.36 4.65-0.29 3.08 2.12 5.66 5.13 5.66h20.69c1.39 0 2.72-0.56 3.69-1.56l6.47-6.61 4.06-4.17z"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.22 59.38c-0.19-0.15-0.38-0.29-0.57-0.43-0.44-0.31-1.05-0.24-1.38 0.18l-31.93 39.25c-0.52 0.66-0.05 1.62 0.79 1.62h26.87v-27c0-0.55 0.45-1 1-1s1 0.45 1 1v33.79c0 2.61 1.91 4.94 4.51 5.19 2.98 0.28 5.49-2.05 5.49-4.98v-35.6c0-4.68-2.13-9.1-5.78-12.02z"
      }),
      _react2.default.createElement("path", {
        d:
          "m26.29 106v-3.43c0-0.47 0.38-0.86 0.86-0.86h35.85c0.55 0 1 0.45 1 1v3.29c0 3.31-2.69 6-6 6h-25.71c-3.32 0-6-2.69-6-6z"
      }),
      _react2.default.createElement("path", {
        d:
          "m25.43 101.71h-3.43c-3.31 0-6-2.69-6-6v-25.71c0-3.31 2.69-6 6-6h3.29c0.55 0 1 0.45 1 1v35.86c0 0.47-0.39 0.85-0.86 0.85z"
      })
    )
  );
}

exports.default = Customs;
