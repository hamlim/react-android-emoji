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

function DeciduousTree(props) {
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
        y1: 121.33,
        y2: 93.416,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#5D4037",
        offset: 0.0022754
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m56.57 79.87c-0.98 0.02-1.73 0.48-1.7 1.03 0.3 5.38 1.54 31.22-1.99 36.43-1.49 2.2-3.69 3.82-5.55 4.9-1.08 0.63-0.26 1.68 1.3 1.68h30.74c1.63 0 2.4-1.11 1.21-1.73-1.97-1.02-4.19-2.62-6-5.1-3.32-4.54-3.2-30.92-3.14-36.53 0.01-0.57-0.84-1.03-1.86-1l-13.01 0.32z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m67.8 83.22c-0.13 25.12 2 33.47 3.86 36 0.27 0.37 0.55 0.72 0.84 1.07h-17.3c0.24-0.3 0.46-0.61 0.68-0.92 3.41-5.04 3.44-21.75 2.75-35.92l9.17-0.23m1.86-3.67h-0.08l-13.01 0.33c-0.98 0.02-1.73 0.48-1.7 1.03 0.3 5.38 1.54 31.22-1.99 36.43-1.49 2.2-3.69 3.82-5.55 4.9-1.08 0.63-0.26 1.68 1.3 1.68h30.74c1.63 0 2.4-1.11 1.21-1.73-1.97-1.02-4.19-2.62-6-5.1-3.32-4.54-3.2-30.92-3.14-36.53 0.01-0.57-0.79-1.01-1.78-1.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 55.204,
        x2: 95.9,
        y1: 42.608,
        y2: 97.399,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#9CCC65",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.9952
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m56.96 100c-9.49 0-17.78-6.08-20.63-15.13-0.2-0.63-0.78-1.05-1.43-1.05h-0.12c-0.6 0.05-1.13 0.07-1.61 0.07-11.39 0-20.66-9.59-20.66-21.38 0-7.32 3.57-14.06 9.55-18.02 0.57-0.38 0.81-1.1 0.59-1.74-0.76-2.18-1.14-4.46-1.14-6.77 0-11.39 9.27-20.66 20.66-20.66 1.65 0 3.31 0.2 4.93 0.6 0.12 0.03 0.24 0.04 0.36 0.04 0.51 0 1-0.26 1.27-0.71 3.8-6.12 10.37-9.77 17.56-9.77 9.12 0 17.28 6.11 19.83 14.87 0.19 0.65 0.78 1.08 1.44 1.08 0.09 0 0.19-0.01 0.28-0.03 1.29-0.24 2.59-0.37 3.87-0.37 11.39 0 20.66 9.27 20.66 20.66 0 6.2-2.75 12.02-7.54 15.96-0.33 0.27-0.53 0.68-0.55 1.11-0.01 0.43 0.16 0.85 0.48 1.14 4.21 3.9 6.62 9.42 6.62 15.15 0 11.39-9.27 20.66-20.66 20.66-5.09 0-9.99-1.87-13.78-5.27-0.28-0.25-0.63-0.38-1-0.38-0.06 0-0.12 0-0.17 0.01-0.43 0.05-0.81 0.28-1.06 0.63-4.06 5.84-10.69 9.3-17.75 9.3z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.27 7c8.46 0 16.02 5.67 18.39 13.79 0.38 1.3 1.57 2.16 2.88 2.16 0.19 0 0.37-0.02 0.56-0.05 1.19-0.23 2.4-0.34 3.59-0.34 10.57 0 19.16 8.6 19.16 19.16 0 5.75-2.55 11.15-7 14.8-0.67 0.55-1.07 1.36-1.09 2.23-0.03 0.87 0.32 1.7 0.96 2.29 3.9 3.62 6.14 8.74 6.14 14.05 0 10.57-8.6 19.16-19.16 19.16-4.72 0-9.26-1.74-12.78-4.89-0.55-0.5-1.27-0.77-2-0.77-0.11 0-0.23 0.01-0.35 0.02-0.85 0.1-1.62 0.56-2.11 1.26-3.77 5.4-9.94 8.63-16.51 8.63-8.84 0-16.55-5.66-19.2-14.08-0.4-1.26-1.56-2.1-2.86-2.1-0.08 0-0.16 0-0.24 0.01-0.56 0.04-1.05 0.07-1.49 0.07-10.56 0-19.16-8.91-19.16-19.87 0-6.82 3.32-13.09 8.88-16.77 1.14-0.76 1.63-2.19 1.18-3.48-0.7-2.03-1.06-4.14-1.06-6.28 0-10.57 8.6-19.16 19.16-19.16 1.53 0 3.07 0.19 4.57 0.55 0.24 0.06 0.48 0.09 0.71 0.09 1.02 0 1.99-0.52 2.55-1.42 3.53-5.67 9.62-9.06 16.28-9.06m0-3c-7.95 0-14.92 4.19-18.83 10.48-1.69-0.41-3.46-0.64-5.28-0.64-12.24 0-22.16 9.92-22.16 22.16 0 2.54 0.43 4.98 1.22 7.26-6.14 4.07-10.22 11.17-10.22 19.27 0 12.63 9.92 22.88 22.16 22.88 0.58 0 1.16-0.03 1.73-0.08 2.95 9.38 11.71 16.18 22.06 16.18 7.86 0 14.79-3.92 18.97-9.91 3.92 3.51 9.1 5.65 14.78 5.65 12.24 0 22.16-9.92 22.16-22.16 0-6.42-2.74-12.21-7.1-16.25 4.94-4.06 8.09-10.22 8.09-17.12 0-12.24-9.92-22.16-22.16-22.16-1.42 0-2.8 0.14-4.15 0.39-2.68-9.22-11.18-15.95-21.27-15.95z",
      fill: "#689F38"
    }),
    _react2.default.createElement("path", {
      d: "m22.5 44.25s7.5-5.62 19.5-5",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m44.5 26.5s0.33-5 4.64-11.79",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m48.16 78.85s-3.84 3.21-11.73 4.8",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m66.52 85.83c4.89 2.42 12.37 2.28 17.23-0.2",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m79.62 61.88c5.62 1.12 12.88-3 14.87-8.2",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m88.46 59.85c5.27 1.72 11.96 0.63 16.86-2.58",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d: "m39.67 72.5c3.73 4.84 10.56 7.04 16.66 5.5",
      fill: "none",
      stroke: "#689F38",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 3
    })
  );
}

exports.default = DeciduousTree;
