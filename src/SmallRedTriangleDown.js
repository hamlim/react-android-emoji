import React from "react";

function SmallRedTriangleDown(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={36}
        y2={91.637}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF5350" offset={0} />
        <stop stopColor="#E0403E" offset={0.5777} />
        <stop stopColor="#D32F2F" offset={1} />
      </linearGradient>
      <path
        d="m60.66 89.94-28-48.53c-1.24-2.49 0.56-5.41 3.34-5.41h56c2.78 0 4.58 2.92 3.34 5.4l-28 48.53c-1.37 2.76-5.3 2.76-6.68 0.01z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m92 39c0.34 0 0.53 0.19 0.62 0.35 0.09 0.15 0.17 0.38 0.06 0.66l-27.94 48.43-0.08 0.16c-0.17 0.33-0.45 0.4-0.66 0.4s-0.49-0.07-0.66-0.41l-0.08-0.16-27.94-48.42c-0.12-0.28-0.04-0.51 0.06-0.66 0.09-0.16 0.28-0.35 0.62-0.35h56m0-3h-56c-2.78 0-4.58 2.92-3.34 5.4l28 48.53c0.69 1.38 2.02 2.07 3.34 2.07 1.33 0 2.65-0.69 3.34-2.06l28-48.53c1.24-2.49-0.56-5.41-3.34-5.41z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default SmallRedTriangleDown;
