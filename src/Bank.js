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

function Bank(props) {
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
        id: "i",
        cx: 63,
        cy: 43.5,
        r: 77.661,
        gradientTransform: "matrix(.8571 0 0 1 9.1429 0)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#707070",
        offset: 0.2609
      }),
      _react2.default.createElement("stop", {
        stopColor: "#616161",
        offset: 0.5781
      }),
      _react2.default.createElement("stop", {
        stopColor: "#484848",
        offset: 0.9234
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 32,
      width: 96,
      height: 88,
      fill: "url(#i)"
    }),
    _react2.default.createElement("rect", {
      x: 16,
      y: 48,
      width: 20,
      height: 60,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 26,
        x2: 26,
        y1: 51.667,
        y2: 61.263,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 16,
      y: 48,
      width: 20,
      height: 20,
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "g",
        x1: 322,
        x2: 322,
        y1: 63.667,
        y2: 76.184,
        gradientTransform: "matrix(-1 0 0 -1 348 164)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "16 84 36 84 36 104 16 104",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "24.67 48 21.67 48 21.67 104 24.67 104",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "30.33 48 27.33 48 27.33 108.75 30.33 108.75",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "19 48 16 48 16 104 19 104",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "36 48 33 48 33 104 36 104",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 26,
        x2: 26,
        y1: 48.167,
        y2: 38.832,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2A2A2",
        offset: 0.4136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d: "m12 40v5c0 3.87 3.13 7 7 7h14c3.87 0 7-3.13 7-7v-5h-28z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m37 43v2c0 2.21-1.79 4-4 4h-14c-2.21 0-4-1.79-4-4v-2h22m3-3h-28v5c0 3.87 3.13 7 7 7h14c3.87 0 7-3.13 7-7v-5z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 398,
        x2: 398,
        y1: 101.33,
        y2: 93.325,
        gradientTransform: "matrix(-1 0 0 -1 424 204)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2A2A2",
        offset: 0.4136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d: "m40 112v-5c0-3.87-3.13-7-7-7h-14c-3.87 0-7 3.13-7 7v5h28z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m33 103c2.21 0 4 1.79 4 4v2h-22v-2c0-2.21 1.79-4 4-4h14m0-3h-14c-3.87 0-7 3.13-7 7v5h28v-5c0-3.87-3.13-7-7-7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 92,
      y: 48,
      width: 20,
      height: 60,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 102,
        x2: 102,
        y1: 51.667,
        y2: 61.263,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 92,
      y: 48,
      width: 20,
      height: 20,
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 246,
        x2: 246,
        y1: 63.667,
        y2: 76.184,
        gradientTransform: "matrix(-1 0 0 -1 348 164)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("polygon", {
      points: "92 84 112 84 112 104 92 104",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "100.67 48 97.67 48 97.67 104 100.67 104",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "106.33 48 103.33 48 103.33 108.75 106.33 108.75",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "95 48 92 48 92 104 95 104",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("polygon", {
        points: "112 48 109 48 109 104 112 104",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 102,
        x2: 102,
        y1: 48.167,
        y2: 38.832,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2A2A2",
        offset: 0.4136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d: "m88 40v5c0 3.87 3.13 7 7 7h14c3.87 0 7-3.13 7-7v-5h-28z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m113 43v2c0 2.21-1.79 4-4 4h-14c-2.21 0-4-1.79-4-4v-2h22m3-3h-28v5c0 3.87 3.13 7 7 7h14c3.87 0 7-3.13 7-7v-5z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 322,
        x2: 322,
        y1: 101.33,
        y2: 93.325,
        gradientTransform: "matrix(-1 0 0 -1 424 204)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A2A2A2",
        offset: 0.4136
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d: "m116 112v-5c0-3.87-3.13-7-7-7h-14c-3.87 0-7 3.13-7 7v5h28z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m109 103c2.21 0 4 1.79 4 4v2h-22v-2c0-2.21 1.79-4 4-4h14m0-3h-14c-3.87 0-7 3.13-7 7v5h28v-5c0-3.87-3.13-7-7-7z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 63.667,
        cy: 7.3333,
        r: 53.207,
        gradientTransform:
          "matrix(-.00075875 1 -1.4754 -.0011194 74.534 -56.325)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DEDEDE",
        offset: 0.3844
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D6D6D6",
        offset: 0.5865
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C8C8",
        offset: 0.746
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B5B5B5",
        offset: 0.8826
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "M56.42,5.79L6.21,30.89C4.86,31.57,4,32.96,4,34.47V40c0,2.21,1.79,4,4,4h112 c2.21,0,4-1.79,4-4v-5.53c0-1.52-0.86-2.9-2.21-3.58L71.58,5.79C69.22,4.61,66.63,4,64,4h0C61.37,4,58.78,4.61,56.42,5.79z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 63.879,
        cy: 14.5,
        r: 37.764,
        gradientTransform:
          "matrix(1.0287e-13 1 -1.8893 1.9435e-13 91.274 -49.379)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C5C5C5",
        offset: 0.4495
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m106.53 32.21-38.53-19.27c-1.24-0.62-2.61-0.94-4-0.94s-2.76 0.32-4 0.94l-38.53 19.27c-1.89 0.94-1.22 3.79 0.89 3.79h83.28c2.11 0 2.78-2.85 0.89-3.79z",
      fill: "url(#l)",
      stroke: "#AFAFAF",
      strokeMiterlimit: 10,
      strokeWidth: 2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c2.15,0,4.31,0.51,6.24,1.47l50.21,25.11c0.34,0.17,0.55,0.51,0.55,0.89V40c0,0.55-0.45,1-1,1 H8c-0.55,0-1-0.45-1-1v-5.53c0-0.38,0.21-0.72,0.55-0.89L57.76,8.47C59.69,7.51,61.85,7,64,7 M64,4c-2.63,0-5.22,0.61-7.58,1.79 L6.21,30.89C4.86,31.57,4,32.96,4,34.47V40c0,2.21,1.79,4,4,4h112c2.21,0,4-1.79,4-4v-5.53c0-1.52-0.86-2.9-2.21-3.58L71.58,5.79 C69.22,4.61,66.63,4,64,4L64,4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "k",
        x1: 64,
        x2: 64,
        y1: 108.5,
        y2: 117.85,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C5C5C5",
        offset: 0.4495
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M120,120H8v-8c0-2.21,1.79-4,4-4h104c2.21,0,4,1.79,4,4V120z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 64,
        x2: 64,
        y1: 115.67,
        y2: 122.34,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C5C5C5",
        offset: 0.4495
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9E9E9E",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d: "M124,124H4v-4c0-2.21,1.79-4,4-4h112c2.21,0,4,1.79,4,4V124z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m116 111c0.55 0 1 0.45 1 1v7h3c0.55 0 1 0.45 1 1v1h-114v-1c0-0.55 0.45-1 1-1h3v-7c0-0.55 0.45-1 1-1h104m0-3h-104c-2.21 0-4 1.79-4 4v4c-2.21 0-4 1.79-4 4v4h120v-4c0-2.21-1.79-4-4-4v-4c0-2.21-1.79-4-4-4z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m55.11 88h17.78c0.61 0 1.11-0.45 1.11-1v-0.54c0-0.65-0.45-1.22-1.12-1.45l-8.66-1.88c-0.25-0.08-0.53-0.08-0.78 0l-8.34 1.87c-0.66 0.23-1.1 0.8-1.1 1.44v0.56c0 0.55 0.5 1 1.11 1z",
      fill: "#757575"
    }),
    _react2.default.createElement("rect", {
      x: 56,
      y: 88,
      width: 16,
      height: 20,
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#424242",
        opacity: 0.2
      },
      _react2.default.createElement("rect", {
        x: 56,
        y: 88,
        width: 2,
        height: 20
      }),
      _react2.default.createElement("rect", {
        x: 70,
        y: 88,
        width: 2,
        height: 20
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#BDBDBD"
      },
      _react2.default.createElement("path", {
        d:
          "m38.58 71.42v-14.35h5.03c1.74 0 3.06 0.33 3.96 1s1.35 1.64 1.35 2.93c0 0.7-0.18 1.32-0.54 1.86s-0.86 0.93-1.51 1.18c0.74 0.18 1.32 0.56 1.74 1.11 0.42 0.56 0.64 1.24 0.64 2.05 0 1.38-0.44 2.42-1.32 3.13s-2.14 1.07-3.76 1.08h-5.59zm2.95-8.34h2.19c1.49-0.03 2.24-0.62 2.24-1.78 0-0.65-0.19-1.12-0.57-1.4-0.38-0.29-0.97-0.43-1.79-0.43h-2.07v3.61zm0 2.09v3.87h2.53c0.7 0 1.24-0.17 1.63-0.5s0.59-0.79 0.59-1.38c0-1.31-0.68-1.98-2.04-2h-2.71z"
      }),
      _react2.default.createElement("path", {
        d:
          "m59.28 68.46h-5.18l-0.99 2.96h-3.14l5.34-14.35h2.74l5.37 14.35h-3.14l-1-2.96zm-4.39-2.39h3.59l-1.8-5.37-1.79 5.37z"
      }),
      _react2.default.createElement("path", {
        d:
          "M76.42,71.42h-2.96l-5.75-9.44v9.44h-2.96V57.07h2.96l5.76,9.46v-9.46h2.95V71.42z"
      }),
      _react2.default.createElement("path", {
        d:
          "m83.5 65.66-1.54 1.65v4.1h-2.96v-14.34h2.96v6.5l1.3-1.78 3.66-4.72h3.64l-5.09 6.38 5.24 7.97h-3.52l-3.69-5.76z"
      })
    )
  );
}

exports.default = Bank;
