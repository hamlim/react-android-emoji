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

function Melon(props) {
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
        id: "d",
        x1: 5.9168,
        x2: 61.851,
        y1: 34.891,
        y2: 34.891,
        gradientTransform: "matrix(.9987 .0513 -.0513 .9987 1.9003 -1.7419)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#689F38",
        offset: 0.1235
      }),
      _react2.default.createElement("stop", {
        stopColor: "#73A743",
        offset: 0.3217
      }),
      _react2.default.createElement("stop", {
        stopColor: "#8EBD60",
        offset: 0.6685
      }),
      _react2.default.createElement("stop", {
        stopColor: "#AED581",
        offset: 0.9927
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m60.15 39.19s-1.57-2.98 0.87-10.26-3.44-13.97-9.43-22.04c0 0-1.89 5.15-6.15 3.91s-13.26-2.53-13.26-2.53 0.18 7.23 2.06 10.22 3.21 4.43 1.15 5.88c-2.06 1.46-9.17-1.28-11.31-1.68 0 0 2.32 3.63-1.14 5.49-3.45 1.86-8.84 2.11-8.84 2.11s2.52 2.25-1.7 4.08-6.54 2.2-6.54 2.2 5.15 1.89 7.61 5.68 5.78 5.45 9.94 5.16c4.16-0.3 5.98 0.24 4.83 2.19s-5.64 6.11-7.53 7.11c0 0 3.95-2.02 7.94 1.82s9.82 4.23 9.82 4.23c-0.47 0.14 8.59 4.18 15.74-1.68s7.44-13.38 6.95-16.48-1.01-5.41-1.01-5.41z",
      fill: "url(#d)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m35.46 11.81c2.9 0.48 6.82 1.18 9.14 1.86 0.71 0.21 1.43 0.31 2.13 0.31 2.03 0 3.68-0.86 4.93-2 5.1 6.82 8.05 11.37 6.51 15.98-2.32 6.93-1.42 10.75-0.89 12.12 0.14 0.67 0.55 2.6 0.92 4.98 0.13 0.8 1.05 7.99-5.89 13.68-2.01 1.65-4.44 2.49-7.21 2.49-2.3 0-4.12-0.58-4.79-0.85-0.46-0.36-1.02-0.58-1.63-0.63-0.05 0-4.83-0.39-7.95-3.4-0.88-0.85-1.77-1.48-2.63-1.95 1.17-1.2 2.18-2.38 2.72-3.29 1.23-2.09 0.69-3.68 0.25-4.44-1.34-2.35-4.44-2.35-5.76-2.35-0.63 0-1.32 0.03-2.12 0.08-0.24 0.02-0.48 0.03-0.71 0.03-2.74 0-4.8-1.22-6.5-3.83-0.83-1.27-1.86-2.35-2.94-3.26 0.18-0.08 0.36-0.15 0.55-0.23 2.34-1.02 3.73-2.44 4.14-4.23 2.02-0.34 4.55-0.95 6.63-2.07 2.15-1.16 2.97-2.81 3.28-3.99 0-0.02 0.01-0.03 0.01-0.05 1.97 0.53 4.09 1.01 5.9 1.01 1.48 0 2.64-0.32 3.57-0.97 4.16-2.95 1.73-6.71 0.27-8.96-0.19-0.3-0.4-0.62-0.62-0.96-0.6-0.96-1.04-3.02-1.31-5.08m16.13-4.92s-1.51 4.1-4.85 4.1c-0.4 0-0.83-0.06-1.29-0.19-4.25-1.24-13.27-2.52-13.27-2.52s0.18 7.23 2.06 10.22 3.21 4.43 1.15 5.88c-0.43 0.3-1.07 0.42-1.84 0.42-2.95 0-7.78-1.79-9.47-2.1 0 0 2.32 3.63-1.14 5.49-3.45 1.86-8.84 2.11-8.84 2.11s2.52 2.25-1.7 4.08-6.54 2.2-6.54 2.2 5.15 1.89 7.61 5.68c2.28 3.5 5.28 5.19 9.01 5.19 0.3 0 0.61-0.01 0.93-0.03 0.7-0.05 1.34-0.08 1.9-0.08 2.79 0 3.89 0.64 2.93 2.26-1.15 1.95-5.64 6.11-7.53 7.11 0 0 1.04-0.53 2.59-0.53 1.47 0 3.41 0.48 5.36 2.35 4 3.85 9.82 4.23 9.82 4.23-0.27 0.08 2.69 1.49 6.62 1.49 2.82 0 6.13-0.72 9.12-3.17 7.15-5.86 7.44-13.38 6.95-16.48s-1.02-5.42-1.02-5.42-1.57-2.98 0.87-10.26-3.44-13.96-9.43-22.03z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "radialGradient",
      {
        id: "c",
        cx: 51.322,
        cy: 60.663,
        r: 64.953,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#C6E698",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C1E196",
        offset: 0.2312
      }),
      _react2.default.createElement("stop", {
        stopColor: "#B3D38F",
        offset: 0.5028
      }),
      _react2.default.createElement("stop", {
        stopColor: "#9BBD83",
        offset: 0.7935
      }),
      _react2.default.createElement("stop", {
        stopColor: "#86A879",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m68.18 27.57c-34.39 0-47.15 29.34-46.89 50.31 0.31 25.14 21.29 46.24 48.07 45.91s47.24-21.94 46.93-47.08c-0.25-20.96-12.08-49.14-48.11-49.14z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.8
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement("path", {
          id: "b",
          d:
            "m68.18 27.57c-34.39 0-47.15 29.34-46.89 50.31 0.31 25.14 21.29 46.24 48.07 45.91s47.24-21.94 46.93-47.08c-0.25-20.96-12.08-49.14-48.11-49.14z",
          opacity: 0.8
        })
      ),
      _react2.default.createElement(
        "clipPath",
        {
          id: "a"
        },
        _react2.default.createElement("use", {
          xlinkHref: "#b"
        })
      ),
      _react2.default.createElement("path", {
        d:
          "m119.52 80.86c0.09-1.11 0.14-2.23 0.16-3.35-5.21-0.11-9.9-0.79-14.08-1.84-0.1-6.05-0.06-11.9 0.32-15.05 4.71 0.31 8.57 0.1 11.25-0.18-0.29-0.91-0.6-1.81-0.94-2.71-7.6 0.45-17.08-1.08-21.53-1.91 2.88-2.99 5.1-5.93 6.78-8.51 0.1-0.03 0.16-0.05 0.16-0.05l-0.03-0.16c1.9-2.94 3.09-5.4 3.74-6.92-0.68-0.75-1.38-1.5-2.1-2.23-0.87 2.1-1.86 4.08-2.94 5.94-13.63 3.19-31.58 0.65-37.82-0.41 2.13-12.28 8.61-19.52 11.53-22.23-1.23-0.28-2.46-0.54-3.71-0.74-2.11 2.1-5.6 6.2-8.23 12.41-9.3 1.32-22.36-3.19-26.63-4.79-1.11 0.72-2.17 1.47-3.19 2.25 4.17 1.69 8.13 2.87 11.72 3.69-0.01 1.24-0.02 13.28 1.24 21.32-2.85-0.55-5.98-1-9.26-1.26-2.31-3.97-7.48-12.77-10.5-17.43-0.8 0.9-1.57 1.82-2.29 2.76 2.5 3.76 6.75 10.55 9.02 14.46-5.34-0.15-10.99 0.31-16.54 1.77-0.16-0.39-0.29-0.75-0.41-1.09-0.7 2.1-1.27 4.24-1.73 6.39 5.42 12.87 15.31 21.48 19.09 24.43-4.18 6.1-7.45 13.26-8.41 21.35l-0.33 3.17c0.84 1.07 1.71 2.11 2.63 3.1 0.35-4.29 1.45-10.56 4.66-17.62 2.05 1.69 6.06 4.63 12.04 7.3-0.4 2.06-2.44 12.84-3.04 21.03 0.95 0.52 1.92 1.03 2.9 1.49 0.21-1.74 0.65-5.26 1.24-9.18 2.04 3.59 5.06 8.63 8.06 12.59 1.95 0.52 3.94 0.92 5.95 1.22l0.16-0.14s-9.51-12.57-13.2-19.64c0.39-2.18 0.82-4.25 1.26-6 4.68 1.78 10.33 3.29 16.94 4.01 1.3 7.9 3.42 15.72 6.77 22.17 1.12-0.09 2.24-0.21 3.37-0.37-1.64-2.65-5.64-10.66-7.59-27.99 4.71 1.89 15.29 6.62 18.05 8.14-2.38 4.94-4.22 11.11-4.69 18.68 1.12-0.29 2.23-0.62 3.35-0.99 1.25-11.81 5.72-19.81 10.15-24.98 1.18 3.35 3.77 10.35 6.64 15.94 1.16-0.92 2.28-1.88 3.35-2.88-2.4-4.81-5.64-11.64-7.08-16.1 1.55-1.44 2.99-2.55 4.17-3.35 4.13 1.62 8.89 2.93 14.4 3.77 0.4-0.82 0.77-1.65 1.13-2.49-3.34-0.61-6.4-1.4-9.2-2.32-0.09-1.94-0.4-8.7-0.57-15.95 4.68 1.03 9.4 1.44 13.81 1.48zm-22-32.69c-4.23 5.83-9.34 10.31-14.36 13.72-2.1-1.01-15.64-7.5-21.36-9.82-0.01-1.78 0.07-3.49 0.22-5.11 15.93 3.74 29.13 2.35 35.5 1.21zm-32.84 21.7c-1.53-5.07-2.4-9.74-2.73-14 5.15 2.09 15.86 6.91 17.9 8.14-6.06 3.62-11.6 5.7-14.78 6.71 0.01-0.18 0.01-0.34 0.02-0.52l-0.41-0.33zm-16.6-34.97c5.92 1.01 10.48 1.03 12.89 0.93-2.08 6.1-3.2 13.88-1.79 23.43-1.91-0.71-5.35-1.88-9.79-2.96-0.48-4.46-1.52-15.09-1.31-21.4zm-17.91 22.74c7.93-0.16 17.19 1.08 27.64 4.71-3.25 1.94-10.33 6.53-17.19 13.44-2.41-3.67-8.31-12.85-10.45-18.15zm-13.01 1.6c2.67-0.62 5.61-1.09 8.77-1.36 1.62 3.1 7.6 14.31 12.48 20.23-1.15 1.25-2.27 2.58-3.36 3.96-9.44-7.39-14.97-16.6-17.89-22.83zm26.84 40.11c-3.75-1.74-7.66-4.02-11.36-7.01 3.08-5.83 7.63-12.03 14.34-17.97 0.58 0.99 1.75 2.97 3.24 5.39-0.89 2.42-4.34 11.96-6.22 19.59zm18.93 5.43c-1.31-0.13-8.05-0.95-16.09-4.2 1.12-3.77 3.49-11.54 5.7-17.13 3.05 4.76 6.7 10.03 9.49 12.84 0.22 2.77 0.51 5.62 0.9 8.49zm-13.05-32.85c3.05-2.44 6.48-4.82 10.36-7.09 0.43 1.82 0.94 3.69 1.56 5.63-0.23 3.87-0.54 11.51-0.11 20.52-2.48-3.64-9.07-13.4-11.81-19.06zm15.72 26.09c-0.6-6.95-0.88-15.23-0.6-25.04 3.22-0.88 6.2-1.91 8.97-3.08 0.57 2.09 1.99 6.15 5.16 10.7-1.53 3.24-5.93 12.9-7.62 19.96-2.38-1.07-4.49-1.99-5.91-2.54zm19.99 9.11c-2.42-1.16-6.37-3.03-10.25-4.82 1.04-3.43 3.81-12.29 6.39-18.38 3.37 3.87 8.09 7.8 14.69 10.93-2.73 2.01-7.15 5.92-10.83 12.27zm17.3-13c-18.44-7.32-24.28-20.66-25.86-25.61 1.48-0.71 2.89-1.47 4.23-2.24l0.1 0.29 4.68 3.85c4.94 3.93 10.46 6.49 16.07 8.1 0.12 5.87 0.34 11.72 0.78 15.61zm-19.12-29.37c3.16-2.02 5.9-4.18 8.28-6.37 3.57 0.91 6.93 1.5 10.02 1.86-0.03 2.97-0.07 8.46 0 14.4-8.48-2.68-14.55-6.75-18.3-9.89z",
        clipPath: "url(#a)",
        fill: "#DCEDC8"
      })
    ),
    _react2.default.createElement("ellipse", {
      cx: 67.74,
      cy: 35.16,
      rx: 9.18,
      ry: 4.04,
      fill: "#558B2F"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m68.18 30.57c15.29 0 27.1 5.23 35.1 15.55 6.22 8.03 9.87 19.2 10.01 30.64 0.29 23.98-19.43 43.74-43.97 44.04h-0.58c-11.9 0-23.07-4.53-31.44-12.74-8.25-8.1-12.87-18.83-13.01-30.21-0.13-10.39 3.36-25.17 13.54-35.46 7.74-7.84 17.95-11.82 30.35-11.82m0-3c-34.39 0-47.15 29.34-46.89 50.31 0.31 24.95 20.97 45.92 47.45 45.92h0.61c26.77-0.33 47.24-21.94 46.93-47.08-0.24-20.97-12.07-49.15-48.1-49.15z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m91.86 12.87c0.03-0.6-1.57-4.03-1.57-4.03s0 0-9.97 1.95-30.18 3.47-30.18 3.47l-0.09 4.85s7.63-0.33 14.68-0.8c0.6-0.04 1.29-0.11 2.06-0.2-1.17 5.2-1.37 12.83-1.92 14.34-0.82 2.22-1.94 2.76-1.94 2.76s4.67 2.76 9.92-0.23c0 0-2.44-3.31-2.25-9.47 0.15-5.15 1.9-7.21 3.47-8.53 8.22-1.49 17.77-3.7 17.79-4.11z",
      fill: "#558B2F"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m89.11 11.1c0.08 0.19 0.16 0.37 0.23 0.55-2.9 0.78-9.31 2.21-15.65 3.35-0.34 0.06-0.67 0.21-0.93 0.44-1.85 1.56-4.01 4.11-4.18 10-0.11 3.87 0.73 6.76 1.49 8.56-0.78 0.24-1.57 0.36-2.38 0.36-0.52 0-1-0.05-1.43-0.12 0.17-0.33 0.33-0.7 0.48-1.11 0.32-0.87 0.47-2.33 0.75-5.29 0.28-2.89 0.62-6.5 1.25-9.29 0.14-0.63-0.03-1.3-0.47-1.78-0.38-0.42-0.92-0.66-1.48-0.66-0.08 0-0.16 0-0.24 0.01-0.77 0.09-1.42 0.16-1.95 0.19-4.72 0.32-9.75 0.57-12.51 0.7l0.02-0.9c5.22-0.42 20.27-1.73 28.6-3.36l8.4-1.65m1.18-2.27-9.97 1.95c-9.97 1.95-30.18 3.47-30.18 3.47l-0.09 4.85s7.63-0.33 14.68-0.8c0.6-0.04 1.29-0.11 2.06-0.2-1.17 5.2-1.37 12.83-1.92 14.34-0.82 2.22-1.94 2.76-1.94 2.76s1.96 1.16 4.77 1.16c1.52 0 3.3-0.34 5.14-1.39 0 0-2.44-3.31-2.25-9.47 0.15-5.15 1.9-7.21 3.47-8.53 8.24-1.48 17.79-3.69 17.81-4.1 0.02-0.6-1.58-4.04-1.58-4.04z",
        fill: "#424242"
      })
    )
  );
}

exports.default = Melon;
