import React from "react";

function HeavyDivisionSign(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <g fill="url(#a)">
        <radialGradient
          id="a"
          cx={63.744}
          cy={3.5832}
          r={120.58}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4CAF50" offset={0} />
          <stop stopColor="#388E3C" offset={1} />
        </radialGradient>
        <circle cx={64} cy={106} r={18} />
        <circle cx={64} cy={22} r={18} />
        <path d="m120 52h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z" />
      </g>
      <g fill="#424242" opacity={0.2}>
        <path d="m64 91c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15m0-3c-9.94 0-18 8.06-18 18s8.06 18 18 18 18-8.06 18-18-8.06-18-18-18z" />
        <path d="m64 7c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15m0-3c-9.94 0-18 8.06-18 18s8.06 18 18 18 18-8.06 18-18-8.06-18-18-18z" />
        <path d="m120 55c0.55 0 1 0.45 1 1v16c0 0.55-0.45 1-1 1h-112c-0.55 0-1-0.45-1-1v-16c0-0.55 0.45-1 1-1h112m0-3h-112c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h112c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4z" />
      </g>
    </svg>
  );
}

export default HeavyDivisionSign;
