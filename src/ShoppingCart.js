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

function ShoppingCart(props) {
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
        x1: 53.999,
        x2: 53.999,
        y1: 26.361,
        y2: 97.572,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFA726",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FB8C00",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M8,27.98c-2.21,0-4,1.79-4,4v4c0,1.88,1.31,3.45,3.06,3.88c0.3,0.07,0.62,0.12,0.94,0.12 h4.01c0,0.28,9.49,48.85,9.49,48.85c0.36,1.84,1.85,3.16,3.58,3.16h62.98l10.2-52.01h4.47v-0.12l1.26-3.88v-8H8z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d: "M4,35.98c0,1.88,1.31,3.45,3.06,3.88h95.68l1.26-3.88H4z",
      fill: "#F57C00"
    }),
    _react2.default.createElement("path", {
      d:
        "m20.54 48.42 7.11 32.01c0.2 0.92 1.01 1.57 1.95 1.57h4.4c1.1 0 2-0.9 2-2v-32.01c0-1.1-0.9-2-2-2h-11.51c-1.28 0-2.23 1.18-1.95 2.43z",
      fill: "#F57C00"
    }),
    _react2.default.createElement("path", {
      d:
        "m83.46 48.42-7.11 32.01c-0.2 0.92-1.01 1.57-1.95 1.57h-4.4c-1.1 0-2-0.9-2-2v-32.01c0-1.1 0.9-2 2-2h11.51c1.27 0 2.23 1.18 1.95 2.43z",
      fill: "#F57C00"
    }),
    _react2.default.createElement("path", {
      d:
        "m46.23 45.99h11.53c1.19 0 2.12 1.04 1.99 2.22l-3.55 32c-0.11 1.01-0.97 1.78-1.99 1.78h-4.42c-1.02 0-1.88-0.77-1.99-1.78l-3.56-32.01c-0.13-1.18 0.8-2.21 1.99-2.21z",
      fill: "#F57C00"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m101 30.98v4.53l-0.48 1.48h-2.25c-1.43 0-2.67 1.02-2.94 2.42l-9.73 49.59h-60.52c-0.24 0-0.55-0.28-0.64-0.74-2.54-12.99-9.15-46.84-9.47-48.68-0.2-1.47-1.45-2.59-2.97-2.59h-4c-0.02 0-0.09 0-0.23-0.04-0.37-0.09-0.77-0.43-0.77-0.97v-4c0-0.55 0.45-1 1-1h93m3-3h-96c-2.21 0-4 1.79-4 4v4c0 1.88 1.31 3.45 3.06 3.88 0.3 0.07 0.62 0.12 0.94 0.12h4.01c0 0.28 9.49 48.85 9.49 48.85 0.36 1.84 1.85 3.16 3.58 3.16h62.98l10.21-52.01h4.47v-0.12l1.26-3.88v-8z",
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
          "m34 47.99v32.01h-4.4l-7.11-32.01h11.51m0-2h-11.51c-1.28 0-2.23 1.19-1.95 2.43l7.11 32.01c0.2 0.92 1.01 1.57 1.95 1.57h4.4c1.1 0 2-0.9 2-2v-32.01c0-1.11-0.9-2-2-2z",
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
          "m81.51 47.99-7.11 32.01h-4.4v-32.01h11.51m0-2h-11.51c-1.1 0-2 0.9-2 2v32.01c0 1.1 0.9 2 2 2h4.4c0.94 0 1.75-0.65 1.95-1.57l7.11-32.01c0.28-1.25-0.68-2.43-1.95-2.43z",
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
          "m57.76 47.99-3.56 32.01h-4.42l-3.56-32.01h11.54m0-2h-11.53c-1.19 0-2.12 1.04-1.99 2.22l3.56 32.01c0.11 1.01 0.97 1.78 1.99 1.78h4.42c1.02 0 1.88-0.77 1.99-1.78l3.56-32.01c0.12-1.19-0.8-2.22-2-2.22z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 59.958,
        x2: 59.958,
        y1: -11.408,
        y2: 129.05,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#90A4AE",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#607D8B",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.53 7.59c-2.36 0.79-4.19 2.68-4.9 5.06l-23.46 78.2c-0.29 0.98-0.2 2.03 0.25 2.94l3.66 7.32c0.67 1.33-0.3 2.9-1.79 2.9h-70.29c-2.34 0-4.21 2.01-3.98 4.39 0.2 2.08 2.06 3.61 4.15 3.61h79.68c0.97 0 1.95-0.29 2.7-0.91 1.48-1.24 1.84-3.26 1.03-4.88l-5.65-11.29c-1.06-2.11-1.27-4.55-0.59-6.81l21.59-71.99c0.15-0.52 0.51-0.93 0.98-1.18l-3.32-7.37-0.06 0.01z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m123.45 5.95c-0.95-1.66-3-2.34-4.81-1.73l-10.04 3.35 3.32 7.37c0.1-0.05 0.19-0.11 0.3-0.14l9.04-3.02c2.36-0.79 3.5-3.55 2.19-5.83z",
      fill: "#F57C00"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m119.97 6c0.74 0 1.41 0.36 1.74 0.94 0.43 0.75 0.28 1.41 0.15 1.75-0.22 0.56-0.67 1-1.24 1.19l-9.04 3.02c-0.26 0.09-0.45 0.19-0.61 0.28-0.96 0.51-1.65 1.35-1.96 2.37l-21.58 71.98c-0.83 2.76-0.57 5.7 0.71 8.28l5.65 11.29c0.42 0.83 0.2 1.84-0.53 2.45-0.34 0.29-0.85 0.45-1.41 0.45h-79.68c-1.12 0-2.07-0.79-2.16-1.8-0.06-0.58 0.13-1.13 0.51-1.55s0.91-0.65 1.48-0.65h70.29c1.4 0 2.67-0.71 3.4-1.9s0.8-2.64 0.18-3.89l-3.66-7.32c-0.23-0.46-0.27-0.98-0.13-1.47l23.46-78.2c0.53-1.76 1.88-3.15 3.62-3.73l0.06-0.02 10.04-3.35c0.24-0.08 0.47-0.12 0.71-0.12m0-2c-0.45 0-0.9 0.07-1.34 0.22l-10.04 3.35-0.06 0.02c-2.36 0.79-4.19 2.68-4.9 5.06l-23.46 78.2c-0.29 0.98-0.2 2.03 0.25 2.94l3.66 7.32c0.67 1.33-0.3 2.9-1.79 2.9h-70.29c-2.34 0-4.21 2.01-3.98 4.39 0.2 2.08 2.06 3.61 4.15 3.61h79.68c0.97 0 1.95-0.29 2.7-0.91 1.48-1.24 1.84-3.26 1.03-4.88l-5.65-11.29c-1.06-2.11-1.27-4.55-0.59-6.81l21.59-71.99c0.15-0.52 0.51-0.93 0.98-1.18 0.1-0.05 0.19-0.11 0.3-0.14l9.04-3.02c2.35-0.79 3.49-3.55 2.19-5.83-0.71-1.27-2.06-1.96-3.47-1.96z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 28,
      cy: 116,
      r: 8,
      fill: "#37474F"
    }),
    _react2.default.createElement("circle", {
      cx: 80,
      cy: 116,
      r: 8,
      fill: "#37474F"
    }),
    _react2.default.createElement("path", {
      d: "m30 120h-4c-1.1 0-2-0.9-2-2v-10h8v10c0 1.1-0.9 2-2 2z",
      fill: "#B0BEC5"
    }),
    _react2.default.createElement("circle", {
      cx: 28,
      cy: 114,
      r: 2,
      fill: "#FAFAFA",
      stroke: "#757575",
      strokeMiterlimit: 10,
      strokeWidth: 1.0001
    }),
    _react2.default.createElement("path", {
      d: "m82 120h-4c-1.1 0-2-0.9-2-2v-10h8v10c0 1.1-0.9 2-2 2z",
      fill: "#B0BEC5"
    }),
    _react2.default.createElement("circle", {
      cx: 80,
      cy: 114,
      r: 2,
      fill: "#FAFAFA",
      stroke: "#757575",
      strokeMiterlimit: 10,
      strokeWidth: 1.0001
    })
  );
}

exports.default = ShoppingCart;
