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

function CitySunrise(props) {
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
        id: "g",
        cx: 90,
        cy: 34,
        r: 30,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFF59D",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF496",
        offset: 0.1222
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF083",
        offset: 0.3
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEA63",
        offset: 0.5118
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE137",
        offset: 0.7496
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFD600",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 90,
      cy: 34,
      r: 30,
      fill: "url(#g)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m90 7c14.89 0 27 12.11 27 27s-12.11 27-27 27-27-12.11-27-27 12.11-27 27-27m0-3c-16.57 0-30 13.43-30 30s13.43 30 30 30 30-13.43 30-30-13.43-30-30-30z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "f",
        x1: 22,
        x2: 22,
        y1: 104.01,
        y2: 28.774,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5722",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m34 36h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 82,
        x2: 82,
        y1: 104.35,
        y2: 10.22,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFCA28",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FF5722",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m118 48h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m29 35v4h4v66h-22v-66h4v-4h14m1-3h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2h-2v-2c0-1.1-0.9-2-2-2z",
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
          "m59 15v8h6v8h4v76h18v-56h4v-4h22v4h4v62h-70v-82h4v-8h6v-8h2m1-3h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "d",
        d:
          "m118 48h-2v-2c0-1.1-0.9-2-2-2h-24c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v54h-12v-74c0-1.1-0.9-2-2-2h-2v-6c0-1.1-0.9-2-2-2h-4v-6c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v6h-4c-1.1 0-2 0.9-2 2v6h-2c-1.1 0-2 0.9-2 2v86h76v-66c0-1.1-0.9-2-2-2z"
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
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m34 36h-2v-2c0-1.1-0.9-2-2-2h-16c-1.1 0-2 0.9-2 2v2h-2c-1.1 0-2 0.9-2 2v70h28v-70c0-1.1-0.9-2-2-2z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      null,
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 109.89,
        y2: 53.442,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E64A19",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DF4319",
        offset: 0.2751
      }),
      _react2.default.createElement("stop", {
        stopColor: "#CC311B",
        offset: 0.6711
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B71C1C",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m122 60h-20c-1.1 0-2 0.9-2 2v42h-8v-30c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v38h-8v-54c0-1.1-0.9-2-2-2h-28c-1.1 0-2 0.9-2 2v26h-10c-1.1 0-2 0.9-2 2v30h120v-54c0-1.1-0.9-2-2-2z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFC107",
        opacity: 0.7
      },
      _react2.default.createElement("path", {
        d:
          "m67.25 112h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      }),
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
      }),
      _react2.default.createElement("path", {
        d:
          "m15.25 106h-4.5c-0.41 0-0.75-0.34-0.75-0.75v-4.5c0-0.41 0.34-0.75 0.75-0.75h4.5c0.41 0 0.75 0.34 0.75 0.75v4.5c0 0.41-0.34 0.75-0.75 0.75z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m45 59v54h-38v-26h12v-28h26m76 4v50h-62v-38h30v32h14v-44h18m-75-7h-28c-1.1 0-2 0.9-2 2v26h-10c-1.1 0-2 0.9-2 2v30h120v-54c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v42h-8v-30c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v38h-8v-54c0-1.1-0.9-2-2-2z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#FFC107",
        opacity: 0.3
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
        id: "a",
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
        xlinkHref: "#a"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "h",
        x1: 64,
        x2: 64,
        y1: 123.85,
        y2: 90.141,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#3B304F",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m120.3 90.25c-4.06 2-7.41 5.21-9.59 9.17-0.59 0.69-1.07 1.52-1.42 2.51-0.02 0.07-0.05 0.14-0.07 0.21-0.17 0.51-0.7 0.78-1.23 0.65-0.32-0.08-0.64-0.12-0.98-0.12-1.34 0-2.57 0.63-3.57 1.7-0.71 0.76-1.91 0.79-2.73 0.15-2.15-1.66-4.81-2.64-7.69-2.64-2.2 0-4.27 0.58-6.08 1.58-0.87 0.48-1.95 0.18-2.54-0.62-3.56-4.84-9.18-7.98-15.52-7.98-4.8 0-9.18 1.8-12.58 4.77-0.38 0.34-0.94 0.34-1.33 0.01-0.9-0.78-1.95-1.23-3.08-1.23-1.1 0-2.13 0.43-3.01 1.17-0.34 0.29-0.82 0.3-1.2 0.06-2.19-1.41-4.77-2.23-7.54-2.23-3.9 0-7.42 1.62-9.99 4.23-0.39 0.4-1.02 0.37-1.43-0.02-0.95-0.92-2.1-1.47-3.34-1.47-1.36 0-2.61 0.65-3.61 1.74-0.39 0.43-1.06 0.47-1.45 0.05-3.57-3.84-8.59-6.24-14.15-6.22-1.21 0.04-2.17 1.05-2.17 2.26v26.02h120v-31.43c0-1.9-2-3.16-3.7-2.32z",
      fill: "url(#h)"
    }),
    _react2.default.createElement("path", {
      d:
        "m50.2 106.91c3.02 0.93 4.54 3.57 4.13 6.64-0.28 2.14 3.07 2.2 3.35 0.08 0.19-1.41 0.04-2.77-0.37-4.01 4.74-0.01 8.82 2.53 10.88 6.87 0.93 1.95 3.87 0.36 2.95-1.59-2.62-5.52-8.29-8.93-14.39-8.62-0.44 0.02-0.79 0.19-1.06 0.43-1.15-1.38-2.72-2.45-4.57-3.02-2.05-0.64-2.98 2.58-0.92 3.22z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m106.05 111.43c2.1 0.71 3.11 2.58 2.77 4.72-0.24 1.49 2.1 1.59 2.34 0.12 0.16-0.98 0.08-1.93-0.18-2.81 3.31 0.08 6.12 1.93 7.48 5 0.61 1.38 2.7 0.32 2.09-1.05-1.73-3.91-5.63-6.4-9.9-6.29-0.31 0.01-0.56 0.12-0.75 0.28-0.78-0.99-1.86-1.76-3.14-2.19-1.43-0.49-2.14 1.74-0.71 2.22z",
      fill: "#424242",
      opacity: 0.2
    }),
    _react2.default.createElement("path", {
      d:
        "m24.03 109.78c-4.55 0.1-8.07 2.94-9.2 7.37-0.47 1.84-3.33 1.16-2.87-0.68 1.45-5.68 6.11-9.5 11.99-9.63 1.9-0.04 1.98 2.9 0.08 2.94z",
      fill: "#424242",
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
        fill: "#424242"
      })
    )
  );
}

exports.default = CitySunrise;
