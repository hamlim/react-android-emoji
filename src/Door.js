import React from "react";

function Door(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <polygon points="100 4 28 4 28.02 124 100.08 124" fill="#4E342E" />
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={96.202}
        y2={-11.015}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#795548" offset={0.0032884} />
        <stop stopColor="#A1887F" offset={1} />
      </linearGradient>
      <polygon points="94 123.85 34 123.98 34 10.55 94 10.42" fill="url(#a)" />
      <g opacity={0.2}>
        <path
          d="m91.97 12.43-0.01 109.5-56.09 0.03v-109.42l56.1-0.11m2-2.01-60.09 0.13v113.41l60.09-0.04v-113.5z"
          fill="#424242"
        />
      </g>
      <path
        d="m51.71 72.44h-9c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5h9c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z"
        fill="#FFD54F"
      />
      <circle cx={64.4} cy={33.6} r={4} fill="#64B5F6" />
      <g opacity={0.2}>
        <path
          d="m64.4 31.6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="M98,6l0.08,116H30.02L30,6H98 M100,4H28l0.02,120h72.06L100,4L100,4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default Door;
