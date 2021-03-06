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

function MusicalNote(props) {
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
      "radialGradient",
      {
        id: "a",
        cx: 67.25,
        cy: 9.25,
        r: 98.804,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#40C4FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m30.93 15.01c-1.68 0.25-2.93 1.7-2.93 3.4v73.61c-4.54 0.15-9.55 2.34-13.6 6.38-7.07 7.07-8.5 17.1-3.2 22.4s15.33 3.87 22.4-3.2c4.04-4.04 6.23-9.06 6.38-13.6h0.02v-60.08c0-0.99 0.72-1.83 1.7-1.98l52-7.8c1.21-0.18 2.3 0.76 2.3 1.98v47.9c-4.54 0.15-9.55 2.34-13.6 6.38-7.07 7.07-8.5 17.1-3.2 22.4s15.33 3.87 22.4-3.2c4.04-4.04 6.23-9.06 6.38-13.6h0.02v-88.56c0-2.1-1.87-3.71-3.95-3.4l-73.12 10.97z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m104.57 7c0.21 0 0.43 0.18 0.43 0.45v87.96l-0.02 0.49c-0.13 3.99-2.14 8.21-5.51 11.58-3.46 3.46-7.93 5.52-11.97 5.52-1.76 0-4.27-0.4-6.19-2.32-1.88-1.88-2.66-4.72-2.19-7.99 0.51-3.59 2.43-7.2 5.39-10.16 3.37-3.37 7.59-5.38 11.58-5.51l2.9-0.09v-50.8c0-2.76-2.24-5-5-5-0.25 0-0.5 0.02-0.75 0.06l-52 7.8c-2.45 0.36-4.24 2.44-4.24 4.93v59.49l-0.02 0.49c-0.13 3.99-2.14 8.21-5.51 11.58-3.46 3.46-7.93 5.52-11.97 5.52-1.76 0-4.27-0.4-6.19-2.32-1.88-1.88-2.66-4.72-2.19-7.99 0.51-3.59 2.43-7.2 5.39-10.16 3.37-3.37 7.59-5.38 11.58-5.51l2.9-0.09v-76.52c0-0.22 0.16-0.4 0.37-0.44l73.12-10.97h0.09m0-3c-0.17 0-0.34 0.01-0.52 0.04l-73.12 10.97c-1.68 0.25-2.93 1.7-2.93 3.4v73.61c-4.54 0.15-9.55 2.34-13.6 6.38-7.07 7.07-8.5 17.1-3.2 22.4 2.16 2.16 5.1 3.2 8.31 3.2 4.67 0 9.9-2.21 14.09-6.4 4.04-4.04 6.23-9.06 6.38-13.6h0.02v-60.08c0-0.99 0.72-1.83 1.7-1.98l52-7.8c0.1-0.02 0.2-0.02 0.3-0.02 1.08 0 2 0.88 2 2v47.9c-4.54 0.15-9.55 2.34-13.6 6.38-7.07 7.07-8.5 17.1-3.2 22.4 2.16 2.16 5.1 3.2 8.31 3.2 4.67 0 9.9-2.21 14.09-6.4 4.04-4.04 6.23-9.06 6.38-13.6h0.02v-88.56c0-1.93-1.57-3.44-3.43-3.44z",
        fill: "#424242"
      })
    )
  );
}

exports.default = MusicalNote;
