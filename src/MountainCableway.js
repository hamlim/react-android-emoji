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

function MountainCableway(props) {
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
        x1: 64.071,
        x2: 64.071,
        y1: 49,
        y2: 106,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.00035297
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.2905
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.5702
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CBCBCB",
        offset: 0.8447
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9976
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M116.15,61.83c0-7.7-6.31-14-14.02-14H26.02c-7.71,0-14.02,6.3-14.02,14l-0.01,41.92H116 L116.15,61.83z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "M11.99,103.75c1.59,7.19,9.88,12.72,19.82,12.72h64.37c9.94,0,18.23-5.53,19.82-12.72H11.99z",
      fill: "#0277BD"
    }),
    _react2.default.createElement("path", {
      d:
        "m56.32 96h-12.06c-2.21 0-4-1.79-4-4v-28.33c0-2.21 1.79-4 4-4h12.06c2.21 0 4 1.79 4 4v28.33c0 2.21-1.79 4-4 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m84.49 96h-12.06c-2.21 0-4-1.79-4-4v-28.33c0-2.21 1.79-4 4-4h12.06c2.21 0 4 1.79 4 4v28.33c0 2.21-1.79 4-4 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.13 51c6.08 0 11.02 4.82 11.02 10.83l-0.15 41.56c-1.5 5.86-8.81 10.61-16.82 10.61h-64.37c-8.02 0-15.32-4.75-16.82-10.55l0.01-41.68c0-5.92 4.94-10.77 11.02-10.77h75.98m0.13-3h-76.11c-7.71 0-14.02 5.98-14.02 13.64l-0.01 42.21c1.59 7.15 9.88 13.15 19.82 13.15h64.37c9.94 0 18.23-6.14 19.82-13.3l0.15-41.74c0-7.66-6.31-13.96-14.02-13.96z",
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
          "m56.32 62.67c0.55 0 1 0.45 1 1v28.33c0 0.55-0.45 1-1 1h-12.06c-0.55 0-1-0.45-1-1v-28.33c0-0.55 0.45-1 1-1h12.06m0-3h-12.06c-2.21 0-4 1.79-4 4v28.33c0 2.21 1.79 4 4 4h12.06c2.21 0 4-1.79 4-4v-28.33c0-2.21-1.79-4-4-4z",
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
          "m84.49 62.67c0.55 0 1 0.45 1 1v28.33c0 0.55-0.45 1-1 1h-12.06c-0.55 0-1-0.45-1-1v-28.33c0-0.55 0.45-1 1-1h12.06m0-3h-12.06c-2.21 0-4 1.79-4 4v28.33c0 2.21 1.79 4 4 4h12.06c2.21 0 4-1.79 4-4v-28.33c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M115.99,96H99.93c-2.21,0-4-1.79-4-4V63.67c0-2.21,1.79-4,4-4h16.06V96z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "m28.15 96h-16.05v-36.33h16.06c2.21 0 4 1.79 4 4v28.33c-0.01 2.21-1.8 4-4.01 4z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m112.99 62.67v30.33h-13.06c-0.55 0-1-0.45-1-1v-28.33c0-0.55 0.45-1 1-1h13.06m3-3h-16.06c-2.21 0-4 1.79-4 4v28.33c0 2.21 1.79 4 4 4h16.06v-36.33z",
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
          "m28.15 62.67c0.55 0 1 0.45 1 1v28.33c0 0.55-0.45 1-1 1h-13.05v-30.33h13.05m0-3h-16.05v36.33h16.06c2.21 0 4-1.79 4-4v-28.33c-0.01-2.21-1.8-4-4.01-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#546E7A"
      },
      _react2.default.createElement("path", {
        d:
          "m80 44.13c0 2.14-1.73 3.87-3.87 3.87h-24.26c-2.14 0-3.87-1.73-3.87-3.87v-0.25c0-2.14 1.73-3.87 3.87-3.87h24.25c2.14 0 3.87 1.73 3.87 3.87v0.25z"
      }),
      _react2.default.createElement("path", {
        d:
          "m75 18.13c0 2.14-1.73 3.87-3.87 3.87h-15.26c-2.14 0-3.87-1.73-3.87-3.87v-0.25c0-2.14 1.73-3.87 3.87-3.87h15.25c2.14 0 3.87 1.73 3.87 3.87v0.25z"
      }),
      _react2.default.createElement("rect", {
        x: 60,
        y: 25,
        width: 8,
        height: 17
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M122.06,23H5.94C4.87,23,4,21.59,4,20s0.87-3,1.94-3h116.13c1.07,0,1.94,1.41,1.94,3 S123.13,23,122.06,23z",
      fill: "#263238"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121.88 19c0.1 0.18 0.18 0.53 0.18 1s-0.2 0.82-0.3 1h-115.52c-0.1-0.18-0.24-0.53-0.24-1s0.14-0.82 0.24-1h115.76m0.06-2h-116.12c-1.07 0-1.94 1.41-1.94 3s0.87 3 1.94 3h116.13c1.07 0 1.94-1.41 1.94-3s-0.88-3-1.95-3z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#90A4AE"
      },
      _react2.default.createElement("path", {
        d:
          "m50 25.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-9c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v9z"
      }),
      _react2.default.createElement("path", {
        d:
          "m82 25.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-9c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v9z"
      }),
      _react2.default.createElement("rect", {
        x: 48,
        y: 16,
        width: 32,
        height: 9
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M79.5,16c0.28,0,0.5,0.22,0.5,0.5v9c0,0.28-0.22,0.5-0.5,0.5S79,25.78,79,25.5V25c0-1.1-0.9-2-2-2 h-9c-1.1,0-2,0.9-2,2v15c0,1.1,0.9,2,2,2h8.12c1.03,0,1.88,0.84,1.88,1.88v0.25c0,1.03-0.84,1.88-1.88,1.88H51.88 C50.84,46,50,45.16,50,44.12v-0.25c0-1.03,0.84-1.88,1.88-1.88H60c1.1,0,2-0.9,2-2V25c0-1.1-0.9-2-2-2H50c-1.1,0-2,0.9-2,2v0.5 c0,0.28-0.22,0.5-0.5,0.5S47,25.78,47,25.5v-9c0-0.28,0.22-0.5,0.5-0.5c0.27,0,0.45,0.2,0.49,0.4C48.18,17.33,49,18,49.95,18h2.55 c0.73,0,1.39-0.39,1.75-1.03C54.59,16.36,55.2,16,55.88,16h15.25c0.68,0,1.28,0.36,1.62,0.97C73.1,17.61,73.77,18,74.5,18h2.55 c0.95,0,1.77-0.67,1.96-1.6C79.05,16.2,79.23,16,79.5,16 M79.5,14c-1.21,0-2.22,0.86-2.45,2H74.5c-0.66-1.19-1.92-2-3.37-2H55.88 c-1.46,0-2.71,0.81-3.37,2h-2.55c-0.23-1.14-1.24-2-2.45-2c-1.38,0-2.5,1.12-2.5,2.5v9c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5 V25h10v15h-8.12C49.73,40,48,41.73,48,43.88v0.25c0,2.14,1.73,3.88,3.88,3.88h24.25c2.14,0,3.88-1.73,3.88-3.88v-0.25 c0-2.14-1.73-3.88-3.88-3.88H68V25h9v0.5c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5v-9C82,15.12,80.88,14,79.5,14L79.5,14z",
        fill: "#424242"
      })
    )
  );
}

exports.default = MountainCableway;
