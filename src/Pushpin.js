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

function Pushpin(props) {
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
        id: "e",
        x1: 26.276,
        x2: 30.86,
        y1: 99.27,
        y2: 103.86,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F5F5F5",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EFEFEF",
        offset: 0.1455
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DFDFDF",
        offset: 0.3368
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C3C3C3",
        offset: 0.5535
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 0.7872
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.2 83.75c0.51-0.53 1.04-1.05 1.6-1.51 1.63-1.37 5.88-4.55 8.17-3.23 1.36 0.78 1.16 3.4 0.66 4.49-1.24 2.69-4.4 4.96-6.34 7.19-1.52 1.77-3.36 3.36-5.02 5.02-2.66 2.66-5.21 5.65-8.08 8.08-0.01 0-23.01 19.42-23.01 19.42l-1.79-1.79 19.43-23.02c3.65-3.65 7.29-7.3 10.94-10.94 1.18-1.16 2.28-2.49 3.44-3.71z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 45.737,
        x2: 101.24,
        y1: 26.909,
        y2: 82.414,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.0048445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC3E33",
        offset: 0.1943
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D4302C",
        offset: 0.4956
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 0.6496
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.2 83.97c-4.56-4.91-8.61-10.23-11.9-15.74-2.51-4.2-8.32-13.99-3.68-18.65l4.06-4.06c3.81-3.8 13.84-0.3 24.98 7.94l25.16-25.16c-6.31-8.37-9.3-15.34-7-17.64l5.13-5.14c3.34-3.34 16.6 4.5 29.62 17.52 13.01 13.01 20.86 26.28 17.51 29.62l-5.13 5.13c-2.31 2.3-9.28-0.69-17.64-7l-25.15 25.16c8.24 11.15 11.74 21.18 7.94 24.99l-4.06 4.06c-4.8 4.8-15.03-1.45-19.3-4.07-7.37-4.51-14.41-10.36-20.54-16.96z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 76.383,
        x2: 123.83,
        y1: 28.376,
        y2: 28.376,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0.0020297
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F34949",
        offset: 0.0742
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D93535",
        offset: 0.2674
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62727",
        offset: 0.4653
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BB1F1F",
        offset: 0.6692
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.8882
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m123.24 51.51c-2.88 2.88-15.58-5.13-28.36-17.91s-20.79-25.47-17.91-28.36c2.88-2.88 15.58 5.13 28.36 17.91s20.79 25.48 17.91 28.36z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 28.306,
        x2: 83.572,
        y1: 71.41,
        y2: 71.41,
        gradientTransform: "matrix(1.05 -.0221 -.0221 1.05 -.9456 -1.1929)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FF5252",
        offset: 0.0020297
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E13B3B",
        offset: 0.1867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CA2A2A",
        offset: 0.3739
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BC2020",
        offset: 0.5502
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.7029
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m83.63 100.27c-3.58 3.58-18.83-5.85-34.05-21.07s-24.66-30.47-21.08-34.05 19.46 1.31 36.74 18.86c16.76 17.01 21.97 32.68 18.39 36.26z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 62.324,
        x2: 85.261,
        y1: 42.761,
        y2: 65.697,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F44336",
        offset: 0.0048445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EC3E32",
        offset: 0.1454
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D42F29",
        offset: 0.3689
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 0.5918
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m48.85 56.47 28.97-28.17s5.48 7.25 9.65 11.5 12.86 11 12.86 11l-28.12 28.11s-6.14-2.45-13.18-9.49c-8.2-8.19-10.18-12.95-10.18-12.95z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m77.99 7.65m0.62 0.01c0.36 0 2.38 0.16 7.39 3.36 0.02 0.01 0.04 0.02 0.06 0.04 5.27 3.21 11.42 8.22 17.3 14.1 6.52 6.52 12.02 13.44 15.07 18.96 0.01 0.02 0.02 0.03 0.03 0.05 2.1 3.63 2.27 5.2 2.27 5.59 0 0.1 0.01 0.19 0.02 0.29 0.03 0.32 0.02 0.51 0 0.61l-4.87 4.88c-0.05 0.01-0.14 0.02-0.26 0.02-1.89 0-6.57-1.88-13.58-7.16-0.54-0.41-1.17-0.61-1.81-0.61-0.77 0-1.54 0.3-2.12 0.88l-25.01 25.02c-1.04 1.04-1.17 2.69-0.31 3.88 4.71 6.52 6.87 11.42 7.86 14.4l0.11 0.33c1.21 3.81 0.85 5.56 0.64 5.86-0.11 0.12-0.2 0.25-0.29 0.39-0.07 0.11-0.14 0.2-0.22 0.27l-4.06 4.06c-0.38 0.38-1.06 0.88-2.59 0.88-4.24 0-10.39-3.78-13.02-5.39-5.06-3.1-10-6.88-14.68-11.23-0.58-0.54-1.31-0.8-2.04-0.8-0.76 0-1.52 0.29-2.11 0.86-0.45 0.44-0.97 0.97-1.46 1.53-0.93 1.08-2.01 2.11-3.15 3.19-0.58 0.55-1.16 1.1-1.72 1.66-0.9 0.9-1.79 1.84-2.65 2.75-1.69 1.79-3.44 3.63-5.24 5.16l0.02 0.03c-0.74 0.59-2.55 2.11-7.37 6.18l6.13-7.26 6.8-6.8 4.04-4.05c0.73-0.73 1.42-1.49 2.08-2.24 0.43-0.48 0.87-0.97 1.31-1.44 1.09-1.15 1.1-2.94 0.02-4.1-4.46-4.81-8.3-9.9-11.43-15.13-4.75-7.93-6.13-12.98-4.13-14.99l4.05-4.06c0.54-0.53 1.53-0.65 2.28-0.65 1.31 0 3 0.35 4.89 1 0.02 0.01 0.03 0.01 0.05 0.02 2.85 0.94 7.54 2.98 13.7 7.38 0.53 0.38 1.14 0.56 1.75 0.56 0.76 0 1.51-0.29 2.09-0.85l25.37-24.66c1.08-1.05 1.21-2.75 0.3-3.96-6.01-7.97-7.4-12.66-7.15-13.83l4.89-4.89c0.03 0 0.06-0.01 0.1-0.01 0.2-0.02 0.37-0.04 0.56-0.1 0 0.03 0.03 0.02 0.09 0.02m-5.62 4.92m5.62-7.92c-0.33 0-0.63 0.04-0.9 0.12-0.77 0.06-1.4 0.3-1.85 0.75l-5.13 5.14c-2.3 2.3 0.69 9.27 7 17.64l-25.37 24.65c-5.49-3.93-10.47-6.47-14.51-7.8-2.19-0.76-4.18-1.16-5.87-1.16-1.86 0-3.36 0.49-4.4 1.52l-4.06 4.06c-4.64 4.65 1.16 14.44 3.68 18.65 3.27 5.47 7.29 10.76 11.81 15.63-1.12 1.19-2.19 2.47-3.33 3.61-3.64 3.65-7.29 7.3-10.94 10.94l-19.43 23.02 1.79 1.79s23-19.42 23.01-19.42c2.88-2.43 5.43-5.42 8.08-8.08 1.66-1.66 3.49-3.24 5.02-5.02 0.39-0.45 0.83-0.9 1.29-1.35 4.74 4.4 9.86 8.34 15.15 11.59 3.15 1.93 9.53 5.83 14.59 5.83 1.81 0 3.45-0.5 4.71-1.76l4.06-4.06c0.24-0.24 0.45-0.51 0.63-0.79 1.27-1.44 1.31-4.54-0.03-8.76-0.04-0.12-0.08-0.25-0.12-0.37-1.39-4.19-4.1-9.44-8.27-15.2l25.02-25.02c6.46 4.88 12.09 7.77 15.38 7.77 0.97 0 1.73-0.25 2.25-0.77l5.13-5.13c0.63-0.63 0.86-1.63 0.73-2.9-0.01-1.66-0.96-4.11-2.67-7.08-3.07-5.56-8.57-12.63-15.57-19.63-6.28-6.31-12.61-11.38-17.87-14.57-3.83-2.46-7-3.84-9.01-3.84z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Pushpin;
