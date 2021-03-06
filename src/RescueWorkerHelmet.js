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

function RescueWorkerHelmet(props) {
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
        id: "j",
        x1: 64.083,
        x2: 64.083,
        y1: 124,
        y2: 51.333,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#795548",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5D4037",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m20.58 59.36 87.42 0.28v14.36c0 23.16-17.58 42-39.2 42h-9.44c-21.58 0-39.14-18.78-39.2-41.89l0.42-14.75m-7.78-8.03-0.63 22.67c0 27.61 21.13 50 47.2 50h9.44c26.07 0 47.2-22.39 47.2-50v-22.33l-103.21-0.34z",
      fill: "url(#j)"
    }),
    _react2.default.createElement("path", {
      d:
        "m71.57 124h-15.14c-4.66 0-8.43-3.77-8.43-8.43v-0.57c0-1.66 1.34-3 3-3h26c1.66 0 3 1.34 3 3v0.57c0 4.66-3.77 8.43-8.43 8.43z",
      fill: "#8D6E63"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.11,
      cy: 63.33,
      rx: 60,
      ry: 16.67,
      fill: "#C62828"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.11,
      cy: 60.3,
      rx: 60,
      ry: 16.67,
      fill: "#E53935"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m117.68 53.81c-0.88-17.96-13.61-48.13-52.52-48.9 0 0-0.73-0.02-1.05-0.02s-1.05 0.02-1.05 0.02c-38.9 0.77-51.63 30.94-52.51 48.9 0 14.06 107.13 14.06 107.13 0z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64.114,
        x2: 64.114,
        y1: 5.7689,
        y2: 64.318,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("use", {
      fill: "url(#a)",
      xlinkHref: "#d"
    }),
    _react2.default.createElement(
      "clipPath",
      {
        id: "g"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement("path", {
      d: "m40.3 8.32 9.57-3.44v34.79c-1.95-15.03-4.73-25.91-9.57-31.35z",
      clipPath: "url(#g)",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d: "m87.93 8.32-9.57-3.44v34.79c1.95-15.03 4.73-25.91 9.57-31.35z",
      clipPath: "url(#g)",
      fill: "#C62828"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64.114,
        x2: 64.114,
        y1: 4.8844,
        y2: 58.482,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C62828",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m76.21 58.7h-24.19c-1.47 0-2.67-1.2-2.67-2.67v-49.36c0-1.47 1.2-2.67 2.67-2.67h24.19c1.47 0 2.67 1.2 2.67 2.67v49.36c0 1.47-1.2 2.67-2.67 2.67z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m56 55.36v-38c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v38.01c0 1.66-1.34 3-3 3h-10c-1.66-0.01-3-1.35-3-3.01z",
      fill: "#fff"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.11,
      cy: 63.33,
      rx: 60,
      ry: 16.67,
      fill: "#C62828"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.11,
      cy: 60.3,
      rx: 60,
      ry: 16.67,
      fill: "#E53935"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m117.68 53.81c-0.88-17.96-13.61-48.13-52.52-48.9 0 0-0.73-0.02-1.05-0.02s-1.05 0.02-1.05 0.02c-38.9 0.77-51.63 30.94-52.51 48.9 0 14.06 107.13 14.06 107.13 0z"
      })
    ),
    _react2.default.createElement("use", {
      fill: "url(#a)",
      xlinkHref: "#c"
    }),
    _react2.default.createElement(
      "clipPath",
      {
        id: "f"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement("path", {
      d: "m40.3 8.32 9.57-3.44v34.79c-1.95-15.03-4.73-25.91-9.57-31.35z",
      clipPath: "url(#f)",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d: "m87.93 8.32-9.57-3.44v34.79c1.95-15.03 4.73-25.91 9.57-31.35z",
      clipPath: "url(#f)",
      fill: "#C62828"
    }),
    _react2.default.createElement("path", {
      d:
        "m76.21 58.7h-24.19c-1.47 0-2.67-1.2-2.67-2.67v-49.36c0-1.47 1.2-2.67 2.67-2.67h24.19c1.47 0 2.67 1.2 2.67 2.67v49.36c0 1.47-1.2 2.67-2.67 2.67z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("ellipse", {
      cx: 64.11,
      cy: 63.33,
      rx: 60,
      ry: 16.67,
      fill: "#C62828"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 64.114,
        cy: 59.12,
        r: 43.856,
        gradientTransform: "matrix(1 0 0 1.0613 0 -2.4405)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#EF5350",
        offset: 0.3232
      }),
      _react2.default.createElement("stop", {
        stopColor: "#E53935",
        offset: 1
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 64.11,
      cy: 60.3,
      rx: 60,
      ry: 16.67,
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "b",
        d:
          "m117.68 53.81c-0.88-17.96-13.61-48.13-52.52-48.9 0 0-0.73-0.02-1.05-0.02s-1.05 0.02-1.05 0.02c-38.9 0.77-51.63 30.94-52.51 48.9 0 14.06 107.13 14.06 107.13 0z"
      })
    ),
    _react2.default.createElement("use", {
      fill: "url(#a)",
      xlinkHref: "#b"
    }),
    _react2.default.createElement(
      "clipPath",
      {
        id: "e"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement("path", {
      d: "m40.3 8.32 9.57-3.44v34.79c-1.95-15.03-4.73-25.91-9.57-31.35z",
      clipPath: "url(#e)",
      fill: "#B71C1C"
    }),
    _react2.default.createElement("path", {
      d: "m87.93 8.32-9.57-3.44v34.79c1.95-15.03 4.73-25.91 9.57-31.35z",
      clipPath: "url(#e)",
      fill: "#B71C1C"
    }),
    _react2.default.createElement("path", {
      d:
        "M83,29H72V18.36C72,16.7,70.66,15,69,15H59c-1.66,0-3,1.7-3,3.36V29H45c-1.66,0-3,1.7-3,3.36v10 c0,1.66,1.34,2.64,3,2.64h11v11.36c0,1.66,1.34,2.64,3,2.64h10c1.66,0,3-0.98,3-2.64V45h11c1.66,0,3-0.98,3-2.64v-10 C86,30.7,84.66,29,83,29z",
      fill: "#fff"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M69,18v11.36c0,1.66,1.34,2.64,3,2.64h11v10H72c-1.66,0-3,1.7-3,3.36V56H59V45.36 C59,43.7,57.66,42,56,42H45V32h11c1.66,0,3-0.98,3-2.64V18H69 M69,15H59c-1.66,0-3,1.7-3,3.36V29H45c-1.66,0-3,1.7-3,3.36v10 c0,1.66,1.34,2.64,3,2.64h11v11.36c0,1.66,1.34,2.64,3,2.64h10c1.66,0,3-0.98,3-2.64V45h11c1.66,0,3-0.98,3-2.64v-10 C86,30.7,84.66,29,83,29H72V18.36C72,16.7,70.66,15,69,15L69,15z",
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
          "m75.94 7c0.17 1.21 1.05 2.21 2.25 2.49 11.69 2.75 20.94 8.95 27.53 18.44 5.03 7.24 8.27 16.37 8.9 25.05 0.07 1.02 0.6 1.93 1.49 2.41 3.1 1.69 4.88 3.53 4.88 4.91v3.03c0.01 4.77-19.57 13.67-56.99 13.67s-57-8.9-57-13.67v-3.03c0-1.39 1.9-3.22 5-4.91 0.89-0.49 1.51-1.4 1.58-2.41 0.63-8.68 3.89-17.81 8.92-25.05 6.58-9.48 15.86-15.69 27.55-18.44 1.2-0.28 2.11-1.28 2.29-2.49h23.66m0.21-3h-24.19c-1.39 0-2.52 1.13-2.65 2.57-27.66 6.5-37.67 30.49-38.81 46.19-4.15 2.26-6.56 4.83-6.56 7.54v3.03c0 9.21 26.86 16.67 60 16.67s60-7.46 60-16.67v-3.03c0-2.72-2.3-5.28-6.45-7.55-1.15-15.7-11.07-39.68-38.73-46.19-0.12-1.43-1.24-2.56-2.63-2.56h0.02z",
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
          "m77 114c0.55 0 1 0.45 1 1v0.57c0 3.54-2.88 6.43-6.43 6.43h-15.14c-3.54 0-6.43-2.88-6.43-6.43v-0.57c0-0.55 0.45-1 1-1h26m0-2h-26c-1.66 0-3 1.34-3 3v0.57c0 4.66 3.77 8.43 8.43 8.43h15.14c4.66 0 8.43-3.77 8.43-8.43v-0.57c0-1.66-1.34-3-3-3z",
        fill: "#424242"
      })
    )
  );
}

exports.default = RescueWorkerHelmet;
