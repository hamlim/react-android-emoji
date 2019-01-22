import React from "react";

function HeavyMinusSign(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={51.661}
        y2={76.04}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2196F3" offset={0} />
        <stop stopColor="#1976D2" offset={1} />
      </linearGradient>
      <path
        d="m120 52h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m120 55c0.55 0 1 0.45 1 1v16c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-16c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default HeavyMinusSign;
