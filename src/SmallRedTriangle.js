import React from "react";

function SmallRedTriangle(props) {
  return (
    <svg enableBackground="new 0 0 128 128" viewBox="0 0 128 128" {...props}>
      <linearGradient
        id="a"
        x1={64}
        x2={64}
        y1={35.833}
        y2={92.972}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF5350" offset={0} />
        <stop stopColor="#E0403E" offset={0.5777} />
        <stop stopColor="#D32F2F" offset={1} />
      </linearGradient>
      <path
        d="m60.66 38.06-28 48.53c-1.24 2.49 0.56 5.41 3.34 5.41h56c2.78 0 4.58-2.92 3.34-5.4l-28-48.53c-1.37-2.76-5.3-2.76-6.68-0.01z"
        fill="url(#a)"
      />
      <g opacity={0.2}>
        <path
          d="m64 39c0.21 0 0.49 0.07 0.66 0.41l0.08 0.16 27.94 48.43c0.12 0.28 0.04 0.51-0.06 0.66-0.09 0.15-0.28 0.34-0.62 0.34h-56c-0.34 0-0.53-0.19-0.62-0.35-0.09-0.15-0.17-0.38-0.06-0.66l27.94-48.43 0.08-0.16c0.17-0.33 0.46-0.4 0.66-0.4m0-3c-1.33 0-2.65 0.69-3.34 2.06l-28 48.53c-1.24 2.49 0.56 5.41 3.34 5.41h56c2.78 0 4.58-2.92 3.34-5.4l-28-48.53c-0.69-1.38-2.01-2.07-3.34-2.07z"
          fill="#424242"
        />
      </g>
    </svg>
  );
}

export default SmallRedTriangle;
