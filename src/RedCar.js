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

function RedCar(props) {
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
        x1: 64.094,
        x2: 64.094,
        y1: 125.12,
        y2: 72.522,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.2851
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D6D6D6",
        offset: 0.4965
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E8E8E8",
        offset: 0.7096
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.863
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124.15 86.83 0.04 24.17c0 2.83-2.5 4.87-7.92 4.87h-102.73c-6.1 0.07-9.54-1.28-9.54-9.62v-2c0.12-13.75 8.52-15.85 19.31-18.22 9.86-2.17 14.94-8.44 18.75-11.12 9.84-6.92 17-11.62 37.25-11.62 23.58 0 33.23 17.19 37.77 17.64 5 0.49 6.92 2.75 7.07 5.9z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "m107.59 83.52c-4.07-7.69-11.36-14.52-28.99-14.52s-31.01 6.63-39.97 16.1c-1.8 1.91 0.28 4.9 3.37 4.9h61.87c3.42 0 4.92-4.21 3.72-6.48z",
      fill: "#546E7A"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m124.15 86.83 0.04 24.17c0 2.83-2.5 4.87-7.92 4.87h-102.73c-6.1 0.07-9.54-1.28-9.54-9.62v-2c0.12-13.75 8.52-15.85 19.31-18.22 9.86-2.17 14.94-8.44 18.75-11.12 9.84-6.92 17-11.62 37.25-11.62 23.58 0 33.23 17.19 37.77 17.64 5 0.49 6.92 2.75 7.07 5.9z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)"
      },
      _react2.default.createElement("path", {
        d:
          "M126,99.1l-7.06-10c-1.37-1.9,0.76-2.19,1.69-2.19h3.16c2.03,0,2.38,1.82,2.38,1.82L126,99.1z",
        fill: "#F44336"
      }),
      _react2.default.createElement("path", {
        d:
          "m-2.92 101.5h11.29c5.39 0 6.77-1.09 7.87-3.07 0 0 2.65-3.57-4.04-3.57h-10.12c-0.37 0-0.73 0.02-1.09 0.06-1.89 1.62-3.57 3.71-3.91 6.58z",
        fill: "#FFEB3B"
      })
    ),
    _react2.default.createElement("path", {
      d: "m82.67 87.94",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d: "m78 71.16",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement("path", {
      d:
        "m107.59 83.52c-4.07-7.69-11.36-14.52-28.99-14.52s-31.01 6.63-39.97 16.1c-1.8 1.91 0.28 4.9 3.37 4.9h61.87c3.42 0 4.92-4.21 3.72-6.48zm-66.4 3.25c6.61-6.83 18.4-14.77 37.41-14.77 2.34 0 4.46 0.13 6.4 0.36v14.64h-42.99c-0.36 0-0.64-0.11-0.82-0.23zm63.49-0.31c-0.33 0.54-0.66 0.54-0.8 0.54h-15.88v-14.17c10.21 2.01 14.42 7.32 16.94 12.09 0.1 0.2 0.11 0.92-0.26 1.54z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 42.354,
        x2: 42.354,
        y1: 82.828,
        y2: 97.48,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FAFAFA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.1656
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C2C2C2",
        offset: 0.4873
      }),
      _react2.default.createElement("stop", {
        stopColor: "#808080",
        offset: 0.9297
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m45.19 92h-5.68c-2.02 0-3.68-1.66-3.68-3.68v-1.06c0-2.02 9.36-3.68 9.36-3.68 2.02-0.38 3.68 1.66 3.68 3.68v1.06c0.01 2.02-1.65 3.68-3.68 3.68z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m79.31 66.28c15.55 0 24.41 7.85 30.27 13.04 2.96 2.62 4.91 4.35 7.2 4.58 4.15 0.41 4.31 2.01 4.36 3l0.04 24.09c0 1.38-2.65 1.87-4.92 1.87h-102.77-0.38c-2.52 0-3.98-0.31-4.75-0.99-0.9-0.8-1.36-2.7-1.36-5.62v-1.97c0.1-11.1 5.88-12.88 16.96-15.32 8.29-1.82 13.4-6.2 17.13-9.4 1.03-0.89 1.93-1.65 2.7-2.2 9.14-6.44 15.75-11.08 35.52-11.08m0-3c-20.25 0-27.41 4.7-37.25 11.62-3.81 2.68-8.89 8.95-18.75 11.12-10.79 2.38-19.19 4.48-19.31 18.23v2c0 8.15 3.28 9.62 9.12 9.62h0.41 102.74c5.42 0 7.92-2.04 7.92-4.87l-0.04-24.17c-0.15-3.15-2.06-5.42-7.06-5.92-4.55-0.45-14.19-17.63-37.78-17.63z",
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
          "m45.69 85.53c0.52 0 1.19 0.84 1.19 1.73v1.06c0 0.93-0.75 1.68-1.68 1.68h-5.68c-0.93 0-1.68-0.75-1.68-1.68v-0.51c1.06-0.68 4.44-1.68 7.73-2.26 0.04-0.01 0.08-0.02 0.12-0.02m0-2c-0.16 0-0.33 0.02-0.49 0.05 0 0-9.36 1.66-9.36 3.68v1.06c0 2.02 1.66 3.68 3.68 3.68h5.68c2.02 0 3.68-1.66 3.68-3.68v-1.06c0-1.86-1.4-3.73-3.19-3.73z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 31.73,
      cy: 114.02,
      r: 10,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m31.73 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 31.73,
      cy: 114.02,
      r: 5.65,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("circle", {
      cx: 102.85,
      cy: 114.02,
      r: 10,
      fill: "#4E342E"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m102.85 105.02c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 102.85,
      cy: 114.02,
      r: 5.65,
      fill: "#BDBDBD"
    })
  );
}

exports.default = RedCar;
