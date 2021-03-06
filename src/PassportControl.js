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

function PassportControl(props) {
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
          "m108.33 57.24c-4.5-3.93-10.57-4.24-12.33-4.24h-1.14c7.05-2.44 12.14-9.13 12.14-17v-6c0-1.08-0.35-2.07-0.93-2.89 0.58-0.82 0.93-1.81 0.93-2.89v-6c0-2.76-2.24-5-5-5h-31.32c-2.4 0-4.49 1.36-5.47 3.54s-0.6 4.65 0.99 6.44l2.82 3.18-2.78 1.19-0.26 0.11-0.24 0.16c-1.83 1.24-2.63 3.49-1.98 5.61 0.64 2.13 2.57 3.55 4.78 3.55h2.49c0.41 7.44 5.36 13.67 12.11 16h-6.14v0.17c-2.51 0.39-4.88 1.45-6.85 3.07-0.6 0.5-1.17 1.06-1.7 1.67l-14.27 13.68c-0.4 0.39-0.93 0.6-1.49 0.6h-12.28c0.06-0.15 0.13-0.3 0.18-0.46l0.12-0.42v-5.19c0.06-0.01 0.12-0.01 0.18-0.02l2.14-0.45c2.3-0.49 3.97-2.54 3.97-4.89v-24.78c0-2.76-2.24-5-5-5-0.08 0-0.16 0-0.24 0.01l-19.36 0.93c-1.3 0.06-2.38 0.87-2.85 2.01l-0.73-0.12c-0.27-0.04-0.55-0.07-0.82-0.07-2.75 0-5 2.24-5 5v25.42c0 2.19 1.4 4.1 3.48 4.76l11.88 3.79c-2.91 1.08-5.11 3.7-5.41 6.84-0.22 2.29 0.54 4.58 2.08 6.28s3.74 2.67 6.04 2.67h26.77c2.19 0 4.32-0.9 5.84-2.46l5.32-5.45v17.41c0 1.49 0.67 2.82 1.71 3.73-1.03 0.73-1.71 1.92-1.71 3.27v6c0 2.21 1.79 4 4 4h26c1.32 0 2.49-0.65 3.22-1.65 1.14 0.88 2.51 1.47 4.01 1.61 0.26 0.02 0.52 0.04 0.78 0.04 4.41 0 8-3.59 8-8v-35.6c-0.01-5.49-2.44-10.65-6.68-14.16z"
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
          "m16 38.75v25.42c0 0.87 0.56 1.64 1.39 1.91l18.36 5.85c0.86 0.27 1.72-0.23 1.96-1.04v-29.22c0-0.98-0.71-1.81-1.67-1.97l-17.71-2.92c-1.22-0.2-2.33 0.74-2.33 1.97z"
      }),
      _react2.default.createElement("path", {
        d:
          "m41.9 33.98-19.36 0.94c-0.31 0.02-0.34 0.47-0.03 0.52l15.52 2.56c0.97 0.16 1.67 0.99 1.67 1.97v23.08c0.16 0.1 0.36 0.16 0.56 0.11l2.14-0.45c0.92-0.2 1.59-1.01 1.59-1.96v-24.77c0.01-1.14-0.95-2.05-2.09-2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m72.06 73.15v13.85c0 0.95 1.2 1.36 1.78 0.62l22.67-27.62c0.52-0.65 1.78-3.97-0.78-3.97-4.83 0-16.56-0.03-16.56-0.03-2.7 0-5.18 0.96-7.11 2.55-0.52 0.43-0.99 0.91-1.43 1.42l-14.37 13.78c-0.96 0.92-2.24 1.43-3.57 1.43h-21.39c-2.69 0-5.1 1.97-5.36 4.65-0.29 3.08 2.12 5.66 5.13 5.66h26.77c1.39 0 2.72-0.56 3.69-1.56l6.47-6.61 4.06-4.17z"
      }),
      _react2.default.createElement("path", {
        d:
          "m106.22 59.38c-0.19-0.15-0.38-0.29-0.57-0.43-0.44-0.31-1.05-0.24-1.38 0.18l-31.93 39.25c-0.52 0.66-0.05 1.62 0.79 1.62h26.87v-27c0-0.55 0.45-1 1-1s1 0.45 1 1v33.79c0 2.61 1.91 4.94 4.51 5.19 2.98 0.28 5.49-2.05 5.49-4.98v-35.6c0-4.68-2.13-9.1-5.78-12.02z"
      })
    )
  );
}

exports.default = PassportControl;
