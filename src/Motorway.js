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

function Motorway(props) {
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
      "g",
      {
        fill: "#E0E0E0"
      },
      _react2.default.createElement("polygon", {
        points:
          "36 57 28 57 28 52 21 52 21 45 9 45 9 52 4 52 4 67 22.83 67 28 67 35.88 67 38.67 67 56 67 56 55 36 55"
      }),
      _react2.default.createElement("polygon", {
        points: "104 55 104 52 80 52 80 67 103.58 67 104.18 67 124 67 124 55"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement(
        "g",
        {
          fill: "#424242"
        },
        _react2.default.createElement("path", {
          d:
            "m19 47v5.17c0 1.1 0.9 1.83 2 1.83h5v3.21c0 1.1 0.9 1.79 2 1.79h7.88c1.1 0 2.12-0.68 2.12-1.79v-0.21h16v8h-48v-11h3.5c1.1 0 1.5-0.73 1.5-1.83v-5.17h8m2-2h-12v7h-5v15h52v-12h-20v2h-8v-5h-7v-7z"
        }),
        _react2.default.createElement("path", {
          d:
            "m102 54v0.85c0 1.1 1.08 2.15 2.18 2.15h17.82v8h-40v-11h20m2-2h-24v15h44v-12h-20v-3z"
        })
      )
    ),
    _react2.default.createElement("rect", {
      x: 4.13,
      y: 64,
      width: 119.87,
      height: 60,
      fill: "#66BB6A"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 4.1347,
        x2: 124,
        y1: 94,
        y2: 94,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FDD835",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEB3B",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "4.13 124 44.03 64.03 84.02 64 124 124",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64,
        x2: 64,
        y1: 79.833,
        y2: 164.35,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.0061418
      }),
      _react2.default.createElement("stop", {
        stopColor: "#666",
        offset: 0.1862
      }),
      _react2.default.createElement("stop", {
        stopColor: "#767676",
        offset: 0.4145
      }),
      _react2.default.createElement("stop", {
        stopColor: "#909090",
        offset: 0.6687
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B4B4B4",
        offset: 0.9399
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "12 124 48.07 64 80.07 64 116 124",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("polygon", {
        points: "55.57 67 52.6 67 53.65 64 56.31 64"
      }),
      _react2.default.createElement("path", {
        d:
          "m48.66 95h-5.84l5.24-15h4.3l-3.7 15zm4.42-18h-3.94l2.77-8h3.17l-2 8z"
      }),
      _react2.default.createElement("polygon", {
        points: "41.48 124 32.74 124 40.41 102 46.91 102"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("polygon", {
        points: "72.48 67 75.44 67 74.4 64 71.74 64"
      }),
      _react2.default.createElement("path", {
        d:
          "m75.68 80h4.3l5.24 15h-5.84l-3.7-15zm-2.71-11h3.17l2.77 8h-3.94l-2-8z"
      }),
      _react2.default.createElement("polygon", {
        points: "86.57 124 95.31 124 87.64 102 81.13 102"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 15.625,
        y2: 81.898,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4A4A4A",
        offset: 0.2678
      }),
      _react2.default.createElement("stop", {
        stopColor: "#606060",
        offset: 0.6865
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9928
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m109.57 49.74h-91.14v-31.31h91.15v31.31zm-88-3.15h84.85v-25.02h-84.85v25.02z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 108,
        x2: 108,
        y1: 15.625,
        y2: 81.898,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4A4A4A",
        offset: 0.2678
      }),
      _react2.default.createElement("stop", {
        stopColor: "#606060",
        offset: 0.6865
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9928
      })
    ),
    _react2.default.createElement("rect", {
      x: 106,
      y: 16,
      width: 4,
      height: 65,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 20,
        x2: 20,
        y1: 15.625,
        y2: 81.898,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4A4A4A",
        offset: 0.2678
      }),
      _react2.default.createElement("stop", {
        stopColor: "#606060",
        offset: 0.6865
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9928
      })
    ),
    _react2.default.createElement("rect", {
      x: 18,
      y: 16,
      width: 4,
      height: 65,
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 64,
        x2: 64,
        y1: 52.581,
        y2: 18.123,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#66BB6A",
        offset: 0.0105
      }),
      _react2.default.createElement("stop", {
        stopColor: "#61B665",
        offset: 0.2382
      }),
      _react2.default.createElement("stop", {
        stopColor: "#53A657",
        offset: 0.5267
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3C8C40",
        offset: 0.8468
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2E7D32",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m98 51.18h-68c-1.1 0-2-0.9-2-2v-31.18c0-1.1 0.9-2 2-2h68c1.1 0 2 0.9 2 2v31.18c0 1.11-0.9 2-2 2z",
      fill: "url(#a)"
    }),
    _react2.default.createElement("path", {
      d:
        "m96.2 19.6v27.98h-64.4v-27.98h64.4m0.13-2.13h-64.66c-1.1 0-2 0.9-2 2v28.24c0 1.1 0.9 2 2 2h64.65c1.1 0 2-0.9 2-2v-28.24c0.01-1.1-0.89-2-1.99-2z",
      fill: "#fff"
    }),
    _react2.default.createElement("line", {
      x1: 55,
      x2: 55,
      y1: 18,
      y2: 49,
      fill: "none",
      stroke: "#FAFAFA",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("polygon", {
        points: "49.53 39 43.92 45.08 38.31 39"
      }),
      _react2.default.createElement("rect", {
        x: 40.67,
        y: 34.82,
        width: 6.52,
        height: 6.32
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FAFAFA"
      },
      _react2.default.createElement("polygon", {
        points: "83.53 39 77.92 45.08 72.31 39"
      }),
      _react2.default.createElement("rect", {
        x: 74.67,
        y: 34.82,
        width: 6.52,
        height: 6.32
      })
    ),
    _react2.default.createElement("circle", {
      cx: 43.83,
      cy: 27.33,
      r: 4.67,
      fill: "#F5F5F5",
      opacity: 0.3
    }),
    _react2.default.createElement("path", {
      d:
        "m89.25 31.33h-22.25c-1.65 0-3-1.35-3-3v-2c0-1.65 1.35-3 3-3h22.25c1.65 0 3 1.35 3 3v2c0 1.65-1.35 3-3 3z",
      fill: "#F5F5F5",
      opacity: 0.3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "M121,67v54H7.13V67H121 M124,64H4.13v60H124V64L124,64z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Motorway;
