import React from "react";

function RecordButton(props) {
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
          d="m64 36c15.46 0 28 12.54 28 28s-12.54 28-28 28-28-12.54-28-28 12.54-28 28-28m0-3c-17.09 0-31 13.91-31 31s13.91 31 31 31 31-13.91 31-31-13.91-31-31-31z"
          fill="#424242"
        />
      </g>
      <circle cx={64} cy={64} r={28} fill="#FAFAFA" />
    </svg>
  );
}

export default RecordButton;
