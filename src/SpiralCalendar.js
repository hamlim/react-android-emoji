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

function SpiralCalendar(props) {
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
        x1: 64,
        x2: 64,
        y1: 57.727,
        y2: 123.78,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#fff",
        offset: 0
      }),
      _react2.default.createElement("stop", {
        stopColor: "#C8C9CA",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m108.21 124h-88.42c-5.52 0-10-4.48-10-10v-76.5c0-5.76 4.67-10.43 10.43-10.43h87.56c5.76 0 10.43 4.67 10.43 10.43v76.5c0 5.52-4.47 10-10 10z",
      fill: "url(#d)"
    }),
    _react2.default.createElement("path", {
      d:
        "M118.21,57.95H9.79V22.17c0-4.42,3.58-8,8-8h92.43c4.42,0,8,3.58,8,8V57.95z",
      fill: "#1E88E5"
    }),
    _react2.default.createElement(
      "g",
      {
        fill: "#fff"
      },
      _react2.default.createElement("path", {
        d:
          "m45.44 27.31h4.13v13.88c0 1.28-0.28 2.4-0.85 3.38-0.56 0.98-1.36 1.73-2.39 2.27-1.03 0.53-2.19 0.8-3.48 0.8-2.12 0-3.77-0.54-4.96-1.62-1.18-1.08-1.78-2.6-1.78-4.58h4.16c0 0.98 0.21 1.71 0.62 2.18s1.06 0.7 1.96 0.7c0.79 0 1.42-0.27 1.89-0.81s0.7-1.31 0.7-2.31v-13.89z"
      }),
      _react2.default.createElement("path", {
        d:
          "m61.78 45.85c-0.98 1.19-2.34 1.79-4.08 1.79-1.6 0-2.82-0.46-3.66-1.38s-1.27-2.26-1.29-4.04v-9.77h3.98v9.64c0 1.55 0.71 2.33 2.12 2.33 1.35 0 2.28-0.47 2.78-1.41v-10.55h3.99v14.9h-3.75l-0.09-1.51z"
      }),
      _react2.default.createElement("path", {
        d: "M72.84,47.36h-3.99V26.21h3.99V47.36z"
      }),
      _react2.default.createElement("path", {
        d:
          "m81.68 41.73 2.75-9.27h4.27l-5.99 17.22-0.33 0.79c-0.89 1.95-2.36 2.92-4.41 2.92-0.58 0-1.17-0.09-1.76-0.26v-3.02l0.61 0.01c0.75 0 1.32-0.12 1.69-0.34 0.37-0.23 0.66-0.61 0.87-1.14l0.47-1.23-5.22-14.94h4.28l2.77 9.26z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#2F2F2F"
      },
      _react2.default.createElement("path", {
        d: "M35.37,110.69h-7.46V81.88L19,84.63v-6.02l15.57-5.58h0.8V110.69z"
      }),
      _react2.default.createElement("path", {
        d: "m73.15 77.25-14.54 33.44h-7.88l14.57-31.58h-18.7v-6.02h26.55v4.16z"
      })
    ),
    _react2.default.createElement(
      "g",
      {
        fill: "#9E9E9E"
      },
      _react2.default.createElement("path", {
        d:
          "m82.51 88.11h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.29 88.11h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.07 88.11h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m82.51 99.4h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.29 99.4h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.07 99.4h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m82.51 110.69h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m95.29 110.69h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      }),
      _react2.default.createElement("path", {
        d:
          "m108.07 110.69h-2.55c-0.59 0-1.07-0.48-1.07-1.07v-2.41c0-0.59 0.48-1.07 1.07-1.07h2.55c0.59 0 1.07 0.48 1.07 1.07v2.41c0 0.59-0.48 1.07-1.07 1.07z"
      })
    ),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "c",
        x1: 31.917,
        x2: 31.917,
        y1: 1.8594,
        y2: 23.798,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.0054573
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m31.92 19.62c-1.39 0-2.95-2.1-2.95-4.92s1.56-4.92 2.95-4.92c1.32 0 2.78 1.91 2.93 4.52h5.79c-0.17-5.81-3.93-10.3-8.72-10.3-4.9 0-8.73 4.7-8.73 10.7s3.84 10.7 8.73 10.7c1.6 0 2.89-1.29 2.89-2.89 0.01-1.6-1.29-2.89-2.89-2.89z",
      fill: "url(#c)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "b",
        x1: 65.202,
        x2: 65.202,
        y1: 1.8594,
        y2: 23.798,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.0054573
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m65.21 19.62c-1.39 0-2.95-2.1-2.95-4.92s1.56-4.92 2.95-4.92c1.32 0 2.78 1.91 2.93 4.52h5.79c-0.17-5.81-3.93-10.3-8.72-10.3-4.9 0-8.73 4.7-8.73 10.7s3.84 10.7 8.73 10.7c1.6 0 2.89-1.29 2.89-2.89s-1.29-2.89-2.89-2.89z",
      fill: "url(#b)"
    }),
    _react2.default.createElement(
      "linearGradient",
      {
        id: "a",
        x1: 99.346,
        x2: 99.346,
        y1: 1.8594,
        y2: 23.798,
        gradientUnits: "userSpaceOnUse"
      },
      _react2.default.createElement("stop", {
        stopColor: "#757575",
        offset: 0.0054573
      }),
      _react2.default.createElement("stop", {
        stopColor: "#424242",
        offset: 1
      })
    ),
    _react2.default.createElement("path", {
      d:
        "m99.35 19.62c-1.39 0-2.95-2.1-2.95-4.92s1.56-4.92 2.95-4.92c1.32 0 2.78 1.91 2.93 4.52h5.79c-0.17-5.81-3.93-10.3-8.72-10.3-4.9 0-8.73 4.7-8.73 10.7s3.84 10.7 8.73 10.7c1.6 0 2.89-1.29 2.89-2.89s-1.29-2.89-2.89-2.89z",
      fill: "url(#a)"
    }),
    _react2.default.createElement(
      "g",
      {
        opacity: 0.2
      },
      _react2.default.createElement("path", {
        d:
          "m71.02 14.94c0.34 1.29 1.51 2.23 2.9 2.23h16.72c1.38 0 2.56-0.94 2.9-2.22 0.13 0.47 0.36 0.91 0.7 1.27 0.57 0.61 1.36 0.96 2.2 0.96h5.83c0.83 0 1.63-0.35 2.2-0.96 0.34-0.36 0.58-0.8 0.7-1.27 0.34 1.29 1.51 2.23 2.9 2.23h1.57c3.08 0 5.58 2.5 5.58 5.58v90.52c0 4.26-3.47 7.73-7.73 7.73h-86.98c-4.26 0-7.73-3.47-7.73-7.73v-90.52c0-3.08 2.5-5.58 5.58-5.58h4.84c1.38 0 2.56-0.94 2.9-2.22 0.13 0.47 0.36 0.91 0.7 1.27 0.57 0.61 1.36 0.96 2.2 0.96h5.83c0.83 0 1.63-0.35 2.2-0.96 0.34-0.36 0.58-0.8 0.7-1.27 0.34 1.29 1.51 2.23 2.9 2.23h15.87c1.38 0 2.56-0.94 2.9-2.22 0.13 0.47 0.36 0.91 0.7 1.27 0.57 0.61 1.36 0.96 2.2 0.96h5.83c0.83 0 1.63-0.35 2.2-0.96 0.32-0.39 0.56-0.82 0.69-1.3m28.33-10.94c-4.75 0-8.49 4.43-8.71 10.17h-16.72c-0.22-5.74-3.96-10.17-8.71-10.17s-8.49 4.43-8.71 10.17h-15.87c-0.21-5.74-3.95-10.17-8.71-10.17-4.75 0-8.49 4.43-8.71 10.17h-4.84c-4.74 0-8.58 3.84-8.58 8.58v90.52c0 5.93 4.8 10.73 10.73 10.73h86.97c5.93 0 10.73-4.8 10.73-10.73v-90.51c0-4.74-3.84-8.58-8.58-8.58h-1.57c-0.23-5.75-3.96-10.18-8.72-10.18zm-2.91 10.17c0.18-2.54 1.61-4.39 2.92-4.39 1.3 0 2.73 1.85 2.91 4.39h-5.83zm-34.15 0c0.18-2.54 1.61-4.39 2.92-4.39 1.3 0 2.73 1.85 2.91 4.39h-5.83zm-33.28 0c0.18-2.54 1.61-4.39 2.92-4.39 1.3 0 2.73 1.85 2.91 4.39h-5.83z",
        fill: "#424242"
      })
    )
  );
}

exports.default = SpiralCalendar;
