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

function Printer(props) {
  return _react2.default.createElement(
    "svg",
    _extends(
      {
        enableBackground: "new 0 0 128 128",
        viewBox: "0 0 128 128"
      },
      props
    ),
    _react2.default.createElement("path", {
      d:
        "m103.41 76.25h-78.88c-2.52 0-4.58-2.06-4.58-4.58v-50.98c0-2.52 2.06-4.58 4.58-4.58h78.89c2.52 0 4.58 2.06 4.58 4.58v50.99c-0.01 2.51-2.07 4.57-4.59 4.57z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.41 19.11c0.85 0 1.58 0.72 1.58 1.58v50.99c0 0.85-0.72 1.58-1.58 1.58h-78.88c-0.85 0-1.58-0.72-1.58-1.58v-50.99c0-0.85 0.72-1.58 1.58-1.58h78.88m0-3h-78.88c-2.52 0-4.58 2.06-4.58 4.58v50.99c0 2.52 2.06 4.58 4.58 4.58h78.89c2.52 0 4.58-2.06 4.58-4.58v-50.99c-0.01-2.52-2.07-4.58-4.59-4.58z",
        fill: "#424242"
      })
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
        "m94.33 48.19h-60.67c-1.97 0-3.57-1.6-3.57-3.57v-37.02c0-1.97 1.6-3.57 3.57-3.57h60.67c1.97 0 3.57 1.6 3.57 3.57v37.02c-0.01 1.97-1.6 3.57-3.57 3.57z",
      fill: "#F5F5F5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m94.33 7.03c0.31 0 0.57 0.25 0.57 0.57v37.02c0 0.31-0.25 0.57-0.57 0.57h-60.67c-0.31 0-0.57-0.25-0.57-0.57v-37.02c0-0.31 0.25-0.57 0.57-0.57h60.67m0-3h-60.67c-1.97 0-3.57 1.6-3.57 3.57v37.02c0 1.97 1.6 3.57 3.57 3.57h60.67c1.97 0 3.57-1.6 3.57-3.57v-37.02c-0.01-1.97-1.6-3.57-3.57-3.57z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 63.991,
        x2: 63.991,
        y1: 103.88,
        y2: 43.733,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CACACA",
        offset: 0.2076
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E4E4E4",
        offset: 0.7045
      }),
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.88 103.88h-101.78c-4.89 0-8.89-4-8.89-8.89v-42.37c0-4.89 4-8.89 8.89-8.89h101.78c4.89 0 8.89 4 8.89 8.89v42.36c0 4.89-4 8.9-8.89 8.9z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m19.99 43.73v7.51c0 2.52 2.2 4.49 4.72 4.49h78.54c2.52 0 4.74-1.98 4.74-4.49v-7.51h-88z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m114.88 46.73c3.25 0 5.89 2.64 5.89 5.89v42.36c0 3.25-2.64 5.89-5.89 5.89h-101.78c-3.25 0-5.89-2.64-5.89-5.89v-42.36c0-3.25 2.64-5.89 5.89-5.89h101.78m0-3h-101.78c-4.89 0-8.89 4-8.89 8.89v42.36c0 4.89 4 8.89 8.89 8.89h101.78c4.89 0 8.89-4 8.89-8.89v-42.36c0-4.89-4-8.89-8.89-8.89z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("circle", {
      cx: 108.69,
      cy: 69.44,
      r: 7.19,
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m103.41 115.96h-78.83c-2.52 0-4.58-2.06-4.58-4.58v-23.44h87.99v23.44c0 2.52-2.06 4.58-4.58 4.58z",
      fill: "#424242"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.99 90.94v20.44c0 0.85-0.72 1.58-1.58 1.58h-78.83c-0.85 0-1.58-0.72-1.58-1.58v-20.44h81.99m3-3h-87.99v23.44c0 2.52 2.06 4.58 4.58 4.58h78.84c2.52 0 4.58-2.06 4.58-4.58v-23.44h-0.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M96,98.33v5.14c0,1.4-1.13,2.53-2.53,2.53H34.53c-1.4,0-2.53-1.13-2.53-2.53v-5.14 c0-1.28-1.04-2.33-2.33-2.33h-7.35C21.04,96,20,97.04,20,98.33v13.09c0,2.52,2.06,4.58,4.58,4.58h78.84 c2.52,0,4.58-2.06,4.58-4.58V98.33c0-1.28-1.04-2.33-2.33-2.33h-7.35C97.04,96,96,97.04,96,98.33z",
      fill: "#757575"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m105.67 98c0.18 0 0.33 0.15 0.33 0.33v13.09c0 1.42-1.16 2.58-2.58 2.58h-78.84c-1.42 0-2.58-1.16-2.58-2.58v-13.09c0-0.18 0.15-0.33 0.33-0.33h7.35c0.18 0 0.33 0.15 0.33 0.33v5.14c0 2.5 2.03 4.53 4.53 4.53h58.94c2.5 0 4.53-2.03 4.53-4.53v-5.14c0-0.18 0.15-0.33 0.33-0.33h7.33m0-2h-7.35c-1.28 0-2.32 1.04-2.32 2.33v5.14c0 1.4-1.13 2.53-2.53 2.53h-58.94c-1.4 0-2.53-1.13-2.53-2.53v-5.14c0-1.28-1.04-2.33-2.33-2.33h-7.35c-1.28 0-2.32 1.04-2.32 2.33v13.09c0 2.52 2.06 4.58 4.58 4.58h78.84c2.52 0 4.58-2.06 4.58-4.58v-13.09c0-1.29-1.04-2.33-2.33-2.33z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Printer;
