import React from "react";

function Clock9(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={19.751}
        y2={111.99}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ECEFF1" offset={0.3212} />
        <stop stopColor="#B0BEC5" offset={1} />
      </linearGradient>
      <circle cx={64} cy={64} r={60} fill="url(#a)" />
      <path
        d="m63.8 63.98h0.4c2.1 0 3.8-1.7 3.8-3.8v-32.4c0-2.1-1.7-3.8-3.8-3.8h-0.4c-2.1 0-3.8 1.7-3.8 3.8v32.4c0 2.1 1.7 3.8 3.8 3.8z"
        fill="#424242"
      />
      <path
        d="m63.87 64.18v-0.4c0.02-2.1-1.66-3.82-3.76-3.84l-21.58-0.22c-2.1-0.02-3.82 1.66-3.84 3.76v0.4c-0.02 2.1 1.66 3.82 3.76 3.84l21.58 0.22c2.1 0.03 3.82-1.66 3.84-3.76z"
        fill="#424242"
      />
      <circle cx={64} cy={64} r={7} fill="#424242" />
      <circle cx={64} cy={64} r={3} fill="#fff" />
      <g fill="#757575">
        <circle cx={15.89} cy={64.13} r={4} />
        <circle cx={63.89} cy={16.13} r={4} />
        <circle cx={63.89} cy={112.13} r={4} />
        <circle cx={111.89} cy={64.13} r={4} />
      </g>
      <g opacity={0.2}>
        <path
          d="M64,8c30.88,0,56,25.12,56,56s-25.12,56-56,56S8,94.88,8,64S33.12,8,64,8 M64,4 C30.86,4,4,30.86,4,64s26.86,60,60,60s60-26.86,60-60S97.14,4,64,4L64,4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Clock9;
