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

function SpaceInvader(props) {
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
        id: "f",
        x1: 29.2,
        x2: 40.8,
        y1: 116.2,
        y2: 116.2,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C0E7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#40C0E7",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 29.2,
      y: 110.4,
      width: 11.6,
      height: 11.6,
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 29.2,
        x2: 40.8,
        y1: 11.8,
        y2: 11.8,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#f0f",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#f0f",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 29.2,
      y: 6,
      width: 11.6,
      height: 11.6,
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 87.2,
        x2: 98.8,
        y1: 116.2,
        y2: 116.2,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C0E7",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#40C0E7",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 87.2,
      y: 110.4,
      width: 11.6,
      height: 11.6,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 110.4,
        y2: 17.6,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#792D85",
        offset: 0.0716
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC1CB3",
        offset: 0.3055
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D90DDC",
        offset: 0.5416
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F503F6",
        offset: 0.7247
      }),
      _react2.default.createElement("stop", {
        stopColor: "#f0f",
        offset: 0.831
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M110.4,52.37v-11.6H98.8V29.2H87.2V17.6H75.6v11.6H52.4V17.6H40.8v11.6H29.2v11.57H17.6 v11.6H6v46.4h11.6V64h11.6v34.78h11.58l0.03,0.02v11.6h11.6V91.07H40.8v-11.6h46.4v11.6H75.6v19.33h11.6V98.8l0.03-0.02H98.8 V64h11.6v34.77H122v-46.4H110.4z M40.8,40.77h11.6v11.6H40.8V40.77z M87.2,52.37H75.6v-11.6h11.6V52.37z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 87.2,
        x2: 98.8,
        y1: 11.8,
        y2: 11.8,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#f0f",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#f0f",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 87.2,
      y: 6,
      width: 11.6,
      height: 11.6,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        stroke: "#6F21A1",
        strokeMiterlimit: 10,
        strokeWidth: 4
      },
      _react2.default.createElement("rect", {
        x: 29.2,
        y: 110.4,
        width: 11.6,
        height: 11.6,
        fill: "#792D85"
      }),
      _react2.default.createElement("rect", {
        x: 29.2,
        y: 6,
        width: 11.6,
        height: 11.6,
        fill: "none"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(-1 -4.4846e-11 4.4846e-11 -1 186 232.4)",
        x: 87.2,
        y: 110.4,
        width: 11.6,
        height: 11.6,
        fill: "#792D85"
      }),
      _react2.default.createElement("path", {
        d:
          "M110.4,52.37v-11.6H98.8V29.2H87.2V17.6H75.6 v11.6H52.4V17.6H40.8v11.6H29.2v11.57H17.6v11.6H6v46.4h11.6V64h11.6v34.78h11.58l0.03,11.62h11.6V91.07H40.8v-11.6h46.4v11.6 H75.6v19.33h11.6V98.8l11.6-0.02V64h11.6v34.77H122v-46.4H110.4z M40.8,40.77h11.6v11.6H40.8V40.77z M87.2,52.37H75.6v-11.6 h11.6V52.37z",
        fill: "none"
      }),
      _react2.default.createElement("rect", {
        transform: "matrix(-1 -4.4846e-11 4.4846e-11 -1 186 23.6)",
        x: 87.2,
        y: 6,
        width: 11.6,
        height: 11.6,
        fill: "none"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: -66.009,
        x2: -66.009,
        y1: -124.14,
        y2: -43.085,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#792D85",
        offset: 0.0758
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AC1CB3",
        offset: 0.3085
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D90DDC",
        offset: 0.5432
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F503F6",
        offset: 0.7253
      }),
      _react2.default.createElement("stop", {
        stopColor: "#f0f",
        offset: 0.831
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m-66.01-36.05c-24.57 0-51.01-15.38-51.01-49.15s26.44-49.15 51.01-49.15c13.62 0 26.23 4.51 35.5 12.69 10.15 8.96 15.51 21.57 15.51 36.46 0 14.83-5.36 27.41-15.51 36.39-9.3 8.23-21.9 12.76-35.5 12.76z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m-66.01-132.35c13.13 0 25.27 4.33 34.18 12.19 9.7 8.57 14.83 20.66 14.83 34.96 0 14.24-5.13 26.31-14.83 34.89-8.93 7.9-21.07 12.26-34.18 12.26-13.17 0-25.31-4.3-34.18-12.09-9.7-8.53-14.83-20.65-14.83-35.06 0-14.47 5.13-26.62 14.82-35.12 8.85-7.75 20.99-12.03 34.19-12.03m0-4c-27.52 0-53.01 17.68-53.01 51.15 0 33.29 25.49 51.15 53.01 51.15s53.01-18.31 53.01-51.15c0-33.02-25.49-51.15-53.01-51.15z",
      fill: "#6F21A1"
    })
  );
}

exports.default = SpaceInvader;
