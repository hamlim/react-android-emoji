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

function FlightArrival(props) {
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
        x1: 42.731,
        x2: 55.945,
        y1: 60.984,
        y2: 60.984,
        gradientTransform: "matrix(.8675 .4975 -.4975 .8675 35.58 -23.573)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0030944
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m54.42 55.5c0.24-1.07 0.08-1.94-0.39-2.74s-1.51-1.48-2.51-1.53l-4.39-0.22c-0.35-0.02-0.68 0.04-0.98 0.15l-2.95-0.08c-0.99-0.03-1.87 0.81-2.1 1.87-0.22 1.05 0.24 2.18 1.16 2.56l2.72 1.13c0.08 0.03 0.15 0.04 0.23 0.07 0.17 0.13 0.36 0.25 0.57 0.34l4.02 1.65c1.1 0.45 1.96 0.54 2.76-0.1 0.8-0.63 1.56-1.74 1.86-3.1z",
      fill: "url(#c)"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.2488 -.9686 .9686 .2488 -14.407 91.572)",
      cx: 51.83,
      cy: 55.07,
      rx: 3.01,
      ry: 1.85,
      fill: "#424242"
    }),
    _react2.default.createElement("ellipse", {
      transform: "matrix(.5049 -.8632 .8632 .5049 -6.6882 111.62)",
      cx: 93.96,
      cy: 61.64,
      rx: 2.46,
      ry: 2.42,
      fill: "#757575"
    }),
    _react2.default.createElement("path", {
      d:
        "m15.92 33.57 14.74-0.3-5.64-13.45c-0.02-0.04-0.03-0.07-0.05-0.11-1.45-3.36-5.03-5.75-9-6.2l-0.05 20.06z",
      fill: "#039BE5"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m17.96 15.92c2.36 0.82 4.29 2.45 5.17 4.5l0.04 0.09 4.51 10.74-9.76 0.2 0.04-15.53m-1.99-2.48-0.05 20.06 14.74-0.3-5.64-13.45c-0.02-0.04-0.03-0.07-0.05-0.11-1.45-3.37-5.03-5.76-9-6.2z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 57.459,
        x2: 62.584,
        y1: 40.385,
        y2: 52.51,
        gradientTransform: "matrix(.8675 .4975 -.4975 .8675 35.58 -23.573)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#eee",
        offset: 0.0030944
      }),
      _react2.default.createElement("stop", {
        stopColor: "#BDBDBD",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m104.35 44.91c4.63 0.82 15.33 9.98 14.86 13.7-0.58 4.6-10.36 5.53-17.62 3.57 0 0-54.01-12.17-65.37-16.57s-20.06-9.44-24.88-11.88c-0.9-0.46-1.34-1.5-1.05-2.46l0.07-0.22c0.3-1 1.29-1.62 2.32-1.45 11.18 1.83 71.39 11.72 91.67 15.31z",
      fill: "url(#b)"
    }),
    _react2.default.createElement("path", {
      d:
        "m103.35 47.3 0.55 3.36c0.17 1.03 0.97 1.85 1.99 2.04l11.66 2.07c0.22 0.03-7.08-8.3-10.9-8.62l-1.97-0.23c-0.78-0.1-1.46 0.59-1.33 1.38z",
      fill: "#4FC3F7"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m12.35 29.57 0.01 2c11.76 1.93 71.45 11.74 91.64 15.31 1.49 0.26 4.8 2.13 8.24 5.18 3.8 3.36 5.01 5.74 4.99 6.3-0.2 1.59-3.71 2.79-8.17 2.79-2.33 0-4.8-0.32-6.95-0.9-0.03-0.01-0.05-0.01-0.08-0.02-0.54-0.12-53.99-12.19-65.08-16.49-8.88-3.44-16.26-7.35-21.15-9.94-1.36-0.72-2.53-1.34-3.55-1.86-0.03-0.02-0.05-0.06-0.04-0.1l0.07-0.22c0.01-0.05 0.05-0.06 0.07-0.06v-1.99m0 0c-0.9 0-1.72 0.59-1.99 1.48l-0.07 0.22c-0.29 0.97 0.14 2.01 1.05 2.46 4.83 2.44 13.53 7.48 24.88 11.88s65.37 16.57 65.37 16.57c2.36 0.64 4.98 0.97 7.47 0.97 5.17 0 9.76-1.43 10.15-4.54 0.47-3.72-10.24-12.88-14.86-13.7-20.28-3.59-80.49-13.48-91.66-15.31-0.11-0.02-0.23-0.03-0.34-0.03z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m26.97 55.53c1.51 1.1 3.87 1.33 6.11 0.94l32.39-6.4c0.46-0.23-0.64-1.68-1.76-1.97l-11.7-3.29c-0.36-0.09-0.64-0.08-0.79 0.05l-22.79 7.65c-0.9 0.32-3.98 1.19-1.46 3.02z",
      fill: "#039BE5"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 5.7351,
        x2: 17.068,
        y1: 65.126,
        y2: 57.126,
        gradientTransform: "matrix(.8675 .4975 -.4975 .8675 35.58 -23.573)",
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#64B5F6",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#5EAFF2",
        offset: 0.1944
      }),
      _react2.default.createElement("stop", {
        stopColor: "#4E9EE7",
        offset: 0.4529
      }),
      _react2.default.createElement("stop", {
        stopColor: "#3283D4",
        offset: 0.746
      }),
      _react2.default.createElement("stop", {
        stopColor: "#1565C0",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m7.26 36.03c0.51 0.49 1.82 1.35 3.66 1.2l16.72-1.67c0.18-0.07 0.15-0.34-0.04-0.37l-11.18-1.91c-0.04-0.01-0.09 0-0.13 0.02l-8.44 1.33c-1.32 0.17-1.09 0.93-0.59 1.4z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m51.71 46.73 8.25 2.32-27.22 5.38c-0.56 0.1-1.12 0.15-1.66 0.15-0.73 0-1.4-0.09-1.95-0.26l22.58-7.59m-0.11-2.05c-0.16 0-0.29 0.04-0.38 0.11l-22.79 7.65c-0.9 0.32-3.98 1.19-1.46 3.02 1.07 0.77 2.55 1.12 4.11 1.12 0.66 0 1.33-0.06 2-0.18l32.39-6.4c0.46-0.23-0.64-1.68-1.76-1.97l-11.7-3.29c-0.15-0.04-0.29-0.06-0.41-0.06z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m7.26 36.11c0.51 0.49 1.82 1.35 3.66 1.2l16.72-1.67c0.18-0.07 0.15-0.34-0.04-0.37l-11.18-1.91c-0.04-0.01-0.09 0-0.13 0.02l-8.44 1.33c-1.32 0.16-1.09 0.92-0.59 1.4z",
      fill: "#039BE5"
    }),
    _react2.default.createElement("line", {
      x1: 38.18,
      x2: 38.18,
      y1: 38.4,
      y2: 38.4,
      fill: "none",
      stroke: "#757575",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 3
    }),
    _react2.default.createElement("path", {
      d:
        "m89.48 50.65c-0.82-0.17-1.34-0.97-1.17-1.78s0.97-1.33 1.78-1.16 1.33 0.96 1.16 1.77c-0.15 0.71-0.77 1.2-1.47 1.2-0.1 0-0.2-0.01-0.3-0.03zm-8.6-1.8c-0.82-0.17-1.34-0.97-1.17-1.78s0.97-1.33 1.78-1.16 1.33 0.97 1.16 1.78c-0.15 0.71-0.77 1.19-1.47 1.19-0.1 0-0.2-0.01-0.3-0.03zm-8.61-1.8c-0.81-0.17-1.33-0.96-1.16-1.77s0.97-1.33 1.78-1.16 1.33 0.96 1.16 1.77c-0.15 0.71-0.77 1.19-1.47 1.19-0.1 0-0.2-0.01-0.31-0.03zm-8.59-1.79c-0.82-0.17-1.34-0.97-1.17-1.78s0.97-1.33 1.78-1.16 1.33 0.96 1.16 1.78c-0.15 0.7-0.77 1.19-1.47 1.19-0.1 0-0.2-0.01-0.3-0.03zm-8.6-1.8c-0.81-0.17-1.34-0.96-1.17-1.77s0.97-1.33 1.78-1.16 1.33 0.96 1.16 1.77c-0.15 0.71-0.77 1.19-1.47 1.19-0.1 0-0.2-0.01-0.3-0.03zm-8.6-1.79c-0.81-0.17-1.33-0.97-1.17-1.78 0.17-0.81 0.97-1.33 1.78-1.16s1.33 0.96 1.16 1.77c-0.15 0.71-0.77 1.2-1.47 1.2-0.1 0-0.2-0.01-0.3-0.03z",
      fill: "#757575"
    }),
    _react2.default.createElement("line", {
      x1: 98.38,
      x2: 98.38,
      y1: 50.97,
      y2: 50.97,
      fill: "none",
      stroke: "#757575",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 3
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m16.42 34.37 5.11 0.87-10.69 1.07c-0.12 0.01-0.24 0.01-0.35 0.01-1.03 0-1.78-0.38-2.2-0.67l8.13-1.28m-0.03-1.02c-0.03 0-0.07 0.01-0.09 0.02l-8.44 1.33c-1.33 0.16-1.1 0.92-0.6 1.4 0.47 0.45 1.61 1.22 3.23 1.22 0.14 0 0.28-0.01 0.43-0.02l16.72-1.67c0.18-0.07 0.15-0.34-0.04-0.37l-11.18-1.91h-0.03z",
        fill: "#424242"
      })
    ),
    _react2.default.createElement("rect", {
      x: 4.02,
      y: 96,
      width: 119.98,
      height: 20,
      fill: "#616161"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#E0E0E0"
      },
      _react2.default.createElement("rect", {
        x: 10.35,
        y: 103.89,
        width: 11.82,
        height: 4.22
      }),
      _react2.default.createElement("rect", {
        x: 34.17,
        y: 103.89,
        width: 11.82,
        height: 4.22
      }),
      _react2.default.createElement("rect", {
        x: 57.99,
        y: 103.89,
        width: 11.82,
        height: 4.22
      }),
      _react2.default.createElement("rect", {
        x: 81.81,
        y: 103.89,
        width: 11.82,
        height: 4.22
      }),
      _react2.default.createElement("rect", {
        x: 105.63,
        y: 103.89,
        width: 11.82,
        height: 4.22
      })
    ),
    _react2.default.createElement("rect", {
      x: 4,
      y: 88,
      width: 120,
      height: 8,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement("rect", {
      x: 4,
      y: 116,
      width: 120,
      height: 8,
      fill: "#BDBDBD"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d: "m121 91v30h-114v-30h114m3-3h-120v36h120v-36z",
        fill: "#424242"
      })
    )
  );
}

exports.default = FlightArrival;
