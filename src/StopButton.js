import React from "react";

function StopButton(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={4.25}
        y2={123.91}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFAB40" offset={0} />
        <stop stopColor="#FF6D00" offset={1} />
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
          d="m89.2 36c1.55 0 2.8 1.25 2.8 2.8v50.4c0 1.55-1.25 2.8-2.8 2.8h-50.4c-1.55 0-2.8-1.25-2.8-2.8v-50.4c0-1.55 1.25-2.8 2.8-2.8h50.4m0-3h-50.4c-3.2 0-5.8 2.6-5.8 5.8v50.4c0 3.2 2.6 5.8 5.8 5.8h50.4c3.2 0 5.8-2.6 5.8-5.8v-50.4c0-3.2-2.6-5.8-5.8-5.8z"
          fill="#424242"
        />
      </g>
      <path
        d="m89.2 92h-50.4c-1.55 0-2.8-1.25-2.8-2.8v-50.4c0-1.55 1.25-2.8 2.8-2.8h50.4c1.55 0 2.8 1.25 2.8 2.8v50.4c0 1.55-1.25 2.8-2.8 2.8z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

export default StopButton;
