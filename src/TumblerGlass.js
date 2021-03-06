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

function TumblerGlass(props) {
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
        id: "d",
        x1: 64,
        x2: 64,
        y1: 14.706,
        y2: 111.23,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DEE1E3",
        offset: 0.1378
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8C9194",
        offset: 0.707
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.971
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.19 5.37c-46.94 0-52.04 9.19-53.1 11.08l2.31 86.61c0 9.38 13.78 21.16 49.63 21.16s49.27-13.15 49.58-21.16c0-0.12 2.32-86.61 2.32-86.61s-3.81-11.08-50.74-11.08z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m65.19 8.68c36.98 0 45.77 6.96 47.39 8.72-0.44 16.34-2.24 83.68-2.29 85.54-0.11 2.59-2.73 6.96-9.74 10.78-6.01 3.27-17.23 7.17-36.53 7.17-33.98 0-46.31-10.67-46.31-17.84v-0.09l-2.28-85.54c2.23-2.69 11.53-8.74 49.76-8.74m0-3.31c-46.94 0-52.04 9.19-53.1 11.08l2.31 86.61c0 9.38 13.78 21.16 49.63 21.16s49.27-13.15 49.58-21.16c0-0.12 2.32-86.61 2.32-86.61s-3.81-11.08-50.74-11.08z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 70.593,
        y2: 108.88,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#54130E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BD5106",
        offset: 0.4135
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C55B05",
        offset: 0.4666
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E48602",
        offset: 0.7039
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8A001",
        offset: 0.8897
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fa0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.69 71.58c-25.93 0-46.95-4.38-46.95-8.7l1.15 27.99c0 7.06 13.5 15.8 46.13 15.8s45.8-9.78 46.08-15.8c0-0.05 1.16-10.75 1.16-27.95-0.07 4.32-21.69 8.66-47.57 8.66z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d: "m111.26 62.88v0.04-0.02c0.01-0.01 0-0.01 0-0.02z",
      fill: "#FFF0CA"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64.046,
        x2: 64.046,
        y1: 47.134,
        y2: 74.327,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#54130E",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BD5106",
        offset: 0.1891
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C55B05",
        offset: 0.2624
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E48602",
        offset: 0.5905
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8A001",
        offset: 0.8475
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fa0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m63.73 54.78c-25.95 0-46.99 3.59-46.99 8.01s21.04 8.91 46.99 8.91c25.91 0 47.55-4.45 47.62-8.87v-0.04c-0.07-4.41-21.71-8.01-47.62-8.01z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 5.2176,
        y2: 30.645,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#DEE1E3",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.8536
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M115.92,14.78c0,5.88-23.24,10.05-51.92,10.05s-51.92-4.16-51.92-10.05S35.33,4.13,64,4.13 S115.92,8.9,115.92,14.78z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 7.44c12.59 0 24.66 0.94 33.99 2.65 9.22 1.69 13.1 3.66 14.3 4.66-1.01 0.8-4.34 2.71-14.35 4.39-9.16 1.53-21.21 2.38-33.94 2.38s-24.79-0.84-33.94-2.38c-10.01-1.67-13.34-3.58-14.35-4.39 1.2-1 5.08-2.97 14.3-4.66 9.33-1.71 21.4-2.65 33.99-2.65m0-3.31c-28.67 0-51.92 4.77-51.92 10.65s23.25 10.05 51.92 10.05 51.92-4.16 51.92-10.05-23.25-10.65-51.92-10.65z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("polygon", {
      points:
        "58.35 65.07 58.66 65.81 68.68 90.16 95.64 88.19 104.28 70.92 95.81 48.47 71.76 48.82",
      fill: "#CFD6D5",
      opacity: 0.73
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.62
      },
      _react2.default.createElement("polygon", {
        points:
          "29.62 56.49 29.51 57.29 26.06 83.39 50.42 95.12 66.52 84.46 70.37 60.78 49.34 49.09",
        fill: "#CFD6D5"
      })
    )
  );
}

exports.default = TumblerGlass;
