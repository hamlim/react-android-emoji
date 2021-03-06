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

function Compass(props) {
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
        id: "c",
        x1: 24.99,
        x2: 112.35,
        y1: 16.65,
        y2: 122.69,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#FFE7AD",
        offset: 0.0041867
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFB200",
        offset: 0.2614
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FAAE00",
        offset: 0.4747
      }),
      _react2.default.createElement("stop", {
        stopColor: "#EBA400",
        offset: 0.7309
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D49300",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 60,
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 64,
        x2: 64,
        y1: 13.24,
        y2: 126.59,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#543B0B",
        offset: 0.0011619
      }),
      _react2.default.createElement("stop", {
        stopColor: "#563D0B",
        offset: 0.0163
      }),
      _react2.default.createElement("stop", {
        stopColor: "#785606",
        offset: 0.2478
      }),
      _react2.default.createElement("stop", {
        stopColor: "#906703",
        offset: 0.4683
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9F7201",
        offset: 0.6714
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A47600",
        offset: 0.8405
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 50.04,
      fill: "url(#b)"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 47.16,
      fill: "#362C15"
    }),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "a",
        cx: 64,
        cy: 64,
        r: 45.304,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0.00058093
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFEFC",
        offset: 0.2052
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFFBF2",
        offset: 0.3729
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFF6E0",
        offset: 0.5276
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFEFC9",
        offset: 0.6735
      }),
      _react2.default.createElement("stop", {
        stopColor: "#FFE7AD",
        offset: 0.8003
      }),
      _react2.default.createElement("stop", {
        stopColor: "#F0C560",
        offset: 1
      })
    ),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 45.3,
      fill: "url(#a)"
    }),
    _react2.default.createElement("circle", {
      cx: 64,
      cy: 64,
      r: 42.42,
      fill: "none",
      stroke: "#8A8C8E",
      strokeMiterlimit: 10,
      strokeWidth: 0.6331
    }),
    _react2.default.createElement("path", {
      d:
        "m59.06 29.27c-15.49 2.2-27.74 14.55-29.81 30.08h0.64c2.06-15.18 14.04-27.25 29.17-29.43v-0.65z",
      fill: "#8A8C8E"
    }),
    _react2.default.createElement("path", {
      d:
        "m69.66 29.39v0.64c14.8 2.46 26.43 14.38 28.46 29.32h0.64c-2.04-15.29-13.95-27.49-29.1-29.96z",
      fill: "#8A8C8E"
    }),
    _react2.default.createElement("path", {
      d:
        "M59.06,98.06C45.33,96.08,34.19,85.99,30.7,72.8h-0.66c3.51,13.54,14.93,23.9,29.01,25.9V98.06z",
      fill: "#8A8C8E"
    }),
    _react2.default.createElement("path", {
      d:
        "M97.3,72.8c-3.43,12.96-14.24,22.94-27.64,25.17v0.64c13.75-2.24,24.84-12.49,28.3-25.8H97.3z",
      fill: "#8A8C8E"
    }),
    _react2.default.createElement("polygon", {
      points: "64.22 70.89 64.22 65.89 81.98 83.64",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m64.38 66.27 16.11 16.11-16.11-11.57v-4.54m-0.32-0.76v5.47l19.4 13.93-19.4-19.4z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "83.46 84.91 69.53 65.51 64.06 65.51",
      fill: "#393839"
    }),
    _react2.default.createElement("polygon", {
      points: "46.1 47.39 63.85 60.15 63.85 65.15",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m47.58 48.66 16.12 11.57v4.54l-16.12-16.11m-2.97-2.53 19.4 19.4v-5.47l-19.4-13.93z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "44.61 46.13 58.55 65.53 64.01 65.53",
      fill: "#393839"
    }),
    _react2.default.createElement("polygon", {
      points: "64.45 65.38 82.2 47.62 69.45 65.38",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m80.94 49.1-11.57 16.12h-4.54l16.11-16.12m2.52-2.97-19.4 19.4h5.47l13.93-19.4z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "83.46 46.13 64.06 60.07 64.06 65.53",
      fill: "#393839"
    }),
    _react2.default.createElement("polygon", {
      points: "58.68 65.71 63.68 65.71 45.92 83.47",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.3 65.87-16.11 16.12 11.57-16.11h4.54m0.76-0.32h-5.46l-13.93 19.4 19.39-19.4z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "44.66 84.96 64.06 71.02 64.06 65.56",
      fill: "#393839"
    }),
    _react2.default.createElement("polygon", {
      points: "60.37 61.58 63.91 40.01 63.91 65.12",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.75 41.95v22.79l-3.21-3.21 3.21-19.58m0.31-3.88-3.86 23.57 3.87 3.87v-27.44h-0.01z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "64.06 38.07 67.93 61.64 64.06 65.51",
      fill: "#616161"
    }),
    _react2.default.createElement("polygon", {
      points: "60.54 69.48 63.75 66.27 63.75 89.06",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m63.43 67.03v18.14l-2.56-15.58 2.56-2.56m0.63-1.52-3.87 3.87 3.87 23.57v-27.44z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "64.06 92.94 67.93 69.37 64.06 65.51",
      fill: "#616161"
    }),
    _react2.default.createElement("polygon", {
      points: "38.57 65.38 60.14 61.84 63.68 65.38",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m60.09 62.01 3.21 3.21h-22.79l19.58-3.21m0.11-0.34-23.57 3.87h27.44l-3.87-3.87z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "36.63 65.53 60.2 69.4 64.06 65.53",
      fill: "#616161"
    }),
    _react2.default.createElement("polygon", {
      points: "64.45 65.66 89.56 65.66 67.98 69.2",
      fill: "#fff"
    }),
    _react2.default.createElement("path", {
      d:
        "m87.61 65.82-19.58 3.21-3.21-3.21h22.79m3.89-0.31h-27.44l3.87 3.87 23.57-3.87z",
      fill: "#A8A8A8"
    }),
    _react2.default.createElement("polygon", {
      points: "91.5 65.51 67.93 61.64 64.06 65.51",
      fill: "#616161"
    }),
    _react2.default.createElement("polygon", {
      points: "49.05 26.9 60.34 66.84 67.66 64",
      fill: "#ED0000"
    }),
    _react2.default.createElement("polygon", {
      points: "78.95 103.95 67.66 64 60.34 66.84",
      fill: "#00AEFF"
    }),
    _react2.default.createElement("circle", {
      cx: 64.06,
      cy: 65.51,
      r: 1.95,
      fill: "#FFC800"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m59.26 53.27 6.56 13.07 3.98 14.08-6.56-13.07-3.98-14.08m-9.68-24.95 11.29 39.95 18.62 37.1-11.3-39.95-18.61-37.1z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m62.57 23.96 4.77 6v-4.16c0-0.58-0.08-0.97-0.25-1.18-0.23-0.28-0.61-0.41-1.15-0.4v-0.26h3.2v0.26c-0.41 0.05-0.68 0.12-0.82 0.2s-0.25 0.22-0.33 0.41-0.12 0.51-0.12 0.97v8.05h-0.24l-6.54-8.05v6.15c0 0.56 0.13 0.93 0.38 1.13s0.55 0.29 0.87 0.29h0.23v0.26h-3.43v-0.26c0.53 0 0.9-0.11 1.11-0.33 0.21-0.21 0.31-0.58 0.31-1.09v-6.83l-0.21-0.26c-0.2-0.26-0.39-0.43-0.54-0.51-0.16-0.08-0.38-0.13-0.68-0.14v-0.26h3.44z"
    }),
    _react2.default.createElement("path", {
      d:
        "m98.02 61.07v4.07h0.2c0.63 0 1.09-0.2 1.38-0.6s0.47-0.99 0.55-1.76h0.28v5.24h-0.28c-0.06-0.57-0.18-1.04-0.37-1.4s-0.41-0.61-0.66-0.73c-0.25-0.13-0.61-0.19-1.09-0.19v2.82c0 0.55 0.02 0.89 0.07 1.01s0.13 0.22 0.26 0.3 0.33 0.12 0.62 0.12h0.6c0.93 0 1.68-0.22 2.25-0.65s0.97-1.09 1.21-1.98h0.27l-0.45 3.18h-8.64v-0.27h0.33c0.29 0 0.52-0.05 0.7-0.15 0.13-0.07 0.23-0.19 0.29-0.35 0.05-0.12 0.08-0.43 0.08-0.93v-6.6c0-0.45-0.01-0.73-0.04-0.83-0.05-0.17-0.14-0.3-0.27-0.4-0.19-0.14-0.44-0.21-0.77-0.21h-0.33v-0.27h8.37v2.96h-0.28c-0.14-0.72-0.34-1.24-0.6-1.56s-0.62-0.55-1.1-0.69c-0.27-0.09-0.79-0.13-1.55-0.13h-1.03z"
    }),
    _react2.default.createElement("path", {
      d:
        "m66.94 93.88 0.08 3.33h-0.3c-0.14-0.83-0.49-1.51-1.05-2.02s-1.16-0.76-1.81-0.76c-0.5 0-0.9 0.13-1.19 0.4s-0.44 0.58-0.44 0.92c0 0.22 0.05 0.42 0.15 0.59 0.14 0.23 0.37 0.46 0.69 0.69 0.23 0.16 0.76 0.45 1.6 0.86 1.17 0.57 1.96 1.12 2.36 1.63s0.6 1.1 0.6 1.75c0 0.83-0.33 1.55-0.98 2.16-0.65 0.6-1.48 0.9-2.48 0.9-0.31 0-0.61-0.03-0.89-0.1-0.28-0.06-0.63-0.18-1.05-0.36-0.24-0.1-0.43-0.15-0.58-0.15-0.13 0-0.26 0.05-0.41 0.15-0.14 0.1-0.26 0.25-0.35 0.45h-0.27v-3.77h0.27c0.22 1.06 0.63 1.87 1.25 2.43s1.28 0.84 1.99 0.84c0.55 0 0.99-0.15 1.32-0.45s0.49-0.65 0.49-1.05c0-0.24-0.06-0.46-0.19-0.69-0.13-0.22-0.32-0.43-0.57-0.63s-0.71-0.46-1.36-0.78c-0.91-0.45-1.56-0.83-1.96-1.14s-0.7-0.66-0.92-1.05-0.32-0.82-0.32-1.28c0-0.8 0.29-1.47 0.88-2.03 0.58-0.56 1.32-0.84 2.21-0.84 0.32 0 0.64 0.04 0.94 0.12 0.23 0.06 0.51 0.17 0.84 0.33s0.56 0.24 0.7 0.24c0.13 0 0.23-0.04 0.3-0.12s0.14-0.27 0.21-0.57h0.24z"
    }),
    _react2.default.createElement("path", {
      d:
        "m38.25 60.75v0.27c-0.18 0.01-0.34 0.06-0.46 0.15s-0.24 0.22-0.33 0.4c-0.03 0.06-0.18 0.43-0.45 1.12l-3.06 8.07h-0.28l-2.42-6.3-2.67 6.3h-0.28l-3.22-7.98c-0.33-0.8-0.56-1.29-0.68-1.46-0.13-0.17-0.35-0.27-0.66-0.3v-0.27h4.24v0.27c-0.34 0.01-0.57 0.06-0.68 0.16s-0.17 0.21-0.17 0.35c0 0.18 0.12 0.57 0.35 1.16l1.92 4.74 1.54-3.71-0.4-1.04c-0.22-0.57-0.39-0.95-0.51-1.14s-0.26-0.33-0.41-0.41-0.39-0.12-0.69-0.12v-0.27h4.74v0.27c-0.33 0-0.57 0.03-0.71 0.08-0.1 0.03-0.18 0.09-0.24 0.17s-0.09 0.17-0.09 0.27c0 0.11 0.11 0.45 0.32 1.02l1.78 4.63 1.59-4.18c0.17-0.43 0.27-0.73 0.31-0.89s0.06-0.31 0.06-0.44c0-0.2-0.07-0.35-0.2-0.47-0.14-0.11-0.39-0.17-0.77-0.18v-0.27h2.53z"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Compass;
