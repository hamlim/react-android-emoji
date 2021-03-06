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

function NightWithStars(props) {
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
        id: "u",
        x1: 22,
        x2: 22,
        y1: 96.427,
        y2: 27.142,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34 36h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2z",
      fill: "url(#u)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "j",
        x1: 82,
        x2: 82,
        y1: 106.33,
        y2: 16.878,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#1976D2",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118 48h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2z",
      fill: "url(#j)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "f",
        cx: 116.65,
        cy: 10.566,
        r: 36.044,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m116.15 6.07c-1.2-0.82-2.47-1.48-3.77-1.98-1.21-0.46-2.35 0.89-1.69 2 3.14 5.33 3.26 12.18-0.27 17.76-3.53 5.59-9.76 8.42-15.92 7.88-1.29-0.11-2.01 1.5-1.07 2.4 0.85 0.81 1.79 1.54 2.82 2.19 8.76 5.53 20.45 2.62 25.53-6.58 4.47-8.08 1.99-18.45-5.63-23.67z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m115.25 9.13c5.72 4.5 7.46 12.72 3.9 19.16-2.67 4.83-7.75 7.83-13.26 7.83-2.33 0-4.62-0.54-6.7-1.58 5.64-0.9 10.64-4.16 13.76-9.09 3.13-4.94 3.9-10.87 2.3-16.32m-3.36-5.13c-1 0-1.77 1.13-1.2 2.09 3.14 5.33 3.26 12.18-0.27 17.76-3.24 5.14-8.77 7.95-14.43 7.95-0.5 0-0.99-0.02-1.49-0.07-0.04 0-0.09-0.01-0.13-0.01-1.21 0-1.85 1.54-0.94 2.4 0.85 0.81 1.79 1.54 2.82 2.19 3 1.89 6.35 2.8 9.65 2.8 6.34 0 12.54-3.33 15.88-9.38 4.47-8.09 2-18.46-5.63-23.68-1.2-0.82-2.47-1.48-3.77-1.98-0.17-0.04-0.33-0.07-0.49-0.07z",
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
          "m29 35v4h4v66h-22v-66h4v-4h14m1-3h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2h-2v-2c0-1.1-0.9-2-2-2z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m59 15v8h6v8h4v76h18v-56h4v-4h22v4h4v62h-70v-82h4v-8h6v-8h2m1-3h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "e",
        d:
          "m118 48h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#e"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m34 36h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#d"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 64,
        x2: 64,
        y1: 149.5,
        y2: 39.631,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#0D47A1",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0C4296",
        offset: 0.1222
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0A367A",
        offset: 0.3344
      }),
      _react2.default.createElement("stop", {
        stopColor: "#06214C",
        offset: 0.6113
      }),
      _react2.default.createElement("stop", {
        stopColor: "#01060D",
        offset: 0.9389
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122 60h-20c-1.1 0-2 0.9-2 2v42h-8v-30c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v38h-8v-54c0-1.1-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2v26h-10c-1.1 0-2 0.9-2 2v30h120v-54c0-1.1-0.9-2-2-2z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("path", {
      d:
        "m67.25 112h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      fill: "#F9A825"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFC107"
      },
      _react2.default.createElement("path", {
        d:
          "m69.25 88h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m85.25 84h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m111.25 72h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m117.25 84h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m41.25 70h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.25 78h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m39.25 88h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m15.25 106h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      fill: "#F9A825"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m45 59v54h-38v-26h12v-28h26m76 4v50h-62v-38h30v32h14v-44h18m-75-7h-28c-1.1 0-2 0.9-2 2v26h-10c-1.1 0-2 0.9-2 2v30h120v-54c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v42h-8v-30c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v38h-8v-54c0-1.1-0.9-2-2-2z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFC107"
      },
      _react2.default.createElement("path", {
        d:
          "m19.25 54h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m29.25 50h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m55.25 42h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m65.25 49h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m65.25 60h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m105.25 58h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.25 64h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("rect", {
        id: "b",
        x: 4,
        y: 84,
        width: 120,
        height: 40
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#b"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "aa",
        d:
          "m276 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#aa"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "z",
        cx: 223.83,
        cy: 89.833,
        r: 97.667,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#18FFFF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#18FEFE",
        offset: 0.0024494
      }),
      _react2.default.createElement("stop", {
        stopColor: "#21BBDD",
        offset: 0.1446
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2785C2",
        offset: 0.2732
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2C5FAF",
        offset: 0.3838
      }),
      _react2.default.createElement("stop", {
        stopColor: "#2F48A3",
        offset: 0.4722
      }),
      _react2.default.createElement("stop", {
        stopColor: "#303F9F",
        offset: 0.5273
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 164,
      y: 4,
      width: 120,
      height: 120,
      clipPath: "url(#a)",
      fill: "url(#z)"
    }),
    _react2.default.createElement("path", {
      d:
        "m194 64h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v50h28v-50c0-1.1-0.9-2-2-2z",
      clipPath: "url(#a)",
      fill: "#1A237E",
      opacity: 0.7
    }),
    _react2.default.createElement("path", {
      d:
        "m278 76h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v34h-12v-54c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v66h76v-46c0-1.1-0.9-2-2-2z",
      clipPath: "url(#a)",
      fill: "#1A237E",
      opacity: 0.7
    }),
    _react2.default.createElement("path", {
      d:
        "m179.25 82h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      clipPath: "url(#a)",
      fill: "#303F9F",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m189.25 78h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      clipPath: "url(#a)",
      fill: "#303F9F",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m215.25 70h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      clipPath: "url(#a)",
      fill: "#303F9F",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m225.25 77h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      clipPath: "url(#a)",
      fill: "#303F9F",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m225.25 88h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      clipPath: "url(#a)",
      fill: "#303F9F",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m265.25 86h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      clipPath: "url(#a)",
      fill: "#303F9F",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m255.25 92h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z",
      clipPath: "url(#a)",
      fill: "#303F9F",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "y",
          d:
            "m278 76h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v34h-12v-54c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v66h76v-46c0-1.1-0.9-2-2-2z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#y"
        })
      )
    ),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "x",
          d:
            "m194 64h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v50h28v-50c0-1.1-0.9-2-2-2z"
        })
      ),
      _react2.default.createElement(
        "clipPath",
        null,
        _react2.default.createElement("use", {
          xlinkHref: "#x"
        })
      )
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "w",
        cx: 250.3,
        cy: 106.84,
        r: 22.442,
        gradientTransform: "matrix(1 .0032 -.0032 1 -64.4 -14.085)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#0A82FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0971DD",
        offset: 0.0899
      }),
      _react2.default.createElement("stop", {
        stopColor: "#064F9B",
        offset: 0.2821
      }),
      _react2.default.createElement("stop", {
        stopColor: "#043364",
        offset: 0.4649
      }),
      _react2.default.createElement("stop", {
        stopColor: "#021D39",
        offset: 0.6331
      }),
      _react2.default.createElement("stop", {
        stopColor: "#010D1A",
        offset: 0.7835
      }),
      _react2.default.createElement("stop", {
        stopColor: "#000307",
        offset: 0.9109
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m208 93.63c-0.04 12.39-10.12 22.41-22.52 22.37-12.39-0.04-22.41-10.12-22.37-22.51 0.04-12.4 10.12-22.41 22.51-22.37 12.4 0.03 22.42 10.11 22.38 22.51z",
      clipPath: "url(#a)",
      fill: "url(#w)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "v",
        cx: 276.94,
        cy: 125.06,
        r: 35.866,
        gradientTransform: "matrix(1 .0032 -.0032 1 -64.4 -14.085)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0089DD",
        offset: 0.0366
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00609B",
        offset: 0.2401
      }),
      _react2.default.createElement("stop", {
        stopColor: "#003E64",
        offset: 0.4336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#002339",
        offset: 0.6115
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00101A",
        offset: 0.7708
      }),
      _react2.default.createElement("stop", {
        stopColor: "#000407",
        offset: 0.9057
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m248 111.98c-0.06 19.81-16.17 35.81-35.98 35.75s-35.81-16.17-35.75-35.98 16.17-35.81 35.98-35.75 35.81 16.17 35.75 35.98z",
      clipPath: "url(#a)",
      fill: "url(#v)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "t",
        cx: 240.67,
        cy: 125.18,
        r: 35.866,
        gradientTransform: "matrix(1 .0032 -.0032 1 -64.4 -14.085)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0089DD",
        offset: 0.0366
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00609B",
        offset: 0.2401
      }),
      _react2.default.createElement("stop", {
        stopColor: "#003E64",
        offset: 0.4336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#002339",
        offset: 0.6115
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00101A",
        offset: 0.7708
      }),
      _react2.default.createElement("stop", {
        stopColor: "#000407",
        offset: 0.9057
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m211.73 111.98c-0.06 19.81-16.17 35.81-35.98 35.75s-35.81-16.17-35.75-35.98 16.17-35.81 35.98-35.75 35.82 16.17 35.75 35.98z",
      clipPath: "url(#a)",
      fill: "url(#t)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "s",
        cx: 332.65,
        cy: 121.15,
        r: 35.866,
        gradientTransform: "matrix(1 .0032 -.0032 1 -64.4 -14.085)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#0091EA",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0089DD",
        offset: 0.0366
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00609B",
        offset: 0.2401
      }),
      _react2.default.createElement("stop", {
        stopColor: "#003E64",
        offset: 0.4336
      }),
      _react2.default.createElement("stop", {
        stopColor: "#002339",
        offset: 0.6115
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00101A",
        offset: 0.7708
      }),
      _react2.default.createElement("stop", {
        stopColor: "#000407",
        offset: 0.9057
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m303.73 108.25c-0.06 19.81-16.17 35.81-35.98 35.75s-35.81-16.17-35.75-35.98 16.17-35.81 35.98-35.75 35.82 16.17 35.75 35.98z",
      clipPath: "url(#a)",
      fill: "url(#s)"
    }),
    _react2.default.createElement("path", {
      d:
        "m282 88h-20c-1.1 0-2 0.9-2 2v22h-8v-10c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v18h-8v-34c0-1.1-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2v26h-10c-1.1 0-2 0.9-2 2v10h120v-34c0-1.1-0.9-2-2-2z",
      clipPath: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)"
      },
      _react2.default.createElement(
        "radialGradient",
        {
          id: "r",
          cx: 264.65,
          cy: 19.443,
          r: 36.044,
          gradientUnits: "userSpaceOnUse"
        },
        _react2.default.createElement("stop", {
          stopColor: "#ff0",
          offset: 0
        }),
        _react2.default.createElement("stop", {
          stopColor: "#FFD600",
          offset: 0.9957
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m264.15 14.95c-1.2-0.82-2.47-1.48-3.77-1.98-1.21-0.46-2.35 0.89-1.69 2 3.14 5.33 3.26 12.18-0.27 17.76-3.53 5.59-9.76 8.42-15.92 7.88-1.29-0.11-2.01 1.5-1.07 2.4 0.85 0.81 1.79 1.54 2.82 2.19 8.76 5.53 20.45 2.62 25.53-6.58 4.47-8.09 1.99-18.46-5.63-23.67z",
        fill: "url(#r)"
      }),
      _react2.default.createElement(
        "g",
        {
          opacity: 0.2
        },
        _react2.default.createElement("path", {
          d:
            "m259.89 12.88c0.16 0 0.33 0.03 0.49 0.09 1.3 0.5 2.56 1.15 3.77 1.98 7.63 5.22 10.1 15.59 5.63 23.68-3.34 6.05-9.54 9.38-15.88 9.38-3.3 0-6.65-0.9-9.65-2.8-1.03-0.65-1.97-1.39-2.82-2.19-0.91-0.86-0.26-2.4 0.94-2.4 0.04 0 0.08 0 0.13 0.01 0.5 0.04 0.99 0.07 1.49 0.07 5.66 0 11.19-2.81 14.43-7.95 3.53-5.59 3.41-12.44 0.27-17.76-0.57-0.98 0.2-2.11 1.2-2.11m0-2c-1.21 0-2.33 0.66-2.94 1.73-0.61 1.06-0.6 2.32 0.02 3.38 2.88 4.88 2.79 10.89-0.24 15.68-2.77 4.39-7.54 7.02-12.74 7.02-0.44 0-0.88-0.02-1.31-0.06-0.1-0.01-0.2-0.01-0.3-0.01-1.38 0-2.6 0.84-3.12 2.14s-0.2 2.75 0.8 3.71c0.95 0.91 2.01 1.73 3.13 2.43 3.22 2.03 6.93 3.11 10.72 3.11 7.33 0 14.08-3.99 17.63-10.41 4.95-8.96 2.21-20.51-6.25-26.29-1.31-0.89-2.71-1.63-4.18-2.19-0.41-0.17-0.81-0.24-1.22-0.24z",
          fill: "#424242"
        })
      )
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "q",
        cx: 257.6,
        cy: 142.01,
        r: 40.749,
        gradientTransform: "matrix(1 .0032 -.0032 1 -64.4 -14.085)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1B40A6",
        offset: 0.3132
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0C1E4E",
        offset: 0.6492
      }),
      _react2.default.createElement("stop", {
        stopColor: "#030816",
        offset: 0.8861
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m233.5 128.88c-0.07 22.5-18.38 40.69-40.88 40.62s-40.69-18.38-40.62-40.88c0.07-22.51 18.38-40.69 40.88-40.62 22.51 0.07 40.69 18.38 40.62 40.88z",
      clipPath: "url(#a)",
      fill: "url(#q)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "p",
        cx: 298.19,
        cy: 139.79,
        r: 30.659,
        gradientTransform: "matrix(1 .0032 -.0032 1 -64.4 -14.085)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1B40A6",
        offset: 0.3132
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0C1E4E",
        offset: 0.6492
      }),
      _react2.default.createElement("stop", {
        stopColor: "#030816",
        offset: 0.8861
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m264 126.76c-0.05 16.93-13.83 30.61-30.76 30.56s-30.61-13.83-30.56-30.76 13.83-30.62 30.76-30.56c16.93 0.05 30.61 13.83 30.56 30.76z",
      clipPath: "url(#a)",
      fill: "url(#p)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "o",
        cx: 338.02,
        cy: 146.16,
        r: 38.846,
        gradientTransform: "matrix(1 .0032 -.0032 1 -64.4 -14.085)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#2962FF",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1B40A6",
        offset: 0.3132
      }),
      _react2.default.createElement("stop", {
        stopColor: "#0C1E4E",
        offset: 0.6492
      }),
      _react2.default.createElement("stop", {
        stopColor: "#030816",
        offset: 0.8861
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m312 133.28c-0.07 21.45-17.52 38.79-38.97 38.72s-38.79-17.52-38.72-38.97 17.52-38.79 38.97-38.72 38.79 17.52 38.72 38.97z",
      clipPath: "url(#a)",
      fill: "url(#o)",
      opacity: 0.7
    }),
    _react2.default.createElement(
      "g",
      {
        clipPath: "url(#a)",
        fill: "#FFC107"
      },
      _react2.default.createElement("path", {
        d:
          "m229.25 116h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m245.25 112h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m271.25 100h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m277.25 112h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m201.25 98h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m187.25 106h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
      _react2.default.createElement("path", {
        d:
          "m199.25 116h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "n",
        x1: 64,
        x2: 64,
        y1: 132.33,
        y2: 76,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#004D40",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#00241E",
        offset: 0.5498
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120.3 90.25c-4.06 2-7.41 5.21-9.59 9.17-0.59 0.69-1.07 1.52-1.42 2.51-0.02 0.07-0.05 0.14-0.07 0.21-0.17 0.51-0.7 0.78-1.23 0.65-0.32-0.08-0.64-0.12-0.98-0.12-1.34 0-2.57 0.63-3.57 1.7-0.71 0.76-1.91 0.79-2.73 0.15-2.15-1.66-4.81-2.64-7.69-2.64-2.2 0-4.27 0.58-6.08 1.58-0.87 0.48-1.95 0.18-2.54-0.62-3.56-4.84-9.18-7.98-15.52-7.98-4.8 0-9.18 1.8-12.58 4.77-0.38 0.34-0.94 0.34-1.33 0.01-0.9-0.78-1.95-1.23-3.08-1.23-1.1 0-2.13 0.43-3.01 1.17-0.34 0.29-0.82 0.3-1.2 0.06-2.19-1.41-4.77-2.23-7.54-2.23-3.9 0-7.42 1.62-9.99 4.23-0.39 0.4-1.02 0.37-1.43-0.02-0.95-0.92-2.1-1.47-3.34-1.47-1.36 0-2.61 0.65-3.61 1.74-0.39 0.43-1.06 0.47-1.45 0.05-3.57-3.84-8.59-6.24-14.15-6.22-1.21 0.04-2.17 1.05-2.17 2.26v26.02h120v-31.43c0-1.9-2-3.16-3.7-2.32z",
      fill: "url(#n)"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.2 106.91c3.02 0.93 4.54 3.57 4.13 6.64-0.28 2.14 3.07 2.2 3.35 0.08 0.19-1.41 0.04-2.77-0.37-4.01 4.74-0.01 8.82 2.53 10.88 6.87 0.93 1.95 3.87 0.36 2.95-1.59-2.62-5.52-8.29-8.93-14.39-8.62-0.44 0.02-0.79 0.19-1.06 0.43-1.15-1.38-2.72-2.45-4.57-3.02-2.05-0.64-2.98 2.58-0.92 3.22z",
      fill: "#eee",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m106.05 111.43c2.1 0.71 3.11 2.58 2.77 4.72-0.24 1.49 2.1 1.59 2.34 0.12 0.16-0.98 0.08-1.93-0.18-2.81 3.31 0.08 6.12 1.93 7.48 5 0.61 1.38 2.7 0.32 2.09-1.05-1.73-3.91-5.63-6.4-9.9-6.29-0.31 0.01-0.56 0.12-0.75 0.28-0.78-0.99-1.86-1.76-3.14-2.19-1.43-0.49-2.14 1.74-0.71 2.22z",
      fill: "#eee",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m24.03 109.78c-4.55 0.1-8.07 2.94-9.2 7.37-0.47 1.84-3.33 1.16-2.87-0.68 1.45-5.68 6.11-9.5 11.99-9.63 1.9-0.04 1.98 2.9 0.08 2.94z",
      fill: "#eee",
      opacity: 0.2
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m121 93.26v27.74h-114v-22.23c4.23 0.2 8.16 2.04 11.13 5.24 0.74 0.8 1.79 1.26 2.88 1.26 1.12 0 2.21-0.48 2.97-1.31 0.32-0.35 0.83-0.77 1.4-0.77 0.4 0 0.82 0.21 1.25 0.62 0.76 0.74 1.77 1.15 2.82 1.15 1.07 0 2.08-0.42 2.83-1.18 2.12-2.15 4.91-3.34 7.85-3.34 2.09 0 4.13 0.61 5.91 1.75 0.66 0.42 1.42 0.65 2.19 0.65 0.94 0 1.84-0.33 2.56-0.93 0.37-0.31 0.74-0.47 1.08-0.47 0.36 0 0.74 0.17 1.12 0.5 0.73 0.63 1.66 0.98 2.62 0.98 0.97 0 1.91-0.35 2.65-1 2.97-2.6 6.74-4.03 10.6-4.03 5.17 0 9.95 2.46 13.1 6.75 0.96 1.3 2.48 2.08 4.07 2.08 0.82 0 1.64-0.21 2.35-0.61 1.44-0.8 2.99-1.2 4.62-1.2 2.13 0 4.15 0.7 5.86 2.01 0.9 0.69 2.02 1.07 3.15 1.07 1.37 0 2.69-0.57 3.61-1.55 0.32-0.34 0.82-0.75 1.38-0.75 0.09 0 0.18 0.01 0.27 0.03 0.32 0.08 0.64 0.11 0.96 0.11 1.73 0 3.26-1.1 3.81-2.73l0.06-0.18c0.21-0.6 0.5-1.12 0.87-1.55l0.2-0.24 0.15-0.27c1.8-3.24 4.44-5.85 7.68-7.6m0.42-3.27c-0.37 0-0.76 0.08-1.12 0.27-4.06 2-7.41 5.21-9.59 9.17-0.59 0.69-1.07 1.52-1.42 2.51-0.02 0.07-0.05 0.14-0.07 0.21-0.14 0.43-0.53 0.69-0.97 0.69-0.09 0-0.17-0.01-0.26-0.03-0.32-0.08-0.64-0.12-0.98-0.12-1.34 0-2.57 0.63-3.57 1.7-0.38 0.4-0.89 0.6-1.42 0.6-0.46 0-0.93-0.15-1.31-0.45-2.15-1.66-4.81-2.64-7.69-2.64-2.2 0-4.27 0.58-6.08 1.58-0.28 0.16-0.59 0.23-0.9 0.23-0.63 0-1.25-0.31-1.65-0.85-3.56-4.84-9.18-7.98-15.52-7.98-4.8 0-9.18 1.8-12.58 4.77-0.19 0.17-0.43 0.26-0.67 0.26-0.23 0-0.47-0.08-0.66-0.25-0.9-0.78-1.95-1.23-3.08-1.23-1.1 0-2.13 0.43-3.01 1.17-0.18 0.15-0.4 0.23-0.63 0.23-0.2 0-0.39-0.06-0.57-0.17-2.19-1.41-4.77-2.23-7.54-2.23-3.9 0-7.42 1.62-9.99 4.23-0.19 0.19-0.44 0.29-0.69 0.29-0.26 0-0.53-0.1-0.74-0.3-0.95-0.92-2.1-1.47-3.34-1.47-1.36 0-2.61 0.65-3.61 1.74-0.21 0.22-0.49 0.34-0.77 0.34-0.25 0-0.5-0.1-0.68-0.3-3.55-3.83-8.54-6.22-14.08-6.22h-0.08c-1.19 0.02-2.15 1.03-2.15 2.24v26.02h120v-31.43c0-1.49-1.23-2.58-2.58-2.58z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "m",
        cx: 228.16,
        cy: 15.628,
        r: 16.833,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m220.43 20.71 4.82-0.2c0.15-0.01 0.28-0.08 0.36-0.21l2.57-4.09c0.2-0.32 0.67-0.27 0.8 0.08l1.68 4.52c0.05 0.14 0.17 0.24 0.31 0.28l4.68 1.18c0.36 0.09 0.46 0.56 0.17 0.79l-3.78 3c-0.12 0.09-0.18 0.24-0.17 0.38l0.33 4.82c0.03 0.37-0.39 0.61-0.7 0.41l-4.01-2.67c-0.12-0.08-0.28-0.1-0.42-0.04l-4.48 1.8c-0.35 0.14-0.7-0.18-0.6-0.54l1.3-4.65c0.04-0.14 0.01-0.3-0.09-0.41l-3.1-3.7c-0.24-0.29-0.04-0.73 0.33-0.75z",
      fill: "url(#m)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m228.56 16c0.18 0 0.35 0.1 0.42 0.29l1.68 4.52c0.05 0.14 0.17 0.24 0.31 0.28l4.68 1.18c0.36 0.09 0.46 0.56 0.17 0.79l-3.78 3c-0.12 0.09-0.18 0.24-0.17 0.38l0.33 4.82c0.02 0.28-0.21 0.48-0.45 0.48-0.08 0-0.17-0.02-0.25-0.08l-4.01-2.66c-0.07-0.05-0.16-0.08-0.25-0.08-0.06 0-0.11 0.01-0.17 0.03l-4.48 1.8c-0.06 0.02-0.11 0.03-0.17 0.03-0.28 0-0.52-0.27-0.43-0.57l1.3-4.65c0.04-0.14 0.01-0.3-0.09-0.41l-3.1-3.7c-0.24-0.29-0.05-0.72 0.33-0.74l4.82-0.2c0.15-0.01 0.28-0.08 0.36-0.21l2.57-4.09c0.09-0.14 0.23-0.21 0.38-0.21m0-2c-0.85 0-1.62 0.43-2.07 1.15l-2.13 3.4-4.01 0.17c-0.94 0.04-1.76 0.6-2.14 1.46s-0.24 1.84 0.36 2.56l2.57 3.08-1.08 3.86c-0.21 0.74-0.06 1.52 0.41 2.14 0.46 0.61 1.19 0.97 1.95 0.97 0.31 0 0.62-0.06 0.91-0.18l3.72-1.5 3.34 2.22c0.4 0.27 0.87 0.41 1.35 0.41 0.68 0 1.33-0.28 1.79-0.78 0.46-0.49 0.7-1.16 0.65-1.84l-0.27-4 3.14-2.49c0.74-0.58 1.07-1.52 0.87-2.44s-0.89-1.63-1.8-1.86l-3.89-0.98-1.4-3.76c-0.33-0.95-1.25-1.59-2.27-1.59z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "l",
        cx: 178.07,
        cy: 16.843,
        r: 13.004,
        gradientTransform: "matrix(.7358 -.6772 .6772 .7358 35.979 128.14)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m176.67 26.87 2.63-2.64c0.08-0.08 0.12-0.2 0.1-0.31l-0.68-3.67c-0.05-0.28 0.24-0.5 0.5-0.37l3.32 1.69c0.1 0.05 0.22 0.05 0.32 0l3.28-1.78c0.25-0.14 0.55 0.07 0.51 0.36l-0.58 3.68c-0.02 0.11 0.02 0.23 0.1 0.31l2.71 2.57c0.21 0.2 0.1 0.55-0.18 0.6l-3.68 0.59c-0.11 0.02-0.21 0.09-0.26 0.19l-1.6 3.37c-0.12 0.26-0.49 0.27-0.62 0.01l-1.7-3.32c-0.05-0.1-0.15-0.17-0.26-0.19l-3.7-0.49c-0.29-0.05-0.41-0.4-0.21-0.6z",
      fill: "url(#l)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m186.31 19.74c0.2 0 0.38 0.18 0.34 0.4l-0.58 3.68c-0.02 0.11 0.02 0.23 0.1 0.31l2.71 2.57c0.21 0.2 0.1 0.55-0.18 0.6l-3.68 0.59c-0.11 0.02-0.21 0.09-0.26 0.19l-1.6 3.37c-0.06 0.13-0.19 0.2-0.31 0.2s-0.24-0.06-0.31-0.19l-1.7-3.32c-0.05-0.1-0.15-0.17-0.26-0.19l-3.7-0.49c-0.29-0.04-0.4-0.39-0.2-0.59l2.63-2.64c0.08-0.08 0.12-0.2 0.1-0.31l-0.68-3.67c-0.04-0.23 0.14-0.41 0.34-0.41 0.05 0 0.11 0.01 0.16 0.04l3.32 1.69c0.05 0.03 0.1 0.04 0.16 0.04s0.11-0.01 0.17-0.04l3.28-1.78c0.04-0.03 0.1-0.05 0.15-0.05m0-2c-0.39 0-0.78 0.1-1.12 0.29l-2.51 1.37-2.55-1.3c-0.33-0.17-0.7-0.26-1.06-0.26-0.7 0-1.36 0.31-1.81 0.85s-0.63 1.24-0.5 1.93l0.52 2.81-2.02 2.02c-0.64 0.64-0.85 1.56-0.56 2.41s1.02 1.45 1.92 1.57l2.84 0.37 1.3 2.55c0.4 0.79 1.2 1.28 2.09 1.28 0.91 0 1.73-0.51 2.12-1.34l1.23-2.58 2.82-0.45c0.89-0.14 1.61-0.76 1.87-1.62 0.27-0.86 0.03-1.78-0.63-2.4l-2.08-1.97 0.44-2.83c0.11-0.68-0.09-1.37-0.53-1.89-0.44-0.51-1.09-0.81-1.78-0.81z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "k",
        cx: 199.9,
        cy: 35.315,
        r: 8.8037,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m195.86 37.97 2.52-0.11c0.08 0 0.15-0.04 0.19-0.11l1.34-2.14c0.1-0.17 0.35-0.14 0.42 0.04l0.88 2.37c0.03 0.07 0.09 0.13 0.16 0.15l2.45 0.62c0.19 0.05 0.24 0.29 0.09 0.41l-1.98 1.57c-0.06 0.05-0.09 0.12-0.09 0.2l0.17 2.52c0.01 0.19-0.2 0.32-0.36 0.21l-2.1-1.4c-0.06-0.04-0.15-0.05-0.22-0.02l-2.34 0.94c-0.18 0.07-0.37-0.09-0.31-0.28l0.68-2.43c0.02-0.07 0-0.15-0.05-0.21l-1.62-1.94c-0.13-0.15-0.03-0.38 0.17-0.39z",
      fill: "url(#k)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m200.11 35.51c0.09 0 0.18 0.05 0.22 0.15l0.88 2.37c0.03 0.07 0.09 0.13 0.16 0.15l2.45 0.62c0.19 0.05 0.24 0.29 0.09 0.41l-1.98 1.57c-0.06 0.05-0.09 0.12-0.09 0.2l0.17 2.52c0.01 0.15-0.11 0.25-0.24 0.25-0.04 0-0.09-0.01-0.13-0.04l-2.1-1.4c-0.04-0.03-0.08-0.04-0.13-0.04-0.03 0-0.06 0.01-0.09 0.02l-2.34 0.94c-0.03 0.01-0.06 0.02-0.09 0.02-0.15 0-0.27-0.14-0.23-0.3l0.68-2.43c0.02-0.07 0-0.15-0.05-0.21l-1.62-1.94c-0.13-0.15-0.02-0.38 0.17-0.39l2.52-0.11c0.08 0 0.15-0.04 0.19-0.11l1.34-2.14c0.07-0.08 0.14-0.11 0.22-0.11m0-2c-0.77 0-1.48 0.39-1.89 1.05l-0.85 1.35-1.6 0.07c-0.86 0.04-1.6 0.55-1.95 1.33s-0.22 1.68 0.33 2.34l1.02 1.23-0.43 1.54c-0.19 0.68-0.05 1.39 0.37 1.95 0.42 0.55 1.09 0.88 1.78 0.88 0.29 0 0.57-0.05 0.83-0.16l1.48-0.6 1.33 0.88c0.37 0.24 0.8 0.37 1.24 0.37 0.62 0 1.21-0.26 1.64-0.71 0.42-0.45 0.64-1.06 0.6-1.68l-0.11-1.59 1.25-0.99c0.67-0.53 0.98-1.38 0.8-2.22s-0.81-1.49-1.64-1.7l-1.55-0.39-0.56-1.5c-0.32-0.87-1.16-1.45-2.09-1.45z",
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
          "m276 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z",
        fill: "#eee"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "i",
        cx: 38.452,
        cy: 5.5,
        r: 17.79,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m39.74 4.37 1.86 5.57c0.06 0.17 0.19 0.3 0.37 0.35l5.64 1.63c0.44 0.13 0.54 0.7 0.17 0.97l-4.72 3.49c-0.14 0.11-0.23 0.28-0.22 0.46l0.2 5.87c0.02 0.45-0.5 0.73-0.86 0.46l-4.78-3.41c-0.15-0.1-0.34-0.13-0.5-0.07l-5.52 2c-0.43 0.15-0.84-0.25-0.71-0.68l1.77-5.6c0.05-0.17 0.02-0.36-0.09-0.5l-3.61-4.63c-0.28-0.36-0.03-0.88 0.43-0.88l5.87-0.05c0.18 0 0.35-0.09 0.45-0.24l3.29-4.86c0.24-0.38 0.82-0.31 0.96 0.12z",
      fill: "url(#i)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "h",
        cx: 12.505,
        cy: 13.5,
        r: 15.604,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m8.55 12.32 4.01 2.69c0.12 0.08 0.28 0.1 0.42 0.04l4.49-1.77c0.35-0.14 0.7 0.18 0.6 0.54l-1.32 4.64c-0.04 0.14-0.01 0.3 0.09 0.41l3.07 3.72c0.24 0.29 0.04 0.72-0.33 0.74l-4.82 0.18c-0.15 0.01-0.28 0.08-0.36 0.21l-2.59 4.07c-0.2 0.31-0.67 0.26-0.8-0.09l-1.66-4.53c-0.05-0.14-0.17-0.24-0.31-0.28l-4.67-1.2c-0.36-0.09-0.46-0.56-0.17-0.79l3.8-2.98c0.12-0.09 0.18-0.23 0.17-0.38l-0.3-4.82c-0.05-0.37 0.37-0.61 0.68-0.4z",
      fill: "url(#h)"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "g",
        cx: 81,
        cy: 14.5,
        r: 16.833,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#ff0",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 0.9957
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m73.27 19.59 4.82-0.2c0.15-0.01 0.28-0.08 0.36-0.21l2.57-4.09c0.2-0.32 0.67-0.27 0.8 0.08l1.68 4.52c0.05 0.14 0.17 0.24 0.31 0.28l4.68 1.18c0.36 0.09 0.46 0.56 0.17 0.79l-3.78 3c-0.12 0.09-0.18 0.24-0.17 0.38l0.33 4.82c0.03 0.37-0.39 0.61-0.7 0.41l-4.02-2.67c-0.12-0.08-0.28-0.1-0.42-0.04l-4.48 1.8c-0.35 0.14-0.7-0.18-0.6-0.54l1.3-4.65c0.04-0.14 0.01-0.3-0.09-0.41l-3.1-3.7c-0.23-0.3-0.04-0.74 0.34-0.75z",
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m38.78 7.8 0.93 2.77c0.27 0.8 0.9 1.41 1.71 1.64l2.81 0.81-2.35 1.74c-0.67 0.5-1.06 1.3-1.03 2.13l0.1 2.92-2.38-1.7c-0.43-0.31-0.95-0.47-1.48-0.47-0.3 0-0.59 0.05-0.87 0.15l-2.75 1 0.88-2.79c0.25-0.8 0.1-1.67-0.42-2.33l-1.8-2.31 2.92-0.02c0.84-0.01 1.62-0.43 2.09-1.12l1.64-2.42m0.44-3.8c-0.17 0-0.34 0.08-0.45 0.24l-3.29 4.86c-0.1 0.15-0.27 0.24-0.45 0.24l-5.87 0.05c-0.45 0-0.71 0.53-0.43 0.88l3.61 4.63c0.11 0.14 0.14 0.33 0.09 0.5l-1.77 5.6c-0.12 0.37 0.17 0.71 0.52 0.71 0.06 0 0.13-0.01 0.19-0.03l5.52-2c0.06-0.02 0.12-0.03 0.19-0.03 0.11 0 0.22 0.03 0.32 0.1l4.78 3.41c0.1 0.07 0.21 0.1 0.32 0.1 0.29 0 0.56-0.24 0.55-0.57l-0.2-5.87c-0.01-0.18 0.08-0.35 0.22-0.46l4.72-3.49c0.36-0.27 0.26-0.84-0.17-0.97l-5.64-1.63c-0.17-0.05-0.31-0.18-0.37-0.35l-1.86-5.57c-0.09-0.22-0.31-0.35-0.53-0.35z",
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
          "m10.04 15.73 1.4 0.94c0.41 0.27 0.88 0.42 1.37 0.42 0.31 0 0.61-0.06 0.9-0.17l1.57-0.62-0.46 1.62c-0.22 0.78-0.05 1.61 0.47 2.23l1.07 1.3-1.69 0.06c-0.81 0.03-1.55 0.45-1.98 1.13l-0.9 1.42-0.58-1.58c-0.28-0.76-0.91-1.33-1.69-1.53l-1.63-0.42 1.33-1.04c0.63-0.5 0.98-1.28 0.93-2.08l-0.11-1.68m-1.74-3.49c-0.24 0-0.47 0.2-0.45 0.48l0.3 4.82c0.01 0.15-0.05 0.29-0.17 0.38l-3.8 2.98c-0.29 0.23-0.2 0.7 0.17 0.79l4.67 1.2c0.14 0.04 0.26 0.14 0.31 0.28l1.66 4.53c0.07 0.19 0.25 0.3 0.42 0.3 0.14 0 0.29-0.07 0.38-0.21l2.59-4.07c0.08-0.12 0.22-0.2 0.36-0.21l4.82-0.18c0.37-0.01 0.57-0.45 0.33-0.74l-3.07-3.72c-0.09-0.11-0.13-0.27-0.09-0.41l1.32-4.64c0.09-0.3-0.15-0.57-0.43-0.57-0.05 0-0.11 0.01-0.17 0.03l-4.49 1.77c-0.05 0.02-0.11 0.03-0.17 0.03-0.09 0-0.18-0.03-0.25-0.08l-4.01-2.69c-0.06-0.05-0.15-0.07-0.23-0.07z",
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
          "m81.04 18.81 0.59 1.58c0.28 0.76 0.92 1.32 1.7 1.52l1.64 0.41-1.32 1.05c-0.63 0.5-0.98 1.28-0.92 2.09l0.11 1.68-1.41-0.93c-0.4-0.27-0.87-0.41-1.35-0.41-0.31 0-0.62 0.06-0.91 0.18l-1.57 0.62 0.45-1.62c0.22-0.78 0.04-1.61-0.48-2.23l-1.08-1.29 1.68-0.07c0.81-0.03 1.54-0.46 1.97-1.15l0.9-1.43m0.36-3.94c-0.14 0-0.29 0.07-0.38 0.21l-2.57 4.09c-0.08 0.13-0.21 0.2-0.36 0.21l-4.82 0.2c-0.37 0.02-0.57 0.45-0.33 0.74l3.1 3.7c0.09 0.11 0.13 0.27 0.09 0.41l-1.3 4.65c-0.08 0.3 0.15 0.57 0.43 0.57 0.06 0 0.11-0.01 0.17-0.03l4.48-1.8c0.05-0.02 0.11-0.03 0.17-0.03 0.09 0 0.17 0.03 0.25 0.08l4.02 2.67c0.08 0.05 0.16 0.08 0.25 0.08 0.24 0 0.47-0.2 0.45-0.48l-0.33-4.82c-0.01-0.15 0.05-0.29 0.17-0.38l3.78-3c0.29-0.23 0.19-0.7-0.17-0.79l-4.68-1.18c-0.14-0.04-0.26-0.14-0.31-0.28l-1.68-4.52c-0.08-0.2-0.26-0.3-0.43-0.3z",
        fill: "#424242"
      })
    )
  );
}

exports.default = NightWithStars;
