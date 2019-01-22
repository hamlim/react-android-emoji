import React from "react";

function WhiteMediumSmallSquare(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={36.313}
        y2={92.071}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#ECECEC" offset={0.6578} />
        <stop stopColor="#E0E0E0" offset={1} />
      </linearGradient>
      <path
        d="m88 92h-48c-2.21 0-4-1.79-4-4v-48c0-2.21 1.79-4 4-4h48c2.21 0 4 1.79 4 4v48c0 2.21-1.79 4-4 4z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m88 39c0.55 0 1 0.45 1 1v48c0 0.55-0.45 1-1 1h-48c-0.55 0-1-0.45-1-1v-48c0-0.55 0.45-1 1-1h48m0-3h-48c-2.21 0-4 1.79-4 4v48c0 2.21 1.79 4 4 4h48c2.21 0 4-1.79 4-4v-48c0-2.21-1.79-4-4-4z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default WhiteMediumSmallSquare;
