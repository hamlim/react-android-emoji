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

function BustsInSilhouette(props) {
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
      "defs",
      null,
      _react2.default.createElement("polyline", {
        id: "d",
        points: "124 4 124 124 4 124 4 4"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "c"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#c)"
      },
      _react2.default.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 45.64,
          x2: 45.64,
          y1: 27.861,
          y2: 123.48,
          gradientTransform: "matrix(-1 0 0 1 128.19 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#64B5F6",
          offset: 0.18
        }),
        _react2.default.createElement("stop", {
          stopColor: "#2196F3",
          offset: 0.834
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m75.18 100.52v-0.87c-7.56-2.23-14.24-7.97-17.57-17.28-3.42-1.24-5.36-12.41-4.44-13.88-0.72-4.81-5.05-41.56 29.37-41.75h0.01 0.01c34.51 0.18 30.07 37.12 29.37 41.78 0.91 1.46-1.04 12.59-4.46 13.84-3.33 9.31-10.01 15.06-17.57 17.28v0.86c17.96 1.32 34.09 7.53 34.09 20.22v3.28h-82.9v-3.28c0-11.99 16.05-18.77 34.09-20.2z",
        fill: "url(#b)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m82.53 29.74h0.03c8.87 0.05 15.65 2.73 20.13 7.96 8.96 10.46 6.58 28.37 6.28 30.38-0.08 0.53-0.01 1.07 0.18 1.56 0.06 0.68-0.1 2.76-0.77 5.28-0.81 3.09-1.74 4.39-2.05 4.66-0.79 0.32-1.4 0.96-1.69 1.77-2.79 7.8-8.33 13.28-15.59 15.42-1.28 0.38-2.15 1.55-2.15 2.88v0.86c0 1.57 1.21 2.88 2.78 2.99 15.14 1.11 31.31 6.22 31.31 17.23v4.27h-76.9v-4.28c0-10.18 15.73-15.98 31.33-17.21 1.56-0.12 2.76-1.43 2.76-2.99v-0.87c0-1.33-0.88-2.5-2.15-2.88-7.27-2.14-12.8-7.61-15.59-15.42-0.29-0.8-0.9-1.45-1.69-1.77-0.31-0.27-1.23-1.57-2.04-4.67-0.66-2.53-0.81-4.61-0.76-5.29 0.2-0.49 0.27-1.04 0.19-1.57-0.3-2.01-2.66-19.91 6.3-30.35 4.48-5.23 11.24-7.9 20.09-7.96m0.04-3h-0.01s-0.01 0-0.01 0c-34.42 0.18-30.09 36.93-29.37 41.75-0.92 1.47 1.02 12.63 4.44 13.88 3.33 9.31 10.01 15.06 17.57 17.28v0.87c-18.04 1.43-34.09 8.21-34.09 20.2v7.28h82.9v-7.28c0-12.69-16.13-18.9-34.09-20.22v-0.86c7.56-2.23 14.24-7.97 17.57-17.28 3.42-1.24 5.37-12.38 4.46-13.84 0.7-4.66 5.14-41.59-29.37-41.78z",
          fill: "#424242"
        })
      ),
      _react2.default.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 82.547,
          x2: 82.547,
          y1: 27.861,
          y2: 123.48,
          gradientTransform: "matrix(-1 0 0 1 128.19 0)",
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#1976D2",
          offset: 0.3205
        }),
        _react2.default.createElement("stop", {
          stopColor: "#0D47A1",
          offset: 0.8896
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m38.28 100.52v-0.87c-7.56-2.23-14.24-7.97-17.57-17.28-3.42-1.24-5.36-12.41-4.44-13.88-0.72-4.81-5.05-41.56 29.37-41.75h0.01s0.01 0 0.01 0c34.51 0.18 30.07 37.12 29.37 41.78 0.91 1.46-1.04 12.59-4.46 13.84-3.33 9.32-10.01 15.06-17.57 17.29v0.86c17.96 1.32 34.09 7.53 34.09 20.22v3.27h-82.9v-3.28c0-11.99 16.05-18.77 34.09-20.2z",
        fill: "url(#a)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m45.62 29.74h0.03c8.87 0.05 15.65 2.73 20.13 7.96 8.96 10.46 6.58 28.37 6.28 30.38-0.08 0.53-0.01 1.07 0.18 1.56 0.06 0.68-0.1 2.76-0.77 5.28-0.81 3.09-1.74 4.39-2.05 4.66-0.79 0.32-1.4 0.96-1.69 1.77-2.79 7.8-8.33 13.28-15.59 15.42-1.26 0.38-2.14 1.55-2.14 2.88v0.86c0 1.57 1.21 2.88 2.78 2.99 15.14 1.11 31.31 6.22 31.31 17.23v4.27h-76.9v-4.28c0-10.18 15.73-15.98 31.33-17.21 1.56-0.12 2.76-1.43 2.76-2.99v-0.87c0-1.33-0.88-2.5-2.15-2.88-7.27-2.14-12.8-7.61-15.59-15.42-0.29-0.8-0.9-1.45-1.69-1.77-0.31-0.27-1.23-1.57-2.04-4.67-0.66-2.53-0.81-4.61-0.76-5.29 0.2-0.49 0.27-1.04 0.19-1.57-0.3-2.01-2.66-19.91 6.3-30.35 4.47-5.23 11.24-7.9 20.08-7.96m0.05-3h-0.01-0.01c-34.42 0.18-30.09 36.93-29.37 41.75-0.92 1.47 1.02 12.63 4.44 13.88 3.33 9.31 10.01 15.06 17.57 17.28v0.87c-18.04 1.43-34.09 8.21-34.09 20.2v7.28h82.91v-7.28c0-12.69-16.13-18.9-34.09-20.22v-0.86c7.56-2.23 14.24-7.97 17.57-17.28 3.42-1.24 5.37-12.38 4.46-13.84 0.68-4.66 5.13-41.59-29.38-41.78z",
          fill: "#424242"
        })
      )
    )
  );
}

exports.default = BustsInSilhouette;
