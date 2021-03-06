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

function OpenBook(props) {
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
        id: "f",
        x1: 64,
        x2: 64,
        y1: 30.015,
        y2: 115.1,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#A1887F",
        offset: 0.0195
      }),
      _react2.default.createElement("stop", {
        stopColor: "#896C62",
        offset: 0.4458
      }),
      _react2.default.createElement("stop", {
        stopColor: "#6D4C41",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m119.99 29.55c-30.79-7.29-49.05 1.04-55.99 5.43-6.95-4.37-25.23-12.7-55.98-5.43-2.37 0.55-4.02 2.52-4.02 4.78v69.37c0 1.52 0.75 2.94 2.05 3.88 1.29 0.94 2.95 1.27 4.55 0.91 21.75-4.91 36.19-1.57 44.34 1.95 0 0 0.22 4.54 9.34 4.54s8.78-4.54 8.78-4.54c8.14-3.52 22.58-6.86 44.33-1.95 1.6 0.36 3.31 0.02 4.58-0.92 1.28-0.92 2.03-2.34 2.03-3.86v-69.38c0-2.26-1.65-4.23-4.01-4.78z",
      fill: "url(#f)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "e",
        x1: 64.279,
        x2: 64.279,
        y1: 24.222,
        y2: 106.55,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 0.0089805
      }),
      _react2.default.createElement("stop", {
        stopColor: "#bbb",
        offset: 0.4345
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B4B4B4",
        offset: 0.5878
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A9A9A9",
        offset: 0.6971
      }),
      _react2.default.createElement("stop", {
        stopColor: "#989898",
        offset: 0.7855
      }),
      _react2.default.createElement("stop", {
        stopColor: "#828282",
        offset: 0.8611
      }),
      _react2.default.createElement("stop", {
        stopColor: "#666",
        offset: 0.9281
      }),
      _react2.default.createElement("stop", {
        stopColor: "#474747",
        offset: 0.9872
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 0.9953
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m56.57 107.35c3.24-3.5 11.08-3.59 14.41 0 4.92-3.6 15.18-11.18 40.67-4.88 1.42 0.35 2.94 0.02 4.07-0.9 1.14-0.9 1.8-2.28 1.8-3.76v-67.45c0-2.2-1.46-4.11-3.56-4.65-27.31-7.08-43.51 1.02-49.67 5.28-6.17-4.25-22.39-12.35-49.67-5.28-2.1 0.54-3.57 2.45-3.57 4.65v67.45c0 1.48 0.66 2.86 1.82 3.77 1.15 0.91 2.62 1.23 4.04 0.88 25.48-6.29 34.74 1.28 39.66 4.89z",
      fill: "url(#e)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "d",
        x1: 64,
        x2: 64,
        y1: 19.888,
        y2: 102.92,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#E0E0E0",
        offset: 0.0048445
      }),
      _react2.default.createElement("stop", {
        stopColor: "#DEDEDE",
        offset: 0.4448
      }),
      _react2.default.createElement("stop", {
        stopColor: "#D7D7D7",
        offset: 0.6032
      }),
      _react2.default.createElement("stop", {
        stopColor: "#ccc",
        offset: 0.7161
      }),
      _react2.default.createElement("stop", {
        stopColor: "#bbb",
        offset: 0.8074
      }),
      _react2.default.createElement("stop", {
        stopColor: "#A5A5A5",
        offset: 0.8856
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8A8A8A",
        offset: 0.9537
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.9964
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m61.48 102.82c1.51 1.2 3.53 1.2 5.03 0 4.46-3.59 17.32-11.25 40.44-4.97 1.29 0.35 2.66 0.02 3.69-0.9 1.03-0.9 1.63-2.27 1.63-3.74v-67.22c0-2.19-1.33-4.1-3.23-4.63-24.77-7.06-39.45 1.01-45.04 5.26-5.59-4.23-20.3-12.31-45.03-5.26-1.91 0.54-3.23 2.44-3.23 4.63v67.22c0 1.47 0.6 2.85 1.65 3.76 1.04 0.91 2.38 1.23 3.66 0.88 23.11-6.28 35.97 1.38 40.43 4.97z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m90.37 22c5.61 0 11.61 0.9 17.83 2.67 0.47 0.13 0.86 0.69 0.95 1.36 0.17 1.27 1.1 2.3 2.34 2.6l0.24 0.06c0.48 0.11 0.96 0.23 1.45 0.36 0.55 0.14 0.98 0.57 1.15 1.14 0.33 1.08 1.21 1.89 2.31 2.12 0.86 0.18 1.74 0.38 2.63 0.59 0.96 0.22 1.63 0.95 1.63 1.77v69.37c0 0.52-0.27 1.02-0.77 1.38-0.4 0.29-0.94 0.46-1.48 0.46-0.2 0-0.4-0.02-0.59-0.07-7.49-1.69-14.71-2.55-21.45-2.55-9.27 0-17.61 1.57-24.79 4.67-1.13 0.49-1.85 1.59-1.86 2.8-0.14 0.36-1.39 1.49-5.69 1.49-4.62 0-6.07-1.29-6.27-1.83-0.14-1.08-0.83-2.02-1.84-2.45-7.18-3.1-15.52-4.67-24.79-4.67-6.75 0-13.96 0.86-21.45 2.55-0.2 0.04-0.4 0.07-0.6 0.07-0.53 0-1.05-0.16-1.47-0.47-0.5-0.36-0.77-0.85-0.77-1.38v-69.38c0-0.82 0.67-1.55 1.64-1.77 0.98-0.23 2.02-0.46 3.19-0.7 1.08-0.22 1.96-1 2.31-2.05 0.18-0.55 0.61-0.96 1.16-1.1 0.24-0.06 0.47-0.12 0.7-0.17l0.43-0.1c1.26-0.31 2.2-1.38 2.33-2.68 0.07-0.7 0.47-1.28 0.96-1.42 6.2-1.77 12.18-2.66 17.78-2.66 12.83 0 20.88 4.64 24.54 7.41 0.55 0.42 1.21 0.63 1.86 0.63 0.66 0 1.32-0.21 1.87-0.63 3.66-2.78 11.69-7.42 24.52-7.42m0-3.09c-13.7 0-22.37 5-26.37 8.05-4.01-3.03-12.7-8.04-26.4-8.04-5.42 0-11.62 0.78-18.63 2.78-1.74 0.49-2.98 2.12-3.19 4.07-0.39 0.1-0.77 0.18-1.16 0.29-1.59 0.41-2.81 1.6-3.31 3.11-1.08 0.22-2.17 0.46-3.28 0.72-2.38 0.55-4.03 2.51-4.03 4.77v69.37c0 1.52 0.75 2.94 2.05 3.88 0.95 0.69 2.1 1.05 3.27 1.05 0.43 0 0.85-0.05 1.28-0.14 7.86-1.77 14.77-2.47 20.77-2.47 10.6 0 18.37 2.17 23.56 4.42 0 0 0.22 4.54 9.34 4.54s8.78-4.54 8.78-4.54c5.2-2.25 12.97-4.42 23.56-4.42 6 0 12.91 0.7 20.77 2.47 0.42 0.09 0.84 0.14 1.27 0.14 1.2 0 2.37-0.37 3.32-1.06 1.28-0.92 2.03-2.34 2.03-3.86v-69.38c0-2.26-1.65-4.23-4.01-4.78-0.91-0.22-1.8-0.41-2.69-0.6-0.48-1.56-1.71-2.81-3.34-3.23-0.59-0.15-1.16-0.29-1.74-0.43-0.25-1.88-1.48-3.45-3.18-3.93-7.03-2-13.24-2.78-18.67-2.78z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#999"
      },
      _react2.default.createElement("path", {
        d:
          "m27.9 36.89c-0.6 0.07-1.04 0.62-1.04 1.27v1.82c0 0.37 0.15 0.71 0.4 0.96s0.59 0.36 0.94 0.32c8.17-1.09 15.75-0.7 22.51 1.17 0.35 0.1 0.73 0.01 1.03-0.22 0.29-0.24 0.46-0.62 0.46-1.02v-1.85c0-0.59-0.37-1.1-0.9-1.24-7.13-1.92-14.99-2.32-23.4-1.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.9 49.21c-0.6 0.08-1.04 0.62-1.04 1.28v1.82c0 0.37 0.15 0.72 0.4 0.96s0.59 0.36 0.94 0.31c8.17-1.09 15.75-0.7 22.51 1.17 0.35 0.1 0.73 0.02 1.03-0.22 0.29-0.24 0.46-0.62 0.46-1.01v-1.86c0-0.58-0.37-1.1-0.9-1.24-7.12-1.92-14.99-2.32-23.4-1.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.9 61.53c-0.6 0.09-1.04 0.63-1.04 1.28v1.82c0 0.37 0.15 0.72 0.4 0.96s0.59 0.36 0.94 0.31c8.17-1.1 15.75-0.7 22.51 1.18 0.35 0.09 0.73 0.01 1.03-0.23 0.29-0.25 0.46-0.62 0.46-1.01v-1.86c0-0.58-0.37-1.1-0.9-1.24-7.13-1.91-14.99-2.32-23.4-1.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m27.9 73.85c-0.6 0.08-1.04 0.63-1.04 1.27v1.82c0 0.37 0.15 0.72 0.4 0.97s0.59 0.35 0.94 0.31c8.17-1.1 15.75-0.71 22.51 1.17 0.35 0.1 0.73 0.02 1.03-0.24 0.29-0.24 0.46-0.61 0.46-1.01v-1.86c0-0.59-0.37-1.1-0.9-1.24-7.12-1.9-14.99-2.3-23.4-1.19z"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.01 38.08c-0.53 0.14-0.9 0.65-0.9 1.24v1.85c0 0.4 0.17 0.78 0.46 1.02s0.67 0.33 1.03 0.22c6.77-1.87 14.35-2.26 22.51-1.17 0.34 0.04 0.68-0.07 0.94-0.32 0.26-0.24 0.4-0.59 0.4-0.96v-1.82c0-0.65-0.44-1.2-1.04-1.27-8.42-1.09-16.29-0.69-23.4 1.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.01 50.4c-0.53 0.14-0.9 0.66-0.9 1.24v1.86c0 0.4 0.17 0.77 0.46 1.01s0.67 0.32 1.03 0.22c6.77-1.87 14.34-2.26 22.51-1.17 0.34 0.05 0.68-0.07 0.94-0.31s0.4-0.6 0.4-0.96v-1.82c0-0.66-0.44-1.2-1.04-1.28-8.43-1.09-16.3-0.68-23.4 1.21z"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.01 62.72c-0.53 0.14-0.9 0.66-0.9 1.24v1.86c0 0.39 0.17 0.77 0.46 1.01s0.67 0.32 1.03 0.23c6.77-1.88 14.35-2.27 22.51-1.18 0.34 0.05 0.68-0.07 0.94-0.31s0.4-0.6 0.4-0.96v-1.81c0-0.65-0.44-1.19-1.04-1.28-8.42-1.1-16.29-0.69-23.4 1.2z"
      }),
      _react2.default.createElement("path", {
        d:
          "m77.01 75.05c-0.53 0.14-0.9 0.65-0.9 1.24v1.85c0 0.4 0.17 0.77 0.46 1.01 0.29 0.25 0.67 0.34 1.03 0.24 6.77-1.88 14.34-2.27 22.51-1.17 0.34 0.04 0.68-0.06 0.94-0.31s0.4-0.6 0.4-0.97v-1.82c0-0.64-0.44-1.19-1.04-1.27-8.43-1.11-16.3-0.71-23.4 1.2z"
      })
    ),
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", {
        id: "c",
        d:
          "m119.99 29.55c-0.91-0.22-1.8-0.41-2.69-0.6-0.48-1.56-1.71-2.81-3.34-3.23-0.59-0.15-1.16-0.29-1.74-0.43-0.25-1.88-1.48-3.45-3.18-3.93-24.77-7.06-39.45 1.01-45.04 5.26-5.59-4.23-20.3-12.31-45.03-5.26-1.74 0.49-2.98 2.12-3.19 4.07-0.39 0.1-0.77 0.18-1.16 0.29-1.59 0.41-2.81 1.6-3.31 3.11-1.08 0.22-2.17 0.46-3.28 0.72-2.38 0.55-4.03 2.52-4.03 4.78v69.37c0 1.52 0.75 2.94 2.05 3.88 1.29 0.94 2.95 1.27 4.55 0.91 21.75-4.91 36.19-1.96 44.34 1.56l-0.56 3.69c-0.27 1.6 0.61 3.13 1.81 3.13h15.62c1.19 0 2.08-1.53 1.81-3.13l-0.56-3.3c8.14-3.52 22.58-6.86 44.33-1.95 1.6 0.36 3.31 0.02 4.58-0.92 1.28-0.92 2.03-2.34 2.03-3.86v-69.38c0-2.26-1.65-4.23-4.01-4.78z"
      })
    ),
    _react2.default.createElement(
      "clipPath",
      {
        id: "a"
      },
      _react2.default.createElement("use", {
        xlinkHref: "#c"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m90.63 18.02h12.07v26.68l-4.61-5.78c-0.39-0.49-0.91-0.74-1.42-0.74s-1.03 0.25-1.42 0.74l-4.61 5.78v-26.68z",
      clipPath: "url(#a)",
      fill: "#ED1C24"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 59.963,
        x2: 68.037,
        y1: 61.631,
        y2: 61.631,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 0.0153
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0.3718,
        offset: 0.4739
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0.4,
        offset: 0.5087
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0.3511,
        offset: 0.5688
      }),
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        stopOpacity: 0,
        offset: 1
      })
    ),
    _react2.default.createElement("rect", {
      x: 59.96,
      y: 18.57,
      width: 8.07,
      height: 86.12,
      clipPath: "url(#a)",
      fill: "url(#b)"
    })
  );
}

exports.default = OpenBook;
