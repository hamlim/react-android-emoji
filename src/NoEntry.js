import React from "react";

function NoEntry(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={18.667}
        y2={124.86}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5252" offset={0} />
        <stop stopColor="#F33B3B" offset={0.324} />
        <stop stopColor="#D50000" offset={1} />
      </linearGradient>
      <circle cx={64} cy={64} r={60} fill="url(#a)" />
      <g opacity={0.2}>
        <path
          d="M64,7c31.43,0,57,25.57,57,57s-25.57,57-57,57S7,95.43,7,64S32.57,7,64,7 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m104 56c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4h-80c-2.21 0-4-1.79-4-4v-8c0-2.21 1.79-4 4-4h80m0-3h-80c-3.86 0-7 3.14-7 7v8c0 3.86 3.14 7 7 7h80c3.86 0 7-3.14 7-7v-8c0-3.86-3.14-7-7-7z"
          fill="#424242"
        />
      </g>
      <path
        d="m104 72h-80c-2.21 0-4-1.79-4-4v-8c0-2.21 1.79-4 4-4h80c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

export default NoEntry;
