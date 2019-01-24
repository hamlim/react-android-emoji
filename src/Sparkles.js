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

function Sparkles(props) {
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
        "m49.94 4.51 3.31 22.56c1.37 11.11 9.6 20.14 20.53 22.54l15.74 3.46-15.74 3.46c-10.93 2.4-19.16 11.43-20.53 22.54l-3.31 26.78-3.31-26.78c-1.37-11.11-9.6-20.14-20.53-22.54l-15.74-3.46 15.74-3.46c10.93-2.4 19.16-11.43 20.53-22.54l3.31-22.56z",
      fill: "#FFEA00"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m49.94 25.18 0.34 2.29c1.54 12.33 10.72 22.4 22.86 25.06l2.4 0.53-2.4 0.53c-12.15 2.67-21.34 12.76-22.86 25.1l-0.33 2.68-0.33-2.68c-1.53-12.35-10.71-22.43-22.86-25.1l-2.4-0.53 2.4-0.53c12.14-2.67 21.32-12.74 22.86-25.07l0.32-2.28m0-20.67-3.31 22.56c-1.37 11.11-9.6 20.14-20.53 22.54l-15.74 3.46 15.74 3.46c10.93 2.4 19.16 11.43 20.53 22.54l3.31 26.78 3.31-26.78c1.37-11.11 9.6-20.14 20.53-22.54l15.74-3.46-15.74-3.47c-10.93-2.4-19.16-11.43-20.53-22.54l-3.31-22.55z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m97.12 9.01 1.71 12.04c0.71 6.42 4.98 11.64 10.64 13.03l8.16 2-8.16 2c-5.66 1.39-9.93 6.61-10.64 13.03l-1.71 15.48-1.71-15.49c-0.71-6.42-4.98-11.64-10.64-13.03l-8.16-2 8.16-2c5.66-1.39 9.93-6.61 10.64-13.03l1.71-12.03z",
      fill: "#FFF59D"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m97.12 26.47c1.73 4.33 4.94 7.8 8.98 9.61-4.03 1.81-7.25 5.28-8.98 9.61-1.73-4.33-4.94-7.8-8.98-9.61 4.04-1.81 7.26-5.29 8.98-9.61m0-17.46-1.71 12.04c-0.71 6.42-4.98 11.64-10.64 13.03l-8.16 2 8.16 2c5.66 1.39 9.93 6.61 10.64 13.03l1.71 15.48 1.71-15.48c0.71-6.42 4.98-11.64 10.64-13.03l8.16-2-8.16-2c-5.66-1.39-9.93-6.61-10.64-13.03l-1.71-12.04z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m85.49 60.92 2.12 12.92c0.88 7.11 6.14 12.89 13.14 14.42l10.08 2.21-10.08 2.21c-6.99 1.54-12.26 7.32-13.14 14.42l-2.12 17.14-2.12-17.14c-0.88-7.11-6.14-12.89-13.14-14.42l-10.08-2.21 10.08-2.21c6.99-1.54 12.26-7.32 13.14-14.42l2.12-12.92z",
      fill: "#FDD835"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m85.49 78.02c1.91 5.76 6.38 10.38 12.13 12.45-5.75 2.07-10.22 6.7-12.13 12.45-1.91-5.76-6.38-10.38-12.13-12.45 5.75-2.07 10.22-6.69 12.13-12.45m0-17.1-2.12 12.92c-0.88 7.11-6.14 12.89-13.14 14.42l-10.08 2.21 10.08 2.21c6.99 1.54 12.26 7.32 13.14 14.42l2.12 17.14 2.12-17.14c0.88-7.11 6.14-12.89 13.14-14.42l10.08-2.21-10.08-2.21c-6.99-1.54-12.26-7.32-13.14-14.42l-2.12-12.92z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Sparkles;
