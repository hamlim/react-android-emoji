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

function CloudWithRain(props) {
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
      "radialGradient",
      {
        id: "a",
        cx: 59.468,
        cy: -5.1766,
        r: 120.22,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E3F2FD",
        offset: 0.2636
      }),
      _react2.default.createElement("stop", {
        stopColor: "#90CAF9",
        offset: 0.9167
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m106.97 39.56c-0.68 0-1.35 0.05-2 0.13 0.52-1.75 0.81-3.59 0.81-5.51 0-10.68-8.66-19.34-19.34-19.34-4.55 0-8.72 1.58-12.02 4.21-4.45-8.43-13.29-14.18-23.48-14.18-14.64 0-26.52 11.87-26.52 26.52 0 0.53 0.02 1.05 0.05 1.57-11.03 1.35-19.58 10.75-19.58 22.15 0 12.2 9.79 22.11 21.94 22.32 4.07 7.07 12.18 11.92 21.55 11.99 9.06 0.07 17-4.35 21.3-10.98 3.46 3.79 8.43 6.18 13.96 6.18 7.93 0 14.71-4.88 17.53-11.79 1.81 0.65 3.76 1.02 5.79 1.02 9.47 0 17.15-7.68 17.15-17.15 0-9.46-7.68-17.14-17.14-17.14z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m50.94 7.87c8.75 0 16.73 4.82 20.81 12.57 0.42 0.79 1.16 1.35 2.04 1.54 0.2 0.04 0.41 0.06 0.62 0.06 0.67 0 1.33-0.23 1.87-0.65 2.92-2.32 6.43-3.55 10.15-3.55 9.01 0 16.34 7.33 16.34 16.34 0 1.56-0.23 3.13-0.68 4.66-0.29 0.97-0.07 2.01 0.58 2.78 0.57 0.68 1.42 1.07 2.3 1.07 0.12 0 0.23-0.01 0.35-0.02 0.62-0.07 1.16-0.11 1.66-0.11 7.8 0 14.15 6.35 14.15 14.15s-6.35 14.15-14.15 14.15c-1.61 0-3.21-0.29-4.78-0.85-0.33-0.12-0.68-0.18-1.01-0.18-1.19 0-2.3 0.71-2.78 1.87-2.46 6.03-8.25 9.92-14.76 9.92-4.45 0-8.74-1.9-11.76-5.21-0.57-0.63-1.38-0.98-2.22-0.98-0.08 0-0.16 0-0.25 0.01-0.93 0.08-1.77 0.37-2.27 1.15-3.85 5.93-10.96 9.41-18.56 9.41h-0.19c-8.01 0-15.28-3.87-18.97-10.28-0.53-0.91-1.49-1.38-2.55-1.4-10.47-0.18-18.99-8.79-18.99-19.26 0-9.74 7.29-17.95 16.95-19.14 1.57-0.19 2.72-1.56 2.63-3.14-0.03-0.52-0.05-0.98-0.05-1.4 0.01-12.96 10.56-23.51 23.52-23.51m0-3c-14.64 0-26.52 11.87-26.52 26.52 0 0.53 0.02 1.06 0.05 1.58-11.03 1.35-19.58 10.74-19.58 22.14 0 12.2 9.79 21.89 21.94 22.1 4.07 7.07 12.17 11.79 21.55 11.79h0.21c8.98 0 16.82-4.2 21.08-10.78 3.46 3.79 8.43 6.29 13.98 6.29 7.93 0 14.71-4.82 17.53-11.74 1.81 0.65 3.76 1.05 5.79 1.05 9.47 0 17.15-7.66 17.15-17.13s-7.68-17.14-17.15-17.14c-0.68 0-1.35 0.05-2 0.13 0.52-1.75 0.81-3.59 0.81-5.51 0-10.68-8.66-19.34-19.34-19.34-4.55 0-8.72 1.58-12.02 4.21-4.45-8.42-13.29-14.17-23.48-14.17z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.36 119.15c-1.78 3.88-6.36 5.58-10.24 3.8s-5.58-6.36-3.8-10.24 13.36-11.57 13.36-11.57 2.46 14.13 0.68 18.01z",
      fill: "#64B5F6"
    }),
    _react2.default.createElement("path", {
      d:
        "m97.36 119.15c-1.78 3.88-6.36 5.58-10.24 3.8s-5.58-6.36-3.8-10.24 13.36-11.57 13.36-11.57 2.46 14.13 0.68 18.01z",
      fill: "#90CAF9"
    }),
    _react2.default.createElement("path", {
      d:
        "m25.59 96.63c-1.78 3.88-6.36 5.58-10.24 3.8s-5.58-6.36-3.8-10.24 13.36-11.57 13.36-11.57 2.46 14.13 0.68 18.01z",
      fill: "#64B5F6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m23.42 82.08c0.74 5.36 1.22 11.83 0.35 13.72-0.93 2.03-2.97 3.34-5.21 3.34-0.82 0-1.62-0.18-2.38-0.52-1.39-0.64-2.45-1.78-2.98-3.21s-0.47-2.99 0.16-4.38c0.89-1.91 5.79-5.9 10.06-8.95m1.49-3.46s-11.58 7.7-13.36 11.57c-1.78 3.88-0.08 8.46 3.8 10.24 1.04 0.48 2.14 0.71 3.21 0.71 2.93 0 5.72-1.67 7.02-4.5 1.79-3.89-0.67-18.02-0.67-18.02z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.66 119.15c-1.78 3.88-6.36 5.58-10.24 3.8s-5.58-6.36-3.8-10.24 13.36-11.57 13.36-11.57 2.46 14.13 0.68 18.01z",
      fill: "#90CAF9"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37.5 104.59c0.74 5.36 1.22 11.83 0.35 13.72-0.93 2.03-2.97 3.34-5.21 3.34-0.82 0-1.62-0.18-2.38-0.52-2.87-1.32-4.13-4.72-2.82-7.59 0.88-1.91 5.78-5.89 10.06-8.95m1.48-3.45s-11.58 7.7-13.36 11.57c-1.78 3.88-0.08 8.46 3.8 10.24 1.04 0.48 2.14 0.71 3.21 0.71 2.93 0 5.72-1.67 7.02-4.5 1.79-3.89-0.67-18.02-0.67-18.02z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m69.22 107.89c-1.78 3.88-6.36 5.58-10.24 3.8s-5.58-6.36-3.8-10.24 13.36-11.57 13.36-11.57 2.46 14.13 0.68 18.01z",
      fill: "#64B5F6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m67.05 93.33c0.74 5.36 1.22 11.83 0.35 13.72-0.93 2.03-2.97 3.34-5.21 3.34-0.82 0-1.62-0.18-2.38-0.52-2.87-1.32-4.13-4.72-2.82-7.59 0.88-1.91 5.78-5.89 10.06-8.95m1.49-3.45s-11.58 7.7-13.36 11.57c-1.78 3.88-0.08 8.46 3.8 10.24 1.04 0.48 2.14 0.71 3.22 0.71 2.93 0 5.72-1.67 7.02-4.5 1.78-3.89-0.68-18.02-0.68-18.02z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m115.66 96.63c-1.78 3.88-6.36 5.58-10.24 3.8s-5.58-6.36-3.8-10.24 13.36-11.57 13.36-11.57 2.46 14.13 0.68 18.01z",
      fill: "#64B5F6"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113.49 82.08c0.74 5.36 1.22 11.83 0.35 13.72-0.93 2.03-2.97 3.34-5.21 3.34-0.82 0-1.62-0.18-2.38-0.52-2.87-1.32-4.13-4.72-2.82-7.59 0.88-1.91 5.78-5.9 10.06-8.95m1.49-3.46s-11.58 7.7-13.36 11.57c-1.78 3.88-0.08 8.46 3.8 10.24 1.04 0.48 2.14 0.71 3.21 0.71 2.93 0 5.72-1.67 7.02-4.5 1.79-3.89-0.67-18.02-0.67-18.02z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "g",
        {
          fill: "#424242"
        },
        _react2.default.createElement("path", {
          d:
            "m95.2 104.59c0.74 5.36 1.22 11.83 0.35 13.72-0.93 2.03-2.97 3.34-5.21 3.34-0.82 0-1.62-0.18-2.38-0.52-1.39-0.64-2.45-1.78-2.98-3.21s-0.47-2.99 0.16-4.38c0.88-1.91 5.78-5.89 10.06-8.95m1.48-3.45s-11.58 7.7-13.36 11.57c-1.78 3.88-0.08 8.46 3.8 10.24 1.04 0.48 2.14 0.71 3.21 0.71 2.93 0 5.72-1.67 7.02-4.5 1.79-3.89-0.67-18.02-0.67-18.02z"
        }),
        _react2.default.createElement("path", {
          d:
            "m95.2 104.59c0.74 5.36 1.22 11.83 0.35 13.72-0.93 2.03-2.97 3.34-5.21 3.34-0.82 0-1.62-0.18-2.38-0.52-1.39-0.64-2.45-1.78-2.98-3.21s-0.47-2.99 0.16-4.38c0.88-1.91 5.78-5.89 10.06-8.95m1.48-3.45s-11.58 7.7-13.36 11.57c-1.78 3.88-0.08 8.46 3.8 10.24 1.04 0.48 2.14 0.71 3.21 0.71 2.93 0 5.72-1.67 7.02-4.5 1.79-3.89-0.67-18.02-0.67-18.02z"
        })
      )
    )
  );
}

exports.default = CloudWithRain;