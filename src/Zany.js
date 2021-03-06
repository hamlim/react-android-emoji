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

function Zany(props) {
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
      "symbol",
      {
        viewBox: "-64.5 -64.5 129 129"
      },
      _react2.default.createElement(
        "g",
        {
          fill: "none",
          stroke: "#4285F4",
          strokeMiterlimit: 10
        },
        _react2.default.createElement("rect", {
          x: -64,
          y: -64,
          width: 128,
          height: 128
        }),
        _react2.default.createElement("path", {
          d:
            "M36.95,37.82C27.32,46.32,14.2,51,0,51 c-14.27,0-27.39-4.62-36.96-13.01C-47.45,28.79-53,15.65-53,0c0-15.58,5.55-28.69,16.04-37.92C-27.36-46.35-14.24-51,0-51 c14.17,0,27.29,4.71,36.95,13.25C47.45-28.45,53-15.4,53,0C53,15.47,47.45,28.55,36.95,37.82z"
        }),
        _react2.default.createElement("path", {
          d:
            "m0 55c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55s57 19.69 57 55c0 35.51-27.41 55-57 55z"
        }),
        _react2.default.createElement("path", {
          d:
            "M0-43c-12.29,0-23.54,3.94-31.68,11.09 C-40.39-24.25-45-13.21-45,0c0,29.7,22.6,43,45,43c21.67,0,45-13.46,45-43S21.67-43,0-43L0-43z"
        }),
        _react2.default.createElement("line", {
          x1: -0.01,
          x2: -0.01,
          y1: 51,
          y2: -51
        }),
        _react2.default.createElement("line", {
          x1: -16,
          x2: -16,
          y1: 48.95,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 15.99,
          x2: 15.99,
          y1: 48.91,
          y2: -48.93
        }),
        _react2.default.createElement("line", {
          x1: 53,
          x2: -53,
          y1: 0.08,
          y2: 0.08
        })
      )
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 19.717,
        y2: 107.7,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FEE133",
        offset: 0.5
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FEDE32",
        offset: 0.6118
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCD32F",
        offset: 0.7076
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAC12B",
        offset: 0.7975
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F7A924",
        offset: 0.8834
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F6A323",
        offset: 0.9
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M64,119.89C36.07,119.89,6,102.4,6,64S36.07,8.11,64,8.11c15.48,0,29.81,5.12,40.36,14.43 C115.9,32.72,122,47.06,122,64c0,16.86-6.1,31.17-17.64,41.39C93.78,114.74,79.45,119.89,64,119.89z",
      fill: "url(#e)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 10.11c14.99 0 28.86 4.95 39.03 13.93 11.1 9.79 16.97 23.61 16.97 39.96 0 16.27-5.87 30.07-16.97 39.89-10.21 9.03-24.07 14-39.03 14-15.04 0-28.9-4.91-39.04-13.82-11.1-9.75-16.96-23.61-16.96-40.07 0-16.54 5.86-30.42 16.96-40.15 10.11-8.86 23.97-13.74 39.04-13.74m0-4c-31.15 0-60 20-60 57.89 0 37.68 28.85 57.89 60 57.89s60-20.73 60-57.89c0-37.37-28.85-57.89-60-57.89z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("circle", {
      cx: 80.44,
      cy: 40.86,
      r: 21.99,
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.44 22.86c7.37 0 13.92 4.41 16.68 11.24 3.73 9.2-0.72 19.71-9.92 23.44-2.17 0.88-4.44 1.32-6.75 1.32-7.37 0-13.92-4.41-16.68-11.24-3.73-9.2 0.72-19.71 9.92-23.44 2.16-0.87 4.43-1.32 6.75-1.32m0-4c-2.75 0-5.55 0.52-8.25 1.62-11.27 4.56-16.69 17.38-12.13 28.64 3.47 8.55 11.7 13.74 20.39 13.74 2.75 0 5.55-0.52 8.25-1.62 11.26-4.56 16.68-17.39 12.12-28.65-3.46-8.54-11.69-13.73-20.38-13.73z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("circle", {
      cx: 80.44,
      cy: 41,
      r: 7,
      fill: "#242424"
    }),
    _react2.default.createElement("circle", {
      cx: 35.89,
      cy: 56.91,
      r: 16,
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m35.94 44.91c4.91 0 9.28 2.94 11.12 7.49 1.2 2.97 1.18 6.23-0.07 9.18s-3.57 5.24-6.54 6.44c-1.45 0.59-2.96 0.88-4.5 0.88-4.91 0-9.28-2.94-11.12-7.49-2.48-6.13 0.48-13.14 6.61-15.62 1.45-0.58 2.96-0.88 4.5-0.88m0-4c-2 0-4.04 0.38-6 1.18-8.19 3.32-12.13 12.65-8.82 20.83 2.52 6.22 8.51 9.99 14.83 9.99 2 0 4.04-0.38 6-1.18 8.19-3.32 12.13-12.65 8.82-20.83-2.52-6.22-8.51-9.99-14.83-9.99z",
      fill: "#EB8F00"
    }),
    _react2.default.createElement("circle", {
      cx: 35.95,
      cy: 57,
      r: 7,
      fill: "#242424"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m66.78 76.47c-12.05 4.06-23.6 6.83-33.52 8.25-2.46 0.35-3.83 3.08-2.58 5.23 8.23 14.15 27.4 21.59 45.81 15.38 20.15-6.79 29.37-24.25 27.19-40.05-0.34-2.44-3.06-3.75-5.21-2.55-8.76 4.88-19.63 9.67-31.69 13.74z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "b"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m66.78 76.47c-12.05 4.06-23.6 6.83-33.52 8.25-2.46 0.35-3.83 3.08-2.58 5.23 8.23 14.15 27.4 21.59 45.81 15.38 20.15-6.79 29.37-24.25 27.19-40.05-0.34-2.44-3.06-3.75-5.21-2.55-8.76 4.88-19.63 9.67-31.69 13.74z",
      clipPath: "url(#b)",
      fill: "#242424"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#b)",
        opacity: 0.6
      },
      _react2.default.createElement("path", {
        d:
          "m99.81 66.56c0.77 6.86-0.89 13.93-4.72 19.98-4.37 6.9-11.24 12.09-19.87 15-3.93 1.33-8 2-12.08 2-11.83 0-22.98-5.85-28.62-14.96 10.35-1.53 21.92-4.4 33.54-8.31 11.62-3.93 22.58-8.66 31.75-13.71m0.38-4.28c-0.58 0-1.17 0.14-1.72 0.45-8.76 4.88-19.63 9.67-31.69 13.74-12.05 4.06-23.6 6.83-33.52 8.25-2.46 0.35-3.83 3.08-2.58 5.23 6.23 10.72 18.75 17.59 32.46 17.59 4.39 0 8.89-0.7 13.36-2.21 20.15-6.79 29.37-24.25 27.19-40.05-0.26-1.81-1.83-3-3.5-3z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m66.78 76.47c-12.05 4.06-23.6 6.83-33.52 8.25-2.46 0.35-3.83 3.08-2.58 5.23 8.23 14.15 27.4 21.59 45.81 15.38 20.15-6.79 29.37-24.25 27.19-40.05-0.34-2.44-3.06-3.75-5.21-2.55-8.76 4.88-19.63 9.67-31.69 13.74z",
      fill: "none"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.78 76.47c-12.05 4.06-23.6 6.83-33.52 8.25-2.46 0.35-3.83 3.08-2.58 5.23 8.23 14.15 27.4 21.59 45.81 15.38 20.15-6.79 29.37-24.25 27.19-40.05-0.34-2.44-3.06-3.75-5.21-2.55-8.76 4.88-19.63 9.67-31.69 13.74z",
      fill: "none"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m34.79 89.27 14.11 41.85 64.48-21.73-14.1-41.85c-9.03 4.9-19.72 9.48-31.04 13.29-11.3 3.81-22.57 6.63-32.71 8.2"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m67.1 124.92-3.28 0.16c-9.5 0.45-17.56-6.88-18.01-16.38l-1.84-38.72 37.66-1.79 1.84 38.72c0.45 9.5-6.88 17.56-16.37 18.01z",
      clipPath: "url(#a)",
      fill: "#E04C74"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        opacity: 0.3
      },
      _react2.default.createElement("path", {
        d:
          "m77.83 72.38 1.65 34.72c0.35 7.28-5.29 13.48-12.57 13.82l-3.28 0.16c-0.21 0.01-0.43 0.02-0.64 0.02-7.06 0-12.85-5.53-13.18-12.59l-1.65-34.72 29.67-1.41m3.81-4.19-37.66 1.79 1.84 38.72c0.44 9.22 8.05 16.4 17.18 16.4 0.28 0 0.55-0.01 0.83-0.02l3.28-0.16c9.5-0.45 16.83-8.51 16.38-18.01l-1.85-38.72z",
        fill: "#AB3F2E"
      })
    ),
    _react2.default.createElement("line", {
      x1: 62.81,
      x2: 64.42,
      y1: 69.08,
      y2: 103.18,
      clipPath: "url(#a)",
      fill: "none",
      opacity: 0.3,
      stroke: "#AB3F2E",
      strokeLinecap: "round",
      strokeMiterlimit: 10,
      strokeWidth: 4
    })
  );
}

exports.default = Zany;
