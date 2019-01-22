import React from "react";

function Clock7(props) {
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
        d="m64.04 64.09-0.34-0.21c-1.77-1.12-4.12-0.59-5.24 1.18l-11.52 18.25c-1.12 1.77-0.59 4.12 1.18 5.24l0.34 0.21c1.77 1.12 4.12 0.59 5.24-1.18l11.53-18.25c1.12-1.77 0.59-4.12-1.19-5.24z"
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

export default Clock7;
