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

function MotorBoat(props) {
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
        id: "g",
        x1: 64.101,
        x2: 64.101,
        y1: 77.109,
        y2: 124,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0288D1",
        offset: 0.9826
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m124 124h-119.8v-44.4c0-5.73 37.06-11 68.83-2.71 37.35 9.73 50.97 2.71 50.97 2.71v44.4z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37.5 75.59c8.52 0 21.48 0.73 34.77 4.19 13.39 3.49 25.3 5.26 35.39 5.26 6.12 0 10.47-0.65 13.34-1.33v37.29h-113.8v-40.81c2.08-1.68 12.63-4.6 30.3-4.6m0-3c-18.71 0-33.3 3.41-33.3 7.01v44.4h119.8v-44.4s-4.75 2.45-16.34 2.45c-8.03 0-19.35-1.18-34.63-5.16-11.84-3.09-24.41-4.3-35.53-4.3z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120.68 57.18-26.66-2.23 0.34-3.99 26.51 2.37c1.03 0.09 1.82 0.96 1.82 1.99 0 1.1-0.93 1.95-2.01 1.86z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m79.57 42.83 13.91-1.55c0.52-0.06 1 0.26 1.14 0.74l1.64 5.62c0.23 0.77-0.5 1.49-1.3 1.29l-15.55-4.07c-1.13-0.3-1-1.9 0.16-2.03z",
      fill: "#757575"
    }),
    _react2.default.createElement("rect", {
      x: 114.36,
      y: 55.5,
      width: 3.93,
      height: 12,
      fill: "#757575"
    }),
    _react2.default.createElement("rect", {
      x: 104,
      y: 55.5,
      width: 3.93,
      height: 12,
      fill: "#757575"
    }),
    _react2.default.createElement("rect", {
      x: 52,
      y: 84.33,
      width: 0,
      height: 0.67,
      fill: "#F2F2F2"
    }),
    _react2.default.createElement("path", {
      d: "m54.5 29.83",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m20 56.33",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m58.5 29.83",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m24 56.33",
      fill: "none",
      stroke: "#f00",
      strokeMiterlimit: 10,
      strokeWidth: 0.25
    }),
    _react2.default.createElement("path", {
      d: "m50 54",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d: "m49 53.5",
      fill: "#808080"
    }),
    _react2.default.createElement("polygon", {
      points: "70.83 64 70.83 64 70.83 64 70.83 64 70.83 64 70.83 64 70.83 64",
      fill: "#999"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.89 42c17.34 0.19 31.29 3.95 31.29 3.95l3.14 17.05-87.69-2.89s33.61-18.33 53.26-18.11z",
      fill: "#ECEFF1"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "f",
        d:
          "m64.89 42c17.34 0.19 31.29 3.95 31.29 3.95l3.14 17.05-87.69-2.89s33.61-18.33 53.26-18.11z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#f"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m49.85 55.53-40.8-2.29 18.81-10.55 25.61 1.45c1.8 0.1 3.27 1.24 3.53 2.73l-1.45 4.7c-0.77 2.47-3.12 4.1-5.7 3.96z",
      clipPath: "url(#a)",
      fill: "#039BE5"
    }),
    _react2.default.createElement("path", {
      d:
        "m83.64 57.18-16.98-0.94c-0.86-0.05-1.6-0.65-1.81-1.49l-1.61-6.37c-0.33-1.3 0.71-2.55 2.05-2.46l16.48 1.12c0.79 0.05 1.48 0.58 1.74 1.33l2.11 6.19c0.45 1.34-0.59 2.7-1.98 2.62z",
      clipPath: "url(#a)",
      fill: "#039BE5"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 15.713,
        x2: 65.303,
        y1: 74.326,
        y2: 74.326,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#81D4FA",
        offset: 0.0039768
      }),
      _react2.default.createElement("stop", {
        stopColor: "#29B6F6",
        offset: 0.9093
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m16.77 73.08c1.85-1.49 4.69-2.59 7.08-2.62-0.73-0.11-1.63-0.33-2.06-1-0.38-0.59-0.28-1.42 0.17-1.95 0.95-1.12 3.64-0.84 4.95-0.88 1.9-0.06 3.98-0.14 5.93 0.06-0.59-0.25-1.12-0.71-1.35-1.33-0.26-0.72-0.01-1.65 0.67-2.01 0.56-0.3 1.24-0.18 1.86-0.04 12.31 2.73 23.31 9.54 31.07 19.51 1.18 1.52-2.91 3.52-4.76 2.26-14.83-10.08-36.83 0-42.57-3.44-0.83-0.5-1.46-1.51-1.22-2.45 0.59-2.28 3.81-2.91 5.25-3.35-1.33 0.14-4.73 0.48-5.08 0.37-0.66-0.21-1.07-0.96-0.99-1.66 0.06-0.49 0.45-0.99 1.05-1.47z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m34.41 65.46c11.26 2.68 21.31 8.96 28.47 17.79-0.31 0.13-0.69 0.24-1.07 0.24-0.21 0-0.33-0.04-0.35-0.05-4.92-3.34-11.01-4.97-18.62-4.97-4.77 0-9.37 0.62-13.43 1.16-3.08 0.41-5.73 0.77-7.79 0.77-1.7 0-2.48-0.25-2.83-0.47-0.15-0.09-0.25-0.22-0.29-0.31 0.32-0.86 2.29-1.41 3.26-1.68 0.23-0.07 0.44-0.13 0.63-0.18 0.98-0.3 1.57-1.3 1.37-2.31-0.19-0.94-1.02-1.6-1.96-1.6-0.07 0-0.14 0-0.2 0.01-1.16 0.12-2.12 0.21-2.86 0.27 1.52-0.98 3.52-1.65 5.14-1.67 1.04-0.01 1.9-0.83 1.97-1.87 0.05-0.85-0.42-1.61-1.16-1.95 0.22-0.01 0.47-0.02 0.76-0.02 0.21 0 0.41 0 0.6 0.01h0.54c0.14 0 0.27 0 0.39-0.01l0.33-0.01c0.87-0.03 1.77-0.06 2.66-0.06 1.03 0 1.91 0.04 2.68 0.12 0.07 0.01 0.14 0.01 0.21 0.01 0.9 0 1.71-0.61 1.94-1.5 0.13-0.61-0.02-1.25-0.39-1.72m-1.42-2.29c-0.29 0-0.57 0.05-0.83 0.19-0.68 0.36-0.94 1.28-0.67 2.01 0.22 0.61 0.75 1.08 1.35 1.33-0.94-0.1-1.91-0.13-2.88-0.13-1.04 0-2.07 0.04-3.05 0.07h-0.32c-0.33 0-0.73-0.01-1.14-0.01-1.3 0-2.82 0.1-3.49 0.88-0.45 0.53-0.55 1.36-0.17 1.95 0.43 0.67 1.33 0.9 2.06 1-2.39 0.03-5.23 1.13-7.08 2.62-0.6 0.48-0.99 0.98-1.04 1.48-0.08 0.69 0.33 1.44 0.99 1.66 0.05 0.02 0.15 0.02 0.3 0.02 0.94 0 3.63-0.27 4.77-0.39-1.45 0.45-4.67 1.07-5.25 3.35-0.24 0.94 0.39 1.95 1.22 2.45 0.91 0.55 2.23 0.75 3.86 0.75 5.01 0 12.98-1.93 21.22-1.93 6.03 0 12.22 1.04 17.49 4.62 0.41 0.28 0.93 0.4 1.47 0.4 1.93 0 4.21-1.47 3.28-2.66-7.75-9.97-18.76-16.78-31.07-19.51-0.32-0.08-0.68-0.15-1.02-0.15z",
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
          "m65 42v2h0.1c13.99 0.16 25.74 2.7 29.46 3.58l2.4 13.33-77.24-2.55c10.68-5.19 31.28-14.36 45.28-14.36v-2m-0.46 0c-19.7 0-52.9 18.11-52.9 18.11l87.68 2.89-3.15-17.04s-13.94-3.76-31.29-3.95c-0.11-0.01-0.23-0.01-0.34-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M6.21,56.48c-1.81-0.11-2.24,0.47-1.46,1.71C6.83,61.5,12.33,72.53,29,78c22.34,7.34,87,5.1,87,5.1 l6.1-15.1v-6L6.21,56.48z",
      fill: "#E53935"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "M6.21,56.48c-1.81-0.11-2.24,0.47-1.46,1.71C6.83,61.5,12.33,72.53,29,78c22.34,7.34,87,5.1,87,5.1 l6.1-15.1v-6L6.21,56.48z"
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
    _react2.default.createElement("polygon", {
      points: "124 90.5 4 90.5 4 61.5 123.96 68.18",
      clipPath: "url(#c)",
      fill: "#F5F5F5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m7.3 58.53 112.8 5.37v3.7l-5.46 13.53c-2.98 0.09-10.8 0.28-20.62 0.28-17.99 0-50.28-0.69-64.39-5.32-14.12-4.62-19.8-13.38-22.33-17.56m-1.48-2.06c-1.47 0-1.78 0.58-1.07 1.72 2.08 3.31 7.58 14.34 24.25 19.81 13.88 4.56 44.12 5.42 65.01 5.42 12.73 0 21.99-0.32 21.99-0.32l6.1-15.1v-6l-115.89-5.52c-0.14-0.01-0.27-0.01-0.39-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 78.213,
        x2: 126.96,
        y1: 85.444,
        y2: 82.194,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B3E5FC",
        offset: 0.0423
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A6E1FB",
        offset: 0.227
      }),
      _react2.default.createElement("stop", {
        stopColor: "#83D5FA",
        offset: 0.5708
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4FC3F7",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m119.62 86.41c-1.82-2.23-4.9-4.25-7.72-4.89 0.89 0.06 2.01 0.02 2.69-0.67 0.6-0.6 0.67-1.6 0.29-2.35-1.21-2.45-10.33-3.46-12.69-3.72 1.83 0.2 5.14-1.86 2.47-3.94-2.83-2.21-34.17 0.83-44.79 14.89-1.56 2.06-0.23 4.39 3.89 3.37 28.77-7.13 43.93 11.53 52.5 7.22 1.56-0.79 4.35-5.1-3.31-7.89 1.54 0.5 3.02 1.25 4.62 1.49 3.22 0.46 2.63-2.79 2.05-3.51z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m100.28 72.18c2.01 0 2.88 0.3 3.16 0.38-0.27 0.17-0.69 0.44-1.04 0.44l-0.22 1.88-0.22 1.93c9.25 1 10.93 2.42 11.12 2.62 0 0.01 0.01 0.02 0.01 0.03-0.1 0.03-0.3 0.07-0.67 0.07-0.14 0-0.28-0.01-0.41-0.02-0.05 0-0.09-0.01-0.14-0.01-0.98 0-1.83 0.72-1.98 1.71-0.15 1.03 0.52 2.01 1.54 2.24 2.28 0.52 4.95 2.2 6.55 4.12 0.04 0.1 0.06 0.23 0.08 0.36-0.06 0-0.13-0.01-0.2-0.02-0.85-0.12-1.73-0.46-2.66-0.82-0.52-0.2-1.06-0.41-1.63-0.59-0.2-0.07-0.41-0.1-0.61-0.1-0.83 0-1.61 0.52-1.89 1.35-0.35 1.03 0.18 2.16 1.21 2.53 2.3 0.84 3.72 1.91 3.8 2.87 0.05 0.65-0.52 1.26-0.71 1.36-0.59 0.3-1.26 0.44-2.05 0.44-2.46 0-5.85-1.42-9.77-3.06-6.5-2.72-15.41-6.46-26.73-6.46-4.43 0-8.98 0.57-13.54 1.7-0.51 0.13-0.96 0.19-1.36 0.19-0.33 0-0.54-0.05-0.65-0.09 0.03-0.08 0.09-0.19 0.19-0.33 7.89-10.39 29.18-14.72 38.82-14.72m0-2c-9.64 0-31.81 4.16-40.4 15.54-1.3 1.72-0.59 3.62 2.06 3.62 0.53 0 1.15-0.08 1.84-0.25 4.7-1.17 9.05-1.64 13.05-1.64 17.91 0 29.16 9.52 36.5 9.52 1.06 0 2.04-0.2 2.95-0.66 1.56-0.79 4.35-5.1-3.31-7.89 1.54 0.5 3.02 1.25 4.62 1.49 0.22 0.03 0.41 0.05 0.6 0.05 2.54 0 1.99-2.87 1.44-3.54-1.82-2.23-4.9-4.25-7.72-4.89 0.17 0.01 0.36 0.02 0.54 0.02 0.77 0 1.6-0.13 2.15-0.69 0.6-0.6 0.67-1.6 0.29-2.35-1.21-2.45-10.33-3.46-12.69-3.72 0.08 0.01 0.17 0.01 0.26 0.01 1.86 0 4.77-1.96 2.22-3.95-0.55-0.44-2.13-0.67-4.4-0.67z",
        fill: "#424242"
      })
    )
  );
}

exports.default = MotorBoat;