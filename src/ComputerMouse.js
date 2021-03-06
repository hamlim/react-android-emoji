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

function ComputerMouse(props) {
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
        x1: -93.047,
        x2: -93.047,
        y1: -73.413,
        y2: -17.291,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0051299
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EAEAEA",
        offset: 0.2817
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ddd",
        offset: 0.5766
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.8789
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9998
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-42.13-44.72c-0.91-4.33-4.3-20.11-5.87-27.41-0.47-2.21-2.11-3.82-3.99-3.81-5.36 0-15.39-0.05-16.6-0.05h-44.08c-0.61 0-2.56 0.06-4.11 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0-0.43-0.05-0.85-0.13-1.25z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m-42.13-44.78c-0.91-4.32-4.3-20.06-5.87-27.34-0.47-2.21-2.11-3.82-3.99-3.82-5.36 0-15.39-0.06-16.6-0.06h-44.08c-0.61 0-2.56 0.07-4.11 1.8-4.7 5.26-12.54 20.51-13.76 22.05-0.08 0.1-6.27 2.28-9.09 3.96-1.12 0.67-1.74 2.13-1.9 3.62l-2.46 20.76c-0.64 4.09 1.7 5.81 5.37 5.81h91.51c2.8 0 5.11-0.79 5.11-5.8v-19.74c0-0.42-0.05-0.83-0.13-1.24z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m-51.98-73c0.36 0 0.87 0.59 1.05 1.44 1.46 6.78 4.95 23.06 5.86 27.43 0.04 0.2 0.07 0.44 0.07 0.66v19.79c0 2.81-0.49 2.69-2.11 2.69h-91.51c-1.3 0-2.02-0.23-2.25-0.5s-0.3-0.92-0.16-1.77c0.01-0.04 0.01-0.06 0.02-0.09l2.47-20.83c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.53 10.65-16.93 0.57-0.64 1.22-0.79 1.87-0.79h44.08 9.21 7.4-0.02m0.02-3.01s-0.01 0 0 0h-16.6-44.08-0.02c-0.63 0-2.55 0.08-4.08 1.79-4.7 5.27-12.54 20.52-13.76 22.07-0.08 0.1-6.27 2.31-9.09 4-1.12 0.67-1.74 2.13-1.9 3.63l-2.46 20.75c-0.64 4.1 1.7 5.76 5.37 5.76h91.51c2.8 0 5.11-0.68 5.11-5.69v-19.79c0-0.42-0.05-0.84-0.13-1.24-0.91-4.33-4.3-20.17-5.87-27.47-0.49-2.21-2.13-3.81-4-3.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 46.43,
        x2: 46.43,
        y1: -117.5,
        y2: -61.374,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0106
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D5D5D",
        offset: 0.2496
      }),
      _react2.default.createElement("stop", {
        stopColor: "#505050",
        offset: 0.5044
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3B3B3B",
        offset: 0.7657
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.35-88.93c-0.91-4.33-4.3-20.11-5.86-27.41-0.47-2.21-2.11-3.75-3.99-3.75-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.73-4.71 5.28-12.55 20.49-13.76 22.04-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c-0.01-0.43-0.05-0.84-0.13-1.25z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m97.35-88.98c-0.91-4.32-4.3-20.06-5.86-27.34-0.47-2.21-2.11-3.74-3.99-3.74-5.36 0-15.39 0.01-16.6 0.01h-44.08c-0.61 0-2.56-0.01-4.11 1.72-4.71 5.27-12.55 20.48-13.76 22.02-0.08 0.1-6.27 2.26-9.09 3.94-1.12 0.67-1.74 2.12-1.9 3.61l-2.47 20.76c-0.64 4.09 1.7 5.8 5.37 5.8h91.51c2.8 0 5.1-0.79 5.1-5.8v-19.74c0-0.42-0.04-0.84-0.12-1.24z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m87.5-117.08c0.36 0 0.87 0.53 1.05 1.38 1.46 6.78 4.94 23.03 5.86 27.4 0.04 0.2 0.06 0.41 0.06 0.63v19.79c0 2.81-0.49 2.81-2.1 2.81h-91.51c-1.3 0-2.02-0.29-2.25-0.56s-0.3-0.95-0.16-1.8l0.02-0.1 2.47-20.84c0.08-0.8 0.36-1.28 0.46-1.36 1.87-1.12 5.83-2.66 7.51-3.31 1.46-0.57 1.86-0.72 2.39-1.39 0.5-0.63 1.28-2 2.99-5.03 2.85-5.03 7.61-13.46 10.65-16.87 0.57-0.64 1.22-0.72 1.87-0.72h44.08c0.75 0 4.89 0 9.21-0.01l7.4-0.02m0-3c-5.36 0-15.39 0.01-16.6 0.01h-44.08-0.02c-0.63 0-2.55 0.01-4.08 1.73-4.72 5.27-12.56 20.48-13.77 22.03-0.08 0.1-6.27 2.3-9.09 3.99-1.12 0.67-1.74 2.12-1.9 3.62l-2.46 20.8c-0.64 4.1 1.7 5.82 5.37 5.82h91.51c2.8 0 5.1-0.8 5.1-5.81v-19.79c0-0.42-0.04-0.84-0.13-1.24-0.91-4.33-4.3-20.11-5.86-27.41-0.48-2.22-2.12-3.75-3.99-3.75z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.67 53.67c0-20.77-16.9-37.67-37.67-37.67s-37.67 16.9-37.67 37.67v32.58c0 20.77 16.9 37.67 37.67 37.67s37.67-16.9 37.67-37.67v-32.58z",
      fill: "#E0E0E0"
    }),
    _react2.default.createElement("path", {
      d:
        "m7.42 63.06c-1.15 0-2.24-0.66-2.74-1.78-0.68-1.51 0-3.28 1.51-3.96 6.84-3.06 11.08-8.96 11.08-16.72l0.02-2.6v-0.13c0-20.91 11.3-33.9 29.5-33.9 16.06 0 23.25 12.9 23.25 25.68 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-18.73-14.37-19.68-17.25-19.68-21.21 0-23.5 19.51-23.5 27.9l-0.02 2.76c0 10.13-5.61 18.13-14.63 22.17-0.39 0.17-0.81 0.26-1.22 0.26z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m46.79 4.97c15.37 0 22.25 12.4 22.25 24.68 0 1.1-0.9 2-2 2s-2-0.9-2-2c0-19.69-15.2-20.68-18.25-20.68-7.37 0-24.5 2.82-24.5 28.89l-0.02 2.76c0 9.52-5.12 17.26-14.04 21.26-0.25 0.12-0.53 0.18-0.81 0.18-0.79 0-1.51-0.46-1.83-1.18-0.22-0.49-0.23-1.03-0.04-1.53s0.56-0.89 1.05-1.11c7.42-3.32 11.67-9.75 11.67-17.63l0.02-2.6v-0.13c0-20.3 10.92-32.91 28.5-32.91m0-1c-18.2 0-29.5 12.99-29.5 33.9v0.13l-0.02 2.6c0 7.76-4.25 13.66-11.08 16.72-1.51 0.68-2.19 2.45-1.51 3.96 0.5 1.11 1.59 1.78 2.74 1.78 0.41 0 0.83-0.08 1.22-0.26 9.03-4.04 14.63-12.04 14.63-22.17l0.02-2.76c0-8.39 2.29-27.9 23.5-27.9 2.88 0 17.25 0.95 17.25 19.68 0 1.66 1.34 3 3 3s3-1.34 3-3c0-12.78-7.19-25.68-23.25-25.68z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-105.41 79.57c7.85-3.52 12.86-11.23 12.86-20.28l0.02-1.75v-19.67c0-17.58 8.38-30.9 26.5-30.9 15.38 0 20.25 12.94 20.25 22.68",
      fill: "none",
      stroke: "#424242",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
      strokeWidth: 6
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 16.15,
        y2: 123.84,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m101.67 53.67c0-20.77-16.9-37.67-37.67-37.67s-37.67 16.9-37.67 37.67v32.58c0 20.77 16.9 37.67 37.67 37.67s37.67-16.9 37.67-37.67v-32.58z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m198.38 3.83c-23.11 0-42 18.8-42 41.92v10.25h84v-10.25c0-23.11-18.89-41.92-42-41.92z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d: "m144.04-77.21h-0.04v52.16h42v-10.25c0-23.11-18.85-41.91-41.96-41.91z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m147-14.12v52.12h4v-52.12c-0.66-0.03-1.33-0.05-2-0.05s-1.34 0.02-2 0.05z",
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "M64.08,16c-3.75,0-7.19,0.56-10.78,1.59V66.5c0,5.97,4.82,10.8,10.78,10.8 s10.78-4.84,10.78-10.8V17.59C71.27,16.56,67.83,16,64.08,16z",
      fill: "#757575",
      opacity: 0.6
    }),
    _react2.default.createElement("path", {
      d:
        "m64 52.06c-3.97 0-7.19-3.22-7.19-7.19v-10.87c0-3.97 3.22-7.19 7.19-7.19s7.19 3.22 7.19 7.19v10.87c0 3.98-3.22 7.19-7.19 7.19z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m64 19c19.12 0 34.67 15.55 34.67 34.67v32.58c0 19.12-15.55 34.67-34.67 34.67s-34.67-15.55-34.67-34.67v-32.58c0-19.12 15.55-34.67 34.67-34.67m0-3c-20.77 0-37.67 16.9-37.67 37.67v32.58c0 20.77 16.9 37.67 37.67 37.67s37.67-16.9 37.67-37.67v-32.58c0-20.77-16.9-37.67-37.67-37.67z",
        fill: "#424242"
      })
    )
  );
}

exports.default = ComputerMouse;
