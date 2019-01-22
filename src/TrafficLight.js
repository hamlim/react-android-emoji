import React from "react";

function TrafficLight(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="d"
        x1={64}
        x2={64}
        y1={41.629}
        y2={82.912}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#616161" offset={0.0012001} />
        <stop stopColor="#535353" offset={0.0883} />
        <stop stopColor="#3D3D3D" offset={0.2697} />
        <stop stopColor="#2D2D2D" offset={0.4674} />
        <stop stopColor="#242424" offset={0.6918} />
        <stop stopColor="#212121" offset={1} />
      </linearGradient>
      <path
        d="M4,77.28V50.72c0-5.5,4.5-10,10-10h100c5.5,0,10,4.5,10,10v26.55c0,5.5-4.5,10-10,10H14 C8.5,87.28,4,82.78,4,77.28z"
        fill="url(#d)"
      />
      <radialGradient
        id="c"
        cx={55.784}
        cy={64.947}
        r={13.562}
        gradientTransform="matrix(4.4896e-11 1 -1 4.4896e-11 132.32 3.9844)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEB3B" offset={0.0139} />
        <stop stopColor="#FCCD31" offset={0.6259} />
        <stop stopColor="#FBC02D" offset={1} />
      </radialGradient>
      <circle cx={64.49} cy={63.81} r={13.56} fill="url(#c)" />
      <radialGradient
        id="b"
        cx={55.639}
        cy={101.45}
        r={13.562}
        gradientTransform="matrix(4.4896e-11 1 -1 4.4896e-11 132.32 3.9844)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#81C784" offset={0.0051181} />
        <stop stopColor="#72BE76" offset={0.2014} />
        <stop stopColor="#50A854" offset={0.7194} />
        <stop stopColor="#43A047" offset={1} />
      </radialGradient>
      <circle cx={27.55} cy={63.81} r={13.56} fill="url(#b)" />
      <g opacity={0.2}>
        <path
          d="m114 43.95c3.74 0 6.78 3.04 6.78 6.78v26.55c0 3.74-3.04 6.78-6.78 6.78h-100c-3.74 0-6.78-3.04-6.78-6.78v-26.56c0-3.74 3.04-6.78 6.78-6.78h100m0-3.22h-100c-5.5 0-10 4.5-10 10v26.55c0 5.5 4.5 10 10 10h100c5.5 0 10-4.5 10-10v-26.55c0-5.5-4.5-10-10-10z"
          fill="#eee"
        />
      </g>
      <radialGradient
        id="a"
        cx={55.591}
        cy={27.34}
        r={13.562}
        gradientTransform="matrix(4.4896e-11 1 -1 4.4896e-11 132.32 3.9844)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E57373" offset={0} />
        <stop stopColor="#E56564" offset={0.1973} />
        <stop stopColor="#E54542" offset={0.718} />
        <stop stopColor="#E53935" offset={1} />
      </radialGradient>
      <circle cx={101.42} cy={63.81} r={13.56} fill="url(#a)" />
    </svg>
  );
}

export default TrafficLight;
