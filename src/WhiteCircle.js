import React from "react";

function WhiteCircle(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={4.6818}
        y2={123.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#ECECEC" offset={0.6578} />
        <stop stopColor="#E0E0E0" offset={1} />
      </linearGradient>
      <circle cx={64} cy={64} r={60} fill="url(#a)" />
      <g opacity={0.2}>
        <path
          d="M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default WhiteCircle;
