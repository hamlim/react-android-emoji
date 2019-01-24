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

function MusicalKeyboard(props) {
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
        id: "b",
        cx: 63.333,
        cy: 3.3333,
        r: 120.14,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EBEBEB",
        offset: 0.3167
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E1E1E1",
        offset: 0.5781
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CFCFCF",
        offset: 0.819
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 4,
      width: 120,
      height: 120,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 63.667,
        cy: 5.6667,
        r: 109.36,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5E5E5E",
        offset: 0.2204
      }),
      _react2.default.createElement("stop", {
        stopColor: "#535353",
        offset: 0.4074
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.5821
      }),
      _react2.default.createElement("stop", {
        stopColor: "#292929",
        offset: 0.7485
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 0.7941
      }),
      _react2.default.createElement("stop", {
        stopColor: "#212121",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M4,4v24h16v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h14v60c0,2.21,1.79,4,4,4h12 c2.21,0,4-1.79,4-4V28h14v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h16V4H4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M121,7v18h-13c-1.66,0-3,1.34-3,3v60c0,0.55-0.45,1-1,1H92c-0.55,0-1-0.45-1-1V28c0-1.66-1.34-3-3-3 H74c-1.66,0-3,1.34-3,3v60c0,0.55-0.45,1-1,1H58c-0.55,0-1-0.45-1-1V28c0-1.66-1.34-3-3-3H40c-1.66,0-3,1.34-3,3v60 c0,0.55-0.45,1-1,1H24c-0.55,0-1-0.45-1-1V28c0-1.66-1.34-3-3-3H7V7H121 M124,4H4v24h16v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4 V28h14v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h14v60c0,2.21,1.79,4,4,4h12c2.21,0,4-1.79,4-4V28h16V4L124,4z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement("rect", {
      x: 40,
      y: 28,
      width: 14,
      height: 56,
      fill: "none"
    }),
    _react2.default.createElement("rect", {
      x: 74,
      y: 28,
      width: 14,
      height: 56,
      fill: "none"
    }),
    _react2.default.createElement("rect", {
      x: 7,
      y: 20,
      width: 114,
      height: 8,
      fill: "#424242"
    }),
    _react2.default.createElement("rect", {
      x: 28,
      y: 92,
      width: 4,
      height: 32,
      fill: "#424242"
    }),
    _react2.default.createElement("rect", {
      x: 62.06,
      y: 92,
      width: 4,
      height: 32,
      fill: "#424242"
    }),
    _react2.default.createElement("rect", {
      x: 96,
      y: 92,
      width: 4,
      height: 32,
      fill: "#424242"
    })
  );
}

exports.default = MusicalKeyboard;
