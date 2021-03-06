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

function Monorail(props) {
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
        x1: 70.135,
        x2: 70.135,
        y1: 14.333,
        y2: 78.341,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.1102
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E9E9E9",
        offset: 0.3278
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DADADA",
        offset: 0.5898
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C2C2C2",
        offset: 0.8739
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.9232
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M124,12v66H28c-1.75,0-4.21-0.64-6.43-2.22c-2.85-2.02-5.3-5.58-5.3-11.28 c0-3.82,2.54-7.92,6.85-12.5c4.54-4.82,11.05-10.19,18.61-16.31c8.37-6.78,17.02-13.23,25.03-17.65C73.36,14.39,79.34,12,83.75,12 H124z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("polygon", {
      points:
        "124 85 3 85 3 102 16 102 16 125 32 125 32 102 56 102 56 125 72 125 72 102 96 102 96 125 112 125 112 102 124 102",
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 88v11h-12v23h-10v-23h-30v23h-10v-23h-30v23h-10v-23h-13v-11h115m3-3h-121v17h13v23h16v-23h24v23h16v-23h24v23h16v-23h12v-17z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d: "m28 82.83",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "m124 78h-96c-2.67 0-1.81 0.35-0.68 1.26 2.76 2.2 7.59 10.36 8.36 11.69 1.19 2.06 3.63 3.05 5.94 3.05h82.38v-16z",
      fill: "#424242"
    }),
    _react2.default.createElement("path", {
      d:
        "M124.04,52H23.12c-4.31,4.58-6.85,8.68-6.85,12.5c0,5.7,2.45,9.26,5.3,11.28 c44.44-20.99,81.76-21.62,102.47-22.15V52z",
      fill: "#E53935"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 15v76h-79.25c-0.61 0-2.66-0.1-3.37-1.32-0.07-0.11-0.16-0.28-0.28-0.5-3.12-5.51-5.51-9.05-7.48-11.05 0.04-1.28-0.74-2.74-2.62-3.07-3.04-0.54-3.52-0.88-4.69-1.72-1.84-1.31-4.04-3.93-4.04-8.98 0-2.71 1.99-6.14 6.07-10.49 4.57-4.87 11.61-10.57 18.41-16.08 9.59-7.77 17.67-13.44 24.72-17.34 6.35-3.51 11.89-5.45 15.62-5.45h36.91m3-3h-39.91c-4.43 0-10.44 2.15-17.08 5.83-8.05 4.45-16.74 10.81-25.16 17.63-7.6 6.16-14.14 11.5-18.7 16.35-4.33 4.61-6.88 8.7-6.88 12.54 0 5.73 2.44 9.4 5.3 11.43 1.41 1.01 2.24 1.57 5.9 2.23 0.12 0.02 0.16 0.03 0.14 0.03-0.03 0-0.29-0.03-0.57-0.03-0.67 0-1.47 0.16 0.27 1.25 2.91 1.81 7.69 10.58 8.46 11.92 1.2 2.07 3.65 2.82 5.97 2.82h82.26v-82z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m84.75 26.46-2.87 7.04c-1.24 3.07-5.03 5.5-8.43 5.5h-35.95c8.11-7.09 16.25-13.58 24.26-18h19.06c3.4 0 5.17 2.4 3.93 5.46z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement("path", {
      d:
        "M124.04,39H92.79c-2.2,0-3.36-1.8-2.57-4l3.57-10c0.78-2.2,3.23-4,5.43-4h24.83V39z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121.04 24v12h-28l3.56-9.99c0.39-1.08 1.75-2.01 2.6-2.01h21.84m3-3h-24.83c-2.2 0-4.64 1.8-5.43 4l-3.57 10c-0.78 2.2 0.37 4 2.57 4h31.25v-18h0.01z",
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
          "m80.91 24c0.77 0 1.14 0.21 1.23 0.35 0.07 0.1 0.07 0.44-0.15 0.98l-2.88 7.05c-0.77 1.9-3.47 3.62-5.66 3.62h-27.8c5.18-4.27 11.03-8.68 16.89-12h18.46m-0.18-3h-19.06c-8.01 4.42-16.15 10.91-24.26 18h35.95c3.4 0 7.19-2.43 8.43-5.5l2.87-7.04c1.24-3.06-0.53-5.46-3.93-5.46z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Monorail;
