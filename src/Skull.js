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

function Skull(props) {
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
        id: "a",
        x1: 64,
        x2: 64,
        y1: 122.01,
        y2: 5.9888,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C7C7C7",
        offset: 0.001315
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CACACA",
        offset: 0.2797
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D5D5D5",
        offset: 0.5253
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E7E7E7",
        offset: 0.7578
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FCFCFC",
        offset: 0.9473
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m40.51 122.01c-1.73 0-3.13-1.41-3.13-3.13v-15.42c0-1.1-0.9-2-2-2h-8.19c-4.36 0-8.47-1.7-11.55-4.8-3.08-3.09-4.76-7.18-4.75-11.52v-26.03c-0.01-29.29 23.82-53.12 53.11-53.12s53.12 23.83 53.12 53.12v26.02c0 9-7.33 16.33-16.33 16.33h-8.19c-1.1 0-2 0.9-2 2v15.42c0 1.73-1.41 3.13-3.13 3.13h-46.96z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m64 7.99c28.19 0 51.12 22.93 51.12 51.12v26.02c0 7.9-6.43 14.33-14.33 14.33h-8.19c-2.21 0-4 1.79-4 4v15.42c0 0.63-0.51 1.13-1.13 1.13h-46.96c-0.63 0-1.13-0.51-1.13-1.13v-15.42c0-2.21-1.79-4-4-4h-8.19c-3.83 0-7.43-1.49-10.13-4.21-2.7-2.71-4.18-6.29-4.17-10.12v-26.02c-0.01-28.19 22.92-51.12 51.11-51.12m0-4c-30.4 0-55.12 24.72-55.12 55.12v26.02c-0.03 10.1 8.18 18.33 18.3 18.33h8.19v15.42c0 2.83 2.3 5.13 5.13 5.13h46.96c2.83 0 5.13-2.29 5.13-5.13v-15.42h8.19c10.1 0 18.33-8.22 18.33-18.33v-26.02c0.01-30.4-24.73-55.12-55.11-55.12z",
      fill: "#A1A1A1"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.39 90.42h-6.85c-2.47 0-4.23-2.38-3.51-4.74l2.27-7.44c1.41-4.6 7.92-4.6 9.33 0l2.28 7.44c0.72 2.35-1.05 4.74-3.52 4.74z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.51 64.58c0-7.89 6.38-14.29 14.29-14.29 7.89 0 14.3 6.38 14.3 14.29 0 7.89-6.39 14.3-14.3 14.3-7.89 0-14.29-6.41-14.29-14.3z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m22.85 64.58c0-7.89 6.39-14.29 14.3-14.29 7.89 0 14.29 6.38 14.29 14.29 0 7.89-6.38 14.3-14.29 14.3-7.89 0-14.3-6.41-14.3-14.3z",
      fill: "#242424"
    }),
    _react2.default.createElement("path", {
      d:
        "m49.53 123.7h-0.53c-1.66 0-3.01-1.35-3.01-3.01v-7.98c0-1.66 1.35-3.01 3.01-3.01h0.52c1.66 0 3.01 1.35 3.01 3.01v7.98c0.01 1.66-1.34 3.01-3 3.01z",
      fill: "#A1A1A1"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.23 123.47h-0.53c-1.66 0-3.01-1.35-3.01-3.01v-7.98c0-1.66 1.35-3.01 3.01-3.01h0.52c1.66 0 3.01 1.35 3.01 3.01v7.98c0.01 1.66-1.34 3.01-3 3.01z",
      fill: "#A1A1A1"
    }),
    _react2.default.createElement("path", {
      d:
        "m78.93 123.47h-0.53c-1.66 0-3.01-1.35-3.01-3.01v-7.98c0-1.66 1.35-3.01 3.01-3.01h0.52c1.66 0 3.01 1.35 3.01 3.01v7.98c0.01 1.66-1.34 3.01-3 3.01z",
      fill: "#A1A1A1"
    })
  );
}

exports.default = Skull;
