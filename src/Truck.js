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

function Truck(props) {
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
        x1: 64.039,
        x2: 64.039,
        y1: 39,
        y2: 101.26,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF8E1",
        offset: 0.0074201
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF6DA",
        offset: 0.1774
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF2C8",
        offset: 0.4164
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEAAA",
        offset: 0.6962
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE082",
        offset: 0.9948
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124.19,53.28c0-5.11-4.18-9.28-9.28-9.28H17.33c-5.11,0-9.28,4.18-9.28,9.28L3.88,91.5 h120.31V53.28z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "M3.88,91.5v11.22c0,5.11,4.18,9.28,9.28,9.28h101.74c5.11,0,9.28-4.18,9.28-9.28V91.5H3.88z",
      fill: "#66BB6A"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m18.41 47 97.5 0.5c3.45 0 5.49 2.12 5.49 5.51l-0.4 38.49v10.79c0 3.84-3.32 6.64-5.1 6.64l-101.74 0.11c-6.05 0-7.3-3.81-7.3-6.99l0.04-10.63 4.13-38.09 0.02-0.1c0.37-5.15 4.21-6.23 7.36-6.23m0.01-3c-5.62 0-9.92 2.92-10.36 9l-4.15 38.25-0.03 10.79c0 5.11 2.82 10 10.32 10l101.69-0.11c3.58 0 8.1-4.27 8.1-9.64v-10.79l0.4-38.47c0-5.11-3.44-8.53-8.54-8.53l-97.43-0.5z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m29.9 75.34h-14.59c-1.65 0-2.85-1.31-2.67-2.92l1.75-15.51c0.18-1.61 1.67-2.92 3.33-2.92h12.93c1.65 0 2.85 1.31 2.67 2.92l-0.1 15.51c-0.18 1.62-1.67 2.92-3.32 2.92z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 80.097,
        x2: 80.097,
        y1: 29.333,
        y2: 90.334,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BCAAA4",
        offset: 0.0048889
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC958E",
        offset: 0.3916
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8D6E63",
        offset: 0.9986
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124.19,91.65H36v-59.3c0-2.21,1.79-4,4-4h80.19c2.21,0,4,1.79,4,4V91.65z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30.65 56c0.24 0 0.43 0.07 0.55 0.21 0.11 0.12 0.15 0.28 0.13 0.48-0.01 0.07-0.01 0.14-0.01 0.21l-0.1 15.38c-0.11 0.57-0.72 1.06-1.33 1.06h-14.58c-0.24 0-0.43-0.07-0.55-0.21-0.11-0.12-0.15-0.28-0.13-0.48l1.75-15.51c0.07-0.6 0.71-1.14 1.34-1.14h12.93m0-2h-12.93c-1.65 0-3.14 1.31-3.33 2.92l-1.75 15.51c-0.18 1.61 1.01 2.92 2.67 2.92h14.59c1.65 0 3.14-1.31 3.33-2.92l0.1-15.51c0.17-1.61-1.02-2.92-2.68-2.92z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 76.33,
      y: 28.35,
      width: 11.29,
      height: 23.65,
      fill: "#6D4C41"
    }),
    _react2.default.createElement("rect", {
      x: 76.33,
      y: 68.84,
      width: 11.29,
      height: 22.81,
      fill: "#6D4C41"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m120.19 31.35c0.55 0 1 0.45 1 1v56.3h-82.19v-56.3c0-0.55 0.45-1 1-1h80.19m0-3h-80.19c-2.21 0-4 1.79-4 4v59.3h88.19v-59.3c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 30,
      cy: 110,
      r: 14,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m30 98c6.62 0 12 5.38 12 12s-5.38 12-12 12-12-5.38-12-12 5.38-12 12-12m0-2c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 30,
      cy: 110,
      r: 6,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 102,
      cy: 110,
      r: 14,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102 98c6.62 0 12 5.38 12 12s-5.38 12-12 12-12-5.38-12-12 5.38-12 12-12m0-2c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 102,
      cy: 110,
      r: 6,
      fill: "#BDBDBD"
    })
  );
}

exports.default = Truck;
