import React from "react";

function O(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={3.25}
        y2={123.48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5252" offset={0} />
        <stop stopColor="#EE3030" offset={0.4455} />
        <stop stopColor="#D50000" offset={1} />
      </linearGradient>
      <path
        d="m64 28c19.85 0 36 16.15 36 36s-16.15 36-36 36-36-16.15-36-36 16.15-36 36-36m0-24c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m64 7c31.43 0 57 25.57 57 57s-25.57 57-57 57-57-25.57-57-57 25.57-57 57-57m0 96c21.5 0 39-17.5 39-39s-17.5-39-39-39-39 17.5-39 39 17.5 39 39 39m0-99c-33.14 0-60 26.86-60 60s26.86 60 60 60 60-26.86 60-60-26.86-60-60-60zm0 96c-19.85 0-36-16.15-36-36s16.15-36 36-36 36 16.15 36 36-16.15 36-36 36z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default O;
