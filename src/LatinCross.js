import React from "react";

function LatinCross(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={4.25}
        y2={124.41}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B388FF" offset={0} />
        <stop stopColor="#A175FF" offset={0.3773} />
        <stop stopColor="#7C4DFF" offset={1} />
      </linearGradient>
      <path
        d="m116 124h-104c-4.42 0-8-3.58-8-8v-104c0-4.42 3.58-8 8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5h-104c-2.76 0-5-2.24-5-5v-104c0-2.76 2.24-5 5-5h104m0-3h-104c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8v-104c0-4.42-3.58-8-8-8z"
          fill="#424242"
        />
      </g>
      <g opacity={0.2}>
        <path
          d="m64 16c2.76 0 5 2.24 5 5v22h18c2.76 0 5 2.24 5 5s-2.24 5-5 5h-18v54c0 2.76-2.24 5-5 5s-5-2.24-5-5v-54h-18c-2.76 0-5-2.24-5-5s2.24-5 5-5h18v-22c0-2.76 2.24-5 5-5m0-3c-4.41 0-8 3.59-8 8v19h-15c-4.41 0-8 3.59-8 8s3.59 8 8 8h15v51c0 4.41 3.59 8 8 8s8-3.59 8-8v-51h15c4.41 0 8-3.59 8-8s-3.59-8-8-8h-15v-19c0-4.41-3.59-8-8-8z"
          fill="#424242"
        />
      </g>
      <path
        d="m87 43h-18v-22c0-2.76-2.24-5-5-5s-5 2.24-5 5v22h-18c-2.76 0-5 2.24-5 5s2.24 5 5 5h18v54c0 2.76 2.24 5 5 5s5-2.24 5-5v-54h18c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

export default LatinCross;
