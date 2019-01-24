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

function FilmStrip(props) {
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
        cx: 64.667,
        cy: 4.6667,
        r: 128.1,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m4 4v120h120v-120h-120zm16 110c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm0-92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm16 92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm0-92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm16 92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm0-92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm16 92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm0-92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm16 92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm0-92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm16 92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm0-92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm16 92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8zm0-92c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v8z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M121,7v114H7V7H121 M124,4H4v120h120V4L124,4z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64,
        cy: 32.333,
        r: 73.941,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A1887F",
        offset: 0.0042918
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9B8077",
        offset: 0.2601
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8A6B60",
        offset: 0.6635
      }),
      _react2.default.createElement("stop", {
        stopColor: "#795548",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 12,
      y: 32,
      width: 104,
      height: 64,
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m18 12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m34 12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m50 12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m66 12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m82 12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m98 12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m114 12c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m18 104c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m34 104c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m50 104c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m66 104c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m82 104c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m98 104c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("path", {
        d:
          "m114 104c1.1 0 2 0.9 2 2v8c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-8c0-1.1 0.9-2 2-2h4m0-2h-4c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      }),
      _react2.default.createElement("rect", {
        x: 12,
        y: 32,
        width: 104,
        height: 64,
        fill: "none",
        stroke: "#424242",
        strokeMiterlimit: 10,
        strokeWidth: 4
      })
    )
  );
}

exports.default = FilmStrip;
