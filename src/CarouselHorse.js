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

function CarouselHorse(props) {
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
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "h",
        x: 64,
        y: 4,
        width: 16,
        height: 120
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "g"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#h"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#g)"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "#E0E0E0"
        },
        _react2.default.createElement("path", {
          d: "m76.72 6.62s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 22.42s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 38.21s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 54s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 69.79s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 85.58s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d:
            "m76.72 101.38s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d:
            "m76.72 117.29s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          fill: "#EC407A"
        },
        _react2.default.createElement("path", {
          d: "m76.72-1.25s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 14.54s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 30.33s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 46.12s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 61.92s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 77.71s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d: "m76.72 93.5s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        }),
        _react2.default.createElement("path", {
          d:
            "m76.72 109.29s3.46 3.96-0.12 8.08l-8.08 4s-3.29-4.79 0-8.08l8.2-4z"
        })
      ),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m76.19 0.68c0.55 1.09 1.04 3-0.62 5.02-0.46 0.56-0.45 1.37 0.02 1.92 0.25 0.3 2.41 3.02-0.03 5.97-0.46 0.56-0.45 1.38 0.02 1.93 0.25 0.3 2.41 3.02-0.01 5.97-0.46 0.56-0.45 1.37 0.02 1.92 0.25 0.3 2.41 3.02-0.03 5.97-0.46 0.56-0.45 1.38 0.02 1.93 0.25 0.3 2.41 3.02-0.01 5.97-0.46 0.56-0.45 1.37 0.02 1.92 0.25 0.3 2.41 3.02-0.03 5.97-0.46 0.56-0.45 1.38 0.02 1.93 0.25 0.3 2.41 3.02-0.01 5.97-0.46 0.56-0.45 1.37 0.02 1.92 0.25 0.3 2.41 3.02-0.03 5.97-0.46 0.56-0.45 1.38 0.02 1.93 0.25 0.3 2.41 3.02-0.01 5.97-0.46 0.56-0.45 1.37 0.02 1.92 0.25 0.3 2.41 3.02-0.03 5.97-0.46 0.56-0.45 1.38 0.02 1.93 0.25 0.3 2.41 3.02-0.01 5.97-0.46 0.56-0.45 1.37 0.02 1.92 0.25 0.3 2.41 3.02-0.03 5.97-0.46 0.56-0.45 1.38 0.02 1.93 0.25 0.3 2.41 3.02-0.01 5.97-0.46 0.56-0.45 1.37 0.02 1.92 0.25 0.3 2.41 3.02-0.03 5.97-0.46 0.56-0.45 1.38 0.02 1.93 0.26 0.31 2.48 3.09-0.1 6.09-0.46 0.54-0.48 1.33-0.05 1.89 0.12 0.15 0.26 0.27 0.41 0.37 0.59 0.87 1.72 3.12-0.2 5.55l-6.51 3.22c-0.57-1.3-1.13-3.44 0.41-5.01 0.49-0.5 0.57-1.28 0.19-1.87-0.25-0.39-2.4-3.83-0.21-6.1 0.48-0.5 0.56-1.26 0.18-1.85-0.4-0.63-2.29-3.86-0.2-6.05 0.48-0.5 0.55-1.26 0.18-1.84-0.4-0.63-2.27-3.87-0.17-6.05 0.48-0.5 0.56-1.26 0.18-1.85-0.4-0.63-2.29-3.86-0.2-6.05 0.48-0.5 0.55-1.26 0.18-1.84-0.4-0.63-2.27-3.87-0.17-6.05 0.48-0.5 0.56-1.26 0.18-1.85-0.4-0.63-2.29-3.86-0.2-6.05 0.48-0.5 0.55-1.26 0.18-1.84-0.4-0.63-2.27-3.87-0.17-6.05 0.48-0.5 0.56-1.26 0.18-1.85-0.4-0.63-2.29-3.86-0.2-6.05 0.48-0.5 0.55-1.26 0.18-1.84-0.4-0.63-2.27-3.87-0.17-6.05 0.48-0.5 0.56-1.26 0.18-1.85-0.4-0.63-2.29-3.86-0.2-6.05 0.48-0.5 0.55-1.26 0.18-1.84-0.4-0.63-2.27-3.87-0.17-6.05 0.48-0.5 0.56-1.26 0.18-1.85-0.4-0.63-2.29-3.86-0.2-6.05 0.48-0.5 0.55-1.26 0.18-1.84-0.4-0.63-2.27-3.87-0.17-6.05 0.48-0.5 0.56-1.26 0.18-1.85-0.4-0.63-2.29-3.86-0.2-6.05 0.48-0.5 0.55-1.26 0.18-1.84-0.39-0.62-2.21-3.76-0.29-5.93l6.86-3.31m0.53-1.93-8.21 4c-3 3-0.54 7.24-0.08 7.96-2.9 3.03-0.4 7.25 0.02 7.9-2.89 3-0.47 7.17-0.02 7.89-2.9 3.03-0.4 7.25 0.02 7.9-2.89 3-0.47 7.17-0.02 7.89-2.9 3.03-0.4 7.25 0.02 7.9-2.89 3-0.47 7.17-0.02 7.89-2.9 3.03-0.4 7.25 0.02 7.9-2.89 3-0.47 7.17-0.02 7.89-2.9 3.03-0.4 7.25 0.02 7.9-2.89 3-0.47 7.17-0.02 7.89-2.9 3.03-0.4 7.25 0.02 7.9-2.89 3-0.47 7.17-0.02 7.89-2.9 3.03-0.4 7.25 0.02 7.9-3 3.11-0.28 7.5 0.03 7.96-3.23 3.29 0.03 8.05 0.03 8.05l8.08-4c3.58-4.12 0.12-8.08 0.12-8.08l-0.1 0.05c3.52-4.1 0.12-8.03 0.1-8.05 3.25-3.94 0.21-7.67 0.02-7.9 3.31-4.05 0-7.87-0.02-7.89 3.25-3.94 0.21-7.67 0.02-7.9 3.31-4.05 0-7.87-0.02-7.89 3.25-3.94 0.21-7.67 0.02-7.9 3.31-4.05 0-7.87-0.02-7.89 3.25-3.94 0.21-7.67 0.02-7.9 3.31-4.05 0-7.87-0.02-7.89 3.25-3.94 0.21-7.67 0.02-7.9 3.31-4.05 0-7.87-0.02-7.89 3.25-3.94 0.21-7.67 0.02-7.9 3.31-4.05 0-7.87-0.02-7.89 3.25-3.94 0.21-7.67 0.02-7.9 3.33-4.05-0.01-7.89-0.01-7.89z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 107.05,
        x2: 107.05,
        y1: 45.25,
        y2: 102.01,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D1C4E9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B39CDB",
        offset: 0.4182
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9D80D1",
        offset: 0.7827
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9575CD",
        offset: 0.9928
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m90.63 55.78s7.1-10.31 18.47-6.1c11.66 4.32 7.49 17.27 8.97 23.97 0.76 3.49 3.07 6.91 5.37 9.37 1.36 1.45 0.08 3.8-1.87 3.44-5.3-0.96-11.91-4.16-13.46-13.95-2.69-16.91-11.09-15.58-13.77-13.84-0.01 0-6.03 4.01-3.71-2.89z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m103.69 50.17c1.6 0 3.24 0.31 4.88 0.92 7.62 2.82 7.61 9.65 7.6 16.26 0 2.42 0 4.7 0.42 6.62 0.72 3.27 2.81 6.94 5.74 10.07 0.17 0.18 0.21 0.38 0.11 0.6-0.04 0.08-0.18 0.35-0.49 0.35-0.04 0-0.08 0-0.13-0.01-6.99-1.27-11.11-5.54-12.25-12.71-2.23-13.99-8.32-16.08-11.75-16.08-1.55 0-3.12 0.44-4.33 1.23-0.47 0.31-1.32 0.74-1.9 0.87 0.01-0.3 0.08-0.86 0.38-1.82 0.76-0.99 5.08-6.3 11.72-6.3m0-1.5c-8.17 0-13.07 7.11-13.07 7.11-1.07 3.19-0.36 4.05 0.71 4.05 1.25 0 2.99-1.16 2.99-1.16 0.78-0.5 2.04-0.98 3.5-0.98 3.58 0 8.36 2.81 10.27 14.82 1.56 9.78 8.16 12.99 13.46 13.95 0.14 0.02 0.27 0.04 0.39 0.04 1.73 0 2.74-2.13 1.48-3.48-2.3-2.46-4.61-5.88-5.37-9.37-1.47-6.7 2.69-19.65-8.97-23.97-1.91-0.71-3.72-1.01-5.39-1.01z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 38.736,
        x2: 38.736,
        y1: 5.6667,
        y2: 129.99,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8B7CD",
        offset: 0.0379
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F389AD",
        offset: 0.4722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F16D99",
        offset: 0.8071
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60 64.08c-0.99-2.32-4.21-3.94-7.85-3.94-3.22 0-5.76 1.3-6.97 3.57-0.45 0.83-0.84 1.41-1.3 1.87-2.03 2.08-3.91 3.38-5.04 3.46-0.08 0.01-0.18 0.01-0.29 0.01-1.82 0-6.77-0.73-8.94-1.05-0.45-0.12-0.85-0.18-1.25-0.18-2.09 0-3.84 1.4-4.82 3.83-0.97 2.43-2.84 6.34-4.34 9.49-1.88 3.93-2.36 4.97-2.42 5.41-0.01 0.07-0.02 0.14-0.04 0.22-0.18 1-0.51 2.87 2.11 5.81 2.47 2.78 6.04 7.31 6.07 7.36 0.96 1.27 2.6 1.97 4.75 2 1.4 0 2.51-1.11 2.51-2.47v-7.61c0-0.43-0.1-0.84-0.3-1.19-1.29-2.31-3.33-2.79-4.82-2.79-0.52 0-1.04 0.06-1.56 0.17 0 0-0.12 0.02-0.27 0.02-0.59 0-0.78-0.21-0.78-0.88 0-0.23 0.21-1.68 4.33-8.47 0.38-0.16 0.65-0.27 1.02-0.43 2.63 0.64 9.2 2.07 15.17 2.07 4.38 0 7.59-0.79 9.53-2.36 5.88-4.74 7.58-9.03 5.5-13.92z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 38.736,
        x2: 38.736,
        y1: 86.294,
        y2: 97.264,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60 64.08c-0.99-2.32-4.21-3.94-7.85-3.94-3.22 0-5.76 1.3-6.97 3.57-0.45 0.83-0.84 1.41-1.3 1.87-2.03 2.08-3.91 3.38-5.04 3.46-0.08 0.01-0.18 0.01-0.29 0.01-1.82 0-6.77-0.73-8.94-1.05-0.45-0.12-0.85-0.18-1.25-0.18-2.09 0-3.84 1.4-4.82 3.83-0.97 2.43-2.84 6.34-4.34 9.49-1.88 3.93-2.36 4.97-2.42 5.41-0.01 0.07-0.02 0.14-0.04 0.22-0.18 1-0.51 2.87 2.11 5.81 2.47 2.78 6.04 7.31 6.07 7.36 0.96 1.27 2.6 1.97 4.75 2 1.4 0 2.51-1.11 2.51-2.47v-7.61c0-0.43-0.1-0.84-0.3-1.19-1.29-2.31-3.33-2.79-4.82-2.79-0.52 0-1.04 0.06-1.56 0.17 0 0-0.12 0.02-0.27 0.02-0.59 0-0.78-0.21-0.78-0.88 0-0.23 0.21-1.68 4.33-8.47 0.38-0.16 0.65-0.27 1.02-0.43 2.63 0.64 9.2 2.07 15.17 2.07 4.38 0 7.59-0.79 9.53-2.36 5.88-4.74 7.58-9.03 5.5-13.92z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m52.15 62.64c2.83 0 5.05 1.23 5.55 2.42 1.18 2.77 1.41 6.02-4.78 11.01-1.02 0.82-3.23 1.81-7.96 1.81-5.68 0-12.09-1.4-14.58-2-0.19-0.05-0.39-0.07-0.59-0.07-0.33 0-0.66 0.07-0.97 0.2l-0.46 0.2-0.56 0.24c-0.48 0.2-0.89 0.56-1.16 1.01-4.7 7.74-4.7 9.11-4.7 9.77 0 2.05 1.29 3.38 3.28 3.38 0.28 0 0.51-0.03 0.66-0.05l0.15-0.03c0.35-0.08 0.69-0.11 1.03-0.11 1.58 0 2.25 0.83 2.62 1.48l0.03 7.58c-0.77-0.01-2.15-0.16-2.78-1-0.01-0.01-0.02-0.03-0.03-0.04-0.15-0.19-3.66-4.65-6.17-7.47-1.81-2.04-1.64-3.01-1.51-3.73l0.03-0.18c0.18-0.52 1.22-2.69 2.22-4.8 1.52-3.18 3.41-7.13 4.4-9.63 0.34-0.84 1.11-2.26 2.5-2.26 0.18 0 0.37 0.03 0.61 0.09l0.27 0.06c3.6 0.53 7.52 1.07 9.3 1.07 0.18 0 0.35-0.01 0.49-0.02 1.82-0.14 4.05-1.56 6.64-4.21 0.62-0.64 1.15-1.39 1.71-2.44 0.75-1.46 2.49-2.28 4.76-2.28m0-2.5c-3.22 0-5.76 1.3-6.97 3.57-0.45 0.83-0.84 1.41-1.3 1.87-2.03 2.08-3.91 3.38-5.04 3.46-0.08 0.01-0.18 0.01-0.29 0.01-1.82 0-6.77-0.73-8.94-1.05-0.45-0.12-0.85-0.18-1.25-0.18-2.09 0-3.84 1.4-4.82 3.83-0.97 2.43-2.84 6.34-4.34 9.49-1.88 3.93-2.36 4.97-2.42 5.41-0.01 0.07-0.02 0.14-0.04 0.22-0.18 1-0.51 2.87 2.11 5.81 2.47 2.78 6.04 7.31 6.07 7.36 0.96 1.27 2.6 1.97 4.75 2 1.4 0 2.51-1.11 2.51-2.47v-7.61c0-0.43-0.1-0.84-0.3-1.19-1.29-2.31-3.33-2.79-4.82-2.79-0.52 0-1.04 0.06-1.56 0.17 0 0-0.12 0.02-0.27 0.02-0.59 0-0.78-0.21-0.78-0.88 0-0.23 0.21-1.68 4.33-8.47 0.38-0.16 0.65-0.27 1.02-0.43 2.63 0.64 9.2 2.07 15.17 2.07 4.38 0 7.59-0.79 9.53-2.36 5.89-4.75 7.58-9.05 5.51-13.94-1-2.3-4.23-3.92-7.86-3.92z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m37.99 14.43c-0.82-0.87-1.83-1.54-2.96-1.91-2.24-0.73-6.14-1.56-9.95-0.31-0.73 0.24-1.39 0.44-1.95 0.6-1.2 0.35-1.44 1.95-0.4 2.64 1.68 1.13 4.14 2.27 6.99 2.02 0 0 9.17-1.29 9.75-1.14 0.42 0.11-0.55-0.9-1.48-1.9z",
      fill: "#B39DDB"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m29.28 13.07c2.12 0 4.04 0.48 5.28 0.88 0.7 0.23 1.36 0.61 1.94 1.12-2.68 0.31-6.26 0.81-6.95 0.91-0.21 0.02-0.42 0.03-0.64 0.03-2.21 0-4.13-0.98-5.37-1.76 0.64-0.19 1.31-0.39 2-0.62 1.15-0.37 2.41-0.56 3.74-0.56m0-1.5c-1.35 0-2.78 0.18-4.2 0.64-0.73 0.24-1.39 0.44-1.95 0.6-1.2 0.35-1.44 1.95-0.4 2.64 1.52 1.02 3.68 2.05 6.19 2.05 0.26 0 0.53-0.01 0.8-0.04 0 0 8.19-1.15 9.58-1.15 0.08 0 0.14 0 0.17 0.01 0.02 0.01 0.04 0.01 0.05 0.01 0.27 0-0.65-0.96-1.54-1.91-0.82-0.87-1.83-1.54-2.96-1.91-1.4-0.44-3.46-0.94-5.74-0.94z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 50.711,
        x2: 50.711,
        y1: 6.9055,
        y2: 121.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8B7CD",
        offset: 0.0379
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F389AD",
        offset: 0.4722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F16D99",
        offset: 0.8071
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.06 58.4c-1.12-1.85-2.93-3.19-5.03-3.72-10.03-2.52-12.97 1.39-25.06 0.86-13.2-0.57-15.42-8.32-15.42-8.32-0.01 0-0.01-0.01-0.02-0.01-0.17-26.81-18-32.2-18-32.2-1.41-4.5-3.72-6.38-5.33-6.96-0.61-0.22-1.24 0.27-1.18 0.92 0.15 1.48 0.4 4.22 0.55 5.73 0.07 0.68-0.44 1.24-1.11 1.33-0.83 0.11-1.67 0.38-2.5 0.86 0 0-1.91 0.85-5.17 4.13-0.66 0.67-1.4 1.27-2.19 1.77-1.9 1.22-5.44 3.32-7.68 3.7-3.18 0.54-2.83 1.06-3.29 2.15s-1.43 3.35 0.63 5.16c0 0 1.47-0.13 1.55 0.88 0.06 0.67 1.18 1.63 2.61 2.17 1.45 0.55 3.12 0.4 4.4-0.48 0.55-0.38 1.07-0.91 1.34-1.64 0.75-2.05 4.28-0.38 5.28 0 0.55 0.21 3.76 0.77 7.18 0.7 0.6-0.01 1.07 0.52 0.98 1.11-1.73 11.86-5.98 18.27-7.57 25.79-2.15 10.22 11.9 25.28 26.85 26.67 18.75 1.75 25.54-6.81 30.25-8.62 19.75-7.63 21.22-16.57 17.93-21.98z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 50.711,
        x2: 50.711,
        y1: 93.256,
        y2: 68.727,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m96.06 58.4c-1.12-1.85-2.93-3.19-5.03-3.72-10.03-2.52-12.97 1.39-25.06 0.86-13.2-0.57-15.42-8.32-15.42-8.32-0.01 0-0.01-0.01-0.02-0.01-0.17-26.81-18-32.2-18-32.2-1.41-4.5-3.72-6.38-5.33-6.96-0.61-0.22-1.24 0.27-1.18 0.92 0.15 1.48 0.4 4.22 0.55 5.73 0.07 0.68-0.44 1.24-1.11 1.33-0.83 0.11-1.67 0.38-2.5 0.86 0 0-1.91 0.85-5.17 4.13-0.66 0.67-1.4 1.27-2.19 1.77-1.9 1.22-5.44 3.32-7.68 3.7-3.18 0.54-2.83 1.06-3.29 2.15s-1.43 3.35 0.63 5.16c0 0 1.47-0.13 1.55 0.88 0.06 0.67 1.18 1.63 2.61 2.17 1.45 0.55 3.12 0.4 4.4-0.48 0.55-0.38 1.07-0.91 1.34-1.64 0.75-2.05 4.28-0.38 5.28 0 0.55 0.21 3.76 0.77 7.18 0.7 0.6-0.01 1.07 0.52 0.98 1.11-1.73 11.86-5.98 18.27-7.57 25.79-2.15 10.22 11.9 25.28 26.85 26.67 18.75 1.75 25.54-6.81 30.25-8.62 19.75-7.63 21.22-16.57 17.93-21.98z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "a",
        d:
          "m96.06 58.4c-1.12-1.85-2.93-3.19-5.03-3.72-10.03-2.52-12.97 1.39-25.06 0.86-13.2-0.57-15.42-8.32-15.42-8.32-0.01 0-0.01-0.01-0.02-0.01-0.17-26.81-18-32.2-18-32.2-1.41-4.5-3.72-6.38-5.33-6.96-0.61-0.22-1.24 0.27-1.18 0.92 0.15 1.48 0.4 4.22 0.55 5.73 0.07 0.68-0.44 1.24-1.11 1.33-0.83 0.11-1.67 0.38-2.5 0.86 0 0-1.91 0.85-5.17 4.13-0.66 0.67-1.4 1.27-2.19 1.77-1.9 1.22-5.44 3.32-7.68 3.7-3.18 0.54-2.83 1.06-3.29 2.15s-1.43 3.35 0.63 5.16c0 0 1.47-0.13 1.55 0.88 0.06 0.67 1.18 1.63 2.61 2.17 1.45 0.55 3.12 0.4 4.4-0.48 0.55-0.38 1.07-0.91 1.34-1.64 0.75-2.05 4.28-0.38 5.28 0 0.55 0.21 3.76 0.77 7.18 0.7 0.6-0.01 1.07 0.52 0.98 1.11-1.73 11.86-5.98 18.27-7.57 25.79-2.15 10.22 11.9 25.28 26.85 26.67 18.75 1.75 25.54-6.81 30.25-8.62 19.75-7.63 21.22-16.57 17.93-21.98z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#a"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "o",
        x1: 26.236,
        x2: 26.236,
        y1: 6.9055,
        y2: 121.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8B7CD",
        offset: 0.0379
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F389AD",
        offset: 0.4722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F16D99",
        offset: 0.8071
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m47.5 67.74c-0.99-2.32-4.21-3.94-7.85-3.94-3.22 0-5.76 1.3-6.97 3.57-0.45 0.83-0.84 1.41-1.3 1.87-2.03 2.08-3.91 3.38-5.04 3.46-0.08 0.01-0.18 0.01-0.29 0.01-1.82 0-6.77-0.73-8.94-1.05-0.45-0.12-0.85-0.18-1.25-0.18-2.09 0-3.84 1.4-4.82 3.83-0.97 2.43-2.84 6.34-4.34 9.49-1.88 3.93-2.36 4.97-2.42 5.41-0.01 0.07-0.02 0.14-0.04 0.22-0.18 1-0.51 2.87 2.11 5.81 2.47 2.78 6.04 7.31 6.07 7.36 0.96 1.27 2.6 1.97 4.75 2 1.4 0 2.51-1.11 2.51-2.47v-7.61c0-0.43-0.1-0.84-0.3-1.19-1.29-2.31-3.33-2.79-4.82-2.79-0.52 0-1.04 0.06-1.56 0.17 0 0-0.12 0.02-0.27 0.02-0.59 0-0.78-0.21-0.78-0.88 0-0.23 0.21-1.68 4.33-8.47 0.38-0.16 0.65-0.27 1.02-0.43 2.63 0.64 9.2 2.07 15.17 2.07 4.38 0 7.59-0.79 9.53-2.36 5.88-4.73 7.58-9.03 5.5-13.92z",
      fill: "url(#o)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "n",
        d:
          "m96.06 58.4c-1.12-1.85-2.93-3.19-5.03-3.72-10.03-2.52-12.97 1.39-25.06 0.86-13.2-0.57-15.42-8.32-15.42-8.32-0.01 0-0.01-0.01-0.02-0.01-0.17-26.81-18-32.2-18-32.2-1.41-4.5-3.72-6.38-5.33-6.96-0.61-0.22-1.24 0.27-1.18 0.92 0.15 1.48 0.4 4.22 0.55 5.73 0.07 0.68-0.44 1.24-1.11 1.33-0.83 0.11-1.67 0.38-2.5 0.86 0 0-1.91 0.85-5.17 4.13-0.66 0.67-1.4 1.27-2.19 1.77-1.9 1.22-5.44 3.32-7.68 3.7-3.18 0.54-2.83 1.06-3.29 2.15s-1.43 3.35 0.63 5.16c0 0 1.47-0.13 1.55 0.88 0.06 0.67 1.18 1.63 2.61 2.17 1.45 0.55 3.12 0.4 4.4-0.48 0.55-0.38 1.07-0.91 1.34-1.64 0.75-2.05 4.28-0.38 5.28 0 0.55 0.21 3.76 0.77 7.18 0.7 0.6-0.01 1.07 0.52 0.98 1.11-1.73 11.86-5.98 18.27-7.57 25.79-2.15 10.22 11.9 25.28 26.85 26.67 18.75 1.75 25.54-6.81 30.25-8.62 19.75-7.63 21.22-16.57 17.93-21.98z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#n"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "m",
        x1: 92.948,
        x2: 92.948,
        y1: 6.9055,
        y2: 121.75,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#F8BBD0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F8B7CD",
        offset: 0.0379
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F389AD",
        offset: 0.4722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F16D99",
        offset: 0.8071
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F06292",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m114.07 97.24c-0.56-0.16-1.09-0.4-1.57-0.74-3.43-2.43 1.12-9.62-10.25-15.25-0.61-0.3-0.97-0.95-0.59-1.52 4.44-6.49 3.96-23.8-12.16-26.36-5.92-0.94-20.82-2.04-23.25 14.38-2.63 17.75 14.06 24.03 22.25 23.5 5.75-0.38 10.3-0.08 11 0.62 3.68 3.69 5.11 7.84 5.92 9.85 0.25 0.62 0.45 1.27 0.57 1.93 0.87 4.93 3.63 7.12 5.66 8.08 2.78 1.51 5.97 1.85 7.45 1.93 0.45 0.02 0.83-0.33 0.83-0.79 0-1.92-0.01-8.33-0.01-10.17 0-0.58-0.1-1.15-0.29-1.7-1.23-3.46-4.82-3.55-5.56-3.76z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m28.91 12.91c0.43 0.73 0.86 1.66 1.24 2.85 0.24 0.78 0.87 1.39 1.65 1.64 0.66 0.21 16.08 5.34 16.23 29.83 0 0.39 0.09 0.76 0.26 1.1 0.72 1.85 4.36 9.14 17.57 9.72 0.78 0.03 1.56 0.05 2.31 0.05 2.05 0 4.05-0.13 6.1-0.39 0.32-0.04 0.63-0.14 0.91-0.3 2.34-1.32 5.3-1.98 8.8-1.98 1.6 0 3.32 0.14 5.11 0.43 6.77 1.07 9.79 5.01 11.13 8.12 2.22 5.15 1.42 11.35-0.64 14.36-0.56 0.82-0.74 1.8-0.49 2.76 0.27 1.03 1.01 1.91 2.03 2.41 6.23 3.08 6.72 6.27 7.2 9.36 0.31 1.98 0.65 4.23 2.71 5.69 0.69 0.49 1.47 0.86 2.33 1.1 0.23 0.07 0.46 0.11 0.72 0.15 1.64 0.28 2.69 0.71 3.16 2.04 0.1 0.28 0.15 0.57 0.15 0.86v5 3.27c-1.34-0.21-3.06-0.62-4.59-1.45l-0.12-0.06c-1.57-0.74-3.59-2.43-4.26-6.25-0.14-0.79-0.37-1.58-0.71-2.42l-0.2-0.5c-0.88-2.24-2.52-6.41-6.27-10.18-0.57-0.57-1.52-1.52-8.05-1.52-1.53 0-3.17 0.06-4.89 0.17-0.26 0.02-0.54 0.03-0.82 0.03-4.26 0-10.4-1.87-14.53-6.05-0.48-0.49-1.13-0.74-1.78-0.74-0.43 0-0.86 0.11-1.25 0.33-3.28 1.89-8.64 4.41-17.21 4.41-1.49 0-3.05-0.08-4.64-0.22-4.16-0.39-8.5-1.98-12.55-4.62-0.41-0.26-0.88-0.4-1.36-0.4h-0.13c-0.56 0.03-1.08 0.04-1.6 0.04-5.68 0-12.09-1.4-14.58-2-0.19-0.05-0.39-0.07-0.59-0.07-0.33 0-0.66 0.07-0.97 0.2l-0.74 0.31-0.25 0.11c-0.48 0.2-0.89 0.56-1.16 1.01-4.7 7.74-4.7 9.11-4.7 9.77 0 2.05 1.29 3.38 3.28 3.38 0.28 0 0.51-0.03 0.65-0.05l0.15-0.03c0.35-0.08 0.69-0.11 1.03-0.11 1.58 0 2.25 0.83 2.62 1.48l0.03 7.58c-0.77-0.01-2.15-0.16-2.78-1-0.01-0.01-0.02-0.03-0.03-0.04-0.04-0.05-3.64-4.63-6.17-7.47-1.81-2.04-1.64-3.01-1.51-3.73l0.03-0.18c0.18-0.52 1.22-2.69 2.22-4.8 1.52-3.18 3.41-7.13 4.4-9.63 0.34-0.84 1.11-2.26 2.5-2.26 0.18 0 0.37 0.03 0.61 0.09l0.27 0.06c1.27 0.19 3.93 0.58 6.13 0.83 0.09 0.01 0.19 0.02 0.28 0.02 0.83 0 1.61-0.41 2.08-1.11 0.52-0.78 0.56-1.78 0.11-2.6-1.72-3.13-2.36-6.04-1.86-8.43 0.6-2.84 1.61-5.52 2.77-8.61 1.76-4.68 3.76-9.99 4.83-17.34 0.15-1-0.15-2.01-0.81-2.77s-1.62-1.2-2.62-1.2h-0.07c-0.19 0-0.37 0.01-0.56 0.01-2.83 0-5.27-0.43-5.74-0.56-0.08-0.03-0.17-0.07-0.27-0.11-1.25-0.5-2.7-1.04-4.18-1.04-1.91 0-3.42 0.99-4.02 2.64-0.05 0.15-0.19 0.3-0.41 0.44-0.34 0.24-0.77 0.36-1.23 0.36-0.3 0-0.6-0.05-0.88-0.16-0.51-0.19-0.89-0.44-1.09-0.61-0.32-1.26-1.3-2.16-2.67-2.48-0.11-0.34-0.01-0.84 0.39-1.8 0.06-0.14 0.11-0.27 0.15-0.39 0.23-0.07 0.62-0.16 1.26-0.27 2.03-0.35 4.93-1.71 8.6-4.06 0.93-0.59 1.81-1.31 2.62-2.11 2.78-2.8 4.42-3.62 4.42-3.62 0.08-0.04 0.16-0.08 0.23-0.12 0.51-0.3 1.03-0.48 1.57-0.55 2.04-0.26 3.48-2.05 3.28-4.06-0.03-0.45-0.08-0.98-0.14-1.56m-2.01-4.91c-0.5 0-0.93 0.44-0.88 0.98 0.15 1.48 0.4 4.22 0.55 5.73 0.07 0.68-0.44 1.24-1.11 1.33-0.83 0.11-1.67 0.38-2.5 0.86 0 0-1.91 0.85-5.17 4.13-0.66 0.67-1.4 1.27-2.19 1.77-1.9 1.22-5.44 3.32-7.68 3.7-3.18 0.54-2.83 1.06-3.29 2.15s-1.43 3.35 0.63 5.16c0 0 0.06-0.01 0.15-0.01 0.38 0 1.33 0.08 1.4 0.89 0.06 0.67 1.18 1.63 2.61 2.17 0.57 0.21 1.16 0.32 1.76 0.32 0.93 0 1.86-0.26 2.64-0.8 0.55-0.38 1.07-0.91 1.34-1.64 0.28-0.75 0.92-1 1.68-1 1.32 0 2.97 0.76 3.61 1 0.52 0.2 3.38 0.71 6.57 0.71 0.2 0 0.41 0 0.61-0.01h0.02c0.59 0 1.04 0.53 0.96 1.11-1.73 11.86-5.98 18.27-7.57 25.79-0.66 3.11 0.2 6.67 2.11 10.15-2.12-0.24-4.65-0.61-6.04-0.82-0.45-0.12-0.85-0.18-1.25-0.18-2.09 0-3.84 1.4-4.82 3.83-0.97 2.43-2.84 6.34-4.34 9.49-1.88 3.93-2.36 4.97-2.42 5.41-0.01 0.07-0.02 0.14-0.04 0.22-0.18 1-0.51 2.87 2.11 5.81 2.47 2.78 6.04 7.31 6.07 7.36 0.96 1.27 2.6 1.97 4.75 2 1.4 0 2.51-1.11 2.51-2.47v-7.61c0-0.43-0.1-0.84-0.3-1.19-1.29-2.31-3.33-2.79-4.82-2.79-0.52 0-1.04 0.06-1.56 0.17 0 0-0.12 0.02-0.27 0.02-0.59 0-0.78-0.21-0.78-0.88 0-0.23 0.21-1.68 4.33-8.47 0.38-0.16 0.65-0.27 1.02-0.43 2.63 0.64 9.2 2.07 15.17 2.07 0.6 0 1.18-0.02 1.73-0.05 4.12 2.68 8.85 4.56 13.68 5.01 1.72 0.16 3.35 0.23 4.87 0.23 8.72 0 14.39-2.4 18.46-4.75 4.7 4.77 11.58 6.79 16.31 6.79 0.34 0 0.67-0.01 0.98-0.03 1.7-0.11 3.3-0.16 4.73-0.16 3.38 0 5.78 0.29 6.27 0.79 3.68 3.69 5.11 7.84 5.92 9.85 0.25 0.62 0.45 1.27 0.57 1.93 0.87 4.93 3.63 7.12 5.66 8.08 2.78 1.51 5.97 1.85 7.45 1.93h0.04c0.43 0 0.79-0.35 0.79-0.79 0-1.92-0.01-8.33-0.01-10.17 0-0.58-0.1-1.15-0.29-1.7-1.23-3.46-4.81-3.55-5.56-3.76-0.56-0.16-1.09-0.4-1.57-0.74-3.43-2.43 1.12-9.62-10.25-15.25-0.61-0.3-0.97-0.95-0.59-1.52 4.44-6.49 3.96-23.8-12.16-26.36-1.42-0.22-3.35-0.46-5.51-0.46-3.18 0-6.84 0.51-10.03 2.31-1.69 0.21-3.57 0.37-5.79 0.37-0.7 0-1.43-0.02-2.21-0.05-13.2-0.57-15.42-8.32-15.42-8.32-0.01 0-0.01-0.01-0.02-0.01-0.17-26.81-18-32.2-18-32.2-1.41-4.5-3.72-6.38-5.33-6.96-0.08-0.02-0.19-0.04-0.29-0.04z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "l",
        x1: 59.155,
        x2: 59.155,
        y1: 101.5,
        y2: 72.29,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D1C4E9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B39CDB",
        offset: 0.4182
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9D80D1",
        offset: 0.7827
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9575CD",
        offset: 0.9928
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m58.38 64.5s0.56 13.25-5.31 24.75c0 0 3.69 0.38 8.5-0.75 0 0 4.81-13.12 3.44-24.88l-6.63 0.88z",
      fill: "url(#l)"
    }),
    _react2.default.createElement("path", {
      d:
        "m52.33 50.42s-3.5-1-3.32 18.66c0.01 1.57 1.35 2.8 2.92 2.84 5.14 0.13 19.77 1.67 26.99 3.33 1.5 0.35 3-0.78 2.98-2.32-0.15-14.52 6.02-19.77 6.02-19.77s-25.67 3.01-35.59-2.74z",
      fill: "#B39DDB"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 69.447,
        x2: 69.447,
        y1: 52.5,
        y2: 68.698,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EDE7F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E6DEF3",
        offset: 0.1962
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D3C6EA",
        offset: 0.5137
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D1C4E9",
        offset: 0.5391
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C2B0E2",
        offset: 0.7953
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B39DDB",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m86.1 48.41c-19.57 8.44-27.38 4.03-33.02 1.71-1.24-0.51-1.61 0.36-1.61 0.36-2.21 4.08-1.39 10.78 0.74 12.25 7.42 5.1 16.95 4.47 24.28 2.35s12.53-12.41 12.24-14.74c-0.31-2.35-2.63-1.93-2.63-1.93z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m86.5 49.88c0.6 0 0.68 0.24 0.73 0.63 0.07 0.82-1.35 4.61-4.42 8.24-0.11 0.13-0.2 0.28-0.26 0.44-1.48 3.95-2.21 8.58-2.15 13.75 0 0.27-0.13 0.46-0.24 0.58-0.18 0.18-0.43 0.29-0.69 0.29-0.07 0-0.14-0.01-0.22-0.02-7.11-1.64-21.82-3.23-27.29-3.37-0.8-0.02-1.45-0.63-1.46-1.36-0.1-11.6 1.08-15.51 1.8-16.81l0.09-0.18c0.08-0.2 0.15-0.37 0.22-0.53 0.31 0.13 0.62 0.26 0.94 0.4 3.06 1.3 6.87 2.92 12.67 2.92 5.81 0 12.44-1.63 20.26-4.98h0.02m0-1.5c-0.24 0-0.4 0.03-0.4 0.03-8.65 3.73-15 4.95-19.88 4.95-6.17 0-9.99-1.95-13.14-3.25-0.28-0.12-0.52-0.16-0.72-0.16-0.67 0-0.89 0.52-0.89 0.52-0.18 0.33-0.33 0.69-0.48 1.06-0.97 1.75-2.09 6.22-1.98 17.55 0.01 1.57 1.35 2.8 2.92 2.84 5.14 0.13 19.77 1.67 26.99 3.33 0.19 0.04 0.37 0.06 0.55 0.06 1.3 0 2.44-1.03 2.43-2.38-0.06-5.81 0.89-10.11 2.06-13.21 3.1-3.66 4.94-7.98 4.76-9.39-0.22-1.72-1.54-1.95-2.22-1.95z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 57.267,
        x2: 37.499,
        y1: 23.457,
        y2: 40.641,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#D1C4E9",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B39CDB",
        offset: 0.4182
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9D80D1",
        offset: 0.7827
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9575CD",
        offset: 0.9928
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m30.85 11.31s22.66-1.97 26.91 24.82c0.23 1.46 0.32 2.94 0.36 4.42 0.09 2.81 1.2 8.03 4.37 11.7 0.82 0.95 0.04 2.35-1.21 2.16-9.12-1.36-26.68-7.88-26.59-28.03 0.01-1.78-0.13-3.55-0.5-5.29-0.53-2.51-1.46-6.23-3.34-9.78z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "i",
        x1: 45.639,
        x2: 45.639,
        y1: -6.5,
        y2: 67.859,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#B39DDB",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9B7ED0",
        offset: 0.3662
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8662C6",
        offset: 0.7678
      }),
      _react2.default.createElement("stop", {
        stopColor: "#7E57C2",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m36.42 16.16c-0.36-0.4-0.07-1.04 0.47-1 3.46 0.28 11.87 2.36 13.89 15.68 0.64 4.2 0.26 10.21 4.13 16.67 0.31 0.52-0.19 1.15-0.77 0.94-3.49-1.28-14.26-7.23-14.18-20.87 0.05-5.93-0.75-8.36-3.54-11.42z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m33.23 12.82c5.96 0.36 19.85 3.4 23.05 23.55 0.23 1.47 0.31 2.96 0.35 4.23 0.11 3.32 1.33 8.45 4.42 12.26-3.06-0.5-9.81-2.07-15.59-6.6-6.19-4.84-9.3-11.52-9.26-19.87 0.01-2.06-0.16-3.89-0.53-5.61-0.44-2.07-1.15-4.97-2.44-7.96m-1.35-1.54c-0.66 0-1.03 0.03-1.03 0.03 1.88 3.54 2.81 7.26 3.35 9.78 0.37 1.74 0.51 3.51 0.5 5.29-0.1 20.14 17.47 26.67 26.59 28.03 0.08 0.01 0.15 0.02 0.22 0.02 1.11 0 1.76-1.28 0.99-2.18-3.17-3.67-4.28-8.89-4.37-11.7-0.05-1.48-0.13-2.96-0.36-4.42-3.71-23.35-21.42-24.85-25.89-24.85z",
        fill: "#424242"
      })
    )
  );
}

exports.default = CarouselHorse;